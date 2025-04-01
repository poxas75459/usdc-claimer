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
    "Mn5S3nNmBvrawZdZpmS3DGyurNPq4GaDMpzmfY2uSXqogMeVmWumi4duUuAfTqoZh3nzedZJuwWtKhWBakeACmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P65pdPgZnRXFhTncYvCW9PxejVBvaSBhe1v2NkXmMhz9jnUr1BUmMTUxQiS1EMWQ8QErg88QZ8n7hhGw6H3KDg7",
  "key1": "2msDf4tLTyQRoePq7HonVuX8H8Vr7wkEheJud9BwfZM6U7mAvZMhQSHtndx541RY4cgqTGWkCQp7zh5HYMqB1cm5",
  "key2": "5iiowiBCNpKnve2RYQTiFtBoP5r3MrRVskmWJbU3HWbwXj4JBMtTKoZvZuNykhJW74GsUywQHYKrmSSwMfX2Qm9T",
  "key3": "fZhdjxCpYwwLcRP5KdLoF3mFPdYbEux4DxYsbYvbFBpUoqV6v49v517sgDEythnvzHiZ9XQoNv2wHAChwxadmmn",
  "key4": "3SGpErKrDukZpob8wA98FCbEG1mmqyQ1REFbonhwBsKg2HZJnbGbYqTT9F2p5LuF4AUhCzPriF4Ror5tPrgSeEYj",
  "key5": "2WjxXnd1y4JyDHkLNLU34kzwQn9NSYPL7fkmdyTSrZfZt72AxSDyYGrk2cYzqCGAPxHqrW4bLjHf1Vjm4hvkcdoT",
  "key6": "5ckkFDcaBjqbv4oTCiE5sYfSW8Mw5PEdZK3vbMTjWgZoKdHCTp8nvgBbaWgqzj6hPkvHyk4YVvcCYbk4uVRZemNh",
  "key7": "3zp1RMQErNF3pAWFexqE3gHJK9EoY2KJtQ1UDvyyeiQq8yc3ty5mezumPYAbeCJzkHuy8zpeEe6yQy4aY4sxjSYK",
  "key8": "4ntoSKrykP5s7yaxBkTcp7KERyQi7k3jJGvCkPVALMeEe1VG84gaKsRSwbAfHHQydBSxw3bzG896aTD9DqXjRFJn",
  "key9": "4n3ts1X6giUAC15o2qYXjDg4KXUtvqS2g3eEDarmWeD6mVq8QkqFYthjfLJf9zZDGvpAXYSp6MUe8bQ6qrh58AmR",
  "key10": "3HHpbrGq62UvvDRWoH3Dyr25NG3yjw8hhdRV4x6xjGR1eRV2muZvh3WWPYZx1Wq8MhowdhpsMVbqV4sQ34WBGhPA",
  "key11": "48x3Yu6DHLRvPJLYW3T3w3cYiK2vRRjo4Y9qidELQq5r49s1k4H6L9BqHJq6P7QAm1dsWKMyyxhJBguPJigyu2fo",
  "key12": "3WFgHDazQ5y4Ac2YZMCqEg9bupB3Mu4un9yrsqUEiRWsvYYt6VvbNDoh9wFtNWnpzduMB33BnrR4ZStEE5BZUuX3",
  "key13": "4uPiHjKuPiEkFFedFz4sMhVePSvNJxG44cNCtetrJ2WGUA7CNxTR1knUj1fNehh4E3NXiTU4eXyzJsq9jnsxta9W",
  "key14": "tAEAEFeJ7mAAmTxYr5M4LbVsrgwone8eb89DwX4dz11gjRZAsWrQdwdZXnp1yv2eEUEnh9UzndMVnsMw7o21tJ1",
  "key15": "5cjSm1RfEbSyEuDE9xsQGnDrkxgxjkDAXTG8GYHdaCZX6UhgGLnMvFjQEK3yv1ML8nV9JhjSDiwKUhFtM6xDXq7",
  "key16": "4Zcs5CmHyr9Wn7jzMZKoNupJTGqMaUvYdSXLp4AU9rQV4Zj4UhqRH6XGwtpedscUcG6NG7eWh4osAHMYggzce7Wr",
  "key17": "46xqq8AG8kbZsPF46uDrVwEwayxPEQHNoxA945GvVBNFpKafiZppnV3PvF8CBgrFsyNm6jsY5yRZ1toqW7N8fi1u",
  "key18": "4nyj8Wgb2PmauLW5BHjmDwH8sABa3K8taXmCrWBTLJ9Tbo65JoGXyvNd3M3F19T6CT5g1pAGbMXRn1ZmBNG8McAt",
  "key19": "2iuDFsqibYigyDTAwfvZbe23iTG1eaM6VB8TwZmriSB8jjhgJDeUu46JzgyqhHyRdFmppSTtvmZwKETQypLLaV7o",
  "key20": "4GyvRvR1nPgbjj3bvTERfHDVgpJAMKwoXCwce67M7L3yGayBfv4rtqcNsYYBcxf559HwzzU1R7kVrVGscv3FHUCu",
  "key21": "2YuxwRtXZW6X8qKXtUpsmyEgFp9jLk1xHpuGcJz1Mnw64MPDYW4txP8giRJJv2Gm993SPpYss44ZfbPmNXMQJwZC",
  "key22": "2nQajM3biQp3Q9pu9qmZ8XpUiS3T7Kfk4rSn4d8pN2aZVGjhjSaJq9H2miXQbqB1vC5oL2u9C66KYpyUKwtV9xH8",
  "key23": "yvqkqkZAknnksH4N47TFJfmD4s5okcdVh6bx3ccfzszSg9V7z6nL1vdzMNk6tD6tivshwHWSd4kjFeUQe7Q4RJC",
  "key24": "5WGBJwGkNuCX1KMoikUuP6vRcNKMZb7aqcbciU4B4GD4mh7CF2jwtCvkdaG5MrdQiJXimKM56TQ3uAtH8qALtZz8",
  "key25": "5xXArxGPw8gwtJoxC3LdWtvH5SPKHnQc4gtJVF8EougjLwqWQ6A6DrEdYQRoaj16vdeVGTX3h3mhG1Bb77SKjLFu",
  "key26": "4pr6rjyWpjs7WsPMMXP6b59TMmYwQnY2rZRdZXHBZ8FhXunYJZQ6DLCvbrfpgxcGF55hGmroV2SdMefRSV21HwRG",
  "key27": "4KWzefoBJw1kozgrniqHvH5EWmB3AoW7wwVh9uXaG8Nxhbyqnyc4wt5PiaeDzKJmjD1ewqcnEM1JFLCUqDbz5tAP",
  "key28": "38LJ5mthcLWe5gPhNL2eHKP7FTuHRZtduRoJkZcPf9NtSCYjBV7PS7nQhFZeoRQhSceSi8XShcyreNTGqZqNUsTc",
  "key29": "3gRTs455vBL3ERXJQdtiuLCsLxkxf6gbup7bj4VGkeyBXhxQg6jsRVNU6tiDidxBwB2WFaiMGn2MkAJML9g9RXV8",
  "key30": "2jfnbZDHd89zZmznG4PrDd2TLLjwi3246zoJ3wVwDFy82zVE9Uwu4HbRhsXzPd5bZxyRpUamEiyW9cujSecT9nxt",
  "key31": "5Dk5sy36Z1uCxJ18GYyvDRbo6Vxkv3eRwLTMUTk1BSbtdhdG9YnG1beUeHrfcQqnTmtVDzZHLS7sNoRt1nCmLN9z",
  "key32": "RZMsKYMhNH8aPz26UeK61niuqk949VZxZ2BK4kVRBXZysWDcks3KmuZm8xmR3fXo4kajcSUzjN29Mqc16C5SP7d",
  "key33": "kBjmYksYCec9ZuM81RBuV4inJoYvpLcEiXPhjrixV6ikDwBHdN7kaUcx5s771F6sjrgkSevK2aX8w9kbm363jHA"
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
