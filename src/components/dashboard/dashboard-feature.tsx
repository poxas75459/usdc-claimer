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
    "2qhhki26obTcw7NacN1rquskMCtRKmyx1TwLUSHgYYNNEyhEty7uYtw3pSQH5pYtzotMBknX93PZbfGceiAve1gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNKqZ22Lcvo4YDMDfnMU3yAjiUAaL47WFFZB9yHFryURh63QBJD8VezU9revd5X4JE1gVW6RLtEsYFJZr4hoDBq",
  "key1": "CpLeKnLncm8kv3i35HzqFGxs79pJMWVkB52xwiwbMd9KXyfFPV1YGYw8kfWzGyLTSGM2ukcTCUbUpGU8iEWXZNf",
  "key2": "EJdbTqtmTJstfA1RUpww2zLtrJ5de3vzMfvpw2ixAtmD5CZA9VaXPPGSYZNBY8ohGndWHCsAk6XHpoXbFRK4vxh",
  "key3": "2Au3y6e4mX5P4GwQFfxEWyU3YJUMy44coihyoJpLzdvVhVCeLcdnNVhYDEY1x6Tmp7Jvu1tLynAoXsnhTLSrcEaP",
  "key4": "NM3MGCfqp3hktYWvHdHDVFRCg9Uei9JU7FXdx2eBRW6FQ8DWpLcVbCx41NYG2q9UE3GEG2qjcCrvfq6b8Zpen77",
  "key5": "5YkbcSyD84GnvDhZhzsNLjpm9ppZdrSWbJ9L2kDnv75MhXXrZeD76bXzNHtxMhk7DdGhkvHp38MhnBfzoPfjPW3n",
  "key6": "2yZsQ2ccsfdmmx8KxWqSjzgE892BJ7psfcNQJzpYVxCt1ZS3Y6xH1aAhX9wnYvzBDAPcPXK5TLd4jKR1aqgGberi",
  "key7": "3ZZ9GBoxyxaHj2CNJTKVBVL81oPYZS76FEQL87Bx76nUn3CdFnCsd2KeKFLKS7KZA7yEHFzTKsw8m6RAotWxyVFC",
  "key8": "484Rp8pgrjaeYFPsoAsKxESw26KeCNMGdXk3Egu4J5a8rs1M2XYnHVacKmU9MyLZs1Bt4HwPHzeGpFukQxcBxVjU",
  "key9": "5LjsRjeYp1KxaPjv2R8AfPRmSXagbZwJ3JkEChJ2yQcHZJrY5rXsQHwtBoVzcUfD8s4jEgPmai6yt2Fcb9rAg8yk",
  "key10": "3a4dRaTdK47wTcSejoqLt5dJyANmuUYqXvfpTKY9ocWoEVD7er1yUH3dymjZsfuvdgSMz1gp9jYXqvR2d5bAydyS",
  "key11": "5L6HjBTXLxW5EQ1DvZ5KEEyDhihEsvurfUSkvxkryXN4B8rxhSN8gkC2Eb97ZhmyAhEdFR4Z9VLdh9jVLrv32D4v",
  "key12": "59ejkJbHLcxy5okfFeBSw7Z3LQsA9KzWzQzXxdYXzs7KR2nzQnepQe46hFPXJ7sP2JPcquyzwceS9UBG5Rkkuw8g",
  "key13": "5Ek79qLxz9ib6SvvRqzAT94VDY7AeBVkypRxnXyqBoCH3hkyDvEy6vskT1r2zAayPA1TVrAeMaDeZbPNAmzuRxp1",
  "key14": "5VddTAWqPLiYriH9rG6qatPKBwwVbf1oMscLLoziopmhb9WPrQfqP5iFjoGF7hk9BDsCrjS6tgy6u14EBVbeHZv4",
  "key15": "yGMMjCB1U4q8BKdMgg7YmNGJXswJBz352gWqdnw4MiTKieYqSs299ZMqskSg8ZGyf8tCjfpJBjjp8m1EjfPTDkm",
  "key16": "3hy5ocVhBgfiyZfTko5fVU48uy2i7fkjsmnEg2WLAeLVbyyjxZBfcBbpkBxHj3JaYsj28aHKMGNpe6zwCjsMWLaU",
  "key17": "3TruAtJqX8fwe4LgaYKp5ySR3dqn29dSxGUXumAQmEhFVEEUrGfaz6KrD78ydYthWH1n5XRhpmYwcxzNK6cRQvUh",
  "key18": "5hh267qLhgL55o1SztEKrZa7NaDckEYttBNByjBhZ5jwZePFSizgKhgTZzhQiYn4b4fTEdGPuKbQqEUDeztYD4Uw",
  "key19": "3c7JSZZdQuRMPDYXJ66beG4KzRwwbQB25c8PneoP4zu8JLBYnbvjKobPqV3qmnLMoh6X1xhdFE3BXAAXxmN3CGk7",
  "key20": "5SLsXuNyUAi1fiKVwTPTxP3xFU6pU1ki5W3gGfE5KzeRSNfgZ8zfvRDB5Xs5Kmg1wW42fxm1B7S5Pu4NUNksured",
  "key21": "3SsHFZHnnBpwgaZgwNhGE2Dd5R6C565Jcu65gP4tEanrPYgxgzeR9u8wd6AAVxTm765VQGPH4rbTTw9YCpZD2CwX",
  "key22": "5pJc8G4kETLchGMsBGyk8j9esyRdV5sYGpyhdF1v1HxCKVff8aQmTSoREb13Vd9dyjHWxUD6SM8wd5tQGUcpq7Rf",
  "key23": "3vaqA4Qh1MxKN2SMJqmD3sMSmddAx41Tei8W2UTmfgQc2N1EnxBT1mrUbUPbrwMAnMiNU18NwYnBDqYm5ydofs6e",
  "key24": "62kZEkKX2WUuDyTFgXfvaDQn89WgYmWBdh3cA4Gp2KRLUAxqnPdvaJHxUiKGez5YCVhgzFruvmDbT6SipX8B3hS6",
  "key25": "2CJXjEux1BRjz7U248fy1eu5Hgx6wsjBQ88ZShXH7qk9NFz5AwU1maSnud68BrSXVMDs5or3SDpt7jGVXCLyBCa1",
  "key26": "3ph8ZWoFJgXLasXxheKxJH2doHu6oBgRffjQtUmQ8T9WzuG8mhrGN5fyfKiuv5vNpZf6NXvWF9dv6gbjEEChEvza",
  "key27": "2jXwnT9mYAbLXX414sUtTAovTpEgeGGFdnU2QLEj3i6tH8FVJWPCFdX99G5XjrPzD4rXBrDqk5MFAvf5Zn6E1uxE",
  "key28": "3CjWk83EcGs3N7HV4dDKNo8vwAyYcooepMkFEqHRbSz6Rar5K5wJkTqZzg8dnKJfatdxNHEYYJekv25F51aqDsrj"
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
