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
    "5xK3S5AhiS8QiKEJmzBk1eJcxUsPiSRk1vEmW3iCQFFyujgyfJNZSDSJG6Ub81dxHKaekLkUUjLYV1xqNW2Qbz2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qQQUo8GsFdBgV2xtegNXqyUVuF61j3AMhToyTHkVF2kQu6UtWn4ss2pwV1QUfqTW8wSv97S4PABsdKsADFmZHpH",
  "key1": "4zVvroTqa1efty7RVTMeCDmPSzeGjcba765AmFVmUXQeS6QRKWPZxJW7g4ADGwo3S2FATdqRgtaFW5DS97wwUsT9",
  "key2": "2TTzRQp2zWxY4DewN14SMVUD6wrJsmyVPGU95cYyd8XvJ4GVw99MBB7JW59pbc29PuekCWW78AnwYceGXDAjZXJn",
  "key3": "2Nx6d8Dq6B4BaDhfKtePhEfUC8nssfDNCgaVYmdEinmyWPUxTUhNj7mQhy3nR8skW3Mpa69mfTVuc1TYihC6f1eG",
  "key4": "2ZcSCWvc6AuxvwGvssMMqq9mMFJVeRh3Po2swc51Cr8CmmPHRhk2KzwekzH7XCzLQRgn16kA4M3V78hMQzXC9tRZ",
  "key5": "48wxtz3QypeMBnaioJveRD7MmP9LgYSadT3XERhw31gBzLhaqQ8KBGU1ENG2moLHvYA613WgQjrpDHbj7qtHpqsw",
  "key6": "3Gk9PB6ZgHfkDd41hZ3Zt4ZGjWHreJEWGUejiiJCizChnHiUTZoM8ng66XtWgyuqUwSTcgnA1DLUiEVs2tUmMF3j",
  "key7": "3b8yFS87wzKA1zSiRpEwDj7ACMARVRxFPbLstdPV2BYMpnaR25fH9e5PLPemzwtzLafSBc8U8HbyLpLMLu5m8P8D",
  "key8": "qbeFxCjLmfMfyfHxHGY26mEx9eyA1PWPLWCdbkZYeB6eNRMTroJzJsFtptvHgFWMKBSUhoWvr9gnzQ3xU1t6ex8",
  "key9": "2hbXhFLAf9ybbhoyDGm1Bso2YznCtmb9tbrKy1eFsEfsSicacvYFYxAti5T3559WRFwbqSCTiN1KE54uQwBodemq",
  "key10": "28SZXne8deNddfCVrP4tvvoeTQhV1uq5KE4ord8hLYXDhZMrK6FezPadifws5JfjoV1scDYxok3Rv8q1MuY4yjWp",
  "key11": "fej3Gc4ygXGoGGpx6Far2R3yXFmbJ9CamHB73aVXG4ef4JS7KJshtt2YtaYF928D1ACPxgnUj2XgTp2piJJiqrs",
  "key12": "yU41eoHtQCBrGgVuaXE2m16ccHFVKYdcvoywSGtE8tv3MCu5ccDLd3UYqSSPnkYxJ3Pm5vKWW6suE2BBuZ71zuD",
  "key13": "2nNsDBeDqzCfaqFkorrYg6zvne6i9X4o4Tce7TDSb37prgtxMdTfpGGMj6oFM5naYCXHE6yU9vcxrN4fN3EWN8af",
  "key14": "7jdtmK3ajvvc6LVULAWKtvWY5sCuVtrM2tSLnRngUZQuqhfcWfKAoBpzQDjaMVxu4fiMLABP1hUzKM8F5uKy4D8",
  "key15": "5Kgmh9x5Lw7d8E4bTrvjeHafWzhFgr1UNFLtrDTF5jVo91sbivZHVDiKvxRrou6DPcwPGCGbVDeVvL1ReDuk9XsJ",
  "key16": "5Czu7ahY2G32qEcegKkHRMZossNN3zkHnf54TyyvvGc52sCMuYmRzFCGUCp5ZWMBSphgkXd7QjzoqwAqQy91zzqo",
  "key17": "2gSoSmb3m983qoGms8AQ8kieVNbyFdHogyiU14UN2CfSogMs4rv3DknQeQKSixPXaWYS97V83MjTAi1hkdueMrWm",
  "key18": "2tqpHjREpHLP5QJkRGZkaSgMrJyxJbZ5KLztib82T78fKN2cUfMR96pxqLyjyygiVftvAk7uPPTyKDyMnBaKvYfF",
  "key19": "4AjosGx3ik1CFzpK5KYqaTioJb5VxhE6JCWfUQBTBUE6oG514gf3LeYJNYMRkrRbiu8qmtnZUDdQsQdb9z9KSqfP",
  "key20": "4UPqQseNiMJ19c4Xpx2HzPAqBp9uwMxCSHwpc1ecYDSvuSfWjsfC9RV9qCNxQGfWJxhQEax2fPwiFWcuRXbJtFxG",
  "key21": "d7KcoynUHNZVANfvXhjqG4KjDd7swgvnn1bPAkRVxp8xf9gdF26sdM4pmSAnkvbqZYz1sMjLf2zNwgC5dAgYvA2",
  "key22": "5AargqGHzexSfAcmARXFhVzGWwG7R6SRG7cV6PjNQtmQiaVoGJwVFfwm2RyyCuaC3JrLWzJtsQQLuMcQxTPrZiMB",
  "key23": "23FjGuWPCpvXuV77LpCusrH4nNTUSU1oxQYMgQo4Cpo6jRw79S8yAMYXsrmEmCppENtDFaXiopPf77aFxv15chS8",
  "key24": "5RzdN99zzwFdwcsMKRaZEGbDmoJZPYY3FTrM7cEPcKug3YcNZr6BWKSfqHmUt3guMQKkSkFV13xNNzCoghLQFkGo",
  "key25": "28PtvUKtpm3cubZfmoG5NrU1SK1JnSjgFHPQqqXVrd5cjvYFB14vuoZ9wFazG6Un8N4SsghixX9P8mgYZXwUbYDV",
  "key26": "5myN1NAE8UDFSTxkgmEbknttJqRGsgZiQ1V4juXbeFUmnnP3C9AA6WdZwuLZZJp43euXq1SLo2Kd8CuRioFWv2YB",
  "key27": "2MNuf4FqEMz5g74grHikTjyDCqaT1Sttsyz4TJzN866oVXbCYHv5CQW1UD3Y3a52swyoTTAfDF4uNsA6dU96m3Rc",
  "key28": "mNHEYKFUWLmawLqVvfhsG7Xk9DdDAjKQXLzgV6dQ1pQsQPxAeg2d2j9Es7jr8vBVspEKwh6WMXQp28WdDcQ49WP",
  "key29": "2kBqaScggWkuGrJcJEg51NJKVmNbRwDxHaE4eTzfxLuGtuPf6qWFiNBrT58diuo6ybjqKZNhynQB2oeYcKPpXfi",
  "key30": "3qCHTj3ESzJVbohPNHgfJZscjapWwBu1TgbFa88QJuYwgzLg9gVot3V9feTA3oKcHu5TTnR5un6jP4FYVnoLX2vB"
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
