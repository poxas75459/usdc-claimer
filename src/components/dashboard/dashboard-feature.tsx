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
    "4KadbgCBaRzULynF2LnEWE6H8Ge1iTGq9bhXea7iDNyfLxCqNPPNZNvmkKD6vkEg5kWu6MT7Yq4fEMzak357AWCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D1wYQL9bTanXC9xRwB5Xhnz1UJuxTnmY7EUVU2NbCTVSnUtXFT5efhoRzVK6BPewnU6Fr5PjEP4uTQMQ37SJjYc",
  "key1": "2GTjAVDE3xQPjTTjHTPSMkac4RyZxmR1iNJfpKgRqGC4uk5TfBCbJHoqDkrkaBfGAnDmzEwsqpBP76aERRkUtHNy",
  "key2": "V6mfDHiqtFGg2rXhsHdbxAEVZk3zKHLVZnNXSrURUtG1oGJrbLjhJSCo8efQEZWRnSuS9thyEYiuokWiVVCPXsT",
  "key3": "5MC3eWZwCtNK32XK2LqEjJ7eEGoCtKjLXExrC1oQo79H26eNSdNMRtX48MUZHDve5ZL5eVy9rUWEuxxCcPwqrgx8",
  "key4": "441orHbPdxgmW5579QmuAYP4DmLedVcaaF1AVEZrx3gXp6yV4wraFmbPkhqmgMPXtTv7CJFyyMwuCaCKcN53GJw8",
  "key5": "2scvtpmj2ka9uLSD8VC9tCbk3UyAR6SgTnfKh9qvNDn189LXoUB5Kmj49rqatxZzUR97EE2AgWnQKkMixxFaEXPQ",
  "key6": "9ddCTEVbWboteNo62WFx52XLn9pbWUcFnJuvgd8D2AQb6uEtVJVQp1MzwAr4WzMd2Jknjjn6fjJ5zrhxu9pzcwv",
  "key7": "3c69SthigRkaSidLUoLhj55HLwKDF4qUxiAP4pkYfoy1GstUgyGkf4Fb4BRmXuuD6r44vQjr7MZ3Bhk4tk5Db3DF",
  "key8": "2hL9yMmDYRwo2vhhiH8BkiXoxpzuDQpy4SCbobH3mTMrFK2veDuWm8wQkmafLRtbPL8bEHqNjcv1k4PHqyjMEJ3R",
  "key9": "3LDPHjDjgXuziyEoEs9KkW9QUHeC55ea8zLS7r3U23wsRkiC9WZn6Uw4WLw8aWykE1a21qK93gPChmEfe3dcB1LF",
  "key10": "5a73C9p99T385xgJGUdCU4PcawAKEy9NYf8Q3DLJW1g7K9Bt7pN8RSwkFBKVYM9Fu6pZXp9WzvDmEeHFjdi3zEVX",
  "key11": "4Pu7T7uYr7sFVNcoJLiQJkDssNbwkuKunrGWZSeBs8g4BMKHzRaHbo8zxaoifDytr3MDAuxSZ3ND7Fawt1r3qEVB",
  "key12": "4KtXPTcnFPLVjseHwppHadHt4A2AvN1AAW55SHagjrPYNLSwTnotPQR9DM13QhopKv3kYzF32KQUhdKsuYQ7osXd",
  "key13": "4JdmchKqRKyVrNXi55arxn4DCpVk8GQJaHHRCQ7uUjXUsvK5DWyr8nFpZrhVHHB6DLcc7yqEkRFfvt4GMTfFCezv",
  "key14": "PvinCx598Mx6XxktiXaafhrKFPUw3hs28BmnPJCFcqnHg953cvjXDmf1M82dxEKtQY2BLNmJ9tsouSCEkKPsz9E",
  "key15": "2k784gRU8VByC4YPMCL8bz7BU5iZwoVZ1gaszZdMQovcpzEuxhaMQYH5GYM8pi1FfiwGqtsdieWK7UtG8an75Hiu",
  "key16": "5vM163uFuvgCudAoMVb9suuuiKvjQE5PgmCAtEY6CU2vMduhA7fFyEHEmjJXgsTXJPJdkEXjiaBxp6pqQV5HJhVR",
  "key17": "CKQb87mhFgk6EtpB9j5pe25dcpmkM67nnjQMyStkFkBSTBb1EwGTevzXBEfSKijDYbzwtxxm3qAvuTnxyDzy5Ey",
  "key18": "3bofpLFGD9L6GuzY1bzqNgvQ2StpC4BrCuMN2tGG2KEL7pGi1pjGPFU5JAstRVaDrw4s9gUwKsNprVU669bL1w6b",
  "key19": "5FFCqZijTH1XbKoWCnFsMDfhweby7TGbj89iN7CcZgkKnJrMsdQGBLNC2D431X4HFWdBiVsruM7DeMXuDqTXzgFb",
  "key20": "2HekT2WMf3p99itUXotgzDGfNUFGLtgjrPwT1XQZMEt2Bacw83VmPqdYCaWgkdaG5zn8KiZe6Hks2GBns5My839h",
  "key21": "62WHqj8fe2h1x9rN3q3x13z91rW8GhF5yhhUhufeyHNLHC74wVzRsNNDiGhPjbWYsNX3i7n6qSSCwwnJ2Dx9oUea",
  "key22": "665de8JfNUHGtuZikr4zY3HcEK6eXhXmR6hsxSvi7V81pxGa6bL6hL2uJ3HdACiP8etKFeAENpuXzWVfFj3QSpUN",
  "key23": "3C3bKzsRjvKFhsNny7h6tX17kypqBoPjZ3N48KGTmRMtERviE5bvWD4ENeU83v4NJBN6qVMdt6L2ymkBRYcbLPPG",
  "key24": "5UmkWwNqP3nWj3Gf415CjpvYUDNELhwmff9b4LgaiiZYp8oqci2XmjpT3WkD4cYXm6vKLM3QHRKHJF1H4MoQD1j2",
  "key25": "4LxFx7APVCNg6EAWLyDsiRubZx9HsM3sFRB5bbxBc1ZJfn5wGM4Hr55kKKNmWKVyZLHUYZZVYkzx2Str6xvoAKdg",
  "key26": "2VzxE6eWdLY1APM7pktzaY8CJtKadQZEj4CvyBbkR6Lb8Ug6pLE8Zh1nwy9dQXUtP198nkqX43faaXrUQiju8gZq",
  "key27": "3JAiRNcZKKQ4ZdG8xXBmgk8rwRsGRtMzy21VCQ5TxbLVtJHd6BsEezmMcbjXN9avdj24Eh3QMu6Abk188tnhBSr",
  "key28": "38e7zynxvd7QhKnyr1vpL5i4JTEy7Tgugr4vwBEdKRsd29tyrfVKWYCDexH2yNZXMRoq2AWk2wJrA1RwkUxp3oPi",
  "key29": "3QcP9wp8GLkGzKp46HtrxchdHKsPAY44zFjvwwir4m5yxQLGMeJGN1wtmgh3qwcBqXfgQT3MW5jgvWHVa7bdT3Jj",
  "key30": "51yx8m3hJvZLX4S5Dp2rDYZRRELW4z1CkJFftKJ5QjN8cczZGKBUPcgvBASWTrvLAfdS7zh1aRFKmCkHCxYKEP5j",
  "key31": "VkLPEZqmBxnQGKc9jnbhkS1Zs7WEAD2zYV2ZJvS3JeurFm5hHD7649x1J2pRVkNprXSnkqoQ7xWqfvTDwP6W2eD",
  "key32": "5yXSNWH6ZGGBNaLVDK9vBjrz2vemvNeFwJVWqa1sLkyq6hmzk8btnkGhWi3dstmU9Dd3MiqzdxTV8tt1fGmkWk57",
  "key33": "4gU7i3biwzPf7MdxPf7eqVKYwRHuwrPmLLgW3mF1hVXBFhYymCroTSLduMSXDhYrxRoprKC4wZKg2pYt2pc7Tgrw",
  "key34": "45b1kEFkDLMUasRXr5xAU4XWXWSWSKxtNfwuEJXvcBTDAmFRs9PTX3szYEWPZJmNaiz4tpPLBwoBdS9nntEy6wSN",
  "key35": "2caApp6Ci5yU4eCySmYhfuAN1Vf3egvUMRYEbyhJX7ekjautwsJQLeXQgSjiTmzJ8fKs2iRF6EFytLQERavYLiby",
  "key36": "ukQ1WtQv8uG55SzAqHg1hcWP1Y1wVhcD4Q3zfvmhuucfkeFnAfZd1f6xS3EVzgTbri5ot7swDrZfVZNGjw93eJD",
  "key37": "2ULA5wC7NXosPAYggacBg1nJ8joa1UgMsaR6woFNJwmmJgWBC8fvGemu1wtgQteB1ja1VLsyeAr3my7jpoadoYYG",
  "key38": "4bzEhvRoJW4TasJDuqVNRa5ELmoxn9sNvUTXG22wqrXB5BpmVPMdzspTF1hfokjdYuHDaVX9sY6RBWcu4aVExwDT",
  "key39": "2kCUxr7FVuqir5gEbnL25UPiWgnXuyYQAiT5QmZGzPYb2vqCUipZuF7dzb9ZCGvWJUQhmkmA6voNCPVxDKCC7WgU",
  "key40": "3PbXp6SHT15Wai7k4ccWiPSRvVzrXZupcHyqqjc6W1aYPWyTw1Ga5geQjS1sdnMvRasFF6HDaghzkPpJDqdcbvDP",
  "key41": "2Py5MzBq2jKvpv1snufLBNsto1CBpkscAMxNvxYCdR8xWqFAdnh1gvLSjQqwZ4ay6CKrnVmMiVip77z5C3j5vu52",
  "key42": "4Tryr97SuN9KepCmhwZV1abswjcierEFAg8shoUbYV25fyCNVNhVdutdrovkM4RaKRM5hyWoWWzB3tT9dnzxpmj"
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
