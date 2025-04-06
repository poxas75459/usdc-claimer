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
    "56qZE1F65yos5rkJKVevFAxhKcT6JEozJ8DGM5SihqmU2Zm4zF3Rfap7WavuTJYR8gj8GZWvgKucMJsZbjZZ9JSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RhKEa4cSj2628SGCKDvLQidsFyXf51C4Q9JQJfD2ZGiWhvMvyZic9B9i22ERFUaNueV3u4sp7EwfGBohBMox125",
  "key1": "3kuFDTQJutb3nPFwCmZYXM3Zov5PtBsENQDt6DmP5dXkub5LxsbKGuKKW4DP69Km68aTz4gPvBX4JDd3c96Ui17b",
  "key2": "4KXYJVv92amu1R7n2peoB3sEJQSDhVihb7o75GXvZfK1rcE8AQb5fqWjoDwKJvSG59NzzbHQVc1LkMeQAojgiWqr",
  "key3": "cLBZiq2WJEQ7bHy2Yu3TrTw7y5CZnpvMPEpzGEJuVofGuTVXUECS2fPRhBWdALssjQNWEezXCwLYsafjiiqeU7v",
  "key4": "3CENFWGar63HohJNrUouiYZhE4REjKK1QWGBiZrSMuw9cGWvwtTUE1fx5TRq2bYoMWQuEcRuQXDRrZdnxi9xnZh5",
  "key5": "39StttHnV9rsxUToxEjbP8g163d4jF537GeJfRxLYHWaYLuPEhiFhmcvxjv8Q8Sv6o2nPMy8dsU9JT9yYHWkTUKP",
  "key6": "5xum6imLTY2NLo7L4MeYY1yS3hAAfoYohZ5cBjqmdJcp8zFanhgMpAPa5uyFN95zB8omW5JFaVJfWhU3NZfcur61",
  "key7": "62ygDTEuZACMhMR96cBPVkvBK7tsQY88bJjU4uLQ5YJzC3nF2MDfPrMyXyApB7W2RQ9YwmP1x9hSXPLaSJyJ5KYX",
  "key8": "22JPYUTteqiYcqYBjSG9MgkTJ8DV85MaFFtUvUgvEQSKzd3zM9Ytkwbeq3cjTnhADdHc3oDfnX9jkcAnqxSQtVVv",
  "key9": "5c3NU9JUPVQfQGB6XgUDtY8PkR7oyvMK8k2RW7xRpE3pfh9FHJeWzoJos6aREZt3N8xtZkFQimFgV5JhRLuxTWx8",
  "key10": "sVF8KgDqBHzQYJJ5weCB29F137P5BPCoXKubtZU8D2sYbX1Jv4NJaL2MUx1542qGmehaAA5kBL4QUeTNbLgGRAn",
  "key11": "2DfSwpiHsYiKWyXzsr6UpF9e7dwA5bCR22oGMXsvKGhVgPtwGrggY6SeSARMeBtRobxQcKfdTqPzzWv3zjRJC9nJ",
  "key12": "2Ts3mRtkLXbPry4UkVeirHLQyaxu1cTMci9L74Nhh6AYXjdywsJ2UdmuXLLoguEs8BBAJZKLp3ZcypzkGhyYMQH9",
  "key13": "4aErSZ4S8PRoVzMvBBBADfSVEA9itRAvAZkkcYha23TXCB3ApuNECuhRoQTu17CfhENtyedaEnocEFQXUWzFuJRc",
  "key14": "2EQQ2uNePST9screvgGvrLeUGBUJBz9ZApTU91vDVhkn4U5Fr2sDS81nSjxZHp7oB8qdiLJaZSgN94ssDWf4zzbS",
  "key15": "SYhfFXEfSzpScc3cE74FjNQDaK3ZsesrEQxznWfnm9m4g9q58APJn7FTTPGnvAiT47cNdjW57a8X1KK3TFfPKnv",
  "key16": "2p2wJY1Q3a4bTQUJxtvoM2VoqqKEXppPCHeSJVLuYCkJgxNRhw82efRtvJ7qAfn9x6aw7UyZe6n8HoeMqiapyGSh",
  "key17": "4GqWewzJxhvARWQA8GK7P6mkgBLdsUyXHefvvKc6zRt6QYdRBo1fRWZs2FUdxw6euYYxnpSz7En9icbqfwGTtoTA",
  "key18": "5irnvdMYPZgqBXM8SeQFQS2oMqAV43rxbo9RZyyqKzdKaeqYiVYdF585AgJHQnsS4bN4it8YVnNC2ktW95kfMV8y",
  "key19": "4oupqz8sDfgdTv2WJeYxTYnyWZ4UKYDhSwyUNBLmEVuBEkP9UCrhSnxGamXgqvYu58p95ioTKXf4eZ2E2WNzJWWy",
  "key20": "45oFdjcaZfZLgkHcmto75JCppUBMdrSoedud57MYHpEStDjZHwS6PiUDLFKRH9H8r8yQWpoLs366APW8qxmXr3CX",
  "key21": "voSv8eeQRip9zNUDWE86N7S3aBu9ZsUQdpJjyvRkmk6bQNtz2Q1uWSv3zuWAsGPqqsyHjrpZTNAFcDJ52LygdnF",
  "key22": "2ZK2jc2aPGku9dUtj4bngcktFNZfPY9qKPmi8o8VcMEjrFuTVkGMRTesWLbHAYmRUx1BHStaTGJb4JMcebrFCK4g",
  "key23": "3gGBSy3DRRMmh3gNb9MvfmBEi4RAVWnEEC1a5dXtmd2pgLaHQrDJr7bMwa4kXmLwrEreZ653GU3rzo4b9KrTsKho",
  "key24": "48izfEXBL9bacxsKRAtdaWT4m4kRbdwJaK5gmszMM4EWY3BoZBNRmxucRnXKWdgTd8TedF3p5gHeJ784SZ9qTKAY",
  "key25": "5Wt4angvv9DoagqvmEHGwtXexFkbtYT6nJmEJzorMeV6ZCrNKvhx52fYqVzRsyjng51V5K2afyHB8fxUdBHg6Gm9",
  "key26": "4GnqESMj2uaE3Lbgg4x7aSfcfBbeVkT1q42YNY9TPGqGg9NiFJVBzviYEkZdf6o53UuoC8wq2otgbGNvo6jmYoJm",
  "key27": "5zgw5cLc9SqxV5pnng245wcFT2UDc8sWzrVwmPgxkombvPWGLWrX2hBi3R39F6TVaNt67MtckoEik1Mc5rwFyMat",
  "key28": "21QcdYSnBah6GhU7F2nUcZv6cGinreuinhoC8c3etUFG5KnEVeYz51Zbp72njb3KDHCc1pTkhBMHzdAsxTfxxp9n",
  "key29": "3hScP2wxezsiAKEgyMPDjqSNaEj4xLBxqjVNJXLeKEVHY7564kv9Bkhsj6Z5Q5LSXmxMNKM2SWhYDq5gN8j9HF5H",
  "key30": "3VnxqTSQRNQwfQ5C9jPGc7CxDv5Wgi7hah8kmgL11vN5dqBGrwxXLprJP7AHrbHKd67iUm7uYprFcFci4aivSwoo",
  "key31": "4b9Rog9oXo1yfA666dktSRxqaujVXa7NitPzENNx4T51dRvQCBjspm75fCecthutDPALdGPbSXZ3BFTVHgS3dQ1w",
  "key32": "MruEhtKQTZ8Gm8VE1awBko8D4HB62QzESWRVUyUSNXU4YjFP6kNdbLsPtnpjhWGSZBu93qusb8UGF3xGbqTQvun",
  "key33": "3CQywKStBvwXk6qa61crRCwUUh8cZhf1awZJg6ncCNfQToz5DHbzqaGURtqCJePne2ncwqXb6QhDq1HyG6S7nMKt",
  "key34": "2R3Hn3Qz8D2w2RPDAfPdHFfBWQ83yJYN6VzyXQHbkyg1jBYrh2SmXDfvstk91GS1kjEWRr9PTBxwsBn1Srn7VTaE",
  "key35": "NFDiMt4dfJMquaJRCdpSaT7722rGXEDJXfxfwoCLitWS2W7gKzypXRgSU6fTcypqrcCqRdmMTjribpRQEm2kZsk",
  "key36": "3EMSEzcQnqNVzykYudCWunxpDbWbjzNoNyzE76Ni4sApR8kbotJ4sUarsRgprbWGUPM7afLSmyWxXbzPSmTyoZ3f",
  "key37": "4Wc45uUsX27XiMCe9jBsU4FLEyMiffxL9x1DLBYsTwD2mtEedk4wXBuoVTCwR96pf125ds5w2GTFywqv5TAFaihD",
  "key38": "5Kr8wRqkTCYrwSktp2XvqZ9WYmGkV9AcAS8kE8SZzcnp2hTjEoBqSFmmYrEZcMjQ9oJJMz9Zt9HL4v7hjEfefQtY",
  "key39": "4TGhZb8oWeXbAXh7M1M6GNP1CCbCNFY18V5ojkCj1aCe4MCjs1yZ3eB5Cygq2ewiJnsegg2FyAuf3WHMgk7vmDzo"
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
