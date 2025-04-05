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
    "5TRBVt2awTstUVwGaLWtyN1wfgGi7rHFJ2mM4tnJSqH1GV14tG3W8MbTRunCyEr4FdHmJmQvDQaoZCATCa2wTLGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uGWChLWryAD6SAFPFSfSe7BA2K3JwmzVXmjQe2kXMq4tNoxA4p1JQyF6MnPzYHXYMoa3goGZuXrMtKVgPg7Z2Sx",
  "key1": "2mYzT2qkTw2kxUG5u1e1bMHXv4aPQRjEDQTSdhJvRzVA81AHuoWwQpmincf1rriB1YxkeSL9RawimNMKowvHLiyY",
  "key2": "2c66jnFhaKi9pJ4MZ7S9L4Nx2LnCQ7NavfHsTsGkXg4TDwKtG7khx326jDaD48tqFCBwNbfZp6yDarHQH1RnEBG5",
  "key3": "55Nur48TXpA2VokfBYKozdUFtV99u3etBxYuBmXxYSrL5rhhSsm4NCemg6jgBkNLtM2vqHZLxJjX1P2CKhNUqpsS",
  "key4": "kaCTiVF4WebZUhQK735Wv1z3zdeZosRTuiYK4xMmETw4Gffx4RSUohjjoWddqTyMMCgohwFN2xQ7pf1oR1w9Akz",
  "key5": "56gkZ9u1adT3Ev8cS5r4g9Px8dZ2PuGDpXoAjVqVyxFRnBHZRFm8fnTZXGbQfk2g1NpPafnR6tXZvPgwev3M9Gia",
  "key6": "5S32Y8xBnmJdkYztpYNTNN6kmU6b5z7SqYVd4XcJ3MzK6VbJSzSZ7DcEF3N4uUo6iVSvoQEeNCuiDGzX32mFNfBb",
  "key7": "4rBkDXA9H2ajQSeqGXoA7eKu47mSB7nk9HkSXtmhKDQCcTHWQRdGZuFSVj5DsX4kgspPz5joXuEdC6AvTyBr8eCk",
  "key8": "4kMPomX3a7erEANngmB2qcH7NRY6zJhgAENWXK5g13CPYACJgyyVNxMqj1Sy2dSmwDq7WftA5QvvoYnHfFReoaMn",
  "key9": "67o3deqyKbUGgRhxQV4MvXjYAAPKYDo3rcMu4x4JCREi1WKSdy32BAoK4Pz5ySPygprWVYmDYazVYB86SqeauA3Y",
  "key10": "537nwQMf37gA34uBXyKL6vG7fPitSk1UDKmXAJniNHJAsvvdGCyoQ3Ck6W4dDoRxiSRnWmxRZLvQChWya8vfuUYa",
  "key11": "4QYZMuqZYSokwijnxY24Kba3qNCHDBWDEsY7z2LjLXg9roYqdB5iEESWveuKGJ3WGevS44Jnkfa2XRqvEyASs3nm",
  "key12": "D8d4b7BUgV5wVhVLjJC2y8MgXqf2k6XvYw7XaoDDmYMYDUmxAbasjKAz9u8sJ8kzsczRbNTkbbVwnHx5UFGEkhG",
  "key13": "3eG9t1eyEmo1RkH5MSE867krjCVpZc6yW11JvKVz1fwDNptE2B7RBjGkMiT788PkbQ79BMCJqvWtT99e3apdLwCX",
  "key14": "4FVir7gcYKctWeE7WpBBKXLgmQihWVaaRBjaXee5fk1g9ZTn2guLHoR3FHF8dzrsQq4ny5xq7S9Zw4BE4sA5Syuk",
  "key15": "4taPjxNyMQfj2JgvW9fRrZVGHFk9vKoTnxY5xN4jpccg9k68f1PvN9vGv3EoRQmCNMEqRk7XqnJ14ceLA8Axv4fW",
  "key16": "5Lh2MsFbrdCaBqtWT9Z9w6qb5dbGC5DjQgpe9nMkzQNXBhWhw9oUP7MGimCcLa6SummuNiEL9AEsYXBRW2uTS5cS",
  "key17": "UAXakc5eW7Gxm75xfrGwfbT4RLgL5iBGjJjDjmcvBAZSHhgnVK2j2FMNCN2zvwGEK4Y2K2CmP4BJAGAqKCfoUd2",
  "key18": "3Qbmh8Ud83nQ69WzU6DyHUxqYGrkdgHqUAmcfSCbGLzwHe9As5FEA9NyAETCkows733p53mMhU7a6ZRT3WDsgJ5P",
  "key19": "uLXQyim45pPumVyGQwRmA4pJrrfCrAEeW7iQXLbaAq5T6j7627CWK8ncsdCeZgPYQ4myLNB5qRKtDRUThBwtEic",
  "key20": "3JDDraDpXsS7n8fbWTo73obKkopTSpLnrTQ2NEFcVdEs59FjV2fP5Awy7UDrnRVZY6k8waQDdSyW3fN2JYdVCoVE",
  "key21": "2H9pct7RhqWtNwEff93NQVqttWHgcQERCbC9DVEopgtMBsuw2HtSTiC1BLa3Z9aSJE4oxAoJfY5eMKPZaxygnSB4",
  "key22": "qdB96igGTSkekZxvNWoRmDoauZ3VYhsj11gM7nyDtBLkFdsQ6WdVysQXaGxfi7NnQsRZdvFJX1MHwJRGtbE7Sio",
  "key23": "4AVXCTnVDRYbj4ise4uD61gdnzEtssCRSnz5HbACmfR3orNk1gdjzdmBbm88oQ9j4wUsTGNsxZ6nvAA7zyBME5ob",
  "key24": "4k6E8QNhzQVAFjm6kA8QV8bEnR9jTHu529BXjHPy5JPMMAvTeQAqEXMc5iAdv68gVHQYEBaMYuXAzrv34KZMGqcG",
  "key25": "4wjYzjr8XAjF6EL6ESzkkTjvq7hQwmbz3NgxcbnhLrGR3qg8D8HiYZhvjd8QvD49NvSgw2W4kRPZZb1fWAGZL5Xb",
  "key26": "4czui7XViJ8mNV7nEY2PZZMnBY4hc2gjZ4bGhAq984NGnyPsMNCHe8NrisPvqQgN5WzCEvyx6ncAKLAM1BmXGH7j",
  "key27": "4iyYcESCkKP4gai3EApdmitUGJm3tQM8WcaMFUd64dJes1rigmQt9w84njM6QW2eNaAFfN6mxGBA6T3REJRLNLvQ",
  "key28": "3prqyx5iGFSvHCEj9KSMRL4HHpcqbnjWAMY1SujMdVLQGqdhHb5f4d7BHew2hvYGwvQNgoobmJ5QQzicrkf7aFgs",
  "key29": "3sm4u1SXUr7pyfgCpZukA1pYcya6RU26UTgUabfp7dsFFrkoUxC3SiAQEyPAhagkyrQeHsTkScKTHoW5Jy19MchJ",
  "key30": "3axpjFXncoygXkmvdstRxnwRzg4bwopMNAzAFTdbPFq2hRWbNTucdHDYKRfig1mhCHbGpsc6ePPxzF1Q9c5Rg2oo",
  "key31": "5pGvvW7Kte2ryZAu7M9oJzRFPhMpKgYouN2CnBwCdc7bjScnQb21PWGGHHsSMGwyWB1R9pvqzfPveGnHxMgj9PzG",
  "key32": "45MHCsjYAWVRkYchtDnoyFwCGWKaxWHGSbEp68e7772HkunZL5xSJkTHYKQqXgnFawSEfxRQvWBhynBv5NzNxsNA",
  "key33": "23hkYFAWPoTRH2tWFF3jaPmCCoqvMA4fHR4g3STP1GG9iqRuFh9twKPHMTwUsyGtKnUWGdKoYJfrLwUW6GUFZxtk",
  "key34": "5fRDfUwRfmgdhVG81gsAbgkCEPF2nP3Ci3CEW93njUnmpAL5PTz1JttmkDBJpCnewg1AaDxMkRZtYEpFpaJSKgXH",
  "key35": "4vbMshHuhRj8C3MncAYcq1oYQDmXecZeKfqWabLu15J4tYvPQfqxfGggtepdGxs9E2ymkStJUucP43QEYjrcKiGQ",
  "key36": "26g2fJkHquc3LF9MKFURkqb8Z7DcgD6VjZrtHqQZVvMuZRQ9UAv7GhSd3XkutYcAFG7RGS8meR8yVD2Ls5xaJ66Q",
  "key37": "4dGza5bW4oqxTyFBkhB9GJJwMVhNLa7vqHVFVKLThettLEX4NXdZq3S2utSHiKkJ3JzwghSTRZEXFa78PdU25kHu",
  "key38": "5s3pwhVSi6Lw4jTmego7Vg3eTNAgMZzGFj8dU8cVCeqgfkBfGxrEKZ8EN7JwKTMdsAT25E3EkWuXW9AWSW6p1Pvo",
  "key39": "2ZnUEYikAPvadTmJ9kNFZC7c5iUiG1URGriPkcNDsXfZFpVgGgCUBdZjTN1FCBYn6RgEQLYxGzjvw5LoghgwJ1dw",
  "key40": "3qReDZt79fE82KKEjMo6prhbThj8fDaWUCXRB1KfKfP1EW26XpvBfPvvNYBfytSD7Mszq5Rm7DGb69eByNmeke2o",
  "key41": "5jX11wbbZ7wAi1G8pfL99xawNRHNsKbyGRtG4d1tkiVztGVYtsTKHP5BzPZt5PXc6Xwhab3258F8QurwBCssGkR5",
  "key42": "4L41GD8dJQxvPAqMx5b5Z23btcdjHSiEoH3RtnFGYeGCkBqjCxfunnuhRRvuZ2ToXCvYeLCqWbndFsf9Jb6kF1Y3",
  "key43": "4YsYf2h4BjYT7X7dg9mHcHVnnzCDZPTiAM6DnYLtctt2nUZpAetBZCeJbx6Y2w2G5LdGq5rM4r8Dz5VAhvAAR1Vn",
  "key44": "3ztfyMVLm8tnA7Q5PF27ACxjD8UyGkz5NhDpoJi8om21GBeC3sNpCcbdVmuoFegiyQNNhvmDN7Pj2g1AkwMSA7Bn"
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
