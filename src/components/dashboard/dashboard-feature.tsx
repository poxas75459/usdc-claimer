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
    "4q5q53z3i1xGmtmsysY3aq8UAoioZZjAxKLEAUtqWN4t1yKRTQ8RYQWrNZVgy8v6i1nbHsR5w1QPFpk6omQg7tFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hg93ppm3TFDKnX8dEpu1d7YPuTfRsfoaenii95u94U5ZT4hykCpZ4xGKnw2xQ2Mc3QPp47ahy7arLYuW671pugm",
  "key1": "DE1XaQXL93HeqKBGuMjTpnKcmZXXNeYF2CksWAS3jqLb3Yb1NFwuXUTLWP4FAAWz7V2sV14LeKS5zuCoXbiLA4g",
  "key2": "2WovRzKWfBdiBoctJ92g4Bk2eQz3TWcq7cVgAVVaWAKwb579WCRCFpwSSM5uxforu9Eo6R84Z17AqMSbpE8MYB3H",
  "key3": "3DXQo4xrysfhJFrsfNdb75kz87f5vDN3Vg1VJ7hF4oRV5fHqSk5QYiPrahXRE1ABRnqqAcejBLeHgRWHXa8QTWHr",
  "key4": "59prjNgbH6ucCuNh9TgFST8vPViZonxrfLRuXDbyjtK2YGZhf3zrc75LmJ3yBjVeP8n3j5e1uuL4uWTyGBxw5Gm8",
  "key5": "5sZKwCJd44fiXwGJgUnj9k4g7pZ6LJkRTdtQWY1sCjvMr6EKv7BZasJJRixjbQDcXe4q2SkRnC9D6WYsCWJfzvgn",
  "key6": "5cK5i8mNKdnWV3A56AxTpBBtsi39dNEfzbYBTscC6yb7ozypfXijevVYSvjnF7NRUk6w6vDvGmXmfBtWZ5sHMGb4",
  "key7": "XUHuwXoeWRbjHqxAud4tWdT8yDp6XprcJfNjqngXrQbXgXzL4GCVDpuSVvhWSAoxxkj28uFH15AooZrgsmSK45M",
  "key8": "56Rqrw1Ya2oFpoXbWowptk7WGqBk4471GLKyJSVgL4kwXxAmxcvhG6mQFfdfipSHKJqVgcRqvSKeSywk27gBgZTc",
  "key9": "2hEaa6F8SJx9QCrwBp5k8cCDmhd2usrBbxZz1XY9soSmwzzFvhVDB61oK11MzZwiiTdh5rq61pbTXdEprAE5RTv6",
  "key10": "4fW2vAkNgNhqfmwJkPgBjThgKqYfzzx6NRyqUCE2ywTqKR6rnXwYDanMwo2euffFZsC7vJkp7dWmkNEPMya3hTC4",
  "key11": "5Q6gacDB2cCVckurF95tbZTq8RGofAihfdmFA8DSet491dwqasq6dQvvuxd1YQGPt1bRSKA3NukW2m8h7DKcu2Dc",
  "key12": "3FCQwgdmyPi4zTEvkqe2e3Es1yZtpkuQPjbj2RWtCTPZKtoueCBfkmMtQztnECLSUQiyDibPkF3HJH6qFV9bqJPR",
  "key13": "CFYjPpoKkB24BJYVmF4Ke7oH2oyGX5FpdEYsguLzJuc75d6FMr5ghDqPTs6sCytxQaPgvL5cxHRnjKU4b8QRs2W",
  "key14": "4HL36EgSXy5AatvgAMVhKvRvopRDRQYgwWyLHWvnw3yo2a9VoL8eQVzkNdundMmBz52GJfUdbyEUdK9HJHkWLh7p",
  "key15": "2RL7ekJGNCsEVrUDFYikjQzMgc7VWQaJUjh81hzqtDwCCY9RQWpaDNidiyDSzbCBbEAebsXqkrXp4oEexLvxqtWA",
  "key16": "2rGzYyU2EWndyKZST4MX3h9MsBUuwasQo3zQ8vNnti1E8reYrnXAs2rP72qi9wUM3jsHkSqiCGeqB8rErWY8TkbV",
  "key17": "4ehfubqz5uN4VCYKMvSJtJZbbMeqjXCALB7BPAsUThrrfP8U5vkfVzKernRsC69rtT4FAbjc85TNhAVhffYm1C3R",
  "key18": "4NJFZMSdPWyAM2PdqeVuctCA4JVtUDiqTsRFUBMwtvf1kSPtwR927Wi4CPthpf9H5BJyxrQ9vYekvz3hFkpDq7B6",
  "key19": "5hZ4GDszS8NEvddEsKSWNjoAvvr3wtxWm4NnrZzKQT8KQ4dsqhThy9GC2Kepoq4ELHjZHwdrz8jHhBMBWEbkekzV",
  "key20": "TmdjuSQy5FNpGg3F6S6irSRWUyAibh1Q33MJbrFLLf8vCYC6v2zwdgpqKmXbjbJBmwG6v6y3ZCx8WzmRyag2oCd",
  "key21": "2Hz913pqpiHWMf5FrAaT6PGao98Tmi5JZRiZbFqPfA8xodc3Fr6US7bDnbkwWiHSmmwFU5VXjhnsjbrPkbTAjCe9",
  "key22": "3nM2oNYzPEKZzb2sUsgTAWozaqFWucBunPm3owPg6vTefvDpQFtHUG3Qnn6WaFjXCjXjrmoPojCTErgcwrUqhFN7",
  "key23": "3XSnPzvzKW8K1BnJ6kdi6Li8P4epGKHvoNCnKPAtwbHTdAbVuk54WU1mb361839BX9kJVV7cRkHjEUo7Gi6qUq65",
  "key24": "3gA6JhR2bs3ANuqXLAxnRgymMgLeX1AbJ7ykThgXSk1yKbGD2CmKYSNK9FgesA1UQiUumS6PRJVeXXhzamzGQKGU",
  "key25": "4QReL3hTpWkSBoFg83HSURStm2rLDYnGTEXonVYLYajgZCxSuhsDUURi9zQCXF3H7qKMRqf8q2HoFw59uoZ1kpTT",
  "key26": "2uux3a14DkZwugHTkzoWXT5txShnrcnEDPaUehttHijeS4jMptJSXCSvi3G7hZ8aAa2wstozb5BnyfvcC77McmYV",
  "key27": "dUec9cJ6sy25XUeoxUa7xeb9gLFiBu3iw6FcqJV21VsTfhXwxu1RHgjfHHL1UP9Kq458Ef4m1GtMEVhmWQUBRJv",
  "key28": "3B5E8tyiCeRy9p7jZHNAyTu1gr1WZVDW41fHvV2d9d5LmJ6HhDaiMPie31vKEGLpWNs71JaQi5Aut3hxNtDm3Gwp",
  "key29": "3ioURdDwQtGr7v6oE1p8xTtgkcPypyuwfgMLMcnJ3h9Zu14pWAMyzj3Pd2fSswy8JEzhS1ZFFkA7anvhQ6skeYnW",
  "key30": "2ffFZ19ogJ4DTecC5oDT9zHJSne7DGv7oq6LNs5PVWqR1HvohfxTPWZkSYdyQ7HtfahLFjm79dtyecJLYxFpDnTX",
  "key31": "4CWQ3KnSZmEjKaAMF1KmnmY8UEQgEfJYNnF5N5qdcC1hr9MKGZorUw3HWjKCe4Wq4VksEDd1HfdPMTRTQdzxx2iM",
  "key32": "35yDySoejicjrjszdygepwAV4BeSN924pjHk3fVrJLU3uh9FCm7UnBZ975pLuTx3JrVKoEvM2VZpX3vdXb99o3rC"
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
