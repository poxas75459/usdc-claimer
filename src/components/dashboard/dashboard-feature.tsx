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
    "5Rxemwp53AnYha76W1ofjXFapUfK8ro1843AnY4fGwPu5nQN8uspscvngAqRqyuexmD73Bj5ez6eqjd75zkw1Qpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZcWbdzvALGn7fRg8tvUaHtbQmRAZF6Tj5DerAXbn6K6r3m9SLADPPt9SQofsLJJdiwaAGTaWM1M3VNqYsjgkC7e",
  "key1": "QETTv5uxA5wGtjjDwrbmq7gSgakR4jPTxdG6zS1UGGmRRWq5sVsjp6cEVCqtFDDHiHTzWNdJEh7TsK8SiPgnENW",
  "key2": "47RLHmBMp6J7KRnZCwd4Hn8H3CEUpZixuk6zFs3teAoTa1MGdHxszT7efnkgBphYSZoMD8G4z2AYBqiinpr3yAsj",
  "key3": "2XsDUEe2V5FAnK96XFa54XNqWwXm8v7Tu1m5FrGg9zvo2P57TAKRi9ERmHPxLwt5gZbqXVFFNCSTbePmbFoni7bD",
  "key4": "4xV7EtZvp1ZyobVn7LhgPNUjknPUtFV9jDRjUowPxkyUUqn5PuxuawE1SCjCKgpoBrkDgxEwB1pACAQHyS3xHUSa",
  "key5": "36M8TNKTH8vXk1nPAG8n6sw9ve3cWqG6u9HwPPSnAXh8Bv88XtUeY6MPmeTgm39W4N74VahiyW4VbLJF6oNnmp6D",
  "key6": "2Qv9oKzJiBzTmFuSHdAqDHVhoaNNZTfNuRa96VeWptVsWiPdiQVpootrvgTSBPXhQQebWkkNxsdDdXM4MP4cvqoA",
  "key7": "65EAZ1JpHZSQ5oXKHboTrJE1Qtr394UqEe2rcPsR6rgssEj7Kj8ZoSXVpSLh24vSRcPFsp6z64ELdpt51NebjF5y",
  "key8": "54YYJZzJSc9EbJWUjAZE8dYezrTa6QpL3N2Zp9qPmg2WpGP3BnL1i1oqcbXN6GC2Fm3eFhXXX4FBRXbbKP5V5maR",
  "key9": "4MZ7Bguh8WzAEShqwjXL568bpVmChnWpcL5pnkLS5LZNufryV9mM4otqomsjxUcFush6QR4iqm7G8hiQTWWrFyBW",
  "key10": "36mxC1cWDzKUz67HPkZ5cYVYpztXnMDnydqkCpevnBWutHyZpRyFh7mWMNUH6ARWYRbQndWETfQSAoktuQqT6dYF",
  "key11": "4ncT9wmstDKp3iMoMTiaAC3n1XLCzNFF9P5jdpbJKc4pMwNckFsKq8kQ25N5phcV4t8ZcXZts5qTFCKCmrhijcq8",
  "key12": "4Sus5xqbkvxfnUX1oHxbjr8HhM62oox453HMwxDeLdVZqPfpLUwHwqENt8YK6rV41K2DzNgU4v812G6RKVvzh9kH",
  "key13": "3G6CByQBKW9EvSQrM5FmbTp8m3FrdzZzFzfDCXo8xaGmtUo6rnJuyMxz5fJDzVBviMuGJo6buacdWkifWy3eobqM",
  "key14": "2sxqjiqDwJhFgCYLX3h2QBbBqir1KYtXzaUtUf4dNt6Zdp26kKhsev9Jv3CLV7ymYDfZbm8LeENJAe38AWfcCcg",
  "key15": "3cb1kJmt56H89NhxoaqQi8FbFnMiZYeLmSg7JrJ36P7gUvsXasu3deuuwHeWk2kzcm6n2AwneiyN3zYHs7a1Knok",
  "key16": "2LiWPnkexPW8JiqVz3L57yWq9iqMqsCntPQnnbFKDDLZHjV7GkUdLhKecSXbdBW41p7oqrPRfLdNSTmQKKgDu7eF",
  "key17": "5o6cx5qyhL7cL2NwbYbUeyumbJXaSRE6Z4xkUMvuj9xJDVy147Vy8zBwdqexT73eVQRJP2SCCdJyGjnRjcu1FAWg",
  "key18": "bg2WyqqXRnorusfLua18F5eVnumjAx4wAG37xad87PcrNy5coh8A9oW7QhrzegCVcq525ZssTRV1AzMSgrReVNc",
  "key19": "Pt9YV2ZfmH8hh168qCQyy66fTb3wURhjLE3V3aui46TrMY7upZf8o9yFtbEXr5YARJZMfuzTe6VEmxWpcEnZnij",
  "key20": "4E86eET5UDksX37ccdtmtHxnYxkxkKjHCcbMsznAbj9oRTjZu1npaYsAivGWUFCE11x36j7P13VVqSD44QzGaDTh",
  "key21": "oe1MUJNmaGNWnp952QRHiNmzwgbrN5fWJzfeQXcqojfqGHdvUJqWhMLK1dFqUYC4wgYDTSx88uHs4k5uboy3aCz",
  "key22": "5zFUKjsHxvyxrnWq8J4pARhksz7QTGEZNt9Mj47ZzHMtfCtr2hQR7ik4Vpp4xHbWcCJj7K6YvVTA7J7aNAQdmmdQ",
  "key23": "5ayfhKwQT4mhNNfoDW9wwh9UMCzGiNDjBPHjNY23Hw4my5xjcz83ags3qXWYTASeRB6w1SrEjgFeY7DwcjvqGyaJ",
  "key24": "4NDBDL2n4BNGE3RzSJFLvLcMVzXbTK5ZYXxXStXQn7fXoAg3vqLzidAFMiAtgvscAoGEGK12Yr6vdgSjWCQkJDZN",
  "key25": "2Z1Vw73FzDccRkZYJXyUNRKTiNXxaXXL2YWynPix4y35uhfbsjWyThmCT5eeBnDPMvT76KaregQeP5iz89ZHvgdG"
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
