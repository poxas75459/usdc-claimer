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
    "5WezSSU8beek3G1FBq5498jEK1bgLbK8nm5hudJ2un7MM9ZPD9S3HQyMFbWHN1xM5wykQXSWjCEovrNh9wcpdgqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pq7Xyd8EGoZpJo3kmzwnjRwrXe5ib5E8A2i8kSV11BSEPdwTZxn7LtXqb6Um3fNSs46sonvJcSJL4wRrhjAN3Z8",
  "key1": "4XxhnmBVM3BFqMsayoNpGNGDBA6gNQWSTYPGaWsoYhCnuRsE7dD596nW9J7k1HFccueuFEsRKUNRmdvERA5GdKqg",
  "key2": "3DPULnzYDY1Dco38A2TsMhXMTFkQ1MFYpQCn3veteaU3EfmjCJ9WbMSNTYaihCNqoRyh3Lx97BhUMZZYU8SUcHAc",
  "key3": "4hR7M5QhzuTbV8StuygMPs5CWjrCUXThrxtCsbh3bCf9HH9xCPz8hxpCdD5kmPwCyJaTayNh4zkQr2f1mD5wbncZ",
  "key4": "iu4Yjc5XkXpUymjivLWaJfxzp7xTDddH4A5vQ2Sy5mtQ8npZ5of1rJEPCcGBQ9zwZLFxE8CmSwDjoxeqF4beKWN",
  "key5": "34ERdJbsA5Ed77b9i3cAwuaKEM1fuE7psKJHDNekEwQYjoZMJMv9RJ7z6HhUVfaqhmSj7eE9ce4aZHVbPYixw51h",
  "key6": "odo4QJPBGwXGwzAkeswprSeiDMgASRL5QPiag9jX3BRQ8mJQamtKuBZ4rNXV35XHwjTugU3kwCaFKvGeK3F5nVT",
  "key7": "2ssbSvh3cwrBD4M8dhc9aaBfUxVrKW5ZqyTdMwqiiorxNP2SxRG55PqmaXPgPmjdKc4fRhiCDvZTpgjBE7oAtrBn",
  "key8": "4CxWe8pAZskSQZQiFvZydX6JGGWbh3BiBE1X2uZygx5iTPxQzLyat4xvwetAy1zuvrk4yYJUw6BEvyo7Qupx2HMA",
  "key9": "2BjdoSTCop2E6WCCYAjmzAPQmAFjQxcuNL5bMHXF6ehZ5DhPif5cvwjrKhrRG2dH4LJKEXDKMWY7KB3JcZdE2QNR",
  "key10": "62DBsBHGe4Z6qpZ7oGMewTKqycAivCcQ5rMFpifVPHHyLi2umjuuVYyR88feYDtjAA4nJg92qBqXUuBkbo78WUW3",
  "key11": "4HPqu1qZ4ze5fHUK7b6yXtXggD73N8d65j86FBvcWRwb7Qc6jKN1ta3TtJsMWgG1CU9Y699Y6CYxMwy5n4x3sN7k",
  "key12": "zLvCSUwTnwVCrGj4oXMTQWBfpwj65XUjYKfnCNFzieScZgw4oAER2mbYzZqyEsujde79WRW44iu2pv57GeWoVkh",
  "key13": "31gtkjYR6HpP4PP2qXixfxUBPVVG7e4But5TZcyq5EWsx3yAJWMhmw8Pqk2hWD9KmLAZwB4QhwCRcjQJesQzuh2f",
  "key14": "5XtegB86f9f7T1DSWt9sqa7NHTgeMD3h68iXwzw8U4oLmwuiPEhyBQFfhAxT7wqpr4tSmVosChqzfpCvK5cAxxyS",
  "key15": "2iL9ba58tD2cgWpbhqtobYKs3rEAbpiLXg6gmaUtfjzrjD8HGJdgg444CA4A8u5y5TLzxgDRRkSWCmP8wjERFJAi",
  "key16": "5P1wbQtuN5WwPTv5nicWBugucCfHyHZo3DvRzJVHmwmH7bBnHeAJibeexTyWKVVP4PcNenLBu87HMf8iXtXcNcrg",
  "key17": "3utLgQu7Bw4gnfrCGhXt17ZzwQ3JEN3sPo6p2xeBFxm5oN6Hpt9A524rLr2aPvHscyTuUwkPe94CWRQs9oG17aTH",
  "key18": "3BrQ29ofCtL7sNPgyi3pDw6Ho8eE8K3Y5ruDfDek5nzwrXh7AoJtdXGD1zewCrAD7EJHUsfAv3FZe3m6X5Zp8wsJ",
  "key19": "3a6vCgTxRKXHcNFhkUvPgoYBvDXD4b2UhxsD1jo2AhnmX7Uqh92o44uxVYrK1R3sGpoQJi6NTfySYWcEN88rbDRb",
  "key20": "3vuCioWfn9Ajw2gCbqYCVmectg4aZQnMXVK6pXeNzcF5A9EcAWfM9jpgMjbvheYHTojPJQA9GcQHFQ9CkN3R8fMG",
  "key21": "4Q71ftfUKkC5BMHAkHiQWsac4S8JeosBLone9eZGEc6PcYw2GWRGBdX8q57WaTiKGAEQQxzxtYB88Mv4tehmCWZA",
  "key22": "2GSTHPtQXGrtEpCqMmvRWsoawH9Z8cPtExuZi69omqQf3V5UFzMjfWTtzxztZJFEd1c3vkp15tX42b3P7H8JsvH5",
  "key23": "62wDXABCMUEU1zczrb5jAdbbr6RJB4JMXByZ9oGd35jQeotcFs5pBi1CpeCfdVsZTh7c1FccwcBworcvVaHcCEmi",
  "key24": "2HDvkognApoa6VhgoUbet9WMAFgEKqAvkB14yMko3w85Rpmp7kG9QNPkhuf12xRv7NrzCZQmyc68Nc75dJahMNvU"
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
