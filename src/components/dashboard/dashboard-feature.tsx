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
    "4HEbLaybg85M1CpgZtGqJ4iqjko9mHMAMuCMPiQdYQUqzrDwW8NfrkTYjVCA2nWC85VAnzmxFji1v6jDXBaqRczb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KDsXJuxVpggACD6aoJmetH2iojSRN7N523wnyLd8LtkDQU6Qsqi93AmKXUZuiU5Ppa6nRt7CJAfR8bTu6Zz4fJo",
  "key1": "5wxdEum1ZV1LhEWatY7GZX1NWNavYDWABBFJwVYeNJobNdRX78JYrxvQYNiqonERVWu6BQ2yXRLVQtxLmEgPe3FT",
  "key2": "3a4xWo3LNkrCrCLtsgvDZpiSzSRqJLBMQHgWYwJ5BTxcJcGwyxkHWU7BpC8H91UResSRDyXwxvPawyrWNeCqXahk",
  "key3": "2x7wSCNQQir8TiDig9ecetV5hoXzuVq5LatYumLxRoMj4Bnz1Whprs52cGBPS2gAbhzRZ6FPM7HYyciwBUB7EzA5",
  "key4": "4q7wkyvRsM2UfTbwUz7bfDnLv7VUctaeaerW5U81eBYB7bvLkbyQvfXFu9LqV4qagijzjxCdLhQfT9aDTFLivEjX",
  "key5": "37bxSqdku1gQNTGBmgxMzDa1qzLBTAx74qcrBwTgwCU8WDs2ip3DNCeJm1ifK2gbJg1xRJmrdWFQKpRD69NvDm2U",
  "key6": "4VPMReoLKf5ePDvN4GZ7B6Bs8Gyu3fymj1aNib7C2z4uMDXhEGhJJybbsKZJPjudQbsZottWpMUNtM6eWNcWkGsx",
  "key7": "3JBzq8kRMioJxJPL3DebzswJf5aDZWFwWctkcZym3KmwY6XLLzGL85YryVm7tJXyZKrqCxmrnPHnEK4SqwHbZ6xt",
  "key8": "5fQ2UXq88KXBCYMy3iAcWrA1peuTMak7FwRM8WUVeVY9aRC4Xxi5Ti2V7VsgsumfFdfwy47EKwBMYQCFzntyvuZn",
  "key9": "2cogzHq1hyD3gfS9eQBLpqxpe5xX2ASEcoYVezHzbUU1uqWXNNjLX32KrD6v3Nh8VTawCKKFPYXiuJWaEeB7vouo",
  "key10": "3Et3kcq55EF9rMkJDyT3am1cosV124n9egkwBC8thrwxWdchhnuViH9fzVkkeavStkS8nhMWRQp865y8qemZYwKn",
  "key11": "4uhkV4AMLhKJxEx1PUDMkBdJhBr76GdLCfeCHHE9eFyAkTSDhfkJYpeDRxSt5mMkXGwFg7sGYfMFQNyEvuKExgiJ",
  "key12": "4e3mJAcNKngR8C4ekrX8i9x4NQM8GjPaw9kLJLJnGCwvLz9aEZWrQetRMyqqJm1pUAVj7p4bNDR6Fmso6NQ48QAH",
  "key13": "3eBHvpomrAk84MM6uiY4RTkRKinNfFCpnga92YFAKtbjSvog8aEir4HR1d8cx9KkVXzQJp9Cv3hJ9LwRsdYVBe5Q",
  "key14": "1Bxa63XXcjUXfV13keTTyUFuunW4k3dZm3PKxVAWiTBAHmnz32cS3k6Uvhh5Y1C6eyHYJ49amX2335SJj1airEz",
  "key15": "omjZSnjUorwo9dkeMGes6R91qk6EwjT1BByRbDN3rvtY3RaEKg96jvSBvSag22286dVH48CEzVeqARwC5JEuoU7",
  "key16": "Vyas1sZrUkyTNi2JGhk2brDMK5wcHZ1pcKFK9snx586DJVWAv1qgZQstFaBpadgMAkCo2rgqKuyDKX1GDnjekqF",
  "key17": "5i43KTgcQsXgt3EnDbbJUV39CkoMDg7deC5Lm4hJ92dEQYPce8Z54kFxag6MuwvpQnoYG9utpFRoKWwn4Ys5ceEv",
  "key18": "2ywK2DNEYgmzY1EGRSndqJhvF1TtYsyJ6kLFjaCFoaWHqJuRQtKswteB7YH5T8htQLh34imf3TyjzYZqF9rAx4hM",
  "key19": "2wFzmNP4vbiVBggTdbSqgmcWk9S73j7tKuDnq4KRW5swTH4Z7u32wwPFHD1kJaSRBq7PZM1Mx2QhdADyZ1EGmaKy",
  "key20": "2GeWnt8xrf8pxiwjDrPSp3mJRgUbYqiSgbuSf5B1SYpPq3Qk1BqYKY52sXojkXoR64U3ARkR4y2xkutSxrDmJsfk",
  "key21": "RrwHjZf8hwRY9XwSK8MmKBaiMomM3XN6DoTCgLma1UdKHD3eV1qSx4pfU5uFHNTJMR8Po7XjKGwHMQpHZm3csqf",
  "key22": "5kJL1d8oQtBHMQjhXD2b3uJGxWE1Brod5E611p1dVkW1NBKG6zH4Qe9cSYiZwa4SDE6wCNozGtejG6BqdoZZVzNY",
  "key23": "53KVH2YciAVrayH5nYvRuUaZ22B2Qmjhb9X3kJnngwNDdRn4xhtpPkBCeQdcLSrC8oJBj74c6ZpRiuknMcxrRgf5",
  "key24": "5LB7rsXFe5jW59cG45JXKvneN4eecowkVpvgTbUxpxfpjW8y1FQ3zjoWu4duV9Nmmb4voiqHRsiQbU1UGcDZJ5TM",
  "key25": "5rVMWNfBtH4cVw5bfn8fdFUE3MxnCFUvc8roPddtrVT3LgMenG1Fk2gE7BCx9SqW4P44jEGaDkPktYiBF5ShVUS9",
  "key26": "54wRGMe6RvquWH2qmEw5fxej3j3UFQovvGjsnG5wrzkauboY46XQdwNpZtTfaZws9bYyK46tdpFLMNyriLiN9d52",
  "key27": "51LzXtHNLwQSprhqhN6cQZKxgnQdFZi1L76ftGthpR9M2q4GuEw7ny9pLaacGrVQuML8JmKefisF2SxJGo2wY6MD",
  "key28": "2sR1FH2ooePz8WRfHckZmfNPb7FeZf8SmCvppME4uTcnh8f5SR6zsmRFji6GBDChWzTFEcfrxfib55qcQA5vo3UG",
  "key29": "3CtsvALewouBZuVAPBvWobwuxvwM1GBDmaLrx1iqgV527n4eeEjcGgBhB2tDB5xZtR1B84hGMvjLjpWczGi73xRd",
  "key30": "tUBe3i7XJsLCWFLMWQtXUx4C4DoC7gdoYTJHrCUzCFnXnF5aumrgeeM2XoiEbCYpuuUxJ88sWLkJTPjPsHmL1AA",
  "key31": "3c95V6pH5qTdypqcxrJCgLNcVVKqBPKBkuWpsKEthyGeD4cxbYyPZWBrmw8dRo8rXhQyBraSiFxrcGcCgvqSXRBf",
  "key32": "FLdu8Qik6mSyneCfqELXVvr5ohmhkNekQt4SqNzDa2kvpoa34GHiywRYmJA41beNPkiwkcGsvGfks5yajbeNbiE",
  "key33": "2xrAepdJZYBedQ3QaZtjBYDHg49MsCDfMFkVkkwGXk2aSgvaVXn9s2RpEQuHVXjXicwDe6c63UVJi73g4jSWfBwS",
  "key34": "55dSh86QHTAiGiG2tZCopMwHCdVvGXRGxnwbabZtNhwGELNquWK8jyEBi764SKufjcmJEqSuLQQcSuBZHEc322LH",
  "key35": "5wyujYKXdMdJnp6yyCi4kSmhNqPpDNWjNQvNnATPVCwhMymoPRT4qzCZw3QnW4SWayGpW9DgtMxt1L55QfdMJjLY",
  "key36": "4JyS1zD17VUy4rx7NNLoiHfmFAwpiKpJrcKUj8d9ER424mXukidw5mYh7tdDeeWMbE9xcGnrWRKzm6q76kR34QEy",
  "key37": "41EYihkffGuc4RWtG9bCqfrg1JpUmNpcycLE8ZqJXfoLgMeKi7H22RRNBNX5pwwmdWkZwYQfdHGm1mFTvRXmtbDA",
  "key38": "5vyHUNEGa3aXNx2GMRMRcVP11u7Vz7jx6CComAsSJqhYopmZVFkAM3AKqoEdvaXcivfcJBVY12LdJPjp8epSeJ8F",
  "key39": "vRZjNZcbEAGBQwBdsdZK2ZqFZTfXWz5XjqV2eSTDnWdh28ozrsym4VtJkNUj5NxFyvNcRVz97NyUTCrfXzBJiZF",
  "key40": "52FP2mk3PnQ51rTD9AUHpGTvszqgiwA2UFp4CieNnXGWMFUwhkwqKsH4jLXxvhaZ5LJXJ8SrC9uPvLpuf1Mjf3np",
  "key41": "VGz4hVF1u3ps85pxxAmdD3sHiYZFgWbakEhu6jxK2cDTdJsNEjsq5QoVUWZY8P53PnEJH2mr9ySjdJthhBQ5HQ4"
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
