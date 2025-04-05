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
    "4xAFDN1fQZMCNiKDDSH2uXMQx3p81EBzkrpj6uD4nPojiuTbUxTNfbt1SrSxMCctC99B9KS39zWdZKmuCkNPutZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xzqhhPBzeurx1YDxa9aX2tzhXEMpK9waWUCQZcgAdBJFD6kaqf5WXpYbgTeGsr4sUooVQG8RMpRJ9CqPbHo8yBM",
  "key1": "KjjwusY4U1e5m4dQShbi8J1HoK92EAWrzXKyj22fFbxQfW6B9Vb6CspaEX859uDSeKTw9bt5VRCzbMV3dknEBY1",
  "key2": "5HG5czHkieyRurBNjaPXvxKb9CNwbuMzdhP7HLSR5WJk9kGEhhma8VQ6ZYs7GvHzeiJUqYJAHqP73mJRPpSNuJMY",
  "key3": "592r7LeVYRTUt91tFJ4jL9XYQJCXtF1KjzAxddessXqAGM9vmCfUdoGR4isZKzzKRH9UMCdu49brn5oSSoBjLhtZ",
  "key4": "3eqzpJCSuJnMuSp4wnUvHPupNNuxHerJXNnL8rBUU1Ehp1K27d9uv8FECWZKtDvBFALm53MEWHHktpUT2c43Lkg8",
  "key5": "2R1Hjz4eqqL6UVRcdAnRju2ApTbtzfFhq5Vy9foaak8QG8k7Q526yT3nTGfr5ptaUBWcSRd57NmrRqCfRfGC6Rjg",
  "key6": "5yWjGsjSEaH2ttx1mxoFYH6jF2ioQaWLRyNEzrZbdQLUGYNT54jF4e6bA7pTFxFekpaLEksAvwL6gLFEdNfjoaYs",
  "key7": "V8mckCTChkPuAwcScNetz4qTbDYzRZuEqGST7CAs2yPHSvunrUPuJ6gH6PRrvTfrrNAmM2ZH5NzfFCGSxgLaS2P",
  "key8": "nSm4LUjTSYHRsSWsEGCY8XPSHHkNQQ6u7KPki7pgCtbSUxGK9aJUcEZKdUezTjWA3yecyvETGqxvrq3wxAYCQ2H",
  "key9": "5qSAPbur9pUod6csgaADXYNoP4h3entwzq2uZFyZe8qydDBVgy5A255pAioDYUkqGGdsXcZnMhGeRhLFdGdYfMYz",
  "key10": "2ryeq28aGbQnKgKzg4MMnrWYD3tCowkdi2fgY13P2kR7NHVSeKAdkLYfpNe5Gc3yy5EPz6GBErpo3eUS29tHYd73",
  "key11": "35XEpcBxZ84YeKwG2uV7LySjdCvjGpgeJL7DM6TuN9juSuoAU3DE2zCrvwCU6FYRKvyqS6TS4EN8Yi1bJgoM6938",
  "key12": "gzKR5qAJuc2voF8HPaLgC9EaSmA58AtgfR1xYEygsdvRaYNiReDHhLugP5DAsouebGJxvWgKkRsLT9yCdDT2W1E",
  "key13": "2fGiEB9q5uJFu7gSsvPb4MUBKnQbe2k2BBdP7zrp4FC8WsRmghozg7NiE1sp4kohMadmNffhGqoqUWvDXcsW9aqW",
  "key14": "5VKTtUzJY1EvwzGN7bi6vPggYDeFYVbxRLiSSdCr7M2rvdDeuBPXxJxD7KR4VMj6YSLn45xhqJbpLSJQRMUZTbkq",
  "key15": "mqZUXLWyVeiJ8qU9wYo713WRKm5jsVYZUrB4P6jxkEdpVUPZoyBYbNdLs4eJJ8XZi8SNkYExmVcEKwfNhpEWaKF",
  "key16": "4QS7ChdKjqJ2aFNHF97RN2eiSB4dikZLgVsmvcAufobewRuRTnnrJjgjS4Pbbqr3Zy2TL3dr5MHoeVJ16iW6BLcR",
  "key17": "356gWwHNeW8qP6SvJgXiK6oX3HCsDgKmuKyxxaEJifTYKMxGZvPVMxip7zpHVGEi4kCTCDJ7ZdcUjii5tA1ocUQi",
  "key18": "5rRM2YzgR5ywDrByBjpeRGKpuq9fgL38EYQdjDzrgC9uRtr144nnrMqL5pK7fRCqL1JB94BGsjXyGzvtPao5iRVY",
  "key19": "vmSJEJ91pJEC52eYfxBSFVDbj8KnsHSewSSpcEeKdo7Rq5A6Y5GZBDKpYg5Vgam2sPAvnVZuhhhUcJtMhqRm97Q",
  "key20": "4WUNdBy86PtXXVyKEGjgBvenF8RE2e3uJC3WejKFRANaG3dkX6A5xrdw6Yi4K4QGSHR4mhYmy8evzPjUShNYaqRW",
  "key21": "5YpmVAJZEn7vY3UURMScDNnRjQp47eA3MWVKGufkmYdUMXRchf4ri28Cs676Ga8GjMZkosPg1AKRRJ9XgdjmDQjq",
  "key22": "vU4PsHBx6KDj7DyMRWb8AQRbYqXi9HPGrJxJPyCFtxwLD1ppW9iBMxL1k5zdiT76zXL8fgQccbfKpZXtgKcBDVZ",
  "key23": "5d1XujLATACpcDQ9zuBHYLxkerRdGKo4BMwNSEfym7TpVvXHzZNGLFbEvpnKxMJqqrL1nTBnDZ37DqQY3MhQsR8s",
  "key24": "24dJjRsaoCiGUteQoeaZTBfqSg2fd9i84QUfSUGmdgEAGctBnwnovyAnJmfFTqeTyVHxCj3DThz82CBC5timg4cu",
  "key25": "3rsRWGAv4j1dKu4vwJaaj5k9kvkgbUaX82mTU9eQnJmXrL9P6pt9iD8DWX9LdvaoCKr5nVoY537S2NLiixLjqNRR",
  "key26": "2bYh5Z5P7K659adLvRrgcYUoLC6B9MxS9BPQeisNsxHnPjVgdMgV81FqVMwfBfqsNTC5BQ2iofLMRS2Xhsr5XVF4",
  "key27": "62LA1yfCt93CEVqYzfo2dgVG4Yt8bKGYJbJJNRRPr1fGaEFmCycsnSFaiw4CTiYVSw9fGXa3iHYgRtHf8FPeeCam",
  "key28": "3mT8QF67cPMMZq9zpf1xPEjS4hVVWD6Hi4EYRk81mVtg5jssMWSdGQ2d46LEg6dJLgMtVr1DCCCPxQUdLfQdRpoK"
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
