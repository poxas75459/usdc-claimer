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
    "2GHSpe6UVfUcS3usdExekzhJ3ZqzEmX1ZNFCiUuz99nHQiE7zV2PgDf8DfSf8zGzFGzEt1Jbqexf2hTzH5BxhtSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z5RHXfA1sAGBHBC1hbCZqXqYq6sGHQKoqL3V9hTP4xFo45ghk6s18zfrb7CZHHhgcZUaCapKjP3DbRCfV78DwSm",
  "key1": "3Pex2afBcDS7rGXKzDSBFobNENR32vmuQFtWP4CBCqN5v7kE6NXR3Cw1YrJvGV5zgKRNwadE1rUn6DfkfWgJfcNz",
  "key2": "4zFEM9d2j1PhEDjok3zuyjEQh2MdGkyWxKdakEKV7idbXgpjxe8bhyd3QTeJy8DThNXfm2a8T7hWQKpoYe9F9emV",
  "key3": "4K1n4b24mRZDrcFd2tvBqSFG7zt7JTNL3khEHHh5pJP3jcyUkeYTuqAmUrMnRkvQ9yk2Gp7JWMXoyGWs6VyXP75m",
  "key4": "2u48jxjkefLfARaeT6wza4ML8ZcbvFHJEXQD4jZbxH7Zg4N4TFGEixTcHtxaxzqrdysegouHiuWxUBkB71PU52Yq",
  "key5": "4ygdtuWsAiyuN5HooAnT2d6PK8gE3unLPN11B1ijdouT17HTCU9noM1oX114WGKXyaAz3fJWSq64xtg2u1wd8j1X",
  "key6": "4e9Tb5TYcz546e9F4ZLKUvC3re6mMHH5VSzu3WX4N3RZt84Cdsdw9vXpG5JpV3BnDx4fWoTLEPJHKC6GqF4Afwe8",
  "key7": "3HwdbyofSjCFsJkVv2gYwzw4YpF8kNeZQSgCAaD6EYkRRhpDz7EuVfxzMt8vNF2nLXBWpjo7pHBgmn3BnnQcNR2P",
  "key8": "3UvozEn6pT7g8XhTYQyyQyMuurp9o6SWgkYpbYRGPt64TDjMoCtbP3JbMEmsy1PrU4PikmjMcptNdt3CYFvHCvP4",
  "key9": "2fKG35vZ3hpJ4Xy8PJDS91E5pRn2TgN3hrSgf3hrbqbggW8G55tNoUBagKfoNcbEhSnLX7KKAHAmYri1Rub5wqdD",
  "key10": "3neRHtTWHmFV4FPWgYNURADUkn5pBGaQd6nL3J7aBkrrSGnBe2kuLPcNi5eL9Ased1tzyZEfjHef5Xd3ofR2CvEt",
  "key11": "5SwKeHLogGogdFTmx9nySKaa63K7ezT3X7RJhboB55nizctsUHRhVQiMetfeSQeT8QktD4cBeVmuuncsVE9YsTca",
  "key12": "5hy1fL5fsEcuJuY1k8eXPVfcfq23afRTyRifQZvjyzRJrA4z5rPZkUhzaNBoyE3iEyq7gVVdFYypNRsX3tTuKygC",
  "key13": "3ZjvXAJqSeGXdebKrP1j1QattEr1Lx6axiWX5B2EXmBr3wcygZS6cQxZM78N1S3A947jhCzqQwgzGTcEov29c2QP",
  "key14": "2LcetBjsdnjHfYx87XtdfSFXthYbmzEiMfghdcN6jwdPgDdwYtC4hqrb7MTfKe5PbXgK3SiSriw1uQWpXFBwyC24",
  "key15": "3TqVtkG8u6A8yKMBBipQzBBvrG8CR3UrXZUobLWMro8e6DwtDyACnawTzK3QYbhKF8DTUhkt9cDxaqtt5bjet2AW",
  "key16": "2AAJ7KdpkNZUQhn44BU6o9DPYA4NRv22k6koXtFcYS6jDEqnBuiAw4TPqHXKg8yG7uUWvag7xmxJcYpYSiB3pCsb",
  "key17": "VfztCR3nZE1LhkdzXPrzkYwjahAKyt1AnuxSxemNf1fYgxLcsi5FqghmWDMQ1e7dzcUNTScw7qQpK5sdJoRxiVD",
  "key18": "3GyUzuxSBa4x2mgSy3aMCPJ23GazpU5KR5N1veredXmESoGeJPrACpKw9eRJaYB2v8j5aG4972nVRtPuC9EFaTqd",
  "key19": "3mW3CoJieAd5MAzq1ndxNZEC7irzYvGNTS66T1kkaePaKTaaz1Lop5mmYncPUAxcRCUU7imH9nTtTpGuspy5LuKG",
  "key20": "3Ze3bChEUmcfZTwxz42RUBXnZAt2aohAVwAJUQoUksCgKUANFEg3C9Q45FEUSd169JgojeC8qneNNDuYEyLnHZ1k",
  "key21": "5X3hzrRa1ipS992gEBeT9hWZr7ncXDQyUwQmUvobifFUqbo3K6Yy5dAr1YTAYrzBezaQTpsxLkpm9VTMBvuki1N",
  "key22": "28pmCRASyVh1ocjYXMgDT4fxkVooDn7byQ4SJTb87TMEZH9Z5PjLhQ5ZCVamfFdxwcBo12vV3vtJg1a7DLSaXFan",
  "key23": "23cbMzHLwxzfAXHK49nj3TywZDs8NZEkMknsys4aAMSbhsVkUQxbPfP5oHSuzxNXtyFryjzk2Gk3H3U6NhngSCLp",
  "key24": "5FL2msAFNyzsUhYbhSKeoxmnyt5yp8E76fT3QoV3ttByAeaydtUHd6jxsopzqmykSncUVZbzo5NP6py1meuqEvMQ",
  "key25": "3foKMnnkEEdjCwAfSn2iLazkjkRjL1C2ETUFzwcqyjbaGKmV3yuyFaX2r1nxHA67yu3ZP8pDJYfbesv7P1ZuR4xh",
  "key26": "4S9NzGUDua6av5KytK6QGEZPYotdqHb3FQCV2QEswPaiWAZTvBh9vFxsG6xvHYoB6NPRvzuMrtYxfF17AD4PV5eE"
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
