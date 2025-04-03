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
    "4MUdtyLF3mDDeVgmFFoFM9ATuqFVE8ZQdrP6kfUAkgVUrj44gTgcytFXiM5rXxLzhbffTHvF3J2Ks371GUS9Vqgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2za1t1tVZh5Gc6KPGLFUsVtMMc1HQTi95DYYpecXDzPyWhKb3SUiKxm7gSUaFfBLenjyzSe9kr6g79CMzbMeFyg2",
  "key1": "tQVh78YSEvVkLUY8tqcicSW3in6PFuAzWFCofCHrWpeNSaLhRUpEeiRMXwEdT5E5nQCEPc3wgJjHSAuK7mJ8cTZ",
  "key2": "ACjS8LWCAFCgDAtTKucje1gmxekoSyxyLzYi3cfwEWBY9Z5c3jBRukzKsN1Lr5DMTKnSBGoy9TztnjqrwbqhC2z",
  "key3": "94a9q22eK7yxwsJJz7bPCRFBX3Y3Z49zovfBbAWzQho1oT6kwpxNb4bwoQTijLcAenSzDfY4u8GjMni4i3yXt7d",
  "key4": "2hWUAAMxw4SgZ3qXMqBNCPZx3FDcs2o83fhvjm7P3D2mvG93hB3siQypMkYuok2CDyAvP3MXk6emJwYJC9nS33uU",
  "key5": "4nQioULEzhcfAEatwqr3Wz3CK8MuGALpAM13ZW7JRW9rZjFWKgwUTXMY5SV5bBJag1qiZwxLvfPVhFwAQGqii1UG",
  "key6": "65isn2KuA5dsgMXbY6TKmrzLeMFS9CMTTHzFHzCzeLqW49qEarsC5VdPRcqknzYV86JiYegdMQMzJHxgMBLJ91G9",
  "key7": "4GJWpUkR6JpUxnUfsxY1z1WiRBMS3enFN9rNAMWSj4HF5wwD2HCCqY16CTRZqpBkb2amow1DYab2C4PUarnWjZG3",
  "key8": "4TpP4LS6qSt1xrktkrdxM5PiAzWww9rY1PGv887quCKPKaibWaXrExkfcRgHXW4A615zEhzCQKBF9gce8kxsi7z3",
  "key9": "4Pu5X3H56SKyyNTJpA8xg3jMEUD55wJNJBZi31Gzc95CSaf8Pekja2kWKPmECyoAqR5psYZSnF7dkCYbWsKJ4Yni",
  "key10": "3wryoJGckProiziysxDuupaarkfmVJLx6YBozsSJKDdHqsc79wGPgbXT7AFUSaDHQMkVgwAFZydadKSQNgmrzTB",
  "key11": "4EgvabruNVcfEqN5wknrcT81zCWaYkgFdorYMERbbTiUPN8ZmfJBBv35QUFmwwcJ4kJTvxjTVWRMV6PUveGXD8DK",
  "key12": "3kRLeLa1wqxe9B5EiLbvGhxhsAqDcprU5fuwF9rJuTaSwxD3ShjwJnZg9HgXganpJWopbioAzQy7stf3HxPt1VCi",
  "key13": "5KEMmjpHjEE16dVYpHH3xB7EwN6DAJotw9dw7eod4A7QkaPBWjhWN5kJV1XCFzZKP2DUX5xFPC3ZrWPwFHZY4E3c",
  "key14": "4EckNPFtRkHTpavTEUYA6uQD1TAyuuaJvxyHbgXZRnwzEK1Xy4TpBwNgRwr1odc7KZRhKi4afZhmHWUUfKbr5T6R",
  "key15": "4tAE2oejjfF5mEw4Jv8kDpjWoscw8Zseq8vBC92g1Qvy5LBVnmQPcNhALvcmmEvX436X5z5BMnbvGZvijtVH643i",
  "key16": "32LY3eor6vXDx2uH3UThCL7GXoMv68p15TepAiM6J4LZFjhP6q9bgsz2A7UHWixAiqEDqL3BqxJun4ALrzRDLzDr",
  "key17": "3vCtmpmEfEtW9X3Ka4VpQ6r4hsYjmHuU6adtS3ZLSrKSVUZguLmTFnHi2gtndBQfG2XFyoDP1HYF6pCp1y24Mpye",
  "key18": "v8h62EyZDi8BGQQUWnxBBWNVMt5frJHPWc9QtjfezBcqcSqjXGLMWg7eXfogwp5gH5qMmJy85PQ94FMQcykRiQo",
  "key19": "2K2Cwaac1XackeD3HfNuB4GgrHv3juVDaW5SgFgokJLJPZMPaAbc4hqqZNCWRzH1xotNccfyuF5miihERkvaWgcy",
  "key20": "5K8fUAu131EJgNg62h6pQssFiR2yDjFudb2217qoSsaDc3iX3ceSv6NeSdiHB4wyaML7Un4RQocw7bNQYQAh1vwM",
  "key21": "4791oayvj76TQa2zB8G4oiE5A3KoQQWhxSrLv8NWaiHiatRJVjyZsUyW2AuAu5TSyGVWRZXFwTJ8h2hi213KEP2A",
  "key22": "365pe7KPG3dVDu1BysaKnuqqSykJt1uHbNiGayWxgyMwnuXqecZgFxobhKpcGc6uRYAdY8y7Gf5g4kDyDsCGBPhY",
  "key23": "2XqVgVomW2xB7uyMme5UMrSCAaRaFgCWDPEYodCtkM2rwiNrPbStiwZKKV4F37qCXZkkXK23xWqVU3NJq4XvDXGW",
  "key24": "2e9qfMcTTMCiHh8Gne6632Do3hTWsR7iHzYcHWEZ676dPvZAAJ71Brv3xh6azq18RRHxfxBXf3HrixxF2BoAcSp1",
  "key25": "3Q7gUNToZ2dMTocHCCKTNUogRbuFuTPXEUux7VbCfqDjTbUe4P9T1L4zGcp5rYSn4Ex8JUB2ou1446wZ87FgDTha",
  "key26": "2fe9qsL4MMzms8nSjMTfa1fEjZfQo4Ps3LcpRLPmtdkagsXq4eSTbiYE3QgmoFjFPLcQJrvToXiTZFbcG1PT8AbR",
  "key27": "48MejfHxhPwG2whY1cUBB2ayAJB8zzVH8AeveBfEXykLzNmAnNefxWqnESyyko3Q2SNTR46ZbLYX5P37Pvp9CVNa",
  "key28": "3jfHsmD22PLkHWmu1SBJPaWiu3dRz3iPXg4aDzWy1Lit1GBExkN9PnS4e2sYhAHrq7Qd8jS2rQeawPJgb5w2Dogx",
  "key29": "28qumiPrn8Sr3Lq1Quf2BZhTb5Z7gBE7pe4wnV3SJLxo1FxnUhnauEWDwjp8oxLyPY6dDNsxekEcxQAVknNgYeQx",
  "key30": "3NEgSWdSqhFZJ2JiKmUmUhX6Yt1iq5iBD4nMscJiTwc8rXG3Px7a3YZbP55g8t8PhwY5qzR4QYYtKhh5jKTFukBW",
  "key31": "2mJYtvoNyR9DDEvdp3ZeXKknTu8x3e3Ffrodu2qnGpgPXzysjcZudxsmBHJ5yt6LpiF8G3sby8Je8kBdByoaamKL",
  "key32": "3c526xSwMZkV8dk23naJSwkKoqy7ph4KXerXgqkh1vixKADJYaQjXZ5dXZKm6jXTHQJtBCZ6jnXEWpMkaW7dFRQu",
  "key33": "4AffuDVtTWEzcCL5KNe4WTqC5tcbRssLzuZGXPtSSFFu9kJuPqBEBnvXHoJbMcWUKPotFHgngS6Z87Nzru132SeK",
  "key34": "4XYLHUvtHxkiXVz8LpdqGdct3gjsCvJSEkbkksLmbTrMW8eAgnimbmQGYnpDT54sQEBfb3kJQCJstAYy7Cuaekz2",
  "key35": "4kyHQcxV5ch3Gb79gJjC7rZ6xv8CecERY2rc74VRDkHkHbsi5eecRPUnkCqdyEtnaFjF9pvAq33CUPmCwuWGz3QX",
  "key36": "5ZW9P7k2tX6pVbowEP7qinuX18dZyriK8FGoVBturpRbFPdjNLS8yHr2yFPNvu1VG54HV3JnursUXCWawfethebu",
  "key37": "4uzQFo5FCh5SnRPvJh5wshYfSiynVYsAETSknGFdA3uWfUWfbS628DA9mR3Q19SLhTH42FiTfdHhkaMVLpRMutpP",
  "key38": "4rx7voeGmgzr8f2s24JdPCEPMiMf2VEhgEHqwtBfiJHu1id9yht1r52G3Xqf3tChWAsUkMkJNr2hBDKpQq8zfzVi",
  "key39": "2WDN1UQrDaVkYvB2YoED7H17VNs5omUyhTQrxEd143q2GJyk7HUKqc2P6WB79ArFTwA9Gv8v1qAPxqGJq23R9qb",
  "key40": "5VMqL9wFNVq4onZptmFHNeHHYsTU6gMDu7hWwxwRT6QTRe8QjA5rBX3EvzyzCBYCxymyiFgpFaYcNhNLhWmULVAj"
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
