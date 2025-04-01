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
    "2kaJnSAEu73Rsgcodyn74jLVMnWJxii71MSX8QhrxKuz1VuqmzKZeSzksAMFWzo3MNuoy1diheMQHY8aCPr3NLvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkjRYfeFXVsjNVV5VHEyw1Kutxik35QFJP8XCUg7CsWHn4yL7swFjEoGifHVeGAaivpPvNt9eG8eR3TAac4UR54",
  "key1": "4PMSZA9qeaCuGk61LnC7uLGHEgbhPdtyB86yK9ibu2xwUJMJppUegpZeAWq7ntEvMe8PfqqD9M5vHmKWe8b6VpKo",
  "key2": "3FiRmoXAc4SACQW2J259fATUB9huhEnbQSMCcQoMTqqcgZLaRDWzUTt9ia7uJHmqt6DCWEx8VtHU3uY2CJD6RyCz",
  "key3": "2YaN8rDmmrfZZMa72b3KeUBJiW9uty7oM13eqx56Ld6k3TnK8SAxoRTEhJHsizRJpuWP6ydSrBZiNf6pYevr5js7",
  "key4": "4ZSYzZyRMXkCRXMttU9GK1hrhybdZNVfJ7szJRjvYKZmAPBaJUBLLy6KFZAYeYUG2EYX2jzq1Vudg3pZWY4Xe7RS",
  "key5": "4imhSsco2dsg1H2wz7YjyPjPXH4kUGxoLkptSyMnprKow9Sy8CzZRYYgq2iN3Q9FeqoTehJdobi27PHzhkg3ibqB",
  "key6": "55BciVYx3EYWhCWfpR4W7AYM83UNqB6LbRWFyaMGsvNTn1wxbMhW3UeAa5ivkgZb4ptnegNUYAvgX46g9v8Vg6eo",
  "key7": "2xKr7tYgW4MTSCCRmy1L23Dy1Thx6D2yhzJtNCK2skdiCjbm71rtE4mncY7C7pNbkQC9hERA7qaRWcHzcs8SxD3B",
  "key8": "4BgpRpLCpiDJEnCnu78MmtP4qwKWyjvjHiN7N7BtU5tnzvPgj5BxmPnW2NRS1QMTeezLbya8WqyXhcSsH9StJJos",
  "key9": "5ckBYoygwZXjUazA5UkepZ9V2ntwfpguE4aTPwk4rnuDzyCNbhX6pBv1HVoD45NowjcWdoV2DbG7x5Lz7K8jPqiW",
  "key10": "4F9ZwWC7WYPsBF9iQyr7mPZK3mDzBbFF81XWk3BAedsihQoK2DKGEvjspTSrhsKYw1W8jmwyu76qDPvCWggxVmwa",
  "key11": "3BT5UCDxjE3PQjocHEPJGFifBvkkijfPWWbV3s1VwTT3dFjNq9s2iHpKEzaMrm6WhvveyfRJo1CnxLL2FLJasbNJ",
  "key12": "49w5WoADPsEGHPpHT17GvV3vdfbbVeqbouSjUZ2K3h4PfhQmGBdnJ1TYZGCfdSm1EHREVQuGm4ynNDJPjbfAwcco",
  "key13": "3J6tbntcqWP5RmyFA7oA4JkMWMJ8EsKqe4QugYfipoD6hrXE5mcT96fM3LXhmbaURmxdUmzVXHGaGBDouMEATjxp",
  "key14": "2YxUgbpY754sunGLGaitPP7c6wkudi1Rs7Qq8MrkSxZvhXndNosiB7S8FA5DhXTy1RuBh5fKTpkgiF2Ykh9Lct2W",
  "key15": "4dCbsgiiKKS9yUVcb3Afk6gWQfyBgww7Y9bLVZmx6SRPnpC8sj65QsjgrtCxt1qXkbEtg2szS9LKL2n1qumLnJRx",
  "key16": "35bvse6ABnnJgaKSCKNDVzfRn6kcLdPnznaUuAnPn19s2odsF1pcHphaFQMooTp6JUFxU3TZwfAWvJrVERtHygdg",
  "key17": "4hZV4D9Va2Yza3RM3SMUagUUyDCWrBSDKpzXmvhAS1oGqD9A2s6yEwiNtJNN6M9FgnkmDecta6f5j6vdfqU3JjBQ",
  "key18": "5k33PtLA3fZLQn2WTbi39XfVyrLgLfmQQWDUnuRZXqdu2PmXTTh536nZqQCUxwwYDyEsd4qH77YNmZMrGyc711CH",
  "key19": "5VhYart33nrJWSbzSJVeRWT3RTAdCkVsY9ZnsqyBpUDcjzhQju3n2kRj5KJtu14yoLrfeb7pzL1dRFKS98YXu2xr",
  "key20": "yh6qtLer9E1VR1ywDHEi93jLM8WboBm5FfLaCi5G8L7RSpWQDU9jaXuSuBdR5Db8DpYzMaXWcc6gUruohMMAUU2",
  "key21": "5HH4jY1GYN4Z4bVgH3khMWWyLFkCf42uyurY873GZe41gDyCNwL3fwxw7caCUFhwagFanj8m8AWz9ULeUWp6qsYv",
  "key22": "4xXeShkMHH2CsLmwWEkMnCAj9YJ4EPNjPf1LHSw78Joejqn8jPf4Rxm93B9Mj2tADqwq5pkuZbpVoTNY5V4eFnRW",
  "key23": "5qCCWMg2bft8suF9oRbqSx7pVEkEXRX4NLsbATdyE7VvXh8eJ4GrRF6nvbfWojfg586NEm514E67k6WKbczRu65V",
  "key24": "4Pe7Rzhn2vgUSM5H5ZWJ9Lr9svbbFCDGVL8z5Tp4wEShqyPKy54dQnbJCirQvBdxq7y3291EDdQBusuykKkkg9Xm",
  "key25": "4jcYRLtmGJRQdSWQUXyYSiBQ7qbZQKmpENHiQrzapgrUiP5E4vn5YTneEkgb44kqJUzopg3sPVfH9mXL3zEcBwd7",
  "key26": "F3EWVkXT7orLrqkVi7mkrKbxNtUexKxxTsKCXqfWCufsUBYjpGEsPM9wA3T9JzxCtYqJyntjoLRrHhTpuuZHQzF",
  "key27": "32KexbcMjZAyN2Wz9SQ563jae846DzzRQbz6w9R2NCwe4XXnymbucLMnVo1pnH8kSfNmqD6ka3u8VqkA74MkT4EQ",
  "key28": "52v3qyzqCRo15pCUNXTgYDTCQzVEzrjuJRaNuWDfj7bhEjvZo81xLepPMxxqfeN3jT8bkasPKfAVkQPaiLyLbJkR",
  "key29": "RHzT6ansnbRTo2r9BPJUZa67nJKtQA7iCJz72XWZSZdBGw9iweMXii7Y55gGCu4QBke3aPu4H8R2f5UUWGnXTek",
  "key30": "4C2kWPCZ4LGkbSnBRWxUNCvdkt7uwU5AmyNVPAjLiRhKF8hFCrwTYNTh345CrgGriAvgujPaAjnggdF4kk4dnZkb",
  "key31": "4RZzkRiwMAGnL1m9LNttPgpdK3pDdbBV6pXYWGM4XzjEVxgauREUSLudMHqvxJoQn1jRdQdhJ4nxUcsJgQCiouoS",
  "key32": "2KVJuxhcoaBpQGHa56hNp2w6iaaTvFe89SpNbvxjXwtRN14QCQsfzWihcec2doehxVUg6apCzUvAh1hZFpboAiVd",
  "key33": "jGqxGUgAfcFTuUq4ikacRbKGS8CkZkT9ShvcCDzjYCJSdj2LM3tGUksUwCc7aHwuVWKoEpGTFnPT5SBrvKa9R1F"
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
