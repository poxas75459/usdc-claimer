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
    "4fJgXbPY9MoK5A7sjtyoGkpbexK3yegyPGn1WHkHdMaRSpwDgjYKUyjkRuuAkdNDmJ4knWLgE9xhgKB8jTd2eURg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bi7R8sYAbovGcR4cSbiLfTV21S1TbGRod39gSaJGTFfpHZ5vCjDGpeespuqokUyHpdgKcx2tztYE2qWVDUZwxYK",
  "key1": "4f54ggx7FSQRdRTnbuXiVsssnSu21syz3gfkqLbY4AGRoXJBAbt8N1a7zke1vy5Xs4P9AVXJsbhNTpeXqMzpPmbn",
  "key2": "2CreFjWbcFSwoLCHSzKmihWF8CG8s3Mt93juqE3D51ohG8tFiQfgM3i4FtN2Gk4SvQTejKcJ6hMYsyWfXVqCwZ3W",
  "key3": "mQ9HMxVse7UF8kjF5EkaXiQqHVvLx6fB9naTqhbP4rgeWVCbyRcFnu7BRoaC9MismHNBuoDbNhc8zHaFpKwVVRa",
  "key4": "2nf56uQNKPQ7nB2WK9wUqYN4mgziSnFpm7EzaZHEf3V5kHPmDeSa3dTpD8hG5GpqFjrCELSkwPKDP9sUAfspQ4YU",
  "key5": "2rHyV5ESPD2Lc3vEpkEZWq3eG3i6Jy9ViaU9cQrpZ4FASjDTPtEjiuB5vdQSzLPzBeev1bmcFvj39YKDmndhhoMZ",
  "key6": "5DfDNYfTqFCq2vDwcPutB6jNqEH1XBRBXhC3ceCxWu1BpwkPGim2MGKF3J31wJuY7gfBJPmVzbFNFMP9GQtj9dLk",
  "key7": "Jrc2cY6acCtahBvL2tJm8TKsiYuFNshR2MyEaQegQeULs8Kjw9bDmC7F293uW5rAKVE6zoCpvRM4qMq31Z1oN4w",
  "key8": "4Hzmqf93q8tDKKF4Vb4e8H83nFYt7Ge2Gqn5sEL7qojEVbBmtpKeWfWy8iSU5mtLGbo57jBf1urEeUi3YPqGwKst",
  "key9": "2x7RyVjphq26YnZF17FoSwRdykJpyzJU49Q3ypExdAQXH9Z6J2WiEoXXLfaVT8G5rfLrEqhuaN4VnC4TGXra9EfA",
  "key10": "5Wo7WxyXrJJLaMPLiwk3odXXgpCE7zeputmvcbWyotm2B3ktQsvi8Ywkv7WK7AbMsEDvZj2Aug1PNZkuWWQZC6DW",
  "key11": "q57ky8twRGyd8WcqhuNbpPoaYLPrYkJmHYXd723dM7taWncDoM3wLVbprZL13vaaVCKo3YsBRfEu2djRG318xJW",
  "key12": "3rFHpo5coqRyRJzm8fxzGCWnZzR35DkgheqnAh3sySLv7hn6zyopJC7Gy5TVrCjwVb6GS83f3w7HDHFDzYPUxKfd",
  "key13": "4nW46vhjDrnqsBf8fnqwkQxugUJpANXwERr1UQEn6A8LrYQ2nYNGKe3fcuXizD2M661zi6gm6YcXYm82Yv5D5xtx",
  "key14": "kVTJzb3ggduj4f8i35Rf9VNTqdYApQ4uvEcnUZAjsy6YjxW54oRZiGKyize1ZNVfBivBPFGsYtcsUqE8UntKCKT",
  "key15": "3eoMCSvjApwCtWs1BR2pV8QeNU9sKG8mjkNecL76c6J2nbsUviVSK4UsnGnfFQYvmdZ7K6MGty6rhN9tfGXHU1Rg",
  "key16": "4GKtBENsBoyiBJa6FSwJXKVCH7kgfSwDJhVHjwt4Dp1juU4fTBJiwpmZJiGZL2F8E46ZPchNkmpVxqivfKXvdcE3",
  "key17": "4jE6q4rV6bEtLtmEZTndFQVBnrgPuSXowGquhRijmns2Kx1rR27Vfb8HdJij3NB2x9D4BCNCZkcZUHLDcUhU7nyc",
  "key18": "5xFupAaSA1w1serm5t1tYCBKP2LCssgCKei4LiQRx2La5rn3AsuiGbmohSVHfdA2oo99d9UUaMtqLbkGBi5HdJVi",
  "key19": "42jkykhrtDs6HwW2N4aNE3Xyj7UdmJ1QRTVL5ZYHCKkvDDX1M3MdsEwD6p2cvfng62fVRjAeqHYDdR6ooDXyCnxh",
  "key20": "VvwtsUKttqWEkcqGSr23brPAVkqWVp4HYRfZUeSAXy9GyqtMpHoBcTJLskRWcy4n64MkSAVgfB65PDrqak8dgvD",
  "key21": "wLBK5pUZh5NjczDZ4LamueBcrwzz93Xtxcu3qiQC1iRKSGnc1aHcUrcdXJP3iLwnfbmcEUTbGY5BTvLt8sVjHe5",
  "key22": "4EqLqQmw9zVH7CTu2KMyRchDTtM3WuyzCjtPb4HZfFgxXvm1TVTfqXBeWiv8SZJ8ama1J2tvhYaUT7RYyeNczhR6",
  "key23": "2V1Q1Mne7vnShR2B1SLyB8DpBgsSnLHLHbjeLMmifCxfBgrB5MaW5fwhc9WKsE9GSNkN4Cv681hA3D7PDH3zibDL",
  "key24": "4cGgAm26WUCyQUeokNN2bbC1jZXuG9NWCSHnRWRbjxRCgPspumCa5KKUWSyjd7P61emEJNTCnFFPhQoVDH7LXtf3",
  "key25": "3AKmAgYk7JuViBHvUn6biueah6wB3fEn3rt3wpnGBSt67DGfQURPWZ2RBhWMRmf52FyLtkgjSAxesPG4SumxBRb1",
  "key26": "49fHVEk8jtMfU5U3cSLoFieWn2cWmqm1VRyJiUZjP9THCjvV8WaYd2NdPSm8facLaBvesnLAY797GpPP1Nz15PpD",
  "key27": "5bAPv13X7BCtwgjD67ZaXZz2rYCuBfm1frx7VGYQViiEMbeMAYL4kvX5irnNGGyZqU7gGvfHyXjT5rGYMmx39Ms2",
  "key28": "4C3pcBQt8PZGfwG1mh98DjDX2a6amu2c5Ei3isYpvPmEhqK4jC4xLkpTddMfEcL6B1E1W6JaVHyEazvnrdh2d2MZ",
  "key29": "2vBsP1knjPf63Y5SHzi56CB3Qj3vhQFh1euNXS5ypSS1TCjcLWiZnsrZm2vH3t6p7Tdqoqa7gHtqF7P3ebRXR1Ft",
  "key30": "3nZXbhXcE9YYfV7BgFhRyFYuLqc22JXbz1Xm6ave6zur2z9DXacSsCFGPqWVUfpTvrD2TFhYEvwwQxJRdi7MvZ2H",
  "key31": "G2yh9f3mLJUCuBStoSC3WvmXLsKj6rHSTdhWPM8khGL1sCw5xiCNyMaKPMggjonJjFsEarEPU7gyrNrmAsBRRTi",
  "key32": "o6Q7oJjd5PwDT48UCsPNaU4pFdsu2SJTX8ZpG3muk9oUaULgfwfqgSQcN32waP4qcUPgnA9NTxKhsnHRPL7sFuu",
  "key33": "KUu2hsi42Rq8TE8YatFzJ6b35YTpnd5Ho5SMXpqKM1E5eoqTA1xXbX8W8z7KUCyxctFFytoux4sGB2N3oEdRfnn",
  "key34": "4ZgYva44Do4qBPuof5SCesrjsgdWHScpJXPeGemSLE11yqdnu1Y6oxMumuGXNZPhmkDaA4WFKZiBUHdRabY1az7D",
  "key35": "2tzdaeGMt9RdM7iKovPdw8SjhjpTQQXBk8oaFHxyVPaexh2YUg6GvjrqqMLtdpwR8KwRkh12VA117dWCw8xohRtB",
  "key36": "4kiBYEr7n1bYssePF7N3KsHefUG2qMAe9etcVNi86zjCqrrcDZCjhv3stWp4eJFTthWQaRJks4UyNkKsS8dhKWdN",
  "key37": "3tjy6sJqTi9X45YrpJdbJprWNkUR7P4mQYqPUbEXcygQqJ3FAgqEmdd8NhGdyaQAprSeaN8YoTUo74ynJaxAVSKV",
  "key38": "5aejaAgkXDPDtrKVLnfUZuL3DiJiUVq7e1Xz7vKqT6xKvHjiM4mbsESgYc8QRi6FuUKKftoAZ39ErTcRsc9jD8sz",
  "key39": "2btmgc8vbkxzYTLB9xzp5UdebjQP3NvVwZVJ4ZktgCuRZnyg9oUwFH1PrUrgSG3dDe9RZR884FPo5op7g5JYZJpp",
  "key40": "4Dp8uzD5W7MKA8K8CPo2DeRKHrwGVk6QC7hVNqQGQypW5G8X5BgwBrqDxwcEvg85eS2pHTQNQsTeeHDp6nJVBVCZ"
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
