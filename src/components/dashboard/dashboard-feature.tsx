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
    "dqgZ2abyYQhZbrGodhBx82tUuXwZvMyhHXZm1ikBUcdMxMFvPWGpT56mUnTzjHNKzPF9n5qpe5CMiM8J9LsXNJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LfMH7T6EVDU4FSngiXUNkpiAiJRq99TSLFULGcbh8ZsNZmeFbU7toxusdQN2ZMgc9BXw1WAKJmcU8L6zaw9BXk9",
  "key1": "9ABwbK6kNjceevguAT7o5mPAt8VaBWmK97ggrenhf1gSfJv9iHVuWCQDMsoiC4WegTPpvVVg2CdVmhkpeuM4CX9",
  "key2": "2Zhu5TmRAHPLYsjWudxCkcfHtn8FrffmhZkZqdbYrJ4t7qwZov6eyQMjhWh4HwsbEn49eh7Dg6iEhFxd7WpRkMkX",
  "key3": "4jXS7RoHpJsC1jw2sNoHCwC9nLrnkqMmJeyD2oiDn92rmWfnaSNrwcN7845zjUCLz4vkvWmHEwMSncgoX1xZHvM7",
  "key4": "2qmbAatfNFCqQWQRBppqreSprF6DYi9kf9bcYjDPQP53r5CdG94pZSth7gLHqKmQyt1kqrVSYrdHsUxPQYJYBbio",
  "key5": "23FozE18YYtnkTgevjMeTeXyMNcxjDA4cLHuoBbpjjYFMA43VtULYRDjkb9yixGi2aRaNcQRuTswwKx1m7PXjaoc",
  "key6": "5VDQjHhwKzTc5AXs8aPwFQCj2Ewtpi4cJc7X2UYkvnpK94MwCQ781zBXzF75Jw38qN5d38oRcKZsLoo9Lq9tx6bo",
  "key7": "5raNt2KSwnKShFdRU2JhgNDsm7U1VFxEFJ6Pp3p2GrRtGNWzejLjgk9y1QW9HbvH2izJrBLcaLVGHmgUFaFA4Sjb",
  "key8": "32iLe9WjSWVsmVDrbcnjBi3H68JHjs7xAtJrW7a9W7aqUJuL6M2abLyo7HfUXgiob8HQui8Q2YV1AJSyVZCzbMEQ",
  "key9": "3yo9VdwZs7hus9j6Be69N9Wna8yVwW7T2hHqWPjVTcyKeyp7GGzB2wUzEoxZvAW71ebyNooDuotPHjJAFeC3cVoc",
  "key10": "Mz6DxJoNybKwHLvBrujfQWcf2AFTgH35ay8bsu7bXMuUbnQANGfEFRAenuZaSq7qnc6WHkqgwW8qQJ17onHYZLy",
  "key11": "FiV8Y4mpiyP29xGEYJxmLLgBZERQNFE3Uc2jNV3YxqdusNZuZtkHmnqF5UaDgbd31zfwhK1QkCsAXg6TZkEeRdU",
  "key12": "5cXdD7nVERCjzqUfsugb4Yr1VpZB9DnvQGuYeMWZkUCyRfdrHT4P26BBRxUFLNB3s1k3bHM2GvGDtYaFBpu5McYz",
  "key13": "H2eNHVEKEGaavFrxdcdN13vhQdca8Ms4LUzSLr9FUeMK33CBzaX6KkMAMHixNGW6xRqeEEwFa9TonUbAuM2VqcX",
  "key14": "2mXHp4u86QVuu246ghbjSWeA3WUvLh1t94v59qi4zkS9SKkZzjwqc5KHXiNdGf37p2u9vcK3z6ZuVqyue6gAAbeL",
  "key15": "5K1MUqNdzkBuuv31KLiZgm8pDxUG8PndT6q1JZUnT7ePGqx7DpmDyztpH5hRc2yR4BSRkrXC5rXxxkydkEFL91vQ",
  "key16": "1eUBdzSXoxFt3go9tfVu33mTgTMPZ8k72ooJTJZvdEHctvytmKBdoMFjcHTW87FmksWDWoAqDTXU4d71shVgQSQ",
  "key17": "4dcB9T8jC7J259aAAeoRGzNhmT2n7mqkwn3fg3BkXBMsuBdH1yBXjcnjJNdQwez6gMHqdtpwxLYcWSmFiRnfHVpS",
  "key18": "2JWKLebFtJuUuvxLr5JFq9HihooArw4SXb56yfPYhUiX1VKDdYfs5T28aKXcyfv4dg9pJLi5Qh3SFt6PVrgmrCCY",
  "key19": "4izwNTrED47EB3zDUJnyeCniM38ipcLvhome562jAAozYSM2ieVudtV2NuG14BbAwpLKYap5d6y86VYb39SjiqNM",
  "key20": "4LNM7R2XJKKt93LPRbHroveVd56U4ySV1McD1b8iwueGXjPj7wGKpCV9r46MFwzeAnHK1X7tCecsGPhS2pbjsEgW",
  "key21": "4m47MtTKpgu9ECm3UmTRV7761DUkcUsNeDVUkvhMCpzW6LnUgTABTpVz8BFuihPv1qjd56T2sxYFiiYXRk5f2S4a",
  "key22": "4BntSq8SSz59cFxsvMeFHJcBvnU2WgNvjyDJZ8PLbv94TAmyLC8XfLgkuZ6VTmncf5uVodEZJ3LcV8VHxQisCkX",
  "key23": "5hG3aLMFDmTSdxMgkEpriRh2R4WATJCK8MguQmNDCpzZjS1vR7uP6NW8nv7ygbMR8FDWveDQtYqvPx9BckbPDDY7",
  "key24": "DLuEWeFXHnABVT8pPUHn7JQZTsYJ1DCE8eFzbrq5gTJ59e4VqV7kc5YtcFfYVPt1s2yVX2JuoFKSDw9FYKjxQ1L",
  "key25": "3xzMjx8gctzcguSYCaKe74bUzLmhMKAPHR97fXUyUnCGLBHHuQ2yLaJFZXKvDxGGQ1kRDzGAE9rq5Q6s5LhqEyE4",
  "key26": "5Dcf1d5TDQHiRHqjetv6kqrsJCJpmyCQdaachVHEHJFx9f5cttTanFDV4LwHHyVJahuKM5AHNq6eBQeBmUHaW1cU",
  "key27": "3ehG1pWmExENLuPN5HUVM4WTx4BNXD4RWyPLoeo8fkMK3o1x8RXpijmDhTqBkVENUBjpVDFzMWGjoG4HFnqEKssM",
  "key28": "2hx9v8M1HLNetuGwLzWg2ZWaw3BwD6iMd8pzDkDefHnz8UoWtD3bkZ1jYWLTf24XLFdf6F5voGdVpcbE6ksrN4Gp",
  "key29": "32vSz1fp8YK44gmDBLkMcwmhyUcRX4Vc7DXvVWiPczUtnMDxoYrLosZvJueGFnYr7iX8UTroZDAY8gGRWYbq5bYB",
  "key30": "4iAJYmiqwdBQgJGXWLcrc1KHdbsjsjbpUCQb2uDWQhAcpEhV78kKwbAXzFFca9DvsS2MsekFtd4ket2bJNSLhWBh",
  "key31": "5GCLAJfHxpCgqSE2s1zwzuEcpKa8BmgseyPfpr3HKcxWMtA3A2ubWzmfp9Vi2pgT4ApXiathTMeS2zrCtCVmz3Fq",
  "key32": "4b4JuRodHQ6cfq56R3mgPN4wMjeD52daqhe9egu5vfdGJjLVyF6e5eXc1dnk9LCc5ujogmJ2h7DjWWwVKLDyBeVR",
  "key33": "4xQPjbM9zso5kYNVHWZ1ggM4jhdEUnTJGyg2utEE9uWgBxqJT28TSETuuFs362ZD25ZD1N3BnKfPq545ZJNAYp9g",
  "key34": "CanEuKdDFC6LJcw6Tp2HSj9sPVTRD6cjh5g1CzX2DrUBuRG9e47NvSePLjWNyX7tsQkj59eAnBGnuM1gpqxASv5",
  "key35": "3Gy2HUtHBycYrN3PFEymsGt3MSE5X8Jez4x7QB6QzPZ8S9K7q6pEcGMaxSPS4S8AX3t2vtnKGZHB39YzwQSq7sTL",
  "key36": "2PW2Bz6mhhwiLaMZddtE6bc4PBZpAu8cLXv5FzaPYzVveNiS71VqYWZPqiczDQ2zDqDV7Gww44SWqhmjkq3vcMcr",
  "key37": "3jAL8gPRRw5LQBAeSqfmfHA3J14Ziu6J22N9fYpKG689qpE3ifeiqKyBk5KJAPsH1KeBwfQU25m5ALufwuojXsZr",
  "key38": "EYn3DSt7UyLKrVQd8rBaru1Xq9uTLR1bgmqZRJHR4YPkzkJKuWANonYvKj9GCo2q5eMK3tZT2kkqkU13oMm8U4c",
  "key39": "2MndmNDCaKXVHDiEZfcScrbcjf2m8bWsPrZHskE1xVoxnes6mJryXLeLDR6vHaWR6whhqrXmn8TiTxHLiYqgy3pD",
  "key40": "46RkR58nM1ijtu6ZHxomRD1peoXYMMtt8ce5CjF3JZcwTVax3vzxokNmHMSjZLscWzZZMq8WAoncshbprL5Skt8K",
  "key41": "w2xjGATfRxdBmNjWpew4WJxU1ZjZBHA43BFe3piwmhPu9UcozPQ4BVRxKBaNcyLzHcV4QKohNDKGW7hoAMPAF3v",
  "key42": "5Wx4D2PWNMDBbrrQd8eutAoSvYnDRzuoPRVmN47twv6D1LjzvPb8mtBQUpBF4JoacuXobjoC3JuHqR6q1sLARQav",
  "key43": "4peMBQT4vuPhGYg4CeXhRS9Cv8t3bgyv4UwxXNF5RJR5RUevqeS9bBL2NawsrH7XgjDNtD92ZPUuTR8iNYexXhud",
  "key44": "2Z3EXVztUpMBVcWUGo2yxiMBvER1cvTjtFBPsySedB9sLLVrQurgqAeQBiMTgaerVaZsAXFVEKJAU8AhLCBkjUgY",
  "key45": "B8tT7wAmpU5xcBQYZS5iKHsPwewBYkMmQtUnUrpm5KnzNpczAq7zY7uus8J8ZL4PotDdPfyPYYnYRrkWKsv6BPE",
  "key46": "2PXgYGXCgXXEfeHYEJxEey2VDFai83kHTuuubbwEXSAuAf29WEWQRhKKGAe7afC1i5h49df9RtZV4S2Fm3fzaEoy",
  "key47": "Uj4aVNtNQ9iTPugSrMiRSY4EFq28RHrM5y3Wkbg6gWMPqAv26K4RMUnaLunavr8kLtov83zrEE74iUbHbbub8AX"
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
