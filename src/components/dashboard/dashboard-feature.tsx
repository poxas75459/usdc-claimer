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
    "33KYtH3toqHEb3WVzAvzuzExTN8hfnp63wjNNfWk22MqcvGSt7VTDBNL9Wx2bPwdifqVCfH3oeUZBbKPsxT66Z6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pw286UtpzPFGRSJyCsYPcRUgYLJQHDbH2pSpFoCu3RTsvBCsDK9chUf83XNhzMgHAX9zmJ2ZrNS8w5DFzW7p4Vq",
  "key1": "2xnt9dbstaWaTFBsAh7Bm5PfGy4U6XWR3tSE247nhPsD8hs6K1bU3Q8opxr3SKQk2mzcNYxQGPWVUKw7WmNthA5f",
  "key2": "2KHgwVRXqaqeAFhuNkWbcbXimaUW4ns9nByDKJgzQxpKrio51n4QpmEe2dv93sBJSZqKj3zh6svNzEK3uKBxhki7",
  "key3": "4D3s9vDC55QMiFeezX86r72fKmCctRmywRhPESuPDc3PTfZ1rfcq8M8yqXQTREL6pdtVMxntJcaonfoNnYp5Vqmi",
  "key4": "4LguspjxkHmeYsG9bLYDd1gfwjzhg4k71AsprEXAP2vT1kWfJsm91T7buNioXSqVsfjTxgEPVLe8nb6bxjcHJepJ",
  "key5": "4TpNc2i1K6Y3REYier4DPWpQRBnqRLqGXY7jMe2vnEC4RH2Jt2BrpVPi3Hj82skYUsdHyu2yFDMDvp1z8vdy9zRC",
  "key6": "rBWDWXW3Bzsj8W4u2Rsh8PwTkX7BHyA7YQJVPQNF5aAV8MZreaEyiLStE43ztGHS9eHNTd4EszYd7ZhZTbvXakx",
  "key7": "56x2sS3D1LG1YrYPJ42v6Txa2yoKGay4ik2U5yM911b4gxrL63pMbQWipHhZTURGr4Hz8XGxrLUXddcjyKv2eS3Z",
  "key8": "2jAUzGR735orw2Mi8H4vW2BMdqvqFXWPZpRewZzg3WQzWgDDiFBiGud7utmoAZRPfiECHZaHTzvY2Qqz1979wDGV",
  "key9": "3R4vv7tD6gFzrAF2weUfm8bgtTTSWwbet7yBqAL8DU2JNfTzvnRLuzPg2XyCfrzTtXHw6bw4cRmxB9nLHXBnR9aN",
  "key10": "5WBEZFCSbAkwLjzgYzgwYkFJdtyAVQ1Ynj1FNhFMpdbD1Nc5wfdo6Ca9biTRo4od9pEJk5kiE8bEVKkMfjcTRWYo",
  "key11": "2GAHTRR3f5c8FzHif5bptSGyb2Py4AwmBm8KdHarDz6gAjkDCfzMXYbfJecaGR6vcGWjuKF4chLwYRz2f13NQJ9j",
  "key12": "2HvXZqo6Yps6ygSn2iZoBE12gXNgKMUgbjAUZPVTY88T4MW8pH261tjqNSBoMtVLbuqgTuKoFgCoG8Ltd8ZvQJTe",
  "key13": "3C2CEJRjsPN3bQ9BYKZMgPyDtW3b6x3KYnxmbEkKwqSxEngy6K92VWSZ76LZuiJ5CZSfLUfWbN7B6HQw4KBapRvn",
  "key14": "5k44TT68BBo9dUwVDwE8iUdUWffESo4zLNLBwSbCDzKTjHJc2EiByfpE3ccr5of6k4vGtruTcvuEE6pD2ur7mkCM",
  "key15": "3nv8YUwukqZV5rWnYA9VX9L66uBZh3KweHUekNHERsfvVLaPP72JJcvDPuebDsiUM7NbjWHfKncEXF3pRbHHLJ1r",
  "key16": "3U6iuR5MokgKDomfUVLFpKTmKkte7NpNTx8Y6bzCRXLUonRJzu8QUS8eh1EoLTNP2Aaiq3osCeJSps6yyaEN2A65",
  "key17": "2rwiNAic39jifx46hJoP7Xj8NsxNzhVAy5accPyUyB4xriYRpzSJEvh3PCjUmSuQhG4t54Ty1a7x5icyeqD3piJ2",
  "key18": "4gQSousnPe5vwc6VDp5KvbnB5M6nJ2q1DC6WsgmPRSbRBPsT9FznHEHpaGe7DoBoLSjorR6w5Taz4rKt1yvqPoJ5",
  "key19": "5W5tQy6ajkmMcpcYs8Mj38reHyk6EfKsZ1uZka5jKjUQD1vvCeRXEcoissDJfbHYw7Dx3YX4nxu6zJehuGwG7fVo",
  "key20": "3mVfukCbGR829QyJTBBUqTc5aActDoSNLgzVbQzGyogDSZ91zfWJmT5urgPcioU24WK7JFMaQimLcQD6Cpp3sHTA",
  "key21": "4nCyRYujytMB8hLhDAgromgChcN9LS2dMS53vRZEQrobU4DBYgu2RdWu1ijDgQiARCFzfGHZKE2rEKEeDFWg5xgx",
  "key22": "41BPoLuTkps3n8XyAMLXMTYqwycZzmpwSn7gLfyKPVqyjV3HLC4snQW6ZQ8miSLGndgD3DTBP5KD5d41y2kgqgTw",
  "key23": "3AqrZ95a3qKYTp3vgABaEX8RhTvAGRxBDWyXxsya4DFgY2dj6MPyvdgPwY2E3tKrKFEuUP9Hxf4nCvBbtfH4qakt",
  "key24": "4fPTrkBmquCY6KnXWr4tp8aySeDPLygGFsuVe3xTt8j1feomoCjP3DUqmEcvcjrEMuLoxGVW3e9wfpzzb2GgMyJY",
  "key25": "4uCvzGN8M6k48k6uKLFTFomqs1xNd2HSPdZbNtHvtHDUnmRrNxBKSFJ6zGrxg49S7JtuRTnmvK3w7yjf2GMaZSMz",
  "key26": "3v2iJDvfGicuiSP31p7UAHUhYgh5vrEF492UNyZxXE66jpmUG6z48geETxCJWz3MNWmms39VNAJhLPzmUiSCEd5k",
  "key27": "3Epfc3JMpptitDPnLNswkxw1yEbowiDMU3JHyKLmqtevGBjaXqafYNoK5MeR6LQGhZaQaSJ4g74SgkBB4rV4C3Ua",
  "key28": "7dskoaFt2rCBPrgTcvNdbXzzWeyzeEidzBq6rLtxEAQyABfocx82vCwKZvUniK5JqbgHXKTyBQT9NivxY3MYASE"
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
