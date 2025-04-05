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
    "2bBzRsGeWEzywGS7ncWcRjsxxfMXHkXQTRzpZxeGTtwsm4SXm7AaGbZSaD3AWyrLuBNhSi4nXv4qm834dYes1wJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b8SmRrL6HgAT3LxdybaT4QPsYqrbHD76XrcH1VrNXyLjFpTisxRqPSKyRnKBEiNXSVQMbfTPvLtyRQQPnJS1zPb",
  "key1": "3h9ArgPVgoLQaEhoaeDV2Bk8pZQzfrEQsTK9n3bFskJ6pLoKq5u3ZJifgh7aYnH9qUXMqzRPEsWraFZxV2pWdLYD",
  "key2": "2e2ahV6DF8ycSSJ6bs8QgDuE8kordhPTd93FHhmHwhqFeHdnnJ2RVAw1AqUaoqhEYT5RTkAYVFX2Ya5R9EY33yJc",
  "key3": "3d4ruwd4CvXmbURMRfgkxKgf1Azt9oNxSSQZ1bYf5kBESPKWmt32y6bptQKd36v89baSgfwkkAYP9MJX4Z8qE8h6",
  "key4": "2R1uRkVxSuUeqTFcH76EQuLNMkYeXBHU6LJfPHJi9iGBhDmipnnYhjjzhnB2p9k1oQaZhUdKAEiJEhQCy8xF3HjR",
  "key5": "2qAPekK75H3NcTjn6dJFHqvf7WHyCjeEZZozQdfduckjC3P6LxC2rE3Aasw9m4uNDTLjisDCPytF51d4mDRgfTk5",
  "key6": "2h1cg3A1stZp82CY1e7QeBBsNAvnRoH9ACs6Kmt6k1WKmcGq698MHGgss3dERCRsJtqBCUrwgqxbZ5HX66qGJ7F1",
  "key7": "3Xv4QSLd3AF5j3fCzFeXHcYse5s5yGcs5Wc1R7y8HXrEmZrDaCh7nseQmXxZSymZhUqjnVCmQhXpq8opm1gstoEy",
  "key8": "42uDHV6BuLmWVx21hciv6L53Pp1YktgGd8joHY66JKm34QQ5RmwPhNWPRzTJ7SRbGkmSpeWjDop6iSQzAZNMJ1n9",
  "key9": "3ofDypLSS5fmQuYpzs76Xe6N84SQ3HpKh7Q77JLHHWNizsTLwcjVEoX54ueG5tDMzXL2S5xPW8UJUJZfaUNMLiWM",
  "key10": "uYGE8rsU2eFzcg4m2kXYP1tjtqeYdK1E1Tv4Qmd2dKypftnTXJebztDrBqdpdNuBENQ7A4BpQs59pgFvYMyxjzb",
  "key11": "swmKYKSryBM3afmNKfwDzDeBMpBs5F8eqXv1ModDQktbjobgdnWP3E7VX15CNgmNSGCsXRKhKA5HJPDF2qiAwfs",
  "key12": "wNy634acc7bdU9ApFAGud6Qr2Ck7Zvg7DtPevLozLUYzaa7x7yAShe83EWMSYCXQQybjGVBPpXcrXV7Hvx52CpQ",
  "key13": "4jXePKXu8pSgzqu8xzJYwf5kJFDJvqJtAnNM41mVhYWYAd8dWQRVc5rWrRnjkRz9ot4V6FVGqAYx31EL5Bz6Z9pR",
  "key14": "4dNtVAnFgBtQJVtU9ZLa9SSyfH8oYzSUqchRvnBqo9AGKfDo8b29tk4RUWLoVQh8AMgX8K5TjocgW7wecSg4vKEq",
  "key15": "4AGyyUJuBGWUrDgTbLTdZUkAogpXFQp1E6V1DpV2tPizRNtEUb6zX94Ey3AqXNuPy7ZMbCSMcZhTSv9Dut6SMjFy",
  "key16": "3u1LNpuoRtj1L87Mkdk3NvP9p9kN3UsELz3mh2nXban9x4eKe7AUjVGmzzoVHkjLiVFGteKN9T2JhtwdZVnsXkUD",
  "key17": "3izgtNbSxptatnsbyUeEa7JyZJeHiYXVwQXgdKWCQpky8FzPQVLvQJ6veNWgebSoED4mcz5eYHkT5TvV5xTdRfKU",
  "key18": "2hL3mU36f7xPX4t56Yvkq8zxeQagD4TuVj2Kc2n2MuJH7mUdZPnmb2canohXREjgsGLWZumBmf7QFAjXKKHfJ7Y3",
  "key19": "2g5YXU6LVnvG9YKkBnKrEdNu3iQh5Qty59wU36rBm971GejJw1cxCNDLKtC4fBxjhdzUuNuofMre6PxsycJMUS7a",
  "key20": "4aM7URFfhGrKTJY4rV8DSoxnqGJpvnWZHKZv28aqtsdPzBTG8PrKLcPag8bMMdNmScWUytYMgp8cDQwKoj2dvoHt",
  "key21": "45ypcc9GmxopdahRVYsPDUg8jf3QCFPfon4sr6LFGwHNfaTebiknvqEBdsjyyPdatfzXBRuqSis7tZzHw9XkAZYt",
  "key22": "4aoNTgXze8UwbPJsfLqCAqPUH5BAjTeXNY6Tk5bHTfpbiAW67BQFHJyu2dsopMYJSnz7GM8p1acXJQ8Pd31emotq",
  "key23": "5qGfHKjdDAV3b4TjJVMLAT5Xyki3whuXexp6wqJJSTHv1SpuuyfFWnTANHQUsoKgoYBaH3PqAEDNq1TGScMPYrvn",
  "key24": "4zMdNgZXVu4uFBMXtk7nRYdFwyBZL1cJXFAiEdUPoPcteL3LEja5wVemhoSFHfzGHjFgmX9aq6TVwcHPS7PSxyFv",
  "key25": "248qdbYhJoXWSSwQpVSHKS9Ru9FsAt3qKHVtdnWXyv77zgRbQ36oW8C7ZifaUYcU8JhWBh7ycBw9Eu9Vm8HMcqdL",
  "key26": "5JqLQkLxSxhSpT614Kc3JN6H8Q8jKnZ4vgVNsq5V8S3moqaDFX8ZNjxoqyHCXWpnFQcwqKJbK6vc7DpvJYtGN7v9",
  "key27": "3Z5uuS5HECaH9AtxU3AjJHfq7Aw6Hp1BC1tfZng2jqi1QUiqgk6ACDNbF1imhuePWreLZ3ifCesmoBLS1PfSFXWq",
  "key28": "35ZHiNWgxQZeoL4x2E7TSqGFNtJ1t2y1Anvjec99wdRDFvKoRMtMGgqNWJ4VVJhv2f937akx1e2oSxmohCrazMS",
  "key29": "2A67skzz7GPWWaYwBhJ6n1FQmhyh2U6z7ySSAXXMeDWoPfjuGoMM7ysAUXWQxpSDrh1zk7HYLAXKoc9YzE4ps4ox",
  "key30": "5kWsrMxJQqEsjfPQ2Y8K82k5wEvpJUrNWqyP9z8BbPXZn7DkhgYs2cUCtRNZw1sBD72wU9w5rGWGHPFgGjyNSRZT",
  "key31": "5CYqvgCF3U1ZZBiYnwedg8BrmL8cznKESkb6gP9B6aMMxVqP5YNbPPLTzAj5gZCsfvgFMDkrok6qT4KJG4cCahPN",
  "key32": "EdHGM4CHrASTWX5qRLUUC3yj4HFzNS7FDZW4HWSXspAk4583LKSFgV8nY7tp1rh34UrfbK9QS9rEeTDxc3LuvEj",
  "key33": "5Kb1SGi5QwBE98k3gSBVsJMKK1rD8v4jECcUtyLwYpPYsyoqG4Nx59J1vzqDf6hGFoAvohwwxQSfjwv3JVaCz7Pq",
  "key34": "Cm88cec3pYPqD96tY5yM72CSBQxSn1qpG5Wixpf3Rn9qAygyr1b1KVxdKQN5sPbMSRUdfZuYGMkHShEbLL9v1zC",
  "key35": "4sFHo5NwporGUeMhceiyPTE4yo4nR7dp69XzdMEKnFrSr4TcSjReoJByECJ7aFzPsnsT5rLxyNQQ8qUKJjE2gKSp",
  "key36": "5PzBVXhWvuBPvijmGzHvg8QkfJb7mixe81gd1NfQEvGzSZbLHRqYjyxo6YesurHBAtGShV5z3k2FMhtsyq7gkFZj",
  "key37": "o5y2tXcnLJKDTcyCPtsyWPMtR88yKkhujb7VTKEEAxzKvQPviQVYFEx9CwrgxCpyQz449BNk3GPFQxMTh1PNji1",
  "key38": "3U2eB7WfEtqa7jyuyySdYhh8bWJngukZHqvSBXKnZq7iYZAtw8pjf6QaaT6ELwk8RkcutkqMqny1irhnkMPsdigE",
  "key39": "3DHEKGAu9ceBwKfHwF6LQYZrsNu693mQUWv9tnNDzbeoH3QZfLZ98yfYCjQJgMdwwXGf3pJst3KyhcAgvkzz9Eds",
  "key40": "3bw3AeFEznoABYRMyVnWW495J9FEwHySHFALWqkyFANzcEkDi94auKorK5o6Kj8sYmiP1nTTkVLFxgUMmN7TzEje",
  "key41": "2xvwTGDW1WarDFwuh9Uw1t75BHYgBeTpJ18WMw1eBrFdir4cihpsHESR2wcHxvJnFE8cioHqwarSBeDFkG7SvXhU",
  "key42": "2hc2q7cKMorP3B3a8XsXRPSX3iHKnGc8QaG5ho6Hqwxvpzh9YY9mGH8Kdii8aCDoe7D89dWEwySCpbeeDbRAFJ9o",
  "key43": "yRjo9b48Y9zx3fVnai3H5q1rtwxjzUqGJdRRXeUU4gxqYhpp8egU32R89Rie3tqycHEa3V8tC8wXfmMJ2vPdHVB",
  "key44": "2RXmtXn2ma2UwnsL3SLdqb9KdxdwJ96P6wLDNuhxZoQdLLeKNzhLKTdHUHqMoyZareUdirBpZJR3nBLjG8aLJ2Hx",
  "key45": "d92twvirucXyZvaQr443AVmEeSgtpRneLZzfXaTM7JStwRq2TnvSsqgUQ289qQX6UagJiHuQrmBdrQmPKx8YLqn",
  "key46": "5kBaJAUXBfrpp7UNvCjWWBGnqZxT18HirHa1L1xDU4whzGFJHcwwviX43ZcWbmSVeQ5rVrc1jChjbrbvRbRSgrsf",
  "key47": "FiyU6thzW7ut2F11kGk9MGKh3ww4CjitA8Rcv72X97GkJ9aZDrjKdJ5BAY9Muzeya1TJzjPaLMHrqHRumLnP7de",
  "key48": "37f1eJmS6d3poAPFt5pAmt6toF4RNp76GD6CPPMwb36zQW2QANh9TqTK5dXCHmss8t6iaxpjBdAVRRDFWKYmzKLP",
  "key49": "3i8Lyk2nMKQAE2wceChvECMo2SgJFeK8TVtxYjJhZoP1NcMq3d9DjWPHcC31M7byquC7EkE5zNnvLu5CVGQ8Zy1X"
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
