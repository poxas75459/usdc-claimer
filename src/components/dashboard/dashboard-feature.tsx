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
    "J61n3LAbVGHWYdXiCp7J6CqvvzX9TCi1HJcBrKEX1KorzSKAhgxA5sNHV4cVHmNcSjN4KxrRjNdj9TzJi8pN6is"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vpGSxUmMKUksuh9VQjHHgBddu9EFGS869TJcWweYTRaWA5oSMM5NuvLaqPTngTSPDy1SQget6pFxidVACbcW9Yh",
  "key1": "277nThasiHvsPMc7yJWEB4BHfJMg9QYW6uDnxEWccMmt2UoGpuf2TMuhDjTM3dQCS6MZ5Vut5xVvcoAKEKrMUcVU",
  "key2": "54r2nsYSsAjqyEuFBHethceexp8uE1xV3ZX4zxK7byHBAGcRKTYvrXs9w6yrLrgTJUCMDR9Br12bfLhmdhibyUBx",
  "key3": "idweCa5UZomS2hV3xdXi56yeuDWSxw52U4eUDKWvDqzLXNLTick1RgQ8pXSowdYbjDCtxLkfXjFCJSJTnjt16pp",
  "key4": "2cJzx6gWW7WkmveN2pn8pb2FGMXRmpGCXmgk5tXkcmZEhHRbGbLGEaMYtGQXtHW39qNSQdC3CwQtLaptcRkYcZrb",
  "key5": "4nYWdBRLrwNwWXfe4g58vB3RkR26wNv5jTegT9uTBZLJTpj9Q2fnkbtLH16UQDtRZdZAh7fMCDjcok3mQ6Jk1yZt",
  "key6": "o3Qmab7Cxee5J423f9sPBCLo8M392nb7tkKGsXytAQXbeVadtDm55NhXGSYEsRQXrf9LdxihCrBBFmDE5Y3sucq",
  "key7": "3GHoUAesWANWkSA7fKSXzhr2vCCGdabnYuHK4EUeUeGmdKtNrpV9HCT8tC9zyFHJb63SBYexBAvKpQXa4v8zsjT2",
  "key8": "poH28ZkS322eEFvRLFJM1nRgEbqiW7Ne1x5Y35J441RQCjMDHVBNcSFuo9Y4SLyuNAd5AomqhEb8pLfsXbXLTvt",
  "key9": "3kkUh1auvHHQns5enBqLSS6juxi8zzxz2eC2yQpedgnB68b1gK5zgF5QnrQ1uxCcppENFjGt42CLPy9QPnsaWvmX",
  "key10": "4JYSPcC8ygzHvsyioo3DLzjjxZFWkXyAxSeB38D766RB6K6xm421oPGM41P4kKjqRDQuWte7FffTVjUErfKGPHHU",
  "key11": "PWutjsPuAxK1wYnTtPAkSHaabbiCbwEunfosFwurNQ68M1tyWU8jV2LJVkxjjqxWtXrNNG3coGM4k317Hu6pdPF",
  "key12": "HpBbDBd8d2ZyE4mmWtVKCXdBtFuEEvnrZVs6ZbLCgyXzQ5RorWtyiRsLb3bDhY6bozPs7QH8GVgYn7ZtNTDDzyr",
  "key13": "kHJD85CVKGHrZkqZLJDyvBEYZd5Z3EhBWahv6EeyGHsniBWiWGrktDJnfyTKDZwQusggEhNZcdpoCLsw2c2WdzS",
  "key14": "5xYq8uyRbkiiyZ2c3sTKibprVEK58Hkkf3A8XPjK59zEFr4oZpkmneco71GYAtk7TYMr8t6eK3Xjq31p8EsrQJgH",
  "key15": "4y1r8jX1CCAcbaHj96UE1dMufusVPdNw7NcE3Z2QGYDv5TAnUfJPZBEPLuvkzk5we231o6p3RWdyXh4HwJnHG3m1",
  "key16": "3nK2SgfDKD2zmJiqVqK3bJupHRDN2HuDQLnh5vAmKMfa4ZrrDGsynFyDu8J9maPkQwvP9W1ubM1jukCGMS7fuRqT",
  "key17": "YVjWt2AguYBuJ4NKFHLeVCczRC2TTNuQgPcK1zwTbjuQm3SsEi6LWRapfSbsASfxux4WRFgppG9fMRqE5AMTQm1",
  "key18": "2DhsYzEoK16JMnS9HwotNDHoX2HY1DPn3Z9Z7hCwqb67ZPA7XWthGVBQjje2UczguPPkPBAJtkvefrBMSjxWxaKm",
  "key19": "2XRhkMa1HVDEtyScWLXzuwCbP5gBNamTYgpdbXSVZRQ1mAwKJpj5WkLXaQgoUECJrBe6muvy3RBdzSNRRL33Nrww",
  "key20": "48FXBMhvigf1yBH1oLBu6xb84e9Bh4g5WJE7acR2oABQrqDngzu58iyvtuTwLGhFgyWGobWbgxDnhtWKfBk2VgQE",
  "key21": "5NLpsnSdqMGFqpbDWLCAaXj3A4RCwFsQkq2BULNKHWaSA5LecCodHkf6F8QFWEsJXhn9GRpnSA3mWnge6WZYbsto",
  "key22": "2AsoJc5Nqof1zT3CDzrmxk9LEfruKwVZCyCCA99C729x6B8fVyxdPjXpi9xPai721Y2iTxKecKd88Xdh2SRw1RN9",
  "key23": "o3cJn2VdMDvptBjunU3VSBu72mYr5sLP3SaZYsfzvj2qxmhG1e8XNuhNR37u4yhEDVPdH1kiiJMi46uieMhhp4k",
  "key24": "5QNqzMzaRD6hSnu3ecT2LRBYvhnZZyyJuugg5xc6tNivSdkogckrtjWJ3o5r7Td9gDEYiRMF55veu8WXVki6Bm5f",
  "key25": "4dPbVAczpYVs1NJgY43RZhrvt1S4U7XQ2iKS51eoERvccbvSopXyzx3nTtD2BYN9FdTrsi9xg6PUrcPF7Pm28zSk",
  "key26": "kG2R3MEaUpn4pg5tkxeidocUWp4yQxBiP5pzjHjSXgs6wqm9R6p6TtCeM5XwekAKaNJCmUAV8PEkDVwpg9XmbJZ",
  "key27": "32RF6XjgW7Bi7XTXRPDhLQxSUAkerXkrh5LruybPMTJomatKdQTsr4Vg9EGCZt3ZKaDsCkjaErCkXEnvL8o7BkDx",
  "key28": "5Jyx2Y8zCJTGJ4Wu7Y9EHiFWwFCbKkxr5JecjizKhrZqRHGf4DLjzpTDgDg3DZcwYo6N2YznFWvwZMG6DPEeci8B",
  "key29": "3XA3u11AkzCbpCoWyTG7aftLzwV94P73hDLLCkWe8ECP2FhMjMTpxfkSHCEPaMaJBmCMjFtDXCD1C1zv9KnCN5zv",
  "key30": "5zPuyXfGxWM3tAMsehaeUCKGKg6twLaF3XaEC7fhra3V7gSzEx1kHf2KR93q4zfW4LhuaJEFdpNTgLZKRdUjeGE9",
  "key31": "36Q6FraZ2LYfg5J24hQhzM6UcrMHukwRH2bP7hiLqSdbdhXJUv1uKK4xsCfoxnUMfRpbtSmsfSxdDN8MLF9QWptA",
  "key32": "aL7nGge5KKrtu1wzyAvh5mobZPYZ7DD5nDJPdaCYen3VnMvdRo1a84RwHJBYUdB8mQQ8C43auNAtsCtoRxV4oxo",
  "key33": "3MtjynszARKXsyhauRGCjUX3Za7gQD8diwdJvpD8yECExPU1hYPuDSH5CCgqpnDdYQjmLSm5jsgyqs23Wsk51qHj",
  "key34": "3QUxyXVvkZgnVBNHU6ToWDC5q6YArcMyM96HpLAkNtAYEn2QujAScPJ42TFmn4KWjaaRTBiLagg2aYZzGNS6Hg3Q",
  "key35": "3dr35pxjiUFAFCRncTCz8hdCrQRJZSrEcqd2nQmZML9vHomiBaBXquQR6Jfuqnquw9C3tBjVJj9GeAFhARUFRWQn"
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
