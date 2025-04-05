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
    "3W93TsHgP5nwPnzk2W74x8cxKuqyt6nn5DDC3CeSE2d3M1NY7Z8UXHXr2HTN6SDwQedJTxiBzw7Mcne9cFnVBSgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wTTF83Mv4dYFndka8uyS6dmMEDe2L8KPc5fnV9cHEdtM6LwCiDRf6ryANxGL4xwuESZyLj49Bq7U9ZEMc2XsyVP",
  "key1": "2nxJhCWmzCCgFFwMjdr1vKA2ze3SvBJoQvVqEYww3hXCUxUSF2jDyQqrTTSWovvA5oVZCmaiy9bwW61qGwk8TWrQ",
  "key2": "3q28Jvtq2uw4dKPt7m1ohrkxSbT9NRiuy5t8DXSL48RpNpA1LseYYhY6inCnbNZHmXfgUFJQf4BDNPcArmKRaW54",
  "key3": "4vUoFdk6yvuYTBpkUG3eLXW8Ue9AiahJ1udaM435qrHQjihfj1rJ9k8Y8wLY8T8aSmzunEjbbur9XSUhQoZEbUg9",
  "key4": "TaVJkAibSjdJ8dUyxjbDe7Ws7rkueqYDFzEeHeSqGRqc8PMRznZFSPxAkqjocgwouPaykxX17xnT9KBbXTa87xt",
  "key5": "5maEZfkmR2abqRmnnG8a4irLVMEAQsK479B7ETpJdoKpYmGsgHe1CqYHjs2GhPSDntQJFoByATcz2HvzJ4xSknYq",
  "key6": "4i8ryjQyymEb7tNC1pvbKmB2k1mgjYpUCwxreRRt8gPzJ7n7shW4hWH6nQUT4nmuJr16QQznztZjJKrm8FsSyxKb",
  "key7": "T4ViMf8tmTHuRAMCoVFZP8tnLZMJzZGSwZDgk3DBwyFjzTKeeGLmaXUqv1HCe3z5hts98u2tG1tWtm622e4e2wC",
  "key8": "Cvpg7FsXHzvAv6wepxPJa7LN667RstzHmbgqudWEizWn3NMWzMc2P9DjCpELDSqj6HwiEMSiTjZemJuyArfofbr",
  "key9": "2uJZb733ga2ZpyoP6vgJCaKWYT7bBvTLaQEBkGmT8YX3wPh12qDUaLxThP2EEPrfz5soK8oGSsEZKh5WEr2SN7Hi",
  "key10": "2W2HdfLkxkfh2ntgwW2oWveGeB6odquhnwQmG4fzLrSybbwW5UtXUrRspMcrgJG4QbHHyNhB6x11boqt7Hdofdce",
  "key11": "5JYxg5E7EP6Uap4CTJMUQopDHyVFGXKsWd9xGTEK4Vm8fxNDK4t9g1sjC9mszKAkXhKeQBmWHdoGPcLXMWPa3wfD",
  "key12": "5kHxbsj9DvFLpUxVw5bVEUzJdiPe9ZYJWp6XXUk1Bc6MrnZxyPuKo5XC7QAF96najJ1FdXMvnJgEmhxC5rYc41je",
  "key13": "63RxpfiRYQCdzBQ86u149qZAbMHYnMwWRQUrETo5v9w1VzTrAgtkLtij2KkGMmDG8yvZD3hGwz7rA1Y9q4LZqmXv",
  "key14": "5oY8h2YohJwdWmycNusBL8BrgbezduKytPevwxtnkKUu8M7AJ9vTi7pGpuhmLnpcSJdRxaTVV3TPenQBQZogqpPp",
  "key15": "3U1JEbq4hfjd4qnYqVn6FG25sUaN5N38xsT35z5PNiQLpm9LEkgPCAEGvfcDAX5KwZP8QRbRiAGkwaLWnjRuvXq",
  "key16": "38yTvP5KekeZ5g37cwZSRd6XCkeoVgzS8rDWv21KhcB4QbD4Jzc3Ff4mPNinzrsY3bQzDqE3Sr73LBdT8JSL1T4D",
  "key17": "21J6Gipck5JSnw1cpF7BrB2E43diDKHrNZkDyMVwdu2aWpotTUSH18Qqi1vQeYmF2i9ATXSrxRLRxNV7wxcbMSmZ",
  "key18": "27Dp9nFUZxbRVQRNurjD8Q1wWunTMmxhQna1CYXt6Z4C9u9EC7sh8Zu33J7BqvARo6WtB2FhMprFubm32NVb2Wk2",
  "key19": "63C3HV8Pwua3FAypju47BLFuuzrh9vCaAdKptKXmwggCPf3keD3PnDP6e75N5cnixWzVevr8igbhmZSAyjxFJaTM",
  "key20": "5BGyVQw9W2znxfDNdMGN3RYcHLsDhftXRJ3ydBQ6swtujJDh49WZ3W4yVGbQH8zDaSYn3AwkyKvLZCaohV3WBP46",
  "key21": "DyxFBSuKnXGpu5vwsAcTcYgXudcQ7WXyWJP2yEEZ9My9aC3bzLaq8UZmHbPWyNhGB9Go6xYQrJmTUE7ZKq9JfLA",
  "key22": "5zej5Lc4RWNKj5YAayXviMAdrvYVUE11BBHTYRQTmiKmzfNHoT3XwWnzrRMMQfDczyPHe6LQg9FeS9phz1YrzLbN",
  "key23": "5XkzbiryGrX5STcbFbZQkorQhmrgyjKhmVyhYXuiLWEukrLhmwacjE6ixKynRvZtFBRr5afMbWEuRFda1cPp8cdr",
  "key24": "26iWeGqZJADXQ92fiwCQndMXCrj4ujR3YmQP71YPYShzQHWpZ9yWduJQUHDvitMLUhmjNN5yBvGKaogibhyHZ5Sn",
  "key25": "3u6XQvVwJ12WVr1q8iqpx4cbvfsQW2BkmRkoox8E81LhqK9tkih54BnCWY1uwY1457maPdN9NPudtR685dw2osBo",
  "key26": "3dexh9ptkVXJYgKRoMQKfzAZaEC9d1HxBLAcSP1e2MUmhQNCLmXW37WYxwVmxJfzi8KgbPdwVnNEfvwRRVWJeswr"
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
