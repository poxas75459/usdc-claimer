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
    "5855v51ChBD6nEdPBF41ZRjvBTxKzdKERGHXRXCPkQTzLD8Cz38TEXZUy9rYE8x7nmkCJ2fzpGn2YeEUpxhPpukF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xzqkJkEc5DyK2f6TxAeRNCdxeeNgqxNbWXdnJ6uFaZu6tYiVQ49gdPSPts3DbXKyqh7bGZMjFoJLQASB3ZkT8rN",
  "key1": "3Ygr4RZvovRmRy7sNu4zrunAn6KsyJN1tHEfuuRuAA42X5uCaqAnLLkUwx84uy3awsL2tkjaWugvY3ex28jWkart",
  "key2": "3281zeJWGxE77aCHTZyEyb8hrVrEwTjv9yrkhtkftXmvTc3MbYVUx4FadCcX5Hv6YoB5P4Pz3FqTYqJCcqfXTS5b",
  "key3": "2TYMVnyTCpHxvnnK9ic1aj9URWJ2DU25bLZiBf5A2wQiSui5YrCLUebgXKEE96iZg7WmTd5eDpHUUwXnjQeXFhfU",
  "key4": "2B691peVdy5TM2cXgREsxLAphrfAR2wzTHJjx5atN6nhpbvYjgeXYNN1fjnYA7TVyiYmm7hcsPUWskmRwSRpw88Q",
  "key5": "j6cJo6yJnPm7WYq3P6Xz8vq5fgSB7h3yu2ZJE9yjBWJnqoWJ3sQrN28aY9qgvnvsP4GyTCcF9ZzrGxe7t67fwUU",
  "key6": "i5wRJR1FBzJvkBYuQUoY4k6UEht8Gaw4q3KFe8sqMZ9zpjeBFCuoPczhrBs4xZ3YLLM7hhCT1sfWcazsaVFWQKt",
  "key7": "2HsVYFw5TkDZ9BDNsyxxHffeSC4gF6Rub9eTQGXXgUyPfWKZ5C3yTy2VEpcarWZg2YKJuBtwDB7qM34AjGUqRP8f",
  "key8": "4NyUkftQ6unXzV3MmsEETQ6WY2ygB7femLJRM4rhQhz9Q21LwXmtuKGYnVhrwXaXEf1YFK5GGnb6CQwAeGywrfqJ",
  "key9": "5swjJbPt4porKuJSGV7AHSScot2ZvYcV4uxyBFNQePUut21GG35T5Ct4NxfTsYrG4gSGVKYjf9DEgoK5XADXYEk7",
  "key10": "2srup22GeMxkq7ZAghH6pFyJ35B4M752U8fA1cfFrSRdKucwBHThNWGgyuJjw43bH1KxJkGzBxCR55Ed1b7NJ83N",
  "key11": "4uQVdfNZZCdTJJo7maq1yufteLmnf3v3TnwZtX5ckEsDwUJTckBcTrWmbRuvd3F7tqfKnMRqXyNGAbDfiooZVjvP",
  "key12": "vZPtrMicuf7ghrc38wvE4EVfvTtS1U634VUZtryu1vvwvobNRZh9sDcHbxnUnKeTc22ndhRPgJ5cMZd4Sy9MuVu",
  "key13": "4ywm9sRwRew3ZRne8SmyMLTwMyVoeR6NdbCXF81S7hfRoKdLp26e4mNuV44nBLPNtroNPWn2UWrdahbNu6ENmmWU",
  "key14": "52NPmN1QM3Qn67Ddb9Py3JD5WGjt9Hbr4NuLefc4srMBZ3rbwHyqcGUr8dWEhfMWNyhGtasQRYFFvhPYVj8yUoTz",
  "key15": "2i1PSLRXViGPcDTq5uHKBsyJzvRddpYrVsUmSp1UktEh19HpfqvCiWRz1gAEYx6MmDzrQW9VhwDdTJW6dmNzgRUw",
  "key16": "3Muu5dJTaQxNJBJBu3cFMKQHihWucSmmZeArbfN9H9ridWPst2N7dsEXnzE1YbU4tsduwYCyiR69uzcn26eMhWSP",
  "key17": "WRRS49RW43vqqeDvp2etpKezrzD2vwx1SShv7yuaiSd6kUskn8D7VfB4MSCB9VB6Ux9Eox2cHSnwSBsMdzLW1u7",
  "key18": "24tXN6H2ijzHZkQ8NiXnZyDbpRUYhFe86MQ7HSH3K6oLSARE15r2eZvRMXymX9QaKv3DeGs5KDqmh9sRav43q9mw",
  "key19": "2S4AKiTbARefvZqHKp6er8ECZeY9tovQFUm5r1P8WwvCrtsXUuDXRxgYC1RaTzURdFX8ryxZSGYLJez6bgZZ4dug",
  "key20": "JWMfy5yZhn2bGnmkvZXwS6J8saKHy5kCTWaUunNUQTLjTi2ZpTsoXshvm2UhcUaW5T79HEEdbcECESRbBYm6Bum",
  "key21": "2BQZ5Ko3vzvCyXnX1FMr7t1n8oL3SFaYCMBYkn46N6K8k4oeQwZDb67hazfPaH7Xfq66rFPYZJpbg6o4pCpdioYs",
  "key22": "C2jaayGy8gDg5dYFV5Q2D98wCy3Jmzqp7djRCqEhmC5Q3oTYxSQ2d5bVQsS3ks2PVJuj2qh1yYCcPf7BaqRCH2A",
  "key23": "5bbaGqnuqNfAGGh3oFK6q4RVJ8mBwuCZUjtqYsrEJYJBUS5SBvYd72s1DqL4maGBq6TDWUgTvrgPiXCjHkW1pNNw",
  "key24": "pK3K5Lu1BwZmEzLgBSS8ADb9yFkSLtsXPYmyqd1YjLYH7p8rJVFPKnF2yFbP2nreACx9WM2iYQNvSNMeV1W9B85",
  "key25": "2SpB1dTceGbPfEJkARXxRArSKwbaPYa9fuNcYLjFi98QGCc1DzZ25T6Kb795C82EWm3J8zRmRvYHuRePJ3jNoseo",
  "key26": "q732yWhT3r6TAt8XoLp2qZ4vmg7kKsMqYYkMDdKgzmo436144TrBVdRnZudG4CfWvMemuLsSoWQEL1PxubGVJWd",
  "key27": "4sN1m14RwJjVgzQQmkjmovgHwR93gSXzAMrEz3ES8rpB8ND4jM43WEu3ADuwA7KAZ47H2yA58xkYrLyYRvWFw51b",
  "key28": "4Ub9sLCMZdMUFkKNm8SvuMZFzM15Z31XQgphxdi21Cwkiq2ZhVPmRcbQZnDm36EaK6jF7afxrfuoi2gnFGzDjwRC",
  "key29": "3mrgGbBAq3V9TWbLpWZZUWTPihfE9Ns9Q3Ggu4T12UteGhHNCUx7TWoiruQBBu6wC9ELJBtREqdfXckRZoMyWDwQ",
  "key30": "4gDd8JDPW1EUiDE1v5dkrQMgvrm7KGENebC47RoV1T7SxJnd25cuJqdPGYPdHhAPTRjRJzzYCdXuEzBr5Q2FgtAU"
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
