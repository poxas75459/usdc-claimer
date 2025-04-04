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
    "3q5HA5k9wA18DSUDKBYNK4bQyYfuK6cNghaj1tDkDwSTo4qdvvuiAeRxnegRVMo5DLohN2p6cskAzvxZXMjbcCJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NtpLKEE9JiU4KSqZEyY88Tw7Cpo99Br84ReN5xLVAUXZFBo2ST9sTqVxBUsiA3nM5YUU4D2aJbuXqpU3Xeh6tfz",
  "key1": "5wpNDtMUTY5KTnUtwpdJLvy9EgkowDvigpW75QBdrpt3wMq4YPqnE4YPKbPQS6TNFdZ54w6friGj6r2Jupt2vrMx",
  "key2": "4EZsyNoyVeBYT1A6o77YZU1MGhsDDVagz2BsgzpqhjGh78YcvnKh78GLU3TsuT8XJfBWAwt9oCtNvTbKE7XGMMW3",
  "key3": "2Q1KXjfHg1njscn8iizor6AM2maVw1Tjc6yRk6XTpZEs7E9KP4DenVWWekLp2rirHKJDikur6X87oan3CgyBZcTi",
  "key4": "5thpX67XNPmnVAfmNAg6tdpVkvvL3ABDe5LZum8GMYCqMTehA3wLFnA6nGndtuSyJxTWHUhho3izyFvyL4exQXEB",
  "key5": "65BBpMs1SFxpe8Qg6ML8MyHrmdPVxbAcApVhtmgvW1CP7MzRHAZdXqRHoRtsYp9cw5n8pavrVfV3owPDbifiswe",
  "key6": "4KR6NrJ3VZsJLXUsupXKqpcV1sFPJ5tKpdc4eUdqLTAiDy3TJTv3g6jNiLVbebANfAq11MBMnBmgwdRVofVNZDaR",
  "key7": "3wEkCuXn92Z8ptAnLDFdTc7T3wvaisE7Rq2sfQzKBvqrz8ppH9CPc6LpnxUmCFBjMcmquKapLSKUVtbAHoDTwbgT",
  "key8": "3Eab6y8jitbwwX93oh91nv5qZTcFYp5RZbrYerSqwAkWnDNYMommfgDMtNQqYTYYrzyLsrPygSdkYF4mFBhEuYiu",
  "key9": "4Vjoa4Rgm7uvWPzQxynai9w28YSwtCZuUSeHwZPvmc4psdsciXeiv1B1Jw6z33WKQ1WuC6BMKLwc7Gr8wDorTLbN",
  "key10": "2KBBXc1xgmuZFGNaWPshbGuacAzfgngPu2tW2NKACSRCoDjfmjhQLtwLN1oRwVkF1oZoViqiMJ5zM7oxmrnP1aFd",
  "key11": "nprDmtPD3poGX2pN5xjJxEAER7KvfCgAfusH8GPcd5mc6mXpz17QFPs3bEXZX3XzKWGxZ3LQYQ362eG4W2vXjS6",
  "key12": "5Ab3vXsVCoEVMwQxn7hQsXQcW8tdjDu5zijTw9caqeeH8BFGnj5eRyH6cvJRRbTi54RkuC6vbf5WYK5dezPrQvrp",
  "key13": "tVmS6pgXd4KTrnBe3KZgHUhV52nyXkoTrcLSP51qmp3rhZgfjapd5LKCxpZUg8wXZTQb8bJLLdDzxHuazank1if",
  "key14": "4gA9wfJQBjJsyPtLqWcNLkzYBWhmQ4KjeaKALJmSRSRrYmqraY8ha6LNnQuRg7sRZDcwEh3EqkyUKWaUWV7Ej7xU",
  "key15": "3Z6hktWto5n1jifTKJpMdm8odTpxWXCUV4vgb21H1K1kAocXQk9ywVrXBQGxjMxh4tPg8pEhV4eDgPAktutzczir",
  "key16": "4h7jYyjBkWrh2WkmFLmTV7fCVwYsfXhKGZd7ww5huqi85MVM9o37PGZypaFDsKMaJZ8UCEQeJvWZfeXVTLBTv3tc",
  "key17": "4HPVbtG9ijnFmDieYjk2hZbHfMehe99HXPUxnouM8CYebaTxmduxzccFw4hpDaASfR6kQDkvyeq6GZo7aN8655kv",
  "key18": "4UDQ3ZxfYo45AavDg6KNY3u9j4baNZjrE92q2rZJisVQ8z7hEfPaJTZKbZPQADUodUFRXAtbv7vtLE288viUBx8u",
  "key19": "5vbjcf5kqDshfJoshwEUyLPQ21HtRaL2WHhEWQZRX8AuTG6ikNsmkUZZJ53Wt6ZMwgy67rQsnTdLoa9n3HCWbZWt",
  "key20": "5yHFxTQAPZfeiRqLZJLMtmPHLMZf2jKvUnycdUTLyhUkB2yRd5ejD6Vpocxv1s4tQvHs6GqLvEumr1te3U1ndDeW",
  "key21": "4Yq3ssEegLJofnY8dZ4DGB6VXDKsjb8oTSvE3jAMcmPQr1V2hPSC4pnBgZjPFS84aD2YJkaTApwcvo1dHTEwzaz4",
  "key22": "44ZF5kHDBuzr7xTLN7nGTsMR94vnDvzUKjRDwH4GyiKxdeBVW3r77LqXX8J3fg5otVCWkxnHLM2J89PJrD1DdUPn",
  "key23": "3cqT7mMADqWtLkxzLiv2WNdVQ8RaVraUzHQPiE54yeThXk1eUrb6nErdDxeNxNQwhniJ1gzB5ZWtbH32FzvoQVQk",
  "key24": "4gW67pnDXYK4TCtBjQd2SBjZnBPiNMjdFUNouPENM5g4Pw7SVcRMFqKPyjxhewdmmYFQiZfesxFnntsqFYsXuFUk"
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
