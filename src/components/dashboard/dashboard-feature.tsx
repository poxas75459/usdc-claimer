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
    "2yB4tb33rRtnFCtUhd241eaLoXNwmzJwWmADonhZfLNkQiHC4ipXVqTwdB2sdHw8kWzn8fqX3u9ZCxuu5FDVbRc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FpwFwm6epQeb8csHy4tLdnnhcWAL2ZjeJ9NWBcGVSsA93syW6b5mXonE3zKsFdMEmRKjdN1Pi9QKFZ9VGsB937X",
  "key1": "24GZPqxqt8EsPMb68k7XMZFDM4Lqa5TgMTXy7WGemPVsWhKPk3qeQ4BMMndSxBYLVyNHUJvjwPxA4NccoHCzSBnV",
  "key2": "3xFvpmcCfb6uK6FqsafZmgLGDGoLN2fjvPJgo6CcXL1gsR2oB3m4cCgZSNSjpvWU3AeccnC5NQiQh939hfRe1asG",
  "key3": "3vcRM1U6dzc7S69AazcYoCAgEAvBDXd9jdzUfoCBDScqGB9jhDQ8XyrCKCc5nhG6mfzCGzcUCcH5pEiEe86icjJo",
  "key4": "3Zu5FtE1p6YjbyVrah9DupGqDTPq1aYJcy33aPCZRgdTN2zjrYLFkmcCYcmZNDLDDz8J9jnSnQPqhhqve2zmHXWj",
  "key5": "3ZHucHyRmWhQLfQAn6VkbnzxqkCifdXBwz8TDioCa3f6SYBULVL4iCWBQajw6jv48wQrtf72nVsSPyVheQS5mGAF",
  "key6": "rBD5JKrJ8safB6BkxWmKk1kusBDXTn58R5Nbk5L2BPHN4mnsm5p1cUn1Po57pn1Zniy7vUNCgvgmxj8chBP8QjA",
  "key7": "3NSyDihWqt7GiXi286bug2VuU6rnm8ADnyLqCwg6e4ahFrZ4iG2HYgEzkgM5NChoUsFSbhLPcz6ekeBAHMeVNAjW",
  "key8": "2TAJyED3C3QrSDNskWyB6L8iFt6Cuz8p5HpwKQy22ijnk38KFW4ErYgPRD78cpkNLnjE4qQ99AUxgktGcpUgm3dV",
  "key9": "46vcMyFMuHjxt5KQu45dzH3ejRiWCsozVnAB7UZjnwq25jqD8UnJJdmxLnki5iCLLqjkDL7JCX4su2VNiT5LREoZ",
  "key10": "4Fr2dSXcEz6cEfTMKXPe1eRpmUGdv8x18x6Cu51HN7CuYHGbfKScv4jd1tnPyjkAYJJV2UyBLzMtAbVaqxUSKP6t",
  "key11": "2chnZRMqVw3bM5w6dYoMLZ3AuskYjJXQav9Baed6riTFuKnRDNwYYJJu92bZV2aFuFjoz8GpEJEv1RsV6Ltspc9R",
  "key12": "4ZpfwESsCGZEJjn2TM1CdCDocVuMBbAsiZfDuFgJBWMNqBTs1NCiuFfPB1T44JEnUYXppE4o8ZVG6G6P6WxeAMm1",
  "key13": "w8QX7JPK1YH63tDBN1JA9vWgp8A2LfMWGYJgD3d8YHG9mTQVaetKxfcYDDKztrJyfEWc6LetPdxoEHFjoaaxCCU",
  "key14": "5k8Mtw5e79Cdt4mqjLQgsdYeNkRNhYKcoz3Us9Yx8zRzo5KmMGCwnjrVBAM9nRZ2sNxN7pED3EuR8aMNQm2Z3XH1",
  "key15": "ZYjarfEcKuQyRmXKTo2iAnGYM65U2H455eYgtfMyCZzQtdV8QdK1mYb4d37esvp2qmubpgzvyNN7dGKcwMe8JJy",
  "key16": "5XwuAf3NYPJkJFxeyvqxV2LsqgZM8vJu8HrfhcaDiqPBWPaFxDdNu21NS3HqBJJnyuM9cuzQ1dk9nn9mMo1m1Fnp",
  "key17": "5datLoFGZvJBMjWEMauokm8wFXw4qh5FNGFTqyQb9KyPwZnhi9mLSudCTpGqr1ZZ1PsrWeWkS2rhcWyLytf4dPQW",
  "key18": "52AHraNsB9NKUSUx7ferki6um8GzZposhCfHpSLSpecNVfXe7fKXZJzXvMYtzo441J9iemyzDsSTehPuoTfwdhDL",
  "key19": "3x91wQFcBaFinMabYPfYJsvupe1GpL4rn5TZ7Fy3HW9HKFaycjvENszzmSygmGn3uUkY8DbLkPZMk8pVkXNTc6ks",
  "key20": "bDvQgPWuRDiYitGDUpW4FoxjbXYKVe5obB52FZmESDjHPytZdnoTRcofvziYJNoT4voY6C7vkHLL5P6KSXX2qC9",
  "key21": "4597qGnXoFpH2io77ihHAbrWGz3URSjSHuPGzAzgTVR6AfYiWm9nhTNrTqwcwjrubYCj3f38gzJm7SieG6NHnaxw",
  "key22": "23dGtqut5UbhTEd8iHL1SJh8CC8BnaV4K4vbskFFadzKrqRWYcahYAXkNGDNyteSc3CM5BSdCEbtDQXniz21KU8A",
  "key23": "4DJBFQngvtHG4Cwegmr2JJ7iBiZtpZ9wqKAtiYn72PX2kQBEWZfRci5DwEZVthh1Tw3EFgBWDiPFNoeCi6JR3XX4",
  "key24": "44Xok975m8H5rwcsNg21Bp1KKgBcRppfQqekLfETvZ1FcMuuTpt91WSbCRCa9cLLmvvKjHvHqFVHitSXHbgo43aH",
  "key25": "svAgHQBzVak6wf47RVoiC7T2RrwMfajSEDCbqVbwrggWj2Dz5FVDXn7yGkffd1USANnYYuH6gB3BkSybNYhnRBj",
  "key26": "2oZpnGKKaEy1AchdY7qcG6zkGf8ViB4VYFHgBJFi3Mqu4ZNz8HufQSro9Lg5XSzDWjzNnZWhaEM3fAjvz1R2m6Fy",
  "key27": "4JpHuruRRYDoLJyoQntqN9WNKehvmdHn4GDaVoqquTVaWg1V3oVazaS8LorSMG6VWCoi8WyReNftazbAUExy99Pt",
  "key28": "32wCvDg2PxUSuHYx1Jcyub2U3qqiYNnr5oZ1J97ZdwpJCHzUhR8waTvbS256G2ewQ9hY2ApjYLRkj5DoTU7jFmHg",
  "key29": "64YxW8jMSBkG9Qiw2Y3mFrj7ZgSXwCPxXnujBPpVPZDeQc1o1uPoRUqFd4XAaJnk2Zg6JydA1qmwvi7wXSf7HPym",
  "key30": "4vZCWu4qzMXwe7dFBb8Y9MU6MmTSePk8FtWfdWC3FD2zmVhqhNbuu4jnnrNCpmCNvuYxsihaU3W8MvDJpWS296Gf"
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
