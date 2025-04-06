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
    "3NxsFNdoTW336xTZz9U82fxHqDea46zM4qmxAwZK8VEt9TNZarBvAcMqAb7gfJcdP9ptXc6uppdEMj7Jv97LeQvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4auTWnF2wKmMynooaU9u9sV9WrfjHdeRPBuuSNPsqYLyAdZEX1XvHTuKQEiDDetNuPc2YW1AzB28EcAcjKdLwcbB",
  "key1": "3VfqM6vVBWKcP5GLZ2fJNNsLBRkzZ5aoNRstRauqM9sDLtnp8876mbiQPdDrh5gYfhmMWhY2StuQaG3PhpkSjHnp",
  "key2": "rvSibuENBbkU31Dzu4npkNZoxZPkhnrhhRzeFMciQgLYJ24BWk9pgbBApTc8ZvKkULwWswvgdY8Kt8BPvAyCsVZ",
  "key3": "2zMW1WFVVk6YxcjZp8Eq4tRkmwRjNApiTME78UXv47tBVinAqRiA6s4pNT7CRx4Fmj9PTcCw7VXjpP9LttNe57Uz",
  "key4": "2eCTXLY3YEvxrLJ36tUHfqe8MnZCvojEDJv8cuN5eV5zR6848AnyfZL3ZQ9sfe2eJwxJZfmqE5qv4h6TaP3d5T8V",
  "key5": "4eUfMSYfY5TPMU6uRVNrpnsz4Ar4qyKVMRbmPLh472wEsox2b2eLRP2Rbd4wfd5MpxRZaNhsXMKHfeKsjNfY3heW",
  "key6": "52bBStaaE4KbZSbW8UonNssDsqhEJq99rBzBBPrmMupoE64M6yaKQLy1M81sQQ3ot4T8F6E5bVnvYzu5xP146jjd",
  "key7": "23oayQJHmr6EHAUYvR1Y8BHrvTUhNWrabNEfMdusRzTVaKUR7ryELEyRwfMbkEs6VfibdqbhViyQKuEYziYfN8Gv",
  "key8": "5B6E5Wieihv1p8m6w3BsETwwbP3ZU63JbEczaSbMT5J2Uc19M5gfPfmhDQncYWHBb1z9Bu2CygwfWbfYjVWsLwU",
  "key9": "3qWqCg5d3gaQwYZugyQdCQdY1MVrLHCtyfKB51Upgu8r98wzVd2CA1CRxrGYAJsB7oJKhcquusxKk7WJNe8iuw4L",
  "key10": "65QGaCxB6NHsHkNGwkBHRhxfigLX6xCwSCQrYBZYv6w6tWGrPYtc5SVeSzRXrpgnK7DJT42fXCMkZHLECCXp4WNJ",
  "key11": "2ZsecpcuYicRMpAZVvXhEpybGnPkgeWTe66iZKarTWHZoVrmiV3nDQSCZiw8noAyVfnHyKSend8CchGRj6VJEKBK",
  "key12": "FVj2BTR31iGzWHoJsC4PdD5Vn1FEiJ4VSU1N3K8uMqwNpF79rzU5dMWBe3NXjb76YJ1y416udpRLSTbUreA1HSe",
  "key13": "RK4syysEKQYmCztoJ6y3z5FaQcLFBbQB8eoPuJAXV6vUPmexeqwb9voTL6hzxbobc29qkGDFguHbq6Sg6ftkTGs",
  "key14": "5t54Yz9sCWfQkPYRrwp9fuyiUnd56ixkf5vq4wJhB1VNgNzitKL8Tgeznrze8Sp8NuQFMt5EDKbstBDUiqfhx9BU",
  "key15": "5VfExy7qgApiQvPa4fMYQZXT8YgunxD8xRSJrounJYiaV5sRGegxmh2ywA9co41fr69p7acppFvxbqGtMMRBq6zX",
  "key16": "3Wpr5Dx1eV7YSRdv86mFrj3d2drbZ4uKRYmRRibkXPUc81yt7PFzb1K2nEM96HjBWc5Wv1vKNtn5vmKUSvcbHFYo",
  "key17": "55F4r68Uc2HFk3vfhnUhyxCi2mCa633Z2b78oFVmJowZRih71UhTMCTQ6cXTEA5y2cUJPw25Wn7UtK6aJYwzrnX9",
  "key18": "5BogJE84smDHmm2xehiR434848weyYfr2GNkMxbLWtU1Dp2RN3WmXfU9SkX57bsfPXxWVMjhprhEr4tAtpjF98q",
  "key19": "vwnkC5VSZMs5Q2rmm4n5aSefHsZ5dgEeeWHyydiUzUtCBEdmnwc7MMxnwXFTrttFmApSqGraZGj5VuNc4gqRyek",
  "key20": "2829cJ3z6EsG4qCLdRsYBx5baV5qdTCzMhQ2tzZZ3t7X2yabrCicF5VTzsDHPVFev5Kss2MuyMXRBY6rWF57c6sq",
  "key21": "44k55yDVjQESf7P4vizb4McYVahupqVGC7LyLHmQxmbXT9QFf8MZmdBBy41gc1qhfhvVovapA4yCtWhzdAGLu9JG",
  "key22": "4Se3iU5ZKnaAHjo1UPmK3chVRfL47Rq9A9Kf44gjoZoAzPz4c7AhJ49RFuVoHMrS3dknRhM3CwH9SHwvSPY7fmqZ",
  "key23": "62bzsBFkvFvQLSufNzQrb2PQyq2MDHmBZYTSWuCh79r4Vhsf3CCqeGPQxa7TzGFM9i3LS8yfS6a1JYjnmweqvGfB",
  "key24": "5kUURBP5HQxCg3kW6v6x61pfLCJohe1iVLycVN3QG57Q3P5xPmzzrGeBqHHKLNuQicXJhwW3uBXCGrc9KbvyAr8u",
  "key25": "UzUc5BTehZNXoHhwWbkzxjvgV2FRFECGT532YwWcy7pErXDejRMWKxWZQDGMZGRhdpz8CFwXc4Y8g5TfmTGeKk4",
  "key26": "4dZgT1eDcDWkJt5WFXSybndpMijMdnggK8nPRiDRgv8gucGz9GZVCnsbf24PMTYYJwoVtM6CqbS8Snc7NTbJMwuE",
  "key27": "oDzWhWSArrhHbVo3LXnTsiquKZhj5kQyYadZ2PgWLfiPDi5wXPv3fyjnQBD9pUyQCXhm4d4Y8BR8mqaJDupxaSk",
  "key28": "3qwat7RwtmNYRQiNr5VeCY2JKdwtwehSWSLosT2b2GwWWWH33u8GZ1o5dQoL9PxjyK3p1Cw9Y9sNDK1nJxZKRUpK",
  "key29": "2JT1qJ5kTkHqHD7sJQf3AtmQxEiLB7ofDpowtwruA2Aim4p7DYW3ZHMEBUcsB9wm2Q5oQoiCjDrPdcAbXHR2Ak4U",
  "key30": "3B4QESJCLMuygDV1hHAUsFjcreAZrB5npSdSHrAbhQsd4CHa2ZbqMZLjYQE77cej6FE7Lws3WViWwhstHhvcfucJ",
  "key31": "2Fp5VXXcT92ZYyb4MqGWei3TkdCjeJoBuhWhqSQaJNEtimrczrGMyggQ2eQTyNCS3e7r4PVySCXbBphRii2izhYh",
  "key32": "67NPQx1zQSDgU5yoiWuTeAR4gzTdCeKjbvN7sVQcdD82Whaiut71MFA6nHPrM5Abw979U89uVTTHDdHGCs4rE4Ao",
  "key33": "5NYCarw7LwWgcC7dySUzZ37ARYQi9a83z2gKBUZaE94Nf6zuRkbqnmBV6i77FuZVytj8zUd1Xv1J1YAsT4zBgQA9",
  "key34": "3U6eFxs6keYxQVptQCVnxHbxL9EjfVP47LPkBm2gYf2FbAD7cjuED1sb27WYjJYCNFs4Ee97GopxneNTzsPaSLM",
  "key35": "4hCkH8qH48LC5t27fe9xh4y4LtViRBmCEaYPiYbZ3eGhi5uqD9Gvf14RyaWtPrSWGP4rHeueD9JwHFr7oZAoQU8X",
  "key36": "3hSGYsK7JLr74vZ8y3AANKGLAi1Y3k94f1NtWsWWmF1dJdMCFWznqA4MEE7BzpoKjZ9SLaiyRQfTMpr3MWMpnQvi",
  "key37": "5kYCt1A7McpJqfz4yUBVmWkWh8bXF9Xtfi7hoa13iNCxCNPDf49R2tnpTMR58hUguePkm1RUSs9q67DQGnxXv66F",
  "key38": "KgaYkqR97VG2mKnPUvMmDAw19VD3NvAY27CzA38ZiVWRhUSNTDZT7zAFysnCNPgbhu9GvwJrEAdRdAKWwu9M4aH",
  "key39": "x4v7peq9vQVMWTKTVMCqmtozJUQWCH4tMNdkhULssYSWJEoJSjNjGHoL9xKpYsPunjdDCsEwBbrAeWNodjRkEFx"
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
