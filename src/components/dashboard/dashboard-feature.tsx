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
    "2quym1b141fbBnvui96kc129ttaFhDYrb2qpZ3CMfhsDVqTSVj8iwyjpGFxndCxBXQvFyeD2fMXmraLTPjDYXmRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gCyuWtmW6WSbKf1SMno27BvLTKJKuMqFayGTRhS4hmH73WEX9deNaURJ5Jj5JSBtdQsHowzLZVzWkbC3cfdaYSq",
  "key1": "2Ta8gUvtowT1j7Rk4Lczrp3DfByNbgN3oBpdheuMZd8T9EqvRMEJ9dtGNpxLUJqpSPnD8vnCtSmSPP6hL9iWHk1J",
  "key2": "3WLUV7pVfe231XrZMTnpxXCyrxGtMyPedZMd8zMJArXkaR1QqpbZ73akDZkS5YfSmEKp36CEXjoipK2nSS4xkYZi",
  "key3": "3bdM1MCdYpc13yVbbk9WWZNby2LoZXJ7uzQrYoAe1fWhZQ5qiGjyvpy1z4fsbHeXprJEBXoZHJA89qdBU58Kx38t",
  "key4": "okjpppF77qp6K6F4GaAr3SzqX7AJ7FyppihFcR29ASZNLukxcJ6XbW7gP9eVp6WMBVazkaZpxyd2B2MKwc9HRTr",
  "key5": "4rLDynYY9tFsBKVjNd6i9dpZrVo2T7EUnXyJnbCXz4vRUXGmnk6Xf6qVzuckJYjitwJmzR5EybpXAa9bGz722PT2",
  "key6": "PtiH9gs4yy33gbA37PUN5Vf4Kt7GLeqUTWjM6w56rksTdRwnK7Sj7imK8RXW7qLtVbXzS3tLu27iHAzyM1y6pvH",
  "key7": "2oPPjb2Vk1PpVx4NEuHZya7URFrKPKD4CrezqDvtWDqkm7PoNVvLyzMgGv52HpQS5u5F6TXCkih6SkNuYcHimzVM",
  "key8": "3z222wT467EEnTHAKf34HGogGUPYMGKyYhCxnM4EECfcxepDqhERHjAALjsPV1uH8vPGv62Ry2xJMLsXry2g5CE3",
  "key9": "V3DSXT3EbCyAx59o4zces4p3crSmnX5EALysGXBcNNx31AEjHFzH4gN8c5MX8WmHK4Lxx87PeLmUWwwxejMsL3C",
  "key10": "2WCuHpW9uUeqTWRHP2Tz5UX8F5ZotWfiGdvVw73mjnQGqrypmAgQiShs99AzWEp1fqoK2toTEGU99YJxmzxA7qwv",
  "key11": "3Shi6yQrJT42eUKEmstjiDDq1c5etKv3fGWtZHpq25D1UBPqsXFDBaERsbY4iaCiTumJQRJMWymAajocU2gWZkyT",
  "key12": "3yJJStYjtDhEXH8vSqvtMpJ9LB5ywHY7P19UDuWRN3H8DTze9qzwZwmbRRa3VNV8JzKbSd1NtF9xsHKaRzxqiZU",
  "key13": "RQaoGBWQGom1bNQKr9nK7SAdQG9nPQUgnec7ALUTKM3Fy2bipJmmpq5cCz4BRFXCgZb32Kfs6yqMjBBWcAntWXr",
  "key14": "wNUT9xvUGQn7FbV8adwwbeqoGFzvoaK3M7qQLFAViJqSCZVoPawFobFuTtDS5TUVZgX4eQvq5m7rokeM6AUniuL",
  "key15": "3Bo4WMWA6W697angGNmhY4PadoNyHydSLV1iPhjcUsQVLPHFonzjecScvzs7iMVQQMCEdYzPATRmG7BcDY6X5oy9",
  "key16": "ZAbf69GXYfAjxsJfgiApPKtt1ZVRqVTgD86eLQ4KAB8WaTz7GinCgq9A1GzBVHv9qSCJ5NGSibd34kXoc1Z2im9",
  "key17": "oKTx1MnVfnSJZVMiLwTBEtY3RGiLnctRuxJLAVGgpDpDF3ykw1Apna1SQJvp3rmDzxZc8xBkNtGgNXrswqyk89d",
  "key18": "3p9rtaHxXecN4JhApZu2PzFCT4KDZAQNX97mqvaiDY9HLJNnqrauFtdzocWPS1v3vAL45Ha1H52ey4kB8RaLAY4V",
  "key19": "qJ6jy7oQLA3VwSJD2wBmY17ugPAn4LfWS2Pgnzr5h9HQnCvu5knDftAV4Nxy63BDWtdfQ7nb3yM6xAhC8DvmBL4",
  "key20": "e5BwXUoMVWBGfMZAJkMCWnHpHWWTxq8s7o2XSdNEZD5LqiBJ16Sr6ZtJB564jXNjuqsVWrvCkuGv1kv9J6b57FV",
  "key21": "5qdtpSBsb8LvzMeeyZXMmAJSoFpxvKSq6xtEQuWGPqmpq4msyKJCBK2xGyjFSnAjCb8gXwezuj7dKG85EDv9nodW",
  "key22": "2CiZS6MGAz8ZUgWE8AJcX44wBVg1VksEW91MkLhEzVr16aR3yxpYNYQuTeUMb1QZK8zSZHF1ikqgCRNW4YBGV8PB",
  "key23": "2TuszfdoETAtYWkzhWdPV4nnYzxNy6SX89JC6yN2heNyEHoLS9NhHzf4ZDm2ZMnAGdnehrhgQURy4wrPrk3DtU1E",
  "key24": "4qG4n6ckxHnoK8SyuQexxcaq5fneeucoNJd5ZYXRdHYPyndL8bhDiyrdDqLzHP9s8vW2UVJiXHhKZsmQJoaCPPnd",
  "key25": "3UZtitV3hFZZu8ox4oyxcR9ENCk7wHcdivwXajcKMekEduX3tUnEELteZ3ig2uUN7JQZ3SJLAy6ajoRQoexGF89h",
  "key26": "gKodi3r5Qj84aNoRunM3rWMZUTmuMDh1hZDXDKcx8EMLeh5vXz9oxqNpYcrSSp4SWwsZcwDrXHZjo7hYHH242P2",
  "key27": "2xfPwWCCVnN29RmzR9HgqRmyV9xQpujzoFyTxcqKF2GrLiynH7PJL6Jpkm7k332s2KHrgXiq3tQwmquW2XmvYEU9",
  "key28": "2ZrnWs3enzKPkTXVJQGh6vLV2zY59rMjEHmgE7VdDU2g4YCT2zE7jHyKbPz2HQWhJ4ARqFaDdGPLmMQXFQisxLGt",
  "key29": "Eb9nEqJ6GNTRqsx1P1hVD7cUKPjkEHXR2HZG76SbBm3dcyicehf7YrqxN463VtGihcpQabMDBtkEZcx9fdrbXvh",
  "key30": "42hHHTBpCCDiyK3aBZZSEDdCmfuEL3EGTsUhMMBZNonBrLmCrZc4eHDZ9ciiUAmeU5B7aNvkbEPhekWjtJNcHdL",
  "key31": "4jmM5pxQkQ9ymisdjSgfp57uXD44i8WaacVct1mdoiYBViWFM7Eecdiv9uANpfzAeB3MU7jMgqtE5ywTFTBy8AhS",
  "key32": "4Vf65j3nrsJGdbdWNEAPpxUvxZgg9TV2tBppoYBfYRxB4NYAEbKdY5uXjuRiwgzzJGz8DEe2yYU85XAn82XzRBmJ",
  "key33": "659uoZyog9oaJv1wHDfCifAk9efdxZdvCVdCS2ScmoTyfqLz2SWZj2ncWbSAHXRNQhMvmcE697HREKct7yp9mBns",
  "key34": "FZSbxE7JyUPsenn8QQ46J51hYvVodnkHYTZTAiBdpAFnmjYGuAoQtZxL5j7uvBSKwBd9wvJdGnHpdXwKCGbEFSR",
  "key35": "4tWjC6TjuLs8Wvdb6oPkjVnMVzGPwcfik1qxEjVAyVbDmGfGsRYvGym5GmRi4ayPu2M8z8UrofMNXxgNPSQbpvk2",
  "key36": "5JXbFTEBnbRRcV9z2rt2bJdyMAJtx3uZCMFrDFPbrPW9Fv2Tv9eF62XB2Ya5sM5pev7vm3iCxHBowkCfEDRoe3mG",
  "key37": "4ksH7ZzDfhyejCPJoaPpUSVKEH6vqVkxQ2vXwSuKkerVZwuUybApTwWAdaHnJ4eCavfpQZNcDFJNrPxwgcnJDTZD",
  "key38": "4hJRi2qi3gpxJDzdxUHYsLjwSfm5vKiKTFEkbk2UqcTp9hdrHJCZv7cCyTd1ZgieiY5JJEWCJCUcJWDv5M9kcmy6",
  "key39": "2T8dVeDewTtRCSzV1fRywUwbyN1UxKoTNg9vMcUJZkVdcMSQZiHcMjEJjpkwDBomV6JbxSVoVNNCbdhZCWMhSevS",
  "key40": "3zR8SfHbnKaXPr2ggwZXgNRDTNGLoSeLWKgjnGbBtvjVzbGBHYuhsWgdC7jbwzYwDyPQPcsPyArnwwLsgmdQiDuP",
  "key41": "GKzzhz6d2hso5o2xHgdn2dnZLxNe5pr8D14QiyE6qtGhob1SXdtNE5ovCuArgkLEfsbA6W26rzQimAs83Xyg7ZD",
  "key42": "4U9UKbw76YYyz2DtWaGkV79jHKJVpcsdTshFnNpg5vg2zaqoE4GWPA3ZJ1vT758ZK2HAfihpr42dNYPVcs2NgDoX",
  "key43": "4A8uoMskYVsBkUS8jVLZvqX47rcaJuZ9Y5J1XmSQaFshCM1wA3BBM2kXDwMRt9PFy13YJZQP4faeCuGy4VrbKJdG",
  "key44": "XxQx5LmnZAgGCf3QVorhqp2aTd8avLwbgv6GtKoLJp2NenfwSnKUJaYKshQK6A86Bk3KcWwRdPBkCmD2LRfewgx"
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
