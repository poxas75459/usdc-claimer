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
    "5o1G6qi2hCnYkuLh6imZYwnikhm6MR3S5jWZ6e2tEQXsuygXBEqvc6e3ydnT2iU4HS4RfqBY2mnUpqWRKtMutjVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gjCZngj5jMfSYos7ueXzJEcP5qosf3fBfGamUhrdKumw1ifesnhDcXoQayr6Qt6YZmQa5zYKEJyq6smaAKbCn4",
  "key1": "2p8qJNxXFyqzLwbr612JfjPVibkHDfSHKGKWnXQ48zcngdJCPLby6zwkeFpfp3Ps9S6aNLt48JhLqbBuUBUm6c1i",
  "key2": "2CnsNodDzqUzzjz5U77eMkyzbw6r3yBK12XYAUM9JbhJMDG3UR4s6nhJwyLkRXsdh4YvGwAfbJfCwHVvoRn1mXup",
  "key3": "MnAscT7NmN9Dkm6JcnGYnkzqX92MNR51N2Qkm6KWm5d4VjeWjf2abark8P4RGd8uoyzW8gkVDuzcztQbKKpVb4W",
  "key4": "3h2gmY7UBQe24gQ8AVeDGSFkhwYKb7MYBf6bk4EqrufC85HzES62X8184MEHf6bLZrBHGfmKR9VQa2rXnT8qMVKP",
  "key5": "3fgbZ5fpNxscDXj2PzyDpHpdbZPieLmFTnbACdtSC9iCMuwXegn6THz63oKChhzZXYsdAHvJ5VRgzejY4zMHs9X1",
  "key6": "58F7TiJ4jjmzZGKHq8nxvHLGZz1NrjQCDfBVpnk5YJaYtUhPji29GqJEBhZk71aK6p8rVrLpZE8ExcViWgUkgPrw",
  "key7": "9DW34tiBCztfEtWBGifV1r3brqVDvpnVe974h2eF5i5p3Y6o4mWp1XsJZMXtJ5uGwayDzqM6j3PEzmcASaURJsF",
  "key8": "m15iLKGAmB7VaBUeBvM7AZvkfGdsyc3wvQjspbE74c83jH6HiwRDXJPT9BgGQy3movCE6cSBYPEdkALrZfCPkYP",
  "key9": "5wWWBxSZkhruQWG8DdcYbgZB57t77RDyMNVC3PnpNXXPRYHERSeHq94FWuZN4UksEeFJ5tsYbgemarHVTmBqr6AB",
  "key10": "4pXV8dxEK2j1MEjJchzjQHwdRsRUJvfN7R6btbJsuJ3NnRJaAHwqd7tZm5jZZVFZpWk6ocH76N2aLC24v97D7erV",
  "key11": "57FsP7qA9W2nRKg98czKV3M3oF9gfrBsHCmj3d7r8DzxmFWCgbHRNx6P7ezTh4mRkDqdJKptATd5HxpHCsvuTTSJ",
  "key12": "3EHtP7K9MtMZsbSZb7adYsi4Gtof9GghhnyytmDuu7nukbHRycQoSbGBkQXUigaTDCDmnHqudTK6pz44Wtz6o1zR",
  "key13": "4hfHaUysxTASbyJ6kSoETT2rhrpAxfDHuQsdJZZBGZVeV3BbyDzyoMFVtwgbRGB57p8M23fvbRnPWxwwGSReysYM",
  "key14": "39YhQ8Fcgsf95o9g2LdNyfjJQUUdijdroeSHsjTqyRrMSXZTADosBXpCXbKdWY5kv4zuozwTBwuGgrsi9mvgJxSy",
  "key15": "5LzgYX3AWaKpu772D8CiBn9Q2SargxaeR26wvJBScrBELmNRUGxfFbbYbgABndnQ412TgU3wZbrGorfpqEgJbpLs",
  "key16": "vAoA4A8ZFnz5EgHdNUQDZFLnY4op5HhDNaYGg36XmQhCyEx6VxGdDCaREEkpp41YN8U8XYaHLFq2uuGaBTPdn4g",
  "key17": "4nagL454V4bQ7YZxkzYjBbP6pSYkj7E8oXbZMK14ihsuVR3Y2TC16hx1kAiYJbjpPENEfHoa2A7dd4kpAdBm3mv2",
  "key18": "2KvVQPshj4QLApEFNz9JmfKqX7mBQQuGHXFNsa2EnUfFffZKcsugJ6g7x8dQ76quBCkbcDKCNGET6cTxfGGfExu4",
  "key19": "4nW7YfeDirNyQruBeJs5PVRQMSYhiNiCVX3PiHYxS9RxNvSFLn889MXS7dUicMzA1FFSNqBbGnfikD68LfdMNUDT",
  "key20": "4514neXQBx7wCBhMDyRaAZAV996ddiq7T7jKq9YA2YuwjWgmz8x9BxJvA4cv3ZbLp9ZybDcfUz13JeAL8955gNzR",
  "key21": "3Rxncjb42Y95RMNREnvg8LSv4HvdPonhpMoastUFfsqd1NUy6ovvApmhiReVQTkDg3BCHv8aTj2aWwyqUhTcaVxa",
  "key22": "2WwhkxJb4bY8httE92pVQpVfj9ZAUX9BPyVrDMmiJdTRswKzDwbxrSvgRE5h3fGXUFLVB2iSYCTqy6xCWiHzMk2q",
  "key23": "cjRvEmY7XFV1sthje8ga8twMPoHJndpWLR9nTEJvmm8kgFZhHT8667WqFTFtnSGa1rPGRnEfsFoMw9hCSis9EHR",
  "key24": "651GQPyF5A3fN8EQ5xgxeosgvYA2aiHQzEBpqqrA7EsQNJm9Ttia4WfUESyY75vH5gX59aJuAQUc7NLJbo549hyL",
  "key25": "5Ef4qgH9fR4EqACYSWnmHpjsTra9pdxjU4R2K5aVB1cDxr6yxrVoKu8ZawcMNjoJSgKchxwZNa6n46iU83jfN7T2",
  "key26": "2LDLfK3uAcMbsdE6ArBK2tdUXcBYfWakKS4hB9XPB33v2pd3uAn2BFTH49JLQMBNmsWosqVEwq6tYa1C6Dt6ZhJF",
  "key27": "4jYkCU711Z6t6uoSfUJyqAgcRtuS7mkTWMBLKCB7bHDD6GnLYGR2NHvQdzDeRbj4jWSuohyBaujYdF1AcNWU4WYA",
  "key28": "scGLrJzHU8MVTm5mnPbXns2oWQ5mtfvN7Gb3gLwwi45YVAJbiuCBhf1VhnsASK8cQCcqkBLNNjuWioHqLC9DRDs",
  "key29": "5aYhBGTwL8hxw7qBeeeWPWB6X3zZAmnqSjiuHWvp7oSp5jyLPUCbTowhQzGRM6uG2pd3YGkuBSj3ekABX4tcSUPg",
  "key30": "3xAdquNzZvfLM6GDgd7t1QtDShHrNFbqLCy1gLYXEAZzsfivLqEZscH3m56jvjhwL6PJoJf2HeSc5HhBuUNNK4hg",
  "key31": "3nmqhictUHsXfQUNZzShuNu186CLgvwgDHoo9sxekLyvkKuXqJjie7jHR8z9pjJwtEbkR8XwyLDnByrio8cFs3At",
  "key32": "5sSk7tGpRwy3uGP7eSMpA8DnKvqsNcNqGr5JfJLKR1URKzkwxK14joiD4qSnbYv4wvRsjwswAhSNxgkSxcFcCWwH",
  "key33": "HdRKwqdF2ys3HDN881v1ahRNGYjb3kwHU1HJ38CHzM5qkXEUPaBQ2oHM5JMtpmfH4DCVKr7Nt23m86iBkCZRQL5",
  "key34": "3VksC1wbbWwcMvjVqrkReoA8Dk2dWGUpwHBkwSsw4fp2UE27m2bChx3BzyUiFqYgRDEgDBiJf8XbL1mXGd3WJZvM",
  "key35": "6vac4kXU1U57YL75UrQedz1ucbVt7ptbu3MZc6ADHQYwTmZrdLP1nSS5H7aJEAXdgyD6GyNUzUa81Pztz3nxPbE",
  "key36": "5eSM9A6SeaQjD1EhWoqY9ys62dAWYMoxyy8Dpxhz3cWRumu5KE9HeqbHsZRmS6t1DsZRNSpoEHvjZXbQk7sDSjJK",
  "key37": "2v2g66cXoSdhukDKs3c3dFRaiyXA6EEWDYsx823y4gDy4FGPsETdoMduHN2ixekAtnbZzkAFEvyDtYrsQLvVm3xW",
  "key38": "3gGYfsx3rqosJoSmDBVAApUSxQn4hYQvzfzD4687faxP2sCgcFoKcvpx5xJod5BBnL18sjo5C75JxtwFUuXZpsoX",
  "key39": "2Bpjw4xcq1pXJea1YNRXa4jS32cR141ue227t5kGWfoUSohFSYc2ghdHdRYNQz5B77U4w6sf7UUBtrgNPHijD9BN",
  "key40": "2ToDsy244ZNwaa4aCPtYg8kqPYqdwZthKx3WqUx9CQZbRC6BDDxnmHych2TkSjvkuDXHGhsHAuHnwmp9G5i3oYtn",
  "key41": "4oqZ1DhyUbTbFNuavCx6d1sr57neYYdR7TVRTFrBxrXMkdycN8v9LZGmQGqXJpgTBofc1xSEnBTFkLCK4Td3y8sg",
  "key42": "2XB4BBur8WwjaFsGMPoapQ7nquBXWDrponAm2bion1uGs88XsJiCE1VLmH72NgRFeDehLswjQQdx1pkWQjHKADB6",
  "key43": "4o9d7Zum1ZiFiJGszYgCmrhLqSoNRUBvpi2hnFEgFHY5EqompPA8pJmMUeNA8v4KYP92ZfDhXrSycvwKHVXC4VBo",
  "key44": "38Rc7jsZEUBVUNSvWBdggUpuJM5SLPjHxXkDhrh2gGgfmHA2AinrrVP71aEZEDK47dNnaXDfbBpKvWoW81ihTTkY",
  "key45": "7RY4c1Rb5wss4qhvoWvM7e9yvXCa9wZ8C2ydFtJPgc6PvT3ZRa48JEDaDWz3XWuPdXZsSe1WMT5S7Y3k7D1LHmw",
  "key46": "4b1TZ8Vakj1Hats2kydE8eD3oUxzZsKSbyypN7EG5HyTRsTb8hfMV2sbNb8fitr1urMjfpQ2UcnWnUakj9qPWbCr"
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
