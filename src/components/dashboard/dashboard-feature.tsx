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
    "qW2GWWh6uMxmJfEzM5WmXR4QRXqLfnQyrr1y7b19yBzzAhhQTJzxr6F9etivBbxqn9Us8SoaLFQWazQ8dLno9CV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4TqMAs9B95X96uSHZtxX1v93yBLuZQf5LREWpjTTRspan7L1qBTVMwUJ65emmLFkBNDyU9tAd3p5tyDAehBeP9",
  "key1": "42HZoXnYwY5ZyAu67FoNaJJNxLUwEuJJ6LKkeKkUqNqwnSHq9JTXpF25BkPQ7LxQkNYaxdbY6zceML6AZLtuYQF7",
  "key2": "5gknXue7oe1eGn7rK1vdFb4FMTbbLnfqTNdUsaJ6fB7JuubjneqjKrA6DMZzhvz1VYz4emBo7n4TyTYbfbeA6gda",
  "key3": "FeLtchSEkMSD2HoY3HKtZJvXQ5Vk1wP1kMDQqoMuWBfcP9nmWJfiEceWkH6Ts7Y3Jrxi3F7FxxEoLt1vwS3YvTp",
  "key4": "4VqKJfdELDfTkyLnLJJZnxcQHcDnVRQy6migfsEmGVrnhuabuYVzi37USdW6i7uFvD2eGmMy7jYnrVSxnMWxg9eL",
  "key5": "4SCvX5YT65qbaJSnEPASi1Zh3KiciSZVBvJeYVXb5kDqAtAM54ALgaAhZZ7zz5c2fGdAtgwkMJbu73bxPMkFQKvz",
  "key6": "4V8Y5xzmfuHF8gea2R7pHPWwVSUDVBiTLfdMXk1NEKHBpbXsESHc2Pqgx56wGYABRQvbecThPp5yvDxK3SSbafCM",
  "key7": "3NaPf3NkHKyXTyRyjGEo5rLGaZw1SuFeRedPujUZK3BLGwN4kznoj7cqcoFXwvHK1rb9GhvLYvXbLn3N8GAQ7wKZ",
  "key8": "5fyhEa9XhFYvkqbSQwkEVpeqNCaEAeBv7QmxpcaEgSxCpRrxe5h5qRHcm2mQkcJpkBp3DxbmY3gjKwzb2Q71Q3Er",
  "key9": "3bJdrG8HgPuBG9sU5VhoSL9FvUCf8VAXgWxHvpVFKXkxCLBwGWc9V8th77CbdPD8hweQr17sWVGUJqXx1QsQYRwQ",
  "key10": "2xG2hu9U7u58mPeziFtozyWwYtywbc12RVUFH94mwW1M3ETLfAukeQSk3SyYr2zLCggwQUbsH8kFkWXJwQ9wn1zW",
  "key11": "2P6AcHwhrLWoiLonVQGRfCZHjMQTtMHRmTvZgEUQge4Xn75owhAiqvFCBPact9VFazuD1axb1sKQpP1TvRFH8Yyr",
  "key12": "55RJKECqdPj25f7hZRgV23HeNQzbTRK5NcWtW6VuVN5ShZ3SwAbNRtekjQC1JZrcWDJjmeD6ciscxghetrQxJHfX",
  "key13": "32vpV8oC4b6nPL2UJ3qCHmmamVQpb1hMB967fovRWgSHVr29SUpfJVSAZAAHxjMPmZRjo7a2jKeYevDFVVhwjSjq",
  "key14": "2DvKpVndVa9yUNjfxFnorp1uzaWc18zLqSh9F761Fv8oMvnKXhswk6UcYGZDuFjHXVR1MzPgTAsfb8vY7sKcf7tQ",
  "key15": "4mVoLtafMY73wsNE9Ts2q14qgLPHx1TNyXHxXxowFyLdXKZ5t3q227sGTFue7ksREKywxZkMno6fn5wbRQZzPkiY",
  "key16": "3UJ87jJPRF7euhVacKm4ZFTzTWiykQsajXsLNK1RcRqHzz3dAmEintHpuh7UFVwCxT91NToaQR9vvmyaLxj2ftzy",
  "key17": "4jK46Pob3B9zFmt9YFkUeAYyV9UMqFv9b3bpTpu59ackwPLVwPp8mwemCTUCuXZJsvSEUAUehrsua7qg3tgJQz9p",
  "key18": "5xjYbfgJha5HYTS1Z8BF44u2wa9ZnnZv4pueBESoSYR7qS5nxW5ZTmGk9pZDJQk2E4kszGNDZDwn7oNnbP3qh5i9",
  "key19": "3v3o9QBRQe7PPMu6iTdmsqq2w358eazFmL9x1Y3AXZPMA8pEFW6npbfrGtAXYk1CzQEEyS5VtGmLz1ewVp5uaJDW",
  "key20": "5jXmgt22nrDsYhCv9wCvigqcmuNfaZKorLmt16HsiucNq4yh59sfEinbzxZb5kStgLJ6gxtovtMCVLYGhYCF8tGE",
  "key21": "3hiVDQYAXXHdW1apJthpHM3Tj7SD7rZfqx9BqvgguEm3jpLVtx66L5YHguJXJ3gDSYUdoRNr6ftGUenVCsxaNTem",
  "key22": "3GLDvuTv8gU9hyco25H1NJRJvygYWTSYC8TwygrpKGpcZEgv2q8tGfTm4upWiGP4hSnGg3JQZ7UM3pkG61SmPPCf",
  "key23": "3FGdVGaeJcPsar5qJXRvvMB1ECWKJQ3GZ4t4k5wfSJbfgVVKto7b1B2yxfnCv8h81qG44ZVZCtR9GgfRbiuyQa8p",
  "key24": "2szhq5ZVL4vErJHFgEBMSBJWzhUcZZv31VxQjKadHU9oVgENpZzmM84p9WDRvEGLmSfD7AkZV412ziDcqFFayk7Q",
  "key25": "34qzwGdS2wzPmebGEHEZFBdgspHjktQECoKRjni14uFgAM2StgcLBhKopiVbK4i3pC7Gs7efUGXL569vG8GV6wRs"
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
