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
    "4NpDeKW94UinerVKYyy7PWbdyAe87whVzXUsytnMj5pwuN5PZqFhvtMn8Zeoi1ESKV3mTt1n2gkzVGsLMUoYpnJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i1n3hMa3d2jWJnAypDjBHNPznZEM8XNkQp58eW61QFtbeGbnpWK9aCsqUZhGmrU8NxdFmmuPWKPySBTvsWd8mtT",
  "key1": "PeNzZtYdHjfsYxJ3TK38Yry7chyesamX5sQcJRmsrJKh75csdPxggMRnyLcQi2YxN1QoiEa5Q3x7hAdXFnXB47C",
  "key2": "5GdUhyPMvaJC6nZgK1rjpy2oufKfuTqZpcYwhRtqG53AxWTvMNmwTHQ4t1bctMeVQ52sMVXV6775RKkTtA1ZSiK1",
  "key3": "25kiMxtD4vKtkWeWZD76QF6nXCMMXDow7k6KtXXWPzuaebcNJArJYykZ9MXgR9EUpsXN4CNbgC4tdBHXfmMFdXmp",
  "key4": "2kNBAAnTkekoQFfByhtnF9QAfaBZovGLwMfks7TcgPx2rbNvUxkeWpTiTseMZfmnpdeArgwcR3fZJz2GPDEjsn8q",
  "key5": "5tFUEvKiPNAVvkeL1fghJ85AxGzNpf4WTu81e5D7uzFLWN1bQMXLedTi2qMq1RZD7SGahhpxiv2RiCFk67jEvfMQ",
  "key6": "KAGFCMnxPKPKkmFY8gRK88hPaZ5q6x5Zrjb915X7P5Qkg7x5A92nu5iSDtkVAwAosCF2THANgRQjL9vCocACSCQ",
  "key7": "KN1zZZ2YfM92cs7vZsoYzphuHwNn2mnm6zGy9fjCfe5HCPzCBG2mTN3JypvWQevrvaqs4Vu7yTCPCUfj5oEytFd",
  "key8": "3vqg8bduZtRBMVpVtjJQr9Hy221H3bsXZCnqyU3u33tBmJUvbHgirq6817GjXASNMe6CrzY9cfvowHdBrooKyVdT",
  "key9": "5K23mxkoemyiDNRAGL5qfGfFEWY1eoNKTmMTPMZvRJoeJUBKcQBKEjSYWyTCe2MEhqmHpbDmfuSF8pncqgxncJYF",
  "key10": "mKpEzMMRUS9b3pMXE64ZUjAVVWCJdCx5mD1QL5kV35Z2anDRJZyjeozUWzSxWkte5vdXq5HAtw5egyq2L8sT3C3",
  "key11": "2LszG964NyYV5YFPSKcMxfkxkRtLHnjRun6UBvfTxtaSYA6cpeDiwEcLSwQrBrhD5Un9z9Ch8Vxk9SMAkoTXGn1q",
  "key12": "5P7By5x9c55Bp9bvXE92AGE8LYGWewcQXk5Lz6mKzdwXXsUSrVt5e1wJhsBqMDUqhF5i9WZbzPTT1vex21fAnd8y",
  "key13": "Ykp15dn9ovnaDcLUnF4MxF2Yox4gn91m2NJtzEtXhiuJY8Ro8ruk6h6cGQRokbZuMm4Xn5VtBCUoonpy28sAC8T",
  "key14": "4JLqWuNhC8ffzkgPYa6j4Buufn3jc6KFgEqHCk1MidekyQXuvKYQ3wFSYsULxwhFHGSMkNY3GC4ysMGauWa1NExs",
  "key15": "C5RB8Us249GZPvsd5gdawh6NqUKGJvip6bJRxoibiU2JTqkGtSDjmsLtWrnpwafS1XDxuVdrz3Wu5F8UHoKD4jv",
  "key16": "3Mqi2nAEK1ebGNBZZJqQWTJ89z3QcGuRdGiqRAfbB7Q16e3L32mnpXSmPXZFgM2yEoQ5qTQnRCHH5Yd1CY8WnLnA",
  "key17": "5JNtLzChq1anCy7LDxvHfddG3HxQvDbam3qaaVWCRM9m5FRoj6QqFVXe8mhL1cJG17vR92bQSXPn9BC3Dxeiv4wG",
  "key18": "8cSRUNDdewfk4wj6PBNtwS8GntKAjJ6xKU6rDRfwQeAuxQQ91yGkFkhXnidcn5schv3awZEepb6D8zYqXWbR7Cb",
  "key19": "3CjigMHjWfpUy6BfyP1Aofk7soskoghDrFuhiToXSWx5zzpxT76R5fQ5RRpxnXTiMUACfg5nnGcqo2R9PoH9kjee",
  "key20": "2ZbNMKaJxGm1YEyVQev6RMLSo6o65pKQPE8onEhfNpL2REkZrTeT6G3Qd4dwzkLB9aebrCATNs38hM9H7sBnvsLb",
  "key21": "5avgprvug8ULZMSFAyrYMW3oubr1YXA24RokLnnYqjCv4TZPQGkVYHppbfUspFCuf9mit8gjFH3rZ4vxaKYuiq7F",
  "key22": "3tn5qCP6VJWyipSdfbd3Uf5FGv57ZFM9cRvHWXJPdyZiAjBnQQbvpUqCAW1uVqSEdGRmpArSHFYYSVYiPCbXKBJm",
  "key23": "4urh2prgK53D3FCi9vGQVjuBPGeKvT7LAb97ftKMNfpUSJjRH5GyrKvuU6fuWrB2eypUJSgmeUMjGEaVkn4LcfC8",
  "key24": "5QZggZCJNDnpCs3jMX6WEuwjEHbsrDwSCDUBPTKc1qZWsMPZFQGEXaRLRwbQkK87XhiidsQTssjBP9PC5aojwkco"
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
