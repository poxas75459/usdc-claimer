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
    "32jbvqNXtJQiKHEvBS8UjLSoAphYKKa44YdqFdoLEXLnMjvwY1wagifFzWwZf5ZTGX6iTu6NUTDdp5gvqy1bck5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sFv6ZMdmAYyBsDHxUvRZhKfJQ6fJbWzf49CCXBe6TVw49KV62UpVkwqPwSjL2XVHiGtej2mdFZnQ8tQyEGAFbUG",
  "key1": "2eV1wUsBjUAMARzRi34Jusg9ELZhopFt62Rkz3q3DM8uMiM76RYq6pJHsbjKb5aP9ZqPrurRHj9C64ytoKifhvni",
  "key2": "3vdtskfNjiSvDKpV2cL1jwfKdg67f8kugNeM1zjyLnWcYC67R6vmDehkzBr83DhQRzxkCZUiQxc9Zjqr9CWLNUj8",
  "key3": "1DWkhv5mtv6Z71TMn3rDBFyY7sn8iEYX5iS83AydDJnFECLigDF49d5fyBaAb5pUAKbADeVZShHLgNzv9Yrb6ju",
  "key4": "2DxuxxxzvNr79gHidHygrjApAkczFGX6vD6b7HYXXnSYhzBuSuRtVVqT15qZEoa9PrMh4xHJLFTYWX8wZTQdRwN3",
  "key5": "2WAkuWsAW5L3gydFCnYtE22k2hKPjaRvfBfPafnnCB8q8QLRPz9Bkzw1woi33Uppb7V4TZSczitefxACYFw2dgb6",
  "key6": "363QdHAKkise5DwKjpHbeDWXj5amNLDyHd4FA9qvc8wpmaNDLzFaSKSdLK7UjFrLjCi75kXc5J1jcwji2DYeGYum",
  "key7": "2uy5eXwLADz6Qobk6xJQHS6cCZNMUSXDSWYkJMnQnzDqBuXPSBdy6kNMCmp1qRyPXCDpXXWBtP5xkTwjFfKJhYrT",
  "key8": "2tLX11ifSVsDL3r1XQT2LhMJkU1Rn14r8xmXrPh4d8sTpMc5vQfCk4YCPi9G3wNaoGPAspHu9X9RKzFC5npERyqg",
  "key9": "3PTmxrkLXtByCPhc1H6wgXuJ9qwi2xvHecowU5dEhexWum55M1YjC5yWWo6E1sDhLXmzmg7vsSfwvQMSFWWFrme6",
  "key10": "5W4zCRjFAog4jKWrug2t69yDp3YdUqRK4uv5CXWxvq7AfHm3QhvPAR9j9YKj1zm7wzJqVmkkQP6by8M38RNZTnSS",
  "key11": "2HiWwP2gF9UKWWRzQb94kUYHCMGpNDAv1PqEb2YrCGQvoB8MSbBpiYhCnx3ZMW91AfJZpVdJJKLsjXviij7wKuCd",
  "key12": "4bhdYH5ykfsEivjciTna5qRN9ChNPkyYSSM7KSC4j5bcqowUrN4xkbUGNd9XhSaVVSq4TNnRwWMEHoY1R6VcXUah",
  "key13": "5WHZALTKiEBzid1JEUd516Q5dbeQgoMsXqtu2TnvuN1ejpq2GyjKG7vN469aEwi6AUNKCc5M7s5M1fXPWHWGi4Kh",
  "key14": "5deAhRQaVWtjCnkirSWbSoGdShV2M1FJvkNJTemvSA4kTgiHXFkLxroGZxS2FwRy9sTNi8s1wuhLZcxW59kRXnu7",
  "key15": "5HjnDH13nj6GqYLZinejBVc6p5k4mpA5uSQwGoRgZuqFctibs3vbTv3CzCyftQyvzkeyRdGzT8tac7BHedKhEF2G",
  "key16": "CcC1jYmQMHDMCexBSsdxdjTtwPtvzR8Rr7rsTHBtfH6oSoEg23phuREkiMU244L3xZKeBtS1yUpidLpfxYcsuAF",
  "key17": "43duHZf7oUJmdc54dNcFYuEvvpmC4c5ZCDo2uBjL2LbJeBPHomcb8YSYDHoK6mqzxYdBmwn94iq3terxsnHaqdjg",
  "key18": "5UPQbGsmZWzNir4nKsqNSPKv8ihtGpRRuERqcz3xuwvqEH4DwZri1AFBDHMxZeCdtMf2VxcS1943QcdQzEVPgKJ6",
  "key19": "2ZK3jh2A7hytaLPXqkkVf4k4fa3UPSN8UATkcvin1duB5rdvdPQk8PdphwM7B4Tfc7MpyZh43jmCMmJvjNcxi17W",
  "key20": "23EcdSWbwJXfEpFUS4VaGPAx6AAuSjdWxeJuPoAopWCnJUuaXtCzzUttRd3eU8hdSXvfrWphcWkM37b1LjmssokB",
  "key21": "AwDEGzj8aUBrA4fcZxHtggCpLezdMJfYNwwKCL5CYZvzd3kPWXm6BaNS9GFpVXnCV2YTQWS5F42UnBtxKZyAzt1",
  "key22": "g2NojDoTaH5bxW6nSYdNUC8FrU2odAfp9uPFzbbC7GAuEW1mPEBFiiiy4HjTKA23HcaZZRaycouHo1dkRBgaMdk",
  "key23": "4swLjwvErb8hNe9tn8FE6xoYbrRydE3vvq6hgVjNn3ciNrBhBjKWkFG1kWPP4LUP7QMV961P9qKha2pFWCtibi7R",
  "key24": "dgBBFYhaJJXEqWTQc3E8uKpvyXvsbmFh1wW1cgNeBTm9o7sk4giC3UwdbqKizi2BhM3CEc6T8jAqBXgok99sumL",
  "key25": "53yXLAiv3u2tFH5ikDgNQKv7EL5yAXinqaes8Jdr2LA4uL5oCDfuziuSqyD1idfccXjLR8TxWxCQ2oXVNktj9Wm7",
  "key26": "3mAPbMHhecLWNpXA6rVEgSmMFukb5A2jP8uv5TA1WQLBF5ENbQWkSmWp99Ss25A8sSDJRctXnhRX6UfxdgjsYm4c",
  "key27": "a3pEXJ4cCNi3LfzrzBUGMwv6nQMp4aZ4JMyDsY15acHqjWFNm1ajHDnWw7Bz2SSXCh3tNdFsSxuxaz4tpkBmtLz",
  "key28": "4acLPjrEDkUPqVb4Ge5CfmoGbXGkt9BkpwKbrA42bdnGX5V5n5a8nG35uhNpxVNPpyKNrEhexU3crNojgPrXrQjs"
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
