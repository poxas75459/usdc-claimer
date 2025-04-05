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
    "2wdkrhAT3WMxqXwS6enK5WYgTp9RNFDeVV2Uffut8TagyN8CBPiPVDxjr1tbfpfyziXzrbAZUY8KSzAbyfhsam3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fV6HB4cc8A5xZsZxA7d3oPecYmENQmoawbRDwQHYZasg9oCi4bPeq2aB7Nb1QBABVer9gwYsXoi2XZDybcUkXFT",
  "key1": "4tkWmPN82DcUs2F1w12HSzs5MMPHEG8goX2XAD1gL4Rf6SCR2JJStkyUrwrrx2diTeYfvF3sTotfqXMA9ReQBRZB",
  "key2": "598BZUt8fNkgAPNL51Gwpp9rfdYV47koRdrym9ihj9iroCGGXpLAZfNHdnSN7VRTEeMYo6Nos7HwTKxzoA5UhPie",
  "key3": "3MSZshd2FLuRTkCx5zQ5wQv7JCL4LxJtMLr1mfVVyoGRg2qAQjFGmVV5TrNpBNcCgXfN5J6cbjfR9hwfafon9jeb",
  "key4": "irQsn2GWu5ZqnYheDdB1tVCM1iGadd5PwjwYhN58VBfxC1v8CPC1eawsYSwUS8aMMnQjU5WMxnNe6NA129r8QEP",
  "key5": "uaCtm9Q4dA4ZFokejnXTpH6qCmHHfMfHRv6avrt24U8LRBVt5VGY7VR9S7T9GuSePnN2vcAN4sJsQBdDCQUXAyT",
  "key6": "2uSKQdMWSKqnB5r78p6eQKBVxtJeX5UC36HQ93eNssyu5mVZmcECLFhLons6EqjsTk1PLx37JBrXoTbKsZWpcTAY",
  "key7": "42gHVe9j9RkdbjBtNfkuWfGeGtsGRqpUfvmR7KMSZUj2WpYDza81bsZWkAANgzRjA1KdUpnrAdiCwyD62BSaz76g",
  "key8": "4Erzefr2AzDVEEVt9bnYNt2vkuHnR1DGpnz7mtMQPgqkD2YQmDSmQepRKEQUvzhNiQUJNtyj8kwabEDZ78qZrRtG",
  "key9": "5b22azZduzr35k9qBpikVhLhj2WQemjb2iuvhNqGM5ynhybKy7G98BdFT39QJNhXW51Rv3ivZFaJTDaXKBov8HqL",
  "key10": "2ej3tuYBHvsyYM5bK1tcx5jKrRLKSzJEQuz5PTAep5jLm4i67EcG2yY3f9Hy8M8AJhXuBiDs6hbXBS54aynk7Nb6",
  "key11": "4ot2Xga5QC3XxKx5vWRK46xRq4jvdwV77uW9d2Z8WPo18WAYux5XBcKzwzbXcU3exMcB2zJfS7S7FjTXXo8gknm1",
  "key12": "4WeoxN5UDyaDhQR3Hftn9jgeu2r6We22R6YUMGXCLvUF4UjRU8xJHkeVDDYNBtkhBW3rvjAfycbjz1SUn8qRMcMS",
  "key13": "2tjsR9MhdiEVX23ET3J49joA8oRChJYzk8Bywje3b7cdc1pAb8aD9XQ4aC7dTxHHC6MMy1dJoBNFPuAJwYfyjqcY",
  "key14": "9potv273tsotwehPtqNxY9SrfZ3d34jvferPsvcGswnARyb1VwaZd7UD9EDVUsjucnczM4rTAVRYF35VZT43vXU",
  "key15": "LiV9woC72Msnegq26VpArxuwiZY9cUxWsuVtApCxFmc9PRxDT3Tv7a5Fs4g6ZLGxJw2eSYWiyKVTiFLDZPWfikd",
  "key16": "2rC4WdkGovQG7WxQbV6odLLMAw7myA4AotoHBdp53X2tDSSnciG3woKr7qYhhdvXarauaNDVaYqJD6z59Dz72MrR",
  "key17": "4FXHc1sNbqvUPgfEbbbBN6iQ4goBufB9XZ5w8tud6JX4BRKAhmTJyMzbTHmmGQn9bxXvLsKyyEXumyjjK4smH3M6",
  "key18": "37JyVKkWCYQEA85V7NufdNzomiE489xeV4equVshzsfeJxsM8FQ3ExEMcYmcaQ7KgeLS9FX3c1Q7v1g6co9f97Hp",
  "key19": "4WA5wRE6p3bKQS6K1YEW5yTrqGH2Pqzxp4E9qdPSXTbNvyLYsKnR4jjamEqwLimvUAoftnUuD63vs7jRwqJEWtbD",
  "key20": "5YGcrHePDnPB6Bv2r6n9Z2dvaUWfw4ffpMLZDjotaafKbwjG74YGvu5QNoXV23Nhciu85cqG1Bbo6psEmMt8tCcP",
  "key21": "2RNwb1FRRhsCJWfvRXQGY1UzxFe3srPFbV8FmkVJE3R7wYA9qYFs6C5o5ooDUMdPcd1EEHyPWughsA3hMbXcxfeb",
  "key22": "UsWfAyFRkA45gtqKydG89cCayeyRhoKdCJhrHRJAQdVqhxKqNSfoqGTajEUP7QCyJ6W8w9XySjTpJTbQvLNikut",
  "key23": "3Ci57J56K9mUxgz6LNHE7AfTYm8S4SSzbQTWDmZvwu6QzawCd8yBUALUzBLZEPKzMqpKf6ufwe5YbXJySdq9ev9B",
  "key24": "4GcXvjHuroStUMeVygSCpCdy4LxTtpVASczCS6MtAc6vcswUnFCe2jY638t7y7VerLqMdpgTF61CZoV3hPGCjTsU",
  "key25": "3qkRAdcVJkEAuEk1bX6PAnY9AULvPrYGjVNufQRbz1H1GXJX92RXc3TxCvF2iMQEEwJSjc1hutddiMPCaJKcXq94",
  "key26": "n8sbvWVcZAMeHSt3WJB8r7ECQB4zRgZmg6JGTxLTWhocC93NmwAemT6JgmZU6WTXbPRWn5LMViPA9z5nZHakMVa",
  "key27": "25NvbMikkrWgvhCHFMr4CoNMqwq4ZznCUXKao6qThTmmTtSjJZn38s98BB1DQUXHg7Uin2U4MXY2GotPpMfkued1",
  "key28": "56PE2g69GHYJGNBmMU3fU2VJ2Shek3YSuEEJr8m8SySCHyUwmbUy3dZ1GWbKCas3G3r4QhCTBJuunBUzvfRBCU2x",
  "key29": "3acdcdKvN6UzhDDwSW6uAmHuQ5CkurimgfT395U6s1SA8axQjCvTRnX6tVsWQRZfTYjgfvsYc7vB3uJedPBANcFo",
  "key30": "29FDx1H81uVJyysiymyiqAF42UHJvgNo6mc546twuNnrftqkxscDSDQ5g7QYYdff65zh3NL33Td4E91F4Zjz7AfV",
  "key31": "2phgvzP2dUUeYgDsrnhybegzXz1mKc2urEDY6izEpamracqm7FRKBLuhYmYBS5sZ7PvGEAbi8PwGfCT8PXTY6CuT",
  "key32": "2JRGnftTy1ZbA3psVgFTKFiWMZnHWF3PuckHYc78yWaeAq6SB27Q2empM1GbzZr2hfY3QsEuUXzbv6v8U6rCzquM",
  "key33": "345hTLDD91y5Qd5qknZavPpVxiSvgNimfBSz2J3Liayz3LwzfMN9nYAfRh6r8TsyYKSSS8eWPknsQozA2BJkpFpe",
  "key34": "21f8f5VYoqH4Nix1t79DVVvvcd44ESyJKTXM4aZriQP8cEasdbsJFo19SkFo3U8FMFJFdFyBJGZ3CQjYA3w8ZEoS",
  "key35": "5PgCdm87nigMmZeRqcVRWD2VTDC3zery7Hj5dHsp8pwq4Z6sbLSMZLh5swkU3TX3g3CawmwKFwnGPxPpadUjJtat",
  "key36": "2SRj2KWEPjvTBjHwMYmifrH2nNSc49svSytUEUU664cEun3cLJFWFUCm6m73EyvaYVxEXPef1kiqJDAvjkTsvAdq",
  "key37": "66muJxVioDXWYsUVjBvNsGsmYdJr7DCHSk8rmTjc47hasrEupr15YZgg89StvJd74tBYfkfowNazhsLmJesY2YdJ",
  "key38": "3NQdTcsT6aw613bjHFVURMUjXEXvNYBJcLxkYquAXbVwyp3J9gUTb35GGyD3nBDdTCwpxEdSbvGudtHxQ6QMRxms",
  "key39": "FnJWV2X4e4AyExL236TdnmqyRsvLnTmABZaHCn9pFEtdHCPPcSdGBtgbNiXZR9E5AqWpTpiHadmbK1S5nd2kGmU",
  "key40": "2S3RUADFrFzMiGpFRCwwLj6GD99QeVH2fbUcSSxsCmJmZKTZAg8YjNE8sFtMuiL1vUADBzCYb8gp94x9S4Ft21Bf",
  "key41": "QnydtQmazw2FswQgheTHyuX8nRVDS5RNsthkQYt9kisQcrghnhLyyDYs2bP7R68qA79nwg7RPYEPMjcCBYsdb7P",
  "key42": "3AE23WMkufGCwN3piHmKxynbVXsQYVGzKLfhVbtYpe4GKSsNYnkUxYNR3QLbwipRto4wbpz53oJzK5AnSjRWgJE1",
  "key43": "k2Ex2c2MhUkAgRPqF3qqLDtcpoVFB5YBHfZLPFMFZQuUi8g85d2mPt9Kh9ZHDdduSFFqjUcSTUjJZfNvi4vNXdb",
  "key44": "3yPC8Wb9WES4b3yScWnGouDEv7rhpYZeMTpGUU14y61YDRtqcHuALrTUocFYSo1wPCnnKJ8NvMMt2goe33KepBkh",
  "key45": "3udzk8ckK4AuWUBiWNJr5F8AcAxm93yfnqD5gXPhaxkcCMJVkYV3A7J9mixXehfpP1S7LSUKbxKk47xfGoNwEnZQ",
  "key46": "5a1TPzCv8ZoUrnZCWi9pidGWvRQekipzogjSdjBiCwUM6twM9j9G3kXBzpci2dQsqNiD4AMHPH9GCxe69ECbi4Us",
  "key47": "i9bVkg6qDWZakAi9VccnuhsvqXELfdFhREdtqoVAgUJYU4JxbUD95M4THp1mjQC8nKuGxepENai39k6UxBujhNd"
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
