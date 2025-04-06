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
    "CVZm5ZvTmfzkicrxj1qXB9oF8M1qNY8vwpyoANLev7JWAvieuZXk6ZEdHzEXEYoaKA4xJKa2CtbTqT1Tip9T6sH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N6ddDJhcUZ2L6yuCdDFXxSaM1FHfhkCFjEkF8fXGVR66ePXYRXtGF9eyPwRuLNt557vr1hUWCaGt5fFzk7XGKhA",
  "key1": "2qXi6foy1tppK5DcA3ybGs8zqCUW6rPVbaBx3KbGnnzoxEyGqf7mESV9X3ic8KRnxsSa3EfaFERuXsbALzi9AzoC",
  "key2": "42E2pHVX1yACgr9v6zGmucCuNZvq7G4eT26nYWfvnjsUFiGGNoKaiLDNpyMghPGpWgF3fbT3wGHj3nGHNYkXwJwq",
  "key3": "596RzXRpuB5oum6bmb7NWip3z6NTSfhfGA7t7BZbmJxLjJfQK4fb3YVw8oRea3trdyBWxiHmn1MXPa8W8oRc5daz",
  "key4": "5grr7EnBc6m2c672b44zrF5LMQUYMki8mpiM941Fq8CU4brCwpMaRUuUtWgEraoGtNvKhGLyftiJH6FLbGZNnmgU",
  "key5": "t9tZfeqgP6V5X8HGpPCugMZXwH23VpNqM7oBkqmZHfLXLLCJpqHQuXY9qYj4TLbv4Mx3tWX8UR23H5yH9czhDhb",
  "key6": "37a7vUiR53xFT3CikJfnX22VoZ94aaggJ4mydUy4ZLgk32rN6FBau42mgrYJQMYs45tK3nxeLn84exKN1wVV1mP3",
  "key7": "2gr3kCB6x6C3QChRyAC9JF5nAbydaWBWEGHsKVmc4oGKa8ixkbvkbxv6S9CnGcBZhqZ4p4kRwmPCCmBSbW7u1CRq",
  "key8": "UPGHvASdtkvaWUnufWoW6ZV7jMtEhQCND788GHucGqNLKYxN2vg9k2LX1diHRWvgzyjC1CLzvhuyGibqdRtwuyj",
  "key9": "9CUSuyocU1WpsEYo6woLLe5j6sAQh56kbvqw4zg4fLjqujJqgcbacjcyiBmKEHNPDYLaxBGrua7Qws15eh6XTaU",
  "key10": "2Dj7vXYKyWKrCpNmZsCznzmbSp58S9BVDvxFXetc3Wy4JLD7zD7YLwGruhmb5ZfvR6QGKE15kzT3GwRu3Dd22fqD",
  "key11": "3ArwCBSEwoj8BUZNRQHBPSk69q1XoCAuKfXjL3KhUraB2YQicTZP1AaFtnft3a5wk72uUqjjyVmpkQ54CSUocWEP",
  "key12": "5fyAF3LWkhNbgdcnqSomeCYudiFh4EBdxDhwspLWdbUEWxvouwiHyKj55hWy4phmtyLxpQS7o8eKbSvMRsXcfG4L",
  "key13": "23akn91m3vPP7FWP1nTqNvwAZZHer1XTHyqFejnjHXjsHEd1ghMC94CAd77PCPGHKjRVvkowuhavJ8qh1G56jbvV",
  "key14": "4vXcpaYFnaL4vBPTAJNi1yF2DVmN3GyioHjsrf6UdvvwbE7nztQZoL9cYCzaBpJWWxWFXZ1yAQNazKkLaX67Eo8c",
  "key15": "2NYaveN2S6sFywKdb7zcBasUXDcsU5V6FFMsQLpxmRAZCpxapLDffpYbjZ24RnQ6bxzBbR7KT2CqbFdBcQ4uRPsn",
  "key16": "2Qdb7RfgJDvzfP9hK7W7C1fyBhSPgtqXzvA3h8YJLZH9htCeEwu6WxNe2q9Y9W8QDTMEx5b3N23P8YPd7P5PCJ5S",
  "key17": "2Z6pymHAiNUnXo7dptD7m5yCkFjQ6UWdMcKDXYk7ED1h1ssuitqCx44jxju3Chwpd6dp9AXuSo8SnTJeKTspMUhM",
  "key18": "5cxtyaK7rzeRbbsu3g5ufHEjz47gWQ6JVrJMbdXBHXJEHd4stkD8tBuo4iUequ853QF1XJt7ZgVRnXWMJSMpTDxF",
  "key19": "mN6f8MF8Mugc6HUV2Mn5PE5tnynyYthPYBTjAWW2jvNQDy7C8RSGmYQFx4ZzC9dazdFbCUYbTymNhjmtNnyJJgX",
  "key20": "3q9tU5o8hMWeLi4rDBa1H8ibMvT9gswVvZ53oEK7wdB29apnkCxzzbNh76asidXEWa2vQibk7fALUBnURGoF2Tth",
  "key21": "636f9moLipfCXoY4RtTxT19AbUcxtbR1RYbWFHDRDZo9pW77QPnGDmQhpNVb4CqEo2QKRWnaXxaM53Rd3bHM4eZ8",
  "key22": "3GheCjrroYCeQkpP283PwSvyu8NkJ6rGEC8nsLELr3C4soTjf7gyLky9JicntnvQqk9ZqnCCcaXWyXj6ThpNsXkN",
  "key23": "thH6Eo6bAzQN6UPifqB7StmqyGAY6MkxLyWtvxJqQW3V5mxACn8dGn56ngPgtJsouvW9UbxkHLPSqC4UfyKEPCs",
  "key24": "2je4n6rw1zmVqzWoYpUgL4w2tJcvZwXFGzKazS4UhwohiCDgD9VSaHv19W6rBg6xM3iFxPXfSVsPNu2TZSBzc8Cf",
  "key25": "ycQYdFsSfyQL73rorUKoNfNVxm1CxXHehxTXrUdAgnjKyMJWDyg7CYzzmFHyKPymjugEqyVAY3GzJ7xtKJDZ2Vd",
  "key26": "59KenPqTDpG4dxykh6vbY9ANNkboTW1N8Zk9a9boNMDtEhmXoAWeMq6fgWAq42hWVeWRwWwzNWASzsKMfCeKXuUT",
  "key27": "5CyvYFho131yw3q65wJ2qF6SHScGBcXjcVJdSdvwuT5hKimVHerp4P7pLxPsLigP7T4ujU61RRzAMYFxoybSR9b1",
  "key28": "5poBsp2Yr2uvCXSQH89fxysjkyxh5G2RaVxSt1ThGQBMQU7KvziEvfVGMMSRLd7sSDWKSpSSUDmJCWnQaVSPjRYU",
  "key29": "5MwAuXzxsXFNWcuvFazNDzdtXdBCDy4CzMrhs6Fj1wzDohKNzyt5WQHKNSknBjrefsXkSq4YKUeJesTjXzVtzntS",
  "key30": "3KdEiVvMm64jUULuMJxzXYWmkDjRhuM4Zy2yYNeRikk2fH74dA5anzTh57aDKJnZs9innyzxKX2ZvdVKH1aASrMK",
  "key31": "2Tp1ymsbUzsyLmsogiorPYjvLQai51hJz6YPCBKDBeHjpEGkm8UW8sh5jTKxSSRKEdG1Gzgdk5w5W6GgxcPvLLki",
  "key32": "sRKG95b4Zo4q7GD2KcbMhiBYwnJnSmrBUqLgynUciNCd68uBrLtAdeoG8ru84ZNDEi6L3KECKqEt9n6vBLEqAy7",
  "key33": "5XRU22a3p4XRKe83vEV1CkheV2a7bwzGmAedNbeSewSESUnnRXoqgHjhfQPmiZrDms63Kmm56VG5KCeh6xwCrr4J",
  "key34": "5KUy5aw74pXuUNxHAZTDbm5McL9HSJw45ZHd88Mz6Qwr6Rki8xwdo3S7rdszL6Pvhe7qJxTTXiveweqBnpXBey4V",
  "key35": "57Mj7F3GJPQVWcKwp8g64FRP47jVNhSKufREQMxYDacr4X3edrf3SjvMKyaaK5DjzdUgDHxRFrzAif41uN7KHThH",
  "key36": "stPn88U2Tsi6hR44TRxJ32hDguaGL8i779kCrvDGCvDBuzUzvHoWjVdvesGJfJ42CcsaCtKWeGge8oB4XTQrf27",
  "key37": "42xgTXfdzxb7P5cKt7rC1N826Vq7Kt2YrinBFzLq9yhM9KLjMNKxdSfmf6WK8Cn5DaBUqCMNmapoE4Zseu8Mfqg3",
  "key38": "3f2iAcuqMPb5eQpXH76KqyDcPeLnmi2SCZxqZqJ3xV1UmDGCJHmSSPrwyXGsrrZEsFrmxMLPeS2ZGRLaf3Q6g1z1",
  "key39": "39Kdwu5yYczhb75paYZKyRsnmHn67N5V34Gz7Ms8ZQy4bGy94mgLGE8wBkkVLVgdpcyPpPkDhdPtDxs3a9DewXko",
  "key40": "5yGf5mdJdkH9xKrbtqCMUd2k52tGktHKzvTPqRgN9QH1dCnB82K3h5m2a14pZG8tDh5B58R6JpBgdbCYBtsdyzmc"
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
