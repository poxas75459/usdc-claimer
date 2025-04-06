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
    "3AmnbJknxcT1UDwV9GPim7K9UMTCVQL9wCd3iGB8JSSpi3bbD9fnZs7ZZ8SiLSx8dDZyYV8iiZEzeYkrr1x7AxiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jQUjUaWgos3UpjmNRsYSeBTMygmqhFJDJFB6sv9jh8PEK9JFQS3KL79Aetunv7a73GQsc4daTnNN4x9nfvoS2g6",
  "key1": "zhCdTL5qMndgicAmzdcMEoeTkdxiiitmGJTiQhp3DH5gdiuyrc9F9tB1WpKzwVfwVTiMnudPWBogdn7xCnxg68j",
  "key2": "4pc9T76S1kHFMmBi2LGvfpC4fJSMPpjUWkL7nNrsnLV7Pegv6Hea3SgFz24esBgiRWcdJ5wiDmVzVu9YLFwjQWaX",
  "key3": "5nRFuY5vGdT9xVzNGavAPfcbDMiLVwSChwid5AqD1DrUX251NJDxjRHMfbkZX6f4vwxyo5QwtC3XzEjVVrsECZDP",
  "key4": "5LSiMazTSwmmRiMXxuK3HNWwfJhzGR8fvWvrvjrGUdTA64ybc4gSZyUNM84PLDFWoGM218FL9MD1XV3kXPYUQBzm",
  "key5": "3fmuEmtKFnL2RFFRY7GLthvTNDx8BDK9C26Vot1JZ5tGUskYV1pyNL2sArNatbFa7W2ZBiajNkiHQhr9DVJGeTuq",
  "key6": "2zsi681N4oRzD41BAvdtNaaFJJ1WjecdLGzLjV4ewJoT2LV9Yrhi4EfgPfdYejgBYr9VhBnDFviRjiWAq41WZtne",
  "key7": "Gkzr9YReEx2iPxMaFsarcowqsuz9ZbdJJMvpj3gBfGuFkesMKn4iqvd3jd9J3a8g4ggWMH2P8bvLn58kgShgo23",
  "key8": "2cF7kTbYS8ikkttgdZ1XyQDxNJ7EEXK8HEgdLm8PWAvYRtMMXAdLFJHjAE6KW98eYkuLF2MJxyAcCiu9hAc2H1kC",
  "key9": "2zvNXZ4z7i7d81f7vjG9JUC14Pi738GAJkJacQWh3BmJgr7mB3Ez42G9LCUrpVpTjEfAPP8gELBqyUYPzzaBch1d",
  "key10": "22vetcme9mmcCcpCGNnvYsFRtzrLNppLdsiJWwSdWmkJUfFkyUcb36gYx8kC5hrMyymV1Gsqq59uMHaM7bQz3diH",
  "key11": "4a8YKTZU4WcpPhNzwKzAUCgoJyE5JNqqZA4kKNJwNHG7vKHCVrXpqBSPBTH91JCj82QUo8cbcTk5kurYgFLXExeN",
  "key12": "5L2D2a4fet8chuzSjBZeNxpvVtAJv2SB6u1GDfR674HjQjq5MqaDT5hmc92YCQzcrzm7FqZWN4kcUoLCS91yy6J7",
  "key13": "5z6WEBypijM7feh3wG3W4hKMguzkc5VUMN4vmDSieHfrsUKFCBkaK5ybwG1QGRi237bHNwm1sGEGwE29ZFBfXs6n",
  "key14": "31fHZY11GKjVF5PrUGfVaieq1JxvzsC1MAUi6AQWaUhnvqbXVoxzP83EhBN89c9mNwZZLwBznrb14tcupbkfgTk1",
  "key15": "4HPbnrFK5rf5zJYwyehAEwFWjG7wg5LDY8M57aibVtTsByP7UEsnocofNEKP558poNaP5Ub1nxXXkbGpzne3TxVG",
  "key16": "4npqyFQMKPbWr966y8pn4d7Zv8bGGDToSqDtVnDf3sdxYPto5k53fCcfEsRptPfgSgyspGbyLqDfsHyYhszrbedo",
  "key17": "pNEuVqwYAWiLVCasmDSYn6krJhy4o1RmkshJe7pMq1xFWGipG7sxxJWtGmWGyJs5VYJQV6LvMgwuMCYWXiXUuHQ",
  "key18": "222WS7TXMi8wQ5DZJ7BbqPGpPZ8ZBr39ZCk73xAMaKUgNen6muHZU32Ss4jppsduMuAEWdVVCNbhxQpPzS5EMdCy",
  "key19": "5XtLqBTQb6LZWc7ZCTbrX1AeNAcQdnF1qXLt1onmSNmcnxfvwvYL7nRfurHZy4djXD3tq9xfvwYk1sse4xDPSR3c",
  "key20": "5iaaet2DsUE6BwjpPMzF9vYVy5AxJCGd28Sj3tAGAbDhzBzfUYHybuxReZ7bR3TYGrCgmdRNU2zujNzbiKMHo33i",
  "key21": "3MJm47reDJ8gXf15RvEuTwUwfcQUBx3u32Vrt4CXTtKaQWhSmHh4HfY3eXuR7B13S6TZ8sXgnHJKEE4rCbM83ypC",
  "key22": "3EunN7RaHHKQw2qWaUciAq3CpNu3N3UAuuTuGtNoCFhmYE6PN3UVSRwf83jTkU2kaCk3SVo8DBWKMJ5XMjm3UDuE",
  "key23": "2ZYDujr6w68BGoPeGEHTgL6F2CdWPmYzu6MmmLdXi5p4pVzFMJbHhR57ehK4P35pGNzS36K9cyNBAiD3TpPVvYVP",
  "key24": "5xydTfa8SAPGEV38oPBvhTdhkbs3v8xAFJFb2ufGXqPruyXUB6LSVf5LpW9b64XfyHqvMLwrY7UBJ4uN7aqezq3s",
  "key25": "5BLddJ7mn89gGqhKfCdtrgDTxmqSeGbEjMLwJ1T7kEVXZ4J3cveiyvLku6yPh4kRSdcJmkv3qsR8W4ur8NfovEet",
  "key26": "qzCkyrxXCG7tM3XP4QvFt5YfVZLMthLWU9CvG3nyLUnDqjQTkyMhEptApo3VmEAXrsFPWD1CcyEpDzjU9YRmQax",
  "key27": "LqyzBNPtbPhsp7kXnC7cNWLeHp68FociYjYQjWZNX7keL6noPfauVs7vXoSxPdw8aWrBziWhgKFY46NcYmdnWYC",
  "key28": "2JrZBQbVcu8ojXsnktKB8SWh9qDW3xBEQqqVpvk3fKoMCZrf5hm7EanjzikW2wymZobJgEMNSdRihxYw7TpgyhxG",
  "key29": "2AJWwY9ZFzMRdyRJbAnwR1fESY8E2DhrTJuVWwPa4GhBzWrjBzQhJT9Zu4oQvpvrQAYQLBXcXqYp82RfBCccVgpd",
  "key30": "SCzaSt7buXehFJnQugeX2UsCFGTftYKyzHDhwwbAGSCfqM5ggkrfE8YRjCeeJsCZEevbNWZLhmq9scEVsvHsByQ",
  "key31": "SZX1xSeP5zgURtgwfsxYqCGoqPszWJCAtC5tjioGb8V2L6d9qgGwgoQvruRV49RvpyqibRxDS9pz56fsqe1zmvZ"
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
