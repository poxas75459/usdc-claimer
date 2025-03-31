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
    "2T6Nwoi7z3zLJxztyEFF74m1oGGeSuW7P5Z7QxqP4bw8xC8pCHT2ZnvUuYhvLAUzaWAcn5XBgi6dCGKw6GKn5jt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CJpuhBpDQLmaFQ3JgLSS4fQa1TnDd8jobCvhggMZpmgBmJ16vokEvjGxFMoZLYmehmPuwZBChLhnXti2h8HonPt",
  "key1": "HJLh7hDgW8YbURa2ZGBW9c1TEwuoA347Mdj2DsSv4knru2NUr4EsAF56isetcTy9RauQUEhga469f8K8mLYvezS",
  "key2": "4mTkJJGazwEp9XQ2XJr6T918kvcV8Qzps4NcQn2BZfgjYe1wa5RzwMQ32AjJRy6jo8dBHonb8ZPQQR7FHmPVgVKk",
  "key3": "3gLCV51EAFBVngLvbvrf1GYSE4jdKNt3DvjGD1kKk5PcXWq4Cz6TC6NrniN3XguaDwSfPgzbwJ7gEHLB4HNGkcWp",
  "key4": "2qYkjuoLtXDu9CXxjjZqQQLLwubMzzSM4peEH1soEHzUNQ1bgNizKNahhTNxH6btgaaL1CPJAgHWkF1YPAs8k5k2",
  "key5": "2do4PYn8qdJc9qpYuUfZgwdSq2t9a2MkQmFKv9iQGqoYoHUGwHPUyyELg8KSbogqNqdwyPd1rXjEmu3bpwQL6G46",
  "key6": "QDDHD9ujV4XSjixLBiEpxmvfJEsy7AfwVGz4tPNXiFNJt5yNy1rF8ehBsmt7fqY6Qbkkou88e9WpFXDjMLc19GM",
  "key7": "2p6jKUDSqgz9k4Dpy7geK72BnE2wPx8N1FAk4unPv8mvD7yRXAzAxRqEnK51SEGWNEKaJWEyixB5pVeBbCYMbY5F",
  "key8": "YLWNSDAgqW1vFpQupqHzi6gnMvDTAiizsqZF8ttmVEs1hEx4JLwnB2DQKkE14GjxREwdaUa2QiDgSkzJM3oYbXE",
  "key9": "3cyw2inp1rFJLrHLu22Bm155cPqkR6mYyg6vAzua7f8ZyztZ9Wv7YKGZgQM3ExPror7bL8FJfEPNe9KtdXAqi1X3",
  "key10": "4dSEFroPc2Jh14DftvxeFKaL3TJzbLJHPhYezMqwkS1v8K7Cx8FvcmCcYqMu1uhsWusKVLa8bnm9kYojiC1hLzDT",
  "key11": "F9yzdqtBSMHbEzmNBuCfLWkYTqCzEFdJDh2i4a6NczfAqmakDho4vwhvqNCWXTikU4BKv61eXaY76QZRG64ow8W",
  "key12": "1va4co2vp7phaLMWLYqn3zdjjkfMRFi7JPPLZKHxWgUSX9a84qdb9Vk1NhmsyenS6PwSiRH3GkB9iBPTqqmSD6X",
  "key13": "65muyptLgWTArNFc7ygqKwi1a64x5CFgVhZWMPkABoD2hJaN9YAXj64PoVU9piuuavxDz3eqy6spB7hbkvdVyrF6",
  "key14": "b9fUvVL7U2denHmZnJpUvssJwwbZFaoiNyeaNnLMt3rSWR8TS4k59pGR57GVHpSZFAeU5YQY2PyXh9wsYj6mkxT",
  "key15": "5Ts9koeSyxzStuDfsVsoPdZNpANKuvMakD6uo8FHKqzQhrk7CF42EpCbFWPfqK7aHq1cYne76iGPXvTmQHXdUbPe",
  "key16": "35dTo8KWU4kwcpnrx8cr9xY1RdDsf3yJqSYSXcvHr2WwEtpGJVbqXwirbVo4qLtPQVrptj2uyB2F7rayWKjP9wdM",
  "key17": "318YrvrTE3tp93RJLnYdRNEqUosFawPgiw8NrjskTBMh5mZc9LuCDVbszzmRGV63DaHE4BLyTny55DYzbTCwYk4g",
  "key18": "2i62LTWGLDne5tQfWfxUWPepLn93gZEpdoE7sGKtSkR6q1X3D5YfQs7fhNm4moHUdqwUBMSPwbpYoWM9UkhRmGsE",
  "key19": "41qg9ndrzXi9aQ24shFnSqJhko32J4cGnweBJRuQ6EcdqFSLJfbzj112ys6AuYYxeRUJAK6CbUMqVKgxo1QQibxW",
  "key20": "45z6BHwp16FakjoFeHeXoZV12tNkFPKHDjxVH9HShs4QjcdEQY295YVe6L2fQbUzb9NbPzXzbdEMFBcX37FvqsSB",
  "key21": "2zLSffeGgzrpJieAv9gJb3e2G89C264hnA7qbxtWa1YdAf2gkkJGaoyNVyghNFLFuGvhsQqEkZoTdwe7Qu6A4CLZ",
  "key22": "5EkD56neCGmtjkPH5yRaBgpY2VahTarodMcEGsiTqJhWberdbREGT4u8UufmcrragL72UfoxrJ4uUMBy8DSLieg7",
  "key23": "3wjWsaGF43b38M4evKKL77a2wkVu6RTHhY3btn4H4EPxc77qgqb9XqJruhTeBzoiaPonVT272HThqA9vYZEVbYaQ",
  "key24": "a8ftk9CtWeaCxwiEHrAqRBYEcu2dxoeNNCh2xHEBjxowwSL3qhTqcPGG1tWPnstBxX4n6KvmfNDT7zu9fEC3omg",
  "key25": "5ojRDiTfxfoZdCgKBD9KGGkpYWXiF4B4sZ8EW8EJsv7g2fXgCRTtkGkUmHPpi643b2thhNaRaMqaTv9ioKBmAhHb",
  "key26": "5DPiFQBqA28qhkSG1EuoHpPBdzqQY8mYAwypomvKrExh7MdvZJrnRHWprxmXJUV6mv8xeSdpvCpp9bRCoSbWPBdf",
  "key27": "6oRpUYfbo4WDw9G1doRDxy1Uj5ezcdAHpz1FJ13dLcA4V6WF6mby1ds9viE7YDV5zC9p7MQi2xxx1s9E6RHamoZ"
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
