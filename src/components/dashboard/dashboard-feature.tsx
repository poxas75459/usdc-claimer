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
    "dqa3oeHdXzPvqhN5mUzzUg4qvAoGaDTSDf5NzYggtQGK2kWwh5tEQuFps9jRwqmT1fpAgWgKkUPFDg4arL7m9Jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VKuvsypGM8bJFnJWP6DZgk5FtMmRdxhMkuoGvVAMrKBLHjFLt9xD9eTsYWqLifdQHE6do8J8fzRHL5zS7fJ31Ht",
  "key1": "M5CeNMRA3Was955eCoVEXa17NR5vmBf3rKRP27dAQxW5DqKnztJejhLMdfQtTZjx3GbafEBz9afhL2sFEvKqdjD",
  "key2": "2sNBN5ifFMFqfemLdphyqReApUjfef921VCVwvkbPVYq5ze2fy1MnrogcAa41fDWMAcRmPTntxjgPx18SXe3NtuG",
  "key3": "4edLyXCe9dZ5CmDG9HQgfWrn7NE66X4jLLzSYGxv9eyEdZuYsPHa2RYze9U1kY2usJjJy8pgy4eEz9BVVUAJJXoC",
  "key4": "FasKKgJBrNTAGwRx8fNXFYqwvxKU4GU7L7GJ34EmkvR6XeC26HypT6Vy9RifP2T92PpEvpeosnpVVrFuJ7SEn8p",
  "key5": "2EQFJx89onmiFFV5X6stQJQyJVKh6HYz5L6pHw8WFYNBGmDJRCG8baxBrfueL67dA5LmyRjXqrgrJsexGTztXXdS",
  "key6": "4PtJcoA9p4z1zw3rTZJBitjzD9WSBZShj1c17mZZyWrLBNePmEW25KdN9BAcREH57ZxdfwNbo8j2b32FACk4p4cP",
  "key7": "4gPUWRFwtR6L6X4yd43D7cF5r2Lg5z86PQnKQuE7tygQspGkqxqrbhNhe2gKYH4j24xv88PYsdu5MXxxDhYwy5gU",
  "key8": "rsUjfHbWxDPUg6DhfBZS7Coesy6PER9MeMLT7DMoz5kSpvt7peDojB3oG37LVXSBiE9TSkpJgufVWF4sjeVs2ER",
  "key9": "29vS3j62R9psCCMhfDstGm98CJ81rAfWbAiuSk3dz87Tx9wLiexwcWcvFUam3vW9krkXnw1NDYKWVkDdbS6YJzyF",
  "key10": "2Xh24VUiev7DKbe6RS64vmdpzYmFfLzKjnZeVR4xaphRqiWXv28Su1UVE28CUjqLnBFdS4hQvU7vxr2yYmz1hfL3",
  "key11": "36vURX4aswRPpPmgfquwtsTCYNzaLc66kPKVNesbYH5dSQSMDTVJd8V7sxfJKgHNAVf4PX77xcnBdHsYhdLE6cDX",
  "key12": "rKK5hKdNNkwykCWeMebkmKokvP6rXxCCUePzdKDSTm7h9Gz5eTFwDg6ajkUBtXb8taFpif3S5ESv1y7zu8MGK29",
  "key13": "2WNowedkLuctoZ4gLYFUPVtdv5X2qANth5deDiuY8ZAgKtG9TmJCnfta7BZGgznYmkFVRephWRMCiZaZPsqhLrDF",
  "key14": "48N4Ye8SJonKCgyyVa1EJxjQiJxicn1sh5H9pFihPEaBQ61Z7yqpuKRsHSHKBcTzVAMXfaVZk2LsmcLKL9GjZiPC",
  "key15": "5Wksoo5ShDUd6yXkuNFjmhaQgoreWsSiS92maDtYtCZ8vZBdyEnhPfUpsSX8Xxy1T4sAWY4sue5iM6TuSua3S7my",
  "key16": "2J3tFwXm3tHRUa6o13DciANLBD49uWV3iLGTp9vtNhs4r3U8hfKMCbPqXFBvoQKYXqmxECwo8N6cAyNbk7TEFDbM",
  "key17": "2835SRF272om4xioCakSWuSwGhaZVDKrffMm4XssFAinqTr9QZXZB4Cq7XSa6rnMSxT85G3AfLiz8vbRLLtDWUhn",
  "key18": "5t7Cc6pWLnASEMg2UM5jy9AJL6GyJbkpzxkmQohJhzJp2fbuAhXbtY6mpwp5G8fhuFApZULshqCqCnR3HrqMa2ac",
  "key19": "63kMKkTSfNE3u4CszUzpc798ZDPdtcMc2f4rHPohgP29Sfj2ba3vjvd3yDrPHbWWLxjWY41FLpiHjmeiRdLtGPsd",
  "key20": "F6uBGdef2MJM8tRZVPHseGEUYAvnqWWLAnNbAhEqRZB1Hn1TciBeSGWhivGYeWKyBMmkD1UNyr8Gn4K5RQXmaQ9",
  "key21": "2xs4xLhPdEnJStd7niRwHordss8G8UQcg3m2bK6XYaEzeMHWxXAWupFrHVNKzbM5xxEHesSjukMWhjnKwfPxLTte",
  "key22": "28RdkiD6cMwCDtg212SgvZnrUnQpG8Hb3yMFu6n29s8GgB4nPTAoW9JkWeimJcsKeS6nmFppxnFibeJKyBwRN4Ym",
  "key23": "DkDKyFtuWYugEhLUDjys8BFxkukU2SGnVigtHHsWzbEUXaX9eKpFuyn7KsLKS1PajZZV86gdxXCKvTP2ugd51GC",
  "key24": "YHAs9JzwysS12YfuZPu7uuKMFjECdE1n9PkUMgYJFRsfWtBHFidjzNHR84pUh45RsV4n4VwqHF95JyCp42qJhBV",
  "key25": "578vZeqzW2zvdKkAo5tpGNEmbXZf1mxr13tRjqe3bWwt2TdZHxRztub9ZEKPk4Bvq8JmNfdtpLMTyrijjyoLcgG7",
  "key26": "2xqtZquPuBB3te41NJyzbGBSSf4acqKWpLa1cvDdGNoAkB54UQuPcybw2G84EHmGo4aT59WfG2XK13cphdLt2AZ6",
  "key27": "2yoPR1X9akMxsM51ke79yACT4fRsUeugi4V4xcfwvcq74mcnZXvks6czqyq23E8DzcF199Yg2eMfNKgPNZ2kgLtM",
  "key28": "4kHPeVHxWas5HGR3SLmdDUovR4wD1g5m7byPdBj7WwBYKwohBrozcHVmHiBUtHEJCriNMPW8vXCKnYcwiwJjQY7g",
  "key29": "4gKPkvB1RHhRbqMvPkXGTx4m6cJ9LTPyBbHXfxZqwszb3iR3Kn5TgFcj6NSVj1mxKk5gk4VQ7gATxhPsmbJCR7gt",
  "key30": "5zdvwFm1j1J9hkE5ouyixsLAnxf4hbv1XG6LbGfiCEuakj6fZTqQfS8Q9mxN4Mrw7YDm8iN3dbKByDx3MRavVRqg",
  "key31": "2jpjn98itCzkofXdUMbzwP1QK1B2xwM9jtXxRMJ8AuT1QoLz7MAnr7pK78LM3kBAG3aT8JsJNtXQp77Aq81Aevar",
  "key32": "5h53xyW6AbSYRX83dXf4Jfjs9phpW2mQMSfs5VZzWDRcmxBUhzaZqthGDDonbtqbpQ6RxUmsLBwPbJDpXZ1cMLnZ",
  "key33": "2RN6x7T5iqidAUD4g8pih7rFfKEXTQiVPfxiTscq8aAY5nmALxxdASkQeMqGrHmsust9zoK3JahMiFoPb13BJW1j"
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
