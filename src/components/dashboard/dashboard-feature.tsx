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
    "wwqzNTRVbRLB76zcG2pX6LgpmbufQpZABHvSLka67PG2LcteagJjXdF6Wd9Gvfjxu5Bek55CWvuSBpXc83BF8HD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHMT8Vf4BM9F1cQ9j6BttH5Xeth62WgKnrYjcRhfn4b17QULcus2j3Qup1BXn2uZxSCsJLLeUZjW1Jt5Cmyvbjd",
  "key1": "4jNd4dpY2ABwrvgZfTjBZ19EddN7a4Y14ThoPKLDQcepeWUpho2RV3DG7FsydX4qJqnqnT9SHqZsp1jsnVqjPgM",
  "key2": "4YZSMyNKW7hxi1nmrTU2zjiYtToA5e4D48SnHaBPdB2NS3N8Da8bTCcqT9FatisCHuoXKKdYgAXCzo31CF74nBLE",
  "key3": "FD1TR9VRBSVc6xGnH9oXtGCepMB4UxBktT58mhpSHRRi5L1r1mChC6qzh75tHDx6wSLDBFuXfZ7yAaTWYdy9Gvu",
  "key4": "JWaRpPDwZtDyU2pphjfrsJieJFNpEjPsj4CRr5WqFyYkANjgV3up1g9rB17LZNXNY4h5bjD5ZPoT23hA3P6VnFe",
  "key5": "4hj4bcq7vnVz7UaiHmSuEKLG2dcLxMaWEzEaVGaScdp9LPL3bPbtrTm54vHHL9TYLP1WRia3WWg2jS7TrET8zSVe",
  "key6": "5TGrxCNXbscuAhgiCCd6jWijhgEuekCCyMKYDk4PSrtktfctTkEKVL1Kqa43axsEBwkitWhK21DV9PTHazRX5qaW",
  "key7": "5H1hqqUsLJEXe4TyuJPhUVCpe2ijBVXjGkajGZMbVHnqLxL5qt49JstCSL4KDfJp1YVqXLNdcSDV7fybJ6sbJG8R",
  "key8": "37Kv6v2B9AzPvPka7cSAjnY5V9zsFPbLS7p64rAgjVvbQ7AJcbR5MrSeWFbSHM616QiRPGe8jBPcm2BX1GLnaV6m",
  "key9": "JkzXuh8DEMTdE9fZxTdzouVS5fDVtu1qEdXuihWQzFAeWfi3wc7US8UQFgJEM6AwJdR5BinhvaxifBRG1KJ3Zgz",
  "key10": "2Cvsz2PoMEoUT1Jq35Ni22g5iVNfZAaniKYybMyxC6vU868vvk64reAFgxfCNR2qvarjwpX9B9GWFA87vRSfATma",
  "key11": "2PZ2yyzSJQqHQFXkMYQo5VJ1KN9W5M6385Hf7PbaAtxF3WqoHp79QSUdf2D8xE16NnL8SzZj68nhDFBxwZ8wmvtX",
  "key12": "rzvD84KX2SMpJa5ndhzjNiX3NFaUxbpTbxj1S6YsjpKde9JHAEnLm4u27Gxze624qLr9VYwHtzKRHWj4Vd8zjea",
  "key13": "583xZUZSttx47FbaxLNUZq4uARvMXex1kSbRWbrnXVtoHV9VLvhu6omzjtPyDGCoAuRaqxGqPTSDLbR8WWCHkoVM",
  "key14": "4Qqop4iNQTc4EfW2QzjdPhHjZj4BzoC5Jvyqrv7tBqjMpX1WGx7bt4SpPAbQLMosoVxoGkRucBwzNZLjcut6JPL2",
  "key15": "PoPimKivzSAq81GTczvXn4GkwUdWZDXVYVBYpmKWyJfri9xfLQNZdX6V3MXRnXMbHQ6oA9CjstvdFNeeE3kDvpC",
  "key16": "2g8EWbuBUPhhFoXHxjePoqMAmeENK2f5eFJLKgxjQPAHbPoF9qN77jRjonXAqTTzZhTPNXnctWdw8P4o5M1JtKym",
  "key17": "4YCLQkzgKj7ierdrKk7YwQetGXLMrHFahdmwLmZbUmp9MNCiAkNzKzBtuu1bjfHXR86qxyqaXWCbc8JtPnmUZJCc",
  "key18": "2UvrJNF799Tx1qaGHCYAjjWNhgcJ82vqyLvPkLezEYVBqPXbKvyyJQf1fLcn6mZqQq97XMHJXpov8uZd1GmaTbUf",
  "key19": "4BQGSRA6ZiVpV7DqrpoGcDParNsMv8eXUiTUTe2RszrbKuJh2TptEbtktoRo1ykcxcByuFxAyvUX61R5Hohkqmex",
  "key20": "Eh7BE4143zkpdJPVHxsWGdZ8iT7qSvDDV2QJZ9FkkSbQUyzZjNVwFga6TGfBeuLy4tubcuH6o9k42bVcXpNBW1C",
  "key21": "2H5oNzFFS83ecXnQbnA6Cm6Rf5ApJo78heTA6vEvDafmsQ1mgbhwEHrvhRMerJQnhB41siKHBRWCYWY7aXqQovbp",
  "key22": "4bAgh9vCSUPg61sbXx7RL2oz8pBZHxKP123d1QwpSEEnS7HRDorAZdL8JMNAszYaLSEpNr2LiWjzni5cE4a4wNaf",
  "key23": "51DsqSidKhKALhPvJsUMyosZchBgTUZ2MsCsRb4DiKGJHwdSSvr4fjWJFyCU9MKB7c5Xji9norgbJHyFLsMGdbGH",
  "key24": "2iLucHofnVRv1HrWh3pnWrZ8h6Um44HrTFmQeJFSyDEsyveo3yrrixAsqSKkhxHbnfymwLibZdhuNiypJ8tDxEMZ",
  "key25": "2wf8AiF6mR87m8dxadQNLwiYV5V1CaWMc6Fe1TBbu7dWPNFdsVmaAZptc2zwqdAhceGAVvEJad7VTkDSWRYPsU5v",
  "key26": "4JEZuw1MVSVHnkqbEQRuB81A1i2JAUJZJum8FuE1qeSkYrT36KcC5zQfsuXVRnhibHD2DtRFDKrFUrafBX6g8zsg"
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
