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
    "5hzEviKJZLZLbuGtUdTFkCN8NsR7uTuuB514VJVU9VHxS9pzsVJiSZ1dq3orMWbS9uqADJA7ndt1quFyNJ6g6G5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "566HMhooKQZwDQxtjVJGvtQJrXLV3iVF2vKvGYtnWzAxJzXCatfL88Xg3gi3dgaAhEFHzPXHQ9wmJBRZk5FeT55e",
  "key1": "EAeYm3mWMtLnrE7aq9s7i4dRuq3LHCoqq5XsSt8g1FHGTGsHXbfbqUHHv4KoetQtHhepHSBnGPzFvoTgAHqExFB",
  "key2": "4wGnL8GN5qXp86vW3tyM8EDW1gyurgdK2retm8atuuhJzfC6opDymQmknKS2J2r4PuZoP4TPf3a6afakV6gzZkae",
  "key3": "3H2szwGxJ9fLSGa3crWKPvzdHNxq7jpmQHHAzjhco9E6mkEC2JcrcEUL2GnvyPqVGxcKkBfhNPW8r8cBLzCh86sv",
  "key4": "2gBcBvcE3z8SRUnfy2QXUwLrxbmaQkXSteAyYPtkL22SGG3praGHKo33abpuw6jPbc354uy3sMgLHSNYXBzs1N8F",
  "key5": "4p5yPMLTCNEMUXy26j4aDCmGUbtHy1PQGptW73ax64QJpNW9Mwnyw5poe5UrFuNj8rWQmU5M6uoXWWX5THmyLAvL",
  "key6": "41tpLJVVNqoNLM2zj2tzf5oM19r3vm3w5Ds3Ct4Dftu6NL48gjnkSPENYzpq9R9XSde2EEivbEb3TXVnDQQ6qSVu",
  "key7": "2fFrGqrwXWV2gXdfyRg7MKTSVTsxMbjZmUDQpt8zWoZe2Kt5b3D2bMHRhk4UzJjAGKKyScji8pFzhrpAGD2j5ccJ",
  "key8": "3uZyNAvMGbuQF7zKkUxyTQ7YJgFwWz7F3hS3LrKCxd8KLoQWJKeLtttJJ5pJj38pHUmULnbe4LGoRsZcyoo9bVFr",
  "key9": "5h2336C9LBF9EffCLNMJxhWozVFHtnaBENsULTpVmVA6LJPBNyyd25Q2GfmBCqQUwB1SCTKVZyGjpxYsnpSCca4y",
  "key10": "66gawrSXqgvbC16gNmEVd56ma93y3V7jvxZX4Sm1qhavexkgdCUDfDxAoQNAhCMuuZDPQ2G7YPnRsUtsv2wVko3Y",
  "key11": "5a3Ja44jqdwR9TRZtxRWWNddrCyJqZLqX4XeT6jKtPDabkJSkzVufym3pX77v91QQFPt2jyjqLTcB66tcF6EBm7i",
  "key12": "h5GoQmWaG1VxquKdqjNbRpahn7rAJaFrkVqiQJ7K4P3j78ZLhdcJDgpycrDhQM2FyPsxqFetGSP9qtGY4i1W7KN",
  "key13": "5JFbUmxoXk9XEQ6d8wd7H4KmVhtvzYuHYqbmTRqVK91tChjSKQV2aimFDKbKa3tHDRSRBHvZ753Lum9CeUrTS4YZ",
  "key14": "36jzfiDLfb4fQdt6GUZUPpDL9yaLX8tFrENNjPSVEDRxPHwuSnAZAcxDu3zZnJ2b5ra21mGdUtmdn5Jdd95u52kf",
  "key15": "4Fp8PwW1TDJ5tzEs4C5pUc2FSKWPFAFt7goMbLAqjhEpDT8EqPgH972SrULjVh5u14YV28o2qZE7ShVvQn4SJdNH",
  "key16": "FYZuxDmL89mMpeAMtiQXsKtbDaL1tvpuEy8oiNH3PWW7xd8ia5ZFhJBgeCmiyxn9BtECHagGCRKjRqbdfPDKBzL",
  "key17": "pV94Kiv3NtV8WJ1mUkQswGxKUS833UCocNS6oYN9jY54ttMAep8dJ2YzTgsvEphS5K7SYAcjKgxb9vKMUWRRwo1",
  "key18": "4fY59cPhuSyfVHFX4rsP3CnvLrFPNtPcpcKLJVBNRvqEyCeknVRX2Hpcm5npqYFbcH2HwF95PUoJJcZAatKwG5vd",
  "key19": "JPaeXNKPck5eszgKqXnaXZ47tdzQLazee2w6sk5yMR1XutJ6vniKxBjEVC7StwNwKAh3kqPBFP5GoP9R5zXpWu1",
  "key20": "2LH4hewkKitA4B3hK1vW7o1A6HwLyvBDGSBdiNaWhyQeKf1V7CNbFuJV72xaxaeCdEFQJ3aaE4ayQwhASLUCU3sX",
  "key21": "55u9u5KZBtsZkK93LWKYB49pXdDoPmdv5KCmCbJACKCAnCn37FNKX8Qu3KHg1CWmDb5S7vXkW7o8dfuYCQgcX7sm",
  "key22": "bNke1LAhFWxsk44YcC3krRw4ieg5NzJFN6UrCVbXQbfBxTtJnkaQEx4VCc4GqfKckyNAjooGeQVubR9jVs7ZMem",
  "key23": "3J54Co2NHVEMCRbg3J1xBW1UkbaKMdR5CJtpT1wULyGEott92vbuukzx6QYF62DcmLBCp9pRthp4Cu9QnH7hwaNn",
  "key24": "64QSNYk3BzF9LqnRTjuQeD5fgfxPdvZpuwrztZ76nN9RSykdLLijHqArJ1iWwQRQnahRbN492yKCN3M2gLdhPDBj",
  "key25": "58eRx3KakrFqRR9TsPqxnQyQqTuYMvLpgbBDB9fhsz9NpEREqwaCjQETXtjz7jeMXASbUodpg2ytcfPeosvWmJjx",
  "key26": "3AYih9YenweMog1KiH4YsFz2WAgp5e8KcXzdHykQUdnxoNLbqR8T3AZjExESxEMupkqoePJd7A5u1Wk7FCRPKkhu",
  "key27": "5PXmwopYbNxeKdoBrXMHAcJLQSEumHr986VCqJveVswv3Bngf23BXtGxeXn76thUh88g4hQQtHURKAG84T1J5w2L",
  "key28": "A2jtEqKqkp4GL5xZAyg2ddYKcZHUE6jaYX9EmBK34iWhyiW9omy2XYfQMrAwRfoifbzxZKS92f689bSFrrDPmRi",
  "key29": "46zqx9TyKyavenQ7rTA32iSTv1wHKH3cE9K4fTYfohChP7rbbKNecyyhgShjJx5zgZSBS6B1D5s7cnryJSJ8wqZQ",
  "key30": "3CzMcGwFyxLFDXUWbTsfd25qqcBkENDwKfZksjnRqBJUVP8fp6ciFNGpuPxSpZJdgEmAgKhZzXZqKPuPL5riYcSy",
  "key31": "GVzmFaX75duukNYYGCu9GF9xkX9ykTFqHoUcyZfZdXM2SauQq7k3PhNYan8pWrHvnG8nQP6DPkwuEMB4eSWpyr7",
  "key32": "4vkR41jq2e8ajiUicafE4J4JkLhjnY7wYf8b7B272v6o5Vh8vnjTgxLB8iQK5oxotQih6QtoDrkTBG1RnyXcR8Qc",
  "key33": "5zK9mWAKaixzEqLwSjpx7H4CLp64YfakMJ2V1WSsmdeQ4mcSg6WyUCyDToHfs81ep4FdzHN3BYUL9zjPm6TPbYWT",
  "key34": "3rfNkrHhvtwNCBs6QHte1y4gpMcaG9sh53ZJnPF3MHUdQwWEzWdBn1aAYw5TWJU4qMVzDKWPQVZsznYMaFyFs27B",
  "key35": "6wQf4nTrSxFfz5qZsSXBfbSprFYDqYSLzqhRPCZcyjAbDQCvv4EScHjQBAYNhnoVnoQqJ7VzJ1ydmV29kypMNqV",
  "key36": "oyjPaFNGZGj9zqS8W4633Y7W7GCL6tyRymo3Ci87ommEVes9r41vsPtVG9YgSymARkBuZk4G7KKufQaHG34LQZH",
  "key37": "5DNmUtCQNFx9BjKYpZ5JcxYTnSq1niM4Q3q93TRqjQ8TkLdqT41DjUZx3xn41kvzqqXQ8ZKnXe8oVtyraXJJxZDC",
  "key38": "giBxzVPooPKB4cAk8qYZd4e3jx7faPHatGkYS7ocNRHkKG3gMNjZ1RpNxY2jvgrfLt2ctxrsotc6P7bPerwjvpY",
  "key39": "5TTsESYbgpEm76Z9QemhN7mDiqVhgoS9LptosqxjPd57Fa7TQA5bGMxfbddJf4HwbVDcRHRXPwXnXsRC39rCTq3c",
  "key40": "5LW38ftRp5rZazKu1YYJaainFEf9eP37T3mvFnyxDoMC99DRHw8b7CiCPydsc51SKykrKJGMwkdjaYT8z1NUD74v",
  "key41": "4KCbmQyaoVydMmTZFDZAHi4xcqmNQpfDpAPwKmKQaeKm6E6zKePKX6hxu112vrgvWapnAFJFscbvatTRJs1MCxay",
  "key42": "4hJZZAVbsCbuJMWfb4NuLNXD77zA7r8WCueyaHedatFxoyhJH3zJh2QxJP7bBVYcVf73jqW6gYm2fefEKwhmdfPD"
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
