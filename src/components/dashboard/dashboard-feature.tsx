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
    "AEScunnBuvtC9YNeM5v9V8oxoknvmAZEZZRd83Fg983cUqWszDG86KgfVSHi1dqxJap126UPu6cWyiMDFXzvmMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55SttCyqeKKjineD1oyouCWMXQ5GkBbKNYxd6Gc13tEphcNvL6L1kq7w13joEaSMRUZmRjy2b7jgKcSq6sF1GUrD",
  "key1": "k8876sFcDPd4yvPRBavsbUQKRFSEPLWnfsnMZVKbDdEJFjgaG8nk8orFdeGwJaDD2s3CDR6BZyN5tKbfUN2U4xT",
  "key2": "4ZqzuXFaxwR78fWt9zEqsUoyXovR15jrGMLrssJ2pgp7ELWcGCNxw9XbFqqzXyT6UXZSL6DwYtUSgJvJsj3aVvd2",
  "key3": "CtEKT69GfcdNzWceZeeN8URJh4EyJo1s8yzZaTaPV5j6NdJd6Rdo1SWtJnsaMLARuJf9hR8Ty9bmspibT77JwTM",
  "key4": "5uEvDfvgWim75ELfDM3eW8QTkCLXoFRkuZXPHGVQcdojzrvkrsUGvkBpk1ZpY1vaGV74YByXw3DPzBLGdRj3U8KR",
  "key5": "5fTvDx98USLtfVmYMVLP94X5GbMh1nm2Xx6TvSsUtRB9S9br5igC7Pbs1RpufAFefBDCqYKgSzrwNSgJYjzZF2re",
  "key6": "2cPQpURFeYNvbCTXAeabLSAexi7fbErqztWbA5LMavpEKUohdDXFpRVK67siBowq5kTsm7v52uv6SHAFWFu6xck7",
  "key7": "3mPwuEazLtZonVcKWYMsEZKHQ6avHwsXFYMNeH4B8RrsDCUxQ5FxyLVros2DbA4stsHCooLit9sEEu7BSufR57MK",
  "key8": "3su9Q6w91WAkZbJVPo5BFnvmS2HdCgRCVBkpWgVbcphYsfWGaMrLU44JQ5bY3YGJB1GsRHGvufNSmudcY1txps16",
  "key9": "2c54i8oQpzCWw4xTcdEA2SbaCgoFRuvHBGm3RkQuAWzJPekd8y8VxwLypyusPGsGV4obN8ETLx7Kd8TPMhBVbNPZ",
  "key10": "4Cn5Qk9Y5sRePcBsobNrqrt9W7WjbZYNasM3vrPBcpCrjPYa2xi2kthrMoxnVrawiscCJxTr5RhLBg94vZ4QZF53",
  "key11": "4DUY881L7bnKstfkKUZqUvMDmPMfdrKB8jeBffy4D9BKvipiCqbtbTXafTrqjBQ1a8zdoAJJtGJmKJneeD7v3uUy",
  "key12": "2SzTG5r4Ss1Ttb4n4RHPjRSjYkKsv5XAT57QXEzmoPdhPWyicFQpQkgq6o75PkqAxi5azAfAg9k7eD9JqZsdTtha",
  "key13": "4s38i7SJRZ4X77XRAzEbFbB3ZorLJX7moRjz62pSJrAqL5kvr8nJw3xzjGQ9rNpe9PbM5p2oPa6Ki1iaSAFGwPUu",
  "key14": "4bMK3nbcK5MniRw1MKDkNLunk2t8bZHK3oi5gxQT1dU2DpTrWk8bdWR5iQLe5AqMszEzzE6KPG5MXf9SsD1E9tj6",
  "key15": "QLzeTvJLMNXcdEyLPN9sSFdhXoKrn9SkQXa7k15KrbdJFWJ8dQB91h13UfT5ZoUnkEPswHwpfhMFmCJDuyTNfkK",
  "key16": "2WcabdUyFFbVdb8ibXAHS53cA6zKd4wLDLmGvHUd6tjesrBtUyiQP3RTmTeVRECscofn8eHiQh31QJzBfftVo8Jv",
  "key17": "UoqcnuaXXoPQ1KD3vuQXpbCYPujEsqYFo9mty4fd81ZmrpxrarFUW8g6VVU3GNKDx1NAn4eFc3R6YqZFnFwsenF",
  "key18": "41LBur5jwcnpHhAQdLtv39gWaKjgE2vG6quDwpxsgAbXmxHNBkH4eRMaBdSnFzWGXw46hyumvPxVyMdQj8Y58ciR",
  "key19": "5xnHEeRStbp9CsnP7CKRfGWqvmcn9EHna7LngxAm2QKYQZfpUkUU87dx5xg2aeTWwt6GigijHDdcVbeDHbTyxZe7",
  "key20": "BcRqT3WTxC5FsAu6SEE9niX55fP5CrUhhdvYbjHWB1dSkAsKQkLSRyK19qhowjC9kfu1psddgJLT1jaBLqqeLtz",
  "key21": "6w1yAMJRquHrKmepLcZq9MjmgqyAbBXjeYdS5yvQTscqhtuxSVf5b1JKnMd8DTsN4y2ef3XGPxYfhV3Kp5nQMHT",
  "key22": "3fUJ1px2wtpiRL9bbvWJJ7q6eM8SRRTPuVujunA5kgPhEmgEY8URJwfhmrQQzt2TH6VR5MPMv4HpCVvnqUS9rDcW",
  "key23": "5mXZ1jyXuRH6amRFAKcKMiGfwPfTungmMypT1Aw9jK7AEXsHT38gWgzYKPRjms5Vb3LUZg9Po2RHjdEgtx9F2HJm",
  "key24": "5JPn6PoHzVqf48JNeBwvjRmNSdBbiLF6yUCQkK83zHgQM9Yk7PpchqFQKfsPzAkEyWBRNwdGqfPgvrLiRMPpEJuK",
  "key25": "3yBydgXnhCy3wypbZ1GngTAhoJT1HkqJAvbscqtLjTdWbZNBHiMxAmHvVeVyUVJrptBtddGjXb6LWnTb6RjhLJHa",
  "key26": "2QpHAaj3PzF61Ys94cCeTdkQoh7rf3si83PWrrtBkxTfH8WoYqUDUyLR8drDBgn9cRvWqHo34yoZVcBcoYDhYvAP",
  "key27": "4QRzjWn2mc6AXhhRumPjthHg3swTK4RbfwNHkBW4fFMquaRRxaGSbeZt1WwG3Cn7ZWASKJdN8RwYYw1aNSpT3ujX",
  "key28": "r4uEDJfVuN7ByCjsh1qWxBhEP6SoHcTK8bx1Vvobj8EjThpRbeDFW2eYsnUrPNXXT7132PjKegSG253HwUPubzq"
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
