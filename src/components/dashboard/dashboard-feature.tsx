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
    "3dpuknLk3xKMs3o87M7Ks97vvJD5PL9NZCkSq1BM8paiJQEc6ywSX4sCQWHUpa94b5WHuQEE2EzBWjqbDS7KrpMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfwBRmFwYK8CrSBNghTnmXKFwNuFdJMr2nmzhpywepaLrAdLvnn4f8GhiDMrsA3utDSf4GgcayvqT7XYwH1KgGo",
  "key1": "4SioYpPeTzH77Jpdzf7Fauf1KyZXa7UDncB2k7TpZ6MTPNyHArTyN8K2Qgw867oVHjMqasbAV5atxwo1CgGyN8oX",
  "key2": "43EFh8DJstT8LWb5C8G3ecLL7uzMUkhJvXqJFxyKRMHFbmwvAPHA9n5XoGqjUs2ruvuqAez9Fcooog2HsEr5x6aS",
  "key3": "5bt6r97p4MEpGhGJuqrE3tvimGyVFHsPJL8mdAaMPP4UHAKspaPn8j6rnMTiHLTYMEKnYGh4t7VM8dTGfv6TAFcc",
  "key4": "AZSCc8oGXwW2Cfu51GSzszgrGi9ryG34ZanieK52hm1CFECHKEYRuMcNzZZjfQAPnBosRiqkwjirMmncVMhPek2",
  "key5": "3s68yVZPCXG6ZyU2EjkyLexD67EknkUCNXPawmHw2ynw7JNAXFWAbFX9C2Xice4yL4eLbMakrF8U8Nnfs5J3KoCp",
  "key6": "3hqMpoDxBWKWvhHRCrNadhiqoQyqB4YDMwWD7ezWGdEKyryDNnJu9XNatGvRuKF1rDCWLPJycQjeJQuRjhCxq2yz",
  "key7": "2x2VCwz4aPs21wXHUBSEWLejX9mRoRTP2HgPVDihfuNQ6D8UKiHZReRocSLADd8PF55dhtr3RKJwsFAzs5U5oxj3",
  "key8": "rMGst7Z4YmaeQwgwso5zcE1kvLbxiC4iicbtXVTeT5Fyu3ZXGg9Y2918aqqaMmQEGLc1XNSPXncW2QfD5GPPD7n",
  "key9": "5PTbQMD9uisR6LyFtMYiJCg4dkL3rCT8TEXAZia2c5fxhEx3LZV4JopxUa3fAX5Qg6xg5FRXjYgZLfbbkwDFHqr8",
  "key10": "2ForKxZUsXFgqwno7TvVipffKoqdqGutjCSd4NJccX9doYz8FZZLQnV4t4soFJcMawPBK7errrs1tAMnbBANyd1k",
  "key11": "igQ3e63ScM7ezfJuGB1iiRWbEebjBwkuakrjXGJDiavAVzbszwjZ1qfELafXYJ54f9dMgyQabQP46ppyVBS2xJJ",
  "key12": "3KQxposj7mVrjH1HrVvp4w9qsDUuG33T4WrDdfQ6a5aZx2oBFiqKxvnSfrwDW5JbPqakJVzV6XWgnDNAnRUyFKy2",
  "key13": "2ERvfUrBujAhodQF9rwqMnUWk6b54kYTifcNxtbLKTE92Tk6X9mBhAnC6Ykp9Yu7gid1gYiyFuHbEcdhXiABNCbL",
  "key14": "23AqkdojEyUgc57Q1hPGGUNEWMpXooiFZ4uUp7aH79yxKS84nC15Lcx4Nk9hMPK1npUEzC6cNUvBfazFQjyQ5jLQ",
  "key15": "5AY9P6FUzZ2AdU5DBqVhhUJHZNXa78sKZwinSrpVCDmKQZgWt9FVf7z5EXRps7FCJPoGuJj61xEmyzeDhZ324XrZ",
  "key16": "4RTuCjHFUmnFUmtUg2tHqQ7LYgJQAouL3iRHbk8ALo6Co6F7tRwcVoAhvqdGmfHycHWJUkcJqcei5k1gHG5F7ZQB",
  "key17": "3uuwBsmPB3ZJ4LnJGMgKGqBBq5DShhVfojMYvN9WuEhNpMZZDiHMNLUSYwqTTr3tDpnQphciBcSJ814znKH1hCiT",
  "key18": "5wJDT8nyHsWrxqouKCzGoP5mr16KugAWP9sT7z8NKe23RnLQ1yDvbqM7dgHvJwW2pJA1Y6njty48gXj5HozJMoBw",
  "key19": "2aaLYoA1M1FwsVemK5pZaQ8btGBLpsJjBRpGpvzmfiak2DJWLkVeo4kduPSMfCtpmXbrbKV9DVAqhiCyn6VXHhBd",
  "key20": "4G9LFNVCC4qX3LjszLBnH8X4GpyHXdJP9hxnwmefBE6NcEWFdoiumWKzqUzAcGHmV2DRXbcpcd1A1ayC1ow9vka9",
  "key21": "2ASXzu7bAzAp4wkgSY5V88L4e21xqKQb4rzSBhWtWbZPdUX28CqphTsZ9FBw6hiEFZm2XK8cGRH5nnFYt8g86cJC",
  "key22": "3Lcuhai7ioDjvYNeGZQe1UnngqBqmN3tWgf8Jgw4Qnx2TuYPFn9n5Znhjmjfy8vjp64rVKE7ksTUyDGB3kBXgCz2",
  "key23": "22cU3tKG5PZMRrLtN8UJMex59aizEPoVnmMvZ9BJxxRkX4SrBFRrLWmwjnMGoD9ho8VVTJAW4iP3LFDyKWDMSeJB",
  "key24": "4NsYNPXW2eYTAW9F21Z3ftk3Xmmi1FQ1pnVwN9Z8DM3EpT4KfUurss3HgyFsGNvdJUPU213SNZMNXfnY7hZ8FAVd",
  "key25": "5HBJDAt6Shw4z9LDUkH4xzJ2eDjg4T1oKqBabbqhgeWceK2RrxjCkXyNEcDDvv3UJ6nfXMR4AWHnXq8prL8AVSs9",
  "key26": "pJyFLBVGNJfHpPiE2tunGCCJAzyLVE7o4H85ULZEJCKf5yk6ak5RfA9wTTyxh7HWxebJX15yMU3PnhN19Dqovko",
  "key27": "2BLnfjqihMtmC69MbpKF19FG8yExooXK45P5ShBQSkhSeEYfUY9kdHX31VLtvLFkCvoWi37XJiu1u1hx1GucVuVN",
  "key28": "5AUzJRq8wbhgUWN84xLMk9r58vCJnKqqp88z77eJ9SjrFyhvzaMPpb83NGTNKt9vFoUrdaHB1qxpwT9cidXgDXFv",
  "key29": "38G42jLh3qDjLD3YFPUMrrQAuy5YzPNgrNQquqMPk2fBt7NPeJbM2EEdGe1wTSZwssn4gF19BNah4T6e1UGZweSR",
  "key30": "MVj5oxn2xGLtQ63uZbsLeU8rkzxgpwe9nnzu37P7UBeZLyKiwx4hjmcHM2hosLqzmyqK4y9LKrPYFpRpHAepkBf",
  "key31": "2Lz9F3xXVAMjaoQ6zWbGmyjBsESgX6RTY7bCApU6WLqQP1L96rkeQ1s2A9KVk6jpcJrAuqynuMgmbVrjZaQY98yY",
  "key32": "375pRT89sYRHwF64gtjQrmyqHLaC3XtTuc1UGxG11k8CR9ZHdjscCxttw1zvTV76Jp8G49dTGkEAy8GMETJ6BBZj",
  "key33": "25V2nr1GnZ3DWDz4Ro8KjrGoWhweWqTYfyv7WkZiS6bVqDmTyobgQUQSENtGQH8ijwxKSGo15LvrHnun1cfKKLZh",
  "key34": "5GMyhV7Ur9X9P1C2LmtpxgSqG6Fhj3kqioju6pqzM8YZr4TedTqMLdF2jbmPzLme9QXnrkDnAj11BBD3Y61shS3L",
  "key35": "32XeZ8RNhmawwxPTUsPcTWea8bK1pkCXfCURyp9UvW9ziLMrecMfti6UpQY7RLwKJ5unDPHWU1hrDcEBLtu5zcx4",
  "key36": "SWjA6kpbx9BbfsZErFsNFurSm7HzANc48mCwyZcTUQgCVdWkNeCupFXxxhqhtiPft73BG7zrAM7tK1dRivigtQx",
  "key37": "2eiKgx3NifsgXoVx47sQ8GTUBUkjc3Kz9wAKvz5JoXo47YNoZv7rPLJyvCijMFrPCbe2m6GuGSiu6hyFDcAGiosY",
  "key38": "5hC9SyXitkkPYBpd5KvChq3URaaJFRmZ4UXkyq9GZDmD5KYYgyM2Gojjd7pYJRs13UWLZWJpscAhei15bJMGZmTW",
  "key39": "bXrrirNksYfb6XMmzdcMPHuTXmaQqvZ1sBUG2rjP8a6Mzw61kq6Hz6ZAJLHBouz61u9ZkZHN1PAc1iES4MAR841",
  "key40": "2LCSAoKK4JQGopo18BQFKmnQdmE2o1od7uvSPnQVxfpbu8ZMjyiC47UCcmLoBpMdZWxBn2XKE4ADAv1k9GrwcqTe",
  "key41": "gbCAQppQk4Xpe3kARtGUVF4zY9aQUpmsaycERTwPLvtfcWSKNgzen8wMNuNox5iK5CvycLqQSbnuqcfGjY6Woqy",
  "key42": "4AV6axW2dGY1sAGsAifTsqdnGszNZdVn6p3WyR9i7v2KmFMPD26hWfuoQ7Juocrv8B4rgUMXD6Tw4Pd2qirqNdjF",
  "key43": "3h8sCm17ceDBQG2ZVTJPJkmz174AXMjBoVnVvePNXCRQTeYihysg7CF6B73QjmGnLVTxo8tr9fUjjjUue4uF553A",
  "key44": "2trd58qZALJ8m68GRBnsxeg7ccFQ75b2uKS3deGPyum6AUrJSabZGMKr1FPcK72UpbvS1nQAYnVpaVidhPtVmWTr",
  "key45": "3dcDZ3jJGCYDeRdoNtt2Fd72K7c6M1eozpJpd6LLeq32edcjxTkYEMXV8UWqrzBW1cSeAevNMkKNa1hwbrxkHe1H",
  "key46": "2jGbE4UmUaMZv6EJ8nyPTQGA2qX3XP9k7qPJLM49HYqkdCDG4PVHfM9DPsTA2yvVrnVDqfPQYuX7UBvyoQ1aoqLS",
  "key47": "2xkccGn2LWWe2c8YwUC8AucS9gzk8k16EbknLyipPHGsA9JTTF3nBwwgCiE9qs2QR4hf7MdtpGtF2R2dnr1JrL2o",
  "key48": "3v1A6M2XMa4eb53kBVN6gq3u7xyB64yeXmHA2vLSmkuqGeUSsYDEsAzwRBe3beXr2C3LojtQ2mQ3GqiRbkN1Asx",
  "key49": "4s95r6oTgbspNHmKGHB6gfycurkuNK7J6b9TEdhSCN4fRgq1VdyFnF4JXaJKAqj2SX3psanzn29owuhGbwUv9n1b"
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
