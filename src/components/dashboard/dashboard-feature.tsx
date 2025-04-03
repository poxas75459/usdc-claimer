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
    "5RAJqLHEfmTEXbnVC4hXGLA6smnDePA9UNnamJSBwSMcFjWKjC8zFGS79CvcegkKe4azmiFwp1W1fYUrJmzH4Xem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tdEzAMzFDV6GcWaYJ3fpUJcUAuRNGjrL8JuGJV5iuCATubjb4mVoZWNbc2UhsKGX2J5km5V6mep4KKT81KVujPB",
  "key1": "3U9xK5gMYLFqjJoU8gY9NHXApxsaC13JtWELDFiu9JKLxHzsK38Vu9WG8o9U3aX8bCFmoMHnuEshgX3UPhq6ZMpB",
  "key2": "3mC335v1vMVW6wR7xXvbHNTHb6TfUSyAVKgiShjhwoYntwJmksF53CY1sVyGz4xhimSaYB33zNAH273DdebHrtic",
  "key3": "4AUBHkrSct6DnEJiQcNWfSESx2gGs2rddqGVftGFC22uEgzSMzSDZRqzXgCky6WwrNdDAxgujrKHoxCs3mzHGxrM",
  "key4": "5rdVJNYpB6o1d5tMfRbfPjHKLAB3GaJ85bwkpNBreQV6BrzoYqkbjXKUkPA9fMvYceGbkwjDhTUD2XLfhqs7LXRP",
  "key5": "3PoxgRkFNjpUdP1kTsHnQDM9vjpKNWCoh2TkxsLVdPuT4xHJWCaCW32kmYuY5S5F8VjncZitdwkREgWzNT4my7TC",
  "key6": "3oXKrJuQtcBoMY5wqmwyDGk5NPrsdpdTjk3sSwe9sKsZXgGC7coR1HTGXjj7Z2dB7WCj2boxdCGzTqLjnH67xtBU",
  "key7": "3LGxjVYC2r7TDem3sSSHc7hNsdMadgFy7MaaJY9ygS75vs9Fc3yYhfzthE8HSwCm5k4dD8FfoTJfy22W2obg1uRf",
  "key8": "4rDWQYAXs8VVyp9HxmQSDQ6q1Rs46gPgVrbdHCoWm43v1K1roacBEN6zPtyWqCN9xAbW4xyiKJftfixyUKqFjvgo",
  "key9": "5fNKpjWWxnrkG6j5cpkwTouerFZ2SaJgJVJU1ZYutEandWd6eBeEyMXFTCnHPd5bN99fy6fr6PrU2YcpEikCYMYA",
  "key10": "3Qhbvr8yV93DNnE8TKqxfxWWggwJPUYSQx5EAfG33Ee8jZCvivmPfcn6C7sy3qivEEjgvT9Zkdu7vq24N2btwjwf",
  "key11": "39tACVzZ1r9tKanmKtss88HKcQ56jKWTTiUR9MvctBAYm2EubhBBkiJset6hVPzrAJfRw7xbrkFNEa7tNUo2AXve",
  "key12": "3sv4xvRZspU4TsnhRT1cwxngCGftf6Dnuksmf85Jsgdbzy4LdvBJwoUj6P8Mvx23icHdPMwcFSEZqrSv6CnC6s3N",
  "key13": "3z3DHR5Djd6gCnSAwpS9A8igxcMchwJqFLy3zcE4vrqJgdrQRhnkjthNy3fL36WGGCa2tqSp3iSzSa9i4vewGB11",
  "key14": "9SkcZdVRanEWzWsCkBqtme1GHe4FUDA7XJ8FC2d8KdHMe8VAvR15h9sWKicyw3rdA4s5mMoPPDkDyUboBFw8Yow",
  "key15": "4D645gWJnGuJ5u1bjpa5hbJLny8fo6GZwMKhorvtfeRsMG9BDHCxnRYT1ez7jteym46K3qEe8VGVnR1gMZmTXFxB",
  "key16": "3AZdEXNzHqxNq7qak6LhPEbYjJi1sQD1Prx3jKJ2PB53QNbA2mVLZxddiBSVuH2T4F4uRYasJFVHnpWKiG1QM7kC",
  "key17": "3sE4sUeBySa9VC7yFZq6D3WUWLBJQZhj11jenTm8w1pUjp3HenXYDNXk4EnKJuhKfTtBW1rBXZ6r8ivwqkTDUJ7M",
  "key18": "361pDEBQXyBZKkNcgQ695CKcykYF1g6orFFSCfQwMR8vGU2oPNthsYDYWFywd5E84xTubqECtvSPwTfGHA1MGfPY",
  "key19": "WFyLdXQnfDzLvP21T9tr6nSpxk54dYAwJ3e3THYVY9ib9wPiy8SEYVb7RaqqmvbiMeH59RAMbBFDnedJ8om4tgj",
  "key20": "2LeM2oXuT9iEaHXkXW5MU3ucd5sG8W2MNiUHvJ78s5YeQZfaj7xQ7b7cWeM7vwaTW4kELduQ4VWzKpGp15U1QTKE",
  "key21": "3U4j6vZMyZLfmLTzGyD9riCtMtcdsp4M5V3T6ojkNw1qczpojZsf8uubg9atGP28FXR6vjrCbC5dDjnEK93BtR22",
  "key22": "55VmgFM1tXeVhArgoqk4viRmxxeD77ANgurnwH9sSfQjGWSSTsTe7SuPRBPQudHc1tdC44VuDDDea1a1Cd7DcTR6",
  "key23": "55yeqf39DLhesCk1RoxX9QoBM1a58NSRj73db4YUwLtrwdL6Z2z7YVzdpQTSQCoiTJHzFRnTJV918nsowycYDxQz",
  "key24": "5LWKQoS4554MTxSvV2bwNA7ReECuHjwiyxTaxqZedViJjKxYpXXb5xS9r8zaBNwYrjGzM3FL7z5WDANPaMtzR2dB",
  "key25": "3nuWWQe211Ju7TeDeE5U6GgX8K6XYh9H2sXAH3RohLxdFrm4xP6GQLTJEQn3rVhnowHcBiWRm62SuoNdytVBLAwU",
  "key26": "2937QdcaSb6KrNtPVHW1jspHeMTmMtF2aLx4NSxTmvbraewxU3x3EuxYfbQ7etttkitdjZAqh16FJZFXcicBpWXR",
  "key27": "5jktX1vqzEJpuXecemZkQwYtHG1Ljwu4fZmamfJDpfbCAM2RfKxifPdrPwQpAJTjEvLmKYDuZtXW6rhtcbb6aZr5",
  "key28": "4YbLJerryuWCT4gsRmZbapEG9yzQrbt7vvZnjp7mRy9qhJsHxFg6hwNTC3osgp6ECKC24QpMEKfLdPwmKzBxsbjV",
  "key29": "2URAY9ztEwawnV6eu36YrT3wvBhpzRz32CNxKf9k3w8ZKA7UMFLjA1LPcqjvuwv3iU5J5QYkWsmiSirrP8jk8EZX",
  "key30": "3GTMVMmunXFXcx4AwRMXgpnVzUzRRk1m4isyjYHCgNW8SV4UYcfmJiDysVFCyvX2VE9tL9wb4p3kkYWWoLwAsig7",
  "key31": "2U36cXBAQoKrDZxFBiBE1xCBe3C5BUW9YgSbwaMUPkx3BjN4orh76Ykpqf7bRpfJi1WKmzYnUCR5ovATJ2B8bdbc",
  "key32": "5cTfYsQ4PgTkfcRhRLhgxwd2czw1nCrV2FXJNq41MXSgbMyZfHSGhPzwrZznc4Z2tiAr3AMV9Vx6BuAkHJuy4AuU",
  "key33": "2izcakcGsRjWRWsHEMMAV2AdTYZiJULve9gTjo6UFX5ssNyyACH2tVWLdt25SPNLsGnpFApGkzMYnXybSG31gBHQ",
  "key34": "5AzLnmZKq47AgGaWxmighdKhoyfJ3P8Qwj1q7rN5ps1hXLqPRdEvxs21oMB8pr3WSQ2tUDndXPXBuCXciewfqdZV",
  "key35": "5FKVoY1mHCS7oyF8tCsK15ApEZJXS1XmqxHGWBc76KKzfLpTinvdMSbR9vxhuBYEQ2cd1Si1Y5aWNNTB4fDA1hcb",
  "key36": "51JrUUPshMJvmJX5pykorHppnKpWiC1d59KQRMo2wdaV8anKhaQqDmW7mDuaHaGkSJs3HjVqSa5FywH5ZRXu4Lk2",
  "key37": "Y7xVYhcCuUxJkUCp7iSEb4QKPuWnzzcGKaTXabkrCzpDnAMfkUYDdybAFqr9HLBfLTNqaPWBvYDnnerQ75bFj2U",
  "key38": "oYpdeBezSm7KjYrKRa9Vm2uJAikbxaKQk59SpsLf3wh3NDbwiFSh2CgF3Krx7WWZQZRchkkRv1kbVK54gxVTK27",
  "key39": "3EaiTgKEpcPp1oTgzcPGk3gNWigmB7dVArfE8undn8eSBkBveN26Ekbbi4RX1wLRuyQiJY9wtTTfdFbXkyZntPzG",
  "key40": "3uGgmUxyi6gKtdLBzj3bv39TjU3SFhjgdy9f6sLhqg5EkCmJA9TcKxn2rAaRaLa9MWNJwUoK1ovvUyfptHAacUPd",
  "key41": "474YQSN3V7SNn8VBAVTZtTvcEqQvTVmk4Gs59wXc6BNWicCgBJ9k1j7WcrS87wsnHUk7pV1VAUDmZn7RrmNAfs8m",
  "key42": "4yuym3XCsLim3CgZz9gqKtXiakvWQjromokAXPX69YG7Jzc57YQV99PJNgN85f7DmpZ3rqA7ygq3y2JfQrCyHFug",
  "key43": "3Cvy2sFG5ZjseQu927mYEbzkEEZZtFSKqCiuENSqkCwbbX1V8FGgSA3PDXVYQSNwp8BgRGAXudNGDZp2gHHrwqpb",
  "key44": "RB6jPSUdQP1UorquPKEJEjGxkZ68f1hCBP72985geNiYtbfKCm99FLPzgUrNqgv3X3J51z4rbW1ruGP7eUkaHiK",
  "key45": "5iAwqcyLdj9FHcnoXYK362m8hR4Vb9AbmxmCKA7fpQ7cgLSkHFuYVFadSYG5u2c7Ed4Usd3yrCoNq45LVZqyCHan",
  "key46": "4YL1dvSmDszXh7c5uD3HVFyMr6PZSc3TjtbDqMVH1UtPKPtn7ZKXjTUzozNFodNw6DXZQZ9BnjV9xVyeamWy1eep"
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
