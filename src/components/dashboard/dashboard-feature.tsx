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
    "JzXnu4TM9Ms1ZxbhSe3NjjFdQmrRmxcanSNbfez4qKEKyj7EaWGzfjQ6DgiPDmxsxoT6HWygdftAjf7RVnWWicY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eEi1iDRrbT33hUfe7pYtUMgFKEUz2ixS84yGEBwknqYrubggfXn1fuUwiKnpEt8L5Mm2ttw97RKfiE5h3GKx4ix",
  "key1": "5pzsLHn5zrT9g5V4pkAnWvhjJUBX4rhSqphQH81xg2Eod5UqYnAmfLFmvmHPjPEJq7WCxduKUBKzwejs5yRupXCj",
  "key2": "5zcBHqNhPjYU3eZ2yYiBVCqxgDaXxvUjM7KAtv1Ph2H92HMLxgW9LN1QA2RGJ8N3DxaH6M23mNV3FcYA8Nztu7bF",
  "key3": "oDPSxvK99yp5Q42vUVySo7j7EBRZtGZDHER6aJ6nDyGF2QhikxYyq5CXoEo2yy6SCLBh2fTSusL9VFsasqRfLpP",
  "key4": "AwbvRcBYGKFMwapyb9P5paKWpWwfHmks5fKkav35cvPUheGJEwignt5P8Bz2wB3e15ZyrN8fTXscqMncSMRsFXw",
  "key5": "5agSHPx4wHpciTNnhiKbid6wdvWyoA1CbWp2mCZNBvetSqKCLXHwRPiVnzeU3mvVvMqYv3MNe416z7qgxyteP1gr",
  "key6": "4tKtb3oPS2mhKQb2PbHqSjN3nwmbisb9YasYewhwVcVcjKo8CmkJC1quNBUa97kufSXSxQ8hJpMV4WxDsJK7kzDy",
  "key7": "5DpAvXi78au948HuvnkgCNYVyb9bs3LfMZL9siX9x2zQGKw8cPB7P1BApaFuzC8nK5qRJpZaB49KY3eStNYrLLxj",
  "key8": "Dy4hxjixrotoTdx9p9eRNJFPE8i4b64Rw4CTF4EBpJdRKws4H4Hopi6SxGobugoU5hwYXoGmE8jXd94UcEk4H1N",
  "key9": "3EY4HfddxWHe6sLc7mStoUN8ESdSLTb1CvSkZTzgULxVkgAqsudkVgvwfQHVggoEHZ4FVAzVK7TKXmR8pQ8B1x5z",
  "key10": "26HWQYQVyZC5oKtFTyML1Ap7Zhj6S64wnE41cWqc1j54UxDh3PCvb9LfqZAaMdwDsWJdfHbXTExoctBrrrWjMrEi",
  "key11": "2CNHa5Y6kW2NaHWmJHqngDVxcnMUMirFt9yJtpydpgMzVZMoMNMAQ9BVHjDykEgFGoHNFE3mCn7oWChYsEsE1uTH",
  "key12": "55LYiDZFFKMEU9F4Ub46hd6agExJkV6ymGzkFiLGxpKvVvXEG6BjMGg7kGPVjncWYQvMNA44cakeKRGt6Thu3D9B",
  "key13": "4jCXnBzXMW2uuUzzcRjWE2y7cT8FW7muDtobmLUs33WFvvs7ePt7XhsQaKEV9pkQuXmuUZ4ABxz8JQVQomXBLhRD",
  "key14": "41wtPWNRXNv5Aszk1VyqGtEDUEdhhBLeMHfJHqH6XWfWqpdjqKKykJ6ZvwLLPzQ1ydudbmrMNZRr8fD3KHi5YkKS",
  "key15": "5oZzssaWYtAeBL5QJkmFcgttSiWwu77oXquxFJA7rtRowFnSxZVhKFYug2KaPoRK5kUGEB1RBfAjDndrPfcLKzSL",
  "key16": "3zAbFRdohbWAouzL25hrB2gBEXwbnHt3qfMUekfSQeT18V1ApT7kMnMSAuhv3DkZAbbqEPJPuFnm2vaVKSyfq4Vj",
  "key17": "Pg5J3n5rYmZE1MTnjS41AX5DHEMWuDuDacgQtpHKuY7yaCTntLEuxheKGGAce1VEwFxkgvJknyjg9khet3EBmvC",
  "key18": "2jmeD8EjxziUmfbm55tqghciqZHDkBBvP5KAkuESsysN9e5u2Us3HhbS3JNkF7DJcQdm5Zw7WgEkpzR8y7xD3QuX",
  "key19": "2YRGWEDDLmaE3Ebxqt3Rt7Zg1ppizBBXQpjWGVW1YeH6vcY6dznwJgSLGqmQBdcaaREZyXgoyfQAFEumhs5yDYCB",
  "key20": "37bgygejeM8AiigZFHp3YQi4d6NhZ5tFMfirAFfjhVz9Ny888uAtffkS1RjLkE34W2TTU658YesZqJDAJtKknJCM",
  "key21": "5XY6E3jb2FMkiRNnEFAticNougymARcSDpqXVxYuLEQfvboag8zVNSjKeHKcE29i89Zz6Uv1FdAjatd3sgugwkns",
  "key22": "4gu7ySKDYSc2mgRukjuxg867NgBW7QGnfdX2R1zkw6WX5UiVTTHHfmWUpqutodew5d3KtRyej9ZRQAmPnqf2hH26",
  "key23": "YdJJsa6hgSEihMuMER6yTfx3mhqd4D6n1egLxrBPjEB1x8UqMAXFKWTiuxPPjAV4sQr8UKJ5BTs5NEQABUEvFuU",
  "key24": "51CdmhrQzt9aofSWd3hfUHNNVXcgcvXpMPoUt6tYubgvkRWjshrPaBARbGvVaZ2QYG9ozeDs8xiAqJa7p8RnhSAk",
  "key25": "5kCKyxxkFx2GzuPzpV1njSvFN2B1b2WfyQ2xD48YmBvaTc38BTx2ycpMx7neearVJXwKG8UmfG6dhPyEAFPH9VP1",
  "key26": "iWZTUCX6YZGcFjgSYjmCqMmQCfKegYangVD8kfgTegnJoFDgKPn52bTgFsQZ2whv9P8A7gSuF3XqKxWbo4swzy3",
  "key27": "4KQAaaKBP6yuuaU3hoJfNWiZLNCG1m3rBhetkLCwpBVm8rYMxQngHwTTarLyTFocqqu3bpdTrYsdk3Qn52xX54wW",
  "key28": "3wYJ3b2D5f7xwdppPTENiVMEdS9uLjPaVcqxpugg7jm93HXzoDyvzRRo1YTSZ4owcfLxTqgm2cK48EJ6qciMsodZ",
  "key29": "9HqSuDLzzYptoDnXuL5VCJVekowTGsUk6RTv8DjmWvNTVBXRMiPgvw1V2QuVE6kBGWo8i26Rj5UxFM5H9ZLjhyQ",
  "key30": "23rwDVEpB7kFmvrr52931s8bLL1wLXY6LXXYaL3zYE3yMZFxLV3YQdMSRsqxBx8RZLfTaicWPz7rTW4B1eQ59Ws2",
  "key31": "3qXMW4tg3kBNQVz4byYGaPG446mkQg1n7b7n2THjJzkFd8Lm1NfD1ts7egRCkNJahHd7ZpZYKHsMS5m6MUGQ9ttg",
  "key32": "2grUcgMWJjA8VQ2cW5ByvjUDbfZQhAR8PDygB61KiGDsTnsS6vTtrhHvWRrAxKjBSuMUPf9YHVP9dNxGznBfr6Vm",
  "key33": "38JBfGFHKgBvFSW4b6kUMA2WmyenPTXtpo6zYe3VZVTj8oFryVhtqxV5sdSddaSMzhapy6c6mWoCX3MsjLHL5EPs",
  "key34": "oSeFHKHQ69j6GoWZFy6aGyW6bcJJqooB2QsjvXbzPkXCEyu2czp7RGFAtmJa3KVosg39sfWcANWsfsar12DcPAt",
  "key35": "2bJzHg1NeMEFq9Eg2UDGcWK2T5AtidcKYvkaq1dL4KACDzhM3edY7ztrVS22QkD48nwfdbtzQVCKTAjd7Vb1KF1U",
  "key36": "3fm4kc7S4aubmVyQRrwczCexXHvAppPiaGYvqWowZZRe29ZxQisj14mK6Dx3z3pU9TtS7bhbeE9GrbhSnVeeW6kB",
  "key37": "3h6SjqBjYaMsVpT37sheHFgCacCVv5jyq4BiRfzmCgWwyrNqTemXmb8GM97b1hxprpvyz2Y1PfoBafRsRTiBM1FG",
  "key38": "3m8GrgcDiSTkMXoCmwFfxdx1mwxC8vD8AyU1yEbUjQRLk9T6BQ5yRaMHM6D8yr3cLz4qXAgo2z99PoEvGf59FKZT",
  "key39": "3N9wVoYvZ8KdkHSdk2eEwFPskoSGR1of39oaaiRJHFnaAeU16DFX8bEfxCRB4e7BhshBZrwZNHccYAJTS9s5pAAj",
  "key40": "4mRUA4X5BsvdJ5AMvDMi3VdquSEdqjjtbPz5TCrtqU7HaYCGBbzZTjjXGa4z5D7uujYd4WUQGYp4Qe2Hko7MYrSf",
  "key41": "5nawQS9b4nRKgLgGtPQMjMUYoJCV7brqCNAezh6Ar5YyZF4CWccGmdmyG1SD9wz51m65ZSJJghURuZiKYtgrvo2d",
  "key42": "3sTkSVScejAyYRjjChLpTwauVUVjePofJymqqcQHtZTbdmhm6pdAA8QM3d9zHJbXK52GvtWgGBFEcZSXK5KCEmoj",
  "key43": "5JcnrJSgou7A6geaVzT3VwBVxWgJMXv6zXM1NUFm98JDDsUGZ4QYs6E5naQ3BsKBY3NerMYvJKRmrnYK8BRqsigY",
  "key44": "4NnLeFV3W4cHRBSVhwStbM5FsS7bC2nun67GgEFGnETQZQmgXmx5iTcQenCw6iFqSpTyfw2jdqVi7vYQ41foSFxt",
  "key45": "5znHMGUixqgkR7AXMJcEAVddwheU2Ej575j5eDKDYByeJZftB3sTYbtn9gpFQs6E8HDgFLnWmyLF1QvZE8nT8uVg"
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
