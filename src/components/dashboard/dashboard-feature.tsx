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
    "2njcXUFvyCCU9iYnwDVkkRFad6Z6PUnjY9J29QKM5aPZvSem1CteHEzK8XvYhMjPMYJ77BQGnJTMLQXUs3eCib16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cqR3rLgNjvzx8hd7SGzVfw4VNEXH9vMSyixHoV2SnPnhiAE5ax31HZzqoHTVshXyzha6Q2Aa555Z8bRPfeF9fLR",
  "key1": "2S36bQBXHAesQFZZvvs6gFNu45rUM9Qp2hyhFL3shiBMHShPgaWBhjmTgPcGR8TeuiRicNY5jJCJxpVUX6bwcAwT",
  "key2": "2dLtrPEsDPnxMYCH1R2C6o3P1RRnTnHNNkaVczUN7DcFgkqr2irx9xmVjVkVpfhv7yYGTSkA3jrTznd8Prh4cB25",
  "key3": "GDDp6SsAJUWChuPzwXyohuedWRCCcQrSrKKBCeUkTz9X8Ja3t81TVeMrNmWFESUazu8vZosd9rAH8idqoa5DdHR",
  "key4": "DkAk2EmV3j8djeWkuzCHEacT1zbwX3XPTnN4rh4igew3Z9kc1jGtMd8oxM8Bap2BsB8FhagVGsTcg9ctNbN2jf3",
  "key5": "hVRFC3gqUQsBGWcbBNkHpGCwkmsctQMbJYG1T2o2HaBrNRUHcBUrsjvVHdShDpEh8oqRT5QY4VsX2wEicSLesvH",
  "key6": "4HMX7vUEMfWK1na2UtvP1ZeDiw37cqiMsE1PTAHhZo1mbPrzjLy3N6F57RoVZaax11L9St1yt669RahCpbKVJpef",
  "key7": "47hYqbtQNNMvHMpQDfJGzC9wuXVqyhfmzfBfdyfgdF5pgGCqzSyzmWzoqExyH9L6RWYBxo2M6JsTX1bEMGybTZ66",
  "key8": "61gUw5nbuSRQf3bWG7HWaRmzTV2xctYs7HbVhXuBqT6zexS2mdnpRuK7bit7HpNgwwsNfYwsayKduEpjVUABNTz6",
  "key9": "2Hh3VDyENPL4faBCQtWhSb6XPK9Xsr1ZtFgtebW5fdCY2TMqHfxo3SZhA2Fg18rM8CbASk1fuHs5fFUJPw6UAL7F",
  "key10": "BE3mQVAo15mbSmJzVNrXXcx86AKQ4VjbnyZMT1BgQ7vg6Bu7wXzY7XeVrnXvGkTV3ExBrgHr2QHN4GPJ1aVLxDq",
  "key11": "37zWuAVawFZAYsiETcLqvaZ3GQcXofcLuHrUwT6THbmFsN7ZmKunscPYm4PHhLzY8BFXtYiDLHiCrob2aKbvs2Ew",
  "key12": "25anbhkBYK1Ktv3pkB4jZBTUjLpUiRrNfFhJwqNeaTJL2jpisjSrB8PbdVGbAgbEg8iYyGDTonpWbYuE4u3aPVmH",
  "key13": "3sN6tfqauLUTWTCzFKr7CgJpkARBSqVyXMUrNAeTEArgvo8PYFuK59nhYVozo4shHGVMTjZ9RDJr9Enq3YufkDYb",
  "key14": "59RsWMkG9Qn7cauzR2gTGFJSsXXkeadbKJMvf2YUdgv3XPY6BGkGKTxnT3W84pfvTFHbXd6KPfem5sC8mdaVyjW2",
  "key15": "3why38STwg5pBEL3MSjsCfHEZnRcJisD1WeotJE4CnibhVazMAg3M1R773vCENJ5MTVc5WzUE68L1BNpSJMJ9nvk",
  "key16": "jqobZaKdeVK8w3vvhbKbsxw5jkSem42wsvLj52D93PSR9kduFnLcPgAZ8abkm5gefevzU4KRvL46pwYHsM7h6UK",
  "key17": "4UYM7iNAygp2LC3njPZjNCdgPoqV3qpYUoW82JA6HbwgxrnG523YX63k1RTU5HpHHbNaPLzRXySNTbA2NRrJe954",
  "key18": "5HTtAwhaiPz96VGCzn6hUMA6mkdeXEmmr64crZoKvJ1N8xC6cFuH95cb5P2bBKyNDYxAxuQLDNaqQDRkcgUXmjqv",
  "key19": "3jCEcfwURQhCtSMST6vnjX74VYQgWwe3nqT1nMeSgYXr62CSQLK4UKPbnNGHhBynbBN3G6BB6Lv894aSHE1yM89Q",
  "key20": "5xNXvSPvbvXmuZ3f4WzauUzndAJkypaZJeGjSv7wgDPkmfGymenhPTSrTbSUNdTiA5uLvH8WZakkiwQ32jvEhyj3",
  "key21": "4eQpjBXWgLLYsZWSvUpJ9oggtVSEDhxbfwsYXhQdnxjbGPP5XeFQSKXUHfLSHebkP421n2ogcTx7GdVmEersv4B6",
  "key22": "5gAPG6AqgLQomTUWFTbbyg9W5eEaYQSeFaJ2C6LrxGo2way5C75SoMss1jVScZvLk71LQyuNGWBqswjj9JcxypF9",
  "key23": "3dPHBKyJsPz9SxAneZmqtync8opC3kCHQ5Yw8GakvUDixPoGNoqFniozp3HbrnZh9smyMxwKUZdiUppjjvgQjzSN",
  "key24": "2a8971MyZxU6MsDTHiyrsVhdn4h8RATWbyfVPsH33tLdWnxXgY5vL72LQY9xpE23cwyqABPYmHKHrUJ4HN6fzHsN",
  "key25": "3MqpDENNabn1QRLReecsUaNDk818ZccjKD8U4RyhNkatZk3CSndwwxicGPwiaTHLvSssf5Lsq14JS36sGmMLKUAY",
  "key26": "2NrKwsnodbV7SGYcReAvwi3diYNdZuTKkwvA8hvHfPSkv7AcbRPHuQUECm7CyxhrxK1Vyrf82FD9Fsr787q5TPQi",
  "key27": "2FV7M2DdQnASni9jDEksa7uN8Wf6SdivAL2ndWxYaSu8eVXP2tS4zgKQ3m1ZvGXFLJCt4AcQu6xPBGKHNamsZTAH",
  "key28": "5426kU5Hd4ZSgXDMc8agLYqbY7MaZBnjr7nCGMJVzeSvps17Z5dFUDW1y3uYUMopi9kATSEsyTKunyA5Bonues3i",
  "key29": "SkK5MbRPAyxeLgLFcLFEE7SUyRv8d6DV7MCPGGcZJ6TNfSevnDNzyzLe58pgg3g1vutDNvWA2tofbjaKDFoVaWq",
  "key30": "2iSsNKvK78ucwbUSd8X4jTCiFAt5UTzQZY4SCLPWmcQt2uZzxskP9X1mB5X7X2Yiizkz4ndzWEHZxRmdndFZSYog",
  "key31": "5iPGqfwnz79Daj9gxy1qAZPP75eVDxYejT3yLH9Khn4iSXSgyoSTbGU2cF6byay47vYRfoUwYqzbjZDqhQARW8cn",
  "key32": "q4V2RmErKY1nfVCdo68frhZU47BBcQx9NUD3WUNtBXLyJLf2moqBzY3vkbeLfuEeGzBmrTud5gknevBhBjGZbb8",
  "key33": "2JLKqQGGjzesVQfhkZAcjk8Mo6HyxosBontScua9jALiRFa1zXHcQD8yNjb4tW7wk8GwDcXtuKk6CBtyhQhmS1rW"
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
