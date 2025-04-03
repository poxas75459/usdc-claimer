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
    "3Hm5xtZTnVQM1GxbevZQ8cfrbMAj1n2oCmiGEr14YmtpXvqqHNPGeCQ78C3YU7PTuJ1Wg9hcgbnhmwEhXiRFoKJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUDbQCPYMhJAHhUmh1VmVa8XccB67HvG7theS3T6T1mf69PgfVgZZMHghzjAPcHHoRiZSb8mc1oiLaWqd4Zd8ji",
  "key1": "4Z2WwatRBFSBA11wdnNBVEzrARShbgkZeogThBp6Ft5oU9FooLE3dbnEs3hHEyCvBN9UkL8AKCRwCMegFMuxmvoi",
  "key2": "2Er211cbiV1Y1qsSfqf9H8yAueidUP9GNdLVWx7iHSsrnps8YpzVzmLtw8mqpBcLWMk9VYitvwV6H4Ai9XQnLXoV",
  "key3": "3YHMcZdKvKFxynowf6MrFQfM4Q1Cdjugy4wLWNnLUYVAbof9TgRTLjTZwGwivW3AGb9ZCn3ojhWw37YWoScZWZGu",
  "key4": "5vU6Y4BnMxyechCWxyJ5pwudopiPBG3MBcZwcHpDYZGUzm2P4JLF7YSrbTfVTS679XJsgoz4vJ9ceyWPBVM5E5uM",
  "key5": "4L3sjw7Xu38ReHxyGnsMNWRBrztCELwq3bApTgQZrhixrjmf6wP2v7mqQa833VKCWUVhDtVF2akpWU1uNYyaRuzx",
  "key6": "KkjtQ7jfc5WnLYQKZ8Uce62vwcMYi7RvCRKnvuxXe6xdRKBx2HoreKcpPSnSvcysucNksqugHutievori46gHYQ",
  "key7": "4sCZFR9AAJdo5PpbxvESB8X4CyiC3UpFBRwPRbUyiBvKh3r7QN3YceFM3bZXS47zsudKyB5PE9p3n6DQ2yYi7V8s",
  "key8": "5cRL9Vnf3U4UJR6JNtVRjT3pynEG8FtKnZPJfgiV5gkabbZ8v6syFunWiWFwfbvyfrwotiCZjrcMgrQCMB6fDT2S",
  "key9": "2CDJEnbQR1yTVLaPXjaWQ7iAG5NoK9cRkiSBdVxeiMNq8idE5iqPgamRSQMB85f8NM2jDNaQzU2aypMKZZxtmvo4",
  "key10": "oydgxjqXtuGKZDvhauymtocLnewAXzTeFQUuG2dfnKW12jTrt53RRuFp1egcJLstcTdWeUgsaYyEMgKkP1biQs4",
  "key11": "5YQAZXi5CCpNumcPUdK89kXDJJ4QM5qFtXpLCjgTe8NLsMLzEyWQj1xUfjb18Xvna8JBgbRXUaf3TbKouKZfF8tH",
  "key12": "2LKo5yszshHobZ9K9MrhPBSseRD9VAN4L5HxaX52NtQZd6kcBGwTJizFPmJKukDiEstorU6Fm1tZJruZPkJnzw33",
  "key13": "36jNyay71nhDWnez3jHP9Gjd7x1LXgU7cGWcW7jkfCXSv1aDyQtvVer3uDsQnLPPbZeMNmsHG5BhfQbht5jqQzsc",
  "key14": "4C4osH8JQQUpE6Gqjg4c3Qn7AHB9aiZ67AwbYqYVmqEabJ1j4uh7FDDohpCgTcH6JJp2xGGTSTjfK5ZFtmpooDTG",
  "key15": "35QF8fJwSZDPys1aoJxXrpS7Y7a2GqSbFq3wy3r2ej2JrBdDz3xTQ5nr4N3QuwpFKP9G7sLtUPNWPraMGoamu591",
  "key16": "2yRjL4Pw5pSGMQHXPxwJDXapM2KfBaMCrBh75GKhovBAUPZhfv8NssiaK6y7LbcgvUnbdJFSXfna3Vu3QQ1b6S9R",
  "key17": "2cqNQudqtL7d4ntuZczgCEDtzXg87zqetreD9Womm2npPphUFJeJr988D1GMDoXqVV7fx6ADiXrwmE1tfk6F48Hw",
  "key18": "21kyx8mPFGhDn1PjrLBbEcN9vHKJwCpK7RRNW3aGxppwxSDU5TXUR4vCQuHtGhwKkYKsiL8Rzerb9iuTodahdgqm",
  "key19": "6joKB2y6b6YAc6hcgpQNGE1TnQjMDvUdpakug9aQdfHtu9dq52PeTfYJVqmg3Rft81wH8RiWYB6MoVhfsc7qvZ1",
  "key20": "5Jw25FRrHNVMGovXgYH6TkHDsa7BfdMFSxj85mws2m8p1uqDMjRC8QDuDRSG79YPgAW4zFZ1K3GG4Ptw6cQwdK8H",
  "key21": "5bESCPcvmbGc9q7MQERyjJS36ZmS3uY2q6oJbd17uAwrh44nNwrwvcamKQtWCwnkZ8vzDSesBAk6BHaKasQ6M5iK",
  "key22": "3Jphaw9FCTkAU5VyzWj5A1fnSiS46AW9A9okTo5rNSQHnM2y5BAp2eYYX6ycgQY8qUrBdMa6KMfgsJg3W4oxJVdf",
  "key23": "4dJiDAawyTbqLUFAoUENw3ymoQCDyApPeDA6JiabJkzL2FR9yNHipv2QBZhtkYQvZ3dtq7tbWuK33bjETnDmw9Bb",
  "key24": "4A8YGfGnE7fnk5mi2Ew1aNcsnDUFAWeFA1k1Leium694u21ecmW8t97qPS54A2KwPK3g6rakdsic2eNHdVsYvrgf",
  "key25": "343a8KKD7D2693iFghZMUFnW7nS9zEmCDLbXvebz8YaHMLTVfmckMwXSNVarDgYSGxF9SPDsWtagUZ3whFdo9jQf",
  "key26": "1c2aGKbkE8UJ6FudcApaDjrj68D42tX1Vp1dH7rhMwHG8r365DobohbDFoBbFHCNgHKqGSp1EfWVwJ8bwtFCstq",
  "key27": "55SxKVwiwHwGAkVzaozLNNJVENF7xsRW1SVjWHJq8jcakW1m42R4NsQw41wmKKBE2MmnHSVZk7E1A3aF7s6tvbUW",
  "key28": "u9xDvyD3cHJSLqv7dMcXWTfRaknybjDY3imQ9yh93Nzxa1va25uZ2YYKw7z65f7tgcoyNBtULtHDqEVPvnLnZmN",
  "key29": "2U2XPS4SSbkcPJyzcjUr8Ne5U9FZcotuQiKxhTKPRvobHrqdn4BZT6EzqTmEmNZtdFUkpjxCvyKJhkyUKpwUnEdk",
  "key30": "2juNPoVfve8sGwiYC3sEYQYwyGa7cLQ5kjxT55eSmSFbjoESV7NiwrysDPjFxUo1BJTtR9qWXCUq2q82CGZAH54M"
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
