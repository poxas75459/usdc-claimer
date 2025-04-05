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
    "4PTHobui1sqPenfQ7bsoMwSwmW7f6fH498NHSmHQyvJg5594WnRzp28g72i1T9DD6RQg9SMw5siNaJuTMxmq2xvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bo9JfxvuekYb5TStYWeUm2Ddmhs9RtDCB9jnwzUJRb8B3LSV5QMymjaDKSnkxKm5rGD7LG3U5TusuEUnysGAG7J",
  "key1": "DTKGkP5JYfD2K9ZcGZ8Fm25kNKSLXWwSmNF335VsDSiKaxxx3yMJBXd4H3muebuG8cTbMFbTYHUryoTtY8m3zEb",
  "key2": "2EVSNubKXVcdR9RQE7ZzVZ1Kwhw1ipNLtfMKxydKF3c82LSrxNJMvjFRFwrujxtgFfSyfDo9N1v5MXr5teWM2Ee1",
  "key3": "3pjXXCs9tezcjpjZ9vNHu9a43hETCMadb7fiAFHZhj6kwP7yRamdivrnSU6C7wNEQADbc1ngTzmy3DvA3NZuUvYC",
  "key4": "5hjTJ85eqtaB9m7ptwVjn5YAN57rmLMbeAFDN8L24CUWYkZYt6P72ztpBuNcmDQKyHJxzCnoHY96W1r9YNZaS6Br",
  "key5": "3wC4XyU696eS1n8PXnj55s7pbqdf196PywB4CMMgZk4WdLCAxcUPnGbUDJN6BzchZz87sg2QhNb5D6G2WS8L3R4R",
  "key6": "3ZDhBmUtUPE4aXWEHNgfhBbMs917VxuCHGpW69DocADfvMSJKdhWrLq6ytbXWY38pn5DNMxty8wiLk1LrK3du5hy",
  "key7": "3JBeJ2u3uJ6XETVbp42Laxvxqi6PEg5ZdSavC7hUDwraqPddGD42twFHT2NMvYViSZm65WJmCM8x2fBMXda6tzQN",
  "key8": "2ad1mZFC9Kd7Q8r85QJ66UVFRacAnNBBUrymk8tbjYSp3U2TmYKBanANbxA13t5r6giF3hwH8YFcb4iED5XuQurb",
  "key9": "2QbWYtq3rBAN6Yya9wUnKmjcbFEKomyDoUcdctjJdfBMp8kAXAUHLj4Wi7sM2XPB1bnWYBP2oiXjLpN89nDgG8E5",
  "key10": "5Cb2mg1F9hvGU6ZL52LKob5DqAzVzxiyym9j1a9i4fmgGEeGgesnqPyXns6Fy6Pu5UwhjjTB5wqEiYVxzH8A2MCh",
  "key11": "8H65N4Wt5z8A4T5gWFGuNJmf83qe2nKeWmcvM8J4p3HeWF5TsXRZ33x53JWBzrTnUYrHcxhokU9HBZApaBF5KXp",
  "key12": "4ACA573vfXSJq1kNJWKgjF7XW7sFrv79N586HFrRiuwq3Refp3z9NhQEJn8TwePpa32K4QCxLEpnpuEBLNAQMh1s",
  "key13": "gBsuE5WJzHyahCXYeQxbMspFhfWNKaSLeDgriy4vud3qMAGtSmzzk7RdG9mMYcbr9qLV4jeww1tb9giVJFuBD6n",
  "key14": "twsDP1w2PP3tHNJprhyzqZaWcRW9zZUhyV4ZF6wf7mYVzXQ6SKbGa87gmCmfu3YGFQjZ55NbLvgDqhnM7XAFQtA",
  "key15": "5GBft3R6wo8Ay5DPF73Lr8ZDY6vd4cSh3CRfSfgk7xuP79P6cPqAB1vPThzxvoY9eLnGixDqWWRgZwUCAs1f4iVz",
  "key16": "45GBLEVsBXgWkHZjW8w57KMbma5mMDRLvw5ugSycDLEckff5JyzYjhvVxtr2a7x7a1ucK86wWArrKJ1fxNvzS1F3",
  "key17": "pkxTZrxw3MRF93ddyuDHHyyyJTzYUmeHmP1coGVA8Fgmo7omd3aREQQXUmRr4AKL1YTYrZPBo92UTE3DveM5b77",
  "key18": "21WM6GvvXW6v74FLRm1eAKbLYayiKzC4d6DFB3GtoMvYyCj2qP3zBn5A4jvM5tbv3RMUadBaG7UGWsPrSrqJtL7F",
  "key19": "2Jsx22tJhzESARQUsF8uY2oDCpN48j8RbhQtHXdzCMADNnyHj5ASP9jdm5FsTAqnjGDWTboYKMPTH4kBfeq4TyFW",
  "key20": "32CnbadDQ7UAFtirit2kcrf6H1cVUc6ZSmKxSHv5zCPvTNKhcypnTuJcqUGFfS2Moe1asE81m1xNur9BqPh52aZn",
  "key21": "4E1FM5YE2XyRgNBqdZJaZyLRAoQPvpCCujuMdV9FbdQAdfAj78b9pW394RwHNGxrm5XUx4hHkzQce5MoBBg8omsV",
  "key22": "5NXDRrPYrLMHmbxv8auRB8p7KYzdBxYQsPqsbHst579QiK6o3dVsgEAf7PCm8Dm7fzjU1cfzo1e64fNd42aNFpNC",
  "key23": "5VDmzpmKiktZDXHhm8mVaeZryGjy9BrJuLZx165twA6dgKdg5LiCqewir2opHr8p3RbxtZ8k1vGP6gFMFGeDHixS",
  "key24": "5e5e7kYq2HRsbtifEyPX1PxcPuQcsR9WTWJ5koLtiu3uQkrP3s7NXDUWV8Xuub4Adypvm51eTMtyh4CNExP5YrLM",
  "key25": "R5LCDmuG6JapGSjsBfiyuBHYdUJJ44m2fAZX6y1d8EnYoKHXX89Ty71FgQ4ork1TKEHdP6qjRy3RakNaAH2kMnS",
  "key26": "3DHnb2BBQQxQ7zWT4NntBqzH2xzZS4PgAAKa9aPx76dB23txEuoe6J91zpBXunNT7HwkD4v8Dw12cTtxHoDEqPxE",
  "key27": "2EMmDd4M84kdrZz3Sc1MqPEgJvCQGNBAYmLrvEE3f2kBHx2JnyDva3WQQrYvmwDCsjLSUL8wVnEzFGRpG1yVBW6M"
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
