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
    "5K2XijaR7uXJbVXALFXfoKJWmbUvBsCJobr8XUfRi6v96ayHUfbnjBSuFrgsPgdtoZqDqmQUxHM4FJ1phT2SFvRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mWnEYZmAzEwfZujoZySaAtd4n3cjkch4ZrQT2vFipoHJ82BBiVB4L8nW91wHuX4kpkbV3z56yDTpv4ujyDM31Nw",
  "key1": "2rnpr5aSetJRaKK5jotb9jFpxQFKWHa38tHB7NtA22X2FJ97KG78nqdYgQvDKv6Ao9b8R5Sb3vKyufAMnzm5p3Xa",
  "key2": "4TCixU8pBsnkhpmqgANU4WnVn9yLpGmzNBB7rvBzoAAqDNeGkkQH4Q9eXnC25mMUtyFYmxdzMtGEN2uLSGdN2Gd3",
  "key3": "52cwpD7VwKnZuRq66jU7R9qt1ueSc7awJMk6bHp1Azsi276PWCkws4X1cXHN6dK8hJz2Wwkb6SxyBpVER1fBgsPo",
  "key4": "2DKZLk2v4LGQPWYTuPoh5MqbcgPwNYhMESbZ5bcZ46EGtghPVkG1k1sJr4cXDkmUdeXxpujmXoUQA5Qhjxi2iqWV",
  "key5": "4WdPFapkCrzoQCmX3LLFtRyGWH7ChZZ1H3Cjka3nbWSVmpDsVGPTHCBGbvFpToRXDRMeEPaFQLqtXHbne2TqcLEn",
  "key6": "67CY45hYmNDr5wgyQu3WBzgLVtaciz87Eajido6zTu12wScLeMdTugjr7o4YA1LbreXSHFFCpa9XQ41mRSmchN2K",
  "key7": "3ixutWrososWMraRrfMPbWSBbwgf3BVAvUhmtB8Zic3b63JmxuPsKZjZuKhaykzoUpE19GopbUUFHWco4pkfFih5",
  "key8": "5HbjMqtfibDXqtczsX8LJaHx9CKnEEbmxjD1wVFyc6fLjdbrFvQE5srEpgv4dCDuxdS72hsXVD5UPdNQaMa41pxX",
  "key9": "2w4Gtey22jejzrDCjeyjkK6sNd46KvbmMt1AmCXsAhKF7zVwQAZMmZ33qrZWjemJWNvHzPzJCxCdRZNosV98b86s",
  "key10": "3myMdhNdFCgy6F5nRaLmo8iPNcr4ZAnoTP2TFpKk4kLVFBRPVfvvPCaVrzM3h94HkJAddgKa641fw45hkr9JrN1Y",
  "key11": "5eD2YUJnG3ZFJ4wQeboMii1WqDdfWHSQeGYVvk2W4n5fRDzpac4oLDmTkrSjW2t7pcFTSpEgYdrtuUCrniV6pE4m",
  "key12": "5v4EaN2AjD3w8664FZRJFvHEnAE56gQzrrRvFMdJqkzErBzYsjn3nAZWseSKVziPWggyEy4FB1Wbtg6DzYVb2p7M",
  "key13": "4Xdpuz6fpvQyM5AYk7FUpqkAiwHEmo815v2cV4d8xd7v5fEE1NqspokgsmfciiYBek6RNq3RBt7Rqu3DvYpnj2r",
  "key14": "PxVzuicpJMtRu9ZKiRykgUubuFUd5wrjnijGM2kLKoQXsesMSJDub6EUjEusXz2xVh5nioaSCaDCU51nuZTVGL6",
  "key15": "5dRnyKbgqr9HUYKRaKJr7otg4qjcP5mox8pz9kdhy1Vy8f7Q9kyXEGdjmPXxp4Gws5fC4XJzGf3tvp2PfShSGjFG",
  "key16": "5JmjM6BrzxjUYCQofZYX9v5LVUqtyJTaNMGyeyQgJt3nJYukHHMTnnJwpEMAfnPW1NmJFb18v1L36TQy3XdGjzQM",
  "key17": "pE644CB9vHytKQ64c58v5AbyevkFqkSsL7GqZJssz5j6YRk76JdHM6zXMfdtFSMn95QTb15N1AVsHXcXT3tCM8s",
  "key18": "3Ku1s1hR72hmaBSKhuxwWnPpy49Az4ak2dZYs1aiLAKnXbkHYurpVzCVxfYDgoxxD1PrHrjq4cGae6vbKXjfoTYu",
  "key19": "4CWN5zEBXQkg22mPoYq6Lsd4bPsx4MjQu6neXjA9UrxxBhzJBQeUvhSoVQmPjHzLUBenC8nSw9neUVXQrF5ohxuC",
  "key20": "CKFTjT26nHMZzrBarhDK7Tai1bP9pZTqsqcABghTuvP1mFHGzvSCC3jrXHA7ujHog8uKxBsuGXnvyVxVVs8Thoq",
  "key21": "3Ah2zpRuYYR3cKk2tayLQGHM5au9xVyhS3eoB1gCQSZUGfYCHjEW64afAYdpMzik5KCabHoUCzsc9pUvXcc7QNba",
  "key22": "2VeLYvUQ6SnuU5vjpoowCSo3gKbYgYfvZEmG6iZW5ps9Man4otRSbZndBHRmVL7WvTTa9TKuijxGvmRMTycjvZSL",
  "key23": "4QVNQVUYRBadx6RwkBaCAmUdppAC9MKdZyNdnzGNvUK9toHfxynRhKAjNaYmeXWrbnLCv9KWJoVgFsYfwsxHARNN",
  "key24": "qaWWauyE1U9FPT4BrdKJHqW3oWTvp6YPGWcEP9rrJ1JaZFLxjifeQ7hq6zXn6vtuzmL2GE7pvCaYkVxZjQFb4A7"
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
