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
    "xicF6mqW5BPHpX5WqywwWLd8wtbyRYCbakC9RVDH1h9JYo4BbrL5GiNj4BdocEFE2JDCxfuC8M1zJtYCvNBDPpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GQFZ98u6B6q6j8qzPb7q3iEZxsufMqXWPVwJxAYed2QhMeepkxnNuN8vX6VWJdSsQkqPHv8duE5m5jezd5UZw9B",
  "key1": "2LBnvXs7a2d5s8gmhTnP259P9nzDtarZy9oksh8TmcCTnWxFqbn5osfxPcWWUoRYYwSxLrov8bEC4iW7V8PqgNBd",
  "key2": "32jF2JLNUd65LpUzK2L5iE7ryTgwjc7UzRrV6XA21E3DNW4oRCzwiGXcAVuTf6q47CHW5LdKoTzbbAv5sS1fuKZQ",
  "key3": "5furn3axhMNLoxmtLxzv6FAf5yfAz2qq68UpMJaAs8qirbpZK8KyRvTBswaxbMrt6D7Qa9f2GhPVyrQ7xqRT2RJf",
  "key4": "3gL1deE22CPwQ33W8iUA8w39CpP4rxkL39PpKxDa7CaHU3QomRdbZZxdnDCZPTsUNbtZm12ccmZQaZ52F45MsN9u",
  "key5": "5SnPYnKqzAb5eq8gt9Mkp14vNszz41D4jVxGLk1JJHCVLnzrwbQQ5JRR4wgZVbQEBBhyT7yY5xyCwk15SJ8TbQ8V",
  "key6": "4kTNtyD9Zy8DppsK2c5L2cnazDGPgXgkhYzMAEA58irj54XjGy6aF3j4FDm1cjasZkVKm4414wA6ivjUq5EwodNy",
  "key7": "4UteUNWcoaVbfB6FCGyha2sBVZCRVfbAWsQZBVwkgiepZXvCBaYJ2XE4j6cZ22jtZDpfRBqeHGdMEZzGafRjGiA2",
  "key8": "3h5Wu6cKFFa5yzNU3RGhzfDUsfb5qUfuj2EZ4W8kZMPmvvcGCwzD7eRJp15Q6o4DjJtCexJ7F7P8aebPpGmPprZJ",
  "key9": "4J8x7FzpQXgrY22uRf18S5sVc7c2iAFzvSShmKG5VzmVd5SyP9seENGYJVW7jkgKLLWLRjzRjcATMX6TnGVM4SgW",
  "key10": "CYfN7crrR2EdM8cnVK5TrPEooNRjMt2PtAUW5igroeVFdJqHKPwXYNTqxRmwphtx3rE9LNQtoJD9oei79KVAG9H",
  "key11": "5w4Fck9E4zZSUKUrZ92u8tWfezcsCf2U18wc6V3jP77QUtikyZCurH4uS4tYa7TdX4iHU3g2VVRRA331rkND4UUT",
  "key12": "hW91DFYpKQcdNFSds9fE7BdFQvxjXYN3m6rPysJRPYgEW1RxnN6nvfZtaKdYoCkV32BCQY1EQMjraDtQMTDmcK4",
  "key13": "5nBnAT4PZVJWxLZbAoN68Aw8ZZb6cxsuBwtcYyfeVeUJCxUxnoohe7UF89MGvBsxnXfFCspiiD2eTEs9YQpej6KF",
  "key14": "4nMNu4YwgaTHu6SCWqrLBunQxCrwTUEkLX69N1UWQ1XaUXLQAt1PV7nRXwhuw5qQKy3UBwcXhhheos6TpLEXks5S",
  "key15": "5yfzDqpr9qhibhYVTnjW8mshujPP6hoP2hgxKxFimkrHiGZCJuaD1f1zU5bh58BUV635AFmvDuAMajtNg4mxQNyv",
  "key16": "4CHDrrSufWEkGr8MVZd8icydqZZq4uKmCrxB7cSu4iUkPoTsbwPLj4khBTHwXZdbfMGinPb3gdyC5GWyZGrVKGe7",
  "key17": "61eKc1Ud4BQP5GBBmaZwCDzxoCShnVqPxxtTaiqEc5Rmo4xpe5dLgwt8vhXigd8BwCsx7m9agMhvL1y8EbpSGCH8",
  "key18": "5rW4XKJfWyywrLKJvbDEHtKec6RijQ1R5kkiwJYg6Zf7dzLXphbktFhfckzRH8shbYHjbfPaX9fmhT1dMmYWJSR8",
  "key19": "2FE2dXD9U2PsZfD1WG8MwWEn64syDiwmUCdPVTWWWUr1jSLVkwYdKWpm9E8SteF3jv5Xy7Gk6a97LJHcj3rR8QP4",
  "key20": "1o2CT9nH9uGDyXi4Ab2reQHyJgE1EDWdCapgr9rcw4kMsDCeCgPSKsMpUqqqoZG4wb3UiWnZRncdMD4675ECdS4",
  "key21": "4cjfWAdi2Sb8NnQj5ipYWhXLzZfjve1kiCJTTD12ZcwodYXV88WFeLRejwHXwE1qeswuDMZDvHG1bvqvkw8a5wDf",
  "key22": "3eCNsfzeYjKUfVoerDcaHwcQbk6Q9UnXmusUQEMWLuJBAaWcY6vmRn8PX9fFjrCW3ZN22r42BUPazRyo5MWuxaZ7",
  "key23": "5mDBgGeNQTMyiSA9LjdYPPsBvLso8xFMtZtSPmKDa4QSPG85B9u54P7uWdxR6VnAUK2fQuv2ru6229tUwYYd9dQ9",
  "key24": "6rV4j2RMV6UdYVewo28zXrX5LEek1iHW1vXXXu2PenZZ48dHzyZLACuf7Nvt6cWF83b6cNe7sY8kYN1i6ThMgLb",
  "key25": "3bhZhYgkEhrcRUnpDGV2t6qs2iEXD7jejPucSQNhcNTXHapDjUAyxRSdb6KcTCq3QimmK4zAUMH5WumU7AEpKQoN",
  "key26": "3gs4nQVsGAbngNU58weDM5aeVZnuUPQWjNHBT2FJBhqyahKRDcUC9J2DNBZsBEw8CvVSAnjHVZZm9UmRVhksB4Cp",
  "key27": "3CmtoU9nuyRRZFzmYP3f5vMHx3RHk22T5qMLSPrqZ9YoFJqiV9nA2EGi3XRbB1tkxAFdS5648WvWdYsbz7kZ2q4M",
  "key28": "oBB8rERsNQJzFNmMacenAUkmRQc3e3xPyAEzvfZG3pzgpEhpFYxN1nCpK26Hdq8ENAwfriDVhAkzFMFGVxG1HVM",
  "key29": "EiRWx95fAEYEckbD7GhToDaq4rmgzeJLzjheLWtyNjehgfk3P6BZ7rmzPWrSx6JSJN2zbnMeFTQcZ5nmp15VCJo",
  "key30": "3ZHXW6cPumY2oCC9PRvu7U43RjR1moJ5B3sHeJ6pBui7o98DGf5oiEr6sK4ArhyuEGH8883DQTcrCxSs92DkhxRL"
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
