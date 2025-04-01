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
    "4wNvjHPpNfpi1HM3HU9jdkNixQDedUMxyFf66yuwRLTWZphPPg7fuY1REYGA7hQdZAJDfczjkKYvtGFrxDyXeZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4thnh4yDdW5BQbsJwtumHPKNskEf8gYXxoy7WzccJs345pckUvCnpo5eyRY4tJbXBe4FkWQv5ARtvdTiH3GDe2Qb",
  "key1": "4gRTv4aA9xDq79NawL6EwZZhXddBNDt7pJusfoek7Nn4gqFfX5uJCXaJdyRWHhFLZXfiPr8k3T6EABPnjA1Pbd8p",
  "key2": "3kfwiKgsaq2a5jXHwgKDozSyadiG3BNcrVK6JWFbxnPs8gcsX8G3zquz4j9szpDPzS2hPNtnCkXqwmtawtkNtNEw",
  "key3": "2aUy8QSsEpAqMNiGMNjZwyZGoP4GSy3n8QAC86rLizqmtRqXd42LzNG5S6XsR2mhuTyb8VuzSpzGqVJjg4yadtUa",
  "key4": "2oLmVTvWjS4iEJYchVcGufewek2XLxwtwYQQHDjWePL7hNmNkoujmq23kj2HZjF4DeNiRGEPmLTojUMDpyJ5koTC",
  "key5": "2ggeUXChvTarxBku9N77v6mg2PaHDAB6Wo8bighb1PLkEZKSKSynAMLF1HgWQfaNFSPeLTups67t8AoZD9ZoCPNT",
  "key6": "4EpSL9Wj4SVCeQGY6oTRz6zKEzf2X1etmiR6VxWAiYijmj3dkzTtY3G6LLzYZwjY1agGrsbJVVunBYEcu4SDeEMW",
  "key7": "5qZbJwM7a1ruZJJ4s9Qh7SwhmGLHxxYVPqjJze5dzHRHqfDg9F1ojL58NcKE5wiCBV5hwGwx4a3QYyd8EFK4Kq19",
  "key8": "5NTyCfxsXz9P5XjYvKeimJezHRoUesUpq6HzGHdXc2hq91rTSoAV98U8jSEqxV6jAAWnnvuTJbGzpwUU1eTNRjs3",
  "key9": "5d6ZyH2pderVy8K1ppmr8tfvb6FVb47mX3H5HNRgtikXjoFzSZVmyBMYqv4BzaqcVBG62atUPqso6Nzj7h6nGeWS",
  "key10": "3ZHaqyHNnaxtdEtovMkyA8QwrSVZrYCqRKUr4zLuvamhRHtxKkg5FSFh5pymrECjy4DvdE8BFYTabD5hnH4qsAAW",
  "key11": "RmEj84ghpkveUCHr1WfhXYm8HRtWikyx3dgGsS8MEf6erJP85BQbCEREWGmAT3MMQ43QjgFdMVHa2YvpHAedHuB",
  "key12": "64cXVxNaUmSohejVMwSwRcKKDCzNaE81UyMXn3981yfD3EB25oCr1VPa7rAt3dJRTtdCykoUf41Nbxx9i3vgNtLu",
  "key13": "2k6KG5pJhqq2XbUT95YjtCxoSt7fgukhH9kAsZAfd6cw1Jirxj8Xxd77RMTDnjbkDXtE5hHEUYDstGWd8WUXKgH7",
  "key14": "31bYVNQeBxeExihxXaRaGDEZbDe5VgSczZtBa6k9cUzq1qEP7d9mG9qEyXEYLKEGcHh6vvhNSxoQWX674Dzv1GkR",
  "key15": "4Ah3vSXdSLeBeQaWRHpShVzdCbReHHSY9MWvQnfwPfQKabDNSCfjayf4xiT4e6SY9zfxiCHj3oyzTVo6vmhYizWB",
  "key16": "4KNsp4jsMUey6ePDZmtCsEoVyTdHRkNHeyvbUovTYeRYa7fth2F2xMEkNmaZd1ALBRk5rjxgfydMMvC7vDf4Qciy",
  "key17": "cuNWi41oZ9SECnsr8VgEWcovGq4btTwGSsbmTQZT4NJyYMXqKJYC6vEU7qh1As93Py4QgxusS2AvWSBkHKhqM6B",
  "key18": "5MGARsVMEG8oMUrMcdPThbBdSkeUSnQXDQXeT88FRzf9DW7gPnQoUTp1hvSw51icMMECvzoCdBTzG8K7JVyA9AKu",
  "key19": "5mab2nLwyhMRHBkJnmq5XUnkHMuKnXp2NsnxgWqt4gwT566PtREyyDU7ykGVBAFqP4PTxYJpzmBuXv4GQY7h8Nvz",
  "key20": "pf3KNDG7pyCBpYMCTCLxcjz8NBxex7TZqbo2Rbv8afjiXcQC5dxnuu4JcHoNhcfYbCh7oWi6XjPFDAgJDMDoumw",
  "key21": "2TuxCr94LqjNxzmpyxJXDrpqCfPq2X79BH4L6FfqKxVbvbaZCPAahXoH7eopPop61VXCue2TPqtqr9jqR8svqZQu",
  "key22": "2EHeys1VnWMzWK5sDZ3fUsJZTsgqP1hDFWNBKZiACQaSiQboNxZtu58o16WqWVh5a47QE7RF89KZurqAaJRRvVdH",
  "key23": "49rR776zBFYqy89eJ7JcNnSY52XQ4tCakMceXaCkio2nyjuqRKwj93DFFRQHhAs3YufcT8kBTSfHMbwB8R6QePXD",
  "key24": "2DQxXAaEFSzY3wu6iHAMSjYWhxR59uSrme81kWrzEWmPoMLshCa7JELqteabv37Bno8MzE7mjswKAPijmdre8X2z"
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
