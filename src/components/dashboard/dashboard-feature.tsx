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
    "5zegigXtCd8t3xh22XiJEB2aE5XQG9MYApjefAsWHGHN2UMt49FVQ6fFyswix4rGHcHFXDMWEF94uupUYdCY4Nro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28DzbtjKG8A3fzaZkK4TnNwihuvj8qE3f1YFKytqXJpCzRg49AwBWfwNRz2DSkwTkdxCP5HE3nn2t62xAifD5JUP",
  "key1": "5KcigaUZVaRYnjcCUjNWYE1FWerrKSosQtQ9bZaAjQvrpeVnYUosrdyAyuXfs3aHvoRRj5vsaEAfACb8LoM1n4RR",
  "key2": "58xyyqLpcb7VzNAgwTKvwQTBcDULMj2hsUtL44MjQrc7SWTV9djwk3j4rATDUUJ16MP15h3QzB1REcc1JNcyEKJC",
  "key3": "3u1YkVKsacs3cmhTmvrMcjZm1zQK7q4Cx9qUMypu1meMnwP4zL37GZnjQAJivs7Wh6miDtwG4F3w6Awh4E76Dbwi",
  "key4": "2L6YFUHgt9im8LRD7jCk2irQ2vrK4t1Z8TmVKi2FBfaJxVvSkUZ6Vd6XY7yvh38oZFb4Ja5TvTVpaLqZxiLWGzZ8",
  "key5": "56hng83BsvVKqR92edMryXnQMjpQhBwPbytqPV4S4VEUEnYpP4yTjq4BsetEp7xRPVwXguuKNS5UUymXca7eu24k",
  "key6": "5Q5FWHRhciL56RFe7fSD8uLQuzWy2n8paorif2j4vohysFNdQnBwHGgXeMb4P2aTHm5zQcxSanLrjBL86nxD3Nsd",
  "key7": "4KMFZP4z3tCrUHesgYqwFfGAmGhiYY9zfiKd8daM1CxdakcBmjpaAoLXXrdRv2apXecCYyaF8aC1rX4SWhmZyDeC",
  "key8": "2Epv4egUq92HRVfc2Yy5v9nuZ5qC7dPRFm9ntzcnRLJUFNoT3JeQ7jMPn7UGzeiJw7CyEZD5c6rjbcT6oVMVdP6b",
  "key9": "4qnei8rZ5wd6ur5mdAbe34Uv1EvyTp3xwWHwN611miDu6dzgJEi6gW8tzci31Sdk2JdK4VMYiRCDh6c4uPN1cnLM",
  "key10": "4ouj2TRDWL9BfGLzS6AFGQermtjnafcRAvusmDX5sUY1YsPeBm6pdy9nFpHS7LeDShNLZKcBWGWiaBaLknhnac23",
  "key11": "2AA5rRvmsxWFRvGXk18BiNaPEKwPezjn2rMdq8c25VzuniWrVz5bHsa33KKejh59U1hFaLVpBA4j51ZmCyLcJkBC",
  "key12": "2Dgj4NFNquRPh5yYCwcdv2UNtHaWGShKGvjma45qDnspVgrBRwv65BKP1uZs65jYcKwj6UdH9wEU61dDcxJWhSjc",
  "key13": "UKaNWfj4t2jNrsCUCBFy2UDf78pfc2zrGpCUSRCNpJp2Kvd1yFeWReWPyndjAbJHkaSFTuPL4g8jRn5CXW6hhJX",
  "key14": "5ZTXN3kwaMNRGgwGNxKBRupJxBYjz2PSpDwVLTwDfhKwAPx22kAsiGkMG5THxB1A7caPmi3MxYZTpqU9jXEziLTV",
  "key15": "CBJata7D8dq87X4zKvN2Vfo74aGhpmYo6T9vjqbrAmmisopJc89YhqgYK45g3C1Sog2km5ddmQMr8wVCS8ZnXCt",
  "key16": "4vzZTmNeZocG3bZPg7xejqynqYxEiXakBpWKHjECsgmBQA5saQkbVjwLbGkRkwN9tTH5vTZG7pK1U2RTvQeRnP5q",
  "key17": "2RGwX4B3yps31LEpcmzUswqWk3mmprSmPJEp44oyKi8azGuvkEJfJYnK36eBrwJuz4gReKPZ3Rfk15LyEw7ohrBy",
  "key18": "5bGyvGduf9EjWKzJPo239Wj2Fpa6ygMdKD1qZm5hywFteCh4wjipFtgnd2qEJBn38xKn51p2Dh94A9e8UMKYjrK5",
  "key19": "3BXXy1RNfyTZCTvXhdhtL1aqVDYWBwt3Z1WY2p12dBb6knUJit4DTPMk5AnnQjPpBr6jYrubBASM3TpJyXjpkL8i",
  "key20": "2Pi7BSbBAZDPPp6WCN3VwBuzLCxk1mWGtrjD6amoQy3Sjt8YbKUUZJuvTc7Z8CbhP2VGwXRWpFfs9vpE1wuhnPbj",
  "key21": "3N2psZopqd4bR37qScZYtFoCPPf7wMVis3awJyUvjasob9gYVkK3HaDg9e8Pc4BnjtokBg1nyAxEFwo4GAojbEbm",
  "key22": "31DWZeiu5T3vpwVWxM9KkSXRk9gzZrYpTx4AKiAnFFLC1oVfmuoN6LNrpsfHAFJJuwAs5QqmmFr7JN9ZmkGC5FdS",
  "key23": "4Uvysa5ovH8eohBw1o2KxvvCE2wFwmjsBZM2JTpRzoFpBUt8gnfcBXVfGHZLaBxbZwCtZdduaNs7omHFviKwwp1f",
  "key24": "5TdYfyrbqJTDb86cwvSu1bGLEdADWdqvuLmxMYhZwvmewyaLFzVJPytPYj9t2BbPbNpqgEHcLya6SXhRS47eqxLu",
  "key25": "2yAcCVMiA3ggMpgV6tMFETBAvFhtZbSBJ97YLc2hsbCoXXp8EVCnubA4sLoj3gDfZrzMfoR8SGwkLpf4onXQPYuh",
  "key26": "37Y1rEgLPCsfPdiEa7Jr6En3dXHx4y6WWiyi87ZcEEjx3Ugt42HokLE1jMc1yyksYnX66qEAdKi7TZ5LomvMYUPY",
  "key27": "Q88PL3W5HQqpN3uifK3kgW3cSy2uuSGhCxtVWxHQNLgxQqrnhPTko397v6n5hvXLTNE4dB6UZM2Dy6NLDa8Jcko",
  "key28": "6EZ2Lp2kHNRCHbEypiUvLLfMu1LVKeS9LtfNJKtkfDfFr667vnuQtUzeSsHnEi68T3Jh3Pa3vypZsqUX1WjSjXL",
  "key29": "3LonHKnue6vFfyDRQJ5raPAvhc4XwEHtpAd7ofgwSYECGnpcR8MdD3dynpTtg89wPiFnbn9jrXCfqbYEwNpNwB3Q",
  "key30": "44pghB7sA1Y47p9fE1j9SVeuwx8QS2TS3SVNsaxHyHzKUwFvLfQVe6gcbSa7vfQUVtRuQdcPCGsPzQGqnFD8o6Ds",
  "key31": "4ri1ZGPR5Y82L1aEMRgtSf4E8Xd51Wjti4miHLgJGcUaipJZHDXsCcQDG6D3SjBa2Zog6hvzSMnWiF9LFsejg1if",
  "key32": "2b4Zyu4oiGaPkWjBS4RzoHabQY1YiZ4LzkU289xFxjdWm6n6S4MngxUF8Fx9r3nXQN8hY9YDGb3XmRLZEkFakS49",
  "key33": "54rWSUaD6rqpknnEYW3EWDLeqLodHq19nwvx4JQeJA179QWutHVhNvUZDrjCiEhnJVsfpSTVoz8QxJESBKe6rTSV",
  "key34": "4sYKE8K5n5XSWEDySS21SujVUc2aW9KfiyGDKxfiXBa3yxwkReB1m9FzePDqWP8AxfzXkL1jYrTUjZw1bkL24eKR",
  "key35": "4kUoHqHA2YrXnoJMSQxE9aXCretbRGz6wiYgnQ4ajDzbpim2rFARKPMs42ramGheNEii5Uou3Yhc6xLwgJvLQVbc"
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
