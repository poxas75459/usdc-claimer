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
    "B5218uc6EUVLy3UALvCgba945YxvccdTYP4WpqqZ1Xr1QfXAn3yU3hsw2x9Sf5Bx2M4C65jPmKvxx3DwAgbn54D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHCZ69oWfaz22fbGDavVarPXxcJMgLzurqWMZFdnKetX7QAAmwJtgNEA9PX4VJdcTxcKAqepuRS5pxoUck3UWxo",
  "key1": "5gRPApKrh6qD4jGutt83VmE5TGsLWXpMX7NfPeTq6TJ3rGt5ySBCtz8mq72NZWPfQ6CuCU5mHXMbq5i2ucmfDuB2",
  "key2": "6DCkYwqtwAVGBRDZX11tTyhMAmmUL7qfx4unqbbF7hD7Jn2vhHrcwYXmsiZCKEbD4nG2Cq8rHNALDTNsL6EV4L9",
  "key3": "5MNE1tv3wKqsMaSVe6aLnjVH2itBNb88xXJ9WBKZKDxZJkWGxehomKnXWrP4Yxbz2JuVFf86hFoovAuFUztAGBau",
  "key4": "5dvCfp19dwntkPiUNf6cuA6zxytpq9VgF8H88xB9YKW8RmRt2AqbX3kn1xHkodKVETDpcsC5X4TpCmWw3CVKjdki",
  "key5": "htRmp622QZA5crNiQCuuYxYdDbNZPPUaHeK1VBzNbdwJM8RYsRWuwJNvvWXM1aEC6WQDRatRjNWbHvC6GVX5PWJ",
  "key6": "2Hpw1qP1UpSC7ty2HrxwbTyHBRmVc2rAz4apD2wNy7zW5d4SJF9GYxm1JpEzeiS2z3JE8ibLzZbmR4LVHHDdEDrh",
  "key7": "4JranCiBjneYh8FxuqU1D98k7FFpAS4zA6ANmiaxKdzy4VFXWCUPc2BUv2Jc5az4wjiHG95cTnP9FkXbUMWBQf9o",
  "key8": "3aM9umArx4LyfUFVb2gwW56ZUvNTXB6arv664MRqwFGKnXvuHbLmF5BSAVFo1DddQrp56s86JtZRxS4YHg63mxMT",
  "key9": "3zvd6ybVNFnUCJDMg4Z5FfhVbJqDiBUaZt6Kd1SurzJoWhhpnSwJNTaHphLyYkPPbq5P9JZJ8sj4ET6guarwRxeU",
  "key10": "2Bvx8kXaK2VYzNTAEnPPdMPqyLGwzChCVZ4kxcrYuZ4qgFMuXYtYVAAJhZXyDczEkduMSkauU5P6Aze1p6Bv859V",
  "key11": "3fpU2uv6uZtuxydHQh18JPdt6eKF4ZaW24zk9XoJ36yU6yvyxYC8TWmrjiKYBFJHpbrjrJgR37R4BwyrgqeHniZS",
  "key12": "44Khae3p3nrpHWnefwiGn9vSD4bfNvoTY8VkUmjh5XNAjaGs3nZCXqyEvoiCkbjHSjUKVs1GdMPH7tKfV3m8hm1d",
  "key13": "3Shhnr9S7rNjM3zQGcnsNzWcZALxzgbrAgzcsdRpYWnt3wRVTu9x1qmuARrwErdPg47j9PEtSMZZntXzHWHASmsD",
  "key14": "4PmnCVbGMgtWY7xBjceC671xKf3b4qhQDPuihvMhVDF8oMyQJ8JGUE4U9gt6UoFzA9Z27P8ViqRnFWFBA7C7NDh1",
  "key15": "5VrD8hdsybjvWuBzsSVooWyBXFJK8JoWWpWrjUgQmesDR4KP3kmcCa6ycCir6w9WK9GVGUG3TbhPSJ3E5W1wd2H5",
  "key16": "5JNGwVX2NyRon3Az43xoLgrshYbd1NhDHRb5DLLUw4XfJfXmc24TnBbCMreQPwKqGFBLm3rq8TeH7LRFB9w6W7Fk",
  "key17": "218cMYHqsxuJWziUNVyEUUPGruukYCgPpHxfXhuXdnm2y3TupqXM6YfNTx14rhCLRTTxtC4AeLqa9XQQW5NemrKd",
  "key18": "5pyiuVpWLtjECVoD81PG5onoJy5dGARN5LgxKhFR1NtmMPtfEiWmP4tXYpHzLEjYkibxDbHBZq3UeTTGUqz1EDQs",
  "key19": "641yuncxt9aAGbshHTBDk9SwhnUVFE8T6gvRuLnuMgV169a1Doqu9gkEfZfzoJxvmhR65GGZnYSA5jdhUxfRKE8K",
  "key20": "F2t4G49Bw1mxijKEUUkSVqhwnN16Kr1UG5iBDLnLwcZKKCRFEXMTkzeSVp6k8hGRRfU7ZKDKD8NGa8v8ij13Bzi",
  "key21": "2z7ckjMfpigeSf1CoBfqnL4chaUQHqcczkrYKuxFpY6V3ErQFYyHXJvUs6b5PHuFC3GKH47S9XQSvKKb9NmsZHxd",
  "key22": "waoMkhaBr4jvUQJGhYbfoCzp8tMTArLFrTZN3tSo6gzGpzCjgiAnsextm9wex4xyzmSir9oPFpXrLmKayaQTomt",
  "key23": "5GL4vmx99b7bMdAGv8yJP5tqtCtudrV2LP8ST5tNU1inswMfsQEuLHByJsBi1WDwXnGzVAu7J65A1RPvGqKMoeJN",
  "key24": "4KPewmcKYUiJwpXqZRuqH2PBqvY8Pg1mETQqvgT9Fv2Ag1mCZobMriGi3d3sMwVRZ7zcoZB6FPaAdiuyZPQScYpz",
  "key25": "2spxeUu3Q1tiim7KtyGYhBAjExDVo7xtPVt4QgvdWhQdK3fyptdEbjdtRh7Nn4omqTVaYTHNY5qAPaLukeqWquhy"
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
