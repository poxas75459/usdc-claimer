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
    "44pr7eU4JV1wNFH5bxUVWt6MwDth887gjvQ1cPDJmYxp8ea9mfrC1tp9Ty8PgVrDiigX4TfzHhdPKnamqmqJBSxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1NSfEGUi4bEJgm1Lr681ALjxznEtaVwBsvnFi7MJBEgS1PiwQauruSFiuRJepoQCdFZZYiQD7ce7gHwvz1KzLW",
  "key1": "3D1CB5iKJ74uUqyaoYWpoAg7paf8mNNTKR37T24oakWDWgyVpdfkxmscXdeGkcaUb49q8c7WgimtNcatScVDy6Jr",
  "key2": "4tTeYhAHbcK9w5JLp6e3Zcxk9pYv389P4uTvXjAxKCkPiZmUus5ke8UYcuLEQHoxxtRy2dKvoS7iK5u3MofrwrXV",
  "key3": "4EmeDF5aNbcdhAryP3cWBG6dh7NdEiMGy8XVYEd4UHC1AFXbaxdy2jvKtQBFvaraiWmXVmo7zctqfg6VH9kkRQQu",
  "key4": "5SVxdo7wd5VYDFkPTX11XHfcq1WH8U5XafJSkCZFvUPNfsDhYJAmUYsWgFrJUsAZqvALGepm43CVQxCotbAaZa4G",
  "key5": "4BiW17C6TZA8WvHxjWzARQXqgK9pFhK8HThPh4HEdFgmCQLbuUSYyeGB6VyHXJgjYqCyfvcuEmcZKFBr5CZRGZur",
  "key6": "614HsfAEhvN5GdnXw36BDGqsWwo3N7wqgZP4ZN3eFnQQ9Z1G2BUxQHzVs5gZuE6V6jj9UTikf7XHi2GZQejh5skq",
  "key7": "3FzyajovzayxRxGV9df7N5bD3r1znpVnEA7qQhVtis9sEB9TjnMsASRFGNFbs3x6HHFU61VfP1k86cMNRAq2Sjcb",
  "key8": "qC1pQDLsyPe3MeKqWksrmS4AwxKUtzQ3uAkxeisVCwhTKmCmfMBp6e7t5ZqReu4hQ3ihcpoViqkpE4vX9ZYj5zV",
  "key9": "Fjmdxfv6EDfFvGKVNtrNNwznc4tysRMsShp8AbwktgUoXe9qGWn1Kpy9hhazThBqvGtiuaJXiMVBeG4PnKKc3sa",
  "key10": "33kBWPfj1BZeX2sUR1G4SE3fuKfCxJeTr1TMVEa7FCbvhgLEcVUyny8xmYQak53QC4qKQ3Qc681kfWvmqoevMzTe",
  "key11": "u821iMV66d7jnJQ3rytQRQBZCqZg8ka3qqiTsW94E2jrKKNxbR3ADxZ28cZ5XTedcYD39xWRtwBQ91p8iSnV4BB",
  "key12": "3ezWtuZ4ej4nnpHXnrfNMFgWZGjQWd46JWEr6gBSpQJJFLJ9u2yNgXvDArb4Xfmy4oNoeFzUbCRGhmqaXk1bdR2S",
  "key13": "5vrNNr5jgDCSqgERCrJMe9agL8g6bHrRBC42kSii2F8wCcxhRX3F7QPKjwKSTCoaHgmmwWLGXT4zm3ctPdU63unW",
  "key14": "5jmjL5k37HgpYPYDTHCjCBzQ3jCP5Ym55o8b1zftmar4Zhmcs23pRqWDkT5j6BwEMHMKFNsW9MbZgQRoZiFpo8Au",
  "key15": "Dwhgmz9nkeAP4iK82sMZ244oKER8Nu31WfMTuEWALXFbqBJXjo54ZdQB4sUUJbDCVcJL7CQRTdexQaydVCrXE63",
  "key16": "3kvBNe3B9Cgdg9xxBXBLFf17H18xvfaHLnE7CfRvjHBuo2GSBcKyhQfd17JG1Y5UpSL6H56kuuSumEAewpozrsyY",
  "key17": "121qZw8p4qSE5NiuqJ1nqR8jZyxgWRF5RvpiVFRHtTVF65j2hVpQJjNJmvwoFtaSTJj21DSAX6e1WAVgzYqFZFAq",
  "key18": "2KPkzLBQ7go3XYgK311grW64fGk8RyoR9dLD6u5Jb22aUjnyyTgcbw8Mhngg9FbagKhSKAMTRhyVwrygrpX6siW",
  "key19": "2BMechrBVkThTd7TEEz47aDnj3BHe3QRmxFs7t8Ckpzvf1XPSYywNDqX3vyHfh9FmbqvsWKmugnJA5KeQvfMEWNo",
  "key20": "2j7v7mKEZAsmUWjSAasZgtmDaYsLPV3o7FPVxWrmuU8XkPVer71QK3isJnTZ9Hv8wNyNPbahrMqdxBhGAcr82RoG",
  "key21": "2mf5U7YgmwsfqhSybXoJLLgiBYzQJq8acLpERkR9T2NLX8ns68FgtqVLpy31Xn6g9sh9zyh35UDg67KWs7BiEAqD",
  "key22": "5z6qfkQj6XPJdYpQjJWK2sBucmqdSccHsBTpHCnrfHV7fNPcY5ahuoJz5hVAFA1p2Gxh3KHbWWbvRxvwx95voRYj",
  "key23": "5XsBZP24osn9XMQPnC4Sy59KTbU9fAtH5xn8BYXCQA56wfbG5THjBgy2z2XLS3GonC12BnxsnVKh8KaPk9ucc8hJ",
  "key24": "4u5A9NpqKRsZNkS928SoVsFwpYsCcS6QDMRnRQwXFnXzYeVJvUUD1xzVkTYSscZb4M2hAfFdVS4gAZKSRNaqxtsq",
  "key25": "2WYWbtLe9KFkj9bLFVW9mRXLLJ4ZsTH6Zij3ExPEZXztQie5ymr882prYJRZddLuJRHBvWtECNrpxgPAcYMWDkxw",
  "key26": "47RS4ZrGiPCsSCGweh6A8B1dNV4BMhYTXto6u6orYMgbCysrF7LqCDXTSENEkdnf8Bc2DAy7ASAjGUN9kiHvij6U",
  "key27": "5kgCN43jGVUwHt9B3c1Gj38a6NhDFNEQJERdsegnEc31xX5UvAGVKNEbuUNeRdAp1ANJGPCz8ACgxqRVCmzYV7KR",
  "key28": "5hdv3RNzNmbpm8BtmAvZjHD8nySRkWDLdG8UYjHiRBv52wiKwwEzVrhyw2av2xeSDxGtAEjN1U8UHsDsmYSaW83f",
  "key29": "3SLmpA72vcq4PFZZh8fALwRbqWqSqe1Tcg8MUd5V6YwjPheuXpbyZCmXZ8tgL2nacwb4adbSh68aGDTwAqhRmqBe",
  "key30": "KavreQVganjKvY5cCuWAYeUSo795JKiW6Lg95c1AvxjqPAMpXRrPFAwZDPWVauafiCV5e6TsrL9xU7EvVdA3PFM",
  "key31": "2sTcXbUxGtDZnJTCwrWTJYEpwiQeFRosnodt2jBgQNkr1QZ4GdQKGkyruSbSmdwrUJQ84GFGMTiXBFtKu1Aq5cUM",
  "key32": "2VTw2bZgrvh2B6tojNsFZKEL7Kxr7EXwtXz8VaZMTQJEXc56rb4FA1ggNV4ekvY2UpsEAYcKjQZc2fxyyq8ECRbF",
  "key33": "SNmxGffLiD11F3Z3dALDvAUDCq53wpVDsrSgjtx8rLpYyjrjpjoMzxnGnvsBMEk4JiY8PPwP6bPpKCiacEKWRvW",
  "key34": "4XeyjtZamJ9FYdHD53WN4bdMFZGPWiNPu9AmY5h2331M4cYnNu3NbX4C9iZHFHrcBpuwYToTHb9Ngh1bAS3KL24b",
  "key35": "33BfhrZqWyitqev99p7uHJwFuELzj5ZGH8gN52Soekmp7C8XQTrsz8MojUM8PuhMyce6a2VnXEH5ogHXozxbwKYC",
  "key36": "2bcoRK4taERfkokmxN4zeRzAyFn7W1jcmP5oqhL986DSu4WWp6FccVr8hBBY5DntZLgXS7azC4hJ4FmcYGYymkvi",
  "key37": "2Bq6xbBWs9B36xG47LDMYBH6zNMQ6THkgUtF3S3ktvhLKQtij6YX3YTHSTTPfVV1mmbwrkPpzm3ZpNGKmS98XuSc",
  "key38": "4thfMMtvCbgbGqDWn4Qt6Wk893vVzus2ordz1UtY7xXf26jyLe4i6QbMr6qE8R25KMVWHgT3P5f4yeAoBbLjYViK",
  "key39": "5wak5J4Xu2ciC5KvfvYyaL3q1TXnreRYFEahwuVPmpUQVagBaLXiyYGnZmkajKekC2JjVghYJiASsJijizzYf4My",
  "key40": "buYmkA1WgMZnqnmXCGDJwJEoAX6GuGNdcV5TMvjZ2Xqc7pSmbciqiAf5rCnSiZjU6EtkG74PQRUs2xWP88UHXFf",
  "key41": "2EFsP2jKrRy77rq1zmBLehCR4YYFjeQEoMT5xtZgpo7ZSEVX77GtEJcBnAowSjcBhBYZDVGVjzoZXiPLVMEFmyR7",
  "key42": "5qiXKop9Xhxr6Td1jdgA6Ax8nMnuZjkXKb4uaDG28AoagXjL32JdMRazT8HgcfprMG3Je4RL4EcM1yr3kXgVxMby",
  "key43": "2RVcZZUEJP9KxuYxnbwaDF5qasK4tiCvszrpFwbmPerJCevQKFDJmPAKJJ7g8DfsFMvj6p2KaKDau6ajFiR1Gbsu"
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
