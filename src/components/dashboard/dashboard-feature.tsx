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
    "5d3DKXFXDbUf1ESdCacSCj3Q5VGPiGWpQ7pizVF1uUWh8saCmNteuLvJMYQ1Y66YuZtdsAxWDwrp9sykXvdnG2Ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Em4bytvXpv14HNE5GF7QwpBskaE8zoCQV2JG32jNPBf42mTJdDB5Y8sVHCVsXhWZYLJbQV2dnS4f2KL1ZkrAkcE",
  "key1": "3stSR2MRWwoZ9Ajq82u7L1bUgsAVfeG8UsJLhaBxTaTiYEzz6QZn49yznCE3kTjUL8hhZBEkRikTamDUEuKmXREh",
  "key2": "3JQLZCmLRVtWW3BeoRseDbpDcmCEwmGZGiqeQ5iZad9GmtKacDVN1W45ZP42yEvMdC4KNMSepyfGQZUZMmq6vn9B",
  "key3": "2kxPy3WP1J6F7sfB8LAAciZCXFsWtAjSFWCbRofEnAy7tsCB1K54Y4ZLjhAqsA9r2mkD3chsYKWRfvKeAoQHJvSz",
  "key4": "4dFCWusovvA1MsS7LQpWoG5rBAKwfik8WzN3pJzzVwE5zCz6Muk2XBByZaszZZnaqTiCSQjFNXzEf65pyb4JqgUX",
  "key5": "okPoPgvEd1hqB4hQk7ahF3gpdRXZ4hQhCmzUTec7YMx4qrXTzx7z9rB1fB8nznxXXEUHqiHY2XKNRDVKCquAiUp",
  "key6": "57SbJn6d19ZQgEgkMtzWCeRbHrWqdB8gZk5ND6JX5ExPsqGt3r3JML36AnzR67PcwrXT7FDWRFM1sk4UhwwJ1xXK",
  "key7": "4sHafSWQLyCR21YVKooRcEjuTRmCuAFqMga8gcQ1g2KgQK4U7qNGVgUDePSEbQ8w6sVjkqidaZLr9hcS8Qu5pYLn",
  "key8": "3KU5r5SFQPsfVk2z6PgLxvHi4147gcoiJk73aZHhLnGvtvPEAQZCdepm1HxFXUWqgwCE2XKgtsYzcqWU3QJoYXUA",
  "key9": "36dpmk2u3hBPUQpvyJYagGugALqS6hWBajEcVB6bLwg8tReqasSdS7wQSCAqpHQbdT1g46s4FSjhkwmHCGMpz5aw",
  "key10": "3a1AwYMdp1buWujTo4a8asCqfjtxm1NeTm8AnL6drn1BJ27YFrTRY7xA3eBNDVpijzkG9doAxascgcNua6t1BNZR",
  "key11": "augxgFkvCR3dqv9j48JYqfTthCtZAgosW416Tmi4NuJMRjYkHW2w2DjPScZWGpFkVtrpSM3oZgAdquZ2BGw43a5",
  "key12": "5EL3CbtxYCHzxmNM354Ak7PuNETvmvYreTwo8nARwZJtZUpztyRsLA2iCQyFZ6TWLvERzyJRnEhLiNz6X3s4An7r",
  "key13": "2CTLQ72LGJBvxRoF6KaqbzbmaGbJLwzRXQnajw8AquCyka3ECeHhP2N89BaTz2UireaeQghvpufc287FN2XnBCwW",
  "key14": "65kytfUNQKwDuoqnWWu6ekYJy1B6jkPgjAn2ydbmXioU3FsoKz8pzTGPBNV7nepysyQonXQHog255CGj2ewS2pmE",
  "key15": "3HNZYwgReGxJ8GTSuPaHo93KhhZDkPfDUBD8VT7V8NYBsdv7CkkzJ194oHaeQ5ecV7b9ZyAN4RbPnc5gz5ppbbaa",
  "key16": "7LMtNSJGscxdxB27unMvxHAEScYCn6dgzQN1qfJLxEevCFgRDca4kJJ2PyRrs3y89WLKxWEFP6ViDXckKxDEkpf",
  "key17": "45RAgH6kmEbJzkTy5b92rWud7CkepRNB8NUHn63pFBEoQ1VwNCafFtm4kfc9TkF59oGBBeMhrSMaFfNA2R7ts222",
  "key18": "5vcDMkApPuAJ9fhY3HvM2zfNK5UU8y7y9RiMj8rNJAms77N2SXRF5CAPVosWqszwbfUiPU22PtHepnNF76LAtBUU",
  "key19": "61EFaFTajEP5XvboMSK6U8ukdkdPhTxP3h53Jd3WGw5yqzcrpBGrgDCkAWNw3HndFpJtgHCMRQtjQcHFytKk4DGj",
  "key20": "3fcfdezxPVK63dYgGScLhMdFTGGRm2KAWGj6VNjAaqAUxxTi8bF57HSmYGUmJRJXAWjUYC7fsRoUfYd7BreJffG3",
  "key21": "2mUMoLSwvZZaKxnPnQEWYt5TV21a7hdbeAAbjxBoay8yRMkgAQmpFwBjAtucnpgF54C4LNRCNtBKgYsQvuH1dRE",
  "key22": "Sn7mAEu2KaHD4T23fFonRtsbwQbcp3sb5HuhXwkF9RWnrMkAm1ifVi1u7Z7tHfXB8HFaXXKkVKTzwpDjJ1zuQv7",
  "key23": "bUb5Lmm3oXvafJ6KvUjpnZxBKujNrBeNJp4GJ1rb79UDYSxRX5fGejCo79Eq5YYctxUNY45aEGPx7fJF8W8e8ZD",
  "key24": "352S9GnhKmPwPZLksLWkFJADqQVWXw9dJkTxKhgzPt5F3TC914BAzcgHZYjvnPKhsudXEttcR7CCuEueGeGroPWV",
  "key25": "5kttExKiE2qhCNKYCvJ4qZ9pTL8pmFnuWYkfYsr6gfNc1VVcmM2JzXrdwfjoPkvJV9iMqhDXtJvu6uxFuoVeqwyK",
  "key26": "3P44TEeppcjmJGzDoDWnt6fxWiAkZzygVqYS4zZknUk43brrB1tzf1rGWMJTe45XqEPa6gnCQmAG66XkkVKbMjVH",
  "key27": "2XGcc2bW8CJFN8vdY9MNZ9fYDvFymwAgnZTnjTLbmwP83kMMbb7jdTAuugrszgp36xgffo4YwLz4MvGXcf9FzzvT",
  "key28": "CKdrFwdY3uoNcNZ21Y3bqinmkSkXkY9aghZ3mjV9CGUMwGVtnfp91tgn26WYf8zzyGbQvfntK3tL2LBYL48vz5S",
  "key29": "2HZ8DvE7AZYXQGndxFhrqqGNo47ZtQz9pCH7QY9nBxE8SrZxuuoGuSQ4G35PZPVn8pqJEdqyCqT2tPRZB2t6wudF"
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
