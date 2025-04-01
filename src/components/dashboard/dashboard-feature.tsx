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
    "57zHyBmpTztPmqnVvCPETUvi6yE4D4cPQ4PoqUizd31nsEjNq1g31Jn6TnrCDan2wgwSmaKzc5t8mMaSD89EprW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mwYk88WKtDTcF33zUHp6sf95u7suMDNVv8ixBjYAw2NFwELF4u8nD7z2wDYGSd47x6eX84Y2AfnCLDmzGKHUPjK",
  "key1": "naFAJLVhJ3Zd73H1TLwPF7HmPUHnWsQWQG32EJZtY4NZYoSpxCLcFYWGSpUyatkxKT2oEkF21FZsqwy6J9tyXPH",
  "key2": "yyhJ6oHS9Voa3RpoPSQSamxP9tTYthG4bKxZ9VpUR26uYrDT6rNT2D5ZuDwceoNSdJ6bDAaHRCvNi2wvJ7Q9S8L",
  "key3": "RGDd5zom6VRjr2iWvVKo4ziTteoA9j6TmJqHcFgwKyW4ac2u2FJBbXYnPiYNvQhtWFSGKuQBQoEToSjPa37Vh4B",
  "key4": "5DZzB1VN6pAVu1z6qSLhqGf3w9Cy7rZxtZqQcvQpekWfiwwLerVscwHjFa2A8Kp7XNrRw31efUTwA2pXt8yHhdPd",
  "key5": "5UBzoMhQw8Dsgwufov9bu1XZgL4ej6Cink9m8VJdTuDJAAP9vC9TYvukRjsPEjGHLEf8GmGxsvmjSwqVsqhK569j",
  "key6": "5gJ82EBG15xFVwfF5RCwizX1Bcds9Ky6pL72npFJyWHQPvNHGL9bXgTPRm65noghoyfTsAX7q7wyJFaqxqoaGWR9",
  "key7": "31zbxsLJ7ZQMTmGRGRWtejk9KaJ2gZQYhQk7RQPMDEMQ1NQwLWpacYe5FZ4UhYpAWKCDxGCSWtNGgLawGE9AHFwc",
  "key8": "4wuF6EzfRByvAiq6ipxojmJUisn8eFffn96L4b25wbBZwqMHPwjzFNbZ1dheBzT9Kje5WjJQSfkHepUnQUL8FSrd",
  "key9": "1297zHygomuZZG4VefCYPgurjFy3sJhJPRkD2KaGaPpDHUgiTBcgMqowu5CbUbWCvdsFfKPhRdemdU3wpcGrwNCX",
  "key10": "5NCeZawzGKoTApRETgkV2LvA4eBodHTBkcPjXbaQ9QvGBBLS1qC9SfyEkjGkU1gfzFHDBKvYrK1gA8vAMq4z8sUB",
  "key11": "5K1mGirUwR7VX7RxqYaF5nmcQ7w7KDZ6iJDCQuvDuGwCpRpsidJp9D8v5RWhfQb7yQeATZLMSWigiM3sT6YkZ2Q8",
  "key12": "4tMJUtKUv6XZvGnSe4YESKaLCuMXJEfJxq6QmHSMyD6HB1GV2RKM9R1gbNimggVonXLAswoT4v2GX8X955iqAoLZ",
  "key13": "DqrpZdwLzbcqNijn2WspfbtSWxYZwpMZSEMzqHoTgVrjG2b7udqBNNrxwdJp5P4hcbSoKYhUWHYMJRzgyy9d8jn",
  "key14": "5gQ3xLziRwsn3hxpRu3cQRFfBDk5yqRijSK7Vk6GsRZqU3DBLcQ4GGSTmS2bMGacKoKk36EMXhU1bcJYekKKZdMQ",
  "key15": "3587eofLBwyjbsUAN75FA9gJTFea739ukNzZNJmc8ZtvbBL25UGGhAtZuD2HPiDko3SaTNrLgdkcminaE38N551o",
  "key16": "AbF27oxPpLSmaNPh5RwaYpiBhkMuzSkpXgwgSxG84QcjeX4G2YAaZmiH2mnNdEpzSXVHrLyuJNvL5v6TniSKGTi",
  "key17": "1mJRsWTp2s3aZrxtzo5hJiMDfQTfouxzFW7LxTTwxB7hJLAF5aovrwUhg56iyAHZFPyVZD4vUkBhU7VdrAhde3g",
  "key18": "2fqRy29RUFSb2ByEyp9ftTqGq7s7UAt4SKmKVKyfUhhFyc6L22CKqXWLtRjsJDZkFu9WAXi5kKrcRw5cKxBbadz3",
  "key19": "NMpbPzHNXRjnk8VuikGanDCrcrGaV5jqwLkRAYkoAM6TzG3oPLahpJrL71RoKaAAwmxRhpoon6xA6vme1JeduKy",
  "key20": "2Leoa7TUT6BeCgY5NQVsQD8qrPLYwHpwBCe4MX2MgqSYwMcHo9qLYm5WPDL4ndsohs6Bb2xCXBLFozJQhhiesq5M",
  "key21": "5QVUuzpfPqYw4w9q2LTwQJ4EUbdSTyjsAP6nUChqDuPbnBxtnMNGuYA1NwL8KdU86sdSzU7wsaQ6Tu1tRL5siWBw",
  "key22": "pMVnWW6i8mqGGAHbdqdp4o6mXju6DYcedvfWHXgM3u3AzGhk5DxojrmGgSDQuMC4VJaKTj1oNu4H6yZ6ezEeoSB",
  "key23": "TFQcL3UMDFyjcvMebHt36CUARb4yJBZR6fGgqEyaigJGDcSbhF4kNykMXJpf3UM2sRegvUdcWDrDHNzfAHmRwDK",
  "key24": "4SpxnBGnnZSxCkPwyZv1yKvpuARxgoYVoersQoDU5mZPTCZAFTdCSqj645mgELB9xjxczMd7Dpc2eyakbZyaJnfT",
  "key25": "pv5XEFUAWtEr29cxgxYJyDP1xCQz4DiJzAz3yBSf33R4WmK9K2QSpzgTQt7CiGkRpdHYMZUfADNoF55op1hbdHP",
  "key26": "4xzrSGmdtKStmodVgPsZtRYMMULdCMtB3eacQG6BbyZc3MNDceV3dJ9rcr6YUmvfLUJLb7ZrPzBnvMUvb8TcoMxz",
  "key27": "3FDTnExJqBBG17UPjsuNbcSgLsnS34Jyd3dusmtdF6AK1EaPQUrikp8nQs5VuQQcUhT5TtLWvV9wA2TMVvChnXYk",
  "key28": "3bSENrQGoZmabXPyS7F8HeMTcTh2qY2xaT6ZYQUUepDABK72fS5f1wAAc7PsCeAG5kp2wT4RM1BHFssoxHmJ5hPo",
  "key29": "5MS1t5Le3Dv2LTfhmjSebwQvxLLWhYbdDWSAD2Ho2wKLtKsHa2sVNSzxyQUCkQxoNYMWbJfoqtQ2YofqPc69Hiaf",
  "key30": "3oKSRb26dXxcuqrGUJC3WEnsu5njaY3Mf1s61NDCVVqWzTXe7aMJEqtp9wz5UFgTaSHPQo5HriQGD9ob2beUdafV",
  "key31": "4bF1cHPowpDHeGKPPny6MDsVrz5oDsQgvaVsfqfBTrPc4STV3zZokgvF9uDXG12KsHcZLjayPvzHuYffjGeSPUiU",
  "key32": "25NuF2Z8DgYstXZ9JquJqR7z7Ma84TKKgRcDyWiFVbmAGPGiCb7YRijYZr6fXvUcZ3MXFaoZ6hMGNHu2zm3QatPT",
  "key33": "4eee4poWhTsFBT1p5UHjVd7Q1vQfAQ2T2YUepYYHcWwnFmTh92mPKxN5jmRvfjawRZyLpqjBNhmy2ERsYj8SeCM6",
  "key34": "32zGd2eSB9T3MBjJ5Bv9xCa2CGYkmEqQiWL5WMsc1PbCLU4sDJu9pEZ6jeQ4F5McRyjncbijJC6gSWKq4y5YDo3R",
  "key35": "3vW3E8wqHM1rpbxd6zKbVzemwWjApKk7QKEWsRSatD6iUp68k5Tewxc12aCPg6LwxUFL3u5YBqTj5pDn2agoTwwz",
  "key36": "2TRoNkBR3UcdDndR1NixYiUrR1nkvEDNBMabURCnjTofZAS1S4oGf2qJniiV4bbbz3nxBiAf4g1q1UrKygqXv8DV",
  "key37": "2S6PkWQ312jivEvaiykugo55iPse4KLeGpg8QiZxZDtL5rJTGU45vtEv7egfguhejm2Us73FuYCdAzfsN95K1WmY",
  "key38": "5iM2693W71jk4uiZfK1X9z7JdFHQ17CvorvR441Shu996c2ETrN4eY422gxe3zULUj3UiCiscTKsXNesGEknRSJH",
  "key39": "xcSh2umzq5AyR3eMyrR5KmyXF1dW3kT7iZJ8E8dtWGK8LLWcy3yy3xdd3Ba4Df53XzaixxRADSiwWJNMhrmJfQX"
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
