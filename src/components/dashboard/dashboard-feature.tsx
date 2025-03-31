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
    "5Yu75DgEVGn9G33Voxzrh9zP62v3fFEtLJSV7pX78mSJyTab4usxbC7ig1BKnfgvKEf3NgjvdfSg5zVXLp4p4oxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k2HypDmEPvp47WmPq23E2hA1vygZtot9k6CWMsnNFVGz8aPVCmihNUhBhT12sZ7m3y2qgvGEHUdp66dANbXesre",
  "key1": "xGJ8noTUapsXk6f6nX9Zb1ubhv5onwE1EhfPLjzFCXisSyeEEPu4BcbXwSEtUhL9Ph5TRf71CmBUzTLvJSuaZxK",
  "key2": "27JCWUGBScbPDHvCsHH4zZ3Gq4TDNkTPbZh2ZQCfpU7EK9f4XsW41EwLVBSoZd3EBPRLA8NXEZ5bLZW5qXzDds62",
  "key3": "3BTcEp5BWrEuELhUP1xehhim1LQgAgN43QXikrf5Mq3vEo4Y6pESzMyt4P3AVVwgS34rAv4HopWvohFPbfJhXyi4",
  "key4": "55yDMazmahyPMe59tDaBxaojMsUGvqifDXyo2tGNn7s834EHNid5ecb1j9yoCbDN4G6L3U74ktedUATiPf2o3uaP",
  "key5": "2R6Az4ZeuPdqe6PTG8vNenC8As2vZYhcgoiAoLFFfPNwP8CcfisZMc5grsJ5WjfhxQJBjeNGX53eV8uzqJo2PMne",
  "key6": "2EnV8VUHyEYpg7ApcCySoaZmCVj1AU6oRd3MHvVPQ1RkaMK1m1RmBduXaBqLZKKCQAGe16NWSxGSmA8Q5AhfgLMe",
  "key7": "4vsS8reFjwQp7svsSCWUTdnNBbR9742oxuWSi7frzkFVZ7mk9ADJSRXc6tXXwWEqNmkcMqXTpsUC2xpeUPWiJ27s",
  "key8": "4ymg3aixMcXVYnKPXcyUVCzNQr2KG652ux5ASz221zjs7tRobdNwGPymXxhmGV55j4Kk3EvFxrLwmBaVZWT3hqb6",
  "key9": "Lju8hNsyboSJn3Djr5j6gNn6BN3MmP6UVZUXQkgvL12kNuXQJ1DW7iMQU9LerFF4ksoGnanT6jTRqwTytZiR5Dy",
  "key10": "3wW5sVuQEJG3ngZXADS5SqAD3SHzWYGMixhp7uAoFAJkwmFCbvDuhBtrws7scvAueccBGcmNZ3kuzYKxPic7BruN",
  "key11": "3kRHHuqmqPsHYmsCuKCPGGNUt9W7p9KZstSxnnLgaaRhPYdgNvrY2q9UBrKTrAZ9dBuqSQnHSDyUMVFq5MzWzBP8",
  "key12": "2mQoV9KM8LS1QuuLUn3W2ZpE8B62D3yWdpv9rTGPoKqkcJ5wk1envqv3dHwrkTycQCuVWThknhavNBs9Si6qjn8Y",
  "key13": "yEPA2iEsBkJqBar6ZtJA4YmRW8VM9mA5GxwBgEkER6Vp9GU14uWSGVqKGwfx5Us4vFVjT75vF3SwvnKz12QNvCz",
  "key14": "3GyiPiWEwoVKekUEuyxTekDJTj5JfYKKg1Vbv8Gyc1TpauL6b53n6s2MMQ7qJePEeSN73Y8Cs3kzELHCUvFBkEdu",
  "key15": "3UvTyiwbj3xJ5EyoWchGN6MSW1f1sHMJgUFDHxTEk4kyXAEKWzt2rHJopCNyh6Ctc1eFtMa5kY1vcpQU6L6hJAoT",
  "key16": "52bWXhgbXo7yUKPF7wbSRMMwzd75QvAWpX3QCitMPgSJuVa6gPkqZbk3QsjbsiHEKEUijkWy8Yg3WSsrFMftJvQi",
  "key17": "5m6vbnrXMFWFaF1vb5nBYfiERKhazgZDrwac6ZybvrMsjwNszVasMJzJQA6nJN2h6ZL6EtiZvcYNgFNfpgYrHp4Q",
  "key18": "5NEh9HknivDG4HuH7HmbGSWud3t6PdRL1cofoQZDR47X7NY1YHwCNw4NXv8rVSFVL7EmxDbCJjLZisQXHxxqYeDu",
  "key19": "3uZMgdPWvNPnLP4DtUBu5R5UL8umiY1HfqPyYQVM5mkbXn1cdJXpn5y325oNZw7yMAFH3tp2JvvKFiJNLDRuYkce",
  "key20": "MQvzKsoJDwnfVgeqWAZteZVJx7v3XBx6AcPN5QQSpt1PPFWfjZrnyxSXptmXWzGYY3FFeTyHWo1oGDJAKqXnLmS",
  "key21": "5ruZf8XTAmK4NRCjTjXzuPLHYQvK2aeszt9iJoFyYaqJzseMUEbcAr9xP9tHb7wmG4kDQNGtAV2seBrHAmzhTyLE",
  "key22": "3Jj5hvdDvD2jqLk3yeudgzT6DYyz9BfiwhdYaxBenkhrZuPTnTA1hbE9h5fYUo3AHFUtcjbTiczvmTCcpRt6Zh9r",
  "key23": "4rvg9hSh4XF3mJgx7pdRBYhDroqMVvkEY6dwWsDqbJ6bLFi8Sjq3WZaVzhG2Cauymzm6zdnjEncwyKV4BhVYEPHB",
  "key24": "5dnpM32J2ERXLTDJGVATsAkJ6jaVafwJWjk25tLDQr47QJLq1ZGbyaurRpVd4g5AaVxbKUib32vNH54UH9MjNCnz",
  "key25": "5UkPuT6HTWmoMrkNL2nD6hX56CopktVznAfUuLezhoD8MQQVdf9pavMAnajib2THY8CLMiofkkNS38ibyqZQACTg",
  "key26": "eHV4j3psEr5Epz67LWjieufpfa8qEX1fcfNE2UKfzMXvUD9zbKjS7zyVuTnUduEdQPNniNQwa87s1KsubhyC9cL",
  "key27": "3kcCZoLcHJtv4V4G22tJMAuvZ7wAP8xum4jnw5nhdSS3hYHzgncvNFG2mx3uP96NqS8LjPUWS8fx3MTdZ8rR8yC3",
  "key28": "231yNRM2VGLpGXcNcELNfR6j7xvsNTDbQmh14MNBoNzA8CAH2XWPrDVrXT5a9Bzvs6bhequdUR7ALpUX3M7iz4LG",
  "key29": "54wybZXKEsTmfb2EvGPY95VQco3aYYXc9EEoBJwSiXnF1mQLVfRewTyrWa3eMXKfCS6jjqWaD4TpaLyp8VyyB6q8",
  "key30": "5uHnvwfSN6fCS659xe5vrNZ4ej4BDbZnA75gNSZ9HYpPbANwCWs4XmdCF6esh5Dc4rDvhbu8NaGySQBEeo2xEcGK",
  "key31": "5Wm7zqCj9r1v6Lb4eERog2w4BN3HEU2epc1DgWhx9EBWLzHZ9c9JmZKZ7hR2s5GBdaf1YGw9R2TzsqtMqj96qhWR",
  "key32": "j6dHA6L8u1jttAu8vJC4qNrpfad54CNVxqfCQs4MJ1DEpQ25orG4kFt1kKGzqrgknCEn1PwJ8UqJSLVgV4Vnj9H",
  "key33": "3rztZf9bWMhz6fHcWx1JLt4XYw1UTFGT4WHFHJtfQSH69Vzyh4VbKQwhMV8eNtALvRaSNFfrXL5iFXPJqXAYGQD2",
  "key34": "4W2aEVPQAX75G1NzCjuziid8xLGLLMva7Q4d6geGUQ75dqCdLGxHPjxRrTGbHGq4VzQ6FAMTpGKScQe1M2Co4Vwi",
  "key35": "4GW6BqszJrhYr455CLxrJjp9x71NVkKSAnSA6Nb7TVb5yDfewBMNd8iajECDkjQtA2PZ2qkgy8QDkzpa6dU6WUGo",
  "key36": "2bqmrx7iWNuFGBvAkiRaTdLkEyPMd2pxPor44vVVnQQ4xmqiTtU7WaMipR2fz7VXUHFpMQQyjnUbDzMcJbBUx9bf",
  "key37": "2S4gFQV5h82tdvVgorXjVaTVneWVYikb9qL9TJrk5G5t278Aov7WUP77nq7yYGjSm1WN97XyNFZZPSC7NPcMWZjz",
  "key38": "5wf5jWoMHzf8yAh8SuWvfigMAVCw1WdUQ2zReNUMRTYewqNVw72KmLJ9fHJXb1mAb3UW8GdhnZdZpBm6VZr6ANsT",
  "key39": "31qoCRybCPvCMXRA7kMq6QsV6zFCAePfSe57GA9UsVdq1wodUWxzkBWDF1x4F7UoeG1u18Shay5D8bPJ7PCLLuwT",
  "key40": "WnGcTTko21QoSgXCcRQLghzaswxKPvjajvB6Su8A7dNxWDG34SriMP8xA9ozoaPfCtA5xaD1KrhePFDy888hJL8",
  "key41": "2Nacvxtec8AkkfHHtA34sW4CMRn7Anzn87tQdQ99XWDnC3uajYuJ4Mjd5yu1YPEKhZYvM5PAiA58VjzU4NypD7oN"
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
