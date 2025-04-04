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
    "4w4P4BLdEs6pknkTHnZNGzZ7m4HcDEWEAsJZsTUnJVGDt2mjDtC4DvBPJSZAQ6Xi3U4KocCCZvWENFaE6SrX1CXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tT3prz1Ju416JZi4mEnNXnnKxEgapWMtdneuhLLrHnymhqPCgMe1KTcBSkv2tLzVERQg12SoXsZYxTGH3LENBiQ",
  "key1": "21DL9ymkeuxRBzEbfBmaViHqo7AsLChPddBsvtcKZPzQEH82qsmNKMK7hA8j7a2XvuX641FHDLQi49upNiRsbeUm",
  "key2": "dnY3cHajsuUuHUJuc5ReZpUrg52dSKmQ8pPuz6JGUt69LAtKfeWuE3HYfeK56sdcqvQMWs2sFCwXN6ZiXqb7eNv",
  "key3": "3zrdYSQ9391wmfqbnqXstCjTJ2pJwNJVBn9EMn4ev9w41jFt7ShoHd8vq4TaFYtR3hHaPB9s6RChMU1WrvYpYxzL",
  "key4": "4HbfW1kxUKGj7J9SZj6oJ1p2A4WtpdBDXfJZ8qxeQoUvtmyG4LzqNQoKTEdQHNg1nZjSEr6bid8HicwzFmxSdnh5",
  "key5": "4PzeuQBs6pw2Z71so5wVopwjGMQVwARyd9ACttYiN5ZwKxz6tRZx6UuYKMM3wTjyPXZoppmTA9xoq1Jnt8vdnrpY",
  "key6": "LX4zhN2cwj5LfZCPjZxwC7RT44CMhiaVSet6tR4SCUL4mBpSLL1KVxp4VpjQM59foUvQPToHrnYzvDzWofZ7Do1",
  "key7": "iQ6KXV3Hvuaoat5USmhFHDZWPmEdYtkRivXgTjoTcU8K4pWo3Chki6zGhm6oENJLmXeg67BUube57xJcttEAjdj",
  "key8": "4Sj3EWuAPnvEULzFB8Hd4DDp5S9HaYKdAAw9oh6as3WQ2qS6N3fGD3rx8NnxGGHxfdYZ3Dt91Tnu5yRZ9HwJ8eKz",
  "key9": "3yPwYGPLcfCjcdoAh41xKr4pMcmkvsDmuf5W81NjWo21nvhDyF89SV97Boc7UkSt7E6eAVGHTkcrWF6hMvoU47WY",
  "key10": "3tnePhnwBnLK1y7JGEW9QvyQYhdeWw5uE9Mxfp3XWcvMKkhFtaw8v2xmJHByebZ99PTDoACAeAsk2oGm3N85mdJz",
  "key11": "CwKZGNebmtHbVm3EjnPjJx8DbfeUA9SG3QosCtndCoRWAerr2HFLGbNdemkCmi4g8pRn3oVZpWENXvKytMJyVqp",
  "key12": "TowRq1FiF6M5LnVskxzEJ6KhviZa7HYyTRnvMQtxQP8MVXcCsp1bdgfHARUwjcW9QJhU7Z6qCgTJ7Ws2aJ6LFdN",
  "key13": "3mx7QEVpNmjKsX36ytuZCDVCywaVpwrU7fcPKMtRsJ9kqjQAdXsE7hs9yMa6teuVqR1odKd9hRCcXuCApkfgj6tH",
  "key14": "4rdrTC5oaNgztCe2ap6p8A88SQUaCC2KUAR24Bocrvtafx2FHtvH57CExosYgUcqAx2YTCt9GXM73e5pvCvVwCoC",
  "key15": "BrGpPfJk64tC5xo2eLdxxEUqxq6pC8ARhmQE4EB7WZypJBuNzCWAZQSVSA32dssAuf39WPdfsUiYHFAMXhys4E2",
  "key16": "3MKyDiWtE1rFwCo2krELxfK4KhyMRDyTSWCM72cW7o3vw7R9rjFSU2pJCg4ykpKj8sVKdE47EJBdrNCBmSJ1R8gi",
  "key17": "5CAhv6J4E7SHMtyFWuTzdEPP8DpkuZEWQFoG2DDDXh3fCh7mH5jD9dJS2ysXLP3sWaPdcjXovtuutZT6LrMaQcKQ",
  "key18": "36VnJytKxXgyqqSb5U43VkgSYUMxH2hCo5vLePvYeGiEph7CJfX9qqdnewQHaXPzLbJ8FQAVPXfqeq4KRzn6CPZ3",
  "key19": "2jYPi9ze3weJ9ZAMvK5maYUGybfzoLonYpkVLn2dWJEWYrQWo63JY9UkAsHvR67bnRTGfQGtM4Az3ZWdfsZVZTDk",
  "key20": "49pgMnZ2GMWShb9sRuZ1nJQgfEiMYAKCtYmJ6ABoYQYUe947dco9yzW1Q5LosgDJ5eXE8zMhFbPm7ZtfA8RrD2sc",
  "key21": "4HQXQBYt4Ud13xh2dmT8iYkd3yhKXemSTou36pwbFifYiTjFTVhsHkz5gPJrSmnajv8LSrpAvwEMqMXX3hFg1WLe",
  "key22": "RqYaxtLh1wa9AuGFdCKjXyJiwMif5eiG5YsrGnqK6DMBTpRonyA1ViTF3cyuCUPS5pRYhymrdAZpB2BYDebAti8",
  "key23": "2eD16bFny2q3chbr2aSRBmA3A2SZFASnGc5cXDK4HYAjxNec4cZUP1ttvqUCvhbRmeXCSTRKpBWmojQ2KNESXpW6",
  "key24": "ChbnY2wW3J85SSPZtLzWtGMRitEdQqLcpebNHxKk9BEqJm9k2KPSFPJdbvY2xyv8yhEDAj72CKkBcVPoMsCaR9E",
  "key25": "4RGSeirWuMPmtxjU4JKFDnGBxYAH8VZxVrGyKWNb6vFRdqigp6ZoqAWmVkNf2NMxNgokFsytec4WiQjVmj6FWhtp",
  "key26": "54e9aJHFmGuUXxQtghwtgNBSpg4nb1yveNvwkUhPvNmioP6EFeNg3C2NSM9ouFxi5J4hqzp4BBMfbrdBffLG57qF",
  "key27": "LqsgsSQYMN3KbNZEHeQH8BYDXy4XAgruvtixpmHgn4pAGVWXx5xrmcSzvgjZ71daoH2QULxLo5uD73RbvQ4VQ8q",
  "key28": "5UdHZ8HDN7RcRjuEkFazuUdN29C1x4JrmE1VRv8MUGeeeF7p7Jbch78z7dwYZxDzHHUfJYhymnTupqdmr66wgJAq"
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
