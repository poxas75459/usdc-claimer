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
    "5fEkesDP4FpuZmh13SoyEWuHhhsp23q7vwcRgtuixo5TbSjXcKZP1grVnCJEtdwCpE39b6hLKQSqYeEUp3H93Pcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JrcLEzCq8yVFEvdDeEXxgRZ4J8RFYqReJD8bLsNuSqF8HtLwxohXV8fUP4scHWvGQzJ1Ud6kmXvLrhpe6PKhoTj",
  "key1": "4Cdi6vWKfPpRG8KzjdkmZBFX4ZyKZU4jNCpf7xSAJ1B4uTZcG5USKSbsbHhaTRwMy9FGZNsrmXRFZFo5vr9SdMiq",
  "key2": "4FXoLJHZ6uYnDvKrvwchNBkxA2PqNgAt2vuqTWD8o6TM3SiKHaqqA2hKF4ABkPiScFGY4jnCYRi2vakn3cDU6Mdn",
  "key3": "2Tq5zUD8CfZ8GPm8SvYjqy7pYMcMgwKr75YSPL55HtS46Ysuc6A6d6FSgeh6A5zTh53rWMRq4poMaxAUM19zWTR5",
  "key4": "2pqjetPsFpzrDhtcjewzRmDkCg26AHsa7oCKcgKjZfXofxbFHWhAZrgpqiKgFJyv6dkujYhCfGXDZXw6114Ugzko",
  "key5": "5Eiaxo7A35nZkjeUemS8fLMHLUnvtiyCD7nWyCZpavqUtwXE59WsjWW79S3bzNs56w2LdGzUV72WyZAmuGPv6ZKb",
  "key6": "3VGrMYc3vqpboSV8Yw5Ke2WqXU9Cf8wS4pGG1spxs4E47engh2fLwxPN6bU7ibYsSgE5Laf2nUTz2wET7HBumy9n",
  "key7": "2ezDjBkm8K3AUCvqEfR3SD5RtfWJ2R6LbvquBEZf5MdtaXedWpNiERDwF3hKax1bMtAHiEBGT29zYBvi8FBSXMq3",
  "key8": "2r2h8NnrBf67W2qwZHbXMNUdHxRjte9e3a8ocNovNAhGSMGQhvCqL9ZzK56uPQKeV1WMeZF9QUiGekzSrKf2rBUV",
  "key9": "2BUPYErviRFEL67dPUjCdHfc5DpNgs16V9BVkuoxsDAaNAx2TwgyAoWSYzBCXiMhKaf4DAhvQpvqgqCoHzPJGosn",
  "key10": "4FWdSk6L2QbV6R36RzcwFc724qoTp5NTiatz3EUygHgjA58FdNQs3V4Abbpv2DuJZ7m5Q1KuzfNBuQy1Y6rJvJPJ",
  "key11": "2xJrSakqzej3BLYR2sfGKpt1dG6nHH5i44kSZ56hPkJsAWcUiDFMqYQuTdRktNhj3aR4UBhxJeBwjjjiBxLPx62r",
  "key12": "hJtRxQqaBWjVcaYQnFe2nNWQexwbRzhHdNkomNTjqyc95r7HoiXTfo3XKfh3oMjbKLd9HhgGMUDeargL8vSMyUN",
  "key13": "479Wo3kvaraB55TUz5iSzoZqCH8dUfJL7C3VSjJ2GGGgzcEmxcJMsycdz3nW81dQCNVHkapDwVcMP5AXQMkuH1UK",
  "key14": "4ozhqi8nQWF3n4TaJcpjUK6HYDd5ryGH4Q8pGohbBqt251jyxWCwfUcJGRDZY6pz4ms5Tx34SvTFtcmkz51McW8R",
  "key15": "3ddsuhZVzepdjyHB161r8FaDu6cndiK3DZvNFYhRxJxtRAAJwGpUwMkwZ9PvxRUsTb9E4tjGjvjeGyq98c7UoDr6",
  "key16": "HuTuu2kkuFSw9iF3tb1Fo7hYxz2m5edMQSznb93NZYc2jak9wxQNWQZ3XEEurEkNyH1FqNyPmCjXp1rLw2dmK3R",
  "key17": "2dJrpUkhpBFcXg52dpZZvWipXMr5DdJ6eoTidFVdT7kfFrDb6ku2EgtnVsFZN1wPSqitUzgsdKVstFVLBRivoXLE",
  "key18": "5ZdXcYKGAZacFRDCqK51nrjkTa3QTP8d4umxuXE9jWBBwDMjZfN3MWF2npGTEFpqUc33S1oSpGNEx9cY8TMMW3o9",
  "key19": "3fFdC1Ru2bRtn9dU63KbH3oxxxpXPFTefjJQy46y87ckji7VLv8DmguvdAL3CeVPZkeyG5JfbkFkhihssmgQzhLe",
  "key20": "4Y9TxgcF4W2YkdGy8XJpR8qNS93AWaDGpZ4XPV8uddtPP689F4W7xmZC53fr4wURh2uposEmEsQQkDqTWNXfAJqc",
  "key21": "4ZvXk368n5nss1yMUggi66EF8TG471Zencd21qqjZEQKSCRus3J7zA5MnqQcUarPcCEyWT9YMeGjqjnBpxPJWfMi",
  "key22": "4ZpsdL8jJFZGM78DaPBMRE4XsKP4EEaqCuhGJCECodVrM4h5jZd7fREk1NhrxKyZqJ2xyxCipwxBY56Y9ALbq2rA",
  "key23": "3oDPLqGAMKHJiXdbntpSsQiU8qNyTgL4yqFf9oRczkBqtVpKyDNzn1aPUmQeMfcx83Ub2PtPFMiS5WnKLWsWmq4x",
  "key24": "4cjDw49Z76pftR8WTH8gzPWhqaif4SoVYKQ5qUDSKBmac4yHq6fvtRgh2PDJXxTHirDPin8HL2uppzP8Ku1amRT5",
  "key25": "5L1FGaugovcp3DmvhiYLwHTm1PgqxXMfFUfsrTAtBuVrFrTtM9A57jgV8ux8BUdkkCJvTCzJpCwQPjfLtV7hUWb7",
  "key26": "3zzz5dv2si6Nu1YQphBcE78nEvR8kKGEssVc9YmYc9RJ4pdrtFmzh8LruxfXgguTKMpXcNxFkLGxA7DMJQYN8393",
  "key27": "5wP3t8yWVsNpyx6CQup28228EsussAskBkTraQWnUcRHWj4BK9xEwFy84L7YFfA6VzcBmTT4Mzff9MUSWew6aQJF",
  "key28": "2nuUBT45DMBv8dZ8Nfrxiu8tkMSqfFqGfkH7YX7xbn8YPVTkNkz9d3uRfWNhrcroErqAAggRfPtG7GtTMVk57Hdn",
  "key29": "gTotACbEhJnoVQsrJ7kAx855XvCAd3yLbKzZoykFuJ9zeD8Br8tBLymttujmNNq5QQk6npjXKqMmKbvGFDTyEcn",
  "key30": "4iJmAK7sDyPzYEQSKNgZYAVLmH7raYpD7Uqsrfzqzifb8nc1AFkG5cSXuTaD4RGBojGZ6Vy5r5M56XAVdiFp67t9",
  "key31": "4dyz1usspxt9VBqQdC8gRxnxvwsfuEKYSvUfwrQywq8RNEcUGi1Z4o47ww2Nu5DiH23U2fAaLpgHXWdjjdmF5MpH",
  "key32": "2SXLzxm8msMUditunm4rb8TCFYyjuaMJ7bn6nA3NJCSLrUhKdEpqvrUX4bnpmKziX9ZB1eCynRhPbRR4AeJ77TQ1",
  "key33": "5ir318ugZEdaxWwVH629DdJBXF5hm9YL7X6heK9JyGHjGSDtwbgo9EhMV9pUobDBucYkzh3H78PQM69cQztZNPA4",
  "key34": "2V4n3VqkSzTwHdTbaN74tBkRCLjGcek2NX9hunvuupEgykTUdgaCYt6dcrDXTMxNscY5D51coeKJY1UxfdxdZnMx",
  "key35": "ctAerzUeuePqCFVtxmJiW1Z9Ft1BJMPmXLqiKU2vV7jdsgvTFfirBYFKGB3GvuyCezLWwshrTaj6pUHGmCL4Ukb",
  "key36": "ck1tJcGca89iAG8NQBZBEADGwKrkvHWvmTFHgTJjfB6dUHHbiFW678opj9HPcs6TXZazpHpCahGahTP1bSjyY6F",
  "key37": "4su4FaVvVcTSc5xBziQbHJhuenPL5FqGJbaRZD2TfQcjaibC1GZw1mRQow89cjTcnsFHBkXEkE3TNKfFkg6JHG9Z",
  "key38": "2EeCxBcdzAyrawbyxs5XSsjhUTuzG9BrpuHndPoidX3L3B5UDys5RTqcJuN3sJmcdbqiNgsd7ACHZ25J8qa1neL2",
  "key39": "3bQXVAUVyc2YFNpGswsCDiexuQd74C119YW64X4W3b2isxeygzWtqZBeaDWPUihrxQQWBRdndQ78xr8yLYztpCM4",
  "key40": "21FMkqRaGwA56RrsiPgS8L2ui1ftjMKThMf84rdgB68rwp9QwW7yekqZAtNg7deD93xtfCCwqtYKC1GTZoACsBQg",
  "key41": "3EzgkpcqaRedNzB4wecNEvUpH7H9Y8kHetRbGNoT4S84ahAM6YLdoLH4adH3guhiyuokigcCbzRGLAKUD44u5HzG",
  "key42": "3X9KJN1SyDR5md4vT9in8MTuwWCLVCBbPRjWrQ1iDTCJSfqVmV7txSp25JjYCocrevUqrYtfPk4GN6BggTmb77Bw",
  "key43": "3pJoCP75qW63uMmeqVTy5eRDGdjqt5P4gvVkfbM2CDBpG17d75MPvhTTMssf1kBgYnULLWfKCSjkpyJcb7FawSHY",
  "key44": "5jwqGCNFAbze2pDzQXbReQajDzyLvnCcPYPED1MKeXCwwWVFpsaGoLTWZzZU99F4ZPAySQgA1wj9HkkJU6Ls1Xf"
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
