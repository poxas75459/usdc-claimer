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
    "3FgZ8jaJVVfDEQ8kz2WysxefLSUG39cXt3UYBYbTB6oeUMM2HzyK3gcCt6ZzLkgeESx17rf4gJsTuEQZWUf2hZkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36xLnCmjhtHr2EHG1pv94gu4CeLC2hbjqRpq4YTeF13mzdThti8GQAYXVMz6Q6odwXerQknwUUY8ZfqJ382t8svd",
  "key1": "38VsRVGWUyyAooezGYms3AAFTwDR34eeFLNU8bnw5sebE7kwzS1Q6gpf7pyCJPMwHhHKUB9Y2Ud6fYLE7bNQUrhh",
  "key2": "57JywEDfTiJ911NFAiismJ4tJfd8UgKkcDGTbddLzvdZe6JdW5Nkf2nrC7Wxt2XDCwxSedchVvM5pwUGRf1esiua",
  "key3": "zmpr5SoFZ5PALQ425LES9EyZmLnKap5K89V9tU5G4D14FFGbWdvAzR5DuQHrakVzzdcDMsAzX6WnysjJnCtB87J",
  "key4": "3cGN6dQS5A31Qh3WYDutZ7KPecEFKK1hgar5YKkfGvrd7fA31Kr2K9Yb1ZP2f9ZeCqWhB4mbM3ejoZ97gSXJiN2p",
  "key5": "59E5ypJh2ymB8qS9SB1UsPR5cyjMfMk88xvNSxwBvG8Cu97kuL8QCgobPdLJGbeBhH94yWXx3xyVGiNprY9YEBhV",
  "key6": "2LftuXNY62fYwnPVfwcwH1drHYkjai1ayjgr45u1PqYS7enL17JKwRik6xkF1SJJcVB8urrujucc5P2zTs9hHcZr",
  "key7": "wgAPBsPSpvpZZx4b8ZT1ZZPzQfXsLWtPNXM2mVPDMc3YrFMq6v3KbWaJF8VFKUcU3H5XAwQR5mn4AQ13NyCxgQE",
  "key8": "XKFYbAFcy7NGUzSHhhKLCPSaUbKztwfSFVA6NmJDfX3ZxzijhDDcAp7hJ6vt45nVJrB2n3MWSa6g36pgcCNVswg",
  "key9": "3XVFKqXVhZckTHPhMfniF3shBTU2wQLZEVqqxjKy7y5sRxMmHWDDvUk27JPhnveCodJM8B6y4Df2cAkFD7cmA7UF",
  "key10": "xWztJwmDS2c9j6ySj4h23h1qHRQ1G8M3dqeh5AgSaHiJHikfUZc7GWk9ntjgmFCbHQA4EynNu2mZJZ5EztRhVRv",
  "key11": "4sr4cghCXKb4XULTxpQtnSufXwkVeE8QLvM6k6nSurKxv2gYAk1in1Z7aoreUVCHBS9v5k5Z8R1Tu4WMaBDZZL2Y",
  "key12": "3LRhe8APPz8jNivitbxjGz5rWEEMb82r5ttgr44wndzd9znbQua1dgi5rf9PqoJutPn1bxrXyDvjk1KE37tECR9J",
  "key13": "4JdbhL6rwyJcvHbzWDeWLXQGc1rmEC9mdyM6kxU42p9hJi3PskqSAeteB9Xm5uUHErJK7pRDsBZ2cVop57rigdVz",
  "key14": "qp3e2gEVuEz2pUpt5KP8cT1J16LvEqQrwHsWmDzgfDMNzCLicLZYBacHdJgH1mzUBv9Edt9iBfCZ6oormAaAVp6",
  "key15": "47mZMPJMXKosXegqBgRwsNm8xCc2dfeFeq9m9d9sXVY8f1D3cL8FJGqmdMBB36WqDWjP7idMxUKAbxiqFUE7YXmx",
  "key16": "5AZWx5PsobV44Hn2D9AUhZB66iVkfdx8r1Q5vQcfAeb3jRCCpySYLhDdUgR3NxBATzEJAQQJLsfT1Bdh3X1i6CJ7",
  "key17": "3yUenJEwP3uE3et5zB7u37Hu42Xbw9q6gD8aQuBHkvmPahmAjGA66KFWp1eRD8aQ6MTqhisBEcEY8LpNpv7FsBBi",
  "key18": "RUWtNePX1oqjBMPk9EnC2n7xjGzjdfBhjxoQVjcMnRuxdejtQxpGWc3A1ZudJcWTxzA6pYAUg17gr8n71a4zZab",
  "key19": "34napNmP4425qrPTQAv1Yvtr7e3rDtB4gfsw8mTmMBvGnL5aDVAV2T84GAsH41LLSCPsLm25fPrDAsQG5rpFqRk2",
  "key20": "5FPUTKPDhEajXGWDWjrjDscH6ufPuZpaW94XHPWd9jDB1fZTpPge3M24L5GXYt9qu5cHnhm4vhsjwjdqb2B4c4XW",
  "key21": "3kcPErVPQjnbjnxoCDvvYGN9fNzPFrtMTgDL7tYVQ3AuRkZDqpbJpdHbSA8eU9FGdBL4ev1545Bxhg1PfrfCkoaG",
  "key22": "5Fu4mP6vtgEaE9ysJAGbuGoMJrwvru1V6VpbnM54V3JqZ35RquqHnQr6WfGcN8XavxT1qvHWYAnAE75fT6fgJqhK",
  "key23": "2sAq8pekZFyEP3odvQekB8gWsScY4KGhXNXFnyf49C3YGdHc59xLtE9tAgzLmB8NHyegUQAEsiAtPDaXc9B4EEKP",
  "key24": "5wHZbyoRidw6Z9McErAE4K1LTwb59UMBEgW2e3kNiUqdG4Pzqq6TCxgre3tZJUxKu96zjE1ExtcsNF9AVtMeSbWp",
  "key25": "3i9YdV1RWN4pK98c1S7J5YvYca7ohXypDE7J2ZhCGZLHNwsFtDpBYHXdFn4ZMsgUvUFZ1dcxaPdgHMZVBQ1HjHMn",
  "key26": "3urvJYRS4JhtJXy85hzncjUBgcbgpnRGTyZgcT9Ak42tFFLDDk8Ygd9g8YvVVBKVXLD3UbY4Dxvw9SkZxASr7oPJ",
  "key27": "5HTojS7T6CoSm1gbiQAL9NEvGR6k7k621zg5ftmicQ6qYspqPnwxkwv2vy1rDCYKBdDWpdjB5zHUzDgLRAAMNJQN",
  "key28": "3iMsJ5xhiCpJULFLno4BGtANMxoV5yNekL5kQ2WVmYboW8Fx39RMYt9iAtT1DYhLUCvCwvYVcwfG6CCv5KG2HtXC",
  "key29": "4onDkWyRyHgYt8e6Yph4Aq4PMCnfU5QiWsVD6bMFbybWckFrfuCrnRYLuAgRTCpHhWKV61dj29srioMH9caYqzBr",
  "key30": "4XkgTBrctqEn24rGteJXH6ViGfWxvfSWff8cuHrKGx5Xpx6cCcDXK6t7npoYYLV2MdLzFStpQF75pjh3SEh6kVdo",
  "key31": "4Q6bwZYTAMauDjMd5JC4aGuPbAiiEhL7YpSyEdnQ7Zd8ETUfQ1EqXeUiYyaUjbcP1sHpm1ph8xbNbqq8QsEnHws3",
  "key32": "2K8GrWCMrp58UUXaX3sFVzuvRiF6SqjqDur4zvkBcWmc8K6mKGgzSuzfYk7JTjRhgjn8CkPpRghn9hwFZNTDd2q3",
  "key33": "5gvyKVNt6mzmX8QhUqK2AwrmT9AZtrVRKTcHXBZ4EHhCrEbt6jK5yDggSmWRr2z6jQdDRTbDuHLtq383NY4h3tLd",
  "key34": "64MTBT4vstqrb6KMD5YR7wjMkBcwkz8G5PnZqRNXutGtxX4sv56JbPwUA5iPvbxHdRPRwW4a7731TNgwMp7aBuHL",
  "key35": "2ig9SnyEDtb2hFNdVynKddoWbZ1NHTsdmUNfF6cLAUNdGdhyfnnNGgCNCCGbeS3oRFbKkDCqyeDVjCewuibL5pxn",
  "key36": "4c1XaePCFteFV3CaRGmwazmiZaoCB6dLDQxGkANfsUPG3Xr2rSWK9nX5JtYqBdJ5PKdWsMb2k1qgPz2pkGCALrVr",
  "key37": "2KLeryTWxnW16x6ppxSwoFUdzG9KGkokiWiESWHjrMKGmSgHcRU2MsCSBtjXmEBCYmuNFcRKAvajox9GLviVkyAY",
  "key38": "ihyuH1TC52yBUikxPqFLhxYtddJDXSmjEnk7UuYgekP1xCGTVcRW6tcGiMgnH4kgJu1gzQBTpf1GTzHBnwb9E3B",
  "key39": "46Vmv7PvbqrRsyvobgy2BJufdudFQzXTRHE36jqcgZ21DYUjW7XjF7S6atNvogrGKPSdLfkjGoEWH899oR66cA71",
  "key40": "5q3SA3TqLoRTv4wEEVotVGn8D4N1bWeexB6MMjoJqX2N2LhZLMj6PkHMFjXTmn2CPKaa1B5Drk4AMP666uVy6Cag",
  "key41": "2doxtU9kQmGFMU8dSB8A6uKxHvYpMxef6tddYEUtqykijq64QNW3WJs2qy86gMjeHYBrThDhEz2B9TUtqr5cBYrQ"
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
