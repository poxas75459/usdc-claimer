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
    "yiEvNBcZfW2ptN2rWbKN6g42F8QbYz43PUvMCk2Q5NEQtdf1tPHarfsv2sJHrXVco19A3MhJ6wGhQkZu5cgw4BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQFBQbfiHbpxVLr3TTthf7Vkrupv8yHCezAP6hWWoDfcuYBb8dkMWDqtvumrAno32ZtCwEsoxaRWijJkiZzfcyx",
  "key1": "3S6QYEV185KvkN15g759jxTbkuPTffDPPPwBx6k4Dcxyvggk2h1Gs2Y5DJQFXF178zujqsVfnSjxNuMp8uUxTcBn",
  "key2": "3RY8TPPh7BnP8iKkL6FdauZjA7zEEnDxKBPSBchD7T6BQwK8ksxGsYb7kwrjeNSteNUmqboNe1rBpsbMqKw6ahiq",
  "key3": "5kdmRHgwFLEHyrJL5Ptg95DHETyaQ6LBq125m8ox2NCZ7hba7Fb6LqxZALdWvppDg4Pt3CCTf3MHEoeuZS3fvJEQ",
  "key4": "3robBF1jNYB1iXxaw7BV4P5UTNa2xEUeg2eQhm1kThcLCzKqZPU6sqiaPZgz7WYRwqUWUrCi9qSXis8ULkkaSp9d",
  "key5": "4HkY4UFr7YHJF5VarUvYxTtyxhnibLRtFRWHaNT1cyGChkoW2oJxib65UghRqBbT9ro5uyxEx3bWgy271SFtqqtR",
  "key6": "5tqAdDbAJnvLcfFhXoamLSNXrJVrx3UNqsc6BRv4BzXaFrmixrazR7NjgSoh7DW2BmqYiLVCYnbDE8PhfxfvUWJZ",
  "key7": "dtDoo4EJKGVYgnSM6LnA5QHA9d422cjsD5WAEyRfPWYh5xunBosHEmaukoAFv5tske5ipkKrM8AUYSfGfkYPwtV",
  "key8": "574QJvCr4daV97eNYt9NMNZmF3rfLK9cziuvSUXwoiX2Q9xGaszt8ed4xn6LUe6d4WtLKhRFGZgYQcW7Zd3izHkA",
  "key9": "3zo8rTMDfdH3oi5oGD1vcNc3HJimGSD7X9kde6rMNVz5tMMHfsp15H1TLuuvVsGcRkWuKrc22R12MaVnuBn1W6m1",
  "key10": "31hgNHQXDG4KBve5hYhKvgTUy4A1KUxaEocLVrTbg3GZQwpRCy7SgF7gWpxQeMB2gGS4f8GJ2xc29y4Qe6aX69vx",
  "key11": "3LiejnCokEvZrTfk48aoWuZNgmSuKowqgkU54r6zdvakR7qPgYMAEHDfm12Zzo6SmXUMzenCYKqYfKMwtr5MtNSp",
  "key12": "3SuMsjrK7sn1pDYo6N2eBeg3fKeP4UgBN6jjniD83C76SuzRsmedHJ8b8V5DxWJGVJDxWaBoVxUKpQPDrp3K2FK6",
  "key13": "59D96BCssjq3bzmiJ6PPCMhXSNxoPtoTFCPjZfsNxFrh3cH5adscmG8XhBX9SPrtaqiWwYM5kcdCh7QDEdZFyBxQ",
  "key14": "5cWGZCU4Jz23VFPRwWhJSwY7f6zbgUXCQmo2viUuyGYHouDKtgYTPKu3UdeD9LA2nak38SBSNJhTjWNv3pgmEj3D",
  "key15": "41ut7Qbza4hFxfggDHnURk8d7TKAGFc57yWCPqd8LdHkCrFgdbB8bNicqLMYt2ygUtMNCiCxx635yxVhod7BFkGW",
  "key16": "Sj1jMNwRAXeJM3aP9XA47y4NQfHfGuJrDhW9fXyei9V4kFgTpoEP7B3oN4LLucbzrUHzFVUduuXa2k6cRsK3FLV",
  "key17": "2bZXD9TPCaFbHyq5dTEBURRqVuJaDdH35JvWTkvJKhvCZFzCmo8TpxtCQC5HFjNC4ExajwCy4dXJVfC8XnZJXwzH",
  "key18": "2e2JX4hp4EEsRsi5P7vrWijPbKBuJLCgmtrGpaSLLwVkCQ9qmgngJss18PSfP81u9ez5JBw4BpVAEhEqNptBeYem",
  "key19": "3bcrGTb16k6czciLDued3ib17GJXfBfnJsqnKgJ6CfXEg49dStuXcyBpP1aGEbWpWdvTKPpHZg4CxsCGJTCCzWoS",
  "key20": "2BMykFULp4F8qdybZFhr2FWMjcAJ6z8hRG64oKs5c3Sf9sRTA4hd9f2TMKidbwHpFT5YBdnkw8H3xF4LMsMhqji7",
  "key21": "uKuG1j5fPtW58nVQwUCFcPWGtxEPv2deXLziN2gcA5UHUW6LKVbtUkJJG2muH8djGMrv7pCVBHnVbrkqL724Cz2",
  "key22": "xs2YxBaT58xPEtQsYhA11Ak9Xk2N9RogyfwVB9BfBV5TkqUEo35JJcqLd5ixh3asWBvxFVmLN7WwkPziNstvdhf",
  "key23": "5J8CEYrFqbf1aqexqcDUGqmdeoBYt688bm9RnKEedCCAoJoUCoanH1QdubiEhmuiJP5uoPNmifo3zeFa9mnYak89",
  "key24": "5Ut9mtzUScnYeRSEPt4o3DX1cxSqXPJRK6Gk51aLXqogwnxV6bskCL4Za1FaFUaHCmPaq27hy5vFqKcBSToa5u4d",
  "key25": "64v2fd8frAHv5bfogU6i6HC6qWB2D9XaD8cHG6Ev6m6E2EXK1NM4h2neNegb9eA6LGrVh4ysXkAjroneiJUgB85b",
  "key26": "3xhTPYePnzRtcCgDhjQur6Ud7fqGiE53LeyTWXmb4JQybjK3HxXn96zibaTah6HqYYKuQW77HanqhgpBE1rnH1A9",
  "key27": "2kbbH1nUUaZUAdQb8c7xXJyPGaQgdZAFn3i4KLAaqJgHrzU9UMxGpCjvedF5UJdG7PKHfhZb66P1kJu6VKJiGFv3"
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
