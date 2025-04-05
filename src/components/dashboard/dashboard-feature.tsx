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
    "2SuJ9AQenMvrECf2nyMvn8y6aY8a9JkFkiV3hzqob3XszdvZCTAWs5Ag3xji7B9FGdnbZBzcGYMXaTscCW7JqPpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fTPiVkdekWExMAYn9YXiVYtxZYSfQVyrnPRHCAJEFf5Dbbo6L9JeqMA7Lp49h84bV9VuSKxrnxoUpDuMKgu1d27",
  "key1": "5rjoJHotJvvnDD5NNCPHDxe9VMGbiZeVxM9HMyFCLij9ipDLLYq1mkncKsw9qGaoRhDYR5s8tFa5e1RJSp72A6e3",
  "key2": "5oPqLqofECSCeXiXmFqu1hd2g7Z9QZW6VJ4swpXP8WzBWQq3gfntHDXH9qXZrSxV1Rqj7HTvoctkXrcGtmU88cKr",
  "key3": "348CHY5RPtbiCYkiW8zDBSnmvNRL5qrEh2UHBCs6P2GKFoywc4PFchYNah6TSyukeSxuQsTKYYEmrFCnQ8cc6NuV",
  "key4": "3pD8n6cfPPpJY7UkMbNnQcM3kufQnbkZ6tC6tZGvHgbZ2StEVdEYicrVNwVZH2CuK5fJRGppQo9ueTwffYCKv5BF",
  "key5": "3ySNNcmGhDjCwfZawQPACXDm85H9qYC3QUuLuq7opqrp6DYeE3QUVvdHMy2GuhicUWD7ue26ts38SDtebVvtYTdm",
  "key6": "2HK6vyE1EXt2wkZsHxEGN8ef6GToZxXNjrsPxaQ8696VtRQNuHQPT3V1D1ppeF26XEsHsJ4tkbWnZB77DduKZhpT",
  "key7": "2Tb8WzZ9znSHGGfK1eNohGFcyq575FX1tSRcPkEAPFnjfC2YZkbuCcy778drfvjVBrjBRakf88Dae7TiuAKCtQNu",
  "key8": "5x4WMF8rubfGekW9jkKtVPY4tRpiD82wGDp2zN1hnBmGyZLKuon1GSdCY5LFupzgXYCHQm3n6aGDaTh4T94NbGyV",
  "key9": "4nXjp5Y8CAdHN79xhm48D1BQGFnBN5ukBYe7g6uiAqCcBvLgSixcFBLW5t1UHeBPeAZ6zxsd4cxcydR3vLtMUdp",
  "key10": "4ESK7oi1qkjEm4qfj46gBAfaLai5aLnB8HbMfQcZcWp25Wx6BkasEVQRDHnptyCq7aPNPc3gNaJBPZNjnzVUxEjX",
  "key11": "3e2omNhuTExh2L9ajSKGcUCHMZwg4hfaV7u4iqwMEuJNyxmfauPDi4ff8jacE4FKh8icqdgntW8jYh2QLJU7YY1i",
  "key12": "5r7Whve1RCTfy4cDLDMj6kaUsuK4wig4TGMYZTLRUUXU2o6GNLUE39JcfX3QdBkzrkT6hcUFZeTkjDxLFb5w5qUh",
  "key13": "2QiSEMEC4G7pL3nTHoDdXX2gnySHjh3sZbTskZxif6qjQTmQhUTvEY4z67mRYSo6LzNeaYdwEdrSWpP4NwhawFys",
  "key14": "31ePSGi7ru4kL8N19q7FtTtZdy7FrahSKFhYSLraUbD6n9BWfT4s4kPF538FTkoVRsMe2ydfY3rkHDBeqUGXgkMd",
  "key15": "5JDPAeuQJ2pJrpKesFkwbGCZ1iimJbyg1zzhHTQnaCfJjtUtctSGhE2GdzvfZEy122F98KF5bd9NA9N6mdZ8N3mY",
  "key16": "5KSC7oNTHiuaPBt2L6X7uxx5y1ZzMbtpUYHqFPTQD1VB19tWa27PD4WS3ndFrDvfhe3MTjHVnv54LJ4Xd6dveRja",
  "key17": "5TYDpd68AjG8zATm1hyQvZ8tNRA5G8gW9J9ePpzoniqkupMmBmgjbQWe4HW2JVMK7xFsMX9emfjQ4FsGK3VDt5Th",
  "key18": "4Zcfo5P77bidLeSSEhYkjnC3zpnftD96qDt519VyWedcYjwGNFov59c8DB3twJbt9etJkdWRuMT99ydwjEKtpwrz",
  "key19": "4RRJwKzPshSv3erQesPvVFXB8Z631DK6Tc2GUDunMMNiGXgd7fMo5AGQMKhtLmv9jwjWoXtfjKUDazRB9b8aCGjB",
  "key20": "3GiHUaVUBn6bhohCx4ZKRwFjcUC1SSidFk5bL1EJCf5i91G4nvaNJGrHaR8SGzhZEAYfDz4aTD2MswEAGFMJ6zU8",
  "key21": "uhroXu5j6wwbaTZKSs9cEJrRyZvasoCyxWDQhvWuXQuQpPg6BZe5TqPvha83thBS2timh98rccEabeQX7Wp1GfK",
  "key22": "jgemSAo9rfTFHB2beze9YH6bjZbNyRDfn6PjiQWv6xyRkYjeju5KyaJySayTGo2PEg9N7g5wPyMV2UgtuVggRsN",
  "key23": "DRvLbVNZ8eqKMzPussecVdbxXJNPin9iZmVG5YoGwESbogGnMdbkSX8bkQt415N165kp4PtSWvJfV1fuzoEHD8i",
  "key24": "ojEiMpCMB2q3YbYRsyeQcpNc5dT2X6JMmqjCxEmgyvdu2qACHr2LCzy9khc8CzJi4tBwy6sL6SFPoNdFAMCuA1i",
  "key25": "23v6CLnzZHhMToatvcpS4pAZpWwBiMPd6kkDpbMFCp3T8pjXWctiEh5WMQBh9nNzxXg54hyY9nB1Nmor4yaXhRf2",
  "key26": "2D4mNzeb5GStJq8bmwHcm7w1zu39wJiCvLvmRjxEAiwrdEY7mwb476X1KzDqfKGLgd3xzSMp4hRvxWi7gekmCBfi",
  "key27": "r6iNRHrF2DU5xYkWASxiQ8Kr28fg6FfPxxF4jyswqADBcXrKUa2ZiRZeNH6Mpj488FFokbdRRWbooo49HRGmo3K",
  "key28": "2HpTRcWahbNqRd1BJBAzMwnEnBaw6RXcWHfYeNH9HrXQqKN5GvZiU91Pyt6fCc361zUvYgxCt8CCNipzc3hfXPMw",
  "key29": "5F96tcCxgyDSy4NF2xS3J4Sny3N9fQDuFZZPP9uLaNe9ikNUv85nxkqVHjsSRHremwzBLKeBL6d8njzSywxFopS3",
  "key30": "5vg5eNJzY4AVVpAqKNrpF6QvJypy7maEPMaeJXTAtnZiaZfCZP374ytr3DfgZqW616tugPFJbK6EHqRVZw6sxUAE",
  "key31": "3CzJ3V6HGxYPDw8TXfmcDa9zJJZoPHBcXokKaFpCmNGeEvNQihhRuvMouNCfpQDsmgvsWX7reoskxqEDuHhVzvqo",
  "key32": "3C2dbZ3Ke4tdiqU44XvwpTMD99MKq6peWCCrjcVkL89wag4cSr8AsDyQ7i4Sum6CJvq1pQCUYdXcNcW7VNvB9wW6",
  "key33": "K1YKreaNetBF38ajJsV4WZXvBWJWF1ZVG4mL7t7rnyXU8wZfspGWvwD3yhz17wJSVEnZyrmxSJxsEU8oivjqZ9e",
  "key34": "3FC2ALJkQZNhJ1itwesJcDbNBzAC3hNyU4SyvjvWj7FtBsXyZVnzJFGQfBCHSL3FAU9wAwsWM3dEbGYe46fYk3iN",
  "key35": "5ef3Q7J3QB1n9GgbAj64qLPJFTdVk8ViTkQVPcemZcmEtbUiVCi4ry1wGhmptCwX3cR2JsgRYKVQNgUvUYSKjpZu",
  "key36": "3pbBah8voZaZrsenYZZs8Am1uyHYe91LLHWsRVbkAU321MEKtbRGzLhVVzuBhw3VaqackmxaL9GJdwZCDHYvkqmf",
  "key37": "5wqMCDcr5zF9iGir4rX3GxuZTrniJWgnPfUrTKpu37WQmqad5odAQtBkWdQ3cMDqbkKo6XnTFR6RdgFGUy33yWAs",
  "key38": "4Dk1Zhad5fiEsTufkXrUCKCVxNtN1hqisUxJupiHz47Q785Z7o94oMBxJHJu6sALAT1UMG2BRveuW4MhniumS67R",
  "key39": "NCpBQ6A9VMyp3gUMBpDDV8tEgoVgE3UgCzzczMxA3pjF8FBeVxGy6zWyaDmzfSoKq4Sj6yMhoVXxYa5GahJnohG",
  "key40": "3VuEBKbiBWe2eXjNU8m6WHUjcxNrNvcKzKGeEGk7KEqfSEL1APR7fwyL8DZjGHFzorT1RvYn2fCZoc1smKxPMg3y",
  "key41": "55oeE5vJyzpkZABWMns3emtqNjT1WqmNyzMFZW6SSUjDLoq9rY5Sro1cjLRywdJudsSYXE5x9DMGDUfGC9E8a8vf",
  "key42": "3Dg8AAQMZFYTHx2e9UfVSDkvZf7xarUkPNLzerz9xpPZMgR14yXx3XMZuN2XTX2QcZ6NSLcw2PXavQDvJKoHhpKo"
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
