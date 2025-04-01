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
    "bY1vm67Rcd8h5Jn1CLkP5gxAKkFkESKms5R3P2e24MekWUg8UwjW1jRwJ5D3m2pV8i3JxWjqE4Y9HPsBgBeQ78G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xikQYCMAtsFEdmQxEz72qDWkbPt3kc6kN7D8g9zH6MdkyCNBWzEWEqWPCU5aSt6QgNuNBvYn1xu1CJmCXtTLqYY",
  "key1": "3bGqLb8QV7tq3QZSKSV3ZMfhMDTDDLM9PhraNuwemnYvS2SphfCRh2C11ehsDFU2MRvXgP9wpPaCYamrhZpCyGxo",
  "key2": "q4dS8ZqLXikC3ydXy41vdFakBpHciEHnmPF59fu7LV9YhkcXcY9c7szajD4G9nqsP5UMVA8ZTFFh6cD4JWN8xjH",
  "key3": "2Hr4w4bhY7KYEnpqt44i1ZHdw4NyWA5vtdtMSE4knB7qZvzTi9b5mWtN9nrMSyTEdvBUaiECwL85SR22qHW1M7aZ",
  "key4": "3GjWKn9L5SuCrKySNNdCZczoSizcFKBRsnBMGirh1DZGXCrhnEW1QqzabvBzarLTJ7KtR7nVuUvswZ1fLC8eBL1F",
  "key5": "3ufqMiqyfxEREb6gT8GgwjLBQi6Bte65VELzSKzRVp39VLqnhBpGLpv148eUPWYovWWS3aBrCaSTeu6eNTjod6DT",
  "key6": "4j932oNFyubp5WwCEgfDSbWTfUtsHBbts5ARhUkgk5k7pGbh2Lk9vEuwmv9fJu723myJJzZM1fH2fLN6ucngDJnU",
  "key7": "aqRH8SqVGHgVDpo2hv5Segu8V6Bzm8TNySiZftjSQVGNKhKmSuP8wLYEdADLVnSYoV8YVZSjiiBNte8W4ZprZZR",
  "key8": "5g3UtwUTR81nngKsvfp8qkFsYQniZLGWqzt4vdFMYjGNBmctNatV1JbDgRGGBAfAPX9KmFMSx4oZz6YbeyXYiEgV",
  "key9": "5CX8k3DSpNDYBaLv1DXLM7r3taSxCZyGSHWPT3k8jncZZuAyzDYsHNSmwmWFLtFWTtP6uq1iDVvp9xq7PfM65S1x",
  "key10": "2CFDJ8CmDKLRpDoR6SM8R7akHdFAjmLRU9Jt6Q8ANQqYBvEgY2iadwm6grrTDQdp8AhNG1CK9DJkWrsoh6ujYpyJ",
  "key11": "3a2U2m61XyzZtBqTYtpVG9jUyyRMLRbAFYpWNKA4ymoKEkzfDainRk2Hz8idk5p2dyJodJ25TDicnizaCBpLW2Bm",
  "key12": "5dzw2iY7e7uUU1mR9NNFpfnJoaZRUopFVHqyvvR36iXsukxrHbxuJaXmynGy7Ld9uAmcwasmhDnhpHjwpNWkX17L",
  "key13": "619RgbtUFmUDJdbMpz5pXfQY3emrjHMWcMUQGpUY9Ev93ExbMgzPedjPhaXcrRd6S5KQ8JTCbrMVtS4n431mqNyh",
  "key14": "4P1kKaB6686Bjdm3H7j9pPvdgdHdhJuHFFYoJS4YbXJ4Dat3oisFj5euR5X9hUex9AZFhHHRdEyZNqLJgr5REdmU",
  "key15": "a78zS1oKmSZsCMn7Qu5oycA2botVLuQdjfcfaCeQZ3uameP555hgBpwLsJCAmQXam1boLsnpRGthnmRXLv5ym7U",
  "key16": "59HoxMCeU775stqq5SXAWG8kSDg9jHLZzS94aQrrtQdczuXTkDZtQjvzj4tcosNHfuEvbEnfs8poXixXFz4A3ED9",
  "key17": "5N1ESWWFYTpVVzST2TUSd2WJvgAQA8d4z8BkayNWik5qPGaTjHxPS3Fn28QLpXWPQyjJ7M3HbGMvBjmyarQQFwDc",
  "key18": "yiLyyS6R2giEi5A1Vhx8sncuGXdqxfRYvSmWrYQ1Pn21A55BcfTtrVb1spJYXgAckxkYGRouGQ5gwNRRnK9xMo6",
  "key19": "3wiZ672jWLoSmoatYMA8zieabCtE9eQvkPYeMfyXhR9FQFcVXbUr5D44R9JMKAsai3DvRTECJnSH1mv2jtzJ4qC5",
  "key20": "3i6uJz3NBnXLoVJHipr31irW6DCSbKRGgvDs9ai1VBZnVxYoAqfw3yNLfWc4Sz9s87wrjdX3WzPDihJoBs3b8g7b",
  "key21": "48kBVZFtAhd75MXjdzRyBMsBvQXBNkoSGajkwCx3gVUmtrQih31G7dKeKE6LJfUcNB9mtcxCSXGBfZcNaPs99kDx",
  "key22": "22Mhnc4iDaAz3rQEHfaxSPhz75cYtEQEi17VPEii9VMGszUauzvK9fGYuzA49MG6uKy5QFPJ4h8HJMtToPcHHLKz",
  "key23": "5Ryodpvo5ES5hDRiYpLxMHdrbQrgMCFNQ4mDoxgSa9hX272D4rMU55Pjyk1pag87hQbAFTkZeavksSA918gy1Scu",
  "key24": "2MkmGWWoKbP74HvuFyuhCehq1zkgMNwKs4e1JbDyGV7176Mi397bBzdYMHi9SbCxMwQv6USxda3ipCSxgdDBJeR5",
  "key25": "22f3b29ZBfikju3uVQik62ZxskcuWm7fQnnU2T4FHRNMo559UmDfALXNRcwNrvfdGcxKFdk5hHRWp8q1q52q96b8",
  "key26": "76va7EZ2mC5KxND3cwAQR5XuD1AZYv3T7BymztWiDJckHbC1ZLtbK4FXaBScBY15rfY1wnhrkWpDAGBeq3U8BpA",
  "key27": "2hEgpwkqJ6PkjbLdFs22T1VkjefPeHDuLm85casrCKr7sb7imkV3ZMCUeDYH2rVAirEs4BXAuzRqKbRNrWFuXAng",
  "key28": "2btsyjauzKz7p9S57iHtzFadpisF8pDcrpQp3toAc2XatTLpJfr8VK84bf2E9WoJLuq3xLJYMCig6kD5JKHHXctG",
  "key29": "4hDULhazdjVEJS6GdY6ErXoMLRWZGyfb8ELNhRqanhepmAivRKR16TAfii7kLGtRvPz4fjqoahrtx3J3n6tpp9oq",
  "key30": "5dWLCXDEG8XicQyhR4pvnKMcbNs4iZvM6nhf9kbsU2KWmypYTDEyxEtFou1LtZPHDCsBfYKNQ3dnvLyYLWB2DpFy",
  "key31": "5iyNU8ZsZ4qiuut2fPqBuqS6uJkbJj9EdCHJgPTWp2obTzdQfs5LAcFeKHFBhGNYUAUeZLwQnLvhnQto6URHoibW",
  "key32": "4Yq2ZLAV6wJ2rW5E5UycWBDKQy77uEj1hYMmJuxK94YEsJ7oZDvEfi2kMvJjN95jbFKfxJMi5LKMaTuqC7vmVJdi"
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
