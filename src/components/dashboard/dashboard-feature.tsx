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
    "4K3qG3XZq9fE9rmasrsZMpyxSAMndbiSuHGkrevb1T9NL7CbD4u6nfK52qPCoRa5Dg3LyzXtBy6vffd1q8cZLYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BbVddbtuxyv3nRn7KRtStyi6x6McDeywNcUxdBpTEWdeNsRtRkqDv9jR4cwDwgXsaTbG9ofm7wKFLVHEh38nHGj",
  "key1": "5FQwuc5qPe8VZWq2fqBq7PE1t2vm6s72w3iRYGgNi6TEaTi1Bm9RqC1m2nn3YUr2W3t232EH3QQDVrX8X1eKU5M4",
  "key2": "3xBhfjaaBx4f13iDeUh8ubVC9kVnHD874ZCRwFSAq3MCwtRacXMnegQYP4hQLfcQ3c4YZ3uaMtcJ5V6vYy5gsoTb",
  "key3": "4PCPtzF8aixPtmdLAyZJJZdPTbgSy1ThVX2zUVWMrB7hzvCrbNVhu5vvFR7znTSBQxLU3QCyReKYZ8YDibU8E1HY",
  "key4": "56T2x2YS6XQfnkebM4gTbGwQKPUPmv86eN1KrjaGQosoSZPn7nwptwT7i7wFEbLZm27rYW3AD1HdG4o63KGMt5je",
  "key5": "5nYfQEsCqzaMRaRFDyc5kHyK5YLRe61ksdcGjGT44WMEuPtdDk1EmB8USuk9X7p3HfuMyyvuz4dpATff2MMkfgNa",
  "key6": "UWTuriFGbMEkL3zAogpj37h854KxDgN4G9p2Yu9jasG4BnniJ9MAsBbpaFkc6h9JdHtCBJ7w56hAQBrbayHFEuM",
  "key7": "523q9YG6txzNKE2CP3mV9nwKtiRUAM5F8E4ChgyHJfbaBWLQuitmi4s3XgZpJdNXsFqiMvFi4CeJwSFasLi3C2Zq",
  "key8": "2mmXcFuJ7QQ4BMrSkDUEY76mTeMUkj8Viwu4qrQdwbHBcA13JjoL6Ne7Jby6yvXMmminMmBs6PtBZoy7T2axRNsA",
  "key9": "YFBYTw8Lg2sccMZmf42E9tegT8YQLHWTLdC4eprw1ozYS1DTdAAUYKmS2Vk5c98WbBpHDWL8kqAyb5qYQpCDZ6V",
  "key10": "22JmeY8dA4F5jGd6wuUNP4BWLLe8zfMLdVWoBbzicBPFA4VYP4kM7BwhycEMiqHLpraj9cfnwKNFYBS2kGrkq991",
  "key11": "PaUGehB1RWuaCdvc4x7eHkPTHZkygXQkLjweN6GY5MTu9CUvN431kHj24JQgWnq9ArmExVHwUQNRrvBkLqurJVr",
  "key12": "5bkGHYfLk1Jhj8NKL9gVVvRc7BvYCSTwWRasSb6raqbg39JP8ye4FWJjVmjmMNJ3QVQe8YVNfRqghoWQqTD1ApwA",
  "key13": "2UpTUxEuSYXEXriJh4J2vChtPwjr7cqTjS4RAdFPXr2uBaJMpfPecLpXrxh9De2pTKZpPsrD9dx9iQHtVFzhXSLV",
  "key14": "2vWam43Rh3BqWNhfaMD9Q38cQrBuJn7meCRtS8GADpf2jufoCeGurrntCn6gnB7UmP5By6j31482BhiVCzsnytBq",
  "key15": "4A2SAaqyGfxbVYrteACPoAx98Jpp4WEyiV8pWSn2XjTo2hwP3t9MvSbrpM7EhdoWYZpBYt9dWuDhTc88jJ7vM6PY",
  "key16": "3uGC8C6KskxkAyuVAM56ehB4SSNHif1WeMK8Pt7zCHU5orBQNkxYuEBF7JCz1weGWBJJJnvGbjZQC6S78WKh8HAK",
  "key17": "2P1dxy1FE9zBXjV86bMnxQfXTVLtsz52A7B95Qvh7houknAQLLdkqHJ3E3naMZYVnGw6sgyMvS9yu4Buxy3vbxS8",
  "key18": "FamUnDLoaN5suWgUqAiP6y8YsLrvubtCw2LqLpD2KPVHspmxdc98M3vKYdrik4xwM7J3hRBwrUbuT2R88zZKfjT",
  "key19": "Qb3QMP65K8wiK9qPTZ8QQLS2crtuE9EQ9rUm2by5X7oD8SyQ4Btbv3g6grj8kAbHUYFyHDMu5pz9f994mh8xd4L",
  "key20": "5sipd3Z1RHUcvNcsmddx9Z7Q2Zak7siXfv3VbKLaf3zkLSjuxShBuXxikpLyWwUAMUAEvhqhNShDKw3ZN3AXiReA",
  "key21": "RfgdNbEdKK3nzvQJZmJmGWL3gqDU8gthKLzoAskp4DeUfjJboh9WAMs2Rywn83DUZSMYtcX5J7QAmiALmcDsjXF",
  "key22": "5DegHqqZTo8rodtTQJHBXnjFavpKYUDyFp3LjxcMTbxuB4FGCT75i4yP7FjXTawmGF9KX3vDfo4XTSGPyyUkaJp8",
  "key23": "xTcqe3mn9KSAy8wfak8byoQij5KXzrRJtaK3F5oz2SPfUQS2tj8A6nx7iBjp34ZokCLgn7VBhJXdoBH6jtGwUVT",
  "key24": "2cTe9kDJW6ZkiLj46o7QbrNjSro2PusrumkQeWUZ8xDZ4GpxY3kVYbqS94tgWCgJaPVjSBqGuT7SDU9nYUEzLwxi",
  "key25": "3eGxznbsKU8NtGc8kmDXJ8zCcVkHF49dcHGD3rCsWVZHLd8UeXkKNGTWCVRyJyntWgde2rTjuzCzkEMw7mbx4VNY",
  "key26": "5DbNZjdgkuA4LHW3JV4AdfnxP9qLsJSVQHVywqhj32T6ixpGKMxAJVL9fwuZqniW3f2hJuEjxh6eNXgpYxmL7vRL",
  "key27": "4wqDESJ8WHBaMv9PWDrqte3qYrHxeGQRKs4TgRXiDVKn353SPbV2WTszbYMkxcg7AnMDDVFKHJzRMJMPcVwSiZzm",
  "key28": "5Bweex1gBxgwwjrqqAkX2pHBfpGz6LCncd3t6XQG3GYJzaDgNMKG8q8znURFzoSTNVHtPLzheF7GBWmMgmWcwGZT",
  "key29": "5LshDuKPyLaGQyo8yNaZh2Kh23hz7h6CCdZpTSCVQzfBWJvezRkHZt7HHMSvnnFCmFyuXWHc3w9UtiVPjFUHkc98",
  "key30": "b4ZYXautmjoCRK53GiYcYq5yDsijNSX6tzr7S46eA6sBh87ddp3C9u3xkipfoaPHwrKkQPF9yghbdcnzDNqmEWa",
  "key31": "iXY6qxtiPwSP7qfPVusPpgBbLbTBeYwgaB3QgTdwWpJR4KhFUX4DzkmJE9qFB2VdaXry5upNXmWTQRn25vRxs8y",
  "key32": "WqedotvMjZ2EzfF7BrADqch396S4deRHdbvN4EtPwX5iLD8f4psD5Le8XskM9puGbtcFenDApMECM9APUs7rsFp",
  "key33": "xGqaWyXBZQDErYGfprz65QzqmNt5Rtm2Z78j3qPqZLz94QE5fNHWayrZeevc7QWuPdM1H1t7fPJJhT7kKo5tB43",
  "key34": "3peAQG4fWDVh8zdyLnhrcTLLiCzyr5JfS8s1HzbZFuhpABv9AjY3HY6R16SKu8s8VoDJpBs7Rko2QxyaQngWeu7J",
  "key35": "29mshjbtagpqYnYVjTzPhHDvv7acDtTNqg3sGin6r4LgGxar8kpBeEF37PuqUFD8bztgMFagyT2s7FPvXzwY3Ms3",
  "key36": "3DAs1EM4n18qQEimSFkT1LJbvJj9XEAqziQeKSGpqaaAyB98kDhL3H9i3Paqnf75V7BryecDHwkKEyUyqpBfa2Mn",
  "key37": "32A6dk3VAnLQGBAz7L9nFn4P1LKdaNHU9ZTeGk5YMS6PCXSpbQtEXLWZyyAmLLGJuKHyerhKvWqxhgXRfgxregLb",
  "key38": "32iEhna3sFNfrq7HfA8Cg5VcSoaU6ayinF8SL2muzhN6bSe6125ooqVWYUDKvXj8Ph6dPbzrbgggvppUNwNuDJuw",
  "key39": "53CXw7hxfCJAT3wAHMsyamqPM9CszeD6E71QFUo95c8iFTq7pVozvqzKzbUFQXRAvEw47C59DG7V2BdpQmDP6XFD",
  "key40": "2qq4AJ2bRcN9FUxTgfZZJ16bxPPaoDLrXJS26SQgjb1stLiUCoTV5yJWXSaZvwQEWf6dHfG9KgciyTFzuvQBdr2H",
  "key41": "492vpcDtTtDSRggnzfZmR59wuJUgz9L75YNrz4jwxQh6W53ji9oAbwT4jNkxsMb9GqmhbjVZSFisnMeaNd4dbv9g",
  "key42": "SAfoKkMQFDNJWUo8w1765LbGpKfdEuq9hHPsKGJmZUYTDdELLoMxQpYfzxghmANwetjbpVANeYBRG2ypAXqCcwE",
  "key43": "52ZFzYDDEy9B51dg2vZF1mfooFURKqcKSGx193gXA4BVgb2PS1WyiK8kfrxLzLRKXGVnp8nNAarioj37ZpTsvty8",
  "key44": "4xDTk4mHdxMBWVoQtVxBTTUo2H5xjxF8BrrpZX1rAyHZcdihGsLizV4onfy2AvbFEAVcntJMcHYnHux29TZvfhQd",
  "key45": "2gBdRrTTwenS4jbz5f4TtMxKfejy7nWi2nXJvkGE5S6AytVstoCzZEMe9v1sp1QnEJ1Zz6kryVHAw1wmRgmRn2Qp",
  "key46": "5tUTzs6xwy5jb2SjaMtEFbwNoy5X3QuzJe1AYxaT4txtUzZ84kZ76cwisQvRVZA2Poo7ub4kJD4YJDWL163CAYqw",
  "key47": "BuShqxTGgUpX1h7kh2fKWi1xpUSDAdw4GXjHBXWUXSUL8BianhpK3yWANHXDqQeFGYGSrTYHhTmEp15nyqiosFB"
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
