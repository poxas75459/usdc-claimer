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
    "5iPrwgDd1CfWnfPQGNHiNYozJGZX5s59cbL2HN2rDvckRu5dgJSNLAA82ftJaaxQ9JAx8pBA2mEXTaZAk5hXC42U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xyh9PYhXE2DXLBC8ZoLwsyoEUkufuiJR4Vhpb4SLgWopjFWJQMBRQbDwYN3ySCoNJRBn5PkiLtPzyjhQ9RmwVyR",
  "key1": "BERqvF6z861nPMB8WhEdzN2y3TnEdjfbi1vjAEvADhQkNdQzFnMp9MPBcp4N86LXBcWQj6DoFvz2G1dsy2rUgdq",
  "key2": "2iGXPLrLgR5jEHyc8jhifUrxQtLNyMM9F1BHN2anaz2eqK3YxMpmB4TmNEu2uUaRq4n8snAkLtkKeTsEMXED7hL5",
  "key3": "5VGyD8PLD6AG8x2pq6wtXbkGJCDZU4ZzqaoivtrC5GeA6UTXEkp2EKZaZQf2zuCDcaPokpECEaw3NrWZWjE1KyBK",
  "key4": "4aJ9SseURxLAQrJLBrazMP2apGR3gmBEANipmXCLJSwuVVwGGbcZfDKN5zgLMZxBRMXZDLiuB2P85cEmsk3Q7Nzj",
  "key5": "4kc8pjJxjPBeLzKkrMfTE5NaNGn4fENBEEektKyXtkB2XvM9mz5ygts2ipTiAxGrvWa9komv6FgKoga2jugL8sRA",
  "key6": "5xT8nCRkpQsLETd7X2Qip4k5JJnyYry99Mp2nezT5Aysfx1zCDwiM2o3ZpJJiFkJS7abVVzci7sGbSTaVyqJabjB",
  "key7": "2UUxst6E2rpvB5fyajBFdSVq8wTi5aeG4zfHvEcHvRaoRTaSyDiNR5bN8iESz2PrN8MufWvszEJbk66ULnhsY6vc",
  "key8": "2EDe4QfQY8yB2mXtUEymLwJESvA6NKQoZhYxdNKH6mL69USSJtZDnyhH9JEGLtcTVTJkVLQYAbdqymk5aUnj3GZ3",
  "key9": "3YNmhc2YoStUDdWLyokbtndZmhLZ91fjPx6JcfzEimE9t13LYvExAFkmUZrh7G6hv7ctWTD1azVZWtZm37XiqbcN",
  "key10": "2Bf8HCcsco12cDofXcimx3qEjukUjr9dAq7NrYShpHD8dmeBSLQQaMG1FJHT44GNQ4qDgonN1HZFrJNKfzEhBj8e",
  "key11": "4mMsdnTsyvXbiFDxMSGhLZMryny2MKuBbpZaRVjczfGFG2qNHV1uAvZacEjeYaqxCd5ponoYHhibTLeiMVXhNVdG",
  "key12": "5qYrCcLyJufVLd1DMUk5mrF96SWsP7rvC8iTk3EBPc7fhBXrVAaDPo2dnC7Vdng8UmU5DCwwn6Kw8MMrwY8bGWWk",
  "key13": "ExAuEDw4usSEjxKwvYHuhzj7drEgQnCk6P8qWf5FrRinHRsnhUV6YqMWLBMfsrLD7tF88qwrxyqpiaZZ8EAgy1S",
  "key14": "2yTiXSQaYqDRxzmMRhcqQF6URV5SNyuCUGrUJAfp18xPqrQw6dUypDzL89KDDHbEkeztFRGhhfgpAK16SgXcRkDZ",
  "key15": "546pyk655SYwUTBQ4xcGtcMyXUFJfvP7Gb59UU1B4M9Ca1WwtAmSS71qaqG2UpSxgdCCGaqmMAhZENDmLkjhydyP",
  "key16": "434kQwaGVDBR6UijGfoe343W2xxwGAbaCuj2Ln3ExQ3c3ZPw3DQuL9TrSPfPnX476Vv1NjSLxNHrXMeP7f9xZqYV",
  "key17": "4iTS8d3hKgTcidTi9SmomJrts618sFGE8MwskEFp3TSymEvqSy5aJG9Ks5pTzjbeVbnJboMzU7NyxLA7nhC9R6zR",
  "key18": "374RcceZe9fEygWcTyLYoThaysVf6bCnPnFebcUzUD9Cuhtsp71VY8r5Aq8xGDWFmZDXoBNjxUzrJCrTq8sxX58q",
  "key19": "2V16w7vmbnYyEuuhHSYK2jd6B5XQUxLwSf9rY2WsbhUemYWgnmT8W1DVXK7NEoRpMb3VcYyUDT9xkR25aeCeFMQj",
  "key20": "49nzuutpWj1goKTAy55kDmHD6tTztGZ2t2AHCKRuVqRyRRDnYHG37nwo231hhWJSWTZbogVKu6QdEBMihmG23gdn",
  "key21": "2hDMxXt5pUKJM1smrL4LVtNpz1seweFNw8dmzJzhKyLJZhd2zPm9Ysqyc51gzu61FitGe6oK88RQ9h9gbRJKeurW",
  "key22": "3LCwHBjre2jBaAGYGQVV9aY4MisKMm1dkNCtdfcGM8hmyt1nEuMq7JRRLaco5Xfve7S9mDfbt7RFVJenrqqfmQfd",
  "key23": "5iVpDBUM8VJiczqUSUMqPQGCnqCkRPNSDVnByZstctKp6M1qHq3mHFcpMXx74ziyGXHhpHQJBUh71Dh5P7WKoSfJ",
  "key24": "2qBccMRSwWLXA1McrHYtsEYUGtBWmTkKHd6t3ZzsqhbBppA7mBwiQoe5JPw2LeUT53PGamuugcozRFfXNSDmQkJr",
  "key25": "2m1KVie74rEK99T21FDMic8a9J3kpeXApESjVTsPkd7QiTt8sd8PoMFkAjLp5s6T8WzrDtmpRHBEZ8SbXNKFGNdr",
  "key26": "5jEswVD4HnZiCuQdtShmk8STVUaNZRveNuhmTFrCw6o93Dk67DwMv2DGe7KPqq8h9eGzgWRnrbpaKtEMQ9cR9nU1",
  "key27": "51c6bv3hodc2zdq8P2zsxYDfwA6GJWyiBymFNrM9LNzzxWTmsszmexcur6Zj93FvP86tVqZVDKWybttyKzM9sr5i"
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
