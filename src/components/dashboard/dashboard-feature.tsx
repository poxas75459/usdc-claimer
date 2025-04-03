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
    "5B8mT4BiavQ46WRBrCmfP8weVsxAY4o6PeYdkXvXCqesqQFWNUFffdL3gsHqzKSGGdgR3F3gmXpJTuCmpLG9wrdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61iZnmkmb3g798v1vADgWfw7LKKXREBzV665mNcW5u9QtvDTURTKV7ss4Zj4qEcszvt9ujX78Tw45stqCeazquhd",
  "key1": "g5KhPgixsQHhaTiKuSaMDdH4oCPaZCpaNFfaKRk1RfgqAVTTNBjMkcfDyCgvuspQrDwQ8LEDMWczWQNE3ZsrwkX",
  "key2": "5SVhMxjcwfy1yXCm9PxFXvzTt2ZiUduV3F5DVN7HbPQWp2FhBeEA5oq7Y5kV7cMhvkizeaJzNvQXX7mzrVZtF8Dw",
  "key3": "4wkohFHx7jDsMv53kNp5eQxbZGsTiJZma3frnvvaF3YsYRJ3edTf7fZSCTw6yaS7Hy9oq5EKVsef67wHyrKgPNWR",
  "key4": "U8787wCY5NE4zec94mvdZa7MVmezaGjKe7B9e4DZEFJFXB7uNFBKa5gvqhPbLX2Fz24HztHKTtUDAQ5nRHf3YTq",
  "key5": "4BSNdgEvTfsfJJgufTFLEF3JskgzMyX4NBVQGpQqfA3zMouYy7Ejf58XmnBiAY65NYfeeg1Kmg3XoFu1q4k7uRR4",
  "key6": "26Pnf7pYtMcvUVdaJULf6UdXtcYFmEH6Ecwdtw2xP7fnmJpBfAn8DvtECXQ7Lw8GKS9QnsSPaBYmNdnWkW3DnzFc",
  "key7": "4J8igD3QtkyTnYFKRg59rmyFoCyEsXX2P7jHxeRvopoxwRJJeEE3GynicUZo3D6FZ2zULJ39ASxsHiQwboD8MePo",
  "key8": "4qhgDab6FeHDxVFpnUmrYBtJAAqHsNgz6EUXHaoxre3bL3cHm1r47gxp82bn4Ciu8jgxoopfp9qPp8KMyvDsx73j",
  "key9": "34JX8QwL9QKFzoWApA1FYBFpoR58EuZPAPV7jxgQ3XizYVyyMEqqGFyttYoRTG8fgURz6bgDUnWm8r8rUwX47cF9",
  "key10": "2fMCrMwDJGdbWfVQe2iJKjQe4n8NqSbDmv7SpjvSsE7UuAZXGAfMEYUqYE2WHaxV1TkHXev3Gj2MCk7xvahm9YoG",
  "key11": "28f6k239gfJWVfYVycqA5QyThEC91Dey3GHZZkg7HsrQfqS3zwcNrnx9LRdcNYAaze6nXWpKVfHkVNRMFv6MUJ8L",
  "key12": "3coGneg4D93Np1bsvXrKK7zzfH6ig4FRgWdHu2YXTvh2Ug7WdfeX46D8tfmys8kZW3aVbWEyp3qVZpMey9Jawi2M",
  "key13": "3PNxW6g15QVf75bXgf95ZN3YSj7CtstQm7kpzeGPEr4SH2AePvU2j31TLhhMQ5NUvuhhpFqciDyMMReVC4TKLbvK",
  "key14": "34dAWsAVmtvAPUPSwwKiVoLivRjN9usFojtBiZDZSJP8RJY7EDkP3nByDcMNF4LKRrx6ZTkDfbX2N95YDrK2muqg",
  "key15": "4oPSzNSNSYDFKTuampELR15jgZcVW8vu96aRaMxRWavQhSBSJKeRXKvB7qzDu3yo1zSZY1VgVJMBgWHyL14Se3Vg",
  "key16": "2hP5t8YZx1fjx4fXQtGd6KpqaHPa4sEoFvBSLYfeiwhYoBQwJTm3ZPTha6sSeP3jNyZJtUR33Hkr59aaeXMdRvay",
  "key17": "2Uq3amaCJMyip8xhyK84SDQ9XDZBUYrHUFCpgGrNaowngccLzahvuCr9xGvEgJhZYXPXr9S9MCDkrmpJwYnHT8oZ",
  "key18": "3SuzXjmYsP39SLm23VxaygHGMXxUWHEykuEaJc9JPFNqGHfWFUwx9chLnuawgqpAUycJQ7SQisuE3FnriHX3tqBr",
  "key19": "KDBQDKCZkqM9n7BN6PiP9NNXQGbpyctuMReFpJDK5Uc855qu2jGVXmoHe2uULK67sWg9TGpRHwwquNFNSRtv2LM",
  "key20": "3L9vN6wDqLNWzG3w9cYRQzUDGuX4ubSA2TpQJAxpjBHvq4Z7x7E5nUBPNgprUd4wthNB54upXHyvRk7GWDzBTwDF",
  "key21": "3Ck3AHkMY37GS5DnqWhMgkmEyjuabDmZrnHGLpDhX9ZoZtbpx59TWVgNRnRJw2ChAwPhm5qGip5Y8Ejke8H82Tg8",
  "key22": "3vZHiXeRMeLbvMN1LuvEfczPJp6TE8nH3wV8cbn43wfpqaREgGMnHeyZBBWQPnSwZr81zMokReMdf9NfQn8h6VEJ",
  "key23": "3rcdzoBMZqMpmg8f7rCM2MEgD6cqEdMm9bCuSYURmnnuJ9cHLWSnhfzbpV9u1m7T1enYRhk4wn7EtZhciva5ypeA",
  "key24": "2YM2vFgHzrFHMfLFBDM9FTurMY8BeXaCYW7Km5fc8E4f9bi2Wh55A8vsxDuna193bePFcY2d6B2z7PfWc5XM86QL",
  "key25": "4DrxFidLD9VF65hiNd3tYqKXQS9k9wnccUSnEjRbKACAnikrpTQ42WG7HtACttexCpBubPmmP2QJNanjVmU2sxo",
  "key26": "5JUDUpQab5PpmDkcKYNy3L4oa4RKDAo234RhfGAaMd1bAMw1Aj9b1spBC5wRS2NKAg67QXwBy8KfcJzrxbAPNyK6",
  "key27": "2rexxnyhDPXMg89Y8jWVGGqvcNFJMUriabHdGUMkuv8jEPVtneiYL2DNNyp8gHzLJnnE8tEKMSN9oviYiYB81X4M",
  "key28": "4zAizvtdGYfWrPqBtXoMWnzJyXoEWFr8oUNGuGMUV2sh5nmDwdk8vGu9Q8VBjUnSF9TFxKeaymUy54rTwBPuvJQZ",
  "key29": "oUJdaQW651kyxBsPchBhv156dq8mCu3yq69qEcZDNP9uGD84a51hgVRMvFLaX8bwpoV5jDWGnkzFvyTNoNvcygX",
  "key30": "2rLA3bS1nadG1aADon64ACh5eiuAnDcTruzNE7FJo5cyCbyK9rWcrCRMxPrV9dBS3a3oAjzpMVQvWaVXmMskcb92",
  "key31": "4LPGrJYByRioCznGJo2RoG7qAsaTv9nUDwEYBZSn29ig4PQRpmuaoJwQ6Dx3WJyR8fao1p95y1gEDXLQawBGATL6",
  "key32": "5AGiUr1FKS1prTQHBqt7Fs86N65nqoQqtMKpf2qudYwNQ7DucmsPQxV4sN7ixgJDhHebR45Y312VSXwX2qdmrKwo",
  "key33": "3RjNj1fU78E9pA7q11oZMYghfiJiWDMcNKkBQB2uCkSp98kkrVpqJuHYYzLEogusGNkbLSwyuvH4uQT5j9nJJr64",
  "key34": "4LRRtQqi9ZJswvvV2oQVmyvhDztEGQmaY4yRgAsRcZB9Kiw56Sag9VagXAbRm4m4Da8SUgYJ9bbp25f6sHnpk7pt",
  "key35": "4mtJtW55wHh7DyPJRund744Nr1xhHbiVEsKbzPu53GVnon9FSqbqPvDcpdFhKZKj86FG6oJbfm8EK6pgFyeEuvRk",
  "key36": "5gN4Pi5MWrvuN9ogGnrPSXcQA37tcvDY4ciWDNkTHn6bSiNNGo6uyc9d4ZVgyy4R7ZVv9FHR5ZWQ4LkHNyHyrAqr",
  "key37": "2LwGusKJX9FyRG1ivxPHQ7LseWeoYuSjqJ8KoAwr6Ymd5fPVGaLtZdveyuJSTyQQD7VJbu97kdgmrvdiFxmVTqdA",
  "key38": "2ydtRkrGYia3sxK3cK5FDAkbUPzr6oF6cKi1csrAWRTYDziakBNBuiEnT8s8pb17uk1F7NyZaPRPtGTNqerEXETY",
  "key39": "5UBTQR68PHCQSbtQ13Cr8r2hT4qegeJecrXam88AFaNnvUXwUdwLFQtWcv7ZifNwTi3ou5AQGNdUMEitU3arVLrB",
  "key40": "5C1wDP1ijxMQhcBdHkaVwehVhp845VRah5UXJBmKxqdnmPbpKWGAQZMKrchuoZRUkrAefX8Wr43CTXoQ2RWhpxEA",
  "key41": "2kajXh83mx85DPzwDTm5BXu4TCEtn88kSNeEc64qAwZHNP2J5r3PLimtSjK4BD7oR7YoiiQW2Yo6e9ZikJFNHCnR",
  "key42": "4ZTxXtJNHKDNq5ozBTNtxUe2tAFrE5cJC7dYKmHCET17egEDkPpnnv5C5tfuJzztobwX7WhvNwxP7gYTx1MSXtda",
  "key43": "4qbxuKTkKSggVNQMMVZe1Ak1bfT1yymSpmFncMcxZ34iRJ1ds4XaJDmP7HWvXJKd4rr8RXkde9546gJF5p7mcXun",
  "key44": "5QpLye4Kg5VafBM7G5vzGkpuZAD8ABQFUemwmsfWTE1vtsdFxVwCikW2HVE6QDXtFd6ed3S6D6e7SWQe4TCxM14Z",
  "key45": "CXSw25pah6TT3p6YdRvDXo72hFBTi3dy9uXHogdBCTayop8dx9Yt85J72JrbNHevYgRqyh3Vcxk4xjpPH2ZHnfQ",
  "key46": "2Vr2QNVDaEZ3N2cU4jCh8bpRbCSoyakbKfsrm3FsZUvDfsURZGeyZ1PyJq4sRGtUbc4HxgfYymPJP9SXyYCfSTkB",
  "key47": "5SUX63dJ8FpHXXE9Tfwu5SmpxBdqPcPoxHAJsY3eVfyRokvQ28CSMKHkbtye7WdS6VwJ6uNxrDWksEtSijW3arwP",
  "key48": "46LZCs79Bensz45eUWw37sMRag8rmYwSgPpF9LqqCrwmssLsCwg2bBeZf4hXNfpeJpqroKtDnhaRFkPpETupWatx"
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
