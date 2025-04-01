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
    "58FHatZ4ux2pvKWGWU1w5rbKhJzeXn1akhfrXzAeQ5iu2CRpCKajSvoeUkXPdx23hCtLBQcsjgzd9WKzyF8QkoDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQgF5BXjCBcjxQsMkJb1NYQNxPKnyshrDQ51Y5eKVook774T2zGkRrFVVfDwNbT3W5yrefuRNhuTEkhPUkBjXuo",
  "key1": "5NFxfGShyks8LN3qLZ4Eb5f1Rz7CsiWGz3FSJ4CfXA5Zmfq74E5T6s2u42rvopr7hAwQ5bchV16sZ6GPrhkvYWPq",
  "key2": "3YuszX19MbTdHzw4f9JWXQTLpgQA59FWstePiAYDfc2zv5yCN5tmJnhQv6CPzWPaRGrZ2rwjtHvcUe4mg3EKQ5Jo",
  "key3": "3wuAPJ7RsL341i3X2hKfzmyiHbpdD8vvsB1MVSx9QgCDr7dWPP2T47oF3FAHhhDV8gf5tsiQq3D1s3p8Uc3kTGQK",
  "key4": "64VXCXwSBBA5obMjNgG6H7Zg95rKNniBc5YocuBHR94yUnpNYDg6iTEvYshnCykqnr5F7ibKEKq2FadsH2t4nuAt",
  "key5": "5qf5UZCeT4CKkT7Fmrk4DeSnoV35nbPAT7kL3BMq3amuCK5x3swZbRFBZZYsEViuSp1toFdCon6Y3wxyfDXQ4s2j",
  "key6": "4cPZ1Dx2MswoQALUU2Rm9eG4J8Ap3EzZjjRXvrazmx1sGJQgYCFCMwDxCukMRzu3DRtSzHqLsNXpnW1TtV1ZZCQ3",
  "key7": "5kMvy1kasWJF4NZ4LN2KGeRtt1bwfSbYsL9YryL49TNJmNbWApMqzVbSneV9uEtC64Yz9rQqAwyjrigEfhDunmvb",
  "key8": "3MQCenqsAiyy5at5nz2Rm92ReXtCXXfSXxzJsBHRmLwqCYPq6sARDvMyuoH3CvyLWi5iQnDuNQGcfxt5TDSh4BCG",
  "key9": "SEJCQpbF16HyCdYbe8FxPVssmRz3G7sgr2i8BUmUUbgw8rZ8sffUHZYvJjQD7xCrKRL3BVmLXY1SnYthtsReWAj",
  "key10": "4RToNxezcMrtKArFdJqacroJak1sUKBhp5W9VFcYHgJo6nUjX9Z9bdebe67aydAiRDahur392UQtHgbpyZBB4Z5P",
  "key11": "5UPgLzMNbVJX8XTMNU8jL8AbaTcAS7JbJnC49LRiDnXpFHb5qfSiQp144RaqpdW9fARQQkLZJgNLL3eBgWtG3C5r",
  "key12": "eqhUTpBmFC4x2WVL7fuJJ6zXiJUNZWNT9M2Xq3fCT8h6HawGkWVPFYqmV8Tdqzi2NDFRYrJ3Cs8Z6dbHZ4xeDoM",
  "key13": "2CQ5dtyFYHzXB6Y2dJbweYk7MbDrT6u24BG5JFX8RYZxZ56Drx3gEAKynXGkHK3cwMpvZoHRfgQVrm4FRzY4DBU",
  "key14": "3d2cvfs3b6eKSVH2FHGKx9ioJRCvgqnQtioaBkgsZjbNnAuXyvqBUrEPJrUPzVHYxTwGoVYEiQ1ZdvLQbTaAFf7L",
  "key15": "ZZMxfgTRef3qxHHAMUZwtAV4RKiYBEQewtZxsPdLQqzvJivCrSvg1dPeQGkUTx9oGCVQAUnnk6LdavaRgf7PidW",
  "key16": "4AUEgFrrXWqRokCP2FSN2GoAyswwT1kECCDBLzBKxu7fywZnQbrgXofNdMWSEidrjrYv1Ubh8zxbThLThvzRZyrj",
  "key17": "5Ryxr6toCS1RN3wmsebpmYhddCiXYGqCgVVU48MB4seY6EMGSB6v9FFrZouPWQZtzx9CavaULftKvDxDVLJFJ4Yh",
  "key18": "2g6HVNvm1EhLsn9848vv1DtW4DvvxigFmyHqFws8erhzW2tnhiYBjeYAoREFsgxNKjM3MAC6qRvTRcHFqNwSEYQF",
  "key19": "2h6bAr7AiguD7iJWF2zE1BYgL9XLytoxSqaE9Z6yVe1TtHhQphADLaKENTvFqQMuKQ2Zkj6mB7HbxKCvk7Wagogv",
  "key20": "3V35KX4fZ1Kjg1fmcxL1ZBeRErWVQkkcCvGTYTAAfjZJyYMEMWhTP4rGbRACnAjee8Udrrp8Fp8GY7QG4HixLM9j",
  "key21": "3aEFk5RXCyZyDFUrDTLr2vH19UhTsfpU6E9fupLyjmSCg5Q88KkzcEnqVe533ba5LhKJnwJcz61mrqer8cbE5N8n",
  "key22": "5skKTCBWtvUtSRpcdctPcqFJQ81J5wowb53juJ9AswEbsSVGdpw51NatHtqT1rzCGtty2UrWbbd2iSbusEuwYY2j",
  "key23": "5jBke3dUZdiNjtA4ENKYT4qim4abbmBiC9m8Xu9rKa8HpWCDumxohkm7VwnYqM6Kop45aTXZZhRCHP6Xz4N7Gr3R",
  "key24": "5esv17GzoUtiaAZLcAevXdUKh2xhfhcwpCuDezCR5i7pDQszxWyLasUCuZUMp1pxdqtBHBT5gvmy4YwWB5qcJ6y8",
  "key25": "5ygHRS2fa1xK1PUrgBzug4QjC841EfxqGtWuBSqVLsEHdbPigfpeDi6fY8x2ALj7ycnjAdoRaSJACTaSCAFADtqm",
  "key26": "4VFsCfZWoUbaVzJe6JoVfhC87noWE2zhu46Cw4jFMtqqMeZ8C7nRBP8TJ4kApubLjW7mrHgxEkx8t7LdNJdW7jnh",
  "key27": "8Ts2Ym71JGz8VfapdLmm4MR1k9kR9ucakrJK4NxkjSDKgzrP9EUNzpFkbhifmP6HrnEmivRJiP8rVQBw246pAdT",
  "key28": "wPfKE1SuWqxciULD7U7uCfS37rXARLLiszwKqZ3SAnQAapcxXd3CMvhgvmpRLuGszEVaBXBCtAc8nDp42Bsu1np",
  "key29": "3edPj9CqaChewrobyZtJnAihLXnpyG5JnfeqnKbUVPEiRFEhftHodUJfwYpp2ZXqqQUhznE2o25oh33FyoDkjStR",
  "key30": "2Gi3nd521iYJ9baAKon1hgcKrqE4wRy3vKi2jhzwzGXj2QP44BHARmD4r6KDWn3tNWjaE7C9kus7779Tu32fELPg"
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
