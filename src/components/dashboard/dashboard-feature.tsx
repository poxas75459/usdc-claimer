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
    "wsaKRMRQAhTbnkwwHhedzZMPwz8LTBi9H1zFT8r8HL46KVYdUYzsui3v6hfNbbffdEN4kP5X2x1PjbbENxBZ8VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sJGM5aGuMp4n4AUeLTTi78wKsAurJBHBT5F58RAXSEyXuMepn9G5hRSzFzrwSZZrmv9Wnc7Ajyi4snpuz15HqYW",
  "key1": "2ZDqY5zNKUsXWPJLJA9GZ675aeM7uAavZxj95aADJusYSCkqFdGd951aVgo2dm1tQoj7UhwwrWWwSXMtRmwBQNSz",
  "key2": "3uASptiZ87txae2oZXso1mCtckY1sht41WNSaTs7bXqyJBExNfqzQRESWeha6usPvMr59Nhit1dx6zHJTnj3jh9X",
  "key3": "4VdwKyUX1ZzXJUt4GFpUf7r5kuFcPaixbVCPUt92QAZVPvLQKTFJeo2xsaqcR5JbKj7b7H2GDY18RaMBBZqGkWiu",
  "key4": "4Tjnjyzh8VEW2tRmFB1tBMCEm2e7RRXfaCyCtwX2EeZRbdUeZZ5pQfvbgLogyXXMGJdzy5hsWhFUFtgqjoA7EC9V",
  "key5": "2qNM3uWRRWgXpGxjdRNAmyya8QZM6JxtQhKXZz6z9LLdJU8H4frxAzKi6GFPwjrwPhjjPZTa75zhtHKdP4Lo4Rtw",
  "key6": "4a6jQeSUSXsjZki24oe9ZrTvGoixrSCYGi9CRARrjzZrmwmf7Qbpn3QezhtT958781esyvXH1oJsg5K2RvyGqthC",
  "key7": "341YbF2hhTXjkE4By4HuMFdR1sRqRjKiRe7KkBFWgEJkksPNbX2WKJoxaS7UBmJj7zZ9FEk5WHNhhBTXysRdwmca",
  "key8": "4k9m45nhxjNM9ew6zt2pUpF4peV5UZpN6WRb4rfhDbwvgCTtYWLd6MPQmhCa8ts4qG7cB6MTxgN9uxaw6Y2vxBJU",
  "key9": "4S7AuSSwg7oLhK1xmakUuMahBcSL3nphWhpQJfAria1eoNDszGjwmbx1KLSwrTasnuJcRWvtXXiQFHsyBiRPWFzK",
  "key10": "25XnSsvsSbXEpxE5pBx5q7pwmaEa4fk96zUXHn2u4FFZdBFXgTyNueacJxFvh5Fu5RnGVV5yd2k4L2HvUsuFwkCA",
  "key11": "3MDnLLNQzKNC5z7BZNgEGjDHiyFVgLjRJdeEBFZvbQ639Qam8UMdsJwt3jMBYHQdB7owJzAD7fgCwKV2tmRLxDF9",
  "key12": "qRYoxoDfNSisFEtNqPXaUe93ghZN3jFnAJkdHymkP55zSQW4oG5n3oZ3kFG6Sz1iK1sfzab54Y43GeHviuQy9Ko",
  "key13": "UHqkHXg3F86KHkwa3Uv3gCkbd4a7EstE1gDyybpzaT72UAYq8YHKBf8kZJhLL5gy6h7k1VfT3vg2dNggLz7dW5N",
  "key14": "WuPg2MSBzWhVmn4ZGSRdigysoLpMSCAAn6hBxWsijnvZGw3LBskMRiTv76QDfzLeQJYuwDkCm165f6SEEEkkaQc",
  "key15": "UmL3jMbhixqH1dWzVqM3HyHAXxrWDRtNi9ofntngz9FtqsTWsnzPZnxvgu3JCccFf7L7bkoaNDZVw6mcudSfV53",
  "key16": "5GX1W7snFs5xxxzgngVey3PvbBUUjESvvWHHWtUTRjKFWkhPoUxjtRJ5bMzKrBEGXBC73w589iRtzz9kWyWJVTR8",
  "key17": "5gwBxVXY7ZdZNFuQpYS3oERfaNVNyQ9kesYvzrQiZfAEh5KiPsovFStRPrz6BqD4fUz6U56dqwE5YEVEyTK4HgeL",
  "key18": "5Gkbgs3iN1QvCjeaSMeUjbT733bBSSiqqhLaVAbfobHfkeYZaiFNuyrXjVSef9if2bkjiHtMhHvC3XH7XsMHj7rJ",
  "key19": "2xZdS7Wn8nnwX81xA8ActyA2VDd3CsRxtjkUSkVZRyJMR2si53r9ucUL8hgMpxahRDSTXCvwAjEiTEPN6i1zxXcD",
  "key20": "51hz9kJiTaynLT9ypbxascfK6nVQoKjGLFSLBNWHeSGEBDkwgudVEkRMXMZbupPQ38ii3Dxtu9n7dEU783gMarW8",
  "key21": "bvA5BW51A4JABUax2RZoA9GLwge4nLFPJV5WUxZ9mmjATmNqCG6QyJv832Azo9cpkC1TVx36eACyLJH8y9nvyJg",
  "key22": "4L3w9cWGYxMbq5Zh7MYd8EYh1azQj7Hu7KnRQwLhttFStZtRqhvhPi8PVbERXo8Mjo9c3odg9badwPvnLTC4jmvv",
  "key23": "63LxQsPzsTdncxCoeL6PtkjAoKuyCxWKtn6SZLx4jKJm4RgXCcVA8HKZ7MFPGAjbmwJXG2yfwvJP44psEXLK4UTm",
  "key24": "4jnTTUhSBb3r3ozWNdAxom1xBKNxh41DXu4VB2sTRrbLBMsKC3KNz9uNFr1MCSW2ewRSVwdhLpuTEmRhogZVq2Md",
  "key25": "5GFXSUamu7GQEGxL23M5kaiboLD9x9nEBq4cPRZptgg7BbBxUVSDLyqSqbVUGiXzmG8pBXDxjMDjRHrBSHnHcyjp",
  "key26": "4pDKjztfe51X2QsYCVG7xiWB8hPbdnA2aAj7qWAhdBQsRwiXK7ny6uMT1WziCLNFUEzD1vHR6YYwFc3SySj5PiHN",
  "key27": "3DNAijSa4vrZTTUubcH3xU31MYufPMQLSn1tqEHzyvKmW2298QKuahabJfqxmaoX1RyYYETSmSPWxgMMbX3mWHmm",
  "key28": "SGFo1QckdJbcjefXbHrrNfP2Wex1X6VHmLLqbNtv5uAqBCc252P5xfLr9CfKzNyF6uaxLm8R9QrmdzBo5p8UWde",
  "key29": "5RipyS8wSBpno5cHqsvP6UtudDAMH74YBRZAapwwWQZHcCpXCfk2cFa8MjaFV5Z6ZcgvVNHRNCcWP6xBKHT4A8Xk",
  "key30": "5YyRSYj5DbCBPyPSF9HSPYvumFDPJyFEA2JTpFYABr4BCYZgcGUhLwME8JtqQV7cZQysSGUU2TwMTbcLt77C9f7D",
  "key31": "2JeFA7z9U2E5CF6JwpqYs7qm3oopf5kuyvk72MvMKJ9y3XuKdeXtqGK9VZG4rqVkuXKVNVnbyGPYHZCy5AcpahBB",
  "key32": "63ZgbeG29RhoTVxEyW6XjtqDMPf4DK9tNSxUwYk97h33LHcbWcBuS4dxNWD4pTwnV5qQByHeURdbVawBLiKzhCGt",
  "key33": "4MzWaZH1WiEHQrmE17pi98A71q2kQA77unTAfDX5gPJVzonurKQcboSXmNEHQo8ic74LAFRz9aegDTumN4ERDUdw",
  "key34": "3VnautGT5qeSvxarnHSx3fTbqdrZdeJaJm79RGkjbXHVTTBaSZEgsnKSzYNMMsLxZ28iVAAA46erz8G4Bob7okf7",
  "key35": "29e1HTsuM9Waa5TLhTg7yeio7r7xfrsaPHXaS9BLLZYq9TYcFFwT3TF66Ez77XGan3ojAT3qM7wctAuGpWGCE5Sw",
  "key36": "rK5UGWRGBh9YNu6fbzatwCC99VNGrvUPGEPbsHmP9dVJKwBXaZkSXHQufzHLiStv5UprHUZuqXkz9muA64UYfkX",
  "key37": "KHHoWeAeBbrwgd9zvW6eCXLN6UcSePXotdynFcLbLxhaQFVX2gfshUS6fTwQKNP982QC3HmVTg8sjewCdPQqY9T",
  "key38": "2CrABDHGNB8Z7Men3d6kR7mzPKuZRfjksJV3iYG3s2gWAdX48UsyCLQzTjEbnhx4CNusfMQ6nvk9CS6AZcCW4Gyq",
  "key39": "2niTagN7dTmwqGJVtvZioHaDrbRxBFZiiCC2ZAyH68B55rHnN6gENfJ9TkVMGHxwRXVe4PysdRgxyVeT456YkWFZ",
  "key40": "2YfbLY5V7PbuyZpQoycAz21cje63AZnBSAxAqC6E5saNrJyNkn6TtMPWwmQSM6LQQn1iVEDn4gqenryRoQ3QwQC1",
  "key41": "iL9dtXT4vdhQ9wd4TZELwvqBew5KMuKcVEhRto2EAGj9oTuHsqLFX8Az44Tme9ptLCYoTwhiYm7w2xsZc9K3obS",
  "key42": "4zkpRKY8NPXdmhGYctzf3fvkWHafK2DWPwvkxVZDRuiN4yYDsFwh4NJ4VTiLe7hQBQcMYBNukiaeN4m9EWVzPsTt",
  "key43": "3mp8MMoGfEPHcdxwE7Sjq2DTLJNPTBnM2YSjE4gVG8UgyMRQzxY9kjLnnQz4xS9E62Qk31PEJMx9fL3YXD4n72Bq"
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
