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
    "624xDkJdN8Y72Zkc3tDUbV1hBt7GY9Ppn5ADzbHcCsAUtesWzsr3EspNpL5EUx2ASVg5S8cGDCXyyBG4AAr3DxpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p4HHfMNZfCVR5KbTNAVavghGgdn7o4Gq7UKtyhaM9Jw2zm64yTEtUfjT8teSw9gk3Am9DBRYGNdJiG1DihCGC3g",
  "key1": "34MLoVmVtn7t1Hq8GW9ZbZPoZUuZsUqZ3ZftSxw53FKpawBkBbVttSB3WC3W15zLCWge7mBRnq8tfYG6gysJMvDM",
  "key2": "4Wom5rdGEciEFZWNAH9JdKf4xEzZpdhGnSH5ybdMbD6S9SgkAWX1g5tmSP41TJRYuakLD6yUjkvwoizLcs1f4Jo3",
  "key3": "2E1VUTGF3kyeBTSfMtAoKwq6nyWzu2teExyYf3RaErRvJ8Eao2MvxDsa4rGGb4UwTcqD89M2eEPaQfBj1i9cDpwi",
  "key4": "2yP4h4Ji7GaAJumApw1iMStKGpdDuVyQLQenpcF1XEfSDTzpEbxVdL8fv5udVqrdL5fZ7R1bhTmFJPp6tFMb3uHX",
  "key5": "63VNd1Dy96eJf4y28MFHHuDJm1ud8waLbU1WoPkXAs9SZJTN3zseeEVdANwRC77hgpvTicMnz9aURivzhGeSZUwb",
  "key6": "3QEEzToux99bFoQZyGxEgUftSc42mWUmFPtUCfsL3yFWN4HBuKj1LKUJwDdL23XiXkaNmj7Xsx48HVVWKR3tbNaX",
  "key7": "pdwhbkVs3i3xKpeeSKwBJ5PGhVWwB94oSq7rAbQ2NQouemQz5vq9kgX4LGNcT6iaLqatD9UeG9kMDQKJQybPzcs",
  "key8": "t6hVeJCNGcf4YKYwhP3gFACHUJ3PfCuuKawnQ3RX2r7DdGM2AaWVKMMhSthTAfxdSTwfomuVLLQWuQAt6cLgk7z",
  "key9": "AQLKZDLEDM6TetfVdszonDRJoRNiULiqizrpyo8oeMsdhkNBSD18Tx8cPq4Vo7rYwRShyfnsXw4wyK1KW37AqDF",
  "key10": "p4Ef8LM9BRj9Jtn5Fq5KbJ68qEfZk7NwRYRguD78kbXrWjNU1zzmugCJ7eoH2cu8q4ToNUXmcHLA5c5uU3WmkVv",
  "key11": "5DRSSfZtLqm8Uc21bjzCbUH8cVWg9BAtj6ELyXZEt135YNyBdNM6JvfJh7cJsbFxoetYEqwVv83HT5fNyHnj7KS2",
  "key12": "2oZVEjE5pqb9jn8hZrytHUFeDvzfrfCPw88HcBXvfPre7fY4DDncTb2wJh2zCVxSsaRWr4apJc3d2yxDcY39NURR",
  "key13": "5g3qxiMrwqAv48DFo5ZCFLy9hcWEca8HspvkxSutrMfdaYufkXdx8kNEw4WD3Pv2Wd7fZPEDLdefmxCVArysyA4p",
  "key14": "3nau5aXzyjDgRSY6aJzkkswhQ1Jy9uZPT8pB5nouT3veBxmYjr3pss46iq7YEzhxotBAkJ9Mspyr6n6CxcFuGpHv",
  "key15": "3NMpVoXmPZBwu6Y9pZxeT1eVBdzTLLpPa4gqHuzTXyJDJUrT6i5swh6xK4NXzxm7zoaxY8ZUj7oeDsvvJbJs9cJB",
  "key16": "uk8SyW3hTjKGMuHZKdTUAtjoCjBzvW4BqvaPE7xr9DFm7hFTA5VnCPzC4hUBSBbf7tdFzM1Vxn7fshU5CkmuN97",
  "key17": "3FwgDyujKhAi9itZHBW6TSefHT73UR7qrDBHBGNRWmeW6o5bMopzDQ8WKSSUY6zsoe4358qteqaQMNL6JbnpWgV6",
  "key18": "36SQyLWM9nnWvUijKu3CZ2MvHrhXvEZseRyf6VGQ9g9vjCgEKY1UNgDjQrp6s4mXDdsqbF432Tbr7SBDoverhoPT",
  "key19": "4E8QwAA25fasUbgZpsyHmspxmg4QW4DdhTkz5ZAsVjuBT8pnku6MMo6yWCiRpos7s4FnxQR3GNtVLTvRAJ2T3A7v",
  "key20": "63oxorTMUp61ycJHGMBzgeccq289NQsbVoyrrFbtE4Lnu2gSKKvUmc4qt6QXbPChHqVyxbRMMkZMXXZ4SmymxTu1",
  "key21": "PsZCh3gJZu1Q982p5iMGhs41q1DyrzWJYUDUWCfbBPdDjKAEXFrt4hDYvpc7BsMWQHx6X6omvMMz7g7PnbpQCgY",
  "key22": "5o7dCCrJyg1PrNUSH1XFVoQjT1dqEaaJvNXwaZBfRPHgWqjJ7ymMytNeQLwyiqNbxyW8Vm9c46t7zf75QinBbEXP",
  "key23": "49mtWhvpZNPTcSoXe64Q2ExxUUdBogDLJUzcavWLnEof3pDc9uMEnjU5n2gN6Grtrh17dXZ1U9EQYUGwuKemotPV",
  "key24": "3Vi6SUVdR5Ygua1XqQ7n5g5WBy2pK9bALufUziSq3gfRjoN7XNtKHJyaxZsYu7hcvpSJBUMbcNouTwyjhuwAFefb",
  "key25": "54tLYuDLXWRoAP7jdnPoMMaVpzpqmLMHLBJPgNvUYgx8yrs9WCmQ72UhLGhFwoMJpasNbtu74WyF8TY4xcRdms6x",
  "key26": "5BF6QV5bsgkp32h24yMK5ym7wGiNcfa8jbwYiDziSfmzJPD5Yjq2o7q1YagHA2ivqmHoyWVCk6S4nhuBw2SqVfVi",
  "key27": "5aPjUoDArepePLM7PEbfPXswW3Lsd8ue2mso9AcS9MAMNRwzVPkcw71BmgScgmEvKt9929za6krVCweYL3TViwUp",
  "key28": "3U6Hi9NFt2ddv3XSCev1U68mAd4ZGQQkHb8yHdYEMLdP7GzgpEt6Kr7aeQgpxviFofJuyVkN9u6r4X774n6e2CUa",
  "key29": "MosksqWXhyEkJ2kPQWq3uPwa3knvQgAJJqXtxLqu1ohPZv27YTs6SwWYZsCRstAKRPiLPB7UexBNdkZhq2tfV8X",
  "key30": "3hyfBDoG2WxMDYLZvdyAuVFat4o8LvJWjxKihk5wY3v4RnRDQdmmhekATB73ENfQPfuq9xvtmLzvQuCj747pzS8x",
  "key31": "3tWJHdiQqFPLgjR1SZFC6tgLZnmSuB4yssiGbbr4zNoSU67QfiwjSDa6hzZ2SAneCHgfYwXFvPt6p1g1vBKBkhEj",
  "key32": "2FpYsik5Aydsbo2BHX7tAwN9KDLTLLyhT9Vqz8X5Pa5vu8Xq7PZkNkUxKtihLTFRzLVGMZKaUgrSkbwZ3FK1QQ4m",
  "key33": "53jR9YujvuZ8uMXMqA11AYAN4CQbsc7kox7P52mLhzFerPXvtpGHkRteRQUrYKzQDobfhaFJELfEWzU3c1SvgjVy",
  "key34": "4Gf1p1aYrDCppqwMXaupoBXTwXg7BzG5aWgpHi9L1RRcxvXsMDdwfuck9wYwuta5z98odHmTT92fZNvYKmGzaWYw",
  "key35": "3vbJbUvAKpr7mdYymptzwtpWnYF8GfpfKqG1vEqGkgSGtyeQMnjDR78MwEoxcRceJbgbYsHjhRGgxqLeikJct4tj",
  "key36": "4M2jkapuPNVvZbzQy9Z1dQML8Grk5sNQTNTRgjXc6JxY1y3DwpN7JJSqdmSbRQrpBiDv9JoxcaN4QrJAJ36EPh6a",
  "key37": "4C5oc3fDd6sYZhTNK2W2a2odSF8kSAAfWZ4gt5JgWvdUNSwgmtxgn9Z32TM7mBqihqusDagcUpTfLwXG3nfBWi4S",
  "key38": "5Vdyn33E33xK6uzsCf9FT4xsAEQFvuAWQCtyTbJ6QDLPczUn1pwuLGQFaf1tyEZxSAp7YEXCzw51QD4escBgQTQS"
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
