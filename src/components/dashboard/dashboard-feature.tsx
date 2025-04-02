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
    "2WALg7YG4ykqxZBvUsrhfotkJdQif8Lroi7AsLt72UnG61ZUDyXiiENTK8jvFFW7hqxTom9H55wkET8wPaNVdtZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PpskmZvquoRfJ3M6DbQCkQZr1vwC5JFA7YprBocH8BgUFv5pADDp5RowvXd7sjtpJr2tgWjYTQey6b8wEV3D5sc",
  "key1": "5RwyURw5TmdQHbRQJDFWKGKPT3ZjvfKdSuLMeEaP7maJFVSFDvpHdWBBaffSXmQfotbo74LBj3TVgzAvjHMz6cpS",
  "key2": "5PkesuQnHN8ETYqNotzFziSrwQy2PjSF9YrA61k6QSQm9C7uhHcdUPrUJqkXaz6YCLE7n1A4vk9J7wnx4nGMnoqV",
  "key3": "3jyxVJuYKcuYCtus1b2S6ehwBxFoBfYJFWoL4TvY76fhAkLAF22Enyj3v3AUzpiFg8F9FALNrmFhKMyaK7JjNB52",
  "key4": "3ZXDjaT5igJfMZdG7LauvqKSZ4AZTKevqYVmhU1VfLBXnLaEzUwQYLEjyoxg7m8KCXwTWNEhHLTUxQhuNUDYiYEs",
  "key5": "rSLFLa9J3zL6uCEsF4wcJxVRP6BCCxja6DDGTWMzAVmuztwKYrJHxFx2uzTq9BctTWhRiiGnUXU94dBYo6S5RiY",
  "key6": "3VWKpeM3wsjFing4NCWURjT6U8xewFDHo9fHg6HB7Ctuf6dtyUTGtZUdwTE8QXjt9rUA5ZARXwdRYzA2SiS6Nn99",
  "key7": "Tha7cYAcwYA6GCBXrgY5TCxiDCb45zDtthxtfAx72JJ5VusR1wAZAKNUT7ea2V6SxZcNAm7pMv5oMfwEfWwysUM",
  "key8": "RbA3U2Y8Gt66wsz8ADtpcbSzs1UQf8RYTTjvJV6Y3VjA8zszvzPMU2y8c1V6JtvpH1Ri68eULYbxFSsfjmRRQEJ",
  "key9": "4LiCgyWDZMUfzbFiKChu4kEorvq4YUYhZMediUututj934BcHPYtXeZ4UxrqgznnU7cWCuSFGFoDXYxcaHnyqdt",
  "key10": "3Qi2FesVS8Zk7cyLSBhYf8aK9jdnQ6ceosf1J7u5AYfn3x3LuearDcqii9mbFvyipRvCNG9BqqJiDRm972vYdgPk",
  "key11": "3N3Th5q1ACQrKmdZE58S53VvyD22SxBjDQtfgxFCBSuwKmP5hV41kc5hhw3dXeEvPW3QU2NivnwuMHCgAABiQ4h8",
  "key12": "5jPAkMTYs78ccL6e9nPsPXFmiDSgMH34DZUPQoG9EngwiUxWnXeko44HpHQ3VzQE4mhEYfEb7R289a37mWyxo8Yj",
  "key13": "2GVAwbYUJKHGeZKgjuvPd2eMr9q9CrZJwVLZTx4sU9CxkYjEfatpLQz7HgpR1WwvHSbNxTJHw9BBaaXMSCt5Y73V",
  "key14": "9N9HScWQ3LrzBNZqpMPeRA4VXZfQsMMQFbUvr6kefUNibcEisBUJRBtboqSiT7eLFztgmym1RFKpKCtNgdFJUr2",
  "key15": "RoX57TTcy28yWktAomrvA91yCkjKoe4xs6MPpEM7W3SRY4mG7prp6cgUaGGAaH5YX4qGvx2uSV7bWfBwBmXayJo",
  "key16": "5NAMVEGcjV2oG8BLYACq5hgbp2HN7hvpog7XfXBfqKYNQBeHfbQx6stzVTQmy97tPixYzRs2GbWcN1PcKvtowixr",
  "key17": "4DK3HMwYTbaRnnURRd9CXsDes7AG1YpK6RM5AvB1F8QtEaZjCeWYhj8MQUgLEHhkutJQAvHxJLGuExvDhoGzTU2H",
  "key18": "Fuq8ASj9xpv38ep1NvoUiF72icQ1xiMKtpqszGEDs9wH1VBSRtfqY6uAU9Sxas7pmfUAMWDB1yyxwLxEfJNrLqA",
  "key19": "2kTkXcRE1JK1CVp66hFDkv7qbviaSVHrS1fKR6SqG9ECutHo1qQDMxT9GDXFdN1Lf3goHX6s6DGaSwEcjSAuKBVV",
  "key20": "4yWBviFLmwD9qVZSqNExc9XdrqALcbtaPhhCvJk8UDEEN7qG4rUoLvtZSYnTYtMTHTZbf5SBk7nB2yR552uoxx6N",
  "key21": "3SCekc3wrBfx6kH3BoVToGTYH5tdUjEhzFHTLYavruq3YhTKjEmUYk3WVkGinczSVcRGE5fRu4J8jb48Vh3BjaCn",
  "key22": "2pqb2RXFRchMnyAFywb6JFuHcBPRn52mTSsJqfgLfhRywMJBrcU9HNNZ3YEEzHCXULPskrJ95JA5haD7EjiaxFfJ",
  "key23": "5b2gzkn7qJ8jZr57p54UGdi2GJSCFFam4f9HyLYfUzn2tAVcUPuX6P4315fSGhzYUhehw613HtoY6shKwZ1JoKyX",
  "key24": "33LGzPqkD5W6cufwM7HQPbjAEaWZN23wZrSs1R5HQWL4SA8mStxBk1N5NxvTPX81fEmt2PhLMK2Yh8z8yFPAk9HH",
  "key25": "jJ1S6GLNzhHPnoAniLkWyJMxSdPDzekdxw1iF45SPuh8NsdjHsMkqVotvcP3cNyx2zgfbAe44qKaWJT77o3dfb9",
  "key26": "67GGUkWg8Vn5tF8hD7S62Aah2XhTTdi4DeYAB4napMWwaZz5c8uSxVtUpXkMwiCmQKr2bpogH7aZdExxZmt4SkQH",
  "key27": "56DqFm7jvnSNknAjUUDEM3YA5Ce16FZRnCEiEZP8WVB1hEWsJuHEMSrirGuxGyjEo8EJYmWhnzADyMVHPfhmGRcb",
  "key28": "4md9xfDaJiHLGw1m4RT1e5fWKe3WuBciMjE6p2cBRL3mPRYopW6jFFL3ZA3ivVBMmnzqQg5xSgTrmBPRxs3fq8iB",
  "key29": "3uCyrd3WDxvQRdamnTUPK4r6qw2sqvSBd3QTnumkibvVqiUYo3Z5sKvuuD1ew1aGJCn2hpqndDr5cL11XkSgkXb9",
  "key30": "43vCqWZ3RW7tmsx6NfVBYxgzABa25u9jHGun5rZGrJyo5QnZpAG6P19Bn5SymGPVRJG85H6D6gysLQ4smcMqnEKw",
  "key31": "2Hx7Bmx65RaKfGTfPzxEAoMwVieNVRaHY9RfE6Mk8wMTHrNBQgvbUc3Q9RcXpmcTv2tpodeMVZpnHUwuaKPome7y",
  "key32": "Vdn4ozbBeYYNEtWN4Lje3S9FvNBws8TduBSkgfZNNy5vpG32FRehaXUgkTVuRfPVUwhVZ2qQ5svGG88vtkHUGBY",
  "key33": "aR863MS1cSVAywui7fBKzjGRceBDqmzwk4vN5xnwRUKXMke9yHdtDL5uuEnqdusKBJHqumnJ6j8KZmmYqSg3o36",
  "key34": "SWVoKVBrqSGLTD9kqCWF2Uu89FaP3jLmnvirTEy9c6fjREkYno6cg4Q5jFeMmo4LqsGzgTep3dc1kFjwvksajXu"
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
