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
    "3Y7z3PCoitvGgfTccF7a9F6fRKgomSBbKzTfi5Tzyp5J1BCkYA9Ai2chnkFiw7VufHo7WGoExghGzAq5DLZnrsxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v4gXnBxDZectBsWumVgRqmNJjm4LR8JfB4zDVxvTeh3SBCcvpF35BiyLqWVtYrZ22jQ7NKGc3Ckk1BYFZhXiP9d",
  "key1": "nRVmFvsk4ojwh1YxXeTT4aHbwKoBPr59wALYVbQ4Bhh6CBFxA2xi5r7Mjg5yaS1n7zCKPCmMNedq8Ez2FNNcY4F",
  "key2": "4WJ5sCm1Z5A42eeCwTYs9x1quTk37pn54Ro5GXQs5A6qSvGeUKa1eLczqduxtHnSzM8TjDtE6QWVR71X8WDXmV9D",
  "key3": "5466dJYuhkTeQBwSRyNTMHDnziwBEPrt9E2eJRahMFF3yXbHKs8wMUwyZkXphfvZShTgM7EN6HDwVMUyPzzNJmGq",
  "key4": "5Lwu255NXhhVPk3YFkES4wWrwM9HUpEEasRAS2jyK2vqaFjDrkFtQYfXoi62DB44LrySoUyeKz1tFF8M2zGbHjEj",
  "key5": "Y9BXJH2CZCrrdNCnFRqeE9keipXW7rf67RVrrwxvK1gfrquHepL3PDTuApiLwM8NEyKTJDSsf3H32tXGpern43U",
  "key6": "59yTS3CaSYF1uGcdEYJifCU516rCwEZ9QWowJWm3rgTH1MZMjLPuyPRVX7YEJdmSiYQnWrQrnrwo2qAVvXrHc77k",
  "key7": "4Ub1pJQm2JpMwFMDCG4xnzdmN1FDS3w5d1ytpH2NYpWkr8T3cu6tFNnZkUskv38vViHMBFYf18cgasC4mz3pe1d1",
  "key8": "4bEGuLZPweDRJvdKDD8Q6ZNzenaTbufqQho2tWi6idtD8QG9ALK2Uz4YYydJ3o8HkTCiXiQwisGndQrUtAhHaL4q",
  "key9": "58bH8kQsjHUB8oFh6v8p6RyTa5ark7t1axvVXcmwS8BEYvH6JXrr63xnXGqx3dYt4BUXZZj227MhTZFzQaqND8hD",
  "key10": "3nCPYcbenaCvPxi72zs5KMsc3TTJfKt6NYu9rAmWiDj2MS4pVegjoWHN1cHqFrWWYpsum7dcxc9Nn6gDYdNwaW12",
  "key11": "2oS4Lyu9Ctya6R2gsvJTmseAWHtuBnRvvcSPfXPTAS9svckKkZKXnphTyiisxHY1UnfbxZy3hENKrSpoZ9fYsecF",
  "key12": "Fp887qFLXxKGdYK3tNEHvp3QPLbpZoGhRjmdDTUaehutgbdGdQfTjTctmcUNZtU8T3kDKh9MWjGDEm3NxfrNm35",
  "key13": "5xonPbokZiQB9tejRiQqP7cSRriGqKLgzX6CDxxKxXgbPLbqwjMk8B4gJn2UwBwjn6fua1Va7X12AJaS6EG4UsL",
  "key14": "5Gr6BFnZoDuaADtE13P6noJuEMYw1Bw3Hg1MAP7GAMJWJua1wpRfSXQrev3kd74hGx4XA9CEQ6LoKshf1rfsrUg",
  "key15": "4ay4zPsVnqUmUcSZ3BTa56N6T34AYuTL7EHNbBAmS4f4EtfBFWRcUAhKhWFUyTM8eExkE4Yc2gj7HYqbr91QmxLb",
  "key16": "3H5sJdXjhgx391Cw2QAMsdVP5QUEEzjvyvPR8KkzXCSaZZ9QwU1hDF8TCTMujg6RxzvaBsTsbrGXcBh6VCZPmzZT",
  "key17": "4kNGQtnscBvDs6Fe5ThH46pNukkgDHg8nGjBJQrMEdpXEhBXsDTZXdnAf1L1SKnon5epptfYhxTcCLw7TpQGYF3w",
  "key18": "Yz3bDjavYS5gpr5X8k2mdb4BB7EY9NUT8kbJfoL3xDiGp4CG9LZUCxuWxoP9UFia5U5L27JAb8xc25NU4Qkj8pn",
  "key19": "5ZQdfun4uPz6JCYg7A4kJ7cyxyPQXZBoAmd9jg6EuwcvtHNSFvzRLuLc6uNJM3v6p35xS44UqjPdb7wtFpL1sbqE",
  "key20": "5j49XaeabUZt6ZkRMUeU67Up7pRJJFez3dE9w2RNbUEcP9ELhRSuyufhU24uCXEy2m3XaFXLNQkWYou6AwQwNgUU",
  "key21": "F1NghjAn3aAwRb7sWbDYBPdEcpFMpxNjEKMGTudpKczB8VQ1vwxLcVUUJLXcnjoq9vhC9cZYqQF35Y1oYZbNCxG",
  "key22": "2zTGZeuvf9hoY4vYr91845QKe8KDionwNeRmfveWdJtqz8Fvb5wrqh7SUtuTXTJ6WDZt6zBhcwAYVFDm53coZao9",
  "key23": "4y3JESCW2aX6kZMfviwUW6BaiZfMD6jE9hUZMJUWYBrd5zoFuewsNtGjNiRa6KrkGEwJ36GwZhebewCoovVZPMxW",
  "key24": "3PVRGUuqvBns7rxHLrk1HvWQc5qFVmwSkzAByYotDnJSYC1KAWSoiDmyF6e1YokPG9br9wMpRh5CCshsv8fem2B8",
  "key25": "QXS9AxLT9Ap3mkjzCgrbA5dspXuNqTVEC1WPF5nnr356nq1CEgYAJUNz8ew3mx6vyvxGZTtLNL7dZZfEpfuYf2V",
  "key26": "2YqJWxeJqVvZMECdPP2hmotg5MPwMvbvNuddT3ib2vM67d5iVZuhS7DMv1FB6nrWSTn5Gv7MSh6AayiiDDPPuA2F",
  "key27": "3d4nA4KrDp3JZNJJU51anYysrb5HDzVHqRETZVeK8LZMSCrpYCvHcWRWZspqwhXXDnY6f8t5iutiSCH8rTsUq5G2",
  "key28": "3T4GZA4jYXtQEokuzBiJJDCBUqWjZhodvxwFjiR5JcKu3SY3uF6iFD3mvoi2RJfLNDD1jEWqP6NPtQb4fEMGJmHA",
  "key29": "ZRuAvhmFxtEvXds7Nh6gxsEexSaoDDz7BHW1dG7DtijULLYhVeB4t7N2MActEf7mrxLheg6Eo97bCxQiLkjTjmz",
  "key30": "Vm2423sUsaCiJYYKeSH9LTxjY2L7NGqpb96MRC2oMkp34Ux1ksmmae6BfA6Tt3z9vSQDxzs2qYg1Q5CaddUE5To",
  "key31": "2f8As2M9xEP42x4Cw66Dpu8BcokSJZqcj32Yj7je5A6ucUJWL8JTwztQmNuZNfAVd2LbMzpGZW7G3FAUaEya2V9U",
  "key32": "2H6aoYrunBtTXSexLXwqRVUBcivfjuzhRGoYq28DKncw1ejhHF4nkApWNF2kYikMXktpDWyRRXWEQ8u1rmTbqk6u",
  "key33": "heHyPsCESbC9DBxcrg8bg5AGRcbj9kQiRpS5Yi7gUmRKzwuq8BKgrQjKk2wxRS8fdJWV4DyKiTjbDe9xUrPrRPa",
  "key34": "2NiMhkPYeX6yxBsbkrMK7GS6nWvYtz8NZkFXNdvGyH76bmK8LwfSfQ868RMrmnDqUZ5z7DRcKBXMsCdyL6m8Nf6U",
  "key35": "5DAr9fEuxJzfWSSczUyrEEoR2N5d7JRCCdDavvo5dZrjomYdEtuA97V5dLVCuDD6i8Y5KfuYjtJcHNLJxD1op8uL",
  "key36": "2XjR58vHv8y9JL6VobhZwDWAHY6EVD6zcWBMug5KbXsz9wLc3hUbxVTXHLCiwqTfsaT2zJhLrzva7dcEkNMvA6s2",
  "key37": "4RAXEdX6d94XYBqJ3sMPxN8X42fYRHUcvdVkyd18ocGH8gfdDh9Dnaa11ZVEXFMYUiGWYCLCoieCAQVs7u7G2kC8",
  "key38": "3XttrCeRdQ8zjF6ThDtRRnCWWvHGBtW7Yns6WbREafzRqhrerHVVZqgNBz9pPKNfrYFdjWrdgwfhnHUMXX8LrQ2t",
  "key39": "3SmeV8jMmXRknpfzmc5Gar88bT39oKp9sSFhTvz8AnDcMrztbhSQksaYsi2rMyEXeS1sjifmybwpNrCg3emD8jMt",
  "key40": "2gDxsVraBpJUBmBLkK5iJzdLi4EtxNh14HCZQ9cT6QSBpH3gYqDf61MG4h6ui2pBkaj9YzqrWfqWFqEztHgZNUjF",
  "key41": "4K3CZAZbXDX2RdU6RHSbcJeepzpxZ58z7LhkbgLaiP64Avyf1GDpLw48M5jRZnyWPnbCK9zyXTJVfSfynMjNpysS",
  "key42": "2NTjFD1T7B9EruLEPccKa7eCndWF3KNpCw3xoxu3eCSvDEqUEGk6AgBMceoSW9MvidC179j55cv4piBDZAFaj2CD",
  "key43": "3mNd5H4uo1wztaTByfnTNVRnLiRLfeiVDCVZaYtUi1wrY85SimSPWsQLFsJohW9hVECHQ4o9x6R9cz8CS5aY4amw",
  "key44": "4N7zJPfqnpr3gPAa7X2quuWjSEc2XqeZwXgeti8XAq8ruqUHxTHdiuGuHu4h64EM7t92uVuJAkSvaVy13jEkvaPp",
  "key45": "3Kd1Lv6bLQBXYymWXDjGXU8ufr4c6dV1ByKdoDgxeWwst7RFSidiCy117ApYg9kKW8eYV8j8K25Lq23aGXLHEyrw",
  "key46": "U6zTDtMAjh4fFdXr9wbhbfqjhqkxZgtCZuhD5UEE4zTTSMb89J8z9LeUdvxwK7H7dST9ZnZK9HVam8z1aX6WPuH"
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
