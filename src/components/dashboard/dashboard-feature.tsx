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
    "3iF2Qhcv8tgg6gSVW3CKMysQ1NXU6xvoukUZfS1aMcpacRopLoWt1zmGffeHBAc1Bsh6D5cbBaEAjATCyTKqnE9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A4PW8p1Wv2itWyGfGhJ9DsapcCzXe9ReWggQVbkppiprgEPSeMbSxQgcmmKF3Durv9fgUQ24vNk2USKqjBqikVz",
  "key1": "2aPJXVCk8RnV8eonxpFiNAYfSucKmNZNwGKD98dr5WisqQMfjekX8Ggp4THKfKt4eePSGmRVP8fh7XRv5fA2AxJ6",
  "key2": "4T9qGDQimRznwQwpTn7ewv5QDfcD7ZeHdX419t25rLth7ofqmj22SqnMC2PPn8AS7hTv8YG3PVayHF3NFS1v1seg",
  "key3": "5oxa9kTgFzT8zdp8WWbb4eBe2BfeLMuu2Lfu4UNJKJoaDSxjD95f96gnSDKuszmie48VPaz8V4hhBRbsRfUtrg8",
  "key4": "ckugEA6To5rpFDETnfYTjT6N47pN3XGJ4EvLoNN1WDB6zjBNkEjpUQ3b9ALi9bV1Nw9nh8Myt5LAstQNaHUQUgj",
  "key5": "4tDKau9qexXW6gwrs7WcDZ4AyWDJa5FBRwgwFxHeutAdy956vrbHGZFoHA5RZAgDQ6vyXaBVYsnNEPwmp6diPNjV",
  "key6": "2N9ddUME8sSENiG7rN2UhDawXFoFev1ekKgFrTGghN7o3dVNCA6NPVCcHBV1iZQv2hYQnDKttPFaFS6odXjWEWBz",
  "key7": "Le1BybdQdSfX9RhjRgAzCBsqb2RNwVVt6rsDdYNvSQXuSxgjGhJbpY1Vi2fJ4o7e2VTaFf9XRz5iWZH7cMH1SX7",
  "key8": "5j4SfBbANYS54wzeRVrMoWqJ2H9qehLaYyCTpZdutC1Gjuv7QHoWKzPdupggjMB5qM7HPEirwHacpDGPnxJuPEdJ",
  "key9": "32aqpxqzqbhvT6rvRTE6SzwYcrX1z6kRWdPZtqzZ2UC2RKvb1ZfaPGTEGqjHP7QjADz53SgJAuAx8KECSauP7cLK",
  "key10": "kaNdEAyerbHUhqmKEwiAMntJgYgi5FgY5LGVXqb6vytGda5ADa9BXMDDS5c4zFMhM11BFHyc3XPQdGBeYsw1TfQ",
  "key11": "2Fe4QjMZSQB6Sm79uSCqg448KwSapMWKfY97zzyFeXBwCvnkoiKTDQn8MqAmQkZxnR9vLWfAiJe66CEYwAopYDBz",
  "key12": "3zEvyDHR73WHPnMDtDyqyoaHYGmQVU7ijRtRGj2eqWfedXe9o29jSmtTgRgXSFd5bQZ59LgjG8QagkMUgHMjDEmh",
  "key13": "3iey4Q5wBtuEXEGRFWtfjfjTNQukMgTwy898nnsVYY3hzrzhQV25MTqqHHcU81r5pGGjbyEHvay5DJaU8XS2tef1",
  "key14": "5vxJ9GVRA14NHDJ2HJeXLqzDSAiVcwgQCY3NBmfYjzgyfFRHFjKcMyGnuYxcM3FBq5JXZbYG9VmiD3pgDM3y8iKu",
  "key15": "ATsbmB7Upae7zSh45wVv26emWLoM2zvyxRMsogm68SXz4RhuRo2TYACbqhYcD7F1JWrVXLFU4UwaztCqp46WUoj",
  "key16": "2Wr67B8D466QuRnUXBLXiiJPFMqegyxokG7bXXynd5MNZCNioykaSwAkcgHnkLqDYqdJ8rerwBfJJrsbpP79FEAe",
  "key17": "48sZKrL29PMFr4LWx7RerMNHjrNebk9YekpeJpLnsEDASwN4U47UiBxV8jKDk2J2TzQN6HepPAVY1zwC1FVUvfSx",
  "key18": "5XkysYYKLB8qoUJaA7v24zCdJkru7mg6buqLQMHxfHbLuAnkUKeijiyavVVvwBEKVxfBd9ZYkv5BqLvwhGoxCxLN",
  "key19": "4RBCrQ63eVCP5Q1mxW17T7tWJjU5SicXMA9f9tHm38VWpNqR22W9WbqNpT83krppK1X95v1CaoYg3itxmcsTJKtQ",
  "key20": "hNt5ngrdLM6Jzs3jVGaw9Dbx6APWq1X867rSM8tvqbofEQBDREUK45dmDkuyE42i1w6pS3ij3qaQ8gpJqqdk6yZ",
  "key21": "2H552HoXWgeE8oXtqJxsAm1NokTfELzwxUfub7ZZTPsv2V98MEHXhhunjMc8aVB8abs1d853bRZ2VgfqekHFkQNZ",
  "key22": "jv1D3YEGkG6rejK1hnfxYtg56WNXCss7py2yoTw6LWh3RpvfBQGB2AjPj7um6hkG62txx8QYgrbEjRarc4L4y5i",
  "key23": "5fsNh93o4LpGykmT6chRRH2XpUZ4J7NXSVTR8fk7mcH6NP2TPv3ABZ4uS5fdPVbavwWJGS6ix23MdCF5m9hStSsx",
  "key24": "4Rmb2AF4evdZYKG6HhFxrQcG8xvheApV6wtHcXB7hgMNMVz8hZ5aVqnvV5qmTt96Ko8saB3x2Dqwo7YHUm5sHYS8",
  "key25": "5VJGYQhWcfkkRX4jMinCRn6UCF4wi3XrzNtrNr8aXxWQViVUJonaQZfmBc8rq7DMqWSrfEK3BijPtjr2g8ezr2Ui",
  "key26": "3vdBkzHBFtsXMjL9yNcu5J92k63d85XkrdFn16d7a4oN9CnjpCznwSzu4ajhKQkzUc3vWHenHDCuaWjaPnPEYzDK",
  "key27": "3L4drNeepq9YibnFZATdoaJ1VCisPfrcSGatYv6EtwTNrqH842ocVWAyEGR4tzHSKnZ7wqxH7NmmhcUXD9woUxfy",
  "key28": "2rpDwnQfd636yiNBsF7A1uS55ZTriAFVRnRsYGcG5KPQ63tqZwZ7CTpy2fYbyfwK6SpCXWmunoyCqcubrFxjdBxj",
  "key29": "3MJd23sgBce65DscWFMMvn3rScZQ3SXBWjuMobEDbRDUsRfGWjKrWvbRMmAY7LV4fdtMt74TUFyXSKQbhhqv5Ge4",
  "key30": "2aDnUyYi7qABX4eoNcC1EeRcByMXQCZzVTS8g4AQNCj79qT4MPFhZnXnMAESkyb3GmPgwaFgCVS44mtjNgtSAazj",
  "key31": "2ekq6fSjhTD8gstf52ZLbgAMbzCsHJkA4ZrQn7FUtWXpB4hJUHh1BeRm1yUzakJmaEBAE7BpWGwQ6WeAcfgucowJ",
  "key32": "4v414H7cs1Cn9QCrJ3Xi2JKrR5RH9cuMXbrMsVBp3No8aXSMJyxuwsrnmzHpopFmxByHfyCKCRcRd1L6uG9Xr3FV",
  "key33": "2Jj4MjWoVxP9LnFt5wCTZ75Qg8aPbiAvZLjNcCWEq34rcHFukNQKqNGYmLanZS8skXx6vHFRGWUxasJpF2c5iBng",
  "key34": "436yjKDM9x5po4fhzp1e7HvhWuXeF1pK294Fx1UnyrHarZ4bJtqtsgzZ683Z6W3Css9CBGL6fq4Rnzkq81TuAeZe",
  "key35": "2duZkqdkRcqUFAeqchfKRuKAyvYfAypry3s3uHJwXBKx2tkC3LjwB6jqHWQURftsAqP1Gpvx1S9kA7isM9aM1E91",
  "key36": "67MHtgvxVTapnt8jUmJjNkvcd2aZgf4zN5JwoW8Am1DBqpSdRhvzu9pc27kER4yQwgRVmu5h4H9twWEQ8CtdkW8G",
  "key37": "Yg54Kaq9Eu8fq2dvYeBdA7utfm1NHNhSkgXVKxvwAHRHVciK3wz5F75kKpnwiAxvprsxN35v88EQ5rxcEJwVyKD",
  "key38": "5SYzLQEpZV27FRwH8jFNCBK5yE3NKdKUacAqpo1LAJfHzrp7yQgtzkaSSgfvEtkzxZUN79QDhhFgfY6D4cKWYG1M",
  "key39": "2WhRVtzRdg5Wjxpm7RXZVHyjwQcPsS9YMnS5fryVHvPPAKEwmpCpvwF3Vk4NY7YusJn9HBWmw9GRC8T4DDd6Txek",
  "key40": "4CzSJrMwyBckSHGd9Ww89C6K2TGnqND3PT6UW561Q3mAg4zCXRDMaPkB1MV9u2eg1ShoZ6X4LxTqQDitCKfCCHz1",
  "key41": "46WuSoVHtUeoaTSTT161HfWs2teBtLeEZZsgCew2fePHi7zGhqoEpeU5VtwzkEvU7sdeg1PGHLPZ89ucEwv9Jysi",
  "key42": "313Kweka2Ee3Y8WRcL8uZahiJPWa1R5CmACcsGGQV3ExFW1j8w1oTKX5rKeVZJGRMu4q8htQAacaVU5LEB79sCAf",
  "key43": "3maSPTsm1DA71mfXZRRTjgyEUNBReX14gzPZnbzQbmuuceHuVUKosfK4X5Msc1DzxgHjC1gNXLBGaMXf6yomE6AB",
  "key44": "2VJSffpbvGdkn8QxeQ1LXidAUbCdw8v2s7aC3frK2FT6EaKsW571zU1QX5kzSBpeAFvhZXC6Q3m6FsmuNEFj9Fze",
  "key45": "4xxLj42N1s49k7rtndxM3SFSubtEGsFmECekeM5RNNNpGCokHmUN6dz69jsUPc9XN2dkBUx4wjze297ebrgZLxEm",
  "key46": "5tA4Qmu5K5TuVhaDoDfbam272RoiukNxRjx6uY9bn7hgmmZHW4QSgcA56AUp6HEpf8TuCpuyVFFJPt2nP2Ar5jWJ",
  "key47": "9mVojmzR3dMXaFjhtmAof3ZhHvLXav54w5TdUEUh4fXhXSoJfAzSwMmGZDyjXhAY4zhiD3iNF1G5Ah7XzTUL3K6",
  "key48": "3Unm2HcEWKgcDdL69zj5dRj9QS7kNji7JFC4H9eu9XjSJm8vpZ7G2KjYASHgoso1eM26Sku11cs1EMf8mqhpqXXw"
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
