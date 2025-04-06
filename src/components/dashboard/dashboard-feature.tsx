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
    "3xgZz8rL7k3H96eZ7sf27vHJCFMmRHtCddYrYnrSsevnV5kFSDi1fUhVqpMi8ksQcKpkixKGFVbDyPPGXZtjKSun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uugq1YybPhBbm2CsqKg1DXcgv9i4UgD7XcdBbAY3n4Lc8U5pq7RASptjk5wPv3mGczcgY2saLbKyHm3Sc9RBdhB",
  "key1": "21RNBdUAhBmYiaisGSwDopCYcG186qovSnLeYa5vDC1hN81qF1RHvNbHT5LzF5bajCEzZtJUkEzZZkyTJmVjApC3",
  "key2": "2VFv8xtfJrVPQzV3L1tBBLsYmPY45rk7FisR1aDpqpP3ob74qZj471pCGLADHB6NHPgvrL6UfXAyuc6Cu4hPDzhL",
  "key3": "3eZxbBT5SWbgxPahHH9uPdYGDwEJUWjd3NyLpMiHdn3gQKjVn3tx1ksc7Rjdqt3Ak26PH5KPTmMhXbq3Dt8EU1p5",
  "key4": "3HhQ7pEov13DEVZDELE1neKi8V8mitDFQw6XmpnMnXa5RP3XwNCDphPbs4Kcei1ZEbdSRhFCbrKnUaFUXKytRzCM",
  "key5": "3Tpn8gnNzpv2c725zynzyW5ck8Vjod52rKirAMo4zyorha2RTVMZLty7iogU45tLm29eqHRH796oWhZxKar6qzxX",
  "key6": "4zwE9uLEFzcrZgG5vb1C6LCEKiEqJeJh7cWUe62iHz8BJcEcfuszzWZqkLk4297XG6zn8QTTwhLFdpC4pKT2KXbA",
  "key7": "gAYX4zXDKAquHv5Afg6KR3ujb9NzcwBerPSX32JVojbSxGh9RQm9ngQEjdotZG8agL7S1jErMVffZuFuJXCEaLj",
  "key8": "5Qwr9HT242GN1oyDoQLGidnjSYRazFKsHP81pFr1vGmn5gfQeNy1WH6rATwqiAWcmifMpScaGEJcYHS9jkdyiiTn",
  "key9": "2pSftQ1mNMa5UjctVV6GsBF7iCCy7hT9ZGxfD6He3JSkfz37hwpRSorEu59zuw6HX7LRMq4MDahvWvoULN3DUxnn",
  "key10": "26xWgBaNizMyxyfxMGojAB2j4A697S7KbJfuk7yCZFAuo2yMUH6u3m7Ex5S2XCMZ4WYuzhm6Ef7Bh1iPhbZHCcVJ",
  "key11": "2F5fV7i1cJcucUVD96QmyNay4PYfr1RM6DuxHtQC88QDLK4MBznxMEQiqBuYajHyygaeK8vS21SzZyPw2UHzL55n",
  "key12": "2VhdFDCzvFKbwaTyDkrmUrQZ8PPmc8BcrewHe3XYawp7pGiyFopmnqsdzBqg78H6uz3gPnAJqm47nQSweX6CF1zf",
  "key13": "3RTDUoaJkmU4aaev1McuHW9UEgYk1utiuaYdFuZLHM9VXkJEzDbtKJawe7x947KFUML622uLZZKvzkfiseggyotr",
  "key14": "4XMk7gLwcpJcnptdep1EpDH127VwaJUamvTjUUTEj1jeFc8e9fqQNcLkHbTEvfjyryZfmD8XDqTVhh1RQJdFb14G",
  "key15": "5dkYozdNRgt3DsCxHfyfKVWBHhCjkMh4MjtbEPvK2NZQWeN4e1xoatd9juR7wqmjLSr7qDkaLyYgF5knrrHPwibx",
  "key16": "5ij38nTfnn3JehvU8m88HbfVAD6zGGrRwn1CU4aoCxKzp5EG3wjiwdkRXAaaikxfk65RdiHSbPwiT7AFXo65sKiC",
  "key17": "Gq41XjAGRb7cmhojbA1XC8jztssYnTTzMLxPC4t4NrEit2djLshtX1kA721AtfLt8FykT52iY6RMJuiZnaYXwZ4",
  "key18": "LxGtUoK1tinCMXT24RShV7gpAt5JZLMjZyt5aTB8yNtcUig83Nd8oQYpkWigrnrMX2TvmmW5pwCvwSdeymfWU3N",
  "key19": "3QRgSaZGmrJ9TtQPK6Ld7hfPdoWY3YhxiDBiDBdmVjfRcjfBWoxj9n5HM6NwrGETdr1FePzyiCHCCQVyFPEqp2NN",
  "key20": "3NJgaDuANHJxNqQDs5y6UVEFLvcQnWorWh2rVyxHNsVRUVZzhNkKnKp1EVynfv9vNtJUKgRnmUzcHQtHb7ePCpeZ",
  "key21": "4nykuTzFoQG6zuc4f9aCJqWXzmFdWudNMmABx29DqGKtcXEj7n8TGovrWT1TtPxsi9hT1fDiRLMdEtLPBCKTQmKM",
  "key22": "5Yuk2zjYUvfhvQWiNKMdKthefb1M1WPuCdRzVK5rqpiBkrE5hbwB49atvMZNgR5oigDcfjquBHfiiRxhskpNy2uz",
  "key23": "3Jvu9ayT38xubPMe1tAKPesTjqp6GWPqiYVwHD9Ue6XQi4VMaGfbhoMczxZpVRN3VyMErxWf7tn2nXMfidSuJYoB",
  "key24": "TRYU3DYet8cSLVEFiEYynrTE1jrqqe15vZ8W2MSfjuCRgicmRQ73uxLAcz2vdmaznC33N5uEUxztSTVauryWGbX",
  "key25": "4oJhSqhSZwoyzEphw52VRAEDQbip9wV91youRkkH5CheUR2GrgxRBFmZPfpcLKZvd1sW3TuYBMctnacG6igPfHfa",
  "key26": "364Ex8bEYrxemF5qvE3brfK5zzrTiAWSWABJnCRAyJs8fDXBRvikEyNqTAwPApJGEZLKXBpxHtPs3m13y6vzmQb8",
  "key27": "4ZR5JqDPCvH2rNu61CJ4n3LxyEHxeGUurbMj6qzEfYB2WeKc4UaMuUQe8PUCsgEv2YwCK26je6ihWMnceMsBfjfC",
  "key28": "2xnaBaAVcXqnTNcwpfcprggUoAwi2fi5wrAVwDsvuXJNFnLzUSuZKUpT54Tyat5Lr3hcAPnP5m41WmmDQtgMHjDY",
  "key29": "KiM54w6ZLfL7UiQkf67aWH41XCFwL2XcibXATP7REZ8TvC72jphhavdmhoS55HMgQFjzUT5tePqzQMwaqRZuUJK",
  "key30": "5TzTxPzqKJtQBTiVa5vpaZe12Rdk5FE2vy7XCbGeygS3UZ42LSx8M7ErRyMSkkFkTw1oFV46KNs7NfXhyNonmpr8",
  "key31": "2i2sKxFkzcLcEXm44Gu6CBWadq7a2iSiF78RyK4Yy9QVRC4CES6WRxjiSK7tmE3CnxvFWrGA45b73VzAxuJU7bnh",
  "key32": "2dVYUEkwZjJWjKkK8GZqosm1suff6dF8Wfeg4hMkTrmaPMrQJxUW3LBfFN3fWFJWjLi6bvX6npgVG494C6uWv2pV",
  "key33": "3qRTwU5VwDG2RPCPov265WukWoyaSZKn2Ux9wM22dusTvVvZCrkbv91zxTcXzYDGXc8PXU2LzyKhopS3gEetz6WB",
  "key34": "42Wmh15TorMC6arcuDiyS3QUbwu3fGaywMZ3tVRhd3wdMa1FAAYB8gAA2AqnsmhVxKtaoCnrPRwiDH2jhfHu5x27",
  "key35": "3Kid8PTtp96GBDBepzCaRkTCicx3UYhvc7NUntHTWiXXWr3QqdRkSrZMhrBLdV4tcBpUk9hqqvKBSsnnPWqWXgSd",
  "key36": "5D6q6udLZj5Pz9hHwBjfaRk84gF1bYHpSbQDViHWv4VE6iFCEvPGffu8JYzpAtEuWveVmw2GbNyucitiUQ9XhoJS",
  "key37": "1CaMHcJE2SP6wyEpTV7M8Vp4T3P5t3jbByys2JuFyAHoocns9ufui5eXzU2ci2tD79UDXnkKKcnowMTPudUUGLa",
  "key38": "J7FGzWfkhZV4j6daa3qFT9gFWUvsQHWpt1aoE53ZKBfWBXicAR9fpRBUBch5Ybo2vp4cSWukGKNVkzJWehmTZAG",
  "key39": "4eJvKkRwNv3qrFzYrLZSZs1w2T2MgPyXmcrbALHNFzwaMHVrH8pdpzWyGzZfmF5psZzKdddtA8Pbi2Vf8SWfi9P4",
  "key40": "5yLRvueUtFRwyfG1UpKsrQzg8T5wPPyf9fhX8UGAahiLFEHhefbhr3EM7yWiwUh982xGzhbpTR9HJKrNJoLKKPsf",
  "key41": "9ngjgQnaW5KSvHRu1NQTYdy4zuk1UtR3r819mwp8zTnSLa8FZVZJqFJzzrRxMpWbTGgSVYkqJgoD1dPX8zZ7bMk",
  "key42": "4vz8YkDU2c1z4UMcxwXdMSx3U5Y3AhspZNpC79qKaH8Mk5X9uCmetp7aWrQiftMp9wKqkLqLU6h6RRSSsbvaCSQS",
  "key43": "5BURtnpBmtr2Uri3FzpMBqBH5Xo3eSxi7pcBijunvS6Yx87sqJPshFkehvJ7WZU9HsfzCfqXhJoWnvXupm22UeuN",
  "key44": "z2o1k6qDVJiZUnkcYb2DKhfm8wsx2gG7V5W9TJLnjcbww4LcpEG1geY91ipovRkXh6c7kWCQoSMgPAsaUQabFGo",
  "key45": "46xcACQg14ojQhbbDSdHKRbSrZxUZ1X2NbrSTCjyf7V6q8Qc1RYUM8afvgdUnotCWzFuCnhCYkrTk9zmjNnzmrMY",
  "key46": "28K86cwmPnn1XtJFuVNwqkg5zdyPuSzhfzhn3oVnd5MFEAKuXd43hhUHvQ6tcXY2A3tr1Z8PGwuqn9ZUeuwvaCHd",
  "key47": "BBCtiQu98Eehhos1hhJ8k1b166hJcWSEW4vSVDR9zkUqFQaVu8WiMt62NgPyZLhJTpChXjcXAJbrDmmy19FmY3q"
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
