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
    "UeZ8MMBgbM1Dyabx7inurUzB8czUJCf5XY1pp7iF99Eme2y6FYu9npouMSTwCX7RLfVLjgZPakMEhVqUxoS5pJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XGpH1X1pi3dHPBFvTDUqGrYbMMbvEoymz2vag1yNdASJqwzgFmC6n1P9Gvg4HQ4oVWod1h3iBn8nMZ7BVHifpku",
  "key1": "3erBUgTkySAt6RJ4ywMoMPpBnmRvaC881mTmHAbiwqhee83X4Xq3RqfQSn2misKjfw9XHsVZEqPZpzTTzndJtjtS",
  "key2": "5DJLabi2Yj3cws8tNvjDTXSg7y9ZCRbiNFPgmnjei9mQr9yn9asfGxeUpSvwu9uwQLVj5dUCywMnZLfjemuiWyZH",
  "key3": "2uMMQyt8YgoaZXpFqCvzwspF1eaAk2Sp8ySDKxtwAFDw3adk1tEeVgdDmWzrpBU763LdWyh8JP7SAhPTtZzKmyfu",
  "key4": "2TGnez2iRSA8P6Tu3YRreUjYqMbFfHXiwHUkXrrHzqhXJ21YZk8sNRCo2hWTgwryKoZvqoet3SzViADyYBesLNCT",
  "key5": "4g3g95k45TzvpkRk6xKLHis7prbsMHK8cwgPWgTVRBR39Yqn8QZcMgmEfN6YEJYjZgzzYZJ3j6EGagtyuZEjNsT6",
  "key6": "3SAtPLfZCDV8V7SUspth9K1WZp4FAu5FdB4iWE77NpVV3WNjUBUjhWuBcZFMwcaTudPHxBe7cduMWRQyutSK5gGM",
  "key7": "2mpc2pYC1qrXzjB5tKbEY4bXLMNW18AMSkvHisvQENaq6fFQac33DSvsRPVfRonNszmyMzNHyn5VUk5C2HBjo6bE",
  "key8": "2duExsrRGonqLE3aAfznYHx5VLHUKwuc56gGHUXk95Bh7D2DU9CUGgcfwNB2CJCZE5ie7eyHAcXjd3zeaQqy85eu",
  "key9": "hP9ST8BWXLVPz1twEvGNQbiqqTCLgcv3GaM4BAWFDRdNHDJJcFf47W9v3Pk3WoJcbHn2sZkaZzaW8iL1CQgNWN2",
  "key10": "2fwrVpSMH4nSFZmSHev3f6o3zJJ5QAwgbFSAA9ie74MWSyMaPiF8ZGgP5LhTbqvFwjdEAuw46W6R2Xgne6TXw1Ck",
  "key11": "3GwexUNRqH9GHYdGKVDBnG4c24GeFUXJVNzZmjkirhQodGk1fzYyKR6AcWAFGLp1ANJexfCUAqJFBjhtxG3JGdT4",
  "key12": "2p79YM2JptLuJFa7tEw6shmcjQ3qcCVU1Nw843Un89qtCRFrNnYRLb4iA28DWAfxUFb5M4PDQRCwT7vFaBtwNTxX",
  "key13": "5uMymCSBVshgPXSyKBvHLhX29uRjeUMuSZN94639Gxdcst69xf1d3FPyooucEgSUbHTv9GWMpwuuV9rjosH6sw4D",
  "key14": "2Mwpsnt3WnrdbXCyHGT856x5hRnYTMEqnZF3v4EJmABQdbHJBXAssBDnDGvBJZykTupnvpnouPvrhitKqynMdEhi",
  "key15": "2sXwjQJ1sVBYfXBmiv7bPsvJGhpUH6vhrY3wByJbvwTaCeddh4AVEvRd5PiesM8hk789sq872gkrgS5RsrF1qmdy",
  "key16": "HYtQeBDwcUtNPz39dJKrFjtegWYzsU4suYFaetRPii3KcDwXfbduXMiFjjeMTQ3iX8ghusFgkWf7TuwzvwFCcxx",
  "key17": "63mzxy5fqHqSmXuk7pceK2cq1Hz8DMfz5arPhEP65r8C61UaTJkW3ZqDpdJ4z6csv8uoRrwEBwmFAxNs7G9yZjMA",
  "key18": "3v2AraQ5JZhau3F1d68zPnMeJZGaiCUi6opV55GMeEX6VtFndDQmtL5LSW81HyZxabRmdfdZMCUZsqhZkuedzjQz",
  "key19": "4zsMTGX4GnhRoDaJipHzesnfg1pMxRi3T9jZN38NKfKxsftpFZVgF1UP5qkoMeSuEzU7qQvpxhui3Xyz3wGQtNdg",
  "key20": "5EKu6Wyi8iY5efuSJG1WNdNXUGmyQBMBzkYwHBqzgsa4yh9tdr27hUV3fWSwJQPCT995rMwFCfnkK35F6h4S7ZMd",
  "key21": "5eeMTUd7qh9nrqfmYRZTFXhemCRRcmtAzYcRYNGo1L8WJBypFuBq33ocBHbaxP8gb5e2CpEDwYoe5iLGbQwazQ5L",
  "key22": "5JhXxrKZDbn3CSoF4KxCGp7Z76isu6UcE3o1PSSJd747xBjuT7yzMnvNvcZYrv9XaQib941XKyb61XPNnuFwyMRA",
  "key23": "5h8jrzyAoaiFVuE5YojKHdd6yHRXNd7Wt7TX1j4cH3V9tXq4Kopng72vvSPgNNBhCZCxxBmnxAFNuUUUjVNcCU3",
  "key24": "3tmJcGfCsV7cmVBh7D47ZYKrzCYcEEF8mHVArp7qtKkM1kdjMfc3ffocSfznQW9tbtjc5pjB6DVGVEh9Fm9HrP1q",
  "key25": "3digSd3URJQitQWMKSJHmsDzBzXKmpk8GTmH76gd9w1xqdXF6P1gve3Fpiqv7VxGrgQEBGzBD6H5deAgD8hrK82x",
  "key26": "2WR1ae69Vtqig7osbCEbh2zxfQNLLePyGJ5EX3EG5iEjktPajRGuHfqjGsR3Ft56x1hx55ACX8vuDRmHuDxDGzbE",
  "key27": "3Uuzj8i7JeG7j8VPnN8TXszWTi6Qaxtt21Fwgv3v4FWeqARYssn8gWfmtXXx5gdAsdqtmG7m8aRdV7Av4ErVCrat",
  "key28": "3xRL4pV2ksxcaa5V1FPXBrNnw5vxq8zTeP947uMPs7nbNvydncovdkj5knnpSf7Q8viAuwu1BG56mGUTyMY52LAv",
  "key29": "3jWDrFkCVtaU3nonjKU5EX5tG9Ztna89ATsXQypyQVWj5osL1JrUANQXXrfFuDYFxmv3GLV2YRqDGLQkKzM3Nwda",
  "key30": "2iaJ9Z3Xrux7ZM9j4eKPJNmMFKNWXRRbxsnjosgysVKJBcLZqtcpEyz9AUR48xMQnHVHGzNptv2mfonDssL5b6SD",
  "key31": "61UMQSXAFFTY4kVhC437mMmBjxkm3VQcuPdgfQZ3sa4vtSZtjfSNQU57M3UUg55oEJq1KHE9KyXjMAK6CwcDc5ry",
  "key32": "4dpV8fvXM2vqV6rwXjRNVxsvPtEgWnPcZv9gToLHN1KPwqPGNesQxndTMrbm7qQwQK78eXUSEtrgMALzR2KAGQxj",
  "key33": "2iTixnt2MBpv2h2XiKTuCB4iNDaj4bayD5eenDd9y2iEMUhNthoYAisgkmbDoE6QKWXoDBLfh5kn8uTBFAQar9q6",
  "key34": "51GdcAnV3pMosbbVNPKt94nX2FT88Tj5181kqZ6TKRpAGE3WPXvzqmUqZnZwLBA8bHh7LF9jmD58n5mTP8ic9jV",
  "key35": "3UWnHHGhfx2iE2Wb2T8igiuqTrTiZikApzUPfo3bpcofiJ99qNSszQKVN5sumdPWp2a4bhHGLB5MxETmepXX7MZV",
  "key36": "UtqEXmHUBqZQ99AwAAnLR9MFtr4fg6wjjr5qARykgR6EjxCu7UTqMC9NKKB74faD2gf1k5hkULqiu47JRnTYCE9",
  "key37": "62GRfodgsPo3Udfv1rAkVAv2vWTsDFA55M5e3Gwq42827SaXwJ8BWZPyxG2chWdqMvr5NEjmh6T4nASTcs1aLi5T",
  "key38": "58Yd5YSUqW9RyeXrvzxJEmijZuqjZv2bDCnkBcGoUJQtbprHRrDAYuap6et1AKe48mZuSipfKfNDFFi9DJhvcU5P",
  "key39": "2KkEhJJt5U4Tyo1XoRcmGRhezafs6bFUweXoAezXmZrEDXNRARGP5WCNERJNBSBkL2Xukpei1yU5Tatb7oc178SQ",
  "key40": "5mkpzhLNDDZNJf5D7gLk22nkuWimxuyErK6rngy5zDHgySN8mb6BF1s9U6kFUHFE2sdJp9FTivm3uNLMm5qNaU2a"
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
