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
    "5oVcAZZZYH81ppdZQpE6MLVi3voXsqrXokJDfJpuim79g5BSerf4zqMphdzBR7VJYSUcWCC3MtBeZTkf7WKerhyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "555XSqV3HdH1ZrQtZnV98VERVjHajZUwtfTVhqrqt7Jjn63rBJBE2Rah7bXQQ5iMtPPSGSshQrSS6RsDkNQwNZki",
  "key1": "3JQXruU1eY7xghGofkHaUGSakzZf82LzfshhgUDKXKd6RRbuz1DGT6KUX68EGQJFsYEBq2zmfqY7GcyEZq4m1TM9",
  "key2": "5ZgqxAx12B5nh6zxAf8yUukR6v9yBzGeZ54bfxnKW8MnaYj9vUEpMy8wJ7gNUfcNHZrx7qBg1e22pJAnUjYMM66H",
  "key3": "4NXZYN6ieXpAJcLEy8vZs41bfiqq6U5T1nFCA1j6fHWNkfb96qwCysohTjVucZpiYcwsvmAa3X8DrPY2oYErwFYg",
  "key4": "TnrtA95pVr5ig6LFtV2vmbRJuzwiDdWy7f45ZCwgNnY1FyFD2fGAx2bJ5rJaUHcJBVzo6WXNS5MfcjjZ3dseaH9",
  "key5": "UDNUwN7bs6ZteuBxvwgx9uSmkoQUDkgbEsVHv4LRQqR8PmKCCsvnBnvkvrPGfNW9CbNZ9DmMdUxY8i4uAhEWL8s",
  "key6": "27KFWa8jTvKTvPmHAJi5Tms5u7Kwm349KkP58xeFUBmtkxuwNetoCbipgUzFaaZ8vyoF4gS9ugU1q97yTGvLdghK",
  "key7": "ZLRx2syqTuBzwuiFd8iy1y9bFrGtA36cXWYYaS7YiTFX3Bzf9YTWtCCYBtG27veEysKWygLSiqZ5q71dvMd9ewJ",
  "key8": "2582Yyh1RSDcHCFHAvrhcbEcTinzm6DLSp8JVhNEyoXGx6nQ6tzFcGdYDMjgxzms7GngnkRfbcYdZo5sbhfJRqFr",
  "key9": "4wbCLMzsLwT6CFsQYcv3APDj93Em68A2TpYYrySjQx1DHfp621BQ6t2eJ7UwV5F6D6tMBhvJGyZTkgJJQxzhMc1e",
  "key10": "3xCngu29L8oVYAodmZ7JTQUF1SUuRBBDfmRKisg6Ua67WevUaVf4NvBd4hewncTQ3aQDKdhdE9MPd84cDZfSAwKF",
  "key11": "2uswoegjzvg3C1xo6ZamBmv6fUSpV7AaYDfS1SCWHC2QJeFRGQ1jom5Hx6bGR1bfgisF17cKW7yPrteWMRRaMAne",
  "key12": "41Xcjyz6PMAVbZneZ5wM9qg424u5SbfSnWTEWg8c5odbrQubWCZwzTaCyzrirLx11i9EERRjQuhz1PXTVS1EJP9i",
  "key13": "YGZMqxSqyHGWm7B2M56eabY8yFaAXsL5UCXSrF9rrGXXQkoGHV7XypAYbnL78gpF4jaAdxh6Uaw4hLrA3ENa6TR",
  "key14": "281a6zXQppH3sofjDCYBb7F4MXcJxwzkvNm5vEmT4cZwz8he7m9dmWCHMsNP1SecDFUTLYbzmQesNgVmngpb52fW",
  "key15": "2iWvS8ePZNzNhajP9sEyEkXNdPUdneg1YqZRoPNCDcNd7FrKs9nPkfiDzBsDPV1gSomq5hMrerd1aY3WVggAwGjD",
  "key16": "56GvEvR9H6Wa6C9JFpf1LJpG1YgBxuPfuEJh84gnac5PJEhcSPx7VUZEd866BuxV4cvfqizTuS8okYHVbiQ9rjzE",
  "key17": "gcA1pUuXJTCFFe2bVqP8ztqbh64rXpKKLRNkuuA5jbPhiWbPvcXiPeCT68akk7VPzUzGftfQ5Sqh15w7vEoG9d7",
  "key18": "3YZeFfrAex1dWzF7yWLnCWnVVGvKwnYDbwi1zGwWZ18KcPMDBqWQAW9Efy2C34L27bcRJ2Zs3KvJf1dKrmXct2D7",
  "key19": "3ijRh2Fhv5zLcHrntz9VAkdYUNMPEPSTVmMx7yWdy74DQ9eXFdj6D1CEcVx1kkV22Muydfw7qGwozHbBKLFiiEaS",
  "key20": "8vvakWQ9qdDdJzYQHgsjJwDX99pctKS9rTzjcKex1XDk97gndp3jXgPKwhanZqb1sUAGRK3c6D7bxHvTovnnojp",
  "key21": "44LkDaCiRVR1c3LbaRrS2rAJ2CvXaam9rbLm1FRBcxTgcuNetpCpf6Jm1c1b44xuiTzShYzDy9rjeaSY2wLXWM2N",
  "key22": "5bnDMVha4yeEqGJ9soJLnVyu9FnYL4NnX8pzwyBfR9ypViReYn3p7fdYCjuuwUq8Y2hCN5dtT1pK9erexnyCvE5L",
  "key23": "3XzkJ7sZJV5vAkYYzbQGHeZya5Htkv3skNY5F792bCzM7TyBDEnJGXKzjhLvWaykJarK3jDDGsRJLLHErmMAzq7Y",
  "key24": "2ZUcXnfuYe2bSsfSF91zjkAmD4ZZWzKfLcRUoEQWcH9fohkYQRXDDWm6TACYTzVSnMMEAzLzeR3dxYQ5YumUJfQK",
  "key25": "HxwKn6Cj1VySFSyDD3r1otB7f4sFC2tCemioYqUaRpD16dVqYM17VdN81gVudoWeUefuDiUmxw5KnK8sohXUi2o",
  "key26": "4EQtxHk7XTTKrTWG1aipWLZEn5g6JxELmoWQGxqDux3PrzK8kkNysjWwHvHx3chrBVJsCGxn76BMinUfCMiYLLUr"
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
