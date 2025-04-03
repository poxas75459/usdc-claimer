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
    "2VZn644jXieWK26SDGiAdHGKMCsa28EvtbqG1mzTywhiqv2rRVvoojxt1idqS1rrLwj9jCacrnL1EvvtYjD8PHNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LMsHaomx9bM5JcjW7tPzVdaNrDYp51T3Ch6HDsduYSppGzxic5LsJzjXEcF3uYDtypY9JYvPevzTQ1jZgczNZJv",
  "key1": "5wfDYLKg5NdH94JHVzRaqxzN4ZwtEeA6xNsjccHpJKVqai6boSZQA2sjdbfquvS3QNffJrQeys7y9z4mwCjtTjKD",
  "key2": "9gRdnNJHTxepfYDUJRn8ywiLYrmu3hhuR4Vkzw7YNWL7kwq1e9gVsWgqz2aJwu2Jgf5Y4Q111ZYsnidRzVJLHQb",
  "key3": "4uu644NJu16ipRG4WswiWKLyLW7Mjrihdy885vF5FzX8Sm8nd6nGjM7Q9amoAdbtbgZk9pmzW2L62jx1ftJYFRLQ",
  "key4": "5Gbw9sXmCaQh2rbshxeJw4srQXsv5XJxdAkLx6cv5pzbvHPme6HdE3vGyYavv71AbrkhtPKtAhrd4fb9DpAgVb5Q",
  "key5": "2kt5kTdkgJCPCEWJJ4v8NYpXV3QzbxWwjNu44T4Ax6kLdny9EYK3bP2Jg2vpDFaGFWisoBUHioXLiaxLQhwxkaqg",
  "key6": "2jjcGE25u6DPXLnym7aYSQDhasSvMDA58YrhgX9KorFmR5RD1L8uih9x8gfCjLcm9uD4Ta1KfcKxKGxQgEvsvu1T",
  "key7": "2Suek5ExbqXNzb3YH8zSdV3TpPF3NNSuqDdTcXTiUR3unQMuGRcw9aP2HsXLFzL1UFVLk8qvoDJaWHnqbKriiHFm",
  "key8": "5dyLft8jJ55GJk6WveWJ1ZbexZrY7gpaQjhXvWN8PX8geNn1aKAmsbgKwqVRL2i8fBQCB35VGXPrSJRLwnUX4zL5",
  "key9": "4A6ACrtSQ4ZWDWrzBTAzonXV7EpG991PTFErudFnbrEBDzdd3ELWE1fiFRqC9et3TQf3eAPgWqai2aCeHMGXXwsD",
  "key10": "5D68FZ23BPH4es3pigMdjymg82yHMoWJM3Eq53sGu13GEvCGFY83GEVW9YwTgDZwaLgNj6VKuuChGGCutYHEPFQp",
  "key11": "3zHCXgxeM5iw2e7Ax8kpUo2K13RjNWm1Qt4REd2bWtq7foRdjHF4Gtk59ovKryuVwbmwJFF8XSqmUseMqsxAfK8u",
  "key12": "4yzsHFkrXEjyNJBn6J9viRZJ3EJh9K4yMzDuDQutWKC8kuPqLc5qje61fLxf3LEAzgYZWDzGkayEE7okVbapefRc",
  "key13": "3vL6i5jHGN71j11bB9igksSQvb21HK48Hua1QmEAoNP7AFwd4EEoSiwaCU2SHVvWY8hZrwHMjpUwqYtSUzcx76xw",
  "key14": "2w94xQdYVLVELnizBKFpTbXLjySh9t7Sx6CbjcQtWWKc2HZ5F9srw5U2W33sveJb4F1zHiBf7fkvxY8ysFXfa1nJ",
  "key15": "2iMU4vQHsMcPBsS6K8XdWEqpjxYrccctpkzsNSRtV2Tyuqy7qWjgPop5L6aATELRGZPR9nSevd5cCMX9bTgMvZhg",
  "key16": "23ed64UYzTUppsUSL2GZRxadF7vJwb5c5e2NDfdhVBsvjMVso6sYNdMrQY2r9LCh6VTCRhez8xKmgJuao8tyUcdY",
  "key17": "5VLH3XwDdhwgQ5fQenehbB5DcRgZBF6ZBpytF7k89WFHLrT184h3krJywxNjQc8fhM8VJtEFo4hXEZ3xgUXDVrNy",
  "key18": "6AL86YQz193NawPXjNb4J2Qv6Cz7Qz74LfZkdr9gUDHd1mqy9w6Phxyum4JwbAaxCiWZM82mrgncxVnq6gtsRhm",
  "key19": "52NatXj3BQeJmjuHoPNFHLW2tjDt1Ueha7qM2MxVFNU8q1oq6NPDiKTfWnctMvTJRo99mMk1pTBXUZ3P4vp1h4T6",
  "key20": "2FiU3p3DpmCKgbeFWRGufn2cxtRnYquuXHqZoZjiAnMfxoXLSSzgZFA6DJp1uNfZxWsW1FWohW2keZXXwySktz7c",
  "key21": "5QVR2XTGf6Ruj7GuaKDdJ3LHSd42G48JVaDt1raFnyVQfKqB65REwR4wFZS8dibHs1gAwzV7VHReGd96vDSHxgNY",
  "key22": "5Nq7uruQwot1EhWVaPLCqHxVQ55EXoJiQ2eNrUrFiFAs51jZxgaLsMwbB1BJETMYmSQmsBo7XWcEeHLnN5Ruwdw4",
  "key23": "3KLE4i3sGueLbKaeA4a3Q9uLfS7eTRRuUjofmtBGc1mrU2nm7mJkqqqsrVBpmqtpFqiD57xQ9Ufw2FXJqQA9CjJ6",
  "key24": "2QGhAHmanZpmkdZVDksLSZfrupRrgrKLHUhdAtFNRasgwai5GW2qqjZdQAQuFH7D7h17Ak7JfMcdzHKJykMxPraP",
  "key25": "2xvQ94FUr3GXJ2XeGm7gEWHvJ3zn9eYgTpT6u6LvUV4gtrgHbYsmL1UJYB3oH1cyGeLe3RjR4ZPzSRvqzKAPTY3c",
  "key26": "4rPXsuEiAgkvKoDaqP7NBoVe7m9ELf1jb96xxmm2t341eijvicGRyvKBQ34vS7sB2x9NXxgHXJJkDLQ6wVRiQ1jK",
  "key27": "3d4r8obSZGw68S6qr76JaP1co3mLZyvEe3r5EZvA8qMB3YV8SkhLLgcjwikWSgkVJvtJXkDiczT5HKZVh1DjSJV2",
  "key28": "4DoeYAxNsAg1NgHr7L1ZYWdLoYwZNGsj8BbV21C6WH5QwPJ7MQZqnxDzSYq5XXXTerToNvcUvAYmU8zGRPCSgx4x",
  "key29": "25dRnjGhdC2vBD7AAC7n9RG4wZpr7zVQyTDMjcxZYTtSqYWisKoiRtEkD9g1cDAyTuFiQY9JEFcug8qJsrJfkSVZ",
  "key30": "Q9gLa338fFkywYyZ1iJeBRGKmjczbVQo2mD1RZPes95TRtbDbTQHwxTcsyPbJSr9fRcjMJezAYusRkyMYAPE2gQ",
  "key31": "3uVXyFMhJNh7tWv1vkUsqw319ABh41FkPjk16L7qjg7LRb2i1q3Vae7ve2iavTu7eaHtXPVvwsd8151CgVMVaYhD",
  "key32": "KhPTGoiwXZZEw6SbqPSswGGAM59D41j8ckJnvej1wfc1j5SVRCaL5fk9mTjAgd8tUvbtPN4aafn3nczcSPEh5Zj",
  "key33": "4w2rdaX8RCzKmRhE39cmqy6KMApwxNaA2ew3GxwA2tR6PjtBsU1kEFNJMGBn7GVYhaph3sw6DH44SoXhRyd6quMq",
  "key34": "2RjeK4SgfPD9eRsgPqQqusAmQWFwJ1kQ4NSwzx5RRE5XmXRavNfH1C7uniq1b6kn5BaLMzgG6pwQ9NDfjjxrZezP"
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
