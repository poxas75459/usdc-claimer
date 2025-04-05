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
    "2AYiY66Gdt7Z5k4KjWP5FXFeZJBWseDaRUS415kFEdPafd9hLF4FCXzXdodgped3o1W433FGETErYW5snJ3zrSxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZdmYha4zVdkCBnWTNkiugy7K1jarxk3SMkpMe8dfc95BwrFRByKYv4p3iZNwH4a8v9BhcDNAk2Xjy262jtUTKH2",
  "key1": "5ECG4AAQCTK1ABtDQ9p3vj9s7D4KXGug3x2NhGbDxkvpbhmrfsrUPnPUSiiwxVfvxoWUeqWTJrxh6gTw9GwwqcKz",
  "key2": "5YHTnGoYapKschXZQmz9BXq6G9LJqfufVz8cTNf2XgFk6u3vEPjCYjp3aXM5nAe8cmASian2QAy8Pk2Sp6xvT5hs",
  "key3": "2WMZamwYGnTWXvDJcwLUyYDfrrknrpbn6ZFVPk2xKZC86a4PfuVBAdpZ6yuVA2urZqLn4en7w4kUkmpsbXa8VC5y",
  "key4": "4qNoRgEAs8ZDPipcMXU5Zd5Kxwoxfu8wTvSJHDDjSaF9XtNwoi8jj8cWX9AjLGCohXxPdG9Gp9XhRhQE2w4Ey2z8",
  "key5": "4eLkgcJu4MayfB7qp38dRty7k8fSA7ZaTHdVe5LrvhH9JQUhbjHsKMG28DznuG2vqpLFTaUZX1cCUJwhk6QvUx37",
  "key6": "5S6BHioD3a6mLj7zir6vUx9cKB1VfLRRrEB2BogkxZsfjooL7g68e3Xxh5r5PuYTkh8gQgEm9ZKyLdapEFUA2eNY",
  "key7": "3okA1Zyg8VNJnpSDqARGm1sDaX1Ezst42811Gza2gHcb4vsKZcqJi7Pt4eBB9hkcJ2VepxC86sjUAVA9rmqYEUWK",
  "key8": "2nTzscQwiwpyzfMwcJC7FMZyBMzzwAWgtxQg92ZiixpQjQhQAUnLnYpN2ehm8SjroNWuotNcsqdanSXQBKuQ377a",
  "key9": "33Wh9RWwShyF7trdnUGmUVxBu3HED5GzNNGoAwS3LSChMtKRuYjuwa5DhjX62xndb2Jy1t6JJunU4HrNpwiVTVGz",
  "key10": "5yYN95b9eANTnSRSVSt2V7hJ1ziMXyZjWLHujyw2aVyaVHnaT3RiRd2evf3csfQ9nuPUEWSnE6Ld8Kf4QcQjxbSh",
  "key11": "59dEiXERPh8SUV3yE7DAeJm7gPrbZuSeW6FBU8qoKJa8cDkqyxkAdKLnrMqBeZvX6BiZWokeCgpUQbpXT5EuxCdW",
  "key12": "2hYM5swtj7WYyTzAiM6sU8TM9tmaLgguFSMFtLQsvpesK9p4EXKaroABCouEez3RepzgDBQeqnwVACTSBNzQi6bG",
  "key13": "3ugn1zsrXiXAeuyxyNpwAsc5vbmQyMR43oq4g8AkuwU3pw2Ny8rFhyKzfVfCMmTBu1nE4zvPB6PY9mnWadJ1vz8V",
  "key14": "4fkzG21Ng2DCmtdBTNN5yWyZxVdtC63MiKKSqGc1afuVTsecYF5R5xBxERwiDETjXfZTPqKLiJYnhZCDTZjdQhD9",
  "key15": "AjWFruTtPZ7c7jrWsSkmSYkwmCQuJvt8C1mwshiC5Rxqz5CA84JjnPG8xvVRVcRo3ajTrhgz8tsqpABKfo6LdB2",
  "key16": "RMVXRwebcKdN6LMGfLAq6Tz7iYoWzS1DRZu9LJghUcoFR8xcfYNgnUqcFjLRmCSuAR5UtXWSSt8v1Y6XuEmKkeT",
  "key17": "5aU4mHseWT5MACc7qFw5WCMX6cJ5GnjTW8JVToziFDeG3y4Ez6bJBT84oNPn62Z6kTFiDPbcJcauPfBJEePpC4sQ",
  "key18": "38XS4qgphd8syq4JnLGZbypPwfBCDC1S5BKS3ZxGGTJQGGH4NJ1nFQQDHLuSNcQtsyYwqKF1TL546CHwiBRdSLRp",
  "key19": "54haBhReJ95BMZrKxuruVE5AZFj5a6GaQL87aUava2EfEw7SyuC6SNv8GvKS87kfvZSWXCf1qSRCDsVcYhkpUiyi",
  "key20": "5tE4fNHTUHYPPTnx3Ar4Wm1iy1fcBR5iRNUFkmqtyWrzdJLFmyovUhAa3TaVdXRp5txCHTeYNcz7ivrgQNRxm4vG",
  "key21": "oCdJVYc8NqhjixzYDcptyKRrf85LfZU2ZiZBWVdyFZkBzrBAeZQ6ivAZMzQUFhe1kjgSh8tcPYTsBfPYwvwwjXf",
  "key22": "2NwxxnjyUD7L6z9pAvBqS1GTACCCdAeuStEFtmAp7NFdX6CErCAwApKtRAnhsKXQ15EcRW8e53V8m725GLV7QZ8h",
  "key23": "2WL9gDTdJucxM8xmzSXwrr82iSQueaPX9RZNuQUGrzHixChn7m1is2KeidZH71wrJ5D51xEHiXPXqMoyD1XvQE6G",
  "key24": "t5eNoDZ139nSwWwGRqKPG25FzF2qPjmia4J3TM89ZeQ6h5r9YLNLSMGwmUX5QbLrx4bxAjqV3uhyTJgs6MJDp4T",
  "key25": "4GwmTPNeVupjvqTbGC5nKamJbVfSb6gVd4cZHJ6Z7QAoNZXikkR2ztiEHhbK1mqJNQs2KT5h75Rgo95yJg8bTEjA",
  "key26": "3cJfvjZhjszVRCjnzAntCTAFK1pPzobEgPJRHEfktYT37weLdmU4f6L8jc7oqJ3SJcaERPQjL2R5henf6qpUuhET",
  "key27": "3yYUr71pZY26tsUrXTP8KcxYiNEhTgbvg2va5PBQ4pkrYm3VowyaUVWCsBh26nPXKQBt2pZo95Wzr1iUXXxHeRW1",
  "key28": "3k8gGxhBxaknhTifEqckfAiY124Tq9hj5UTK2RZ1M47RTCAZ12FXtzLGo12EcUXmy7Wd47dos8wfpSfH6AiU354A",
  "key29": "4oihigiNPjxxBLnKRP6Crv7aqZWsQXXN5Pv7t8c1ZZBccHCu17hz4KcJmLgRmmD8ndpQ9bKApq857ChSvBVRypZF",
  "key30": "3R6vj3itD7k2YCjhCLQfx2U8FgJc1TCoGXzFjXP8zXWi7U2qzte9LjdXE3vBbERq1L8Qh6BCT7K49Kup1oVaqGQh",
  "key31": "3fa5p4KLTT2U6rkRk4i9yWRE4JE8XsA6CcxFDEBM3WkPxDqYp18aLTgnn6XSaYxfQFZWPKc5B5Ah6SRd7mWvRnTR",
  "key32": "67VJFyneBGkZ5jwer7h7Eca3r7CXALoMyqhVwZkHsqQ1VPm9Bm3uYC35WeDXagQREUw1q2vtNoNzBgx2UkZSdim5",
  "key33": "41N6SBrSCVhaG3468NAY46AToaBbTUP86MZXQyKRmV72cBU1HcLCHdz16xpbxe8Zh4AH3NU41n3tbJ4wRg4FhAVB",
  "key34": "59sBdi8Nsg8CULjZn8AL3Gaqex5u3mHNVea32vyujA291XC3wyKfCBLFzJbnnHrBQNwHG55bdEbd3bQ2RQtdr2tw",
  "key35": "2BY7q9obhFR53wzzR4Q57LQgRY5ndHTJhL954dwf6FsB2z8wSy6YjUhHpFVZV2C6h7i98S6Y4jGL7SgzsSk7njYW",
  "key36": "2VFZe1JY2Lu6nAVKNWQAMZGMGxNucts5MhxhFzPQk78YDC1ZvirTq78ngvZBhye2SQuUyKUW547QXCnoTz1X4XdR",
  "key37": "1eCHjEL9uqbL7wBPtXBVKFyaAA1Zweg9sUsxMM8sNYQEbqM53SJqLemnovcLJwxpyZubuohLQSx8ehTa1Q4tGJJ",
  "key38": "4R52W6Nion9FY31FHsEp9riy37GshZ5PsEACapgkbrG635bNsivKwAcScF8jfNsJ1TUhrS8HynN6QEPw8KFEyTY7",
  "key39": "2SbTu98Uo1xewEfdY4gs6b9UA4AHNQTVmFxwBaySbFdauS96aok1gspTdSHxrLpa96ojTAjkCGnp45TQiEyrTvyd",
  "key40": "3c5qDDzYL217B9SXRhD8svKUTM59cBsmdSwambow2zXdJZbcopPWGJN1FG1i1yo1bz1Gz3aPGU5WhXk6mgcoRLdL",
  "key41": "5tw6asYWeLqmQpoXASnM1BbYUnUnUv7jVzMwqaHgCSaAzi2jSp9mY82ppYdMyDdr8C3UTs3DKbbVVXNEWHhDwbCE",
  "key42": "2JaJAbqAV52Wt5ypycxB1gqyZ6C8pdarNhXnSTNTFfKP7n8sQY7wQtJgHVYxJDoMsSNEAEvom41oyg6t6pWwyEAD",
  "key43": "2jeWjEY2RwCm1cyuQu4jRMUBepQTG3Ae1p26mcTshUQDrLLek2eSKeNvi7vfU6Bqf4Km2cMbBpw5pqqicc9X6Rex",
  "key44": "3xXNHxFqErT1RWHRpK2ag5bSbSF8AdBXdBbvQEinAzuz6Fqk5XVvJpV2PPgxWmrpuTWiqjCXUgHDHsQz8cP22ive",
  "key45": "5452Wrv3cmmJuTcD8RC6TPNiJG2H3LHDE6SBHZXexTZUKbceFtX5SgJpU64oEshWWVFdPGymoqowMWL6e7ViM8dK",
  "key46": "5n1Ggw2K2uWsHL3JPRNtPgHGtsYFVrfCzRf3NT2sU4knX52NC5nKXXrBigPLioqw2ViBBicznWgZME9xnmB3wt42",
  "key47": "3k5Dm1ix5LzcPejN3dcApn2TkVpe4SFoxmCymLsxf7uYdUe246RawWozqnqHbzh37KktYHTq8uXDp4ayuo41T3qR"
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
