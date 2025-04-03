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
    "5u6vtSNDMWkgBgNCtYa5aBWRFmBXwESxVK9QQniQtPoiQhUjGrZf8v4tTqBqRmTcrANJ9rbZBiKSUj8MPMgkA5CW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pLZH9v42DdbZFsqXsxgzoLm1YszmvxEyQWYe51KVPdTmQX9cGx7D3JtxGpXZXmfxb7RwBRF97tnxYhj1tT4kchJ",
  "key1": "5JmUZk2WXqGfRkbPNVPNH2f7HKzzKMU26eo4Jh1LUHESNHQVxwhq4TJNrX9Teu4q33i6DDPEY7uZghrHajif7NXr",
  "key2": "4Wiroih4xGcGAsbZdYGVEqdqgH4jeNXvLB19qz72NJbGbEB31d6FxPv3t1H74bq8d63JJxQqZC9X3i3CraLr12an",
  "key3": "5NXnXk136VT2WmkS5uRmQFBzVtTX3oEBWUFdcRpzC76kkVGASKm7eEtbgZTYhd1xTQiR21QHXCAmFgpfrzfbzTpQ",
  "key4": "Xuaa9A9wxHVREMn4cayiy9WnRPtAAsmHzt1RXffXNkDbD7g5Rhym5TYbECdq5eactr5ktTknU5VRhbL1wJ5prWw",
  "key5": "3g44WrBCZxtUcjFFH28atCdwaEGviZdLy5FVWJjEeNEwpmKhLmo8dUPA6CC4wpagAVUTZ6dekqoVuG98dHk5C33z",
  "key6": "5HofroYpn8eWXYjBxMW66jN37NGJd2dn1F8gyeCZCnC1t6oJrasfiTe11uThigXU31ryMeeduN5NUn5ah4rf6Ssu",
  "key7": "37rQUFMjm6yzZBfVjrWg2488iRm2eEkvgUJtZEkA3DjykpYotd735Kzqp6b5pPLVkdbqPncC3pZnT8dLb16dfQkY",
  "key8": "2k7FfgKd4JyU6j9iKWRVZdnbGr3c9ERwWQLxTCCAWrkmrnbkd5YBt1kUGosoL4FuQj7x2TttekWhiijoxpWGKpeD",
  "key9": "3xgawVQmrYnEhtjPJBM2ScGWPBvgjoMsZNZ128ekYXFttJgDBVrgtMY7uBaSPtNaw7TsT4gMk6RsUG2icnv63gbL",
  "key10": "5BY12NTNnEVy82u4oiXYu44MRXo7GENi6hrPyHvZDaUyZUghBsNgSmxviw9MMMjLS2jiurrTq4tUHnDqWdpwHNbE",
  "key11": "5CCrnrzQwARvBMtaFZb1gHBsAJSbmAZ8wQK2GGXnqpZXoy1EnuFr8EkPXGFUKcmAKN5eC5gohJyLWHdPdzHvj4NY",
  "key12": "48HpoFjtq3UkkjHoqGwG4JZGZXvf3AKERkXHc33wf3u2VKv8V6ZdjSxrVvi7h5Yf3n7xBqkz3TyHJvkerYfM5hQ",
  "key13": "3qwe7E5mDvf2UGP7xmPMMThD5qJeY2VBRZPb8Jf5aHrtPk8wcZ8DeTi788YFue1pbgfM2Vy7MjqeWERvCyq8JwAj",
  "key14": "3tTyaWphGgmeX33eWowHU6txDy2qNV7U8qqQEbjaPTdmxLtPkkiCaUXDK3Eoh6sGLDiATukPdUMvaT3yZiu16VFe",
  "key15": "5LfYP9mQJtwue284iK9Sbkawup4HphfwZLmdjJu7Tt4xQJcScG6h8jHDZYSegzQS9vihQCDGM9Uwo8gqiGo5nbTf",
  "key16": "3Qc97TPtWQ6UW8PzFiBjW3M2d7qvmWx2HimgkhuyJrweGxYhh8Dg6G4GQ1RL8MC11VHzQUwtYeqJeDhPyiRyseTa",
  "key17": "2wwhoL8YcZcfVFwRvXuuMJMD5QPfHB7UsgxNhAjAunNLnMVPipD3Xi3Z4mcdMsk2sN3T4qCHhbabknv5qSdUpQ4i",
  "key18": "B1Q5BWRZYT9TCtrZE8wgXukfv4sMVnS7a9FAX4qwRYSSBmzCTgaGENCgSwgL7eZrY4jfnkgG4HJwVcGVSMewwm1",
  "key19": "5vTH6VNwUNYqWNhC2qtth3nckdPcUo2ihvKgVM2NRR6Sk7grV1fZQER361ABkgCtkdCtkQbm3LcnoYA4K3ZVdvVV",
  "key20": "48kDsnqqe4dWeUcfEDshUvmPJF25GoEjLCWhBaJLdGc2vn8wPxJcxXpq7Zo3qJe36jRwYCLVWb3nAb1TwfDkbr3H",
  "key21": "4N3pvkHHRg34A9h8cZ3j58iaRvjkccNPBWnnW9bwuVj3PGX8FLFPni6J5J6zXpUbxFPVtMAnBpWumPLKAjjmQGqy",
  "key22": "4pqkw7mwUkZfL7eepB4szymZXBa8JuFRFVDySWcyoKMxspwaDoZRAWQyb85rgBqzQrWPUT4h64iHkFzUAcAzWBZW",
  "key23": "3XQjDp83S5n9mqqJr6HydPN9FnnggXCmoV6VcK6NR1h71ksLbsE8sw6k2r2ePHFJuQtR8UWGwVKuEWDgBqeMXcVD",
  "key24": "3tTuEVaFHYBJWYuD5t1JL9PRGvqknk67pLUmFPEoaCyD5NYR1UtJjku3fySwU8sBxsqUYcF5hnS2ov3xgbHZX5GE",
  "key25": "33KpVAh1uZKozPtBVj8XiD2zQteC4D946RcBFQfwoVCRJxBNtQiksCGQrmntsWujPVgdbfhrBudaWSpdN8MXWZrt",
  "key26": "4AmNingaN9WM3jwvnZvWwxHkw8FEygSsZu22eNAv5c9Q4DMCm4J8GU78RgZARr6bsJfDEGTUf8uEM7X2Mz5PKmz9",
  "key27": "5TessAyE1HLW7hgUv1mMoqNJMLEc48kmexsPcjbEC1ntbm83X94dEB4LYFjcoVvDB9UHZzVxf98ZEM5Y9MJJEAKA"
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
