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
    "5LmSrAeF5MRrjn6FTRZzJoke7B7W6WwZ5uXJe8xF3Z8v28HVVGxpUuARw47ytGtnfrENXAVzCEMpPKdLZZeftNKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8dhA5QtW7RtLkJbYUyvd63NsK41jzKEqGmZj8ZGuLCgEVq88MnawkbCAV4vcaHLjdXDvSoqBMNWBVRje5KyvAcS",
  "key1": "66fL3PAZ2pKjmHBkoEUV2JF46U9Uub5btVsPtkVwJMiLkQcQ3GXzLnwyQ4a9mvsmCvctahj3x7rvmB8wtiXYZDCP",
  "key2": "SWNyDM9KWpikherDR3MfYDXZpiSuekr55BbhzK4gEJVJqPCZhwuXZ4P7Eko9PNLyzcksLThr1H5jt35pEdTAR6n",
  "key3": "2EdJPbmTxnigJ5APkLS4ezi2uD7Vbje8AAEdPnmQAsmaDdDYh5mpeD7EvPCf5pLV2ogQLfMbToQ7pmmJnZjsQwVW",
  "key4": "3QRkASVjzY7swbSKhyPr9Rp6wHPT2VLVDXbWk6c9LTryEgFxPkeieaRvTgaA7yLxoVS22M1E2RQyMemmkvqPCh5D",
  "key5": "2L5qRUeYgaLRAzefHG2rHPz8dP3X4QoNTK7WpGJP6pmMPNPn4MsaKUrkzLNJiXXaWf7K71XTquj2uz6DheLeeek7",
  "key6": "3PFQsC2L6NWRiJPsByDLHjVGPBcj1emS7CbXBrtThzKBbTb1jNqn3mXY3FYsTPrvaKjVT7LG78bhuFh8TARWmWCB",
  "key7": "Vubwq4c1BDLGX9wYpHBSLDdgRcwHqtKvwh9Wojs4v3wui9Kyhc3Me2bYkJdAeDi5HQ7EHEyUkAN7KJQPf9d6TDv",
  "key8": "3EfnybCecwyg4eUdyhb3td455i6SuFrSJRBWPQjBdp8imCmbUG5wXH7WKgkPTgAbMLbQ9vKKmWypwon7kPWi3P9m",
  "key9": "4Kuano932XeNEHqrMiqYULpbRunjXXt9YkT4AhG6BMkoBhV1XnQN4gKTerZTaHsG5YfveA4Qtrs7QNDpFHaUg9D4",
  "key10": "4WKCrpKV2U1dz6KNiN5mgZgimD3SkY9vkaPzHwTC2hFjYkhLTE41Wr4CWhkqbKyFjQJPzvNe4oVyW2pj2qtvP61M",
  "key11": "5dDbRhxZ6oX9fMBgx1tdFuDimwwwx6yS17RBVFcFYwhH1HEBwd4v1fv1yPEKxqgYGzLNSpbDnV4scLiNJHnRfMAk",
  "key12": "5sCY7CiCevamBpWivjxqbe15WxDFe3mBDXmT7Y9uywDJ81MabPn7d3AYm8QmiSU7EHjqMBQDE79X4yZkFDptC3nk",
  "key13": "vXK64SmPqz1CKmNtCruvq9YgLn3g32DSi8fMGBxRtz6E96uCkKhG1mr8MvVQ25vvYPfE5F77ZJqjxiieb8dtfN1",
  "key14": "x2YpmKmt4iF7FFhC9HThT27LSbRiuHvZZvMpiWV8du8L95ZJJCkwAP38PauKjQFSKMcz27qDxWa2jebQZZBoMRn",
  "key15": "5rtau6FXUgjW9JGPiHDi35coddJpzbPEbUqBSTLmLQFsHyVYMm82agxUtZzpsr3KTgHWFoSCfJwXwFb3GbCjZKc9",
  "key16": "4cm2BLo4NotxiNq3zpifxGo1oTiviLghUuibQ1Ziq8yhe1TXAEzJdxxcieFdLdZjiCDGmy9g1hdK1qYCMwUeeFwz",
  "key17": "3vtsNz2D3yjs5reshUS3KQdjrncc1Zch3RTtAxRoDqVLhviqn11wiusHxBzDb8TttJ6L3ZP9U91KNKsHk4qnfXxR",
  "key18": "3tEiND8rnocbp85god4kcwehbUEywVXwZMbGo5hK1CjiZt6g88TmSR8kNJTK5Lmv81zTFFdDtoxtFLSpV4kgJpUT",
  "key19": "2bfWuzjMHsSv4DkRCsuSZXWmuG4fLNEDLcQbu5GftrDMz7Qn5y8K6jMdvUymNwvh1RqXRk3DGVvvhcDYx2sorUH5",
  "key20": "x9WzQ4Bxky36H92GDQhLyDtuqBj1TkdGsUCCeR6KeTvXDr45vsgVGDcFjHjSxrrQr24ABkLuncsiKxtg4jLzn2y",
  "key21": "5Zic19G7en92Ui1eS5rHAhoRvwfoCVZXFT684i75ZcDNFRHMoudEF1aqA1PXfx2YMKbYjKzkADW6fP57D5DXQmug",
  "key22": "2W862n46nmD82tGS7eS5USea7mTMq9Dr99mByhevMNe4NQgEXv2NUVPGzLwgpmUWD8uzQ2fPwR4o9cFnAjhW1Jt",
  "key23": "5uYVRnSkeEqS5BXRoKy8gi2bZ9yHLZgvex2GLhzc2oiedSGdEL11PttZqKJqdjNkCABJC2EnCQXMWX5zDk5pkYD9",
  "key24": "5xmbYRs8rhkWKfSUJVMnEEdLiAt7KGqMV9huMqvyJdvbY3SHi8bZ2yFBgzegPSAquDaLjHerUP5XG4qXsxLXcd7L",
  "key25": "5hx7Ji7z9JWpxdFJsxhf99ctp1UGUQ5SDnaC7D5Lp8AG2W1myRQMusUWVbC3aXcaEf4KXcKRxddANcPWv1tKQnaa",
  "key26": "2G6uVTYrJS9TY6SnAGx4JekjcsJF2W5CAx3XCAhGzvf9kNjUVK2HuWqokFMizyPJmSvhwcWnVNmPSopo7uA7SMTh",
  "key27": "2bZahSBX5fM4Ydu7EEF3B22jKy5Hm2covoNET3HgHUppe8Y4ahFfQ18RyUyzPCuS3KYiRSn9yCZVqxtxVnjehCjp",
  "key28": "5C12DhVb9tJdQ1VParRr1nA5cVaCNfUn3ucLTeTdM8xG1a3yAxhbw4aVR5Xwn5g8D68v2Kf7nx838iW2zsEMHcvL",
  "key29": "56cj7CnzCYUizfZKitySv31gRZAHT1nTJ38eLWAmsy79d7ETyLV5eTRANYysyX5V3hy12srqy65BhKvhaZhuNxKV",
  "key30": "5gGD2LLReGpwF2ktz8DCadNzTsL1n3NxszSAyxy1JsvNEETfyPaH2y14ZX2R4zCWnpXcp9AEgKg6PdApS6UGbxCh",
  "key31": "zbw2vcPUkaPKcq6apBpgN4gAmoSXUeBU5ceYEssYck12vCYkL3rV2tnJvB82zuCnf7Cviykw1BDFqVzfuGTxpbx",
  "key32": "2Ex329jmRXxDz67Qux2Jryf9YV3dpYKCGQiRsDJ4ycHLeRyrtEK2VqppEDsJhGvjowByLUVMJyS984hTEcbQt7CA",
  "key33": "nX46HyXWbgxGhnDw45hYtK2THwTb4PpUBVoN6PAzKZdDBBSBTkCzYR63ovHaqukCCC7xTcj67NxVQqWRrrSfXJC",
  "key34": "wVWgmCzaXDXeVSsRUVDAuNUk5HMdaHrRyJUUcWXr9HZBHYYkEMffF18cYhcpsGXRPVy1E929w5edorspyYqzsTn",
  "key35": "53BNVTzB3MKSVhGS5WDw2reUy9wuh5VkjtGCgHfnsCivfmPNqow7radGwwDFvS6wmsyrTFUgVviSH5Ui1arNQHQt",
  "key36": "kyPFCPSavv5KWKVtxLEDiTf3nrojBcW5i72G6FFSChfQqdrBEWYDrDWTMLAHjo9s76AjmMLNwXPaMPXQd4eLybN",
  "key37": "2ricnTZmXj1NtGgTcNRvUrHBCNeWWepUuZoq9R8jt5YEdPUcoP4RuNuzYHrW6v4ZeyRQS5Ji4qdjEshy7Usu6Pzm",
  "key38": "2DkNtQtyMgGrgztXezW8XWUQaserdaGVpsRriQxw6BmdVVSDBzaXRCMVzW34aPoYzVm4jfecoynEVCXByBri5YE7"
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
