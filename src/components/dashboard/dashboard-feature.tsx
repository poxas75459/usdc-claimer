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
    "yLrvvZwnDAsL4VHWh4m2c4auz2yAn8f1KpYzARupuBrXoVudGbh3nF9WNBaYh3k4ZfLudpNAQ2vQzzgyMN1fvkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2siRZTbrmzsvXp1kuoUgtPqCKce95gHwcLm4jnhnejm1M1TrEbWzKcDyWwfYEjKN94g7Qi1rZtXJYP9AfVFvyFyF",
  "key1": "3YLq39Dte8y2VksDgDf5fUDXwJmGnBNn5W8cVTGMSSbmGjn1YE8NfxBNJdjMF3oLS7ZAZGGe1QXUqMy3uxYJbmmt",
  "key2": "2ZFMCpfhNjt6V4oYfKB1GYd4CuBGW9ZN1WS8rjYhzqXMEiHxefc6J2ZK2boNdgRUY81SKDXxqiQttLUbAMEHu2Wy",
  "key3": "ty2n5uHbdCdf9FkbNPXxMfrqdJWxXTE8jR6XGbgEPJWEyCFeGzruoC1H4LwbAhi97aQJa5jJX3byheGa8vJ53wu",
  "key4": "2GXXsMsRjYCsr4HWtLMBquQHrg15SnqrLmu2s2vhycfWW3ERHzGGvtc6EDRpo7D84MZEwhbQfStMVYbPusi3Cy7s",
  "key5": "2S12YTFrDA8Zf7hdxaNch73uqkepXgcqUt3pZw1isLy1QQA6kJncNFGtzZFCcFkQHc9ErCmoN858dqNMbWV34oNX",
  "key6": "5rLVAQZxSRFVr6gwjNiA1s7jYAe422MtoNRXjf4jrxzpWh2q5C2zZPKtiDQ1Ld1bmWfcYE9QDAaMBYH3Nk4xnouU",
  "key7": "2H4zYJuMCiKA5aMxKUXWsSvgkqn6yFLHWoitmExLfRz4Ty5nDcgkrHzF6aRkebRqC77pv18B2Qm7fVVhy4vcKFnt",
  "key8": "YmL8tofLnyLGRfJCFjKhYuFoUdQG7FPDjzbSWXZk8FB66bBRsxqMtfVg4k9pLVhMxxbAGHGkNmir3D5ZzzHX1p9",
  "key9": "3SZSxECadKSmxvEyAZUQVUzrXAXCwxaUBk8AxKnNG9hnUCQqXJb4QFrwwPapXeLct9cScYMBDo2csRtGote9wXZ4",
  "key10": "3sYFhpFaj9gCRMAxEV7LiTEfi4NM5NyHRywzX4rnZZr8MFgqsG8nXUmfBkLtHAmgCRhBRKMindkznHSKNJfpFVRp",
  "key11": "8Gr3xWHr1MgCREKBaC8s6qbeeigwZYXKWqAkFfwu49HCGWmXh5xGEC3Yh2p5mf5idqCZjLxo88pqUGuVFXV9ySr",
  "key12": "3Nzpt8KxMDbXWFjtCGmTWokmbwhSX5nGQG2apEEA8uvYr1T4WipSn1jNrnk7xzGR7wosP815Q3EoxY3pvMnQWXBh",
  "key13": "4HEWogRDrXxDgRkDgHQAA78Am5giuwdE8LhX6mWuYeiBmztcJSMt3y7q9YhcFrZDBJPWtybpHwUiXmDT8WuMQZbb",
  "key14": "2UD4VuKdSWwnkocvmmc6ZXKk8UiGBGDeDcBCJS5ru5VsLttQVq4VWZg93NjHC4HHZvv5rWGnQnY4JeH4V1sEWnwM",
  "key15": "2e3czugov3cKrmEnRvkKpLVi9mDfiMiJ9efvtKUhTHf7AuKAAzZ4KxbqNStd3Ly6MRgfvrJAPdXaqqyghuhUifm6",
  "key16": "3iPRPuyLHv9vij2y3ZTfaKBcYNNccJ42AjRx22r2eC8Q9wZps2Da76cwFF3XzUKNijH91rwyFzgUjFkC5YrnbV8p",
  "key17": "2citSut1wSRj7KE6R1eqredb2qZuiyyj512HD9hCyvvXHEoLCM6mLP6RSKfzohobwEKNctZ5WLraRv7GFCRnWw1n",
  "key18": "2nr7ERiYm5z9Wx62tTY5e8kjxVp3skTiGcDQzDvEWJShcEnyHwQSdJJ3bWgCgqtFCTg2qu7arWvkVvhe48XzD32y",
  "key19": "L49ZoYmXdmRuaKSf4eHimrpn8keSVQTLr53a1uQFx6muQDSJ8FxGxbtz8qKHpu3K7SnaRUdvZQmRPanzDND7zfd",
  "key20": "49mHL61SwgMoasd7jiPUSDxNwF1ckZkF9mZFXseNCskFkHcyxrh57iho8UNiochuPK4jGDQDbFxXixkAigbmgrMz",
  "key21": "72A7XreJkgkdiSitomTjqHRbjBhwadaJTk7XLww5XkfFqiAhRiLDfTgW3MRSe34VKbmMCmhi8xBdMT17tAXkFmV",
  "key22": "2BfZF1B3wWF9NwqCtBsDyxh76nKBTztkj4nW37iWWWYWJaDHCfFWs5JHQ2WLaXHFLUSfmMuTTgRiSPDBQf6iDRUg",
  "key23": "3DbdRi6nsbZCpGpJVUY4ysDs5no1qNfwBVmMRY1phss6mYtApT8NdkdjVU86xFcLuTxKLC2CDuYpnP4oUtCdVDnt",
  "key24": "49oWUpFpYcmCUf5Q6NpXnz5GASWZnwQk8Uk2vFw93ZDW6NVJXDaQuWgPXXboBsHXuB1SiZtrWddhzAR7aAe5WZJe",
  "key25": "esLpjDo4fkSAxBGqSWjUqBWTA7yawSeYcj9iAmyHvso6YbCkpCSh2Sc9xsVa5u84nW3GgyohY9L3ToWiaHSi2Ns",
  "key26": "5pVxfmco5TtjWiotLb3z343omvgUEJFnA6nM7eBMUxEUsMcszzTCFzNKr43ZVchnuMRqXzmbcTS9EgAKjta7QUw4",
  "key27": "3UtcByMWJMPNwYUue41ENCcGohxiqjbpSd9ne2M29dzTY9tjR7p6fWuWJpWb5bmN3kvacCfo6sibVjYKaoe5C2Sk",
  "key28": "2K34AAHRHaxZKSs6q2FWCbwLx1WDNc8tBxahuPRWeECAQJKwXkZSS5n91TuwE2brkdC5v1NvbnNkjK2j284UymJN",
  "key29": "27MSP3dNcPFQntTstV7JKfSxjA9H4buGZTXrZP4wHxARtKV4EbqLoi1La7ioBNxKwCqh9y55cLnkvjGvrLbfvX3v",
  "key30": "4PP3ePuaMeSi2XAsv85wUUvnok8Q9Whd49FZPSpJPJhUSUnvTGfhwvwc5tsAiNNmoPw3xN6XQmioEsGBbkB2nVqp",
  "key31": "4peTYZXRrXZqdy4FywDFaueffAW1vURKA9oDXRK3EXwPADoLMk2Gf3umxdtBZPRrMnZTuq6Lgtitrz3jzwfnyymt",
  "key32": "4iRFpiT88dj5io94rRKgwNQpo88PN2pjzPjHa5KzH9JtucNcHjsNXHWnanngz39EuRq6iMCcdAo7rz8EUs94jhEw",
  "key33": "mauJcShLV6Jp6LNo7MpVVFhMfTkezMYKoXVkCjkPjyr5TcunrYF9QzWncm3DRoGmk1PnVP7bWYCe7GZ8gaPTiVK",
  "key34": "3oSkrgARV42vrQFQUJKXTFHuf4WvahXq8Q1MZ8AeGCpzDHBhWuYA6URTDoCtJcgyU64KmbmA9cXkhEHntSL92moL",
  "key35": "64NS24fm6cAeJsha2PFa3ULAt4eDPvym1QsG6zAHsVYTRjWSUJdamjet2yJYT125P6iJF5a8J71Whahsndkt6DKj",
  "key36": "2pPLt43w6XhaG3KaSgvqfrwVGW17jNyRwmqdMjnYTbxw9xNarW4JUz86TWB1b7VhJ8h5eZNt1wWdxc749daJ5fk"
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
