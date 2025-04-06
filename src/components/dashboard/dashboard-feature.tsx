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
    "543k3SSdakBehUyhmWVP5cW75xMQ3NqjQFjaHiTa9d8gcxad1k4BjzkNwSRn5BKHx2fRt1D35v96Fragf8jZJVyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6hL8V3LhmwZBbKXx4MZzyKuHQkYEYhkAGmx4niYRnA4tjGQCi3T2DgJHmXz4FRfYQ5gP8DGDvvvpK6e6BMLZdcX",
  "key1": "fQoGusfkYb7keVwNjZ2TaEMAJ2AoL5PKj59tBCfemR9R1M4exUmEC6aQShQ1RxZ23wpyuAfRUmauJqKJcGXmWWz",
  "key2": "HHT8ZM79ao6LtFTyqsRMXubopCTmKJiKPX1aHRmrkn2Jejx8Empz9kSNo985ZqJBESonS6PbRNoJRTui3PbNXzG",
  "key3": "2zQkHSrAgw9byXnajZYQL6b8xArbkiqEDrUQogxHYC4Sry2DT7AT4HPyDbZUro9eZNqHKfDscZ29r6QLPgVHHpAQ",
  "key4": "5QLENrGEbTCynvPXtsByYp9cmKLAyL6kPGxq4bwjUR3k4D5LtDdfjxaSsKSUbSE8iL2JUys6vceGfPyFnLEDRqHK",
  "key5": "3SAkVxSuXfzBieEPCo8QXJL9jB7L5kAvsueo9J4pYp4VWuMiJNB9cVKc8TFV2Nw9hLyg4Hhz4As5gSFZYfJgveL9",
  "key6": "3bK3zkkqg7qfe4uQqqsJCp4YyqTc5kpUn36ZRM9z1kV3jAV3uweUoiJ8ZnLgR7dRdcVbCoSk9LR9LExdJqUAJ7EY",
  "key7": "5oYAFaSw2RZYvmnh4PKAEL2gsgHXSt9m3nHVLE2JK1jujYW4KrNhNwPdNfeAbQPguYJscaLX3viW5DxU2NWnP3ny",
  "key8": "61c7fvz6bPbpuzuEoSx87cYvmwnppRGUd691i5e4BbZXpXutPULWFSXAXJh9HzPtkztNEdXTzuRjPf8mCLJcdJud",
  "key9": "3tZpm1nofGEAc8Prh1tAX54QWkKfUiceMxN8atwxzMRqByvWgMbdJPXLaFjU4G9zmKCrxiFAnA9KP8u3pwWJCAuL",
  "key10": "J4cQoTpcGyGBpXS5XzdJHproYYBak9Gh4gZ1s1h9qUL3cWpQaLWkGiNkp5qBBYeVfhN7ADKCCWsPm49FTcsHTsR",
  "key11": "5p92mKBPdqsvc3PR2SyqMw53VPehtswZR8q2KkZRPBWk7a3AeVJHKmBkeJYrQhBYDaSk7j7PPpBnyu29f4DtUxEr",
  "key12": "3jvPjrpPvaSw7o1TM9LaajhMo3jCBeUtBLdEAaWowtisnWeUGkBy6A13ciH27VgoyMFJPw8WMPbZpUGQYVTbmtLE",
  "key13": "35gf5m8TQu6tticJwEcv8Lr1xQbqa85kwSRyDtkynJoav5ne98aBvTrKah7ioeAaX13ZKA3FmaUVtHhLXx8p3PBN",
  "key14": "3dcCwpyiV2rE2deqXzERFDLKejAEsSntdX5UyqqzakXYL1JbYmhywjQtNkXfQ56WTqt14gJe113oJQcA1qwQ9NE4",
  "key15": "64vCUKn4tPmnvKjsWWT38FPsSn9fo3F98dQmdHuXPMC3w48ZEoRz4VTxJ4Nt6jjWmMRoD4N9wmCBWf2opBr5dyrb",
  "key16": "5115CDfa9DA7ixVGubUaGi4VYwwBxkzS4Mx24uA4XQvXmZbb7HjqekYTh8Jgg8AaAFAXx1VHriGiEWLo7MyTuwK2",
  "key17": "33J2pcRQ6PZBANdnKKmdJUk3NGkgYaWgMcGSWHcY2vmEBy3h9dUABuVQWHCPJDnNJAJB3vhgWn5qk2XyKqYd5yqo",
  "key18": "28WxG55aQ3aDqvy2UPo6684a69QQHXRa3Bhg2z1QFBLQSAeuu6DUvKm94f8SYuSK2VyFrkQiHd3Aon37itjuyQx1",
  "key19": "3HfnAkokR2Jc6ZN8znDR2sgnF2uzUS3wQzBLT6qDtfgyECW2hPQoP8PhiQxeThX6TAjCmSQCp6eJ6btBBdRRHg5A",
  "key20": "4TeRMeyjQ2FWXp46E59urkT8cTGdvghvR4Viy2HuaQQVJ2iLea2yKQPRX1FHh8xvNgozBK4uDKYsTmh9ArdWNx2V",
  "key21": "5d1GgHe3uw8UQ9v79eRET2JAg2wCuTXU2pL6SQQad1hr9pewqC2CkC3QuyCnzGvKtAByzsBWTY66KuVdC9u31rLD",
  "key22": "3zU1iw2PFjWa9PNZDd2pfm21XAQQsxX2JHbeka9VDzyjkvqX3Rt7PjR5NEvUgxh9kbmHeDg9XZc22JZsDC97yiLv",
  "key23": "3X7nuKUdgeXhuy9sfueFBPiA3EXoXP986tjkQykmKThYTbzYv1eKK5bhjw5nSvLwR9kPxgcV1joTCw7eAr7iMoE6",
  "key24": "5wjbndgcTt182oV7jNSS94sHhTcHWvXBq6unDqSALTRHNntmcb83JFufFV5c91gDiagGqc5xfoasLU2onMumQcD9",
  "key25": "HiNwRWJmLyaGjN29Kqex9881ZH7WPGezubyN89KHyZ7EcxGw6ibjfyD9HDVxUa6aAxaZbKgotttbk1GsA8YNuRd",
  "key26": "2nk4fW1DfMCmF62HxZ9oehV7kDjSxxkUdRhwTwtFchKbuv63FX1VqNRt9xvkeSr4RoRPHuPVVfgkc3ySMp4N5L38",
  "key27": "2tKwgivGpvW97YLRPcJ6MQLzcJiABRjpXZUNUbpny7CA9aHwfenMyU5vbFJy3AMwGxCpSittJJXHKgBViJiJ5XPf"
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
