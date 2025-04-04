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
    "4CTzJWsj6ecTZ1ogMuAnrYZ8XP47wnSZ7jUjzXkFwTfFrhzSMXhFWoCAVkuXmAWZ5bsZqz9WAa4VHtWy4PpJLCvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hxmox6NwFQRuZq7PGw4YcF9G6NYTjLdNV5Sc9KqtsbBfuFp7k7eNq4KnEkHm5adhXQ6sPT1tMUMHFhr99FEBrq1",
  "key1": "4Dt6MDmMigQrFcPeRjeuF8vUqBAHxrgjkRBU6s92ooYEUDRH9kVwAYGhosxtwtnEAFcP9RGcKwuEs7M9EVmuFxZ7",
  "key2": "3peVo7bD47XSPZkMUJqSnmSRgymzskG77b75Tzzw5PpHb56KLhonuRnqFu3TJXpSd7wSfjh85EiYKYERGRspySY3",
  "key3": "47QqYySrJWQjnJaWnuaRscYqDsdmejUKUwf85FLg949iiC7rwtJhDWrMY4XufY2qQREbMfXe9iUR7PYQ58RAe1jL",
  "key4": "28NnoqeUEVSnBjeiFjRZbN5jfbYhrK1XaPPE3hEtjezWVrwV9XFfQU4bDJM5RK3q9ngtQot2G7ixvAteooeSW4YL",
  "key5": "397XvrYcfW8HEdbPh5iGn3L1q2ieNUebmrCePWchrqg4Yt1RtMU3ynQ3mYEvwgMbQDUhoB7fbW6xBySxMTP6iH9c",
  "key6": "2nEMCqBL31Kswb5TxA2wjUr3VcWS3uv83rrAeFK4NwX1tbCxj6KoESDwuQAj5xth64r7tbp7x2NmnYBpFiHENQRq",
  "key7": "4vjK4SthK37Uc8Gkn3r9KcVLR353JcCMgZcMdiodvVS3pR3rKN5aYLCfADptK4EY1HHkiYcvLZMBgtpPuN4xcJND",
  "key8": "2KFTMdsn1eSsquE2A5rymwmceEkZTe6cY9XntoLSWdEsExrPF1RhmkcqDjn5GuehT9QuZXH1MFBmsPsmqpeNHeA",
  "key9": "3mRTpGDZnFTrjeov8wu2g6RTgsERoa3MwPCA78Z5SpMmxomg9HCFAuCxMdEs18DfcUqPq8eeQiM1BPJryrZv7t9w",
  "key10": "2ZnonGEDLvUBCqNobdmsPs1XKqfNPzFq8yosW5AWsRVdAjMApFoE9P5otbSXSekhL8Hqet4fwp395KtdEviCbLzz",
  "key11": "3Ftmnj57fc5iSubWMAPv4wcxR6s1i9cgW3jLDHeW81yPxjKxDcKA9SeKVWqzMrjUupQRRppUytL9NhKiP3wt5cmn",
  "key12": "xY9kdVMYGXeWvrzPsQzHQhDiGpfF86p2pMUxyzBVj47hiKxawJtwcHX67DrYys7NnJzoQYGvtSbxAWDbUJTE7u5",
  "key13": "5HFoNLuyssq6JT8UT4juQJLBzB9Drgw8XBoLj2QpQKU9ec6XzXU6Si23r2fRSafBM6VYrxnNtKVycTY3K8sXhWPP",
  "key14": "G1AUdBvt15EBnjQp1K9zSDVAoJFZTYddQdJFnZwVPJcpCxTarhG2P5dgPcsNCjbC5S2BHz3XRA14Bc2ZEaNQBH9",
  "key15": "3ZggSvidSxTiQbGiRRBYHvyL6eXoutYDA2f1P1fjr7zBHhDoYdEnuE5MYkNhvN5M3WMmpW8YFLLiNZosRAF52SV9",
  "key16": "5PYATZ5Kpj68aRKrd7dLWoaBJyZ2ZrauHYVWmYxc4ZUBeMNwWt46hwd31D4XQ9AenuXSrhFcJxm31pB9vqKEfxwT",
  "key17": "2VyEF86LeRJSarB7ALs3zNSbPZ96UcdaaJqqVpuD6Q4vFjJ68GkobcSZtTRtpsG1eXiy8JNnzmBzG1YVg9CUsoLZ",
  "key18": "4hGhpzMRmjkD8Qr7Zx63PiYbvJt78TPxEXdskT9XhDLnPWd7hEznBYRhKaW1kVUVpcCB1upfV538KW2iobe9Tkx3",
  "key19": "5sP5MZHLtX53AzEwgvJs8UDcNjsAX1QAzbHhNwyqCJuLaGhXunAR6KmZ3qpfz9L4AvoNHBvz7aeUc8f33Fojau84",
  "key20": "4o4oGUxQy8aqPZfAaPk5N2x4CGM45QJVu6qp6aWhMTAW4NwwEokEJyJXLnyZd11wjxj3t122dcjh7ZshcfoRwpKk",
  "key21": "21WN8utvATVeM8xW6214FTQQLqgjUqd8LA8LaSH7Hbj3d5FFVSn6yfLFEnRg9rqq31F3nY1d7mR7XWmWoZgy3XZv",
  "key22": "2NkAniPDXA71Af2V59URHULf9xCyYkWaVbcuEJriSwB1XkuksKRE5px3qph2q3xw5sSwBfVbHawtMmL9WDbyukY5",
  "key23": "Cqp21qUR3A4F7GH7VsoBtmfbKp4dPZwPRUZzQkafgc2D5nKnvMAB1QzR8PLifKViw7KbYqRXwm85f5NESUsthCM",
  "key24": "2kaStrQSsY23dRDnfMWc43ruVWQYFA42WwhgxLr5r37gx9C1cNcAmTByi4dWwbtqDLDtvsoRPj9PioeMWydFD7aQ",
  "key25": "5gGXmWXAv5RC8Wwwbpix1R7zYQ95EeFcnDuzhfLBXGoLSPDW2QxmXxmkGZ6q6ydNff7s6zsgh96SYo63LdHpVX7k",
  "key26": "gWVbfQP96pzy4t363MdrJ2rMLow2VqH5t8BzeCCghCfcYPGcjNXbnEj2ZsUvRbEY231yM43RZr7WEjyiS1TY24j",
  "key27": "jPRQKC4pn4LD5NEW6hzCT89TF1xVYFGtksXXNhyWVsNcSez4GBpdHw7jAXyeUREkHsErppyYHaKuAW1FeY5HqQh",
  "key28": "5ZgPjQXmH5hoRBF32zbJwEsviGrbKf2reCz3ntxczjNTMAPs5jCxa1WuXgdj34n388DJJWJC52qZtZ1BpuPztvXB",
  "key29": "5SVF7H35zHKb9ehPaXkracPsbNdA9fQ2CUxpFLF6kCzvrbfG1Us22nc44FZjUUAtmLHeWbHRLVAVbdV8ZkZi1c2Y",
  "key30": "W6yk7EL7epD43fyh3aa9CwXxpw5mxwgAc22PDbjjQQPsgGSMcEBASGk7zPxjUHB4SzhYvqRJw4gS6RDoowZNiQa",
  "key31": "5NS5Lj6LgsNn1UfcAE3ripmzs4wBv9GugrcKXPwGUemwDMK8gavbZPVAVNcau9k7LoeDkuu9Sa8jNrWMtM5tuMJE",
  "key32": "57nqNf7AaK99sk3Qt6fWrVHkWqdfKrcz4qExgsSBWuahnufXtFsUtQdXfWnK5Myw9BUJFXPPKL9i1mYJPckcuSuQ",
  "key33": "51hJhvExmiMRtaEsXT395pmVQExzpXBJpTKn4oRS96YnM7rro1KUxMqm22naJg54hJYjxMw1U38CuxMZFGgjZa6m",
  "key34": "TzfTsmMj3WQt8B8D1FSmWV9b135dfKNsWtYU6pkELX49s1pqsn2r8qLwZAmkJnetN7sxA68Bo2i4N3UDoh8uDQw",
  "key35": "3uRvXrDy2EFuMatouzvtNZcN2kkifwDMusRyds1PSmPvjdTyUR91kETs8Lh7gmc2G8WFzyXQLnVWWt6g9whHhfK7",
  "key36": "3s5v8ZTjB4AZRWcvuU9LkrrFRwUjRbKkDZNTpv9fu1DChayFdv6hvdZtd5Q4L2oHTaZjJgVLrRrt4dhiDEQcgBAK",
  "key37": "21r2ByhiropLLYtx48Vaz2ja1VYJATDNsDRmQ71L4nd8D2ka1cEukMQ3QQCDCmgefAiswjigmwbMdpWyJaFTA6ZP",
  "key38": "2J19E2Rc2o4E7GbCowRu2LYvMaJTMmU1NsHzeJ8En42P5zniFyBzzcRErmXX3w7zZ9veD4WD1gNogpuMWKBJDBsm",
  "key39": "3B2YqNgR8dF7s3ykSJVCrVBfZQPNEwtBbYxK2hn4HcBmLXJDsKFDQvh52wQ1YvnHW3d6xLHK15gu6prcbqV1rsjF",
  "key40": "41z4kKWRadmNZ9Bja3NpyttTFohKEogVVy2wuuqCLFEWFMtEhB68hBzAFPkWu8BR7nfBj22kuv7PapXs5VEvf1Kv",
  "key41": "JHmWNudgAf1qQCqjNgVjvG8bgawEjtz39R6RXBtD5RTo7eTQsHrdYKx8hLm4vRWc3ewJnB2YSJU5xZ1WMAp1wjD",
  "key42": "XXs8innQLe7Tt5T7DL1kUBjUr35HHVNHKRp9Dnd6zWUJX3hrpQwowb3q1hJur9TNSLeisEJmmkpkZhZVPTJexWo"
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
