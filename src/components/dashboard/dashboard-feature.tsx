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
    "2jsoBzc9mBYtHsbS6JSYDccCy2Ff6dyTs938tE23c66CpiiDYD9SQmrw9PKM35ViabjXRQNChFLvRxqiGUKtVe3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JcgUiBk1uqeAouNdugNKBQEHYHJrEArdJzdzcE5nLH9bviAXLEJTGgseyCTV224kMd9czRStEZsLFEWcoo5ad5L",
  "key1": "4Eq3q4nF7A7GQMK78ymjtYLgtTAxAAHWHmoDJ23HpEBem2C7CEVKrnkdZj9LPrEkKuU9aEKtC43vpEF6yyvtyPx2",
  "key2": "N9LZK6Z8PUMPaxcSz1yrSMDSTpw6ZtsrdEaVg7QeNUw9Cz2GDKK7jVfxrSXLqGiBY1MxyTzef5krzFSi3u9m7tf",
  "key3": "2jdEf35qKGMdwzJAQwiSBnk5QfcKvrkeeb2DoAQbPJD34WfoDG1CHvxepGqU68DKkX2NkSbP1FvASY5HxfGvazGU",
  "key4": "bKnxgZckRK4jBrPutBHzqmUnA2cPKbDb8CesvFoR4RNydiFd9fabZsiQ1WNiCbcaZp9KhRM7du82yihR8gVxdaB",
  "key5": "4tWaNd6tFHRaF7eNGnNJFSRaMmJfvKKUUvdmZKmJA8RaCzTmZyezeKmM2XkZSpHpkqFgCNRak1npfkSBAfyZzn4E",
  "key6": "31a16C5fGwjVV2CeDY1LWaAeNtQoYWSYQnwF8y2BW1BJf3qwkN53hfBAJFyT7kUoYechHpDY94beawpF3VxNMxRa",
  "key7": "5hj234aqXbjLLfuyUpoj4fd91pqVUPdinGVrdkBpiD6cv6DMycBzQ64zGy6vCtqZbNXqr7ACoAzMj7cDAzmgTcz8",
  "key8": "3JBpzY3y6ZggiMZpwBXmszAevmL7ydTZnN5HabaDUnYwYedXhgoRbJPMFfYPpaYKR9payRmgLiUEV5sDBDwHBwvw",
  "key9": "42rGts7PmjxTJgz2XcTEn5iTVdJUakCHmArqxRcBj2N6JPmWWkRuXHp8FQnMSwSqJs4LTS19thsB1U1a9eE9UMgm",
  "key10": "3nZKTTF7xZfrNYefSEvp4Y2tJce72JfBCLbLpigrVxdaBPqPGQguNBNCW7hsj1hgsQzTK4TJe9oecMYnh1cR97yu",
  "key11": "Bu7anfKBntdUxv84vgtXztK3PoLL7GTzZUVLfpGn38yZwwmouWwNjtn42jvxK6zu5v7o9z1b8vRxfnSqQgbhuZE",
  "key12": "2DckBH9u1QFj48VHXbxhcqL7sbNGq5q1kbvw3XD5pSSXXjkbshg5S6z4Lx96zicHDFSENKZwHhMWgBMoKJgXm3Qb",
  "key13": "66BB8NiprDFBH8zvNUSSbqBeQd8EMmHsXu72Yh3va5Mv4Rbw5kcQWHNiuyEACHU4CGVKVhEnDLjf1BNy7PmFF1YC",
  "key14": "2rMAxoueocqCmKEuU9c2k5MBZCJYwosSbHVuUUAuNHSaQiW6jKdJSjFUSAjvJDHKMVhipimPknKR2prMyQJhZmwY",
  "key15": "5FbbWqkCmM7ncWLVNn5vgHGrqqgxX5Y7eGrYE8rVfADsv1hXZ6UvmAuwxYKqjuhcvgZuwc26ijQs9k4Pt8g9qv3T",
  "key16": "4LDvLXmKSLS1dzd6nHMW35k3wZQgvCFuToRjFbiihEjzCDRdNAPUwfZ42YyQdQGZ6iLqC7DKUBG2sMG7Mv68V2ox",
  "key17": "5PnbsVrVJGPfEhVqttPKQobnybCrtaX3hmzxsGBbwaDFJriR3XE9mDNuyZnnBkpPGFLuNbraFKXwUt3wfebqnk6m",
  "key18": "4M1CxYAnyyZtvoSAWhLm4JLPUVBNYkpSfQ3qqpTSdDYw8NGYt1FzGLBJSPYptkg3KwgBRyvyeKX3v7FRXeezcjUb",
  "key19": "5beJUK9VJBzZqaCo4f7Kzv1fMYgc71HnqTM9J5td9tdPbnEYxJsgRsc7yCRf3S1aNU1r6X8TMqncDcb7ResNqd9F",
  "key20": "3XQiUqxM1Ru5dL2WyYoSwubMsCXqpKKo4C9awhFzFMEnVcsCyN7edf4Fh5ZrG3hhoDtNKtnGRHWhEmkBYuZhQUJn",
  "key21": "5VBHNWDS84HDF1zzp3x2oZi1vLogQjHvz3qGxZUomhq8FCuh3kZoq8GivbhF5LSkRKJrXtUfUBKC9xSpKoTBTe4Z",
  "key22": "63KuHoLs9JjAousbNVLm485X1bC1G9pWv3iZrUM1r42C81yCy388Qjiu1h7LsMM8Ed7jNGBmM3vMB7E1uRjvdBv4",
  "key23": "S1SbAFbHU3ij4XEBGTs3xRgYiwjiVrAT2e7YREYC52j1XG2y5hgerSkRnc5G3Z4mpvLZ7ynaCbpk2VuJuZieZSJ",
  "key24": "2pRJbZy3G7GkBXxaEsR4C8d4NtnP1e8GK7AX8gEDUWp5VcQVTRmZkqAGGbKroWraHC6T6cWMafMpjWDusSmpEarU",
  "key25": "3FAZmE4xGywtt9Gg1uK2nWDmafQ2JUhSTyvDYjzsWhhTDEuRiLZ4DDakMcjTWWHZDsmNJb65KD8Z3aC9oyhBw5as"
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
