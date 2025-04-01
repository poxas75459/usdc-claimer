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
    "5VAjLnah4nUsR5x8CrYe3Noq2oN8gQWd78YEw1LKqreXaWbTbSHRYX2FAVzMoBu8HBwiNad8UfLY3h2popLDqJUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ChYY5qoyVNzQgWqmurumam3gmkApaw7i8EG78K1wDm5KuW5pxUqU76SQBTcquKodXwwa65YNWboVTVDMvVkEw5",
  "key1": "6CJBEBFQVBLeqLi9RGQHG8s72dXTBGP3gAMKgTeF68McG4wch4TZ7KaMUk4m18voZDZBpm7b6Rk3Md7gJb9YY64",
  "key2": "37CJZ2TRqAK8LZxrfAfjDKB9rLLydzem7VqXvgkS4D9MVPEB4En7sW4UiNTaDT4jcXFspuFT7mVP5ZSZzmnHwgbx",
  "key3": "3wST5r13ENyHpNbjpYzY5deqHAr1CKYo9w2FMD5pt3oC7NcrAKYFiCugeEzRqe7SqLGzo4Ka5n4YwSvCjkEEauNj",
  "key4": "4sriz6YLxSjDF58hF7RzscdNY1oovojgvjKyzys6jxMugxj3zaTKk4AH2u414kbdz4L1Bv63qRaYCFnJ1fSPNwc4",
  "key5": "3GX39tNuXf5zUHN1urUwPeyxEj7UXt9yLzg6ET2gXAueeEiH5sJ9sP7skeYDfKoeBzMThcw3xe1suPyvxpox9aMC",
  "key6": "49hBHfLkaVYK8DQJ5CJpbG7DkRtJJYbS7r1tYvQ5gVeTRy7PsT1odREuds4RV3jWKsEg1ntpMkuL4FQTBMW6RSdF",
  "key7": "3vhwUZMJLPVDFJ3uwjc6PjohPW59fJW43JEtL3MpLqKjHLbxDx7jpaVGaCgSWWN2p6oJWoe663tZ1PSPTSuvwVpk",
  "key8": "L1GHV3GP1u1K2BrL6kVFQB3k8YBu1SuwEqGy8JYZ2rZoFfkr36VA2DN4adMdhTr6dM3vE3D974Hjrv44fEKHmjs",
  "key9": "oKhVTirnVghzMPyhgkERCHaBgEc41QRVKqyJSCn2WzgnqgchAYNzpP3zq7Wy5VodNat6Fp6647RfSPVyBucfYSM",
  "key10": "546uAiHLAS1F3wJBHyRx76fdzgYLiVZHEg772syWuD7g7XzUcnm6CiZWdUn56xe5TN9ppTWJEVwtPU7pqSFt69JN",
  "key11": "3gk9q1kNHZqFzTQk17bn5F5vDpr8HKRzp1vxnWWoDAgfkS3xgYDWLbjrVRB3FAVwoBAEPXwgpYymGmYJovG1JngH",
  "key12": "4e2o31L8SLUmx2RMjbmbYtuxP1EFyFdMBNgkJyGizr9g71F3ZXFHmRPL6ywJjjj8h6Sd3EXki28iXa1UEQkks94D",
  "key13": "mYdu94nCPnRSV2XidJEj6revsophG8u3cexjbDgq1YQ9qqotNbqjVSxnUA8tZcrCV8mEC973WgGjo5e4LUn7UFM",
  "key14": "4HyQSW5bUN4fFKYBKJhMGwiNdhGQ5XBvmvxcz1imcozjTNsKesqRivNvxyNg1TH9Nmhv9e9B9NeiHNct4rXZ9f9x",
  "key15": "J8rwCKzsdwUeACbgbGqEdnQpS4e3LrMBWjPqgsEjuZ7JKShS9UhPpDR2HVUGiT7nbd7bni8i2zJcuW1J2xcEevV",
  "key16": "3NShzPLQ18drSvwfqCEAya6gz75zdGTcqR3NSSginWLmuztfToDsjmmcRZkqxPz6RDgr9GodK2AmrTPCz8riBdo",
  "key17": "Hspy5y1yX4EJquYBr4airWWY8be7RDFBMAqLvtMjc7XbB5jNEDvdasPjs1PvsRkUJtqXCxBpPQDeyo9CXmWkAog",
  "key18": "3JiSXnMYz6bao6itnS93q8ar9BYmKfoGxy1Zck8gqYkgBsGzWw8vFUfuwfRM5DnUd19PPutY3Jm8532jZ18RBT81",
  "key19": "2oLMA4uqNSXUdRFdGoRk2hcBoRse8qdRhNg3thEHwWjYhKvKwzyx49Pu1KyHeShrSRBbjRisuUZfmCjyxSzatBpd",
  "key20": "53tAzTq5Z9vyR4SJktkHKb7giv2HrNi8w83kbmqzuPEFmzg2Y8hKe12tM1qgNFRocWjrjL6cZu64ooWAfF8KaSq4",
  "key21": "HQCwcUm1S4168vwmwvTZtszJxepwjRdwTFUtMoVWyoGkcZLjMDnYP6SyNKUdPVRP2q6VfoHwbdHL9Abb5vnAfVT",
  "key22": "36Vfh8Tncg9rwxJtU4K71KE4kxM8unzhANvCXEJdnDVTZsPTvcW8HK29etRSfqnjBQRTVxvM7Cqi9R1iA4gx8oLQ",
  "key23": "tWG1xe9T2vZG6nR45bm9xvYRkdk1bkLuN5365HHEPsFfeqozsEhAZbaTzBrWZn8a3YUsvU7zZs31TxqMqeufxqr",
  "key24": "57v4V89QqZpnY3TQVgTrfuwYw5NiLqenEBjkXs79NeZVrtwehAyHFBRMKSH99xtdSQF97oYqmoC4pAogRpztDh88",
  "key25": "3kHrrUzK2CoM9XMGNQiVS1EwSUdwKA5Z4vVvNXDUse9qrqgU68cZrdekn625wsX3LA3LDcCwoz6qWDZrixNwdhfr",
  "key26": "3JexJoxWywP1a9C2sBT9iKvZd7ZqPZZgv4y6pARy7kuxUe8NknwXCS3mv3iQYBHBgMiK9b52zV4irAxRug4tEZWK",
  "key27": "26d2btcxhKR15nXJvCSRCKLridoykxEd1sFSoV9fEq4RdciUg4QLi3619rQ5GmJ4K6hbaCeYVneju1bYJuSu7VWN",
  "key28": "2n92hNg83z4NZAdHV4QY7ppeDoU4namGP4gNraLJLWCavi76dcQ9Fvg1K1mPZnxxK6hXhTFNzhKzfy4BujWYAjA7",
  "key29": "4UpjThpKPd8qRvtJqbnQPRrHijzrVqqTVLKu9JkY43qKyCyeMHSfRpSGYS75aZQ6aixTbpgrikYQ6oYuKYpQNh9u",
  "key30": "54oErJTwRUEkkzBcNoZ5tbAaJgmmDZPcsMmtG31uZgrm46SEE36gseXNTtUGptaS2rsvppUCc1jfE3S7xuNYoKNw",
  "key31": "2prBh2thbLCj67wXvjBiSoZYsD5umrE9AsVwSwUisb5GB2ZmtCRuVAEMhVfVvTygNV1R5qUwfB5rSbqC6qf3YUtQ",
  "key32": "51zMG49PMBCLc99FSNDyk9tdUT4KF4krq9zwPnKnLJqDpEP24GDY48HChh2noXSuCrgZurYWxpiXa81SuK6qjkaz",
  "key33": "54rbVfA5qAvmpGH7iDC2qWBFh6778A6ZVcq5tNw3CW8FgMxFRZAQmfnZDawUBUkxoaDpZPsNivn8hRji4ne7EnUQ",
  "key34": "53tMTwhNVwbvR6P1eBq5abs4dTkpzHtJZNAS52XeBXVd9WiNzcSwHR9J5msSovB8Z9K4mtqs2z6PaoYQqjFcudjJ",
  "key35": "5h5sUNu1iSeNqVpji7CVxsQVog7QwJLQekyjHBPQ2k9B7rvwpd8mUKZzeX9m2wWExXsCFvGhCDdDgPJc65LC6yzK",
  "key36": "3MBFNqeQCz3io2yNrwj2fQyKNEiNdjT99yZ4p9jxRfABfoKt4TKvJZjSnZbg2xAyCyEeDWm5a7tAj2pQbHH8MDFF",
  "key37": "3BQ8ZhQjzeRLnvi4DpzcJ6rxqrQSSM2ytEdoDm1fGGeUhqv4CfenTUPWGzg8nUNK7rVKVGbdbZfUrYU6CG6Wewys",
  "key38": "4HtXtNGev7sTLEyCyTvf81YUERzpCuChP3GDopXAjNWSn27mXgAvXrJQknFp8bRcHVSa7ggXSt9UgUCMSSL5MgcF",
  "key39": "61umHHz9pq59iTGh6MnPk1YXzTBgQt9GZkuNdWmpG16txygebbTvUfMj8mJ8iJGdhwkDrZ8Yw9sW9Rwnw2Gq8W6J",
  "key40": "4bzhqbJfj6PsvuES9nVKeYZXvurwJWqfLW6W7Rnw6uWhyG5xaePnj1rmMv2Rat1otmRJUsyWT7Rv38GZ5kgotij3",
  "key41": "4pcXn573ijd7EjkcLrrGTfWMtFw4WsE5VxhUcxFoqd2j4Az2sryoiNrpdogToEQoLCjrYz2FLzeFi6ut6Png97ZW",
  "key42": "3c44BskmcNFgFSKY7nTiXvs7C8ScStM4qpKmqMWGGoqJ8XnJvVsViFzZ9gycje5VvBWT5sXzJfH2z9iZGVMpJR98",
  "key43": "43WMhHtWwMqmmtoSbZ2jxQEG2D3a5F7BUtSSHmowYrRe8Cw8WMZFronFvUNtKwH2bQX1midmgfrCxPNRyeFYSwX3",
  "key44": "2mLffQKykZCJ6mvqXNrb3cZGHKQBfG96EPJU8gCVX5pe9pdq8spHtuJsRPDnspRYTeGCdJDXEu9c23JSyqkbE26f"
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
