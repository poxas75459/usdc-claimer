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
    "5Le3B6khif7eCCst46FRxDUGR2uYQ7qYLhg4c9Y1vyfB5xp3EwjWh9Guxux5w1GyvMmMoJmYjqQCcdDex7Ff4Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p57EX9aWPiWTdCy2DpGPgeV7xhMiHzxLebyrWKTMraqLqhvKnQ6wF9MQpzejKUYKtMXX8LnSkwZp1pUTnctVF4z",
  "key1": "2TXcA7U5VdKijmDx697zwKLr4NsvLoxCT9ZDmLqpGCjd7YhMFg4Cf5xWTQ4Uccw53TV7NQctPMEjd37cGfp5HSVq",
  "key2": "5DTt3W4AQstGGLWEZBnGeY1XT9VCtR9wj4rvCYVDAsdGHSG59MJ2TucprBee7UtG8jT1ML95NPorh5g7WsP6mtxP",
  "key3": "5ZYpqDKXuJCcsTguoqfJYe5dstysN1DVimgETDC16x8ccKCZRiFk8NsCSnRJbHTX7Y9SKWMdwh6dDqvUnZCNcY9w",
  "key4": "4TgQoshF1ekcrLxXfpMhyw3sUTYJLWMCfHrF9bMEGzJC7DFbK2XNYPnjBzagDJtfLkBq8Mubxc57dGShkMteURAm",
  "key5": "5HjGz9LpYQq3bNJqWRamzNsMH3NkxM4zbuYAkFoGJwZ5pv8ffTm5gHLjZeSiyKTjBQC4cS9ykq8tdiu6kgLatiKc",
  "key6": "3p4CFdJmVxprk3Qx3nedmJEiSALq8zdj4ygtSBjjHfBGQFXs4wanR54Xu9cU57nhi26nt4CpJ4daC5CwX8hEcsag",
  "key7": "3Rv95L7eBPVD21DvJMf4cKKTEG1AFXdiSQSe25JmgLsu9etV9aTtJLgtJEYJjdW2x63B2e8edamafQcDkbKYDEej",
  "key8": "436nJFVTdxVh1FuBHvuUT54MwpzjUVcz75ecNVnQMJKgH48ADiTBD3LpS77pyc68aazDPtLfGgE24w3URgFvhmMC",
  "key9": "PBrciNRsF9wFPwrF6cmj8t5JZ1uPtSJqPQoAgaFZTt5FvnHvoTrHLNws5qUDqMZuRmLmk1ThtmUhbwFr7CwmUeK",
  "key10": "5tm624oLiPQTDyXArFGDSJ4f1Dj6eSf8RoVMpwRPMNApguZ4E35QqPfdXoj7AsyrirqK2BE3hjZRnxp7JN38d86A",
  "key11": "3DtNRpXutbKrBeiGinWdyWm8uWm8DbPtbQsnGS86EB13jzus35kJ2iQwZn2GqhXXKvBjRw4xgM22KErMdQNqUR2t",
  "key12": "51NvfMwddUHdGmRHND5Sq2t4ZCy1b8zBm5LeLLYvGtqW8PNSBiHdKbTXoZNT5i55xbyDQTLtpQakWhYrDnCVgLgo",
  "key13": "2RMp517rfDtSGvcFPvDjf4TNBjmmGwhcZdCqMgRbTiQyprztPwnHaiGm2H9Hm1aenjQwQuR49SPkc1BRR9CAEYGX",
  "key14": "4UjSrVaPVKzy442yXdzMMWGWynrvfvc9w3EVSDr4wVpzKEgW8QwAAEpcj1r9S52YqTqVZ6cm66Ug5vmNp2FmKGyf",
  "key15": "U2rnRmgbkv5gXm6CTxx9yLyAz24MeE2G6b3pRx6nkSfWLGLcGRSPSQ23R4RKdz2cdU3dxDe5ko4eMKisX1Zhk5C",
  "key16": "4gzD8quGXvL8JjvCxxpdDTjW5pjfeBUDzfDLSXfhEETpzujWZvQGAAQ5jKVH7twZYnogGXdDoGJm59QiCxaaEiNA",
  "key17": "c9bZsVV49aUSbCamdtcm9tc6Wt9yww6kv89hMn8JZSDgzzsHMmTJ5yBjfnfkdogSheRs3JGKdJpuvbWuP1GYEsK",
  "key18": "2pDpKtfC5EepCJHYkWxBn5J6PNumUnw9RFpaTV2dy3CeoXdbPt8cjLFjFfqDgBjCe9x4ZUsPobVD69Nm1eCeYt33",
  "key19": "4LbLwNmnhxQAznaybUD1yG81yqfAnKTozFW6KYXyq5EyxAxFy7jyhcN3kbTd28B5mB4CHfeWBauWpS5zZbe7nH7c",
  "key20": "3Jpqj8Qm39XZahXD1ynqWkWf9UM5hgSGB9C4EYgio8euoJaTGjkSHbUa6kaWZWEmTu2KuA7hf7v7B62sxHjvsgY3",
  "key21": "3g3TZkPbR6HyxKRhdz7z9MuigyJukFYiPEunVV343BBQcaPUsvgcFn49paTPDRx2X9pG6HuUEmzS3jXxcWWyAtwi",
  "key22": "25GtRdhTRZ7jJuPDpMf1P62RofzXw1MHPVb5WkvFsW3Ah6hA186Hn1ZBMJALbzFS2WSFm98Tm2RpmeEFcYwcU6pq",
  "key23": "ymiS45nqZV6BhiQD1rGwAHCBg9jXBg3TDpzxDCfA3Rie71ieNbTFFWRbgH37eTd5amUNWp7RS6gLwedX3iYVwKw",
  "key24": "5RVH4KkR73ptgcmST51p1UmvynzCUh49ZL9ep83EyHCJvrfXu8tUtUTs8UAvz2eLBH1UGhdbomWydxE36xD9jk9M",
  "key25": "5tb5Rv2LLZELQ6S3igoxSpWGm3JwGv65r1FtkGPUfxBM4wRzmVM2CkpSaAvybPvtenUX9o9yAPZX1W6P2UGYbLrz",
  "key26": "nfjTEnyZFkXUx3a9S7LkdjSG5Doapw3NQz93Vic9JV2ZrWCpn1rwBmuDs7byW7Cv9u3stpDEEZB9XhPzFcReqP7",
  "key27": "4NykS3UjLQs2s22Aic3xhDMBEpmwgTwvrNDhD1Wg9ZiSeeqmU3FpB33QaLyKCqXi2G8Q4NJNHShYJQQwfcSScVAr",
  "key28": "5pCJqoJjBxxfWfExBUirRvHWuHxNbHurRvkXa85SmZ2Aq3jgzDy32wSPzCKUmxSBtiV4vsWCmt3qgFczpuMyCaVt",
  "key29": "2ksQfR32hCLtDxNCLNdncWHthhYpAjECEqWwzcYt6iDe2by8JptmwiGFhbdfnuHARoERST6Ru7u6KKFoLhkzJXQB",
  "key30": "3hSAau3CMdD4a7CNW86zWr5vHr29xykBJeA43nJaiB6nPiQbgBmZMjBW5weBFjXvoGszXb9ed4oxR3zzeZTPz73s",
  "key31": "26QPAtt5cexJUNvqeAeLksCiU4oGCLCEXNKE8Gh8PSAJej61aLRc4qfea1SicaZmwmp71hGkGXXajta1XtA6kAF6",
  "key32": "eDW2CuJorAEE55tPeB7HuL4bYznhoXua18d44TSfLbt3aKbjRFVQqqbdGxqgpMENo2UviyvxVDbmdwdKA5Kkxnc",
  "key33": "3sPZfdrnrwxWGhVcvWpKBrwFjAiusHLYWPqJNvuKGxZK1tczuxynQmj6ZQFKSQwN1am5LWDWKUEFRHEymxEpGBAZ",
  "key34": "44VG2aoUAJ2261mkGHFtMBPBMvvMNG2c3Lm821kbFRXgL6KWGDMoyhdk4WuMYVfg1pLmShRgNoU7q19my2vdNGBY",
  "key35": "5rdPHeNpskjoS4B93yJCUQUkDuW4BtrQnH1pCowy9p7SJiPDdnjEVQ4vSE9unD5Z7Ysr3vtBzP9YbgKm44NqVaEH",
  "key36": "ZdwakQvhkapA1DYkWJdSjEPa6bB43RbVds1zXrYSRn5LRUQZqe2AHhKThNSmfAvRjaY1EnWq8SCjdA2VbPbpZPy",
  "key37": "4jhV8GHagvZQf8rjTuh5qFU88jL7tWz3hJDkoTjtLEqQVzhy1fmPJA9s4Hw7LBHyT86fAcQCMVCqs7daNuFpkJEz",
  "key38": "cy2EpompGYrZ2q7puGfPZFUNPfuPVHh2RNp6wNbxfidWP6me1zoqBAxsZDGFe6P2MsNdL7UW8vXKfWPbKKJmVkQ",
  "key39": "2dwMcwzfCeXEEsrexQQmPuBoYq7HGt1u9LV68dg3hnqjU3CidnkPNEvTH4YgEj7125mU8js8pQVC8NX4K3pYegFf",
  "key40": "HYG8Bwp4ahEj7ymBS3o693M1zdDkRTK14et1Ju94xxxdBSLnqCnTJ8wHHw9aKamezSwUBQhuWdQCueBppV6FEZN",
  "key41": "3QLfK4KZyZU4fgeEGfsYyX17SnmVZsmLNTEaQye3K7ZgAgkTevYYEduLfmWmt9cK36HGq4y4H33JdKH21H7MrfLw"
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
