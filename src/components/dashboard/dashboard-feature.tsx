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
    "2yQ53cTVD2q5fAmyvSxnNbSiDjSi8BeKmDMMh7tk4L49Mv2gYqzAySAM5HaJDXpsMRNMksrXgs7xDTGLFT3VYhWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pfo4yo2JxjAm4zBtZd3W24WxmwtweyMeFgiipJMZjvfbKtvybY1PkfFisEv1JTGJCkySYxHH4qiedLy3RRhbBhK",
  "key1": "5WvNdwpJSmCpveWYRw2Ay14RRa73LEZR26jEDyBREkQrr6L8ZC72Xtn3LXFg3nKL9zjJp2mwRz3xb38tVZ3ZyLnd",
  "key2": "2NTZedgmj9Wbhq3UgEoYY8iW9FDH8EZ2e6SYdjaoVMfmAzujgh9WgYzC2EJc7MEhrYMGCBGczP6B6FyEgNwtfJfE",
  "key3": "2ZCzC16eq9zV8w9bdHgkPadLyHRH74KtSi2VbYKSEDEe7vrTaMM5ydEwHa3pFcWFbACjeEPLytvzUff4H7xLUCxP",
  "key4": "3YeEEGfjAG8G1EPaYRHtmNhHSoCsMbk8v2nAhS1oBR5nHLyRg77qMgPUk66uE9AaNSMidExUVPDVFLVe74MjT7tJ",
  "key5": "NjqjXMuybCFDrkdnpoBKdcHoGCkdR3rgHWBMrhmSzoLqNTRyWES61k4q18tZdMA1UtQgvK3aqkptweEmJVJHguW",
  "key6": "4bTTEzYDrA6BeskvnDAZFcsVFK1LvrSBn9mLsuLi9BescZD8p2vaBkYWwmp3aDnvVkk27HCWzsqx5LzFiPdCcLp2",
  "key7": "3HAajNu4XtdbnuAZ5j5jzTTYPcza5rouWaYyJ12q4eANMsQTWbhEuEob9hzTDBjrNwN7QqmzTbsArYLec1Y2BMGS",
  "key8": "5DuBQ5bvhwLJUpd8ZSdRaX2wXpq5umtertNNW41GiH9HkxLmcD6JCySWygbbZwRfZbFxnig5ece4FdWk3Z6jxDXg",
  "key9": "M8kcyPDL6rD8o1UEsfoYsy28ySD1ck2gY4SwBhP1HREMhqjBcwBRGFxjjjo8fhCrjbLSjMuFghdB6NfYhLAkSKp",
  "key10": "4o8K7ih5dJEArusKMXHUGrHpxFg8tfx7BhPTtJc5BFBUh5WN6kobGmVgg4xvJbYyHpBDyL25HrcAic4gfcf8R3Nc",
  "key11": "5igK4HkiDvif8rPmke5LQMFBM3Zq61Xfm6S9e8PgY5NeJqZSck4sdZ1JNarHrN46YXUk8LLMKTuX6jPjC4cepQ8h",
  "key12": "3YPrqVsEtDqgTKS6MFibouXmab6PQWm36Si5R9kQ3ZMEkZ2ULxBKbrv1XeZBnW2TWE2BLkFMsSy3CoPuXTYBUCj4",
  "key13": "4VyvKG9N3yomN5EaXo1KoNK8S6p6ZRMpB5Mp8po1W3hxJYerZNpwLoYPtTQaHYJ7xd668J3mCUnh5Nf9UtkjN5jS",
  "key14": "5NZLZt7bQnpNoRUWkYFf5GF4Ne41sXrRF8KWqbkhqo1UiXGtw4pFiN1Dn7ggko89VrrGZEmkCBeW7PD6pFP5eNBt",
  "key15": "2VZBWSVCt5ioGvwTczYXMHY7tnzSgjyicHxjLDh2UAYcCQUC5ae8mGqMBfJJgDHeuH4Ddm2xaGTPhk7TwwhuXRr8",
  "key16": "3SSkd88PiZgg7Bwpjz6rYmWgWiSGce3cMvG7UZVgAT4huisbrCVwRea5zEGfjK3arVUszjpux8pkHKMw66YHUgT",
  "key17": "5PFNZbhti4vkkTPdrjWXmZ4ZKeXgKbDSdWGuhpsCgxnzNoydcRuh1AvpMXkMys74Kr3YzifUsXVCTMdfGdEUTTSR",
  "key18": "5h5GU9AxCaGS4wyF9TjKcX2dp7v7gN4xvHkWqzPnehVfF3og6JGM3CS6hR7QHqLLDDKeXqdfKebh4DPLZUBBD9Ns",
  "key19": "5jJk4P2prPVG4HTqu8tetfhcTvGSoxSvBtiUcrCxMcqn9DaSG2Kdb3eGxjSn3V1DxumUR44gDvxGLY1rsUqjGSdF",
  "key20": "3ERDGy8hQpE6wzfWq4iWat5EXCVJ6s3MH5Qn7snaMwNuf8SVi7GhKb4j4UgbcJp75f2z2cN8Um3cLsLG4TxCFZhM",
  "key21": "419MdxoNyqMogeXkgdaqnDsTHeUFbRcEwodVCY956WPcHwMgyBFzMN3KJAAcFB17R91RVbWSsx7NbhjSED13aGDo",
  "key22": "BzVvDcGo578AYWUVreTrQcLQ7oEWStnQu6Q6siZipcNwTYHgRwx19khxVpvDhD9tfzRwSgDALWzAnuNLG9QPLnF",
  "key23": "4LvCAhWw8XMxSuz9JcrNbSptNffwxTkWiVzycJnQTQ3CbVbR5HoRHYdpV9oBG3F4YCZEWSK9Hp87UAcPN5B9An8Y",
  "key24": "4i6PPyBc9iiBmfPS61yQyeuAmJ8BTJq5mTU4LPzzt461MGcBTAtxmRsXkeAAN6tsk1ja8AabczB3siWTgi3ptr28",
  "key25": "43z9u5QDmVVctcTt924Gimgbtukw6tZbq49XxQ9aDTeCVxxvuLSzkbSouXyF1UMiaDUEiczy3jy5wJxE93Svfk5",
  "key26": "3SqpFQUC6XJrRgLmfvgWfgsRaoNCji4AQRoY4XWves8sK7i1Zsv3nB7ViKTpjzoHkvX2WYNJj1UFaNpQiFix8Cc4",
  "key27": "3JbF7hKgbuQ25E87e4xFjLhmv912ixushBxfA8TaAYD2xAMYicukP5eLZZnawLpKB7tmkNm84pqauRAysszs9sYX",
  "key28": "3bSe821AJdSfthxY4XGU8dKLm76WQC94ZF3zpM1n39F7PuMRnEZxH5VELRt6rF6eJZxVZeeqdmSUbH6KMhF82irc",
  "key29": "2g9frTeK4LJUtv4JK8rtFmy34oqpNFgq9UWLS3oV4pTw6taj58FX5McYfMep8RRb1LrgoyC7TtzhBFdbsyDrfUuU"
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
