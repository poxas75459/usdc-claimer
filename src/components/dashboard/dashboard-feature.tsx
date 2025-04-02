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
    "5imtB1nsdR6VN69uVvMzfvN8iwktL3BnooP1pCqTLhYZAnJ3rcHD2ADmugf4u1ToMDUXCzvP7ig7WNZL4SPgDJwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43pLDpkKDzrC8ieJaTuyWovHrbubsgmNKwPEHTigPbXFC5q5iutBQzvkXUNcpvM9WseeShA1C6MwnsC61F2r99cc",
  "key1": "4DaYxx3KnXWSsy81Fn5vZU34gEbUnrRijq59L3THNmmmsUWkUPhiG2L7DXaHdK2Avnwzup7UwiVJSzvUCZcmAwpE",
  "key2": "5wicdEWWnBumkPHMGkDG363V5mNixJEZW2Mr6QzojPfVg6yuZfaSJrhT2yhr3qjwgeZ9xpvKZZqZrSP7o77oeyBY",
  "key3": "3uwsnMZugwKFi81666aTY8vrdE1sxV8T29dQDcCbznijahcrU3QNdWbfs4EtRZPnPQKMwJgwCU7PBFkoyufBKDZ5",
  "key4": "4sGhc2N7wiCc1bw3YgbgMDemeFJ3dC3b3YETDvD14bvQS5m98SdcPVCdmYBs6zZ2eVQdCmdpEXVLd6nwuHY7n9YP",
  "key5": "3LUXUSVCeJtcfBZered9SWMwhczyCDKa8EEfyLZGYxx93zzUCxao6z2hgtjckiksMcNhK4LL9XMcd41X2iwdf6ua",
  "key6": "3gF9DEzc4Azq7PoNEhf9U4LoEuXSswPhqrLcLTQJqdTPkXd6jbwtfFNJJ3oCcpstjvwTahbLehd7vzdZ7nVp8z5D",
  "key7": "3MNZDTvKMh97rsbZUMLshToiRrams4zaHZr8ezxoZEvQn6zf273xfFBgiJffwuCFUtm8JUbsKDBivPJX3wmUAcyC",
  "key8": "3h7cq9jiNvKhLV5xwZnpXVjeMBnHWTRu5w3YDkqWdnUUyPkvmGtKS6YbjydAMS6KhZUy6docEmgWgnUwfDb3Sxpm",
  "key9": "4jRPJEqvddRT7TE7fNg3FhjNW5aERHrkFreBh5bBYXGAvdT44RykduuUobXjTw7FDn6nuoDHV2a1jJ5aDo8r8J3b",
  "key10": "61y2DxQPNNcrRRBgHMnXAFCKugzuJgob8d1vSynqgbEMj1RCWQ71nonySCbUwvHz58DdcPrDKQwkUFqpRBvULn9X",
  "key11": "5PvTnzLQEzTcdXnJmJhadhPsVbvhviJLfGvLQ4d13WYHL71DBezoeHSzahpwmMykmqQLd6XE2HDmjmr6c7QEmKU6",
  "key12": "5TKsWSApYaYo9eNMEfUPyJBBmG8YVewx8CP1qM3SuMVfYFo7H15pKiPD76GnmjbptsZ7vbnxoC1EtCGkNpg1jmBP",
  "key13": "5PSy2Yfx8f81e4Fuwybwmm6UY6bAaC1B2XFpJbihynsm7zZKKsh7JFMc8jQanG8qSGy2MV51khXQ57Xexj4DMpd8",
  "key14": "65yCKqDFmsSe3oTiQruqPUcNuRwCSSUJQs4Y7VXbEFFFW97N8LgcbQq6FSKARtEofY5JpY8YRkMucvf5tciPUUSK",
  "key15": "4zp8HaLcniYbdJuWRYTPcfDGM1RVkPxPo96Cid12jnpZoLzkxsdCwaeVksyAr3nob7smPAXqtSBgX4UocDy2f4Af",
  "key16": "2GcQsLTuSij29Mu1k2ZnJprnASwQLM3RsPPcwssCqPscQpAGtks88xKiKUTQRWTmbqhiXPEqyLHiMy4B4jMtEYrL",
  "key17": "5BrgZXbgzsPbotGxmBLC5h9Q7LzuUzaDCjqmQU38LoXGj7AiCUa9qAbP6bhVv1RTYgRoDzZpMFVWj4ayozh1G2co",
  "key18": "2WSyid23pYeXnsJyieLddArhmXFobzAfD9beZBm4CWfVbRpAghZa145ScENJfGVVPmcq8wotEt8Pwh9seFyQwzSF",
  "key19": "5rNetjZcett4W9d6TsFfnkWKSi4B9wxDXgjJ4TB9nP4izfGRXLAkNxV6sA5BpBS2zizBqWEuFdJ8pxGe8wWpxBqz",
  "key20": "4Qzzysirq4fCspSxtpw996kFQSAbBa2Y8rVeDonCpEENkYuRpXKpuWgV8zqntJPW8bj1kBZ2BvbJktAGE3sPoRTw",
  "key21": "2fiHkw9s4LtEJrw9K72V8hREfZq5Yq7Q7RhB82DbcZM94nfn6XisNZD98PvSmg8Pajya1Eu7yy3E1TcgnAEWsgyQ",
  "key22": "5WJ51mFwy9RyHdwvt5ypaw69Gi7KAYEaLZ45yyCsRyR7ABAW2FUC7k8eaCb3GL4Kq5ZeVAgHqUmxaoxVhTDMbCnw",
  "key23": "3u9Son74FrqxNhZgb2unxQhDKZpMDrHW5DdARVbZbMsUSygDbiEDXynrpJB2nRQzLL92ZhCTky2uiSE7BHrx6R8s",
  "key24": "61vdHRwUrDgr4U66Du7nLsKtJzDKnx78XYMrAjwhgPGpYEmTAmzG1QyWmYwvvdVkF1r2bCdEBAWqYdYdswdeg1vK"
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
