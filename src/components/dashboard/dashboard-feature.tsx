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
    "3182kC1SXacfr5o6GJVkMPnnMWJGtuxFWsejgEjNAcFDm4CnBGVxEuMeYZhxTizV1b4nJtwY3qBrqaqQ7KjNpBAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NrKHMSvvTVSpa89yWJuHWGjPZ2gYv2VEY57mVydtq3JESihGqWWW842yEKBNp8WE6pACTwjLizrKMkWXMSqZGjM",
  "key1": "3zwb8SEDz1Uff1jPz4H9w8PdkpR7hbSpNpgkR4f5WRQmNYBxAd26yh3Y7ZB9n6G6oTtwxVUxqNWnPeDERjpV67Gp",
  "key2": "5Y5y27xC5wSsL8AXQx1TE8nqqTxfryQNxPMtCznM72m6fXoYjM9VDsxGTWx9SDBpuRf4JW7iEPcVg5Lm7K1tnhtJ",
  "key3": "2QfqBkzsqaUQSVpFuqa8XLjZXMa4X8GLuG8833DQgnjt1RjdCTcrgeJCoWm2V4bBW6133o9YWWQm1PLZCGmRQRxY",
  "key4": "4aznh8NDUjJsuC3R8GjLGqj74xgUFezinSt8T8iaa7FUpaNt1pPwAtuFfYVSXhjgo5nx9XYjJntdpKwt3z8Vz4aS",
  "key5": "31CUNr8V51mJQMoj3sRPwi3JYf9MFrpxNq4XtwPPVF5qnj2A4ceJLcCr4MoNnm7crmDWHYJCwutkLBCiaoUxhMj4",
  "key6": "gviwSW2YfQw6P8Ca4ZFYLofTFgagSr6zwd2hNp1Mhw3fpUZhtTFVUnMxrPPeSNJVYtNaSQKJov8uBAAh4x4mSCu",
  "key7": "49SDd9B9NEwLhyvNYLVmbjPCT5iKcT9eC7jPqxeEfkTXmSVDXRSvqH29wEk7d3fgPkWWQ18UfyebAMFcY3fPqoMu",
  "key8": "4Qfu9ZXVo9jccAuKJiJ7biNMr9AsTL83Ty5kyueEkqSJSgBpddCYCn5CCyJRmufotvzv5N6NPTptYooUR3n9DZmj",
  "key9": "53s2E5EfsjmxgHukCm8Kd3RHu6GnAx2iVCcahpK4A4HrX5QuVuM17P3WYrTiQc3LdNjY9p6rxeqPjgLsUCytoCQ9",
  "key10": "5KfYiVJv6Lprh93P4hpYWoiDKJ8FJeyQrr2MNE36wdFt5KiaJT62Bsecvdn7kS15oNUgpxAPs775nVKYQJPsWf6o",
  "key11": "2JHcJ2X5xxgwaroWSScj2Wm1z4HuV1SUEcapTdfZY6bwcjtS1yCXt8HnNyMeXZssasrjhGF7vSBypmbkKcXQcX7d",
  "key12": "23kcnQ7WL8UJcDy647bheoeBBr83ADthbQvv4NVdZu6Nyyv8eeQXDmHz5GQZZAWy9jmNBP37BjP8fMzXmLt1bz3o",
  "key13": "63ehBrVmTqwFtfyQBXehejFBd6VY4b67MziRX94LuiYSXg11BZ9PdKpCbV7eaia9mdo9H5RwiVKWNt2F63aMtvHP",
  "key14": "23LFLUgQF6k9zwCpQpPFWhQrV63K3btDmFw99RZRKtSdMMkS9u875ojiPNtJD2gKcNvWZUJr8UPVt5uAXziJKzyh",
  "key15": "2z7x5Bv5JU6oH3ppC3GZW8hyxkF52TXRS4urLFjLqFh37cdNBxtaxLtBkGPPjQuLsJFF8SsNvhAGuCNjSpUjfsgi",
  "key16": "4gz2YBFA2gCcgrW5SwmpK1JvZCUs825gUgWzucX9zynugfrDhh18B39j2WwtTBmVnBpJ6AQxHqscAfZygqX1DqTt",
  "key17": "3jhCMWqm74g92vN6N58AjV6qjrdF7QwiPbbbHokAueJHJL6zsPhgH5yBbwRh2ejj2Wt3kgK2Vu8aGZdcMqfNWQBY",
  "key18": "4Fk7vKp6BLiNi4iuMAK4LHUbQk9t1yredSebus1DrFKwsHPSv1RuUZTLYqNLYYBXpHDLD6srJWjTznB6hHuBVfPE",
  "key19": "5oBvNMTuQpvjRQgBK2wHpwKBWs1Q6akzERcctCmS1Uzmu293zvtngavTBBvLJhjBQtcmX5ATZbk474uiehRNxHN9",
  "key20": "3F6isQ4z3gHoAfuHvs9u7MSQEAh4cqcM79krJW2TjuG9BC8YYsDnRaoMuBu5aWDsr85zN73rypiMfhbzN6NV7mch",
  "key21": "4tXaKzXfMra2Co1EUjR42MNjuT9QanbKxAuwesqnJtr91Go4T9pZK6frumQSQnJRWzRjjn7oSH4om12XACcpnbj1",
  "key22": "5E6fUoLh5TZKxigaGR9uy9UDn3JyVniNZBCbtDQWZ27nWDW7LizKronrvoo5qjQhGNZNVDzttRibTJCmeyrgPqHA",
  "key23": "2wj9ac7ddNndVwQfXNZ6aCbBAKMgs2xAJhnt2uStj1cMjzwANdcmxvL5kbS8ZKy9Wjo2P3wwycJcgvsLHM1hmLPp",
  "key24": "4uYw9wwY99ZdF87sCZaF9EasSg56eksLdC6uC6WgmnVHDnwmPSvkrsVUEEcsNYtqUdRPK6hUPeJzvq4G4x9oGBWk",
  "key25": "4sCgmTJE84Rx5JLMDUm1DSpsrHWGJuXnmNYp21ieAE2Ttenktj352QTuacMFvC4DaBHNH8Kbczj9Pq6a6uaDPuac",
  "key26": "23eLE2qsa6o4QmGRcAurw3aQtLpfwWzHWgJDLTcXvP5v7sz64dvrXdAgoJdDAuDyxtFiAc8dRoxN41nNUaB6tsC9"
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
