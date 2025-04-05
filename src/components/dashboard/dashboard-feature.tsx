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
    "318Lmyvz65mESBtDodYDjELef4NQe8KLypS6qELrHTpUCJTZihgXragWdizqmAgZzcgi6w5XyGv5BktZJzVqNobs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JAsf7KkT3asn3CFqF2RrbPC7UD6sRJTgbCwuA9m4T2kG5RxQVeo6PakmsiBnLdxt7yHsKhEqcimZx4XDazKTyBF",
  "key1": "64KGmusYGkpDQhXjbBwDKmGmS4wEgYcUmbn2hvwrCaq2c1GgysWdRCdqqrQQUXHFHz6PaCbiYRCu4BE5HQYwEYK8",
  "key2": "5D4cCH5o6v5bYSmjzZVNQHDxQgUK8NcENQsxXugiyU9w2BkMvWJ6pZDy88DXXqaz8jkcwtzMtEntypwbHFRhNkFn",
  "key3": "55eGuQKxkA8CfNR7TnrZAc4FoSoUXmtEsCtGChBDbL655AKUrqbFjDvqmkjE6YFXaAexgHJ7JdEizV148vWXHiPd",
  "key4": "5cQzjRPXjEGycYLBV1JfLR1DQaVjzPLZo2U1GUwSou8obDgcSXrS3RDsCVnrWPt6tMXhovqYh8ior8HtYvGKk6vK",
  "key5": "4Cd2rVZLFykTkndc2CKWQxqCzAkP6TFvZYgHbBQajDS44ehgNhww2W6mdbwZEgMS2aPWN6PRtoARKjeFeRR4hmQw",
  "key6": "4amMMqyMue4RWLySSMwCHSXwUY4MGTBrk5tK2BtDR1xBrwtjdFNPYE9Br77YfatYmj2YsYJiPnpx1oRnaH9mmWbb",
  "key7": "2V3EkLNtDKB7gTcokxtiatga2aRJWHikCjSi5LfTXtPs5gvMWCcnQP2Dn76X3T782N8G2nKnFLCB5TdNgDJd7FFD",
  "key8": "5pi61xyTkheaH1eNEoHsjQCAxrvoCFnRtjKjKXLmQM9tD1qH1i1uEzof98okJ2j1xqiLVsuLVVeCvKypBnNdLnpF",
  "key9": "3jixeQMPDrvkYvUEncJjtmMrUKzbVQr8yzuf7ixbafy6VMMpxuW1pBr9USqZ38EFLW5KVeUQnHHowfB2SzsmSd4o",
  "key10": "2XBt7rUE1E7SXYdkS5ZLW7ELX1FuG7sbyzA21LFpPEtNUsbkCYmC5mqhiWzoEBNGdmAFUjE9s1pndWKc6Ukq2LyC",
  "key11": "3sbMT6uKwNjRmmfGUojEwNuBqjcMCBCKzpEFw1zghr5iK3JiYEkMS9khzGStTsRzm5Dfh64Wuan6W823ucxaFnXJ",
  "key12": "2BnsDebnDNN6Kr9M2w2bek6147FD5FAPsZSi7qheasLsEi9RHC8LxUiiKRFBqwTocdJddNhi1VYZ5YC7uuvWJods",
  "key13": "4is5QVQwy8gAfwfejaCYGQZHGYLjAX62yqheermPGsToRiS245GpzV3s7boi7iNH9wMVGx1hxtYKY7cer5KLM7A8",
  "key14": "TYwEL7z5esWBmQDBFJHvki8u2tKG5JjdekBV19SFiAP3GxCKo4LuuXshcgQFkRwBxxEh4aFcLAa55arnpT6ZMDu",
  "key15": "3DCbicCYvSiasxfHDrvEwW7XTUichDWaEVuHzsa6VxsFZwtj95th14GVwV5VdgzvZ5TDa7RMRxPXiazYT2C6ZGxt",
  "key16": "3fviLQqGUY54wbgGkWqVycATjxqdvFDCMuBPhmbe3T4uQukM2YSHreTBs1cCLgd4n1sh2SzZPW8dF6agnpXYQ9C5",
  "key17": "4gLjA3bKJ1ihjdZfUYAGdH645osCECsGNJq3hBcqD7gqCrdUNMRKCsvuxxJ3gLTrXw3q6q3GCfK5mhLQSRdBWWdG",
  "key18": "4CzbcmLJcmNsHkcv4KTWbkxqQp4jubgG4S199q964YDeptqhS91Da46uZcDdgtBWCZsH95VyYrHx2jeUL5PgE32z",
  "key19": "4PBbgWPmxtYkvBN12EU75cjf1qnMqk5FfequFUVaRVqdMt8DQz9J752USJ5QPvpnPrQpMmH1SgYnZSyHbKbuafmh",
  "key20": "6ShrvMp6pfrQGLUGASvJFaGpcBGTixDz3zz85gCqsRV5urtJuXU9ZxAwpDL761WwssHLnEDta2kzWQog7V8bH5q",
  "key21": "2wco7NKQwWJ2vSRh89wF6QTjmxsfkWfgkPVeuhhFzMFtZJJtvYs1XkgjFhvX8MbDnoLT9ui9rbsagWrFnZUXonbr",
  "key22": "3atnKdoBMBUoFRnb24SKcN2RSS7wgyyv78FctBoVvy4iMRucxqHo1rhPwFe3NjB7u8tUzwNjrrGpmkQHzKBSqDsG",
  "key23": "4UG44Y8wjdXgANXvkdvoFdQTDeFn9VApSNSMNKMzsEHqDjvwgsj6nVJXr4oTEMQfekDmpN9Ve58zerhkWcQnSzx1",
  "key24": "46CyTjHX4UzDb8VmtmU7kfgi95xGmPnAdcTqafAq8sb8A874LNgWWsbbef6y3NzfkpPdnX52QDjNpz87nm8cqYf8",
  "key25": "2aWsazNzBoYiURioWqXDNq6votkUHd6mD6E4Q9Wng6ZcSdVkXogz6riwUNcc4ALMFZsxNe3RGydXdPAdP2Q8HeR1",
  "key26": "3fcC6bLuCcNjhAVvEFQ8iZXDcisCF53XDmCiKsnPTcqBsLZ9vimzRxk6UvHdJofk3Smzuyo7eQrBqRvxDe5XLsFW",
  "key27": "yNMxWuvhRQDsSV9a2VjtqA5KhC33vvfrGdcuQXxxCc67yCqx6BARJtZ1TQABGeqnGBBcFXcNJWRtRXX935KPxev",
  "key28": "5HJ1HDWb27YHiUJvz42AVhA7jXmT8GCnqQYHcPtFTzhwuVRtwccd893VWQnKqT3dArYpskTyDptosGiGVKp7wZ9W"
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
