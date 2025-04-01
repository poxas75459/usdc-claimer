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
    "pWWGpCDG4QxKWmWG2Uqy5RjXGpH4Ksziiuu8VzpRbkNkiKV7Gq6SYDdKcktfhAG91vyh6fWaqanpnJTFCqVbPZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j7in5AqSDzvwoJTSa4jmkJWVb9nhCUQrTBzPu8QqbeCQztzohswGnzU7uErbPQchJPhcxGyeowphmhSkn9mhbQG",
  "key1": "52B26gAPL55UDtovdb9DTaQ6fdtidJCHCTU7sG3ERhzLSJtTERKnkeiPKxeiVmVtua9HkdnmCe9USE9P4T1sifk6",
  "key2": "3Xj7yM92cxMdSyyoMFcwyUiXhgJiCvdinj6y9cw7gBd4axuopMKKydkhiKLejD3ih95Qgna8oKejNEbkDpuYAqzB",
  "key3": "5PdZ1QgaBZqJ38FxWT1Wz744sWKAs98v213LfcZtHWgB3Cm6Zd58ugCMJCeJPxv1TixnY3VPxwTKqyacXLfb3gKB",
  "key4": "481ANg2vb64ek8cmbLLGnmHWPdGKybWaQxVcm2JWt1VzcXiVwRaQrVu69wG461hCGh4TKzMFWTrZG7VVRrWHRvmR",
  "key5": "4veYMRUCsm4TJ9JLZonNbdMS68FjWdFuRGYCEZUUdPjsZy1AmF2hrf8qGL9swL1gwPZGPPMpsmA5GMt39cAzcYKz",
  "key6": "3srKS797kQfn31d4zA8K9y88izHVDZFM5imZwktvmEBgdoqoFqPvxhZ688EeArZo9yDGUYkZzdPr3rkD7GwKfK75",
  "key7": "25nSUSatXqnf7t7dDt94Ynn5sB56p65fF9AmXGgY9C8DGrGBtZ1FnVooXFZJhfnVxibB3uhzMuWDTJ58mLoFcTiT",
  "key8": "5LYbwmDme8EAA7cAVWkmFtD5mhcJD8xeiKSCQ6VoNQp49RLpeTsGo5AdNfDeG9YqKKyW2PNYWCYBjkfxHJPGSM8m",
  "key9": "4fD7tqVoDg7tcYrvRkDEbPyfdNPycb5RcoC6q3bdLrVX3aK7wpPcSurDu3C9BSVMU665iZGuqpsYLcGJjSpEUZHM",
  "key10": "2Y5T4oMgAuddZHzSASRruA3PPNb7mBBFWiFTY5a89QBHD5YKPAZrMBmNMsZ5c2zXNAB7oKhHNcvmbLqJhXN3AaW7",
  "key11": "2TTrzQQPA6HC6iFM3EronANPExCjAUqkEAoT13g1QPtaxXLMGwjNCdghKoybYzXPeN21X2hfzhSUwBWrPMk94SAR",
  "key12": "2pqNVpLQrcVdW6w4SDfK5MrK3G5AzPyvEgJLJ9pFsca2Dy9pwzSqwXGKDg2Lm888wfEim4CXRBMNLXqWPKun2sKG",
  "key13": "tq38ZbBKRJYrQQaN5kLT3TVFFVZRnmD8fM15HM6FEvLEfRkwaS9NhtDhHvrRtgeC2HERNVjoC6Lsk4yhyKB8RgP",
  "key14": "4RGzR1atkaEXfZyC1yLcyKi478xeBTnZEk6FBFbenFnhV2eXzqjF2Z961QetJTzRvoHoH3tv4fBnH2dCKoMj6eZf",
  "key15": "3qADVaufPk4Wu5p36J2JB3koF6x67DVmh3sffnjhMxHJZ2Ay25V6ZLTXuYjjJx8fWri9kWc5djRyyt69M9j3pwRL",
  "key16": "51YK9thGCTTE6BLZuP1MYRnN6yXP9YbRymuWK2ThhPBVWptrySFLtHHQAM6ByQMibW8A35WSbtgQjafctDcW5YMJ",
  "key17": "c1ZCKPMY71amCSAYugfYq4PP4WaoXjU8TX62X7gHSRdu1nhphSFXm31u6X6qkVcYgQ9bbzjGCozf2fbrqX3fxCC",
  "key18": "2dcXBvv9TR8LuxXfqopn9SG2yMqwqk2k7WBVNCjS73sWvxukTCHX7GNeqjP5N8ZXsQkuEfnic6zgHCUcgeHfxHw8",
  "key19": "5PgxPkr8mrhJJ8ZDKG6BX5UGadzvi2ohX58hCSgZLynSMgwDa935GSwAVCWMUHwbhFcWdJHUi5Tts4mk4N8QNf3b",
  "key20": "5ywjrScaJmUeCBZYGbgnjW4mrGH4nscScbAN6F9hBre4pCp4WDiAeBKKo1G8MJTqBja6sbXrceiqaXRPeXtVwueh",
  "key21": "51GJJSDVp7fBiEmhaKVWDJaNnTEGsjKUVfVz4wPjBDSbzUjLfmFHdCLn49dT6yXwg56xekBRwG2NE7rM4wNMXEA9",
  "key22": "4YQkJhqhCr73sFF6LkxMTMeVL3nPVcGdpUtP7pSaLHp82imjsFvEx4KDMWQPKkeydtHfamMZMngkb5igBD5jLbKq",
  "key23": "4iuN9QGctUDof38RXqAfPLXA2eCJVLbyDLho21iK25d5uKzZoToqUQLSN1BXQ7vyo6mCY7fC836V6Vg22d1KhM8p",
  "key24": "2JtCXKMgheYhYnewxHtFDF9aeWRqsbaC79Lketbpi1WCYXXbnaffRUAE6Xm9tZvt9bu9ypDCh3tTTZi3yxQ1ewes",
  "key25": "5psrWMLJevP8CMyHMVzuJx6Bfdm4GUtWWYh3CTcYixMkmoKp6QQWxWv2R4k71DY1dpDU4ZtjsvZpY92BnoS2E8Co",
  "key26": "2BiZWwp2s1u8fmox12BrnYdhsTHCKqNmkLopjUP41gFUqVxqbpRfoPyGVT1pHz8jPhSZv3TSsP9RZdyZv7kyFL6Z",
  "key27": "5YYBtnrBWso9hmvdP9FBBW41AYYzJyigBPYQVZifCP9bzz8eGedGoVcZ2w4yqwFhLkioK983ywJV7hPmat2CCMnC",
  "key28": "4nRnqpZakBMZb2DGEnNbGEtCNXyWkgQhYy8ohcaXr2r2bymg4F2FA6XxEAduCHnUw6Rq7HfvEjN8rLTWj1ioVzrJ",
  "key29": "3qTSWKfDmXdMFinvFb2TTpybNsW8Cojc1xqRGKyA5E8naVUi8Qm1UDkPtD8KC8SWQB54dfW8uxhAaL6AmK1hhZAW",
  "key30": "3h2DJM2DsUE3YjQwqi5KgCQtQoDxaAUdV6DYyC4B4FCnJtwrAjdLHYoRx5ZZG27BagE5MDismiMdgseWG348MgR1"
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
