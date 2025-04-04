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
    "2XeqkaGHCrDLR6xByWxCAANMiH51idCQh3kkqC84GKaqi9v6gtegiseKYjg354GUDuAe5gyLRKMtgMn4yHvK8S6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H3WqaqE1mwo3XdRDmHo2DuTtZykXPgrHWK94KFaoT2mu8wyCdUUnHPBKSJYdNMsmUmK1Gja3yYhfjch5mVPpjDe",
  "key1": "2vW12hD4cwJ2QCNcjuDiHiRjdP48Gqk4Bz6JnPJbQxr7dwbtoUBLVuiYyvq9AD4K7J3psAprxvZLuwfTvQVfucFg",
  "key2": "JEa4ktJHpQsmBiv2m44TWhuEG3xVsrUeFFUxqoLje3dqZPH8URRbWFCUPRLCJJmB8ydbrvguGY7YGHe5HPVQUFv",
  "key3": "4VCWxdiowKeDWCKQ2188JnvAvRYvR4ZqdHtL1Hy4phRu4SzMFRoDTpQN51bwaFmoDL1ZiiA5ygvHhyb4APPx8AAR",
  "key4": "2Wsu8Lt3JHB5aS77RhkJfKLNRgrcRsy8G3qyYy2eGJN5GKusSjD6EwnhHqQJxBGE1LVSqWhZsDeRpQNBcn5eEXNu",
  "key5": "2Nr69H8rhWcK3FQwN5MvS8KeLGBApeFNgBGcw1PzeeB9V6HgvMhxAh4sUMUb1BqM1ZNqxp4WZsAJaR8wu9BYJjPR",
  "key6": "36SSja3HoUWAqxD7QusCPxqT5uXyyHPVVxHVSgnGkNrGwPzYCRnEGLVKpTnn5NTARc2SJggVwEkoqiB2akh9pUAm",
  "key7": "6717dzpVLyRA2L1jo8GemTv8CLDzteGE2CjUHvw3CCLGdULnea1on1njVaAZQQXqtkJAmRCckRYrXcjAXYqg5maD",
  "key8": "4XBnGiFoGv9k9326HsLuV7GuTQ2GQJa2MFCV776ZEyKuPRMJfNbDRChdCEX9QtuhiuoJRMYNnZM2Zf9w98wEYEHK",
  "key9": "QRTx6MsffjmvwBYzkpeWnqZRRecCaoQuj92Avm8exW6Qu3D8BKPFzHmou6qv6p2NXMtuWXVw6Kz2RT8tMdDseoW",
  "key10": "3RS7voT3RjwnWbK3g41P72YdZNbksMP4nxwsmz9nWBYPBzn88NPv8ZoegDuoRyytmfrzbRghEumL5VRgaPAAxZ4v",
  "key11": "2mQSEftM5Z5RNfmEofndiZ5Dk75U7wAjkAVrtpEmoLrvD2vLkZu1MQ3LXkHXiKHrKrRFXx5EzMMqrsi3vHdefPyj",
  "key12": "wdSywU79SHjXzqQUheR9w72ikSFeErEe4HjFoiFVUiu61BV3QFDCVfJ9jHMunrBKhssSCXkkEmAbcDSQmSzL8FT",
  "key13": "2skcP7gnA1Up88ZNBaocBs7PFkqfsfj3JmTYvzGhTZcLbhW7fP61iBVCF6nRcLpdv2qnWSffagEWfhi2ESYGbmpz",
  "key14": "2Q1mRF1gnHG1f1RqwNikp2dZnrf7CFZMjAVcGsEb4vEjtASiSzf6ra3DYayvWXWPSMpYe2x8uHnuTKmkgPugJ3wS",
  "key15": "4ZGzyM2b9iyzh4c4WTXNJveoMmrrqPR6PEjuSHN6AA387TdAg6iPUynJcR3UnwvfDF1oekaEy2FWYE9173aqb98T",
  "key16": "3y8gU9g6J1AYiBALJJ8XeNXvPRUonAsakiUczEtqZ7NjAiwfb5AsLf99CJYawtrCvHXMeJVAppWQxY8WvnBigW2c",
  "key17": "2ygdJT4mX3ykjR1YZMehkgDDvSdnmRuD5iRHNmmA84nkfD2hHpB1EqrQG9JNJm6CVRYG5xbUTZS68eEZHc2cNBgP",
  "key18": "WVaET8AsYpQZBsEnUp5RtauLx57eaxTmfMTpZarhmFRzqQdgirDhLCsdeueVRpMs6RxfZnnEgNPyjfksrNRmmbe",
  "key19": "3BVYLkt4ettJ4gxt2YYBSh2Ly7pca1J4N4oJ1BhYk5wFgrRPRh1rNu1VfJts1btHVddo6NBR2FNQssGmHffC9LB7",
  "key20": "2wAibNhi2U7deaQyP6wCbUD1qpjUjQFQqakbBPeKEWCN6d6HVASRKniWVRSXs15hdbByMvniZnfqqZ11kuuXvoyi",
  "key21": "4J3H79Vco62i4vdQSb5fnqJb8QnqYR2QpNfh1pNRg3nuMW8exP4nWVsRUtCn8ScaGjj3xdGN59fvASAwdk8U9a3e",
  "key22": "3Guy7hPCMbWBjGeP6TMFkYRdhkHfAmwGKsyaqFX7BuKnwymy4nPG76vFEP3FFTtdaW7qo4Bj4Ry8AfvLiW1D3BQ9",
  "key23": "5th2xGtwMRbwquEWLkK149kddw62EpvLBy1CdjwSUHrD1WkomELKaZfSzsUfMhnZQ4rvCHrkA6hbdcp9PMjfAYhM",
  "key24": "5Ugrmh21pxC3QLFGCpJocwHNS4VUZpFNxHxsAqHZFVMi4z4dBEVVALA8N9UbJuqtrLSPw9ETGC6fDPgvL3LzUcxB"
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
