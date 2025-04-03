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
    "5yQH4vdf6z6ckFLe5kxec17dVtoD56azTENxMc4CAjG2iFrYx4MDW5yYqfHwi4aWG9qqYkvmb1sjhYUvjHcs2MjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tTPvL4tC7jjpCJQATtzsU2LUyTPcnUUnJBmDErswiXzdZdnRRiZEdG1qbrxv3TzVKfxVqtiXnE4CP95QA1qXKaV",
  "key1": "489uT9DNf2spGDCEJsC2ggoB7Em7YZgRDkPma629AMzacNjE9cbz3HHzRiriqph9RJF6ZWq3YzGGQfkGHEdCci7q",
  "key2": "4gtsRtgTmdbPrjdLxvygH6GEgms9C15gZ8pQyKJaC6byZ6tYCvhyYKedjaybL9Mb82bSCH4wBPkiY3CcBC4Bs46Z",
  "key3": "5UJXv22pAkgfVhV8kcKo9dadKXAuNJCsALSfManRhm95yM3UYDYHf7RyFDAAkuBEzCcGzRvw271PSy2DECw1ToJq",
  "key4": "2KvrRsd58GP83RDr4CRVTDRDvmDvJC793AprjgUPKb8vy4jWgwbgiioRbL6JMES5FFHTPoLX7buk18am28wiZ558",
  "key5": "2e51degR3UjDwxhq2om7eEkbXmXwVsfTSgPwBHBfkF7mKTLXGcDuNp2v9GsAW1Skxfc4C59xiJNdbfyq9RuoKAyd",
  "key6": "4QaZ7tnfXzVkTJT4JrTn2RZT77V7KHVCuXjvFxRN7ofWhz7qkNxFvK3iPqMVjh4SAwLbLZ9TpHA3kx8ZTQ3TRM5X",
  "key7": "3RAqhGVoDTkdhY1rcfByQXMGpcasFgXmRpNY8Ye3zBee1dp3BAnAvyipsNSHKigkKNjfsdmFxDjK8LM2b64gC54K",
  "key8": "3WMyQGg9jTrLSY7GFo5STGrxbFiorrvpox1f6RGi35iXdtXjSZ9oweWJeGzDmUkRQBfRRByNKg3DBfm6jMMeRuZk",
  "key9": "41EjgHnbmDsp6n67XmbEvTkw9HuZhoi9MbxPre68PFMGL5c2jEVFAKQD2ZMkiSZtuAaFptCxpas5xyYdnAxHp4xQ",
  "key10": "4rWoQ59QsUwd4RmLJv6MUiHLXhibUx95CQjRW1C1wRrRbDx2tKWBJsB6rS4fURtXHRwkiDXgtPApExzgY979G8m6",
  "key11": "44Kp5Dew1oGDgXFkHzq6SLggt1e3vVjEmDKHCcUiaBsirirTa3Brw2NLR6enKFoGbHNkb55zW7G6goPEq2oQ7yNx",
  "key12": "2BxmFbvo5pY8FetEkyvAWEaqF2ry8mTDGGB1CPVvLSokHheNd3kyXJwuaM8Qn1zArdFJowJYaWsJUazmt7et59uG",
  "key13": "4PBv9ugE6WdeunwqvLfGM9avSruA8EJWbtid1d6gLiX4GvBexY8cFPvCQmhss2cJJsvPmwrncsyhEfsFE2gFeoQT",
  "key14": "sVEin4NBFiv2aN8gxmnbBU4tK5YQU8RvzJx29U9jZknuFJCzQUZYSagSYRxVp23YyLYZbEhCrHeRd6iPtNyGfNn",
  "key15": "3PJ6VUuXK7KiTRsyfGmL9DxzyaQk8ixnVY6RhNFLo8egFnf54UfTQDeLdFJHPHxc3FXyi5Ze3FLcT8xmhc8BWSuc",
  "key16": "4o3GWv75une2iYWRKbcSmHweBZG6xvJGXb6JNmZsXawmRms4ciXmZjoq55fQn1RkS64Fu1gNECHUSHSnRpmztjcC",
  "key17": "5RuDQJiXBP9zNHAsWPDe16THSeTyp5ss5RJwcbFNfCcxp2LpMCZc59dCbdqMmqdmrbrB22Gj52Q6UbU7aPXWJAbi",
  "key18": "4GQa4UTKyJ2KVY7MNaekGRCyQe92GExxXZPFSyVpWNnPAPbzAyQwSRBbNtJUCEobyBgKY2KUYmVMbBDt9Fuxqnnp",
  "key19": "E6SzDsSyHVE4ELnEUTFMSFtvgbsm14fw6cJdZJriWK6UiEb15uSq9W1Mrthxxtq6s6EmsZzGJYk5CicVwC8AfAY",
  "key20": "3ZYhrBPZmeLc4vAZ8TGUBjEa6sKHrqYPzXrFqmRPEEz6X7MTAHNwLq7kEZLh84Mx3s2QyWGUDtQQK8mYTRZrpLfW",
  "key21": "5q9AsK77Fz7MdHoLruWyS7Kmudh12gFzMUWeY3Ub7Wyd5weDHpYXAzHpEoJodDDorf9SEsPW765My3WFjrtzGCD",
  "key22": "4TXn2YYod9iU1xYGX5MxQR82BUBobz5wLtPSYmCFHqhaSs3rGVQv5nEU9UMvcwr4ZGTS8mUE32CQizLQ1c9TMCyT",
  "key23": "4gfk6a1xcZtLRALU1w7Lwte9WaoCjKjoCtrYRzFxZ8fpLgpgNBGHB5S4K8tQF27RU4jdkaTFMxomYZeFZyjEH5E9",
  "key24": "5pe4QXBg5pRg8g7EZotCHt2FaLbiPzpticQPCTkmkAmRbGaAhXPPH4u6GB52gnaq1jinbJwaXzJ7kRvSVZurzbXW",
  "key25": "31sDfmKqsKT1WV1pp9DNr44ftgmeYBSEqRA18WAK9V5ZkyVj4NKEM4own3RaqioJHZKefNyK4i8Bju6GSznoc6Lc",
  "key26": "xqma6rTFbJu2JnFe36kZoandECzSQCuT9LUkCNzi1X15kHxe9Logu14GAiZ4PMb75A9885z2vdHSMPhRZHkzXFd",
  "key27": "4KH9orVbaqj4xQS8TLRxVnbWZ62pPegWihFs8Whfj469GPapQhAvRxtNCy1fouWdnCwYotJYThwSJG2PvrNyMgUm",
  "key28": "2cnN7diiNAxEMD1Cvm4f1xeJ4vtyfx9WdejrAwSc7XF16wvnwi1Pv7gdtjBnEQpyFrP5hgLXtCoyAuEWP9ZKxsAm",
  "key29": "4zQ9j3GL6qRMAg1mcGjdoyPA4N4sh2ntxJkJfjcGV1f5Kh6bzPWP8hzZQntQvNKC46PFxfTK7wBCqxambFyfv74w",
  "key30": "2AihtcwmHvCpaMezqQdAhc3Dvg4JY29c7hS2xLwTKcCntVveA3NBjJzK1Hpbt9qjfeVB1hoLLMFr7MYeS15S8aUj",
  "key31": "4pmgChVTc4Th3zE8PmAeTmzcnfPfALDyymt1XPy2stbJ98WPbjtFZFGPtJmTv8hfzWFi5atCnBKijErGFoyqLNFb",
  "key32": "3VmicysEfiTSHpZ1xo2yXz3JGfa7WoKyKrqvLhyeVqRrqBy2Ej7cpbwwhgDVisRi6bbPKSN4hCAVdB7MsZsiiny8",
  "key33": "5Ras75pE5StoNyi8txWqyBY2SdvE1Z1YQ53Dk5TvvB4rVG8zNF8jYmwTyNBnZYVR8T2tTqEgz286gMaiwZTy3wso",
  "key34": "avPNnxviAHamk5X7Cvko3LiVcXBrLPsNrqd3zy7ftk7b9zgE1S2Z3f9QW836cKs3inqThkP6tzvnmot8ZxXHY3f",
  "key35": "xjLdzEVnWWJA7jYKSWLcUCi36AY9MMLte2fHT1cr9K2EuWepFzjBaFQ6UsfRwmkn1TSsrD9ND5yrsnYuNENCob2"
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
