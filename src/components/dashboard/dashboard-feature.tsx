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
    "ZAoh5sg3fNa3rcgSHg3921d8SkuJUoVjX4xMmpFQtM9EDW9T4Ers6J39XgSLrj1xU5Tj5fjn7vEDCRtehn8S4z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a3gUdQaWTr7t5cHbyzsniuQcumx59wsQJjgEdaC7YxNgFxXNoocuUdCDjtWNrAUrqyGWQuCyrYeTbEGTPrLUg4b",
  "key1": "3mcZU9EzeLibkgDTAHF4AtjKXtPuy3FMPpewygMGswhynBfiA8NdDfanzDPfyK5yWFPer6rjd3QMeBuV868SzLLi",
  "key2": "45s7LrtWWVn5BpLbXntp7uyCYeE3BPHvFw1q9neycKjAH835ruaKK7WRe1BnzEpVJtjANFHN2ip752oinK81WT2L",
  "key3": "5c43A9wCxkhr6Fq8nfQ31o9ayRYkVmJRDzbg6HpdyTGtaZt9nk1SeDcxRh7yqpm25mLdiVUukuiZdJY5rVr7KpfN",
  "key4": "2SmXKXkeYZA3uoitjocRQH9ZMzuPnVsq6G8rbV7gYsqRdF8Xc18zM5qw3cgzD1vipivS6atTs3MnBW5PAkuTaKiH",
  "key5": "5oA3k5LRgEx9Ug5M7mtnQVSuRuC32uJvdec7AysqncoudYjxzJdhenBdLghda2YtfCKFDe8pTfze7y9cMoo6xXpS",
  "key6": "599WtGWzmYv6V9voSKPkXRReBZmyjL6HCrw93ofNj1cRheAsqNDFsSYUHt8cuUt63C2HsrCgwz3J5QNZPS1n9Fk3",
  "key7": "4nwadh7RbUjjzXK3Q7VKbVGHhd9Xh9miEo5fA5W23NN8oDX5huHVYqcG6Y5XjsTjCdpNaGhJJr6HboZkPCJUNqZz",
  "key8": "4vVy86smZYwB61gpAypJKHZynsBGvFKRKtJdFVMNZJa7b9A4eD5J4AcnSXTyjgXmtfY9XHXzfp6VeHo2vE3eN5JY",
  "key9": "4LzzNBnkST1t4BNwjHn21vEsjwiYFRZhLdvftZJE4oVh3XvEK639paiXR18TZw65cLjAbkAxBRZWqcJ7LtRsgwPb",
  "key10": "LSutcC9VKyv674UTkihMAYGvhdRQFgKrVj744TRbwRGstyQkGUh65eAJT8XoSATTX1oG5jDWxiNCPhd61BbGPJg",
  "key11": "2auRs8gJTZNmT33VWhtXnU9D2qeWFobnWpbGktmpqHggYPp8hcDaJVqAaX9BuKQXP6NCQVR1ryji1jjbvNA1GiVB",
  "key12": "2FEYgtCo2fuPVkUV4QSMwqNdnA7b7j2PBHqvmNJ69Chqo69VV15qZKV9Vjr3UjdB8TDu8hWAq6e5DpZSBegeugok",
  "key13": "4xha7CTsB5kMqRDuUcKKWnihd8cDmsJvbbyKvLZjGWJHAm2751CGhT3R6m5o6LL3i4nk1rpK3adHJBPFK9pe2eAQ",
  "key14": "4S92cVdKMDssjY4MtpSswwxyFvvHh8Qtrc4Mg7R8ofreLh7TGb1N9ZGC4zyWpnaiToTfGwV41DK9VsnpMGcNR335",
  "key15": "kazK7ezBfZUDPHgV4aEQa7H5GieMQUs7BiV6vWTALKkjiXxVJrsifWY2HjyYWQFTPRpjk2fV8Gychh4kXQqhPLh",
  "key16": "2marnq4AErZ53FdgXHjiMMT94uS9SMdDT8w6jC567D74KGqhm4CrPt7PCrscS7BuKABa5NX742uZCbXyqDRFmMEW",
  "key17": "2XvXWRhLE5WE8bAGP5ZNAN1ZQjLDACiVJtzvAqQc2Bb82LkcYrQKztrNjYQnaHwfK9UwfUupxtNGpQ3LQsVx6kfG",
  "key18": "5kTTtymh5JSoVXvbMwonjTEFWoiSCmX9CkhAyW8LTwap6z3BD4MFxaSVDkGZPNofojGra9JKNPmP2it2acbXJRF2",
  "key19": "4QTsrpqfoiPfwZHgNB7tcSYo6kjSFRepYThZUqojvmyukHsPCMjbiDNt6YARgzpQrTVfEnA5NAiUTvcPobq9Cfk",
  "key20": "2hNNnozCh6TBjoEwG3Py2bciGavvSCLK3mPdSqY4nmw8WgFBo3wJLxPrp5PXYNQDrEjyz5FXnqTQgTKhw2Skqx6U",
  "key21": "3D84qL51BzBcShZLcXjSLHRj2eKKhAFL1xTmUbyucnDMvu34sgw1rRt5ghsdubxJtubupAYQrFj6kfHtVHFHi2iK",
  "key22": "4NxmxeyEW1jRLXe4bYkQU6VYcwQgAjAmfyM3sdbDa7XWmhgxdguojQdS1Jzpr6ne8owbu1s2WChnyM7Eeccf1cC7",
  "key23": "SdgTpEh72vfaueetiM4922P7sNucpfoq2Qqb8PwbzPdADxf2iWxCtCyDhutkmQfcWDvLt1WYEJMiCzJRwq5YgBk",
  "key24": "2itscQMVJeFdn7DDEwLhgqNKbeD4a4N1g56yJU1bbQo4BVHfuRUVvjsRGuDtL9AnjRzqdxvVpyww8m38vS8pnFzg"
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
