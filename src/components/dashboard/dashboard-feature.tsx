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
    "4zGQ98zqusk6DroqA1Ayz1E4sydDdbRm8XjPQ5YNXMoRFX7Se67EPyHtqJozo1GzitAFG4mUCyzWLLegvyRdwDuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xcGE81s4rZftR9Nr3k9iiKxL2Z2yjGjCsJg8Wt4B6wFADjC81nqz9kjuqgz7xLfeDUSDMr1nXYknHP2UczYHxDw",
  "key1": "4yieG7Rh8m9DdQxPnjieABFMeSADuLvFWSYCT9nWe3LwofrH5FaBy6aVMpbkMDPVHUWfTXbG7Q4ZzfvugDMRMCpa",
  "key2": "3bDmZeKqfEMWZBAQPhtsmYk26KQ58wjxEcWHBmN6ZQuWHuYiefLoukPoHHmGWTfFfjXn5V82yqCP2VYn87A1zu2V",
  "key3": "4Jqd5xA9z2DEkRUz4bTRyWGNJqevZ2KS4yuS8N639ck1CCJUS511P1Yc8pAHQ4YVW3dGRREg4YzJY32Ud8cBDpZ5",
  "key4": "5ygLUK4utY4dQW7v6cJ3swPqAc97jgmJzhKrWkspQcRWRr3zDsZk3sz9q5zBUXQrHwsTh5o9ZMbmxDsX5FjmZ7zY",
  "key5": "4x9xLYaEFVmYbKUYnRAZDpehi8K8YtSFvxqeCgJ97gYFmLbK51dNpHrFMQ8ERRrQVZQiGsRWnrb6Hv9Cf7b7qkLT",
  "key6": "95cfd9VSwB2YezBKJi9Mn1ixTyqFUHbmsAeQLz9bwNDNDayrPd8EhYJTQ8byQbvNgJAWc9mimZGbDkXLUiugah3",
  "key7": "3CxvW6TZAcLkNpGXcsfsYJ3qRkKnymGcfjc3KXeAr2jVbgmAiGWB46tejzshSeCyqnMhWHuj61BBhiRVmqN1fjnF",
  "key8": "gvkLm5dU3mzBrUEzyx1Q1f8d1cPgEb1fphP5sHzCbmZvy3xf6ChEvMsrby3zuJy84vqvRujiZumyC5SGQTxK8J9",
  "key9": "2qeaKfB818JjHY1MrnaZR9Zh1Co51UZnQE23jqkArHTsa3mfqGP4LVAypEuhv2vb7iRUroyEeFkEkvcQeZ2hYzBB",
  "key10": "5iqabVxyrJvT4qAeokUHFgyXWDqqX64Rxd8eZsbtnMiEvBSvJN1KFsqcwVjKVDWKL2cpsn9crrAUkqLLGnbXiikn",
  "key11": "muU1o42EdA3kgTiTd9J5JfJCy82bz4GV8hDr9otDNmrw2bnVNvroFybUKw7BhjHTurLjqnJUVUR3wGQ1JGdgrny",
  "key12": "2HxBfktoqjm19pjEJaihXEhwJ8n1Gu5HEwaFdNg7z9Zi1JAJ9SJ8eRY9pqLRrR6CZ5B9MBn53eNgS6PtKKXJpngk",
  "key13": "4tB2myqKNEzvULf9XLoL7tqhvgFpmwCDKz4xCAiBZvteWMwi19QAj4MBtbsHbHqVPbFg4HaKd34FDjXfH6HByNiM",
  "key14": "52n4eyGhGVXe4QgTFQjErcnfXyRFKCnXqPjbpKUcgyBesd7Utm5Dxy1N4TgoEd3hZPGrGtopFxwrUZQBZHBxzpFQ",
  "key15": "4hM4TBY4Mxfd6nh33ZvTaDx4FYmDbdHTnNKJGa8zMb1a9hU7NenUcWbXftCfk5DTFqXmSHXrrbXmAU3bKKQLfmLv",
  "key16": "2H3EJCQoMaKzXAojHaybQz6vp8RQkiD9ftQ68S7BQHSMxGr3uuiTC5Me85hRLGvrAJa6rc1CzxtqaDuBXkJxH1Mp",
  "key17": "MdCDRjJXEtKu4FgsmCPBDN1bimQSnqWQmGTskzTh1JPXvZgo5MVMSpLcXJFf7Fj589YTxWTRYQmqyF2TaWxo4t3",
  "key18": "hoe5f72cmrHSuVCpyuWEaFswYKzhpaTy4VmtNRLX5c6LurdFuYuTDe7BjT8ruEByfCNPrTtSAzkqVq1dofevRDS",
  "key19": "3MHYtwnAFRSWC81s8dN7bafk3hCqiAfbpnGRbVjpCEu1Z9U6j98FNFfUExsxa2p1NGEr3M5uFMsLNhRQbokFMx2V",
  "key20": "9nQyjozP7c6gmMLv4kdWWxmG35XikRQVaLTsQZXDDPpwXUASShfaHSXDkFr1aDr4Mzkx5wv6oMP7JdM95Dtd5Ph",
  "key21": "3QLKsRTYN8rPEmUYcv7nEHHQopfeypP2LBt5pCzZYgyoqEfA8pRe3oAWJXECKeeFwaprzGC9YBUXLt4WH6JBpL4e",
  "key22": "43WBmBMbQBNoXPeAkcEB647gSZ45NhmNkLncej17CCV6vjRcxpZaq9h5Z2uN9C86EwW5HY9LneH4C6RJqHeA7kXY",
  "key23": "52NWAZbg9adcQ55meqr5EyPRPyZ7JPU7eMMcoMoSbySPxLYuKEJBVyPTSRpdWxw2BULR6SiRcv6dfiVX1APsnC2T",
  "key24": "4dVitief3ft4TwTXveX9ph1BCXAeuj8UoWfLmqagq8zhY6D6Jb2Dr9JDXTEj22xc7tHFPYCtX9MZq3Q8k3ALVVLY",
  "key25": "4rzHcdPZEiaRhYc6HgVQHH9GC6d8LUVzwnXbB16if8N2bJTDhNU7ofDcvwYcNyPSqpMaRxg3HVepNg3YzMKcud86",
  "key26": "Z6MWzLbNAiY7qz2mgBbV5p9vkJobYqRsKWXv374kAF8swB8EJJwAb6RG7PTB1QWmeYvRHu28EETPNCZyGC1rKKE",
  "key27": "4HRjo7hWProTU6Zn47Bhw2sAJLYe1FcfgcLDCDVVwqGCk1EGi81Lco1pdNr7HuSBwycwrJBSy5JpgKQh5DsQxVoF",
  "key28": "QZJYXAFoh89mdQdsDLKENLb4NP4M3PpkkHAoCwupT9bLEMQCToNxD1KJxRzMyz6Qf2U8cKN2mW19P8ospQHjLPh",
  "key29": "4E1AVMtfzpSbk9YWYFbAmtZwEVx8SvzaiXcUdoqbUGBJcXSPqN3pXsWQ982p286xFH9krepZZVS4dGaRkET6i56J",
  "key30": "2nrkpmpESp1w5z4jVjS7PzEYBTjECfzEAo4YznNoAef1jdRCabupvvPjYjjDzqkKYcvLvQSUVDJgE9QiVhNG69V9",
  "key31": "2324ygWmeeLfbiXEQbA5FNnBxQqZFJ2LefbxUGJgx6k75uxPehfdSvpmzuXnNxUsyBm37bSvzG3PHtjYm3qKEaBq",
  "key32": "66Mmp7C2fXraEuRvtmAkNFCLhtoRLeQd2SdZfXcLmegUqnHLE3YRwKW1YtorusEVnwmEwX4j7sJ7CbZQDvoEneBF",
  "key33": "4gXga3iLQ4oDowvzH3bukbfDUGys57PYArohrj78TSiDRLBqy6vd3S59bLQsnREJS2Qwn7JQChEC5ZguaX5VBsm4",
  "key34": "5GYysyWgeQuuC3ULsx8NQme5aEottu9A3EkoSkHgNfZL2PcqtGZQWaRGLym8E2D5k7NLctanqGZTa75vLjF1f2au"
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
