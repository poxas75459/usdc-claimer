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
    "SPC6h17GjjLAuq3DPQVJsxKTeoyqTNLnCjdDmnNskLXGPcQUk5iETp8b6xn7eJBokrGJrinJ5LQeyFoXPx7Q6sB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SHT88A7fVWupnVjNibJEXoVaUBULqyReYk35a4ZjiU25nAydcJiNP8m7RcbXofiJ64BvXwnJLSWtPEpZV1FEk3e",
  "key1": "saGhXdq9xd3K1jGtqoPaUQ4zMnoAFPx7rerdwA6dqN5SfbGgdtmvQZBZo9FA9GaGQtVj1JoTxnfafqAwrFv4PwP",
  "key2": "WyV9hSAAQcd6tbU4mhTvkkHua5RBaScgfcaRhHVuJqRF2nQrQiG3XgHjnsxqkbox3v4Y11PyFuxjs1ziALd28Yk",
  "key3": "3k9pMb8UVgh4XdrVnPR5q3MJE5X6Cct72XtKb3uiyZNsPQKLxki5tbj9NABhQNTPH6wHSzgEGjpHQCzSJJqoy2a2",
  "key4": "tfENmoruN6pHH7mhX5srcgseSFoUQzNH3dX1QpWqyHkh8eaS6tbtF8viy81MLfDnhi7uBLXoFP74D4JxqEuB2Fk",
  "key5": "mVHByxB6RdfySrkFoyGjM9NUiFi9zggAtgWtYTYN9C2FS6RTdkUPD5GmiaswYPGbXz6Lz4Nj4M5CeTTRk8JQZyn",
  "key6": "54QxjT3XCzEKLN45Ps1MyeBC3arPuqKpo2af1yaKvpnHM2mvqKgtrJTgG3XirBp7kEwkHYE6ZnfUTHvkUSJCwK4T",
  "key7": "4npzU48UASLRNTZXR8RsnoruEfSCEs6e41xMMMnsg8AHkhdmq7SbctvbSvZ6YV7EoVbRChwQFZhBjjNSQYUozMWP",
  "key8": "4YcSNpiYbiJbFrnwP2ppejab5BX1Vdov9Umps7EJfGbCxhyfKEzBbqZRSTZhzz67vj5uhfYcf5XYeoiu1vxSd44p",
  "key9": "3jyAMtnR7jzRhjxeMCUdw4xTk9eRWU7rMDjTZAKVaVNSBB9iofV6PeuSshjPyiCuERRjNsTzDpoAXmc4nGyBFTSN",
  "key10": "5FfHdJEhrXviGVsu5QQs431h9tbAPYzf6tgRiEwHjE9w5nwFftoiEKLzU3u7WXxVUDQjDn2UGgsqjHYJjSdbdUv1",
  "key11": "3UFPVm4TeAU6TSoKUqrJcWg4mPkzmbkbaChycLtLXFUTQTgrzaqRuQmHGnx2Gxpkfp1oBdjbCs1ciZrUs2KtpjYf",
  "key12": "UQNBNPVWbHic4zk89NjroUHi7iVcTC1qVeFo6Ug1uxmGkXVto77e22vPmYRDhzV1S2uKUPKqVsuyCWx5ELUNbEC",
  "key13": "5d4HWrKT9K6NTxsjVSeShJm5XVAye4xk6RszCGNN6MjimZQYevVsQjQS774yc7N7n8pScdVWSFLDgaEbmmVyeqKL",
  "key14": "79PvxRppq2JN1oHtyRG939pSMXUR2HDfPbtHfGEQz8XmAGcm7kwJfpFFkuqdDvgJBTbfAeGp4aGEUKtjp2o7jkk",
  "key15": "4vyfDV6qSo9AKyRtd33ZEYF2D2xQG9LJq3Db45Y8TKNiqFi5PdkahLref1vePrh9BeU94WBhYDGQMiNyfjdoCNpN",
  "key16": "5c2HnfjkPfK3SMVw9WUfeEh3mJRvyV6Lff7WsdHeMRs6r758532mXr9W1MpU4BTcDt3dfUReKLBdT5QyY9XJJgyA",
  "key17": "62W7RXw8npjG9UWzSN8pUrsizmTJVuR7hswsQoyVb6LfuAMfveoHoHYpJiY6ko173EjxRCdfRY4S6K17RrzPy5Zm",
  "key18": "5ZTCzEPKBpffQcV47atLdfQZdHXtMkmQiXoSy5qgCDaLErdg4MxEPDq8LBJKxg7aFkK4Pt524AeXYyfmLgudFDyq",
  "key19": "2SjxZ2VJiMHMZRxcG8my39ZfxXiXiehup3Zbn2RTkRGsNLh58iwqT587J4LvMFH2msiqc6rNsK2oMuZP7FcMYUK5",
  "key20": "4WaeKuh5injXgZVP7fwNRLKEF8EHRgUt6shMMzM8ehCQN622WKKxSZzh9JbKoWzJncc8aaETnCFNabLf4znjnGXd",
  "key21": "4TB8MyEcBTyfCGcPsFkZjJncBSzf4yxR21oK1TUzWbjpG2zpigzNVXiunVUocdBc5qC6y7DXZtShsoho3XtsVsJf",
  "key22": "4Ti6ZMKAvU22DUQZxUBSkZ2fdLVpz9GqyVG8MKCy6xTw2M1C5Bc5Kvqf5fyqTYQUJWEnJR3XB3vpreT9MFUfMyGU",
  "key23": "3VayPmRLPiMRYeo1eVTdTgXdAcqQe6D5zV143Vd38BTCFruc9QsPkco31EGvqGGmgCCisT4sVoUNnHCNURTDi8wG",
  "key24": "4TaJsfbH1XA2gN2Guz6ByLjkUdyGJRTkcoK3bCJXLkd662zahEVGTUpWjCxfZdiKSXR5bbscKc27oSndmF6YCt7V"
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
