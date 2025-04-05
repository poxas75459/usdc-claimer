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
    "21BHAVT9KiGifJAW58VYGC4DWHnQiQcVPaPZ8MHAikCotwGjBLUftDWaGRF4T7rjXci1zB9xFUziLfQAERGcw8EZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r8eXuXXBiL5fj8HGZEacsqrrMxXULvGJ9YQryeceEwgLw8S5hCCHt7iyavZraDDkK6wuzaity3xdYJ42J3REggv",
  "key1": "hbXRBNF86gLzEo5n5DfvuvfA82PT7AM1n1KSdczqd7Ld5QMEayi2yZ65ZsAnxW8v47HGt2ASMz481vkVBaD2iLR",
  "key2": "YMuRp2KTbgsLRiDTN2jD7nLzYZ3Z941jZCffhPPShn2aBWX21prVBdVHFgdNNWUhphKVfx5WsvFukTTVYNHU6z2",
  "key3": "33PGS6kTR2uFJmYDZer8u5hzqPZBvd1bkv5hvoR8aMoYyYKvdahrSGm99fKWZdifJBrZQxthLJ7EgEoXDceYoYgC",
  "key4": "2bMah2aViwCVgfhgrGkpyyDYxrLjqAnBSzKiUHFYETz7FCKk7s9zYsZoBCS8cbVr4JbHGydWrMutU5i2MYMDXP5L",
  "key5": "fzYZcr14t4RDsVyazAP5F9mybqA158tnGsW22wKw9mcD5jpCxYTpPxCdiC7UYKqbgLyNxdZdWLv1JxgMRS3usfA",
  "key6": "5cfiJd2S8xxhf4T2qKV9mJCpEFqfRutP8qAMaYdmXvawswM4gyHdCyB4ZfC5BAF3n2tiPJZy9ZXDbPk5EZNLSjTN",
  "key7": "KLf9VxwiKJehGgrha1abUT3Qd1nMzdXXqyotEVuvEJeSfigXX16o9cMSgPyB1DK2in99gdwiVsj8veCXax4nJof",
  "key8": "2kpiyMR5DasRMFxNTD7Y2N7dXTbSnf1kEtpMB8ommYmZndE3rNXtKr6DEQstHXFCANumDgsq4MVS7pXiy6DmZt3g",
  "key9": "3fonU4wtnWgcUbExUCn8bsoHRNALj37zTLBnfjVqcZWJMdQgUrq2tCGtMt9jXXaK8fp75AHPBJz4hYE9mLnLru38",
  "key10": "5uoXvZsXsf6uTysy6Y5oRo8SHsg2TRieiDJKBi28CkzM8HivcJHnWycDZr3LYyHyXsH6FmCeJCBh1BEPcucy3Qur",
  "key11": "5rZAREiFfE15j6o81ETrXBs3G8Un9DQuwnCRLUUdAYCuiVGjJMSEqXNJsJco1UxjRfTubqQHookXgPBxZU54CgV5",
  "key12": "ht9CLyCyTXZAqUW5GcJWSqUKS9bmurtjKC3CW2chTUq11N4Cqg8V1o7tSrRpo96utTu2gtJZpUgSuMXhodeKvqt",
  "key13": "4xu5SBFv6LMQVJauqyxsMrPVewwtporW9f8vfio3kyUEWqX8B8q8esXwbyxVAnPpPeTehyU1shny1VBrx5SqQ4Tq",
  "key14": "2Xr1kpP6Q5Y4CUkChjQ1Y6tnfXMnk9MZWhJTMo8JCLXwsDbmaZb5uC3SeM3NJnjPXVLykt2zz2LGyxs1vNVgvJZt",
  "key15": "4HGc4L4E5Uz35DWE7FDa1Jvs54vcpX7FS1whRWq6FkbF9qMhYuejVskTYG3DPrd1zHNFiyA6T9KhwxiFbyewpJue",
  "key16": "4n6GyFLykPdrXRvPErwtrzEfSpHUV6DTy3u9ZgmwE9McQYZ9DBXabNuV5CzZCM6VJQ6vCZQ6qjJWucTCHFWcHfeg",
  "key17": "y6NHULB24kdZkerAGbrhzdpjedg9Nb8mZuVGJZUaRgDvpSJo6aguWCWaAUN6N6fjVFFAYbFSDc5rdoMoXeR9zax",
  "key18": "R3dHy71A7fkGRiFT17aPC6LKezLLxzQErtJfA2haCQfjtrvpPqZS4Ebyv25jpmLJgsBhzjWnq32ErkSN8ARxf8B",
  "key19": "2KujtC3LTYdU7yeUW9wr14C14EmVzfZN4EhLTrZhEyH4qnzgVLE8kBFoaZuuqN9zx7GDsbUGA9Uf2Vq8JMyYQ3P7",
  "key20": "2RWMvS1TVn5mQAqA9YjVW8kcM2VQ8xtZ49v1vfWwzkXu4oATnYSuhczs3zNQCgDEuBMH8mu2BMXCU2XiufVPH6S4",
  "key21": "2JSB5pNrQ4qK4F87UiYt1GJRR4Dbytf2Bb6wBS3juCDzqCEYeSc6KykR5SM81k8soUy21wYHMzUVCV9ZppGVhtxh",
  "key22": "3Vh8yFHanouJ5Q5H7s1GKMCjU8EC1U7XL8xV7zvwLeSKHwnbBek75H7ypufnQH1LaPWhhoQw27hV5spxvDckkuPi",
  "key23": "4FavEU7XVzbf9RCctfTqG2ST34tnPWJdKsDT7aeoY1gQtaM7zSxMKQBL2DZAQMegVhWzSwbrbu6Tyxa46B4nSjWW",
  "key24": "2cMjikMCF5tg64ramQg8QC4uPPGhyKgKMiJzW9zgVoJ7zA56D3bVkxvX6RDEmXCk3ru6eUvGYDKfiFmmNZUFEMdo",
  "key25": "48RCdc71GbJRzdawGLe6LNscUkixuig9zZ5kB8LWVQaU1oCn4JHRTUXsEo6EP9ySA7kfp4YiJjs6yp7ZKpzytcty",
  "key26": "5Qr95Nc5dn5BceM81eB8ZgFKTwh7M5ajhPX61Pu5UMUn6Q2SR53fdPHU7b5YNGmJUqfSUAYgFnEJswqyf6NcAH8t",
  "key27": "46CjcATqPe1krAXUjrkS8NxpyxcoSyf3NWFpN2W3PquHduCBnBtvp4Nhv6LFLWsugE3ai8R3a8n8ycv2GgknJPa1",
  "key28": "2VmeTWWJskiUgugkZSo2vASny1ApZFfoeX2djX55spmAPKNjFGhM9Z9bbCphhMXMSEvkEStSQECQmitoQLNwr7Zk",
  "key29": "4kxpiPscBRKNNX34R3rqAh4SreNoB4dwWcR9g7WEAzXLXPZxNCRrVsQ2miteFVW6nfyz6GZNcgwmV9iAYEaZRzhR",
  "key30": "52BLAL4ZFK1Xvf9VM7feNWSpb1mw4BmAianqmNdTnkCCTzKHzmA1bnQsBJ3G895ddGH7B8GKiPWL4Qe7BBhFZHyc",
  "key31": "54vsRYq4nG9UEGWBKSbdVdDPkWe27Bu42rHcpgnQM4vGy75HiSsP8QianFPzfgEzw2wYdCKAPwTd5kbzKdfFByJn",
  "key32": "5zFCJotEEKtyuxN4fYsBNMNPWCFsMy3cDnHxsdRQ3Qdh2HoT9bLgcdwJLSfmNDcEZ39qmmYr2Lp5wz5f2ZM6ocoz",
  "key33": "4wnB6Rzo8AxxXT5PaBz1qzpdabShbCK27J6ycqPMpKo1jAjuuDfSW7LkRAAxRnU1zo1Mjf2kqQTPiVpDFTh7xsHF",
  "key34": "2C9wkGdW3UxVAV88UuggAcZJtKhNyhhKrQqUBM39G2DVFrZF8z46g1zjSHK1ACrpXph7ijZC3FoNe27BoXCrLQ3D",
  "key35": "WgmgGnnm1uCVJ3y56sRSLJMG3WV7iS8FeVnmdxiWC7fFWrkUqcEcps2KLDX1VMHc6CYVFTiS8QPMkKf7EMvMFkD",
  "key36": "551gZRJoVpbCEdUBx5jobBTqPcQuB66W18NFquBVgCVpjtAEzvdJktEXVjc2WX7MvGbsKFkXZjB9jCDCDGEVPkjo",
  "key37": "4VBWTVgUWuCgBhugyux2xzcPdvqrbJfYdqJN3t1dFWA7huJgmoCi1GdUUW6r8PmctQFfrjL9AZ8gZFX3J2gVc3BN",
  "key38": "A21Tfxw14sBBaPnYdzDEzwvXtsd5CZueKTrjhNbpfELHN2QDEaRWb7XhFWoMDzkFHZzMiMAvzQrcGAiJcvnHZBt",
  "key39": "4bWPEuQyo84G5PARgq5o4oyuVELY5TuMhWjP2WdeiApRQALP5DswaJfyXkNvZUFmGMbqbV4FctUXqTk5UhwX3uYa",
  "key40": "4DjM6eDFcL9MHBgYh7zmWc7DJP5tGw4pRJwZmuDPvRAiuZ88XP8247231CKAJzuDQKWZj3of7GdUoX4FRoMAHmvG"
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
