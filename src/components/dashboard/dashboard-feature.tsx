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
    "4G4s3dKYV2SuL9Yp3nWXs9895R6EhFctuubRsK6JMKVcwHyc1JzB6rZfhXAQLvPz3Ho8HrmRr4hupp5uJ953anJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzQTjFjNzEwUngBcLwWs932hGQajzecKcWKrVbhFKSFqhMpgYjjeHnD9PJ296p9dgbkh8u1MW3wKNqynqjdQYUi",
  "key1": "4KdtJUjFhD49uMzu4d3z9cK1tF4xiHk7G5LdSB9SPDwmTARyk2pN6u8Kv8cw34KPoXfhGv8JSLeuQQYYnKKeDCfr",
  "key2": "CS7ZcKefDiKf6xpbyF4gR28teMgkaBz67eVMgo52ie8eVpkMj8sEwoVb8kZXqzHH1ojozPKxBFoNCiBTUZASi1a",
  "key3": "k6F9Y7jLGtMj4F4uz1cyXNKHETuuBYtDEHQ1Tg2vCbiGci7PRf7V9eTHS8rMEHeiWapn7gyjwSwiJfkdQcSqnk6",
  "key4": "Vmy72yx7PdN5wMi4KfJmgan65SrDHdezmPLSPwAh7c1QVj39DucH7WKEpbHtP6fL7iMvG6QHR2jJuhEAhNsfDCn",
  "key5": "4F28YC2tmztvE3fwBjETLYEQCZAn3TajuGBNP5eWJomABfA5CNTz65k3gU9DGNn7KvyhTTHoaAFWxiLSqR7crzKz",
  "key6": "5nHKzWh8rUJ2KXEXzzpWoYm62AfXPgCCWTNkAo3p4TJe1efGMStm4gcNMVqmZNnVh18uHFmDzPbvGmemAenU3yrK",
  "key7": "9jigfvNdyeeiSwqMKArj1TTT5k8ciVfEhfs4b3CzRkk5oh5P8fN4eocop5fefbgUTTinCtkw9mQ12ccwiFTmRnA",
  "key8": "4coSu7KbvUx1VdqQ6a6BHE3SQjZgdSHa3PFsEQcccthMgikVbBtofLTfzk9Ln6zqfmoDS8Q1rKovyXgzvwgB2XnY",
  "key9": "dTX2Pi7SJuDkKJdXhNz4t7AhnwUntsH5VzJhzU6h3xcbsjqdnETHK3mNvYHoukTQDBLAqsManJcuqkPLQodp6jY",
  "key10": "h1C6ar49geqLDoCqj2ND9p6h9dUonbxUZJABZT5rLSgWyncSKM5agofa81QnvbETZyRsrHnMBLhusFWC3L96ueN",
  "key11": "5QoMK5V1HZg3S14ekfnNBdw3QGz7tgE6hj568Cnk7MqkBTJtAHZUutUhBPMpotYMEGAAwiNh2f6eKunpqtKDkPMs",
  "key12": "2pcB2bbzaoZ8Xq4MniM8eyunvBjLLNpRCxnmeWAVbebtM2k2sNf8jp8SvPw3yigK25e51D5aX5XvjfojM1kN5KRY",
  "key13": "gZ2fr8WAPRPumkTzipAbzGdGLoqtZM2aCNzdVzxaZ2ZkcdLrpJyS4q2r3BUAAjYqRVRzPgEMdBnucZwhp8VRyim",
  "key14": "29Kv2JX1SXdHezVJtpkb2HDVSNGyytUeJuXQg453PHpZ7k8cWpQiwKPZbedEP7hftYPWuyPu95mfjFkFPvusoxos",
  "key15": "2aAnBbvy8vTmpbktXekuncyEq8KLQ5b8KbcyeWe1w73gecYqgER2R2LbrFKgciuxuL7ahsJm1JURJN82Tiz2Nrv4",
  "key16": "RUG3FDKxEZwZ3pgLRtCmUPQJwoDKD1UUuoFXxisPcs3LFVwkDCwR98TTscnCwTtHSu39v9qk5u4odtkPrTHUmSp",
  "key17": "4uvjDbhSX8eU5dCUmvzi8DtJq26FNxdpyPZ1b7YGUWWKR59FfizqNW8CKBwgiEdYEuWgPgRmtGyogPezrBukaidb",
  "key18": "2SpnoBDvhti283zGXMJkRKJTeXqn3d3rruEqRqPytCcLSV6qZ7j81JsFJ1reS8DybgTef9m1VPPL6MKcrXK5DA8W",
  "key19": "2hJwjLxJLLggm3zDzdqmVQzMZhtKEziaQ4cMGYuW8yX61yMAYQWmnSEieUgo5pXKj62Qmazoo68G1U69TPqAXyx6",
  "key20": "5aXuC76hG9DtAnEsX5hV1e3jk3gXxPuwdLkw9PiWxagMZCGJXP5uzW2ZiPc9h1uVEb43oMiBCuYW53MEb2n2C8He",
  "key21": "3TEqvv7bMVkived1isDU9kd4gMAr1Cj4fWLa23D3tS7skNuj9HKe4BL5kuFPK7rEtvYttaTEFZBGtDGcwXRxP3Z9",
  "key22": "31befW7nj9c6ahS8kPpW7Bmc5A1EF9sXyCenqVmcQKfAjbGgef6R7Qga37sxoy9UzJPzKvraGc3qKsVhjhkKUhUn",
  "key23": "3LAuKjCShV9Q27trBHCFZkiDxyAzd93UDMFhwhSqeBT9Wjnvnc4yXWviykPVj9DKYJQgxAW3NFPzfnXG9DdwQ3hP",
  "key24": "TnM795fzRsxKadvaZcr46o5vijHWLxkD84rzA6cL19Y7ziSEJgDhVgJNg5r1gtE2oLXrwwE8RXQtwMAPW1c4n2P",
  "key25": "4iKZYBRJKMfQV4PzyX5WV8k9WEcJPS383A5wG3GhhMGcjX5c7ZhHpbEuPvLRqWQVkgG4xLWTyAhtmjzrjFJD2mJQ",
  "key26": "5SSSjiBZizJAtDGvoz7fyBbu2xANCyhDBwJNE7SmxwQCzJsH8iY5bhN26fuJc5peCqu3twVBPGXtA86G76jnSL2h",
  "key27": "3vuPsEmMLCUGDPU2HA7BzEymV6ZnvAwVcX8M2xJnTmfaRcFXrKLEJ4mxasSiwEH7KKnHNHEfDYvoWjNcEXfeWeAx"
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
