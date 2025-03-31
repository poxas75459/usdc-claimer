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
    "2bMs4nLhF7HwQgyyKDPkcrnvWVdBybSP1R4p5ahd665zHfcw6M2BLXsPZfqnJgMWc4kTix3kdk8nYHuzeo7UtQ6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36SEnw349XTBhTDnJsZ33kfxV6t8ayaKpB1PaDWgjev8wZNigabuNTiCYChHxsMfH1kjhSoQ7536zCZj6mECLojt",
  "key1": "2fw8hfoGa6o4ddu4M8oWF1SaXRVLWY7fPz8JswCQjkAo2HTmFDFRSUGAsCVfuQDMQs8HFAC9KYELEmpMbdqdEY7U",
  "key2": "4jyYMTK8dWczKAPUZdajs5NUUtkSKun7zEjpmhuMWzpXRd83r4Zj6BscUXfdB2VbmtJ1gg2gdHCKEN5nASPbEHk7",
  "key3": "46J6gNz3CijvK9XGhF4bhXDJvQWokAfkaoCPJbWUkn9R721vpQ3JvmzkFagY6PfUTGKpfUzx4NEzFDYnPrfnhyjv",
  "key4": "2vCZYBpdbJzCf4mG4NjNsh8f2W8gJZf3W9KNKfuiJD5iZLMq9f1PgxtSXi18by48Cc5pq7aPX52cg2qcYoEBAecV",
  "key5": "4aozRW39dcbLPWsLTgeFuLHnEubPZBCFH57oe4qURUvaVQczAdo67yHyRreNHJxyuo3TqkTFnuK8c6tCSacoNosV",
  "key6": "2XdbPzHr6CM4CkTXSeipjhEYHPH9Zx1ommj4zPNJZTGAMc5f4fAGEpNf3mXhKnxdi4UCxmpG5a89E13uggmMwTHC",
  "key7": "4sZFdTPK65pQYMxhukySHwgnE2X3wAKxBCFUePT1zvwfzf9WnTW5YsSbWu5nvK6zNJ9gZMEPebSRZiyLL55su9WE",
  "key8": "3z2gv2Qb1S9RZg6vKxxsXbQpPjnGHAbx8Y4EFZCUb46nwEchKZiPMmarMJdboGqu7hxUCfrv8ToP2zhPUr6HvQNf",
  "key9": "5diXU1A2SYaCkZovp1RMpFtwZyu9hMzCYjQqgFxTYCrjVkV47EYbu77xdFjbgpSfe17kZwKWqAgEoqNHwEZDjUTa",
  "key10": "3sHmTWj4srmNVmcvhUQJyrX4k3ro7gqaFFcUVmddX4NCsAwVvzHV1w8TrAVf6qEWYDA4f9qACSK3s9i3jeHcqPtr",
  "key11": "5skT9VeF9rx5E7KgEEntHaJkbEvKkR5bmB7ALpWpXwhmvBtPnyVVeZArZ4cHQnEEF8ki55mcTcdWiwXRAD3e4ghh",
  "key12": "2AAdmYiTt1NdbMSxjhe4x4DwSv8VdVpX5ELcuHjgTsFrYCho5zi7Pw5oh5nJU3tD2oRYJM98NXbBvYV7unkKcUHU",
  "key13": "62Q9NUcHQ7wAeTKFqJ1p9ngHvrk9coC5jzPuy2hptBdM8X3WosNQvPUc9yxJWhoms1iebcZZVQMRk84ux41LGKLW",
  "key14": "25SfZgWUDYSwwrHWfAgWGS9rbV9tN59DtSNwyPSqP1mwUXpQeSXXsoBPstz1aKV2kePLzuhAC7C9p8948RiGkcEY",
  "key15": "QztDRdURZTd7p1eDrCUVjY5DX8iAh6X2ACc16c9BbRATorMSn96dDSVAVgRdKGN9KtWEpkhL16MtRh6wB6ecW7Z",
  "key16": "4ypgx5iBs1P13PFUuAuPKEuYmX5KGxvp67HG6u2QY3ACkddPLFyhHyPkpekHB2Jjg1ZcXcTd9xd2xNKpYBfsaCGb",
  "key17": "DyUPoziT9KscFmCM5s4KvGJ1kZifoy4XpqLZ7eaPz17oSph1yb3Y6QjYb1jZrqWaPTdbNQZgfxhEHNMwGHkHUat",
  "key18": "5m8jQRDqjgnBEqd12hwKFernRw9u3WXzWEB6PYkMo9yZ92qGJ9z8vPXqr9jAPkYav9g3bJpkjJs2A7vAP2XMS1nM",
  "key19": "4BxjKE6faVWNyahn36PhuGJkUxWww4Fnja9rYq9ewvUECrMRmNH8BwHGmbdU1ZESGRym1EonNjAs5BtkNSvJZEia",
  "key20": "63yNHXmTZ5nsKqDM1YmdTUNZchgCXTkmiLJ1Z91ijybbMaRAWCmQZRQcijcWyLkSZxuMSTGdDTGJx9VAp8y6Rg6K",
  "key21": "3r96AxAgKmPfBEJHhaQsf48TJqXEikui5wvFiEbiZuFhgzbendUpUtoRGMmamkrKWVwCjKS4vNzLs2En8L9qSMKJ",
  "key22": "3TH73CgNRBSpQF7pcFMAzLCzRqD9yf1QcwLG6AKZYmoxPLfr1mLMRSPCL3fpkHAeBdfF4akQZ6tUFhAPhp2b2CUe",
  "key23": "4UqM8bskCd2hvusexNzSvNzVBaEsbWBFusP8wegY4czquA2vXgKUDuuSMFXJZxpig9LdqbXsWKrDBoTbamnRCucd",
  "key24": "46hGCbBpw8jCxo91Dc89v8mHiPi4jT8EPhpXSX4TNzgZA3iPTVt5hPyJ4KEXQ43PonzWPoUyyyucZXPguc6F6CTU",
  "key25": "26bsbW7xaDzfzkhuwDsS6Y7sb92Xyf4PB7WNMZWFTmTcM3YPoBSYUmFwS7xzjazJW7RPwNYcj422e7JZv5g2iKm6",
  "key26": "4Md8g33CoDiVXnakTkCZp8JK8KEUKiRPe5QYurajTq6bxjpsFwrcD9zDeawPjMJvShdSGHu1tm9AXz3Xj9bnUQYM",
  "key27": "5mNugKUmewSUhrqM4AZWcxCe4kNJXNEroqM24VTLDdJF3GAFMMHvGnSXdMEqQcvjvDW8kk88bcAnFXjNS6a8bieF",
  "key28": "64FtSutfJpTG5PeXuq1qRvffxTGARK4unm8sVYsD7jjYDbW8T74GUyhMBwCodjNwt4mPEH7QwTN76QEARR1fbXMe",
  "key29": "3L5wjMn93Q4v9N3GQXTneTdjfp3u9g8dgGu5jetdtnQUkFNXmHvzhh97QN9EW69xkFWAPNBbsLWwk1UM1UWCh9xE",
  "key30": "5gNnTYv7gejDjCRDWqp193b6XeF3RAuqQnZzqvmLggjrNaeb2TRhbWdGrpufTtDmMiSv5XBJCR7SPSkrjA5RCeLy",
  "key31": "2qoe83GDmAGyHL6s9Kp3hoNPgWoxZnvxxPfmRNG1Xua1AVm8TPCfdvWBwW66HeZsJBCbXCAD2iJE6uQmxJEbKPZQ"
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
