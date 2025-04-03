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
    "4j2YtSB2bd1cvyT7barVn2CMVGKPxEjueog7khNR7EfQJyHMyCokGUrTbD3SoJK4BZhgP8LQDN2nj2DTKqPtw41j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4utDQCfLJbkPQBBt3TVz5cELH8V6cJ6fVK1hQxxk52xUU5ePwjxzpA2uyeFKZc5rKSeL8x47dKK9yATGb6oN49rB",
  "key1": "57vvy84SWSK7RzBnCGP795JZ574wvuNk7Xe95fgCz26zcfCui8P19JHJNeejGG7REKzyJYhZHuonL7bMigw8rnNX",
  "key2": "3U3mkWkLWVVEDawuWyHRB3rWyAiCUdTho7vdB514TiUT1MDXinKuCx9paE3J4FyQ2DVGFcLa3WYMmwLHYjDu7P8v",
  "key3": "2jHbudkfkTEqaPgeRibUPaWBPGF7Lbkw5cuN3cUymEj2yW2JXQ9hhR1RCFUVioHo2CE1o2ymNV5XDxBdxzXhFcQE",
  "key4": "2qf2fKa3RaXHhY8fZbk5umPP1wPyJZstM47ZGDTd59sujECY4bzrJVhEBbgdLerDMPxEL9DEGC7uLTaKedoQJb4s",
  "key5": "jJzEANgtp26ppjjUY6Uhuhqq9PnMdSwGmyvmizZ3d4Qd4sePfLC5X58SNQN5AQhd9SqZRHsQGgQxXpEdJwe84WA",
  "key6": "66HyCgHDG4QE2psyKnFVgNULzxCzfem2wCBhe6qMdo8U3SijkCMqEMM8hXapHwGNJWtVKndUi1fhL6fFa89Sgs8d",
  "key7": "BynvS4q4ht6ERe4wKZW4w3dgnkkYjFkvSGJtCnmxSsHJHwo3mV47gVGHeuDJChJp6QN8ioNuvKPBm6SRrBgCQDi",
  "key8": "4urBHvX4AisjXm7XX7Eu8ggvNfvN54ozVXwCC3uzSwBYmTXqiSjRYUCvxYq52gCwFpFqPAPHq9xk9iDFybAXbmMK",
  "key9": "3Asv3vYBCVfrgpNwi2rzNkqU3HA1jUWS5ry3hV8vqagvD4Fwxi1CLJPoqADUc6Mfw4sj6iu9e33gmiB8efsuJ3qW",
  "key10": "2X8yLzmEAvWCkE2vsoEXJZzDqeqjqcic3FnDiiRopduZtiqms1mtDV6ima47HjSrknx8qRZtQQyzggTqL8jz6jxi",
  "key11": "3aDwtzD8YUr5NUUvnNjndBYVvum84Ns8qF4Zn9bhVf69sC3vksPbTiAzBA9Cno5BwUWGhLPAbhx8xSchThR2DGCQ",
  "key12": "5stKwQq2rQw2TPmDrK52A7fiPYCTQgGN1tnXhdSXmySeJaaRShWcmCueLGMnimvKh6N9Yj6ibKSyPV6CZVkp2R6a",
  "key13": "45bkrhsbEPAYLRieXsyEpKbGbR7PcSfKnAbKwaMQb8bdAXu5RqBczwLr98kYoCL8969kJahK3jN1BkcLeMYDLHdq",
  "key14": "ZGYiwkThwA9m14xY9izcwi1v47UxZmv2trq3evpouMk3pAMsMveQzE2gw8ME7MxKemttWq9ZxyToY4YssDuBJkZ",
  "key15": "3v3s6x4ttaXZ6W9kMQEjBm9KvhQGStDF1eiMjn51u4JLnYdcD2S1eJTn32EsGdVoSe3kieHSJy97F6M21HNcUUsr",
  "key16": "37PC5Chp8Qoh7hmoJXn7FjFTBmTbiTouF3n5mZxy9sCVm6Dir1ugCSd7GEf9mnGxbgVczdMqUvWDUiyjswo5Hpt5",
  "key17": "65nFtCVbxozN6PhVwwELA34md2ErZeEdikf1YM4RVJoDJmqZfrQ1nXXDaXENtoAtN2ZzzuLni67Htoo7QNdstadi",
  "key18": "3UwDJ2fU4SSQJXJ8kn5Eecgm1xDfifroUiTN1jVqjkXcqci3ju4HUgmMkGWgRi6JGczjGBKessqVVCgfHf8Hgd7M",
  "key19": "4dZS8Xf4n5HGP6iCuwVs2x1W2a9HRUEcuSvdxJunBfci2aHnp5CkrC36DvcZWWoS5MseY1Rit61Ny6sHhsxs7U5T",
  "key20": "4aHTNRN3CkXMedjKeGdVprTRUcAWa9gpBAMqT7adafUwg9CaKTYob8HMujavPamxCjefFE8xkcdTg7JXpeJcmvKk",
  "key21": "21caPoSLkgL26Uz3STpmEGs8Mq4NpVBE49GxAdvBPu7wUSvngpHThzJJB8LdSyE8xwmSURgoT18ZrxKujsXmMCAb",
  "key22": "2mWXBETdzHeDS5tckB22SP5NBxEuUsx4y2kkGxJbmRG5JQbVt8modkc4uwoewhbfWzg5bHHsoUowM7Xpz94QnfSp",
  "key23": "2n4GXAHqY64KnSEGmXm2LUwkjBtKHZSaJdWQkWrqJchJTXY7qrJbYJbePK1HSuyA1Si4E29Mi5WtjTuHhcCdiw6C",
  "key24": "5bjSx8ShMDDpiPdfS8ZWNY28WrdBbzq48dFyrUCfSmiQkyKetzo7mQe5DofY1WgW9tmGkc2gbiryiJ6u8dPgChmC",
  "key25": "2X5fz5ToJ7KpfxfSYoFMXKtKJPCMHh4VHboF1qaF85uc2FoAkkzp1fjgRCxqCgXVXCWrtYP9hinTwmCV5aM6GFtG",
  "key26": "4N2aD5xTmjfnjk899fZcgsSbx89hGMNse245SpViRZ8cemwiP1Npvqkfxt5SY7RKSAJTvW1Nr6n8w5epo6Mdp6jB",
  "key27": "FQnyZNZGNrh48bsSHsknaA8rBf2MLhSavH5sG3bZgX857H6L7zULice9Sb4gxR7NB698MrugTcfuQRsVZhVMvRQ",
  "key28": "5RAN4y2g2vRf7k7ctkxXGvRM17Uioxi4btrBrnnrMCVf4uftWpVkDu8rKsV7RFd9WKQKXQnQFKkohjgL5u1U7ttv",
  "key29": "2FR37WyRo1J2GScEGcdwau7i7GXfSyyQHwg13ZHF1ZV76b8WErLtMeaNzvfTaBeYJKUrLgdy99NHf1YtPrZ9WhJs",
  "key30": "5YWkTvZ6yfsaBV16cuKeSohrbQwB15XrkSmbcc8AE6jzsjxb6gNd2bPeTG4dvYbJra1N8i9gpbLVaGMJzFwnVXaS",
  "key31": "38d6z8ybd95GkR5ojXA4K9dDMubBgmyU4S2rBjV5ngfjMCkotd2pBfsrRTQaF3CWvLJun6xtANLNDX1NTN9nzSAp",
  "key32": "3SACP7zkafzCbQRKbbCXxPXmezzowixVqhhGLxBEHFweCqCtJmHG46PsFk4fXtXn5oQm9arirf2ww8is6gfibrPj",
  "key33": "2PkooDGCoowbmmV1yFuMzgUqFBzhbeE3mAUCd6uLQE2s6Cw7EMEh73yHq367nFpnhjLvYiHTF7AT9UhUAZ8Jnm7v",
  "key34": "56m82D3W596gcvkPBmGNMtBhtmM7rjPTgnNFa3mgmooMM9yU9GS8LXb8xbpnsd6Zbk7yTu3ZRUQWBKb8LqoJopFr",
  "key35": "3UDrv7va1kawhWfbKGaZBJTcDdTRb1AkKTzccbC5YNwHQL2SkRa5w3tPMJJjHXoDBMtK5TMkhPEHbLjMmMF3zn9H",
  "key36": "4u6SqX7gNegKYtED2fFiQxKVpA8nRKaxpz4rK7cYqwuu6RyWa8LbcWdxWL9kA1j9TVSdePgsaz7ESAPa8b6ugTPw",
  "key37": "5jznxLZLQhbmh181FwQoe4doLCSyDDJ4AAytm9w8dafTev5bnqrSimHpiLxvycyUET1Gm4jYJBTwkJrY6YSugxgX"
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
