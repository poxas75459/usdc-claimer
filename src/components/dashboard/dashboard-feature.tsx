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
    "4Tv945UH2LBeN1PpNVjfF93M8CHGrNar5JkPEtF5NAgyQN61U9T27go2mdzj6SG7t61BD7wjy8DeeZ5J2gNbCEYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TidUqWstxQniHTJgjwkiCEBRSjFg2mCWbsibKZFkM4NZ2viCgsUgm7a3a9Yso8F3X4yRcJZ413iwD2SK8jFrWSw",
  "key1": "r5n4rSrRzXZGUqTUewwPNZwvRDGcxZGYboUSttYiwXZK1nTFdMo2qFtkCSVqUjTzrEbuZhchpYJn11YfrZULQqJ",
  "key2": "3JkaumNgHqkCnuuLtVk77cxxAFUGPB1d4q1Up33x4r5F257x9eyyXhbnPtPdGbMRcSRAeBFCdPCHv6HQv4sZEn87",
  "key3": "67Ge4Q5UAuxMxByUnyqhbNDnM3Rk87H8bPkEmh9KKtREWnzmpJgDPJVxJfhVzriBwFaw3GAtHfv82FHP6Gw4syza",
  "key4": "52CcvHn31U2FvUnrB3neGaPxaxqevRAx8evCzpc5naNUyfWRrmzCsfjVUvgjV95LTZa68ByT5dtkErP65v2xveWv",
  "key5": "4EmNWnpqj9rUSMrzmbhVzNQJE1HGV15bPf8BUJSwtrLWg5jxMNPifc4Wmoz9YCJQfUS1qPij4vVde133oWkG6nBA",
  "key6": "41NnPvCRBrXauK3s6zZiwARUifZDGHySt6LP9tWkrNrrQP6GTjEzY1snhajUPAcgjZjxHsA3y9kDnzSTdk2ho2B6",
  "key7": "4zhWLw7QxfzY8Y4ubnJJ5VacBJxBnijCmRLiWBqboGWbmdE6umD4XsjfCQtRNXnweJvQuixhBkYQ869L37VpdYix",
  "key8": "5HGfg3rHF8rdnbRu4grMoD47pYcprFAYEQGDjFQrjDkXnZLSqS7rCE3vxrrmwA3EBgnPxLE39VbuseKUrPWMuuRc",
  "key9": "3PzPDmEPHcyNoCfHGAuS6rk7QfqpQBxdBPpFQk9xNwLYRb5gyJZpsEvyokdrArKTMzYJpyTU5w9TFkPPE1Eam2Ny",
  "key10": "TKE21pWTggEKYhUZerywYEZm4jPgtvaadHb4CS8nz7wNqR6ujGNtxGSitCmyK5Kmf6AMvtiGSbdUfp9hW5ABfLy",
  "key11": "63bHVZTGibHXaQfxKHarpsMuBNtw1wpeYofeCUtrBiMjvickJsqTXi9NfVyKBaZWkqdWA5Bjs2eZL1gN53vADWar",
  "key12": "3TeA1JxycjfVXcVms1fBksgSKdcVBK19mSR6pC49in9D3cGqb5XjJWTcxQb4f6Z876DBorcgCqzGRtEus5NZwZC6",
  "key13": "5gt7sExLrY4wFTVLp9jfeqLBTFkDxZLKArFECajVVR3cYHZrTTA8fJUggxnMpdREYQAvaq2nQxzisNqELcgeUrkn",
  "key14": "RjP93c9mjvmp49DUxvgUMr8LNRr7onAsNNwJLDFfBnYDbuR53QuabqKWe7X1D2ZrtNVQXEG4kHueELZjsipqsgx",
  "key15": "ffQ2JgJQ536JQgcvJTqvq8odNecXa7KckZgpZj35FRf2ATYRogoDYSJ4zm4vsNHNy5WGGJorDrfXUe6phetAC6y",
  "key16": "56fsoyinC9ek6cM7F9EqXc7xjWxtTMTCXw3NadgdJ2VAWWrUqKjQaW5snKoNhySxZvjkJfmGc2KyUvf1f7rjYx21",
  "key17": "2bCuJopiJousJASPBKCinvap4D8R6FwMdBB17m1uj36iKxrvC89mJJe7tbKoXPRfrykYd2eLVNXcMMpGMNcdC2Nf",
  "key18": "5mY435SbFcePGR4v2dC9RojsBYWPFkpY3RBma81rrcswwCQZdfUpuxraikkF35M7jC6TKooV1Fnis5BKwVtWRwEH",
  "key19": "eFVrsEovuXkxrDy6aNBaLhn32WBeiWuPKVXoRudP7sSXzTaQGnsLn3C9pUpoghN8PsUNYUDzqgycxVgyzgicEGo",
  "key20": "3fHpBoXFXCqMD9bhGSVhEASzcgyYgHrv3oz2VJavw9GLxCbgZAkxHQ639F5fSaDR38FkJDLGTT1gsEmA2RXwQf4r",
  "key21": "32hF2ybJNWYqhv9g3rKv343QxEx6BCGVDua9GGw2bscfHW8vXdamCPhuMW16maVS9DcLnxHBPjCRcMg4RsdVPtpa",
  "key22": "2o43SjyvUbM6VbBLsMh5oFqRfWDosMt6VhThHDj5VWmeFyZyzf6GKjgzuypeYKhz677PAG3jzvDTdEcun2299Hui",
  "key23": "5mJ5EeKYhQYF7TBWPUxbNzki7e1ehHPTEt4mi3ZBvV4Zsu4nQSnuA3rknM5voFevy4VRwDQ2tz9x9iRKR9YCpMDy",
  "key24": "2opcxDtrxPsjAeWd861pe6HM3DwTZ2qX7MwyL53nzYkvCpcKuogjyk2AMs9w29e77dcsF9ANtooEynWhgWtjAnzH",
  "key25": "2jvW9wB15YhvKqkAAK6U22wjjVGAWN5nYfPgaBV1uQeUFhgxPv3KkpmSzwyoB9r9F2vPqutv3wz7xCUqeLESZVB8",
  "key26": "4thd5G8itew4rNDxaV97QjuYhvKbcmvifEAituS4k9n52J7s1s1j7hjsqsep9vPoTvMcsD9Cdq1iwUbjj6b2Mhck",
  "key27": "4tnA9StunwBZpwZApvJx7Sn4fonAqte1k7Vj1ewN9fCHH8F5JPZAhnbrSP2mgDTSPg6AFYnb5Axmu4RBmEwwxurK",
  "key28": "47t9ukt9cudn3qCTm83JmNvUTKGHofT3qA9oL3paGQnQsCfcPGHYewGUikYhEL3AxoSmQCkhHSvHCGfzD6Nv2bWy",
  "key29": "2SCUKscweDQPwoqcwYqzpQGvQN1C7zqbD2TupZ4ZPUA8zmH7gcYrGF7XWZropnPAnbMM7jUMPBZpzyKkfcHHqYNm",
  "key30": "3XNsuuWmznZuMMBKoK1eGnUSYStSdJ9Vb2DAMRWu6KurfUomX3emJWwSf2zbNtEc69jbKrTzqGmZGa4eraRPzSqa",
  "key31": "2uVeC2qVHZ7DQm3LQKAfT1bUjgx18nRZe3vj9KccMak1xodc7ZmKmMtZMmMrboTz12q1hoGMey7zadSujxkST4oG",
  "key32": "2uziXKp7v5EMBcLi99Qi6S82cHqE5VnyaZXpcaRY8t2ANWeFrsKZpXFTM4RrAkhjDCav6RnhLnvh5YwrTeS9C76j",
  "key33": "4VEtDyPcjpKD5vrTk5pFNS6ziFikDy8ehUyjU8UPLaMGC2uzdNFzVSnaSFBtmLTgyzbtefLdcgt81NEwcCz6iUVv",
  "key34": "3QrH6FMgBqm4Gksb1s5bhZMZQdfrw8CKthU1dwS9W58ZT5UdqRR8Nko2j4KhTwAopu8vwgiyySsSY6hLTGQAGZn8",
  "key35": "K8uoeHBh1oeQHtnzDNE4v3rg7pyd73FiZRUbV1hvc3goiU9pCHgMDSTZEKX7mxxVHJybaG8s4BZpAHDgXUpowK4",
  "key36": "7JWF9gUWwCgxCYFi9wEVjibXhKPxJtg3SjF9Xd1BdVr5MidYXMxNeHVA3fu2wzHK5N6m3vBLpsdFXjusJuQr6s1",
  "key37": "3LAwrXdqGne26utFbQvuERBzarwL1ASzddbxV6CC4iUauG6Te2tBms8tABsmJ13f6T4dGy2qDijJLDcjBsxhyFbA"
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
