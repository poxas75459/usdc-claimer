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
    "c7ma7LrNo1NSXpGo9DGyU9wQBQzWKcWqwwtWoH4kA7oJJ5KygwstACDzsodCJXzZT3vWpneVNUiZChtk8rNEQXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K5RCb1P33x8CfvmXF8W6Qcvj9mXHd5PNTxfNWFEuxqt9o113Nybbn1eokW6uav5SQ1nQw4rFMaomc5TyARbASzj",
  "key1": "52CSfXegXZrLH1QBvvoSr2DcKXqwGHeHjbRiXopnbnvTcFdiNHiDhN9Av8PEpPyQrMbwSUDtf2Jov2E8rE3z1tuS",
  "key2": "2R4WMvbNWrbxRcBoR6DKRq3243PSkcJk6YtbKX1L88ETvD7U6ZgrsuXwEsmpnm5JpUX4gmfi2KmfW3QzixNGPRRe",
  "key3": "2hD7ijK1ZShQ1P4zPdpdDfq6vs4Agk52McpstVqNiCHHDiovSZ8L7CSHnvPj8UFoX1rqWaKH7Rmu8HQDks6rtbi1",
  "key4": "5o5phzsyVLnPQEofiTFGvbhiKWBYkWdJNVQKXGqYUfSHJzK1ZSXywbUTzPdJ11SW5kkrGPyyJeG4ZddHahcTdhcJ",
  "key5": "4CtiUEgrPKxDqynMEAvsScww1ga8w1prgLzvgMo9S9eDw3RK1STKtFVUbPtDDgU779FwVBLP2WqrrBrFaL1UJbef",
  "key6": "DqJHTSAEgdhNJcLowdUNubs5jgQZWpXNFjXkVe7GzbHKU8yu4wpLogDX1oVXziL8dtzVYY3zWje69TBNkQ5LreK",
  "key7": "5bGUmaQDVSNgyqsTvees1KyucttT5zpjZzf34cgU6xYXfq6PXdHfDrrUZ25gB4sEbrmHb5AHH1CgsDtHPdiWwqvu",
  "key8": "Et8dFc6nbNqBuxf5Ci1arvJsP3xg4aJNmB4h5Tg7ZQMmBNTLzaYCXDNiujUrPQaajchCZgkz2m83PZpigCWJg7h",
  "key9": "27gB7sCTJRr8B9ELpbYxWCfhgC9mtcdUYx36E5g9Ds9Q47Z5PMZqpWpE47SKS2YnQ4ZiQZEccAqjksTuPadBrcD8",
  "key10": "gbAYRNH99ntscgUbRRhhNjydtS51NbAAUCAKPy2prxzfDVvzKq1gyB8tkcHFpanNr1PiD3YPq8VSJCkezeRn129",
  "key11": "3wwfAHjKW55cGcM6rHm5HeiuEWHbDAi4zjT5tXPAMcvnyrpbVfrqbpVaZ8JTMpdbiJJKGCGrzHTdLes6BeDbNNFC",
  "key12": "2jPYJxQP264CYRcG8Rsqruh1a6wttxUHxBzVQWMoyKsrT4CGLCiCMXM2HXV4AV2C6WJg55gyUirwdH7njNrjNmjS",
  "key13": "SedVtCmvjeMD8XmKgqLKxgU3dA9jMXjTyCx9M6pLPbogVkL3MdZXjYHxPBaYuKA4SJJEfSdZe3ht9aCvNyFnjDa",
  "key14": "4heFKAz9HDjProTcY5QpXehzmFHP8BuiTqRjuudpYuaG4su5yQXdbsGJHQjvFvZo2KewKNCG4KYB2jZPnBY75NWP",
  "key15": "3EkXs8DLfW5KuLjFnb9U2uzZYYP9YPyAdx7LWNSq7pPkPGpqZ7tYTYd6yRGWqPyRNeeGXagBatK95RiRaVSgLoLw",
  "key16": "38uE3kQsUyHauyiYzo74VjKo4uUDftQKz782RHvogMZv4awFBUWThUucgiQizYtmaiG9QRsviPV2z6q8KdXiybxP",
  "key17": "3bumnQmEhBTgX6TQGkvgTUcHDprhBKpUyep3bHrF9jJLtbC5r7bTrLQ7y61M2Udn2xg9NZv13hfMR25vsfeds2CB",
  "key18": "5pC1vatbRBaHv4DE1dAo6YVD8Cp6bZB4o7iUuRopuHQyQSvYakAfXwXbqttTTBqw11ULPayc13cxhWn4y6go3PMe",
  "key19": "4c9WxonsXsCvwsxYVUDS1ed67zyiCsf8KiCfXRd1af1Aw4BhsXFzV7SSfpCXRudxAkrsCQX6mzvsLbAoHASofKut",
  "key20": "3TcH3M64oQP5MMVBLLUtWkedtoNrp1SKcF8Y7sYayW9vM8qiH2qBFmuHvD9m5WzSSJXhRuWCCTVZQMm3fbzhDr5e",
  "key21": "3LscxWeWWinp2iDy9To2U7EhM9ueq8tjmYqRdi6EKemueTutNsi1r1DkFTYStfaQz2T3QHQ5SMo1TBqFJBHzv7Z6",
  "key22": "67j1Me1o2ZctgwGMykSJrPWcRhxmaDpBxoFPnmUjUEc8N2Ho5v8Hg3rTA73FMVVJFfhkvSRxYWoUh9DQ31YT51kG",
  "key23": "4FsPawrJGwZieAwpXK3nuqSM9phqryKyXHiozjBs2dwXy4UTCvhVZMhJ7ogMXd6rwMx6Bumm26D5T2DtME7WpojB",
  "key24": "37TvVo2BrH5zws2C5X2opEfdhsDXD2DbX3r8dyAaG7u6NAi3MEPJ2gL46y23E1VjJZ6FZVYui1AnDyJENJVMoJPV",
  "key25": "vsSRxGHxrmzZJmo3AthfHkniMbX6VXYSUm5iN3DuQM6KBEJUhwAkob2ApUVQeDukGdnKn1ChBRJftcqkLVrXNx8",
  "key26": "QbPwpn76guDBusjBTJxbawvvfXxsB9rYonybeW82YEuuhcAs1do2SsFqM17vj9994bqmoVWFE21HMSvaQamiDhg",
  "key27": "xGG2TFzVVEPK6dJVqn7frEKPxK8i3z9WN3WVo2BT8Why2oAfgmn5ySov1jNXS885CRW8DDUgoSaMhb8X9wPk4n8",
  "key28": "FAzpkXSafZckQHaQcBxVwDkAGspRbRW8APuU24tBUiRtQKB3ickbpFhBDzDXnKPVUxDvc2KQZq3F61xA2x75xoy",
  "key29": "2vNff8TcatFWHHAi5k38Bu96JzQSNUnmBxQCnPyCZSFgTWX5EjL7TgNKQQR5Eq5jsei9NJMfvf7aDBJyLY2S4kDm",
  "key30": "2MqCfBNs8NbTcNvqUdDTx2ddLxVANsrP22aEUCpKM3zbUvdjG2vu8yoN6kaStK2MjaSqxH7e3rAzto1icBZJxLmf",
  "key31": "292hpCjTb3DBqZjekUFqHz783SLAhfAozwgyXG8aLybTyKRVxUr1BrMJQ2mQgMFhK1gexsPJGHC16LLTn3wTvoNK",
  "key32": "3nNTubHHwvB7SfSM5AVUjDUB5kqzMT1kYBUNbbc34K2GvevpBToo1oEwRRM4cuAyc68TyHs6K8NdsHymjbg8QzZf",
  "key33": "2ofRzRJPh1Eh7eVqLWSLiiP3rhoaAnpznqUYG63eEomg45C45xx8E41jFQtmf9Fjr17fpuTwPbuygK7q9hGhv4gW"
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
