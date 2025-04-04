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
    "23hxCe5nx3VteNUDDKp77G5Dp7qz8TcPfNydVsLcmA57fAEBY2aZ8wdatvRVo9W1Feiw5eUpE8nvZ1TQ3bJxVCzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bVfzAfF4DweNt9ZrZSPAghtLkzuP79xKL4fjBwqYCh6KhrQV8ijPZDjuUgArGq5F8bqL2qvCRusfQSmaa69jBGu",
  "key1": "3nexByGEDh3qX7zcV5mVWkVwqKiffNgmgNfGLkYx9KieqaDkSvRFu561DiQUqHW291LQ6pa9fzqY3kf2yNvske1U",
  "key2": "5pmoQ1htQxW3ayCrBbx2ic3LuPzLTWNW8x3Xe7QQQCFMzJGLdDg5LveYKhtCw7Kca6hZkxhPN64sKxxJuXg1enXf",
  "key3": "4E8uuJEbkjdytCgvNjdHVWwWof1zZmHDrrwviXscHCz9q1KuVyRB8MF1jUXvE2zLfyND9ktx2y5STRCNxUwWDCLF",
  "key4": "epLaHUC7bFVaQ1nK54FekwFE2atSwxVk9FbpsJgw8iJg6xsYX7RhWgpsZYb4nBJvXhKouDYKu3rDbyvSDAnmzoK",
  "key5": "RQX8oYqxP8JuTWnmt7H2bEbe8zVuJCdmLWNS2215orvcyJscfgQZJNVAz54k29DMw12ME6Q5BLptbMpP1PaRapf",
  "key6": "5EckiTYbbJVWNL8NyXF9LkRmaCiXtgAUNBrZy7UnB2eDmpjKS27GAfkEj9gHUdUp2GbQsVrzgwphknvfyLkkRtMS",
  "key7": "5Jq8xj8zNbwwQG7iEBEktq7QARModdtxyuw8TCT3GuhzPKj35UfWfCXfpLrEV41xd7Jad5keTwkfXyPQmNbXPFed",
  "key8": "542fDRxy5F4TgSznGK1kKWb7FYuxLgavEzgtowqTou5v2vwbGnVzGWHgf5nZpRpDXm287x2QY1FqVBKxzTVsu82W",
  "key9": "2RaMvn28vd5HREiKfR126nuGRxaCL9jztFTZKD83vkHhKPGNzhfXtpyQW54pZr18zmxMB7GokQq3iisWiGKTtyEd",
  "key10": "5QJoDR13E4ek9Pr9Vbgq2gqLdCKoXdFBaX5ZSUhgCqS5Uj6971UNjNqB32m6ZdKt7FjtLCH71hEyce8Cma46p2Y1",
  "key11": "2cVJxjYHXjKJ8svqMA2T8AxGbqLhZu27sUECTaqcoKtNKKp3cWSVVuK7VYc2SJrAoVHU9tz9Npv5XWjC5GfqMj6m",
  "key12": "4Vaac4uncn9it9cydpPCawnx95aDcsFJ7i6hgcx3zKmV2P1EZh7arDif2NxorYR3SkFphx3vpLzQevQb3K4cfSMD",
  "key13": "5CnvTzEK3nDwKLgsdtAZkzYaY8d4ShMTiYUegtVJu4rw8prCPipUiSf1wb5fNPBiW717o8YvJzkmDA7s5ZYUSqUP",
  "key14": "4y2UPNbt4dhUvpteUunEzdMPitwzTcmoMHjz9EydoYXeeEVVxMiDXcY2LKEhe5kUTLhdmHaakvFW8bSf5S397Sfq",
  "key15": "AVRPZoepJFYBQmtZKxr3MdgL5a2BYqFBqhAY1ZdnRirHShqr9g69XZXv4EDWNfGrtfBZHkJooDNqjUBZ8qZZQPr",
  "key16": "qA57KHpYWqAbpedoknR1MhoSngxqG3RfUBBXZGky12ci3uKbM5gVY1KWxVTw1Jz2ydf2XC43bjBQxWVCfGkbacg",
  "key17": "4eYbQQP9ehqouYv6Xbc7tKcr9rGEEFQS2rDtTt6R4ds77t5MvStdFwazeSrvr15fJN1MTzEQPAkxpFTNxAju5a1V",
  "key18": "3oVxAUWRyWBXWRNwkSCTXW8p8PDkWjZygxh1cAXdRzERbps8NKfopxnus4MYTKLrUwLe2sMUFxbWe2Z6KZMJ8sRv",
  "key19": "27s5uWMDREkRy1ZViQGrw169d9MAWTygUMMtVdc4qucdxLAUaHioxn96VptqSYvzkug9qEubVy9UubYvRpShv7Vx",
  "key20": "usQU9jMfCwJMwdNC2DS6pachnKTZVvaTGjNJLyZESKdpeAanwrTyaECp9LXVf9KvTVbvkKr5zvLFF5TYcpiVRxe",
  "key21": "3Qe6DBFKzUqA7MC8hj37VSEMJhnZiFr4n6EwZnfjdHjunZbGnJ3jG4jEZehKYaT5jzYwFnM6DHMWX3PLD287ce9Y",
  "key22": "4Epdzt648caBziZV8XCZdgdgG8qD4yDtCfqZMihtfkryCxhv45BFQh8Cp6mz3zP4yJkBb6e2HZSSDQBgyEb2Faot",
  "key23": "4TLLRRwy5BA4awWXCkdACyzNfozzASMK18Efr6zFvmTbSybMhLFQPo9JWDm8Tu4vCbtnkoZGjQuCvgAgofQ5qUCn",
  "key24": "37Fyj3XxihSBFz5efD7ndngRXE51HGouosWPasgLhehEEQ6RzuCK4LuQkV8LfzMQL35a4ny8a7HJ4iXweVSt5x5h",
  "key25": "WkNkSPeWPGSjsTn3zN6QcxtMfiutyxK7rWpvhufL74H4VS78EmUDnXxkTiiNkzyybPKiMar7ZMRxseT74DanvK8",
  "key26": "5cUHXrEV4RyP5LSgYzHAQXF5an4G29RrmypoaaHcyPk83yBL1y6Ui8cBhRspzakxY5oxgUJ9jcAYUQXkJwySKJXJ",
  "key27": "3z1fWD5MqMEaVqSqhyGpYxrk7pPphduEVpf8RRMB327oyknqJuNvULJz75kvcEt4fBMrCEKho6jVhTsfdWp2J6h2"
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
