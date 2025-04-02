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
    "3opLSKPEofQCcYMnQDEGCXC7tvoc3cRCpgs5Y4hZeKzzQDGaFaqMjFLwQS3tRUjrnk6UxAWDTtSdTWL7qDUhdpAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UiGXo7sAEjwwzFwXgy5BdD2FbRvjT1YUhYFJ8GiP1JArU1fBaVrExS9kSvjvqbEZX8Cn7N9QWkArGUXHk3FrBmq",
  "key1": "iM3WCBQ8UGjWF1CgeJJgKoJVUou2ZKMfgvkzXHyiuZxZBwNRGPDibtqkyh2o32J1mNbwBNHXvH9DC1P28ZRJW4S",
  "key2": "4giiUESh5fbUq6EF8nb1ybBmFSLyVWoLvttAd59KhB7ofLECPi6ECxiMBrjQjh4HYBjHkaiHJacFQDuTpNEqZRve",
  "key3": "4uXko4YUscvB3o4VHQMxFMmUicR36UPcZQ44wgLaSuF7q3TDGxErM51MwsZyfJdEUruLpqdqjXcajvQxnCLqchon",
  "key4": "pdhJp3za2og6JYsu8qrrXVfzFN7J8UPpB7A28WqABGwybmcn5nJaJrzcYfZWFjzGECu9NFx5ZDEQLFKr32QhevH",
  "key5": "2VHaiaDy8Btscmf8VhfJePxFsE4WMSXsADewp6Vxpt2RNaTJBgQEgKBEyvrUMn7PFr2a9jB4bVrruGvhE9o7Ngop",
  "key6": "5cCuCcdHk8Gg9SA9UGy5Z5ASp17PjCnSAWSdVERC2nAanQa62Tp2DRmiMuxja1hnjXh1u1A4a4hS1dtWecU8xCSR",
  "key7": "3JG3vYrZNtAVQUfzF82hrTW6c7LKPK5HsKLNXRZZ8TEeFicivt789zT9DP5XoyZdeSEa2pVddHLD8riJiLhi7sL",
  "key8": "49wj1sZHc6peMPMMy1vtzbXHqqNYHiP8eiMKKEUj3XR7jY9mhJaqs3zVy4W7PFceLo7ynYAMrFQ4mw953RketrRt",
  "key9": "3g7Y7qEmNJyLsRQiLgzAPsKUtQomuk2aD9hvLPkdUepgp5i1mzqH2HfDWxa6VwReWqBrg12xqixpyo6LMGfKZFd3",
  "key10": "4LSW2mn47rkxwFhW7nYAuMxV2rDNKm9fYEXsU4Z4p8VmfbA5eG21pFvtyi8manbbNsgLwcCEDnN9dFDb2jtXE1fH",
  "key11": "3hzxaiqGTyTymJuQvsAon1Y6otwaokV7m2kbQHMKmMEjVPY1drRFVN7fjKJwuTRkppro7u7V21RLYpXkzBA6FFpy",
  "key12": "3kRPKpfMDKxmFAT8huLqESkx1GSQZfqZTutoCaFxk7nfde4t7eABLPB1wwV6QLX2CbESw5fdPDGwmDx2n5TR9F1Y",
  "key13": "3AyHrdP2xr9GdN6VbLLmgBi8LbXVsj9uqF9L6PjA37wxBpkjPjtMGmVtc5xXZbrSM8Ux9YqwAh93pRV9iN8vG2qN",
  "key14": "2PiKBeYqJuUKKrwfnEYiFnznj8wcu3cHxujGbzokV9TouK1KR7eW9QLmNVURa1b2bagDK7QSH6cXY5Uui2F69oqC",
  "key15": "3BUmhyBwWgCn8oxdhEL6MKZgc3uAeA1ZApx7v8FxSht2VZTStup2cGp34URTDmG27YPA1PpWT7o7UfMYggNNJv7d",
  "key16": "31EQEw8vYFbWb5nLP7y5jnfXr5U9ud55EhSn169UXYG3WbnV6bkD1SknYdWW6fG9owbFvQNyFYw38aU8tPrxQZzJ",
  "key17": "LHZtJvNFQhzroqRVU8PPgvpiergNSSWARUcWna4NkJJnxBcfM3M2Xj68zVNRJRzHp9MKJB18aqWhzZNXbWv84Fx",
  "key18": "5LhHYkcwKsXmFnkaunhpedvrNnQgn2MN2MHFv4AW3zpr7hEhXX4ULBsvzpQ5rwtpb1QrDKnJ7EZ3YagATQL5Wjiz",
  "key19": "35ymNDLXSd9LJvcMjC1Na4C6u422S3tpThLgQac4KigpbCvZDBRKTBxo467EQjhVyXZSkuRLV4VKZDKG258jbWXh",
  "key20": "5T94msEsD8ehAx84XsgXAbPfvseX9r823Eipzm6MDuvqrxNoToWoodQv87KgN4fngi2S2jj8rEwtRM9X9zddFiRu",
  "key21": "545rrhQWwgM4Bz2ASGCdBSrusSjK9bP8fGKvG4NodjxPnuDKsK9q7MbrsPyX9FynHBxHvs7LDRm6hp4mufQ9Brre",
  "key22": "MQk5kZyygtdKBgUng3zcFAqXxHvJBBqRA2cQFnK4LVpMzi5hs6NLB4C6kFM9DzM9NNDZMRRMMv9kVtaqQRkmpQA",
  "key23": "3PUFrpch87JMEVELiTFk4e7hAfrnsEquDyfMDWdrzhKtiXPgXt7htPk3qz1VrZ54MUGT12HZ77bNyxwxdPLfXULT",
  "key24": "4p7NNq3ugfuGV7v4z2rPtE9nRa9gNSi5f5FYfWTAKQRRnXDgonyiZwqYSts7yNGoebQwxaLne9kh6mcBzsa3X93y",
  "key25": "mV4kGamfqW4JQYGTMVnDaov137VjSzEyMQ6i6Sn5mkDHuiq68mpTcTAoMvsMBGXgzT4SZCV7UwYz2qKCVFZNrxs",
  "key26": "48VMXJucojsMXJCdLiPPL8pBjMhf1jWbr1YbjRVPrvnnbWvrpy8UkLJ3PD6K91FYhkAfuh6AThyFQMf1L2cQxuGv",
  "key27": "3osxE97sqBmkYAKXrf2Xp1U1UgE6ky6j4Dai325dY5ecChhCkCN9VXcbb91khdx4Wwon6nrYQoZ9Ssnvw5PFpvvm",
  "key28": "62fqhtuYCBbQLSgkvAJrrL2Z7vghXt8d6uLMz5N8VZHDBiS2UZXh6PkCwSPT2y2tKkPUQYZw95ag3C8uaPEwQG8R",
  "key29": "3ajVahjVggYRLqPDx9tey3yqJtAVdyvkrN1kg3jfnog7HjJUqNXs73nVgt8yfqYXi9mK3YyU8NEJpiSdW7XkAzSf",
  "key30": "2y5Na1icX1s8CArbjT3Gn8DWsR33pB12YaHQTpvNizi4Ck3butjgPTSQueA96CcnEnVVp7qdtyb5vfc6kcLjuExx",
  "key31": "4Qr1GSqYJvnCz5jxKnvnA66xzYi5SMDVqY27cvBdQSzp2q3rc9qARxATpsFXsBhmEunMTak5Qm3sUF6aw6ZTbDtn",
  "key32": "5t93U2tjLXXktPVeGBffWkDpc7gE6jiCk92Vy9kCaxSMaBqwM7c1bWfR6yufENiBT7d24zQjmDKmRwgyEjEFZyZG",
  "key33": "59W4GU9p6Mn9n4rBTm6wBE2XcgKwdjjpwdThMYjkCrYVVZEtModYgcvmr7wPwtcVsbQHwUmQ5dxqfR8DBnrf9mhR",
  "key34": "3tRCmqgDbKvzdtnvqcbxjrAqnpFjv8aQhBLX95AjztxSFuK1z8fEoN9MTJWxn5gzRuxVSaZeFVF3Qqdjj5HiHE44",
  "key35": "5A1EtUhtuDCyHMt8QTjzg2c4FEuCTjTi5ZrgQHBryEVnt4qStB4gC55KJwL3DD1oMyvQoBLMCMQsTXLu7D1RiRx1",
  "key36": "57RBvmKaYDT4yYyK4G9HqEkY5yCUmguYhQUB7NDZ2Pm6wtcKefidJFZuU3q6LQp8rrAizyKD2r4VeupdwdV8Ept5",
  "key37": "x88v8tS7GymumiRpcMs3rxBRTnFuneN1NuQfkQrjPtgnMKzCP5Lyy9bBao1T2suetrJeVKxv6LsnBZzsU5VGYUL",
  "key38": "4i1i11jdpPSY9A7X3fjPrVt83wYj9MHopwuPBHMUvew3rAu27ng24zeZNDGm9hhDivD3kqw4tCRins8j7tBnSecJ",
  "key39": "3AeqmW4NG4YCS927WbWWaV7mRgWFen6sgqQBvU5wzQx6s2xK8ZzcyM59T3z1CAsEJ35tBSxxgmN3t93bU1jc1xaS",
  "key40": "3eeAd7oRoL5gFmbvmxx3JSkUNcBArjsNieB2fmqDvLakRZdzEungEAVPYtHkKXgvCAWxnQ4smLVnSyuyg8qg4VFS",
  "key41": "5FAGg2AwMkJFTRA8WgcbmnXypTNhK4TFtdtRP8NWsPjgHFCgLSeFvEJLTocyK9TAGShqRerK6yaKHSqZ49spDhoo",
  "key42": "wxiXaKYh4xtpPKPk57qQLeobVyzELc2HwyUfdDfv8HjKA9XDKfDoeuCKmqt3AjgvYEy2hWDnzNM5PDjGtBPivRn",
  "key43": "vfEWQAFHvSR9g7ryssdqT9vPVFHrS9zkv72GNHwrbm4MhatiPP2GfeDQybwXXtkdfTfs7P3ErF1DtMj1273wvLe",
  "key44": "5f7J45Qskp5GkJU8pbADRXQUnjeb18DKuyFPTQarLbP4Cvc6SBvVWPK5eLF8quwACDq5WD6wNpepfae818hqFUp",
  "key45": "5FRxoU9sjsQSh5EW6bMyuHgp8riM4sasWpzgHkrB53WmyNDghqB6Q4DcUMFU9FsnWEK4J6GgxkuNn3CPRkc7jabu"
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
