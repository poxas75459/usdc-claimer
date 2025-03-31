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
    "2v6tzRKCt2jKLq4R4JkaGcsJQuv53J5yFgbaCqXuuVMV8oLwgeYgGjSJKYEur8Wvk5VaXy6Tb3WeLDK24mz5qpqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vo5x3pg9VtgNsszZ3jpp8UugwQDzkH5uujeiFNjKGwdZqeskd85Fk3Cq88ERi8SSHCdeWqdPYiAhpzhbxgB9otu",
  "key1": "2URGdkhUVtNSb6UKvRe2CMWZktbcLnCDSfd31BiDsSqTTW6CWNP4VoanvmSeydYhP7hsR7VUF9v5peceFaCSULgr",
  "key2": "4RgZHEoNuSs67KR3K6zAG1UbXCrpi8xrUjouK9KnwZwQuELN89G4QZAsLacRh8jaNmZG92SbZewzte4KBk1GXzNj",
  "key3": "4zE5ezwrS23gQWpoH28xQxByCSyZ9m8LGk7kSZoPfDJKxXrsAN9GefioBfVn8k94FUykaSzVhdEsccjmHaW3K6E",
  "key4": "2nCGR57V4MLR57rgJK4gCpe8xWMwAMRgJRzg8i6EWd87m5s1w553BoUTR82yNMQ92hY3JYnfaLu4BTyfU2KYuuJi",
  "key5": "3pqJqkXA2rFvVTx7K5PT6VERypkHDfRVjracpsxsD2YPsHx2cNrnPHFj5eofC6Pux1sRoVN4usT4rZQPoHTB8fZn",
  "key6": "4x6kFQc5z1JaZJxCLC5YP96RyjmCX2affk5iev4PfKELYoaCjNwt1Sb2DwpynisQVEgbqkYFCYERoZoxm3fTiyHx",
  "key7": "2Lw5CKKNEef3qsEhZ1z3k9uazk7DQfpUUFeYZyvm81smcxGtrUVoosqXB2tA2XLuL7QeSdU4gM1XPwJv9kNjuN54",
  "key8": "4BN6wcZ5G96ngLB1LKFRBcuzJ3sNzuNzzhJ8XYi9rsJFktefgG3agmw521dWmhf63pYLqu6iX8s6VjuCyvK8jvKy",
  "key9": "5cx71VvCXFPSuX3znNUYqfVUucznUaWkVf1VernQbSgmxXxeL1951Zgi5m1T7Nx1pcJ9t35DRacqXKJcuL3mGjUx",
  "key10": "2igifoHbzYzyiyjyfzrXYSBBSK7Ee54vV2E4hKQj4CGmHGzoQ8gVm7otxHiU5e4o9piJaBWuuR9WAV18PrJxW44Y",
  "key11": "3HbTSvFFSNX69AwRBfUpk2ybnHhrNSVggqz1wnuL1GkFkqUgNKvErrkdccoCF9s2AtuDkF53VexweJ4o6RErqP1m",
  "key12": "4w6MZjJHd8dgYmKtfrmxZ6SvT8Pz7wEn1jw72wwVMFdNCgUorUwwBBCf84gZzfFgDsHWm6Y763Qx4AcRHuCjjxMm",
  "key13": "3TxDPN8GkLeJmGH5rDcHF8zFdUTUBm6pqhTmB9q5Pd5JpmtreeRFbr7XQRNKM62cqzwWC6BSyeGbb77YApSCHD3h",
  "key14": "329r1zNNMtsJEyVfMsFN5dFJNdrVZ8G89xTyh7Nr25CqQocAQUzFxJh6A2t9fr4aAoFzWarTjnLo3rbms5u1Eu1C",
  "key15": "aQBvjMDk84yJzus6K5LECn4AM2BoFiPnSXN21zWa5JcgaLxShazazeyhw7xBfLoyaXFfKzAFAau4SfrfAx3CY3q",
  "key16": "DdB8JTjR9X9A3cjfSrQfFy3GMzhK2YZD7oPNYV74y9fBd5wg3fjYvMXkPvoE5kteUVn7cYvZU9LsytgcUnnSofQ",
  "key17": "4141uenomurJGb2xy8xSAb9j85XnMkWcvw5RWb1JbV3LqGkyeu5cw2c37zh6m8kw1UB6dLGsdpLTDvWqZ9ecDJ7U",
  "key18": "3Po9BSe81tvYzsyZrhpfCCtxCKrPfhtCgLyoBEE899U3yoCUGD1ppQkGgp5H4exCmm8jqVwFcg3i4B3GKnQvZqMB",
  "key19": "5wopEKNEGYLfgyeaiFGihrTSKLSroxot7qAuJ7ZPDRccUFBpYAEzUCQxCTjPB2Ant2TNkBAfLBT1uUGuaASVCT2",
  "key20": "5uYpBksrB1WoRHyuK2uNddwDq5yDogHtJt81gBeVe9BLnmFpqQaaAqGVTaAhwhwczbi4xrNA6yjenMqe5mSThavY",
  "key21": "J6HyiPW6pAcww4CwSxnBerAu8QhWpS9Mxo3P9RieYd6HCHbgTDiEZXbMc1Me3R1QwAh6rbbarrFpncDVAQfZLqJ",
  "key22": "5C4Cvt3UYWAGeWQtNZQwXJ3JAeHagNMvE5D5hqhwoE6CAY7JzZC7JTWcXypwMxZ8XPqdrj6MURQEQ985exRAFGz",
  "key23": "3CQh53zX57ivNBgDZsg8mC6ZTKsMFdS2znMsZR6GbWrSGRksyWSqtrykCJXJWTEnAf38hS98AJyDjP19mTj1Dcaa",
  "key24": "2CUAm35brsGZd8B9P1HXVFVsrpuw2x2KXxnfNjrZNdy63XAoA7gGHdMnfGSbmJ68rZMHsjrmTuJVpvHrJ3G9FG55",
  "key25": "52zBvhgebZPbTphTBzHE3E5RiyX8g9wruBaHGdUtzBAgcJuCXGuiNb8WPsAx4KjJqEY31CvhYa2ti8nGvmDvGLhH",
  "key26": "dWoPKAgy8jJPL66P8teccfrKFVH5RfAZ1Poa4LFRE4p1ZZQ17J3qgxn6p9WBJk3nYwXKUtiwJkW1pL2tkcGMMZf",
  "key27": "27765o5syqoKP9VPPQxkjBocMrUUnBYdih9wVMz9UoS5oEm84toBdWqEowydRFJXJsY654qFA1v532BY3TjaEgjM",
  "key28": "3yguSxpdrfu1Nt6otJGwUjQPgqnoMbiQb1u4S3VAeLjLsjE1i2vHRM7bT9R5ZWfUomrra7yDhctrYRrU43ZBovow",
  "key29": "2cRqhSdiLtvdjwfaXCtMka746TRF4CPuFqDbaRHcmyXQP1ByVgewiN7k5ezVn7UFQRcGPbMotadPP6JjnNPdVa5w",
  "key30": "3m3aihRVjiSr6BXJhCfX2j9JVDsC1QEGzDbrRK5TbcV6AtWV7K2F7notogCe1VbtPLbbE87M9Jjhff71P61kj7he",
  "key31": "2bwR8ijaEVgiJ2jqPW2eDyEve1nEK9pNkq54sRn1q3z89d9KvfTbdne7DMHu1bkJ4oSWcMtcftJp88D35maHsZiW",
  "key32": "3Q1GAqutTpqyRYUuqUApPghdVW6sRZvjU4vs1hRrugob8YiK3QdGMEPWS9a3QDMCdpniEubYxm8Mv49o95XcDyoo",
  "key33": "5AsGuaJZHPY76RS3dS7UZfLnGiiNjvTNLSpikb3iqBc7yQLFh9zRW6X5jro14QQ3rRBmDBy9J4ao7nYi3Hx8C7RC",
  "key34": "2AEtoHEv22Nr6o3fhAds5dqZXnxEx9n86uFk9RShtwTtWgNiCAmQfk5YjxsoGzoSiQoHPamBDSkTDgeNwznUZhVZ",
  "key35": "3DdRd1C4Zya8Cp7oTF3G2ZjhuQisdCPaxv5kFWUZFWzSH71Rx8MX8SCATresuprf1Dq3tehx3Yq4VLpetZYC4f4h",
  "key36": "XeyuJKK2Ybw4uwKnNtSwPfBt4KxHfJHzFuiKQDnKkWHD4ERiNoz1adYLW12M4ygnkGoNHn4DeuzAFFCuvrCE8V6",
  "key37": "5XCvqnTLiNhY7EtpRKQ6jxn2kfg6N3V1r3HLXkSQomedxKMhMYoJeXZZnBnTUBKggJucfbdXSzRGaqFdFF9u2xMy",
  "key38": "1RpMmh13UWwoKuNTWER6ixDYQvmcRdXC9bPRDAiWUCttPXtz2pp2x2o1uh5PdGeaQRzExbhKv5hv9sgYq6Xek8C",
  "key39": "5MvaCgjZDJ5XW7yWkZLkmwWfH4Hk72MLRp2wTDTLS5uAsuGLMTFZK4EZcb88ydX5iwFD41okntYmPt1vFn8CvL8m",
  "key40": "2YgsxbgBRcQFxGyxTu8frZHwGtK9Hm3Pz47EMYAWExuKNshMT9jmTFu275G1kvv9CAewchsJEKfLLWjCVeFcCP5",
  "key41": "4GSgMQNb8JziEqYwMKfT7z1Kh6yP4YKnL1HvRKwyqFV3wovum8UfbZrgud4sMRW57MKa4yxDmdx2bA4A3AfK9qXv"
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
