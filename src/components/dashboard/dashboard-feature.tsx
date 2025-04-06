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
    "gdQULXT6mqSdRChVtzdF8oBMVRDXy3cE9n5n8GzzL76GpscvzEPUh9mCVrA4zJ6u3pn7Y622GqPneqf11W94hjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DVFk7ZDhFh5DxSn6oWTa6D9qiZBAXTxwGdtCk5tnRjhLRzC4n8ZsqBuddDL3fQjmcMvunTiQ33iVY1Y5aF7u6EQ",
  "key1": "3eD7BvAD5UT8tajkKZGtvHbTH1Azde9uzhagMEeM9jTzR8FKrdMVCmsgVrm9yCLLggL3V1299EBUe1jUsdeiqKqU",
  "key2": "5UhndYZwU8uKmEaqPRZLnFnXHJfopxwkGrC56UNj4wUg4ZHjv3MbMy3muurfRx5L3hkUuJrLkVEejwuQknXzpNSp",
  "key3": "gXyr5nW3etsR8BcAhmJGttZwDUiBzQc8mpNwtKkG8GBPd6ZwTVCN2j1PBb1svShjzCTJTqTFEJJtnNivaGaxk4Y",
  "key4": "LewsK76hbmy4qEprnj1sbEbhdj4PssiA5QDG74p8gAC51jZWrEyrXeA9paJNAbimWsL27pTGk6F6pWoqx2iXonW",
  "key5": "4PVxsx7rikaDhRzrpYPZWkaH9jnGQP7nEFKr14du2WuP6hmLpKwQAPTdRpMdLMuqXWhgYQaeoBcBL8Cyaf5nK17u",
  "key6": "3GaepkAQxuqUJ7P3a1UFGQ5RKMZdrAKDscxgXKoZnhErz1j8StiPfbarf9813nHi6ey4zzVofc8stcuDLtjzpdie",
  "key7": "4cTrDLjdXWPRQULE7vtvUWbDUGUAi7ox19jExqd9DdfKuPuVLHe8vGpFpq6VEF8BUYyT42oLvJqPmxWDZBR5TD44",
  "key8": "3oRAatv17ub97xhb3ELSq7zCFax3FKzyutR2tCsz7t26W8Zks3VorDsHikqnksAXSZ1KziRktmidvDqbjBYhbQaQ",
  "key9": "3LH6WWbjYiJiZQd7HoNUtVFYrLYXsE5nRseFBVV2UwDjeWnK5cQyZ3iSYSZefTpqxasvdDRnPZSpm3NkDp1LDj8Z",
  "key10": "4KWozdqPtUdXQFJ2EjthAPRJ3UHsWoTbLG39Y2q49HoeXDPbcKMsNSX854rs9KdRhRvYSttDn8S2WBBpftX6Patp",
  "key11": "4aZGDXUDyrJKe5pARFRd9K1YzNGf3ZsEAFrGVK8DEiY2EN4mQ12rG96kwdkagJhg2v2jWSsCSaqR7WnxDCgSZQw2",
  "key12": "pDDxMcD73sgwYoR7bksd5dQep77xR4zR81Xi8SWKpmpqduXnQND5JS7zk6CxAWNBTBTaT1NfJueChnQCetGTc8U",
  "key13": "5NDQpXYA15btPEwNJYACovNiND2K85g77VuAcnBo79U8Jwc5idq65eHqf3hp34LesVRgeVGxAyazrGcApzwX568E",
  "key14": "4UsDxu2SPoNQnjtSXkdGtjnpC5my5U43r7qr36AxkpF7ELoSjizbcDkxi81i2gc6HLUXS2MLmVzPohGq9AjjD3XA",
  "key15": "3X3eSoQsVPsu5DTPxT7GvTSp5ksyY9qLyhtbC3Vesh8x2a9EySYiH8Vc5tCA3RfPsckAicdGyZjRmqJnGSdXfv92",
  "key16": "8vzhHusMqiVpheTwNADKJwcRDJAFDfNPMK1x1FmJmpQbPbKfFeZsaUQkVs5JhVBY5fmDsAUecaYgp2CgEkdtd5d",
  "key17": "4XghJEzjhkjNR37ZviWbZAkRyAXNX1sTvKEr9Dcqf1ArV9znfBV53vWyTVLPv9vGmPyHCEGKgYvpoha1cxdkRtSk",
  "key18": "3HuSgcMeDqVJ74DStBtFVFzZ5cKadipvqBHUEpBxUZA3GRyFNttVDrAxUxzVKws7oo1jS7Lh4gHmiG7XQ4vr96hB",
  "key19": "2yvrqzZHFiThbtvcx2zn94Be3nnWJVbZex9WzWRMZfa3THYXCpuiSbX2jpMExbT3xGqF4QSPnEN52RhP2YSUTRgL",
  "key20": "5kLaU2KcaUuSTW3YePdCyLqnpT9saNiAm2BtLBBVAtHRbGDNZz8qu4FofNtLHr36gdYqvG7FusXkwtwkAnjqhLno",
  "key21": "3vH6oMTmAm1zNhytzRUcWyhDTB5ujbgXURTDQevYwmKHgNh2Pd9kkoqFnbK8HRar3Xeaue65giVbumAjkXDS26Gt",
  "key22": "3sHGPpgCXYF2gTbmWX4oGKdQ5WkJvSgSi5F9DTfGE3JMZ83mDvaWWYCDDGjv7s8gujWoe2bvejzZkSx1rEXyyj1x",
  "key23": "5xkvtuSpSq6tGhRAXKtrGvyFvR8SQurvd7WfjRHo7CK9amHwdxCN6GKqh1YZ6AMpnAJTZ4a9iekVhXmNRCpADcyc",
  "key24": "5iMcAEhQHo3vuEbiyWL1iQzb5JpduAwYwLJD1F8kcCa9MzaaLQu8kGj5DGBVeRh7kY8i1t5B5huoLezRxYD3JEwB",
  "key25": "3V12seY4bnTVrDa4TVAobQEdJugC2uKJu4Z3LsBypUskDwYXyQAxZKQzd5gS6TQkpJARv2MUt622HAUn4M9Lv8fi"
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
