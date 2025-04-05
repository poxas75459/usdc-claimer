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
    "29RAhziAP9AZFkHya99BB31jtofVjZXaBJGAZjiYTuCLNrVJ6ej6F3EKL89WFPvpVpCEP16NmsBu3DRAdZjyrDCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t9Adjr1sUNCJrQuPsV43NLaTcTmhrtU37AbfHehrBLQuAbjNj35Cuky5e5MyW5nybvdWgFSSgnoxNLvrRxYLRpA",
  "key1": "3B7ywgq8zJbbmDBuod1ernaV1c89aDuRr6vXfHppW9uajzAuFkELMs7HRMWb5Xup5g1t9LDzpDbCQ3z74Ks6tzUf",
  "key2": "1it3CDWGbZcxWdwVTXiCK1t9A6E9be7Z4AwdxBtnCbGkrsGTEYGSxZG1tcnteQZVtfotUAMbNkFUFrBM88rdHzP",
  "key3": "4DQgkc28aAq6ogBd4ybtXrJLFJBTXuTW9jDGq6gqeAsk9KoeLNgDSQKGH1LUkf6Aa9JqEXz9x9DBRGryRbM3QTWx",
  "key4": "2yDZTj3Na2MPsMjAmd7Fasbu26qVhukrC4yuZBg4rBJevJt1DLgphEtJL4HGdXLHKZCLZQheQSoHzFavVqEo7cLz",
  "key5": "4Cp2f83p17GLNpvbKQtT7wucdWPsEVJiwQkU8crygYcPgnRcuwiDwHLUL32WmpLJoCtQh6Z4Q7E5gG2aMJT1FeuT",
  "key6": "3Up23ZSQoC9RWQgbYKYs4PX9KaQR2a7USmqL1ytSL92iswzvGHBjiyA52AaLE8sSLVHTvNDhEh91vCjaXnQvCcyj",
  "key7": "3Kprwg9u1tTP7P6katuND1WcYL5htKjfrm7LN7vmWqvwLszepQjQUfd52EwJ2AAbPqKAvJMkHuwjm9bVZPNfHddZ",
  "key8": "5GZtzsBqcvR1VmTJhbavpb5DGmm4CapJoZBbvnKzB5xf7uNeaeAF2zssVt3ygMhm4gr4TvzjRFaKRh6vqYX7tECY",
  "key9": "25FxsD9aARc3W7cmzYFWaWUiT2VXh2KdLTZZB4kS1KPsRvpdNe4aWCTE77GevvWd7TLGDa4E9sioVEv3MsbSSdhN",
  "key10": "2kD1fifDYreqM1kKU2astzJvJENQA2LLk3dgxcdsSVaArBeSqZxteiftgcJtD2nDHKvLSZZorBKSM5ECeChNtH4p",
  "key11": "2E44Zd6GAkEock9tNcJZts6kWbiaz5ok5KTzQHApupCWzncFTkkLhSqBXSiaWW1FHkK7QqfvJqzQdN8feAA5V9PG",
  "key12": "4hpf6mkF8kZWrnfwoKck6Mb8XmtZ87YAg3kxaYzFi7awMxWJ5fFqmHxzeBZ8Krr7SVrDq8S4zeSHEFN7GGLwGrcv",
  "key13": "3Xy7SkGZurU9WoYf9KD5RSTZs3MK3tkPWZ8HSo3PwrPpe6webvAVeP6GCk6RZKdBjxpM7hjkMbSqLvhxyJ8iowXa",
  "key14": "5GtGAWnw8fqv51ohKgrWrq1AVWQsiuvcKky5u3Tho21sbg9HkUNH7gpYL6Gbm19AqEtAo52JHDqaA74qxZjiHTSw",
  "key15": "3weoKhicMP1zqPcsHWwSM2PADSdKhe1Uz7HjZ6BARsmcVDkwnuEtD27YDYT5CaxqB2bofZu31c7Nn3QQGqo9Py9E",
  "key16": "2R8AfEXVpiTcHBYmiwQqLiwF1D3VGRfw52ygth2XYvZiBWDievDQH9tE4qwcSwdvJcypHt1A9A3sezr4ebfwtDm5",
  "key17": "5i2vDx2xwckRg8icrYiA4dbCQuMoPW1Vgfe6Z1Ak6ppUaxLVM7Jz3HQonjFS79jwwMXcxEmNCHKjzQJkZbiiw4LG",
  "key18": "o7kDXtSBnkQiY4iYYS3CYpBW3TFguygprXSaSgTZ5fXGZcBYpTsHmK6G7h3iqZDLDpvn7rr7QscYaSLfGNt8o22",
  "key19": "31DUJ6qudSDLUsqa5sbBraLQoWtq9XS9XyGimG2pB2XMuAEsosThbUYAftfk3vaWX88i1ssYN19DqmaUtqXfv5QB",
  "key20": "yS5hUc25BqqXT9vubtsAaE4dFh3HhaHGLvdbiTrxs1eYAbzdWvU15hgi6Lf9p7XEtHwj7eRFwdMVg53w1Ay4ZnG",
  "key21": "2SSDWznNjXetsoFJcxC8vpeuhRAgwpKAc5ekqD82aLj1MawzwEYMpxnewo5UM96eVr3ZSPt53ayB87RAJGVas1BL",
  "key22": "5Gi7saoe3oXLvTJswoTes4EvaD33G9XwBSm2fU7QPdhB9qM8wQNhtE1gBrf8P2cKXxx9ArkcJTzTZdfpWxeedJ6j",
  "key23": "3uoHRZDgNiCE1AGmiuExciNp1xyz3Gs3X5cGR6GetuAr3eRKs7mvA4Jue6D8UhBWJo3MrZtVKdH7KAPFzCE4CCTg",
  "key24": "31FFVbV7tC4jbpERz8FwYh478mn56rm6CbsG1PY45m7bj7S5qrcoxFQGezRzPe8ekzHqXtkyXYgBcMeskstTD7U5",
  "key25": "5P2wDS76F3SYrRwW8s3iBC77e4nMF4YP4wkYBvcJyCh2PF8vJkaRSDyiDgtMidZ2fuHfb3dse95SVYFWet1btYPF",
  "key26": "3VMpfNLAb14E4H5BPaLgxD62CgdPRLTnYjTYxMWWW8y8LVECm2wSkja7Lw3gjb2gDFCVGNJnvJyZLY5KHN4UzB4T",
  "key27": "2pJ7ZMZMKotBUo6EMxcnwC26KkH4A4Uf3ZvzQYUReubwyUSeZaMqZpHa56jbtHhsaCiyn5eGmSUY3DHSVTzGEtP",
  "key28": "kF8ZznipqhVj5LX3mtYjnXeVpz1bL41p77FKkokrpYamxxrHYZV6rwE3QzJDXFfX7XuGfynKtKgafBaRSw5kQhb",
  "key29": "24uQHiwhCi5yN33E8a6XMaqrA2ZnJ8UcZdUKNvRfYVL26CVQ21GMrCL5sW35eQsWkLNmy1pSQw1nZjM5H2ZfQgAP",
  "key30": "cmeusygdhRmCwURLAhJYZQCGnbFqkmrhcYM1wMeHCy8HVH2xGVfmx5H6eiqJpVe6WiMGy5DFFKBvNmWfEqnPohY",
  "key31": "2yJBaHjo2ZRxh1JuHcfMPkBWSPKFZk3yamSk5RdQ6n1hQT9yMf8FUuXHgL16HgvMUvrfY8CWQmohdJk1eB4GjZmy",
  "key32": "3mDP8Dqz8tgVKmFfkmP75Ho3hne4ukyJrLTA9Kd8Gj7yX2Wn6Co5ncTfXemhSX1hsuM1tvXcZHvzymPUyeP23jvc",
  "key33": "3domopAYtGL8UYCur46cEDpzUaSp78mSg7KXE3gGJnWsnBVHatu5tc7fC8XYBXXVdFAUpwdvGQ3TYrJzFhGTLFmw",
  "key34": "46szHur9hexp9eg1B9VsMniWCLLRxCVaRdPbo2QoyYktTrJmkiWJQGJczRCt8jgA4J9aeFb21G9g1Hr2po5fBwA8"
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
