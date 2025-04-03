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
    "4JwAPtRxvHL3AaR4zfb5tkXJqsWBxq6bP5hA9McW2uzbyGu377phoBk4vavyWDPxHiDk87TepUbbzBpN4dkAEtpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38oPTeGFZKm7fMn9R6SDpv6B9jrEPrv9X8Bqnf1Sf1ijjjJkAtsN19iuq2WTfScb6BgLYwDvEEfqyo9eaDXBKiv1",
  "key1": "3GaxMPSzArgWMvmV4UFEoSspVDkmCGtsRMTGX6jCtqVr8DvRhApiWbGRZqyU8PKDuHKCssS1rJ1jnEaRUBGgpZjD",
  "key2": "3bf3HUMhVrLG9h8N1fCYKmPM2vLzwJXzaGNAefFrcGQg7nxgDitGdugDHLzY6ANNxa9MFmxUJbjoHDDScAaWtGdC",
  "key3": "5bhY3nZQZnQVkdkhFi1hL5K99h72qUkbeoEcLxm4FX6xQc9PUEPWURTxfnVbVsCpXWnSGUFYHvjy7D5RFkeUiZoT",
  "key4": "4Be62sZxzpVAa9pHX5qrNS5fDxNgwsEjXcx1AgoiFYZ8yjZvDhGxbRvD3yM3YXCwL6FregfGeq1aigxHwfaCwaXP",
  "key5": "614i4fn1tpyKAomNJbXoSD81c3uaZ7bCuvRwTxtTXhVayRqtDK9Zx4NqTBg57Yeoc2r9V12WP1zuKGUUsamXt1C2",
  "key6": "fq11XP2vcBSFpdeRzyQeiNQY2URmUtddVtSGgBhFqR2SFq5MVQ9p2dPaV4z4Uvsixhw4ENSJNg1cxZiZTNnn8Yi",
  "key7": "Wm362Den3NaETxewCxNvGBn4dQH7Qtx4xNtf9wNmfjfN9njV32pqh329Zs72cg6nBnq26gZseXKfydPCeoXY2W1",
  "key8": "3FXqEpGEUkdkBVUmYX1TjjDTBC1aRfmrjXdPzfPNLt2nMW2RAEkiWp3fyZjavmfWFbnfNUuTWesUkcQHqT5qpLP6",
  "key9": "2ATVJiTchhvErbzrdvzZtWFTyvpCEgZKP995Uz3YeJmJ8ZBS3tVDqyGQEvmHfK8pYxySeDX5SsbXqk8g61mFqPJj",
  "key10": "2aNhawdgovdoPSdri61bRnmqySWw5bxXpKBF1Ykun84V38scb9pJT7hAaKR4mMSE94cU74k8KtEuTpQE4Eqfwj6Z",
  "key11": "2PaPMGGzCyFscqbQwbD8PnEgXnJjU76yVJr37gZjqmWC3DogEUAAxnZASzYgcgwvV7SDFcwv4fqbDt2G8ACTGP9U",
  "key12": "4HbDgQEpHLs2FLpzLFztyqVX4fhF2JqdwazAE1cXdjdwk8mj9EaMPEKC5bANqQ31pGauuweRmezW6crz614AD2BX",
  "key13": "3cMqhhfBAeijQhMMBAU4ETNv8JjqSYZDaXr3BExehcXxjAe1q8pmLHXYKS8A7JizJYxq9vkryyLonhWhjV3ZwdS",
  "key14": "3aDCe2gzCq6q8Yxx4Ds3NgpjCR4o95sYRouw4idANdj41vQTc9DG9cErCcY1j6xKU3qcQCSSeWD5vm6XofuUcWaU",
  "key15": "2Pp2FEhPxgwroAUMDCAeaAmm5DYktiaH44uEMvFmEivLPM9ekKVfi5VcWvgJP3vuiSJPC1vSPoUaWGzJY59CrD7r",
  "key16": "3tQyuQKPTwcMBFBMvJEHF6jptcLsmBYbfSzzPh6K8xH5QHnLaWBTPAitpnfqhdpKUNMKUzAYs7cP8EwLSmFf381v",
  "key17": "5yE74NLgu3W3ivi4t4JWwQsoM1b4emxq6abMUzQUoMtoUvqFmaxPYEo4zZ3eVeycvtKsbHt8uCJCztZuithLZWXD",
  "key18": "3g25y4cERzVSYCHN9yVfzHfSf5GqSg92nV3LNn6TcuXS4NYvkpKKvQKAXQ4ahuCuo1nvpbKiScXWf3MNvP9xRrdw",
  "key19": "Vp94ZkSUrKQeuecSrXjmz6Erp7tA7XsGXMaUWzxYabEeXFjmpx1GzcUHHdQtRU84YkKjn9vJsfBuFuuvPHjYWbA",
  "key20": "6ZZa2QWtZN4isPy37ypbg8Gpe42dy68fiZjMP9TCdEJizJHhYXqDfXGkaH9BnqQX8hj4CbZxwG78hT2Hhs1pAEx",
  "key21": "3m4H3ot2ErYcGAWfzGw9zTSkZesN6FUU6LG6dR8Kfkjp3HMXxBCA5bXMDiBxNxdHUczRPG8up7VhaRAPw6JCYbqW",
  "key22": "5dq15Sg9zoZXFMeSAEny9jSicY9CKfTSBygfvFcgEdEgDXTLNU46qGKGVdrKbAig3KsS5871Ptvrknqp8hXccXKe",
  "key23": "2zNTpbyUZbd4BnUngSLUDnYFdjvkcxPssML5g8HVxYaCvoyNcQjeGiX7da5J6hw1XJ9K7qe7xYJM8aRjX2E8zXk8",
  "key24": "23foay7UtEAwfpvTC2YNXJW8PjQm5memzVeKs9a4mE7Ub4sBK9QXf3QvjZtir9otRzFRAjHjnn1qJu5kauc5GX4u",
  "key25": "5izZfyh79PkRTZcGGHU8GAZkzZWhJ5VHkVWjMjvP5LkWr8Qmx4xvmMje2se6hYbfo5BZWDtji6c8JSqRif8xcikR",
  "key26": "vQhfrcDV6Y2tNwB2dARnT2fujTpXhcXqsiKUbDUcrvRiN8RGePXSgcwxsrym6S1QsCE2ganyvzmCYh1sfL191TR",
  "key27": "95y3buXpr1Lth4m5kqBpyLXpkxkwRui14mKrFMrJZ1CJtT44rWbvEMjjxcipoWbcT42JXNNSAqdnVEKXZvTAxWi",
  "key28": "4LkBEGG6CiREZMRUGkmxPhPoELba7E998LYxiTePctUuT8bsjDkEutBFFiPKD7F6LoaU44XQn649bDwRCTBNDZSs",
  "key29": "3qaLYLZWCzoavRGbCaxvuKJaj7wxwtSeqSNpkxC3ufyoTFYp4RbDGQBSbGH71uQCppGdm8N2fUycXpwww6MLsfuz",
  "key30": "5kWWGt5PqXjmCwivwxSfdWAnXigWHpC6TdMEQJFeYX1QsWXAGj4GcFAHk8EcB4ZZBGVEq1hrZuSMFWX4KNQrkja",
  "key31": "nvH86qcpfDJJaaf42XsEFj8BSUxNpMNQeXEk5cw7qGXkawMFvovV7hYmjE9TJ4tbxUNNz6fr1NWFYLoU7BQKcxu",
  "key32": "5hwuVo4ey6xFDxtJ23NsE4tBTCirLmsWSaQyyGmcQbaTvYxghUgsXz1Fr1YL72D6Qc4vepsac7ADYwBvBTqxUmqB",
  "key33": "5QUyMUAUUxzq2Cey4micXReUsdr9UPFWkxLejMqoLiBWKwxmCjEUYwL2cukEwvfoApkcyqJmkr99kQWFYRge5APX",
  "key34": "JGLLGPUN6KSRQzJ3Y2Hzw5NpDdaRu7bMD6sNrcaEZysiudwCYpb4xYD884Gj4yUFDcW49HV4hBa4hzPznJc2XPD"
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
