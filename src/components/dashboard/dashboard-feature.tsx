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
    "3XxNLj3r8t92R3RemeJXCsJn3XLSD5EsY6RN61fzni4ov722czjFUJ3aTFbJe3yPyskGCMPyQTLsjM8Gqc3CP4xH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36fU29K8R8wpkcLCRQBjqGjQZzDfUFkXqvJvuYjuRenjyEb4jxGMqJwsoGgob1NCiyjb4oFF12qkSdkyDAty7Sa3",
  "key1": "ggyy5J5ucGnBjVWYFzqCsCUKB8TBmDpzgkBRKZCBVFxkNeWUB9WjE9m7hxokQGj21aph9jCqbu7jXQyzwp76HYE",
  "key2": "3NDsqTFqxnnaRugLwArrqMQq3ZP46TJNAcH2BHgNkPpCrdD7AmpboMzJYLLmeFdyqgUbnY46Ebn9FZQg7mVGBESE",
  "key3": "54UvTi4jLCXR7G77Pcx1ERwrnA4m1xgKKzpFdEbbFKVtSvQ66J1XBjEQhZbMhW6qA4iKttXemzk5zP3zUiF4dZtJ",
  "key4": "3Hq6g3JvsPYDJj7MPwFni3hYTdq3d6nC6VHbFfEqLzGfXMG2CUJJ6Rroh7MpxpRWVsjtHA15LHo93dLmV1CZiwtW",
  "key5": "4ncMV3WvJzPTARtpHyb1gfF3jQmcosXHuUzoWpufa5rCBy6fubVcHx172YgUbZXeQHU4nk9T1iQRnUDnKFBuGaHG",
  "key6": "25Xhqps2xGeF2ZRxbYX8169o6bsoPotULBKxuo8A4qDhf5g5Cx3erhe2LUGFzS5oykzw8KRRVmkAH1i4HQsUpzkR",
  "key7": "d9zdMt13TT6wmY1uopzZFZPqDhJYNUvRLfwXjsyTcjPvRtZtqToiBuzMM6ikoPqh4eN7M92yC7sZqmU1H6AYbx9",
  "key8": "S1smHUGN2MDFzeEKnHgFpTHFRVjvVJdcYsiE2Di2vcB5wcCxzSjbs5AenqZJ8PfXhKwghKager4a4trwJEXoJZo",
  "key9": "35m5gZ5NTXcEDizaHrgD78PjKcfh2b6Agm2t2Pq9mtNUCwE9PuP9PsxuCtJvR6ZBKsmrtJhGiMfDxKFaCj19cMZh",
  "key10": "maXD6BD5gCtgLMrDfSaPKpsLHhbDRJiLKT9ozRTqk5DQwrS59FBTsjYr63cN42543HvUUQQYSf1YZgA95K9WAvo",
  "key11": "3zDEnQBe3sUJtie1UgSYRTZfMgf29tcEmLMKPTe4Sa5Ypk1L2C5fQYMs4XHb3JFnhqwaf5XkUKW4hRGoZ3jsX16h",
  "key12": "3DzfCLz7Ci4xybPWEL9n7g6b3DMGQz13ueg2xmGu3GufDynJN4TV4gjU9gxMknxsgwnjodTwgtdaoPX1YLJMJJwV",
  "key13": "wAbPg9iX8mAj6xE4UQF5N93efVrjAB8umk4cuu1QrDYgwbjDaQidjztYxZ5i7FdUXKRED9nyodjmvKAEgMdXFCf",
  "key14": "5uNYxEwNFTUkM4NpkXBaPkjkuhq2g3XhcbdUZrf9g4atkHE3mAMaPZ4RLqHv9njfXe5wVrg9QMzWhJU4a3nGY8nH",
  "key15": "4js47c4aL97p5e9Y9LhCMp86qgSSTc7R9ftbJyvnQM2fMTop1BJHnHGKwLMk9Nv4RKb9YbzJo29HDtJeB9d1MEt3",
  "key16": "XRMQeF1iu5gae7kp5paf2edMdh8UqPsV1txCHxVksgq2EJYRBzxvPGqniWPn4hXyETnZobsmWDPnjaJko1Hpi65",
  "key17": "3YMJFpVT2678DNBfVeaMRVBcRQKSUp25wyXKB3PwWJuQc16WcAJf7j9N7AW2xPPwfXcnNWS7cXoQfRGNPshBALWJ",
  "key18": "5HLnEAEvXNHwqW2bdCqzZ2JyYQfSgUg7kAagh95ZUhS6CreJ2c3BJgGT76bWLYx7VvnEcnTLNH64dA8Z4D22sUfT",
  "key19": "4epNPrhvJtpNVeHq6MdBG7T3uhJNzp9sNsrvyzvSVert5p2Rb1VGimR337Mfg72PhfQDof71NAEsT1vmDq3Vu79H",
  "key20": "4wUFUFRKjL4U2MqKMH2qbTdd3iihVPiWKo9kgDMCqtytfAYrtf8ak8w8isVi6XyGHKAqJXtUxoctKhAnGDz55JT7",
  "key21": "5n4V4NDfU5xa1yaxZdH7W5wQ7Mj8RrQEqqas7BUPPoZt4p9AGmuuChmRpNMtK6iGa81AiyC2Z8Si6VZ7Vepf77fH",
  "key22": "4oHoJJW4Lgdd9sDX1nqvSuxFeYV1KQSzHXV6zsgM6LrVCXvqquy1raGogynNNdqQu4EnMkMNkYVmxCqxa17aQ4ca",
  "key23": "3UUxHi7EWumMMpxhgburHF8zzy3dXabzDL7ynyCdD9bvwJ7hxVrTtBgWLWdmTKcZ3ry5bbzqhd7CdK73wF4hjz2k",
  "key24": "2q4NAJn5chcnsXshMCj1or9V6C52tmaRDrGz6Ls9xHd1Tz83kU63QSPCSts4VnPNYe7CDYWfQsc63a7gFmNRZtgk",
  "key25": "iURKMczmGrZZSLqBsXuaVYEhpTsHALGmporcQ5F3JLd9MwdWzsNUxxgAD4juu3RBdTzMbhnPXbL9TEELX1sA5PJ",
  "key26": "JE9xGsvLTWojvRaSnqcm4264tmY2sWJ5q7p4o447BinvhmquNev1YoUYtWT1zCtnXu6CGKWnDZV5s3Hcfx5BP4K",
  "key27": "5VCpJc9iQNEhqd7rg3qjAvwQWyPPNVecB6ghyS82azXuZxEm2CzwKhRhU19epdatCzTmegjBesf3ZwMC9LEbUGCw",
  "key28": "2wrJN2p5enMCa5CJYecqMzmgwmYM9NYfCkftZcA1xGNWiXffvybxiLHJQ2FSxKgH6EiAHTJUBARRmNE8QeSwSePD",
  "key29": "Gg3G3aaTebXXV3uxGHuoCcrHAWrCsnGTPPBe8GWzN18pCULoGw2gdLGDJz325XDzoohCXNSBKZ2anZy6a4YUCYM",
  "key30": "335FYqrFw7Aqg56cArPsaUdSPyVHoDxobcPhSeDS4Xn3YrbnLhDA9mPMyE9C5b623qRVrxAzkcfRmHn5CGgBtNAk",
  "key31": "4Sd3WUVWnMxY85yLMVCsa95VZXcLHPQvAzgQnMAzeDzbsAKWV9m3aNa7A9ns1BeCdkg6C9qzW7E8SJMtVS2eytuQ",
  "key32": "2RkT5jk7SKw6T4hXKZ4ESt4BbFPGjstZfBP9t7ZKK2x7jWxWuaAMkp9LG1s75UMXWWiyjnUcVNFSLGYRK2BYVZyw",
  "key33": "5NKSPQjNPvYyFod13odsrYMQ8eA6SB2xb1PVyB3eNGMkPNijyoUfCYNQ5L3WxfGvp1uHSGhCcWHLfPd2PGx64FYj",
  "key34": "e3QaSNVW7YQe5gBrbaR48zZsk5A2ioHYSaompckzco7rypjaiZYSHT8D3AWDGKJS4ibtNpoH4fsrF2vf8nydQfe",
  "key35": "5qhurLgfYi3DHjxowc7tz6bWcjpCP3d83LcUK3tZqGBFhS9dB6YcdxWMa6zP9fAmFGTc9eX22CBFtrzBhesipMxW",
  "key36": "2mYEyN5WMN9xGDRoDGxwZqKFFAXv7tw5BPsq75C8SFA12FQwexxT2YLKshvu447jfcSQtEf368UcdmD6QRENofdf",
  "key37": "2uRT4MLWfzsJmvAEQFwJdmxyPcJq9c3SPzhnkEPR2Ho6cV8iWLWsAPmMEM3GBE5e4u6BPKo2uS1HHFbcLTf5Ve57",
  "key38": "3QSj5RwSWW3YMGFChZZyeQTFwWeC5HzTRT7sj9RJyJEcVZemGxAvG8hMTdAKEjECaBYnK5Wv8cAd74VhoGVc6nQ1",
  "key39": "5s3QkcH5PPgzs3FK1BdHF9f7sknjtdSWXUu7ApsuSsP8x4nF2yv5uSiF9oF1jPpUqMExxodz6VosezxdnSvXDFn7",
  "key40": "3ZGMfx9fMo2TeyNCKLfNCaexvkrEy9zxgbqXf14J5s8BrJFQEsDEFDfoWAMGa3su1TrEJT1nrXgDPtrbAD41V8hh",
  "key41": "zPz2CgLs7P71eTVn7UprLbE6Q6mHJzfeMwk2JWitFpZqDNbjNQCTE684aUmxobpetims1tu5Gosm9GfXnGVYH47",
  "key42": "4vr9ubPLw4VzpHS6SM54ckiv9vTfkpAQLQJjCQL5RVtdJH8iZS3rD4GYRhPiEwG3MiTcoPkZWP4MFmb86sJBLRz2",
  "key43": "5ExDPbUq4Y7cDQ5BuPXNR8ezdPjrdBY3JHeSx6EPKjXqwU2qrU18k4VinTeQo6VmgmPDb1RutSd3Kj8byaN5CVq5",
  "key44": "5KAXRpa4Qn67LngVtDcorzd9UACLRAWkGKtbrpYaDy3vYH4zn3Kb3ymTZgWAgNctMYbt5ef6zruEakMPCkqh64aK",
  "key45": "2AYavtHWNnUaFNpMv5B9V9KZWDrs13QhdrvAUJBHtwrgfbmz9p4WfRyi9BvgjR9orhPPUs9bPcsao2RewnTfBz6d"
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
