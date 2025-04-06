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
    "5fXT8k78aAiKViE7YqCKZYARsNPCQYrLd7ZGwjWybhiig7eQv6jvq14dTZzyh52cVBg1ZtEi1CprV3GJvM731Kn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fABU5GcqphjhGFjbfMaYP5Tedp9kLSYe32P8ot7wD7SGjnvTzxHvHyLGHxLxmQ1pU2AzQCF4HUz55bqyaGSmz6U",
  "key1": "5Aacpa3xwK9mZ4pMDt6iA4fZfYapQVEU3exPaXLgVCv31Sm3QdQxbPGVBjkQXww18id4AvbLiFYMdShuy51ZhJCE",
  "key2": "3Uc4KVyfXc5PPhjPTakHc42rBz4eYX6Tip8C5g4PBu4bZJuUYb1k5bmQ9zwJB5fFXURx8sCWRTLcNcBhq7E8SACb",
  "key3": "5d4MVPkryL2qTJ5zLbq8voPbNBRXc3BbdWGvrbxYFXK7fYQuPHc128uycuJGEKKmuirLkwiymVZkC2jSc96mGsVU",
  "key4": "23NWYDuQ5ucidNaetJQR7HUy4CTWWFavS5NSVSmEF1jivv9T2EquDGM14B3um1JfJyRB86PVnKvoAbZsUmhp4mVn",
  "key5": "2sAWKQrttVHFd68tYW8tAVM5F159j4fsUMVnGXuoqFHPXpUfGXCSzEj9zQG7tpexRiKe5wf5djh2Txnf8j92dUvE",
  "key6": "sBayybdX6gPvro4NxeJ9H2nb2oVLWKRhF6ABGMt7TwMjkzT95dKngGHXQi9WFHRekxqAGohq3dcaK5yV5vZCuZd",
  "key7": "4XxrY6cCS8JXvjkKAPfs7rJwSZbZNEjunAksmLof2zU4DMrRQrpdETmtvM3Wju8Jfbh859MTrWXvd7zFdEdAzEKP",
  "key8": "3HaXvqbxZ5Xrtm5UpMBo2sb8riiHwvzWkxF9D2B6LHfx8LNUNrZkEhcqdKKytLdpNqp7r8bg9orho8NWrq8cJ4PZ",
  "key9": "3horuPUh3xmzCuQbHuAbTduvBTwcPTdihhufb6SMGHqbSUxHUnEoTnMWZtq6X5inEKuCNhMoYMX3jVnEKJUWJGyf",
  "key10": "5SjmoQRb1siY75X1Xgfs4hkd3t38qWV1baDdMf6W1RvgQuYFcLznFkTQtAMLjwGx6NChfe4sv92ECWKrZe5ZAVVS",
  "key11": "5VKtGN1oCqHJtsKETFiTnRTSuDBFGJrk6pLszZtLGmnUJjiAGXi3e6KxFL99HeaejzGL8f5nFSx2mim6RmCv79XM",
  "key12": "2DLRPBYNn9y1MoBWJLi9egiCszqGtMMVFLjJ8a3B7wVcN6TpBqtRNjtqzAyAxhMsQ6eBfzzxPd8w2cd4ePNmo5uw",
  "key13": "7smFkdSJZchygTdcr4S7bhzLZBAVfLoyiYxJ8WPfSc388NnnJvniHPC7Y7LUkBrkrJohPHRxHyzYx3JaDsf4qtE",
  "key14": "5SvZRsVyK9BMm4UQFhVhoNaW5JBa1sDaQLVFp2cYhLxUXtFWUsN4qPqEkZY891fW8i5bWfkpizPYZAknXL9iJ41t",
  "key15": "2g71xpBMgBxe8sFptjcR1NuFn2sB2TmSt9EzTafn55WhGJxX8MeyYTQUPePF1gJnmqmQKr4GhUqE4Lh5R5rZbfm1",
  "key16": "5oz2NqwYWbimFNUjGahFGUUYyH4FgXwMcVcJubVn8UYppyEcvGYeBHLgisoSHbSgwmNLuRDNE9EFeC5DX3qpuQha",
  "key17": "sf8jGmZjfTyLrbGEEYiFMzBnNsYUp7ZtswhYDM8CbW2NF96Yn23J4v6wrQoN5vj36n3Q5QEwzQiYrQTcdSNZLwZ",
  "key18": "31fLkM4imfGM7ax1WxL3XyE1LSWpZghHoG6TX7Bm2zrdAccx69dJS6sd9C7i8JvZLM9kwtVzB1EeQseFqAThRs6g",
  "key19": "4BvGCEmsJ92pFfbeStFo8Yv9zcgTCsT1YUN6uH6cRDLwPHW5cLNuuUnSooHu3Q1XXZ5izu7qafpZLe8Eq5nZCjtq",
  "key20": "YXyaRkGVjcbnT8Z4LezK37a3NXe1Wss4mV9emq8jeYoPFqkW7QYCNhP4izR7p5vgu2ANtfsq9KnH2WkicqU9CvU",
  "key21": "2FiYh5u4Vae7hgkkq5ThrQraXVPcNR6qQFhrtF1HfkXhDXM8CobujLnDewfvpFHvnaZzVZziyVVSQZBysHYxqDvz",
  "key22": "54kvigsp4sc9za7Q7L99K3FhrQZqE7QgbevugUmtT2TztxmhV55gpYS7H8nZyTjXy2BEiUR68sWRmEPE39bsGVpy",
  "key23": "5uLxk33n9qotPZ1rPdtgw3SpUKqXvjii5kAcbeuNXUuhkMUYQHfc7DfBwriLpt6o8a5Jb7vTxscJWwr4ys822WYh",
  "key24": "4bQ2tGtJVNqwUapTywy9SKFncqsow6TYxfbruCiRDBMaEngiwnGGU8buLKhMiAWRMFCRPuEH7jpFuKTS9armkea6",
  "key25": "2fK9dLgZerUQNjDipi1sFSjgkgkqa8CURFkz8VYyBvFrkw1pepyyPy6vp7BL4gcoa5WQrRBeM4CSvG7JrCipxd3e",
  "key26": "4dewrrfQtkvMP76y5Bm2iFH29JhdiRyEoSbNwdguMUVMoejZbuwgtFBRR3yDUuUj4ALP36fsBNnJN9rzjX5RzinB",
  "key27": "4mYkNYBpPYc49HurkPUtdN36BZ1Qt2NaCm7uqhnDVK3dzGhHjiwyDTpuaWUE2S3AcYhz7vLes3acSpyoVtZt4wy3",
  "key28": "5WEoNRyr3BMeKzwVD5KmQi8iipA832UBJvAmgAK9uTc5jup83R3EispsK7xjqxL4Ny15xgEE4Cj2nqSPbeQfyoSd",
  "key29": "2UXWfUfXrwCEVg279byYkQsVEWJ2PAa5kTYH3UPLLjowTxqAAWFxgMiBuy4eseGcqFsZ26vWGq9zEd9vpjt8EUxY",
  "key30": "46mJa4SmL7ST9kUvex9ViAuwj9zD4SGFErT3nfmq1H4kNM4MKCMDZCxvgvwGd5p67BRu99k3gce8MDsfEg8YfBsi",
  "key31": "JpeKKYrgVezijJ6KErBoDDvQrnJGA1WFSvzuSR1kNdUVVD8QvT39ZoJ3NLdNPBeZ2GgiBtFytVhYzsnYGZ3MMfU",
  "key32": "2ShbNASa3y2H2mq1JjeYcr64RkWg8G4cRyU42fx8KYsWTVrkL9HomJb5NRTEEnVp6h7NfFXJn8jKoQmBfoZpSAkX",
  "key33": "3YWmMcYckhjSGnSXPT2GnFoWcYKCYFiFuimKiHdDgVHnBJ3EsfNM3TAAXfrvwbhpf5szHKR2KVrqcMvqPy7GUsoa"
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
