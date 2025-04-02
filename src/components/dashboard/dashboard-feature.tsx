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
    "3nLjw2nKVGXSCFKQTCUkevLtoXdrrj8kSsnu3sJTydGJqDP2cXL5efHt1TPuaphHMMwGE7CzSxMYg2dKZQftW5dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T12o5T29JQZVLnzxfaFWrvEmr5wiZfU4BjH2xju79X69YCoJXix5YgxK6dqkjnFmFKhRQHsSruhoMYnjjQTKZFB",
  "key1": "2LDXnmBtX7aNgtitTLhuipZoTRHVzCyjR9ekda8bWkLqcJ3eBZaJPcgfXLeFXiwGDBnfKHJGUVZg2KW6gG2Pd6tq",
  "key2": "3iJZ3kyqoYou8RZ78vaqpHcCCqJx2UBZ6U1Y2JwgMA9uYN4gmF96XvBKLeorA8ySGwCJECcmUVTT3WFPXhgHUvPA",
  "key3": "et9DFS1b1QMJH3zRcwd6S1DshfkRptKNNmC7V33voRwJeQFknyHFpuihKYKeHz4VxqYEfE7xNoftoyjnxmqueZZ",
  "key4": "43iTX9Kwqw6puDdZJi1sLGmitQPKZYZhCUWtUgDfK3T5KBuqzS2oxUbavNDyE81LdnFy7dxACAZrqYU8ZKCpE3XG",
  "key5": "VpyxU4ppAYx1p9Pq97SXXM9kYana5CQrHdU3YpvDNUmUuuoMYjUnEihGTJoDC3s4asZ12aUkcMCN1J6pQMQ6YC1",
  "key6": "41cQS5ZvyBxVDc5hrKFt19db84x9voFbDqH19bXRoKzaGpv7oWGvNAg2R7XthXjmKkH6oXmHrS1Jj7M8m23kpJ39",
  "key7": "5TA5RYbV9UTrjQhHMmJW3ma6mf1JohcKHDYBKXEUmwEL6iRvCLanDm3NKTCMjPkdRFi7kC3cYGsBaZZ13PkhFFME",
  "key8": "2jZo3Hn312cvcK4LxsTZLK6HJgnX7m9cXcVie5o8rVGuEmdnsfB4xfB9awCyfDpopZJmx8joKomzV11yPKvMtFAZ",
  "key9": "5LToZmx18Wak6tgGgYBnc8DJHhSYWUeJnCwx3aPJhHddfhxNUEzcJoAgyXmrkpyW1NThbQrFyoKcfQFucWMFJfWH",
  "key10": "4YuG5LoSJoo9qX9bDmrvPqJw6h2DkgvhorwCmuQsaERdjEk2bCjZoQ6QZmkWbqwEcmbzGzUQBo6Sms5pSQ4pBTLr",
  "key11": "349faSzBkVb7UVoBG3MrJDwuASkBZdqFe8uUmno3c12oaCgs1ka5dm8hHhJqVm4Y1qWkWffvLda4wjPaBRmvng9L",
  "key12": "4gc8jpDf7mb4sX3B4ABxVUppjhXSEs7iyh9ZH4RmKSVhQcgPXRpVgUtZ3BQA84DR7ZVPfAaGx47qS9EVV2jEzi2V",
  "key13": "uVQFhjXw58d5dR8j5zTkX8PpPxiXYJPPP6QJuSjvg2xULgstHHp9sSJk3PHZokHBBzbsPQvyYqsiXr9skFdHW5f",
  "key14": "53pHGfopuzk51DnL3A9kSNA5Y5jDihMByRJJRG6jHynBS421D2Ve9KdqeLUXdrGzVKgk7hRgNpT1iNj9V6HGMdFe",
  "key15": "2hzMWqLMwmF2Yf1W3FhcXR19QsKitANsp2EbGR7ETQjrTUEN9WbUEuiLwqZChZnoh1oJRCnNi9ZVpyBhQPA63bB2",
  "key16": "5ge919JDXgMqdAHq4vV8s3VN8JQ95CzbKSGbapV59bsWANz7F71D8XnC4B3renHFmm5Dc5nNDaWYYHCiNSm983MA",
  "key17": "3JrjsjjthHMaeJ7nEsVeZ2oxaomquJrci27SKe8jLSp1coVLuZZUiCwJZPpncsKNiUBh3v5odzgMYN6pAb5FUT5Y",
  "key18": "3fMADtYtDRaEYHFe1H8vH87JmE5vJcnQMy3VtJiWeV6bdg3S1LTrPVYgwSaRKVmvWFHEMJKHjhANkvriXdbJ8BKe",
  "key19": "kyqWW3vW5cEBHphFgh7Fy1QmUYvyCZK9gevQNnpNXwnbxof1C8cpHBqiiKa68876KtaC4tLz1U6qz6KKA1kcPMc",
  "key20": "5otn3oKrn1GaJp9JZ1xXadA3vaik7qyLYy8Vd3cb2E1wA5ZWm65MyshW3VxaCbAZn3z3G8bi2ReP3EandRzEXoyB",
  "key21": "5CNjRCWN1UECyp6HJEhwBLFTFEs5vtQA89jAKZebMGK8gqio4UVrxH6Y22HP9APCMRDP6xBXqfKgHeEaFV2FdLXr",
  "key22": "jhFTnYLNRVFghrJSSS3L4qtoBeCqDSbPxXThtwvRMt2s2JDUUhEWJ11uGFTEmFnMcHkTiF1DtvpHiNkG9EX6wCL",
  "key23": "4G58Loipt7rMJTdUjV5LKWYuTJVvZYh7BLhTK167EhovvfE8mvswiojRR1r6oVrJo5cMGCiEVvXxmmKnG5nnfGG2",
  "key24": "2aLB1AMKKNKTx25siUDrNWjxu6Hyogq8E4m6zAp2Bsaz9c18w3aFTgGwVC2wtxNWBbW1BTAa2rDzMdoNHr8DkA5Z",
  "key25": "1J9jWnJg7aRSoMnPJ4WNVas3TsxTydaECLdVtH8ozuHsFNw2exr5hpEK3C427RsY74CNvqfu1hK1xLkMtXq3Xna",
  "key26": "K9o5AJiuUyQWsVwYWJYk75tp5R72WuFSZ9Je1STU9h4fYNsb7NyFTyXGWY4eqGyNVF7YDmk5yzDSBa99ivhCWto",
  "key27": "5NFj3sRs6fxBZshT78QmytSYHuBRHGJdjLE7bEFvitqmVZc9psXLNSLXht2cgxpJgjV8RcuSr7uNMKWzB3hYLVwc",
  "key28": "GvKeVtNR7Y6Jtcn6uGhwh2E22x4TtkuYUbGF3LZKmWt8DHJtKs5pPcoxXG3Drb18NJr44h2ezEqNuDNSLfw4NGm",
  "key29": "2JCH61rzpFvgdMVtmKk3XjCWjDfnnpA3TcPVjvsdFKPZxS22RzBD7V1XchaxhhrFVM8nfoemcsM2FPUX9CvwJGKK",
  "key30": "5Tf4X59VYLG3bFC7PMdkdvBScBdUFDYkpEHtf8vT2niE9QcWUbgjx7gBYorPNPtWRjTcEnaEnApw8W4yysLCFmHG",
  "key31": "2FZNzk2AtuvdAVhp2i4ki53WQjcNyywQqA6t9Mekr2rAj8ugdsc3WgqKw8mrW7E2za9X4sFfQNLDfyjV2f9rf1Mz",
  "key32": "5BzzhtaiMcdcEirjSrdTG1rbEm7bq9wJeKFHazo5SQDYMCy8n3DehKmNFMXFVw8YXkHJYXfbr7tjAoAnYfDKQi83"
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
