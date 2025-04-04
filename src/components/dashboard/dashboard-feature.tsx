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
    "2kEnE1NGkFCsyBy2Wv1vQtKkEqZZYeTh4SEVwjVrojG4WBMRDHDxT94U1KkEudcSizk5iyKYURhQbChzNQpkUiKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rserLe9X72NBWjJvp5hwfruXTuttBEJTYu81pRiebfY2gR98YFEEimmqQ8gT9nthdZFmZTvVyc6WUJr6eq2V44T",
  "key1": "4EmdbroNtyZkz4GcErTD2CMuVdRv8zekCiPKmLzMjnswvMzyhbJa9KEoNaxMyGiSwSYZ35o4RKJ7gEMTRZXy7dQ4",
  "key2": "2o1t6cnBbpssQPU9UN35p8xUd8TaTEBu9v4RHkYkZr4tNYVpZEev7ZWimGxce3RtCrGAMPGfmWRGQb2upkqyoTfn",
  "key3": "JKozML7c2eRBuckLiBFcrdpMFQep9V8zmb2BCtFM5PRAnXicJ8msekU4pTbhoarDQHK593yPi6KGBTgdFoEmiyA",
  "key4": "4CpidmHtmHmwAxf8xgcsUFERqHsk6Eh7xmiy4tGtPNG1pNzU5fkVUi2xzcCtGiv4VAqJ8BbSWnBX4cremyavn7v2",
  "key5": "3ohBHuMkE7gmJHxqwZB1jTTr2Kq3FGFmYzZPFjLA2UWVpQ7E2p2ZU9Xduv9ZHE7K1qXdjLJn7vqMNQo47pJPmvtn",
  "key6": "41xscsYfEPfW1Qx7QAUb9UzWhixsDUJ6UKaQkwHoroTvmv9rAPdXoXyTFrZ42qhmFzujPYVjJMQp5UQUoLmyi9yz",
  "key7": "4ANvcha6Bpkg6qYmCtCShvWuEVSJe2etfvGojeDucd8GWaZx2g5s4BP638HVw2AJJwVYK9L7TB18kfsRUD47Akr1",
  "key8": "5yBFQUw1EJeyxjpvKndrqQt1towcPYJEmNUG5TCe7yq3xNYn6sVNc5niqha9JYuLQGexGaZKbr1zrdt1xUw8jNRe",
  "key9": "5Mqyvj6htGxZgFFKL7S9yXJ1HwAzCBCTVXyyU5rouvu2Kufm6q3uHS8pbpxrWRoMum3t7sKVStzhsJ7yd39bAJTY",
  "key10": "4jdoLxFcTAeFCHysVCdYXfN4ZsbdZz75H8BzJhMVDKRS5mmNXoLhS6YDi4bZ7FbZR6tLe4yd9crorj7CFnLQGWKR",
  "key11": "aGeXwfUohE56xjxNEjJHvRMyv9GT8pLVNdqwxXKdmr1qScZhKKG1s4eTfFn3SsynouAScnsQYjKNFrRiS7uhRLE",
  "key12": "2q9Tag7r8sXPSWQvhoTDNukY2unY93KKRA3fBJMBq8TvXyF68hh47KBisJE85CML78xjfxN2gJrJm1wgMZoTitgg",
  "key13": "4fZohaweikSav8truWJZB14uCsh91dEhB4kM57ZX6Q4MdQ7YTjE17ubkBQ7hveb9KxY4cBS5suPpMzCc7aazitzm",
  "key14": "4sN5X9UNJ4TepuXNK3XDJPjiVc9rw8693mXgkPKcv1TMempNMuU6CWCGVYAihLPgarsCBtfETDMvirmkANwaDDEH",
  "key15": "3xY5jYNwrbBgfLTA728s9NUo4Y9YZVVJSTLS3b9RmUXhXvZW4zYe9RNHoMmGLs9TMspi3hTZrnY7rP5HVfPT9cLZ",
  "key16": "3A6DyT5yhJMDtgKskEyHngTik2zcpKRV8KPTALN51ZZVAWxXq6etcSYcjqruwDFGjQQ1VLK1moA2mYkgSnE8TC1D",
  "key17": "4asDyjjnYa7TgD5BoyRyYho19M2bkDNZAarcMY3Q6GTdr94LC3u9KD7Q5DDYrycHf1fZrnaWj5j5waWJGz5iriwe",
  "key18": "3rga4y71hXH4J8V4VuMM8es4MSfSe6o5QDJ82Pgvdy2bxqmwhAarVUZECEJoeMnVWFZzGaCFVKQGdmusaAYWdWXE",
  "key19": "XMnudtRAtPsM2nmJFwKzjUkmopMaDgF7GUv2vbKxCHBhbdqeuqpPqdEPYxrkXiDFxhWMwhGJ8g7kDsT3VLpzgtW",
  "key20": "4xu2NtRFTopEvMoMNPU7ow8wgnJb5Ga8ncwTFKG6y5RmdXJyPr9Fx23X8j5PnrGUKXRv8RXWWKa8VWWqgoNR7tSy",
  "key21": "32WJZXXnku83wq2z2jzjQLY8goJ4az52b23449seEomzEL8nk7Fzk99KCUKKy9qiQK5Cd8vMaYkD8KzUEahvKmQP",
  "key22": "5EayvLhckLmL2pcD5CzGbas3LRzDzJ6DVhqWY2KWeSyexM4GkQWkcXnpSuTsPLoSJvq7bTwzvBNoh4kPTgPoeEno",
  "key23": "4CjMKBMfZfEQ6h4DhCDunfyJzuiatA2DKsNpdfUH1fVvisWkpCcvEv7eAEd5r6jbXzDEJqF15injw8EhSsUxh5bi",
  "key24": "2BQ1goeWhh1pEb9WKjA8NymhwFf2R8GgPA5SFfGNgV73miny9NJGnnJFeKKkSkQawDfZZNxWaPPWszdna3Cn8GjE",
  "key25": "tFUgkT3WLzSeL6EMB2eE2qfBmmcUpUQ1iYCg7zhQUVwhpmHtzVKW3Bkus6WNNsLVtJYmbk3pbzWLqizN5QdPM9T",
  "key26": "2B7m2GC4PUY9sedCczSayLV7mgW14hK6wEyajjWZQ7SLf2EPMEerPYhtjdRruUWW7BPMfStTj8jLCCKDQYpizXb1",
  "key27": "4o4NXH8GQrPinaVpiXojeWY9jJqzRm6Z3BtW6cn8JrKJ2JBnBt5gS9WaTkXkBs3QH1grn8meZoYTjHVWVNok9odd",
  "key28": "2i7TetMbUcTBy1MFfGJtKzShsuDs6u7ML9FprWZsRQKcPH55Yx2AWj1R26dwnDHc1nXbcttyJMGh34yNCz1fFEtf",
  "key29": "3mKQNxKB4N9mugwsaAPXNXbZUcjJE14PnM4P2ZCAZgayTnPhDtUMyQHrggWBpv9iGGnkazWzHBQ1M2pq1Y8r6yWY",
  "key30": "2q2VgHoV7VBtV9Jfb9JVLjEuFeTHMBFYD8vacMQqBWvF1GNcz9PbkckJ4xHHWKkHLDNqLQwfPsrZPsMQMLHR72KX"
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
