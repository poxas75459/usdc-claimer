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
    "2BxDGuGAqZvCQG9tH4E3LkDVYVsUDxSbJ4ALodPGfZBZ5jTjmo4otdVKaUgomhZiN1YZF4spQt2mkhDSXGB55Fpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24NapEgs3bVpRMcagXMe73dXsK5kaz49ywKrSCptCnB7iG5yCB5iytFd8QdgYD52oNcVsQTuHZQqPsxdcMa1WJKy",
  "key1": "5HKCTcPCEBjv956zeLe2K3vTTXNtMqHJob4y1XJSwxTnSyuY38TWJuP9P1GvsJEcQY26paKgtC79hKd4Uo4T7rPU",
  "key2": "56G1zWUwP6WoHUaPio6CEPFZSsePyhFKgcRD8e7aQ2XUX7z5NqjuLrH6cY6cvWe4wm86mkAsWbJUY3mMSnaj9uAR",
  "key3": "28uQod3s5UsmAw1ing7YNXikbMkCPmYhgf5xYwBqySxgFxXapcMLYNBJTSCyWLjWS8tLS8TVTkPYgQUD6Pzto22e",
  "key4": "r1jPqicT1bbAC3Yv5T3kCzdk9FcRBSFRxUSfkCX5PZkLaLo5c6wArja6ykTFqDEKSCpZTnNEy1bwmYc5y2D9kGu",
  "key5": "2a4tR3uLftQoiPcdmHrvA8syEVfVPKUicwXSV9nWeMyDssPoyyaUw6bCBK6gdaL61X5WUNELR6eKPM1C7oNcWQf7",
  "key6": "2DVZvBVZrvPUFLyTQir89bvivS1VsYX12FiTrfHfz9K6oyCYTXpMgvN2FEzcA3mhgnXfttWxg8SGdtzsFJfeyTaT",
  "key7": "2V1cnMS3WrwgNGL22hhGnFKqgtpSDooFAFeqFm54bmoTrn5rwtjDxkBU6g9UuUrzSxHBGWNoyBpNYZDyjF51BJYf",
  "key8": "4TpyKrpp4oD3cgCQy4D1nMfgg8u16bMwaUmxtDoJjwn6UrnwdHtZAdk7q8fuzkawSs9B6Q2Rx4jGRJtvWQu6L6G4",
  "key9": "3uxciyB5GTuLhMB6F5scm31Mb7ygP7mSMUHAZGJSNWg1Au595qqtehGJnMQYMbAVwLvQ3y5KWb5iMwcpLvdGyhrS",
  "key10": "2pQtFNyHKuF8hqSvk56NEG9ypQMThUcuwNcCzSZNMqQuFpR1WLH7p4WXLfCM8joQ5X9iueSoTQ4sSnyRoWx9hTFT",
  "key11": "5z3fEnDouxRRzkpe4XcZEnhhifzyFLWtimnij9SDFCcybAnrGPwfupXeThznnodZiPjhBKdfrcRWuzDbPGHzLKQd",
  "key12": "35sfmmx4ipQkGymUeoKCVz6qShog4eTqQ3BerZ1vWXjFZeVeJMKz7xfpLHYDsqfcqErnkxD4LcQsjwEQZGuUcPyG",
  "key13": "2YkQYmHMZ7cegWGWLLtw3WjxQSpVYeeipKQGgE2fZbGrBettpWoAir9zmqR7JAHKdzYHSGoJX56zLNy24DnM37Gu",
  "key14": "3kEt4W9nk3faXHYSmfm2eQkC5vw9cgzBQhMcanWfS284r1sdN4MMcTb62TSGBbMzauzMXom91xcGLwzBPyGcu2wb",
  "key15": "3uEXBxYUvq5edm9EZ3Bg8Q6hNe8iFeiSPzuqmtBTW6iXVJDpLYLrHYZNX5aX3xuVpNNKjH29FwX4WPVnkNk48zZ2",
  "key16": "4NLj3LBHQQnHLB1xcEnWSLLLgNwsrmab2EL3XzdUBYYpwN8j3Uz4hoFg16n2HhHUMyLk1PyiAe6Ng2Rd6SgknTeY",
  "key17": "3j5xfbohHd4SgbtUUPo3etXFfQVjFbbiiSZj2RnSBYE5cp5NE2fvTxrGZAVPjStwQy8PEy7m9eHBGCege9M1hc7k",
  "key18": "5bxX8fi1Rj8k4XkJieYBxHMk6yXpTe9JGCp5wQVAQBYeLWA4CFw8MmxGSKVSRBBYmE2bhT3W8YyrLk66xruYZzSS",
  "key19": "Dei3m1JxLwE6Fu8bGB2z9hUkXdcYrV8F6wEjiLZWu1h3xkvW3aZZSJz9iXpGcofTBVqk78i2KpHosPoRVADNs4e",
  "key20": "3KJjc8UtFAJBwPQETTXCHPWL9FCRNCnbgJNH6M263mrmLd36aRwbziAoem5D2EwhvPKY13RmuppYes82eGGf9av6",
  "key21": "26qDo2aeySzVgNw7szHzuW8nMwxR3FBNqcgfiQ4w9e7UAU9HgpivapV7VPXwNqdLH7osxT8EKTD16CMB85nXrw1Q",
  "key22": "3eRp9TXvxCgL6gxdyQfoDSC7a9Nmxx9FURDe4NWrM15noMcei8rgbzETAJGEQPQUYQNktaxSG17XQQqTGj9ius9y",
  "key23": "5jHPx2syVkXouXtSZF22QAjFnGR59vSR12UvDnQhc2QuZAcKBpdL3R3dfzSH1r4MnnNCWPyJteipUoL5Een1Qov2",
  "key24": "48oRYrjTjpzsomy5LH5i7bu2Di9p5vg13K7QBzXdzrSWtv3naxFAnhckxTwCH7ckdw7GqECY8KAvDkViFjXMGbUb",
  "key25": "TYUF8MW49P9SghZvgTEcEsdSNSN5XioFVi7CuhAuqu834AGhuXSLhobu3N8G3MiUFxcuZWsxUTccSVECAwKJPuD",
  "key26": "4r3qNMRpkReC5mHp6MLiPfmix5PMJakL5eWmwGEh9tSVt4KDou5TDjKVqEcF9TY4pZLJ2ZLmorhvHpePyTS1KoMT",
  "key27": "2et973vmVcNnnTXBDRsoXZLPQEfEozDM6a1hvXfWiqdr5k8JCm6miUCMoJm2BY1aMWFjqoVM9LTTQmyQHK9PAvvU",
  "key28": "5Y3oyH1Yy2GvXkqVBZWPpNofPUWmkArjP1eQSX8Zmv6gbGu3e3p6KKya27Rd6pW7YbqjBwn17H7v655TgX1o1k7G",
  "key29": "Saoqd8v7CfvtcoQAse2hrmFPYZuXFi5TfkhtcUq2xAN6tTXe8Y3c4p4wDwTh8Lwux6MprFRvFQGkcjCtWM7KGzE",
  "key30": "2Jf4yFVWwVcEHtmPGPRnG4JdDBB9LZNUbvUaQUA6Nf2d9FeWkA67BkknwNQ33qqDxse11XTm579haMAUEEM46Pow",
  "key31": "4madQYcu1uRZzVKBuKYQvTWbsLBSeTCfZkmgXnr3Fh8tCwBbj3TEChFmmcddnJiPrkWw1TQdXKW2TMU4e3Dd9M7V",
  "key32": "ecrAkANu44Vk7opUBiAB4BdY8MzUYEPVQNoeCq7fo1UqrZBi7A7rspECgS6nGX7onKPqvfKCKvn4LC8HANmvH1z",
  "key33": "28m8LTmTgTytRZ9oJRwFE9rBsgSnbyWDsfBz7A3CtdfAoxFHWAdgaui4zCWqkLfP8P7PCR2ATq2ngEtZiFeQfwh9",
  "key34": "4oCPbeWKjfvpn9vTZrhb1SUk1qrpLTBNz9GqSBayyqKxWScM6KKLyet22YwwsNLUxL5pY2vjbStpuPDEhbm3KPvf",
  "key35": "5mpqE8n5kdeFiPYD1Wnw9kHv8Ds9ory9qA9DE4i7vKouKYGoRt2awTWjojrA9e1F2vhhQcC6sQzA8ie68RzifVYM",
  "key36": "3zx8GophiiCxbTa45b5ATRvPPUYmLt8A66m1PZFBFiqJEMsTPhjeU4BVm3PxPTe2HbzzshrPtvc84JJEMJC5ZFwn",
  "key37": "3JAexS53g3xAqJeCz2qnd6v2QzVCsZ5oUg2d8W5ASKMHsw1z3htgWexofcTSCWawJaB3B4Uz88515rXuGMox1Ty4",
  "key38": "2ZURyn5dgJURraf68YhCuUAK9m9NAXNXcfcAaFBJgnCTz96LgmAPqdSJZHQYd3D6xMirs2vpmUVnq2k9g6CSWsTj",
  "key39": "5VaQivY9TVCwAMWKxJKTzxy8XbwbE5UTK8m9Q2c1YTRCHUSwymrmNMoSgXpVAu2EuXPfSqubkLUaLPRLMRtArPYX",
  "key40": "cyaZC9VcmmZU3xpYwT8ZDvQAcUwpWDZKvURepuEPLzkUjzEX3AHSR8Ks7RnnuaM8VLo8q9oFGpdRuyFHeexZ7M9",
  "key41": "5bAKSkybQCboR3bDfPtCM6vu8pF4bYTJWbZ443E6FjvpGTNjkjBK2FKMRPeJSuRiXcK96xYjWQwaRxPNDrs8FGRh",
  "key42": "4dfpGzgppj8w25dwUDZEPYarmhRSkzbHGWmUQLcWPETdsunV1LFLo8yQbCDYoDbdbmuw7QqSxi4cEiDnJNahSS9A",
  "key43": "3tvNDcMRyg9kp2rDQA2HNM3f6v2GcyEU9uvCnByD5y4Fqp1hcvF4GbAjPXJxPY6RzmwC4zPMPQRDYZX3iECdi6uc",
  "key44": "4u46r4zm3M4HVPU49ukHBUpcV1WMsaAVW6hzwchNynahjvFgAogBFsjfcsgVhwfaEwv9q3LUxxMd3KPaPcVDegK2",
  "key45": "5ktWS6GWr9xQFNc3tPVTeGpsmZ6xjiu79HjmWD2EVNWqDw6115U3zbkcd4ArM7xjKVp1aDxcg4ihHCcgVDL66Ry3",
  "key46": "2fzh5d1zJL9o9gbxZSgByYMmXRXxUXRv7MTfaB2zbD46DRw46bryAhbUgBa7YxUoVrqNsKs79KggAbVJd6ipTTEh",
  "key47": "zFxoLJzSYM2XyEEHKNQLQR8UktaPweEARRAmXaGBT2TFsUX39xPD7s2g4EPtwYEzTVBEm6mfbGgAx5hQgXnhM2n",
  "key48": "39Hgv6R4eSDke9hwQAPaW4NVTh2TbKeWSvTovAK2eF6z6qgiaGSoWfg4kNrz3K8qrfcrkXsam1n69hbRvZTSHWEL",
  "key49": "5Qjp22d9SzMBPJAYkZv9Zpv1v6JoN5oV9ekvPfR1wxviWLfQ3bfnrEvgx5SB2qUq4Jj9Pq6CPV5MpqHZjXpKyapo"
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
