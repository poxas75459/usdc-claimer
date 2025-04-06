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
    "W73Jqy1bJeRCs6XNEz6iUuTsbQ9JTB39GADRyTcQENt9oPd1ESJau2HUBCRSa8BQzhCggDgv9aMoAA4Ax1wriFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PKsJz3VxoLSXodasrSbFMz5CTXXx4qci4XJW4HjBRgSyzpj7teNuNNy4nc466KkGggf2MmxFNYg7Gn6aqkTFtVW",
  "key1": "3bEjzGEeAG4fSx1HsusJH7biJj2D5dFNa1ogCwiCubcfrcWjdehG9NNKSThBRf9GhHrtNt5kGzQpXLJbMtwtZxfj",
  "key2": "2ssr6Knfnkhaskx2rurfg3DtGDVMRm2hm8YSRntP2cZ6fWECksFoG9LxSHSsVxmwBkvqzCq791Z16oWE7JtiNWP8",
  "key3": "3sXTXYLyLLs4Hmnxe6LxewgdcK2dmLuR7wyyT4RybuqLhjrAiv9ydxaEdgFAszdN73nsXwBzMTLWDs3dHnf9xtc1",
  "key4": "cMqdN35mjfF45pjJ2mk8bRruSJAU8X8U7xnE6rYPV22ZvsBMj26f9gPDwiW2kPjTjwSgSKrSvsh2VoNQMaMqZjc",
  "key5": "SRWqSxAqvVt3PnP7fDm9NR77CcjyyoViuHmrVNiLn9jDeA9rEBjQCWWoCS6C7FD3VTXCKPoJTYGUqrf8KjQp7pf",
  "key6": "3n2aXU5qBMSFTVRX7iSZQSh1XtH6Co5zbE27wN2dZjKfwUJGks6gaET4LXQehyiJ4tpRfPHJdHekv5heVmjFrscw",
  "key7": "231YTPC3zgN2d2XLrk98ZLBh3FcrU4dS4pgP4oFRV1UgmFbVChhQVhQdkCLCW6R8KvhKyzuv7os5YtqmKdKqejkW",
  "key8": "4sUk5wScJ7mZRWbeCFHeUXLhVNwDakkZtjhgKdhRdcZPUJ6B8oYsyVzwGuxAkwUnjKfBcL7MJ6iq1cngS84viteb",
  "key9": "5zXbvrdQWCH4TkoJM8rkf1WUKR2co1tZFgHCz1TUDbnzxfpzx36DwTzT7V3TdQU3hvj93CF6gsVksvPqa8H26gtY",
  "key10": "f6cSFd7rwmfnoSyWsfuPByjT8XfyY8QCUyb8B5s9TipnFWTHEUsvySwvmPpkoDjoBMbJeWn63sokDsz9MJrWv9N",
  "key11": "352eBWMb4SXNDWb4AgZquxcFXgjpghAsn2XNSruZDWPXx2jECiDAdpwXJXqEGHVwV9tcjjvQuKCoMsYRc572mkYZ",
  "key12": "87cXMXSubNX6exVy1S755WfPvGyixtoYbzcxzidssia8Hsi8gq55N1NJdTiPSEzkCywSsXTxhpeXRTNSnrnsb7n",
  "key13": "4QS34zFnLEzVsU7uocfYa9eEv7aaY1aeNYbxR7upVjzMPkALYGE7g8UJMDSMqTeBHgJh5vggQx4YskNp9oLsmBxf",
  "key14": "3jujm4kY78kmXNYvkfQYD91YaHcdmMo41shzjciFzXPFD5EJiMcrwDDU3yFXKC6BMKM9HiSuqdAPxFRmK9Dfjuwj",
  "key15": "65xGTGqyyLSkP3MWTePUs9dtBgoXisDprmASh8VXcZiPNh67YEFTcjCTjc1qVBKA4pjjwgDRjqfB8ZckPZnoNWr6",
  "key16": "WAbn3AcwtUwFQfu3w1Xt1ko8tgPkVTjuHuDVvKmHySnGEF949azQE28y4VnEQLUSbCDb2VBeRoCT7Q1odGmwovk",
  "key17": "63AcDzCyAM6ttpw3yE7v8KNtxKRffmiDGTeJamWEPPWD29q3C1FnvKYCynfvG39MVVUgkg4gX9eVAMEHWSWerTtg",
  "key18": "5J4WyjhK4QurJS9rpuKa4MoTJtYXmfND7E8mqy5ZywpXHtNw2wK6xLrn7GMnXaSbeyEwxBFnzYchafwjHBxt9mac",
  "key19": "3Xqp68mKxvpXafqamM1B9FBKcyFESiN3DCkZjxwf7kenGdKSxe2jqPLLhQNCojm4XEJxcBGyVFsfkM5LwoyANvJ",
  "key20": "34H6Ded4T59MuKgcSPMLWPhKtAEkCpqXxoA6NNAYufdfDCHeSRzv56BNkisWHoSUoPij7oKsyBZjwJuZuDKYYmnW",
  "key21": "3Jauiwvd94uxwcP8JbpDEzQ1V7SoV8HBNpC5t15eULJNvCDZv6UMBLk3nE2oPDHRWjbfU6MdmQ5SgNzbntL7e4Gz",
  "key22": "33SuRd18Uc5wZJ4Ls3rcLEC6SDFDhdBuHq1d22Jqvr538gCxHArq5FWnRo4XsB3QMy5FwAcaL2peZhmjziEtsRtn",
  "key23": "49WTHvJ9NYt4Jgbk9DaDM9Y3mULWUkHrYEZPSi3GNuUZV6X8hhuSU7UojjVB8zv6rG3LhrjmxWswZJXiFaAARPQ1",
  "key24": "2FLBXXWgvNfv7LzA6hgVeMCEDgpSAYnm4yYQWxa5uegwyKmNmdX1EkvCB8KNTjP5f48iv8DxCDbz3mY4QUcc3xtA",
  "key25": "2hePh38oUgHw3cgu4qP97x9rSwvJfM21UTvwt1qJBQJ7PhdvJCK96WgUUJCvQXnDuurmjieQZQUTTQainyVs3skj",
  "key26": "4WygUucvto8dEbnKrjAQTEkrp53uJEzwbRm67Z5d7w4FPmnNVpEz87z5LsEj6Pjg1nhhSJMzrVKWLcjF2iyCk59V",
  "key27": "LjAhPM8YKJtXy8nrSpGofwpZscMK31WC3o6qgj7zFc4rmWLLsuRjMmepbaBGbvc5NRJm4KmBXxHNP813kqb4Tt2",
  "key28": "3EXHCC4BeMjFVbMjBPrFihr2HCi5LCy8zsoCbQ3RvowyDzP69bqJF1Gtynqtz25PWRkkVzsaDuwyagSdmKYfRMMJ",
  "key29": "7CASoetH8Th95SDbUbcAWAuPq8rqakPnr3aeuTganTNYoZnKV5NVQJMvw4FSJNnkfuzJUkyjL6tAa5gS6fh7FMa",
  "key30": "6mKPLeg34bkXuqH1WRBskU2SAmVAL4KipNPAGx1GcTgpvgSDgpC9dkYSFMtX7KAqbY22cmws8ehkyVnfoYvUCvj",
  "key31": "quGWKYpULAUA27Ywru5uNcHke17q3MNHtXk41YPLU1j4QyHvsAHJYPYxuwKDHCWoGwnFzgBCt2s5GNkfkV45DUh",
  "key32": "3Upcn7jCNkTTGeum7UuxcfyLq37E6wbi1S17mctoSohKtCAd24p4vp9VadfgAXETEgqtd33TeRqrFLnYgMh4C1MA",
  "key33": "2RjA1qhNvZLZh3LFEHTr5bapkYAVvfSCCwrpqVMuehTdSduVGUeoWBYmDa9rVazfDMfDMPphHqkvpgtCiceJZEGc",
  "key34": "3m19ba6kZyyvG9XqNMYTvbqEXvu6pyiB9AaT11AGRMRqvXzHvQNZbM4ymDmHXQNRjKCTfYkDzT5peegJnrPYpuHs",
  "key35": "24oefX1aAAtbdUXJgHcxBMagHFEDqqdRFtkE9bgsszc7B8SxvHBHueMxb4dppnT1KY8wQ6LyCC2kLL8CTDiKjCYu",
  "key36": "4uxKUMjRy4YbtMGzbs8JWcWrPyrSuoHutDtQiq9QG4iwymo7yfsm2wxN9PBrYTprfULfbuTUCkC8pqM9oDA6Tyw3",
  "key37": "59GRcsZpjcuTR27w9hMrt9GpUjDAVZ7TDbKrjXJVdj3P5NwCYsRmj8LDmnsvKAZShBuSc4uNoxmBWoHUHa2R99S1",
  "key38": "3y3wpb5WyXUa3CLnCrYKAPkDjRFJSzkNWkwgDsoDkB1ybeoD3yPacmpUmxxd6LrSQcxXzxmXb2rUYezKyLMhVSuC",
  "key39": "5ZUL2sZfipaSwUznXBT69AebpxANtDh9c8EU9aHe3Rsw5jEKkYYKAQewCXfAYibXMRwiWN2cDCjK1rCxHANEfzv9",
  "key40": "2DirNVYPaoDH9gDofppoMTXBUKKNeaXBqGKKuL9kTfEYqhjaVPAKfWSNRRoVtv7u7j91U2p41b2beTv4znD18wb5",
  "key41": "4UNyLxwKBGhTY2nedX96LH67c4v2KafzGBzVFwfFhJZ28zCwLMFENKtDBtPH7nePmYmAzT4zFpGqULYKb3ykXLRi",
  "key42": "55mUhVjBxWXSrNVB2vkZfH8xmiUGpsmFFQnXsSU2U17mGEpvpEZ6iRbkkLzme1S2KukAfiuZ1KkzYGY8tfZum7y3",
  "key43": "3CGheSgUr695fxBFF2PUZTy1xgUyTQFaEnFXwk3jDRD9y1veysJn4PX1gd4CsJP3hMJrQ9gjJNFCAicB4Askoe7B",
  "key44": "2BHa8YXPj2kBuBgq2CxYLKcNC193KwWgCbsSPmoF5GmUcHkXt1iDCiTZJKCzpGbukPxrDVghwCTy8tEQHUt43YZu"
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
