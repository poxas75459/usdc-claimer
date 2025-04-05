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
    "5LZ7J6xoiR3rwyDWmDLceBnxQoya5x6JNAn7fvgof16WhNjawG2c1FJidSQP6i4XDqUXt5LBCFMm2UrHosaSZPLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WtzLP1uMPQjWiJ7f6SUQKfEP7rPFTPiJ28MZZqvcszeZvVYBQQ5P5NfpT86nLDfQqPRFkwhogwVxfaht7mAij",
  "key1": "3xG19QUQqHYca9KjCNzfZtdvspyTBVs69c4P2YdZAKtjoe8g8Fgo818uXu5ocxgSxTYqQtReHg7B3V5txcybmabj",
  "key2": "5BHcqYR9HePTTSu7bBdcwLUuLbJHkyBhk3r1wac1vqLX7BobvdT9eVTaY85Uxw21WsqVSEemgcbXa4ZAy8Vid5CQ",
  "key3": "35wWNLQNoxJfwPxBDR6cki6cKeQq4BSg8dVDPkaWjU2VbwbWiVHZdFLfgHdgeiiERX1aGBxd7KkfQZmu8D2Nh5pf",
  "key4": "AEdzjT2hAcJMZVAjZfb92QhyLVd427krWVXQNVrqMptW8QLbznmfQmtq4sqw1PnXc48QZFvBC4kkDKkv9QgEqHb",
  "key5": "3BAum2Y5iXEgeS6EvrPHHPrKukMB8qNrLc9gy4poiiXsaX8AxQMgRUtykVQfysuF8ZeaBoTDvGGciHnTvzhzM7EY",
  "key6": "LXjB5JGqzJwWXoGm8CwiCnoFdpoJMUZhQTdZuaocEDzRDdqAA2jP1GH6D6gxCGYCoMFmAf6aDJ9c1QELxhBno5P",
  "key7": "2agBwYmmxtmpUeaKYYzeBSVAcHfqyndKFV9ipTXzd5RV9FRQtir7DayLfqhZU6WVEt3nxMa6sZDpuz8sWbK7TDRq",
  "key8": "3w7xjAs5z5gNSDovofe9YHHtrnbd8JLUXdykmhXwbrCg4CCCvgFPD1wxW9pHe4JxQmn9wBRvg7PQVSMGjmrKS3to",
  "key9": "5x5SAboNmSBW4eCrciMoBYNK4a2mwWsxzTPvw1VcKnqXCwJBqNVQbTjFXVeWdhKWBMTqKNWGJQvHy8gJQpzNPkxX",
  "key10": "5nCxvdw4coGDJ9t6ive6GBf9TzAEtcF54TQpHGXbNjMY2wBNAuKsq5HCL2mukLTdUx3JPpDizVfuzUkghKmwKZn9",
  "key11": "2e6hY7mNSkESxvc5XkEX72WscHG29yUhD8YzAvLSajQSdRVMBMA1U5r4sTVXJhEzuVuitSWSXmubWERUvVEdzbUB",
  "key12": "56xwzLrQUM9h5hA6EeG9EW1gQDv9xm9yRJ6E4AewEbL72tdNqRZGBmfGo9gQgPwhi7oXLmp3NvwLZRatvCuhKz9v",
  "key13": "2Gczb1scrErPRj5kbzkpusNL6VWEFyfsLkS7ZYJ6NLbepV6fKixQEGDfAigvMKy24hUJUg8bU933zJXrSCR2isqL",
  "key14": "JTTPPf2TNx1dXvu31LDUjNLpvxz4SVVScG6MAmVdX25vidnLN9u9oAKyn31t4n5ixC29YP9VhYkEL144Bc2NrL5",
  "key15": "5zcex1bMi6vJPQ5Wrff7fdYqp5FZrurvPYnRDJCtwEv9JtZi8ajUuPY64B5KS7LHqmRoSVZY2K1ABRK4pkfvN79S",
  "key16": "2j3aCFfBLhxyeoJ58ynCRsi6pkAoCDpnH48yf3JHUuUCPXnJs6CRHwFrxJJqSRACphUp9UGQfzkGAxaaVB7dCGVS",
  "key17": "34i53v3vZf3STpkFHzwathch5vgaxjkPLYTL4gU4pDCLkJCunKhxcgWUCkgQT9RQAHJ3BtFuFGRZffttC1zBK13z",
  "key18": "28i5frY8rqRpK53vTPUpaAzXtQWGr5LQ5N7HAQAUh22jMrCHeKWWKHFUJXDZAwNsGGtrWbmHoK7LHBZMQspGow9V",
  "key19": "5ERDTUsEMVRcxjvPnL2faYdJxtQghFm93W9WnnvsQPpEvTnC25btcGNVSKLhvaC9Wrbfsc917zjMYcwYBiwH24AL",
  "key20": "5fDkuBesrVa2s7v33Dpmi7kxWbegTdYaDbcVxhHH7rdGrT95qiY7jXF6w5CHiYxmbFctSxwzA8C7CwvZiJ5AvEkd",
  "key21": "4xcWvcgVDEkDuw2nmfHGde2ZUisqTz8Jpn8pAN2GMGvCBYXcyoSGXhYRBZB7FWgExDdwUcZ5HevJHyU1QoKj5H1T",
  "key22": "3xBhbaTez4ryATPgXLhyQMAiJincSxvyRWKdRZzyaZpiCeyY2B5ydFVwQkXj6ZqGhAp7AY4S1efbrzFX6dUCRtFT",
  "key23": "2jUwCkRX2Fx3rRbgrbZ4uJX9YyAiNsPxryRzs9aCMMnaxLRYXs4Pgg7ALGH5XLkE8NhNhWgLHnnd9uEKvmfZJRJX",
  "key24": "4UT8FEvYTz48f3c9zmGUbz49FFPUWxnahDGJV5enVE5xc8zvvHzTZom5WPPmfiJKoBq8HZ2JnVxyXdjJJq5Tuj9S",
  "key25": "gD1mLCf3ve8qcHDMvvCUAdr4LkHQ1ScdrwftK2WpQCGRrDT4mVGAhX8JTdtSEaMFhiyMRoSQVE6XHwMa189PKav",
  "key26": "4xtSWqkg7TDMWP3tBiH97DFq9PvRsvtDfufPvgHdnCMYrWGy97CybY4owPY7e2pYdHBhRHoVdyXi4YopM5ZUrZBB",
  "key27": "2N4WHrLc3HLTC59aVJmHmdmLYLZVh1ZhxpMmCMDhJyQqvkJgyLe3giJxesFHtDVw9P7SUukNtEcovk9X9L4kimQ",
  "key28": "4MAAp3fEUPdcjeyughki2ZxtNip7cd9hzsUKNXvkZ8eh4X5yipu8AVXUd1Nvn3FYopMNA6w2TzL8VJzMGJG4ZcBe",
  "key29": "3NHJXPLZus8LCPaJfqMbFYh9aCz9dVdcijWzRU7wUnCYSx5YttEhQ9UFQyaQChx1U19TCM7vZoXgwJ2xeub4hDW9",
  "key30": "2GVBBsbpcvvCqHdrZNp8GYojR76YyoGr1duGiggF4LnJtAG4WXVpQifMEMtuEv7hxaPKE648gDCkK1QF22eUTvXV",
  "key31": "4Tyh3setqh9SoUNtKNjUVGGRsgHdNMJAAc5Z3QhjKYPC9SvXu5sN4J4ebCSeUSusxCfiUL6jSwADkY8ThZyG3V4B"
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
