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
    "5x24uaQXf2tgSb1RWH2avJkJxWqoiGdcPzesTJFuDJFRUoWHaP78LU7BXwmypFhW8Kcg2NECWwrxgFQDQsUXPiZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wG57CAh8A3kpqGQisjR1zvSsaxLVKbHtdC2fGbWTtEBr1QfhDLnBQmg2xLw9fnp1rZ3nAwmeHgKuEznj2dWTN7t",
  "key1": "LNbeENMj9QVtpT5C9scEEHQnZ5ed3Ebs2vSU5Mr8resuGSBh8fbqo5HYpLwpxnh9JvNp9HMuUguKa4yGhaYEsn6",
  "key2": "2szXJZe5ZznTwisZFVyaGzjQrp9CPJ3gyaFHUa4ZHZaj3WS7ysR1j1NX9M2Ng48cxBrUpnuF6Yg6T2nKxdrcftzS",
  "key3": "5MeKem7tmBerNtiBUe6tKUHoYmSmy3WXpbzfc4syd7ZsQ8sRwF4guFvrTq5U3mMoBirQyB3FZ45i8ZKKtedwJs52",
  "key4": "5wLDZNiyYVdGTHhHCdeWyoFzLMM5eCaCrbjLZjsp5zyeeCcW14u6wDgRS8kjz6Z4E6gzUiUfH6Qac1ASSFFErXWp",
  "key5": "3gbPorWYAtW7fBZdd2i84Q39ktQPRLjArXDHTa4xLb4ERjvJMphrYZefwfxZ4HAZgrimYtTts7fVR8cajUwBuVTk",
  "key6": "56ki8mhSD8kZ7sGcvR8oPCiWRhhqj2vgm7qJBJspcapP5Vn2sZ3p1GbPjUA5aMGZ3xd7a12wQRdURCSstreh7Nd6",
  "key7": "6BDTd7HYVmTbyTjAknv3qRxbX7VpRhNa7MQY4jrUyZTC8mp8zqhC7fxRhY7pUoZnRcMfZNEJRTn7oh6nzyv8wJL",
  "key8": "3HwvHTCrFHfNkB9zQqnBoLEqTDQPKuVn5CuWWfps8e5k5v54soThkcX3Nr6W6jxHcboMWi4cL6fERR2bPHBhkUAx",
  "key9": "c2qSagRBX6it4ajRPLAK8ZwFRszAPBYXPNDdR9mFnALEoEcmCjfzFubxArDkpTBReAxQsqjLzQQQouvNYwUbpw7",
  "key10": "4TfDiLGygE5HQXrsNrDrTPes21rv9rweNnBBCdD1DjTyV86gDGUoWNdHJrDwSfxvn3HZCYL63YChxcNZ4NJAFtDf",
  "key11": "3RAZ3RqhA5ST2pCz2nTpzwenzqumbD54AhtCviSkzmUuky1do8KRZWQGoS5UF7V3TctDapsYxgnYNLeowisEfqBg",
  "key12": "4vMjhAHDRHpxVhyjBq3yLr9uSPLjpWSkgP21pv4HqTJmYkRSYz7fASvkV6sYxKPLUVAfp29VHJDVnWxs9kpKSKD8",
  "key13": "2511uAt6appd1nP2YyxqVZHCyeGNj65fqeTzpKangwQidWiYkF4aZL7wMSHcpkhYr517ruyRDrHR26Xe7KqFWMHW",
  "key14": "3MgUkYtEfXJF5GUPU3dWyrbiDqBBePTFv6tc6CCPWeqDUqftKe5e4CaWPQvFZiiF6VcSLBfHRwMZ2jouHhAvTxBF",
  "key15": "24g4BB6Vmbi1k5DxQL2wN5U7WKqfoS5fvTkhD2oxEQ52iioFQSk1iejH2x1xGWHWxhTooAGzRWmcKocLj4aCTYyz",
  "key16": "2GWDP8QD24HAZmq6KuZ5xLsYqzd7tbWpVR2AKLQY7eTgaAaw6izKsKjyjvqQ92eHMy9JWLM2rWCwSqF46NNrzb4s",
  "key17": "ikCHuyTsca7PqvqB7TiL8VL21ix5dP2uqECBUXXGWuYDcF8gWMVvcEyKqNySsNvh3kzwHzfFBeMRNUYBCMsB1Mo",
  "key18": "2g8HVJvrXR6MEsAo2mgDrhudJtZRkdBW5GJK9um2YhkRZQSrgXMEAsAPHf8UwW3fCPPShFAkA847JFs1F3GbA74o",
  "key19": "3neDCdiqKca8FUsKNVo5WqsEoH1YwqecBY3V2h3ixsx7HmACdNArJ95633wV1qgnkh8NxPXxUEjsNLbDBUeEGXWe",
  "key20": "3STBnigwMhehVJ2kiKQ1oJw4j2mwzKCYPoQRBECvnPgcaCUQoZnhdPaiuk9XiTQrLgyomavAqVGcwES1ngBSZKuG",
  "key21": "iqgtSxD4yvsWb2EwAMNzJrbjrks5AYd5QNmL9sYG6mge3M7u2xN1aYVYMCsWTcCTC2WQG5g6BXpgMvcgwztgRQ2",
  "key22": "5oMVFaYQBm5H35eU1VEoRHppNxeRuoNE9TD2vNZcrr1NR7YBWsorTrJHkAPSGy6Ux5j8rnjYAYWVB1NHhfjU3Soh",
  "key23": "2eJS7tkYnSQu8bdmiWhSYrXYi6iFMcqUuiyUyCxxGS3C8yKirauPXN7xh3CKNGL6HdbVQneLFcd7ZKQ4rc9yJjs",
  "key24": "3t6h32kvGn2CFBLeKxvCNFsdv2oEVFTDDpeBQAYqBxYVpdiRWXU7djWNDY4n6wACnJXwcRJEXRQgEmRduT9DnkXq",
  "key25": "3jx4QzigotqQo3Y11baTdoWDwSBvdg3kSxX48cuyi6tvxm5qGWy8LwKQ4dtiEzVgu2Vh1gAdAHFm1yd7PQvbofqg",
  "key26": "41YXs3PMgtv7TSBnoHXdGSa559mLZRRFzrmmsCWFuiY1JZUhS4babPaPyd7ZxTSrXxEPFmjptT2PmcGFiL7Qtmic",
  "key27": "CuEucufFZvppwm9dN8jMwvx3uzJYKEwPQMZpkA9ucqXi77DX8VvZDeBbM7AaiCZGmfBnjGMoxMbJdw41A55MyKS",
  "key28": "2179kyBPDypAH9WKCUotMWNH9VGaBisTDNs6vuM5LxbfHSPJp9x1na2JAKWYvghoXYdY3KuFcph5N3rZaTEpCiv7",
  "key29": "2ThguahpvjnrKL5SD13QvLcrg374XUqfXbQtgKYRN5kJJwjN1nV6gqRFP6ckQm6o4uLbJ49v9vBe2AqzADvMur5x",
  "key30": "4igsg588Brt6fn2xbHSRZmwzT9CEPCY23jW5aMpcU5tZiRbYyk6DY5gRDUTCWtFKH22ET4zmRdU9Rk3N7UTDGzwR",
  "key31": "4iTfvJAKMfPZK6Ckim7E7ytKs5tXUjT4qbVahGuswgL3GjSwQ8q6gMmWiw8gXw46PPsfsLRyUxuDfnJBQX579aGs",
  "key32": "3MZZfCnL6bb61gY2qjbB4NLF2YmRGtZnsZkWsrd79zQWBU9qq9Fj66jvQsziXSdg6tMtYF2RZGcntkRB1LtDYqju",
  "key33": "2bDF3F1vaYC9jbHBM5kahF8xSYoGZRFryCjgSgEVpFq2GqmnKJWRMuGPhjzYEyaw2EpYE2xjF4WgVdkKtjYi8NLv",
  "key34": "3MRcuAdrvmTMdzFxwmCpvrZzLgmtcnG6y9wtCeRzrD1GfMeNwyZJd9ajuYt5G6ffUFGdhAYE8KFhQ2CHu3Ndsv5t",
  "key35": "63WZNmokrwuzVvFizRZ3acxrMLJyk3yYCuKXzyvnT1BfmorbWqw73QpHB8P3cmtoegnFXKbHMXT96L8q6LNB1DZm",
  "key36": "4hGD39mzWyzf9gwiK2G8vf13BEZbyMDHiTAH1et8mwcx8qu8FkDiuKVm3j7PBG5mDaVCzG3Vq3qd1jsxyJ1xgbyx",
  "key37": "aZtuaaTRLppjJduc4D6L2VMZgPQezGs1hVnLAzwU5Qx1ve13vSLrqqj8sYdbnCbtA5BjWPWeZrX7mb3mtoT29RT",
  "key38": "3p4Vn2i6KQA4GGF6Ftkxd9e1LCp2x7BhuyK24KGH129MjLE2m6t3iS593pRJwBHoBRphXyCk47BMAmKC2YBbRPkY",
  "key39": "39AJ8Gt9eBVDzF59JSYfwSpZVSmsAq1JuGeDPrv3za1hbNinrBjf5zn5BN9QSZ85SUvVHsBf6aQYuKVJLUdkxsck",
  "key40": "4QLK34uhZTy3Me1QLN5FaWkhXcDwpvohe6r7VmsJV4FrYagEDPdPv56rBn2GqySCW3w5nCQd1b5snUtQMe6btEBw",
  "key41": "VRMkLK6h72DsaaCtncVDMK6CZWn3BjbcBCekKQjV3TWGhJcdNKmQDgxSwTAbG3gAGjvxycBwWhSwQYLbFyLwasE",
  "key42": "2JCrUzHw45uexBZBXakFzsWD8hxqg6sYsHmmo4zSTioZHbhyG3WfJeW5BdGYoFv4B9JVZjDGWJxFphJbMz2Mbt5B",
  "key43": "4CMmcx2G3VWnAe8syfmMsyziPkrK6tNkrn71gvLVErDjy7hCBFiTAy1NGbfJK1e27CuePzpHQjPZMdnsPtNWd3r3",
  "key44": "3ydLt9zaKn5TaJdxiEbdHM7qBRKq5YMYcB6oqzERwRQMwUB3M443nkSanF611A1LwGdfPhpJBhjW6mfwBt1EWUQ9",
  "key45": "LLY2No9WGJkAFhbU2xWV9oDms2o1oBu8dxkTk3srHXVcdaDxbRRXtPjwn51SZUq6WXD6A1CRR9YpumV5J1aBJwJ",
  "key46": "2y8XfcUW1K9scbJuwCjqin62ZHHJWGFLaLKJYk5wgbPH362GLrrjd5FSia6AVaBXJqRoXcicAQNPLxxHuAuBiuso",
  "key47": "5DJfexzcHGLEaZ7VWgAxABXpq7dCWLRnAF6syUSZ4UqQQWXKbXg4S1Cxp86Fs4FhYf6YXLm1pu6Umemyim91gBsQ",
  "key48": "3p8LmrqvVPJtmo1e9xqazi66j3dQRzWPL3qxEkfwAwiTtKgwP52Ehhq5LAdNjnzrjoBFXcTqiARnCowSfcyfKsZN"
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
