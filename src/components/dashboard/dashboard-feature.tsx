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
    "661Y6cfyQvqb1BWGJvK6YA9aMrgvQs6CaiuuLURQLzGnWja4hWJzoSY8NSVjt6yB6dsi5goz5sndAjC82cP6qEuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FMxSiYMvnjGosBBPZFhnMcySUjwgwB21RVNAHtnpAKtq7Ca5zrF4fjLwqmYvqUj7vURYwsrh8Bbu1ejDgkjSVfL",
  "key1": "3aZ96cnefrLAfm6Kd7HF1t2Pr9QMWgJgm4PrdT9pZwwnxNyDP79GRtDVdeECYAEQmJXghnvEjxtd5zgTnkftb67i",
  "key2": "4eBmWMmYaxV1qJXH71SpX9aJtAvqBtZYkAVPdfMgms1Dqy7R1jUoS6qc2G2koe2LMaWsNkfqfuXsCGA1K8E4Ff4p",
  "key3": "2BkeNSzZsMYGFvhW6L7EC9PpGcyNeXrh1KzTWxovd9RQBeWvVD2w2xJR1WUfn2mL23BgBmboqvKKfLhq6DGFL8XZ",
  "key4": "3Xdo19fJ39Hs5wDmiPkyPzB2uevtSqa9sjBLsqdU9GQRh4xR3ZG58fc8ERKFoofV2SBveGRwVmawewTibkQVrCsK",
  "key5": "22VZiiGEnoszrDRFncJ2K8ZCXKeZki2RaDE6GpaoK14gM8f9NNVcK41phB8xWVLQpc9YsPqgJz2zWd9Pk5VdyYa2",
  "key6": "JG9XJJPQoMjELoB3YyNpzRr3vrJ9rwpEstMEZcnVTm4drF3ubaS97J1DQGkuzPzgSvvGvDRLK1xmz4JYMBgYqbJ",
  "key7": "4o2fbXiHuc7th9TYdoPjDhXkgNb6N4UdidnqRhNK1kP4AtHgiiwAem6kxpVNVSMv2MDtaKp2soWCniejKCQKXqZX",
  "key8": "4rQzAocVMh9rVWNnZ7Bt9rdmFPuANihrybkrNfbogKQfcyA3h5eqAwAzSRthK3QzJyLhJrRx2cAPbS3Rk2Z71Wd6",
  "key9": "33odHRkKDkjyE2nPbfU4vriNRsfAtu9PKoEgd9WiXadUVPoK9aUj5wMQkUKBCC437fAyJC7y619w4KLpjDW5oBdb",
  "key10": "5jSTunEXs38AjaaXmYs6Us2soXCJQerv9CLsksgToj3ti4GgRX2WmpjarfHxDcrBUCJRciMA65aBwR4FeoT9Jo3S",
  "key11": "3FUSM9E7d6gBrr2LLoEBLZMAURZMwpJjqAociDeJ6cDf6tSwyFo6fCFF2UbsSn5D7hAHwzWM37vEYmBJJUwx51pr",
  "key12": "Sqs4weKHuwS6uVyQMi2noowDRYfrpmHay5g1iaZu9ge2tw4sABQbeBzuyX6EGMstZfUka3YHRRgGvZx9EEAJquF",
  "key13": "2Hw5RZaJFa21tPMYsx7cmdHV3eFkzxFdfXQLgJG2XqaNyJtfskXunK2aVFCcxvpo5WYA9G44KcksUpxGXLsqkkTF",
  "key14": "56dzJMoJYd1u1wdNL4eGRwqGHrc57dr9FHrMG6uazRkNRtrQ7Jn5qgUMLMCFhNPLYBgBkahnqirx5ERTcdCmu9k2",
  "key15": "4T5T8ka1FWeqV3aynG2hRUzaRygVxUaYvXt11Qja77oALMTA6nTibMjKhjJL8irjP7RpeEiepwstCsZMypFeFC8o",
  "key16": "3zrs49wfNBp2yo8xsUVFXFnqXqTrLg7muvuxryEta326GyRxCk2XHnnDnbMU3TxxEFi4tswgB4VahySDaUWAPERu",
  "key17": "L5vhCpxgeJhzw7ZbvbWhNipYqdW6k6bCUPo6ji3d8DLqekZPhV5wcoW2UXVCtgLQvRsUQM7Sd9mrrwBv29Wc9Ls",
  "key18": "3xHrAMTwhbvmogLik8GZ3Npn9Pzu7zPcwVs1rTsoGJwq75i4YYirHDSsdXtFmunoQpjNezScfNxPCVTRj49rcvgm",
  "key19": "5tb5soG1kG4vzoq7fcZZwu9T7WdfpABLNehsxG4W3huoiGnj3Dpi2DPhWMgMZzMNKJXQtELKeZy4ZkN9PMgV9pB6",
  "key20": "2Mp4T8MQe6Sg22VPxAzH12RHXBHSYMLCvho35bfoBL34FnZBbypMaJjuF9wLRQHJnuggPYbBm6oztWk1uMzBqdJ7",
  "key21": "382WeZAmj6FGWvaSGBKKjNTRSwypc5W2tdZVGmEWZL8Hd3EscPqFqgQfpY1ZZ5Aho7ZxK9Nb1jHJoCgXh7yD4JCT",
  "key22": "3y3UU55kJfWMjv8wFa4piFZnwsyTsgJMrZq4e1NojoENoR9Hk94rLBd9qZSe8Ky84Dpbc6VDUSSj6FWSadeqpEU9",
  "key23": "po9Z3PaFzPwKkKJnjGK8zqkifwVCKo1jxA3CVKvFSqsJkG5Up14YXeaKzLfJtLxsyzNoa9GVT75dkoXXhNcYGbg",
  "key24": "27VJsaJL4qY2nM538cDisL52MQHwDKPRY4YAfLKZNRSWxH6KBb3JGApoYnZWVXFysqT18UtRzYbp8raRUhMuRuVH",
  "key25": "1BvpUhnTGHGrcZhGyWrWJei4yUeoZ5wiaTCgey71tj88aty3S7xJaxEH6KPHyrMkUwNxYu6qW5JiT4ox7b2UU9f",
  "key26": "5PFdRsH7fCcy7efuPoiydNAp65MUu9xa6fpDg8ispttHwJqoMGKTwayeKwpzJ3g1WZ3TEiWAFmR1XqUPtSppEjwp",
  "key27": "4uayhAVhLtNJhBiXEU1J41o9Z8svviyoVQ3zcs17GKZMRaUFqSXJMoLskgEGB2xzukU7hTkHGZg4tU8CMHCCxTGb"
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
