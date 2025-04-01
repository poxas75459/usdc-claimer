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
    "3yoeWnTg7H6fk6dKtb1bmNQzMyuwGMPxC7Tm2t8osouEHbEmSBZ9bdxxyAeKDJjBnAyyTAK3JJKQCcHZGoWAqLJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597ZbcVZFjinXT2QkJzZTzbovhcDEbfeX7dtUNVoAWJhTVFBebB7Bn3GmksY3EHQcwQjXh6BkPFq6ZgLtp1BRByL",
  "key1": "4MAmpEipSMVBeGwvMsZnTm3g9g7HJaomSMEwNcpFfeiGo891Z8GZkPYKP3aPJ8uewyf1s8qzUokFsiHfUsoz7q7R",
  "key2": "5dpVNRouNwbECc2SPdvwdrYBivQr6eCNnCZv7TfUJRxRF6SCpnm4UVHLdQiQZ8t3zc2ziiGkSEmm8x58BQywvsh5",
  "key3": "4jDoNqdbxdBwndoy3Zk23dKfVeuUPqP7wsXWK8bbyAqxDPb1YyAujyPtwMoGbUkdmbD78UhSSSiq1sVLoHY28JX9",
  "key4": "393KGfgW7duGRDY9GRbvfKKLLsv4uVs3pnpgExN2ypBokHR1hRXBW23wt7K3cqvH53M6NBiicZuMFKTqvNgsPT7n",
  "key5": "4HToPPFNC6SrtWXg5vF2y5TokLWZMopG9sXvH376vHQ1MDEXEfs7fh9wroR1iE4HmeD2bh6mzXQa7aHwquy6epYx",
  "key6": "XccGNVUrFcMdS5xjeJVSermx4NhkNc3n195U7tMM2UaRZJB9SPBHNwsWVZLGBDNPQ7eQr4AuuSBwDgH4Tgqug9Z",
  "key7": "448r7tJNsV7MKqfjeqDRpPzVFYiBWb8sZVFAZB6nG8TmumDAz9e5Z81hVGjhAYe43CzNGqdMfotL8p1ttq8zAZFG",
  "key8": "2KWZwxuvenEbk7tWhv2rYJ2yknDFuH4enEqsF5wNYHPABAUe8QRoMcUekyqtATitFCVCh7VU7uk4K6sENKWK8D1w",
  "key9": "4cipos9McpjBhYWdxu6He4enHzGXdCbEqvU9cDaA6DfcrVxhHQ83gL9fD7TJ1LqrhQqceTN4LCQHBapTphRQ27Sj",
  "key10": "4kRBP5KnphzYajmsCF8eFpvdMKNum7cPYrqhAmGkUoUeKbeLDpRLei59ibVMPc11djmkwxRDX4nJtF6XaBUwbQy3",
  "key11": "488c4kerEGYVuEG2SmMPGzpjuYkbUbVpvyUurJNm28PQ8vEPTAorHeF53AcK2JpeT27H86uFbxHs1bHYynBiQSsd",
  "key12": "25L4QRJc6nBXhLh1bFZQ7iTPa99mFWJjfbfyB6p2Q3VeueZtMFwVY5WUKRL57md7FsuHvm6sf6vZA3KwmFa7tFdY",
  "key13": "ZuAc71JezTz3xoX1VDBq5W65bQHXnKEA6v5JTwkFR6mayW22rT7cjFaXMr5aTC58CiGrFTPgcpT8RW8z756c6nq",
  "key14": "2dLf1NtN3BLpLn7R3w1baVTu71mcecxwRg3mbeujueNXtW5SHm53oFSMvs3vQY6VgwyPEN8ouSEMwUpJFVyQwN13",
  "key15": "MB6ztFa5b2JFNLYRj4E1muHrsyDx7VENcAonhqFxLvv8PwMWtihtcdhtjt19WMNf4QCd7qRLeCeh7XMTnFHDRGW",
  "key16": "4z183GFTYbHdNZVJ2YnqQLJD77Ps531C43fFrfdmT7Hv6XBqGkNvHRQgHC3X9grxJYCfx6q8PZag7U5C2ajg7ELZ",
  "key17": "2KqMw6mb5QKoanPeHEvCHVXfMQUyTKBPHyqoAsaU6Go4crj6yfokiq4Ju5iFNcGPXdPLbZvhx6ivCciT2K7par1o",
  "key18": "4DUbTeg14SAn3tLzQGMrWtLA97eG8fAQahTAVC2F5R2NsKhR13eVmJnQLYppKRrTWVtbViHh9TxS87Pni1Qgcyzh",
  "key19": "5WrERe96LcdpX5jSmWBxymWoe16kiXDFzCucXVCjp7kAxCSDbxRV78sJh8wiei5HnzSiC3T8W2vVb4qVsBZsA3nW",
  "key20": "3qKwxgCchHgiWV3GUAzEuYLzEyw1HUsXmHm1xJTNzxro7S3d8SjoSCnzVRjZFNSpDCGWnJhmFpsp2nrvjZTwmbwT",
  "key21": "2KzwrVvfwLiQs17gSanZYru14sBgRAsmzrUJhpHGhxGNuYyfwXSDiFSKYFTEba1yCNVCUWkZu46t8Zp11Jyw9qJg",
  "key22": "4wZhCyB3pbY1qKt9LNxkUiTvxTpFDJtPUmcD4QUkfdawvucMMeuFGEcMbAJiCVBg84Jd8sKrgMq4wFqH9cZP7dAt",
  "key23": "4gSeMmLcVAXQCcnAXi7ZgWZyYBizS68yWzYfNQn8hHmGoduNvsnUt6A4q5RvEsCyLeq8yokW5zRduhMAy83z8ScL",
  "key24": "TL13eBREzrF9sStTmBL3WKRXGCjjEcnxVDGeaRUjWjUgojjHubYkZ3mPTTEuAsVSSW3T6nopGdSRa44MWHhxZWF",
  "key25": "2E3YfK7rAPYccnGFw5vKDeUyV3YD5tLo71yaxmQHViZjbKsqhNJgj1gZHy3cRn3NpxozkiJ1rD2L1L9UxBZ1iuG6",
  "key26": "5DJyqcx28fP2mq36qQw3e234gL48uj7iafHV4bbkzS5zWrsWgf7peC85mmWZnebSzpQU5jz4q8fFQNdCePzCdCiM"
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
