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
    "2mPZ5D51mKU7RxTNLqiMQHXbNDqPRbbEDkGFgTu1Cn9mrNHcjYM3cNDByjKuJm5Wg8pVHVp7ETz6RbP5M7t2FaBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwC4jPNDwmTbchkFquQm3easU9JHXxz6RBbLW8ksMujr6MVgD3robcX2fT9HtNB8DWLuNvDm6XDn4XUEHwAfsx9",
  "key1": "2hmXeR3Ey5WzGwT4kBL7gRqRRh45PL3hQNHqAvRigAVDea66qrBBgo7QwGrrBSvXQhGjsUnUtGDQV2y63HFL9wT4",
  "key2": "3WPr8qR7bYvnf2tbhe2Rk82ZMe1q8pB7c1rsbKNSGKfUR2khCnLGJLLgTUEQ1LEghjr4VwbFuzawAh9b7JLZ36LG",
  "key3": "vuHPKcNQ6aHUJAqks2Tmz38MeaSj7njypHmmc8R5TtN5hEW7NEVcFkcjVeNP1FnhTHHYNDkG89yZf4wPHY9ZZpb",
  "key4": "4xP9RXAHeLg7PvUVZB2gCvWSfE8VspFyZGf7giLgira3bDgFkbhBgrkJBVLfog7p3gCTK4mRcNduaDVY7XeuHnf1",
  "key5": "5bF3DmxP5iAXja2xnVgRa65gi6os6Aa2sZRaL5Z4CqzrZHBAo6LuCcmZSUTbWKG3komz8i1gWxntVyfZjmqapzAv",
  "key6": "36diZ1FfrtF6womZY6NJ3NJHX4QaR9JcdCtNE92hvbRMjg5uDrxLX6uBD4Fe96HDwyZyHfCTU7mG3sf7Jn6ejhjo",
  "key7": "4vMxXPC4uteUvgMiEqjMAZHz3zFk8Rf4SzXGkpv5GakRSRHTr6qTvSaHsi2KR9P1fKYYRaq1qYVxEWQ4Wxa5VfZn",
  "key8": "5tYDrC2GuHD2et9TMfCdpVXAcnBhWxZStUDYYZgNS5enGtKevMKVqDWrYBmvr4V4fbNH5nSCEoUiSFx5p7fTFdWy",
  "key9": "5KVF2zCAShgLZTHaVtgTUwwGFAbSvn7KZ4H9SMreVfGHfasG135Lp3odjPLBAdjQXtC2KufRUG8x6fZPiV2psC24",
  "key10": "2uU5xZ42Gsb5Ve2fjX97t33iPJnZu3786quKegK7LFrfPiZLjwQS5Mpz1zFUREwWhNGprWECtP54cCZ9rtUKfy71",
  "key11": "gsTB8nyvpGDDH8qLCigHZoDAVrDG18ZWVnFri1v7CJSUm5YJSbjdyimH4cGXzRVJbiarVYGge8sv8v7awLHnPLc",
  "key12": "dfBeF1PfcdpzLk6dDbXoG8ifGA5MnZ9VSw7FwgL6nVSes468ziDCvm677jCdiLmLpvbHTejp3actzLT53Vqjr1a",
  "key13": "4GrryZHqBQdCsQZCYcNQyVvYy9FiCBzxfbJnTanNHZRgUCczCBXQKFdQhLftuzJVRBSb4rQCBbQjt8VbCY6KVW4x",
  "key14": "66TPcCNFHf62RJZ3g3UxAf3HCRCftKQKqXW1CkfozkvewnsdaSsgYNNgycAAbt7XGSkBNTk5m5hgAp2XBHNXh1rW",
  "key15": "JxnAEce8qDypuvF17d13hr8451Jp3yDHfbkiduDyKmEMnuB35pCMgczNUjg2DsTp3B7SCgi7cGQ5JDNuGxPa5jn",
  "key16": "5baUDKqg2fTPwCUaAZYvjHoNcSzmWRbjdH5UxYvDz4YWKmmkC6LD1WP18p8h5Apzbh8J5WuBwnJPx9Mtfi5xcMEu",
  "key17": "4BVtTrXbgjcJAksCMGQ2ceMZGK5M3wodnx7JtbwDRCsAkvQiFzfZtD6aHeN3X9LWtKF2WGRBVayVYGDgD8onFvfx",
  "key18": "3rJYt5cFBaHBFSqdo1MxVJw6M5pXjmX3EEgmYcgA8TBLFXLYcoBNCjo9crmukzVYRvQ1E11oGE2LzJgP8LnyX7SG",
  "key19": "4qHG8D7ur4kdk7ELdmT48474PKNGAuaGzaB1NEfPPBGZbhfaHU1Bv7wn5saBUMpwfbGPEdKBhcDpL38b9bEr2dFH",
  "key20": "2FGmtP23wdAugMaN5BTRBCpsJTYpyhK7Pvo3KwzRoMP7ZtGZ5Hxfq1hv37BJKGPuhsoDm6YVamBfCwG9bTn8yrpU",
  "key21": "3YmqRoScjifhyqFUtnXRHjXBEz5G4siBXeLvVex1tKYMCNnytVcZiUSZ6q3xw4LTArEZAzB69PG6BKPEfxooT7ZW",
  "key22": "5p3zkph5ZEPuB5aNegD1g2CDew9yD3M2jyyTY8CHdSENePQJApchQWXNbKZhaWejysQ4p41Vm8bZKdh84MAegmAu",
  "key23": "3r1zC72ZmT2tMwYVe9tsNDaEqksVCnwRtKhAZf3YazXKQrdXDZFDzq23R33P4gH1J3qD2M8CPztMNUkhXX4LSe6d",
  "key24": "2EbPvbtcmqbXeP7bGbontA5yH3eozcEuboYFSgH45brxjTaGwUiv8Digh7Tj7mHM468xXemPBThyEUPdYL4jYusK",
  "key25": "4ZtxXjJZvJg5zWthFtcDKY7jWuHqVNaCMMmyevD2EaFNRnMKtXjjYn6Jj2gcnEkYhvbbk7VKXT6Kov5uyCTQuy6n",
  "key26": "2xR9qBVDWkqGMPF2QprwVgpbMY45DGr2DSy5X2tDKspBd9ZrzvBtS3TQ6MiWs4dLFjMki8rsq8YkGK3Wv96UFoST"
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
