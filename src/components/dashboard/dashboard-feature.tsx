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
    "3nxhGdDkpHGqy6XYYJch5Pcyrdf1BUjuotgTRJMxfA4B4pboGSR2aug7Lxwy1MK7Pnhkqq5tSyw958XqphLeNbvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwQyk39C1STogM5tzim25tWkd2JBNmenGan3sk25stuj2rcJN17HE2drB8v2VHmgKeerD9eRDFHKcWTfZYkKzWU",
  "key1": "4hNaKV9G7TEAhYgNwQFBUdzJyW4EkhrAs8Lb8Pv632P2iLNGB4qiHqtRygrXADaf85CkR248Z82VzB9m1s2Tfs1D",
  "key2": "nbPy9gEoJzyKYTFw2ajLqiSUxPDDHRU78oLBW2wwTkXbSWj9zTn6cwRrZ2gERyV1x47SBCvEamzrmrTaQWfizZ8",
  "key3": "ZjAfHjT4eiRZxJQpLSigpLwTnSvQMTYFakJuJEneNkCRS9JDjTyY1pg2hvTFVMYQFoZbdCPRmsykccMjsrymz5L",
  "key4": "5bEztY1MfztSPh2uijX6SMuPYqixNJ9FzRopp8CYVnHcEP11yNdKfL1KAPLma542NhW1TrViRXna72AvYq8RURSx",
  "key5": "Pi7MtkGgHVfHSGnxc4V19RNYc5Wk223gEq8mEKEs3t8hXRRzLrLtk2NK5v71oHU9dFuCGjR8EAEr93cDbBNbZBe",
  "key6": "3Af4SCwDYtdV3gbhfGhyNgzyemXKrhX6JxbiMGGGHXwdEqygV7UUh3CP6oCp7ZWiRZEsnPYsnRFpD2j9xkRFTV6E",
  "key7": "5EYJ78fwQdspFDAzbqZBWtmYmVNiDN8nwH8rzhj6pwCA7YANE3NXW5JkCKSsVv4uutE7ZMEbG1jYGefhGQqwEZMS",
  "key8": "Gn5Efyk5v8zWUrUUbPx6MeeyAr8e5u6Z5FJFViV35Zj2GLC8ZSfPRDWtaKkQzAjw6maxrrtXFCW158Fsh59dcfX",
  "key9": "5XFsguVGoAbK16fmUEjS1SXvVL6JsEyXi94Nk2ntfYimTFZmfvr3udqQMC2uz4qVW1Z5d5ntHd9tgzmtyVdr8RAA",
  "key10": "64y8XaEhjkpCMJ9KPpM2J3ztJ3P45SDtN6ADNqK2s4DznPQ1Y1kPNaxkayLz1R3sSr6MQZYCdWSwGCFvbJzZCQ9T",
  "key11": "2XoKds1rMjyg5DzK99DStM7DbNaiJxqfcqydByDuuEUsmeQu4cx2djgoJk8yvv8AL8Xosg8EwNL5ZDp98p9b4S4T",
  "key12": "3kswYxcZQyoBz1ngz9JedJCWr9xYs1HpqJ56tE4BAJ7Z6MPsPpr38Quskz9xKPmw6YqZFBmYvJpntnuLGfjme2Xh",
  "key13": "4aVDNqrdRHgUWtD8Aw6YgYW6yEjGwKa9h6rhwRY6tTQpneAZ1MCKokme8tChYV1PzCyjG1VTTjMA15SBEvnAyjzv",
  "key14": "2AQpVQzc8PvQDLzbHm2duhQ7AAyHv92YpKir8ZvJjYzYSirzfEy721nTRrXhmg7MzFdz5XXC3CFJjNWBS4uweF3P",
  "key15": "5jfnZL3EmwKMZb5r4Qxx77JiBfwZPBrdvmRgZiSyUGkXvGbkpyYsdiyWoEszTMUEWRkfizcMRaULWP2ZB7Vnd5wP",
  "key16": "4kcsV7ChmfwCSXXAnNaNSvKva5sTeXrPnJFkxw91LPJmYXUi9Mkh1P2a7FiHShiBj1jouHPoUMCSrJjcbaofqQkM",
  "key17": "4ktzz3TG4caHSRZfX5KKzcbXJV5qpyYbKNzozmGPN2yaM9vQnxmsLrpgqV5wji5aKjyVuZraCLp1njLmRWRrdA9u",
  "key18": "3B5LBniVXksh2nxT5oNfE8YvaQp67GGXxCQTfAKCgmiWWELkh8ygko5YESUHDp133r6bu46nHJ1YcjXHeyhGZCUx",
  "key19": "4MFoU7DwWDw2MzhFhQA2rijnzurqDVcCjYWVfGutqnwayGwCmXVVeereWyEKGTE1JMnCbV4oRNTMcHjpbkA2br8U",
  "key20": "345MthAa1jaFCFremH1ynfFBB6DTiP7CVYn8NtmoninmSUeyoSVK4WkQ1eFwr9PYCT93wNFgX8hMr3ZgEQessoLx",
  "key21": "2Khr76EVmsYXy71Kn4Wuo4GnFv6HriKYozvysttTehK72C7AhMqwuDXyRLWsSkbxW5varCmGWFQposmo3G5mtQ8Y",
  "key22": "3frb1yhV37ZwCyy8RFKaGqMHWvSbjJCrsihcYvyyCnXCkhm6CFqyggv4HhjRTj8TXdMymyaGgYka2ogRneKcCoii",
  "key23": "2M1UDzzBRJsbBLxRnbAUdAbTxyQnsU5nm7zNmEEsFkxF3vwhqxFHLBMhgKsgNGysHLYpnx46LqNuQ1FZ3jpNKAmz",
  "key24": "4DxMZ4yiZq5watTNFa8VyPnSwYfhjfz7YETfSVhYJ8kUbzVdmAuDcn82k8dUA3DHSdbLETNfVLYsbCmerrepHFZf",
  "key25": "4VnssAHbvQyFZxamcKpduT32dLEhT1hTYmW56t66SJvgBNhC1STToTNXWeDsPKWoggo4zrrVsQM4DLGddeppcQAT",
  "key26": "ZcYH7KT95GJUoyasccrpYCv84k7D9i8zqxQBbHiswqRrkf5yhWxzegVn8sPZq3ntASJqzHsQgC2gFve7PTYUaLX",
  "key27": "4HbhrZs7v1BAX6Xhh3HMs3GoRoEMG43KVxAZLvaddWEoNUHnvS6uPRnXtaqDSVQSSEfusTc8ZnMmSeiJeDk8WjLi",
  "key28": "5MVL7SDpxRTiTsL2rmujvT499Swvo93Y4wfLqcYSuno97wEH63HBi5wis7gkHvdgE4ZcJic9GxfQ4WMXJpN5K19q",
  "key29": "2L8p6od4Av9Z7Pbx7X2JJJSMDUmgXQeAG8mTD4YQGMqDPmBnCofut7QxxuGzdz9kRj5ktxu2tRdvXhYsjc6nRnqG",
  "key30": "3VBMgfkiWCwW7GbTnUecH5AZMe1NPwoSKZCiBUrfzNsqAB6NCxcXmTDW2Hce2kxNcmpJrsvUrWsDS5pExxiMoWMB",
  "key31": "67CbWwkZ1r9YTs9MtT2qjx1J7VYY7xAbQA8AGZ19QM4UjgJVkq1hwAvggYZRm8hGAB6VnsdxnzKKJWYfJN6F1Krg",
  "key32": "5ZG5dtygHGtykLmB4uKTeb7rJcuxhrfBmo3qzezce1k1gDJd8R64A4qLyuxpqLcqdaHmmBExwKT6o2o6RTQUE7zd",
  "key33": "5ZaStrGXA7QQCAR44kSL1yoNP9TRL3zZLdLqG6ZVfpq9yXPJ1fQaxwmxtg3SAsTjQbtUE7rCEHvnjgFVrdKnLyKL",
  "key34": "265PVik9h8ALoLP2NbPBWhJ99dq5ZU3Xz3qCBUfdBisBnMqDfGMHKXaWGskhdjqGNurDD9fbN7LjV4k3PYbBVqFd",
  "key35": "2RBdHyRnm8ndhsjuWhSS3WUfj8VtREDNsM8jxfyBpJddG4czPXwuhqtAWWUs4vPDD8DRNCpHW5nLPik63qXCq9h8",
  "key36": "3F9CcD7WGEmCGFpB7gV6d784U874ctfRDNt6qusPJGFzbm5SYARjB6XHciVctavMMDTMTJ8mfoNung4PGLJEYzpE",
  "key37": "5AzPzRdEqJ8DZsHHk8pnetRkX2pzLYd2nv37oRM946tbHiNiTTryqFqfpCkRZ2b4aGLqsSAjU5eedZupDmtDfECU",
  "key38": "2simpLnNSRg1NvNcnen4vZWC8bY7SmahbQHosp8374v3fGM2FN6B6sUaDZj1Jiz96HGKcrzZbDWm7wiUbXZbhZcv",
  "key39": "4HafJDZxtgQ9aCUCjmGNA96kzJ7oHP1hv3emdN3MUGKn2ieBWFMFMsuQZDMk64wfvj7qgK3KTZNrTrCmFKn1QCeE",
  "key40": "1bt4AiKb5JY5w8A5EUPqn3mLAsZW8xP1FbwNW1u7TfmnK5q5hhLMNuKG8v88SruEwq5165WrE4dffBY3NcHhNQ5",
  "key41": "5EtV86KTqe6mtT3wG74bi2YLXBstcub66QCbeVXZfyXB7pkT7bZbNZyeANJtiSJCFe3DqxDv1kKnbUYFSzkP1vwy",
  "key42": "4MG2aiH2t2UrBBZnXcYPpwcGwWrBUWrCv8m4TexhMXKRBMDu8NhE7gJCZ6xhpor3ef9gZU1cLYRhuWC6F1vBPVnW",
  "key43": "58SY2umaLRpPYJZiWs6A56DKBAevibkPygEu7vPjixRoVMbn1NvA8WuQkFCxCSqfxF2TvFRmuYDVUVYdBUKsGKBp"
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
