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
    "4JwY3Fyk1C8t64eBw69uJnRw4UV6rQPmmJaFxNhjf9vHRV2hPRRb1CDmGLHo1nGnLSMCPV1rhEGXHtcJESco45kU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NbHB9QuTkKzX9w3kugRTSdxsVzFQSqRg5zuG51Q7DgBGvFabZpmaGmyfftDnaoNvdmcKW2eQrv6u2WMXj9KZxJV",
  "key1": "3vLqPgJ6HsfruUWzTxX5FaM1qyVifppTngj1dibtxMd2ik9hiiiXFbnqav5QUarWTcu7SanBt1QvzyqT3ZhW6Vss",
  "key2": "3jv197fvBhFuG4VnfdGmrXQpQJKcAKz2B4STzSeNxJ1WuR8mwnvSYBFMZHynADp6ohSWjrp9CTv5icnUG6mQCi9M",
  "key3": "5badES34mGYUGY6U9UP8mgnMCTjwLKf5FX9QPBLikEhFNh9UP9D4tYgo1LYbrVtK8QDzEEPks4Av4XbjLjRyvp9u",
  "key4": "4Sv2CwrRXgDkyPVNmQQk25PMSGXY4MJrRmRKGEgUoxroxFiw5QGFtezQeg6Qrk84S9SBoRjDiCjVqUVE8d7bhmr6",
  "key5": "3PuB32DzzsD5nP1XQyTZsx8d7Grededgx9T9cxSXqG43phiAVERsw9ZgzWaypXCm4PskFhHrYdVqz5Gj3L2R8Cjx",
  "key6": "4HjaKn8nrkTcsp1jqtkviXFGWDpCXCE9aV6aSnLK5KuBn9535f4xrpaM85RBXpwRLBdqGsMW7teauKJAyAJwz4wt",
  "key7": "4rzuHeBD3F7YorRFhEgGTg9nZnKmZdTwYWxA1ejMQqcU8j4MHJRqsDLZvU4fhvomCkZ7NpKGHpyFu22SEE61hwg6",
  "key8": "4rEUaAPV4ziw3E18PuBjFTeciS1nB5V5xPHLNKgYsg3FfPg5W5Be5joevEB6kQJQNaBz7SnhhEd5FrHZ7FsRLVdG",
  "key9": "4PPaFBPB42Jx5nGN9k5bW1yuCv2ybD5kWbxS5EyoKyLCYLgYGxhzk6cs4hadYu5C6ZoyLMgzAD1DrTFqcU5pDgqQ",
  "key10": "4x6ULVcrGA38vJ2ANwjm8kBxjGYfKtWAUG7Z53hfA27unLFQiPtxzD56C4qgd4QtexnZ48RbC2rtRdWwaWK9vwyy",
  "key11": "5DkbFUQjW35vN9oHp6hAK62ifjD9T1xTR1ifbCUj4JfJ6WkPuADjSWCXsjzZTbBuFPJWQaWhoAhTYJ8ZTxXosDPC",
  "key12": "Lmc7de2Tjxhpm7ewEkpD5xaRoqgCNqSBizMUU1xsVhmr7BnzJcP43NugT3ySrmYAKLuxFrKEhkY7NRFDNM3RoBq",
  "key13": "52HV7S6Qz8qYrxT4r1GsCu8nmVNGJDxJcjKRNDUvB2MZ6i66sDkDqegqdNmvLZXXGTpjg4HGHai1jcQ1jAXjLdu",
  "key14": "62Mjiavs5BD3RKhtCSE4pq6SByQGzZzPtHmFzykCNNoE24yEKg5ciP5wPhLqZqaSiXehUzMa9qiFuRt62TkVAB1u",
  "key15": "BoWTNtbv1JqHuZd69NBv3uVR7BtgetXBcy4DA2YPZMLApgprKVvEf3tvMPW2d3waZ6rMeXkFUAw32DaLtpdZXGc",
  "key16": "4Bohao8Pw3H5s6275ht7wuPD2F1fySRWaDRtHxLAfcRXKGuYM6qNuGWAufQUB9yJe9eZqoWLBeUFE8SS1TeutgcG",
  "key17": "5AWHAckAcK4njXbghvTQoUB3X9FxjNcVXWCeKsVsgf4afXchDG37fcq3qQsifbEQS1cseQdfga4TdwCKJ7AUGo1X",
  "key18": "4YeESKTzx8ANQMJCBAiJTmcVKsBfWCw8Zy8QJ7j6g4UrvU6kpcZt1u9ZbmsAhKJQpEvHPY23TVPT48fAio1aXLhw",
  "key19": "3Z4cgYiDxstab3NDbrZqPo6vfjv56JWJHqeK4YvgCwM2MPxKQJt256G2A9E4yMGYVkPdyvQhLcaQKT22kMBfT9Jn",
  "key20": "vYr1oao5rjQsM9YT92B1ZpmkEnthwBrb17EYTvGp8nod4n3DSAgaG3GptUV92F8PQqsxZZneQuv3H9EwZLtqrqz",
  "key21": "3VKVDX3pUgj3SGEcsionDeKSJx2MsS1psqx8K6ZJzRFiD4yY4AFR4QowMfGikQxUrEJPPYdioNmrxT7FnV6GvTfL",
  "key22": "3XwyH8FYr6QVmmYAhhqix9ZtMyzepUPuvMzj9HpkriuA8Z5DfdpN7vYxKw28sahXoTydn722QPxVnAzsAT8WpmNF",
  "key23": "53iJxoaCE7r7UosbDaN1wTZWtoc7EJ7suArbhrrYfXjPsiVup8wtm4dSaHiU8Kr9M2svJbmmw2yAtmxrzfMtmEK8",
  "key24": "5LhgzLfa3U49qBaHwu5H41gFZjkf1EMoHdNo4gzATsgzp8YaE56QkfrmxwcvagZ6yB9FQvU1HkXxqoJrbPRM56vx",
  "key25": "21JJ63i1jh73ruKSMe9vLVaTyJyG3WwH5xHnEJAndLHdRYjyMPJCraoDfS88BK7F85avvBBi7t8xVz2rKfd4nRke",
  "key26": "5Rm1YK4EFgR31zBzejVKUo4L8TwLhY5q9uiUHkfGE7Z2BfbaWfvvB3QicosyyazaqL9WU56gLwLUZtQ1CJpBfipF",
  "key27": "3FgHQxwcUZAtkPz7WHwXGPNGFwyg2AuEQ2e3TBTGeCsMEwNCp1Jfa7ZH2mXjPHmx3aPWBdEsgMb6c8jHSupJZtwL",
  "key28": "4j1X3T3KRdkbQsAsZG2rPbt8T6JnEu6ECxSDKXD4LkSA6TatsK3UYa6smFWa1SKjrUhHgr5hMDCCLHQ27cxEG53V",
  "key29": "J3pYQ2etB9dRXKrNyLVNE2sqw5sdk4Swu6bh8TLeDzTtjKJHB9pD5gfaspZWo3CFe8UV3rFyH8hUhJZjZTZMvWy",
  "key30": "YTAoNnSjxGfL6AHgHwD2ZZifhLFaf48i7nwVQLeEDKSen54xtJaLnsiA28yrAuoeiDAQW7ZK58L7gp1iP3pLaFt",
  "key31": "4ft42WfT2H4bRWqQhtkqPiSfx5gwNAkfZP4x9zYvH5GDwvkEAFrHjPke64iC63uam8GoVn7DU6pS8xAHoEnmAxYT",
  "key32": "2kmJs2brBJCy1rSm7UEG1hFRPagmdBeJdMiuA3mBpjnLeU9mmW4JYAze9xJxy3Tmy6udtb6SWfo7QN6Kp4jaeHXc",
  "key33": "22D5dAGXF5VAixZnyYBZTkZwRGdh1MktDaSoiHKxZBuW4dpHkGbgjiXNhZmtmFsNKCW5zD9obH9c7jwNB8qKc6Gn",
  "key34": "27Ahf1Nwc36Ch4oJpV9S7nqS9LF7DHYW3KsbdPub24KZXSUNNY49hkeqb7Gms7xUPyE9BTXRWvPxg9YzmSTfqnwi",
  "key35": "3yyyEsqpBYYe54s5QmvApAxHHgoLVZF9Y3ofYHtn7yHo3hq7ktTX3zNnt35My6fKJGtAcdPvQQiKDdysoEB4f1A",
  "key36": "5FGdMCUmXtkvLRJvkiiacymdhJDWgN5uyijkR3otirpYGcT34nFc9LoASHsMMUKpaohuNsTJ11j8Nrx1fAvJJi67",
  "key37": "wVbYPvMSBqgtDXtHUeK4UUqVyYFx5gZmVJnFQACLuRTJ25u5kLvfPP8SjaGKTpUtrZeq4mtJmVu5AKcHiGjAotq",
  "key38": "2cHw2KVdNgFqAE5oQzZmBXDJNckNNEF44DUYKpooniVyadaijeK5zUdSk9m4HERXqYJdeZqtVkvE1YoBfC7H43nZ",
  "key39": "324LBDeSZmi4dyw6EyZTL2AG8m7J247JbmnPdGGed3XVehri2Er3dMd6p1b6V3tJwP44BnABASgMyqshoPikevtV",
  "key40": "6396hUw1dejZyi5vE95xQhcnnE82Wkpifb2jgHSTgfDvx9dQLDxZY1XoHmiRtxbmiiKM4dTtxyq5SqFayngTMr6C"
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
