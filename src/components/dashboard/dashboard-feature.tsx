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
    "2Jbrz6RShq53CvHVf6T1UgzwKBmPzvadCeqCc6fbsksYkW9n6NKzXpFau4ceUE4yD3iEdao3t8D8ePnvR9f19y2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64UMYXMCpoC4iLoCjgeLGHDmQdZFT7DxTm8ThZ4Rsn54W9nXRhpxepWpThmPdJE4dpRs6Ef4WGy98h4vuFMZzEUG",
  "key1": "476UyfY6kcJ6ug9n5Mbyz1yPXYMEwzzVDfMXGrtgGHrSmuS8zNegBitkxcNpi24SXDLcLxHhqf4roxUpCtpZcZYX",
  "key2": "2UimwHXGZogPftVyK1mnsoY7cE1cn2r89RDpUMJphfnN2XTWAo8shHHQ22jBPTe8gauy78YXbbvhahe3Qwv4UfrZ",
  "key3": "3Ymr8Au9ksG6yA78YnEURk734MtkToxzKwnuUnHvnvrAdTJdexHpZ2FSXarubramnWPYSn9BYMMv9BepJqQjxkkL",
  "key4": "5txGFdXgHuVijyD6hktxEETC6W4VwBa8w8SjAhPac9xPfqAAz2FdHdj73wkSQFpfoVd5pNHjmAN65vKo9wsxJZU",
  "key5": "5GDHHMR2cxJSWhGqyxdi9HzwHofkn6Uui98aRAzCYDbaQoUowWwXgRnJRghsSts1rn5Qjxzf8Dj6yKjUgdDhzG1X",
  "key6": "4gN1sZHY2CFCyYz1sN3B4bmnjfj7vTcR6dXPwfNvi3YF3kqUmHE3Bah3uwZ2RuGzsUYY1w2mDJmxt7DW8j9dnnSd",
  "key7": "3WXmHYg5C2dWP6HpXVD3YxyNxFWFsgHdQagB1gobXUYufZzvX2BUWYB7mbSBLTr95WFizkRBV33EJCcCrn2dkUx4",
  "key8": "2eqvQbVNPZ8Afk91hqE1HjVAtkVGiKYwkRhVfH5c1JXf1HMnqqT5pmEVPLHCBdEuc3rmCqEh9vwTLhnn4gSpdDbu",
  "key9": "49FPewA7Q4ZzqLfS5wrAghx281fdSegi7wrFonWCNNyxiSN3iQBuCbRcVtnuxuwktv4pgc2tPfaczNmMzdExeSM3",
  "key10": "2MTsandqthWR9KGQarz9CATRavmgs3mEdeAYygNoK2xCm2766wvJ3Q8LGSgEDyUqpckvpZcEnJePeaWmMN7XQofD",
  "key11": "5Zs6R4hdbdRDhbux51LjtdKyjatUscYAZxKWm7j5gKrdV4X1tr8cNvPjbPTsxgmAUqPNopJK4ybXxaZxmqpf64yc",
  "key12": "4Ybgti2Nsjws4M15rQeygZjYiti2qgCMqxgNrWzxeNJSGFGGqQhZzfVGGX9RATEXiNtnbGkEnHdEYA2yfiJj5A3t",
  "key13": "5mCAvzTbpvAWsGR7QMrhsb4yNVxD6KzTXmpbq5hy9P2QtA1yApdbcSxZxZaF3bm2nKgSVPtw1DKy5zEj21WxFmvm",
  "key14": "2x9kCLa9jP53m8sJxBjdbCi82ozgm69a9ueBGn62tNCTQsZnFTihdzPyvsLAGL2xfd4522euRgL3rNjdChXemz2N",
  "key15": "3JMqJkMdcR577vGkpmSwpBNdFyY4g9WPnncQ5tTPXjRtXmAC5jn1sjWw5aAAphwMkAZeqMF55eDVHUKRhFRfLmjS",
  "key16": "3DvjBxe1zxxroqoM5ZiSLBLV852D6WkaHZnWuirhK6uXRApL29KRmRS5czC2ZZvccc1rJ7QWuWjPzqaZCUSQ1J4K",
  "key17": "4LSyDjJ6TfVesu2CNNKWGSrhZBYUnxnLvFugj2wTqx6e253r7cRrpQUCbidxB2eDKVrRWm6wEzvpZC7g9UMDmrTM",
  "key18": "g8FcWbTgQEf6ZvvooJCENWeELEWpDH6UNVi7QpFaAjE47ZqEh7jm8sMaihUhaM7QPjHyFvbPiGmfY1YfWjTxjE8",
  "key19": "2kFrjdFKmEYcoYtxztBufd98n793VJyokfJywrub2yXLq9jmg2WfghYRMRv7B2u4LddbzoaRUyER2JVvvbk68bT8",
  "key20": "oQrFdLBJxv3Xxb1dS1jm1CtcftkAkduuUg8J8EiVLdtPFngpuoHMke9PTeRUwvHFcCXPjzqpeurYJHvHjLSmmnD",
  "key21": "5e7Mn3tQpg2PBoqakwnH6UPsYDrdeoeiZCL3Qmy9mGg9doFwCBs98rZjAgjG1thkacU1dWZFntu5xKWPtpmFTYAf",
  "key22": "2Mmu76QfGG7azsnyvM8y1aJxvCea4djaaGXLKg5vR8HDaR4LD4DRfUHqYjFALdtZovKzQLefrvwGfawwoRwnmfYY",
  "key23": "3DmrcdydEcv6PWLDZidtJrEUXMJfdK4iPgJDgxhRqVaUvrhondKHx422jsQWAGV83YqBeLiAX2mHsw2MLe5byFZB",
  "key24": "5qbWQ2CArPuSSYhzvLZwznC78mySvyKkV2K2t9ECPK1GRXT8NT2kocDXStAvkXrEGR3QLRA8sVuxY7EULZ2h6Toq",
  "key25": "28gzwmzStdhpE4hAk6a9JnPaRKAhXhcgDeHvJqQ2K29fdaSzjwEB2F5JinUd13SygiPVyy8pegGp52zTbrsr9eRz",
  "key26": "3cfENMCU64uyXNYmoTfQpekozNgMkhzvNmN4gLnqc1DXcoSHDLNfQbEEJhL5sxrmuiPkzkGZdpFDT9ru1NPCWcrN",
  "key27": "5SbH24jhVFbAzpMrMTAxzAGKcFGUpyfs3wKFvXijfDQX3DTfNJYZBngs3QUrRKXgMTxbr436yKTxoDmHM8JYaKb1",
  "key28": "35vYmsW5P5jJ15kiKNLEupjW8it4YFKbY3f8FnAWmrTu1Qt4Xci7eobGEZdSrHAAmYxtnDXY8vWaXv3vaodt2kco",
  "key29": "3tcbkRTqEVKitbNY7KhmTmxGBhGWNAPRz4mseJzWM59kRBMHREty5of9YF1SAfGSDBhUPdHdNVNVc35EGi5q9R65",
  "key30": "3AGv4kFy8X2QSmRR3E2ViaGi1Dxs5NtJYDmLuus7gwUicpCLP7gBXzPYk95avpwiKG1AHELFwdz2bhfsSjrt8o7n",
  "key31": "3zJNxbFyjhvHfw6oAqMdZBsuDmZp81zZgxDgDHHX7tQW44wkQyg5u9kxU9L7BNxgEbhmxmedCLr6dHk6DyaEKyPA"
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
