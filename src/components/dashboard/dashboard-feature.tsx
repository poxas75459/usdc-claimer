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
    "4RdP39CY1yXEjZJmEZNmNf9QfcZmxriegdd6SdjMcEhAPM8HkMYtrMdB3EqoDHMWNp49daGwDUeB3D7YtqnzTzXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eGRJAGCqk5e9jNNdaYmGx38DsbbYe5QAKMUKr9BMZtNCkB16GTvrE2E5KgzMkopGr3dVjSVL7ir5KX8mPX4r2wW",
  "key1": "59qYAM28Z9C1s6KyURXmnGTp16AqQk7EL77SGe7G6tGvZHr3J8tvs5d2cK8TMN21XvxcCJmFPwWC8xRwb4yVMHxn",
  "key2": "2pXgVYuVcxyZYXBxcYDJuSHtWiUTpbRNp6MmpLXenuB59Nmnzfqfgiytmw6G2sRAQkdQ4pJFALbLuwdRmGwpvekd",
  "key3": "4WX5qtnXvpsM4TUrYLLCCAv7chsUn3BWTRqiXQkCH4jbG9NiTtemVjvmtNi1vEtgN4NcWsxaP7e37qjLbe7eDg9A",
  "key4": "5k5rcbgRNuWKnfKysxdDZYCsEjc6nygiyKPxXcCiFG5qXJB6KpCgmT73UnmFvR5ZaATj8QW5sez4SMZtiSsumkNW",
  "key5": "4sLc9J71dz2nCgC79uqjrLCYe8cVLv4dWQcFtWGFDSZHFsDiKSD5m7NYTpJgPUZUkJr59DhPBQfKAXtAgFw3cTqA",
  "key6": "3fJn3vcyDZwkyGV3tRvdFBoUsZjRM6ZxV4MsUGRnmQZPoQspWBwvFzh41G1UxUGgumHBjEfkQwJbtkZCaSVe5uUc",
  "key7": "4pyisXgYzEREE6ZQSjGKstoER7EHDgTdCGJzgN9L3vZGQh728uWJRPDMiGpcMqQJA9WMNr6FEnoZXLxyKuxpr1W8",
  "key8": "5dcmdWm9f38U96WbqwThpRKwwZAgim3CUoQMVGAmWCuLS7zeBonQukrDoKWkSV3tNPCpbo7DJbt9KGQ7TdmLNmjE",
  "key9": "owaQZS8B22RnXPBvBDsJSLMjjFmfesmEkLkTaDHmSNMW7Fg4StDomrc4xiYeAx8UvKRwVauuicTzBrTd9ynGEVZ",
  "key10": "2vUvMKtpL64WuYN9TVfXL2ABRRTksMfvJ7dHLPepGEuKZMK6Fg6xZRNBog29QCd78J5sYv8Pqq3WQ3mhGaM2TFc6",
  "key11": "5aU1FtjEbTjnmKdaFs823qGtAwpFtwEq5fEMUcSBQa9H219Pz6HEcs8QnnSY22TuprgGSZCdj5TjEZPZnJtnAjNs",
  "key12": "5btDyZTrThfFTyvEmkS4wX24eqr42HBciska7RB5yUan8YF2sQDeVSjZST5ErzgR9aBLjGpszfD8FFW9u73fg8Tq",
  "key13": "5qAQh1zrbEPXfjXEU5iunBfYUMPTSbYrPcpTULF5ZZ9rmU9voE3ZbQjDhgoM63mFzKtDq8Xwnk7NAZ693wrRmgKG",
  "key14": "2n4YURUarQPe9SXKhSg2vAHu3fZRJG1tJ58NiWjzj1nwo1a182UceCTeEpSD4hdjMBWJDa2gHcfMXXurLqrrYMha",
  "key15": "4irhD4QCok56GcNvjerzc9n7FXPNNCL7mqrWoYTzdCYPxxLh8Zy7yVwVjVEKsLfYa7xZgZ1Q6tJG4oYjJfL5VYAs",
  "key16": "fWCTF8aQ9htp2Pt4fuWivKW33s2wDLbnME4TLbwdS5QY7Kpsw2V5Xkabh2jZDRSv17QuTYiYx13ReGaZjxHMgKf",
  "key17": "3pPAUSBxHtaDLNrY5KyaHJLn7VjJEWrfE7biF2t8vWmMp3RNnPDnGmSpyzLTqE7LpUCVQMExmGrUsHtwsAL9UDVb",
  "key18": "3cZY1P6xNEdrkXPLtwfmpT9HLMbF6HtULE8DUtA3Q3D1bJftfKexUiZ7cqouiBmbqa4QQQGXzCupvucLpF8yFuYb",
  "key19": "36ig5krU9awaSqbX9JpYPKj4jB9197iteYi6Q83xe9zJ7AvGEigQRPPmYCWz3oJD2tgZ2oLZjocxAQQZfUh9nYF2",
  "key20": "67MDz5LW12bcvBLZGHhBY4NHGz4Qs24Atu1f1vMB7imUPrL4fB9qHNVw3AoUzWy2FZeNLFNrxCTspis4v6v2F16B",
  "key21": "5QCesV5dW1fcd6Tq1y5BxVHaPLhoWrmSjQc3y3eygFjytqxA1Z7gMamh45wcBhVSLN316JCR4RDHDkZ728PshW5t",
  "key22": "5zW3as6JJVEBu53RtjJEQVtFURjAWz52PKYHA8nRS4uRfXqFPU4NnhdhbfaGxNLhbiLqFzUjWysLfVgKZxqjgRqa",
  "key23": "92gkraTcv8HB7Nd8y6eQsr7Z3SwKMijS2EtPkcUGkoNpbKf4xLiquJFfCQbExS7G79eFK916XijmnTYrUwjE7Rp",
  "key24": "3unH6B9JnCCmMKVVB648JAsgK8KkLzVZKW1cgTD4rh99SXU2b5n1rx4tqcA3ttJkrsEwCEgG5vwjGCEjNiQyr8YX",
  "key25": "2WvLdqtEHeYpuqvcYVSpz8GP7t7okA7HRV3hGJtyiofz8BJKHDS7rNyf13qPKFzt4FCYntqjbLYFfnobVqFCk8B8",
  "key26": "3ZgEhZuYUrzEr4yA2apT5c1gQs5ZemosExBbSsjCM8hrZPnkE3etvagn3GjQ6fg7AYs3xKPftXEUe7tnaHGSzhvT",
  "key27": "iok618kcaLBzWzXaonsi5FmW1HNQZMwBdRvtJT4MFj65HkNuK963KvofYQxcVpVdDLLj5Bg8zi4LUQnK4WbHvq5",
  "key28": "4PSPQpTuBhGmnH3X58uajR5nNQMPbtyZoNB99abcaXUtXpkCjvd7KqSTzCmuZdLN23Y2NJz5xFa3tNBJJ89QQUzd",
  "key29": "op6NsdmbfgzCSy8zPcNNj84gXLf4u1372yW8vEUjKaRaS4StjYEgxLzEGcKBrBN2YgUxoXtvT9CAmbKPQhoDxFu",
  "key30": "3EzndzyT2DY4BhrWbtM4kaU8u2z1CK5gPVjngSRtG8pb2ZA8Bk5fY6qdibfddPRa33CZDNEqrf9rfS7Sqb7Q7cDe"
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
