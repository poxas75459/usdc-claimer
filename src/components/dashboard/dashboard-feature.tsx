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
    "4YQCMPV9uuaKowqSoMRML1ZD1ghHN4Btg7kF52rpYyLcYFyk4kycttFt7BW8FyKJUURdA4kYnYu2rDnk4rFTXzXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36YVBw8fxnNLP5JrJAz2PJ1e7uF8WyaGzjrPvDUZ5uhuFCYBnLK2pbxLZZhUxHcV5dpJxhy9NLwiERXuKHGBQjHP",
  "key1": "2rovKPK9Z72Fy4i6UKWXK6U956xqDuGB6xJ49n6ABy7FRidPsSPu1JfrRE7wt6EtTdkbLLSVJuBbjfaQdDFBBtjK",
  "key2": "49hAqbWikRNhZvhtiTq55B2RxRD1HbMH4gRpVFLZMsRU9xL8fm61WKMy8hGbjF9fwUxjuANybqoMxjgTiAP2yaQc",
  "key3": "5VPnDvC2amP5SAKUvDcmBtnvkULww9z2X1TXmX8kbuC8YThwF1zM4wLQoibSwUdNEAAVdXNDUXGV3gUDBHbye9je",
  "key4": "5iXebrp8aQM1dB7Lf4wyY1rZhAM8i6KjEvUtgiYVTdw8da6CZJXCZSYZaZYWvsXYTAQw6EbeNwDmgU6RqmEw5w4r",
  "key5": "44sqboZWN3t6jpJo8yGbtUwWi7cxgLt14NXRw6gcD28szcrDXdVkRvxZC4SVvAUfUixsk3nQnn7YF2XEGmTi1vB2",
  "key6": "36xW22sNtvnoeQEdTxmXg2B7EuJz1gqvKzXCswsKC7corrJqhPmCGkfat8LQrSPKxK5qKARJ2XNa6Zsvu74xGFjG",
  "key7": "RfWe1WfqHowVRXSjEzdojoZ8emD2gzP47PWSBBDWcuAFAHxnAkS6QaKrtY6qrma7DeE42jUEzknbPoyYDHN2sgj",
  "key8": "5akTdrJZt6hjHr1WhX2JGDge5YT8f9qe4zswweroHve8aSB9sbcUFbupEJ2epGHBpqpZmqvCY1mwik7niL5k6LkU",
  "key9": "2GpbaTBUuptKBBhe8Z8SnyB4jDkrTDjsr6HziQSbFd4w9hEfRN8bC9BqRDnCUmwsibkECeLdkR5FW1AmVipXMJVj",
  "key10": "3uhYke7WvhpPnTvMkSYUnS7uw9Gp7x9f5imWB3UySxNZPUYRD767KjyRok4xP3G3tRh43jneXNeGz3Eqfn3xYcBe",
  "key11": "2Swkor39Qj4NmARTCrqWGX7hU4iJkWJpmn1rvEzyD6FgBh1sHLhVHbxS9wUhKFU1xAAATB1vAPJKFFC5sqa6UvBJ",
  "key12": "5fqCJpK6Er7ovb17jw6NbFK74VMtDvbTma5Ts6VVZNpRvzHovMEPqGMrz5CUd9MTPThwSc3kMqXTGQuz8z8mbRV9",
  "key13": "3MrhwSpxAqpY1DUfdBv7uYQBeRhr7NiFSJY1zafZXHkaHNxyjzHFd6CMqVr6CNcadvUnqborHAbq4tHiWyiA6uHJ",
  "key14": "5ts7epwkyu7gnhoNSknCjBgusRZhHpJP7vYypdkYL2z7pTGpWEVzKHywhTf8qUnAoGhq2WRixJxfGXP5Kb21YhZb",
  "key15": "fFWsTCQSDEzuvztyfVp4ZkFRD7xrkvgbRBpzJwS6XUyBTCS8fjqNEtKfucfAohUhsLuV2FyMC2SsLBh4zKa9ayC",
  "key16": "mQD8wSYDM517AUTB2BVx8JwPKoXn7BFYQAMqtSCNxgPRdYskbumLonFERL6y6iSHSwqM6UaweykADivifVtJqjV",
  "key17": "5SV1r7Gt2FcuVpGPKhXo8PjotE227njhkPD591i7B2U7GPnCQ1mu2oLoBr3PvTVZHxQNiU7ayLTT9jkBDhviZvVD",
  "key18": "26WZDZ3gzxCx9WCXxnuDr5aMaaM54Qh4RXtApGpVD5bRTxmHCbtf3bb2Qsumqd8MEZKzJZRWFm5msDr7rs8sqyX4",
  "key19": "3p6rieqycJSYG9h8bzFcpzthEeJKjBuJcwumqocGaDDbD1YhooM4aSQhN48RFjdF65WRGroDr9rMU4JRVe2t3SGZ",
  "key20": "52qhZ3Wh38NmLocv9hXJKYGQAWACaPyjoUcE78pwTYNu3swvWCAB3W9wnqKwWuPZ415W3k6VWmUV1Zm4ayTkGvyv",
  "key21": "46tug7xfiEE3Sbc8Q9sujrvqxYjbamAUjPYH7yDamnGC31eC4PoKdtcVx81d419zXXXQrZpfjWE7WqecUbnNma8M",
  "key22": "4hX8QAEag2qniySwQi2wM2J5oSsxgPAFSdGJhxGvs7nQMLsMVQkX3fjMqwKXghatJnmN6RiCwb7Foi7A4L3XDPNC",
  "key23": "32JGfnif7dU2xoUjDm7mhVB8SUcMzaf1KY13Ne5vt5fcS7p43FTZxbBWCGC6VyLfCnwVrLWspbEiyuGd2MDEGR9D",
  "key24": "3K1pwQ7L55DSYQp3uhvZLs5rXMSRLuGgMDoaBCW16fLrQkBBfFmj7opuc1zdV7Aa9v4nxrgmqvdtL4GYUZCqn9u2",
  "key25": "2St92AmGZtqDXGp42p3sPfZqaZvjetrCKp6jD884pi1fkJ9QB2FwaZVfhR2L7zjsTt1D2q5FWa2P9sj563ym1rv5",
  "key26": "4DffZS9VE6WjX6e8eXPHem1jxjHdLsDS3LmR6hkLv3QEZnC2JRMgE58f6nFvRgaK9P3MUM6dQK5o4uR92d62osLB",
  "key27": "2yPxyFvWP2vrwR23rkajFWrCSPHZzznJwGTMktHjorXKpRv5nw8VosW93FxLZfTUnjVv5HdN8jFU6scVXPXiMRme",
  "key28": "5gTYuNtRqy8rS2AAbcAtfKVUmMFEwuZG9PJkeUnfCzvqztwrtYwkphK4D5rm7Zt9AeWocWhQb2aqVKCAwQhMdrqP",
  "key29": "3ddEo1e87EamhxKBsWiSkLWEYmcZ8cjG233YhWRCpLyuJBwfLPWygzUwuHZfQwKcGHHXNntbY4ipfEDtSiQZ8DyR",
  "key30": "3rYVL1cjMQwMi1c2ZxKhNN5GfGqHPQ1a4oPXCvz8VftAmNVTaUG7cvEnX9dRouSuNmbMUYrJgHSAeYcAZWopmbMY",
  "key31": "2tHVCyuiK9h2dEFWwPaW2SLf6k7QWCcGdxcpiXbjJBD3PoJNnKbRgjkQCsp7FKaCPVfXH3GmvijLA2H6kHCfNYyJ",
  "key32": "3Tpa9DbMZ3yBCafvrotvF7ReYFyE6d8MkrtpWNeRcyQkaRSGC7G4C8fZhoyBZ7zmgqVN2f9WsLdVVTXGd6Enipod",
  "key33": "3aLwpRroJFBQas3a9EYN1n2bLd7eS2f2ySAZvy5MsJzDAuWd2mv5P7opM2F3CXr74D5kUoVF2CDA4aYfEgkmZqSZ",
  "key34": "5NosEz2oUWYKe8hxzVEii8F41HBePdP3nFJ9qL4cCGKvGbWN2cTTXLQ2VuSvC1qPW1ZmyVxxWBHWcFB7KE1wJaNi",
  "key35": "3BBt7QSSvTe2aWx3kJ1v1FUYtYabYGacYmXhHrSj8PEAMXMyFKTt8v6DvbnFAxPeeAHWSpcr5CN3czjrv89aQaF",
  "key36": "4ixHjyMhb9d3nR1E97UzC7CqhRTw2znfuYLXB82gcA2VDJZfZ6X5zmSRZp3w712wXUsm2TDJRnEWUmRRfTkNr52m",
  "key37": "sRPyNLuyYNGfDP2267KTpqPYzfmLrzq5K36jfr6TgmVjaVchDjgDLvaMchwfnUdoQWZBqWR42qthqr2jZTPNDxt",
  "key38": "2vJNjx6Zmya9S7JosJLPSGgnPEkiC7Dfy8JBsDAvS2nVjEsb6wajiajvLSDmCdD3EjF9TSxCp57a3vHapBUSmwui",
  "key39": "5E1VhtdefaU9NhXKYYiJ75XD2vavnoFJ6fhVSa6x9Ykkpi5kKUG2fdwy1mC9MR7iDyxsJezLRXMwgtvdQ7ogUfXr",
  "key40": "T3xCSyG64frkWMxZAc58iShrG5n4xDEsMzR9Fqd2CGMfQCezSMLUASN4VPcS41WEWzxWQ1aGY5FZE6UNWzraSqX",
  "key41": "5pxPEGpogBU1NocyFapJxyuDhyowPWjJFobCcSDeWmjQodyzVFaSSb6UiqtVwxK6iq9cqgHjfuiaQtg252JdmBRP",
  "key42": "4LS6B2RnfvakJTe9cd1SHdBqEeJ8cABtxfszHgr32p11EBDAiKrv89vbdtqyaguTZWoYEvr17ShBhpYWA9wAR5K8",
  "key43": "21jQVcfr3H92VNRpBZJqyvRdshqvAyKAqvjrCivdfKqHwZggSM8iMQY4W7FzcVztnVMUp7RD6Yo3nD2YmEXjuHKT",
  "key44": "2i5KxHBWmmLnCmi3mxkvRJZgHQk1s73vryLPuvN3v6UDSfGjfzFZd5C7UoG1P7KWNsCXrE227ogh6fX9H9upYPg6",
  "key45": "3XVJJ1zFQVzWMN2GeihBrkUL4KVEBcR6RUANFH1VRkTDt1vPoBMBNaTCXAGHwCGWrsbu1kmv8Dwqmq2BTPLf7Xv4"
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
