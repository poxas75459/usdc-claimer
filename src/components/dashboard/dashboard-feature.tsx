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
    "2Wx9eVDuRbZXWUm3qyiRD7u5btpEvbioLc5njMmnbxAS4A2rPbgoBtgctw5mUr7jRfUoi3KXVobAEFMJVzX8TG9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGxYKZqkorye1fTGfKteVtykxgHD8dtXuz9QbZz6P3TgA3rUWqwL1jojgJz8TYbJhn6PYv6gBynwSaDq9RNYyru",
  "key1": "4uMcvtXMRBLmxMs4XUaF88bDCQB9spm8rvX3kMq89D7guXyZWbf5KtxH6GrzxEP8LQC3mVsFxJA88FzuoFM8JQAQ",
  "key2": "MpDKHbsHmmsvwFMR5uQ53ZCjdzxCNygmuLFfdnWuuKh85WhUBXBW6SYTEG4ELB7H1oaLbnD8bW6NjGCcyB81EQk",
  "key3": "3cDD21phfGDrsmJVi7nvr5ntxY1MDy9E8ycgjZuEaAA27oqXkkXcRKTzkDUGkGWwfCHVj7sdQ9eMmRevNfCsBp2d",
  "key4": "3YEwwFnxncNvZLAAraftuJdR4EVbyya76RqNAGy4qRTYb7XjzU6SC6BEyuSm85jziLEysWuBApYaeT1N8TDR67rr",
  "key5": "5eKdc86aNLnCccmZzxPk43Xh4ivdsucwpwLWu9PGA9RYv6jKRSrMk2bHnnNS94BbzTszWxRNZdPF4zLtZYgD45GB",
  "key6": "49R2sCpqy6ttjxJv4aJvsQ3u8ipmPadywTFjSDN7syxWzTwXG6frBQt6MdWorCnznsZZE93QVL5p3Nd3YnegzC9R",
  "key7": "UudVzXaG5jCJvRCmY8o4reRwc928y4R7k2QuyJMVyP1XhfcuPVxqkom4fNiAiLs2d6HwMPXeaenHKZUy5HPPLYM",
  "key8": "3BWZ4t6hwFAZkCzsRH6ogu3GQCMwX727D5kPC8JUZwbduCKX8e4Rx8StHGahqW8b8i9jPWjNfbcpMw1H14Jk8EbP",
  "key9": "2TmXPvxzgpp6ju2w3z3py7xctVywiym3BxfErsJS2JUVhKhbrLWK3Q2LAbfW5cZswJPfAbLd1ntBY3jeKC1Rpscn",
  "key10": "2MRaaZW5Mn6S1dKUtz2g5stnDuqFgSMzhHmiw28Hhp27uVFXYBpT3qETKUTP54VVAZVWb9myZBGVgxAo58bhnRT6",
  "key11": "QhiVi2ALYw6Sus7xuXhZKZEU42ju7yHw5zmuNvDdmTkGYRykf1GNMByrrb7BN1ErqD7jGCcpYxUjG4NZWSiGQ93",
  "key12": "J77sQrQxFWqSYNc5L3fmdLmc4uu5FeaDgzDYtDELGuBcR72MjbBT8gANndUvboZ6Wrn4ojqMrVm6mth9tGP6E6Z",
  "key13": "3yZiZFWPPBHqeJue5WBR89LMqPaEcks7x6eGpgL4X8fjpwp6uhGxMeSwZ2uGJzKStzwx2Y7h46D9w5X9ELLjtkhy",
  "key14": "2SYQg9ruXgCueZVH4TSunz3ZmNbu9e6mhuCKNSXksnmyYupbuWDHhHfJNphLLsKCKEzH5FV2QfWhoWUPeUrBbpwb",
  "key15": "4XTgDNEPymGNCLvGTeMCEMqCdMKS4u32zSR7nhMKqG7XfpCouBGHLTXvHXjy527G39dbiP15nwR9QX9b4TGkE3YC",
  "key16": "taf6ASTuXNZ6sS9wRPvEbiwKC2dkaPhNwVpuD7in7vBmkPe4dDybEPvwnhqowzSsfx4M8gPcbDTzgwryU8Np4KC",
  "key17": "frhW2gdyttm5X4n5HKDukY6BUT8oWQTYuKdnj8bfjEmP44BSH4g5anzbyGqyLvB6bawVaXQecnjAY7YYWCXkxop",
  "key18": "4SXyu2EcDFpn757vb7Pf5v6PBUhZJRuJs9TD8fupV6PApevXnHH51Pztqtw39YtGj2fByzURU7qvf6m6bxdXHtNg",
  "key19": "3jp4yYH9j6azSDx49NFpJPV1WSdoMERQnKBEMVaLJGSvSTtmXxkxnMYnN1i3maz5jLN6BugmZcL8aCPMziS6pVYU",
  "key20": "3YvYqHprgYFTtSnJigMC1jkRxq5zkVAe8GvAzGysEVZR28xt64oBqvSt77bAzDCenVy6sB4xSLrZwBhpKpyn1ybU",
  "key21": "5wvLi3isdM2LY5u9vBFWZQG7b8AEFTzCvD9DnqpV778RAY2CE5htQTL9f5CaYxRUoDJgcMAYhgnsbkotpK17LMgz",
  "key22": "34zUUq4afx48Yi4eW8PCXVi4JhvGUH8b9R3LM3Sa5cAhLcokBjksc3P6ZTXx7W1mSaYHFdsCYPmaUG8dph6XKDdc",
  "key23": "4QoZGgZiWiXRprgz1mgqkLNkbn2h3yHkJL8FXtzz8AXjzQH1pHNGaythdEeQ6uqmVUihWL49V3aV92xN3PjKNkDQ",
  "key24": "4VmpnEemXNmDf2QLwDUf7vA9L7s91aXoMTvmgVh3vcJ3oYNiRAKmuJ7Mhn4ZfsfufZj8rre9uz8PaPG5U5iJ448"
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
