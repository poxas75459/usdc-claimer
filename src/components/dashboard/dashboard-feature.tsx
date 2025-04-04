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
    "5AJBnTveXj9Pq6Uu9Kj3H5JHSyWSwQYinNxQ3RKQb8Nsuj7Tgyvb3zFhEADjkkadrCSqFFGU5ENByf5ZqTVfQEvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZU4fCrF5hpLVkvtH7kqfhRHijuhbScXN7v1C3G4AevnXeKk5xxJueDXzYLCPuCmjcTaqfpV8HqSDrhvu9i6ivL",
  "key1": "54KCSFToSiHP6hp39Y9WXAQiSmGmYLEho4qsmdFMHr5DSuadWXswW79B977Xh1XwCvU4n21ssC4PxwXgRBubWWsZ",
  "key2": "4z4hMHhE2hVHS4ucGaWuRTFmzZUxcYedLugM2q9V4QcgQfzbkN6cBYQkVbL8p9kg8A7BdMcByXUXM85EQ8583jGX",
  "key3": "CBykkzsNADveRTXhdfRowMrRgS6hHtPPQLgMSbMT2FpiJCksA1JPrWBtywF6isg1vkrcNmsTkTr7JdPqpRgMu2c",
  "key4": "5EP62EfWRBNTjzYhQP441zProGZLt6nhBbrLiAj7VEbJaLw3GMdrEZn2NcpsamedFBbM1dKXyt251poat5KGia86",
  "key5": "2ts8oFT42xEZ3Ppjxvntq9nTtAvsyKL7Bmoh3FMbVuGCUG3VqRheg5NC7krrduad2D85S8d874J3m99EGosWeZHn",
  "key6": "iy1Mvxhciiwy8ovYbMh1mvpuREHQRP8Xgf2gNxKjYeMLGf89v9Sh6h6kWTtcbVUPRUDgVNJTaZH5zi5ZLQzsxTp",
  "key7": "3FUabTDJakiqgyyq58XbyDrc25pNFctm2Wy3tzoeJ5j4ZhoeakaHL3PAxcKf4wSB7qDARvrgYFv2h6NXN27kqY96",
  "key8": "21JCiqJFVzFSWFnHaouh4EVsVTRPJe3LZPKmtGS5yD1JZWRcvTZevYpMnMbDSzF9E8gjxNeqSLaSudqws1XXk3s8",
  "key9": "tgpKVoCozLweuHCwFPJV6JuTzjVt7ZHDYFkgub7xagQW3gdHyNozCbNHjWoFibPYETDspgGTsY2HThYibdUFbhz",
  "key10": "2yRnEnsaevNXi8YhCpkuWN5ytAP9EYEhb8PLeqowfcb8ijv9ccPUPoJdRn63TeW5rhSPJWyqZAAANV3S6sF2rvBP",
  "key11": "4TdnCPSieXRZZ6o8pWfHCJpGvwpKsVcYJwRmhTitWDUtVdjMZ1c4erSPCzMwcV3fKBcVAv7H6Ed8r1JKhhrpSoBq",
  "key12": "4qrubxeKfPQV5dokns8xyFpt5ndmirJnoo3FXWLo98G4dBviVMNrnT61U9m437YiFttD1EWtFK86smhskG5vKQZU",
  "key13": "21kNmi34QWJqZn3W7VengV1DRfmKLogG6GynTmXpZWqhyBdN41kK3EmnTNTmoL5EuJyq36chpXqx35Vx8Gw3TXvh",
  "key14": "BbcJUW1NCjDipCDpc1yiLrmbivJj578LHPcj7kmiiymgbPeR6BspXrSHGFDnMTnQWY4xvv6zPzD9pqWaTCkfMna",
  "key15": "3hbfWuvmwRvUF7t8oK7LnNU69gsmqutxfnXfpy96bK1Pvj1LCJETFT4DwPkfa1GoLU4GFkt15HWKnfSPNmvYtWjA",
  "key16": "2vJBbKY98ik4zbaKzUV5LGvZrc9gZhjnmAy1qq4yGsd8EduF2yZLDnkP9njyq6ecKVQ2EGakBk6DtDUS7hHMsME3",
  "key17": "3Q2sxohWSYZSHTw1DtacDCf8fm59nw73Df1tceqa2tLrNs7PhpyeZ6VTdWtdwg57h27bhvmqp2syksd8KVYr94dn",
  "key18": "5XXTUNzAK1ABRszdHa4qQnkWHgDMWx6XtUqwYiTv9HU22rwwtAdGb2TvJeT9KLs6Q2vKMWsC2zb5f4eQfc91zAvq",
  "key19": "3sHNW9YQTBPZqjY9PqHkBBhRaF76yrMKsMgKCaKs4cBfHmaJTF1DaPuYcTMpTthj19acUbwv9rvukA37ga1SvjEi",
  "key20": "5TL35QD2dPuMCCcpscEPrsZUascQjgDkUxCckkMHoqEu3gsN4S4jPUVrokco1pbGaDbGZhgDuBN1QrXF6AQX21k8",
  "key21": "3VqZzN7XogyQ8C6UQcRtLVBaDkbtCvn9RzRXTduAUz5UhXghWp2c46pZ2YF4hiQwJbCKQ3M4Sp6qinkkTyKAACGC",
  "key22": "PUr1DeAkYjMwaFz4ftsZsinubozssscF83WZSgAELmXPJnD1GtNMCK2he6cp5Z8ExGZMRuzbFRwbCoSSSssHod7",
  "key23": "GKsGTFRAScwHoisLLUhKupsXAxSFwtazmRo6SaGNr4sUwCLsxDwTJaKrRAEiW2mkWHNiRrECEn8wnXi73ZQtsYN",
  "key24": "5226wDdSdFA4YTT4oqnUSz6Q2shGWoLpf33bwPuCgiuLk8ngoeLrNuwUKks5gzKPpevuRYnTDTAFGKTvwatYBeUP",
  "key25": "4oV3C8izRHmv3v9M7qGTrvwsQJteHRjUapybYy15dnBpjwWQDnu9kSZwCWh8AagdEcUaStJLK94NGXz47CmixuRf",
  "key26": "xMYgRnET8J6aiv7QLEKsHHDKkAFetsmMvVYQFe5JyA7YKZ3R1F583MoQF2168J2RjRwSoErztJesPb4Yn1KU44G",
  "key27": "3KcMWuKa5eyC9oQAA7Vz9RtzAKgeLCF4p2rDi6xBX8VXKassvXoKdNtm1kRgymLtXoEvRU25HExaNKoDbm2hfk9Y",
  "key28": "2Y2KubEHwKbN5cjLp7uJVgb6Yx7dGi1Dxo2YQbUdsVrP2ePyjkJMidSzxYMtfoJUor24F6KS9LXVxHP11PqFNzno",
  "key29": "3gNqxGoMYFiVRJQKCvXd87YhKKvwJBYyvW6EDRvXhs8CLDpHrDTqq1aKn2sYuyn3NvkQbUwsz8yrMw3zsKHD2Bwt",
  "key30": "4UyW7jZxP2jCEFTZRebnNNN2M9uqWzveXJSB1EFyVihTuSmzX6FXEscZmFPyc9hMQpZE9z26iCfNN9eGtyYoFK6J",
  "key31": "4igZQa68TXDjgYTwcKsaeB5Yp98iLMvSHoppEHHycjAnx1txmW7RpZYKxeMcw8squqNA8koJbnvgQD7cmaXEUrSs",
  "key32": "3RfMqnnwmjNdtQJtPaDGSV155XquxQYUYqxkiucKq89fAs3qE8JadoPCPrKX4UaRo4M9gyjNiNChghv6VFtGc5HL",
  "key33": "5qNAXxVK4bbN8y7Md2knrprfZ3SUogWQr2jq9ZFhj5V2U2UK4YzmoiecTB3iagKVgi9ALzk1bvkU65cBy4GJjFvr",
  "key34": "66UyZNq6B1o3CMRZ2Unuz4SnwDoFZMAmZJA87v2xyj2EGcJsDtD8Tnnc1Nz8CXXSVTKJemwePZuQCyR4xtX4Vow5",
  "key35": "oBmML5qtLUbV8nc6qfrBbFUB9yc2NiSCeVy56KJ7dWPVLQdZ5g3YKrnpDMKZCe1jmDHsqrtS5hiANvzDhntx5Lf",
  "key36": "2UC8mc68fbrj32XVZ3DpTc5LHU5TPA5H48fxov3j2AmDGASJ78AtqqZMAyQhftCfwyT3dyY5Ae9TiNVNSNeQDfqa",
  "key37": "3pGtC1kwGik2nAB8wix4tUfjRqPzyp3xa4snVKW317j8QU2rgipMHQ1Mad5ghN42uLkf2e4SAta2eaHoXHZjDZei",
  "key38": "5X6tZH9AB2qsS8q3TMLtEppEHVAQRy15WPkzeHDiC5vGUeNDoa22BH2aWvqtXZH8TdjwqNoWm493LevQZ8ZpfmQz",
  "key39": "61o9y719dmYqXGBEJFceg9STq4r3QXHcTR9r2d4DysVsJyZvYWcXAe1d6BjMUaBv9nogp43Vza4krjDAHUncCeq",
  "key40": "2DAxGSRmPSQ61SPRDTSvAWnJhbdgr8jnSPiU7kkYLVKFZpHrT5URcEr7AdffCet6jm8XgcaKMmnBrd2knRJgdukg"
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
