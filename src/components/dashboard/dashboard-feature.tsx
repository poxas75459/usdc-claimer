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
    "2r1mFWhQejFNvqzcNpTwtgYvvnmL1ap4qzh4Fy9D12BqCJ67GBJ5YoKUhtUgBvifqTFJQcjovcVz68Fw9ELdoCkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gNAYpJzkEjggFKLWukMfMdKsusJv13LanbPv6b9KvpZYuYfpxzThF4vGcXRXU6axXinE5j4LBSHUKH8JQrNPSGG",
  "key1": "535SuJxXWQCvJxmBGsc8QpSprnHzJg7eQWBeGnuozoFRhybKst95Lq8QPAHaLmFLiHhdnAusPXs1LNJ4CB1qHaf5",
  "key2": "3h1heTo5foy8sM51PXkLTRg4rcS291D43JcnZWRHjuueQNHjatoZ1P6TWCssQSYxtiPcc1iR5J5t6cT5PgAWK5U",
  "key3": "5VnnbwW1NnoAJuiJ8rx3BdUu2LLM79qsbBeWVYF3MUQAhMWkrjevVhGrjqL37GbMTv6q1agFpq43KLQ96N2GWFgq",
  "key4": "255gAftVUzcjvMechj5pzN9JR6oWTsF3KGDuubzKhQhJ3FT2CVNST7rPHAJdyoBgYFSs42dGuGKFf54Yi5qztg6q",
  "key5": "58KFASD2dhH9jvd4fcXDtBnmv1h4kYCTDnBAbSBU8HGxwQKMoh2NoQ49i8T12CZd2EWJZYmNQMtLjdNacwpuJ18y",
  "key6": "3TWtQmdsLgHLgKkwFwVwHxsrM54rN6WqSrE4BnHCDxiEELAK6DmomqwYNx7VwTo1Tn41xFLw6Lev3Fxb6FSBECNf",
  "key7": "B8t1WAK7Q29UMhrCBb1i2gDA31kgHxVZsRZc6BGB1HGn71t46X6FsY8dbGbUuESoGVpnDrW6ZjzRQQFxmCopnpV",
  "key8": "48Rm4D32A7efqMf8AC45oeWZhgSao4PZETHA1GL1SckhNHxpmc3W1SYrsArYGVu8DG2umZyEFV4tV2i1urHbuUmk",
  "key9": "4wJGu79VrQLLZd3havSaVsMya5eVgeKewGt2UjfRoCa4ySM543S6sycey5bY6vodJU8TiYkFR7UE7LZ9uyU4rkAA",
  "key10": "44kVFQwFeo4v3r5dNL6UA7avXPzQ2HHYowvffjgHaqDAwnKTHveSu8pTkmuiddtLUhio6fGUf4rMaHvwCQnxcgTf",
  "key11": "56QssTtNmMY3ncnRr6qkGzfz4WjC7oZMvhR8d4ML16RZKUzQzaVwq46VD8HgXo6zUgesokwjGZkcFEwaUFBgoEN1",
  "key12": "2yC7v2CsSgdqEJgTp1ZnvZu1M2BJLwAVEVqP6WBwVNgWkFCdy9gg4hgRxVoyvPpJPs7XwH2oL7bW9wvtFfr2op6w",
  "key13": "37wgkLadd7W3bNba9ahM58Rgy9fVz4GzbpdXyPGyNWa32pCUknU2LKnwsU1YhwyJwKN4Qz9zQdo6Ra1XsTXzLwTf",
  "key14": "5CpNarAqN51LCEYkZK9hBoJjvos13riNYN8ZNJp3GkcgvzFGPe8Xqi7G4C2MNbJTFb774Wp9qaegndgc2GwdzSNh",
  "key15": "5rPM8Se4s1usrdt5HrDaBg5ev3TbPqc5ZsxYri1vJjcFGFJnB88JwPn41sVF6GYEJwf2mXUHCaBCHFtbfvKAF1aY",
  "key16": "3tUGPMmuzQei69rr5SNReag4sQfF6UTuAkj3BNzpgWpPMg2EkSo8wpkbDK6hLQEKzoJX4eXTctvFYw1jhy8VinjX",
  "key17": "3394mhgfR6VQp6wM2ahP8L351zL91pLz9qVVkfrJiHvXDaTtodqXGbQtHaJZgsC3aAUc5Z3FgtvW3i1HXCkz9aw3",
  "key18": "33NGiDoYZtTGopZ41sUP2fUdX9xCZFXTSg14A3BmJUkWFkGGoWJUJpjqC8wiQ5XwA6RNXSEMU9KcP1LH2RQJUW63",
  "key19": "67Fg2EZEdmbdoB5zvqNTzeZe719ZkKLKLZ5rtrBr9yA3pv57Zg1eqoUKndZ3fDXoSBsjzPCMS5ALqcRvr4SfyWx9",
  "key20": "42DSRLemKf1vSCP8c78jShHFPK8MwaVRZxE4yubEe8gWjy2h2ToufwR4gFthsPcYm4YJvQ3B62ym2qEARqwbR7YV",
  "key21": "CorMbw7onh6AQ35fZ12XaYMbs2U9gH6y7qXrmYYWGDiNQYQNSEHUkfw7Es3H8cFyAijc2DkgjK93Vy9nS6fGHuU",
  "key22": "2cJBDaXzBjAvbH7vEH3J1bDMygbMNb6aBNt1HMk89EYDAcYDjkfs3XPJQvZo8DyZbQGLsVZr2pry9FdbMi5Ng36e",
  "key23": "2AsAHH2bZ5kYqGLdQiZM5yL8c68bZwLSXCAS8mB845FsYWegpfqqYoFhNtgihKf12GaASJH1xwFk45Mi4RuTEG97",
  "key24": "2azdy6wwQ2F9Vsci6LG8zDeR7xBx3RQP6HvZKx7Yk6dGBsT9gDtB6ZXE5d9G957gx2Qb4gnuwJx7PHRq6mTvddsz",
  "key25": "2xNu3CjEMNZAf4YuAASeojMeeTY4ZinFS14FuAdSGLA2eD4Gc5wRgExQr3E1tLWx4KQZ4z5azVc5jMVSGFHcfqov",
  "key26": "2BWYAtJCkgtdDoGk3skdt87G6TYT33wED5QEvYKgagpQMd5dRsuUe3AsKfjqKtb4pTyKjWo83PjQQKUMpudQvZ6f",
  "key27": "27DcKfyZjmuaBJyZS8LixV8xQcFNxtTeZbiALTvRQKBxUGcmVHUWf7kR8cPEb5zCGGDQphrDukgSdtu9LyBPqW2U",
  "key28": "o7N3NDpHnpHu5qGX4A4GqhdAPqn6wdkXgjDLTF3VxkaEEePaRKBFLGg4f6NrxPg15DFPHdJvsh3wtodtFxoYpD5",
  "key29": "3VabSL2h37jgWoFBZHLM2nmftVgwbXeTwKaLb7qJ6YgEBUyZxSdMr48Ap38pSx4K6CAKYGVx3U8bUowSuXc7GemT",
  "key30": "3bJLm5MxVmffvEnBDPeSrpLqBgJ53KieL9PipAiYjuc1gkPYwMcjUB9oEMDuYpAokU9SACpgkxuZS5Zjdb4QdHMM",
  "key31": "4zaD82bbzGRtMceLxhGs6dgwDQwtoVdrDnAvE4VKNxp2hrkim1Qc8ZSR7qE2MiSt7pjqmUqX89CsStWVXyotDiMc",
  "key32": "4RFuGRRJBZ987oKS73fTn6U11pmxxAPkCrQ9X4PSprYgP5aceQnB28sdXN1AhED1yubp6oM4XhVvEBRPe7H8g5WG",
  "key33": "3pm7gWpEWfHasiTWNm2HWzQGvedZ3Q1nxZnCZQP4LUJkJ4UTjSQn7G8nbd7C6AXnFj7KMdkPnaQTPbb4CZihmSRm",
  "key34": "5J1MFDRMTMS3gju2z7z8zCeCznyZNGPstZrdLaP15UCqXzAP5jotYkSJjEmKL7fvTosuAbXUwBWsuKt9uQF7uygZ",
  "key35": "64U8C7RVdExXhEA8GKVz6Jzuv8HSVZ93UQcfGM6tLvr5QXnwJXUUfgt2kM6KKPa4cAjzCLZMDP9QpxdwtfzxJ388",
  "key36": "5s23DnKgjdU2jtgerecvdtXDdQhsHAvnHegKAH7djhfEyJ5Z96rAP5gutBBp57MWdwr3nSmVTxpF6vgnFZPxkTVR",
  "key37": "2tfazm795Gw5AASuPeNYcUwin1H76jhcdJNU8H5q9QRceS1EDnftYG2BySxtoHsSG1CHf3NWqEfgbsCs6CsbFFny",
  "key38": "5yW46zKVX6ras3upRsAyXXfxAXezznfpUiEG9EnTARc4MzxcB93WXnnJUkpAsgPrwyhrQyuBxdCvune2gkFkGUGn",
  "key39": "3eeaNHaRkV2N16uEjqSaVkNtXVrMZ1WvLj6QYZwTCATGQF7AdieuaEpqoQ5tpPHSV32ocwUn5hfC4jUHKC36HASU",
  "key40": "dMmXKD7v5rUpVkyEZZEpsKCAYHRzMvU9XoiKuxUMMmo2eLKgwpvYCvciXiRgPbShZ8uGN3nt8KYM2V9GQNFN3m8",
  "key41": "cM4qMypGbYCFUcAA8wnjoUp6YhsU943gXX5bZhcZqhGcJxCcXbi3BCZpQetdCFr3gh8TpAoqp6EHiKv5pv8wnQy",
  "key42": "3M7wv7WJ4zWob8QaEY3kwjHwsppReuhRu6LmKREnrNUQdf34NyPt4wA6G52gW8GMD6nmsSQeR4MKD92NiejfNDAo",
  "key43": "44ZHfT8t2dHi6fqHmdy7zQgAMQ2iVVUgJcLiuAXKix1gVexsTuATrbMnfRLnVCZ1CM8xzQsChz3j87gD6FqCSfVV",
  "key44": "3gDogZMrZ2R228YRR38upVcDZXdxWxPzNK8NttgPpiJsfwe8sZdfV9qVupCjMbtwfonQNi8yAmwcxkohqfcnbXtB",
  "key45": "3URMPcrNRVgdPWSxB3Jx9bTsKZPA4rcafHd93qYmCnzE3AiCbgCCCgBXvjdp9mGx4XuP8xdhUQdKNVfcrKEArsL3",
  "key46": "Mj1YHCsZCaN9tuveGK73nsvgVT3vuyerfpKXEwJ7u5dvywUraAb7dZnv2dCeErNKvdp7kt5NiMC6KN87FjkUgQt",
  "key47": "3s5Y2xUYhJqq5kKvKcW8XmGt9XpL4JCn6TTh5ztS5EzfVVzbcZqEwtS84JisFAm9d6wpcrgGVW2kjTpNXxCnE5z9",
  "key48": "57WCySrbK9NU4mz8Uh4nziE9rhbmHeuAhGcQ538kXvaLZY53LXMj7AwWhTF3nqEk74Fp6ogjS4xmGZX2tCypLK5b"
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
