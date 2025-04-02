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
    "5F6pFWLQtw8uwY6FpaKeRu8xVQVUGYeYvFiDw3RTg8yDe3gp14fXbSMaQaiptWcyEpmykipQH3Gf44QcPGhcFuHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e4StGD5J6eZuAA82egmxNbCe4KfjUeESFUbJcMgpFpNVSWvrxv5rmVxyCtjTpAQuL6YM3YykBWLMTCQZDCpZqdU",
  "key1": "27UmY6VLytLSBTECvFDquJPoKKfYrsV76CpDvzcBnPuhASzYW8X5JxWMFc4nA3t1Kae4HZzysvkBkAuD5v1RH9LN",
  "key2": "5Qd51xHmod3vhkeCFqWjWjm7UJ8FtwzEeh3tLEA2rR6FZ4xCFLySRNcAccTSimGyShV8tZuzWSSKB5baGCEQcNcg",
  "key3": "5xyNsEoXdW86sfFCBdYCYiBqvYRnVKLRQ9QpLZYyTje7PUgKr5DfKixGBMrNLZLy2QQqGa5tgv7QSXchVttBRHzy",
  "key4": "4pdPEa7TaAqdceL5EEAp1mSjnvCCpTwo3SUPbQPuwh7UDDXGjPeaXTzV9dA7aBg7rkfkBfDutwz6tjBywZbmZsvg",
  "key5": "4wrfrndcr2D6M4DGCnA91XAh3uqe73G6qWsouMFifgP4Q4zAfGbjYXKgA6Q3EdKPKWDhArBtrYzoWqjCckbQexya",
  "key6": "43cmARNm48WiTnCY36vnWXGN8aSk7q43TZ95FWFp5eXXhScUqjYU1PHHDAf7eENED7Xm7y6cSgEcAGTFbQGt2hn8",
  "key7": "43PP3XdCFKQiuFnA6e5jrmt5rHvhLAszRH4SmtmpYfc7W3ckKSiVsqkHpkeLZe1NaoJFHVtWudtwes6hEsUN6piX",
  "key8": "5LRCpJggzsdo9FpEcN2ufeJu1Jbw23QFyW3ZPVzaMLat7S1VH4eRkS4LztgsuG5Q5q4TEHfYZ4bRzPRZCWktsW6w",
  "key9": "4bAGBy2oMDfvnagjVN3nTXFK5QJYyRWrmw5TntTzsa9tKKnoqjqdxJCnLVpiboXgcgsccZb381Rx955iz1sU4kgy",
  "key10": "66BAQUP8RmSwFSCrHgP1oJTodotxdSsgwmyQhgjLikzpkrsM7aeKW6wJdqzgS19ESBbuwj7huTLnS69Qg86YdTUE",
  "key11": "5WMbHtR7zn1JioTFqz26cqCkfXA5BgAr54hjdrjvbdDg9jg3kix7Gn5RHk9FzdtrB7Ex2a5vsbnKyYvsWZk1C1z6",
  "key12": "2qUvyexp9qP13yzvJP2Kj4361GvRT7g487r89qP3btr5jpta6i59YR3CkKTYd1dcafjsmoDYFnTLBaNMiSdoPGrr",
  "key13": "45o7hyxUWJRKqgxxZ7bgLTL4UyS1xrCrTrNNz8YDt2P1WQG4sArdGdQDvG7ma6Y5caAE9xPocnkisky8mJ5ydBhV",
  "key14": "4JFWmyF7y2k3A6W2uniiVDfeVHsaa9EDuPCrTj8b98VE1tXkpHhnPbg8RQzmbpkQZmn4X7ZowoaoLcC4yTVUQG3k",
  "key15": "4Jk6LRYYPJVqvrX6HXfMpAigFoaUQGJXsFFFuwVKv489C2viaUCdA4NFsgVEh5Wc1V1BpYqz8ss3cykry99bDeUy",
  "key16": "4jSPKvC8vv7o8wgLRzzRFzcZqvb8PFJjLKEUtDLSz8pRYAj7WDvTa2TP2KMoeNfiCVUefNL4AXPdg8hosRkUNFLK",
  "key17": "65EbW514CQAdCKP7f539kU138LgASSfAJQaHVxxZjHPyrZLuqqSAczBtzYiY6Lrepr3xp7L5QQK87PX2ZsD9RfDM",
  "key18": "sFFpammapFKxhgy1219CkAp2Gmi3PGQnSdDQxnV7XndV6AWk79X6VD189xQo5nQFgu3Cq4w2AXQJaHnPV9hiru7",
  "key19": "2pkSNmaN6LssMXeqdhmpw5AbMPvcz3juitHnwzyaB4WwSKByQWqFTj1vDCozhrnJWdkjR3xLiUno6TDQypbgWnoU",
  "key20": "54r4HHYmbVJZr8rWFaygGapc9HvBZeoSTHrVsZTbenbpqgQAXDa75usoerFaEDvhoFJD6GakLcXZrcP47XHwzFmf",
  "key21": "3kT8rJKAT5tKnBWyt28wvsWG3NdD6SGd7CeThj6DogQvJe4yC567FLYedTeNWzDZtwBqjarb2NrDZGJaTVpcsymy",
  "key22": "26oRuR2KUP5avt12ynmZByxnStYV35hhQLFN6DXxB3V2qwRCbkPdCibmXpJd5kasjP9nS7pE7TGkKg2ejkyD8iVq",
  "key23": "JoTDcdZ245HvduxEzaAh246XGW8Zpaczir5ZMGpKbZpyT8CpB3uhT8gRCWbnN5BfAtgW4Q6WS6a65mVAyTFRASF",
  "key24": "2acRwgrdNfoFaLAdJ4qLiagUFwnDtwXC7dyZS8FmPL45xwJPAJonq324ktzhNfprbdZpNu6EhRMG9Hag23EyGuRu",
  "key25": "KqXbcKfwQ8uw6Bp1b55QzfNwARNSQniJmqBJi4EyuKSTHw9dhyHarMbgguioHKCN4HAaTsWxxbLHiEofWWREzBz",
  "key26": "3vSpwz4Kwdu9hFtcGveojfFuWQvrBQ1qGxqtwR7H54HTGqbA1XzE3tcNnWzx5c6pTmsjZkgsDVPf631QdNn7bV9h",
  "key27": "3QpL5d6wjLwba4E1QqdetdiBz1KaJB7pTXUtnzokAEJi67xZsUWxyTMY7XNtSuZWsSrbYqYPckLDsYqZtSCYhApX",
  "key28": "3TFjAR2KZgoUZzQHv7frKNvArzNeocAm7JAnAkNAnZXzR4rYA6sYsb37Z1x5MznepDuRssZfr8sXyvfKfMzF8LNT",
  "key29": "1gSe4oxqCPCpqzagyTwnkh1T2rMaXGAZaTGLgseTuSFvXYj4v1eJUKVHdbSMHx3CHJWqSntdXVn1e6vQVaM6PJd",
  "key30": "3khTcur7th6aUzLsSVmC3cQEJSEk9qziKd3MhYu8fVhZnnoLHGEYXK4tKo3zhM3JMnAsFdf2MEwzSpMLYeLdi9Zd",
  "key31": "5m4qooUZqUdHdxnmw13RB1TU5DVtbBjpS85bkRyzWEbgTvDMJwoEd1AXYebz1WeHiY8EVTmd1R984yrzs8jjMXEN",
  "key32": "2pJ6Jd4c983iUTKfMppUp5d5tcsZxDrB4pjoxni91vKBR3kS9WSLrYuiPZd8p4iUeYj81PpFybtGGBQPLbMFUnq7"
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
