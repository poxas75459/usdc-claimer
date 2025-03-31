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
    "4tdALZE9q8KgDMZ7fkpAPoGxTpjFez9AZDq3GR2o6YbAFh1X5dRYsAmxjTxStETmriq9j2FNgxH9SKfUePYKZwnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C35DVo2c8WLAnmDkBNXm4X3u1uNCi8Sr2uppRJpnH3haz9wJ2cTKUXqDowWDKo5784PdN3LJoUJFnYn5bFrG3HU",
  "key1": "PbLkzXepow6jLKsjJtq6aQR86G868GNe5kLhHLn3VygWebXdAL8uq2AAvAFFkeEvDaPsdV8yxat5WT5zbJFFfJv",
  "key2": "3gKb6WJSKFG89STJBN1Kq4jATRxTjg6kDfXSzKJufKBcoFKU3oqEtfuKjenyvWdgM2zBhiAKMRLoLwx1AfJV7KdS",
  "key3": "6326vdcYv52XjEM6G6tK6d6Pv6dQMF4FN3hDY4SQNWyBKCfKuEKYqc36jGZCC39Ktk8Y9XkY36qKMkgPybmY5xUU",
  "key4": "pvK596xGVT3aFnRzNwi8UCnoXutUaJpYdfT3pz4W351fnKZinKn9tAqjwkDkSJciBTnuEUpeazF3dd7W2efVrQ1",
  "key5": "3Rv1i8nyCcLg4PHMhgFC9HCXqXwq1GdA6XkDkdmcBL3RnxKFsxbZ7PoLTWFYeL8DMJh3qP1GFYipggJU2b1jVUX1",
  "key6": "XNH8QkqLMkhhQrpENpKTvi4wMKAacTihsKYMYPB4hwwrJVCzksuPrBYQJDVaBNwQyHWAcmtGDyZEQUZ16bftAT3",
  "key7": "Xj7PUVWKHViRd38EdUTRm3ZU1Z4EZiLC6CKMtr9eyjyYyF4AmwFB7z8CyUNuJeQB3cjrv96RNNzsX75zJyxkoKf",
  "key8": "3nXfcisdPtMWPMTD6KNZwH9Js4n9xhMzpv9dhCf8JpJWBvggby3oaDoY9EdjwNEkziKwrDy25aTVJgb82hRbawHd",
  "key9": "5f2W1iRUXRXSSjjEcvu48vQu5viPjjWwqsiLrwPgn1pZiXTgKQ1QZtzXvaiyUnfL49vpmf6vheGwCq6qQa5HF5fk",
  "key10": "37ZiJUySRwyiig6JgojBDGyxi2m7smVM4KXBzpELsZpm7ZRKCFMLSrgXn2MVrdonCkf9F9LdpjKdFgyyTBWaMqS",
  "key11": "ggcVzPfDmMwgtwwzkyCiUUUF7MFhqRmrKQvbTEUxqEogLRoLwa8a3o7KGMsofXY39SdNmt2rvXXkRbLprVdxWpa",
  "key12": "24kUaV2Bvswrwx5negBoA9wAdGFscZxsL3gZtBzVTovctgjXqdKS1o2k69wHgVSku8ocnF17EXXZ9YzBM4KVnvjz",
  "key13": "2VHAbVW2buSHSdbcnkKL3GXJZ7ikd38WaJ7mFQRTcPTKZvzfzLCRVey8sEoPeiaVcuXijvUdsVP4XnhwFuT1wNVh",
  "key14": "1oASPf5KrmNGcad6rtRZLrisQTCXjcm35mFjzFbmjghD5Y2fGhpnCaNGqguB8qQiNdTWhurEnspPtdX9yrqX1g5",
  "key15": "49H3RQB3q4AuLprh6SN63BAkD3NzPdqzNWxvHRcVvCuCqaL3ipJub9cMthbiN51VB5P9HKu9mqXxEdRupGHycxBA",
  "key16": "7NU12i1Ze2PkdMYQhMDrf23HSbCgNAR9kHyhH1gWpeRHhBeajUfpdBZbLRntvNhHugCuECxAEh6XogmuTpqFzsx",
  "key17": "2Xi3UDZ3dyJLTcXZdy5HepyKA2748XmApwi9QpC5ELQ7nNod4YyE4LtnL3PC1CzMQocnodu4imysqALrwEYn7UfB",
  "key18": "TYVNCZD8Qv1CxMZxXcNGbmEXELZktWQBJZfMfSNb67oqGwudednMwNnvfc9bK8vZm5Z8UiRoXCLxiWenoXtqprT",
  "key19": "2P3puuLR2j5HMaBYLN8VenNkBQ8ucz7z6jZj8iFRkz91vy11ANtGXLMeyy2fFohQ9msAabdarN4NvCig1XMu3ayX",
  "key20": "H4Hk11vRGhKcLXNCFkYHWSWCUM85waM9T9CjevW1iuKEHcVegF8r1aJBr9a2t46CQQqLZcEj4GpuiinfFFMUvZZ",
  "key21": "47zdtGUJ6Tme6tfwKUh62M4C9E7EyxdM1p3Gr93q9Cty88Z6LDobVtaTfVa5DFtkzFovdvvZ2ErF5aLZdmvggqGV",
  "key22": "hJLsGsBWVGuM6q2ZSpnaC3b7UWuvqUkiJPd96Y8oAQkPNbhXrtT9odSW28VyJ888PKguWkpZEh1E3iC5g87rrJN",
  "key23": "5U64c8L3GjSe7sW4j2D45aH4RXeLKfmSEmdZwSJP9S47uw4i6ijTDrcVtr6jC7dZ8BBTYAjQuqCHZwqw3D7WjE66",
  "key24": "2Nhmepqw17k4qKRhaj6NiaVovdkfP6DC2HT4uNDkYarS5CrEusAdzjaQr9Uw9w3ftew6UA3pGPk3vjLkGkTuMuhM"
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
