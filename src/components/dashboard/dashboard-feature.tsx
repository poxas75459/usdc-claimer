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
    "3cvL9EViDXHpaLoLMi1YxcdV5jfH6DEMgUW3tigHywFVxuWXuFbBHBM7ArFffgRw6NXn7xm3KKtcTkVxmMGwmC6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4g5iAkvqJnZBzzHyaG3NrPW7LA2fSUD6fmg8mZW7x8qZqZkrezFquXLFYGAzNm7EJCPAd57PCx9JXwV6RWcHvY",
  "key1": "SdPqSiwjwWHPmQufXyfJ8tR5eSevfuftaACSKzTkhuXQdDBnbbD71uW14nTp3WKZ6nea5Fe4dGXZiWJ6mtaGi7B",
  "key2": "3PPvCYXnULKcmuQzYB4sfGPTnCCCsc5FJHg66GYVxMaLTYYtUQMnX4HrVxv7mraaZZzvyaDfsuBA5fk5rmLEBrpe",
  "key3": "eyjnFAytqw6tN4BXMgSmX5ovVxnxj78UnPBLL3BS44ES8VcWbrMkf8PDD1tmCJn66rUD8w72enf8P31YoWtXWAX",
  "key4": "5QgPgR9gejZkNnMEbXSFTJg5gnP3g1qaPYNqziF1tyA6QejYnf1jwZxQPdNTqHD6SPvjuZHuMs1KvgihCbA9uvt4",
  "key5": "3vJFJ4He1scJk9bUXFdd1KyZGrqSDutM2Fzc1ds7hXndie2797eFGqAuDsxrrhxJBUfNpd91wVeiMjpDctbcFWL1",
  "key6": "4DkGEBihjeWNYQVnP1EFxJoFoJkWSeM21fw3kXbDe2y9Qg1o7XuWTwyQyf8VLyUrLmgPuULepA1HCyxGtkBC3mRW",
  "key7": "5CFdNwmVbXgdavhwdhUjRuARtqDdzyrXK3eg3airSStqHeaUD36s9Ws8AKgQFpsZwMJZQUMzVpCYxPy5VtmX8iz9",
  "key8": "exJGFqQEftKdSuqwTzSTj73NDTzCGcMNS2teYva8NGFyfTYFy4bEggjSNjmTnxXYygWn8WFaLtW254mo6LfCDm2",
  "key9": "561MV7uCRsTyT3TWKTfHaXhbKKqewqZJM1Z53HThcWDXhJsPyPfENmYPqyLYWw6NXvSPaCGcwdrzTZF6ZSUSvGFv",
  "key10": "245mT3854fvnA1NqPFXdqsq6uHkXCrf4o5YfybHynEHybBKepZJPWgCmXHyg3CukNonZRHDcqvyWMwpHVVtwqabD",
  "key11": "4UoCwEjm2Ye28gKUdZL28j5DtVec7mF3waY8s9KhwzFS7fxscSq1DUx6jeNx5GQV8k63EyrQhsynVkuf3gqVDgCW",
  "key12": "4ut39oADkq7aifS6CF4oWzuPu65QEgaCsKKRFWWYsR1fsaupAoMMd1NZaSxqtwc8dgyW78Rkm2ha7XBFAsr7hXrJ",
  "key13": "5V5SA8LvoFPCZxVU94ETAXK1viJschA8F26hmAMHDotjPNJS8ZwEhqCcu7wgx9E6qCKdvt9Lc6Z2yUeznEYp3ZLh",
  "key14": "3dcTDorpfiMJh37Kyk7bQtgosYBdTxVowwwiEtMYpM4cUEGnwcJ5L3vtX2KgdZ3UXJ6S1h6JUE99Zu8FpJjs1Lin",
  "key15": "4uu6pu8un4Uu8iLAgiYJfj5Nz2c8emmT91UTnhNsn3ffSGotQtmACJBBNp6ZfztsGu7fwV2RNtdKzotaTMvWpsGe",
  "key16": "2pq9H9FswJUyGww8ekApcYyHsRqA5fwR9PpAqAgmtRJBx56DetP11itYU6K8ZDVKBdC6FDHLU8PxAqBCPoqpbxjs",
  "key17": "2qRAto6zyEc1gVuBSBxwiL8dCcNZPEe6NrEK64xBFZEc7qa9u3FdVie4d6buBqRZJLJDcBYgEXzxzokKLokxXZvi",
  "key18": "FCqQ8N2nLtF4UaN2n8u9PGPvH2XZ1yDYX8nXvods3mhYxGLSxvwzVKWgdgx2K8hZybGe5T1niPLDF6DDKgKZzZQ",
  "key19": "56o6wjNnBViBKivLeVxE5RmhMTykru5PucYCiVq3uDmmkziUspH3hotVzYMkcpA1eJ6eaztEzTbA1NGvMeLETEu9",
  "key20": "4MPopccneJEFeJHySt334wbVGoJ24EKJf4oUXQ2NKzn46xHoGvBTKHzpoSYh9DLGb7KSE41L9pEbsnSmJSgkaut7",
  "key21": "5BkvH98GcRkeFj464RxcYQp4NwwzUEj9HnaU1u5aHqvGJsBpwwdXR3vs2d19HwpdMaYD8fVn2Bx3JRzFLLobUZYD",
  "key22": "3mSzy3hmjei65ZhaXU8v3nrLZxz1HRNSUxXLbxGVqTDn5TX1N1TMZkkB1UBbaep7xVYSUBbGJ4GGeQNUa52YnYzj",
  "key23": "2qw1HfyqpyoKvSs1HSW8ck2U4Rx7wbHgk8dyGDdTnuqJmoVQTJC9HFfH3L9w2va6RBCcQzPyqLHRF4MdB4YVhkFp",
  "key24": "AhKSKkgk1HChJvWy7WMa7y9FiGPbJNSabdhMHp65gspapK8MKewPeQBzdpV2zY5W7EuoFpmRhEryY7GLReJETww",
  "key25": "3CbhS3dtM78cKVMxA9Y1kTtfheakawLrchxVNKX7Y2RmaqFHDTGVDSoRk1kqMTcpDKYTHcLXMZbDYftnxGYsrsvk",
  "key26": "2nag6sUi2MmqtZf1yALiorKXCHjsN5wGC6BZ5aBQNch7TUAD1y7eHPa5QCaP2fcnBVhXEZDZ33Ahq1Rk6rbRfbKm",
  "key27": "2gcXWpxnRtAbcVTQBRs28YoeGheUJcZjA29amLd6KFqkV7ZDuTQom4G8L9AZr4vz3NGJHnZp4veWjVTweUKwRz6U",
  "key28": "2YiGt6xjkkCGTiRjJhz5DhBvYp5XGWH1xH76B8mVVCfrXBaXaTxzwL8cE1CvDuQLNeEHKE6RSayVHDqPHTjii3BK",
  "key29": "U2yzSdHxawDiNTXgyoP5MdhJU4dNhUiYoJDxaPYn5bysRgWiDtQwqYXaj9ahGGsaBEKWXvkJrFdkkGysXVweCdz",
  "key30": "2dwJBmJkewixU3VBdwgRUHcdnRCW852JjBuZTC6orWUBGLat3oBJJMF6Z7cB3xB1tMa4P8DE5559hD9b9nMiFLUS",
  "key31": "Ww6cAQTBCactRwiTcCWupkaYZS9JWRMP9doVrXAqu8huSdzsvAyPV15hhy4jSCo8STobc8k56Hp6mfVH1dfDa85",
  "key32": "XATdZcSgE1ctcyPRanvr4eA4BzSEvcmWszQZvJABmBan16HVck9sGEwjR3R3THvKRNPTAFvNrLj4ewyveQb5Pbd",
  "key33": "5mt2g3iXatGeZ2SCUHqgwGvEERKNPh76yd7UFHzE57ncbM53e2CDMZBkw1HzugGz1GnPuyBdjjwA15C8WkNKsajZ",
  "key34": "2VSn9VDRbs2mvi7cJKo367HWrNfRmcvM9pqsF6SwvBv4scf4ZCN1N41Bqjn2akhgw26LeNetuv7cNAu8gPNxm6P1",
  "key35": "2i7MYGxostJhUU7ex9s9m92U1yr41rtUQYixp5YbWeXHHEQzgnRww7GFNLpt2wCv3h49QK4zYndVS5EyeS47D6sN",
  "key36": "4d38XmNjN3j7b2XgsSM1iRAjAJMtXZCQ2R9yjCGJUoR6rKHeVs7jAz3xEyDdVmDmJRqFT7DLxUVjiNqtnACEkK1f",
  "key37": "5jA4t8n1GidLduWhvW6EUspcgvWoJqVkRU4Cd62yvA6jiJruZtQzW8h3FakRb6Ys35KXnNcYTXaW5R85f1VjT6np",
  "key38": "3Wjkm2hsvhjiaFWYNEMuhDUrs7WEbq88CxTf62yE4WsCqpsaABq4bSg9T9Y4vopF7qF8aZnS9U18hg9oJvFQrWdA",
  "key39": "4ZfrSdggALNuqVPn2NDDDfAd1aC5SJjvxUJ22ChPej6gjKEqYum7qUYLdt6UXAhUYvCYXwcvCdDiSYqWHHFdLtpF",
  "key40": "5Q9ZkBZs5faGPBFsvruBpngDz95JGKEjTT9cyEQdycrhT9KFarZSFuqoroSQ2yGUkvuCukAav1gvLP4GYycv2nPo",
  "key41": "4bjPELi3dJgjpaMhhMsv194fidWxU9fTnn1AK6vCXE6akF3MyXbbokBhhAUD1CFHYsX6GRTUuTUM6QgbtQnzZmPm"
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
