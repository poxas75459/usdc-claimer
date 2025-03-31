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
    "44K8BWHdD6NxTTKSf2Tm5uLR4jffMHdERwN3rznwjpiymCHkx6b7tx7D3sqKzwSmVvRdqhEpK2t8U7UxfJQnEuMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkHkSR6k5GM6dpVRjH2iRBxX1qmL7FQpgexfT9Mn65DSC1SkzqHn9cKPVhVqbxQWnqX2ujK7SsQvbgMQ1J5Whio",
  "key1": "31dJx7EBLRJC54kqk7S4UdTGkVEPPKuqzJrA5bveJs7NghiYXK3XNPEDyRo6YgVsmsiE3sT9WKRYzLYsCYZSwtr6",
  "key2": "5Liijm6WuQM46Md8tHQVPJCQhq7QkHkuqwQSfKk812Vf9Lv6YSHHpVGnyABnxiVXQiJmxJVToFePitYhC4gDkjQe",
  "key3": "5YCC7xJczCcenmELj8nmueguMmvby2t1GymjjM3kwchTdGT3Gdej9bnEVq7EtQTFbLtjSKWwUghhy8jJuJNGRDUy",
  "key4": "v9qnp6xfUJY29g6zSHhpimyWvEndBWNY8V4668FTktoRVzgzuUUT6GdP1Mb6fHBvMMfv8twbu4kK2pPVtfmvuYR",
  "key5": "4QiyuapWa8vkRUqWumxJunLgSiwVdsCnYEVrCGqRrcvSBMX8b6SGXeNqVSnGMrZ5qUTkstfM9PzTKKXa3DpQ1LVb",
  "key6": "5PtqjYeLZsTthwty6gKPXTjeKW2Zv3a3wnmko7eZuGCRJyJQSXCuvFnfiHQ2LvaPV4PFUTZY8vhgi9aGMgAavjVJ",
  "key7": "5rCUM2YNGfGFzN5aFub22sUZw7S962irFpnyNKXKdMzpkdvUAcpNSS3v2QF27KmTLyRQfnvCU7JUH2wfmDjzo5Cx",
  "key8": "2LVNXukX61t2WbiEKnmCj8RTewZSjqEssqNffoetUFBzFm5zGGV2irnjcwPmyYgmEkziUVd2nPbtitpGheyynkTa",
  "key9": "svuiUvNYr44xkVk6vPUsVoCK7wWRY6vkVAEfkF1NGQW8eLhR2gETfKMjw65nuPZx3fJCq742h1umsw3duGthr6s",
  "key10": "4YJpG4DMD6eSigujQoeRHsRhdQEG7SkNc84cFKm3UHGxqkPe1du5NyYg8osMDK8KHHkSLrMYVvuJSrRGVMF985wq",
  "key11": "dhQMrmX969ZrSYfVMUUEjqthPguTMABKzZ92p1gdxADUgKkRmxfFuKNSQmHL8aE3VxrLSNyT546dssmWiu9pVNW",
  "key12": "2yTVn4enedcjEogcyWrp8xJryKMAM2pW1AkSWezxU3JuzyUoE293TKCBpLMCUCtQjgvoAZ4cGqSDSgfWujRfih2Q",
  "key13": "5bfXmEnt9YBHMeSVWZTfMd1GxC5wyw4cei645CuRYF4oMt9EgthyeAUAUhhATvwJ5YD8PCVjbZQWyV6d3nX3HVuY",
  "key14": "59mmdW7MR1HVq8XzXjbaKPfMKirene35thexJ61GUknf2ktPovYkV3RFnnRF9GdAA9mvydwNRqGTf9CtNnmqPK8p",
  "key15": "2gdUYVLD6qKtrZuJ4eZjstyjYeNgZtef6SpAoHXbsBVu1XbhxFmaditnGN3aLzj9hMQVzveQCnksWFjzJ6TT2DKB",
  "key16": "F4TDhXizASjuaSu1BRS2FWw2DHdzEGRRBf3U52okyKR3AnGTLUe968QqtFgi472t3fLTsRLLo15883tTZFcsoZJ",
  "key17": "2QNq2k8tQ3uXGxvxjW5ucohKcrSWLtyxv9mKJQQMPjwHSNHyFpQJwTXfvrpvFUquCzzEVxwjN7Cbh8mxqRR27z3m",
  "key18": "4T84HmPWqghra5LxRvmcozszGFqeqDuCd6ALXdoke5HRk4XU3wcL9NeF1SYbTXM1nFnhPw9zKNgkfaNjU4GcGrsS",
  "key19": "nEaDW8Nh8AJKsjnASyAvm8PZAtCKv2ZvTF7MGqQv3YyaamDenCkyVczsLCCWcHGFuMGcgwhTVNEc4ZYqqDKkCbP",
  "key20": "5sGYtpvJGMGgyffjq3k8jPeeeCJAi1x7RmUg7U8tuspExUjdRkSFfQCtz24yMWBQj32CrL28QZCYVjN67g1UrgeT",
  "key21": "4u7QSia3PBLsckdQJQZtmG5YohDWw1YG7FCVAr6DZG9Get2ap47dXaRWdFLGuBk3HuqVuDSNehGhRa6HtZRPi8ci",
  "key22": "3EXYFgjBcYBE6TgHaDdKrACFs1fwDBp831sjakShgnaWi7NDyYhsD7RNGSgcKNH7PFXTqVQnmNZzfEdhDPyQXS5B",
  "key23": "4uKj9NXBTjNqAgrL8aN2sEF6FXAwNvFC98ae4ntzaPoykewMZrRpMAnC51ikTXRqmPxNhQDBEeGcJ92RxKdX2rii",
  "key24": "44MejDMBymznnP8ZB4ZmiXTbJLFgTzVfoXHD5wtEpwQVenoLbscPkjmE3gPZiRu7wS3Qjot1WKirQU9ZxWNG9dfe",
  "key25": "h37Aeprv3B6RCRgd8E3RHvcfKRvJHQGwP6Fps7CukvQfU4NzRLPn8TKiJaUkqJbKiZu5jfNa7c6wrTKtuA1W6ai",
  "key26": "5UYq6uAaywFgbSY91AL69qeXiDNbNqy9fei8rb87TLiY5Pxdbi8dynp43tquw7Kgyetsf6DKhq4BESJtr9fGuoKY",
  "key27": "4UvUwNWXtZCv6B34K1iQS5zgMcDBcfdzB7DfaQuccpHbD14ruGuB2SUwj4uhYSgYrhTRE2djH6YWKMo7wZDtG1JK",
  "key28": "3tvUeHGLAnziNvL2TSWeaoAnaiK6VWiyY9FyQwpDEcb2eyiBgWvUdgJ6BnFga1ZmMwBiWq7aMWQb8uHV7QzDi4TD",
  "key29": "4ePp6rmFvw2qsEBrv5YmbyNZG3NC3CoyTHqZNyUBZnksQx4Cb18J6htsyPwg6dsoaaoafzyPZ7exv8rGNjqJAVeV",
  "key30": "4SSD3DWjhQvHDGYDwFrqVivbSknqMdjk9KC7hD1inomJ9t4NWKJxGaxKHvTbDrpVawfCaCM6Nx6edBJMLG8cw6YV",
  "key31": "5t1mVEj4aqQupPeBdZQhio7m6yXC1toSdeuRifdhvQzNFBYewjv5b23WaVnT9aFasKoBRJhEziDZBtShHqB3WarV",
  "key32": "5sHtZj951Atng7K82ueFf5H28VtJVKYh7tXN5SSYocL9acWot7LVGC83VMnRE95jZt9YDj185sjX9k9PJvj2Y97u",
  "key33": "4HBERQVRCgNCESiSbDZoyNKPtS2aP13e9ZPTGViDTZVTyF1mqJeKJcNLFxT1iKKnaHfZpt19vzCeeCN4picpherx",
  "key34": "htqCgVgimgdh2YUhnxpNvsgC5znLr9hoRFwhUhA3BEoCmewcUVgoabWEoxQD9DMKvH7dz9qGpCcWstpUadLrWrw",
  "key35": "56KwvR1aNN8eiPG3NzqUdKVucaipFaD7MsikKVARUAjx32UYRYZGdyJX4Gx9XcQDfY6K8td8GEjy9wUZXJd5DxxK",
  "key36": "2L4YKesv8FkqxUbYSmz28t8wpSEgduqCvvhrRUPkDNo6tytTX5Jt8iNWzJjD5Ff1U9DRNSMAes2g7Tyays5vcYwY",
  "key37": "3o15ZfK94uMaTz1DskCQEvA4iYJWDtkRJgG2hKiSZCthUJoGwmmSkA1j561oTFjxs8scTSPJZ8ZoXL8BKJ2uCu1q",
  "key38": "2zKnaqBfQZoAiXKJByMrN8LnoW2ebGaZ4kAXUNRpMg5bW4dJ5CvkUenwDPFE16ZbF4PTZTYQd3rwAGGjyx2uWDv9",
  "key39": "2HJRKhoiUo1dWzSZ1eTGUSzey8SG8p4toxzdYRopksFtmDFTFxcgmR9KRCfU1v7QAKA1SVB2qxJL9H2XVUgmvrcW",
  "key40": "5nsey97wG9AW5rku2UGXkNb8R71d34smJGw7oRy52umgFeSZBXZhZuM7e1JT9Dvt5FTQBLn4saXkm8ZGv1m6QkKj",
  "key41": "4C5dsjZe6TU5Lxghs6kiiKWSM5iTzC3AeZLoUAHtswhUU772podNESJ8kUryJpugi1Y1xxoWNJtWsjTLPXLrWGV3",
  "key42": "G78L5jTFdjFS6tVjFuBbo4rVBCLZMXhpFWmKUvgu18Jr7hDnWjCpDA1P6h4xochXXzseASHP8D5ACiioSz58dZ6",
  "key43": "sd6AUA2UWRQra3KQfarpxLoQ6B7PsoRy1J8MsrcEVdWGcxrSewM6YJKsJWZNJufTHFHHTkLH1xKUwbJAyLWMzH8",
  "key44": "2F4QbfPWjfqzLDRBo7VqZz2wGuYVcSUkzVAgP1qtBBL7sH7sLyDmsQNzoPDPW9SgG5iyKtXWwj1antEj8pRrC6gf",
  "key45": "4gDhb3TvoQuRGz1qdWfQL53u4sDz5WGpfPbq6Xom46uwpY8b44ExqGjFLq1JEaBCdP6ZGTnBMJdJp3DLA4bQ3JSp",
  "key46": "3TgLsSg9km96MW52eBtcnhKtJxeJ3YVuhGzZZTDQFYr9TLPUJpW8eqg8EN45Xmv8K91UGh68pcWjffqkPDvQ4ZT5",
  "key47": "4KiATpJquR9wCUy9EzUQTAhbQVdcbHRYzFnGEJURN4Ddp9CgKa3o9sFT6EdUDCQ9Y3ebDJTS4UAMTHJeBvmGbfNT",
  "key48": "5DvpFcoKuTHpazZRsXkkLzmwCyFvPzm8DBgkRUaG4xae9828SoZFD53ywSoRc7CBgqvgCyfQguHQvj1XX9SN9m3M"
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
