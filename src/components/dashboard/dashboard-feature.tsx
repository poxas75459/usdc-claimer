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
    "NKZY8owVo9bA6NhVdgMfXa1QSVb19UZDXbz9BfLVsPyhNHwsYp2gtS2FtNKQ7drsXExVVFT79g3252WB1Sxuu1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nZqDmmYGzJYMDqYm9bbWQJZFqgxLWJ6c6mfGXQatTg9EuPg3NEuFEHUcHFXtVDs9SnsaPicfGTYRMzF5Cf4LV2P",
  "key1": "5eDGGk4vjSQbWgjPUeJHEdnXjrB8xaYZbxqib6BNXjZQFuq45TMNV4NydEpPBD7eo94Mey7J2sUQDhMKBwgfmS2J",
  "key2": "2YZCSDHY5axFDenk2s4asfkyamah3WmijqxphxdYppyXF746v5cN7F98BsYnX19GWZ6uSZ8RQJ6sxwp9Y4RMG9Y3",
  "key3": "3TWonueUtqFMdQQJYuoPq3hxuzBCfADCMKMw2xpLuQF5RnUUqjSL6CuvZbMLjPKpDSWLZrqaD4kJR9cpdUGe7wRd",
  "key4": "3JqTyMzhRJvop6s3YpxkYtAkZuVCfkdHv2kyUmbwZ4NURgivH4PG3JW9EVLLpM3b7WjwWT8TrHmjhyCmDRwV9Eon",
  "key5": "4ocfTcASnenRC1KBpnnCGs5KtCdhkSbMT8GN9E9M9XsnryHmQh3DQ44HJwVj5W2aSSttWRAbMvYRHtLBUw5NPmP7",
  "key6": "651Rs8iobWu5nzNGYxTRsmtG1Tk5357hqW5jpFcrvjkVTP9GVTCW6naiTuwV14vTqwp3sQVim5qZBEoZfUjMkniY",
  "key7": "5omXbonh8GK1Zr9ubKNn5st3qdumRkLLa8n828QzY7gmtGSK8Fj9jtUCGa9D9yKSd8RVbL7B3Di2V3svVSAMzqrL",
  "key8": "A53wTbiQNm4EBCRYeMNSNxpXxX94mS1dgxM7WcgYSXyiQird78UMBZAN9E9rTXej2je3yLu1o48fJebeVSSxvVp",
  "key9": "5tSTV58rxiRmNo52rs4pYJrA1f4C5Ug4YURN8EZWtLtnY6hRrc6ztwpeP68kjfvdALDXonXTyVKdtKWpdVyPVAaF",
  "key10": "BKuC534ANUfahZJYvk9SQWQU3VCxg6c5cQzkojjy6YXnGYKadzngL16tekpC6MQtj9w42bg6fec6n4jc8wUTnbd",
  "key11": "33LKxR4sfLiYqZ4WsTMCQhjfuXKXjemJN5CHiDEdGsrFWDZq6UXQ6ZyBHwFP99gvmbqduQFyMCN4vdWToJgXPgwm",
  "key12": "5iqfHR3q9bJ3zmbggZqScA582szj5qZVUD7VdiAjod1x44V8nHoMk8sDcRV1SeRmZoxrEVoJFtErMoYRH5zSbe9p",
  "key13": "2ajhQ7sgUr9eUTPE7DfwZZ8puCbrK9aNpkmRPPedkZfAGFUongt2m4xxzn3cg2gj9i3uBMxPLFYT8TMPHoGghVrd",
  "key14": "61itZVbRrQzfxQ9veZH7Ad35pj4GerjsXfXU36s9R3Ue4H39JmT5eyuqPyeGraDFMWkwgQgJ84XMQhq5aQPLiUFL",
  "key15": "3h6AQHnXmbt8UWEbQiqqEK31E5QrjSpe1DTiGzHLSakSXoWqMzaHQo76kZT7i2B8WZ8FtwH1yw75PqKijyCakAof",
  "key16": "3i9c5koS7uyQPGsVAXmUbkBUfcqbw71cgW27jkXTXZR4KhrxuEYrzt2CPqUved5u6NgM8PNyRy1BjchC3CuFcxFy",
  "key17": "4nhJtS7tQiBUpYk4jdvk6ENV6dF1BdJrJ84yE7y7guR4JXuZAkvasVwfviJd6zEjJadc1daf8tJbd8ufAdeUw3yg",
  "key18": "4Zu7fAiGAChPoyefwaZ6K73zFQ5jJZkEjof2rUMZByq5x7h8UdH4wQ74mvsESb4mR3ezJ9kCcsBq3A8kWNoKL3fx",
  "key19": "4Z8CD9JCu5E5JHZmz82Rhdna6E8c5iQsscKENcVPkY9H1N2BA9FeWK51EKA29Fcm5i6GoYGGEC2cir5mfb399Len",
  "key20": "5t6Z3UhXmF5Hu3sNvP3DSZYS6hjftTPg4cVUQd4CoW6nYwyofhmqbym2QvWZGBQo4x4cS3wGAeiXGXWbHfg1Queh",
  "key21": "4WpipSzzKkTQtCbobzD6Rp72UoSi9EniJk2kQghLgxhZs1PdF5msFP2pkQtAHMqqzwC6xt9oY9swvK8tBpQWLaz5",
  "key22": "UJ5dGGM1QqpKo5gRh142kUNt86s5QAPUsJUeSNtdcRPmPeLoS3Yi9vhBrab5giFAntQqKCDKYs44vccaanZvXje",
  "key23": "5zjo25HYinkejZqFmTHD9LQoeqMes4XNZfqN2oaMKk7aYu7QjsCTZrzPd4PMVNfa8vhc4ePQWwmysUyntb6s7YPW",
  "key24": "5ngyp49NFqKe9RF4Jy7ZFANSZcH6dAGmqf527KH8RsJBmVPDQmv9uUhqUZUogVJWv9SiQctDVXD1LgznfcM3HFPb",
  "key25": "8y8ukZHkFd9KDb8Z6VeNWZr1DcBmSbKrbMQzFedo8hLsyUKzLNVhVd12EoTyJfNqTa19HMpRLPND2yEY8PkVnLj",
  "key26": "3zLNfaQLxQ2dyshcKLfgRtqeC9KhgHX9Gbpuzca4DX42jUMxnevzUy2wjiEq6xKrv63dKCpVc64jRMXnPVGgkFPw",
  "key27": "3mEMHB9FVGh5GNqnnmiLWgZQmnuzJziNzddtCqwi7bbEwJds7d3XhMDgrc6CYXf86XUZkmX2KcHSqTvdMHcyrG3b",
  "key28": "4yj1GCx2yYrqPegWsbow99bjWXNUPVbVwWrff6a3cXfJ7tbYQ1Ew1dXj3ZsizkTdFqWxbzcYgp6M69EUNM8nKpVk",
  "key29": "2DLPyvdc7yWDDkFThW6nXf42jH1Gbf6fD4WWWLgVES353Unwri9hLfSVUnE6rdnerXwueUPcN9xrYGUVv9SQVaBo",
  "key30": "4AuDVwuS1k8xK9Par8fiA37uer3jSPKmZDP4ZJzrEjxqzK11VyYjzM2m2EbSP5tyrkzsCL4jtCKEwrJo5WnYacs7",
  "key31": "5VBTbpeix44jWKvQPC3kmEWprTnaoS1bZKVhSAFGPU7aaHhaUnZQYhSWbhqpEjviZdmKTPrpQu6wyn6o3YVn7Wge",
  "key32": "CtMXF9t947a7BJc4sAHGDqXUPxztpXGMmEjXMjTGTmoEz7oFGCZWMTYACx3mLrZRav41Qpp26Mrf7GevYy4GL35",
  "key33": "4yQ8w5iVyRfHePX7jCPN1ZdPKXo5JCN4Tqbn7LQrPDWRuygagicdncTcZvkKi4wrQqoPqbnha4KqBdSpby2AhpHg"
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
