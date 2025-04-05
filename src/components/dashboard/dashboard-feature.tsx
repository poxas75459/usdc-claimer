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
    "Skngds4CbUAipE9iFCbcxW6vdAoT7TB5CKdoSa2VUJ9iuL2r1tdXvAsHBDA2CzKiMQQjCF6bQuax6sSdZ7MMpfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cnydtNYPZ5EtxCSAhgyoZVkZnRZMiceUHryNdVogaPsPrUcEoD9gGLSfA4ok59haRDEF7aKtwexParcoJgXRN8b",
  "key1": "2KNpzX7KdKejcAZFuVDiAixBYAXXXcj4AvK6tnKEWEctsdpKdAT3CybkQNNeLi4MAGutFNrKfsazYa4o7vV8at5L",
  "key2": "3d5fvadUMi3obHEwPGu5yhNs2EnzeBknyBRipq86RdVr42WxE2aAYYKWkNoJ5aW4NNVvo8QtNuwfRagpPnV4kSSM",
  "key3": "3r6X4TdvnD3SKDh4Q11TFdFLyVHTmQ42i8UULw2Z5gZ1jC2JjhucXB9TLMRypnACMXmZLDXMEWCZnR8AqPb8qRQT",
  "key4": "4JwbYLPKKJX4svRM3eZGgewrhER1Qf5koVAmFtZYPyEGkXW6m1zeBQH7NzzUX6eYtwYSwN2DkSXdKbMX4RtrDB36",
  "key5": "2YsYYLPpaNmiRLg6nfUSJj5KiNtsz9ZNpn3AS4zZSt6zMHRZNjivXy3Tj61PcpSoy8Yx79j2cyb7hbRT6WNySLpb",
  "key6": "3MYa2VoTMt3z7B8eMro23QNBuiHurvJDobwjqjgSTWL3ny8oyCzDwJgcP4Ho1YtRu8PJhZDT2Z3ekTex333Lotm7",
  "key7": "4bRNmoUnki7HAgUD7CWN4DWBF8ey6TjhjvDkJaUsf8VsnmxMbHec1vZXPC9cyQ1UDDSFfW4LGxvh1eHh74EN5Vs9",
  "key8": "3N2y7Vt4evjhbHYwNsA4dcKTiRbgsGt85csJ5rUWt3V47F9Q3Px9hzzyahYgAGf4wPhHpiyR8VfRuJMzarhz1mpY",
  "key9": "mesiS1HzGnDTFGGN6MaGjtW9XCNSbaDm8VB615ZMEmLTHoSVc8t7aCkwo1toMSk4dSCESRVF8UwcmbxdxbaCKFV",
  "key10": "4dUP19VPfZXrft763fXEF5pwvvpaeC6U7jygF6KEN7MKwb7SyupC3stM42mdBTJQpF4ir9aXZqb6AfH6mKcAAxaq",
  "key11": "3c66KWt7LVsdVh1BRUneMYkxcQyYh1ZjsCGwnegbWY2adTniUMYW4nnS44C8PS5zd4cCMmDc2rbNGNkEVcCPTx2S",
  "key12": "3if9xSL4MLhyLpMRHdBUgrvNbr7CNBF1E57s9g3Kww18ZWpqaSkqjaJjiX1EzHHHXB5B5nub3P9LZYffAdYVinJc",
  "key13": "SFfeRKFsBJTTaKL3xnMJS1AS9EVjwSEScszeQNcRgf8AeD26jHCu5vbHiJEBR41vgug7eFRH2QQMbMDF1z9dmz5",
  "key14": "5BBRze7MA229dC6A3hHzUNjwgaQk3rcpLVjgZs35VhABQFDAaSGgpnJQvRmLAfQtFtrrhQhQgyC6NkpYRqKiSxv3",
  "key15": "56pBHjhAxBCgJWJrJqcALWy9wXDUVUj7vHgRf7coFV89Dfch3NJbrjokoxPr3DF5rtQL4yr8mwHTJnZ1AhfCsqxg",
  "key16": "531HXfWboDYzTarap9aPsQMzDUJfLvVm6ANC14fEGZzjsWZYADd3bXfFCH8x36ws3kah55WnZwn5cbNvAxFbbZcf",
  "key17": "33bXbmoBSAdU1PdMq4K4btaEXKhyNyKfq1Jp8RgMtmG36NttRtAQtLEZChjZCDSQSuP7ckGZVtPNkNNxwotboRQC",
  "key18": "WUaTgx5aG66k7CiYekYLfhpjPPNGQH1QvBQbhoaCj1JWk1rqnMnAmxhjtQxGtFyvR8qSN51Kqjvd8XnjhEbFSeT",
  "key19": "2dCGga65tMqF8mfj2FdvUKQo3JeBbvDWvSi5jVSC1F15PF9WJUhadqFVFbv89U49G9FoAc38in8JW22HMaGRQdoo",
  "key20": "4A6dfUr1wAweiwSbwFXx63LaSfuDc6Y92irCyBB2sM4DXg1EQVeWt95YMaDqS5ZnDjgFzsaQ2yc6rWWyTHR4hwou",
  "key21": "42SiRJz8N7KaL39WTguhTgYeLoipmRzeSAPPRvwSuPYbTTn7ZjGjedw7hwKsSMNHaBMp8PbVcnVAhUhLnm6U4irS",
  "key22": "afAc3QTPQ4C9Q9mxTGE5XWhAWX3ADMB9Q1pxx4DSD2bULMzJfGjJ5HM15XntxTJQemx13GsB2juctGRHnoD1Geu",
  "key23": "7TkJWgUrTzjo85nTG9EqsdVHJKPomD7HxEaQshcYsYbjJBL4mtAXpQFdn8fpyyc7LE6xcyNysGwvwKpabtQarKY",
  "key24": "3RbUZ6isKRCZdTiu68iFYCFTuZdZ5mf4en6hABJDACsqCQDX5GNdPumbGy6V5hLb9gtn2gWzLWU8Lon6ekSVg81Q",
  "key25": "4wVuQ1xvVA1PHRf1hUSLtK8bkGCyP8tCebXMgWayY2Sryx3WKAUzfNGTuUMMXLbNh2sVvJLHMXQ3PbUqtsitd9fm",
  "key26": "3KcrHVgkVDw832DEhFn3jA1QN1BKB6hUBMUG75sijXREc742ajrQsKCSEaCmkjQi4jt54t3u6uJVavnnGqm6DWy4",
  "key27": "AoDddQHetjw6bUbKXqkZ3rEj3xWirdFLnZJsqrMaVjaWk23mnPJCUzRNef2LpQ5XVJ9rHN4qY8ip3nnyampHAhv",
  "key28": "4DpC3UUdHes3JWkVeWfBbuUBCNonaiBr9AaHtJk2GnJe2BhRpKCiZXfm5yU2bfB2JJaScEB6VR3vpExrKy5xCSnp",
  "key29": "3z7KUP4j5hYbPCDu63fDh23tiMvKRfvJNavRRf7UyVHsvFS4T8Kx3DGG1VGybaF2H1Mbu2FGPpwwdvn3FV6idCcY",
  "key30": "3cYkQcJ3Fk5oQuyNkuyxuYu8d2WYkX7untBfaHfbzWg9X57SaWxKjeAghZr6dvHX23edWp8pwd2UpXNdpbnkRpE1",
  "key31": "2aYmoZa1oXN2iyiWy8ymiKGVPknvhCFNBqbGUw5acM76S8bKHMXEAyhwrpeT1pb5PQdJAcvKcr8MSFvamYKzqR3N",
  "key32": "4gh97yBQ4A9EKR5RyndE8ymKJgRECSTnZHh4vzM4wHk7Dn6m1vKYdMtARqrdgrrQyncCM7EC8gQZEAKggVTdq8rj"
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
