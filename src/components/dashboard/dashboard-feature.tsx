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
    "2MjkRaRCR516qCfQMdY9c1nEzrcLo4CbHHjryA4WiZCP15ovbSkkozttZTg3xhnJFgAzN3TtfJ4J1iCfZ1CDVEzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yt7a61SWQnDx8CT2zpAuVuXsXqjfjZMRTJ9UQhV8uRHkTRRgpc3jKN2wazN4FrVjRJZgJ2rTw47n8qmFfxTTozm",
  "key1": "4QJ5DLjt8ZtEKKEJZtqqdx33iCKYPRcVPEvgFRrwQeKnwv96mYVQqHeCeMtWAxT9gqcbjJARewsz3UCRQSgttgdu",
  "key2": "4MAC99UBEZSxuLPRiZSNByf9jA8bwVreU3xER9ZVCtd8oRSgS7t9HpszBJSWAMo7vRVGRmArE8Gc6j7aMumWkRZe",
  "key3": "i4hYAYrUy9k7KvdnG85EiMHCsNak37nuJoLb7DZaAhbADbQuZXUpNNp8sWibGhfvyd5q5D3Ht2atvpbapMzvid2",
  "key4": "54fdjbcLiULTBtMfyxavTjmZAGd7MstWJN6u8MsJXao7RMGtt3bwvDWppRV5zjVnKms2sc1rh7o6FB2GxbStKBZj",
  "key5": "4Q1NYqwLL4zwcuUSFKkoWcGUncZaXWCTYJ5qCJ3Gx1zgwcvo7hHjtytkd87VAf1t8hrQwwmw8596macHVNCZfyZz",
  "key6": "3Uj7H9PfY1H1nn96QzijvntfNKug2Uk1cZzW7aT5WX8g4uj75Li95PdZZDoDiF4vY6o3wG7iiVMQ8qSgHmGZtzjS",
  "key7": "3Bx2nUgx9nRUXLFHqPRUWpdKZM7ebV6SDPTQw89wi3iFnrdeozTh1unuu72zyiuLHMGRpszu74gf7qbTeKdbJRPa",
  "key8": "3QVknmrgwiDNdFaNv3QKD5tKHRBfSu8h82RCtD34EZDBDAayvadmnv2fjcm9owYn9jxPm1anVsPFGHFcaRKCaNYW",
  "key9": "5jrZeB79yC6L1JfHwKRP8uSuZg2p6LS6XmQY73k8ghdUcxyxWSdN9TVKpC1G4EfUQbNMAAbgX7eMqvQ4eNWm99SS",
  "key10": "dpgA43cRSqDxEC63agDHywQaGnYjCGCaEiyFjn1UZUYaT4sQuwvzaqQiigyxjbyTjdZ7L5AexYWEwpCo7Z8HkMv",
  "key11": "TyX3d9qPGYztwbReBWkjtMCVF4iPtx38miZqC51X7b6hSFbZczEay3Fb2CgJ2qvGpNncMRg9YMCjfkAAyoBQ3jk",
  "key12": "3zLNmTez9DN7daYGipCw8DfTbkXAiZpFaBU4Ydy2ZJqG9uA6qpmChNQQix1dcSwaLh2bBU3jf4rmz1QaiA6cXPVm",
  "key13": "4985V3EqjmjAnnffZkniiaT3hyZf1p5Pvfpor3iyRGtPWQBdQQgJZx7WzRLFwWELRjvNGiqvGRFejxieVAmbfTMx",
  "key14": "2cjpPMmu5dZyYoSno5oFz1VE8do1PCnjnTRuNihJFn6agKoL53Aju3VhbB1V6JMGJtSs3h3RHPgpPG9cFg4Fvpt9",
  "key15": "4Z5RDZzoQQ3PrebhT8HxH3n7QUFYmgp9Hg39sKqgL3uUzccacSoVGTu5P6opTekMqDiiz2f3pCzh69u8NVW74RHb",
  "key16": "2oRBGDoZZdSVcbZZ8HaPmcC2NR8BZU7cd5hXW6RFmpVfCi4ZuYytZMnxtgfpWigecjJsLqX3xnzvHAbsB1HsuvuR",
  "key17": "ijW6f357hnvY6ztGDJRgpZbZ8Trgq8UA5n59ofhw4AcNF1uupZMJN7BTxrTBX8CNkdc3SyMPX7VYdTXT9nheiMs",
  "key18": "m1ZbEZ8S5yWC7FNPSdAM74ByX2UaBAbbDkGh55wqEi5BLfWQkepEwavM9Ce968TTyzqrtZ7NTNWiRqtcBA6w4s5",
  "key19": "3XZpZLLKooXPgSR72DinhzPw2QwdyTeaMP57ucECiDtKKyC2K4zgi18bxKNzWLz2nqDXiMXmHVtWF46Do9qB8Xy5",
  "key20": "3gXhdmf4VGhFV4m8R7mcNu8UM81a6Zti4NPdWeZ1Uipxdwy7FUsiHyTu1d1agRiRauGmFkjdUkufroAfTba9oKDk",
  "key21": "5uUfhzhxR7SwSJMDyNGFySAu9fEC61ApeqiNMV978DwXdjgJJU9Rx1B8NTypcrrEUJtctRoWf5H5vgJisKv8vmvr",
  "key22": "anJZDEBTXwywj4dj1wTXUKyHN5sZ3nioTHaqYnoewnrqPopo6QLp6DGqU93ZSZMdiHSFaS579MUMJSQWjxNg3aT",
  "key23": "Q6iLHWwDzcHaABR9YVpRdALkTD4eyDhnribngwkdYn55C2QvVyqocgAVhWJVDLmZunAnwUi551a6v6SMvSmiVo5",
  "key24": "kaaJPiqj7apHWTwpQGZU1WKtdd4A9LrsFfkQ6TyuZYCz15dNzeBTuodQv4oVpxpXYSN9VhdbQGN6T23WWQQ2kYi",
  "key25": "3pLtnoKK2H9wR44z2cWKgxmRUT6UMvxczR5qX9qQ8MxBhAuw91y7bErTfqUjrkgCTn6gvWBoc5DmSHfMCYCR3dPn",
  "key26": "26owSSftCpu3QAb9hbUU3M1rLKLeK14WTCSZ8GdybmYZbuEvcy3fvXSbohTq3FjAERGymAf7rPcVppdzX9Avg4wU",
  "key27": "3WW8w9KiiQweUyBNJqzABdri8fsJShUKnBnFHfP4iwEEmY6muQ9cUt1vLTKDoFDoqfcoj7GLMmi3heqQV2PNmcXY",
  "key28": "4BbiSw7UQo9VBGeuJdHTZF2JkYDodci3fmYNkaTJiz2gNhjPPyJEKR6j4vvrEM92AYazwB1fpdnRFcCG8fLMvhGJ",
  "key29": "3zZkinao3sw3WPDjBTCcf57WCT9Dvbc55bSAWztShiw1yf8jtuF79bGKbjJU24eegSSRLqqAbgot7eDMAQD3gEiJ",
  "key30": "2giSrRMzTMtRsSbLnXSmg69k8wZb4FsPchRbfVWXWS1BViCJM1XWxQhkVsJJ3KZw9YVwyz4JuQpsKSR6Y2SWWshC",
  "key31": "4UoprDrL3duqZJwwVS7tkCWgDGHzH7TUomWBa9FBH8pd2fjF37Np8WhSChauAXT1ygzrF7XavESjhCS6R3Rm7isk",
  "key32": "43ACVCvPHzZ86sMpuGuqUECMUsNwssjY8VukSAqp5jf78uUmndKNcwm15oeY13f8gwCDY7yr5TQERdVxJg2xJy7n",
  "key33": "31t8vzeq3VtCdt9p4bp3j3iKEKWcXAEjNi5hQrHQMC1UTnfWuDKPtMzuT6t7USaJhHMpeKezy9jSRyVtRS6GK3x5",
  "key34": "So9qQHd6wq6vX6uDuKMviPEUzPcKS92N8vYs5rWsrWXrXpFtJffqyknwZ6TEtagLoNDzhH7AtzZADqMszG8oYUx",
  "key35": "2HwCfNQNXfkbC5KrhdoU3jSnFK1LTgUWLxEzXAoSukUVvKPvg1cd4P752C5CJR86oXJDrC2MNT4uFYBxLQot6Gwq",
  "key36": "q79VoHsoDYRQnDLXfUVHvaY6a5Js5gAmM8k3cH1fZBvRCCsaUEbAeqdiRM1TELtHYiQj5gBXgxb8jBoEdS3AjCR",
  "key37": "4oaqE7FWeG9nvDChsfYt1BDjEGC7bsmgWREMj5Y9UfAw6oEn3PekDavHLndE14NNcwjNkpUf9xa3BVxtMLnxy5aN",
  "key38": "2ueP5PAeTvxdw57Pi6GVZvAX4AxiE76SLapVem5XxkeBnbDc1DysUEK1E8a9oD8Avg2oNCHEsTUPTguQ2AWBirnT",
  "key39": "2opm1weaHa8wpSKoCQY2gd8upRbspPPLikY59QtskU6Nf5ZtKk9Tp8JLxbk98Lgoz2Ux1nzY2EGyNsq5vVEUjmwx",
  "key40": "64oa7kaUTaejme8iKV6B37bEJAbDzvge4472VnCwL7PLEDMGTvBmnAYGgPU77mJw6avx2pY7QCoTB8o25QbLWbHh",
  "key41": "2SmrJRshE5zx61UXECpX6uPxiqA3KsXgBVuK49cG6fzEaGMMNXZKJVFCtZJ5QV3ArpzK4bhPtfZNTmFa5FVSvAgT",
  "key42": "67VaMDChszxVDtADLJoDJwggDL48YeGzJA4VJrYUpKhGFPM2A18yezTsjE2JALABXNg2B1pziyHMS8qLJqHPWU2e",
  "key43": "3CWtzH5225ySpvSuX5HKn8nQwRPig8kvhcaSXfRu8EyzpTpsX5WsE3Fiuf5NrHTW9xxunVa6J26YqFbkTGMAuRQb",
  "key44": "2SMrvshF3wCcTBLsxBSCcKdPoaru4JU4QHRwCpFFEEUZhNYfRKbpK7ipuoPMU2quTymNJxhKEkroC527nri6Kzt2",
  "key45": "VKGsonSLkysDJtZNF5AhGzuRnGK4wC2NfZj1nMqEhyrXjCFyd1CXLvkEm7SLsbYthWYV2seyREgWdKnUK9B1vGz",
  "key46": "3bXD3yX9zyKQwkeyAjB7GPCYPpGv3TdwdWNvJaNonmGp2LaZE832fZ6KFoJQdkAjAo75dJKDa4ZdUWUAvEMEPw8D"
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
