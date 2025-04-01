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
    "3f1aQsWUh5Nh99yHxkjA2fiaEHTmVyn82bkUUh68gJAWdP45mvXYeY88Vqow1QFDwqbEebXGpXvoQbGaeXv836Ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PC42PRaAdsqETyYN5Wn991DuqJFpieB6xaxMtCi5yE3MQhpeBAbVRDkkV4zt7jq4coM85XNrHe2CLkMT5QMoedf",
  "key1": "P2ZCCB8Anhnr4VpPXcQSZqsg8j4jazwEANYyQ64yMVM2tFiEK8kzyXhQpWMwVRZBAnYd2Ruj1jZaQLcnJGA1sET",
  "key2": "2EomApDqvoUSEHZPyVCNQsgisxaQFCDp93LTGp1ihdUwGbeqTwB5TN3cdveU7rcAJdrneRwXBSATLHNsQfMMYzCa",
  "key3": "P1LKznBqZSv7EiTkENY7wzK24Hvi7gz2GJfUFTKq9cuhb6mMK1XjE4pNGkG9gYPFS1ygQ79uDN5mLH5ivUng8Jk",
  "key4": "37ZosLxJ2m5ne8fcLhjbdPa9xXh3XvyP6pH2jVWy84emE9FW9KymQeek6u3CVsjmZh6TNtTZcC5YRfkT8BjXi3uz",
  "key5": "GT5Vcq3JJQPujkPdRQkLqStZ7UAhvPq7J66W5PqC8ekwLvtuwYFMMsG5axftvKMG7uG6QABw6m1xDZvy5NMRfjv",
  "key6": "352MkidxQVW8WuHM7JjcbgLH7spzYjChBSLRqSGTzKLKBqfNdusG9xYGmhj3z6AmnzEGj5u4Mb1X12RD7ZDrHaz4",
  "key7": "dAnY4G7QraeSHUoboEDCPNYJFirDkBibVNYa3D4DY8WMqEkfFZvbu5SPDP2MhJSpjdNFnnK1K3x5NWHvW5sGo6G",
  "key8": "4C3xUUrrUgtVX9tb4XpGuo99cE6euLSHE4RUvbtoHRurt94GVMmK9exdrtpkL8w9VY44CT6pofAj6KaA8idjMyoV",
  "key9": "JEEucioQXkx63rQxGEg9XiakXzSBbia7KtkPjySoiAd44BnSFj3FwEXaLoqLPcEaE7q3RTxaA3xZmrmqrk7g7Es",
  "key10": "3VtWRQRjrojLhgqTbwpJEbb9vtejfD81BZgdJShR7BL7TiXunsSwayTtWHTacHRwrkfwxeEC8MP9w1CYc8SHQb58",
  "key11": "LY4jyzKDDQf3jBbMZxNzo3Ffuu59kf2mZAuJhthwjsMyfv8iGiHRsm1vwpzYYqdJHcGAiWD36wjWtseU5KzTyNS",
  "key12": "3V44pTZCWDxVsQ3bq8Z2F9SQp4QGLUxTbbS2FaxP1cQbPmr87uGVj4zaFURTpAA9Wtyu2Hvv7WdZQuxbeTxDuH1M",
  "key13": "4ovK7yzowQBbR6EdLGApN6ha5CHc9fvS2uHEtAURC7bEJtSgUaUr2Rah9KqPUTRbXXA8kiMCCazZ21fUr7e3Kkz4",
  "key14": "5C9V9aSRVWnEuaFb52NaPQNpr4eeubSP3Yp5Z7vTkCkkkc5QxmRWRPeFpsFMNTYw8C66vSmGwpx3troW4FVy5Ras",
  "key15": "4gprSAS31LKQm1Pd56VfRbX44sZQkaHq21eGE7UbdU3Td4Vx6PR69QnRhRjjC1yzfyo4sSp1rUTaD5N9EbGHdp9U",
  "key16": "3M8fxcqQpUqjePtfjfdVCKZrjnVPAnA6Bq7bjap2QNf8sSVwLgfadiB1usqZ1LP2bsSLR95jGVUyJQt1bJyaygQD",
  "key17": "5Eit2APw7yZygRWKzrhvvyMH5dES6zt7aoqSNmTnzRCZnS5qeqy3cTqN9AQLXLEoNrUJ4Y9FAMRy4q8nDYJFAXfJ",
  "key18": "av6AKb1YUU9LuYttJmbEgdgw9p1Dy97uQY6E9JBbSgFyEkZ2Jkpo3JjmmZUqSjpLP19gnDPF2CtN57QbTZz29Br",
  "key19": "2XUfbLD2tLSosZuQaxRbj84gBsPgxizjoyoBnTgRAUVwAsqVza63ksWrYSctK92dkAqWv4Zknrqo2Ro9aqH2W6ad",
  "key20": "3KABcATtUDsU96BvtykX6A3aqLwSVDdNxfesAs2LRSngQ5rFYeGXM2oTwEPuy3apoMn67tzXGLbQUdh9GrjBxRuk",
  "key21": "5QmpbFv8YTqYQgDTMheQV2YG1FKG85om43aDDPycHKXvXwMKDizqkfdZvpxED4ui8VzAsubh9NXSQ6LpF6LB87yV",
  "key22": "5FYw22dRs31DvsdP9igwyWzggrcjJ5S9iDkpFNBgsos426qWSUmWs691VaE86pVwmgBgzPxWoFodEHuJpnbTGUvv",
  "key23": "4aXMNXgjZsz9dGYEveoT3o12WeyuBb1oMP9DW9dB9KG9XH6MYfydxnSjjG591RY21i6H7CfpoesgD37mjnE42cFb",
  "key24": "3tqZirPMFGqG5GXkz9MCwhuN76TubGjQue1CiAh1LBK8v6DTi1i9gpEhPZEoCUmqx6AeDiQgEuAGBY5pL3wPQ42T",
  "key25": "4iyPtgXVyr3nXVfVcj9qdL6oKxMGAAZ6vcMKNacBRaQQ6QxXBFBEVCv5A837pHWA6ejD5oEucPE7fuPR92xJaqeb",
  "key26": "SuYDgRUmhgPfZi7UJTs5YM7SPLyMW3C8gxsQfsue9mN1UwcWVzA3wFw7w87YkQm3Br7YdmPzHuBzdsBfmsLwSpv",
  "key27": "5RtCkyrBzNqqFHxszgGvxAkhz8eYbZipPjGwNFdfdjtP7CERrwTirNh5wHc4UyH47bcWJGCJqsRhwHstMxHPTUCB",
  "key28": "7m4uuGavEFcCCZ2ZiBFNwGV2iny66Vartpk3KLNV1CEBru1P4roUUCtGBW5vBE39AqesWZYGRU1VUZ4zSE3qCNy",
  "key29": "3cti5AXop8KYsSukBo8tCXhEPmfLRE3xYaADZCtFYfMBoLQBrFAZZnTe9PVrF71BhRxmw9dxPrAM5nsQqk8bFo6D",
  "key30": "5G7x5eWwE3PAtjsyrBCx5jbGNZdFJVh59RHh8QtLVDMpdEKEycNb6oEmY9bi4cGFQwAuGT6DNcCGyuieijUtTzEw"
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
