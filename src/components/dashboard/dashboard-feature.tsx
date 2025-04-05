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
    "3PNKciQnugBu82hsFJRTULAn8azHGgN7Bfmu4FU45ecAMD2JgJH94c2UjUjATbDjbMvsrgh2mFfo3aEzxSMqUg1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22rhojDAHFv946KJ9szHKEqtcwwGqgvhK6bV1RP14X5NDMHgiCPdLT3kwtRgD7KnicjW1jLQ4XReWV2AuVXk6UgH",
  "key1": "3f9qCM31fFeqqWABe1YHcBDjBZtdzEv2bTnRtCbo9QjA9PGAKupfH8gFNMvXedcencDa34gaW2f1LBQJZeBQ1PjJ",
  "key2": "2gejveDg9GgX1XEekdi1YgukSdxp1KkfLtMVNNQa57S4agxT3EgrmjdTYgiifub784jTv6HNaSwHbdwaYHCq2bB8",
  "key3": "3wzoLNsYjAnujph2deeTcKdxgKxNNmWW39GMUGJTh7Z47ZUjqwk4JUJaey5FjZf8uuDtEovhh93CAUA33PwYepe1",
  "key4": "5NBK95rJoGBByt36xuSpqBsdspnFAxkTPSTBHXQ268iZP7yocsXEMiUujodDpZMp8py5U3ibsVnkjzef6siSVUqS",
  "key5": "3EgqjM7iHvcCgGFQPmzGxsGEJKkJDNXKr6vcmDuNnzyqxvKfHH92fFpUhkW7HUgL4Lj3vmdbrRU49XbdYVZcnzG1",
  "key6": "4G1URezT1jzFDaRktkBS9P5AovV9wLRhDz1fmQpDaP2XdkRFMoGZo4KuX83GGREyYH5v2bMuKtPhkHA69EoeJwJw",
  "key7": "4oWxqjbKBHqeM6zA6iZ5WUYuC7eFJ4p1yDTbifAUyxWeA8ckaB7bzKzzDkY3g6T8tFuvfnQsCoVRB4s9eYsM7z4k",
  "key8": "5FNBPrJK2FSZUQ13vxtZFrf3F3YkmQDK2ZbenMz31z9TVejdshpT2ruif3XqUwqcDkaHgGQmboJM3PEfocFHbFMM",
  "key9": "4T1W5jBKC5hiiX7T6tDxFcragsweWQPHiNhb2tt7DURMJHsFCkcXrjfWdC1BBBdZ1mRYfP6gZYWiHrotqoGYWKk4",
  "key10": "59HaMTaJ5ynfR15wMffPPduHKqfZWP1efAwdhH76DGb85x6pUp9Sp7FmXmBCD7v7G889tR43kiJgsAxtBMHFWYsr",
  "key11": "ZcJBLTfjQegkb4wbqgBiL18pM1wvSzFQVqEtC81mh75MEydmRXarfjbmYWcKR3ayPJyGnrtRj1ki1PDRp7XSPHL",
  "key12": "3m4coxaGEGMfQSJAoQBuCveDtC3CnDu2bEg5ANpLfuP8iTCkVYKai5LAia6Lg1YKEfyQHFR3RxNRBjwkaXkMyp4j",
  "key13": "2QJRFPV3YsFmLQ2aFNxvFCRFXzAmZVX364aBnu2sktwjLFdBYpdw7vhrfcHiJH3nBnAnyEn1sNDA6eaAtJbVCj1s",
  "key14": "4e6VEGRRsN2uTkNMJr3sczbxAaZBgDXF9LXQz266B13ci5gjW17ciFJQdhihAqTkHER2Z9xdwkhjgNo1M6MUVRxm",
  "key15": "35FvfLSqXRGjpHDTBnBHwDfiSEmZYrGmVbvTqqGsMNn1EZktfdR1BpvqVkgd6dCa9TFkihdF3Kub7X2XVp7Ek5TD",
  "key16": "4MK7XTxwxKDpqeZtGYYWPEJMErQLh3kEwM1pqDuipL23zifaXa7A8hNxc7PPZ51h7JkuJkCgDJVRkhEF3vL8ca4",
  "key17": "RY3JABtXe5TGDkFir8yEfw9Ge1K2mu4f1tRGZ91K8Qb3nCAh648oq5gBBwTDzFLi129nCWfApgmkdc7znxtnn6j",
  "key18": "2tfD93YpD3XXwdpsd9bNN3uCD5QuPrJi9PK7wQ9ouLCUUw9tRozRXtYhYg8bKC5UenZ1nWiqSN1XWitXSceURZAt",
  "key19": "4n6hr4ANrvEKHunwsa2KZ6jLMoRtSbq7u1gju8pdJVJ3LsmQjnnohrbmz2UFwi181dMFoDaeFHVFjfgyBsmJBVPJ",
  "key20": "5sV2LSoAif1cbeNdEKPPi1GAtE1sJyiNFvctrpWVCZSsMyPQu1jPqKdHfYbm1R7SFv6XdDpGvnSwkAjyVzi5TiMp",
  "key21": "2uTRoxFauY9vmvsJedoS3QzHfmNpQ2xQNPCQe9VWXVZY1Gze61UP6YjWA7o9dLXfz5ESQ5q7XaD2kJXj6WRa3zwH",
  "key22": "36dxUt6SDRehrpy9w448jiBjysejQjuCrA2uHwq81N5z8jy46NNmDMKJMHFHDxWNDUz8p8K3GJz6sUC6AavnGPQd",
  "key23": "2sUHM9Rvw4bCmCEZ4SfAMYCwZpgUu484EJQrEv26KBdwXxueMRYKvB9aJ8BqE8rBnuGu9bLY2PRn6dTfCH9HvWs9",
  "key24": "4LY9Yh4ixjKzNybUjybRNujx6etkiPy94dSX79XauLDaNAALampRPTwgM7tBM98cEZgBnF64tDDCCLotVTc4Y1fS",
  "key25": "3ac2nLtkeXT4SarJWPXbBpe6SekqtDKYCamxzjg4nNSjyxN1C1BTy231GCi7fjkR4tfYppmPDA1yYn6nP22Dx1jE",
  "key26": "4PnLf9PtBY9TT758kfvPSKe677iu86SJYPSXAgFkadrSZtGiRLx9FGRSRgY3Y1VpCEz7tZMcFiXe5SXM6o7kjKoA"
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
