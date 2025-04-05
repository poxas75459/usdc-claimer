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
    "33nXySaMUjEZkgaPPPBfA9e45iP78zBn4CwXFHiBMVtBjahUUHT1MZtZfYrVjjGxu6QXME1yKBspyzbEpV2ft1gY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EZGqHX4GbD9PDXq9cESXjkdNN1rqbtxk2e46XBvXa7VvNUzjr2Lwq5mueDVQ5vhBS1F8n3ZbEU6vfeBKaeQu9dE",
  "key1": "4n8BYCrchQV74vs1cqsnDVFPXsynxKL5fJVhSupBodas5q5bGEWhLk1u1jQk5dfwDqSZWCQhn3wEVHqDkUj8rUer",
  "key2": "NKv329vdnw6Lt2XbfLJHAEGoJeNAFapiphodB2urC5vCrz2jQJrzqyFMAd5GCsR16wSAf8jRmnk8RNmzfjekxSK",
  "key3": "4EMrVERffT37LRut3FNmuym15yRa7Nd9AJB2tKyKnmNVtPKBAYehWizKkb3frzjeSmzfeFLUK8cupAa73xNLVDqq",
  "key4": "2fFeGPXBH3mYX1we9FDiogEgw5nSTaXia6ZcF1nhsznp2e5GSdv766F6tnZmXbXQbvwWGGnp7WCN3TECCJRSJjYt",
  "key5": "5Rk614cbHwp4iYhDA8xQw764Z82wniR1s6WZmfpidawUvRBKUNDT4ce8gdBsep4btSSamwK7HzzaiLPvHP15AgvB",
  "key6": "54EgJYntHAXhUa9asYKZS9hjbKAsYTqYbHVGBrZqfpZ7uHrWgd1dyjUmu7Y8eeiJVpYoq2owTsXfEqV4UcQkUhdZ",
  "key7": "5XwAsumYVWgR875DkrefnrcHaCNo24wUPfhDUacPQgK4Nk84BFhfiLJnwXR4QCEPLHVaq2X4QkzBzHKMQdfryQaY",
  "key8": "5Nu2EeWPkjAwfZzkUXYNAn8mRDMNSFrnWKwJ6pxTgSZhvyJSL3QoX5wuXuJRqVWtbnuzxn1sPDQHEdntiZM763xQ",
  "key9": "dj7ndQFkdUWv9k2t1ZNDvwoSnPrnZi4MPmgcwTZEoS5zk7kj4cYW9dWqZP4wFnLoDPmJyMzDtHuMG1zZ5aBjVkE",
  "key10": "5DW838WpPvyNR6Q19Eqty1raDVTrpNKB4NRwzG31vHM3Cf2GxU47zPrQDuGtPYLK52EtVT5mybZuSN87d7Et5vk9",
  "key11": "26e7wAnZeNhjNFVhyh2rfRr1KcmdCBbpWnbgwhY6PwLrNxg4iMDBE3fdUvQSozpv4DjKBzLGVuxURjYyrTZAHg4n",
  "key12": "2aE9ycW1ixqdjiKMB6ujrm3fuqg2c1ARYeS6dGVU6V4MwFDy25Kf9iRsCN8Q7y4gE1g3hSHAF4UbmJPVtB9Cynub",
  "key13": "DBtYFKNhkDSscsJo9fH7Zb9Nu8ZTgrSK7NrFwJqAAozp76WzSVm5SHgoD48cjaMtvN2zRe4DMCYNQYRa1TYDWoe",
  "key14": "2H9vcbD1trzcrLZtComk216m2tRtq7EwSVuEfALBSjg7K7BRVJERLHP2kNXBNtfyYVKkWsxp4h2pdKpUjFfkKEo3",
  "key15": "4SbHAhUxHFbpAKJ4q1kxxc1EYspJ3mvUT93kARKGhMfuD82Z61iB54DkZUmids22DTbxFALuK6KmgHMV6HJmx8vL",
  "key16": "2pSufBWzaAwPPejo5GnA31BbJQy4xfuCX7vv3V4qDtLT7LiyDR8ikv9BUugKxYrrh5Me3X7AGQN5T5dsNvaRnie8",
  "key17": "5G6d1Dc9U8zdNi88DhVbnvN7BvgEJUnH5hXW9DutAjB2u2YXNgqja5FRbch6v1NhHcKkaDmBjpJQ4cFhC7g8epez",
  "key18": "pS3vCefGqweD213Vk974DmyNK5JuJ5zrEMW3n29vYL9DubNUYYF57A1k3yXohWq8SSQfQBBoXbQuSTSnpeEEGbi",
  "key19": "34dyLn5CZgm73iA9KKDViMTwiLaL9jWtcaisMA4xXEzGSAXmkkFU8pqifoHPjJm5fZTxmnRfLWkrQWJxKU6AKnWg",
  "key20": "2pxtmN6xmnB44Vw3DTREv63prh4wm7YJczuMKgfurGPsCMjAoptCXoJu4iFzEfJ21HcTC4WexWVi7E2XCeGprsWb",
  "key21": "2JqEtrDaWnmZQHJDwmib6qpxp4C9ua9mCS3bHvuD7CEmWyuWrDKzGcBJ4PDLg4EuP8FHPtU7gSY4cvuEGbJzuyXa",
  "key22": "2Pod6nmbfBfxVyN4EGq9PEwF2wKAJvraC8k5cX5hRNUjsfWdtey9RmrGvH6SYm4oyDrQceJq4p2onTXGV4hkG4ac",
  "key23": "27e1T7n1vm4Jd6w5YHFZYX77iRRGGx4cmPPBinopSPDXfyBFFfFhPnwRykLig3kRwp4EJjYy9swDnHhuYD4WJM5g",
  "key24": "2uKtbjfSXXoMV3ELEfep9susCz7pAnV3ukygLPcijuArrK8KfNLg6PeXFdmTohwL4faikRF7uxRCJnFgQ4Rjs4HQ",
  "key25": "2HrAduSKDaNYzgZBjuQEcYvZybZdK9fus5k9yPUbdppG7czqq22uWtzR8Fup3ZtU3aV4e4uDFvGYQapfAjHKiJ7g",
  "key26": "42VbS5oW3VoBwCFLnicRB8ea19zEVb1ooHDBwLJFYWgynKqqhvxMgaELhLZMsXYjiAm4oHEAy2hf2KMBE8GWaGyd",
  "key27": "XxQiS5Uk3rNbVNddtEBL8hr2BzYat6vfUvBGf7x6Gx2LBsZH7f5Sg1s6uhWuuVopabCy2f3idRGyX5QddTeSdsa",
  "key28": "3LtZuiTuP3ANaFPiage3pHPmcPzWb4a3NawK1iRZeNhXErffu1qgcALwW3h3ouktw8B7YvoYSSoXekw8Gxo9i5PV",
  "key29": "4iEVsu9gCVt4NmVDEfb9nrLvSQCjVDzdo1kFFmupW2oVHaqdsfS5WnREM6SE664YjAB5B7cZQeAn3XyGABgi3WmR",
  "key30": "5xP45w9RivgnuzDG5a52huE281YRc5oF6nyJQVXTDUtua5YNqStTihWteUDh2GduFqWz5zdbKMiWxVSDAwEmK65C",
  "key31": "3xgrpSPiLENDfX4wtpHrpHT9oEpfxjwgdpF9TzoGLi5wxqQ1WFMvCbXuBAcp9jD4xP6VbiScTsjR8iq3PFbE8PFn",
  "key32": "62XF1zcaNT4BKsJiKGFdBaNstoW8gZfA5EDtXUQv4bJaeSWWiR9Hdz54ZhLPzZJ5hPB2w3BUv7Mhq7kEX6srRj59",
  "key33": "61KKgtiqhSLndL4AdcjC4kPzUxa3pbrpoyf9E3vn4uZckAN42WSYuGFJ9qBz86Y3aZ3QuZoLYcgSqjjQfUBygT1c",
  "key34": "3waFKxc2cwRb3qB1YXQWetZ2y7U7W56FxMkg9QtkwufYFnNRnGGK3SGTXntwi9LoEYdnfdMh3Ld4xbgvjEqvvYHo",
  "key35": "2tuFJdHDUubNDVMt7Z3cihAZWEPsApPwJoBP6JAifEdPqKEGHV3K8xpqTwzXT2W9254PxZVbfjZQkcm1m5r7yT6k",
  "key36": "5iUdKGRSmtrXKUQXzKXepHk4Vm1bfPQPFimR1qgDHgKvH8QPGnQXQgTsyYhJihRuxG1Y5CQBhJvvHRjrkZzhWaaW",
  "key37": "4NBaUo6ji3nqvi8NFs7wALFmiRAkhMSvwLL3hBxiNjHcpxLT5oDDhJjeznmGRS4z1BEKTtAnb7Zs6pcoM16LdQ6m",
  "key38": "4g3Be1HTmUcvSczZaBuovoxodSPuUyQiYt5tweAuXJUZ7CF3YbCfa5Kw8tqtzQQWnenej4AfHDLSfnqnnkugp4ZA",
  "key39": "EcAxN6TLkNcna5NXd4snnNZuXg2WQec7c5zQSTLPHcSwd3knMW2v47oQ8F34p1cdQh8qaobWoBRy49LPBSPTc49",
  "key40": "4g6V36jBWzv5E4Q9rfsgShjaG2HLkVSoZpycYp9CoBSZoZF11q4YBxQM6V3eAp68dxLAU6tpnhz1oGaqA1GuYsZr",
  "key41": "6BTBqoyeZ9R5BLLVpp4CJtzjjkwdz5Ap87YDsPzQ75BcCcNdbN7fqbNVABGtFayo5KB7Rh41y7vQvPuJHT6n7Lw",
  "key42": "2QJcoQ7HgpZ8e8Ttea4Bwu6qinttnTP1DVaMnhNMCNHNMPezC31LJBbFHyY8aufC5nXN8JHNN1gLjRSVF6dtHL7T",
  "key43": "3LKrKw8XDXSFU6gKstuvHgy3v5L7Cw2GtV5ZMM2vRjiqeoUyiyUiqq9TQCQHpbS5juWVK6CHWJ8WaSeativyo2Yp"
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
