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
    "42pkXgAVaKNiF8XTnQ5samUSXAbE2qc4jeYh6Udj6sPtooFZU8KJ65fqDiULtGmAXEBbwWH8RGqkxZ9gu8xYZUiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fDNvEqjPKzYMpcDdinxM5suedw56qKLapftbMR3V69kzTYMDeQJ9r5SjHbnK18Ap3ecxmFqhTXdmRdRG1GJFALa",
  "key1": "2CMA8w2xRXQweVgjvWNBhkrqtBc4Zo9VnWDLu2ewZymKraTGxMy1LtnMfhgi7qwGCyRHu8xnnD18BE268z3dLkdQ",
  "key2": "3ikh4ukU5pHW5kkj1cKjcKGwjUXFKF8WWS4rR3dnwfHRQHq3LaJZkWYtV9Tc9FujrtWZ2XWHw1QBcJELbgLcBuVs",
  "key3": "5QQQVo7oKhyj1auC1P1gwi5T7Jb4U2oLTzrYCWqyR9ApquR7oN4R6MQknVNNSJqRHpdVWi3y8gSpa9EERq2VRQGz",
  "key4": "2oG4rQuzmKTsgHtQ2qkjDUrHEaN6odoJmMEKuukA1F1fYScUSMxojaoJyZaFXKx1idrvNAxU3NEnhCbXXV2d7Msb",
  "key5": "5FyM7owQJeyWxujJT6D31bTUmgbfsR5QjmixzYz5WcZXZ4u5WP8e5dcpyz7x9bvnmwF4TMUrzqxs7dmtRzZdzXjA",
  "key6": "5GgrpyUxwqdEnovqGcfZD6QvpuRUPCfndA2KVaZnDFcoQcd6Es2pJdSegdS8WVuuBDia4bMiQJGN4kTfmrWmxfRM",
  "key7": "3ygBKBZ8PsBAhe9Nr1LJtN2xdLD8Vj1y8rYkngkdHPcahmhYShtUFTXse4HCctropMvNSCxrDANw86Zo785vyYgC",
  "key8": "4SHdZp9giFKcPCZBreLb3d8wxYBMCkTS3zVC7a8XUpKM7iHP6SHwJWwZz1C7e6MbxRFqujzGy5oG6Js9Fofkq2HN",
  "key9": "3JEDwHiSoo5oU8FjwuxbztRXNFgUANsLDmP3hfJFrcHBz7Xj6AMZGGe6jRMaJNWWmAvtZd1hgtTuq7wBcf4QJBj1",
  "key10": "2AG5Tso1YvX83DdCBJ9BpHzJhDUvL3m96KaUEuf12tZcm8rEvpqoK4uhPzEzeCZyjmE2BZjsLDk8wfbXSpyfXoTk",
  "key11": "5hcRHkt4vseh7FeECgsZuiEGzuxATrXaYa9V3PAcustP75uEB4ZriDTzsM2C5THE6brkpV3EYXRsCJomfZKBZPRg",
  "key12": "3B4SMqznfbkjeMNnKQ5w4i6iGAAa7aQSn2ywDdttBAjGu19TUfc2z9roveFuf2EFy98qUmUbpbgqdWGa2mbkALe5",
  "key13": "2ZFmRcCjjWwDdnw3emysUkQQAe2np94yjv76HPjqH468BY8VBfe7WGUZAWGvuTcRC6tA886ATPVNjFhaS19NMJfU",
  "key14": "4Th96ZKKSsnaneRks2KhgHHURAvnwifyAFmTKdeqLy3qQnANr3Ctvp7tsJZ128ZNicd7b6rZ9bE6U9vEkGGWm3EF",
  "key15": "5YC2FQnxY6oo4wn64fzNrs8xVQRD6c3Ehx1EAomxMJLP6RVunVdUSfT8Qy8XHoiXJPZGU1i13WyokrBagxzaFjfa",
  "key16": "4jjcuCRcCXTrNDnhrLrqjWPYNuZS84NwzjaPTwX8YGg83Q9izuq72vLgwuCLage4PBNuPgSszG98zFnhUJae6Mzo",
  "key17": "2ZG9xkKsPiqSsYGiHFQipxFUiSBG85e99QJLbRXqgGa6LD9d2xZ1PikbDqbqVRdkScYuogCVMRNoknZoPyghHag2",
  "key18": "64ZkcGXaWmeHWG1SWixvTyUDPrgtDZnrJJTRWhqyDAKdQyH4E4cHtQNfYobbyqys9VKDs14D6VRNmSEsBNwsX4Av",
  "key19": "C1hqKcfn8HKrxeVxX2Y6i8Hn6ThieWAowPyqVuAugRHX2qXg7snfuxr6v8691tbFxEYsZ6Uyd48rcqwrFxyxeiG",
  "key20": "4QyoFBUuwUYSr6dt1C2wuy3ERviHkfA4EZgmjobRsUbjeyXQQTKzYoCYxRXJzQ2KN1Ec39vHqeu5GfVtpMuEdCuW",
  "key21": "2wQDwPzvdVF9fvFT961MHsFsuHxVo1psjT2EAoSnX6Da4PZvzNCZ7Z1sGfD9rbs6iUY9eKw3yVt2hdRqfxDFeV3P",
  "key22": "4CEya3ttewSp71R9B51oyJ41SPeBcfWNKMXMEKM2Fe1WSWzpaGeb5BaAftvYmxUcDvqD2kfnYS5vfich2UwdQBfZ",
  "key23": "4gZoMxYfJjKxvEtpEueeDyhys5ZyucQAdjTjLWP5w6fMKtEVxAzmSE3SvuBKATTSQcvBAEVyrT4hjeg61tzM5yHu",
  "key24": "28JXeCwDKFRZPMPZbjRek9yhFJPjptwFoYAJJux847iDoQCVD5pikfP9BEukEjjAoUkLGstZy9YsWPuZ6xLnMdAf",
  "key25": "49C4D8U4V7t2oKDNu2PXx8ZpXomuTE6qTVKQxExeHZMDo4v5s4Y2397zt3L3MieCp6GbxVnMdW28ZxaA1GUC3NAB",
  "key26": "3WesN1a76n1yNFva3idUj66VJ534L8ynFbsDZ7sAcaL2bsvTkFHNTPpzdBkC6HdhS58s2GkTeciR1gRLQ2uzZmCC",
  "key27": "63QBZYsjyqR2MbQ2asJVHeVVqGrgYgavacB4DGvBrfmjzq1bnSTHvSwZL6BBURrbtZPzoV7Dh4VxUgxSdWtbtMck",
  "key28": "4GrrrQoGXmCPZcv57usxpo8aKS3f6dR6trxHbwy6dZtLUVju3ZE9y5op1KWhVVu2oCD1pVhkenjkzwLoeHm4fVVm",
  "key29": "4tgywwmeZbXBzoRF5z36aKBJRQugMVZBhUhdAwEdjwBHTnTMkuHeJYJTeeTvT5Wqax2QZdGSL4BMCkET35W3y6sa",
  "key30": "FWDS3HiGzUYoi4sfUcpeCs2zk3D3a7p6AErJULorCEtPzgBKmpJcsPJnyV56NCzhT9trSbXSFv7hmMoNZsjEWhw",
  "key31": "3FWNZp5ur5a2RiSShgqkpAeZoMr6Bv3Hf2DLEkYU4pgBERuDspvrNLoznmoqonhE4EVPqaMZCBFn6U8kbaor3wmE",
  "key32": "yRAaV9NPjsa9G9dvoMD55BTxZh441ErF3oAb6PN3rr5X2Tt5Dji8wr4ySR8GPSDK1TpKR6nTNF4263hSx1RiPFn",
  "key33": "3XhAh5B9ukerZnVpkPjacYG1cCgBNfC7NKsTrSmSx1PU3oEtoD1nL4wBv3c55T37oG55o6t8nWMV4Z5tvWHVy8Ko",
  "key34": "4mmP31ebLffHa123dAK8XPQ5FzpZwsgU78LNNzYMgj7Eaqi6efyZc3rEXAaZajedTwAFgtifbcz763YPc9mdAjmN",
  "key35": "5x9AgXHGKsjeR1DMTC6cmbxnVtmnhpibioV6un8oW3HLFR9jghMLYj1AZtVJZbALvVD77wQ486fjcsyFgEiH5B8",
  "key36": "4UpAfzvMgFr31ePG5Q7QZGt2xeFZjgXHbe31T7Zg4hh2Vu5BFzxft3FzQd6KWTcdev1XUGLRABqpekvpJW3C7zJY"
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
