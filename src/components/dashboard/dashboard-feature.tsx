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
    "54rDHUGkpQbFjAEmSEWwmtoh3qmvdEAX5N72nETuRF5Nr4rxAs9nGnZp1kBPjkreLYpCyy42wBZKocreGgTFsNBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGpvoG9GYys1HUzA4BDjWT9Pk5qWmFi8zouRNiXe6EUr3gNoqWQjamUgc1X5bn25bfZEaU6imb6rahVuGkzi6Pd",
  "key1": "3XEv6XwyhhNm3s2nGfqzQePkJWybTxQdKHF34hX3DDssUnWoKPApbSiaiG2daJXQtVhyUCrkwDLQhLBkmuudCxLp",
  "key2": "3qFFSriv7NtvGXfbqFNkAZMs6J3mPHiTNuAPoxsXoyvTty5u4YMvUpsc8zQ5ekdD7SSE333yha2TW6B97XowXcLx",
  "key3": "3R8z91zPJhwriXUV3YafEhudQW2ZZbGJi3kDNXfSmXKR7chfxfmA1NLpJz7maYs8i5uXmKZ8QgWvP7uZdpa3rnVM",
  "key4": "5atSjJWcWipv4qqs4R3JfonEmg8M74F2yTssEKZ9myUwvqKhL782iDWMmmLc21reJCFANU3hvEuzAtNUvc3Vt9Zg",
  "key5": "24mFVJheFkGnMeEUVHf7hxR1SomcAasiQ7tzjWLKfZKPKHmU7zEHJnR3bL9cu99JAG9PgcMGkDg587szeAgF6E75",
  "key6": "3JudfcgB2RsDA2p46dwwGDnPBkamteb5DaNEYJtV8kEyUNki9EwHHVf46h7foU4kjSK4WX7JSbm7EHGXTYK3pxMt",
  "key7": "3Ap3UkD3YgGmoy8y5gPKZEpFBSRwMzKwVzMoKVdx23GWUb2jnEBiwbbBxURNDJkkoeZ2ymqSLYm3VF5gcNCHMMn8",
  "key8": "2CkgbdUEx1xGjbdQA18XMMTWsoad65gNrudCiG3Ecc6V6wS9v8kZihCc3XiqdxqPMhSriHMM466J3Wzhs8S17gxt",
  "key9": "2LEhffKebntDrHKkEDnzDjLmm2cfFVzKX4QSGoB9XqkTEdnVd4Y5mSYUTMypfkpthJ19BnxzF1rM3EMabBZErE57",
  "key10": "2ine2BWkqL6xeUwpwNf762xSHGN6VyRajKsDfKtDfdS87mo4S8W8kE9RJC4VgbN8K1GjWu183Lindag9ZqAf9fxX",
  "key11": "5Vsj9dpxcG4qbhESfvZNUEBhS2R8in9dzTQitrGSc2K7tHNcex4PoubKePcueAs5m2UZPMHAsQswfYdq4iWaWp6i",
  "key12": "5TSo1A1L26LsXY3B96XEMFLHBxpEuD2DLLip9zXKFMhgtT7csdDPYjkQtM2ZUx97U3EdrtoLkCUNeaVUKbTKppQf",
  "key13": "5LLdFMJobddAKQwhVBisEzvU3E8BTXwZ51FF6mZ2jQRAsevU2F3tFLv9ywBawUMp3vTE8rq6F499aNa1iYK1DXSP",
  "key14": "5nVGkzfY6iZNYoRkmsu8BzbjrveZEKfDqT7yVLfMhSUqwrnYFEJ9fn4RGN6Me4PaEF4UctFex61NR3tBTwbzRP8o",
  "key15": "5VhecZJFTzneX81tt3gRy9gyXJ1WD8mfxrtL2dmgXKEgEGpvAJ6nggPvNFCdRp9kJiFvMeDDhX2q8jaBueGaRYvD",
  "key16": "5NTaJevg3Hc8CHRVMN6GXmv3YFNoMmr9mQoFya7gPcMXAWqB8f5Js2wBFLujenB6WhmiV8FCoZsg236LdvW4xiU4",
  "key17": "3uKj5rk5Wz7w9wCCnEq3hqW5Q98HhPSoKfxixk2TJz95WgxpRerpLuv2BsHLhg3JPu2JcbMqM2QgNAnyj977jAZP",
  "key18": "NDirTih6uoyMVbBybFQnmRVorndMwMg5XNwkARnA9m9v9KKKf7cBeooVTJg6zMGb6VafzTn585uLDGoasR748fZ",
  "key19": "238dNkTYb8rzdfvRHY6Yyy4ui1arHq3fHJ2H2pHpd8nQkUT5caT9tKPnpSsM7uy4LKG4QEyqZCuwj3JKrmZZnwh9",
  "key20": "2Yv7Nuzmi7fN4yc8ugqDgHwrnrChDyGEg8F44PDsHSf7HerDebTRZwThp3JL7kaLdxkKq1MaNaQ64J5PjQHSoMTr",
  "key21": "5uReJMcZnusHL5jw983yt21JnFYG22ErRRUvXnGdqXFRg4cj2JYPmjPoDjLoLw9ArvdC16Pf3pe9BkT9muyNUXE9",
  "key22": "C7TPbUxJU8m9hDu3SYvALnZ7LUWEH4uGHunZ2ZBiuQdfESCVP8Wevad1CNty7nim2rc69ioHxeGebAtbpFhxcXZ",
  "key23": "Dr4G2uudRQquUf4oSBJET4e8kcte1Q3T4eGZyHDUwFeTvV8VT29DR89ZMV2zwJrG76j3P8ctakxXFMgHGnArBuM",
  "key24": "2acov5e4gFHm1Exwm5hpBH9tB92vGvGhFATwTCTwoXc6wWwv39DNyur9rE4duBdr72RC6atBFaoLfuWqpbdVUm9B",
  "key25": "gfVWF7c5tVoD38QaDKdyUg6nneCbpuxZwEok33h1VEUxCUMiLsgmuKS8kkKxinmLbEG6sqkgPwNaCNPnF9L31Qn",
  "key26": "561RzQagDuA3BojKpvpfbjDDvz2KVb1P5E4yxGetLGiNgQpT1qME4CnfPgMMauUEeEcDRGaiBsaU6k3nND6ZBHWH",
  "key27": "eKDUJmqNGmA98kd53v6HBcAqZX5FXgSfGch1VGqrdxsGjJvC9FJTuH5AVDYVGsQ4qNLRWAvwiZHzvDWkMVw4ajd",
  "key28": "2pBrKs5KdXgR6nompBY8mZ72f9WNkpPPRgceCaH6mEAdSzoPDJ1eV2sNsTyhUwNhacBs6RQ8piYPu1NnfsPNDamf"
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
