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
    "4B3o1uyUh1mr1ttrLcdUW7ZqDvenSYxTBu2VG5LuiRkgoRt7VgSzQ1STYWyMA9an25BGT5ukNRMYQH1uhSLzTGwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3pnD1i6LnpPSJPNxeF3DxfF3Jw5nWhc6pchUCDCxMhhv3YBirRa9AX7v7D4pwSm5TEXfuDgEmjtjmfrXifssJt",
  "key1": "4MwUa5TbUNjfnywZ5nb7vcEW9QhgUsf62fiq5CmxoQh7oJpZr61apCPQJraHWKD5v3a5iaLPAGZFZZKfqWmX8s7m",
  "key2": "4kde1YySYwJZHDqK5DRq6KX1HzVotr6DRkZDSJYjVix6wUBgJpqiwYY9MwgkfgR3NkxCLAyRXQGcoApfJCdFmrR6",
  "key3": "2hZZzF5zwKLSXYjJHc8WG6ykCfNBLPSggLsxgcHBCThP3yhSY8r9XFDLK4wcKemr3WaZ4mY1NS3BeQejwQBd1Yj8",
  "key4": "3vEMVcQYWB12PyVJfAXb6LN5PWgZgz33id152mNSD6XaKamJpRayPwTE1a1ZfDdZzAFYLTK1gdnocAMpbmvxYuT6",
  "key5": "3LDnGxaDUwfyVJYZhVtR9jbuj9j8RWZY87bqaj6j2UwV7LegpGQiiHmq7Cb5j8ZzuSzU1GZR69ynD4ZK4gD3qyuT",
  "key6": "HAdyJUC7TxvAuf1fYjEG4VMKwEUjV5mQqzPdWkQHVabRwGPqKCDoHnae2aHURAXu2NCGGFr3oikY7hB8pdNbzx2",
  "key7": "3D45yhw3K1kw3XiN4Gh7qzxFAsA7oNHzb4DsD2D9JLamsXju6qgvmL3wGt96tgz1QVtadmw8HinDsUjZxPhvjeaC",
  "key8": "4dJReUijaStfY4ZFgcDje8i2BTXCLUaPQiXqCNrfwerzcajtqgdu2p69KC5sLR3EWwGm7K1xiL4PA9fjxipbfLc1",
  "key9": "2nHufAaUKzoCJFm2GSHMEiyPf3J7Umox92Vo1XJPEBMcxCAgHQQ7bgHS5Q8pzQWjw4qqUMdYupWokLmXQKQVcJkA",
  "key10": "413vPPX5wam6ZnYp8mSwoE2QysyqQgZjMhWf3aG4Tu5qB9jmuwoJGm9u5PUHaVrVACyrUDLUVdMv9d12DFsZvbR2",
  "key11": "4X8E9HWc57Kq4strz2RJnEV6DSjueLRU9bEGzNYXNTRZ3TK88UozhMmmJjQVGoLszLwfbhNpAKdX4zxAB6trF9rn",
  "key12": "4KG36eC3a1CNgk99h37h8HACqiWP9cm9TfndyZyyj62BCeDNpbzvZ4vkDRh8Hbg4qKKMrxK6CZ3Fjh2fPGRqHXEy",
  "key13": "wcBnsgP2YeLgkRMMs762vDimxsXTAwtn1ApkdbjPeM1PEtCmeZdK7pYWqWYBexdPBrJXukPaefvsPrfuo9it1A2",
  "key14": "ti7y5nNtVUXnwyKP5cacJy5Cy8tpD5xUtfdaQyZuGPhhbow7uLuuCnc9e6Tce95Y8pZXE2nrzk5jcYSHTiBDQW7",
  "key15": "5nMkJucfhGzcWHyejwApredPMf487U5zRvPedm1cTzWwVjBtBKXpAoG1rWvCUvhnj4qnjecorHLiNQS1aNkh3baf",
  "key16": "4wSDQwEYNVSPZiTW2RRZs2UE2zSNFSkmcuZCEYtPjVQ2RohF8L8D6wGBVSpcrNdyVyxMseCgd2ZFy7Ejo4iFoQzd",
  "key17": "3mvCZGgpq4ufiA8DmrPqfPwaQFKebYY7VF4wEFYexXQSPe3Wwu4n6oKn5j4Ei4weXPaYvyrp9UN7CDWGJJocPmHK",
  "key18": "27E9WddD4q2eKin52qXKKFXrgkApU8cqof4p4qKeaoHvrLV5v7TVtJV5q5mmqH6E6ZsxBKy3hL1GX5vH4kJ5aqwx",
  "key19": "JbXuGSt5VvKVFMCQhgFFP1Nm1SM1mBWx18NArbKM5J7pfkWDFpZBLhRjricTNN8BHU5thZh3Sv4P469MrE1mYdD",
  "key20": "3PHcfYmLSVmtq9tsqGY7iFW61o7UyrYM4M2tBqUp8FWJQ7HLmPtKSoxNEk3uXgTJpTQa58A8vHBWvAsUpGyYhmCf",
  "key21": "46CyytZeRPUyrLA59YyTxM5X2PBJdvJvUE8jDXaLKVfzvhuVG4yp7dRfLrjD3dgdzg58KnFe7knPdgXXxy1wYcuA",
  "key22": "RQmaSJahX28adKdrrX2McbNPAbkm51SXb9JbXdtZbSHWM1NrnJjfwpvrohx5c8UFciJ4W4cguLHihhWzoEJVSSR",
  "key23": "3fcVQoxd8KREixJqSWx21rGrhEVb5utijtyk1hsGZSCb6Q848CtUi4wGFxmUknuoBj6oNM5d1bBqRFzy82sEaP19",
  "key24": "3qTAvVmJZhtLgvrQEqAgQ9YWRx3DenVDcU23NBaRHCMkFGFKH9jXEW1pypC2i1PKWirU5QXrLqLGmcGEfvdtdD6q",
  "key25": "Kibs6tPyhP37rRdw5CgeG7pZroQE4VnGfBWXTtyrD8brFnnQqCeRyHTTui44gEFTeZ8gsauFcGpQndTpvMSsHAV",
  "key26": "4WUo7s846pLrW6TTHboQDFJ5bBgoLDDnLC9rafAnKSm34ysB98TrN3Rzqgw4aQzYbRCFwiWQhkQqmyzqpVpDL9kZ",
  "key27": "2hBwwi35eDRiorXqUo7V9bbUhm6cGn9FytyDBcDyMmNcFxf7CAVj1AxSTc4HGdMQGQ7NTqgwxg9o2rWvYuBR7s6k",
  "key28": "47ybf5nyhxdoo6XwiVMGHqoUQ6rxpDZwaY4HLyi5kigT7mTrFx18xEBDcSojGvYu1NReSToNKWfu6cPz7p88ggYw",
  "key29": "YAZ5vwWfscpJmLkKf1zayf3DRkK7vF55Q4KdkM9SrAhYjYJMeUhnGAK1FjuPSsTxGyRg3ZQvUitWZppTFd4y29s",
  "key30": "FkC5SPmRYtjsH1xEAtPEX3vxffxgSTYg37V4Qu8p7K8XS7bKzqGpBavWTbk72dhexfGXmYHoz7RD6VMDCpuu2e3",
  "key31": "2LCyz7zj8b7iD7UKSd9A3LdNj7cb5PVMtcFMeb4pHuV6YtFrXW9pG3gM396Q2r5FY2yTmCc5EEbfDPHhimAP9RFj",
  "key32": "33Mza2m9gxPm1utG5okTuDSYApWjE98WTT6ELEFGhNikx1utZorQ5aP3ihdgRYZPwA5MggCzPSm2nbrYdibjXj1G",
  "key33": "5CBg66cRSFGzSotsCmV7Y5RUqbPdhK4rDEir2FiWz6f9WL2c7Ga1yS3ndYHLDHkkouqQscU6v9UL6Awa1qpiVDBs",
  "key34": "3oA9Nfctt7eKWGXJynFu2tfvMjPz7r4Bee12e6B8s8qw31nGkkvEMNmLbjxtQ24VdNuSvHsGFtPpfW5YdJALNJ7s",
  "key35": "yWr3Y4sD8uDJY1PsJTpU8nj55uJ4sHGtZjE5Zhudpfe8APuejJ5bCS5KygnpBB91Bqr5AMNqdewpwP8AZDjyv2S",
  "key36": "4a8gVFHb5n85VysMhNqpxtzopPYwFHNB8tVmf9PXZxj56ckX6c7YirX9aTDnDUt1KUswX9o4D9Brn4YkAzuHp3TB",
  "key37": "4nQwAsZ79fpxVN81TwgrF9nCN1AbvB8Fw9taV3cdnNJCksEEY4AjYzJgpMV3MMJy1DLykvcX6QJzUYZYK1caRTp2",
  "key38": "4jgxExpDXTV12GuZMCVxdTHv5V5c6cmfSJAVzPXGf4K95UmnsV8ykbDTiRnxwhahQRtuqFcwrwouAM45oJm7mNSc",
  "key39": "4ncW4BLrFw5M1mPTmNxdDj73yJf8oTsNVkyhA3EBXUL4KRpZ5eVMxK3eCtAbDYVfix91RyGHMAqkwUMfkAe6wdrQ",
  "key40": "36W3rCQacWwk2gkQEccUABKUox2SoaaAPqDunDNfJiiJ8WWtC18s73dZnxsRqYZJoWDqgug56xvKCEpYFd7Gj7Nj",
  "key41": "3vzado1NbjxdLTKrkSWqUZVGbRbymBvKuoQeisorPyLEdSGzEZyjG9sWJ8k98BgzGji5chLUSsnB6id18aYqaHjs",
  "key42": "2kaUuzz2c4zPo9KNmFPUmXssJCYTqcuFvADva44xsHWzc3yi8YoEJCAez1ouXuaiXy49YiDHzoULs2dEzUyaMvMG",
  "key43": "5uWFh4dQHZdDBNgKFMy9ETeY3ZT5T3oi3KP6ALCFDU8SSyyvUZjP3GKKmCKmj8LLW7gPCutxa3yyUg5DLnJxJQ53",
  "key44": "4wzLJfm4ouPWLhDJcxf2RLYY6b3MGhUR4FVSupH99QNYb2P3ouDRwFX5WM3ptpwjovBpr8Z9aTfEHBudZ3irZCUP",
  "key45": "5pdyxsnHCnzDqFj7JxjfnNrqXpGYuSRDNJZPnHs6vFCGBNbhXbSGicGt3f56SUAyfHftUvMZgNmXwXbgvMMLev9V",
  "key46": "3wP34sAJfJPKUsBA85WNqAoZcPpJUfxzzmkcA59TW2VZ3CKxHrfKVpN7VetoWnzFRhN1J4QqiBkW3W1VLbJTCHV5",
  "key47": "C7j7zZxUCxchZ6J6thG6wYRn2RFErqjYTHcd5qLSKBh7VGJEqc6AUYJbNjX2dwvEd4Kpw8D7n9Xh19CryHPqvjf",
  "key48": "4mtALGSSKpYMvtnmsNaWoxUjs2SamcBx2d45zGuPFuUaRKd25yXE33CmQ73qZh2STE5gn5xdyu7PqXUfkcVasTfD",
  "key49": "5sMC6U6qeudMPYVeaUg96GZjW3CGQbfV3BWp7xg3mWpnBstXkLC488uPBpuPM98pfDghriHsgbStTxpxvekhZYuE"
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
