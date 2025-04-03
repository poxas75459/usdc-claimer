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
    "5GZqFh1b3epZmraEeAh5oXxs5B5xZEV1SoLQ5oeGM6cwFG5ht9q7dBohgqw62fNMtDniYtZicVnEuMW78n8whDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MA8VYLm6VCUMrjwj3itbDiwoWYW7ccHWwYSs2M38PcAhYUWdNBjgpJ7BqCK1JQoBnNK1kKSvP7X1u9DrFZaaGeC",
  "key1": "5kdkCtB8zHpjTTpxv63uWa7zBSyLboPfb2K5PvmnuuuHtvRdvULrZiy5tiBtKyhdsvF8vNYZcxEVdHRu7EXvMzEw",
  "key2": "4irE7TMSe3RqAWFKzXHVcuYTpH2BdSe2bWAjpzNc7mVVBUsfjRTZEBuYhe76pJshZbN6bEVsW1ZYro5HB6NV3BJU",
  "key3": "2xC17D5NxxrVhwjNCbTs6uvtEvVU5YWuhPdnehQwd4Gvxepf6u5tRwPr8VBXMwn3eC4UqvgzdsjGdZd9jTd7gy1M",
  "key4": "479ge5tQaWFp9Q8oyBxWoqGab5ewAhXBFs589Zvrp8gm1oRYsNEi237k6JBkjX7j4orEFYz9p4TUEk8TBFVogHxn",
  "key5": "42iNrCLkWQeaWueePGwGWMSA6KzJnTHpT3xnbNegU5RQSDzLQFTA9WwZ7UpMR857cZNUfpRMCKp252kr6NeAjYo7",
  "key6": "4q6jEyoLxYPsFMacSnQ7hdDLWdqn8hxmfhtuEpU1amMFH1nSrsb5LyqtFAKvqf6nmaYnzv5hjoW9mtwHQkNnFef1",
  "key7": "3CwL6LGpNbmUXY3WfGsFCeWDwYrftb4Ys9FCe1gKVTgxN4C2t1EZu7Ckb4PAE3mPmgJ7TnLfxD8riRy2W8WvEory",
  "key8": "3DMA3FDEkWoWcqkStKoYpjAZAaRWYq1zxpBU1VGL91XMu5HPV5TXaoPe1G7avodGxYip23tCPJeNXTS6xFttSuog",
  "key9": "5yRfJvpC6cZC6PDU27HrJfTVWt8X1kHVVJ4FwhyS8s8xty2rRWzuHyUkt461LPNw8WNQdw4HtJY67Cf5iDmWmX2J",
  "key10": "2uTWyGk7ZfeDvf5yyVQ2s3M5DrL4ALTxCfyxMLycBXEUZEqCAuFbRwxWeHM1sTvgmWFCvPKSvRR9RApxPnDr61gb",
  "key11": "4vM6z5YzCyA96MKcNWNT4owXQKbZC1diEgubthpbQPCzJVeHWqejRCRYxCTkf8Rq9ob4e4WkpTnWZ7Sz2uQhmwh5",
  "key12": "4qTvLspeMvBfdBbNMLhCcdj3kEZeTKhQ4DxJr2Nuvpmt1JRj8iyzFrESj39wSjSVauyMk4xRtsiUSnx3D6qFe9xh",
  "key13": "63WbBwMVSkAxGaPTo6S4HMZHjUG8Vavw5E4NAcuSJtFMuKSzyX1vjXkP3Et8BNm1432wr7emfN5h7LrFR3eWRqUp",
  "key14": "6ZjhguWaLVcgH6hjLdk2B6u4XxGqPimbo6y8XbJLTstXMdf67rKh9M2HVJP91d3ymwkBf8LmP7wHQfsMBTAVr9P",
  "key15": "3HWv7x9XuzF8dUQMSQ61MhF4PBLwpyJ32SJ1HKNLzPXTprxMfceKw19E1X6wpnJ7vb4vcNxwWG8zz1UV4wgS68jY",
  "key16": "p8n7zD6Y9SnNY7wqztRRHJ8xDcVz7DTNhcJZdyo3kTUcYWHfgVErZuUHgz2oxVUgez9myuAcGKZeig68P5wcufg",
  "key17": "3uLX8FzXCBxnowcpgUoP6ae5Wj32sHCjXKDA1VCmcgaPc8ZPad483Cj5DnSuffigsFpX2519j4Qkn7miNSaEjf2X",
  "key18": "3vRMtGVXetC2LQWE2Ug4WziiG8hEH6FSYZ2rhXqSRDwUPbEPRiVTKY4aZPANn1PNNsLgMB2VZjxmV7xjwEyN4w9a",
  "key19": "5vGogpxMLMDCLgYfKCaKmagxYjbq8nVkyP1AcZnLEhL5mDBukmeoxRTYFkoeNkbtGmByGiyBasEWR1y4mzGFnDsj",
  "key20": "oLKRnDCb4LGusqg9753KTiv6W5HiJHSx6NQqHaYK44CvTMEFXJmkJZRnQV6w99smuYgWMkaTmSazimbmp4PXmAo",
  "key21": "3QBec3umRWDQijdHAR2VdrQbbHDXLJNJQ2a9aU3LDnYuEfxPbsXB62Xh87NoPhNw3fkbsFwmcgz11puMee8jMx4e",
  "key22": "65dWc7Mgk78kQcn4MGnu5JNXeLUas9dN3AaKm17gCRVG3JiicBCKfNVeBbfnSb7NufLPrcZcn4yS3ZqThgD1XUks",
  "key23": "syS5G14pjB24KwaiugRnseTaVSkNz9VqSRc9bsLNHkxMrYfJ83oLjUWbv9LDB7au8MTg7pGavJhfiTkFUuSVA21",
  "key24": "4MPfqmk6FAUURGRWqKMo7W2F7oLDChZstZ5yfRBpFv8PC5Z8XHGs76372n42SewqCmDg2YW9kRUhTkGKfR5qSFge",
  "key25": "42ybr73G6w1zcywcTmyCMYENgjknyFiTzKXjnjMsTospBW7z1Q1fPe8FKzRhkgdMVLEPyWzwt5tpfqauyotquhrn",
  "key26": "44wAK1i2ZnRnPxA3Wfmf244dcTR555bASaNSQBqpBnfkCJRbfArbLGT9efQ2KzQCBrjwuZT7sX7ZLGJsvRzdJBbx",
  "key27": "5hv5mr4fkChDHMoByR7LLTBB3cfZd7og8maP7MpGCwUQpDef4GNWS8UcxV7ATfHqCXKVUht3j7xsc4tGDzgvgEdt",
  "key28": "EEmkgKJ8rUtoZNWTHqhxKEe8SunEqppKBsuLBovFG1TNR19QxV1Ri8kCG7BpBnUKc7x2PDBA6zbQ6cUv8ArUnCp",
  "key29": "3Bdogh6iHuRxEXYNxwRqLfsHD9pNuTdetNakHZK1AnbXTuWwqPCdZc3MWvdHWZL5BXugLGVPzDvAcdug5peLDP6L",
  "key30": "dFVfrHJbR6cpkS9UZVEgiSMukPyffuCSgJTXHMyjKdGnLxWiX7VpHPVZGrqfLivpVpuce3YkAMC8DUqzYvqM5hs"
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
