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
    "3JZ9yv4e5WCArLzqAgwEpXgpDQCrJtU7aM8n8peMoFxPGfw5FhwryZPfzJwr6oDLpuesuAMsu8xK88fRkpLnVKnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eEvZXxr8hA2hSMSA6huCgzzgUc66kENf6rLY49HRFX4iHQJCxDbvJrJ2DpTfvqPMc2fFTcPPUjrGLjhBx8j469N",
  "key1": "3Rp9oEhUQ8fj3FHRBuD3UaWgJBGcMCQpjXSQJvrpcv1pAjW9aBDcvJzqZhEij3eXVmGvBAGVZ6dTs6yZrYzTQudz",
  "key2": "43ryQtbym13q3o3kYoMdBnu1BvZ9Dxbe2tMQnn5nCncRY7z7Hie3KoAmSpa9SYeT6Gs3wvVKRz59btdHt538Dk6U",
  "key3": "cF4hppptNeRCYSE3z4aaJ3p5d5mcnGVjoUG64QKLXy6Pn7uum2RenGPvbAwUNHGHkzvF1deRB7yRYteDpQx31fZ",
  "key4": "5gbMkzpvPFhHCkWNJ4jHxyNgLRYL6iNbe71DHVMH83Ttv9rc6PgrHVXZDfo2f55hoSzjSuAXsQLZYDZEoDqg4fj6",
  "key5": "4wGPetDUzp32TXRa2ePPz6miGUzQdbUQ7Aj1cZ49Wirx2HYaqbegncHtsP4iKNUanwYzdW9mmMPwiWoLLMBkon6",
  "key6": "2K4aS4ZR65Av5uhpsJNhRV2EmYwjTTPkZ8xagnk1XXJDNYHrFH6FPDthtdHpxym744WArYss6NJ6jmXsunMmvJLq",
  "key7": "2bZNpuDkCJmyEYffDM9Lsnc2d1Nrjo41grLL52NGTSV1HjYXPeWS2e4bEJcQYvQYSsfJ9nfHMkj82KD5J5Mx169V",
  "key8": "6tZnHdec75wSyuW55SMfKuUrVHmqf39BNBhST2R3kZfAmzXerUFdLjrpmiZyKMYDtcLmZ1eXqadAgqiYoBpZ8JK",
  "key9": "3BK3M6rrq1oRagLTwzDgJCazxEHcZhYamePpwCaqYhv7D28uDrp7gpi2muUF8QvfcdJajAtQPiMR1k3Cn8wt8nwp",
  "key10": "2DivGW7MP7W6Y5YEmZ3ZR2CvgCMoYwYGjpPQJqNZKALMpG5irjCLHM23ofE23CzKS3e9ktqqCt3QP9yynqDn88hj",
  "key11": "2rmKRSuVsv4UX9TqF7NsV8eDqrq2uQAjrVQTuDv4s8DfY55hiyetdcihVxX5WfA1Zs95ogKF8EiaLsZRFRJuuRf2",
  "key12": "4smvaJ12mEay5aDPzbdgxaSDLLkznAUzjdq7NScJpD3Y3RWfD6fMZ4Y7DnSAqhBbb1ea7cJVcQDvdMUUTdaZoyTs",
  "key13": "2XKCdBYkGFCLniCFPKXsBzPrq4n8dKfWUhbn4HRTnmb4f8d1Q2kE3i4ysxnkWhPvGgsEHeJxLBY7vK2Vy12QmG3f",
  "key14": "3tAxwJLEmdsMZGT9yPzM9HceS3SDzDr9rc9w7sZzcqA5pHqJ7rEjAEwbN53zSmYnmi1Vej82rW27kUHU3TvftuXx",
  "key15": "2pSzX142bkgYAM3unG7pCJRu4HFXETMnXeRzoWTfKiDZevVRHmX8R33UU9VLkDbN5NaFxRb7HiZypRSeyNjyCuP8",
  "key16": "3WDYuaY5vS9NQSzmc5XcksYxH3QwygnkzszHG62WBwxDMCf75Q67nERFiVBySy7Z6GpqWm64Pw4c4upX9yeukpv4",
  "key17": "2mz9ywHuY2miQ9gCxSYr8bj1Mw4eRzpXvzQcnmuZgBkDYxfrYtBZLknHj8sSVzRf8J1NEhUnetjNCvUKivrhN9VZ",
  "key18": "2ARh3BEUpF4EJDaEiy3EPLixQSKVAdVNX47pRFyuFKbH1zwo9XKPB8BMNJS4YLiCMAJJWwk9843c3WwsixCLRrHP",
  "key19": "55YeeWqkCogoifPwzF5C83QXctuvViUveeinvHhmiMTthBXyE2RmSkDQjGCUVWpfbzGNpvgChKLvYYgEgZWxEGqZ",
  "key20": "5ZEbmt34Gawy3zjBgPCt6mxSucPoZmL5GWtUP95Un4Fj3FrSFVkTJTPJqM89WzNC1Nrh61qtEDiGErdYSPpNgWHU",
  "key21": "4CrdTqBMk2CHRcAjHhvfEPsooMpG4jmKksSo1AZgv7G4RsFBjrxAdXW6TeHxBGVqCWJrsYx5rmcnnfU2BrmrHx8H",
  "key22": "4sUhZzvQCJ3F4pi9tUhC97LHyNuGPHjvGgQw55qJFxSUJsc92NXH9EcSuZdm1vw1HHyPssKARnzM6D9HqBU9GDAr",
  "key23": "5nFWSq7oNpLX3mbovLVKDo8m63VX5zFvo48xeAt5WPRE8aWgPAkZT8Smagr86Mzt6bcTUrbbgEzVvAro7j522RE2",
  "key24": "267PzeJJ7MQLTwTbAW7hi9Hgv1PrnaVJ2CPm73CZunrJtYx5fBB2WnoKBmisnsEJ9bkG7vFP2jXMsVmnoxNAETJt",
  "key25": "2Um2E1WuwwRSTDRwS6T51k2shP1whkMaZF12iwRPGeb6pa6CCGNDQrgVbUKQZ8WJY53eA6RqvADbpRvgvw1KYf4S",
  "key26": "3EKxQY8M2SwB48yCTr1MNYiBfgU7JsdS4mBukZp4eqLmz7WQSi2xzt3NBsWYjn91RDcN7jvLVBFpKCtWVmjLfn5e",
  "key27": "6uVxB11zqPRqxCnJi8SgWnesVr6nqRzGC5raHQcyZdTXt5sehuR1XAqzLWX1kvuczioq9Hg1qh6SYgCEGwiwhHQ",
  "key28": "3KjnufGVQ8BfRcWfkUhrfQj5Pp8cUsQk9V44yVccAGVamiEuNCTJzG7M7Ls7SD7T436VjNAhdjRftut7iZbxV78v",
  "key29": "5unEhV7ifsQqUKbZ1fHEaWR6ATjwpKcZAkFxztbfafAPvgYBwLFopFEQ74NK3FkMKvxhyoMwikFJzDyTk1s97gv7",
  "key30": "2XaRgXgA3a1YEBSFTPcKAT2QWLjxysBW1Vmzf9YTfmYeGhL3aFu2j7yatUmQHXfBbdDTmmRE6Wv4xWcc3P1nh5vN",
  "key31": "wpdDHa2geTfmj4twSA1x5UK69j2yWcKx1jJgY4yAX768BMShH4MUeD2GBnmPT93fs5yUv7xWbtBd7LHRBpmzAZM",
  "key32": "cJjmWy8TE6TsnVGmNFC6X3hkZozaswJCn4uHNBG4RYbMeRYvT7ss6tr2EKrRyqh6HZZ4yymYNovmTCiz6n7jX9D",
  "key33": "4MY2JP2GjDg2t6R2TRDGuNGnivM4RzTramYYxjmm9a6EV1rZ4fx2tRLXdC4gcr5TmMg1KvBXsHdYwWaDc6oQ4KgS",
  "key34": "QshvSDKkTNkHyxKdvG4wnzeVq7Ey1yT5dmjQBJXSMbAsyYfZhnxgguHXofFekyQMD4WWDogQX4sz3iZwSfDmUZf",
  "key35": "5jTtHkyXeWor5BHTKa8qMwM4qsdfNXxu4JdqfrF6pWJTx23UC3YTopzz1SeJPLvDo58bATgjbCXC3vufaber6aKY",
  "key36": "2ZGp5Q4NZxvQKXFm9idHRanfJ5iBNtG69cr3vUXbrcDRKLp263U4kcot3ykqHo1P48JsWz4Hqz4kzvokPq8wZYrS"
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
