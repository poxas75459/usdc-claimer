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
    "35th1LXNVSFmCk2Ujn2kykatWT5JPCFXhv1Zqo2uu3VbuV76fA2hqR8ijZ1axM9SBGQdoHsrnhbfzFuhTy5WKSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3snbr6ke6Hkpv8RqYxb1uhw6WovyrwgjSZu6fYamoCd3UvaxXaMLaQn7NdVtzBqumDynd4fh3wCbSuKMcbwx52n",
  "key1": "5W7zhGFKNdcN65AMPBxPBjAYzxkeA4yaL1a9Epv2zKrVMwwf9QLadrc3GvzKuKtGU2iGwMHuPzCi1gm4qFg4gTmk",
  "key2": "3rXT5vEFEUrxgFqo4VSGFTPWsLPqCLQzeHX43gKtQU1GT2Kv8DqAw3wu2XU4HzZTAvYZzEKUoyT66w5UNq6s59f",
  "key3": "3pxmRGw3xE6kDHr2PYwYwaH4viCXmF14hvSbsAmu1HzVzfQSzctq2QGmVDDSmboGhvArMPA8eZVBVDBAcfMhznGY",
  "key4": "2QVTYfcJUCfphfyntgEwqyrLeFmY44f1V4qXWh53tcx8isYvKMcjdczZoWuYs5pM6u6jW2VHp9Nwscm3PGMETrMW",
  "key5": "5keXRoj7sM6ykUNdQgEeemgtLbSWg1aFTN6ZauBcoZXSd7TrwQJsfzsVTP1BPbcvUd5D9tpUbYBsekoRcqr9Qbn",
  "key6": "643qSTDhHbYxUKyHeLpw5dcXGzP6mNZDZobrZNuFXKWXXnveYjom7hKDuaah7F1Lj8vPohvzNJ9rmzPhB7Dk9knc",
  "key7": "3Z69VXh94emV3mmGMA6Hc3giMzQYgW9vkKHFXCdqZBfrMXaA5mrjmjoAc4hGijnYEDjA9gKHyWhBHMewuLueNTH4",
  "key8": "C6vcJwrkvwFvniQYUTZQKKYNpE7ZZ6St7hbwZyud7yaHn9Wa8RwE21WVSe3bFFym1KdRQwAtctiZBZ9pCyDSbaF",
  "key9": "o1UF2CnwFfVeckzbupbsxhXFK7FRFz4ok2LS8cMR99wzhQf2rgX5WFE2xWrdxiJgMSme1YoUg93bLTumsC8c9EH",
  "key10": "621ZKMrD8agHKHr8uhqjetK89QYsCN7Hi8vpHTh53V7PJLxHcbgDcFK2XfrafFGdG2SUufrYjEok4mr7wgLfuNpv",
  "key11": "5MVaQFBHkYrEYaN2iAJci9JgN2LaGdPnFamhN5nL7CrKByZ4VKWjZNKE2spE5hesQrxSHTTHjMPuFVgT9oMx9S7x",
  "key12": "TX5N2ddeyksjYVjPMqq4GsKkK9xYL1yKLYi2ucSdYCWxgLAyqX452mRRBi1fPhcPv4SB5bR6vqJFxFsevszJVSs",
  "key13": "3obhLZMMtZcPRwxbi2QWA1jxgaggX7zcbZuTNraDwL7DArWi64cyoszq8hvgJCh8gaP6UvXnmXXJEENozTBDRNEe",
  "key14": "427CVpPGfhZoguTbT5nCS1QZeZTH9zBXYjEMUuu5hRwNMs2xwhwVk9fSEjG1QMfxizLY5Wo3BL1Wa7qanYJgnHRK",
  "key15": "5TttBXJ7qBbuztz2hfNrpQ4zbzj7NDBjrhNrawGvjtr7Uv26w7MB55rtpu1MVTDUNq2y6PWvTJFWEuB5PUmyEfrL",
  "key16": "5oLBTdHv1tZ6N5reWgYJBF6JrVYXkKHg9PRdb9xtzb4Y4KYD5rupxUAyvFCiJrEptSLcVusUAgRS5qLfG8MQREyd",
  "key17": "4ddrgjuLDBGYweAXNWuzzUmZma6heWtjKaA6U2GGPE1VoniVnMynn51Bbw8XL6y23AJiTTuYKtQ9TrTHyYNUuoDc",
  "key18": "38oG7aj47qbLLwS4yvARQbi43Wgmpqmx4yqKhSgx5Chz4JwynJKtdPevYXc69pUab9tvtoUBQgcH2e4UTZKBJ9Da",
  "key19": "HDfB3RMmwtfseHBzGiS5kqgnGoeuAcmVBekmxoBSRCuaRbfYFhxDNuTVKHVLgfV5Ab2isPbv3aw6YUc1DG7vRqg",
  "key20": "3CW5r487RKgJTAucySfSpjCHKPDDWfz9Ex23XnvQQEAHfJJ22Uq7K6bzSSrwiPz9T6XGphofqMb3NQctGUqkfoGF",
  "key21": "3FLgMnmurZd8ufMoK4roTPEmUBKN7XF781koLDRZZGSu7rZsXPMLzwka1CPaVeHZtsK4QbYGbBfbC9G1h7UkGYQU",
  "key22": "5yHv8vUuFyYZpucCBe1yiipqr9bLvCXotJNqJUjUksrjkGRmmgcpLYhwZA1fe7Bs6CBs9NYAdvqF5iqFHNqokuTw",
  "key23": "3sRrmfffxhfWirxJKFGtkuGfK39rpnkFL3db4A5g1cjNbLSgR9JwahXQtXRvdEUxXVArAxmvwNvHy2354ZFDVx5n",
  "key24": "ZXgpYqsZ3yCBn5gC2uzsNmRzJZm9tkMmJyCKJXuC2ajEo6Y3N1LuEtASkQrgdBbvQZzHqpra2MxxoR5SFaEGrNE",
  "key25": "YiXgDpiPadoHQSjEf56ZFuntEGf2ZsAqYUrLS7m2rxSXrhZzq3D3gZvg8bDpP6BT1j8y43uyNpYPGGMocaAtV5L",
  "key26": "4TCZcsWgDELDaSV8VbHqrsGvp7DTHbg9nagtSQsVxxamia6As3eKR6cJZqvX3AK9HAEzoze8bb6iaQp29rTtfUkA"
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
