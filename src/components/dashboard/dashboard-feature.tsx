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
    "3SEL7STqNpqWukbkjmRTyRBSQWAHNFfpnrERKuLDoZ6cmUoT5AucEF4mdkQZbDF2scKDM7QnHFNqPTEMmd2oLnoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zvApStwoGZy78thsQvUVfhYX74gNgWvVtJqnZS4yaKej51eubSdENHS1foCFmrAkUrkGujhXZG3p98HFQ9DQk9D",
  "key1": "67isVpGPHi7Kfje9dQeAJ8NtGdzHDvkE4rne5NR3bx86yj2FabxdUqRu1eFRdVmYs5wWW57dc6PPojR9TifaZm1d",
  "key2": "2qntmQ5Jb6Sk4WbbLk8ZmrKtVCTw5RWBsDUSb6roVqQKUoSN19cmJtCVgzB6NLxB6aCmXcs2KjP9WHcSXTFN12T5",
  "key3": "3gpDXZWA4TKDJoT4RuA5PuQmgX6i2nMAiC3XZoS2QFfyTVvnkoiq1c4xWdFaHLeX7QSpgCFatqn1zXXv8BME9o1E",
  "key4": "3B4cXgk8Xc1dHSHZdzfp13KDGQXo7cAFLXK5sxxyw16ecxDWpR1NLydwPTE1MRQ8SiiRc3zGxeUGesS5oNAU7Nij",
  "key5": "2CEvKjxSUaDni6VudpAb4gNenreMdDizckTx6Z8Nqg52LJBJuTYQwdUDA96s67QmSUsecV5kbv7S9kVZWtvnEXsH",
  "key6": "2fYf3WUKxs5nkVSC1M7T9dykvjLW1MSLfLo4zksm9yvWhBUTAkPP2sZ9MjvvSdeod1hqi6KrcTofgbUtpmH79qpf",
  "key7": "5fx7zt11pMUtBdCcE2Aq1U3kshokRiBTTTh7xcX8mQGECh99LH6qHbynep2TMHP44zSwjwzxmKXxJrL3gjCtjWyB",
  "key8": "k97pEtv3MdHqvZjDBmDyFB5pL2ysag5bYXZf5kW9igpongRcfkusAforGN4ookQfLFoJGeV4gnJw9WyKxjqgCMb",
  "key9": "3FdVDJZ8vnB4DNdfiay9PdfSxTacq7dPPAf3hiPWv9XXdkQtmvNsjoj6bLDTLAQCUp9DUuNMoqEyPiBVoTwwUo7G",
  "key10": "61ejqkY2aNzMGTFb3kaqTNkuTpbPQQN3XUCqwGDAa7znbyBKbyYaofSiwh5VhmdfeosUb2EZFWPrYTY7fKXPFAQ7",
  "key11": "UF5yAHw6QEwAKF1EEAdnWfs7FdAvVUBoHMZ3jrekfsJdcxvjwtJFFSdSYXQ8iQ7fAMygDYdmMvXaCV8tRQdJZCW",
  "key12": "4nHqarMPJWUFk1AcJjuMZ6jeaS8yQ2bgL377jMeh6DjdbKx9Y5rYnx6hpm8Lfp66tksE7UHQzFzyT2954JfKTSsh",
  "key13": "4jBUNasrS9HdF1iCm1gJREpjytt6tT8k74BqgJA18nw7ohn2AvXbwfWL2MWHzsg9rumW9bqUncgCH6W6SuXtn46Z",
  "key14": "4THWU1Woyc4MDPLCK1okMBEDDL6qJpgXFgZ9d9Pj6kNh8mYLVMaQ2JskPLDMuDyFeyVykgzXV3ZichpiA8wC6bPD",
  "key15": "22UDpP1TgjJ6oEwStfH4fBfW9NSZw6XcX2BkesQxE4ekVM8W86As9Z1gvSpUKvYovSqi9AoRedMrQvH1zDF2ifbm",
  "key16": "3WNLfL5GgZqAVeozQ1an6VysGgxA8ZwiekB1bRdMAr6KPDnx2SKHr7RXHacZsRvyutxxD6ysNVLdMGoHWvVSrKFK",
  "key17": "4NGw7hQWxKjrxB4nL3iLo6V7v1aZx83Q93Z9B8ifycorsn3DMkmS8h6GKyAzD9RD1c4gUrnE4wksL6ps1ucRK1s6",
  "key18": "2ocN82EzAwuZPXNFUL6xWNyZdkbQKbejHUhuqYuZpKj2fV2iXJdY2jqv7ViMGNTFPBdNhv1UE1VnU6qVXyhgoN43",
  "key19": "3Po8CDQgr2B35YTBJEm8hhR9Cpbeni7Pk8FEmV8zMMxGaoLwoBvbff9YUmycYyNGSZiS2pBQvhtfXMSU5RDS76YW",
  "key20": "5NY5D4wTov6WqDD6Pk3Di9m6SsAJJxMA65JiBDu8k5qvXDh381ACe5dxc7NSaC9gH8ie9sCrn4hM2EGMuVPbY7Gq",
  "key21": "NhansFafuXsqjkSLmKStqx1FPJWBR9aQwNetXU98ERBCH1fcupZ6BoBNV3LHbd4gc8SGn4RN2U53cREEmuAxaHA",
  "key22": "24FMU6E8nvGNDWhRF8KmvUTwEEqHihAFKXsqKx3z9kpW2AhqWk7F5dRfFxQ1AePyd8zFmDAsnMVtiz7LUSjfLKmA",
  "key23": "SQZFCS5Awhadsw4xLSiHYoHrEzpoB24Pme3F45PvPScS789YCKbP5ZYsnVpmdqHaSWtN5cU54xxr7SN9a77P9C2",
  "key24": "41GSPij17fLbXA1vyr9yN6UWuSNdprjwSjt3SP3ai29ptA9Pqdv1ZePsSw8SqKm7xfSrNX88QcaEtuhGDUL17Enr",
  "key25": "2irbNQKgTnYFE28dmE5kS3De9go27YJUR2BKvpY3YQHVzXErYuzMMGYsa8L2oLdBp3GEa1Cjk8Dok7Jn9pRD6LS8",
  "key26": "4ZFLs6i6yG4jHa5UGTzqPpedoa6boLrbdF3BwbjE6Ce4pezwKhqgTz6HpFm5ap9ARQ5JPbSiyDYLzBzaVPkGTpdt",
  "key27": "4adyYHMvcDA52bSX4s9Gi5gsDD6ZXHcMgiDqXrCrr5eXsfpLFqA4WMcRMFtnQVPRFqDdgC9VHwjhMBJ3a7AgVdoE",
  "key28": "5qm2v1GCfCB9aYqw5Bi6rrvkKJmykZLty5gtJh5euBvR8XkfLEqbcMNMpB6SU1hhUR9QuiLuf3BoJezwGLSERvwq",
  "key29": "2YUBrQaRMxExCzWXKoaJwJtsTyQ3zknBo5UwK5cEGFfzkosoCd4bKn8oxzhWCt185HTGzQW7nA64boBnzM1dytCi",
  "key30": "3ewaMTW8bkfEgjLcKvW88PUZ377fvKgFg3Mt1t79DhE7BggnhwT9sL4dbabsXS1ipPKFovEbGQU3tK4sgYtxP6SB",
  "key31": "4xNRmpWJyXpLSKWSsrT9vA4FuZT67XPMkLJ9U2nFoB4h72aZ7JQMshdM6pvsDTv9tbaLVB13m7pYsaFjuqCcUnWG",
  "key32": "2AmNVyQwq5DTQJiB1k5TRgHXX1F28rVR6gcCwf7tMLTqTRosz57Sxz8cr4Y3SGsSKNA9sAMM65MotivdyXZp5H9v",
  "key33": "2c5Gf6ku6pRFCPXrzShx2cFEKrRGBya8NhkqiUrizyjGtPhzDDx8W1B8e8wTcMk9TbRrsLZ2p2gHsBDZ9JdAp8hM",
  "key34": "96DbZSXCu4v3YpaPCLD1RKEnEcrm4rbU9SphXaE2RTvqEr5MuUZ2uCKwvP6xFwdrdw14jbtWPLGdQcdCXDwaLFy",
  "key35": "3iwXK5aEYJohTWRwpnSh2Aq9YHVB3FaALiMVSkMC5S3ciz7HXuanRGAw1ZYPRResKHDvKybdhYdh99LKsjv2j4x6",
  "key36": "2rUT5RKfp9tgzT41kUfinZd431CYp71yuMsYt3mLtMN3TeLD5XDnZyFvoiUP9JriU4pfW3ETMLhM5wXitdx5HYe4",
  "key37": "61Nnb3d6Yp1VrFtdJhq9wfo81eHxihKaTAw8dXibStM1CK2o3rWBaeiDoqJMPNBZqbwpnFb3LRy4fJW3uuRC17nu",
  "key38": "5BUzywCQyLdzTMr8pcWfXb8oJpnBf1DPbq9UFiVXnB8zXz2ipRLkGEEe59SNJrXVhBtf61fxQCmPayhex3sqoZ3y",
  "key39": "36ktjUtnZNRGBG9bgGs3wcEZFfo3w7Kgu3gvbcgaacaxrBNHm3YJcWdWrhjEyCTcTm8UWGY2B8UFGoqQVZteuiEZ",
  "key40": "4mFzAe2d6AsFAszFSkybXhP2T5GfagiK8rrcMmcPLUJ9bVpZ5owvnKLAdnRsD7WMuJ6d4jb1bkWhHecTkmcomC8a",
  "key41": "3U9dqRgAPFGUT1DuERLXQdFkr2jy7bADPoFLAp7pLws5YR5bk9FScTFc7LHGKan2syGkVGwYZg16YWs2gRuQ2KLv",
  "key42": "Kd5DZxVdxbEtSLPcn3JNsy4wSqn5QBUxPywUatRmkfn7DjRbwAChbMpRvSKi3mmMj69wmPKBpbeMxboEBuVznZY",
  "key43": "2RkdNf28SYChjjE8XdTKhQZRvPPCCcNSUxNrXiA83oAx8jApgek5mokiy8mDq6pFqyaYs1ujBYiv2XBPeCPsug1c"
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
