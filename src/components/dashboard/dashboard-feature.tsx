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
    "4BxPVdqetbbePkVJjFrpzCtp2P5RmUwA3KQh1RXa4SLn1vAoJvh7nkq2sNP47X32mBJwhJJ52ziqrn7ArpE9eXVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ryg9JYVqNtxkXaJ9hnTW7QHaC8wiYgXgXxjkFJjLHuuEc5s4crU5kyyMYq7KNvSQhq8Wz69Qw92EJXm8kJJDPHy",
  "key1": "5LDH7dXRWpxTATvb3oUtcmyCmHhiB1eDo6qu5VsbkueFBaJdMQ5iQeaoidXiMVrs2xZzudp8yypY4JchArx29oew",
  "key2": "2VD2VE27z8oppiCNvUrbZuV3FwpyHyxkrkzQHzcaKbpcLHFHuCajH9V5hZJiimTwSG3bB7AqAn2JzWzSezNVdu4o",
  "key3": "3uiZTRAPLfshxSEhDaK6vF6cS2xiPz8vo6kWqn21PEJEyNCebGPJ7ezUd1ve8Dm4tz6hoLqx3VURXRfnsJcEAK97",
  "key4": "5SUeF7wJpoX6RbmxZQRN4xDLsmT3wFZ2h8T5bB7qgCeeLwa9xr7cNWeSuveapozphdH3F3egmA5czpCgcSAQR5YS",
  "key5": "4xUQq7xAgkPpunKeBcWrqqV2gfTuatVzUwiRj81cMdv8pQdJi7XiEKLCS8fe2JFW2t8oavv68viztcsqr2EWevyg",
  "key6": "2xAgeh3jeAB3aPLf5BLQTSSAPo9vggR6BbwUvQJQmsM9n4GKxQVi5hjrwgLPbxnBY3uMKWecxFUERWYDpMvkpwWt",
  "key7": "48X6Yc2LXdTGA8p4sKvtV3tGyipFwNFYp7wDYPMBr4VrUL8gtqQkRB5Uk8HJZTyx8kpqdx2eYSyyzYH1ggwxj8kZ",
  "key8": "46JoxUMXe7k4Q373iVYEHnWSr13Gj2LxairSVE8jP9hdFDqxtzqav1HL6kEKzdN2T2YYp6m2mgsxQpki4m4H9Us6",
  "key9": "2cip31pMNGvVh8d7VHDmC968qRdNXXDJzB7tYLJfWDgHeNiFq79w6hw78vzeTsbauXUYmNzAHuti8jubbcdoLZjd",
  "key10": "PB7SASjAg4XB8sUpYDiH6KQnKC5MCQgM3WRzS3mD44kFUY2ocWX45PHK3YpEYZJiRUCCrdzfb8g5jGBeYLFR8wz",
  "key11": "2N5Ja42RbKRwe2WnKUwwGBPSbfaPgwHDfsurtprRXKLF1MPtVMRwr9n2B6Q8goBpBNgnwef81ty8LrjARavGwyr9",
  "key12": "2Jh8rVB2F7i6yDctaSCfDKMcavBS8bAS87VgubiPtZnfmJwVu6RTfYkptUssHyYTwxygo3WAnReaqG8Q2tWMzdZ3",
  "key13": "HP4aWd2RJAEUjRrrfDievzc1t8xsAS8WW1TnHyiS4ZMaCEpWeJRmF3SuHBnSuWziwUCYwUpRdTMmk77kqzbcSG5",
  "key14": "2ntyEc4kRWYoku5bq6T943xuQGRCXTWgeYKjq4n1KsBKAK55rqeS8sBuHECCVfZWr4EdhYwt3bua3bAzEnZV5HYE",
  "key15": "WnqtGmaaZxmN2cZcGk9KJomvzRTsGDfV3GKQd7ZWs4HpK4tN1xRDQZx5kYiSyf5waYb7rw7MbiG2neFVR9eqg98",
  "key16": "59QHsekapBbVw7e4VuTRLyxk7yAvTMegwE3hd2eM4Z5RWtAbJDTpHh6e3ppstjaATs1ETzSRa3XCZJfCoJdSMi1E",
  "key17": "3MWAPpMH21Eh4u7F46ibskphpf9N677vVyWvCedT5EvjAr6Q7Ja1wYXQ94kwiw4wpDApfK9mMh59u9rcMRyZ8GfL",
  "key18": "3e1yoLzxUVkrKyiyfJaowJb8YCZBxtFEyRQJDaVjtewyEaqZ3ydQZVVjoveyfnw1JPA6PBgTJtjXU9eBe1Exomfq",
  "key19": "4frsp2RbwpJQb5rGkUEsJA5n3XhCPwUe1knnV3yJP56ptGpMzEZkN92zpV1gjJ8Lgsx33GdDpo7HZGmcjk7F2zXW",
  "key20": "UtBFDwwMRPdRN6nd7UGmbVGyq6a1JLTmXPLyWPgd7oZf6XfJbcZyCaA5Y9abJxi5PHKv9EpF5gU7MLKgkEVARhh",
  "key21": "2JbfCNM1tHymzcaNowpvpXpjY7sxXKLTBPfGKKL84p7SjFPwSoigvx3sJKZMgupyrcgN3QH67jzaZ7373XwRTAg4",
  "key22": "5iMSW2EptUPF62SmStBFeACdYeaXx5JCEjNceN75UZu5Dd4PnjaRuw3nzMZE1PU9B9rv38Zv6cpcEFfyd3LCyXNM",
  "key23": "5T2Kw8JAqCWF6ikxG84AZok6monEtU8c58SXmXJquhcBcoMsDoTV2wYSkzmGpLcrCr16pkpxx3F8ShhsekMSCmPK",
  "key24": "2ZbeH7tjdJWCc1gj22oscv186GQzHrzFpkyeUs23PSNi8d2mitxvS1M4yiyfGjNThNEoeJ2hw7QtFyinDzijPSWa",
  "key25": "4VQBmoryottXsNZAvVkVqF4iMLBUUHaM8d1DvWmdwp2zqaG77kzeX6vZbPEk3Xk8JbvZQMcaqLExzpXjorsSZSHy",
  "key26": "ipV33dr7WBHdXQq7yqM37nsiCsjwtRFUCFtymeH3yqzsbegD3Hj6aBpDwp8XvykaesQqUrXs9g7En6Q55TFE9EX",
  "key27": "48joiYw5aBSfMViFmvNVXTArCimpxEBcpWgNJPu6prRNVHNV5UGJ8gm58xv65sEFWWN3TH8AnG1gfKWLCqtq7Lhv",
  "key28": "4xuH335hQzj96KHRPqy9GCug28rNsodACAkf8ywtFdA8Loa9yePJMUy3u97hsDLtHj6YPfV7uMU43ogE1jTaL5oG",
  "key29": "Rkk4gFazB7zt8Y38AtrxeQTSdSdnayLWrXBbA6i4ez8SKRnnfYzeCMX6DQTpAc3VEZK5jxQtHfspuZot6ksTSiY",
  "key30": "2ET9BYABtusbFEn2Cgc4zJU96DKj3Btg5r9Vh9rSFy2V12VDc3jVtXh1WABjz2Qb5z9SAJbrXXsWVi9Khs3XHUzr",
  "key31": "sX5VqDEFT7L7wEBzhcRFa6nZDRLd9pDsPhnADirqjagEfjjBM9o1rLneNShCiywmB72WiUsT1LHyMSTVnv5SFBm",
  "key32": "2fszbgXdHz1ctScmp3MySS2Ftdbj2f7k6SoX2TCyQSBn6V9JYiaiuZiXzDdZfz9ZBRv8kjkNbY7GPz2DR1Avq1zY",
  "key33": "2UPnhDtJANavEpbUaLGVTMZzqzT8xncrxUwy53kFstJUN1XwpSgdBgQQ866pzDGqv8A5QXw8gdTxXkpqeagtTxrW",
  "key34": "2eqkEManHURZMbD58Xb5PkWdUKxmwnhBhXC951baiRyUvgVTG8ea9tz1bSVaaH6qEvYUS7fnpvt6BEo29SNQTkXZ",
  "key35": "1219yUUoy1nWC9VXwY31HFSJe5uwVyHmHqnh7nmwQTxa1iZivDGKd2X8XpbTkFbXBDoNHUsrxFrYZT2qGTCPQuQr"
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
