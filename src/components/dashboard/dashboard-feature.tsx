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
    "Ywzsn89cafyQvxqTUJDnAFSdbGPcCVfVkJftEoYEPW7A82THTeyEUShU4SknWFxcnZQ6hcCU13vbRkAgb2SiPqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxgrcF6Ax7wG1DAquSvaNUsaoPvmHh3owgsGqY571txTP46mXqhddKKbRMPM1TYsfMC1TSy7KMvos2j9v5j1jvv",
  "key1": "5NM8jNjSs2xWgdMsM9k3SpuB9HeTFJ7BCTbJRQy626tN1w6MEesar3kbH62tBuG1RTcjFCc2zfZT5matcRx1Ympz",
  "key2": "5jkRWviiYQwHrsZY3uyoVb7cQ1TkDJdmXWSBfncNTguNTnEsNRhuf6qMxgNjcZJaWaeemcCQxLuktRt8yLY6SLoc",
  "key3": "5TEyF4tHALpNzw3zV4dhFWyP8WfMJ99YckCDJvfXqQEbkGVgbVCH6fdNqtNyiQcqN71daT3URBDaoTwNfWaYCm37",
  "key4": "2rquf7d9YKfF5QnyH1epkmV13p8ooZxeJwqRSSkoqn5wd6ikfd5J18QJtyfFnLWSut3iyWgBfnNJ97uYAJ53aj8u",
  "key5": "5csn78nmZpbHg37rXMsdnW89gtjiuME6yam73CnUVGDN8kYE5CfVGTu6gnCYgU8PKVd49126yDx4osHxvXqB1SBn",
  "key6": "zDok3KxTtUyBg86gJSJwEXfxdrnzgqMCvFwPE861GRKbDpGwBFWR3vbuJfuDE19oggE6YfZ5MENsyhAVXWAf2mG",
  "key7": "h1FpDkqqtycNtbdRQcEySo6sz5NHJoJAqCPf76yMJTPbCFX5ZpyVTHM2XZ16hHoLWiEeNjU3RUSkDwCgtY1Mgqe",
  "key8": "2MCvddzJBgQuQX9sAXxmK8pG7Regty7eMGJQXU5V1us9C6ahZYcw5S4fNNTEPUjSiVksKESntbhQDHxSMPotnsSM",
  "key9": "483U7VeKxxMtNZcDNLKEPX17a67TGZj6Az5RRDjTPMfYtPR1RfTXtdgLRmG3y8SwcqHCqRh5ij6U9igbd33imwqt",
  "key10": "KfUjqNNhFCyv5UM74BVYmAZR9o6BqAxDgpy7CUBkBjtBiXsG9i9PLZzBseF5CmAY8ATSzdzp27j975XV51TkRca",
  "key11": "3R5ATGsfyStnU22BCGrxibzoe3d7wqijPT95dtwznunZPoLrkFfhhDpEVKAJ6vpZZBnGgxadFQqUfHR1vJhJRJDx",
  "key12": "3s6QKxXchswkA1oLj1x2wzKXndBcJhwoxjwW1BWxYLwEgukFvVQ5hhc78kY1Vv5PUfYVciNCDHW3C63pgGftiEHz",
  "key13": "2eWCCMpWK61jMArNimF627fqnp4KDjkzaZzptwGAjVvfNKXJTYk48UBgmuWE4uJvoieehGyRfzd4JUpG7vbMqK6r",
  "key14": "2ZYEDvJ4fAUctxfcX1ksajMjDfvMSVdstHMGUTrXGkYDeDqvQqMQrBRTe8ura5WW6CwsRubY9TatQMUp5KfS7rUH",
  "key15": "2PtkuK11m7LV54o3hBKmYfcwuYU22hbxo4dVe5asfTk5vuSJnke5sJpWj9WWobMzLD5rCh6CHoYFfe9Z7KMkb1jX",
  "key16": "8AcxM91CbNJvXvmMMuaKT73XjgNTP8FqExE4okCLoropSv9iCgEVc78HqLaXhdYPWdY6JrXg7LFD8iHGGYRrRKK",
  "key17": "GiXEPcdj1BYTmH44q2PTA198gGj569ZTDCDjqm9k1t2tFyeJeDAqsCW3zWSPp13hTvfHpbWN6L4zAPjvudd95UA",
  "key18": "S6CcErd5GjzBofk7DWJrX7Pqe2REYCHDtXZyERESmrZDV1SFkNo3R6CYAvewGUfybBy9dZqRUYSV1ET9Q2t8MSF",
  "key19": "Xz8SoAfhVT9hfWPXcebEXMgPDfGvnMmM4xsaUxVLBHURQ7qzbXr6twebiGTXXbLi25g2FBmNXV1PcSbgvNAHAaw",
  "key20": "oat4YyW9iHcR2sEC9vNVJLPDS6r3gbgPWp9YwDiHtrXiwyeN3b74DBcw29syHv86UBRjV1xCm86m5tHrn12nHfu",
  "key21": "3raRZb9NmQxi58yj2fV6drj4N6nw4rsqnBgn5kiKTuJKqYj1cE7iaKQqoQzDZzDoifJRDydaEEMjzPwyjjFufkGh",
  "key22": "2HX9RVJHQjbpzEi81SGPiesaeehXNB61skKd2qNzuru5EXQX4QJzxNpM26niNRPdVDGYoXJrLXWEWp7vU5ioboYd",
  "key23": "3uJcL31sJgWD5hp18oww4FDcoBDPkPpxjZbmDUUjNoWLrh6pgJ4fVJFmu1gvNP5GhurSZZhRCrjadDP1m52s6wiM",
  "key24": "41ohFGsmMMr6FvvBeSHozzq4WVSNvd63tqeDZQiLVz7ccazmcJK1eNq4sD6EoPyUxjcMYLxWYDXKb7PKaZJFdw12",
  "key25": "3PeqZDx3iEbFPmchb8SSg7jucm41UYn6kjXvM6ahRuqNoEyDdTCoUULvDkNUXQUVZGe5C2xa6cjAhEHbF9gwEATx",
  "key26": "3GVydNEy5AB9jkWMfNpU1MXJ8VmnTzNkbstLNHzenDgCXdmJxmNBDuJvifm7Dsqn49q5ZpsqzvXnUMcF5yjf3BwT",
  "key27": "TYSvwEYa6Ewy6rTQeaYNJqqHxJDu882KHY2tmBLcyxrY3oFsdES3vwwf872WhJiQup1v7DS8HY2PGRGKCsDc9jv",
  "key28": "661A5hWZvL7fPbS8gzJxZhodJ3wusvzNogmCUfuVxxF8kLfmDJUeSiA9FEvPZYjqsoxoP1vrgtUBxvp8Xdd1k7Nh",
  "key29": "2TL4QTzKv5BV2qwKfkH1ob6nqmnBuvqssEqnouXDWGtFpnApZw9pSheQtW2XZEYapfT81gwUuUvRR4RohjHv4dzq",
  "key30": "YxkFzhhPaDTrm6aYmN2YNgu3RfLpDPQ5UfSnnwsTdEriHjjR2aQEAYrAbXP9YVZJqeEgyN9Kc1YYXHwRGmYQHeL",
  "key31": "33dUk1F1sLRR4ExfXhM3kyfpwxFRZPHYMr886HLMij6tdgmmoqXmkQdVzmTZywuUbnePo6SGKHR6E462rD7QnThx",
  "key32": "2KQoDVkx6LiPAxdCTbbe8GTcSUjtivYvMQXbC9t2qHQXFfpPzbSxHkwbeeNAjTBR1LMBdDcoTdas8aKFdsz7ZXyd",
  "key33": "8roT13VAF6VDzXCYx8H3Y1wZRm6pptmbZG11FNA7Q6UJEhvnUBGVQdjjpoQYFEHcybFsKxcApkpBxZkJrYphD5H",
  "key34": "3Zvpka2a98TqaQS6WQFZXEikknVB58Kk3Sg8JthPH4FNrPETdcwTEvosQeFGa8S5ow9Go4rY3mVoZzV4K2Po9k9a",
  "key35": "5sjgJr5KEG1LYKBZexvPzhuzRNowYWGdHLRSwz3rayhyUFRxU2ieJiQMQUyaHQLP63xC22DZ5W9auD2XdMKcEArb",
  "key36": "2fqSzXjCB8Z5VBxoPZogw4sJAZuMLTsn7veRkUUtDawNjF2vk16ywqFhfx2AqGhPYEcmVgnd3umBcss4qeCSWf8V",
  "key37": "3cBGLtqYqZNZadFLZ7JZaU52UnX8phKdVs3aLEXwZcERV8kfhR5Yru9neX6PXRWF4jC7JtWKL6NGL89CfKX2f35y",
  "key38": "4mo8V3pkk3BZWd8oP89KctfvJPdJtRdbZ8iFEdD2ySHBjeDypfjcoN2M8cwqeKceT4bapXT2sey9dyppDn5Shnim",
  "key39": "3A1UdqePuH7AfZjpk1J6wTXmvcAiAWSdbRJpz62fzjAWRf8gwA2z7ay4Nge7K8zWF5Erd2ijbkzz9H4BhTLUdbKj",
  "key40": "3rZ2UG5xYASARYnS4vxSP5SK2iyNvPqESe9565Ff1FtSWopQ29kyN96yAVAZ6M8jYADmiG21bzwxHzt6azfzY9rk",
  "key41": "64mBrq8X78WXmMmBg6EL2Mx7i7zJfhcbwdT7MBM4Pp8BU9RsV8ynYzQN1uxze2U8LY7SaTVR1Y8xtaP4UEHbsAwU"
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
