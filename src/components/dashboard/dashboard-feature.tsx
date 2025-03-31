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
    "5rgZ9ofRX69gCRoStgo7qYnwUJpTMzYjq3Ea9CrHpv4f9WF7fFddNun7PCPzsQhCNMmND6mqh7QMZ8oSqTspzDSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xXZTxei9odpWsFVBrBkPHwdUUSzXHX9Cy2S32oSCGj2XaqGoFkPS9fK4f6dm56jaepCJqoRd5WE7zYWDau54U46",
  "key1": "5Ky38qDqWbTNcCLexx6E4VgEpUsSBjMnKm5J8qMuvQz54e6ySirJhYQ1Hfn6BybHDUT8geVcNVYRQGFjbxeLsc7U",
  "key2": "2JpL8i35GfvgN2uVYBBbYR3bf9Vhbv3aBqH9uFT449C3bX8wBFihcyCfUrdUnp7UsugknYZ5y4TWPCdQpAa6gDEc",
  "key3": "3vA3Ts7FC3j5Vuuwhippii3uaPP5JPdvNL8R3ncgp4dU5T3BjyGH8FiJDad5gak7c3wqHVUXsrhWnjyqqvFkmw5J",
  "key4": "cqK4d26AgdcGcT47PZ9FTV8EREhtDe6zoubC9JgBdSrca8nUUFYurvRGa2ShJPoJxtivtTV2p28UqyiFMNR73NX",
  "key5": "37qA6sBsKs4mdSCB2TGLZBhvZNrYX8wpD7JL22N1kzWax5cFQPTseMXCnoRwn7nkyqvN5uLi4eQ7qHGsVgNZssAy",
  "key6": "3Yt1sRP8GxNuL2pyBcjHay5ThRihkp8J5rUNNXLuja4XS514V3sYyyx4Qhai1HyV31fYQ53zt7NYgagNkm9FjL6z",
  "key7": "423222GEg92doVCR1Sfy5DDqKaXx5t7bauZkyG8DUKSSNsVEVnFczPFgp9k2uzV2Do8FTZ3oXmB4yLCvVQJGM9PS",
  "key8": "4ZSfKWwKLt5hR9De8Wmo6fKC5dXvTGLFCXKbHzh5JszavDfyUsH2CHUixmoH5tfdmSqTCDYL2kQJTowcUPCzg1Mr",
  "key9": "4QaNQjrrfKEfSjRJJ5GEqgvpwg6Jfit48YNkzbt2Z5LiDpkWastAk4iPN5kUGiju4CebCoLycwuCsegD2heiRfKh",
  "key10": "4fVe8rwHgQCtbQpRjy4HQL75az9qToKt5WZJcmnPTRj5UvR66VWsAXCqi74a8ZjaGKr6e6cXY2hhWaexD8A3xEUg",
  "key11": "4fKAgW1pAiacu7PVv26uXMatTX15DYnz2gKgvRLc4D9hEXKhU34H9AtUAYEZVReWQrumnHsHBdak2kAx6zNpu8Yc",
  "key12": "38q1r8gC5hxAGDJz8isPM2aLw3DHVuqPKjLW8221ScXEVTVv32VB9tovFgRy1kizXtfsEAjbCt7PunSTf7Stq12o",
  "key13": "3sh4z5Bk2HSSq8v6pk6s3qQiPoswFDkSArocnL9kXbfsQJYoys9qbbFbdo3Bt6YUKajKovwcuD8Lgu3nJSpdYvDy",
  "key14": "21UkZ6kjyUGBNKNBtRnPsVhsevqXpegr7dBYiTXD6qcYVhyt8cBca2ZTU1W2oHL1TSgTdyBJjE1iqY5mmwYScLUS",
  "key15": "kr7Kc76HWqZRo8eCDCJwbHqM9CJQh2gHegB7uvjiCVS5pPNwyAxKPpGojighNvpbzYgnXAZYgrnX3CwPNJjwQ66",
  "key16": "2niFPi5H6vWJU3atp33xvMJuGJLxtQYZp32PczdUd1mAQJjdAdwMdgwCcwyM3ahqXzhquNxKGP4ehKJ29x3pgLrn",
  "key17": "66pcwmtrnzT9JqgTYV7h582osdy7TL6YntZyTk8yvYQYArhFwPkUzRrezBMK5jovUpYZtes64nJyq9gwqxBg7kyV",
  "key18": "gMX6JXwq4DPNSGk8soEuvUXDPyGQFUokKUo3dChooYCpdXxaBxmJxZLZf1FujYzY1hqNSpRprSnoYq1HYmyPzsC",
  "key19": "4bTXL3optAE9CJFpDcX8t3cBgZP3mm3g8RrgP4Cfiqt5ua57o8cUZoqbSeuNn3GSpDUYJG9Hbpp2z7zXKP2P4GYJ",
  "key20": "oWERetVdu1gKZGZnXLweqhSmoJpq3no5XrEcUUrx39CBPi1NgWQHnMaofnq6i3HH1NDg5ssxom1koSKLqXnWLDV",
  "key21": "znG22byVSQYsPA9VKjh5R2swuSuHPzPmL3ZHBXK3GnJku9WwuK9X5dCFrKfBomQaWXgiffSYo6T3SSUGcq1EEUR",
  "key22": "493z3sxTjrq3wvU7CzkHN9J3aWF9EkmVYEePp4ptb2H5vaRyNiYP6mm3t9Wjq66GiwUfX4Rni8btEe5oSAV1YE2S",
  "key23": "5YGRcpjkxRhpodu4cYCPArz7ojhsdYxSNmsQRbAfaHWn7u4QXvSUFfZYDmheZYkdDCtG31nNoh2F4pgKauo2Jicm",
  "key24": "2b4RutYg65VhikRnNKN5x3EKkDarc45jDqZiqVKRomjMoctAtZ5UMLigvpRunSnGVjobsEXdLa4dzSXAKhHTStMg",
  "key25": "2FM37L6CwqJsuDmDdcta3oaYbXBXrNxUn6LGW46Ny5g9fJZf1nb3M27uZSrHQLLXvidQoSPYvmH8LiT785ZGhvjk",
  "key26": "4x6z1vNogEtct7AECymHcBtNQ9GZHHgGR3MgUXLS8FidEn8FTkvpvCu7FjkuQdTg1JjEXehSsN792Atw6k8P2UcU",
  "key27": "iwU8K7jK3Xbf47zkeY6HrsAr4jWjVqcjmAEEBVoRwcuPTuZEotMQPL4d17ZUjTyz9BMibA9ZTUBbVs85j4ybo1E",
  "key28": "4STeNWkDgaA6evabF6XYEPQUG7vCeJT9XkGuFc4UUCAbVF2PSWBqoUvBbFxRKXuKQYUeWZRFSoLyNM5Ke8zEMdhy",
  "key29": "38LwEJN8rTVsNLKzgD1PZonLzAEWLGtFLcmfX2YM67hkAn82VMnL55UMfuLygTFecqGMW16j1xE3LzJyzjY51cUr",
  "key30": "33naDPKtuYeVB8Fd9LKAGXY4D4qE6nedRpQMyvGrF4BuP1bmiGwPyG1jrcEXqDKA3gh8X4CbWHeZS3i8MiuFza3u",
  "key31": "2gbagETu2QUxHrmRZ1z9ucqAMsT8FnFgvtmQCA2X86P1jZD7DggPigsd5eDzyRnARJEqc7AWH8ycM5gxbH2XpXyc",
  "key32": "MY5bQAnkUDZy9Dj7TAqQSErKJioo5SMrWRWNWyNEGTD1jkcHWWjvHcngx3QuASFHQN9abLgZdwyJZGacs8W1KsU"
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
