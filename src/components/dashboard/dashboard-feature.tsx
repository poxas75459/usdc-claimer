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
    "4XytKLc1aHH1DXVHuh69dJ7FhfNGy3bBoLDiBAsM2mnsGWfom2Rhn7Doc9i7Sj5JyNkoAHnGwUfPhwKNnvpE9kfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41xpGCgfpBjo2F3L3zNagagumNeYAXDebGHVEuGgSLW2CmfZK6suK1tCPzEz67G2qThiVHNAXuWQqTmZqHrDQnq3",
  "key1": "zFPSNhsZBD6T5suBq5MCPqLHx1pKXVoBGn4nQbinqouwXAhhk6KUDZTqPGQ46GYxQ3fizMErr9EjXGdjTwCsAvZ",
  "key2": "4gG84Wo6PYp3Ygp7QiMdyhrUY12X1jXFrFUn174XJqzzLEaSkGNmjtAed7MQ5Nm8tcGGarscwmw2nnLDXqsnNT2F",
  "key3": "7fFXrKpk4d7jxatmv5jMbbKYaq3kNpRU2DmWxpaz6nengeAMrXUjfsPFZ5xHAGaFoH6FP5PriHZrJ7ZqFW71V5U",
  "key4": "5VJywTHReNBj4BrisGhPdcfyQLWTPuiTsLVBtuUrGxzWug1srB1Fyn1j38oAdQmY83DsMiTcP9ucQMuRC5zKnYsL",
  "key5": "5oa1WeBm6ZLKGhpDC4UoYLv1NhSnPPGFKSDNzvF8Dti9sTv4cFdozHHAQHi5TW6oaCZ3ftXoWPSRZZP61p5c3a4h",
  "key6": "7mFrWBKfJ2vMRok88buLgkokGARvDdWyxcqZUGznvSmeHLb46BnmQ5W8kKGfCH41qxH9QSuz9DA2htKarwrW9i8",
  "key7": "o2VXk18ssu5WXPs7gQo1ocv5WbuCBZ1T6rR3tsHA5L215f6AFxoXMBxBhJbWELjhC4wyRjWmoenefUVrXevgAuD",
  "key8": "5QmehWtmzTTHAPpJPUWBCGJKUk1yYutYeEVngyZQ5dpdXr85w8Wr7ZCw9nhgCY4DrySXP2gUdAiHUZcQWYuGBvdx",
  "key9": "5hXkSybPYmVxHFDiaW4d3EpmcnQGm3XUf89LvFKzbFXzJiXsUqPrBmaYxXLwE4gX5KJx3faHSQdxKs4pqSonPcUb",
  "key10": "2RXGRDvzyrWk5EshqwtNx8dUGpnMtJJmRPEhnmj64e28cVkR5vspeY17bZ4MLDB1RFzaCHQTVuTzA4dF9sheyJig",
  "key11": "5wK9UV1mhRgBJmpRWZUtjHHXL7qtyEWFKQtrWdLZmX5suqsEFDKJvnqTz2xrKr2XkCprQrCBwZim5jjVgM5euUM",
  "key12": "5Jz7Nn3DthYHTa9GktH9uR28XQAGFKsFqqqrQkoibtmXjAeHCtGm1F5cRL2JHi7kfk1DB8LMrpvf4ijmc415GYnF",
  "key13": "4XWowm2cMbdYa5RSm1YugwEQNSFURZ3FMQrcyoQUJy5LXfCF2Jn5MbCmjxkhvUz39cq2FJwLgNqAfT4ZZRhbwptr",
  "key14": "cCqNQr7HrZVnDbSyU9iw2LLuWTeyNkw2TYzpmtNBMkUPqvRY1YAmSF8Yn1SGVLan8xe2XKPNM6qo7xrBzZeeZAQ",
  "key15": "2UFnH8rfjwu1j7oM1YqvakFj8MAuX5QtLEAr8K28hbW61u3eNfrUuhsFUNCcuxb6eVHJBYYA6w4HDCbhja1mPR1n",
  "key16": "BdHQ5uLi7gjWoaNdex7QuoWXFmUB5KFo4wE1uSvw47CET5Ze1U67y8uZWZsMTCNRcAah6LByM7ZReaczLeHkkwf",
  "key17": "67NQbPqkTx1GDi4HdXV1vHvcCKkYEtUk5qSTRzSTk2ka6rCxEBKrdRDnu1cztXADKtCJUMkCafRRfnBSZPi2Vz93",
  "key18": "2fzX5pdTeouwcaopRSiEDREDwZc99SjzezjWb6EqJKXxJUnPUkXHGXdczeQaUo7kwaEzby5PeFcd2u9c7XBQhjpW",
  "key19": "2GeY5ycQurmczTM8kfDPfQewPZK9fgJYnY2F3Eq2dJ1g6vjuEntCfLNnpG1EYcXrBJ1hnjvng13CMqNDLntU5Eht",
  "key20": "4GsLneeADZTBtC6ZDvhMjM476JfAR6DvirFH2UnGdscuxWrp4qbcjxKfVJD9L2Hma3Qki7yfC4Ki2oiufCMdWi3x",
  "key21": "3hCKk78ibm6JsgEHo7vvcRd7w6HY7x55AHm5K3XesDizmUJF1VzVszq4NQfAZt68xVH6ERghknLSuZ9RhKbrGidG",
  "key22": "3mE1RdLhhFopdom2YS467RndTse67BHXmCQ4GprPx4nwPMbmtXXguDjdiYqpYB6DCpwS4owVpa3NPFZRT6ACTJY3",
  "key23": "2hEFG3pMQ8jKDo2DPXCKDgmen1aYuiibu1CV2gmg7GFYwpWkyriAVuiDq5wF52H5H3mhWZdi1r1kn3q9v3eS9cFc",
  "key24": "VMpnJJVFFwfJ2GBpDAcDavSHnYGbdggSfj6aNHEiu7d1Cc8hsyQaJakieZ5xTNMdXz6xgf4FgkptQ43RAsKCUCG"
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
