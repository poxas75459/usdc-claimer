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
    "FeLLxw5p4ATMNyKFvu26ar9TakAQtrJTwd4gzE2B3ZuJFgM3aZxp7jdKb5DryKunMecJ6WGkKeTqhCx26RAbuEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9NYG6bb2J8qhe5g8GH8Pxgh6C3C1wmzY3c2xEomWUdJgnniAGvEM8UvFcuLLyUUbwu6uUCGCSDC6kTALYxnYsA2",
  "key1": "2oXXP2jgk5srwTwTMbjhBrHiq9NpjLasfU3hUjCSbRBwT2RQSCW6pigjqhC7EkLgrtKzYTyk3x4vn2pVFLoSSF2J",
  "key2": "2q9Wjpe5JgvC6kAkL6c9CFBYeFVafjp1m2k1ZAHfLrbexVPXLvUHwVK9yfoQ39sy9nt8PoqXQXoh9FHB7WCPzydj",
  "key3": "3z1rj36AXkXPxjLK1rg6NtDa6z85c1DjGDeGw8M9TJ7LharQA6du6wY43W6ZvMgwtm1r7hFPwfpWD3WgbXqeEbwQ",
  "key4": "5AwrpSYwAai7geECyJb3bk1zxBCni7DC9zuc6ri2DCtmo4HnTm4ZRrLZUVUwyiRBzAXyaRmfJ3T9Dhaf3MFTcCix",
  "key5": "4XtvRxsFH5A9uhXq7CREsdD99PtTrzj44CeSGCSiiQs2e2upNg4fXNThC2TZpbUG2Mi6XNwrmz8knakRgFQie1mF",
  "key6": "Tj5urQWXgT1vRXSoXxJJ4Zf85Eznr67nWi4FrgEY5Ld359Z1YtRs2JzzQmPVhyrcXZeoRc6Qh33u8WKc43GMYJJ",
  "key7": "56ZiEwbY2pt3fioRHdUE7YCFGd8msxcoKXXQYLYiXBRyWUNPHq2tXfqGuoy8oEEvaTjX31iLFZrpnkcup47Vktct",
  "key8": "STWqDXenAKftEypRpxEayeqXNwQdpr6HkjpmbKNb9ueTXaNxXPA82m4ANCUZnKHTNT7NXcgikPCLsJx9cifnjAm",
  "key9": "2j6w4GFDY7EUp62iEjV1nQKziZEdUbVaHLUyVXfZs1JPe837BHxRMpYZRP1JyKLR5PVrp7Ydkv2ixUan85ZPA4ov",
  "key10": "3xm4VkveLtDPEC6ZWCSxnedToAY2ra4Bmy4oZiLByEsmhPqbjfB63jbJfqWjGo499Uu25B5i48ADxxjGZWDtAXAP",
  "key11": "dws1tcwQmFohYoTXuG5bKsnTycsvvNS354eayFpBgNKoS62u46xphkcHf8jRJnKcKVLKqviFK4wLhduUcGiRQV4",
  "key12": "3m7ejRPtZYyLyyJpKS6of8BZpW1keZaiLPGuHy4BQZZeanSs8HYkc1C1SwUXgmG6ZoWpdVV7Ja1qiVS9YgesprKj",
  "key13": "4vBqXowDRbzGbge5AhitJqKNywHe5bRHvoeDskq6VGwNJmrZtct2TzvnckVfU2HZKvBakCkiEmWSqocZWiRTeXzr",
  "key14": "24CcPgiUueCiwzdqKe5bcCm7x9F9NymVBDUVAkXM8ADQnfpwHLFygYdTncy7fbk1N4wbWWXe9hG27JEB2BJXkcvP",
  "key15": "244KwUyoDDKFJHKDfqVJdi7NHgxRxw7nAWC76wvtBGQ5798TK7JDDrCAYdVoFiDhrZU1XxSJMLfkgwTT393X6LeN",
  "key16": "652WGAYqoJS7uZPU3dHuJNaMSrjDcgNYqCwNgwFCEAXvLBrbriGpzui5uruSMgkWV24miT1AqeZfwvFCXC3L5u25",
  "key17": "2A9PmXYV2DSsT2FQ1fSUyFCMKLAo4fvnUAudDKPb2fuCT9wSDSBhHtFqX5QQgykgcAwhvvWFs8Y35BdDu9v7rRQV",
  "key18": "YUKJZaHTSUwvFzuGk4U5vLkQ1LB6g4taB9HzPSx5BPHXVwztnpDJUSYy3D1FR922a5QaWKFxXXC6agZ4hZoiU3y",
  "key19": "4Aao85HLVmQoDh3UVSriHQGBSY5vzLcGuVw3dTgL26XandDmpP9ZQx7xT3CodUEcnDhRwWbMmd5TudXvh4tbja9E",
  "key20": "66npPwYXhrY5qVPkuYyzhW6j33ZTJkituTSQCeTp7hTwYo3et9UZWetNER51cqHr2HDtAi9kj9Mn2HzeoGNQXJMe",
  "key21": "2ErnZFU8kDFiUaSyqwGb7c3YTvXKu452KsDinhevrcmtfG1URXW7gAsLAUteJ9eRaik3kjaeeookqMDh6rCqpUYs",
  "key22": "26LhZaxdfJtmr13ejMMhr3ewCN59zrANxU1Vx6Gm9cmWmxoWQMdpYW1KXVFfB5y2ND3tzQErhb7HNkSaLdexmz1f",
  "key23": "34G5P5JVQvggK4Fvdf8J6CnP7ZYpygLYdpQ9rTJmjVScQJ61C8z34ci4LiruZwXStczmUK5Xmqf8VreQL7kDysEG",
  "key24": "cBqXwkEeb41StdwymvaJzme1kULWwCqwL3SsCuFPxH6SM69RKjenAmZqwRJyDPCdhpemt5e7eAfbaTXcSKNgaQr",
  "key25": "LhPYw7p2uPvgjYESsPpr7Ado1iJxAo2Yw7AiuZXpvvhyy9pb91afFQod6YN5cWUGNivUX73dh6zZLCbDM1CRenH",
  "key26": "4dDh7Wh2n4T1xyQFyp6h9HAQd5yrHf9eMQSnr9axM7roH18ZbvuzUwewEtWb7J35S8WwNaLGezHcZSmHc78iekRk",
  "key27": "2ioX6BFrrmSBoikGmXV6srfZdL77hkRMXSY1GbMfB1EzokpHaAVAtqNG95gKnakrFHia3fzKgGMyXkX8L2R73Xmi",
  "key28": "2PxS6WWTEzBAGEtxP9qzKoq7iyPoz7Xe8M8CsRoSZTSazukjYcMdBqQST98SVcTGZudsXiJBYn4RgssgCpheMXYP",
  "key29": "3EwWWHQLfDGyYyEVjwskjNzFakmRauLWShu8Tgq8hJKHtLj35b9ffBonBircSXdJuhTQcZ9aGxVfYQHQfmVXbakJ",
  "key30": "5tY7EV1ep6ySPJBqTg5THNf1Wn8HoctBc2EzDdEqisgKeBctoojfaUPWsDdTsrL25nrz9kt9inUZ9GQJyzXg74ES",
  "key31": "5hMZiQjeKYZWRDDw8Lg9uxxrPUECGr9mGuJw6zRXfjtkLJaip2KiJGuDbaxWszsq71F6fA1v5UySPgRpMhiJoYmu",
  "key32": "5BfYxgTxZibRrEdass3Dr2bLJXgteoVWTB7rpbnGBjNo6G3ehNGQAJnbEyr8Pou71EpMLpJ9eF7uzZfxVf3MmQYn",
  "key33": "2kijiiH7mZvchML5hkkKT3GGZKyegRfkF5tagMLMx8JSiVEjAHGb6qG42F3T1nsvP1drraEd1G9XoTViG4AZuWgK",
  "key34": "2vghUCrEc283wSaqdbnjcXPLJMScUsGJYER7sr7yUtsWNxaLehnGsWsQtJjHQhxSA5zvgpZ4YP17jCsWheBpZB3Q"
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
