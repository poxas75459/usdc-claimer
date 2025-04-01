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
    "5xKNyBsYYvz6xi3FNuPSiVrEQfzWbVSxCLfJbmUVyAnuiwRhjTfSWuVaAbstUyjCiPwsr3K8tdkWBGErgtN4Jjsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWyyyekLYEbNtcuLCGwfykR453YNnmWLWBQD5Zgd6KvoJEmUcuKVhNFUutVCNhcTum65xxizvCLmoLz7jgfnTpf",
  "key1": "3LjaijWKhcK8iYjctGHy84LpzGVsA2jyJ4L6pHVxkGXKHes8Xe5bV3hid8b2sUygLTbsV7HwwnsdBKa493vC9L5i",
  "key2": "3Pqautx6dx9pyECb4C2WdqtqDyuQxmuCCrLLNaWxTnXrHtHBLzD62kbroVWBYaLhUmcHc1M7KRhgL2m8mqF2atyN",
  "key3": "2iQuVeD8suCPUArpPkJJRtNd2Nye4YCBvRy1QmKK9wzCgRVpDiQKmEJxWCvJeBBA4sh7NfKPPdLPWfR3uWPCa9PP",
  "key4": "447CkDqsXScC19CrbdAnVUtDuFHjTdiB5HR3SBRiHwErV9vc26dYrB4RPcjF4kdQfGAqgPPUP32WAUsHWo9UsumA",
  "key5": "4E5RUSwYGCFbtFdYZmvhcEtZo6RKN7Gu2JB8At4yhGeNQv8Hxmtr4MeoFATGP5KkHQMNu8VzWaTawuLoCKUu9YZ7",
  "key6": "5Mt82HC1ZNAZrHquhdxFuybmSpNGiGwVGXgGfjMYvk4hozPSD4EqLs3ELSZQ2wyP6xrNFGG4fC5QHymC8tjnBU86",
  "key7": "3bzUHrDWdCCqMAPJmCWrZq4xWxgPA5pijRfmByF3wWbhig2xtjq1WwQpMaZsKYh62jCyab5sdAHbzWeN5DH4ygCi",
  "key8": "3qPww3jKe6JneB3NdCbWCU5mGzvP8Lx1UhcHUjLHSFnRKAgb38JLzj77Hb1paiDWR1SQtH5fnacKcxDHbY1v3ntr",
  "key9": "5A3ohwx85ofPA2FCvTordrWbuGecLTda8kV1EW37vveKyBy6P5aXmYTE5sgXtKpG2wfKfq3JYc4Yh7vMiXRrYB6q",
  "key10": "33SE44mutaUW4BaTngg4gURNQUccfrzSzgpH3SFxFdXwrimnhrSRiXFFvp4s5m9znfvnx6USaLcbMsknrU5aYoVa",
  "key11": "3DgN3N1X9CA2Eptq49MmQbjyARdUJgZ1nSFVyvXdvToGqBBochNSHyP1gneJ9woXgu28qbSqwDKwL99Kmv8sdZnZ",
  "key12": "4vPwYwpCRr1AdZzfEEdRSo7V4HjpxgQ225jzV4jjvV3dwcaR7sM7yqF16hLvctgczfAE4AsBpqr8dxihBoPvpGa5",
  "key13": "2cLsfHq5M5dDzgmoWQbB94qsSoeU8kmuif7qk5jgkMZKfh4C6wNXoT2PYrT5tpucAYxASyEi4DFDfzv6txjCHX4R",
  "key14": "5Joh32oEMd91jPowvWnBQL7nHHvb8FmLMQU2SYTk3a9u8E9r1QHbnPtGRG38YoC77znMMvxFrNvajfeq1vqFrQah",
  "key15": "2mdTXiFWgA9NnZFyMmhHax8PBRKVVCvgePDauQrifMxhAEjszHw1R6r3E3TUemdNAUJWAWVFCz5uXLsUDwkPQsc2",
  "key16": "56yeCwd4mhaJUmDg3mMeSsHNZA6BxTSq785JgNKYWokZpWD2zF8DY46uMnkJtrPcMhMbTCyjMo3ct3an5V3Jeq5i",
  "key17": "54piDcoHKxi4ztVKgEKw8WYfHs4W1EDwfeqXwkddxo3Rhi9SuJqWa93ax12t6sZmutRXjvozzQwnPZUN7D3H3RV",
  "key18": "5pXtCFVWeeCF9872kheSYmRLXUgCUz9RKZ5UsVUy5VXtUCTxr3BK5kV9n35VXwcRFYeTXbeYZ4gXmC1Y2w7VZpPZ",
  "key19": "3JneRwCgk5aDhQfYvF66e9BtGfA1CjsacF53ebDWEyJuo1Akx2aYd7jzKEBdFfufwMjEnsW72yrvhz1y3uArLTS2",
  "key20": "5UuPhFHxQWPU4XSg2HrmfEgk6a13H4EKr89nxxtu7vu4vdDhuqyZSEbgZ2Jy74ZLNb35K3behNhHM1Q3fSBEmMde",
  "key21": "24qoDGLzv9SMvqzrAG1QMsRTudzGHsNvq9tRCeAkKRX7FdQFkz2i1X8kGdg2XVg5bMHuZuyk7gSnBDewkvWhVB6s",
  "key22": "n5YBdk7DDCJGCQ4VBNAiWyoSe8G4GAyvVy2GHARhP3jt2aQm1BvLyjB9Ry8z3RTUTdHai4BVyUstoAmBHKQptHC",
  "key23": "3QWp3SyShtPvCSN9DXzthCdynUFbCsAxQQCgeNFbXsgjXY9CqUd5nhFfWWBDm2Mo8mhEWCkgvyJsfSm7p55hA3Mp",
  "key24": "BvyWMPzyRqYdSGCvASVgTy3GAukBokZpJAij42PXYq7Z5KtYCmyT1eBmjAGvAdugxLgsiTUdCpSneaCCk2U5zMH",
  "key25": "ezLYsTv5TBieFFHe7bHW7rph3AJHq28ZYyLC9ULC3hjbGRTaf4ipbpiddRW7mKuFUQYAPxEdgEctmQmeEDRMxbR",
  "key26": "5UhD7X6tQEdnuYofKDRjiLLqgBBB6yW24VBe37jUn3GH5EpBGD7ppzsFcyULcDBWephArZcCJ8V7qrduWa21HH1R",
  "key27": "CUysvLjiVhmJLhM5kL8MQpG6Nmw59yAs1muVe39dYDvAvbiVkpQge7ayDpzKhtQDLrqEnHMABk1rcpHCGL1BBiJ",
  "key28": "64mMakEuZ6YiKBJWt3F5fcfC5yjv5heTxVKUR2mTL1q8yabd6QWNBg2vLUpugmi2sAWkiHyUgq1rGrU1LL8jQ56j",
  "key29": "44SydkdRCd1Vyt1iAWUntbBkEoHLTkzSDsH5pmq1Fqva4FZyZds5qkJosY5fHFGRxxcEtJNDUApjpMCPQdbFpYjA",
  "key30": "HRGzju9H9q5VH8B2CrqFM5YtkfMTLNUFJBsCjD45stS1FHDRpDDYnb4FJmB1huZN48R7BDqo9z1RuvYbXGdFz7a",
  "key31": "3RK3N7uUqKzspZZs4uJEW896thw6cv9nqFc2gNZaU1Ys87Jyg4YkWrCg9uGHxBCKudKMXR4AqxEDfnP5xo7XTuai",
  "key32": "4LWQDweaW1GJGw6UZGQTEFdezMQJdPDHpXYthqZEV8AsExEG9C1fJCU4U5xpPjaZASN7HBoJrK932bjaGfsDDZcv",
  "key33": "3YXQdNKmDJeHLi3ghbenk1ADHSuFKJAbGCXtKDKjiwgFsxu8Z89MTauqtJTNCDY8pdENKGeFYmsQ96dVNmy7tucb",
  "key34": "3jePNqjQt24Rq4rx3wjKaq5Nd8jiog8uNan57RNCpytHiPgtqDCfBYaRggyvsRGf3paTWSxG1kMkkaZH2ZLfQ9vd",
  "key35": "ztER52zmm2Q6URcazHZnsfKitoLGh7QPCEDLkzPkkN13cbrkWUs8UwWpE1UbQXXTGqe3ZgpyWCcj3HDcnZ1CzFd",
  "key36": "35dFwuR6Yqqbc1f4AxLbpc6DiQYBJkDf3BTWGq6s8DTz1EPrb7WePj5GNVP8U4gen1cDcc5q6SKkSWGmXKtt9CT6",
  "key37": "3eFgWcKbJ5HhUCf417XhUEGSHsCABGZhP8d6Z3oHBxqZLg3dhmbn56DuSeF6XQiiVkFSeJdL9riDqZA39Cy5HPcG",
  "key38": "49p7vp1dk3MQqvP38rHTzL1anm64gZvdsvpyiemkr7t61iQTB3fVBdUnwhb27poLEooAapSf82P7kmNpo92cWc6U",
  "key39": "3QTHyCnY7NoYwnzxotvpBWqCHYZVcAaWhBpTR1t3M642XKVNukzHjtfNauVsrB8qjM6DDM6gWwgvq7cwus7PdhtK",
  "key40": "2TS7why3QCnE5e7U6MTHhiDDisaABAxvPuub7fQQ8k726iNe6rgja2DYh7nwpa2uW5x9juv12JddzBk7tp1vPgyK"
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
