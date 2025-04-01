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
    "2uRKe4JCz3Zfhf5CiVMnSkaYhgR24d9C5fQvvLfjZ5UEDbuMRmUVG8QZGbmjVgEPmi6zrHBtVAgzMAx7G5CvnRcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wFkUkvG1PaZdDKEyrfGn98hNDmaEmJo29oWdDe8H3rtmo9mgB5eD7D7bgczezmCPvb4rTk45T55jJbiagyQ5C47",
  "key1": "4ycmcKCbeLMB77UEqvDRmXPDb3u2czPP7ib4eCy1jDAkTF69PR21Lg5pcfbPFnho7eSvoFRFiEFCyiNs4eThBGVt",
  "key2": "4pTrpeyTDbqk8gQEiZpsUiZ7raQVpKe5QXAPNKoFQovxwcdh8Xb6YxdATQ7vzxaoGfReCjcXqeQw6nAov9iS9YDR",
  "key3": "2GtL791UEgF2G38BhyckLPCmVh1dxxuUUANtkrFHQm1v72Yx1Eu2z7CUpkjRmfKjnj51nox4peTbWhenUzJfNib9",
  "key4": "4t33Ae72fFJZjLJaM5ZuG9VpS5rmZZ7UEbn2uezA8FA95GGmdvQYT4mNUjvZVfUk1hnj1Rn28cxSth3SNYgTfZQf",
  "key5": "4FRgZjhw7Yze2aaqcySoT4q3WAfjd3uo8keE186U6FqRJxbEpqX877zHR4yAepYfXrjxoPKSphhumu8kvDmiZasJ",
  "key6": "2aGYn3Tw6kFWgYgTmtdf5EDLhzquoEteJ1TsKSDk3wi46PEMJK9mZtD4pNfUr5tzcTpFck8LDnoda5D77Ti1m3W5",
  "key7": "4S8emkmeZLgWTTPrAmDQCucCuQJGsC2HxoG4mX6vPGgCh9sHrY5rL6v8zNHbvFfk8iaokmi3jN4Gw9SDxaJeUZNt",
  "key8": "5iXgMjEZ9GAW2CqdkU5rJipRaAiUVAmDL9kxfyzgJcsXqC1emDJvhYFraT2fWCDJwji3ToTuRC5JVGUsVVLA6aWq",
  "key9": "5Lu9oVDSgj2yoZi9HT6YADAQvBg4gt8nutHrRGBsmKbF4iByHBTynf3w6EN7nu2kgrvf9LV6NKWcZVbxfFdRrD9w",
  "key10": "2tMfBPRqnnztjQFvnNhHJ8TGBn6ERjGoVVQwSgoa8sDVoWat9HU1fbZELaqSqWAa8JEZocso6vHWwxJ6PYsyL1Lw",
  "key11": "5XVFD51WEsKpXidzTp73QwMJ4swHhfsWKJMQnhGVjVcyK1hMdAB47YtYi7KzqqiWBcmbxVxrqFVaCT8YVtP3p3LT",
  "key12": "2S8TzWZmYx5cbnztcfo2yX5NTpuF9pnT9uE39MHaEPf5yXN21wce5X8aaWLHdTfZDCG2seFGpBZf46LtceJcWFEJ",
  "key13": "5NJ5RRG5HydgqE5cz9FMDeHtPfcPP6YkMdRpRi1CMw1EF4YX99fyvV3xRyzNXfVf3Qx8Yg6AjMPtHxyF8TckXme9",
  "key14": "2RY8EMy9FLGHR44k5QYLmBdLEoE54ArUTNt8gsejoTgNvpUwaqKEG57bTTB4s5rMmbD4A3AoaVoKAfhdkKurzb5C",
  "key15": "4uEpqjw86jkHVvgJpoY18vtHL9rR5GCd7UMctkG6D3NkPZbo6dqT2eeLbTndDCYZXwSHZuMbPfv9qNxRQmDumMWj",
  "key16": "4Fx2DWXk9gnHnPXYX1w6ecybQPFyd2wn7k3tMD2YAtzAY9gRqMuVkGxJhWr4RXxYNLnX3ZqgGTMiv9AEHkuVm65L",
  "key17": "4PzWxYFUJLTnufFtoryc32rUqDJ1rM8t1mdK3qKmhktKqq5W5qjhRd7DuFsHp7XgNk4NmaP83rq25eiKRRLsMmQ5",
  "key18": "dkWyyZmpxgvfw5YV7zA92BX3bs17vVqHSoV15LWHCRNnzFJxZe21jR1Z2iaeGXUej4hBC7NsS6aJRuLDfjc7jJH",
  "key19": "9EJ6RGg9D1pxDdNQRFicT49vZ4b86rKaxDQK6JNvpCzbNsmEn3osdh3CkWHZNbNYtK1dGprWJ9RBVSiNgp35hkt",
  "key20": "2Mv8EpMgfSKwCzgGEvwf458zDFkuRPqfjPKdWKUhEdyVxGnCWSExBoSPGTqU1cJZy1L1qNk7xVh8EfPQYD3HKot9",
  "key21": "3MkWByh2UcaSRNBius8o5cy2Aisu84hQLskDeGDkhxwwYM39useWMhEaZzajsVbWMjBJbTXvuQgRGqUJ8NVjb28a",
  "key22": "66A9x9vDdRxDChvS7AffkUo33t7kMV1drbgZDkUYPk2sMqtomq18ZGV2px8U634LKxTMAC6jzxigdqqtiGYG15o7",
  "key23": "YZd4LuwrWjHJ7N9XAWrqe3SQAKsJjzYjp5RuB1gJPSmV9vBQNqjM8fnFrkYxnMhSaP4jSnJjn73mmyKvraHLNay",
  "key24": "34G4N7ZNBGVZJLm2LGjyJ79JGs7vEhkrmZySRjQ61WvN1HwWcwAhaawErGuG7jru2gc1JfUnVVTYT3D2ZyxotiGt",
  "key25": "4qsxFmshKGGcJ4uiQRdH2tkRKmCkQQrdzizybhkpfmJicocqfCabxRRnzHRbZ2in59FzvmV71hNaQFUQVNhFh7hk",
  "key26": "3FGgtD4X4eTBDSimw9A7i9c7MGB1LxhkeC8rqtJgR4h6FP3imn7wd8zSEbvN4obb5Z4ZKk16dMRFpubBrhTSvpxW",
  "key27": "zn7sLUZ1mKf96j8wdEMXKfdKv2tAZxo1WxZa2Ase94UwpgL3t3owTx7Q5pdKGCbtM3WajXp9QZ9mSw2Cqo2S4Wf",
  "key28": "3JDe2JbchVSw2AMuyyji3Mf7GzwexYw82PsfDK95Q2QsXrt3iZWTGCFwLRVqhttq9dkaugCbo71GeWk6EgQ5f6MN",
  "key29": "54nDZYFPaeVKhwhxsxoUxXp7o5EM95zakMWPYvvty2ih4HfP3BfaLe9pvfTUfqBqAvwmpmVELreTakp9HMq9gBjS",
  "key30": "5FZhvuGjmKiLbdP7RbxrVXXwUT3cT9PgEPXysggy4JQWzmpgmZonrSZJu7qoA8ty584csaLYXFi5TVBQgpHYP326",
  "key31": "5oPqoJme6hPhAy3X4wD7T8Kc8AjXHsWVdibxmkbo539cm1vZMa5xkAz4wbjnzmJ3FAXctn5BeZpVRwnfLPoiDBqC",
  "key32": "wgQjd9bECUt8TfpVaq2bAehXbimoVD1WVLLWCNvbSBEkWsWKqeoxNx2szeAHr7K4MJJrLBv4uzTZhqvRt7E4t8j",
  "key33": "41SqyfWFLepqtbvvnJ1W6srdnZfvt3B5kGa9F6ZkGyn1jUu6o3cHnvzds3gCgTkcXMFGqbkT5w7W47c9WoB1BLQd",
  "key34": "hY6jrv3uNRfU24tZxcSwYk2muUs2r11TX5nBkBJ1acbqgu37jk2F6Bab8LaXXDRuTKuhXB3Z4USTkycxygiGmN9",
  "key35": "nH4rDyXtbfdnQmaLkfCg7iFCcWb23VSPeqkfP3TKsebmqxctHcwiMzrVuBxkBJDSpA3WoT9gkwydobEoxh96gNk",
  "key36": "5ngZP8JJ8HHkRgktLHacAzBhxXitj5mCukvL1WMZvLcCSunRfPiJ29yy75Qr1Wowd8UYes1F1dJLn15x4tYMYVDm",
  "key37": "KVhwyHrswKL2ogsp59zDdmPepxNE79sY6p2CF4h8EA3cSEZshySF1HnnBYjZT7vpKiyCnky59Nf5epmUEVPHf9K",
  "key38": "4KEr4PBBLQC84qVRfG9Xmb7zowNXyi2ZZAF6pCtP1ayLLbS9Tm8xwto4G94ihKAKFRnjytzitCjtt4KCXxGw7XxF",
  "key39": "3QHvSw56n8hFdfLZJX691FFL1574AiGSYHgmXd3NyhUTuDn4FdfdNuN1gCxTLDk6RNF5pwZrN9RzN2fT3djLLv5",
  "key40": "48PMAe5EnfzW5T7vUtRU8K8yj7vv9p9XjHBgL8MqXNqHgKdMr5q2BBPrGq8CxQJBYK3X467ngogs4EMxTkeTai1v"
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
