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
    "5iw7QGS2DvuH7hM3gua8UWZeNhY8dfMscYirnaDabwofJPHjAyTesj6fULJDJJp4SAkSfD2iERfgGbxPrQTmSwoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfBGMYf18PC7Kmd7SKxUkDDJcfUJK8rpk1gt8Rst5RsMSs747juKniK5PePFtv7Q1B2fpmJVSgKSVGU3BigHSJr",
  "key1": "4f4vj1YZmB7inHxvxzSBQ3kXiBrZpKxxpxpmARxuMsAKSKxzZUrB1GXU9xJMQwurd1vQivBb1paSPjrwfZgEHyfF",
  "key2": "28ahxRba1jpRrmECvXfJhdDmK4X1PHDphgLSbP5We3GahNnhbbCziwwaY2TNZWphYsBby6Q1au6tZQXdhSnpdiV3",
  "key3": "2YaHjCiNX6f8AXTwRT6qMYvuq9HXnvC1ff9xE7ScFZqx2UPmo8ZM4kFKS1VMW6Ai4PVGp1vceTv2aUSJURxH4ca8",
  "key4": "3rMVuAyVNQGs8zE68hs4Tbeyf79vqRoNV3mCfu3AhRciZaHKWpNoamb2xvmzW3E53VJB58LYGoeBCBBi1m7G46Xa",
  "key5": "26L6SAWzWTHBrtfGiT65aHDJU1yvXFDeJszp1eZxnjGR6yHg9ke3BXRY1SdRyLBX2Lf68krkQjukzKtH6WFEbYE1",
  "key6": "28JiuQJjooLvXc6g3V2xMbpKkeQHvYyHopvuezhYZ69tv84puhJSr1iZqE7PywAMHDPRPhQNF3hjhf34vX3Jv33W",
  "key7": "4f3WzWttaTcVcf2GLqtUq5LUi4fqTpU1EiayRpE4xm14x7FsvcQtC1UZP3WESEoQxHaNgco2HsVYiBzWXkCNpHk8",
  "key8": "22rZDWXXQMG4xgu9KgpMTnN9pRCGujyGHoLi8gQNwFS58NGdrUW3i6FubQCAWsDKr75HGQA8zDs5mCRqzJwchqh2",
  "key9": "5cXXNvNJ6WMJAKZ8GbrLFjL1BZ3U92sPBzpAeoWvzHPwj9xoGTrdGu3Z3dXuM2uAn2xLhTCGV1Xxofw9c5sii5FJ",
  "key10": "2n9RMdDvZuvbh3CHeTd2AWSgb31uDk4AeWgWxhKRYVSnPUdmbiJVgH45mimSEayXzBrbvycoRfVQcwv5xxTRUjJX",
  "key11": "5VsH2bUJHu4F4hgXkEgYhT4aJC9EG61FhLQ5PWycDikLqNmh9YvsreU9hSyZ63vPtW28GiNrqHphtnifZXVuTTk1",
  "key12": "66ZuWGSnXUYtQBKDqyXNkEkXxZ252HXvyUBR1X4GaXu8wkzW7jmBhLWbufxZ9eeiWB7rfSgC2VWMBSoZke8tq43w",
  "key13": "2VPpfAfdHTcCSZo9QFist2aGC8Y9DJfpzyuQKFtw1xcotNvhLV3axJHZC8boqdsUtxNXhHiXKZGxeRD9yMiTaSsH",
  "key14": "5ognvEMFZ3HGSh4bg4uZ8wyc9YnAed5buQ7vNkDkWzG27cf9mEQ1uBSskzWzeCtLhSRGQxuhA5GBD6QRoaftRLUD",
  "key15": "4CqjFapQKtWfGJnF98NfEGRHAoKp3iBY1h4GzMrbpzEb1FFxnvjdxFcn36tAeceg3DuXdgxy6YekkoUBTxt9ebfb",
  "key16": "37CY15LCbsw67T9WZLnov1BPWtXCL5BWbE8NyF1ZKDLNCLJGXEhCR7RSfSdjVtTKsuqECXVWXGh1vfBUut1nKyTW",
  "key17": "gNRufB2DmvraCqZPtyqZdyBTe4j9j9GdicimrbVP6XHQjxu4qc32Auhva5ATvF4jzdyxxhvrRaZQWejK6aEzD2S",
  "key18": "2C7h3pL5A6Zxi7wsG5PZfUrjnj33eAQBrUncAzBtkA3CqiyT5oMLSnGE1k2qKWcQU6wi51ue5vFaTxBgGztNoLST",
  "key19": "5eULuyLavT1dUEQkQRPCYNutdtkiZzXe6x5XCLB7GpGfBzDF6Gp5wf1gd8oQxXrgQtHRs4xjKBooJBLJFy5E74Qz",
  "key20": "5X7azwGmqtDawdoWE5DDBZBup59yqx14KJKHw8nU6QbNSUorAYqHLkeb4KFGXAhCf48PMfT6uxpLCR7FMzGayXrV",
  "key21": "5WJzvpT57XCAnVQYrkzqxPsfBH3Gq3jv363yVt8nEHUFDbXzsMc68htFWgwomV8hsHzGUtZURGcmqXintmCva77m",
  "key22": "2KFW5x4gw9TAtB2gaiLA2E2SkhCK9sZLJYNggErvzvksfgWwM4mUH76ZykTfxryhbZSVtos2p4tknsMn3WKqFb3L",
  "key23": "qyGV4e7sR6opFy6A5hRndNGuacbD7N8u6SJh58tev6cfY3C3vSbKngzUMRNC8Evf2bTLVj7jnbV4hDkXyoYeutU",
  "key24": "2CpWmPqi4waXMCSMNGokdxfSoo3UTUjBnfWsx3DHFhW7tEA3K2Fe7arCZ6jTKjhHHiyBF1KeE6ALWHWYpFmpAmqd",
  "key25": "YMHH4iFAQi6RuMWwDwi5nWCSoEE4nUEsBU3i9UzPLhs5fzBb4fFTc8WCSU2LjMT4QubWn2JCSYHmhqK2jV2dDGf",
  "key26": "2streSmuKr97Um8tCmzPoGg4RRDKF4AsCfr89Xnx5hCvWWctb1ffx3Hx6kVAsYs5cBhJdqRokJ2y9jmFAgrNcxUo",
  "key27": "3Dn1e71XENXAHk5ZsJFQniE9R43BLbFefBYAQjcjTUcXjavft3oJDbtWKHeNgDyY6WUMDcrd18aZMmHN16tgnDB3",
  "key28": "5Ps4UGh3sN1cJXKNTxDbJXYhuQjZqqbJx1YJfBqBmtWv4PtvPKmMkdQY8tzoYzELR5F1AT3f1QJzWZDGesRnFya9",
  "key29": "5EXeqXVxbKgzzQgrikKUuaPsRshKpnnAREnJSUBGkoj2MpPumRRREFSSUSPGreJmaMUxCXVqQeSLCJsw2XaHJXpq",
  "key30": "4X3Kry7mdoBTG9Amkafb3gQkwLBfb7jNB1NWzGHQi2Bh8RLMN4mFJVSbCRqtzzxi1M7rE9nmWcQzku4k9qtPg91z"
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
