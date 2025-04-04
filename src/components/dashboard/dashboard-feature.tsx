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
    "4rD6UNt4znzDsmmTNgnWHufVeKWnTtvVTyrtYShwGNuFhnFg7wsYsMu8LXmcA9a8d8JkBmsgfUJemAGcWy2sC7Zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HsMFo37BrknVDQ2drWe3mYxRt7vwWKtYYnmPDszYFgbE3USVqrR4k17YEADYb61CL9dre38MgZEVaa9dR3D1hyW",
  "key1": "27NWjeo4EsMEoVYBo2qPjvUCN2QshdUZkBjhwDRekv1MBSS2tnhtCYyfoez6CUVRL8S2Qdj7XLtoS2U3jsLJVSEg",
  "key2": "5i9ytvpmaDBZhqdzq1WB2SRKz8aZfSDjg2pHtt8xM6DmafRZCdky7reYLVGN7o6E2NcdWHN83GrcKDqRp7dan1AZ",
  "key3": "2R7AGyXMxKPNzoyBXTXxguMXxqyW33zQctrrJ7mMytRUvwxL1QbQUUVp8yd3soP2hSnNL82vGzAGL8rTC2MbpwQ4",
  "key4": "3iD9jZ3cgfpcVsYDHgAK4VL6zkPYsc2mKFuUGGTZgghPT9g6cFv9CqTb1WfbWrNTswZ7gmL1m7twMm5418CHUZVj",
  "key5": "4MEEED7USxzN8ZaiUtUzP7uoeGGa8a8rkXfEFsshCb3n1vhaERnzomJtRaHnMY3Bs12UP1RtCivJKU3qp2FKZu85",
  "key6": "eSJ3qdJnLareivX131JbEVWCQnMupcUYeDyrj7jaFtbMJp9K84WT44D6wiBhSWxpvkLVAmUSBtYFh7icJkLjWEr",
  "key7": "f1VJUvJXZikPM8s1zC2pLAyXtFQtCe2Z2YFwzq1ppZDN23rJr9RSMdRS6e8iek2tfHKkk2KuYzNn6yreDjaKwaK",
  "key8": "4k6G9pmHmwNLb7SYJZaVHWpsZvJUS3TiZpQoxdC1tuvg4yzV21xo1pvwTxyhzd7wd7qr8n9XDuKPtBadkSxXNsyA",
  "key9": "2xaQmCg1DepY5Jv16hkfQ6Q4HtXspM2jTU1bjvJ1kc9STQDuP5NK8CKiULih4okWB41Aux6nCCrAWnzzPTgh1Sgs",
  "key10": "3SPJewQRFXypqnXuhzd9X6kBWizsXHkSLVi4s62gTkRUp7gkohUzAozSg1sMDPZEFMaP2ouBEwfw7zgHaHJHW1X4",
  "key11": "55yyAfguNfw2K8hwNPyArfcoj1rZNpUUEipERdBDGQGKmgk8HvNjebp74ft2Nyz1128EiUh4qj6P7Dsd72duQHVA",
  "key12": "6Dj9gJ9iCneRxAA6NNkap52iYqTbDLY4CjMFjAuz2vQibp4MHXBFwZfvfwjJ8yfZMaqgkLw2i7Gok5HwVGWPjKY",
  "key13": "4xNQEugygsZ7jiAVtLhMrVhDWiuWdNkA3nSkG4mKERZkvNwnYvgFAvb52nbxxobJUagviSeGUMSQKG93YQTsBU8S",
  "key14": "2HUauyXBzdSny12DyNGEh3KhJHkYTYC7xfD3fLaxU2tpyj3wh8QAsTDfroxD8PtC9gMy9GAu2pimg1Qb9CSgwSqX",
  "key15": "5FzPiiw94jVPx5XmWdgRqb28ATGCQ93veLr1CmX56D5njJu3Z7jSh7L19VLTiwn4rmYYgtg7N6eEWzfPGc259Vmy",
  "key16": "5rMbFxMzvHg9LFS6ntWB7BRzX96GvTbaGAfncLpkX7dYosqkKy3qq7urwH8ctWk6P3ds7xJeryVGLGWp3iLGfdSP",
  "key17": "37mzDbNX7PqRB4LMMDHuYLapducE2uX6tX8hC2sCf1LMENTDvxCbHY8VfhjKwziPQoXUg4cjWmtot3Ai4fUFD2ww",
  "key18": "4PtNQrZwjbWdRSm7jAkzzZFy5UFhkhXc8kR3M7734wu7LfDjm2z3coTWN6kHhLKPCFpqnpsoJyeVzqQeo2RXtJab",
  "key19": "4JXwqQdTKnfvHnyyHq7rfJFULABM9hPh15fRN2EH35DJ684NTePB2g9axAfHynsiuuBsh2HNYo3swRAaf4etUbqg",
  "key20": "5Dvspr9BfWSVD1tntxWMgE1k9dxGWuKnX6jekywk61HrWJerMYMxcQB7mBVg5X3hQZHw1s3bAcjmumgb5Au4faAt",
  "key21": "5KZGi3G7BN6AnUS3N68VfUKix39pXHQGaDkcos23hGXbvdaCmAdYi2rPJBXApw6e3NsLFGxoCFXjTijPMJUWtTSf",
  "key22": "58LN8PoStBNFyi7svsAisg3hCGmf6puw8SDoNjagSwVphk88T57zzahgihvrcutzaNFj9Qrp5knyZdxgZSUhbJiC",
  "key23": "3xb1Ru4HdmAV7vzV2DmmAjrLcy9Q6oLjby6KPtNBg6DoQY8nPRW6qCz9YcZwBG9wgNrsmmHRR8FiHptUHYQjfjJH",
  "key24": "HP39X3JyzS8F4HgkSs8a2F5EKKZDaUkCQYwbhkPF5GSr6xn6bAsXbiKjhHxmXwtToKaqCu1Qefb9Vm1Rab1fdyC",
  "key25": "4eDDu6yDvN2Mwtficd5pE127KKLpYNpL5xdorBKCp5gAfQGZKtXKoc16gWUW4tkJBJFBdHt3rqDquT2wf17aRsmD",
  "key26": "51puEYf5Ud8oLsBSK6uWRnAq2zEadbq8PYXB7NkDp5sEos1XQ7xXhGmoy3RsfTVA6vNQYH5WjNjcTSeRdvbjSzoU",
  "key27": "3bmWGtttvS8EiAGxLaxxX2x5pkywUMS64u75L4ahKSXYJSTvFva3BYMcWEFZk57CLWdbbyT3BwvcKubMTu3s9S96",
  "key28": "3NSSENAFSAC5eEXULi5Qsk8EhknhBbfwh2UNoiZZnNnJTRQmmcZPrm6jw7QF5N8Krvcnq6pZ9E1TJiSZBsGbS3wu",
  "key29": "4YbNorL338Ld6ScbxpEnt3Qh5cuziFzBNzGRBQVu6MhZqH6KkCZrYW1nh2LvbLmpR59RXnSwkS5Crr2sUJ9e8b7z",
  "key30": "4Rnw31Fv6NRVKEk7NxRWjNqYcHH7upepLn7nsQwvXihCouLAjgwxQ1WNrCTVsHEYQJBwqrHW43tPx7SC13HbmsAq",
  "key31": "5kmaN5RmwYtdZEQzkSL56DHqSgxz66qkNRGohxUeSbDm1XD7ACLgDxNX3WRvpqLV1cvnatmQVuRSd5jqBJQa7JYx",
  "key32": "29ruSpvHzryJS1TsH1UVd9SmoQiS8UaBukip7i9HNG1Rb3YkXKzjxCaKMX3q3BvprNS1Y6s7BcnPyTNiaqTVNzum",
  "key33": "4ooAhTY8iKR2ViowoWAasLNV2W3k9WvZhkS45bawCQT1h21DEu7cjfqyEj9ypz1x4iwoTwExy6zpsud3UsmtQaVc",
  "key34": "2XSyPXUjH3sG87nhDdh2YpKK2SS59xUrAJuhtTr6Nnwknwudos73Rv7wenjmRGb7ypyAHHXDnWER1negdSA2M6yN",
  "key35": "4jgg9sCo8mK6D894ipTzmCVkw9LhfBw2e7bwK9q3ftMLt3bsTShgYkHfQNRA525pcDteqTDAt9DgwN4RqouMw5P",
  "key36": "2pVeDQ11ZgicqrDNoFNEgNX2qNHLYx6qmTDTBhUY83yCRpFxPh2zkyEePsTRttCcvXUG6RnMNfBdGANrn28TxEw9",
  "key37": "2kUtNQ64MtC84UEbDSx5tuGLwPLnowCeszvyy47kLz5mX8S5TzEzHQTG7cjsavjrxWGV2ZDCx6bpEufMgKdVbBaC",
  "key38": "3bUy331LfZxBPsakPkvC32pt3uHYN79fpbwUGeSByv1kbm9LxWswTo1jE16NXJSMU1QZa5m6FmuSWR6X3vAnvHbV",
  "key39": "3LYDGeG6p3WXMPpvGbEoxEz49dADWBEfro1r7Cdi9A41PZ7RRgMwrWXZ62avqqXV4dE6X9pYax5BCNNa1NRM4LD3",
  "key40": "2RHY6f6ZtsoEyoYjScWLTxGwvLeiicWuuP8aCRpdc5VofLu9RqtZZCvkHFzuksrWKjbCYh6ZEzN7exayi358WkDx",
  "key41": "5ZTNQCmtuucrnwMNXFnBYKJwT24FpLz3XgXpQ9UENbUhu9n6q2voRWAnDaXFLXx1913JwKRhCy2c8YVtjNT4uERj",
  "key42": "4YHmfpLkb7927ruYgyQmUELekMoSkT8sByBXTZSJAeTsTX6ZWm2E6R9duSYezyZNS2gc4UH8f7DxYv2Xa38or3iW",
  "key43": "59Q8Dqx99fssmtzN1pgA4kHpqzQJLLsEaMrV46EkrxZ5boBgD4aAXnrcMvW7oLGSNzCuBep4vzwUMDQ7ScDDfEvc"
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
