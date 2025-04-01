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
    "5LKNpjgkHKtMLun7TFcr6prPS35hecfFm7EemmeHqojRZLLBbNQU4iJ2e6WVSojZu8YzfjKeP2fyk6GuqVnwwPTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vg37xP9jRgyEDtEGWBLgFrMdmaue57VxbraEjjm6jZHpwyxfZPPDEdJe6496EKbxqHe2FLqgyTr3xrQ7dLGxRzN",
  "key1": "2bb1K4GfUXybm4hpEZgfmi3L2aowRWEF6XFcomsnTwcdQTjNCaMncjToz113okeV8X4AMAXP9C7sPQQRwk4dFidG",
  "key2": "5iMhd99yTCmUbaiAGvmmbhNLv7j8d9FQvvYsmB97BvuvPokBp3nnPJ3GuV3eShNnfj51VdmrCDgEy7r5SyMaNiFX",
  "key3": "5Cdi4XYnm9NLdSREP4N7yYRCSYS18Kf67a3zq6j77UzfYQR3ji5UA95kkirCmvdDHA671NMQP9vQHonZ3dLptpjX",
  "key4": "4DYsiAnxYsZB61nbbi2QUyfdgQq73K2NR4JMZX3RuXaaLQ7X3X5tntncsn2ENDJi7TU3WZgag8akxfJvzWgytxK1",
  "key5": "5WM3gYmYsQUc743Akedj5XbgxjT1VzH2osaTgfsKpYccTph3KyUNqrMHAEjCFopzMJ2Bb52aRomB5NNAJSVNYETT",
  "key6": "KJGe833hqjJYayG8hAC4BxEo6U4H6FFrRG5yJMpXUttc4hR68zLS9jYcdpox6z2pkTuAffkkKpjN1qJXU5cd12g",
  "key7": "3fSmF285v7aytR2Gv545LyJ82ZwCP1H7jK7tzrwP2nVgeTiovS9UeVWiu6ddmQMjne7V9m12CK4QhZDmq2MEYkVX",
  "key8": "ydi87RAAV9CZeMBrXdjoWLiFGJC2eK8s9aWoxCixzQXeCZVszexoYBtbyq9QqvZV6oNuHsJu5Xhp3hRozj2f3D1",
  "key9": "LVwS968CRnEFR3SXCRdEAgchUwvp9kyfuDMWTmz6nGTUvfZ5UtYCqaVyM5QDTsTJZfgLAZ3oCafdrwjRZYfEKSr",
  "key10": "4gREYMonDbshys8CGr52ezi1X4E7PXjLM7a822qvAw9EQ9RZVCuGuntUPMe1DBEzJCd2ZMCaKWqjDi38CgCLEMR5",
  "key11": "54Zxs11dRHRgfhuyjQMzpm2aZj2uxQagcfboFRUrFGLFMLKnUKYH2kF4FuJ8NewQ1G4MCeaDgEi7bRpvJLukvjGV",
  "key12": "2GL8f3bAXMzYTDV542EjcByqAvfGyp7P8ufmBMX6VbKxdJKyg5QR7XCaRD7uFUyQnemUievzWfdRkNT1Yu9BJhNn",
  "key13": "2EUZXRxGvXaDnLNHkau8EHFoaWXnQm3cmaoYrsUhhzWaDaeniPQ28i4GMLGshfPoLAJ7HXEBii8TZ2i5hAR1Vme2",
  "key14": "2VdbTPHbkTrx7hpQYSp17LhYQgAV1bBYkWNX9oBdn3N4sbWghiCFemnmui56USj62j2gRFUwBT8qSffHghaodmr3",
  "key15": "F7ds49j5Gy5a6RawEDcAi5B3r2EMv38ELhJeZ5kKTH1RxBdvgSdH6QAfwxgfuPb86prvFq41rkrcxb8bu1vxHSW",
  "key16": "28kSF5a17wipnjqVwws4Kw6Zcs2FUvwSCH9miAnw6ngRiVQg2jtZnj5kQjbHDN3yczhQA76ADFySKCWjgsnLGNAi",
  "key17": "cuEdVbAJWjGgip8U7YG3mp2KwFT4U3CfU6gRc7H4syZYjzXjiuo3SUAUWJo3Gz6qdGY1taWtGWX5MgK1LKEd6fN",
  "key18": "5bBhR9Pf8fQLuzd38xR9azx4dzgaJpBw8yKZYyn4Z6NCRyzekjD48yo8gwtv8PN7Y19TSDYshDHnQipMs4EE3A7g",
  "key19": "462m25sxQQQYKmiJUZAZjrYtW3noTKKdbpBkTfvqGboFSGrRabKT1RA3pKeEad58FGuTSQGFFew5wLVWqMinxCjZ",
  "key20": "5LmEoJFM3nSZ8a2UeQCPpHc1iTb7zxRAQiUmpsWroQ2LwbTR32teeMpkHD4ugMN5HKRG5y8RUtKPaV5ZxFmKBNVt",
  "key21": "uYKkKPGEFhUCwrhG8Qcv9NuYCJkJEMeczwDCSdyHqbxtKj7Gd36fT3YjWScFiR47ZU7zzwL4EqxriJiWcTaXRr1",
  "key22": "4ErD9pB8H8nWMGP1GQfbSjuSFCkoPpNvtkGPBsag4Rj6r4USKGdhUP4Ga5th6rzsRhjuxszMmkm5XVqt3iN5ckrF",
  "key23": "2eyWSy9dKtyudHomtqxs9FwQUKPqSQjKk5ckujoBs1RwyYq2c8bJUi1dsWrnXSkSPooLVAg3gUniSt7izWL4EVV8",
  "key24": "4C3Ca6ohqobhNLZyU6x6tR7wm3881qkwRWhebfG2cZtrmZgKAYbsbidUMbgt6ueLK24EaKYfSWP9SNWPtpHSCy1P",
  "key25": "62ZmxqJCaaRzBU2HUQ2bMYvQJ2BAiahb49WzTujD9yUHuJrnvm8Bgd9BAe8CMH8UFbMZSWREFgEyzwemtapM7mrg",
  "key26": "3UAiDEteBtWuYuAMZBq6sesgzTRadW4Fj7qp9RDozNjnXcRv4fa23Xn4TTo5twHaZxiMhTEU7BBNUapBbQd1MzjC",
  "key27": "5vLfXbGg2CbB69G3wi8PeYp1sTKWxPzbKDUGkME5vwXYBDAoPop25wc9KQVrdJfsSYRWV5J42JS4tNrHHBQZr8SU",
  "key28": "4qX9SN2KfCA5e9c1vbhvDTtwaBDe1wtwihpuJz1GGAdypibPtPz681VxEG2ShhCrE1WJTqocpn3rf7uqU52fGZLV",
  "key29": "2PszjHZXAbBygQrfUxnzQc1xyC1P5cy24sHRBtkQ4bGExyhMuE16293P3yRxVkEFURd7Qc4KTkZmMrFCJJ1hVsGP",
  "key30": "3KyTh6mXkAWRNqd9GiFM8rYfBFuvEpc4FT9RGKKsr74eXbX3NC5ypMhpUQ8eSnzEqFZHKQaLjVXD2UBRT6n7HFsw",
  "key31": "3uaJrMrSS5BWkNGN66DHREwmoz8jdK9TXwGAta6B9uyP6YMa9NrdQNNCyGYPR3tm7HcmnKZGCVLJY4iJk3o6prd9",
  "key32": "3aTAGjVdkdFhe3EfnxFFPopk41fjYGq72DvBmrDP5Sf3ZnPSKrH3tiPTRehAHZcTjohcFGVbS9tF5rhgXerifegJ",
  "key33": "4s9574vGZpzcqTkFK2nL3RmE2Rc3KbaD8J5pAbSBH3NaPKZy5cPVaBzVsTneXAKuas9HWe6JtHsgLsEWAADRTiJP"
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
