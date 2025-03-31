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
    "24BNsWaczUvEmvSSqeVEExJ8Gjx26QRbFRyktTjrEePiay9NnLZQeGPJLZm9jcsM3PdvZz5wTWrgSsfSBvkxXdr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pmhpc27qr36J3XzsqsSPXZNo4kktJdpUuRHHnv3xDR1G6vgvq2sDzTRc9xWePPDte8bZz1xHA3gyPcNUjTQf1Xw",
  "key1": "3H2JBcKCVACV5kUmSVEeN35tcjMFZAUpNa4pGbG2M296EXZjfep5q9UaCCnuyEt71B46ocaQCuJsdZaDEoLF8k2t",
  "key2": "61u8kAdWBXFS2hBJmW751xyjnJ4RuXJDKvk5prt9pA393dcd9FByoQdoGshvUoY8ntXPaU5UGdzmTCF4uZ7VTFaV",
  "key3": "4B7rpbt1z8N3QoLaqzsu8WDRtSCwMZqGmjWjphqQeoF9r2KTdP25ZbKFn4bCFabmvaxsH8w5xT9M4SKFJEy5rEG6",
  "key4": "46Twstbh1GytqEpgRHLZZ3YwWphZgD4K1rwZjt3MjhoyRDVGmrHTHBaXXsmxYiMrvqA3TKbbTjGNNnwEameUyZgG",
  "key5": "yrdKzS3X3UHusRLqczyhCF7QGNMhGJY33DQMeRuXdSmpFDAzhNDxurDo1XrF3XwX3J2CMsiREGJDixrFUAxfPAA",
  "key6": "4bf32g26XyK5VwBnfPar4twXfNBQL7Xk6S13yAbF3vPTTMFpbYiQdreoMk9DnEjTue3rvPpNMNKyxwNoGSjktipm",
  "key7": "623To8U786Rp7NhRJGwdmQAeXUXWqjh6kR48t2pQdiKPyLVaN32U59oDcKSnM9bqXxkWFLmkJxwJi7px4D5VDZ55",
  "key8": "4v2dxmBPRFuBZrgQmLWF2UeE5oq6wUo4pWxXJ7sNjGFyXDxgtyjxbAujkJmpt1fEomVqnSBfLpeLrZn7z1L2WG54",
  "key9": "4LbKCQqbJ9KSHgPYuKn5v9uykz8J17YfJhhwZyTCf3c9g4ecCbAQmbBzhK27gqZTtQdbQD8J5cZwe9LMupJrXg2Z",
  "key10": "YgtYqfTHaURYpdHS1KmFiULvDVpf6kgWh4ZdDfthiQiwchB3WjGbJjoEf6H1s4iWDnnAPS5gKS9EznMvxWMvEDD",
  "key11": "kvRgrunDXsqF4FaFZ31mrhppGoyCWN1TpWtN1mvYVBkiqDxcaMVasR6CAD39dG56LPgS2bQYwZdu5cXgAHWrywA",
  "key12": "Q9WLEYi6VLEE8cbg3gKoqvRow1Hgfm8DCLfN92CgVCBevWVVD5ZmAZegK6sXnWEigsJKPEgovAHVFsesDznaMmK",
  "key13": "4VkgHuBjUy3fcCm2XSgYCeaYARqBPbuitZ2Mcm4zjmzYBdH853HQkaeKQ6ttVp6AwGPy9FsTJ198AxYxVy2N9Rkj",
  "key14": "knZkuXWobS4qSZkN3A8TiiV4kPQPcyuejNbexbKU4HxsyTTc4wS329a76dNtjfWAXYLMW5A7RkuKCgc2xZmUB6e",
  "key15": "2kmMEFkxhZoWpfTiTeuM8tEGinvPDfpBfLFB65C28V4SFdqJGav9JDMHm7s4GdhJDRdVn8gArAbCrjJe7xwpTPkF",
  "key16": "5hjhrLQthieyDKDq2p5VWQitJ7qMxHVvQc3cvDuZRxDzXWNs2a9ncdHmCzpwQYUsUAZLcFxCzbvMhdckUu3TpY1h",
  "key17": "2VvmX6LyNaqGfwp8qk69L8jqtnrbLU88VX9JH8ayGjsGBovgEi3iGnvJ4RXyPvBAvuKpkLt66Bfa2UwrQvR9ZX9p",
  "key18": "4rbiTpjDKUtvsbsY7RrfP6rPsqpBqrDMckSJQ88EJyjq6j1ykB3Rnz8G9uzfx5mNgHctj13HcuBUiMnvCRQmgjLH",
  "key19": "4fJeZRd5zdAJxvZDGu7jamisgq2QduKsBuDvwMBMWw9PzHjG9qCpQAeAS6FoTWb8mp16nkn5v6GDKDGyGTPSUQCm",
  "key20": "5wpuxwFixKm1pV4mGiprnBoMzsEV5ooQjWk6y9WXWsa1AcEGsX4Lnn9B4aXZPSx192madQJHxELyr4Mw4wdmyohj",
  "key21": "5xxQkKPoqb9H3dCuucEJseNjqGpTg64TgpLj2EH6KiXqZTxRcXbGH48cY9m8FCkHqYBFLk8V1dM5pDa2KA3Nr549",
  "key22": "4ZZ74ErLSjcKs18zqaLKudaw3qEfkkHeJj51CfUHqo792Ns9K2rpYvjNZYwDijNkCaHNf8UHxV5S3Jc31KKjrZxb",
  "key23": "5Sh876pVzh282x4nnhwhFrBzhGmomyhj3UVHTLs7jq8EK2wA7RE4YJFrLrr6WSMXaVvL8V66dsJCi7p4mfAYG4u5",
  "key24": "3epNHjsivLDGZvWGdJUM1DFveP8qPA59ikkDXPPQNUP6XWjL3qqVXbzxHmPqmq36sTg4WjgPvSBa13znyV3s9oHM",
  "key25": "2bVubEQ7jXcyGzChsUZhSGQKb1GvQC2qQa6osZAraQZ3LSKcQrkoK4REe3PD5q1mnPQgLb2jyh8vGTgKvi5MPx82",
  "key26": "22JYc3KVpqJN2NUfyTqmoimcMdrbTvr674usXcrZeKabNuYCHiyB3VLKfGNeuBxgoMMdkWrDN6tEE24mbd4bkgDx",
  "key27": "4daUXWs3U7iXy2hzD1cLLr3f1neKH6DoKoc3cRpPFHy96Vj9EN6uVrJ4bLisR64Gvh2u2kSYt79Q2Mu6ZwaqcSLe",
  "key28": "2LqWZenLUSf9yYsXtLp2tJsLhca9PiqYnTXaKecVkXhQSv7uUTaGzQN1hbKhSdXEidTrydepsQrnuVdAyrLN4ByH",
  "key29": "3vUwNwYSApNQTGtb8zrF8cUS6wZB7koGb6Z7YDmhNzFqG4UhNNBCh5ZNwwWnqQQHVFFXits7iy5Kcfi6RHLNRcMR",
  "key30": "4UWYPGvVw9pLX4E3QHiKTBvaPVC9mQanPvMpN66ntbXmPv9Wov2UwUettygh9AE2eeDKGjJqhaQHWKr4xxoVEGNC",
  "key31": "5Mx5U6jvxoFLExfVTmYbiqLJ3FmQA5HLb5qaAeqRFxb3SdafVGbLmvBLxnK8d82Wq1BPuaWV1M2XcG9SC2FMdpo7",
  "key32": "4LXz326zTgdsHc38impoT7ZfEb9aE1Nyi4L7M6KW3dMBXd4KAKw4x8UdgdYU6R8sBVx4GMcu92StHNe8LpSCPTYi",
  "key33": "4T8WYD3Nyxh6H9pRBpxA2Geb34yWqSMKBFy951tpC8MNdXAT45BxoDFadJYLYghjPXBeZVmHFwejgZWx5phzoarf",
  "key34": "2ExJXBz6iAvraWsqo4myCj3g3H28EjR4qbLymZZcVMK9gqWyCiBBdd2byvNiaLZGuLuGTy3i2Yt3TzVVrWzTMdgj",
  "key35": "4Rdkd6sKdphekgzChasccSZg8Ec9YhbA1XHmYKuZSQTCvQxFt6rECLsbQNdAAwmCp2VHK32rxr8JKESAN1qduRnk",
  "key36": "5DfeCKLKa9qCwp3kixvVMP2gtxy9QfJrdpM65VY68trHkBWqyMDxhmF4AxR3uC1yVQgA5hi6YfPR3KqkY9vH37NG",
  "key37": "5s2qamjx5hwekTzZjYDEY9R3dEiiXPFsqGXU9Zxt7Sz2VHSRXN9UKMdTPt6HHwP9C7Q3pvMGNMASpAFe5E3tdh6s",
  "key38": "3GRJkB657buE6SgzZF9BzW5thjEsY5S9Ni7ypVHsYY9pnmotc482fRcf6dnN6h4NSvqn57sZdHBPtfDs3b7QpHw2",
  "key39": "2y4WwQnPPB5TXjxK4e4YAbVrMhkdFiG7Uia9vTGVDpz2Nwnm7qWpuR4kmq4WWsGmdFEmUTbunw75kSqGDpMixzF4",
  "key40": "DSbzxJkB38Cdosj2W52GjDD6thxDgrjaETseYeneFSbucJGyfHWFbntEg9aDFLmQbg6YUkXwi7NN71Si2VfZstK",
  "key41": "fcRe2TGioqHjeuXxwkUoCtjEeaLujHdYrMNzjP1tpEY6SNu9Hq1mZt38zKuPRiTTVtFX3ghG4wuDyaoC4uEEfUr",
  "key42": "389i4QB5sDwFhpMspoqst1cwbHcXStnNyFixzdEZNwuYjhjyvfiqoAb76EcWJd65ux4g1BzghjiqKmpasD6KQk9y",
  "key43": "47s4LMeKD3RmDoYJzApUghKiAmYFLPTs2jASpT5Lou1NgD3NS2A4gYCzBETmFPBGsjBCuSo7JqH7ne1EZL7Ahwt6",
  "key44": "4u8om3H4cpU2k3KJXRstE1sYpQp3upyF9QgSNbTrzJ9ysmbd3wFKTQHLxcnwb6wi4vpisnWTKvzSQf4NqPXpBvMG"
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
