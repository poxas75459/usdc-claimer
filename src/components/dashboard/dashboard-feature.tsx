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
    "48kh99YFp9vK8LPujC1Youceh1kFEJbeAt2dWShBWY28iGtgmasxskbHqtKHpwFfAwTGhyiXB9emQebhh2yFYdyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQjfVUdr6uoYpyZMZJC3NdJPkG47vPw77iLCXLin5o1aPWU4uepdSUwPpwNgknipvrmbZ5mTzyUWQKWz737d1Co",
  "key1": "4nShBMo2xzGCKhrYShfKd5ipLYJvfVHFyPwMFYBaaiqYaNoyvqbCezn5fRBXxGbqGEQiey5DcRJkVVRViy5sWpTf",
  "key2": "2oaVYQNURNs8tYGGwCALfymCSi4q2kuGaqMMKQdYB9xv8LnDvoQMTryYK7EuRdCEoVXAQuWRUcrh5GyhMk1KX98A",
  "key3": "2FbCqt4XZWaYNgEGGrcacdfKpg1gQMjupQ4H6Q7YT2cFjczf4YABevKnktaNpWAJHCo8n3WLJEgJSGLTnur6FZnW",
  "key4": "5oKQ1V8nX9U6pYF6ozq5iLZvXqRe2kDEduw4Wp9Fk5VjhBsGHMm9nEFeUJmE7pThF5oZHUPTQhosiiDg3KT7fK1j",
  "key5": "4m2kr1Gu853sh3QbAeNGCTdCT6YJPnCmZ1FhvVGqPqWcR4KyjKRGSpjPdkoApwxEV6GrumW7i5Cdu75kLQCjC9bS",
  "key6": "fnKKfAnGheQDyviqJxeHCnB6mxjoWBh4SFgGCg3NcC2XWLUhcotdUy5PfrZcjLeuGs5fWs1YNoN8zyx8CfDLhM1",
  "key7": "5EHLP6G3Abyhojk2ycouvh7o8pizHkUFDvUXL4uxrV8Hdk9g3JnDVrHYGi5LRtYXxEgKtYbjLyTsGTeGXpXX2dYc",
  "key8": "2RTsAH6WuTyGjX9xuPh7xCKAHa9SM8hZPF3s9cuaoiKBhy4gMFP53UZqGBd1GMEAFPs3S1cRVMPpj4k2SyYqXApg",
  "key9": "2FL8QBftmdq85GVbWVba27kSygoryDn2yW4prdYis2dNB8HpKvCqmuJBEWYi7zhcy8xPYmUMtBfm4hHSQQVehgBT",
  "key10": "5sS6megozJLtwNDQChyJf3HT9axpZadeJ5VWPnQKEjVH2ZKiXix4L3YCRx1b1AN7kHtd8hYygT4kPHDzL12mW2A",
  "key11": "32qpBoABRmFoFhpsU87j3iSeVc4rvkY9cfhe7d8ffm2vfM9dLkLmV8hfq26NKu1VGonzjutfeeQ1jNZutGVh3tKp",
  "key12": "gVK3tjRbPTR7AFP873rZphBdPu4rtkY4zjfQcofS89GLiSPTgik2WCzGyAUd6iW7VPMivZQKejzxsAhgWf3abm7",
  "key13": "nSi19xsTVxQeiPeg6Ce7gZWGssU5yMaPRd7ERsGHEB95tQzSXk2DfmZWmejpsPr4h75hWFHaJZa9G3Nd27FTLGB",
  "key14": "3QKTYdqsnG9uZsTykh3X5v1oyHnaL3E7CXp7x6ip4ghoEvZqh2jCMvQe5DCRwYpdedQHNgqgxwHoSPkV9taQ7TL5",
  "key15": "2Ng2pRctboKLpNZwNfLpX71HqDtRb4yA7k834M8a8zj3EiQzeYyK4ERwQbBt35hgHqWNfduutdwUqRT5MNYDnsZ",
  "key16": "3UM68FMTJW4ZiAYKRgrcrkGoaa9eEWpNEkrJ4GfrMu6mov8uxHqo4865aosLZ36MyzZL2sDPLKkMmSunEQaWrSpn",
  "key17": "4Cv4NK3HFn4Nvp4Wwqf2g3deX6fMRgcAP4DNEJAmtnceZ8KcV54NvDTDLwU56Rt4ZYKsJyAfBb3Jh1WxXETDPai6",
  "key18": "3WpALBVCJbcdcMDQkecEUyQsvNPLQ3jXNTJYqSrEP38ybSBsE9envEuv6miZVG5mQpDcMJRDJktHhfHWh4zEJMRa",
  "key19": "2XraQPTTjps6SGpsve6R35j65NLEF28atL1tsfGkWPnowKxfgGYpy3b7UvVXeAF7nqPSdfCyyPMQT1uLt1VppVBv",
  "key20": "2ZX7P8cerkqx5WhegoSnLva4fuin4hMmP9z9zDEGRAPCHKupC9eb3R89LdpZiAaetqnQFFCLE2wq2a4DrgEGbaFv",
  "key21": "2pTJbMSkViMJyzF78ksz2RDDvHnb4vETBJWtoM5KpAHGz2JKod8vkasbywCiRj1Awb5kKN8GC32WqP17ZLuY2CvE",
  "key22": "59UKN1fDe3sbEvT5X215E94gvuaYxF9EsREviCunxsBWhhzaCV317pD6vg7xMPKsRwBhUoD8gJBHYaMNY66j8DCB",
  "key23": "2ZD2tXtt37R7iCwr4g92UmzxQD4mtHAhTg4sapuxvMHXFi7hR9HmF4zxsNzZAzfqHehwUqWkM5MtFQEQ7tn4Rtka",
  "key24": "3k3C4KwsrgGxzcQcwbVSfV3ejqgfQiJR8atH9skuwBU2g4WJ7VqCTMPm4XCaxuVMgP9XFAwLiuoHpb4AuhbxdNTG",
  "key25": "2ESiizzyZmbgqaJftv7UhRLCnCVtuaogfwyjYh3rpPYM8nVqZAzy6RyDj4mCRJM68tdno97f2P3hr6nNbZyUmBgx",
  "key26": "5tbSQT9Y2s7FskQF3jpPAAMU2EJfY6a6frtuuxL15E8qQSQSxmoKrgKVgfLo7oFQw1ErMKRv6jj1q6fwPhcgWZ2c"
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
