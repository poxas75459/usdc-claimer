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
    "5c9TcZKnVDFMJYpD417HVLn3LE1PNrPMkkBLV3MNV45ggC73kFPDp4rC2Wr9co44QZMhzmZ2SmPFqc2b8ufuRQ6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mpi9D5XP1gVULqnGxrXjVAPCKopFbxsV58VRXShHtVU3DmqPWxNLD3BiYVCzU5gu2o3ffqQixVWA1ToGKXoqB2q",
  "key1": "3gEGBAf2NcUenJDekWDqy728m4712oKtA6UVAn23pDvMmJMoesBCwFBbmuStRx1jGM2rxSQzaYYXAvXtEyZzLHBE",
  "key2": "jnh3nJ7NgC77vwkKR9EGHaNCVQVbAxuxv23Cbvd4ReJVCEcijJfX56kQ5LikrnuBNcb3r22jywgGogKZu3wPDVv",
  "key3": "2JFDkZ1hgzB17uYh2rmLt7XkSbXSm5LGsiNWZtuacp8ntCpLnEWG1EAXvFpbFTKdtsXEfBgJVo6xtsw8i6swogfL",
  "key4": "2kcPidt6bTXT2CxRp6KuzW97Kh7jCateicWzavhPJ3W4qukgKYtZcovhEk4WZBGFxr6XopZAmNd2TkEc9bDxd97i",
  "key5": "ZsAvqkw4dNkvEHmsddfJDN6jyZD7A7iiy6sB1oNyMQUsV1xKddkoo5EA2parrMTiacG9tipoZS5AXB659Qv6983",
  "key6": "WeV3cynwAGbQnuEWgGzEw76E445LmKYYLqijY27FL7oUpzVvs24DX6uKCjLqnKiRcD8UwNiMPbzoXLqJvP8Ge3s",
  "key7": "AJ2XCuQNWpm6WsMkEs5LKSgeJzNWR1nA5td2R13m1RWqPH4Skxu4ddc26i3GtdqRtr7DfFvStjhVm112Q9Dsb79",
  "key8": "4S5Vtw4oVnzAEZ8KLE3z47hxssMVh7wQnBgSRuWuaxu7YiTW617RGoYFbeoNYcA9WdtBfeVnwKJyLtzjpEjDvHjk",
  "key9": "63czDR9RMkdYuuapvfrnxEH63AHxt7CnTHb7WYHfF2UVFHvWKgWTh4RTRCEDFTMjVUeRpxrr6uXXcSZx39fRDWg4",
  "key10": "37fgZUacHHf6mp4mmW6LNSwc86aVhBjwBbsFCr6aHxG2nork3YQmQ6hFkjgaibQkTbG4CDxYS8dJFc2KpYXrezdZ",
  "key11": "nsajGWz7CF6DQvq5qXjRkFTxsy7hthLrXNzZJjHXUnhp8DRfKYeqk3SfF91HhSjJo3n4U4qCbdGEZ7LtYKJ365S",
  "key12": "3iAed3Lgwd8iRPa3bhFB5KGs96VnNTFTde8Aw6aW9ev9QWnzqhmw6vf4Lnx4C5yWhA4zoELqyrKNbBEocmNTnc64",
  "key13": "gcqhex68kMkpGhs3yn2Kye5xyXQWTA9sqFXFXux6K125cbFnjz9283pApbFv3aaKfnWPYTzRGmuZN3MbGymFUek",
  "key14": "2ePKXR9VyL11uJkhGULNEx2D2TkD7hZ99e8zVg77LRsBkVrA5CjusKNzyidNL5wU3jnLc9AfwbEyf9HArvg8h6Cx",
  "key15": "5525rvWNjU1PX6ops5DVaR9tWLH3cF5UdCXCtgQNG9yKU6RZ4phALomFES3m8eQbjdHSVA7qQrbvhrQVvG99deA1",
  "key16": "4eoBPBzekQUS64VZZ7KKb5W8vUwLNiwGYomj5Nsyg7rbjzLmaSgng4MNaVBJNC8qhciHTPTTge5um21fB9rRXuH",
  "key17": "dN4DXwjMtMqmDGeXchh8CSE3JxrarrEkftgMP7hRbaRXZvgdYsDn5z5dFKnf5LYWijfRsV6RoyDdt5QURcvUEQo",
  "key18": "4SEkPwxszAdmR1XhMDNqMzQyar5iJNBQVdHNfG7CNR6ynC4gMhPBG1j7dzmiZjtYQ7J2KJFEU87oty47hzBgqPPu",
  "key19": "4mSHe5RM4BTdXyggDQQyziYcnQGafgNX7VR6UGucmtm8EVTiM9XPUzQAoBnwBir1qmHUojKHUz8wjffPpRyaPPpf",
  "key20": "AVYBcQUJJ46rbsCaZPRJcDFBubnJXwgk7K18R7D7WBGdxyuXVr6kiCPaucvwR9hvK1scntMkLfLxJGstWBzaPiL",
  "key21": "4FKmDkcB1jwwYtNkFAa6NyphyJceEPXcVSeQQW7CE4X6pKFD5MwvfDLJHi6ZdiEBztrHyqx9AHbNoH8X7Ed9a37k",
  "key22": "4Kv89DvqXpPjHfyDi4BXqpndnRcAM21CoRLXxJ2WpfDTRsCa1oA2c1nLE4m1fb43mxcNLWmtyLJ5dHbsSTp4CUpv",
  "key23": "6GjT7eTL46zyJcTvFfrbg1L4JDNN2kbxMTgS8GsG8QgY6FouqaimnzzFZcoansAnanjgHDrW2kTbBpjnSvzR33F",
  "key24": "3cmeygj56SVWu9o6aL2XQVZeN8oBTC77KEMuvGyDceZzoiWHMHueLZaEa7HMVM8B6VNRj3hWCN44tYezqyitfB3x",
  "key25": "5yaaKzE6DwX9FJBTUX5NB2zbvT7ouQunxRTaqeD5vcDXocpi7f9kbrDckCRvViQrh9wJGtBs1raT8vCKZqcGdtDK",
  "key26": "zN6AN1dmySFQ2poMBwRzsp4eJxgRE2dkVSLm1VmYEnfWmD8hLiiDyR16114y8xzLgCi3H3aAKME4bSETsaato5A",
  "key27": "3V5PhTrv9z7c7HY9WM3RL1pAPbykrw7RpwzXq351pQ95KyvG6gpNxbuh74gk17TwiEz3bCfmYefcEYS7e4DgEFJb",
  "key28": "4ZFpuZ7NJ87xbPHCy5LyqnSWY3XdHuL22xKdqrwbvN855F2Fd9S3oKDmzR9j8Yv2nBqQ6gpX3SFJSwAaWt9ZrHKE",
  "key29": "4omN7xwXwKc3ndsogrUMiMUTxxeoUXwVYEh2rgSv1cR4HmBkWiCVJBJyVtuAYfXuwRsFw2pdK5dktKiUhaAPLW1o",
  "key30": "4mSC3VAwLyUpYdYgpvHNdGGhMBodUzwvFGn1LjwecRLDG4PyCRFL1zvhgGaQazHXKCMoDgeg1Zatx4rLaT9gDb26",
  "key31": "JLafGSgaH6Cugc7zatMW66TccSNfxrN1x93PBSvwBRQWAhbjmysFhN9b2iBkLKeNrt7ESxKrz5of1htTgmbCFue",
  "key32": "5GoGPj3a4mhrj2r8qeoFbK5beK5NcVLZNFgGzPDrLG5a9cLcwP5Sg7uNjSP3jQTgww9Wag591m1VJBZRsqB4DjiB",
  "key33": "hwpaP7w4WTbPS4TWt49bfVsqBEqJWZrFsikArtt6EUYZcnKpRRMtYfqHyhTDEmE8tC93NWr5wnYZBWBKG4meEQG",
  "key34": "mGA8ygcofEkNqJxadGovLd2wWSA8TzXTQFg7qzhzpPRqjF2C64rjXxQNy8YBkEHgVH8cB9A6zZrhyzWGjtrb7GA",
  "key35": "J3ksuDLNKo5MGhs3THaZXavLUFS5MprhPb6hUzqtycTKa5tu9RaCJcgKdTyRvAQpDz3pkuyPufoY4N7VXGcPcoy",
  "key36": "iGC1xfdfGRbySHnTBC19zRhP1qo212mgCDFYo87jLo9NMLfsTkdLakJD9F7k4rSw2cFRjzcoG6uHoctVG4rGfsL",
  "key37": "2qCtYST86itXqbqmrQBX87TxJZ2QpkPdYHvDF1GhMaCfMRJmbLFUcFAXBQMQ2S8WhxAQp7EDXZodSeXeiYjP9394",
  "key38": "4hj356kCcfjGPE6xYPaf4QFd3YRbmqMhHvd4WxYmUFH9GopPFK6R4ig7t61fXZ2yPGtv7NFYVmWnzFuC5gY6EXv3",
  "key39": "pqC7ZsapQyFynAZ286wjUhsqZXeBcAStQBnPzPXDbKQTCkD3DYTCwDmxFVb3L596Edb41NMoaMRur3SSCS58DnX"
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
