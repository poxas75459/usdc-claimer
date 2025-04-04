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
    "2RWoogsYZE7SCJYxPvhMCho8mMVnLjEqiD4TBzngX3hWTgCCWQUftmw9vTmRBK4poevaQ9nCL2W4k5YUDi715tNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kzv6ejWsUYjNo9q6cQZN9qFnXi2CfmE8DeyDuLrsgawB49LNGrduxBaq89vHaRxgxhtbeM5aqfY4r9TEiKgREj2",
  "key1": "XkXpWHGmSMKDptTfUUBKd8WjkrfWBe7QmJg9izBS33sMJWEPuLYCGJbKRbusqrfyqtGfjubYp3XjJ4pwqni1oZJ",
  "key2": "hpmS9cJCq8LgVv4YfPzaFbuJn8Uund5W8t1Bw4ZSfVXCULNV9x31wPDew9FbPNzW6kTWgB6i2G37DPC7WD96GdB",
  "key3": "2mAMhGSEiNbZDvqPkD9dZRS78NwYCYJ75BqwpjAJMb4YJZ4Zez8ZhV78LS2S3v8YMTgwawp6mozCf6nKGna97dp1",
  "key4": "2SzorvGCMh9Wi3ecaKW4PHQmMLV1QesTdxbxkbYuocFUXwL9XKYUdcxjKEd4awxTWGR7qKhXnTyRJchm3EbdSf6X",
  "key5": "k7B5YBvakm7VC8rSLyPDLt6EnDWAZZsDpvs8vq5okbaVkGPWi6HwXQKiuqQJLqC1Dqnh2Rvq7k8CD1mhdauhmwU",
  "key6": "5Zmvrp7iMDe989XaqVS55wxhkcfpaZshig9zfszNkLHneZwmSUFf8qbZhJBWhFqksKcJRxXBYwjS3hUkxV819H5A",
  "key7": "51Akt5ENjd1f8sHEyxQh8jtnxj6uakgtqDx7axoRUyfmKpVefZ2maGAir6xSngk1h8zZmkfLRPsRHSeBcMPxGEkx",
  "key8": "4wwNnvZPQGrPd3S2hpY4vwDe7SzMKUyxH3jQTVK2VGpjkUJUnLrqsQSkb4FxraieqkNqERqxszbPGBXUSRaFVR6w",
  "key9": "57aCnyqaVwZqqFWaFo4cQ8Qg4jjifb9R9mqmRbUYk8QuhAosJRZE3mzUBLYgFZ9PEfhBRqxMfrYjkVtty6KDWBY1",
  "key10": "4zun93zHjtaceoFyT27WnAQBFjpCSxU3AJZ875xBdNspXFcCgAjbxn2Bo4PCV2WNtxteu1XWJqaVzcyvm44hTgBe",
  "key11": "2GvmXiAj8kFJ2kYHLj7DbkR3SGPxRU8Kb2d17c2R56feBsMw3Np7cvDse1BLz5PewsMadxs3Y3VszbddK3vMAz3y",
  "key12": "5Atbb9pRQKbVXgQuL6SKa4DqC2rhPd98Df5TL9mf81dLeEpRD9TC2SxiZwdwKntLK4vxVd2cTmaXMLeYJWeqmWuo",
  "key13": "3Ajey6QfLg8vFKq4n4m9PdJG5x3MVWnQsQXqtxFJMSAWQGqpaK9LVmXKZdnFcx2h3Ueh5WbPPKXuRu7jVgqcsC55",
  "key14": "YYot2K7TQXCcJ4bPjorVXCzgcxbxBPTWAy3d8XuyBZNZsb24g3sz8rxWjzM4FCJgdSDtkf9UKkaXF8FdvEAmQYR",
  "key15": "638HJNJYAokptAxdNfD4uaNHkekp2YSKUn9ceLLySQuaVP2hYRochGWHrJiLXLD8ZwmzcpYr1n3zKvJDpc6ikNRu",
  "key16": "4xiLpZSzyGowGBaX9QNQzSds5KiuzDdtnTnzhbjGTFiKgSAWUUz1yn4HUYnt9KxficRMtZFJdmy2JeWdbNqxTh8T",
  "key17": "5QNceKCfr8MRbXA4LJCnH9zsPmccG9WWC9JafQjofTpmcEDZQgEuFDYdRZHHJdW7WD3nQJQtZUBDWMu6zsh4wvC2",
  "key18": "3PN1stdysEhASEsxGNniFVsu7Ehejd3cMQDcHSEKHmBsizvTeSH4DEtQxYmxWWaHEvpZBaRwT9BcCefxTUNopW49",
  "key19": "5ZomG37Xc3zr5fw5AJuVoek6ZwVfvUw9P2SiuM6j1rNfhhik4zm2J7N25EhBBisN2QfonfUub7i9cJidZsEsj115",
  "key20": "tyCcCLVMbGtDzkQvsgiYp1D9yDkKaWszvFahgCsduGmRETUineGUsP93TVbJPdq16vvW23yzShtxZreiRtJXXwN",
  "key21": "5jPsS2qJQmDJ4x96rxruHMrYTCrj7sCQiQNM3xsobpnQxcjDPKxF6m4rmTWm5C8mi86DX6U9zmwD76L4cYhtEnQy",
  "key22": "2KAYR9TuDngbgkmpKCVdUG7rJYeqRDJtaJTP6GSE7poSxSBdfqZf7NXaZXS3wD5Vn8ksaDQKYoT8vDXGk5z1ck58",
  "key23": "2sYG8XP7YV2iGxhgtbFjFWBujJ7v3zPs5ANFG6fq7RuLweNFMqd4eLV1k2vxaKGWfUFaBeMQZfiRTPsZJqe1jLEJ",
  "key24": "BNGLPpsJCNwguJ6qZoA4qusnLtnVSPBp4KTRVxFpPRW9FBSN9eXbvrb9Ab1cprwyeLZABvx4AtLVVJq2EMUhFrx",
  "key25": "2iomUcTZdBPHSKNDKdYQpAmVCusvCC6FgAxEoHhqEbuk9s7wnCoC9NGDtF1c7HYncdt7WRJGHstLsArjk739Ahay",
  "key26": "BnYhgLUjoh7W8VQ6e9vgHbLT7j2kWBWv5wx53xP1pnp1v6svGeKx8wQgBVndXmJZMJq87Qc9yLArvFKDbQcTzfw",
  "key27": "3V641HVDN94hdtFeUUN7JfzJCHBihgsmrHxQvpA2JutmCN7MtaC267WDFHnUngoJNf4HTHt8J6D1ihJbsQHh9LL4",
  "key28": "4zHixoG2uYm9dE6Fm96AqXzeWswc6qZEhx44Pyf9qdbqCGApdvyrgYti1unizbipB1X9MVDTF2MkgqLjo6XDvJfz",
  "key29": "qv5Aj81k6MgW3XvjZar3g531D3vbRhFr1VmKWznRXHnxeF7NJPfBsBaWuwSVNcV41SacvwgpdYzpz6h2SBA5oa7",
  "key30": "3PUhHZnhFQXTqommG3BgFSJ5d5ABy31X9T3yYk6xNZwofpYUbQZFKxLrRFpaAncVpw2kHBMUDVHjN3SdxMwDaNL9",
  "key31": "5Cj1Ge1PtDcY3qRQUfyXFDh7ty2GaB85JEbmCwjM6sQuvQ7cmMLcns8nSHGwKSEgh9bvUvtmZKTHKEbLLu6mFAK5",
  "key32": "ruhQo4NG8acHsEm1TvZExsgdbJsDDLGjkXHZMTz622MBrs7QexLNgUtBdyCBSZQzd8FwnC8mAVbnCfQh6f1XhRo",
  "key33": "2eXfHZr3v7NwMxGFZt5fPSt93HxqfPGR2f5ZTqgms2VQqx74Fyn9QDgKjZz2vLAir6thZjKBD2iDposZss1xUrhm",
  "key34": "4hRWUdiJxQEfSxFQsrAmw3D6ozcPrLrwKvcmnUev3AM6wbVCNnqinu6fMJcbQpJ4kvaPvD8zdRs9PFDE5ugKyvZs",
  "key35": "EvmRansMVWbwYq7D37KBGUmebXu17zFB9wHFRvamxwHsuo8bYTWFMcdhf5aYBTsWYUN44U7s2Uy5gnytK6dxGcF",
  "key36": "3wPvRanQ7UxProtBqZYJJQLmwDokx9yUh3X7JCGNjkXUYex6yT2QUvnmciCpgWqqFdYtUwJKBL8qLZgG1612J3oF",
  "key37": "27uakd3pE7VuWGiRStCuQ5WJPDgh8EqEKwrXATqVFnR4fu5BnWz77F5DhNsiQEKhU2vRpN9Vsssgg7m2ZdMbgA52",
  "key38": "5v4P9hpYaN4xqPgtdFqNh5CBdfJq6iWvibLG6QazDgntDGkCLzLaPyrkdTfUST7YuMPH7xTsxBvcYNoBxu3hKU5T",
  "key39": "1NcRPvrp3cf7rMwKrP4hBoYr43QJNoAADKnkTENpKYPk2Sga6twdBscguhQtxMpzJSDd1KqU5son2ij44kSVvk4",
  "key40": "5GfBUTotALss229eVcAGZLZSMvuRMiCi6HSmxH8W8acuquvEg47j1r1KpYhNx4UmNwX5tqnquSKt8KeZ79AN9Lv3",
  "key41": "48qbgLPL5uMVouQkxz5TVHtLt5TifA4NjQjtUKh37YYaCqsAr2zDcZAm2r7AmV3FvB8tb5SM9QZZchu6eb6e6LDE",
  "key42": "5gtUHzVLzJ7XCMtRsxv6J42hyvZR6WdHa6NkmbpvQThTkbrumc7bqHjkuzm3TiCqhgiKrQyg1zedUzeLvuGxEuFS",
  "key43": "5bULAXaciwpb2XkDizKpHsUqRRHdX2woe6TdAut9XLftteHTijqS2Mq3d7NjGcrszWcLrLyGbNEYyTMEWfL7ebja",
  "key44": "5KfgPWgaUKYX2spkH86c8iFDNG8fpaAHjah5HTna5LMCHfy8LbGBq9DGXVu22fvehQ2CGxbGQwgaTbaqDbbDJofk",
  "key45": "3jxoiavCUhxfXGDoFVhJPpcWUcYcT4Em5mDc1f34rueMNQB2z7goqWYV4iuZ2WPPESDC1QTFeXLGJZyCxEWzVarf",
  "key46": "XpyGzbpDuMnXDR5pNrkLXEntAhUJ4HYA6J7kNvd77cFkwBcZgXpyJS1YoyQCaqdqYKpnHUbggHC8egoSBx9Na7z",
  "key47": "2vwVbMtpsqazmHPvjZfZhzbeFurcwyUk4UonM5SogmEuheY1srCP39gd1yCfHWvMwopGHooskxRtfVwH75ew5qNp",
  "key48": "4kij5fzRu9pKaEpzjdWwrKDfkiEh8dZdySozdJyFQWgJXQqoYuxQyCRk7uLQSsqrYEFoYLnDXagf5uPHM1SCSPjw"
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
