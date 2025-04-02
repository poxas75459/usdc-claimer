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
    "4fMe3BFXeR3LsYFmTStNpuaYMWyWKhdAGurXUopNuDsd3RkoHgCLF6iDNRangWPHZQ17UVgNcu5obKpaDkZtXRhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7yrrbDsnHoMcuS5ppriiDHGW12L5wiXAzWXPnG69w5hmmRq6F3YfHjUiv6XNPiTxd2VKTymx7bj95Bef4EgCoG",
  "key1": "2GRefH47wVN4K1kLAnFyNNQ4VHkaCsz7TrA3qEShXPALx5rFizPA2ZJaDdnK7B1QAfzMQCGhBoYdQhM4QzfnhZok",
  "key2": "3Kyf3sAbtDEMnohybVU41WuWZXnYZ8j95c5odbWhdKs9VAxvwieJkCjGyL4DZYrxhS16snYHPT4AbvnCMhugGkWP",
  "key3": "5e7rWf7ycFmKtWqgeHJeCKyQqtfp1esfUMUxP84fSf48r3fxAjrhuYNLUs28yTBszvsTsTfT5SpcQS7D5CLkgFHX",
  "key4": "ToEWLEW1WBqoThZCudhY65Vfy5pofdGNQw5TPNfAFUXomsGvB7NahdR76aYagMNQ14mAWjJWBQpDYzHHxeDN9m9",
  "key5": "2YMQ8p2gxEg9bPXNHV9Rpz7Yg2ytF5foVheszWTdCiZVBR3486GxJ4XVuvUTyxymuGguCmbNzRHEVvbMhCvkczvJ",
  "key6": "65zWznjkgtTDSyMcWF4UYKZTDtnoDGnFix4cE84BG1fWf8JkM6Gw6doFc6pfgHG1V1Rrvsfi9KgnBrH4iVs28zEz",
  "key7": "2mRYizGg54imvt5whmnjjoTPHocJmPqrufjUjx84etogD7KrgbDqHxQzZ5oUNEHX7A6DXX2u3Ju6oEiNiZcLY5Qf",
  "key8": "5eQ7StVC9UqQGpwVRMBFCCYGzjmxQzd5UFhkuWrPcoNz88BhGTx7cJXkaz4RyDd9fSvnPZD8XyLkpgU5YJB8gNDe",
  "key9": "526M5Yks1tyoPDbzQTYX3ffoxrN7KGeuy3Rw4nhW8Q1W3RaiqhsUgWGNujdnWaFsLZNUKrjBCqw8gsVx44d5qhvJ",
  "key10": "4vkGYBwbDrsjfCh33YfyjZArjeVeLrjX5daPBDm1d3FCTg3t1p3tqDSBvNdaFwcrosMYx8U4aWGjvj9XRDaASbSA",
  "key11": "5KHrYKKNX1AxV2wwjq1bg4cacp16WcLaGdWNdj52yUVaB4X394Dg3BgiZocr52YEWwPS2KchQnZEtbF1Gbj33qcV",
  "key12": "YJz6rgTeU2a3weM2Xmo6qqvus9jZHRyujFZHsTieXd7Ny91Qpv46yQ5Y8dwLXjXUorSdhdwdfuD3jSKwV42L58M",
  "key13": "2f1wqncU1btoNPRDUEfPfBb2nYRU4Zs1v46b3GbRPtH8daTRHv1VR9aWFZH9YKaNqsJm8hHcSRfhD3V4QYy6WUYb",
  "key14": "4fBAQs1Q1uujQJk1VUPnwBENdx6JVqeKUpwoW8GhJ9adZaBQnrawNBazEEZzWbZLy5P4fqmxQT266UTE8tSRyU9R",
  "key15": "26KXjNzSMdBB4AewfrNuuxjyK3mC2AvtZktictG9nwSBXNT1cU4KAXy5ksYR4op1KMGYSC2GvMU84HNyNGijKv8Y",
  "key16": "yCbnrwJkbS2zFRDyHZSdKSKwuW1x8FMYSwP35DGEewrnp8ePPQw3oSkPkuW62kbZ1FyYn57GePEkvvqZSgPgpqA",
  "key17": "298iquutomYjFdyyiY5CocQwrJ196QB8ma71H7NXn1ehF4tPuooV6PAoDWyjVLtwGZqk6PxD4YDZcj3nChptCkLN",
  "key18": "2tXu7mzavjfXRhDS39q4P8DHFpAv6sY2AFagX1zQdpXqvXZHQ53rHnu7nq4HczHud3NLoou4FxwLt2ciDBSJx9Gc",
  "key19": "5gQY1UXpmSSB6X8jhw1CqF6jUyf8f7oPMFhnPqfJD9r6hk6X2kVKmj9LPufauKppbjwWqyy5HfbpggYjG48idu4j",
  "key20": "tyatx97xXhz4YWz9p6RJajY3tpXNdUBW39jeBqQhaoAhAKmyULwGCW8iDemdzFTd2Ny9mUQEeBregtk1jQCftpj",
  "key21": "5ko6pHeJYz6q6ShkbokrsK26jPTwXEYmatmvPdo15pS5r9itskpx8xFHZxj3p9CAy3BMptPnuWq3QiXBk7nyA25G",
  "key22": "2oXbGkzxhq37e3FvQmiuGpznH3PLv9ZQ3HNENM5na8JARJ8FyiTdkFDodnZJnhnYpxvApe7XWxAWkfP1Cuk3ZSqD",
  "key23": "bLL951vi1UtpScmCXipz3QJyv99TFQxHLGrPdgf6S7jMucZucbKkVE34vw2x6S5NfF4z4fG19PqdQjqrTUTc2xL",
  "key24": "L5aWyMh6FfKZS4pKBvsMaAJvjVRVrqao57f2DENjeAsh23QTApjVcaEhkh11gJeqtXK6MzFYmBCPobCk96yfJMW",
  "key25": "64uEahLqWSPRwcWiWTVGitAjJGaQCCMMb1Jksg5ziKW5rc7NaC1J1CYG5qF7PqDqsP3xayb92LhLigydVyfn5a4e",
  "key26": "4rxspJG3LRk8KTjZRJdGtn8V449nYaVJN2Sjq6YjbAu8DvC6sP91H2GbQJZEmrpZoaE6otaU9MyMbvgPNmAZVCRQ",
  "key27": "3dssNzbouspwckTKTH35mVRHJg6ScxG4TrigQJpNgTott5ErCNFwWf4xSXSpYvXkhHTprVSgBP8jMmS1WfMopDmA",
  "key28": "4ue7wBF6xPsmH7vWvo5ThEGaFev4TaHyLCb1yjCfgotTXviFNKarUhWL6ydQUTs3WDL6LRsKh8VVRcFfR8tFeY1Y",
  "key29": "5gMpL3PTqnmQj4QshiKJqzdzoZyMC2pSPXAKbJtYbLMo1YPtF8hDg4E7HGCQc1wFxZ17495yjZqpGQk73XWdpbuu",
  "key30": "62FaVz44hRzETxZpZTnM7qoV8trppaAQVEQUagKhr7sp9JSBJ9g6mgmi8PshNLcF7L4FxyFnYobSNHAzYiqx9uYe",
  "key31": "4xSQZxYT6AUcXb7ZG7jmfKmQZYf2MxZKn1C1FY1PZKx4S1SkmbrKLeiRnDQu5Rexcz2ybXzJNn6ZqpTJLsJik84h",
  "key32": "3ornqiP8FDVtyry55Xir29VKdvQhS1MahviApmiUEekpE1n51tstvQNzSCUfAjx7Efn7wUSd6f2TVnjyUgmu4Bo5",
  "key33": "4YZCZWYWyhoouaSohc6twUF7BMxATZbNrDz3BkQSncJDm2mxHwwQnBte9cAAtxMuVjNvfkj494KyGr34GabnhBKb",
  "key34": "3gmX8B8MSsBjJGkN2K5D1HZXfbLG8K69vHutiHCnvHrajxBEvrTAuLrUeqkwfW8cDS6hjqnKgDU7gxWC5uu6MhN4",
  "key35": "9qhoXUz52qZ3K66piDh9sT4LdGzkXHCN2XRdHMYmMGQLAZUgemjQ7VAs2bJruY3ja2NyvYSPEU8zqiRycb6DkSK",
  "key36": "2HFbvoytWcmEdczkLefpX85aUcKrqdbJNVsSB9ZDFXmxMBNY72wtAJK8joq4ab1PRFqAzVVvqVMAWWHHmAYvsUzQ",
  "key37": "9VjuJ1b6ZGu6dd8Q8v29ckH4ih1gacF93chjkZ6BiBz46UPQwyDUqo4grnupM7wWENoFkaQAMe9L2ihZEfFecNu",
  "key38": "4JJHHZPEQv9DjHkWjZvy9R5HvevZykKddYUY65NmdyvBy6NcY8ZvBHd234y5Kt7ysDBzzpimEXEQgK4rkqf5MwEd"
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
