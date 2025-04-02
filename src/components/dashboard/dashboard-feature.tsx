/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2Kv36sET67mXsvptXj1CKtWfpMvh7uDPXXunqaacdnWnxCXrMQU7mPLejkr9AZLodaYbe1EAfgwsnaDBakrftyZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37RUvrAapaUyBmF2vwCwqMaheeJMypy5DJf4niQtxcqqCyy1hDGH7P1sL7x37aTnJBXe27SZMn9K8odvN6yKMPV7",
  "key1": "2RfwaFaqJujPccUVHY41y6vLRwU6stoUCYG5juDpNpyFMPZiB8Q9RV37TiUpaXeerYEnUf1BkCASE4UtYXwyrLSL",
  "key2": "2ExNEiiwx42GDLYqihLuPtCXgaujSzaKpFwzNX4SmT6veFqq83cAyYZR32qfm9XabcXuZnZHJfPBcixRqbWZnMdM",
  "key3": "3YX5NgAVCXAxnGDKrzj29TcYLs7FEnadeL8QBFBWunPyvFSTrzdcrRsDNtZu3KjqLKi6VPfyqCdzrsoHt9udQA3K",
  "key4": "2LUF9E7h5VBGtCr4oWEKmvvzk7gwAzd1pR5ppr2GHUcgKEES25xuzEp9o74ayNK4ZUaBqGX6Nv168ksE5cFK9vQf",
  "key5": "5rVVb3SeNvm1ShjJZQTGBaf7ZaMjLPbRqYU7oXNzjgt2yaknSN9JBDwqqS7EKa3cjhVgTH82p23jDQ4ZYeBRitqz",
  "key6": "AjeJa5atQ8BFSarQs8PwgwRHUtHD8UKogZADDR8AauAJBmjBmaoATrX29QzS3uL2PHe5xWbhPT5S7XFFJZHTcYY",
  "key7": "5cmPLkxVxSZcdEYuzWyHugAiGcR9g3LwRkE6tGikWGpJQ56NwxJ1h9r5rbGdQsNL4J4AfhfdeLepwbxSCUpp29hC",
  "key8": "4N9Ykcn4fscfaJ5iyfWY2JGHXZqDtait7UGbrTQLdYqqcrvZDWduVUwF5MpKAMvBPpL2L7VNAmhLPZLHAA78Jige",
  "key9": "3FczzbRS1DcMDQfJ715WSShiVC1vLHq5cupA7W8npnBY73df3R1J4hHPzvMg4K47BbUPFNbEQNmrrpBG91aYaqKK",
  "key10": "2wpjyy2nbT1z5gNZ4FHEQUNcCahrUCacHAsBeLnyz3SbL6DvaKxJnx9tKh1YpVQEGZrnyJG3ucZVVEXEeRL3hbnd",
  "key11": "3jcspNE6xasTMc3CWLarKRxsqXxMwLuPCHMn6mtycF2E3TandLC5C25VYY4pq11tsUGzuXM6FQ7oVW25Jq6iKo5a",
  "key12": "2NcP5oqAHZEDDfT64ubLk6SsPu11mCJJb4TakcUUH2m1DPdQH1W4qJCs4Hwcdj43YmM6iQVLhppDS2gcJJth5Tio",
  "key13": "4FcPWJ5Kyt2eVQgmmmipsSKdHQR1Xb4h6JSzzyQHj5tcNe1waAd4me2qYEqJNLeP3YFafeuiHbgq1qurTsfo49gz",
  "key14": "3LwVH9fcFAK6eLny14qJZFp4tjuNpnjw8uD3JBDMyTMvzZq9nQVqrqidZuu6L6Sy4hFwFfz3zdPri2ZhkAkANWwp",
  "key15": "5mPrCV3sGUnESf2UbS4EJaEaxsSB9CvFH5uYmaRpCPV3pnonGJ3ZtPknNma9WGTGBS5odar3LuPwE1bM31vVpznh",
  "key16": "5JBhs5fxTkCgr4jrBcEGgTCGwrxzVFxBE4oK7kieCMftKai1m7hLsogovA4nLreQ5omttJrjwfdE5bJyVqczM2Ae",
  "key17": "5HWiPdtLJ6gmAJe5qtfrXiUDGZgBi5j5qb9xTBh1qLEt9EWGL315aGBAtboXYDtrf4Ui7YeZjR2vc1Ydurq7za89",
  "key18": "rq3uLRJWmbnv6EbxVLVi3a2YH7EV3ryfxEDRHmDV775y5bjYwgaRkojMmCQ9pd9FKrPW3qe116ksoWoeY2DGRfE",
  "key19": "4V5pGS7yXkbreay1uZLxL1E5w7mfys8jVhCnreZiP8gLsU5dorGs91ydsfsqUjFdsSiDyoDoJWZP1LDu8mMmsbSu",
  "key20": "2rREoVPVZACsFCWyAnjefamAjtLhttMSxwmrQjVJetfbLbXdtPJeajv5eJUPjW6taqGsFEH4DnKWfbmuHMhEfyuC",
  "key21": "4YgT6kC3G51XCgbHdx1CjmraJPDUFmzvZkwsZ1n6RgbNf2TsyBGDY8YSwdijfAaC9H2eGc9pmqZYrgsXuSgN4guF",
  "key22": "5ocF9vmBmDN9AYM5F6xKz5PAN7ZAtH8GLB6Df61ZdFDryYwJBXz6TpFaLASe5i49ptE8wrgGheXpXqoYwbojvvj5",
  "key23": "pywSiSFA1AasnBP9HuMQdTgSCS4vMy41RZ3pbkEeWLEbR7YbuEGHHqnYER1kK7PSN75KTsURDeVVkX7fzt3xn2x",
  "key24": "283YBDnq7D3PSgVCPNsPaPG4b9BKo7zov3senJtWm5TdC5xJ86UFcyKGgKeREuZziRjNrRLNqK52rKjN6gmZdrys",
  "key25": "216nQAYFuK4C7Lv4rSbdMeLJmMt1bXfVdifPvYbqQrNjnQ11FBjs9zA2hPJDj2jkQ978GgLnDGP1YwR32dejzDhw",
  "key26": "2e6UGcscSQefU73A7B17Xs2u6BRXYJgdMNzfT3ZkKr9gp4qonoGyzx8Cct3qwyGwRbMDFpRmbsFH3KBEMbpikZhd",
  "key27": "3TKHo9QsqfPXKezHf5cCh6kEZwEutiwNTCb4WFA3T3VZTRDdZF2SFbuwJPyrMKGmjqQXxmkp28wjp1ozL3VykPQT",
  "key28": "33NF72bMHinrTfzMXf8fx1hcVDneGucsVY9qHMFNSMYEgTKWwXDAnYdm5WsVcvK1CUX777gesR5iYsU5E4SBraAr",
  "key29": "2GjYfUftxom5w8KE8zf8in75ni7Nv1YmNbRupTvgZhRewSCsd8XRsbQJ6UwFCjhCCiyqV9kjJH3DJmc4PtnyszAW",
  "key30": "PAnmc2wuyCBbAcLsMFgvRdJBcjLgUda9NGWTM5TVWRdgCMtDxC2rB34iMcRt2pBwe5NNgAkzFQmdRzGX8xjsBPd",
  "key31": "5hE8ombyzFgdGuY2ZT2ZjMPXnSyF1N31XsjsmbnebkgNCYoxcvQMSQVfDbaG6fvfYT4VXspFb2m9FLJwCVCAgzrE",
  "key32": "5HCYJX3ZdBmcgoLh8ZwsfAtDBqpRNfhSiWHv2Ef5espUVJE8WwbsP8Tt5NPWX6ZjCPcfBpYb5oTkmMqyftQnkybH",
  "key33": "5nQZCTj538TCZKJE2sN7FMB45NGAWjFvtdm9hwFBip88skBxut5TLg8HvtHczcdYTfFuJDfRLA9A1CoecWSgqtv4",
  "key34": "RQHXoB1qANJL1H3gCR9tbi8nk2jQHs6Yd5ccZnU4GNBh4exoZXDzad8APEW9rdTPbeqvTyNBDYAPJVqM89w3SJs",
  "key35": "3FmBDeLs7uXZARe5xA1MuxfEWLVjitdvgi6xKme1fvXJUsQcDaQyhzzgzk7SCpmttWdHCyxC9kijdg2n8c9dQLMB",
  "key36": "4QjHe2p6ynWTULFAEBWJm4yUDhSDzZyy9nULPoiB2dRzDUUjiWWjymfDBF6Sjhz2FAcVWUCsJ1ESVVrHrxcwhkVc"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
