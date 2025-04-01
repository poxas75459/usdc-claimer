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
    "5i41fCZBNcku3xBjGiuxXu8F5CLod2MyEtNcw3XdfK7dfy2vJRxGKgA4ZpugdF1FW9PQFnSbvz2REJ2pWjkN1S55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yu6eAwJhqTVQobavbjprp5wp3RLCvGnFqo9dtPiRqfZiQmKMAHwzmbViBXyvapUBALynaHwPvziqRpJMhdkvw5G",
  "key1": "4nzRaUEPM3diQbGRcvNmuCr24tgEt9Kn6YZqpq5sEe65NgAW19o3wLjbmu7fbfSCWLsqVXP1tXADJodFnuM64BCf",
  "key2": "58D279xAC7VEK8XmC3u8uHLNDbXFZPk8vAuKpvisvTTWy6HXH4Bzb23F2yyWPVECa2GX5GUNs1mcuKCnpxXtGSfi",
  "key3": "5aqWUoowicjs4Wg922XJmWDEKvFD27UEt6b5ZoRT2op1EnVufEaCM6axWjDpyRpPgSHKy5pXrxRaVg8Nkkr8t3Zp",
  "key4": "2rgjzAbP7shVQ48HRnNHTWSZ88zHaWC55vNXTcEUoPZKmFn686ZWxcwXpBsHN1Udtc2jyVGsMJSQDveEbUA5t27G",
  "key5": "2v7DyXdxgrAi8eS2qM5d3SstCdjUDmrzNnSC7fFy9T9VzqsvzZ5LCazbLPAdxNco2qTWNHN8AdLugsXyXDWznw5x",
  "key6": "4WvG4XnZBCQghAw47yE4KgaLZ9cDKWdvsxxaK6eQoRGDfb31s8p2mqFPPbgRoMVGqThSFtEtnXeGDWX7m13evAQp",
  "key7": "5UnH124UdM3FkLyMEKErKsBaRiNpNmCXU91rsqCnsRGTGgnLnL4VmZu2pU7WGPaw32sgMEgYNt9yK5k46awZmr6x",
  "key8": "2V9X5gLCF2tmBZCEyUKy11Fpkbybftva75GDVudndzXoXSkpkcP8WQfdtWTRuxwwfocJHUbe65w5ZC5XaMm2noTy",
  "key9": "8FrouAi1mof6vWipVoQ8fHfQqUMmP1BU57tQ5WhF8F52FEfpGccXDEJr5Zi7KdAJw3YzmVS3ekGJFt8yxdU9pyn",
  "key10": "4VWkX5b4szB8126FcsFuSPRHWMDUZ3dNohrcdAyAXanVd6ph1hVVwrNagYLGcLRTCNHZnKUMANxi4EVxAEaywpG3",
  "key11": "phQxXpgvNrVBNYybnUFKBa74aEYcmBtWvWMW7uwEK5abbvkX6djMTyRpzpbHroeoH22TaEuVCxk5LSUqMfdGHaj",
  "key12": "aHBkrnwdVgLuVVqLn3Dfw6yy3H7qcLEKbECRALHpnt9RXqnniwjuL4wgKv5jpmeBRpMxxwVT8pAMjzGgZc3USAD",
  "key13": "29GuFahKLLGFJbKhPkdAaTaSyf3cjuq5oXmui7kDX7uthS2hSJShGGG4DA1cr9esJjkpko9m6YpsDLkuJ5RGSawQ",
  "key14": "3vy2SUh7KK46Seq9UNoq7QhFY7kGimwqkK5gfgQ7QT3KkAVsKpBsbaAceJK7LERtVDkUKfSVt3aV2Lod8u7fvGxn",
  "key15": "63NEckeERgAkqqs3p95Ztdy4yVfae4tEkSVHi6MAD7i43MEzu2d1JhpKTfqpLCv7jkZvAUerd1KSaUS4QxAwNryg",
  "key16": "4ysN5Rkvsb2E2rziDvC5rGik34jrAZdh9FZS1qfqza6Vj8jJnTN5yBv5PD2exGFScrtNk5nsu7qCwV5EekwtTkKJ",
  "key17": "5XGfuchcm5RTk5VZ9jXr52L6m9ATUvNndSE45jVc2ayFC4cXGCdC21x5puToApZYcn1kFDxZzuZXe6X7acZAzhpJ",
  "key18": "2poXgKuxdn6r5yNMp4qMXuRjYW4xp716b3vJJBvtHVAMACk9nKfesWKBZnDTcKKaikHZp184zUNiFGqcXwH4QvLB",
  "key19": "4gp3kAnr6sW5Sg2W4cPB236ZSieeJ8FAiLxmSzujSEFvkEKAyKrwRBk6b7FDQgmFoTZcMyt3ujh4Gr8uk4KgPjgV",
  "key20": "29nmadvwgbbxE9wM86e3jaZQxjyuZdTmXKSacRSPYY7g2WjfazXXkjcxoCFL9DECVefDgV79Zw1MzthPf5Zxrudc",
  "key21": "2YgXCQCE5UkGdQVwBAQk8NW2WZ3rSaLWkP7q1o2967RH9tK8dsFx7PwPs7RsjGqDdSNSc5ecZwpqqUv7fdYGkUCc",
  "key22": "5dd9pNzgK8vPtcMuTPdZKKqM4dVEzkc4mEZroMLvL1F5QkTKXRnimZjTaiXYA11Bo3YtzTZ967fhJCykExWyJvsD",
  "key23": "fv4V96Nazb8VDi5Cz222ZbghL3Lv6q2BDdNBF2xH3uM52Akwc2m3Y2cybpAvuZ5rJA2a29ydtK9aDh89GnmMGvq",
  "key24": "3rYZt5VVqYdfdghfEatsztFAhrstFbJnTGaZbx2kjv3eFVUqrQFZ9GTJUZzmExV2VG13UqMeEwnxdV6m2faM4Ewn",
  "key25": "3WmM5CpqKGfVfCzFL6L5sbmBzVoc2qzAchjKrtL2o4Gpdut6fz7Szp9HxEoCZoZQGe3KjsL3L6JCgK2deoxUG1x7",
  "key26": "3fgiwLk4D8oBYEXhRSiN3EmPWgM3MX28jmkoZWaXb5q5LfmFXoSZqkKRKtNuz7dKtQ3Z2Nc7i3SAkXu5FtCeRmJp",
  "key27": "4obEu1kND24x7XLmjDBzFecJK1NpZUxYSkcW6TeZSRoFuTaEF1VB4TjhESAQwNk1Fjnsx5D8YKMqtufPoffjQScA",
  "key28": "37qg9QU1cZrB2XaGVoTTEhNAN53rGL9P9cQtepEEwF1Hr8HPzNxXXY3bGJpjTALzx7wxCZgHgg9rn4piJ8Sncwc9",
  "key29": "4p4xDxTsC55Koa23k4zZwmmntbfF4ntFd3UzaSxcEvTURJNwrKNvJtcwh8Vr5M7n1VpQ7noLfkgeWVeZhrEDoB3K"
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
