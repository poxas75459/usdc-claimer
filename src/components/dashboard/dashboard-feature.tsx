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
    "3zXF6tFKocPQJugFZ5tVPgbpu5vdJ7Mtv4JSghKTCHzvXzSYZpR2BtW1XgL1PWiXBwwnVRuprbgkAuwvNXoR2THU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bA3uEvoAUmahFRjpLVuMqSRnUTFEMYvCzixSUk6KbaPcEBVkiapGxzUeZDmVVJYaEbkdKysAGaHHHVNcahNxZGW",
  "key1": "658YYBtcfpWbAQLi8xB8mbmX8xJXCXkXrwZvNVJt936bGwS7bSAwjDbgqyAFruznP4KcULbVcCPf3WDWoU818G3p",
  "key2": "p8gjBLbjzdbFbf3qnK5pXuStJWvvbXMJnWrThnLcAU4MjbJRgCetDWRpuUsTkB2W9wk4sxMtCRDrBbaHyW7rq46",
  "key3": "23PcC5frSCS6p4N17Dp6QojjBDa367voERhYF2HPnT7juJYywitxkE6xMq1YK1bNf3pi2bLD9rQvhpZj3i1axgiK",
  "key4": "2dpNWCr2ixPvqGQNyp5bMqpkGoCz9Zfg8LP1ushTTyThGaTs2fuQ5j3FJtFEL9VF7zFZuPQdkqTZf3F9Yfto7jCp",
  "key5": "4B5YXHGa92oCiiTd5XvGNCQJj2Y1aTiSpSxheWcPmP5oFQKXwkKNGtLH1gjixoDuQGq6agiHh2c2m8jmnpMKEABb",
  "key6": "GWr5YuSoKA3zBMG1gazQFTCYidNkYkdCMM6pVUuzgbmjVY8aAJvoW9VLkvsdnUE9SEqE2QKSE2MK6T7o9AqNiZt",
  "key7": "65J2m12Te2SUzhc3cZytso5b1t1bBmKJ2ZpWPJDynmvUUmWo7WRMtnBFpaZfSQxUq6FV8QgKcRgC5wNmrV2qqA8q",
  "key8": "4Yb2hf5N4HRbJCDZmrCiTsR4ZYo2B8qaTEJ7MbCNSEqGpdUfnvDydLyR3FKiN4NR3yyGtsusGaWLasgDRkF1RjAV",
  "key9": "4qyLa2i2ojEt3bBym6JKTN7mBUR4otEm4PddzFFaZfg8xFikPcqM2Ety7QQgmdpfPNwXMr4ntEWedPrCU2L7t8Rx",
  "key10": "5ceSt9XRtfDwGTaV7xRSYYY68t7Tc3ik7az3n7ued5zH6bCT88WQREp2wATBwQqG7tFNun9fheLRcGQ5P9UEPxSH",
  "key11": "uZwHs3kfEqTaDykxAPyuh4NH9RUu6BRmJVE8W5eYPW88rae2portuWrvSMPNZ8BuQCT4eTZkZ5JDoCZqDx2w4Ms",
  "key12": "5DYDudtE9gFZAxF6sm99wBvJjKZeUspBbHDDcZYvfjWQxRSobnW8wnepJs64XrXnxe1zeke8DWxaqjV8WyXSCCA3",
  "key13": "5AeFFpq28XooBFYjJBosvMZJKwi1eFRBSDYEYU9nNkLkXPEhJK3j9FiaF7UmibHiM4ZYfN6131V8x9Mr3SehHDsD",
  "key14": "3wVmJ2Krq3YcnzvfbWhy5Wptrm6NYiuiKjMBTFPHuRow2uiHnXGC7Dwgn7euu1DtsT8FZEyYMCCeKejutFE3bukV",
  "key15": "4QUiTB5H1WcNWD45gfubCH48RZNMdFS1xnjBByikn65TwBfWtWCVX2yYjdPwKT1bgNNgSCgk2uRdQEKjQPYhMLiK",
  "key16": "5zzs1AjQ7Ttq3Gotk6NpeWLkgAq6SbNaaLuZ4cnwvsBnB59VM4XXa77ixCJTWLVt6oE49oLjQCEtKkgs3Emqyc3h",
  "key17": "5yEmnAktdT87Mi5naxKShWuBaeXB9VBccajq5UNWwPv2aEy5CPEMoULwWqesiUW2SkrATXxKBvDcDEmxsQzoJLwM",
  "key18": "396w6nRZnHiA1k4Aw6z3VG2z9vcd998MquDkiZf1XE6FK7UZE9C7RSX71S3Rd5VjCZ7kShW6xci7jRXrKM8srcba",
  "key19": "3kZJckvXD5W61DdZLovwHnm8hyS8VsDzSVZZpVosUmgapB2twfkfb1PkNc4gML5tEQT7aajHREDTV6aiDGnERAqp",
  "key20": "3doYvsEue2mZAvTwbZdttpdQviPiAURtEtoCq58rcroe9BGejh5NQ85CQj5Vs1XT9eLhZSR13fXDGBhhhmCtYYoF",
  "key21": "5xg8yKJomQR33tjv6Nhw8Mq2NQPNwZb861i7z5fPYc9TzXnirD5VXYF12MMvafSs5j8WQn5pR9cQwRMBGDGJiknV",
  "key22": "dktkxSRcVEtMB5BnbJaFK9CKDWaVsvd4y96ze5gtYF65uFdFTmyw5TheL5K275ecFw1rQ76J4Vf1q2oxqcCqQfS",
  "key23": "2ztsGPhDcVoVRMRWzf9W88fun2NFYrPgCq9m5gohyKpb7g7mchrLFSery6QRFhY5CHVFX2sjVgWG95e1AQky7GM4",
  "key24": "5YNmMRu9DZfYEPYypsoGMtPnsFvJosyXg2beJeh3geVD1zDJ876mnr9edZmKDwfSA2hRKd6Ds4wYwLx1ES267FG",
  "key25": "3PH2x74HPszv5mX19yLz62e66iBza6NNogHXrWQjJnvokcjJMpmhAXmTHe5wiC6RHikweUxQZBtgdLZNMxWyxEE4",
  "key26": "5yK1coPKWiECuMLrFkeL4p6jLgRGihRByAexSF7xvQRtvVtUoGim4qrdURSYs2un3hynaEYDNZVqovSAhaBnVy2V",
  "key27": "5WCvrpdkiKk75zWUWxj4f58L7tErhzioZmiSKLfkcHB1nkkQKoQqCusjXiF4E26VfM35QnndZ96YfVtfNHjG7y2s",
  "key28": "2WcNsqs37sbzrCA8mVoeEb7P5uCeM6qdehkQCn8CV77D522w5dWx3RRXnFmJf1tZ4ktXNLHsNqdP88auDdTXakfA",
  "key29": "2RfXGoddYmJ9JEwdRLoUEKB7zvDHLL3iMn8ukUmJx3wEpDbDT7YN7LzWZHE1FLdojVZxtuYg7aTuHmEj24V6UaDa"
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
