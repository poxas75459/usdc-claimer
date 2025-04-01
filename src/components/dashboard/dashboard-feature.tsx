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
    "3nxHQctvbroS8aM6KerXMXa3PmKU2d7zRRj9Y1CKMwqqpr9ivUNXs8TsT5XnAqifmpVnL4RGtcceH5QwUxmPojvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FqsUoydP5ePX8hBQDvBeL7S7kvgawdapjMmhwNg6Ps36kXfqh7hFaLpAUyCkgQ6EmewV9S6tGtcjyUmTdbLZYwU",
  "key1": "3nuHTyrZd9ATQLwwVzg7hqjQVRxFusbGwyiyXSD8mqAuZYesodttv1b1NVKbngFcRGhhiB8rR9w3t6GxzNGjQaN1",
  "key2": "2n53gXbbumP1Tj6JYAcZSrFFsYxvvvhxheaQMrdhSuW3bcmv3aHMLiDk1UxgesREGNBCTAEkNLM3migG2vTFjwH2",
  "key3": "3LrXTCxh68SWwGf1JkZzTTquudpehJC18KzMDkGzUH4rx4Hu4yCgX7wGvcb7H41fimnVUQPYZCzZEnqJjZQSs2NT",
  "key4": "4gzrn63UKjmuMMvCUsUMxiDRnG7FKCoc93myPK36k2JuzwzMH12spWzsr9mW9BwX5iJNdA63ZhaJu2DzKz5vBb4w",
  "key5": "3KaS1yKhg2zt9c7C3yBzsRDVa9hS6P9krduxdxQjyo7mNxbydJvEz2Gc1KBp2xvBnt6C5FH6xFyzUY2udCwM1hg5",
  "key6": "52s1buHtsgsGFHupnmfJHBdRh3R9qcuTA9m1XWqLoU7VqYGA2vVH149x8z51Bke8ThYmxo5bdcyksVKhH8QZe1so",
  "key7": "45yMxwoMw7zfM3DUAUTu4TvrqHwT277LLxT6v5QyYTWkGYRc5jqNLPAtbHfrUbPYjqHH2hmUfgV4rsuLKX1kF9SC",
  "key8": "3AhBiUXM4YsT9dMuuKayk877ScyHCXkvNpgWB8RR8RcNpeawXABqxc235ipVwBqBL3RGMVADZQRjuCgvcF8eF8EL",
  "key9": "EyjsTsEQaTT24Zu8UYX7ntz6BzFwFy3RwLxWBJXRDpbXbBRYnqcXvKjouYcpD7TAvHFJtXMMYJmYJYGZfCS4oYs",
  "key10": "4zqqKTupSRd4mkeHC5z5JuPi9r5cVEP5YgD3uLcW7T3E5xZu19NGvCchYG4WfZPQcU2AAByanjUndbdZvSUGU2DG",
  "key11": "2CJojV4dFuSL9QBBrPYZjpAtt8wYrChpwHt1fr4dvmsgLwHgUNaNobCqyDBNKEtHv8VBD9KgHTt3zJUqRU2Bh3nA",
  "key12": "3AnrBAtS9rUVm1RLL1o8Fe6a873UCii9a2DzAmf5BwJfdMgCET2RqoYKfjFLiQbsXjDkpicxd6UnW7EWdxvmEzqA",
  "key13": "5cjmvsvxgX29d17W3MRS9aksJ2VU6MGAeVkHkiTJFE4xDnys8gHci1yaydnZBrPnurftyVKdTZsxc54nNuMzwYE3",
  "key14": "4gRFMSSpB9nTLeuqfZqexiPgdwLvG7AmTozX6udk6zTmuB4Xf5qRtLtAuHTsCghGZgvS2Bbn6fYFzkpbZWwirDKK",
  "key15": "4zrF7DtyeHJvcE9u4Teson78ejWHxNF6Sxi1gyJ2dDkqekCaMAdryXkeujSmGwnyuJXSneRaKsjtBcJrZ54msK3m",
  "key16": "2WBDvQRYmHYauT5WEmbBqa1nVTr4j4SEAg7ADrZpc66knDEvUwzaHkm9nbHYZ84qJNZFP85ZAqeM74jHgUBykGZP",
  "key17": "499FfuKJmVieTJHgKEs2k6UKRtTo5ErGBvbbWYCBMQydqRHvzFmKtWQ7JVhsaCu2B1wex5zwDt3a8VYFdPBuWEec",
  "key18": "5oeofQLrwRRJVEgmJaE5HgJBJbhyE5saUowJrDnPJVJX6uoqw6f7eqJ7nh1HVcFf5FKuoSYhr3FLkwazdUHVW9cW",
  "key19": "3ZgiBjuoZAekURmLSG7Sk8s52WpmRj2eJqEpeWY5JAukWgTV8CkbMnKfpCm71Lx14GTWsdGPMBMpfeqi7nrUNqU6",
  "key20": "5XifoFQ4p7JbyZ4RAsFLWWmzJQfKZeRT1reFjYu6c1qjDuSANJW1VDLww4bzySYgJEuzEixjHq7jru9JtE2hHje5",
  "key21": "2LQftGVQ3jAepsdjQNrxmnyvSW8u3KUJv7U4PmYPnaPXtYVXN93C1dPBe77bUtCWHXMykN77KPPsYrKkg6o5Ln4b",
  "key22": "2iKPKEvDyDNzbtaPS9dWSi8Urq8vdEtd2eVpSzzvgQWbjzrFPXm6MawtAqNSKeyGAVTBuRHjSkBHnq6GfK93h3hK",
  "key23": "4BJWhstrwZ19w7f7kxLN5CRAYRxJVn6j7L4V6mqkF6Hna45KPMhdiYBVr5kcbGrodFDB1aPdEpcu5dB1BrfHYeRV",
  "key24": "4Nr6Afv6xPSZqpPpDZ17ptois79oTuo9sJSSUvseD8hnh7cJBAQ8i5WmGbAn1VqnM4jHy9kayMjuJmeVzgy98Mfy",
  "key25": "4U2L6FPtKz17gmWEmwPEAUG7BVUDccUsJmvUFXSNznTDq4JphZh9fqA4ZNk8oChzFzJdD492SmZAdDjsriGADRen",
  "key26": "tUPHV3YjEAukNtMY1XJhdn1LSS9tp2e2o3kewTcRq2iqcWPwc4ExMCubqufvkiATRygvu58dFzqsAd36n3eGiL6",
  "key27": "64gvAxAepwMNPBqXCauozAX6iwdMThDPTMDRF9N8T8Zx7MMAjSV4jGqV8rXoGMqxnem9D7CpeQwEDmw6J87r8Cqw",
  "key28": "2fPM7bznNPnQTa1nZcGBNLFD7QuHZe1H45fwzeKWDMihfGZYQrScAwn1U8mpaxRcx11mPqeAmQucykGEBJPUUr34"
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
