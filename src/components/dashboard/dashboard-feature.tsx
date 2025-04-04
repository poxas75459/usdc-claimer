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
    "4L6q8uSvuoJa6UNWRZmU7RskqyMAyy4H9AitUTdTPeLnXDszkiNU3pnhWpoEeEccLvDiSVct1BRYhSUg6UnhfbmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RvntaXAEpyXsCRjrspiKMWbSvz49cwzQkfknu3hXgQohKsfrr2JpmrXy38Js1FkgFYJeMN1KnbRfw8QxMbXJNB9",
  "key1": "3mjRsT4Mz1Z1Z5bec4bhZ9mt98A8sasti2asi3nnuhRuQsGwoyuVgmYGmuCXMf1QAkHEanEsPTk5nHV94RZ4pr9b",
  "key2": "3ePPkRgoryEYGrgi5mANK7Vp3hrYyKjcGK7yL1vZj8yLGYzAyQDC2NudB2hBnmUuN24DPyDAyK9y7ELBt8VMfXiA",
  "key3": "4X8aLPBhd2nifKYw6j6Hh76AJkbocsAUsyMF8z4ZiNczAqZ4HXstJkuom8rEgRZwFT9oL2Wf88hqWBrnjV1QnTvy",
  "key4": "3UirUtYgk18Bgsm8gVtLTFYQKSsoy8v1YAwxW8vZu1AP69phE5Lw1GPQLRx9keghVQDcSUBFvBGZYvmE3sDeJPc6",
  "key5": "41VBbwSNUmbjFbpsXA9sZU6DLSLDrnT7iDtvRH3Y9HZqBhUQ7XzXMUUDGyiZjKZq5639HGWgUywPf9jD14KBDaiP",
  "key6": "52h5ikvPhEFLFgykrWPtgbASU5S1FpZFPU9oZUrbFyYourNLihL5RRSVUeg4iSURDgZgmSbwQ74DqeYQkgtYxJyV",
  "key7": "2zKtWcbTWzLxAR5XFCzPbvANiASt1VCBgUkacaXxMVCe1bwremkdkH9XLLR6U13pUyJz3kzUFoXPFSnucSXHwfGU",
  "key8": "4ASLY6ki2UGHieL4ZrXmfbkoKpWYCJTawwP1Guw36vjsGXn5cwQ4gvfeytWgStD3BpmypEyTDhPf3UygQErkwuz3",
  "key9": "5Rc2jSB61K52gyZeY1Qkb9Zfig1gd2YU8ovTECnGa6N2jZ2G1AF858zM3XJDEWP5DjUrPLfR2ZX8WoYzr93bNt9H",
  "key10": "2eVaGJUJEtKdfTfEMLanVdBHkFbsQRrKLQGP1fwuLjza4zgxdTAW58nWsbcBbchC81oSgXmwmh3WbBJTg2KyJe7p",
  "key11": "UvpK2tx5SXyACCDoNpCxwGL7dq5xRRHS2QH2o3YcGLYP3ftG6oH1mvGFnJQnSE9MneyqXH9JhJz3MXys9UiQLDr",
  "key12": "31VQHkVytWDWawL6WzAUCYxUDesGeL3cyuRAqio2Yx4CanXrEdaptsUPBMR2ibjuiP2mAV8SQRvkzG6saUghuUvt",
  "key13": "6wEb2o7a6A1Uk8Y3Jss8gKwdA7ippocKcsPezp6fSgmg1t3Cra5oL9pfUQ6PFhNBUMr266mNfFgW2HNktAJbWcT",
  "key14": "4yJwccCigap2wjPcvgwnqooYGTvcBRMBmbuDB3KcRAxMWBGAEYkSZU8gLGAJmRdnzCpmLYgGKpfFRUYQD8Qaredu",
  "key15": "6FJcRssLbNj5VMnWBCjktCSbn6WR2uxWpRBXV8wnGZ1W3GyUnt5xje8tVuWBK7LkyXRVA61keqGnPbTcR9nf5Fg",
  "key16": "5L31RQGRGPadnVBdKxn5PZmP7VeBYX15X8xJ93hqzEHsY9LscRXJMyKiJY5uKL3ZU2zPHTZ71dc5JR3GKSgsNEzR",
  "key17": "37gzZniugRqodeGeS1ynf6GFTu4DZ8a21BZnwjJrkxkLSWhxMK3PJZsQshU9VufARzbXvzzqCNVrvxfjV9mn9L4w",
  "key18": "2tVuSYsCafdp9GPPhP1H4CFvcRVTGHyGbDDXyn9F9CR5DFp2ZAtx9ESx6CB8GL1QoVEWiL3gjDKAXSazYJUMDfU8",
  "key19": "4F6iP7QSkUo6ymst9HreT3W54PxZwBnDRmoNtxbwRMtfcDwPVmm4LbSume729afvi7v7iMRoAPmq1kPcozjKedKp",
  "key20": "2TKr2ZffC8gWRczCX12A5krUS8HeMUzMeoDErvQeosUUjpWMj2baTZhCyrKEN8j2k2VDZac8ASa1S5FE1m86LHmn",
  "key21": "2bHjeVAev5GSQEMqjbwEfoUhZMavCpX8v5hxqyfAFXbi7DCK7QwnDXikytyTt3VgDsBBok8xcvSVPbxoL72xUDqq",
  "key22": "UkQkRDU2HpY9nCm3s1pWXBiSJcBVS4Eoher7Eezh6MQRsqLZ6BmZQjBxUQemDLjhPPiqa8su3jFwgNMKye6oomx",
  "key23": "2GJnsWTvaDVyHhvCY6fwted2AJnD8FLnBYp4FfPFqoxET1LYp38gHguSreute3H8VXg8c2Sfm3ZysPmuCv4Tqjj8",
  "key24": "31kwS4woUZJGcdzqP9j4KdU7khbgns8akTdss2zozGmMeXw1ykUFkLgShRabn7UKZghy5BLDvMYCUTabtDSSJmoo",
  "key25": "24dEJXLhF4UqmyWLe7KgoKrPgQrksxyWPBDsLpN4aCP9yGTskNFRvFph5pJoCwE6AGcTJw45QYCSyJGjkY5JcfpB",
  "key26": "3Pb58zXvYy1QQAqrznzDeG2oBbDNgX6cCEJwq9pKeiEA6upTULS3RfQ37B36giKm1PVxiotpQTV8veBY54epDPAL",
  "key27": "5L5xcTUVdxRZjwQNrmM6n7mfvceRqASyKdUegZ2z9tb3HmXYsnSgsfiVsqhWXbquXciQyXJzBxDJPcmrXcHqAaZr",
  "key28": "t6dupbqGrapH6XZU8Nmz7shS5Dc1kBqU6DJLEdYK2atiV1iSwmiXwqngmfxJpZobDBPy3wef5GxxPLzhFusBwre",
  "key29": "4BRr5XE7DszLwVZirjSMuGxiwvb5iAnCFABSi3GwQsQMRKDs1DM9jGfJrP4oDKXf4QLu8REgqtDoJjT5nLCaEJFC",
  "key30": "3U3bF5h72kiS7QvJTeuRkVLLaJEmZWkwCZ3Afnys4jhJaBAMWCG3sw5i9kiQmQpdbDUFUcmKzRPhsSfa1wqnzE1T",
  "key31": "4mX6h7sVze7Zgp3TrE9XUrMqbro6UZLbUffEL38Dgv6tRaH6g8Z4LzdExetqR9oi3GLCb2jPszHCebpQihhrVgYE",
  "key32": "Mfzsw1x8XpTWHENFFbSL9kaibVomAycowtLQrDPuPUFtKrvPmE4NyqFqWHtKncdLYuAeTXScmnEEWXEDqCkoXYs",
  "key33": "4pVRz4VxzenXjgsn4rZarorWwvcC6MrP7UKgJg8we2XT7i2PbJY1PSMouwKduwktJoGNc1VJGgkfXzESD4fG6FTL",
  "key34": "2v5f8FAtxPybCYcBpdsgoZnUqTszvwb7S2YYVrt2frnuKbLubVBd1SpEJJ8njJxLXuAu2oLMKFtQ1fgUaSDr2uP",
  "key35": "3kWSwqqJrRfy3x1DkKMfhPb1sK6KohWa3j89NbE5n5PwYL8sK8LvbVPLi7WEULSBx7ooPCxzxsmhqNKWRBhiU4pJ",
  "key36": "3pZdAKYZakjtDjQeGCpkWCTqjrPgm9GpZjdwKYDrguc795hReijpC4Xvx15QdCJttBC1QpmwKmYzJfVskyExioDU",
  "key37": "4r4ERGS82SeRWAhmx2Qr4z6dULTmHQEaR9S4MjYhCj7TsPQj34iuaMxjPTRHUZDiRE8MUHqnU6mDpbuxy2ChYBEL",
  "key38": "5Ezms2fFd1Ps4z39iVfBrHUZAApq2yXG5Uj8gi6o1hk96eSCZtX93GC1eehG8HETsbnaEvmw89Quo3p28YwgwXba",
  "key39": "o2YGqzRk3fhBY8tmx3EF6g1iGLavCXj9azLvBuffad3zeuvBAE9P9EW98T2Erj2aZ8UcgREe9KgFfqYrqSrwyZs",
  "key40": "5xRb9AxcY3JYhihzLZLZR2w2bzHmhVMJGDVHSGQUewDzCBGRuHtZcCD1WzGBJCrdqaVcJwCPxuy243uWSyEsSmZJ"
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
