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
    "4iLWoPbgh9qyHFbN73aTGPwd4Y2TbKaATX3gMrPoizSr7P1iGp7U31m1dWkzT6x9kX4R6Aq7bo7UenvhRaQTKfK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oAA988MeBBirLAhNgeipwcfrWv2ujyZnJKW1kCyit8J5nH2jQHXkxg8Vm826U2tKiPyu2YQCSJfw8MegJit951G",
  "key1": "5xGuNw2f2qiwAAYpKe5eUXGCwjoVWhFXdAZjad86S2gWmFYx12SDW2L9br3uePFZoAZECBJa3DoRFyqGeTvHQ21y",
  "key2": "QzgJFSWCjdMPSxTBsVwtniuzZqd9fChwiGZfHTcwhBXhPUGBn3j23YTS4gDrMf8fU1Wae5idjSiwxgyaEQeHgLu",
  "key3": "LRtheXgNkmJg2jH5zVkB533sJX95UQMGDiSusXuWrLh7AZFG4s9aJyAqfvykAgt1fwsAi21bxw8ofwnxtvPtDtA",
  "key4": "5HefMETxKHbAvGXsk2mEksB2ZW9gUWLecemNrwkMCSzERkSTxCLNNiaVyeFbEJ5UVPceciwdRjEug6QefCBy7xX1",
  "key5": "36sdYN5k7QLjS4ccbFkdhRsdHWtXrAnh9EQjtkjq3HUjML6KzQzHCA9fiT5oSiaqrN2GA8GzWmXYfu7CJL9zwiRX",
  "key6": "25zF3YcBU57XtGLVgzPz7P5HDmYDZB6JxAw4Xk5mY7gxtwadTiL2HJSnCsjXNw7Lszz5kKBCfUHKhCvmU3sA6QiX",
  "key7": "44a6vM8NGBGNnKDx7Pq56GtH7hti8mCGN8gQsgbLgr8ysgm3v2fVfWaCRkLvCFrMDRpAfQKd99EnfoBYtL3LH8Ub",
  "key8": "3wWj4oF6Uyvm1jCVdhMPm2nhcBYwpHuSxDi3RUA1HQKExTAunQtNmAG4FwvP9uEADzvcaR3JrqUYs8yLhoFAZEnr",
  "key9": "4xBvWnHFqG2jfD7DE4rG2oDKY3L7Tbw5p8aBZHDMjrKnSzZjif3zHFK19fi4JZwv1WnJp49JABoiFK8Kqr5KG1Gw",
  "key10": "hsYYuXLKBZ2dVAqkpcqETyhQydNN32zVvo8RFdAnbw3JbL1VLhiY9ivpBuQ53tBW8o6dB6QadJCXpnujjv8k77J",
  "key11": "3ejwR2CvgJf68jxmFQMK2Te78Hc358JjDjnF5HgjgXWHHtcwPCtnxmx99z1Feiiobu7a47FPVVVzQmpFstd8stT",
  "key12": "4pQTd73gAdCzT5sQBXnsagVW3h1DCWsm1h3JFi2NfP94LRrbkDJPXiSdf2NedfZLUqryfEyW2dnWqcAWSVCodzec",
  "key13": "2uZUJ6dzUbD8pEejprSNsAmJZFg7U3RHYSVGSyFXh5aX67ZNANebp6kYTisVkeZL1SPxHDpDETbPTicSGRubfGZs",
  "key14": "5LtUsvvyivLVSoB2vetM985f5jCZDimkR9xYJU1HipTnvVi2xauCq7Au9kFFLRwZM35AohmfvKc6HXAN25hGvymF",
  "key15": "3aeTRZzUShQwFWraeXryNC1MVsfJH8CnY8TuSFR212NzhqJ9VYVgxQLrZNvLK4j3fhK8jjDo2bLV9tRg72LZCwf1",
  "key16": "2sjmtwkynPnNtdYssguyUrbbf7894ij176Cncwp2RP1MrF8xJGsuMCkptupxWUc1agtAC3ciJmtLiKwf6wmieEKu",
  "key17": "YYbrKK1SQ7K7qbeUjhjea2Z1J7fwREa8VZAEGW89GRA9oFETjrFmPDBCDL2457bFWouTz7WBJrepVvpXpX7nQHM",
  "key18": "5sr1cocCPzDDyppL1fvU6XbW2tMHrVXX6uq5DqGC5SLeEEq87auSJYeh9pkr6Qb18asmqroDEfqKUiUp7E5ih5D1",
  "key19": "31CnuMmyW7WATv7ofdMEYQE7EykZ5QG8BEJ1TRX1HTcQCbUvgwvAMPNFWxa8amTJt5HtNmbcxdMTG9Na68E9FHBH",
  "key20": "5HrTZv3RkoEXmPp2dc6oZQ9YGFZYc8pR1suupcmDcyxr9Na3aHgYEiVcaaKehQ7WoomeNntJrxg88ZmLZN7ei8U2",
  "key21": "5r4Yrd9jRgie35T8TtyY2DKL6Sj8DD2qVWnVgZr9duY7UMt9uH19XWDDjjTWNiPG6wbC5H61n4GAFAUcGfX637p1",
  "key22": "65v3FwsTrxfkRrTEFVkVzXkJ8SKfrD3MGb2UmYBLD2eQRUsThdcQM3Ed7EBnUE219fQDWcENG6rN5w2SDAfDy6k9",
  "key23": "3JDe96NbMxx5xdtGdB3Q81i4rAuNLuzNYBsrX4q6fumwxH3FwoDCJupxuSGdRpmbeVXuFwsQpivyBsAYLVeMjXX7",
  "key24": "4eEZwKidXYUDvwRfpvNHz6PUc2PhdPRjfjTy5W6fpLppREXqAcN5untZTH2DtTq9UVAmc2gX7gTEFLcHvJtoaYWe",
  "key25": "52sCFyhPT97jr7buD38s3Z6e72pF8ZyoYkTVa35mabsZA2KWSxEFpHvfFaJ6dX9mpfy5yeuMS2mAPfmj8SEbsKFH",
  "key26": "5BBNruzZosX9L9VkKXjUXqa2Tbs45rR2qbdgcJwLkTFJE2GECro5xtAcT7Fk5ayavbCzzAM3YhHPVjZYs9wNvPiB",
  "key27": "2yZeqkXnjvTHCQf1Xe2ALQArfHnwhdr2f8BJ53uA4nwFRaJfGH17egS2d9unReJWm2XE9PBXBufcfXijPNXtQMWw",
  "key28": "63oSjP4ZBeL9FwNPmudwYr2DRmo7QZwB7CVSuFim8RudaxHBMYtoFiex7CiBgzH9NKKUSbQEZTmjpUKYbMwFsFx9",
  "key29": "2hB7B5MRCEFxoWwKCu3RUodrwPZFhZbPc5zfC9eExeew9kz7NR8mS8sRxetbjSaXaz7rDv9NLkkQKk5EVXo2iBQV",
  "key30": "3QsFHpFNFCnugTMvibf2kch8aBg2LrJDA4nFTH3s25rqFniWKCmXPP3kmCR6C7DgqD98WqUv59Q7Bnx28dpTC18p",
  "key31": "2QjysoAGsD71QfaLnPWqi3aKYh8qyHtoks6tyCMK6tTafUEoYaQs3rs1qnrQ9MrGZ3G9Tta9PLByoPA4rzazAy8Y",
  "key32": "3BphgLR3vr3ffJh1KkrZq622pLTtUunzeUTU4y2EnsKZ7kaxmViFWEmUT6Mrd2Ynad3Uyaq3qPVaFtFe2PEodiAA",
  "key33": "5FmZdHBrdTvBcRQbwWm7wT3ZnYsxEj7n3hiD9bhiu1tQPk8GpHw9vyY7DPXMFcuRXqLVYaha1ytXXBsLJ2dYExZ1"
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
