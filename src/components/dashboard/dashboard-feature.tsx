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
    "373FrtU63AWstGKpqHrirPtSDqGdobRG3rgRwvtTCenLsZaNo8hp5Hn6qjUHEAjn541rXzgLaMdDdq9NaKTQ45PZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YRF5PPsKLbQmU1Ue5jnnnQj9X1RR7Q6j111kZCPcPsjBfFaU3e6X1BehHTWXcxCjFsXP9CdVnYvEXAivCGQYjef",
  "key1": "tqrqGvgafSPMcKDrHN26JLsz7ri2WcrJx77QGABj5wP123pmi8fbAGL9s8rqkMCs6di1NEaG6nZRpjFNjtd8SRt",
  "key2": "2LHvS1K2g2rVWQAAxa5AFQ6ChidXDZougsnNfU5P8djbYf7p1vvc1JMtJg4vo2MLNf2eqVr8hcFfyyXHmw9T9Mgg",
  "key3": "5YrerTGrLtEoHMhySEE5x7ZqHDbZmEgzv7ZTnadcq4YgnpwA5eEWxGcZnK8vAMt4S4qp8m6p9bQfpCZLN1EbRyYj",
  "key4": "2fybyJ2Muj4v1FJZaGhuZ1fb4ZP7Rx8CcqCetbbtLm27HcNg8JtDZ2CJU7AXDCjCqCBLhDtVzRyU6ST6Fzaz5eMM",
  "key5": "8rXZtc2Aeoux2sZM2yRfds22RXHNdUgAWxqfNVV79SCHRN8Bd7wXJWnBnAxZ18rknYFifaamsgNVsdu9if233PW",
  "key6": "gs7fGDKnecCs4Qz4mL3HMvoj3rY5dbTjns8pgd8Ztg1Tx1shKQYu9oWumJLjbL7g2VUqAGK1mgZiF6nwKCaCmi3",
  "key7": "3hCjitPjrmZFBdWRQSdo9CcY4ayvPn975RdWWte1inKDorhWyTKP7CYUkLZQ8FaPR5DSGofFaANTNtS3PH6bgtnF",
  "key8": "3QRaXAqr3nuARPkfRDCQbT1n9X3it5T99pgq7qZw8oohHFYyv7yh6gi4e5vvARrMrkuyt7Z6qnawN2kdeo6Edn1v",
  "key9": "2uj89ga8ipXZRYgz825h4SxJfEVh2xjRhMEALZSQ7xXPAPRefPuKnYpyRRgeH5o8cT92o69f21kh1hYYVSj5S3cq",
  "key10": "mo6Yy7gVWyoWbSKVADTFZpj5kDZrjuPU4ecL94A5ztKLVaChwQB1LAhrTSCDjLsdSJG4BTnqzMzr7d3rS4GubLj",
  "key11": "5LSRJKCgWRaA6jbCCYeLG8MbKrA3st2zEMGkAKFPgN9KK78AXFpEBcdc3domdceocKQEG2WRGzLQk8cTjs1whxtm",
  "key12": "646FSsSEsfPhJGYn2mBLSvVDHpTXqDVA413khxNunEnPds86ATEv7hfb4QXF71cyNcwVxaDcjM4DEANhiDNyMfXc",
  "key13": "KVam4krb5eF1my7ZqS6HU1X6toRGrjZkb1dwEHHa9ACVYbZU2k9yiPPK6QxREmEFLaaMt5RhQ5j9bYfAh1QZeht",
  "key14": "vTMzTbfwxoSrJ39qtUXRuom5694ujw9bzmYgi6pjQgZiB9aHvca6VLSDnaH388QiNsV65D7PuhQzS8nChZWYDHZ",
  "key15": "4x4yXznQGZrMXBfhDDGgxVCGmYy5XoeFJLeLzvawvZBoXn6tTzCbAtFXCcrjeXyVmiSvfdZ6csi8NSBZRHpdE9s1",
  "key16": "ufuYqheMNJdGeLkATjVAnsGuHxtGLcUndzMUoWFhsqGY61uR27PMEzu98a7sSVHt5G5u73WLFjYhhV8V1QsFtxZ",
  "key17": "5AphnsiE88TQSqjDqzR9PrtAZKMAMorxARFCmsPCPHGJTg8anVQ6oFtF29Rf3n8yN6FY8JN7X1bq1fHMfxtYwDej",
  "key18": "3QG85vDmnq2G2JgzKZD715cG5rUfKjbWZa62H9jKK2MAY8DgqbbjbzH5aKKbobXobvPrzKucq5ZiyxDbMxwfjV7U",
  "key19": "61ASTgBxDmurRr6An1Wb3cHbb2F1BxBe7c5fP3g4FCQ5trKB6MKdRibmnXL3CTcxG9D6aXDiPCysjtn7c8sqQd56",
  "key20": "gkxUsgmCJqHm4WbjFJ7R8vHk6GH4mABbBYSGRsV28DtrVXhE6vqkPZmZ3uzhnC3jMJ318AnJymEqa1m2VFHmf6C",
  "key21": "5xJC6D1ksQ6qqhQAoxnFbCVT6qdKh3r2Smp3PgdnFfd5mwVqcM6NNyFrpeYATWJw7iDruJFjuQF8wfW8dRoRKbSJ",
  "key22": "3uRR8SQi1TbMMKHMDoXRtuQGayzaBSweE86JkAREJsmJDopAv1hruwBN5ihpncjcVdR2ZoXEkXHxXK3obroNGSoj",
  "key23": "3z34Vvbq3KA978Zp8PH21WPkMqSvXdUimzgPaZiNqKY4mH9Zpb8MDxN3PjvwSQYdgY6w9Lo6WYmkdKoE6m7XSUYH",
  "key24": "Xdme6fWjJy3z1UbJTCq4TBNHavktPFkruMeiVpWCbgpbhUpVMKCENz2jojtPwupa3dZkP5rs2KsaiQwsZpwR4bV",
  "key25": "5Mt7dpkj1XRPwNTCKtxbHTnHCEDJgadfG8BUTrL9BmYu7pmYtnH466ZoK4bUkorKhwa7zWXmmXQfA9wQZYj89CZb",
  "key26": "3u8ioe1KpWSosMFkuxZUMvJtcqHQ2ZVjvKywvuivbgac5KJ6AuLvnpKmPCf1FkA9p6Cd61wf5nktE5uqzsFE5p7M",
  "key27": "5Go2PeZifsy86absF2FdxDBz2ibf6ys4UD4tWXfyf2DVadhPx9zzCANWaipp4ZEELCNFY9K8Phr1hVG99xYqqw7H",
  "key28": "VbedBpbTNmoMH8b5aXyPJZMK5285YSpFHB5tAmysyPzZnHKcuJaR1xBT8eyYHth59XY2vB5n7jud3DJQoD3rXoX",
  "key29": "5VyWCLG9d1AafKLioxokU4PdBHzk8Jmi3A3sRtweJHZamuMgCKc5CRbQKi2NbP3NANSxTZL6JULFBncbvYtfVwj3",
  "key30": "4W6siw6tnduJcD4qfwGy44gmSZui7Pt5BQ7WaepVRRebzGRFbmamHaC8ynLdHmsvgtPE8xm1mRncdkygcBQVpvfy",
  "key31": "3nRxQRoVSqutR2KgLFQh1TqR6ZebTXP7HgDHuk8G5d3oquvumszLJavEdrwC1bRc6fs18E85F41JHoUGdga6yZtL",
  "key32": "5A85amw5XVEDxUw27fMUz6GuCEAxoWeDnyi8GobXcfFvedE45WNvZUyRfdTt6N3Vv9eoZMmhFSEWNtAqaeanFub6",
  "key33": "5B2SF9bHGFCivQSQC3WEv9VS7Mku5GhTSgH5142Ehjuq8wAd4DEJ3SW4WEyLcfiTpWBLDGexQgR5foam5vnrzoVJ",
  "key34": "5oU8m8NUGDmRqniJYoRfAQqg6RHAXBsx5JyARio1fj666MVsHQgeHm1ERcuJVKjt2tKgU1a5hEaHcsD3vsGGCqit",
  "key35": "19bzndiNfeZGEZ2x2WKf4qFcmNuLskqrMAZ5V3E7w5dxTSxcZTXj61gtmNc11fCcXDcM2AGx8xqC9Rr5Pi3rwhr",
  "key36": "3shedX9RXAxJNKAbxkDg43E7XnU4yHPiq8uuaQajZpCk7nunDyUuqXFaSdeimWMmVV99c4HwBmUQAzKDXBwfxomi",
  "key37": "2bynZPnNLFL5s3noaZTpT2Fxn9eUXDzPbZhHUokEBt2dKvYwwDeTCZYr7iAVsVp16WRhyiJngmJG58UJGoFW7UEB",
  "key38": "5ofigwXPeQBazJUQ4feUixpTAtk8ByibypLhLupmx17PmzKo45SULkVFW5yE8BYt5TFkeGhzb6GaErgdGoBihFBt",
  "key39": "8FHD5eoQci8xkh8ik4YrDR9yVnbiYesHdoaYyfXNKGfwz6DE97Ms1a9wcvqNpvpy5pVsdxHQ3bViqquDJDttqCi",
  "key40": "54o8tS9WKW17TkNvoag1bvjcJJLHV7sVBMLkgNbZ9ymJgPzVgaCYVtLoXav77EaEfHwsmjWfwPEd2CNeLNJaTxZi",
  "key41": "48Ux8EcuB4zPWTgUEnLrt3XhxzgVZA4zFAnbpQ6jScNbkTwyebXKeYKrKSWDUQKQmEvQe9gFUmEqhN57XA3xXSaE",
  "key42": "5avhteepLex9QwUz7NmNsdrnvFmPB9C7bbXWF1VKKs5hb4LHJvGSDdsHtpBqpgv3eEYtN5mDHVRZPgh8Sht3mbJ7",
  "key43": "5uyepwDUcedZbsEr25KFtPkrFwnWPFeCVETAawnoGGepvgyFukdUGhQ54CRg6VXUoobgfRQijPDwSm5MBAA8xnMs",
  "key44": "3vo6WoGszFyUKsyW5YiHUACTV2KyGBY9pwxYqDvfMvAj9waTMLT7jSsimVUWxG6LnyRg1to83Bq93vW4TjtzfPPN"
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
