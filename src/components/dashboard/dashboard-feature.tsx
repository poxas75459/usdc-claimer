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
    "SdSiv19edKzNTwr5UrNEkQv953i39j5Hg4bL6kzJV2CWkrhtVkWkYTuxt5LxZGedaWCug7atELCs4PRrG1JJ9cC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hwWeT3kaAqtQFpWGNMWTDyMaC14tWNBzpY168QViprZtyabDvSfsdjbqCPWkNnxKYYbGZFS9ybfCxYvwT4N1fr5",
  "key1": "22Ag1P8qArTegMBN1HhPi2pjiofAgM8J67FRFdXNeprBBooxHxVFZVUofa8qxBTELWFjz6B6m1FPUWjQtWQXMCtR",
  "key2": "5KszJ4HWDG21FsvQWJLJiXxqV68MR8PdncV82rfbxWbxJ7CLibkX7Jd9sprtFRJBkqi1DV3u1ug1i8y64B2KCh3M",
  "key3": "26Zs19G6W6Yqr5MsSJ2GVr27ca5K8yvL1Cr1u3jDbYRkRo4WcXReCPqBFeSGGqKohPN87sz23t2wg1syDDbeVmoz",
  "key4": "2XVoTqrxFFKfvFSC3HcbfRid6fR4vdNapQfW2ZrhAMqpXHnpMQZ3VSstjNyegJbyv1qTAE1Fopoq2Vazb7wUNapZ",
  "key5": "FTqKvubEBo3sw8vWx1sUQmY9AzbySx2ych2X17erXS6rwDK6eEcTktNs6oQSQLz2z2yMFKvGnpGiQ5WS9qU2iPF",
  "key6": "3SjT58XY6m7Hysx7gzYDR5xnFiPEknZx2JXSPpF3TGfPjghrjV1MHVJSo7cbEFiLzMxuevgMpEnveaLf2h84jPjo",
  "key7": "3E9YcmwVhP66SPeUeb88mqajW5EULw5AVXKzz8P6MjfA1jzt5t1fT73MYmKocZUpL8nD4Sdd1oghiRSQczy1rKos",
  "key8": "Cs1zVQPTYUFsq4Xdt4gksF8CyMUYM7QMETq7Hunk7Yiqww8YDZyFjf9zfYD3LfSMhmtWjmEUQBtGnUPCEnTteeZ",
  "key9": "2GqFqMqs83HwztTXgta9DHPuvXmNfTBv6tTUXoVAp8XTwPWNZQxoki2yigk7YY8Jh7mX13iXEe4dKu5Gq41DxFzZ",
  "key10": "LmVE46id292v8n9GMgmBYGMZM7CQSMHSUjhKEGaCH8sUtqZWU4UQiA72bdLMW3fgRnBFunVvRyfjkaiP9d7JtQn",
  "key11": "UNQMrgciwrbdQmV4K5XzwpcHBvyg7A8dBYBx2dmk9X3bNATGLrbH6sHhjdysQda6kdUVgTNgtMdueb7BF7tY3xM",
  "key12": "2QBk9N8BtguyCJeEDoDszDFF3f2Dp2MmvgKp1EDFarzm5GXUkrKXmfG18cLUQvZQBpaD2EchvyKjuoXUrGrCLc8i",
  "key13": "3swtAGrFkUMn1Df78wmXm6y8N16BrU4c8Ja1NR5CpX2jfCQqAhKGYJoJj7oGSt2gAMTeEDAfQPsZD7eh5kc956Tg",
  "key14": "52uQ44QcrC6zJhYnPBKhVaPNNZHaWQoyRPg1XDzSjebsgGRQWKLC8vmvUdoGmgy7vcUGL5sqSZnW5bRnmvcoSRr5",
  "key15": "3AQntG9uj3YsJzm3LAby3z3nc1KMVHF9RdGcbb13DHVnJKucfXmMPd5WfgYAor3weJYJH9UpKK49ZyY5EYZfR9En",
  "key16": "2A7VyrXGdj9EdcUEe3BHQ4FR4psTZKEBhxit1yhZgmDBgU1zWyq4yHZBTTtgFqSgTFK1AmNDNjoR2CLrEBxMGVfP",
  "key17": "5s54D6e4jayBaZHB79oP1ebXjzNCbtDddBUqsmu6YFRs6NX6hCtvWUBrhFVcQjJB56kh85N5adLzzgQ8N9GDnwQG",
  "key18": "4x9HFVHHDEJCKhGr7Ye1xsMmpzD9KToqoLGNRav5wnguJgBB1Pp7Hs1c6tMFkw1D8E45M7yc8JxikGxq5M5XCtoV",
  "key19": "4QJjbTfMq6eTUYYTb9yzRz81rKFpMRhC2mscH9tBYDZXSMda46ypr5sLXfbUEgzy9AWsPWgPPeBpSSdi92sxCznc",
  "key20": "LsKDPrdwNoUY2tmrXR1vCmnZKCrbey1b4SKyZzcdXtF3ztjAkM54C2tWwhSnPD8xdSckgJBfm6YauNyD5J5KBcm",
  "key21": "2ADc7LJiHWUraPSGzquWerthtQqbDxEBNzK9qbWZqxsAZamWRMezkLQG3zbMN3ww4TpWd8Ux5uY5pSHnfooeK71U",
  "key22": "3NzK7uiuB22VG1LrNj1XrogxX5akzZeCYWJiYRUruhykzZp8LEZEJcnmCydLtGdNHFytFhTxiqpkdZEGKSm7UmbN",
  "key23": "22t1cKHat96DM2Jkm7mJhnbXMvW4LvAhkgLpNNkGK8vEcNjXNfi62NrpgP4MH8cnq2m3AEubyRfBY2in66NpAToQ",
  "key24": "3RQnXnAKFyWvooxBWdGSPiZm4RjRXAXEm7a6uNigN38cQGhMYWYggo9b7qqMBH7pQGUm2EM4KMmYj3BVR3oaAxSw",
  "key25": "4opbPwSApMDQ8h66KUQvKZssRkiLQw8A3Ta73B5dYcGpCgEaGubQ7v7xEuxsr8oF8RgxgMtAXYmxMSFMuZ9Duvrk",
  "key26": "3cwJhEi9TT8vyrjHmTdcKhq61ocoXDpTW4JmKwofAqhm3daWoZHqWtUFLQgY92zsLWLisGQjGBF5zX7282vy4JgE",
  "key27": "3Fg1P7du3H1QNQ18n3foQPBczK2hj2xHrLmGgyTvcbxnn7anyhhxEaxq79c8jw2SDVzBQk99niLC5fP4iw1KtiYE",
  "key28": "3RnDiQJBjr2kD3rKWrGUnu89AAxUJxzMugGNErmMCCbhSKikG7HND1H8XtZhsKj9gkHUPkbL8riLnZ5MMsT9VpNa",
  "key29": "48SKhNB8sK7KzoLRYKsNiBv2SwGNe43naPjxUqTR96mf6RL3XdzqcCiQM5vawEXCNXCVfThFm9jBf7CTDhtV6D5U",
  "key30": "4wj752JhuL56XdXxfeLNuzfDqj1xMKi4mWdsYxp3c4LZKLTixpFQMLz7rX7GS2G3DyEdagBVA9JdU8Q7NrPQWmAu",
  "key31": "59oMBwoqTy9QN5dtnMv9VtPjNiDYhWTU66LYrRFBTQZnyH3pu6qDDsGwQJMQecRN7MLGhrC2Bvmr4Cg6A2PH5haK",
  "key32": "3WVL36UkBo87yTxJfzh6WMsSP4eA45M95GFV8E5BXQnTK1E9vwotQmCKyPqSPLc4BLL8zaj2TmHqcS9N3eT2bCU4",
  "key33": "qCpvEPivMa2LLBe2XXXyEC8wg3dpbDJfPWj386DxmUpAY3FqoeBcYXV8dzxNZVs7STrshtAs1Lcb9dJhsghqdS2",
  "key34": "2qeUA7RFcu2m59iB91pNjzPUqyXJz3WYbammBhZwxUcX3YKZ8wtKnxabDb25Tb8WA4v8oXciTRsAKCnMqZ8SPTR1",
  "key35": "2qvecwic6YMoBqi8neKPPtGFm8bxqPu4n7hU98nzeNixGVqUZFW4ztwAdPCmEnEBxsmsBAq6e7MFUTkpV3y3xkiC",
  "key36": "49ARq3VpRs938FoAcuQdbbMzX7EzZihKj12nw4ajQSGXumtkjC54qc61im1FQ9xYk2e9jUBC79YaFxgNbveHBXqY",
  "key37": "3Jev1rwY5vHw8VzmPRLxf466ZkdiG3CKS6d6QDzJKQCy8LbcLVkp2jADjUiBB8oqCmAVe2wJLLtc5qLzTHjGteG8"
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
