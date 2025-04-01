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
    "5u4N3J2cjc2iL9HT4U8mbeqrLrbKd1aHbUwhZwGdUPR5kQHQQibiJGMn9AhHqXjPrjmGugqJFwxHjh5jN6Jm2tWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxp5RiLRxKekMgqtup1yEvFv1pLUvfupjfwqgx3X2vcrBn1SWvvwGqaQrL5tnSYYRBPQXtRweRkWaomnJtSntDX",
  "key1": "4dzchwTyzEp3pXMPNwx9BF7i5T16QTvmnrTFxwegVsUPEWHg9JdpJmZo7Q413dyHu2VjHDxKmrE4nkqcUEYaNu6M",
  "key2": "4kEKZWjdUqwUaWoKBct34i9bncccVHdaB78JTGctSXgDgrM3C15PDykk2dPjwGBrJYVohBfKpL3t759ubT2nBhdR",
  "key3": "3hXMwEGg2kE55UPSRJU6MRcaZmWc4ErxzcFMkda8mmBjPeFpq3G2Le6wuhXBoDhS8XFzqqEyACv3XtphEa4xEJEq",
  "key4": "5FjAYUTZBnZDY3jHdcsunCwYJDqttUHhx59Mvi19kDXqQw5wht9Nc3CiANCid6JwwTrpBBCVq8AUnizaoP6kCSmk",
  "key5": "5ZEsX1AVSVoMJmtjAZ5WXCdqQKJY9ebG7ZXjHWBoXqtaTmxQe9iPhsdLcnn5ZymRpp4uNzceoEknv8N9zyFuKFwm",
  "key6": "29ev8a9vLwf5LG8b6UuK9b3qx7VCjbLkY7ySSCmUb93i14AA9qZx6sDebZvCmN2mGQ5KbJUVnXDy13AvketTKpEN",
  "key7": "3gjvLoDYKP3MSmEUJn6GJL19KKJVKzmN9yGyNcDfzcFMSosxFCUWLj2vY3Tm5ZQX5yo4VRfamoJtU47v4yuUMPRZ",
  "key8": "5QPDHSLYH9BadZQmZV4xSD2EUvKHEsBqYQvKNSrrJaNg2rY4EeVWnuKGCmcvDzA9TsoAWo3ahJKizKDyKA7Cducm",
  "key9": "55FNC15VtdEc7Lu2dD6PkUN52pU96VibGmXmRcXV5o7NvMXJ47fez8qWbESP9yeJK48qpxpTdWMzWT4fF9ewtHAe",
  "key10": "3VVdWt4FEpYrDYjCkYJGiTgkH4phuGCdwJkRHvCVMcNci7FkPK9WuPgVR9War2kFoWJ5qq5xQjE6XDieVJh3xURq",
  "key11": "4xVxvPBTp7Tu6hoPBCoKku97G6MfDDA7xzWY4ZS1NMVGZzKwxYwS5eQtmUEbUQ9eXnyk7zSH8tJsaGrwXUQ2cfgC",
  "key12": "HNsbvibkUvxcDfYZ2YA183jh5qrPekT77eVkuepc3hc4UnPE2RJyA7mYr63GXRpdReGcG4NRZLnnmc1otVoFudf",
  "key13": "5v5X5h7rAjJguXk4nV5uBvp1V6VpiiKp11UMszZt16uamnarv5C23Bmjbd2rKUbfVRLP9ckKq8zQAfeTZhaxYiWL",
  "key14": "wApABLcbKJmg17h69tMUfVDa9GGLpxQqbTGRQq9fkRH1ftviy6HFNacUUMU4KhQhDncsDzQA8bbWMdGrG1v476J",
  "key15": "5236rh7qUhWkSc9iRWJjc8hyXbW58tuyqmMjgUeUgGPyWcNeyDHL7KHJs7dcVTho6JXzhRPxUBWgJMkXU8v7zwVe",
  "key16": "5cAdfrL8WU3hmiMz1WXFie4V49uaYrpHAgo5ipn9846jYRRFviFXrY9i6Md4su2upaqH1WbGErRYMPTCJaBL9Yvq",
  "key17": "4PC2TqZQssscQVMLaxNJB37M2LkmDfi8i5AuzYdhQ5mjyTfmDQ5UiT1ofY2q9VbyXjiMnHF87w5a9WZweQYMqUAR",
  "key18": "3Ti2uNbEQ9Riajn7dAkokDdF95gd4wjnwVDxdwbLaHD2GkvqZua1YVTgzSMmyczM5rzrZeCykfQ9AZ6nSscf89R1",
  "key19": "5REcvWQpCEHPZbZ1FS7nGn91HhFXL6X8gYLsuAvMR9mbjBmQJQtj87GRhctajrvPBNvSMQc4CLEfSV4fn3EBzMwA",
  "key20": "4PyyNFrxqK873vPxRZy9mUdG9WTxMduTrBvXR6bGjzquMWNEBuNkJRgoXXJqbqhx4SGiLewkrbH6cbDa5v3v58Nw",
  "key21": "daypFA45pg7ZJJ13VeNTSnKiZe438cC9c1vrEy5JGQM6FHj9NLjfy674581pd3RYnsv9Gbfxmb3D37VaXqdJTUj",
  "key22": "PtC3x457xXZ47ycLHYEfTQc2XmmsDhAQFH8DuSqPzxTcU8XDpsUNcz7YJTdshG4aFRKBFi82pdqE8QSWbbULDHt",
  "key23": "65pSoSFuz4vJGoibfergrF28rVrKfQodBaxqgh2hQX2HgDgmvMV5SZgZDYhRfuEMvo1qxFXavS2ie1EN69VSwvjF",
  "key24": "22rgw4jNmEEDTtDQCxRKwVRkCNnqiwenMwd2aikHseLocToo28ypRJ1PGQ2R1YbWeYfy5RgLasetQZSDE2oj1GLU",
  "key25": "G2sL5oD9npPMmi22Yw3gzkyb2zGZQ7JD8m4gcLvTxAtGppVCkeFnVuZgFcTD6Y6CKHdMD4Bkq16HBmZkjqokZt4",
  "key26": "2hr5c8iQmU1GzXByvdKWrcXjrEvaqesLtLNUZyfyawUrezWuX1Ldi9QyaLeQrqUqoSDphdSuY43rqU5u9jpH2zCt",
  "key27": "5qufXKhNTbPP42yTt1Q3PWgim9JSLR6p7oA2cj7pxe5dd3YjvRwfwZAHfxUThRrBSYKwVsVMgHdoheEU7h9VjTAR",
  "key28": "3D4FS5rsGeR2wWojr3EMSBiJwDFcwb5UZa92MNKdTyenCrfxE3iudkrs2J1yox3EvVRuAYr39s3dSxs5bwrSWgYJ",
  "key29": "4oNcjPCKHWMZ5frSYkyN91z1yJ2RqZyg1Hc3i15mQTKPcENwgQD8eEsrhEKGUzqaJTncXVUapoYw2pHfmgAaix5D",
  "key30": "3km1yK2Lqg9LXWGrRCyM9u71aTMyUbAHfjuYvprkhbUEevZPBGxUF77N9Qgz3ZiEFqbPvr9FaS2u5AyHDSKyoRMT",
  "key31": "3jyJFC9qxbnEgs4Bfag7fRvo3V3wjoLN6w6WbSmbm6nnufy5B6Bs61krW7QoBWoWccp9yk1U6GUAaFL5b9pig6YQ",
  "key32": "4p1st6hY2RCkWGDAL23gC1pGDYDyPxxbE2RpgdL8fawNwTaRcJH88znaszFFN4KbHFMV7yrha3e3icLMcv8eANCr"
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
