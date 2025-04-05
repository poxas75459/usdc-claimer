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
    "51JTMXW2GKDi8o7NHuuVnainiPGajXXCQMAyFDvg5u5m4RnYhHeedue5i64rHR7W67VCch4eDphhk9YGxGnMWWQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iRV6cTDP1PNLHeBc1wPu8g5pbVJNN5k4HGaV6eanbn7ApFCyjPakEYP1ddsRUaNpmGsXMFxQydJGn2wohiCqV7S",
  "key1": "FPFw3PsxsTxLTSugicZ9g3ZgbWkqWQT8GsECif4NMRcCgaP7gBDaapo3eu7DNhLDQ8LfPkDMTDsTYh5h14KVHKm",
  "key2": "5Bav29STHB34QbmiFKJYNmKiLiFKpPFGUjtD5nR71RpYMnVFYgs8UAZLQTM7bfLddDduZD3Su5n4G5Lj1DnBABmk",
  "key3": "4ZYVdcAEmb6taVrQPrBtgNwbHveNbdg8LYMosYRS6DqF5L2YY3iNXgBACUZ39xhcqfZYhRpDFYcnB1Wg5grR6Pqk",
  "key4": "4dmXwcqrmZHnQGYoFuxw1prxYp9Jx5131a7azApuR7H6WxjDqWoZtmKC1Angpr5WsTCTpk5jaaR5bMJ4frZxUPNB",
  "key5": "2Ty1vDS1NxEwXJuPNHq4QfRjgudSkXiCueQu3KiUbzYdiKCCtfdMhRoJt72Dos92qSSvL4fPUgn3xuaSjCX3YMXN",
  "key6": "5hDpwe84NuhZeLLhUaTbNWagkGrm9NWh18LLLoJ58ydBpEfpQzYDsuiJWnQnvm3phhXafvWyTWgdrqoNtMDDBSuc",
  "key7": "3R535xhVYZ6G3x8TH4KuKVeRGbHfQxeGSEPSxSBGoKYGTsuZFogTWhPSR4FoKJ2da6Lg4YTjEdegMXUXs7UMYjzQ",
  "key8": "4DUQLqj3w17vc41CHhnqvUkSciy5toFSvdZu8AzEoovLSSPhdBAhBWo8wEd6EoLrFGnnnoTQRWZviweRnXuWFQBb",
  "key9": "2BAVCKpr5vnaZNX6QjvTuuKBrUdxFkZTULq5T4jcKxqs4yWukK5wWhewpWnpjbhLpwUG776XseHq8ThkaCVRDhFv",
  "key10": "2YAmczoDVaop29RjDV1BMJU7xV4UbKrogcAf9ZQuEB9AjbNAevqKqsWih7SuZw2hnXDbjXtUVazkmcxjAFYKRJPQ",
  "key11": "4DuUKZPTZ9wCHXiVrxkvGMkBC8VXzzThXpKffJYuhAQHHCHMozXcKFgCqzJLUwEX9YxnpourRcevanbDpkNJebrv",
  "key12": "cPhzrcu1eNhRS8LLXMfEbvksdrUxgGjLciESWFNTSFqReVgSPnUr5yT24jgGxg3PybsQg2nhdTuf2JVJgdQUEjJ",
  "key13": "DDHQ9wNHbJ76Uy4iuma33UCfmeCwLETmET4cvxup21UKJ8XMEPahfLAYKHTDGrjJ9nLVwADhaoa1fpLQLDxbAPV",
  "key14": "4YJoY9v3pevbfGULvDRF9zacP2SgCcpwt8ETgHjLR5fheFYdd84nbx2g4dH4kqdR1jWmmNvD8MokLHJLrbdo2FSW",
  "key15": "4arGZtDJNcqjQsQtVTeKmXM3kp3bHHxkvFexcj2qeYH32kaiyv2rJgCr71KwezHG9AGcSGFrMgEeMHLAis18HMyw",
  "key16": "2KEqtPmY89dLNTb3ZVHJ4Tg8xkGdW8pnaAADiUNuHCjdCuvfXmVw6rY5srNzwVypNr73qbGWyUoBfXd6AzGKA3Qw",
  "key17": "2tpPKzdH7CvBpH1Skv5fV7SKKj6pkCJwrc9ABSBsbmjrd5oC7pXMvc4nsNsGBoarEXyKYWMDe7dScwTKdYMhQMPs",
  "key18": "TjRtAUtdepv3mLD2KXtBeZgVjBi5B5dAu8geZ6N1NLt6FBhfdGKqwsBv8U7D8g2TKJ6jmd4BLgtanQp6WAdRPib",
  "key19": "3N5LJJeUayjPMoMfRPNDy4NRmKhy7qLopvawgzMuK6Vn4YvVoeaffVDCY2BnGD4mzEpFKm1H7aXwVzsA8wiCdToB",
  "key20": "2kxarjWYXgEZAjrnnMhWQMgSW7rUh1ws8ANxnm2M5ExrxQ4bpoeZAa7rSYyXuX6uQs9SCbWr5YVMzA8onAotVYB4",
  "key21": "bPsqfg2oqPCTxJ9imDYwRMFQzoL7suuq4vN1b9d3RUNNGkf2D6FrwEAJbF4shXZmquNTRtg4Gb2281c6GgxZ4HT",
  "key22": "5ECJFjbBBfWeU3Hhm54gS2Sk8DNvxRo9DDUDfgNtaXzYHPNFFx7sGNM9cLuC2dT9WnDKLrK3otwV4vTfK74bQ8ED",
  "key23": "HXe6AGqfWxaihQjW2YyoaDcZHskD2i53QKGPdtoyLjFR8YmwU9ozQaDjbMJTYx6K96NvwUfpHkWmY8FNsGEozHS",
  "key24": "5HiDyPb4MEuCUNtGeSZoZQq7BYt8UBHfamcj2HQiJznrs2BMJ7LNf1xrxeM8jVYuihowT62GSVs1L6qcX1SeTQ9z",
  "key25": "4Y8BAjwfhbh861NrPcG9omTL3E4BpdxvSwPuN6TMen9VkCJTHDnkbmvfvux5Ea37TGQbYLLVhmxsddrBwF4QDdeo",
  "key26": "4UmSTAZ25soKwMDSY8XftTxyCitSdyRMnX7xFtM7ue9r343BXm4pNAQbAHKvJd1oQZp8VBf4FpYW6jhpupBzNwaD",
  "key27": "2Nmf2KyhzAdrdk9Ky29PRaEiycbrgVF8xSCvewECtvpbmXFCQbNRBdNaTNtGJqaXvLYLSFjAHAFjjJZxtZo1xu5r",
  "key28": "2c7zoGgJgCCepJ6E3kcXxPZ7evPgCYA4H1j1qVSp1WkmrFL12TBtjbn1jHPAKXhckknsdBd436Nixbh1iDVc8SZJ",
  "key29": "3fgMPHV82VJPpCVEK7ufZjRWRrnsJfAjRocUBcEy5Nhqn8uCsHcNXP9GasCYTdiFesW65sh5xLR6E5jx9fZwssm",
  "key30": "64UV7xqZpb4XPPBgfY7pRg9LRgBYktina5XsnxPwxtWc25i6pYpB1phDXwUsu2gRDcSH8XnjFsL1XqX6YoQaPdsu",
  "key31": "3eDshzVH21FZn39YdbPPuFHWfoLvCouPadmKivTr8cMm4tbS5KTYSHH5GcZwgm7oDrEuyT5hdqD1ZPX6kQuZmK9D",
  "key32": "5eJXGXoWJjKwv6ssDAxvQrTm7F6mJnraD6CqqtxtTncjzgWYoPfUxRSUoebXuEGxAhNQ6j58qQWJRDj2ar5YYW3R",
  "key33": "46LhWX87Xd9wK53EYVhDubTWYwKGSxU6dC2kWrWqTmYV5V478fqpVtrxK74ESzMmmxtH4Xz3rNgCEMFziA5XNivS",
  "key34": "4asaekJ9tDoPRbbS7ktmJofCWxJ1fBcfFmLjwt88wSPaAEJNgMbgUnjutcGMDa2muGyegvHn3WMgW91rrBmA1im5",
  "key35": "3NqZv6viSrG7fNVVoSitvhaAb2GRscPfh2463xu4B81M33yWA3cvgMDdQco7sZmPQ6G8WQHMEaybLB2vZac4B8xf",
  "key36": "FdKBhsCFHqR61MiVGkHWYvqSqQ4YDHEFC4Skd9q2XYYTngVuR5ASiQHpzqjPopgdgyTTUY22gaamQPNM5ANMkEj",
  "key37": "5rZecVkJvFbodwaiJG3v6Gu4SCL61Z5HwKynGUq1puRExjAHoWtCK1WSx6VEaJv8AhZnMELXTsBkRmUShDTTkynd",
  "key38": "61nm9gDaddNBM1HBKPzKK6v8yc6gj8GNsxeJZVP1HBafyzVEoDaSafpYBufWXqBLsuk2pDuUEUoGSJzxzHjmBGpb",
  "key39": "4WmLJoqx7rLFju5t3T4ZMT5UMueRha9iBhQZqwjPqQo5JXMqAVYupWFteUeuF16zSRAY8wpKbUMLRFRcuE7RxGkg",
  "key40": "4vRqtegoJRQFpN3ufn42Gq1jCB9iDEBjHT69bpoLzQ8WJabUPMSxYZMpcFyydHdFn8h32P42fUTk6yZmGQux7G8v",
  "key41": "67RcrFJCoSkkqH81XQVDgd2pkpXDm38yA4uLxzhmbNQxBXH8vMRjq68zK1Gt166gmLXZ1pEJvGRWHv6HbhnH1MLR",
  "key42": "ezG1TxRyhCQKDSw3NzXqtz2uX4HfVahQ7vzA9jh3Wb5NbY4VHZddWhA9dWjRFrr3oKiwGrDmNDQBVXdCPfLUFvN",
  "key43": "5G2mt66Sk6J9AvbN8yvLEeuYrNMywUHg7K379acpy2EveV9vAwcakbwkKFMfKCAGnNttrgL2XQ9GKkPmDsBheCLg",
  "key44": "3uR7ikoibKLoLRz4W2yPmb4SFPRaehFw7m1Rp92amCh5W9G8tHQBARWtCdFXR6geFC3rKVE3E1Z7ovqtMD6iSdpL",
  "key45": "4jrv9hFHCekpQE3qj9Kw3VxE2fuhAsrojod6qZturinEiZLZfYYGgyCAfRPDsf1q5mHHfjpL1bBiZErtXSD2KZtY",
  "key46": "2KNtKwWZPLNjKuN7tiYSq9o2proNwX4Pxs2hM7m6zrL7GgGCW7idhNVdQPQoUtgBqWwgTHTXWRDK6fNbXr9BoMf2",
  "key47": "4qPtpjqgGUDNMS4RqShJ8uUSBpAFkWwxmeVrtZR2Cix1GCuJrvv2tTKS8CvNGcny9niH21XXjKmWgSPFJdsyZJjG",
  "key48": "2dX1nkjJjDoayS9Xa3qoxwS7mqkF2yuSJvHBQ1njrWWKyZyZHJ5wUiM2fqz7G2CWu5r4TyY4m9eAchkKb7V6ai8v"
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
