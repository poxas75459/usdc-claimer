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
    "5zbXYZNzzY9uSTe3yAAiZQEPU7ZKPsFT2W93RR7Ed5bfKPXEcGiMvA4e186fwxiTj6pWsdhHpsCYMcTDqZBxRqpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k2LgFiXbrP4kMxaNKjEPsW5zQ3tE4rKejV2iB5DBssqK1ScsFNTex2boJVnBpAa27UJ2KpniAxWfXAQL4JY4WYG",
  "key1": "2tpUoooANBMk3Vik3S9YACcs2JvRX1y9oMCnyvciruGcigRv4xNBq82BBsu5y9BemEZDHvPP8Ar5KBVtqjLABAjQ",
  "key2": "E9v3P6JQrr5cSfUFK34Dy7iY5xvFSui4HjwLe3wY7JujxBZQtURxM3sFd9m7XRxqro9xtuUX94vC3hK2tqGjzWK",
  "key3": "2MBovcvBRQUmVrva3sNfaiXJGgmy2fT1mNb7t9abPRzviKheqNLBk6ivVbWRyh9VAuzwag6vFrcp2RzHKFaMor2s",
  "key4": "4frZuJ4soyo878DMGZ6MgBJTwHmmDGz6pXkqjes9xWHsYRpYumFc95X5xyuoyH2VSGxp6oxCTSEksSjnacsaQVje",
  "key5": "TbaUL6WLEsjkNBuVUJkcQkbG4XqPurhY75kFewHPGWzpRDPg2mGYYGB6jmKJSdmcCf7e9tWpg6g6BmYVHQTjFdC",
  "key6": "2KzBDaxgNvrFUGmkXjhJq63onqgHsRUX7Ze9jy7sft7cXyE7RhF1TreMGdj3gzAjb6dJrqYH9PxdHtANSESw8W3Z",
  "key7": "3k2PVLjaksfUUFQJLQnmeNybwCAQ26dpivcWDw3xqaA7W4huWE8B3JBxpHzRhx7iVp7FM39D3kMrzJXm3wvttXQp",
  "key8": "4HUhtFJXnFgfbQsmEA4ubiGedpBMdh8vYg5U2eLsdvJPLNhzhfyuQej921XjZ3GCpaWKBJPjuVhLKfsPKyYrZ7My",
  "key9": "35Lhss8yib1UURNQ4KgQK5FL6XHkckxj9sxFM8HGXTXnbMMkGx6bn6ftAgmR8mE6A98xPmiSK6yii2xQL8Maeo16",
  "key10": "D2PoGNS8asKyTZ7iEuJm8RX5hox1LtSXZvBnAn1QiHwBKArcAAo48U9x31jkG1t4ik8ykKxnYBQPyFzwkzcFw8f",
  "key11": "298BAc3Rnba2XrvwaRC621uKh6UiPMV6Wis4aTHA6zF14TsKuVjhkxAk6zbWEQ3eGQryVFWa8pa97gBLqQnbjKe5",
  "key12": "3jJnosZi6cfo4wgcERJFKaMeKkZnmwxtMjCegWwvXsaNYq6Dtz8D2tsmVV65gDmgS1oKBzJBtXxvLinENzc7i9z6",
  "key13": "55rXs887FQT292WKECe6SgDLdxu3D1BoBGVkDr8tkBbzgGZ3dMb6isZV5bi5pjrMumeCmDhHAJL3B9c4NUpGXH7F",
  "key14": "394J3oiQPvsJJwQhwpLNZ2SqceZkFRoN2nQL8eKReLZY7iDCueCKaEv5a83Z8NevS76Z2Y2TT4rtYPPmCraqnsvp",
  "key15": "3v9M1GfxsbA2UVnnbJ2oyqanXAuwAqDz2BWDzYjDznFPifp7bKEEaz4W8V3Sxm1WAHHz5BMx5NbtdftBpAEnw5hg",
  "key16": "4NTor5nCiioGR7ZXiZUAN15hBpXf1ajWdYK3yRH1o5ovbCwDmqa9dzSf35stCz94cePkJcwsmPgkjJfs4MrPcXEo",
  "key17": "wd6rrScuFGPmkccNug8YxrbKHYFL77T4XWwxJRv1WB2LQpLGKtLtGEGHZaKaT62jeT7kmBcdYLAwNkku52GFPf4",
  "key18": "4srBBac1duNbQBR2ZaNS7VcwyMpj4iRRHetVMAndH4xp4e9GVCbWnaasnY4ucAL3V9EhrXJhd5PhRP2e1oRwDYfQ",
  "key19": "4XXU5auQqni42vV77WmJ7AegGNorytWd46b7npKW8148x6jBBjSp7GeDGLb1G2Bvhzga7G82uovhx2vm7onUfPgf",
  "key20": "5iLYSuzm2MgJn6cvHTnrHBh1btJSz2bsxc18tznVpaNLi3tHpVJE8n2KBomwgFUQFnDQSrS6YevMJMmFtoFh5gc3",
  "key21": "qTW1HED9tTmeMV8pFF1e5iJqvDegTuvJWriBP9C3CmBVR85ruqivMwicvFhV75hj9mfYvukduYPKzoapiGqyHMB",
  "key22": "4tDi8QoCK8zS2JrKXGYgts4yitFkHCRR2xL3qFbnRauaCBuLSTgZVHfubaUzzwJabzB4iwpdTP542QxsC1nrRyrc",
  "key23": "2ctX1hn4zi76qqPSR33dhgxCo8YTxdD4QPuhYD21GRD7pM6jdT6b4vSH2Y5DJuswmTiJDEKYrkxUKKr4PWaMKVBD",
  "key24": "67r7TU6wVaDSLQHaEKQPaeEhms4AVkhCEZZGGLzn6L9WinyLogSPyW7UvdeLiZdWLHZyYUK2dqToWTwq7uFM6BBi",
  "key25": "Gq6Lw4Mff38GE7jewdFtCUusM5LgDBL6pqHJugdXfqi7v4e3dLvFzRqAmd33frbKtG5nik7t7khTdiKScfckN4v",
  "key26": "3B4wAjiNtZKs1RzhVS5kH9WhJp2Ef937eeRi1PZAaxSbALeuu9QVgvP2BNfibU4YwtYiny7kiT8q3poTiVceWhVN",
  "key27": "2xLrV1kPcYUDs8pXod2TiJBo6bEmn79YjLKe2o8e5t4b6C99ToCi6DbtQnrSm4PNXfJAukuRc9bZShzQjop1C3vz",
  "key28": "29KmDu89Qyw4rCMBAme6i3L8WS3UQm4ZWqucWSfWMF2YSFiGmZgW3gx2XpyW2Q4yDQUHeAYrAtRM1D69EBrP1DvP",
  "key29": "8pgkzqNQqFWr23Lqd7WVAoKcUsUyUYPiPCWiyPrPyZGvoRMMrTfCaj3W1r5H3QwNp2W2577FEWi7Yd6kJYKPD4m",
  "key30": "xqF7KSLsyhK5Umo2uAVjcr6aEi8QRDy5EUjuWu3fE7vH9cmMKaoUJEqHPB8ZxkCeC7L8i4XAa2CNn7RdkUMCwyY",
  "key31": "4WYA6rnpEjKDAyDJbPztq8Yuq7MQQxkJUdeDgnmTBou2t17twKkLpxAW9nBuXwdmCDfdnHSz5JiNeY2XF3DxAT3C",
  "key32": "3GCJF7xVhRkqP8hTxk6Qz3QbzEeW8y44GSicAW96sdiSdFNXZvbv3qDpANiibbZpGgP5uyQDC2Vr2GnbpcH6Wg8j",
  "key33": "4Kisj37TGNrNukaXuLvuZxPjrTX1NDq9EGi2YeVgbfDiujgopSfc9PZ9vMZbscwSn2GGjvFvaHsKYDtfe4qY2kM2"
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
