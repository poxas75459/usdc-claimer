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
    "4mCLChVvHxF6JzcHK8X8wUZgFecgo9mBDAhSBBXxAqSC3Wk1wuiaQVBhe9xod55ZGeLTXmDWKvcWT9dPybpYCJKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46GD2uqvPkDpyfveLhudBE62xEYScDhkp37o1FCs6yX241hLU1TRtaqmRXzFq9CadHjnxC5WAT2gu1bjo7Aeo262",
  "key1": "4P5CCdxJSKDnvrN8QzfZ4oKTZqmT1y2cmgaFAefJ27Xh8jchANXJ4T4fAkzvy3ZhgcDNXLCVgWpSiwYWvrdvcmFT",
  "key2": "rSyELCWZhXbXbzK4pMFf2RRbAEA6GE3RCuZPrtasj8HZYtdczaF6nmEYRjcnpyp9vqduGo5NgzNAXcZZu9rkHKG",
  "key3": "3tMB4ZYwXL8WPvwgnhjoMxGXtfN8PwQjicp9si2RmjYjrGPCkAFejo2CNVD8SoPJFUH5U3zRE579VT6yvnGqmra",
  "key4": "3QtZsBGoAopXb6WCQhGFqb6P9AvdBLcDf5iK7KJ861Xo7bY7kU11Fr7XtUMWtaDesp2v13Y22GFYQBfCgPoDiYNj",
  "key5": "5uZhWrTHKyd67Ftxko9oJ7xhRzD3ywJvj6rFMnbVHvcLjxNw5RsU57k9UEzVEfdHTtsjwDr8WXjpPG93dtvhhYLN",
  "key6": "3sjvqfgd9DGGJgzeoQf72i6unRUbte59w29QSVUUTN7kbUdEZPxQyfx79tCpEx3H7vsfqtqm9vqDYQuypsJW5ehV",
  "key7": "4m8ptwHYfiRH73ycsgRPFGrGmUd5y1Wr8o7QE5SR86bHhPF6mctbKn68mkxguQ1aQi676YuW4hJ3an8UP95jPSdr",
  "key8": "3cJHg3QcAyez88nRbrx9q9t2Hkt4PZqKcsA8PuM7x1b2fSFjeTEiHZ2dDz8qs5iod3N4Uud4AgeypmYFHLXNdzjn",
  "key9": "4maVjpRPhSUy9WuUEZFXEYfSes8v7z3vS1oFHB7ihPKNYz2htLmsB4y1Y6JmXqbFhPWzCZ3GMNfykceshF5rkT4J",
  "key10": "2dnwg1rSa3KeEEs1ob4rBkmHaSCGtboQBQDocn1JNEYPD7igbvxNVucrfLF5yf4WSTsRum4aNqQKBDbMc8sfSNsY",
  "key11": "4poFfw4AHUzNpPaqYXQFLsZF12yAf4y9ZTW3LFco6U5TZJ42ZUpwDFDzTWZMe9m9GkrQMFge5pEqMR8DWAEtVNxp",
  "key12": "4TXqV8PSPVW5ypVfLzDkR4FbGoqt9cpmk1osQGwr7E3kAC8eu3CM6CDDy849qMaqzXvuZ7CJMYPTbWkVYMnHBpha",
  "key13": "4Lv62onbtiiCfu97Pa36dADqgFs6MNUbszNSVKV327mcRo3h89w8YAXfpQFgf4C5zaDUqtx1GNabm4haZTVpEah1",
  "key14": "5Sh32DeZBVWt8sWtLGii9m5udJzAyJ58BiSJENwGzyhYk6iCJoeR2wyyJsXGRQSQbycXaXYxbKUTRNTfgnLJickC",
  "key15": "3P5F9CzbvM6t6qKkPRWFoPZwq9uJVW1XuNwypHCBXnZkQ8ducVMvu59Xh7eRxoTxNFhPr1tFo5REre6xrSHoCYzV",
  "key16": "3oATyfBhGhEcXEJ8wggy1THjwsxMvcijWBsan6G8A7JPVyTbUhMuwo3ycyX5WexPp7aUfP58yTAguWPtthaD9A7u",
  "key17": "3BbKMARtRAgtuMLrYFLRRTwtqNdAt3Ceg6enQCUhzBHbqycVG56rpKPSf1hsK8DPCrEpT2aiAwwqwywJjoyDa8qj",
  "key18": "2CgRcreStuo6pjuVuboqLZoAyQqxBVTurD5Dx2WpKyQsam76A8YThDRCaWZfa2aGGPvQVwdcjnwkHdqJ7nnoDYfZ",
  "key19": "3hH9G7oATDZkU9GnHfVJHgAqVM2rFpxNyoHK2eHiSt6CqztRG59zUSV13SwHhkQ8ixXQGj6TRLSADKki6Zdz8kfG",
  "key20": "2LVYk6UG18zKEDxcrDuCtF4jgrSonPDxmKB7cM38DBKgpqi8h8xZo35W1ZQtKHaXwzz9K5dx4q4jprrGneitSTVN",
  "key21": "3oBGXomdz36vrVkZ6anKbmVULKGwtAsLTnuagbyL6CPN5M9E7BGqpKcW7YrBppxh4Ww48WNfdhottNCp7qaBMgKJ",
  "key22": "5Yfz1QV9eysJ1yUgnTh9K7KQRpL5Rj7y9m3rY6AS35oUSXPLYhKfuT9ubrP2fmvzxWEmgo7JkMjgbjqLW9PQ8zgd",
  "key23": "4wDxRXZKzRbmcP54cn3hQq68oHxwWJ3VNymL2ddHPiYx2sveWArwzPSCp4dEj9roHbZhFxvTXagn8xEVWbcfCabn",
  "key24": "5GP3vcAC1TgQFCWMWeGzqHncxcpYpXFpc4uZKWSgSHnXXXV1yYdXRjw28BktXbfqSSADLJK9RcS2rwRUHnonpeKt",
  "key25": "5PH68k45gyoECBezBV2bXiHrQPnZXTLZS76kcvt2KkPoTTSUw5wEAc9QARsoYC9QPgtMVQUjiMji4NXPBVFzinmC",
  "key26": "Z3TjfF3FakinkAbpwAzaP9B5CFcafktvWXwLdqc9m3JjFU7y1k3wDUHyxmGPPqZQXt1g3sWKCw5rHnSUfC52rmN",
  "key27": "nRzmuvv6Jkppij8z4ALG3XxkM6qyrFYFjs4g3dzAxJVrDsUrf9K1ydSBkirQJhxfhrTRMVTSm4q7BPerqHSRXPX",
  "key28": "sWykhW7NNKaZSSr2nmQ9N2GxCYmL7kcDaPSDiXuPh1MgnXzFpAyoEvSSQTnK2foZamyZUH1qtXSKTNbmSnyLFuF"
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
