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
    "8snyy88ofdp64hKsHFfzA9gUnb9G69PovmHje3cq6Jd4TTzFdJTKisybPFFjT3u75EZme52JjYz5cbmxkexKcH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FwrXMissdrNx4ta4uALcvi8vH1FgihvmFb9zJDp9EFT3E4JvY9Hc2X7xU5DBFbxfgefEKNW1P56gL9aHqxi91Wp",
  "key1": "P8XouXGsTUM5Sr1JUG9ZKknY2j3QxEN4CU9usvP9ms4PfZhCmwxNsfP2M4UdyaHXi3mmh31XsHGoK4MK4EE6e7H",
  "key2": "45PSz7jLu9vVDjenLkoXvG9rGoSLgUDarh3fNJRbovg3S2dFmRAJ83RFahRfnkZ6XkHUyks6CZTQQcsxeK8Ds4nh",
  "key3": "5CngwmGvuB4fArjvowuDPqUUvApRMLeGtNhV5jiw2LnVcmHbYDxJ74kAiTrFf1Rz63Yzjc6zgGP4cNaYyovasbQt",
  "key4": "3p3btHRDfdY1hJz28Gcm2t3hEV3ujxm1XGVpicdC7Z2Myum3BagnPPdvDuwh6AcSpAEAGXYBCirjvaGsTAMW4VS6",
  "key5": "5XX8yQyiKvPwkiFVG2j876K9ZvFDhgSGSPgmremivfgyKRWWnTjTikci482cNubZKfAUuWJSGma8j5BVktivqK5s",
  "key6": "2TTa37BbZmhATobeoejPxjwnL2bHKntmFoS1b7WNUt1jvnLHEfozuzL267EvnDE5pECsrMLeEhW31Lwvzf4RfpYD",
  "key7": "4gpWj91V5TzQmoVET2J52GsAXy6QNG8XkndV1QgygNU7EXy6tmS59C2izNAKmYBFNLrYLUdCC23B1MMSiYc8Bfai",
  "key8": "aPQNErPFKu8dqAZwQZNL59M9QbJgp29Eoozo4y8Cq7AsJkMHewdQR4P3gt1Tj2H3324bu9yeT5K4vaT2UbMU3Yi",
  "key9": "5raopwkUMxE5m8gWHXTZ4KJqvN42kMHqy2XKnJPtq3kAf7FrGuW8hCX9XaUYFjyLxCtBH34YYVgnMgtmpTCma3BJ",
  "key10": "66HCmQviVriYvNKnKr4YPVQDEcYbo36jnSos5RfGVjVgy3mhyqzygsy4k8WHj11pSsd4ze3XpVU5AAD85n6SwqV5",
  "key11": "3xPnuvXxYk6iShsk2C9corEmqyW83mt7kwyRPY9KZfTGHf5SWLCESZsefhYPt3qBgEXqMqFpkcKtzVbbczMsPPFW",
  "key12": "9Gz8vz56LujTDB3pAWaZirUohifCy8ozfRuvYByEsi8UJhjFNbt8yqYSmkNoyETF9qc6RS34auvskxs86NynjVn",
  "key13": "4SnDWGs96VqhgBZtJ3MzfCiz4oMCZcW441RvAqBWqSJYfFnqKUFvnSsFa1eUpk7XWejnAHkLCjh722JDbsWHgKDv",
  "key14": "8uQvwdBDTNJ7c74DoVv5KMwfD7Sk1d38sW6Fe91NaciBbqzTnd1uFGXCBC2GtQauZQGZSvTcxtam2zhGqt6azUY",
  "key15": "GsVutpRdCm93S5CyCkvb4NB4iihAnQ9U5VbJtgdNNPMRCkm1Jbs2pPcouBkdNR7VuSyisjtLXqfnt3bDjDjDHJR",
  "key16": "4VyafQwTehGK61iAHtjwnvqJHhsMyt8cJmgM28ucj1XF1jUYjkf3byscvVsSMsnacJbcDEWySVEJsqKkn2rYdqvs",
  "key17": "48br9pcaZdKBw9m3DY6BCqiSE4oHPbyKEeTkWZ446m49YwH4sqZHWQ8Yuz78uLJgPBZrM5X3GNPKGKidCRN77Gg7",
  "key18": "583PWNuZmV2wg4bNYEibFfTEY5i2qfqf5oyQHKeZCpobxQrLhmdP8i8hh7CECgz5KHKn6V4bLaXyzwTiqgbHde6M",
  "key19": "2ziJ2N7q6kUyPpSNoFtqJmLcuUCdYiBLa2ncZCrdT2J5xZvuNiizXL2nM1QZ5zZg7NGHZJB6M2hhSJzqvG9ZscFm",
  "key20": "4xXg8QmWZq7SM2LSrvyMnvHmpiFuzJBYRzMntPAdJk6YLPWKfoGuchTu1PnX4jd3ghnzcbdqjucAH8HT1t7L1KZ8",
  "key21": "8dBRR7WVFmc32cexnyqfrdtozYPmSFJ9kDQsJvZBBeGkdjTrxYC7Q2eVtDkaGr83NiZW9yKyQWjKo9XkVcswPFN",
  "key22": "2MMm26a3e3o42tyQXEyyMSEcP9FF7rv5m61FqAkerkFju5yP5jGGv2CQaVtYBjByNVbdJnDio8tjy3SC6eCNocDw",
  "key23": "3ejTPwT8C7E1RHJHCfNXpups19Dg5DHQHnTRCvPevVnTcoxETzbKcehefymPpbbKMSas8bmvX3f9SD1i6hm6whkV",
  "key24": "B7JLWzHwjH41EA6m5MTHKzgyNPWsMg5s7QxCyMsGL3R947qCVRxLXpe8jWaiVByKmPEaUy63a1pFcDRfhzW5RTA",
  "key25": "2t5iP563wi9q4LLbQzcqRgJR4edMVBn8dL6dgjgmkGnqB7H43eycDZUMtVXbdSZpYj2wk8TcdQLTVugG2pBt27mF",
  "key26": "3r24kmkkSyxwh4tfyAMzvErnY4wMCjYyhNm3PAvoNxxqAEnCx27utyKvNnSWTJceARMCkRaGMgFtAuFQFqfhuEq4",
  "key27": "3YiJLhTL5fYYgFohkBocbCVk9Ftj7NRQB6UneetihBj61J13rneEiysJFwQbiVznUVPLUY84F9VLYsT6kNjgqSCB",
  "key28": "5bdtDyhphsvUFFFk1C2wnuuPFgzi7mQJ8qmsHXaf7dSDH7KEP8iNsNRdgkMHt6LQsBLAXtPmWtmzDzRzMmU6tjQf",
  "key29": "262NYJpSZzySCYiJNXL1aHTpMXwJPB4t2Kfe2wBWxYbCkBSV81BeLkzNenYGkpTEcKPTKe1RDmjCea55QfbjdS92",
  "key30": "4L35EwufrQb6VjPs3CwF9vd12PHn22NzGvS9VYCGrUfrnUoDYSHLk8oGehokRQePvYezuUW6oSg7jAp9zLMLWFrY",
  "key31": "3Mo122vz1ce2VcDs52QbBRWkGm3j7fpPz3waY2zXXedXeojzNV8L6dTU1hyC53LpJ3rWcWzLUFfP9kx4VHn3pqYv",
  "key32": "3mpZaUqgPobUTDApj4vQuc4ijy3cfHJqwmiAoTfwoK9VgspZjB6SGuRP8SRUSShepXVbZ7NTyueqcdxhg5C8GV1L",
  "key33": "4x3KyKch2U1V4Cqjut5DHdfW9CPi7gkAfPosvahmUDQzzrVmytojF3Hf26u6uwXPpSTNKvmPZoqYDKhkumtB3WBJ",
  "key34": "2L7JJLjM9mUfxVp87HaRg5CK6DGNntmv5osoRprksvfbD3yzeb6JiQV3BbUb9TJhn5o9KFrjCm9b1jnojYHyseYZ",
  "key35": "3WtMRa52WmiGMtKxHbiozEucgdYyaML2Y27gPPdtQVvSMTMRnWayq58VyunM744Wn4bjuvqVxQppYVk15bZr2uMf",
  "key36": "5rJNARDMUrQk4wqckdUG6JUHfMaMoyGUKzpidAVE3vtEQddxUpSXvjpFzBnbPgEoe4yMRMUJS6YZRAT9hf3u4bpY",
  "key37": "3uRa2daCkQHKXpmN3Ukf2TpDWKfXoLZBAKCGG2kzdKRuA2XSWs9t5JhU7x927ReMVd87agxqACRhLqGEwogRBrjb",
  "key38": "5V8RCQXCtHhiaLdp4PKEbnjPWL7QaP5aUFb65t3E4TXExhFjqykVrx5MdfTA2BGmZJcfNn3gGxVpzFQRZP51igWW",
  "key39": "2VTMDooxBpY5RjF6pvHnZL1PFLqT7UzhKZsgcnPtQGyV3wB7f4M1R2BZhapDR9ZkhsJzgRrzMCwCXmYKfoDkgFQv",
  "key40": "nhgT2eQdNGThysRdbgnqQbnQFjLFgJyUoCqZ4sZEf4CyjTPQhHJoBxJhnkj19KTx6BGjAwPnB4rzvZu4mKBohFh",
  "key41": "22bX3b3Zn9ajDF8ua8sQDR2mFxA4Szeacot6zDid6sKYjrwzy5VWdZYQAbkY3YKZvv45KipGdJV2uaL2uqCaEe63"
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
