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
    "zKb7CxyDcfwgCedHe5KXhoFErkibDe9kRLXCVRkkBb9MHVDMWrx1AVqrkNZCRygUxWZoD1frCEAbTUQN671GbTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34jUzFjjSoHC2gg1dSjYneix71TynjdKt9MYBcTPPSew5iUJjiTeNzP4ND2MSCYXrVKnaKjXfMibQNngV14tZshK",
  "key1": "2UWTk4NMjcVYLgNHwx5S5Qtu5P3ZJzcZkXEvN9SiJvZk9Xjm8zqctzp28wq8PJNn13ZSNwThxiiXnBpfYJ7A3G8q",
  "key2": "29a4HbX9bFnuLfD7n6v8WsMXmrwjWynPFzDN9AkWcYQvqjaDSuLNJLjY1f4UaRsNoUYiZAxY8aEFwqqca79izZ19",
  "key3": "37vce6AiKThK68VPCvhtY6tuR6pKDWT2AAVsfXTNxipCuWLRExxn7J3MyE3QbhrUg7sZtR5y9KH3Qpd3FbixqC1k",
  "key4": "3f7WUd4M72FuC1sg7syNv7nRgVZ7VsCoxrjfWQ91WZZoVnZGPpsHXCMAaP18XhxrhwrXfwYAcxEnyScSNu1eeBL",
  "key5": "5Nh6ZJURjZgSHHGgjXyH595wnyK1feWWTsX2HQ4vkoA3igVSSLwc126txBB8XGWNV7tJM1NbKLruD7JhwjSP86uc",
  "key6": "7wmmixns3ybRHh1dFdu44vE9jsdF1JpJuNUZTzFLpjrTBb7CDZLUn75h9RmnLZvBDAKHDg2bbPUctmyqhAPmAQy",
  "key7": "kNyBQiCrr1cp2yLi4BC5gs9PzSKDbVsP1426sXKKVcWi6dsbngYHXMWDeT3TbQYz1XV2gHyUK6gpSzj3vgveFfd",
  "key8": "nRvAQPYZtd97FmAjUKAhJn2FJCg2sQjunuJYr9hqYuy4LWNuzLkoi8uVsqRdxDLdXb4Fv4RZBzvTvrMhyuooTtG",
  "key9": "5LuXxZRA4TinzAwTVEQnNMFCk2wJWjcfK2Jz2RMAwAbWMrih11VxWSAmjACFG1kdQzVgWad51x53UGgRLTd5V92M",
  "key10": "juJLHUhxEZRWUW5jCPKQkatLEbXJNTjUtCcRC9V5CrEyH3y62j94pAYpyeNqeHZBgQGnfk66faU7KMBLQmRomT4",
  "key11": "RVFnqkgVS2QAPB7so4pQpWRhwMoPtvM1Z1TNdNA5G9vJx3MMZpn2hsswq6fpjRWH9t1JGZSwtYp5KzZtWifK8WC",
  "key12": "4rnVGypEJ6FHyjnqoyLhFfua3mZAtpo8BqiV8js7M6gi1H6dkt9h9qPoLEHZSbAmjVYQJRivZ1Hghcq9HpoXb1fg",
  "key13": "2oL3h9zk4t6AGeusNSp7M5VszhhgMBUWWMP7pArgJ2ZSFxcP5NkYjwpMkekUnTUrFts9zTXRFC9RTQHYtuNDWGst",
  "key14": "WjqoAHFYzhwDQTjQsuFZSMrvsCrHToHV9fLhh8j1DAqdh8ww1QMByqa9gvxR3KkM97vFnRFa5V3ppgEfGsV9Cmh",
  "key15": "34ABWWo62dFod7P8hERcynnZPLGdhQZ1dAuTGCYGp3KtEpxbSnLzYCrt2UaoyWL3yvfG7XCGnTqYbEPXiCNRxEDT",
  "key16": "5c4UcEUuMK5ibAtq2XrLyx2utMdzwK1wxm3yrm3N7Tm1ea4X4U94XMHAXb6faq9aEyp2CcFwCHam4znJXQXxqdot",
  "key17": "5AowmGuAmnUyo3CstovTbGDkLXmoPHFrAJooqU1Dy6RPu6DvAL2bQvWmMcN7HrpqSka7ae2hDfJpqPeycCQHTLWx",
  "key18": "2W2q25ck3hk77S2inRgx9inoPXksV4SJDmkEt3DKV74Aktka1UnQpzweTSUtEAx92AxTW2H2EARLLGETX7FqYkfb",
  "key19": "3tpiwsfzSoRAqZ11JKuUBJ9iTkNxG4jm7ubuYzv1S5ci6L64VC232gNEkju6fcKHmjrNVaKU5caAfjCTqWqWqPmu",
  "key20": "2jEWfT2Beba1QyaJDr39pzvA93LBgu8zTuNwNiqLm7PkiGCVr3Sqxthni6ParDgv1ceQrkygnZsqArBTDBEVTqht",
  "key21": "5aZKs8YSg5ncbQNMNJCx2GbLx2UkdnDka1TA5Y1hK61xJjuoNSZuY8hsRCxTpYKtmvaT71d6MiFd8kNjZhPY8Aag",
  "key22": "5P3JRepJQP6mBsyM179ocUiuyJTbEaRXVHuJMjFqB1kv43nnVxT9uAraATiffD8Wqv68kgqwK1SQUNqGc3Zf2kbm",
  "key23": "RrJ74CVSqAkR1S5tqfTkx52pp6DFL7fLNieHbBraDuwym5HveLdbtuqsHWY7WN7bzZZ8aUT9XXq3LRBrTNaLLVH",
  "key24": "wyQnuCdYzf2DW7bzTUW4Xf47rhx6wSCcRGipUpLG3Y8eSNLdz3ACL9JjTRkAzqsETfQC17KFHSNUryNnUGGu2dh",
  "key25": "59XWbWicL448371MBskM8oTNp43kXMwKoJd23DkCHuDmNd7Mp8zi7Rn26wipdBKY1sBUHrPwgR9ShJGC2MW1sEXZ",
  "key26": "2PCRQiJ2Qd6UgaYkRthqbWB66oyeAdXwfkqpXPZVZZX75gEuXHD1a3wKrjGEf5jM83gviH8cZHnWvrsP98xjwuhy",
  "key27": "5ybApGvsf8XM7GxUsqWL6EutenZ6KG72Dt9r6wsxiyqRZC7tC1trs7vY63QSwuasMV1rkaejjo8xqJuSwacTHAh1",
  "key28": "5BRi5op38GFnUpqLz8YJZwnoTvrHCYhrzQ4pTfbLMM4BufScLAXwWgyuDV4bPPQzJPK66AdoaXvFK7qFcyRhrSJ2",
  "key29": "3X4PRAJuwgjTXj6S3ZtZjzVYaznjVPprM5pvvnhCy7YcY1CXr7L57XBwqh7Dy88KZ4h1hgoPueQKrebfUzQUH6Wj",
  "key30": "TfdasuWrPhYa9pCJ5g81WBV3XegRK75AnhoGPndThFgpp6P3ACAJEnc5UgjWAFxKidtvM1dA9VXJm4PfgsvRvxe",
  "key31": "6295nBgGBAQ3o4VJfXFj7zfSmbKYSMwXU2FsHJakEtWBqJJ9BbgvuNUBi8XkfPQgw4rMxy6QPTu6HXTWewBmBF1e",
  "key32": "2S2Lw48neiqAo4UE4Tpv4cZL8iownJDxqerYprSqHHAZ4Pfhqs4XXu2aDhpAnZNg6VhywmysPSQKwYK1EPD4GfBE",
  "key33": "eHvjAJgHXxtGoh7ok391KobT8ViL8RYuuAk8E6NtK38fXXdrpbsjE1Vjd4X1UiwbYnTuYBmtB1ZaasmFCB76wWB",
  "key34": "56HsgdvZ9baL8N7jBgRDwnaQeDpzULATCHQ7a9Tq2Km5mECrh4pynKdRu21Z499ou5erZSg81VNXbi29pi5HC5Uo",
  "key35": "3kC4ViBGK8gjz28L8k9ZYFGGBor7GMLx8BMqkyH1YZ1GZHz9SeiTE1pkTdGLJidtLPApZofaMrgcTLsvmLe5kLfU",
  "key36": "2uo82BAUyepYRF66Nw7eqLB96BqV1XevVXamS92EQ8CHodZAYgaeVKyQmrJgEGcrvak7PzgM6U4Yy2oAM96wXeEJ",
  "key37": "x4DKE2suBVZPaJRJWxDFnWcXeSGWbpvgfoJtW8uaQ7FnuyeB1nXskNdnD36PMZnNPvkxBgCkD33udM4YyqGcrCV",
  "key38": "33Tf82HPf9Ca1KjpY6AqAbmbqpWdrXSN9bEPjwGCoP8x5bAxR3zb4GXbPjWQh8FGunHZeHjzZdUrtgY6izWRGm4Q",
  "key39": "DskHshxNP27PDFa4xTtMgsrg4Tq55CeCCf6txUvuWHQfxZTedSNxSGSxZ6hoNDLrhxthe4nRdYfnLCYvoeuGzjS",
  "key40": "2gfZqNVLxjhMZK3AQBcr9CkRAcEJsm21No2vtiDTrjoqMYGRF9qPiXgJBgfcrUZXJ3ocEPmrNkvEpRY2CVB8VrXX",
  "key41": "5oNoDmKbPMHs7s8n6Wjsnab3oZm4Ek4VQfzAhQByCTkxVLJfRrgs4Pr8a63W112An9uYVLChKLLJaTmWPaAKUw44"
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
