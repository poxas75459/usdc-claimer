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
    "24sXGF1kUKS74Ttt3KqymPSUpCs7uvmxG9V7UpaLCSH7nqMG8acc5p487GaHZfZDLKv443K5Urrqz3X96sZfbXuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wzwUC2pMrr75mDhkdQDaSLg2a5zV5EgR4gvuGyYtcYCY5M7sU7FvXxwQpbrfzVLhSSdCN6dwFCKAY4zhf1dMQg",
  "key1": "2x7P7HPxcndgmeyVik7BYust1apW61bdtTVpTtCpnsLpHrByQ2gVVKQyLX6g8arGg5CdAFcppnwAYFTTkvyRuXjq",
  "key2": "49sTgiqah8CH2MNmessQi1BBCPpyfnPvay55ME6ZCw2NPa1e3gxAVc354ym8mMUPUarTu8bP2tKKh3WNwY91iSyn",
  "key3": "2DqPEBfgWqwDkLyeFQfU722b8nDBZR1MTghCy7GgUuXwBRoazdc49VJP4nRv2wGTt17KTNyLmm2WLXqWiaKLEn1K",
  "key4": "21rUCC4WRbd3jMQ5y8wwyndiGsrdAAxe74BmuY18vWeqCRftX116j8K169ktsbpPgoT7GbxXfpvLe55RM92mhegj",
  "key5": "3RdnajdefU71aAoeRJRnA3yP6Wj12PuMXmzDgnNZbrdY1pNcnrZmq5TNcsfHdGX44pfaj2G1msJj3fCgFnwMiUFD",
  "key6": "4vikAbtnzEGRsV7T5sZdz4wtN5GjjDWFcSt9Cyb2AKDmH2grPuYcKkfP229jbHugKqTaFkZffwt5tjysfshKjv1x",
  "key7": "najoNSSsFJZijEQgpVSUM5ZLFsajEU24q72RghoEEx6xTPegrwseiHJpie6qDPabRfmeG9f1eFRc1iyujPDqfrP",
  "key8": "5EZhVAGshAYick92V26w6oxfALD3ULzrB7H1pQ3w5E1uhBCsLPmCDuYwqnaR31ry2HCD97m7WHEc8uScVAK26Qk6",
  "key9": "3TV1zrPEReSFr3tK7axsHRx7vT8THD7bqTg1PvCyXjmTbjU6H5RZLxY3GqYLnHGPPrJQfq7HTprrU67YzscE11qC",
  "key10": "ce8WzBDAvStyfEPvrQSdTiGYX8tavwuqYiMGvz2ipAWfsyVaMMjFoke6F713NuPgWyfugekzAfXEgSCkWrtbWxP",
  "key11": "j5LQC2QVxwk666Whw6E31XTCGq88Rk2j6cp8riq6fijANuVAXhGEf7PabJwSZoFfV3mUdUYhDSXeUUYoQ5iG2Md",
  "key12": "5g6oqixr6XU1SuVzCuTBkywsFU1hDafepWX5t5qxKVMpnTsH7TXDpWgc7w9SNoLL8gMShYFSZvQA55FA5bFjMPz",
  "key13": "4YnrmJBoGfDtT84xrnf9wBe4y9YKamKxBpPdqs3NxUfY22rKo7VqdiJSim2JfSSiSMsCtKrq5ASJVjbq8r5T8MFg",
  "key14": "5EBVJQaH155PpXPRY1UKehRkbLWB9jLSW63GwfiWSoa3f968By6xnJ1TtjHyKPBRLB9qjkLTrc5B561RXt6tsJK5",
  "key15": "cnE5j88rcseUiuo5PtDe6kWLut7Uo8KAHKQEPxKSe3dxa2x85MUdFbt9U5Cjf5KMuFkxLVd4dproZwMfRuYkd9o",
  "key16": "4BNQHu1KbipRo2gkrZN5K3nMvD4SmzVxgzZ5HJiXKSxVCUcJDcvwKUzhhZQryjjWdy1Jn7QyhfmPryzzi94ewTZK",
  "key17": "2MiZdAeJrKApfgHjxjukuGtpRk5cbxCS4DQBn5fRXok7Jzx7UkAYFniBUMKPRTcJjnnhVeZhq5fhqZqzp1UmsU9K",
  "key18": "4JAs9nQwtbrgxQLb1HbcKwwga7ABLxbnYTRNJRmL723sJ4ctds9Appq3jphooBD9WV52kcucE4mMEiDqH7muK3Zo",
  "key19": "5mm9B3JGoXg9VAjiY9LKkRwZgaHcnQAqKyHo16U9ryC74MTp7diPZt9M8s4g1UZLqoGXoeC5J1Dhq8kjDajhSJWc",
  "key20": "3589EHTmUM9hEq6tCpJdTxqDVyzcafhJmxhdRHczS7gxeBFmdvKbSK5CxMscC9GDpP1UXD4BoTapFcophoQTZRa1",
  "key21": "29oSqiamBY3rqrCUSyHab5BF3ANkQcxJFZBFwtQV8CWEKTUZRrxcb7cTg7Jf1zRdfoGZKbpF93Pq9gFdEjoCojgw",
  "key22": "64eRNyyvJhQoh7XYi82hKwZvf8NDxouoVqzmLHDK4EiYBqmwvLANTkTHh8SF9GzLW5RV2Lu7MKCKTuYuJSB2Gfaz",
  "key23": "4ZkG2CxbEkXWuvg7hRJQ5xxzFAPEGiKZo94a5ACy1C5wga83iQMBpRseJhvh5UUiEdR1Gy8ZC2Z4W7SssPgxy5ny",
  "key24": "5rgpCzq3FydyeFVH9KJHxptodmD2zT9HbZMrCMP6hpuBVKu14qDoSw2RUNK3AFee7fC3TjSoj9zJFTEca56gJgiu",
  "key25": "3yCAv7GGT2U9w481JXutHzgL8qMjJVaZx9thXJ6QWKnd3MjqXLCrydbuHAsxza24AR3Kfg7J5nzzAzAAUr2fKWVE",
  "key26": "3t4Fa5cafZ1TCst1TAqye2yhBFv6UAqPRSYkPrG84fNoi44koRwiSS1QA3KdP2Kj5w3jRr7NTXhKwuu9XgHhwhag",
  "key27": "vFjs4ZqkWtm9XAaZyb8pkknPbwSyScwHeXW28ciTvUEJMUmz6MxxNJ4TZEH9evCMCV1DxNA44rqutTMtcY1HDhZ",
  "key28": "EJSLbAfSFHWpuKmiyCWPyG2oxUXZW1SDyFHHZSDzk78ErXz75bDtLd9qyDDYLToYdG7fqAdJyJsGfUCK8N8eh8T",
  "key29": "eUn4yiDvkGmxsV4QkcWJDaDt5ShW2ufXgAVh35tjhn9isYZVHbpWUXbzQwJRdWw8UHJoKQwoGxFPcaBS6ke6fE1",
  "key30": "9YMJKywYmX3CBSrD9fKJVGerfeaFWMMpF8sRPUR9h6XmQqm9APRi3v141yUwi8wAm4j8KgFPxWBXaALVaTZ7Hq1",
  "key31": "4FfyEfZytuZMNokimatPtPbc2VU5GCJk98Vy7MuHajoNBLtnGrmKeuJ2EMED4Cnc2b9Pidtg6UoS2NhTV5yJfxAs",
  "key32": "6BqKrtjt18DWNDGtZnurHzffEZsAtjEHJPqAe2UGLDRVSjfk5Ve8M1CqvuiCvhAJDqU75CF6h3jyvWhiMFKQx2n",
  "key33": "kG3pFzhV13ZGkZU88h7spUwqeiup8uxXpitS1KYmBLUKhXqLNKZZnGDnzJ9zeonvMbxgLVe5uSwHm2cThPizoCi",
  "key34": "5nh5pSVRB1Z7Gvowm8qfrHjTdEYn3ZwKycsuUwUDV7eY1fyNJkbbNEQ6AkmqM9C33bytbmR7GNRR2mDCbJQR7Qpg",
  "key35": "44wrF4rXyC6Tv7V8j2n6bPU33UQ7sbQ8sQAhyVDfj5S6PfUafrYSowVKGTYtmNHKQAtXt2ZjLdRXm7cf8eAN8dQR",
  "key36": "5s7WyUUek9YxcdTQg9qimv99Cm448mkLHrTN8RzLd7PZRnuNRiGGBYLN91cGquL8dE3zXiuxKZPfxqpv4eiYRGg7",
  "key37": "TLQBpSM6GnLyXj3rKCxKfgLrrRJJpADNx8GYgKS2jcT21Yo6SCSQCjtPUrT6t3dE9NFPfqjj1nhekeS6DfTuHHu",
  "key38": "CjR3xBBbA53eadu9GhefLXz5oLkRCuD1ESQhx8qUsN6Vp5BooJJQJ8z3P5ZRMLF9a3uiomhQiSRdQ49vBJzgzBu",
  "key39": "oScr37kBGKwWNJmH6e5qrv2xrZ6F7T3Ufdty738CcXbopVXwvCnXYXEEy5XwZZEKauJibAJSVJ7XYu2ZFhGTfRS",
  "key40": "4617gND26MpkpTbdRhp9QuiZThuwUbaAERWEdFGWhsRg5HgJqwR1sX4AN97ze3Hgazff7z3TyxYVjDf9nkfUr7rZ",
  "key41": "4SFwKAbS8pDxyBE3wnPKaYAPzFL1GSBhnAhfK54Q517Y7wDRyH5wb9FDp7v79y73QM5wzCapbfWJobYL96JiJotD",
  "key42": "JZ8Khe5porZnMmwbG9ciVCGAS1HsSyMB4Bcm1rk59eetSUWsxrA5eyj5reur7Ko4te2H2fxjSYfS8FsBiJWXukR",
  "key43": "2FzkegBfMaANWdRfMQUoXrc6NaJTy2afgFNQ517MkRGHcPmg2gFUCrTZWmjLKB389Su9hr6xuWzp6aZ4oeQrHgdD",
  "key44": "22n5sK3d237erJH319MmQPrF8uSZubFbpUeH1MUU865DsHi6xBCmHsnq5QHba2FHiJ5oMsew9tipHMnBtyVxvut2",
  "key45": "3tJbx9TViyfWrmpgntTuHtnGNk72sjtsAvRBYh5z2AEPrzPGHjcU2FMvi9KtNtP2QgJcZSBHAE9geHCgE5gSfj6L",
  "key46": "3P82FydEJT9hhhu1EpDGvWcm7PwxiBNJKWu6j5ufnvY9gz82GvNxmkZKuaVTcWoyzGcH5S2Bqvac4EZoQpuJjRfw",
  "key47": "4186B3RakFv6aFb1JSrqZ1jGGQJfXZhmKdoTEFKyZdYcJe8jESiTGko4Hk9jhbTFivMphSafvfbMvfXsUvMkakM9",
  "key48": "3GAvnkeLHpjBYiNQyhNujkiGzSs4C74LiXYUn29eMnGvcXhRnFjYgLFAwr9XxToKd2f38gQEFZ6TKTL2vzRJrKbA"
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
