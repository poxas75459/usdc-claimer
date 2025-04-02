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
    "51A78Wapgtrq9xG8AZNr3LaCf13DW6jGdKCoQGsvbmCYABAVhMkZzahptiKLPCeKUypWKcfaUuafSYC8U8ZfJUYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4iT6t5SNGYnPykpWMkVhkFe3Dcw6pVfqp4bwrXXECmLDBKr5s799z96ZNx7Sk4QfuuLJ77TYpNgGxrsonSxjDa",
  "key1": "39pW6n7et3weQvPHgNnfwh96NADyUDMdWeH4TC3hMGJihj31jouZspTmwGDXE4tYyhWwuNPzHeqKCJLDNv99xcDb",
  "key2": "5ZDK7K3RAX7caJpekTbT34fW2fdUBxTvuWYfcjieRyDtck1yMouE9B8XZMxuwm9rzaSKmEgpmDiKUN4SVmEzQuM5",
  "key3": "9g1QVhdnrgkJvhJDBRPzbd6U77jNqfGAs8wj2M3t1UCV1PBtZbFL8PZKTmmsLa9AHKzVwTBL8UdxjNaZCbTH95y",
  "key4": "3RKSZ7syfw96qUVsEtqEWBr6SrEW6yj1j1ErxniSDHGJMUMNSCX95UN3aKBZ4Wi7wEgj4UENCsiU84m3Qxj6BEW7",
  "key5": "4cgm5JA4BEaPL2xMM2JafATRxrtCMDxNoAKMZK2xQe3ttbWEdvToF3GWMF8TNBnEp6nZZ7rJye5XhpGN656qUXF1",
  "key6": "4EQb8mm7YYCDudeARfqAzddQkds9kdvotptZ8TqLwXPbK7eGey6Fj4N2EyBRkb5umqA1gnbLqKTzc1j1HZk1W48H",
  "key7": "3rBPhBv78qVGdgyBDDCm87rg8wgN7Sg2G72nVYmijeF3KTyA34JHSgcG2x2Xb6zCspow9eVL2JXLTbpGN6Z6nXdd",
  "key8": "3V7GCe348WZqE8AEoUxvCGEx4YfZ4hHakunVfCMLCiBBgFcgFarngxspaGoE4g6NW9rAo3RVSq4iZgxoyY1gVUQt",
  "key9": "rHipKDQqF5yXaAjcBGHDJXsahETU6QMjmhZWhSk38kPotDiodCpeNYjxrsHe7pBtagyTzTTKpsroPyXutrMLedW",
  "key10": "5WiGf2wsSVM4x3b2qDpqb8Cum128YaUMgw9xLbQ5oPo9J6mHRajgWKvnRzBtzY1xQ9PDXQtXn56y5YMRuiNJ2t7T",
  "key11": "vB8DffZQfu3RnQw6Ga9m3U8SLeTmXyw4YQssUK4iBPTAh2GrzRZU7bgY5f4VjFXr7spMmkZThJ2pFMqcEq7pexJ",
  "key12": "5t69V6ij7MhZSC5vsipYKAnHJGCHr1T48pXqTTfayW1PRJBdbUTjXBHjhKikRtBBJ4xRGKb3ukqf3hDY9xaTruZm",
  "key13": "2tVuq5x8f2Bcpj1ZnDqzeVktJXSH4GaDwfizdBVqrCrZGtBQczh5CxSHXRfyRzw4jvo2CpnCQ48JHGtSXpKVJKb6",
  "key14": "5cCEQ3mnHY4xYTQDfma1w2ssRaqHbfMsUsAC4bNqb1FWgxANdSvXSdYaKSHV9hn5TQdVtB9JWuiM4B13Rxj4yMvj",
  "key15": "2Zhk9a2zhhTmBy6v7U9mVevmMoNvBnQNxpQ2RroRJVHo9ZzkJVW8PYxtGemuz1GLfVUBRMVCNwRKFJHkLCrKzr6s",
  "key16": "2bUXxQAoTg5PGqMU9nBdTsgkhi3ntdJ3Gb8Ry6XWAC2jTxBev4PSVN2WcaAvqyYUR5XaEZx6GCVT5Mj3aX7LgwQF",
  "key17": "cfqEmWyQZwKyEwFXeauKyizzuJbqsbydodcUv4T4zDvzT1iAuUzKECsuH9i2tWNtBWokVyJJPoyto5AEBSw7kMj",
  "key18": "61m6dmr3PJjemFg8XTsvAhwe1esZsAd2gDsoS6JhRebNiYKz1tvDyoXspSKGiqUAsb7TaWtLQdUxow9a2fMQkX7N",
  "key19": "47JJQZau2RxDEhyRX5jxQb4fRWDqdeeh4Mjz2Ac2ZAz2LYcXdNCcqdXN1q8cP1VT4fVizAwEjNRmLxTcfu4a9Qpy",
  "key20": "4Jw8RtgBeJvqT8WV2dNndVp6oVgfThBQYttML5bP4bFL1hVK5idNzM6mN6ZdL5kY71mXPmkychGUia9sQcFG7zho",
  "key21": "3y97q2qTC3c3uQ6tD3hPKLDVdXLfHsJkFXr3MNdVLVYzMJ4nA3qdDogFLjFdKXkpDMsxYjjmNsiCcpasnv3XtjmW",
  "key22": "2YMYHVm4eFHTFtUxJYbiuWVrCDoVVeUhPLV4ZyR6y7vM5Z2LQfgSBPzJBuXZXz8d97virYw31AQyyVfY9t3BJTGL",
  "key23": "5b1YNMDvHKUyrE1bGiGzP3Aptx7eCKSkPp4nteKC7X7AqCW2N4piNWysu3EvjYDsw86PdZ8AQU23q9KVSoXB4hb1",
  "key24": "3Gxrjam3yWdAmavX4PkRb8Fbf8CMaAeWc3FCc1euJwGPVo6nGW2MkjjwN7Du1pW3LpjcmVJuA4aG6ZkemQvQ97Se",
  "key25": "54CMeEAQBJ6MjxDYTeh9rNpHyDj6XUpJ8SGeAmLhznXktL2NSEvkcPMk5WCiTdaw6zaQbJ62Q4D1UjpoNKwgYA6c",
  "key26": "4Nda1xnKSSuhr9Ft62Mb8io1VG4NPFKLNSfnZoLd7E39KgbrhVZS9SdwQqyjQAxLcNRhwYvE3SsPj8HNg73BeXDM",
  "key27": "4qWfY3PXc3AfjYG24Rb4rbW83BG148EpVz8zrhnc3DTtcy9UnmenxXopkxoqx7fNRN1fF8R5vp7XpD6c5g2XVzND",
  "key28": "2oa6GDr8ci4EKAdsWrV7gQk2KZtesYx39PmfjDhkpeYiZbXh5rDy9M5SZPPCcuttnhT2fDMWvorLZJVXjsjpqiWc"
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
