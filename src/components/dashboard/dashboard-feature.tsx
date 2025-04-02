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
    "NATGA73zverhrEhNhsAz97m6GWBJ25NVUekLSuCoHksbdZgYWvAxPZWTpt6yDyuNLi945DykYemEqfr7k8qxT3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZMj2AzuMvvgRmLKuni6qZGFgenEBUGELVzL4ozgC2sVQKnANV6Tf9rC8GjY95n9rzn5VCXxKDtCQhpxrwm3U6ra",
  "key1": "4vJgd3VN9XcP2afpdjuLAcpGMTFhcZwgBYvT9HRrjtqVVP8b2Qd8mvRi9XsFzsH6Wx6v55By7XY324XjVdypwkeq",
  "key2": "45Q3wVNECjwCG79sSYPFWrid1Beb33HCavaNCPgBRGm6WSsahBE3w9HmbwsJQDJfd8V4QGw3q1Jk7TfrkpNumbyD",
  "key3": "5fWNWcqGz7DrNEDAhX5U98tmNzCnkgFnusBUB1h6XUEFkjnbCjyZLDhS5zi2vdvFKBvgkkGik6ZSV4gwAoA5hMpj",
  "key4": "4brsYt3z2i4HZ4nUB5fJEfqeM9JG96oVm1TtWBnf3tJd7jKkNvj93SR4U66dLurpENWZCPgKmRkVRhZvNfmv8Bee",
  "key5": "3H2k5GjxGwy3VPJWFVd98e9wKJBdqD6s8Z56FemiC9Suet9cSqQHCzqEhkQGh25SV5bFJgKZPZzi3KiXrCZ7V3AB",
  "key6": "4GTH3GCR89ze65Ta4Wc4oz5HHiLQVYBpr1HTBTZNq4i6DjeaESwmyzhuLxUHtWa9A7NdxMqyUoxvrd9Xw2wJLUTL",
  "key7": "4ggsajVfFxMrtsaXgfikHdo8MJovtbe6m3PQ4KbUGgU3mDEVL6CZoRkeiG7ZXfpnPcTqxHFERAMPSF4W3jeUDdGh",
  "key8": "kgEQUiG1GYLEciaUQ5xAxU1zKfYyMAcvAMaSooMJwE3kbakDzH3wmJNJq69LhzCtKQasNXjyNsU79KyKoexQzJt",
  "key9": "d9vg1Hz41EFzgAGnD1PMN8s4RYxg3pJEC7atLNfJdrMPcgayhtR1RgorcWna8GG3Jm2o1krCCuovGZPwmpoZy7h",
  "key10": "4j713k7wsNGvb8u2GHbnvwKKbi3CBhswFeB8KUT6wUuSppNEJNWftEkUbjKZsjNGc1jJDEjkdLbESpt4DaX2EREZ",
  "key11": "nP33R8CzyqK2dPzPgYyA3rEynsaTyrioBwVgduemEatKDJwuyri7J23LCkwSpxJr4wnVBZhkPk9Pn2NWo69Ltwh",
  "key12": "5NcuEoQV6CoprP2pYW7WvbE1K3HMCEE6z7meApdoX8UCviLxCSSKRjYBcLq1qonQV6FrE76WKpNWyDkvUZo36CS3",
  "key13": "5rR1R34kwdWHR3ttkhjhKNkFo696nM7xHgFvTHBpQsh6Saaf5Yk3fDJmFK7ypuBAFXEMTQUKL7ycVRVVefrBsPBk",
  "key14": "464Kf9eyDtN4mEFEAiBXXL1ezBanD473BEHX6BNbqySAhoStEwpgKi4n14dMm89JdcL4ptzerthVVU2rszKDEj56",
  "key15": "2JqCBabYBgbtWA7omRGAEhDgPUHHWvKzXKSDNvGopjCAFDLkF1QDPYk5KTbSGkcFx8XzuL71nXr8ZKAKUmF5j7fA",
  "key16": "63nu2CwvSqX7YotnCzL1gDkcUu1PGmAqeqQEcQ7ScedhgWyffmE6ceGPoSbUb7BW81Foebz7MpmywRyge9hZQC8f",
  "key17": "5mA3U5YofBExpnij2JrRPfLT1rEP6C4k2V7fWaPUmHAXrq2YsRueamHxU221hgy3NmMn8xhjcPu5vtjR9ps5SKph",
  "key18": "5ZSybcLc4H1geuqTcKyjySJFSuYsdMpUqwr3dCjDMMmDTEubTMvw5TShreprkTzTCJGcS9mtfrXYRJsFcUvWyCxn",
  "key19": "2DGB7g6RZ8c7yX4NPh6mmMxz18HnThkDeuLKsnVSPErfXWi9Gnq4wSbnC41sREvg3pXvEnNgmEGsdkpaGCwzi8ZJ",
  "key20": "Bhacc6DdYkY61RsmTsBfSTx8qGyrsT4Bk3EFXLx4XoHrmcMisoztMKXjkbSf1vAMvEAUugYX2sKgEkCZj11xf1A",
  "key21": "2MiVmkWCGLVV5P4GRPq7mk9nB66K8gQwYtNhJaP7B9ukzKVr4SKLaTveGE5VvFmLScjPqHDXpEFviNkErENwysoH",
  "key22": "5C84WT25bzDpTw9qVKqNv8EVJ8H4GvRgTzTx4iHHwEqdFZnN2ZMsxXW3UtAcHX1pCgK3MjWU6jeXcJ7yojMMssE5",
  "key23": "2smeUjPe4m5KvfUJNaSwiyrC9AuZkr5UWvbEqsx7oJmEtuWqf9CbXy9n9FsRTfQQfeff9kfYFRtkBhRN9EHjY1Z5",
  "key24": "WBYHQfCicfuUDXc9Aj85x5Sia18jzDjpuFfZARxHjCXoqqvQ1phD7tYKcRqP9Krxwdnh9qATD4Bd8MGAxsArgg9",
  "key25": "5zXz54BERxHRypHH9Ngkq6TZJWZ6oTsyAfCF5ji6RhtPWf8xbqWzrnqhHB1emGn8mnuTwy1ohSEe82n6J1yedfVk",
  "key26": "eRy7MeF2ytpumSyCzb3XVDra5dhKZeBRDA64zmEH9XyNaMg1SVG9tptSLEwCitxwnU6nyurBePcKh81fc4CKhaR",
  "key27": "2qKogRxSPiFrLrapnzQ8YzpVkHmJc7eYuHssR7KRWRhSv4oZ3heLAJeRsHmT6wer2cQkyChjh6BkzZdGi8z61Cnq",
  "key28": "425RJ7t9NCu8w176PMNCrZWdfRn4SJzMhb7UkgpPk9RSaph6Sd7bk9onYFSt18UkwBwHLt2GRyMYmMCiCuwkjUs",
  "key29": "4Cs1mG4dBCfQ1GeZtvN1yU8NQu6aNDAYwShfoFx7LTZCc59pi8FGks23pg1hk8ZkwxsVpyQ6AVFXKrkzyHertGg",
  "key30": "2namFwMtK68mcEZD1mAuMEp3nsXpfnB49vXhswpcJARDU1ky1n21BbhxJLNSJBxm3msHHCUkMhQaWUFjuGuHox5J",
  "key31": "2viBrn1fcakBg2gkX5YVG48LsSohG5GUVCFf3Ytc4Vz3wrtfCfN15ZsGDsaYuZxtYf2SyyMv4r9bKHYuLVUJu8uU",
  "key32": "35s8tH1zkkzezsC3QtTQCccvnC5gjbgFQsd35qcHUWcpra6Rbba2HqvmG9ovWpkQDjfivGF5pqien9f67eSyWiMV",
  "key33": "3YuraQd2sQvL2ofEiQmawUDCDkrVNaxTh7z5q5ABu1Utk2DoAMHNJYf2jAnisc6KKfNsamPH22JUTSAypuUxWEzQ",
  "key34": "yJ6vEfaTSw9d95GXkgyAKB9cZ7KmSqY7Vfd86npDFF1wduyZQgRgbav82tguvsmyfnJJFX4JEH6WDYGr4WmEWTE",
  "key35": "3vjbezAvYL79Znxtov8xnJNqzqmMZB9gcfwEPfGAN5RUBywiuyLQP5ntCtMU3bm2GEPxgKQJ4T7QNYKhxZLyRcXP",
  "key36": "2oXBx2xhYnXY6giPN3TtmztVTDgkyjVKvUoS2HHPtRY6vgPrbxCCYguupUDDy1fbgXfvC1RYXyB9GKNjJ2NUFDE4",
  "key37": "429G1dPpfbXrhiGd7oPNVrzYucrJd7S1NZrknfFGFmb3FvU1isjtsxRFuz5yyEaTKLXaz52CnAuUS8jZXhogXjBV",
  "key38": "fzsNs2uCVwbBnSPbAivR1Geng8WkEwT4R2w4YeL4j3ifnxS6TuMHpDavp6FYigrhTRPBxQJW7Cexix4XLj6UdxF",
  "key39": "2k1czA5rqJvSGsb3p4mBiczfTqwYg6CqzmLLt1pFUdV1UbyPVHH57KucPhJ8xv2nwqRMsm2p4xGRAZrEYbZR1fbq",
  "key40": "3JFmnJA7g1QiuF1Z6syKQ5qTNDXQtnapTPGHUmqNVE9CpALF2qZ8eeYCMsg9NHca9wjkz39vkrLB74njfAyQh7tB",
  "key41": "2wULmDBc9HQXn9j6yg3H59AgAwxBjR74nQLCmDm2jdkveWrYy1Ep9omX8ZNMgfoz9JZzJRhhPF4mpKgPLekvGh4v",
  "key42": "3JUF9vM3YHLiRDVFQqY9GjTD4bqee9ozo7W8ExD5fgSTr6d1mvXvRw4B49PQLouwrBsXtQVXWbyf63v5yZYwFK1L"
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
