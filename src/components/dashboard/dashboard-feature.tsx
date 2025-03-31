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
    "4nJLLeYsL9y91YjD1qVGivSiyymooA7mskgYhxxvAwck5296LHRKJLNUm1tb328s1VHDZqhR27M7k6fDacTQrtyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LSCf1n6kz34H1sp4VJ4aHhnG7p5LwNbLqjMc9PUbfRAEJ9BqcaEhxgVtRf16ezPB7vjyKB9re3HikCMpnrwR4jd",
  "key1": "3WRu5iZkTREubnzFuhv6iKDpWzRUZdT2ujM1hrw7w9Xtjtdir5ncwQFCKTH7nCaWgpgmBXvdcEpVqNMa4FSambxQ",
  "key2": "5nNDsUXxT6TE1BxuGu2UvsZdmYkFqxTAPTkn72fCs7kN2L9wWmGwRC6AzHt5QhvzhjxfTjy262t4q6CBY3TMxCfP",
  "key3": "2BYagmrpRDuRuaLAWVCmrKos4wYKCBzPFrrfmyrdtJ9Ypfm4ha5sh9HqAPCVd2UJXHwaB9EyckAUyaUDgwvCpwxM",
  "key4": "42JNi44AyNx9baV1m6oiaASW1byKeC33W2wSRwTtzqaLwgkxhzYbb6qNK6zC6wbPdr4EfC8GSk3DQhtQ5KCeec6E",
  "key5": "4pmnP3bKtmVHLMrEkDjoXEi5W1DYpNx1vkWBnZ2QSWJEpMoMGAEYUeRcskj9u9QyELaki7Qwet96PfPQMTnLwC4F",
  "key6": "5agHm6xu9yyWqe9UYff366gv1d9enSnUUKVzYKiLXRqWkaK8X7BJUPG11ETcZ9TGqq1QnRzJaEN6zkEzjhUGeT4r",
  "key7": "2pemaRZEJ7d9CnvEKWGb3953ZYpArHyQeHxsLxsNrGzWGU6sVN8rikR3X89fV8qkzDL9H8QYyBDoaC2Gj4S7ACM7",
  "key8": "5tnGtzHj8kNWHEWHRFuCcXuY9rm7dSQuS6RErVpmVcS4LVqHKSnVGJfqbpkKRKDqddjtaKScSdpKV3ePYs8gEW3J",
  "key9": "2d2p5PkK1VgPqAs9nWDZmrCKoeALbbncR6d7x9YvNrPVK3ELxAPvkGUmcm5YLV31m7dgPnpMM7Vdu7Tb2Lifk4GS",
  "key10": "4cyWAcuUZ2dXw2XwBkjcQUs2AnusG6apvE9pbYygX6zB7eLb7HKFhZHUqReiHgMmyGB5Bajy3v2HNJEGNeKBYECL",
  "key11": "2CtPEGufXE1CPEWL59mV5zvyiS6bve92ZxVfdNWryMTu4RhAonmYGD4CiJbtpUccRN4ERee2b9KTaYgt3ghCy68K",
  "key12": "5WMtmrngpZvAgc48NW6zrBnv1ZPfgakQvy5QHn99LTHfWDpBSCa2StVGzp3DyxPB7T65SWH5zaY4Mz2L2FgGnwhY",
  "key13": "THkdvZwe31ewC2eK84FiP3Vs8Mxyzp8KFh4SvuscYV71S8a17EbmG2uKpav5bnqH1GvhazUjAj4gXEgYUzQukjr",
  "key14": "5bjtNmTJE5Y7GXvfLyWsmwByYNdghCrEnycgp4j5pXFZAhMFuqCEJ4Mf6UHcWXvbAKfpkvozvTBqaM97JUkMsS2x",
  "key15": "45vqxW5eRygUEB28SgQRyhWbUfDT37JEronNEbkbkSdRkpLZ7ruyAy6emCDtcW2Rhm49xQLXLYxASrSynBuy118G",
  "key16": "45yP4rxy1A6ZaQxd6eCMJEbs5wZrcLhSjXQNWgHYF5Zdr9rvUAwkBKE6YRDof2aDGRkFdMNQtxaMQ7oHL4EcZ1x3",
  "key17": "4tv5KXaZ9YqvWeHkRL1eKA1FHs8C9rZutCesSTVbRs1Cc9LLBZLcHMKHvJRRLLutjpYwZAsHLp7ZjZuRZUAxQyuf",
  "key18": "bZxc6ogvNr371ppK7dAQiJQspYaK7iAiLNM5At4N6n8fKTBRjb9UPjfQ6Li57q7qGC6DDZhB1xkDJN958jVuiBa",
  "key19": "4VyAbigZtbsReqUgy1XtozQhKKpic1GSzFf9u7NDUDxp2fxpu2NYNhCaCmuU7HT73CmYo9bbNYF2pacE5x1wqPB8",
  "key20": "4Bj5NS6J4YFnt8tPHFWZqpcxVpkcUoz6iqJpNSuiM4ViVTXN2e5xQuWah9K7QjVkWpjsnQcAN2JQsNuKDLRkGWgk",
  "key21": "D6WgWCwQU7d1uqsR3evj1LvNTT6s5ruGBm8eF3CRKJdojfBoq4nyMWHWNupch5kqe1PoULmujvtiZZuCkXBVa4P",
  "key22": "5nnvMxXn22HYXVRGjGQJvoJ6WRuhMAqEqXtCAzD1WJoHYF9NEig7Yrz52RZQ3szmYuBDHYoaixPg4tFyuMsBwq8V",
  "key23": "uLwZoax5CuN1CVqozL8i5RGa6gofTMbwQXFrJhQgeArY9QEyRwEkXWA9agnXvvwc1NwLRQ8hn6uuHVQ1WpJj3LX",
  "key24": "2fhiCeFF6rp91Ez9nqbCdvvhngm24vyqQX1qdcjxtJHKf2aBkckUGcLTAsiEaomErYDEhEf1pYosDNVmEfdWcbYU",
  "key25": "4F9azcJp1NiFyoRYM5aJGHkmQHYM2stCki6z6DksUa9KB16PHHFajTTLbQy8Gv7hwtWydpmhfkVqbzacSQjo7bZC",
  "key26": "215SosmXciY346JdVwB27orsxBZNeiQcjU6gae9wfv41kDVFqAXqWoSFmvDhr5jrz2sGyzrXajfgxxsJcV1osy6j",
  "key27": "46c9YE3Mp7CVG2Dn1vPoMHm7MqmkAwbJfregkHHoeWappwka4FdceJ6yCLVHUSUe1AkKVKHLrNAAv43mxV2Eb3Ct",
  "key28": "5wZg6oA8f5k6n35egGbcmvorYSjhmeXS6yMoEAVTHTjMGswWCKDzN9eB78LTKP8yFJXHBVPYm119tsCGVSaFz3QN",
  "key29": "K4PvshuZhxJrdX5rpWfUtUeDnXCr5DFBDPYZRuKehx9AvBqCrzY9L1whegxxNmhRLx9FAu3pjeBA21Hz4AEW1Pf",
  "key30": "2PbgxyK11TY1ddX5raMSpTu2imHH6iNAKEpDP8SyNmYTgcmEvqhwr3LEDnB1dsbdeP1MxmMnMHvG8JxSN9nrG5XP",
  "key31": "33kXg9KPFaEHBS8jUHE6bchkSDK5pScPEybaMVhJsPYfAXL6fFZJWmhhM5ANTAvmBUyTJxs9qPq6krKCuA7TG7qE",
  "key32": "5jWmnp1nUDUBUDkzjsqaJvdiAAmoQMUXfPAimsfZzu78Cx318WeA8XUgEfkZs2MmbihN3vbnjvWK989F4JuSVqUP",
  "key33": "58i9mFAT3Zj5nk5ZcAVQvnbCg36S8vtnko1cDsAbQcvYEj2k8Su3UfJU1y6B8bv877UNUUwek3aazbmc71b6AG1J",
  "key34": "e3H2EbyTdDs27zmezEgMfFbuuKfEw8EFTtevxXfbChEWEFRDNK6gW8JxY7k5sH5eFJzfBNkoVein8YQ2RceTWJF",
  "key35": "368F3QuS3PjRXzZ61k4SnPPiPx661S3jkWbS4kroSLCa6iSuq7kScS1hSBSA4Ke9js9T9B66EtQEUukK8bPiqfFY",
  "key36": "2tbvphu246CyxPkiBLnLR4MEqZ3m9sMCpESfACyakPYN5zA8KXpgYaJCysJDL1iRgPV6urSxjEL83dMKwLp5eZFY",
  "key37": "sVW3zCGhrNzFmAoi9A7zd4p9hHLLx4Ut6Qfax4QbhTo8DwxQXdcYYP2JHpkiN97ruLCnu4QRha1FNhLWteQP2oZ",
  "key38": "2MWibtQEbtzurBSvZwZXHYNgpcSs6Q5FCSfZY1PAAb3zwKbYsgrsQUekW5N66Bt3uSbs34b5Uj6nPhtzYUH759To",
  "key39": "PYAWf8ABWYDEVjz7rYEJF2E1qTbmkDpjiNQQVHPB14yt9h9hR6AxZnYgffSJBnML153YU16xkwHZknKqm4MLSCa",
  "key40": "2AaZyytc736ogb4YRkjaWQa1vcb3vneD6PPcpPJN8q7fVxTX2mpAMDdg6s6bCXZe3UmHQgzHfkJdK69879ZJRfGd",
  "key41": "5KtLBwjiCBi2Y5LEpegfqMJ1gF4uhRqjGqHEsGoc4N9gnjRJ52jYiCP4MGN5pkDjKes66DmRw5KHvwy3ZX21Y8ow",
  "key42": "2KruGsXvXRUFE3ndX4NkTYkncZefVQoS2tUPmhvNMit6wS3PyQmstNwwByZGftiV2fZjt7yahxJdrRgJxxEN27WL"
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
