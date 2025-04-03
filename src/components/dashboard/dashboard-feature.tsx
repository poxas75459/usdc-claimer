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
    "5BYyTP3iSBKFoTUPJuhqu4pU1AkWQpNTRyijy2appVbwHFrhyUuML6J5vcViVLQiC14Vv7mB7mN5RP17hcMae7PA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WUPDJytioeVn7Sf2Y3LmxGEUTZtH2kPKPK11QBE4qZWc6wEhWbRWrTSmBQJzX5XiQ8iWBdNrac3KfmDnFoY8pqr",
  "key1": "4j46UrTNUkRJs9w2gXS2fa4E2E519aAGVSFvdC4GdCggGo1wX2oWB6HW38Xa2N3uJjENFfThe99nUKUCzxSH2xRi",
  "key2": "3Y28V5CkwaGA6GQPpUG6Dvu5UNHNWuJSh66J6FeynF6QYQePvDzCLax35wQET3xj6BSyxhDhALsKkSMUyk7ADBKj",
  "key3": "5GL1JPTuHUXWSSt4w4J92rBWoH5RCNVi1uDZddzbRfGV15RYHs861DcsCW8QnGqDFjhiKmDPwijuFtepareismfp",
  "key4": "4jEGiWpEv2HZe7DfGbeGa46zAGQDjC28jPg2abiMpend3ZjtDYDJvgaACg6RProrKtdTt8y1wPU6nBs4JarNv3WW",
  "key5": "3uRm1Fy6WywgLmoTtuipjVGnCAPGaY6nmHSybe5iWtmSMjyyQ8Xe1etm3znx2jDLSXUktPXgQZ5TJRfipY6ki8tY",
  "key6": "3yhBvhcXg1wAsH91z5CtcFXWm5kgQ9uSaKW9qnEAH6wuMAhTsApQ7F8ypEWgC7GSCAw9pCbJyogf8MF3A7v9nREw",
  "key7": "2d52n6NxksX9d2RwT2JpscSU8SAAkNjd4eNVYePEenwT9hJsdSQwEDiD5y7pMNa8gbeBgNiJHW58hGkDNBrFbCf8",
  "key8": "3iJ5WySAQ2iHYgjtgnkG4oggmPtpFCce2wJWYuX1yaQrTTLnKhKVH8h1M6Toa8ZeTn3qnbxU5ESW7iKw9Qay3BbJ",
  "key9": "5FX1h5PPDKZ5UTLf22FnMQWS6bF1yKRXKWms6XPxQE5n2Cj1FzZLMsZ6a4kFbUjVC8TBCgDSYWaTfxoxzoGywsfC",
  "key10": "2SFXaRWMbdUXZQEztXcsUc4MZvMxnAN6NR7CAbYEirHKKjwQozMVad5XajroEQVPyGoJkWWwixvrwZ8qtVCvHAo1",
  "key11": "2V23BBSiA1oto1S4S9AAprFBxEKAb9z9S7F75uV3kC7AJWWxQtUP4nm9S3KFUUvgfSYqnxLeVQLXUChqW9uwN58h",
  "key12": "2WMi9NptyuHDabMpr52o4uBEVYtCyx4omvhSNH4m2sZ5oVoQWoPbzL8aosbH3xS2Bdf56S4Lv9CdJtUqkizgQjj6",
  "key13": "65qA2Si73HNDAGuMAWVzNuz12ho4Z1t1LEAjuzFLBPBicsVD9WLcNQjXDuAXAAX3Y2gBgLVxh5ugjJZDf6kDbrje",
  "key14": "3P2McNFdUfHbiv4Dq1GoV1xixaZW72oPDu2DhbBTmvngFfNyvyYQMmS1qbqeFdHLs8PiPcW9znPtA3sBh8yGLwgX",
  "key15": "5enZBWc3YRp8i55CUMygN5yXHV8KQ2ApsKq9k3dQiByJERi4KKYiTZmV4Rewzubkq38BRbfyKgp2Cq8fNcZUvEd4",
  "key16": "4FCPc9hw5M8ZcSjQdtaBmbTEwn6hv958ZSfofgAprKHdqGWZGsBN377mFpJCmwM3ykvbXW2AAXZ9w3aM56gy5VSj",
  "key17": "QrokcEXfcJjTSVVEoGWer66gzWj97uCvtxwj6f9WeTW7YVSmFtByoBZoGZxMA6XByRMU1qYTWnALBjsZcYnT2Na",
  "key18": "2dfSrmdotzyFYj5rZpMr3UCgSqaVrbMmn6miBXMGwYn1rbTMPo8ezqrXdCmp9ouusajzdcadtnLNnXvqsEe6oqwv",
  "key19": "55jyaDyWzSim5G3kFMsKfMFDwJWieHduTiH2rmgYujW8pmXZWJ4GQdJF9UkJ8ab9E9AKEmsefnDd7tGuwASs7Da8",
  "key20": "4KgdMBrVb6ruXB4gugywiMsoCBt8gNTCtZV73c87QXHX4B1rVS4T5p9RjwQYESnoZiwwsbF2tJDUmbZD1178r1HT",
  "key21": "45HAvDS8HFhaxJJ992CAebbSL1NfYCyVhHNvAraYgHrpCqwEaioTvW2EuqvfDxYbjBv1CkJQy8ATfYVKAfJFjwp1",
  "key22": "3Swuxt43AV8Dho6WBr3C5SHp3PC5UdCWCrSof3xMb6b7HJ9vf16wkDCnp9C5MY7SgFaqMZpX5i8T1K1La3593X6t",
  "key23": "5yYRPH7BeXWSBidw4voPWbsNzQWvifR26UABgceUuomiRfBzoxJxxmAVXevtYMfrN61TiZvep86m6rvWtb8487Eo",
  "key24": "3hK8pjMYRYE2ETRwfxJhPEgcfe8V6q4pykeDhjY5wZB5gM1AydnW4fWNGZFmM1MSompE4pB6gT8Ut8PLJ8N5grqU",
  "key25": "4rmDkSkCtuwJQ7PCbjf5FVtMqc4pXXST2ermqCwyGAyxN7BdN9b4T5xUy5mekV4tQPdbVgJ6Z18L3VXTjKxP985V",
  "key26": "24tLnZCKfXGRexWXanmBBrJPHqULuU6tBZhSUssr7yPPRD9LTaNwsKMDVkAC7UQwpyYqHGSvjSsPFehZm6Nv6xQX",
  "key27": "4JX9ctTharPXy2g8pG4Z4eFCcU9ivekAcLiW9enpPRQWZxUMQUuP3ddzDx6Pm6VyMjhx8cdKTsU4HjM1uk2Re6KQ",
  "key28": "2CDGGKnfaKmmkYZZPctb8R2qoVwnXXsYUdghoPy8Jd7EceWEJ2MGxVgfZMyKv2C9TFGodUnrk5XiyUjmk7TGoTnx",
  "key29": "2HPmLPR4pJaqcts3RFTPiqLL24oKABNcd83FPFFtdiD6jntZvs34KRSmYT1ynHkMrRT7LTS9UvpeNyGwWK7hGRsv",
  "key30": "2hbHKAh1cXcJaSyj97YX1m78pddMMuKRDWAhZmz1iAcbXd7wx8Y2Hgk4vvDZvapMZyr53PfAa9LYfHqv7CAvyvDH",
  "key31": "3dWtKwrYbptYKEGxJb3czUbd6m11HERfsc4W69yCu3MnMxZ8A6SuTiLN4f53oVEWkJ4ABjxoBRY71KwHA9LFMrg2",
  "key32": "3MZpdWPHCHabUrjo8j5LstsiUqajyqRw1cW4U9Xwznh1fVpFRGxmejrAneUusCN2VF6ZEFFZmJ3CdBHa4iMSNQpM"
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
