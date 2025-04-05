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
    "4r5zGUoFjHpE6pfYPYzdvpWSYGJ6fVqUXC7Th8xqJwzQdcMB9MWpxXE2GvktGEe96FAW4g1NeekQvbmanb73rNNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZR3xpQLHvcTuA3PwWCDPEpCYwBDjNWZGcyug3y23wj1rtVyMeXbZ1NZovgWpLSdRw7tLS6Jk64tDXMMXqL9XHZv",
  "key1": "2sPRDnA4yioPSRcupuXszzRYcbLgQV6L5m2kBevojoUqqxTs16yrm3WjVNyXKHxqndom797HT8CyWMzip7SjMkei",
  "key2": "2iRSbpEPGbkA9ryb5FDUY5E7yNMdKrCgTLXuCodk7S1m6DrPFRPozczMYxH5vjB5gEz42gwCHQF8iqe9UEbkbrRz",
  "key3": "4bKd5RXQXHRzaAabaXtRFJtkpEfZ5KnCaXLsddTSF96rdczXcTEaMkogSQ8EEDMPY9LNV6TRGMmXgWTpswAm3iJc",
  "key4": "m1AGKzg7NnUkBw9ke1ZyBL4HW1PBxdX5UAScBMJkqPw9zFHsP54bQxjsCLo4qt8V62T491g4jPL7UdK5dSxJhNK",
  "key5": "hSM46TAJ4mcpMJ8NSD55PJCyFSLEZ83WYSS65P8x4cQdhHp5FPHfdrRGUyL7feS1rq3qiCNiMK1TxwijjHLeBLx",
  "key6": "2sG7Qh1orY1uvb1z3d2kFB1H5tuGbAeaWD276dLVoYhYARQ42zVrkdNbta5N23zFkbZ4PYHEfoSYcdqrYSMey8L1",
  "key7": "21Cgw6JnkpVm8c2AosxBdCB5JH2Crozs6Z6jjkTn7pm6wgAeph3DT41Ksz6gyEodX3fT3cPS9shFfSfb7BvPvkLS",
  "key8": "4mxS5PfnKAgjk2s3EYfR9knraJ2Kf5tKDfTpd9ZXg9nSY4UmtXpTWP3Egb1K4MMT6nbeZUJLXo1mgxUSmTfq3KqY",
  "key9": "3Zapg6qot1tv1ZsCwSGYqBPoHvu4wbWC7ahEcCmy3fqcMdTCGsBR5YYXRyjbF59NnKjfZcn9WkfoRdpYjD2sUJWC",
  "key10": "3HGVycDe91Qx6EPNiWRJa4jFU2TjUmH2peKpt9yKpAcuGJmgFyDKzc4onHPENxjNvNgduxBKD2CNqheQXK2FQtdz",
  "key11": "2yPjGhExQ3Nzqf3pSL2mXaBtespnfPm3kXhUyf1p5JNqDZKs96BiQE8kxLm7YLgaCgqswFior5U3Xod13ifMQPBP",
  "key12": "EhGJ7BzcL6LerdUVCvHuMupMvrQySgzb2mMziwVdYVqAk7Ru9Br54Pod7P6QvuE1iSE19R1vDW3qmVdy6Pw3G4y",
  "key13": "5NbqNys6v5yaSZwxWKqRLiPrW7X4pmijJmwWLQNA9SdHt5uCkoziF5Y4rDe1eibPUmYhspydVLbvKXHdWdf6s4NY",
  "key14": "cAnmoNmZULScer7CBZk5NQUy19N9he36UMRvvXag6vVuxPM49SnoSqRJRhJ1mevDX2nEx8xwHiJK6xX7uKknfX2",
  "key15": "JmuCNi347P6q8ivod5R8prbKwgBoGDygZaNSbWQ5iMfSWWJqghyS9yCuDcbpDUruEV1sRJ4gsq1Arq9nxvTknZB",
  "key16": "5fDjhS8BLuh2UmqVwqPoLPVpQMLeaLPA6e1vqPqivUxLLDiuYpJtnWfXXwCmakBHbELJax5xQqwimfGxihXteshM",
  "key17": "PeB3zVrSLFGeC18p76NHQ4KZ8UNZaxy66k71DVZk1a1aRsiPDu197XXJQDet1Jg5ZVp1Z8domYh5s3MEhLuAB4J",
  "key18": "3Ah6zQ1ztkg8n3DFQ5FcnAYxmVprEYHugAaoUaiKvb1teW4Kp6qXuv6tVGADuv6Bj3fEeMEPTQVZZSnkf3gdHbrs",
  "key19": "3kSCtabLfXE6A4WzrgKBvHRUyE7pd3JWcsRcrAgu8stYNtYHGui2YQE96howKP7oXYx6Yh43awCg9hm3Rg9zun3U",
  "key20": "58ieNDuJnu7sBS43xgLnb5uoaEMWL7R6KtzsNNxE1hyfuhsH8znLHzmnbahEkfLfvqfL16QPHNJcieANVRGZvTXj",
  "key21": "4StETLQyveFKEcAL2S8m7mLcGnXZDeUsQCt1ZmPhTXpUzaXPGcZ7cTfQrc15Zsoe5EDoUiuvVNhvCBDhtS1NqwGL",
  "key22": "3xzsDM53tN1EK1LzmBnK698fFLeXqne8MAJw7TsRd1Q3iYe5M9bbU24994aPji5AqgKXnxPDNjzgTpgDmTGUYwni",
  "key23": "ZEYiqF1sFbjTmYXLoCDFWGA5wNspZbtVJQNNQVRYaqCMRwzsx2PsQfmzKD6AermY3hB7qtMywW5ZAVhPcXtiZyt",
  "key24": "3KEJQvn9FpKkn7yRXLxdnMfMMAcGa8P8pyvwMRcjbD4DFxTznZ9btEz2WAof8ZXmitiz3tLodR15unhQvHtjAkCp"
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
