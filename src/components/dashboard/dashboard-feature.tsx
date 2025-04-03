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
    "5mxtWemBMWjt27U9mjZCvv6wr5UuUNDFggJEPGt7jxvevwykazpL2tRqWKaJvZuJtkN3MZNwJMAWkSsqTrdnx5Wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CjDRB5k6WvGoA3NtM5V7Sqirf2txTNVnTKfi4j2fp8PdwxEYcda7eeSGBem193zHArfPomvdUn28QBjKxj3CUAt",
  "key1": "3UcLhzR7wLaQFMaSD787MvogmQY35tdq346Kh5nLMs1zd9Xq9VcW7res3VrnCRnW8kw5bHXS5Pdw7WBZcKojcExy",
  "key2": "46tzNCDAkqeGCTHVTXmvwwzsinXQbWx4cAeqcYg1VMYMrBSYs8f22mhuDnYrthwvuFNjeFcw8ZrDESwuVtp4pdV7",
  "key3": "5haCJq9to661xfsC176jY2W2XXuu4Qd7rqo1QE9pVXtxe2AwdZ9UocKj7BPzmwqEMdHf634X6SpAy2EK8FkRgTpn",
  "key4": "2cJ68WY2h6WhJv1BNAhNGDZjhUQSLv7WTuvejtwm7UuXoLCePf3enEPsGfDMe1h4yvdpjW8CUT33gNt5jx3rPcGa",
  "key5": "471U6pimtoJFervgxJ388tCAT6dMWDCo3yfErYismCe5u4HwLGt6oKjWcVCacWWCh7rxmU5cxU99GwSQRUZ7axYz",
  "key6": "3BEuvG5C7tpytiBmsuMr2UAWUM5Ndgq2QcLqJvTg3Rxf2t9yV9twSdt5nqANwk1tGzA7buytxAjenmcSDRxip8op",
  "key7": "2MTYUJZKLpznvwGq6bYD1GTxd423VgC5WPm3Tc2Xv3u3Pw16jFC9cwH3o3wVYmq37fS4AtX93uNqaeN473eZSjHi",
  "key8": "3x3zdkdcW9uKPdmNxnNE6PafZwqmdKKtcYSJ1k3iD9rhq1oGCvfrwKuNbSeBo4mHycKQMxK1UE2uNrDy6W88srvP",
  "key9": "p6Uow5TLeRu4SUjWB9Hnp1tPYcq5Y5Gp9f1w7brNqjgW3M19YRso5Cv8G8DjDbLZaXrpLqzVJ9gB95tXijXxgr2",
  "key10": "2UGSMjaXg5KpSQwzkSWNYwyYyrkAEmqJ43DAERJfNbaq4gwB1UCNouG7wXDegeSuugupmYTU9FpQnrSfbRcri1oT",
  "key11": "2SYimdnJvsVA73pgXKCfmPfnTEUp93CKPu6CGBLFcf9EjvfAtCRSiMwqWrr2gtm9wPQWfaeAHHUiDw2bC6YwnFrc",
  "key12": "WNnUmxn41YJN9orrwFEwSvA5xGmaSmf5TndawVnhTvFKrwobnQUUtyXdp6768bwUScgaswPmDceqQ9DvK418kSJ",
  "key13": "4UVPy94m3heSaaVcqcptU2b3nJTBXvghpwjN6GuupuErkA3yi8BPzMQ2rYKCdYHA57MjdKXLWKYVoAhWdVi7jCUQ",
  "key14": "29meub6ePf7oyNrhaH7ziqrGzCazYnWw8cWqfFWEj1YXv6XVL5Zy71nJywczRbLyoiFakfU6hi12jArZtgGJ2sk9",
  "key15": "4bcARMCqwy6hnvZV6Z8PzZY7Zcn9L2FimyeZYg1qaW6e2v8GEpAgtQB7sAgmLx3HzJ3m7Qfwua2gbzSy5vNwrxMs",
  "key16": "41kaEJP6EWo4QTo42hdHiYV2GVaMegMwAbfUr2yqgHgRZksKQNzr4ij3rqAC6CwnAZQu6Qag7YDcNc9BZ23HXURp",
  "key17": "3GujBBv9hrNaSxuovkrWBwqrYKYc4SkkauoE6PwJmNRuiaeNqskF2CjFXiwpHSfmu6kZLtqTvDmAnk5yxAekndjz",
  "key18": "2p65ZrB3ttcABjTQC7q1L1FJoSUv1ey2gtLzg4eQJtufj71qNQEx4fxj2uCCqNKkiomc7mg5pGNTGDLQ8keFCbJ5",
  "key19": "4WXqW6ZEueQNRtnmHw4Rt9JuxGa6B3jKjY6Y2ca7vGWAsqKCTaenVQqFsgZVU28fkcGwG2PSjmDQsseXNmavCcfc",
  "key20": "5CVV3cegJdca4Sfg68n98WLknHBykr6FYqTvAA6V7RbwWKd6ZGYSw1JX1CugepUjHbverX7Km3RipC7kkhcDeYGi",
  "key21": "R5tZ7wz33EWgJjx8PgD7D3YuzmLw8BcueqaDkQ1xwCzjJo71ZcF5DbDDtmHMHG9A1pApbpJ3m1mHhsozt6aTAjV",
  "key22": "5sisMTaC2sBptc6o2PR3KwWh6Mzxmbq5Y3E71omKhZBydxt1gCukaZrED4ks28iqtkfck6AE8TqVheyLZt5C58Da",
  "key23": "3TeUU8gSSj9ozckwJRDtaL9P5xN2gToNAEQMqT5WcQ7PkjsibZxzDpLozCQ16ixxqdDBr2Mw86UJ8DUmGLr22sj6",
  "key24": "3MXNAgEUqECfj5MRZu5778mxVdCTyFMrKjaH4RikyB6yh6w5ZRf2wasAEZVb5DnCSr1khkF3WA7Eh6xANHHzGMQs",
  "key25": "4i2Pd9rt3GEHpR2arEuutvxVqARr435NjMY1wXV1n1m4LKb8ggPMPML1RQKfLSQifw5TH6NJDWDintrMRMFDGQdg"
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
