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
    "3g4Px18phbKaNgiL1Ka7QqNZj3UeFmEK8zhsXkXcmqTpg39RGu1buW2qPCLC8MG8xD17F7X5sCFwH47NUv5fjYAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ehaSEZyE2HDuxJZScHxLL1Y8UiZJtDejjSpei34JXQYsgWpjxBDdsDicxXHK4WafTBkRFH19Xfy7ZLCzUmL4Jn",
  "key1": "4aoKRfeUKCPWAv1wzvAicYtRSfvkwuSYFq1FyBbzMyAd3gUmH1whh2wjaALyRqDspsESfX5mAofdbP7Kjtrh7REM",
  "key2": "4grNBLtY9PjZDfXKi9iRsuypDpR3t728dhYAvbaoetC8LGQZRZkuEtTknXTwyZ3kN8UodxTRtDb6ME7Aioiagee7",
  "key3": "2yoVbtF9SxQMVDK3pDQWaqrd3T6yfwYE9GDPRt8ezqpd27RT6dtTob6hUstQ9ZpwRsc3CGPywerB1Ek8v6ZEc8dg",
  "key4": "54aK1urZzTLzUTYDUXdqSdsXFoyKcRv1RAPy4S8zBbuQeeDbf7daMJxv3vQdZ97gtwyXEMKsR3LfwnKXDf6jQfP",
  "key5": "5UfYqmyqthuWMAqKG4X7FiCo5bYKJYQjM11KhMThAJZFQtPpzjMfvURq9kckmuo8cYyqpwfBUSmyKtrFpRzX64Ah",
  "key6": "28YFoJShJG3WZMzWkMgQHMHD9uDERSyGYQ6FmWgKuVbTwvruLxE5siWCkHBefbXEgHa8a6Hdx1QJMHFgK4HTyqat",
  "key7": "5bRnTt6Vrt69eXPkUX4dufAGjRKwGzzj9w9yUtxktBEsNyhs4EpUPxiypfiptXLYfxoY8HfYRTRXpCWXmAmobona",
  "key8": "5KpeU7GfhCvNiL3xEbcLiv4EuLQcQfWcYdRmApBHQy3wbEQxhJAA9Xhuwj1vNQVMJSgUk4fF4yezLjK6Z6WXE2dU",
  "key9": "2Hk1NyrY3A5aGgD1k78jLbHB1Anay87CUqd7jxdW8FQNM4vCj7XzEYeKfd91BCqYMf47THTBXzyqS3D2bFDMHPnS",
  "key10": "3ViAqHUJq9AgHCmwgiEa4PVcNmxymWS9nUXg6DEdAjXQ8CwSYRLNfx8yDJSbTsF1BkhWwSfsMnQsUMrjdmqJCn4V",
  "key11": "5N1KEe1ZrsTJoxsN137ZQRQG4YpCEF9skeq3fWoCGkUGtmSpgsbSbyCiQqkL6QFENu6CZrYWZaochtm9Qs7V4Z98",
  "key12": "3JnGepXU7wGj2td5E5D6v4xNCARwzSFAKfiEJToCzVk7KMvW18R62XJBLUqSqNFoCrzKf2jjEnZPRUE1ACusaraK",
  "key13": "5Qw1TJwL6t882n3o6DT5ShjNy27ad7MW4ZQDB81qr9Nvxbj1gzGhcL3b8muvw9TNhBnHg2xRY94a86rskoj9TrHS",
  "key14": "67FERmp2VDSKq7G5gQaLJq2Y3w1FRc6k4K1LPEsmqecV11yMRx7iyCbKpdsH79Xt7z3oh4ont8yLoJRSL2ZppxRG",
  "key15": "57VtiZQxtM7B6gZpsHgEkVHhyeCW3ydD2XfjMBHUftSmLYtYNBskbT9j6HXg4WiopCVmw3trWFuESwfSwgs1c2V1",
  "key16": "5LNX4eS9dM1aQCSHGa9ZR3hEBZMvfKtEKHHgSMAuo8JRPmGzwT3b7AjckphXg8Yyi8ut3UwbmnfUGF68X7Dnkfmv",
  "key17": "nsmsWYSd9og8xo7DA9LMwScvzUWixkdhEZ7H3kCyzs2jdngnh1TLStuxwY1Ed3gVhGghFTRpbVfwKGkRX92wUMV",
  "key18": "44A3msy5WbCg8xM7sebXBTNgGpAEuDgmKb2TLZ4XLirayF2WpuddM5bzGqfhfnaYB6CCUeMakua7FSyoBatp63aY",
  "key19": "4pPaG4zdwEGMh89YQTNTV3kBQ8FiQLcWPfkTHZg5t5xng6mbVpNRR1Mr5ppPVyxPy2w3an6xmkfgQ5qenYxW7Aa7",
  "key20": "4vNGM7Q56Q9a4P2AsB9MaSYZvmJXv2U6UkiBaETisDTWdPqSxAJKNf7a9LS4zTq9RzRgCAU1wNg3vU89GMaTSnU",
  "key21": "61nGb4zHyLKD4BPHSUXVcm9L3bmt8c9LE4pEFxDggwrdxjm8Q6vC948oMK4pcG2zVMzqKiMPzkQXQvk25kaVexxX",
  "key22": "3ByJ9W17PvLs7pr5FMTaREopCRAnFKLmVnckNwnBo4L7f7rjC5ggAGnLrwzvYYNH7EAfXo8wcRuCpbZB35SUUpf6",
  "key23": "27QSiZKYsvg7UR1m2N7gcMjF53fAXY2f4BhkXMvFefuX6yViUFLWLa63unFpakBmXsgwFZDgymTxngjJdJzqRKYx",
  "key24": "5nLYrQkeQSdyVxUDBvWDBndxS1nSez7EqjP6NWm2mM6CvsQJXi7kXjyjLRnCJ8q7epFeTAeiB2PgVJ3EUZvRi41p",
  "key25": "4VHXT1CeUDHxXPHSdG9GbQusVFtfDhPF6hHesg5YM3mjbhViFoBoMgPx8rs6NFp1a7Dx5uyacBAEbNxWp5SD15LF",
  "key26": "2gpd1Y9P29rbEASdd6WY65C5K1H4tHDPG6fURvXDzJZxnGXzciM1dNmJn5jMaR8aQqmgzmKpRDV8WDomWtxbrqro",
  "key27": "368Xsjo7AvvsaUkCbnnnRcspQkwYa4fPWARXJQ52KkvbVcxHxmU4BNL3EvqYkUADma9Mo61uG6x8fashGdqBGws5",
  "key28": "5fKjssFth1kJ1u9fG2tVY7FXFjV1y3QUCFLXnra5kHdS5KC3eQVA5NqxHDdtAaJFTGWT5jKKp1fi8v9AuQUF1bzD",
  "key29": "5QkXEGvj36DG8nDPfs9o72gJsC6BqyR9km4H3rpDVue1SGP7bvEJcSkdwqskvKwkBut4YHwNUQnsnJ1sYCerE85U",
  "key30": "2M2CREMLjBy2M9e9fvn4LurPrXeDq6QvN29Nd8i46vKht8nmpMZ97rQdsEuequkYQhMp7t1D1RpCNA9a9jxgd49R",
  "key31": "5kxqG1VP2GoENTMwHvRhWBr7sfedkPJvff1afxFcog9dMG8gY6B2g2AEsbeZNBk8sfbWQN9tQ6883wWvLQXoXVuD",
  "key32": "2XFdmcu9iZVghsqiuJVYkpFCpqwMCb3CxL2d3UCakXZyLzcVbFdMSXTtAXrBhULRmMiK8woaKBGju3ZZV7MSFYUE",
  "key33": "4FDqum2w4Ah2Cnk4HYMaJXoYVWrwNdGh8EeciB46WkhKpiTbG6dqAp2Ljcnd84PGq6Bpwo182JtkQxwnLCiNMcT5",
  "key34": "4AXTE5eiX4ucwNPVKBm2AyFJMzrkmQPj7eZ9cZESM997DyNyNtGNPWwo4UEU51AvW7LjMMZbJb7ceVAKzjVd6QsN",
  "key35": "2pJeXqnTSTVDn76AeaUtKvG7LovAusfpsxrGYjHez53j54az5Ahf9a3wRSvjeDwiSgGradSfKpRE6tDQjU5bQNC1",
  "key36": "4S3M5FpND7rrqibZuvjdeLoyND5bCPWGpV24tuJbwYjYR2veLkWewhhuTmjvkS7FSZv6YzcGqzV2z46p9yj2UC52",
  "key37": "59XvdBX4dHv5tMFL7HXh13toCq2j7P3Kfort9YPWq7hBhAZMA4MmasghLRzsNTZ5Ni2Gh7zGjx7R5dAKCipe8Y1g"
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
