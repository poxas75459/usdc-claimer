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
    "gsgP9E5XVJkEgr6wjXPUvMLMBLXMgyjFa92C5G39k8LdypfzoLVacroy7SMxXaDpXodUoGKAuxXo5wXm624cwi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51M9CdLeP5bzHPdnUcGXPVjqydSXt4vdnrjU1PaqaGKSzrF6shAuoJZJyM6eU4LehriAtjFKDCFpvurGTWYdSk2S",
  "key1": "5k29B6WYtoqEd7sb8AybTXa9UA2sHE4VUBxNneiyWpVp7f9kjbQ1imDGE7KNTn9M8iHVqYtN5VCBUHyFN24xVn9x",
  "key2": "2JG5CWdAEsXtqk1NqwwjEHJafTWKvnnW9scPovmiyWDoRmr8QR6FWJsu6VqTdMJJmRD2BMghrnMu8x2XJiCemcrg",
  "key3": "55YEy85oXGFx5UvXGkx89PxM4dewYzy4NGmCrBzphKXHQeogA5LUGheMZpruc3UyYh1n1ueJAXgJ6jGE3TEAHF6c",
  "key4": "4z4VgbcwCQ94h8tThorhwZGHgWbhuirp9FXyPD1YBAxfDAQVajw7zWKYm3qyQm7WxRZxtkk9UtDN3St7cVaExS1g",
  "key5": "394sfjMnMbFSRwbyZBZ7h7WEU3dRtibUKtLsLzXBndFdhyF2L5HCDghTxTjyWjXcTYLKxBz1wxukekR86kbgu89r",
  "key6": "3mKMyXuhyui4x6ep3ij2n3sDyk347ZrRbanbrjVdm53zM68HZ7Eye9384TPXY7d2VGTEreYFG7xmmEEFYmcQPhMh",
  "key7": "4Zwuwf1LYCeEQvNHckizZyrD2QtbCAe5k6VfpJg93HKWPLcdirD9dZR4F4PuyaVkZ355sRzP7aNk4uRSfenKE6YJ",
  "key8": "2PvQDZi8zKBLGqUfcBbEdhZ9d1ZmRweWET1rRa7Td2shjSx925RqWdoRaLo7saC3Nqku5rTqFguqyrU2wwKX1UHR",
  "key9": "5v4i7PTfWPPAaRwNxaJDDwSCmtYAn8n7ok4DSp6r6BwdiAMGkRTDVZAxA41iojzoKCFuzCxaBNkFnZRpWfa2q3wZ",
  "key10": "3Z5vHA4R5Xh4gL1pNKD3khSzZACPRYqc3j7fT9xKJKVS7E5mtJgQgqYf3H3zHBWpwthstzyC85o7CzTUPnwUi2qu",
  "key11": "4ayNqxThj3KCmuK62KBR6wFDQ5s4AksQKgMQGRypcmsqq84EGgQARokv7RZDp4sA4rE6RtGugxqwBcGBM3Enoz3S",
  "key12": "5ZLqw2T16ZGYVg2KdnEGPr6WGtE3ivHd6ZnWeWtrLtPRLp9LMNKFfJ4YBXtFEXGK3Uq77zQHZBrjRAx7nnfqCaTW",
  "key13": "2JXEiXY82hTmcJbxiRWYkaZdikgV18BJ9aC4xyg64o9FU7nq6Qr6E98YDCHFVDEhX4SmQesTXg5txr9k9qSUffsi",
  "key14": "gxk4fu7z9tGZFFPnok7LCpjg9H14EyeEi8nYVKVHFucTqMzGNkfzch8owcHCugsr6wwie5QYojG3B9XG4M8aA7R",
  "key15": "4dxWpCByUJcxnFKcH4rosvigPMzwwjhRTpACVVoefqSEhe9ESzqSh6ux3PVmEicLurtQwNWWSo5HArvjjwbSdTd5",
  "key16": "4LMTc9XQAPwGydDGE7a3i9ZhxRgnWj3LceTS4FECh4f7pPb8umtPFXVAT7GcNho8PdhJEQ7wa8WMtwUakkvBmJoq",
  "key17": "3ZuJnZMd7yzYE8REw9Pni7GPpBW653sAwkDEUNX7CxRz941UoDk9sGTGsMc4D19M6v65XAMYPshRtEk51zmZ3NUp",
  "key18": "NGk3jfQV5evoLAQBMgsmyErY9uwfnVXaHV3JyUEHVgWF7ZuEn8EAiNFZZNKfBK8Xvnvomymd8Swb6Wi8nHeaj7o",
  "key19": "45RwDDHPCoRegjdARULEoJr7DMqEkbwtaPevNL3hHFMbFsMcpZTDjeVySg8m7RqpzJ3vFfRqAmqy37jw6utj4UWr",
  "key20": "562eNH6UZHr2hYgW3isyTzAeuTVjWahbPRDZQnwztysa7rEiVvkKXBUHdJtJHD1PVvFz2WD6v3qpziSdBvUitDsR",
  "key21": "RpRW3TUTf9Ym437udPSdpTXotC39Y2MWK5D55qfs2yZWmypBQ5BwnGVP2izKZ46ZTJSuTWbUiRfw2FgbFQgCWNu",
  "key22": "2vuX4KpUX6NsikCPasq2DrPnkbepTh1dnYRdqRYjmBVweF6AoVbqux1E5uhLucJMAUt8DDJSZexfosP22hUXHMyj",
  "key23": "32kfiEk44JxRasLTy9geeWnruGksLc7oma1MuWNYZJK8EUiuLbnwcaN5KENYTD8Egm1ATB3R64odfobg5ANwvqHr",
  "key24": "4jaETchbv7rWXnZrfn9rMirYfZwUx9wNvdh4EyCqbiHSeM9CXD3b8j5CsAnU9NQ5oEZL4re2hrh3V4nwCYvuvhY9",
  "key25": "2mNCN53iAiLvPKSPvp51rYovw2r8yYmZwMmjXZia5WSHinFHc1sjvSho8UDaXuwAPYWSqLYPVVrx3wGxYGRHeVvS",
  "key26": "8FJzN6T5jSNUFj1cLireiGfg4QSb9qYyDPRab4PMZJ3tJ9sDx5nkmh76ArHk51WA5JaZZxqboBvLc57vGVMsiuv",
  "key27": "jegXcViMaGEp2YMXtyddA6Y3m8upDJbEgiBcNiztx27pMkzYyuLZND8dToRVvDFaSJSxMrEvCKywz4cPpf3Phjb",
  "key28": "3Lgfnb941HVUFDEBmSFdBKfu9hxWMRmm9SFYJLUKKHXBpD2ycuoFCMVQRwqMjAVUK9t6Lfzb3a7nuSp2yMUb6y6E",
  "key29": "46TmrnSqbdN1Y27VbJQ38z1ToKjCFGgwaHtCi33SoUQZrGxqQhk6H5drSHFLwionUprM1ufrXm29GGi13xqm1bUy",
  "key30": "2vQ8RAqc6GBYUrQzkBG7cuPhBNuvxFycUT67mt9PiW67Nyc8QPbxeLpSik7SrAj7efj4KT8yLJ2PbkzgcTtbJ39j",
  "key31": "4iQ43rgno8AaPzFpsQTrate4wnSpVYjFsntRTJqstqg2F73mzRgR46w6auBRHuEXL5azzuAfowq6e4dX1TtUyEJd",
  "key32": "2pyV4LnSsYt7CXVeoaDKgC6jGt8tSaU1M9VMyUbxcmwt1fPaEQQDmiNfrKvaJFcKx6FjiEHWMFjNP6uQMquzsJv1",
  "key33": "KLXhYLRnoSexAX1CRH3GhN7Lz28usBayjp1iLN59jZH13MS7NCKwpf6JBnhJnBBnTsjdkCkdUYww8NjCPtk7Nz7",
  "key34": "5PuDEa7KKuGwHvuBbwZtc951BQmUXGZXmB9cKQMYpNtVrSZhwNWyhqbzWDmabMTzkTBpCjy4qyWzTi8NARJDoGEL",
  "key35": "3VgesVzakw1UoCuns3A95d5TqUzTFL4nsjLsPugyk3tnWYrt98CsZLV88bziPXV91m6bbVAjPCugUanxieVmEjmQ",
  "key36": "5X1CcLktnaHUSkoakK5KheRyCfDFqf7yBuuMcWDjKid17oFmGu3VTheZafMxAx5tHtcbVj7WsGXFxygxWaM4BD25"
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
