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
    "2iRGmpryKp4WntfxS6uEpjtAj8WYDgqwpgyPAk8qxW5txwvUdgQrUhHUBFigqmZewiPB5n46BcADTXVpKWWLSFwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qDfxkwApDw2PEwrfBoTUyf6vY4kzxG5YtaBmdiZFdLo6s8PPdccW5u2VZZb69oH14dVL8sjFhuqzQA1X8CTG9fZ",
  "key1": "UQJa4JyeqrueKT5GAJBG8n7oRWJpwQUt8tUP8Aq2XJTaamhYzUZcjkmGEisGHW6fYM76CpF3UJdwkcgmG1HCDUe",
  "key2": "uPzcPEjg7783hJgzVw1Eh4F93zicEMaM9QKnFtqm7BCfs2LRMTnjjWxSx88fSYbD9swnjs89LTxYJPJmSoD1bPL",
  "key3": "XyNHJSXnQtAequAJdx7MbU3oYoJjoHeTLBuY7mFMU8thSwTWs5Z2zE7hVzVwD7s8Qau2kV8tPrm7M1aTaA2Dx8y",
  "key4": "5eDyaEBoYAT5wucy1PfHbiRBEs7BdD8DQz8GJ8ruwtmccRrLtu5AHYZu8YfvCz6fKbttfBMeJSAVckgSWs4GLVfN",
  "key5": "RsUYwujuQeqHeb6xNd38z1qksHmGuPYGkgugCKhM6vX9stzSZyWSvMhhfkLyenDEw5Ezfa9bAXajSoFxace4nLE",
  "key6": "3hB3vftDm3WjLqxgzeuzj2LBT13b6dQKCHhpj9i4BtECmTW7nX5un4pGxebyZdJsjnHV9GF2ZPDSAqAk6sq8j54S",
  "key7": "4R31P8EevuBKgMqQNemLqf6kUtfBeBMtgBSKpWNssWAJ7oVFeY6DsVzxcy83ekxaLsZ48QSaZnfPDUNCZAss95zy",
  "key8": "24cb2NsQr4UjGZ4kvVoNMxaGTDvE7EShTp4dbQrVcLmh5vZxDk8aycTknMWxhwEavFVqQC4am8saa1xDof2LhjBF",
  "key9": "345pH6wVQJJcCnbLjc7WNsNTVztLeBykm8ZYZecur897cQX4X7twi7f9zATRPKCYenivaeP8CtRN49K4pxKfi38E",
  "key10": "34RQ1VicFEk6Me6pMcACd4eEBDfVqD3bmJPQKMTtSiVbFJjnX7KDyzYgsFRMQ4nfpxS8oPFvTrnwJGja1Q88VBXQ",
  "key11": "23jksqu1sL9Y65K6NLVEa86whbRRwZwMdfw9FTL8Ks7tHjdfNSbUZPv33DToxbeayuD5fdmZS79VzF8ZxPidnmEi",
  "key12": "4TusJjr3PnoCgqLgm72NPivhjSL7bta3wqYmw4oFLv18HJDEcaDmhCV73ZXkcU9vuvWH14jp5parfxJD8yzvXk5v",
  "key13": "5VJxkQyzSiaypqkW8YRPUJaz3c2JQKRGdPviQBiwDJiWokPahAgGTRTxj8PzLu9U4f7aYEaFRWeyypyJzT68XfGF",
  "key14": "BsS8a1K1GbWd8y7mAvxtUZNZv4ednsqJk5WdDKzGyVuE8msyRoJwmKSSrYCCm7iDzTA6fLRyZbru3NZJkRbxzHQ",
  "key15": "3cKPsNkVBo1mixZnL5kSUS6p5WryMEgM8pJ8bKvXeN31xcu4EktEq87kumF7VvX5t1gKTvgxrmSu1TJWU1adTYty",
  "key16": "fjwM2m2d8Sy9WY9JtYvua8B7qnR76BUGCyQAVpefAAgi7b92nBwyEue1bAqd84cNpnns7ScBmo4xshxJw1qqE3o",
  "key17": "3msjnXMWFnP3BJRkfDjwWBwbRv1L1GSw9acn4fDvJpBrbN1cqDyQrN98poWCDJMqCJidZKsBRW7HmNHCnKz5EAPm",
  "key18": "22JeU9KiuvXuu6wx74Q2aPV9MWdTcgEwtx9ipXwquSGux8e9c24D2ocHu1MhFTyATLau9yboh5UbcDT1aFKBg7sX",
  "key19": "5QNZnoQEi8N3wp9bBAfYo5Hh1mNJMmA1wR4mAz18k6wdN1itwAdREf497Wp6qdAoCbMSHTc7w21N9c9oQNsugTQE",
  "key20": "52UZwPN312aGAD8y8Yy79LtV3j6ZULxJX9jsYDp5b86YDLkectMoUMsm3LtknvzYUVnDfc12c5xo27KbBsRpmDRD",
  "key21": "2APojGNYBeQY1JThY1xAMyGjG6MSs8iqo64PHNZaTMeSGyr349NLfoYZvgMytvdmFJRksZC9u2e9xyGFs9Zdc8De",
  "key22": "5qD8MtdzEWxvcPh7msvdKHf2vZ85KH5BeEzsPqzcSvikM9EJtbBMffoDsvA8Vx6djc5PEr7ndftzuw6hTLfktNbA",
  "key23": "4SRUEcvkap8MidqbZTmNNqiZJvvwNdvta61iwmqzWkfr3fxmfAuXWbgQsn8pFmromnN37XYAFc8Ri6mFiDXMkQCo",
  "key24": "5a6U6pvWbKpotfL65KAbzeHLArKUHcuNzVzcXhm8GkhasLdf635u7zXEPgMPGMxpG9ary1Y3WPJWtiUQhpArf9mv",
  "key25": "2j4NQjDBjYmrknGHjtLF3Na5fW7qPUvcZnXESP9fVFiJnnP5TzC7jiQR8xUhU4uvJa8D7Lmv6gCXro5tLxzHDScT",
  "key26": "3NAQeLmYbSRdvX79iCFFswYcJiAhSK19CUmtaDWh2hVFPZzP3PuTQ2p16QNDAhqePXKZupsfpyMFGVMqPXSUYv2M",
  "key27": "4tWmnAWjFXxwWr9FbMYQVXwT1v66zW97h297PYEfqu9QWDhADaFap5siQiv7wph9bpzfuiYGoLFZNrZaRdE8vUW9",
  "key28": "4UqmNvNkrtgAxTvM32kQRCecrNitbU1wD4LEBNHL9RJy3gtpoAco5Afd9HVx5oyzPu1Q5bqpcJZZQBWtHbrVT91Y"
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
