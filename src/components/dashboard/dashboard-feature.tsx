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
    "4FSeLQcKPoscjoYak2uNtcxKjeVLPhXbS6JzMTU3DnUCo4sRyaFaZFBBrkSVtnALvPNjVpxF8Nzat1LCfdtzXKFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wMmji3FxP59hHhJ1DtSUKhbTt2mujv6VNYyVj5iqDoi7JoR5ujMLBZTHZnezWnJisvDaFWH3MowvSNvbFmWmJUa",
  "key1": "6MT7fCt1Em5bDKCw8wrk5YRvwkTYfnBKtPGhtJFYUjazuYt8StwmkSzwD1ZG5DiGsykA5jxnR3pSoYkxBsGtAXQ",
  "key2": "ofCahGhSCshxMYgGGcjGmNrZu2VSyHv1eEkj1XQ3W6NTtXAnCWpFtt2gzj6g5W2S5EhV4HCeQYVdawm7VybMr38",
  "key3": "4qHkiFAXcQ5mSmbv9hPVPSVnoegNkw4w9wPGYctYXzfB5Syqqor64GSgo37rPaEW8RqVGTi68SDEXRhqmgMk9mN8",
  "key4": "3wffYT84jPm59m3cShdyGr3UrsfLpKTdeyyxwGFraFuCzP4qa9eaGB7Zet8pCB59x5Tpov3qkhk16MDB863Bn8XA",
  "key5": "4vV5RpkzS9j68FSGuiTsRXwm7WTHpYMY1JxnQLrmGoGxqztJU4x4ZSyibkrQ8s2cGZyN6591m9B5jgccpgLBVpJt",
  "key6": "5c1KqaFpnJZ52b1Wy2rvPVUgfMnmAYafpjwyEqcySyWRDfwAZbpt99gsrRKdH6Nf7dmP3CwrV5vzf7Dmn4mGfG8z",
  "key7": "57KsLXDoRec58mUmWSTuNsp2mGdht4G2q3f1ieckeFSzyKQNNG48yUsFbzkPvUpWWNruekfCLgEhASA5GXpH1mKW",
  "key8": "3XR36cuFf9kM9hR7Jh6LuPAdeuqnjEUTYBfUzHFGA8nsFnrLDL4ErepGThrik6wRQU8xQPsgY49UgM1KBk2TtdnP",
  "key9": "2w61ygNivLc5bf6ZmxdtVfvs8STMWNf9Ybo5BxedRqu4MXcYRYbHgvw6ZsHGsK8v9kQx39j59svbhgNKafFgWfft",
  "key10": "3KrGt9XXYcgm2Gtj34fUgkMKTyhDYq3mwps2avLof2sfx7CiuySj4Mj7DS2TGXeqiss88FStFXe8X9XNq2wASfU5",
  "key11": "5cFSSTH8qWFN39kbVnGfdkNJwDAk78gH6HuFgWKgefPKaqcrdMutKxSvfkE4qZHpLZx1eidG1yjwQU2JYMDunoPJ",
  "key12": "4nw7bfZk5mMYimLB5DxdQfDRUAAAkb7kjdWTjKcZTtHiLENCrs9r8ezSqXDuwJzjj16NaW6XTsHqZZ1Ydd6QQNYS",
  "key13": "47AMhqS12nozW6LHzU8EggTdYaZfjYoEa3ZWSnNXjkRgVptTGeXxMJs6sUqsrsdajCte8efUxfGbHi9BmgovUjnp",
  "key14": "2GfK4tAhjcsJKsQ6tcCughBrkLriKTrJW2YtcUfjzcPHmBJAZbMFupt7REoqkH7XsDRLcY9BMY5p2eyx2EogZ2y4",
  "key15": "24YCZr42i1gYMGcfyHzsKVbA3whz325fQgcHjvBikKhHKjdSSBQcUPxDQFqcxyxnt8ARm18mGTHPAqj5s2Hi9JDt",
  "key16": "iSRksaNBuDDo8q6yW6PSRJrsnfsuqMj3p9bpuXk8qztSHa4tWbmAusU1SnEf3h8CnbGcgn5oWaVBSryyLFnBTuB",
  "key17": "2yF5JMQmkR4LYGPNZpULaT3QzvqmmyWqsoBvfA2kBvuSwQisDnTKDCSASPRLa6Ja7JjhGR8SPRDNtmaeUxt5QJmM",
  "key18": "3PP92yDyf45EeCmSudmv5KpX884oRpezGgUo4aWybWJPhzC618ymGbEuB8knF27S4LBNKtmJEeaXbduDUYsFLhFR",
  "key19": "bsp2VR3X9LwFVwP4TRmj3S9wf76Apr8DYsez3xBBHpwp2MdTEfJw7hS66ronzfFEZwgXnK9kyQwo4kRByVqfCS8",
  "key20": "4HeJ3bvJ62AGfYh3fHweMwx5qnKEZoVRT4AdUTrcTboQ4hupNoCg2va9mygKQ6kqxwPneW8EdohSp2Fv8rSPTTjA",
  "key21": "4Fv2udQmQBk9FmMcfFqiwMiQUXoaFiMXnzysuJcXo4cTjxbAwpop3dcZkwrrXPVAUECL4bTHUFm95NfxAqV34KPK",
  "key22": "47nwk8BzK9S3j8z2mFegtJnohe9V8HfmittGqCS3yGQReKnCe1eKKHFzutZugPSpohFuo4vTN1UfdgourJUbpwHV",
  "key23": "Q5vPjJ6LzinrtXVicUhymNXEajF85jcjgE1Ztes1Fxvu19x8qeaKAKYn5yYLUvKmyLomMaTGeMtCgTqMjPek92X",
  "key24": "61giXVudMiuxJCfF4TBaGadCZEn3fc2KiGw3TM6RekywG7uB5duYu3w62enurXu2GoZz8hoN5T8pcHrerVq36oAm",
  "key25": "wfQfWGAd8aErAtXh9v3kteQnhL6Mjp9C2pbKza71odCFxzssAifdZnxjj8Px9prSyxfPJY8ZFnMKqtyuTgb1NbB",
  "key26": "66bgbthvje8E6GG6cx1gH9NtJyhAG5rPYQyEkAbjSxWWr66ywH7emExE9MNhcrm3FdsTS3xCAavBkA3TAmeVuGVC",
  "key27": "32rxxPQB4XhZo4rN9yUCbM9gAH7XGAr1U2jANKbR7T45a1AZT5rR3j5uc2gJ4jWehoiiCXmjtpu1yif5xy1PRbw9",
  "key28": "2ox5nwx7YLpv8HhLy43rW4hv8u9xiMEUeb2KtaRLAPcVnZuwnzrwx5TY4kgVK7MVKkr9FVZvCr6XnxGrw7vs6bZi",
  "key29": "4bF6Cd8qEkym9roLySF1i1Qzm8bf1m9j3wbWMTrAkjemEG9itocZ91dPsmshCEDKPXSEL3EbSf7vhJc3kp2SbjcV",
  "key30": "4cPLpk7cMGQcLonXVMMw4uyGYbCho52WMkDsNPj3s8owKhnbziD2q86kQDcnGCUNeU7sg1pk64MjZW8eT7p8Yhbq",
  "key31": "3HumxyDrn8Nt6NUMabanUbqHrtYPYDGB4UvdcyAMA7zQVxfy8PeEvH8eJau7d1o2CFW5ZfuQFrt4kKyX6UR4i1Tc",
  "key32": "23SbZf6ceRDz4XBRYUDMrXShXje1nMzmUGJWeHrXoDwukXa3Vzv93pj6SFGTu6WQB2ZPDt6cGhXPaoyNxQkndms3",
  "key33": "eknjsgyvU8RgsE5N43TnjQj2Cs6vLChC9y66WZs81PWWb38vhSVw1RchzLZ3VsRSSzsz5m6rzsEH5uEUVuxzAW7",
  "key34": "4PaWfyAss1p3qhU6DUW5mSnS1YytJwy95di2JAahNgqjqEFM39GtrZcZQSJFEZAKKAEMjtHEtqEULz7MtQETKfzi",
  "key35": "5e9pDgy1EL8VExUW3dNyKi1NQ5abhwFRtRjrnxgb1Rb74eC5gPATje14FzKVPs87Vwh2GE46LF2iMkQtrSJT51VF",
  "key36": "4rTNVpKBH8e8tQsebht3WrdyE1KLpXvDHgfN3srPUQe8t63NmnnvUUPFjuy1wNQg7mW9eMfhkWVr7NEL5ZQEt6td",
  "key37": "3jWu2NDtZW3aNun4913BhXRrjK9RVWCPr47moJt4xT4piGN9A2JB9cdKy8L1fegiUxbT2jZWjQWuytd4dFxquwU7",
  "key38": "5yXSbwdNMZn6snHeTb3nT2ME8vXGMb6mVem7hDegvbxnpo42kXMGHK788MubkSyRprTWhiiX1hKAkFF1kJRtgV6c",
  "key39": "4dSBETULRDf2pS5JpEDaSwzXVUg6yreumTbnTkULg4JmdCY1BZHCVFEZfrCJ4XUUvdaPtUbpNXZDQMrSGpf1houB",
  "key40": "4GZ6XhHuDZcpZLXVum5rGfWJqdcopu8YGjEiSjDVXePRA4LbDdw56psodtHvBis5nyJ39MZ9K58DDJdBM8perYMr"
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
