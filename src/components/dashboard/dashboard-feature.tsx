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
    "3tG7vkNEjNxk6FeHFnPxRE5UeQu5NUEjQKwbyDV4ApQszqro1q6TfVn8LX2pu69SwR2oj41PmQBLnsRaS4zamHgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32doxBtHrFk9eo1NPr95DD76yMVVST2gCdTRSB4Gt3BCzFHEVQLgLHHzWFEAy73BryvLEb21y5HZwN5jWVnzLbsj",
  "key1": "FSG32qdTVenCmpr8ed28ne9w1WfzsLdSsvCrYnR6skLaYUAZh7REVTori9UXMLmwUcgXVpUp5677bzwi4TaC25w",
  "key2": "2W9D9ZczBS7J6c5zGR8AiLNcbnjg7J8cik5ZdeKAbf2TDZU6PPaSyJkErzxEJqcNSqiDPW3acMDULUcwG989MzAG",
  "key3": "4fuMsjJuD67iVCizMcwn3ytiEGMuiZsgs8K5kPoDEN4RguYMhLzRMj2Q9dRG5ZvPKzdjNnRWgzvccGW69MRVuVYU",
  "key4": "4vytcj6sTTPbvr4giR6ufUiVDWLLyoqJ8VVEpwKiZ3nX5MWgrHLjLRGiWenbChkoN3YnW1fbAwrZUxwNULRmANWX",
  "key5": "uBbVQVGpTU1XMYsd6xpyqE66xfQMoMBvbqrWg64fySaSbHCMdyFJVzyakq8zZnsQQKhmvnh8hRWP3jj1LLKoaHP",
  "key6": "2ZWkx5roPjSBTUDqP9r9iwyZNzTVSaUJ2e8P568Tzt449MRFcq56QTkGmdPZPr4Fx4RAENmj6wdn5RV33DK2Btrs",
  "key7": "yiQ6aWGmxYBwM2txGkpPZu6rtqMsNPecoj4PR3girhPj6MqaoFbPhqx7kqG744tc8nZ6ASEFRe2YGKFWdsj4G1s",
  "key8": "3dtcvvSgGLsAgXGMyzR66KgcHn2zp7PXfG957yfbheWvwZkrW3vmF9Ve4KrZm4oXaU4THw5uVuhqUf4Mv6GeSSrN",
  "key9": "3CGhkQ9aDu3XMwGevAiPxsHGz1VEbfksAKs5LYwB1UEcrUP9UiXDGwpnZv7tCb11DEbiahSX4JU8bAwyUX2uVYHY",
  "key10": "2vJjeeDKoKFwrGKEbqDhWWvYystsML1nDCn96AQrFzhFBvibtHpwkFQL4D8VQy5VnKK43nhbxcwVwnUK4gpR8UQb",
  "key11": "53ov8dX3KPAuZwU2EBkPuzUEtxqMMoELNoefvtx58gTwfWMKzKTUPpSe1BtuvKsb2R9taHoLPYKocC65Z8P4FzJj",
  "key12": "8BAzNWv3ijzbsHF7Vi3V3CFxArKit45jVSDXf2sfJo61PShWjtVND3NxauyLLzA2taWEZJYgaReJ1H77NxtcHhs",
  "key13": "3wm1r2tZvWAJs9SgmQ4XoFod4M6BYnLceYwNVnr4U836PJ5vGz1TA3Knn6ySEMhRg1zf8nGqrHLZ4rzCuiLdYKyD",
  "key14": "2pTo6bvaEu5X12YQWomsuT9zGpSdjQArvPezpCWvPGiKHKYBzrnHRtTPR3cGLwQc25BGbvdrQBdJbBJmcujWhLNw",
  "key15": "28BCkA2cjQ4H5tLkpX2qeBnb9fV2eb8DfkEA6Tzixzb2kcPnjhbqxVmjXeLfdhTxrBXEzC4Wq6ZndQyjBxPqe4MM",
  "key16": "65xdJ7XwhCrodxBs2LbaYFdxe7Z3P5KnRuWqsuAezWmRxJxw4axtxQzat7WTe77Ye3fxWj762X6qeUD3SgKXz83F",
  "key17": "2WbdWryAzpTJWH8JZoiUxZ9bW3N7zE2r3y7xuottt7eNBvm4M4aGFHNJ1wj8U5YBiJpvHSU8QgGApMA1vJyA6Gzy",
  "key18": "4afa7i9fpGFvz96qucJXXb1CPeqXEJYB74VPaQtq672URNXV9Y5aWtqVpbQSLZ9Y3drzKgawGydpG5Hi8GdHPmPD",
  "key19": "2hgSxAmkZf2ac9RAYgdsbDvQ9metBwEzc4oRBfcHUHE7SA5fnCpmZi8smX9WyQ94CPQFkLkr2gtkcH5S8BWESirP",
  "key20": "5FoCrPv94YNGxP4kA3jtXk4w9XmBujk6sHsCxhHUYuWFSBFxeZwyA8CnF3jeEdA8UPjyLXSugpEgmWka4ywhqaMm",
  "key21": "3KzL5vz4gD7RuovYyhArLHN6SaeRxDhvNGXYbL4qNWAP6r73njT7JqDnVru9ZahJkTsyCifHCVtXJVbiNP6kPSAm",
  "key22": "4kHphDLTtUYf9udUf6sKBxktyBB63T3EorXZ2Ap6XtAkU83z9MbyLpYh3U2FVaeK8XpDFA59e96mSnvbUKCqDmNa",
  "key23": "3FABTYVC2PKZQk9jJXM9TmtHLYKUR9hQpkygyHLjsNBAAaDGourCdAyx2paCjSKbhT2mMeZGzC3ds5eH3AiZp4sm",
  "key24": "Go3W8YubqFZCJD7mgU36aj7SxZVB7AwjJ2oRtpXHsmQvAEdzY6NP9S5tNn5Vri5w8JuFaq2JM2wcEfKwyWHtgz6",
  "key25": "4ttuyGbMUitE1uJV8pRHdp5fFTZJ5dfPHqgn1uwLk2RaoTBn9qgJonoSGNNFQtNKDPpmrVrEwJXoBWx59yKuqC9m",
  "key26": "2uzy2JR9AyaTnAKnwHjUPMJNo3CA3jDySY1Q8RoRkF2LeGzaLiC5wGrd4J2joKS18CuQe722AuHaNxoGu8JSkStj",
  "key27": "3VyRGgaAiXZHFB5jDv5LwyBz5KKLuiYAxEWL3ApxtLA5MPCkE73Y5q8MnyNhUeKNEwMrsN5hbYoj2fZta4mLyKar",
  "key28": "5oDoTNdRanuc7pjaP8JLsNsK4SbdqoBAYnESUdvmN3jdHbDQGRvpQmEkFZj9YFbzxPbUCWnbApuFQa2piEjm96j5",
  "key29": "24Jbm85AueWjfbtM78VmhrF5HrkssTzNseVMAfttZo1Yds4bWhWpyosZHm4kWFFERdFjyN1XQkVGo4KS4Q8XQG6h",
  "key30": "3reD3vBgmEbWWiZCs31r3FujawJz36FTtVi96Ecc6BjAunwT9bEDRUxZ5VVReXFhgg3VLKkjyVNEXy9VGw4tBHQ3"
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
