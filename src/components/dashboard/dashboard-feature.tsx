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
    "5z9sx5YFBbeQ2WjcHBtT3AxTe5BNySoFAUaf5xWzMbiX9pmAcbFPuA2CGYknUWMLQxX3ug3zFhMK8bscciLyVfZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62G5WMrnUT4bENWj2oJEZv1PweNZE3WfzutYcP5orvLtvxBNw691VQvp6pT44ZMab4Dwr1jgtRxLjuZQxjSSazbH",
  "key1": "3xisqXnio1YcdUXUfgeW9KNWicXLTsAStJSdJ98uaXxBfYnwpbda5DTzWvnpmXbAhswd6tEVUHBu4UUfyeLXBqgR",
  "key2": "3y9Pz1UwGxaSoRiWMYpTKKJXs2RjA3LxmMnbBQY9fe9gdh3iV21c59k6MkWmhyrZT9mx3Eo1xCeEFLYc6re5GumB",
  "key3": "3rSZPAqdbsZVTcGs87Rni7UQ3BjugeQdMcPVG2ZeG1vCKmz7THvEbuBjfzPX7Vz5wiNz1NBguWjGRrcWPzSkXor1",
  "key4": "3RhXhhJp4usRg39b4UDcqQDY221GjWhiid6xzaNnYuBrqL57k3puERHaAwai485yoTXkLHn61YtjCxZAsEvZn8aT",
  "key5": "3KzH7pE6VPJ8aRzNJgVnRDcYW2DG9bddNiiWsMyp65Dc3JsbHofGxpRVjwX2bAJHAN7wpYaqbkvUWjVggcbDaSzo",
  "key6": "EUC4yK3UvtNQGXBXgAH8NTW4PWSmpc1TLMH683XRtMWeo9EKGeCCcmVoLvxRgfDvJ6Z67ZzpzihhpAXPb3YJ3Eq",
  "key7": "4m4xXvJsQ96B4gwDnb2rCcA4KumtXxRpE3Q94RDUWYcZnuEhsrTX9J3otAw3RV5gKK3qt4NfJhszwUhQrsvuC5zt",
  "key8": "34FiQN71Hm35Ax23XTc94bpTfVSSZw8PJVQzdeBAQuzL1jPCnd4LApzsNpNtgLsPtvqaKm7JyTiASpKJMbtfroiD",
  "key9": "39ieZPQQD9ETKfewwfDMHuSMHWuXFKT63EFLFsKeSCiTEN2M8avtBdeAdF8FY2n29TzRbxUmZ41nop5nZpSdQYCu",
  "key10": "63m35m5Znx5KU3PUwkFu7KB3ZVN7xxNbrY2pxRtYven5MKHW5N4YXsV5AES5kEjoD5gj83v8V7btsC6UbHEu5Qpc",
  "key11": "4jUaifvBnWdQA91mkU6m8PcP1LmSM2Vp52Huxd4WzHeDfW6AhcgnUwuMcyoxywZssHGwdowoo5RVXZaTW6wf9FVJ",
  "key12": "2eYpNdhVPEitsffE6HEoNCvRnbWE1crMNZEm4Mq61mSTbJb4FgUk5U4Tit6aguFN1a8mtS3WCf4nSeWj6fM7cxYd",
  "key13": "65pv3AeZ6RAWxfzpUTowyypGDaoQuypzGrsmBps9gDhgN9auLigjHiZATHkhPmjbFynNeCmsXy4L3PM7jzici44A",
  "key14": "4SS9DykN7uCzXHgnb4rAWj9AXodCeE6Qoz6gsqt45q8u91hvRTtaNUrcnuXHqbKNc7RKqV5GJtgs5qxMpdQhZAo4",
  "key15": "25uMafiZuKMoZ7WDbdD4jeiRu9fvoX6j4NLxzLthBLDgF9R568CUjaTAwbUmfsgYPJpkAWT6eJaa1wsUmxmXiQKs",
  "key16": "5MFZ63Y8TALmq1SM5sneoCgERN43ErBouw7TkQmwEBd7MJHnz55FEsFJHu5vmsr9BULWJZWJcJiVXcpESK494BJM",
  "key17": "o7NSQJ64E9kmEuwn3QtwFqmTFwatyZbmob1F9xXhVoTFAXeetK3z8KK6ZcYC4wGn2xjtNgfwmv3SFjKZ2WHqnjw",
  "key18": "bthK5bbePkZJ8g9JDY4D3PYrWKm9qauv95rdwFhpEAGJczTrHD4aZ9JFKNN7MLUmJNMLMaYkrH74mzzwz2LJMVP",
  "key19": "3zQFt17o1eDf6eGKH9Mxunmv9jWTyuPobfY2wegj2qBLNZ2jBLentxEoSigL1ga1Yesb4WfdAwMRxFYyBR5ePBzd",
  "key20": "4zUScC4URwuAhyH8eVa8gKVwhoLcRbWJJeiQuGtsPXBpSJLEozVy8ZG7ttvp4jXSXbcdFXAVTa3eobZqMgRn4yMG",
  "key21": "nC4MN4uTAbGEdiRk3MArGSRXHVCbWDeTcX4j4ZoPMATkcnsfDiTpCjhRXVQ3G4FG5y6u54AKW798XrqTv3FD67W",
  "key22": "65U53geQrKPJhYXsAZmGt6N5VCYQXGsogTYTkdwrCq1A2P7a8CHti47BELcbgvif6AjEa6feet4y8wvYJwZ8sx7",
  "key23": "3fe3QpkZxyjHwc5kwpej2osWxEa9BXA2hG5tXavymEwZeqRknFH5fTAn4phvUnre5DCCp7HSBRmRDZY6Ec4mEt4x",
  "key24": "FxEpWpSdTn2c76dJpAzLKFo1LSWujvgzfiBh7vV44purEwAycMc328qfZYUYBZUMpgLmqUCPG3bwE2axut94rS7",
  "key25": "3uFxbi2HyvbjocKsprKcbrpAV5kxat5kb39UYcW78dsg5kfqArq7P1HKdaobQtmUdBvSTAZBpqUTux1UoJHHi8E6",
  "key26": "2vPQF3AREFKWo2JyGEcJdXpdnACVTwkwHNfwTmZWX4zuUi1H6fSQSwwKS1VsDmP65zZeBHUgJVhHp3UfpDkF5yr4",
  "key27": "4d8f6wn1qpDrgq8nxqZQx64B9qyT7R4FR3rzd9DEXUXTX7h9CRC75GtictL9eUjDDVFjjuTpB5d9Hm8EQQE5vH8Z",
  "key28": "KPcihVT1jEmwzjrFBM6SK5RzMXRCBZHQ1ZccJRWHRkapf2fbJ7fVCWhFRy9mo8exsvJgLdi6uvBUAB6F3HjJrxx",
  "key29": "PYt6G4KeMcDERrR2z8zwB6YGihTpq4Bt8dt5E8JyKa5uCH3pWTFKEiDapNAMe1srQnJUioCTFFyUCDoAEzQFrjW",
  "key30": "4jGdvYdTe19Wras1vVbdJSX5CPPwvmtUmydHQYxrMicmQu76oTaEG6dAKwB5wH6buWDaZT6vUT3KVCjUAkscFaU1",
  "key31": "2ZudbSSqQPS11HWFrUdDqGvnXZd3EvyRG8bd2Acig1uR5diqB8S58JLv3h7ahdWrySi5TMHhgDavauG4CBuB21qA",
  "key32": "2pKjZ3rBxNR21zL2CMZjLvfrMEvZUvNzyDtNZxNPrFKmVdVDkCy3DJXqCJUUoZvrTUEEHaqKKzXT5AccuqD3HQjC",
  "key33": "YKjo2k6T1bhKdcBAuQKhwokKUAjGdVMZuoXjZy8yACRjCyEUszQeBt3uJjJYmPRGeTTBa2CMXdALsN8URbmKyV8",
  "key34": "34aEbRSu3nD3YQtnMc9iAxDvEDvJ7wvo3kZK4wz3pgNAkJcMYSpR9GLXL1oLteDPb5j6aByh7U3uBoh21azwPQnc",
  "key35": "246EdAeAj6sfJLnMPinxg5yNXEagh6RdmqT9Fo3un6iLVUkcskVPf2hg4iUscFZ4WrzKoY4CMAkg6cR3RB69HoaN",
  "key36": "2E7K1YBEpihUZcSUrA4bRkktcVM6D74DGwFQ7HVccHmfzpfUGGJPV2PLoRn7BLkFkcXnARUNU7PAwLJURtb55Kve",
  "key37": "ezRnFDmvJdHzu3ETAyRnVNCo8rfZCRo8Bk6Yo4U6P5JKu2JSD5CeDgPAC5vMm5xwfcm4uPKewHPF7Ucfvououqv",
  "key38": "3E7G3WqAga3fTsqbfRLakw7PbmHgEzUeGwA7e8dqfHwneNF3zFtTcBdwWuv3JeEaWnbJEDYZzpYCuT1C8yePV7G6"
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
