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
    "4mJ2qWSyypGmymwN5KFMkCLLu1hNonV5zwDfpSHW1c8ooDphCP96mx2cktAkmncueayT6unHDUByTy6UMeuYG8yW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qrkpq8q7vbwzCqzguoaMGfwfzW5kgEL8TcTy6zxUmXBubsNFhWNNDNSegeyZgpShcj8eoWJTpX4XwHdabQZjGV",
  "key1": "5QJijVwz8LuvBNC63jiP32evDDFjHgGggWy4de1eDBCugJ7JZFukURh2gs5UMco1XVNjfz27UAsC8cYmXEXTGXiD",
  "key2": "4pM93NJtU1vixGfcbMJwmeWNAKgVzzM8kzyseNkE3UKxEaoqCDgXDeFk2LvtKH5up5EytjM6RnqMQFBseh24ECgJ",
  "key3": "43oRgcMqANM7tut1W79aoASRfUY1kdcdzFdP1h5CnqvZTNAFYhXhkcosS6HHWSyfy2fKQcz8qQ11mjiDF56WHurJ",
  "key4": "23CDfiq72Lq9WbqoFceCFv1c8DHfFYRv5vM3kFUYEzWAVk4ZtxMSQQJk5LKuEkH4qe95rzhCqLeg5RDZ4wx2bMgu",
  "key5": "pwkW9XLJ4GXRSQ49fWJKnKG4jbTDi54NuQpVKoFFBhGeiTGYR1z1fPtNouz3B2xq1NwqaHsGxWwwEKUeUwxrUqb",
  "key6": "fLVsLZNDcf3BDk73zRfSYUdPtPBVZjHj98p6qRH5bGo4LMS7es7kcjBNmmgBkbavpjgqudFXjnQLPTfUFYMzsYR",
  "key7": "2P8EnVAmH5EWR3K9KF4rTUTu2UtYuJvpiwXa2Kohbdm1wvsEuZcRktr3brwX3V5FviVgtz7mDPrXCozh9gwovPnU",
  "key8": "5aRp1Zo8xU3wgT1f4Qv9DYuLXvBEMcZP8atFQybTivndmd6PYYvjxHMYMrWEBF6gi25vnoWL7FC5fvKvtT2SN29L",
  "key9": "3hTfm6ihDB9iAiMgMFa74YodRv3aSvVYJP9p2z6tx9XMm5uzdExQKFfamVRkbxokp1yPS5QzmcCSNDo7GNdj58e5",
  "key10": "3iZtraprh2x28sqebUXPL2b6D61gYu16e5fhym1yd6WBWEZBmGbDPZuj1REB2GyE4B1TJuG8vx4V5LhT1Pn35GTy",
  "key11": "5EJJR3RAXt64hsVKLELz3jmV47jFeeeNtxP7haE6uhk3B1ahMWyNdgXqZK6y2YfPUzU7tfCvsT5gZuJnB2Pi2wSP",
  "key12": "5NNiqnUWTbHNMSKFoGzR4hCzWpzukQzhai9qZ7SUatV2mRbhwipqb1wCJwMGjtfS4ugXrHewrUBA9mu3eD46JBuQ",
  "key13": "3zbd3VXz8H4aMw7mhZ3Ayx6dXv6s7LbWGnPGqWW1PhFWyKoDeLGHeADfz98xaeCbmdXzSuYE8MAmKhtS3MYV1R6o",
  "key14": "4NkH5s4Uc2CanvXrDJ3wCRoff3dEYvTS4YiPDUVhgNReNe1Fb2HZUuoR7HW6yYrqPDeRi8PqPzquTo7Zb7whkX1X",
  "key15": "3a37PL3S3RrpjNTMMGQ9Rqf8f4mRJdEs62fy2KTrtB8KeHhozpAsb9MbN7wtCQBuLbw5GKjmm2NSwE1ncUEvJ9uU",
  "key16": "37GXRF7YTWEkTTXzRTJtfQHDdiposvQCD4BLpTAG7M4RaAUXFt9BjzQqoBNr7dFuMRMpmdPbYw8pScPeVCLvALce",
  "key17": "5R4unP261kbnLCgCdoszCGsgxfdbuihqxptwqhBmGTY53CifH3maH9xs2kvpmhK328eDeMTqq1L9JL9Y6n8yXQHV",
  "key18": "46bkXwaKY3w4WXT8yhiHwj89MhCGcBUM4MzBiD7tVJG4L5k3zHbbVZQVyjWyM8Du9StbbVATbY59nBHyy5BBTYDL",
  "key19": "2EDVALvXDtGpv1qCGTrCqUMoGPfzMWZHns1Kuy49G3yadBvBSxivs3hQrnetjfjTXrKANDcRKWQAWvBVpwdm4wp2",
  "key20": "3qDqpa8wFcMM4hTCaWeDTThdYV3fGS4Ngy54arWTihXByUxftwbRRuHjyPz4tVd62sqnCbtRq5B67d1RkR9iGY8Q",
  "key21": "5ZPe4CSeJDmsGs7naUaDnTR19KRTvJHiC9mXm5Qn7SFwQFjZ5xnJtm5yB79jJiaeAko2nLmgCwMUUn3TcbpLxKtt",
  "key22": "GCtqGDKNJxQYkH1HVcD7zyEkaVscJ2sizErbAd2VxCAEN7cMrizDgRqYJBELh1xNUfkqLqAWkLezvbigDVQkTeJ",
  "key23": "4VdfrX3gKzfZ7Ps35zD6wtXiU1BsJD7qhaVVKn9Z2rkbF1osPkyBHvKHdCSiPD3eUbCzovuiSu2hJek6uXNiqrf9",
  "key24": "41GU4YSHVkKAKyfxBiKKiD5GE2aa9mXVvDbbVMkJB5w2gGZrqM8ya6qYTvnmgkon3b6ZRvjkuL8giPC7uVP8dcC",
  "key25": "c7XxcuyUz6cQ1GwPpcHcabnnLdNtQP2EBwTyDZ45ZqBAjeDURaZygrtYMWb9br3nRnoZQAPJDKmSNdRXxrA964A",
  "key26": "mZM9KBGiqeSJX498Ck6mjXzY2qh9ZgioJxutKrgLXmkeNFjj8ybGyZM3zGrAXmAoHFPdwJARJiQ1jvdoV5qkyww",
  "key27": "kLfoeapcL6eM1MpuEQfNzDD9P8Tn9h8QVWuDQVamCWHKijQwzH4Q18sSitEeYpqoCQ4CvCwZJzCmA5kLf7kcqXf"
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
