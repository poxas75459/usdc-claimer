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
    "5eYX9UABYECtEy6KHq3wTiH1wNV93EE8GQEf3p3HaK9cFh8eTUo7RpDt2mbsjEXyCj1JWotyXfPH2Ws8gvfrnBh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41DwJqmxnfFFinXEgQy8a3JWagpXi8iBahEUPoNG6keY2as1AH6ZhcRaaxaxMFmJ26SRdeeDNLztRGixN6gc7jsE",
  "key1": "2QinDWCB1beqgNr4EjrQMqJzwo8nfJuEng8qd9xZ4Vve7r6fkk3dmeuaqYH7FnZb8SA4rKMCpjp4kazauw5sem2r",
  "key2": "DBE3Jd3zwUtKDwQyiW77csiRihDsk23b2eDRSMcjq8S9vrXELRYNv3C8sP2us2er7xVm3hCZNwSDTZ7oRDDopdG",
  "key3": "4YrfGqFGJvnu2oJNHu9Hs3S6prq7Ze6TxRMB32Mit62oN9uJ1m32KLtDHhmjwJ6CKTtuEi2cku2NDiPAzawTot51",
  "key4": "3CjNBRYkyJPiwoiyiAfDrZZYNptThTnj3jo8ioogd8htvAZ4PCRb9pjMk1n8aEPH25p2CKawLR1GSJ3Jb6k45uDW",
  "key5": "611Fv8TbeoMM8ndi4nnb2FkNPoHmbCAzyPHzemWxzmgrBwvHvW4QdwWkMJwrCHVLukKQAjngJv8FkvbhFmiWfmN2",
  "key6": "5TY3ot43n98BbdcmFQhADCFrMuLffSkDmV5QzHfVrGu3P5wkQ3f5VRuMzBtky5nvDX9X6CZEqu9cXLUWv44zEBFA",
  "key7": "2VztaeywTmrCBuPaRoLRPqGGsYYPkosTRtJhKCxBQp9u2nSfjGpkTUQAACD732DKQXYbSRoFRaaebjy6f9SNGKxt",
  "key8": "2GrwS9WSUVoimFsnmZjX6XJzvaH1V7oYimUMcC9KGVAeM26aPkUTZikyvxiPJhKfaL1kJYKzG1AtaUZ5zhcCyGd4",
  "key9": "4cNB6HEFxB9FPoFfaCB9HLLz2S32odSfba181mT4hfvR1W3VZyDvYnK6P7Kp16cSYcxiNK7ykCR3tMDR8LAuyBpt",
  "key10": "2AZiicprxtydkuNCRwCvacdSu9wBrtB98c8tGovPPGmctBdRenqBpejK9ewkKTXfaBmdvX548cjYpjRrUt2FppUy",
  "key11": "37pzZeScy1btrs53poFZLuMZkvtwujjXzeNQfRBExMtqRrBXnDNds4haFVho92D3pRdk19dA6cLUQamsWVB81s7v",
  "key12": "iCxNEfeV7H4tmJsSWr8V6HJ13LWY7XPMUx5XpM3CJNcLP7wRH34WxD38EzRobd7ztr8quuT4Hw422yEGLU4MFgj",
  "key13": "4K3dib44HFYvVpt9inDJVcVKopFoY1cj4ohx4RVKZZ7v581N3HELD8uvnLksbzGaqpGjby4NEyGiDE1hz1U1p9vq",
  "key14": "5vcfFrJWjrF9KDoaKXZnPkagVBUzg1o2sxT5AutpURQiAhz7fDX8Yrb8A1LkdozaCfRcsp5G3T846p46AadKZmM",
  "key15": "3A3XuFcngW4tRP5C46b7iwi6inUQU7B9GmEGpo43mGB8ebYRFfdUbHEwChnc6iRd9jPu7N7xudNjAeqQwPocrAdR",
  "key16": "QHvyqm6vH74uxwDrt5QtoZvTocjBJH44kKgUCv1zMKVwXc7N9V4ZMt5uX1xhV4nJeCdXQ4AZPKKFSoCPEdR3GVM",
  "key17": "4G8mummbjq2aqndghtfiUuVS8ekkSK7hdGBLAujnzYeFvaD7EVbdzqqJrbgW8SzCxLVTUgCPGJDXV7cmZTrN6AjX",
  "key18": "4QCNu1HZCmn2FhqLsnf67gQMgSqE4ijZpQGuSfV8pur6Mbome98ioTE3Mcb8MFpyWPo9dnVxLpZ1RCeTG96Wsvu5",
  "key19": "3xahArkqgsHQhwsfDB9UoVAtwKA55T2AhQPdhcsrcLzHEbAeibMkA4SvcMVzCGWenFRspcE9hzCfCYGWJEP2Tm2G",
  "key20": "4CCGnnGDzAE97HCUVYnAygvpDQ9xGEzZ6gBeJAjs48WrRvcVKfoS7ox1xfmzyLpA5mukRX3YLQwnTZqXgXoUZUiE",
  "key21": "4cW2xYu3Y9uYXxCpByYKJxHunxQGuZ1yi9nVBWqW99MHofLjATSL4mHCp7fvyERSxUMtXEgiELHrCdViz8Yuf8JW",
  "key22": "28pQLQGVxdiERAGtSd6ZbJVwsnqjHfQAHXGVXtC7puwxKTHdf2kZKLcf1PhESiJSjQFp95a5Hya5E8kFEXeMc4iy",
  "key23": "3JQgUbt2MjLCWHL4wwfm152oVy4yhzx1VW7G8LSg4SDYKxNq1JjteH6XU6acw8rV9udRDXdgeVTNPdQfYnNzJYcz",
  "key24": "5V3w2zt7yHgPpsvxUT8K68Csy6dT2PgWCb19H1pUDZgGzhh8utAEjtHPeP65Qs3Vu9R24wmMYiZQwwiepctrXxJn",
  "key25": "FCFbizAWyoMSkagddN9Vz1C6n45iftyZkoEi19PApLea892SBzSw3wX8fWajjmWAnW7TryNFLS5K4K9dxoBjGFR",
  "key26": "6hvXvLPPhKCMBJLHfzT15PU3W2CUAhMbpKh29cAC9s74AJBBVpY3KceXqfRuJjVpfV7a5wdPYkWpB8CJBpxn1cF",
  "key27": "4AhFYkeChWDfWonxARVD35jEv4sXZfkdMSBHmtVDM5wR9LB2VtSQwUxWAiGFkJpFnie7diRQVQR6prCYUyz9Gygg",
  "key28": "2LBdHgAxjAC85eFSJ2Aa8zLbdsV4dY7yZUUJNnMq2LvLFhU5wAedH8pMQ7BjsrFRmifXYDBwxQGkffukGFqYqWQT",
  "key29": "4fxRSLutvGpBdY4XHkX1T2QSjpqRdugirySrMYJghxF1zC7QhEFCG6g41SGpDkBznkR9ahGCU2wJi7FnEsfC3hxo",
  "key30": "AWj8o9GviD9gX4QSc7Cujv7F1AgtNtfSbUoV2yS2J5t7hufctAtwJkJTVHfdch4zh9RNfFdJu82wM9kMny3uS2n",
  "key31": "4xJSQj5i4bQhrscwemG15dK99ZaWiprazqFb7EE48ndwYPRurg92FAvk5Kdb7yizowq93oPsTPKceBMyzJEZtyzY",
  "key32": "4yi4qAGoe1UbqMFGpwQLXjqmY8RTpmSk16bh1mJgNzA6mup3f4LAyHxWZ6Bt5nnRg2VeoTiKGu6AQftx1i7LZBnp",
  "key33": "58n55qVhz8rGpzZh4GQd27WtMt6jUa9Bivcj1CRsdz92TxfbCRU5P5rexK1g4fbnwCMyE7TLA8SEDXDiXfnyGBys",
  "key34": "2yktRtRo1QuNkrP35tjUtvCV2nbUoWZft4ACewsnDGKzwXyvdmprmoVAKUNCQPzojPpVcmhbAmo4PdT2Fz41bKwH"
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
