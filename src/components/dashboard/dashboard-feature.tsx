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
    "VWztuzjDanZBZUJAqjzCum1yQJJc2mY3BQ1b6w8iwJaX9BLeZPHXC5TUh1YgP8CGqwjcu5xnQYqv2Akd7fSGKTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L4WttoVLMB7DkXRQUm63CCfNc2WVfsvg2aHGN7CCLXNw98fYzkyye6UwSqE8XZ7Ch8CxLyM9tnmzKdFPgoRdf5s",
  "key1": "4G7mZr6aizfBYdizDUf6f9xUUAqKmHAC1Bnk4arkqKmaiXFmvwaYFHMHkbcMfGuvPTz1DpjDbDt6qLNiHcxvpBEv",
  "key2": "2T1M7iXmp43QM7xX9CCNPxmgZLcK1PZ9kfJSgeFpTyjdvFEZziu91gpVBrF6xaFn26vwsDG32jF6k7bJBUZpUbSA",
  "key3": "4Euf1E8Anv9CFg1c6gp93t4s619GeqGfVgChiHvDowVqmTmR1CYp4fDj64aqexuApCHoef1huowKLHTrVRThhYcb",
  "key4": "XA36KXTFNMSNZbXMenSR2fBtwiSTUZKBssa3vUTHuKYoFmp3eMrVvEgJ2ePGAmekviqirWXzixULrbMEXRpdXUR",
  "key5": "4Hi8RtkoEpvbnfTF4to3XvTZdWXqm4GtMJFWUo3CsPFDMjrCniyYm3kkbF2FhTuYPzBM5Gt1yEHnKXn3wMQ6PxUy",
  "key6": "5cRFBsf7smHwDwLrB5Cr4FaBj897M575Nbs3SB7VtxuNoSjgDMgQLDWzbzpBZUu8wmQCmcgwUUVkduPcm8LeXbEV",
  "key7": "2GeL2AuLgNyLsndpwKbyNj2rBrJ2yjqCpjW1fkM1jWopiYgXLT97h1bHZZ8pYMptYUKA8bGroA8zYxBBpjAZdCer",
  "key8": "6EwGjiDKXmzK9msDxg5TXtBp4UAUSWQ816CCjnmfCdn4UbhY9CrZAKKKnwuKZjMx6SZAYDpAuxuZTRxJj8VNDih",
  "key9": "V4ry87FAhWHUyFqWLhJWyeNPTFDQTzt2gQFLZANM4rfPCMfiai5XfgWvJAng6SBDDHSDTewLvwSc54KSLU5eEFR",
  "key10": "5GdHmogpz4nctYks67jdKXxxr9T3vaZri5hNdWaTcnd3rMC1Lo3rdQX47cWJeGwgusYe4GYjqK33fFxgthdwkmaD",
  "key11": "5nPXDzLYVeshKH8rXs7FMHh437DagELgLPfzTE1LfrgPBGWGUSUYAmnLetqK8ekiRsdt5tYGcQHiNA4Nt2VpruEc",
  "key12": "4c2BkknywLyDzD4e132XGL8E6EXvmvMp2BjDpH7AkvdEqoZijcHELpsnsYK76BkQj6SmcypQh2XkQipDCnjomHXd",
  "key13": "3Tt9GxeN4NQLuudGscetrZw5Zcdz39bqcMFnd8t5QF56JCNiyHHqKxPk621GcRQDq5mpygZZe6PeNCQoJaBSVrmP",
  "key14": "GbtdZKmCBYhRWvKLZQF6859wSUB5Zsx9qF8Dzxsr7gPNKJmr2f1ntoSmZ7U32B513ND1LsS75SY9PwxwdopufrC",
  "key15": "2jrRKKf6sg9FLyzUbFC4FssoaxQQu69pfpsWztakD4nA3Y3VVuXgsypKc3rZRSYkfg4av6QL5ekrJ5jzubYZR7Pa",
  "key16": "fHeRuipyD2ofHcHJhnjDFy5PzTKVdseZ2BZraqrFV93XMtxTdnD4MYPSqggc3KE388ZAjuSyGS1EGKewLss5H8B",
  "key17": "3i7fB9RADkFMaqZjyAcLMRT1PG3sqFr7KLebbVBzMr7gsTKhdpTwbYdWC9BvJHxWJkQvDrznVEY9QsFH6CzY57o8",
  "key18": "2f8qXaxr4QWPTT19iyezkzm3BbrkhqmtSLQCzQN5AEqdHPRq56BDpACNu1odUwzPYSZH4C8f8wCFJcZHTdKXqPeX",
  "key19": "g2QrRhKJ71PTWQteXFx4EQKMeac7tpM5whBg6Y6VnvEY9Ftv8cjLnJtAzf43C4nzzHwbALGVUDg765kEYcPEe7V",
  "key20": "2LtvTfyDDXN2XHTfEX3Zc6xrcNFr1u3QgYw55hJk28bCwxsZARXUgio9EzJokCGwDbm5gU3q5p7RKtAdT96AKQbR",
  "key21": "2wjKWQHGrXMMB7U2bn1Vdkz3fFeteHETDHgBPL3CxELxn64wiUPzndSLHnC5Jcuw9kSRGwQKVNwjPQSaNuSXbhjJ",
  "key22": "53avqgqr3STg3X2ngYuUEtcgPMf6RKwmiqh7BKNvKrSh7RBX2ZGus9axs6tMj6maFv2bp3f22F1CCcaBDzKVxamF",
  "key23": "2obx3PQNzdw9DnXbfA9ni1rxUxR8cwSup8UFGrjvRfxvGmEEoXV2rD8mnvWCfp5pCcyj1ytPKau7D95h3LJZGgzC",
  "key24": "5DJUpSSSAo6NnB88yMWXw5p7UJNrn3LcrJxRgfRwLbamkV4Vucpty9oFz2jCAL31fcRyTetpAXXeetWvvGEpy3fS",
  "key25": "5tBwfyqsVDU6kAZEReNRMMUGiwNRFNGQzihGfKNkC4guEZmHeitbuZT6PxAW6GH3sAGpTRCXjHFLmFWwigb6efop"
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
