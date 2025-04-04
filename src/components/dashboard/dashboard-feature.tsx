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
    "3RZdQL6ditzFsUT5R7tJvTLV1MtnjgNBMQiu9B53ncsUGm9xmMps8wLJ6Ns7bzMZPY3W7g87J1tHMGYVN8pE8MAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJDBh9BqVeReZm4MrjtkHs9Vyz1CXkYxJmPvnBV5K7jtdwibxAb3ro2FJ3UGU7M9scb65zjfwxAtCrw1rLUVFVP",
  "key1": "VsBCXy3AfSkuFchHQJbinFoq37jnXsrD2KKMXj9fhr4FfXUmDN8GhqcCSRaVcbd3vHZQDDASyi13hysNr3aAZbe",
  "key2": "5R6ogYUdo2exAhnQR8uwAYWTaSkkKWuV3ZdhPwkx2vnHfmaryb4LupZWC1J5VhmjFqbaY9p9GAYdcUKcCFqJ2sP",
  "key3": "2PuSNRVmg3dTBrqLbCGYKgVzZJNbrRmY2dWDixB1Meb7LF7f3aULj7r4GA7BmCEBUK4ecCzedgVPiW5tQdXXHeoM",
  "key4": "4TUNWeVgwwddx3dhjKTG6K6XuUSS9Pat4fgP9yBKiF8WcWF5dB9xTqr2WzwCMFnsfeWd4Lia5dn1LcxkUjzBrQD6",
  "key5": "WeukTukJ8NS4x83pz39i4h7o7ZyAvpLNmyou9C8MGCvQdccCnFZr13qPaJi4DduysoLVrxXNZiExkhgbeRZGYwJ",
  "key6": "5MxiY4BiT1S5x5QpDgyob6bdqT7LG4HxBHKPc31MJtTTu4QhEDAnHvuZLYNo27okEYyri3W1YbDoSUuGaqP7tJ68",
  "key7": "3qKd9EBUbDb1xDwb45jYxWYCq4xpqzZEAyHJmv2oEMGk9nZt6vkzhhSjKZgLftZ6yeyZhVZcCGk6VeYFkuxmGL1c",
  "key8": "4KSDy4VfxozhKvokZjSuzhTsogZjbED3TyQCayN8Gu9kEZF1MvGcBjgEDPPX8TqPw8Fz2NrHV4uxk8f7vXHm7iSN",
  "key9": "juVn9DAJiiaPR1wwWnE1UDZDom672ssDLfJr9d6Fg2hYEzWtWBLmK5xxuRVNdJWwmhRQD8RquDKWvWuHeh8f8qJ",
  "key10": "5XcbS9Y8jygmvU97z5SYmQ6ByQGaUJpUBLyo79nBwMGq8J65KU9bna8WZgvsignKesshaJo9fpx9SKHeJPBLVhTM",
  "key11": "35cmUQZThpPV6optyKY14L16EpKhiQcHuz1NLrA6yy6q67PwvXZdFbgqXttNdgYSb9r1vU6L2pNCYqSUjfp2aEKw",
  "key12": "FwofvPcUPZt5RV9GqLpJ9RQb2WSSAcVDaj93mTgmvffM4jp8yaHecU8HJPz8ByejPZ6rGQwvqGeNRkz1L8VeCjr",
  "key13": "61Xo9HmVeR2SLmf3pk72hSo7w9jBLoxpZJ8Max4fpUXmabSNMCgmUmuvwVvqyfzoEASM5a1THjJKrudoft2KCZJj",
  "key14": "59eKPYV2uWsmsu4oXKpKnCbtrTsSTmjkNGtexvWFjDtQz6NS7SuLseX65XTYS9EzJnV2jaVUa5aEyVE6UG7RgCkU",
  "key15": "sgDZTfzShq65LdPDeXaxQza1tmWsbBee8o2CBQLTjUencJ6bMARYDKzyDhVZxWsKRvsCTJwWKUmFabAQ1vMx91C",
  "key16": "3Z161QuhDpXHAZWXL4tRoUACVqEZunfpL2qgFMJBuHZsEJSX7iMrAV1fNzumneYS94REd4U9Eh7o2mF7ujkSW7pk",
  "key17": "3TUqHpZoLVz2UL38Lv7r95PeSBRiLEDc9fgx7F57xWQVPdqXohMG1Yr4nuaCjrtXcgikUf4Jj13R3pGxaq8gUGiS",
  "key18": "4BGkjxK92yUVPFt1h36ZvbdqZypVM7jpz4KdL9D6yu8pbmBzagNrjo3F7AVA3qqMqmoNY4YZMEoWANgmUQz1ACBT",
  "key19": "3dFomzUzgwG8sBSGQYXrXzcEbJcqMCuDEiNmK8CGHFwua2sgBeXZrwZVnM9h9vr9kptVL2k867EkoMzRxcBLupTc",
  "key20": "25q2WuQDo2pVdySNyqwCUhfzLaPTvtq8dLhfdxCKEcu5Zec7W4vc4BGbm1L9C1kscXisou6GrDTtxxwL6b1WKAxe",
  "key21": "4ENxZ8U36WXDmdNY5q7zpFmoa6hxGoQNhA8WTbEao37scqPot6ddHK7abr9o9gprVMLEgMmPKEWi5KamgfvrvEUQ",
  "key22": "3L576UaqdEKpGoB2Kc2Sru4HWqU8vKKykCSCYg68tRKdjhkNWp5kvxrhwTD2fXV27mCFRSNsS9Fiy1fhh9XzsZJJ",
  "key23": "gekiy4AVRd9fHJKXnz2aWPa6msNgCmwAiWMyuCb9k2HERncEiv1Hd8tN94fQ3QLYEp8YdDczT2fkF5SRxmZAAgZ",
  "key24": "5V7c9gcFiFRdMx9WMgZSyBC7Qj3URAfWvcDoAJB3jZtULHKcUoQwK4cS65trqUrMFci7ww6wF3r1A7Eb7jMSKWcM",
  "key25": "2VjzbmSNayG9JQFiQiDYLwocsdxrPUBvxwLcFf6ZkwifjnKfxwR2t1jiHn63xiNGxVHRbezf74jQmYDYyQJ4kGU1",
  "key26": "foBs66meDW2GvmKkiK4Xv7X9nBLpXbiwGiMXAxWLF9M2qLoh2Z2NYCFV8Xc5i76vKGGfyT7EJwTTjk5Ja7JLJwD"
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
