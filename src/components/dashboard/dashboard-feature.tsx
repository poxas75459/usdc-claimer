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
    "2rc6tcAnzdTrGEVuk7UfGqLPZ18FieRFTGePbw2tnaQKgqfXyQgMeaAaK8bHq1JnLUNgUHwiyieSMUx9oXHoSuMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhzDsdHCwgcpz75ER8kH5U35egUd6wcjQ2RGDCEddWHHZE7vyVC4YLuDE8gTQvPZF3UKbooaPt8MXp7oA1CPPyR",
  "key1": "3ayWqLxha1FsxQoQeCVZZQvutRS66t68BEDwKRcGmkuTLvPTChnFq7F4HwXxZYmf8DJhQHkp7HNzQmoxQ4CorT7M",
  "key2": "tQy6Kh1TFaF6eQQ9H29vjHfrByio9ncdTiMiZPpnYMiCSQner3j8WJcQ8SGD4K43YjpjcArcBK5y7bgdKBjPsfi",
  "key3": "3iF4ou93BCq9UrkLGEwu85cZp6TMzq1xppLbx3vLuwkBUDSpKLz6jHv36JFiPuPexxrdkp5Gx4TJfnpvSoZgQhbz",
  "key4": "3raWR1Vv2YQow9tEWYNSE9D3nCTxh7c6PGrTBuFnSuKdPW2Xgfin8ek3bkmDZMgRsoAG1P7fUyuiW5k6U7kbzadq",
  "key5": "5b6Zbwz8bE44fUg6HuBoZhrCrMkxEJHLmKcz2x1jceXRzTDfEAyCzrrSNMCn2gNwP3r31AteBFeKG6doPvRcRy6w",
  "key6": "31H28qGwiY2GEvudNJh6M9btFRtRW8ENhPQRV7Pon5acKt9vx6AcYXeXzy8aukgdkssqiuhNqwwoUQZdhWfzaksC",
  "key7": "3SDYo3gpdwoKNApi8MzKhhqabntZ63jUaeBTwfDvfPbji84TF5HNELm4dSXFR3bHDhgZhAYBhF8AY29PtcM1fLxc",
  "key8": "2wfWKytPJcHFbdzPjnNjPnk3JisER9M6n8qwYXcRF591QG6o2hVSUESdWH32kM3eeGe7sF2FmpTHFFUpwjPnLrnt",
  "key9": "4tCdm4p7u7Bs4MReCmzPQFyEkNG1LijZCeZuxEoovuwG8hVNAQCHZvfyt8U3sEVoiveejdG7KDamfJgoBRQ8hXmq",
  "key10": "doEVgBNDsAxZcy74v9fnVzeCYhtoMmZ815Rp1g1NvfnUTiApEU3g73AmbvtgvM6RGQjsvs1kuYi8xPxpk63wkro",
  "key11": "3yLKzoqbR2jPSmMJDfPvRxM7xVYyxnVPHB1Pd46zuVbvXQXSHTKjPBzx29SqqsnT6KTqtM2dKMN1gmZouRGSt6hd",
  "key12": "29YSZ4JqDdydgfU6y5s2i48mu2my2236XHi6PgW6bXnspB9kmuiSSQCtY2iaPYZgdmhQPyviaXYqVX1V65wAkLY4",
  "key13": "3Z3atCqgm2wzVu3vKZVji98zMEYNHFpzzx4D6wZKujy8tfkDGLmAta4JBhBJeTMQ474B6sQhn6zCez11KfAha1g",
  "key14": "3AqioGKSY6TAn6qG7RmwCZQJsSYKshXmMR68o3muUUSrCw1nnPwqHs771gTtUuFzrAg1ChXRDruHGRpej3pdMTDv",
  "key15": "VHfYANst5NYWrcWGVfSY3s7tMdmVirYyuaemT4Lhpoao4qK5cbtA4p9KUY9ou23zXkci6KiGmPk6avXbJM45o1u",
  "key16": "2BWqwwC1Gk6aAWM9czNUday3Wg9mAfCkwyeinF8KcCQyVJbKzB9546TVZnrQEMJXuL3fUjbV6XFLtp9AQDgEToUW",
  "key17": "1WYUcRaRgeXwrr7ZwbAK3TomowNLwJJ569rtNb8baeVcDfT64LmqGkfrGKauz2iBLZd8v8m89yHVniVcvNEgpTE",
  "key18": "2fSaRDCwUFocpeczKpRGjwRmC9QYnqWhcAwjBYYo6K1P81knGQ6mWhwYCdfkKKegpG7BakhbhSNvUvAkS6wJ3QWP",
  "key19": "imSshVKbcEK3chGfMr73m5mZwBzhrsCtfrqST9QUXmQ3XHc4wDStKTL3x6tQx3hTWJCJwJTj2Nf6A1Z3xVEpkSB",
  "key20": "3RkH6nZXbpiqS5899XCJRkAvxzLac3xau8UWuTKXDNCcFjx9D5NFPYKXw1emjVANYbboTTqhe759f9n9KceAhbC5",
  "key21": "nMUNhsoQ8wnU2qtAM7c3HLDZuiDNwBJdsgvqTsCw3fzFJKPgov4KbeCQn5qsjooKQp3c9wUABFtEC7rowd12QJs",
  "key22": "32RsyUDBhfHoVLrbXYUfKGUCRLqFTW88k6u2oiXE5EPkzULtY34BktQitqDD5FLkiRKJvfgQSvc3hSo95ToMF8u7",
  "key23": "3FVJfZ5K6ffH1Wuns1QqDqNK3wibxbzo4n8VCmULUqa5g6Aza9Ho7NjNbWkY3u43teVfQ4c3TKV3Fvfya5yKBoBz",
  "key24": "21e6iSihUZdGmJTncWXdopqZor4eePHPSwN6LcADdAzeEVQxSGBLnZzzL1X7qdVL9aAahVF9VPTCsiyDaip1899C",
  "key25": "saGrq65mY8UJwxjsY2MRRC3NZ8EvkJQhdm9bQx84pLqWPoPZ4PvSf2n63F4vYrdxnsHPzCRFcriQfg4fq4mtPaW",
  "key26": "3jAbzE2QiANinss7U69mmJ57oatevASyHfnVVNJEkJ6McGdccXTeGs5YC5y2sDERKkqzqwFSKgd3kJRKMbHLyBu1",
  "key27": "4mgsSQE5i9xeGdyjbHFnXM58yRbh3CucVTEC4QTBcbeXmMVDVXhN9MCtuDGFo4dLVeCRDzKzXNE2KMuuwegnKgde",
  "key28": "5UoyzwKuhKtQ1g3HC5NxBy4mBgLkN8QtnXxr1rCyQaYHgFQMj4kqMXQLQVibTqQSQf6BhGwZhKSnBZEgcqHrGoG2",
  "key29": "2iWiJFXmYvUHAQ711WL11WS5QESgyj3nEdJzQnjpADAzVT2C6kz5W7mnTttcCcGSXb15yEJKaqCxwFn3fJSyNKkm",
  "key30": "5q6Jvuxpa8txKGEj1w6fiWVhagvhfkE2fZmsTdEgXJBATnvviZCZWWvAV1ZisQzhYSos5RCDRMuahYsSgeCG6jE2",
  "key31": "4eYMtxprCdAt6teXPXdYzw5GE77Z9SvsfgmHH4GGL6ovvCHdCkqgvYWbpfCKf7tXYfG74CtpmNNSmyVykcQgReHK",
  "key32": "4DgCeC5eYfZdQWyZTGCzxjZWS3G3aAtUGuiMRryZ1yZYTzigVh4n87nhkjwb1hS9po8geZcxbbT3DogMvrYTRxmx"
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
