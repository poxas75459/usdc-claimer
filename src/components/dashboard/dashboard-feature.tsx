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
    "2Qr35whj5oJqHMSHF3ZzREGsUqUeAGXqBDezCf4LyoJRP51GzM8hQj2KUMExdCwkcY6RDupCi1XEhC9iQJ4Qozpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zE2riBkqyfqkc5fTWFoqaznv4rfkfbBNKow1WApjPqt7yBqACiVYRVEGexMPy5AZcAHCcFWScZDbRpTQ47pUvY5",
  "key1": "acaXPV8B414cA15YdwPc2RvqquJVmdMhkrNxMERowrkL8JiR3oRFeBSyo5GhYgJHCQhfsaFQ8Rg3xvbynToKe9S",
  "key2": "2S5ewE2JTaqDoaiNjhyLFucx3rHRH2zUFFW1Y2GPCTvbMWPhbZBWSNTgehZxDb1Vumi2F35QKx7mMKrAbvfqkjj2",
  "key3": "3usyfF4tQjgytdGpRtbH25HX8jMskwoH7B5NUcHxxqYyQBwvTLixcz9z9hXv5iQDcebquaEajGacawUM1gCxrZbd",
  "key4": "Jt3iTt6YWX3ewGfcrmGN9enC2NWurBtdzqeSMq2VSZ5j1daPypSq1aeJqXqZhAHTpMmeX6x4MKGksJQCKapxsbx",
  "key5": "qZkXirWRhz1cWnuU3626czSbptTKj1HcS6FFYs2ss6YuMhFBWDrRb6beikLeNXhsQj3qVdcSTb6xN6DGiUNTyLr",
  "key6": "2md1LNddHw1GZFyNHCd1rDbh44MhS5MBRhj1U6jmrfVY5FCFX1a2qGy5D4TPfjSkzu6NYoEQVJ1hQhAPg52dDo8M",
  "key7": "49md536gA3cbtRfwfxVYFFEECvauM8aGGwgy93GpqTeh7EGTCQ4zX4CDuWYnqNUJdfTCfGMgPeCyBTn3gJsaBJab",
  "key8": "4nHTxAaETPrQZdMgWZMadi13QibLB9LL2rLa8nZnKQp8tYdNdQYdbDqj1qBUNF5LB6peRfCTZmZHZbUBxW2pSV3o",
  "key9": "4duFtZKTom3463Tw5WoCXUBLpHbDjRRirT7fnN7j6P9dYKCkkpV11GHDHrLgcbGAgHibCfs42YLddvcFz1ucdjA2",
  "key10": "4BibevYtLD1ydnB4MZvdww54qTE9LuwdLAuDZXZCRfRVpVzFuv3kA4RPGYANMMVjvsPe441pQgr9oLe2RZ2JCUAk",
  "key11": "53qVsGkRXHHkh87RLSg4cwdKfYjPk458Hb4QnxxbmjQ4D9c38o5X2zeHK64bmZcEtxf2udnxZzAeGoEsLUwwfFf2",
  "key12": "2RJH6EnAt99oUSXpRw6pzNCMYWyjnidV21WzCLxWTgtpUhbYVuHf1YMv1vzn94zFj1ZMPX5FJfx1Cofdfft4DSpL",
  "key13": "5QgMJxoNyWYjQ9NufN85vWCa61xzZLjBtbCRLQD7gnu1L11y9dJPPhtuXiJfkbkNKLWAjfXL8bfWUQpMAGJkSRcY",
  "key14": "21anNP2YfEof5rpgm2A27SemLWY4iTMhdqds8gMavXc5mRHAAofEL8PtqrfvXhGYaRkTYqDD2qiF1x2Bp2oGueEg",
  "key15": "NEw5A9dqjw4qo8qz4P5B2nNxLW2UtE9PD6mvEm4KRfYJ54LzS1aowXg5mFPxh7tn9m7wTQHjmSvCzo9xLhz8UBY",
  "key16": "3VJBqZXeewcZF5VJoDJjudS97zJAQ43WEUiCMUogF3JtjYsFfRTAhgWSSici96jkMUyik1nNsNCePRUvHngVCSzw",
  "key17": "pLkeWLPdebwmPkKeYVeDnvZFwCRrR2nK8CjFSA49YC44hbRvx87basf3nJqJsKUP2nFSrCrFeAfQnpKVSezHiDk",
  "key18": "4sFpdiQe4EPrQ3TTZVk9UQDEF5K5foP6VXpsj16s9uFRSfsTcTyFmxBqXpDsRX7wfjnBtfJfRU5nVU5uYQrQQYRw",
  "key19": "KqyD3JbEdpHCCTxm7PWXcuQJ2Wk7cHti8wBPMr9PLXgomAbCi3CvgzzQ7EVRkDwiedt9HheeTQtSXVCywnVSM3k",
  "key20": "3HXPTtYokSZGw5sS7B3TF5MdzTafz3q6q4TEUHQtPbYCbazbpRgaAT1yG45iS84PmfyQwDW4seJFg1L1c3S6wTMT",
  "key21": "V9wkd6iyfW7Mkt3cg8L1eowV3pdTXrvQ1b9qguCakUQMMYhZfyU938gjX5eR3rBsr4ntMjh55bQfCyBkDyvhDa7",
  "key22": "K6cGx6ssjpJQHSs67AtW6bVP8xVAz9EBTSuGSVaXh4SkWsuXbBeeEYv2RhZRzbe6iktE8UQuYnqG8xz8M8CUG7t",
  "key23": "3QnjuHnKGTUucxW132Zv5uh9WcunQaYL9LmL5e9f5xaGprFxyqukAJ3TiyFQMYjLbgYS8HAKpcqG6btRWmpy7RN3",
  "key24": "3b5deYsk5Rpf8WdMFGK7NG1o5qn9NeBsTB6CVroqBSmzb6MLU17n3w4o2SvdKCEiranjPfW6Y7c2jV8YGJEodkSQ",
  "key25": "5wjZn7PU4NyEdrvp8mwRA2mx7FvuvwR7WiAX2JiQ1y2EMKjVZdgc6cEcxLkaK93yYyG4HitLKnFXuoRGKFnmfjd",
  "key26": "4fSYKLZaq3jACa2Ni6uZX3jnyya6qdm8LTxpEJCSGcxPGmdoihGJjJKUQ5svR75HSNFVyY2VxWkB7zBqcANf5GJu",
  "key27": "CoZPFWiz2d3BnzqXLwtuUQDSypZMnACLvH2ifiEykWMCJa65KQ2SEpFzYymHMkpkrXov7gdcy3t31CaGjRgAkB4"
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
