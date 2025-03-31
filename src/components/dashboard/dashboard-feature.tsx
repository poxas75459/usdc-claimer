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
    "4KoByhe47oi2WsNsxEQmSVkeutETumkxfj2wwEsoePem8BGrtY5jNe5Up7hieMjYCbbjrK1ctPDiVk92vX8k9oEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "671Hrnc2gqMSwDWo2yaurcNnXyhYtWaR3wnrn9p21CLRUcoDRqV79RtxZ244ysKq1UXrBTMCEuXjmnwagS9Mp54w",
  "key1": "5pQkkbgAA6EGFhE54xaht3hnAHjeyxoUWJaJh8LVXuXMChT5cAemBpdd4FuUZAa1Vde1FYPXEm8eQYR7PRv21UP7",
  "key2": "2pyCSmTSqZUxHHF2zeuBPGnfV2jBuNVwBLZKpaoqMbWT4iETsgi8qB9n5RsX1g8ARBBiZnT8PTQU4brUdbX7XqBU",
  "key3": "5ku26b3D84D22h4wLZJ1uuXksqujo5PHt1coEFzaXjXmKejLwLJMLUhBftYg5sNRCn9GvWL46T9fMHAtqcqKyFay",
  "key4": "iNjRY7KcPoJuFqw5aaWvLtqWzwGsUJXzedQzMT4D1QxECWp6NGhaCsij2JQb3gCHkX3Mi1Txd7tr7m8g3WfqiCg",
  "key5": "2UHbs4Gsjinbh11P3kozyzf9ZYuFFce4rCuFeXuYxcxNi2haHefnXaqXx5wFUq6D5PnXvZ9rX8dxebPtCxZFGoU4",
  "key6": "4vwdxVXtxQ87X74gs6QxxT7Y6ZdHg3DsPACSVzZqtzMe87YkwMsAeLP1D2Up9DU5UwseaKRqPtzENcAn7c75qqgZ",
  "key7": "66EhZmvgdUP8AvuH9TuiCT1JUJzzVSS9z8Rbf8YBcZ6tmccaMMi7hDfs8QZMQofbjtmP6u64cPqFaRr3aodqp9yR",
  "key8": "3zLDKFepVEry8HUNmd3vLDxWCerthL2EzVsUJGpcE43XSscm6ZpLi9HzT9KNx6hE8WVUdpZfhZe2RpZ842kZehKk",
  "key9": "5ysnjYxQWTZfdvRHW8BYorrxGHnJWJ2dHsi8Tny7eL3NVWLZcKNk7g24eoWnYe6CBk4RTdwtNRQWDgCgVNsGeQjZ",
  "key10": "4rxH1BHUwy9A5yNWPGcpmXQbhRfioZxarf2do5wgnZSwGjt3xJ1cmAJVRkaHJziZ5vRHjNzkzANWNnQFDg6vr6sf",
  "key11": "2eoDjS331Rty5SNawGbXEFRxtCdLrU3eBESkc9s6ZFDwwg8P4SXhTZK6wjZJ8skExH5AkJEsPDhVGScAA6k74J2w",
  "key12": "2UPrG7qFh8NcHtMqQXccB2oe21HoA2zZ1CMvmQq29nJgnXTYF4jy66bsbahzpGUJLdk21TRyFxCMCNB95TW7sUzM",
  "key13": "2un8qAHSgCXPRMUsAmYneoCydACmPG9FnMsf4TgaSemVt3pRBHzanYaZTVoeNq1uhivaZC2Ey7E9LE3SPduWbPrg",
  "key14": "583Nfvfr7ewqmjM66FBzbiVaKpR9rUBFdrnc1j4iJ4wPJZDyEEPgniQ4gmMMtTSM7H14EpxpJf928xG1aSZCyPCT",
  "key15": "E2MrUxePmJ6ExkQ4Q34aJBy1UyRc7YjF29uh2LLxA2xSsu5J9ppbHNRd4kCvzbdJvGJPW2J8RMT9mYbrpcKubiV",
  "key16": "2XG3vwneNDHveiMnJZtPipxcv13Lrihaf7Gc48K9MYtqWwpTLQ93TeftfFdjc957mqCjFo1dJjffbEBG8zmXguPA",
  "key17": "4HK32Hj8W3osr9KxDstd8ujeFgtmvhJpy3FAB8WVy2JhpAtEZJgmt1msqyx8tMmJDocFpdnaZ4Bc7n8A8t2JhW7o",
  "key18": "3W3y6YkKMmXkYfdJ7M86ffbdFY3sXLr4XmowJEk1aKUdpFTneNgrMDovc7NwVeiPbMm7czWBfxAa4z7qW13eNd85",
  "key19": "2485HYHJtiZXxMfqotq3SYDkE2UekUTdE54HeWWTT6EijZmSah8L36LNPpDsmXWCZHdLssGnqoT2hy7X6KhCQbF6",
  "key20": "2ZKModSrTCpNg26nan9CwA1wfx9ArfBAdcEJrciaRRSevD4xtZTZ6bD6YLcTpYQAqz7xtozCcs9mEjZZfbNxWZD7",
  "key21": "3VSfvr7Ay25a4osNyHythFmaeo74NPFQTZFw3MAXgqg5tPfWHv1A4Yu3rS6CVEEhPQbCQm6FM5nt2G2TZ3ugbb7j",
  "key22": "421sUcykUzojXitFKAEbRSzcxiqHTijirAk1YwDqQC1KSXeoU9wFpaRLgMMVnJqj9i7jtxdH5hYwy7f396MCW83b",
  "key23": "2xrRtJaLo3poDsRzGjW8fhqsWHghSSWwpHfbtRgB69R7Bd8kX2QxsSw5KFXUus5VZmBNxod3oHRDkf9xg4Riz26u",
  "key24": "4N8UKtDEaRh7HPd4wSBfLVRtSpuYNVdc8V9MBSf1YgX5d5P9LY7XT7QxckNghfeLKqgqYWmEkpWf8jFS9Sh9ie2S",
  "key25": "4Bt71q2QQJ2YPMUWzSLrSSG11tVaAQGgcoo5eomxFXPVAvqFe6XVrM4hxSUpjERipfh83JKFw1ZQkQRtFYxEMZEh",
  "key26": "2AzrLCsuR97ii4FUBwDGQaXt3DPNSm8jck8qUBLf9k3QAXtE53A2SougoRoK7MdFhKSkUGmTKjfxuALXPJV8CCaV",
  "key27": "2mAkJabjASej72aVSAqwFY1EE6hfhF1TEfgZgpR4USccx1ezNkZrVH329zmG7giqE9tMcAxsioJEsLbKwFpmbKdN",
  "key28": "37oLXmNGhBi8nEY6cLEBpwTZaDndZnXhPc5QJCSju8pMdNoNJkhNyPqFfnV4xzZWENsmALvLMkRHyzrjRDg8sqjF",
  "key29": "5swejMdGFquMQjPgcFZ5vRWYgZ9xDnzcTiPjrcUkhxFGRfxGCg2v1gfgAaEos59T4nBR5ss7efWMSRDjNEsWoTfF",
  "key30": "3wA6GhWH67ixQSAHS6WgwjuUvgc7n4nKwg5tgjg8mqMznTFvFYMyosw2ABMZBhh1TPkSV7gRkfUa9SX61kYAQmdQ",
  "key31": "2X3ymocHy1ifYacDGxzuQbQHKem49ge8vrKNn7JLGUVBUUeHMooEvJbjq8Jh8jLBD6Ppz7uH5Su6epBRsYKupUD",
  "key32": "2UKS3j1UUGPogEoCMVRyQrSRgnVwX5Edv12ENKEcmLNiy3PmohnXygvtesAQKNxtkFxUPWB3qq6JMGCRC2mNGQ74",
  "key33": "3rhGDjSpAwyjEKbvmP6uNznjcA2oJaV6dRMehV8zeDTQvCpjYTEpsab3e9dQ8RX9Nf6LYo5pxgvNq5wDBwomCvNQ",
  "key34": "4xDmGGjAYijRN9Nzs2f5U7Btt3ojsDY2MrEZoxTA6WNFDaWn9e6KiNdXvCjMgGF5NAK4ctNMbzQHPAdmoTjQTZ32",
  "key35": "67kkx5wxyJuabnt34mCHPP5hZfCEZW5M3rFkUnMegZAUKHSYY248ubYtXMeU28xsFz1WQWVfkBNwS9k5dQ71UTgX",
  "key36": "3anyHhjwNkA4TJm64KM8b7fmQNhL4VxnJxGPMcQmKuHzr5VWwK24RUuPF4AGqGmUtgPrP3wwBburvTDBdNBRkBsY",
  "key37": "2yuz9GyMwKMqkMwZxisqrXsynFcFsZvf7mFFw2PYVEnoQzh8X15Uf9UstmALL4bAb1yTTq8K4xifWHEggfe1hsb",
  "key38": "4XZh4wsFZKikn12VJ5ACfoQbAdxoeHH1FVdZ3yArYz7wvtwu6PzBtyhJbopazyhTwwfcG2wABLLvYCsqMMPGJfbf",
  "key39": "52e817CNxVENnPbcE59BiZTbcZ9scxqzCj1jJHzbsJ5syzWP4LnPfHiqTCExSFzwMAAovtvP4FiH98LrdV78A34j"
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
