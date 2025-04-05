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
    "412wsgLVTs5pjosvBkbB9A9E91dfLZFNyMA6M4sBL6uSTyPrNYUbEmJu7vZ15zbJXaid21otw7kMamggbkH8NTon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64jypc37RPG3RVBDZY8yX8eKtkJTqs2jELWYKb3oemkSDba9St1YvpSNTfRfYCfcuqEAyDkien7JTZfGnidHXJHV",
  "key1": "5hhEnsJtpxUNxogA4pgkXqd4bvqPDHKMxuiBKnwivjZnWQFEM77rbbUXPbxBUCd891hxx5zUYnkbsAWteSuojoFq",
  "key2": "67pDWGxVvjaJoT7FpFQoXM8sSAzEMYqGDbN4S2opLsxkE1fPcHEhXCoQdY2WS3GE8gVe8YVZDf8fay2wnskhdviZ",
  "key3": "5FjX3euPNp2eFWjoTzC8CXi65QL8TmfdkXxG45V8uZiBaM8yLE4UEgg8MBfrp48PLira1Q4TRfFLyzJcLjsDaXhH",
  "key4": "5TKfKwEyz7132BjqtaYCzYNMzDUjk1QpZxd7LT8oMWxDvQukSstg85wXLrjSztADiBTVgTUEyzya8uX7ho4Bf3BT",
  "key5": "2uGqQumNyao8wWWLbg5vJJGHGFtUrX5kvvZY56GnAjiWE89MFH1t8U6HRmM8qoBvKgT2vGcXo83hi7JMTr8dfS2x",
  "key6": "5xk32Pm8R14cDSPeETg6et2tjnyrqpoKg5vrCbhPhmp8mVoPGwhxLzG4egJH9Rxv1guBXsr3FNtnSykxDEjVoSyW",
  "key7": "22myoMf7GB52GWaSsWrWBZptNnFGgVavs5QM2Bj46RZiixZpxUQHjkCJ8PgKWbUcZtMzS3KBsAqLTuHAajoT1K9q",
  "key8": "2BZQogTMgVFWc7DTDJaH2qbjVo7QGCxxaHmayqsdiFMyhBGp3KvPagJFWZXim7gnFAVeBmCpFyvLNY49NVmKd9JH",
  "key9": "59gBakDkounj9cX97ZM35WDqx4rmV9ocAH5cZHj82ykVwaZW1kNqyKV7Arnd6CWxESP4LtbJYRc8h5WUG89pnSKK",
  "key10": "2iNsRbyZE5Fh1AeZxyGxgsbRPzNq3XovbtMoigJY44LkbAQG8Zy2Tgy3QbzkmghfkxbpecrNoBTBS4UpzK8wQozn",
  "key11": "3fibbQsfWMJjKkZs2e7kufvtYcdWJZ5mP3n8bADA3NrPhCp7ge4JhqaSxSPzg5xde6sAnXxoyW2eoCnx4DDr16sU",
  "key12": "3vrKKygb9qc93RrCufaBwQUdP5fQfU5V3Mqs6Wgjt62bHVAEvGyC4ZcoU4rnqQQbSziTCbhda2twoANFKbKdmwJk",
  "key13": "3zLDEaGPkqygx8K92K7i5dMpfziv93o7ECXKBuxTCeD6raK1RZMVe1pbfY25A62E2PsFCiMNdXim8dJSp4c1qaKY",
  "key14": "2apVsjJ7eePoWBJorqXXmDrQpaQVFiukvZaExvLSrBnG9AcgUoeAjrKEiKMMJ6Lpi6WMXT5UEPNJx6exb8PEHbME",
  "key15": "3CQE3bUztMotmo1EVGUMmt75NdiCYKZAT4gwuWLTY2UYaykRtx5DQVGT66Pqcj6GcdLztNuj9jF3RtLYi5wFcGwy",
  "key16": "Z57AAizqPLwt2LTANwqJELifzXoQrCCSCZWUjwicNV27PK1kgEzTiCDK1XJzjaNT3wfwX77CdGG3QnZDZiyxobY",
  "key17": "X9EvTiBVXMDzzWVxPPxv9htk3ABQsVfiFNykaRygbZDDDaHBQDzWRgLqaqSQ6MjfYuwhcrL3pLZ8yUJUcptfgsy",
  "key18": "2wqdXyVtfQVoF33eD4ThHYA3q22uaMoZxFfGt3e3iVBTHSYBBunREBHTHo7Ac6nGf6nzxnd8xV72johUn7BnicuU",
  "key19": "4jF3tXtNKhCeHtc3dMtXWoHQqNCmbKbtmm76hKHzpu1h4NrsTVs4v52WhXntXWnhfbP9fpNqvMFYLKDFwwCgfj6Q",
  "key20": "4dZ3w6yX5GVfUAUHfPXeX51wwtjMkbpWURYEcPjz2gYYMgX2Kgg3XmsADuSZqtK1EgJ7gGieCqbXpp4MsFg66QgY",
  "key21": "2Amej6NkKp5JaF6mzdofS2QygaRHicFvwDFKxstdiRe9WyqJtZvcysswPAp1LavHVEhE2pX4ijvmsZggC8m9AHvy",
  "key22": "h8mWmpD1kwbatMFvf7aCbAvRdm8WFpkBq3TGaE6LaEZgPDNTr3eMrobTaULbAbBCxT5ZjVn8Zw8LX9E7WHTtRiW",
  "key23": "4sTomCxr31f3zYAcJv2MsouPbFvhDaiyLBfGvJwLKLSqyeBoKUGy5BXtyAihxGvkSjXrYmEZtU2JnjmNucHwYJQx",
  "key24": "3rZqMwXYQDuAymFmNqUMyi93i2nP4azFuAGv4gGA8vK14BZzGfr2QecYHE6JQRUuP7vfnf1rmADn7JrZ65RP4Jmy",
  "key25": "5Q3MCpEfM1exiifYdt7Ku3PjW29oPEcMTuYdZE3NpUhJsAtpTbTVmhBz9JjzX1myFBcumd116fpKtnzEpFypYxDb",
  "key26": "2vU6G9E9PnjkRuMPWKXUFBhgPMoMeLphTdaijSmiF9AhfjNoyGTJLoQDQuom35tJEhhB9Zk1EUt6jA3koUpZNPyg",
  "key27": "3E76YrjF5aXXuZA1b23ULc7zwBHoqw1tSM6W5W6cugR9jynwpoLWVRZHjnSnbywcNo6RkH6EdJhGb6WZXE2NF418",
  "key28": "4oePFFV1q9U9nV112Eb9DYNZ45yBgHTjZViH3uWDwYqdNdrBpZ4BKh1yLbxAsNx6m9PHDotmgWkERokR3JvQ61SF",
  "key29": "36WdLo5CFVgiohfBbPqf3oL6pcWEwUWKT3DtwVwa8NSP26CS3vigLyqM7Kc2Wah7rKaTqB7Ub6dNQbDyqrQyXDS4",
  "key30": "2KXtjTXW3WDu3aRG29M6J6Y1UxoEdG22zYCknYoA3NnnHMtG2ddKg2y5UK4quiZQ2aHk4u2MbnjLi8HPAbWXN26L",
  "key31": "5pYBLGYEFR4DU4Uf6vrCT81QHgrfR49d6Axs15WR7bt2gorxcBBnyknBBxP2jWD73d8pnzScTnfi8Sa62ki1FfAx",
  "key32": "1sQ5tPt7ECKf3ntwxWHvsQ4hnusTiN5EVTAtHkYutnvFE3jFCpntmaEekuwpendCdeWkvNFQTQtekb5iGJ2PXQ2",
  "key33": "3jTwakCQXGEMiB6buX1bVRhjffwmF8Yc1JnLoqYocy2zQGv5tW1z2Utvj4KKy4SsYJUggzBeGAVUwitM6en8g6AZ",
  "key34": "3HBVNcXWcvFXZc67wQn3T7d49JVaMc2NrrEZY3Csg9D5WK7NGr99uJWtqHDCdLztp43J2VjXSvKModuJKMa8ukJg",
  "key35": "3TRtaTwRNQSnKautw1nBYkRFsuMT2MSs8sQ4PwdnC4rvrEPoqSiZWG8K5bF47jpkWHzbpFfBLi62VKXCAjufizfW",
  "key36": "5Pkyqnqi4fqfHxgWn5a5r6bHJiGy98smccoN1rtDFVeka4ao1EBo6QEfZftbDwawjawazzb1TGVFEznwE6JmXiei",
  "key37": "2hhFBTqeiWMe4W7sUVuaZ6zvXdvUWAzofuqMjt523W37ogJLHbJ2ZJ3PNDaiiRJ1PUV1k5K6YymRfr16qsWQZ8P1",
  "key38": "4gtkbMy9h7Bf5SHhN3zt2ruQ1WvPpSEjsihoLmiG7BPtYsQRrUmqhbZS27e9ABzHNgZQ97fmGMB73u7t5TGvmHxv",
  "key39": "5jQ1RXfb3a7Yy8hVY1z2GvZimpc8U1iZDkc2Q9Z6PTpmWjnZ7TmkZvzbUwdfTQBuTci1UiZCGPTr5zxPNEZGU3GD",
  "key40": "4H9azLt9Pk5C15dxoExEkjkPruGwz8WmStL6PfnAqvhUJbEshtVLhUiktZNptXX2aaM3EcKw3AnT2fxF4huuSaNL",
  "key41": "3B9PTZTaqVJqETC1ypxGHy3iLRWwLx9YrSqZ379Lea9MyzuTkvhYzJ4QVaziWaZBCRcXqtzYRL3U4qob1xgz1L8W",
  "key42": "2KDWBVFMZ2jXLyHp7baPPhLUC5M7o5XuWXnk8pD9trGcTwhVGoCHMDVAo7JXpRFxM1Rb6NgnD9ccyczxmFQu5mzL",
  "key43": "5CGVpNvDC4TrVmmLStDwcxrAh9Mu61cUFbLadaQYcrpedkmnrMVUsNtuwQj788BaDzJ7xD2P8qxzAAs7KgvVr9HC"
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
