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
    "5y8PWRTcHPxe8vLShh6My72L3tvkLxX4JPdKctoWf3kFioar3mcirhYnFBdaaSyQAJikgKe2STPfmoSgLpHtUFEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVEZHkjpCyeYEuZNsWEuaVu3rid9hHd9RPRPSF3iMYK4qqYKMSg5Y248BYBkwe6CwCTaSFWNuVgSi3AfuoZsEi3",
  "key1": "3a7KvZ8ERX1LWFbcs569QZZmdEo5eXejdcDQZheGyimmm6unv3gUuLUgMpgXqiE7uMrkkXfyUHCdwdWcAY9xz3Uz",
  "key2": "4p3RjyQZm6Uhx5YwkPnJMwmPtkvhKCyBr9LVJa4g1DFKPzVNJPQVG3TmYAY2RE9v4pdsaeoX4UZnJT5N7FAeax34",
  "key3": "41i2BbRBBAj2cEtiZWfFwTwMeZiWdkXSx49xkpDuftLrefKTLV7vjT36Myq2RXGA71jcmiLLw7w4jrEFvw4nBoEm",
  "key4": "56DzcKBxZkYahspjBAkjWbpUWL5adLYHKgF4USptDLuKtEDZzhEufg48dGUg1HCyug6pP2oopZuBFsNJXaQNy9BD",
  "key5": "31JkYEaDBkJ6CZzRuC64GZE9rmm86wnxjrrDhLrxStUyAJxkAATLSZmKsTCqCUQpuUE2iBWHkUscCxKc5tTgFkzV",
  "key6": "3HwJoBHdRf7JHDafF6ubcChh9TMmFrKoAQf3JkZiJmdum8h9pBcwSDBHs8TAysRbUPKf8h7e6CA5MrxtXJMZzdVN",
  "key7": "4YpnLb1H36weHFZpNQo4YBgn9tLVBwwRyi7LkkdN84FaiUTVudgWqRhCHsVSRkJ9LtMfb3myZt8iGWPxg1Vrg3AU",
  "key8": "3RoYvia1LExiR6nd8D1cYfKr1mdx6eeZua7LoNLBA7A4NiWhdKbVp8XMRqYNhbDqmFW7dYupmTXyQqe2HwGAqWFN",
  "key9": "5RbmEn1RHX13dS3jw93x9myGvhTs4gpnHKR5vBdVJY1x8tEdCyKSKa6FVBDojDzFnMMKbmKqTxmxipWUKW1pzLNd",
  "key10": "2U99Twtz5WqViUFXmjTRAkCqk96P1rtB8eynLXtJb3HUEHuf1fTWr2iZgi3FY1QgwKzisGwwBNrqACWHtsDqWwZP",
  "key11": "K86DJfB27RTpQaWwVkEjJVjrNhaBBX5uijre4kdRTzTa2TcNxauCQnZfL3rW6b49cveQbYLwYVpne4bPpU9pspi",
  "key12": "2CrernkTeRgiQnzWcrvkKKqGsvq5BvURJ8p7LkQHaaGyW9jX6vAaVUSoHBb8CGpSmGHQdXSHW4nzi5FeqJp88ifa",
  "key13": "3MPe7RijvagXngmi7rs7Bdt9vdWprgAEh3uDrpNRt9zAxKMz1WKWUjjduv4T3RqtDLj8XJ8eDfdpiqqFLLXxYefR",
  "key14": "5jxgMvFcU2CJVgRzL318jU6NJEtQvLj9nhLQEHAKpth1DnfXvkYEHjUg8xijm1v85bhXDFgU6Ke7jB3ry7ZKK96j",
  "key15": "5c1SFWvAap3fpo6MyeavtjM3jSarWuBJfDm3e9bgmisdncfHkXBapFWzaq4Tn9ajrNtmWHJUrtaFrK2aAFDMv7b7",
  "key16": "5Pmha373ZkSa4V4myTsSMqM29dQyBBhFrbxDrqFstxx5ahEzE6ePwNtzmgwZKcPbd7Rzs16nButMxY744bUQvo9h",
  "key17": "31CBhKrEpCh4easEaeXbYHtyDTurhrgm1Y582VUSV2Xzy7Dig3uYrJC4U8qxqbsB5jPL9tYJmi9L5habvGeJtWA5",
  "key18": "28qZhBRKWxTHY1kiqHFeWbhzY9S8gUH37MEfWZX51JMrj7aYVeojpsD1oP9YbFtLULVfYRq6rJtmV2AQJPSrzBbQ",
  "key19": "59ekuxr1oJ7rqVdXNLhwNHoKbbwUxwzvzE7KScVn3UDiCQ4z3zts7tgnjQUK9hic48CJhZ2yRzuxcYwXtqLqAdJE",
  "key20": "g3eenwi7dzFq4YyQ8YK29tDtfnqoa6ZXkftJt7xsUNCjS2TJAMaRn58eD4bk2V5UmugUQPhQh3fh8XkGXt6YUrm",
  "key21": "5HqGUuTn8jdReaxh1FfDbQVVYF5fS1ipxCQwFvjtVKxaPV1ExwCpYR9xu5hZHQSe4LNG7z1wKREApFswpp59NBGp",
  "key22": "4kk3d27W118UeDSu7frSHy9tfifXsCgjqVE5UJAYWVi5HiZcxo7S9Nuq7F78mTzzyRMxyg1LoBH2xPPyQjKp65Vv",
  "key23": "7N8n5EHGXxSkd1UyGzsAN5TfVe7R7mM5Vq3yArckdhajx1MrVeP1AaRCrzj7VjYauLTbbXU2ReYDztvNuUcPrdk",
  "key24": "zhVUrz6ik2cboAUccfBAu21r3kCMmZp4YzGkkb6EkXoywDQqCVVf52eh72P2okiQzo4b1RUhRR6zxKCne1iogo3",
  "key25": "24SHsqic7v87eLmn4o7yN2Zf8H2ufZRxs48QKcWm7Fech8njqHWwBG1gEsewHF7RKcLtDA7wmPVgtMiKCigfnRz7",
  "key26": "4xmteYYkaMAGRRTmVUnCbPpuE9RUtUzWWZfaemxkLqJwP14m4fBHrUZDR666zqVNTsVQzQuCPPwuCCjLEH6pQ52E"
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
