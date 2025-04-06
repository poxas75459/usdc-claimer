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
    "3Lsbh4FvWMw7VVsCH1oDQA38ouV6nHqZg5uwNNJzTkejgksbU6xcRQVGwXq1iUPXMtjHFKhW8izfhczEqTHqEtSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJoyEQuPVaD5J5WXvZ6rDovo2j5HD7sPUzDWdNebjj4tzZDQHwAw3tu1dB1D1qEP44htAnR8f2dgpEPPzfVfz8i",
  "key1": "2DBXwcsJguF64csC137mhJ8AhpGbqZBdnFgTNpTzePHHwL94R9hyGL2d7b9dvK7ws5bBhmLTRbADr6yA1hf2qYid",
  "key2": "Xeq2Qy4LVcYy7bePpQtJ8ziM3VajeNZ78YYk1unsm7uw89rsTxRyDNdTi3U4HVxbHAHTxHDU1G98m3BUzUATq9b",
  "key3": "29CPWchQzH8isYCgQCsQCC5bRyCtdYpNqkRL4uDBwRHDVSRnh7xNYXovNjqBRUtJcaLLy2CYkBZQNsDjnJwoduTj",
  "key4": "dCVLssFpapD1fUrn6mNnPzK6i8tTs1PtWGs4VQxVEL2Eaj3cSBbq8REAWSM7eg3pXPg5QXCVQjFtX3J5EPdxWSZ",
  "key5": "2Yq2bmFSma3pHze87LoeyQA7hX84HjC6qZvvqbd6w7MYo7k3Bsr88MbbC9FihNu7pmEzCa76DBL6Lf3JLvwYkPCX",
  "key6": "2h2gTKBE4dtgfuPpWnmvFWJyRQMaxRcmE3E7X6cZKTVudKGZ1cYEK2nm5gsCKuWxm6eJ3bvrJ35dXyyncMfkfhMD",
  "key7": "3EYdAT4e9mzgDefttd4APiKUZS4UUvDKA3XgpQRsAyiGwSphfaQxuQwsP16LHLv4wvWcuMsCj5tSBzHsSMQnNeFh",
  "key8": "DtYcAEWhDpKVafGzRCPzAxoYijEkPHPgSRWFKHQSRGSKXWhEh3nCZTZQogkvkEdyippVay87mqmnGoaTJnDwL4L",
  "key9": "KJvPUTUcFknSZMnaWoxiQuaMgWKJKZGEhhvUChrfy4omzJdqmAtGYxmnwE5inzGV7RmkLPY5V9rDzf6z7AGP3ic",
  "key10": "nhWNpBNB4R4zT2MCZmNNEqSr6SMUiiexXK3esJzVy1QkkZRrVRWcrtytaMqDz9PZ7h6zfZiwn7PnzDH16srTd2e",
  "key11": "3hWpGVd5JSBcqjDjLrafvrJCCrC5WJQxm8iEpnkYn4SZFmqfUmDRnSeA8i17XWPHoBwH6qTuPmn8SnhiZLndAqMe",
  "key12": "5gNVSGCb7VteTJUMdQ27bsnW6vWdxs5vCq5dn59y31CexvDAsRoYhHW1BJ1JbqSxkfAMwPKkXwVpg5kJMe2QJx54",
  "key13": "4bf3wsDjPGjXhNc4yg6KedwNstJFasQdoi2xoZyiTanb3TgdHtCjChQWnfGjB4AMQSMaQz3TsWhs5Em5zKrzGDXi",
  "key14": "4nYCLeR19LUCkaBoSxkArtZNv4B2JcV9EBstYZkggC5RX1RRqdfnKhAdybCwV5XxvCtNyEBr8kzPPdQcXRwH6gfY",
  "key15": "4ScFuxs8SsDcntqr6dpy9wy29KQfAQ3HAFWzpc9PAGvW9SwHSNbpRZ1xFfNZGH8M2hwV478RN9Sjt5Lk8ZVmGXya",
  "key16": "2HbMt56AZYczay2eeM8WDVoPJoVmtCfgvgtMzZXrB7JXtLsE8yg8b78U44PiPJgLLu473qnmg8XW5X4Mws3Exqh",
  "key17": "khaigYEp2o7V9uHYmfXetngSJ87b8VW13NEy7zJkjeLftbHY4DVXwu47G9QHaggbpTdxAH3pmDtpM7L28eHEQR8",
  "key18": "4kZg1KL88ZmPgzGUCYoAJrPurKd7nEYfEV1wUyLXAKz4kLgVesYHsf9dgARLvEiQDRe5k1XvievRHmcyioB7Z4TZ",
  "key19": "3eqhaJWUxzk7rYxb2oJPCtGXSHCnvaqkX7MdGrV3Uy1jHWShMbwXRpBD71CnzhPYn2DWDu9eLSSGU1CyxLUkf4zR",
  "key20": "4KsB2MbnpXhSZswRGUPauRqDnDMU6PRFnpWJMqwNeN2zvfGaNTQGUgy9VfviMNzFyENojtZnRbVjEr5E1ZEXjcYh",
  "key21": "4jbn4y7mgtEMas6EPBwDYTRqpLCKn4AqbQL1eoz6wUBCaJggcyWU8orsHu2cYXfU8Eq6FKP43L4smyo5nAWS73zn",
  "key22": "5QCcyv4ifWGWuGCmPAxiXP6VX7xEESmqsFpQkr1aTFtkizWHrWCSr5fQv1Crus4w15V323VY9yF4acHcpq41TozK",
  "key23": "52McheKak4nfmjjPxP2UyCtCGDkRcx2kKv3P62am5X7Q8kchao83BBSBXrqVHxuDNUpZ2jVUT3uWPGkTY658n5Vm",
  "key24": "3cXD7Argd5Ji7aFkwhVgQoEUgd731hd213SNfU3SVpfmGWehJRmiNLf7siajKRavYirGYr6oFTGHBs63Up2uPB5X",
  "key25": "U4AcLmYazaK3xmYyEqtjkwqgFQhVGJJJ2bTdyiF1S5KTYHawcTJNRL9Vst3Dfk4GLGqi6phG2zGjrsxRMK8eLwC",
  "key26": "46Tbit6GBY2CZhVmUDWERWbTZ5SXTRFMDD7xKcqbwVraN7dJpuLKbK5vvgZBY1RFgRWUL2EEvriuMY9bmkTcAVeY",
  "key27": "2cxf6oHbbg1TpuXcEHpjdeLjByxmgKfys722ZRfmQE3xE7PgVaUAMXi7wWtSyS8qnH2xzbP1B8f2roVWXMW2uLND",
  "key28": "3hCjijbXtxq7GzmnxS97sw31ZaQ61R2X94ffeECnjLDYrXgivj7t6zqMboCaU4fenKxWZPCphhJfjprteKiud1j3",
  "key29": "3TDJykhFSrDD7jYULsEEfkvM8fhjzACAjKG4BeoiUUnBrHtBacj2TX8rLZBve2Qo7oZJU3iNsWSBvD8Y6tchBhXd",
  "key30": "42tMYWhk5ATJTfGeNrM4uGULzyqF7yKB4szaYkEbjhB4HF57BDc7tBifcvCUoWEUdgkNa1HZ7sZeY28w6F2K5R81",
  "key31": "CLkbu1RKBtkHGfSxtC5gGUjkCvw3xuqbo3x5TdvQt6KhW1PXY6gwdAxpiCRNQuL9f7UhV1zVoLkegwuoDB1gMbx",
  "key32": "2YdgkkGhMh6Th5MzXWdDTpHMsHUwxYdGJRY9dwdc14ejjdGAU733rTa9mdoHumc5aoAV9N6Y5AVw2tFYQBYLLpRN",
  "key33": "5V3aBc39C6mkjr3Dd1qmrHrAuZYTf4UD8mEV5i85QoXxA7QDZ3UiVu75qwSRmEvjsWw7M3i1c6b2wQnhP8z6JW2k",
  "key34": "5iCGLZF9FAdRKEevTNwyYzfyRrwiUQWaf3JAQ8o7YiGeRqdCbeZYtwNPWDdCmoPS9z3yxnKPA5jji6KPmjV1oJqP",
  "key35": "5w5M8z6R96b8GiJpt4sUufSx19zTR7aSxFZij7URrsTGNrekfYbvAY5wQMmDixFBnHKCL7tUW3DtzQ9qDyYKDGxV"
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
