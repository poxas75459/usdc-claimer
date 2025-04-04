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
    "5YvqHxmM8Rdecqa9tQpiVzp47X574tNcBFP6UE8wEtWjP1dJNLXKerwxjJ7tLiNHzmPuRshKjd8tynxgCfedeCPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNpqF6DrA6TVg2pMe1UmJiJKq2V2iUGzgnkdN4Xds8nkWkwRuCooM8ZqkmF6NQF6vWZtvnqnnrQHzTX4x4ajL2L",
  "key1": "SadCoUt9o5md7ZMDy8GPJgPduVXw9mPVSyj83TYCPRhAqtX221J4goZ6doUzeTnp2kB63Nzs8CQ8KqSKPquJova",
  "key2": "4Crs9QKNAKicmrTEMvVPVoekND6wTYze1o1ShXMQEtuCoryza3eR74MT6AU6Q13VcobXZQyrArGonLb5RjJpmfBZ",
  "key3": "W3cDzS3nnjA6qTY9FEHHcVEd82SnPW4zZpPZbEQZxTC4nx3gWtHj49sWZi2zMqRBRGdUDMA4EwQGpSv569m6SpX",
  "key4": "55uqiMNihKe8BiwPZrevkfeTDKUQvKbUbwbguGLLjGNx8D4eSUPSnPPs94kf6Yax9HhG4nbGHEAhNi1GUjGVoDPe",
  "key5": "41j2Xnru4r6UGDShCR5eaTTNxMEBDYBniNCrjUS71qSCE97fZmE46RvbRpWAhpXNwUW5FWRYjp5YJ3oPYnfVBZgV",
  "key6": "LoNECBAFHaKFKSQtPSBJHCV1q4PYMHyAZDAjubcDcTrRY4FGnWeZkBgPiEGKwF5BWspZobjvRCkxUxdZAs9DunW",
  "key7": "5b2XF2FR7rXTkAvNQSSR3J75a51EGEPb7GKZHaQSYKZSRby8eUPMgZB24bC3pnHvmst3kLtJyLq2bmWw31YHDxw3",
  "key8": "3nrrngvuXxGEthaXgQanJHSVto1yLteZVsFYbAqzi4H5MY7zcnWx2u7oej5tVYQ5egsMFNSwzQUWmsNx5DGow4Zi",
  "key9": "4MHgaZu9wuj4axga9piZz7Qw2umQwuwWb36gP5KopyQExabGLM3XZ4nQuJEnwxe3MYBHVzvTD8b2pw1HMV2MgbGd",
  "key10": "2mtskhFsNziLurAzAW43zX9GJCdRFDRL2uJpR7qZ8PkMA6kEia3CgjxVbMQ2iHHoFqTfWexzRyV3eYLRcF2zyoQv",
  "key11": "5ov1Jnpu8FzwwEkhVifySUe1c56e2KkkEgqstJiMf7gijyCjyittGA2CWRheWQREjzqvCzr6GS37NNB5d57HXBmV",
  "key12": "4nEDcv56LwvxTwCXAz8m1K6KBDuZ6NERbuKCxwqAyoDbh899AP285Znd4SwZ49G3t2Jyj9ZRkE25Y3n64M53oh8K",
  "key13": "4rjfbzBLebxBL7M8rGBLA3uh5QcibM6Lz7Jei6eUwMUd2uAy8GujiDytZje6QSzH2MPREUeYcHho8wr7UeXk7wTb",
  "key14": "gb7yGoBFaPvheyjnkPN3cZ53xUh2x2pAvYo6DTjsVBTjHfyDrVz9wRNEw7zVKW5F8Hn1f7a7mALNgpjcRUhGvjy",
  "key15": "5JTe1PtxqTbymqTaca712P4Mg7uVceqQ7uo3kfEiAMBHDfnTQsaCrpauc7SdHLuJ3sEcTHRhuACg2b1RYs5yn5A7",
  "key16": "62rrDDvL5Di5jbE5FGnAFZDJr7b1ZRraKyNVunBLAaWz3LNGDFp1VWqLputFBx4ndQfYAJRm9GahJPWGq3LzMrY4",
  "key17": "459nZ7mhsgYh4foYDmbKV8B5zWfEMoDgQTJJEAdnpHVx1BELDdDgz1QHQ35nM8npwJpuimMWVA75tdJVzTka8P5p",
  "key18": "3GGFeGCfabTkYE2iYbq2s94feuWmAPcKgu1rFZ78BTgNocPxvmfm5PM2EgSgYpxZY8gG14kV3kGKrizbHkUe3keC",
  "key19": "wHUF64EhcdvmRp8vq6Qs2B4YtjvL6uP1ZsyBn2DtssRxAKLtYu9Av1j8HwSrXDoQQR9HwARhTiZcw8uWjoLFJ1e",
  "key20": "4JMTHYgPB9jYUZNyvh7yYooJxQwXpLwaRcSFokc8q4dPm56qy6NYsnN5ggSoh2oBPFbvCgXXmgM6wnd7Bpqt9bmW",
  "key21": "2y2piFRXf21xXJySVmaRSUaFbo3hVTRpazaYAPWjCZFdpixtAERLV4uict2R2rAA7njmv3YrYVHDerrbanhWzvSw",
  "key22": "3oLdH2bb1rhL4w5jjrzzi7qMWkgiDmLzPKZQmnTzEFGgr96k5FcVPi9CBFs3ApceugFiaa8Q3AA9fzyQxxZixrPU",
  "key23": "5Zqaoga6CyDWJWnAHNn9CbVJ6aotDmWRd2QMejQZxADppEiHCstGBko19TJqB4JY26VV3GcUTYLJLKf9PW52QwHE",
  "key24": "5zyJuBKP5XZAGor1USRSJiuy9g4JzfmE16cJMGtZnNFKt4DLMhG1m7qBYJNyftaE4RdwZHMEXjRuHiVznhbhTKfh",
  "key25": "2SsHX3e3yjv3rAK7hfhAVbxPKfcgV9Dxt8SuJavyvMwLaP8dvmksm9GgM2RgTVRcQF9vbNEAHWCJcZYV5TNAMMuM",
  "key26": "5SRcvcvy1uwZ6iGMk5o1WMwDFqJUY6Vpj2ZrdaHRHD2ku9zhq28SXNd3XSZArXF6dea9jCRPzRe4E75P2EFBhHTc",
  "key27": "5ezXCZZru8tV2XR6Wym1xDt5HfTesYcDgmD7in2VVn6keeSqP2j4sgitho2zdLhstpHvEC54tu2UmComBYkWYYxo",
  "key28": "5ZtEAtF2o6Afd6uH4saNexfuuHm16S6Ra4M6hrP4LXB2jYJEU1ZbU4XQ2mwVvUTTSzzXjkoiPeiUTU5eLps6JRKK",
  "key29": "4pWXCUi3MVSXUBHhExyX88YPfnmq4AjsJT6Ec5zPwLVVvWwUieo9QsGR3hAB8kkanmMajNHnPK2huFN3F3epbD1X",
  "key30": "3mg2bGSf17ZhWd8GqW9qQRiVZ4PSgCRPoCfR9L14QQeRnZot7rLQksvumwLoUKVKyFPHd9J75rBtMTSRbJmGv3cp",
  "key31": "5gY2xaGozo9LyYVn6iKGdHefQgdduxTm6PseqdvRkvrUvKsuKk7ps8S8GD9U8pQkjQAUFPQ3HirDzsBhfpiTJ3H",
  "key32": "3Lcyv2hPeU8biPNqbHZZb7cSp8rvpicE2SMhZ9iJStG47gYfYKjLM69BuRwXPKipA7xQPPSRaQG7SR4SkR8sS4Vo",
  "key33": "2naHTAYLKtHsFGnccKjrJPLxWeTTm9sTNHNxU2VyKj2b9tK2cMfhcpmkjMA2WxGQRMUDszRQBKfXvXvvpv9sR91p",
  "key34": "2E2uiWpHZKUCGDHCxu28zWSqVwaz6xVBpokUE7BfNFeqgw9jw7jygqatTkRvQxGThiGyu7LamZ8SeZPuTVqKYMTy",
  "key35": "5KbsKsrzkmyzbgmKfh8tr44uN6TmXcDJPoxUFUF9y3MHku3i93EtpkzDsUK5hXkHgB4TuPLGFSVSFAPL6cqgdLG9",
  "key36": "3cp5TAdyrd4kaUwGtWVpq3x21zCgaFKybo7Edj45XHBAGyfqj9icNnAB4uPidEUof3AQPazPWuqQhV7LjpcQ7oa5",
  "key37": "4PJLudRQ9WajXScb19f4acJPF2mRv4kz96gQAzFr9jHC2mMFpk6t14ok9KUkSihnq5QdJi9WqdrpjBK7UqMsqcp9",
  "key38": "64JkDuSogwmJoQ2eK3XAHtcZvU4iSKUTEYXtx7e3UnNrEJnGJNHBdXs5WW8QTpdHTtjCS13UCkVd9D5QAiFAZ3Vf",
  "key39": "5nYXZaussSkE1sp6V5uxnqjV1a9NeVGH7CGsWw8tp1x3CTKgERL4aPHZ4Tfmerxir7Zu2sxhaG1fiQPN7jyB7dpp",
  "key40": "41xGUn5KWQQq4AELU9NhGZQmeDKcMdwEVpMj1Am3DpvpgxfpZ1s7QP5iqLUAiWBnf31DFJv5rLtiHSsAXHDMBSfb",
  "key41": "5fcqA5GQRcmeaPWKQbW5AGExpcbV2YpTBExTRvEXr2avvVbdk6e4cd3Znw1pVz76AvRqNLsfrUMYg4eQ4ja36HVg",
  "key42": "5hAEvukxrPoQouggC3r2DaD5ZqG75Qu4pJGpUxUTcB2L2W9BAbaz8uwcBAuS3qnqbwAaHE59WYypY4ZhFZf91jps",
  "key43": "2MRmNTZFLajj3HEv9BTW2u3aokudzddzRu5mZLmeeo8NTGfQBdj5uWt5YTp7A9CzQtk4YNPbia6Ljd9HUPKU6vDC",
  "key44": "4AnmWXa81PATV2snsrszxwQ2o2oeRYjXMMuS48rKHVityBAGHab7MV1Z7J9otjo6EKAUPFGQ2DPpoH15SBko3BXj",
  "key45": "3aTf4ku9NBzmDgx1g7eMu8V7NSrbUTHJfQ4bHzFtpbWKfykT6dxo5cwBtdcAAorQ4nNYXK2jdYpb4PHuYNqo76Ba",
  "key46": "295wouWzku6YbFyjwCeXZ3MQaWG7rJcc84qrp8eJNtj6xSpWEGJtGvwueSP7Ahw5fUjtruce5R6SEa7FDbiJRgRv"
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
