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
    "seWFModU64YWoMB6p8H66eqc8ue7H7ejLwUkSodukCU5qzXXebKX2L8U7iPK86AKs73gnTrp3MK3CeBtmRSBhxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqQh6mKXHjZNSwMfqbBaoWkZcJZ5qaAgk3G2qNxdy5j7ri89RQYHNQyXk2QoZnjWSh2922yTjg5QG69UxidMExU",
  "key1": "2XqE5fMjGGC5WUM4Xp9hu7KDyT3hR857BQcdm9umXPvoQB1f36FqXNURCEhpVb5NjRgtx7sRnhSRExya3FcSwZDG",
  "key2": "oEQtxuYmT8mjpQagNb6AL9kdDBcY2gA219jZMszy7HWZv4MEE6dvUEALStq3wf7xxVTgqdHixzFJexwVysfETRZ",
  "key3": "4Pwh6EYaaN9LXE34rFx8m4RaD3s49fZ72KadNMyjnieAyK73zcg1E9tb46cSL7MRGUaskJNXfa88TQ4ogFbgE7x6",
  "key4": "46JXe3ZcMvbMDK7tU8Jme1hZieqcRVHi94hjMYh5UL8ctYXmjUHEDpbSZoQqRMTjnfqKqshrw68c6w5S862c7FX9",
  "key5": "3mJaKNeHuhtvctxXm49gcggNVBdDthcF5wr2Fag7P7aZ533K2oC2f32HrPfUBSrQ2XAXLoE65QznjYeoJYMNC7Zd",
  "key6": "2AUY8Fo13kwMq2fTTaSjvCsisL93KrpcXCepTGnB87yUgWVF5Nr7hcHZ444xV4FrHaUHxsBdo9KeqZfwCDRXE4Mm",
  "key7": "2Fy6Vq9TbprSqSHAMEDkJ2MwfT4oc7vHXwChWM6qpjznYhpYNmbHugfkchNNE2mnp6eMnVWycuQVuGXHzBjtaLfL",
  "key8": "3DbB4Ty1SWZZFa8VHhZ4hPtyET6AZjszsx2QoPvT2JJK3YSKfQHpKzD43Ane4grP4kUTpxXWx9kq2Zz8t1NPDP6Q",
  "key9": "4BfSYUhdfdoPGAFCjD1tr8zA9bsgPjDsjx1z343eAP7H7s7v11dDofRnZ2goLHM7R5Sau5Ksq3mZWGnQpVaen9pG",
  "key10": "4Gu7o7rfTF4G14vhPfPN7DiBbJ9ADCD95mNSPozeFDdcQcufAuRWe86iLJgn65hdnqy8jYFY6pZ7ss8zHaKPGDp8",
  "key11": "2N8Ycbic9Bg3K3JcubXGL1EkK3XG6ZbGfiGEkjsEgkUxynLYoTRwNk7umPQnxVUD5xaC3rKnJptr92ELoei797hH",
  "key12": "3xEfxTmQNzadzgUczVb4xVMsxCyX2joBP6GhRrELVmXLy6xr6sZtbJGQn4oa8zSgpJYz59W75YjY6RZyapMUqbg8",
  "key13": "2LH37RyRzuPtPP1mjurNUxtY58rGcP6nhi1XvWWHr21e2xw9vpmAM7KLAkn85hRRdJWo5v9sinYnUzL3AmnZzDkG",
  "key14": "DzWLJNvAKsPypqEVuy66mffPJyA5oNupd8HTiNv4qH9Lh4rSQjrGLwg7yKwCaNpJgddEfSb7FoPz1j11XYiv7Y6",
  "key15": "61ue1KvgbPYM4HbaytgowgFFBkZ6VQ1Af5uV5L84EJLTXnS6jJmzE9kJQ45At7u86vtvxJd5ptuNraek5LqtzKWj",
  "key16": "5oV3vT5vEpRQT4pE3z1WzBDHFWXJs6vP4wmzCZksGpCRc95JqwdHsgeWxR5j9xu3NG7pwqi85LrAYesx9N9FNDNf",
  "key17": "5FSNUaYYwj6mkpUTmiUTfCs4R1d6uw8jxxBoN7e3BE5cFEUFUMk3xz7bWaHxFPxyBuMQ1CiLrzWrZqUodkXbd61h",
  "key18": "UvTZXabWP6XHNjK3viVE6irVo9scSGDr5o7QDiKuD4XLEPMGcqbmHbSRF2y7f3e58eTDtKuepXbHCBxP6wvwLwf",
  "key19": "4QW2KRBe6sSKes6BZ8bJRcKDvbMDGnhybBBLik1nuzrtkrJfjHV6UeFFqdt3xxr3bZPGY5RKuC8ogjEmGYEmLhZN",
  "key20": "37oWE9vC2EmgcTnvUvSu4bAeMa2tErMr2LFXhj5gYkxvqJk1yXVb8SfjwUXN8JAoxG1GzqjfbmMwXmT4X87XaQ1D",
  "key21": "44sSXwKjwEvBVvDuNXQBsaf4yGE8cdGfjcqyyC6H7ezbMA4PyfroydgvqW6tD4KDafKVQmDGbrMevMKP2tBJWxXS",
  "key22": "55wTSr9xRp7QhLT874gFLHxkdb1HoRWCWBLLZDVQ2Vd3WR3dUd4n5nKG2e28bsuc8XnG54UWfwAeXBWmqCgfqCfo",
  "key23": "34sPpfRaUZwD6HaWqWyEtxSiDSmPhLkR6THYUhQhpd4yALF2DonYzMfA7od5FsAgUM2qa5SpJtBXPtW3h1JzFScA",
  "key24": "4VQ7D8YvVEg345imrUPwost58Zw3F2FXAojyYY9Gi7ieM6rTMejXwZ5YYoPtur9mw9pk6kX9nAVfpqm3teaVnkNv",
  "key25": "GHjRtWRR5uiswqUR4wFdQYswrVDEy4cf79cFoDGNvNPbCrucYywZ5yaPKTLrETRuCxP6qiqdPpeT8K5y68drm9K",
  "key26": "2T422uj3zV1qLF4yTSPPvX7xP1tSAeCP7HbsUhnHS4vZFJjco3PGxsXVnz8z5s8DSen59fFpfZwVdcdUWnZ2Ya4r",
  "key27": "2XeDcmCMdTzUnamoYNbL1xmtje2BwnJDMVf33msM2ME3zH4H8vcgsW4qBYB451FWjXNmzgAhhV6AKUxxmiLvwyyA",
  "key28": "4SspZEZKCEChp4BBd5nEBp669b8mAjexkMBg5jPua17UP4X5ZQhcrDYwJKqzLmG5tfTEcPmAmw3zedbvumB5SU9J",
  "key29": "5ZJgeo969DaTETSBsNQqZcaqUs9Ta7ngdxqASM7SdgLBxwRLXAYmGT54LuCmfyp6G9bi7vqrCciCcF8DXLTPJ7bx",
  "key30": "2JQYw58sMmX8dyjfUActeqSLfnhEVUJaKqUM5UPaS5tegg9ckiU3DiDDHyt3H2Ls3mFrh9fZJnLwPuAPNNtWixLr",
  "key31": "63B1BMTeRHSddsQdL5uUaoJxvtfdfAy8xRm7qbb8oVNBUu779D52dat9JTpZdnku8vJXrkNmHBALjfvg3kYgGbRs",
  "key32": "3bJRGqH7GZyGACApf3NQFT1n45m1nVvuZvsFLVWP1BMjCn3zcS3khe9HxWaTYm5fLAgEqP5LvfhvyrUihctA8GcH",
  "key33": "3oPKREUsXJrPnMQhMdWk41WupZeTchbu8X74WmbfasQnCKyQaxxYjD5dJJD24KgGY8fjcBgvZvVSEfzD67ZXk5zy",
  "key34": "2uTERcGJw1oLBF59Q6C93LMZN2YEFkce4ixqD1F7z8wxnMLf5dnGMvLWJ9ev23JyttyK6t53Q9q1y2msK3z5z1k3",
  "key35": "2HTZEfB3o7xEWXHARCLFX3FJxy3V8H1MLzSAxBneCMJiG15A7Ns9sHSM1pFeQLGiVZQKNJw3FwSvVY3QCdZtMUUH",
  "key36": "4xhCqjvg18C6reBfDStGhaKmZSv3MEF7P7HQrQYJj8cseNzSrdKHSASubRgnoG68uzPUZft7hxA263rh6a2WCfA3",
  "key37": "4cb165x3S8uACKTLnyxeMEEbhKG4Ldyj2MrbjnmP4iNRp563WP87BmMZKXWDgTbz6aRSn86sVH8MqscKezYsqWRg",
  "key38": "3Jka4s9ByDESLQk5K1FEjZoiVyDptJx3LuwoJcUkZL5ocFEAiPng7NtjC11VY1YB38k6wbeuWV4vUGrSXT2Jy9RT",
  "key39": "5JGZ3bf2ERQYs9V5uyMZFLd9XBvtdQYS8RpkEbLCMoDAcHfJmSm5ikzDmLtnLuS3MLBrHxnVpjYJrWfMEbhsHKSZ"
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
