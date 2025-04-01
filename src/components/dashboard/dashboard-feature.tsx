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
    "5KqyFiws5nGWNZHosdeiN6TDZDTHnjwK1Hkh3howLiYKoe8BEtVjVwUm3V3NttaSQv5E1t1bLoUkLLqVGXxM9Z1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hPSAbeX7A2GXejf1wXHVksfk81PqsPgBcWra8csANA8m72xQ1mQYux5RemD2FRiATeFKyccWENrEc6dskwS1Qyk",
  "key1": "acYfmV1PqzoFkGBrtxuZgrbignU9uNGvnKivUCciKGK2aQQXxXruvjMN7krgvfMhBpfsTGSPkcXNjbhHqVfsuE8",
  "key2": "55cXeFHopbNZrMbH379DLGVu5wdeU5Lz2k6g1gQX5LyLVX6yfZvFM6VFCFHSHoEBaQADdeDqHjNbVd1R7MRzkAH4",
  "key3": "2K9P94hPfFURByGHzkZQGxcLqu7AbgyebFTCLU3j1Nv9XE8BrhdRJpL2rbUWsptFJc8VYPBtFXEUgeLNvvrcbAm3",
  "key4": "5FPDyUr3mXATtpJDqdd7KQVcwznFRuwBo2HBMvJwmCT6g4scWyk2pkW4pnrw7ZkHgFj8f2YgW6XgDBq2UT3zoWG6",
  "key5": "4FtYvZK8D5mtZ5q9T6zJmC8FrPQyscTEyR2c6TcxGzqrCT7zFx1QVJDRRocFpJz68NkpKRR35Ubf9F4iRuWCtXhr",
  "key6": "2kva1id4FMqxkWsE2MMjhdGKpe4eP5MjP7Umf4rXSfjgTm8sN7fzr79jfcoMsuTMZr4AeyaqQUhsFK3G1jjuzMoF",
  "key7": "62hmc3XJrfE5aH5LMb9TR9XSU9M7xf4rQ8zC5gYUGdrJUeVHaYYvskKYvDorLBkAB4RmdSpwpLyANPtLXjmuk3ui",
  "key8": "2jLfjpiVG8k43GVEiZaWgDo9hAjcAoHbthGJ2kD5WturmCWU5L23e6uJB86o5QTQKfwYkA7CKrMrgts7LAFpnoHs",
  "key9": "5tn7oVmyRPuZbJA2Q9GPewCeLmGXCc225rKxwxYAvCsckV8uTc9rU5YeqeKj8hPFLCPQ99TJqzmyqRqHdDK29s1X",
  "key10": "3ALNY8G2BiG4zM6BA7z1LTftyHKCSDC8HaK6UwEV5d98K3mVopunEmHJzkP5pV9jVZnXDSimaXFQcU6X9R226fh8",
  "key11": "5Fq1FbVwY9w2VtN2PdA3qy6azxobRFy5ZHpTQeZKzL38XXm2BTYr6oBVrmivquT3cB1oKrWr6wxiHcLdmd1MPUVR",
  "key12": "29kbEouk6RBuWBHN6YSdFcnodrZAepEPTAnKDSod6hsuW85soEqAZKLV3FYJ4oGACKh7EkmVTGfPAjYsXQQVTA3c",
  "key13": "4rJBr89zPxJV74tzK92PxHqAFqLpEHpxyNLiB4eFnAySqPRmdGbsdewmmgoa3qq2j1333WRK6zDix8zcuDHzjYse",
  "key14": "61WYTzX7yr1r6vzhbL3AVEFYKwAisQA25arAqd8Fb6KnXuPvRL7dCYN8mDneH4YTxJLbBgYjE5qjJB6ifiusWn7n",
  "key15": "63XhWYHRttRd5hWh4vLnkySC2QFF3Psqzu26vqth6M29mZgukCmqud5VZ5QdvKHRFgsGZKEPcWZQqj2ZWAHxvwRg",
  "key16": "46HgiqfvT4v6WL8sraGLRQjzaQZAES7YvNJFVadmXhXPeFDVGmZNK6qNkTSAuEhoUuvtzZWgNnWXNWEYpmcXbDGF",
  "key17": "2esaWXvUFSkV1fYTyE1majBTSbUL9tEVGhpsPTifBvM2xSkFsPXXnCsCicbvLr6rpX1wmDp6ptUR9Lotf5EkbgTi",
  "key18": "xm62ujcjQZeYvHsFNvAoAymGjQfwdMRMcHKK6S1vxkt4SZJxo27adLCTMHi5NZN23Jb2Yyvb9fZr8ENzAGGj9Y5",
  "key19": "2deLc3Mkc7g75LvuWhirMSehMpnwehSFHGeZ8riPbFMbv9fpzgbaNNTp3vihxY6hhexkromHe2P4rBxybs6t4XQC",
  "key20": "3DVMw5LUZ6jtGdY3Sg7ctXm8spLL6GNNUU2U1tjHAvZqAxFTPjASkQdzWuU14QKvNN2AM4vAH6jhqBpxGZq7q5N",
  "key21": "AyVr7JaWb3GMdU2Nv8UUP8PHfmBAVyYsUUThV143kfHW699ja5EDWVmAZbRBVmnrmukhbv8m5bVunvNAm9HTyfj",
  "key22": "4XpSbnFXW8miJPAjjkYn5CrPEmexiwmeDLHooXecbibzJ6w4L41i4nyZhym7hgVqYRA6uyYTqL4T6vVZXuDcspXX",
  "key23": "4oKfYqviXX9QPhhjC5WFMfGgQessDSDNoaTvzBi9TqrEKYJVsoaxY7MMrbvZbmFFJM6RiNDNRstZqXARYKmFQr63",
  "key24": "2nXWRbPqyGAvifRjHphWjoGrdnqDvxe7eHSPuH2HHyU5br6bNtaSg8HUJk274PzgPS1JGKxuXe2LJkUyFXAsd2UW",
  "key25": "3pLys1f2uTjuXidFcAXGZCoro3cmdgWAiL3oDbmB986mec81taxFNpYEjkXLoSWDNifuUqgbHq8pT5x9WDb3UJEF",
  "key26": "5m7pYugST4rLh3rfTiGnj2RbK3fYZbYoUDPCvfVhq2tNvBdgaeJVjkWteiVQBJVWMEE5DoucYkERYb8uKzz7uMxk",
  "key27": "owGuDhG6eMjKzfxm4jwSyujbCRdZ7vxj7Tc4S34SjyLNpjf9gEPU6n6Rswjgu5Y1GDDze2h1TAQWDpPp5G49haY",
  "key28": "3fM4vGRxqDYUG3AJvviinJQnyFSxJmrtMSbwMqezQRyCWAArV6kCpuLUM1m3vszoR1BTSYZhznCX2MjePmRq5AJn",
  "key29": "5py5XYAfzRGFwsH8UtTohxggckEHSe4Q3mX9QMae4VVy9vdmgJHi125uSswgiDTEucqvPKi7itbxok6r5c2zYrQW",
  "key30": "4Lki9mPScTLBKZfePwFXew7ayXG1EGa9w7wJfm15CMk1izk7jCpinPtf6NLkmz6G5vQvx1cXtDhPY6vs34pBqL9F",
  "key31": "3ccoanak17tZLtAsVCaBW2R2DkcTsfUZDBKLJNZViKFDefo9ckUbTmNtoXowBJpbwGiFHS4tutj9E36GcwefEpPf",
  "key32": "VG9QzzusEfcqE2yK49BLdRipes5ZpALxhdiSQfucuQne4XoY7vHHRPqNa3WPmNS98qa47wmN7PLiexzA91HY8as",
  "key33": "5N6sU8iD36mtw1L8u3k7MsD9JcUVJRCUJeuvbRW6z3n92q6Lt43ae2pySW7dbCaUMgGrwUxvXt3QcV81e3wPagaP",
  "key34": "3wDoKbzDjVhnT9uPR7f4tp8tGCCmTrUEtT1mAKsfykfi2QHN9J1dJstjKdvPy2thJELbVKktUCu2wp9G8ULvCeX7",
  "key35": "4fQMjBS3XhpKfBtP7VavZ1TACxxUDvxiHjPJhbKR5nMkedqSPiXoPmjY6JxnmoGa54xFSC4VwJy1xCzpBpFhHPKU",
  "key36": "2iPRT9iWkfWqJPBDMghnrcWX5ohvXG5JsDbhMvmY6JApctXmuhCqgQyvzWvr8dbUVSAeAZEC8zLQALy3nETcNbB1"
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
