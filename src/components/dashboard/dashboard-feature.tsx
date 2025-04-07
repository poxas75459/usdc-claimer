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
    "2QtjbxfYWf6kwAp7LbpP6c76xywPAVMqGdDUugXgFYwvBexQdkoLKeRcbVs4Ph3oaBzrgpmUFGWyLh2ZLbtutJda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q5XXzSJ3Dwz5zcyJeCM7aQuBCLE3jUwqKEXJxscYai2SvGcKzUGPVwB1uCZGHRLBfDBqeFPUMRnocLS4EuBCArL",
  "key1": "wWHwAXpK9W8ZS2y7FPzJUyo9v2G1pc2J7ravumUmbEUERYKwfvZHcRQAQFjuV6oqnL9V8nYFYhupSQLEg6zYXb9",
  "key2": "5vrhFdvu1aJVHVBdS1NicKM8tq2t1gJtcUjUASUCwqZHnGxeWMe4NV4u7nFgkATVLYpH3Y42FomPPdvtUjBbFCGJ",
  "key3": "4KRu754qSwizfQxhB8ax9yWGPQoCwtMMgtRCUKYUJxVMuqkzbSfGLa7fRgugy5mdi69sdbaRcyrSRpQhggFFHKEo",
  "key4": "f2avdqCZENKbj9PQVPvqh7F1FmLbyr6eHbkrqGPu9biMgq6CQbTtw72e35MLgQehhCfYM5ZReYnWWWPA84SEXcm",
  "key5": "3yCjyDgxqWtWzKD6cPeQamRXCN8L7SitmV3wndz5SmoEASBTskH9JA22bkoBKk2JezFDgKLW6ioXjZuA14RWnbQs",
  "key6": "2nGxRin5uxoqZy4w6A8EUZJTzT9Z1WV9h1XWbJFTZmGQS9AJYwurjcD2n4YmUWFPWYaEhuSn6pB1tnLSXFVyvQcT",
  "key7": "57mCRy51WNdwU6N9fFPdHfS3DXo13son6WQXgj5PgdeKM5E3PsDTroy9qWdUuc9KWXidkoQ1w5JNfciEGgBSTQrs",
  "key8": "3t7fvetSxuv97S5AbJJoNsVwpZxb78n4SMqDeumHrjFCDcbjihrPaTTUiCnk9N6ZT63nfHzMvvCqh9QfzxHhjqXX",
  "key9": "29twUE7mdGe4u1zomsEbTEDHkc1nuz2hFeCJXwe4sqq3BxwrSXwEce7AmVsQ3jmvS7sbmihb9Ey9JaM2uYYnZran",
  "key10": "pMYXGtMwjxZDrrZizWBh4NiouUSFo5idScdfbiutLXBgTHRTWwaSFQZEMfunEsW5mEvRYsSgz8oULsF2Bd1fMfm",
  "key11": "4ji9qH7KwgeeQkQmd7z3ErKcZtGpkCDoTkfabB81myVqkJNJRNpUYAJsLBeVFhYWyUzx7cCGqaGJYerYeqGUdbJt",
  "key12": "3k7nSWtyN518S34cF7VMhLjQFY8Aj9jmYGz3DxLLUuggiNQicgvswdj9c6HmzWgbdoRLX1vg1LuNBZvRdcYGGQQL",
  "key13": "qhKQ9hm2scEEGAip3Fra4Gk4i2F1yu5ZYMEMNmzYV1ezvuJxUyJa8kXL16mry2zfndDMkH7ejDNWrzh3KLEw9KG",
  "key14": "94fj689mm7L2zjyjmyDMNNHrfAi15ioe3dLXRX6Hj12wS9ws6LcJ8415uMR7XEuyUM7zbmRBQDRuBmNN1UMeJ4W",
  "key15": "3QBmDdATT1rQeX9DScYnmL49T49zKHdjbLFnPjmNPMakfWSaxwqdBisbmtk5ztTntP7iVARp92jvKVmX7uJgWNdp",
  "key16": "CA2iUDTZnJYq5C7vQzuvsq4Tm7PKqC9bQmogivCXZkQ2QxppNyErfEJK4nzeQF5Ea7canMVGG3z6FrdZoMwdBLK",
  "key17": "2D8bbYM9KnEGh4B7PyQHHmt4VFWHWx9Qw8x3PgC2mcsfTz58vce5vAsE1bX2cGhjFuDunJ4QPzKZgwVf8N2Ctydi",
  "key18": "61tCtU2AeB1H1LJjhNkRRZEqToY9R3SujxwMwywPdXVvLvHGVFH9rKqXwoChZbpV7or5k8WUXjkC5AnaJpNYWWiC",
  "key19": "5ibh2UqPqCzD5SRDjnGPCpkqpYo4uaZ92DD9q2m9hiiTjaFZutGDN8tBMNcGJzB7567iBps4Y5w9m8ngzRcdmDpo",
  "key20": "2NrzDV7w4zY6GKW8GK7vEDTtn5KsNNsZpe2VjewS6J8EDNm2gzGHnvBfiyKRXJQzdad3nW7QAGYfumqefSxA8J55",
  "key21": "5KpAsf1aAC4cAV9owxj5zhkJ8oFQfmfg8Kq7Xx1UirpHoAoiFcEvgA6N41cuq273X886b3jF2Ki6NhtSLLmA3Qnt",
  "key22": "B8ry6wntbiWBh1hkFidMan1HeXy6NCncyvqN4FrBKRnVHUQi3PUtQLEqrYEUaAsAWA3Ku7Z521pB1MCQESYtNVN",
  "key23": "2XEW6Yy3LP8r9Mt9MYixcoxTaVawsALoWuz3GwxueZzjMCkVYcmPVJE2mgrMYaVuGauuHTLzjtvKCnF3A9v4UDa7",
  "key24": "24aVM7QQGVPHKxj4DJcBbwY6FkXWpY7r5mFZviCS8XoMtPYhRRcytXQMZ8nsmHD4wWoeCZmpNq8CNaqokG6PMjFp",
  "key25": "31zftZJNmiJveurFkrncPsjnip7io3xfv8iBbMrYykaDPHdX44z1myg8BAXBGxyUDqwcyXgpGqfwxBqJmDzww6VH",
  "key26": "2DyFgxctpDKmtnJNKwK5s3h2vaqcSVe2DR7BTfpVC8cEmxz4CqnHDawJTomzjjfeRuTZSWe1Jt61UeqiW4Ewbbof"
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
