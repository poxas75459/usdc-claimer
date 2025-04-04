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
    "feMFnY1qBwB1xtqsTg7Ze7Ft6tkFM92BWHftPYwD96AfC3vzWZ2wd88eBd3rX4VndqJ6qktDofNJqqZfY8gmJzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PmbyehGAdT19b66bdJSD6czG8FWnd2hV8WvYB1RFEY8dCZR5spwHLAeUP9cTK9m4yDJskQE4uEcCATLfNxg71p3",
  "key1": "2ZXN6b7yQ5kAW5sh98WEbcUX9cAE1RfyfkCvbdbABEuRSrsntfhddhLRKA8jT218H2cgmUZTngqbJEhdBrL2KBRi",
  "key2": "SwJSYJh5sQcSz92NvFGJMqFidqb1p5WFZ6jSMLYRYHqM5JvqtojHxuM5TRR5ngvLp3seuW2f9FHz8CZJ9cqjAvc",
  "key3": "2xaR5EB1hvLP3Q7dikahmBe8VTfEXdLFfwX3a5ZhbrGg6X4e66KkmtRYEMCkvZJZTDsE2TQnGEkdwYM6scQdTkKG",
  "key4": "3wVYMvqctqVb31Be1cnDVcdf64wUt3HuJLyQTzTHEumWjTsPTsPVehvzPzBStokqEQw9Nise5aDSYZ28z9Q6QU47",
  "key5": "8pdF2KwBurR4ipxnNHwngHL4DgA6v9pw831qiHeUWJGob6XTS1Utqvud6f2wJDY4bcsT2bpCNaUEFrjwtYzpFxz",
  "key6": "oF5gHhVeJjPRwML7TQta4pZ95ttDYmz6YBLYxGGgKcQZHntdxQ7WozLtRaS1yXRertJYoGTtRmKc5E2JbroFuwj",
  "key7": "2FiisoRwX79ZVMPsjo5YVbXSvWvjZPTxoceLjrS99VomT1kDpYH2KMpyT3DkSqVihLXYCWSN3ojCmuwDV9fKErQw",
  "key8": "2Uxf4W1d7ntBNiHtBPzBgTrZaPYkujNB2WHUArqLzUV7HRRMYbq2ABwv7nfLtBh4jSh9Mgp4JixD1ExYPgxSJawJ",
  "key9": "24LmC9pnmz8gewKeGkAWknzCJ9CME5c9QPrVLgZi427Z2HdFSAMep4hpt5iE2ammbZahSMYEtqoqFtX8wqSXszFx",
  "key10": "3dT6r415Yv4N5qNvcQ5MbXNejSeoJgknWEUJZ7VHbuDEXpG9EiBQfvDcqnG5sxT4PQqK3KJ3BZJJMSwyr5mhCLhz",
  "key11": "5iutHzN2F2q8QdKVkCXsZiitXGrRiZtEfVMqFgc2b4P8dyuShiHZUBTt69VwY1aGBEfqViMuhUgiRB7cJXR8v4DQ",
  "key12": "5Nfbx1C73DsAmKMqrWG65dbPziTFUZ1ZsDj6aDA61wEZ6Qkh2krQzn3Rq7oPHvmmiUZxfxpGthnbHLQVXgHNdPmf",
  "key13": "f48P892z9brbSWAJ3GdMxht23sGd4Tk9pW6ynST8iCKnzVUPf98kDoczSJUy7nqwd784JqTtWH83WzkzWztPXtp",
  "key14": "3YEZ8iX7TQvdKTSjyfPex3LKGfHcsjaFEQ16bRek98pTm3doQwq8etDsnNSLqgG1DmWUCfdpEyBxK73EZ4Zt4S9E",
  "key15": "23j5snZUuhBdXoJGW6qaqQXhWxqfqmdkdvf5aSfU811weS6mEbPi4kW7QdixnYZ2RaKdQ3v2W4jrkzWEc1dMa1wq",
  "key16": "eVjCA85TsQHfABuCrfs1DB15ctBGmCMWyVLwpYYXNPdAM9F8VdR9hZbFZiAndVvQoFajLkEGesZQurr8A6Mb2Mc",
  "key17": "DjNntjwgGfde1MGRPq6w7Vk55PiiPN6xCjxyTa6CodfKZ9Pr9CyPjoLc284FChyuoqpno7MgQNRUm8YQs5nmw6M",
  "key18": "4ieHhT9FwXYtuSo6Nzr9rhTR7hsPjmXf5CeGHHk9uG48G8ZoPDAuikHP646R7VdTZ7wm9ijxBky9qZHkmxY34Wwf",
  "key19": "3iJzYRAKq8TBXyHFT7KBnkaCFtknN8kkiVn5FnLcFxL27pFNopH7KBZSUymtnkyd35uidHK7NFkdGxx8zSG2bWwj",
  "key20": "4XZ8mSr9eTUnczRfYR5yR18saZ56XQv3tpoE3YYphXM1hkxwLBMLz3CkS87CX4nBRaurfJ158E72qzG4hiW3aUH6",
  "key21": "fJvuWv3d9YR7zqxCT8xbGMJdhUgjYm41ie8va5FcpdxpvP6STGrbhoqrbTpMK6PXBv1bpKSbnNXfz836e6su6vM",
  "key22": "4VBma4i5dm9VuAr56HXxv7Nyxrx4RGY2fXBVdfqoCX7QV5JpuMPcsJAtGvWAmrMFrZbPKQjSFSpAGiw16F1jVHF1",
  "key23": "3SV2WdBNPyPdy9hTFQsERh8srycr82kyN5manLf4pG5G4a95EX3PSm4kDirHf6utaobuAbwFPz214JBCUfqQ29xA",
  "key24": "2vr38e3xHjrcydmcpJ6WztqDuktVmsAyDsgoMeULWXwRYtxcAYmCMhiMNyYMzV7g7ScNsnb9tehxyzXZUeazz1TB",
  "key25": "3bjGogJrJHqodMHksTyEQpLsN3Yd44oLuoMwXWZpn3Q4Aen6ZgAYUywZyZoqdcbBHYhAc4pY5sRctBgtGbn2SQrt",
  "key26": "vh2911CTQV2rfViaedsMfB7UkcJ6mTmh4SSG58mZqd5aF5rZCy3mDs8c9GX8QWnjwZaPBo7S4kMRzxcveQxGBh9",
  "key27": "4uriYvuvA9Yi97wm74XU7yM77Cj4Tv6P9FKntNaV95TyNGstnocp9v2Uro4ty23DPASrbPfPTFcWJWQzjecKikdm",
  "key28": "5oHCQT6oZeivnATC6AE8dT6EA5U6BAeTnDWFe6g7zbYPSwBeCtH7hoTWysi3XPvnhNuR3Cn3Px5pCgqWS47nPVni",
  "key29": "4xRbAvcX2YeadPyg5S3ggWYs2SZnoVQ5zZDsQwrJhFKRXPbrhimuD75W3LvVZmCzYz3uqySnnQtHKM3XeeZ5Yu5j",
  "key30": "F68UK7xdujB7QCGV4wv1D65yrUcEC9gXRf5sLLe8tEdBaP62qycZkQ29vVBNbSm8hsGUZKoejnaf1CKho2j6FTN",
  "key31": "2ubjafioippyjyJwLEhG6AjbhZpo3cQXRiE3Lhk5GGJ2B6HbnnTbKQ1gtuaRdYbC1YePnDr5EyvbneCE84n9NKrR",
  "key32": "5yz7sLNzVsqXkiXeKuc9BHFj5EDG3VszoXazZkvcnUxeH7JBgCtLpGuA1cDSCnd7uuEppHoAhQhVYP6adxN6sHMU",
  "key33": "5Y5Xj2gN67AaErVEedjeqJMq4GW3RPdvH2GhcmB7soRqQMCvDM4qB1eR5cjj1UiZ6x5Ex9JX7QGp18VJ3Mn8Mm6W",
  "key34": "4fSNisV1S1eQVKHdPSzX3dEJvrKTf7uiU44Qo9f9ZpLdaKggFQa8MQbUaaEBkk1k3urGWG7vXZXuiMtBvmEhz5am",
  "key35": "7dF6TeqWyT2HvYZRcmDdL6wU5nuDzCK59teg657XuZvF2DSMxHftMCv7nVoENmhZCxQ7y5no6e3Z7kX39yeXfcu",
  "key36": "23VjxbjYcsUViUrgpVNFwXXfH2vyUipQ2HhuuRahRDQAqZ7FPLQZf7LJ1JXBbkHCDycPJC9MBoftP5WDmA2v3NhR",
  "key37": "5B4nP8soTwoEHJW4T84Y1iAMzS5SkfphsCr6L5FPbxZpanbzVXxcHAYai3vDYASVQS4VFBR1GwWaX7UvcBkUfnJv",
  "key38": "GnKRZeFRgKdRCUr8R6F9BmGpWjjqbNUZ3yfAiXyzrghHtihj71P7RAxzJzNBHgXv2PPLKd6Gjo6WtNnGoP5rnSt",
  "key39": "4oYqPDCQwEDdXhUtBssEtdduK5tyCT86RrTmaCETs6eaTYx9j8mdSjKRQTE6xJcnW3hTdP5YTDnhR4AAvQyT9XSV",
  "key40": "2TAdausA1LSHspo3U7ZVvHHCQKWVF4HgwvSffcwaSpDqKYsSRp4FVMMCq8Szqt24ozsgSXzqwVq9nHDJVJ6GG8NM",
  "key41": "5rNwEBmsujZbYYbF6vDv2KRuZgdKwHVPtyzcCdfE87hxCp4PScs8g28zyXFxXSnn7WE2MWX2yYxyUbAB18AmCGva",
  "key42": "WouZ9q2ezMPTeTeKypnmujf1ZWn51P8xk1LoLaJTunqHDjFBm4SuFDrFaCgfEghjLSb8qwWVdReMRfhmK2JU1j9",
  "key43": "5mk2Tn6Czaz5TrtGQJhYkWZjCGSd6YBZSoHUJcdJnMEJo9cCbkGxaGopxB2gShjc2c6dNm31bvdQjyDLczjuoA64",
  "key44": "2tpeDN5j3CdPnFyqthW4DD6jX9u7K4SBxB24MiVxzzTaVDqudXDBHtQixSvjBtfzsBp8jy9ywyEaCWRHWkWJTfd7",
  "key45": "4Fx4YdjWc6WDFbVWxzpDXdbyva9ix4xmbspAg4ZFj8G6iMNvy8tuQeyf1UJNnp6qrLtazv4MEEod3PgDSxsGuvVf",
  "key46": "3LG3cKtC2gyrrdS4sEv3TaxQ91y3DSkWnaeFXQEKX4bRVeUWor5MRL3WkQnnb9GUrM2LLgxqUeQMtgDUJvohGtcS",
  "key47": "9Ya2ULSmYKR9zpzgayRQFP9uVCRdC7dADVAXQVQgJ6NWstfr2g3GoNQUVCWX3QVmmfUJe48W373pfQHPzzN68Mu",
  "key48": "2ggyjFHAQjXeueyMtzsuVAcBheoYb1ZSrAuro3Ndb3h8F8tm1Rhg1dPfN6rwpFhxN6PtbihGoXKso5rLJ34Adecv",
  "key49": "4sN7PT1WNaQV4cm57MhyLqMXcgGhQC3pjR2L5Qu3bbCNq9dP5RUL61n1tiG3gmreNzrnQQaGkxPoPARx5CwMoVt"
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
