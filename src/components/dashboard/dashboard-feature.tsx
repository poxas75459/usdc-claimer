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
    "4W6vGyGsK5y12ytCPL3Q8nE9dxnvbCssEp32JSWxeqQLXvGwjJBwvQ1h7AS7nZHgJoUT58j9idME1ik9ZREByoGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZVpzFJMhKmLbP3Adg3PGcLiA3PozNmP1qvseiiMiC1Sm9XmtKnQPnnZd4udWqXMi9i1kaYAXiu1QCeLKL44drk3",
  "key1": "5gwSspHkUrvuiuh2j7bcZkSJgJv117B3fiYG3EHtFT92Gd7A91DzA8KQFp28xLLfrHom522s1cJSFV4ZmCYDH2KV",
  "key2": "7Enfr3YV8SuU8uw13PzVLJgoMe1P3rx36euUqBtqWCz6N1YiXVfFcPZQh5PdJARLbfY22SEWfWHYgYnpDnekJ1d",
  "key3": "2Tzh4ffTehW1k2Ts7hvT4eTZUGjZKZA8sKpjkdRf8xmsdCnSzb3BkzftpdwGUqo3SM4XAAYEm83j2Aan6DZH3LSy",
  "key4": "5iwbSwZothvwPBoVF1JuC5VmFwPj5UdKiUL4dYDrHdbpDXQaSEtDZhTNfP1uCDmQpjgJKkaur8jR7nJe4C68jypa",
  "key5": "2Bz2nu2Rz39rDwL3LifuEynuL3cESwH5tG9roEVY1hxqWTw1JZFMnkEGBHbFc2CTDK2xyS9rMRRjXUePmBq8K3Ve",
  "key6": "4djQEnDbVRTMuAesqRxjhNAja2GhSGLJi5H7pxqybMr5XQzVUipVTBN11yj7x6xFqypBtmqAjcfbai59E9uQwvjJ",
  "key7": "4oUoXvqkLueti2mVoeh1SBhPF8CCdwkxtiX6jUHVqC3zDgjJDrMwhYv2q43p7zgaYQDMM1DbxjChFcKxyyGitfoy",
  "key8": "62XbsDFbeGku5n2zTNMmfaxPJBcpCZfzFBVFPAtj1FRbZK6JizkPUZm2mkF825f7eL6PmBLU48c2WgqocLv1KxYW",
  "key9": "TakiXnQMKHHz3v6pyRZC4yrAmhqe7W2nHQtPc2WAbd2xHWYUEjGHAqvTDH6vijZh72SN6UhHD7odN1Wtamif9tP",
  "key10": "2BqShftGet8AW9zCH3CbLFkMmV5TepKGg8bo8Hh6kjNdXCSz2PCwJ32HNiarbZcSL5vSxKYkwjkHZooWmXMpgD8b",
  "key11": "25Fg76uJb9RuqnA5HKSetjCVEbzx7aZb7GSphAGRm3btqwY1P5VQ6UUKxph8XQNKzC2jetkQw1pmiT7mXfbg5rp7",
  "key12": "39134sH4jwfzkAwZKmW1hcX3erhfh3QkRqMqRbGXJPDgFyJqLAeZwp8gg8HHjQGeNVzaERUr8EtgfG2ukQumdM3f",
  "key13": "TsDAHD65x1wJWQjWrj7gnFtNovbZVFaC4mmNaCUBNPQq79VokqpX2zmcQGB42WY7kWtu7TWTzv1GGk9kgEuzRX1",
  "key14": "2b7xs4biT3ijJ9Cwgw5Cc7qWtFRu1muwUi14GqTPQTE4mkU96NK1ArcGELq3kLTK4xp7T2YHVvHPY6H1S2i96XYZ",
  "key15": "AMCpTRS68aSpZMA9dBFD3kd2EWfFpivszdQZ8JgJbjWT7EGEb7XSMht4AvK3uPWUwoCZ5BEDLpJ2YxQo4oNnfCq",
  "key16": "4ZBr7ZHtXdMs31XZfevd9U4pgTFN5B6d83D7QEFBWda1kdpxmk1RfA66kTn9pcj7DxPSsnU5YJNMPe3Rmo4sTxzL",
  "key17": "5Drj7pko9K6sEXxqmWkEbfnx3KEAcvHczKQ77w2mCJenJekTuv6MjgYhwJz2wtj6skx5AmvZCV9g9HhybUjVys8R",
  "key18": "2UcmUMr7NhgWkNVufgwRiaMYo52utHGSrKUt4Cbjt1jCSZGwWSRsxBoK4ryVBSL1PULZEYSURqwvjpWxsDpcdRqg",
  "key19": "128C2keio74ueYyWYjGbqeHrpXBX6eySkFpiCsW9igyuxkkgFxmcj1ixBTsQ1r1hfGEs1xRWTfsvBTEvBn88PQsf",
  "key20": "41r9iHmja31BACSz4sVXBWgb9NN9KdRuXCPZ4MeKF9e7jnZp6fPyYeTDQt2posAxaoVyPey536LS2JpgXez92BB8",
  "key21": "4uVnHxqnP9hsriZpuwVrpwJYTmduWmh6Ud8oE1rrwY1cbETrQiP9pac6kNuShhCP3eC2tVkx1mu5vFuAbaRrBeyj",
  "key22": "uDB8P1xXpih6fJN7qLT94wg2HK28QpNjDhS8FdwY1REUNo94c64Uq7UJ4wdkdwzfq1hWowf2ErkMVm7A9roWAtH",
  "key23": "4iN2U8cGKHDJBU3jH63PTwBf9r1pm394odjutBokgV9974etBQnie9JGZcutqYVjHWD5aGX4Y3tWT6QeJ9RxavU7",
  "key24": "3FFvMWzhva5MfiZ8zCLooAXhw7okrzHANVT4cunZbKq4SD7e1dknoHWx4GKBFyHU9hMsqqCHXwBqiyYyypbNJbUL",
  "key25": "46x4tYJVEHWoMfS6gb8F1Ge4oUc3sGuDHf3W8yjAELqcjS6NVE2qVyTiuQBNSFUgErHCgixwGka9PeQHrgmdQS7h",
  "key26": "KiRdnFDNC6cdhDCJ7fpKeviqo61mZTmQRckxD1F8Go6NeUvGuaJuPT6hRwVzBY2ic6i2uWQve8MCXGxLwZEfqWo",
  "key27": "46MEgkx2k78paGPLpsoLNeKpTtX6p8XyQBLVSMvBYWcbr7u6T3S5gE5m7mgmGveJY6mACujWsztQ6kKhuUiEfCGK"
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
