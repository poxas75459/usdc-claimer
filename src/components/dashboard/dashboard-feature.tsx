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
    "21FCUgUPkZqnPbfQdUwoQAGWjbnAjsjsMSsqT7XVwVBaP9ptV3dp7X6RJUWKU4pjKkbQk1g8MupYMzPDPQFExKoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qbARAXQDpis6HsrbdLevziayXNgULjGM1xZFXPdxnzyXN1PPHj3ypNZkzbQhFmNZ4uY7cqBRLf1tk7rMmM4KmU8",
  "key1": "2c3PgRKyQSJLTmkDwmF6D93UGdXvgdvpNh93mmADZLqxgKue1P8b6PG1BcnS9HQL8bmskrzX6T2qRwiwz3MMK7MV",
  "key2": "2US7ssXc8aTAkkKcGaAmkJGaWc6yQdCU1B7ry6pEf2rDmuALcUMw2WivYnyeSCbdzpTDJWGncY4nmtJZEML4nAnQ",
  "key3": "yFZtFDMtnVX833mFgRB3sWJ6VUmybKbnLhLEhdzDwjtjfB55ctWE3AgkbNM3a6x7gxQ7hrsGFkS46G35t1vZbUr",
  "key4": "39YJY7cGpmR8So16WuzkWhyshJYBzVjoW3vntArNVfKXHgFc43EvSKuPtfC9rnT56Bh3xbgqyUUfLAprPTShnXDQ",
  "key5": "2M6VkdsMAdCxByUAtJcMMeHPq9mni9a3o4Dr4d3hwbBtSojyjvYFhbLJTGg3MDi25ojgX7xtgW9BkSJAMH8DGBre",
  "key6": "3F7hwgzPzrJZAwSvF39KS5hnbhobTrCtFcdNXKNfkDr9NPuUysa3FEao2uwcFCYXXnxStaeAb616JqZ9KJ9kdTDj",
  "key7": "2vofiUnhTdvy1dtiTtwM2vwMqGAjRrWQpvVuDuSjJnR8K3GpDSXnh5XwFNBNcXhnHJCS8X4CZP9Xs9XZBhrwR6GV",
  "key8": "2PLwvjmvrDEcFpUmRNp8y2a2WoL3WxRBBwNioX6VPv1CmaDBrrKujd4BiY1bX3rBso9UFNtUzARh9kDEoXXRZc1",
  "key9": "46RwT2Ge45htponZEHcikGGv8WiMBQTYeuwEgHxBnT4dHVAN5rQgLKTGtndZscfnXD7wwhhfPUUKufkXC4cP6Wie",
  "key10": "4WQav82ixjYhQuPne29s18JSTq5XseSUAjNDJRYgJLvUc2dPWKZAz6nJiEXTWYX48vg6SJo8kXsYH7UnPhq7whK4",
  "key11": "4KwMJSYfg8cBVv6kdjHkyfmiNKoQUatMkaRjNdYkJqtj2iTBG9itpvaYDzezmkH7PBvxrP9YZ8TCS9e7cVZAhdyJ",
  "key12": "4nKLzhaMHE3Mn9xjVD45JyZUdmbFkpCeTnaxgvrBqJhPg5NRcPCK7NiyQkkpS5YPoNDcj3t8BZsSLP5BbwYYejA4",
  "key13": "2j5A6cQMwWrBcMEBMhTJH1tEfzVR8KQeRbWy3TfCoSruc74g9YBsxSaA6Y2LTkM41brCSgzqXJQMqoG1vxtDHAc6",
  "key14": "53PLXrKd28CWpHMTL11FgzsLhN9firqdLpWXCBCAjLesn2XTbcs1U9tCbp39vtPhVk6CWVsMP7GFLDp1WxLuf2e8",
  "key15": "5FeT3uLnMCwFiybvXmd13xG1qp7QZE8epcBsu53iSQmEeYXsTLPjYR4mFEgnD4iptaPdSy3Rmn7s9yZ8XSNEv72s",
  "key16": "5vmMq3V7s2umVqchFrzQrxpGJYbB2Nrux8Tx1rDh5eQfPXANY2zDt5KiqQ2aDt4QkubtCwUrKzemok2QyFTJAMgu",
  "key17": "56hoxKqDxs4dni4Daiead7XNZusEv5ozeScvyxPDzCkwuehX25MNRk7PeofXVzyPgsnoR71vZpXZUykf7WQdnA6S",
  "key18": "2Qv26bC2BnCQepK2PTQD6o6MEqpsJu1to6DRDKP5utEZKyEgeh9kWs4oVNB7FyQaEnUrm21ebSt9P2jiFhyrzBzu",
  "key19": "3hMEdmvQ1qiqE1kS6AiMa5MDMqV4YHd1o9a4ErhRLCvZ66VRMeRBLPNst5sXxYUpsMjjy4w4bQFzeWtwzDJ4SuHK",
  "key20": "5qxUddoxFgsCAYrFwAgwFujBaUZFzD86soVhwEfLsoqE6iygD12YLhwyWcJAKJPF6yHvLhTKMZU8Pm6SNsQjd4uS",
  "key21": "36U6V71c4Jmyh67f8CaLgHqiz83QTsrBKaCtCe5UcfJK2N5RLqVcjvXQNoTp3s8kptd6szg4bTjeC5XXzuFGqVof",
  "key22": "35jswdtCcpu992SaKLReUiHFsHovuGmanRBEK5HP1fuR6HKE3NRoqfuad1a4Qe4QXzLaDAirwocy1LG337f2aif5",
  "key23": "3YPMVFSwDTQazAJ6RmYGh2HoaLZcbJD2AXNjQU9eFWha1kbGc4CxDsEZSj7gaem6NMxedv7dEgrR2hEZ7wgKDgQ3",
  "key24": "CzuiTphKqSCmrNAaMUJ2ip9pScwwo1ijfzwkyfGB47xUi5SeWCC5oueRPXao797C5JoHYMrZmhANTjeVZypZavi",
  "key25": "5mioHjy7y3v7rTwFjmbuLWgA1rxmpXf13Bbob5cHd8qgoj1k83rAockb18G5xGR1JumpKD4dEF2f5kFbwEQSAwRt",
  "key26": "2u1t7B9Jys9ZAf9WFbuhn6Gmy4PqT1aDRWVAR2NBRmGr3webVadnHJ3b4WS5vmDhVPhmokXCLmprY5MZoZqxM6co",
  "key27": "3quRHRF4QcZ28kwP5jVzm56WK5Q64NJLmzZ8vztPNVswy6EVN63GJnvonLYPejwJRE4hbuRC8PwNL4pcXoHyLfZv",
  "key28": "n8L4iW8Ev6kyEoNmCRUUtmMuzUUKG8R41rx4cRbxk2djzJZovRNbQcvzxjuRZE8sf2V9QjjZQkjXByi6kWdWNhP",
  "key29": "2f7rVGT7TRZid3GNE9rsX9fK717VpYXcyw3nknMHZXg5xUrnvkJGyD2C1ky2ziphCFCyhBLHFqEbLzL7QpmY7a48",
  "key30": "S3WpYmSyTgrPByMRKGQTjS7j6xs6kzBod9rQQXdUTKtZSgNCQ6NnFwdfWmxkjWuYBrzzC8QaHXQfZ2JTP24y8LA",
  "key31": "3YaasqF7uudQczsRrkWYqRC2fjSGmQfYQRyqv3xod9SgUhpnebEwSBWUWJ22ATbb72h5P3sT4yYNWKYofW9VkFSU",
  "key32": "64mPnNZC6Aqf8x98mnA4rMw4C6ZHWFW8ywV3fbcEzdCfhc9AnNHEVBgSLX69Rhqr7ZnMme4UXiqfxgyaxa3qJrg",
  "key33": "5jrzbDpFUDLJsziZsuYaihJryuPd7EH87TcisLvRhAyxoUpYGPY4twNGu2zMo7gUj48BHQZiEtJfHx8jZX3oZDeK",
  "key34": "62L7hGzYJBJC6HgaT3f2ZuxVF4N9W3KEU5erM49nRnXLKkVLRRvHRTwxwfMHmngaCNkwotxdVxjRvXMDjJfnEAzN",
  "key35": "fpm5uVZYKBTW353eFsETPxGUnLFH9VPEJ88ijxpJjaa4jvm8n1r1cp2Ge2yFni6oUj9SBgub5RJcGk3j6VWEBL9",
  "key36": "41JCPEymvZDvjtmqm64GqEuCGchv6NCxrLdx1727fj6Bnaav56L1vEPnubPMCiGnFowuxzmGvdUYXdVPpRGa4aom",
  "key37": "2WXYjHRSfTHmcJGLrqyEKXmPKikawDbUMbizCn8paPkdLosuhLx4Rvi9VJmXBpqdtRHA3yww13r8KvkDHVPavkSk",
  "key38": "ktamQzwmyaVSoBqRq6i1ZKKRexXCe9yTHZiGoFBcHPD8rkHNBrpaey4zrhjjjUxeM5MUKY9jyYvQpeHFecpQqXC",
  "key39": "33cGCPy4r33LysfikxQfKb3xBYZQp8ymfjGeoyUh2s6dqTxBBNa57fJ9VZzs5NuwNUSz1GsMGQ7y19SuZFwuq4Md",
  "key40": "vuCWgv9tTqa58Fwa8GiquHM1tCjprMcmGfNMNMmP9FNG5XLoGL8BNSW6w7bjhg7n8Gc4WtFTxcPUaaABRVsKdMB",
  "key41": "32QuudvLtHpciN1SrfoLnqiJNkc3YLwJ6zYsesuXzcHKtNuBShL3MssaTHi9vjvBamwC7m8CGodG7J48ndE74V5U",
  "key42": "2F9xJTZ7Tgi2vt1HRnTt2GHKixUxPW6bTd1Dtb886Ewo4cCLN2BAongJ77JRienXXXcvN9ETUo8buihCGhtz3rhg",
  "key43": "4w6k32Uz6d9anm1gE2kiz1H1xwX18oP5r6dCsXkyqdFnKwVqTEufysjYYsiDny9xucKGCEHNegch4Rt6BEbjgxej"
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
