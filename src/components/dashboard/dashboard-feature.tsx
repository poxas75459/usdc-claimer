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
    "3Umn2Lh1pFoMrJCN5YgNB5fRjuNMQVDeFK7Evjci6en1GrRNc6fuQLUvrWruPEZfN7EhHon9dX2cCto3EYXKapfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtzHFU3GYRpTkwo6jbCmeH73a9C7z5MP2kqsHQZdC1gFpLLqoKx8rYCkzmrwM8gufXWNhrXiWWAWF8mLvateeuV",
  "key1": "5UjFutUdGbefDT4q1uW4tbawcwCncLEKBSfcHsdtQ2vUmD9tAHxMMDsAArAyxrw9yuDRN9oednHG89W5JNwhTXbX",
  "key2": "2wVkNijjsR4MnCcwNf6F6iFmjNjhBdYndmmveo5KtpmvjE6WGhYgnmry6SfKD9JQZHjDYenSTAaT8eWEpARDkG3c",
  "key3": "3uFc2LK5NNEKa2GQ6pSZMyxHV7a7DJpyhGH2Mxs1ac8rRCCsXPfqhpjJBBVGULSGFE8wbbyBuk8MPQjLMmgC6Qwe",
  "key4": "5LQkc1o3BzH1xGNPUfhHj6XWNET7yhAYRpaNWkGmBB7F4RvP9fgHYJ3CWyAq7GevKRBdvkbZBEvPEcoXRLtcHJK1",
  "key5": "4q3iRdU8TwqfSQuZhvkjw8LtPrzS6Bm6V1kkojb7sNhEFadXpBMC6ySfMoLQQBbFqWgAR27j92G1UZoLi3fGkTLE",
  "key6": "c5twrS1C82tTLfs5AgWjoLekSRXB4z91Jmu2uiv5abTJFeHnhFegFF9xdJZP43uLLzZ4fwinG2MNBvHs5nS4y76",
  "key7": "5iTqbPiyWWGXS7kWrutALj36MSQdyjFJrL4TZ1BE77SNZtBxfGsW7ahHbedMrUfiuAE6Lpvc6j8geoPgAsPNSBFr",
  "key8": "613qoHkH7o3LQEWqrWicnHqy8pjkd7HuuqdAKN8XStNWRpTbH762R7ERqFgmMdo9sxKY3Vdw3vCK9YzV1zw9abNj",
  "key9": "5wmAWjANAaoGfNxtqV4YnqQTDBaMbKZBk16P5YwwQ963MBiwn2vmWnHTzWieB8rBcSjVttPgzVNpatB3HgKG8bpf",
  "key10": "5YM4yAinhTYfSTDq2Ad6U91BzXSUz1zk8jYVbwuWhLLMBbXn2yH2xhuzSUbx9A1TMdZ1jSxyeFWGyR1SU9wf3PQT",
  "key11": "2hGHoV2bsS8MZeqE6k2ULAWaySw4wcywxWDUM62f4bTPzZoxM4fdNaDWCoVHhaQoEtLdWVTvEs2Mj3yAbTVM6sQ4",
  "key12": "4M9UjRS9B68VjEusvjAygP99rCc9Phe17t4Ff1SxAwuscMvF6dmE51w7ghE9kqnR24RdF6ZkDRFMGVB5gJ7u9yR7",
  "key13": "4X6SQsu1FdPWA6q2S9vKXt4ENrCTZ6qhfhwWePihRiVTUxgvezB7K2NPUomRb9LJ8MUWPWLrEyB7iYhDzUdhVaRD",
  "key14": "4uB9bQTkkzBUn26ognxA77Wdz9rWMwJ4BxcDHBCDP1hrEg8MhjdPutz8PyrvPbtZDFQ2HUS4ju2CodJzba3eSNR4",
  "key15": "WQxWvWF2HodPdJfURRHx72FS8c3AfU3opgayvxTN9pxfHxi4VMn8qvPsSyj2M1zqvbPiX9vZ9N5jEQebWZ9TMN4",
  "key16": "R3uRaydxk1oLt9aH3Hw9FtKtXKksNLXi4AcU5qc3HaTsHxkH8s2BjZWUpygmQJ3vC6igAccufNgW4rtAzDbz6bT",
  "key17": "2yDMRQ6PwqzFXHDFqCeerjZm1VhYVHPjqXmjKQ59sUW9QDQVTx4Kb1E8VQ6gG1A2HWjB7LoxYrBf4R2bBt32HvDe",
  "key18": "MHtMzMhhKfeWkZ6uXWVgMc6KPqmvy7Q2jvzuRVizDCUdZtZ9iMMDFWsHD71kq1KiXLApmfju3otVCwzEpaiwHmt",
  "key19": "5BNBMEpr3gkK6nEn7PDvjrY3Kon9Zz95iaCR4Gx21hiQwVDfjvTuHuD8K2c8dGcLkDedZwnzEFbD4qpEoFWacRTV",
  "key20": "4EqEww2E2SXhcRqTsXpWRRRG6oyxiqzTma1pnLtyvcjKNVq3ZMFxp4YQymdsuVJK6JM3JmoQxjKUbikPD7tb75f6",
  "key21": "j27nEZQK4jKrcdQ3co7Gb8XxqoFzzqbDCkV2hd7ja326GhnBwekX9Gaw7ircX3itjQn2NzbsxjQECbyTX4URKwR",
  "key22": "3u25DPW4xapi9uqsDcJRFdddzDhvnvYDXjCJCQoNB3pC91TqyG4ubvoRpftuHp27hk8ADPhu6gfrMdcAZMtPepsR",
  "key23": "49fzrTk52iyCRwYSWkV6cvqxz8sSEAyVULjpFDUwkatsHnBstu3mjaSuZkoiJ4EE1FB3z6HhzFawp7q2ABoUW5Ny",
  "key24": "ALDuK5qJSAVfhTn3GGjCiUSxekoi471FniNAGprbnCJZ4fAYaBcj183VtWrrH3jpNGooMevgzaXmXqE2RsUZ4ju",
  "key25": "5j6phE339M4Rbi3WqScgjcU3kMK4WFEtCZcphPH9kAD5ZW8tADZAo4AmvD6S9oJJwLipwT9VLs8c4iQpCqHBrLob",
  "key26": "3TdNULHnd9t6uDzTotRJrWa4GnwvcJGoj2vZyuq4viwJr7owfsTSE5cKDEKLjyQFefHjUkkFHbt6ZQW8ybDZvjXn",
  "key27": "5JtzF6EMVwvyEbCEqGiyj5ZZWZe19dAG4x4fjsJxqnLj1EiW7C4Xyy2wzQuK3DPQeK5j4VdsSVktJMRSvB9As4fM",
  "key28": "5iLNd1bnHmFLkFk3jiT51MDnQiESqmdKkaqVqb2X5xoHVYQTMXSf2WqFWeVMVWhsa5giKBVBsQfnDoLyag83zAJp",
  "key29": "3UzphqgxcuUKpN1xx7AEQBjTcrWncQaSLHfdZRVYD53mj7CxWEragXUXgMdraoFQDydsNJi3Tw4p7wpMM8UabGCp",
  "key30": "5Mw76btxa7QCJ73SiDJ3xnRw7tGL53Fj6SPy1hLCbNboFGe1b4VmzDHCDmvvx6piHj1ThaYDey7jdRN7JiTFcfLD",
  "key31": "4ZPsLGi4nmFi9X1NHqsT99C5aZSyWFpcfaRAMCcdajLKjAo7Fz1kqwjJBoMvkmknUL9ioFrctFnTGeVGtUGMEC7x",
  "key32": "5HBbkfsFJY3Ee1nbcYB1G5dtPS5V9EiLLS2QwHT587iNZv2KkMZ6x9AQMLkjhibdHNjWu5z55V2NZpPLYxExzhBc",
  "key33": "43YGY4wwHjo7zukLt2ihg4CSn23p8JJEooqJQ7RunTavdCqDFLk7nG9thGPNry51A6kBEbnE1Y6PmbgYAY3mhkxR",
  "key34": "yEs55HooAD5fgjAGRY79eYdRYf8LEkUpXihY5Zdwn3RBFAKaHxvVEkAq2z2L6wbLuJ3B8TwAgZAPC97rNryVWR2",
  "key35": "4C2JGtM6zcAnzRyPAwSpboH4JEUNJsmmbc1jPabNRRznWiPvc5C8uhjGJkGho9V7gbtUPD1MEZ5K3Ad1kLdoQaES",
  "key36": "LNBFarckjvrnd5e6heQPbCk8BtnV3z8T3xrTNndbwujUa8sxKrN2dtB25dYTdHoo2zaYd5HSgcQSLzNJFWo3Q33",
  "key37": "48AEg7XZ8jBA78UrCGmAazfgdTTM7jPQch9n3kRuFsP3wzKzphQ7CxS69sUQ3YuHH8o1SXDHWjEqtziCfVjb8GdS",
  "key38": "339U4eTHKamDUnsFhGzYsUM1keZtBovaxeFuXvcjW5QkDFsAS4GdToHJXsYWidF621QZF3qczJd3qsxPXoATAmDg",
  "key39": "4mGq49BiJT6xEpH2iibAPui4EtCpWYmfEQ8qNbHLgfyF88LdLHyYLoiPh8aRgZgNgmTvogwMnAeaPq8MdjGBaBnd",
  "key40": "5fdZRqPP6Zh9wyqngnJ8cLbXBG4HCcFnMpzFnz7K57WtdQvZANXPGoNEQ4m5Z4HZg94WF9mFXZfmUC7xdF7AtY5Y",
  "key41": "2yKfWJV19jjbAbyCJ26VzjrVF6ae1XBNCWkSRmDUHcVnLHebduHMVqqAApYWhCoPwUxD76oTV3Ra7rgK3c5WmBkN",
  "key42": "2VhbjVvK6cD1dXeE3meHEVB1dD7BJXpsHZLqKHFoEuVxy6nmifybK4R6xAiY5nrAr2Gtn26tujWmxMs7rMG3Qo8k"
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
