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
    "YL4i9MbjYLaST2R2aHLBVGmavswPkxtfvfpNzpignUvTBnrGeKRbpUuPofiZ1swpcr2GjjrS1wTC3EwywRf9RuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Zn3aALtijN6p1QTsXvthFBM6LRidTgztiJLG6Urb2vHLJsE1r9PdgvYxZPuE4V4o9AGBrv12efwjxChXJXebCY",
  "key1": "4JopsB4TVrYBMka1j3UvAeabwNuJByLM9FvrmjvdySqdwieN1jW5MatfGvCwXQkQULSrwrTVYEnBB4ZGvFfGSmqg",
  "key2": "2vZ9eRV5uEBBg1PcA2ghqmswzBdYFJQ2ffHAR7LhJKz5a5pCDxaA17Ahn5Zn1cuqfSayzQBdbpSuXsQ6D3YAgsKE",
  "key3": "41iQuQmLWvjrvYPCuunVdWKFUzpWLpX5p3xKLZ8yp9aSM8PXHVZhjWzd5bp1Y1VkoEneLmgKivAd13CvFrcXfiru",
  "key4": "4fy7qfopxFmVDJeSxi5wqMjAJXUa3g3Scx9QM1guT1D1WTH2VGdserKvXwzdbqQRgnW9y3dKLT88ceEyxwnJ9677",
  "key5": "59UtsX66SE2iekHcnCt7LUKWhGE5hD2sBtaEJkEJPKQ3B1VErdFQVcprCuBKZ3eFoFKR4Z84j6Rho1Eu9CBTf1BF",
  "key6": "3rxsx1Qr8qKagDF4QyLxa2w5SR6iLJY7vtWhUqA16pc8YmaiSnZCgLsXy7wNgW3qLRsXwkz8wJPtj8UETQ3686qV",
  "key7": "3Ta6p5xnPG7dtf1g52XFdF48rRZokUMvYRbLr7UNHaWkVURymN74azuxwgfoCYY1ea6Q5DStgx8dHdLkycRA13HJ",
  "key8": "38f3WHrcwjVHJULcuRaANcAq6DRRysdkSVTCxKmRFyN6LFTRxgiETxGmtKftrRLnc9ug692T5yqtQ7XQKaYihoPG",
  "key9": "2PSg5p3wPVV8ynRzTF7sMjx8Z2JSiEcysiC6M1umH6Cn3eQvu4V4FXaTEWJMGZqBTJnb63JqxMiv2RiXd4JcEGgK",
  "key10": "5RCGpwzaMZpU8Dc7eN28nS7LmRcb8JddDG3Xyorj6ztBgi7jbVRjCFXcb1VEsjSx6hCPAS5mCDcf6r7bL5KzJHyr",
  "key11": "4dvwwibFQdRnLYurDUT45pM3aeqfTw3B6wg8soFRK5WAhRjmXZTCobMhabEZRvQzg79KvVbWZNtAk61zZG73HiC",
  "key12": "37zzrq7FhgqeJvocuwG5VQW3fTyamTiTMmcEQ2351ya7TnhRQAF4xid3ZeSCydm5Uy9GqCVWKeYVDdZdbdMz4srW",
  "key13": "47RRNanoTYhqABGW99xvGgiKvsKQV5t1dBGP3PjaqMneHp6pvhypvqDgn6xAqSmgVyX3XkxpmeQyEGdfWkMYKgVq",
  "key14": "5CYFjudfs87zUsk4s5cGBSB4E6QGr3ttk39J8jKF8CYNdkXcNr4Lgjaxrpn3tvA5oSNhHezGVXafs2pRwBXvxSa2",
  "key15": "RMHqWqnKb2QxMqx1mYmyAVdf4ioccvnNaDRnTxeHvJBXSW1gWbm4Y6Q2BaMd3FqwEgrFqAvKmHbeNPR1ggCAyQJ",
  "key16": "25nb7Qk38hpXpAipgmFBuBieyXYKEkuujpiUoH42tyJ9jQwdbt3jiLSyJfmH22jmSdTx9Aap32ogzsxDo65N3pez",
  "key17": "22tFLXiGz9N5wVoDst1FtzHmkeDmexMsHjpFVGKddQ2ER1ijtxR8KY2gz4ePrYWhR6zztio2r2iSp4L7XRL9Veas",
  "key18": "3ikDT2ffTX2byYZoKyjnu1v256UZJ5JftfkXu3Ct2pdM9PA3YrUB4BaTbiMn221ATCv2hFro6mSGMCiXZCTi14vg",
  "key19": "5CVUDFLq7YppXxEChFu6GXQGtzKtNeJnU6XuinxvRYpJfKHGY8svVt14s7gE2PUAs2xzzBswhxjvdeAcd6igGc51",
  "key20": "2P3qXRPYY7yTqLdGEcE8gWtEdMn74EhpGp2vEvhW7dXobb8dXF6Z4NXHjcJNNPFrJaPzZNFisBmzqZoeKH7YKGC4",
  "key21": "2eURTi1U9bBX2dPK7KxTdfyGCtS7NUfHV5vDJrXcorxiTAcSK9iba8z9SHJQYPgHmR7i9rCNiWZyr1Ac3ciZfbpS",
  "key22": "5HRM3ATeTb2YTcMbQD7Boyv9LSqx12rUt7PJWu5eLw7Pp9DF9jMJevMXZNrQKDigbBWxVP1cyT6a6wQuMZF2Rcmg",
  "key23": "2QWytUQq2i6vTRjdiCxYwtTiXyec7G8PeMdTzk1P2if6ZWRXi6aomVPq6G8xrTdquYaJHun6rMmfF8znsF18Pp3N",
  "key24": "4K87SYQbQ5TYE5L8yUsV4BWKnbmBCXjicSNrCkmXL6N6WHNUu9oLUBQ1TZiUc7VQXE5JqVHV5epC87tPN55GAaC3",
  "key25": "biPnzc9eH6EYHJRtL1TcZc64gXeqRu7EJ3FS7ErtsZonmVjeifsu8cq6N1EC2o4pWiyygGejiE5qT3X5Uw6BYSy",
  "key26": "KRbAzHQkZ4L5FKuAWzq9b5Lb72BRGqekFF1YHF24o1w3wAp3SjTKM49do6EBVyokFue1FsanAUzAeoeLwkpYUtf",
  "key27": "qYRaRAEY8jcWxd9KiWPcWJq9KBYS71A1B8qLeQPheqmBKn7MyrHvnzYg9na3j87bR7XoSq4eQ1GZKtnP7JzWo2L",
  "key28": "5r5J6VBgWbYwdy3VCZQxVLjX4ZetDecUg8wyGxZQNfpwbZPcPpWtr7Z4uX7cRabAMEryQjcVDshLCXA6HsnN626k",
  "key29": "5qMQT79HS6bvxEFDhSTF1q5zvjYf1SrzRwYwwRcGZdx1SWK9Wgt8uYSjU7v3PctEjM1LTwwPFH9YD943zm8jmvqV",
  "key30": "62TuYEztehDBruLnJLJNS4x5qeqFBXE2tWQGMb4zNnpszG3WwFAirnMTwAXjxL6naseE3RySS7VLVKU3fP2rTMzM",
  "key31": "2WcM6oLiUcqtFxG7NkmvRTzV318pZSkPHqmyRfT6zy1Zubzyq4Y22TviFdH9oQSkdgoDk9rYiibLDtYzhWCPwrSF",
  "key32": "2A7M9nkcG2VFkBWTkcuDHYoeZHuPyBdZR96qJ8UA9T8WcpugtbNYLfbN7jRhKDwrsvEeDTjmvZdGfJRDLcnzozxk",
  "key33": "3zXapJ5ajzhirXQcMM3j6jYfAAYL6ChkLGnKRu3eQtiyC4qoDtwMhzWHx2nBrkkrtXrEB6FhvxhXTFbWVa8p7Fdz",
  "key34": "5FV31KPLpXp7gXBv6PRoAbFyoTAgJ14TMVsUcSS2HjNrETLUtoeDKSc6ixm8PbDoNr2BN7UWd18G6Fiq64hfQuEs"
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
