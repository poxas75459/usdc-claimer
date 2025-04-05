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
    "bRkhjTPCNGgqhTxKXF3n6YhZ5Hs96MokTbDYt3gyGTqowsW8ig1QMw3GHigUHNzLG1AmfrySwWstMD8ZKV4SXKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bux3LVEL8mBqoBqG8CCKnhGKzjQ4G9f2qrqRo55yHfqHWcEMQG4S3Z32cW8WKhWUv1ckg6F1XRvhSMvtPwCf841",
  "key1": "42Z3mY4yyA3Wtc4djneGJXadHymGPk2ypqfByhAqX4v7bRT3eW8j5JBrw5hqh5ARGdCQJF7vUzFjtNJvjNX9bsBX",
  "key2": "4oEd1cGEVKSoa9mdQT1yWzCptibFm8Fs1rBCSoaysxizBSFFap1L5DdhzpwMDwCnhWUpXjjmhbfr5znVuZ8jUkfy",
  "key3": "371UTAK27YEmTs7oZ8qUZZqCiyPnWQG4gxTEkNx14EZjoQiVkC719LvDz95U2sUMSKwcG9bYYbuqeKdbVjnWMz3C",
  "key4": "3FT3sPqcH3wqS2rLpCDDaFHFoQpWcfkuyLMFTSgodiEg85RDbrD2txA8VcU5jHeE8ecj15XzjFjYRUYbEvi4fiPq",
  "key5": "2zT6ReYSPDPrdKzJ4vAD1uEBzN8T4K7L7AW1J7MYpRwCwNntWoPqbkvx74aS1zjuQWj9DFuBfZBMEQpXgeKBXTnq",
  "key6": "Aipsm6CExDTZpXoSLYfVKsLe67M4ABnsQB43N4JZ5zKLek3izhws4AYRqSUNJTDdY1rrHD3aoJRDVXguePMaGSW",
  "key7": "2XonHJ5UxKodQcUtrjQX9D3rp2dtrRAwmh9f1YsVFnrw5pkprkRWte93dPfYavnMhi4Rj1WXfCKsvUMqGVcUsrU5",
  "key8": "3xRTQKRuqPY51tKX9kmAhtjn3qfghVMcgrAy5MTaHSy57zTA1NQbnyStS9pwudF58rYrjiZycHH4c3UtZ7bQ2Kfb",
  "key9": "tEtF8Qrt3bhRT7Sm54NERbt63umCeq2jZ93MDoV86eqMd15fpMASLNyx83eUo6a8riUx5BVnPYQVCG8oCLF6B7a",
  "key10": "34rWqmgN3fvkvNwBuzkVQxJrCCmf7eWDr3eR5gF1nugv3MCCXqFXk7kEe4p91yxLFVDZfSzJwVa2varBUNjcE4K9",
  "key11": "61iyTrKNds7UKitg9byJ1ugfEt8Yryp87iDHk1V3SQjXYqrnQ11rzD1KwVEPbhE5UbtKX6wdoBtSHEcWJL2ZRRyH",
  "key12": "4SiB1zGuxYhAMouqxGzdTvcBsWJnq2hcvGC9Wrfq8WbuQ5qq5v6gPbKaj81QF74JeWsA4DC4joPyeGPjqT2PzRAp",
  "key13": "3WhkYXDUBJbJpYZ33d5VyrgQtbYpucTUyCbtPtshzjE4HiiNzSHjgvRb67MCmbAvQMWZWMb5j4vG8Jms7BGtAJho",
  "key14": "5wX5nhiNndcQJ7LTaBvQtT9yQq9bk3zpNuq5PdE6ixRfk2hrYZZrDK2s23EZhqxnKnKKFQhk3a94XgKDoroeka4Y",
  "key15": "47QLmwGZsxsDKxmz5K1KtGDvKDrMJLfvYnmFFURxUUNCqMErDUgmf72i6Gz4qu56aRa2Ab84wvt6iA4u5qKiS6Mh",
  "key16": "3J3Rkx8yjf4ZduroZwBfY7i7K8fp8AfH3E34gsWP2oTMJF5Z3tsGXxAt4ddHyYrr3Q9eVPyJeNrAM4cpLtWNFvDh",
  "key17": "3CZ5HCSaKWGg2czyYpYmxBE8nhsHjfnYpPf5asQS2wRN6aSjndVpMd7Ph3JXUVBCenH6cdooLcQ35YYGnY3EvGCR",
  "key18": "2JXWiMA1vqwBKw98FnrSDKGSNLYfWSoj7gJsxFYijxvFpo8Z6PeVp24GkJxXJoCfAki79fNotLm5C6aUjS7WoxsD",
  "key19": "a4ZPfFR1A68C2WDxaDe5Cm5j7Us6kBFoFmYLbz2V3UnhhKcFk32nkynMtJdMGbUB2qJ1rqh9ZBK6xnsSzjnqgLo",
  "key20": "5mvoFnQy1QPnovVHtZXT6oKPGXfTvSsUNZD6u6eZ4Uo8j5Ftx5v4dJ7eu5DqdpgczMfU5AU7qp6N9E2NiYzqL6hn",
  "key21": "rtNYdCGFm6UEX1zPDMRN8jjmhxZ4HLThuL1SEZzFq5PiZaCtzU5TCdhvW47K83oAvq11Qf54N46Bbt5WHDqRvYC",
  "key22": "5fKG8CRxH5w6j32SCF7TWaxXaebowHjJ8LmL26P3c9zTkXHob6g3B5eY1wncgoxxqqR3WQjfM5FwWvKE2hXNnGFL",
  "key23": "5UQg3rrhtKRyJFwKZ1DqaiVsDjn2VHTSxW2byHVb5n3PweHJCAVsacpG9qfqUjCUHcBWmBK89Nkbk5othKzCREYZ",
  "key24": "4SxzNf1FQkGSsS9AegC9eJqURvGC4Cyt8Awun2NgLG6SjFyCsCVkHCN8c4Zakuy82awga3zbwwQ5esHssFRURBCo",
  "key25": "NFfw9rrQm1QtmvcuFTdgdtQJ9WBjmwP3FeLBxCm6oCrWaQx89YzRmprAPcCGaqX3R6g2dP51DBhQSYapsjTkDu6",
  "key26": "4R6x56jWu5unU6oJ5c8YipiJsoneKum2oZYT6HSnmJGkhN4Dgo4mJ9P3ZundkCVqV2vZf33zYoa8786wZqehNjNJ",
  "key27": "2bY2puSZkLNuhkeb6fs7VjFzTLKkBqZAxGmZ2KbvobwfjQ3E2A8zFsdZSWQAGFQT6iM5f8oNFttkkNqjiF3qbARw"
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
