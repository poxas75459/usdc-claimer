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
    "5yrawFjuby5DNKjHUBK5UbLXHhY4S8MpD2Ss4Zc3AQzZK1hQE2w1HQRuJcGG48hxAqgmkWFbDVraUBP6gWGSECkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1kWdJGepCrWtgV5ZCKBSaP3gAmnrUk7e52r5Ch5iYjwX4ZW435hmKqt6p6bzz3WNc92i5YfZaUUQLvteoEFfEX",
  "key1": "2nZgbrEzS7JpGK1TYYWkv3jr5i1CcbMj3yV7kmCsYcdm8VjcuTNrtzfp4QVPpCXdBgzEE7n8jGUxKZx2ewscXSQM",
  "key2": "5Eu2PZfUNNob7UuUp486PtqfSFHLmMzigwevnzUA5yGo8CMBx4PD5TZJ6PBd3TnX7D95WDpMn4E9sREwWVqKYoKg",
  "key3": "63jA6qmFJ98cw6GAeTNibnZhDjoPRsTot3uC1qMFTjhmZK7NgU81cDaG5hDW3YYfAVDkQ8sMZWtCFyKpdzFn3mq6",
  "key4": "45vabCPPe6VA1jddaAg6QhLmhJRtErKJjnHPVWsDcm2cmLazXzKpkMXDdvNYt6vHN9hKnw7VhHSGjLva5WW1MpYY",
  "key5": "2LorPct9Rh84JMWHasKreRBkhfBX8jTwsWuFCvtCGqGjxzKmo6Sbzmg4rhzmyxtzG7AKsoBCHp7yrmFinK4t3zrf",
  "key6": "2y7iRxmimF59JtVmS4FKH5S1d4P8kRLQq2qA94ghi3VrFq1wdMRTTjpGFXKpTUGydwfbhcSuZNLChgCaejAcYjYi",
  "key7": "4ZUmodMfKVnQ1VpqsP3Tt8D9Uz4AWHjx8R4tDUrc9DmhFsWh21rm4Z8zyUHY3WbeAiERKPzUMvfNMsS2cYBwMJ5i",
  "key8": "4KNbBVp3sdUzjiYBWZy9XUUL2JGWgcA816v1vGhix3HNhrqYMKzTxvHu5KP3xkTomqY238zYzWZK8N5hAk13KmvM",
  "key9": "3RPNLo1oD65Lm6NBfTdZusnft8bSZFpxkmuYsdjbtTLzWJ1JEzfZX3Tf1g1RfLZPbr5WyXAzqiLrKWG49LN1oQmN",
  "key10": "4g71oFeEhBeViUNiLpFH9iip1Bkp3w1Y9kri7FuuE24a4QLzE3z7TptqsbVPy22Jpw53dELdcjEV9kd2tuVcjXtw",
  "key11": "3QtM59Qpnr9uzSTsvUdEUZxgujM7wh81LgCYLJJ7a1pwW8o6HuABapHVVSY9UrGJqm2qi9zoHZzGWGdsn76Mo49w",
  "key12": "3QWkzRnBeVGgxv9UyLhGVMEKz5xXUwskVh8xZLYbSAnwfhTSLnNd4ST5YqxWWviNhk87TgUwsEr2pdrLU3uaFLSj",
  "key13": "25WnzUUoA1cNA8bU4eRMyBrmRL5nkqDkKUDrACPR5a5JES694Ag9ZH48UFv7dVbuUooiE8NdhqxuUqk5vdFayDYk",
  "key14": "3XJJU6kmMb4WgL63EYjnkqAEmPrUsGdJWJYbJdGXojtP5becW25aMiEZhP1uEynNMonBoJ52sWBVnehPHp932j76",
  "key15": "38gGbBGQbhe7ZWaG2SL5vhnJLBvcuiJc8aBrbBaqnByHNtHoBxHVdczGfd6wcPC8GWWgSFWQeUqo9Jc1bg56WiE",
  "key16": "4i99JmBPg4iWYiMofsdc8nWA6VEcM8rWGRqsQJ1L9yhbjJxfjubWg5dZEnoh3qywVzC1QoEdDn1aGoJjmB8tqJoP",
  "key17": "zTsHVqAmVzXUuFFp49vrprYXvC2kcbjzn4xHJMCipsnqdo1g3xNrPTLxbhf2tTRanR1TtrWkRGHVqpWQ6C1KqLm",
  "key18": "3qN9EbmReoW7aGacdV1jqXG8s5FD1sk7r1yY36C3X9uKZy1kqveYKerM9vjnviPGjWHZBuwbnPf2RKimw2vH9L83",
  "key19": "2AsbgtZXk2AApvAJnR6RBefQagNKbjdSdC3mh9rffUgM4W1pLcvWSQyzLPHooe3HxAHjnnThTK8KKMYNjBsJPYxc",
  "key20": "2sh7wbXquLXyA8Vm2q6CSmyDHRcyY6yoaJy9oZxVJWAZNx2jLL4yG9dwxEE48WeD85f9hRHo3R7DisuybBfPh6Wj",
  "key21": "5uYiMjqGe3jD3m1QzTQLfoPB6sGVhyWW5eS24MvcpxCafZE4RJjNbN7uUyt4WHkPasS4CwwvMu5JPCZCkbf4Ti9G",
  "key22": "YW5kH4Q3nLVTCxF5r9QZjTMiYr75qt1ydHZmSW5J2mwqLL7Z1n8XNbKtEhyVzN6SBKFDqfqEPFG98LysLyTBTzJ",
  "key23": "2nskcALPtsDoNeyTGJJGNWYe5xFNg9YMeiQqrG9YZLcyxpHxBcmb6dsF1JkRd36o9UYgViCoFhKtkDheHtCt8Zjr",
  "key24": "bCEJcoTWZp2f11PSHydUaf8hwPoVsMNyGAZ9tPpHG9uzobX6DjbNZjnHfW6azv6BHE3PNsNRKG47EC55qH1Yn11"
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
