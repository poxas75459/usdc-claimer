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
    "5wGwNCtFhPXA9KK1PNg3CEZxEyDHvR8ssad8iG1M28Va3vc8u2T6ah8LhRUrzdbz8Xe3pXzmRoFucFtYHogfPCN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h3kLUnvKhHzjtqkTveyQo4gVzUL3xBEU5BYepKvpb63LgnhUccfpigqEygZAqGbMPxBMANu8pagcF81zbRto5f3",
  "key1": "5ev4Ssgk1FZK8ev8JLzp45aMeYw6yeCeymR4xDjuGomirooj2FhVFr9SnqUJmxFv9qH1589oeQyKPDyk9b2vkKZj",
  "key2": "5FEBGgEsQdqJbDPMuRcztnjyoNiHbU6Y53atB7S9UfdV8TU8AriBhQVRFUxe62WFyNU9pPhuhSSHCDsc67cXypQK",
  "key3": "pY4kf44bnc3pu2XAnP93qNpEpdW7ES4StCmNAjyZRJAMveAu54rVee4HP52z3DMrmPKhpajyDniNX9FQs4aKcaW",
  "key4": "2fauaGXMvXxhhSvQ9k4LnnAYX7whM8ra8LCN95qffLPCrq6bhBN9Nn97oGctH3eBPZdQySh9et3SVjH7bNXiJf4C",
  "key5": "5jnFedxfbAo265HaND98oDC5ukwdZsyL74zgreoYmYquj4RgrEXYEWSVDuVrecWGmThmapueiX8kUT45cBte61jt",
  "key6": "5mxJMvANecy2uf98gZFj15g8L5wHKBosQwEgDYNVqR1cXh48cifGyM9jLiPjFxkhE6zLZuzez85kCkMPwHKak3xi",
  "key7": "sRqL59etsYrA8v1rrPiGmcQCBeH3pSGUP1y3BNjaetcA6E6BV2ss8NdWdMyofqWhbMjdMnfVpGtpZahvY5dJL32",
  "key8": "bM1Z5rjXRb4T5ScacGCDMo6WuH9BbVgarNCQSZigPquCUsozdjBT7z8FiRnx1iGGtUArLKJcNQyHM3Yub8EZFaB",
  "key9": "46SazvBBcZAdbcFrEFmH6i1TPN289469vBhBsLuEZiFtdvBZLNQtGWfaPtiAb34LgSqYyrjCaBm3bLjvWkgck7jK",
  "key10": "3W9wNb71h78NAjKVRMuiMKQr7KhyUYsYxSZJzFsPuxdfTzyhXjGwm9zMXCGtQ9fLzY5meM29tnJMdgPCYaiq6JNs",
  "key11": "6qMwChqMyepPm9oy1U56gNRgoJUxFBaEU9JZ9H4CsMhrUTEcnughqo8np1WpEgh98NijyH4Q3nbYztoBiUs6epi",
  "key12": "4Vmuan7SHmxsSZ4ELhwnFWi8Y4v6fkP8fmZtFB8Xhw2BMex2iHqWvNzzgFJbri9Q2ZcX88AXjtjQFtBRwuKAgNmb",
  "key13": "3GNVJWmh5kciD3ezaeNEu5etc2aiVF6wT9EPXWgjGRTyojzZYLdAutHCNfYKtt9erYYPHcmVnaq4X9h8nLvqyUsY",
  "key14": "2QFouFLzXfh8wSf4yqghxNaAu94mHA1eDwX4eYJnzXHBfrugLvTEwaYS38vzMNkrFRLyP9zU3zvMcCQ1buZRyizR",
  "key15": "46KJNrXjV3MiemJAJCyC7KdWWiwbyAYrzQmtQURUJaBL5k4EWo9Ust4UbNcN4xb5oQZqgqeEbnSyYDxgFq4XZD1R",
  "key16": "uxxE3XVXobhsL5B24gckzrwuZ4D4A8WmhYwnNdmKyvqr8Qamh2V73byEVKVYCezdsZKReomLz7oanAJ2vDg372n",
  "key17": "2VcCFbvuJKruuNBzdFM2BF2JrKJvWPKE7QCeLMrqFZE3yovU5PhJWPE7WNiYrDtTc5cSSP1ccDnLQFegDtJGuMGg",
  "key18": "4Fg6T8okgh4atM5P5UJby1ZEU18FyuHr19KvbLnjZBWPRN6UjVkN3TNhpgfXFqggvr6NxDtu9q78xGiVnuYoi4k3",
  "key19": "Ca5qEX8BETpfeRGxXJHKRiaNFJUEiEYj7VALFHJ6B1L1Wteq8h5nd1vYfNBCP3pfPUpfZACwkm9QrL6BkrxNCik",
  "key20": "2SzKo4YiBppSHxHBrfXw7BedhnWSubRpMJ4pMfBxrmww1E5GCxWNUT45HnFiv66VcrFfw5cxncfs8kY6PUmDTjom",
  "key21": "TKTbeoeS6mBkTq96J6aSopi9KQPn8L7eNaGw6A4EATvxRsGXYVxb159xVVgCXFku2MPGZAYYxNDzDyNjatH5ZPX",
  "key22": "3RZZq756Q2JHH2n1tucFw67FhpAK7JnAYZUUEhS4mBFZkCBmbvbdsqrNz3jZxHEH9nst2RAZgrzjXhaAhmEFZRw9",
  "key23": "4NZAP4vw44s1u2r4sRSWRhx4L1x2LUNZxWtQQcDnen3tiURNfGQ2GNGaa59Gw475ocm21HXVom1TyZvjej4WZmkx",
  "key24": "5xfqNJrtPkY8MyFMy55T4neVHucNUDjATrEsLvAp4RKaFKTA3wSayxqo67pwE2JLxH6oHdhFTVVd9gEN2HAiPzsg",
  "key25": "624W1u6wzwh4cLiu5qS2CpiSqkMhSM5mbbpMHEwAbDYBioLuTZu33dQSQ6FiBJeSxXPJrcJ46oA92Q6vRXZPtQkb",
  "key26": "2xrMyxY1kFeMkrNUj9e7KgeGQ4fz4FmZyen3c74S4g7ztdG2xHqvD5eMBvLQdsQj1AC97eHYWwNKLHP9m1BjiF7q",
  "key27": "2RW8yBTVgwCDzNB8QQ7yErG1zoV8zUvZ6FbrqgRev3x4o6c6S93gKw3TstsMnU91AzC9fJyZ5ALyyVYaSRJo86gG",
  "key28": "5MAVcm6cBdUaCSpJVhREQKnBfwEksyeDitVMsJdzRdaBaqopJ5xNTeNAPftHoJfd4HiT7VSrzhhA1LJ48pFQWSHk",
  "key29": "5mRLEc7pJZdgVa51UPo4KpTg8h2CEQFCAZuxhwKCpoGZbBVNTmM939bxBLq6UBN82XqspJo5rkAnkq7eqmjVVCYA",
  "key30": "45T2f87XeSFgQLhdqWii9WFgxfccyHSEQn5iAqeVRWRjvHQ8ddXG97iXcKfsRSYg7X3zCrAxKSmsWAgPiHTcL99U",
  "key31": "61qpAi6K98kovDdyaYdVWYRa3jjfyZxjLqkq7pZ2R4iUcvwNEtay82ozQZWpfdMHdYJY2NuvcEHun7LUauVz2eoS",
  "key32": "3eaXRSX27Wtk1tyD6dcR4pE2jVorBvqB7SijP2M9GXGHTtS6uz7wtHGsVwqJJCaHw9emXWjg342JB1vgAzPXDPrc",
  "key33": "37aer9pRTxWNJDFZ6HRCDnXMif2J5AvSKCLMRv5YKWrdTKwyi7yZn6M1BJy7zqxMLHoR7j94Qwc82frZ8Vt5teRp",
  "key34": "5DGFzkbgy6vSM1uB6yxmYBpDE2buvekfChBQUoPKAJ3cvGPnwZGQDGR98ZSbssRZpZbbKoGuFBqcodYrvTFDtBEY",
  "key35": "53F76hWJaKZgpK79xdiiuoWGvhWhiyGTdeh8boC6MGqHwHvPJKcB7foBbg15mVn36HyFq3mno9WVGkX8iQJx2TTL",
  "key36": "5WNUzafh3Koz62rNrGck7Z5oJYgPZ5jLf2G8y9JsGBQG5M6kTptZN3D4rJfrjfwqEuCd7aCPxBtW6jgj4QcNU2DE",
  "key37": "43Q9yFVihyoc1DCJ6iposX4FbA6XaZgkx6sMyYBSrsdbT2QRXpwZZF8VUd7rCfz7cdKTSDpZUgdrey8M4X9Z1cz9",
  "key38": "2Pvp4ePiRH9opWGkeoMTJUCP1LpRuXPfBGdBnccNKCz6LiFVPaDPThPxwLBrL9BwLDBWxoSPBShFQqH3RiKTWA6G",
  "key39": "4fcCFJsTaXGf7fXDbV3uQAqgfQHSjYDX4Hq7kGnV1ZdfeiEeKFWMttcbS1fo2fz2hQQPdPP9uDjoJoaCNPuwCRbS",
  "key40": "61sTqv8qGdWnfQ78Ja3EuNS1RUtUaYj9i1du39S4aCBmsP3WwGFSqVvUkdFjs4GB9Dbpbk8kDH8UBbDWpM2mTWmX",
  "key41": "53SxCRqS5vDp7XTq4X1wvhBbDxq9jUZt8DQXM2jhteUyBX6Pp4PaUwzBHAt8tmUrMAXkid1wmYTMB3Q6884tVXA7",
  "key42": "3534Mnd9seLV49cs2t4C9fdedtKo1AQq7V838JHG1M79KkWns4YLJ8bVHQu8Hv9L9Zk9WKTHmdHCCpNkQJBn5yd4",
  "key43": "2sRUS7y9hp2L4qtatfLFNbDj2qvDqWdH2u3xQj5toygao16n4Uwf7G1cXs3kA1mHswfCKHxEkWkUv9s4Gh36bMwk"
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
