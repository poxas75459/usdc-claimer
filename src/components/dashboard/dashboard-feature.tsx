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
    "B83i26L5exMk54j8sK18ECB165Gpj8poBkZdfi3hRDNFf68uvU3eynF4BssAUg5RoRgWrnaWKAakDFADxZkCpJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NYjdgkgSS2Ys3ppiD197LQ8W7KnxQtmiunEhuUriBLSgk1svdUFZrQ5nBwvBGEcos7m4kx4x13cBN9iKxqk3FsH",
  "key1": "21F3hfLo2Zkxr7ueFG2oyBVizRs744V4jaAWPHsAaaht7vLz9mFyoP8pntmozpJW7HQLtBGe4j7VE3LL3rv4jNZK",
  "key2": "5FYXGssJsPsBnSPwq9baGQPYJyXS71PW9dXok3J9VPNQYGpRDR833gawmngzR9rrwoccEVDzz1rNZRN6L41HF7f9",
  "key3": "4oyF9wdQWKRxgAHsN7zrLXeN48Hqj9TyXs95vUs2sn1XzmjbkbhxcooUGxsRYpwJrts815KxRPv2Zm7N4h7hXEBw",
  "key4": "3X3zCvbygtTfxX9YdXM6FJ77ihoR7BcqrbBBGVwqo2wngSyMhrLgiWK3yN2oMiFXxaYKyKgazn1xWhpE27T5JaYU",
  "key5": "PX5Z3FSVAr4mUYYmZLk8LevPw6t7kyH6SGB1Mn5i6GbqWKy6FNoPa5xfwd3XaAuuZZ17Aq7w9BLHXGrLR5PaVHt",
  "key6": "545yzaR9LsspdN5m7opkxfb8TsHEAAiKxtVRcoHfzqVusEvVkNrzpGcfcLVGPHVt3wSWMJPfCuNHFqdNNU3c3MnP",
  "key7": "4x9kk8Rr9Qrffws1c78XHiRuCdAJkSaiZQAd5oR9G3sx6nAP4hYWhEMXtZd1tdGjLW1h6jj3hL61gDkCqNgsB97a",
  "key8": "38SNohN5FG7WAapNj8JdrW4j79wk4Wevch6gqHpAbRA3VxdVvQURFZnY9iZ1WyvhTGLvBmLi4feLV7SRsm5nmCun",
  "key9": "3QH7Cz1VrTNwh4PZVTXs66zGub6FF9QtSXF95Nk2spqhiaXaGfh9LSWzzyxm8ygf8ogY3jcm3AjbyMgiz8Qdz61e",
  "key10": "5wEizjtBxvzBBjDtw3pPMNEfcCjjxBiEjJxdaQSbkuE4ig8WD3FppzbzTzJBUoDo3FQ1bDppzJxwUyMNwrXCsAx2",
  "key11": "5d4QRMp4po5f5VCrup47w9sVjHsHNMt7eWifQHTNJotLJykejZiRuYX2DGX6AruQkjXzyGNfhuttxR5Ry9dvRLxv",
  "key12": "33pw75K15oDaNkXAMDpkphHRzmuhuy2FJikM8Ae1CoVcnZK6RsQd9M14oMkuWT53RWdoUCKiS3BrPtV8WxEuDhZA",
  "key13": "614hKzFWB8oL4C78FYPXvLQBb7KtcrHzEH8gyMcAxNJz3uN1wUVgUvTHWJ1i2kLerMpc134PwYWwEemwSM4TGWFT",
  "key14": "3vA1o6TzSpxkmF2Yj7J6kceFBDAN1sXQwqXqYvQhAic3JNXZ689iNGweZWmuVE7GBocr1ihGnqs89JL498gEokYg",
  "key15": "4YGZ5BMp6grcBo89J8eMjDgnC4NwcXiJYU2CyGRJniWeBe55376tduZPHMBCc6HyMn8ZcKpE2Ak6bTdJviu2kVbQ",
  "key16": "28GzAboJ3CDreYA1tqTggKPs1UrBmQLQbnbGNtEJarYzpSXuyq16rXV2mreRLdJFZn1Y9b3fYnb6hf7bw5yCwzt5",
  "key17": "2AX2JvoK3CwkqmjMZdmcKzWGYtV6S7jCMF4dH8eirSqxFKxdH7cZR8HiRpHbpFvCv7RGVwPhPhZvkhroG1daPaKC",
  "key18": "5LAVRCuVRpxFZWyV7cVNbiLoSqBFzLYnBHpSNCpxagk6hcRVs7po4z8kjmv6efJeV64QEUXB2uFJhiiYnC8QdrFX",
  "key19": "3cn3ChvuX4ATLvXjkVvPFqomTrAc4LKeo45EahWeUAr89Pu5DtXqEijwb5yYCBa6XcDshCQ279ECX2HQ7iF8zQ68",
  "key20": "2fzAFC3YTDbBbPwaQRLgR8n4FmWtkS2jm19NHq2E5HxpVLEtjjLTHYHj44s7NBvejqsAUnhz8chsAg6Nd4ZcnvH2",
  "key21": "5j69p8rdMwtAt54o1FrAhu7skqA2gUtcEmSYkcFfBCDEpWTvmYD218Vho8TFQjzGWcFuvgLNPd6e22fRkFn86TEs",
  "key22": "3oSqNdLHWPXmoxdZ5mzF5cMzrBR2SDGa6S3WrgYHFV8YHbNgUNHAJ4M1YXhM34vFryxabtn4NLxFkBe5ZDNxpcYm",
  "key23": "2FCh6YkiuLy8QyRTVRcs3aGfdBB1wbAweEjPBuhsXPK6rY8tZdyshQUpJXbZZomTCV8XpapdtPeNn3tKPyLhNbUD",
  "key24": "457JGgf8gZR2ZWhwUm1jnEMpGqxT9Uxf3khtkCZR8vbjqtA3VmmUK4Bci2TNwDBMPyieqJySp4FadQAKta61H2Bm",
  "key25": "4iHrPz8j9fw4H2rFmujwREwTTaX4hoe7158RjP2BtVheBRk1ZePePPQKG1qoqqyPsMFAvTTUuKJMNmDkT8DnAHwb",
  "key26": "CNf7Y6HTe66spVvZEWyK8aLn3cnVSwHTZ9pjKQ13kuSEbckfbTksNMBzhxay8kRTeGEsknyZ1mLSMJdykz3ZXQ8",
  "key27": "4ZWe94XS6ATnVYDkjKLB1m5AgvJZUQsoJ8rCL8WRg7QaUB5zigeVjRZXwEA3ojHBZX8dPie8zULfWFU5drbtGPAQ",
  "key28": "5VwGrnXvbshDLpDjcNJHyxwXcTCwi2akuBLmoe9AyPG6XDqjiJusspaK2rfV2qygs8LaH3LdmRdVJLRhEARivw2m",
  "key29": "4XN8ucNZbgEixrU9dLeYpscKUbs6qznZ8mtCkhba9SZqXhjDWzqewNyxg9eCqtv5ffQHHRC5QzZPcNUAMykmHXJo",
  "key30": "qs6TUUNfw7zq3jVoXetz4GBwdxcfR1bvZwrPaeQ77avdWctaEEaaaEcRY1sLkBnM2dim1BDjT7L1ByEjA6TDfiJ",
  "key31": "45pNcNMj9efPbTsZ3V9BpVuzV3AC5wkZ87kAUuAFXymRUbQE2GuZLCc6vABQaS1GrCWo5y4wwTVF7iQcjTxcLATZ",
  "key32": "2AB7hkcZfu4mn3NRfLEcMXNpzVgrajAhouoMPzfotgXaixabcGiDqJ3GcdSjUzbrMtLmbHrjLF35pDNGDG6HtiVe",
  "key33": "3YHf62vhfYgawHXbVUYKY5VB4eMfLSgeKyZoqDSWDc6H5GaxSxHdj9u5phgmjR7wpVsrWEAkhyTTSZMjQ3hoZVnM",
  "key34": "5xRt6zQmUWijXu6vGG5Wo2TRenhUBGuErdwvfVtj8FQ14UiEfcnrvs7agLa38R6rPzKS8ZYDe56gCpqNviWkRGe5",
  "key35": "5ZqRzJhD1Qt1sc3Hdro96D5m1vo5v9FyL9xuUrBtdJMWekvFuj5L43Yw9BCjjth4gaxAdWwjAcTPabtziU25e24s",
  "key36": "2PmyQWq3HAHArJtC2prVmmxz76pxurpNX34jgkpf6fjETPAGXJXAxXWhH2VxvkqAd9qDoRwuisXTvcgF6FTT7fMp"
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
