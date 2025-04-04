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
    "Tu2DQhYS6VnzYcKRfm2KNrYzzw5yT1fwad3bQdJQV6YBomKmCB41sEZyDua2cFPuBtukaJCB7FmHL9CK9EjE4JE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZgz4myvEzK2T6czJTxgVVhM6UfEmJDrikF4QSVkQAbis1MDjnjo3Tx2hWXUt39YtPt8diGAmaHoW6Q2wuEN86p",
  "key1": "4TaKUjQ6GHF2MfcarMgJQk9uRVfdCJU8pzUFi6y6dNbW1YZ8tUvDq5CvzPTgJpLfxWPYAfKDk1KJVjQTiVVz7ss7",
  "key2": "4iu1PayEDSBPxL7MPeppVSJxnvxnfk8gJpYA7ie2wHXkDjdKaDS2NBvDLNXkcaNuLUZt39uSLQ9vUVn91NV88fMY",
  "key3": "TeupWq1pX5ygonk9To6vUTUJigbyQxs5FtZPpYMgHh9JErpFVRCpKJicJDsZ5LiXKKzaPW4bDxxeLjZb8QV9p3k",
  "key4": "LnLmUM1AnJKSormP12mwfcnpML8b5RGYsn84nrwA9mjso52qRQfxZ9mX2o8CrPE2cTz2vFgqgKfGg2R7yWiotmV",
  "key5": "L9oNhaTLU1H1vn7uKbEq5qxdff2ockzTiFUxn21Boo6VNgJ9ZW3CrRtoP6aUuBrKngwBVDUBrmwWjUJKUfKm531",
  "key6": "4wvXARKa2kraEe3QqS7VfKsvXLA3J3AhS3wTiMXWiALemDp2GT219o9wATUSWWV3Mr3LV6zdMvSP6ceatGUNKz3n",
  "key7": "4h9EBtAxhgPWL3NWq6iPE3oGN7HicQKY1ZWZ7HQZ3FXXvH4QoSafGvp1w1C5veAbvMswnBzmra7DMLZpJHRArmp6",
  "key8": "4N7mciWKeqMSAnsUdiqFu2Tdi2ajvdYKqrWQGfGRiZSCnjg7jWTcvJoZ9bTDZRVYoLWNtjLrdxg5HAZ3T2kyyejr",
  "key9": "4QQPzMaq3Sw3zBRxAFW2MopATQaT387oRBbwTJjw6mHaD9THQzXU8xbpeXTfriaAC3DfSZuwvKfhJbiuwGiAqiJ5",
  "key10": "TpRdDJFmsmkvDXAmgjfUgbw7zftEzfDynvgMaUvrPUiRHghFzTxNpvc6Vw74ajf3b3DXnZPhG7h2aU7725m8p3U",
  "key11": "3yVp7YC5HGBenvrmSKEcMPFxq9haVe6Krku5ub2GFJTU1ThDEzDdpkjGQBU5uWZb53eejz5Yrxo36fhnHZtZxTn2",
  "key12": "3puTY5nXyvunVUeBE8X9HcHDjQrbws8rF2N8Lx55Yk4wuyDmTCGc7fn9rLZiBpP7ZFpkso1AwF5vR6AfCKgYdGgZ",
  "key13": "47v546QUvW1SwoJBdWWpPr5VnN61j27AU1Kf2Y1Ga2JCFxLHGPW31z8BM81Xa6vhJrceC8RYz7WK9GLTGyySHKah",
  "key14": "5n6x19bA5KXJaTfQu2DefLbVAGQ4WbMJSZiBWEnfqVYWUQHo2wojdRXcEV9Fam44dFZ8mWdDMUXkWMvXUp7dRHJU",
  "key15": "vFHpVbNjvLJiCG2MS9yhoHem9EMFK8r5JcNbEkJbZqkQ42dhyFaWws9YxDWD2XzaS4an8SY2mq6CogoD3LAVhcH",
  "key16": "M8xqExHeddgtSSWLhcp8VnYtDFrjo9GcM3xuZEm5WQrU47bT9jHsyi2LZNKeko8is86ZZXxxmn3pcCuwvcR2LCK",
  "key17": "3qs81Eo1Fbo617uUdBDQkHiBEQx1zPoji4XrbVnfLe3BpbJxMMeabFEwaVhLbJbHKAHF6BjTtQB5onoHWhE3FSRG",
  "key18": "2UY8qSd88iqKJSo6iabsaoHBatqNy2MG9t13kWSxNNLsEud5zirV5ysfAaKcXttw7pUKhMp2ogqAzYAp9hHbvDAH",
  "key19": "4t4xk6wiLFfpv6BDGK8df8bvSRa318r7yWZXxSXvwmhCLb5fDoGyTzJ6LAFgCBY2HA7ZgTsPUMzRAW2d95Y4Z7hy",
  "key20": "4VvRZVfYTunhash9tYwaRqeN4KLbt81HamVck6EsmNAvSQEfG373qnpE43QNV2uXom3urdVuxosMYpJQ6hYsSE9v",
  "key21": "2Q1nREorQiwTXWkg9MdaWQZEYRcx3awbeR2tH4mx8RS7rHqizkcxMoZ7sy4C5J2Q6P2wm7Aqr9SJomUdgPv49xBu",
  "key22": "2SJex5DSCW4YKGhsmwxHAUmg3rqkSQF8sbDpqvL1WCHcRWgDcL14YMPSUqv9rFeALEnkj4VAsHrJxMh2f9jD7kAs",
  "key23": "4jakZ9nXnBPAHHq75f6WH47xaqgJ3zu1KAJu9nFaaLgdS6PzvS7v8KYgeA79FQ8Q49VCERpUMwddkfMXZZq1fx9e",
  "key24": "4Z48eiMdAHXbfmjTvAaciYPWHmHFYYiqpXQ9zm8Lz2SmCsRzyWj5k4E8qqvL5dBNxhwXUL3E5RTMioZ2rD99trAB",
  "key25": "3xMRkBLqUpQh6gmqF8VEnx2SbhNreW3k2tMhBvN8XkuuCTS2RU7zPCs3graq79W3PVTFB7t8mfCozxxsrdCeVsyY"
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
