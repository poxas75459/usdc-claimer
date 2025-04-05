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
    "FtBHU3hHWQm9qWedMRyiwi5BPmEfv3id4KbqkMwRJAadmSAgMvL2EgbLUS8noXjS3P168wH2adbe3qS6iNW6FWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "536W2Zx5fhNJWJ3a9JTSLNLvzCuKut7KAcPs4iFDmJeyYFbNHTPfWYoVRUP3vrxKqhhyC57iFA12hfNSCRPRetEA",
  "key1": "5dja7FTvLN2nVSobZwkX35uBq8cpDq3PXqYJNJEVpVJum8eukKRtbYbCajYsYtdYQWj8K9Lumope3i9DQUSZsTAP",
  "key2": "gEbbsJD7426K42sGPstxPgQE9Z8UXNfDMBqRfJVvKLARQhLx2MWP3yFp2PJMyknwDNpiz3oKWYvhqpM7G2DjSyB",
  "key3": "4cNzfxBpXXeVanKy6ua7JCPAb9UuGSK7hUYpf2jysTJeudA3GJnn9nqQ98EPuDgMkUNWyrQx3DyaQ16cJBJLCwPe",
  "key4": "5sW2NFLFrqnZUa3ofxNcshLA6jEGqGjxHTU95aBmoMSjqisc7L7G4xkzpWfgyesjLdQwnkb2qofCBscqupFpQyjp",
  "key5": "4yXhqrSS5gzM9YF3yYytSDWCHWXdVrREww8kvVi5HyJ9hkTxYnSAJyyqe2LEUjQVZNkMQodrSSCaRU193SeVvbru",
  "key6": "2dXtRDDt6s4h2uAz3fPiEG9trVsWgYLdAZXPSoTFHxQi9REw2RaHphLYEHn63rdH2PzLHVLEYejgzZRgV9HJWL1B",
  "key7": "5uK5NSyUwHQFMbktv9kZW5x4Rb9cFscHBd4BCYYXmK6YTjxF5nRFdiyz5QGiPr4J4R99jMmTAgEKFMX4snDFEPad",
  "key8": "52ghB7nnKuETvVPXw2knKQ9nDZTyThLZttrAbiQZzoXDboEeFYuSdwsdVcLxh3P7BvuLYnvw36Vs1rsTG7RNHf18",
  "key9": "4y6DJDnopnfc8MBzP1SvaVhAxrmBiAQY3hvYEHPuLAqVedWwL9vx5RRNkD63iVxMXyYR22c6ewmYp51Dbom2RZr",
  "key10": "43sq1nSFH9TkUirtmiMLcfiVMVZTjqDHqtUwsvT9zgZjGLey6PEs4e4Q1uAyBNSHyepbk8viBnoLzY4ogXjXrCu8",
  "key11": "qkkWyoAgzHUVvyqeVdZ1g5aRHcLEH7MB2pLiEsEYpZuNbASoT9mYvfQeUzXbUweGE6Fd1CceDc1Wykyj1PZJRBE",
  "key12": "4gF4ahUw3aQfyNQec18t2zAaZPf77nPG4HyhM52kky5ctGxSzMzhZ1TaUGmRmGiLFTnKfPvY4mqusToTr4AHh5CR",
  "key13": "4GpRPnbc5Lsz1RyzqNfNso9GPT68kRCGEizGMPsouw7x645H9u53B1Eh7YBBv6HtgYs9YAHfQRHY8E5kL8NbNeN",
  "key14": "i438uWBWPAvFTpxB3UB5jTQCjLA7FQQW9hS4138XCLCjyGoVo2QwUhdprbvhTJETn5WmpzenDmmc2ogmHuW1Kke",
  "key15": "4r1XPyKa2EK8Tbd12MifDmo9uGG3z1XAUpyhQZGtMJpbmUe3qfaCkEsiki41N8JeZk6RgF22VUyytQ4rd73Q2hUq",
  "key16": "2pKncqu8EehRAkqVTSBkiEuWLCJFk1mefoWXbT5bnzSxiD52ZVvAjSj2YVsFfpUqccpE1mVyzdmwGtrcRD6TKVmg",
  "key17": "5kuwTnanhRRum6Mmaf93nkv6ekZcXHMzBtvsn8w3eF7HgEPMDfyV1EQTMDjSrbqy512UnsgMLszraLH3scnvSP13",
  "key18": "4jTE346kCwstZRBLLTwLs55WneSpcyMrjFwfd53DzjJTb8KXTk3PKQc5wbJFa3tQij311j5M3no3T6vTFc1DSKY1",
  "key19": "JLtFdQT4LBgod5LLQYsKiRXq1qd91tigpmDDyarYKrrPvUcuBc3YP9U7REgaBdBZKiZBNd27sZwYHzMkCjVkqBk",
  "key20": "5XmBBxfmgWgw92zePodHD4f2WKdLnGUDaZW8BEmorT3PACdn6V4z297Jr9L3YYurxCeAJvGindgN3fZF5e4g7cRF",
  "key21": "3tnCtCYChQnXZfCu2NZtkUGUdYRWEeFg5BeNso3v2difmhs3CERTW4v3H7gdSxnxpRR351C1pFpRc6YwYmXYT2Ys",
  "key22": "5u2kAkyoA8YVjKN1pfUmn4q7kBV86egAK4vBGdRDwKDehWpw2enhfz3c5TEU6aQXQSWvusDQYCiBJx86YGRHw2mc",
  "key23": "3i84VfBrMs17ZM9tUvTnBvWbwaTw9mabMpyhW3uXK1e3KJHQL4XGatU6XcURRZ3PPpHJhworGMZVZhmvmqkJX4X7",
  "key24": "2rx4ExuWbm21yg2D5D9PsokbJWwWCXZ4WEp9hQoVLZAGLouL2wrZAWn6DyLAvbb7SHUGdgE1MBB2EztFXE3XcPfs",
  "key25": "3vHwv9K2miNrExCioB29z5ufLudmUDaFbh1LimgbijqzVsUbF4UQ2di5HBGWhMqfN79ZzKzCu3fW2Axq1AnkpEUV",
  "key26": "64QygpixjCrN7mP7NjxneJ1FvQwJuECVgNzYPWL9HwsDDFXEmFKKhxFsvYghKw7iKZmXWx1k48dQxC7NbFCFqfbh",
  "key27": "2GgiXzdcQNNDnFmEbTVUnH73iVHBtZ14Tb5oCBWXgFZtWc1MZGzRB25eBf1YcPy7NG7FnbTxXHtZ5DwuPme9HBZW",
  "key28": "4F9WKkDC4TNUZwQKaksfmLqpeq45oCzfWAFaLQb6VwuKXtTLEnwhDHbAFrqqRdJBigoZWrMA5qzhx3p3ZyZtMgXt",
  "key29": "32T9L6Kx9aDfeLmqZGR82iYn3YUb9F7pUEtA9KUp2CGsHfXEtptaiBT51KMh9X1hGMpcCd7my5jmWoh53gkm4Sz1",
  "key30": "MdwLex3Dw7M27dQ6YNgZu27642CxRFivVBKUymyr6ZRwCCdwiRZtnUrwAw3Wahn5CMZB5pKRwQYGBEDQfuh2JS6",
  "key31": "4BFYjVzqWAjkz3PEud2HQiZpqgsymPsFmYj18UuvJ5hPDpYc6mn3Fw5bqh8Vz6r5dBVL7KUz8kLkqWHGLpYXcHM5",
  "key32": "2zmvw7gaCxAbbgjfoo3DY3VuF2dyFhNgFAAY7iyhqx9Vun4Z6QdTq454qrySatMNk5kkxpkMbqPirt3cd9tzdrNH",
  "key33": "4NDohcRyLvWoc17hHVKbTtsymiCtvZvS6D4vnNu6GUzMiPYm36rervJ1Q2Z7asRwAexFSM4PF5DjkV3V32F2BUL9",
  "key34": "21fE3uJq6BDQqaTpMydCBF2vaHoPnenjeesrRiueFmdAgQqSNMzcM9Zcw9pGyMZtSLz8npriyEAHsEy18wHfEEDx",
  "key35": "2ZtQ3CV6YAdvvw4DxpXPiXTuY53AsvSAsgxJ4X2N8GTZqHnHbjiFRs7r58UX367xR2K7E8fYbXPACgjN5prMP6uz",
  "key36": "28zHqUb2MPAozuihHC8BV96ALG3AjqBybAtPBcGE5tXXMNmZSAaPYNDJYgRi3b8funBZF2mjHGxBnBJ1vxpimMB9",
  "key37": "Hi4Lz1qrex6zRRtKTfK2ov74QSZEs65avn1bRkpbgMqwUgWEgvQDXbGrp3w3KGAwAEBtcTMZh6FWUmgKWvXj4Qm",
  "key38": "2qhQxJmJHkXEryYRZuDR4v6dRC1dqVZKMqjBuNKzAbB6yNG2X23DK4YrDcxahosWfgVnsc6XDcdkQnZs1h5wy2NE"
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
