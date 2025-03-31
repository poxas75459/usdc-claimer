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
    "U6DqQHwceMMa8csaJbQQd2v6d2ZVSjeQF84yePHAdudtYHgHRVXqoetgmbFodHacFfKVjHczcWwihNiqR8TTKsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xvJApmCCsXfE3PDtTfRtanDLCvUAD23PbH9onhVmLcDxEnCRQuVsxoxS5Q8RY2MYbcHmmz6kZNiRJxicduk5pvf",
  "key1": "4yDhn9a1bN4Hv3y6c6unPfvZRGAGQ6k5VMqgS8jS2jyGZArNGqsCBeXt5sgtLpFaGDhFY4VUBJP3ruhWASPCSN1B",
  "key2": "2RbEtqF9xueWSjt4uAMiFRBCFVvLyD3PjwtoiPWDM4PHzVM6SUjtzhCqN43zMTJrgRz7wwxbYdPm8WipdUSu1gm1",
  "key3": "AviSaQYwxTAMtqCjfu4LLDZB3rKSVfhmpXRfYPzNH2CupXRQ83U3VMnAWmo5A8kZVJXRdxL8M1hHk22kxQxcuoQ",
  "key4": "4w1HQkq83MyunuXVAhuHZqm4fzo6xjXjMXsfdtaS4yaQmHeviHzPo8ZcmL77H4zRXga3aZaWCFQmPxrThoXzntU1",
  "key5": "4zwgSkx4dWELjkBhPoVoh2XNs2oFyUH26LuiAJUhhYXxdR9Q7uiYqjJ3CiGyv2mKLvsLnMSGctYAAfPBYCGhhu3w",
  "key6": "jKP3NhwuJJiqsUJERsoqd7gi12GAU55EN1CNyjbk3gtvRrAjPZ8fDgXnCxoBddQPwuSF4ShWGvJ67Fur1QGerCb",
  "key7": "5febXK2qh4VvxFmcyhgoC9fsDyA1295N1mCh7cV6MyK8Po3Aqfe3iPtMpYac2Cn9iEeuPtBA3YwxhsPqEHVeGRbN",
  "key8": "2ehyvh4kyQgGpN8hSdAhQEjQiUF5G1yd49vzZEHbsQpfxnQLzMbxnSALEg9EqBCpVaZkvZFD6rwjEKtxydz3G37Y",
  "key9": "44X2u4s5GcLfmeFmdUDkwZB86xYwMmfZhmHXCy8tQKU69Spe19qsep327mGbDRx5MBQFPdpq5NSADXct42BfMtMQ",
  "key10": "vxc7Bd8Z7RqFxZuLtEGpaadB7JyMm7FmcTpfLp4jRpd7ShMadFqpWfVZD8BziNJAVz8SZCiXP4JdpAoTfeREAmp",
  "key11": "5gbJQh99ZzT5vMRj5KBoT1mPeQwzUnmqAEsZdqMP3aauHDtW18YK3VjUaPzBJ1MFoENZXoouffu8y6MC24L3wynh",
  "key12": "1ZASmA7sg8wh4XSHt6HvCZFS8dmX8Cc7HWq3jAsTj8M47vwZ296bjGn2xG4BbMtYkZrbxDuH2j4awYrqMtHEzm9",
  "key13": "5chTC4zoUYyU6m4JR1ceJu5MM5aLs1XsBqBbzZYzfaVvfG87Z3MfVpd6JK5ok8SQLU93Qf8QL6QkxTVPwKqXhSMG",
  "key14": "4Bucj6XSg9Mgk71wCDppGVHQQMtjc2dy3d7jk7sEHQYuue3dVR5NDM8CV7Zt6RHex16Bupc5SFnbuqLjutKSwnb",
  "key15": "56c96T3fVa9L1xqCvWVKy4cCW2Nf184J9GpkgPB1fh7z6b4XB2AAwpnKjU3Wkez4jySEnS2e9i6BFupdZ3qnYzEq",
  "key16": "66X9xv6uCNG5EEztem5Gye2G1JBtFG7eWzAi5SZTGzS543vMBpMNwZYWEXUf3P51MfVASpE13s2AJm1QkLpyM3Hb",
  "key17": "2JMM1fYXzoYf9twhkWXo2zrkmZVer1CfvFEq6YpKug84sxkvJwnG67m3zAhRUH5cHPw4gxFGNjBT7VVdYsQhfkRx",
  "key18": "5bRYQ1Fcakdo6ewbFJkScUcvLpXy58jQbUixGcrHEWuiaimSrQKqDemS325yoyDrRBTdAwokR7B4wynDLEW2kuMW",
  "key19": "CPYXWmXkbFZoHy3ohygwXwrta93CJ7AJvTvUHwCgZEot6BNNDdQRuC5Dz3WwcM2EDMEUPqFyRTnqYsx3DMt694y",
  "key20": "5ZM3kApnXSWYvTQYUjdegLLS5EnhmJorpUcMzgArjgSyPMd3weeUiY43wMYsbbE5zCbcbMZLYHaoS4UUdfq7s496",
  "key21": "3d3oJteMtghwQ66UDu1EbrRou81TChVKm8aSHMViZJ3oFJRr6Tcx6348jBaxJYM4u9z48nKXQKcayGRjDB68TSgB",
  "key22": "4Lj1xkgrtoWz2PYnXG6tMrpLPEH65Rz5TqWsvEoFRoNvP6cZzwDhJqEBhHtsW61D3dw8VjUv1ZoQ5vdmCthVNWAg",
  "key23": "4SLgSWHjAyLdhwu5jL7Qaa2DkUomTz9CKkmdFaJcnfAy98XeM2f5GP1MUjWagb2ppL6z3SNXmp473w4fZoyCBPcW",
  "key24": "4q89k7sxYr9mNChz6LH3QFsKvortscp2M63DGv1e87xikX9kkc7AbrLG924X9yHigr6eYQaMs3CTXb6PsCcLDGbm",
  "key25": "4iWYN6NYxDavTTqavosybmQATM7mBqRHXVbUJmURnHNTSRSnSXceWECVX4gtZd1nUdtwY9GTtmfVYLkwhGoZg1r8",
  "key26": "267iquWmBMsNNkTcXocbbccFdFxpuprcKdstPCfE55zcdZAKuM1wJhTfTSFqVpPHapQQpS1uFu16Nc2nS534ByjX",
  "key27": "5fLTktiGzQJUGkBassB31t9q5MwRw7Zx5uuWCJ7Eryi2FD4FWWcNg4T6bhwqJzjuT6a8eQGNKYcCh2mr5fPgLyna"
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
