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
    "3vbfgRXvnS4ZU95DRTeCFMkM8yWzvnonHjya2eNcS5EWPbmPKt2D7i1oPdq3f7Ezf6n7didifCybjyhCFuhJqKdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G1QgktDz9G2UsCr8qNkMbraxZC9jk5zGiBV6R68226CvZAhaMyiyVZrT3GEp53msXH6hF5UEN5aF5oZSpuTCwBc",
  "key1": "2QYnDYZu9GSDHtKw4cNj9dzsQfrtd3jmvvdz3MGKzJJDydBErqEb4yuSf1zSp9ApUTK9tPuWMERbVuweaUsHmgyt",
  "key2": "qocmzhH7BoNQLc5AKEKpg2PjzpL9PKuGhmn9nw3fJfFbDRgEyfvqxga2Wnr1DCZv3pQH8q6JKDYfWH2ZiSzvzTc",
  "key3": "QABvijYZCBWmhS1btwVs82fcrcZKoUty3CRhcASo6XVmesXpnXeHCAeyNrx2H2aNqH2x6ZeGyvfVeVecqV4Ewaz",
  "key4": "YGahcZ1R9kRtoChtJUYDhH53yMk6MadHMqYnSsgEoBZWaM5qcTe5BrQxD2EipYTm8eYqmVY9v6U925h6UuuW5i5",
  "key5": "3c36i1wgWqgycBPakQeMTMf4TdowAfp6w4Mk2eSoR2M1uDLqfa2aXz1Gdzm2EnA8CQ2Uc1nYrGDbmsUDueGEJFRA",
  "key6": "5BirNwf76crgRgP2ojgW83WcSNcxS5ZjTCG2uDD17eLpi2J96F9zEHWN2zoJXbvVhPTfpZHCc1dmYr527bZyvcjZ",
  "key7": "ZufzBzrCnF9MNegot3Aik1Y57zijEGcr7AtJdQJkvRqmhTAK4re7mrjiJxDnbo1dSGWaRvP8JF26PUyo72Uof5a",
  "key8": "52BW27XUGDXhqnHZwgacjm9tnvE3t1NS7D1TqnVhpASoNy7bXbdU2DfMSNpHC6dNj7Z2U5UB7ZtbYjF73jBsJSsA",
  "key9": "4r4gGhz41ZDECmwoqtqFiiZQ9uhfnaqxA8mTA5uGpw3krphFzUtmWQRP22qsSQ3AQWc5ea9uTmFuy5oQJCV7TP9u",
  "key10": "4fdWouR74zJk5R6UqojYLUKim6pXULozcFb6gJ628UHiuWkyBHJCU2EPqpr8jWCX9GuKFJoUdkr9Z4BW6KistsYn",
  "key11": "4eVKPihpzRtsKHzQKAxpPexAUqkXAUsuMwsxYuQKvpAn8MBMHNyZAisAgTT84tXztyC7GwKQuK6aJUtoQeCW8A7t",
  "key12": "5Z24nouNZFjwE1iPLfw2MujdNLJjJCb2cHfXXX41fhQZL5PZGvTbC5ks1ek96YKvQ5Z9xNuKJesesd2GJ5NAeqkY",
  "key13": "4CodYmqXKVCSrNtA7sdsQi8dJzD9BdhQcL2XXJMv5xzyiwWo2p6Wjsnx1vsgg3QQRx4AjLSkARv56AfqmHispfNp",
  "key14": "Q5RjZh3aNoZGZdpr4m71cEZgXYSnEBaN1fyuRiBga1B4aMwbaQjAr9SU1BCcFmEqcTZWacuh3YLdqunGGTJ8GZU",
  "key15": "XsWFj6ssZd3QVLwR6rjviq2pbqRf7AwVUnHu2zpRAX4fatUVfgJi1bmw3SJqGgM1aBqJKxa9pK2uZm2PMVMgCco",
  "key16": "4j9zqdGST1HAWeZfdA9AC61sNotYXExz1DvvNsQBpRCpbDyyGpv448YeosKBiMc1LhPEwDfNbtKA4KuvkTQ5EV9X",
  "key17": "bnziK1zBjHpvheAis5zCUaojjGMNABkCMRUqDX9WRPt2GuXo7hU6vMZksxodkB6iWeU9ZxUtSwNKHLvVtfRmA35",
  "key18": "2RvQHKm1hr2Xnt1kvBA7VmRbourPkfdyfq3UpZMKcRZcWikJka8LKE2JRoRDHXzGVqYWYkVkkB2yfJpPtkA4VLHe",
  "key19": "2XMQTb521vQWXRKaD2Gk1DSGwc65ywYbfbwuZdzFXH1afU2vU5opEPWaRFeNKy1gdht8YBxYj7MPBo4YG1QUr7Wx",
  "key20": "2pMza4Lpt4u2jApnAX1Y4cDiZpAWfVyEBrF7gzYMZjvm6ruo7mt1AeBL4Xj1weqqaJpnkLLZ3ZuT3rvnmVjA6AzE",
  "key21": "5nEkcSVUMXZGNfsBJKRTQCwGtJi7EZRcqxuC5MSJvuKqXQZ26zh9k2dxUuQzzgYhRNNJBFC6WPyFGR29MRaYecPU",
  "key22": "62Kk8wJtNGJLo5uSmRTVcp9BBhHuJ2rXpqwrKnpzb7fj3wxCrvqaecAzrueXnZUnfzSBm8yYk5QsMUQNNJo6tqeY",
  "key23": "3tKj35ExdLmy7UtVcjSVWeHQGJTjiWEzCwJWZnkNrzdYapw54tByJJfET2eHsq9jgBNfG391iW1rj4N63r7h9dsz",
  "key24": "3JYMqhu8RibtKrBPQe8rUPPXgj1pVRfg1k4mrUKK97mbpDbCmB21pAkxZ58M49u7TioY8tMcHQaKYJ28n6tejK67",
  "key25": "5enFdS8vAUM9hCpmAk6rpwfYEytxu3ZSHD3zdvq8aBhRf5UWmcvoRpfoBRqWEc7iFPzYB3fHE6YU2mbrX3xk91kP",
  "key26": "3gVHtrtCP62sX98cb5rgzGmeZWs1xK4DmH2teTUhQYr22H9KHfZRrw25ETR5D6yrxzyqxbznxuLwTMBKmTU6wABz",
  "key27": "3WVVe5aqUDEc3hfBW1nRcWwnGyd34LKfk2mGmPNjM1vvVGkWGm91Wv9z6NMHfRPa6tn8gMJZ9BXg8iqPhj3ZiAQc",
  "key28": "4Lm971B8FBXZq58yLgw1EckPQhjMUFFkjDn6qfmgQQsDSMAR71Ro4EMQFfosg7VijpeuJQdhgyDJAJcVXmhTaAQ2",
  "key29": "3EJpyGfjPoTGa6skt8DS9xkhnczUNKtRwFtADpDAK31bc5D8S4hid2dTQrNc4NBZ9rdUF35wD6XJFhE4kfnhe26U",
  "key30": "4yNT9musA1ZcWQ5ppg1TcARTiigbxinRGRXsYuFwrByCB9k8pdyz75ixPyXY7U4vbMcHnmVDwcJaE5kTiSixZhSW",
  "key31": "GcBhVbSfytHmznSz8CBdexjzkbK2ZYD6S8iffyuX7ddbuE14wq5wHhZDRWHNYdRUwwPjLegP9chfvruiGkcrJdH",
  "key32": "2heYFE9Y2yoU97WJ5NZvwLEiwrBj22wtc1968m5VRtreGhEFixh25nwHxWtm5kCv7mVrjC4yZ3mKd81UCtg3kpLg",
  "key33": "3v9jRmUEi2JttsGmcxYYv3Xi3i8sLV9fxjXpqdtKCkK6gwfNpZBQxeQUxPX218dqFvQwt7DNae1s9wpobnhiyeVa",
  "key34": "4aHBDbSyY7SJrbEH6fTUv6xK4QFpWD6dcYJRkUws8tHdSzDhyUE6Ab4N4a5xBbmdDTkWpozwWE3mL4zPCfZ5N158",
  "key35": "2frbr4nX37X38mdzGgwukhsrdbctppyqYxocoiKU4R4g4WGZiCP8FLzhadfPpCH4maKNW12qTj53gmT4svJjFskf",
  "key36": "2bLB5JxEyE42w1UrVcHzFZ3uRc3hSautRLccvxkbyrpmJWgSLRzW5CvsrBVvfZKm8Ty6NmA2E9qVaJYLqWmFEgEx",
  "key37": "238MyWX7JKVbL7uD2omv5mp4LASWPbn1X3BpbkAxV4rErTRgFYn8rqFJgngUPeKFuUPtoYfeSKxi88nfddqqmGca"
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
