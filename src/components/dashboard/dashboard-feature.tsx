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
    "4qcr23A5vWk7C4TT91ezH8N1fN9t3Rk6sdvdH6vSAHXxpyiezdbNNZeFApGENLQZv6gM5Ema7XhGSh11KeZjoGp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9pgZvsGGEzmVrzkZkUxhxet45xnruZD4xJaJ4Syhgm9snVGLoJkNH6aGkBzWRFqBk69iP9QHJstFvvkZ1n3uzZ1",
  "key1": "3ECQ1esAMmC6cor8xhk19X5hoNhPruyKVtaaSAcWqTbRvoDwajoJ9oybeUmVqCmvoVysv9AFqmHkZU4vWvofo3aW",
  "key2": "4KhRRuNQJwia6J5bexaqBmXPhumjDdwyBgj2HPUdNtPuzACSvsAdSaoH1fwZ6RasVHqygyfmDE9TX8CEYPAoHJFN",
  "key3": "4FTuM8Q866BgpoiPzrS37je8rtduEV21f2e9f42nMiVUhkDFgQ5PCumtSgjPg9c82utsFnSTs75vnAhmzGHYvWzf",
  "key4": "33TxuP8A2saz7nKwWWPkwJ7cV2sYVEfUboWoVvsS6RtNxdHDxdAcUkAP1kyvhoLfbTBf5NaaeK1hmj7AfBFPmn54",
  "key5": "WVxXVSx1YJUKL2fF3UnMRSb4Pawy25xZ2Pf5AJNYgYKNtmmBgwbhjWBbyT8MrBL5Unts3tgZgv8eu8NhFMm1Amv",
  "key6": "5NRos9TVYX8iV9pBJhpJ32SsiNiF77VpaqnuD6CUtYKuS9JDz1uQ9U3mFZLi86S3rirRJ6eMEt8LbQv2dxLQ7xHh",
  "key7": "2HcxAkBUrTANCxSra6j2qEXpNJszEzJibfM3rkjbEurFHMhaevU7V7vmZXseV3bRHnjPANy6TSdjPLsvE8jFvgFv",
  "key8": "5jrxMjEDd3DVVE9DDfsTHNYivryY3hSPK4ouasnQd8hfpxzsTvdhHdpaKocua6dJmdJNbJPMP8ocxxBUA78t9W8P",
  "key9": "hafR7KWaWS2kxqsALTtFjnho3Z3tGchibFsvBaWXHCfsehWbPr8bJMPmsXmE2thgFZ3mYfKoPAzsMCLcnwr4Fbq",
  "key10": "4r9Mx1Byg9gxeaq9Vn2KQkXtJ9hTdsP55pELMtvwuu2zjuABTvbWMDaW36ddvGWhcwZjFP2teaGe8rKCNacitXkX",
  "key11": "5cRtC5ddqvvbmE1b37PtaTugWWdMLQxjW82uKEzMoTAtfu1YVdaAtrMainRACQZMKBxFmof67Fq2QszhhxxRtYq8",
  "key12": "5H4fn4hKurvBzQaSE72gSWk1YfHF6G8W8ojDmbCJx1Q6H1KZ2itASQAWyHKdGcQmV9cHPXV61FkW4tcT5GT8GoDg",
  "key13": "673LTnwkSvbnae8YB5EDojSoVKEKjng7sxdn78RNM7xwU5b1wtQ2s4hs2yH69zsJCX9dDfVDx4nkDyrMPbqJNYwV",
  "key14": "5H5NVDRNz77vpHQZXirgB5fcAwWwJpkxiobg4JoXEpk2htGqe7K5Ex1NTbCAVzzLshFwmPqccMKxNENAHKUAyfGk",
  "key15": "Lrr7YrP5Nvhiups5Lt7wNT9hPQjBcytcoqqTccamMkKehjxB5FJRb6trN2yuL74wvjLTFxH6dg3RpcZ8e4zPBKL",
  "key16": "3s8775HbcFVn7RDB6eanpKE3h71q5pDxDeBakw44NWnmuWD12dEEDQyN5M8E636Mz6JcHraVzv7ZYv57qR29HGUC",
  "key17": "3MV2UkRPBXz1ZzjjWeKULSoYFh6xtaaUWs8mxb2DrrpC4TV8HpszKpPNumRjrde2Q7QrHf9SGhhAfw5E1hchpZHt",
  "key18": "4bSz8U3M1cuyEcLv1uW1e4REUtrwe6g3vggDRiMzgBX4Gon2hvkk3LwM8QZnmGv8Vnz8m27Fv9UAwbYdBJSyogW8",
  "key19": "jy8bF3E1VixEwrVjUnedQ8n3KHpURFNL5sGYBPEBXTNepEj52uShXzsrP3juH1AWicyVsGkXChRdvN81XZi2ttS",
  "key20": "3hPKXMzDW8Eku8PzxXMo3VWUYvQFUYQ4N1bUmFHWMkpYVsLT646gEtw8PY8XVaEirKaVrgLoeDiGQmE7MCERpFhR",
  "key21": "57z7FvzpinEzpNzoqanMKjEsgaHHZF3KZKyY5wHWe9P1DYdvTHxjVtEtbnD1DLHv5s1vjL25CRPdRQoAiEkYmjmB",
  "key22": "2Wtwm9wBjfyu8hRKCPVfbkFuB6HTJN3pkBR548mdBPZZ2XPsuujB3gRHjVB49uXgjR3hnw8dTEuKbZg3e1VNuiuK",
  "key23": "4CZ2eWfuUbU9HfphvXGYtgyrWwgEZMN4TSkERMmk2LkgZRT2pDbaV7bsupbiyt9bZxvomuBZMJoFAgPC3BCeMGhi",
  "key24": "qtjWvjM9EeytXDJoeLcuXif8Ft62FYXsJJecf79iPw4T2wKdi6RaK73zvhzRhaejSzp6zmityeLq87efGd4a6Hn",
  "key25": "67Cy78JV99AcT4S3Ecy6kqpZLyPrrSZRPnjUSJgfWM8CT6pChyS6gyoobKaPaaDQJBQGfDsPWjBGFkuKrV97czW",
  "key26": "4cWyZgUsv7Qeu1X6LFhgg4DaAH4Rov7XraZNkYRgaqXwZpt228fTtt6RcCxKwtq9jHzVy2VbJgW8yCZphJQdoC2c",
  "key27": "2TjF9sPsLcW4cCK2HyWuJbvUqCNZiLmrT88QSR1qT582tD95xTF1Z1BuyzVQiE6R2Gce8X1RqA3fUyGe1x1SEDZH",
  "key28": "5YJ1enpf4DLa4XRjCbTFyckVcmcVfu6Yu1L6DiLM7BUFGAULYArMfT8seWAwZvr9ueXuSGvqDpM9GW136WiSxEcu",
  "key29": "4JDVaduGHEWLQHs5AZzysv71Xh9wWrtrADRaq9eJDvTX4x6LZ3iR5sgm9ep3L1wYz9f5gu1TiySfzBU3omCKjg1L",
  "key30": "MvgvETPw9DpHSZYdqCJfPwoXUcQyHBjc3qBbXBk7MXf6Zz2gw4A4tRtH64zq4u72GnCJmZ7L6NxbdMvixbkPt7a",
  "key31": "5hBM4M7knvEqXTf8hUbt37RXNTHx2qEJrFzeWtL4U5jrFtULYT9d6v6TnyardkTaZXn6k7LtnTS4U91zEGfB1svv",
  "key32": "2kyfRAvcdedQSHBjzFByNDxGiKRq5eaDCjXXNkYS47mSSPmUKR3oFKe8shG2cstyTiGNGCQwzJpgesXJh4sDjQoL",
  "key33": "4iVj4wqUb6Y9xPyb73iL88V9asxjsuytUbbf6X3H76y7yqSr7BdXjpbfEb6jVg5B3gSp4NGbmmx7c5D3rGKaKrok",
  "key34": "3Xsk1YXQi8dVurZpmz7Fo5N2jiPgo1j8oZ4N1MvuBTnUHN9HJo6gSwaP6wGA1jYGNUmAxT6B7ewq15dgsmEJZDZV",
  "key35": "4QcAuYa52Lj6WFQqzTsh4mLcs9vdYgwArS5X7eUF82dZWs5AqBKBeNRo12N4cVHR7S5VgjKPd147Qn9GhT3Yd7nE",
  "key36": "CnWcWjbvQKaNb8QAxSQdQoWvFXztmQGM3YvdJsBwowGYiRr59uskw7HhdHxaYc57MJxic4ZsS3DyjRzWbiAg8U6",
  "key37": "5i1sYQrRVQwtWXhKahSd6UyMxRVnEZxiHwRXXwwZMr14WYhgXf1FXKJ8qjFgmNakw6vqsTH8kGVEJEtmYgavJ14Z",
  "key38": "5DBySEJ9BBsPwikmU2WeaZrd9MSBPXhSYHUX1tihQaLPLgK9DyovppKymfW5hT2X6PfywqC2osihx8NrkU3Vam3",
  "key39": "63T4tKRPg5Z8bsCqqQyPbcBnmtmXd2fWjQiRZk8v4mypk1dp4EdLeUbMJF9tMj9nzhwpbyaKbNFJFgbnfE8gBLCk",
  "key40": "DyMEw6kBYuoSNTHjskRK8Dmram67vtNPj3LUYxB8CCoJqXC9CGPccJhUQvwE718K9vdihWQF4qmRxtC34ijq1sa",
  "key41": "5wUCsbfMQZt4sfkGM8Jn4cwobrjPPxaHhaEeJgD1J3Ee7KzJePK14GE18DiT3T7ej83SQv5Bhd8icKwSC4YT6QGj",
  "key42": "Dv3zWUhwBnxZdDWMagmMnvMEWzUSgt9Xym77G7BoRaEtPjwfMTRSeX3ejNXbDoQ1CGzJSKugW7XW5vBdwE4Xkg5",
  "key43": "32GmefDtpkJrYqiH2EM2dEX9y76WonXFp1tid1rY3ZARdnMaBmsnf5E2neAE25yXUw3rxQ352RNo2Mxo9Uo36YD2",
  "key44": "y5UvfBJdZVrzQKAaYq2vymRtVhy1aFGeWeHyM9qKbAciFboYYe85JHdk9NLvJCkXs9ykTir4FWCt4MYgixcQDhq"
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
