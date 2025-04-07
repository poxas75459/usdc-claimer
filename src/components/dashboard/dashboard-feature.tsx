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
    "5ww6S8wu7bVtJakEWM6jZYHLv8RyN93UTrL3Aas37pDW4hFoVBWze6w3KhbGXAKut924XrWWYcRna9yQUgjyrzXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AaxFDVYTyfmZrUBu4HFLcXQzwNuvkWvGfvb38SUkU2LRQypeSRqBvh1SCJ8i7cGTZsmyZjNHZEN5nwFVMevCwnJ",
  "key1": "4Ay1oFKyjNmGVCaBTF6g1aye6kE2tCHUhX2yNiDtF9hjNHeUpAtYJwPbVUwbWDh41Y2JBK57irvoBgVFVJDUke9Y",
  "key2": "65GHd3k7ZvDp44RjkjDc1NZEaaGGfMpGrFf2aoRTioyZKtGSMKPbLHZXMxKvE4AKzzaMaonTG7vwzxBJz3QMW7oE",
  "key3": "5CqTeMYT7MsJnLB3thU1hpaYfaN7Kgw18jr83Ey7QCR3tWKuU2hZpMYKJJcP8RGig8unsRGCpiTErEwps6KYCnKo",
  "key4": "2UM8L38CrZLqJPDjM1Zw6UHb7ewZ7FxNoDrRQJfxXzaQzxMfHHJH2uBc1DQJKWP9FaADPw4cPexNTMYs1Vo5M7tD",
  "key5": "2rYW3kMiUxzid8pibbNNcuecDRqu5tJyD2GsHxJ3exVavcntJP3HpwXhs5uR6DFfCWr9MwRKW2QCYcqUyPpw3yfp",
  "key6": "5ndu6GhNGCV7qp8tzB2SHfmmv3Q8eqLTbGqvD78YbhrTuYYUyLAx7tCrcLD6c5omv5hrZNyNYam285xLMkEVyAnw",
  "key7": "3r5v7AV5Lq1JzqQ34dZV9kgspnHUWAooumXfUR53crbL8irdFhn7UqgqV1bYGneG5e7zZ6e4VDHscq7pLHY5n3ra",
  "key8": "4F8WrYjGgkygE8vM63kgKHYwgVCfaiKX7gRCpkUFCZTpweZyuoHEvE7i2kyp4Vr7rJqDtcutxbfemE7pGprMUjAX",
  "key9": "wrb1gVxhM7YJRouHdTgH8iRtqRjW6p3u6HZdCuvrvExET7fy9dgGSmoKdbCHTJEDG2obKuEmsgCT7WVMcSFoZjS",
  "key10": "EFZs5sXrhS5HJpmzvypsByvrQ3j8u32hmtjKF4XZAzHbLPm8tAfp55hF3nsaPgaxZHH3e9Xfrjc6mLxYohpWkR8",
  "key11": "5b2hdQbQtr1CAzYWwQZxvBoAeAwFkLQQKi4WgwcGCEQodoazX3ipQgsYzvzCMxEavvsQHQdjfUf4b6poPeFmhfCy",
  "key12": "3fkPZQaktNVfr9zc17Q6AVxhno5tBtwMAsA684tB9JMYr683pHvSz2NiTHsBD4Je3ezBxXpvLoaV22Bq1J4LVCjP",
  "key13": "46Miid7DJHzwdLQw7cUB7SWavCdmFS5KTkbWRGnmBnBGpQg6WVhi9fM37nXsSP48BHDq1LCMKKSzfda6dH3JtZgu",
  "key14": "KamqU3kGEJKPqc1BejHTQ7PSXkaQC2gubPw7cc7hcN6hEzPUSCePV7CjgzSPAQHfBZq4Q9rbptXW6m8Cx2NRwdd",
  "key15": "3693wrBWnxVTpr6NB3myDYZKAQtGDLSM88PCPxKb9f9XUV7UPE79uoMLbpBspL1BfR6MZGRdr75ytEf7ra8Gxpec",
  "key16": "31XfVzQjXTUqxTSaATz83H3VLLa1gm2mpmDBdwmC6r1nD1k1jVBE5wrtEr7J1WQPNm3dfgpziykM8dJsH6PaB68S",
  "key17": "2jVixcWJvTJSpwLeDygLnzf8rf2yQiPEEnVVMi3mXEyoFmCSdnKFvvG13JBDZKqFwufaZymsjjdEcevCmWQ4Ao7N",
  "key18": "2XmuFfUgMKgbZw1viMACXLXe1qRA4eEkcgcUEfUJjgGiRnZfFrf7GmrRqRPphUGUusj4iyx7WFYRXxMd6wzDfqQM",
  "key19": "5dPVHQ9JeU8jhwMU4BhqEasodg5Jgo9uN32WZras8aELvD9Ay6JEKHaBSEc9526Tuw3HW3wGUyReYH2s6QpdpUB3",
  "key20": "2jR816QCS9NZKMZYRvdb4QiEXKeWgcwnVkKTYVAa6Ac9MBvmSVo3EkjGVcasy88cEzb3yT6JuNBJqmYzsfw1KhSZ",
  "key21": "31m49BZnAZJFQT9QSaU6c3eK4mrjdYVTULSmt2Gv1SoLWLQsUBA6ShQE1FEmbo6Y1dz1VwdCFHV5Nhpq1iZXaSSg",
  "key22": "3ZKy94vNKxLcfENMt5N2VRmnF9FbgkkDEz8viqmfo89o9xsm6Lv4dgfHaLWK4T8wZqxoKmZFJ4ErpetTKRtz3n6g",
  "key23": "28yMBsQVK6u6CNjka1kTDwapjc9WUpSTQ2mKty99gQTpoXCUgfmM4G86J66Q5JXzRwxR5EieF6K5mJnUzxPryodM",
  "key24": "2RuJR6JVwtAfiLVTWXgX3tLderU86tj5KHi4DEUvQzWfcPLaWdBHbxEpgXYm8zMu18fbo65iJqbfadMPEXje7TtZ",
  "key25": "2gdVRrwrGWmj8LY6TqoFVoR1mzmW1bCXNW9uAmfdutpFUUvT4iQLszni3U4PFgH3B1S7U1kHnk8qvkf4sYt7C4jw",
  "key26": "4HrY3ewQHs9tMg7SS79me4FVR1Guj9QSLeFDupsAmGUVEpwbYwhv1xGS6eG46oFBjYY6AxeCjFEsAaCEXBw8CKfF",
  "key27": "2d99w9pKH3J7zedXqFALefnkMsyG17nRtUySyNBMurtVja3b55iRA6YbZdMf6vjFpbahac8sUiXDxEA6MtQiVJhs",
  "key28": "3tSfi5hR1MMRuPL8bMHHZMXPMTVqFKVQpWCDb1eNjr8dJPCsj4TqX1syZtjLbrUv424Qg7YvrAVMXV3QX7gPptqm",
  "key29": "4QAEW2SCihQn7bxYkPm4j5wg45nbFLzaPuj9MwdkRzThFHE7UZDyqR1AkS5kVsGyKV9w5fcfwsp8FtKPks1LgUgV",
  "key30": "j9Xqfq9qgnq7z4N4Ht2ByHPjdeaaSDqkg9e95qik7igYDQfH3Xz3NoH7r4stPUvTGcEeg6dRFnprSYhmeNYtoHz",
  "key31": "LH117CkfD43WBfFYfNFPy469yDMtKk4PuHFWe6aDGeWh2akDeXvBUdgB3Y2BzY6VHuKXs5Vs7hw82E9WmynYF12",
  "key32": "3KkRTZvTXRX1CTqL6GY7wpZMUYM6GVu672ycor3PsM1y32yJ7oDr9J9M22U2vQbhD2BENwjqoDDeX6xehXsZYytj",
  "key33": "2pg6KNfjKxnJuEMoHfmkTUBSzKaCMZ8vqNmCAJZ7tMrqGGy7VbKLKqPYcFHsCeQ7462eV9LRmsXUDTWmzF4Ti8wM",
  "key34": "3jfh3zYBoA4dwUqRLqvLqHHhLARkALgb654bBphFMN3J49P3hEFjfojHhPUsJfJdTKoyiNiHf2F7q6ZyCR2NyzN8",
  "key35": "Qw7qopQsjk6561Uwp346jQi6EaiYMLLg4LzsDgfjCQaBZ4xMdYTxZqaNodYfbKcq5B9WUjk1eubjnyaZa6sPgoJ",
  "key36": "4ibNm88afC6jRLagJ6PbBSE3MJou8Hpoqz1DYHPmTbmPwED5NTTGC424fYSSPvhtjW4QWn6AmwkkNp8hM1ESvAjg",
  "key37": "54LRxruD2Yas471AUh6DE1gSK7ydLASWe9GJJiLALFRUqjQv7suiFvvH8H4S9pScGovmg8hTGEKSwaiXy1tjEDBG",
  "key38": "sCjrfqfWapbyeZ55VyHsdLZ59A4XrdQL8xCoU9sX5CBCztyZqD8nHpMm4ZqGkYy6rg1yR8hndkwCkr4rSLEPt6Z",
  "key39": "EeZuLowDgyYurPEvXmZxi2yQMEvk4hiKRU1HPCR6856xQcSGE5gGRG2VURv1CCyMQYXk9VGuNcSRPQhZy8kMqsM",
  "key40": "6GoNPaNEMZmhu1RXQtPXgKFj7NyyydNP8g1Q3ZQteYKfY4eUpyytswSHwajhdciH58wBASSw8hRwNf6aSxmdEW1",
  "key41": "5JfXpJh9r6cJX8EgYmo4iU6h22JhJX9asws9EAudGH3HyhFxyUDLcYj15x9gBHPuLH3TcvChgQVibbTBj4josK7C",
  "key42": "3E2a4CoSBs4WTAnbpcZBzzSaFrkGyJgKVYpPtR6XPCmk4cnMatscvippzY75SdZXsRWNab2VBaFZJF2VvsSTDRnJ",
  "key43": "3fTV8DefggHY4rDLf5kPww5MyUMbd3fTmG5sqooNSHgeCxPer6nSv468BZ7a3MMktEUvCyZCbKX2jBfr7bf3Mwxy",
  "key44": "N1WzFcUBptaBNvV1hCHMEZfuzsF4sGpS6REr3vFr4Fof23Df2uz4XKR7TL1XpWj52Z9Zxs6ufko1Q8q8nBvoVUM",
  "key45": "3SxLL6r5EqcfPY6roKhF1gpBVeDAvoZpSz6pKceLkwewJNvBbSxzDzTsXRUJEAZusbAWtpaDuidwUWDLUFCfYwMB",
  "key46": "3ZH47XyiMLUScr91ZAFsJKX5g3HGxQmHuU1bxC4hcVoqVjVFjdsjPfqFFS79GwT41uoNpe4FNheDtDDrZ1DRBAWM",
  "key47": "2jrw7rMHWDQ6GwMK6mYH1HQkVS6uXit873rx7uWuFqD7obGmQrkmpTiSyUNwz65HFvQxry91VD2BDn1f25XvBVL9",
  "key48": "4q4vvAgdvQ5SekimBWNbFBXz6FHB8GjyCP3txLff4yPYm4ocnw4p22aZEVkvtXAdBMuZnymBjrgPjLgmWoWPB7gK",
  "key49": "nQBKeUGYkPMjyYd9vubZnzydJUSc2oVyEcEXKVhX3rQ9RxaoJoZUrUxieoQyD9zpXnzrman7BKvkPZToHmGw7X5"
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
