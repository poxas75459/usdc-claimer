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
    "3mJm258BhBB8stcMWT5Er4oFAaY5GvCbB8TvmFxhmbZQ4P9DPpXERzD5DHoPZLGxz9XKThWeaVWU7X2gTrT1TwKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LbokfmWvU9AyEt6PAQW4U6WTenyUhCgKf4pcguKqRKDPAR9KH8xVRU4S39YEPSSC3GBa5b8DGHtZ6vYKndtkbsL",
  "key1": "25L2FtM8K3HmyD3P5fQa3horw7bXZ3Qx9kJc3QShE2nvSyUYjAoKSvU2KsieK74cKxgnRBXMVwJmQX8ckGN3TqKc",
  "key2": "36MqeQjpCNMsaUxivrU3FcGB57u6MspmGjm8yiHqY9mDGjbNpvFBc27GpGLscC89ZUotnQZF2FBqGovrt3Je5zHx",
  "key3": "4MkdggoYF55Xvm45VcLqkDJao4sWygAycntTPNzHMChsrPUowZp7Hzxqpqs9Qg6LFm2QxR46SG8N8csZS6ezfcFc",
  "key4": "3GzXtdhbVH2V9HTBvvbMUriggt2yZzZq79tvfjE9ECtuj1TMbHjgmAMBBfe6X1RPCPEHDHyuTxkdDertfqTtoSmF",
  "key5": "28CGmozxdwrB7ML2YKB5vLu2mUCCyrXCXkPo9hsqmGBKvGiEZsACjbxVCPoTrmqxipSaBcGU7RGyshuxMUCdjBBu",
  "key6": "5scNxk1GKQCysKaRXMALXNLxYfDUPUJqTMTG2mHYZ5wMG5KA2t65KLrcp74RBxEdjjrks8L5LC1vt9A8zDEjfv6V",
  "key7": "4ngmqeGbKugPDWr4AruHyce69xEFMj5K5wQC6G7akbA5S8xjB7PX1P1JDGNUJGr3X8DFFFAATkxnmGGpAwMmHPGo",
  "key8": "3FwBFTGjyRi9ik4cw6SeVFT5M9WgKtW9HW1S9aCFh3McHo67gDK3wwBr3xN3snuE69wJRphzrtMrUWvPU52GgW6b",
  "key9": "1vbT69KfxRx4Kvtcp3JtC8Anx7fyU5jevJFsc6mRSm4Z9tDKWot3UR5a9BBFAGmw85bbHgtEfXRQcxXmhAqDQSu",
  "key10": "2qBHWb8qKiE1GXpPR2gRXR33yA7eAAwEzrDtFb9f8VSVQkUdFU6Q8cq5DyGh9wdpPuEKcL2GUFZMqNinSpdzwmYK",
  "key11": "4H7umjdSfVvJGYS8yGhzu7NyKhneRzEzJzXWHFNutiKoukxU65cHn535a4dsrYxBvcTkan8nGFJ5P83xmR3RWugG",
  "key12": "44fnFqD4YemsXQm1DReUig7xC8kmkSGeZ3apC2HpERz8Gi7ecwZXCesK6eGFF9SRGk4pGR41ftPyktHznLf71J7t",
  "key13": "3TR96GDeUTynvT4AyBJk1XRSmnY7U1Uh9WRmFAAUiPcPN4bXSC8J3qHQgexyrEwu4zJ43rLhy7sXMDWmsTBhYQ9f",
  "key14": "5o5vU8uPF3cAwMregAzpuThTe17hSHs4MRhgaVrsEPbskZ5Yd5oJHwJWTH92nt7CSq6CdktSVHCUido4WGgmnBRD",
  "key15": "r9y7cZtf5DrceRNqGVsKjDjmdgKKQtHdSWY2pWYydqKULEy1QnrRPfwLYumMUVZ18zySHi2SBHMVcQ9fW8YduVK",
  "key16": "5fA8qWecrFRe6fku6fz3T9KPNdi9mgWz4wEjhRM6GTNvWNt2vGEH5DFVMiTFJS4baZpK2zzV4XzEtuR37GYKuxfS",
  "key17": "45chAp15U2DAYBTgjXWN7zRZTcZhtoNYbSMN3RZfeU2aqFQVHhqXRbdGgF4smNg5M5coo3V2WGqSRqGgSXmjkeZH",
  "key18": "t9HucAZ24iNryUWCHQ3mkrvuBTn4N3qpqLr7heEhnX65gxSNeuRtGBsqLWbgd4U6aNTUGSjnuv3Kunhjg5Rx6Gd",
  "key19": "sRAjDGUaBKmTwsc62Lszu15YXN2Na6m73mzzQjwJkuiLA8Nxoj9E3hgXu8rYq1mBvt5XT7wkkfLx1TotJtWNRJk",
  "key20": "SkuemKi8UxoKANmKQMEjxShGjNTg5QiESnYYmesYncWo5juQMQoo925t6xiMB3E1n6C7xnfLBtf17bV9t4QCeCH",
  "key21": "wVFzT6gVi7GxKodeQbeSFcbRANpubamLVU62AenKL2t8dpREewiyACTjFEu54dDkXmWre7um6jWZHr2NYvyxREp",
  "key22": "639xtKkJiChJximhiZ3gjgJhoHCbyqc55kKcZ9iZmKFBCPH3FwYo1AKVMLq76r3c8gWoScCR4G4QuvFgNXYczpX8",
  "key23": "EHDsWrDKV8yWs3L1PEYUVWkoUJykYyadqhXn31RGFHehGyBnrVDatawEi8kmUX7CwcNvhX4zGirx4eKRh59KNQ3",
  "key24": "4sC3f24htjW39G2piUJnQZFtizFwkmwTwKps1hVdw6vD2tibMrwkbztLWAedkvEB6KM2BGduaApigePc6hYADCJf",
  "key25": "5LpcZtmNqWqV9hEB385zmR7uu81wiTosHwBbcKupz1jjpL57w2sBfC5ZQpoSFx1t7vVFZTkpZJbQUXB8kUUgoQnt",
  "key26": "VGTUuExxhCaSTydJpAxJLvg8ZmHuxyeQ7vrzUasce5rjqg6i487gYoJYU29HUxGjvjbmtagTJpY4RtiC55AV8Sy",
  "key27": "3Ly7wpRGajXzSP5yojBw7wJuFg4e9nc5w4rwjBTZrHixrWbmpZMhjgyUEcHRZDEfGRXo4k32BFr9QveSY8aTQ5Ti",
  "key28": "5hsCjzBKQdrPdJ5dDpJhZTrAAfTesnJwgVqRmrVJgTcg9QyGwSAaanrxNnKd8EBfb2NqnmemrsvGNtKHefQ2PgWS",
  "key29": "28SFMjtNTEVTb6tGC1gZnpioAgBpTRqw3FYiWt3cbFzzDiGMc3tt5pgBdqStPQLjXYA47b3vdxFx179mYV1yZCjz",
  "key30": "EqTs1Kk1aLtcRSMZZYNbjXtLg68PJoSe8Fy2mwMPVmS7VYGSGDXKiF4qFMcDqu8Ua2fzRXqf7rh9s2QJN3XfzqJ",
  "key31": "5QE9VdAkm92LYBcDrUDGvRKgG2TrLFXhbtF15XXF4EzgqP7P5JX7HF4fuFJFjZ4zeLLXkhf4gs12d9TN39opd2P6",
  "key32": "55EPvYTE1c8G3LTD6wCzTF5V5kEWPSBqeYmkx2bsuuU4xSvXJUKQp2yKd1azjNaJDCNMFqCL1MKb7zYFxUpVWSDY",
  "key33": "4HA1ESYYZ4E5WZuGQkJgmieysqjETPjUGUaRxEGCKctXESQw6jHsPkcT93jqsL4PiNygD2UfaGqEtKFh7Pu4GLNb",
  "key34": "P6X4JkoDLiAtyx9VceKsrgwyJTqNG6iGQegVVBVpUYKiKvmLBRd5ZSTH22ZnFNdyqU94mvtQwCdX6dxjsn3KCAt",
  "key35": "h1VhJtbiLEfbsEgGaGqwYNxGWjUEALdK5R9UVbakfJX56PQ3He8EJ9SHa4dk3R9wJqW3g7hfdKyA6oWLM9Sbukh",
  "key36": "3U8HqRrHxbn8vLCBCdyLEN6peW8vDLyXXnVtF1jGAEgDVkw5VJ1FABNqFvK531ASBvVivhe3U3gLsoBVuJGa3gpZ",
  "key37": "4gRyfNRsknS3vt5fNxyXoYHHBv4r1iMFf9s5mzUA3n8dVjm9QYNTtEigVhpDnrVfL8tPpyaRuNYE4SJxiTp9ZRWs",
  "key38": "AETAZW7dcKqPmCfNqf3d23ReworC8udd9iednYDEu5h4Dt9wgBiiQ1UnSmSQtmd1Sdk2wT35Wz1B6BsUiHEZxuS"
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
