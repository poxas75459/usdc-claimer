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
    "5KLKBspT7WXqw4ZL4MLwpYto16xcUpcLGCRxagYKTu4kvidcvjfKSBSrXdDVeJf3hAwmcXdMXvsHPx6FLvVXwNRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ssyzqo4UWKaRgvRCsPGzWVZKoFJREtFvztMMeb8Gq1mjksfu9JNLzW1hARYCWfjL8vRPHu3Fp2ULMVi2unyaZ5g",
  "key1": "5KBhnkHwSiPgqaMkH6kBdLfMLQ3FkkHHfwR8z6HKYUzvjL5bzGdLtesFZivHD7H1UV7G59PerQuNe8JUKCwJCtFN",
  "key2": "5NEQsgv6KkfwngQVF8FvfENHSe12ToYtU69wWJiJCF2zz2yCgx2WnwFnf4rrkp5stNkLN58qP8Yd5sSvjzRrJScD",
  "key3": "2Xv1smpWv8VChF1AhRR3R15NZvHFoVonE4h2pHtj5fuK4sMdURJQQDz33VieStpxoyCv611rtbyNKKsj87Sye618",
  "key4": "4ti1qFYjKJskbE8Lf5GTwLHzd4pX6RcSHSCKmuckuXUgdMJzasw5cJd2KKxq6CqhRAKAMYQiQK62zKYDy475wHEL",
  "key5": "tHresRTYATzG8TKDW96RdvjJBhet9qGihcDKLgRFJ4oDt8taqFfyKkX5dTs1vhvYjVDanG1yEfUo68ipQGWJhob",
  "key6": "2cGdYATkh8Y8nghFZrGMj6hdzZoVaFDc8htNk5EYcs7QsajH5CG7HTAN4yScb1sxfzsdYXrwFGZ1jsET3BGkzNeo",
  "key7": "sHF7DuFZ9yQb5dKw5PsX7N5GUDtCGz4nUk5Yd45HhKjDsKBboom9qWc6Thw78Te2PVqdEWjGJbCEZnBuhP63Xyb",
  "key8": "5bD1jBtJY2wUEzEWP4KjdcAABFvYVKMXdokwqnCcbW2J7ZE4ntaBSb9GvU4yTHcoxiFgczJ1UHuwNMXFc4kqWeMZ",
  "key9": "3UGC8GrspJgseXpvZ44pYSX6QDtxyNhaie2Ru1bwgCiEEBJ9TtqwFkzxe9L4ZxdHQ27JTrevyj7SGCNweMtAeacg",
  "key10": "3hP7v5ea1dHkUcBkEGVM2TKDwRPjCP26CFJ2C86vAd9sowx5dCXryWp4PdDofjazmZxEeYSWnPhyysv58HnGUtte",
  "key11": "24sBrVZqkVp3jstFZWTBWWbf714zWTsHdyJrDMPL5FSUQ1UNdy5iXtKRmcn43XUDEzNHAcLuCk6tr7Z8Cjg4qfgi",
  "key12": "ikeNexQXa2JtdFzn5DMzgDk9hPui5gGioawW5b7jb91uMaUZnmidpjwhyJqVv2Ghyyt37jaRbPjWatguvUqWAtY",
  "key13": "3xQhZPtoENDfTFsjhFJ7WRu9VYMUy6PXGmVwh4iR1EgtCrtDaH6NqyVnroFC7fruz4e89T2RC4LBEALtrPR5cE75",
  "key14": "3HteXZvPqGaj8ieg5y3LkStLmcQK9uuk4RJ2eQPiFUWbKEFXzwmoPSHU8ti6xUnMfnQdEoXzQhqmvMKEzYCFzSSc",
  "key15": "1h5RQTgA8oWpvueVSm9wnBg54g5ZjUh3TEd5K8DnXJuxSX3z2Ch9jhRjnfMB74btT2njvgy3xa5n3ZScbRQoGTK",
  "key16": "5hMX7Gf4yZXHcvEd8Q7N3rKXDv82GnvRty45ULjYmEV4fQVaCytSXHPNTLJ8ZbjAG1NSUYHDRwDFewAGid5DN9P6",
  "key17": "1qKgjE8VyPiWXkZzkehJFdXhNfvFn218vQS5gG9Xkg31iZz2GKfheuT9pQiZwXdPwfKyPhWsevAdpmiqiGiw3rB",
  "key18": "66cGcpbd25v3KsugQPNmxvE8d6xJLjXNzQyD5j5yCND8APhmzNe1FJPeSg9bRbS1Hk4kzTCuaYSN5C3fNDXoks9S",
  "key19": "55SBo7iJuPfPUbsm6d9Wzxxa6fMxhNAxTNQex6PUC6K3kneB3L72ArvpfGf3kz9TQFDc7tEuqHumG1zVrVsGQJ8i",
  "key20": "314Fd6qUPqHwyfQ2MuKxuBDz4uhPRifhnC3GCE7mSfPhRVgWZcZfsp1KyjkgH2v6VQ8CPMdBKQNqaMK2fvMMfPzE",
  "key21": "2i5e5JvsYjSQAmFQfTdVJzsY8r92dc2e2n33tXeNNPrDCYMHuE6T8tZXn7bYdXevoAc3YZLDif7zL21JB6rfQM5H",
  "key22": "21hRx5gvmw4HHPvfwEyDn8V4gNPjo3D8xeHahpgZM6g4Ewi3GZiitSGMw9A1JNkGCqS365vKA7yQTLBLikfYNwnX",
  "key23": "2P2HMRrgfjjGGjv1p3d5ShhNgGdcPKfhp2Zg5Q9zDBoPowTbeychwiE6zQkuin8D28Y4Ey7rqynwy6wf79bTPm88",
  "key24": "3Frh3cD5HZLP7rHzC8rapPJD1RfxBcZNR8WPnwkgFkrExxtDS2CfzUyBXUvNWKHJf9rBQepvM72mocxBHoPhLvcd",
  "key25": "4sfbKrGdH9J45XwNouTvFXtfiiQgqXvrphnrRsWNfZ2CX7wDZMVmbSyH2KLt8JGrDX2t2uq865UMSaU6N4WkyS82",
  "key26": "4iCGWFefFFwHSBrKkzx4a1ytDiWkiJ8s9YyABtVYUPBePefugX1QnUnvWFjjVFtvTwkhsiEqGB5jdeddDBLXEPas",
  "key27": "621Y7n3m8Jo8gGmx9r9JMohFxRnEn3JoZZxJyDahQPRdw9fmXszUXSSdzSySDzAUMrqXpbAHLArj4nxShyJapLWb",
  "key28": "ZJJLxDEqsKAyGLmZ1QahjtYnk1foMgiXhq9wneiMqpTGeDG1Pf3pGtocJiNcb5nJ9PtQEdC7GHbmUgjAQP2yfqR",
  "key29": "2yyU4TaJXAZDvevCD1n1PP6xJJziWp35UZVhUcgeqWGXAYDK3gM9RWmxcq7chnks67J795EmbAyQQsxaWKaQjNaj",
  "key30": "aoG5DM1ADfpMYfBxCNw5TWWbsHtMQ47zZsucwdGsarEQFPkrvxE6DyGGFYze8AUWPGbzxc9kPFratvR4ZNr1HSB"
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
