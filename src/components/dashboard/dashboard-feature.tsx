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
    "2rB2sDdhR5NAFcEbuwHnkmMFCWMGKhViaezSDTA4YWC2hv1Fky5U6fH1wKUhUa2K3idQ5g2RMFoyXLhB9JqtaAYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x74aEMzhMpUuLkTeqjSMuBRor5vsvLKhRNbBukmpoWV8g6vXGS5cijjhjtZopPFynrZbrAQEaVej77f5E9V1SXa",
  "key1": "4EyaeWHppPeExgN15Ev7YvgCBaZk1UVrZYViATaKsfzkyZBkC8inYhcmybgQjsNvvsLWtbnMsYSUp4j5DvoXjbW8",
  "key2": "2thJLFxLJ1cHRWX5i99osmsgUyfaLwEGDzdSkv1oFk1o1ERBUjbk73XuZ5DHrDmXwGeZ9y3pneoVvxuRJmuN6V4r",
  "key3": "2XiasAa7SmaWBKjrX3GGL1H5SoGRx5xHeFR7zyxyBpT9Rs13VHdGjDWcgkqgzqwTTnPPrW13fQkX3rQD6DyNYS3",
  "key4": "4g7xVqnwmvrTsECnNRGnX8N7ZYncTGLEKtRpasonnWNab3RBZ2k8DkjtaRqGQLsXzX2rp3qi9Bdp3Kt9LrYvpS3w",
  "key5": "5XLEAYKAJS5oqfTo75ckb25VZ21sLzyUg4zfE8t86ksQD9vUxSUJrCCywDk8dTcrvJmPLY5JZrYtpkmbaqwyNcVC",
  "key6": "5TgZBKsvU9fQZhuTjCNx5XbXsNoJF1terYGKsoZ8xeBTtSUBay4ep8sSGtUZ1ukoGPnssq9ptKeRMR7s5Y9iGwCV",
  "key7": "4UEq8mviTusmKGf876LxcddyfAqsrwPjYRE5ZYjpixtnuXwkFwLHdRKM6QmqCuZ7GhxGUc4TdKkseMYsHuH5Dh2q",
  "key8": "3Ageu5DsRfnzzzg5X93ZT8E7GHST3RLPgRyMsFaXYzZrgDs51KJzmyVxgvrzxLhSq8xazDWtpiPdfpVB3LwoGLnQ",
  "key9": "MAoKFPTfTXXisTxm1L9Yj6EfJPvBt7Maepnx6bCB78FcXNViXi8tsHThLgqypmM9wyVMFyQFKEcNtuidpLXKxzu",
  "key10": "4VfQV2ZLz8TAbPpk6DwWfd5Dr465HNFViUVv6s8ca7ALb3DaDg5M7P1jCGPawzPDJ4NxzN2BA8WARUqJAM9ow3if",
  "key11": "51WnqrwQaLvq2h3rwRQgQPWi5cL1k4CxFpuHTncb4apnz3bUfKam2D17KqgxxY1G54H3fiwW75kHreGDNs2H8Fd3",
  "key12": "9EKMRbjjLMTjRuBVH138MyKmE2xizV9cpiPZqFLeisgP48FDBx5kECE3sTkNT6Pt3JtKRgZbcoXaC77KBcDWx3L",
  "key13": "4zmdBSADgoBGMNCcX33sFk6H1sBymAn7ocjw78DUZxkbcv2b2zivAmTERWrR2ure6vVkzpKzqnqbuCmk5TT75Fc5",
  "key14": "5Yiyb4zC1rTu7XDtrdSAmVYDA1WRhFD8MwG4htDLtFR3KG3khTeAtgF712RzLHd8v7fb3sy4HdjeZfTMBgxVczHT",
  "key15": "5hLpZ4EyjyAE2teqyMQie4pP3zWUJ6pkbaAnMWmDeRyJ55b5JYVqdcU27aUMqVyCmmH6BgXPjxtYtgsvqggJS5Le",
  "key16": "2vjSdzqgNnQyHyext9Xx7kbRc8rnF1x7mgRV8doQKr6UrakHdyhseB11QQTF695sN8r7z2GVJb38YGCR5jA7TsAg",
  "key17": "5AmvsjDg6ATbg7EttuqcksQwgfTJoHNFB8Mvd4BFzyyixiDGsP1AuSCafyJCNG1xGy2nUC9HAk1w2nKjU58axWun",
  "key18": "3jY83Vosenv7GagJD2fCqpD2u7doMn4iUa9t8Z9tUHT82vUiWko8qAbf9HFx2kX8beHjtSr8EtRuCXkw29mwV7m1",
  "key19": "4uXPeM79qWsctKVmUZKgBU2GNdfTKCouDQ9ccoyN4S6tbqTF7q2BAEHzk1kXmVm3pckUvn64DCqPp3nFBSCemGPS",
  "key20": "v4JqS3unYoV3JxXttodMpP3BBi5HazvxgevB6dM67grJT6WFXxsUKXbYZuuaA1EXzEGpyy1QrQD64oBbjReMdBn",
  "key21": "28FsjPtPfvfns1Xh16eyv4bjsEgAPyFZgz3VWot33r7FwbncTybCydgKZbDo89Goyq1cLsLENrdMxrHRhpsh1q5A",
  "key22": "5aR1qLsnemE8gr6WpHrgUDxWTVCvKdGfsX7NvVbfby4KjqGxw97k86f1vDkHcaQ2n4qmfxb6w4wqU14pf9YJasv7",
  "key23": "4NA5vW2Xt9V9zNMThKVoQNerB5v4qhk9CjpmxKT2LRqGuGs3BpksUVdhXFBVZVU8dX9iNTno3zGGNPai6iR3azPg",
  "key24": "3CuiAM3bewhxMnHPixR9Q5CDiAaZifgTwneQC6L65dbZ8pdHnfh7EgN1swdbckKtocUR2RcnvzxXwF9iuxFRJ5b6",
  "key25": "51Q1Uq8sN5BGMTMUtkXrbyEPFFvZFw8tmfGV65ZNJnPqJwzKtt7N6V1aLS8p2pbNJ57qu8CsWWB4z2nuhjyFDqNp",
  "key26": "4H2nzLozNwyiPSAivhktAcPj5LHCK5fMtbamvH54qra98fZ5RHbaAG8KqE1sYjHa88XDHXVmiUYCc92eJ7xwCwXU"
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
