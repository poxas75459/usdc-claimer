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
    "4BEqUD8ASXc28KJqLQgb5LX92EtFEwQqWt96nm7V79xpApWtmGWHHzAetuVSeJ3w9SMKQX9gG8PxuPtPoY8VaKs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SSFeBiPfq2TRwXzRcstDEjugAKHNmVxmcffjhExBJiCDrcTmMkqsqM9w84xWcAntyx3rSSHU1bVXvBHmMdF85ut",
  "key1": "61bvjjxfCsWnPFsj2BGNF5Xy9UgHNbpnLzjSzLjA2Pa9ywFhxXLN8bi4MToBT3qR4Xp5gjxFvc5AqNkVRh2tQKLT",
  "key2": "5AawJ7CfQDbr6rsLv77xAKjTpUyNyuTxJDVy5k5aKXeV2R5uvJakcPMx5w48vYyHgCwif1Sy5tuY9YvjdSWeXb7G",
  "key3": "5kWWbwFfkDGZeUp1xpfFa3wTHQcVFeWxvndrv6GA66Wfyqvo3GbWqHXmisPyXyH3hGMFRU1kE2w5vGbTFBYhqT82",
  "key4": "4dZM9Le3rpEYf6SzqG55bzYJo7gRuL7TzZy572Q9cGf53zfbBNznKVsq3K5gpYko7rncEnY2fr44sZWjcMbdxwS4",
  "key5": "3zwG6QciZnFSJwPqKX2tkWt4HBEAuDibHzr2QdFNLFjD4YQjtMkeoJ4fMyD4TL84ASjFKigKtrfBo2aPe4L3ozaf",
  "key6": "3t495f4ZWXVbWMQT7UM1TqqBn8hFacDw2CdgZEF383ts8VPCnt4mjmhFWsABHRBJYRotb4gnh5fpxD62DPvyetQf",
  "key7": "5sYmaLUu5YnU7Gv2bBCHrjCsH9t1rmWC5pyiA3P7hy6AYKZM516ZzMt22HLHApY575JE8snuMcvkLYrSd72G46Hu",
  "key8": "NdkG9Lc99cV6ncaeqQLBspQiS1Nnz4VfhFLKGgFrwSoj1kbHoykEU6wP6ecH6d5MWnGd9RV8FDgt4sZ9S9odPpT",
  "key9": "5bd9iAuFLbNmC2iWfHZRUGzq6Xmh6nhqSEptdnE5Nm8guQEW1icHTdeU4GzV2ApRaSgSv9rW85HeFmvAKQy6XTC1",
  "key10": "47GPUL4aVoDcaB4bn8TcX1e4PcCpz4PLFFPdykpaUbvMACnukf5QFQWMm2hNjha4dXTmMoTzDeHmXGsdtXHpLo6t",
  "key11": "5F4AYhdvqerNLE9fuxwuWtawY8nmUQU3ZFNfRUR3X8KLgeqfEqnj6fwk7rwyw7FRzeWLifctCtukhdKFZjKR7kth",
  "key12": "5uLMvpoTQeKzBeueQFWsbNV2W496AtJqUrMn3DfnvT7kAA6kVcbGHA6eAeyia6z5o2eeS4onWpFE6E3DvH7kY4eW",
  "key13": "3eH39D6DHdna5vm2DHiiysiQx4UMy2XAqaVAYYGK44mkVMbppsyePghiRG5scjfFsBFs82dQU2UU1mocCEo5q4yq",
  "key14": "3dEUAkvMnDnW33HdsQq6n9Ynw5UvmargKpmUDLSmwPDhB6ymKeJrYAprCbLAorAw2NEkWwC3NAQbyKcedAuqJ3RH",
  "key15": "65ZqzBkD64FBYHwKwBmEwQn2tPVbXAkyieZA814jCk488xg692dkxAMMC2Zo4tjodxJzMU88P3jKq3YcFbiXMddt",
  "key16": "42onSpJDySBFuWjZujPEDP9yUFKKDzNFc5MHuWQ5DPfQBLzDmnpaAzQkhbgSNS8ZovoG9ZM92EeSuME2dvAZSziy",
  "key17": "3AWEx1nsyPj75dTuPcVBRger6eDXNDH6VJ9HnVuWCNgUVU5x5tGpJcZqfxDRghAVWgwJAbU7rnV8EAHxQcmy8BiV",
  "key18": "5FN9xaFkNpgi77bhHqL1xP4XNyKrsKL7c3A6YQSRNmbX1c3JSFViqySzgPsDFdKurcJPRJdTjfNwNHXmruVdKQWZ",
  "key19": "3ZgcaxvrSK4F32bCVQjA235thtwdJZq46nxBEma9shtTKhUHamDYxKDVprAJaq12LPFETjBBft56rvHDHBENE2GE",
  "key20": "31WfDPVD9kT8ydL5gKtCE4TdzGdzuhzS8dT8kFMGyqByhoW27RiFEFip6MHuf1ZnSv4s4nGF7mnC7P3ryn4VrDcw",
  "key21": "5zsgCDf9rrDGaRGmVCU9nSeff5DB4hXVT5hSNzWfiJPyqpedvrQTqkXA9gjbRXjczdcv5mAbKRtJ8h7iiM8NpJym",
  "key22": "JiyDoatd4yr2H25dQDmRLTFPetxYqJPAm3Ms6nMx6fEp16XsPoCdvVrhYjeFfGrCcV7uNH5dej1YUpZoHWEZsK3",
  "key23": "5aH61sXoP1rJ7uAF54gAWdc5BW5jLpB79VwPWcPMT3hLyofo2Mv6m6c81FxyPyHsMhSNB6jz2EP1T9b8DHrWCeHx",
  "key24": "4EVYN3FDT9hm8gZexp2M4PfYWa9DwcEEfkVjQ2ZKL2RRdoFWreJxFAeTmwoURq4nYzgrygJNqdJFc7NLKjqmnd7i",
  "key25": "2v9qrrWvPyxGFNVS3LVPpWG5Vaz8ThSxiNnc8PjCSPJBeVdHygLm3NpUDMfccZyjJpSUSx5kkyiK1TdGT27bQwh4",
  "key26": "VpcuNeeDMHDJd5dA7KdktnfcnJtMwT5n7Y3VwYo9UtsoD3ZxuW2m6PxLq5iLbsrw9Y3XNhweqFDKmUR1MEZzCiQ",
  "key27": "ZnYhy6h9tpKRekSnRhZiuSHnR3AwSvYGpK53zjCs9LyVBUfMz79e3iszFzBAxemjekNoogyuRABH8Z7bP9Mep6b"
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
