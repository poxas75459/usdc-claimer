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
    "FyBsPdtVffan7tz8mwyD7rad11ju3UjQpqoypw5Zseoddw1Asgt7XMspVz1zymYNpjknX6dZm9bMXKp6UJ4ekU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAwS1Vp661uBQC7K9wvgG1svvCLG3qYk6ZJg4Vgxfr4bWG7A2dbyMmJDRKRRY4LAGqj46sAewxuGoGBA3JX9LtG",
  "key1": "8VakRB7ijZXDS4cfmuxZCxWtVEa3cDPevnqi8rGYDBsucx1uBvAZx7sQRuPP9Nr8oLrfTFmRU1FS3BEbgNzL7Qb",
  "key2": "HLkLEX7Z4xJRGPwyEWzBbFFLkiXY8xGtvMpdCfCYLQxzBwoZTT4p5SnPsjt98zS75xwm4Q29pSUgk6XVgeB4NcV",
  "key3": "2vduwr1RCNuwmVQ43THnhFSWZS6ML8e2KTgKgEd8RYhCQQ7Y7WTUm16WsE6o1KhjPvaYJVrvoKPZVeTDT1AYFzYA",
  "key4": "55dS6h9eRH8PcijpJ9BARwEd7DP53skNQTm2ee2yx1DzANMRkUDJPZQQRU5QXyUmE9jfjcJHFaXrfSmdaveEyJa3",
  "key5": "5ifGMqci74GCsgoAMF816ko4qzcDQMyn9vt9gdSPa58LuCzpNTaPbwXjtqihfNcjC3LGtTPj7MnhtyG6iGPj5Y8Q",
  "key6": "4BubVbLYEBKBMcoX44C6xrZTFFj9ew6YutLMQh6PtFQFMDKWGXuvTUnYSLEXBnr5R7BtNY2s9AQdyTYHnT3PXdNc",
  "key7": "3SYCADQtoduJzMVSd2FaNM9W8uHMqf2b41wEWN3PdMCCc8zfWuRX78nJxvGULwu6ZkfyZdbLbaePowNk8EBiHXf8",
  "key8": "5gFAycwqBQUmFf2aJrFpFM4GE5fn1AErbrXNyo7by19zGsLtsMbA7tbEfarZLVQdvB2KR77eL9nuxyQ4jcdxgnet",
  "key9": "UCRskXKASyq71Wy6fPsALjL2ToEFxxgUmHV5wKCgr9YtQmvHaS1S6W54JbLgqXuJSiY3jCTSLN4xJjwzWVJWnCJ",
  "key10": "qvTo9hLVy9Kgx7hETFVp3Zbj4wmVeCETNsGMFkgk3giMXmUU6zmcyTGkGTtaVyoRNE2FTTr5oKW5TSFEjub7KyL",
  "key11": "3TaviXxcFKhhyUHS5d8HnTT3hRBoJJzFbJGagmfuKiv9AfktfY8mCfZzAurVVKcc6pAuPiZpBzMEAQr9q92DPkww",
  "key12": "5SgQVuWGMVgiZKTA5zX3ziTSxppQjv2J4Je27C7a1AZhk3amPs9dyNhoAjeANLGs6srynhaw4FhZPw51seBCDXSK",
  "key13": "4bRtsEAyQJWTqUrJG4ggNCgt918P1XTZKoe4dfkevRJYGkkKzAVKP722cQiCPJ6teAAu3Z3SX3FsA8GtG4G8EG4c",
  "key14": "4JkfYWVL2yktgtD8yyRk8KrtL1kwYTnAfzaiQAjFXg4hpxpXcnsEg5rLK4jMB3yQxAk3kCEsYgY5GqmfAvsA5SSA",
  "key15": "2JXapHsK4ThS5iBViM14ykKknq2uiNV8xKpoP6LbdyK1qFvtw7g54LPdq6LH482GN2yNuqvyq589CaBMoj7Hwu4v",
  "key16": "2VLiy97N1sNhPgLfprgCMz3xCo4eyYToeGcsf6zkMn4xsteynbcCbsmnAKSFbuvNPgKRnBb2Vqj4CzvTs4UAQx7g",
  "key17": "5NVVm2woYT4UeA4nk6XEUye7b1j4CXW5PTN8uYAtaRCzcQHLwrjy5K1ztoznceMZ84B3A9xAPbLms9mchHL1BjMF",
  "key18": "63s5gdU6MR7TYGKWQJG3h2puzfZ8w6tSVzGiLgJAtJ3MnpW9SK1y263P2YFzsRvoNJNhsB6YtHA4i9KjqDVPsfw6",
  "key19": "kzogarGmdRAd6NRmrjWqKiTfAcSSiwXsULwAvXuXDW3cvLApnZuhbo6a5PVsBjYosAWLJ558q6yx8JGFP7asXwm",
  "key20": "2iRD2DeFfNE2SFavnxeKdpaQHfsc2Fn2hd7qonSjL2NWTEFRPp3SnVenFxiK93BWGzHH6N5SMdcLgw24dgpPZX9V",
  "key21": "2Km3jK6FugM5amuKskBQ6wcb2T7BsceXCN8FometGg2iEbgpPBtVG6qZoom3tjec21UtGTBQymdDDzSkYALcBVsE",
  "key22": "5NVARio8NQCXME53wxmvuzXUCKwJHmDP1wrtmMgStLyWKNDZX61QAucJ2svvCXNq6XmN8JBoNWfSBB7aXqvSv6z3",
  "key23": "4Yb3z8Yr5Bw2hcbugUM1wuxfZTgpVTzU7KmouhPfBiLYD8QfKANmYnYZ9AJoZ2ipu62A6FA7QqixJ3hccKycwxnL",
  "key24": "2jqkTX8U3ZbGMF6Sitq1ejCGykfJq9TDiPBmDvkbFtSPLKNFe7rCxtxUKHAXALB59qGoBCr3v9jL33Rer3o7MZf2",
  "key25": "4nVtR6HYDrLqaJaciMQkoD9CG1y6Gkcbz87NqQe1JuXb6zZwBnQ86Kf3V5vAmZKgrNmMLUC2DkgxcyHSSsWU99Zt"
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
