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
    "43ckayGoWw5NtqEC24hrHAv6eV73KymU1TRSFQJVNX3NRWezsTXwXQvobYsYMdkXqAUjRiScWCfBYbbDjfRKoT5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vNACUyiX6RU5nNPcY6Z96myo93eLNRRdz6xB1A58sVqhf4zFVF6oJ44E6seAzHJ1xcZQXmsuyd5XACLgdfiacf8",
  "key1": "4Zxu4wMGgYBg1kKGLtekNdLYG4KxrDRVFz9MSrtJh6Ws1ZsAcZ1h5nem2PP9EnkSjowiPAkJmiuaMA44m3jJ9hfw",
  "key2": "5JKCwWKiRkwqA4vBiNwVmp2y4XtFtwz4nM7bPVdNdsnEQN1NzUhH4kp5oxVqsnbS2rMPPwNj9n2TsS8pW2frg1zy",
  "key3": "LxfGR6N6y5Zpjdq5wpv8MSeGyayeo3dBeY782TKCWn63cDTcDbPAJ8JwEzGEpMkYyeJeKW2gMp4ZRG2cPNT5LzX",
  "key4": "5bk7E8qKyEpSTU5cMSfRqd9P17QF6DZQSp4sovzAYu8HSRg4MdgQgv6gsALCKR2sUFtjJMsyDHUhXuYTWjAj2i2h",
  "key5": "3QvNf38YPjoKJmaDrCKxKz7mbUqCTtbXLXeMrMHs599194AdndAcP43fWPLzUvUEmmgKRRUpHspnVfP4WdrELqL2",
  "key6": "28usS4ecFttXCWxz5dTMuqT1pLAHqGC2GJBa8P1QcjrXphUwtqdfUin4Vbb6xosqH8tUXZ4r3QczoY1MEHpf4aev",
  "key7": "5sW1S9mhwXrkWoWATPcoVyxBf4zzhhxA8rrhhsXHqfmJEbXVirWJta5yGs2gFE9hFqR5SnCAFAMsV5r2ZmLkpnbJ",
  "key8": "6EJ7h8n64cAzJj5HFZsXYGRLjSbmwUn5kaCqCGaexDsEYHPsVivbf4B377vNxeNZfN36jNC4xAeskeQDHQgCkaY",
  "key9": "6dzVmYiCrgdiDJFQgagqjM5N8QQP7QamDjVyz8J3TQDHbsL5adsZunK9QHidafjY1rBD5naPTeazJXhyHHwQY4B",
  "key10": "4ZCQVUG8777cVj33CyKggTj66ZLNqHaK7XBrhZpimbqLiZ8KsZrrPz5YGuVD8X62goAEigugYLzZBnoX9wnQtmHA",
  "key11": "4LeiCd6tP9dGyNHZJs1Cu12ftCFdkcKs9FU5yLWGTGXWLsCTeJeYachmS1YhUx5QSDVMccNw5Ss69rg7VaxH1MVh",
  "key12": "4hX72bHkPraFg4QHbW74CB4QX4N51dfgQN2fffbY6gB7A6aS3LSn3vcYDtvpg4x3fCjCbFKMQL3eDpuH8dVHzw5S",
  "key13": "3gWeuaGMDyTsibkzaMHKMdTqhg8XVPvFT9ukW4AM5RnZ3NhebQgnaiekoJ1isFYwe3tftzUwexLqv9y95U7j3YPV",
  "key14": "5GFM6oSwwXcESvkn6Vk74AZ7FKLyxV29rGqgByFxeVH9SfhL6AvQaxN6VNznDSSMx61Ri6DiXxusNEx6qxRpwvgG",
  "key15": "63537irz4G3FtcGn5hSoepfxLepsNhGfD3JoXi1mkB67TnkhEtZALGjQMPHLfrwPsnaDTPUnK1FhRLkboPBTzFGd",
  "key16": "3GZMr3sXLtBUiMZFeWwQibubqGuzT51Av3eBUMo9TLtQ37sjD3ESeNS2PLqQUf9Vg1DR7tkwU2Zoz8LKuBceL9pC",
  "key17": "4wsuBfXxtQ7dhTi4NSJ3T5jCmXd4Qn46Np9MgUh886zC4t6vhGLAdTp1wzUEJCB3S7Xd9kzbYzqcxyXAB3DPQptC",
  "key18": "35VSdT51tdddJhc8r9P4rCPQFfhq8PKWzfTSbrVtE5CArfcFc4E3tDsd6rjT73FN9kuLh88EcyuixmaZa4uHVVNg",
  "key19": "4a4H6nsaauiUH6GMf6r2G5UbNWAUpfUgvFBnfHsQeNaWevmmTF1FJfqa4VqLJiJxDECuVe6qeGkKZH8zQJNqXBuC",
  "key20": "5svHEtAQW2FtN4CTx3G2UGwaYzJRBCAhuXQW9YKku5BG3CfVfXTTjD7a8PG3hzKwjKjpqcWfLXFeB8qiFzp1sAAc",
  "key21": "4Mcaa8GkvpHh2CF7TyZfmRxtxVasQuB3wNNfQLLWgnBDGk5eECMqZmFJ5HXLtWiFxMFG5poKBuartfp1vUgfGgxm",
  "key22": "1MC3Y6zRhzMUUN4rGynouHdZGk333uxzpbeANX2SRsb9T2LqVYV4WgJSKjZKyxZv614abdbvgtC8NE928XQiU4y",
  "key23": "2BPedWJ2ALVWK3umUM9CxAvX72bBAi8jvyPm7Fyq7N3LLP8EDV3xZg82TbJjjVGDQsq9CaKBz5Grm8EhjzcKgJJp",
  "key24": "4fPScv5122N4t1ChnygYxzEysi3SxireSzmRiQMJKtoF9V1ME5HJBqxka4Vfczz3X8h3JauLsoiB9ksHGJ9c3MUz",
  "key25": "5bUSe17BjYHEhdqideY9PjXjRSiqQexi1Pqn3UXTN22B1CKJQsDqreGMBv2KWEvgRBYnivQFzQBMEjysNUbSFm2P",
  "key26": "4RxwGppAiu2x92Fn9K6gh9KTMegefMnutsgXD1yFGTFD5ngykDkdH4rUTDH8EWb1GJuf63kDzx5uWKsrjXsy4BMH",
  "key27": "3JUiwgApursL6H3JMgqm1zogUKQgVejuH1eanaFecbhcvZ5znQUVbV4of3CWY6pnjA4tAJMmQVk67XL7kSPkxnYa",
  "key28": "3z4QNU3Qh1DFu1RHGiKZHUqm3BGwqmjQXDN319S7sBrj55iUqSs2ExwognAeKo3V5gMyGovyLdTwP3Di7osxUgwr",
  "key29": "5S8KaiFr6fFZ9VqZ8iVp53vKHMVoiUqLypyrmm5mHtdjgNZRcEkAXmeX5DvJ7TMnHt77i3pJA23TaziWLzrn5Fg1",
  "key30": "5c2VmeieECmQXwgsawdTu95PXSoRbTuFfW6BVZuVe837gR3YvJhVMTNHQRWQXzbEAGLWx9hoUfD85i97Ef4H8JTD",
  "key31": "StYziaJz3qCSP3G2V6NSycRfuvSiP67Gi7QA6jb14HFvXF3uXHSFcSMYueTB57MSkPeZAeFLFR9M9j6Dv1atRiN",
  "key32": "dTRTwjmc9s5MMKNVPw6crA96z9yTG2HFmtV7Y5shHhU7mJmdYJprnQWgLSSMQ25sKGMyTDzy1WerBLDdywPjRME",
  "key33": "3e61KP7nDLTYf9FjQJkqMYgNmFWxyCjEHfprtoKPHiX6wK25AgKUVCgtjJy5pufsiR5GJrph7hHq5cFKf6FYcnJd",
  "key34": "3MzkLyyKhfhG5BBDnbH2AX244ccfK2dAJMUMjF66ZahV8esXUvjC1YnazHN9VfTSD1rmL6AijUJDVjC4zd5X919s",
  "key35": "QdAZhFcXW9btvWMdejbtLeSot7CBtrmihojabr8yhcJTiBYDkvoY9uZE6VguSM7XKXhq493SnG8MnzcawJvWvxc",
  "key36": "2S9tKnKmSugsstmMy3UU4zDLRNDLBBNb13MDaaTBg9cpManzkobhdYzebs9z2oHzxfsF8yuk78CHFYkWNtzAiUy7",
  "key37": "4T2vr6WYZJxhGsf94E9K3a4g6zpQxZ6Wo8wMsfcgSEUfJP88E4dhYzPmt1x8qLFHDwzdBe5fKRUsU7ydB5pfU1RM",
  "key38": "546PrKX261fQ3sUnGA44qQ7kcBn9rRApi9uF1BzBjUhoJj1xxErVfgjdh24aTHXAHqEzCu3a8cbPUuWeX5yeXz5H",
  "key39": "5awgRRjst5RRnG3jQH7ahSJ8AKgGbJ1PE8CKTkpz9zAmC3xmBs271v7MnVj1nfcZnxP2U4izhNKwUGHLaffLCo1A",
  "key40": "pM1nWkpaTFG36JHWp9ttYBGma2KXmyvd1THw3Rpi1ebCa3tuf8EcdfzDAWb9a1sybUdH98JWyKd3iTDmLtnZUm2",
  "key41": "5cSX19x25gGMJVbDfY7mthjjMNtYpGQVxSgEsiUjG8FCdo4uEPSmqMe3jggcdkwHhq8QKAnyzpmKAET7qTQbn6F3",
  "key42": "3o2gDFac4GkYV8ShnGvi6aVNXsGyqPdjXcxXz7J3nuVc37UtuRudvgY8F9Nj68D7XXvgtLKPefFtrR8Ya2Fq7ULq",
  "key43": "YsMVRrnmeosZNDAog9ZZk3zmvcc4L5Kutymw4rZ8j11VxjE3ASLrcxnfBW6r1GiC5ZDGkoQKKongKd7bes9QMWc",
  "key44": "283oqzxgqpk79FX28Y3q9vFEU9B7W5cosEhkYXaEwTpmhXGTzPN6fi2goHRe7ZKmaJvVBJVVD2nZz4KTLrCbF8RL",
  "key45": "5nNzBGjYRCQeQaUby1gZAazQFWMEyLrFfSF5BcgeNAj11MhH5ku4MM2PXdd78dEweiMmS5gEagwa167HtThzpLE8",
  "key46": "5X23EPZieN247Z5Tzd79NduXmDVszPEofsv5rCHfFgotgfajYevZMA8povjcMwjVo7WFsCvaPBMeR6e4iY5ErMv7",
  "key47": "5EckRiByjjYVSEwGLXPpKqFebkmvzG1uxUGm7Mw88L3XeW7yaV5iSELw6gZicxJfGuz7xAvsPP9fJS94MyhaTs4e",
  "key48": "5SABWJiAVbt981gTASr1JWA3WGNyxQUshb1GrVQMRdakLiXviz532efNGb3Pz6bvs9DJFpL1YA4tzVVZ3KKUmjmB",
  "key49": "5eWPJugJ8kfBJZdY2itm8hUBKw42jqgf4bcMnNWawn7BH5Mc3pqw3eu2Wdzi1ignD59MXefupi7gqYy6szQrvdGh"
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
