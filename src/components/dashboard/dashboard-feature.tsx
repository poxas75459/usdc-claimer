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
    "Z5EbTY7LTnFYxLHvuHkXnMv3ameZBbJxxKx2qYirz2C3uyZrRnjMoYs3LGafg9MMuaGLsMvPgzpejMrcL95Z2RH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q72iC6bSYCgGwVEE2PXRW44e2gBQp6AeTcxjv8zmztSMnbxoidNq63nyxf3i6wkNTAE7DNeops1CcKhKi9Fz38g",
  "key1": "3df93XVaDST2xorUmYbSNyRVmD16jdydngVRw36qZwvaRXKnPFe1vPafXqqJHS4NVGXWHmVXcsLHm4ZFdSZ6wCJY",
  "key2": "57TSPMCKcRyGXYXZTNd3GCrtdG7Q1cy4rQ5q6rDGRfEvrspraxi53sNXfvJCr1bgbWvTZdx5aG8VAbCxxXZSXJUy",
  "key3": "mZHSF2hCZwWWNMJmcuLHbDnCs5TWXr4ijGNiJpLK8rcv3LAqJPgNLvmJp2zBpcQM578mhmuiyADC1dS3SLo7bJz",
  "key4": "5jTFMnDrnKUAMtRDLeFAQEiWZTNRt5SvMyizoEAmmFdhfz1bgk3VY8Qms1izFzggZKuxjicZ8YxfGzpqyWPaQyEe",
  "key5": "83yCNtFkxRhA8fexoVF6TpjZFf1ts8mG2NZU8h2Cs3kLgLnN8asa2DM2D2VPk6jEhvh9vLsSLPWGqrwFTi1qjLL",
  "key6": "Jcf7PJqYbi3Yyqg548ck9rqLV2qUGL3WEbeAUYS6yCS9s9PYfB7ERJ54aHeNniWM9uamtMSLXujHVAq6WXyGpHs",
  "key7": "5qNsw1YZMESEtaL3e4qzXek6AbzE7g4kUiDS35TupMYiFmAtCKkTXmXCPg9dbpCRDtqHbmozCzKgyUri3YQYx5o7",
  "key8": "34CXCH6EtkQft3LJiFuygHwrquLn1Sg1mNZukfy4PEinkV4HEUD4FLRoUdtGiHP449oceW4dLcqNfMSrFerUsPZH",
  "key9": "4UszUeqUA8MNPx2Uqu2GV45w675Q8zrzqZKYUWaF7ygteVtq4epfeT34o48M8NvT8wYFEGJPLR1EEBpD2uhuTgnU",
  "key10": "3CHs3f96Ww5pz7P5YnQBwcfigko8PgXytSDpWyeN6Y2nPUuDDc7NGZUmoz8UKjztjtogJKsyD63LjTQ2qDtGcahU",
  "key11": "2Zr655zYxknQ2LgAMoZXUXnMX73JWk1NjRti6ZWihW8QiUuysr758daLzwLjF2y9zzRBtEPyRt1mgLNqdeQLVHWR",
  "key12": "4A3BNu8jkZTKC9qxBGMLAvzENvnGtzYMzKYVZLx2KVxEXpZjGFPYjPaiMMGBpyvXR1aJN1NXyDVzra2ETJrvLh9f",
  "key13": "2Z8tceNuzVjVEE1bDPCuRm9k35xxz1L8rRhreuBioWkKm7cE6Sqy9KGvHRePWPFFEdy1iatNnLGbNEi1fRrRX4tC",
  "key14": "5cM2R5AHsh8fYzbECj1D9vfLLuLvsSC3aCKaYVrxu61baCsDgbHhgvjVPRNVpo4ww7jQHaSXb8AxQdv84HSRsdRj",
  "key15": "2KANjBgoXUkDh69ibmm566urYYoyUKqaMV6M6W1QS7nza4rs1abLU4pztvkYSgMQ2HLFfHDfNJVXWksf6U5oMm6D",
  "key16": "64d3nZzM3pYj3KT5jp5afVnkuiUAY4SoQhw3sTKikV4D8V9QpWRDgBjKQV671P5DkJfDzC8ejcG7Du51wLBpuyPV",
  "key17": "2FNodUACboRPG3VwRDMifjcQXRo6fekNrT9pyXkmDmSoxYW7Wbphx48PGvqGyVTH22HDipwk7aJbQ46n6ygRuYvt",
  "key18": "3N1fkRxdTsS3xL4CJaf9hKndpjBMk1j62DsSwcohcTfSGUQDAD5fwdtWwDBNJzSnhATqgkA494sprVsmrMHWaPk2",
  "key19": "2sLaQxjuqwtKW7q2zrRrECutYRAkdC1emyA4fRaK1CpP1W7fbqLStAZbq1ftpVx9g1yjse6NQ4V79wAFGLCkjQ5w",
  "key20": "4DVZt9z7fZethyRsNrBpARP5EYfk37N2BJWfKfqTJQwfKq1ZeXM786MTGzYnP9CE3UWAMkChLTMNLagYtrTrkkD6",
  "key21": "47JjqqSb4zMbr8dNe9NVp4Nd887Wp8qaRTJkDTRrse7V4Bxt5Pf3Z42WFPeuoQFAYuckHGv2xsJzh6LS9iqJQZMx",
  "key22": "3eLzQNUNBWafZV9Ww5wpCN9mB3qo85YPDy44muRxyB3L834kVpTaag6Zf7pwgFHK3srNnkaq7qWVdSvQshdmkp9H",
  "key23": "5HwnjkQgEcGb9G6LLLWygm2HLy3GjLZV2sUzL2b2oRnBnaUPXZihH14atKpzXEFKM8xvHxZHeubXTsHWc5KxsWoN",
  "key24": "XZcoZ9Cmis6FmVXmDqW1o1TPXtkXDoou8AXuM8s13teEeUA24UjvxGW6JUoTBdhGu9n5aqq51yhARHYKYqmcRKn",
  "key25": "2vcSvjnE4yRxfNMtWKHFcxrtWb1t2ymEMfdVXs4N4JcpQLAi7T9qhfdbJ9CMHmbFSMPHxpkb9KRSG4RtsU5oiRAP",
  "key26": "G5MvJpFXEEU8jQvM22spksKEVvo543xANcykqe3WS8niNXsZQRKqnsqkcpzMb63ZMkyATrGgkQ2giP8RQmTvJv9",
  "key27": "3f1KdhPWqecRkT5ZaGRFcDrnpR91iRhwVd96iccYpvfNLHHrkBHH5EfCey3Us1cEDCvhdfDKENAySz2zwiYZ8sik",
  "key28": "BijLDujfF7ezRXbLAyNigwf3utN9df2sV3tXVW5y2qc4tUhRkJLfHAgUA5EyEV9yVYf3kPTB4cTky5iXGHvnePS",
  "key29": "5c8XySmfaXEfyyccssjmnscoWXbsMG9bfGb82Sg2Kxui1deMp2F2pf5P4kJiSkbFkqcy5GmedpVFNJr5BTa8pJx2",
  "key30": "61AmeUe2gnHw8XrSAieQ7raEtuu9cA7fCeF6cnpw61ZNkRHiqTK118sj8CYgErrk2GciRrZz2Hxvsjk6YvTSBKVX",
  "key31": "4aJCreUAKgBEUcRZ97nEtSFEceaJwDDH7AyFceq8dWbyB8oTsPzbgqgwnkZuhAN9TYxnXpEKBtKAqZ7WwqYwQeAM",
  "key32": "3tUTjBT2njm4fwSM3DjbmrgodJLaFNNDncFy6a9aLb87em49fzmgYZtGmyvDMN8X41DAYmmQGVxMDHhsAzLgQcdP",
  "key33": "2hxXQ7XS1j6QEYjbNGScqZe5ds2Dmw5fGbNidJBp2vAC73uQ1ytyPFFX8AHpswRXSTVvMGdFe2C7f55YvAXWoa1T",
  "key34": "hzgRwhLg1gZopfyUKXmuXhbCkYWbaZpVKqUGe7knmAuxr2J1s5fNwdgky5qaBPa4wNn222uyica916fwidnLW89",
  "key35": "2nGVwpyEaeSaydZVHLnvj8LDbFrNyY5ceYwFTNimaejbPbYyyTh4fLhRYzKJCyHnD9orUmUTVr6mrsTWpTQBA64B",
  "key36": "2vceu8gLKn4QcsKAphhvuALinotvqyxWpJ9SSFzy437ZrHiRVV5jgp714e2vbM4z3znAVQbGDYQZU6UwZBXUqtM2",
  "key37": "3TRwZHdfeKU1W6w1sLQCs2EF2XftH7ZmQwjTWdcA6hVpKgYtRa5bpzXcQA4zP4cb13j14w11GA2c6JTByXnWwKGN",
  "key38": "2xr67c61Tkq9zvzvFi87SeHa7zVzzPa2jsJ1ndy2TPj7xE6fG3nGuVnPtSVoE5x2x4UkPL9m7FYnRWSb2kqFgeHv",
  "key39": "21vvRiUzhBh89iAUaDCPgyDuTGpHGgonFzQmEMZYB6QrxhL1qF7XBXd77tEVwE4eY5hgJfupPYZXwcPUfCHoQPiF",
  "key40": "Wy3qG9GzAkHjfjuAmkTWyzxWz3ptHitTNXthbswUKMwWUhA6YetG6LvWcqqJiqozbLzCidh3t2TdJDNMjNbjEUY",
  "key41": "4Cj5E9CLSdUjmiWpu2wdMiy1dy6gD7PVYWNzvfHKSQoTWhyzNfet8EAK9aW3mto8tfdALXEwtpDptaVyxc7z2hj",
  "key42": "4me7w1nFwPXKLZ3bJbJtjfMw1sVQNCuW451GGBFyJ72jjpM5wp1aJF1xCRQya7RU5QmTDbT3Jtf2LJnyK7MeNBCs",
  "key43": "2FjK7hUpQPGaPRCqUD1kkRu29oECfcEAAftmvxwXCsHfv81DzdAJTygvNSp3ry5dbUJqvnnWjfMSfbJZ83gFY4sH",
  "key44": "bWNY86RqJjXEhedgFC4NiCXim5bvy7twDxoLJF2rrjQGydmZyS9Tt9UvTypiqv2tmHiKt8c73fAH172B4nYcPhG",
  "key45": "mrBZDPXfGasfubTHTJcA3HbevoBeZ2pB27MuVEmAvMryvXZWZEbKQbNqazjQRAosowq6SusqqVh38BsySWM6RwB",
  "key46": "2W5XUY92foHsR3SRPG26c4bsyZEW29GhvJDJgsJwRGnCh67p7241h8445wgaabatWyPqgbaA7dSiciHnh2WrrjsC",
  "key47": "4BRP41bMx3xs3sYPbAQsUfdcGMSCJ5UgpZNpahXaHH9CEnpWxSNcUnPf2aDLz57SCgNszycFCZpGQvMcHCUx5x3b",
  "key48": "y8k79cvKfEte5eXQg11TRGkXQ9wiU6birjahXQTNdNxr6LQm3sMWCWNwde9isMoGSMD8RiwyCW2UwuzYtjFQULf"
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
