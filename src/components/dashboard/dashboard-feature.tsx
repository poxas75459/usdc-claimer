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
    "56v8fm2gV1EuYfrbQZvZFCZZfEg9UeodfDsY1JJbBY3EuA5nEmgGMgwZNUDESYYEBs2w9tTmMqmUFgdbhdoWvwP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkU9MxjT5V6DuWhBLpJQNtWNfThK5zqxGRJhCW4QtcDHCvucTFY8ZLcFThR6eXPwk2NTh6qcMpwRabMvshhZnCz",
  "key1": "5tMCKrYfd4SvvWzh9gCx5DAgioDrWnqLjULVxdvDd9tsDkVvtvXGLn5phpsjhqYbpChbbRS1zJsYYy6Khh8H4PQ3",
  "key2": "KR8P6BpjLFtyeoyKFcuTAzWwowWZDXk1mgvqnih5FQd57y7EXqy975Cq3EsaR2ehtfuHG15V2743taa1Fat6pu7",
  "key3": "339HcVwAUAzvuteXRf9KRWg64PbwPfNbSHbTeBfaMeQQJr9Qxjdw9qgCDLXk6AronVFnA1MLyTVYJFzZSc3Wqaxi",
  "key4": "21TWHqLaN7SLiKKMCcWQ64ZAJqoJFUQJBXcbRenPCeMJDjkGBiUcSySTaNwbezeeqYe3R44yxwDzWQxbm471z835",
  "key5": "5qBaYf7fxfRia4iBV3JbpDrgQAE28JYmm7SQPGsHVcJ476b2KC1grGC6yt3ig4F5V9EtNUDTwLMTCUY9rVmcgYGw",
  "key6": "3zxm8TG2pm4WyrnjUt6VgHjLMUZTEToneY7iCxUYn97cNV4aHRc96LQvqPUrz6jhYW9P6xuUMKVm7z5f8yP4trga",
  "key7": "2kyfin3iBTVTR1ERGc9vBsg3tNzvkugB6rbDexMwEP27Ea7ykPx9bkR7UYG1w6eacrRwkHqaNaY6XbLH2oDYE5yX",
  "key8": "5H3b72DPGoW4RX3Zwo1RvqpLEvDXacLWvShePZo3Aci8efz6sHWsf9m42LHUKSxhcxa4SskQpj8CDYYEtMUhUQZd",
  "key9": "3dd6GzKdUDZqm1cLiwHS4jroKQfBLRnTKUGSwYVUgDYBD7NhAp79KRxJjQp1xpfzjCt7bsXyvYuy96h6J9Zo3Yr3",
  "key10": "4BzKscjHFdj8PQNCVUVW5wnoJGnRkVeJ47jrRw65odN59mefxwtg3G23e9jqCLm2fW3qEuc4MaEyTE6Gzrws9cJ4",
  "key11": "5ZeyBwm6vPT7dqcdGPZgVvRu1jBi5s1wjFWSV5tZJuN74UTTHHmMtoKwe2hWsitQtGfwJCx5KtFfA5xfNTp6LfD",
  "key12": "5dxcQ1pejzzgd4qR9gu7WiAHTD7ki6ZbXjpZtEYbMxASswWJBSDUjMh1xJFmNVZaXWvWcWUcGqJpMR5azQgPLz2E",
  "key13": "3ZD2nXo4Hb7TcCopM6JgUGqukxTKNRHgW9oN38BSqbRikG8cpNoQ8JW1SvnxwDXePoJ8ddEjShNdNJZBwYFAbBuj",
  "key14": "4fDjCroht8kLxJ7a5LQbhcZqqRhnB89WL8th9XtysKiJgvxStAssQpar8jRVWHcwBiS1CsuxNyNxKwMPNY8j6Hh7",
  "key15": "3T8wreEB9Ncw5QCTWSGm5wpGhmjwgcm7j3WbK9sWnAMzwHTaSwQ7oeiBbwLRMjFpFhXxpoSXBBUWYTqXdV1YnDaf",
  "key16": "QEwXjxyNuafnrF2opnBHSQ774Y7nGkxLgbdrDdxDXApiTjyvB3naouVdd8BEv8YqECRPxdRcJuNmA25n2qgnWvZ",
  "key17": "2PJQ7ioYv6S7Pn5PUuiEoH6Kg58rJweXpfcFHwe8Wzxn3auVvnH6RDnNSuphLfgMk77NHrjNZDT6rwo4fs6rDpNZ",
  "key18": "ScYEmLM3budZ7JcB2yZV4Zugx4ukzEFcyTytYzFadxD87s46sF1WtSPUSL4jhKraCnwPTodrgFSmHr5qkrqnbek",
  "key19": "39XdhVNpXx5Hbaju2gyyWKnDpFL8ptAptkom3pNFNwrymwJxqYmUDfc6cAU15UvN5navuCqaAt2AWcLsXBFMaHwL",
  "key20": "4jbq3BD55fjTXdkx4mrx3guiHLHEMr9bj3FKHdBvGuMXNmbWoxVrDWMSxpo3yCj8vof4Q8nAasKz8FGrPNtTAyfP",
  "key21": "2xmQdmpEQibevJd3ytEDAD4ZoUTJeSnxPXFrGwrStE4WtgkzM3X4x3yeZxqdcd6y7DmSYyu7gZymBwJcYuWFpUFA",
  "key22": "2FW7Gg7oAxsLJjVXJUbXVg3mXg39wgCTxw4K1B6SNtDTPTtbidcdmy2DL35CtegkpvyPjyrCNqM6YKgY1tTMD8UW",
  "key23": "28VVgdgioGBJBsF7QepULxu1UBpP34bWkTqXQMfEwrtXgQmCQpXvcdACZWVMnpNeLESw2MGVSmXtHMVaQ7tXr4WB",
  "key24": "2AstGv1VeY4TiksSDNQofuF9tJUL4DmoCr8g5KSbc6ini94LExuPhmZtjR4mpefN3RqeBHz7B4C357wf2mpwsEQQ",
  "key25": "22ak7S6qHYizRQJuTqy4dwztvKM3Z2v6bwiFdgGtR2u5EKo6qQm58CPUCYmRN5P8147fivVm2NiSYtcgamDZR9wa",
  "key26": "5tuZyhPPNW15NNcYaRez1JwPyxZPvHcE987cQa5prYDKRmC92G8FECM4DnbRCr5RmqnEiiMNCU2yBcbnUZnaTbYx"
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
