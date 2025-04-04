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
    "4QfySd6c7AYBvAmGC6VM1jGUHrKFfF6akXZL47P6pCDmCpVhcuftKY5Qy185jzhRxKix6ibReFwixgAmJaLz7Z3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "esG8wqcjTw22Mj8B7ovxNPkMPrCbQN16hUdJKuB4baK4TCCy5xQZ5ngditvNQp4iqPJf7Veaf7H9obg4QznPoAX",
  "key1": "5GB2uE8LCBnMSkfQ2DNfT82psUX6LveZ9WkfTK22tmBArngaDE1V5wouoBKF9gPVofv8zdghyA62B4zznu22cKTc",
  "key2": "4kkEsCoG1rZ7HH4R8WLL3uabYuWTyjFu5jA2pxNPGoMxiaC9e5Kg9uv6b8c1Z5ZMDBtaZbEdECKp8gFaWEJnadTE",
  "key3": "66PHzysyK2WgGvjnCJBMv7EsGRGjmCnL28Yth79P3fbjg6QoY7N1zGXnb9NdZpZf73ByjKsdnnrzZpNG1xQgmu21",
  "key4": "NxmqSLgQJ38FsTmwPMfMjKfqQqBkGNWqqba6QAZnjqUssr1owF17BemwFr2LUCBa7kgCNHxqeYUQaJcAoTrBkiv",
  "key5": "4nr6aXCrLBkfUT72cQ1Gy2aijduBgm93CHzy7PqqtnjXdKYJuVCQHziPpFnDLphPMCQrWcez7sYc9JvyFKdBSWGS",
  "key6": "44yLEuGGDurRYUdPQ9VYii49LJvXCQyyHfaBsp8asfuVtXq46s2YmUAPMM3stNofnqnN9bL1DDDsscFTB5cEQ76m",
  "key7": "4ApCwcKoKyJnUXD53nqQ31pdHBYwePK6ZSd4mQPMpkcyxSyczj9tmsxNMumMpW6hPWxHafPwcUWtpVQDojpkLyBz",
  "key8": "2pcJHKXXdRLRP7uPRoxux9hQQbWfPYrqGPdMm7hsua1NmYTdNT9v6MBrxxAx5dnow89EbQZTMfVESuQxjUZzkCvp",
  "key9": "4N7rgpcYj7vBJgV958KeQjXwJtHFTij3JxhiqzfqKVRnDxnJk3SWckdwpQKLZUubDAk8sMnkgfZ71kzC9wpcrzTm",
  "key10": "3QPaHrW1PuWKjpciddTmDsxzmojg5wPPLi1UbRbegPLZWgKhQaUqkww39QFou3LJRstz6EGT53GGTtHjGvsnkpsD",
  "key11": "2DyhB4srKSwCk1qK2Y7CTtJinuLNwQJr38coS713sWqjN7ftpvwppTpGE3t8wHwDfoJVcmBXJRbYtoPNPj8XmyAU",
  "key12": "364z3JydjcEs4jNMJLvJVGfhQYAYCab8Zie3gCgp33yg18hmBatvJU98kCarKrVEkBSKSRhPhx1ekt65wYqNj8gu",
  "key13": "2E6oytGpFnzezk9xD8qE25FZ2m12HiDQRqTv55Ex2rH2LFfHWfA8XDuo9VYdoRftt2vtmDdc2KMmXy8taAbuZSFx",
  "key14": "5ZC2Y4e8fNSXPUH6ksmXF7Y2rSq3nDLe3MkJsKU5MYyS9LyYRUNs6U2aQQXCgRmsJFruP3obwbWaApqRxDKu2T9F",
  "key15": "koASJyogexKDpJqR3rzk7uhtCrshGkemB4W3mM6yFS16pxikyTVQjd1xiT5rB5L1teZBuysVGc4FM2226tYCApy",
  "key16": "3wZEjsnMoYWNDLVoB579TJWAX6V4aKixFFw7u46JcFnuada2r4mza6grh7W6z7FMCdqYpmwLjFU8GEDpcdMfogqn",
  "key17": "1ukbwaJifRETEcxewMUziTbutQFjFu69ck7WRw8p1N4M4yHTrAaK5XmVmNE83kCswdNFYZBhEJG5Fu2cBHyTNb2",
  "key18": "3SVTKZUZW8UJbu1crYKeVBA4B2fGyU26HrxvxYgCUy7sc8QvVydYUjZYsvFLVJmvAweY68LJz4jxpWfVbmAvG6ko",
  "key19": "4G9qGKeWQvPytDkHSfCoJNpxEW75k3nkz12NagjCF71pvvxq96QbkWq5MwdZKsnzz6Hwrsz6uDthTo51eBuNLDEu",
  "key20": "2UJMQEWRp6moAXJiS8CMHjgmPPNGV9hL9GU5ip1CBK7h78fc4eqwpg1HSBSoGZy1yBQwqUtv3XaDCFF1QB42vZBG",
  "key21": "RveNkj8o2MXyK342vEXETpCG3pmkUi3MJdqfskMGHkwPNSTgrBTf271LUNNag9YnWqKfhSq3Yo3ESxd1zpP6oaN",
  "key22": "4gYBz36gPEiSwCG4vFFLrYt67VNZUkjUnsztYZbKqnuJ9WtwJ5VCwNGXe49wYifmWmnDZYTNVLe7iqrVibFdy6nu",
  "key23": "2ipHjmesXrxd7HrnPjKJPBJLo1iWyLHGkf1zB4HEwdoPhNGNtEfV2wYVJ6vd1rjwp7sHgm2G317qiRzWZKqmfQTs",
  "key24": "5UkGVB4XywxGsZs8pASggkz6WWqAm9xiFDdBTFo8gd7oS7RuhoV5QFHmhBa3n2e8TLxgLsqNyB5ApxxVsF8RGmxC",
  "key25": "2jb1rJwDCW2iZHqpAVXPLzPH5rxofrDfAahhpHh9hcHwTziNGHw9bEwYwiWfdXakSFKXCBeiXpnqpn5fcgsbBJ7d",
  "key26": "55fFciNE5asaDTQ4XSuk23kHmcZEREwjqBpWWb6GmvTrcziPk3xvRG43ms2wMR5uuiQTAv5zvAE2J2QVvdKKTaU",
  "key27": "4Hq8DmUQjLYcQT9ecRXGbtAivK6KBnrjvMLebncNTwhX2Ctg6jeoWRnq6GfEki78pDXULjcy47vZWH2TitkLddWk",
  "key28": "4zTFtfXpriYcaVFhBmRMk9i8t2uvbqcbf2qyuCaTfM25MHy3ERM3EHnXXx9hpyWoio3V1BDWfsMxejizFn38Bkfg",
  "key29": "52FmDjj3Y2Ax9YnMrbPSk9RJ88Sh31WyDggVHqxr2n6W2ih5Cd6HX2AjeeiMZ9HZ3U3SMqv8pTCFs1GDHDTz9cuc",
  "key30": "5mChbt2VoUu5EhJZnjpW5jDZWMrmPjdZLA6ZUnh2EvBevwcjMq9N7oK4W3uF8jSQ6knsS5W3qTRZ9VQvdWJwQKCU",
  "key31": "4HHtRLHkgs6HZnxqg4uZ1JFAESYankmYQrQWmnekYPmX6gKMcJUgQtFW2Nsg64ugAUCaxEcvm4huHDw3gUAqt1us",
  "key32": "59wcjd1uRwemXiC2ExTWmQVC8rczp3wFD6pMBFrEEc47o7av2oEPQJmiq8cbkC7S56De1MYk8ENZXZuHiPUboZkn",
  "key33": "2kAeZgvSQLqLHhxW8TNrzxyjkkCQ8rbjt429qXjkkbpqXVYVWmrPVHYYDVcziNufggGrHWDecuzqor5bYv68Y1Uk",
  "key34": "67CU8CQC9oMzuXHor4M2CaMbXAUTJnb6TuNB22QVZFJFqDgfr2vUVHVSgj26EJkmKpUi2xJErduLm7FyDb6aKeZb",
  "key35": "3qXuUMoiWE2jWWRUCzLx3UdhHvSeNqqeAXboUGbbsUFmimS2CeHq18o8jVgVoCEiNrWh8QQRbCbfiRhxEUxfm4v8",
  "key36": "5E6FvJ2rjW4owA4Z1KAd7WEmgpftMXamvyvSPxBSZFhoNdhebHSmij611iR4fyJgqq3nFQ4YJ6FpY5i8My8kvWsg"
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
