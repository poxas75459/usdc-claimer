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
    "4KJxqhNrMUSH8DVZoLkK5vxwbRYBmnocAHvhc85HBCVPmne8gFUcnMfnLAKsezTTcrNfpRnHSJxPhYauMAZQoYfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ccU2gZDi4WSkw1uWasDEAWZJmRS9T7WXLEVa3V6BubTD5KprbwU6yzw4DMBsCxDvwWaruamgsGo1sLP4YL93x8x",
  "key1": "Hg4PMj7gZLFmzagQ7sx6DoAUXo6GHKnnU9LUUTQgyYrihZZ7PQ6sCQb9Nfuy1XZ5bqPTvZu7ghKinHMqYf32nJ2",
  "key2": "4xXCLoEVMyVVx8ZpPSZq7o4rLKhjBK7Sbb6Zz3fCoZghvhKHjnbLkRT1RM6W4QhQ5VFGy1fQJAdVXtP2xb3GsbTH",
  "key3": "X5U6CcDpr4VTciaChxBBTZsnXaKZNncEEJuNXtoJ518K2gT3q9M1wJm8F3HvUPSoeVZywbq6e2iCqsmEd1vYwZj",
  "key4": "5ajHDB69JkVFosmrdq6CU8tKfCM6nECybxAjxA5VhjyvPNDkiruizVKf5EdXGhfZtN6teD9CtjrGF4ZUnKMa6dW8",
  "key5": "4pGx3n29nNW2ZsKMgkZBDo7cvkEsh7jvrp9bCDCrv91HukP4SJMPav4L8b6Qwve3UKMH1EyrtygcUdmykFt4rSVS",
  "key6": "2ir6sBR5d9n8amuenHJ8SMgVtAY5XeLfp7iQuanwuyPUR4JkhoogUHsd79Kh1uQheFGujfugPCTLcetE5MBMwoc5",
  "key7": "mxmNtToi3C1rqva8MTwZGmded9gN1r2wUNDoK7M9VTCxTkk32ekEAyeyoYLRB7azVqz4HGfa7FFBJFR4dwAp6Fe",
  "key8": "2RL9Yw6YwEf9WXLdTEbVmBC1aUB8oMkDEJVgL1bP78FuQuqvc8Ace7jL2XxpTZ46H4YYvnrShRsRu2cNJUWXFmDc",
  "key9": "ioGNkc1D2hR1gwgEoX1HUffYPkeTmKHuxmXjWXRPsr6Jhr4qfx5nQELqSeqN15PvLrxQMUm54amXyoTnNcGRNmj",
  "key10": "27SCsTksALEoFjH4iZhwucXA3BREycFZZe6TY5Mfmi85SAV3LDXj9LjsuW4c34LoSVD1sj2EzsHKHiNR4rYhYDj4",
  "key11": "3J6QsPZL3BMUp15BScErXGxZFrkS7ENoWB5cDR3rwrAJ4MhvcMfN56j9svtJ7nozqCxfKvndhFQxsRL2Z2Mq5rX",
  "key12": "5rXdTYvequJJxJKt2KxRG5EtmQsJFUCqCt4s7RuMiWyuz6ZDapQ9dMEV2okxDwus3Myi4o3b2sbtYcgcCiJjPbnj",
  "key13": "2W8Fkfiz4QUNETPbuHAWQ4qDNLGQkPMVrSkLH15PxdRJAHKSRbGHZ8KB3ZHAwXkfKQ1dVn5HPt9V38wcxm2UGxNe",
  "key14": "564Sno3KJtNBLZynDrLw9K477idegnqTQDdhgJdSCpCFhsB3bJddHS1NwfRRj6whhwp4h8XELWCQheT91ei3w8Ft",
  "key15": "4rqrofdWMCcXSC7E2bm132uABjm7q8HxAUzUX7P8KDPZN9yxEoWAWfE2ew4tw3H6SgNsgM7knSMyw9ENaEincjic",
  "key16": "4ChAAavRcbaFWmTSvFYptFa1FCGX39fmn9qgC1DeEqZwtMwXXNi7PwEwuA7Yy51vJFWhRJjXNMdQ9bh4nnLWBRWP",
  "key17": "34WumXaM4kjREbBeGiH5ENuwQSDXZdxV3sueTNJYEuL3pRQQ1UmN8Gaz2dqBsa7XacmRPq8Sk7HXqhpqnRAB7Bu",
  "key18": "Efdb6xpXr2h7NiS1JwAhuAicg4YMdRpNmNMcd5MXmkP3PnoixZz3RAfsyK3PhR3SEReMF3zXGsv7XaQMmaqAZ76",
  "key19": "67HUY8gujTn5YarHAxt5JHXpmhKtmMPFTHqEkG6CXEot4pjwnEjj5pX5Ve4RVMza8TaevZxsTTxJbQaQYsUU6ogT",
  "key20": "3T51ztXs1bA3AKW4qjRKmr4yms9AstMBraNE87SeYSjTjKzhcqZ2L9TCgGyJ8cowBNfSxcg4nq6UZ9vFNEdRUVsM",
  "key21": "2WSTxKJ2g9zVcPHSubVg89akYujE1ZdGzzSR5qGoYvLpmLkbkrAjJ5z39ypgmPXMQ81Xo4xAAY5sYTcV3gwxkzXK",
  "key22": "4Y8FtgTyzNpSfVxAU11Q1RgHRhABMut14BpG1uqJP3n127ZPnd54nwYoiZNkp9H9pyGbDE6yeGXqZNUZtX2H3KEv",
  "key23": "NYaYsCpor4QeZWuMVTVsFcecppAG33SQuosGsx1y1Xsb6dxoBVmrxcbBbxyA43yrxtmCUzaoY99eg2k9xuEt9G9",
  "key24": "iPBdbAxDUMgcag93VJHEbb3xkRH3r5hoJi2rmaaDqkH7U7D6qR3nZfyJ6razsqtAeu9tpJQWKZTsH93wT7ePj8v",
  "key25": "5MD3SvCyWDLzaNrKDpwJL3nXAF7PCgTp5ygXiYCBVWdmieMqxn3rG8UaWHNuwZuHoadnHeKkqMn352hp8Xsya57x",
  "key26": "K6sEJVv1F3ht4QcgHudbgmDGR8eVdaCGW8tFH4i7UHcXskWNhmfS2Y7v88t6sNaVsYeWEM2mpiVNkHgmyeTuttw",
  "key27": "3PTDoV19aNERV6K3ZfB3oWKoJW5ssrNw37XzbwjTBabkfMB2hPrAMYp5uw5m34pEn5eduL43oJ1RHeYh6Xz1D5MN",
  "key28": "3YuQnbMCGSgKMwTiwnw3uAqB6Ui5CBURsfQcxWryouh3g6AXZxWd5vRCGumTPj5DJvBx8C5bkhjeKuZv9pdk4ujQ",
  "key29": "3EYYRR4HPzMcwcezZrSgRRzWJb1q1MFCgoLPSJSwAw9oUc6FMh81rQgU73Ydwop9HLnd7QaVp7TWgNFCTJ4ncgvQ",
  "key30": "2Kq5nhjipepSz8iHCR6A6uYK1xzfX9z1aaKz7nGJAD1nrzhwBaJvB27vuqMjrVxCtr8ufJgSwxkf5u2y7GmhRqFc",
  "key31": "2THC4XH2NknbR2hoppn2saL7ZABRsbqqAxEatEDjfYNDSRZ8yBgPwQQUaJXr9D59VWCFgfr9EySFqenhDaT2btMx",
  "key32": "4uNHmEUgki8tUGQKhmg6xj1tQDv74PrekACKDsGQsNzp1mQHodStK3Ytk7faX4j7VMXCbkgKUbGTnrd8YYm6NgQ9",
  "key33": "3qB1VkQPewFiZMJk3za4syEB8MfNXqTuqsEHHjcwqVkD8iZ1oMm8gFVBmjQ97CUSYd2PTBE1xF6zBQ3YrqUr5ux9",
  "key34": "5y9pTMZxK2oBMoGaAA2LErkW1cYKBaLifBUvByJyvd4Qv3yVGLjPajSy5Z3EXzyfjrjFLqggYQFPvCW2RzLSXxkz",
  "key35": "5GRLoMg6n5j9Aodgeu7asCbh9qcGroAs9h51EuJqMCJoM4oRmZR3hkRZ9po4EcaK6oAXqibPNCE6US1UE8bviy2H",
  "key36": "5rA598VUBiPSqepR5jxZ3Mz6Asm5wyoXrRXcH7YBHZ8d7q18A3DFfd2LiPZJhthMXzuXD4YgKaLNLF9qH68thUHh",
  "key37": "xzub1Z5ZQAgCYcmPuNYPD46rihUE83JUuE6KAvtmiqb54b1HsQ7zn4rgw6i6YEn9fQFfMZVRPRKB13chiSEbJRH",
  "key38": "5E7khcyUmizg1jqBi1WxP9PifxwK8ncXGdwc3VDGpipM63rUih2Zmun42um17UUdXEqgSWFrXSCuyvgmEdJSBobb",
  "key39": "2TBUjCKg4utrn5oCmCU5eVrYHtPxGzcZA1sYAduggppa4tB8UHkeyAJQCLLRumza295mAnE1cYUhX5ZuujGKDbdt",
  "key40": "5rTc3qGZ43i15zd33ZFxBCxkLU1pTerhJAohFq63ZECqW5jHf9nJuYiD3BcAvZ371iLjqTyZGwidXWLqu1NkFdHV",
  "key41": "5WADux1B3cudJRRWZjN6ba21HbPWmcFUnpB4VJuL2N96S5LejCUWF37yDgfb4PSRGjZCUurboxkTxJgNNJdNGq5i",
  "key42": "2wpRkFnfNMHrm9HVaS4dUTMtwtECs5ymrQa8ZufD39mp7B6mbkht188HmPX1L1rcUVZcgTr9wP1Lnaj7Zzd7ViwB",
  "key43": "21Fa9F25eQMP2sHt4ciN5yTaPXr5ZffVVCyjG2fhFp3Xqzsmnukzbnescp5gywP7jX7AoJWKsBqZaXF9H6WVov1K",
  "key44": "2PJTyi8PmwHTwV5GWNNxP2eW3R65YeHjxmqh8AryUY8ypT79kW8m9K9vhpCJqyW5ETStGjFEaDyktdCobFYYA7rC",
  "key45": "3FqvjAn1vKzuXoUgZ74TSgvX419tE8pKXK9KFVKro5DA891E1vwDRguV6tpWrC2QCSD2YrpAJv1B3jxEj7jgnU13",
  "key46": "56aa4xBj5Kjw1ekBywE1TUZkmGxnRMXCLsESeLAAzJZqxRSSt56TcpqNrw2XJ2a5ejMrHVEY7dGG33ZKSAZLRTYb",
  "key47": "5BPYooE42xxRhAurucGSoXK45CfDrCwNA4WxRtkkcw23QjnCzHV712F668HDQenVrW8FkZjbsmNn4ymZb4TcxE5L",
  "key48": "5KsNzYWYtmGg3a2V6M9X1DhJYwWmn5KcnL6cXYfm6baqKTMy3QYdPjuGCrV8jGCw9GXfZSuMZecZ89gyBhXRnGrm",
  "key49": "Q1yJkZkdTM2m8jZ5kLjosbBrLya6EtEjePQyeUgQbpJwTXZCvRZjrBFSMZ4bSKNtDiKqznXWWCmnJPQAmuxfiex"
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
