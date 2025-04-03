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
    "ZLMZpZJNWJ6FKvFvdyuvjDMkj5JF3vMzKh1ukYPb2CMYDojA85qfbJhNjazhUsEn4WYbAVcKy6hPPQdas5dkUsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52PT9BBbv2kEpUXAWPoFmZKJrqkYwJ9h7pbsfJycrM4yTsxK7k8pG1VeN6dkGwiFq3uwCmaVee7Kbdk3V9jhDni9",
  "key1": "4sJJMNVKSecnzemrry1vpESUcfGrmK5D5ogLxJo9tgky7uZskWoX8VUkcCK8Fy7U1S9VQZ7xaF1aiihJCM6dQq4N",
  "key2": "21G7WVUw7kJ4VrQCDF2dnxx2Dmvd2nrYfRaf3gyUtgBSSCYi2uFHjacLqQrwDadnFtGU1kbWQguuQcNq8hda2TC9",
  "key3": "2SLfRLJy4QmHRyBuvHLU3scGSqNqodKKjjSzxosQqhPUb44DpnVCYZ2DoLCPR6yv21NXEdjvSNfXEPXkNWbtNtvE",
  "key4": "6WhBZr39f1nAjmc4NFBkWo5mLNyUWgfGors97fUa8hdJk7gBSWij8jHPAtY7uiSzXXTmynbcNK5wRDBdaeZryyr",
  "key5": "55GECXVjweNRYK1mFRjCZ8wJLS673PJJ9urTRKekFTv2xfBEAiPMmzkgwgsWKE78Ai6dPsrDfKdyjFesDFZmZFaa",
  "key6": "4dP1Ed18gLT9MVFTKdw2vUqDEoebnUHZ1TSxpvhPBG4PDnDeQaLfnWAUm4TkYxbLrbHfuNyarzpW9fjvtaMRCP4p",
  "key7": "5MHJnbmhjbLYcn8r8Qq6tfCewT1kwfv9iPuvSccz5DhZYZGCrH1o7JhhhYDBSJBhVih8hUqVi6eRQTvKTAMuAiVu",
  "key8": "4vbMZfk1fmbTcfX2cTswVHdopub6AyVJ8ysY7aj5noVmgj8qLRnkTUCyfi3iwD9gUGtx3TgJ6xKdqW2QYRZPuQou",
  "key9": "5g6pwt67jjRH69vHcdcn8UbjFrwma9YmHx8EakBcStRfY3Wp6rHzaQGybWWVGk9VewffMdiaB3MxScugYTcdLYad",
  "key10": "5trJvYtsmaqGdTu8X9uwvgtBqaunHPpQyR2M1LqP6VXZrhbotDHrwYLCEzhScxtewiyg8Sz718WjCGvWXpQKgE99",
  "key11": "3KbEVMzgT4kafgrLPA4vmmATnWv7rFr9KvpXQqNtpjCEHnFbxgKL1Wgg9fwrekE1WYpQKrJxzkdBbQf48jDtZXHo",
  "key12": "4jaK7SHgi3VpkkoSE8LQvbAvUwEbxYUVb3UZfEXMbqi4GDuJRnjz9NKq8HaGGgnXZQZtWiob2tp2weKZj2jc1kko",
  "key13": "4E5rYHE2siquD7a6fEWKYp6noBkvKypKJecs4v31SaTtWLZmnkFrY8aGWXfTcyyRybc8gfamkk3TDC83BFGx29Zu",
  "key14": "4MuP1XxKRgm2TNBEBTyNf3RTh8D2MRWJNdKrpmWtNYZC7Cdp7GSwgeEDbpFRGn6ZMdyzujCf2FHc95cg6pEWDqfe",
  "key15": "4Bh5xTuddcexPJK9dje5apm1ZGdQ3arobNwFmFjRyHpcXYDwaNmUUvwUsWUTWrwJH3DPYbyRWkJeSBqmSm5bQHed",
  "key16": "469h4whZnsVmjGKk869HouFL8pvMHRaZDicy3oTh1DvMV45GwJoPfvnesaMqdQdrZWVAAXkGsGpF8kcrs8ch29WU",
  "key17": "YWTQEi3veoJcUKWfaUdLRGDqcaApDqtJBkxi2p8frtrYxyLGJKSydWzaYv98vjos1v7MBjo3nnSjS8Hi5vD2boD",
  "key18": "5L5AYRxifCja6NFyzULSt1YjPJAqzhUs7UZ9kTSZeCguyigWb8V7Ky2eCinGMjB1b8NT3ui7E7rrJZ5XZR52b1E2",
  "key19": "4LzzjdqsXk5wJ5xkxah9nCS3q11yAQNtKupAD4LLhNreo5tUbD2rj2Amnkf8zsCjH1HX9QEzNwY4NLYXjimi9fpQ",
  "key20": "HX4YeropXsyX6a3oTDoyzj3Fyimsmihaan4FLfmw2npqevrzxXzNqfnsoYKWw64SqA1NoR4HNBzEf1AnZi19Vmf",
  "key21": "PqhWAzk1NCSbSHXQ2ZWxMkD21Ecj8t37umtYa1t1iu6vBL52qhSeUBMEtztNznMb2ioms6Fxo1AimKJTpxNhwcq",
  "key22": "2ELU3XkTzYwMqehp57ExCpC5bGf8HmSkJDRWfSetJ27LCV3p8DFwEST2kRf85shdaCvxe3pjRPRPHBwpzpGvepiD",
  "key23": "4BnNemvHEKfa8TfUYMh2UpgcD7GZNXNNJLShC7qTfn2rNZbtJbZceeddhPG2xXAX6fgPqaS4H8mv16GHBmFtGj9m",
  "key24": "4oAAuDA8PLVwo3prs63kAg82bnAjUoAoYDAPm86mRH6csZygDuJ6tHAoYGRtd9kEd3NkMyHjsevMA91MapHdLMrX",
  "key25": "3rS34MhGrWEU84wKuYa7RawxT4MWdSffMJfphSo1hcNB4yQposZiLKf4McRgD6oGroWhZCseYVj85VtLRz63LRpB",
  "key26": "2i52HxTeHjKScYytE6tpML8tatmM3LD7FkZN69dkcUqwppgmmGGwXxF9YmeLJU1v5T2r2PrJKKZVsnBhZnS8QLZq",
  "key27": "49aaGRuZraVEt1JkjnpKqK61awsUNu4vpQJ3SqxvZqcDW57BGkzLuEcGCjWPY9s2yxA6c62Wy3vaDqYJohC9gqoC",
  "key28": "3eVanF1ZayJKvZ6uXU5umriWyKw1kM3KgFMcFjwXoYtHcdV9AsZRjeN1XKbfrWQtifQBtdktc3TzwfcS2pirJPx4",
  "key29": "z4pemrJ1rKrm35UsY1cwy4qHF798rrdPmFziArKY2pDAuekXL5D1amXQfRNaboVkqMS4nUojVkg8pzcaB2qvjwe",
  "key30": "2fjozDAFnmhoWLueYxSDT8PFCcqUrXWT698ci8zifUxT4dd7U6AXkeuK4eW21XBR54EH3wNUUiQKDGcd62SFKdVD",
  "key31": "4SoQz9UyFT1bBizT3MMbFbpRfEdzhDwcAePsRoayAdGLbrsvyjuXNd4QV8unXuWPR22nTh49DCxAgpNoZN4c274k",
  "key32": "4ep4d1nRBgWnYN8xqpy7ozxS8s6qWTnd5CR1g2gdpJYHhTBpQrg4PGDYct9iavnfKsqzPoKbr5R7ESHDFaezs4un",
  "key33": "3GFbkmnTUhMGZdaFEQNq5iqxRKh6NHLu8GrW5ZE1cXGxeXwzHeCjF8at9YgdcAJdDasay698NvwnaHXJ8fgcTAfK",
  "key34": "9PSjpm97HAPLaS2RJ5rQSaz1Fkyz1HSQeLi784ucAmWJLSAQR4yFh9me8DNEKZxW46bZFs1RkSzKbqUjPfkn6tF",
  "key35": "3MbXBmCd6jnPQrSFBKBUw7zBbhADgFZTEQFpHR1TV4X19DpMoFa2WesoGibxiD48y6zCnEBzDAgeGmn1Zg1SEvmP",
  "key36": "5Wk6sKYiPgDBBEmeCKyYfPPsd9fZddoqqbCZ8ZaqTwvdmJjf8xSxHHZGnStcFTGNntGi6ifMQHwSp5rDp1mXwo7E",
  "key37": "2sbTBsTNArzVuKpyrev9PYcgQvNJMEpcbCRhqm96QB4uVjvncpukZiN71bc4XexWdj8q6ZwDWy5XwcnsMFRAd7jW",
  "key38": "4vvbd1P1ounvt9QXTBwLEQrxZ4paeXEaRggauyjdmtC8dxxRzwUWDoVLH5XPXu7FhDpStU7uQHYtJAoj8L4B6tGG",
  "key39": "4rP47dxSDdapkQ7Aq9gCrK2AKY1fHHvr7psf1WET1BcPinmfPMEnaM62rkScn1hw9MtCYcmGV6468eFyQwci3vHr",
  "key40": "3e9mSAdYxo2LriVqb3ML9bTqckUfmtA1D9d6WYGahqhRX82ikXycetmv1yauN89Gartk91Eh4JmH4wRdTuCZDxfY",
  "key41": "3bGN6jyCmgpcgu1fwAyxfRviyCy58znMn8N2QByTVyA1TjtzYqU3uwo3bLh1jRfbLSEAoVpz5PPGXqbrCf1uJfLG",
  "key42": "4YPvptkDNBwiQtQaDpnZY71Gr9eSR9X8mgGevpCaM6CMY63YebVGnfVLKjR4qXiGFUdLqgEiHwSbpna5NFrgjEqP"
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
