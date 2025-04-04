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
    "Xp5fmPkmcNmUgmjmNomPv41HseTWaRs94ybo9srnRXH9LirnVAkLcaouoZfK9x4QUAVQisAjV4c7q1GZX2qW1Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1od1qQp214yYEP1259wNeTtwRnjASnEqAt5XpU7gRsVXdoYrEkan5aCjPnA8mg3bmWsNtS6haYaS7TgmcMB8Ksb",
  "key1": "521bKe2BnaZgREq2yyBV9jhxew1ZT7kyfgf4V7icfBWdzC2rmHiun6J6WGccv2crj4wpsNezYvNosB5QoUta7pUG",
  "key2": "1mD1QMi23XRsdgNGAR4FQGmjaGZWLF8sV9xUvn5z3uPhmhYiZorihePcxXgMdtaBWPW6K3vTovMJHoE2nfExKmw",
  "key3": "2ohuv3FPbqFpeiVRCamqwD7UNNP95yctmS6CPJzhw1ceYPCWThVdVLt1akNGz1imewb97Wmd2SZzseqL4wXtbLUo",
  "key4": "4BLABEqSsG7beDHejnXUtkUyhqdkkSEAEJRwGL3rW59n3zJTz8ifUMqNqEB2dWTuDtNquNki4EK4BQ5Dw23AWY5r",
  "key5": "3TC4vDpNY4xJox55yYgL8c35n9X7hZUm1E2oZcNBv761Xd6roQjtboHXscUFeWJJLPPXsp9d1gThet2PuSqPNoVe",
  "key6": "1kGEmYk63gPoCiVefyoCcCScc9FBW2ibdJ9Et9yfSkY4BuvYjYyeNhSdKx8G68Ez9MRVLSaESFGcokHniAvFu7e",
  "key7": "3E6Luffk2Lcu1UxqoZGA94dsxRS9tsRjkrxadTM92zsuF14W7H6hCnAknTxtarzPxXMfpT79HTVSgv75Acznbe7y",
  "key8": "4n2wBVb17vrY6bgNZN4UY7CooEpDakfYERdCrHgEGAz46cQF5iZf85HPmieyaEVtUesd69c9FQ2EvcoZM6D2KNes",
  "key9": "4bSsicC6T4PnvxiaFvTgUT2ZUgCskkf8obyaHZk1YhoKqDj3CvAVTY1qCBjg8xrwGsf6fBmL5NrjrD5wCy77rLEX",
  "key10": "GAfWn4Rgmb1j5QPpWugxgxTbf2PDNVspTFxQLBx7aAi4bi4ttGADKayfgMog2Ly1dLejpxhpNzyNpwUhfszhF8c",
  "key11": "VucjYUDioGdb977TzRanNwf3GtZMqhL8wu4VBLAyKpjU5HFFoSxa1GB6UgNzQG16HSFAbtqtxz2coyDkofkR66F",
  "key12": "2QKZfKET1uPeQdXAhVVNVFRW6U49QV83eDVXzH1NncdkvW4cwRm8KeXcCRf6wM6b8QXSgsunSkabGZ7cvCqBc3cM",
  "key13": "25Q9b4jnD49HjqerfYaLFhUQLX3JrXEaKbidnzP71gVbnFMzrxdSw7y7i17qKG71C8xwx4EeAmbTwhv1RCDBKd3W",
  "key14": "63AA49DtH122UX6XEv1WZZP9874RzBEi2HwqdzwYR5zgB1tqERZ6Sa8tJhzc8y6gni49JqEVTyonA7Yu6oe5C6Ee",
  "key15": "2NkN4T1WevEK8XjBVD5bGbuSBwhoZgkPiShMzQ1WKjvsiNe2mZnryMF54Tsc8WC1viJkrftDJ27TQdUvz54YVwqE",
  "key16": "5cx6av9ETPFSSh2fbbgiF8uadA4CrLiUVgzmvLVRHE98i43F9qVKY1RWz2KaVTn9nUqhBW4FgxV5xLqYrM2AZ9Ta",
  "key17": "569LFcVerEfXGiuR5fyTgmzdKyWt41nGmpatyJdS563HBvvJyV2ddT9DAYtjjRREQ4676UYo3oqn8rsh8AkwJrkA",
  "key18": "5cXcGV7Xoe8pZUgLw1MW9ct3y4Rug2XtbMogk5A9y6eve55xpzL3iG87GA2xBRbyabXvwQWNs34jk8ZXLtmp5UMJ",
  "key19": "dLzPvDV5UEZYZBEYTNG8iCnZEpdmi83Ah8LMq1RPpnfeWLDYGm5ipFxnhFv44QgBoUg5ndQA3a2UJrG1fDH54g2",
  "key20": "G9hbFnby7oQCGLGthSUCvA13XzxA5WmBS5ya2RMLZaRgfp4WLe5mMybWy5YGNgaZKT9ZC5Cbyok89ZhvspP7gtg",
  "key21": "iUuTYTXNRy1gihZe1FkMy2vC4MtRsMoB7m28WmEHzJTuUJ2TgjQcZ7Ax98pKuTU76y6MhqtHdo6siXsjWCdq45b",
  "key22": "5fcgcBByyrAdVTm3cU1P5y9EAk78tEapUKQamBDM2iYxzsXSs95XfBKLQu9FrQVzy6keXFGdoYDJSKypAcWEKoEP",
  "key23": "4AexGNUf2GWMX4KhBinvro6ZRWMQTanzrd9YWjiS1aT3Xm1PPXuffUq24cUpHAybCdFT6drWpLbQaQxr16Z3FpFZ",
  "key24": "5mpDa4wbrfaoVhxVP1x7W6wepw9rqitRUX772KokxCu5RLR6mzv5GQ6f4GHd79UtHgDCwK6MjfWyDy3eGVHWajNd",
  "key25": "39JBKrDSDKs2qCVstqKLB2cBxXA5pMVLVsyT2KXoahi6q2cpGW3krruXYz8FjsSXSrw5tTm9yAbFQdhiwXuny2QY",
  "key26": "66W76HyUsJhuZKUZGJd2L2ZL7p95RNzun97iEXEkFvt8M8LJSSVhYavAdakzNfN2ffv1hJX1nKdqbH5osGTB1Zv2",
  "key27": "4PLEGTzU49euyZ1EcV6nPF7TUzMCByKp4df8TUQcwomibK5ZcWzqEgTHw6HCkNokrnHQQQF2DwRyUjsscSjvtguu",
  "key28": "5annPz1EKCMr3Nkb5m1dnyVvRTmzURcFPXrgyjk5dGb3dMUJX6kVVWx7XCvb3uLQbpH3Moj3qunb5Ye9KebXKMKc",
  "key29": "5qLgvPpwEVScDXdtcGvbVMNA7QxkFgeHa7U9XzRLKMH7Yg8SRfqJhMDAaboTJV1hY1JNTFCSHE2bnRVU6KeDyAVv",
  "key30": "3dHYA7HiWX5nb6qzxT7DsCbhrhUMWhuLbTLYk4WPdvpV5CEycMDq8kFqm3nXUj7ZU1bs6xdF5MzDfpb2bpMT7Y2E",
  "key31": "63djno8o18GDtmHLW1gtFQ54PhFB8KKgRBjAKC22agCp7ep1pzSYbsXXr2QNJrnnyGe82thZE39G3UcpTk51zozQ",
  "key32": "5JaEbnWcFXgfhSnFRkAwV3eBcdKcPvkMJXzzBzynbeZc3SqmxT5niDKGNh4q6wN6BhDo9RGGgg1cW1dkvuoPrgLT",
  "key33": "4ompkNgFrUqNLjQzT9yPSPta9TynQezVcK8ouDNqjf11zmshSi5cP6n7gcEWj9fMbVHywsTiakLCYF2tUQEKJhQ5",
  "key34": "5UYbFUaZZcw42wzTTdKQHeZbFYecVH461WKjkjXh3rjk8kh7kfkCeC2UdEczfgDfa97kfGe26ngkhnRgq8NaYogF",
  "key35": "4cnBcMZHKiNiX8LWnwoUPWUoYSMmj5vhAPbDjjzuoTndgGG4gASUqDcPWDpPRVAaLXi1DUPN6iHyFweMG49k3z3W",
  "key36": "2CxygVTYNXLvE1FJVQwSyyBfcpFNLdVUMBHKmLpxXgUNWK2aHXzfBYVzQ5m4FZhvWGsTs54Sx8LrxoxPo8hoPExZ",
  "key37": "5hApJmnGFu2cQ1V7m16v6bw2Ln1Uuqk6yVB2vMSKT6p4vhYR8xpteVq7eLRBUdh4GymDbto2qxtxSTA9diQ9Nuv6",
  "key38": "2RtmGZAsDD1kqF44cp81Fu16oZzP2Rwijaiz64GmySvWcAHeWoE7fHDLLHixGCSqVQiCn1bhmd5SEmqiS7BAdpFu",
  "key39": "3Q3rVMS2spaXiigzdkVcQYk84ZhgNihhM55utVYzA96sqytuaYoMSLoFKqCb986nNnjwNYTwhBju7fY4ZqHF9Ra7",
  "key40": "2PTBiK1e3CYMtRbBxXoMXgDLovW3cB8id2e4fNjTfUknPYK9mEcChcMieKsWeQBU1kydkTPEQycVr2jHivzcm9eP",
  "key41": "rsiBkenpU8MJU9D4qSjeEMHUhK9bMQhzTTace2mkQAXBCT63KsU7pshHiWSPDa5f8zTjEPs7jgv4CvtX6sGkFub",
  "key42": "4vatnokQP8EuiE9Laa8xJ6mC9LytoTbn2iUo3N31uRpoBBAuAv2kEVEoxQYkkhRw6LMMKxd9iqjtqj13e6GWHDWn",
  "key43": "Gpe6DijgZBari6bn65hGpqzGVkXALBSfqrVnsYF6HVJPHZh9kJ8AZsjfCngzmEwhfhG52aPLdtNtNiKaLJDmJyG",
  "key44": "58Wqsr4YXnpSy771bE329mwueDXY1kmv7UV9bUTooi9ZhySToFApLdzyvL9ds8xxyL5BxvNDEFzmxPw4VnrjZsEf",
  "key45": "5EaDh6LhTHC7pEszkyRaf4XzFBmk2LuheeTFChzUkFhUsYMiqW5MfB4VHMZGebuvs1mj1oTs8BUV81bQTePhaige",
  "key46": "4N6RHvBjNEY9Vh4o7pu5JdZW6fzGtCo462bGDKgzqLaM7VULvrVm7M5C7BTmbAQELZfLyDfcvYN61ScKuT5Kpxof"
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
