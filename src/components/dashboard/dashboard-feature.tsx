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
    "26vxHgiiSaRREo2q4GgJJjoxSxPHTxyXzMNfMLCQSUR8F7nQVYCtswX77nXoAxu9XogW2Mjkx7nZuSxQpGMfLLXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v39mHpkZE4ejNRa4t5rYtjDaJ7EmVeTV3CkshPfe1hCVKZqjkD45qJdtEeaT3gJmKEiHv3iukDajzpDKacBmALA",
  "key1": "f3PXy7NocpbExrDVzAJ9Ni7AhLfGYcxjgEhMUVC6FKK9tL6VggRTFZf5N8rw3Sj9ECohejnoKEhPNENp4f6vZb3",
  "key2": "4iBVY7CHJ4Efctkw5EXsD8LZ6U3aA4Jc1fX1B2Qisq6WXeM1oYBLKZ4RdAVxrFqFiq5YL68jTrFkefXc1bb33YRs",
  "key3": "2x9FYL5ScT1qfWDthiSwM1d82uaEsmXoy9R9jW6Rs5tW2wP47J4TzsnnKaVjAgYTnR9CDBMmTAiQFHbXPcBowhvU",
  "key4": "4iFyuvYNSZTZ4kzkNbwoyy98eSGDfMyG9EtTYEmsFoxMxK7Wtr7wywi6ZrmjmWHGykF6UTHdnyyM77QKygSfF2en",
  "key5": "3By6Kcvij9fBS2xT8mfCBj5zwhL7nupnaZiTQJFvaDmhytLWLtETDQPYkKu9t22Sq1sQnQuZy6KKivs8xZ2xUCMJ",
  "key6": "32a6bVNccxoP13JLf6ofr81Aw27q4A4NWLBUB7Ao393dfSrwZgJ5T6hVXdy9qBDDdNDD7utvGFswrRkJxaLf97or",
  "key7": "2yJcoqdayjQqJSwvWsNoUN9dnQk5aFN3tuvmRvETitcXXegakNk4XYvCHBE5VHcoKKifqRgXKKn7jQEc4wDE3AJF",
  "key8": "3rcMiwR2v86LX8JXcSFvUHRtGt3kRqisEFVwsrXbsFy8jtmuCdNw31291SQipkv48jxT6h8X2aW2DMHcx19nJyv2",
  "key9": "4oKHQt2XM73UfQkvUXFHcWapj3SCbVfBAyzi84hY5h2oLLe2u4pRffy15CPwzVar91jYTs4QJx3M9bJqF4FruVbv",
  "key10": "2rwSva321jZurRU94brBRMPq2wvg6uYpwwBwCEymhTi53eyxUb1Rj3hdP2KXkkhhgTXWpTZyxRHD1fZ7VZ4U3BuF",
  "key11": "3JJeuGxggQN8ArUSbUUNaZzeiYSUHsiU8TwTXg8Nzrqo3PJ48UXaHzxb9KMqBTXBzyqfVYqYAToZZ4EbbU3vvtfD",
  "key12": "2rAnCMCovonv1PEQajQ8fFp72hNFhvYTeNu16mFDFKnNYk8q33pKW8xVJiJXJc2tpwrunbXnEpjenxHsGcycy8WY",
  "key13": "2LmGxJnVvWB5kHuvHPKeqw4VRK3vzhZk3473WfBBhMFqraAreDFCoEgHqqPSPeZ8cHUaAc89uJfqNdrpHi2tMRj1",
  "key14": "2j87mDyf1hfvv3wiqBE3Y9uSheadudVM3GrSPQmMbeATSsEAfuygjTYdgAb5sB5B3SMTd9QvTPVdogJvQEWsdBSC",
  "key15": "2rfska98KXTKYUFyoBgc5MJd8RSxtw4mQPoQKo45RosWZUCmFiYPo18XCNftsyrzfAYuX6B8iW41oYK956ekSEde",
  "key16": "5ofpbgYBNiCn1CDsXMNWJJbZD72Nb4895B6E4rmcVfd2eoHcTbuRhMzCVsEzsbPr3yV6uFbb7FpfAG9Z3zXvmR3z",
  "key17": "5mxeuN3Dev98GE5q7RNBX6FMdviMYnmzJuBza6VnFMReURjXGXsQ2DnPPdvHbjELZHCjG4CEejAuGe6uTvqY7VdA",
  "key18": "jMdD6xnTjccrddAFKiPC3A3ig2jZ3PrXmFt6EPGa1zYdrxZhpacCCq7TwVqo5jsdJEiwYDjiAGzt4axGkzSbLRq",
  "key19": "PFuA2cY2Nu2U2u9ynEVM9YdhC7N68QwAnRRPep2x1imDXHuh6Yarix3ay3k43Vjz6JtMczAZKSggAF5xQ3h4MHr",
  "key20": "5c4io4nNjQtac3JoNZuCvGsicRzP1GHWZwHaFQ43JnNuFF5X7tEaxSmzj8wDU9Dyw6f8dkxNAefiisDCtBce6B19",
  "key21": "5vokRsFo8nTCv5Jy6AtLSHAMLnpVscobdqk13hrcTTrNqHMqWFTBPaZRLTZi1vcfbWgjR3NZWgCtseZnBChLMwKz",
  "key22": "2pDDrsQYTPjmFspvRe643ws7yN14UgPxoKNDdBB6KLi14FdHTdXFb97aQ6drt7wy9BbcoR89s8ETz1iddMbJY1FY",
  "key23": "3xUTmmoaG1wiQBxgdWKCarMHxLzsdaRBY4Kb2ftE14MjH3Go7dkafMpt7HkUgZich561yFQGw3nJoFXCkBZEZHSD",
  "key24": "4djf4pKmaTkc2a7dAqLkEV5ZTu2UVjvUFk2Aq4RKu8Mo8mZhiJrvgJQKtcWbPkQ4se48BL8hxfpWRxYakeoymnt",
  "key25": "5o8PgGoSuuKV2qiZu73szjba5Sj75vn9iJSm2cwre8ht2BL1kZb1higpSEZViR5P1VqaRRFQ9was2u6KgibDDTFc",
  "key26": "4dQirGZuHBEVeK4uAdKDe5dUvzuNFuVaAn9Kq5X5ShzFpTeDFN5b2adQNmLZvFGdJ6bXQ3TKeYk6eM4dqcEyR1ks",
  "key27": "3R3FRqG3tcYMUsigvmhtX6V4vYhnzE7DYrt3xjktHpoiEiK6vajRBk6xh1Ana3KtTamVGwE4tmEvQr2oTVMzpNTi",
  "key28": "4vrXdtzpR3oemMBn3LNKap9EkE5jN2YvmPxwyqkdJSmV7vTw6Ej8HLaHSC3DVi19zzHSpp1aeBTcmCoXmcGW2iyR",
  "key29": "uNqEbjvvdcwhDtxcZr4bLUAvTZLiKNygLdS3GMVhG35A7FhnGVZPWcn6iMEvsoFv5aCAEwHFkMYPk7wkaZxZ2vL",
  "key30": "9DXVDeDH51PjyTSU1BePTmmeacANnBfcUQ9fhz5s4pbCQUydVRmLJ5MxQsnj5Qkjf2BDsVJMwYqFZheKNgTe1qt",
  "key31": "5HCYfWCD1mwxZhG7t7s9NW3RAcwY4pCvngxPFdptds5141JGP5hpkgAPsjHQXpT4nGvPxc99kUdfoVKwqohW1Vtx",
  "key32": "2528Z9KG6NyUsKdjnrsTBYDBFovwcxsXSQP2k335j2GgFD58BfTuzkc8ZKtpoMFvKZ7BLBSQozf98VhSzvdC9qxZ",
  "key33": "9J2iBycnzbFzb7ocx9uT2dmap2B2T5GzDqVR5vbwoKbFgjqEEKSATkceHERrA2kVYHNk5Tqi8ZAeDLoeNdExtY9",
  "key34": "5jHxceYDjv7jFHoPPK5tkknRXp1bVFckt9qfqZMhgLTR5ippHcF26Wv6NE5Q81iUWqrynZ1Up8FfCAZYH7US5YXA",
  "key35": "4PNMf7JawooYN34HBm5hvpM1Td8ds4PK1Dc7beYCcqwEZQbWj3Z2QDUGmh6MKVKU9P63JtaZteUvk5kzxu4ymKYw"
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
