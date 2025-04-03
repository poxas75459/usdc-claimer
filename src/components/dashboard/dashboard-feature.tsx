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
    "LxjMUWh4phqUDN1W45qnxA4wgdZmJ1ivSdwwDKZrGWSh8v26ZpFDLSzQWSCxKZu5Y15nZEcywT5moEzKiPZTa87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QWun63Kperf99ef3UyjWfx31AsmEXTmZfSo7UHvBGQ5ifdhi6ReckXWA8B2yKjZpr7xu3933svUa5dDyb9Hs12e",
  "key1": "5rDbU5qZo2JEwAEdyZJKcmTodJogq44jHLCEimtEAQNt8yXEy5peHMQQWvSR2Roh2f6qjQQkcwBwRWG2rYJyjSMU",
  "key2": "28YkjveYSQo6KsMpEpQNHmYf9BvA3vi6Hv9xm4eM7N2aWd6RL72joiABjXC5biZfaSCfXbhxxEfSFRjrKEk41Kob",
  "key3": "614Z5MzLs5Db4u1MQypN3gYb2yKffx4NA7YahVeeYe2jzNJh5KkcJZpUrVmHDt23deE23MjBGPPE3ezbvqWKqNXK",
  "key4": "g4ZZoAcpadSJrJvtDsNjVB4srtsjBwictSqoyWq41HU6brh3jttHAHGfezCQK8okKT98B3WwAk3ZazLmdWD83Dx",
  "key5": "5CfLqyHPgC8dnH9xZCfswKRRms8bWxCexE7MxMkpcFt78pzyUCLmHAEuSqz4JsGxb92adZbgbTdTeqq56o37cbHK",
  "key6": "UT6vx7HJCFTNkerfu6Br5MSZs1PQozRdfHoF6FhcweMtctJCPqByYzkLGBSAVqXcaQnPSCwbruef63anroRocn6",
  "key7": "4jYeRymT8mVnv3HtTHeRzWW725ZHjxMCBi8ts9XJsAd43cNJCkScAdWtpRqSoCP9f7jcmgvAqJU7kP5fBf4XfLgk",
  "key8": "4xzkjEA7dPKZ7EHfkzYKFJK5AYEB3eXWUAzMo7X1mrJrytgBr2y64QLjHj8pbMyJy3CUYtdRuA6P5eugRWeVtE1y",
  "key9": "4HTiLkF8FNo6njLNW6a6PSzfxLd4aCzuTvSXP7neGGUGYXooCHoX4sQ9wnvnjCjirDH4EPmXKpQYNQdbN5XqgGBq",
  "key10": "4GfWpsueGXxL3UtN4FwyRQ4YcTvAYyhjKXu9jAYUHovXYVMZ7jKyu9gBh2QvvcczCEtuc232vR4XtPiYNk1M2YX6",
  "key11": "4mqd4vbrzUfRXAL4WqYGzdQJrCwsNAt2N5vPXjkQUyNzVTz5oWhpnL6i87SLsQWFVZFn51eDNreQCFqPxvEYLsN1",
  "key12": "2Yo6c6bJR9UMeC6KTvfKxGCfPXYXjXgcku4MEiHfuyeKceZdBpMTX9npzxRRZMcfGNCDabfVp4YJekzCJKWZFETx",
  "key13": "4i1qDxkqZnEpBLXR8A6L5RGQ4UDPopFHLHbWKXDmgbz9PmpNhWFpxv62iKjyAru1YfJpADfHCsVPrsKt5qNFd8AW",
  "key14": "3qqXYyNiCNYBueja7xmKdQr7d93pinxSYmRdBJotDnNM8T6YXKxSpVtfhUfKEayJRzHkgctXgfHW3syYJ1NbvyNT",
  "key15": "36R5q71E9EPNLR9SWdfvCUFQmJZUJjuisnHL5cWvDiFrEQAg6FNjLeYncBerBWtzHxdzGsymQiSBWWaWLngXFm1b",
  "key16": "21JoskfwNXSS3prXjRLKbnTH2mpEK7kZ43cgERunrAoj3QjBtHVP9NKJ1oVx1AByr164xPm4CQrz8qKRyQnbjp2U",
  "key17": "RCH8aCsHL7vL33S52WWGvpGQpwbEN9KFrBLvNXTwfyLQ86nehUVycBmUvCm5jQH3aQbmYQNWEPwK6AZeVTa4q1Z",
  "key18": "2RkdJ6QyLhne8vajtNBxsU1M8oGmTomwWSrpYqFnvXxYUmRQ4W5XANVsb4Brt6rFNRKpNi6dQqpAuvEBCu6SqE4P",
  "key19": "3jfeq47JppixTw57Z1guNwYu2MmBCUnS3zCNuEvc6TRAY6XhrW2xrBd4acJERTNTiQrAFEQ4gLuNRmeAS8B7zhtQ",
  "key20": "49DqhwYR72qg4AUMT8WzGMWUsudX22MLSLBjWrGQGHqNQdNrWcckGZPPyu3rUaKJqyue33cDEd4sxneRXz4iWPre",
  "key21": "2nkAjVahoqxHLUPPQomHGQWHEoea4BxzzAHoMYybnxiPpWBwiGseLvb3YVgNdXAUUAuHLDt2m2zmqGAuncvDiaZH",
  "key22": "3PMULuJXQYdwf8BnB9aQQonCEDWpQ7akjiajE8ZsnUmVfM2MQtnCYHDy3fnUjJPNUvasJknk6VJeKnop2dBBvXxx",
  "key23": "4Mw4VfayQNfUueL7WVVhQKtxWQS9G9h6mdpQXf29GpC1DdWDxV47gsDxxKAEhnXa3zaRyxB3qPJPaWMgb3ecWbYU",
  "key24": "4ejvpEMbfupH3x5PcEuezGgBQKkX1RfjfVXFUed8F2DzNseUHDVY2M4DrRdAG5Tob7Ctjc8xJ5Uje3GZP4F8W4wU",
  "key25": "3CqR32tNdnYUXhG1BdujQB2mMVptEodP6wJbosvDjRvsrYeU9frfHjLaknGXwU7BFQ72iWXiAPM6j8vdUJBLjXZ1"
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
