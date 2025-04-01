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
    "2WKY7CSYJdnJxdUnb8t8DJFAw1aUWi4g2cuXQfuL8Gre7ihUnK3yMAwfDauQTspbUwim79qfu4hjFGzVEcfPBZnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JEGCAyksyFdJCQWKm5D75tXhNcSkBGqtf3Z767VQm8bbhb7Wt4M1JG2hkn8Gf4SoYPEzRMRntnHQ55bAuZSgwcw",
  "key1": "5xHWHN6aUVJ7PgNDVxPg3gKSwuhxrtB6drFn3WGHhmRqDgUqzVeDGGYh9V9pXhqW238hnHEzHx8UMcnyPBy1BxyY",
  "key2": "3w3oBFPAaNV1NyQCBfhpUVaKs1rbXZ897JMw7P9xdWvXCXdKDCYCEfFpQF5d6YzPrkywazNCCyJpTUZurK1qsjkt",
  "key3": "66V3QpSPnf17dp9NkcKoNDbdDSGa6HdnwPrqz5xog6PjsJMcgnuusKyrLmYWqUGeYqcwdNVWLgxurC5ajbs5xNzS",
  "key4": "2auytBq2BnCi7NmM82neFtF3EUKz9GFGktYuYb4kHoQE1DZUKHiGimgPQBjoDLXUPRYt7oqxzieVrtxnFuQ6KY5n",
  "key5": "5nMWgvJgxrpzWRmfHzongHky27MCBuNMWEVnx9p6ymQc2ejHGqjZysrdBDHX2XB4w6zKmpVosC1ANhA3K7L28ZDe",
  "key6": "CTDUzdPGpYVgELCwHJvATHRn2ntNcF8tNmCtTVxqNiX8K4Bn1hVwSDHsL8M9F5PwBp7RSp2PewKCWBxaDygfKew",
  "key7": "5tuA9Mfsx9WJCfNoiLUQYWxZPgpHZjaAidMPwUyv4DjgP7Drnm2zwxzSE7xuBBCDoZeSry5c3m4KRMWUhRbypYco",
  "key8": "45qHwzZn7KhcNpDw5iRa1wjWUF96NGogkBHzVftuj2fBA8qvHew4qPJmMFGjJAVMePhQK5Q4N86uYoMivPGfPRpZ",
  "key9": "446zptUKLnXTX9aqsvT8pThSFE1Lf3rXn93hw8oLSZAmManbCd83zWNcqbxsUGqf5UxRSCvwAoqJ1sNQYuRbYkN9",
  "key10": "4ZW44pWXB3Gwi4oTm3QygkZux6LVq2E4KdBngLPjQXzLVEDQN7JpPR6GWcHWF85WZP8UYPwkNa5LsUhzn9ikKnPc",
  "key11": "3JPBPxLWAj9znhekG2DbD951J51sLTKz1gjf3VtuBygW1tsAU532rixegUW3f7hbdUcNuYGgsmgxFkYFk2Uw5GGk",
  "key12": "5oQXnXESonasn8WkmiLPGH5FSu1n2hgUb1XFoTHQ9Ke9uaiUq2UaePaecRvWUpUCvHQy3F6UFF1cA4WN7aaMmKhZ",
  "key13": "2b8dYNwm3hUAmfhXACZdus8x85rR29Y8EXFZgMrJQLBFPwCC2sHie6WSsE9wLaETFAm5m3PREZirLF91aPkhFMZj",
  "key14": "x6pbwPLRqr7SRY6A1rpe6vhPyoho8JrXH2m8oBekUZHb7UwmArReao5qvijuaw6VTJzW46mMfozByKnLtKdm4uC",
  "key15": "ynwk2YenBhKtUWCXoshpzzihv7FhfDm9YaHVgNJvhkPr3rYWnDzKRynSTnTU89qfp2TsSEFYYjaCoNis29vgR91",
  "key16": "64wzuSwGKJgprjBbJVJbgAw3MMEPRvnJPUufpF7tAGHdtqTqanCQ7rF7Q9Y2nXDnTtgQAPQ95TPFiRNNEGMwKpMn",
  "key17": "2zPBR6VmtppME4qwbJ6bdFfgh5CKxGthrLC8zg3y5rznBWopL978HFjv1HpMnbYnWvFbeXppmC7KFFLMPP9YqozD",
  "key18": "SrAChqGSY2gkB6uexpGL9oisKY2SiLKFmJugKYYFVLHgfS3Zre2zQpp5v3tEVLMVjyd6XR6y19XtBPjpMNBZGmU",
  "key19": "3nXBo4MmSKuiL4xhomKw3zppixcrQ14rwJRn3emKHMG9LLvf92qBXzx49KLYHgKC8MkcWLXm8qLg7gFExhxoAqFb",
  "key20": "4kd4WzjJKqoo115vSkHV4WBWY8CfRL9AKR3ipgQ8mxDAPYCkb5U575GkHjy8gkdTgBb6TRVMq2zs965m3y163zNj",
  "key21": "64V8bChJ6MNAZmHiYTacncKGx5xghkAQhGjCJrQ7w5baRHrC843wokGvAbGM7SPasxVgt77nGfEXUiAArZAEuBTB",
  "key22": "2x5Mpm3NznY7qtMvbptE9vuW92EAvMXvHkMdCEAdSepbrqmRrzGnr2EnYrUBahn6JBezC4MRo9aGy1H13xRXKsvt",
  "key23": "2y3NnMyCwAAgw7n6JL1tWAah1WB3x1nKfhUi3jKAik1AYZeTaXF7ARVc95oDNqmAT5sNUeGcoQ5YUbMCjVGqfN8M",
  "key24": "3UZ8ZviFuxqjdtMtg3CH4SzkESfExgtMNAqgKwHZqJuekYzewaLDQ1gNg3Z2ZofQBhvqPrpH3qVxmPvXgaWAb3H1",
  "key25": "4mdcYKnA1tTSfn8vZZqRR7H8NwEQg55h89fwpTrSZS1xUobHyrNRmbyH8KRkhG67t3FSmew8S1epvZA27aws3SH2",
  "key26": "29zhNaPpMxdGSqQg9gKBCPWf2wCJsqdScXkgLvykrbDtVHCPQFff7ytefdQoKQERywAKYYXMSH6N63mXZVsxNoeF",
  "key27": "WmHTkJRkhZX5bGPFvWURN3HsY2k1Wxg6ciqHSy2Ze12BwpixJy1MkbZ9A3Ki1vciHMm1VwZEExeDkDrFop9oyPL",
  "key28": "3JFztANiVuc8Rbc866rqZXGx5zb5eUJYog1QMUPEugctKRRtTGLioH1v9wQpbkGhGYxzwgt5sPsJDz9zm8df7h1r",
  "key29": "pYCxam19fD49f2ccfDZi43U1BDxvYHhPqBowwxE5DHY2heSBNSZ2jYiodKgSf3tYciSFRbhzfDq3oduCSRijFKn"
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
