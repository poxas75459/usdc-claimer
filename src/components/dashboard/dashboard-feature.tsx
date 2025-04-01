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
    "43dJaqYVE3uph8o2AHqDaP9xEVK2aQ1KaThBHXMRVy45hjNrZ8qHh4yFzkuMnFcwXyu33zyhsyif1ypj63dVMXq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8cbfpo7cznGZZGPCk68mVeD1K5Mh4WNY2ifPRYYSm9WAckhZguA6bJvVJD2yHU5MiLtMJfdkjRtT5gHxCdftYe",
  "key1": "4f42CRDW2Avy7zSLUc7z4XtN4XG8CM5fkFPSXVBV738NviDQZ32T1mBvbz9ejaF3DTvoCPMw4DXSWYEFHd3jsxQD",
  "key2": "3kkuJePzSsLNFMDy4s6H4Ay1pJo2Gi4qTdtjGV8EyPk8YFqusesqg6iugsnDH7mcgDkqFXUK3cZyjWrXbK1QRXZE",
  "key3": "48TbZz9UP1cufuLqwf9REtWTLjBG5v4oVK91M6qqeg3qQb2eQvWHmFf1rgLFSNbvoBD9izwkdLToHRb19XtTnbTJ",
  "key4": "3HFVBzUz4aGfdVYsQzL3ZiSCmANcHkV6aPTJt4bQ21kvEpqSB39ZB9ykYAWMWuXfjfZttA2XNxpebf7pJddNDQWW",
  "key5": "R7VxvvSo3UGjLEVPzhL9Kd1c57FT8YKniNxdCNvxQWjgBfQhif14tjDLbzA5UFWFp5EtMheSdf4VvDJE29LhR1z",
  "key6": "3khohv1VYU55jdDavG6e5G6fw29Mke5yHDJo4jsbTPDF8qFL5RH9EjoqrX1Aiorf3AFcgZbfbf9n7qddNiJ5T42L",
  "key7": "8FLaKgWFhX3j6LBQyHYa563ei1cG5RmB7QRb6eitjbSfdYUjMtRp6gWhfGj6KWJSfReu7JgU13vHeYiHiwiuKoC",
  "key8": "2A6nK9j8quMHnL7Q681Xvh6BNYbw3jA4xW8pydwvMfuiMnkWfGisvmX9mx9Y5DvX4auaLNTZnKGvZGviEQGBNUXu",
  "key9": "2P97ijht3nciWAKC2kPufCyGWiSSiHLoDf4Xv5QtGZbk9sYzx35ZxLMRunvJaXLPc1KHcsPusBXEMVp3gbvuc1vm",
  "key10": "25xQux3KQz9CjswdbSjgZXqaQhRCjqpQYNEN1xrL61STUUAipo17Nzk616wVqKSd32CZTknpRTJzJ4VyXNLstdom",
  "key11": "5bewLHSCmKr9QJHksTfUUfworuex2trKSXHLSBvMDsb6QtfSv3z61ejGipDcqLcDxRJhAZSDkmSrE5hX8VdMUekQ",
  "key12": "YZLndXs8vzRu9VjkWuxRXBFUy3qH83uFh475kRpdXQdzANmphwXKsGD2H2jidvaTSSJYYuKVSEq5GDqLRejNbPb",
  "key13": "3gLDTqmT53mKQc6XDDiMMeijeewqEc7yisFpqW4PGWgcVYWuE9zLQ5WdZteb4MvnwvAaAxr8WM5cZ2nxm7MAzd4X",
  "key14": "AGoLmkHgrPj3e89KjUoPkEj6qKN7ys12tg7829h9Jb7cAGvsuEi7jHttyFwPvusqWu3nNDFVAPciKvGJxLmgiAe",
  "key15": "4jBx2GNx2vgaYeqeDR5uNHgm6hMYVatDaJaJvxBT5iDZ5S17ihoffqukQsAe4VRevpprvGXeukZmFhQ2fGTD1EiL",
  "key16": "5EUoSnTDCs5xjoySUkEyzSFuWXN8CDZwYMHag5gqEMvq9ppZrKWZ5C5sdAC2UjHxcXr884piAAxW91XwfQzweg3S",
  "key17": "3dRuMPyWcdDt3eqS2qq5199EFYCPpRrbLs1Cgc9f7zuTvBGPP5WPTqfaKNQsH3SmKb2Cp4voaxd347LCaNCrYNUM",
  "key18": "4v9Dt77weDoKrhdA572APUi8SXt1PNBkG81nRryVAvrcHT3esRb2Qnx5reuKQi6RzBg37rDwrVTsrRGzHtAajv8g",
  "key19": "4mweVmZRxK6MW95TtzGvryjC8AZnK5bhze8XFfLmKEX2L9SERLcKb6nQ4WYjXTerjADUksafJyFFSqdbbF3UEaS7",
  "key20": "NSvZmLhJt3QS8JxLoZczD4BSZ8G7RHqJh1HxDQVgAvRsWr1CQEHtaDPzVTzXxNERHpNXhN6ABbjUbE4reSR6ytQ",
  "key21": "238rggnKGUibphF4hnMs43AZeWhBqSJQ26cuCCpHsGYS5noMvxnYwidMdUw5KHpTmaqNxtLaNNsLJ2xrVecnz9gk",
  "key22": "3oX9pm7enqhr5nWXwJxyiQjrXha7CRbGcZ2r8TdaTVHegTXEPBAAVuykUvYM4Q7MVsKH95Ump7t3CaEaBs6K5L4B",
  "key23": "26e17Yxp2QXW82d1R3jvFRhqbv6BTBvztdFP2cXLkNG59FGYjXFT1vtKawEUYigM3UZmQWS4NnMr9ALhSsuhu34f",
  "key24": "jzb1r7YDwTJL7qXkuwtWHE1K3nYUe8qCbwtLP55KmMeX7UwpbQFq6A4gJN6mUWgHXLoNMKHgFE6C9HjTq7nFQzx",
  "key25": "yvoF7Giwpj6zrcN4T76WtGDScWwVYjiKiP5Pr4hReSXwVjvG5wLyKFZjCEYtTtjU2iTH7c15n692Ds6iA2i4WQ4",
  "key26": "mbuvr2cLborsWCJyWf4CKzTRuLRKbrTnrKsynAtzzcq3YfH7NSVFRfgtcDnPivWrS7b1H1ukqLpLKNBV4VHSARQ",
  "key27": "4uASyoxPeQrjMbyZ41WBrqZf2GkjARVNjnqsiBwjFm8sQhe6BRfBQ19MufdfmS2aAxAF3RBYPx7JzmGwNxMrMXMW",
  "key28": "9gwihnCgnnC6ZtnGvjxwDUVcyEa5f3ocjsTJR5CV1UDPYZvy5PZCS4MQ2KvJ6SzwmCBa9j5RD8QLNjYaauHECth",
  "key29": "wXrTQiwMiX8v9rb4XAGVdUJ7YCUAukw5fVYh7kr7gJha9VsrzpC7fiQtKWN2LB4BWYoZ6KbZBFT2ZCnKQbHRWRK",
  "key30": "3f2GaPo62p4kj1KgBJjM2zEh3ZYZUoBptY8trNWi6gGZiLdXE8UDqWmcy6oTF7DezP264o1RWGqMRvTpHb4ViNoX",
  "key31": "4MsY7s2oR5scYwnmuHyL1u8q8qyJ97koBDbTuifcoyntmAtTf3f4XdMuKAuK27rxSpGN93dWytyp6Z1f7LKy5WWU",
  "key32": "4csJMaofigx73fR8ZGaUMdkc963BS4HSQQAtLNxFCwWcMceaYwEUpVSp2sjERGFKJw7TxBm9QWCoWGrLBoz7MZ1d",
  "key33": "5JFea3YtUuiFa8fCyR1piNNBRNxnBEMFzeT1iVSUsJVwfS7y5x4ie44DH3vPyAY1cnazsqEvWAfQxENpupYiXJn4",
  "key34": "jskkGqjhKmL86kTYQpW8oB8aBp6fAZo4jqAmSgyan7Y8DKs7Tfsph3kn9BXocTWyuoGedHEBfJhjuvYZBQ1gRC2",
  "key35": "3VUthKnwAiBg2T5qKsqG4L2ks7kMzPfC6XEnaG6JwfQiGYbQ6TNC5ZL9NsiARgyqY6ETUsuHDNSu4t7XLwMyosGC",
  "key36": "4jV44oNn9XzsNKUGDvouCuUgi52dU2FCQ2buamjAJ5HkAR7YDFb1JUkcuUujNiA3oJ8LYJacb1R6m6UPZoups12K",
  "key37": "2dsBPQeXCXSrKP2aRFZEw5ZmUBd4G7CaNJykXYBQ6qrwhCwPdqWa3HDjRu4WuBsmctyTmKqe9D4n6XGBsKtrLPpG",
  "key38": "4UjbsyRbHK3utJTa8SrCbLjYm8Wk8qHMzRN5hLjVCEhNv4A8jmjgacAteyKYaUZbC2s3tokc2HUTeYWS9FfVwakT",
  "key39": "2oa1RsnBaf8qHExije3CXiSb41Sa1xLQEtip1sWPYyrr6GNCn2D7MiYhxsxZpvcXUjh52hUaMC2YDcjpy8CQJD3K",
  "key40": "235C1456gyNPnAQ1iciRrmimrsgsDdm3FQDrj6M2HrhnSbXk6LofZokPXesWGKg7apKexjDpqpauFMgC38Rggnof",
  "key41": "3Uq7cAionibLvNLDK6kUaaPHwtFqXkA18wee7NcqbAEL94byExzEoykEB4YbambtoMSnsQg4CQHH8Hht1tdinwxS",
  "key42": "SfNX98YaRm9cAHMSYfyXK3CuScmHZDbAFJCxWzMZi4akKVYJyAGVYSLAdBt7ZL1J7FLLPjL8GAUQgTWCtwiW9sz",
  "key43": "5mYVQ3cZMKMUGsSGiK6ow8PUk8PxmWCW3sKsHNKCQUXmYAsk7azUKBoYnAB7xVm26sKq7UkCs1FSv3Phts5781ba",
  "key44": "ZWp81pePYYTGihefZ8wpixGEgdZL2wGPGaD4Ahe2KP54bGz1uqeG5BDEemmVZhP4JH62B6kMtcg4FQ1yskFRidj",
  "key45": "2uq8suK51LCvT3HyQigrk1t1DBUhEP4vdi9qHbs2WpzfiyLRzSuUuwvYwQeC8uatigm5dwY6uHRkzPm3Bwvv2svy"
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
