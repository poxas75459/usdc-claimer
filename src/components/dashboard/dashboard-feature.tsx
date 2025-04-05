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
    "2rPfiUFi1CezjXUkQRCt4WrxE8GhGDTXBmvsjcyy9DqdtxJSJUvZ7QZ93nxd3bBFVA7FS8RqKiD9iUS4QJXz5Fx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67PWfTyuSe7xNyhwkUxLH41Yg7ebAECcaXeXsWirsyCzd9Pqfp9doCB1tQWV9CyAjt4GYSdQvGoTZgLn8YE7y7yZ",
  "key1": "5fYycpWB2X6ZE3Qf4cuHupWFixfgqJgeiRmdaMUW2wwxF6YF1veG8YaSmvxu2EHuCMJSCcE9DZXTcgxuE2yrr4dg",
  "key2": "2JxvDu8r5YpU7e2yLpDZPK4rbhEzHVn5NER6i9n5AZFEkqVKNydvCv4sz5KEHaqFhhezFLDK8vEK9SYuE2gfWkb8",
  "key3": "2Z2ivEXwUTq6PsYd39718bKGE5egiWvsz1VPxvH65BS3GqT5bwfP2JBStJTp4Tu1EyxaM8NVebdPJRrTczr99oeJ",
  "key4": "3qFvHaEmHSJKfToSajBeEhTV19bnqyvaa3RdC5EhkzhD7sSZFwg59ZGEHQpCKAy9mMghwraex1d7ULi5m7DnT6Hc",
  "key5": "3DLV1enJfDxbY5FJSAy3izD3zvgxbdsMFtifDzcys2s5w95xgs8dk36sResX5XqjwicDKJqEkRUP1DAJ7WeZbNCV",
  "key6": "5YkRpddJ2Eir1Mb4VQhih4nAiBg2jtsg9SMZiekxyhKemeYfu2FnXKJxHtEeaVtf1cBxAWew8ss1b5u8vPVcc47h",
  "key7": "2adAd9MJe3k111gXv3bVDDoT5sraNzEJB2RvWmsGjPm5LCRqhnD9DSseSRWotP3S89SGDM4u3sWFhFVyGvz5wvkF",
  "key8": "3cUgezkoKSXx7jumpaQwju4rnV6BhNdd58APwqyruTfnCRDKMA626U7KPQyksMXNePKnH8qGm2zcrmEYN8BVCGUR",
  "key9": "4iLY8sqLf6aEeS9LaGbzqkYhfwjXFNoWwX51awhJWK1a3sK8JnMyW2NPAppZgtZieock4CESYtXeo1YuYJc2Rctw",
  "key10": "V48GrZh2gu9f2KzWTSeAuJsqrdqfCXb4ZHn3Qe6HJMQDX2QZrLWauxaTGL7h6CwAoBVHDRHkwCAMafgBNCJyFKY",
  "key11": "5w9sRyo2LLGc1bSqdUgemPMFrC4YhGgVftGwa9VKiuJdkm8SQNBqekSH645LJ9gRoBjj7WFsA9Ym4gdFxPTFQLBF",
  "key12": "3zNreWKhf2tL5XY48zgrcx1Bfsvk4esx8EMNwcTbA6nEaUE7xVnZZNL7XZLsBZUAsoKKm1jzY9dSreJGNHGVtvRq",
  "key13": "ydkNgYCufHkToB3MYUHemSXgNMc9jrLpq1HzHFxPEcfrS1MY7xNaT22QiTyvjuRnaDU9ykw8Pg5vSmgiWBHoPD8",
  "key14": "4THHbgdeL7SkUTwMfuruNXWPKaNJQfE1ebTP9qkUS2EVmEx9SEdeEbuKemeq1eJAu4YwVjhCofYAMnBMD2eyEdvd",
  "key15": "264mi5wfMJ6DbvCC2xoZdyGUPHEcBcdkhuK87dtsrsecrVhzSiLyhJmL8D7BVqpSAfxX2ybQaJWbfheJuaCnE2wR",
  "key16": "2WNB5NESVbAUDhUmDfGjAmvqhvrEDHpKAJhLYDWWXVEWWzVdCYpcANVkPLATBwBHeYwPhKnqK79TFaHLUJu1H6cB",
  "key17": "5QJUpiKW7k8rdF7yjjNhvkrnHBw4eGy6yDQuanFimuhiCy6BXW1ssYR5B9V8PTvhGjxAfMugFPzA9d2apwZyUNJG",
  "key18": "2RBUiPUbcGhjh57jhbUSHQj1AsUnhyzVmKNtqDXTA35sj2VqfyUrLNBKXzmSpMr2qL3nNeaTCiu23ULFbMgucr5S",
  "key19": "28GMJSrK2rS19ByjD6HrP6iKWZnMeRVbn6esxZZtjZigj3gugEtfZFsPNNxrfJUeoc7kn9CnTfz8W8iEu7jCWYmm",
  "key20": "5fHFkET5wyUm6edqFpgUA9sdZYQpeQvDnEuZJMiWvN8cPqB8mj3Ed6dDrax2XFYwaHfcsTq3vGZCCqcVmW1XcsCN",
  "key21": "5axNiZ2HLvsCa42bhENyvHPAAKXtXhQVvf73FfaF55XjBBYNqZK8QHBEGb72kYbFCBoxFgtG1hy41UWQhS5RcH8P",
  "key22": "6fM6gaB1vZAruebg1WuTCNdTZFzGWmP5RH2xPvSjsaviD1rrmRyA9N24QVE5xX15tsznyf8hG1o4VFjKKRkmdtu",
  "key23": "38oHbDC9h82xgHQFRT5nvzLe2kPkNqMN2jKks9BSHGgh8zC49uTcsAtYswa9hK7gXHjb2C1Dn8VzNpDWGrMbY7gt",
  "key24": "5wzdWQiSRAAdGH81X5BxJRzaZzXDa5K4givwyVVfNBk26yvm3QGTkaKC6Du6MaC9GSxUUJPbvCnxVXnpLQVbk722",
  "key25": "41ZPw9Sop61Cj7tqNoSRd1bi28avmPmSBQ9YY2m6Dm67sHTBGnuUyx34TZiWM7rZDgwyovJrvJNskoJ5zqN7sjsx",
  "key26": "5zd15mHZm9cihsiVBZfcEimNuaiXsWVMNMqoATXtkmGPdRukrpZxGC4Jpch4dvyMPsSoiBjgymiUbmXcTihHEbxA"
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
