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
    "3weDn7BM9tab4KA9HsKPm4Lu7o2xSmKx1x6RwfLbXvS2zFi29vmRnQN3NENtdk7giqzEBe78iBckxWJNC9rj2AkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WmdVn8Z662TAHDMtZfR1o9Hvt5Uw16DyLUqHf9JPtFEVxQxkwJDGTsHvGDdyavB3LRZ6bJNMKMvgqww8FTzwSDL",
  "key1": "66fUwni4PEqHzBPuCKEvtWBuBTKhPTdwsHaXKgi3QLf1NWPPHxLdvmStqpBCFy8YnVE5EpsgkvXrKt5ZPSDrBwGq",
  "key2": "2JWHV2d3vHQqDoL5Y8nNBLxnCWVRiykZNSoCWusVFK4qwpMub2V48dX3nHpxUc2bZ7hpApfrHEuRm81qoEzWSsvM",
  "key3": "2pWWBDbQaRXybKhAAp8zeyaxCZUM6d6negkEK3u2hfrf6PwzvEXBnHBGLfhWrUThjraL8vcSXnhKgagVN8NNgcRw",
  "key4": "4T2sGjcb3Rs8DLnKtcDrXJDk5sH47KBsKWHmSF8hpwcMcABAFw5dk461yYxYiuVcSoo6c1U4XzpZwYkeymLcBYAe",
  "key5": "4koVSWDxXyocYxoZPYy7gWrySyHkunk2aargYQhGTBmWQkx9UzyLFp8FPQ2e7JTGNyZVEmDusui8ckWTy4jTREqR",
  "key6": "5gFg7QsTminT6A4rao4EpVerLoMxmyqa8L5qM1dxYUZ5kAQxyFzucZaj1KT7JRqcJwvEz5Pi2NsHJMr1yF3ifGGW",
  "key7": "4ck2sjmytbsADo7tRScKYeTLx4GvsY66Er3hxHfuRaPnAiYf4Qqn6eNSzQHsvPZM7izTpvT1coNte2b8RWt2tgqh",
  "key8": "2EYKefKFGRruUdtogdM9Swtny5bcmEXoNf33aeachLzTWyYwLRE3bHoQNpjaVdXyYzcHq37rUnEawZ4mfeQX1JhA",
  "key9": "2mZ3qnEBfSVPHarUt1XufcPJoxVhkzVYVeSEu6TEkBqDXkcR29Hv317pbN5xM5qHWXuCFUGfRZRYtLU2UT5bP6K",
  "key10": "3vF4NxKvjdi4ibdtXSKvmSNj93s2MUxy36aFHDBaoZjKwQ9nqNyF8qsCAUfXJVUj3YfbCatwaoLZvSiJ1agKMVpx",
  "key11": "fz2qbzhNH9VJTtCGXvba9KeAPLMzdQeuMzmSwLHiJ9nhmYE2LpGm4gRf37hTk7T6BHVbyx8GP4CAv29NS8boanj",
  "key12": "2tudJ1jM3UHKxcQhm7mRMaYYr7iH3ntBxYbYA78vi7ZjoN1x6NGYPNwMy2M52guqiHNAp6ZRTjZ9Z2ac8BA5H2jP",
  "key13": "5KA9fnrjqxBRUzddgDZngPf2WnN6V2kQYKav6xroWEbWNEYPqPL9KF2kzH6SJE5AnBaNjoMEEX59nXfbezfTFW8p",
  "key14": "Dfqwk1zupHCttSpExMYipnM21haWxeetxqCaD6jsGoNXo3hpaq46ZyNpCXFswEyT15pLjvKqVxxzcna6WZ7wYcW",
  "key15": "23H4AiT2RiW3jtFPpuygwjb59HzDaJTs1cNuA2pmGW6yN9MUhY94L3KR6eKgaU3yYJ4NptXy6EcmeKKVyMkoRNs2",
  "key16": "2BagSQnHLdpJM3BxHcDWxFPSfxZEs7nzhpTTWUfJSo6YAyLYERunWRNDjehyg45J1LiRugqonCDZheV1bLMRafoy",
  "key17": "2MfxfjJBXerMsTaxpmBCWbT4LriheyLWEVYcZJRu6bVY81d6qUB8PbfyBE5cuiGvVNyuoq8k3gmze73DTuBgcSqc",
  "key18": "2uazic2yphKzH95PKLvXoYbo2d8aQVhDoX2XfGdDHxKHCTmSrHuFNAvGMSNGfzfzLkt7YpGCXa6tQvgtj5HyV6Ch",
  "key19": "fLwVqAaRoakqvWQh154qDUpin6xU57qZsmN6RGGrTmVYdsGBQFCYUshToNkUfqX34jTVXyUJ2Lk6VohoLhNHgCj",
  "key20": "3bHvT7wU4a9fRnL4mywVQxRZPMV6qPumUzAcRZSArDB3zjNnZmBr1YMeD287oyegP8Z2m6oHMAHjee8JCiZAKfvj",
  "key21": "zSDWFnL12WpCKKMk9xf1bW2bEF3iDYnRGpWR9KPeDeYVeWUC1KCFHNxRBohgKzVCE44fKmPPdHPbTszfrs4roUg",
  "key22": "HpohAVceSykvyfVCs2M7s17Q3Y9EzbSbRJAvFBzq3w1EYmWqgdT1HEaKMhupwfuBwy41s8ttSbjSTWu5DwyHHno",
  "key23": "xGnkm1rE6vwNYW8xydaTM34BRrkLqfsebCMgXNyfm9PQGFFW8iwL5qpRH9Z8su6ERXkUgjxCK91v9ma58MHKJHk",
  "key24": "5vgGAsbayLBPCAz82PbsRm2xvxgLiLgo84gqdHS4ks15FmafcwbEV4Wj4GKR88UeWeeAJeX16XqjgULXsrujVBhg",
  "key25": "5P5mJ9zJpA6JW2Q9dTsjUcLcUcUNNBKfySXU8daL7PbAkJZLy2GvRi6N5Emn9WgCzm7H5TUh6VotGtGkiQM9MbKb",
  "key26": "2PQ6HZBp8BqNNJD1yoTF5Z9TVDL63vGYxKbPgNBkefTi9p6rTW4z82JkjMPT9KJHYRRHgssjeJdmamRLRpvhmkyw",
  "key27": "3aX5oLiuJtkGh4PG6xS4TNnsGrm7kEZhpjfzcaREhxKZEp1drgZsAXeoobrwtkCuTVFRfeEeUBA4NM6edg4ox9dN",
  "key28": "TXQdoBKWPihSU6nkFUMEJbuFyihFD9jivY1hGQyyhNQUURenNeXhyXQMkFp4AjFcwHyvaXDhcqB3d9kNrQUvTBx",
  "key29": "5SysGnMBy8thHdrFNM49bFeHq4oSYrcFSHYCm2YK5cyY5jHA9mAnDX7fyj3fPdyJaXjbRhZbCdK2zwryTx3XCUP",
  "key30": "2pvhGm2mPm4rPMNCxBcEFqyHtdBK7M1tFY9f3cpj4NvQREgG4aYnxEwA5hGTNnkdkaAF6zJ2imcGFbg2T7XJ6V4V",
  "key31": "4SaL2fsm257GTP8KCDAmbDm8EZJHuHAuuVmMcU2c9yEfAQ9v5ZWoQ5UDWfMwq2ncfVsKGbk82T5tukerTkrsHuAs",
  "key32": "5owbcDiUxEMdSmesS86X5Ssvb21kzBJCA3DPXiZAy8atfsRePNaVLuxBMSYDv7uhFkbjPnN5vHRR576DktM6jgRY",
  "key33": "mFCouFQL7ZJZGGJd4ZVkTFXKwYhqFZo3m2U3W4zrAzH69dqcjsjdgiWzxYwWogqS5GT5VLhKjQFhAnFXNnoLDLE",
  "key34": "5a79MwYi5gJxtrch6Dx9PWP9v7gYAeSMEWL4qvewjgQqKTKbVySo1RK5STf97Hh8VEZJi4NnnjCvx4BoH3nn3F6C",
  "key35": "2GTEZtNMDM8xU2YrsWFAqxavkCpS4bU7BPsgbkdjtWYhq3FC15BVT33pFJQd2hFCtAS1GWCGHDjnve7E4ijUcudg",
  "key36": "2vjHhYe6LBnDVZ9DAroCYgvveJmKjAesyHW527NdcJKZkEusLYLh97nbrncNNMXK2tuaeqCm4scTU814k9C3TPkG",
  "key37": "4Hr3H18nUt6zFwgZ44kwKueM5SdqYkJ4chqWApgngPpg1VEZhv8dijay3vPBxjTpoEtcv7o2SVCmz2epRWaX2hf4"
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
