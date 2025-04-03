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
    "4F33wtac8qrcSdY43VaoAhShedHcQCkrFoBBNSukeidtyepPrmpmdkbjNAwgmhgz3sMsUKBGDfwhYauApth8PfsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AZiEvi42DkfjF9FG44JXj7nh3RiQ4wbKtFcLjomzfm9P8RvNED38NEYbERZWDwELykbYbPBvRBN8PX2TdwLJW1S",
  "key1": "TujV4zbBxmQbiqi8MBH4yhDmnMSWnchqfhwomoAKNb5T3B5vzi6ck1Cts8WVmiK2hJHW4NjwKM2jav5uJzo3QBG",
  "key2": "2koxbfXEgLLeww9uiHAowHdqeTKAvX5w5LUYYftn9qKrU2i9bdKBQppjTNms8XhMR3QPaMGwAucputweUzQdZV8b",
  "key3": "W4d4ZQ3AnKvSnGJZbt3SYgnFLHmUnv8tR5zzTxvKfDW2ZTpw3tPfYkALVFyddBDLCMLZB54HqAxXZeLKZh8RAds",
  "key4": "2yBeqDMrM4DdG15sY8JLqqPc9moh83PFmeGVYs34zViu7RRuMnZzQVQDNUxk6bdtTcPBRYGiERfJQTkdLw3JPm33",
  "key5": "4rJpPF747jZxyrUmK5KgxEk9wb8rDDcuMsSfoPpP4qm7jxcCtJu9rFBT1SG1A5P8wdMmBD2xdGLBNvNX5267BgUE",
  "key6": "4cJh31PXzrgpxkZS4vTBBszk5bb3XpMCV4nGYcASA5n1XQGkuJPCqagszsHMVLPAJVzaG3SdGXFiJMrCW5fUaCsT",
  "key7": "4byTZQYHyVJZUUJQGpFzGz8KoTZa12D4m3E2EoWZQtkyfinAj4PDWCPac5wZK6HW3xwHevWUfpsxbkY4QmHzZYYJ",
  "key8": "2XatZ2Up1mRprqgJSG9B4WxiuKK2nAJHrFDmbstEzFaPzACPyujFGqSqpktiy69dMAvPwFYH8Vrr4z8QrtJQhwhw",
  "key9": "4gHQ4WtWJNjBWFhDXsDpKZwRpMtVdMoJNAPE5Ea5CM5vsAX2Xrs9oazd7jVUgqUG3hASe17FaotizNnF9yQuZ6fF",
  "key10": "38rGS8f9Sq7Z434w143bpukw1FEU5D6AjSe8zAJNxzM8KYqpd1otpAp8xXZeXEa2AYzbJbbSmADXYt5AAMoErA58",
  "key11": "3cxE3KzHhZmfFsVS1fqYyaBYKs2393hgbCrvn7SBqyDVjUPh6nPHPoZ4XxyXkABy7YTL1fKFYcr7ec6FLxNoYXWA",
  "key12": "3iEmqrj2DtmjFzP8beAuHsryGaoCoPuycDx2KD7513ELe4UuWTuZDiqyaufC3mo7X4viUTnNNxrzVK4LfiAJAn4c",
  "key13": "36xVedMt97DbxD5w9QnMDUfmjD5y3yijBraJW75WcQ2asgLiiF74SThGk3g2VbcVsSCNvzAgaDPrMXskSYTe7Ddv",
  "key14": "62CoLmn2fUH7nKf6Dbah9kcqFHXPJdPVL9yY3T8LKN24ZthyptU2BB44LbFYyfaVYNaKq7KfPpbXjDUq3eMjMNy4",
  "key15": "3pMQvUrG2rjKnzNGyDSfEoqp63KMs5ibJ8Zh9dpZiyFstdgtafTFAFVcBs2FknfSzGaSDQL9t2hTNGidEcCast2Y",
  "key16": "jyq2PNoeQsDDaCpMw5KqXS43JAAm8kMQ9oXVU5ebXnuxVCSN3aQxTXCMGxPES5AdgfN2j2Xfio6Noje2KZpGpGZ",
  "key17": "5jFPdV52kuV2g8p6nYhBaZ9wzKz65zfLqfgp1AG38xgNw7yysSuxSv4vvtfbLMSbow9w8YcxUZcrNwn4K5xCuKDZ",
  "key18": "3GNnDr4gRCVUumhn95gntiqAyteCRNLLpYWXizCTEm9XCWxXTjps55F6uUdF7ieXVsBFgJNXx4DkvayH7AXfT9Pn",
  "key19": "5Wg9QQLpVkC6tVPEjrioMfRRxJzQXvWgMT3uJWBuhECyPATeJFLmJd2PUaxFZsjEL9wsFJrsBpugvtLStQ288bvd",
  "key20": "5Pt4bXa25RPcLPfoMvqkreiUrnzZyUqeivfzTQHEBsMcrvGwTTxobLrcTop9jWD73oPBrQvDvhRJnfiwiFPJs5aB",
  "key21": "2v6xcyXREZL7y4J5C4axbrAH2aNXWqCMAaFeRiBFQi1EoNncvZd4g11uzAgWrXu5nAbEa5UXKc6Lqp8aKaT6U5Qt",
  "key22": "4ZakdxZHR7vK2qxhGHj2kxEyvxzywj6pXHhjgmT9x9sNGBWijQxi7vxZJ8RQvf5M1X2XN2TKXAvz1NgwvVzq7CFT",
  "key23": "F4SsVU2E35fWTFGvjs41hFyVqdyW8QavzVDzCwiPnQr6stT6d827YrFZpMcnVw4KC2a1DRHCYJZZJveY8eXJMmA",
  "key24": "4xRWokDGbMEDd7oK26uY9YLAC1hfDAo7Rvhua6rwAjXbr9JbAYex3KokYnmUn3wdUb93TdQcYHuF6ZYyDNGgXNXj",
  "key25": "445sqgXSABc3mvSTqe167pYQmAGMCvgMN5ZBf1hPBwcDuc9MFYootQVLuW3j5rUgRPVPvanBxQy9w7v9VMXKNjJd",
  "key26": "2K94TDbGftaVvCoyNgCyrU4TzTmfMsa686C3UxXUWA9DYqgP4zqa5tYofUpMbxfjKVt6G2QQQZvYXF2RHqeuoHxw",
  "key27": "3D8B5WHzm1zGonBzkP49cNqeadET7R8uNQf3dnhCWrkxdqFbs8f1VcC4P7siYh8QwBcDD5NctuQ3QzNkr9xAmmNB"
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
