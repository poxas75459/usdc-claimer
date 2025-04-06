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
    "2WMYqfGuSL4nSwwfmMarkSYxfP1A6iBdwywCetr5FUoacChYrcsorZeLQyKVQk5X2Xg1uQePPWrh9GJBeMHstjbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22BjDsQLcidviqUYuqk1KLt4BQDSRFFqJJC8XHdz2JcEMuFV5FkAZcEXC6pNVsxRY9S1zcw3jBJqzmFQnbqxZy9w",
  "key1": "63mc46rrbMzEXaUbZaJdu6YjF82UX1c27GJuKFAUfNAUq3PijzMMPEgBFFaYdJVbaXtMQAYuPnQCTDawv56THt2i",
  "key2": "5dR129H7kEnA5xCVUJDWwh5caQRzenyBKMN2wRnLQ5FvPhzDJ7kaiLM15HHt9uYQ9AWjEDswtCFHsMzDoiodjHq",
  "key3": "4RCeW4FwDH6vrpSuWp4Q3CqUdFgoUuEfPC4JUNPut6FnADUaYeAeQvFD9vyfv8jf8kWr8Ef6vrSXQSkmvERkWj1g",
  "key4": "3T7YkStupt2vwXrbynJZzt5tsivdJEgvBJhs1tyhTyE8gwvpzetgxEsqnkZmhBNLP4bc1TPpurQZs8SBsKUsZfTM",
  "key5": "CknSp8hre4m4uj8AzcmtobuPeenJ65MFFEYdRzzc6JNZifpqZbtdgtptedKuvZuDGwrd1aRq2Eorx454DS2vacd",
  "key6": "26uJj9NkySiQ3pKVusgEUJC97p4VZgurN8oV78iHCJFdsMgUgrH8Pum3ht4WX16WqDcsoyoeRwjL7Kw3DDUtfPZB",
  "key7": "2RPvTDKoFCLjynSZamKU4KHerMwXVgGYRt1ArshjxVoLHY7oKochMnbznHeEK4SboJkSgBZTQeXhMQbqwVjYmyoK",
  "key8": "QMMa18MNXLbzaJay6CDmjefKP9TgFKZViKpLvZogD3kFMK4CAB3pBmJujN4qnSvRQhJS3PdARS1hkncmhGFEhCJ",
  "key9": "2KwFYJmgc6gpauGix6vwVQbFpczKBXcf9CS2fws3w5fQvV7Xwc2UQ3aC5Et2LYW3EDTBZ3Z2jTYd696chdjvFE4j",
  "key10": "3ZsgXJw4GBqSXqoVYdfzkbF5tbyYJLGZaymSHpvsC5ECYTKPEPevDDdh4qbGRxNpT7Eit3vZFdrw4QHMUAF66bZs",
  "key11": "3WukHxhjRBYyTHcS51CJGjqy1zBJ8SY3oE4nvrUx3AQFr3BPo5W7XuN8FBHXbwWCBvkqwUV1q4nSWW3VycSNDWrs",
  "key12": "dGn546S2nYTWp9ef4ZCs4X4wKDfQjBTZbMPdCdWe44VBL7ymSRj3pdgDfA3y84yVrKmsCPSzje2XNo9iprhTsXd",
  "key13": "5ETzJBWXzVfuFZkqHgJuMoQXzt9bAe1GfRW6zVao59Hp3RepCK8LesCwERf9CYYpVCrf5eXZh1P4e4Sk3uVMzszg",
  "key14": "2wLVyEkEraXTLdUEuLveWW3isFayyzSe8X9LrV1Zkbi5MQzihGGeGArRRx5niCFnA6vjh9vyKZXemDzMTqZXUYpN",
  "key15": "42g2Qa21PkWBaLAaDuUPCNDUAdcYMHeA7NqXP5tEb337w8VTNV9vuWrvJDCT1VeR4ouzPn4cCdJ4rNHn8qYmHYgk",
  "key16": "5dxkjf14fCBZq1zjcT7jds2NQiX3qakw5PM2y9jTuZ493T2LL6DZiDxYwZkXtPW7qBSSF9Amcb4MPDLmW7a2CFYd",
  "key17": "4ud1GZYeDXCjFGmugDZQwSmEhKLVfurNW7Pxczrvm4TuAiBWmgvESEaXLQUZDgKEkCGmZChkjTFDmg6p8zaUBdFb",
  "key18": "4m5ukhXCfPr7xrXGaGxNQjbboYZsWHAihanqUPnRamgPAfqkJZnP4RpT2EH6LCVRYpdHhZ5bT6gqGJQiHPtfy9rr",
  "key19": "2whQS1TPUJX3DKVbDAq7cDCGjt2nEUuDFhEcBhvs8DFPwgqG6Grt56HANu5EiGCo5WZpibpakSUmZ4Ue4vL5VZXY",
  "key20": "5vNJgMYbSNyVeDjEXckV2JsSnZRzweFDu2LHs1sDNBD3MVSNMcJtaHU9H3YmPEvoua7uGgD6csZwn8gbGvVnSKfs",
  "key21": "2udyEtz4E7KBnzePN14dtrREZ3oTnc72PWhRR7o8sDGsskA4iFyKcweiyDk9EHefEoARDR4j3TzJN93aHYsR22Rs",
  "key22": "4B1cb9mYqTUMM8k6FLa8qe8Y1AqGPpzbWoz4YJ2PEBXTBPDUSac9SnteLmMwcS4ua6C8WG8yTT2umZtNKiHdKDnH",
  "key23": "4CrzFUcNs4CCVnjtgfcP1ov6B2GGddFnDTBRkdTPidGoXZwuHg1P67M3VNA3yJ9VvKkVpHMPkaR466Gzy6YMzQna",
  "key24": "7pzXoWQ9B7kqtFo3gkzPb4ezYuJjHgxoQpcLGaRKmQVMD1y2NQwrri1g3PAR5dVzoyELeDDFtnxDJJPMAfcLGn7",
  "key25": "2JwjUx8rxwPeh3kQetCYf88BNsPKWmZimD8ciSwrRxg4TsRLg4BxqSDfwkyJHFFhJV2WX2mHKd1JJtoDNg8NjDTx",
  "key26": "3w4FqYNkCookRnzL4SK6BsasAXqa3qrpU63SYLp2ks3CASry6LDtofr3Crz96xqKUgbr61Z7RGhxRMU3PcRwHbiz",
  "key27": "5MpRqjf9rNLP9GyUk9rAKnb5kGqa8gvEgLxYpbc9Yqh1URS23msB7ikrmEnAeDTRpK5B9mMKWNGMiARDux3qWmL5",
  "key28": "2UQSEFdacEvc1sYhQbWaDKDwZvj7e1PCUCuSw3rm4MA2zR3nCsRrYxs71eUZURYaJMbquwoiuEKJqzAVvQqErt5",
  "key29": "3xWiogSGEKrTV7fPwU1x2utB92reu5rttf7QZdBLd2CoKVKoysuGJiJA5aRmKmc9de5Jcn4tV7e75oj1PhNRGfzn",
  "key30": "5CgUu5MUwcP8f4aynhCndSM2AjzbYQ6M3WJJuiBqEEX47m5wjVvb6eUrwvGPs4ZdgST1uWbX9kQ1m41xZGGxiwZy",
  "key31": "41VL4GPyKPwuDfya12fvCbsG1nMknySQGutimE7AgvmuY5V1eoDJyJSNaPAVTMxAVw9JhAPq9E3TRnhyChPCSp9H",
  "key32": "4LKvgvDmm6o1a3jxjxEt1dR9n2iyiheQGDrChbsQCYFWmRbgGS3KabTqvFK7i6fDietCutsGKtb4pZvSzzXMqzL4",
  "key33": "4baYkT2UzcwzJRmmosHk97r81oFgHgC8cAnoJqUvAdqLTAZseSDX8qkiYRsxLTXsrXAuLT8wxKc3RgQSUNgJjDsm",
  "key34": "2ziUgi3nTGt97DSEAenY6t4UJbPucuse1pF4qH7J73GmcYuKZDbggbfz8x1Jt1PMSB1LX2idBKNKPrvNoppjs1xt",
  "key35": "583qioh2FZQh8NgHvboJP4aABYRzeaLENrVGMyfsix6uSvfe2iFzGnjzjbu1k4zEWJYd8R8omet4aPsBDdKt3s5V",
  "key36": "2YAaQroAx8Stherbj7qxwf5xpwnAYvVnwohmpy28oQap1SeJHDaWb2x5oAzWWYup3d38bf4W2m9oPHdqnNVohq3W",
  "key37": "5rUih31einU7KgcK4aoxDUA7RDE6DPwXuXqzFc1ydJG6sBFxSvMNqRT7H6jZTbYiRpWskHScTMGX6vepTHyMsdWU"
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
