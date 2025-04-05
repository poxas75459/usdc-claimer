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
    "5UvgMcr7G81RGpZdjTYubg1KhxeFgxrijrtNsJvG99wTqAf8yAH2BGPtqa4zCCmzV1nRTnVb7WP8Xmzuip6oAUAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ZMp8LgkRFwAC9BV1rZHFKuHPtokEnvMZqNmUfvypTtry9zGT6a5NNSwwC5q3TfV7G258wm7pdnCEamfugeq5A9",
  "key1": "Ke31ReXKDVtdEmk2L4kJMDPRjH16VS9GQWndUcC8evc1zoPhnkuPxmPEVTzJf4wHe7ged5E31iAMz8wa4ch5DeJ",
  "key2": "2hFFmPcEmGKYPq1fa7JubZL8iBfNPCsCu2bEEqNYqVYpZsrbukfiShyQn6zNjBF5pU1m9iu6SA83rwWJQ2EcwRmU",
  "key3": "5LZ4U4B6JRQFTopc1Srh7wkHznkks5EdHqK1xQVW9KJduUbG3rgMiD39swidTGaw8z3BQUgD8Ax1mMVkhwUBbUxJ",
  "key4": "4fnmMTMVVdk4cNP1CPX4V52mbacwn12EuyiRxpdDwbD3oxvewKfQ6V7Daz9nTDQQ9D4Wu376yvxtCqnpdwRvTfck",
  "key5": "5d7wwJwBwXSjQRwigCipicdwwpBwSJCvuPqwi21bN1eNiUh7qqSZLhVFYqdTkN21Sjd2cWwU7qz4BRfKHJmdgWxQ",
  "key6": "3AURugtAqmLizWXvkDmzr3nSLdaNbGYH1HN6BZER5Wz7vsc33r9Z2HCMgTs3D3hd7hs3Xa2oH5Az5VTyRxuiepRF",
  "key7": "5eYHeJCFg8upE2ppwUr8RS4Eo8qYChWMcdGT7G1XeSGRorDYzddJLGfEa25WjTK36uUKpMWNu6c521MgsR4UuCY3",
  "key8": "63jbPCwGrND4B6tThRed283awWPeso3qzKrwB5AiFdQTFBxLcoJPP6juhGC3aSKagtZU2khF3QLvyXBfKEtKaEd7",
  "key9": "3W4gMFfEdHJLjPwzPCNuk6Z3ARPpknFNxtHHVefNnpjVKbuW8r7XHpupfGZ4tdK886LnJkkm5zcisg1SUHVQZUZ1",
  "key10": "66gfWbkzUuzLuWxnTZp1i64N6zrnJJTjwA1uUMgTgR8fe7FsGpLcskbZfgfJvLdn4GVPRQQa9cwyPJDTvZR8buPq",
  "key11": "4cKgb45bztRY15cFM5usWydxnowu71ZZ9WX4Q61osAwT1GmgXFxQ1sRLog2cYEeNmaAkJkJmKcFtsstvqgM8zHNG",
  "key12": "63CRYp9s7L5j5YmeJRzbGpVWBDenfCLZGnn14MQ2vBu4DX8nAjvqkHBymvLPuCoTSnGAg5K7nT6TRGxaptkFKzUb",
  "key13": "4w6G8fRawNBxBWEs7zgL7V962nQZsWj1n54fpvTG6XHxJe4BCk57pQxdxXbokNWiZJUtPxt9oGnnEX3hDWu57rJT",
  "key14": "4ZE1uJ6ECgkyFHUuGui8Mih4LwZG6g4oy1o5QkbQDoW7g6kBBushhAEgLhBFbCw4K39diAXf2JjdnKnEWFkFracP",
  "key15": "RRok9YdDRRFQfah7cHeHiyhi6AAU4JCKWJvZmepWPUNPMj9NcG4DSgMEpkwPWGjCw7ZFY2ZuKBEtcqSU4ToR3Lj",
  "key16": "5WExXEpiNXjvmwbBaT4e4Q9xM4PjwwQxKLU22HdB3ZBhVjtoA8vjD117wZ7jzkrmAhGmWjJako1TbYSB3RoY2gt9",
  "key17": "54vfKayQ1Q5xWm6BwaJevV1vzr8xiMATvuVchAEP4HtQU2qe1zMtYSWT4YNqNaHwXGbBuDpHqLW4VjF3M9ahiBp8",
  "key18": "e1YQarvFFUtrxvLxkJkmqf62RZkMTmLso79YqaTsPRFkByEdpui8WMztn9z5ifr6ARe7nku7mMoi726fKdThL2a",
  "key19": "2zhSR6p4wbgATQD3gRJxi1H7Scq4CfAnwoxdnv8bE8LUis6RNCAXTWzZWo5cL4rGeCBJR4QGtgzbFPwfFWRU7S2L",
  "key20": "xDb4CeBtjtGQQnbXds75mBpbbFd5PLApuSsPx6FvswfiGSBKY1dMiT2rsLyiwErpctVLYtwvVgPAdbepAhFozf5",
  "key21": "5g7biUmdWzusH8D3gK4MLikRSSor3PK4HJ4A72gwnmJbP8DJnbrcCz9DJMg9Y86docnbzThHSnzdeuWKR3jo63xe",
  "key22": "5WsjyXm1Y1hGYDWXG6Lfsaf8gQQqqcA3DbeLwsHne35Z3Nz1NEF7GFCNKHHFj5jkEjzMhdQGNb7EsoJL8vY2rTWa",
  "key23": "5VQyvAWayqwfPUzpTQKT2A9rBF5xqP2ksPFD46rbWjBvpoN8xtEoiLgaDt3H3DVKCoEErmCPBhVLDrsWe4D4k2vk",
  "key24": "4XpTnRapeJL1NCbJiMXJfMe5t3AZaSekwUZabS3xqPDAjupEtKpT5ZCtFnDGQ1qLoqx6uwMckneauSiFk28rQFxH",
  "key25": "55JUBEjySwVo3AE1FnVNzR9LwasboJZA6xgynBy2cs5vFkzwAERWu8upNgzBEhBUJVUGAJDrdDbnh6kEnFZCYEH5",
  "key26": "2QgmsfVTfQ25wVLgphaJ7Z5rhTaaUhWaaWQPwxW9Twa2XWYfa6qvmFAGxYwwqGRduFe5Z2X2rFeUKcvUHoqNT3km",
  "key27": "4Th6B3jqd1DciZek3oiC5CF42i5D8nDuv6ZXzePwu1typV8Wok5PWJE2xgMtyGLyZXhdVTxTFe2WEoidPY82gDub",
  "key28": "2mjKEfXd7KnyaySDwcSLgPoHXnku6LymfoyaA37K9RWAy5gfZurCzs3Ha3etd9V2vxGYjuU6tabthWtAAfCbUePq",
  "key29": "4gGA7WzC3szM1bp63DLnNAVMbdVLaM5a6qDiZpCuRCaoisHadvKqqhbXxt3KrhZyAbpYzNes8kaJ6PMh8ATyeuU2",
  "key30": "3evJfVzV4WQu43eMu3HuBRdA8FMp6yTTdx3ZcrsbvEdEW9LUgNx8SgncwNu7GKCHwuX2aS5vgYtJiPkXge2ekkv3",
  "key31": "2sLZyvAKAgLn2DW6aCpZx3TBkkJiCAnmTfpnYar2yoD3mivBUUFvS2f3Sq142gwvKUE7zsZufBrxNJHNdAUv9hSt",
  "key32": "4r1uFbKgiGDzy29juGkDaMbXK5KhL8MGxqT5K2reVu5WYe8rNJHL3A3wHqKcwuXHhkrsmvd8ynm654vcaijYQ7zM",
  "key33": "5veXz1cJ2eanNUSqDdAAUYXHQ5kRTSZMJebJhD94FT4V7uDqKe8XEvDJbHeFYAc6iGgBfJUx8dXhds6QkRx3G5Bf",
  "key34": "1RWdY8zmp4Z2mwdxSi2fTueYVqJ1pxsZYei4H9pnMLS4m2S58PTGiJLqihMK6G5BqVNFE1CeNNFZP1yppFewwGc",
  "key35": "65dT4Np5Nooigrzz2Ppo4U1UamPPYMoXaLS3eF8d8ymLGoDq1azzBTVd93funfDD3G35X6aKZcaXz3b1FHWy1rQr",
  "key36": "4MzgCx21eeo4rpanw9WinEP6sJUKQ3s9RxmJF34GADY93gELuFiaEPDMXg3Rsm74NYzT9PsCYEdJtaCEBzYoUxbp",
  "key37": "2h84soT7ghNoL6tfZKVQ9uPx9tAnbm31VzPUV84QVFatUMZB69fuCYGbW1AG6e3YnXtUVsNu5hTgBVozZ9ycc2Dp",
  "key38": "7Sm77QpK4aD7jc4Wd1ncbguj4AJW9dFJhHsg1qWeskNsdgBnBPFT499LWRdLPKEDYnBZTLyETjCkSCLvcJDrxAf",
  "key39": "25rHqLXzfaXyFxZLGTA6ch8aHmnj9ff85mfKUWBDxnJQVDVh3tG2jdfC8T13FCqYyWvmQj3cTVJ5WKHAnN1KETdR",
  "key40": "5mrkatqbMzwVr9F9bUTU1uv2dnuUKuUyueJVsRThpJSmPbsdJwqsLz679wxPS4xS5NZ22VYnb7q8mN11LHEK5RML"
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
