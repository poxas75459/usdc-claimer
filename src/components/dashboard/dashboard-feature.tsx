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
    "3p2HRr4ErJ3uvbvgoAkqjPZThJWMdDSYeh63YDjqXZ8ZRiQfDfPoqbHxobGFXzKt6sHcFwCrbxsEqFep2NDfhBxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h9GJCThPeWcQoHhsFHyHdbmPT6QKhpcq4R4zVq4HYWNpd6KrPjsutMtY3MnedcQYDp6HyrXcLFUXrAYPpdnDJVG",
  "key1": "4FK4KDBcGhMUCBWHHpfYKVLyX7vpFgrtKMuv8f4qRgdmSw1h6tXHDm6psvGYYExFfaYWyZs4YZHaNmP1ThMwrSXX",
  "key2": "DPU6mLqvHupdGAckEJvgB9HiXiTNdK7dzmxs97KUf1xhNwvb1NQJUWXe6sUxumvVqAQWVHADZjswcCd6e4PyPC6",
  "key3": "4MQRFbU3kHbwWuTx5dsXU5KWENweoxNCbQkUb1WrFbRk3ixUWpWmfNarEY8uNKRVz6NeLmtHPjF3Ws1J6PkfsU2p",
  "key4": "5E2NxsTDuFL6k95MceM5Qn4DWCRGpppZx72a9uYtVZ9488S2EvTbeqW8p7P83XJzT69kLCo5vVJQ1tqUnZMH5T5g",
  "key5": "4kui4iY6SyyT84mA86izJfXfa16P5txKYCSwZouYWrcNZYsZrmdHN9xvTEr2xu5QKBcVSnv2go7fBQAY77vwDUVJ",
  "key6": "3ELCw9C2MFXv2mn6h29DSdSH6xfpUpdiLtFtpkRSV1jkDKKdc5EDiZiaN3G3jxQVNJmnYSG6TTmwE4v9JKSggUuQ",
  "key7": "2Y9v8d9VjuT2nhBexpqH7QLbrzfMxsNuBPYrSeUEunDBwCwhnf3fXR6J826mRyT3SdAwv3nGscLaJJR3NyANdefW",
  "key8": "4UgDJ1Hn9y3hNMuZPcsUraTak5RBCi8oQPVKJBqv6iR9mFxdaUQqyTEfH6cLLtFoJWxWXpxmrJXdJwNbGbEdmpbB",
  "key9": "TMchFor6ZBJXxmmsGD4ZaScpYWAhiEexSwNMuKeom7EMmsKsLRKnnuiXP1jMkPrh9eVE7nsQRYeU5GZqo31DyNE",
  "key10": "53TUdpHt7PSXi4A1eRcrg3ZC5x49qcLA687sNjeBRvdfLUAZChPJqnw7J7CZ8yXHPoQVkSkQTVa3RtygmCErebf8",
  "key11": "456sKEytxuecMQKX2LUjvPYowx3cYDe6AqSmgbGBJJr2iHZJ2QmNA4WpT4ofHfHvkxLF4kqT1tY9dkVQtJDY1zjx",
  "key12": "3STYtuJTDtjGYFLTk4NwvsoMn38hNMXWb2cZ7FiToX7Ybi3kU2meRpYzrpCdjAdbYPkKkNzn5pwwYmPocghYrfbz",
  "key13": "3Hc8pMHsz37keLui7LVeuGWJcvBPzpzBHKKQqQwGHkF28r91KvzsP5ZVnGys7jPVrDbRRwMXSWNzrttL9NkK7W3j",
  "key14": "3dQyQh54wBN8cphNvBbSd4zPzR14G7yC87wTehK35tTFazZZN8Ket1zZ6968BfFy5KuAUmahJfgUGX5cR6T9kSx5",
  "key15": "48mJa8QN4PL6wkr9HPkMxQo8EggKJ5QdmkjzAWrbc1ogJ5mhTSSWLEJs4KZjdmcAy6gweY1xhNZANCNvrrXtYwzf",
  "key16": "4SbMtkApmxeGfLb61R1vqGx37eHmqxCNKi1cf2hgiMzJ2kjSEoLhYBj1j6u5itD98D45Ruabv2ud5BJTNTHpCyHo",
  "key17": "eZbXwgwgJ7wwjHhhmA9bHgvs1ZuVr13oYhHrjUc4aBTwzLjh5gd1dxFdcandui6xbxiDS7EjeTrnp7t6QqrxgAz",
  "key18": "3y19E5oY2i2MhxRKfBVuLpzmqfwnBDBDVad6S5s6CbiqKtkXQrjaV7LgGvnBRJn1ESt6Kt8qvx4mAwHN7FRS33we",
  "key19": "5S7b9BoaUbVAnNc6BJqAK17XZTkxZQY952dubNsA1qb7Gs2E5ti9QyMjvhYjVp3AByWmpzk9Y2sGntpWQQs2m3oC",
  "key20": "5zAvYwo9of69hvWTFSoEUteywC74s7TNRhDBJarV6tkmt7w7iyFGA9QUmYZtYCBHsmVbCXbZnNXtbQeATETn4hZu",
  "key21": "2NBQYSBf3uqFvCGvmHXjgVMDdnbZDKhPYiyQ34hLQkisAcuBDyepCUU2QVF4HQE6FnSvcTPR1zXMTSChMpStRZVC",
  "key22": "5tcWqRweRWKAiERf3oiMweyWHE3CdBCN2Q8XgQ1cUJyBxzVd5UGgUukJo9cgCTsJzWEY4i4ygoKBRPyABq2ihScw",
  "key23": "4KJyy8uQ7HkGFyGCaUUMqHgiSisB3WwWmSZHr6CPfqdh7V9mRFBkX3rj2cMLf4GzUnPmzqh3jDoQy2jtZXfyzg1q",
  "key24": "2PxQSq7pCH2Q5WnjVTQFGYYzGLbScyP916wjDp5QydRTxAvWdLfSqPBdJjaFeSViLs62mujYHSxDEGeKgL2kWuNh",
  "key25": "5SXQnTyEPXksoW5x5Z4qvDS1z2GK1pTLcTKuexh1fhHxguz76hiwmPjjUthQcLjsTJpjN6XXzeZP9ABeMwveX58h",
  "key26": "4r9HWyTEsdrJ5JeXbQ5ZcEV6ANkV3Tpba2JY4MvCD1KTqD7Xe9XXRfiiry3ExKAsJEZ6x6XQedFzRhNqPTzYCct6",
  "key27": "XkbHiv63M8K6DXXRroHHDhrxDYhhbWST4LzPgMfpzwUdjichavHDBJzWyrXCdnFGpQpnbAa7QroBZuxpqXRNc1i",
  "key28": "4UVuZ8JByNtEp4mozHgTf4NQtce3usjWthauHVvuMMPrkyKuAno1PKYTJSnktaLaDDpzchubkceRGCLd6qgPDrqp",
  "key29": "39BDram3FoZQjcPcugPooBh9rpYXK2zsZMuvKK9uFfbeXJJ5ZLxYDhBnpQYV147vMq8B8k417wJbiaSxins571rt",
  "key30": "61dsUXwEmSJZVm5oHdXnduu5JDvHcNbN7kG2PSb3gqFBqrUL1ny3oU3nHQGz9WUNZF8qUeX3PRbNxJvkKJXrra9F"
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
