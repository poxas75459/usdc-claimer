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
    "52KKVow1VBMs5DeNcj3jHakcq6HZW1hMbcRZ2e4DV11G8orJeUwXsc7ChQRUPhVfWUtG2TQn6bAM9QE5mMoFdDBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uQm4dU2YCb8div2m1BT4pK1Co3RLQfbQ1AWir8yeMChYXzJ8FdBhPsNLcvQdBpYNpdNTEdNSPmL6R67hRAszd2z",
  "key1": "5hq14vAiVYQoKymvQnDDcGLb3gaptDDkUErocct6NCVtrSvP8iGKSs4JfHoXyfk7qknPkdDUPpfv33Mvw47BhL5i",
  "key2": "3YyEwVMg2EvFf44DTkRRjunjyEGd9x3KV6fs4DwqFB328aR3anJraKJXH5aQA8GTrRzZzztsX5mij6oYa3uaA6BT",
  "key3": "mZWcCLd4zqd6rYMNxnYLQUHk4fwHPENLnQowuNt8LJjARZQMUurjTir8hniAZEBguVvrERwt2Sf2Lb5ZvD118qz",
  "key4": "5Z3baP3v2YnbDRZjikpKG3TRd5faV912uDiYeZYKLFDmYQAdhMETYx5imfunALagpautQYye2RsdYdeArzu2J6As",
  "key5": "3Y8WpndJWa62pnuBs28qQFCZJZtsWSCi9cfZvrTMjvW4MXdNrXMbpQepJZoK4pRbLHYM5RuNLWZptRzT8jK9tHEL",
  "key6": "2XC3dwpwUzmcestgwxB3oGmhnFNYzUpsNVCCnHQG84RmS1UUwFDhxXTLAdFSYJMMwMWcS3ik5TeRViwTbFxGPWEh",
  "key7": "N7UYbM17RnpzsNDsjqNqgEFNR9Jc8VD5X3UanVS7nYfVkp4pmBRSGKbDq5vFQYiMVcchPaZFxEcJx1JouMeGMGD",
  "key8": "4Qd7JWkP3CzWLk3j3krM2eKbF6VSYG2mLRVYM9hQ9WnNeUrKbLz3mTYyxAycoD9gsDobPHS1JYfebFi7M4Rha3oh",
  "key9": "4VKX6U16XFJjbNrGDs8yokoRq1X2LaZJNLbgHRB9JD9juWKfeuE1svYyiFVZWbR6pJxv9Z9CuvQr1BwEJVDktkvN",
  "key10": "2TJ74XSzXbG59DoeNJCbjGrwpbCeMwoiwe2NikifBYZW2EmjFmraeLDpGaZjyVwtNYtNeQebRTP1xUQ1Fw85gavc",
  "key11": "569oDAkj6oeTAGXXwDEGifZddWPoKHvbwKR51DfgmL39WcHzvXT8r1X3aXvcFHSiw5FY9pAtjJqqjegjz3DiCJ1z",
  "key12": "4aFCXWyXmjNdJHiqnDZik782L5Nt6v8EFQnNZPvxPqHbv2wPkdJBTtqeiJ2Xvwm7iN23k8DxfdsX7xKerAi4qGhw",
  "key13": "2tuqZNA9bAchh6WXFz2ux5VcJroiJXKf3VZ2LHYDHACb4LwFpnxSuhPoS1RDkqyRRfPQb1MsF5J7NBH9j221HEsa",
  "key14": "5uejvPsrBcDkvgZADwN2JQpgHFVxgsHRiqxJ24dQzqnt28LnT6891QFFgoceBDhLkutx9FHcX1RxRZWSYt4E7KaR",
  "key15": "iJ7GCgJp6SLfHKf3pX6yM4DfScksa2AA1ZykH5aSxxWh7WJj2ym87ksJadqMz2vuLQTpmrxRM7hzmGZaW2AiBjb",
  "key16": "67d3WfnEpmXppC7AYQuFb5a9Dizt2SHiYjw9d6v4HTY9s2o8UfVMUKeBKCKfxQFUmNw2gud5PtUn3TSTaTaU8eo2",
  "key17": "3wZTFtm1Z1FF62ERJqf9JdByPPWwes2Q7j4rzAC8sxDwLXYYxJHe2ajRdKaNnV8JGwPz3b2LtXrNmgh1gFHBasK3",
  "key18": "59PdBvGsVPdMbaMQ4Fi7J9hmNbMTk92wuuQHU9arSEF61uqEaxrrLrjiAQa7i6yrPaTGfoJtZVDi3RdWAe3pXkLc",
  "key19": "4vvU3sLWjdvEuQfzZPaVV3PFW9dds3hxPtLrRD9pUBcNca3hprU979arBpSXKvq7wc9in7k8wzpY2dGRz99Qb1K6",
  "key20": "54kX6snqnCzcxpRTgW9C2rAKg8yxxPqeG9TKRdb7cVJWnB2zDLqQkcqYeELAykUUqsyUzJa43VjfmxifskYxd8dU",
  "key21": "2ZG1eNiHSc45zRm2mBwMPbcRYYojANL4AP6mVSKopintWiMSevFJCEVdo7hLZ5Fz33pVbH7i5SHCh6YCh2pkHbWD",
  "key22": "3eYs8fdDPe3YDG6GrFCm3Fdcyus9wUxa2z3ynfrfc3yh9QbVh4jtbGtRYkeqJpv2xqpxH2E84EPLeYPMFdiwGDV3",
  "key23": "5DDnMGsKBWzgQWghdSEAgL4rduCPBXetVSML7LZj2HkqbFGWicadVuaKebXXZDDKVBHiARe6wctnbWaiZ2n1i96R",
  "key24": "4z4k5U7DvxjZqVH5nU9QbyxpYJjog8zeyo2uqXfRNeUwrDF6zNLjEHNUnoNDCXcid9C5Nj862AgxDcDSxLqVQ4ur",
  "key25": "2sRdn7x4b6ZDhL6Nb9BMZWzDNjXPnBNkzD7NaLPD1FX7bZLCqzqt2dXwJarTsK7AnocTuHMFCrjkq64Q98ySoZ37",
  "key26": "3CEjq46t6i5WU9px2gB5sKZ8CfAtcgPDE6AjqyHnFyyPG7j3WBsPMvtq3x27F6iLiTwbBPwcqDzzuAAgXzaW8HRP",
  "key27": "3tEeZrGnfpY9ahsphiGpNbrEU9KVoLYqWmgWisFKi95LxeJL9FcJtrsCGibASdqwjJmz83edusZ3HG1Meagn2qmL",
  "key28": "rt7WzC9rgxv3vd4fqfDsn8P1xTprhfaPo94JeF5TodmC76Zc5ViuBFdzbMYw2UBit49X7kra4kX37mThgxBSNuu",
  "key29": "57o9U5aXDMYaiFrXWeRT3hsuhiJJKAR8F64jQRTPfnrsoi9sFUnLKo6jMX3cWYBRvwJ2CCqDTmjHse7xKE9J1reY",
  "key30": "5qAKUDeYAeQYcKytfQGGfFb68e5rtLTbQ8AswnKt5EYeoEyD79fUTgUmZJgDEWeLae3NCeWWVhVFPPQ8BXEryC1B",
  "key31": "3vNuj9ohjoL3abUVsaGpPcxEtnFvymWZpjfTiof2zQCRmkMe66CuuzEoadBmQRxViCv3uW4AVXecgqjp33EXXXsj",
  "key32": "4TzrYvPVmmd95SoJpdLGoYVKohBPehHtA77MgKwxYjcYbb6Rh3UvoNLBEz4weuxgTsN5ucNRDkx2R4YftRxU57jw",
  "key33": "5dM4s7fcPXenovbQx81d73TX6bYKMG2ow5fMeZzMSTuoi7Fep5ncb14dYpko8jduUgzMTmPnbv36dnUefgZZ22ux",
  "key34": "5Synkt45roGvzppiGyYzzQDmMwjgRk1efUg7TcCjPVoKenfNuNwDbSmaHvLDLLDG4HMRE5gfVDirhM97QM1mJibC"
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
