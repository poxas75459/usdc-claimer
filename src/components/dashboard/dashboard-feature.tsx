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
    "3EUNqVwQUib1Wr8MfqTCsdAW8cQtNtZ4gMht3YTWr13Z6bytjY33NfymHRVwVoTzPvw5hs3q8bjf7Lqdm4EbjACE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WhETDEceg655VVUcUKi4e1SWrdkN9ZvgHvjWsBF6n8sdGUBsNRpRtSaUFBT1FS3oUaaRTf9NSW7N5G3kHdfNEah",
  "key1": "2woXpBsuA5pAzryRyNC6iBapgjkNQjjDqEgLGnerDjMQTdRzPceAjjonoJgPe6aAtVEkxZ5ysuLNuUfY59MUpvxz",
  "key2": "3pTh91xzHBccge18xG4nyedNruBzbK1ZiMqS28ayAzZouPGmV3YnqfQC3wrHv2dtpxgda5EjkmADviYpJBLbodFG",
  "key3": "4xhjYtNn9a8Q6PcgBkeAsG8H7aY71HSh8YCJ8c1poTQbBLGCv9aFsnh5PTVwi6QVJXEjVR793QHw5Z5dqqewPXyc",
  "key4": "5Au4pJq2rB4X8GStzdkiS8RUHSCMVmUVzmyCwvptk2wMBjcLQmwqUz9Fk6Q11VXjTCNCvk13SFKdh4iDkHh4tdwR",
  "key5": "3PKoL4w2uxbLvg4jgeDftajXpaT4CKY9oWt5J6K92qQMHbTKnVTYkTtzoePEzXYDxu35tzJuTnkecTHuKEPYVyUA",
  "key6": "4b4swgPC1xsQ1Hpniezto7dCfLnN3An4ZwKgAFuhaATwJzGW5k19g5EKaQJqWuYCRCzRgwm8SDnf4TjxCq36FLcW",
  "key7": "4s1rAUGW1brBZaU3Kkq9267e72RfZ68aeGqQoHzgVJgrWM3XnxBRNLQ4ATtmcagm31NSFKxHNUY99XdemptKU1uJ",
  "key8": "3BiEC1UoepFJSGvLEEEtU7rZfxsWH9rRHLVcWCmfsGLpoDBKiAaTuxfNyjuPzkMtRcKj4uoxwiUqWmHjDs3bWMxu",
  "key9": "3TEa9MDgCvUNqcujTjMJjNkAt334ykdvoc7QQLDomxarEtCrq54RrvC1QjivHW6nPW5gwPxm3JZEziPpALoxaZHF",
  "key10": "51xZrvjRQhg6s1p1MYYBbPbBsoq7525gWRL9CB65WCP8tEgsJZb3wwz8LzAXFpWoX5PGALUgTPiiAa7c7Skwc7uU",
  "key11": "5ZbA7w1jMGTS2rLwSdn48bZ1r8MFR2vPabSjXzgPJQRKXJUdZk9ot6EnCcsCRvDi8jpWXSYkeENYKLwFKPMFPaEp",
  "key12": "2QMg3S9cjRPizBRQi23SKWYtMX1yh1dsuEKSGmuqLn3EnKjCtU6fbBipSuTPwxHvysn9GMo1zjagsrWo72kDr9jp",
  "key13": "5TterhpwzTvxmQLAQg8oyoJSNJ41vZEmY3mxyUZFtaix5fZbAjwDtxxUTnu2SW35rUfp8cWrtoorvxVs78meCRLf",
  "key14": "3sVrdPT5KD1g8YGa42PXNjbjy39syWvEPwwZVhw5NWy5LeBQnjnodgZyjfqWCQxvyDLF3VFnU8UsTvypJyBnsJCc",
  "key15": "2wPRDmDk5WXjdHVfo1wscHyQwDsuCnLgWbV9nm6jm96EFZXXCZc2691ku4RJb2a9MN7D3unxQmWeZ2rWeAVm5yKF",
  "key16": "cVnzyYzLBQEesZNDMVBfVup2en1DaX79Cv5Dd9nm3jddpuhdcaW1PAuPReRy7aRxq15a7NWGLjPuraPgW1WGwMY",
  "key17": "4dRATDKe63N8tsEDYPMevZgMGUoNjBFQGheZz4AhAQUDshGNH938Y5tAdrB74E7XQam6CKXNCVGt3WyUpFNqKdqB",
  "key18": "2NFmSPutyobutZQCqxZwdZ2XNCj1HTZ1e4Rg3SFzoC1JcmXdx4qGpfTyNFNcWSWupxk1MnZmQhBXJFgDRLdBy2kQ",
  "key19": "8XV5ikpPGaxLJ2HQis3uUCMWzWBCJ8BcTchHz8x9pTzySVXNJ679YS586RqivTzLfA4uZ1JzczsWXh3mbgLHMAT",
  "key20": "5C59CLK39enx4MDYs825qbPcjRfz4gb7HoWMfW6KAHXm3bDX2GPv5ZTv7nvB6A4aZzhYorNBZNMaiF4xgWeBghPw",
  "key21": "5eze8UWAcoV7PbNRGxWZfmpeT7WetxMU7NZR8rv9p72UXh1UkUreoodXj8acEe9QHJgn53W8R9aNrfebBrhcBmpn",
  "key22": "2MtkohfhoDU4Xg7kk2Fqgxzvz6uDwAvosa6T8QHPkEcJLT8QNcxBeCCrTBMzVWWegcqe3HVmHszoj9oo9kCGzrTW",
  "key23": "5KkBFfyJwDx6Fhu9cgAcjhFVmmoNCQXvTzYjB2dKnAYVGGYVcTqvA1Jszvh4jXrBPD9XtPg4FLjgf62VszTBQRkp",
  "key24": "2xGHnTpVMeHUe5AAwAMehGieey5yCctthTNVPX6qR5PTkC2j2jHt3XzgTRC2wEbxnRaq4skF598rhVepexxJRgNU",
  "key25": "4S4sc9zTzSHebiajH2uL3xFcSwRQYAzUer9cRcT9vVYhRX4nyqwj1VmL4ciKzk1DFSPcnjqbYqkCbmCLV5YgSPJh",
  "key26": "4mHtpio3jinvJgMMzkUVEzTFLuyiogoJNQmVkZEBzS6ZxAwaWz8GccDJHCPYXGDzbyAowBqKNVRerbgk63Cb7817",
  "key27": "5uw2aojTfwsCme29WdKatxtquyPgEm5gCs4GWFZwrfR1yGja3vFyqV8YnPUibY4kP6ADZZiGDnYBtnD1Z5yN71B6",
  "key28": "3eMjSVU4eTHXnzzQA8AWiqBB5h9J9XYS5kZCQk6WEVKL7LBWFEm6CEPMNeJEUMT772W5XfppBMUFNkyUXJpYfXGU"
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
