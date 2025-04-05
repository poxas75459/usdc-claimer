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
    "5APee5u9UxfagefEq4vPMsqpWN1CUT4J6bUDUxzqhmQotA15KMS9bGXdagQmUbUsQxfj2zMW4C1x2iA59uTq9u3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GmsLMPGMuHkpEYEY2AbMMVTHzpGzDDorHADpMxJx2xS4HB7DAX5rSe7mJq5KFVi1nUP3vVUcFUWVUuZVbD5GQh6",
  "key1": "2TX6qCHf5rMvdWNyxxvXLVYnraSHENkr2nA2rK6ZwjgEvzBbqATbhUBL7zMH7hk7ZDMVdcd8kKFvxoS5Uydx1LqW",
  "key2": "vZxcfvtTnjJKVoET1wgXCtC28kW78KFZ5SAkZthG6vz2ZEg9QMrcFnrfQfUhYpT5TZxV68joTaMgkQtZyRvGB9d",
  "key3": "3sY4FhN5jzs7CDbxSeit6pEqx3cWUPMyxaVtPGcriVwpxi3vNjsxGLqGfggUr143udCB3jatPujJPsTvqKAahLUM",
  "key4": "4LrA9CR2vj1vzUn4z3nChcEgfKbtKuPc8utiJSJcUT5XDc5AcJ7aF9ybGqr4zQWDYpFfZ8pHob7mAY2GBzyB319W",
  "key5": "Lb9PtKHiaqUCrhRPx3GR13DkXarZ6dRyDcGreZVP89T2LuWdzL9w8ZnMptAAQMqUrWsVCb1XVb145H5tNZcbiGB",
  "key6": "4YASJMbSRsQrsRRgNpqsF1Pyw3RnB6c1JwPe4G86DXqU1pd23k1VvUZKSDXaXqdehdGYkKXcPBSYB68oYX4soFkv",
  "key7": "3c7NNmo5Me3Qbf2DQH8Uv7icwFaqtcEejWiwhmR3g1WC6iDmfQYeXUdc7rK67YorPBeM37CqjAidtBJDJytbVgUt",
  "key8": "2UgRXHADuwGDpRzDmw3YEKPm6TEkbmK4mB9RTv3AB5VGV1FDf4DQGM7p8eXAuSiMD3dbByfRNCC91bcMuMgMNnmW",
  "key9": "qEenVP56bKqDTnxRgm6iPMJ6f1n3FJSevVMr1vPTDRfzbVZG6ppX3Dq6igaYaXkZoMnb12TyxVtExQJyffqjuia",
  "key10": "3UA448e8DnLLsDWkpUkF7GKUqJdoJue3dJSSRywws4hXsrxFHFpou46UxzzHNY2qnMPC9cA1XKMrC4Y48WpnLC9Y",
  "key11": "q16mfGfU327UkU9noB3YYN4VKCYUgw8NGzypK8uUtuoqg6Pyoe3BgAy2iJWUuvdSybvmj46K14jbwZ5T3JJErpZ",
  "key12": "4gginSMcWJQ3a2x3eoewakRf4W6v1YJgooS8HDGGMCKZJPdth7XMaLzpAp21qhUzrKkXqneQbb8rBRiJEmHTGP8b",
  "key13": "5HzQTgPSUfXkA3k1bLfApyxEY14Nw6ZdMbwbBpwsbgY1NtDtkRQ5DQMSpyDFDcvprTcvZbGkFFWLrD4Wko4oKs51",
  "key14": "jBzruM7eiuPFho36n7bNuKKfBBscmES59G2tisHPVFsZXJknbv7f5ccV3WGWamVsf3PEEN72MPXT9MEFfsqTDna",
  "key15": "x6pgJkPY1pcfbQALK6HDh2wmFqerUiT3hc35eoRjbqoPPGUgtQgy5GRVg9zsBkb1XDmid8bkF7nEUNDKHammeH9",
  "key16": "61s5WuoxrEiqXiQk7EZpGzw1kfa94UAtqdZCPRZLfgisHY8xTX7CpbMroFSiAyZVcgpLp2c27aKqffmj9wGWJ2wi",
  "key17": "3HNN8YcUcbLNQ83K5j5HJSKfuYRBng1hLTqf3VNJQrebmoeueYLVsezASj2uUPUEsLd8nAgpYoYfBYeGaEmEqRvm",
  "key18": "3xiK9S2qPnT6q7vv6cStz1vjpVdHDwUkyCKnW1JzUTVw9LcJAAufTaBVcrnCp4TxZEdnjPpF4nLUAV9SMimGhgVT",
  "key19": "4MYmbEQLkVeTySLBTt3HiQWJWSQjSC4CCW8ZcqckkcKgE8YcbfJ4ezdjKNbjCJ7Dp4ybBNeGn83kZBT6d3jNwGzm",
  "key20": "9pyxzWuARn5qfx78WRdm3w5GpZrC9Fb3yBpd1Zx4QeWeMCANrsrfAVgcubfZFWERnoWeHFFPKdKZKuS1cJbn66g",
  "key21": "36Ec1WQrmJCGyuVZY9kyqhSbsfRxwMnfdQXKTUSJ3jwCvX7uGxZiCCMPDEXYaK2kNVF3Qtsjk9WnVJBmyBjy7nZb",
  "key22": "36nK2FHYFP6V6QS4oPsk48osQRrHpsCtdG371hULp8oWUynRX6nzG81umNaMuKgx4rpd8wWj1EdKpPQWzmB2WRkW",
  "key23": "3zAuUiqSAmqqdVNvYtmHMdidGc1uZwsyQvqXtgdSD6FwXjhVQxquk5MoyrFKpuTQukRkzJ3jqb427MLqhNpFBY8b",
  "key24": "4capJsg7dEVbcHYUNnbLey5zFktJBVwGpHZYiF9xjG8BVHzHG8zWzBrcQaK2A922sWJHESDBcjTosJ34SjiaBJKF"
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
