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
    "5BQv81mHGQGAuK8yknWdGwvZDXsr7PDypnWZeAacKeMGoPaasMvGE2n3gVYfGEPB1AvKhV1RLttcTVcLaQkSV8KW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSMdJVWLdX7gjV68bSgHJZNqbPU1etvhj8RG7TGbBHnJqXZy553UnkcbriiuaTwtaiwUPscXn3AaY8n7v369ovQ",
  "key1": "42eGnV4njozhquK9g3HNzq8jaoREuBXA1QcFpzY46WHz9J3QinVk7tmRoHen2ajJ4HhFoaXpKR2aoG8vJk7ZiA2N",
  "key2": "5rdYmCcZwqu5kvyjJukYLRw8szeNkjYHP3DzngtYXXuwGo6hWy2FKTYEhDb8zwHXrQPWapHhddyzUAfdFNwujuWD",
  "key3": "5HY1mP16o4Hbo9PZzipMEY2GCKMy2UxPhGQHWA5heuRiY3j9xohDCKj3Ud3JMnuuaTEBFv2WmnXDAiNW3NbBX4jb",
  "key4": "59a2R4L7Fs1Pvc8hymAbG61fffHhbYDh58eSC87JCsyM4JNtB3zNgXF5f7R3B7PM3e3eEQVgxyWnjdYA2KY2z9oQ",
  "key5": "54KG2qrAFPv7vGhup8VSpojLJXv6UdtTSQi1G4LEeTNk5LE3uc7JEuhou5ZR4PJHXSGXZykjrvQNjah9e8bgqm3s",
  "key6": "4yqVU4goUyZcfNbKxh4tA41FHDo6kgKCEBtFaqY7oZ4ULeXaBfwzPhcQq4vXMNtwvWNdQ4MBMyGWsmTAVikNYFW",
  "key7": "3no4Hz4rhW7b7LdARjmLQaXbPa9SvFqAnRxmtwMWwpDzkH8uZgPbaEc5DeEQact9yFJmVuvZoHMTNGKZw6C5vnEG",
  "key8": "62xCzpbP8caYv5nD8JFyWWGar41WkeFFsLwxjo5DVK3JcXPaoekNbETsRfCnbrvj6w3cvMfYrHsLiYdYrB2tuUtd",
  "key9": "5uaxbj5kY32LSDAZtyqtR2Xh11pBwpRSr6XdfSzZF36ZRQHUyLAHJL9FFLCPqej8CL1rMZQm3EEgTK6MZwUyhAME",
  "key10": "2QY46h3qdcuuCsadRpmtixt4mgoWdY31CKFvA7xekCfse8RizsUg3CKuR4zCBopCZdgo2ZdibziGiJYWZpGWPqJF",
  "key11": "5EM76HqhJ9ZLRasK4jJWw9KbuJ91d5oM6kgiLw72BNA8ob9qYZYUtZXkUeAK1Khan6JKEocF541zq2zmXgov8g2k",
  "key12": "EyiwV9biX1Zzk4zbR1588MTi32nJpCUQsWk8rV8Ex4nAc6JDvneKR2ZxhhyriF76fnaxHwu8j1N3vLAWPJ5pmS9",
  "key13": "5EAkHfsyFGqMZaQXQBF1bcNQX3crgRMsGkfmJVsqQuYy2ArV3zYrxmwLeiRVag2KMKYYq8R4kxDHGGhCEYHdjkai",
  "key14": "5UyVZQa6ydUJF9DPoFQnFXDtxwoh2PJSGF9hSgS3ro1sKFLGRJkLszxJ6MZoWWPhCRnn8aCVFW5tzgPMNMuV9pwg",
  "key15": "3f21VeGFCFZh52UVto5DbeGmojeGNpZ77AhRvSFYYR9PeVvEJTZN9HRjskBa1P6NLz1MdincVAwdQ1Mgha78Txw4",
  "key16": "sDdDuhw7d3hjGNbV5vyrZZPuwezAsRJfSmvEQkpTJ8Eu39ZkcFeZSqSPPLVy1HhX5qfaFr3M66VGDoRCFJXZ5vJ",
  "key17": "2Uu8ALpFgBVniKgTdst7PB5pjCjW4jXdMkuexN2snZV6zp3XCDyzTbvd53swgJa2tYe55UYcnUr5M7fWjkuZ8sTS",
  "key18": "3qeC5mqZ1oytURvTrkihNpo6DCWuqaLxt2xK3XAkAY2gCPjsj9qqwCWi59KdM2yesBgMicu78KnChUBEACKnA2nq",
  "key19": "3VbNthtvzKfz8Ujy4VKkfaew7H5WmSc9ToU77K18Druwv5FkMHy3VRvyYKm8wqSix1XrRsUgiCKCan6PXLZZEBNr",
  "key20": "3Wj2AELwPDwA2FFzfzR69KxHPJW7N3cnUWhrPLtBZRUogrkE5TwtEACv6WrBNsWYqUx4Ytsy7rnbWWTXkqBN4oET",
  "key21": "4Si68vU75cH4yBVuoJGNv6STxyqEkDiHB2HAvqsv11Ac24pt3TERoxq9iRw37o5CwS7xrmPbL7pzEAsciNDT17dY",
  "key22": "38v75zPBnSo6r6DbPfc3EY1AUPSdgC2RykHCDvoeC8ZrTyWdqNQSDbxutcbpGwVLXqQGqCRR4ndpZ4e1iehEj1ax",
  "key23": "4dsxsdHgpfctp8dYQUxDjdqL54iqNKHeUoEXzQ1Wu1w2G8ukGfUmwepVa69TThqE3KjToj2Rico5yXtkhE6uQXZo",
  "key24": "29pMFhuAgK9VwXmUemjcjE9uiGXmobsWC1mHGWD2nAsqpgczqiWeDpKdMjuKVWQekJmYSHJQpjUjvXbjG4kZfsDc",
  "key25": "h7FdPhhmzdxEL1Ar4JfwvJYKQSxGe4ShcnmcypE4ZeyKkKTH72Q33fSM9Tsnywojjda3bTe93bnHhcad5rxKpQS",
  "key26": "3iXCdTnm5qaTPsYiS5q6sCGTu5AgX2CLNUa17ETmNeV8dTaj8FwdL7ng8M3ntd6T8ZocubCiKtsPKtDLrjTqnmeB",
  "key27": "aoJ9VuKqdSSbytbQxhkscbXxT78EkVS32nPJwbkcKGRgNPUn1sTbPWzL4qwPJrsx4AEpF6gNbCQ3LbqBUPtHg2g",
  "key28": "5wSYEjsxzbYsp3MFAsa64XcpxjLAotQce4nWz7LqDWSkt6y3MieWHbDqEyz7HYHYFCK21BNDARMNsBo3j4vJZWvd",
  "key29": "5KE3mQg8ZYJcvzPebgT7XnHZ42sF7gtiNJ4tpdJntqCWGA9tpyJcea8KB66daAGQGCxqsX3KjSDmK1M7XWuPV9Ri",
  "key30": "48Y6rnEHDj6RHKGFfFjWrN2C7b7P2HymMGHweeZdeNWYQ2h5h8HjmtpQmwS2mceLu4vc7NGm3WGx6BWZTyRGsSc5",
  "key31": "3WJCaXvnPx96yyRmqGSo8uairqJkSs9P19Y1zL6LC976CA6ys6DrpPJGnKasbhJi7ffDzKTNyALmSvHE7EHMBv5a",
  "key32": "294fKV6Y4wZ8e6V1wFFHQSVZWHkGRz6eaXF2z1bqQ3r2bCotPpwkuJ5xveTuDMfapZ9MWd3qW6knKKX7pH6z861n",
  "key33": "46gVP7AxquGLsq1fFzbsSZ1h9264hj6U6qGBXRUK4aTmkxcaDf7haMzZMMFMgnhzDmUKpgS2EXUhWzgonrvmuak",
  "key34": "4tMw4QGRjpm4pUmTRnxqyU3GPNNC55Eo1qksuzgxBup51Az9F1tBFX8pNzT2V944EkDsw3QX5FDqrjKXkN4cLWkq",
  "key35": "3VmDiDgwkmuKxjrh2mcceZJthXx9rRWhUCNg3zXo6H3sYF8ufd4XP2vyjmG18YJa4TvE8awAi21MNNYUADET5wHc",
  "key36": "2KbnbfsLrmsmWGAhnFqYfJ9Hz3SDTx7Y6fe563izFn4JiWy9dvMtFqTgvZYynRqXFHx3PFg2myFDu2uCv8CUJ9ZD",
  "key37": "DUkPfjkMT3tqYV6fpw69bpdSJ9aMU4e7P7WGUGZFtUV4hpQhr7xWmsCeWxQxBiGH5kVxRq33GACcof2tfRXcEn3",
  "key38": "3NHbBqzc4B5xjF7Nhrf5qVMqA8Jg8kVms1gvHVWypjbeRx3bN1RkGfVNLzTFoJrmNgDWeZnWsH7ZD6azqnvLHrKz",
  "key39": "5uhGVrPxqsyanzhNEkzrK5yYxaeTo9QrzRDdtvni9sshRhu4TJ7XS9yjCR1y2EzwMvwJ8Tzz9STZ4Nx8sKKBKj25",
  "key40": "3YaF53UtCgRQaHtM6eGPgRk1h7hxPMWwJ1QsaGxgDgcE8LFL4ThTbzh54vnRh3v77q4hJ4c3RJMdmKEKm1n2yB2J",
  "key41": "nb477y9FasW3M1bAA3RF2RadLm3BhY394MDZY4xYAamBu2Q5TYmbbQjaTtCkor2aHBCu5ypk77ocWW9XmaFnJe3",
  "key42": "5KDePD8DAhZYEMtBvYyeGLtKc6cmQbK49R8P9YbuVxMFUcA6iCoApQWNKB7ZEPF1R6DsgfJQfiAZ6xbkYysLivZD",
  "key43": "3focGUdbptjJcW3TnmoehFg4m7jziywkLxXaUYb69eJvHEXRa3X3vGT6oPHV3pbT3sCaUguFE8VhHVQfvJvLPbGe"
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
