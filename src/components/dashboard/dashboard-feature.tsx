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
    "cBxXfUmxrstKPNyJd7ETf1YsK1QbRVCk4uthhgLECW9mY7DMELNzK21fFG26yzgwjur5dEG7KXKs9pw93Pse8UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UWEyD6EUNXLDYw6c8gMqUhGLUemLh6DRpgpoBLNYECuvx8mpE1vJyfNCK8dpkxtLqVzw6ALQpb2juQ3UPHAz8hd",
  "key1": "WoQjEDYc12zNGKTd7DPPU1G5gb8SRbEG5zURiD3AoDJnLgjmnC4fYQ5RKAJi74eeivnNhpJiHmjgckcNXUMqWVy",
  "key2": "NEwY7EM6MpXVzdkN1SqQA3K9mMPgbRgA1vqNact4kMsJCjNo75cVtLUiMHdPZ6qmVq6WYde28voHeUuXpW9fBcx",
  "key3": "27h86R7HpL7pu6qF3di3rvpGv1wY8jHNpfwN7JxKQpqitvpEdaxBrFuXSCGctX2iqBdDdCzSV4qAoy5eV4rD1MaV",
  "key4": "47kRHgLy3a3ekKdiaS8QRE9UBF8FMka6up6TgztgZ5wiCUHivUjEiRdXgNXB4vjuP3WLw835oYHEY8pMEVrsN8Sb",
  "key5": "28sHSJ28g28Rk8yMcY2smFDPNquqnZRsyijHVM1JR6xuFFzd5Dm4zEyEFAwraftp51yrvgaX1buVgjjQ5YMa7tXS",
  "key6": "4jfBfdhR33p71qEtHgPdwQFmL9D5uoEhWnKvPopXDzCmg75cfinzxiXtPNu8P6KKSFWG1jqjNk1C8GoPSqNnESAv",
  "key7": "2snLFTsrbaaNThta27v4RUdoCscXvkDevnYhGZu9y5B1EqTiFajpGHRc1oqR6zNy53ZFpEjTdxcQVecyzwoMEcXq",
  "key8": "yeh6vuFGjdDCFryh1FENqDQCpQ6mk36y1SFmo3nQhLRAArQ5qidDHoCXfXJTuVGukXdB4h7gk87xpn9QRs9jqYY",
  "key9": "b23y5RDU1nH5r2aVUcQzewKCy5GZjnjkivCaWKPYT1RFA195ZF5jxEVR2WiWZnNcvpp2eKC8KDkdnUjWy4TqWib",
  "key10": "6515YKGvxoALtD1bjgXJSJhS4jmRaCnokxAaxQPgraTMn33eFzKRaayRz2bZ6C7P3cT87DqVf463QE9C4f5xriQs",
  "key11": "4oykGoJwr22VpLVUCxVKpXszYTvoecN5rRk6H8Crn6a7LJXZnzb9oYueknTe8Wg6ddtTQP6nV8gjRy6BofbrriFZ",
  "key12": "28NR5S8wpVXCcXDo2o44W9A9TgNqci7fvnvUKfGVQNdHYkNTj9erHpT9NfcQSr8YTqSMPdTYkb4oJrGSZ9TJcSM3",
  "key13": "4jtk6Qk5tid4VbieiSUyo8VoaTcQgiNUdfZNQp3Dk9U74gZ4QvovHXvHu6eqqM7J93MJDxzDpdmp53U9R84ijhJ2",
  "key14": "3rcxKCq9BbwJzJyMtDeycmHdf7qandxQp9sxN58K42Lx5PtbvBo3zPtpz3ZU9eUvoqC28VRJ8PThHcwFHm3z6yDH",
  "key15": "ehzQkTERYeWU8sYnS1W8gDoe7Zfn4t3npQDY1FJLqntamzz5TPtidPU8coVs5i2yWTrc4XQrQmjG8YxDwP6YWtZ",
  "key16": "EqY34H9efQMDAKfxMAGa6kCw5vy18iJuvDC8Cte7phDuRCg9iSVU9TCtLZPrKR6u7QeXPF54AMuFUeXghzDrDTd",
  "key17": "2nqFqULuDA6GpFHx7zutSkGnG8tqL6SMzZeyu9VPP2sqmBY5W9FMnidPMnGgAz72kT8FoUr7wTqS8E4stAkXahq8",
  "key18": "W4Sru75wikb9ZwMY3D5sx1yhR8DxDcTwxJKbSbGyEfLkH3sHoGvJQf1wEfgcVSjRPJujh2Ht9sk2BPiYhTRqj6B",
  "key19": "49rYF6rguz4FUMrhTvyKNv7fCgJfo1UXyrQGEZdiz5zHXQhdaguZefzS7PpMSfXCBR9EyZhCTa76wE5SU7xcwrQu",
  "key20": "2SeLCgDZkChnPZjyckPobzwuwLxkp6joj7ac2s748CwF6JVC85XbhkdLQirVpdLczErDPTPru81AZgn55pg5YeDa",
  "key21": "2cTNcR9LeZv8xjQhe9yaHWjtLRspwGZ67xiZWZLozkiTD34wd79NPz8NiXMiVucocrHdf4f7NvrTFtYeSkFDGDyG",
  "key22": "2tA8X8EwaEdEkBNHUhSjYNLJ2v1XnzDs7W9FJovRnjaza3tuUSTNFP58iPjkK2kf3NeY31obNBSW9ayhrEZbN659",
  "key23": "5sSGaFVHH7y8rjk9V9JGUfFveQCuMPBdeaieP975VH9wZD1i4eFp766ig4AjfMpK2523vVdHcmiVYCpue9syxWSx",
  "key24": "2fijpT8uR9y5HxEHxx7Atk4oG5ZY52oFByE89j7ittGequwTgoCsxMSzzduLC2ACyhxN5phwhaUdNt8Qxcd8WZcT",
  "key25": "4P8CeHjMk3g5iqK7RM8dWuHr43RRy7KPoRUvtq6osxkHRmG1tZPgYru97ELY1JyfcXVLrpDKnUUxFqzKAdxtd9My",
  "key26": "2H55PEV2xNR6TvT73prtGmsaShcjNW7Et9wGaQ365SSLDzT46oEDAeRbQXk1qFvmLog8Tf7Ln12o33mRwYdp5Fk",
  "key27": "339aMvS5rdhZmdPrzim4fRHbRXWduXzs1xzTzQ2ws3GcbCZsWGVGeWwwDpaSqyeRLTFKn7P98vDRrhTpT3MB3z5H",
  "key28": "3AzhixmAZhE46urGCPhpXNKt3k6YqsK1UZns9SQ2gtJtJrErgmkwF81nKRav2aQHk1FQkVfqQ77ePUds2Nwiodhx",
  "key29": "565fWabvmBjVBsKCd9314sg72JvbqWcvgpNPRJxCwqPvWb7SGuwshB6Ad2RMG3VK9UDVE96bWeWqzb8uFa7gEEML",
  "key30": "3bK3hqFzEMnDqn5raNfVEK5AYtPQ8zsmUpyhzB7wrJukJFUiw3N2Zs5vN2gYeMbDRbcJTz3KtwZb3WMvVCXKcSio",
  "key31": "2DkdnU4qq6oUTFJTwDGoeSuCTr9ypFGgW6xP9cXyBDYiPkTxH21oLEHxPo1KJGgF9cLi2GtAw5N16DQHwA1Xqt77",
  "key32": "3xeeoX4dkkFjFAkWFXRcFiiW6GRVmHHUPT4cz6NyyDGnyQmwPHrDc7w3DYzFrA44Hdp3Pj9c3bbXXzEngE1dFjDb",
  "key33": "2SEM7k6yr7qaicayUw5AGQH8ejBShm3Gxv7YXVc9ypBSQ7fKNTiuBcvvcW7NA22GFNg2BgF9Myk7qnDQCQ2gKkEu",
  "key34": "3NmSQY9zoHq3YiVxezv4HPGNqoSai8mvdArSkGjQZu61wgsqtyf32yrhpC9i2yi8nLmqqYphPAbWE2NLEkFfh1sL",
  "key35": "25JS9ezLM5zRh7KvrbTfYELBTMtTdrmfxTTsRbHrVaFQEwkM8HpXJYqUaheVYKcroHx1CpgTrjLFX1jfUmLTCJkt",
  "key36": "5afgwTLjxpoN8v5bSbcE2kp3WPJjfijLn6xModKayPogM2gW23dyo4mkQKxmtG8UGqXah1N5NqViA7kBsZiH4jqT",
  "key37": "EfidMoGcVhaQY4wruP15brqA6HzzKRFEWPGRxakjEzTEaZUp97wiqpZQisXXAyWsEJsCPfCDSJucamwpudsbMvx",
  "key38": "4dGDgkxcMx79be5zuJy6pGtEQ36cVFKVjqpac6HvzB7AHanQEbkfEH4taQPJXnJjXLuEPgxLqumvcUTTxZ4AWPNS",
  "key39": "3Hht2sEUN9fE2AuEJGVVbiGcNikxZ2eNYbo96awCgzRcRmEtfcMviKvAJRgrapW9Lkj6f6TQ569BrAPbDUdWJqWZ",
  "key40": "BLovKHLXJQbhw7qyKm7ypYR4egCL32WrMh9xcvLJtykUiwfsMGAavAmqcCgsjH9A5G3ArHg2pB6BBjWGKL8i3eD",
  "key41": "4JQbaCwH7tP3nVFoL5MKqUV3D33tURvb2G74EjaP5B4ASEyLJQHxEqP3DVqT7eWhdm7d2AqS3rG4NqMrmGETa69F",
  "key42": "2m2YsLu14R3obvLCjyYoy1Q9hqXn3n6BHfmpW6DwBWhgAvLnx9LULoQAoZCV1Yvv1zDx3tFRvdYcQRoCZpb5xxa1"
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
