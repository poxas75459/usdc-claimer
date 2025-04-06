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
    "4tvEmG4dbfxnQtNXkima6Lhwn9dCkNLLYk6DXpy3Mth8TvUsnHnzoBEFym9adFMt2uvy622fqaTJSDruES6DrekE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wrhkmuvePuJzfVjMDrXuUKhQDj4yvAz1Xu7DmZviyG1W4teypHT5YqTxayojZUwQYd8QLxuWZ4d2bk1CTN17Hb",
  "key1": "2rKwLnxyLBgJDjmJq8DMHHgTM6ui1Uv3122rEjcXQ4AoKykrfxHJ6wmdLaBWykMMUZeu5cV8UN7bd1uxBcWqncvC",
  "key2": "3JspTDKaktN4PcaQkYoKviFKoUnPdBL18jxyXfuc186WnHkiNMBTELVKJS9aoWPP2RJreP8fQFw64Gt6rDsKz9in",
  "key3": "ZyMy7Tyt25KuhnDDjmFBHXXKgsWBZhxBvAxV1xHuFyUXgCjbNvUNwKvFFZohtz7SYpejBZAdWoTwARwy69mAPzj",
  "key4": "3aBxi1Y7n564zf9WFZ5GKfrL4afuPnckCpjxV3CoDx5UesoEnSwbnWEDCmjSWZvFvBMQLz927HB9Ktaa4VyreWAJ",
  "key5": "286piBifX9JiUg2uFm4aFDrPxL95MApqdSMhubjhoqgzREA5oECqM6Gp5CmURN5MpuFGfVzXiDWDvzme1MD9rbjV",
  "key6": "3rAxxX14VWGNDyQ8FKDtTi86orwu6hsduDDTZvb5qJSjaQFWL4HCU8WG1RmQGg68dPeJNrx9sfLZQZ8V2NCAXYjM",
  "key7": "5o7rfW8BcmxFdSobawtC9ck4SUSzRxKkWvBAucoFEzoHs1N7xyX7T7L9uKj3QMQwtqd4jf3jxN7vm15e2bDT6odi",
  "key8": "4tPKAXiKDBwoSVQ1uQ8yEpgn4oRfaVBb14KyavRMheCrZLLYZfQuyJDNm8kYQQweqVZdcZ5o9BpULBTMPvqaQf3g",
  "key9": "4QogPhGGJkgtFASbWHt8Zhozc3mJWWDd62c6814DkVtvi2BWi7fZaPNrQ6FzRLaUmAYNMRAmfsg5GcZQ8dt2YRi",
  "key10": "e2AUxY7qyYgKmFcQXDy3yoKWMHUYfLPDWmHoYUgQMpY8hurAwANYoNUMhKVNSgmmU8pYWZXDu2UaqgvaqtYPPBW",
  "key11": "3dMPeP7tqVGkDpFFYi19oqjh6Uf6age41TQXuTfaWJPDJ1V1Z23z1nt7tAQY37t9iTjVNhLfUbBxhXwYsqf1aJPj",
  "key12": "GVC4VDR7rsqn5ruXbTBszgYmmm36SMtNdDJ3HqmYrv4skt8o5ZdUriWVhv2jCtjxcCXQyNifcXhFJmw5KrUzYgQ",
  "key13": "2Dp7voMDi8cqQnqQrVMiVNMEcUxmaq8Ur7egrLBmEX77pNzigrwx4tKh9UbC4m4p3omm5YRcU8Nx5ciPJSf5WPwn",
  "key14": "2GkyWgES2ZYG9aEsG5uD7afUm24WKY3s6RCjAXTS8Ry43ARCYe9ZJ5VCkFRSQmHHMySjYe8JX6urntBgUpWNPqTe",
  "key15": "5QwB9j8oQt3QL2MzwvuczBjajRg992Lhoy3CZdWBQn8fPRHjLeaw38FczzPPsaLbM6m6hp2DDEFh7dZ3Wc4kbn7S",
  "key16": "2cRRcXUjAFeu5a8Eo4ToqDJKsemkFnjkc4vKehAraPzgXoTZ7Zrefx8Jrpjdcg8HpGs3ZUBCYzcaUwftAijLCKHQ",
  "key17": "5yFw3AFB9nUPswA56YU5niUwUgZh9cqS8gnY7Cq87LikxEXVWn3yapsGSqHNCjBXw5YFCevoXKCP3SsCPQVdTG2H",
  "key18": "3MLGBPjepm3jnp6QvprebiEiw9CrmBR18fPqHRcFFGhACFzoYGFDX9VVooyJqfiH8h9RroepxXmqrpn21vqCUCZP",
  "key19": "hU8MVUwyqaCCyc3jLXutwfv96nwzhu6EpN6JMkSFaywSw8xo6QdYajQsaWn9CnxhcdgrXySNojmR4hATjBHNYTE",
  "key20": "UQmf15fT23KRNYQWftDyMTty8auvkQuYimw4PuMauELA8QLds4hknTmywvqfLcxxNqxJrpanvN3CnGRmJbmaH3w",
  "key21": "5Wx4UoP91K9Gvar94dpJDXLUfskvoUYtJgavKoXmNKGJmbP7AJW19eN1e4zB5kgRJDeNF4JDrmmnS9kjSinVQqn3",
  "key22": "5hxdrWzcDtNyLqKPKaEcczYucPtjCP7A6b8TZf6TU2UGxHE85wUzVyg5tB7yCbmxpZjzBqYNqmme32KaSYCUL4Qg",
  "key23": "4JXAaXRyo5UTzCoY3UCKos1Zw2hKhNJPuaHWJvcfC2pvapBBp1f3CqH15RwXjNbWcC8SG6w46FMFGS3zTZLa7AAg",
  "key24": "4YjMTZ27Zw3uDC3nC9JCsLdxpvAhUmdvgGE3f2xAR1AN4jywGCSvZqDbZyYCMUz1Cc3p72j5PVmwF2HssZ1u5fVj",
  "key25": "ViCgTm13678t3TdHqdjDZfYtFvPDCKjycUyezXgotZsdu83NKV6yRizyac66N4tjF1YaVwcuHRDT9tALYFwdVW5",
  "key26": "4zRgaV6i9SL58tcQuL7Ta6pkCYf6BUuzqEyXmsj63YSRu6XQn2pFrXAYzimoZyXzjDVYd3932UZxCSW6py1pnQNM",
  "key27": "2UjSfdGMiGfM23k4xkGgofvRBr48rFL9pjzH93VKuzgVsGXgC99BaWWwob3rpFkG5QPuFWkQyfZZcGTWrNAe8NNS"
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
