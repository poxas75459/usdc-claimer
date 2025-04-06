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
    "5GvmtVvdSK3Yqtc8fdDCFENzoqY5k2BnURiZCyPi6vRstYHtFndvmSYncteVyBqqJXhNzhJ2e85VuAvJUTxcjPrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "486jsmpSwN3cBnDBmjQyVFpZiPdxZkx36hBB32WCAcxTSDcit7Y8cqLwAjeDKLVa5ybysyJR9ZgjJf4354myDwTa",
  "key1": "QvsN5QsLpP2aFjkFsmByLjE1qyGBvrV81hJbJqqn6UgkRbguGVSWQgrUKBsBSCwGKTcUTNoi9oTbi5jhkYLXyNc",
  "key2": "3VvxyBigdzr9HCiaRPvRSSS8fYTEcK2a8LgexyiZ6ebYN6txihxVARDHWhQE5GFtmxSaGGrxPDNHj4bPpnoDZVKc",
  "key3": "5P1dDSXToYtGRDmSHYVTKyTyBAZG4wNSHwAWujcmqd3BNdJncG5CzQRJy7x6ioRTsp3JPFW88UmRDjMcm6GWQWje",
  "key4": "5YNS2Thi6TKQrKcWYx1JqQtqA7HduFZz7JGjWAkwifLwvhorFN9Mtxj3E6JkN8LoeS7dVgnWE2L8rZMPKxBuejUg",
  "key5": "46epsF7JXismJevqbGMMupFpuNVFzUE8CwwFwhwGrsyoyJ5yQ8LX4dZmaCHDEnQF416kKZiXQqZYNkA28sgbEPrA",
  "key6": "5jMXfvYGsYqYeTsPSZZvcjBZHZVFWiXypGfv19HsPXVgdQe4ZVshwbxTxpRWsjYvui5xUtfmvinXfRwkFMkd1CiM",
  "key7": "23YN5H5VPVHeNEaSWqhT13zJ7eYNNpbKL4KxvvFdMgN42Fzi6YSrv5qwYtzGxTRTVDp8MTscb6rsqm9r99u1nBhV",
  "key8": "4DaVp8nZaySfyW7YQb1iShJ4o7U16ZkPKooHPcVkwHMFnQnKy5ndcVfe9nQXVEyTMuWYhB2CYBoRwYmiGZJ84zeh",
  "key9": "5u1BNuS6pFMxe2BrvNgfmo4A8mWwemWZYqFzoRsvMDdveSgF7yxTFUNPJfk7Z2wLgyaqJ52yqErWDqDcHzEC18bZ",
  "key10": "pv5X4uSKDPQe3Zg6eFcHYxcjrAtQ6KXpmh6mwVKnHTWR8vJnn7c8694PPtvctEFrDaHBVMaKGBUxY4fQshoKhMq",
  "key11": "2EGmbWNurC6aXTLqCm8uZk5tHg8eeWc1XD6uz6159MHm1gRGb9Ad1j38Abe7vS5FzspYLzur57WxqSwW3nB63UPf",
  "key12": "58yiEne9Jz8fwgXwFmn9ekXUAoSfbW1SHyuRo1hVz5ftVjK5bS7p1sA3S6EXeA1gYUgZR22TEK7uD6BdLJN82BdL",
  "key13": "4RNhBKXowX3cZ5tBEbz2WkWPiNWEVx6o6ZFVLFz3QDrYDKEu3w5DdFQj37AzGJxtsfHQZ9PBMXRgXjsVTMedaFae",
  "key14": "2t5FGz84RL4M34m2x91kcdnrozuw91xCwt898iToQskzdoxdcPBjVfSuLMANS4c5W6Rh2XdPjpLtiQXmRswv4qrr",
  "key15": "4igXCAA7B7SKoPnqrSrpXTfoaf6ejEXKVAtCwbFi951SKnnBcqiwHWJLNaRUXy2DGTKoshxSkpQ9F1xjBMryH4ey",
  "key16": "4eEAuFNDkwSHb6KNBRAdun7avC5vPGZ4HEmBJKDu5HJtHvb6druS83dyEanDbWDNJioz8G4mg2H1KbCmFdSCUBbq",
  "key17": "YPQ5inB4YfuAJpS1C33KrvuKamMqXYqvteJyvqJT96YCLbRqC2n5FUubjie62E4ec3N696D4b1mWiJG41Mhqd4q",
  "key18": "2Mp5TjVm5vsN8aWrR2qzphu83vxvTQZNNSn8KDYCKxtTxZfw2g2PdRK3goMQ9XKvfTavee4XC7oNF1FE3Xe6VoUo",
  "key19": "27oqGgDnfTzSHu7C7W7CrDF88nTm7nPSU1WEc6Lp9kf24Fefii9WjXF3ic4hHPtW8SZKpXqLe6ENBYm9MRp382cf",
  "key20": "3SYLQh4UcEZJkWUBWmKAAigypnhacX7wCb8EBDCCk31UXnUL9JW45w4sWizKrNxwRo1EdgoyRzHhhDZGxgw2AUk6",
  "key21": "4gaV2AFjWusZN554TMkSfGQVgyrZe658KwDei81DLsjUor3ZEaRv1YNbS5szJcASdpuKUrx67WVfN9uacXkV8QAZ",
  "key22": "3Nwn4FL2EmagiNnn6ewHd1fmh9kLicEnzhfLgHpe55h9ayLzfrtakeWwTXp6QT5fPGZfdaNFY53tRpsLGwEBDEFh",
  "key23": "3yQZSn9zdUNVj4wXmtytQgwnCREf4Lxdk8meuEB6CzfDF2jBK76HPn1W7jYKigDtA8pawgUXtETeDbnKp9jLfjLh",
  "key24": "29CSw4mdrhCNX891mea3RYFxBoKt2xkEYV9rcXbB4MaJHeJFAGdCMDVfLaghWi2yR3ZhtHB3k63omyfGfWMTZcR7",
  "key25": "4accaaxP7MXjPLqiF562Y6pz5muBSLn5S8jAfYiT2RUnfUhC1cgAdyPW145GDvFB99nGssMkruQYPgzyp8MJ66Xb",
  "key26": "5vxqTM412nRXEfjDsMBJosqBTEP1jw62J6E7aqrBm1RC9Ef7tbZR49FctvtRbXGQuUyYjqwZewuQxXzqgg1YGdEc",
  "key27": "5Zq2KANEnMaKQkTcmQ7vGmAZPNTGrS8pweHmvny6f4qhdZfL3WHZ3mzgxXjcNb6sjyRMRYGdCnK3CSFnHYsm2YNH",
  "key28": "4pgkHjfJ6uWDHRdRA6uWPkmgTUjLsYzqJTTMr9wX7UT7Wcox6h24Mp8KUEGTxc76iawaDpKHUs7B6xYu2uNmrAYi",
  "key29": "U46jcuk727STgZtxLBGv4rtAvemtLaQhFDWC87yUqy477t3XJcytvGj5VR2qv1xWgwMgVm8MAmg1RX6y73kcnSM",
  "key30": "sAuqrJvV51nWw4SMXySauUaGbXfxsexxF2dGb6K3tCUY9tk2xPutZHzMBupJrTqcEdCpCbRbzeezNXMrzG7KnEm",
  "key31": "4iAGdPbDb7AyVK686S5pLTtYeHhUdcKqsdvGw2xqTftJYEy7NibGLHPc1KKQfrYUbArA8pixEqu23bGN69rqHkTU",
  "key32": "3b26ignXATuJ7WZB6jkFPpyvgtMm3jbrFe67nN9DzkmV7zoLQSwWqaEZvvFnarXSJWitdEuNiYELaFURswpXj5S8",
  "key33": "56DkoZoyA8MJtdpSVmQKfhhveFtXWUaPbBJFHFtwi1kC2n2G7gQjiUZxhnHw9y6iUiQS5igGeaqHzU4B1RF2UhB1",
  "key34": "5vH5DUGukxEDzHdrFnJ5XPX3zkuE1E5hGMJJ8zUYbva479EhT4WMngTym6uf1E7wY3h7i7t5N83uEfjaPzP7vP61"
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
