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
    "37b4RNyVBXMCURQt8WTsgGGPZhBYcpGS6M5oqZtN8Z7z3AJwVCQWRLixH4AQ4JsqeqS1VrY3n4HuqYvhHoeHPaiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y3es371jJWgGud6FA4zYhU8HcW7JxVkXYxo4GJjYZaDsjtT1iBPDuyeFYdi2KsQB8m1uXhzAcSBbXcFnemNBura",
  "key1": "H6P14cK5fwKtiDFhPqHwmtB2dSKYCHVcRS1Tu1mBZzwdmFskCCJZ86HLWydSkZK1P8aDmLVpVntk5KvQYh9qHbx",
  "key2": "213pvKPf4g4nBD1j3GYJjdj7TfkVicLgmMJGb2ZvuH8MMyYEMt3wv1FSnLQs9LTaMsJJAWvZ2xZhuNWWHxxomV9Q",
  "key3": "5wXRn5YeLCWgbAgEBH2TfzFpRDoRvhxFC7kVRM1cVwKJxRC4rxoNj7PGagVneoi94fX3sqQhWVEQxdSQfwFv73s9",
  "key4": "2LdWW1sXUXdKTyaLiiS9pztuDDL5wweEWyQQTeWc4b9SotCeLL2pGci5jTXKkXtehHAaLjrzt8CNDCdoBR1aKHiW",
  "key5": "22MTfHsYZQr3tQAMEFQmKurf7J4EvZjmFfRojsNoKd9gtt8cHjHc4iWqwVJfJp6dxP8Gse5L8HhBr5ueK6gjSNhc",
  "key6": "2hpmL2P3YR7CdhVxatZcGNVJZMXEAN2413JXMyFVMC3nho2z8vDs15PiwhNr3wcE9d5dAHDUz4AP9Za79qKrhvTN",
  "key7": "3gQf6C72F1HHyq6HsSZi65s5PRkY1SGaRDx3nawhSo5iz4uFikbvMyoa4fvohArMkbYPJfxYkNRGam1a6P8mbF87",
  "key8": "5knc7m142V9g4YzDD2A4wYgsGJz3CR3h3iQxECkk5fYvVzqeSuHKtUk9UxWBgnLUCSTu4xhTDa4gqLvyTZC4hekf",
  "key9": "m8GRrC9G25Pd2gHyZBxxcmbY6cz8uint5FzkA51gUk7kcC2DNYqQRsNrGrjBkh1C54XRpea6pmRJqa8d1ZQKRPi",
  "key10": "4wL8Rs6gnt6PuQVoh4E9J5hSAp8HBne8hYqS3rbXBQLwyRkRdvjJAfPXH1BgCR14Rz14KEzd7Z47QkLFZYxh7sYa",
  "key11": "53rrrLVCXsqagBSppW4PdZpNAhkzBKtnQq5VWMMtiDtMiQyM4QR61MZscjZeHapiHA9LAL8JWjpbfcZXaFDQwcxw",
  "key12": "5U5yQp23EKbmo2EESpthpQKdvmN8ZYHtmcUzWzpJFSsAXNr9FypU7P17bfwrKp6k4y5w82xPpqBLT1QJYmQHEBxr",
  "key13": "4XcjjrenRu2chZvcQuDzfmN2jAQkD4P2hA6oA4oDAQnZWibUwXzKj9kvND4QJ8A7MdCMmUJ8bLs8wAabzGvaqWdo",
  "key14": "52Eg2wwps9RLk7zrHztwN5eRo1Tva96iLu7dyV1nBM6DjoVaFUDZ7TDJMtJMSi3M7CSWEpNWUAfCjUdVuacUrReG",
  "key15": "5QyaKBbF9UA5HGAYLSnNGPauBTQvynaRQDiNeVT6EgANxSHLDDB9rKB1hghU6h4kZUPs3xQu2MJ1RTEPVkY9kMie",
  "key16": "NvrZagCUJZvzBzh34h265Wzge9K5cipziDhxg6SSJuyDr3oJH7n8ZQwfaxAgUU8awHgGXKRRBWYD3m81aoD9mfC",
  "key17": "4YVCq4JPJzpC4RqKx78BpPAb1AZnC1cAwh6wxVCrxSvtGwzwJ9U3B2ofv28aDKYs1VsC8f83aRKajqw6HtF4PaRx",
  "key18": "52N7J62evH9HFB1XgdfyJCP1ucyxdvBVnPgWUrTagPmpHu83a8ZcN1uC7R3BhFXptLrkxYWMxbfdjrCbaavdQGBM",
  "key19": "45ZdoitCwwYUo9VNAVCfxq75wsrps7iUiWHiStfco6cdJ2WJGUSNRkWFs5oGduTLZE55rgZ23NxSSFGq3JTLZBvp",
  "key20": "2Qm7CNH3ZyAoZ7MQ9mpEosXTbCXa5wbrRgYsLreiyuWCxHGi1UgoxzxV2rhTWuiXCmzRCzSSEdbK7VeWhKa6G9QZ",
  "key21": "2jWQPBmknBse8UF6MfDrPSfJSXgycdxFM7bvwuYCpseat34DpGhztGiENxdyKj5S4QUmHduqTRbQjJ393GNv82M6",
  "key22": "w7kJXBa2fiWL3ByxTN22mDBoPNKecW4P58fbKdSwmFzMJLXYKAa44xcJr91bH6P4SmBGUD63dWsJ2jWFDPALypk",
  "key23": "2bZJ57qhoykUUDK2muWMrjb9igvie4JCUamBfckcpkxWwR51QNPQz4YMUimLG7yNWjoeqXDr9V9zkP662zu576Gh",
  "key24": "4vT2WJ9tGqe9rfcjjsECLejmCkyYttgzqgjUBBjb23CzmZ5iUYnNy9RSjBhUnM4J3WUJcfN7MYipCRzVgJi9ZpPy",
  "key25": "4hG3BZkcLtgUMr1GoMkQX4eNCByxcFgmTdwUNNJwd4F78JD3Wc8KxAU2Ruv11oStw1rNzDiuuKW5Fmv8eYq6JDxc",
  "key26": "2A9XkZB3jDxuR3UeenJ6hRsfCkPd6Epnbm2Uj5rc3L3wJLoopYoWw8BaVt6b5GTxkFLxz5dwrFFJg9dYEoUvxMk5",
  "key27": "21Ab2prPKYzdYWBoGou5YoZDEQqY7jkkRF7dU4T3ropEfjjADA4ZpCmfPjbvQ2iytRKCCSDtijy5WdTmVxYFVquT"
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
