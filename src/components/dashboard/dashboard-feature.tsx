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
    "5vSt1Q5ffvav4DZ5zoTufioAiG9hN2qTupQvVVkUxaibzPv2K5FnKW4SooqH67FwWQDeSScAJLvaLcPRyLGHVbsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TpPpx3a15jxKYYHAjgQgHMCpik88rB5KXP794ALbcT2h17tkw27td3nuZQdEax9Wwg1ynqAqr1o9W4c3oeXK4Qc",
  "key1": "5MHFFZ5jsaxEwqHMHdxEELXxvboZ4vGyYmoTF7hAj8JV98JbmR8iheSWdeELCVi42V51Zk57VTcmWPSwkpbm9ABU",
  "key2": "iKvjnzg18EPPNdgGk7VwwqgzjdBCwqHfPcp2r3CDGpQcAqYJpfk1mRVSSHBafipH7RQRgw9cWdA51u4FDniBC45",
  "key3": "23qJjtdKvQn7J1X75LTy4cCdKhABfvL6S9G7VwAsAsXsMydYVRh8ibfDeM7BNjgMxuRVqNuBFeN4FiXMbNxZQ6xM",
  "key4": "46Sg8KGDsVdgjL8A5oHRx5xwXmr5FnxVdb52G9RHq7NRAdnWJEAdQawRgTURJgqHapj2udChSKtqc3Zo3dmMoAE",
  "key5": "3T9YFM4AqKVX4Kh7uGwR4etTcTozuAaUZe4T6QFcFfG5HujmN2xA3xdeV2qt2FqezQSZP2Eg7E9pir4aeiaszEJ6",
  "key6": "5Nb4UKFz1L9Bzfp9E8s2qzKYfSssSQZw8eG3kYTaiusTfqXepW5XHBLkgaj6Gz33uGRcaB8RxmJ17qqhovZSu4wF",
  "key7": "2FQrnLwbewFy7WgEvfanQcwvLWAtLLLuwBthu35vzY1qEVHe85JxiFDZbH6L9A4urLseiut4igfv8SXWcFcNCPPn",
  "key8": "3LL1MV7VVqf4iZZGCydkBSHRvQbSQfLwh7WZTbqAexWxW5aKrWW8fZCZfbmQkvSNKDfzmcoa3q4X9jeNSHGy3NKz",
  "key9": "633QWfcqo6CsYxFwQnFkwN8FcL5oQb64fHvWWabVEN8EdoH3KJmHmMshDrM9Bk3EfLQGqFQs7PrP8wPDuuCPRupk",
  "key10": "Ha2iWxjwDmxcEQuZ2KS6uWiwkjLaN3z9F5yGHATpR4E182MX1gZyz2eVFpXHXKz1W4pZWgeztD5JNZBf8B8oimB",
  "key11": "hJxAVcdnDaNvrZJ1KHGGieDk8CzwnrQwFvRHWbxvLv1Vh2fbP8YfWLryzr9NY8eX3ezWEfzPJsRABUtie9mct9d",
  "key12": "51niMj3M5GGkegn4yc8hDDt9uwNMBEYt69Kvgaha9FVF2hEEJuunEoZpcsHwuSa5434wRUsYoyFDuHfTBuoSDCxa",
  "key13": "5qVEwWhrLHsjcmWMYLSgSuaRqL1NVvBeFeFBVY1Cp9BF1BZzTsd2tUqUpbxLrjYmvmGZ9t46g2bEDn4vaZkJJJu7",
  "key14": "5NQmwoPXMpPx6gxxVjsXcsBMMMiuYXMeG3apyp6oeb6Fhb63KyTVB62pJbxLfYTkGfzMPqbLAr3vJmi9oX9eskHf",
  "key15": "4jLVhrcp6RuXMBMREvUHKJJdWw9oGq3J4AsHdbxLqmTyeXuftKF7v8qVi4qz84RvYPzUcgEenixP7x3MLBpfL5t",
  "key16": "4cyeus717iqQBK9bCsfTU6kW9tDqYvKrn7jXy498UBtXCTSRYh3BkCmuMM3PSkt9EsRqncpp6J4u5XuiC5aaq6Fg",
  "key17": "5AuDiQVuCkVczCeDzsvn6944K1o1ViFm754bGHZyHFYaygBta9VKjLgLhBSbbhk4ssmCJK1qorBd25nrWKefNkAW",
  "key18": "4PkAy9Vfcd1u5zbzeQ3U2AJYYpW9ZBZQfEEdmokXC2mRdnQSnDJEuqL7RPxvA9N5gr2QgjrYJYcTCivfw4XEN9xf",
  "key19": "5kQANqRui8R2YBSynoA1vzUUsaAqVKycGokTyo4dZoG4FFUS7PGyaNpzLEaVjL3ccpT2hRGmPEYwBa2j6H8kkMvZ",
  "key20": "5bYz1ACpgznjbeYoP4amUFHzDpvu7eccADd93sfXTVE3zz5RWSZJLkzqiK4BMqEPRSmVPNRKsL2ynEzcSpXcLiNF",
  "key21": "mZQsNxSMRVhw5EpSRB214QBqPmXUHdzJfhLNrTKTJoHZ7WpJrMiVMAbsghby3vvAPZBNcMfMDq77a1ZxDYCe3Gp",
  "key22": "39pzPyGWbPB33C5uv2oitQG7hqJbvvhWTjtT6mjutbEk5Tx9jtKzUw5jr3sHbM9gzvoujXuD8A3SMWjC7QUsb2yc",
  "key23": "4NNhuCwhqvNUK7TUsjHJbJ3CVVtuUDmxJ4yjHXzLaMvAZBiD7uxT2yzk9dGyoYqV979WYPA8SyUvSNABeFru3HLX",
  "key24": "4MTUTdjq6Nv8367J1pars1iydMWNcdFkShqzTzkG1QMk8ouRdMv2Y8LXxymDuytv7jwaRRbkxZ1f5Mh83b87Wm3J",
  "key25": "3vzc7TEYXVUvGUEZHCN8BPR1e9ELVMncznBApJErfL2BdVBuDuCDbWuVY6SnUCe6xHtKQFJmnJxhAjbkXndFzE8s",
  "key26": "2DtuuAjwPcshqw3S86rMau9yFioAtwJaY1wQgx4ne8CMeZpkS91B1aGchrVwue7EYJ3D3uzBfH15zGcLH1SbjyMW",
  "key27": "4q4p4fhVTQXus2Guficy5gzR1aKUDgQrXt7BKFyH7YhFcG9kmv4xkXMzfqJX2QmxMbLPUxSSWwqXi7pZdEKuUfnp",
  "key28": "4d9AL1YiW27etnhRZwhNJ2Hd79KRXH5wroFoV2ywtbspYVLhDh43VpBcV72UBCKi95LcfFSCuiV8uJQRotLwSEe5",
  "key29": "1KTrPd9DjcCqMWhEg176WW88fg6K6ZPu3H4nXc5Q7kLa9gKT7zf2bJ14PDLdwpz6T5KahHbW5mDdrwrwiL7ydom",
  "key30": "2aDuDkDwp7GWectrTbtpnxQ9xVp8AJzxJgeMfejZqSZ4g7KXZuV6AxKnNNEYxm9VkAJhJ9Gh53xUS5FXC87voBmk",
  "key31": "urvWscc2hKSCDCncx46VtsbtLAt8McsyCJTpfdXCG22CMfwUBYUMey4FTHMR1Rm5aDSCuqqTH96MAxVYGo3KTfr",
  "key32": "5RcK934qUkwxqGGgrjgqXJP2Q2H3ubkgcuz2ffSSYUcDTtbJYhfCbAMjUws9n7EsLbM2s5iDDmjVW3ZXmUYPdzBv",
  "key33": "2eTax34xhmEoaKctoGcimJqaWCjZ2Z9B8v94Cb5PhgcKzaWVqpKtjDUpAfeyuVk9139ozup4SzcWRNjfyixRU6mo",
  "key34": "5JQG56gvHYC2P63ziB8cCyrzMMZRbCavzyaZ4umhVXeD6SFEmB4AAcWK22hm7gnYL92evhNVLi7jKdLoZbcRznvL",
  "key35": "3BdhyGiWytRTnFKgr27FVCwkV5iZ7zSk4ZtUVXr8xAcn7JCQxwtHaNkgeJXF3A3HjGAS8J14fQN86zde44izFrZd",
  "key36": "2LMAL2EQSSxkJYS8wzCsWPL1GhkmXeNj6EqZQLX7QeGsy6WhFe6CBw7HkzMbVvyGD4N9GqghGdha8JK1Euc3LjTm",
  "key37": "3X2bccAHf2GWzNSeUhQ8wGRBL5xL6oGhy9bVeKyCgwa5W5ZJPK4icbxSsPBg811VTRkjxpo4SXFJ9dSZfMqC7m5M",
  "key38": "vpnLkdcrUxZAkjFW6xNVbQN5bU4YrnxtSzFjqoGh1bhyFrcnQPEx87sv6oLRo2MFrU8E4NqHMByjTkdUCRwb5Jh",
  "key39": "2rprYyzAcnwdHkitULeGprFmPJJrVGXJGvU3QY1PWXPxn1egmWciuycVFrNd8GBokdvbFCU6FCQTMpUwaj9nfny8",
  "key40": "5nac3YoFBfvWkxXBxEFxmV5xcuqrWdQZizGSFZECcwUD3RVo5LFG3t92ajxo8y26Jb9xKFtYBQKg4N56kR5hN33",
  "key41": "2kcXRN8PcfTYWYpjyw35U8ARRc4wAP38uEXuwj5e23Q8mEekMj28ktohqXMjzWyvkkqoDQkJY8ZppADiZyofuuLD",
  "key42": "2VvJ8RL7aY8qeQLuzF8r9AEP6dGewNjULRSHTmJN4HBmUCcPgMQ7gj5eQ6purQF38w3VGETdNvSWq2sNspwmTCCc",
  "key43": "BohNVWuUreTpK6zoocKbbFSCQoFEi7Wa7TroVrFfUb52eq31a68KU2msywSRJPV9zWCpQChWmPvDuyTn7jmEZqT",
  "key44": "2aRJk4t81ZniFamhrw2bMEQimdrZ3CLsgXMN4SzbMtBqQCxKsB4bVw2ZCuhZ13ijWCVCUEUyiLosYXhvejcrSYpH"
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
