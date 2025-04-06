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
    "4RM5mwxtn9M8XoWaLGEWpMTX4qkLBqEfDfU4fk4orgz6cAamnT8HfLtKHN9Z68QJFPgLmnSZUb43pntuSwUBHP2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HEHTAJMNCnS8BHwqLvxJmmqCnfY3tUEWiCaCDLVb1aQbWz3ZpQmfWb9aWu5Hqvkmb3fBASGqR8Fv1kqb9mrMsXy",
  "key1": "2oEZJKfX2ocP2ynmpnarqpQzZ8totPKqwdtgZyxQ2mqchByd3KpVzREU3HCvYHDQnY1gxgm3oNUF4QfQq5c4tT1M",
  "key2": "4EpDHa1m86KGYSX8HZ7pD8rJHu6Y2HTgsHebXByHo1Fcp87ZWixPhmiXLBu5Ynmom7eK51E5MTyozXfvNGT2fFEU",
  "key3": "4o3UEKLmDoiXMhSVR8qyitKsr3RJ7pBshP9WUaLqmHv8dyghcsNchBqw1KRCb78JgXZCNCCzeLabNW622CD2oGSt",
  "key4": "2G1kuaHRxzQVoXWH5cXV7BpXU6G5TbAPiVzd7L3ANSdo8ZbYqNRPbXVQwEhgseMvvCe8QMwNy6kmGW5LiqtWRskh",
  "key5": "JvMghAjB22B6djnp7xhiGtUjpnBCoHjwniR72gQ6LV1Am57jkZe8ijsrw3CWppM1bPe9J5KqQz1wF7DptwuCbrF",
  "key6": "4Uy4fb9Qj1eUbCNb1DVgGu2v6mw2WYapiKrCXxAiWcG5b4qYCy8UZ4RZyUxZChaDgw1aPBAvAnZAZZFriedaQhVS",
  "key7": "Mn17ak7Y8rWT2r6iw2j7oRMbD4YDbyF3ehdBkvrDRTtDyaV3WKKaFyZPJBy7jCSFmE6LWJPANS3ez54e68cUoNx",
  "key8": "5geaB3cHBZJEDXHJ55vVhD3SMvCGtcgcbuXbgq7XnRKhKonbhwX6nAVCkdfDHF25cDdp7qX6GpvhSg5w3byTc1Lm",
  "key9": "5bTtvqNC84khx7oqjV7WHb4PpJKYH3tsHpMHCs7eKyFrDfpt9QvT4MZPrWe44CniY1wBFCihTvKQv6T25G1PfaTQ",
  "key10": "26nDGVCsaUqDcrELwGPjoD1riBdBK52UNkXCmAMfDzMwnx8KTwagYggdCJtXk3k9UzAJFQ5wP9Te5i3cZuJiiT3Z",
  "key11": "4jSnFc7TqjH9cKkfRPrLX9w3ACMCAuFuwC2FSMcRY6MxUnkgtThnnXPUuxGJNPUuvYsqyxJi8Tu65fqHTkozaQKG",
  "key12": "4gktc6ouR6cyT9uHpMdVvjLW7udm8DtGNeWM7RmU29fAZQ5VL5iRSUvwgb1zcADVDRP5HE7JwFbnXaEBck2W3T1s",
  "key13": "67gCUvvuxoD8dVYsdKsmmvdMESAYpVA6rGEcSYqH6iZT4iDFwkTWxfYwMduZ3iBucvryHgYQj5kP9y7HNZiZLskM",
  "key14": "4S2caWnx1GMYi9hiko2EfiW2qSxGGS6qws6w2gMuU7sprdD387dJKTMguWVHY6PnfdTKdgVJ2LVzK33PUYiZLYkZ",
  "key15": "47bv31Yc2KBcL5d2kQcGwfF7zrPbhqgT6QGtyXco3KC5qmKs9G6WvfZ82vgFTtfbkmQsFqRdmRRyBPUSnXGhNwf4",
  "key16": "39bmKTCdHq4CmxVLXTP8d3rN2pPYjLLMVW8wJs1MGWDQRryuGg4nVBNGngps3BYjxnoPLDgjrbYnch6JTQQX13pZ",
  "key17": "2P5K2vw2ZX5VftYantki9uFMrGya41Pjk46iNG9BcRXaNrq1VyUpHb1J6ewkkC4wou1rc3jRRkc6JmmSPadgGQQf",
  "key18": "3yx9rK1ysxMgLS1Sagr7sagZ2XCPegD8JVk1YZAEaoUfn4jQs9HtZJAqGZ2EqmniUSwSWvM5BekovaMeWg6AqjQn",
  "key19": "y3p7mD2yDkSheMTQn7GevNW8eWTDMg4tbrn2SgYj4obvmzqy6eAScMs3nY2p5z36Mz4BJcT8rAV2yy4HrMyxtXY",
  "key20": "4zVcB4hNJxNg1VocWJXMUq3L7fL1Dn4rmsEDSxJmTbfATR1jLGwZUaANcDH1kbvf3dLyUDMk691SNcPwAazMBkfe",
  "key21": "3Goh39k3XVHgB1CN4xukcyHbpKXc3Ra6h2mQJ4EzqNUFcL3aUvNH9LGX7cmt3Grpqe5BWZqzDWp4M1jNfNwAWxbf",
  "key22": "3QHFEYNvAH92J6JV5N28CCStyCnqquSabRTP5rtQrANMALRwYWusLLqvFhiUgHP4MwgJTL3drJJZD9mLdjGxZ9Xk",
  "key23": "5iGVZ4UcVcBTHt4192WgsFuJspAo74fjACKhjHiicEnWoNbGwBHyAHA5V572js3eVN8cxbGVWYRSuucTjY2Q9nXK",
  "key24": "BwbddMZxGvJcjPCwewbUL95oNzuqKqiowGgTv56Xij58CJkmY3MtMXzcmNx1EmZ4Qd8hJfF7CVw2Xpy733u4KQH"
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
