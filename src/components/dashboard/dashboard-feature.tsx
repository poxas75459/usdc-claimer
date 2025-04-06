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
    "4y7q8vtSxhk1nSBkzsfZDb7P19uyMjUy3rX5staxyxt3fyrmEtvPJ68HpHq3yvHEpj6eEg6Cux23Ky3dLFg1pNLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bAVoMPVFUyoyxJ6z2CCZ5Uc1KJKVasSsrr6ryytJLSTGYLMSx1b3wWrUfPfJZJGfgatebhLX8b9FWM48kEpWHCa",
  "key1": "35mmDMPc8pC6cezg5gY4rFErwshou3YfVmmZ4KoQ7zkddWLU3iNRfUC7zUA33PV7qKhdgGUdSQi3wg9aRgQhWaEh",
  "key2": "kB8VzhxYHTWP85MQLzNTMmLbHxyBdtrfRBR9XmWspoF4Hqtxqd9giAByYXAnVAZMx8RaRwqhk5BfY4JcqqgppPw",
  "key3": "3p8GNvf6KxN26TBaEEtuD4DELbD6VvYoquSjVgd5VQMq3DsQRL5FuYR8BHDJ9zzPMPco3RaryK2jEQXw4HDd6k73",
  "key4": "2z64PB9BtMRq385zXqsSfErShcS1BR7TnS44DAWHMiWAAZhjGezaoTCHuRky9j5a2G6zfpyeh8Sjqd1EaikckWfT",
  "key5": "rs3Zg4ZdR8FuZPTGmzpiC1RVnkeoELsd91ZYaV7txEXqbtz8fRSZaznmD8b7AwGHaYPTQfYtfXruy6cRRypqMnK",
  "key6": "m9oA4E7sDsPWbmxzjBaBowzZPS6dPe3rDs9oBnG9rSCerBeBNjCbUnFvrhkHYNCfabV3Zdjah7STCqxGHmNAVGK",
  "key7": "3CgWYjSSEwwH82XYbpmjpQy4zXBLPFFBWUwgjFUS9XuVtMf2EwzhvLGQ68BUyKmtxQQB9FMpE2DvtdAcxANguwzZ",
  "key8": "BN43BMMbCGC7bo9i189Rk9Y1yUXpLx9YdRNiHH6dhdFQLQgoDgoHDAcEFzq3aQ2tpqcxX1PJ6Z3emSf7rK9wU5A",
  "key9": "4QKEhAnghEhsFBdBUs8z75UTnofohT7g5MzH4wkjPeFVe4PhfeS1BdNuGHfzCHZbErvEhHtwYxbgDwvu47Y9gGJE",
  "key10": "5isC9MCSHr723XJoDtAqPCVcydDra3QJB32HqLZWAER8vagqGxtoso7LfqXpystbAXD3tGBQnZZJt1gLdxccnPBH",
  "key11": "5tb43KUJZiD7EbKUb7TFdoapkJspPqeFKETLBWg4VAHbUeRLEgJFW9M3aiqG8nqVH7XijKKtEEVX3pj6GZtyzLkR",
  "key12": "W1zuMGP3zXbpB639yvJacoBWjemeMpHf1Nk6ZmnG5NjQAsDj25WMew2SSedvwD3QUyDcDC34AfAtdP1CoxuJ6NW",
  "key13": "5Ggc8fbKSYFPZmqQeRA6XBkSKqbYcP5ssCdnu7b2kj3bkkdcSaJXFbbZcC5exQDgwjGDEfebQcrxjg1aSok8nuiz",
  "key14": "A3qQFAhuyvCpW3ajynnPpv8WAQuXRboGBkTY2MYMgpf81djRbMHg2oaMcGdkz8bkxzGg2XuA5aPAXZwKwDUVcod",
  "key15": "63SPNH24pVCRduvUVsw1HTmdNnhyewbiE3LvQLvHYpmonYHNhi18UYk5NByed2Vvp6GXgEASTBuKAnECgx8mRxyn",
  "key16": "c2uqjwfNGx7XxFjfU8xBSwLhB6A7pvMUZcLbefm7LHHeafti5ojWNK824PBBeR1xZr9KZV1teMW87EDF7emiAa5",
  "key17": "5EyYEAaog5V11chFLdyKGhsHki1Rj8nCdcKqKj7XzMRoQhnaqRtwfHp9xjCFx6opiBwbmkuQhpr2P5ZSfgyK7svV",
  "key18": "3FBvin4LPzHt9VEt4zWaUTjggc4foSF9HBwmwGXQopSB8JXbbQjGArwwTSVrFaKghVjH9SgEsaJ9Lj8PEGD9guok",
  "key19": "3bZExqoWqys7FXV3z9oB95ouMpWQ1pnNpWMx1zYAKbCUzVkaAdZh474RGYd8LmucQSUhvB8fv1ETkLkdzMhoXYXD",
  "key20": "3jzgjkEhAB7guET6yiyiwRgJjU5pUm4KQNTzwFdRx29P4VXmcZrAvQ9YzRMHyTa4nYz9MSMFVXpG3xNmrKUo4UkX",
  "key21": "3iwwyqXKBQCy52MBrEXgHYm33yzxmgX6tKwdU6G1kRn7YujZc5Tuy32xUF939jVobJqR9DCSEauJsjZMxYcDYJF5",
  "key22": "49aNzQogYr9sp8x3Ec1W2LtssmbEi4nrCVHyze9hmNzFNNFwKdumNC7YAmfMXXanUrkQj2GWXXuXK2aErAx4iXqD",
  "key23": "47bgAWzQFvDF8oCWd8y3ZDSFm8Us8zk9ctRysSXhNGFKp43bq5N9DgLEzzyvswk5J977Zkugra7DhDuqEBxeBGf5",
  "key24": "3CBYWozQ2m6VT43CaTkKfW4Fhm49C3oY9A4agA2vsMBhD9k6GJF5wKPd3WTC3eG3J7XPXmUWgNhfuhC9G5EfQwXL",
  "key25": "mPJ5zmLNCcKsimTbya79tcjGte3QNHzCEqmXYjMssS5HWL315SqzqpUUBPDhpUbVM13XAYC24Pgj62MzjHpg7tD",
  "key26": "212GMU8mCaVtWFZrLK1C2gAKj7VVaAkfoUxjJMStWSTNyoE6evoPykVAJUGHzaKyd8gximyBK8gRZfFsnTKaAVmJ",
  "key27": "5g3zbdHRrH73VkP1xzxyQ43Qa8uSw79nfakemA3jqwYmGy6J8e6JKTYzGZXHExcQKwXL82QiHp2XHA7fRPcMd4Yn",
  "key28": "4bqAzBYGaFC733GLBGfetPL5vVTFwWcqhaPvnzvvv3rYMQFVorPCvHwZ4fZ6eu9MF9ipicMb8ZYo3CdFj1wDiLdf",
  "key29": "7Yqr471yqcBKWUM1SUphGYhPcS9Fmf8aGMdhQbwWwv6SdtNfawTsUMkqkFAZdscZdMVrRxs8oqAfCTaQipEmsLk",
  "key30": "4W3LDFctkv4YmYLGgdMN9vSBQdkXPEXkAg6ZNd1d6YgPnLh2UiB73xWiGpujJfCV2KMQrX8AWBvG6MHjHXqKHdwn",
  "key31": "44yPadA8amjgHonAjixwZQr4jSJo19kySmL232couWwDejaD9Bi9bxH4iEd1w3ku4F7CCMRRW4Cmb8T9duHgW98Q",
  "key32": "3SUzcJqkTXtrDXqzH4CpewGYbKEaXUPdd4xQ69Vk7HsTLBR1xhB9pqzB9s57mvqmphhfqhjbbTWfg7F7z7uzpTPn",
  "key33": "5VLmjRSH8bNgam2GP2YReahsffxSJAAuR8CsDPn5swwgveuU3oSENnbCfSuVKWPdJFyMcct9KFzD5hoDfAAfN1KD",
  "key34": "2A9nxn7agVrmoMpDZxd9NSZT1JbQjHagPCFXWMBr4uiBJKp6CJCwnnz8LKacXztg8NhMs5u9uPeJoYcMBrmnPXTs",
  "key35": "31rXoMZUuz3kLpNYFsYkgkCdindJmxzvzwKGauj2M587MHKi7HgMbdt8x2ZJM7YYseeMSP8KFZTn6wVF9pSjex6s",
  "key36": "2KJnnWSwA94x22aZYSWwdQYtmDpdzvyzym1fCWmtpqs2VkZxpSaaHkzCuWu8dstDnTz3WAg6MsUWB7GsmzhEcAT2",
  "key37": "eWM5PxmzcDUyMuiuubNXteUowqsDLnLrVxxQCkcFtwXEqKfM14vPStAxM3AD63sFsNDUB8r9BVgUsESJJWLNJZZ",
  "key38": "Nb9BpGnDwTnZzC1MKQaFqFbPNnVRK37KaucteoJc2gKDs5qzyr9hiqJjSuYZuPgxtv5deHdGBTG5Drdn6DBPTtG",
  "key39": "BMmyXGEJcb5mzhVPsEgUKYFgfuFCbFrfBqbqL7VuCXZHEWx872aDdrtXbjGk5fLTHGEKrmZRP9yiBJxKr6NRtwH",
  "key40": "4hHZK7yQ2b55rP5pvMtXitPugW1YG4fBTUTs22aZsRWDZXFoA2mMfn3661EAbfNynDZFz2V9tKqhTqtPGrS37X52",
  "key41": "47LWZiJ2ZmJQXUZTVTfVf4ufqD5rC2kEgcW4HfWVpy6uJs2cNPyyXfYiS12CHn8C5uuBr4K3UBmbuNzCKCxHkDDJ",
  "key42": "4t13EJMsW9sokz3b5crDNP87yBthH6isPdLwMFm5xBgqZ3GrSPNBAXF98SFzrdZFnSr6bvdyySQAwirkrJS5AMR2",
  "key43": "aM8RkgEZU45QM4FwrfpfbCJyVyR82BeABYSWst3Fm2hh9uwMN54yTgVLSWCwMQJm1cei5rMGQBEdZuQA99iaKBx",
  "key44": "5XHqi57uFkSpHf7iJP7R9DDVxbqMhJvP3tH3q8smWn4mihjSXCxiDqUSMoJsvCp4P8akwfZUhBs2AZQcbYP1xsVb",
  "key45": "2XSNo7u3ioeQx9MWeVGEHCmsdiGbP9HA3xV91ZfpjkipcUCUKc1wyJNexCbrJpfjDQE8aTAKG49JM3CxER4b35jb",
  "key46": "j4ssvvVoAwvMfTQbo7DJWiMtfBQuf9Pe7PnD71WqMdEwJAHhQ1jC3w6CEFB26HQDUCQVJXPmgxRYjTTeRbtswkJ",
  "key47": "43UUzHYB7LcXmjYwurEfwDditx1F52ZnZTectahn58N4d1gRMi2GDdoWoQJUao9i4JRjTJFgbvkJhgva4wEGwMqJ",
  "key48": "5m1msMdad5BZhqwy2ShoeAV4NTYKsA51XjyY5bKFwRt7RuGdnyqx7ESAqCsY29VYLN13WEWcrcfDCv6rPXL1bLpT"
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
