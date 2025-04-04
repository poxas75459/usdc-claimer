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
    "371iV2x9sfKdXjqT1NwBeqMPVQLMye5XZiAp2e94uLsUTpVu83kkBRYV4v4cgZyBgL9wQsFXPx2kA28ZK7jUMJjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6fN2puXHqwd54q1FYY9RD7bbCBHnQ8sgt2YHJPm3ziGC9qLd5zgYkTLftkgkkJ572GUr5LkvamT9zQJAjUmFrbS",
  "key1": "XHuPKF68vQi3Pu5N52CA31Rk74A3Q2JxwDjJqsTxGuoJouddkiCCHEZxaLNzG5XL8yg6BJ1rBtAV56px8oZp49G",
  "key2": "5TZUQoDg2mdWaPi7t17Vc9tUvUwcVqmzLvppBinzX72pPLfiWSepA1cExu6T1tkZWmxX8StVAB83TvjQMK6Jxecc",
  "key3": "3GwpV7TV9S6hpYFn6gBovE2tNuLERgBKbwYigjRwMEgfUxCj6J513e6QJvmr3CAqLofZfjVeivhSZpoT4Bdu9i5R",
  "key4": "3rhbuFx5DDaWCp7AqNXN3QXcS5yb4ox9AZKi6ooZEVDz1zUtjKmLofRLPBb1ewnVKfq6XoXs2Bqj1RfVsYoBokaz",
  "key5": "34fvw2zPEep4R6KV9fZTRroTknzzSw4zWUPE5p3b2bFLb3NFHAgqaFjpt4SDgM3UDrSVDc2m8CLsNjpPv7sZNs26",
  "key6": "EvyLnSXsNMS3E9pH5FTaWbubPK5uRsJ4tjcLd1CcZSqU6stmVn4uZYP4PsGMAXeoXRjyoNBuNE6nqc2rpF8BkDE",
  "key7": "5LayHQf7zV8PbtoQJrHgWDG6bmvxURC1RZL96rkryoMushT8586REAasmTH9i1LYXwdws1gPph1VFNN9xYXe189e",
  "key8": "1aq5FZyTZjE83pxuXSsDtNeEPh85Y3CbpPzX4LZKnw6gEcjmWorxeXrKcsbh4QdkKcvYCbYUgXr6HqzZHbQKcJ8",
  "key9": "NwRUg5J4BS4LtTRBeqjuDy4cQ159U1krgzMn9oGVZyUTQmVwtCcwsWnMEY4jEVUu2wUYquMBsLbf3oyEmTitDJF",
  "key10": "YjDiux4vziLChHNwXv3L9KTFpEqDaED64Mkoq5gEvcV7DKvfzvgKPQ5vtxmJLivCsb4z415Xw4oA9zd7naaJyN4",
  "key11": "pZZoGuued7Gsek8JCqK8gzhRrhsWNpwVfrsBJ8E7SbrUqZJF7FG6iGP3uvWBcjcCBW1rv1VevyhGA686LvnSSWC",
  "key12": "5aBiANFVJ9pz39GSrMBiEC3Dhs9BsJWVibw5Nx63FXnqZeW4cDTmyfxnSmZKHYyceC49zW9MBy4kqVtrbsUg9GME",
  "key13": "3m9mYbY9PEzW25QVwgJ7gg21G1nyuK1vjDxcUvDzV4q95LqAMLicDC4uL6WCenNiNKaTFZaZvEf6vYjJp1c6YDzp",
  "key14": "4ajZtVDgTSPAhBVM9YKaCcbq9r4cXbJb8DVZfDNkFtAvyBMVWg2UtaZEoiBViNK1dhhwq7dXXgdh5e4bzZ3mDvaV",
  "key15": "329kvSGwJvVq8JknLuT8pD4vfStyxmCzigBwv5TtNuodb8dh43Z82Ni72KZxJPWuVtUkhsxCSAFGD2cPT5WCGZDy",
  "key16": "3rfyaYu1f7zHvvrZq11BMWhtizCGTRRa9BKgbqeScLNTAvKCR7xx5hg25CKCqHKrkgHr1myToSD73HrXszCkfpYt",
  "key17": "2Tit8vRLwoLBKknRyrKUrwmEhgKfxYnQGTEU5uvxbrsbd27eu51iGrdJAJTvbqs1hsYx1qz6Y5AbBKnnFeTV5xqE",
  "key18": "59fLcHd7zbdjGPm9yrcGZRUvZDZGJFmE7U1QtLSLdSgrxRjSzKcjE9zXv3CkV1Lr7Dbf5rQXncnjyHLMqaevnsBe",
  "key19": "3UvC5TigGjSowgFjxqKR6fHzHkxJZ51LTmkXh6WXyQbKjA7zzoQgd9cE9Mn9bn1BDXoHeJS992wTc4FacLfs28bv",
  "key20": "3pvMmapevv6VZ9vYbQtxdGJ9RnNb3i2JGaJD3ozdpgfKoWVhVKAPChFwXVy1xoVN855PnZ5Mb7fXdCELRBbBWxk9",
  "key21": "5vNF3UoB9HeCPYZQJssqYbqmWuM46kHLLzRNSf7Ba4YifpbJjrgzVSLWfKBJ4EGDhPDtYUimpVpzhYhS7XNzK9Zm",
  "key22": "513Sc4pUEeCqQvCEvCRvu7VNjBuFV3bShARGz2ueE3UP47da93jLUTqb3MdzWugP5znqts6ZaBG7K68w67C6UHTH",
  "key23": "4uEz77dJ3DPzNVxmqCnWLx7E5K4jtpEe2EB92JWBbT6CprgX75BAFi2ouCNey6UGzYfpFvZw2gpA48D2PruF1iAL",
  "key24": "4caLeGjR4YTF3jzhQTd3AjbMtsaX9ZSdqZAQfEEMoXUGvHFHGgR2pdm957WcAGYrvdYu8j2fSxcexw2ywJ9MsFYp",
  "key25": "rkHDeNEfxTz5CpG2Tc2nwnSUkxxZuywxUn8sg9rKYMz8opeFSv2NtqnU8cQsUhF1rbq8eEwNHLseeXTfUvxmtA4",
  "key26": "3o9akKc1CGFTudtwyjQe9pnn7FxMKWcGBMadUF3TDNNm23NHMdBdVaUBhoEz6rhWnH4rDp6iRFGrXP7qiSWTgd1X",
  "key27": "uRrxRN7udYFdD2A9HfiWrdrVPB7vg2y1KfLzX3cBR2drX5eEwM5fJ5sZnK5V9o7DeFsg6gqkkzuJWcCkLAHp9zd",
  "key28": "5wNwdEDENFLLRwUvD1P1qVv6UvhpVwgkPaPVEVyG2Ho8XoUa1dyQ1uKHMY5QiTZGxHhtTyvCeDt9BnhnvH5bzCWE",
  "key29": "661xWQTc29vdTjv3qawUiVxAcyB3C4oxtdRYKPBbKg8fJYJd6QFDsfYjiSNKxvBRrK1FyMoWt1f2hSpp82sDgRW",
  "key30": "3Chh6oy6GLeWZanE5AVVBKfJJVKPzgMLrhjPk13gPsV5Lby9uy9ieQQjryPqq5x7hzaMKoPL38yBjNK3Loah2W3f",
  "key31": "4J2uGE6Z2t5CHEtyHByyzgAMjUPg3qmo61g32Qts6uppXqmY9gfTioDTbM7CvDs2VnG1V3o7tvVsFU735hdfmmnU",
  "key32": "1cU7UdJg9ayj7KuzFc1DVgMfUuqN2CMzhX964hLnquNdEDoLCkj4ymJuZrPX4gtV1Tgagb7MXkHy45sMyfvaBdc",
  "key33": "keSQ5NEcArqruzHMcZtwdDiady9RJMEYAf324hSzRSrWhdspPwYsN5KKeeXd6r9UkRFUrHPaoCjjYv77bS732f1",
  "key34": "2CER2pBiH3cWYLfQ1UXJco6kGtD1xQNCZCiVq6sYJeQ7tkNWpAtHtk3duYDyvrAaCBQE1rkDZtd6YSCZ5wf4h52n",
  "key35": "3jcckine3L7D85N1XiaLjqBj6FmkkMhDKYJvcdSMR2tdfAWKQ8A7yAW9CJv4HrdJU7tTtM8KTTkojH2Nb3pRz2jq",
  "key36": "3sUawQFenDfHV9yvWWmcTpRdvw4RRa7eQKY5JncFUnoL26SqWbktNQk99iFZouratgwmmEt7tiSDUDD2u1Zot3AE",
  "key37": "3McbQXabPHJBkhq2FxkE7c255RiFuBnfLpc254AgBomsUHupf3rVisGucJgAB3iTPm7L4vnBHirzhYAmKtem8nsB",
  "key38": "x4QsUQa2wjt3Gf8krrwE6FNaS95ENyJ2jxnvDHV1gHKEzvzDh3WWSyKYzg2WmFbuTaTDMiypgP3Zwz9FW4vGsCS",
  "key39": "54FhvqW7whtJuDjGJnz3hty1WxBf4RXp5TFL4eQKMRCyMqQfPG998vVfDtA9PWTamhtawcmw5UgC4KZUTsqwbH5",
  "key40": "58Cgc1t7cpCJYjjh86gRUXAi1oofoMKqRvaJMFr43FDaeksP7rrCRb49zHSiYSGFs9PYsJTTsozhwrQifzJ1dWwa",
  "key41": "2hQGcMsE6JBDXftUQW7m4MWYWbjvYG7zpyWz3VkGMjrbSVDKLUKrmYkKo5SLYBoydckLkeiGF7mmMXBfwCZpsSqg",
  "key42": "51bSfb8675xqgUszjyJtum9e35Q5nNCvFBEorAJbhZDk9SYNshC26G84VB15hxenyWqf19fcsegVo5r94WrwqiHa",
  "key43": "3ukVRTmZQfwggvDuB5PRZX1Ce484ggCmXNtvNZobG1iPGej9WQuAj6vqNT7oq1mb5kH4t2r86LwzA3jhufZhiKL2",
  "key44": "5Zfbb9LTGXjpZqBT8u9PuMY5gbbxELZqKiAG5UqQj82C15kesvqri57cPdS71wYo1wVsC2LUS3p1GXUFpN26n9PM",
  "key45": "U4sFeFNjQ6U84TzX6YPsMnnoSzhXSswi15a2jSATd6ZBmmKx1xLrpi1J1VbyS1WFqSLrQLQ7jJWPgDuoNGbitUG",
  "key46": "2sYMB64cDgFe4RawND7pmEkHLaLeTKDRSJ3CD3hgMup3ubSoCa3VEsLQeb4KeVdgjUCgseBL6PP4Sz2FF642GVv8",
  "key47": "26nqADDhqqeubu1vgApoqGmJWt89QdBPjMu9aLuW4HZdo8VrAZbqadLGR2Kh2972LvTQ11qYPw2t39iXi5JjBi2r",
  "key48": "43AFtLYARTNNwP73AtXCCLmgsbTXff77fVKSjPGCx3cTBxQEimDhQqWYkR7u1X2t3coHQyjCmdHC29U9QnTdWwX8",
  "key49": "4QSMidfcY2VYvm1HWCAEXbRsgoeEKXvEoXvt9MxMnf3jPCmQk78gHMgPyDRhXiZnNp1Ub7cSLoN2S5HydWWgpxGN"
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
