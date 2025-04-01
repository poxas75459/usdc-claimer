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
    "4erDZuATq2wVwXw6UL8BarftcvY9YWXc8523Q6UDvvDVvoNameecC7cEqCWgVA8AGccn79oLJS8BxSibFJMiU6fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MRKW3QanRsGwCjG761Qh3ZPPrh7roNXbq5Sr1NRMxdzpkvsem7qGx2HEYCVMmqQhMkYEB2cNArRJEPkxhLP1WQT",
  "key1": "53DQxGjkeHM5JZVJymqi91jv2UpWwx3kFmJ7ciGf8w4sP1nNvZZgDAmEwsEki91Ym9SMJUwtDgURapodaLvBjd2P",
  "key2": "4XpyfmvX4vz5GHtQd7QSj7rtFzcM3AH2WkCGxwjGXkHGTgx77yo1CLoSCUmbdXg8UpUqkvJafPnTnHesGKhPLLnN",
  "key3": "2vr4YWF97JSC8JkpwzJWVBWBudQnaBxrcaEZ2MKaYbkWhx6SvJSDSBmkFeFEA1JJ8ggBNHN7uPdSJh86CMykjcDu",
  "key4": "4kfcHVartu4dsK54FfuyXZbZCtToeWLiiiVb4nqSM7xJt7Nz77BruaAnmjwmycCr8zLKKfcMqJ4Gu79LERkbum9p",
  "key5": "5Brqfwebb4edHr7SnSx4dFAaYgMWAPavEGxVeTqzptnCKeZ1fsP5rc657YqSuc818r4oQAzgmPRHK7D3tHyBJsqf",
  "key6": "5TD81TQidudT1q6s7N9mxrpakdoAHKPTP4SW2RmtjbUetynuH2MtDpXuXkJg2ZH87pZFSG1Hee3kbgn8pbKJNuC7",
  "key7": "Gc4mxP1KsjNw1GERgks8LetqP5BXqG4pEDz3DBB2zKXmUoAwNBRk5kvqzZKv1hQ4z1KymZfbbPiRr8US4Dv9CMj",
  "key8": "2UPGBMZC3hCEy9HcXe8pErcRqq3mZSFNEJ6DBm7ocuHgwZizyHJ8N9uBcNnXMzsE6Nhi5cLKhD62xzQQpwYGSYdh",
  "key9": "4Yodp7aYUFLLJkKr64zSATAwgm4BjGddGXDBiBUiXtFSDz9UD4shc1tiNjKdKsajvYeisepkk8ejMJpv7mPac8SK",
  "key10": "3sG2rBrmGhRqFaYFbAmC4D5E2QaJKPfFTFHrDu3FDHAzwDuuLHXemoLKN2SXEhUztv35NbVcoXbN7E2vnWkyVYSv",
  "key11": "G1mwJA3gcDZSHEWQ7DYneNjFGuWLkddXQVN38tFjKsSMFDb5ApDqEbXMxtQ2jzHBz9b9AHNS5DNpb4F5HrqEb2L",
  "key12": "2CFxXG5TckBG9pgU7ujNXRCD3nXw3oKTN7FtEaffjtqbwJW9dv9bopm6bVf9XR8Fq8tFK4N4fvVcNhycNsVUdwFW",
  "key13": "4Fz4USCsTopHQAkTZbpHjb5xUf1Vs86Pr4NiyR31twsB5Va4EntGU1jSnGUECrttUT2dCzyFkrKZag93PKkkbJz8",
  "key14": "FAhW3VxMaGxb3gT55gH3tS1mmgTYqP8z7KNWwoKEwDhJL2kHHM6LsYCzG8PqLw6iaWKUYdFVZgQ6s3ZnPt8ET66",
  "key15": "2kh4J7HNTk1qzRKxYnXaYa8XeeTH6sT54zNXbT1zYPR8gXLxdGbYLAkacLRgXmmiQs3aih86hdS2mrFVsysSrG91",
  "key16": "2ysqxvD8T8VjbzW8GbNwmzhD2hrwRc88WYa7BVrdrYLkBmJuLHoM3vG4paWbFJ3xNJ94JnEeKEWQ26z8Y4tY5ktv",
  "key17": "4tBHipw4Mq2PH7zRa6Yrky5VYzuJarGBFjbkR1sL8XYbKzJ6PjXFTx2K47jBL9FkaC6d4DHvBWgftKy7Z6iAjw1R",
  "key18": "4yFY8knYQ1Vo31CJBiuUabavYcESDyr4xQCjrJeucyGTrw8MCYTu1fjJxzEhF1eLyM8J2JxdwTeBZqRJ1uJ4ZcbD",
  "key19": "3VEMMi33MZurKuJrPsqQxBHNgpceFjArb28bPS9oVuQ6NxeMzpcxe6WTf7S69yJjexfnaCwERyFRU9Ep3asmEH1c",
  "key20": "52vuPmiRQaJYQ2FvzP5mWwEHcxY5tyY3siXAK2sraxYPeTPLXbKaz3ZjsPD6yDFtxwHxgBJtVKNrEbipCUrVrX8F",
  "key21": "53rTaw9fLWwuWRFEV95YCbnf8BdnNhRda2Gp2oqsNFc7QXeXPNtmnQT8x5cbiALzYvJXzvSY8QWnCWnLSh52TsCV",
  "key22": "2TButGLHB69oomcX8DNDvrgV1XL4Mb8RjaAjaVihCyJqJ4fousvtofUBbvczXyvSxphN8uuCpS7rgvKrfkjawitc",
  "key23": "5Wrfdpnk5218LQPW863qLUdGLnLH5sY3BpQcVAvfTokBR7BAdc1aq3LxxwUE56redjx8cRbtgJ4aGrusCHGYkzud",
  "key24": "2nsXW76zjCSboGEaDciTLWxxH4cwESYe9nL48z5pRcsH5acP8UVPVDGd75Smow3UXC7esaW6dsck7zSmhPQNVfAc",
  "key25": "3MXdkSET2dWXAB4JAttSoF8pqiiy46akCPWHxxCqhuRMSz6YbBu2unB2cndTgbe6UmijTGZxnHr8JSBUhWVGx46k",
  "key26": "3xThFacBuSR31TNdenxn8e3GsVQndTGzF5s3amHP8yCE1pajio5hHgWC9Zhqwkt7etmCY1f4hNhoYNwzXkBJ2Nxq",
  "key27": "2NT2JQsXby87Cc7sX1qLaWk2pdZ3rtyexP7JX9nWDAhHZuLBUpGskWi4PZVjDZJ5GzfpMFLUSzMgGp5A9XU2iu3R",
  "key28": "jueWeDEDVzNdhqGwTE5x4trQyfyXnac891emLrXtAqMdZsLDai8hayaqDRwmwk4aEA2KLip5rmZayfPLKJSbXKF",
  "key29": "3Q7DGtbPRxJJfpSehhjvMFWDxW3WRXtKDUgd3RHeKFLkRssBorK42j34oRJxxkqoKaCDrfR6ndZQSUXcDCgGXhZr",
  "key30": "5zB4r9TdW5EMqpN5LR3XN6yDLApFhMKFb43Ym1qdsWmrmbZ9FciaRstQr79nrRAMHfEmR3cEFArpPNpQLsUZiAGj",
  "key31": "bMPK98ojrz92ibFfh2PXCWqQ7U6yijv7pcHkfQqTQdSyPWqquSdGhZqMGfJL1K8yPbY6cW3frYpp2nPvkHnRNqQ",
  "key32": "4v3tFmRKE8vjN3MRV8HMKSi7GFBtqCNJd2jLFrmHB9V68mPR8VyWZqCCQYkrCvVbRDJNGUD8oLTcfvPpTgorkcSz",
  "key33": "51LFS8sxa2R8cTRx4zPSW2hqBiffAF3uzuNqhKxv9B54jmM4oXVcJCuZx2xceXJvjzwNmm4YuFL9zfeqTYem3iP",
  "key34": "2A61Mwo8yRMKWYqEvWDqz6hcZJupjGBb1ivppJQ2Rb7AxdnHP3e3DBVfpdjMEE83XHe7N9D7ppVvDThoeHuphgUa",
  "key35": "KkAmadrU4kkTGMsgiywh1mTNyKiBuT16Bf1JQcUHmY3oZ2hywW8jw8ShdpQkopPNWJn9iz4pxBCFFoAZPkRELhT",
  "key36": "4DJTjE9HijJBmvxn1yzs3GVMtooYX2Jj9149dgVbCv4fcyoyU9fRqWG7NjHxcQxAb543j6RVfk45myAa9W1zM5qA",
  "key37": "3vbBTpAXKSPNVDqETjsuwsRQFgLJQF7Jk1JWMbMBcPXZHkvi193GG1Bd5deCdYr6BHhmd7khGTEGzANuxfrzLWBE",
  "key38": "wDj8ughqvybvUWarU5ge7rnFoWiYD8YtWvcV3Erad5BNxVm7bAESgC1duC2r59PxjsWnHR2Qipca9JXSbJxPQiz",
  "key39": "5vpH718Nf95Kbq5jkRjfeXT1wTqhf3sWfLePDfxSZBDtCtuToG4X63NeMo67WRuBQLyQkhMAyW5sdQoPQ4GP8sLY",
  "key40": "4GdVeYbwBoYHUacAzijgucdYjYBo3t55yreRrhPxN94iRWFA23UQ8ueVtoVcd9EvrWADo9ERYXnh1EpMqUCuW5TR",
  "key41": "5Sm4RYdJ6Fes9mmh5B2z2PMuFfzBMVWfkXDF3vZFQPFT81tcjNtBT6aLUgFMF5tEc3KLbiGzAd9Qq8KX7mSCFXjC",
  "key42": "21gSBDjx6Y41UQrmK8ERfR8wuZ3mzMDQ1BZJmk85WT3uG3GvZ9XUpbAmY2EzWkyhwWTRumCmWAPDJFyGQjLfZh1t",
  "key43": "21BeVZ5akpKy5fnTaPRDpje5z2n1cP82ixPk3qjJ5AmESnwtZgPar6p8YgkDsGiPyaBGFQyip4FnMiR9H8RLHK4J",
  "key44": "3vBj7kACxrFSKWk7B5DqbpQiTsVADUbYL4wgz9fRyqiJsDAvFARvSyVakXYCULU2uEzUHyrtwEPS4Lv5rww8dFGr",
  "key45": "49SewQpufjmt4nH78R4ZgGBGTU66EYUiKDJupQ2qGszi2tGu7CshgiXwV3CofG1jxayp3Y7LFozA9K9M4Me8QMdN",
  "key46": "4pRDSqnJP7M3LwdcsMtcEF48Cuz1jtiDtWx6dzm41FkMAZEW3mvpMbLVTmJnXRf7rtTietzM2qPBgRrGLYnkkYEL",
  "key47": "4fePcVNvq18f1UGtfNfT9XnupU6uj75pFQkngeY4TRKu8WpbJeFgbPWCgcffT6XthCXeBnzNXYCJ7iHN8LQWqjyS",
  "key48": "5qaRNvKr7HAgAPAh5D5iNtpon5q8cXvCnCzKu64kVvnkCZ4ErdGLu7MgdejYCksngo7unoKUytLwYdAhTSZ42FGx",
  "key49": "4KrMQowWXxMucrQoS8YvERijtzzoCXvDDWNtm9ECkaVfiwSnqm51TCr93uMircAVxVEpR3SMDyDiRorqXJceuN3c"
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
