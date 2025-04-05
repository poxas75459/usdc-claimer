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
    "3qYSjQmvFV1ktbNpmktJ5ChzUQcrAdU6w59arB2gAmQ3ywS3NU3PccYbHXxeievZQYDsR38nvKDF1u1xNpeGmLqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNEPpMQ2xXjPQVpqXyVRGndAFcMEpJPdUJ2HacmNZdxX7r57b4Gj5t9fgAC3rHKGjDXoyCnLAt86nkTgZxA1U57",
  "key1": "45dGzrGeP6h7mVabuh9vxjyWuq5rnEycHHeNgaSg61txWiSEHNZP4pm49SBiMr9NESY5CDUPZuHGRTaT4wQmJ8AQ",
  "key2": "568wdoTMyakkHwcHo4HcPVseM3Sk7daNuQsiQdWRR5YMVoC9tASGSpQVRWdBVbuAf8rM4k3QH4PVFhzg4YpoHoaH",
  "key3": "4T9TVL77TgTc7ddr5TCUvqe4Qyd1m4go6Y8yszdGaDGwjS7PJ2MwEFVfMjS4CYkCBQEa4F7favk6hxdbvJD21JrT",
  "key4": "49uvdNDxDroTsdQQRTCJcDUKoBdStdoDrLV5BjUFkq4G5apZU6Ny1UZTfqdbWumkDHsiEnM24Vkwoh4ysoV4Hpyn",
  "key5": "5Q2f7mQU6PdLC48ruLEReEFMyETV5CvNzo6tf5DVYSF1hg2rvBw5XNdWdqWPYLxds2xosjhN8Sq9nXZvneJBp5GR",
  "key6": "xAz2rmL3nNZqVYSkNncJ1zVTsBpdsW4px5jnXrafAW5WCBZXGdk5ujHmWn4qhXBQv8rMuf4yCBHxPkPywthM6LR",
  "key7": "5xYzCLE2Szorz6X1e2PfZ7vZ5AhNDPo3tHFAXF2chjG644BQ7tyViBvdLUrB9thTQA3dR1iCMen3JjvFWTm1dN3g",
  "key8": "47YGhNwmHmv5wVTZ6xLk7QEuUgaaTMXuX7wAivRS2FujzCercxq6xP6T8okPxibrw8TQBYGTzwfSBmZVpT8ubMBG",
  "key9": "2gVNTgvEkS12t1ZZM9baARKVYV43YYYRWJ3iM75pKuiEHXGLkVCmso4NAB6BAgGqh6CTKtSVyUouCec6xcLdyofA",
  "key10": "AAicwQZ2bLRsQLkesVjFzY9KJkZg3mLJ5Bz5DpbmUkrCs9XPAjTQiTncJoprVobKCivbmgSeBu5o5mWtyjPoAfr",
  "key11": "3SBmF2TDzwoFgoJt4zekVPNuSjCVekPYivEGP7jJu1ngLFh2M4HMZEnr8MLhf2GnaM7rWdHCP8bwdSQU2WiEYrNG",
  "key12": "h261w9Hp4mciSN1nfgNWBtM1UDMLAVgATwTYMAmLszu9B8U1uyzKePmQAxqUDewmYZwVgaFCygM6HJaSTGKesc8",
  "key13": "2QLuKhyubNsAJFBKDh6MRhET7dCqC25KrEw9CRS9Xsrd6C42YtjoU3gKcnLp2Ej9J3BkFgiDvd3MpWFgTVajcyyJ",
  "key14": "w6QzMM5F1N5yWFMejvgfUz8RAUGqQR3rQ7TRXucndvPyx9Fcb5G7E2UpgxL9SqDbjWfKjHLcNGVFAchDx8tvg7U",
  "key15": "4NxohrYBJBk5SBbZXTTPfpsbaN4ogrQXu8PLjvcdK56HQCXmV6p9ctFxNcBNENtTZJ1LRxfcJ8Xg3uD5Px933SG",
  "key16": "wnzrFFqjYoJmU7Tjpb37Ghw43LHVJuuFU7szgnN5qtEe2AEy6H3sa8NczQ6iDhpheZDzgTLq3HuA5PuXAarkkte",
  "key17": "pNRUm6SLX4JNNkcgQBCrHR5ZZQQqvBSsHZmTD8ttJEYCagHbUtVqhFMvCgLEmyNig2vynXWMs1Ea7XozFyw871Y",
  "key18": "eEETJxYMGbgiExnPaFJXnbV5jp85E2U2KdKM7rkMKdbu6hMs17KfdAfT7asxqiR5qDv9iCTZntmxpxdFk8VLh9Q",
  "key19": "2H27GiRD3Lf2ozAev8A53MBnokapnKniuZYWTCzWeHRDNpv5Yn1f5mywU2NVktsFheXybiqrt5NeMHePn9xVzJ9o",
  "key20": "55b5pBKNCbqGGcTarC7X1BhbZYyso8gW2n3Q1CZJoPnbsnzVCmVo3GPjDDqfwGHoFJRBrDaGmhG9zY1YQeBKBALd",
  "key21": "5WVZ5pk9CjjryEqwa3THKA2uhmQ6JzALVCLjtcGW7CdcXQw3rwKz3x63GDfbexeAtpkQaubbRkxCRjsE8rzMkYaL",
  "key22": "3navz7NSkyDhiPHXPznGc7bhc2XKt3T7jWxy1nop9TQxj6Az3nCbRXHgep67usYAiiijB9zD4vXeDPdgw8ecjdZF",
  "key23": "3LSWk3qEqeoS5ghVJ145oSJde9t4JHKsD56g7qBnB3fWdzbzaK1pZtiVjgKYeiN9TZZjexHye2aso5LSCRyTYhhQ",
  "key24": "sVedr7mFZDVeNTWqDGQQyCZzrAr8UH4D1u7AWdG2jgSEyvLrTXLeCz4DFVoamDv5ZsLirT7k2kQv9mfCVvhykbF",
  "key25": "4NCJg6XVmzK66hv8yS5TT4sRKoXdSLNJzjdvfD6cHqYDWp63RtRvKr1dmcWdA1hu5EiEJXsKvLgY93xHi6hhWGi7",
  "key26": "4AmmGQxRWMWCJBzoJaUotQBpfv1z6uuTFU4wBtTXrd5pXLk8thmrot54LM6vDVY6VdY6zinb1eeze3fTHfSkxurS",
  "key27": "4P1KcvvkbE6WRQmqAVAptkEnfpicQxxWi69jWnBM2hzj8cZkTQWBqQayW6HNtsyMQyLPkT6ksso8LwabWnx77wJ5",
  "key28": "4T8PJfMQWe2EFHfH79ymqnueG2jAineiSizdfUCcoQQFBJmQXkuK3uhUEWm3otjMpcctJoZHtEsVWUrYxBz8ccXt",
  "key29": "zG7gC4FKK7CXuG2aNZpDoH1KbmxuFkQAzMQPz8Eqe85CZbCNTJCQWHvUtSXVtrFig3ZxcGD3UkVao3f5MCk5VdT",
  "key30": "BrWS6jXMpKUgaLbyyTVMFLTeDQSaTB3K2RCqb8vcUCZrn3yz6LNyKrvJJiMUVyAm1XU1JGV5AgagViQbrwq1Wzp"
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
