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
    "n2sa6ZhQnCX3chr52HuBUaf7dqrD7sr3hwDzc3RL6ZGn42a4JFGfxki6HjcxMe9DrnYUx8z7yNHxeKSgqzP5LV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tWWeSHq51KtGfL25emLCgMRzvBhFV2UGNEPaxuc8ACGv5d8bTRYiF1Ps35kGd5QdYTBfDkcHT965zNAsL9x8dFb",
  "key1": "4MowKUSgR4qZER3AVwh8ffBTUHyVhjjhfvXffuCmkgqXz5Uia8BMMVA2ozBJV2Z3pNQQ4f4TNe91az8rMmdsawXo",
  "key2": "4eXsBNNxWV3oPPnPtB19qxeZddjHSL8CiCbBVutaoyd6XfCjw4jDuzSheQJdAKNXxV52FrfRp9cnA5XmgWnSyB59",
  "key3": "5MvJ23g2AsfdWqVckmFPMEAjagqXMgT8zHVAVRPZkXtnhFQsAzfPxwLC5BxAPViFyJVvte8Y7p9CmCyYas1uTnU3",
  "key4": "3BeZXcWAVzi4w3otdfS9uMDjG3buySTcrAKjtYspH7dUrgcHs9oPYq9K9nxTgy27kxCFavcyrq36pigq96b2i9Ya",
  "key5": "3hXDTMbaMjYZYi76uYZ8bLpnvSg9RqvX7zaBTTsNikz7TaHy35s5eN5CNx8Gt4Cifywk8GU6AJTbA8cB2eiSUNee",
  "key6": "2Kt2zPYQ6ZRcyV1qy7JotBHUdzvX3raciKKFzcfqYU5bDxNYyo8Q875jfcpXRgqyTD7GVQu2Z76SzrFdGrMz4knT",
  "key7": "4b5EreHmtXLps8bVrSaXvztYiwKB5hR1vvV24vXNGyJofPZsvPdNFmF1rco22DqrmdEysrWGmYuj6AFaS1jdd3k1",
  "key8": "5qcVEHTbwZfQgwuSC3BmSmKMQXs6G5RKPcbaZW8iTrddSqKw8uAfzNY7FVAijpENzcTR6VvWnuoLzyEU9bahauSi",
  "key9": "5FAikPsQfxpM9cgqSDJXRrxP7oQnUP8XvXiq5WE59V3DCw7Z4MRCMnVsJj6MZJjskULqLZroWBEtpYLFGg56b9F1",
  "key10": "2tMVaMBxbBYRc3MhLfZRfs1FeWsst4k1dkDEqWSMMiTmBUGySCwycPRDeLRMnxPrwJSLazjkHNUP2ijJV3pAXbv9",
  "key11": "3oVQNrqA9zzSBMaC7ENok4GSCPJ2L49rVbJP3aSYQUqjLX1jxpkdFLfNmsrf4GSFMxn4FG8B2dhy3qR3j1XCENze",
  "key12": "5zQ97UWkXa5LjZx2K6fNfnKPPhew7t2E3w4pYwvJd44cfAhUQNa3xuFRW8tTWYqZHZ1hp4L5K24Woeh9DCQYVFLf",
  "key13": "2rXQBPbfkAgwTHekNsCNQFJFX5AGDuLULRo5Jdt1rHrx2Aiiw1GgKCT2j6eJk1CUZYe1gtex7i8AXUVKay41cmpk",
  "key14": "2JJNx2Ny6cxKD3bvuHozpPCgTgUU9c4vNJdBCZX1wXU5vTfwAo8pqPc85gSjCZogXzUJsE2TYBwbvTNx4o2UrZfR",
  "key15": "2JdkUNYXZzARJqu4A7HLtmhgWPzZQGRoYEovaRmFRUK4ew6VD6cw2EzQA3xq3FsZyRF667MjenBR2LGrYLe6uyk5",
  "key16": "2saJ8aKKkMeuen8usjydR6aR58ZG1C67VsTYgTrmcsou4vP6ZzXRuXbX4PfcRTSWPTQ7xSrG4bbRyTR1L266AN3d",
  "key17": "2qXz8i1nyADW5y5yng3pneJKdMsYdHydkBAbxi8ZwBshzqh2rjji2axTTeoKqaxC63fi47usNfi6Q9itiw5kPsdH",
  "key18": "5RZiLWJXYbiHSrZmmjVgup8FuH4SXtqDSL4Wticef9PVTYejp95oF8vYJGixFkKSiP29UMUUwdhd4hD9MWsvyBsB",
  "key19": "s5rj3aERMbJPL8ymiq7yYqwyzrjPBqzpcWJvjkchMFjVqCuWovuALcVcAjrx2ZWByShsUW4xycWqzHhet63eoHA",
  "key20": "3dyEFLX4J2pcHPq4nzEDeZY2kGZwq1zf9TTgCck2s41Q3ZqisTXKNDXqjefAcVd7Tr4cjodTLPht21EJjZ2A7ew5",
  "key21": "38VNUqQbqbcZprccxfDT5jsfXrCoozbRXU8QVyPUkAgwhrXcbFwmMiuqdf4L9VvLaNhD6YWF39rpks2EZvbL5tky",
  "key22": "21ugyPHDvm3kYK4PW3vB5nbDJW7YrpZXGEKvQeT1Z4r7MyfMmX5oUeYB6PLWR1E5q7PCPV5ownCDQZya9gGrr4hU",
  "key23": "4zERz8Q3W3NbYyoDhqwP5k4a4QADi9V77sHNZDLmydu8f6h8JJfHHvixpvfAZc9uPkuWQyaihtRijkQDQytu563C",
  "key24": "2NUd41r2RC2UJit4ESsf9nRK4fVTmHPW3pwo7mZzcRuxxDPA7XtcEtfJDyFMWqqWJ34Nx7BGqTWhvJz5j1GRRBBo",
  "key25": "2KgQzzuZDti4wSLTvWPPwxiY2ZzwpRTwyx33VxP7bsqSTT7WyqxiVA1kQ9nWyHdS3yXK75UNagKzVumQobEbJ45X",
  "key26": "638SczXAhxQs7ggEJnyFVCoGmmQXwtwbdkFDxFB7cqnLxcoxeGRRn4EQfc5VCB7o8yPk1yCkXkimcezt3qxwkYFq",
  "key27": "2zEZkZzh1dC4gCRyjSkbL1An4zzk8CnbXZK813qZYquWJQyy5yCdiuRK5ymDT5oFHgq7UxXV9JKxmm9N9yt29kwF",
  "key28": "2VhCU2phJrPa5TSDfCM5rdvXBds4z2VJXCnUTFx8RyZA2Y1WcuLS9B6beyjd2QiAGL5gp2kJfpffNJeHGnLsKYst",
  "key29": "2NhuaYrfckxFtYpqdcdsLxopwmNJqYX474UdKQuUssBAMEZRxqUVGWmmERLg4KhnLw7NwJ8mnyvsGU6XbdyNGC5S",
  "key30": "2t8o3kEWpiTfVzoSajdxGp7jmo4zNYw6DSYTskY36nQtuqufFyz8M89qLEvcCvEPrNzYupHYwuMmTnWCmLakRUge",
  "key31": "2fw3mdnJ2EeytzdxGMynVrKUKS2RrotuXWHvPS3DhXLQ2YTWCinpY92ktBFx2c38DvxdSzpLQDxU9D9pgtmYbF6z",
  "key32": "5GXwvps4ixAjp5zyiZkVNWq6Eet9zz9iJxWb8MYfohqRqUW3RDV9RpCSzfEVE1DQtsiNTC1G4u6Ls2jMDvegxzjE",
  "key33": "58QeJCHsX3HX4og8fYG1EKx9RYyALQM3iVem6cK1eT3AqTj5KJxYvLBHD7FgEYnqC1qUcSCmLC2vpJvhXszU8oxa",
  "key34": "3Kh9GxJbc21B29noH2qd8TRPsDB5Vjh48AYpTuRygBqnRNXB7BRePfZKcc6jx5yWBq7ezGZjK8f8dtQRUm7ETQCk",
  "key35": "3fLTFtNm9SzsgCEwSBNaQf19D1zftK3PrPA71ciPCGb31qsm19W3X8r9CjnPrqJWZ8YzdZzRBkCVunXLux4TBgj7",
  "key36": "5QMdEqkptAEVVeHCmzWGpQdRNVR4BKzqYXnRvq41wguN3bMHTdRi3KKh5pbtyLAPrdCutZgS7sNnitZFerMJFsry"
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
