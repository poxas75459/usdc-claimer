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
    "2JXbayjA9dPcv7JWq4VLKGKME3GfM5wuEr4hAMDLrY5fsiGQir4GC13azSPucVF9xL99Htwi5AgxcFhvH52t8mNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WzSNFaesyoka5SU9PY5M2iA1KWFkrRL2Lqdq4VHEKzQpZLGuGKSqZAyWV1GpWETrZkqYPxHR42U6z3oWhknyYMx",
  "key1": "3MaEnLrPohDu8MQXk6fs4kQDEBPEDWkYaXtrjLmGYBykjSeXeqcDRfdiJdX5WjnY77WzTeusuVLJ8oJbdFh7Chi",
  "key2": "3Yk7P7mh36HjytyeM2Z7vL961GuGMBpZRdjUV6jPJopb9R3kHQkmXymswfXiHC63DMw5wUEN5hrWR3Mc1MMEFY8p",
  "key3": "3u9pcSPNkAYFABnaDtNLM8ii78fWQnnSgUHFw9Qu4SX1SxcBmZuV1ywX1EXSfkvQ8zPPpzCX9R6KM6xMrgBBLiB5",
  "key4": "5y5C4NU7t7jVUS9KpvsTs9nNTDr2EkfX8NJeqttAL47b9BTm9vfSQcbkLbJsJFUyFRNXrw1AMoBkHyzNHVsm3zTW",
  "key5": "2TnvXpuBjZgCMra5Nvi7F3dqdPPc4jhxAAtZuxJq4UyTRspTVHwRnF6TvXQbaHj6MsZ3S8bvW1PtE4hZhWHWXbRK",
  "key6": "cwsA5dEMSbQwYKhQZBisAZDj48SpC9eqAzuFVwREKN9Q3LkLep2C9SQt4Ge973wT8KWV4p3nrLvw7gtHaW4pSdC",
  "key7": "4uhUnfxZyKfxHb81ZbRjXnrdX4Zy1nVdMjuhTvP9uFYXsRnSkcQVpJBVPJk7KXqHB74d84GziSsVUBeAHDJwGcdq",
  "key8": "5abLBrUxZDGVausqQeggkJ2CCCFpxT2FFucRR7uydkR5wsNuJncMcwTbUNhdsENjj8Tot2L7FAxSYZ1WhHiZpZhs",
  "key9": "2AH21omt2zi88cWc5mwvBTP5Y5AjfVgvATWQhGHkQX6kcZ1VvRLPsU39WNbx4q8ZdxPYV743bhTiQePAcRqQYGv2",
  "key10": "3LsDJ4sb3UbydbeVS4zpb1WiJA6Ykdtp8V4dkCKdXLL6ByabdaD2as2rwPmNJVHWHXQWPyXhj3pqZWVoxBTaFzcz",
  "key11": "B8r2tGcTYtntn9TcsRTqsLSTfXE1d2NCmp9kkAWUS8Jzv8ETbQnG1mozN4x8txvMzsHvcegWJnQMoMGK5GDX8wD",
  "key12": "2hjYYobZ2dWiib91A74r3BNdLrMH5SVRT22Nh241uKyYTH7FSooX6Q62ncn9aKadiUxyiZgu3foDuTyRSPCGJNKF",
  "key13": "4USkdsu4ECsUKDiqxXuZchgobNivNufkqCbrduXCFJ78R4drX2X7MM6mSizaa5jU5GBS2b3pMszTvLvJK7YPbHEy",
  "key14": "4ScoJdpcRFD1e8pZX8NhPhUKeaBU23anintquczTrgc1nxPgJu6JHAayqXaAm7RmtvtnkzdpvKTTtRTTKber3U2Q",
  "key15": "3qLxtBAU2PKUWxGYxGoQXiMDDfmJ48C5CpvUD1TmQWDr2PTbWZUadbyHnkP8B7xwh9X1q6TgLKFJGJvMdVK6nPPe",
  "key16": "529AppxPGX6294Gp4vHK7VHebb1mHacDMo3NXqi81qektNudDGtpsGFpmSCxtiWjtSYoRAhtgUeG7CV1SoG3PUrb",
  "key17": "3GDCjW7nnuh5RpmQdsCzLhs4MrPC3kBYwJdTk348xwhrKj2DKcSsio9vd3sBLg1Jx64PVgHyFMU6cxRm6kYQQ1u2",
  "key18": "Koa7TUiRD2WXJ2bZGorzG1MMZQhH9ZpnpDMvTPtRjodrTKELd1GvkYoUZJ6xdRVnhXC1tHqgtaEh6tMd9pcGcXH",
  "key19": "4zEFrK6h4xPfggGiyxDssuQ9AxEWYYnbdg4WDViEeGrjXeeFutHTggv8oTrrRyH86aPijquz4EnPT92kFX2J2Fem",
  "key20": "2kwVPe74QjC1v3vsZH4aKFBSFyapWnczNJo2gye4Mv5BGwAMNeKymzMEqbm6bGn2wddQgnmkFmnDiZSdCCZRw4tv",
  "key21": "3DTM6pgK8Pf3CHVaeSS8YbNLKWrDLZqgt1FauFc3PTbARDSJgW86wKLJLKTpmk2N51RhFLUMJW3KMThu1CHxTK4h",
  "key22": "4uK7h394C7jPjNX2w1fQcvBZjybNUwU9yqdGgr2bjGfXMNhVDX8kiMo1HNAdi1A9Tb1m4yVQHkPmGnkCQANRXunA",
  "key23": "4VF4vqxZVizgMjN8GvR2rro7Xk65225FESu2HPStvLVa1hiVuEEJXrrt8z11FYbGsXR5CtPm3eZjnEWFSNWrYz1R",
  "key24": "kZG8xwELa3nqUHrmijhzPn3aFSUWpVA6S8pSXi45zeBne5SFbj5GEbXh1zpo5CzsZ8Cdm1MA8MES4xdW6G2v9P9",
  "key25": "3imDGn8zYs4wf82amgTi8N3MWTKofi7EVc8HCYuTBwaafY3zAHdaRJUEBAdYv2BmAhuMEHxRx1QbWCF2YVDkJSAu",
  "key26": "KajxAZ8WGDWSZ7Vg53hUjD3rc94itwSFtEmNZzfgYrxxrjTv8GxBRx4M6z1vtCqQXpEjgoBQ1gvcSxVn97kWERC"
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
