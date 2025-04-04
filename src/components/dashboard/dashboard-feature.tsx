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
    "5yBGstJf3a92e4MZ4SR6dqssGzdVEF71J3XBvkqedLWZLaxJJxWyXcPoffP2tVw3EWazd1XbCTLYUxfWG9xgarLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pvTddK8UUcn189PmYVn9epvwZ3r8tcTNeM6boW592DBYs58HoFuRb9ehzYjGRWFRPv9RSXAqfyo6kSKSNY7bRxy",
  "key1": "5Z4dnxFjNgD2s1ye4cTxZVVAx1JjynMvqKu8C52noyxY9awaTtMhnMx8HzUmdRTdN3XhEnoZfWHFwL1kfegLxQSS",
  "key2": "2UFyDSpNMz9QdcEf9MBnfJeQCMkqzwZuJAsmijgzZrZyiuB1BBb8BBXQ6rYTYZUfNPjvjNpfZXKuCLeawXGaATBH",
  "key3": "2MYmscRJQFTZGMAuq4FdXqYbAgb7tgpiYdBsSHimZvozKTkV9bDMfF6Ehuxr8accCxpv7sEK9XgpLwbsnJJhb9qB",
  "key4": "31WCrcTVBnYDPMMnP7pvhAZJnknqfHYBYpdP3grPRVcYgNUuHghhopfhtaVSAvCZsrWDPsrAabjU4KbJ33pxxX6h",
  "key5": "WFuEGifr5twy76fXWcmgBKwW6yqGPj3eFx6FyMmhq2nvgDoVQTTdc2GFtKx2D5Ea7CgVe84ADqzeVXeAsySRbLF",
  "key6": "3yKCSty8YBirEBsQubUQLyXvUjht3vYYRFTHg6xUqDf5aREqkNSh32y3x9DcbSJE6wED3FEeSdny7qS4srSvdEEB",
  "key7": "3sartSKFxcBrqLfqJotSpToWf9UpwAAm9NwqVvQBucm9eQgvLH6ZkgH9vgQNT9XgaU6PhCon3nRDmRMFxo7f1zcW",
  "key8": "51jcU5hTjBwRgeCx6xWXERfPsnXyVhGYABcDkLd8PCpPkwjrSNWtdt1NDvD7Y51guYf4MczeyAarsWMyeRUuoEPu",
  "key9": "4zXwPtjf5Ac3jdfKS8dNg1Erqpfauf3chxDhv5vWfHs2puJ1LehX9jj6Dd79ZFjaRAc5SWQvQ6y3gf45FdNtGFwd",
  "key10": "eKaMYGwR7ebnrXKWwXdFDSJSRngJN7DrYMWQaSGfr7vhbbCBL1kb5CGja6757vvgpqoUhD1mcBZQmV1n97x3idQ",
  "key11": "4ZC8kVRxAUJwyQH6NA4kSCfuyntn4szaCbR7jqCHRXKESW2xT1iUw9Ur7UpAJHikBL9q35Yxu6i4taoV19BAA2dn",
  "key12": "t89ZGRzNCiZ5KxKPcxFPD57W9dDN6EPAWsUeGwaJRQxa5BTLdvpE2gbnWex4FW8ugrhXakqLssNJAcEeSGX19Q4",
  "key13": "JoMio821U2W6Wopo7JzaKCe1TPyBqa7ZXVmUBVRYDya91cygKUmY53MYgp9hho8oRscsu8jiHdPDyaniyPviZoT",
  "key14": "3HG9sHx2ZBbVoek12oKpKjEWdrtdsQge2QdnCVNiK1LwZkj5M5Ub9b9Y4jNZPAk5WLMQyvf5BaxtmXMb2jVADfmX",
  "key15": "2gRnMWHrdo8hUX8em1RqtBh2bAANDockozRvxECF2VixnCQwwWRTgMPLFK22HGHRhkBjwR8zQfUsgsRUmCpVs5yw",
  "key16": "65DyPCyRx9pjaVHJ1Yyg9Azmh3DFioSELs7ncYtCevtqSK3sGgm7YLW6HfcEAzXKTjUvRMdLjUBt2JQykncwoiRq",
  "key17": "3zbT4E7YEj7ZJXc6fgAoX7mkTyNzLbNSxiN155j6JRKuzFyoxgLQwuK6AFTa8YEeU15Uk5CUCqrK5K7d6ibm9Mto",
  "key18": "3c6PFJve3vZ31kKAfAQgaF4Rg92a6A3ZfZ7r9PBqtffAXQzed1Aspb2B2bNTHR5LKGq2KN1wMi7388ytFoQq2UWn",
  "key19": "3cCf3mbjWAa7hHhsFjXS6xbE4HwWXgdETg2SEw6EFxrY6yaXjqPBoZkcfsUdcrHRo8qtgce4dqQVjeURRn4UzM3X",
  "key20": "5PL5HgBM78MJxgAqJQjNmexUXAN4Fas6nsYknHV3hEhx2w5BpfBe4enEX3DWWph1VJhTnJWQDEBTJpCfCaby4gCJ",
  "key21": "4oWmz1ybB9kTnTLewSdE6LeJetSeZa4fmGMPEmLgepmUpW414XcVT41EKBQHuyTLbLcRmqiasxbN8Ws9S9zxJnbq",
  "key22": "3evZbvF5JsvDKxiiV1UJbnNjgDg7U777aZefDsfoienzdcPcw577nJaiRd7JRLPuW2SwxLxtY6PU8B4ezUe6mspY",
  "key23": "2E2bYEcjpKuBxBRUyDQQRnQNQLU7MqcRd68VkjRd1LkpTdL6HSoYRUuDjWHeRxnHDPtTSLG22Xoa6Sx7jixmqNw6",
  "key24": "28gVNe1uuepuodsGxZ4iB4NAwhoY9EqfB7qZZ61baHoEBQjrBsBSdmrUz9BbVxVoHZiRK6Z6vkuSryBHJRy43wtY",
  "key25": "fDCBbNFxUEFrUKFSmPJgP2igaLCAEYju3fUvtcEWe1XjjUcVVuTaaLmdKkaYb1dgAuXJjiUGTfjpYEjaMa1mETV",
  "key26": "rnpReMEth5Ep2UouCLCs9ptou4QBmuMjBUFFhWVRtpqqUvzHD3A8uoGZhu68Vq9KjCK19b9sn4d2SnxTLUQmvXb",
  "key27": "3zqCLeTsoaE8Ss8VdxKMzLKtPM1gdVbycfgR4ysG1AXfB3x4LCFHoTBtUSMSai4Ej1NbWCWgTrZ1gLCS5xXNovbK",
  "key28": "RGbVZVayyGyyVMZMirnpN5ytpNW4wtPTChRZxjXQo6rktU4UoHiRSJSp7sZZb37HDB8A2WMBTVAmH8XWPsenoLu",
  "key29": "5c1WrxuwCupyjj2G1kBinbGrPeXAn9WZ8gKb2D1qP3QwYi3snrHHtHPPBxWmiRdYCMw4vUgzHYUrtFziF3zUN1mc",
  "key30": "53LUWGchhgbYDm4cSygxhwgeEEKN8Rfew1MC8pv5JMmJDuSN7zBPZ47VXFKU24rNhgzErUjsPvqio3Fm9rTAY7HB"
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
