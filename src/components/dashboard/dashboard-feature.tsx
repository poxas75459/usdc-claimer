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
    "24HxSwge41pvQiPjWaxbU4wQtdKGhsXYELniB4BiHYAwn4hZrbKybxDHMUMyKBcXhxrKbUCfA9YvRZuZUVMAFq11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JArECkWBYJsnkszGiadKysrngJ985AiKK73ZTZYU5VUHo1skoQ7dYYQfGW5qQg3UTLfypm25iMSFN7shVQnVJcT",
  "key1": "bueu98CMJq9vVzxNMdebMFhAy9KtYTfEBUWWhoZafx2GByLFUMX5NshqrNfqFPpsTszQfXy55CcY8RufCMyUVe4",
  "key2": "4fdVRqxnHTmwygb17LRW4eVR11HzpkTZ7Lmi4fNYk4voAEx9XT3jYBrrGWfYVkMfUWFLTNVbuVeR7PmBbLfC7itr",
  "key3": "2D4h9pw1REue1kDfhnB9ggdsPNtzqdTVAKYKVebuUG6dVoFVdbuz362KPJQWt1qDsB1DJhaKbomCddeKe4PFdann",
  "key4": "VXZKdTBZckQ3hvEpUS7VzdPMtoUqxkTLyepK3cz6F72TvHpNoiUwHHvH2b5GmwqjjV1EvzEcDBxGQBhdV4kF6qf",
  "key5": "tBV5Q9yhdDnGcrzctv8fo4Ca4P3LBEtSUhMYA3Tw8bYixshD7zAa5gJKt9HCZJdqrqg5NVKKWMLgp97N2QgHrHj",
  "key6": "2KN1tNPToz2pxMH5m8aNDNFd6j5nfgavscnZ68XpwC8dHiQXEWJGRbbpxdf9qiojQ8hZod4qiRRu7dR86AQxYbHz",
  "key7": "5Usv23gXKb35gYwDeJuhaPym2pYHCsdztfty8Yz9uB4Hxxi3SVxhLfJt2sjHPJLvW6WyHGWPjbAThpCnyBYkG8bd",
  "key8": "43WKEYrK3g38qEP9zqCTSTqyCWt9YjMdsqEpD3m5861WehaZmDLw4HZDUY6Gx8BSP2y4Jb3QyWGKrnDswiCVUE12",
  "key9": "3tcEhofTAimjufGYGHX9DPF8bxj6v2xhTHsbLTAmosqYicPXpdND6oSgEbn4BGHpJkYUPcv3EwWYDshTaqkDsAnY",
  "key10": "5st1NtTetMXJ1WZ9X7mFAJuTWCYPEBfat2nsD45Qm25GposiKacbGuyUuZ7s9KnQJUYFUApjMrVfACQpeDducnEb",
  "key11": "4A5g7jxSsK8g6a2XDmY2kzdQzu3bhht1e59zEA5h8iXJyxDrvndJAr43jHJ8i3hen4NuuQZ48fktXyihzvm4RYhD",
  "key12": "3zT9n22mrVLtBWFjgoFghUkbgreHPxeSJdrKmSDbeGvhANJUffNvGV9nffCYSLXDXu39ayqcyGKQgc71rGzLbuT2",
  "key13": "4A9WxJ62inEmtbeUpx3nibAhMzQNpkb5A19ULxqwWEueRq7kbNgvcRgeU56AXg8BxeRtCBmyxxtK9g13nBhUKFJ6",
  "key14": "4BL84QvogwKwMRUWx4Cbcbks2AKvJujfSC3wAKqRip2RQfCwTCzDAByRQwEKRNsTQcSoBtidZgJCVyCcYPY4XRCR",
  "key15": "JVceNh93bQjYbHkwkUMTWyUwoPR4afiJoNc89PqQ1jdELpmHgonhEdRanpaFFhhHRunCRKg8XQqsbbvxwjUALHw",
  "key16": "Y4y9Bv1QLRVp62tiqESVYBbjEz1saEAtPdA1GtoXyz5hxyG6bo8sCVdmpz1zcA5WHhcZZBh9UR2tW19UsfJ1DEC",
  "key17": "3gWjDS3Cnu5EFFrR6Su1HGxwc2TmbCZwtXNW5LiSbwom2woFgxogm5GCBF5NZe19vSvJYFkq14miRhkxQwKeWTjH",
  "key18": "S4bSewV9mHReHVQw1FewLgra2w77CvZ3oVxxWSnezGGeqojyuBJowQg9YdNfHNbbjaVYxCkbSSNnBXnPudAKrwa",
  "key19": "23wvTfCUARdYK7y1DR6gAchL6XPoufQSSiRT1Uhg9uJPkchGDJUEiXKvqvZz9RBt2nwXB6SN4VikHVGM7UzVizhB",
  "key20": "4QBpqMZBCif8AYXcdy5wEL2p8BFw6GLQdg8DkLkPHErcWQfzTz4JTN8Pxe2MKCnEcvjBLQYAWNUasNkAh8ddW1Qm",
  "key21": "5M4MenbHVKvTUVpPt6XzYfcHMe9U5itiyCdAXfRenro82A3YWiYosvaDyXmpT1LgnSVq8tvrTC931bHvM8waHWTt",
  "key22": "36jsgxThEwRLXNHhavK5yBu54W2v77oAVMkcZPwrY7d9LV5ddDd7icApuwWTmPxPNSDeWbLynAtiRfHsLNNMb7Bj",
  "key23": "rSWasbCGJcfebRoRY6KiFadwU4yNFJxhxY8nSYuWtJSiiDYf7b437hypTDSTq6vEjBrtgmHS8xDJXycAwyncniY",
  "key24": "25LjJvM2nVTWSXjrzbc5bVPapbTosLxyQiecBJWhUZY6SyzbDpGCipmX8srHMzdjcnoyyvYid4UijP9SZ4iC5pXQ",
  "key25": "Q6dJWdzpR6oT4ATgHTxSzaHuSdgTBHABkDsp4GEEztKVB6rCbeKBxXT8t33JZbcmZ9uYgvN7AHvqbsFMPJwkhx2",
  "key26": "TwttaFtwQcLw288LQNoLWnw53E7B6PGqxkdPgtCvH4zcXAb6HR63NXEANVXPd9AdHZZgDkLtxxHbkpZhRuVUnHL",
  "key27": "22BiZECLgrmhgik62hheoXtqdD5nGCv9M5mfo7diVDvfkdbwHLxc88SjpczeVcqs6gBCbpzpcA6hJMe6FRyuTEXf",
  "key28": "36ACaFLZFWuY1xotuD7W8pFSqumsjAp7vd4zWP4s3FFjqy5XgwCDFjHG32MADmgJwsCyUnh3HMm3VuVse5e6jSLb",
  "key29": "4DgRyWo6NQkhx17rkPbLAmmsoFhzPQdmqWbAQ8pvh3rTomqQMfz8kTK8qj9ctMNEneEcEpLbtdy8jJacckWYVrET",
  "key30": "2FWfYASuvwGsUqi7CMUsFQPsnv5zjPp9u4JdyemEiwX1tT2dwtqwu9TEkRVpNmERLapVaAUa3SZJFLcDddnAUadf",
  "key31": "3FDkqCqyMADKFPLLNmeTpDuxL4wLT366Ffk3v3hkfpEV7GJWPfPHZKzkwvbtHa7dD3BAXYjSoopZAND8HWCs9nND",
  "key32": "5beAhswwRNb8BgpW4ib6bjzmzKbpe7zVjcMH8Kfy2ADsb91z4bJSzihzHHEmv8EMoc5uiZC9hZxyNMGEMqZjDqcG",
  "key33": "3Xq5hMqDVyWr78fWeqh7PWHARYMk4Fdbq7ip3moQSQfRC4MguRS2NJTy6qyomaXnMQ8ojF2xhz19xKAERot9xxVy",
  "key34": "4rzJL4tAJ6UUEnWYjy244sgsUDEPvn9mMd6quYL9mjHFWYm6YXFT3w7qqRPX1WDmQNFK5e7skjkSXEUMxAwx8z2n",
  "key35": "33emrYVA3WFx8c4DqXS8EGwsNZmr9oszKKGgL8GGY7mm9Mkw1JTgR91CmMXHQgjjVvrP8xhvSbuopvb9SzwYh6A1",
  "key36": "aAU6Frp9eym2zbhBg6UkMJGRPi41LknDLghLymNKjs7Tp3X114KdQ8SehEeUSa1F5VguFa57AGyckd3RUM6UDrD",
  "key37": "5Lsvz8P3jhZzaQkXrwk54mNzZZ2Qc21zDGMpk1x3FZP7zs74ZwqWyv2EJ78JCWpET3thFXd6m9M8jueSWvBjg8TP"
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
