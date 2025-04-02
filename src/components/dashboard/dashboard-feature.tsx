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
    "5QwM7DNPW27mmgiadzCjGnnYrdrRrDTjKEu6XojVk7dJ4gDe3CFe1b8eQptquGnzbfnNbTrrif87VaGyLqJxCttS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DkpnKKhQ3zXKYRVtzy8Z8i9AU64BXdcTg5go2nLQiQAsB14GWTDdYvtj7GeLhErzhVooT7A5BKugA3hijLoUrs",
  "key1": "4DsUMpPLztZ5DF1dAYnc2MqiYmihS5k2MFAFCmGEsvp4AGMFWFgNjvR3KU5XTvhrTAVkD3E1NF6GdYWMC3Df8cFN",
  "key2": "66frj5JdK6R2gfmMThUo4yWY6YQ8fM5GAQWCE42u6SFL1W1ujxFR1nDoYJVDMbzDkrt82xoBdjzBWJaA87Fp52i9",
  "key3": "2TetWKEMRrnMjB3srJFEcjHzeKgxYmaWDUU8kxpNiSkvwCSYbYymWZSD5U2G544T2R7hLGwC7fykjnFCFip8XNTm",
  "key4": "2M9iH8mbudpRD4vFpY2xQVohd4C6aSicpACqLusC6tUbexrvZpzL7phm1ciucYboKETGkNkiUYBV97Nqsh5YdU7Q",
  "key5": "3g6viNyXdUhvA1h7HkoyefvNCQTKGksyor9tttwJi1VLRJjv1ojMY9KzYDpwrtzSEmKHcqFEDDfXpShmGLCjp9Bo",
  "key6": "5uLaHozXzYuUptJYpTuXMMMzxj1GE4TkVeuBzoXbYM7gWtYdWAKqWY1PnN8Pjy426VnUxXp9SgWARc44h33DA4gb",
  "key7": "3MBvvakuvbaMeL8KqxVeHPqXdYuuQ5BU93Epk6uRUBnQAij2p2R4aoEtXFhhq3Z4ijWst4KT13rwVFXuGDzJw12w",
  "key8": "4Rwk3Lqu3hr4DULSBvYPcZ6s1kf2vL2BFXwX6yrY7uJbvL6aE6N2hArTbyXLUA9QaLECV5qwqHZAKmdt7qU54DFR",
  "key9": "5L18beTTAypcuzG2Q23faNsnmhsN3Mp8r7vEJQwwN14ccrk8y4CHD11WWL5VWSYJpHMVSDLW8SBocVEPobj9fe3n",
  "key10": "5cLA7SMFXjcmd9DcNBKaRSujvntQTAo38MuZhDyDLvCabygUwtfvXCtzdXgDDSBoVUduW6UmR3ptzK34MS1iz5Gn",
  "key11": "3A3TFrjCHAMv5H9Pg9vRVsVv2vcVUN8qEFHtBZDhGoRCuQpA47Gc29aV41dJSMGiFYKLzMkCJcY2pXcQqPQcUMMQ",
  "key12": "2ZP4EhjCpE7XpV61FptVxBt9gj5vWWF1cB5CVuwGFVr85SU3d5zTgd5jH3XMNRuvm5WH1uYfaUSZCNc2wbX8Lwxs",
  "key13": "29DsJLh5jy7J3UqLyGEGN8CytLFVYctqA3wkCB89KeqA48MrjuBoAxAuVVrBzKcf8AmaAbqyEkZ3kb4Jb4no246T",
  "key14": "3GfGyKcnC9AaiF3YCWMPWGLzVdXw7iCsdSSvbtGofULpisjxAo8MgK6zG3fkJ4TiArR7co15u7iP2xrt8rRKiKWC",
  "key15": "4HxLzv5CU4wppbEr97RAqSWtjzpXexdVtV1QzY2qu9UcMttDbNKznfPseba1cn7d5CgqqEiTjoAKYyji6vxycq2e",
  "key16": "Mi9uDjf1LmAD6yWUbjjUd5btf9b3VYVLH6i85NimLBYuHiFrxK9xXg83a8wAHmXkgK6mViN5fhxBrrFc2Ym3s1A",
  "key17": "2k1Jjx8PDvwsJ5DdB8QseSmcyWdE5WtFKwBSWuot77FRoGchtRcQuiqgse87zY29E8svitu9y83NtDJgVyyjyWdr",
  "key18": "4bDuvguDvWwzA26WpuNPLQc8EYQ4zz2Ch6SYmrA31xwFAXuCg2rjfKt2d3HqhUkChwvbrcosoACJgffrtZFAC599",
  "key19": "4aQhM2HhWxxpXbNq9wSKZtMG6wn3LVz19BZYFMtbJXj4orj3nPctRJozwk6QYSEFMLMRj65jrQ1TrkVK2tSxMeh6",
  "key20": "5pPDfD6usj2i4upg9U5zEuX5dfeYhe91KantWGbGYQU33weC4MKwTTxnJDQcfGtTkKSvcGPe3sbSqHeNJEvjbNwc",
  "key21": "61dbjg2WNonThwvNFAHHmPfoH9gqAgTaxRdx3s4XYgJpJFQSrS1skwYE8GZKqJNGYynWws6TDbZUVgdD8MLv9PqN",
  "key22": "3PVYZVRjoj5xa8uCcnbd2z1eHx5UdGsCuJrXJpibToSkWQeLXgExa86hsVGQ8KN82t9VesnYFhkd94ePmSGVVms4",
  "key23": "5MnLvH3dGXC5eyEUjNMfyCTYbnvGwrHHGzr3BYNfpBLSTjhsQFLr4tTdzNCGSFWqwWK7QnJddYp4Gu2stpFn6C3W",
  "key24": "5Qvc8hBCXawuK4w1dEVh7RdmGFPp6EQmMmMGb89ikDb1SiMPkevL2GDxPATqm1y1GFNSaJNsNkVUcZ1EN3mPskUX",
  "key25": "HnDGAGZQT9WYzyMfsuPe7rKzH5jRMKECiWqorRUFQhgxCsTeaDPQ5kQWkVkVdPh5H4C8CyWmDSGannotwaAHrgK",
  "key26": "4A2VzSZf4V8g6624K27rjRSaDaU2xhKmQjFf8TN2zxtfPiq79Wm5g5HC7AtHB9mQ4MRFprVxe1pcNiCLEUBeFDLY",
  "key27": "5rByoQCb5GxJDum2j9348bRFqE2oVMQwMgwjn3NpurAPCJNbeMhq3JT8wUBAytdCL2RHbUUYSbz1bxw7sEsZ9Ycg",
  "key28": "JpSD5q9FT29i2XPYAtWUVW4VLkFLPWEnn5j2pfBeMaftTshCXnbuc743tYacSstpXRBZ2eAP925iEKv7F1KLkZU",
  "key29": "31NDz9BXEcm2Z3EecYXnBHU9DaTPa4932FGSd85YavuQEgHRWVvkaEoSVhYm2TZMxmjFxm4mapt8RA7ZkbApg74b",
  "key30": "3fdd8e3DPkGmjaeGvFod3QqBnhma8E7QN8j19jBdQhagAcrxXhBvxWw55auC7W4jmAaSGP5rS3w6m112UQ2VrhTC",
  "key31": "3LKfR5sgQ38LfR9LqfCbzCVyFJ8ZRrwbvmPRixkGkdZXjjweELNDh11gprJZzdBQkZeVjsWzxwWRTg56wZUMUXF2",
  "key32": "sKWuin9ydAVB83VAW4BSkDogVgXiQjnawg4sUnBMihHbvFDX8QeLU5S5g1Er5cD29UoM6NtHrCe8TPVGCejuAFL"
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
