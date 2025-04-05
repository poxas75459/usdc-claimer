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
    "3XPwvVd92fmTGi73JoQmSk1wyJJz6AbQU1ZfqR62Ritxh7McEHeY6hDpLgMNTQTxFd14MmT7JxrjNckAE3XdVxib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yCne2WrvzdBgRDChdjU45avd2ndP7SNWkP1Qx3Zg7wg6dSqvtgBL5KVLus6ji6rfPcaQVn73v1iKu7odDFuHECB",
  "key1": "3EvqVA6dLY4Uopk8BoncNjYYkVcgyS4M24CbcQwSCnR3zAA4mKGy76RTWyeKoTaTbS1qcZscWpgyK6cRAaM3UqLP",
  "key2": "1KCuW1D3j32KeESs5ctaWvWJtdrvdXsyXTSekHnZL4cC9UmtwaKGidFi5ckWGfjmbmfG9ghpGuK4uUUmXEs7DEM",
  "key3": "639Q9es3v72mfSYvNrbUFMbgsLLcu1dyAoKp9XUNzJkbn7zunajSLgMBxaB53Rz98QtkVUFCtwuPgBt2RBpkPmzg",
  "key4": "3ei5F8L6ZkjtEDdKQRtrPbTSdtuQ15FbTm9R6SufafeBe64Ca9Rw1yh7Z1RY8fp9RSSm4v3C3iD6Ltj6DJcyyrYv",
  "key5": "KHUhfUvos6xT6AGCtCfupqAFq5DQq3EA3fkdRnm1GKpwkKyi7WAuLw6RWkeUbjgTtt37PBis1cbi9dTaPzDqpk5",
  "key6": "2iNZBi1xWtH4civG1f78imMh3z4nZDMftTbUmqRaC86fw2TMXPE2upWYeREHXU63xQ7pffUXVMS3QvcNcJqHw5bn",
  "key7": "VY31bXdjBEPJpi3W7XXS3Jgy3XjcsQWaV2FbY7Mm1oLjw8ud1CQyA55KYZGG3ovyjajJPX1Qf6tYCtR6aYWrtmd",
  "key8": "2GK3qMKCVEopiP6dVHfcQmYNp9xYhgmARVYPQAiJmN6qCduzf7g5enVgdRJjjKDGfz5SYNMatpd7hJPTMfAxXYxb",
  "key9": "34R66ysHSMyTJyw2wtdvtLhsgoqGPt4iQGpiGuqZMV2cTC7cb7vF33mYSKXTFmacjggkoAfXE7rJ9PRaTQGATMmZ",
  "key10": "4JDPGMeMzKDFeyeKFufXYoC4g1CwMePSmAs195pevbnAVfSfnHsAn95Ah99f9dmhyv3uq6akF6xTDnBfJvaR6pSo",
  "key11": "TGsXR1mMxT9tVh7KzkRgWL6WpZ1Smsf8yhSWGHZYwpLAGYH2v58Uc1prUHbxSmu2FoCnhmgQQLrDk5GLGCTAshU",
  "key12": "5DE1EaWABy3GecMdNEbU5JWiceKd92Wnny8kMjX9VSyt9RBjSQ6PWecs76BDeowJLLUkyK1C9ZkufdpSifUnEivr",
  "key13": "2Nn6vNhbbXF3TEtZjEaCMBkvZZHcATvrZ5t2En5D931ouQkm1V6aJgWjZhZfz9dFLSrHjCuSWvmeu5YLwaxFToQ",
  "key14": "4KBsnWLw2M176DdTXYHN6ojeh4hikwXiGLaWf5HqWwxeBciVSac1HNJSPpLvEDrbGprhyrHkrJuWwZwWxPEoDnPB",
  "key15": "2Uua12tHNuwgqPj9uwScgi6HMirMpdKymncmuSTqYrgeC5fhQRf34SUzbBwFgph4KUHkpY8dNsk53YiTUZmM2crE",
  "key16": "2NsYnufV1mnRPJzPc4y18hbURGWQXuZKhRsaNCjLBTjP9ut2v7b2wm5z7dtgv7mhs8Gb429HBVWTko5urA94fqKq",
  "key17": "2XSvyq5u472KaLhcsgLZCsn9jq7Bjxp627wnyHDiZLARr7WzozmHJFzCmYHUiCopidbWBsV8krwhNURVtMJj5kJt",
  "key18": "4k2U8jZArnxnPAheYpxyt2pP8JMTFZ2Wg6pZdHEo69BxYmj57eoirqFwUPUNZm723aFzSv6QmCcPbLQetSdRWDuM",
  "key19": "2nvdDH3i2eoKpAEeCWYgMJQV84A9Veu9GBzNWVds5pg4VXQ1fZ7QrcotvvBeuQxtR47tRnUxULJU8huLwRJcLvgg",
  "key20": "kjecszzbwfP5bDpnkCyffUCQRm9CxZtsVcp2iKZyTvKAAoqT13M9Hu7qa9cWs1aS6iehmqpvWvhShxvKo73z7Jp",
  "key21": "5jGnXUk7mrz4yzFUjwYwpmk1qjBMcuMwk3B6bKNziDnb9k4xhtJXMvvW3pfrZnCaLhaChVTBTeCT5Fxxpg7p929M",
  "key22": "iHEFC2WkYBwx8i87iAxXBRC5KwBRGmWPWjmCMM3xQ4gLCaiwByRYc7CPk6rKCgsXeNGdCYTxEAbqrf67eLw3CbN",
  "key23": "31WG8XsPdK7SBqPgvxgpy2aHZtMY86SvgS9QASHccvzjcQjw59tsnNhVYcPqkNT89Bf5vEVP7JY8BbofJhEirbGA",
  "key24": "4xANavGoyp44xBPVhSkp8LAMton65F2TE23d5HSBCJpmyGMswT8uf7FN3YTX5KqLFmmcezkFWBr2ssfzvKxzpo5b"
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
