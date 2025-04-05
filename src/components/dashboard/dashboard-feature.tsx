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
    "2AhMaaYx1epdEsz5b5RWG3uPhHfV589S1kGTEPeQEG31nUYAq9JZYf3amtcBAgcYw68ubWmUN2UFtf95FcreoinY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXSiV944ynwAMnLiCbnLo9g2px3SvoehzFFzQD4vX13PeHWQkKMqun3ctsb5TVSvpzk6tLGnk5T95kABqGpm1ZN",
  "key1": "3Xi4uFga8SPZwupZje5yq3dng2c2uX7uvSaeUmvX6zY1bxijkkg2NiedMWSBsXnsRRAfdhS4r4vxtAUYzMM4VQo8",
  "key2": "288KLVywFtU2rseGoBzAg8u5KYdx9DWdkkytSoq2qcdyJrm6vueCbDG5Ty3YBBq2K3N4jLkfBKyvPUxRDE7bGAoG",
  "key3": "5P65rjdVj6gXfyj44rUJ8uepML4bjokKG1EnRBqJyynE8rs7YUcjGhjMLsNdX4umdiZiBfrP5FGeZ4B9Ni3Y62HV",
  "key4": "3GuUcfPXW7wkyZRoDDBGMQCraNaTxCgFpYFusgXNkozjeRnMVUm58h14Gg11bonSuQoCcB3DAib46rFwh4ejYDJr",
  "key5": "N9sLir9uYHxAUt5gsG5JmJtkhmHH7x1cBeRceo1D8QS971YTHTSFTgHWdC2AvvBFcLBcsoNg5GBDa8HyP4WHqAC",
  "key6": "4aas9L72YwvDnfkMoS1tV7vdRUuie1rwhf8sCbfzfdajMkyNUFSLL6zQDB4Dm2GZDNVs9chca1TRBNA3PqQE5ZUM",
  "key7": "QeLmsgFeH9pXvrckfn48fkWejwLqNMejTva1HteHV94zuVP2fH91H7j3xZm5ptX5JxmEFdsiZGgjskdPGt4P1PG",
  "key8": "korToyGwPtGhyjiaHvepgN539EeGXajPNRn334RrjSz9gRS31kSVZoVbyYi3G34hSXwKUxXxdd3pAGuy2Ag5ofN",
  "key9": "2WaxCN9MqFZiRTXRD9rt639dRMzifWzU1kmN166SAHgnCpkghGna4FQzbNhmyABZ4qL1XSBra57cwiAqtvuCeFYe",
  "key10": "3jfoQDMyF9AqDWV2WvapFCKFZAk6XpAGvVzSoNkKTSHma8tdAcZbkRHgy1AtH5mVWm6UzaZG6HHJAvoReouA1QCo",
  "key11": "3SoYC7vr11wyn7f3paVLopCQrLc4DkSjaFGx248XkuMhmxuuCywqwFQF4hNzy222vUCf1gCUfRfRLDV3RfC5S41o",
  "key12": "4T6MskGqatvuMeQznx7Eni92voDQ9REtghbzEuaqh3PjsgciN6jmzme5YoKrrRTv9Rwi1FEEcsvGz9EpLzfj84PL",
  "key13": "3oZABfTtFXkSxcFoK3pRHYWXtaEMrU7PeK1hDkRxozhUu6wD9mxhn9dfFFrypZgfuojs3CURTgm9he22HqdH8fnL",
  "key14": "4dhrUwXcsJAaJt1FcdSvJkUMfBYGjk26oSPugHUhbETGqQHN2DSvpb91aZMF5dV6MUk2m3NdRNSA3J8B3U8wRYqt",
  "key15": "3iMfM7tNZATxNkWWN5bcJ4Z8JjcpADqzzHxhrTMoxRnGsPTC3DhUmtWJ9gvmdkpdGC1SBf7fvw1T5zTPcnysCpZv",
  "key16": "4nm9hKNp55QiJ7zDbqEvY26HX39aUkeuDv8W3zM8bmpBdmG6Z9cz1RND2xtkB7oGYXDvY42KpJf2XHab1yfzz7a6",
  "key17": "syKun7Rn8LcnL4BzvtR3JoNC6vYP6NbPqCQzSqLWWB8qW7MPHygVDiTwjyYUY4w4yLrmP1QPUqgigr1C2fQNWcT",
  "key18": "3hCVP5BdPJPBU8Wx3B13UyK9qfA1x2qR7313FVNThpFJWhV5k9NjtqDvEDAS2cQyca7vy4HVgRXf36WdsxXgmU2q",
  "key19": "4ju9WUHo1Uc2PChkHEtjYysnU5YUegS6evCpcwvTKv2mbg37wErtPoQf1mdktMG1LWBdvk4LrhFUbr46jLXKnnye",
  "key20": "2dHNeqmUsgpYoDr8JDVSmpaTxn83P7qKKFWPXxFkaDP2vPNcMtC9thJaJY2EnPjzMvMo9twcj1TLMyqssNfRVx7j",
  "key21": "4NBuYA5geAqYVcoP6Af6o7yQvuwrT8WPoBzdkAEJEGqDSBebNnduwHPH5ZtzN9L7NvmScfcMRvzyyHckajYoJdZ",
  "key22": "P9cp8mrABhJMUXJz154eHUhqPpsTmh4XKBWaJNBHicgXycow5aGvvmhB2yYvkLmXZKhYSNWCnNMRwKw8Kd9mUfw",
  "key23": "22iLqrW8zUsP7ryqogVcBcY2rEzmVmvYXjEBZUVuNCU7a8dQmq7jPYSnmjncebiRD2PyUbHTt6j1TBxSJifAF5f2",
  "key24": "5JDf8Mw4DaMM7msKXcd2KHdL6hwKgkgwC5N6XCentJonzA7C4BBHL5b7cZiHd3AWoS91QjxYA4ZnBvtndxowJoLa",
  "key25": "3N2rGqZUwCZp8xX4cbLJ3xM9rntuh7ZeFhCnotLK1nLeL4VhHqBoTBjYieKiTPHYQ2zV27xmaBHkw5sqEX1JqoL6",
  "key26": "2YMavmq6JN9sTNCFxUrDsbyoq7eYveKNkWPGy4cWnxXjcVQdjMkBarwnW9EiFX1CAGR2Gb4BVwCpvD2MWSaqqss2",
  "key27": "43Qnc3GcQpxvxUofmP41Rq15vEKn7RoP3pXaKTj5z8XTynQkyLUMpqVaC1an9JSPDKQbzpy3t6ayLqGkThAgn2ha",
  "key28": "PA4wyLg9epRd76u1XkwTRcKfR7vfWfsknrXgsTLiaoBwQh3aAsj8pvM5ZVn88azEJyCV2Ykx8MNkWkWPrswyPpv",
  "key29": "2qwMxhFiQPVWr3zy7Q71HA1S7gN7qu4KNQ1Cn7gUBCC6xSwSvaeUukCFbguzVRYSWuaE3c7gmhxBBS6guUXiok2z",
  "key30": "5Pj1WbxTfU3sDLt4bhxET8thYWDNaE1VxJjDoStu2W11uRDHho2CLVUxV7Rbsuw2o7SZr4MDrRhFLg6HvawKRr6o",
  "key31": "4Zh9QLyZhUFAdrzi6nRxF4gDZ3uMUdYBR51LRqzWZbRa7v4M7Z95Xo8kdGkF32EnavkryojsqEzrraxS6GdqnXbN",
  "key32": "48pmuYYMBxVSFxbJZqAL8a2CZkb611twuR3reqUi7DbFj5DvCyNccH4ZhPEZYoSzKFy5bdxpEScTv6mpA1P5JgBk",
  "key33": "49kX6f82J9n64KbzukFmGAjf11qZ8cje4f9diUXsxL56W458vSJPc8t6C6wHVM6ZnvxUozKZFKhNzfqnRPe8bgVr",
  "key34": "4qzh5HSLg3yoHVosK5iskcBCbF8v5McnN5kBpmXYnsy2RHzo6CDRRz272rHMHjYMgLhD9gKsracF9Lf7GRE5VzYr",
  "key35": "2NoiBMkpKJVdLP1jau74KD916GqP4gwjdfmNsr3VFof8hUD6baYirWDwFbmvFdEXZnpmiH7QS6Pn8KnPqXGAbLeG",
  "key36": "3NberymW6AH6VnVgvCWcXJDsHDPZJAPTMcBGF157UTSFeSQnpcNoxhJvB9sKGx6SYH3QwyAwuLEWy8ejAUjUp5id",
  "key37": "wJ316wgY9zLGY3Zs2KfLQnLCd2aszd46DSHgDcpnXetWnnjBxXYnp219EwJTPn8cgV4pUzDUeJyLxAusvMuYiaT",
  "key38": "3yRGyYShbeVS1AyGYEehBRc5bAjL1czdUuYtBQ8a8UQ4ZnDuzVPLxDexsfhanmCdmNx7UB8sYH3M27JsKqSuJ242",
  "key39": "YgsFeMYfdKqqXwh4zxak65x7NkNCXFfzxQUWunNZ3mpvzte6noDFfC48TWWTqXR7zJyLEVsSNvjbMgYXCPmpbco",
  "key40": "2AaE836k4XX5MBRtZiktZPbSAFQR9a5HNS62US5T1R4dZxbcHGWtcu2r8jQQwYP6zK23eLcFASABBvVmPsjYCK2M",
  "key41": "564EVRAX8ZdtTz5AJbqheLoQFVQ74qBfP9Hx88VTDXn9vyGHvT6UChACvSQkp51TBaC1YNhDEuFf4sc8iP3xpuNt",
  "key42": "Ltxpiwhoe6jY38JVzaxB1c2rJqZB4NLFEWwxSnZ9TdtwQdUYQbbrL87NRexgyUqNY9szLTVGYyR9G8C5EaSFFf2"
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
