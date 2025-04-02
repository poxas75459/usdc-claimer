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
    "2c3NNkhWoP5iNhd1oTBXFFjTJxdJnBobJhNNnz5taVpYsj1eEsiLBSJcZgxyiGy74Xxy2DiEympTL5wvFFUkMxHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9bSo9EkUfgxYcuQ3E8UGLnkNxsShfBJZzA11N8nFx8DjxpFFqukziJxzipCg8PgrUBPXJu1ToJHJk6cC31kAFaa",
  "key1": "3tzoK7MPpmbsfZ7wLQPS9ExXq8Vfycb8FhJX3EeH8QZ8jc44ubz3Gkeyex8Y48ZrSyHCv6Vdhhqi3j2yhqDKZsrJ",
  "key2": "B6n1ymZQoA19iZHqEbgtxK4Hse2Wr6ZSPdqiszEUAjs8gJV5grKsX4HgP8APt9pKMk8rTTDiAA6s4svQHhqyZoq",
  "key3": "3DJrBbmjGresmfbwbEcYuFmVAcNdHNcLu9odThHsM2bRcTLpeTqAVB6r3Ui3KiTUKB895MLRhPJ1gZR3L4fVqNLX",
  "key4": "4RMBxnroszKUhjut3BKpWAQGfGwDDLDnQQMiqBjUy62zV5PNTz5fP2TnZELAtp6q9jK2fa2UxydSqXcZiEcHPXHy",
  "key5": "4Jg8SqtKTATTFRsxYpKbhvYQzujZcRLNesYYFg1p1SmnVQ53cPZxiwduuQ9WtpW6rb3EHvU4B8X9fFVgXAXc8VHb",
  "key6": "2njWE3knkk2UsQ2MCCp8NkAq3taSwnrCVvc4WUrdFp3mYTj7WAuuq93RtWGWHvEgQccC2pjr6iv2KRmq1n8dZrox",
  "key7": "38FDSD6C2x3E7Ss1fZ3fXA69uBvpiKWKYnNoRGKNMX4SKgsTSPk6LzcrT1We1bHkaUkbnbwkfgt4K7buu22aCExc",
  "key8": "5zmGubXEGEJtstEatmDsthuJoYXQqPJsb6GGHhixYe84yh9HB329rhbwGAu4Tcq9VPieUcM2zmcJ61evodGHdr3z",
  "key9": "2yhM19Qf1wSvic92aRMgz8JNmXbXLNENVrCT3UTXnqd2kKsPKGrMyciTNrLMdy7LpeQQemedPDaQkvKpDgHLzTkr",
  "key10": "3zGXibKg3TDotg7amVKwjyZb5X8ZTi2HPfsdqwQdKTjSFUzhYio1yepAXH6sZRvoNw5wnpKLLKPcDuierPvntbfq",
  "key11": "bbTsgUSPTV1AzF6hyVeVGXJbDajqNwzfPXeZR6VsZpbSxtSM9g5AbTQQnf5yTGrH98hdd9io7c8h1JfWekSmg2B",
  "key12": "2RWf42FDUJWMeYXqfj9dticRGM16SXTkeopr9Mxh3pN1zYKJQwUNdSjhZvy413uDJ9HKR55HMWHjYPjHUWq6qNSt",
  "key13": "3yMnpnfQWY6c6pk8PGyfspHq7J7EuDLs3dyKa3ECxcfWG6T7tCS1DMP46Lhjr34tG2Joa2iM3gv15ZQfa2X6QrUb",
  "key14": "HjkPJy3oX5WMUnChwrKMDnQfSepg4BTgyVCsktME4vv5ZempCC4JB9Xqc1UiUucofsXk2LSNYNtC5ZGUZwD4KXW",
  "key15": "4u8kWcaawTA5JSu9Nukk4NophrrYn4M1zL3kbNzJye8YJndP8Lhz73tRUwCyiiCNxQskbLcZ4gMd7wtScXfsYUBL",
  "key16": "35BqEfiaBhujytXmYavSUWLYCM768gowrhCh5PG3PkizDDTDe5BGbHEvaSbLtsJMcBKRgjUmFbRuT4u4oh67zctm",
  "key17": "iin65pnkUvd2niyMYvwqta6ttKWFB9SJbsvgUpbSr7X7dEctz8BJJxNzsLbaUYhJatkzveJFYJ7PWuyNJuY5pMH",
  "key18": "1WFSiw74UvgCWjPG4zMhxZ6cznueqD8sgjGLYCQ9LZoHad7CKvLrH2MqgWDYQf1TrG4jUVsgRwp4DuhmSsNy4ZF",
  "key19": "2Mx9PQuxhAKvbRoUGBRaqjvNrBFmsyZdwTwMXssoWEHGUExmhJyfuH8f19RULDFWPWdVafzadcNoWj9C4eTs5FGt",
  "key20": "3vBjgz8tFN6Z6vMGhsDxeaoPwMVcjvURT9ZX8za8js2r3dQFSD7Z8D8SyCuGDgjiTRMzpdsBEzfvidNKqbU59ych",
  "key21": "2ejyD8ZioZtZzQyVidk8HzZwzHqai6BWc6zQytHGy6uTY4khot1HEf8ZVziFj9gNnKKEMiWKfFbeqq3SDKSUZ6nB",
  "key22": "667H8dmeVzbLR8nZR9ZQLNYvvsqxkFhGH9QcLav5VhpBnjGQdgVDqDZJhQMiQAtyzsG4bwVLBbQErST9miyQb22f",
  "key23": "5dDjqXSdUnvUrTFRYVK8zycQV77nhUC9oKmTxxXsGfFa9qDTGu7AYnZFWrx8yKgCQKY2TCE25rvLsh3xJrPTDvqh",
  "key24": "2TScUCUmShHoYHVA3mnM5QupGbcuPjuCQ8yQFxK33stMhGwB1JLjsbhCSMDkEXysoSzRqkx2mMxKimvUiuqRGh9f",
  "key25": "65ysNkbjbDbtjKMa7NStpSsdu8d6YmZpDCfSuK3Pv8LyTw35EYq3FJfb6JBVgGaryg316Vz9M9hTzvn99pdWvbRU",
  "key26": "4TWKJzc6zBJ9EBLnvMxvTgGHdRxRGudU8gVjLT5LF5TedsBek3fW95vekbPc2seksEDbDQhmZUxkKoMqezqVQEfX",
  "key27": "44mfQYEmbkQiQy4Yxbh3D6doeTqaZD657245SJ8aPg815XYFsCjd8ajRiMfBSdkReENMGKsLVdjGqLFXqQaKLnBf",
  "key28": "3zDcboLM1pTMps5mNZdv7QRgKuBgAhmfSUFjv96kWL9yMhd3VYBdF8LYqmvneVVXrhKPgrG23xwpUJRdYiMtzhFg",
  "key29": "2x9Lo6BatchiySdf6gApuft1ZigSiA8T7XGeuLJiR4dKiiQhWPrZ1WQidhCt3sHikR4a9zAm64C98WDmA9BFuPAw",
  "key30": "jDWUzPDdvQAE1aEQJsFv6NrS23weuG163vcbDqSmMvzTCD2HtWs5xS3NRan2tnFUpYAmtm5ififu5AmZ97kWkHY",
  "key31": "2SP171d8M6368XSH9FmUegs9disCgELjgeZnEsv61Nb4MLXi8wdbdTggjiQ9VQF7L5X4AaqXXidvw1HWvsdQpT83",
  "key32": "mhUHCgXAipfQ8fDJgSkRzPn9xSzzoUniSGQGJaHjtWvzuTtpPqUDKdXqmKjVmJMJiPgyq5xdxwF3r4effepwq5y",
  "key33": "M5oPSAgDQfx6HU6izGsu2uyjvT5sYKQFdEnq9g59AtnCiAPg1bDcX34tmsBGsiKbs5p2ZTyx396ETrvEaGiPQfk",
  "key34": "BeRduy8Z6BA6TwXnv9RgGHzpjmSska5FhtsYMooDK6DL3WgjX4a1ijRfig4B7ivaW43odEoQHpm1ErX4Q3s2FN6",
  "key35": "co52dvpUUVQ5iRuEZqNHCZ96EDodKcaZoKsom3N8BnCNYwuPHAZUEWBgQQ7BfGynvemEhdrqMG9HvkH5JZpgSrv",
  "key36": "2aggzwBVQYzptr5LTpdzpQxERD8Ch2puAqpPBTVo5zX6kWMKYj8z4SkGhMQnfgJShAotzxWNEgt3cDhMjmPPuQJs",
  "key37": "1ToKCDqXHyBTEnyT7fsqsmTJ3xCgNFB4CvXWWM9NjktUJCnBuUCcpiSAmFVi7KovAvSFrEyctPZRAp9RAUwxtr",
  "key38": "2qp6B9SVrmMg57RbcUR1jxk5CVp3ay2NquR8CwYDbJPtUTyGPYvPLz6sSw3Z9bSngY73sZKYXhVvdTPN1wNU52h2",
  "key39": "4k4UMtCVyTxS81peg44LTUxPA73aVtGMeXcFGkYtpsCMjeftjYqNoeK5fuLtNTuEqkU6QNh9A1AP94nBCnZRbwpT",
  "key40": "3e1coahNS4rhg3nagyna17CZL97j7dgddbG3TiVPdFCSGMcgktWxEFjzpTPXdC1xCLYGVF126cYEFAyJA6nYkMtG",
  "key41": "3B3ujFgUkB7MgyUZs8xntGieFv6hgu8r2TFEnRCS2kqNqLuKjxmNwZPwdxck2qFjhnCCSG1WBuQxiXksAR5ch9YY",
  "key42": "5LpCNCXfKmfYXzHQiDm3R4bsGF4KqrBmaAXD1TTACd8pjDvNb1Z2xctu7XRNiqrCWpHv3PCcrKC3QZjCTX7noEG",
  "key43": "3ThsSdtzkrbcbrEB1jNLdXKNUGmFAKJAsccWqhkxMVikLqtGsjcboj59VnFcpHqNj5WP7vH8f84LKQfCpdb9xznk",
  "key44": "21YBss6vryUK7S7d7ToqMxP1SDWsqoJUtUfKWv29shQxmDjohv8u4kcyXbt2gng6TUBHQYKGE1QXaUxv5nP5xnUS",
  "key45": "Em9uiKN44icm7hVTHUuNcToCWLRhNVa7Li3Y9wv8rMPWB4F6gBMugc5x6wyXMRtQvsXByyRB7M6CGHTq4GtYgFp",
  "key46": "63enviysB2QhiTgy2EPiuMhdBGU6tzcqwmCe1Q8STdBAnbbmqvRxQNxsUCaBnKSgEaobeGcmmfTaY9tJL4rWKERw"
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
