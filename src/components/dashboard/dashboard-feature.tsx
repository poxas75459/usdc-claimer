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
    "4domcrj8tFFKRSaCv5aZoPKcw19sT15suGWm2r7KcZjZuk536CNkmCX3AWTM8cXZejXc89nP43y2n2K8Tr8Qrq3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cDK4wwEuAAQYVpg4uKbt2GdajEh2dQy6VcJzUQDnpfdFLZwkyxR9zcK9DXDps2WP4bkJehgvqjxAsPbvJTrsEXj",
  "key1": "61XUvWsqHkUKyG4zLtsPgC74yZDNTW7VDejwDggaDinJ1bc4dCDr4QQ3CoF5rpYDoiCTBphsbZKN5wr2aL64LVSn",
  "key2": "5Eh8LFBeDCJBM9kWw29xegnGHS4zVmSp74q6hexXGu5PJEMgpxpc3ueTmTFuVeqhLvPUdUXod1onivc8vBumwfu5",
  "key3": "4BVbLmc35f1chUJxHNaRC1bD6T2bDrYMrTnUasi1bRjVNxrMfgdHcR1geURvhZAYn2cBCkhW6PLsXsyNRL8bMUVd",
  "key4": "5kb1VNdrNEozhKtnkEWCs2SkJY6ctRKdke9gruGPftRjKSGCKRtoxkMCRCGEh1YigdByY2uP7kpU7QpeZgZC6253",
  "key5": "4bsWYL7EKou2uFnxVcHLvzkVCiW8MLsma8Pcf9YYZMobEEYwy66mGohTvaQdUJBBWdMve7bBsAwMbPBw3VZnpBeY",
  "key6": "218Taes664to9a6aSB1fehYnFGkdzLWM5u4rK4wmFarwmPHvaRQc7D9EGnhx1PrRXn4v92MqRxjMK9wXvAvruhE4",
  "key7": "5qTp7AVaXkqadMZHNNx7jrv8zsVpcqAFkVWsWULB21kXN34ccJ9zapK75LcodEZZyHJXm1ZPCgaP34R8Gvsp6Z1y",
  "key8": "95C58xoZF2FBQmaGKPXmrTQTMBi9QKVhG783nrYn5yMFQqE4PuQ88aeuuqzSJQDQo8AWhAH2jBzRHixFmHdyXhZ",
  "key9": "5WrY7pCd8pykLtAhgYhdDFHJ4nQv46xj64HiZQ9y6urwQR2XKaERZ4J71syhXq91jPjxfcrNWAUNAz82PgxqC5t9",
  "key10": "4wD3AZ87eVhMH5dnyK3ruMW8PnhEV7gPEyYpA3rtu8BGkGWBVjEBnT818TZPDWx8tdv4FGSe9yuJT7kF9mkQGNY4",
  "key11": "ES1hvMhtYb6FoPqJwj8kDCqws3KDp6g5W3VjE8iPaVRYY7EGBMPzeNhBheb5ds1gio5fcxF6ri3XZL3hwJSFiha",
  "key12": "5c2nHXQNjAGgDM2rYiSEUVYPkxcncjePQck4ugqQBmWDgo8nX76XVvyij3ij2UoR6uF6rLUxuDMDb6Cmc2TnLbsM",
  "key13": "5PEBpoW6a3BfLzUN5jLvQySaJyvGHvnUtW2NH2eEV1kHHh7D7ZMJzX7abVLXWHxuLRpACfzehZHBuKJR4R8FuXJN",
  "key14": "5zXBwptjGyb5sEHmgNV8dBk1TaQWcted7riGfXY4KcmPuQSPdvWwXmystvkh8yc2f6PdPkfMh3hEErYo4EXJozvd",
  "key15": "4TfnCdCb8zqtF1V1jeZhW2SyHrbcPn9LVHHC5M7iyXkgzEKkL5Uchk6GBMakNSgTdCGX83oFdeh32Sz9Pxyhp2o6",
  "key16": "67233EGTVkbgte1zwnWsrXXS3PR1Mnd9ZsSePJd5iS6f5zpCibWu6dz6b1keP7RGyheSvGJvspGb6wCAPNHQUKkc",
  "key17": "5sxyBv8HJRWpuKVvoP362d7xnLkPAmw3kiKeDci1EaooJm3Xw398nWmVU55aVPoURBe1itACumUzCwnjwh4KZRPv",
  "key18": "mXGwWphRrRPCjQ4ZAZhEwe3842KEwb3tVmivpnfxrbk4Hho2EUpqP9hZrWd9ohUt85cUjBNAWe9yCiTR5hgnKTh",
  "key19": "2iFSLsnJ9iW4KD8i95SHD1x2DqAnhaaXgCosFaJnK5H1k3LjuGJycdgPdCBzHeAqT6tSzXpcJoXLHMKv6BdxyiG9",
  "key20": "4sPSDKW7kgFwphHbUzdc89zSTvo66frJBm1EhivXGk5AVcZmhAgWbHTCKx9LPxnKUb11R6GTNsefrzybxhZdxZbF",
  "key21": "4mrP6WZBr5aw2tMfN29Hyjb8J899pmm5LBLk8cs93D1Wu3b8Uk1Jq2Rj7AES44n15sJCQ5juAkE6TQcnQe2ANHwA",
  "key22": "gY9j2VpDJ1bcCaGXeL9A3VrBpYSA4mAxwDYDwzJqmLhyHs8XKRZh5mdhqvyUi4FK1fB6g3RC5C5Jcr9HfhM9cUG",
  "key23": "73rVhZtXaWQJ3ThsAgrNs2EYXtxsQ6gTNuCrdXg3DDjrpz7ZCgxrfPskeJYm2NpQTKFUtdeHokUb5CPvmeQxrQU",
  "key24": "4NXEhZU9x8G7pvEDWvXUj4gbAdKkd22AHaZEsJgantbUGXqNqP6YzGMmZuT9tW3Mh77Cs17HZaK4A3YjCncmRNY1",
  "key25": "nBiKzZjk8XBV8UXGk5BT7mZjBdcUiky3deXL1HehzB7zRBDj1UEB2zxKJ5sq3j1nvPEvQ7jkNv63eYokvPgUF5i",
  "key26": "3iyS9nDfMyDmNgDPC4t5qG66nnegDvcSqDVifFhyLXDD3WJJwfWQjJUzS52BVWNtUdsiQfx7dXZG8wkkh5wXK5ZU",
  "key27": "2wtfLJQjpwFR8ZseadYDAnLaPiTGUWEz9B5TGMH5m4xn8nP6fNkg6GkKMXkooudBVkp6wuRevnK6uopN1MmVELZ5",
  "key28": "4wnuVcb5PzqBG2DGqR5xy5TbBJdceMWLLfniAtRRjMP3nbhQshQqo59D7RRPwoeQxNwKY9r2LpP4seyCZzhYoSw6",
  "key29": "4oq7HqN2eTa6YBJjtSYd2k3tycDv8kHVAsTRvfAZ1h9X91mwyhuRGJtbeb7AfdciNghsDtLeNiTuWV3DdVFAEw4W",
  "key30": "4FNabKkLw7Lghs4BtuTkGEmALARwYA57SXh8rZGU6vDxNAnfdfkQm2A5Kc4CZoBLsQsTGpk3MTk6JfH36Pof8MEu",
  "key31": "b3HZ8d13mifQX5GyCGmc8gRJfRiQNJDG6x9TTXtgxhWzJywc1QU8sp1PKuzeziNo6BzgreDBdrVffDeB2nGykjr",
  "key32": "4KbMkf2t5C2gKzh9F7pEVxfhsmWDTn4mb7sM959fsUE53vyPGz7hyXwoif3DEsC3C9hcsusVgMp4hYCeFnb5Vw6D",
  "key33": "57mAfzPhNKMfFwopZcLWMDSVcuHnsojqcK5LbHavFj5tnNdZkcps2qPMLSGtC75n5PbxxAguBndETTup59nGP1Py",
  "key34": "3Zki9xg4cZNcjmX7d8gzLZWr7R7zYZMuYePRMUzVALeuVhgs96pvMwPQAX9zeHXJnb1CffQMQpawtd4kPMVwMU89",
  "key35": "65qF9kRZMu5oiZaPABLiE8MXjsxFgAXHTfagMQXURWPfi9edeKxnWGbrLQ3Qo6FkBFXAGLXiE9BA5RVCrJCv2Kz5",
  "key36": "4hASAMrBqFjBg91Zek57LknyUbzT35X8PF1jAPoZrFVESHTBgiRkJJXgpc5rr1Hrxo9aZMhKBFAqwjDuJ5XxVmcJ",
  "key37": "5wfWTYtVLYvdBivDf9kaUdfQ3QzsS1rEFFxVD67oP4zFtfmtdhAC62d7DYPmeJxWjAZggi4gdxWF5phQVfHqjGGj"
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
