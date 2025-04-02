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
    "5Njq3txkrB3mFNmyUrw98asGCeT2eNvStq3E71h81GUvnMWu3qosV2o9C2wDNrThE7ev2iovZTFc2dBgVzzBMfQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38T7ha7vGsW6fEbkpFMfa9PnmiHA7ZZpEqYwKT2LQSmr5WvK1wSGkHx7VFZ2WPKdvpLVfyh7nrDhXnexc4NrtDPD",
  "key1": "5L6T475XCBGFkd1FBhHrRC22MNjfRBGPYU5Ur4JnaJWjvMzKJ35Bc4W22hxowAe61upgDZbsBWU4mWqEVMyLNjH4",
  "key2": "5dD4Jz6USy92zyAx2KZF46pvzYiQUaKjLJaFBcre3cnE1ix8ScHtGn5ELCysib6Gn2vjB36czcCCezNYrDwnnk6t",
  "key3": "5pEKqXpo1m59AUhht1fH1Ab7GVMGuKwQipvdwQoizYYdQyM2wCvdmBUf49mX3NXmSDxH65UaFf8tKsmHSqTAGKCR",
  "key4": "RvSD4brkr2RWSFNwf1T9Z1n5Bb6rJ63fgU3cVV8md3ZNs9M7NdA6Y6kJqkmRZnwpvxeJUwG2pNR4Zd2FP1BrrRn",
  "key5": "26dxarpNm5f4EeryCGThSwQsM1hBsuRaMc8Tqvhg3va8N6WJLnvwTJ2RhYyUuQbhWpRydcfcwqjzJiXDEg5w1xjR",
  "key6": "3j1qrKJcimiodYiXutEz8thD3ALdntBkARF8dd8jejPWeSoDr6KqguqdUn3zR8nBcAbwwC9ge6EtkhbE6AmqRdv3",
  "key7": "3UwryMc7PttZepGxYNjAoBCaspHW3QMhFGCgjENcGitA1WF5yiYQLDQjHpbCqHohEGFg79Qfbi6gGHYBiv9iQk66",
  "key8": "5ezjFaurUgQfw62qQiqmnAts3HUE3rW4Fh8Kgdobuae88DVq2ZPLESVdzQhDrm7xCxyJtau1v8kzP38MPauWomg",
  "key9": "3xq413ZgY2aQMvXC57p5pxBP8pocHG6PTDpFa6TW6RhtFddboPj4DtrMY228wuYY6JW5wMAQfEyLYwpE96p4A8wo",
  "key10": "2TRum2RCYXHpqNyeyHDinBeot2BQP6UmDKoJBAvvTCEieJjhFcjRqrTBtMbmPWh3j2f8jjfRbd54VRPJdn8o4wif",
  "key11": "9G2kTbb1S8es5gUPDUSY8omVXThVXzikvAU7WBGk54xC3NfGRcvDw8pHu1vorLMpYwtNedSQSrqyxDSfUzJnbxF",
  "key12": "65xZZubJvkd8zGRMmZNBjSqi7a193oFuUNv28Wf5KmmoqCTwptA6VRLKKpVELBhv7Un9ER14AiRm9DSBs37TJSXb",
  "key13": "3MK3SjvYuvmwr2yHfJKz9cvA7y6NWZHupycg1SD5k5GWVjEYw5GwWhakfyJPxwgxWRKKbeZG13D1HwKmz7azD7RR",
  "key14": "21L4R87d2R4tTKuSejXNAgmvm5taWY7v5Appoyss1oi1Q88b7wZ2Fcdrc4xZjEBLWCLSz3QZvj9QTc1oisP2wzVa",
  "key15": "2TjhP26kVAiCHjs4WTwSNiSonE9h2JwYKTW4AeA24MabaumXA1YesPopToqZS4DX6MjgHCbUhc7X8iQqAnHaMVEY",
  "key16": "4vZBD1U4ejBZyHd8tjc4uxTuMjvDCTD5eotfJXJqVkFnHZf8VYAzTrrKJrJuopPae8vprrRpSeUueCxLgyBYq6sS",
  "key17": "3Rp1Wpd1nUuArW3ga2k42mHzQCf2YUZwQeZBySLe8Qd81ocDq3qsGDyBbN9Yraov1D2xih1uGiM9QqgW8fcu11Zm",
  "key18": "2uqfcwPZCE9xRptNCwA8inNx4F69jPozQUAX7dnXiNCgHs4YJhhHBvY3RafDxixM173UnMzd475eJVj3HVyTRTfr",
  "key19": "f1G2YqZv3dSfem7pnbXCgj8Cw6vtG4Lwxu8ardMmtg4Rt13BUv4cmpkB88z3SWDHeVQwV5rZzAZT8Qjp5SZgLXZ",
  "key20": "doeixjnfqqooiWoYuo71sQyjmdSsfMbwTQSLbHi5hQdhABNGuZCBh9WRNM5AHWebfFie5YhpMBfPGdLcwFrkvuD",
  "key21": "3dgxyQCD659FkZPZHmJmcoLSMtadLDxcgTDonLiANjuWD7RqHTvgcEQSMVLStYLFhyJjdCk7PevrJXJJKNJXeVeo",
  "key22": "41g9MBZFvXbbPfrC42MDTLotVNnE36YetNvEXwt8qY6CY3MAr3VuhhrHwBoJWkKbRM3TPYuXENSBLJ5pi8rBeJFQ",
  "key23": "4RZxGCAbJ5CDc9BagmZDLPJBTzc9nL78onEwFQmAFrhoXEpeZoNbNftjF9ijkZWmRha8ZR1kb6Sn2LtH8S9hp49x",
  "key24": "2gFfosWmKY7QWGvk46t4B3XWPJvKVwx1yPH49KNxKCECRDXo6orZZtnui9SNAySVeRoPjuYqnzbHzEFa7Ed3x5hj",
  "key25": "31wmWXPyiJhzAqBFSRjCkMYwo23zLUopKKgajFZhQX3r7Gy94k8Ck3gEH9ahAhX37hg4MLQgpThzWrxYupJYDYX6",
  "key26": "2XES3sm3b8qhHziAhbokDAktsVWdj45nCVt8maT6BRd9o5i6SPQK9LucFASTnomKmvmhV6WNLuK1ARxpNgjb4Te4",
  "key27": "3rawcrBBcp5TaaLmSdpoT7vVaNRHSpwhBfwxWNbRG3NKUZSjWuJu5zm8p1D1PqNMMfk3Xd7e2ekRoU8UoHbxrHyR",
  "key28": "4rhS4coM92dh2wjDUu8HjEtqf34nvSrXW5U8i2ada5sqfVaNJEwcKz69s9rbk3FuXqpfV5s9dWyJAHTD4Cds3PzK",
  "key29": "3jZ6KLRrbqCN2yTWUKE3sP9sTDHSEzVHz8CYJsEV6iY37M3z39Cri768tgqsyCtQkCMyq7yFLuiUZo85FfQQkG5L",
  "key30": "4fVYAQ8bWKsxiAfBcQZgV7DjrTS1fTdeAc5MLjxxVKuWAwbuzWa9eRYFiDz87PfpkL8wsCRvonZY2qUdLain4wF4",
  "key31": "48w22UACPJXyqgDhC6niQNEMdtei3X2yXcJrubAoEv66MviXLWLvgvXNoPdxEafgtonZrVy4nYEGAug5KF2w5itC",
  "key32": "5a48y8A6guUZEv6qoXjQMYL5jCEHUrYSwJJSznTSHeZtMeiLMbEpr4Ab7p6p8i571BHaizGfHjfUZgHRHWYBwVfU",
  "key33": "eHRkx4dQCQZiREwR3sHbhwRbudJZ9t2W4CZhYVAsg2ASTAo1GgqTrktyAscRuKkWLVTD5icP6YbQjW7Xz4j5vFe",
  "key34": "3NiGrTQ94f2eczxmz8ix81yqn2eFbsm9zqt8JFAdg1u689jbtP4Q6JGYxwKSfSb8WtCb21CeJWABssnezvka3zin",
  "key35": "23wdax6siaMi6osrv52qWY49zgHYWG6bBxPjmAyngizKVKcyUQWDN5CCmRgy9HayeXut2XgPyk5ugHsTcjxcPTGA",
  "key36": "5j4VhxdcuEfPeYLbGkTwNsDihJyiGCkQwSUJrhhDonYay5xrbE4NaKYo77SnyTrhdoizoUD5qZFcYhnBiCQpUbi3",
  "key37": "5dW2ebSdF1FZsxtvQ4grgCfyEcrRsPPRSTFtX7DpgxjjnJWsxx3huBCcPSwpg5GsrWbU9mbm3492nbGFmYfBCMXB",
  "key38": "2npUZtvPSDdUdFuhJgeCtBppUpum5sGuEiqZBEaKqjz2a5KCVrAtjWvNg4aDUhEX43cfGD4YVqPMSWadj3G825KW",
  "key39": "81XNUpSHD45T9PChYHFanUqyAqii78G746nuS969r66vritA51GyfYY8F5YS6Qf6oU7pNRq1eyERWG96BmfXpy1",
  "key40": "5r3mDFjxroVWqrugMz6JuQvYV6WPTveYee1XScnNA528GXRiV3bALup6QYg6DLDbNXRGbfXebaPNoEegUaMEpbxS",
  "key41": "36yRnzAP6uVRs6JRzqJtAkNGReXThpLBQHjcjNAKXRxDrVBN71Q7NQct7LpBwp9ZSLZdqEYtWGGpx516LUdAiULp",
  "key42": "667KWGx3cXneCvxjERvzJ2vuL8b5hg25dfHwUPc13n8o8Q9LWfUaHC1fbMvs5wbYdnZ5RLnTMLnGS9e473hhH6pQ",
  "key43": "2kKJCHfwe5Xp5BbTSxts5WGzRUviwMgZj3emSMGQ8mKsAqtpmbmAjr6Qypipwqmd3iXtV54AsvSrWGUQz2ieEDmo",
  "key44": "UV9XPYT78ncPj7Lbvd8Xxk1u67cyQ6uQVEB2fwNQxrU7G37kgKuKny1hEoYqnkG7NAfULGJ6A5J7BhkiQK8o3cK",
  "key45": "5RXd9LuLgPV3bhwNzPRg1omdWYWMZ28TykWU1tux3asJYe5cv7Qmo8Wk4T9ffHygrTGSz7Uo9FZYJGaS3VnnL82N",
  "key46": "44wLK8BnuWhTZBPY5Mw9MkT6Rc21gZg4hmhpiELHKhNya9dgaN8JQZp9AzwAxv53TbC9w9DkWrYES394mBPyKT2k"
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
