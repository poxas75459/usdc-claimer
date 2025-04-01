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
    "5mZ4voJfpwsDwFkMS8h6oBdxji2MFJZKriUGHuWcNLReW7yoc4v8apt1x3ZMCyKnYy82j2QyXuMxkY9gvd1MV7ZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UEquV8r1LnA1TJJAmHe6M966f7aexSyLTDRXw7SgPgfQEGhDgQYhB7SfXr6mYeRzK8JWy4Mq21mv1dZPDcboev8",
  "key1": "3SWGHz7u9P1BfSM8MPyddjV87s7qThhMoYvk9P4AcTrTv48saKmR4w8Ccc4VzkvQAWQsmVbRekF2mnBJ1ARGjYnU",
  "key2": "RZuweBjmCu6e5NnWmWN6wUugn5BtX4dFYxPoz3NSsLrJP2rDe44PKQJhgSXRzrdaJpxEpRagPwYzqzm63t8jWfE",
  "key3": "4WEDzeAvASV3YjpVuaYphTCnS2ja4pBNBL9vNWfVU2YsbEj2UM89j8fT5awa6snWdmkEsL4M7RYhXBERFAvzBbNR",
  "key4": "678zTweJpoUSURDdRUwRKG37YVKvGyXWbEqXXHfxbW8PejSWveSJzySeU3QFdoDgxzXqhWkiFWwZ4P5X1hwJGaYb",
  "key5": "3UEZiUu7gxySYscdNzk7gf4wzW5azCyoJBEBzFywBuHB8VPxLoADpqP8ATV8xLeGbqfb9GYRBfuKWhX3NWg3U1W9",
  "key6": "5PoWz3NsiaV7c5zhsda1zVenPcM2MAh3mdPmJzeKC3n1iEnn9Sbv3LFvPogj1863MZeyfjPAsxWdhpgKwr6VSTi8",
  "key7": "5gsPE9SnpTM2jSarFL6GjMFS2ynKED5m4YanYMkk29vMVu9Ah2jAqge8ekZHHgbZ2vqMceBGMUiGzAoCkVcK14AX",
  "key8": "3AvuCTr3QnLDn7bECQMkByUuK1iguCX23BC6s6AqxRu7F1k3WyEoB6pUvhxatYrdjHGdiLMrVrWuCcgF7ERkG82E",
  "key9": "4y5s7SFLSkjtCksk91ZXXCn5WHKCKyTEQk9z8tqymm1kye54ni2pXEsaMhZjqbK4yKZPnmritrrVbuckxbrbCyQX",
  "key10": "AoEGXJkWq5zZ2eW2MQ915FXSBuQJnyYcUiKwrjx7XbYjAof7E8fjbbj6FTAYti7igizE5dc8vwNbi2FE7XTdu6j",
  "key11": "3KCN162kLQmezWFwpSaxyHfj9U29J7bsebhWPijdoXAgChLVDGhfAcEacN9j8iHkZ7CtrdkyxTF2fXewpyBPMdHV",
  "key12": "4iE6Dv75puqQpZSyoA8rpnfwY6nEkixeREe6NvkSiNJizG29ysJQpcw1FC9dCyXphQRyyZCMJ5sSqQbgwckiPtSf",
  "key13": "5Wxp6vHBzNfenKRxCb6VwSRL1stT7Kyk6tWPGhAwnArwCqh6GDHKgiCFs75X5p8hXarLmHG9r7q3JamZdD4vVJWN",
  "key14": "3kyraNVWTJHHSCy5wqsD5C4YSZPBNbX5K58h48Xc23tjD2fDFzqTv5uovuhtkoU2xKaFm4u5Huv8rDG4DXgH34rY",
  "key15": "2sKrNsUuefRNU4Kj9LwGVGcMyV8Enf8cMcAx5iLwioEzi8ffjeGgkh8ea8A9BaRSfE5T1k4WbkdphyVnzUdSJefi",
  "key16": "4GV2SpbyY69WCpC78XnpSZP3o5XDrQM3rG3kRGsCsF2mEmzaVRYbyDPRS1ZoNarTcWYCEBGdpMY23N2B2v3SRcPk",
  "key17": "4PJwKb2p2g9JNc2NpPG8bmVNZT8L8dgmz7bwqiL8o3fVoSuLtAJVPgU9Lm8chvPEhgJjAxxLg9S4o4kMm2d1HUUY",
  "key18": "5gcjikkXLYTzxfpGrd25mLDtJ7fvxQ9HxAbV7C9W8dEJbNziBvMMRrxPnuH9tqqXQosBNADKEF29rVka4eLGUxHz",
  "key19": "2dWLBQMjUFzqMwCfBaQAJ1Wyv5wwr1gmL6AGEn6c5CJo2nmSpYPVgyk2BH9KzZ2rD68KGxfjM4nDhn3VYW4Vr1u1",
  "key20": "5ZXpXgqpUR1kHWNaGLWxmhjMnAKjQRmGNBg8cryMmHWkp2xLRDaUML4VXbpHv24p1pyoY5BkQ7AbGS6mzQFS6bSL",
  "key21": "41gTj4csP1jyeZbHzy8aSuVuoPjY8VQEhtU9p87J8rCK8nmMvYGg89fkSQnb6ErT8NYRAiGUwqprv3tTH1NwSgtD",
  "key22": "4zRbJPUFAQ2nKaDdHxRX6HyQL3hNUeXLnbeVB5y86tc3UV5NFhvTuBBcFscHhuoppeqdgvPrXgcRnbzD69rcMpFR",
  "key23": "5o7wRAwNBu1MWadLjibGarvZyGVFkLrpZvUrLQ93umZ8FU7W2oJSCHGdjAzriMPKpcVEnD3k17tpqYxtCJf4f1qT",
  "key24": "5UpGAk6raS69qy9oRkqZBEfACMQ3twXLJNjaXscHqbfxtqXeTyfZXJubLiXmXsqcjUZBtMDdJ3RwfLmLeaEcXbDB",
  "key25": "2V4dc9w7rTi1aoT7t2wRD96n2VqiUSxqtX37ZhSgG2kgqc82E4WuAuchNzUtUrwDjLwPg65T4LJumr5mPdKAhoic",
  "key26": "55ygYm5cJCjpcBwuynagep3pz3xxswxXBfrD5PM1gbUJsx3PvYCq9hBTvm8Pnfxw56XygXW3gHs9XyYN6iF9dQC8"
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
