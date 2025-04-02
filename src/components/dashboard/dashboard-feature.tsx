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
    "3H3rgk2BZpp8ziFrw6HtsT6gX741UyzvyMybW3xmkUP6Evc4tFgjotABc9LXRyNeMpcubfhDig7JUQanasxFKf19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZKJA6wD2kDF5jZT5jnJwX6bnpht1C8jcj3XJpvcYFTFYnLpUsZsjNzNmLwnk3VFqNhhVtAG4gNgR2pvHbvv8p7H",
  "key1": "4HTzg37jz2kqKZHHC9NkHzzjbX2ifKoSay2Abm9mvzT8EuFZXFmC3CeFpfnsdiyiBEEuXuQQvyw9W9xnSs6jaTtx",
  "key2": "3fZA5THcbFWXkPopQC4Xc3gtyFbY9zexzhfhj1y44YYJyFCeqdgGb4oPRWeBMQVVa8w6KNbcVmAwYUDPN7Ko2b5Q",
  "key3": "4Es77jhRqSgwMDszFBpbyv6P7q9HacxdnSFXQYxk31R828pW8nmEQLkwRfAo5dYi7c4Agh8A9gS5DQsAWCV2tFN3",
  "key4": "VdYmWuvdS66nWt4YbXNJmRx5Tx7JLzhBJz4xhRwMXPGKSTf6F2ybhZZzoZC1ujmYeAVMuK5pAsL6Gcc4h1zBzaL",
  "key5": "5X9eZ6BADyBXzQCr6A5XBsvwMC4t4aJdj91DPdQs1oF5hT2p555ckFot81yu8yzfvUURCTQG8MvjoZm8pYEk6UhY",
  "key6": "5pHxnDgeaHKozBK8hBxGkbogD2gmbthHxjUMSyeJiANc1AYnrguTo2rKPUeyFrUcyzDcwoEw4LiZev2ud5Ek7iAA",
  "key7": "5fQpZv7AkRf4kbiNDmnTLnPDn7uZMKZ9Tp5ErNUj3qeYqBEa1P8pnDk5esw1nUShjGXyciSQ6F4sh7NCCB7HBZNF",
  "key8": "59TB2KwK8GZtQtueLH9sFhrZrQVEHkZt1bncJpSi55BSwYLKenn5yGzXQtJ3o4yoRPDx1teRydiNUXvLyuznJpCo",
  "key9": "kFxjSxrFKsFZANq9eQLZyPqftGy5Q2M8UeTVuBNLd26ArBCNSxBhf9aUkTAgikADZrRU6u1MHe5QXJRdmM7WPi9",
  "key10": "5V97pt1phLkCWv3qkemGBDmci4YSkbKofqLwqgc3imD57i1vXZhr8u8ZHUDJBFSchkotJvaNrSQVZNhVsuCQF4iR",
  "key11": "4avHTNcepaWfMzMwQUTCiJcEsHZYnajB8xkYUrdmojW66tEAe7ps7aHnXktHCdeA9wsm9kEy8vDFNqw2AQrjtrCT",
  "key12": "2JtvPGjk27Wki7fKYgV4PHg36oD5Nef27H1vfnNU4258ujvXDSbm3WqnnGe2rVFUoT8VJCN1SonGiZNePid33jTf",
  "key13": "5CmCtmZuSbPnamn5EV3eLgNsSuZu6VW1d2NrCtF7xQBEmrPHFHGvjTzgdpNiDaTatMkTEVnq8VWTDVgTd9mZQkwA",
  "key14": "66W3sqLrqXVncY57vBiXYT9JHU68CkV2mt8DJe1aE3rqycZbxj1oiwdbK7V53sCMQ4invUcDrTMmnKid16tk94vJ",
  "key15": "2SHrzr98Y5LS221FRnyLL6vHV59FqEW5iuWyGBMrcCL7LBzXMudyC56QndQaBhoDWCyPRsvQL6BNgZwgZmtu2k85",
  "key16": "3oEqv6TPq8NBKEGfnHTfpNZifFMwtFCtj6zvBcTXbJqKq7gw7Z6Pr4TVdxikbc58ybHWpzX6ZEbkvKJTZnaSN23U",
  "key17": "631KzxrYXGLwtjVLp5eGkNvH8z4e1vyV4Cn7AmASirRq81ceDkvz4HGtYoWyCLUA8qrPzfZ1ZRgJGsrcXQWmdzwk",
  "key18": "4YZS8zqkviVvwhWCFomxZxrbxmG56SkLA25K1iFujn8dH5nJR89TghbKZ44e3XAzFBuLyG4uPtXq16zibZapnpEp",
  "key19": "657qggVhxB5W3pRZTbdCAutpDSS9UDMepZvXNAUXNWweoRvmZyVGnPx3rNLYuQSy4dT5ZNP2CHZrxBwqRX7CDaZH",
  "key20": "2eFjCeVN4ydqrW9C4F9t2mCfRvj7ZtVXZ7tHhdxbqYRM8nzTjWQGMZiUNoQcEgQnw8WPfLxzQRzSystELD41ft9Q",
  "key21": "5sFony3gGWkxbCULhTyxkyRTkBKRz2oNmNfyUPkjZmzmyQAvo3B7FYEXLybPdq1xEfDrrh9qjoR51quY6X42iYAG",
  "key22": "2Tdh2CXuNfvmJyghsnx2436JKwpHvt7jE1rqd3AJsDdr58hGFyGjGivGJhiDPnwezmXVGiW32VGyTAtd9TPByptp",
  "key23": "4TuTbCm1AffBB1pNnZFHy1TvvGfZeewcar6NkPYn8TydpSFEDDaoQnwcGNogeySAZTxefZhLvUVwDwEMX5wrsaTM",
  "key24": "4vCfg3CZJ3njFLn8smgvnGu6BCq2At6Rf8BREbywaH34M4jCKBrFZLVKrHNfw8dgqLzm4UgkQVgVHH3cFJ3aRnNg",
  "key25": "4ZupmTWu5ueSMcdrFSJ9fdzS1uV1JV2fW61z93oGtJKvpjVMmritxK2jpBmSyH4i24c1yrXqxPG1Cs5tzGGq2H9g",
  "key26": "Jn4myr5YdsHQiD6MT5gyDz9uZEbJ9VjWNGDy16SpX6a3vWnHiZ4CX1quUSAiar82bduT6VSjWw5Nw1ZhG3PetKm",
  "key27": "34Vd6gZEpTHJuibBp6MhZruGfQmXVFVGauLbPn8EvWasgtsHVQ4qKGtsHtERi3TB7T1VqMgVFp37FMSFrywfBEw2",
  "key28": "5xvxsRvVHwK1m9YpGAoYJG3rwHMAqinbd1eP8BzuQZKARMQwrAmoJKxdkzD5vyovKqgPn4v6Mk7h86ipc2xe9fDx",
  "key29": "Xf2DWgRefczM88Zz2mCV2hqPgHKxSBSRG5aEYTZDFvvoZY1B986wZvpzvSATYWE98PXS9gAVhhCszm6kYxFQihs",
  "key30": "2sy4PvD7NmVHp1YeDWsJGRggzdKD2bHSXj55EYs3aDQWRXWi49U1QXD11hbhqwzATYXzp7xwyP5LM8KVCdzQQoJ",
  "key31": "3z7bXHo4G9YxFokgVuGoWG8EaKL1tNF51Nt6SEexjuQYLGFLtkg9jC36MjYw6H3JiiQdfwUYtrNYS923yF3Wf3XW",
  "key32": "q9VTvvy65C1NNEaR5M1n1eBjELrzjvCGaGCtMqnc4ZNoYeWkgv9MxGbMA7q6qfXsqKME51BChfcKD2Xkxm68kUW",
  "key33": "5ZKRuBD75rLAkQFaSBLuLsCuAVCnP6JDrkkmmrujUX6fPsyRLPsdpVPd6sDTfXuAznV8fZM4Hfuvyr28XX3Fs5Xi",
  "key34": "4YRBmrLEiQx8z9EvHoJXh686GbYtA7EeB3Pqpb1v3U7LCjieK8dRSsjtmWEsLcAzwtLVrcdfhFm3t6g8amw9Jvt9",
  "key35": "4uUpfNBFYstoh7oN8Mvhqqs29uBKUC6d5Nd1AbBpE5xcVrf1GFCf7x4HKUjniJoz16h2QNGPxn3wSpDCztqgFe6N",
  "key36": "3oEka3F6Ycsa6hhoiSx2qYe9RdVcZRuabfuVUQ1ngcNRnDFUvb9dtPabYbmmZdP5SRPV9Za7yB2q4aMfxa8f8Pzq",
  "key37": "QY8pbwyZhcqPCjpEHNd3eukdor92yoYrHQMnaMb8ApadfNSGuaZCNN6QbRnvfNJ21QKQHrGQJH6NJXszj3Whkqm",
  "key38": "fAyTTcQHV7wGnsbDTAGdj8LMh5WfdevBDCcBHBT5pyyzEbgDA1H9f1Mh2atvGQawMkQqmsMdSk3Jt7wASLyP51e",
  "key39": "5zSFfMCUCUPGKMKekFRLLiBBFhqXZsY4iiuBQPWmQEAoB4MVD7xhKjxhKsijQJk2GmmzGPzGZWYq3Ykse8MRRhqh",
  "key40": "5jpGt1ixcQ3Q9g5R8bcus6mJnUsWtQvJ1bLj66PC8QuvdzC4Qd5yWKgPc1y8upseQue4Qzf7jpFdHroujevpgnBw",
  "key41": "4E52fMG5RNbKRDtSAyNyuRgRojYsVoWPj4ghZzCLYxnqoQ9sEwEmNv4tJasJRM4L6swhCKfEjpKpQGkfMocVGgh6",
  "key42": "3XAHggeSpwrD3tAjch6qGzq3gjY1ufr993iZvYY3gKugFMQY5jj5Qr3kZgmvXLRdgMKpyVaQP7riSfnnL52XKvya",
  "key43": "3yX1EjoRUJmeBQPbwiafejvZBfH1g5p7qVNW8ePKMbh5N2KjKsgKVDcRcUppyCgKGQpB27k3KJ8o3vXXoHciZhkv",
  "key44": "4Hs5NGX6q3mZV1aMzLdAaYs4rSGrvJuptX18p54tpzKebmuCadCXfxfNASNqyb6uoEefM5PWb6TTdseTvE58UB8D",
  "key45": "3b7thwUgUs3Z7UcxjjmjeKK9RADmVboJQMkiWvKEHniA2UXRs64ibKNNgmxbFZajDVv8HnXMKpGBDKe2XbF48nrj",
  "key46": "2621vmvLVAn3U4SY7f87uvuQ61A8vvkgrCgnjVgX2rF8wahUMvn8dVkrxeDJ9ucASNcUWFUsiVv9tP9rvPvLJjXi",
  "key47": "5iwXMZW96xhxBgCJMaywCxnJp4u4KTSaYWnypYz5YXMyVeNnpXHKpfYA6YCPCmxu8mYmqe8H48A7EaNYdgefqvZC",
  "key48": "4nBuEoyhvdZ7zs8EM8QxUWpHCboSC6fzgGDSFmekTUfPNr4xMuhw9d97L7QJzWmauB2WHZiXK6yv3ThyL8gPv52W",
  "key49": "2Y3CdbkhVBNEiAXrudoSfpkxxiQZCuKjkhW3aRLWVsr4j1ELqvkQ9tAE6vm1LMqUonTcuwgB7Xw74fFZSnPeQxXh"
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
