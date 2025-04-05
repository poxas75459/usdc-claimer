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
    "4hua2N1i8tQ6axAi4EzCm2GUY2ugjZzydsV9nnSvvCKu3qoC4A19hbg6zmRG9kSSVaeEEwwjwwrdETpxHUJwm9JT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sA63SLtbSz99piua7rQ3F5EzpofsFZ2H2iD1VzZfosuMV4JFAWoegZJZF6ZWEcm4U4prtb8WE3EHBMjhjbxnfTH",
  "key1": "2mktP6YTUHheJDzKX7LisPF2hxchgHvY4dv2YXmLpNNEUKUmXSM4wVNDP2GbcmYuQqcxQ1NDRxGCpPoQonqVdb2L",
  "key2": "5rQtkDhUPEmzxuD3am6fngoZDRw324R7SVU23nndJEzWoAwUAuARw9iLZxmVi9cbEgEsx3viUtiQ9cKEPtd7egFw",
  "key3": "5zYP9rmY7k2TtKYtTTkcoEws2n5rJbxWWDjjKVkpG5CPvg4LkHztnTRErrnKtB4CtU2u26Q2m6mk6etTq5ubac9o",
  "key4": "28Co43TqxEmHgg29Adppno4D1bvqA37hG3zK5pnwzUb2eZcLU84LxBpZZm1qTE6nLKnpEQBVrrPbu7rV6TyPed7B",
  "key5": "3bN5ymNqAGRTBD5gTSmCXMZKdYLBk4mBg9r6WwzCwTzg1SCS4kNK61RpeqT5BLu9k658ekwejbj52FBzQAwWtU4K",
  "key6": "2rgRiFqukNFMBWwJR8NcWs5rL93BY4Ug7ezBE5UdzqodTd3ddMSzTGYpb5dowPoyvUJKefgoBiD59ZD5sx5TePrz",
  "key7": "35eMLsBMctYtJd9xeppxVd7vPHfcF9ynimWuug9p8xYjS6rtB654ef2d4iMAQoVhkrL4DfjP753xLq847w9NpgJc",
  "key8": "8RbBvQh3eLt5oe3ntU2hZCuUy61ctUzW42S9bdfZvFpezYCfBeQZDFXYzRmTz32qL7zqR1Gg1f7Ze7K64gYcTFo",
  "key9": "5Fnt3ndTgMW7cm1rF6j2t1ey8eB88sNyafY5JJGorYH7x1yquKjF6yiHJfaSmpXfgojrWLYU9mLVB3Ajj1h5ttsh",
  "key10": "5UjQzwAq3Gf2QRdwbhWbnYs2LFtPUKCSreU7TinwxkbAVDReR2zakjbcubCBXFoPiySVRvLvSegrNgnKAeFsJCF",
  "key11": "45xgb3VZxYxGKUwNRxD1xx7A7bpY8GiQApXxACXamzCegfVV1dtXP7GEXPyAXj9hp51Xs12g17nGVQAgSE3nd3cY",
  "key12": "65pksy8NFH9QSmDvkzKtoQzvELN6xL9nJW8nJtwatQnZv3Gwr7o1NHT9TmT5CbGqQTPrGrxrFyYeVT8qFjeVH8du",
  "key13": "og9Pf7xKbwJt9sUFoP35NCaoidUKVompzCDUDhtdJtsia5egvs9XHhzaB7qRdKpawCt34WcAjQk7mCT43swNLXL",
  "key14": "MKqqzNgQWwArFP1YqoQhwVFG85L7VDiW8x8WFLMtWWmg2s9yfss8b9sWJ5fRV87dEgUKsKEGKn6wmLu46pifz27",
  "key15": "vYt66GuEvZsawMkPoHR5KaXUa6r6ysYE5Eh8tpk1JqMrRBrqge5LMjAwutuqocWjuAXJFcE4b8UdXgVqZV497vB",
  "key16": "666kAhMLVxme6oQQRAaDcyvdcarFfrjMBFvERbxcxiMCU3d7Zc9paCFvqNtZ8UfAjYZmm7AmzGkeXpkiRLiD3TnE",
  "key17": "5yXfjpW7nS9CzRnSyNiWSrVbpXaw4PhRBESKRp6c1t1cxfZnA45qocvArTKDxY4qxbDTDd3QENaPxjDSCgA63dDb",
  "key18": "47rahHMKk7wWqxqtKhjE34YtUbzVR22aoBrp7yzJwjLBZxfa3mxykaVNQTajzULrNXEo5r2PSstF6gZGynZfemfv",
  "key19": "5ksJREsWCRGZM84JgTJiJvUMb8f8qH3rcaLgX9dgqzH9rLmKQFoD6FpQWqe51dqt6iyB9z6F9VZdxxQ3Sfa7PFyZ",
  "key20": "2zxukDv8mUmVGQBsqCENBz9PpyGCqdbBVoHeAnhsR64hrSDztRFAjyiJw7Et8wp8NzgCeR7dYWu9bAqWBAWm4Wux",
  "key21": "5riqWKjEQou5ZXym8LxT6cYj56uvWg46vdd4feZmhqXs2Ubjxy8AJStm1CAGw8X4bRd22kLh6iHqEzFfAd8XoHSi",
  "key22": "5wQKyS3omnXTTxfNBbfj5KDXLbXT8nk1hE21poZzoeY3sdSzJkBBL2chFH1nbvV7ZZYQ3rjMtamqp4NJqjWTEnbW",
  "key23": "3vU57ABsuX9K7SpXFAUtc82Nbbpdc8r86eem88xDhLiYhJ5DcaYwUUao6BucBvCtTBM6z4BATY92D1RF1fVtJFzg",
  "key24": "LkRdHpH4JCqcLtVDtAAkVXLvkf7oTjjGJZzCA4qy4tw2GQVXpSDtWv648XK3XwT1xiaMWjgukfTiN25SJUjrS3b",
  "key25": "2cXVPjPG24gkdpNYAkgh4rL8vyFKyMBLNdJgMRHEmw12czsvSBS4MSPc6rmmdFpveYMf9F9wVuTBFUnKm6aCoYrE",
  "key26": "5hNLNGNrK6qnpMx6oL5HqQKXXQZdNELGhSipGmqhqStRNi9nCbKWAdwSyExZ3nvoTtyJwnM5cvGXeBE2v62N8Cb1",
  "key27": "479w6GvVkQvtwRiVZUpdRq1i99Xaq3t2ipy8eCXFPhwEutycM2jNbMmmtfJTPC3zPq7hPbNNEwjkoiv97hD4GcZv",
  "key28": "4yZCFcT1uSEr2RUKQWVmRgKMjrU9o4CdGuEV6w8EwAdwi3fYi5Js77qiFGwAu5VLb2sfDnTHUZtUxettQS8wNqzz",
  "key29": "4Mtc5LFzZk5jkiqTSbhJJzyC8qFmvuc3TUmwc7LV9LhpTE7jUL6g2YBFRi6GgTfRmgzzcwHTmvJaq2VmqUciSoyX",
  "key30": "2Nn6gLdSSH6gzyduQJB1Sfu5eRu2E2FwjfrJz6mtmMn1eZA6vHj83A2MhXoY8JwpcNV3rRaKpcsFxCXdAbHFgS3B",
  "key31": "3uqqRsZ6camEXGT8a35u2W7bQumDvtirs7hrgQz6RT8vMvevM6SaPzsxWNJv5vL5CQHiv7RHm61hAd5mvU6Xv1u1",
  "key32": "2AY3RTa8afUxdBDsvywGukwTYoR4RJguQa95nEjTunjYYQPAeRvq3ngNVDii49udktLCpGN5AtbWKfghZKK9r3vj",
  "key33": "4tNL9JpgZMQHieHxgaFHbpUhdWrFyKcbEHVwXdoo737pUygXSLEmxHZAMeNYaD6HdiuDJJqusBzSN9CWrVkL95sM",
  "key34": "2Swdx4a8oaThMpY9w7cGetLS79YG5jKehDNm1miCdXAbTgrbSGXCG6gpdSHFrKivwXZsiNMcQaGM9K89MJKGuHSB",
  "key35": "3fDwVKyJq5vRwG7QBwDkVig16THDnY913xjU1vdLdjpEN7cba2SoVwnX1YM3XQmCe7BcVQxJTXsTxJ9nksBHnAgQ",
  "key36": "2CwRwSU4Pu1VrYV8jvoFfSaYLcwpniZcc8WakeH9XySfCA3NAnoZ2RVV4Qm1gZ84AkGpXr4yaZvrmXLT32VV3Skd",
  "key37": "WHem8su4ZSZ6QBjr2BQozffNV4K43NVMKoLEZLk7eyCAkra7R31AV56852AZi86ddwYH6zUVh81JK454W52MnTj",
  "key38": "41jTNAg14h4nytyiXZkCwLKEosD8ybuQk3cKqbJz6GnK4h6AeG33MwSXkkANQ5ypaAD5LNVvxtwNgA8e9rzzj44w",
  "key39": "5LWDrJKv4hHiSjMdtCDPEE58EnNKuREyn3aQJPDXMAYThf35fhFtEj9Z3uer1DqdXKXxfHweA2BSiQf6oTeRcqvX",
  "key40": "4NoErAtKz7Xykp4AQZZxaVwLLgksVNwE9nqzukwQ8six2gwPhVKYTTjCrDbyWC3JYZXwCV1JUf5HuKpTphUNYrms",
  "key41": "2zWvHTPXMBJkPBByWTbQgA9wQpzyHaJ28BuuT96TnU5uw2dhas2cfi96W1qSwwPy5KvdwdVUeXEwv9245zxXbUj1",
  "key42": "4XuGe2MuvsakFTAju89jaJzZzDRW4SQTWPgAoVogRFWUcMsg12uYbkWFxcMwMHAPc9BsazQibhMwbaxFm3KSfzL7",
  "key43": "2kvojPBr4FpYRuYA1eUcDiFkx38n7rp4LxGFuVhZb4kymvED8JzDc132rZrr57Nex9Snux2Y3vUkwQcNBHHd4YP3",
  "key44": "2CMxt6QuGMChwZRtTAZsRnsSQQJjA65SP2YREf4XLN1fttF8RbmASH1XUaKdDfAoqj8zRi5JZ9RVNBugBTcGZU6w",
  "key45": "5ZAZyVuW1z6CdHqfgs2hmAYd72qNNUuwh8khuSWaxSY7ALsPn879NS6NTLosSaM6q2HPUTVZUA8H5prrdYZwtRMC",
  "key46": "5VpDGeKSnX3gfZrQhrDjjPSZi6SSLeVNY7MwEeTMzmHzPwwYuZBXJ1YP5w13uoTDZFvKkJGigAobm1UH414WFA8H",
  "key47": "5ar8PsG4YYaN4EaiaBGfxTh5D9ySZQuVq1vnYpAthUFyRiYV4XXurobjwGp7hAUbtduEMHg31BRBydJdEqbVXoNu",
  "key48": "2JVVaor7VCPmFTfhAQKF3pTJ5fdapxMBzG8SvZHqiu1rVrfH4KAyVWA4WS8f5yEPNGFwgBu7AhHJXhpeVZG924jN",
  "key49": "3yy25jZ78aF19KFJHKgAYgUb74DtZ1TWuM7doEpLrk7HXzqE18ffYEc9F2aFyfKjUTeWT2fWuNTpejsPiGzXDqH4"
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
