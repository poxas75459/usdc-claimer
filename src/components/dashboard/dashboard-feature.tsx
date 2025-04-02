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
    "4s3Yc9UVQC1RMcsK5J19Yy9PAhnFND1Y8K4f3mR6RknoKzAuiJHiERdsZMXLtZJYD24dpuhnJQVTn31dwk9ziFJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iTnB5XPGftQKZojKBQd4dgPzKaZ5jkaM8R6HBPdQ4mrFeV2domZER2HCk4pCvFfPs2RHas6D6ddUUPnA8uww9RS",
  "key1": "3iNRGwV5fGuzmfzBKp13uxPCaaRdWmHAZCUej8YquoiCg2k9hMaH5YTt4nFPsv1VCqPC8D636PS6XTePUkFefvn",
  "key2": "5df1oGAgS9rHKhBeCg879eVBMkYESwmBDf4Vp2NTuoehkuQvmGwcovwrEi4JnrfogUb43DkcZha8anzE7yxNzij4",
  "key3": "5ghvgvcuGuwWBDdXfqLExvJEd8TH9V7qJbnAE16cnMo1iPDeMeuk9D3Sxa6CUh8aRcCE9MrV6uGQXWVFjWPHhhWz",
  "key4": "3qU7DxWCb8kZVpjd7Tw4Dh5P5Z63TQTbU3izkxUBTrqEZ36CFc9zjPrdCZcnhmAeDe3fwCXi9Y154ruygdax2dJ5",
  "key5": "5suJEiYQbMbFqpPnnXyHWYsqZKF1Me2TyXKjq8ztaknHGzcoUswr5oiR7QcuWxByUg4SgesW7YEuwQ2bZ4bvjak3",
  "key6": "5eNxmcuph4juFdpTdr4Yna2E5KBrHwC94fJ7gSuLdKqMX2BNk9VNLx3wMpn6rJMDUKvH6RGZDGAZYiT4h5xr1SiP",
  "key7": "UBYQwEKXWcDjjj2LT5aRx8MAK4ZZ5ta2mk3vqXV7fqHc99B21WrHtcnJEPUvc2jUEtHXD97ndt5CyeeiBUGup91",
  "key8": "2LqRNAUc7nPg2ibPFtKEzYi7noBXe4MDH2zznVw7cJ3PpxvyP5Ey8kFuvTvUG3d2nZWdYfKF6nby2bdv7NTJWfTf",
  "key9": "JfeMu4aDsDdRpveSWdNKQVbFHYb8H6Zz8R5RtuPEiCFiXc7np263W5KjgzGdpfz4DH1ArJjLLGgzS6uzLg5291C",
  "key10": "4V4GqWavD6KSQsxZqkx4yP47JSnGGbr1i1t59TWZmVfdsrCMXRZCqhgDibCwWgRNB9wm5dyexopREN8JSTvnCZX2",
  "key11": "QcsmwK9E7bHXoBXuEJd7KnDejRWErdwbT9geY83KeaiyCUhzAfm163yyUqFAVAHYba4t7L9EMUKhZc35GQSEjpt",
  "key12": "5bLgp8zrxFXNKwTWt8wRrhsbuktpgUuFgPCwGbvvkqNHmA5cMn1CcbacBnCiqfhbq5nsKBWerhM3VPjHrqwhzgYT",
  "key13": "fXZpnoigippyZrEYqp4oHChf4ihvkW2eaJoaHGNes3JJciJoPFW54QXWuXxwBDAer39qcEzHix13ySf1fjjq3Jv",
  "key14": "ipcm6Qgv91osJdZQzf4xVvsCKniJk88W61ddWMbVB6iExLFguPxVSvddsMAUgtKXnABQJ7QDS47Lk7WPCztYAtf",
  "key15": "tfM9qYcaFmwjToD7bBQUndJC6SbYRf3MneVH74sothByc6N341kWFCudqVTWiSk2CNNAqoqbhjQ3GJYEbippYWy",
  "key16": "UTBt9higTHcmPdBocdR9Vp453aexkExiB9JK2vVqipjShLNrfMNa9484EEBSGCR1grSCPo8FzG77RwKkYd1iJPX",
  "key17": "aaWm8qqPukgy6BQc2KhpRLwSdCyr8UzXqvmohvDgaG1obH39LzmpHgXZqqnrE3PcnkRGskmk4EQV4R34cFkTSyv",
  "key18": "sTGAifsNNHgtteXsqCu7dRuNBXd2Hqfm1CL4bg18zahG7QMjvCSEpRnLAXAfRmVGfZQabo7peCQ5TtnkNRf6hAY",
  "key19": "6UpeV7fUhFTSkcUgJ48da8Y1BcMNQe9djeY7WkwXQWYmEDnS6dqVLdE3MNQevPDMxocY3oVHVDmXPEzy4hrrfCc",
  "key20": "33BhdNVEba3Ck1npbZPvkGpbuzj2bikoSESHyZLGHzup77XRUqoL36sRgimUZYY9asCcHGPS7MmaiosRU5UBRYCg",
  "key21": "3U7aZxTKtLpyXnRBfFGufPZBtgBjfqSbVGEdn1YEwn6e8ErdDKnY4Dayufpef5oQ8Cz5E3EJB7QQhoCsGNt484GE",
  "key22": "UEGy8M5Q35X2eNGbFfQEyt2otwX8CuofBZAjJVC2t9UxrBiy4FiEyVBRhTbkzzHX6aXrv41yCmSiB2MKrLRQ3Re",
  "key23": "2tPjwMCRZmG24Tk4LPWdiZnQPPkneXCYVmrNSdoXFb8K5pvN7qQb3MPRZ5XKdT3xmuCMY5V3bSEA4Dc5Eww7mwuq",
  "key24": "3Z6u1jqRN6fzrPa6jVtwozafpNbzfm8dNURMZCUisFhPZzSRnw3Ky5S6RXQzhHSXSP9zXB9RX8oLr64uwrVoBUr2",
  "key25": "63W2wKmKdxBkqoE4Lff4wnW5oV2cDRa7Gc7tpfkQRiGCfwSjLgHQJUWy3Nfd3VuvMKrwMzxeUS7F6pGexvsz8p6P"
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
