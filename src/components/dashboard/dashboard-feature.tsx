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
    "5o5hd4zT6VUnpWmjrnhgr3p9oc6qYiA7iMuUT9p3q9gzctXpqD52Trrj1AtS3WeRLZz4W7ZzGxziFigN3XJ8RorW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFekvaPFviRGaZLhNeaouMSLt7EeWshi3QHnfCoCyrjF51yoSj3ar3yWShwNC6dYLCnd53JxVPBJW6zmUbWnT2",
  "key1": "oDydVGTjebh3U52X1Vi6KuaMsPLvGyrprzB2BQdzQXUnSYAMaZcj3RJtVWRDfH41154xSTQLWfZBkPG6uBqxBxG",
  "key2": "2LRXm4CMpYYivjcHWHJqXMkDJNoVZpMUYsmttX2d4VEqUStDqLtNdqpdT2BePCrBMNYDBo6dKvTdfeteKDw8nfX1",
  "key3": "3QXv8rcwbfjDxHtgpyVaPgYinHQZQkHSZTztUmZv7s6n4WRmP6cKrwYkecYTKGfAcgnkmbRvy9yKLNxbuydCB45y",
  "key4": "2MNQB6yd9JhxmBiWATR7iaoP5aufwffWHigyUiEKbXNKpTCtAAEdXHwKvRbzsKfZHi7oVBD5mQngzsU8514A22sR",
  "key5": "5ByxSv2HDURd4D4aNhTEjvAjbbuzG2mNfnoNb4KKCDNzgUGwjuyt8j22HeALhhvakvkuvT5f8QByjbUp84gwKADH",
  "key6": "aXq57kc3d8Jjm31C9g2Jn3J95wJFX9MFEv1p3CfqESf3Pu8G1TLVvhgZ5bWWvTYH4vDNDSXV1pJMXtpwKYvWv8W",
  "key7": "kZpY6RakqMiAojKEmJnKdVpDZo2rPSwyEVM6Gpvmjm43wybt5sY2PWy1DBCyLwiNa2pnzFzXMZNofUjeXUhQUS4",
  "key8": "57bsQCVbi2y7AKH5Urs9y3Zg6y7Loiy8ovCDk6VG1yzBbSosUjhTxinSRAGzALwm5uguiPuie7H8X1GQN97jhEE",
  "key9": "5a5MtnytmzJh58pRCR6e9zjXp7EtYZeMRjXCPR9EFYvjY8WACvJNUFxBxffn7dVEeAx8c6A7fn3ZLq29UW8t71D",
  "key10": "4jt8xZBGz9aXCASTpnhnPipZy6CCF7cERksiPaE8Rui3oS62gqaz6QV9YPy5d93TsXNVcDstp4sbnSMhsQqYqpKZ",
  "key11": "2TgZD8Dvtu5VQYyCweu2vNvQ8wb6TzsqjZCJ9cdGe2NveJZTYqgSJrFTJRYGqEqjUwQyr3CmeXh42GJEAdiM3K5x",
  "key12": "5sUWCXaJCVSneu8FFwRPuV1HDzaaSSapwrutjuGhB9DEFTnKKdtcLRK6ZzuwMzHjhzwree8RAiZ2T2PYdQuDC9vY",
  "key13": "2HrdQmm7Z36HfQnbeyP6UszusV4c4xpxtZ61QdKFsaSp43X2k2LBwSo8TpEV8pSdGWT62FEuvzHAE6M1xxoaVWng",
  "key14": "25LteXyXuGgYfForoRL766Uvb9nnetmcoQtJN3GY8S5Mj7SWuRfYkRqskdRNJy8KTFG6JTEnJZMWj3To9dmvYTKD",
  "key15": "2GfYhm4hL5V9FQPcJMHNBQeFgxAakddVD1TRjUagKWoGZDTU1x99SYyb5cxgg9srrRB5LX1h9N5XaBsyhC42pVNk",
  "key16": "2dLscRFShZ7UuR6TFB3964H4GZAhXzTeJRkdcFojRWmZFGJWuFrLUm6QJ4H5DUCEkkbNr1PQJWMfpCB5UVtTSJvk",
  "key17": "3nyzuuEmYHijUyXMXogMv92npVeVhBEGTRZi64fkd3bFmiuqqRR23o8SyfAERVXJ8Ykh6GhtskVfoRZ9L9qU37Rj",
  "key18": "3Be12qpwnSK5AhcrYrSDBwP4777hVTLhKCR8cQLvqFkuGvugyGqiVJr4j2MtC1VTskBWD6MYgzVhSJm25QtZ51AL",
  "key19": "4G4vF6oMyTJftAEymYF3n1wtX4ncvGCfHpeLwXKqpYSiJqAmHpaVHLaCy2p2cGbNQDxJEAmHssiNubknGDyw12Vd",
  "key20": "Bj2UtDe8VJfhMX8fEL5aT8XC4pr4JoGABZaBrJQNjPA65KFtewtcF6f3TrsdVvgJbk2rYeaUs4H6b8jS4BKoSY4",
  "key21": "3FF5YwV2mH9R9T4PqfyqZNf1HUCNY7kV7kRTomHypb2tUocxXPe45M9CsbRhhYCRwTneVeGym6cFpy5SvMRxbFTs",
  "key22": "2yRv5eKLp6eHVA9yNpNWHDCVBD3PPL4vvNnDPDT78WY8sF8UiYCG5bWw4wnfrU3XcVLkeb1R2Jy5u8RFXMZ6vJAs",
  "key23": "226vkKgGcYDZyASHEh2s11JCDMoa8hmqAuPcdG3Pcn1u1MH6HMFBEGuftMJGjHfJ3fFw2qdUmRixe5FrSYnEEFRo",
  "key24": "3FU6Vs8rH2W5xs17H2mX8X7AUaK3HrqvtttRANSDUVwMuvdBozMJ99rP5WMVv2tVTtPzm3X4C3biVDn7agBkXydB",
  "key25": "37K9D71urkSTzgd7csV6grLSUTmpYJ95Tusa1DWDnd3bai6bKNo9Yd87x8KqvezH2GiSpyNhgjcg9CPiVZrSJWgA",
  "key26": "7cT6oqbN93hdFu7Wr5PRsJn9ZukQXM7sqE6Cyawxx5Yknuy6tqVqRpML2vBeoeCj3X3oi3gcr51xEF6ShRxFbxW",
  "key27": "5BMpe5b6Y6DSEyfT8JNBBXTmoPpKAjpPuPbGL3MmSZo5jJnRj1T53cH9dDgvBYVBym7jzEg2io4uWw1swRxPSDbs",
  "key28": "2KLEtNeYmFFkm3Ek4vtfbvBqgq4bepynGFFBRE4zLoiiCNqDL1vCHZMQen8faTVCXtNCen8dfVQkZhxnntwEpPma",
  "key29": "AbYun9UAAuZQQJCKg38vrrf6Ng7hci5VyPNxyDmJpfbDPQmDUkB6eksf5voS91iofr4U8bXAfR2kRenfjagaN1k",
  "key30": "21dBUE6qqzevJFzSY6Nn4T4nPzc5s7QmpURQZsDRXMRkBV2ZwXwkaK1DStU7zFraCcF197MqFwJCaF9C4t87BeUb",
  "key31": "5beJrN1j4uQjuSqQYe4ctyA5kjroZY5bRnqJnEHL6jQiKUCVnp9X7aRTzGLSusDDNBonVsxYba7huGwmNT4o8sre",
  "key32": "4VTHFq53bND5ZsZwTRNAjQJHBw4UeUpbLbX3cLi4EHZf48QafkKkycLmrmN54W3qRNPd2ibroeXxffHFbNCfrHwt",
  "key33": "4RYFVQnk5Wp2VEjAVVDcFBnyKMbRHt6RcX7ZFdkjW5zYkm1GpgcbsMR1MTTF5fD5sFzWX7r5rMsm52LNasFEhN3J",
  "key34": "4kFkxpU9DAFynLF2wuQpoggYzX1xckWCQ1qYSGyjjRsQyoNzz417BJx3D1jXuKZAR4HsCHnES4HdD1aAZYAuWLQB",
  "key35": "33xYDxjc3PvAmptdJjPyDPpsuwad7TT5ftd1Qdbs6Kr7PCrzXUT9RBZ7qFqGc79apsDePHZJa4pDHWcqGZd8oMui",
  "key36": "57XhMyCYR5SFchTPZ6UWLvudaVUnjKUrVVsuQerRQi211e1utibdJQN72LRtusrMPPF1RuKZ8E942QEsKq4X7vmQ",
  "key37": "4R7Npdu94rCFmTiK19rrWSYCqxmAUMWW2bkzANxu7tdBAkTotcSVt9kQKDo2KVWNFtAxZNJPaYv2sUxm6mJZtkV3"
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
