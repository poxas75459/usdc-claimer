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
    "5inQhQ9TeBwki5Ud7tch2ivVbvvkyQe1ut3BaG6ZPYGNgPJzz2oCRVZZu1BoYceuhpCSbLkyE6sgs7FLfdwsWgwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51xG6N8h6qMeYpV77yUp1ZMpznRhpc7oErLBbC9wPmpK1K52NH5MWhioVapaJBhCEBB4uxAMasdBL6PvZWR6bHE9",
  "key1": "5GgQ98RzzUmuAJKMP7mGqaqqBCj97GVgsubLNMMtd63xmkf2cCa1fRdHyW1Awj1ZFDeEfySoEDU3P6KpPxzULnXy",
  "key2": "4mdFmSv1SHBkEZE7g1MuHQfsRjz8SEqDgLD4kC7Ri7HrD9yuuEu3QfYYarVKp8qsNibnjDjY6S188q4Q1zBn3UhK",
  "key3": "Rr9JTcFmL2V8ot8GA1RHuqcEcGfVEzUMpsRuG87avB95YJxghxoYuByyqiJzbBByRPvoUkLTBu4jA2QM79zfeig",
  "key4": "58tD4F8BXu8M6zUPkfrFLwo9GWrEEFrGKJqoMXsMiaQBSA1wvtsoHnzZn5zPdzBXjydCcP4eNJQYuznkkSrQ92vj",
  "key5": "2qXC6pzu7GdKoDpBh8YYT3oc2nyTh6DiCMwqBc468HBCsnSD3Qd7c6fCvLLYi7QRobtjcypPsE6vwZNW2pjzAAGW",
  "key6": "k1HHz6Y6K3BXHKezvR1z6J92nwug5omx1AecFg7GzReq1xHi2CZnUvyVZNZB2Pzpn2U3crgdvGwmrPRfuWM9Zqu",
  "key7": "tNw1f2LFAMquLEk17EEimzkgVrR3FrsoAqHjGQ8f9YDk39xTd31kbcaMQD2SNnyDJGWiFPZcqnhntWQHHgyTq1S",
  "key8": "3V5isTbSxqZH1o4sRtwncfWU444tdUavd1SJ2AM7bE9K2aCAuYcmtR9PRbfNhAN3Nc1WyetmEdNaLYKsTsziRctN",
  "key9": "2WRiaN3NcCbFiRrJ8C7KqCwMqh5NrqLZAszVESEHgsY9PjgEgJURXKeoxbTewGwcQs7G9tdQDaV7PyP2VR2hXAtJ",
  "key10": "3wLAEZUVmdP5kb8Rh13xRP9A6K5MjVPASTKCRxtCDaXQYExuseZJGJ518cx38NJ5EuH9gMarCUskyMDpPPQCUbtR",
  "key11": "2x485gw4EiFYa8ixudKSPsmh79tM3udVvQ8aWLGtJoaTVeGtXA47qdeES8DF7kvSfud268srPipr9kxijfYNNbDq",
  "key12": "361NhH2YWfXxdhQd9YWhWYwnvjdKzSjUv7J2QxceGjruxKPbfS6LHJXVqceZph4evSgERcMViQULj7YoPbXv2m4B",
  "key13": "5jEZ6tqbWzJj77TEfaDN4kQwvoN1fpw7sNti8WQZRcCdt6WewkfwLQnbM6ty4kukHrAnW5ycayeFDtHg7wmDXzHk",
  "key14": "7Ghh43GAbpyFktLuUDf8YrP2kfyTZren5skPXJaRH3A2B9JdA1JeQ8wMYe1L6QTnNt1FvuYYgL7BLx8pCou8u1N",
  "key15": "2hVMPzPzUqhGbCPidQoGyUodpgecbbhrH4ysMDDq2r7U5kgSGUm93CMGiHBujqVQtAkyaVoMp8XFZC8H7MXb2es",
  "key16": "2GKp1d7mEABZxLcWZ9c7jmFnWtcvMeoZj2w3QZ1FPF6WG5c8BLedWDr5jT77HsFG6B4CWs7mNrTDbDrrxNVJNZu2",
  "key17": "4FaSSUmWKo9PD5mVvjU9JKBbdfFs1NFjsgLV2iTZLyQSTB2ZE32g8WeuXh7gWZVLq9pSehLQb6Jw2Cxiv491DYFS",
  "key18": "4dRdTXkdFsTQ4S1WYui9H6C3VjaRc1Tmda81Ek2sVrp4hFoiQYRb6xGM7pHC4g3J6GBGmqFopHA71FYhbmGC9kV6",
  "key19": "3K8WdbX1zyX1ZACg4tZpGTi9fZ4QBwJhrfx11BXkREqBbUzgKJW2RweYAEu6jpgzSzkVB5YrrjrnZ6Jru2Q9rqst",
  "key20": "4atMo6jgJ7QoYCuQyfvuY9Ue8La13vAwZisRpz7VTjuiak5ri4E49Xza59igWp51K4djH4mMPJ8uMAdnJvDK72cZ",
  "key21": "4gi6pJpF3VATnkEX4SeF2cA3F4EchLfrisaBuaHfDMMkZtseGGyJZ6jKxxfn5oyXf2CxoHMZ2cjf1jgnsYi5fdrn",
  "key22": "3YQbYvvHx48z8BY5umuXrGMQHSJi7rP88asU9unADYAx9fpuYZ49Sq67ic1opEPnrrs21Hmny5Dc4tbq18T6gRTc",
  "key23": "5uKe3yH7rzNYr757rouWc81c3cUmyEMzseJagznzNDq4xJJbeHSvKwyKddhN39amyqJ5aaoMn8XNy9Gtx9Ygqbux",
  "key24": "2saxFKBuNqkF3cc3WBnSFzubrmZujmar1aksJV5N2zerSDh4ACEit34Uy5DZNzFbkVEyFdFv57KBQLck1BuQm17e",
  "key25": "5VDhSmoLfP1Nfrcs7j79sRh8YaYcpcKtqveyedDJSXq1uqMBzWFj7rkVi2d4v8sSX6zTEZ7qdsuuK1aEpBiT4LBi",
  "key26": "2s1X1kKS9nhFYPaDfA3uoCer3TeyG3GG26ZMdjaEfAGpVrs6h1gNnjHJ8zDhZqzAvfq3wPzmfctWXLjHtkyNJooa",
  "key27": "2pd6tnuzH4EbN3J7ekGAdxaTmP5oJW3K8sXQfGieQgrJENDhYa2YmEBZCBjn5YC9S5XBM7e9oyLfZdgGfLfpQkyc",
  "key28": "4FND3Bi6vBm6XBTgeResmkFoqXDbcjq3qQkedYWdNXRomnc6Qexay3PDE3G6mpDSdeKUYCs5vhmuZc38KWo7gsVP",
  "key29": "5CvFdrEWsrXzXY9XaHGFqjQ9JEvaP69oqUu8WQfYPBxKaBiRiMFvW9ETAExbMqpATF3ZiBS2nbHJBBnTcBGmnmK2",
  "key30": "4tEsoi9uZjgqBpwSYBWS2BxZMvrEKtWYzStzkPcTp29YAt5BuEub6kuogno6NnN4s4YL8XhHpsxbu4PC7Q8K8D48",
  "key31": "2UdkMziW3ZNwZr2FJnZDgpuZVotdmhtixH1TQ33HaeJ75mRLoGU4Z8i77sfZHXap7UL4gtm1yoePihKcp4gZUoG3",
  "key32": "2F8XY4KHD8obkH26drVtwaa8TsTPh3Yw6WePmzMcZzuNb3vB75YxVC2xotFwaZgcExPSL8ScJLuh7NvgvrxfMwYq",
  "key33": "XsCsCBw4jGXE9cfj1tKe9YWkSeMp9EzR8rCdtKN1KxX8s3Ha9NYpov1Cbmku1bRk9Lg31LVWbGUsQixXYeWka9M",
  "key34": "ckZyZRk8DjS6h7C6gmSQq7LyCfuz482DWRZCuCsoqihDjcYDwMBMJKrCib9FgHZP2KDpNAaqiLAytDbV2t5FoCG"
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
