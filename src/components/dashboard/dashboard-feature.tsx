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
    "5NDSZdmFrYArkVCHuTNQwacD4NVhRpuBbcj8iaJQtkqoUjtqBAXxjoPhQFpRr6g35W7o9vb1HgzELQeA1EEH5ezq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRNog6UP6WD8aoNf7huJVqfv3cszCQS1Rc5b9mL5qMWkgH56s9DGz63WfVKooU42gHSdhAqSbYwiiQRNycXuQnU",
  "key1": "4XQ3p5FhYH6RAfgoYLHxo9c6HEXtgBNST1hXQZoFtoKm5jLrdqEjUaB4gXpcohMY4NQEt5X3wc6ewPjp5Kp2WF8A",
  "key2": "2iUAG92wAuY2BgQncLg8C7kjSyhqvrNJnhEczQD6MX47DFJyYcpheGpMBPRgGZrc42yxHi1QgPi1WPGHUyeEZqj",
  "key3": "GHDiFv5qDbYrWM8mMAr9nmAcVj6NtWgwH6TgE1dqsJWssWSPghUmQCsF8HRUmte1xZXTt7SDEGpstfULP6gbu7R",
  "key4": "3zAQhMEVR2vdRULjCHtWpX5mJn51qXV3PnSGFxSJeMyUZo5EP61ecSVNsxCswaJkJXt85gpqGenbgGDUeHJH9S3Y",
  "key5": "2yhAFGCdLfuxGUN6D9QDn7Nhkw4kFVNFhXE4BErkJiLv83h43851JhqZHdoH3KKoxNTVwL2b33bnu9cbfz4GZK7i",
  "key6": "2mGmeUjGfXdTV9mqWSG8pnv84Ro2ZJMSuown1j9hF413k7myC1yE1BwNgzR33CCmbrdKGdNVkHPz18JgfvB68zxR",
  "key7": "5kb6QghVWJQbqcHSZK4qXqKhm2LAL84YoCPtfC7fKwsJiqT3r6YMJYrLJAFR5qNwQ3ggfq6xJdtvA7mrxsCCEmzD",
  "key8": "3RpKMUcAL4aMGCa75ogUZSxhDxjXy77MHieUMJhxL8nhRz67w1EjotHbPMepeVSThGn9qvqTW14VzUEo4aG5o66q",
  "key9": "5YiFzzGYT1ss9MUeujdKKsDzhAk6YJq3cHXVnDNxVNH6GjzUe2rAH38duwfutcQtcFSjakC5PbZvSZX3Ho7kb4xH",
  "key10": "3oFeLyjp7rHn8LwFNGemN8ScWAPmomZsuo39nXG8tMbx8r8iowKTukBzzLv82m5r7Z5TKHLrDpHjoN6uZX9GE1ZG",
  "key11": "LFpBfPQgTStXziXtDRWox455HPA4Tvs3jy8kpz7ckC8KhisvQ4ifdADwEazdzriG82varGYchAu51CekfmSm5WW",
  "key12": "56qSQrAc3wxpWkdWUHRYjHuNdx2bwfxxgYJbFJBTN6WWhqrKudoU7Zbn9W12bw9XbA2wSTVHr5ckyZeQLQkFXrmG",
  "key13": "2GvtTaUESnvBvAMMyG5RfJ9byZfqBTFCKgo9CU89gp9EbzJVjpdDochtSeC3WUVCqxQzMqsHgBtqcMHuyfHQ8CZV",
  "key14": "5Jar7fhBHHpAfbDtD2SUaa9zYYEkABpvfqneYSBkg25DdBQYrMUszfCGoXL3WBCdfEHsf3MwdLT6fywcudD58tKF",
  "key15": "24qXJCrTUqEp3uxquxgG8PjdFxQ96bptg9mAsXiEC9avK4ig2RhzvLRvG4wUB1gGifZK4TdqkenEGXwnJ2t6F9dr",
  "key16": "4QRnRhfLzXqe8tgNpVt93sQ3WjzSvzBFkHWCXT3QavsuwDPRzWZTy3XHm4zfATyhh29dLCkrZzHKpQ4QgkPw1jy8",
  "key17": "3KiVoe4etBdJrCdHFsKBGFXkzGWcUmjRLvdHXS4e385j79sH3W9CbfsDzQBk3fcbmVWPSMAgN3cdDGHsBuMUTn1F",
  "key18": "3hMNbwqTtJeDbbSggKFDf9yvcMvq2j3W2hqnd3mRAyzhfwFQ3EqijwqiSGPB7xZYPDuUypcMgzriXmd5qY3anGfg",
  "key19": "VZFWC5m7Qtme4T3QgewHb3pNXwTfh1rtAkDLTPBQb9AHrCWNUZT161kEZPaRqBADgL3EWtmBetyjCYnHpA63XBq",
  "key20": "3uT5w4oTLPDotDQuSkgKjTDNiRAyDmxoRBiApDwgFvF4yFAc2BnzNkvydg9iM9LyhSjCVYBV1fr1YoYwgwPem4W3",
  "key21": "4Y3yqVvYTVUJUP4KTfFuiHwnGeXHPQ2Vvg3QVAeza2CgwGNmuyNQMMDexgoEbAzunrMpihXZGWo5bkSzSgZrcN7v",
  "key22": "5EGKw51RjgkTdp7fA4gFWN6jRZd7dd37GAY9rH66NZNkLWoVZHbdMiKLjxHmYc7GxekJBs8PVevT2MNVPgM1PZ3W",
  "key23": "3TYk6idw2eAVmXwB5vgD2dLActoS4yZPGRaTgvbWWfwgy2ZB3mbcR8GZauaCmAVN23Q3c9HeCDcg5pddvfszfR2v",
  "key24": "3ZbDQDtUJdqzgvBthDAniNySQAdc79fjCexXdcZMjEf6J3JrjST5AxaakXe5Eo6inPXDvbA5Yr2P2KC7c6NnvmiY",
  "key25": "5vcKdbokPpSVpifqGeA3Vx3G4cyzdYVH1Npeypv8wPdQSXetTDFhjE9ffqjKm6xcgCMNEubH2oKju12BxkgrHUKh",
  "key26": "3hvb7hZnVHGysP8abn6L3b7Zm6wsJGpPNvPHtWZgZhr8xjKcDfd1c4PdbJcbxHfJmr6LYVsCQAEJv4vzzFHGbNeh",
  "key27": "tkr5Pb8TRqu66UCkR7SVptLWGVrUCC8JKa3RmhVcNHJG6MUP69RViTpHJZ9vqQZuHMsNq4fc7dZk1gqJKEvaFyK",
  "key28": "2STM5xhHp2Riv8TeLCVQgUw8RJfLfPNvRCyy2B6P1UCzKXzNWXLZY1E2tMUq4aq5kqVcr1icu5wA2P1xddAtayNz"
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
