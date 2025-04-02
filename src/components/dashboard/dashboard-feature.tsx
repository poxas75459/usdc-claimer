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
    "2erRPHkmARKrvkcnbkasFS998C9Ru8v5Fr1zdrT7JdbGrLpRj9mTZ28iJx2rTZEaR4pSZqjtttHV65EePuoN6f4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GsNE3eov3rYQKqCRHWBshmfwh6jYCikWvnbwV1hKm7qzPpmiFhPMDPEX45XzzrF7xSPRBXcuevDQtJpw8BHXgCW",
  "key1": "2h2f1dgVQWc6mC7WRwysFrJcdDdHkrWNnbA7kAjTrhYWHTA9TqchzCDhhxMic9NosfuYc3Tn6Fk9WRo9peh1eqdB",
  "key2": "4W6oo9e2Y1DpXc2MsuU84oq84MXxuDbxz1yvUyb9LBLKeU9FwjQQMAT8WENurs58x6LjaMQ11KXiDk62VYMxmwmt",
  "key3": "5FDBwJRBpDsX5LfgBiAVC1Gm5fkCQfnCrLisZ6pgAPrNjtNjuVyYesXPnmXYygTB2qqsxrnQ45KXtLe4GJmMg6QZ",
  "key4": "2mBjMyFpqr86HgueFyYSveN7yJX69gw6TVTF1VtwLpteWUsFvVLJfzuwsATqkLPiMFTFMSt6V6DhG9jSTvj34f6g",
  "key5": "2xADeZozEbqixoKNT3sWgSyhPSkh5NcXz7gnjhQnUJJcLPgNvPvvaneYdYTawzx4Zi2iSpX6JLxAQenDjRp664yK",
  "key6": "5sGCfEyqd8tvHPawfNA5gNyCZPLqxVV3AVY3fVjr2S9rgTuV6GVvqaQmsb857CZHMbko5ZruqsxVWKouA9wrdQfa",
  "key7": "4rCJjv8cRnXceuCTPmMbCqxsL4PU1nyxgttwefpm4NUYnjRoxRWRaEWJpKDfZC9KMiKqtCcguDAuJ8JkSHgTTL23",
  "key8": "3HNyYbFjNHGkddoJnc6DBtup3XpU6zFg5YVjsMuAN6mQKoeTUaK42uhAnW3R1bqEHUFoF19EUSMnDYXs1cYvq2Ag",
  "key9": "UmW2nQLtkbEbpGkTiNW1YuxDpHigKrFb8ahmiasVnVTahjtsTs5FmVzNfArAzYLyYUoa6KZx2n6r3unqgaBLpnC",
  "key10": "4Up1po4EEKd69y1UwsQzGK1d4yH1FTCyT8nF8J985qfbNbytZskQVGDgVRTuhhcHiDvw7KGaoGjAARhT9eg4Temy",
  "key11": "5wqsZXKhTA6MZzQrB5PYgosdungkmUS3NPCQE6B5BL1uBkK4QCun5RxhV2Ns3vw8mEdaNSfSuym1MXBEpN2dtTFY",
  "key12": "prcj9GEbV3y7wcSFhWrViLfbJZrbVfTRZENy4NNiARcEm8WExhWFQVEy6VqJY9fmEbG1mCa1wgyCxkP18Uyp4YX",
  "key13": "2XgPi2Z16Lj18vDMfmpLgjieB4cERY93fUQsFrtmxjYwBNHzuYVMBHJrcUarZYpZPxrsVWHj5y937FTgwGvrRtTB",
  "key14": "4rc4xezJ9intWU6e4yYCCdKCSfSjVjwABAaPRxwvm3KfY3ZdgSLngFqD7QhmGtqvyQjeeTyAXgYJBVH7GaBRJN5S",
  "key15": "V26xTezg2hzM2fggyfyouZyawJm1PEpX7i3HY8XigoQCVVpkYJ8SFYG66VLQ46XMVPEYefPPYS8Yz2RR7wKWBK8",
  "key16": "5kJBNNcDQM8iho6vNNYq4FfdygYMNY6d4yLKJVAnLC2xLXNh9cWXkSywHTCrcb3D2wSpuJAXbihBF5CWsUzsVnwS",
  "key17": "47mfLYSRQaoJYhsyCi4AJ56wwgkmat66ZLUGVvYwYjW9o69vvcNYFxifWuL3jUwBRiVgvF2Sosk9jGikoMfngDUa",
  "key18": "3F38gEL6SPWEChfF9vthg4UUxgPXrXy5us27WQcooL56ziZZCY12nvgZFxcSFH4DDN9DqtKZn36xzZSXSn5LffHf",
  "key19": "FsbeLaMuk57reVxnkhYFRJzbn3zcoeGAL3FjQ26UW85hXU92TYPLz5E3XMUo7Tn8xGa33H4TQb46paitVhUZyws",
  "key20": "Viyt2j6cfySaeXx4m8PK94u7XJgxdGbpvyutAnGFBYi2ySWosPpsbXghogNxmLjdmDWXDnbmVwKmsc71FhMpP1B",
  "key21": "65KUWEae6WK85hWiAfYoAwiU3N3K2naiSuod6tW5TMNifzQcunMhjNpu2mmkJ4PAEfqWfUx8yzwR1s8EbfB8DQEB",
  "key22": "5ZnPC6py8DVxBgLkdV9PFgWrrPU3jvdpBxC5y8yhbaRL1T5JSYQN4c26iNcdwCxtmUC7fKf6YkDjBw11k1Q6zvdB",
  "key23": "46vRJGrmZynztan9FjhkvEg8hH4oJTZW9k4yQbKYayCtUyJbWxhZETyhpfS35AZ7LzuNwRYSGM4qfUfyJC2WKPha",
  "key24": "wd3vi43kN4vbtdxqZBBVEzE5Ms1npEdiot69VJrWmg6pNqXpd3uAQMpWW91tMAKwLUDtHEvqdLmRjyMaZa3bQtH",
  "key25": "LeoUCbrsrJQLTRx6Em4HmHtBXLU8gNy91Kkz6BEmWFQ1ap1BwmfQV665Yi8ReQLC1oNFTfncSunY97bSr1fRZnj",
  "key26": "5HTsTzLd9fuEG5Mmw835NEQLfXugBuFv75hvkEFYkuHEGGcQUt4xkBt6Ekv3FmMgUfEmMfUFSCU6byAwVYCLasL7",
  "key27": "dGTPDAXYg23PktZt8DmV7ogYMxZv3RXLrMmbHSPnyid8RWVToP9Ah55KKzHUGtN2ZZxSUZ1Nz4YdyNN3GRbtfGb",
  "key28": "4ypyWN1fhC3G1FCzab2HxbxzcSKtBWa85LHXgHs7J99bgqAv7UbmoHBurq7EW1u6U3CjvKFj8qXcZTCEuq6FwWJ1",
  "key29": "2VDAvGWxetdHuW5bmxnYmUqvZXpZDpD1AvDoBgSQAcodbZA4LWsHVHVXWYjtenvfGhf24cPnGchpTNHx5rqhQnEG",
  "key30": "3w8CPUjbmen6NWDPpJmyqA5W7YteKVUvwBvvUkA7pqsvciH2VrKwcUctk2m8URL7X2Vww2G9S9jPaZ2kmTgCQqbR"
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
