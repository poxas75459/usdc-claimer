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
    "2qU1W4nQroWFbhFD7uA24jv5Dp82VuaQUpKTvF7mTZb6ZzmA1fBRHLcYRgJdgNfrAGCozbQHbw43uadAcpc5YWH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQjXFs954sk3aZRafWHK4AAwVckNLzDDunCoS79mC8qyvJvpf49wXL1qGxJqTF8zsKDzDXi7JcFnQ2AfUYtVtrt",
  "key1": "2R7ZnJAQsY8okj2FCU9pdA9d2HauCYwSS8fnRemhn2qfxM6WWNafE8rZDkmqZZS5bQDfwrabDyEZTiXGLGqQaUNg",
  "key2": "3NTpdRhXQn59hfxdNqToabBpAjETueynnitoF1h5VzHbDgZAaUiuNzJsGFBLAKTpHkt9JGjBEQmN7yRNZxNhRzYD",
  "key3": "3MVuW1c5RRDsbSJBva51h3RQ1igHw6fYAkphHa9Xg4RB6Zs2rEeTtqtbys93X4NRBu324NeNc3W6E7LQ61ge86Gn",
  "key4": "3bWEwpyxgWoBf6LwULwWxVLGu7cghC4paKFGFewFvdw2RuC2HfEGMgjrdQfiqidagkxreu3CgHMtNNrmKUVqctAi",
  "key5": "5jtLgCLGVSBMYDBECP8SR7gC2H7iNyYG7YJuNZf8b4BxAWHuUBo9jhrtrztE9qiC2Xskc4w2DgpAUX4MsxU1aAGT",
  "key6": "5xcBUAi4akVMwe9VNervyEb6o4YKVmmtRNtTBRfKsjSjmbQMnKwyL6ei4VZYkVgiAohR7XVyoPFyumAY9EvZ9oSd",
  "key7": "JzVNcGFvxcA7BQwqN45FspVtNcop36vDwYv8apJVY2mbMFKboEysumrm89Xd3XherqW4Ec9vQxVmmWmpiBqYqBS",
  "key8": "36ASv1PSJvdtCwk2h2AnrFZT1tx4beLDpdnD4aeW1xKrojHVEr5iRoC8CQk4PxRnpMnzHhmFJV95GZif1qc1kePC",
  "key9": "2VFgWiS7RKZQ2kqMGP9njQbxmnJJc3hJs3uEn6gsiMb9SEWrfMd6wrfsqJkFpeicmDPZrQ4H78dFVKnfK1G46eJj",
  "key10": "2qjZZKgNrxh6SgguQ2zHXXWw2UjjTDziT5dkoNWHW4Lcqdh6aDj98Jx1vdhAxies4JfbPonhCCz2EMupKqf3zwNB",
  "key11": "4uCWAD5pAbeDvYrVSDCcUWQvHMXMwqSgy3SqdgNjdXE9YSmgZu155ePQ3SdXngnG19M3RtVAhLFpoWWaKBhTLV6i",
  "key12": "4HbzSkhvSnQQn1z7EmzEi2vZzzpwm8ycU3PxttNibLtKyUMBNm6aLo7YjwN9qZ56XHo93WSL9Gecy2hfqYEsBEbX",
  "key13": "2kpBCuq44ZRLjjqwsR7TN6atpPrGnWc2CWJqLDMMmTH1y66UV44i9q6Vo4qSYTYSWDA2dfwNHXRFiLM6BVipt6J7",
  "key14": "mARU4nHpEcjLzk2dsAjW7UQXrSF2igMnmRns7Pcmq7uN1kXkc91Z5QA9qSLitUavrGH1jRBqVKrAFPqTmHh9J7v",
  "key15": "3zCFhSz9rN7MnpkjUtAHtvt6ynmXA9FhSFCsFwPNm4YHz26YQUdwrGWQ3PcZa8az5QtcnxjmHt8n47Wj7oWzPJAy",
  "key16": "2b1WNX9ekM1XBnDv58isGrX2ZtNzydLTEdxE85VpQd1SeoH3AmSyfPiRgBLW3p7MLZLB9pFY9M3kNKcrCP5krB4w",
  "key17": "2kpU2Euj1wwSpVYezvhGEyz6c6afzmaqUsk3sUgYn5oAVS5zZDdfWJZ27t9gTL7aW8Fbp2vNuEbEtFq8g9H9Nhcx",
  "key18": "5wQ12cEnQfquMzV643eV1qAi3o84ae5AnrtnUtEwSVsomeArwNkXLa9ihF8zMJrQFxM6u6XoHaHBjbPUJoEAwXmd",
  "key19": "3ZK8HHVZs3V19LLRhmdtcR4jZqoVpGV9EErn6b6NuMD22s3pqVMAzUmW1pFqH6xWNF1hZ279528ra2sM6RoXpByB",
  "key20": "29aYgKThjvpc3VaFP7jbudzBtNaLfDZrwsDJz51Hb3P9R73xAShkYvvm6dAY14BtRkissKfsP7PuETp9nibf3p9p",
  "key21": "2FDMAa439pBR2v51E99CGxQPXUB1ZRm1eCTUacAtCYiPvg4mvd3yeJDkzzgQZt4oCwxsopwvFDs8VMFCoTRYpRVi",
  "key22": "5JKmy9rq3DMvezu9aPqXXzfwo1arhmfyNaKcsRDeupoc5iVDFAYU6qv5QPWD5tchhv8TPyFcHUWWwa6ZAUXFSoRs",
  "key23": "4hq5wvXjPezWXvK4i2pSLVbQtJT1Xr5REtgzb3m4Fe66YZdncKHNYAHjrZakmQwD9rQU6JnRTYtYCrQ319DgvRap",
  "key24": "3h2AqFkNdT89fhtTYXXtbjZeqguKqJi5B9wEoGogyNaa3UmZmVXytMCrZfVsRmhCpoGVY4ozV4dnK1WoQUczFnKR",
  "key25": "3N8rwMBzVfZfu45Guw5ng53i7tTkNdXAAD8fj5WtN6txDLZcPnWww3UpSZyZ52K5VAmn2Ea5wS8NEDzscoSnk6NB",
  "key26": "5R4rRE5AMxH82BwVFopGFa3fE2meMjTC2Jhv1Y3aNymd44B3d9zBSsBbCiQqUmjSPS2uEphriBPpoVqHyoDMoDni",
  "key27": "4ZTnTwajCHQCVVkNUDqQdgpoGNYTevEsj3ktQDsesv6vTxdGwVqprEZTYvunmQ4YkAx2tSrSrLNhMQSNf2quh7Aj",
  "key28": "5KkF26J285Uf6ctfe3cXmLAkzovcRpXpx3s7tRaooLQ6X7hprFt8sezZUrr3H9WxAmZGijxaP7RHKGeaf3mR9Lmy",
  "key29": "2z4ZijZHQVWvwGV2nbUSiZHzwXbMVKps4sNoLSFkB6mdQKGNS9sR7HNGZX1hNfY9jQPtmxPS5awKE3Y22ETWtX65",
  "key30": "4ZCHMt95ZHWK6i249TK5CxiNwJ6nUzyNKBRNbignzDqVjiF6ZxXCRP4WRkZRJBhRjinDR7QEQh9JnYJZTR289r54",
  "key31": "Vp2Aha2XooNanjcPd9tCtVUKhkfV8CTzHNYXiiS1jH29YYiT5WkUz8XhiNGr5HTCzjBzpems3dHSecMo8cb9xJ1",
  "key32": "2KPL6sNcgBHWMPL6CuX1u7knLbyPPZmWiV9FPB7DZEBNjk5Q5WKqFQnzCVsGDRhTZ9cCWJonyH2bUn1yNen8ktNb"
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
