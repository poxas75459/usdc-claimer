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
    "49pspBPhFSyCuZxyJefhLEdWe2N5WMPVRgR4Ptg8drUgUZJzxza88X2fsXwqS59GZMNp8odXM4DeCKP7WeCW4bDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z3CDNy8iKoAqNyzpGa6npfMuRTB1FADiKkjJ2NByXmpRdxKF2xmWSD7XUZ5bdeusmhS4Jici1cNXyxhTd5qZ5Pi",
  "key1": "571b6iC3QrZAzmHC44xGp4h96QpCaCmqK2XawgDmkkQRB9FSqvuGZXhd1ca6DTyVD7b4kZa4PmokBF8rbdQJXz4p",
  "key2": "j3hnubBFwsfMYvSy7fLmgXMdxv3L8wSyCTPTcRMsY9USaPJFWxEH5PzbCwrfdLcXj711MCik2jWsrBZaKcADAQN",
  "key3": "61LdeAuViirwexGpAMn7usw97Hh1STQnBAEpwxmpKbLWgubHCfgF933KHkK4img41HoJjyBbEhuHTbCTS2v25JVm",
  "key4": "e7tBB3AJWMPLiwm5TeV5BH5Nbyis2yRvA1ZCVL8xLWvKeTV65MmcrH6T2ZATz1Ct5FXKYsg21Mrdao9KngZXEUf",
  "key5": "4eoEUV4sRQE5W7xPPH9PWuwoT5XqnZcibsX7RgCunyvEepFEECdqwU16hTei2EyyGQokzoGoqYuSaoQLe4obUr5V",
  "key6": "WhxJaBrKVoAHijrVUbHeGGtuwcdRPykRCzKuw9A7xxuRbiWu498Zgi99v3TtAnmUZrm7PPRZ9YTE4xW82u4qLs3",
  "key7": "4QTy6puDXR3cX256M1R9WArpstT8JPFBF7c1hCyZsCsZsdRewSt4BEtL3duxjzrgtXq6A2mw7JQsCLnRow2tqa5m",
  "key8": "mVTA6WzLSWhcYCTvHyLBBFF7AaDExLPxmgBXYYKtcLhBSzbMgx3HUihvJreE3oP1sjyZSnu7GMMdBLxbauXs6YX",
  "key9": "4R3apgenyzznui3cbVvJPbjAFxBEuKt5fUa6dPU21CJWmTeTNdwmiN4tRu4HRgvWkSxHu8c5DXr1kcZ6yXWyaUum",
  "key10": "3iC7KWHCMAGt1Lj3dzCREn7GJT1KKQVknhAF9mcHRTdzKsnhJiELCvRDGYguEum35WRVsUTYQFqo3MqHyoVAvZLJ",
  "key11": "2293hB2hkU9TAd8CJqwRRBjjL3Hub9L6zPmsaGx2zj7h2YTmEttPJdLNjrNieFQZjNYRGfdftd3idzw9ev3vzyop",
  "key12": "573x57T6Ms9EATGriZs85LWiNLSWXuKXrjSSMdGMNRWtAHFF8hffT8cN65q5nnB4Fk7PS7EputQqR1kWCtHdVMmr",
  "key13": "wYWvwnQmiUucn45AVFhK3NJSayMLVCGrdUtJ4cWZ1kHVs2G2V5BFQtk41ZVPKQzNCDo8ZxuDVTm533G2QQuYtgg",
  "key14": "3xsUWDFVSZWX1QRULnuJkceAafPLpcWAbvKRZXxoHXm8UY7wufTQkqUsdmEeGFrDvEzAp22gMKGR8F7KhAkADhwY",
  "key15": "5mes6X8vuTd9iKEPSKCfVC3HKvm1i8qnbbc4BWzggLgCcrTGNPHziietXZcmdHKY5Ln3YKU77Cb2yhHsQofpZ1Tk",
  "key16": "3NdMSbPxxWnnP3hXGvtTrtEtoHtFa5CgxYNZGa4VxH57mCEA6bLGoY3RW8iwvzb7qFRrx3LbuZA1ZaTeLVRuXXcH",
  "key17": "66BmGEir35z4fw1MMZNQBkG9BHKuasYG4T7EH3Y3FF3EYax779qbc3oM7qWSjoj5xG9x7uDUNg1T5V98KJFHpkhF",
  "key18": "mDh4EBgm4XKuQf7ZVnEbGPXA5hU6w5baHuYZiw6oUton4qU7DkAFaMRbY7c7ZB7Hadww6pDPtiz4Hk1VSNWsu5h",
  "key19": "2HKuvMVebj5i3JERqxhoGHbpLSVc5FGbKZ3XHSwj4JEtoiqPn1t4gCU3xyH8V7mPcW4MTC2p57TguxGoXvocYLkC",
  "key20": "4JhyUrKBmfmWEuab8aQRC9ajWyHRsrRBxKzasM3pSt1AuakiyHGh3BiZNtSSYYv6spr8yZdc6kuVtDYaBZgc1v5c",
  "key21": "5FDQMRxPBMowC81YfMY6P84pnhEQwV18whY2L1JQKSR5W2WcQJzGdRrV3qJtHRUm4RFZB2LWmJ4iZ5P54zjQcpuY",
  "key22": "4ggVpPZFvFiEDRY6TDB8yUjJLokKAHQpb3QxQpYvTTBknHRCERFg4Vzw6aLTw5yfbdp4RRH6vVhNQLgHxcuKgzu9",
  "key23": "4SdXXfrVZpwAMCUa95oyULKbT8zNusfDgVxy6L2AcAsJchxjmnTGci8ecmUo9Nr2wMhWrVL91rmCS7tBR2SHdRAz",
  "key24": "3n4tuMKzPX7wGYLTBujNKen8kPZ53GifK3K9knaGc3fj6gbUtC5mjyS1oLqAgmejtHgtPAHM6q8BZdu5dQNz33DY",
  "key25": "3sRAuyzntqGf9mqd24idz23FbPc7Ddu1fxcDepDKiPEhe2PvnTZMLarhZKnxwXLBaDwYg75g17XP9MBjTQB8XARP",
  "key26": "PprD9VDk3Ar1MNBEX42XckUYXf26NG98bshpXT6CPH5c6nsxUA3HraP2Hsshy9mzTjCJAbNvJGM2oiW1sq82ZLe",
  "key27": "4kVPAQZY3AUvZmPxFvrXcb5oJyMhWutiTRnrQxg6Hg5V1P1Dqz9H7URSXeUeKQBDa5htcZdKkn4SQi2ryvKnnjrh",
  "key28": "2Xbm5T8FrTMajPPLY4pPkioAYnsPTthMh4rHkJosys6UEeNFG9e2CVZ3sPgYfhnE9b6cgHao4DTx7caTpdSR9hGx",
  "key29": "5YhAWKTAwJ98YPidpA7bJN1Ncy9ZDP4QrHqjmUAXi7G898aA4oawvEYuEzj8LinUSxEsQYk7SaYPUhUDsysrmn2Q",
  "key30": "39JQJJuRCh75Ypa5FV5Lk1gn1j6APwoonQcqXJtvUSCPi8Hvp63rTudBFogBHXj14TdrHePX4pkxvXfjPTjVWWJ2",
  "key31": "2AyGrX3XnwM5fqjqcQCaMr4VwyHFQhWfXX98amKhYY3Ltanmxs23bLahGvKGVLa6ZD9oU1w65g9CKpiwsDLewFcB",
  "key32": "3yk3weJ8xp6wNXN3kgGjCmbe86PVGUxjV7tQHbzPbvfQavC4ctQjPnhWiMxUD8aKoVpkmT8DKqySLdvtks9YcgSL",
  "key33": "4SzSmMZNt9TMCccnEDJJKiSDFk5eeP2ebHduXBHavBmGPVAAzwuGgNbpVVJCho9R3RWLiNkuMmHPB31RRLnMoVQ6",
  "key34": "5WqEf3VjP3RUVA4Ctmv6uHKKapniNrEyf896gvfKHJ7UwX54YNYF1a5hP9gJE33qkJvwnjaoauULdEsJvU6BYiC",
  "key35": "4Pt9DgLpqoez1DnHMG3aVJYRVDVtJPEmiyQafRu74BC9v8jkiVZJhETQWBMa1FR3igytfubtSxQnrEMWkTAYYjMc"
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
