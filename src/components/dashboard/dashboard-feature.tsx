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
    "4mF6v7QKqRo5qZKpBGCgvHDVEDY8rWd2y9mYXUV45Dy49sE6n6dK5zMwhSvVW1Ju3x5E1w5qf8qfLBaxGxES6y5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3S3w6Ut35H4MbJacMmsPwvkM6ANZYCYtm2uwQkDVMXsx9TB8yE7M8X2VuwTwK4sGRikhYJzyZQ6yTn3BijmzSU",
  "key1": "2rKe6K4iLwvjiWkg6gXRHjErAC5MYWZdy9G7NxKSkNULUeBbe1nyjjWdU4UhnPkd4WM3wBkfaXFvr7eGo1bRhckx",
  "key2": "MemxTYFeWWznVFDpbbE1J6Y1Zq42cdPp6ALtu9b2BEheXtxUPyp9i257f7JujgqUdM9YRFkemXK6r8EzshPH1N3",
  "key3": "4b4Ub6zJFc9KtEB1qoXj8pfccXK3xrfMaEdaYesgFc63TWXB9j4HfugzcJcY8iEx5iy68VbTWo4oxG8ddf6bL6gS",
  "key4": "4fiPeKcatA1ytGxPRhaQSPGMu78yM3iLm7gQgL5abmRKskN8PziyHFKjFWAMUa4ZBcNfuchsDyBWLFbdnS3WnUYs",
  "key5": "3Cvi3qMj9vS4YwXN8s8EvQA8TEQ5hZnWQQyEB8y7nRu8hHtpVwq56b7b9mdSbcp2U2EbPZXrgA6HYgDnpniZ6Ao6",
  "key6": "3hjtKRggcFh1JsVJyZqbjuaKPGXRz7EKuJjWey6qHDkjHxg3x9rT5KLuBGywMyz6EnSnSKv2peQU3v5gRL8D5cLx",
  "key7": "3D63Q34ZdpSYxfHsH1A6Zcc1HHLLVyUWWZauEJZGLsXdHy37g1Khii1Xp2UAD5npwv56yFJ4gyWksDrv7iaRjHXe",
  "key8": "4QRRg79R95SbWZQtyVxCMynVQNfHAVTWra5cQtwrVwUsW1A1twk2znux9tzUMpTgVfCZanr42sf4Qt87tiLNU98P",
  "key9": "5KhrSjkwadx5tgscTwYwK4HtvnskKJ3cbjyGZdyXMFogwV9b5vMmZF9Aex9mi12NGj852y5shKkPxPupKKUK4U8w",
  "key10": "3FrxWYttVmw2MizA6H9pKPVe24jzvtsXPevoxZ2WmtoYPFNetWnmdQXqeUQjhpDCmEMjW51cQqDeFnSHH2Aav4jq",
  "key11": "5QG12uAMKdSt84GYUwKU35q27PCPtVezAVQPAzTjHMqbTmjS3HAGc726nqcNSEJneV2DYBw7JHSq2aoGsu54CvSN",
  "key12": "51F1orke5nrJ4jK9YeQrt7Ten9rdL8a6ppC6c4eHdDy56d16AT1hHkPoESwxUqZCSDprs7Lht9q1oysdcU8jwqbe",
  "key13": "4iURdsFbzCmhL8bAVQuBS9DUBaeHwL64ALkZxW9Dyr94EwTDAtA89VPDoHjoUD6r7X7VkbEskCrUwk2oYJLirXMy",
  "key14": "xeSjKHKTL5wmrkRLnWU9G3BTy9MRwqX57hovxWvZf8hyKCYS2r9JugPVKje6hRmhY6rTGgcNaXNM9K7fJuQFLoT",
  "key15": "4N9mdEr32ES5E6RfWtdGJVJdwbcgYPFLjdtGARUQpGc2T2QUev4f7btNu1yvyQRSLYE19Wr8HQfFkVysXLcRutxT",
  "key16": "4iBVvjWjEy7ZXGfrUyzyZhEEampZz854RbnNcY8SySBe4kp3Trn4LLywhTArXUh29U3JNXhuoLkgCVtRfGWcefYb",
  "key17": "4aJeM74Lik1dCYJWNBGcgmPg7Um5L4sE4S8UnMNpFM5KQRhJeA7C5SAjQRAnbtCvE6wdmWt471Zm6iBs2vK97vSA",
  "key18": "3UdauAeVNDZAM9QuK2KQwFkRVGSyzcuqjRfx6KtC84WreC6M1aaMV5wxPd6fv65584Whx84qonUTKU86TNtBSTFq",
  "key19": "2Dr3Qautvw5KiEYJrhsLiEtuwXcC77rRqtULRpDYJoaMBeB8ic7oRGUBJvDy7uny59z1dqjLrEzKbyt7s5k3uE3H",
  "key20": "2bF45coSdAR7NsK5yNGmzdfHbLhz9ePmpKN93DBKrZSc1uxzYPDcdBebSvP5yciTBgVQ8FApMV3cXhx18A6PMaU1",
  "key21": "3U7i1oHZCw9W45i8rkHdD2oh6WfQyEwjrb6of1yupYt14iHu5FbC1FrKTST56imMT12u6M9yycieAsZqrFW35sHM",
  "key22": "2CRn4hBVedGQNVzDD5jcey63H35cg7BgBAcDLgdf2tYHXYuhyS386S5qtCppNkrTKUf6xHbNRJQGBH6YMvheuJS6",
  "key23": "k936fT52TYKWubA6Z6EVDqRHdshvaNeW9mJe1TEs4czQS3kXtVe39jhCu1nPcN6SodzgdERVQutyDMHp8q8YPbG",
  "key24": "UrR79asJZgQx1Q9AaJXQxmk49nuz5s6CMd71pzEE5R9NhGCX5CrLABN2rnxCDaNdEB9BgCK8QaGhr7s81do9FiW",
  "key25": "3bKmXJjoTJmuuXEmAqGQ9tkXzyG8MWGcA1CWN2E8aaAxV5Qcf7yL9wfGxhicLALJ12AvVXAYHeHKdKU4BKyw5QJw",
  "key26": "5cExkzbQ5kaSbJCi8yBnhqjJB7KT9kT22GN1rfPVhXagd4Cvr9etohUD6bCGU2bssA9wo9cfsJeYsX6u9SBVK9mA",
  "key27": "2n1aVc8ftUVm37qebbXjtjdE3rMQuenWXQhtPsoj6MfzStSU3urQjodivgED1644HJPeGXgeb2X1WiKgKuTpEUjW",
  "key28": "3mNmTFTHtwQp41s6pLSfWYJuBFmi3kXysE2iyLQLZ24rLuPgFMEGLvSPxEvgYsx9d2w84KJcd4sMZuoQkfmseudg",
  "key29": "5c4J9MUh9FhsmsiRmubjMANfVDmgNJjLVWCF7ret67keUBuvroB44kYMQPkBFnh22jA25C9Ua5vXFUVNK5WsXDEU",
  "key30": "44cY2b6ZsQiCxstbUTHwBSKcrJcs431ZiNjDjWK1oZY4S2YmEyEiPriaYBc4tVCm6Uobfc3aHTcLJ6iYAaQJziMX",
  "key31": "3N5XFqc2uY2j2cYvgY91WGaF3HMAC7rKhGrrGhgJUKtMfTizJqtqFCcuBGD1mt6wqTgHGiQ1mBtBaFAatrfB5csL",
  "key32": "PC5kbCgLiyuitn8QPEWiTxPWxVeSCy7wjGtfDJa5zLFLR4Mbvz4XxMU7cF8tvo7D2puMJzmEVr9B2WXL9dvFgcB",
  "key33": "3Y7DeNLKfiNbvbjy1uUcx7Jng5iFcUNHvNufrfe6KTNfziZ2rL6gSQ1dCUHdHCQwqaWMyfHjNzJzn6XH77H5y4AT",
  "key34": "3Tvbw1hKzMakPdAKmYRpEUg5hzT9m5dPXr87wzGghSCkHj2HzG9qX4GUm6fheiJ2yKAEWpZHYLiNSCK5cZipoSSW",
  "key35": "3JGReYLPYMWpWPqTr9UmoWK7DpUnWZ3Era2VfkKpToP9H4MkvcF4gThsK1H2szGyeV3F7XUtg2py7E2D5mJvyySn",
  "key36": "3Da5YL4DzZTKiCJHe2ANWedXAft45Mc7bo7cKMnXi4gQYdMiMhTF3qFjqXRiK3WEBTQyVKeffAv84iNot82D3uU2",
  "key37": "4LYuGkX4f2tYX4iXprMp4qTRVobExeJNAn3C6XFtUw7VSJLq6ucK84uHbgJ9SKQJ8oTWYnUy4wCbrjaxjpvNKPJd",
  "key38": "5RLqUNEwLjhdkCubxE1JVsSU6XhJq7BaENHodWi51zF9DRCPFEtvbpZx2oDvTBckERLfvboJQKRcDvpPs3ZwMBLM",
  "key39": "UoC1BarJwPtsxRJRCYygz1FSZseVmLcLsn7pu7LhiSRnMg9tm7Mqhpb56zvESEE5J9G6DxN3n9WZh8ZApEH1wBa"
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
