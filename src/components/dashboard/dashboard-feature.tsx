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
    "V2Rn2XbEgmtvNshj1a53kQ93VZp1axwMcKmWt2gZ9Ms7zNHqdb8waN25nVL2kSWn9W17RftQcGtLuaXG3LdbiUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bbziCAcCu35osr2J1Y9ypRLTL8cW1acNEAwrrQesibNP1hpdvpmdrxBegrX38hUbeAYZ7qN5YuZgR2XVXLQRCvB",
  "key1": "4trVRHi3WpWpAiUijCM4uTXs8DYVQDwznoFKwdXpbHMiU76XN8v7WKeMZRzWx1yn1YzTjntrXeugB4P3pf7Uhtnx",
  "key2": "oX2y9i9wR88xWFUd19ww21fY8ccdLcQsuDGzHh3wprjs5wogfbiFnw6a7qHtNrpKpnGDbgQ7QGYykYhbtN7CgMK",
  "key3": "55s923v8TJijqQsiXqMY2FMQeuGT4f5QeVXMsfodH4iqPGe3iVT1dJX5xp53tkCBAhR4rdH9xhKhUUQCccNKJuj4",
  "key4": "3fEVS15n9RA76wRgLerFuU2dALcLcMW6rCFP3K8cvLSFwK7i8huXYbPdVNREURFvkkiPLiNzbKgz8GAZQSVjEgMx",
  "key5": "5Thdw2UqL52MjHC1oiNnAN4inbDn7FQ5cVdMuDc9EhMJxbs2q231AnGw8p5HBJxUXx3sqYoJJc3ZMbbvEudVF4hC",
  "key6": "mGDZs6r6dqAV7jqhLkqXQiQTCbJNYnF7gAX49dVXeT65GwLTqvcNYz4L9FWv9wGz1gojd3YKvanQqp1grHKfpxo",
  "key7": "42ScD3un7C3FUFN9AbtUTSwT8CM14uvuNWnmZB6j8dR3YecMZGSuuyozGwUUFzTRhwwjxW34tvyR9d8PH1ch7DgU",
  "key8": "4w4TZeRULqJLc3kGpgE5TQTyd9ebzrmhGkCacj1R7FkjD9RpK7b46Nj8GFJLueckcVLDn8rE7xTMuqxzXQWs3dxA",
  "key9": "3ARLvNXgYMK4w7PgjwdMywBaKZzNrXhkqWcmvnJj6ekdeXyRfAPz1KU8bSrcc7H9toNYCvfuksPKHPLHVyuiQWNv",
  "key10": "5sHooSjpPhw3gy5GmdgjGyJ85XwXqjzZ4BTVsNqsjtv1mFq6yBJAAGsm5BkfAVkvoMwKUWA89Y6wwoQ6FGPzjsip",
  "key11": "5MVE7ARZthR991GTkFtW6z8ZctVH59X9dEtUYTyi352gyLSaJnPenASzRkkToFZW4mFC64MLV2MYHch9PHfTUo7v",
  "key12": "2EdYtDuShrTkn4mnYwR1aiRuWjKpUDBEf3CKa7eku7re86jPkuUU9XxtYaPV5fzZmonaYLuZpTfQ6KEuNJkCHBic",
  "key13": "5wUegYwwS6TT1yDmEgop4gEeWA6rmDDymCawjfavvaX2BkUfth5xiJ91D9RGAw27J6zKeQby9nUWRXf49nj9RuLs",
  "key14": "4yhyjtVReMiap7GLSCJQ6FXJUKA1bcFpknuwUdLE9zhGJCeWXpzDtH9T89fQHbS5FvDCbxmXZXCnZdgtoP2aAyRL",
  "key15": "33mnMCgEiNEEHBrKpsCQfGqiKxNVp1CfnA3TZtJb5q5LQ22oQW2i727rb5vF13fzGMer6KpMQPLHRxkEBKvc4Qz7",
  "key16": "5XLJ3navM55FxLg1StfYqfrpKkYUZJ22zhkkaTaVor2ErnAXJiHaUv2VHHWhZyZaytChqTYiVQkSZfH1zNhdCWqV",
  "key17": "32sv5ss9QiURnTmEswmq3NQZhrB9BjTmQpc9anYUYHEwY4njgHttWQxtpLsFssx12ZuP1KiJPdYzNKh5MSaL7Snu",
  "key18": "3FtrPcNULUufNBbgLGg7ZZtzpttHodjT8X4EFAjunnG5Faix1745MARr8yo6UQYAJJXsbRMraEYPBbtn6jwtDvS5",
  "key19": "38z5FrrjjtQE7LBRjrKViuMf8j1rfU5XKWbKnHDC7HFgdHGqk3uScwPziuoYV8vm96VPqy3UbCveCrmr5kY11nNW",
  "key20": "FZefmMBGoyMn8VS8pGwHMydmanvsdmvRx4NbHLze8gdwnsbbFHowhqcjKL2VRgFGPVrTEKx84GNC9vkJzohyvZ2",
  "key21": "2TDfe7E7q3NiNVeX6Hrrwj5z529RFHqrtwiR7wrfhtQhtjyaofZzD1QL3DfGDF5L3G5Cx8Gnvdxq26jaZnPJFjG6",
  "key22": "THGTu2ybjNLKbjjzNNMhh6Mw68frB8WApPwx92HFWBbU6aHEvrwfCMpHtTqHaJJgC26ZEDtfwJo9kmLxVpvvkED",
  "key23": "25WXUPi4ucUhgL1cYTxq9oJSD2RkrSzmvKjaDbk8jbriQuSPWwjo6yk3dGqobuzesvXLGca9H4C9g3BSW6BaxEhy",
  "key24": "3zF4jqpmifDdcY4U8BWKN1hjTegcPspsfHcnn57Hs3PQmvL7gFwbWjmB3jdWvtg5eEnDsdar8goB35rsptC3Scon",
  "key25": "3PcZQM1deKiQCucAVEAhkxydSY9y8y7D6KEAeRMCJFDLXw4AHunEe2uRs922n46vY4hpUwq9gNMitzHKYtAKgxFQ",
  "key26": "49GTi5RvWem3zXJvgRMvtV7aMkHuoPKia1tAMzQr1qEnSGcxrABhtQRLKEtAosAmtTTnSFhVifofAvCFGXH8goNM"
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
