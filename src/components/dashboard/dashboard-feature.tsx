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
    "3hw7p8rdcYFwnzUoVHtpQGxLmCufcnHuo97VP8EdsLLX5xrHd7XqNhqiY984VkEKcn8p2UGpSCrZAdH6kVpqvNo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jRXEAQXjWKG3nn1QahXVctgtmrwVdCG5dXzTLqDrswYdbeav5cVREY7ieiKE9UDHTtasnHCKneknomcKwSWtv2J",
  "key1": "59DuxptQFZSTACVqwwXT9PvSgWffssJLMEyorduPnUACxDNscGrNc4EEi6RgCrkXSvyk3WrjKJuDeFznUJZqf6A1",
  "key2": "5e3rfYnkT2n3pUXXqquUSgWRozNA7X3GtwN16xLm8dcr1RRr5yr2jMnzuNgMiBXzpCkLxAfsoyk2dbrZL2h4LiPp",
  "key3": "3YgB1LA9qZFhw81R4XJfv1LZQJ8N6ueJWt8PZDQ1iyXSihCgwRF2ZzPh2EfAUKKNgzAgYMnHJuq8apVk9Rdwbo5x",
  "key4": "3WNXUzS43yj8UsaCguzQ9XUqXdrDD5VutWpSqPPMrrYp4VNRN88DE1CWCMmTZb8kGiUNfpPNLArSMyFqhSxmn8B5",
  "key5": "4e4pgCQ9nDSyHykjmTwcdZTNoHd1BNL65E1nMhPUDV44yg9VjnBRKi9DBzAXkQULzEMKhuwpvGXu3J3MNy6X8J6U",
  "key6": "5Rs4hr12bUqhoHgiuT6Kaoasv8Uz2yu8XqxR78JgwedWt4QAdWvLMiVGKKixfBDygRk3Bfw4Tx1QhpAsvvh8DLWJ",
  "key7": "2NzY3F977sA1ztWaBa5kGtfcMKXJ93QtQwiEvMCtDEmtgkbSR2pAmW2Kg2PSnmCNkoB7cBnANsjoANaU7uwLXxCQ",
  "key8": "2XPtipxFxitRqC1bVyqnL75BnyaNzvusJWsFUA8hRmK974MzrKm5Pxi9GNhJ1KCPCbiMEN2f2WFYdLDxrFb33TGp",
  "key9": "4Qq2Ad7jkMZVLbwUJpxpY8Enrf3JM4wXdjkM8JCrSUxmG5ycczeCP6122RaKJ5UQmoi9dT5VVFvqecbCfXzwN6Gc",
  "key10": "5z1HebxnD4mnsv8n3CDNNzHjvRxbiXcxb7ad8YrTtzaMGWkqT8YGT8b4MSVDJKLFpadfyQZjfmcHZoquvwuV4RUq",
  "key11": "gu2gKML3vumyEiEx4ykVaKVimSXuwr9tsTfXViRvY3PnZbCBkHgEzq4VuFxpE83JWrYR9Zdhc7jC7dQaoSAZ5vT",
  "key12": "2hYPBWQwq251uzMDFporUvX8v9k34LphPtNZbj4vExhjZ7uB2q7X9RJMZngXkeiJ9GQM3qGjze82VKtkM6AMdVo3",
  "key13": "3xKqyWvgYkttiXDkuKFmAqPb8UQZDpnQpkLbNgQ6d2NhJWAX5AYr5m1RRVtnF6utcJTpfe4V8CoMto7TsqNcN9YK",
  "key14": "4tu7FSb2C1Kn8rvxbJgb7bWKPUnWcxk4U4c6YPGuzVPFZWT1dQKTJBNpSDa4djqYcEJqfuf8Yk1M5BxHq4sXDS7C",
  "key15": "5Ziydk3tUcdCQ2Dbc4KSi6oQDR2og4widt4Zg3u1kuYNkPhSPY7bMxXzBN3MEgkzAvWfBzNqGREutih1kReZuRZU",
  "key16": "5Mfta7bGYDC94SPg3fjnZW4y32mAdMNUzMwTgoYMxiKcc99u73BoSsDh69DDcC99oaytEo6arkEmGaZBGy2vNLsJ",
  "key17": "57g39qcVafZroqS7XqkFusdWfhxH4noSwZ4fBzjmNanDNqwNgKsv8d5rdafg3QBMFpbZQJhjzaH9dU3RuRYPCCJ7",
  "key18": "4SV9gBoXiAkF64dM6mbdCP5HbsfagquKgTh8aBiem4kucn2WPeBM3YMvHKcPTf4wqVxGDcnWQvHLPcP9hehPLDkm",
  "key19": "5ar52FKavALQSCKxUV7f9RGFuWepYXbetBpgBHUhsGoN4LYpU1CuCdqZKtP6yvWR7Jti1PokLrimpY2gaTz3AMvP",
  "key20": "43QvcCLeLoMRd6EzmZZ3FxXa1HcKMvpQkjcb4Q8uHQcUT5ny5aYwZgidzp86AZVZ3eawmFoJV7haYwDqFVQwYyHh",
  "key21": "mQGYY2jngHm118c3oZHtBU1Tv1kUQCP3AcfqBg8yuEHqQPZ8qP11ceLFz21vdWyxaWqEzBdq3DgBsJ6cKWoBMBz",
  "key22": "3YZCSnZWAJ94Rs7KPtNPAcUCZLn4SwZRhhzYAhkouevdTJqs8PkxXFxTv49rc2BkbwfRpJfmjTx789FKnuevP1gj",
  "key23": "3s8isrbXsrr8oyWHbw8nGtmcznAjyFtwDSajxPbyazjAC6AaEN5X1rBZbPTA5CQh6PcV92uZ4qDR5QmFdQcqsJcR",
  "key24": "3exho7oqy6vVqYbKhmBhqg2HnddPe9vJFvuoa6MEV8xSSR3LNJQqJ68vaVKuH6VAeA7LNEdiUnE9K6w9W4BiKSYD"
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
