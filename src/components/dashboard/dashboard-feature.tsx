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
    "2GqBmSuuVDu7W3bJyTYDSJbWKtJHTRQFtg36pYBkjCfofHoFn2DEtBqJDJTMmDsrj8ukqdkvEx5cja1e8bKMAX65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JhLNSbct3iPyoDpJFcnAi4gDmpeXSQ7gp4Vn22v4G4mJ2mZDow2SjrnU7S1zpiNbsdLDYXzGPwnHsooHRiGvUBH",
  "key1": "kde1FhEFkjxjBDAwVdQCfQmqcj15tUSWMwPmekFeY1h5FEQxxPk9KtBTodAmthRb2Uh4SEqn5w7sKDdUe2r5XiV",
  "key2": "5htCZfQqjy5jhA9C8DHP4dJh6fLmJirvnzQewMVKp8Acgd58frZnpBS8J7j1ht4jfQvNNsUPHsM6Dfiu5byyrbWB",
  "key3": "43zWDYfAeh2S6D88Uz4Vko2mX5jiujYF7As79KNa3So6csDLpLJGrJBeAyiuUk6wwmNjfieVxZCDRD1r18EPBhtE",
  "key4": "5FRGVJEwparJEyCztjpKy7uJDSmX2G4cZ2d2gTYzzjatmqNysP7R4sgrWShiz3bHhT4SUk7zeZy2gcnVRHAQiJFy",
  "key5": "i1yKyz1ukwYmSvTA54Y8eRpmifEgahFb1SWW8mUc7XEqAvBwJJfhG4uxehEtFU4SEEg575M2rtzggJWh7NS5AUN",
  "key6": "Ajnt38c3r9t1xNPsgLc34xTJfnNhc1bFoqFGH71oCFrX5PXnVNY14k6GJ2k3StTQraarm4UNFXyzUKDr4w85FdP",
  "key7": "3SSW1DDTVgyNERmnGwR5JPjg7BBiq3Rq4MoJb3UjM7HmfQeeWJsfxA9SAH2z66DT59VcrAX7VTuRsEAzEGZsXzX8",
  "key8": "5jYiLVa4ezJ8Ykef11sdtkn4fkRKL2MxzuGHqP8PK6gYfYL93LudgrkjCB8qmoSfwXShRu7qR5UPUR1ZPGJbR91D",
  "key9": "33DYFMZua6wgJNQRLVTLLgwoX6d2akc5Hae49Kkdu2idd7B4ySGS5cwcWwRJEwDTAJsy9GQhAthzusH7SgK4m9Jg",
  "key10": "4CWnFbdJ1Lk9hWdRpUNAi3kB24VwJM62WFa6C3KfCZ8yjJnS1cr9eBac79pkqiANEZKf6xr77ourr9SzHVeCFxWM",
  "key11": "2NZKYRXuRY8yDr7RbE1NUa6A7fM7u9gwL5iAvwumF2wQR7daFJcGJsu1NLztrirLmqQMKVHqUdWjFHmAbmqztRjH",
  "key12": "5ZLqRjFfLY6LFMVzgZmQZgEMrv255Y9iHp3tQbGtcsamcMjUZfcmTBqbCsehbqWWPTkzkSZsBw6K7GoGC9NBFJA2",
  "key13": "5nVa3Np6D4Dv7QLXVPBTkQbLpW8naZQN4dje8dAami9YrUuXo3X8wHZN5M4S6twMcfLVbysjLKjsxGw2sDhUeJrX",
  "key14": "3or5dsE7KHCgPcZrAJh4JbwRQ7wEf7xPsN116yhHSzUr4fWvNkoCtHxbKtBNGdEw6KfBS6YdyRpnqv4vJR1FknM4",
  "key15": "3UhufTxdsRPStKycjAUFiKuxWX4QtAj5KDAGMHQLaHLFqCiNxX7jAK7EAjx7fHPhc69yAvSzvaneg7gYx3djn5xB",
  "key16": "o5P9Hz7MYM1k7T5PjVzspf3NExC6rNtwcKnf2qB68D8wqVN5z2Nv9DPcReaqJpSDxMZRyGSVG2AcibCwsXA5Sgo",
  "key17": "9b1YMLGhYaBjhM3XNVPGESEjQUMPShA5U5K94yWw9RnM7AUATzWn3icdf4MWo3wdRrHnukaX9gamMuuTNfPMmYG",
  "key18": "5PVShQH71KLvyzLqJeAaU32aP5cwKbuv8eZedpAEnFLTidfvD51QZJtD5X3ZYkLcaB2HJTsqLzvJEQXStCHqxk6Y",
  "key19": "4EsrtTv8BrjfNZtywjA6K51xioWnkMUgasgxZUHyp2yzGpfP1MxVupNX3nL6fZvfEqwz7m8RBZjgzX7oiaAEoFk",
  "key20": "4rQaHRhyjRbWPBA2FaZNrcVaFcbB2DkyUPc7CuaedFgRo6N5HXoeyMzaHiUDyxhH26m3cj2rzibqUyzr4f36tDof",
  "key21": "4MBrXoAsQRBteDosRJpvNzmYSHrq1ezPAiCZAKmiBQswyB2TdyRpNpgrPuugeQLiAQvNyw6TyT98VwcWcsDCm4Jn",
  "key22": "2eud6bQUM1Wv1cRoykaf1MCTFXTMQT6VWbBPgaoZwPKHypuLeZ93zwuGwjjdMwG5Y6voDAXWwBxjoYSRafdJMiaK",
  "key23": "5jNhhpmoaxT25tXegBkxf9e5WQKfBLBr562KMiJCBkXQTqsyk49xhtxGyftPokjmbykAYpNJEtzmNH3zTk9MmecJ",
  "key24": "ZRHXjanNazzZAsZL4E4oFoJHkdYLqUj3XfJVdhr5CJVfEX8ZcQzySJ3YDiTgv3G7r2QUFQR5R1CJJpKAV7GR6xn",
  "key25": "3tdRXf8r8UjoRTvDtZdzHRGRQiejWEsdSaoYutzPZiiTEEjA81LcQwNxwX8GPgFqJfQv5qcR49ZgJRP2P6cuPETa",
  "key26": "7XTBwDzTKAVUqWPh8UmvM3mybEDPNxkeiwAdoh54rXQTRcg9XND99CWwzNwekv8JR7vFkxnu4udcnY2QVLu5MFb",
  "key27": "2qKoqhCJ7zTcnfuMGsyhjecuQWA5966MXw2qBNMij3SK9qKsj9TJMS97sSBL1Jm9AqHqKYKpNoD9NYPYGRKRx62n",
  "key28": "agd1DpSWL68N9YZfWHgABC9pHCowndeCaVC3QBxdmvge5AbKorvUU3timUJdHxNC3yhh4mMQYugQ6XduDJBhotN",
  "key29": "4sVuMdneyXd8pooDki2RDbCgCSSTGDRwM1Ah1eGBJyrTTGf83uYEqY6vgWujAUax7jHhjzqfVsHLnyXvqqtTWKUt",
  "key30": "22QEg5Qxi8HANfYCgJ3Qv2byYBg9so1eaSwYfA5Fv5HwXtzTCaMzPHPmqjHBvBSqDawHkEFHgv17qeyiSpMS41RK",
  "key31": "3Pr3kKsWMM6jKGANA3vxr1gWTbmKbJo6JsTRBN92f9SejUmtySKKShunkr3fKW1nEsVc9dP6or61LNfykTmY5Q3r",
  "key32": "Wq5o4jCnAyvizexFuKFsQeg4Y5B9c7zTybq2jT59BsewWFSERJ1X4L86oBoATekaEXgtCTJH8WMraujQpSCUB8D",
  "key33": "4NTVQzGoN66eh4McHdH3CtDPj8Z5MyjifV3zhzH1Hm3hBApjpk8e9rjpUsu2YjBEBeTMbuAtmDwHm86SYdYzFmvz",
  "key34": "4UzqJGWrgVVGJEfPuV8aZcCnzvucJZHSdKfRRMwP8hW7SCWtFPZ2LwxGHEbgRGwnF6mrMZBpFkCvpkp214XdzJPJ",
  "key35": "khM8ue2J1B89P196agcYDcMe8jL9w41mTkvmNhcTGvKsGDyJFP136k8TLcUQzYd5G3tBCXrWqStiGry8QKquWHT",
  "key36": "3buk9HiUYZXRGq4aSsmxmkDJKL9ZoUbpyVmujqUhg5d4kZtMHWFf8HhvDmNHBEQsSGMmJPd4uhZLRJFLiES2wjq4",
  "key37": "24fMcUKegved15VmePCHYKNFkB7RVsDMggfQsbG9PHB7T57KTUkUtPu9dK5LTHsMTg79qSkRRGZVkeES1yBRZuoY",
  "key38": "3TrJGawHx98fVvovu9dkqWpFzx8wmVRoNkxXhrDkf7yRVrh2vVXyaWV6ByMJXJbShsFwD6RSqTomhPEwj5FdaSd4",
  "key39": "3QjEiP54hro7fNdrfDD8TV78oZyqWcg14FbJrFBDDELPnQF2B4hEqk8q9fyCu6sqiK2cvKyQ4epEK5B1rGGFDPXN",
  "key40": "4hiTY3nLA1zaTgwzBqkehNzVS4SQzyqhfgUd82vH7CJcc3QjzofgJdvkNfj7Jtz9cPfvRJdYZbMFJbqcgMwpGhcx"
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
