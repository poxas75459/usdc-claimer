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
    "5RBQpVhsGcyWss2UkzTEapwqUaTJxZvbmgFiiLoczRhdnA5R1hsPSqmW7duMuNqh6e4bGrFeKPwZLAxiKzt6bZvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bn6PtfCzYH4s7LyvSSkCpdrXsNaeHP8qE8Lh4AiQUrigHFTvHHY5845LVh648QmBqTw78wMrjoC8oHaZHXPEW6K",
  "key1": "5i5zgYBtFej1EyaRK2w2k7jxxx8DadPXACfnYiWPMDiLs6GdftfBXwfZYSWxKgNApuR2w37VxRhGzWRjzz4mn9xs",
  "key2": "122BETX5ZHZ1vQrxitm4ixV9VCxnUyAjvkNK4knRWchK9ynuLSn25es7ZrVQxQLeyspPzmjfs7UHbcJqAxfDLa6N",
  "key3": "3hc2NiDfoXFu1LskVXrkKD2PgeoAwdWfffxejEJ8PkE9fC9M3L4hWZ1YVdxbaoCPk3SuhcMUrSgNk6fTkCMzs9s1",
  "key4": "25wLT6W3EJ41cCMKP8ZdETAbVBFwr7XiPnLD9YUhJ6ZhHxJby1ASNje3WjSRKVLVoqmsCvs2xnaANTv3rJNMMpoZ",
  "key5": "43nndUJbRXcc7FhSC1sWxFCGMLM8vzGAPr4nNrS7E6NtHfePQ2982iqE1sZ8hGQAf9bxzX5uXSfGBBRtH7h2mVBC",
  "key6": "4JvxnoH3QXjGG8vQiQzKmiuyFadbzjXKwfqjhtBLBLgoRPWz8X9ZRAwuhqepq6wMa2A34qPyk9VtMYeRQd6AC8Tn",
  "key7": "4gwR9nZTvGRvxnZsqR2hETdnkMe5pYEMDybAZJTso3XPE2hZrZyyLqzfXHpBbhqqXwCWKWpnEqCvrvH3rJFVKKQ9",
  "key8": "67mJuAemt3jF1kvdV3DhThEneUUmnWGuTS2w1rHVcLyUQ34KehtxX8hMpimcRb4GZ9gRkucUpZ9NyTxfUmeypJS6",
  "key9": "3CbaySiBN18VNg8UQ3AdLaQwUVoxyiJGT4S8UuEAw9es1FQFE6KDSLvP7nTaLjriJ8aq3hxtSgz9xDVpzvi66XuF",
  "key10": "jZNJCbvAo7yJxd8jtYPBTLwHovhdCqY59coCSenwGK5gqZVT6bt65GfBrLuwKP6VcV4YGXDk4xY6JF3cFaygRRp",
  "key11": "EiPpJVLLshjnMwBY8v2F2JwAbAkMEvtTKgmzagAo6pg37QsCyBbcKKEuJ7QkLwUjJ5ghDzTkuAticiyP5Mh5BAF",
  "key12": "HmECkvYnddYnMuQBX1AN2W5YPf4X3XWuRKKAENT2Npk3cXeKuFHUKFkwe2CGN8jna9YRtKVfuoL6Nj3ATVE5FsL",
  "key13": "4y7oHbGNaErAS5rcSwe8AmJS6LQxJcg2ssV664wucnXJ8QtQHbkqLxnXxFSp3Hs7TToHbw4TQGbWs6bHzqQk1zMW",
  "key14": "5d3F7maATv3Pkfaq3vbmJpKKDvw76rUHMwbH4paPvaQVep7FoGeuMqeXrRLZd6rS269nkdGaG7xgjo1fcMKhAZh5",
  "key15": "3UfPFtWdv7ULdwjZTchKdoFTnitTo5kQg2P2WEBFX1sUobLUvFsVcCT6V7FknHn2NzbTvQnwjsD1a94AzzDM1NvQ",
  "key16": "ip7rioqqmuZgM4Ru7MAbL5T7xrydAN26FLwAmSVbdfyxwtyZQTDterDRXxtcsUzhDS6iaFLY7vzrwUXjBPbggiV",
  "key17": "2wjhqAbDi6vAx13XrBqBuzaxTKPjjVhPSp6RqVZMkVpx5tx4TXNCdMSJ8u8a8zqB2YhyrRJjweYJZcFocGBWhVqW",
  "key18": "5xv6BF86A1So3iHNANxxkJWXzwjcgxXFKJ27mpKCnrqCsuXhium4b9dKZgKRVZEG3fbevdJ2coUYydXJRWai3TQP",
  "key19": "4TVFnnpoWZZGx1FCSJbBFZYPxqL4zTzAfCxVnGx57YS9EwTnhdF5T2rsdJ4mBhSTSJf6nxb1Qy1kbDvHN6e7Uxj7",
  "key20": "knT7m5CFbttkXaK3dvsuC58VMXWptZauzE5MmZdqf3zq4Rg2JTdCjbQhmHp2pmqpKZGw2oqbyk6npc7jNpG6upE",
  "key21": "w1bWBVbsth9usVuFdsURWM8SXgf555RniW5L2WmEWycXpcVUruVcpvbKhNq8gdpoJ2MBzYD6Yq13owy8q2QzmzP",
  "key22": "5ayMjVroxG9xX7CBNgsF3uU4NDztLXgU32qujHukyGJHYA7psBMhgfeV4HKMAcquPymZiqT7jskvVbnjfWpgBKX6",
  "key23": "2CAbXrY5NPCJad5Rtburb7yASeUbnnPAe9WbVRp84S1d31Nm3nzoertSB8RAKD4vgEpMr6GjsKbWanxAMM9fMxC4",
  "key24": "3h5ny1TVRbYXbdatABfER1XqpKtacEqD2JgXQWt4wB2wF3zaWGvyV74sSkBjuwFLAsFYu1H9o9zqde5jZPXmjEAS",
  "key25": "2bwYBBUNsjtTf9f4DuDX9MeqcjsJPX51XgKBkLzCoK6xfepoB6FNX12ggPQTjwUB6QFvSbe2Qx4yPH3FbjoTcrTo",
  "key26": "3eggF5pd9t6gHFYebBaTuLtydgeNGNmPJoMU5PXwCBFJKpXP5tHf9pQX31uBzFHypryJn4Ea9Y8fRS6faZ1obxi2",
  "key27": "3rwaZTQX2tf4jYG32W1JkFw15SXjWJSykJwHbVpgX2gEED6tgbWZfsBBsJdyXtRF8nbzb3nThycxW1WRQUZCkQLu",
  "key28": "3QyJjWa9fK88Vfzpu1yQpKudQQ3C8hQtutig4Yjb9mPmzLJvoevAFJHg5mt1ZFLsSXXpRD9Zg8rL5LtiT7JC9MAG",
  "key29": "HrwkKf7cVaPScsfMpTUf2RiY8aBg5q3d6ZhpyjAhELcoVD7cRnZSfsuKD5UZ3CGZ6GU4N3khifaDeApbd1Ki4i4",
  "key30": "3zXpEunZbFgWbA2Z1J5W2CaFmUY2CdVSpcHGfvFBCyz2EPhoXj5MCLx5Myumd3H5xMDBFXrjpuextjNw5do8A6VP",
  "key31": "4KG1vwDud3D1swF9WUZhnpBi4AJNYwsNGfhuxcUbZtS7bfSTzjQdCz4ggzLsgGDjTgKksFALgy6aLPjoEp7GPbkx",
  "key32": "3zyHW2JCpA9m6C6GLEAJtaPgWqYRFUbSx5ZgJRkikMmjcYuFaD6KvCRWsyv8Mf6Z5QE5ez5rG5QaGdBdj5D21pcR",
  "key33": "3JaFwU1pRayGWb7CsuhnhE1sus4o1Tb3EuHSdssTXBUpGPFBPqz4ohG5j8rAABXZUAfPmzCxYUZGbVtrPY7cbciD",
  "key34": "5gfKP6gNvU1iXtHeZqNjX9KP2Kqp4SjZEok37HH2PbxymJvcY86BAEeUi3FdrtwmZanAey8rFpqvk8FtWiaXc8mf",
  "key35": "3SNbf75XMjAsYjvTq53KWyNPimeaUz5seTLP7GKSNYpkezkd1boEQtTy5A3RKxeGAuxHKPLYwHbAwGzezdRuhNsb",
  "key36": "L1Y56JqvSFLprkqbdwW82wfoNwG1zxXXFB6RvKRbW7Z4zcrqtJuTeRYydxFiXvcPahs8GMQLwbdfxBzq5i8SXFR",
  "key37": "4pF83RKy5LW9YRHbcPzU81bRZzsscjgQjiE4mxjRp6pELTZfjav6PasJXvpfoKfpBGVVDYRg6DQMhdfeBJ9fdUA3",
  "key38": "55URGXkDhDfqKCSBskVy4XKXrEF1BzxCfwBLY87vBCSuyYEWydLu3KTGayrpD9C7C5iEQ5q1wMbwu7JnupfvPx92",
  "key39": "5bEcaGEPQqV36pQa8uX2k2tFMCMYSUUKacVW3R1X55NomrWXS4kdSRMfEN7U6gVCs77HoTHztApJqM6GUTS64M7F",
  "key40": "4C6CTF8EUHGuowQeopw1gajVkr48r4xNTZLDREjqbY3poapigssKcTRCb9DjgvjT4BtTnTpZPSXmwm4eakEmuFkM",
  "key41": "5YtfZno3GmS9HhspJZgRxKs28oQeUiw5HQeVTFbnrqNrFxxEvYDG9cKv4Ant1b2v873iJxHjF8ZEQZY1ZU5KB47K"
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
