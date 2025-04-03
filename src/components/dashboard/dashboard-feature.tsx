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
    "wP3gDwHoKWF88hthrgxztFLJLYVj4T6JaaDS9NyNqkXPXhvQMu1zTH2rUPvuvEBre9f4oADB84YjeyftS9LjjHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9fVH1qvWYucm71FNUxUaUnVGGBMdFZoZ2f11X41dVoDYZSfnGjhFJRwS7ns21JvpMosU6dLe5MnUbfa7qtsTTqB",
  "key1": "24Ch6yNvGAAfdnwvxKJdR4hau3w6L9eMneK4pGnpnFSab4ikGLuGrP3jugBaAdq1FeaDFbL56Ro3392uu9CDxTMf",
  "key2": "VtfwWFq9nwpkfk22wdEaZxsM6oBscZa27mscwyfR9S36HbynyUuVDkjSLRZKKkJSQ3QkY1ztcT9yaSZeS3CGi2f",
  "key3": "5J9hBXAgZXYmipnS2kBgYgTsJpvjFxz8G6TDu9dCjiJvvHyxuYi83JknNpeMnyv2VvVnQQfxb2Jjhvfb9N8L6Nm7",
  "key4": "4LBgL4KKnft5NRYgjuE8y7Hsnue3SreRUBNdFwDRUrKRRwF7FVtCxG5XZEKCibg3BUAygVKRCZj9o8k4TvMpNVYb",
  "key5": "RLXsV1zb8PNyGGsRDCshXMN6kugAPpK9MBzuEGGM2Qdwg7MjKBc5Ydt63j1a5w1PG6UJQm4LUtnJpZ3HTMTHn96",
  "key6": "48akSj9xbA8wL68gRgu6s4chGSbaRjUuYvZjU7ac3ozZFz1uucKK4QR7nXKMk2W42XCczdk5sEb9fxHscYhUUDX9",
  "key7": "3EgnFdwd8zZGCAsiZP9c4xxqeBtMnx6qhTyK3rNhzCMQ632eY88ViFBn36TnhNrTpmaa52xqZJfyisMDbe3WpByT",
  "key8": "4FFsu3w7sbuLifNUHK3PPmtyqgaXeqJtjB75wUtwwtn2opHJqWFaFqRdPXiYNYDqhsgMCyf7s4hW9EmXkjim3qKF",
  "key9": "4g4qev7yH8VE11nzcoVWSyTSk9zyWEpBrFBGzftcosdbkm6KpuX9X4BmcxLrw2wjNBHHcaUoFAGwG39ZYeaFMpjE",
  "key10": "BnM8j7FtvNf2zrJ7xpp5Md2ZWUWevgKoCNMkw17FviugwmAVck8hAyMG3tGp8baDNp8UA6PseBkJtbhBjWXdvX6",
  "key11": "3xxtJUoN3phmSr4RZuihF7rzi1rGm6SnAE8UWsXGnH2EzqbnjiJxRcEUWbnebeyy89WNs3YPEvVyF9sgtfebCGK3",
  "key12": "82WjPVud4fghSzgL4z5xkp1hezHyTHje4nki4dftkHYprBeBC5Av68ehUqhZzban1xy7kfsmDkHX2fzQEK811yB",
  "key13": "4ECwqt9M8M9XfM3B1arWJxncg9DvjGscGoaUReJqKcvRmWJX1W9y5rUiQMz3tqY2jLDmAGmoeCEQwDhgxsr1S6Zj",
  "key14": "4aiyKDXUKWbkKECn9cRZ3ERh7AaUinWS8jEZBvvw6w63Z22rpJRUhg4G3vrWGrx2eoEy59YxXcLiU4kwHFqTsowv",
  "key15": "4UpneMrrKVPDL5h3LaXyc3RTTfiQoHfuXnsVx4s4gztYPTGKDqPdcDKS84M6Y4TCpQHKn3ECwyco6cCFgiJgsPwf",
  "key16": "bntMPpVBz7ME2UwJu5JbkxGpZT2hsFtVr9wAD8Yo8cjJG6b4JW1o18cPPZCE4D1s2dRCFWofH7bNwFNU1E8jHBH",
  "key17": "D6jcoEyst142P8WxbV1QRxpDgod8zBFr653ChnAnChJZA4uN5hWgCKcjgtr8AsuqcRPrVRp9b29i28QBMQbHz3W",
  "key18": "ce3oUymzyKJgoBe4xEUkdaAWh5Pi3E71vNt74VhufWNH7MWLhWGVdRLjU1QVRiiVCWRfNCqAyZhnd2k4p8cXxvN",
  "key19": "2rkBZYvC7AGoRSXsZ61UbPBU1TiaQLYprcjsAq35r1fFf2BFVgezgKC9K8Xe6hwUYxBBfTkF5MVNe6yRaENUhyYe",
  "key20": "2FqzRmrM5MXubovTQ3NGcezEaXcmyU7QpKQnbj3nfNNjAhH6KCkAkbszJpxgKqQz7XcPMExrCByePottVgdwzUd5",
  "key21": "3jrfRRtvmSpnCmdrGqKqzK1fn7FNJaCTeFemhQmsKm4ouz4CBty1ckAADZPhgiKSRcsmWnBsCDo5ySUSfNtgtNML",
  "key22": "fFHujWKmdbPaax4JyUSPnKvWANy41ELT6LMaKc3ohmzgZkeKmp18SE51wSeXL6TPjXPrseSc6yTWCPD2xga7MXe",
  "key23": "31zFmZZf1bnxqXsc8nZyerBpzWbXiPuoV9hHTAVNJ4sEV1So5m84Kh4Qboc4UGGZ8fS5Gqjj13JA5ghj4jppKsaV",
  "key24": "5xsBAP1gjyfCR8fW1SKY8S4SaFHDjfiVPBh1RpyjYTS47czHgNaR8deJjapvdb8gkUQHaxRWqksb3aKrJ3KQi81Q",
  "key25": "4f2cycMm5z1rdRSaqtADKawQPUya6PPkf5gDHN5uwvsv8N3w8htFQ4BrbqhrCCLJCAt1fSbteo6zdtjKW3v78B3Q",
  "key26": "5s6HQihHZZYH2a8jZ19MmQBRc8mEehpRuPnmpwWYYRWdit1w4ohQ1wtddD4cHCQXdSqWnovV1XhtuK12S6sReFcY",
  "key27": "3rSBVGqMLNnMH8aaQtiYtWBPmnUr6Trkr727shSbKucr37RmQPcEmbjtHKT3f2yge2Swkk77uDseb1j9uwGtjFzx",
  "key28": "3iEjBAfGxNzqPFy7PeyNtHeBXNLBL4PGgZiq45y2NgQL46uWuPRsYKLeYW7uQadD3fxvnDwrtJyiGxggXzUf9LWT",
  "key29": "272ZNXuTPLfiAqGfBxzVt2wETUeht8J9WcGZCxgyUtxwwDNrfGrjvJ4uLzhkrhsR27CDZFLUai53TDhBQFa3EgVa",
  "key30": "2mcCYBx6ykqKiHZUg6PHRpn12SaAke7a1i49CWndaEBsmyrfjtU44b6kRn9xCiSK3JEX9GWTiKcvxBiCtP1nPG6j",
  "key31": "5dH4b8D4ybutQupmexZwzngmkXKzmRmfDuKifh8tQB2RkM9dZVBnHKzpCYVteBFgTEjP2KPmrRnnWA4exFBosNr9",
  "key32": "3DGV5ZHEcruL5JNzM7RZt7g6oqcVzztY7ttFaoYECZwEA2idC2CR1DkSryrtC2JWA1tEeXbP8Tr6ah1TfqKaGLHj"
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
