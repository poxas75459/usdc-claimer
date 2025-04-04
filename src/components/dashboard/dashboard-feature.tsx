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
    "3yUXYyMbuTBBkpU1Zu7xigAbqfqNxBoYCjLwhFAhXFnDXWGsuJLQ64WhhRfysahdmdxqZvGFNyrf6VpFzunSYXrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36kvcxcxjAfNYHs5jTxsGWXkUvPqoR7sdUfLN7pDpUsV9D8tzHLsZmFVpunAQJFqFUvNEaQkx9zrVydMwCTgDYmh",
  "key1": "5SMhb5G5ii4CmdsghrZgbN95yyoNRdwcDrYbm8DH1EWZ6fWyNSiYuGmTajNAGoVSAJpWB1C5bKkzbRCpvMq27GWV",
  "key2": "4YRbTqA9Zk9oicq8hSJ65R6LMqMDgnSofzRooP6uR7zoXUsg5J3WM7DFunfgRQCY5PkAk3wnY6y3MsPMizKRor5Q",
  "key3": "3H5DMW4DMYGMHEUD4Hdv1StZjvw9zUumQ9XMMX35Ytit4MQcbpAq7pz6zTqDRnKegpbXXdxqDL3aAT2yV1gUihfN",
  "key4": "5o9fEaNHUi2bxHkN5DhwgVxU1vj4w7YTUh9D3i43YUE9FbJECKkXsQVyCHYyaea1C8E7u2Qt74yDHgCUbeLVBzPu",
  "key5": "3j5gsB4F8Exh3m3r3oNJ4HKAB6camznJWEMjWVJXzihFZZoSHusrTAX9sQtah1wimnEM4cbzWoWWuTieVMiWDnYo",
  "key6": "3uJsYikEtwvRK4MHhLpJGM9zbXydmxGb5xhybUMyiitisCJxQ5QZ71gpEHHjTZnWMjwn9TgZrHG6dcCLYbfrRY92",
  "key7": "3bKCsGk89e24ydqjZLHmCcpJfJNUKpcWL6J1TQJCLycySK3YaPBHgJafmxkRSUJvZ9F1iMEgMMerreYKd9U3Ujt1",
  "key8": "2vCmCEg4CSVbLYGsX4i3WSLv5BxZrRPLCK3ZP8QE2UgU3JfBtmyWjnPcfouJrJ6ouKgkL3fa5hh6aEWeba1pKswR",
  "key9": "2Nvy5R3MWvuxgkBfJsQXVZK6saFCVirCo6osa6Cyo876PvhnGTCD71Vjaz5AFBNC1s3nv46xGnZwZ7XEQhadwVxV",
  "key10": "4n9Zhsw5da3ahoNCB46DZD8ytVce6QBm2xRKms22rWM6kXJA9cLwiB87UziBGaV68Hn6QRtke4W6w6J3voFTQFPw",
  "key11": "2YC1nEjobv1DjZA5przEy1c3CfCMGvAXomCvkdPAnS6tsLARMAT9mt53qMT3qDPSy1EepsFKUNkM2Knu8HTQ1PvG",
  "key12": "xUME43yNtvf8wyU3XFkFNJPnPeRP6qn125mziL5REt2BTYXXrLqGTUQnMtHrUa2WJWDBJrFR4VmnQTHXuQfwCxx",
  "key13": "5F12CuyWB2AA7cfQG7wmz7NJwWYZZrWaKTVsFz297f6khrEAZJQc24FPhEJnsLQHQ646FURgFDa7S8Bx49UGvM7q",
  "key14": "pvjmpiaM6GXxXri2P3ktRryjDthKe2UCPDQtuy7JL7UDcqncuUfLYrQW5to9vQv3pjJefara7FKihCcWTt4CCYS",
  "key15": "4KcwzbQf3SLkRnCuAuYwxjmAA2h4XEmyLAfHTVzXPFeknawBnxXaPYdS1WeETCGxXytGCjGbha5zwXCYTpxjQrmN",
  "key16": "333xLcYWTH9frwY9Hg5BWfvaRSwKq8dJGVDVrj3U9peUuvuZRoYynJze4WwbRzVwRX136pYTqeT3geeW75vZoQg6",
  "key17": "2N4u2x2ugcGieqovtLag6tXD7VPbDavHgsvaLvjezKAqvoxNPLGFv7acmMQyoA9JNJpG4tndhJ2ANeVCLfgxFnxE",
  "key18": "4sajhoGteK7TYbiq1a4n1kVxWXZddYwG7BbiMj9AW3qDK3VvXoiiRnw85mHQFUn9RnBboxVGsNjengx7W8nM8vWr",
  "key19": "4wmnahUmJc9rKTLEg562jF3ygyNK6GSibYQLbKcFsM7V34ERTcMsY7dQpviJGTzYxg6sMXW1NirrhSZpzW1T5tUC",
  "key20": "xV7a3QHsjoGdSTgM3oKiGzVqmTz7wfr2cvDVMAppr5cPgP1ZKcHN28TYS2oMySZxPdTELakZhbid7kceocHBgGu",
  "key21": "2Tg12t3wSXLQ43gtm1vaZqvSUKe6UdRp9yvjb41JY2K96RRjnTKg5nWy8wTALrrbftss9vUFVtF4JBnEq2FFkPgC",
  "key22": "3qtquaBU3SreHDJXatapCZVxgJ78j6fKTZurJPiutyGqVM2hmQC1mEtQxzn9PtWpBqu2rhqNA3svA5YvN5uoFLsq",
  "key23": "DyQjffNLb9q4kp6RcmqqmCT7DXrnxgpCgLKk8SUUwX8Z33XmFbnCJQsAA6AvVU1JU8oHgts8nht4Muh1uwz7FxQ",
  "key24": "4Eapn6j6KxCZNThZ8f8jkSGSPue8YWCxqE9AiN1DffFbTNzFXp5Ho2W9HoU65B5yTKeTTZh8GRNSeQ4nEU8CGZjG",
  "key25": "5siHzp88Jig8SZz3qWkwP4UqQgSfraUg3qTjFGrwuaZrS1F7xuzMPzYyWfHFvWxNikZsG2i4ftVD6Nhd35g5fhYJ",
  "key26": "2fqcaqGJ5xjPnjze6HJPrHDr2dKsh1HsC1RBcaUknybAmr6A1QN2yzWVTMxXsNaJvRQiDZ5zzQFQoyXaDyC44ZhR",
  "key27": "1koLH6axXzCdeyPRxbsSyQEWwHwpZwSxUNWJULCeu2euLaV8CJEDU4cysnYvgG9cUJsYdBT9rMcSrHrHsSrLzJ5",
  "key28": "4vzXEoasGvs28A5NMVYS4D4MX3sCXJgoRvfqfJGjPE9Dv4ek2WAroUYnfidoGTd4WLCKqpqyAwrMMjxm9HNTrtX3",
  "key29": "5XyGLT6Gpp25okdh7iSJJ4rChmT1Ajrc4oF1puqFsmcRRP8tEXVdLkCyeWfvwaXjKNsqbYrBXLg6Lnh4ADsb9WZn",
  "key30": "tJHgFgRJuHVvvaquh1gxXzrfXSwLMtxnQE2et42TFEYBKV4SdvWVYsrPsGRUn4ieKxx552QE9Y6cpBxMhyAoBr1",
  "key31": "2ur3kQv7G8KuYWvuEtSL9ACUzKZAX9CRowNgkfMwsuGMfMAKuedUvw4eXJTdnPNbqqQTGjqkGXLnFBybAFNxicNP",
  "key32": "5fMRhttx56pMgZKoy98E6toqfVg5MFBvWybKiiymgCpfZoFRqyas8xaEENgxZwXBLNuMWDEnjcVEchEEu1oYkm1y",
  "key33": "3hQxW69mm98jEfsjvJnSLodjeYBkpjGCVXVXBpHLJ8b2dgyXvQDAvX6MWBejVotv5MDWyUWb2EbDk3xrMNWwm4XQ",
  "key34": "5LbnB1RfKVG72LswwLE4JuPBq28AkJgD9Cyi6GmCB8g5qeyDoBWsWpgAWQ8TWWt3gPsptmZswskTobSaqauFcihJ",
  "key35": "2fy5tvL3fvsD8ufAN5JBzgchdDKKk6arhUSuPNx3eHiaaEFnCy5riMWZEVY6uEYZoMfYtMqjtrgdE8je1yrWJrN4",
  "key36": "3tsLsG7qAbtE7E9EgpepfEdXgYcvqENuWPsL3sQpqs3aHtg7nxqcT6KbYA75JiNub148VGi24tiXqZz4wZWyQ2iV",
  "key37": "28FEPDpHuVjRKPPhrxwttc3pKcNj1x8DYEyRGUB4YG6M47aoGUax3aP2sxGnWK7PuiSdiu8FjDr2YQnD6LHfRCJo",
  "key38": "4Jpr39TQT6q9ht6kp4zh3Y9BMbxPdrvEBsnr33r1SDqLZyToEsZoxJvtsrUrxNPyefBh8CM1cUUnLxtHwE4ekyi4",
  "key39": "4uarM2GFLUb6G9U4PmcLnN21qJiStbx5gRcQS9YHoPwA2VEAQnhRujnnTE4dLkG6xGG57JoJ1SLUtAzPyNTvfrXy",
  "key40": "64BoVitCwKAz9GQs4XS5FkYcAgf8jREb8HZ7jeeV9A5toFExVfH22wyuLAX6xe3na9YvHKcpa4sKuug2D86TpUKg",
  "key41": "5tv6YYVpoEZMLU4iYcvMZkzF7dYiSMaQJLG7sjupP56op8KcJhrriohvLKybtA3PY8JMhs294rPqyoLHpACMhJ6J",
  "key42": "37XRYrmqjjH6Q63kVKCrJeCqfsqvbsDM4ofFykSeUhvbaqFcGgiWUWnY3etBG7EWwS8yD8aeWKbCCxF6Pd1Xu7Py",
  "key43": "3ntMvKs9BcVP6WZHqm35oh2rogTTpYVX5iCjbDCJHYg8WoWvex1JQkqRZxyCVPvExUvnP5vEs7Y96j77ZAMfw1tK",
  "key44": "3pbE9uE6SY9duDkHDvTLBnkG4eEMaCT4cyt7wd5NLZ9j4gei7ijbFKTyH84F4XRP1vh4ZaRT8DpZKVj9iy2N8fR8",
  "key45": "4A6f4887ECQqPTaZUM1ZLSzQWzTzTtwD1sLWGcZCUp8bitA9Gwmcs61UQVwgx3Bazg2nnMhojNwmKJtfcqySLKuG",
  "key46": "3ZCrm4WQYRLSit8i8pnoa3LUW5Zymox9mo87u9jGzKfnDAt1rXfUWVCAfwjM99qazY4EhTEU8tiR7axFbvAvh2BJ",
  "key47": "2uSF56UTYqb2m73zRsee9PZEziqKmPZi2aJWF9vG5ihk8xqaZdjCCJcRkPpfpitzeKsbv1zspy9gn1GMN9HfnLpN"
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
