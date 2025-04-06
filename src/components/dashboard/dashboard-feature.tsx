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
    "52rN1yvoQQYQBRnqKDXtU7AzXqNMSVvMsEd8tAr9ZZRzeD1nY7bvsV486YC9xGjRBja2KvucuLHCi7xtX2CMzuCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e9Vz79DBdatBwvLjxvprvntNbAxiLQsG79JTmyzAuXDSvcPqddnDEoNENBLzWdRrbVmjM1zYKyy6dXxixd8Rv5",
  "key1": "2psqC1W2r1rJF681pAptLVEWvWxZoJrXG21aAbentV9WDruMu4K7yCHBxAGLTDN8ssRr2qVZTRztbVzaBbJJAZgJ",
  "key2": "26jEgvgLmSzsiLtirSAepAWSgD81cuWNAn3gFkTCuFvWnSg37ZdzN7R2V9MShASdw7wi2n55ygxpR4SeP7voo6uZ",
  "key3": "2LinpmZziKtiBXPkA8ayfMcdLZJ5iJS4CFTYeJTrsRDzyb68vmT4zFtDxD6kuAJTZw43B1XxsnYMjuVrEvFvKMBi",
  "key4": "5vNStJU8qY2Mt1DJwRydTuXgN4fhr9MZ1Fcj2JtTuvv7LRzYMRkEDTQkz2kWowsh14MjPKzzYYqyWoEQVeDzim8Q",
  "key5": "2sZDbBNKjWQ1u1y5V5wzyXnEuPE34HMhSoepgPt8EfcoARFwhgnsJDqPNhtbHUb9Bn7TaXkG9duFXPpSYhJJcVSe",
  "key6": "2ei1Yip9bMx5NW84vALCCpdJs1GgYey3Zg98B45UhdjSg8mzmNk7cE6BwUGGPpY2rrprmPivJeeJ97T7wPigcUHf",
  "key7": "5gfiggKfuMjP4nmJfLCCp27rKMkstVZTwz5S5v5p2pfeUty1zwDAyjiJJALnvr5ZA9oNRV68xB1cXNWTThSLzwxi",
  "key8": "4jwWUschULsJQUrvbPjJjgkQcQup7Cp9PGQiD8AG4PeZQ2moezDthQUKPYxT5dUybR2FxiAexNHm8X6eVhyb1ccJ",
  "key9": "4PoAWYW4boDRrSgMitxuLGzmSfVpWh1J4w3qW7JjecZEtmr9pBQr4LAgt6jcJ2n2ZxuPzQVkfft6eDagV85mzHiP",
  "key10": "2EcgrSHQbyXY2B9w33384M9XhhYbdgRMaEXXj8R7JRXiypVQMZRb2dQ25Qzj5ejbswxm7goBvZpzZ5uvknpSzq9A",
  "key11": "55NAron9pLJmsVNKetYLqdzb5S6NdD8C5fkFTzmsghLNvJjTtWbkUdYuh1Bw5EDQrBcLJkiigxpWLkVLq6xiJdi3",
  "key12": "5bFpaBtm5ndViBGX4RKGKMyjreHVLikRomDZ2kGo1VJ2rRfFKz3jLkNusxEG2BQR7u1UnFsWiMGkgcFPx4Uipdrg",
  "key13": "4qonU6RoSNRcvBJSMBsk5vegqdQjG484nGvCYnVzJHWSxHAqq7Vstns7HsSmcazLPLJvyVxXqPXdTUtHh9z2zuG4",
  "key14": "2nWHnTDp5hQUPaMNL4UqLZSS5bp9FuEEqf35cykSBDrRoe61CkeDktMLqGRQPPhvF12vksBcLx9mLYHhF62udJc9",
  "key15": "3NFfXW1yhsWsQrX85sg6ce4PvGBqGdMAPdQ4GRSsC6z4qHDtx9A91h4h78sEgJ58hBJf9jJpDc4QmtyPRAU9uYQP",
  "key16": "2kg3Hutr8LQj7Fk8g8XNaxgEDfekNXQGgRX5UUArzb87RF14RacCXwkk89xTCLqhPm6PeKmjAiHLiWruJ6VPK7Ct",
  "key17": "45Z3QMoUQjGwomGePAcJHcVT7iHJdBPEttFXGjSfFie8TMt3GB5jnXkzeUgsaSULCqajrgAttS35GZfM7x9WHqS4",
  "key18": "53kTKEaGJKeVjDmdV4DKxR1Bm96JKxr62oejTpr8ywgratHTn1768sJHqigha2SqLGLtetFLSHXrNwtMMTL9drXT",
  "key19": "5uN47pZwdHxwSoQWGXZ5EjWiD7ZErjNqrD7AQU9yEss5q3aUbrsS4wgH5QVs28aiLotus2QDrHamrx8y6knTwRh",
  "key20": "53yEMBtyrRTvTUByYJ3NXHXUBSZWGEyei3KMN5xhwenxF7JeUEBiTtURFzmVDvVeyq6wsAD6hDboVSGhGvo1bFrr",
  "key21": "2DkhBXsJMbrszzPvxqjPfdkBRHXreHDQ1tEbGBp7vUdBAzZ6fpjz5KoGbUsdkCbnXHg3h4MZjqmhb8gVQUpR94aS",
  "key22": "4VDXHgnn7mGBgEYXMx6JhSbtC8QfVYU5a44X4HrUEmi3mNYdSVNRymDJK7ce7J1CgCxnBwETDqrDz6TyKPsDUCiV",
  "key23": "45fgxaBP9oFxKJVxP4xttniJuhes9vAx6EjDddx7gT3FJYHVRukcMmUxzuKM5VAh7sbuNLdiYz9g7GWDxN2mxBNb",
  "key24": "3aoxgTVeL6yFYYZ99xixWRg7Eom58ru9TLjoTzXF5mdzCQkqwsauev5z2Ybaw9Bg2yEBiDshnDfGmczSktMzVQ82",
  "key25": "4VSwdx4eaqzRXcnDvpr7SFJVrB6RrTR5jZSiBxyiAc7tSQoSXuMhoVMYRsmugTJKdqsYXkWpuJveQDgX8S3XPmTk",
  "key26": "4wAN4y6BzT8a58ztRvJ8wTbjdUGW6TUuWJs2V23vV9uXXVTBpwYgNMPRJRmhxGr5WGUXfYvZopU1mUUhWsWji7Cz",
  "key27": "qSck3qmpucN2hqPCW1rd6PqUyi5ctVBLj9bqKEnishrV1UY59khJViBmf5iR5VuBWeYyPWUnf7zf9xLkr3xVGg1",
  "key28": "3yUJbvQMEgRWahWZZN7LEDXb2mMpV2wSb2WzB6Eztf72eYiHg382RcLU99y4qXYGnYkMsLBbm5iGYaY26KhzUris",
  "key29": "3adEmD2GauaF39YRZuTFBTTLahn6U3LCD85GxT92bp9mTzhTQW6Pwe6pU95Diaux3tXvfCQ5d1FUdyve3Wbpt9FX",
  "key30": "4o7AkNgcB9EMFgB2VftMmsJkj3REYZDYfcqYsbvzbTjL3WZVqeym8ebDWe3BscdpYBvGWSRocWcT5mGazaQMyH7J",
  "key31": "2CzSW6ZwcWGxHqyiMujNqUW9tNFj5XiGHJuWX8KW1QJQPqVhbujvZ1TmSXGeesDN3JUNABECqKpd94CjzLvyiKLz",
  "key32": "2sQgcie9AxTDo7Ueo4uLywbVavvvuQ29KNEo6H6rcjsB1mx7QPnBmY2i5B4sfWiv9FkYR92BYCswU2uczzsEjHi2",
  "key33": "5x76FMGtj8jALvcJqymRCNNeSjbam98dZEqVv18CB4p6qU1UADTkRGJGNxKNFoBx4SssTsvNdMaTeTmNC4NYSH9P",
  "key34": "2XaGs5V4nfnBotKg4bx1saPc1a4FzNbsHLntAdnQsQ66oVuWXEq4ggDJ1pHqY8oVT3Wbr6EEZhRfpGVUY9TRNzLH"
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
