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
    "36SAJNhAq9Cu2XtNTWKP6Y7x7DedKvyLse55b5qL5rJ9XjoyC9rVZSgC55swJ4oBZ5Fd9aqnJLPYULX63V74LyK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fnj4ZdPiEDLJxF7nCrjPwvmtcu5VQMMv9ssAmnJ1qJEDGBCqyr9WxRHz3Q5Tt2emJhYfZKhSZi3XvVxosPHyHkJ",
  "key1": "3WGZDhsVDrLEC5gbe8QwSiRvK4gF27SU9XBhzXeamonfZaJHAerbpyCvrVGohP6AdykVUgqTyY4sPB6KaRt7ij49",
  "key2": "ZDEyG6MxAi7TEki2R4yhHoux2vBNBwQTGEoCPsfyqdZsXHvaCxLvw1kjyhLJriiKXnFxSELre18nBUmob8M14bn",
  "key3": "3Q6sYg9icEyMThjwuycQL4ZqrgKQzyVhxxw1t8VtmBX8mXucYVfN4tHCjfo1bsPW5kpKvyXidy5zKDn56Qc8LYyR",
  "key4": "gyHFFuexnwY9ECdT4RCBk8JcSK7FSh1KeP68aSYcYnBDzo6YCDfgHrNsEu6HNKEV37GUELUCHgAmLnHEWvC3EBS",
  "key5": "4WFN7quzApHSpsdkWEVArGJjme83s4R2Vckz9c6QcHxCpbrQqMiKFVFYjjxUUVQmnsQLWHTFuuyoH3HtUbXooK48",
  "key6": "29fxWpWMM3PTE9h9J3F9MU9mn5vdChst7mAj44r5EGuFhpdXzeYzpn1JLZToPVstGcweAMVx4qiG3Ur3X7D6yJ4E",
  "key7": "35JuU2qGjjeRwNs4k99EtG63bLSBuCMtyZQLvNdkS6v7XLR3WPtbb9whoqrJZyaqu2AT19WW311urdJGHcbun66G",
  "key8": "31UjRnEPrzZSquN8JofPHgN5MUkaHJVfkPV2U4i8DnbHofLj9PmZUyQpUQ8V4kcYEkmn7rdY2aNqc7tm9UhEgV74",
  "key9": "3g1guzwgEr4PBtEHDv9zikNmURvRB78S16wYPiXACcufGPX8hAKEXWZm2iuUrGjKvSHQZdiqfNP7565J3SZNscwn",
  "key10": "2yeGXr39arVg6rRd68e3ErhWAjCy8jnHJQQXQRJHpocSZkwST8HLcFU4cbRnazPK9PbWy7oJMnjphtTmmw7Tfeag",
  "key11": "2o39nDzufsEUgTX5967hsjVwuvE28cJ6q95u2AoJB2n1LRkDfX73H3ZZsSHJQdWhFHZLixjScL4Ex6ceA4NdCjKj",
  "key12": "2VWCoQy2vSfgcdvwXUsS3GzzsPDYtkymqXCfg4k8mNQ5fjEXduLb1c7CoeCiRAdHUcZj1ctP1pDAiVxryN1intsH",
  "key13": "4wqBUkTkjSsJAQxmZKpYfuKBw5FvYMQUX8Wbk1nKDe2r7ogMUjt62Ea5a1uCTgj5XYSeDzDMr9SUbXAbLzM2gM5z",
  "key14": "WHJxzc96Pnq7vJFHWQDwtBtmCmPn5E9H1WFChmgNSoQhXnqvNHmHafRMBNhMGjiPC63vTePX1xec42DYZjCVZWm",
  "key15": "28ZFPEMvsSK9u9S8TwjxRaUSCmLvDcqtV3MF22Jr743j2SP6asrsshLAtYq1VGFcTqzEvbKBRcmECjTP4B7Ea3hs",
  "key16": "215mY682iD5TL5mKBfuvrHGsi6qcutCzPNQrdhaaA5QYk29dz42AXa14iHc4a67Awk4BTq5naR4H6T8gzuoKc4r2",
  "key17": "ARvXxRsfLMkmWxsszwA5YQU8QmszTYdPhdVdRE6567zYJ4j2B6TE4d3DHgY5g1uprfujHKS5YH54iwwjb3isp6N",
  "key18": "y5xVUr5PGF7xBGRDvbDwBn5E6HxCJ9FANxR5CUZMBcQpkxGnbtPfTuNgATTnrqXZB6VBahTKSwAqexCkkZnckEs",
  "key19": "3ysuWiYFo2FP6pEVQ19sAmgna87UCLhzMk7YLiqZjn5aDshivLnski82Vkee8TFKgwL9bZa1WhF2NMtUi8BLnuw8",
  "key20": "3N5qM2fZ8pUbJPmku8DsPfbHeZbqz56xeCLtRLaYKjMbKegbCSCZWXNULJMq4h9QhCm1P5MrvhS7AmuV7tFLyqPU",
  "key21": "sYAEVNXyWTdmuk49WySsoV1cj1cVUkoPR2xKCeyrV8Nb82vjpbmLTrLo8B1WCyh3aJsHjNsdL8gE4zREqtetXwy",
  "key22": "Yzm28idqwje79ZRUxoJvU3i2WMsEBbn524aRQDB1jQLhoY5SBn4fTPBzXaibDQWMt34Eh7ecSxdAnw4aHDm6HeU",
  "key23": "4dZbDBeTfpJnVMW4wE35sgkmPrCWXH7mc4ncz75mruxt232d6H4fE4v9Ew19u4um81sDjM5pMGb5Rk8D3DUy4zPE",
  "key24": "2AR3jSRqCGSDSGjjBp3QZBGd2xF6F97km5yjiUFzTPeZ1iGyBn949hdicfFfGkHufi2gkJ2BeNe6y6VHSU3xtaP7",
  "key25": "24xc3vBuyKB6hBj5cpzrrVEkFLSog9S3DvCdm1Safofo1xyAzTPpWgaKjgykcVzSmdhfRsUbnhEfzLNn8WWJGRFa",
  "key26": "4hYxEuJCCTLB1yfcsm4BBmPWii6nggJv6DTfZXfHjKKeN6WjDQZfgJSyoRwbxpQnxJXLMfJj7E5ic7CpXZ2u8tjr",
  "key27": "3fyNF76939evSRhQBzhomwbiYLB3BhZWfiw3cQDQ76EAX7NL9NyJw5vUfuHf4mdLWeE1C7MVNem93k1Q1LLTE5QD",
  "key28": "38KsS7oE6dPVJj9TimVTph57YJHJEAt8H7i9e6ytvmDa63wqJJA6XmaMNhY7B2aS7PPnGPJRQAQShqAfgSDVxpFg",
  "key29": "5UcLnBEp4xV8XgvdgivaP4bc8g4HHeSdjGspLX9kDqMnftotTRoS7aPY2hfhCVB3XqrHJEGBWwVWK3hdosDEpJHY",
  "key30": "3jfAu8fUJyfwrHz9BdYhbjaQf3qN1zhM7nGRTTHX1dr5CDauJMsrv8eMXRJ9kFkUwjLAd1ozCrpmznshUtB73Ms9",
  "key31": "1d6WfdmVpUW9LobTsApwsmFD3G2WNGYNJkAJGYh4jBFXspNs2jKgGGtq4v6bmbwzZrtFaPW5odcPDKPt5vHsFpd",
  "key32": "2gQ9P6f5Fd9N7QE2RQaNYTv3SZEk3rhcMmfzMLmjatur4qAcPkf7Jmq7StUxE23qGnrkV1yK7ahmeNB6Xgp6PhX8",
  "key33": "2q8aq2TNG557qNQKL8kaLSXGvaZcon1bEBCHHTN1chX18Mm1REmbmLxnAAAM1bzeLzTBi5eFgR2gP8JnsicDMxJk"
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
