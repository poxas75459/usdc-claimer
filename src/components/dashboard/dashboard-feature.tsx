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
    "dmnf9FRVSTfLyj6s3jJFb68Eic1nkUj4H8umcsgswNBb2RpwQyqT5Xh9sn1pk9hYkawx1C38spK4aM2gD7xocS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZwjAepWh1ksRbVFPEBMHgnssL1TgqYsQEP2WQ31afCcfXkdSrD9DFBJjqSG9w1r9tMUxN8SfhVu3SZsMHRDA8fm",
  "key1": "S2iwEJRgsdvHSXw2j9hsmHQzCptQAh6rPBCSXNFwhtYqfgdjJjkvQLCKEDpuhY3QcYqMWWLV5aNstgBrAXb7AoH",
  "key2": "3R1mHx7Cx1Bw3WPBTxDXdaF7kcWqV2PBLp4khzBvZFjkmBaptC9ApoSKCK2n7ppEr56wnZ2ka69bbkajAYJWWh4L",
  "key3": "2q6ZGzwUnvCLHbWSenxUxbPtZhSbjSn8Jh27P2LmMbeGs73Xi4H1VEPUwEqmsLkpZtW6EsvXgdNSNRnqe5igJDN1",
  "key4": "5nGLwYUVr4gFhopnCAJW84ckqYAZQCCYmErnoeVsGLwSbwPggSiSTr5wKek9QYzbSuucaR2BHkXvFm2cBXCdKABP",
  "key5": "5E92C1E8ip8b4dSvBM6JTQd4AnZzi9KybkcLzsXbKfpXE3Fdvbsqhij8eSGYuiz7h7ArtFqAStkNTzrhBEHH6S2t",
  "key6": "4Y1Qj6smTW3yDUpifNAfazBfExWJfeXteYv79NTEgyiTe3PEXHXyxsseunSDwZSY8JGGjc95ZV5yxJ2gXU9hfF8g",
  "key7": "2UHfuQTSwVQ9zNEw8GaHGYiFQhe2fjmDQLk6EC1zGvejKebicQZWhDSXfUsG42twuzYhygi3hC6qnyCchNRiGMBt",
  "key8": "4JGPPqk39psGeEi24wicNaDDy2LxzwTrmdh4aPNCrGt5hcnBxTVyX8mnr6MATDc1KxYzUGCmr4VVgPWUUTEPXPYb",
  "key9": "3bnDqLiFcE2BtEPUnMkXj9kvnpDkQNnq2cNAYt43zPyFFaVZkUh4kLyZm8V7nYtiqSFH1ppEaJFxjxusNXK1CAuK",
  "key10": "2Y9WV8FB1W6XKdAuMPuSUuGwwdSAJyZPY6KfwP1fyEknzFDLArLrEB9Tk9WqqaNj6euq7kfpKnbFyxYCN86KVXU",
  "key11": "3R6kM4HVpywLLApSm6hYmoRo771e8r5vTY9ipX9Sv2XgkZ1osza3rZ7Kt5T3ookoUvmZWo8p571EUgH2TeVKLKAY",
  "key12": "5ZE1pk7uV9AXECPxhjVohE9Jr4Fwnss4Q65afqPqVHoySxqXAHd3FWndVbrJBHmtdY6UCaQBRwnZdqrzmnPVT3WP",
  "key13": "2R833v6YURUHqdNB2676bxHNgSs8vuRdsj5qqivjAYH6mVhJp3kUX9NHUqnUzUK612LMdAzG8DBaF1W7Ff8bGbPn",
  "key14": "uoQU94BMr8gqRHUnXBod9QwGZVF6j24wGGfPTmg9QdygvfZDVxR1mWFFhxhxe19qQrYJcvDfsP7AUBhYazQG42T",
  "key15": "YnTZ5hTnMuwZ4hGXo8fQyoXNy3KQKWjSgWeZ78BQ6T2d9h55Kv3FwUSqzfHotj3ZKqyqpLcVtPuWZKr9UG4X5rR",
  "key16": "4tepZdGhdoTTq8cQDCaTzCg4vfRQPkPLeUZ8ejkbCrJKj9uyBr69e42t6sgDFnzwM7BCNAvoxZiDKb6nNux5CgLf",
  "key17": "5q1Vfeys5noAAL1qZDz9ZRQJoMGifxuYxmzMnBcPUiyZLRRrwEmqDpdzZPB2DwVPS1wBYawhLJxSxBt3Dhkm9c3A",
  "key18": "xB8aktfJ2dmqGZq47fVSb6DKnG4HJsKkkcQ5wo7JtDRuazRLtvE1me7wodDZHCC2BU3v85GHr8R8EcLwoKCJQDP",
  "key19": "54GQRvUqcsBGHs5nwknp6UrCTfKhF7Eak4pZbywH7cAkVR7JZGyvHBPdUpwPpjF2szVae2fXPQsF6x6tLPaK9pxD",
  "key20": "4QqHLKBk3mo6NMv1UGz92FcfLTLKatEvhQuqrc4JuipZYnqNrZKR4C3e1PkNYa2pJAGk7r7UXBubUVMgyf6xziQM",
  "key21": "SQ8EnozRdM8MmFP315dj69KDBYtgrEU5opgT1MC5VqUnLE6gn4get6F1Yj7Mcs8HpGajfhgM2LJrHMH7jMoAh6m",
  "key22": "5GHGwPUt72uyYbUDriAvWuxeCqsrkEfw5h1HwwDCee76UGq4hPbqfpQ9v4fbRyYLk19JQg3eMx2wvbZwpE5ntFKA",
  "key23": "21PbGYvChw8bKwp5cTeVRWeFZeUbe2NH37MCNCoELV7rffMKBiY1k9sEoqTcgS2YC91RbtLVFc1cmM5y2d8FHqa7",
  "key24": "35khTEH9pDydLb7oLeaCaBXrXAUrqQ3kiPu7ZhNhSWyAaQtF7yBQZiH6Pp2NPXtPWdZce6aA7uYED6351f5WVkak",
  "key25": "4hTXKVQoeaLmFt3phmkjt8tv336GVL1wLAT7pqQ9NoHj3eBHU7jPxvzWpXPk3cMQfUzp3dR2Qtupk3M3tS8mRhQQ",
  "key26": "5PePfmStUPd62dRTWRpszyoVn14KHH7FZmvBzmUUt5L8GYXqFeNPPkVPmRZXrEAD31VXTJUL8ebjHGKBEiXtiAw9",
  "key27": "38EGAFGaPgoFVZsx6qK41Vh4fW1P9fNSkDf5n54kcFB7RNqCiQuxiiwWBbGWxDeStKcJ6BYmBfbjb594csL4wLwd",
  "key28": "3cPN8NBztCM4QHdEJkAonchz5T8smaLvigzJ42qbf2EVurK1chMa8MgASpa9KSSPotQ1jH8LAHJqs6x5yAGcaedV",
  "key29": "3Dn9pPDEdEDQaz63g2rvC91moPLi6b7zf4SvK7vkr1AiC1FAUfbzShpehRCfZVN6Hrm2GbBjk8a7krRSr3ZLnCcq",
  "key30": "3jAAqHLSZdqtyFRFmukjcsVbeAGKgjnm3PvAP7SDdy7Fs5yq8SY3Ys51FneK9dyBFrZxJYnMVhGkW7xoRAcdUg48",
  "key31": "5SMUk2DyEWnbTdzgUSF3XPg5672mcm13isciroKwYSreGWN1qKEENcty7ykaakiRQoqDruF3dczQSBUnqAT7sLbv",
  "key32": "3arhYRya5HTnV42ccZhW14zcg4oSg2SrwiSA89poBC6G9FnfCbFHL3oEWWCkYat3o6fPJzN1WVpHGopG2rrKaBMu",
  "key33": "2Nnbgv94nJxL1c7ybwsZSX5gvh4pC19tEn1WgS7Gs7oQxQ9DVvh7f1V8HfVj6qow7ef64RF27DbeSG7UZ6FhmNZ4",
  "key34": "5oYQZKmvcLag1hGVDVmBBzZNGhyqNXNVuJziBCtPud8xcRWXydhRBcPdZiTZ79hec7QzQUtbtss44XaczBKTMQdz",
  "key35": "35KvZVCyd3LBQHzcVTBUTeesD7Xmmk8mwASQvM4Y857vS59z3MRZ5nBgG6wN5mipfGKWTwiW9JsDCAeYqRjDZaZn",
  "key36": "5MLA81tu3zSbpmE8CKNkTRFQGqnx9dEQXQijRobRebMqqLL3YFwM2sur2TLR3DVCorQDKfeh5XvhqAEkJBC4z2q",
  "key37": "3Ja21QAbknoLYpPoYMV8wm5Jfwv5HGJUc4erZPTcLtAgEgyQiMc9fe5mX9aqhHcD8pVJUNpBnL7GPrtaUNRH3g4f",
  "key38": "4QsQSsVSwDDTdwHfQJbKRoXoVZhmEs3SnPQivK9yMgfn4tmomUfjZWNbFJ7rjWNcBgUGEb3TMqcsUb6XLpDPfNXL",
  "key39": "VfoQmhn5Tdo6oqUWAU8TSmuVjgwwzbH2Cot9ez29nKK9qupPZuXywv8vooE6GMPyUXTepxMKJE24ALfc8ThLVGj",
  "key40": "58SQXmHcrhftiJPg3UQtGCSVzY3CRvnCuFkQTFdEkHkeSi6peQgmpkmSnrdBnv9myDu5KCjyVxzmnhKzuLFUpbUf",
  "key41": "4U82giergpchpVUsof6YPcesQaLUmVn9SmgpoqjAfVDnFx8hdxyqt36xmVRH9GfWFHqdbdt8Ai1DtKWADVRZLkhr",
  "key42": "3wg2hZrBk165o5zokMDkL72BdHPo3FXnrrwfMSoQ6AfP7SmgYjm1VPgKwoGMGxJPgKzAZdSSMXRRwoDyGxJKNLaQ",
  "key43": "27oQPoZY1xXVYUxMBoCvVoAbcmjWHGZigK9PwyFogWmVHNS8edRYGoEekjZwTQ66G2Ms4VEb2LFttQfzVLHm5GeK"
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
