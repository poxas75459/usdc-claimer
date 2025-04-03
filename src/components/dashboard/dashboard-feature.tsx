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
    "4p51AdkkekF1tTWeqnKxAEt998iGGN3EvXgwurBDmrqRK8QhFGQ19BeSMaYXNoN6YUyZMVQ3hRTdYQLoQvXnmSbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ooPdbnRtiK7y3VU8jPwYQYr3oBkC3zHQHcgStxYark3Gb7oSmuuTufxjxDbd6gTntBLPjxi3L6QrPkf95BWfCqh",
  "key1": "62wv6GGxedcDjK4rhkAXZMcmu8TmgbqmB6EwqrfWfRWE3yw3p6F3Gt1C9ibokncmxBvPHNHHX4d5EBz6MBL9KsKL",
  "key2": "5Sc8KHzE9q9hxfV9J5CGRAM5mxbCcdzQ1HeqnLL6hBFQZAHe4nML3n8y1YTnZBCTamHpzHvNQDn1TBUNr7fcoaHn",
  "key3": "3aABjpYYzwFiyCMxn8Q26Se2zCdiR66A5akrp2d6ZQw382HK2G2zxGsEZygw5ewisBAxgoZfweL46fRcbiE7NbiT",
  "key4": "2mU46GeQS2Jn8kWEcUBYMXnWfgEzvfKy2REGDXhpNNhdzQBVhHeC2nP9KB8s2JAsUr8HHx7MQEg8oWSFiFkUJNXy",
  "key5": "4a9saKZugDF5Bq2akqLugYyicGoKGc5bEqXSiSC2Fs6f2EPqxc5LmEm5yLfEBR1jMgA3omfuGbri6kYKnDK4Soar",
  "key6": "52BYxWMtspAqNP8VwKZjXsH1fFNm4xtm8tnXwpysZQe4eZJbMcCc2cLTQsM5gYQ9hq6Mtzrwp6qpJLkWmrWxHNpn",
  "key7": "441G6eUrgkF9KiAWcUELiw4SyfVB47pojcQD4x87X4fizRj66Qz2KwnNbpinrQAegK36xPWZyyqEgdiAFfERKbrc",
  "key8": "NeARoe5b81QYrdLbQJRLa275LigZL8JSq2xjW7iCUaPPrudoz1UqvxSVQ6BopEtTUCB3skv1RZvecHsYWShTRDb",
  "key9": "3YuPVoa7YfuuHEzGyCzSJnZfmGAoriQA12UaCLK6gxkQaQNTBCgXgnczbVnmXnnRchf5E7MVjNVotVqwPRpZzaDC",
  "key10": "2JH736c1r69EUD5Xg3KiQAKe9RYkNzNjJa9C6L44QsXjSyiASAcNdAVWt26KNmeCYsAFPKgx69dUd8Yf2Y2rzXxL",
  "key11": "2ostFJSM9SZgs9vQGTU6gX3m16eZUzwSvnwJP1GEEfg3mxSGF54fFwkzPep8R3rjSRCFuyuMHDD2wSsQjZsuhyhr",
  "key12": "3kTuD7nNtWXrPopeaVsKFhqUXRGRwmzP1wkXg2pDv2D5Gieo6kJD2sbXZKZJGVu8M3VnsqHYwwiA55hguPDeCWFR",
  "key13": "4QAjavHACfyP68SziwNfmVo2rVUmRsyTd5d1SJZUSrQzj5fbZ3c5xVuXXz1rGFYu9AXfxANXwqN3fQMCmTqPGur",
  "key14": "3gBok8FK13x1yvKdUwLZYj5g23m1N6pDunucy5tAEvmpszxbo96QbKMngvCKeuyesn8gNrxxzEaqKFGQunmn6aDa",
  "key15": "5jSBDuRnFEfEopxU1idS2MUkbMH5g2iDM1s4i2Ro1pFnsmucrkWtkqg6jHyibQc5puNo1LFRkkxqfHTXqvxpzs91",
  "key16": "2egK1QNd6XAHcAsBgHV3qNdVu3nDPSmA8ZN7ibbrJw4WXQiBmCgfADyY2QaoQnveGX9V4HpwWudqgDqq1MkytcNd",
  "key17": "3ynPuZnAYC6zJSh7mLYHK1S233KqjW6az3aE5jz8cazYazknFSUv8ya1eF3Jh1mV7o6aZWrPcUHBZatQpCqZEDfJ",
  "key18": "3m2PmbXB8vMJG2Q6NagZ6sq3Mqjxsi5QN6p4EoQtbZWzSjdCzRJj12Yb3GRymHzQS6dY3tq1rmg19Yk8Vr4kHXZf",
  "key19": "PmqKQ81rCv6qgCfHrFxvBqsu6RnwxaUo53whi97Lbr22cVGuZ95zdzuThsCtSZ719MZh5vGWazLxpygLRdpCcL8",
  "key20": "2GG9vLBsBkJK3pGBPqp6kGeZku5qyFs6VfUXNTTUf2SZxxwwGNZyjg3fqstjPpCKiZE6jMzxqz3cgqgvH7pTn9g7",
  "key21": "5RaYzJXw3qgmcXYzqfSqUtRpXfX1Dus8Jc1NMCwvkxqtKv9Md84po3s2tutRRx4cosz7LrR7gtGYE7ZQUaDpdHtt",
  "key22": "ZPabo5utKmYuS8yp3bCivy5cGcsotbbdhyW13CpjaFtPjMEmKK97KLPJScMspTYwbuQRK5UNbqVLBQngFqP7AVK",
  "key23": "DgvpUDg2Ear5YpHybq3DnZugme6uJ7QwZjiK19m6SpdyB59WS4LnZET5qReGVk1SEmf9ypMZgrxVyFc6vme4HCn",
  "key24": "4NZ7wEZUeLTjVvgaEwLz5UQrWjzxEMYAQRSmpkPkXAk4tAADHq6B1HeyvaVVnUWqVZDnPPmBQGixevzaNGrLCzkd"
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
