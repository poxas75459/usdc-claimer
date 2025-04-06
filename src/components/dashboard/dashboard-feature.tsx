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
    "Zo7waqmJ7KrjKMjYK2WHni1ormpyF8v2SZGrK3pGDSZw7QJGvb6c353nr164Q37YorcCQQMyenFUXsVZdC8aBnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5smUw4yMHTbk9bob1riHfAvDJnCsisZfLFK8FdTsYhwa8ZALKM1DFY5ZQzFyJPz53pZ9Dd3KzhS6DctN121Na7xE",
  "key1": "5m3BzMLv2EC5LjScxMpdot1816NYintcKUtYZJiWnJRVhaTc1D95TzerxYVW3MQNQFVtLBdvEcwwFunHdBwYYRnf",
  "key2": "4jY7fQYoTSW9g3ZPZYwfcc5HS98hveBM9Cx8wXFuBXPZMFojsoHnFNXCdMkqHDJ4hy3ztjv5oqLbveABYyU7dGQm",
  "key3": "3oZBRhoyTyjt1gTMnpZG5X8rqyexG1iqmDZJfCrBcgsd2SSQQpWLXLR8u3zB5d4PZFHuC5zYXH4zG8c4x4UV4Aj",
  "key4": "3564PrENmpBP6k4S76owv2MAkZB3gNMnKsTW2LDM3W13us7SHzxW5ffbkTfg4BtvyQFMWesBybT7MhdTKFmjXRGK",
  "key5": "3CGWGqpLcjzVSZnxCSuGBHeScXdz9ruZPRSv7mMWwPXnCDLrkfqVUMrJqNNiV7p99zzGcKVi5FgHQfHxy6w3kyYv",
  "key6": "4NUquor3DwNXy4QrQ6q36RLsCEQydBqD43vw4zKD5gU9P6sCcdGQwYmETpFvvFzSnu5XUuaPppoPHhk22veStQvR",
  "key7": "5nVjmDAnxikKdt2Lp28nxAMaVj5NLabTEsdwEMyGRoGQro1PnsWhw82uw2jgSm9VD4XYPjtmYvmNTgXpbiNejJNu",
  "key8": "2z564n3awnSJcXNwyBBZK8R9bAm7JR88ZFTRRoxjsLzZKk5LwMpqAD8JiWP7pRtmC5ZAciwVGUV1ik1giUsmxSod",
  "key9": "5ZfuzGnoH7srmgoVheudExGNei7j6Kg4p8mEKHoyw5DnKZv7LUobvZubWcd8avzLufJoX8u5EYLmfHazWq2VZLrj",
  "key10": "DWsDYkzGtAV3P8dmEQu9aHNfed3fd4sD8XN6oqAjGahMxSd5gzi2ZjBXPpiLw31Loop9SGgVBCUrB27MkmkA6tv",
  "key11": "5uQNx99R5UaGYwoScrEvEx8fojW25xXHxfBDr6dysUkG3KWxecvtaHSZ29HkkrfRuT9iJom2U1VKoZQ6SEgJ5oNb",
  "key12": "23jko3DDy6DCQYF4tx7MAvZfbTKfyminJJaXWMiUMi6f2zrQbK5tUfRVhaYFMz8oygq1WZ9Jcs1ADnnQjhEQrNq8",
  "key13": "2bTGm4i3QgPYQvdVFgsjvHGyePW7kGXKrDphYexSpvXbsgzyCaSpnnhp2dc8fEDqXqiUSWp4hF5xQ8ScEXmrFDR",
  "key14": "5NLhEbrPuGUYxZEB6mKLB2GJCZrs68dLjFfRm2Uj5AhcESKJA7ctq7gA5ZekwugKBHQqpAj2gcarCUMZdc1boD5J",
  "key15": "4C4U8DgiB28NBtQRyGoSuSuH1jzQgk47J79v4DHDFoUNoCVgTFcKxM75qGXDHUZCUaZjP63q3zzD7R3ubVdRDkaR",
  "key16": "3XafGu42WvkRbr7bhrTXQRM2UnoG6Locv19vTGaLuK7Ae2AQdaUJiLMMY4Q42vQFDf1ejrmhe24hyZNckd95SLtG",
  "key17": "3uksurcRzUe6YTfQtfgvegtXwmPK3UgJK49UQtvTHXE33scoUUwQ9yDbmfeordEdaW54MqktH7A3hw9XbXD7pM4z",
  "key18": "4zc7E6trV4n5gFiKTuL3qci6MrNzxEVsZRod7L2NTUPS27ETJRXvdev2CPwNv8xuifouvGcGcR779ctc56ZJZu93",
  "key19": "47z1krMKN4xm15LDF8KU6LTzTn6uC5vSk6neXERJzyGpVtM3ms2XbNcLbji7Nkvkfv8hjCnEe3fYV3ikKfgc18ah",
  "key20": "3HZCYKLoaeQheiEdJKkNxDmfEcziJQ7sAVZAQDycUkCAVatbvyEHE23sWw6RMf4xC5rkN7V38XGcyd5H8ror6tny",
  "key21": "3pXLC7UcrD76848x88fPYUjiVkCv2iacw55N2Q6Mh3aH2kuPRoxsfCbPeHSUGX6vpPqZUXDudWot1LqZWkcDKTi2",
  "key22": "QKnsgccTdHaWYyJHKddongqGqquxtuZMcYg4wgckCFcT7oGwVsysoAZPpb4RznP62jkCNR4JiZp2yt8zp1KFj6u",
  "key23": "4ap6Txccf4pxmfPTDBYYN8kqdpESzh76UMXvLF2eB86C7Fx42GKrMhxB8681C8xmVeHKH4yMjgEzdmbzxvSXuVVg",
  "key24": "3HhwSz4AGCG98ovJ3AWQ5WUoHhBVX1VPsaLB9sdBnoNdGm9R8Le6nBQyQNNeqn3RC797wchfD4AAte32mBgB9gWo",
  "key25": "4zxNiD3uJY69GsZ55cx9LQpZtAQpNjDpwx5LiTqRuKf2rRyVbyHgjwppsMH4CKnWowXhaZdchFhUKYzUPQGs3N6X",
  "key26": "4UUN3ofJb1tCh4g9Hur54ViyV5hsMBr9YKPEWCtAwS3qz6unyJDxFTD6D6isf3CQdbqwR6BMmBVgBio7MhrnHEB8",
  "key27": "rTGm8YLYxkJJSzjGE7MTcqJsgn6vTkVWpZg3n6JXocHq6yK2uFFXSd2oSxN33PFUsfSambwUCxMujGtxsCYX36k",
  "key28": "3xTMCXXBmpS2t8wUv2YYqbW8zxrpvcdwg5bm2i61ZwDt1mYrC6kaVPo9DS6U4kh5FHDKB3PTjRbkKHjWtUB2SbRD",
  "key29": "4CE2EpBzUGpB7W7wUBYtKyfMyJdppAUFU4o8QSmPhAW5Lq7UtWBHHEd1bQQVJjteizFXN7V9G1iCdBtCwKdrE8mN",
  "key30": "4MX1ZaBy7oS3E7nfNypEPmvEpFjYQ3T7brazSWs5WiDstMi5WyFJw7UiWEYyXKFth35zYpjiRmB3re4CrXdczPC8",
  "key31": "32HP9hVi3M6xa7iDVGaegyc5gaQYdEEXHkHyv3TgFVNK9D2jY1wis9xE5UvCQkhmYr9rPB8yfT1cE7pPv4VfWui5",
  "key32": "2wbgdyWz6wovEJ7KzKQLPNdUcHoR3XTnGWKPXZhzgGMhW1aq5Z8GnCUYCj329Q1smqae1pc5TAm8uLj6QJvMg3xq",
  "key33": "41Lw9RVyYYncSi2TkxgwmPJrBGiu8W5oWJmoEtaJVWggVtpQsTaQ4T1TWJiSKZf71BLonvLNGEAP7iA5EZvjKPqQ",
  "key34": "2HHMYz1AxykFkPx77zfhSdDEcyHFGMxjV1eEB8diXok6wtQccnTZryhwyBhj7npCsBDqcYqSoaBKWxX7S7nUqNWf",
  "key35": "DNAeNPaQYCo2SUvLzbGXdKdHJGGttMvjj3BAYNfJd591u8iT6AitYNNLzyuTP3AXRN3GhJNod78WTwd37Th8fTv",
  "key36": "2E3rug2kJD7D4QuTzgetkuBQuSEAdADHtZJGJS6RqrJ4pBDBnkrYbMofbK8qd9AjPHiXcf4tRcmqSvTXspEWr6NX",
  "key37": "3Ze9h9z19vNidQ8iVefvygxuwfw2mZ29svSuBGSdg1iQaCxaDc691RPHQRXRdfajGKecAY52b2sPEAqRWoKFTJr6",
  "key38": "43vS6vSMH1H5U9UsFDHjrNyfbwPcaybncSCFzJ681rWg3srSXvL9DqZFKMKkdtxVTvvuLhy8Ys12dS3mWDoix6aG",
  "key39": "4Q4khamjBNBkUMPzQMEYSbFBaXHsSV9pbsniC9nBn8R2mdm3m79EaBnVMqFddUz9vUHXPjW1VBR9aZ4ajDADJGX4",
  "key40": "2hsYhCzcPpin6JEjpVjgpyhYLck1j5G1A2HvpsFwJyoRHC1EajSNbaYVFp7DSvQFtn1HiE6yne73ifbg18FTtVH7",
  "key41": "636Lyitk5FDVJUk5cDDFy5VanKBUBBKCuX9JeDEiyyrrfFmgbPvwuJBMxhPj2vusDuZNRjmvMALKH6CjUPNN4kni",
  "key42": "3RjMGunXtT2uznY4UgkJWxVNpdh39zHAbJ6pBn3gLRZhUVireEn4AdRAPbTb2JmgZQKiFu3PKFpYmhrG7YoirZiK",
  "key43": "5marLS9fA4tHg5Ny9Lo34YU5DAkhQeAn6Kbo2McxSL9x76E9zjkwGKJ3FzLyJt928xypM6ySX7yoAy9YJwdVw3V",
  "key44": "3Lxt4F2tJ1sH7ww2f6FRYZbVjLuaBHP6MAxXnrEP9oigFHkHvbY28m8JjhDzfhDxiddi6ngFxS9UKTZAY451VtT",
  "key45": "2oxbRjeCKoh1bhH4JArRXVpbheR9ULYcixfTVpZYdH64XjJs4wt5BXAxztqSVpesw3tz9HA5x64cGKQGRG5SEA5s",
  "key46": "5sRjTbr5KFHDYKA9x6ee89Pwge1wN7jQC3Njn515tAZ59u4VjBaY7ZR3CvFTmaFtzHrdQSAqASA3ddpz4PSnVVHT"
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
