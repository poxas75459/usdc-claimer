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
    "5fjMaVBGgfo1rWUNs3oFNdD4foHHPuPYJoJyUNKm4BP5ZxPfp1DibE1ekbjQxNYcbfsg8HNQmLEx9bf6GfYZShwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHYfbE5pJ23Mu7ANdN7jDuvn3KhfyXwtsXVatUV6Y9hrvberW1taEWuYbgKczvRfyEqXDHenxWb13e1KqeCUS1Q",
  "key1": "3fu6Sv87MKd9drBWY8QXDYYbNGo7uNrHMH76cBQoxBXLxjtpe6CxMWVXvmfFyzzLRQaLgM3zWkiXK9664fCXJd5a",
  "key2": "EafeFjNcoMsSqY5v84rUazLEwb7mSdxpFZRKhDR7bJyjFVbuAEVDvxsSHqe9iauXdyJBgvGUUC6U1DKcna4EV3g",
  "key3": "5afE4JKdKsNCYjE1HkoCs7QxriwffqFRRnbqLXVR7dLGcwfq1geeGhptFwKACQtbqUaekZSUTEyMSLJcRfqbRuMA",
  "key4": "3Zn3K3CSrndDrmACZr6EzdGnqvBESKXKdeLi7JM36PNpceM1ir34nJcLwnRT6CtX8u6wR6oMLcgzcXFojSmDBPUN",
  "key5": "3mXngC3eq1gtqKzdiMbeATajNyoXRuLEGFxsTCHMM8f66DvBhuWqChSvCqHaWeG75MSpNGdcLpiWozuE8GygRLXi",
  "key6": "347vYCijDDZUDmz3B1rFoAMHnKmmGTCQvCEumQAepTzwZ4DftPyD5zoDxXaui3bVEPShpgc1jVjWFpqB2Atu8FsK",
  "key7": "3z2AMhihXWQeNCUi4U1cbuhB2Lyww6n43gGo57GnjkdxXzFXRDnPn8G7rFnytbF8fxJNU7NNdkNyu2mkkZ9smZY1",
  "key8": "4rjDq3uccjYGhffDfrrcj4wr21ETWdqK2gfJQKd9X3bQpWoZT625DfzeQkFERuXNLaUUn4vXcEAKNTdHoSe3QfwW",
  "key9": "23uzrrsM3EHHd5HZepb4Se7rMftguoy4KUd1dFBXxQhm2kit8sLDP9m8gMv2omBQfynrvM2qjnCwjqQh6ocBaLNG",
  "key10": "3wwkXGFJaGLj9NYNysWPAzp9eQxXC67VUyTCHhay29bZw6RDvjffwrB9ooWLhGdztnAYf2NpFg6cXFvTVVSQzPMi",
  "key11": "3AtLX8KAm617LoasX52VwPJtKMFdpM665PXhvhPhPZu9jVoGSmcTmCTfyCE8HNQk9wCZfRcEVFqYTv4owbaKPEeT",
  "key12": "5cnVdBXqaUgWjBgJzQH2cgb85SDJMta5qJ4UKK9JjeSMtdYwrVET59mNWQctzrNpFeXEezQwSobKs1UdjByUh6MJ",
  "key13": "2sLReBrnNTKv5JJ5GqHJJpzhSsQN71MkujWVLpdmMpU4xbAf8F3hS75NUXNHL42K8uBPghMt4o6Ltj3FsQgbHz8b",
  "key14": "4gN9MmngWMcqgYtuTxxbTY3nReLKEnzazjeD7EeHHL5hBDAVfviRuxaXpWw2jALtrxSgoJBBwv2XzypeKRyu5AsQ",
  "key15": "2k7RzW7qYQ6ukU8Rpfd1XpzcWiqQPmZbvtfdCpY5UedC87JYGZtfjCuFnhpwJpdAmGH3W4GFzCFTFCRjbW3ueKJe",
  "key16": "2vEKNGfu8e9y466pHXju2J8rctQ9yaKTJsZHde4wFEig9AkQdpoWZqEyVD1eSR7Tm7m2MPp1b9qZaektMmKSPzop",
  "key17": "2BSFbRQgXxQNiXQt7TxiH4uDgP7HNXeaZ9QVwC4yVAmUV9xkH4f9t51BriPrdFGcU83wnE9dSkeGHCAwFEpEc1MN",
  "key18": "gVuzBeMvr9e5EVRS2191YcsZD4AYhmm99zXTkfWCf2AAtDPzdA9AKjTXDS1SDFJPfDNzEtB3hWuHrVCUf2ywSHA",
  "key19": "2fq5rYVZggEsEaCRSbiFZGgcmDfZf18AsLiMJjHRFnWWqTh9nHmDoSjb4j1DYrrMdkgWPiEx7WSrYeeoXK5kD4i7",
  "key20": "4kCFQds7jPTEFMdGay1yey3kqpKGBjdPkyygtFEUviJF2c2iKwCdxLJMUfEwJL6jj2MFfb9q7hL7hnf3WDnZ1QzL",
  "key21": "5Mk5KqCTgU3tn3NPY94rosAoMBuAjcJRERWxSFz7AEmUMTtHuhajfjsaVcACZbZ5LfkudXr9mvhjUA79GTgJycW2",
  "key22": "4mTaNqEQc1auGssqbfojckjJdDYGrDyp75u8mAPmvDimDSMNPtcyrivctoMcqJygQbYP5mmHaYQxU8Er3wT7Y1SS",
  "key23": "YQfsZZNNiAreVJGm8AcENy4rsDQkiANgX5BcUaSMmnDi3BUT9EHyxDjK2fd3VwYFWM6kib1cm8WvbmyxcXrYz6n",
  "key24": "5KvkVEe1C8ykCRW2fCwKpEaqpFxcNDqGjnNHmkEhWuwr6JP2UQSRhnCLuWF5RmpD9as4ehDQXCkZYuujJ9AqCsQd",
  "key25": "513JnCa7nsvAve8KkrhbcfnE8mhQKxoG4CcHevMci8Co94qpMjQVFP1FhPKKX1D8BJuhyMQQUB8MerDRmAFW9NGz",
  "key26": "3U2AKUcfHfxgFxzDL7aB7dKFUV9ftMEy2jTM6hhq14j9G4kDrkLBNwLWLizsSVM28T8AMpaTDcrte6piWscj9VbB",
  "key27": "5PwFHngrDdpCEgZEmo7c9ZtRKETkpDtmBuxJNHr7c3MC4hA8SRgje3TAwN4fLXG2rfGDR1qJuzgqQ3dbGdbx47mz",
  "key28": "3mkAqVMCs5m2EaPkxJeyUiwsBGRmzHLR7rTbSCZfUAYvmf39Pz1EbbdAaZqDTQHSsTFx3vUdjZrMUVQuGknE7qQg",
  "key29": "2MsG2U6Zc4oPYSBirmLcHthorMfw3fsdsp8D5o9Xd8BkbeB6TEXyvAt74qjMJCQUWeX4yua7NaugMrYsbX7aqdf4",
  "key30": "5EPatPWnHChQ457chxsTMeS6Uja2k8j6pGExQiRQL5UzmxZ4K7DdNe2Kcx4vV1g2DUqz6wqi5gnrBGNMNoZeMQHt",
  "key31": "47Tqoaj2A8Jz3cqhmh8QZSSR8oPZqVMZ8Xp5jo3W3Z2362cNksFVjsXw2sMe2KpLXySiXGT4cyTwiXfTj4Uv86mo"
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
