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
    "2JQmtQLKofFeLhtDpNaRTMf3duXLZRsFZkaQJiuzvurJAamG7LBegEs9mrzq3YXYFmUhbkL99iF5jfBWCg9ExroE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h4dsP1DzGT58qnsvf8uCL7hMqqUdBMXLwGgR6w3ZiYKpGmyGDkjDQC2LyB3qC6jG6AieVQPuiGJFdSaK7xo32E3",
  "key1": "3S3cHqMBZavqTieY9Xw2F3w78Y92ci8xuTCTf9zgYmP9aYyzNPQLLe7AGWNQhSUFLicBm2fg1ymgW4gFmSe34cf3",
  "key2": "27Qd5jGTcH7dvh1yDvnnouYiDiFd4SypE8RTSqamuGL2cUUX3r91wdbEjPnkdFVqXCbx91dAVyzYG2iQmW4cxkep",
  "key3": "4inAFw3MVnnoMtGjvJ2GapKgU4tRXw1h81mmxm9B7Pa2X9RdjxVkanMCWJzZeTy3c9Aa9j26Ph4xsUjZy9Rpoyg",
  "key4": "5K1D5r1hHyJj6XpMymz6tn8GbdL4igE4Wd6H5HodNiPEnevRFoZ3wfDkyoAcpFVneZZ9SBiMWFY5hmf9TGcZsuGB",
  "key5": "LXnun9aizWJm1EB5Ykj2SYqpThZiK6rg8naypkxJXMGBhRXRnhwbSbwApkGjNNETzFMczrUG2Si8r2AoACoQcn3",
  "key6": "5cApNu1MMxNsEuKEnjFPc3Mbgd9rHpewcBTjEDUyi6G33fkwkYMTpL9ovnLuaqmz2fkyZD1GH4L3ThiDGsLJCEFa",
  "key7": "437yxXStpEC7Yz9ncbcsWoE8ZJFeXj4Tn91djzbw8VkFdnyQLaF18qVoGNFc2gPYwrDfrA8YqkPHwqNcM1PCcc2Y",
  "key8": "5Zkw9dCjGg6uJkzcMq8BNyJr5z4DkaBfretfA1sNN7DLki22xyHDNUUCsNMx36Mud8cG1QZfJABvuHs9nAe4hXqr",
  "key9": "5AfWMPcfC4EywuK8nxpoj2fFUEb95kbVMG2h3h79SUym6RvnNPssVkEyLV6DcDaMHPQQBkG75b5ScQSQDEjBACtq",
  "key10": "5VJiTiNpN4ZDx9uSbA4L4PCVAGKXfGwSjqpnbnuuJg8JQJeEkRfaYAXXJpsFCPeBwbvMLRbRyLrTwnVZYCJEo32N",
  "key11": "4uuFU5ueQ34p6fDdFcy7F6Z5Morfeb5Z5ma4j2k4CLDwdQyXLLXUFwdWRb6ZXRVKt1FXTfugN2zzh7MEGk8W7DSB",
  "key12": "4zq1zCawrGrYVFQbhx8dqsmGG7qEWz4JPyHyVqdELnc29Q4uZa2R8R2Vgs3EjGV14NvrADZmHZidQtmW7k2zJrzN",
  "key13": "LaJAmNGv9Av2DJUtsxAbenCgG7ppXQyBdrkTcPbUrxbGuf7ZXd6RJuXE1mcUw3XsWJaVHgMPxHn1eAYucfCaw9D",
  "key14": "4WpwH6sxrMz9zGs4XWkhWVwpqmFaroPh3vzrD3c99JPvfjjhLv1QVsye7oRcV3wpWAmQ94aC4BzbqyMKNQ19ZAKs",
  "key15": "2xapFj1pLzYRGeCZFGQjTZF9eqXSfUF7yXpJSG8EUfPCpsY397KPRcPyRxQNs7yUMhhMmSvmjjWm7makpVn7yBTQ",
  "key16": "FXPwSq7ebqgJiTKXWmFUYwcCir28JSeYpLdhLqZbGzTtxEn4JCnU4cuVz8W7gh46j1JTZxZdH9wjR5QTQVFkNNM",
  "key17": "2iCczw1cPqQmMg4nq2YZQeaP8pV5KHEnemdG9EzQ9r3BgSMm6t17x7q5PYPodEGB5J7cQBCYBXUK6wyKYhc8k7Gx",
  "key18": "5jXPNt4UsrbKs1wiX2ujeRXWj2ynhN8RmAPgdpuqr3ATj1W4qBfSbn4yTQTP6GSZxjsHa6HJp5wLGJBajcKwAybR",
  "key19": "TvLohMjhT3kmnJrKmPfsRTyWnKFz4MMKrbdrSKRyLjSZa5rCH4aNNn3mA9pkC1j3Ce1ayXBfjP3tRKFCaWRGVoJ",
  "key20": "5k5g2G1vawiKtQbgfQk4vFrkf1t4Pdp6m29JXpf5owLJhQ1iqzypCo82xRn8ougcb8s13wFCPjGa1FAmkXLgy9Gk",
  "key21": "3BWGfxxXofvW7Yy8js3m6Es52GaUxj9n72PaFBy6j18TF3iyyL1hZ9n7dXrdNtF6xuViJfN7ivPbTTQ672yEWM5U",
  "key22": "2dvh8R2hmS5gdTnbdD3FW6yvPzo9kbUPmvmxhHjLgwYM54yzE6kbLe2iWHY8EmmmnuDfaQ6dWCMU7cNQe1NTGDqs",
  "key23": "tcy2S7ku73yP5stEVeXs9jwFrVixbNddicZLkFc3maqzTMcYEb2Wtz1KSrmg4TiGUuiaPWCLnsju27W9h7N6ijE",
  "key24": "5HBysymDVAyGkGeK7sPNZiFFYqyDDYzUMBtoabNY91vfn5A5zpEyCmZDH8799sVK4d3wUTHp5chCm6uApgKSLWMX",
  "key25": "5UcvL52YF5Z2WRvh6xHsXG2JTiBSpGCNzSGT4okcS8qNWkkvNzwNtCq9j4a3j4Beo7xkVnpSsZkha6wCSSt9kP8T",
  "key26": "35yRN7pPxmX19B83fJCLbXDX5YTzFSukpcyu766oQg4bjjAXKv8gkcVppKHoipsNPsvraZmoyd8pcqV5xo2rMsPQ",
  "key27": "52tvjGHAPDJHf3BzdrH3T63EHPmx9e17rzbDPbPcyU3jtCf7Qg5b6BFUZDZfNyvZAGy1MGNPpPcRmXdGhdK2GTPQ",
  "key28": "67EBZKKWDj3QXiw9JnJkrL62fB1x31BpJwu64Ut7BfceC3UAa5BjTgcJpFW8mL7WbaRkpYsxNaUGdEZTh5AECoYE",
  "key29": "3zQjd7UZrRLc7LfgPjrc3Lfr6DRTZTGTqYfiom8oqMQXGNkDg9jUL9MXr2WdhgwSMWj27Am7NzyyQnSdWQKZzJMQ"
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
