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
    "44UYHKNFfyMFPa1iasDBxsi9wbPp1Rd4XTrigUxJWTwkCkLsynEBQf47SQeL5UVAhM2NE2hZx7YvWd9tPbQzL89V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQSfetyhBBPzdiF5amVb2gtvpq4VkdZQDDxe2SgQMTvu9V19BFqkGieodjMFpuacL2NCNKyzZ3xuzTyu7ZRRrEJ",
  "key1": "4ppqkF6xSvap3Fp7B8QAUHBYc7E7158xJuBGjMqVEqgg6gU72KJoGDRBKkgmcJYuGxFPKESYF8wEb93o2iafGmJi",
  "key2": "2XirnwwYGzNZsyumjJcFE9AFJsPV739PW77SuYVJc58izPKeYJXGxfcJ6i4ox6HajDwZmR2Z1wNDbq9UV5D96PML",
  "key3": "5nUcB694MyE6X3KSrgb94WYj5YNqsQbvkVLiRXcHhCEocn2xVQsC8nEsYjkLCv8h2jvAFr2LRAdRRr3K4jYriG3v",
  "key4": "2f3Cg8n5Rh7wsBUVETLSGBEa8NBvVxCqFXK8k4nMLfWWEBepuQCvJgPLcwCEFQadyfkAxWHwxk6F3eV9KAmBcvH5",
  "key5": "5M5Pqb5AqjayDAKvyYE8RzrfWA49ggwT4f56Wz61PSeh2hYCMUHAGW3StPm7tbL2hmMc6o7n97cDyGfkW48pBRYW",
  "key6": "2cf4RvRuVEnw3GmuJRqzpNfTy7SwT7ei3FEhJrwBt8WY4zy7KBLbA57Mq783zY4bmpDhoDNNjLskW518s1cm5WUT",
  "key7": "4n8QEYx9kLkhN4iXj3NgmfGMbRwz6nM2FpSDTapWLYF2BHKMg86giS92cVR4toufV21j5mMhM5RwwwcYMCK2XZZH",
  "key8": "Wqr4M4d5bWfh9efNniGqY7dXBcDRFAzzjhJYyxH3QGfFW6WVMWMw1YLhPn6AVqfEtMadsn2BjMT7aZuLCim3Y88",
  "key9": "2A1StuyEaQrEtkmfG7UMCCGF6ydJXCcwDQ48AHVfZGBzE5ypu9KsbdBzC7zb1bxAVBWQE3jWXzwDXP2yb1d34gpe",
  "key10": "qzjRwP1sAM7ixgxp4XbrBpSjcUppcnZ9rUECmoBEPsE32v87cmm7GwCpTMVVJsqg6yHd2kReXBC7hVi6ZnrnjoT",
  "key11": "3qWqxPZjeedCjLJeokoXcyfEL6PeCp3jMWKuvDzP46MyoqEMj2ua4PTs7LiJxPQA4ju8T8adzFSUcocoX4vApart",
  "key12": "5vssqakV4q69CiR2b8RLFVu1paGwANnELf9sGPz3Bq6qVjbxCown8KToP51B7EKTeYWP5xio7pBUTkRLTKQcYAU",
  "key13": "4eprahxhLJRvtW9aHuiHBSPCeGv5JaAVjU9R6VK8YD8PTW82S8W6UJs3GbBSc3V8wyqeE4tG8r4ikkpdEYDkRnLb",
  "key14": "4A4c5w7oQc6EZjUnNcCnJCWHtbL5VeCQpidYx5UU6RSn4t5Ux5BrPcZsPEefUSbBECrwCqLC1C7MoCNTHcH4wocT",
  "key15": "2N15ZZp5UbtpzAJp6dKzcB8NHGPdMdaaSbm7pqpFcZ32Tm4kELabBYrKJ1ocRc1iCT6Gkxj8HNkhe7WP2rMxBwog",
  "key16": "4ZNpZx9xUMUA5yisG9zDjzz61fujSarwM3NeUua5Lv7UUoVgBt3xLrFpucJarcZMeGJrv4WcrBXkRYgAXMcpsufv",
  "key17": "4sxiSqFyP9k12tWVQpnXN9peSiUR85VdMKsG2MoSSEwqcZp6wQ8t8u3a5LGxqdw8j9CxdPbry3dSM6z7YZ8CRTkD",
  "key18": "128VKBJd1oyvR9yKt2GXfnqFcnsRnXwmsDQeUg6MK4wQq38iUpzKmqgybXEXxTzuAp3NrjQP8UDLkorpG3yVCpto",
  "key19": "5Cyw2zduhTT9JPzf4kp2eJn6YjDNqZvuksFx2axkybeUvwhtwgkcn9EExDUdAB6UFDvT8Bd3si9TWhNrBv3Mexrw",
  "key20": "4mYdAkdMyEw3GtPUwnKDu1sq1rNmDCVRiyLzj8pyaFmRr5xP1aGqiYdareubHzMRRCtiYeZ8nvBTHZ6EmDVPCK2M",
  "key21": "5yG2cyDcrvfSJavp4fyjnER155XBTQgKX9ELEBzRzRg7ErAkX3mPofSVpbkqFh1sdbdxxnhx6USTa89ZwGbu14Tg",
  "key22": "3Ej7nkeGwybcXXzY6UDyfqc5rRotyBxF9J8tg4EFcZwH58HwpFUvVcNwGgiqUo5mS776hF3Ask8ujDxze1Lx3C18",
  "key23": "4GQRFwJh62fm27eUCnhSTy4fj8zNMkLJN7YnK7EdSSqregMfpD69rE7Bgz4xxvoVBuN8oUGHqJUMgdc6VRhsNzAc",
  "key24": "5VtdFfvapPLQQKUZn9qDeVRQsvUs5syxKe6jNPe9X3m7aXW95veiq5LvQAsR781JPKU2nTEWrbh77Q1UVxdEFFpa",
  "key25": "4rkeKQYDW2MAMqxQ6VNGgsA1P4enRpUh2sjepSQasD78pZCPNPiT6s3LG3CRdw4Ndxh146vQhSdZJwtDnX6cTX2Q",
  "key26": "XpGgKca54UCLBPkddmiMb1gxibfg8Kv6x5f7yXKnSiUWdG8aR9dvTefX834EUMidYARXnXvrVPFmNTEWf6YUFWz",
  "key27": "4Cz7L942Yxyc3yB6BBPV3NS6vRumHF2SgtZFJmgGpSngLf8xPhG69LQjTKNmE2KQtSxdCSxbG8NYTsmUTCW7zLJN",
  "key28": "3tRtTb38wZpZ616SRGkN79denipLQKs7FRdK3GfzB3UVEGWKTxVAnkriWd6CuZ86gNHURRjvKqaBvENRFgTJdGZA",
  "key29": "3xm44rbNK3P24sFcKEaPm7MrPWtYvjV1uU1dyQeP4UWDJdVa6EdSpsmU1x13GtzP38cnj8grZDFKkuBAv8Rix8hf",
  "key30": "4Ue51gbDnaQFgsCbksFa1HRW4Nj9yd7khhg44Cb1DtX4hJkmA547R1heRSuuw1CCxatd7X63UrU66fsVKQ4B77vi",
  "key31": "3CUtDZFN3ZUSTyfhRQgRQRfrEhmucubdzYFwChUSWP69feihMthgE4QXZNGvwY9WdCKTwBxmdtKD2emkw9uYqUNp",
  "key32": "3mgdfbJjpxfPpE7rkG8kKh16NhshDZa5gNSFEKZgSemG6ZajgjWEEgadUTbzHTwEumubQvDNzBEYKyPZSGhTHNdn",
  "key33": "4yffCnDAHHqcyw6BQMAf7LCUScL7kyts3Fo9HnJsAV9KBFDNCGUgusJBhLc7CEJ88MTFL9oGdJG7d8UcgqPei71B",
  "key34": "4KN95CCUvQs3uJZHZ8DBhLjNA1fSsSHpR53B1ZLEQGSXYfH7p9aWjyDKfb1zNqzPSqc9PgL5ct8niacxmptdb8aj",
  "key35": "32cVTikmorP7ix7coBkYTVGcpfdTVdx4tsySRRXMen4yB37vBZq51hJsiMi6zuam1qYRPXQn3Bsz7LCWLf8hiios",
  "key36": "cQ6Uj1n5QWLc1CAgmHTdZofKSuyDeBt6Wu8SaS1emeJLQ11YvpVvowZK4jePir5Qdpzs4hkkSMtREJe4KJ96QU6",
  "key37": "29eZuYpGktWFZm4tuTtnfoVW2orewbR5gqhdeDfiTcbLyokE1gLN4f6ao73GxifCPAFHdWuQYKKxfEHgXmcbcnJQ",
  "key38": "3h4e1bAxNa5T4LPgd1ED54QTzKJDX4cF4h7FNPmdw27N1LrSwnFpqEECCTzBgtsv4UBRfZ1NjUN3ZTijGetXRH97",
  "key39": "1wgqU65XQKmt17XFUF1jNNJJy2mKDKNeGVX4P3D5GDgBEMdbqvtT2riPJWJbHNayC5xJMnzXt91rK7U7THjdij7",
  "key40": "4pLDNVVPsjXwQ7cZNuPwUNCsNYxTr46rAGe14AP1Y7YknCdHqM5ghw7zeVdPA6tv4BcnqQGN58hGna4Fytqm8yhJ"
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
