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
    "3Lt6z4TgxzP6ccCbgYqRJ6rF6dBAHGSsNkc6Bvqnb2YGXHtJdeZpjgp33DYxwwRjij4oRyBJLrpfN2DNjDQQkpXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQT5DgrFPjN5AmEPrXC5NJPbp2j7jMnSGrok6E8Vstb7z4X34mgLyWf48SkQAHCZicMWsPahs93Dahy5JQDN9HY",
  "key1": "w5bP4nYNQ5GREH2zKLxfrkd7HtYub7NYwPRryV1ELQ7uDVbL7hGPcnRum7VpVEBFtvxkXsfmW27GU7kqLvbam5h",
  "key2": "2B1vnCe49ZVWmpBjuegUJAZmcojgMXBvSpjYWuyjvpQpSUjd3hPLpiH25trYXEWg1v9je96uZtRMRdZqPgGv25DU",
  "key3": "3Q9STxMVqsyB7rP9FCBMdGJnPRe2TChf4VfG4tqksr4nKnAs74iUmxzrg5LedtcMHzgjvmvCDFitGSNYPHPXSvsF",
  "key4": "4iu9NLuAVFPPezcE2anXveEkxovBk1G58CqZ4z9JckVG4M6jMeSV23SKRmPa67PNmwnttEcPkWzRh3tSoYffHRpb",
  "key5": "5sSZawwU5ViaJt7miUEEBQaRvv9aQhgMibxjxFFm7DdRQb12K3qktwJ9PJhioPxmG2yEY15LcGHcKtxJAyod3kDj",
  "key6": "292gTDw1Jmg5joJoHRWybLnb4zjRhZmnPKL82UmzJFBuEU73XYCp9LcAzHuLYCQztB6xFxBTTz9gsT4QZY11qFTr",
  "key7": "5mVgiXVX7xTt2AW4FrifHQm8u931QT32YCi1UKkkdNu5GL9Ye9PFtTbXQUBeFSpreBkkux8H5LtJDgnHnhkUSGv",
  "key8": "4Lsto47swqT3EL4DWxydR32wT7juMoKSfdg4zPxjyZmqPdJUi1fnyyaxX16nSir71smyGdd6gip5eVwBUzPEwBKF",
  "key9": "5NfLDPzqeoreV2ojer4sGBX1YzwG8diZjVVh4vrFFJoPLwpquZDF78UQTtV9Z3gZ75vo1mHjxbr47pA4BnEHm1BL",
  "key10": "odcQkn34L9KmkemxLjTJaWBc6fmePH42essXcnoxuYtrqomSn32iantLuaApe2UWLpmaFMjyt4tcJ8BhNzWZmXN",
  "key11": "3mVHCb6uhqpFcAqw89SgBhfjkoPRywQUKXxnmaQYAqypYTzqvPoVHg2tBVYQ1n5npPd8Swr4gL9ir6wHmPXHXvgN",
  "key12": "5kjKFX3rzqiDaNkBAJKaVRtFjStyLsD7piQDtggEzJcH2ujR9uubjguVQudNVumcdg1ZGH9RLdzq7SkERKfB7wLE",
  "key13": "524f3BjJdFgKtXeEP3BLNWwH8BXDNBEwmCw5CMPkG3gdAkSNzWBPiKW9r9CRQ9w1D7uxPN9iVMEmwpQ3MJU1JUJ",
  "key14": "J9xgRUzvBqCrBicHpbQN2SHJSUg2smVMQ3ce9F8NxGXvq417voqMA9apMLRToi89R7FaL9LfzGMbC3wU8KRUx5i",
  "key15": "iPX8sXitcxoLG2VYBwy8bh3RZjEAFDFUvxoHJF77mRUREcw3Wk5skGb8C8mhjqVYWSewRWyJ3kg4yFkx8WM2oZA",
  "key16": "3YaJ55APQfLG2Np3aLmdQfJ6JYvkcfouKGu7d1h8TKrferwiGP4tgWyyfSwoDA4Ts53zRkPbwud4S3X8qTx4yhQK",
  "key17": "8Bhznopy6cr3V4CbWNYUMgJHkicpznoUw1nJfxCcomF2g4qdy1yiQRJxUfEmMWRsDHxNbxx3e4BJkaJomjdHzSy",
  "key18": "5SK5KZGzEBwPRzLM3hGWAyxkL6pobG5VwuDCmbtSPsxcdaUSKQdKkhST2vSdiD2nAh5fWYkazH5TErXcDahKraVC",
  "key19": "2dwZWGxfczkVLs66ivQZ9nUia7wmSAKjajfFmbKWsZ4Wzr61ArHZVisL9ASxv6iTzVac9QCNynesSDWeebYUMinT",
  "key20": "38qqBzSyGajE7QfeU1xmfW8L3VWuysTfStVbFo3iAHFuAzYiHPek9ncoFWefxdtpJLhTW3TnAJicKJiHXYQDJynB",
  "key21": "2fhXWmmfsyLAATRTroktPgHUdii4KH1GV64N2czhT8WTpCgrd2b3RNZAMz1CcKW6ADTBt4uw9rgsq6utfBwZ8Dj",
  "key22": "5mAMxGPwhXaArAE2pw4wE3g5XR5Y3L5EKA4SPDRXoHspH5WVu4vCJkwwTf9c9Lncq27FYP8GFPBgRt9hDKH5Bomh",
  "key23": "5BsKLVEeUXdtrnTLdDVJceQpDsi23b1Y3wj5LW31N26YVprgKkJqDr7hCr89tVZYYtNENMEwEzG8MoZuJxkm5oCS",
  "key24": "53kWnGMJhvNodFUcNdDKtr9Sn3ZNmzB9dtHcyp5ohbcTC6fZLTX6UXcNaDmfaU77ppoS7czfajWbfBJHQLbzV2EV",
  "key25": "3oxn9DjTqMXfHNx2cEiwEsSUE6oLJEgJm9bkYi5EgBs7mknF898vksjskyTiU6Lz9Suu6uES3kKC1Y3FzDSbyf8c",
  "key26": "2Y8oBnokoLWqVBw82tfBfVUS4M8fiEpATP2Dc2m2QATvwfPv8XLYdEs7LWRVVcTR5KfG9mb63stwdwmq77SmMkZ8",
  "key27": "2ruoJJndSDyMtTFFJjYkTqeSUrqPMHTtDFwm6Cb2jqVzeFqhF6gyAgQ2L9bvW7mN9etmXMkAhU6NcSYCaRv2WuRZ",
  "key28": "49nnQo7wgkMrLodXmFLw6Uma2Czvqvjuwp2bS8otSipPRVmzQY7sLFPV7pEq865BPd9iKS9REyFDXJ5gq5WXrvXe",
  "key29": "zQHTxxmAD6QQ7Svw6qRRjxCEKDJq9PgycAQgmxxreFJ5WhxU6Retg6JToLZgo45gTdFedpXe3ZCGJa8ZHgFgDhm",
  "key30": "3GsSVARZx4D66WwisnKNpRoZNyscXoyYJWUwd1uLLdUPounPDPsLGJ6ZAdpDpQsoNSUDTfPBr7LzvMFLCb5nx9Dz",
  "key31": "42heB9REJyjKTxvw1kc2Q8EXCwsnptwKHfUGpjnCEwZN4kVR2D3ZsM4uL63efQp3R3Bi4s5tEsdCKqTDThgJhtP1",
  "key32": "rcxEuyJVZa6HhskujSzjsJdkeH9sBrDid2RkPMqytxmwKup6PRGcdMrytaZ2mdngCSumMMCqufYM2iAFS4smm8e",
  "key33": "5UitZVwLdauWdtEYSvqhopPUccB9xitZSo7n9DxYAZWGzmj7dZEdtsq2UGiuKeCf5hTSVTKMoJP5GGB5zzvxPPiu",
  "key34": "BwBW2RrTEzvZ4qKQZPLtpPomYxubirzKH8eXwdgGTPNGyJgx5UUfZBCQnVKWSRMUJKJpsXL3jdMJ4NLWx1uE7Zs"
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
