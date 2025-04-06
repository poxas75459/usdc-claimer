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
    "2hrRndvVYs2PZzzmxuoXCAG4cTtJopyn3uxYnrZCPNifQ3ar96EbwXzG7G13FureUHrZ2CJg6yFG6VcokELXuD3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PM4rFtsqULw4EeuhzHZvKpRHsUJoKx6P6PjaWRR8BswEMnCww8wEZvQauYDt3sL13yZ6qjm2VAe5yfctY3g6g7z",
  "key1": "23ooG8itpqUTCcygQ3r3JNSRtwzmBSqPMHpjNbahrqp8PDUyRcZWzAjf161VePAdXUYTsmpBE9NJ3H4EWgCqZzmk",
  "key2": "5kw4cnSN7WY44cDkUkPsndhFxZWittcfDCcMkMXfQ7iiWe5Jfz8vADBm9hDwH7fAoH82WpBYnnsu9EH4nQcQ3thQ",
  "key3": "5MjYaPhSXXDZbvFZYGokMsAqJAgR1LPKnJKhyfCYUNTsRpFD6HaMtYMkpS8pNHsheaeNCJHt9Y2t7ebjN5nEY8mF",
  "key4": "3R7i2MWSjxstqpFJEtdfBbsQNjngadria8Yg9Zcq5ffuxydsDbr6u3q6YSjfs312J6HwK1qjjD8VWJCme6vqLG5k",
  "key5": "2rsKL5tgbBxGWRtKMMnXW6f3FRBSUzDVfXdeS7j4tvk8C8iUUHcVwVefjZWK7Hj5i2czYpeQAWdfw4BjfyCQQwKY",
  "key6": "5WRatX8GpXxMRQpMnavYMxnPfkxKjaqhiyckXPAbgyBXBK17nRbopxjsPX79KrrWyDfa7mA6bhuwXxmHEUdgf9kF",
  "key7": "2yFCP3YhzCxmRCawfqxyZPSSGaLFUAncNEWCXJDJDPdy6zEyoQEw7n6KE7zzM6s8zKf61eQ2odCZ9nqtS2n7vsH3",
  "key8": "4gHz4VvYbsdefvaZ33q2YQXHSEQ1Pf8QHji8Mh11kjswM9DjpEmswCJaxBzvmoojUXBnMNWrFWuWrCDyhMmtUSMM",
  "key9": "3rjVutCJjY5tD7jL8Ne1zLhSnqRz25wjvt6D9jytwMetuQzabvbi18QUUNojyXAMLY4AyHqvCoAzAPvxLH1jYk7w",
  "key10": "64xQygrJKSvtWJBbYZcH8wG3ZsfWqdR5JvXXmzSgvELed4w5tMcuNWDh8LYBQFUiH1X7sf3RhqmaZbkeVMTbCJm5",
  "key11": "5GEmzx8BSmstWavEjDdA5nu2kwmvA9RhQQ7rCj1K5gPNExgtvafKuiaDc1kxwBTcdKLj1aQs7j7PzJiAYjdP3CJ4",
  "key12": "3hNgiK6BZj9WLYvh4tH2irXPKxfFo8gufDFbypVgJBkTVQUqdHp1MaPbLk6bLCRZC3W2xUBNVFDf5X8mdQFLD9ya",
  "key13": "3HhsefwU9podCrBLHwK9Bdq4aiRr5tjTnsryTWS5adTSsJxfBPAHY7ptuAHPzfnf5zWFLytuVwFWw1W8fjAWfTRn",
  "key14": "2mCw9ATiRdCQ14MGTYASWgxyguj99ewQGHS6hFQf1siHLut11egjjXuc7pSiCuYy6MxV94JeirGnoqNCBfiqjQBS",
  "key15": "4f6yfWt6k153ZnZo3dQQVweeA6oqSmRz1VDtvaQ15KzXw3dqTS2E2Ur3UjsddL7XbjfPoqSmgX84oHjXk2yX3Fta",
  "key16": "5ePyPEFvex4kPphnEUB84uMvWNxxC4SBkzXmujNNunNatG8rhwxtnQiFjbK9yiP4rcqNNH17ixdFRj3ovq4asf5T",
  "key17": "3jc1h4VtCTGei9hqZBumKZxnnfTffTJUSHq5iDRMuPeZ44YddcTzk5LcqDmBGLvgcmCcumDwMRTVovYVziBKtsgt",
  "key18": "2rrU4U4MXcu8chWbY7XQV9b1QTvQ7urv4ADhQp46e5EWhnKGpiYzq3sX8cLMk2xk3DaqMLYQFT2Gp4z2DrC68rKB",
  "key19": "3zXTPsc4KdRAijM4HpMdE4XJkRqNBc4HCrsChzJbqJhqjg8VkihvC3x77KQVuyr8MA3scSjuRj9akAZjng9awuLY",
  "key20": "2FcR9rjnE9AtEMynmGMThEwuRsLpSUmTY9R9DahK4Md1VnGhs9LMcXneevfUsoXuxcrD5G79ixUtz96g1kvmE97e",
  "key21": "3f6YjYB3PEBMszr9HmHMMer5KcgWL5GCu57zXRFBu4rygcpZ7y6YEhi2KKRrUF9h7JRVcSYbrfUabGxXRHtDUj36",
  "key22": "59oUqzwydkoJhfB93Yme2TYn5tetjet9gbYAiRaLeHLWUL4AvkaGBmisr2LiizfETGDxL843whpHkdLYvgABBMQC",
  "key23": "2eXpzQq6qMbSbKGmzwtMKqCefy7jtuFTAHX2bSmtHKmqsUeANYa3AdM296fuUpcKHAHC8s8FGyfei2vvgtDwQSEF",
  "key24": "BDuYTCUJ6grJNnNXWVjNe6JeRX2m6J5NeqeU1ciRC87nPiCPAayuuDDqGCrUwSYgP65cG1k9ptxa3QawdaHBDhC"
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
