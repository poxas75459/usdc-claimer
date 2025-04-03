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
    "NNcBh7M1ALrJVEXwECGyKEnJZ7pro4LjSUQ4zdH2Vm2aALwmwFixQtUp9DN2YPGQQ6iXFV2nsjNKfA5f2nt5izi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWCMtiCSgyC5PXG3uZRvMmUD5MNcWNVGNoaKe4Tozp3WmZWiHfbu9aYUHtrhKqeT1wkhpfQjZvucWenvWmQgd6E",
  "key1": "3Uy83sGv3sei36vsSFGMpi9CxTK8ku8XUoEYLqgoykvQjuqqnLikrmDnN2qqgTo6g43FhkfbgV7DaRd3c21oSq7h",
  "key2": "4gucwUiyfghrpzkZqqsYQsmDBjPgisPd9xgqm3THNf6CPbBbYc9dCjPy4eTJWu2wa2CnPxQt1ct9xmRgjh5SYnop",
  "key3": "DU2QSqBkdyFFrd9yryvDtjnfNqqfM1Q4cLYA1GQhS6JK8vFNbQuHSLSp2ko2P6rJPv2ncp2EKij5VCyfug2oc7K",
  "key4": "4NQnnKPMydViFy1dJBMLfyh3aUddRhBiyaD17TWch1y9RbCKEyRDJHfPKumcXJzMvM75urDdGJFJ6YQAYGbEq2sv",
  "key5": "5Xg8XF8DqrwbEPQjgY6SRVPy1ovGqRXxKVqB1cbdi1CfSgyXa6KkiLYtc1Zc7B7AyfKcFXsbpbmbJnSdbHk4BdFf",
  "key6": "5ycB4bbipmhekqqU5KNFoN2T8BmfPtd7J1PuTGGtDUtD81jP7342gbF9HT6zACYHc1YCuaAmXPYao9R3ym91HMrT",
  "key7": "2tGWPSEKW3vhAKGfJVJcsni5EdqauwafRcwD3N6pzvWLnrxfJXtGzMXGKVZaefnBNjUMsgacWwkGVt8d5SVpxy9D",
  "key8": "3qsJKMgSmPbJyEcLUTeDF9khDQKEsArQ655zsdGdd1evEnFYzetPvWjJ1DbojNT1hrTZxEXpcD36J9uH3r5qXcWt",
  "key9": "4KjTqnYxP9GvXNuqENKtCjhVcAKv7NDWpw268ge5jzuC9ErLLZWx6BZteRrpMrVTbePKw6A7C7D8YvYvad9sX4Zn",
  "key10": "2Qx73rP6pZ9SNB4SZKF7kAZ8kxYx4hiwJWjFDRKqFFHRFbh7RswSXNXYMqiwBrizmN4cKjXCd42SY9h5thmjxvbW",
  "key11": "GHx1sGm8gqyxbZambn8h5DY9kps7Y6e3NKtwidKEnwQDCWRDBnj44tbfQRZ1wyAdmVn6Gyoz4fbL7H3PfLK478Y",
  "key12": "ZdQwAXFj8GeHpMwgst8wpffda8P27WcBfyq76Zw8QuhHc6Gk9xnKq3CVzezLs8b8YZMynynLuEvgTAphXhVRD9p",
  "key13": "2ctRNVEbSCZY5pv7MjiWUWm6iksj2qHYy2wKsqmNPpwB3ZqhhYYJCCTV7bZZwLYPfVJkYbUCi2AAjFMJgxWjvr1X",
  "key14": "5k66aH7M6Q7RC8SBshrzf12JAzc7V8b2ACMW1DSr9EHCqnGcKLhYAvFX6TGLYpG2HraEJmjRMLpqYWbjoyYmVUAa",
  "key15": "4ZSJbMUdxru1Qwo9T8Yq5rA3PdkBQGw1dgzj5do4m3AzEeo8LzjAVZRm61LCm1Q67Y2vH6u1GF6roBa6Tbjh1RgF",
  "key16": "2BK1Vwdozh6Hs2GYxkntPSMCBMjjYaTbvL5cD2ai8jg8mQaobX15CeuJpSdFKrupakzjDcDyKAQ4k3REcsJxyX5g",
  "key17": "4yv3w31B986GifRq1Mv8qp4b6CcMz4nskMRBjCSgZPpFo3kr2Ksft6QRHYRDPvrPvGgceKgbhybG4kc9j6F1qN2C",
  "key18": "kACGEszRQ5ZXeNZKWWEhdVPnZEWWaSevWjs5LGyMG7sMh5eYvfCEpXziZjQwH7Rjw5rL8nj1ZLGfbJgsvtvwKsP",
  "key19": "gRtkXFPyDCkLhdwtqciEZdtHb3aRv1EG9txR615VcyThmyzCjS8Yo4DBTm8tUWANhwVUgK1bDbb17LvF8PHmUtt",
  "key20": "56t153bVGcyaKrocZMqyApto6WWVm5MA5T7YUxpx8N4titSwkSDbbcgute55H9e8NZy1cpopYghPiZLbBw9jBMQn",
  "key21": "53axY63AoEE37gri4pXBHNZunscAiPdLNrFcXz6FAqSBBLcuhqY4rGo33JBrRHL1pDRD1ifkeX7zPvtbgKQne7ng",
  "key22": "CzHz94uicstG7M7X5weAALwTBBUjBXdJmS5quUc7w4kdGd9vf9JoSPysLHHyexYGz3nFRqEZixC5FX39Kee7aEQ",
  "key23": "4zBG5RFBiBhtKKDe9uP2TrxpAoXHpYhP9nue2a7konH3qp1zp71s3xDfJe8q5gzUqp3T2CZ3njwGFapqjRJcqmWr",
  "key24": "5oYMbutPRk9e1UANJWQUV1iHe6MZMnNYeLWLXUREdTS2W7N8ysvvQon3X6XdhRzt79Tv97QYN2B1TbJELgSw61Uh",
  "key25": "2nVoNqBQq3bxhpseLkF4dRSnspm12oJ9q91mhqCGicqTgGfCJQ5jbegbRqFgmNDEWYiti3MCTHZMAAPXvB9MKSgZ",
  "key26": "5sR3iBDuK6uht4o7URRPuHRM23gvBsJs65A1qbdFGgEAfWgw3AZpovRNCCyFsVFbtUpkY61W1eib4wJpsGZWmmss",
  "key27": "4wsKCBchiv5iwqmQVtxrwsHPxo6Cqy8HjbJcwEjpX94frmFqDMwrs4Mq6TSQ1bzWCiWs1ZvUM1KUY5dLmCNpxDZ7"
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
