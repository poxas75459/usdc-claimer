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
    "4Ww2i4JJBM1kQFSMnU3RDsxPAiuq4z3u7pxLyHSGT29RREWzmi72jf25WziTcgTX6QnJ3koMtLUdSPNDVdDAeH6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tPE389CzrANCfkYHfw4F3UqRoog3bPkDhtkhFYMKjcduaD36YtEo8tbmuNM11yBEesr8vv1K8wxYCwYKZgxVU3c",
  "key1": "5fBj1zi35H9tzgqyZGYbf4X1bzSSWu9NWuapNBKZ5xPL3cRhGSHb6YkQuVijTqadMWZGSUhdRNooxnJzKZzGmpYQ",
  "key2": "7BQjsFRj4uUZV1dgUXqmNpHdbpBbp58HL2gGdoQxK1WEz2GGAz5b8tTGu4SSeuZw16LSViujCXAh8uSfFkmuDdS",
  "key3": "2UzVQRkfHtD9yzeXXjGW9CM4gnPpTswUNMPjKMMPALNEhvnogTxzaV8pWEEkTunot3KVYBJF57wMVJzmsHpHSkn1",
  "key4": "3dYjZ9HjgWePgBFNb4DNSxK48V991RFHeRG6d1qmiLaHGcpSpEM7TGWv5WcN4J2zxKruv99KTdAjVcMxnpXg5uxg",
  "key5": "oSj96cm3M9U1own8Hvh7zG13QhMNWQ8mBdyE7b9efj89hSopuQns47tpnAmqq7wxdzwRApj8NmQ6mxqrHHoYWFE",
  "key6": "44oVr5542azQ7zMGTksjuuDv315XSXzTPVSVbW2CGYSQ5Cg79CuYQKkG6B7GXiAguagsqvCB3R5r2VWTrXPtho7t",
  "key7": "38nWMuuzfaTigEF2jMT8ZddcTrM1nfuyvPouLQQzsXfRXKw5vSQLH7YKem73CCTBe9FE9x3dfwBoPCcoXcCv3xy9",
  "key8": "5pyRyx39TkTwJEbFFbu2cUFFNms5PcdcM5MsRX2GgYk4BVM8fiU3SCuvCrZikFL5gWSgi5zJTsZrnu7mn3ZJzcbv",
  "key9": "oZdzwYcKz4W1Q5F31Y4UEVcfJxJTusLch93S4s9HUYsxiTvK7jGc5LqJsBPoG1rTZ6CuhsjqmP46JhqqRLezNzK",
  "key10": "t67ungwkdTothFVVbTr8uswPeFpRvzJygiBtHVKHhv2hf6KBv1bq8aTYDiB1LH8BuTQtkPJk3fpoDC72qH6axBQ",
  "key11": "5fCpS3xmNDrrRsU82igqqHZz2iyeAz8SR233buxFKT4Tynw1QzWm2LXE8TrNcv5BM5KpQbhXXVpvrHEYqLmQt1Lj",
  "key12": "GUQbGzLZn2FhEytAM91byJ8qaqB8mYYiEREDtv5Lv8AcDPW4Z8aZDacbk68bT6mvsbs5AEqGqkxLULY3iS6BK65",
  "key13": "2QewDH57j9toeVu37t2sT6gfywZVwsuYmBhvSx4eEWXsc49BnRpxrzVghf9qVMUtgaCBi6PELj4WH6doDACRVbHY",
  "key14": "2gRR3pkwTsp9AmU8xbsboctaaqJfHj6yh6vbusEFUYcne5D9f3FjD8iNzxaAwtYbZEbDrTkijKvRAEBAgLRaYHCV",
  "key15": "48QgRyg4dZZ847HFyd24gZJVoyYXdiUTiCU5h5aUfCrMfPZArwxwEbE3Fk6EN3dXf7GvPn8ozMeVyLA74Tky7cU1",
  "key16": "2YxDUcigpAxhukvCJSSK5BayCDgUiCRhqtZphk4L5CJ7DvMFUwwr28HaVRrDbFT6KW7xGayGgRh3Lk9thcZiUNSY",
  "key17": "44h2ABGhFSDpMDozNxLEaBDHnyqNvNb6tQ7bStszrdK1em1oEb1Sn9YAPe1nh5wqEL5Xy8sAXLBTdm5NyhRZq1Ke",
  "key18": "5nY3oX3yBLYSQu4tbrf4XXVZzRsUBf5fp4qAv9VVi87yfPDEtx6pySLYnupNEs2WpD1q96W5zYgQxxEc2Dj6NG5L",
  "key19": "3ozZcj2SmURfjw9LLJk5tqZWecX8ZNMEPU4ARxgp4BkFamquE2TEmbgRURDxZWvTBm4FFhJ79GRjE49nQMWyL3Ur",
  "key20": "5uYH3rfnaY1uy3CCjNH1KTmm6W7MHtAANmvyG11D3EKtFZgpR9HxvGrrMd2D8UGPngZcahb7p5UuzQmjpAr8JfpP",
  "key21": "2Ph2HgPAvMZ34PMGFgX9vnGN1kU7aZMbXoat17KAZJznimDNJhvsXVpGfyfKijwP3MjRBKjCaqXbi2JQnvzBFabv",
  "key22": "2SVfyyJRCnRFmMx4hoDF6m12nTUHsS1SS43evWowNMvUeJ3DM66naRQmTCJj2bgwamj7Rq7o85ELrBdVgnfY2fJR",
  "key23": "5Fcxk94oQzoMhrnSexDsERhiLHodNA1JVhyZgVSYgB6Vn6YuDAYeLsrwZzYJ6mY9WGp7CMCNEbaBdKiEqXaU7g8s",
  "key24": "3sKP21bj2jhZmPy8jUUb4gMPFoUXdMeEMTiPLtmQ8czQKoM9NNXHPjfn3VSi5AKPEAHwM1FueKgn9XixkLDaJd5M",
  "key25": "5hUFtztPWvgswYSxaEu2zf2ySdWYcrJfPvb1HSWZMqTHgRSYUJGPZ41GUS7rfU2Li6HrVpezzKq99kPAg1wZuwvR",
  "key26": "ZqAvnmsZLFsiv6GAWWhW9sQpshfizUpzhJYU9DJnTPGxpCmjPwinSoQiHNjUXmqVDZesTyXkBUfcbYPPYaB4NKh",
  "key27": "BYwxAvy69Nz47R9FSkg6CRxkH7NUiwxdFzauoY1pM2naRiqdxztTr34HpHS5srtWGm5Ru5eN2i5n1n2g2czsEMr",
  "key28": "4zujyKrjaCV47cmB1wuPHNEMXjzvNMNBfmiv6yCnYzSZ9ZbQR2rQoDpxpnn2X4vVUw3qH8pCCgNxuSqMcauPwSGH",
  "key29": "52Am75tsPZPWXLDRk5NVHQwmF51HmBbjM5914pxxkYuacYwRtFfKNCUcQ5sJzSdCcMqSGRzs9aurXmJssdgQwXGc",
  "key30": "3oB88bxsYGHPv5kEUDrX6cHajHCRCM7jE7L6D2UHF96vZVHm7gN61taMRU6xDx15bDGffiNLJNvEqPYLmD1evudJ",
  "key31": "4bFkMw3WPC6Cq9geKe6CDLnfTxnoHavM4yveuu3um6vz3dqf1HyJ6NBzGikB2EcH41ka5zPwmsdDTzy3nXyKUnte",
  "key32": "4B5N3yTZYohRxegZ8JLzf8L33TbDErbzZrKLqANTzZLEdaVJksjRdVM3LH9SidVXUNnMdxFtB4biHLtwntswEGef",
  "key33": "StkAn9JHaQuxs33NhZhSCDvbnkqkHszXJ76QkQ5snxMdm3MYc5cc9sVxoxvr2Mkn4wj44C8u5CQMMxYrkyxNX3p",
  "key34": "tezfVZkfa9rpodu3KBTcrxG6zHWAhW1zSh7C6xkZs1EnoqQ4txXEF4jPqPKdRZv8KWQrJmrECwpoKFWYRe4YFEF",
  "key35": "3DsD582VSWEVsLgNqhwQf38fTL5A5kFE8ym5Cf6fKYYHnuK5Fo65Bcr1ct8icJ5dfbpHqBv5jgdeVtLWz8bm6JFr",
  "key36": "5zKEMbCTSdeKFMZsDXr8LRmfhk2iFCSq329Dzvo2oXSnTw3sKF2w1sXxDJjMMY5qV7nrqMMvbnCPDEc4G6m2o9zL",
  "key37": "7RDkB1bM7kTfTq2ujN3NywTkaft2UUihMqAKUtfbcL4NaVhnHjoJzaS7svsdfcrKjsBxyXPArwXKbvBHqtj7xcu",
  "key38": "3Ax6f4u1uX227CGnSeqaRgrgoWETKHM2h39pAnBxsd31253JkdUD96G6uNFqa8v6PKLjq48H9w5zh34t6iCM5ibM",
  "key39": "2jpDtv5HWajyot2JfuJuVUhbGXqodMDc9FQ4YYa5Knp4nzpkgUBzBrkpFiHNDjY5hkkX92GMW1EvbnxiJ2p3ayN5",
  "key40": "5raU18EpnWPiVgiFkhXZ9iwnfeRGyGLXVodrY92t7GyVb24YLmfdJLeErxkVgoTfA8e7pGsucUB6EcM2euYibMcL"
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
