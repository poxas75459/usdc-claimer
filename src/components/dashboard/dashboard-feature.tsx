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
    "2U4GqZbSKdMd7ASdXcVNzdVzM4mTLn142n8ZBmb3fXVbSu5Y3MkynVGDPz1J3CMDv8mLGmF4Bu6md7YgeNtS4mkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3geNbLyDvMdUDFGhbTtuN1tp3JmaLe8SPzH9iKacC3YhrNxzUPKXoZLSBWQDeGMM6daQwDRRfMaWFPTwrD7TcGU",
  "key1": "61Hj9nsAUAjvsGPTn5eUC6MRVudWRSxRo3ZSMyjUzumicimNiwbVdcnPFiQ7W3GHu2dxkv6uFh4MuKTgZ5UGzvJW",
  "key2": "21sJLTgjwP2DaBP8rGizPEYyMpcFvWLKm7zfVEtF5z56bxWVDWP1K3cBL6NdcxP2DjUidT2UTKgKbkXVrjFdiUwp",
  "key3": "5ye5RkHHepvVkYoZhh6wX5R2rdFu2m3ymUV6D9xrgR1xFuccByEtYWLYTxfJ8MQXNUAEtWUyaGXbgjfJ5camj27Y",
  "key4": "5JLbQ2TYZrRFcrn4jiWM82ZH9c1Bo1W7KMpnZrhvGhrHD8YMVrhCsFMiV6bmUhEx8aoyQ7Lg9TyaSnPurCBD8keE",
  "key5": "5Wv1t5r3h2BChB8mfSjLC7m6Vh7REP8qbCvkgP2kQVwRRagfYi1DqCfEZqVTP7tQP2f5519oJhiAjGNqqWH58SRD",
  "key6": "52EZ6BN9zKxX3GpD2k9Sn2q3stBdqinF1ip3tWEk8MzihVkgmHfqHzHA3HxkYhgtNPKWDbXrYdF1PQTJLFHeLiga",
  "key7": "435drDWcRGJy6guEvJN8zpfwjot9VZBPB88qFFGNj6NLEE8G7HwA53T6ADdme9whBZP9kJdtxc1Q7jv7SdRP2Ub3",
  "key8": "3nEr1aVLCtxxoenfnXRFNA6zJCjCfNbWkk5CXeZMRERDsN4Soe9k6NzpjT6ez1iWNSh3jjmMSpJeMchCpBWKCmdG",
  "key9": "2o4Uqvxqksx5brpVQV6sjiGq4sobQaJerpDLmcCETdtWaHWbK5akdgZjAyCRCwLYSTYuAL7w4LwJr9hyHd7u5qsV",
  "key10": "Yy3LG6bjNCv6bsQWpXPkbsyfkekBoynXhcJ2f4kkL3ejwRqzQFHaF1tPJXWrY4KPA3B8ddTRYu3mqYVbMts4r4c",
  "key11": "2m9fVgwBK7CLHzsDATQwjZ4FwD1iKwKYdZNnT7MQz56JKkFk2nu4GSqQ8QGcv6c1ykmG23fn1no26Chuh2a3EkUp",
  "key12": "5iFYUjbyVC7RQ7JNSgHPiq43Bsr87SVQJR2kRMrssppRdyhgPhgY7ZmX1d7nNtYeX8ed6FkfNaEXNvfkZfrpCfSr",
  "key13": "5iwankYzbqDAPW91JkKcziXy1BZzoQNCnZkya3uUHvmSyxeDRfB9s87BcrwUUddLD3UEXomwoz7uiAsRSd16V4Mj",
  "key14": "533fg6oka7nVuidLFtgYpozcKfGVJfFmTfJf1v4AQDAXDtupEXmAi5FsffH7tHc6cRT7h3bJoWzt1UhbNJiBrzwf",
  "key15": "2K96FYFSgQDndkRLqr39zAVfBbg9Q3nZFfz4CN7itQcgdZo3qFD4SFE3ZTo38yxv1tgrjimEqacGv22PHKYGS5bn",
  "key16": "25b2jKSXhzpy3z8Ph9s3Do9oZxghCncVPg1YH4DiEQ2Rn2RvP3XBeeeme2rAB2wEg48bdiMuNei38zVKQNWc5e1P",
  "key17": "4TaP19DM8Djx8bTYjCZbMScTJBAMV5KMvEYph2XK9mvdoz6zi86g1PrSgGFyWLj1JxLBbMJbb1Uw71mC7cooiKMR",
  "key18": "2Rj2s633gfnd92DjS9wXbkro5uZdpF2me3fkyZdQ38NgPoUdkZDEN1LHofb5LJbDEeCwiYUZRf1uNER3WAVdZQJE",
  "key19": "4zHfJeUR6fUNDi8TyEbp4r9y61o49AtmTNYGaRc4zgsgcPYCbbpxttPDSkDDGmBuVzRWM91im4vygRWwfCHM1GC6",
  "key20": "rqpyszE6jxd2Z1uTrbTUMqZRDSDWXgVttBoN436XoUe5SpF9gSpH4PZiKjmA84bg82D2S681DWmzmDJi9arBGue",
  "key21": "3goDT3oYVEJLxH4equbWsn1UYmq4G8Ztwuh2jkEqqDy31LkDZ8UV8yHjXjNLEzKct3xgWFSWKPiY3usgyn5E6Hfu",
  "key22": "4zRBEbjhLc6oqcdbKeBm9dgrWVngiXvJK3VBngnWSCr651GhpafysK7vzfCXFhXvJimQSNAKSUQ2kWusNn3GYBCP",
  "key23": "2wMms3A7ELEzNsd7uCZk1keJZiarfB8XmCB4fHHCHfaFiNGUBKUoUNGCk5WFvxuhSxYSTPHfBQ97CENHz2ogwr49",
  "key24": "5BKbaPQE1kVBCFysSHbBKNqTcx6FMJL1mKGeVKPTiFFdxBG7zmMy2Zke5Fou6UvPNUD3vByFGHxvwhbhsgPVkx7N"
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
