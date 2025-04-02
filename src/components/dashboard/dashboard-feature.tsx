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
    "63Utr6jR38UNgCZ6aeGwhCg47sEhQ6Ta57DyiYoR17nePNdkYnhSGMW7jmA9qidpd3dVQ63WK36Te4URVmUDNWU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TRpksBtjyU4Eev9fHVGjkuQ6fdyJGGyTxk1GZqZnXGZKJgLijdo8Dw7BChoVoAMjM7mTVUJ4bga4y49vLJ8ZzJ5",
  "key1": "5ss2GLFVKGdVgphNyWofUhXfCmQnrWE1u97p6to4fzWcFFE8jbim1KexQdmDzir8EV2Y5ny81cLiZHCyv6ShuV59",
  "key2": "xPAHZoAwrJ8dVkWCVukrH8aQr1rRywqMJus5ns9wAASiTsj1DcGCt6AHGxRfrBkHeJPYyKu75Qo1ecJNM6ZjHDu",
  "key3": "54sXyXK9jSv7g2wzprDec29WRsdWVmZw1m8cvQMZDLq5tjfvMNqaFsuk5BvYrzZkFD6c9rwLq8xCmBBufspoN64x",
  "key4": "3SNu8okgNYhVNYYYxLxUTQNkKw7mp3faEijYGCyHqP3cQQetGUnsJxFwNmxZETqWi1KVeR8R5MRc3JyW2mUnUz8R",
  "key5": "4AkY7EA3nUs3jBT3ZcMayHJ4mnFxYvqRTZceE5c8rtaPfGHLPCjkP7L5BkiPDV7jooZd48aoD8pF51wriq1aSxyQ",
  "key6": "5UBqbeqSkgjTm7nVktmkgwPCskDimgtngfbajbNSTVNf4RbzmpeQu4N42U9VTZLtqoXxLZtRhLE4hnEzo2GKwxxo",
  "key7": "4wq7YAZHMAqDMMZ4JffVK18eg6FVu5Cefzn7oxrVRtptG3JwXy4M1YxWjCZzThjBEDVbZ4A6FzT31nH9oLX1r7ac",
  "key8": "2vJFa5v5CPCTLxjTX1pLTmY1gYsmKmhe7t5pamYmhfEnTKddhYHinjeUGT41pWYZCPa76gkMVjuw4pUj2daCDB1Z",
  "key9": "3pGUpY4BXJXDwep8aWY5X2t2v68oNvETrXtfAhLQGCen7dqFXkUKJmU3Heg1C4m7h9jA7SwX4XTFrPxaKFjTYbRx",
  "key10": "34nqtyWy1pUvurwHN45eW7GM8QD65dsMuzNte9F8W2qSjCrsEC4YyPyBmKTsBa7xQYCToS2hrH6nVrjrdwSshxc5",
  "key11": "3jnVPj9DntfDesJaS5AMiy9GixqVrasJpbdWzjoWUNXY3TWt2yYFjpemMVPefAAKvbyqqwHgf7LBZfUgAMo4AEmw",
  "key12": "AxjTEiujKZwZRh7QrnNMn1JRW8LAfjpfwFYtoJyvF8fKmtXhLu69D2Uyez7K25hZB3zZi3cjnUpLANN9utfWNVC",
  "key13": "W9WvMNFGxgH2g32wpFNxwtiL1Te6AHrcEH5Mrr5wv2wf1CZG8EmHCBwpXJ82eQ1H8k9jXpXWsJRRiY25JntHDSE",
  "key14": "2Efq6inJLsBkbqeUGgxuWdBGM4jvDpFfcUDSyEexSNz6kQ1kz6PMXX9umSmyZuzDmAWPKUqESv7EerDykP2orLVf",
  "key15": "jWJnkSvTRWJQkVujryjr7yLvqQQzKgMfSoYarrn67ZpwbWBAum448TGgFsWecfa9HwfpcNaRG2QeiSshHEZqhTG",
  "key16": "3JjtTem3X3z871gTTLZLdPoDA7zTLZ3H5HtAxqL69YXZHhuBjFFHkgrfB3jiRkC91BoMHYs4vaTRKVMg1dGUPVyD",
  "key17": "5LFmcNJrt8R2Do3Qm3jW1kmwyWsHPodbHtnykvdNhyDqx1znkN65T6WJJmNhRQWsvjQmitG3MfemmsvT3ZuN9iuM",
  "key18": "zgwMGEiwy8MPkPoJDDE4iRtKJhYSuKA74CQKemg86YZnpsrGWUAePgZgRJfZBoj8WkaNXpYCmQz5GjoSuRi1gQu",
  "key19": "5aXQTJUReTTCQHtyauoP371hBmvwCMijJvBJys4TJ3JopeabLWiPArVzTKKp5SneMLCvtVcFqbEEm4LnC29wfQS6",
  "key20": "ME8wp3uiKxS6xtqW5QDooCjUD4pWLcXHaXP2fXHCBswseMbcBoa3Cr3iAFJJ7htgsik1nZRZD3jQgqQnAsbHsT5",
  "key21": "5wZfZ6BmLDTRpqUGFZ6a7g7hdJtrKn8yZ7ktTZNobAUPviwv1rkxFAzc4jQ2kZNvxwuPePk7MDHwFPkMfJTXpE2w",
  "key22": "2wPeBdcUWM9cdZHo7ZbdJS8R7KGwvgX6rfKi3rPPMdb7dkkeYgU7hKNXRBCehSnS1vZRfkHoTNFoBd5e7WtFTAdv",
  "key23": "5G2Bycac1CqRDHaRyht8YVExvF6po5DJAjXtiaxuN4YqBd16jS9Ws16szHV23TE7XX9isEwsZaj47VmWwfHx9hbF",
  "key24": "5PPxzvbnH45Dp6sjK1KV9izTicwhs2FQujFpS3GCVGSqndpAJmNEozeptp3vSqywgt1sPacPZLEtXMD4rF12YKTy",
  "key25": "5Sjxc69Pneq45zmgHkTuyEHrdkCs3mdpuppk9zgWLCnDeFz7UoamSS5UwgUJ6SfRcsbyvRFtbjbC5nM2mnVTM4Rw",
  "key26": "5uDUPopfvYwMAPR1LFVWY1rwgz1GuRKeVFJBpZKQcsYBCrxkabb2tw6QDApSvQTL7Lavra6T8aWU3PAAQ4irsMr1",
  "key27": "2j2vfUATQnX5YDzyY4JTZ3DMQBRzpJBeFufNGYvXBB8a2GisJktcchB7Va7bQMmAwXhWPUfo489XJqGqe9HuLb9N",
  "key28": "RJmvEQwPYB7wRipYwgXHPvitqCWpQAnLXSs7YsM4hVbGxr5tXbbv767nCHbYTQK7Q3iGifWHSfiohNAjgzCshoB",
  "key29": "2iutbYNxNkMpMSQYAgeKqavXD87oYDy7tJfP1KxyEcJW9H4muWvUVuXBB9Mv5SGtdi9nKUgw5UaztWhufwivdKWZ"
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
