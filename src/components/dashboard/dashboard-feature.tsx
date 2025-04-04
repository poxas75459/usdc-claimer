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
    "42PVrBuLJP3PfQT4Z85C3Zq56ie5oLcdqv7GXRxVC7ifAT4P5pcTDTyUQPwDxEjchPtxToJZM32tGpi2qud6bNy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uN9rCcCExKAXxX7cjf8QxxetRYAkQpW29Q7XLYTXxd7LxfNk29rnenzRxBCekDGCzf38fZgaqktDMZXhsBziszu",
  "key1": "4SV5vuHGQXbqNTx9hWyVCXrYrLtK9dMiRh9UTccPfJgrQkB6TPr9huyw5YH5WFu1WHW8EjrPPaurBnhUYsgM5A81",
  "key2": "5VoKo1cho2LYGAKGMPNFtLXuB5SsPqpAV7rzvMGPhn5w2Yin5UwqXu2qi8yZaAezwMspMDBuWJVfJfrRwPAJoCPT",
  "key3": "4ZLcLog8c8QraiZ5u7hWi5yrMznMzfnGxjNDvZMQgLz4ThKuGr4bAFq5ep8W8reMvHohqR9u48cEUJw5Dj7FqPLj",
  "key4": "krh1ZNzoaa53DNKbDKGGbioZJvpmR879LBZW6xpYr3tJ3NfQfViYynUKB2YGfvHnoEyUKdvHJ3eqUoxVHShbtrq",
  "key5": "22xxxP8NGWgUedHzFJds8zCYSTPiZd3VqpR7pwJwnFrhfEaeBLAS67Dy1R8y2hZHQ8Q3zR75EFGN6BAA9p1dvj11",
  "key6": "3aXEpv9PaGRYMuZFfpmcf2N19JMxZqjJaDvhHRfK5RG9VGFcM3fdnVxoseWbmwXMhnQMnSZSQv2Tq6DSVySBWXVW",
  "key7": "59sgpj8Yz4HE55ahSzpGW1VUfWi2z9DEQqyrKnnccBTxrmxvnY3uZGDiWp2xUWpgiHWNcAsnqa3S3T1yJ1Rk5Hj8",
  "key8": "2meyYqMsWL6hCFeEveZfNuud9FkJDEzgtaXrzZ3PHtBU9nXeHFbBx7Kg4vmgKZcE5f8EPPeqbG9qsyq4AtFvx5XM",
  "key9": "3WQKzxWGdGKyRrMx5gWxCvCxJsYQYs4NkNcUBXGCZJRF8Kb26Pb44qd3GB5LAnXTs5zpU3UXrGd1m12FzewUGYbz",
  "key10": "5FSTJtc8a5wxgZRPzEmpcyv2VuMagfouQXXmoLaZGYSrbGEq5kXidb3F29ZztNyUTY4hxLDVWCN1z9uEQ7NoTgq1",
  "key11": "2YZwegbmgontn8qXQkPxDE6UmXtCxqTWGsksjGXn7x97XchyouyYiSwLUNgmoUoMco3gCFyRnnP8RpXyRThkQNN8",
  "key12": "2FaDLvp8FL338vhk8iZvh2sRuicskHBk4Dg8hKEtmXKEh4WpuSjyfoJy5S1ogFNDcJosKc8DcpR2yRTEN9agKJvu",
  "key13": "5JfF8zJE5TW2TQ8PVkGxNq2oBkYRgrdTtWBq3QQnU14aVCS9MuFGtj1QKavcUZ4Yy3dNVAeJxqifdSAKrQ8Kyv58",
  "key14": "2nv4iM7ncPQwAYU7dS1Ls9VVZ7RiYSGAZPdcWpyy2omTuGXsmbJSEqiQvXtXdHbfpq7kSDsK47xDtbER7boiSTAc",
  "key15": "26XokxrsYHU5SEFeJdRqUyaUnBr7GeaXcrMZRX7njojmqcXD8jzUMJgw3sHuhJbp6xayS97RtduafBxZWqZV3NpU",
  "key16": "61Zn1zwDbKyZqdGFcTyRkDZEC4BCM7jXjkq6t9aGkdqC6HvSvcGDWJqydxF7QB9ojA5LeXQETdksDfnhjGyhYXbS",
  "key17": "5doYdbWE53hBxYuijLffKfUbiR8DYk2oycXUvoc3wnZzbP6LFvYWydhuEjTr4CRE6S9Rjr4sQPDrfKnn1QVPs9ug",
  "key18": "4qgPgAJPPhAg3K6gAkrgiDsoW5nphe82GCEoywk13quQ7XvKjNZNVbBmhVFLvC64wxuCc1878XNnGFWxGALLG2xY",
  "key19": "3Q93KyzNsvzfZrE24gDdvt3vv8VkqptUdnNLoxoHkfqx6bbywnsq6BsqePm9HT1hHhW3oMmt4LgMxfcsszXQpUoQ",
  "key20": "FKpmnt8Zun1KGox54kaNtBjiu8YYhSoH31AQvFuSE7j5ywviTGE3rJGdG3i9rbeAz62i6EWAcm2itH1PmgWq3Wq",
  "key21": "4xrZErJZ7mNe7uL2QaR8KMRwhfRMaQWEVTqYWvgSk5v32DtE7tgRDY8zpRa6gHJT8TRk5o5M6WXEpPzNKXa9dbDV",
  "key22": "51TCyQwc6LB34dQPsTfD17FJMpVXbN4fnKfUSi2t1o1ELMbgQHusaMt7Vq9CTuruKKuDANj5pSUjReXRafHqzBN8",
  "key23": "5PjbJvCQrYYMFkHtYz3mWiL1toPaFQqpzT4qyUNXauZjPAFsPcuS7TJaL33f5g7B9azBMEDK8RVeFFDqnu4Qbng4",
  "key24": "2iXUe9ok2YVRrfihPaVDo9kifVzZo9gYsTzpCvvcqWFH1C4kdLudRahd2TKSPP567JHyCU4uar8snm18xanUyDHb",
  "key25": "p4CQx4cayipjNDnhvcEjt6hhNuLmbhh2M5HjNCcTBP8p9j7hME1zvRHybfqZ8jjrNhxLNpDmeJkTAzkVLWhvNLd",
  "key26": "5KzFACSKYLYEUNzVUEwuFVdoqfsVoVyKEMMqepSqju6sfXjMvYRPMAmN6JizpLi7wWPmdsU54ucyk28jPMw8RDnM",
  "key27": "4r8EJgcRYobLW7fCbro17wFDFoqFuzQaMNpnMngn9mVr7yBYrjSvpDL9VkwGT4mNWNFy31gN21JLj3ZXGzfMwK9w",
  "key28": "41WVFb8uGVteJuxiKmFNBL1Mat9J89G2g7GAGVy93Dfh3x5tnTrALJCEmroMaBxKdko8oq89EWWBger7saSqkFDt",
  "key29": "4jhYro3mx88GB543g6Uhm6vf4XizAMjpM4hJq89xi5MqthM2c6gihayZHnX6To4dR5WEtcZTmbEAgKsJxJidPY9Y"
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
