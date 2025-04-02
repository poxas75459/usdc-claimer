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
    "4ji9jonnwgoC9hh5KmAk1xpGkj5Ee9UJqEXLg3rA9CrJb9eohH5A4XmqVW4meeAL72GxKtmVVspU2FGwhuWgUzjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oFMFEynteSFBaKko6vixo7S7xTR3rr1QNzTNsvRMmRmXdVx4aARJMuQ8of5SeQzqBdqopcQEmaMri6bieG34niN",
  "key1": "5vhfAGZ5PPbzpk7oW1T8KeYpCENQz4KHEjJbmtbji6aLX7SSNuxNinQggyzB6WYizC22WuYZ8WMfGr1mV6TagHuM",
  "key2": "5byH6scSTxwaS8wpJsKq2hoW8EgCiekFarrtJjk1Yj5eF8LsCLLiaDAsUGUPm1fHuyfdenbrsSDmY4jyFCsuJpa4",
  "key3": "5F5Ad2FZKHDdYcnyma7G6egrpK2vPbC3RNnjFZuP9aZp4cgEjjF8ygyR2zezqYjaLBB3BL3JBbxYe4LrMiCyMaVS",
  "key4": "5sno8Pp1mPhZbKS6tLmyMG7kZpSkJYo7KhiBUPRfXzjS9BUz1EDZN59k9Gm2DAP4PK4MGtQWCdajnpUGoUEsjez5",
  "key5": "5gnimykczEw8ar8DwvncS9U5hfZdPvr5Mx7SfVpL33ETr5TC2W9n8CPSML82Ci528ZBEpFj4Cdad6Y7NThT6jmCp",
  "key6": "ykmegS1iy6ppmghcUZjuFS2HsBkFm6Dk8RLtujfFt3RN77uJNyEZPbc1VhsX1dko3oji2QtmP6et7PNCbfJpnzy",
  "key7": "3Th5VDbQVAiwmAMzm9DZWZAeNzRbHsV8wfsh6wJPdQoUXg4PjPgUK6ujXyeBBbLJGi9Z3YT9RHK1odnbymh5Pu23",
  "key8": "3ZrmPbSQJhyaZM9oqGVu6BtM9nf388N9AXaEAMdciHgxR1DJrMB7A2YxefPNtJRwHtwypy1EbsfM4MwxrYQdpebk",
  "key9": "3mDr5BQAcGqo6LtShNe6xkuAZYA1VEmQhGweC4oGohNCTG4xz3Ued5JvQWuo6SShTjSzoYyWXtFNdCfRi2AjXcCq",
  "key10": "4MSa1UoVtsy7mAR65j6DhPJkkqAbhXqzb8CEGjwmmawCLNqfeJw6hToj5ghk7FWk9dHH3cFfyEzxMf1w3aJzfa54",
  "key11": "363dvAy8ZnGBTiPNuYjGxeURzNZuDJmfpCnxDayKzYQZy6AM5ivcZqXQc4hre5HVRmytqHKk1K59e5inf9UL6e6Y",
  "key12": "hhuyHtwm9eMBnmavgiHrzFJ2LjUCPh6cgRmM5qjea3ZnPUsTPJSNXKKpreDtj6q77wGzYop31YVximN66Svqxz4",
  "key13": "62jyBxf9x6vapHXuJsbS2Us4YaV2Xz3dfi17Qv3tVo8GGU8XtbzVKzeXjmT43FQK1cCWJ18tU98fFD4NnvbXyJGb",
  "key14": "2k19ZFA4jjhiojqYTZq4S1wk9KSNXiSngAB1P9jXgDe3QGqAVf28mKnKbBWrL1sTfS9b1j2tyCVDwLFc2qi5zpQj",
  "key15": "hEWGzC6ARKd4LcpFePebyvTrjrqv9MqziTZmPgJkz8yQoHfi6LhjS2Zc5fzMJPE8uCaxLPGA3pyqvAkhPQqAz2A",
  "key16": "5oEKQwuA912DXycKnveVjpN6D6uQ4gdRQF3geLyxyB1jwLBJNvAbUiNK2f1Sa7C9khGWZaASGbKQu5acs36tfRpK",
  "key17": "5jpHMSUZK6s5qbpsNnckFYE8rAtxQmuVSE7FY35y9RXLtzQox9nm7hdSCgd3GgkqpXHqu5ua4Cp28uSZkrnHPs8j",
  "key18": "3hP9CAayx4GZJiCZayTYYc1SZ4gn64TxxGKv8EpUN6662Mdu9VPTrdRA9uczLQbxnwBhwQNtuPf3q4YzAdErWCUn",
  "key19": "2Vkkjmmyj3QkgGdbp2VwN8jvo1M6xWdqkfEgHubU8xBG5x5hj1nU899NFUdUGC6vaGzvw1XEoFtEcfKFmt99w1Vq",
  "key20": "37AdSk7g6Vxt1pWQgTqNAM3F4JGBJoiiY5smqDnMfa5dBL9B6BGT32PYSSdVQZNbpvcEpk4yBfi41TUrgqnvFZUN",
  "key21": "63phLFykZ4XQ9kQduiwKvFdATNKJoY1eD8HkV5bs9xFD9dxn5YspKRGU1D9fNNWqmrgU4BmPRxYQP8pg9AbWswjT",
  "key22": "3rMm9gtQbzVYyCSLVGtC8xMfmbakck1aQUjMgUDGmwyihexakj4y5F9nKc5h8iUEd8KajDa6UFeans2wnAp2Jp8a",
  "key23": "23FsNVWPucjswrJahC1U92ZSSAH71wHHnaFcFgBf2pC9NEVdL7H28aAYZJEDPjbgT4jTSdQWkTwUhVsmLhtwA7nJ",
  "key24": "3jNoxn24PNSkAx5mLbmgPpigeQvxqcnfKP3nCX2rVEfzy1bRTKerzjxE6K1GSAfTwKfjiZWuQVUjBvwXmVKZzBmz",
  "key25": "3w4WdkuETRE53G9JX9VKdwnsbtghPaVFEvnLcXSr4sUre3GMoRVYTtSSgdUnRbLTz2D6pHX7uidMM6QoFA95r6Jp",
  "key26": "46GPbkUFqbdk7WcZvUtGRqQTyWutYo9VRepL3A69bZUXoutpwi9AVTh55FD4HJ9tD9F3SGZaTVbF7hYHvZJCudu5",
  "key27": "4NaQjE9gMwKPTjr3cr7SiaPW5fNFGb1DTwhWwtCaQSWwzBYfkVMtvpiS4k2pdGaLjm3CVVD93ZeVhP7eUghUynWf",
  "key28": "5DPRSxL4zUGUtjqikDpmf6igP49uwRwCEGBBPSSr4knBNmEez4ptbqck8Xztb5krGQbCVHrUvybGRRLA6zA5gJG5",
  "key29": "2dD6yr9EKFgWXsKZSviwUcDYwMgP7bfhq9MFWtE5j6ADrrhGYWhceD5GSACHPNmxacJyo8J9grGxv6dg5f4Tby5M",
  "key30": "FHAAvErdpXNMk7PHkCrzM6EU3VCjbrD86SkCEPVycJySDkPTT9LqEtRxh3M9zqawDKvBVWtkzuGSCfdmTU6HFkD",
  "key31": "4S3K1FKeojVnTNc6JrQuewxsZzGkctwB7HVXZ8eUrwFGGqHwikSLdnkFXec7HQEMHtK6smCMGTKN6cSFoE58pvxV",
  "key32": "67fxuXLLN72RLG1LfJ4gWA5qFWMqGT74TYAdBZTETdZPgt4LttkMTShpXrmtjyaRjy5h9wvNNpowcf8FD5VsgCpm",
  "key33": "4TFUahfzdM8rAotPaapf5AwBr9FEEqEmJtQjfdt8spksyarWNUhdJ3uRdgGuVJKztroodsQD8ygGVjZfFzbezuWJ",
  "key34": "2w9Ynj95R3RW5swiNqfRJ8kmxQiECLrFV67XHf2Ah4yGokfWrNJ57XgMddYWGD7ZMRoU7WYRRgv7Hy67e87h7U3v"
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
