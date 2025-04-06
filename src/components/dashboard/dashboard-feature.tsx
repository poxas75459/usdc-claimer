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
    "4xsbk8uTKzEGvpzPH1XUCk6MWNjzqwM37TVCwTJKYSyExGkrxHhbvAx2FY2JztPdq94RhUkHKuN3fKuUVw8ErewG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xjxa4HBUDad893Q9TJkCNys7iFkpPpR55z9Z4otnT1GMeSN6c6HnQPACG3L483HKzdJDWApL4HLP5ZwQpaAHcCY",
  "key1": "ZX59EsFGDXxtjGmt4pB1D9xHs3qTNy3UfJKkvjyS6oGiiyWeBBxQ5tuhJV7KpTgPA5Gz5KhWBNJuLq1ZLbRJhJQ",
  "key2": "2G4JLbwt3QfjHCLwm1KmGFJA6rpTiqNrMGwuZvMSHiFaEwNfJmNLsAUPyBf97C6kajNcRBMgS9SYny6jj54Nbuhb",
  "key3": "SBSNuqkNzaqi764HsfDS6WF5HKExjogqBKsmGhcRWWTT34UV7U2n71C973P8FSVpYSRTWTahtWRt7gi8q3xaMmP",
  "key4": "YrsCZ9mAXDNd8kSXrAiHxH2stQm3syN4sH8Rq1GHcBfc3jAsoFNFgJmNTJ2DoDnjpkJj1zKF4fCbE19QfkjMG2E",
  "key5": "32ZYgJ7VSWDdPZTsAXKy15RpmTeb3uPZHgcEpGVdQxQDLKH9744FgMPL7CboT3VobCw5xAkGbdroSs7PUdegR1ik",
  "key6": "3tgw8sMY2pofJka3Vp8Lw6W7dMeK8xr64k5vzVLw2fNkMxfePyRyzB9XXj4Zbw2YeqiKcohgQ1QpAMY4NiJ2FXZN",
  "key7": "2f392EeS7QJoUJTfypBht6bFaFhT4nernBBx2P57pxVkmheQUaXdHxxeoMdp6XLZm2ibrEKs6Mt4qiMrbonJnytV",
  "key8": "3tyA1fRPqMF2qyvhYGP8C3pLkYXYonZMUp12bdf9QgQuqozAR94s3rc6QDCJU2DsA8fgvGDMYJ3sP2nXEuLV63C9",
  "key9": "5rbXk22rGaJ24EkbfNbtv2htNXeXevNBWMYEY61k9sX2Uk9VXypcgd1viyE2UGktPC8SGfDyah6rxcfzRTvzPAbU",
  "key10": "hKvauXbsQp9h2drvWrQQy633oSRaCRe8EXqkXBVw9JCP44XnLkTwBHgs7E2jEDV2FYBuN6h21ksU9JeXGwmMfDu",
  "key11": "4ApiRr5qX6b9NwCRzLm4tkfHxepN2qtafR8i7S26bMcokVJqGKgzVxEmUFDMqmnm5a2drgmL85EA7Yt9YUszdZkS",
  "key12": "5v23PfsQuUt1wxbNWjrsTP8ZFEAuqYeS8NwH5DBZ8e1X8xECJS9gbUchHezL6bJUGaLWvSMuoGjuDJ3HmSQvBWee",
  "key13": "4eL27gTZzmic3S6QSpqQjmqWGQUHpnrVxKe34M2rgrqQW1EPuxobvWLJgwC5M9v7JuxcQDZp4PWDWiH9px7qpjFA",
  "key14": "2wVAio2bP2WBYeSU3FZaxcVpeyiE4Ud5uTNLifmNQe42sgdA7bGBHxQoqTAARzQa7DvyiTpMGAnr1fR2adFksahP",
  "key15": "5EfzgWkTDCaH1iEdT7ctgwnjiyzBP6TZTh3iBphFL4VUbVS1bSzrGKcnePw9ABhh6467MTe18m3CnzSsnpRCSVBt",
  "key16": "zP2fLkDFeB6eWcDnD7gDibEyEpgJxTmRe7yJC5ARxmP9zgdQfhPdGLCy4sjn1ko55yjeqNQoSnKy7dv1wPD7c9B",
  "key17": "3pi7z2Ywf1oizJ8x8GXvZtsfgZtxfPbWYwZ2V9mfZBxeGp1weVQ8NPFSWhiH3LuLzpo4nj9pZxptRyoNb8mPXkWh",
  "key18": "4w98BA1CSMujkDRnCRdNnn7FBrWin9ShrFnTvqKbmRekmzMb5w1Laf9wiR47Wc2qkEm5CT334ncFQQ2AySMaeQvE",
  "key19": "3YPBsxibbyZqQABmTrmq1Mg2SS6dNaVgg9PMqkUcxqdSqim4nn2WoY6RumTdLWqUFSvbdxCKp7kABwhbdNJ8YGNC",
  "key20": "3R3Js9La6jXqqLdsQ6w4pcVzHMZcUpUmpJ2Zu4yHA8iUjV36veivbZQNYYzfbbi4WHGHGugcwoWNAfTxcSqq7GEL",
  "key21": "5NJ6hc4t4mYjU1VddCN6aMidWrbE1YrGTr3P1Zj7HZvhxYRJ5JNuHsTEn4FVrRNKL3KwopmUe6Qqp3eW54Y5vwqh",
  "key22": "4QLNdHPdeQ23EfZ1j5rtH6wzHCGobuuANSJQMGF4bugK95oS1GsrKHQb9ftYhyKpz6qvEkNqgoMba4gQ9VofzWU6",
  "key23": "4zGgGdDUFxJMeT9eyzHpHyk67yvrbuaUvt8dc48tFQ7eREeJ9YJAEoNk649gZ2QGtQCvLMCMn2uuRb1EL7spevgf",
  "key24": "wA9CoyEpHpyCEJqjH6hYW5f7ZRu3VYC6RDQJBuUPhCSZpKSiw1Qm98qcjXWdt4HUPyeJhhEZvpjb6pw1wkQFiX8"
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
