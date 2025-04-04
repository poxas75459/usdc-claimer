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
    "3BiVgu2cLApGqQVmvQqjqh6BbTptLmXARayTVXDTa1uBeDmD8FB9ua9YYUXDWLBYznUKMB37tbk5VGkTYisTLTxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fb1yF5kpcd1JGcCscGsuq4t7zEC6cvUDmQPg3VcXpC9vSRPkYt2v886DksYRi6ip2djduDRFp48N9pz8SvzUJVX",
  "key1": "3wqmhGdbi6xbv2ZjNKCv5Sw2HY1hGgJq9rEYVRBdwGRa2UFUg1PPcGtrsEzZpt2vpm8Nmwuqohfxko4dLq5i8EVG",
  "key2": "3G2MvZT8c1YhPKf3QAjbaR8NtAvNRib3suWyFC8Xh2zdekJFkuf2vpyatUsu5VuTJYGPd1UDJK6Ydpyxn3CzdEX9",
  "key3": "iow7hGSUgiZEgR4ZNfkT1G7FFxXqBMawhmCToxbenE15udYVtc6LR9E4f6Ke3gAcFgUxRQAHbhtN1Pd9hEzN6su",
  "key4": "R6Kii8t4LXGRBFxZEU7LNwk78YcGDUtmSMND5Y3XrHNhjJwyKywyFAkVdN7hZzANcBddF17VcDKxFhu2DKdzFHH",
  "key5": "57vc7psdjkqEVtXiKPGkxRd7kGohMNcv4xVeXgV98jMHd4B5vdVRQV31Ked4r7fNKfd6pZiNgoV3Q47wS5eM5hti",
  "key6": "5U4VXgtEGNh6BkTGrrfDamE4jMmDJJHWd5xBVh1SUHRikb8zpryUAVhzUBGdMmZZcTRmbDFbY6DfDhwUacz47DUa",
  "key7": "8jKEkPtZPEikKWsNrcertCdL2r7SaJHbPvNdgeypRqJg2ASeo3mEEe2CYkiVWpq2rt3P38GfWijPH7HNsefvWbK",
  "key8": "EtXR6twDuFHAYTPuwXqGsC579qM1fiXpKG9afvdDtR4t2rAQ1hTqd9d9kkeFQCPoRBDctatcdKwXuMU3UHLzJ1v",
  "key9": "55FPYoDeSSbpKSXNBhWNgdSRRsSmiWzP6zJW8twDrDqXhX1icoYMRZ1f8aHcVCxsk3681dyCF85RMMnwLV3uiFKk",
  "key10": "4UDixikDsottvG7dWbDrcPshazcJ3CYsWCbwV7xN7AYbij6Hx3yUt8vKLHe5K7TuhmJTEqjrTQ8y27S9wNcfHZJo",
  "key11": "2pmkuEiFnzk3kqm6zVE6gFS2Vpm8SVR7JKqnJ7F6FRn3xbq33FRmjcpvMSuRLc2eFiS7AbQ54Lz28hNc7QbFbZUt",
  "key12": "3XfXYrxshffa16zxmtU9HAyG4nosju8VsuufWU1NFqVg58DW6v6veYgb3V4WE6DbJHn5yPjoFD8x3WoCZ4NdeT8a",
  "key13": "2nxgo49HE833ke6ATGKUqTP6SpnsRkUQ1kRCKsByq516cgBzNjFpkbqTTzD2qd5M3SscpLhi6n5mD9cStPf4xpse",
  "key14": "o85Xig11LQcSKdZ4U4vJsiWzaGiBjvyFd7MSZM2icw2kEyTZL8Zjp5CL7drnD5Vag32rCtjEagW5SdysYKt1EMM",
  "key15": "stAwMMnQGqTvwbpTbj9BzjHEDUX7LtDFBcqcZs9uSCHni1pqDAk2U8JWhM8E2cfU5VrB858DTsiC2cCKp261sQ7",
  "key16": "r3TupTYMNS9xEvP7ahjV3mqFRmkvb1uDBRSf7ZXMakFjPyn9z1XbUyR7yCqnZj3bUVijFbhiW3VACgChMHqgLmN",
  "key17": "3upoR6ARYLu7m8x9ZqURryA4HdFBAztRqvAfeMkqGZfkkbASGbHgqZkPHzVvn3KniWv1bFzSTqYtaESiZfzSddMo",
  "key18": "4kPKwvn22RVBjGhryR4ynyZEcaV44A2pABqYyJiTHzNA5rdjxfDrXJ1uxz254quRsRyFBBP2MyvXgnjLYcLPfLqH",
  "key19": "2AvyrXsMRVYLzDqCyfaZxSzvcNBEBspeTasPXdigV63s1GMYbavSFXEcmxGMZdsziyP3TrKYXstTEgU9LmifnYvZ",
  "key20": "26DxrvJamhyXJARjotiNsFCjsesc9BsyPMzXz28VeroHY9CSuT6FrHrf2hLiu9vaVvQrFpc4BiLAwE82phxWfWQT",
  "key21": "5Kuq1asoZFtgFtbmazRPJhM5eM7QdKMCBzKPwzEoDsKjMxPnfokoEmg7TYjBEHPst2Vb93YSSV9dgvaZjkcR4nzL",
  "key22": "24qaT19SQUbDc6qiqjouLhTaLV2eCUqhCWHHoEGrbxyonyK3DE6NNPV2TMMrddTMJrucpUDJaPsAzQDqfskK3WvY",
  "key23": "3fELeCkXwXdeUhsWjzNxwQaFtBjMKfUKg3MKfELB6g9mKHTxRKETU6cPbzegNZQR2DbKZT1PA1jxbXa6nRjyr1Wi",
  "key24": "3mc5RTBXQeeHuui82tdP7FaG1Cdxw2kTtuJAuyvmCWYjaSPnB2kAt7cAZNRLTeq2SrKgnShDPjzMRZV1aFe3fwzh"
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
