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
    "pay3APgbNrsAxoeFeduT1winwFvHjz8cEAojJ37yyTScMem9ehFCQkJUmJiudjF1MLkgnxVbuMMvHb9yx8R52Nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YH1EnqR9MjLX8wtNT55ZT5LJPkb5UrTQoh2PKc1eF8fxn89HqsPAhGhNmDu44Dtte5G4oRpfFLQJusUzL1PGytD",
  "key1": "4pAAKvZJB9tME9cGaHnXv81kfzCS1iDPdq9sGPHZF1EgJ7nTKocjrL1ktVN6nMnT7oUYYMXQZHfniGA5AcQY37oT",
  "key2": "5Ao5hXD5rvYjmPmr12UhnVyM7oFj5szHET7RZKzCrQzfeAxD8uevz1po4tVQUqx9DJaGQNRwXSDhNSk6vdspEh8F",
  "key3": "2Uiug8HU9wJzftomeQgHz9e1xCpTVXCV1sr5KbZPUTFZviENKFazNgL2YbWNDKojdWdsTQ2X4sc7yitdoCvNQEcb",
  "key4": "5nqX7Ehp53Qsck52uVHyfw1DH9ikudS5X38RV1MgXkJ3PUkXgG3zc52aL9ryZRDCyL8EnGFtFCW28Nh71sJAVmK",
  "key5": "3sXBhvg8fQi8EWCP1YiQC8vmV4w4xPDEMa69YTa4rpj9s16uYv2j7CUaZmrfHvQLntX3GYFxKpwf2P2df1Se1suG",
  "key6": "2Lg9isxNUdPKf4QQeoLmmSgV6pQA2QgQBWXBCQXY1vEFyKQ85qTkBNmQctuqu3KygjNr9Zy1zuaKRbiNenGnP32T",
  "key7": "49G5UgyGXPXvgSkDhMs6NGQbmoRZXmYY7oQDzwfk7jhuqoNtrq29kJTfG4iw4hmvUTSV7rsoD4xB9YXYCs8WYgwQ",
  "key8": "35CKNuaQD88F8sv1troVgVgRY2AXTSqNQySnAPBT7MYwZZ5ibjPHMzYzRQWxTQdLQLHyEQFdz52rSyQS7YNg8onM",
  "key9": "3yhNrrPWzqXUhV9i7wJZbMStciKM4BfGBw8NsD8KuveNcwFCahZBTRHojeTBygUkgoqeaPv9oEZebn2tMqG4kxNV",
  "key10": "4qaePvRpe3oKoQWKzd3eJRn6HSDhLdMJh6JpkACPhDivnpwCGdNNqK9vKYojvurgCcart36knk8pgYgHGq66Li4v",
  "key11": "5UnnDiKgcfriBDcVRyobDA6ZCu3dBPADrPreq7oRnTKiD4t7yDTwmnMFQsVzKSnmZsyQMV75qc2Xt4TitGCzrFhj",
  "key12": "BU5yD6er5wynxTt1a2sdWiZ3iHWa3sfGmb6hd6T1uGTzMNeYhj2Ba4Bbys6SAEionGmDjRSHZyJr2PrZjUNBEc1",
  "key13": "4EmD8D3s6LEMU4HmxDyQjr3X6mQYehHviUi1q98i21B27WKrGT9US2DDr5AxNFJKCGdw6WASWJmNWmcdVVteuBTL",
  "key14": "5WqaPBaX8XDqf4j72tUjTTqTBYEj7tMb3kQHG6cHXnRGEXuLPHfhksT4zrb5BUpM2mU6mgTGGi9nW3XqksZunkyx",
  "key15": "2kvr8oCexNg9mCzExRfAwpRE2pUrnLiFkf8RQYbVytNXgRjc8L2QtHMLi7CTDs3NZAitcXoWHbTKpSikFqgwQKDd",
  "key16": "2LKh4icmGNAXsK2j1SCy1AJEfrnAtWVTjJi9ZoNA1xXiTqRKvBwgSQdkiTWp4ixaF5putrP5EDBXicTT2pgEHtmZ",
  "key17": "2uEFmWyCZPK6Bf92DnffWCYSyxdqeFPqE4EvHde4FezhuYLYz4ktSZEyb38yvAQtfGryEAGCt597h43vesu8FMow",
  "key18": "4Vxyd8otMvNiEpDP1hRN19FM16L4ZuTi343HiuU9ZXare3T8hmfcnxjhJigRLm2xwo37wsNxGoqn85NrVACje6cG",
  "key19": "RWyMwrZhKy52Awq1CdmPkd5gsxh3SFSXuPZFHftJEE4N3CsciPcyQ38FXfo16NVrc5beViG6ojN7uqwPaEN8j8e",
  "key20": "257ZRVLc3p3KttNVJFQC2bs19AX9mpkd9JXje6YQrSQQm79hH33bSyE5r9tHUkHsJwx8nZFE1nMQbdhYyxhSkifQ",
  "key21": "3pqZEvhBcDrh6xJZCvniUhYGuLLicvYN8V5X5Qj8USKSvSCHkRD5kyB8pmq4SL5kQqDbc1nEswDedG8VDsWXiDsS",
  "key22": "5ec6tz72GDZf9DsoFZkWKeZEcvcJ5uJy5XUHUNBGC3RxUD1pg1Frm4LDwxzstvXfdC8eDkReE7Ci5fwYTg32n8FX",
  "key23": "AL89QZoaaDQt4tmgVyFR9SLiku1a1maLN1GRf7Ja4z38sapdRkD58ggxxfoU6Z9YNSuKpSDUmYrr2bVhwXiVuaW",
  "key24": "2Gu77VQ8dP5M7HaaTLJqCMuo65tCkdNrzqMdA8tHUbvZcYfgyJFsa4rjyDzhhDR28xi2BBaL5uBW7Q3TDtXUqAj",
  "key25": "4Dhvc4qJKbgA3zVfbPFcMq6zGPzgfgMzUhZ7LsuMPWPWtV9Euo6gxdCK85aqJSbkhvD65GP2U1TV38YsQag7HkX8",
  "key26": "2motX6CqAeuPKf6wD5wBm47rtPnqDC1bqeC5K7vKCdQUmpyiDejZSGKPfrwoeALp5x1TV1CE2uCyAz6i974B4QPC",
  "key27": "5bXLq65VckUfvkXfYKBZLmZcNJ7D2thB4r7tnFgiLDSopmercN4LWHjqErCzEVwFVMcKu2omHgQMg6SMWAfGREUD",
  "key28": "4Mc5mgYGWecYrCp6zLMF3D6L5HUruh1H9ieXHntfSetAxUserF8zsABRQYAMGY7upyQGHM4gVW9QcFoQauSVVVFR",
  "key29": "y1KGr3Xz4a5yvyd1JsGiSQ9iBft85T9WNFG8egcbYWr7RsmUsJ5qK2hUGLhTFnFjVcxXvoeLax8Hdii2w8VNerj",
  "key30": "2cSbEvvut7R1WfmCYREG61E2yZcwBoiVPELeAmxRLT4aB1RHJgWjpvPJkJBs9voyWRB2U4j8nBv9YsCxBg3L5WSm",
  "key31": "5JFDVoBmzS856NN7FrtGqCvSrPGfyUQnDyASZf9s1KrvnK2DK5yepiHz6tR5eDyZESFrWqwA9Gs6BzyXtwH2xWHw",
  "key32": "3a9qLTFmQH9vy1EBSZRUT3ytj4MvnidNovgn5ZEtJ4ycaVbaeZMWFrKJmSnWXfaS7YQT1jp92MhpNPwoAfzeySbx",
  "key33": "4rC8pBMZ8RaX5T9qWC8e8U4QuWMcsNow1YD2wJ9Mw2Hg6nH7R8EQAT5HpmW2ARdAEHk87R7vUHMS5QqztBej5tiR",
  "key34": "399CxwHQovG2WoGiMPy3m3LDUBtQ6WTfczSVXhzEbNZUVAygWBgQhxFohwsUwxjMF6Gc495NA15kbrdVgVdiouLC",
  "key35": "Tp2fb2zMyjUwqgebTGq13CKi3wWeftCsKbsUk1tJnKzZrF9JAL9mcYAp6aAD5j8CBgVXEsVwxt4bTDxB76scEVg",
  "key36": "5xYQvNt6mg7hWjMCqZALBTeVZu9awVUBF2Cw4HbJT4Ep5dyi4Finqc64L5KoEVj6uV8hT8vahkk8eTYZBvX6wkho",
  "key37": "v3pF999UjDSQj7gLygjnfsphULeWuMCVo4w1R9aXfd3n1uHKMWoD9Q1Dyb3ccqgcakTdtV5b9VisX47xLnpw5XN",
  "key38": "J4dTh92zWoa9E9jDdeHu7FmtYSBeKqTGBq9t7K6moc1KJy3tXhrFwDponyfb4nTWoJPxbnWqjRWhZQYNPHn8V51",
  "key39": "27bd7b2MseodusowjfFjZ4DDFbse3ui2RxXDDn47qW2Qn658ATQGK4su6arepXdBbGAR2NqHCmbtEVRQLb2nSyvN",
  "key40": "5U7wZHGaBam9Mrzq423kYFczrPHniEzNAaeu1wqQ2yiUmZc3rCuyB1yqzX5vN7JhyejJgD9yWjXLHWebnG9q2uMg",
  "key41": "2LBg6zYj8SEv6QEkVGBmrjeEamUdbkgAiJ9x6hGgzF2biGNkQrccXr7YvcB8Fxo4hadvDagM7Egi3aM47apYwQ6D",
  "key42": "66uJZZfQCZmQ5bxu6gAcnkRwKRZeVWqABgoiyLM9J3ZYeHKssPAvyt6KStmbxmCSt6TRVWGNR7BjqHiEnnjuL8hb",
  "key43": "2i6jqBvSYD3TcvLFicu1CnztZQkE6QaEnAsYtnHk2qfCZX4MnGe2FsJ4osuTWdLqXxGsQGkzJDewgK5ewDESoo9f",
  "key44": "3NfEbVPEU7Fjse64sGgJ1txqNYTHG9i3jZcRt8f3NjXjve2TNpAQ5z7Z4HDefCuxKTja6QVyM2cu1QaAU4ysFtFr",
  "key45": "5wngCiRyQ9RcDTksND7MYP4um7vDy6mFzsgDqhw7EM1iWKxRotY9vzEjm2gQbtnaJdRzsGr73uwR8kt7kaEJJowR",
  "key46": "2cHhj8KebK8BcRuG3EnYXvHabqAzLbZjqiUBbP8HudauQd8vDc9oecVZKW1qgcNFKArAD5bKqpEMZKCENshRGvRz"
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
