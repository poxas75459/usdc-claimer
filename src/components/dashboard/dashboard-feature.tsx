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
    "5JWdHRGG5aDwwTN49pPpBicyfiTKMfTSe1PL9DvoXskkHDQbQ7o197YzyNwwiMT7XLPsgLZZ1NNfhQRAYoyG517B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53oZ4rBxK5y2e6Wqx3i2fA4nczHQW2XGVbAMsDwWUU3FSGoUgJPhQASeEXfmrTwFSZdQwXKeS9wFEYgG6Fu9oZU1",
  "key1": "32xGhnhCFE8nsvp8fLsSZx3GLyvYFhcXhpEo5wisEzeaDgrk43FbtAS6aTUU4FCYquVn3qmKmprid1KH4CERgXCQ",
  "key2": "tkMFRRzQibZW1ohS6gDaUYDNttJY2QNjU4M2zibN6fMygLZvNsEB4yiDS5DDr6bs11ZdYJHrivKTVRk2Qr5ZUzs",
  "key3": "2GVJPxVZDLC7NsRRBS2ZBE69u9ivAcyE96bmNkC6u5cPVN99rKUqtPA2s9v5yaED9PzHhKivvgfabb3UY2KchCGH",
  "key4": "3CnCnJ1tocdag2EdBY8M3DTCxaQ6a4sgV5RMPqdCCdC3gcAikTVAD5819CynEXJ6RcypqaDHJMjKpqSBNimCcHM4",
  "key5": "2MYvkBVpK52LVRQj6xvrxC7rkhwzyxXbeSaFptniNdTKnNKu7JyNTPcXPF1ae9sMpvbWdm2VQD8TSW9LfChU1RtS",
  "key6": "2P4q1vdksh8PdVTMXgWaeSkPiusU1iLFS1HvuNhdZ3FSADeH2PtLFeX2LLoXNzUQTJzpw2TDNSM2zEboPYxzHnfE",
  "key7": "4YdmAjsWwPMck3zPJWGbWWzqMTGUy55BqeBwnhtnYWtp7T6mHLh9qx7sZS7W6m23Ks4kez1cpU8ZrPsa9ksm8SJf",
  "key8": "dJcbYJnreyKYN471bhStU6gdAADPHibuKsE22FK3jer19We9tddJK9VUNpkwbhw1yazGPZxt93sbJsxxNvF7VGi",
  "key9": "7ExhrHisu68eVmkYo9MEq2Eh2wA3wtSivKkRHxgmMirAoYC6LotCFbZdykP1L5XXxGAvUa6AST1xRJ7EfupnwAW",
  "key10": "5fJNRmwxTV9RRZzK4RAV4XWozRAkuqhRrvBbCwVTB1cgjBoEVf624jPezHd1SnG9m31qgnzdu7iTshvJuEQdCZuE",
  "key11": "7zxHSX2kZGC7YEaVcKDm9K48CKtx2DDcWkeZZuH686g8eRhHp7eQNePwTGfxGDhYSa7rcCruyYw1PtZbCMs96Zi",
  "key12": "4zhNtJDmokkXncj3FAMXtNRuTS8WyRyfe4xzL6mPqBSMjBXykVuh2TDuTF9LYNNZD8UG7sLL96YxLzEUUZP4AY4i",
  "key13": "43YHJSjhrrQUyxbZz6vUqyccGbyBAraL1Bh5XjRjK1xkbS6SY5kVBAmVb4W3gzP59K9KtpC8utDEbKVha9mfGTVe",
  "key14": "4LVScWA5WkE58HGjEafN9BfF7ncMdksgLQmfWYxTzcmVYZCzjF79JicRnnyFWaWawDknktNRFeuZT3L9XX1QKiHh",
  "key15": "2dpJAXKdsQWMMxUa21NEtkqftPHUmceYft3i9VG38tbfhcGnNcXZuiEXtThmzEKKTrRaKuzTkXpdiiPgJFxjrg5W",
  "key16": "2ah1Zm72ispxF85HmwwfDKneiQCg8V8mph5cGjzUWezeziFTTo9WhLJbP6T7fJyfqzNbEEqd5FTkGM5so4VS1Ko9",
  "key17": "4Lcaz58E7WtBJSRrKCuTqpzTKpVedBg2MQAVzoyfsx7etjVSTmvj358hzsc8P5E5mwxKQWxcyoggvfxSm3DBV6WR",
  "key18": "4vucBN5dAM8HqdtePt47mKQUfswhheMKci7zLHvNJXQoZZz1fJK3XnYonHcMyUzt2yxmrdPiHNPE1C4EMRWcHVPS",
  "key19": "vwEi8iP5zJVHJDWsTcDuWje8VwiJYJbkNwrA7Lya5TQ7kNWJFg6Xj2fkrnEd33MyaHbkRhednxdmdpvm9HjavmL",
  "key20": "4ymtkboZsmK27dLVr6pha1y3tu9Buu851JBvNgn3UaU7kmrWaAhjyML1MsQeQ47sG8YqaNWhXazGsvk5L5SRNbwC",
  "key21": "5NDfjG81cWeDBDVr9CjXuZrxawRhLB7EGwG1g68sVe6FYtYX5NdbpRcj7UifQuKbB3nGpD2EoToLBKMGh8Mo2mAt",
  "key22": "94gg6RxBF6pNeJTLXHoqphoqyiGLvoFsdfYQriyquEfwwK5idvQ1B9CGGFZWBsaeBHGQyHw6NXZfePYjh4QZDUz",
  "key23": "3hV4cA6ZJSJNLV6RUMnM7TJNbuTj9wxo211bXL4GndLXa47ckPez82xT7ksuHfgs7p4ksZv4reQG2LBSDon4e9sz",
  "key24": "5CPk3cTuQ9Riob83vDGdutyEJS7aVyVyHwZRdZ5TX4eBUub2UoqBf4J6Qtme4cCwJoC5XesNpwSV8SxmdRYBiQQC",
  "key25": "2QSyrRU4sAEpb5kJYa3JAwtRw4mjUJd7enqgrmPuoMeSgcwPyVA5Ts6za9dzrDE6CK7e87ZEwGMYpcmco7PEBfmf",
  "key26": "5fGHbCq7cPfULJD7uA6sNQyNX746RVQh8WSurk7kaNqh2CWhgGCXnLRSzjQxhcwh6fgFbkiPWfER4ydq39EnNVqQ",
  "key27": "2xhQBqa5ThPQk8m84u3EJuCHcxwy4UvjPuht3AfBbTWv2hUupVT1ZaBK3izWjUJnD8DNwU447HK3j8fwNoD1nezX",
  "key28": "4MxjLEhrS2BPbKxBFT8tMumbMVST5ee5DZeRFeokVMVZCrMtVRqS69MxwEnZucci4QakCpsujnJnwYZ5ErvXXj7Y",
  "key29": "5imNBs2L9CfWfUdAPzEkCudgMJxHw7roDdo9k6o9kmj2yXdmbSrLkLkXUas1q6oMfgzNfPsSnE3z3bAU6rbxVL2U",
  "key30": "5J6QioH475jsbevENiKyzrenY94rpBK8BkLNkvxTYVQ19juua5LXeY7tPGcgKp4gEV5ZWKjX6wP3VSiDcFpK6SdB",
  "key31": "5yfhCVsbCGjzbxM9zF9nVdyEudGJ4ToV2ridSk1shrB9Yb9eo7oyZUdVBQWCV9KvHKgsMTBrqKLZvNDNjnfyCY5h",
  "key32": "4aL85dz9GRsq15gLEWommFRPvoC52vzBhULX79YzjqafYBNQMsn1zK1uX5KPpJf5a9Xk7PXWm8obRKkXiSAbSAVp",
  "key33": "3BpBwjLS8rBVCYieXdJdRMT7gmSvAFjZkRgTi9UnoJ1W7VzcRgesqS4y3Cxb5eHzBRtVWvMD3cpPm9o27HEJhU7a",
  "key34": "2pBTFs7peVUHkJrCtbcAfSCYX4sTDvrNBtvyAdhiQxKYHMn4WYiCUR1zEjM8x54522JjsNQLB2C3SG6qX68cNRUa",
  "key35": "3TUVfZ19bTn3jcSr2NkBAcocgRwJitqHHjuzgqDLMK33knxadXCaMThVHzAfevVgA86Grn5ZSaKDn4sKE839acEH",
  "key36": "2GRM9NV4hA8cDoKGcS1cYWXNZ3quXJAx6W54YTB1e1obfN27pe2TD1mngSzHyirsw92MHFgoDxtuYoTijnmR5GNK",
  "key37": "H3kCFrCCuBoepKJ3BurpMR1yrLMXQ92tBLhJ54Zwjf3vfz3PeQhCfzyvfCnze8Gbpqva9xS5rLtaXUtJZSLTBNa",
  "key38": "25FgDo3kiQxQHPtjPa5NtoQhWD38MYHqCKL66CPLgy3THMshW3gq5HLMYtxeKcUmxFsga3JMqENo31TfEqqbrmcB",
  "key39": "2bYEtGpce7sFCgN4V8CGbv4sDAfs5htouTCvXdoT2Jp1ooo5tn72iDcmJcobUoYkRBCfRLeC4rsg7fAT68C2rxzS",
  "key40": "2iGKARihxEeKhJJbFyQZsRmoQEYuGy6uaCVY8FGzbMRubZHSr3BL4EZshY7ULck1Bmb9qm73ewFePyfbzaa7nRgA",
  "key41": "5cicyMaDy3bcbfX9uHAn5Ymuwq7cdYu9r982gjdXhP8urBzyh5bNze2tgJ39Gi7xaqM8hWt6d9Drd479GbRixvcm",
  "key42": "B4inf76ENVY5A4sTWWC6snow6N9x6LmKcerBJFH3fSwRgH97cpuVCvqccGUJkDinHG4yg4ADW56GoX6n79DigTa",
  "key43": "2iR2TjiFUD1412h9RHhyaRbr6Lt2z1R9TWu9FndW54HWi7vh7URbe8H9P7iBRsXzBzBq2LeJAwxqSGenvAUHneRG",
  "key44": "4vPY2BkW4kCMx7x4ZoMzMqvfFAGumLgGMAxj6v1MSjprBqjgiVvgpudGWU2yses6bk7eM3GReBwsbtusuwK6iQ8i",
  "key45": "36YqjPjuzeHSmGtWjrhN3Hi5nuV7D37xRi5mCj3A54V9iTWJ5ArkTJhbahPAtsy87t3g3GHwoxuxZruLnt5SiK5w"
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
