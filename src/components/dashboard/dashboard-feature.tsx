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
    "2pMCTCP37c3AcHFrGB6M8EYXjyQ2REowCWDRsbJ1xLZWapqK1FET1YKf3BRLHu1tQbzCCZMEuKJsPuHjiumMs3jP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b6t74QnNcV5VRP3vbLsCr93onTu6VFzbpsXja8V9AFa7dtzkRsj2sPeeoZYXf1tCLx1poj3RQv5otcnLF6GZMRv",
  "key1": "tpLZqQchzFec9SaJJ34KepH9JVWKLgUUN4as1DkDLVbxYxjfZneXZ9LaDVigtbcTS7SFkpiznzkU1qk5SCaFhG2",
  "key2": "2ZXS38nbsofPkBTN8QsRBxPBDPJ6uvHdjuSjtEVmPrWmH5GSP6WUcxeuRpQxtiiedUhEGWhfLr8T4ku4RrNJGFyx",
  "key3": "3TBeZkALPjfd2VikwQZMEppBy57sqS8EYYVVWHNPouVuhKA6HmQp9C6kMnhgoAWHXunuPnhbLyAoyp7AUbkKWRdU",
  "key4": "sdtxQgt977daqfy9x8QrPYvdfFDtZQ9e65hVvb9MSypCyTPnDeYaQAhuPKxxKBvu9HLrjiZzNrCMrQAy5kZVMZv",
  "key5": "6717ZXscTTAHnz3jtDheCj3CvkCg7ZqwGVXvEW2SVX3a37BnZTJem7VWm6imd4syiD3rWCoPsRSwqSc6E1zcVaCa",
  "key6": "2LbqyyNdUh7ThGp27CK8oLMjBFD5wf8yUumrw9DfUzGcjAhiC58pAt5yf4spnA4SJNKGh9yCoRjh9MSrsZncHfu2",
  "key7": "4fE1ghXzTuDXMgzTwSAheFqst43vnCmDcBk953WjEsnw9WZcHZHBXvFRx7y5XSbB5mU86qQUpvJjxVBbi7ieSab7",
  "key8": "3bjhZ6MrtF7qGw2RuEXQuuZBSmGwZrxmJTXCfXxa6W3wsWCmqn64U8wc1f322aWj4BsxEpthXB9jnksqnunVdaxY",
  "key9": "5MhCfjhCSwuqSQD3HxtgPCUjjyhR7v35x48wLWKZz4e4opjh3ZhHeFaA64BGWB9n3tuVmKWYJ7yoiEMzv1TykdvN",
  "key10": "59fb8W1v1ND4wejLXBLae12yczKwLx9hFYcNJwEMhx5JEFVqeoVdqZDWG9N4eo9iPQaMXs6DMohNRHKSH7BfqQHV",
  "key11": "4eHcQQbxfvE8qedbzRSENU4qu5DzBcdNKLKyLpSEWUy9cmLNRHAMyAvXQeskkdjNuRKGP2poFd8XZm55TVAtEEV8",
  "key12": "64aaDEDbKSgT7GKPZA6kSb1DPAVMK11dT5NR9v2PgNsXxoDsMoS3E922XTBsq7oRsGVvnZKwKHZBTDKmWvhmvaXm",
  "key13": "66St2jpHxWRNmREj4ptaiLwtYcGjeuaeZqdVVo3KSE1p5B81Q2thhKPw4XfSu8DBdWWrg1wmkzx4BKwhyfgAAswb",
  "key14": "2UuuZvuX93v1dSdzBbBjXfo633E72AY1jm852NQve8h2ATXm1gdxrRBz7up7oQqiRQGR1KfMhW1KbogLK9FVLfqJ",
  "key15": "3uAqJmgm5kFxhwxx3SXhreZJ2NcBW1Sk6cf8XMgSJtTN7d3pqWxEJrZELxhLR9rWSGaMeSDwLBiCLpuNnScEgrCR",
  "key16": "2LRCXHbsPE15zBRubhHFV5sCZwstoNvCynbA3scT4nBs2WHPXDry3SFueg9L3bkrxSttnF8Y3FqpAwHFsBDd93g6",
  "key17": "yuGsKihu28pGMPoBzohxujUQFsa1SwV8Gr3ngzNqRW8NAPEaMTjskHjJyDkkHqTfGgLoos3jkvDBvLgBKF8BacC",
  "key18": "2taVEa2aXLwT8KkFbRyYv4ravCF47ZDckQN65SaR4Xv44K73KNRVrXUZitgxiBcbMEKGshMGSMfwMsRySPR9rnUh",
  "key19": "RYyrpfWrJcRYxsy2sz6Fzevr1kGrvE2wSipgs9ixaiyhPHXBw7uZqjfRVDEHdD5zqxbBKb5Qsz8Ahgn4MFZakiZ",
  "key20": "67kRGUkLbxEhZKkYBvQy4WkqVimkqCes4iD1rX1K1WNG9t7VFBtzoPtUSsd7zRyoYLoFem28ZNYY4ytMYaV17NzC",
  "key21": "2vuQLoKfo2f1iFJDKGvFTvGWnGJ5qqZo1QYeVWa5uP95sM9ReCGLHD5QH2mKjve2bPpppgSbL2CkJMR4CcmjnxGZ",
  "key22": "2RTN2MfdhhzR1nTxazdn7W3U2DwY9SDkMN4oXXCzGeanfuu64EapaDBvtJwMM59GpMhhnKwSMLCGsuwMrzdDiaGk",
  "key23": "3RWYD9969rckaC3wpxuFcm3WGrzGMJav2k1HuU4jZMiYxVN5njQ94YwHu3y54r6KrToBiuL9yccLmyFgVCWT8Hdn",
  "key24": "23P8j36fvKhyqQkP8XFJKELnMade6sV2hwCu6uk1JkhtX9UiWJys9Tb5z1Md1WhaBGNMsi7K9YqfhT6bQuXbLUDm",
  "key25": "5bQUkkNbivy6eJ6QLfWb3cfM5Eepx1yDxDD7Q4oykYkYy8pDWQVJt9heTpd14Moa112Yhqrgkvf463M97Y7Mwfdj",
  "key26": "3BeekjkRBHDLRWg2T4kHCDt7S3kHKcjPUd82HKyK2gSpbXNZJUGrsEa6cWXi3SBoJCaaRxsf3FhRX2MsbuzceHNm"
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
