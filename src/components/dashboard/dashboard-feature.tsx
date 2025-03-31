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
    "4PuFMFpdCj1ieBz4RG8hbSF6h5eMBmaoKAchXJMNiJvM97TRea7zbWcmXi19mSH4mWfzszaPW3KDL7EhzgmF6xyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nhRaC2PHgSALwEuG95jyEbHf4kKHfvi3A1G9vtvNi8z4v5VjXg7bppVkdYnGio5chQ2BRtRq8XKrpt1mjryA8Ey",
  "key1": "2WkqQF4HJc7D8emXwPWEMhB4e4TDbkWztDEeYY9YyyMt4oMe8pczmhjFDdJaTKLvPT1TM7D8KowY7mcVES7gKZkf",
  "key2": "2eXLxbkZc5FkYXaNP4QHjtW7gv6wsTYSMtT85jf582s9awQ5QY4QTGXq8YxMzhyRqqefESBgsxwdxjE1mCof98rt",
  "key3": "5FwSpyDtVNiJCS3LjSfqaZRYKBP3ATezYxMTrUVNE99SWfn6nvu1k5V8rTsCFUdrpUytvXhNoUBPRhr9VV8aAwPk",
  "key4": "jsUkgc6BTSBHtcbyDyC9bAbZBRtR8AJPuVBSHp3PtDN1ta2pADiF6RfJWEmqEv9LvQPtW8sRNQ1GvbRU5tJmT1L",
  "key5": "3EAzuQC3gaJQdNrpUfCFFy9hHtm1iJPu71KxU4uMhDVjoJ1SsUhKLGGrbvzmd48tATrdzoLbetqzRqSc2H5ZNaXY",
  "key6": "5jwZqiDkaj8R7a2j5oQN22YTBb8Arz4nDkZukRkVwv6v9b7UjmSi5U5Rm9dZQbeq6GbdaEzUJ5to1qyAVfcT5zTo",
  "key7": "3wAUUNThfw7Ra2jC2xTQ5H5QUbUyqWcEfGsu6gKdgJktF9BDY32UCDTf7K1Fr4UdjzAn7cPYt6Q5naa8U9raxHKt",
  "key8": "5zYFvb4Buq4HH95Z9pNp5713nPg6KyxFq8ZAjbJDLfgb6hf41WkSVrMWbGvdSP2mCAuyTRUCt3dyFGTwzHKziyk3",
  "key9": "XgNBPjPYEDm2VJ4AnqVtettUWm248Ro9xfV7gM36KHAzEAiB46p2vvJteL87ponxUnRgFbD4Pyc5VbSdhEYzQju",
  "key10": "FqbUEC1319cfFHeCmX7twYN3ZZ96sPGCJ62rbiGk4VTQ1aEo8wasgeCj7tcLD2aW6yYxSEkK5MWLFotd8xnUNpZ",
  "key11": "39JPt8Mi9hC1z1gqCRYgYEu2xK9NAt1KAqkwWqGU4Ernwxx2Vm8Q2ST3WVpXgreEdtkRFHRZFqscEYhqnHjn6VBu",
  "key12": "4spobxoTxnDRx82mnjZ2AxB53STghDcxmxn9xeaipiTWEqCcWiuR6ReEJZhv5tMhAFnrb7oxoGX4WNLVpgjVhrQG",
  "key13": "5tj4GeFHNskEbSsuzHeQgNnUgXoR1qGnixKwNAPuyuFoixKMVfjU8iuA2borz2CoiYP73bEBB9YUkfiNPaBPQLbX",
  "key14": "5pMXyZJfFTeSkRDMR5Dx722AuywBPVHKJWVCDpo7X5wdY3hqYyhUtfd4hPwEjesDjV4c38mwdVeN74yPEm63rWhW",
  "key15": "5dngKN65wePghxoi6fqTgtcXMTYKbzWkPFymR4ENnoKqJ9FourK8c6izPmxYVQV5Hq9qYkmSXPgxGpmpj2VevNhY",
  "key16": "5q6RLsr8hvPaSDwTDgjAeMmbeBFPcs46ipYLS4ymLcuptvox7HinAQvKdiGRaVYRxa6oCmG6xMsmxMBMfgCyT91a",
  "key17": "4EmpERJjoCuEBxzv3R7mxw7sdr8DoKDxfHPJmm28XokRFihipnAhy2Pbg7koZcYUm7v1XxSHCWL83oX9AmrJnUK9",
  "key18": "4jfZ7UJ7FfzrLW4JGCg2kELpjmydRraqwh3rNE6uU2y4ywmV9cwG12NEsKmvtfmBHd7DPTzBWA9bzFUTSZYw8vhy",
  "key19": "3bm59bTBDyHUUUM6mL51QJDEJoRMKu2iTR61WbhEZj3dniGWhfify2bb2Cf5TXy3r7Z441uzjuwYSkKjH3WKpHwU",
  "key20": "4TDnEyNLLYFBub5dEJn5at6XTGbm3iihFi4Gd8EiaGYcVVqzUMRuhHEdfZsvRFAWP9gPDuenb24D4368r4Ug7F7F",
  "key21": "2db1FbZCyYZiFqLQVDCvdQjkQc9APMmdApKM9VP5A18wLBvf493K8v6bZYoXESDL4tknv5uFUfLyondxEnnfx8i3",
  "key22": "4ASUvqVD2WHTfJ99QiPTgEXpsseNyy37rYUfpDs4WdmoFwyyzYbWmDw8mNQ4sziUpeDSiZPcsR7fPtAjyXxA3oFD",
  "key23": "2HwnWMp3bYn9aHXdTdB7ccYtHsX1h9dH86AaPGXwuq7YEjZeUZEMUdF6Eit74JYXQQaEFMSCAJf6ML2tQ8kEsXab",
  "key24": "3nbRVVmiSujTGw6jBVW6KunxRcP88vkWQGjnoEd6rxn7GneJbYByVMb5jszECU6mUaeBfFJL2aEJba2jJhLHRDGb",
  "key25": "2XT2pjmdok8jekvWM3QKkWoAGZvow9ANCDcYTJ6pXvhgec6WwNupf3xEjhDEkvSH2qceb1hS6kVGieuHnqfzieTi",
  "key26": "526e1KGBVJgWybBWYKk7ij5vcUtyb6ka5QKRdGfDqKsWf2EcmtAPhKfzVst83GS3jq2AbCoLKpcxiLBGxyup37rW",
  "key27": "26yFKSAQcZkHFAdCEkFjykfxyhaHUtwtGNCVVUBPZxHLaNUF1FzHq9ELcqNLAoufQdNpTYhjm7cCR3EMC4C8nZkL"
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
