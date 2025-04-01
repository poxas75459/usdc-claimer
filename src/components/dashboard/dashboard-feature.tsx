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
    "53NE2x84k759m8i8NBLTBGw2cFhNFmmh4eXjRnoQ7FJ9BGmixDEifvdpim8rsGhzz6kCc9r4yRuFdVojmQsXK4au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D7gdStMKuuCn5jETjcp2a8Qk8KBiPPZZ6Hih2ydzQkYahgcmDqkPpKJNDCwhoEGSc6Zt88b3sUYDZMeoQ6v7qVR",
  "key1": "T5K3KorvH3DJHri7gTrNqS3RTPDouG4RLY7RWq8SMatqyWi5mhuAijsScYkD2RrKqHQacZgUw8kURFGFrtQtRXx",
  "key2": "5RW3BZMKx5E6XBci6xcoVUWbKAmD3M6DvXQC6gUCt2MSUJ1q8fSFLookUktD3AqpREkeMTVwxEuAtvdF9xAr7cxA",
  "key3": "2ZVcsidb25kEBnBuonQ94d6kyrhPyEEyxndexGVSgARFeHzpkSg9fdGy5ScAj5GymZn9mNDJQ8YNwCb6ueUfJNAF",
  "key4": "2Qo8vn7sDmwhgfrLfix5pYr5fMRnbdaDhBjPMwZaNMAAytXzZACBzt4SpDQRzvnyKNeWbENcVuz6FT4EZ97Qhn7D",
  "key5": "4bv7hRCwNReiYoMZPuG9pvXqcTwnKH4psW6k93mLYNZ8m5jwbEY9LKvXBaV8JmN87TgH2yo56pJeAZvKqo8y1oSe",
  "key6": "2Ri2MoWRoCWbEzT2Q4ALB6JTfQnPQLGZU3DEiuTjSepJ3gafCEPYQM5nSMJSGNyYbFQPQeCLFhYFoaDmviRbCjQm",
  "key7": "21S7gf1FGi6QX86LUc1A9nmuNahFjiZmzaK9onHARk4x4XtkBkG3XZLu5v2LH41ZDEaKroWJ59WFKiBPgSMCn9oc",
  "key8": "2e9Ks3uwmDwacPuJraquZTJgu3Xvt2b3oqdeuitB8JkSVpvr6yaXAG99pzw29nEd4cCNDMmCdrussToPyms3bHRC",
  "key9": "4sN3JmeDGDngy23TfwamL9UibsEhC4ufkUBjs6DSJhpNXDcaDfYP74nmkK2VJiW8xdTY1MTZzg5tvLWHdrZChSJM",
  "key10": "3KLnGpGzkHQz8RhnuFoNsZPMWuMEKZttLUuBuFDrxJ2LhB3gafQfjg1UfbRZJUgxsUeWgE8hVpdqWhY3FR1xZk88",
  "key11": "5QUAzuUb6bxqLgshr1fFXpzjGGYkzKs3L4kn9EnhbQiaCi7dcQp2Dmm1up25Y4ugW6pwK4MJtEVEmGNrrUwZc6rc",
  "key12": "3cCRMSssN8C2vBMgqPCc9WCUXEG6588GZ2nSJaofLt2kauzZ2iir7JNPysj93HGGdKXaabzfb3UkAGWtMi4AvHkc",
  "key13": "N22hdSXYcreonNNvgywdXSm78oYowam7CVtH9KARmGQLKWphwNdQyzJzHd8m2jovkKpkGDgdSieTsopnPbAhQEU",
  "key14": "4hYAH5gMKxkHMMTiRsQavgd29vHB3vQxqwaS5u1LeBaQiRiK2XRZpaerw4mk8XzzwmmsEdZnch7Lmx27fHUB23Sr",
  "key15": "4yjQWbgyiRFXKP9w772egUzsCbCEVJEjcLQnPZbJcamk3oDyD2umxcC37ycuNxDR76kGcg5RkfdXzteY3q6JbQTR",
  "key16": "e994TydntGUUj9PVFfTyFrWBuNwUwFo6yGLGEjGknVgG3LgRMwGJDoaCSjq4m121trya8dnqruivPJq18sCSwZM",
  "key17": "sLjM9fCYCJvp5crbgskVb5Ds5oHz2Z4YzkmbP7V1Aq4eGgpZ18axNJYADooAeLZCG95TVtLichbC3in8XYwMJfv",
  "key18": "5iuGHuwG5cwfAgrhK73rCqYM3DJkBMWYBndNW2d1wBVVHtY6QFZYqoJmj1JFnaFGW8dMrweGEEkoXe9uPggi2sku",
  "key19": "usYtAAd83a1mCV2Qw42kJWTBUeMfQPrCx2dhRGQixLZ4JJ5TAt173WJN7ZA9HzoSLJ4fRJKL2VmCEFkC6DstXAG",
  "key20": "2ZMfiULyzt5chZ1MLYHHhcsvZudkTYhBz51kaX48WZncbQ4iVUNZKH8BeoeW3np99YLDiyr7uJaBbrX1qTjYNXf9",
  "key21": "4edfFEFRT8xc8nMxqwCdLvaeYAps6wv5n7Xv8VGo74zG7EoGer7CEHKRJRLq324JuPRiEzA5PYABm738ysY18Ktp",
  "key22": "3NiSJerza1Xhft9HLd7TpN2JGuNbn5VuaLVr8xweE52S85uJnZmZbgd6MoTrR24oWxNpKtAFb8yZfKBNPLzT2t65",
  "key23": "5JwyNw4LusiukgiZw34LmWmZf2NSLCiueb93LXfLxRJLSxS3SPvry9f9gLqCdC6DQS7SuUwKfZ5H24nEHVfVYxD4",
  "key24": "KsdANnFwPt5jtpA1RsB4MHRqVR52WCNUczSVcZqzYa8UmebbyhgxxmpdkWmaCDsxYwuEdbyhTWZFyZvpJg6gEPS",
  "key25": "5926Xk5YKesXfGAtAbEginQ9EnvDGb3bbrhDeMdudcXt8BxN57brWrQUzSfgpApU4JP3eKd6mrVusH5AWptWrpNc",
  "key26": "bWzF7j8bkEvis4LkCUs1TM4BPfuCxSyqeTjcHVNDKM9U4zMfckDvZCpwRuKpsATnTTBx8F3VsZzcDTPic3Fchb2",
  "key27": "3oFwCZ6qXhn5Ru3wviswto2FWSNp6BoszvoZjqnU4b6LxgUHwCVzRqXXQQU7zBepdziHCxkFntK2fsdnfvd2umnj",
  "key28": "2vEp5buE76hPf5QsQdGbHxsZpcrGKiSzDTzokEinMxk3jVnsbcZmp8jFZ5LQQHNCVStEUwDAKdvA5THDAyYE5TPL",
  "key29": "4hD7aoi4sVgGCU1GVb797U74mTrVx3YXRbAKTx2Gv8cBbi3M8XazxJLzSSAPdYhv1wKAFA5fvtqD7hkicEGoRYNU",
  "key30": "vfTYj2b3hSs5VjbbQwhZK6nD4VuyFxsBnPysJfVcUGh3W3jCSoZ3N1vaUyeR514qtKGCf46g7D1VmUjDoNP6gfe",
  "key31": "4iY6W8SMysW4fPqW3rFpaa3VjMhdTtxDxfUKWEVTPFre5oU6HS9RqvVjUYjRp5hUnzQLwTEjnAEECgVEewGW2vs3",
  "key32": "67d1BhUSdLKB7tw8X2HZr7pNFHaVqYTprhNf1NRKcLZ3R9JKk5esMvGPH9zB89fJ1K4KZTr1RFpvLySktMRoKimT",
  "key33": "5jcEuubN4SFnq4rVxF7V1WS75K8taNffMe1bjoAApqsRMGKmbaBWFk1d1CMovmEf3R8J7MQngL4jSdbnoeQpGQv9",
  "key34": "2hNsspmaWe2M8zzVZMJco43Ye54Cm3WdNqmN26uPRUXDnF92ayWYu2c8Q8SKSZqakc1fXraFSgev5cnmtmwJUMJc",
  "key35": "5pooBEsSFTDstbPKbceeGtgzqm8jPDakhAQ3BF8oREbqSuXerqejHrVNN4DjtcbG4DnrUG9PYoiarji4Cyet6vVb",
  "key36": "2XNuiy4Qpi2xiG5Li6i7vVMZWwPQyVhXqAXYRagdToB81VZKDwvfygbcoGqMEFq8zK5pgVg1faK4Q9PQZfs7AaYQ",
  "key37": "35SA5V8w33usPpZkFeMKa9tJgui7KfscpQdSS6kJPhJ725tCYG5c25Szepm7o2PTnTaU1MkPcKbNVS57NvHoVYzf",
  "key38": "4BjSgbxmSRsMeZ6w3ACyuuLPXDZahwGC3Soi2CVtD4zmJSszMvGiPC2LNtxAoaZZAcYdJyEDCNnFH4AnoJcEJKGj",
  "key39": "2s6xyM6y5Yixzoivr2t2fBmBYjYwGZW681M9HkZ2rVweYDfWNP6NgDtPSpdpLh37wW6hY4zGd8ja5nDhtMewnTUS",
  "key40": "3ywBGEcnUuMiokvaDkSAUBH6en8DD8W7vxEMDdTG1GEzeKk2UgRCMosuMSxYbh53YWtdU8YoB4CXEeHs5jU555Gc",
  "key41": "2iHBJmKYmCUcbV6CNqthVAizyGsXuyw3XMjcA6tkXWeZChobzCzLx7QyvRA42mrLiuQa9v4erd9t6wZXZJMTpbeJ",
  "key42": "58SFFCmUorgYxGqNWvu6UJ3JqhKXB4MD7jHoa6L3827icUrgsr9yY4XsSD1imiJcGRP5jdvxUosaNDqYay9qeg31",
  "key43": "42FpJKhDLz8iVbDvGKYAJiP2UuRySdVMtSk3TAvp4eVnEKwdQoQTzKu6UndENBWyRqfNUePjSAVTLiBjMxPP8Evz",
  "key44": "3Lxdvz7M547trJgXA6kbqTy9KQJ3Rg3eF5BSnuTHnpuboDV52amrPj4kpQfwcsT4SmTHezLfNFDSZhFkUhMoykjZ",
  "key45": "2ZzfCeLuhzZGAQZf64ch99iPG2VQ19nzS6XLrrKH4mjUykZUhZLr8eWQQnQ457cPd9u3m8ufahsdrL9jkLZrLyeG",
  "key46": "2zpxnjRJrtwHAPxcJ58M7NqTb73gPtSt6E7RbxjEyu4RcpvokczAEwKtE1LxnVQbsLvA6edh3LUy41dtxZEVrXqM",
  "key47": "4HkWdKyoxNWmuDC42BMEmxXa9fP4Xqn611MudANhG6mPqjh5AeggcdgEq5KARf2Ah1pJzEDRtCFAezpKjD8kFFzF",
  "key48": "3Q97LSzACefbZu1Tym43S2bkXcSZnDV8FzDSx1aiGyz7M7yu6VG1hgstW6VangmDPzg4noSM8oeMavx3Vs8ygUXp",
  "key49": "5ZN1EhJ9ZW9gQPPM3Wfpta1ruzzDidM2exUUgdmb3q4oJRixY9cR7NziGftnmqYBr6s4gHAD62q2q57tfNkeMGww"
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
