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
    "65CeWVkXqZdg6fytwt29vDJLN2gamrjHo4LJFVStQPaUTJYLPBdf9sZNprm6pCGUeFuyjvD7Stw1Tyko9JEyacaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x19SyZwPQ2P8p6esE11qSxBJ7XEv6Tg27WkQkPYAxEfzrXxoYpXAEMbmjBqPs1P1B8wJf6Z3L2sSiNUKr9vXKRG",
  "key1": "65mHdxNZNCbwvf8sTFsgdjmB6dFPe8oA23YG9vz4yM3wf8YotNa8hc6tS2GbK4DH534rzPjJR51e69r6AV9M39dJ",
  "key2": "2f4VnMecpEjncmuZ8D9UmVijfxmUzS64SBPcbWM17DncXDVhDVxwyVUQTc2bwtAs1zDLNEnaUy7KjtUdu4iFM2nu",
  "key3": "3DRVRQBtVFZHcYpHonfobhdD6SKzeWQPKoZ13AzNNzwZNcyK4rTqn6SDLQ3F9DPLVJgsKULbbac2uLTMMQddD4Uk",
  "key4": "4HGEiKUdvLQXjDFWiCGGgr6AFeTMfvEsjQ6FKn5txXhm3precZC2GfsdZx6oWnZ75kT5nh7QiKHVS7pS7hZ54KeJ",
  "key5": "imgnE1ZqqLKekng1vk7x3K1XA1GGnUQhfzfVtxHdTooa8ZnVFywm3euong1qY5jTEuQN3tE7zRDjTpcizcTgkRp",
  "key6": "zz8ERtE5rfM4wKB1hxWy7vQFBtvAzWUkNtPKMCQxTxZJADDC8eYyZaebfSp8ULcWjScyCG181iCfG3iKRxV15hD",
  "key7": "3LDVmTYcHJiXQ3UhVWBsz6PcrDmTm13avYREU8kVj49PgJeigRL6hDets7JZ1TBRtdYSkSTS4y2nLV2U2pPRRrrw",
  "key8": "3B9soKAapw7sBBqu68XotzgUL4GPjmNd8t3uijiC1fP4iKVoBQxVDYgefgwFC2WwpwnKUFRPW7whtNBnbjFiVGaJ",
  "key9": "4oBD5uJdNbCdtgihRhZNmEEwDyoqwW9FZNDXdNaWkvWPiENcbUkaLuweA8yE72f9yXw5uXvJzwQRrPh2vrTZceYg",
  "key10": "W2wTMbHQzfx6nTpPNy9wBXbkPRc9BS7dxTiLFKV6wmerrokcH6drmKmwJcRf9U9aabKVtpgxBp4NJM5fmX1Bx9f",
  "key11": "26oW6KS9Qac6oJwzbyMhegzJW59uMhLdg7gfsQbQHV1ccN29BdFg1PzVcwftnQ6EeA4aVx3g2vkA7bm2dQyPV2WE",
  "key12": "4BC8esfrrWN6e9Fyft9J6rYLvJrRkVs477XrpeEpY91J2sA2zbfJwgwjGfDcxxLmBAEJskbBnWWRLdxJFW7uCGQv",
  "key13": "4SFH3DayCTYQKKLYa7bWNSwX3wZZPKrGVJxdwwPDijxpKUnneuTo66JKtjCxPmyvU8ym5nJvXTHeWnT6RmSaTc9o",
  "key14": "5j1qa1xJ7fvmgpx7t9ng9MChHqQN8SRL9aToGaEEKJgDuTN7ZhvRT7NZ1WoSwxCDGA73n5RtP52F5nAGErULD6HE",
  "key15": "4q3sr3KkFPwqCdMGuNauLYfEDerXh2b87efna9GkU6n62JZERtQbqJRLWxMWG8Stu1V4SRaRjH6jnXs73QS73CCC",
  "key16": "5KevbUS7GRdN1pqUGuhPvzwJEULZwo5g4ueMhckcTva9udpZWAEVPh5LsN3EAmYVvPRfAS2uo4drk7qEF9iUgYVi",
  "key17": "4HoPenmwr9HFx4gNLzbodAjudLavJNBSbtcXXsZofdmfA7D2ZmHGad8NQYjt4NzhaUux9V5KZd5B2yMkxkFEgiSH",
  "key18": "46Ex69gnbneA3Wc9gnNB462PWeKL3QYuJkg6jnJpNf2S7nD84prMAJJWvQCtNsPVS9CvhVun5w8P2hfnchCyRTVd",
  "key19": "3Me3WyqYTWHUAqhB15ErSE427BoRE48MR7Y6qa3YMRVBJ79iL1YXmugvV3x4DN7toVJekSHZK3XM58PnXh8oXJNt",
  "key20": "51VrRyXZrUdBnpP7ynjThJiVuu91apTEcpVors9wFLvqDLPWsVRdBqp6soLzKxvxGcmW6h6DZbdT79Fw6Yvr2UhH",
  "key21": "4LPJ9bczUt9nXwnfmHKSo42S7aPAR1hcN3TThLfvmCyfRiv7n5T3gx627cbywogyDoH8ucdTdgj4hdYHAFkJC5tb",
  "key22": "4rUdVxfGQJfLRSoH4JwZ9FX5kbychxpWefhb9NZ8DLbWCesuxxbMGwGLh4gxPbUDmHJkbdTvrV7bxbRFCykY7XMm",
  "key23": "4bYK3pjs7TQs1zg7y6KCgXYBx3fTR5YGCi1W2hRi3TQkUJJEfan4CHwuD7BYx3GdRn3PAQr3sUiQkvQ9j9tTZ6Zo",
  "key24": "56dy5pGRgSFtHifLoZyeVGtPzM59S8SVUU6638Gyraq9aryRmFj7vHWUVizvPpQbTKwsugiD1Ur8wW3AodzesBtM",
  "key25": "ugEUoRS6AfLNR9G3mJZtfUTKZL3D1DdcxfHwnQzJkkS9vpZqrGoDiCwwNq7q4AFvdRQgu5V9Xhh8sarKwdnNosP",
  "key26": "5waT4cq5TCLnh2NoH1XzsfcnTzKziRuewyHvgDCcMMM3gqo5ePmFA8iKdjP3ZeZz6cKeJ984xpEgeenYCTzh3P5A",
  "key27": "KbsPvJktx1AgKVXahz4jrvikpc1Ru92ifFyZzEtyBpfMfLJXn64E8VTDxeRsB786qcVHFPXdCDsKynvuP9SM9ui",
  "key28": "2JvrDYeaxifBCV28BgXwtp3yTAYKzoc3VBL2NtxK7JiwA6YQpzrUAsKEuDJKoMVdrmCGowADa8C2rjagcimfiYKV",
  "key29": "366qJnhc81FYPyBmzqQZXHx2qPABVZkmcMuBrzB52VTC4z7hmJfRg7tptoj2PjUovoKtaoJrZBN5T4ETXfZtqbW6",
  "key30": "2ESsYCdX8vsScLXxkG55cHZTSCnCu8UTZXJ3S2tDoVeFaFwt3NbR9Zf1ieS3qGUsPD4UNCrV8wvRXnssBpbgzUVQ",
  "key31": "4jzKo1hggLnSZQ5Nfz9BU6ZbhjMUC1rnaNEpCD31pVgecoxvNjc5ZFs98166RjEznZChVU6nvopRhtUYtGeZ52MN"
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
