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
    "2mBET48cQyscaYycCwufJPy1pmAFzRZzY7pZMThsPe78kwnBCftaMn5fsf9W13qYmNqJZyGXAdcBkAohgZfhMUxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R4QDRZkKaCufAGkCVKBoKou75RSfPHy8tnQyERdnuro6X3uFyUhy9fkQ8y4FrFSABD9nEPWwsUsKFPYSK6Qfv3d",
  "key1": "2D1wJTo6Bp397u9Jc2t2pUGkzd4eQnuysqBmbfyQg2b2ENJCNK3CZW3WTyRSRYvJSa4H1iajs8LDP1jQ4iHz4PuB",
  "key2": "58NDrej4JCV3DCFDGtfB8NuZHKjdPB2AG8wvhMVcsst45p2ppDBmTFEXnhRxm8LgJrRh29D6cYGhcamWa42NbkHs",
  "key3": "Jsq6YqZkSoPtCuyUiH1QdTgAUh18bTHfeey6or4vikJN33rQvWDrfFhdaosDMTRqGgKgNG5ZCCV8sF811ZZs3fh",
  "key4": "4ATYJSKVDL6qbF3vu2LskXiD3sDSh3rP83LcmUWFxM6cLMfLZZu8D6jt1PHPoYrVNYn6HnZFeKdP9h2YrY5WgwTK",
  "key5": "2gWZ3dxJhyW1szzYiuGuWDQnqHFQz4pq3DwmhVkKLAu3vRbgZm85DiaZW1o9WjGn9hqipEKn8JGXcdSDqtNTBYVg",
  "key6": "dWizHgokUL56XE2PK4YweMkDPGywUsVCqznT1ZdJqzD9g6KwbV49aXa3VwNfKE2ojZt6iFvcmdDobamNjM7qopo",
  "key7": "4nqqhpB8uT6BDT864wrz5nb41Re9tx2KTeUpCieF4YkxK9RBmGEHKo5sVTqqb7kf4XBizQg8bqTH2pfzidbkuBZU",
  "key8": "3jcbZzNobJaqmGZD2KpdbUo1NQM6TwRyGt26FawWmxpV3PN9hstc2DEvd7zLuobXnBWF2NUfW4Sa7GMjyMrRyegZ",
  "key9": "4bXqh3hhCLtxj6sucqUDxw1aHNK934UTJ8G5cdiPMowSu9kv8wPcR3nsNgCEjtNdf6RPahR2EjfQXFWayAwUfYfY",
  "key10": "2Jw6nq1uddFiBbVFUkKUg2uiUJmq1mnnZgfUNgfq9pLGShJ4R2B6W7GHQKegiJgKi2szbvLVExm3AdMABtGEkBE",
  "key11": "5eukzL8oSnPbWS6P3Yf3NToEZEbRKHjRRAf63sfz8wxBsuWcQgWhiKy6a7JLtLYiATUbgnascivtvAR35PFeLSSu",
  "key12": "4uDmAuj5vvCc9qnzSfbCeS3a1d29NdnDkJhyHkzEpmGSDKm8p1n5UNBXsCVoMCpZLi5JZaC5p1w4mSiYSLZCoxVU",
  "key13": "5stngrJpKrV48ex7YQzXSeFMmNVm9ofzXDzZFWuAgg4AA5hyYtyDXz1YCFboAVXRBLmAASA7B3XMajdj6exrwL9Y",
  "key14": "2dUU6sg31DvBxwmdUeeEfh56Kc1AJz8AyyStumveLoWBfnvRs66bMomM6Nm1LqBC34wGLbUTk9GvXZo3bsbmtwJk",
  "key15": "Wg4pjzijQgokm58GJvNvCWxJMxjKoDCHw9yhGoYN6LQ8rkGN1YgwZ2sfakw2QZx8gGF537sCHBsmy4r4sFGcYh2",
  "key16": "62jW51uYib2xK1mjoEXmHGdVje9dvY2xSjaEgjL93mYtW34jjpsbs51486GWhyfr2P7xYZuZwWjeWkyatvJdm84X",
  "key17": "Bjtkt2tKkPNwCWfau2ABkBcwXXZJmTqT75HE1j75sGhuWJkvE8uJZr2QswevFkxB8kFnRSmu4SUnxqdZvWYD79t",
  "key18": "3fxwyxhomNFXzVRAFEYXfZ7tBCyb4Kqng6Ys3BbjWrRMXf2pq3ag19oZKQyosqApeSvetEfXGqN3VTbjpFEbguJ6",
  "key19": "3CUigQtNGpdtWVdsXwCGVbBaVDMhvFbgXRTFn9YjRB58K7VYC1DFohuJDhpjHy8WM3NPzSp7Qg4QhKmsKVZJ5eZK",
  "key20": "i96JsqyEufFfT2t3w4M2hboY9YmsaBgKF4932FALUmQ2iYAWxcWnczy7BzPUvN1brmWejg8epaLnPasYaiBBqe2",
  "key21": "5331knhkrRsdViw8G8D3xNBdbeFnRwGBhYTVPPG5GWr1ym2CW4Yf9A9cS81xDT3xq4vJ3qeQ8Ee9MtDjVeUzf8fR",
  "key22": "32Tm3rUMV2ZCGceorFf9tBfuU9qZCRxpWx1wLHu6H7ZsY3NcZUWDnpy4n2XTcLgMdJucN1q18kpMEmkytv5teSqq",
  "key23": "5h8nwxpvLi5Tk9HUDxncXNB4AYyRmBvAW7P5W97U6rfPq7scG76a8THmLXt4b6kuHpxrK8ux2CkHSa87Nqos6LPq",
  "key24": "1ZWtJZ5qmeK7Hh1FKwkuFyCDMysrDDFfUPFdoffzWAQFM35VHwSgKT7Hp9o7hkja8uuxj5uSbzBgZzDGUCsp2Nw",
  "key25": "4cbMnDmNZ4cQAyhv3dgdE3ETYqZU7LGWxawrB1DnmyZqgpT3VXVU3rohSj77Jox9YLpLAbaMFPanqWKNbQxDnd63",
  "key26": "3VkmhwarvbrTSNQAfMubhshxNuv8oJRiYu3EkkJ8dfHm2LX478gVms92SUbUYd2Hqd5tZAM1MAnDkZhc9StVC2LE",
  "key27": "511xhihgMzhDQfsRFtXyp86THK3p2PNH1owdCyKSnZzkn8HGoVcXzzhHpRm3Z8R2mjdagvP5jiRCWFgosfEh25fA",
  "key28": "4o1NoEeHjNk5jBRCr84dUbSna4NPMik7VgKoYy8yEiRrvwRPhUUYSonu8U2SgrhdTnTJD3Hwu3FuRVNcxeQdE8Tj",
  "key29": "5UDDcSnbMoKzjrvF7DtHmN51RLC7W5xuib2ZvSWfuzHsL9dCuyUnmn8tsyUV8wXpcxWTnNaaFByZbQJHtKHDRDMr",
  "key30": "5BkrncSAxporn32zvPaGWtFdXvNpnnbKyK4Z1N2gY6yminEMzJR2NxNCMoHFkpaKA6ebBRNVS6e2giB8EuxGN3Yq",
  "key31": "5hHYf8Jr5Ge7XD31F1kGkrjaXTvc28PbRfGwCpB7QcJb4jVhWLvLZxsvc8iAefoABCKtFyoVtQ7icPZK9Qw3ys1w",
  "key32": "2NtaZWLMdbLXUpevBhFQ6qK2tKHAfQoLb9t7iZmeXmMuBBQ2pnaX3zUp6iqeBETRYEyDiRWzPHMgBKTMiqZYPLy9",
  "key33": "yQUUCmnWXiyrR2aburFJVhuqM3apaH3A2CipS2pVWnKYhFVSJGwHRNwPpj2QeZd2phDfVafE3gxjbRCV4Cb67PM",
  "key34": "4tvfmQttKmFQG76FsJsPgoXQqEzwfvWvWsjM5bHkY1ECBQr4HdDU1p1nTr1hi4zigMEEj1kbxyHcEmLsT4oW9Qme",
  "key35": "4HYeeog95Xuk8zAUBQ6q9aGQveK9ctTBuLDmSt3CoAt3ovDLQb98rRucd7eFmkt4QgXddH9VeHAoyS9g8faU2pKz",
  "key36": "52kmchvfk7C5RAnM9iiK4vgcrKRKvRXNAkwYFQF2iCEV6wWp4YEPBBp6PypMvcJZUr66igmu1JQpe7JFjDKCYXaG",
  "key37": "29r6VewjEu99Eiomek4nWMYJzoAwB2wN8NdFY2K4w1VzAoj8o9QtKWgcfoaYg9sRCHtyg7UUGZovPYpjGrymrjm6",
  "key38": "4VedFQnEJcfzxtMy1Dfk3MWGuJkDqmWsxUei7UAsPocrRyCdstXzDH5wquUnfWtgsHR2oCCVKg1FZUqMceFfjgmn",
  "key39": "5qwQZ7tJL2U8YJpdFoPj7Km33Xd6cmjptjGrxYFhaYzBqooCFjL7geNPnZqeXagtccG1wVfbuGuvHKWTskf1nfAJ",
  "key40": "Zbm71aAA1EHjsYAW3dj5At2azeyf8K4qzzgvYbrmTjFJTBTCX1hX3Ai33r4829w1z7nC8GeNXxyvjW9VWYqDYaZ",
  "key41": "63CE87bVQZf6m4fyWJYAfCqvBQkbhUxegrbfcDgMJQ6fCeLWeAmcHZaCS6UHJcjJD9zqyve2xHruri8X5eZVqk4k",
  "key42": "2HPQeebh3fKDWpR5sqFKnmsdUXJ9RccsGa7mrMfNySsDcXwUxeuUXYjAoc1hTDr3FFTs1pxZVUrNAV6m9ZbhaYg",
  "key43": "5ekUtfSF5YxTEqqCPbYfjFxRda1ysUtSvSkgQiqeCZxVPZWeAuWNWzL1Havd4qehs99wJw3jzPMnUT6XsL9gudjM",
  "key44": "2Nh21u9x2FJBBzC5a95UizNPhaZWSrEuxG3DopVgQgZw9TiLgCrk9mnxGVrmuHmhzMxs1Cp2BuPVSg16XZLWEUoU",
  "key45": "51XLmibQzQcRcf6FG872bRqq27ZSjL6mF2MZ2chqZzcQjzV5ZdNn728d1sjRrhTrzBJm5e1U21AxjZxnmDD4ktWB"
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
