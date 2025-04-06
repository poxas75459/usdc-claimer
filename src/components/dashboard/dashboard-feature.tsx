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
    "5HoJBVzaKWoKUqaZV5zPsQVa8NLGvzL4x7Bw2e4XMFDaznyo5KjqaNzp12SPnxHnzd8qVKHJniwEoyoGThGEmYfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jianDynefmQck1UCbctqtiLgA47kwxwFzb473uRExSYJUnXC9wwhjfCZrQk6j7dvqMNEuB8Pww23A2xxvXxhad5",
  "key1": "buAv2d9RM4nk7V16JcmWT4WARgZL4SERrNH4Thf2tp36rNyhL1EoCtX8s1ysPkTFroDNCFNcWG1ANAQfkzz6DnM",
  "key2": "2q4i7G59kYgfBNeZzaQdJ5VPdmsGFaEGjVRmFNwJTZahvZLXyKJTzsoXUQD6hWxJKaK7TSZ5m3tbBAQHS9zXfgvU",
  "key3": "4UtnKuJD25MT9XyNV7QGc9E7peuwzmPTtN5RKBuZaz1a4QyLJFfnMidmk4U7qtDhyeqmNg9DCD3DGWoYw3nb59vc",
  "key4": "3gzmhEHHiJhPAymexU6c3RMmw5jhQud2Fga34bb6tDd39uo1D8wCyvGJZRjigpLpyDYYFZRGvbnHNKksN4pcuCq7",
  "key5": "5U7EUHwFunzfwpxeBPwxsQFWVWoFScBdgHuXjzBho2XDsP9wybjmqgZEa4Hz2NFKNXCgTKiSM4Kf5QeqAr34yvh9",
  "key6": "JBhKUWXd1jdnakTCDDVc6x55TuUSMsecn8BBrh3Gkfn3CrCcq1yGTL5jNrNFjYtGpBmZYHspJn7WbuQ53CUXrDm",
  "key7": "44tb3m9irdPHGKyyqKgbtcyLNMuajFAZzeAnTjSkhaqQpgXxS2wzFWN9avFUbG2ick8g6SjUefxUiZAVQHVKsVxL",
  "key8": "5KH6bTLAn5YBM2eW1yrf2PkCGjuH9EdchMCUpLGqVdJe41dYBJ6j47uu1xFRxZY7jxiwrVGauaSUqV4zrxhw88Bm",
  "key9": "2cmnxCB4gH1BFbSNSDWRcE8socpKa82HojUTLZzcGq7SXumtyLGRY2LLTPnUhwWF73uheoULTyAD29cUmRqbxHWV",
  "key10": "2ffqoiR8jzCpRcn9TQgubY5BY55utne9gCeutueupvBM9siAKuoBhTwUqFDo9t1EN94KLLbUN9a4VhPw7cBycSVf",
  "key11": "3ZagfBG5sAskmXaxQV93mYTX971cetPf8f7ayZUYwedFuR16Zn9R7tKc9wphhmreQNAPjvU9ixJRKayu6WsYwhM7",
  "key12": "64jq1mqPwF4vVPZi4R8nLFY4K7hswNddHPrZvaGsT11Bk2m4md6YDoTGQJw3zjteWg81yVBVyVhxz5Zr8NE8pKxW",
  "key13": "5TD6DMbGNog6HobBNQkZ11Ter2XuXuwuwf7DMrtJ5wgaPvM8nG9nHMoXaDkk7Fgdgoc2vCHNNgb5ecGcJmr7p64y",
  "key14": "VncadWpmWDVM8DgpQL5iQeepAfA99q8LXwM3vjP47KH6C2Bvaem9BMEgvTztHm2vRh4ucbmxHMFzXCAiw37uUxV",
  "key15": "EW7rAcAGbgrYTGPHhGTkE4JfjkfCnWQQWUE8PguVUj7HJacbdhPjHZvL9pVCfpypyfgLdEVqq6oUCj9vdB4vBMz",
  "key16": "2rLXbMXMDVpxP4mGspz6T67W4VeyDqe3f43GCERJiRETgtYvQ9KEyQFehVKaA8UB8SUBJ6GjawWfqpuTYytW4Ps",
  "key17": "2iGHvP1bzNMhEWyHs6eRiFrpF24RTzzkUN8qfbeshh5VD24kJzmimqCuQeCURpN9xwwC8NWtLvVJ5yrAw7RuKaq5",
  "key18": "4MrnnBuicvoe81KGdLGx3rsEzJEuJEM13PZrWQcBiZfAagQscYupVfLssjpb6rthuBeYpZXvFKVpdL6c5uthNW9s",
  "key19": "hzuynSWpbqD6bYRbM2Gp35J8HkNqKJnP9BYQeUfGcSSC7efa2juDbzXPyV4Wcv8DZXRKs9LqtgGYY4okJRS8BNE",
  "key20": "ZHAAfP4XqoptbWS7eZ85165NuBV8wT6qUJZqujap2aJHF7NBKVhb6XrUGTKpmtzXJNupoRqFmNmcnzjbWvCogVD",
  "key21": "3DSvhKT6X6XAoda6i6hiNiac9epzVj6PCN4wdSwdtzUjHACwA7TZ8UhpBap3nDrcSCjf6wMGiwxsaYsHJiffioo9",
  "key22": "3P5EokpuZqNoq7EhPn5f2VmWxigjm1z9RrA4Bfv6bxzFhjByQK8TL6NtYsnT6uD7XLe4bnKjwLypseHPr72BpAiP",
  "key23": "2PwfvTkv4CgmAb9NeLUXtG7JyeqaS5kC7ja1xZY1w14yyAKEsiUPcJqrnN86frvPDupwnKEhbRJeuwZVTJttzwWx",
  "key24": "5xmFu6WAWTxCjzKz7ohccExTtPZ3jYV7VeTVMTYKeQsnYnLckRTnoHuS3FT78Nkvvon7akpf57d4T3FXMoksw5uo",
  "key25": "391TvVd1iTJLU9T44t8MTyuXkvFsf9yJnARX8zAwy3CX3TeFvs8ZRuEwAb7qDLVM7Gw82ori6kjVymXhRr1inG1X",
  "key26": "3G2ZyGk7Ln8hqtwkXGJUMCCbwrzUAAVdaXiZ2Rqq6LxbnoTNobrx58XziJsW8LUDntdseyAYvduuivGh45FBnURs",
  "key27": "3WGBMJURLEdScjnTirKjn1YFD4rYjmCMQPnS9s2ANMLCnqHNDCytKxYown4ogAaS49MLMfb5A7nLK5woMQU6rsyA",
  "key28": "3ZNS21nVwLFyvkn3Y6Dppx4R4S5scyetAeDzX8encxjWLcShLJUcbeoChEWuUsFm33TmoN2s4VcFAXH6pho61HQE",
  "key29": "4aD447nDQAZsZj9kdmKtG5Kd96Rw42pWSWHQuNGufCC3Tfw2NexakaXfC216eHG1SB3RitBz3CYuGoRLmExpbACw",
  "key30": "51JGuRMXeCS4MDh6oaoavJYEF5ywPMpXfHhD972Lmt1JeudpRJEZ6B24SCTRJPWm64s3gdKDtwtVfAN7VvzJXp2p",
  "key31": "3UDcthXi7h71pqLUpAkDL5XLTfKC1fMxdDpBBupRxftcHA17ZE7Vkhiyn6rvgMYtrr9ossVHf7Q52mFVz5Kax76J"
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
