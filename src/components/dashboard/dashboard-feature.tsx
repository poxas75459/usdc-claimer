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
    "2yiLMt1dT75vSfxNYnZtakQWfCt7frZ6PZNJsodNxaKDqj5dWNR81Kan6oYQMMotzqdGsc4vCoJqDmTQqHy1J87r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kP2tDEFKgbQhqpEsjoqHCMTnmVrmfgQcXxzVH7grixrC25ejVa5VRStcKUv2vvr61BhyiED62sDmy1P5G7Fbh4i",
  "key1": "3pX51iV67b3GWJhsRVpfM5RgBCueEsmSdNG8FdXjWZSuN7wREA7YNa7bGUEdD6t24wxuwiU8TDcNLiZM9YbMvK7y",
  "key2": "3qqL3uRkMRUzcWxgiVQQfzAnRXs9n3wUrvVG2Ky7YZt9UXvKt8YzvY5a3Um1Lt5S2egymubBas6D6xRwUHyWnLNr",
  "key3": "2tFUmGANEjaitwPFpWgv8ua7xzppBfsjeSJGPnMtVdGbqWvfZVgcujHp4A2orVmL67fwujeYFjxWcdZBRpbMkXdp",
  "key4": "3FaSbbjipxQL2LRq4bkgni1sPjfA6osbL28PffJwZQihfWf7EoH4BNRKD9SweUybhFjAkNWKuHu4KqBQZMLhg4pf",
  "key5": "529HYCx1cD3W9kDN7Db6dvPYpT8BqAfTtX3aRwCphoxG3Ce7ut1hpJapV1jUQ5g91hFyroEjfw8pc4g1TeSd3x6Z",
  "key6": "4SwujtG6A9dDZY9G4RANUUUqeKUc7JW8HjpC9Bx4CSEtd79UYMakZEEY4trq3qFbJRgYpJbj7vWzkZuMHTab5dKo",
  "key7": "3XDAaZCG3mzqUSzgjfgLDR2MvxKvj5BCmDNarT1nuvDEDxWDHAFXU7A9jTubB3z2N5hPckeDi3Fq9f35SweRZHum",
  "key8": "5Ga2Nbz5dB2d82NkSc35th35TyVwwJkQFwNMcwfis4KRG51t34qFKX7Yk93CMy4NZrNWjpCVZDRc5mfrRzxgam2L",
  "key9": "3umQDetK27nBkHt2kvFxz2SGTGAhCX4G8wZtY9nHXzTNdF3Bx8Q346B5G3vpC5f8z4jkvva7i9mMwCqw4s34qbxg",
  "key10": "45yVWZMXXfhe6xXCkWDebd1dn65CaekDimDivT9f2LSXDFHwjSM98K8rJJtmN7Ey7Rzy1oSek6fixyH5XbZ2UAEt",
  "key11": "3eTBa7WbnbKjXGKpWwtGxTMBxsqbbjFVc3Px3gNPnFhBUdgdMZ7XP9cKSRkgFizohoidVB921fbEnZwxjcJKbzXo",
  "key12": "43Lx2M9bCebkgmSDpb2UqhUg95J5XAz1qJpMUpjExGBV9gj2u57TnvvTAdVBdBgZWotgkqjJrLq3QzdRRTeEr618",
  "key13": "5xD6FB6PodgzvwxKzgrBeCUPsdGqcq1ry7z4meQfSfhDhBfSpqzkPaoxG5PZjAnL5D1828BuKUUHxUZAweFve7fS",
  "key14": "2epU1fBDyLEfc2BRgKh8CATcCH47rpFh1p8UedC3rw2rRXEAUSc4iP6FZckBmSpAmMMJ27Yiz2K7ur1TGmd6dZpG",
  "key15": "2ghhYokCs817CcqTvrKNXTKJMR7sfExU3Dy2ZFxCgie38w2KASTaPgAquCRYzWdpWVg3dPXhHTD3iqyN513fHgFv",
  "key16": "FhjmJCzLe3Ag7wdARPZhHEe6DETnzvq1LR3zBqEWMwGELMyjLnBgyKvDRF2Aspk1FxG74BHvrhxsciCc2Dc8S9Q",
  "key17": "3AwCSXeYcjFE6MooxuD4pej6WmgQux1VLDCVyXSvBL6jLNGsnW9Ekz5cVpMDrjxgbFL2RYDxHzNV2NsCovKCYJJe",
  "key18": "3c4JcfpFoN1tM2gSen9gzbSHiWHsxxSqkTkjzvj2CWFSQitxRpw7XKQFcAjpx8ZRTTU4N8i9iU6LyrXFcRcPYsdZ",
  "key19": "62Vxc1DVqup6gEnsPA2zuYhhb6Q52i8kFkdX6vojctE6wQS7yWvS14wsfSoevvKk4MZQDepUCuonp1jM5r84F3Ye",
  "key20": "2vJQ7TU9GzhAzVnigJMfZLMtKM3qcPKXpr6dWJq2HpgusReXuQ1F42J6E6Ck4MWFdNbZNa8y7fR6R7qLao6SDTCc",
  "key21": "1zvAdRjKGhkob31asdj41iVx83N7y4PpwoLVwBcuWMGu3Fabn6iSYbPDDhcoqzRuducArFGqgVqbBy4V3qbAJxP",
  "key22": "kFA8G1q1eeNkj3F8b3VwZ8fZ1RXvvsRwSvKbLiEJ3m31bzEbKgWFWG7RJLDZ8MaArBCBpWh1fCbZMtkMJjVT8GR",
  "key23": "Dt7F5weqbXPRFca1dMCkexKQtbszr8x4c5oc5A75mxcwW7RnWQRbGGxwQvQ76fVXcUJKb55bQNPKiwqTtKS9fUy",
  "key24": "33YhHBq988nGEQL3QLZ427mcw2eMTxXgceZWqj2Gn2veuaRdCUQ2JA95FgNN8DcKaUvN66bcQRGAamSPTqMi98iU",
  "key25": "5onBatTN1dQR1qV1k23TXM1tC2b2fQym6xBSazSgBdNoJqWamL45dEmsu5GV416p9K7ugL7tf9eoFwCQiKM4JsQ8",
  "key26": "4Q3184mxnMYXz62KduixQJ9kEA4qm5nZJaH7HBPm64Y8vpAmvitZu86xkFa5iPrzikdXLpSjtK7BYPvZ9JEWx9GT",
  "key27": "4VKsRMFws9cVx8dfkTcRuXec2MbUYaGD5nPTdgQ1giUSRX6gc66dLyQjeBchPuPvKMjhWGE4NoSkBB6nM9SMbSqj",
  "key28": "oWPmDgkF1amVSDegbMGq7ZBwk715XSXKjY2DsHzswRNKkHCK1hEJAFtjGZSHyUsZWrYghPatc17QAn5grTQQdDs",
  "key29": "57uXF8SBM96d3y9Q2CLh6uZJ9j114FRhZAHSHgS86Km5wYzNGZwnjM1GDcvni8K7xCYno9VHpjMTze2ebB5z4sBe",
  "key30": "2eijBAwUEpVCmAz5qUfBWXNXHBznz5JdcqV1rLB5jETS8X8Ws1x2JttCfT4kSGKWNNrvXjaHyF9eF1s5mMei6MJB",
  "key31": "2aqdHVkFbdrTMSzNY1nMCb7nsXGEGwJKdAH3Buj9AMWPKaGXRGQqpKDLjfsHgFZzveQiX8kBiHqTYNX9oDV7Xxhs",
  "key32": "5GmZ24r5MsNk7BDdCTHjq6KxExVm16BoBXmitFXDW39M3ELAZCmu8nRGApTtN4fqtQHGUjEiHBbTHdFg633ic6Lm"
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
