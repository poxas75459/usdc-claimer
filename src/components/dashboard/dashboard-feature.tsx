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
    "4jBHrWGM6pFAgPezfJ4jgTG86KDriNvuvsQ41gM4QtHQcvuxKtivoBiVWsiL9xXMUQxArbS31iQnpXFX4eBej3Jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jEgmRuCfswWoKjwN9c7DHHYH6s4NMwDWxe57rX6gzJuQHBbt8zqL2QZ8AK8tos9jqDSbtesuczoUEXnzHbZAShG",
  "key1": "4whdxkVTcSjgmYePK9yfiaVqJxPhHStdRGcs8oVv2TbeyfeMAjd7nfkmKUygjo1oACE5Zj4PjfVd7Z5BsVp8tBFj",
  "key2": "3kegjubkydUchzEVWJVrLrE19cWVEcUi1PUbAAHcUyaGqZrwGWdUmUm4ktZcbDZw9DdMTpgDgahj9a7S4jP9NxNU",
  "key3": "35Xrh2WaZXDu3LeLca5B3k3NTASctCG7VSTKYFc54draQFomuUkvUMDp1CHbPWrayzXwpJ4AVi1QDBMvEDKjFCdC",
  "key4": "4BsD4rDfG4UQUTBPen2hFzTdyqWJPXxy8a7RYXH5Vjv7pAbP6U33MHkhMgHusJtEK6zEpEJ6auCxzrM9Q6AvaP35",
  "key5": "4emCtCxpZwzyvvDwMYuKthHGp9NiR3TGepU6XzCWdpyMFG4TZfpvtjAPgFVdakA4egCzNV6uTpKJmizgjamhcAus",
  "key6": "2iV5SVXTjzydRtShm3dupkD55Sdk8mmxsw7RtpQu86J6oRX1wMH67HwvNVBPeqNLAQwL7VXhBeJefaUz3JmCawuw",
  "key7": "2gfTDctQK1y2botbrjEy6izefnbiwgXFSnNw2SxMotE3JrX8M6kkKwcwr6qRZ4UTufJ5Jjcz8tsH7dvsMDFZcUnT",
  "key8": "2qV3oDTFX1sYCjsCEUYgSYN4WtTmihPsBqtkMVGFToyqSD3GA5M9jvvJKM3yXXbMynkmSDChSQgUvLMWRK79Fykx",
  "key9": "29R2PK472Enn7YXQTzj64ZLVppCW5m8e5Adv179gpYUrcSixGL8wbz11jd4Wge9n8DBAZontf9UUbgDAJrjBdv88",
  "key10": "55CqKXZ8oG3WhqpKHVSxaJsYnA87z2Nq7ExUT2gb3f6qKpJV5hMLgD8P6jZxp5qHCZQegkqdDrTSoF55njK75Qpn",
  "key11": "APH1QCLE2qQVVmJhQGyQQkF3msoGnfKSc1WzDzbcVUiZzJYRFUPqXZoREN1GMEmd3FTmgfLFV7ozWGKiBjDiptK",
  "key12": "2tUAjXv7VNTpKmYDnBSbGWjNQ4eU7SMHJRgfPh7AAVGPndUPTGMDoEa29vonsVc2h51nFEEqPzo4Tymb2dV3Y9ET",
  "key13": "Z6EUquXVMJatTjGNnFa4gVuG466iS8mLYqQVyA2nfYqqbq6Xvs7Rp4qqzsrUk76KKZocTC74N5BdMLs2nRp5WFG",
  "key14": "4TuCPAxnwaqiXbKoys6wZXNAkZ11vTEBkikuNz8jN7Gbgsye19ysFmQ3GQrGXAE2q8SoXe7SYLavjMi6M3bWDZK2",
  "key15": "5k5BL58bnVLtnPCmp4KiuMCFdhvRTX8Zp8nrd9EjLQaapitu3NA4BHnUo4MujJntbGMb1vt27bXY8ft46TuTbyw2",
  "key16": "YoLewkF6VELMSzRyPtjPFHtL8SXEAJGTX1YiTrYD5WZJLDNA2QYjde4QLmPPGJeuk2xjXYPd49gCVNL18mD9oEA",
  "key17": "5SYTGhtwDYZzKWMgUSZvS4D1JuMM7GXET5pbPp6NsoK5Vo4nABnJnmJisUppuig27pjNyciMmKV4qmqqKqKWt6iY",
  "key18": "4yDLnsk4sYuWG5Fh3jDMvyHsCLrKjCY5wG7XWx9JiEnMDCe5c88qN7TFBENXVFtzuhezBXuc6BHvoDdFjKjJsRkr",
  "key19": "261ATBmtEP6Ya11RreHPTDJLk9o9FgovbDFHdXikT4fsyVDMinHqDC7XQSHSWjtZHpnLoS4ashNpEaPYxUVe9VS5",
  "key20": "25QMJT1FNLm9uADSje3VjbvPhaHzLyztHyhrrpPqLKSpLbomWfWGkax3DzpUzUEvCdELqktBQdQFuUWfcYo2E6AZ",
  "key21": "5oCKN3uZsgmSj26kF9rC6AnApjp2LCjdzptHsvstebyMRga4L7NyhwHKpHSy6B7G1eeAXdZw5YxcDyxkYqcRm6EX",
  "key22": "2MzFKX61Kp1NLC78zXPsRbYBFTHu18JwFT5oR77cJ6aFjDQRm2sq1YvbAxuuEn8JzAWoaFF8uiMQnRyv1Q53sq6s",
  "key23": "4PzBhBRc9L5d7UGKQKmM561Q2DBDkWmo8WCQ6v6ntKc33Yf1YFGGNMScZCfDztLGZYFKy14kPbu5m9TCFuPNt7Ft",
  "key24": "57fQr32mV23jxK45EZXpYkv6eDav6NP2DCsJFBVw7SzyqNzsiehs8LZsjkkV9oqGcMcB893eXAn5geeuYH2VgVPY",
  "key25": "CrJjPy25BFy5Ze5HVPQc1K1kx8oYFph4qDrZcJPM6TS1FgSAhi85nv156nBLeG9H4hxLXgohTu8ZtqEaumKieZX"
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
