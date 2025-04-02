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
    "3w88Gmear7kHahF9kZfUpnrNwFegTPeYeNRUNUyAqxJd75bwPMAyheTA8CPQ78YjSchVsHf2BEbicBEuwcyaxYTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22xatNQ4PYFvzG1Tm6NcrmEB9i9qxJQzx47RbenqoUQmLr3Ev4shShK5dDVJCZY5pYyXin5YxuRWY2qhQcVoSxSK",
  "key1": "5MrU5xXm4ZsRAGHCWxKaWwmRXUMuVsVMY2JcQP9PoudGJXDFvgRPZ3cWTMiUnWStTQzppjzukwnz61svsP92wJJF",
  "key2": "5KvcjoL7cxWkN2jcLHoTrhYxywUHpXBi11oMnA8nVnLShCYSKnwd1XqVSZ7NBpjQfpxCyxKpdTW2rg3kGchjjbp4",
  "key3": "5Rou98MWHv6GcP12XrTdYpDQ7AhZqBT7KKWBqztSs6vUQNDJHb48SaQ2PzU5CDgSFPYMfxQxSSjeVjB1WeXQpTdV",
  "key4": "4ik6VrCqpP9YGKRpt7sDPUzHwYk9LoKH1CkxUgtDowf9wmqovD6VorSxAF5AXCRYKRc13Czzvqaz9i234gBQeNQw",
  "key5": "swVgRFyfStijxRAVFhZiTdd9CGwmXaP5AN6dtv6KPTeRHBLSkwc95keGdDe9xaXDEbLTn27HW6os6Wr4jNTGKqe",
  "key6": "5w2U4krtdpSGAnv9hDPvW4eHYQEvciQvGfJoihn4feQhQgWUPsRzTcWvvwkjHc3nqVSQjJuT6uZLKddh18Ew1KuY",
  "key7": "4UMkBUEDCLycm6RnopwuPnGvxYyWQEqgyMgMqZVBKTkMRpwuwE2FfUDCs8PaawTLc1EgNoPmuQtK7CGFyohw3rAQ",
  "key8": "22cwEkRd7ZvwND3thnBhDokY9upQLtX7C9UjwU1QYdqopCrfUfestVpSSrcRnH23PhYcP7JQAW4ds6WFHBmL9rmW",
  "key9": "43q5chqNeRq9MihJ19KQZV22eJyfW8v4m631PnyBtYPdDCd5R2VDcDsbeTGoNcLeC43kL2VdTjXFXmxHcqiqREHi",
  "key10": "bVYpXWyQd46MDG3BFdQBuwmRqixHsruUd8CXjmLAfGvWjFHaGSAzMejJN8Hb2rzkpvKui1pMMfo7ir8fNCW95gT",
  "key11": "4MDXYs9ZDAfjtw4DZBj6E2VH5iUKUSPyvArAMy9MWLeyz4EpArp5JgA9LAxKm2FARV9MDBLWxBfjc9vJSyXFt9FQ",
  "key12": "3ENo2HEBWKpacQeM62qcB57bXCAVk3hEbs7ERc3TMEtficjd7D71zgRqPzmTCbEV3RUphdAbS1Vp16rPJU5nrRVi",
  "key13": "4TUV4ByqUjbPgDkCokqPCQVtEsKazN8nRvitPBzQbCFE8veLLf2woFP1WREn5QXhMpjXLK6C9F8D5q6wXewAWG7p",
  "key14": "4nFnj4sE9EwpYFzpypEyUsTgetHBgXiGVCUHw55WFMRuDzsbYsZxpArUpMTKzrNGLXSr5tMgtPZNXoerGBKbj3Ck",
  "key15": "2ffCaQGdFx9Dj5btcGD9dD86jAyBM19umSARL7XFGXkWzFQorKuwLkgKcLQAJ94ZhCfbyLdknYyx8vsxtmAPACMm",
  "key16": "3JtrviB6fTYecqM15AjKSCue6rUGXQjvnJZihE4m1nEkfPFwCTxaAv7P812WTeFvYDRmSCiSEcpbgGH8x1zfynRX",
  "key17": "3EuoKkvqT2dFSmrFqYS9ThrnYj6Gvsd6bxZ5gqrMVDFkucgq3m5C2gQrBf3yrY5Gv1FJJUgCRxgb2Rs51KQTGQuz",
  "key18": "5CWBBfwWdH4co5f9uBBVNMCsE3z3CcRqAB7wRF87LQsdPn5Xyqtp9rQfpYnM5U2RXJ5xjun6FW9owMnPogNkLHwz",
  "key19": "4SPp68hJeCLYb8rSaHeqKksvkmM9NQqWNZSAgtNGKEo6B7weqbMD9jGkP6qPKPDatB7jAWnZ5ZrHEKrV212xRGjg",
  "key20": "D1HkDASLeUtwyBWYWfwTfeBhvsujruqXHqYurTL9LPZHt4P6cutRovm394FPUb3RUcbJiyg4ExExh7t7aLwCpPV",
  "key21": "3Ja3QxJ2A2FUMZER4GHYLC9RCfhbu53Ek8Cw94We2jdQEghA8rfaw9PWs7pUEMA8eBvCZ5wYjWumegZqesrEGwUN",
  "key22": "4kar2zyK4Ljo4pWiWzKX2rLZEfzs8xwhNKDidyVLGGFH5jZbxA1mjLfm4iidysn8C5dKX614YXzsmnJGMYyps7HA",
  "key23": "5RJX1R3JyBswN2oGRbnTQS6ffUSKcbRybShQT3TrBgTzsfaj55tMtGnrkqrcSz5t5UtD3ukCCtRmMEuPwTFoo5Kt",
  "key24": "5b3GVj5C6gB8bN9XyCiNyMJ2qhpXdGK3812yBmoJconFH4LquX55E1xhe6TyV3i2oKsi34ngbWZCAUsq9TbFAd89",
  "key25": "z81YgGSEUtMuLMY8s4qHp2KpUP3sDJTWjLqnywPcRLdy8pJKP8khyTo8ZvsvJsbcauDuQgPaH42wKycRE99WZcA",
  "key26": "4Sq9e8wiC3XDXkNQ1jED3wPondbE2zezcWS1SJF4zMdXBm72kLRg21MJ5CWWE7gdfynfiVUBwXun2LLEtmV8gmct",
  "key27": "5ZNNxWpXmTaULVbc9MjBarnzmbhwy1YMxaCVbxTEbTH15EQeC25orrAztRBNssHYsZDNsDroQ58RvpDpbn3a5xbM",
  "key28": "4Ns5g5eBEhREJXZRggbPw9QRBcBPFUfbvNKJptUTfMGT4EKzZ4hAVMqKjNdWZ5pZ2n5mpVYasxNrGh15yP4WgJCW"
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
