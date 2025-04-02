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
    "4iMmtawaFfkfCfgL3vea2E3r3AqKQKcfPCzubJnaHovhACu9Rj71CBZdjDzNS1KVMsJ6tvcJr5sAcKsh1YHU8gWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BAKdDDsEXowk4zBmgcijgepJwtnd2KJiTAf8RddxJy7d6M2iedEqvu8o7CcRrVxxgiAT7AnFPLJiWYnHhtj6aDh",
  "key1": "4ZytEShBaUgRKg3qdE9oBuXfQhydaZ8DbTaaQCT9CgQHDiDbx61KULBHUgrHKYYor4cfH7EMVQ1uNLd28DkTzsWn",
  "key2": "4Gw19wLDcJiAjH7giMvSVXcyL3CMkjUiFjywLjsknM5fVkgEx6Xt5cGUuCNWraFPUFmJFzp2mnMvaKTfWpUVTpro",
  "key3": "4VEXTYVJmuFdrYM9V7UXUWaNjH6wMR6UFmKwQbr3ZmHuQnMPDkQ2Kom1uLRAKXDG11xHdE9K5RdJxwGC3nQFV9Zx",
  "key4": "4J9chPxHC966nE7ZmaqjYPFb1S2NQsxXD9UmJC7sXStZUJVCpBk7ZpzwTXXibyKSGxGRBKt7czFW5p1wrYcafb96",
  "key5": "3DbBNuCnt7ciUL9AQiUgKnY3ixtAUNxSrKDsGzdbLoiLZSV5hNHHMBUGn31fswNCFnQSUdQWtvdc2j42H53VAELC",
  "key6": "3bw5pm19E6e58FWkebx1m6RmWDABuL2M11EaSvUgtrJTuVJdocvJekjzgy5ErVyEBr9KnxZuGeETvL2nMCuTpbFM",
  "key7": "2mzF4Jg6VWdvjReZKjC82sxC7oA3MkJ8Q8ECQ5aRAWzjLVzVbdgPztGFKj2phJeCe9DMZQPiwfzm17wAEXhfwEDZ",
  "key8": "3DTZK8ZpGSepFsemEAHpbasW1yrXzVEgbkAQLq4a92kZsaDUzQxhbDhm3RDJdfEqqQrrvpgUn8KBfde9P7WvzwPo",
  "key9": "4nGw8gaJ1B7pPwYdUBtpMQgWeGiYKueByBtBRmAg6DriEiSEQLTXs3SwUUTtR2HypnB2TRZexLtUmtFXH2AywdMQ",
  "key10": "35bbxHaA9ZHTwA8KEraHG6sW7c74M2jUGiW1eK3nK5UYdY2wHL2YtqPtVZCErP6n1WnLBD9jzoGpd3tQR67PYcu8",
  "key11": "YMbTDy1dwMe86tYvdaaahQ2pFqVLEtf8tgnxfLKspGEjcKh9C4zZeuMh13Kuch7sm5J7SeZHzRnLYZPoVx9GoPb",
  "key12": "2q6peibwNLxMb8oAgAydzuLcjSpDxTyBUnBxMWJp3FrZENMnde1qDZjmcAxaGSKXrFP4uf6ay1KHa7dUQdFFyiwa",
  "key13": "5Bz3m361GkEkVuiy2ZjXNioPrMSrLhKe5Z5bLCpAMqJDWGuvenu8xTVqJyaRXJApuPidEmZAxRNbakSYf2zia6MD",
  "key14": "2JbLujxk1pwxPGK1YGWsnUHRA1KES5G2VshQUZRVsNfwPiW3QpavhpCqKwqJYuEwEuUmQbFEjkGPkvMtwby2G92x",
  "key15": "gDAeNk2niouAb3WStvLUqkhoxcb6ZvxPqKphxQUVhqeqyn7PpyW3NzQoiDLLygHY7SZhCnotqyfnFFFaahbL1UB",
  "key16": "3jev3AtjbB7sgjXeYM9rhnncePGFcHvozTxjmA2WnKdCnvJyzM42P9XjCQpDHQrmMqXs29RpCp144tb3tWwHDevt",
  "key17": "3RdTKBssrnz5wVj6ZBBExKUQr9RBoxtTkxEQcsPn1XFpBShf5WdfH8KGSewqZMHuAVYY8b6cU87Tm2rAHFEA4WFM",
  "key18": "AvwAF73n3xRmP3zNkSvt3ukkkVmuGruc193YDwqmNQDgguk1V8peWSdMtxDfrXMyTFZAKEaPdubejmTo3fPgPjR",
  "key19": "WGanTRy5A5Rimg7b5uW7rdrCLpSRkdNfxSBD251ctT1aozBkn1zuZ4vJGUfEiz7LZd75CAjugGyRCzaYoVb1KN5",
  "key20": "3VrDqEVTpEFrgngGXY38dKJQp81Y6RWoCP5Y6Es7xVA9Kp9zSxdYQcNw115zmZ5qn2Kd5ZYYuax23TscENmC7ut",
  "key21": "2dPHo3Upoywptg4GjVtYn8AmbwNG8GcWjiCYh31rUnxsqYhRyqXvGxA8JgQr3gECxL5KL3UgWwiD85vQMRRx4NYP",
  "key22": "2LXh2rCoKMXeRrJEciCtTzqoFeRFCVHeoyjcGdipLFcR1sdbb1ckDVAeiSmT9T1iGeFbZxSXy3b3Dn6XVwoKrLcJ",
  "key23": "5waTR28ALUjhX3D6Fj6teeFKNK3S2DCggZPiv7RD7uCvfDdUkWpWuyPcSyM5UWKwrUDSrLX8uPN2perWGCYjgMuu",
  "key24": "5vC7JFYH2fLajirkkn1kvAvTAcn6xVfDABaiU5oNbt33CZqnW3VaGoibQ73UaSHKWtrQXG3i8jjMT5SBQxQ5iLCw",
  "key25": "4AoRciPtNiVMZGHDyjkfo42LtF4Z89AHkSUkqYiiU6C3S674zUbmPY39a8g31dePAdMxeLnZRDd1MCoKqBw1Y1TG",
  "key26": "2EE22XGegGdKxteKjMAuYw27PAbovHKfjJNXCGLKz4fqGgkruDcz6ZBoPsvZqj7bYKWzoUvkUULZK4gqn9SdPTrc",
  "key27": "TFT9Kn6PhLtGkSeHb3deE8c2rrc1Zym7Ti3SUvhQtXZKm2cuT9V57HJGbTWVaMGAaXFXy4yE2CcxtDobdpwSXBv",
  "key28": "bBXrWhPNcj1pGdnAsuEgkkc73wfKRS98hZjvDDqBooJxAboqdZB8TC7DWjXnc955Piw5D55y69ABn5swPZZWXtX",
  "key29": "2y7NZ6N9Nr3GDMJfUxkLoBkg6tKE8SPaQRTcLMt5pgGNgFFEodiCfXQau2ZJ2DRLhpNziYnPBRPS9REWqWTpGTos",
  "key30": "3LK2fz64rpFnkh7u8u6r5oWF1zn2CNXsEV4ZvMKgZKw5iQSVgrM6M6PAcD7EgnfdPUErbQCaEDPcR7Nmzn6MyZVn",
  "key31": "2r39n63LYzAmuLwYgD7Q9zzyZ1hmMbgvCpgicR7QuLZBAK8AoiepS4TiBgoutLyjXeWrX42BiPNAzsMPfvF3aLMV",
  "key32": "3UQWe9Hwvcaytfa2ZYNCe9srN7NJXxbgkaryR1SQ2yNcwY3oSDccBSQw7YiUkRFRKbtQAiaXCERaz4bd7iYSC1Gk",
  "key33": "532ci2AtyPLn7p45Gp2tYHP59PmadCt4eu9t5eaNREFn4fXBmWqZDU98pp6b7Ndt9xpcjRENhjXxAcxjpgGiPvUJ"
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
