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
    "54eoMsHnLYE6SycS9uZWFoGfBoRdQqNt3DugcJBjRXrhkkESNFn6XLEarBmoMkrLUDLwQrcHivYY3CQqAdcD85xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEdor4SdNrSrfnb4E6cXMbRUXZTwb6i88PFC9mbgB2AZCdc7G8RNRe14PJdiJSExTQDjtxt6tzf8TRLxHFHGQyW",
  "key1": "2TCJVPdK9VoCaYQXqwJhv5gjt5YH6bKku7ZNx54F9EtJcu9UEXMTjYvUGJiqGRExm449CGFFzwGH2pQBUVjcj5rm",
  "key2": "5Xaai2Nyth9DYdGHwat53tmRALazg9yxnKFjvu3TUauZp9pjkWfG6ZahuKCAXAZziKBcgSCs3faAozwuKE5Ce4kh",
  "key3": "2Hc8yr1AtuKua3cYvLStzxtiHX8jDnTbgzQCo6n725kGu5XRLi1w22pVSXtVstmhP8hAQtQYk6n1DTWFUXjtDJoF",
  "key4": "5EmFXwh7Ntfjb8q66Gr4foikgKg9NfhnfLrfriuFg4WXQLgwFMoiMWkfwEmfv7a8FQY389uUYNTVLH2CkQC8Rfh4",
  "key5": "kisJy2ea8GEQ3ifYjkwTN5NiSqbLaDw4N7oLMVnTvn1yjH7btVkKf9pEKv26ggBtHNjJvH6ZaZeL1aiKAXr2RjR",
  "key6": "5MF2xVRdNuuqA9p5KbmxtNKBawePek53UugF76hv4eaG5PCY4r8m3QFqRYc2wT94hTsTL19iVqXBjJGm1fZbkx7U",
  "key7": "JQ7WdpQQ92rvmSU8R7SSpyaPNqi15KEfdJaB9UVVN57VLZheh6a2nVgsyVyd4HHuAWn1dZoKTQuGikg9Fa2Jo4b",
  "key8": "3C2YTNW6MTD2pW4ZrFNVi44kpgqhR1sAnEaToEYnR8iGMELXq3w9ydpEBRG398GzLh6tcQCWtRvMBEbrEwhsTAuH",
  "key9": "27su7To1mFxar2s1K7uV9uTZjTR1GBLdbdqqqaP9gwThCBoJj6fLnM9uSAzCWboquAkbxoYn3rbu6AjRHoBPixCY",
  "key10": "2iXvNLWiKQtEPXhMdT6E6aUJDMTkfEw8hUW651rGimXjz3c9wFHae3jHhTuuRcDt1VCaWmczxuJfkYA1r37b4vBS",
  "key11": "44EkzfEjSqqGxAkArSEPpMgbMjk7Mm5LCSHGzPUsXsjq8dyzXis9WfGEz6HsEqgVMigLmDszeWpmuH2jHwwwz1PD",
  "key12": "5SJf5kyUffdDkQDuCf1mcdZjStwEfznSqHxc3SfDVbVhCvz3mTBTHXCueomNbPifv3EZ5EMeQkKxKDo8wKzQYrAy",
  "key13": "BBuDXr8H5n1YtKYREUbGVXxapGUvEr9U767e2J5SwhuV1KXyYN3QtVxryK3Jx928gaScBT3RvccSJXpVSA1HvsX",
  "key14": "25wzj46wXVZSfGd4EaPAXh7z8Z6hfmP9e4ZXVJ8ksdwVkwh9LJmeKaBzmU9R4d6bXozU1dw9WNLQiu2DD5V8cA2Y",
  "key15": "4qWs6v3bT7L6BJ2mKNaCS7LjL3ynEpzU3HsQbg1KmkFBGrqPKGeLvzhojPtSAj3TmngKyejphtg3z5ML3edUTswy",
  "key16": "3FWmcNiwDh36mH3DADsvhFdBTpvQeahThDcy1fn6owLcYfJEmLWaJwo7HkZ7LwCiCDhgfRBqnGkqdyT84kQCwM16",
  "key17": "2UJJ1RKsnJnrKrmosa83FJr6iMQXc4YvH6Gwngvicp1buGSzbs57Uf2YVeudfvCdxePwATp7ioZsG8sVieeTeFY7",
  "key18": "44VwyKwGU5Ldv79MBCkqVo31U1rMoEVLuy6WKHEaUvHgD1qRT1SdQSgaTqFBkBDrAJMZuCG35GXWU4bcJvcRdEcy",
  "key19": "3XasN8JzWBSBjJ1AxYg2u44j6BNHmsbSXk3XxPRgCTJji5VZcJn7un1SAWSoPt8w2shQubzpPSphb4BZR61DfcHg",
  "key20": "4PyG8jTF9G5XrNvC8MDULowXe13GqDPm2V67TfY66KA9JAsicGUoyWkQKxjBtJ1eWvCqUq4oFNFobQcNgdguU5DK",
  "key21": "3cu82G4BDZG1zrPMmzPfaSR8N5vTo4KSU8wf2V3N5ZW6UjyQhNFb5wg2c9LpgmWzjAmk7dtLW131sSnT3GrRcgAk",
  "key22": "4dBGXCaeetFt5HpUYjR5v3BB31uq9FxDY7ACShHvqxcgQdhL2kG2kgNkLZMDr7Kr9DhSNkhdHHUWNVYp3HjmZ7KC",
  "key23": "2rH6pmhsjrKvVT9dtW5Uub5BRwivoDHjhR61AG9A4YfSAeowCH36Q6yutkKTJePy52SRtu39q4BhupyX938u7juj",
  "key24": "YqbTTAaeYTdRre5rYpUjdEeS9aoFcF825tzDnHCMVAfLSjKwFHzH44SSehst9GvecRJz2jKRyi8hVw2LX9iFXq8",
  "key25": "5cBA2cCXPhAo7RYeHXTjTLKrndyZ3W3uvq4fCpi1DimPGjWtUcPW8ac2q4JEXQaD2NpUMAAPqHYBEYoLWKHw9Bmt",
  "key26": "5YqzyS86BEQr7McYC3R2kETMnyEQRcabDE2zhH5vxG9cMQWqvPbw8qqeJZYrTCSWup2koNeEDumL88gP5V2QN3iD",
  "key27": "457egFfDun9mUphuzkfYanV8Ro9huadfQpiqpP9yuYkczkQWsCL9CW14gU3DWRjNEDjssKaQiEJdVs99mEygwkb",
  "key28": "7nBgedB4zd45JMRRgt8HgkVqkb7qfDsHo7eC7SGyu4GgEUJKizDq6xPuGKuQ9scGVwQn1VQhF3T8kJ1MhhNPZMA",
  "key29": "2cbJ4k68Khbc8uzenKxCSdEPeAK2u9iGEQYJzYykhVzeLxG7giz9ufgwzLWmK1wxbmxPG9FJg5isWx5Kf1yVRD79",
  "key30": "2UkNWn6CADNFPPiy4vWabnFaAWYGMYDM1Qcu72uuEQn7NcaGWaGggyDRRs981mABiqQk77BbEkDsCuk6c6ySBbfR",
  "key31": "3VAyeMefvGVkKhvQD6AudbDbWSqZaRQ6VuMeDmY2ZEueeWx626yAjkJdc97Wx7sAmjs5GYgskV4FvTEN5kyyY7qy",
  "key32": "5UGNnrp3ow1r9Er44b9cyKHCfeCiU2p5372ktw5ckezFfwKgDgr8hSLLhiWUjnfTnY53uZ3p6mPpeMy8rEoBvRQ5",
  "key33": "3S9p3htybZgNhaWth8g5G2ZxC4FDAXwgKY6S1wAdPEz2DVfmwEHuhQkEnhhn1k1qWoR79peU7u7WDUnS9qb9wy6x"
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
