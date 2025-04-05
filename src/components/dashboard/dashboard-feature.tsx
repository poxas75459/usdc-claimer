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
    "obJ7jg6LNvfsMDaAEeHRYqtHxYrcMiw3gSVE3ErSQZtxoy8g7oG283XJ62tgbzWuEDZbCbWAvTFrc9uGxT5GsR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r4yLZKqtp4Fo346QcxKgCSvYR9mUJYnKcrK2NEYm2iipR6SEYZci9nCeo2eMon5zm6WF2RGBm6QR91ogGcLv2ZD",
  "key1": "3ckWDCQkf3fqx1fiDi4hLT5HomWjsoQyqa4rjv1ncYHDVAC3eiTVd9h9ZYcGrTEErpyzsibM5YeiD23rssbqehCm",
  "key2": "64vtpjop3u9MzjFX9vJK6M6pEFPzmgGEVC8c5hTr46L9pAXK7mGyL16FbZJ6dYnaQvtLApEweYbg3MJvk3uMdcEH",
  "key3": "3LZcffcM62rEVkbdh185iNJ4cRaZPyT8Fbw8KmoPVjXqK4FtMxH1BhQhwmdtzB9h3sxMMZhR3Bk6TxtmRYtBZNwh",
  "key4": "3AiFVkYDLEAGLsSqR2cU4VrCAvviTX7wCY6XWNTFcmu6dQYCWShRdyF23NaNw1papBeA8yEGZ3SKYVKcswknGoMu",
  "key5": "2qecrVwH8cSp1JNi7AwFbNPD7faHD2XjZTLm98Fw6TunQfc9jTuy1WyQDwT2LpmHCXRjQLxHB6vrQbqM8FiipfjX",
  "key6": "4s6xupZDuSHBaRfoz2gc3D6yayi4eGtnc2xX5MjPs29c5hHTm7pBa5XaCnybqqN8tTcBF9Xb3UgKooLLbPqqeM5h",
  "key7": "2RDqmAxoPCSm533pRsRhL674bHeM9R7dZa5smS7LFtGAJMAbyLxAnscaoQwCmo8hyc2Kpkw1SCFsQa3QRLAmd8KD",
  "key8": "2vAR4EAhZBV8PamThq6WnJoEJn9TS17DFkNxsoE1FU4LmgN88SVJsMsJAQJWsQBuKcrzfCwVzjgoqj7UBwYcuJoq",
  "key9": "3Sv4BJLGo44PMywVGJzNwAuehNQkx293EBsUD7WXpGGkWfyjrDashhyN8njFhjMhC8nmd8owkbwZtpVNrjbScUtv",
  "key10": "2uHWNKXizxCmSPWaZB27cAdfWH6oAU8JGhSQUv5xQNUw7m7yXJPU36zt9hFeoLitF39ENUchHABpcehPrFA8e1xR",
  "key11": "2S96YBMMVcnaeot6RRPrXJYwKVLg7jWUqLbXSxrjZH2PybruzQ37onorEcvqtXo1SxH7z1B8PLLsq9xBN4u3781C",
  "key12": "4ufrDQ8XV6kmohYpS5HG8T3KXYzACwi717CVg8ULvWWuNUFFCzHemxuAWTcf4J8GHks5tENd1RrcjgGykycSDQS5",
  "key13": "2iTSQoKSBeyRwfu5f5uAeBq7cYtoUxitmTyJM7krjNUnEYeU24b23KaXArnj31ioX6UtjPfuxwfgny1FTeoPa2Ch",
  "key14": "4wgnRUC4msaUP243jmGQn4Q3uF5JXxGhtBrUsSYwpBEgTEqmPRtRZTxqwtAYVN4uLRYdke7hCfJi9TtVfeACgued",
  "key15": "Cn4K2PfDNeg37XdATk87TF2xAXYcqkHGyZwCV5KZ5MXTjC6UnvFcCwP95TQAcGrcUD9KT1kHDPNcL4oGxTh33sF",
  "key16": "zmrtLH679Ug6xxUEwLPiQwSBwHUr436cV3CsAm6kSBLyKw32GzVWuPzy3W8ABfS5cN8N62fmSayF2sCCFokjQxL",
  "key17": "4W2UhiqEqz6E9Da8zheBktsR8TeQPfYe9Sw7hQKUUizoDK8XmaBSTwTe1n5despXibZq1K8wFDKu7qVYMvXVjT4y",
  "key18": "4BWtidFhcbAmnGc54sHxfUVJDpY643C1DovL25LoUsNd4ZemeeSUJmGK4QzGsqGaqzsJZdHuEagZ2FgnjZVEJQJM",
  "key19": "4AZPFg1WMMY3xaBzqcRd45TphfuFZXAs6N7VwCV2xAMinWr8ijQ9PsUNwbjoyaaPMi4dtLRkr79FTXX34L24iFX1",
  "key20": "Ty2dpWDxJUdz8TfSWKPrF8NkUk3YjLBhve1iiVLqwm4TzjC34Tt9v2iftrfWo3Qj2CxvEFEiUR5uKW2rb4iDTsM",
  "key21": "phqBfuh285x2GFZajuk6gWA2XSBcDSYVE3rRXRuUa6dnhvqVhq38XbHownuk8X22fR53krX18kZAPo4cR5qd63Q",
  "key22": "4drXCHsJnH6VeNovE2aX4o2Nu3eHJUYznyMmQhvPcKdJS2ZqMMujVAwoAErFE28wnx6HiCwaQhCHUsuFA4Yb8KBY",
  "key23": "5vzBwXTgHLQgV7h7CbajpgiiyZfrLWCDm55VkBeb8nhsTCshz7xK1mbmoH5QM9XzVVZqaqmmGwnC7TRNjKXUxP88",
  "key24": "5yeBKwJwk9kAJDaXwiKK4oytywdZA8cXa1bRDTXPK88JQBABcxPP2P1qDDtn6XdMRz7X5FLDyvL1SY2oG8qSTimn",
  "key25": "58p1iPoZaiqzZGcuLmNVopu5QDCV6a9H5Q5GS2tgwsTZndhMcJ1RR2PQQbgAHtfJgjxkV4bSNPZDRzLx65RQzzEG",
  "key26": "5RUG94fQnvK8xc7N4ZAJsELGwZQwPYr6ENW8Q4Wz45Vx7Jff2zaRYyKyfPEbSwq8JBrJQX4cyfxGQzwkdhvNQyV4",
  "key27": "3b7YctS2SmrcD8iYCfSwYXADUxNBR22CxfMQA2Mimy8yBE7sarPEkgVZ42cXY4bmTPKEs6wYdFc1x4D7JE9btHbj",
  "key28": "3ZhTQAKYLuW5LreW5QCF13Ust49Z3RGrGEghMvvhA52MBNLzqXrDgFhVF3TTynebEE2P2KdGvAMKKvwUPYavTVni",
  "key29": "vuhjLV8GaGriBEFvFE871oCFeQDt9gaLB5eLvydT2rsbU9Tsw2TtnuJLBsgeJYw5tM3E4exZuzPNpoKJM29BptG"
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
