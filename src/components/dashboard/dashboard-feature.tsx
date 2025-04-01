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
    "3uXoH4U54mrpmb7CKr9tSyDZgz82EETZytukFb56QcRbkvDhaJ3t2ERFXykqzffirGgjbrJ5E6vY6FfRZXa1kpCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uiDMaRCP1ZgtyfaTNxTYLmTMWWT3AAmr5GM2oJhcEMq3hRUZfGAmECaDxfWG4MMM85fqcPvCJ28MybCLScAkuPX",
  "key1": "4tmviYeY5BYP8LoKtpsNDq4Ak3Xa6GV1gatzEekht9ptiDouMaTrRxL6NckibQZ6WKYMfYCzPUPc1w31n4xUdpX8",
  "key2": "yeENhhywu9eLuyCN8J7tX5MF9YTLTeMbJoz6buVf3dgwGm7WFDAFX47Cwo8YdPfB4pRseGxUU3Nu8Kn8NcPH2Xh",
  "key3": "MWNpXDUSVrdQND9HVpjamvVoMgW6XGgk9rsAduHnvQWVhWq1oxaqkw7NDfgXzkC8QpPcKCcQKu43hXax3mcibNg",
  "key4": "4npMQUPmgZ6zoGccHV9e2DfDDrwiCpVq8dmVgRakc8i7pfe5yMz25Qbnboz86jpjzgv4MVcto2cX2X7Da61rrxKM",
  "key5": "64UAo8cdHtB8Wo7SA9b8DFrLvHyr69TKQWBJLje1QcS6TiXMa66juxePAKL2N6nShSojd1ent6c2xaHPEMxkcrry",
  "key6": "2hmsdAtUbH4ZVAQMZ33nuabeDuuJvZLFcpwZATqcSWCF2DGA2wkB1Fxe4NB8tiLCimhtCR2pqFK65mvUfu4kfjbH",
  "key7": "XTX92He8TJeL12je9ScHqUQEPNm4ehhDSMp6cD8XXhFdwA7wV7wRPMUeU5w2doNrhQQ8LiMq3yLbbDZHQ1bVnMb",
  "key8": "4q2qqg4AunNuxjKRyLowEyo8VorUgPkn55qrk3jf61Q2wty5cxo4QgwEBTAvb9ebxVnErHHfhWjsAHg3JB376cHf",
  "key9": "591UHnHV1h5UEu36SbaorDYTKMAxt5zaidyXW6RUoLrqGPuZggpWQqNLp2MUNDNmvxpG7Zqh1kTZtLf613T8c7ZW",
  "key10": "WhUWGsTvrURFtAk1n2eBEfrseVKYtjLweKR2eu7BR8DbDiA7uyMSGdmYoyoVw9UoSFkh9ie55bN2P28pnWacBP1",
  "key11": "22qpD8G4yyaykAtMsgoQfNqd3f4fJC6vGWmdHGMnxfZuavEuvrppMYZ6drxqyFE8Sq8A3S5FZ5h4YpRp9keg5KKo",
  "key12": "5E5S2ftvKPSCo1jzc8BW8nsD1GjSyee7cLL9vGbvPktEDxDAVNKkM38wJTHvn3QeNgxbkbrMjY7gU6E59AgBRE4k",
  "key13": "5wbdzF3hV35LqzmnckvAa2QbqpWfNtEsVtrKwQBQcqt2hDM2LFp4NEYfReMNf5dFd2VoMfrYftFqk4wRKrANssHH",
  "key14": "46gQ8H2CpgTFb2mDxS3pkhiVo2KLe6Vxfz9aZExzMjsEHEaqqkKX9TnT87hHKPEacHbeCtn8BNMKoNzxfEws2FTf",
  "key15": "2Hw7utgycXUCPnnSAdVChAPKrZbGRA94PyWYMtZrSULPmRgptUWZ5oRr5J6gs2xfMd9yZHo9Ap76KjArvZ655MiW",
  "key16": "4KxACcNVtKD8tVNRyUom7YzqRoPamNEu4edh3fgmzaFbrmQydrZTCuxKKKvWa1KbyPL9mdfhNJfW8Ts1ZmdPfijQ",
  "key17": "9j4WHsShuET6aJTjhSkSmXQnPPxBwYwnnX1cFciK18ZTnYvRhEW3wZB7yqs4NzD8FRBynTWwnBUo38Y2qeTcZRd",
  "key18": "2wJZHrsRsJ2dinvgQ6vs8dfY7fqax4ihNXWhVYK2RKwHrAgoQVXHfZLhgKyyey5kRzHKxusGEmbBG238euh83CpE",
  "key19": "61mzQxFsK4gWqH8ysUHNt9sM77Zu3xyEG1KV38tpJLfQB6Lkbw6VKRjberrPT5jyEfVd78rRGBQw6BLPyZzYgdBA",
  "key20": "4YQeVpYr1k5cXUVQmoE3gxrpkMJdHYWH32Gp74kNtJssdrixi6J6tBcKQ8ghuDV2aqJbNWDtD16XTNK7kbFYwSP5",
  "key21": "cbDwJDf9kE34W5eK5pvY19gvzmp3uChxbK3vnMfpjytHQHEibuX32pGgvmWwrKLdse671fpwYQRSisMbHpxo3tQ",
  "key22": "4XutRkh3wRFwHxHrRjtTgqMaTyzu51msucQEHdLy5FVBCAo7YeVa4QLGyqs4W6G3rD8QmfcnQ6bGDeQYSPXmgq7U",
  "key23": "4WLPnHH8VNyvADyfPz7TbcEd6wka6LdH67SSobHUP6LJQckxtXzn1z4QbHuSEvEAfJJf5fQAm7djJn5ij6L1mqEY",
  "key24": "67FmR5CXJpWXdBWFJejSRvghzvcAiTUMxtvPuzpXu7c3XqyifuWUxTjduwxeWHM8KnaKV6XB4TyDiiohtX2c3bUz",
  "key25": "4eAtvbKTeyZVSXNPCc9oABcq25sp9E2BNZMjsKTXwez6sDJNcGydKuryuNxYkiCrngF4AQQvjF5mnGVLimAhKSqk",
  "key26": "adMVMDBBhbQVSaWmgtC6ZZH32gMsTxeNN4JDhtD8uQGaAHsUNKR7GxhZBEWowEoo5ReTnAL3hkeT57vSLLZY1rr"
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
