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
    "5gguGkbV8TgYvsvLgCCCKHfBys2ByopRcJE3HJdm1UscmXJC9toTgvmEB11GxcQcJ9Eeztveabo1txdWaCn2tEyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABkZUF6wJHdxkCpbhC6omcJq7CbCeEt3Qq3Hkbcz3SDPdJc7nkae9qFy1e6GNV1xJjiTgZUsWpDVF8ci11QTtwt",
  "key1": "3osYRCeJ8hTrYKmtZLEnRXjsE1UcS4XZsiJDZ63kwgJsY4FHLuX5KS61HsSGdMZkzYKwhxH1eae4DzaW1hVdXAHQ",
  "key2": "3cEfCqgwmq2tZ7xMi21xuVk7mQEaXBRnY2DVT5BqvG4EHLdSwPdAez9xXm12eAhvzR6vf61BGGecnaBybQUxzQ5N",
  "key3": "4Jxfx37nhLYX7Kb1bupWc2ejqRFEtjZdNgMoaxgzJmZtWVri1BvvYQ3GPvaNNKZgFwmnzKBA7E4DJXVopmPzx4wY",
  "key4": "3nRtpBXGuhQQFyMqejFWL5ge6ihCqY7TRoWnAubkyp6WB7JBzrMqNA4fHF3CTv1LiPdevVAE4fst9DEtt6q2t75v",
  "key5": "csvVjWdFyfVnukmbQnTGf4BTJ6VTQJu8YTVMne3iKP7zugBo2DK97Ps9qt7BB88YKvrpwN73CbTLqCjmavCGJFc",
  "key6": "4Ndg76dMaFfZifoJyr589ZTXNDDKxcVw4dcs2nqjPiYfRxtpBLaGkwva7dC5P5KY6t1qRE5QTwB4nXmLc4jPWUVr",
  "key7": "43SqeXDaZAwUbWNHAmCNq512Bjw5JRkCbTG23Ksux3YS7QN5kHNUFnWJsMNt9S2tsaXgYncetA2ghfvur2ZKByWd",
  "key8": "3yAnNgMXxUWNTSLZz6eaRbgKSCZZRLqE2S46WZnAypmLe4DfSkLVUzL44WPyd8V974PzsUdck68DhBU5vMtVu4Bd",
  "key9": "54AUE8Ma1XcNP8i8mzYjEB6GiPfyXA4TcDjEZfuK1joR3AE74SNFvnDfFofxwt2a9mt6QdUYjcNXZRAKdyhukKkW",
  "key10": "b7yB6LGiWCog3rh8s5yNNFPvPTd7mDTVm5uvU8HfPFq3vL4QAVsPDT1CVTqXCXBmPWBFvsm8ZiNw7fTXhni8HDD",
  "key11": "3gSvsDbhF3K4QvCenC2xSBZsSYKPxaYjoWk4ZUY51VHZaMaiWMfQWnFqBM9SnFAHwATsRWgRM6Et1PkdVkJee88n",
  "key12": "5KC1LwDmwEj13i2Ks9KyjqFVHXUjCjADRbEwqHfyGvJv6baggfv88DUsJr2esGGadQCbCvcedaKSfhvfWQBhuLdG",
  "key13": "4S2inRdobFtd7589JRpV5w8Bj5XyJg4oyfsW1GSFoLPc4eSTunWRh5T2yN8QcpYUEYSDnCa8CqXtUzdmGCzH3yTv",
  "key14": "3qpvLYjG4VoHGHKUN9ouMVKWsYZrSH9y3GUR7k6t19yvGuFvYC76EK1uJFsb4C2mu2ih3ERRRubz6X9f3nqt6yak",
  "key15": "5kkiXCQLtaLxgShjgTKPM6prLNtp7M8YrrffA7iBR9cdejApbnhGpfHmmU7H7nZAkthAtrgWsWdiphy6pZQ6Qc7T",
  "key16": "4HFsqMT19bx34ki6rARAVfmjpY7e9GsDx2fQnbDLGtwHJoJEzyy8A1ZVe9B56buYTuUqz1sJfkHqFAJ5E9CqLdoR",
  "key17": "5kX47cvjrUqeSUL3kNwR9PJXz5bey7NLLSWso7arLxy5wzE3WWj1fUpnTahyL6vjbd5dqCaDMi7THY2jmTjopz7p",
  "key18": "PyW7CiqzQbie6ED4hQDoBS8qSRirMvfZg2BaiJw71NHUojafX9fep6SnNtiK67gtDoyMsEQaoyS5gQPSkZMFTsi",
  "key19": "3PgRiVJcMxcBiFq5jKAk7VvMP8PyJrf96Ut6W1putSZYhbN1S9bCwd2ErV8XTfjqMf3dk24GRcsX31ADP8TL8EuC",
  "key20": "oNqSCqVsr3YQqXDw3kwccv2hRAoej2zRX3u2eFrdRmzvyqbWygMXwZywz7KF6Saii8Mw8XdGGuicGLT5eko8rUJ",
  "key21": "ni6e97dPxgF5CcBuYb8WMgTX5L47RqshkefgxCmgpjKT9CnYHTxaYZ3MtQXeqhcCibh9uR8PanhzMtVLj9GNpUN",
  "key22": "5mFg6kVaRz2XeAtGbzxNq5cuxqjgHL5Rzu7zKZNkvJUnNb3oewF57PMf1BoHGU86ztBrTW1cZKYSQieSKSvzc9SH",
  "key23": "BsAC5Uz7Jet7ua6KtJfA9CpXwR4oFqfXqWxCJxhUmb4rYvMgkt9SEkdVUxhceCiEN1SjcGSqLdyGLvd126ETjgK",
  "key24": "2MVWkzufU4X2r6PFuBvttN9YyZgKot2UyEnjTkm3HP4A1EM7rVCxvyoFfRxo7HwSiqzr7FuW86rGg6SYuPCwLCKL",
  "key25": "SnmzJXdWouLx1eSUPQZSzprK151ja93cQjXgKbWvBR96aKvkUuMWrRPtCxKRzaKup7zoG3S8gvDsmtzwni455LA",
  "key26": "3ygXt1zCo9CEpNJCaGRJCv9c66tnZkFxMwBmyv9vhamP8YVq3mKmu3AtiC16b3fgdbvF261czVBWRjMSh7hqzomS",
  "key27": "5Ro19C2vP4WtP716Z1GtGhHuoiWGP9x9vTEvG3oAMpZmnyuNsEa8cN3RspJiopaEsv3dfz9nrGMsRcGwdYZ4RQax",
  "key28": "5Eno35XkS9jSDXg4Uw16po2povDvSLkBwfdjjLzxGGCnnW96kzLYTbCJxuEZs7g3XKztQ3Rm5aqKqsRxUqRjidoc",
  "key29": "5C9RuczUyaBhppTK3MLcYPTXvtUfS9H4KWQHWvAAhEXhwxPhLC9Jn9n6AFnch8ta5FUevLzFPbuhFrpV7iZuBpHD",
  "key30": "26HsG6oCoaXTUr3cjkNVqEkM7ugBU4pjg1JJTwMFTCUBenX7ETMdLX5WVaj6tSx6sbQxJT1cxUBTETqPHqLZresV",
  "key31": "4rMVLBNvnQBMuifT4qCuSeZguT64BH9MKC45kiZBYw2KEydPXFsJDaSakRVMh7DJU161gpAoApcMdtNK8hsfgrLB",
  "key32": "5d2z7NBShhdRBURHCAB177TTskFmFNDbXMczyT763k8ZhAF2QPdYfcPZCtMBngm9DqmWV4fidu8iXzRjfyqpFvQC",
  "key33": "4nN52GuaJ5zQrPLZEXDzjyzXSZBQBc5NQqEhUdAczZuXgmkU15Y6FzqaUWi325e5GqFVzFCQoo5vUdZCksrAdaj4",
  "key34": "f9YoSk6KC16XTX9RcqzdAqZmmTDpnTutRaCNBCyoeNqb1ArmKG6qm6Hdjxvzg31vzomry6DKnXR9csLLb9cGLjX",
  "key35": "gZuCSkDJ49KUAjBv8gXkNwRiboyEU5kVASNQwDEf9HgKXbuD8vNq9DgZQXyhd6fiUPGdeCEqB74asAv1w3RDNtW",
  "key36": "3vhgDheEBd5braK3AKSyPBqG9ia1Z44oKxX6c3NgKARv3TJd9jmGCZGvr5VKxE8yuY4i4mfGzs51obVgJYG5AV1P",
  "key37": "4EwUrVMaArh9quYT8qSs44AzAkLVNKNXW9Bma3DL73h4fcCrD93ByzbNAjtuZjsP5ZUf9XNJBPfy2nSnZ6A26bGr",
  "key38": "36wzxbgYpPjrJwz8UFJ3eDY9E8GdBEe1ZYT92RnV5TgaJAFYc7gWZmDkKSWJ2WbNpf413adU3PVESiYeP5RVe8Th",
  "key39": "5UZMHPvVkCjCoRKEHfsqL4eo3Pk7ve8GYZ2QqZb1pn15ffYo8it73YZx1paURi1Aj9curQ1J23Fu45CoChTcx6c5",
  "key40": "2viXjMSo2CrwnDorWVxCHNcpv86cnPGDpqZwwgibmasr3794Jg2mHjVaVqM137o4oWH5gK9jtv33vynAQxPjCkbP",
  "key41": "5skKMe8QHPuEFS1pemVFmmF4YAoWVzkY68ZL88kHF2jq9eVuFSeUs2oXKE7C17s9ne6EvtUGEbjCf8jmBfN5PW1m",
  "key42": "5wMYjVGr8skGsTXgembeHf7VA8p3a1dEDwtx4r84kUFEYK82spXRxobTmmmeMMm61iaabXvq7yaayNPbvkro4dRC",
  "key43": "zka5igvtNSvpY25V3fvs4eNDysQZ7nyqd51m39UDJSNkbnox3GQigziYADpUtxA8fdYE6RTLDjg2v3GVjufCXiy",
  "key44": "CehQGZ5WdSUuH3o4ASbT1jPVghqsLSQpMkrCfJfPo1MzHEfcu7Pc1xmHytWJL4792TmKPuAszJ9pyKmrVd1C82d",
  "key45": "3kff4eVCGUe4XVmGfASiU7C6DPcRtkhneHe3J8GpMwKXXJVMLLKHnFis2PjaMenid7TVQZziFjPXGrqgfKjR3JRM",
  "key46": "5ZwJcWS32a1kdPXPwgRy98swXrMvopPjaPGWuNYjCnfmMFu6BxphuTQFPApJoYRUiYuwChPuBrGQevMXuQoXmv8H",
  "key47": "5cNh5Jm3nL5pDMZMdiujMCZrYPVssHDyo1RLpH1aXsHoyoncafDzyQPEjgRRP5pYbECfBvaGvVxXp5CZzixUg2YH",
  "key48": "3Z5BJSbg9qKjTnQjy14GgsFbdtS5g33B8DJDbTaDadh1zVJ3FJRqNqzGnnfEKZxYznskyFLLKN9p4bTnqtFe4XEZ",
  "key49": "5y3Py6GQoiT2rTpaaNhdruRHjpCHsmhK4864gPgbt85RkmsJ6Fa8CdF5VfKNsRxZ2D2yPGsDeoSQLwCP2WVqMPQM"
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
