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
    "3tqUsGX59t9B2P9oQpcfpADSDUka5Ar7kWpMFcM13i8gLD4fpANaTGieVF5JYwNDfFVnq6ErjwVTZpARqK6uK41Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ehaysNaucPRJkgPESdgmSbjK3aHBuUAurXEkVcGgE9xCspZYTE4AmmzmjFc3NC1fhn7wZJK2Lt4t67wRXTmTTrX",
  "key1": "32YR64hPs2dwz4rJegKAeoBhnB6kko7igSPVNGoWqVKTSSE11L6WJZPnDJuVwHGuD5pnypttWQ6i5d4g3BhriSnK",
  "key2": "4XiKdNA25booNzXqjZtLpUXMHhAaRhiwbmHwvf3SYkSXDDpvWMowZq2VjRBZxn1KgcUM6jjV2h23Mc9MkwpKUpwD",
  "key3": "4iBhnc1sXh4k1gdJg1yWnocrUD4UNmH2kkvqixZgLFYx1t7uB7tqNmX67oA2J6tYMZQoz9whu58nL9u4iF5eQaBk",
  "key4": "5PfDmjfgHCea67kUoSzC2t6Pg1hv8gyZ13n2ugLsgJvQ2fjysw7Mwhipr16h5Y33HQo9YBg9phiodhtrPpvJ9vM7",
  "key5": "hRaoZJ7n8zLf32CG8kAjteVrYuun3CWdSSwsuVa9TxaVV9dAngBatPjMN17qtFEbdNJ4jEoBbUakF4xmbrETbhN",
  "key6": "viRzoWPHBm4dDH3pKvMRQ4F8rwBf28qdSQB6CjYssT3WNjSRuscVFtPZExK3ZEbnijABaj7DcqKcbd8GPf6XAwm",
  "key7": "4kKuGpRAsh73Kz6YPWf8QKcVgyqAUjSsfGsKVwWC5FSAwc61eZ5r2ZmJnqfgZ2HYXLFGvhaFU15PgWGqN1M6gwid",
  "key8": "Sr63yjjMWEFJTphfgY7Rf86UMxBg9BVfxRf2teV1WcmjfAQpCHmEB2m4F2YVCGwiXcGTVwkXmyF5Tuy6KA1KPuM",
  "key9": "5RMiFKyTeLXwCEqNQ7k9aMiCNtJNHBW4QKPzco1QLSMsxvf2Fd44fZqAipaJkGurs6M1TGRuiQhmvmtYRqe2YSvQ",
  "key10": "38NDsgeoHcApJDYoxfQkw2Mn9ok11RAtiKGkfWVhxJTh4ECsauPago7eN7XVGhxPJxmNwJrMdyJtgDMDrZJ7CbuC",
  "key11": "4o2GwnCQXJW4sPWqC9v2wkHsn3QdaNH1jkQ8bunjF3euhwwbhDRMycJA5VsPmEzH8kQVHwBeTvMzq6PnLc7xHC8G",
  "key12": "43VPNi8vAmMuzUzvMzDE9412CYL26PGETEtVjwt3VhvZp6JWuML1bikHr5c8uP5qpZ8rfULVuRpGQcdWj96BF2qD",
  "key13": "43QtXNcBfH2C2K4A246CsQLANW7opGRNMvCgQjnUfLoJpQi3Ca4sux9UNEcRhxPfEs26G7PMCSgjEiahUZzwrRu",
  "key14": "5YhS2a5mV48KUXQeCF7ARSjcSAHPJdABJhPFZMs4ak3d195fdD9wFBaX5W11kfZp5wH8wpvJ19Jsgf2kT1UYge7o",
  "key15": "5SvNGVqh1jWr1obNuup6PyjpXd2Vi98rYN9WBZH5svmjMspRYdBrscLEaYgeV8uX7yCDEizjJgSUhdVBs4qgWTkr",
  "key16": "3MoD3SzYU38UxEVsAvDgjXdurFtZLy8Q1JcfgUWAnRmPUkLJGMxv5eGcKKL98rMq3d6yxCQhXnSL4fnz7ntxMYHo",
  "key17": "2Dq1Uv8Xf8ZDr74CsVn8VaaBxoYJDZGY9uRAeAQF5b26amqUbYP3YfZaKSrvb2Bf2LksiCQv6JLmDLQqLVUVKeuv",
  "key18": "ZKMQ4YoC26kLF2tRNm5XHMQYR8VwXWeiVANrF47sbxM8H791VrdfrdvaHfWLx6pw1gz47PqPi2nSCUcAyxngz2E",
  "key19": "2yDPVtuhbrdoDjyUgYn5i8qGws7GsxV9TJpni2QqMYHueYnpnWKGnGZhuU26kpw8SQPCu8XcvpZmgFmGBHyp5Zma",
  "key20": "5uYQLqwkHuedFD7xsfxrCWFcVfSNGQkxjffT63x9in19fhGbYLq1xs1izTjsAoWtMqiDy4xXTjwi2jDfCZE8F5CD",
  "key21": "24xPpkc6H5HvmzgVGRVSTuZjWNSHa7jpkSiQgHnFfQvZhSMDm1VtJ9qiVEUuAvUeGtjv2tvhLGcgkSQFsE2TmXSV",
  "key22": "5FhWC9Pz476sT2os14G9tW3faKk5rWZAm64v9pJP4gQy6qowgUBz1cPW3F2Kv8geToygWxtd3jhQLFex4YC3V7hE",
  "key23": "4G1d53mvgDZKXdCfbPBJ1A81T99QAPJPTDQLFkowxKaEnWkSSXfKEbRKywC6LpDdCDYmC5A9z3UujjFSTXuuDHW2",
  "key24": "5CvaFhFRkrXGE7wRLNzFdQ7PKfikk7KMm1M2dgCUG8Yd9yHqbuGGtcvbX3HxZhpck5ZvffaXoZHewVmmXUuDYnAX",
  "key25": "2U4SSpr677MirJSs9hioutCGwC8UZKpT6z9zFyz5VYGMiPAdZRb12NCZXDv5gdyasyfiXunEHEteCqdsbwDQntgD",
  "key26": "7sUMx6K9av1RPYJtCJNpVTqccD1T1YqwPatirjqvUHCLmevdu4SPBdMneRJp2WbdcH7pnozTz9163EyFh9Uj6zG"
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
