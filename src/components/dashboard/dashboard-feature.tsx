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
    "3rsZ6juj83HVSs82ZTLb3vrqayiZEsY5v6juNYMoypHzTfYEdtGxBM7vMZ5md6UmWkfAG6jYBaYGkZNYKcY7sEnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QxkcSE6G6MzfzNnQSeHrbCywiP2DYRPxD185cT7h9D6xr1W79tsP2WR6Xr1aVmcJULZZsGwgKp5yovCjg5syLCX",
  "key1": "27Zm61h2eq3X3oa4Abcb7vCSZw8sBizUdwXnsz2JPULCPf2vsAkWsuwaB1EPxR4VZgZpVTaeruHFiEwkHXkVkWrw",
  "key2": "SH3arpuYVTswe5FbsNbXvU9Cv6qtWKN1q1Aa8gUvjeyGVKoDZeB7B5zdRbvvFqL9xtxJ2wUH8CHKVsMxfuqR9Be",
  "key3": "4jXxxkQV8qUnoTvvDbwCEfLzR7gxR1TT2iTYqyMS5hzCXkpWvYsyCpD76f9k3o8UFz95rxqHq5jwvjxV66V8Mfnm",
  "key4": "2xchMVgD3X4947cJX1VsMbg67zMydspz4tSpdnGJcACHhQtnuJ6AGvRKQcrCExN2vfeb3Xf7S8U9EDhfUsu7N4dc",
  "key5": "2aW7urXWJBnR9Y46enLZp1HnERCs3RVgzKzaS987XrLB3SghLKbJDRp6sPhYuDndeNi75V3sev1gQfYeqR5gZxpP",
  "key6": "qrzhGNxPZGWqonmT7XAKsDecS7uBQkAm2Pq537T7uGStLYR7tv63xVVx8o51bR8MtcqD88hxEdAQnQ9d7ZmGkp8",
  "key7": "3qEYt51F9gh1ExwvtmcTit7ffK1Y5mtqeXbETAerMswRWkETDHr9oQfuavqLQQ8WnUEV2xvT7x1ehFuX6GXkP9SP",
  "key8": "4UpCXNA2izUvcrJE4rDVGsu2Yh7f4a4PvHuKdp23cCEZnXFKtb3KWJQn83FcwEP1QBGYAatJEzu6Lj2DyNdRbnyp",
  "key9": "5ftXPUUj2pA5yhDVVkLb3jC2aCVa3YzK4c31PNzWWM195ELcGjJXV5BHtjhKep6Q3bsjaBP5xyP6f6hjU51hon7i",
  "key10": "29LTme33zGrFQyQfEasp5hxqzAxrUMtXsMGzDWnhtRFtLrCvcqs2x1KChFp2pjGjASThb8z1vPr8YzyHrVLvUya2",
  "key11": "2Snfv8mWECarF2b8qCfT1mFUZNskP7SDQBDQaaZAaFKqRPcjAYmDCTRSHVFQegsYGQqQA4BymXXwqbF4p6b9tsJw",
  "key12": "2QyL8T8nNGCwbtJptumbasgLtW9yd2U55yB9CfHKdEZafTkSSRMxozQZqSAytybHkHywCDgp6WwEamoid9C9sbRh",
  "key13": "4yGBH4me8TH2kJFiJqC5WK8pRF9wfAZh6BbdEq2ggWUMHjkMSrmCGvDEAmXmd5E1jVg1Y9TaG8gjdm6pxQbVQQGz",
  "key14": "27kPLJuvMQt7523XPLLk482nXyPEAS2N5yZbkotGASyno9sPAmr2ESMQKTFCJYrvH9AQu4177QSu5A6EETvuuMRB",
  "key15": "4yGAgJR2rcStDeyMbL8ZeV8x4xDzn2WqArVKuqNA9Ws6PyMHJEShhehVhrkkxHrWVFkEepYqztPuE7k9fBmcHFsJ",
  "key16": "2HtcuSPCq1gYeyxbGn4kbjrjU1rjyut3BBLnnUUZ7SaKpa5dNehvo3GMVKrLEvNJCLgYEJLyXeBV6EsunKLBxH7s",
  "key17": "4FgirqaRLbK6ccGfMADPYmR23mmMu81AnX5WmJs78dW3JxsYhsaLHFcmUg9wFBy8pDXBgoANNe29oTyGiGMSsWxL",
  "key18": "36hVb8uJTCo33HMYmmWPjAuR9hQ9kxgBL9hwwgXswyia37PwXQJDhB16fkj67DXMWKncxz87Dk5SseuggjZgBswg",
  "key19": "5HrU4XrmwH5QLEkA2FzZqPzyaSnmsx5DsPZijcCiCTr7SV4zfPhp8f4osSiLGGVa1YYeWD5GiPAAE6jbW8bof3ss",
  "key20": "41sayN42Lbxc6GA7Uzv4cjAgcY2kMXgR89fUYNfgrLveaLA64sG6qD1HrkKCCFBqoju7adv1ciaKVv2Mmf7tDUXG",
  "key21": "5mEPd7XGjJPLRgRnnUDk8MRjRsut2LNh2PAJyLo23yckJFYf4nB55tygGEBhE4ZWK5ZbBSKdggevv9Dgt5ZvpKi2",
  "key22": "5C43J6G9pi6QeCoT7EnJyDm8PyUNv1Lrd54ggK1SbjRiLUQK1b2KNWHasqaeHvDY9bYhMGvqcUwuXevB49mzknVF",
  "key23": "2bhmST3GEeqRoztsMtk9C6bb51CLwWbjFkUdWa6KUaHcoSvghNE489w1kJHjMLogEoSGn7E5ScvFcYMjSNsqKGpq",
  "key24": "UDFicK2RBsJ5v6Cok3uKD2cmU3gmVrLgeqUa9rLvyXRhoVH2LdMMQ8tnVcdLyBQ2F4iemTSqefU1U76fVw4QAsD",
  "key25": "324E8rgBzH6R7QGJD8Y25KrurByakTLeDPTyEPhUUL54dKc4uE8hTf6yAqRfGwiuorHkJjSzebDkf5buTPVLYbxR",
  "key26": "3UyhKL1uVz3nicgH8f3xmFvKSk8cfvKSDkg9jk9LSRutPoXoeDTZEHeXycVCBpsWnqua6qHvNm5BUP4ddms2M9WX",
  "key27": "3zHruht9jsG2NnMW4PEJYqSRZTw8g4GHqiyLxbFXYUuRC1uVtEBqXoQeDXQPMDs4bNQNHMSfxTFvVvaTdXqfvvZT",
  "key28": "3NFLA83YSBoko2xyDwJ7rKqSLFchyDyH2oNUxpcoP5W2BUt52Xv7J9eR7LLJvmDuXC9kTgZwbQe3CwLKAu5LjKKK",
  "key29": "4Dk8RrZrgkMwQzCQJnYokqzZdDZ34p4rH5DGNn5WZepzmEqRfRWgXBRYbmPN6nMywHrzCGBApWL3NkAyS8WSQ8Lv",
  "key30": "2jgZCGJfy62o2KGVXQR7JbDjzTTsaZ2EybFqQGMdaAqeMpyZ1AA9DTqrZdPP114HHvue7VoL25umeJ1qpcqmrNoj",
  "key31": "2Q8kZXyNv1vGrRPN8Q3bh2BVYU3QeRzWmcn95z8JbwEDSVAfGcKZffPyahMAUug9D4Wu9p6Q2ULqvzDWeYtDA5Dg",
  "key32": "3qNmz8HJAAcoSDBEiqTGXNpvrzxamAsT5t9Paq5CEvUKtaCXrfQ7x4QrJzqZt3tJDAsCeitHP8Rrv7aZnuoT6aQb"
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
