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
    "2CXE2TPSmW1kmJgybY6aCvDNJbtZ4nnSPVtmyHRGsVsAmGS4KcLBYjM177aBGxHuhdzZgGFB3PfRSE3PatVVcDKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oL4y1VQo6gnpt9fNVNz6GtPvG17gxpZ2x39ce47pQeUBz6bE22zTpJetF3xn9cJwTGDn5M3XkTu9kgr7AeyEFb",
  "key1": "2nxDkecskHY3uHAMgXmZ5bvNy2cNgpwi4o5YQLKcn22sMiCyMQuWHiSjx21wpo3QmGh74xinTe5S2EFs63jeUxjP",
  "key2": "2fcYWRwtpsCHo1hexvhVz3Y2ZoFXegKvqNe8KyhKQ3J3ouSip6MGp2SmxbLhPb7A4FrsYTbmnPRSNGY6PhiDfUFW",
  "key3": "3D6HorHK6rz1BUb4JydPWSXHBpTbG7mgEiib3WSfE9iKFhgdAb1StvAkPMVUEmdLwFBbDAkfgwMA8SUPPptzhJ4j",
  "key4": "639e3rGxC8MPvsSTW6aRwB6yLRrA49cmAaFUxna9BLuhQtua6idMgKBwFJuWtA1dLEEesDZNKwddofdgqD1mWXqu",
  "key5": "2dRszRF5hkKpaXXTENyHVHhUdHZvkUYVp3XgpzEvVN2mbviBgyGKjASdq9GLuYwUPVPd6ueJnTGE5qkMSbjfhYyK",
  "key6": "2hZ8GqSSUZotabF5RvxHtV4KveE9t2qF17Ce1z139MrVAR7fWU3f37rQpbXAjGrEMRaqcYXdSiAHCnNJiqodj2JJ",
  "key7": "5AhuEpTmzLCzxsZTwyUCB4nKh9PDSj6ZGw6agpEcAvUpwv85fT2mQEG2mprUqnRxQjPJx3YBFsKgNAMrEer14aAk",
  "key8": "4SCTap1iFDm8cu2sCcq5hwHKmenLFUefXhuxGPizSGQbEaQyuRsTj96K9u7Wcpf2Uc7n2CQVJtS2E7uQ3vU3KK8D",
  "key9": "3BLgBy3sM9xSS1Q3S9MP7fZtzjZAHmbz2JNGJUz8X8aS6Xf1H1BrVLPPSR5EC4FTGFjAUMwD2ULRpcQukkLsoYXy",
  "key10": "41HpPSRnRidpdXpaUWHMo3mCYtsisgpGYj2so3sYKvuZ5jz86DVPsJ8qAXsH2Ud1zRoEPGEQPjkhurHRgc9wGteH",
  "key11": "51v6FSaeHaidSdEXTCy5in3UmGQrspXMzFLJJvni34FgeJpdGk1H4hsfh9CKuUS7QZSv6avpiquQh9bekiU7S2QF",
  "key12": "3YgWYDNFbXMdjoGu99dtpgZQDxdJF5RD5RXE3peBoAX6BoVQiEpTrgmRGmLvhrvptDx7cFGSLkm2DzZFpze2SqoY",
  "key13": "GhbQD3zcZvB2xBAD63UkYwbGjcLvqwH4QQeTSScGv2paEfMZexinW3mmzfN7FPiBBRWSM2VPgwsJaXxzU9SBjPS",
  "key14": "4sJXhQd7rwpsF1GE3gvrVANm6N3Zi2KkyQ8YPiJYGhsQLKbcfnvnBHifvLPeJjPAYeNhfvPFPpeLduFJSDPwLJE8",
  "key15": "4pJUkJwUcGsz2GtU9V3vFxzobKK35cjfynwKjSJXiFLCuEWi3m1KkNraXv99n1widC1X1mHBoojn1C6xy6BS21HD",
  "key16": "3cQNRTG2cioEjbWRNdbJiVKfY8Nf1wmJ5Dz9W3gQniX13VT6WrLd8a4ugZ7QEgwti45ZWgJEkZhKXRHENGMf1D9d",
  "key17": "vqTEJTJCcaGceXfwG7ifL81i9AYV4hNJF4soWYFXgqJYCHR66PvF2UV96PR12anzwFN2ijas6xwTF4G94bH8vmS",
  "key18": "5r2CX2pby3PgXTw5yrn1Mi7eYWY6vNZ19zY5UEhsM1LQjLj2CvFazQbWv93sieHA9UMEjoEXem6APM6KgsezKHDf",
  "key19": "54ZLXz8HQh7kjnXCQFHLoEXVwSsnfiRrszD2kMj2MXLLUqMnBKJ9s4WtcwcKgVePHy6VMJT4WBS5pWkAWY7KAVqB",
  "key20": "26nyv5hvDiYX4MjijJFUqRmmtsY5qA4PTTEd971BzF1bUdCF2LgyVJTWD2HHQw5Rh8JmUzdFXxNFkjXw27tTaV74",
  "key21": "ip8XXUypHPcTdCFZuFjHuRFgN8jH714M2yS7rD6w4o9nv6qZzUi9UwAK9P3VydgnfhDKaGbe67ZX452NJzEJfE5",
  "key22": "243SwZ8eK8BqLKDBbj5jnvRV32txykAwGCLSqirug65FZNAZJJszF1KJNJPk9iywRsLZV9QYGDVttGHj4kshJt8q",
  "key23": "HBEJ1aUE2M1XLEoT9LnXYsxn9GzPt8Jmi8xxMhEatE5devFk4rGiffcfuX3YxPRtQaBC9HoeGVdH1KmFnBoyLmM",
  "key24": "2uQ8bF1LFF9tpWfWhdVifEHVig7yGiK1iXHJeA8MLsU3Ahz4QLsxibfCAEqQL3xQAxXGeqRSBXRNX5YeuwvBAUmf",
  "key25": "f5Ygu2BkHM3JqgCm3RsNjNGFTdXEqFnHvS722h22NDRDLT4CCwMjhtGoTfFeknqm4jyVdxyCTRNN7NknAt6ibzB",
  "key26": "2SVxfFxsf4ZosekJnNxUTgZGC7L7RfEttAZE6MjdC7vo3PGBiqQQoQ5H3vsJuonEbJFoazkD7jANv7okXFURo72e",
  "key27": "3SnjNisrWp6CNpww4LqR2J26vc6pHq4NnYMvcANS2pR5rxYGboqNjDVK2qAtbi8mvKuhNrizuZL4fbb3FmYaAobT",
  "key28": "3tbhMH7bDkk6EHDZEjVwZmZsbbv1j1KoMe9KPKK3NNsPkjYF9bTzzzudNA8wUreHb5PJXMjmEdSvDBKvQvzCxgno",
  "key29": "2z7dfSWuWTHF4S9sP6TcGLKW7sw1mDaiovNhCPupga91AYfsG8qFa6HXE5c8wVjx6oYJN2JNF7KBfPGE9SKcF2Db",
  "key30": "mBnxc1pWgDd8n2ezuK9wbr4jpgPjVcX8TcqpUWiEu223jyHM4EPJR3oaGWfbELBAJSVhb4p7riaDbmB6uPQqbxo",
  "key31": "3xHbfqRNfXCPqYxL3TNMNH4UKmuZirmKUm3Q4WnaYKWWUsb44xQMAttJQEshwUoZaSeh4rbtzkKXpBWcsoqUTLc3",
  "key32": "4SL4ez1YkRDt2f5HQT86sm4gFwKpUY11Ejw2HcSFpPWCDK9JZgecPWnSjFTqkigWpwT13PxTDhMCSSwgpeUkwfKQ",
  "key33": "4FnnPX5RYfgqCJnr53nkgZ1krHk1TY7nLUZUqvVLUu5KhogmnqnmVQYSuFJdrNLPziy9NSAqc7dZ7kjEvB5HQacN",
  "key34": "qWW3u7uXqn7RBQ5CkvzSbA9RSKnEnJ3ARPBmZH99SS1R2a9m5frL6cC7iLsCJdM3S9zZwToVMcp6AmRE9Y8ShDL",
  "key35": "KYcxW28khaAgxwz3L4Z3TpduwqWkDmWJgYLxKfsCqnwY67Sg79SCmDxdYzUT2YNZYg4cov5FLhAk6cSr9rGDvcP",
  "key36": "5KdkPwsM1m1XobC8oQEEh2kgcyPuDfWXH7zj8EMt2p8oeDapQKZzt7ddsGE3QRghaJRiFha5oaacqwoFqfbvtmfE",
  "key37": "57NjbiJCJdTUwfjdvzh4TipGmdjwsthnexDkUmp2SdUp6x3waZuEbwt9oyVhiR4jbykjsPnC49p9K8J75sDGFEiw",
  "key38": "DJZZHuoucoMWbiiLWRSTJuNiuz9dWMkuToL9ttRjXMjPpUAmivKkHXi7StEheFzbvA5fpweSeFEVh8EuAkp5KSN",
  "key39": "JspTMShLSxeCM1EVcndfjXMnzimK4tsLeKerxsRyqkcFy9WqpvCpN1m763pBwyMY7XXbX3yPWDGgsRzq3FBPj7K",
  "key40": "5HDHusz928wBoEP2NFLqizvHjdv5EYVgwAqqBwLbNvbdyUiWhPgQw2uSpaaHEXqpHeQcpksSxj9mo9aUiiG83frq",
  "key41": "XJEhD4iPttYHU15a9eccE1nBYoFk9UMY8wwVyjopmi4DPktytcdrL7cciDGmj41F64sJsWLNHvktZ3qFvDuKZUw",
  "key42": "58x1kfca3KXzznJSzgWi1pRsVLQCNksCiptUgaKZiPn8DXZwmxHLHcZooHc9BgYg2pZUijL23mKmXunNJBYgYHsm",
  "key43": "5ZAE8XvD1Z7chaMduNkeA3y3NUnDSKVox9oeLasyHYpPDeqbqwMZDWPpHbFvYD7aqfeJTPrMVkBx5XsU54pQ7Pah",
  "key44": "tRmAgZtwVjQD1FeMNMtqMEB8FsQqeSY3D3TQa8YNsRETijazTvfThLZ7st8kALAEPZEA61LNddKT2nwCBS9DR77",
  "key45": "FbVuVxwZfhYTct7oZ9RYRWBWzYwBUDosza9f7QhbV5Z16u6jUeMHztKAvfTHw3ZPyvjotjnpQX3wF9KSGGmQ9E9"
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
