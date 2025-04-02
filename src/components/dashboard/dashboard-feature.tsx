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
    "2n7EPKEox4ejzpmpjHDZd9uEafT5JHd1nVu3qnxcVg7bKeTTG26taomoXk5MLHfYhHV5UyUnPLyVzC6cgd2RjCCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ax8ohA5a7TB2WfrnnrKfePj7yZBsQyXmr2RzH11bSu5kPgS4mcFdJu2FWhT9RsD5w3CVaVv3m4xmCDAB6n6xRRD",
  "key1": "5RXBv3rDie5SHyYrREWcfG5MDWBkzuhrT6yd5cPZdb5ALSYHadJSaGVqqFvFGWAiyVA1uhWwrENuMjRmgajbF7LG",
  "key2": "2ZtgQEMypnSikZy3G9WXkfT7NEP4jJR4SKGWHLdwfqFmP5T1iSukTeYLcBocGMW2bPELPAa32R7zSUE7i1WgHeYu",
  "key3": "zDh88gdnDCJNks6tYpUqVe96kdLZhgMUbtgH16JMsPGc8SpWyzdGeY5ZvwZVgG1hQWrbyb7XbfqYmYbsZEv1dx3",
  "key4": "2xastC1T4ncHiMZSuF8FHZV8oUNiyBTNVHYZrvKju9XR5PyaeQh2nTDx22owq5F9RhiUYzBUkm92BmbwpFu3G1hx",
  "key5": "2CfHgrj5UKKCcogHSMvtrTejYfk6ZAwNKz1k9RLnwG8eB5FzcWEaXWJbEykmsP7vXazGACEZGxY3kbTpYenqow81",
  "key6": "2ETt9ARHRyDpqqiQSmZPpYn2kYpZWr4aLvuLKSEDZ4mndd2F8bMNLnkT6a8jTApd7aCXjRK5tDwvKkHzErp348DS",
  "key7": "2bJPczN5nJEFaRM8EUsrns5E8cftbBxtHzwr4rwXRA81bmz7wjwvjf9YiGoMJqzdYbVbC9Fx956m3xmahuT51yC6",
  "key8": "3rKzZirtFFEQPDTNRksMuFkvvpavsQMAK7uSGceqGiS1o27K3kxsy7hS7LLi3UBsXfMzfKKQEGWC3VghaKU4NmZx",
  "key9": "s4yNzB4j2CCJnG2cvQpUz4JCHecbn3eDyNH4MNeTtL1FpJYhcYkz49uTDRYfSMSivHvjLL43hz3tpxQk34rxct5",
  "key10": "5gztUsx2T4BzwadqAYJ8oCkxgVi3NAoQuBPXrAdXzjgJsStM59t148HCkpFy71QMhruHrAfYog1hiX9RwykEPVuW",
  "key11": "4Cpb8V1HpckVkAqTsWvbpQFZWa2WGiHEQ7UbEM4PYGNTM2E7VnRU44PjFmaFjiuVA6Qm7xRKNuMMv5VVZmVTtRJq",
  "key12": "3H9StNT34SNVanoJgX1cKx1aDBbNVhL9De44nhjCErW37hr99G23BbLvap8YXQjeeyYwzy5QknBAyKQP71Lipph",
  "key13": "2KqhVSCzp41Pi5iWMzkYPaKvCcit1fiuaj3pgbMeFQAsFgHwgJVPmTvz13gEwuNcK4abZrAqtXy5Hcnmc73UrhNW",
  "key14": "28GebuPexvsAQ9ZQgyqEvSULzhbJfPDs2ZZFcfTtZeNrpNo3z2vnsfvbBN2jU5NPFMSsegfMApVSoKTLaXhh6yN8",
  "key15": "4rZqYB6dXU4eeGyQDcPggjGwCdjSqLfjoV2YVpze6v3kmmpVeFwkoirrAV2GWzzaMXxejx67ibh6VAD8ivzZrZxz",
  "key16": "49FMFuwQxH92dZLWk7pnunAaMZ45ZqERWKJgG7zgRdFovsjGeezFGiPQPgiTtGSzK7bQQvQSSdsgi85X5SMRzrzN",
  "key17": "2Pw4J2zzXqc3uUCMBALre7hnKBMrq8Fe6biWdSVktsZa5EEwThFka29hTrSj9rKcYsLUmouq8zFNdAye4igBCMci",
  "key18": "4F7SCREuHiCb7py7mP8h4PeJtLSDZiCTBG26FBN7XTQqVBdsAmzcprWMdQjdZR2FQCeg5NTKYNz9sndEbCaJ9FyX",
  "key19": "4WuJjuEHKZ8RCYK9nUaEKLas64KKCnWCvDyQDqR2ovh3MNj9D1g4CJRxApcVZ1ZG98kZXFHWidqUK62c8dNEXqVi",
  "key20": "2ajAhftAox2Uu7paJzTC2mHsetzV1uNcvWFo171XEzJ5riYWDsgsoPVCEzVHT6dY4eP2s5apyjauUXzhF6tE5f2m",
  "key21": "fNH5EPeg1a84gxzrDX2kjmhUyihECDgbh5cF2orH14ALVmi8vLKbxkQdsGXUjaKxsWXdGxtSqAGA2B6BQnSgqae",
  "key22": "33zJ9GLzC77BYJsWN9peYbJhyZmjKAMJ6pFa1b2uePTdYKLeJGJhGmRC6SZh3Ewc3CWoxxSighvRuUut19ngVzQ8",
  "key23": "4Fge7dhU4HQ9SGeShgdRTDGedjtwT22mUDTxFr8NwYQKaaCEyCDBvzN152XcnpbMsieVvbpeWigRQjJAFGP5CP23",
  "key24": "HgCympqwUNqiGXEPZNoCd5VSRmg6326snczhCkFoWXAeAt9Rfmew4bw2AnwC3PvW6XKhrWyPDUeUhjz6EZTb9Yn",
  "key25": "4EigJtCrHAaLGdpPQnQhLFetpZPyrbku8gPQzgUBkM4bxawDA4bifiecP1gEQ3zNduAJZdsY7gmkLdm8VJpG56Lh",
  "key26": "4QmZ5AnQbJ5WCVax5zRu8gosWkj53SBs57FvjpcFoprbAfsSZ5mtScyh4UcHYBMHcnsw8FBSLJujvwVxpe4ud3g2",
  "key27": "fv9KMMhY1CoCZBHRQcfCDHRuQ8vJ31P6CPMvQsgA5MoQkP3KkwzYUCMm9M8bZhhN1RoZWSwrShs9jeRHhUaoTfn",
  "key28": "5mjm92SKrXodfeekK9o1aBKdAMGyFppu8rsGiQyVDRatbboAqGub5BxSfCxJmU7ij6M8aTFiiTVZ4RHAcnbBP8g",
  "key29": "KWpDebKpbjj217Ftx5HZ8MLk61TAUSVAJfQvEDEHNjSbLFthEE5hbmTUXVxobQGV6bWjBBsEHGBX17de94bs763"
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
