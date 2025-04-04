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
    "53FTfjzYDd8PYzpmpdER9QGe1aRF9NfGqcfmY1r8mYiijdHgcAcw5AUVePN31RnXrKKaMszbsMwb5giKASoepnrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tauRzjJwg6Qowmw1Ux1ojjLm9JkzPdYjdR6mmhgLQJ1TH14xdGg8dYn7wr1sYRQmbpSjghBzxEC9onvHDLRKC9d",
  "key1": "4ntfvoXoBgTN1rgb4XhrjC7kCKQ3sw9J1zT9XBDywxjgGTwYopFaEQtXFfJXt8RYre4QePLNb7VPB2uBsjZs3WBt",
  "key2": "2PYedbeTEd31GNjMcik8eutvTMxq76F6dM3Xbu6xE6qLADubKugGwpVwNVdQWw8kisYGaXu6xNtrqEkhhx3uN35v",
  "key3": "sRKZAFo6rovq1npmaGHYwe2TcRdENb4gFjrgZkE3KFbL5x2ktwJC6pFaFWyCQabLaTMsRtv7ZsFVwy5Fi4Ke7gN",
  "key4": "3CarpVi2Kp8Aj3LLXoFrjcjrsy16FW2Myogmmr9CrJ2cz1uqsgXQGA947UYvLiVwRrsKsnyExqxxnNYcbyDVBaSD",
  "key5": "1SNzk8zgJuWywnhHR8xPjmYQaKWtqhYL237yjusPDRTVfaR7gjTSC2yUcJ5PspDtJ5ARvP8vH8fDbpteZTiWF7f",
  "key6": "52UDvXXQuALBFfqJx2YsssnD75tpJ73Rp5o7wfGFWU9KWXpmvx1eAr84QtgwR15hySS6ebtB3qAgpTJ4d43YULwi",
  "key7": "36AstVBjLoLMNX6evkTBJU8kiiswzMMqv67wyrfMvpZoqaf5agj74pR1mVSkTYkF28Sy5beXENL23wBa1H2ErVrR",
  "key8": "jAWYPSsf3PjC8DGGWE1CAsM1zkGX17eB6iWRLYcMQJV8HJbaGaYczAFDFesZ8LXqDrAiyMaoL6Um4BKJ2wx5uti",
  "key9": "dEvp3za2ED6nWtbx9TY5mWeAjKYz27mueDZ37cb8z6Sp9k79bwKf7UkZ5ez35ZGxUuLbaLuuCF7sgmVt7HCsPnu",
  "key10": "5VYjpmDMHk8ibG3MRvCbnL2G26dgHneUYEab5rx3e1rN23b9bksEx7N3w9qA3uLZr5TMzKaurB7QytwhW76GUwW9",
  "key11": "Pu1gHgM6oZtFDuk7rya5AThhJ5s5eiiyBQ68Jr6vTsq8rWS8EWjbrY2vtC7r7zCjp4v8uLvS7UdNY8ECN7Xg2Dj",
  "key12": "3uZbxoCzG67SDkSocHW2SNwmhzN5hhbFz1EjmZKWFmTnzsGZcBjX8TEHV9aiiiRfpaHmeaNbAnoBWhNHc2cYfrLK",
  "key13": "4H6JmWYwwvu6XfM4vPNf2YDaQTjg4ghLJBRq6pSQVejVHGrTHBCKsz2U9YPMRZXydaASnTi79DDTSySztfXuw9Po",
  "key14": "5XKFJLgWb7NsZmtvBpYrrysRRM6shMRiZgpKxZovCyZunv5v4iuSGbaizvmDWX8sN9N9vJxM2Nx8P1LJ3DE4NrF7",
  "key15": "2wuPfRtb6CWcWENEZ8esDQT46vZUauYfyvnA1JHgko8KL8goYXLgdCBig6EtSetFCC95Q7FKZxVeEWXVjPcNqA2Q",
  "key16": "3TrciDcqEcbvk7GFbKfvQXViMgWWmKh85yPH6NKV8a44rf6Qtu5k55qE1FvXD85stHw4fSFADhGPdnKkMpFmPSQc",
  "key17": "qSnonA4H4pcVmMryLCj5voZFe3gqyJxUSwoMLHVG8GNXf3DXJE1SYRi4H7UBepRWvRTmvouFYJ4obAFW3sjd6Qp",
  "key18": "3cEa6LJ3dhU6Dij5kqPhaFEvfBAPHBBEFrz38DFRUkgNW9DbMztbpBffXTVbiSwmgzmQKnwfsKSK5pqwGLdHozhC",
  "key19": "27962pSPz9BvRmWMR4RUjLLd1g7cdJtKoQz2woAyPWBxuqgdPpden4RoVHkAWH8Ni8bQKpazyNg4tF4ppcayEbXe",
  "key20": "94YGXmkmuNWQAo5bBaxmH8D3GVD4EDH7PCaGftbvxdaqSQ7v1UFd54jr1GJ9Gi4DynERoEaroL69UkzPh87F932",
  "key21": "Ab2YhLcSVu2jHzPCBC1NBfE9Famj6xTPsV9qDqKDWwBeKR8YKXdbLFAvWpYr2VzPHfVYRqrME1soPtwaGarv1Xr",
  "key22": "4z2dMiYve7DsHeLNJUjSAyvVG14NWhJ5pjBay7x22TkJj6cpsrnc6d6zyai2v6izr6kzFEPkrra8moZZgmD94a8V",
  "key23": "5XNGBHz8ojuNV1XS5dfDDR2FRM7WoqsXho2kzeFviGLfNyZxvxALv45T1dGSLHqX6CJsCJKgrZaY8cbyvYcrVdbv",
  "key24": "3ZdvM2n5mNXYKSkEhDuHJSSgPruMfheXzmUyS8RcQuvvvSLz45RfXZ7hQHDy3EbwJE1Zc1r9Q79NeWJZMEzw66Tm",
  "key25": "649pGQ43Ja5QNUT1fyxa1jzabEQ95xRKz5J6YfFV1afUs3mytXPpfa7QV29pKcaMhQBSAPFp5vL7vi1Xf3sHbExm",
  "key26": "5TLiKSnKmhhhwDqD23hBiSzRDwVjj3RWFKEdCuPbaQKyvcaGpo6utXwaQmREVgUjiqN7K3uKAoLfrtfMhCZb48GS",
  "key27": "2gHoZPxJKuujhUCzoBHVrXguUFiWrT5s9Akj3euqiQQ7aqnvJr5hRaoYoDNg5kvn8xi1tWmkNYxTJSr9GMSfr4UF",
  "key28": "4eamEk9xh9DJrjnwqo9ujydbNopYLzmGTEfo1cR6xMBjcwbe9EWJHcEGtvHoXNCyyg7s1AfhfD1imnP7jwfRqgjr",
  "key29": "2ySWKVmYqMV1rMpAV39dzBmt3ZbEBztSdyVcR6gbj17ZqKjE7CTiEz1PNiW2tSQDkmTbS6Z2E4PT5WNiwmD2YVNo",
  "key30": "3HPo6Z9MZRPia3HEgdQPSmRhPw2cbUDVAJotw2YxtC43kvk7Lezgrt2ZYCguzxkgmZXqLSzcDwBqmgTyzNCoEZHz",
  "key31": "5YCU3WwubU4RG6HTVwPknbdrb9Zbt7h3axHC5hgRteyf11rEguCPqzhhe4Eg4LosrEikfyZVTioWt3tBNkVCwgtV",
  "key32": "2ybcY5g9XcaLDLjkkWFgRstUH4rJ9zdsExaDvcivsxsyjPGAr8p3MRYzbSkgXpqVHH3gzGp3kU76kGWuGee3M93S",
  "key33": "4L8hU2DRvNerErHv53Ro2JoZhdkBXwExxoj83p4ZDTKu2ScENssuVnZU66bhVeJsCWvCGSrZy7PpPxbaWK6Ckv2w",
  "key34": "bWhrbjnQWeebhocMh5aCaJ3ztaLVwTWz26gjHastupZodJjVomFDGpYTmvfaCU6iPJBonLXiuiMydJBwULJ3PNL",
  "key35": "2jjGYd4ctAeEn4sJ2rtdg2qk3KMW2bZHQ7Q1zHAtzryxthtVQew9VY9rqcfrKsS7WMqZCQRYxJaKZEKcnPRr9PJP",
  "key36": "5r7STDdXH4zMkEH8pxJatZ8DbavrX9jWjCdEiF6xokVwZZAghmdBKyXhozCXAWRnXs2JMkCP71tLaf5B47Zke9td",
  "key37": "356953gXSeCg6c12WhaM8y7XCLnoEV8KiWzptSuF2UziQHjgdnHR4uhRs1ce8dAaCPqd2ug9gVaZdfDqDAMopJK6",
  "key38": "5VN3VCt8iR92t3aiUZQKbzbCLW7DoT9Tg5mDejgWvYVuKt6ULAczHLJiiWEJZUa5HF5evR8jE14v41vktPYc77E8",
  "key39": "4Huf1V85axyWXCC4RcaxmdB38BsRjHu1uG576Lf52U4sDx9P9wjmb3FALWu8yQYCAQxNd4bubLhg4dboJPbJrGs2",
  "key40": "37vctQ4zpT6Z8wGufveeQWYUAxzjMoMu1ncKYfQ73Smn7Kt5QJ8QzAZm1yZ8Cfc35WM1xSRVVjVsJBrZeioYdj4Y",
  "key41": "2Wia87uncjCeXxsUxJfwbPxBvbuNBW3pHfWSv53Aiasn6eeuGvCA7Q4jhjtzHrywUeiyj6VPfRnqhUwoyL6nL8nP",
  "key42": "2t4Ys1eZerexWptCiXgc4vwBNXHuWKbZWyU33j4DfM4XtbRSaofhAucaG3a6CGQWKHpYrCPo5UVyh6TVEwmCSLwD",
  "key43": "5oooTs2CDJjPskFwUf2KeSxMq9yNKXmPWftBwZRiMa1GU3Rrmj5CfkBcMH3Z6BcArbt4MMyTNtshMn6JcSPu3guR",
  "key44": "4TdFLXzVfnSSdnd9vVsvcK3YFmpTzmzjE4D25WZccEmL2oLwYNizyf8nxP3syxqtemqiidwtCrNcu59c3VZhoUgR",
  "key45": "5HrV1nDW2gVjZZdon3nqwHfcaGqgJSMeDuoxTCJrxuKmUvb2Xf98EAsLtt8A13Uocq77hALy9JwU1FtFEByPjs6g",
  "key46": "4aUyG7jgCUtvWyPAJkCoAUsyxhSivq9isuEG37bs4Tgz3csKZ8mMrEeeyoyMzQ37CxMskEmXznYVbRjDJGASGRuB"
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
