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
    "5ysjuNbamQDngcYWJr4RH7T7bhRbgVDVvrWmxzGd3m1W9fpGYvPsKMYnADgLT1jL93FHdUkDjAGxZBQYwy5e96Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oYw3QiyyEDAmh693v3GLSeTtjQhxBTbNmzHWUPSx2cSVK66TXZwiGB1zhULyt27gQfCZMWZm7GU7KqHvqinSgcw",
  "key1": "4z5J2nvwEcgVHbVz4aeXsGtB8fkbyRB8sJWtCeH8SY7a4wDNz62umZrse6JaD7i9p6b6jHgXjAgXHPtiNzB7duWk",
  "key2": "5URX5jJAXKSKXsDZejzdD1Udyy4WL5kva2a1SLyKvRbCQjxn7WKknayZtK5y1ZEsMF4wjJfY4bPhoxSsxhRoQWkP",
  "key3": "ZRoDcMcsNpsThqnrLYZ6ZNTTy2qT6KdhBm9kbS5DjGudmQCnZTE51QbapkNU3ZC1EQqcE1V7CaQqhpHgwMLMrqX",
  "key4": "23jEAhY67w3RKfFUugtK6mBJced4v2pqcjzfWfSL2Ap61rDfx91qY8v8CFwFainEXX49srDmQ6ye8mh7yQdSACFi",
  "key5": "YcwYhNKL7jxjuRC7jHjKFJjs8KnPRTA3CpXbrEWWPrYrH4chC9Ap2a2r85y8BFDNpKWJwLXcnsSrDpm7ddz6Jeg",
  "key6": "5qcgPix5W3H2pBhD39czozN3NWcjQfSeyoCWGDWfaZrgDAYRf68pfWJGojDx2KrX1aeeLNB3bLeGkKn4Tsvamrsy",
  "key7": "rjNpPeXPX1RPYvRkFc4BBs7tv57MttdHyJxS6GVK4BMJvdyoTXP4EzyZjmkeFbQYsBecBHRjfw3vbxz8BzE8E8S",
  "key8": "4WJBHjDweJ9npTSAjRZ5SNHCy2G1hCFBdMoKgrZ9RuDyKNzQJXMP9iYJT4BUJeLe4fzeNyKbHF4DSektJpGK8bXk",
  "key9": "216ySuZ8bU2Ksmbir7H2NTRj4n4NvBYTHoa3zd2hhv8VwQTuAzymCf7evWYiXVyRoZ6bWbVkjz6AYuJYKePc1NYM",
  "key10": "fRTvbMxFeGndu3yCXRQ7u4tJ2TC56WniAyb2XAKgaSoY5aJHJvA5F7zR8rUHfGuCQMxjRWv5RDsWmTzPnjb29A1",
  "key11": "3BfdhpUjDYQk1EDYSqa36Tr1jATqAk9LULCoeJe93AsEDjBJzRZQKF6CKovfK1yueP8WuiorBuDueHEDWtoW56SG",
  "key12": "2fTEtwjCfeU6TEKdrEvgi42BKX4jkgegbArzoWiWBxpv4pBwK7PFXDvyK6XaFkBDSeScG2ooXHBWct2psq66i3MY",
  "key13": "4cPhQQCntMqE34EsRgJVn7k6CKVq7A8ocTVcxeAgBUeLH3RnnqQL8NjFniSusqfGLHbtAWDNATWnZxSgY77JfotH",
  "key14": "544rHLp3o5Y1xg1zJbZLRDZCydaYdypWVhNCHMJaAXfoRuUndpUVJojVBimcceH46hXB2MP2gsEkupy11iTYhwna",
  "key15": "2EgfrxMMZbjwk4bDM2PwdVxkP8c2deMuWZgXwNP2wpd6kqKhxkUcoBieRH1VNFNrwwzybAWGWGttmgEsz4K9VrKP",
  "key16": "5mEYK2zWz1ycZNF9cgASCLMbj8bpJqMaLTdPRvKDbWRrWT1PMGth6tcmR41bYieBpuHmhtyR5vdTBkKXs98brRfz",
  "key17": "8n7XN6ftwjoLTd22mMpkjeMoEv6DxuBKHx5WazwRCrCtdsS48QXazSTMw1KRNKGwQMqUBm3e1xXj2ZiZQZQce45",
  "key18": "Zy2T8vnBWdxfVrvKBX2JdcRJqrwDc7gteyehTDkqkvGrzZX8FAvgFyyv4dxi3rarj1GAgDKNmTaxtYAHRtyQYHg",
  "key19": "3oo69X3yRaft9DxzEoNeTRYeAzbW1q7Vb5xUtUv5ss1f4yg7ziU4TSxc4emvbwHwwnXmSKNngmuG9kQEG7PNqG2K",
  "key20": "4BNeNM96J4o9PZ9DVoyge3M7efCAAAGgUxPtHWjDpDJAbJZdZmfcTJdUc6ZpVGmzH2rJMtFsM2KrPFgKniR2Uw7b",
  "key21": "3J65Vo4EnHNrfqGRi4R9q21YEtqUy3Gs77X3CnsEuoBcrrxJfTGxKDyTySCL9QWS9UTGoZeq67bCkqmZaT78FSUy",
  "key22": "5wUmHv7C7zfVWev2rrGYuNqmS6FKuXDeGpqVuQKtj9mLNcyGn1Ar9peme4hfKqU7GqnE7VA5WiTEyNnzfs1yY3YJ",
  "key23": "4ghsfUsdCrn5sMpb7gssQoCZGB2rGkomAwwbif9Ka9kMd55PasNnhVoTNmKrmKXtMF3FpohB7XXvGPqKqjkcx3ep",
  "key24": "zDjpj7gCCLYB8pEbMTty35KzQtJv22jGPwUUKtFUMfKv5SFxS3EMaEtSrbQQkJngE49nAa1yrZHn5T8We9d28hh",
  "key25": "2xgHeKnuNi37wMRP5yPdXrbz5u3QPB7hU5RGWh3FKz7RMTrb4gUkzaFjokrKyPUdJgA2cdqxEiXB5C9BpKkZkRno",
  "key26": "32Q1AoPYm7dbh8BcxxrhVW7ijn11DzEvbPtm8Q2JwNHZM1jZB8Wvp1jCLmWwbEZ7XSU9gVsqDZDNgxLHjLH4AmWZ",
  "key27": "4dKMv4GVLoce9xEc469XdGETvpKDmpCc2ZuQyE4R1uFVzvrMRCS8wEViHddtFZX6ucskdLyBBawXuUzzMRExcM2X",
  "key28": "52vFasiM5v9J4ZxaUq95dSgH9MaGpncQq1hDFbwSSEwgwF5H3qs4Y1XZctW5QkHRFREHMEvtQMYc5ugv5FTyHpxr",
  "key29": "3mhmNAS3uWNpAHn4Rt159ckmzh3BmweZBAUx4WXZ5LvTyBRTohsyjhS6mWCMwPEYWG6RKZmZmAjGruk9fzpZHTTQ",
  "key30": "upquy1b4xMVBxVaooKK7hwhe8R9BkYkuRxY49StJSkWQoKVPVZV122SCz3n15fYpZASwx7cdEerkgKTrDzVz4GG",
  "key31": "5GznMxRmEVWeEGddGxgyhsqnCwLf7U4KHVXXxwNuyrr4RdstNtMoxWUj4i4SRQFUqAX9WHa8aQ9qCHBxThbuudBM",
  "key32": "4jgf4F3mzLvm1Gbv9ZF9NjuLsi7jzbJnUFvosq8GNGpVT6vjpwBSupoopfmpgWaVTBfdR6Lzi4NEEfXUj4qZNDSv",
  "key33": "5zujARNR6FPerjoW85WBe11EXyABMhedFCvFxyP8HwxVRgTrgSuTu9KUUf72MW6FhFUooeTSmf6nRQmEnG8JGpgh",
  "key34": "5t4J2AyQyq6sPXuV4yHdeqDjcDJpo8K5dZ871CTUXnWDY9fLhHvWbSvgyRvuG4eRd6kZQvn4tNv5Zrg7n8qkWLFQ",
  "key35": "38Zm3zkA5qscrFoBfj19SyUh3xTR2tx3iD82FiZvPV45Xph3Ju9xnCoKpvbiCdq1S8AykRe8Uy5QSvPKfEDaRiK8",
  "key36": "3mpvyTrgWSHuKLCo4Jxm4wcpQvvKyn3qVUSYJtk94hmtXWNKz8YuPfBqFbCM19U8g7AMvKQeKjUvMGcvFtLVrYzt",
  "key37": "3WHCRJWbxEpCXSwrHHX38ftaXbhvU53tbuL9wQAD85iPdBQawuJmeFDz74NXF8N9ofDgPHxos2RG1B2bkxZaia8w"
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
