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
    "3A7AraNxi7bQiZjBffD6Cphwv36petksxysCHLDa6nCVKrrBnFuK7FiWDThrdRpwBKG21gssLhTL544mUcDapZfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wdwixj44RBiT4nac5vwryuh8Z8Xy8CN8igjDm615pxW4Cnm7afb4SR8Mez1n6Gn8BFaQXa4Ck436c9obRH6U7wX",
  "key1": "BAYN99rDBcgVtbRiTzYn2JiosFZeeeJcvQTb1XCcPDEaLWiexWEEuBWFCQfu8VMzvjUcZ9tL87wEiB7yTC6AH3G",
  "key2": "4w46CaPRtjXdsCe9aPqkd2fgKBZQjvqeV2CBMNouhYy5c2YhmVqjvpGpe9MCtj1ZyzLwgKVi7UhMWkEwAQSwYx48",
  "key3": "2T43GzVZnXbicTTZXqg8bhh5b8TAJc6WUiCrgYKCQDb4fZtJkTxGcKUx5dZxD6he9KJDUasi3rQnJBFm86r3gsaw",
  "key4": "4t38V8bHakHens2RtsFNkx3YAJpsfdqbnT3sHJKZ9Egn1eAbZxRUrtKNo8XuCBbKLCbVDh2FaYcQATzGxgFBZSon",
  "key5": "4MCwwnLQ7hixVnNpEqSuMP7YPMQ9qSoTbrLoQccF48f5FqtkaZVkjB7wAYE51Ep8J4sbDETFh7NBuXwdXAfcP7JC",
  "key6": "cKbuvF5w368xdZXHeU3XQm1feggbHRoLvdshYt5sSn2tMnAu1GB9FDSjgoNucgwojjDUFL6xpzPUniNFn8C1cbd",
  "key7": "5zDB5WgUmPtX8e4UDweo8bA1cn578u2uovVvHMHyMbkCxzKM74eAFVC2QqjZd9LpgxnTNDtqfu6PYN2MNHuc2NGT",
  "key8": "22uhLWb3mSNc5qcN7jMngChSgS8sjdsAwVrH8V2yFrAXftBfdUddFAo9uMwdcBSNfifXhsM6KKLYHtfy6PW3Ez5M",
  "key9": "2U6mRyfUaQmC35zzCwCvBxNtjB12brCTe5qQRUKocvybhtyPznbyzGvyTpEYA6erZLW79zCF9iDVtMe3DsDVWefn",
  "key10": "4D5WHdyqDfqPMYk8GLAXgcoBRyZrJcus3Z7joG8xFYea9rE1nbJW4qUMKzWj6b1dVFonDKCGnxTfFbJsZHpExwMS",
  "key11": "2NXdQK8bTwCuhizYAgKzRhoXizrSnPUArmwSNHpydmASETt8eKkfccLjdxvuhAD8FBenwuquV1DQHVdBpkqdYLC3",
  "key12": "5DEj7Uy9SKigb96zfh4B3MHVzGewAk4rocLKaCVaUw8w2YwqpH5wocrJBZ6QwNAC2GcaxE8bfuGD1sAm53aAN2Um",
  "key13": "4qWsDfrK6RxRVwpSXYVzqtsK9wRCuGf9caDD3DgxRFDKnH95LwhSm9kiyCxqv7kB2jVrW6Qy22cupSYEv7zoUVSs",
  "key14": "5Z4NL2FkvzCcA95WWkR8S9C48XvyrZwcYyQ3c75NRg5kVCqfgoMJwfUe196Tadjhj87RtaX8TYzPTezGPyWbawco",
  "key15": "3w8nBsLeNrx2S3vbtpsUt8ymT6gi28h8n4uYZyKpMvCs56b9LT1ucaoJV2FdaNqMzEXCG6jcah1LWJKsW5r5bsLx",
  "key16": "5gj7HsLFXDNvN4Nw9m9PrCV6wFUBkW5qiNH1dpjZEuE7M6pQ9J8QQCZ6GZ2EJ26grVsBgQQsSwA5xjaFcRiquzLE",
  "key17": "PtaTxr6RytEiDgdPcC382rKm9LBMzQa7DngEkUKuXqJQziv2rPbP7LNcMCTMX4C3pv9kSHmpnMwm495NjDTnM3L",
  "key18": "3YDJQvUmcxLj3B7uTcZpEnvGVCuqjpXcuWSFpZh7RsgEfsYsGmMuBbct9HDX4aYjkJUhmzw9mNXzCjy8HSAD5oZX",
  "key19": "5VXQzdK8HpQXNDexEE2xJQqZNYbqw6umU9xJfpekHzV1WGnte6VYWSkegYe95ChpgWod9Hp7vfatmzmGp1pnxpjb",
  "key20": "5gxvX7ZimTwWYwKfMrtB236v31y8S1tPjCZF2Yi6r4hv6hrN7jmhREmfaghtDpU9UfrV6hDD39ZpigGAJ8b4rXGY",
  "key21": "3jJYZugjNVPuJDBxKUVXkp3asZN9N7nqgYRsRnHXUKN8zZFLEHPKCKeQgGTZ8YgYBVjB2Y6HE3xph1bTm89XuEA8",
  "key22": "2BR43jTYdkj7H3VS6jwKNAGtqyHsh5pER1qt3Sh8FmVhEx77SQoa2CVtDLUXqipz6Kpvt36j6gVg56ZJfTTQcPEn",
  "key23": "G5eoHrk6Yt1x9PtDGzPkqZKYDAPvwDFei7qeUaHdJuHUm1r9dRxZZUGCqHUoQ2g6vbGpPbHs69cT6GWwFQfrmS5",
  "key24": "2PHSukaTAZfQJY5qiqdGpqa8guWZrkizSsoxcuiz4JNx2f5h9Xz4U92tmEHUpHTG5T7ZueBWpnptT6VV2zd8cHor",
  "key25": "23w41YVtAHp8NJH9ZHyC1Ki8xRApk92M9D7EHU8CmSLgLEnE8BkMud8NwxHtFyedCJizcLFfiKEkkwTZHcRSwT3B",
  "key26": "5qDVnMw4U9d3nLm1VPxn14AQjEgEyB9zZjSoKxUBCuny7y4PpCvziZ1qN9LUmWvVskUjov4sRypgxPA1R7ubvq9q",
  "key27": "5rLxh4yMZybV94wx2bwBYU5Yp7P5MtGzmmnMrxnkSVEzxT7psH9CxZat9buijjFQN5cWb18rn5mEFN1SHgNFWnSx",
  "key28": "3vRUAVibn2VyVnEDXeNTymzZo8w9o3uBXJLAeuu4Pe85hnDzddPqXj4tgTy4iK6QzgQvHGYLiE71gtKThQ37Zrdr",
  "key29": "2Simp5vEadNh97sC8aqzuY3PLtYGn2HiC1NmxgzuUWA1bRtHFsbBNGGEzmjF4mMtj3um6csSayFAzHTpAVSZeiuS",
  "key30": "28J4WfJaPxBzr1frosHt2jxbxvRTimNRrFed6WW7zMoL1h8A2hfc8jJ1mD4x43ZGZoHCVTZSTXeHVzH5zgKrhyXE",
  "key31": "zUQbMzBr9FDtSmEwXiKoZGF2fuhi4DRvhVe3Ln3Xz9dnjvyewfmZoLpYjTULvrXVemXwbNHRApNYYUL2U9tC1Ws",
  "key32": "L7VkAVFxjVAcY3rPptKXWzyjBqaF4UYfgLA2KZoQWdFoSxbbfN76PRNqBe77t1PzHG92PdGvK5NsezzQ6BtF91i",
  "key33": "5zkZomfikZ48gPVyiJc9Q9U4inH2695v3qz9oDsoZ3z6STz4LSyiPPthNv3b12Rvkmge1DD611LDCGisRSa1FMGg",
  "key34": "3wepykRZ3TeC61yH1rMmWpnkK53WRkHobasfdAo1db1Fc95aPfadRHdk9htGYHBT59ygENW52gpoGHQtj4cZ2V9N"
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
