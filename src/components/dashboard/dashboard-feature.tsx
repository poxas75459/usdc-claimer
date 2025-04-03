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
    "2QDjgbz71Qik2RRsRHD4xWSPJYXjwH2Z52xgJAD9a9X4iFh1wKNVv5fQQiW4xLcC3FvyhPBN3tBxrdUdJvfWByPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBQ81azbohyn3QVDUeyPsipTKyV6m5UnotHJkpRPaHDjt9AWs8TyhH3PGDrLBhSKtnpWbYSF5pAZdCM3Tr3QFMC",
  "key1": "2Ecpsxd9xWK8k1EZxfN18vp64FKxVSmQtDgPWBz23eJ2RM4hs7WmZNNhb2NajxNathSENYT1wtfqQDP8y9TX7hW8",
  "key2": "5GMjXeX9GwP3xY6MWzaV8Cih9EEaJaq6VJ1mSbZaqUKqTa6LH4HqYeCfyHjpVhS5p3UoJkgmQRPjCnqiSJqhuKp2",
  "key3": "RbbhdQawTasCUbFcA1mgGEB231aWb4uBAG5MWMqYyHpJwX1GybqgVwKCi9NaJEJpyCVxRC4fuyZJpanMT3SiMhK",
  "key4": "3x9w51niiCaDJcDXfsevhxv4r2r5nLtR9dhhVWk6nKgAzXxdgMr6e39g8SJy77UoWb7rKhH6v2FXhr54t2KUB6Gy",
  "key5": "3NbL5U81KbgcrcLAjPJnXwGR4PGpFtHBQFTWmFyVUHoGHZNm3vYic7CtwgJiXFGQLiSCootCYKrfN4PzEr5iBjke",
  "key6": "2Y6hQ7zcBeSH4ZXyeh2qL2XbbStA8MWogW4WreAPoqCdAcBPhdztftfRQ7yvzzW1gPDeKTiqSLj7yMh2YYvQZ7b8",
  "key7": "5gPsUzzyXy4wMfervLMUBtBVKu8SG8a2FDiZ7hv4dLpgERvXcs2dQeB6CHjoSB312adh6MtHoZfWsnv2Khj7izBF",
  "key8": "2ksMpAK1gEN5ncMWWkX6Pb5yiztvUy8HgdseJMhLaKR2aJZkaxeqNFY6DC199cUcwmSDPBVZG13UamfTmAr4nZTt",
  "key9": "2A1jTVMgSXJpbg8A363fXbe4AC1Qxf3zcHEk6iSjTF2LFxnbBqoAyJ9qPFcjRGPpxByPJ1cz1QSCnLYFq4qfifbP",
  "key10": "5LE7J3oeuTtPfNoCtbdui6pwBxiHeuEt9T5HXoWENcNBpH8jHqZmGG3eAQKHpuuTXVRSxG3ByuCj2QFu8tXTPfJw",
  "key11": "3A8GLDSEifG9jDfMog8nedxTEcHpbhqw4un9bZoECZuYVZzHFN4gKDCAnmZTWJDfSfaQ3JoB5ZuRBNjwvxSmBp82",
  "key12": "2YP5CX7ZqNU7Q5uETV8Lv5PVuiYhKaMbThAeYFYxDTn3hCadunFzpVPaXvqDZGHBwuzdZB2NwvBKx2SpVNzcUZpT",
  "key13": "4YZksxmYrEsA4akwjc1nCwzCXA21suntQyvWYGw9wpdyFDi7QJtX2i9X5X9Ud8DycmTwuaf2A19zBmbk2pWD7VTq",
  "key14": "dxpnbSaP1JYWqyB8PrsLwZnejRGe5ZKDrVaLoXJDkyLfdj2LSanH799mWpxrayWeCsRvUzDF8rz5qesC77uYdV3",
  "key15": "345HJZJP6rkrxrKtexZ2wE69DW3Yxs6K5ZrHYagqGyz42dCNihPrMcKW4ttcXEGncfC84TA1bA2reStWBzFChX2p",
  "key16": "3cqH9KMytrYyG2DMwtWcYrB8ddtgjpcDDZm23cxnvVfSXY3RyWSxCPNzP7vVoTJ9Kfr7xzghPNcmMEL2JQm8kkk9",
  "key17": "4LvBW2S7wtD3tFiGNp35pL5oeatzFmSL4x6mrj93kYWvXkqksyX59TtK2RhpFbmjFnd3bJgykw37s4dSNbVX3Kmq",
  "key18": "5EmeTsb1rQuvmi7gGu86fs8yEUznSeNmYaHy45zNmDvgrYjWDkMh7oNDjd1SENW5NZTg7UbwfFnmxwTj6yntJSnn",
  "key19": "2pMakWn4JFUfCEMeQ5dWZY9qGvcegCuXTVTLrp8jMnstoVQJQGt1weU7wffLXsCEUbs9h2hvhYciJTWvB7ZxtQGh",
  "key20": "65SFNz5TdeU9v2KvdHTPqi7hCt2g6sCHohxsC2UerJP22BRfFtnPkoro9fbsSVhnN3bBNiSwLFPRkQ455TRyjPDz",
  "key21": "2xFx6qtJQ8YiUTJp7yhFLNfLTGmK4pLrBje2deU2kdqYyxREGvaVc61szTgz7gga99zeRrChdeckBMT7Ak4YAMoB",
  "key22": "553VBX7KDD6ebYDDxp5RJqb3YNiFjpaHC3K9RFLdcVYrwoVvur8vQ2xLGWSofKcQPTtHjDDndw2KRYKNRJ1hQQtJ",
  "key23": "rCRHuiKswcAyYzvSuwuDBxjWCyyAqAXCQHPodJNJHFUi3C3tk8YrsmUqSK3v3G7fMrdo2ZJZEug8Zib4V2h8YXL",
  "key24": "4X2ZKCJewdKS1nCwTdprU1djfTRaBuxb6MXz63KS38dQNS9FpNvWvnTTJRY5hETKGa9zfiiR3UeedHHRpNgv5JYt"
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
