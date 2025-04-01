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
    "2RzV3XXb3a6n8RTTH8kFQwXGsAuQmqUfvfkVrUEKYqJYmWatE7pHd5vPX2GTjmGoM9yz8YabDWmBUewHatNAUoxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oct7d5DkXpEQtMem6gqoNUNaBQchCuZevCo5tZ2hXyDuxrCSwP9iJoSf6FB9nJFYNjHZTE6xtnAaZR3SavxDSWE",
  "key1": "2Mmfcs7CJPNo8oG1R7xFUrz418M3iZMYU16FxwWFV1BWWjXgrCDD5zzWq4wjgwejiRp8Hy6UYpqWPaeUYFEz2Lpz",
  "key2": "5NBGYshmwyVpMbxx7MtUtRfs5ahzQbWLLefWHxWML8n2hFLwYrbW5ukvwbuHYBc4VM2JKKZBRnVZbMrGhZQneg8H",
  "key3": "5TdAC39UZo8KDBwEi796xvLkmLHPoCdthqz67q3XmHgAuUdLyDpayfKbDXekg15jzHni8Sr4cRYuVkW1ydXqaWNM",
  "key4": "wbM9jCvdu3ZRYoRPQQNitCkE89xKP2sUN5RXJuQRH7txumPGoWXgjAkBJoZUbW2rChorJ9vNc7eSLvsGxC2HAY4",
  "key5": "3E6oLrC7biPovWWwVfppsSLnLYA1VkYxgLz1oXZpVxNBmdpjMZGdB7Vf2GuM3k78aByzss8QDH3bQZnNxqdSy7UK",
  "key6": "3Adbzhr3SFQs7pSbwuRki7VJ1RcR9x4BtpqqJbEWA3Ln9wSm56mgEXMtnbkEVN7vj6ct1QgfQw1Tdwkttms398VQ",
  "key7": "g47q93Q9e5c1XLRfTg9k56dfmJH1uZCUPsX2k1V9Ahsd2qBR3QH5NJtv26y2At5zC52DCG85pW2n5rULDHADxTj",
  "key8": "LB2evvLZBu2iN1oB8zxTDDRg8cCEBBiy876PbLtHrJePaQda7yJ4Gdctj2JfeT7CWcPwesag631M3CJgaft4pr9",
  "key9": "XCFKFmi5UcAGiV6r1Gw7Uz7sXmcPsBAdAQVRByiz8HFgEXAi4pTtqvWtjzFUwcKysk6ziW3C8mxMqs1dYni5Df1",
  "key10": "NxUyG1HibhB1QhEZZBsEWGhZ8426Bfe4c99hVVWm5hyw1d72iHywK96Ye9TAny7yUYqaAAE1HaNzPzFBbotC7Rf",
  "key11": "5SRNT4svRPZBuPWtEJJsnuEEfTMk3gq8fdqTyQkPWEggVChawJSwJAXbArJD4rd9YwKV4fyTGta8YTcwJV3Au2ok",
  "key12": "4VDZmkpBKeU532D4p166KUgk7sbCHXa3vcQoN15LLXenuCQGvaRiUn56E4mXv1ihoT3ocNABvu7sbarqcmGD7dC6",
  "key13": "F12QktuBgfmWxSQoHdhEvWBdKuzEHF87YkVg88dcWYop3ZvXUmzMRoJw1W9WHq4VeEB11jWfXDLx812AW7qfCYr",
  "key14": "4KaNwfUco4RK1uLkBaxsdCeRokPm1Cezd3osEju69zWoCM1QcK91hpTYiHQEDhKJC4TX1EMUQQukhddxVvLMYjNn",
  "key15": "5QgxfgAaGPEwHHbRSGtmUTtSqNLxUgXZpkXbKzbZF8n2ke8wUR8JDfeY9eNjFDYPe66X8TcCZwUhV68ZF52XQFMg",
  "key16": "4VfhwYYeVhokDiLYqehTjtBozES7MFDS5wURRvndn1BAhXJ9EmCP3WmorzAneDjggY4rP6WmyqhMf1ZKXUTHdCEb",
  "key17": "artxwxHLQCgFngxQdYXue9ygvKLpbrk7kYdyB9Xd9iPSvvZQvvtxE9juFZbjkUPRSxHGxiCvAVPr4SJxiKTz2sU",
  "key18": "56Dqdfm5Tuf1RXmzjo3HzKdeJB6DiVi7uaRKPCywMiZcYEEB2xz9vF8JP9SGaisaFeQytPEKQGtJkMbAg9tFxzVA",
  "key19": "2BRBa4ngcKghBXBRxWWDFReJ1HTRYtvJoftg7R2J5KAHpUCG5sqkjTW7YU4oMqcn1Pq59VofeRUkh3bNLyanKHme",
  "key20": "4ndLYcjauG7BLXVjW9N64sHNV9txxo58U8TYabh7Dvga5dxpw4hsmcbgNRLhj7KoBN9MQ54UKS7C1y8PBibtqzpY",
  "key21": "43BfQ3xMb7Mqssr2BymZ1mCpaU8hUw1AYbenqPAKvcE1SW3xAbvGi9mSgE6Hx4k9vQYb6KVEbWMNaV8PUC3TEtmw",
  "key22": "2U7GjcC91PSUVFmKiWF6oivMrND3jc9ESLqRkyAUy1pGzFwuhSiL4VPpsBharLjeY6xtChdyjREyvYnd534eAVAE",
  "key23": "5Cg6BfUQhuLTUCGcsUVhWkjpZkrKKr5WyLsQHt4f7V2gz4nVJzcgB9BhV11ersj9V3o79JsH7CVAXp2aYhaZaLAa",
  "key24": "2cbtD3cDkvi8P1KrD6VDEF7ns6NcjY6Gxgt1vfro7bgbwDXnV81EZ6XvDwAAeQVT64iGiHVcCCqZdWHrjbZqyx8D",
  "key25": "4YirpAMHXpnBt4bpXxiYw9ojjp6qEPynpz9JtTtZSZ3ij1ddd5vv44mnMYo9vWYmuHbr281D2b9edxt6SRUEud34",
  "key26": "54SAZBpft9HWjtHE8ekLtf25MsvcZSfyctJTmxBUBeTf6cc79rGycBsJZgSMpMD9vPYfgLVg8oC1UKwj7qCRSBBo",
  "key27": "2VuruVN2FUBJc6GUpP4z1nFC4msCQbqTZReRAmvVg6H785FzJdcqjfYvWsmxNX1E1YPjtB2geaEoFogQYSPzmM18",
  "key28": "4kg77PXBGfL1CZwsUGZbPiUe6vGZGbAizDycZQKBDiBsMhuttWNgPtGTsc9hbo94SHmotuAVigdGHAj5BN7QjgVf",
  "key29": "26W4Z2pyyrD6cUTmGUgNUzh9d6suq6a6Jw5K6xMjkeXSnqTd63ru6uu1r3gj4p68Wxz1XqY9x4nD9XmCH5UJKvxw",
  "key30": "3ZzY36zfkgdGsAXkX6LWMWDjQRrBXYpph8akUbtSx29ioKw44sHStqTdvvedieeiYuTQbtRirqsnjgFenHvemCSt",
  "key31": "5zCMUD3jY1xWXFKv7adPtUS1zNdWsiqzXaaqPx4MpqqgdboTnV4CERmzGrBnLBj66UPmAM95inYBVuw3HHPAgC4C",
  "key32": "58zy1Xn6DtMyEFF79HkkDkfg6nXNEpyg6xzn2uCm3mbtRTtc5ytAKYfboa2scyTReKUS9rPtsMfb5xkweWpN6q7N",
  "key33": "2R936Ej9vnm82T1pHKG5Es54ka2QRZUkQqKKVBLDTs6Pp1JPj1SDN4sasF8m6vj9FFvJ2Dzw2uH1ZJ5GZx6kbvG",
  "key34": "3HxZMo2ebpPLxjLa7V7oxGpdEW6WKrkCwxLuVdbUyvfHfoFqjtHtmZVbWM1pJVE6VVZBnsv3xYxvp9FENSH1RMvd",
  "key35": "2Pse9iwSogx1pu4J2PCNY56JKAprTYmKq6ivx77hyePQ2feDyJ8siqj8fBZ4WEBuvSSyhNKyLRz1NtmGKxvuresf",
  "key36": "2J53d8aLvppDFik8LAFZh2VqJxBnfBcCCLjkJzvmz9ceZYkgr1E1ekTesk4jXh5h83fJTKuxXbCsrjK54NGeDJoo",
  "key37": "tp2gZV2Z3QSMfvR3zp5zejksFX6QpxR2rpnjALdc8q6SgKPbjHdMspnvw6KuYz5iodf1pDe2mHHReRWbezZDVao",
  "key38": "4BKNPFyrJMMuBcajWwWCRDXwKQ8FF2f9syCrs8Kn3RDxtQUM9hc9wi3T5cyVBcy8ffXomUDD9kRJwuWGoYoxWNsz",
  "key39": "3iiWXfPEHHioB9HJZKGzFxDQ276QzQxp4bivMYsGKLKuSg5XGo5nJXWcgJbsWJLDywFS5ehupTDcbFFWJf5PAsKK",
  "key40": "5f2NL8JYFhRdPdzfZTgW3JAxomDL9kqxWDG7qLf9cZPWx2QaTP2B5MTDAe6QQ91cCVaWemsvC48kExSPwS8gR9yn",
  "key41": "49jsGURisTfvyBBXcwpsQ9STLgfwpKVTtRybCX6V4bMj7SKt6hMZDNz1EetPJ6SgQivRR4ijjYi3Z7y2oxBQRXRi",
  "key42": "4WGj56k2V3kfLYPMjCrzTTnDVzxyrdkvayyNd8GTLxeBLmeMFiuUC2TVfJoYHBPWK1WCjLsPCfmKTCehnNorkEg7",
  "key43": "2fivmYtpbSxbk3zFs9RWHgqqi7TMd6Gnnqe6jtKAJKjxjEsgVEvsPCw9KKFrwcdtgsP4zndfnxqChZUbBGV7vAqV",
  "key44": "3ed6Ni6giZ3FSvprUv3Thm4fB8EtrfF68ozqpy9uQ3RgGo2rBs4q2kWRFZNx2VRxce5VdZ5iUPF9hCnr2ewJNoGD",
  "key45": "stTce5thhYVshz343eXFyRmbTSY6wscfy95hr1SrtUDgyiH3Vksvog1tdBGaAMCh48iXAr7v2HmcnJuBqFm7TPU",
  "key46": "2oCrx7p2MYL7oKffyV2XjweGz7NFpBzoyRKiPpootsGJu2E3bjaR3rwuFtaj7McLCJCKgS9sZqmHLpnaE1y7ZcbU",
  "key47": "27WPjuY4pcFs8jLShH2q1qCrFPrnSS1CSF5UGPNHXNPtkfj7emhTK3ndtwBQzzY944PRXUkwXfeuVNAQie2a8KqX"
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
