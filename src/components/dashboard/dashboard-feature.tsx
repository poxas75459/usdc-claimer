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
    "2GNFQQTutTi2mtyY9uLJM7jcN8XBv7iSe7Ywz3Bkp4Cs3WsmarC7DsSAReczyXbnSi11w98i4YxeabBqTCtnBxpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NVT666wRo4uZZPVhTXTtDetwC4WtRKrDbgr4mX9y3vWbPVoN4HtY7AU2RanzkAznzhgk9ACgM7advW6KnCww68B",
  "key1": "3aV6Nr6L85ZyQkgvDudrACDNgN7XGwdqiPmJn7hgm6kpWpZ7vhh6zKxgirjaqZNri1k2uYvx8TPFFBkwE15RhkmF",
  "key2": "4yqXa1Au3rE3ZQimC9isDBC5qvoiLzBrQQunnxhsRM6GUh913CTSn5tz4vfYS33NXEAMmpFYAo36jAdYDfV2LZwj",
  "key3": "5FvvUyTCf5ZuFZyzhZiwjbF6AuatrmEWDZLodsdPDFjfChVd5GECqKuZWmLDnevMH3N6JCK3jh47psZrHJQBwW1Z",
  "key4": "3XFy9mX3DZxuj9CVPDfPNT7tdiR7AveAUXG8aPpDYCUL3PuMeh35T7bvA7LUD6Lm6tAXgHmdSbsHUzWtT9ok7MeE",
  "key5": "LiiuK4uskgULywRSp8jBJYpLrD5niyZqukT4NfDSuVJbEKnVKoLmKwNFvKmo6nZtMEHsCPHK8xChUVu92fsuS4R",
  "key6": "shFGFh1UznyEb1taFXPkNrNammmzp2zgqBemDBw1Tyy6bhaMhepzg6ExEKSKysd1KPTyGGakMsZExTanYqvse8j",
  "key7": "5S79iVth9ozA8QRvodqZJPCAt3ozUGmTYesno88BH5sq5NtWhTMSaSfSwTtF8au1As7sMhmuL1Dphn755yitP9FA",
  "key8": "4NruAaJ6Ndv43ZE1iW7Ewckb7ZGxiCtnCb21Hb4tNmbTLdxapkcmShnVy9CusZaxzLiWZoDGMXUwrLTq6UjFXBR5",
  "key9": "TGTeHDbKj4bMq1ZokTdmMbcdkEKfoaGn5cyzRAUkbVMfyq8BRtSupQ48aNtHWYmb3BETSF5tEzhnwyxbnzc9fWK",
  "key10": "2WxoxmoYi58vwAQAeA4Ag88MYLEeHiC26xymfFivv1JmwjULDQo9tzxKnYd5FeFrHf16CSZsdkMyx4JzLn1T9kRF",
  "key11": "31TgBgeEg84cBHKAMxpfwNishdb3VMbyCVoMQuDSiyqjnFaiKcJmPg5DNJf7WoLrtMv8MAS8qSnW2ijKcNeppKSM",
  "key12": "Dv4C1VY232A3uVoSJzWV7EsJ9bv3PmEigpAf6bqdD886BLo94LAFoTHykW4cNrbr2zzs8AQLyCFkpGEjUn9vEid",
  "key13": "MPkZPVB411WJmeLX7raY5EsxeYZnhQc6cq4MQ9JqRha3SqwU46q9LsippKgezxAaV5bKE39zJL83469pXHvUtCE",
  "key14": "pxiDJBCQ66KHz74FCJSvq8WN4s2rodWMeK2Pd8X1J1ussuTDpT16jPpJoXVk5MnhciQ7xPFQNjMZrA1ovP5Nx6C",
  "key15": "218toN4vvEpE6ZTSUfvhfeK75UHvjEKVTJjVbvuNEZKANz6uw2gRTcxW6xTAnpPzJ5bFYY51Nt2E2syEWTDZzPV4",
  "key16": "3CnUwjMGKsTogJaJz44DPbFZeeQtrxNWJ62uaBTmHbVzGrg9ny5oygZbqbadHZzGns4WnY7ZTxFe8DKhkccfhtQa",
  "key17": "ucSD38SfQPjWVc9ytDSzMdy3YGz6zgtkW8nLNxsiGfZcbMUETYTJUw9pazsFCMCXVV9nV2bPkYSv4RvosVag9YG",
  "key18": "3WbYXUGnohnZSTSPRbWTxSAjhqQFA8yGz57UxzzBTQZ9nAmhNhpeo45UMzRwjzVVKtvshNszeci7reBcvG8gHvqg",
  "key19": "2o5zKtXw25VozkytzM4BtaASSrV9S3LFkKruUCY88VVj3ApWD2imMc8M3ERQiC1KKKhwBRnYGnZ5QgXcsPPmyvgM",
  "key20": "1u7CULYH1PoAi5PeZASuJVUWhMy3FBrYhNLh4iifsVK9ZYuKoNBJAP1fRFPEb7vAdT3XWkohCmRa5vzHA8U96MW",
  "key21": "vePv9r1WHfS1JZWLkoeHHy6BUcksKupmLGfpqUyCvFFPgYkPqmsWpMCPHEfvWQJpHvr8kKe55776pAMDLkFhhxQ",
  "key22": "4Bksr47kbcnQ3y2RyxFu9T9LG4tMXuUmTWbhVi9iDyfrbpwDqb6bQg89vobaw2aMXkVf1CTPrtC6qEDrSqoj7APN",
  "key23": "4GuUfRQ3b64s2ta39VApCgTZy4qezsoSZjRNXThoqfhRnRnhp5qiVRpL9v9F3aoXk4PFxFBD525zEnkaLzyrYcU6",
  "key24": "h39h2cgTQ7fsucjUGkSSySjKiBSWtfmrAwiM5XHBhJRpBffi7jyYMGM8jqswo6ozx3V3RPBe4cLYkbDwZMGj5cY",
  "key25": "2HNtn3iV5M3kKQ1vw4MRm2cSfroFRBE8ewpH3WymSgrpHY91gYGLUQt1tYidN6TBXc8qtj3E8Z15xy9eB2UeuqYa",
  "key26": "4pqnSkicatyNkC9q3Edh8hxLQ5thtbpjkJKgLqQXooc9hSFL478p6vAZxTw6aaZoauaDiA9uw2oarCTwVWuY2BjC",
  "key27": "VCFBHehKuWRVABDSH88gQcNEFJqtY2pm8fTvGAMT99p4kr6nNZrLKPC8D9qgC1uhuA9RNRFs2RUa1mecLFt6vPm",
  "key28": "4DrNcNHN9fcwotC2ggjoAafYSuvhd4SQp81185uSDhwNBw6LdkDPK33iaNK1bAQgRfn4yDYooHtwR14NFmfodKR8",
  "key29": "uUkiNsBy6fa51Q2JekThdLUkVtmNMdJ6ethN7GhhB3EEZz43EB3geqjibk2ntCLuAFAo7RgnZiLgBJwNCPLmYG9",
  "key30": "mxGtGke5h5iHcEeMe7VK3xzNDrdMHvuSUvC2PQjoCo7Fy3JyPLtWdHBjskuNC8dZmDKLJhCH9vG3FjvEqcYsUcN",
  "key31": "2EnWdJXwLQo96mSrBymvBkWTHSQ4N2LNkz6wG1JoYLTMpUqAg1TugSVVAAgSyp5PKaYXDAJ7bkY7gEAybZk7D84Z"
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
