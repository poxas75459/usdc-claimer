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
    "8mAoBwRAWAHhmeTaggHhvFenMHoqdvBgvHjRAtYZc548s1bs6324HRqBN4XUGUGJALnRqZTobe3zSHqTKqDTAcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YoBz5w6V3wTFxKp36qw7LTHmV36MTXzoRb9ZV6BaHFaGkCcYK23eJM4hpeeQv4VrGj4ov4sBDEqBtvpns9wndtp",
  "key1": "3WGnn76QtkqMj4ob4MGsLMf313bfZUix96qny3PH2PAhPTdaDwcyq59eMmCKLfjC5yfvKEfWgJnAXPXWuavs2HG5",
  "key2": "41S4VLwZJFM7mZQnxMUTTQYiGE59dsZZVfo3SUpEMKGxA8vSwd2gXwoFmQfRXcBrKKa1MNxrvcmxywK3AFhxkZrZ",
  "key3": "5xGA4DFHAUPpoYzteRU6JRPALWKG8iMALBTX74PxmBVcW89jSrGRmPqFytNeXBbG8Fwd6PufnD58QZDZkBRXSJRQ",
  "key4": "5eeEqCnibcncrT4VvHMVe2Zc7zqE8oTQ3rbRkcfiKn17GQbBwneJdxGDiVUqzoRgzkpx8tDV5tGQGddtCqdRT3Cz",
  "key5": "4JwZj2WjjdxbvegwT3DkkB9HCjRGbCFw7NP6YxCPpoZqnPBoA3AUQWp4o858yHcQpkecnGBFYtpXNcyVxfzZwkWL",
  "key6": "2jQDoeNKq7rumXDzYGKJXhqmqpUn6ZyNYHhSUUMXNJsBCXern76N9dbnBuYWAoZy4eQarBHAZgtTEc7oaHD1ZtBn",
  "key7": "AWNkSQXXTVDpB9cFqbBWcWhSEBkvNN1Cnbi2XXaHNkxWcdaNdoKKQSfCM8wh7EqdBBMV37u8u1RzLEkse8Vk1Gu",
  "key8": "5ntfAXo1a61BHHSQdd6Mxdhk4MKNnEyAoYXwkzPeMUhNARintYHQqrQ2M1mKZLhKiYnLygs753AM6gbKpfuXma3k",
  "key9": "5rS5VTtMRrjZGfNsg8HEaNsRLJQsZpxoisGZUDCTk49VGWWXYyGyhFE8qq6KQ9aHw6WmModMWwwFDZu1FhCuLRPD",
  "key10": "m3KwBJuJuSRuxsEf6f2Sx3nHmyRixtBETV5pXSMKpJC6SeeBpAj1DzCCAoecQkWnncHtK5PWPGobf6Dzq97i4MQ",
  "key11": "5j7ncDXpDtaS93uyVcchj8KPoBd9e8ECZX5njFuZhG3GGqErUJudnPCgAbLaqwbbuRuci3bUsuWp4BE1FuDUY3Ex",
  "key12": "2woJkF3qUFjzudLyFza9oembMQXcvqSTZRvEg7cZBEhUTE62yfsAAjYGTFtMNrNJBiAADPYjcouWphYsWn7mRaf4",
  "key13": "46soZhWrVJCcqcrSMJxTGdrV4xWNVgvRyv9HbqVZykQCwJjYB1A9R1UQ5hEsiS8Dmx4bcx5qzGfPcfKL1xqAhv6g",
  "key14": "3NvX4kBP68ivb2sxdqy7saCjyA81abqV1xSgzXSktNUxFwRmPFzkkKidF89LNSGgdDSF5qGmH682k75aEhVGXCFt",
  "key15": "3jtm96SD3gEPzdjib1cXw1JcoeiXmJ6s9up47RDgvjibn5kHG1QoRP9msqtCrDxMQGEj4xj9GXMRE5zW8XmgKhcn",
  "key16": "UMPn6UERqmDFJ3pPxPNLeArXZiAcDpayBhrcWdiTjnywddj1mcR9eeynMWp4VYSvpXfVJusRhJWEExvj9qhiV5M",
  "key17": "3HvTvG7zbZULUd8K8zrpSKtBHooapByJqRoNxh5US9SuhAXbaDP4DRvxg4EZc3SBGNtqfVksGeHAVPUBGtbaHUUG",
  "key18": "26UQtj9p5469pFQZZC2NA369VqMsorqXDdF5guXmL98PNymCz4wRd8uBHqidGZ3KRbT5URQThwxNVJwAA5musrtk",
  "key19": "61W15opcWQsvbZxXqqAd2cEDVadXVsBsbBM7EPu42ouJW2CbnKghw2KCx7FraKhbPTvrVH8AQM6fmENw1MfAB2S9",
  "key20": "vigBFdAcy28C5rRuBxU6czQ82jPqNT4JpJtTT5j7w63o2FXh4zebQ9E2MXUf2BbxYPBuZLYYiGBpm3z6726s7Ey",
  "key21": "3MAPHRxaKDu1Fdjui3ai1qeR4LEFLvybjWUbQZFYnQebkzffJSVAbKDsikhMQ4AhwneYAnihhxtTYvgL4WZpktjc",
  "key22": "36Sr2kZxDifh2EzKbtRbJXan3EHXbNuZKhMpUnbnMKVZYAfToib2fPLzn9zo73CTTKuvEmg9AVAzRDmRK7DKN8ku",
  "key23": "2GF9NisAmHcosf77FL2pzsxHszUEDJkRP9PdfrWofdmKJFRY7wxeFUVJQyBUUSKQhdryTPBQXSZdrEvv8Ewrrdw3",
  "key24": "4gHG8FWdBcvaYz5UkNsgSUBiR4G2pN235FShkuECnfWrr6VjLhAsWRgo31Cf1YH7fsoCcWHhWHeTxCNLiRZ8Knrh",
  "key25": "3wX38tntMc2crxUD1HTRmQRcSPhdCZVRXc4yECkR3F4EA8a47SFSj9VthZPPn4x6Q9oSv9bNbnDhSSrGzAb9zjyv"
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
