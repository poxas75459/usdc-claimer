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
    "2YACfxoTdiWUG2n1bTMqTXtpVbgY9C9HzxQmXhtXS2qSW2HvK86unasULwaDJ4hBDZgYkpSwCuJ7LgeTdhuzPwGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "517vGkmbQeGX6ZAurMKPjyGkUMFbohGeTRwZ1E9f115QvdSAKyZZcYFcjyanmKeWdD2Q6XbLPgjRj4oBajFN5cKR",
  "key1": "2NeKDcb9PnX4Xc1GtMQXdEAgZ1orFNk2BNN2LQDnahCUnc69mLxBj4NCgY6tx2j9KeR4ydVzrTocUDgFoZq3SJqL",
  "key2": "bhYqCmcyinciNFnsUhryA9uHJHN1E4zx1VHha1wDEEiYsxxM9WUrLXPQPbSYzApuuvE9Szi1ozLARi5QAZXmyAZ",
  "key3": "2EHkc8kT5gZQivgZ6TmCgtNrGAMkCVJQaoMpj28Lsi1GQj49NBG3wKGWje9jrDnXgQCduMfwTm1fy4ZKy2Bn5Xuy",
  "key4": "2KzDWwhhRPrRKFuUTjYxxfu7LhUatDxmaVzq9eP2daJyjouxemtf7TWkecSupoQ6y8ZoZDdc8eUHKsauytW3qZmm",
  "key5": "5xmdMjWKA72oHgaHNAQQZ4xjNpXfsvh1XeVGPNzGQCQYuVDs2cQnX42KpUhpggid1KaYuyRDQ3KavS9nHVPeysJP",
  "key6": "RbX1ddfyXeWE4v3he3ygWuVrr4pmeuA2yu25MVYwnREBTc2aVdLEnzwygkpFatgRzxGPxJXfeqC6QyT5QtsiEkn",
  "key7": "5s34v6TonP7HuxdACTcbdAqb2hXACTnf1hbsFdGiHAmtFnV14xSkE1QYtVbzQWZxaRmXjSyeLP2bh81Gbv9EwBtK",
  "key8": "214ijapHkkK6asKE8qoNbKoSSWMafUhqZcXqfjpspfFuE6ir2kHRU7xxyED6UgUpwBM5bVfmMcCN3tbox2Pz2nJR",
  "key9": "2xTpidXt66nmmRHReoF3KUeGTz1NrhWpBBvVDAqadiR8cu1TFY92YCYLGcCqajJsdFSY2JJm5wJJXHcGPkYD7uJ9",
  "key10": "35RSFiHNaF8jYohDSD4JpiT9Xcp5Sowkws7Xh4dzBnuvsEvSkva1LSPrz6t9n9UmVQFxYFJRRvVWappufJyWe55i",
  "key11": "2jt1q8azZuwZ4KoDTxZDPNaMmamisXKxLaV4dc1Tc8HeT4E8JKCzjDafeMHe5ukGu2u1oBPNzVzZJu5HBR1p2FFL",
  "key12": "5uXGafqBoD5gKCSFeuLFu8oaidWaePxqcC4Ri354Vftg4z7VPKWtXpgD5JpB9L7gViTwcSeK6WVVDFyyjtydLCFf",
  "key13": "43mWKEKPjrzCasPbQ2JYXU67fwfAhJVRbsunYhD9wKX2HCUSwmkX66fRMqMW1PPVaRGmx86SfPPewZTvU7dbAn9z",
  "key14": "2eo8yxfX5XEqCVmwJCZXELkqnAS91KiG3xfkc7jBvds3uXHqjkXWEE6TX81Ac1TGcycBD9vjvkcGK9YjoG7FDr2C",
  "key15": "NWRnt9gRihY8mhbz1Q1bsCbwFq4qbWz29GsowSEkvEJg1LoAQtMKazdf5gkkz1euDuHEC8qxTygiciFxexx8FfQ",
  "key16": "zzYXomX48GHKwUPXZJ8TyBQniZDxTwEUj5K5JNo1sHXF27iviuePCJk4DMziGYrhwBuvT4f6WoFWSJarnC2Ecrk",
  "key17": "Nc2o7wvr7MV8VBhhcb3do6y8qUryPDGk79zy9BtQo7meLFjG8nizba4mnRSptJkGvvSMr5fPPVrXkoA7LPTo32H",
  "key18": "3PgJf8WTdXi9g4A9RCsiLEWWD6XECaH1C1ESS3ybKxtsSG4SirEuBhTBza1D4Tp3nmuFSFZEF8TYmNyahubQK1dy",
  "key19": "CrYCAnXek9bAqeHcGAQhnTggDXN5LR3L2nyHErArC5vkf2CrPnV68MijoNUyUpCEaud2MDuGGhS54FU9NhfNbMv",
  "key20": "5kaFYfW7w6uafjbC3jX84ENnyYLrVUE92FmSe83tdnK815cBLhEyeRisG3MNpvqxFiDam125wqU6jnfwMgR3ctkE",
  "key21": "4JKQambZ6wDWvL7sGoXyJyeJRGHhFTCR1hLfXFCGZNBuqPvsoBvDobt7ETg1GpnnqQ4evgqev4cUgS5BzTpVnQe",
  "key22": "4443EsJWkELDjB9u7xzNQTr9scmPn7mVpe1njU5Rm8UhaC7adTRh6guT1bRTo9GF7kpX1M4jx6PzXWtgTT1R9VUS",
  "key23": "nTVoNBuAzcpybudEL9gHiYGAmfpvnokd38JNEmMPcR7cpkJWRfP83VJxSTqfzH3JwcaUiQNR95eoxoj9bxbhoj1",
  "key24": "5WmjzV1ih7E3Jv1Z337hMejJNNZK4J48ebNTL7hmCGHP7LsGikfqhGVRKg5MzjD1UvRaCfas7dRKaiyutnaTy4RJ",
  "key25": "2Wahi4mA5f7GfsiPG4y1bWjBwht6zft89yxkXeKSybJyUayFk7V1NabyYorK1UBmt2HbWCzkUmWSdhZSo4QZYhqN",
  "key26": "4dvEDFrkoeeSpYYJkadG3S7jpDR6grnVHCgyfZR1YSF7wTbVk5PCctwYWMWkHZdF7DAy8kxFXwKuZ3uPyUWxy2Ui",
  "key27": "4zRg5kjuCz2jEwu1gxfncChioWxNFeXBSQvAB68GWiMBqn4FVo9xAGJYF91nbkqbbu1zdLyY7fLiSZNzm2drbGz2",
  "key28": "5johA9GswZazDTBMtR2UZ7fXVVutuXZ44Z1HZmmzMX7nVg3U5FncHtH58eEJwCaA8jksFnU2zuAvWYtQuFV1pn9L"
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
