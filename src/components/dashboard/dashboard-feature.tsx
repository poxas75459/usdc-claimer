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
    "4ELcUamCS4pemF8HJDdoftbzAKtbMFcSY5CHpc5PBssNoz6EDdts938X88FYfonEZPfe5LYay8tUYyPE8iL2xJPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZJ4fFDUcBtEXMrV2zKgzUPiLjQWg4wFmDbaTYUkefQ1mrrqbgdj39yoxx4BxnSPBMxuejXQbVUpWmuFj8a4QHv",
  "key1": "3xM532C8scusEwsS6bXXduGggByFF1DgdnAy85VTsf93BGx5hV4u5jNqyLFrkPqV89mw6zJGeQVn5iv3n52coiHH",
  "key2": "4fbQ7aHkuiFgdQH5eiJtfyFhvEDQPQDQ1GuYojRA9JLRmGcRV7TgrFfBBDaeWJBaUPsTEwTwGp9ZWhb3m7dmx48V",
  "key3": "5S5e5HR8qzAUPwfwyFtwoxs7KGjzBekoY1Nj9PhCCR5wGKcY77S6h8TyFQ39U94WcTxrxcAjVDoP26oAH97ttgQP",
  "key4": "BPqsxC9L5DB4jRAFFEvVy8Gk3P12GSbYnD6jjoSL7x7bwWgBjnX8D3SHaAYZ8R5xj3fCkcECsDMFKmgAhEwadu1",
  "key5": "4Kd8pVhNDBqj35nX6SJXoCdXcu6RQtbADBrSU8wstcyNV3CfzuvqqX2XxDAnGp3duXVdix9unkqyjEpzUnot49Z4",
  "key6": "GoCan4cbQvBV4vu4Ho12X9XQK2kckF61YykNK67cNfhxaeqE3e9GWn7oNNqmfettriMF3uVAHNA1gHDPQuqLHM8",
  "key7": "3SdH6dTd2NpwwpLrNCojr11A2PTkAoSjvsen8bGtXJfmj1xrRYVojc1AV4vTyS16g41xGnUwwsesVdPgSsya6m9j",
  "key8": "2HdnWrfvhBnJRMiDvJijfiBJmfBAd9PsqKEVRYp8J8wPFFxS11bTEnMgoiScvvg4gE5R3A9tK9J5jWKa5UuLR3mW",
  "key9": "3qC4bhwVpFgzhDfBiVyL2Cj6fAiVBacdXJZ96FypZeafmqbbSAdC5tzP6BbCu8GUviQJ2zgHPthuxytZk4gsafhz",
  "key10": "5sJfDiHVso6VpbS4gyMd7rbQmjm3FvCqtyerZfif7gL5KesNgPuPDfTw7T85CrVTNemnML1WpXRXWCLQmDUZyaZ3",
  "key11": "2RCTkHaZ1yA5TLBmCYVyDzSTNLd6d67ZahHjrAyEjyk2nruVU2gyDYtw8MN2zio6j5SrPg2dEZbpVgbXfNZLATu4",
  "key12": "5dgbfFnuGPtPLUZbL31WWrWJiA2XLWwsQEFyfMUdrtVbNe8FjCNErBhnNBkpBBwvS9AurCGPqJtgqfNfhbgUN1CB",
  "key13": "248Z9Wt28G9rfyc6SGy8QAktRirJpbBT5PV7b6fH8DViraYtGWQ5UFuj9A3kt6cN6SPwi6vK6G75CYUydWqJYbzB",
  "key14": "2YvGfq7NjFWNZfByk48bL17b7y5JBrRLiJLi7kyXfeDAGMTUs6r3YowLwENVvuzLaWKiovj8ZxZ8jsfB6FE6XDgq",
  "key15": "58aYFahRFiqdh4k2KTZ1WbY2sSKLXNXFhqu1EFdyKjzBBvQeJg2sh4TAenwMtV7XeRmBphQGh5PEwUQ2tPSXK9nJ",
  "key16": "4HH169WBnprnJ1HbxwfKRNozG9AnDxmEP3s2ia5pqSHjP4BCGsP8MJVq4YjSTbYJNButFo9d8z8tp5vE5Jf8GUvg",
  "key17": "4tc1RLcw6FqaqbNp2LYiJi415ciTF4BpdptqUVQo43DYUSqQAzg77EXq3T5hKSMBUHhWP5NYZvt9phtA8XSbPBne",
  "key18": "5gQY1qp5hjJN7A2r2EULCYbMkjtKcNMyTFiVgVNVUXGC7VFapg5jjSrT12wdP1HpKYpnhcHfPKAY4xerTWzPizxP",
  "key19": "fGcGv8pHL4W3aByGYQkcXRtwGsNc2UXd1AZchFr3egaxEtVYB1Sh9jykNur6gfjU6guRZsMGAB4imoaiDMAzXqf",
  "key20": "38XQtACoUjtQSFFcAWzXr6TjnRNVBB8MivBB4jiSCGxdDnfGeR2EkzrXNU3V7X2ww4s5PV5oHQNneTkvbWPt97Yn",
  "key21": "rmW6ozPh9J1xMEwdTyaWBXcNtC7AHLbvB6hfeWuGL2UdcBwTtZxj1nrqy5SGnKhrCbhduy8XnZ4yMroszSJ7zVP",
  "key22": "3ywbrEPe1tM5XTDjPv8Db21ne3793R86VCSETqUucKkZnMUUKv9BMUud2Bj2pgFDatZFhTPyBPY8Hu88tfP2gC25",
  "key23": "5vzUditpnjmCvjhApAvqgPXvW1Fh7q6Aj1cZ39UAX3MBMBxte3gm8gND5FyuKKkDVadskkuJdUSLtbT7RzBqbfdj",
  "key24": "3VTmTexoAimcMGAz4A8L16UKYpkhop2Hdrz7MZGvfntqrenKoindezcpc2oguvo7euKQtjsKzgbsiiZzB1R7HkeU",
  "key25": "2YAZRjpt8dDvVfk3BdtNQU8MjjY3N7t1cVXdteLmTd2bDZfaVnzVQQRYq8ov4W9yaWdU3f2T1UyrbogjHV4pUnLR",
  "key26": "TDd63ucpLY85Sy848hXxiwBcaoPYvcLcpdpGMrWsf8sh55PBfEnBxCmtCa9MGF3bTXbmTqpf1qtELTH4m3FSJmK",
  "key27": "2sZg13QpxZ6YQhCVSVsPqomQz4QnBMCzXXQGudJM58pLn3BxJAFo7XjyGKN5xXmzJCQFNr5PZ6m1M8SqMsmCoCnS",
  "key28": "21hxutia17KUNZyrF11dsupAjU59g31brARNtneEM6wjQWeT5Z379APQV3y6KgrHw9RPeAGxmV37fRuqsn88oDBn",
  "key29": "53pHmwjiXn7PZ4RTnRXPQm33QNaKrqErxbFAr9siafQaLmFx528knXLTe4PRQN4XM5vkYDu2NP9s2Az3nQhEgXgs",
  "key30": "4cjMMQXBw75hgKXJkKnWyv8zn9JR49BhwR8ogp6rdbmnnqafWrFnF6abpHg5Z1k95NShEPcnruuZLNr263f99eWr",
  "key31": "5t78e5wZ92c7FxRy26u9NPz36rLf1muQBH5RnZQYUF6YUuQqJQWkbkWboCzKkXEct3jqETXXV5dNoGpFiC6NQNhj",
  "key32": "iVMMR4H5uB2za7XvVx8H13p7ik42Bbih5GWdNo162pVa5izFkUjYALA6UaJ4hd6b86JT6BDLmVCZWER2oeBrw2v",
  "key33": "DUrJpMT9n3TyK4jarvCspgzVMzuJAUpohkx5UqnJv2uWJuzmyYN3BdY343WUTz11jAoVKDWK4H4yNMhcAXbXkJE"
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
