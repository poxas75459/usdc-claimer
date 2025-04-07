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
    "4s4DXF4W9oGwEegWzyRTSug28o3GAPEqCfcPneAdEmuFSfM9aCnUkGkgUfDLQzWJU1BsoiK7L6yY63RYYS9icMx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xU3EdadNYm1dHUZbE1wifdTjVHkLbqZuP6L2msG2aSEqTT38atoWQ8qNhKwZxbHyoypEMeJLDYwJ2qXA2DHxtAR",
  "key1": "47LNkh4WviCAJbud9sxifbHTv3c9TKc3WU6buPLXXx3RtMVKEmqDoQja1KNzTVaFsR3NbsyuWLuA6vQ1rgdipxft",
  "key2": "AGquWajrZyPiUVxLsqbBv67mR6JsS6pL1R61sMAHHza6kEXSztMj6aKTRJSrw3PKn7FxAtpBP46gr2DrVhZLXZm",
  "key3": "4FXJEe19DKsmijKxBiyvTtGMYBr44zT88uSsaKvroBt1kM5jyNarQWnMU931SNm5DeAbWa9uvxzWKenJohX5GAVD",
  "key4": "tE3cLsyZwt9WwjTuJ6ZUJGHwakHmYGsW967gjVvjQiwodBEjSe36wt39cb6K9WkaVF2Kag4oj7g29kANbonZMEL",
  "key5": "3NAv187tAocdrmsKQ1ETj2LPbpwQX2mFHh1MxFSRqTnWxdUdXpnk4E8xZDDZAdY5GD78pdKU7C5tPKWaWo68a64x",
  "key6": "tVhBMNyQwrmApFXshpk9uEhF5yaAeGi7hj236c1hczf7oXyeE7Keq2iA8hdubNz9g5aog5vTavBwz8UrcBujxsp",
  "key7": "3xfMUHnkAuCVrF82HNcgVfs45uGrCe384J3SxFJdaRNrpv7A43aZiLrCPFwMW8bumTcpLfAWppsSgrm5LXJ2Tb63",
  "key8": "3nvvUGZ2g5yCzSFDeHfnKyZBgavesfuYamtQ2sMwr1PyQP3EFBGGFEzyTgA1Cerf4jbYrE37XSeq3twFkQ4W9qVV",
  "key9": "2FnjDKCG7x6QCtuQ6wSq24oNo4hnMXRjy8Uav8gsTjJsjaBY3bFLe1aLuvQeKN3o4m7oiWmJQa7fxiESqRv2McEp",
  "key10": "4NnA6aZsMXB4PH1RuEnfBERoyowEcohaoPqRHEb2kZSpTbVnn1c6J8stvWeLqPAkkx1T4M8ecEVLa1vUebDGka8V",
  "key11": "24wEfsRxUgp8NtTmYazV15wdi1ibz5xkFrPcL9hj45oNgPd1wuSE9aqpG3kCyfFKYg8xuJxXba83YMpyKfgpwuyS",
  "key12": "2vUNCAazkKtq8HTHvwqsojZ9dY6187d5fj1CXZLL6gD9VqTxtubLAGR46JLofP1TmUrWeuJBTVv49regcAca3xE2",
  "key13": "5ob58aizmhG4j8Shf1WQQPbk8LdjPaQqL3mi6mczzE5fw9YtSAoLqADYLyQ2t34xR1YqbySruLjBXmoEsEUUAdmE",
  "key14": "5eAStF2QoKjWTxEC1VL1cjN9Hg8Q3iTrKS4sQTNGUGRUHQUsUcwN4owh9pfqL3oCcKSYhr6A38qT8nEieEe3Mh9K",
  "key15": "2wUNmf3pu4WpR6FtWhNu5cX7KEfn3dTDs3kVwbqy3me39XqCiw1Rq3sXGNCPgEi4Cqfge1tMqC4WrxvKpwwprQ2F",
  "key16": "2Cswk7CTsrVygkG7BjikXbLiAe3B58A8JcSEhtsbCmoSnJkQrv5V9x7yooa5KpDDWoGnXdRLDPkJHdVsKP8NSn5L",
  "key17": "2jo9fmzH7e5UkmoSpNokfGdWzPvJsUULTyTrb2Hd6StTSHmsEEQKkjtta9nTgy18m4K6KUzu1AnRg2ygiyKDMp2T",
  "key18": "2MKyXrxUfcK6XzPybuGxuFxVXKzxkMsfArDCADxjW8sLJRZfWq5ntQ1Tg7fuP9Jx4dAorWDoTNY4ZJLch14Ks7Zv",
  "key19": "4ycwhNAMDSPJ8xgPeXTFXjig3dPgvdpx4B1es5isw3DA3XjtSCx5MD8cYGyYq8PKgpHp1dab9DMPJUBpj5csKyv9",
  "key20": "4hVw5HaJXWvmzZV2CZj1paJQsZd2vMSdCVQrUYsef1sJR9AJfnQkzMFB9y3bwkJ7QvRHTEdN397mKr4Rr2E8FEPG",
  "key21": "66fKELBkwvAkJYQL51pKwFbicPwUTxfZN76US5Sm3qMxzBJpf5oktoLzz9Y5YUxvayrocqmMCVxUkeRsNWsUwx2h",
  "key22": "4gyEma5n6RuvVViSfqLP5kEBQSRQP88GQ1T8VrvkG7dMVAiNRL6FxQtF8Woa3ffFQMLqsrqYTintR4Wc52pkFavb",
  "key23": "2vHfuU1ePp9ABkyWuaLkZXoKqgAHkFrJQQf6daKCznxnBvou6trDoUkowHqwLapuXZ64eN1P8xth4bwiyL9btc5C",
  "key24": "3gbHkyi3f8ZRH5J6vdSCbbZyirg9VyPnUepXjRJYjdsrX5V5xHbLV67ie4bHFumnMRbijcaBupxC1BVU4guGESEk",
  "key25": "42MXxdJD1CB3EhnopnNpqn34WwFSQDdzyzfjhSvxFuqv69iXJuDwme4zGVdMsjF6nQH7w92W2uRB2BrEshZXinzV",
  "key26": "3uzriPdNAK1NQ6kwRnvzYE5mR7242k8FEeEkBUxb5UjwbFhgN8z82ysv7DRE9ZNvAmdax4zc4gw25XH7W8UMp59N",
  "key27": "2YsW1AMy7gQzKBnm1mgJb598Rbhh4opgC7fKgsirm99SFdi8B8kEAgqkCKAHNfVkn1bcofso6EdasgBUJXPoFSVh",
  "key28": "376UBNm28CrKdrBcBCtKPEnQFAV5ChNUgCNUeDpWcpkUif6imLZReU4op8GHoVWppvwepZAm9jXvcQivxbSMgX79"
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
