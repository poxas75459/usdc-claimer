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
    "5shpv4rUkzLfkNpmdbURDwKeswbtnrwEnyMqNjhWtm15V2sEj3Y2vdcLMHFYgFcEDkpYCjdoi7q8shpvR9NBsLSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VaTYvfFCEHe9AZEn8v8Y9EWuPwfDoPJcX6ru6F5VKCkSyUfnMsGn7diBZB9Mbvjb8cnA7fpiiJC8ABRYtiXszAL",
  "key1": "29nZEVLhVNq9ZbYwfssDdLQEFbFYmrKPVu99NaaN6uh5d4StPXS3Vst7ufWNNnzWJpq5DnyTjCuj74ezHHMtcanV",
  "key2": "QDBnc2DRG9iHmDsmGhrcWsnbMwUbDyG5kzXtf6aDm5GTxdSjW84PBewUHD97ZiWxQc7uquwcPVERgo64qfYBppo",
  "key3": "2Gu8gwGWi3xM7AUU6iUUL5zJb6wBN1AWfiTFAyvzAswx9TWjHMXbTMHzxrb3GrTxXeJFFRFc48rwiCzq2rNQg2kv",
  "key4": "3diSQH44MhvWomg2fWLBjmBPsU71kU5J3ZixF9964WERATsG9mocSvjC9DACQ3metpMidRyUG8U66AhGfyzknxQQ",
  "key5": "NXbwyiXrS4ShbvtDsuahskgRVNxkXxmg7riDDjyjk7RJasG3EiEw7AKt9tnJ4BmdfgsLWtLne1a8nHhHvMzyL2L",
  "key6": "32DENLMZESPweJYF5rTCLrGPK6tUqGkhSaEMpSXPMfGDUEnN5EAFgfU9j6CXaekXvcXgYjnYme1ARu79Rio5YQX3",
  "key7": "3JC8r7o5oQupWD2WaUb8nmniRomz44VgrFVpCi1xsEZbvE3scyUipuXZRfwN1QQRjms4tmEhVBsCQWnR5SiyMHr8",
  "key8": "iyhx52HzL5w1K6eak9XzEyzmvSSRFpNPMrg8Xk9DYDG25ZtrrQVrJJaefgYfqdkcRJTtNRe2c2XeN6ZfbmGFSsz",
  "key9": "3eNJCdQA1aQvsn7RRrYcLteKjHFXVVGSBN4KgmErfCACH57AF3Ah2kgyj3hSadFVSD3FiqTnnCP98KDKAxaosqPo",
  "key10": "3FUuxckK477ResYwrhqmiyjzirXfNkEzX4VPq7xWmgu1m6hst8SEwmqkRWygSY5eHpE579Cx4bDHZnF1iUytMUok",
  "key11": "121HzkH56Qnb4n2AHKUfcuBhdKWS7qufYPcVwgZ8ZD9135p2UsMvZcQGKrzpwpXpwVbp3zjcLwXun8QfPrsaZkM6",
  "key12": "CJ9MvQ6fjWCuLE6DGxgMNLGQ4dfbzHZYWvv8V8erWJdKcwSToFSyQuvZhrk2yt3h6PHLADZmEaGbF17No8C3hZR",
  "key13": "3Z69GbZTVGPBvN3efa1SNENbtPd4aeXDRAgef4rKnjUtAYjYJbFni96tuSHmxysGoRbvWMG29KvZVntsGEV3Z3Pk",
  "key14": "5vWPj32Veip3bCyncYjGsvXwhkQEmoAa52TFdLeodwrp4ChRmtftPWgKXrYdV9SuruuzWfhVR69iRTP5ZHLiEUTk",
  "key15": "4drLE9syEoFuztjoLKX696PYJTS3TRtmwfs4vpAvB2ww5vmHZhnimTBT6hTkAe4sTsg4tMWviwB2Nb4cMm17GSpn",
  "key16": "4QDAcUXcfWwLQNYsSsspCKPPP2uqTtMXbTnqbCmm6dMHaSz1Lqoc9Twy3on8Gz7c41rmmH2BZsgX9VX2YLdgkLrj",
  "key17": "4AVvM85tzNeaiGYwg461VyGD5PVRcQVs65vxQyVGAP2dBjPQ4hf4qnbBPiPMYNh1PLBVNPH7Li6hJfxcVTFhvi7D",
  "key18": "5i4vECAEnWiNApPLb5gBGReA7RDMfmz7XctkoUP14YsW68mHyXPSXFDSGWrBwp2ERMF6TXaDhczgwMtj1XkBSaSr",
  "key19": "2TVBEuzYN9F2cgRtevW6N9imdsCkPHaopDVDJnXwvQLdkHji2bfT11RDsp4GwKmVeseoTMvGzucwTNovHscyNPDq",
  "key20": "TRQc116XS1nYpNABHeSoyqUne19LriYip3kqbe9cqAUmjbVwZxTpZ4Z9vZ7evPcNerYKh3ZuiPN4F971YteG33L",
  "key21": "4MvQXf8tUyhL8GWUAEcXPMBa9qdsosnW7iF3AWEi1rn1D6ZQGfWfuTYziKqybGDeUSJ6w8822pyXHGdejCNXVN74",
  "key22": "36qFwPNLcJzjWbwmZqacUThjUGc1anQmnzrmpMjWNwjp4ZLZyP9nvLEobLQNQ8G158MB6diX3n6XPA4Eht7Q5aJw",
  "key23": "2debPMauu5NaEUm4L3k9P94Fsu3SqzaWuJ91z2A5YfzKaZAXFP9o1CBsjqsgGXdWFBwtFGszG6sCwadTgwQbyAHX",
  "key24": "4XyTgsGjUsG9G6cbJ5qo6cpYys78qL4StuLdCShp4QuRep4L5HgpFzwc1Tw66PGqznqE4ADsHgEsjEN4yHxzxd3s",
  "key25": "4o66NQtws3HFCZJ4VdbNAYocsdFKJkxT7ah28qfmcLKca9VQtPx3Z2NCyw57XAB35kez8joEUVDNG5XMnCpvRdvU",
  "key26": "5tJQFdJjf9cVW9iQL1vbNUEFFUg1nrxQXcNPdPwzsV6rxSRK4HtAvAyGRfQCJi5bXs3ZgtTLELQGAr1iGEy3w3Uo",
  "key27": "4qtce4moPjaHmjbMHATXgYGYtgfM168aspws1cSPtqcwJHF5xbbdhv7izKpgFzoZ9YkG3kvdHYp7vjG65Sc8w1Gr",
  "key28": "3XetRvCaAMwfG5YLrWwSVY5M4tSvE2yj4DTB8vdXgNobv4yuCrgQnjHVTc3Ej1v2Mwqcr7Sigxvmp1dzF2QtHaGC",
  "key29": "2X1TDJ7EwChKa6ubMpQYUzyLQ9YBxGrAoaVWuWXvqki2uueNMoh1iN3CVUBrwFzZGLKc4bKfGF33fxAGFRChCA1p",
  "key30": "5Y7eK4CEFvBJw3QVvk4DFqD7sRghu6AqZrtYUKaX9X4JXMYkRRxjyJWVKH5yzw3PB7jF9TJQDiPAfvLd1bwf8F8s",
  "key31": "2WULQJ9HsVecbQXNhRFr45zwDeQbWaZcz17aMy9Lt564ZM6PJfhY7D93gjfxejRm9CpGjDtkG4fxXWWEKChY8kCb",
  "key32": "2zbHHGzFfQmN3b1dMdgmN1HbUboFs17irGv8hsbyDQaeTeeyAiwAhZm14MzTQEQ8XfHKRLeGqpx54U5naD1xqjQJ",
  "key33": "3JtFX3SVtxSfBBRwRHigeHPJ5emXBwfe1wYZmax6XUnE23EgAWuwQZT8f5SHRZHcSRQ9v6uVTu5jGdEa3HronsCT",
  "key34": "2kib33SsD2ZEh3ARmarHnuoYA6Ybgm6zkFNjqp8KPnmkCS7UJqw61vMtnG9s6JoU7E4efAMLhGpNFqGHDLXkqMdC",
  "key35": "43pghQKXzZCvjZ7pKknsJSpV1p89Kyh9shGXc9jwTfaZr81fAyn59YhieyRdAjnncrPMfDPHMTXC1js4hY1A6HLK",
  "key36": "4w7sxCBZnDbt8o9kvWKMLoqYHjKLMmQAXrLhpPrgYjpsNZfE6RUrWjAagATnPrgL4VkV5qdtcBiFGBRmA4dNARyy",
  "key37": "42npmDyRDGAvGpgnmmhAo1TAzpKoB5ht9L19tRTtjt8vzpBpFwVG8feAmd8VrFsosY8VF9U7htHAQZ9PizzrcAAm",
  "key38": "5ZdSEWpP1M4TxFzvfgW8mrCLnT9XQUhUHcnnKLpfC14pqkLzWNw7YNEEmC9gj2x18Vek2JfdimJtgdT5pWBqH6db",
  "key39": "a1cdE2YJi6kiBsLxvkBm19V4TNbCP7rZNk6SnRsjN8cJ6Yc6YtP7zcxA8uVcx9wV7pnoZ1FGvor5XyeK9qo5pcE"
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
