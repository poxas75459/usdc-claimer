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
    "5hHa4YVngbPfrfxXDWkWcd5vesBD4pL85NQiqG8R9v6fkrEjwM2qqtbvehjC8jPdCLtXiBVvTpVYSxxViGsdCbCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jkh52o7zTTDKvVPFL6e6bEo8ie6rbn9czZGg5EWucbgQESCrTrTGtJ8pMrhWWabF6qEig8QRTKZMMjN6fPNXSAK",
  "key1": "29jkUPnWz1Q1pV33oDranmzU5ZdJnhgTTLnZfc597o4U7aBqDHetdErqmzJKTcS2k1Rk7FEmuUBr5jEEK5UawDej",
  "key2": "3eLyavhcwkPoynxh3rNfZSQvzPLEGvBFDmRxbVwpBhmQ5xmtTzm6V5VbpEH7HauoyxmhDRzfHfqYMxawPpKaqtG4",
  "key3": "dyyh9dUU1CmG4E6oD1CYYJ6R1SFMsSgpbJBBFrxS1wCcoe9CL5KDuLuChe6aN3XLg2h7SsZs6mjQkw8ueYmArQW",
  "key4": "3knafQw9PkHXCH2XMtbcNrnSoEpgP8K338kS4UnNPgxjhd9BKTzKJiMByk17pfJm9tKg1F67dQJRL1DGQyLYwuz9",
  "key5": "4GfV3h32QNfPb1FzQrn3ys8Jw6bjej8ztNDwY6h1WnaZzaxh7RW6u53pkhHbqGaMnzr51ZBdxJBDWfqAV8uZ7cdN",
  "key6": "3aJGcGhaVoR18oEta9VjnvXptz5EAT8TRen8mR64d3Uvb7NkiS6p4p6ciSLS5eMaEjSGbsMpRj5gWHsbHtRK625d",
  "key7": "3urRECDFBnRqZxuERmvS8hAH3qQFZu7uZmQmNdb67xHW8JvaYcMWfDYwGFRRmN8NbnTp5Sfziv71snuF8EJMBQGp",
  "key8": "3m8zTo1UdefW4NYzDKdanKPUiXb127MqaEsVSTqAVtv9T9UWmujRk5aAGK7NTaXzYbwhQkWzYaS55C8j6N5JVBet",
  "key9": "4cMXHQjnUauk5q4T8JGuFMpYgqw8t3fGM2TvQP75JhWwaBkTwBxCJLUvav7ttPZP3wceooBfUZwwdvf7vo5Bo5Lg",
  "key10": "3pUASN2Z2JNKaEZreu8sNuzscDuUAKtMo3o8rk5LdjGDJCtiqPrJw5TfGGtnggy2K3vWRDcqBeL24WMqe6tHEz5v",
  "key11": "GKj887od5AbFBgT4YPfjhmvfeuz3GSNsVqcFa5BnGChUaScD7EGVMRXPu7LkPckp3nmz6U1sz9QCaNnL4ntS5ed",
  "key12": "3qkMjFpu3UXK55rjqDBgXBBc1HTVoeqmJFh3iPFY4RgbKiUUYoTNGw7fv2aD4hy3sWtKNCCKZN2qp6yyG2PV1QnF",
  "key13": "2vvRsDfa8kEyRZJusBrSc1Nvje5aSJqBPBgd8qa33eUxYVFu1JfPpcrZwUZWtenNnjkvh7EMf6QWgwjJpwzoxkEt",
  "key14": "4zPjVyLm7kXPnad4DCPvgLhVT91LPJRyd7Fo7oReskXxcdvhfDXAtqm6dNiutY765DdMp6iudDfDAF4YUJvRt2Y9",
  "key15": "2XqJH3SK5QtPdpLaWuooJxWkvJdXSwcBWeR5TzHKqE111j5p2U9JPjJfdLvQnVR9hjuK7vyMpFoVWUPZXCL4Ybgi",
  "key16": "3BWdXng1iLYpxZ6Ha8D1dc984D2oDCXxJkKim4M3joUuGJM6gwZUzBD6WGTRzSdLwQmbff2DSNrtd1E3hmsC3Xbv",
  "key17": "5Pqg2WxAEs539bwWfUMskQr3E9toprwbdxfCmnaJXjfv4YbXZ2PT3q4pRFWmFiiowXoKLTGzj1W1Dnafi8zx8faK",
  "key18": "3TknGYx4CPYWZ8xW9gSqPtxr74zLYt4r3UaWYAqYyQuSGAFf67Fh7AQU1WcCbt7eXqEUPZ3smvMBfM6M1xaJ4Fy",
  "key19": "45Pgx8Z58jsL3Txonm9DsVvUyXKH53pmZ1VUdxiG2NZgyN9nAFoNr7HTGpGqYHDzeEhEZEBVanF3zbuasEaYoec2",
  "key20": "zLrbKDV71nBKiSPbPQQjodDTgUU5UofpKUc1NvmtLMdDbd822PsxfSAwH59sAS6A3SXWBY4YxwMQHWtyWQ1E6pG",
  "key21": "3apJWDtY8pTr9LFuMBiiTDopwLkbRx6hN9TTPYivSaceMFMDtDnKQbqNfwWAx5JA2v2p5ai66hXFAkBvdsVLbN4N",
  "key22": "G6B2fYWpm5iZDAVhvNK1vBSnCPJ7tLQDZ7THLLZCUhDhF6Xj31Rynuh2WGMmoUVpadRSs2wQChivCvD98st2LXh",
  "key23": "3yrjuc1KhEPLbfN8uCuaSCY6YJuKv4TxSoKDbofoJ8TeykepR7iB7rzEWnxbXe6vrM4Do8GxvxBUQLzRwEp3fiwj",
  "key24": "64fG5U6rSSWKYgAyR5bYBKWoBjZ6Nhr6zr95taeyLuWixRJB2mp8wq3FpwxtdxuCjrJFUcsY5tVWhyqp4W6GuVqA",
  "key25": "7Gobg7hT4BhRDuAbJshtVJRyg73yrwuM8iNkjVFJxn9ae9mfKdXivaejtj4ZGJsJ5ZGLz2H6wSLgsG4mmseZahf"
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
