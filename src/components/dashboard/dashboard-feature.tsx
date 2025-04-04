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
    "4jiurRLkrLms6m89wHDf4qhbmzRsurBd9adsJjNtZrw2HFhRBuo2UoGHXybkbuC2rm4GbJyJGTBUtKXV5SDDVuHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YN5gBw1rT9xQ8wg1L9T35MNjjEdCSghtNdzZwVDK3tRVQs5JtwaQug6yQCwpwug5KhrEtTjDDexEnqPB1BULsER",
  "key1": "5dJLaajG4VZSTXJKoyJRihmAQBM8aiFmrDhY3msZ4yMQckJMrFrezbvFu6CHK8WW5FhPe1F8wMzYkFSUfzgmsVWG",
  "key2": "4PSfMopm8Gm8d6nrtHZPcc3h6WJjvovm87gEPcadJ3SBvL9gTxbcaPQeZTCtxHDkQNpfDmwdSx2QaVbupTokjie3",
  "key3": "3BaNpuiAmRRrzuHbMLmHbvzGz4LzfaW6uktdst2Uoejoan7Fz71Mrgvgno2nnwcMUCNsx3ZzS8kGAcvgK6h7G5nw",
  "key4": "3C2ujszR349GvbZ5W7xykxVKHkprsHxVoYtZ6foaaK5DrAs23cjyox5FeWb1Fx7biXFxp2Zd4ZBa2dBdpKi2h8S2",
  "key5": "5qwpjPsp94kdV23Uq2StMFXM2AUaPSdfSA4yC3LXRJpYq2gmjnCAyJRtSqiAueT7eCr6NAqRMkvBvx2UYGsv8W8x",
  "key6": "Xi9adUDWdZiywVXD17QUaozb4SZgPQKpzAV6JimA9LsLeYwxWFqEkfvdFWbrsYUY3sZR27HaxhSZhzrHFtvzpgF",
  "key7": "28E3oDnkQikbfweHrzQC7ioquN4G1FdCgoqaMnSEEiVhYUuP7rWvy2E2DdJPS7Ey8DrGt9oS3oseK7tGVDczdkKu",
  "key8": "dKUywRsVUbjNCkh4FKUMroLhYcxJR9XapvddYaCU5MPF4UTsKp4fcxiPpoFPkt4yhbTZoPz2hQvRbEz615JArH5",
  "key9": "29fYrLAXDBifz4GYPinhhBNzDdfmMAMrbvsbUgjJd3mLkeB6osK2jbmgYB9Rjn13CupHiDZ3Gf124C1dxvh7SwUi",
  "key10": "3M7ZadSmWyQdyUqL3m8aemhoFmmthwNtYuzcaDntwJEQxkDMpAUfxcoEGQrPMTbyHVkymR3HkZzWmQvJYHRCAaVu",
  "key11": "73BqiwtAdHyEy2pBvodzPxZLkf32HePJd7WAVxUwPaTewnxKzmnfv7PRwST398pM5CRqBKDWvVyyLUiT3MR9SPE",
  "key12": "3AWoSi2b543tEsMWvXYQsfwkV8FHbyXdAR5U22gyvhPLfKpuo3WTr6V5vYoiEcYvoMm5NQzmWbXXMaMFGESZYbWG",
  "key13": "3h2S1yhVTJvPeSnWmvu2xrB1ETHNEr1SkUp92GLQwoPdhyzPa8qaTKLRUvSanaMaMSYi3QKuavAN2GKaNqfGn4Gd",
  "key14": "3QjuSbHjUXi9mnM1Eyp7C5ixjfwsY6xbd67H1jx6vHySYuPewNxU7i1rhLFVczWQR8iGWXyiKkd1oW68SxMcmN4q",
  "key15": "5QCQEwx41Da4jKCQrXxtmvWjD3vN89JS33TrQv3Le8sK42FgxHprGR9uHEvi2nZ1H1RNxdyQcjZabeJNSUPtnash",
  "key16": "3QoBiiuz6n51gMABuKw88zDmxP9BPNkcPTFB5psFSrYMW6EWrYgEJvahjo1mmS2G6reiCh3Mz4AyBDA1Zh2xwbXc",
  "key17": "47nfkc92RMXDUmvUgngSKXozMguymbkGqWzU2P9jTQbCBY1HcBBHvm5UqRmpVwsvNjem27FXwVckzCQV5aaDwfv9",
  "key18": "aM3XxGJcbDpMrjJmEYjJTapbYpxCyixC7LRZuhB7UiQq8Y7t6rw5NW5UbHgbvsRd1KuiydpWyvtiZCuHHiKypSM",
  "key19": "yYfeFkFLBthEtrZxkiQT5Z1wq2mba993H4WEwEEwGsGEnLpGk2nvFraBKHQGi3hfCZKJUfVqYzzL4yRVTRR1iF3",
  "key20": "3ciJfDkrbkxXQ1h5jgYAJXqBCYEharfjX95U26rgQ1jkgJEYSW1owQwgdEQNZ16TxhvuJciBfdxpdLxMzmua7vPx",
  "key21": "5K1tJJGjh11QnJ1Tnz1JNbZwbWRjHLiEQU74tain4E5m4krXMTtRhovTTT93HYc4hKmLomy6iH9gfgYmzNDXG49Z",
  "key22": "3mY6dmpZnxb7vBimSmPX7Crdb7UQ7GbH4dseXaaasafAJ5pvofEW5Km71kCgsufDNuspjmxm1AFaipNaYy9VTWqu",
  "key23": "3TDpJEtBUyjkdEHSQfHPYJeQyfFh48qxSYREJKbDmCh4o3N8Cq39PGLyeteJwHiDSnZSGgKY6e6n5Nfxwom7KzUN",
  "key24": "UKa1LicaR6iLnCi8qkFCay2XD82JLPbFWdhCQxCDdrJkzSVZVY9xajQX8ZjnfuikxtZZPQ4sJwh5EMQnHV3pHGo",
  "key25": "4oFmumMr7rQUQjtYBtpDtsNhXgaAu2bzuUC8FMLZWSXUSgAjyTHq2vc1o2S8kDQEJwzCBzUYUTBh2aVEnTW16R6N",
  "key26": "wtZtWr3JiHFKWFNGtstmz1YqYBvKeDv5ZDKTpTSVEZNnU2gb8TqMXtYWvbGDALFwiicUZrZmkAxAUwTYpGSYmpX",
  "key27": "5U9GGSmPpLcXeyd1TGpdSRUb17fqqqSxmepcQ5gN4utKyZv4dCzcdvJ7AjySMD12jQ87KQoBp5pb9aCetD1taWRu",
  "key28": "2w23HJaisvQ7BW95v2CYKc628pvK9tNrrs92gZpKZYbzq8kz5KDRBWgZCb5iMWojo4yNH1jqYgNtfnMVin1TQwXG"
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
