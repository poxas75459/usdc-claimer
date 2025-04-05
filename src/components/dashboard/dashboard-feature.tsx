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
    "3QTNL3Bpzm6G7oQ8ehko8Ezv5WrvBn2JwGnHU7KtgKv3d5e2hrVnoWGREogJLqFmocfkbzkqA9V8577uJqTAtpTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D63D72fnhN7zKMKwjgSY2PK5zzVpvsi6U8tgMkFYVAy5sN1Jmb1wYQjF37ZXEMSLHViJP7Xb3HKkdLBp8KLF4jn",
  "key1": "5GVNvkikTQLfyFyET5xBVGDhJ6xMhzbgeCou44VVNFwRRzPXJmnNGEzpPYCfD9zSYuvMozRVmoGeryQCXRQ8BP4a",
  "key2": "2xC6jN9uReuXTtQXKhiVF51Vn3RKbM2uRZNBBMYVqyx5FuWzGz2RiZpbMLAGx2EFVUp7Tapy6pNyLrJimSNt1sLJ",
  "key3": "5Lfdp7VADWXUCpZ15P9Voe7PvXsomfXTHajEPtZRNq4SCrxfvnEE9FcGarQEWpPuh6w7Dara2fzVTSUd1tnPxRfM",
  "key4": "2CecugvXpaYCyLDzm38SJ6jDrc7bw6w9bYUvU9AkhVtQL3j3KMMqA6Bno8zXgikwkYwcom1Y9dgHRZJazer4MK3i",
  "key5": "2esTU3PkSE53Srmm5UKTFHvAmYJV1P7t8sm1zfCwMuV3BNFJvwmrbca6LCTWKi2BT8pfANRvSwXspsjSoxozZn8G",
  "key6": "SPDKsy6tRe7fmpBp7yZPtRUEBGzWTR11YJJGdEfcHXammWaFru7etpF4LQqnXyD4a3TtnJiHdLRhqA75a1YTV7f",
  "key7": "3KrKaf5aMQBWKCBwb9YvD5iq89d9cSnTCtmMVHV8QpvCFPwHCN7w2JeBm5D6hnurHZh9fCPuiF9UYQ6vTGPqG4hR",
  "key8": "5P7kVN5sQrH4s7tvqYkxEZAE6RQb41dAAgV2c2KttxhCCNwWrzmrbn8Ufh6DbYANg7Yb1HsfaPvZdUyKEnsgLBjo",
  "key9": "314i2zKnfMcu3e43unmveNSvHaqyvrDVsXiSGLXDRMTdTtLSiZfnmxPZoP1FTNC8rC4MmsNAHrN6XNZXiFWDFdms",
  "key10": "54NBKBYQruK2fiJEomxScWd2tPsto2fgVVrQtCy3xMkCKcVRteqrSNy8LM1QAi7vCx3WjWtJhD1o3475wwRdAL1R",
  "key11": "SX6oyLrtDpvZ3GSY8BSccRpsunJMCtzAmpt7AVE4tiV14GhhdZmrVX66JDSJuJ2gANFNSsYHuEgC2FqZt2TBh8P",
  "key12": "4WeM3zofuQs1zY7yRXe9qffm3ZkyPbqD2RJpTz65uXN2ct7BwyCPRY4JKWyiMx5gvvjvBFRLjfUHRCx2UFB5zcba",
  "key13": "5ycfpBJ2wZYx73oerzuKfgoik2KsAq5mtuWgb65ESfJCS9E95VyfzZy5UmH6JSZdy281oUBTxm2G4uWit3C8zxxT",
  "key14": "NJc3yySW8GG2GTePoiWSwJrV9wE1qXW6zKPiNmP8X7cgdywNVupwX8BSAbza4G6xxfJ1H5jkrJPakPffGjHfJVx",
  "key15": "3AvVyMnsr7CDchy8YNCfwZKcmHbhpuamiV99kLPJ5Y2Ce19KektJkhX7SYgR4dZMBQyGnDmJ3nGDVoP23Tczgd4R",
  "key16": "2eeUkfaC4GAmCkHrbPwinLVfVvd7hVSTfkcUywdLyZZQECtGBkJc1Y7zzq9cq42MRr2uviyBFV9NBQQrfU17KCA3",
  "key17": "35nNWvujekpwD31pZNtJpZmwRxscjYN8PMbtLuS4UW2UBHQokLHYYAfG5VXkTW2AGNjUd7vjh6MuHkMj4g8Qx7yq",
  "key18": "2CRrhRsRc53jYrBHPthxMdaF3Cvi816D6frd2YACRCsjJfMpszg56dLiAZeZQxmAZrx6hkbz3u9amgmPM6wKRukr",
  "key19": "5BKozQNiJr3gzeFsax7kfiWHiaYSUD3wipYcSUm99GGyMNtM7p9f8yejCNrXMfp6ZzqNXyWzvZkW6n4yg8swtsh1",
  "key20": "42ULEys8hEtHZCjFAPbdHb3LbxFysUV6kvArzTvWKu5hmfe9K9UaTbVZM2Uf7LnhxKhRMb8gVStWwuH1eKd4DYNt",
  "key21": "54hihwaVpbuZehFNk3eUB5NrjaZ4Xzrhgx3g2pngZsXsuwbeuFVPaAzHAb1X9NkA99vve8iGQ1GCkbLqDVP5C2UG",
  "key22": "3TQUgp7YEnrCAKBPbx76JXh51e1zMNGzkvd3kpSBh2vjauorzEj8qpCVG2nukD54Vu8DeY8jLQU4sidfrFCkbHAK",
  "key23": "4L9iQDbdXQrekwwFGbG6gLZYqT4hxQkwpVmJYWUzPHNPc8x65mebUiUPD8MDWeBZQnPissThSSDrxgWQCdUDDJeo",
  "key24": "rs5itdY47bUjWZhJcyr6BXcsbWZpAJBspbNguY8GJoyZXKsMaayYqQhMwivK4GDKWoCy9FVNvt5QwZhS4uhPZXH",
  "key25": "tm16ASdtn1YMscQsNLpgdssdJPiqfAuULa3qaf1BWKSXmxMEWqR7YwWZH9RbVreN8eHZUqbLLUHpmRUTp3ZdkM9",
  "key26": "3xwLNEg2WSscEvMt3ki1g1sz2N6s6UUiTvsisc8bQhQH1VRXv5v6hXhWuw9LHpm7zh7hyxg7x3MCyykuscZrxhim",
  "key27": "oFUEKg8k61wtv3dgfwWUDy8RPYtHGCqbe3hybokszZdr5T5ndjxHKhv1f8ghXh25tYHX23Y3tJ5iDz7D6CbXjc4",
  "key28": "4MwDU24XqJvUTfduZwX2Msph9dMgv6XZPg9RUWmFyN44Ek413MTGpaNYyRUFenWhWjKiTMz7Y2VEC6nwpUC6fuLu",
  "key29": "sDNXFzEwXjZG7eb5Gmws9LjH48xUWiyyf65cMPdzAKBtKtVFawJCkphzC757KqcDUNBui5Khg4draXzPyPxJXau",
  "key30": "41QKNkkLMEak49ktPri6HDxgWc5fikFtU3svGGugdAPE1dmPy2aVCFTQ52zyZ2sRPMS1Jpvo4v1AAZGDnJoYwZAG",
  "key31": "b4X2ZmCXW65T6QBFS1LF4RrhZQ426zxGVCo4j7bcdFtYxqiWvZep2KFrQCRC3cn1GrJXAtQetHUDziLTbYx91S3",
  "key32": "4sdnp92m56GfoD7iUrt6W37KJbc7qVmwLFBw1kxAFftomjuPd4nVrW3ZPRG97K4dZT1wiDh4uKPcW3V9XyrovnXP",
  "key33": "4Vk2ixRNB6d9sNoWBViW1uTq8DkETriPFWuQHcMW2hTjtzyy8gMGDjcR8p7karS5Pr4jaFFhNecJjThtvKSLt2NH",
  "key34": "52StYNJD6rvnLn4fnmxt6CSDXRV9cNa89aY3ubnqTQ78SYPVTye5abnNHCGP47TAeWy25htNa2oiemsAz6sbqRFr",
  "key35": "3eoeAifb44iLowjs3CTSFF2cjtbPG7XmGA7EPD8GdeHQxej22HzydyA86ZgBZsitMGheGTgEgTvMENwzNWhe1WiV",
  "key36": "3kPk44c3caVYJoHJqddjETGZmT4rJTtDLXWdLBmV1yrz7YJtgz34BzY42m21zqhy6SkH9eE8fWVwC83DLg4PQtde",
  "key37": "5rL5MwLvXY7aVNxS7FZnGQascoCPiPBAcRsnsY5BtrpJGPK1cumDD2b9NWwXqQhgprrNdZZseEW1uuMz529tGDvB",
  "key38": "2AXPQKqw1pnh3VqZPYt9MXryKzssUrQFMymACDUzfF6hYUXZwvzJ79qLGuqwMrs1tvK1PVWwMBzzy9aEQBtJzKa6",
  "key39": "5i3FDP8xxPXSTYELHu8ek8DdaK3p84A48XYiunxYDoPm2gxwpE9DNpRTcFNr41MrCbDY2dp676CawwYZ4647R9Uy",
  "key40": "4gLVyfQeNax3YPwy1bniQ5t6sNpLW88SAZnn3ne7LduNL9ZRknnfMuBAoBz4fZnjBtm1Ymg9ZHZ4k8hA1SHjqoMb",
  "key41": "4QZDL99y95RTSUSAAAdGt57E36oxLZUbArzYuYvjWvYe5Fz6SZ1VutW27X8JKbBj5zMoreNgSPe8oZvHvc8XpFFL",
  "key42": "xnQCDXGoBYFHcwLQnFrNztHqGV2ENkDCzwRP52omxTR5DLA7fhf28pLtzwZc2YQkx6RHJaKM5t264w7GrNnHxde",
  "key43": "g6ZuzHijRyxn4aHRwxgjXdu3k8QuSafZtRy5pmJw5szC1jwMiuN1HLK4JNmg2Pi9ibN4TN1G433qTN4BBwKps71",
  "key44": "5k7bgX9h7LaXobLPQt2qqubmhh6rwo3vutVBydq1g2k7hm91eVTFjMfCiz39q47VjA15G95r2MNhoTwjr2amb3u1",
  "key45": "3yQWT2rX6xE5SbueENkc7uVacMaW6uexppNLFHPBh3aHWq1wUyPXZVvNpU7vNnLCCb2pd6vmtLc7HJzWN6NrSX4",
  "key46": "32SeV6xhuyZdhreoQQfTwEggjwTehst4bfo7vtW5dqyiHUr1xKZ6xXXWknNUK2LJm73mRCu2pr32AJDPBHXv5dtk"
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
