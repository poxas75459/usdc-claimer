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
    "3bcyruc1js3m1asbp5JckJZApm4oRXdA59rXKYHqgD12giPyAoiqwyFx3duyWCfcZVqQhmDSj4Mtf9acKU6EQe4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44MD5UT9w5nXgWy3bVe9vKr9VXXECXuZcwkUKU85Q88L4rWKtm3TiM7Z23oTWXjVJgcb7qrAiUMKRMwKTEPtTms2",
  "key1": "5cpudeoqJRSKUcSzPku9hKNd54EiKRfdFYkRgMBuGPWGq9pXjnEnfcQGyRi3itXULq1p2sSQgD1kAo9SK5ahSyZh",
  "key2": "4H4phSVGet7XGDgCvFGSEWaRvXySRcBPMVdPxiS6PrDGH3u6cpQt1AYH2uf3XAGvcZZLUA7UXAf537o67xEFhVyM",
  "key3": "cxs873hSV2bg2w8qg8qLQmacAYGs8re6y3Kd5mExDB2n3gxcNFR4y11bVL3JcQvrG1GH8h9LJQcvPudNMRz2GKL",
  "key4": "4CmtJ8JhNWgwQyyQ3Fa7FGUZAzYnFhGwa1AxLYcRNLnr2f63nMqSoKRqBDobZ6Dn2rJqqA12tSNTZDMahJbHcpRt",
  "key5": "Xvnzxwd3qWDbS3XAiWBffhjSMevd4stbU7mPYVb1v5dgxq9WC7RX8C837ZBHGBWhQy4JEEQNrCAPhmDgbfY5GNn",
  "key6": "2bi9UY3ruFhn66uydX3TKr9Zz5nevBeQMgDdUnBvD4143VLVzjEnWjC9LaQn9tVnQiaBk7CyKYyPV8XEbStASScB",
  "key7": "4vKBU6ejmUL58sVyRVsdNRBY5uzUiL1Ew1z2bAQNHbs9uF5u75MwMmYaHnTogpJtxAbo3zSpzSYHrZkrRgU1e1gz",
  "key8": "3xkn2oXhhcRuVdskyCi799EY4f8TzX8uXDVKTZAns7kb1VjHYi1F55p8CfmCXJc4dkX9ZERq4bih36LmytnqurRD",
  "key9": "2mNjG45rKLQJCU2QhbA9EGDQEWG6gtqz7ec1CpcUrt1p4zkLB91HqJY9u8o3Ahv2q5JUVVWoG31fRAcsh1wKAyvv",
  "key10": "2cw6ENENcyyvqKMmUB6qKLnYmKtFxtbEMPxDTAqWcU1AkRRJ3PMzfoFZXXAg8RtpaKKjEgVQqgszm3hWZ2qzaMD2",
  "key11": "4p5GNhMntMGrp64dYDB2xxcBYP6N2MdohpvSXKuNtcLNXmwbMa2CRPa5Nii2bnZheDc9Uchd3wVTAYxo97xFnVAu",
  "key12": "3ruHXRhn9A12EdtN7pgYJmj3MsJpGJ9hMWj5fU9j1JpUEbmCbV1XFWm1ssSKjHkYtJQj9j8CsENoYkrvVT5qw6SU",
  "key13": "45bQWcvPWyKRH3m6d2gdAem288LshJLB1FVLAqXSogvuXt5oiHXAhGnHa5KX3JmrefQkRPUNV2ftw85ouKX7Th38",
  "key14": "tTd3aYiFTYASQBM9FdJ2wF2ZvzLgsJKYXgfVftjfm8oAZiK2nqLKBPgKCzRAiqAHkh7cGSWo1XryEck8pCkHAdp",
  "key15": "EZLUbpBd4NU3ddNo2LYdd2JNcKSMDVNLS4EWRi4h4V77XikMbsQKUK8PkwPvQR7Nja5QRL6sNscAvS4PmUSZyjn",
  "key16": "4Lj6xR8VhJrfUAfNHG5HbBPi4XdXVCK9iop9ph7uLnXytskpV9rkjv1gabJ5M5twkQXFvqYuEJ5CXZoFGmBYZBdk",
  "key17": "5jxJLNVRU1o8hZmENWqEGLTzgTbGpLYGXjXi6rNDkk2EdBuZkhCxdgabriS7316RnKeR4hrLf2nJQZ475VWKTy9D",
  "key18": "49dxe8mYmTShCJa2QxHg5T1eJHZCpta3FtqKeJJEDCy18dLAYVVVMmroNfFzjrzEAzSUHKCdM3joaVX4GZJAtMRZ",
  "key19": "4pvx1MxbgtP23JDPgCkGMbewETCTQ3ePbhnNC5TR4bp7ghqRXCSpDqvG5i4HsyAYive8zUc1DjrT3PaGbpHEsdsR",
  "key20": "TxFsQ57FN2nS8vdeoejSseyyUbjSoPgv5nsC4gf6imdhX6Gij75GvLSfpjuBJMdzePQEtvzzZsmuDqyMxd7gPzu",
  "key21": "4yeob2hZ7nuPF2rSqgarNMxqZ9VtshRj5uj1RrRcXV1X7mNNQfz2PSCTCRYWoKJmRrVeCSKfJ3rbL2C17kEjNGrs",
  "key22": "3kNevScf7WsbqXvjhBY43rR8PSFNaWmXv48iGAMpVQxKXguLhJWwREp5LJyvRRZP9v9gecYWdGXu5ERuvuKWMXx1",
  "key23": "3ZTHqwuM6s329yiAR92e9JnQYx9NLfyjaj12jQKgRhJv9NzKP1wmcT15Qjq8zn1PgaqtPM5SHrKkhgw9Sj7fVPeC",
  "key24": "27Ltyynba5G3H8MJC5B6vThHMHwny3BzHizm4LKxeC2LmvUPd1haUPKN28Ko3DmPeimZPZjauXxMe1FkhVjvgyaL",
  "key25": "iVaYdUGm3MN7hvXNHqK7iVrf5bnLv4V5xEE5L7i3EWbWsKbTyab6Ryipu57akNnjAVJNpaSNAjJAn3pYoU4Zv2R"
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
