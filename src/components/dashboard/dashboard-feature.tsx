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
    "ttcuesYvg29CPJRQSkzFwK2wRpgeh2BZB8XNCkDb2aLzuxH8VdqY3CJ9MrcpJYeACohhjN2rgFqR2SjizFwNsEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9nHDGHE69qnSPpijEGhdAx1zYh6efk96rCc3RWP927v6H29V6sEjKxG8FmDp1Sw4C57oZxtnHimKefaNcN4JKW",
  "key1": "2dMGLMYEq3mZYm5K1JHSQKXrKMfgE3YaV9FBmk4t5baHVeSFgvi6xTA86DA3LhaVArekT2DncjxPjvCDgKrTpZYB",
  "key2": "bf9Vsd52zZzopbYFWJcHSGvAGYVThByz9oP8a5VLmMD4CtMPRsYo4YqzQ6us6xoTy95vLY93VZbNedk9qaeGD4E",
  "key3": "vG5YQirKD6Q1GpTLAAhT1sMRCsHnJdL8r5WakT1x2u8N5QbK9VDppY9HMoGeShzKKxhfpBWuN7qBLZYDhZ36mpM",
  "key4": "3A17vniNA2WhKW5Eww6RUpmHoqvb1MkhxJDPSbe1mU2YdPzxEgsX1xor3C57Cd8x1srUzmka8EKYbZkqwjG7vcR6",
  "key5": "2tgqasEWjk5Ak1EGDYQvZk2vRcVVHd3nXsPWm7zcUjy9g47B5Wy9ceZDZ7bURMXp8gdMnxBWWV8oD1bqVbE2gQKG",
  "key6": "KGwzvBWD7CWUT7BWHvEVt8uJFrGNeY547BcsTKsXHKewXSX1ms9g6JhAss5t3ajHHc6hNA5m9RW8Q35z6UFP9K4",
  "key7": "2UuP2cj6vifkgQHWe8gc2jKZPFn927ssNzhsZVjwBc6YA6x7J4BzLyx2hmBTqcgvufAPrad8BBhFyPHgM7ULAJbC",
  "key8": "5DT8PAByokqHTNRgn4RJcbsHauWATEwXpBsUWC3STiWjc39eoh8hsVBsqEvu3Xt7ZXfZxxQKewKnNgMeSFYVitpW",
  "key9": "4H31MkfvBYESsaKu3gHfTUkQG81XLKLzjSyeDSaJFHDrpeuFatMR1FdjoXvWg3VkZorSXtkTVRj1TLy7HnAeqMYT",
  "key10": "5af4vHEyGp2yREjuTV4QpE9LH6xA21fn1Efpgr7DRzivLJfVrNfACvKGFXFr2QvzTyUZYEXSjJ2zTDR7ZJwL95pG",
  "key11": "4jhuAJz99HLac2vCRKeUsq1SyRZs2dFU1frzw36yWwsRxgq6K54G34T1qS2ZXiGaDZw8EQq4XKrxY58u9tdhzfYv",
  "key12": "5NdHWhUgsm4X1ntCPBFfY39gSEwDQfVSxPGMqZ1EkmyAokaoKXzjk6vxGjKcfrp92YY5KXAsDmA8hKKGTSuJ8g1M",
  "key13": "27dGET5qAY54Gz1NMywp8ZJJCyo57dQZgj1ZrFzVS9MVnFdYTSdUFUxmcDbviU3uxAotCwVDDjaXuFwd6oC4Fymc",
  "key14": "2H48TSgTfnZLpkoG1QYn125fNTMnDS6yZjRQagkQGYf1U8pNjwY1TY1aB4bLrbvWrvwRodXfAu7fCsxCRJpJEwFd",
  "key15": "4oNKDmu6G2aAvuyY74wQrEZXBygiEfbiuxDc14HpjbWnP2GeZ86RMPdXfDxGZs9SRuJx5iKYFMZPbgHcvpkuBzmQ",
  "key16": "5E9Z8ssF86j7B9GoijbWnSKdDuPXXFXpuUyty6xqDd4x11fRjmzY3HsMtcPRxuYef5MiQr4naJZiWWveyW2w3t6U",
  "key17": "5mLEi845V5PNa7rg5Uri1xFbFpmnVRt5Lmq5PUMRcqLecaLjATL8jFEvWimjR7vHjrhMmjwdDxaXmdLn2f1EqwHG",
  "key18": "2cNQfKstg4258Uw4hSkfGwyA18v72aQBwfQggTzoTpb4boEUj6QtHTqswpHZy7SLiXcgF1fNALgGYamLoVrH8LE6",
  "key19": "4Uqmy94MwRAfeB7Lreb4LAWe6fi4kRiFDeezSC8qZs7P4kczA6spJnZgfmuiF7iBH7BfTrbkkfscqRKP5hmeGdGF",
  "key20": "47HmiPBdxbqNE6YBvpUkqT16UBWYmedUaVRKfaMch318iEniucGCtvuPtsoudksjRMz13sn1KDsWLbpBubpiRQvi",
  "key21": "2cFr3H4Z3y2MN9JwDVXU8mRSXnBvbHNZjv9Zb4aNeuD4jWAjhz662pTiaRMqxdmpQYw4JLWq6HjydaU74qGQW7Pw",
  "key22": "5CzRojjvSyo3KCMPZMBEin2sX15q9nrfZWeXuyyuVi4quC4YHhfUXZZHbLwmVZd3BpEpDsqKCURoBwm3aK7c2ShS",
  "key23": "4YBj43CFhfciofqmKRxF7aywftKXQPpQqvJvt7GTGZhy28KNMiHwUmLPWoxmyempX6eu37qV2Ge9FQebDNXKyzLp",
  "key24": "298ahaWMzcCy71GM2VQrasDxa75ei5kPPttkdHWC83REdmQWdpv1ECvDTQW2JSogjuwEZ6S4jdi4Qoo39BNS5Pyx",
  "key25": "48cVsKsYiTKVi7XwB15tDJM98ErGioXtn4bF4sfAbXV1mrGtJ9if2Ay5SaWBwu9JCsB25qG7Wiejvr4ByE3qCFUc",
  "key26": "3y1nPaoD4vdNtMRxCLuWZVpTiZFavj28GqD3Spr3JFTmSYQu7mCcFtE5FpbanqZTjRY5g1idTzg6nLgWE1M4mKE7",
  "key27": "2kShda5pG96V6NGy2wxtjEYxGZ8Lx4kgLmxWJqjEHXCst49wzXLCRdzyLeV14Sh7wJuqPacwisU3ksYAfQgnEHMT"
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
