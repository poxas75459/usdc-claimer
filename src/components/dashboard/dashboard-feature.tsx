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
    "4sUAQ2rBLBJT2789sdVkwLK533iEbqwbXwdxy2iWA7aoiE2qDPVbTzhnctd3WHMyNpkGstPXyGYjF9x2uLE9qKfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVbgWNgyc1FweWeL6yDAxrDfCtiQ9z1B3BKnyrFP8ok1HJhuxEbiSCqBpLNArMneCdqZ8Qa1CCKY5bQu1LEmdBz",
  "key1": "3dZPv4DheG3qdyxb5FMgxTu5pQgWRtFqdjoajFXhC87xdF9Uze3upCesNWNZZZ6iWR2pFpDkKaH1abbVG7NrLuiW",
  "key2": "5njL7brVTNuvi3xNZsabwPrM1nBt4NsTjQFS8jffQQTFbcLtuvCKDUSpo9NvEzrhAjx3xz2XeeeSLtBA5EB3P9u",
  "key3": "4esfUkMwizJjvMxUkRW7tL71TYPXss5SWxJ1UEYcAfDwRDU9ee5bW1ta5bqMbPn4F5KC3NF8tRpxHaEujPaS5iC1",
  "key4": "54h4RNZpn7FhLqo2oc6xppfbQWTUHea1jRUXenygxAByYzA3suTAfpGi2cDroJLgu95cxZGR5tQtsicUo2hkN7X6",
  "key5": "8b1wHLLcKX3SV4QibB3veyjQ7kibQjcs1SxZB28Q7XVgHXUvsfzMRvkessTnFR9rJohpDhpc4Qi96U6PdurMqiM",
  "key6": "Eh27Q4vdQwBTXGzyfMTvfwmeDePPBdMJbMguUyow24wkPQ1KWoJ3Nua6vYYreTnkpoij2hzBqn1cjCzHwa9uETD",
  "key7": "2RBtjQY1nkim9BmsgSwvd8eBj4CT4qeW1rDBrSuzCZRHzJDvVVQUZnvS9twUxHd88kj2cNKqakvVzbu6CEEwH2XG",
  "key8": "pzi4ShN4zv69JTVVMGdBU6LEpxoG7KM4x35fYB32r7AwtNF2UmmwKMyB8PdqfkVT4EZHPy6DPrJCQXFPQ9MqLwW",
  "key9": "5PLRnUu2LrqE2rZ9sWdboss51FP4w5VjNTPkfqpKDgjExFErgexdPj7P2LpDbjgyYuRDA3JtbuHMJ5ZyccFg48Yr",
  "key10": "45sxB1VjB7jPUWqToJWEdkHvH9KvkpNNiPZKSTj76zDGTbvgrvSsiJHk7ywcjUPHbRc2P9t1AJ2aJEZy1zX4wKK2",
  "key11": "3372ReMEithoaNkM95LJr5rRDdx95NLgZg7UAJff6RcjjQtz77mJtrDYTWR4iSBjB4Txts4E5dCx7rdLjGuKg1w9",
  "key12": "54gdYPKhJQBCQztmS9LfHWWff83s5n8Qc5ZhrqEgrr17bFVQY211SSpEAzwSnKUFy3pGYcZhfBiYhtq2DZzTct7q",
  "key13": "4yzzmPH4aZt6hdjZiT6inaFsETi4kSAmozPCnkaQZ3gdAazzpP4Xud12NGujpBk5jrcxC1X9SoQebGbKoE1SVgQM",
  "key14": "3Ny7yvPSEHBEjzZVNGTrsPFjBzgudVFLiyD6ybJcLPSR2KLZ5jxTv4t88D4K7a41mfZ8mrbhwiuWdSngVyxzK4rh",
  "key15": "5cSFY78biN56x5WzRueB411Mh7CXQE7vp6iDfoftQCvypeSDnbfQB7312YPovWHmGEQJ8ZY6LNQdMWuNMURhF9HU",
  "key16": "cR97WGySsnMs1NhA7V5v6CH6c7AesW7gGYqZu6cGt1K6Qw5YPTLs8GXAEJboaDE9ZTbeJTDQN28BQA5FAJVAuZH",
  "key17": "2UHiS1mVs2AKKt7ZYnFzuX4NV5TmtTnPZkkSFnVfcfwXFVz7Gie2QD5WyzdiT5ip6ngTgucnXDCLXwQRYbUazt31",
  "key18": "4WhtQ4npZbpBv8zYypNBpnS6Y7tBa8eLz4n6fASKHSzWzRRK9V9DTfKXecRJm95YeqZAqTnP8bn72CHmcLGYHGDp",
  "key19": "5uVgkJYMi5YLvMKaaRw2kf9RA89sm6Adk3yGD6ekzk7judxFS112GMmY5a1LmWuGhpXRPd2yHBMbbn4ZKRS6d9j8",
  "key20": "3AUJkzLcfXh88jtQAfzBM86V4xdevzdsZBynMcPET3opH6Ndo4K3EXkai93WDsiocYupisPeFG5ZY3CbuE2UnJux",
  "key21": "2W6tB4H6g8P7v3Cc9g4Y8yYwEmgGK8jUwrfufhixU82nh1aVQxeVWNgnGyQhKTzViFbw9YUw2MfZV6Z4h9SaXrj",
  "key22": "4YV6wRKek74vQ1MAiAe1X2EModwq98qp1MjjJ22e8gxKVCLa1Pxsnqf5BMDFnjfnmnY8sdg24BFnaqYR3NEBLBA4",
  "key23": "5kgBtmH4cqUgFnNPrgUg2FgFabdLHgm1y9VCEQZADvAVaAHR95MxagWd3vDkfKEcgRrmP4Qa5NiDFNb99jUh2DAM",
  "key24": "3fzfLjs2izCPqKK7xfXxxyvGv4c34UeYA8CmPcH4broL7CyECyHH7H3BzunkdE62PZaChNsbX5GqE3a89hFdyQG5",
  "key25": "3upxp8v4gsjbPJB8oiW6xaSwcga3st1cCtbdKKpQ6ZkENGAMPSkJzZtpKTKGURMsN9PASa86wb6u7dAoRbErPuFt",
  "key26": "42ScWUryYn52YDVwyAo1uhT3ayy2CwnhwrhdbuUJuocri5AfeoAC1Gi9SxsFrKoFQyp6zRiPgnHMb2PDxTBoQrqK"
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
