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
    "54P2grAKKgbN86x1Emkvic7znuNgLRJ64Zkq7FthZdk48vsDkyjGe8RARN4qG14YSgucW89giV2EhKLCdMxtFrVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrLoktMmnj3yNJqQUGqL4XZX59wuCgZVaVconFeLfqAqyQTFWPLhunTRKMHGNqko7t37G8onP2yJa9cQtgrey7b",
  "key1": "3AK4RQrZpxy67CWRBEgQtGn8dMi9bpfZH3NWUPN5Fjc2W8WTkq84VLxkgBEbFXrkYSYUiJVrifb5R83oy9KpgE6X",
  "key2": "66yZM8gBFY6GdY7Y3dLXZmVZUwDvVhuD5SWnzheUaMptqMSqdJLS9tATAqMTikM1dVsqriHqSywtcm8xRRk2attt",
  "key3": "2CBvdFiEH6hyXHkdSXsEKTtKuyVC6i5ginEaG8YagbiDsqKmkFWN7Xuq6cKV5VuGXymvJE4JtXQsY3k58UZseksk",
  "key4": "64gyhLiFcVdurhVy8yDtjMt7zg2Ay4KA2PtXE7T8J6hCg339EKB8hFyaRNR8r9ffTuZEw2hJjgbE12DdVMcQW7L1",
  "key5": "34pMxCXwvNHueyqLX9JpBiAYukt1ayFNjmePSqJcSQzEAhq1xm5i7GQuUhpJLM745CiiHRvG8ro22Kq9UWMVxPw7",
  "key6": "3ahc1xhYbzsQ6CJwhWrVHuTYTnf8y7BKVK1xCywcBDVxT9sHEgKYYmtb4ro6yaDEh49LAbeihzk2iNd3ueKtjzfg",
  "key7": "2qzh2aRbxM48reNeV3cBxPdmCav5MtwwKpNc2DZtR6Gi9qzNTyJsfsZU9zUKtvz8w8er8cqYQT3avdmapFkBsVKn",
  "key8": "MNhw58ZWziPmPVJtq7nDtqBMVCRRxy3wvZHNJ634h1m9QM3ftyFDxMmA5nwhASy9GC541ZwgSvn58iizWjXjrgK",
  "key9": "5XspZLqT1p9Hw7U3wcLDNEKFbLWgdwHpKTuNjUooGc9xciSXa4wkkD2ucCmKWvmadbZFMpbrDhwiE4T4BME5a2rk",
  "key10": "2NsUcgMu6P18v2SQ3ufaEauq556YvgAEWCvZQ2ddt8eTdTaUdKR6ycaRqFYVLJ35s1Hiaud2k1d7BCPiVr8KTq2B",
  "key11": "3qpGyQBstcZyA85eyPNXANiwJjsTdPaSNRUqqoQ2VQHmbSqMSBQzrEokox6tUnVC7JPgK6up3NuRBUSpBCiXpB82",
  "key12": "5GFDex26cpZVxGF7FDTwBW7ETbxEPuC92f2UACJCJM24fvMUpvy86VqeFFCdJePiA5TcGYSGVyqdyfhgnn58ThWk",
  "key13": "38WTdZk4yqKjoEzEnshjWmEzDRxDTQ24hke5q7Jh7STWcZVjxa2u49x75J2wCEr8pUPxETVeZcWz1BzDmMdVRybm",
  "key14": "SC4Np1axUdNtj3SR7bMKoWZ9uYBU33f4dXy5G2vCxQKVwVSymF4ZFvhJPEDL29U31BHLBsu9ELny3hkn6PRxLQJ",
  "key15": "5rcGnrmrpEPCTmYTd1v8wv2XSSn86mhwu3krnysUPw4ESdDeksrEnTf8karEVjDrontKTxo8qhphBZvw4zbaWi8a",
  "key16": "A941ajrJB1T62eLirAx75NEuuGPx4HcuD6hPn4WX9ZdZ7TCSsZdTeVwFT6om5ZBSsAE5tzsxFM9CUHnBphjmCj7",
  "key17": "4qbX2tM3dCzGfE6W7FhopukUBbgds6WbJBnpAgbeGSLF9vra3jhex667htA21Boy66nbKyzTvSFz61FSHpJ8bRwS",
  "key18": "phygsXRpKbaUuD5jQp9jJhnMwXSNtTYcBUyHUdwHzvV5AsrW2D9YCwKFyVWDvjctFMyao2p2eb3EQKTFJ8W6Bkk",
  "key19": "j3cfMM2tjY94wifX6ntotDg25z4uAPe9fz96dZwku14EJc9jYhMRDx5mpNSZZRHqV2dnaCyGbKJUKJLb5AjXnNt",
  "key20": "63di3hq94zykHgRNem3Mg4wVAharV4aVpqDsAHgiZTg6QpEMdyf8Ne8Y9hsyq7UtL37TXdgkn2XTw3WyzMNmDXwb",
  "key21": "26T8VLB8ghSG2brzdMxuxmfUteFMKftUzq9SMMvhk8zhnZ4H8jPkQTNtsak4BR25diKyrtSfHMDQEaiPUEEjLNTa",
  "key22": "4RW9fVfufCFKvxk96mNDuUhQUykvauma6xEo62hMgRQ15v4wEZp1yCV2G8apGpk43YQstdDd6f1tJn1nDNyHQSND",
  "key23": "GJYG1wfCnzpszzR5rR4kCAiiJgx7kLwP9zjuWjXad6Bv5VSJYCVSsDaiETmUPQmauJvygTNyzwW2zygdmo226Be",
  "key24": "4z1PcW7qYEdPUXZqEUbmYqJ66NZZvNQi8noSt6Ft6s8FFejGads2KuAeTtqeWWfx8Hfqnv68CX8TuEJHpx7ponAN",
  "key25": "424a7v8GzakoCcj2UFzjcpSQJ4nuAkSPdtuEDGQkUo8RmKZzoGrhZqURZhBm36HrFPugjrwURugbFcRpb33w68Bx",
  "key26": "4hU3ESuZNCZMyDd5Js2K3p8acHMPDtxGKhMc66jU3s8JsYzo9GB8qwhCrn9wUQdzqNiK91JVqS7UxFRezauGAmJj",
  "key27": "Et1JjKwJ3b3MS2vzxy7nfvE4FPzpXSYKUjGVcVxfyXj54fZZXnfR3LWsGvaVpxE5rEWPvoYBMDV7HBmuHTSBfUF",
  "key28": "3JGpwYhqufkF8L1QEJomQ2ykkuj7vpYhu3J2Vw7Amc3EDnTAbJytCegtFqsiniMGatmvAUuSK6W9FwUt2WUWAnhd",
  "key29": "5ntcWyFFi3EwCoBBymdexgCVc1CzBeC2bhvwdGTKzq1GRn1CiqBE9ppGkTSVx1w4acEQ1uEEx3W8EemhoYn3Kqjd",
  "key30": "23dBPRS8RKm2KZiDk3PUzHrxhEPKtAfNdey32CgM8r6iqQLpdRbxhRAmV8gvfDVT48aJvh1qQFWys9oexmb9LXTJ",
  "key31": "2gZM44LNTtTNg2mWoLz5QnEDsoZ6tsqeimrwokjQQ7SbcJeuAciYeK9FLMW7BiQbbaDshK1jRsBsY994ySooRcsE",
  "key32": "aT95MXUmZbus9PBBbg25Uvggx1RPPFdqzZiuFre8NVJmFXipMoyAb161WcQY7QYeHSfYbjAQqbZXyEGbmLLDKAm",
  "key33": "2a1tPVsj1Smwb7xebEffJjYGCEAxirqbQtAWdabZEMRr5XjqqhdJqHkmtect9VNQ8BNF8atUd7hBzW2v6SFde3f2",
  "key34": "26Lu98pTnoE8H33ZTyk8RETU7qiWG6Hv5cks7enJ77hxiZ4QvYKiZRNpFc4KKCNAoUVBQsGd4JNajkXX56i4pnS9",
  "key35": "2p3uv1JNHXXKtbN6PFMXDBiSeePDSpsa6wCArFYYsYoPirv41ocr3yxRRoAv76NPgYjRfuymbstGi9egTjDD2zsD"
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
