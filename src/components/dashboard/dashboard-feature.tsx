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
    "2PhxzcZHc9U2mGLfdS47bRf83zdVJNQ6GgGSJunG7uXnYctWe4ZcX46aMEAUkvcpR9Dsu2J8vyGVdKZkCMwmDtF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JqULv9fYPBGzZ1dhd4wDkeKKTvQqo5txaFVdPqDjXfgjaSzUpSgDxvojipU7t1uhDcgMkxHBQ9rLJU4xsag45YW",
  "key1": "VLyPWgcGc5maXq9u94iVWHZDBnXg61oTT1nKFPCUpTNqd37ZoKx74HrVtnfzyk8CSGoe7VnJkTpavYaTCVetJDN",
  "key2": "xUBoLehWcoMpPDfjbDyT9X1jFKQxqNW1dTcpP4AN6xyUQr21EHjYZeyrbm1X96UDuWnFEm4BWR45hNFVMfdwtah",
  "key3": "4eNjd5pnRbTGJdmi7KTrBN8qE5muMz2E4ALbq16gq9hhqJH9naJNB6z1oKPTv4Xsk382SDRp4eBmD457xTotibjL",
  "key4": "2dxDzNVuVbyJkELKd4RyV21xe76NfnZWEqVgn3rnpPdfKuB3CBGbxbmAYG9ZEvJoQVMeCC1YPE8mGaBcVqwpoQp5",
  "key5": "65tdeKhMQ9JCsVNhpgLPcrKvXaHz1TPF6cxyBSns1mnbkKUEQuanrvCkAAy995VFDQuRm9Rtd5UyVRMzbnHgJUVH",
  "key6": "5Hab2AmTfm1YVRvtC8TDLPvGvgEroQoaLYtdGbddXx1viHiSkdUxtrPJVaGVfoLE8rSRobGRw8bUXZXcGiYPxoKy",
  "key7": "ik6AAAnXiv27yvCbftUBVFJJC4AEvir3Jw3hDkQSHB1Mbrdpe5nirxm6DG9B4qsEwSbBvRYkFEMcmYzMuYwtkWM",
  "key8": "53XUEj9FdJUYXao93iJAkDjgVNpMXuPToeD6czaEXGWZxD5HRLWXHd3YpzNj6SHNAsUMrzpHG1LuPFVBez2m2yJH",
  "key9": "3caJ9Y9Tzt2YsAgTM2zMcCXzaUHwnDgRnxEBQPMJUQxtqSJMjMy12BxE3DqbLkcrFFD58hXnhRQUCMWcLoZ7BzUg",
  "key10": "5Ut8hzcCrjd81kWztk3Da3ZPQNcd1vtVPfTavGyLfivANjc3oT5BpL7JCy8KRzMYixxWxt8tgyG9Xy52m35Efgas",
  "key11": "22moafcY7RddMiRFcw4nH4iYMTRb9GaPW2hKQj6sm75LcW2tsPFKeoivAjMM39JNtA9WGrjG5BrFZfWSVvhVNZCw",
  "key12": "1fCgknCZYVGHChBKaTc3h86cqVtdvHhHhVs2eaqS7gJe5c6YyhccMCC9iXptGhqd6kyBmoxyVGxkxzyWagisGch",
  "key13": "5mSLkTLmyvaAj9dTZGPba7kXXCTuaEU7o8QFNHwugWkwi4R9hrPTpTHDMH1XzfJrDtqingLXtRyEx6feBeBSD2Q1",
  "key14": "vA3dqnzS2MEcaUB4KVoygN1oskmp77MxDQ8zm14bgQRyHyksKzJ5H5LEE72QvgvQoEyX8HvMBxhufmVNm3pytKx",
  "key15": "FJUVNf11Ae9oDL6t2Mbh33uzob9PmxT4xjhCp14hAX6UAmctDuduT6uz7jw1Cifoe6x9LCPFBPhej2N62ceriL8",
  "key16": "5U7ek6QRyhsK3ZAb44bgatNZRvZLnQaNs3mhTsz8hpFSvoXHjcNPWuoD32DjPnXnezaHVJqVPCKnm9K2nGeZ36SQ",
  "key17": "52a7jPSbBj2kg8KBaYTvEMdyofc2HPNfUmWKijbUesTVpvqzG87tDfeNnS7A79RC5dtxYbPTefXUNxC5SwqoqmwE",
  "key18": "4eK6TwZgcrtHP8RV2GRmX5oe9WDuYjypMNUgsZh5M76uW8Jxj3V7vcUgg4qZPp49cBRaSxBqkrArXorVKrXCER8j",
  "key19": "3zwEVWw8eCKZQe1sBJXNpthtLxwoK3U5D1JuRdScefQ6ZHCGs2ZZg7mXP4gVZSPHVfHbtNRP4Hj3axED7brUfp5Y",
  "key20": "5VuzeEyLvqknzAiXwKSMQGzQ2U7xQT6jWPWo9VjDxUSSkEkwtoj9emSmWaonePZj5iy6nXRnMrMwm8uXV1XMp6Dv",
  "key21": "34TL74bcin569j3QAf8nSFwRyoLDviW8fg5Ysp3KnG3Rc3EsLtPeXdcMfmWa9xEr3EB6Mb6mxYLXhSo4nmKsGdja",
  "key22": "5UsaKk7xRkAQMVr1bCgsK1PrxGqNL1h9hwG4rnAGnAeZwAt8w1Lwo47hUFpzP3pHwgrNperVDdj4LGkttJr2dQgZ",
  "key23": "mn354Kv1wCNtZhfd6bTfRC4GKdTmUDxwHtwWMf4FiawqCWwucBmtVgkh3ZDJgxcSj1DKCW2GR2TBauHVdWUX2kx",
  "key24": "4TVxZesgFWsKB71AsPaw46a1TCwHU2rsnCGV5hUJwYHbTfcq4JbrtYKVdEwr2ciqYBsBQiXNX49eJCEjSrLjn3pM",
  "key25": "5tRnJF2KBoeFRt1bxhEJMUGKMKyUS42fMPno53m41fPSU4cwPPmopywdQBhpz2XnywrT57PQdcba47YbtxLQdCMe",
  "key26": "3VQoTr8oamX8CWAxDZyQGJmDcA74mbbfGqgbHYX2StcM9XjSivWnHVTreVh4H8mFzmH1A54SmMGkKhTnN5V2k6n5",
  "key27": "5BUSY1DyrAZPG1jMmyoEeyA1EcFcHtcqQuJ4EAe5SZn7Xxf8sPptmYXHxKBHLWP85sE7YDBoe8M6h6qqziWg4QPr",
  "key28": "3cGBMmnL7DsRVT9tZBnGFBdJ5aCpsW4cgz7xDquE2mY5YD5H4DayCYhhrjGv89MbZBhnfsf3gTNKiUvoVwxqy7v",
  "key29": "2wvjG8ps8iiA8yDWgykQu6Xq9DB1vasr9hNKg4G243jNcGbEke8xd5k3sq5RzE9hgsBhd4Uso4Jc8TLvyWX1fqqZ",
  "key30": "jADZxU924ZZRrhSd5HwD8CERjDVGBuBYjn3EqhpMfacGYXxcydejo2K1rXGbFWavPvtfwspnRgP78x4gVyJKZht",
  "key31": "3rZQtRg8T4ckHZzY51gPeKdLE96jqLFKrXMbfyPq13Jy88FiEXtXvgiS5SRRnQEwTJc1kJKn1d9u3A1A9mwEThft",
  "key32": "36c8mu1Rr5kTikrb7Zb8viupqnEDJB8ZWH1wANpBzkZdp18mLv8pppzYvvVWnvW6Bx4Zcs7MYdkMDM2i4r4etcNc",
  "key33": "2WCvYVLKZGfP1UssKfK3sskqXG947qYDoN3sTfyz2mjWoq4gUZsMZoyHKkQ4eyuADWdpSH4m9JGYWpwJvwJYA3vs",
  "key34": "5Pj7d7jm48BaZRQPbFyXmZK649Csf8GmiwKC2RNwFuMS823sspxJxdfrmjwoW7rbtKhEmt3McrknAtMB45h7sS55",
  "key35": "3dimgsxjbgLfzwoQ177H8xkYyBqQy7dsg23d5rNMJTVnx1uvypXKGqWgW5S9sK9Hm3TxTXA32jRFFs9wSv5bEqXt",
  "key36": "4QaEejHdS2Kzt6Xo1UGyRmChtnNypV64S3P1tZ6aef8JEoTgHS9oocxukny84Hq9jmnwHgx5JuoeHVpJ2KiuGoHu",
  "key37": "2Ux4ngWqneY9b26vAcgEFaZfW9nFeGLfJcBcDUZaUoxwKarcuKVciB6LGgdhsAHAnnebR9Tfs14Fw5CGUBENh6io",
  "key38": "4wFRguEvyqeT7eRgr572f2wMKGxVpM6U9iK3sUDPnrWLqx8g2uNiG93r5iU2NqDgcUvo8M3Cw5buhDRrVv4gE8NW",
  "key39": "2GVYK1CoMa97FNMwMBX5EtgwVctSzz4GNiEdkTE4iQ8SVNW9dM3WEihpMqCW5Pm2ULMtddAYXvrk3WKuFG5nR9BY",
  "key40": "4sMpjATTdNRWvxzZP4HjvYoqWtqKwkuibzsjWUkA5ESXnYJxgVQMAKKzGtTHy7fvievjwc9P5qTBhAJ5GaKZaaqA"
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
