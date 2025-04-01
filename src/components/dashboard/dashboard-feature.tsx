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
    "5F4h1Ss78dCtjcaEqTDenAejkhy7VUmWaW3SJWSZmzrTtwdoaTPRVS24NB6cJQrT1qKGQ2DJ6zJ5cJ1eQdo28uSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ELUzW85rhamdRDJd969iimL92ut35CFc5k378Ez7BmD1UFD82owEAdaZfYEDiKwtMU4mvBQLvaWiLmptMVchrsz",
  "key1": "4nsFfgqgd94bK5fH1aybdhL8Qa7Zv7LPauuQrgNtYUfV8W5kcTrkBxBdTbuLkmf4HqfRsc48LVgQWXVt5UweC3W",
  "key2": "4Bu9vfpGbYXKhgBXeFnMMRBhMejHh5xqvcaKZ1SKGgVNWeDTtVMZdQBHYTn5x8RrMbKmSBmtJKoar7jhgspw5Xt3",
  "key3": "3dT8d4JQboF9ap2TRzRvJdrvjELBnJfkax9rChZFfdZr7ZrrE1LorXyFDQcWbAnTHs9zyy1BYksGjozpWgCad4Ck",
  "key4": "2YRMXoCHG54eoVkvckVDAKyUCzSHkdYLE1sF8YxhSG4yyo8PGUB6dyGRLFXh6QTquYUEcmZ31vHF7TpUUc4MRm3R",
  "key5": "2yB236MaNju9bN3F1zjt6vNECtHnFkQmgqs1XahnY6V8ge9XMZu9VUNzcusXm4g2JzCngxnfwVJ9MWp38fwvWWW8",
  "key6": "2yc2zdjZc3ku1vD2nZznusGehoUgUuy6mDd8KyfDLxdGZPYCVqqVv2414q8CPxxFsHh2g6TcQiFgzYare5NYtHzB",
  "key7": "AHFwjuKeZUE45SEjdbGU6Zoxqb2s811fwqzv9QT5kFwYG6H94Uds66qykEEbtpBYV7c7U2gVasJYgQ5A4pHaYZK",
  "key8": "4Q2NAm5bpmxoLYZ2GxKeBSBmaxPLSmywoUDfQkdBZynVjg8Rs3P4WMizdtZBz6K1Dkaxsg3FhUuW8d4D7SwDSbCV",
  "key9": "2t5J6H6My55VdhFf61MrhaiWMJ3MxJmduXbmUUVcPiCmQNk8kxLffugwijjk1M1UYHJ3xBtdfV9sfLaGfCHCmEck",
  "key10": "229ikmmWyhR18F53vE5VrMfk9y1iEE3yRJp2CS27W4ULDECvTcc9BGSMQxhFvQxZerdMT2XhDntb9cXXao69RzwM",
  "key11": "4yXerPD8dwQvmmEDChz2P9C7LV4RQUbGCfLi4V42BvS7ETAYDn1iq14XN6HhvQKWCCuKVbmyTvWUEzAyyhvVSkdJ",
  "key12": "3Tgs7Gc5FVhUJd53ozY2ZksXYm5zddo6WkXduwMpqf4DpRaT2tXgwZG9KEsSYA4XKD5vYNKbvcEbUD9YX7U5N4Z2",
  "key13": "WHf87uCioAX5hE8Udj46nDTRXqS4k4ZqJ2K2o6XuRj5Etbqmi5a4cyzCGuTeurEVWW9tEzdLY38cZzVoM9YPwS7",
  "key14": "5V29pT1SZbqt13vaRPxEKMvtcLvo7nP9d9vBykADjUpbTcj4wvqM22n5BTnzqotuT7X8p5AfQckCXpx2dcH3VPsF",
  "key15": "4oH5YEYPmzit6GweuvmycBrtXbKyG1UwRfgh1PEpiCDbPh5Fhnt4trDRojgi2RkMbJg6HdS9UzdEhmdzaJPaNYYq",
  "key16": "5e9o5yzS1XSne4wVvXnx4up2a5zwUatD8Rnx4p5zxmXJCXinaZCuAUAWKr3v8TX1gGgJDLJniBkZupoJVHTss25T",
  "key17": "2fiuebhvNSqoEvqQ8EjSPA3rspEFwGZWK4VgjgoAFYqvejuJAGFomHAbqQEJoSqqhpZsfgESAY7jZZWMuQhRnAT2",
  "key18": "qEigK9amkzWtSx7u6SDfkBZLdw1DuFmdgbNQhiS4JrATMM8c9uAyTSn89BxtNqmg2hdQJ8UshFTARkNjgEHeA7i",
  "key19": "2vT1AwphvC3Zyft5Q6bMbzZS5J54HmV53wSkxQi2jChn22uGUHoBfzMm1SK1u9CFo8QhU8N78LtbMaHkhrCfwoxD",
  "key20": "72Kof37ENUttxKCdYEzZTheiH3JkmgvQxTyrGMYJJc68K6GCP3we4LWRGjG8FCUMwcvBR1iB4EaviA2QBPf8p4F",
  "key21": "4Khrf8tPNziHjAWGJ6FSE4wuspzcE67TCnwRRcyU8K2LZfwUfe854uSVfiFKRdGKh2rbGXx6rSE53KVmEVDVZgDg",
  "key22": "5iC9YtfZ3SUHCGixVxNj2gnQTmEqzi9EjVgaSazXxD25RGy39JAGRF8k1ydoEadTJREgMYyKjVxP4KcS5ShvirWy",
  "key23": "vz5Ux4ESye1QqXzWwRA7ZxDFEMebbu6JT8T1cuWaZiHcFtMjma69cJjSBLbbjNRFrv4EuQEYakYHvuWqagMrXAS",
  "key24": "5fUCTrmkB156oGcktGhJqpugnABZz3MxfU2KuQXe4MJZ1qtaRhtfyyhPtqayrXa9yoQ2ZyJfVQ3xhxSb5okdYxBs",
  "key25": "3fJzFuJD4KeKwa736nuNL461Yg5Scn27xDURv2rLihCCnqTi1f7CcVX9JcxV4ZSvvEHWBLhMuFAV8yUa1qMg6Xgu",
  "key26": "4usA4Kdy9pCNndMZ7mmZqXaFa7eTgrHKYucgYPwqnDnx9TfT8Ykz2NMJDtkCV4JieKvXr2Y8uZoRHsnMwVJo2Up6",
  "key27": "5Tur71NcTGDus1pAovXq1feoWA3B4JtfkWWesHsVznkruafcojooeGimjjd6xTe3SpoqnRTa8hkDcv3LgSPTth8d",
  "key28": "yWT73A1SDPdyFBG83VaSA9oapBDZDtEqgSs88QDzjhvrqdZk7EL6uiFKgkgnVRVPMZRn351s6w41uUoePmNSk4M",
  "key29": "53t9xc86fx48Hg1VS6gh8Rg3AfWwD2BHarKEL6tZSuLnFEV7Po68FdaCsLVNXckPtqdq7cRdDJHjmUz4JUpxftUA",
  "key30": "4GzFNaNq7HpfBgvwejVA55hSTNqcqsDsLepp7d72MujTV5YyLDqQ8NEMEH3tt9wfFvET8KTLFJsHTsqYkDBX2RbX",
  "key31": "BPNtPEg4hSd7fW6csew8i2GUCphprA3ttzYodQVEzuf3DcTYBXZR94RL5nNA2sRpUjGKQyzhpEcXhbZRLqEQPUi"
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
