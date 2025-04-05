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
    "4e5VBGmP9EEkUL6hN2kJznwqxLnHcW9T132zjXFL7N4hK6GPavp2xvxsS92gUJYqJFZ8BR27EWFr4wv1dvWiDms3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PC3sgqh6pgPqf8kEAkUNxMTfFxpb7d9KcgHiQytWuFDyY1489JxKGSLqLVhUTkTs2BQRqDUQz7qb9jfY4kMs8sJ",
  "key1": "5FKmKQiS4mCTgouX2MuybLGM92tpszZJncAbxmdnnTxNaKcidyq5XHszdr9tPbpJagBiZjcnikZGtU8LvrnZHe8",
  "key2": "2h8tGjwTFS6zj7G7YPzy4zRkgpvVzm1NXRYqXqSe9dLxatcVDdMfStcpGk9GauP52wggkEodDcCvx64zoCCipVR3",
  "key3": "3c8vTeUg2hWxeM59oUuY2v2Dpxc65LLfZEwSUKwvi8Ri4koGQqm5FjLTqX5UWkDTkfeFRoGKfJWtC6zw313Q4Ep6",
  "key4": "2z34A4VLencM23doYTgcwUHHKfBV3xtvUmiuZg4AtG6zw3XgzCBLqszsC7nm2j5M5VdwszH5y4thoaj4SqAR4TXr",
  "key5": "5HiGwywL18zXnNHsZVHhVcA38Y2dBiZEaFcoPD4YaU8c348FS8QLhmBpgEwt4wHAENSNe1NSW6Bdtouvr7p9ZjX5",
  "key6": "5Q1GMzxB8sdUh3CoNRZ1AvCo13SJXpyu3jeM9Ap2Qk2Ybr5ZAKpTtw7ryYYbJAbr9wpTqrALZU1dAbb5ssRb1Li4",
  "key7": "4KmS463xV8wdN6zqxQn1aSZzkLJGGebaG72iJZUjf1apHAj3tpe3MNLiJN1yQFrwrHmAkcmbbDZKB3y7MsCtdmGU",
  "key8": "2uUABruL4YGTGQr68ZfgLCyMdesuevTN277jbFbqNDvV9mZEYLaFJDNXgkkEeM55CQbAWTycG16Hp26kEXbYp3jy",
  "key9": "25Kyt1GbVFYqyKW55v2wqY7s3eGVhKgy9ftTer4pNixLsCBoZX8HX2eBhbLChopqS2fdyzJYmcqNHSjxSDCckTx3",
  "key10": "226y3g9cUPmgk2fQ6CFKNiV2F77f9grsVgCYzUtXi8B39KKjgMHFK2jJC4xbUae76EUh5oU8fviwwq6Ycr9JYNXY",
  "key11": "43nWBKb4N5ZvQXw1hkaawWggY66HjgJJs7L5tTf3EUeVkNNpaz4PtM8HEcyDkvV66yyAkYJ8unPMwnkdfnFTaaiR",
  "key12": "4Vg367cvC6tnPSGKqzmhQDtDqoCeL69nkGkWa9jYqEE6mv4ZXomEieiqAsSDei6CnLRH3giNWm3SZRoAKwMhuakw",
  "key13": "3AkgPxPa7hdrKjCbKe92DBj9Frhwkamhiszgo6oBZLyKCMimVgoHRj3e98k2sd5PrJf3k4g4kRTkdWuP4HwJzrqp",
  "key14": "21cenzhYL5mG4joGKLrBZ9KMgthQM2TBxA98WoRoEFKTLkqSeAcx7PKMPazJxhWMLaX1prqY64Hg7TKCVi4po8Vw",
  "key15": "3girgyz4HwmumP5KRMZeFzN1HbbWBBcbM9Q41a6oJBzRw6WbxYMmzGN62LysRsPY7k7qkN342xgzwU5V2ZFwqCd9",
  "key16": "669XYxZyDGbizyDrTpEzzoapKXfwopAVnfNvE74sWEE3Dh2GgdLhMFAbBCeJ6U46Q62q8f2s7yPWeu4vRjKkRneZ",
  "key17": "3Dcq8fyoEbqT7RudqvPdrJCY5jVzM4qrYWk6LBeszq8nzRG2ycy5CGxQyWeYMHFb8Vdtt7bAPQP8Lc6bHn6QdVdf",
  "key18": "3bb7bGaABFU1ubj4gcdWqFA1iz6QyWvyyr4Hb9skLkRHNhpLNNxg19m4BS281zmY8eqkpf4hdRf5gjxkNeQ73Dpb",
  "key19": "7Y2tsAWUnBNoFFEwT1Fe6vFgqbubvig78a43PTH2ypG5zvJUQThCe9xp5jsznTPvHon5zitGZBPnrF9zBobSV21",
  "key20": "1D8w9aNRU3gpvRvBXiN7T9UxismwXUEN7ut7RECPAb3pfdo3ygba9irJozLktfnvCvcv76cyro5t5bPff3nGcEZ",
  "key21": "3AhTvN6YD9x2wPAuS9pRF7Yfmj58ZA2B6yDfc6xS3cdQxyD976TDkXTg34pGHYaK5XkwGcv7gPzDxUssdcaWAKKZ",
  "key22": "2AchaMtccLVWGrtKzZ1wGViRaNSEhvNs8hW81jwcBM6Ya6qwSm4MjspXufT6QgnMnmBMbz7ef5a7kRjqLziR37za",
  "key23": "5FL6YGGCi1c2p5HP8fkqQxnMN6Rd4tzrTjHkreczG7tPjqqF8VQw9v14KoUf8YdVF4mtCF8v8inS3CWWkFAv2gDn",
  "key24": "5eScgQbp8Gx3CbD9Ta5Pk527iK9L6GcriLwShzmvKmxQJx3SnrYhvTF73sY5ium9aTZEb8CjVWC5fFmKdYTjVa52",
  "key25": "3AiAxyqokSpSFTpALUE3DrJepT5RiGTLMkS3V6uxMxERuNLiyR4FBNRdfE7oHEAs42auXjKAt4fQa8E5UZBkVbCL",
  "key26": "2UaN5ddkN4MUUcjmhpuh33eheJxhmgBBBVgpGU8RtsLnwLF155MfiYvyEo4NnFykHVciowF1toZbxQoX5QwoXRG4",
  "key27": "4XGUS9mkB2T71tXpVqaQ1HtkCf5aUryR4VFvzaAE35iTAnynnTHtetiZb8E9FmL9ZjaVPaJpeJhiTgBXxJKCAxky",
  "key28": "2nbij11PVFb9vhEpVY8jjNKRpPwuZgkZ8jf7GRVTpeinhVLz5bCt1ZBKBb1WE5yULkYJVHJef7Lu4Xq6EEL9fKtm"
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
