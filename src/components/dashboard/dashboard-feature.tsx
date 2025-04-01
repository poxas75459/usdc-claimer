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
    "56ezGnTLj82vrvsvT9L2B85C9NUd3JY2NYVxPTFi8hpsf35GRHVkvrtbpsZycHM55WMPthkQAtVLqwHTWdwE8GPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fao3H6LnkvtUJNGHkeqEEExyuwSQLVKaQEMG4rTpFN5FqZQH9aPzDu2buaN2qatpVuQeEdoyAUCnrRKA67siP1A",
  "key1": "5dfYKLnGQNu6oX7yQRHYC4zZNuhyBob3YE45cz4XmjHSoHM7qmFHJdGbHhwxd2v7RZUX45wUQXfT4eU3rQ8H3K67",
  "key2": "2KpJAw6BBEkxcsGASERAjy1PtczQ4L4jg5FVD1wAyNZQfQPBbQMb7mhbkx7LAn3MiwEKymt3J3iJDRnvC33qqTv4",
  "key3": "64n2qaKKXAucM9AWcgMKECMq6538Gh6QG4XcPJFTQYvf7qZ5opLBPYuFVj98Vzi6AKXDTGT5R1jhdj14wMBJuXbZ",
  "key4": "WnZxSKHXPg5yJWxDYYZMXnskopRXvzCkJ3KWFyBaLDJKLc9MjfxR1pMYKm3zpgxRCRH5xyfPVT8AZP1X2kvEtTA",
  "key5": "3qq4YJbtanGiK1LQnZB41HD1P7JwZA5dDxcYq7FrZBUo1KEjLipErmP41WKqR741HnCPKfm23TiuUPYSAqYqktCw",
  "key6": "5LEiTbfveRa9iHbXsC5ypUZN9UiZKLHWcMKeWQDWfKstNc3Qc25Fhq84Unkdrg6jrv11A2mUUMaFrYc17qp94aAk",
  "key7": "5oMZ6DZihdFvsdAfPj9as8EVFmMWiup6iXu3Bua2WCRF1P1jKufwMQRXeSo2JEttFCmHq3x1Kce7kDxBcAWrawmR",
  "key8": "v3cwHk7ijEZ9zxoBkdqB5HNxFmtHw9G6uYjJ4qNJDFQRj7oK8xvMjuLCKtKV6vNUTmWjjbBZJ17tN9mYv1HDtY1",
  "key9": "66Y6YSNQngXtC8mYoyfVPeSwvAULY5ETfxEoKTY1oQKtZ9cJhsVYGCynrQBb1dZjy3oKby41br8FWCgMCQVR5Byb",
  "key10": "2UpbusAWyJ2fSTG4ZoiKwjHUu7YgLDtNtL5HGcVPLfkR7f8Z7HWNQx8d1F3ESHzvrJZw8vFoWa3qXXbX2nabACJy",
  "key11": "2Wu1agstWub75yQ5MAA1HzpYABoR4dxiV8xX8DmnQM3wVMQzAxKVZVzZy12UpM46MemgtCqqPksYxjzkq3Ddf5Jg",
  "key12": "5fJ7efWe1WLjaQ5tzbnXiZvdE1NmVCBpffDCREFXHN9FameLhrzYxvTQitwXDJE9n3D6LA38KszLouP14CW8Yjoc",
  "key13": "2JfMvP3DpBmktr7NahrWtpAd4dreFNgMxW9dYM4wxdAQZGPZ2bjD34sS64taMyXrvsHGsD1aDVrPjAAYARaeWFF",
  "key14": "VgwThmRgXXvK9ZmZBT3NV4WtZc7RSK2Rt9sHAtztE7KMPmRtEiVNp55bsqHj1VPfBhasfPErGhuewECozfFqmYq",
  "key15": "5kyyqZZWwRX86vyiKEdg9hkDfC174qsvZbBsBeXQwXTsNiqxR1Gaf8zmMsSEPxNfFUfTyUqt2pzuB85cYpkaAYJR",
  "key16": "5Tk1nug8mWG83EY3tZ1icYvHhGvZ7wLYL6ZtaJXRx9gBqynLCUjWZKCTDFGgimCQgDE93ewZMTfie2ttRQ85PSGH",
  "key17": "2W8WnE7L33suzvFRknm5c8cq3oaHwVb5tS7BVyFLciT27utCgCufgjXXEEKDzMx1aMXkwZNP7NHZXWJntj1VuEdb",
  "key18": "vDukUvRqQrVaoc8DhSgXUiuhWYSinc93MkBgwxSHk7hFDTdcXynydXjke2LR9HZXW9RwJQE1Dg4WRhRqJyc4xc4",
  "key19": "2s2nHiPNaeVgAKZ3ABhtAQVXDveWe3xpNdchhLhQHJss4aCUrtidkz6KsbLFBoF6rFhjU53mDkhcYmBBboA9B83a",
  "key20": "4VRi8QHrG1xDM2dCKVh2Dqpwc8C33PMgKdnGTeq8qw5QXJyZxoN4KhtidLf3HiXybiH2jkYnbaQ77fnQNFEKMCwK",
  "key21": "KwGygqyXp1uEVb17ML8UhHAHbmDjTMfyeqNJXuchfDUsqGJoSMV5ejF56rWrzjyDq5oKGy85knheaUZVY5BnWCW",
  "key22": "5jtJRAsb9qg4W3fBD5mk4msbsWsA9mZoPa4WjV9T4caoWcUbAxG9d2nqVx255nEPVBx1xYUqrDHJowAZaPFFBiJZ",
  "key23": "4XsbKhct1CuVyrq37ycTeuFn9gEP8jNAkXiS3ReTCeUa7F1k8PMDaPJ2Tqc3dYCJKbzZSa3Cycy7dESYFvvBXaET",
  "key24": "5vvC5u2SWp5v7wWQjqDsYYaZa93Ng1iQgjZfAkztwHAjoGbL2raeUS3qCUETuZfDBJFcpyB1H6Z9DqqzCBqZTCsx",
  "key25": "pPPck5eoD3jZYsb76FT6V3f3STKr7bMxUoMUYLKy5z9BRRqX41iWJKr6N1zApXM6KYe3AoGaryfNbSdBUJ8XBBr"
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
