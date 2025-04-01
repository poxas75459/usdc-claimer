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
    "4p9VJimD2ynjrvtKqPZNphAopNws5gcKMgYBc4V6mJL5EszT77gXpEX3dWeZJbuXQsVj5Bjgxn8s6MWSaakBJCBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "emUjPp5Z5m6KSioctC7WiYhGS5JX1dDH7CWS8DytJ9B9GPo22hzr4EA9BuTqSawaVvFKjr1nEDQhCN7k3kvBtMT",
  "key1": "5B4FSRtBQzfgHAxn8huTLJfRExigvDY8DBk4k85kEdnkSgfranzVi3eEGuKJgsT8UVNDF4GTQabmm1bRyjD43jm",
  "key2": "5aAhyefHBP58Q61kWeHp5bz55eUejuDngkckJ97MgRNL8N3Fp2gQBPpY8oEbd8iuuCzUDYunzcNMhj1TwDXUm8yy",
  "key3": "afY2m2nSSMJBYV5qSfivVKUAAbvAhb45gTsGEEwQs8z1kQDPbt1o1jbewo34iWaJDWtS5nYs8UU2qXT1f9bsGgi",
  "key4": "eoa34nEvcq39STbM4qJkWiRM4pMDQS4MwEt9WEdV3ZUxJFbx7zYDnLH4G8KeTejs5C6C8LvSW24DFfbvCGc8cqB",
  "key5": "3jVQwkseX64xU5nLXhjmJ54yVmuh5A6853rSJz9RiSmQaxxzyCpf2cPbucY7paxcr5eoXi2N39d827vMRNRyb8F3",
  "key6": "2AwpSinToezRA7xwThtgVDP2zAUNYWcLdreNa1hY6eXyBb9TjEgqBUpxp6YhxPJyvYde8ePj6h9dSkmWDjM7kbpn",
  "key7": "2HpUHbezKAvkg2LubqKQwVzQr9ByMuCbeimSCMaPCtJe11tcGLBzAvn2uaUS27s3xmNuKb3RAMdcpAhPjuSRioRS",
  "key8": "kT3z41it7taKRhTHo6XN4W8h1edzQtDwhV3V63ugwdC8bxRbYrXBaUxhUXm77KpJXpLxM8TdWQdZCLWhMBogkwa",
  "key9": "dzg4LgyCKRWCYKeJNcNXvZ7RKoKWKAzzCM3uPokCemLo9Xr33gX5ZK8MuYCTgr1Qq2NP15bWt5wHDTR8LqH8Pg4",
  "key10": "EErLX7zZD9ukazkprNod1P5CGpKWpFhSKNptXjTWS9QNBkroAFjUqhqJkywW6H2P3fVHeL2v8upXxUH2tw2mFFG",
  "key11": "2KnUowrYTqy3q9KdAKvVQxzX6sXkNHhH4tmXq1mBnQgaKbDpBdrCmCnkzGT2xR4bKJYCofgs7rV4GH2wHnoBBecE",
  "key12": "3RLVDLrj7MTCBrsMgh4MKVWry45VHJ9toKDrU8recWtzASfPUriEf4o2qwLWwE4M4mwNUVhEJ6c2rwbEKHt8XucU",
  "key13": "3Xy9j1xqCersZmwr5QXjRbCXDmhXajamQyeRSWZKgG81uoSeYvZYmCvTLXSCaDQZGvrDKN1nAYabKc8oXpbQwuin",
  "key14": "49tti6o7KYjuRLWKxeK8cf6nGhLF87GwZYFP8e5mBymHbqM6SAXGfzsXpkFsiZvyzdfoiQD3aB4BBm4fHhrsK8K7",
  "key15": "2PcS5fJttewHZyb1Jg1VMkFYXKX6C4XVzeApa4LJCNMZz8t1iAvS8sMqbMYEDn7EmZqUKZiFkNRhAe5k7Eda63de",
  "key16": "xyiQmDZxHrEuHrbY83k3AnKgdeDTBqRbiD3HkgQrQp6b8vUYLETw1HAVLhbuxSyz9puohLmAtnPfadV8RD9nm2N",
  "key17": "5bPrXKb5GgTGMaSWLcvmst4M2TcdwhfDzYubZ6h64JnzTuFrFmvTk4k8UgkE6DaHbvrB9UQfcjDpkbdyoeXLx9vi",
  "key18": "4SDS4MeXcei2gCSR4UVd9aHzaL4AY8ogJcNgEZbWWNGVwLLyKN82ynm6AZgs9wEjsm6cteEKPK3ng6myFJCKj31o",
  "key19": "5xMKbapZzrU7PmrfUarqJ7VZkKLSjTrrZn1nThYhLHWb8Fw13sMuDfsbvCvbN7ApaxeydLroEcwSQY7UKBPAXTrG",
  "key20": "5GfHRTs6FtE1JbmjQGs77TZD5MToiCCoc6eMf9kd1VtS2MDJdxdmfzCC81A7rib9Srkzvu3Cr65B24doCeAE3cA1",
  "key21": "tu7A1ptG8pvhiudgbvbXbEZp7rq58baigWg8nZ7muXQvCSMxRYgrqhasnKFgQaDKYoFSZccMAcvjfcQyE8Vc841",
  "key22": "26LM8L6x6gK5zbRhX8xWVtJn6da11F3yuG728KQ36HqAhqPMwCQzD8VJjE6c92wzZ7T2RdQyFCpbX9L4ZvDJoKTT",
  "key23": "5dhTbVundpnjKUfy5HdSCFqZHKcur5HQa42Do5LnZafdGcfmKSL2VHVi1WjsYHWnLMd425zys1p66Lk2aYrqh7d",
  "key24": "526mHHt5oKHdGTPqDB2KNtRq8ekuR8crdFDH433u2NJm5wwfKucWvtJ39KjDEQKCY8UPN5VaGXTiDW1mkyFyTmnS",
  "key25": "46b1txnLFtAPjJgkxkTaMVfenZjr8ecDRS48k6xmSwfqPPeYwDveHhdTfD6zzsovn2GmPvqUrFUvZzo2NjpCes2X",
  "key26": "62JKh8G2qNFku9oJTqRKJc3xS1UQNKKzkJjegVrmhtvTHCCjxAnbwuDfQc4EVA9nintGEVweMhExgsRh523VLfDe"
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
