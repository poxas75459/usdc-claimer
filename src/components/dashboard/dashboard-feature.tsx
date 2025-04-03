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
    "54B5CTyaT1463uAvexZD2uCFVxvQYfpAr6VkDWhGDRdsPVBJYCRcqYwSfzeS7jTHQ91MfRt55g9Ue1ko1NdCgmLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t8mF9w9XsRjYageMhMBhoVUJYLm6xCq8ACyYfWMhnshB8j7mx5xq3g2BZWVFQugS8jHws22EBvsVDt2295iSdgs",
  "key1": "3Huhdd5FPm6R2KcJ6kdj61xUQTVmnLif8oLHBTaD7EiMRAYeD3WNCMvwreY4wai1WodWQs49YHLsyhihjEMJbk3T",
  "key2": "21xEAC5Jsgb2Qk2MJwKkxuZarmQqxNBAXdfa4AhkrxHEWjG6vyeyZw6f6BcP2LPbwYZ4y694jbY6MongYkjCCh5J",
  "key3": "XbhsAcKLS9mCc8W2ZDjmi3FErS3Xv3kLH7uTQqfjqRiNRXh31non8V2f3Ci8KJsmUTRWayV1J4vHSHSqmeNaNKR",
  "key4": "2GE8M9m3k5XSShpV5fgjboy4ahcZe95jvg7U1MuwgoftSNEPpGbnpQjYoCXVoQfvbXEnY8GV9HrMMSezhEvxgW9B",
  "key5": "ekEyjjh6cdQb7DnFR3oJwedFPrP9bEigepVGZoh7kgudB8qA1tZXjfogSwpc3yXnM137oozJfF74vS4EZhwzPVV",
  "key6": "4uV77wzgNVnz9u8YEzy6DeetXap8cDFeZ3uEGVm7voTBpMxpb7U8DHvXywkf217pW1JEgKVCk3Fu5ye5qrVfYCbf",
  "key7": "3KLiT4Erh6r7wEViDrg9qwaicK74mQEoygELcKaDwyovyUhFb5wivcnH69W6hpfq7SvA8DvACaZPzr5qNFfmg3VG",
  "key8": "2BAQXe68RAqqHk5bJcqYwQYACRHtXvgLay82ZktcgNNESUtS9Xs9Aan6AikQmCko1UQvr8fxEn33WEo6S9XFTLhR",
  "key9": "29r2GVsBewRyVLPmZM3vE4tJyzsp9qDe9UccizN9Sw5hEVmWPtedvWe1zo27Ek8Zz49UQ2YybGHSV3KTmtzn5fJa",
  "key10": "4imWLsL9sbMcksWPC2ZcVb2TGMDjYNTR7Wotj3u3wp6Yc6fQkdm8cU72kaHJmRcTm8VRsJ9VWhigEtE5n63nqNFt",
  "key11": "XaQinE7gSZnrdwUG5wSXdyHcngtRNoCHn83TfxwVjWSCL6KsfJUiVeh75DB1EAFfZvXjqX5fdG6tG73A2qfyW1G",
  "key12": "4Pogdm56V1Dvp7AdU8PJNoeg6VrwkqsKxGrkfS7JQqb5VgXqucqVw4byBgMfuQvifKyCqaWjBWU5Yguua8mhYiuU",
  "key13": "Wmm8uwbo3D7X59d7WdPpjLSdp8pi65gLmnKH6NWMZYAj45agSqLaxUpwQaKjGwU9YwC6DUNk8Jd73uRiMDsXPtY",
  "key14": "5o9sUp1NqEk2AHmb6q2ajeL1y4uTWYxjbyGFYEfTJGWhE2c6RwQs9JzYDpqEetQQmwZVwXvmF19ZSSZF7by7nWcV",
  "key15": "2sRhm7sKm3xn2k6Nadw3bJkjryvGx9G8NF5gph2JmtscCxYN7LQjKfRARd6oWvoyo2hmPQDB2y5hPMPWR82q371c",
  "key16": "4bEmmgD6TJg7asE3ZjLirB1Epf9BkRgVagyJnTKyPa2WLhu9oBLAsiGnAHVrnRJeWY1vouamEwcxP2ti14NqB1NZ",
  "key17": "3JY9Nob1TiG8ny4vNJbojqqtanatVpScBT1TDjJiVE95ZjgYmGvA19fGeVZuGnSBgkMeHH4YYu5Bnss8QRFnfXCw",
  "key18": "EPkikkG3L8zeC9baBxvbA6MFV3EmMGYah6Ec3a4N4fLbbGebTYAkjgrrbborhciZP8sb3dH99rHkiqmnchq9L1w",
  "key19": "4qAU5iBRK2mZvP5MYRGRkiFT1ssw3w5pp5r5SvnzehT4he8iV683iEKNFPvDoX17gMUBbLFKB9tmQgREqY99UjNZ",
  "key20": "P9h4YWZ1mJDjfmzitv5HbjW9kchNLQNMbr2XRph87XTAKVCvX8cLAqFgVydPtWM31r5HQg7LkvAGA4ADg155Wvo",
  "key21": "4UMwor1TEx3xWdEEgYjhgYpt7rgxpugWMbKSEGYWX8t3jcut2gqpWHv18rNYEuQLHLXh5cwZFv1KeBVnffX8DWgt",
  "key22": "35fJBrcccuADy549ofpyLFXhrp7i396dN1NHWwzD3K1Y1UdCA1FGaAFLCGiBpQmvTK4bfLgdxrm2m6HFM4FGks5B",
  "key23": "3w5rGvHARF7JUuABxRKtmMcbS3qZNfc4mWuA5ibkBMtznbVpoF93YZibgFEr2SmrBhMYPgWj1v6Fa8cmyx5T2Hp",
  "key24": "JrnPAp3zHSmEwmVrjqY75z54wNzioM7Jq9MgL7qmyKHi3rGwJApPvi4BTk96ueL296GBHFYkCST9Szot6gBfNUh",
  "key25": "4coKQVxNMQiNkB915HfmHEvnVxojVJffQs1ovHJNpdBeedQ51dPTN3sTvf6fFZYcX6AWCSrFMN2yd6adnFXZaVSm"
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
