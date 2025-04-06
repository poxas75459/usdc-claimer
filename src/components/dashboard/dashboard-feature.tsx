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
    "45V3rwbQM3H6aakeE42uzDcK4Es9Drunv2NLMpfadyan2jF4e7tutzSWzh7dGfqiC3h1zGUPSAMQ1774pkgbrJzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ByDMmvi6HXXycB7ayZ98uDNKTdv6qhYWf2ve3VZLknaoNmrYGsVnWtdLvCMYXy8JwAv6oLYN38QCquiPsryQ3ER",
  "key1": "3QvvbZDfDj5LjgecVM2yV7gt3H2ByPCDGap4SLbVsTyzzrAGKy5PZbVTJFDivCfiz2Uy7f1Pk4iw4YkUcGfCjh1S",
  "key2": "3Po9C3SSnFHUM4BtWDrA4JHJ7hWPcy2w78mNpzTEbHafRqA3XDFqXnGjbWmcWU9zBcAFv4ongzRYJyG26CV6EdpF",
  "key3": "5XWUFkVXmjoFaMZrkrGinijqpdTGrMR2kwCYzxmqvwEHZkrvWHPBKFPKnADvdtQH7t2hL9c2i62v5hWhoFQwtiuq",
  "key4": "4zJGjfTugiHdxdPnCDD31jvmnZZXzgXwEMiPLHu8YtUwBjUfvc56c5HxAbSfwMqsYRaWrb4GQDqkXbR7LUBermiF",
  "key5": "3BEWp8wUi7bRfGGzDSNRADq7gDgG7dgUvX8tbkH6rtwUyap6CFbNxcjvfhvjrRC3KBrLJMq3XpNvS9bii6ztkNTt",
  "key6": "5yyL6GPhT9Ei4nuYf5fWBZrGELZmN9SR18BUtGX6s8yPDyuX573GMcM8dw1m4nUB385puX886TXhztAAtvBWbmTE",
  "key7": "dmasLK5QZbrnzqXG5oEcFXJLn5L1o7KDm8UC8rVFVqM3KhFunHDo8NusrEjAtvnFsjmyeBu6muipPvFKwNoxQ4i",
  "key8": "3V4MdzVocjxpKQcVUjaEH4uUhHAYHGun5oSwEi45UCEFh6hZWKWiRhExtz8BJXSatN2tPvofqGoFsB8tyvxiAHQ3",
  "key9": "4JCam9XQ6GbhMQaiGdQU7DTVZd55LY8dE2eXomp2MCEZAUWXaZYxnn1FNyMU6VKWNq64zrMkLYJKDdJLfWjueU5Q",
  "key10": "5KC3hLKgZtDZ4RXyV1r7YxDDqpyBHock2MhBtQyM71eyeGjUpHkXgaqZzCkHPyn1h8xuVpx8xAuQnRmHwfFNuEqJ",
  "key11": "vJRLzk5qrfbKu27f1QfJgzJeok7HbXrKojUabcWQweKg7hJwy5A12VB6ov1e4Zefd8WqkZsYPiBHjn6bUDp83Yp",
  "key12": "2Ps7qfxvu4RVdQhgSLJhuhrdyXyWUnkEXortfJWBiFCp3nkt3oPVQZatDjeBWpVsNwn1B16WCogGPTeKSqMRBQZt",
  "key13": "3L74LWvDnD8YjPqA3dPotkn9WkcMHVaqJxuJKt9ya5LDEFeqNXbvxGAN2oUUCVq2zepP1runahGyM2KTHQubaXP2",
  "key14": "5Nor9rrD8yv8ep23jpQqYwJ42Z8J6vf6YJk6jSVUW2f6cwYTEGzu39yrS7wh51oxQADWCkNuEnAfT6tnmEuG7TdQ",
  "key15": "3FcfvwqoevaVhXKEcP8maeJ25HsCC37dq3PXwjf4SDEhAzhD3DLZ7gAzHSxzh1gJ7vLCXYkhdgfZLQoRxDbSxrnR",
  "key16": "2Yfc5gyiBjp2vCYjyBDLyBao8iFkanUXxzwcLnrgXErV8Yz6c6AhNLdPnZjfbWhWGrm2tqETMqcb1NvoFmr6t1eX",
  "key17": "429ncwJGFJeBFdsQj6CiwVJguoaxB8ofLiv9gFVXjqfGTbc9FHph2KonHfVoq3Thqw2V8bXWnZ8BLj3oTjvxAJRp",
  "key18": "2N8od6uFwP95AC35s2dw7poW7nWp9eBdUZ97RGTbXp7n25WXpLpSBFEtarK7BGZLCoEqGcXHbYDA4awNDCYF55pj",
  "key19": "35ojXEsGArYMJrvWerDrDPN95uSKGXP2hkpayXyUcjbANYSwRgonyeyLYsVBykeEjdTCFx78vtdyPgqZgWLWPix5",
  "key20": "5A8YKQXbmsmhJ5EGRurTRWwy3NfSTtNr234yj3n8QjnfioNaf11QKqZ6ETWLpBFvW2MWgKNkLhHETTXrHyuWzixR",
  "key21": "ZeN8K9GkNr5L14qCzmBMLbQcoTPqTtX6VDHDoUrmTmPpJ2jbYayXraj78CxrFbRubTvBYQnMiVRXTz7difaVvFi",
  "key22": "2j8BTUJTCW1PhS5j7pqku2RzaWztyvSSFBkHjk8pXNKoLxGZXpgR5GpAoR79jYFcNHEfWW3rivVgG7zhNs8pRAzQ",
  "key23": "rpgVFjq8QCa46wpnzJEJj41h8NWCbRAQN11VwiJyP4eshgZTLLR8PeKbMR5LrMNnNwnHqCeijFGaPTLoBZmHtMV",
  "key24": "571892Lgi3iMGo5fWRQV3FCURAGcYm7X8gs9kmLcENV113Zs2WgyDJmHskVBnZGxHmXb7eowAafREcfiHZjgjqab",
  "key25": "UPUHb11CBzWYYcAXBfFrFeCgdU29VLMvgvTKRVa7vi7oFtE9ZY6DHzcnB8HwGTqsaCEv1ZT7FCgV8H31NcJiRWf",
  "key26": "5pFKUaev8R2Nf7uFEZXWQHQjuW3gr7vXH88QaTWaSz4kbZ3uK5kmaTixsm67UXdtTwcKpqgsRRr2PvqZtmfYwfZr",
  "key27": "46e31X4417sfpH6hPvH8294X8ps3dYtB9JtxKgZHTtavshExgFVJq4sFWUxkjsFgHMFduCarhsn5q8qTv5QXZ7dA",
  "key28": "NNtvj9RTrMM2qitbancckbmETWJFHGr1ZAMo5iXmKxtqJLAAUTeFpTjyYefcNBtGXuDuv8JRLsdusaBvXLPgahq",
  "key29": "2BYRaDbEKWDfRBSphqX4Fq2xq6BqfAM8487iyTV9rjAEpz4aXy3sf91wJK8nMyfF7xKspyJXokyVcugdM1s6XU58",
  "key30": "2mvGFbmXjpU4hXwvcPaN76LVaAQ9hmeE6qydpwoPzV3XwqfPHJTZSCNWFsmesbSu6sqj8jrX3tb4tCyKA5KeMrHY",
  "key31": "sRuYYvQDKrzTHDCCcRKpcmJrA7SX6JEnBxHZcmbJaMpMUJ4bx59tUcZHoGr88EQvgSJ1SR4fLaeRYzHjq3uEpvn",
  "key32": "26goGYBFMgm42dyjTyjPrCeHj1YBTnjnX9wPUrha59MtH7NirxwGjf2B3V2yVTcFcrMZ8oSCByn3J57bNZNvGy6V",
  "key33": "2R2Ekss1NgyoXPQ3RtnE7RTJ68PPUypi8HuV5GStnWr4Az7B6tiEbF52GHsHfk5TvqsynpJy7bXMtVM2pCqyUbBY",
  "key34": "5ZtmYPPTWpaNB5yAE3Qj1tta1r9yeXeHVg71iW32vAiSc9ogHVDhNg2J8P2qA4pmHFD5oPgJdfB7cdvCZ689fm2",
  "key35": "2ZF2gvvCdhuFtBDXSzNke8eCUrEGLweQujiWDkAemPfoL9grcfZ1SwaUtaV4RdUxmkX5kqnMH7QVQiogsLyaeffT",
  "key36": "5R18X4NPat51q8ZgqvZET36cLDqTH5v7fU8YsuqpMty9sLXZ1kVtraugQdCRWgtEeKZnjyGGiDubAFxK36rubnn",
  "key37": "5kcRqChAwQ1VAVtVPfooguCTEy3SCK4kyXr7ouF64cHJRUonEY9mBRzr3b7duYHAyPsvwLUGvggDH1NYbix1mN5S",
  "key38": "4Ng5szvG1Aw3DxFWdRdRmRxYxtEtYdJs86fTFSA9vN4btwBLyW1eGAzWSNh194rZiVzaEpYWMw91FkzY8L5Fu5qT",
  "key39": "4KrnK2uK9Jgp8WxMiZzzH6ao1PFG1sdksLqEGRu4GSwzaDe9pojofyqUY9avcNMaWR3dnWLc95BxP6H2Zg6uKP2v",
  "key40": "27tVZRcxghFEzTsApwFtwJ2TNNHmLBPSayyxamVhGAxMWQqmaXh6zCgoynyjrCkbhxu8QzD4HQ25eutnpBgMCGp3",
  "key41": "4KR8JU5XvdjRJqxJf6G2LeAzDzdASCY4LvKqfYaNfuR7cqpp7haVrrhCYLE9unbMKJPyiPkpzzLW96fLeHQwXDJd",
  "key42": "2jynw5tHoyjNvHxLcMwqX3WF1XRurtFyGKgFc63NK9BFJpD2G3gzqFghwxZYG5bvuDJ5d242SjbSNcZWCMnWRB2s",
  "key43": "377oe1jXXRPdX22VAFtTGRrAiBx9Kg9m5yjkZ7C4A6KfZ9NWqfiXriR3t4mJ2sX6TjC2mjRRt3dXpRqMMhKgYwpb"
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
