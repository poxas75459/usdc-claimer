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
    "4yS7LCTavhpdrdUmKkABKDVwvFZsjgUsvXRfdzBD3Uxv8p4yCSep5Wx7WWWcWB1rDJ6askiBxdLnCwddZtuethVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EA5VAjEVzgxZVQDjM6rmowhwruj82B9G3h54KTXPdYeNgJVzaRhxD5vJUaRM1n87qKPmnaXawMx5M79iF3g7r5A",
  "key1": "4KV3ajX44moTt3hVYPePo8x9UA5JKgZa2jg2oprGyg7hPKFtkfdBBwAZT3rZN9ubZdeAgTpi1GeXBjVkCUWbr88D",
  "key2": "2Uj9GFh3kTUkSygPTrPyZddD9uvDEC9M4hd5bTsAEDqLQ513aS2QpiMuUhn2Dm7eAYX1GgPdNLCJvQNdvgWNVqzC",
  "key3": "5z3hJ8ucFn3i18Ea3d2XQGviM5JZRTFU2PbTzfydrGMWYKSV7SsbfgyaRKNBdM4DCCK7t17vueFotociHhCmGfvG",
  "key4": "6TJ5bPNrcsUT2WnS6geoXNmNRw4zvbv2U9TA5SkUCXVWiqvN4dm5Fn1mQSvGZdU2ELZgeZfkyqpo89yrd5mBWGT",
  "key5": "2tiPAQkBewKVH2c4ci5XpyeXtzm9xENWxpsKtMGEmoBQPZGccSxFjTyzNupZaY4zNGMfuvPNVE2soRbiTVedkuNV",
  "key6": "4VuJJxD6tdmoL9cBMTUk7FZfSXipBcZwZUViuHeVWGFZcHAvRs47GtADYTKpEwQr2aXHkcc2aLUZPRQKtiQW8gsM",
  "key7": "64tCYniK6Lrhx6wZntC4LpKGx9qumUX2Bogt6xEZk6r4iLEaqWrn3t9hTvWLxCeiyp8SdpAb31ykfJhC8SaW73ve",
  "key8": "5hNn4DexaRQJg4PamEeDKVdny1zZBVCa8qVequh6xuqUBPhmhT5AeV2fLiV3tiZgeNKu2CyTCz2764z97E4qDdWY",
  "key9": "27YqGsPbHnsAn6GYewbcNcsHjJe7YEpicc9Ey5Nqje61c5aHCKPz1cuigyMxgyEsQy3zRWEGQv2i26XXxXMgES9Z",
  "key10": "4mQ7wia2ZKpsJ61LSUkAfaLE2vR2Yc5f5cUSCW2UdXnnyHrFafsG7EPU8BSMovZqp2Y9sjxTKj3kjcY86uGNeam6",
  "key11": "2KQKGegU7sgwmKo1YHM49ePbGp6um1TgHjpVvibuKcna2QnpiLyHCmcX3pnb92QzmcMi6cZh1SYiUXpL9TJLg8zz",
  "key12": "3mrtjDqgt1cknPbsrWrExJheHPFfhUFoXqt3wZ4pRmgyBoQdwSxcBN9tWY4aQuyLTRcZqLSkuhEigqxEBuNjtGCp",
  "key13": "32RiA5xJqKP1Ec6pBrhGwmcENWPB8KxoLLzfiJ9wAk7s8a1WWWZETwnLoRXfnEoHU6DGWyM36jYxSRELP6fVu3EL",
  "key14": "2goq9DTw31eQKT2EToxzxTjkMn4szNKosXFNCpSbB77kknHq62frPYEgGeLMd81yYpmYAbevGC2CdAx2GhV8byHM",
  "key15": "3xSBGmqSrdZXnBwjPXzNNwa3GpRMjAe3ndrsokrppFYHtu2Kj2aXEgehn4QNvZex3DXFUHLKPpLiXS4dZbMnNENp",
  "key16": "3HDk6qM6inJYdkgAELizAtgHYpBSpNnvWbUGrxNSc51HZJF15cST6MmPHwvTfi2oDAUqaUJQuu8PyQ15uxc1mkVS",
  "key17": "2bnt9dGjk6NM4WXVMhALantcpYCkK94ZMGVV66FETJkHwQKB4dsyri46sPGmWqDcZuyH2X5BJmMMuTT1yud2yPbR",
  "key18": "2VEgJ4U4dAkeaPs77BSPCk7NrRj1bKJWcLK926qZcVyLqqQ3yq5b7Vhwn3sVaaVgjac1fqvTyYc1y9iJvjMgvsHs",
  "key19": "4X2MNAxBzayfxBEcgkRLzaTUok878CgEK98bhmQPmR9eFeFHHG9QBA4t4TsGtEQLC1beppE8WkiRwozf3EzvbHtP",
  "key20": "63ogcYstVtj4aj6nu6BTjThkDR253HnpKpXgrvTsefwjN5wYH5KfRM9auET1VDDsgQB38i1uVB8VoeXYrJDn7GZX",
  "key21": "2i6wEhYuG8HcUEY37ySZV5yhzbznL7oSLdTq47gv87LRg9txxoXviXWNhNpPZp1dXGmJiAe4ZV9WSa3DNQkyLoKX",
  "key22": "5kc4j3D9PZGRLVd2Rf9m51DCNmXRyKyhyCevBoUg1gR918igdSufMsLuwuuxFWEoxSBbuaXnBozBx2ymnGoma3Gx",
  "key23": "3v1YKwVrTS9iW97FCdxTfDss9u9UpPxJVw1qVoLKXqX91cQFhM6gGNqLhakQrfScWc398LTfrANvZtaKEYsoZbq2",
  "key24": "3SQ8AgpEH3uUoy14TochoPkMWU21QAnsfFRV7cPrcz9kWQJ6TjhSfrz33kvc2Zv3qRTpeoy1baaemCAffS3wAWZT",
  "key25": "3TspUxmpg6sd7arxkkjbFtABNgAayY1VdLfiTfBsyehRDG2q5aTpqUUsAbzkmQCyA2dEZ9RMC4XgF2126QVNNih6",
  "key26": "3tvs6ubHyi59PZcNpwU3P4xYJZBsBJ6xEZjZpPxnAgfHK383Sbi8uyANiJhWPs9BFpj1cUQk9wSHeZB8ioh5EMz1",
  "key27": "126hKzQcHp2sKMuEcXrzQaTrzVmgA4tuTpg4Hf5R9jUCSQi96y8fJYKzyFHFVM98CqBVBPSkNc8mqGRk9Sh9gLc6",
  "key28": "5Jg7D7eQ1uPZ2rqsB5Nkus9Xe6zjpx4xDp3NQA8zKKTM6dkBa29McnCJnvGmQw34wVo82hiDzXxnSogk1H839Rw5",
  "key29": "4SSttQ89nMxvugXkLhy72f2XiZXdMbXYzAmVVfoKg1y3m883Qn2SQS6GL7bjUnLg79vRAwhWgy9qxHaxmBp7F6cV",
  "key30": "VMPqw4TLw4PFF6hZYCT4QeHkZDYzEpqJAPxhfHohD4FFVxbdvwLS7gfmKDkVNpkTU27FBmsMwwTNr6gb2tcjysR",
  "key31": "3samuY27LjZdXKQU3cWepf7fvgpCrXEEWvYwP4ignwDwejmCVgyahFsaNGHUZtHHTkYwUhFAojze35gMXqjJvDUD",
  "key32": "yJdfgVTZaL26oY6KqZLXX6JvDizLuBS2oNdTpnRSzDHkPCCNMfitcj37qCuRqumef9RUbxMn7MaxRc81oDK8e4E",
  "key33": "45N9WDdCNn6oGUy7R3NuFkAZzGVTMf2HcuFJXZgPLGoZxa4wDjYxuj9CyiFE4QfWAvQpHfQhVt3QuvhJ3tfoMUs9",
  "key34": "31CuqRv7TWspa3GmNCSRCnXeEzBr6e59RoceALaCmbQX8jvvu2hKqtAB7fMtT9aEwwLMnxdKwPRH2EfKmGrzvPsu",
  "key35": "5wfRdsUAmC7mZnZNrbHTm5bSwoJNbH7JgWqxND6o86q4F3QZhjCV4GmBZHdRRysuhSXwnzFQMCtzEnHJkj463a2m",
  "key36": "5uJ4wKhSd4zeK3ZM9EpEWe9h9rPphKHNdwm1QGdQtmfXokfwYhEsD64Egb6De6nPNFGWoHuyB6Z3pFnsDGKDEif",
  "key37": "26KnwBzTWeb6BJibSUpetjvZnS1CKbw2iaEkbfCjBgbYgs1p4q6sp8GbRzXkeaZmGGbmbWE5SmrBUb6wwwXV6CEj",
  "key38": "5mEtL2mttfjnrmyF9PHakyVvYt8WLU2SduAnHqa2q4AUEqbn94nFstaB8CFRmbRs3Khr7mAoDEJ14sCXjLWXT7dR",
  "key39": "66wbSwXD74j9S36uVr66iFKPezR69Fy57wizyboYWd3JBG15CcwCsyJYX2HKWKhLSFv8jD5Xn2oYPr4wyWMyLd8k",
  "key40": "2bA911wooxbsDyR2kPYve4MvGuCwZJFdKnZsbEH94CXGjRFBN9cv9PXU3VxUTH1f2VjiA6qmthF74UX1nj3LqpSN",
  "key41": "3cQsKhDz9GL5PgpBVBBCqVVoHH1jHYspf9oLSoVaBDg2HiTJQhadV8Y6xXQM8vcbHr7YMzH7reWgRUvEEDQUhHva"
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
