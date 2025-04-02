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
    "2ZeDDkULqGXTa7SSGSA59VjftQmQbwUVu6iimZHmkEVbf96jrLqFLHmcT51CejVmga1iC3WLhLEqntUUxAVAA4da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31TRU8HrpwXwDmjXJQMfEStiAqK4bnWwg5G7cRtSvPkxQYB46CvxNXjFvRfmV7Z8cg1HEcAd771fJRAcb6U8P7Kr",
  "key1": "5BQPzKKqNTeGkwcog7GAY8sZp8tFtUy1qR24Bza18by5v3RwwSjQa7Db7HysTyDoyEKepUdX1rxA4c6RqrUKBpbv",
  "key2": "FxusPDQtdsFkDVqoUCZV9nREhxbSwjQmgwN7XUgyuiGAK3WwBJo1zgErX6BAnkNgwt5hsje5Cfg5TkmPa7qDn8p",
  "key3": "NPEZhTXr7bjUdDfkki7HzAHqBsHH69NrpRdnQZ7jg189mwEbTXf6DfDP3GYv9WWQrQVm6JAzdZ2Tekk1C9rnhjr",
  "key4": "2FC8yJXuVE9g1S4mZyEHjR4QUUTku2Ws93C2HtDfT4Te3eTJWnjhQ3PtRvSW416efXVKauwvAPn5KK4PYHyyUVvq",
  "key5": "rxufjX3Va38cxWeeQnrmWnpUqapCXZbVeMTbQuHePdeqxGnfN1v331bEoB96Me3xq5QkNNN1wdeXyCJaWwL6jfe",
  "key6": "a6SPbEbBvCKUQQQ9XT6GmK5z5uCVezuVG8aCcyN3T2YBptRZGi5DTWnkukrFvTSRF71h6nNqHKoihrueHBN92UM",
  "key7": "41g1ooUd3tVvnLHoRSL6uiLyR2QoBGhNP8aksJ8gaqKEyg2ZYxhRf8nnTQro5kBiChz35nrEEutAPLQXh3s8DvVQ",
  "key8": "47fF24w84SoFFChZdXX67x3Cxt8HVYut73Wsb7FKYCa6h9okmFTW1c3NySMJt2DXaTo2PHjwFhXMFsTZ8TKv97oL",
  "key9": "5MzJCmv5wd4sjkee7TNu8ttmMjqM1oVJcUAd612B4fqT9ZE6rDqYRFpyg5NnJqPEN1a4X3PGi1j7wGTK7szAh7vu",
  "key10": "2zbLH6EEzYWN1PAfL9WzDCsHAdL463iZamfVPDtpaPJMAM7RfDXZa8oxi46e62fcVsqYeauzSQ4kZ1Xq79sWXBQ5",
  "key11": "3kgB7TPyNgZFouaxEywgpCJTerinhr2JQSfsn9kNphSRPsx9xj5cVvnCWucWRTgctLgru4JYkcidkD2wFPsvDRXP",
  "key12": "iNCLTGZE6ESn9cHZLxiyzmgbYKQerjnGkAfqTKWPPohP3gYsXXvqAXWrVyi9vp7g94rLYLrFvdFs7a92ifF5AF9",
  "key13": "5dZjYXZbMj3eYdmv1FKMWn8HEFJg35cgKU7kV6bywAMDNkd5xmXwCprhv1v7BTXA845dP6GC1QRr7wLVX8zKHmVX",
  "key14": "64UiHhsmuxguK12pnhFn7wAvM5VmyyCBYVkshM4GJSRh2YGdrgq9i1aY18H4Fa4u9Kb7bpVJCnzYJzuNsuQ1ASDV",
  "key15": "44W78UFBucy8zRcyCbqMUk999wJuTJh9sN9Ha1gyLXK4Gd8JFnNgbCGg446TdZUNG8UiepYFqVGN1Gcqr4LAoE7J",
  "key16": "fNmVqjKusBPWSc4YCe6GnnU7BXEdxsbV6rnxUpMt15jfdJRmo2BL4Rp2Zs49heReLYhHypHyUcbmmq1Nupg9bi3",
  "key17": "2oiFTwhwMTMk5ZkNaGeK1HMSXqnMt4hjke4ryMN4GAbFgNvGvXF7QAAKcokEDsS9XMxARQ8xNXJrHQb7FyA8nKQm",
  "key18": "5YADLaMwCSiZdW9azG4zYaAyctEFb2pZ77tCaNaFXNVW9q1WZhtBaEfnuMR6C64xtd7XU7eCMfvPT9FiThr9CE8R",
  "key19": "2Aeokct3EbZfx3oaoHk5jtncfisCGojsWZNX3uVbmqqizruoCesf4pBPaTLikaYCHfjrn9o2tvdddEfN6MTsBrSe",
  "key20": "6zaxHVjtNoRPHtF3e4b4Wp5LeGmV1QfcoH5AUvwqjbBeHKEnk8HuD3NxbuDSMNGRDwyBGXPzfMW9ai8nkYNEPgg",
  "key21": "4bkycJ31b4ZpBW8PkH5xVJje56GafXDEBeqFK9Ah4k8ynec6cnaJyL2T5gK99oj42wCtZdF9vffYTisyJAptRs63",
  "key22": "4DyGzteDdgjGuSWgfHK2YQ6zxdPbBLSZRAKwKWLL8chC9MhrKTaa76v4tZmoMEuo5C9n8jrBPiKfyTn326AJbBYS",
  "key23": "48nx7tzHhftnhwHgWSEtvzCA5iQy2GANqhkTuK9TcfajHKUsXt963GW1EtpbeWGcHLsTv8j5AZDiD3Logvx6yN4i",
  "key24": "4HeqknHw2vwhJw6gHMs18QGHvNm1MohALSpPWxg1BAADQ738CAcsJ4fUjcm6sBPywPjHQgY51Nh4HjZTsMjAXJXf",
  "key25": "4GoN55VffWsE28N43H37Zau5szi6A4bX14RgxrTxWt2whPBhnECigxbNRRawqcp5vq4xLXm9frhrhFanXzYxGZZK"
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
