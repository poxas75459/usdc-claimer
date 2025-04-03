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
    "2rQQuoHHvu3dymArDCaF2fsdHEANWPkC2cToFfZhmjMJDb7NfpeRmKWMhcZQV1eJ4o7PBq5LqVdz27VXEhMnv8Ph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSQeMe6LfmdFVLGtbo1Z5o6u45RBmJva9no5DPUodA1dwk2x5wZoMxkoABN6fSAJ7bimFaHF597jD8tEwv8USjR",
  "key1": "BcAomWC4mao925LzHiuo7iG7uzVSwXG5gmLLAgLQdJxaPCFACwBd96rjCAoDr5NJFUbmJB56VRUAbX6dtHjnU6m",
  "key2": "3Knq3s52bVEqJGeyDNES2eMMn5fkus4JzzzywG6puRij2p3rTrZrD9FJCuf3eBS6jk1qEjTGDJTv4nrcJ4u1fdth",
  "key3": "5SLC6puqV8RvXT3ohvrRfKX4BiPNymXJxCXNSgk1ah8gkA45tsJcjxD9ibCQApRpQBLzmp9GGQJUQBaH5sqhpgz7",
  "key4": "5YWkSne8GEeQ548ygjc5t9LEMcBZNffKr1LVUKnwXHdhNpxZNqkbx8BUBGziVfNQr8obpLC53uXKBGk1GFkhMdFN",
  "key5": "2tpy5BcyEfGMCrHWULK67BiU7AcGtouuoP1fFNo6WMiAKAiKXRPQoygHG2cCzVX9c2Lg67t1ZaP6crp7QmgYZYt7",
  "key6": "4WMCrBmvt1D7opHzourshAbSE56SDztab8XqEJGjQu2QQKymu5aD35X1WXX4Jr4zQU9MPL1auFPsaRzKRin5V818",
  "key7": "67CyTNqf4HDw4ivS11a996Sf6jbmoZgcavVKkwVRfQcGazg3F2gqUgypxWFy3KezLiJsnamfKD4NamxjLacGo53f",
  "key8": "5z72whnP22UskpjN1iUbfHYwM3PFh3sxMYkwokhZNSsTJkNjjxaXyQqBgjCXfaPB8jf5eQNU6oAn7FU1hc1JfBuF",
  "key9": "4wLwDFrisPRcnhZeE9KjiA5ahHJ4MhmQPQ7kFa6Z5YqHbcZfNtwmDo33UAw1UGLHEGY7sYSy5vmz4T36zFc862ec",
  "key10": "4fRPMu4qAhDH5sZF35tn8xfKtw4Qn6yULiybgQkZinF9UF7DACfHUWFUXnfyWZQV69MPGosELN3VwUb2Cp6XdLt6",
  "key11": "27aQfj7Hxjj5yuRBtdVSnfrt8daM8JxxpaRNiUPJcCHpBUzrEKZW1jPcRhCgpcHnLNGbXY32U7QmLKzfqZh2Gv93",
  "key12": "5snYaYvqBHfEubaxUiMUqXCfYAohr3tAhFC8dtZwKjgp4izmabz32GeRuoU38KXycixEgpk9xHqxjg8kNocDDDaY",
  "key13": "48A39WKj5QhwZLn6SDak4a9B9nktm65b8wNZj5r4H2n2YNb3eRLwiSUMPm1eTALtDvdY7RkiqvkLuxAgjCQx3Moa",
  "key14": "4cvLbwGyKCohr3T5T8cPqCVCTR7GBqws4MG8xsD7reMoi7hoMguMzNwSs73HuiWuqSxwznZjKgWyU9zrQFZWJuCX",
  "key15": "5euA55Kg822G5f9Q7TT7NoeDE5KBUrioTxSquchVSMZiVGF4VEr5fZtG9YHFuCtTD2w5dDvYHXktonEVdwiDRZsL",
  "key16": "4G4J3Wa1QpNodxFcCJoZkkWdwUvtFCTbMpryRXxDXgHuaDzJNLT4u52YcNY2uH7UjeTUmbcpqRhE8RntQU3MoiSt",
  "key17": "2isYbgHWpsTGP3wszJqbAw2cS2Gzqka9QeBpjbqQfKJPcwxBvmmZ4DqFir5CWAFo23b5C3iXq1aUWZH7UWM7NoLx",
  "key18": "32DTAU9i4fY7LZDnUYfHjmBeLfzHt85UqrZ1MBahwE9nsU2JDsj8kBau2x42aNtWybgSJbVVsmap97NoYBqeGCYH",
  "key19": "4GVCHkwNNUihnRZjauJtG1hxX9U9GKQJEKumnFBmtJ1ZnqVEksBoZ4S67YxjbeD7T3BdReozowKXzGE42bE2p8p",
  "key20": "3umHKCHtSPRvcnCFR6Ar4dpFtPVWKW8CPCERRUDgrjBsrfrLthaKHFWuJz5ZCQKTw1SspcfUf52uoLdYEXocWHpc",
  "key21": "27gzddWBD3Mbsq8ir4Fidba2we8ht1xPwpbunQYDLFEN7dxLWNzwUh37gUMYTUcXbUDGzmaw3Fws4f7oUhd1MUuy",
  "key22": "vSe81E1QQabnT1ppyvbZFPUNHmPBvW4ad5TEsLnaQeYaV6whCa4U5U7m95LinbSaQjNoGZ6hvgfB6rWMVFkAncn",
  "key23": "rTLXuK5kSGYD2GBm9fPQW3VETTqu8zDorJ2wUbYc8eqrRZC4fLwW9SYzwbFd5SyneCTY8FAEYkr8PcWQiPNx1kR",
  "key24": "52Winzj2nVUqMkRt4yJtXpXcxyySorhnY2Ghf4TXZmYfUvxRwDDN3Fy5fq3MSTfPrngb3A8V6pQmrnLBs3usquSz",
  "key25": "4PxRiE8x6kWSvwVgRGEENwVzJn1Wb7R38gq2WJJ6vbvEXA79ET2CCMnwsNVuyagvxwKvyMPgZa8AuKyyuaKdrzt",
  "key26": "5CsnQzbyh1Ft2BDC21WYxrAob9Gs5iDixSB7CvtPUho2s4DYUMorD5mX8iSUDpBmLaLM1SbgU7RJknyzXhKuKnQk",
  "key27": "iypyEv6LMgCfAuzPRhLsFgPNEnLk8hwhHyq6mC7NKRb4v2789aFwqWzfZWmEC9KLERDVi4A42whemrYBLjnWRLP",
  "key28": "3nmrL79tqEFPpCWc7zrSD52ZhcB6Kyo9FHT5Q7iC1G38vnMZPXbjR2CZvhs86ZtqN3Xn59fcUDTYTofPM8vaSoq2",
  "key29": "26E1LnDoYJfQm188J2nqYrqnYz7EE27oPtSgkeN1FTrU8uVtQRxZwF4v53GJ2qwXjq7EjT45hEuuumCK4TcA7AT6",
  "key30": "3EmD4hGYeaFVjXPKvdnxSuEL6swpspKViDRtzjS4vmsvyUVvHyGQpWUBAfXczkLx9YuKY8AeNoAAGX9gA1YaVy5Q",
  "key31": "2AUfexjv1acNh31d5MSzKsFHGFT2CSKdAmvSgbtdGZvZBrSqWgXt7kgzcVTL4WXRtfqv7E2kwLaRpjR6rQbEAMUL",
  "key32": "Jcjj4ZMVgGYKxH7TmEUhNLgMReffRbfgeSXdDSVzTYYbmsXXxBxPikHwQ3w8wwreYEEaNYdZ8NZPMuNB76bzXqi",
  "key33": "2UQ9EVk3ArCXSqSHa6mBoLynBsV9XbgwC1htGzyDPnCEiE6huja7AxoN5hZ6S5sGNm9rmGpirGxLVJNKKkZV4PNE",
  "key34": "mvN2PDGNsPmKnA2eyryjxwiQ464cx8xrYCTSk4VsGrmJ74nMJ2jE68SztPnXdi273KQJdy5eZg52aLsVqMteuUZ",
  "key35": "gs4LUbBApU4QH6bFTsBST47hx1sc8cTykTAEZumk6oeUyt86BAAG3fYrQuoAeSLqeNpA9hsPLqFyw4UZPzsG9qg",
  "key36": "4iLbHaDA9654t7dmdYLh41Xkuxeb1VsuS3JrBS3PrwUC5ioEV3EGHTegxBpP89Bs3nDJVZ5kjKvY9kXdZhnK7DcK",
  "key37": "5ZsEeAYJzmMDTG7RsSqUXqNad3ug2SqjtfFzEKmbKAZYTKVWaroQwMRP5mcZv3CSoppsJJ2QS81p2tcoJsfc6eSg",
  "key38": "2P6Yun6wB1z4X8HDQBnEeLsLW2GwPvrkeN9QDm6cZ5fhuXTnCs5NncxagxqG61zFUVAWfVxrCFwAw3ZKX5iEAEoh",
  "key39": "64LHDJXREYnpYzVZD7vcAD9qrBkWvP4cAAc2bXP64xFKvzCUo7DsrJENcZNGuZVm47jRzfYN4i97Kdz4Vw6HXFig",
  "key40": "5KingFLz1h1iGWDpUnDkEzEd46ZLrbDraSMxLnU7Us6tDmFQEQeysEWwsgFmVeyoDgUv2SMrw5QU7uP1GK7qbKQV",
  "key41": "4zq1zrVCRW9wjzceScXrcLEoGPGGdFya6gJ1wNfqfuyMzq5mndY5XxVqcMkWbMzWzPD3sMz7AvKrcRR7NELEAG1q",
  "key42": "28J4wPQrTZf6cVs5Hpqdo9aCvqaWVpLSPLPEwSuB8AmxsGBgnZWNNRDh1eAgmDTHxWMEmvMgtMKMnN3wTWFrELan",
  "key43": "5YkNAbVi1oA5UvvuYUPKQuWoEuQENZ1NpxMhJHqvGzpwa4y2yMraUoMcMAzxfdb9CwzRuWCbFuSHmsSzey7ZWAVx",
  "key44": "KjkPbjQSvdNmaAFuxJCTd8wKCsEwi4LQ9NSDepqH8bexmDszD6mqGm3actDawwkXBYVgqoXe1XLureMmzsRnKK4",
  "key45": "2DLP6qKEqtJxRKpC2vSdQ2fgktNsLKj1hT9UaZsmN4jeysa5PPo39XFaanjM1Vb1SBm5yM5jzzadnedAUo2e2CK9"
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
