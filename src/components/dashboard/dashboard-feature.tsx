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
    "mDcGcKefmvPikDNZjig1RdsRCCp6gjcijrGJD4r4M4bC2qM4pdMixzKxojJzS6yi35o8Ceycv7yMfNikPznN3Az"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "zdrN8GrZDbGgBG67BKYPgN7YiLKGDZcqukjNHHMtAy1gUnZYNq49qMgPsDtTQcFV2jupQsB3vCCeCgnfDcVQ9VG",
  "decoyKey1": "4W7p3kUbJRJHVWKzLZc1iw8CTWKSt1v4xQxninzpcbWSvJrp6RFQyy2UHQDfDaYf2Aj2XZXfatFgaxWJnVHmp99c",
  "decoyKey2": "2MjUPLofJcs4o98rYkJEyv2vWND2kLpZuK7mTxnY3NktYtK2SibLDYHPUjwTu3GwM4hsaBJ6xVzJetY7uvDWWxDB",
  "decoyKey3": "MTMTWHUtpyCSzphiQP1kWaXELAdv5HGreKiSkAY3wK1f4xCqxPGMchbT8wtmECRzi3Dt67xUzgFTvH7Tqgpc3c2",
  "decoyKey4": "572YSWStLWDMsJFMojRqtQG7Frm5HPCveaRZNfB1KJnHWDv6oNXGaxrRAjJvf5pVx1v999W8gx6L8vDPSzxG5pg6",
  "decoyKey5": "2AeSvU5CjJtXGa2AAzrqt97LyZm5WrRkt6S2BLKtnfztqXDwfBfM4KUpq71niwa5JucT3TGhKuLQu3w638NLuAmr",
  "decoyKey6": "4VNmwcBFMjd2Ehrz4A9x53XuYeUDZTXceL7UhHu3gVfh5H85rNvVJBebB5QePxtiGX6odhF9Xm4VTQWhLBqsmhHd",
  "decoyKey7": "bnwd5y9fp6xezSQGi5dUUuUUXDGE8P4cpWUq3KLib66xYHnC38QWCYoqCmsLZax4T6ot5A2jEwnavQeZbHY3ZgB",
  "decoyKey8": "2VYec7snh96iJP1Ur7jX1WuuEgZc5egKi287Rui525ovmKCrGT5j5ed8gpbbBWPrTLNv2QWsqvTfPJe9dxccZD2P",
  "decoyKey9": "27qrYTCBk1zEcKwQSExZZ6dfpXn414GZyXAWd5JAH2JAq8QXkAsseecvr5GHacVsvi6KFZGTEAT7qeNbhKefwyie",
  "decoyKey10": "4d8xPDWr5GfxkxGmJRGXXD2H3LvuzcDzpujqRU913G7fHVYNWCLPmAdyZqnedwjrTU1WUhxpDus9R7gQ1uT8UA7P",
  "decoyKey11": "5VWgvT9EnxurPLJvsVKjNAFGmUwL5RJNpoPvbep4dqzPDDBi2yTVR4QjC9AkEQsTSehfjhA5FWH4pV8bN4KoJZJh",
  "decoyKey12": "625NSJDZ67RZaLUGDU13TWGpe2fs97e3FD4wEoG3qfmkWdp4CNohd49yet1WqoL7EUpcfPcHnHu1DY5aedaV1fs8",
  "decoyKey13": "3x6V899CALn926iy4Do1mPuRRuhzkngfxcQDgYWbkRzKtYV8XKeQJ9ai8QC9SaQSv1F8zzRhZPDuwWwJuUpj7TvT",
  "decoyKey14": "uSS6m6E3v8EAANab4KNyHHif6w3oBLBTUVFadmsm4Kj9hLzaY2BuQWdRRP757p1MFPyXui3HNmQ4FuowtaikxP4",
  "decoyKey15": "3TD59N7P1kUdBHY4sSvTmEyxBhPh4PjeDRVGzzqFj5Vxt581wUsbzQzWybiETxeVh9mXiqf2zh3as3U6TLo81XLA",
  "decoyKey16": "2oUwSPBudVKvYRBE6PSoipxwq5to3LoiyYtRph4Eho85tNvmhjqz6s4WZrqsUMuE9NMDT11xaEkXM355WTDui5Mx",
  "decoyKey17": "5iEv2AGbfwYvmtXbzP6MLs5q2BH7wNoj9DDGZChkL6KbrQ7MeihY2uiuPZ84e5xb4xNZAYGQJKEsSKox9oLE9Vbc",
  "decoyKey18": "46Cio4pyeGEDJvZ5T5pcDAk5bSj4nYYJvisBpMFjzTcBv1fm4PB7PSZ1N8UyjXUvXHwu9DuuczkZow5EPuaAiLyH",
  "decoyKey19": "2w3StjruVybg3hPrC7daMLgaGCfsrAD86nSwT1oh3EWWQ6RZpbHMiBHALWp5DuvsxmFWduRA7AGEZCCobeYBQDAX",
  "decoyKey20": "7XLbVtAC9PRqZKgmPwPuoP6N1gG77uXr4qh69jsEfzWn9ZCc5DrUzYFXWko5hX2vahkdKHXtHQpGS1barA4MtW2",
  "decoyKey21": "3STeXrq9gobZ9itztdqaRcMB2DLzrEy4A5WHfyMbBGarJvHP6bwY24fb4wSPUnL8QWq2SRBVJFo2ZjCpdPVLURbg",
  "decoyKey22": "3JyFkBvBDQeU4dp69oB1DXW866sCbhe3owrwdD9o6DjyAkW5RdAxTZvnjgVJ4xoQDkiNZpeHmBTz3HhRiyLYDEn8",
  "decoyKey23": "5hEiZS8WMiLKMTWABsdyQeCrzCPenV7qoQguMsQEFFqrMAHePNrGaykY2AdPuawjWf4wogktrtQcQG6ahwYbePoT",
  "decoyKey24": "2vkWSogopYNAcn2H7h49hn5H3vzLndQXT3wmj976b8Ncg2JKMm8QcNrmZxpSvGbC4gVZChwHnKoW6cLzpyHrtCBo"
};
// DECOY_KEYS_END
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