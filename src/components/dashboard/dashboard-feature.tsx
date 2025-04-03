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
    "gtshmCTzst9hvNNiXZhEjhXLaTrwpweWzrXH9qdVQHEmt1EfYbGp1MbkCnAnUNzEnqcKBSy3Be8wAGUp6svWKGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UopQ3aJGazFcKeA1p5myxUwPELYNLZSveEtiFdM5mZ9vxQtgGAjaioMcVs3QGBSi8N6ZoHDem898HjxpGfuypQ7",
  "key1": "4i2A1MQ255e5DH5fM7wZQLAhFMkFfkH4vJEZSuudVXEF8gQeeYdhUaVnfjrn7aDpq5Nx7DeoM1XebQ14TEgqTQVp",
  "key2": "2gjwRaTca2Zg6hdbQWoSQs5Y3Yv5NGUikodUNkDpAV6HQjpxjbJ1ti6BW7No4nqDbTL3c6nx6eXe6iZ6Ycq4ARdX",
  "key3": "U3HjLPnHyDPEeethcoNBdRccgV4c1PeQEEaiWxq2b1uHb6wjrGfvD58Q8DqsHtnDFwisbkDJncQUFBK651RnoLL",
  "key4": "2yXaMZiWo6TeuR8HE5f5wDrMN6JUnFCv86igatn2cchwnnGrhhauJhJrjjBHiWzFLRjB9mH4gTUFiPof3X8yDEJb",
  "key5": "2X1fj65uQnqFrgFzg4rhdRiTYQj1VuX7cGFwpUdPBwf9ji6az2U2ZqQmYL51Q86dFMZB38RHQXAhgBFnrjA5jH9C",
  "key6": "3umhiK4UjKiBRpDEHW1kNPHgZEnrbMxxHEtyd4xHoZC4BdXaEqgoNEnofeNLKtvYL7HwwGiEYrqGUc3XvADnKXU6",
  "key7": "5jFZ2qtN3H2tsn4FJdzMVUGmG8nVBZQf8hbJA8D8b3KXoAxuvjmHYXn6Dd2FuQSN79zoQaMCs8kPdiMBh25qTBQ8",
  "key8": "5DotkayuMv4SrCjGY9qyusLhjD6o8UwKao7iMPTn25MaHNHXtMKjA7eB1VGy5bKDcWVWDziojh3oWfTk6XH7p4yZ",
  "key9": "4Py6yWKPF4DBdvA6bPi6EhCoeuGnGksCE4PaNwtfNYiSt8cvgGdMzPL42LujtdemhuDvS6KV5V8W8XuAjukrJ99w",
  "key10": "2hDHDscjzAtHuTqepULXZUoLZFdvsYHNG7sj3ssRbost1m4gAVWBWRNQCi7C6aSQx6fcTXZ3v6VZZfDXYwA2VvmV",
  "key11": "3o3NbSMMZJvDENsG6VDwoi6rCF8FcmGoWGp5iXLgwKT4MX3gr5iTG89e6ix5MRdRQ7L7oEbXiiWau1uBSC3oWSVV",
  "key12": "56u9L1CC2T3H4va5RtL89fSaRrX4uwNAKHXchUS78USJyGA6SGJoAPkhBD7rthGTZtFbeKNQPdz4fACqVeSn7x3A",
  "key13": "3yaGJCyi1RACfYJTvsPiEVxyT91AB2bRiW2A5X8bdxUFaesuU9WC5VvJkzuiBnWk3rbzhiyiBEYPPhCYjjYEwprJ",
  "key14": "3mHacvghmSKkcvfbPNVUVc6dKvfNJeNLfXREaopUyGAVPmXyn2ANVAF1WkzhjgwYUNFhKParTyXWYgoThuCUZ4Xu",
  "key15": "5jsDpyCn3KiT1SnuQxrN5WHC9T9NTGagTJjZxr1kQbbH1AGdpn5RJBF3Ha6iDGUKG6hGEnh8zxWxWYiQqTsou5Dj",
  "key16": "2SLjoNquTbjFJsB6sVutpygHNGocq4Naz75HHze1geLJUiszmMRgWS7jtu145mHRZVuGZaDHhrS9UATRJJEMbuGV",
  "key17": "5W6WgvxwsPCcvbFfVSS472StDeF7NWM4gyHCbrSKqc93FGAysFYkYNGKTncnxfqcVsAeJHecTqSQmcCitbb1Gxfj",
  "key18": "3ykasr6D3Z45fiZJX5RFhw8YUJEPLnwAgtmC3i8dkzSso4XnTZ7KQXZa3fcHVBbSTVFB6TvmMEbLEAFJeGnM23dM",
  "key19": "3HXc4nVqCoRKFkU5M7wYNxkrPdV6Tn2EzkjDgKw5xGSStxzXpWATw2mLhXpHXXaKuKmwGvSGg6dQwrk3p333Dq5z",
  "key20": "4PydqTycwp4TfNEgvrmdkh3ZJMdiJz8LSjArpuahYWSX7MMJqDrx4j1znEwnkRDVRSrJ4Ewa2DXjDbjbLFAnQ3ee",
  "key21": "2zVFd5Mvehseo43fadgqSfrTDYqebJLWkZmzTMmuw3P9PNNCGeuNSiFoqbbaJqZc1JXpXmBjWWpFoDkg7esvEktG",
  "key22": "5whNGHcvskvQ9n1csxJBmUVPSxJC6Mp3iH5hupvhnPUQTLR8ZrR7UYLJQgnrFt7yzCy4re25kRprjkF2xgV2vpH6",
  "key23": "4Tt8DiGCyFEx5b6e2TZBonANR73MWik96d6rD4wHVXS6fwj3J9SWN9kPVgi6D6ByzXFkFE1s5yvRY62gnLNx47W2",
  "key24": "5T5fVT5i8WYtjaK6wTodtpJsEa5oWwXvXcL2Dvtq68JA3Y1C8ea8TtivhYe8CzFAx7cXJTum3piyroT82f3joDGp"
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
