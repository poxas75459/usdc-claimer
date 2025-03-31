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
    "4whEzkzyrQGUHMrUoz7MxXiFL5JE1m4221maGgH694qZfQMshVRK92VuiJLsqTxpNCxcwc7dBrbzGTzDufKK8wdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JSLWrNPvMfi1xy9w5rFbAkh9MGGvffnwTnGrZAFWLUW6jk1vdMguSgKKJj6EiAKXi8U8dcpCBRSyGYQbTgJZj8x",
  "key1": "2Daixwckqae5pSdcSeQn6tXdHhgUCRsBaxfNSaAdXHU4jb4TKhTBfKfaKQSAfZtZqCScPdVmmSVayULKfhh9ekTM",
  "key2": "43Fdc4iCziyftuiGKfBG8XdCmhYjDK3MxkWS8r2PGXC8EpgbUziqNQduh6hjrTtCfC9NYcE5oKUcWNh1tZ9mXXRQ",
  "key3": "2LzaMRYXj8r7GmANADAHykKH2j1ua9aBooGbLke5u8kSZeN46ToP3kSuWSeDgJfewhnwrwmKtV9cPG6DtddXtxU2",
  "key4": "2Z2RA83EHJnS8DKeVa9DtkwEFJNKD5pq4bcHeU2gJuCuNjxgREjy9KWxgovzzR5qn82R4yv9p9UJaqQKoeDnJyDY",
  "key5": "NUoTQadDQp69L5N1RoQDi1uEA41FewpFpY7nn73xXdZz2kTdFQMrA888Ap2b1sZByRS7Rw7o26riGU3wBzXf3zr",
  "key6": "qfoyoxSt6ThfmX5YLJjrkeczYfjhW2i1X5J59KjiMVHhQG6MoYMczHpBU89P5SReS7tUXNYU495TCyCNQkhXJP5",
  "key7": "9wGFQnegBGer7j86hwVGkxeoqGwCThLUyXVEFDnEUx8fhBQs1whCovTyVykbkLQwcS2uu1gRiCcTxABip5dSEiT",
  "key8": "2ArnwGUTRhU3j3ShVzBoypohnktPvN6ed8x6YgdrzFwFbTF9QFHgZA1W7ejnDLPBpDimUZTy9von8ZtUWr4VmfVc",
  "key9": "66SU1KtWqtbZrsk7TwpNpsGJx4rXUXidmhRiTGdfdQpNAVjxhYFzhceChcXMEu6MevEFsX2v3fmxkDERuRSTEBzv",
  "key10": "2GauprmVKHobzbTEGisNBkku3k6ZK2WhyeuSZKutCnZtgx1sENcLuF4NCDtrMQyiX1nvpyvjcXFZ4JtD9U7kWVB7",
  "key11": "5rqQvNB6W82DEdA7ebK8thvEuaAL8oMPuzGY3qek2sZT9L1rXM8xVc9XnHMRwDmkKQT2jR9LzBgfLyxF2bXxfsXF",
  "key12": "43GzGf6qbJwdn42SGmzbMCWegBHE1VY7MNkL3WSENbw72NS949BURsHNSjQ5Bhie8X2cPkw3W9a8K3eVmU82SFwm",
  "key13": "2wBEronvCxMcfuuBN2ck72oN1pSDctrUikZPEkBJScEz4yqgrC7pSEKGhFCgeau54eivsAvdb6rkB82q2jT22grx",
  "key14": "4EvhSQmnQ8VzTJEx29mezyvUoCSeMiJjTeqfMucTz8vXDnyemsyjmPa9tqXTFYLGDn926U7N11WjRUBUEWwg6fxV",
  "key15": "2rHqWcxM1RysYo8EeS8ouVzYQSPq17jPf2zeBRwkjyo5xNgiirTXRYGkkT5qRJM7Lqd1pknGdXKcYrkrnS8gUjZy",
  "key16": "KkCTzo3wZoYYoBBWg3uhqETUc9JbkmUhXSUSQuhqEe15iNnp8FjPo2exmfJ8nL8ApFmFsqnDprFqgPuCgDvMtQC",
  "key17": "5DRccAK6UdgKryrzeNoEwkJmjqfvfmV7MTwnhMVRpzeS5QFPDRtMFpBMtQB23CNJjQ1ZntL4K6X1FocXaEi1nqmE",
  "key18": "46JkFTNpyP9etvT7jEvpQ7uiU1QmyHN81Q5gPMHENPhuKv7uf1ZAcKAQzRe8s8xp2JN8M9jZMu2zoR4UgaB2KpxM",
  "key19": "4uu4LdrbA6RPChbm936mCp8ZLymBNuap1e4eA9q7FR79qDTCec3P1DBNSH7Zu8ujfVxUcZrmmZm6FceqvmKTuo3s",
  "key20": "2iMc4oWBfZs9ZCnYBSkkvRTRfcK5MTffzGzFHrXs21H495JWQ4rHkGDRGuptHRKW7ZFqnKvWxMsiQuU7xdtMz8yn",
  "key21": "jbLjdfXWSENGnvEhdoR7sUdf7cJoaXp6xgT9ZEfSoffdxivWjH3srdarxDvktSJr141xWK48rRk6L2865cfBySM",
  "key22": "5h2mt95xxYbdbvK2thVe38VyxUDXhiHi6fZaemHM2DR7fKkypCoNvuZPWBtcZsMGrCUcKK2HZ6toq2d5MrvArgsA",
  "key23": "2xkyhVrdJX5siM1qfubiF16tycN5ARnsF17NQM4fetc6qrt5mZsk64NwthY1T2kqfZaj7AEgtzpqHB2RPQ6eZ7Pw",
  "key24": "3B1vYpzpvrMZknLB9NVsWJEtYVkKeC38oZkjT8b56aSeuYYv1vHTwH4TgFoVdUgtQ2v8jhWRWDiidsNAmSzvGqES",
  "key25": "4rZmNY5XD8TrXFiym1t3WgLGvUnyM1HT8z5RnzSn2EkrKUguqtpbCbu2Z1koqd24tHAaDLNRnq5RiFCZZFMTu1B2"
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
