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
    "4Amz9QC8QiYZLrnQw1eph6ERa7rMsEkdtfoqsYp8DJ2S7ZcYE9oK8G3Zd4nGiz3SditmGA5F37noxTK4trTSFPAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZfSCR6RC3EpTBSEWt57gzwKiXNnC6bohw9LNpvGGiS1xCcQ4R4ezYyjy5b84YWWuCVRvSwLxCEWjhcmHBDEm5Pz",
  "key1": "3Wi5RRBPQTcMxN21sK5P5FWxjzUQjkcRxXont2oy3MHQapYwnFGDt3UsYQt8ZDMYLCyfd3GhqwJywUUnGTR5SnEs",
  "key2": "4jGsT8uGsf33fsKEgWng5eTK2mpv4X2QSP8FWTu39hSzidW3MNcfTxHgyGkswp2tZpRTGYd8XfSA5TeELvgZb1g5",
  "key3": "2r4tFm5tQrvbEjDNpk2yPXa5uk9mHizpwB4wYSYFhLcHNseHtnTSyUDkMSGEQCdWJ6ESqzFfn97y8ABGCHSBHDJr",
  "key4": "55UpVjL7Sf5oTo5QXKM8ne8Z5qsfGKs3Vaxirym4zQJDtqfTgWRuLcKNtgK97MXXunetm893H3ueH3jPaxt9MtUS",
  "key5": "4z87FHLPxgdePee3QfYMq2eTPZFsftvZau6P3S5DpH12RRMZVQUJc8GUVJNdu7rhGnHHzJbQDtwSXcWuR5i4n1Nn",
  "key6": "3RJU5frY2RiuZcoZ49KoxSLYDVio7QQ5FGQgsmkcFKMnWWNYFvbCf5r7f1XTXGmzJFMvs4tLvvkjwA7Kwewmdrkg",
  "key7": "5sSqmTd3m7EeYtiYpYcvaDTBqNpz3Fwd5J9TFjHdXDQHtb7eh9gqAqZbtq8kjUNqgzq3YkQHbudSL6DZrWm59nHk",
  "key8": "ti3QwPRP3AsKFoeiAjuCXsLaiWnxwqTRoSNg4jPqmxsdBaiyqV685ePSutTk65M8JCGJ57u5ybpUPsrProXLq3Q",
  "key9": "tTHbVP1t5rhz3LfiCzwY8NTmQN8XH327z5kPNbSAA3TtRQgsAwcqBVijRSpz67eRuRtCka9reKWR8AJzHtmqLRT",
  "key10": "2CPBHexjoFopZPKsbQybdWa1ebaoRxPyd8FeSX4dokzL1eCAxeMQrv835JyJ3NrE98QGRNsxWrfFiib1zFViPMvH",
  "key11": "3zVnhidmBT9Wr46TpiJ2YucEFM2q95trYZ53vxGKzE4YRYWYqAQnk7ka742jB6sSC6kwakfrGKE9wRgSqiAqpHdU",
  "key12": "1ztvTSGF88wtfJoKLQwCrkiuhhLBfxw6nsMzkWi5fnTUAbCx57URgponmbvRvRbMtRM6Mzy3CTSimFyrcFDNzyj",
  "key13": "gKGV75R8iZShx8iG61eXPGthcgg2GpbThRH2opHsVDHh5vBh5N8J9DcHz57vfxCAUbH2GgpYHjLqapkBBsoK5KS",
  "key14": "3ZdF3TKzUdYsSBjd9dGes662VxhE4HpYpP13nN3iSE93MbXY6MWMRMLB9qbs1adBiNaFFp5ibU6CuxmVwiVUBKUF",
  "key15": "4A8FT17GnFSw7e9tkMbFF9RZ2c7qWV2XgAoWub414P19tRss2cXN3TiSMFeQ6bPqxcowUwafmX8ShzZ9gQscya7c",
  "key16": "36i4TSfUtCAjeSd36yk18d5QmKiboyFgSw8uPGmmnSjZQJPHDd8sCoscvxiYnhHYZ4xafZoecMHA2A5DcfavW1up",
  "key17": "5ZsWirpSNn9pumb88V3FcohTdYsaT8yujzQqAVrkHTAqfoJcDtuX3sXxg6CynKxcnuzLBnen8NHREi2SmKLxA1SS",
  "key18": "5GMh27V2y9hLArqoo6EMs8uAK69iufQzHCU6cakww6N6KVLJo4ZhEQCGr7jyfTRHdsCgtPhwQXiaYUbPp55qCAy3",
  "key19": "2afXgVjCcukqbyvg3hJmQiK3zCgvDee4WJfj2xHgSNycvywS9nge812jUWa7yriqipyxGnMt4odw9dvZezNMApJH",
  "key20": "4Tx19NE7owFfKX5D5eibhfvpoVuyt74bcnxtb1CLZVAMH9pr3L3E5RNJucEzLRdYPVL8QZ6WMoFbBE7wexwGjBy9",
  "key21": "4X2vaX37Dv1BcGjTs9mGorBBm11ntXB8quUbQc8PdMAWkfdqRWKb3MfQJtvjNtejBt2PZqf17auTV3d9zPq7EYSe",
  "key22": "4QAfnVfuRpfzzptEuGPxGWona7oTXRSGCaqiQqNmWKN8ZA2M9EMeTCNPGjWAB3H3obhXknUCuh218duUP1GNrCEP",
  "key23": "2xmMs9bT67zCELBXPKAp1K3EQC7SQyvu5V28vV1BRNecGRqnFkqJs8mv49HTVnoC9HZx916vecvc6E4A73NXUeWA",
  "key24": "2tRFgixZHc54Puayvb5xwnrmwfd4SpPXuZEekkDgsYmbnApwVq5CgyEkPsVnDBJmRjL1UK7sQgEnzw5VLF6cKUTn",
  "key25": "2YaGboU3igh1Hsieg9PQBKLQu3bZcguHWESrFUWWGVmFeGDvyN7qhP3E6NJw1rUrAJz4CVQbEJhZgzhttVLv5C8U",
  "key26": "4LhaQCDiuxzF4EXjr4jVzcUhVaVarPvnxGa2C2hYq8tiDFc6XLhov8Dvb9emVeUEEUVZTPVi9RRG1iHys9iaz2pY",
  "key27": "51Akm4K5G41JHphZ1HhZWohidxYThDKJxjGZ7oRKK5KPJb1pU3c3oAvasKKjjy6ck9ouv3ibTWjaae5uPWBhwiAH",
  "key28": "36kvC3HvKEfgHAHwazzNzKuky3YSFFYmLztE822YEWBeuLdLuFRndiqpLvuvbLkZJLaDKYjFQLP45sXx6CLprbJJ",
  "key29": "Z5ynZV9RXcvtw6dJFk4kYv3M9jy4DFKvSaG5giWMYDnkh99ymrTK2vkfaAoQm7CWgEYFGAgbignL7axZdLfLoKg",
  "key30": "3SyJuiMcxvSCsps73jGSksdLywZoPcJheeWordiAp9fSLeiSWHhrtPshwQQU5qDriicPLSHjfTFGGbvCf3k9BLpW",
  "key31": "ywGGUVHjsStLjJbtKtwbaiuiZLiBGr3CixoqEEAfsSmM23YbwYHSZh7RC7pLX7CQr5ofi58cDAMwfYS8WNcjCug",
  "key32": "YGBMxiGyUaw2oTcJNQ4xbxPWvCLrFuxQ4DkwvupX7gh96XwmPTEf54DUaRvXmjQuu5YByVSR8HwfzyD7BNcBjr7",
  "key33": "4m9Z2xaLvj896p3jXcWMbTKLmvFT7KvPiYLp5P5rnaFPPWkGSU3x73HN9iNTKhuHK91Xchphz36fgNTRJzM4yUZD",
  "key34": "2yHeifx8CUqY1aWss5am8JW2zHL1nyRXvp9Gz7uzQ7UAEcViFbq34svCZVd7JSvXULgfFvi1ZDHaCW7vB1DeVfzK",
  "key35": "2vRzsn5WTcSbxDcxjsXUHWG8C26n3AEdC2YJjhAGixNqxh4reTWSUsKzYWHf7hRTt6hKPG7TdQLFHW6PKP1dNVUu",
  "key36": "4eZqmz6eTz5qpxVPP2RsZyKnzxAB9jTkaxTthM6orMgvvqaWBBYuDMyu2eimqh72D16cg685wiKJmBFw7J6akFPX",
  "key37": "636D6puGFt9X4ymN2R7Vp34XZPSWCR6ZPrEVwp5tKmafP2n6MKLHYQhaj9Ju45Kf4x8hHy7EEEuHa4c7SyWY2YaV",
  "key38": "inSPy3HiN9K5nD81Qt3QeNhjqCW4MhFdGhUEjUPZqmCH8BPsrdr3hpdLEYXoSFVq3dzMrdjicLapLvC3dQBhbpS",
  "key39": "5PpjgSW7bvEBg82SCrq3bgtJ6G7NuThQ7nAZboPxEdpgwjA1WHycNZRuaTxBvTGmC9HdTEWg1Xpg2Y5nyQyQ8LSP",
  "key40": "oBMrbPTTWJjExPCuYDgwRhuYFphojsKDHHvNhmCmhS8cVWzQy6ZomVBkDm2opniyJ5YPQCoXgAhwupFT7LNVDfg",
  "key41": "3bJQZjoTa5WxYRQM5XKfaRTSjemvRUmJbczumg8c7burhR6PL47DggSWRHhWTBywtKb2hPRtJK2LfMGufLzpHfMe",
  "key42": "3tnzYk7dyWu75P9sYJWtGDmy9xdM1eJZDFiYkWvN6duSHPsJA4xZULBP1fXiKvpJu83FeZVh33c9gQc55cC7G3py",
  "key43": "3VQbiu8254ciHpGwKgYhYgm1WXeEHw26TuEtayZQWbjejCqMZ3ckwU7oZqcwMo7UhvTrFQCcQ7wew5xkf6AMArHL"
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
