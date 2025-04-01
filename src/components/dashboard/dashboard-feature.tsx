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
    "2nnRrg2xhYFf35jHoMusxuKnViW1JfVgGt9V3jqxpBWz6gEngayNYSQnKD2RhMocKHz9dEdhb3wjQ4HpgjSCiQvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g8NdU76TTW3z3m2cUfTzvYcQPyFCq5FJkr5G9SW2ZHWeBk2efrRFCsArzjURmCdGZ49iebqYV7u6VR3JNajFS3K",
  "key1": "2Mx36dWwLa1k6FrG3H9kCK2qKW3E3uqxGR99iXNc2LhqHwXXF8VCPKzufBr1QJqWrHjHU5H6QNFftR3vVBxNDQKG",
  "key2": "xGqKuFNK8wu6Nrp6HA92Y59ts8RqVLf8FeT4de9G13tb3PMBVJqivyaFGrqmKrsLNM1XmBcgfLX3aZTUXqaFRjB",
  "key3": "5CKtVwrBin1uLqkdRCqCmwitgEZmzaEPQjhjqypo8tgySdv5gfp8qLjQuURydTiZ5q6CKC3YS9vyEbTrGFd8f16s",
  "key4": "43gSiWTSsmNRtd7P99uchJdvvyhDzbUXYd3MuYyycZABq9QRVoiSDBT4PLA3pa4Y8wNbqNQ14dKLbL2MHEdMSvi3",
  "key5": "kovHm3G2sMFVPHQ4MbL2LnPPnMFxHYMFfM7YvzwfhB2xgWnhy6BKyUdSF8baE9kDhtRv9nXyTXnFYGKJnLGN4E5",
  "key6": "62i9j6P7Rp1wbE9jitzUSxCpcbG8wQ9ScSLxQZw1n1E5oDMiujBVwmjcZ9Tm2EvscMo8Pqvmq79pgj92gohTeMGA",
  "key7": "5eC1HxfwjwqjyMtPda3W22gTvsMwpoLV8ZTQ53irvv4WbFNT5pvbcBVHYjkoQ6i5YXjbozdHtyyZWjfUE8myEELZ",
  "key8": "5CmKM1TxvEWzHrP3esCNMPXiYRfagKqbA4r5eDBqi19i4UtACkuaACRZ3jsKvzhtnDnrwg3MvFGyig5ge8y7sH2U",
  "key9": "3Gk2WTgb7d4cew7JP1TKm1n5Vwn4sEjaMNxz2ME94tE5pyATETcgcqb4EofSorb7iq1ZHGZtW8GxHRHJpLsUiZwc",
  "key10": "4NqMBERaXjVZmDz8QwQ8na4GvX6xKsFFfHuyhjjLR1eSrqMsVwRRnu6uozx1VKxVNTDBy8hZkeKgNd9iifcWerP6",
  "key11": "4ePeoruCTV5mWeizndtz6RCrjAmivCtXFisnvD4Eq2nAufjEVymnd1dYtBZKcwzbCFxLev4eR7qY58RvaR3SnNJR",
  "key12": "4vsZPdX1nSucMo4pMpmZkvREv5SfpoXjkFbWwLWDJrYqdx7scHKQNvQh8msE71AcaSgSUAzBHBePFtmf2kz5Zcmk",
  "key13": "2C7JxXC86bk8CpGNJ93nCgGbNruz16uKQcRK2K1EneLWvcw7AcZ5bhRfu7QcMrsCXwwzT1pDGa9HJ1reWwMgmsmN",
  "key14": "4sr9CaykLf7EjDK4cEvxGcPjpW6PJT3rhaRuFQhDayyWXTmZVw2xHi5KcvXt9DQHnbXGtsTAgjQ6cQVPi6jCYSR7",
  "key15": "HeBmQiY5ZRbxS7fBNkSfG9stbB5y1RvrALzbH5qRqBvMwzTTKoiPaJtJ7RMcfKKDrquJsFrvtvbMhq1D9iWJC7h",
  "key16": "4yvMBQxHSjn9btBZfU28Wmg9KCjb47fUB4MWfSVftgBewCppfniPveuQVesAxawqUCtaoAyeWxNjy8qoe44FDF5p",
  "key17": "4pfVKhwrw4839a1H76NxeF2LhPon3tseFA1KVf9i1pmdm6hdCt4W7fRdMRdkagzUjG91Uy5Q9X8kyvDEYDQSXxdj",
  "key18": "62UD4ZSGbXTqi1xXPjvBEuAPsrx2EuETxDSLW6YXoMTUtizwdHw47BxiGJhC46mWbYkXkL24GhfGYPH5xakVfVba",
  "key19": "3xy1Am9FAWb8pBdVdffdDc8F6KDMKuSJ4kTjX27uUx5m5JPgHY3BYtQ9JE5U4SWzkK81rXJvqBVMF7RDh4aBbakt",
  "key20": "3827EmMzCsfop3P2vp6dgdKg7ST33xJMqgjGkzH1xnBwxBwik69WgCNUGf8cnHRbJqvVkSxSRzT1d12pMynHZeyZ",
  "key21": "2RiHTXxH39CZ6NVY93ebeFe8h8RiLj7WdRV3kprCAYfwoVNShzefpKEQFQSKaEiVRhNk4r7T2WmUNhM3nNZbF5HK",
  "key22": "QZkmA2GSazXMy2DJ4UtCcK4cjx9gLKuBnNa4iCfXbrY3C49yzcBc9KMNk4Hyv1H45iScYRELQxySKkgXkc3zUX7",
  "key23": "4bpX1V6KmBY58yQDRvdLn6XFMbg9v8RJfi8mS6mjtjHtGpPmJfERBijWB7jsJf3TND9r2oAWa5A4g1ResuBMsgfg",
  "key24": "u2gaA8ubD2ohdHCXCC7P3jCwKdFKtzNn2ozLsNMGuJkKgtRXzPeeUs5W1eKfiL51HNTvNxMZfJRbDiEjazdW7yM",
  "key25": "5uZLSj62fG4rveABvp3u5a4Zi87kVfyKXajpqNXUYSDP8eGhqq8yBpvgqi4MQCSrPp3pWKMdAB1Hyj4vgxvmf1MV",
  "key26": "31in4XUy9cvgVKyAKbTwMxjXXfodc3stmDcXbqrp6gW7HBPaCHw9Az8qgaEGVxoEtrpNYaunZmKskkxcp9pddWQT",
  "key27": "2J9asBqxYA66riYHYJawCjjnwgoJEYLrtuQ5Vg8HuZHgK6Appe41RVHqn4v9LoztT6FgrneetEKfTX1nUSdBDCW"
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
