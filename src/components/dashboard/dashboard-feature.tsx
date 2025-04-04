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
    "2mPqCzg2qdSFQmv67g6qm8N26Ch68W2MidqJqpmjHdL45YqB4bwVM49571Z3drvSNVEt9dX5rFPKKxX8x1KxEdsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67A75rbQkxNkiGbnuVR9R61x1VswhjpsYXMmmgWsavbTtpjSqdq2aA6ja3hJuC7CBfMi521L96sDydvZtwf6SifT",
  "key1": "5eqGhqop7DBz2hcN5aRfpcHgaUxuARKSuPCABK26897BZ8Gbb6o9Wc3pcKB8WPPKcCjbmjipqFDbtjLbZUpvt9U5",
  "key2": "2kBBpicSEYQWHqvMppC3SmoWYdnpL4YBocNrwiWu22B72ye14V1DorivzdGbwzEDfiNxfSRe1ZLsPWsz4jhiZLUz",
  "key3": "UrDRFc3gJrE3eStmvAi8UaSUgoG4eXJEBm8WuRGeAHMgxVDYVvdwbbgeUABX5PB9YncHd39AbbqmzTv5VaAgyA9",
  "key4": "3NLHxPosfNrxFWBthxC7fRFyuEe8T2Q3rmUoQhMYP2vUQyB3AjxF2zqeWES7P4dV4svLmMqYm9rq3pBW3iigKG31",
  "key5": "5BkSrCUeiCkM2vKeX87Mews4eRRVoC6xhUyXyLDq7aSXHQgEyDujqKDTEUX222Yz8s5ddoyDLkTRUpu7Vd2e1Gn1",
  "key6": "4ifBzDeNtdFGDowJsgcbsmJCvbHjBQ5X4WzfdF4qQNzvPtsMniGuYgRw1enfhGLAQ3koxTQogroBmy8B1VqAJdvb",
  "key7": "5kSXqvdvQfJNGJSC9vsZQ4c3Vhmnn4pMMJXqPedijEwhGhX4DMvBirEdpHpcCum2XjsH9191Jhd5ojtsGjWEst5S",
  "key8": "6KTwpSQZsM2DcoZU3wBx9bGiQy757KypX1aCze5j2WZVyn8z3cEpRySoN7GQ8J3NoGieu6tdz4NSNBxMhfS9Dur",
  "key9": "5oYSACsDWAcrioS7QJxY1a5yZmNFXk6tmemeHXkTnYqWonUqmh7BvxAJ1NVGxEdWJrvC17FdpSEEheykt9RhPtoz",
  "key10": "31Q3sYG63R4C8ZaHeaRBeorcipgFFaBe9Qe5etejMmdDXFhcC8Searg5pPbgNasktpzHwCrgAYUosydaQfer21Wt",
  "key11": "BzuejCr4o8S3Noc155SLvTbczzK8qkDBnkRbyVaFKoPPa2W3Vg7i8ETZeuMsj5xcAWFQs88hAGprbG4bkEnjZsc",
  "key12": "pH16uDcmxfk31ste7JfDpNo8xLragSKZPbA5ZLNm5bJLJeafV4E84ouGpgTo9NtqK737hHRAoM2hrH7Ue1PSEUB",
  "key13": "2RBp5L5EGQNCSKNgnSaxVHih8bgRmASB1y5S8nXYEYsfHcg8QpSPc4KqUc5Z5h27CxKnsui9u3diCjkmBKjGoQi",
  "key14": "2DKKCddxNVxngrfFctN6KA7CppWpQYx8UfwuKeCqb74f1ZTac8qUMkfaAhi3z6HdHf64s1pNHVY9Q2cdf7p93gas",
  "key15": "2cmscGTqxCkqyipAvizyJrENNRiNtjEv8k9HXkffvgARru5epW52CpQbNnFUgm1aJC1koAQ4ebnExcJbs98tsTjc",
  "key16": "3rN4DepprypBmZvys5CSEDkEzAEQ346mows5UHFvsLZyw8pCGGPs8MAgjgEEq5S973qAt4jdaPk56itH1iea7JwE",
  "key17": "3rynn1ZBCGJqCh9Bh6J2Z4RDf7G2gPJJzt6VneyVPJ9Un3E7rAxD3vCy91zFW2bk2BDmX42NiT9zcJyhuoiwK1Ev",
  "key18": "247XbRtpfCJU4AzfMVHjJ6WAGHxwM24fRTgscJd3Aib9UibGCBZJ6s1nX5cXx73trc8TD3xY9ZDwbtpWKkj5g3yd",
  "key19": "2dgehJsHCdQNGCPL1BH43TuvNqRi5YpW77oQ7RvFx8QbNX1YZ3FDMjaTcmA7DYQXnt4F9ErnY4nXPZpEhy7zL2Gf",
  "key20": "2QHav8h2PuqWdv48ASDAKeMskvsXAmjpMJqsf8ykuqtiKdax6Fd4oEPLA2PWNgB7tTZBgXnrLZx62UeLPQ7eHeu7",
  "key21": "41BJq8AeKGJgoZZ84sGsKZamq95EW6a16giwFfQ7SKnR1cVgUis7DN2ZUbu69z6pazRcw3GrPnnUE8GhASaBiarE",
  "key22": "4uXHckXkLxdJkKrHTfFKw9AnpF49GPS9cPN9KRDmMuwbD5AzYcYAcCkxPvK2MCDf1vbcJd92MkmBcMUsL8LMu76B",
  "key23": "66vDSrUToS6FRbdYky8PfGvtMJC5U27o6EdfNb8KMEAFAL1ThbdXRE6ienGSN31QVw8rvNahwP6m1F5bsL3qUktG",
  "key24": "4HZG7iExSGypbXG1BSAUzUw22fFgtBDBm3rzXLBTfeM4P531RX6Qnoe8Lktm31o9kQ9HJAVZrDzz4sz5bPogodFk",
  "key25": "3g4RVMFVZRZDgWYnimY2DM5cqw45z89UJc41u1rrrLB19N5FWPwmZVb4mfoYxKYYbJ5vw2hHBDwFzafPy4Dqk9Qn",
  "key26": "3Ysfifwg6wmEeUe6htZWA33TU8UqxwK8srqixdL7K3FhsGCy6tLamXSmcSwYYV2b4t33FhYwrFeDmkEFGvW5aH6R",
  "key27": "5EV2fvzwHfaHmnCv9YDWnu3WS2H5XHjSVmoQrNcVURN1MJ7PGVcxvRAZWZUzWJUPxu13JDBGhjUPgoAhgd41Cou5",
  "key28": "4PaeHzGWPcfst9UFa8LxJXJBT1YtV1UGbyFtufkKy9vXbbEmVZj1ao8SsC69QQwff2bQMbqFzELqKjpYopzfUoKW",
  "key29": "H95H1LkrUZpcgEZZ6jUmuAf2WRaAB9fuKdiaBDprty4uUY3DFzejNdsqgjRtMwiwUE7eJMZakZN8E1edAZbDhj6",
  "key30": "4n7kwtbaFqsyAXcUskmRHV3rBF9zPsJjWH7rBUV49AisE4qX8XbXkTktD6xCWucBS1CrobxbLfeBu3HwwhREHjZn",
  "key31": "AHW2EkMWRWhcTF3mv3DFBNTFz7FtnfeuKff2ZSj8H5rLs1oBTfeJAhkJ7LzrrXGNgSi6otVHN4Y73J1qYhVW1C7",
  "key32": "49Gui4GMTpASQDNSspLaey1LPbeVD6goRYw8JBNpsvvh4Cw2FnzDob3YUVyUSPxqEUMf53rKcGJHdeXPkCASUNMz",
  "key33": "FYo4h8RSSwy7tcQbRFvshGizMBRnCGrA8ZxUzjbQRsHehKxGu63AB4ssfV5rrpidn6x3ZMFnH9s8Xy5UNkHzKsn",
  "key34": "5gr6H4NKuDMCUZ69SJaH7TNvUviXmhVhQTARiMDgWqbbPcVopwwpe1GXY26p85eEr7d9jcuXgybzUbTwghuCJB5a",
  "key35": "3n83SmJopNEevHCejBRmjEasPcLnoDyYddvtqSKeR52VDjFDdszmhjQzcQf5zQAoq4QFhigbEQjGZhr6jBeL3h2i",
  "key36": "3urPc77vT5xzQjuhAvcSDHstE3RvjWyuXPBCxtEk1QX7F5Nhf9ArWADCjyqo8w3Ezt4wakXi5K1qchwkXVZGZQ1G"
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
