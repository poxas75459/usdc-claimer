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
    "2ZgKdx9cdZYJznJip4yPr2JtYM9VhTH3bGuF3xz89NdUEKxPq94iQUHVePiBnyzwjSeECFSGwjxCUtuLFNzYbQwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HL3u9XkTx2FzsHa4sY3CGSyb98eEey3zaGG7MkcdjgBSYeA535mP5iL86ZPqG9LH5bj9hu7QGQ42wSR1KBdsNAM",
  "key1": "2RLtuH2opGPz1nWnNF6g32CQpPovvwz7hbj2tP7a1SsMyZbThFBt3rARWTuVsDK4ti8qNCN4xBqA4d9Rv4bPNKMy",
  "key2": "5s1zDhcZaZMTTJx5vkhJ7sxh9nuZkWLtsLG1TmWdUuMNMxnEVGp1bPVyM5pYrz3oH5cBSJXgoYNFSCzcMC19uUFC",
  "key3": "5vgYoF2H9VCHearusKHoBiD1JQ6pe7JPEsZASUA1GmYR9FBb5zNXdLJXV4eh4mDCUuL6TPVqhe7PZJjBdGyoewLr",
  "key4": "5g2MaYFnKGQNtAv8JvuNu6dgRe3rq8ZuYRWnxFZ5vJ3YR7MKbhUucgsSZ3Kvx5FtZ6nwQE1K8a9DMXC1zc1PrnKt",
  "key5": "5zeGvfpcMgL4ctG24eK9oq8eQdZ2swibMZb4gzVVwboQPu1YKyHFj8C5BdACGY6HZgNQjwKVXS2UfMo3MwA5xvdN",
  "key6": "3tKeac6AQRXRqfRUfRNumgz1AvGFkBRwzrGQHYQEo7qzpuk6uy8DK8C1s81qvyyi9U2pM5AcWnffsB2tNrnmkMRv",
  "key7": "5BsYSke7yfcxBQcFpm7pu1AjADifvc1H93sQoHc6gcpu2542sjaJszi5BUzdLsrTfMfgCznYPiSjZznnBJonB794",
  "key8": "2gQquU6YFvkTAyQh6kcoTY883jmDvYbRar1eJSdCxeMD6gdxeQ22WfcStUgNawKdVipXiT8YHu6CWS9Un61ybYtj",
  "key9": "2tSyrgXTJqpErxwGtQUjTxvdpLF2dcbF15LxXHRZwAQWF5vcGwwXL4Y4aqpqKSV9NuSVUsHWbcYsm5hE1yaBkGwq",
  "key10": "zwCHD8LyL7FF1mtJKdJa2BdRkRWaRi3EFBLejXh7vgnn8AgjfmLLju3znskHSKVhRtruvzxHpwWswqkj5SxWsTj",
  "key11": "34z7hhTyCmRk8BPkVxKuR3HZSzviJKpVQ5nPwr3uHaCErYn4jaFWPhHm7uQ3WKmErkS8xchLxdga5QFznW52yByN",
  "key12": "5vJFQBsaiie2t7QQbYahLZQ8uwf5Byhk7VAsQZ9UqQWNsX9tqCscAMEpRY8SAvyDnGREEPJtxfmuBQs764wLtpun",
  "key13": "5tZFqybB1G2R3SwARwCMf1iaodAgYTYwPz1Hj74Ed9HZ14J7YL7noVyeJPrRecCDcefG1Dd1DG6XEojioH7u1Keb",
  "key14": "5b4CjB1jcSpKBigAefykKZPXQD18RaiXajQtqERc9o8yUmLuSmTZz9X8DzDEm4USw2i1o1XBrTNNiYW5rBtScf8U",
  "key15": "4KXYWKrwB8T3SBSF74XZJYMxDb8Mmy9hYSjgXaSXL7VtcLFCDeYzb9DvAKMj175G4kuc3sz6fJU38qrrknaXrujT",
  "key16": "2TGfS8L4fchPZVtHS2uKyFtRmv6UrcrBjyEFsGm8hK42xmiYq5pU9b8zBdYXJ1M4DYtC2hUBoPMfjhYxJSai4yP9",
  "key17": "27zL4cDFPtKCpubezAWQQpTSa9X7wrddq68KpcEu9HuoDvx6oM38yj2WcSKp3hRosfbjDWoQ5M2ajGJiTVjRFYAj",
  "key18": "3Qzs2sAgHTqVuTXU8fzJqC3Z1CXtnQr9wZHPM3WTygf8vStjLFNGtAoGyQdNU2x8YzvsK2YGicxF1254sn6u3Lhr",
  "key19": "fzth7Lr3cHCs7oWgrrRmaZJtvMXQrkJJ8GyPZ4mkSzzGiejcdDofEwoskeLZnRkURiSSfb3DnhkXZJwcMxa4EGb",
  "key20": "4SnsTTMPN5Hhi3f9heLgVcu1QVJLRjTd3o1EcbKd79rQdE6hBgRZLdxtXueCV5QZueevsGse8xQie2eesBJCynPc",
  "key21": "RLJe2n9n4c8bFJiaAF8MXjQGGkkeZSk5RT71Cvq4vgos3HQ47EFGz4V1tVE4ry3QjjH5oK2385jEjdCHK3woG63",
  "key22": "2GtXRXEXLxtxGyMpd7Cx3DqbzGyYgLPtwjxz56SQ6hDttqjg3UVtmY5nfQr2HXoJg8dw7mTzRQ56MnGM2vFZZcJK",
  "key23": "3BudhAmrjryB5erEDaLeXifb8Cg4NiSy38Pkzj7DRQxKRdD4wPeB2yg17kbqJz9hZKsEWp1RsdcYG7V6SQWtKiNa",
  "key24": "55wiy9Jvdi3AEtySNwGBfpC9YZzwASyDc8XvRZREPG49quG5ugKsvbiysH2pgwyxnmqbAzgxaGb3jEgTq5ZyvXBy",
  "key25": "4QNoohrsnpCafyL9kHiDKWg1syc9JBf32QK4bwxH9N2WWkc4rbXvfc1dN5jjjURr4RmuyraBnLnJ8GYu5wSMpxPq",
  "key26": "5Ev7Xx4gT7kK2t2DcJY7xs8JnwKPTC6AWyL4mzW7VYNeJnJKnCVFQJo9D17V9arsq5SeFngB73cpJovE3P7GEUGf",
  "key27": "5SC3aniagN7w4dRHyJc8KcZ29vsQRHk2icw2K2r4hDPKiy96mhg5ym2xyjVkHRbXrPEFpy4LRtVuuV5AMTYbvK84"
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
