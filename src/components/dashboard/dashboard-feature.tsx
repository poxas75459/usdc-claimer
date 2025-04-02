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
    "2M15mQYGLefKGozLZhaDTkS6iZKJ6h5AF8d4nj94CqP2NBvrZRSswEHpW9mvSrDdHgVZB9yXTCSwsKPCqvx36WbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A9o6NCAmziN8bySxAikcFoMQiZgGfMPyKCtGCRQHai6Po3Rkymq5nL3qcPAbwKYdbHghHcEGdTh3rxrov5AFdyH",
  "key1": "5DwNBGa3zt9R2mNwHtHbfg49bi41HwSb9TdcLzFWBHe6jLLKyr6DxrEszSHTXitJCxQuLHB73aPDVwBDd95YToFv",
  "key2": "3wPC67k9JPP3Tc7TdcPecJ7mjwBGXG8EwnS3GQCDd2wBNWTjkRp93cnzkaJD4k73s2sEuN9ni9tP1MSmfbHBj3Vc",
  "key3": "4PPyKq4Jhhpjjmkc2wohCWwbkSV9Nsc7Cjgm444jo5yY4F8Ab7cMAVQ7CdgSAxwcmHg6NWXRqLgXMomSRTPVHFeE",
  "key4": "2bwDVnLY59Hy7HircK6BpbZ1UqRQ6y3mNCm3a2wK1sygxAfuNLix9xivVot8runrBg56cGq3za4Gy7EN36asx17a",
  "key5": "5fXpC8oimX7jX8kFRhaWM8cCgtvhRHhdDZDxNGDbJWLPBtFsb5oRCKSW5KKrNJxXetyWYpTA2FxEkTU778mNjpfk",
  "key6": "62tVVj29osYeEeArotzTYE5vBA6eszZxfa8yUKAwMeUQsR3toVDTzb6wJcwYuu4TTrR6j5vCSvLXhs5AtckwtewW",
  "key7": "54epiN8z9s7JfWPgT53aNFQGPGze5EPBBuFwWMtA5YDX5gZbnwUbZBZjabMPrbEc4ZFUbQS4c884YAWS4xGWXLQU",
  "key8": "5Hj8X2dWF59fJsHDoKwt9jBZiSj7SVgUivyHzpumHkpWJPCnaYELPg6Zm7m78q5C2DPkZACeA8886MFDxTjzUXtd",
  "key9": "4o3QEPJivoCLz3RFkqD4RbQmLL9A9QmnhNQucG221YRdQS3p2zFCEyoNkzavhDk4QwSbo7CjXhphMdqUGFe868gB",
  "key10": "4CiXdEU8rDBgPZq6wbtDg76FtVy44Mfx78TMemvizdf7ZPmzbBd2BEaYrjwVYKNhz2bLcP6CpAeGmV2tLkLVuxZR",
  "key11": "5cxy95WCYT4AtUhy3RkAhqMEk3nWrSxDhAtQXx32GXuzgQJAuPqgGbhQfufCZDHuRNRpSNTdZvAzVhG9QnydQQ4u",
  "key12": "4enffxus1JmePEc5koUnzo3mr6kAg97vCTacCeXRc3sN9BQPqNT8Hu3qzJHwj7ZpDcH9mma6excwogQeRzxKy7ZK",
  "key13": "24UuCLftHodoLmBssPdSkRqQgbhxoixyfmuFJLbmt8UeeeEipaBe1MNNF3gDm98BxLtAHQqSRbKi4ewfuEvc44nx",
  "key14": "33ZubkKAJYVtqbfrvFny5H8N92YLFrFvjPjBfC8pYakGLJ5xVP2pwL87BK7NJJH4kTXCF6wmFL5S5RRcCb6XdkWF",
  "key15": "4yt5LwNXB79UoTxjGwJqQ8TK74jgA82LSBoW7TYVJw9BhmTEq3NU9cmKQ61jkLoCz9H79RU4txWo5wVAS5JuiU4m",
  "key16": "hP8JVtixWtA2eNYbZdo9ZdyuQ39Jyd9vECfLgGUFYv1fsgnoaYfqfCAzQncQgctism3LQC6TASEXnTv8eLHBBag",
  "key17": "4PeecsKe63WpHp4TpsKtF4JZ8iDEKQ4UuPj7TPjj5U2Un697Nf6UsYNPnGCDTsw7H5BXFsybyRYDepdVvzXjdaJd",
  "key18": "2SSwRdxgu5DPkgB4xeKwAKMBuFFHwHVxH8ME4qQqYdbiUCPay9stYAHvRbAY8qN94AowZvZ5NSfaE5Pwz6wMk69V",
  "key19": "499eLR3bz3zumv9Lp45PFu8qes8LJngqZHGpYiDKDMPkpqLxYQFbPe2rq31a1YsCrfbxXPbU2jmoDziAdqEojgMC",
  "key20": "31kfwMxmtrXAtekWRD8tZk4i9QziD1mfNWwofCohjQMwsRSQZsyoVfvcUoMfftEqUTUf95aUbm12ZKXstRKVTUCv",
  "key21": "3g3MsRKevEfTHi9i4fdzBdHbWABxzpKr11CXCn1GxUySq8c6G97zKhookykBQixTEXsit8aT3MWyvQhwwNFPrPG6",
  "key22": "3eWxpxcdMAzi7Dn2tmkhNxP44spLyDxg6CBHEzjjH7BVs1EhEBGkgSeiyjXP1t94v66Bpbfp4nATwSHgxh3frcBx",
  "key23": "5nfLJCrzc6niMvEzJhhGgDgSDrtnrEvDJdTG4U9ZebCnXxRriMTAKHqSq9bE28i77A3DDbPKmbrLjwAi4vMzfYx9",
  "key24": "2fgKeufFD92cMMkeVAwBXuuhzHvYXeYiif6N18FUgBQSUHZ49dExpSjA8XEgdm6UX2Db8rUZAKumE8GtEf18wG8C",
  "key25": "5UMLrjYk7mJDC8QYYPbESMwoBvzvL2y2eZmStpy4zeUzq82RHYb6FcUsJB2JytZu6F6pXPtejFpqNCaseo3kggSM",
  "key26": "SjbWrX8EN6PQC8KkMLBZAD37m9mn4jQipvXida5E1hEoKq3Kd3yNnAcmeDNZYFEM4NWMpdPVebvto1CyajaFJtV",
  "key27": "3uoP4i2wF5vw4bHo54NBhGw1ZpFaEdRaxZFPxRG1ab2Y2yMQVXPkYakLRYP8STtRkCCNcALmfFmYzPTqPfiSD4Lr",
  "key28": "22EeEgK4of2LWTPcFjHsZ2nRnXhi1UPYM1QfWbp4Kq38GbqW9EPGhBcW2Ww6hTYmJrCJKNCVppnvjtArrPWRRPvr",
  "key29": "2TtKHgFyfSSk8jg9KgAwLn4r8p2Jnq9rWg1srPt1MmTai9oNxsFoMUstzEMJGWVBbdHC7j4AAfsxVCky4wS2uMnt",
  "key30": "3A8XTbUYHApFWU9QVtN8aLh6RZAJt1b71NYn5StVMwQhEEu5nxqQyBUaQC7K1CG6wKfbYdRCdc68nsmxnGgWFFTu",
  "key31": "2sY7CHbYCHHa44sg56SoxCLWjmvE5sA4UxEHZk619cDQuZ44xUcPf4ex3mioX6Z4LBKUGDdL13YMpW2LrQzdtcMo",
  "key32": "3yCtBadXeoVegNcjeWfedTxrpugojACKXpem6AVk81eJ58iXU4mhJF3aN7ARgtsMUB4e7TNeTEc3kJL8zyYf27Mp",
  "key33": "4d17M838ZkyDYfLoY2nBr2YcqGZXsdjuYZ37qdiM5FPJeh8ASgs11k7PnDCdAjwomeqBHxqySFSSoA5715NsY17f",
  "key34": "3xrBL81CrEVDKc6J7DyAfNUe5Vb58QAAqEGjpQxrHdrJJwWVmUgpjQwRLsxT7HEvxQoFuZTqu4p1sodq5wPXW44Y",
  "key35": "3B6mW9iAVzZssr7tWzvXM61vwb8ZVvTN2Qi6wEwv6pxezdLxEYcadWp4aH24BgWnD19WBjbGXEvSZAuG9U4NApto",
  "key36": "YytWyKHPUUEwqEwkbkH1RiZHT8F5MmBpN7tKbZ4JCb61tJAfjS6qrfGgZuZuxeHuYFK5tbEm5j1qBbmcRjzLCuX",
  "key37": "4sPi5HpjCZGAbuaddhaunzcbUcKNcogz7VJpHF6bPMAgjEvbhUYsgNpnB34uiacqn9atALMG1VSRJBfPVDrjyY8t"
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
