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
    "4KzMA7isn3YpXru8eAgJSacu4gPYHJzZ1rKYAPtnb8uPVnX4rNKqpbkYsohGFd1ncaAzfh1Mbvzz7YFmBioRQmQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "378gEhYHwLreNz3Zwnf36Ez5gy1XYtW1GctLw91WB2TXfJyWsYf7qftGPb9UvnzjtdQKp5UDpo5bv9uwwE628K8m",
  "key1": "MuzynssHgmPqdxyAhrELTFRy3Fm4S7x34f9drybp27RPy45jsMgzPscGdJohwZF6CSVZiTNtpPLVS77Zq5qKheQ",
  "key2": "3ek6kGcnzmXGn11EsB1kSU3vWLguwXSQRLPXzgaBh5s7kdFwnRYWvnMgPqvkUjchoExDF9sY8vGSudqGNzAoZzMf",
  "key3": "3WLftZPRnn2iEJxfdGkaiThYjNSridn368YofoaqPdY22bUCfXne2LoDhgPUXFxQi37gRduGwhdAV4ypJSBT15RN",
  "key4": "2qL8GjYaChsxBBf15ucBXEDBMqB9fSuURsinvycH5XzVp3wux73TKKQghycftPVd8meudvjwBN13B1uQ7N7TeSoN",
  "key5": "4c4wcYeyRp113DJ92bVW2Gj5Gcv4fKdJbGZ9pwDXsZfy9fae2NefETFEMinuSidKUifaqKxNARQawE5A9o5bhyG8",
  "key6": "52rEzFdJvo6QjV9yKz1pt9Y4cZQPxceH7A2Xgi43XtP2CHXnwmrUnBh653Xvf71W1u31peWzmwy91NzShdSApiaN",
  "key7": "64B48M6PGiiMCNdVdkg2hg7ePEtFFhTsYN6Nw85vaeFoKBYjjvdDWAAukHYrD6MRyUReniMrbpewpEEirFuLjMoK",
  "key8": "3pHUnL4ZfYcsdd4dsHhA2TwP2WmZJiJTdEowS7ZPRCd2agAXBLMvWRdm7h7aG1yXdBePsvXLmFrghogHQibKP39i",
  "key9": "Z1ypQ4A3FVSThuqZfuk4DMdewJV1a1RHTouCGPZrQvBcKqBh8KVAFB6sJNZgzaoDRiwNaKDd4D1NMxNrTeZ2cAc",
  "key10": "5iH9jsft978ni2LdexhkjRQ953v73LyZgg5pDm4L6EiSon38zxTwSoYqWczGH6RZ26bivmcELvzfEfdepyrr5pj4",
  "key11": "4Rm54GYTNahZTCe9VABvky7MmHin9v1gH8i6yHjdSrFVtZYG1vVfSrjMcQ3etszmGbNijaeZNqdH5sDs666BXfsk",
  "key12": "4iPp8b1prfhRqo4t9uxSPvxVp9sCTHNY7v6jGRt9bfZk4W9ZJmmk2ftdE7wQ7asm3FPZ1AbMDEwXz1xrySLFPqN1",
  "key13": "rBkcGYAw4QwSH8EMC8xo6tP4RmKBTmUpFeUMhA85FpjcG4Um2gHxUSLfXGbDpZ1kspDNVt7s42Fvb6MukGTZhdm",
  "key14": "2EyWHZeF2G4cMCqBtuibEKBdVXb98LvUBaq74WEyPnk7qqDgXmRqenW3F8cnQ5ufiiPihBxGVXkGGRYJcbRV5D8V",
  "key15": "99quaUbnEBM1k8dZgLHpwwQ6UQW53QGFshgBvSv5gUvtD8tuE8HiJPnd1ykRaqhFbib2yPq2eWr1nTSgFDX5R5b",
  "key16": "3UPmtiwZfYMc9uxAy5zjMmGgyLRTprfNpZrVDF14GMotzqWPzHtHas6CztdPPnFHxQGmsYWp6wHjB1MymxiEQGCB",
  "key17": "37WDnGzFEeY9TUgDW9c1zDcXBE5seHmy9ggKgKt9QvPqaxoCKnfDCAixQAtWybvHXNSRBUqAXsgjKSKpssLeYYH5",
  "key18": "4yxgP4LZntJrxGrarsM5jcmDR99xNARr9skbYtbsS12zbQFEWwmbB6hUziEXf8wD4szFS7erBuEhdLB73pYUG5EU",
  "key19": "4XKthEK4GLQYWJp1swPxme1dru7PTatRBLwnupGJnKJ9JTmFMMkb9u9mRUwwHKTMnvbdyggvMqhj4Ep7QaM8uicQ",
  "key20": "5seT6z2A2q7QoK6fzHE67JN1kCeUQtBgRxvpZ2MbCFnhqNPAzTJXGhALttavuTFttwCVHssGKHkwzEEzArBhusQM",
  "key21": "2o4gZR6PkuvcjqfdMJrtNGo2d6uLaX3rif9ohaADshyvZFyjqWGycyb2rHgLZENR9W8aAgT8uXPFwzeTxHFrsynE",
  "key22": "3ea3ZyfGGvzAvbSCdKQf69yxwomEDWephwTH644Fe3V4VvLTBkgRXH1UDVPSEdk2XEMryjg1LW4gydYdiWtMzAiD",
  "key23": "4Den7VjeCYvHzm5hrq1DyJDpxQFwDCAfqrcEdNmYpRSWdEXpHRpqMHYtpVFWkknX9nLi78H7oUgWuTScYBPuDrv8",
  "key24": "3FvtmfQF7R4c5E3WMuzMhsAggBKk7LvxkPm4P9c9186zzmHkMgEJVvztR1d9D6kEtCiLBDTuNDAc7HrS1jYTsAyi",
  "key25": "2CWLLrU1VgCswfwLNWpqDFf3UXLYDf8EoYy8Po6QkNRon88r8BMFchHmFnXpeuwNWARoBQFuGfHnziiuYeAU9e1d",
  "key26": "57ioWRuAmVoudQCAU28Z8FYYMuZS2UoAWAr4nis6vDA8Xvj2LK23G9dCnjEok4EzG61o2WyLNZQxVeexgaAE4f2C",
  "key27": "UA7zoTvwC7aihkSpi8QTGdsxK9nMVZJCeGNw2kgHQ4maJ2trwhyqoPC9qBR5XoRWczUZJ6fQBukQbG6RLuFs7Vf",
  "key28": "5eSiHAtvvttJYpPdNKPGwQPk4Y6cecNm7e2n2LU55ij8zUeVmHv5U57coNR5kPePSS5ibzjUKaoraAnmnb5hHafN",
  "key29": "5PowKXgfFWGe3zkPaZRC81sH6hZ3ZNDbk76HonyxTegSmWyGuHapUDkRjBMYgLBQ89SR83PrRKMRUGJYdAZD7Rvo",
  "key30": "frJB5Vmuq2GR8D74rmTMwKfaq83VveUqN5w7D9XUxdo959gg7RK15vnbSjBJvMG3sDdzHMNy9jKrxbVK64FoGNP",
  "key31": "Y1923bczzkYycQCnFXDvnqTxyyT7ixwg8cy7nFAfJ3hZwgMk2wDv1RK2kx4usmQPh4UHUb1nYxeYzaVfzeZzC2r",
  "key32": "4oRmDK99dnejhXDdk3LgvncAaNrTgG7dpHQjDYixB3ibeYzw7DE6mqEKejh99K1oYznnYc3YLgM96EBKChpgA1ZQ",
  "key33": "x9RPwxCupru55JPqDdWBA4n1qsZUNzi87EXp7cTChbmh7PP5EZzrraM7L5gXYD5PkaFuPhKuWdC85XBA5ZVeaMW"
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
