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
    "DztMGvERxPNSAvQUvQc5KtYbxKZs4wmDTCgEXekqQ8uP8qYpqnXCQBmrfrErUg8zPzDrAykZCz33NLy4zK3AdsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7VFo6VgAvzpB7EVAZL8K7GohdrGE1hNaUUrRwBM3ZuuhWAJHnMNg2XPUQ8LXCt1hqmhPDKjH16bRo43TJUhjHL",
  "key1": "3ub5rYy769simqFaXc73XDeNtWmEGC1gWi34arxZDva8LzbWxYKtrbexLQs7Nc1je7amzKkkRt5NctWwB36jv3Hm",
  "key2": "5BthZf2UPUh9CDmGb8ELR2CcPPDJjifv6P12Q3x7CsVzns1iqQaCG2V51JEbk92hjYJ5qDrbboKXguBweCTeQTP6",
  "key3": "3HQ3CBrdESiqqBk3Nv5Ae8Hrzd23biiyhZjHhnQsRpVYAwoU2z72Y53wiK7m6kwRiysvvQCKmfCQ4XE6NSoX8kRr",
  "key4": "3vFYfbL5eqrsXP5zzMqBBPUjFvNQgnJA4xUxEXUPprc9v5Cf3pj1i8EEJcwt2EEc61YPAmuKBggG8rLtfCWWfk7H",
  "key5": "5Uo7uGAdF7nyjveRMjPFyy3TfLjaLKo998iRYUdR9KwbR5XN6kQ3NsgWdqKxkQP655ehW3Fc5qwEeoG7tFHxvW8Z",
  "key6": "4NSfrGJoetsRWyAbw6ojEYEdGR2VMaSQUYM1x5nmAhTRYui68NGafiv7BQzL6LFPG9EBnZyov8simNJHTX7i5BuT",
  "key7": "2HvyAPa4UWRM5Dz3g1mHfB6WuUZ7Y36gVwLzJ6mYpdBtEdbLFMuhLFPKPa1ARpXMo7BvnRuJBddvSKow155DzhSw",
  "key8": "2BZv1vZGtHRy263UXkvmr8wwwniAopA9zNqeXhkJa6D6k7PqWJM4EafxHWGAQWJxiUVPtjEARiYCfrTiiGqRnipJ",
  "key9": "2pYbPtUzYVzecLZucBvWtzdhzYunoNGLojYCN3tQTTXL6HW3DvZibo8oJSJzexEhQ45yk7zRirJrZnNs71jRjhX2",
  "key10": "XgHP2HsXZsA4TmuzhmTv1ooBSzpvPjhzqC2FQzDs2YvoUXExeD4bLWzLCLissmpW4HJeTe1BosrEUqNVVaoCw4V",
  "key11": "3RXQLxGiYMqnbZiFyLH7udiU3yrhavuu9rWKgcuMKMPK8ssDRapeDaLixeqrRjw87ctVw5xvMtRZgsCtguE3gtWX",
  "key12": "54UCLKTNWFJTGszXDtpJk3MTBH9DbKVmchr5GTNxdEqoKYHXZzibZBaNkzhzNvAMjRaczMKGmXaKjYt7q1Y6ApP8",
  "key13": "Du8mEGnQjHRrGt6cuUqofetQxNBfYMBZeKgfDDNEyScWcar1yRSSCZ98MESYgC4CXaneT4ob3HHMHsNtaCZyzfL",
  "key14": "5F2ZSn8VwJc15bPDmMtyKHFjEZZJmZcZ9dof9Xdu7nK9ri9mCtD9izN1REDuRQMT7WUweNXtgEDeCjFMs2ryUTq5",
  "key15": "4L3JCvgYppUVFt4EpzbuP47y4uzfBU8SRHMmk3rXRGBpvL9GMUnH16PZML5SBvQjGSKJLfBd9CgYDzGkzSnTBLqv",
  "key16": "2on8ME5bzkxyDe4y9cNuLMDqZyEBJWGpQKPhx7sFJ9JWvkppY65qyU31VbKiM44FCUrD8xFFmyi3hGhyLZCvACRv",
  "key17": "2JF3gitkMD4bNVsMmLLc3FERvwLYaX4hByTcdm1x1dzrustWNctydMV2JwcGJ4aiH7Mhc1p5JzskFm5UMC2z7sLJ",
  "key18": "U47bMmzRZNrL1Nxow5BiCjVagUUPJrs4SVirA1x2npx7oby4Cy2skYvz3B2tYi2q36GTiXAuf9pf6Z5D1A2t2NZ",
  "key19": "4NSPYfrep3vFaWqDPyLPp3Qihkfb1n6fiueQ6irShAXUaNJmGsEz99B98NiG2nCCN2XjGeM3C9Bwod99YB6VYK1J",
  "key20": "5vXQYGTkaC6CZsW9oup5vpKqbqDW45BPQTfpSEvtPCYFYm2VJfQWQ7idd5D1GF9FJ136psZ2fj7wthVRZYZoHWut",
  "key21": "5zic8qj29imxwTTunCpNNHXgsMc2kjps8W8mtVULU2grxNv5fXYtJt6wYq5XaFjmkD1FSzS4U2DmUDwKSMSyxeAn",
  "key22": "5w4hF8cCfycyyybUKm7LgSMswSpQYFMAgbhhpbDjk4L4C8zbNNDzPZCVo4dDMTuZZuLK4DTdbCRvXKyaoGTCRhVx",
  "key23": "hhCs9wv7ns9LRj5kxGRnBNaQ6qCszUusn6k6JKPxF5fXNkH37MxmcD6Lz9nf1cDUHJ9xoqGmZBiEun3NvWpzreP",
  "key24": "4wDuYaS3p5ycayVJB8Fa9uG1ozsWyadKaom8MEBWz5x5EMQ5CPwdKhr4RzR8U6kr9vJhyLkxSiw6yK16YFhMg5NA",
  "key25": "4Xg4HWWcEihXMMdVoUqh2q7SrcFvGyskiidnwqq6WD9vJtfGiPXeK398zpoWcq2Z6HW19Zco3DuvcStvCrNj4iCF",
  "key26": "63NFc59HF6RJnXK4fGZsxZN1NDXuEZNPTS9ooYDbjS8PSBABzArEHcEdtKLU7KmEZwDkLhfSpLYY46tbXPrhJoc4",
  "key27": "nnjF89S9MztLztZ2yeWemAa7eRHPbdYrnJgFCaJEFsN4SCjcmGx6vCcHJND4tXVHDU69WPsDwPfiG4dMQJMMZG4",
  "key28": "2PFDpqEb1XmX1rFqkoHeFVuFYRPEhhm1kiCAwjGjFm4KR4q7fHpZHHJkiEZYvWWWBf8KXbH6ihhVE5GgfrwiX1P2",
  "key29": "HYFxfs1t17c81nwVmuCUe8BtECx8wnLfSbWPoDLsKLyGPWTZotFNe9tvyAeXaYShfS4RqsW4JaJyTAMPDZE5LVU",
  "key30": "5XqhoHVAUGcaWt1J1GvtShfSpyyZjmYzSYLo37Vk1GTjR8j9jHMZu2SwNGdnFZBzfVouG29qGsmKyfzbysDrh8fz",
  "key31": "L6ivp3hAUsb4J41wkVFGHPxBAvuYEng6wcB5kr7bnLgHunGQ1KrLmMJoQUQtaioA9f2uzikyWV4QrLTMLUFEkyg",
  "key32": "4CnzjHg4GizTW6BQM1Ww3YddTTYpbGqwF68DdZEun2usuHLbAhTZ6cCBUSbhZJ6vd7oLv1EDHJCL6EeDcGaJiGTi",
  "key33": "3J9hUS6ZEoozgjuLSogpx2r24epy8gSZVAQYEd7N7xhxTBgv9VAaE5ouy9BaL7iGT61vhGjzpREw3UafANbTM3ka"
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
