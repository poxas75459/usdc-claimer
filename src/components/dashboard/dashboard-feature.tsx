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
    "okq8QimQ3J9BVfexRGXrUxYi7vvV4aVm6fYPQupDg1vcmgBX99bypvpBDh2NGB55p2z1Kd3vPuNdngWn9VscvCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42zmRNKCdhSRjxuXFw3FK8Xp9HY5fQChdFPVDWVxZaQJASFrV6YYVSFz3qrZdkrNHRA1DrzAs1RW3DXv3LPrPNVn",
  "key1": "3z1mHn1dXJQjmDvHuEZWdDuUKVFCduWnyfmfsRFRaNXWV4BTd54Db8XEKCEc7zvc389fBPyg7cBeNngnG9Uxdxh8",
  "key2": "4ynTYAkReLd7w9sjuWVHkWLUmrz6vXqpuaz2DXF7K1vavB75LDEHLqKcH3V7eAG5nsX7jdHML5Tj4Vc5qxFD4Uma",
  "key3": "2fAsp1a4xBvaLeyufPuzZiNtYA5QDqMTCci6e2nXVTZ6ooZHfpvURo6zXpHDtzFisNpXv82uQrXdkjBnsf2dncaF",
  "key4": "2BnodYgutDtSnsQoUDc6gZDZVJk9Fy8szhx4tQuz5E4qcXXADTv265tGrGx1gPcXHU9eC7drZsi2p2hJzeGT2RLf",
  "key5": "5JB1a6N1iVNpjRkLodMbC4FkDWCticfWftsZz5mDFJ6SK3WR2ALMS8eNBB6kKSGsHUaafRFS28F41kyYSHgzS1nQ",
  "key6": "5BP47BUi7Q1DVxio79DTTcnfRQ1NKcw1fc58xqikECheWnfSdBRzmT34u2bbWR1JWLscEC1849pVHE59D9x5nnVK",
  "key7": "72odEmC1mUEhj7M1HANi8h2H5xQkRvzLWvnQSkfkXdeuDLRqPEMzG5CAangQnThQmdGePpi2bgY6YCCehxVocoR",
  "key8": "4UnMPS7RVTB734VJhWsHskahZH53FnGbJE9HCzmHejpAWxQgK6U1BorXv85ZccYv9GLEgFwx9RTwmxZufDgEkkkA",
  "key9": "485fo2s8LzgmTpzUy5hejSg48VoyHMS6eumofwaBpAUnMBDkCDsh5MEv1YhJGPMQCt9hW6joWG8ifPqPFL6UbiSg",
  "key10": "pduEZQHX9R47rhar4YsutzdNfpdFE5c2QFqjNcjDn4MYYS3wsZUUYBLXsdC7gVv8UrEfwjRvZUqEE6zM5zvYCsA",
  "key11": "2c4EGRWefsyQ4V7uqXoeK2mMbNyf45dSuAbZr7ezcjRvnByrvUhzUWVkdRFiGB2mcd51qCk624VkCnvW3ZfzhSMT",
  "key12": "c13EU5VkveHAefyjB8Ehtw4He9Ayu2tMS3XhbpepYQr9yypcEifJxyVS62PCA8zLSKGcmuevDXTFEbwzgFxGoTp",
  "key13": "46hvJpd3FwstQaWjEmT345GQLX9wCopKM6dbn5tvNH5fEppvGvUfwdJKDXck5c9cBjdGFchx3SAU6uyPofs9d1bb",
  "key14": "3iHBBQgKuoqEsBdELxDhyDDZMK69WcSDTpAGkzQohVX7du1bivhrkBwoyoPzBPRK4CRmYHErD7xu7s14jMNsAzne",
  "key15": "3tk1X8Mm7ZnJ4Q1zwMN2wv8mU8NNYVANUYNnzZvof4HKC8MWx47NBXe2A2FWMgZ2XrwzUV5aPgF5xTpgMzWKwkVZ",
  "key16": "eGTsGpgJDCii5Uc1TPiAwnbMsJMNXzrWWNJ4QcRDnGoMGc7K3Z4rR1e2cDdXmBGgmqrbdp7UH4pgJiPpLHdgkdk",
  "key17": "5gHHGFmsqE2nZp12PC5ZDbeC7d7Z8KnnVmHMGpNzxo2aeVDg4DLGD3cCENAYGion8FAqLPDpdGgpr5XPztN3aeuq",
  "key18": "49ADf4M1dHLv9Ytscr1SVay6dzNJVf4eZ2zMirGLJ2rJGhe4s2R7ti7tVz3nPjjoVBptctLcVsRVJkeP6hsLTU9",
  "key19": "2Zm7DzB3MbBcuAaBRbL9FG3W7DrBnvUvYLBF6N5tZuVVa7Kmk8k4UdRtG4LNghTpz3SwNXtsvvpgBu7FP9U5mW7F",
  "key20": "24atmySWgvbn9JnmyoEhhgwER4kxHgf7KqS55ff4fSDqpEj6p5g62Gg21tGdvUZquqHTWbVhPYVUFWKaFqytfqzn",
  "key21": "A6HHLPdM6MMEahmqpT1MinSD59VWuwD7j5R3ggyCTaF7FdesoqHr29QRMr3TPYemXxLEoCXNr977G431SNKGpmW",
  "key22": "4ea7mcygqD5UDPaSJCw7RVyjxMkkxS2XFsLnKWVBgygLYwnfPGY7e2bq7jNaKRyUGCP3SQMovi9f9Ari5qZ5ShMq",
  "key23": "4roHXYVNX8Aj6ZN9C7mpic6ei5pFfCMjFFHoCjpP61imFr5EytMjyozQifdzZ5xZXx9tQzyAG89cMvskQzAsmUvW",
  "key24": "3yA7z75FxqDHqdQhu53ccB7FTmR7FgF9CKTe7E1nzz5WMK7oz6hJxLDz1HbZp32Zj1oY89RfYo3kqx95zSm3KJT",
  "key25": "wHVAwqzNc9ca3XEQDu7Me6onX2UswS7VUeVQztCcXiV8vsQbpFEFB8UkhnPtMxcJEAQqjhPAWYJQkg1XWu1aMoR",
  "key26": "2Unw75psokyPv6r7zS89f2uB3AxoAEigyFPCDuGu9ixVRpTDiGH6XWk5F2EvhV3e4ZAjnFLAhvcHHA6GGenBW4Bx",
  "key27": "2e7q2Md2n9Q711V1gfhPLWFeQM8xZBTxpAp91tAgrNzKf4xek2WaL9TzRbo5GN4X8T1YoriwrX4gXfooMi2M4Wdo",
  "key28": "4BDDXQ8kukUgxgv2ks46VEzUWwbP9r6cvcgmDYgPaLF1KaQf8GzfmfGfx16uDJW6QtzxGuTUg9A439i3kYdiyjTd",
  "key29": "4Nfa98MaoJN8ZBi6tKVHtngGxQNzgbzRfoGgU11e9duLGyCVSFN5LKMwbxLo4VEu7RQXsuwimYhLyb6MWuiswz5A",
  "key30": "3FZ3EMhN78NsNyQmFUSJ9DWHHREXhY9EQkj4Rg5HuogwKXrDHL3RemQuDJHYXpZPnDGJHTi5VmxT71FhPNEuTr3d"
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
