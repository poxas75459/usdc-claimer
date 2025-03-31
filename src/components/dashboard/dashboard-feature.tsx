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
    "3yPSxEUjtpUCiayDKT1r75LM9s1ces3bxShdHctBHk6XV1Tj4YN8jWEVpFF6pPjxwXVmPAB6hBT4wAVVVPf8quKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XsLtprbZTmcds9QBZabkxj4kqMCBLVkgY1feDuuiKmaopTifGZjcq8eKBYLtY5dZNsHzAgowapgR7Z4GgiL4Exh",
  "key1": "48YZyTpGSVFPEBtS1RgRB5g66UdZqjfoPvRrEoQsCJssuhRQFgxVp45YJsngMUs611RwRdC2hRKrCikCNGgwNCaf",
  "key2": "558Nzhoo46FpvY22ZJTSzkqdd4q9FLcPo7v52cMXkq3vkv1pd158NCJ2vfQjNV78XfmWFNhh8tzEcYzdqD6GurGc",
  "key3": "2KZwrbxZCQTLrfisQpQehq5uEb28cXLEvmNYjZaVYzwSsfYcyD2Wc2EKzFM6DbGcga6u8tnWqawLoyCSFLqyBw8h",
  "key4": "4RtcDEBNbmkjBsxhpfvnD1xwZuyPfQei1rzPgGLGv8kQfkEeB3QKpfGRs6tymXU6DSSourLR6c6f4WPggrNRaxNG",
  "key5": "63NN7oKc9vwQv6XtqrmcYAN9zEwKkyCDDejTzpEb9MxnaezroSh2bzHTVFcr2D9BLvrmgaJ4Jvbk9o2Qaytag3fG",
  "key6": "4cYUkVczuWwcwDaDMyQ8vfvJzkmeFckKM55wpSNZ7BXoidqocUPoGoKJg2rkn3tFHuKzyZc46FwVM5Nm3DmCn9iD",
  "key7": "4sTVd9LVCvSZy8LGgC3S58MbAdasJ9cRB3bG4R2wDGTmP1meSafGoep5M9Cbx2p3s92hu6t2p7oWTjhyCQ5D8ZeK",
  "key8": "5VtXoXVeKYV9n6G1R5ZFxMjckSCA3fuLjbj84XbH8w5SvheXWGFHPmwPE2xBef7xS3UTvwVSfiZ2VyPQ7HpJHPHT",
  "key9": "3bPFaU8jAJr4zZ3fD6tgHiPEvqfGCXeWKQA9ks2WYEeHaf4NogTcp4ppsYZT2TbqHZLzdDr8WMdy6cX6z59NLKAB",
  "key10": "E5voCB4ADfNioPEex2vPEvUFwHH4nGzMwTgoMc34Jjgp6r16KKg4yb2b9h4qi4WjC2P1P4fMCYENLzUTmx4JKLD",
  "key11": "3hV1Ly1tu3PPyLy71UNLcBkDXAg15K3ZBYEACNsGDifyAH6U4y13Jr8aKKhGLTX1CghxzWhE74f5oQ13BPsWooZf",
  "key12": "5C3hxNQPk1SmpL8AqW5SszQEobZccyhmAmaTmKHackFz4HuWtZiytjgEhGSzZisXAwaaBJ4kuqnwq5YEPYWpWV4h",
  "key13": "5H8cnZ8U3JC9W4iDd91cxGoMhcxqKMpxTtCW4ZSzxmi3zUWkvvYqYevdZsLwxP1vmgpYpQmRaXRUkLqwXX2nKEGq",
  "key14": "n5U6DpdE657zeTaBZit9MVcugmpAUZycgKN2j9UGfma5cghfxfWyo6MJzYnpRK1inczdQ8wNRvBZUWwq2gDujvR",
  "key15": "5AcsgVh8KuG8LMhZyMtkPep7ds98wbaC8YZJih3gQaR4zHA63sg4RYzb1j2zEEND7SCG2PRZtfR7Bk3bNWA96P7V",
  "key16": "5J6rbSNSeSYRjvuLiVYk92y6EfRHW5YXPHSsiKiVNUxGLe8WZjfRyqze5zrdd1e3ec64hRpvnYTs6TDfRa7vUkg5",
  "key17": "bhiF6VjHDzkJDBdEhcu3ffvhtsgfETRpdZ4KxL3DesjR1M53gPmVQgtPXsr4iQVUb6Bs7931JyTQ9ETPxFG7esh",
  "key18": "2r9FeCrMhmX27mkWNTUTrudhbEjY8oUL5kcppy5gNCUsZYeHB8mWVz38ZDp3jNLDrG5dewuDuBzQZw8NRT1LsyS4",
  "key19": "4ZRhk6LqPEDPEVrcLgQN1ojhZ1kpJbHaftd9YnmAUsnNHmq2cahd4s2FHpNxhZQp7efu6yupsuQqeTFkgUigkuZW",
  "key20": "5AFtVdZ2r1r39oCwhEfR5P5tbyPcUzzASFDwrC2WVsMWTGrDzJ3iNGZBBkwPuDuFJPC5e7CdQPapMkjyW3UT1qrB",
  "key21": "4Ry87TbYqaeemuKRQoCjaJZPadcR2rXnFn6mjhqh2PmqzcSvqAsEitG3f1jxnzCXeZ2nSy6NK3qnuEE9rJWab6j3",
  "key22": "vR4xYJyrQXF6UGXmFuA2nsK8PYrMBXF524HnsWBLHa5CM3Xu8cVDcv8ey9kjwqUZYCCGXCYxEKrfFq8avKM9Do9",
  "key23": "2cY4ZYxqnKzDfZjxhiMA3FRbCDeHZqFrdnvgLy6ai33dFndY4yqoxgYGMrFG4fzA34h4mqXQMuz45PTFZPZ9oRMK",
  "key24": "2JhAk2eEPZtEHR2jcMeahXjGnPp5iVxLUrqCmgLByC5Fyie9ixNYvkPEsSigm72r4x2fP5rAP4vvZxrXB44QbAar",
  "key25": "euGrJ3doBf4zNWsD2qcYcKJxbHBxSgnaQf4DzqenLjhmTuMmYQTGjtXAWtbhtqNDQETRyrASmtdMtGnkY65YzLP",
  "key26": "2knk9bLsc3uuYv3FigQBLygFejY5fkfJDRChSVrb89Pf7zw8PSyREL3C3AeJhhASfKY5TKSWZTxjCXhb3AnZsfBm",
  "key27": "4A7rLrZCcrJvi8rnBHk8hEyfM2Yx3XfE3GHvdTQ3RX5gAneFXx9ECDvuuxz2HU3rz8xBYmQeRPADDm5MpnpmU9XV",
  "key28": "2v55y5vjPBh2nYrYD1QudSbNoEWYSevmKSkpNzpxcdhJptKBMsBr81XscyjDkd4NxHmGcgYojo5So1Mcv5HcihgG",
  "key29": "4djttCm14RUQc7J4MmmUq8UZAbqJGKbPWR47MuN4SKtnZK15GDMidjD5e4FnK18v4zc1c9TtK1MLVMrpYWBydjgu",
  "key30": "3DfBKTLmUG9BgDTHnHPN5jLF9TD1YvfCmzajjtbHMyDtRdwB13fVSseqbnu1pFbFHQ8faZh3hcGKadqVqbZAeJck",
  "key31": "GarSLVuzHBh7AJE57kku9pETWm2arn4kc3pyytjkxuJv9Wjbmmxe76GVB9AC75tRzoSJgdchu5QfQzbqQyd66WK",
  "key32": "5Hu4wrqRQA4EwiXwAHSurRRnPyL5Fi3DWBQeQniwoopS7MMkDGgq97HnXmEacykve7usp7ge3n7JHwr2mXrwkEy5",
  "key33": "xucxtEjekdJVhuLrPR8HFUiRqHKuJebSfymuBTF6ZCKrARuHTnyNBUNaSUSx13e1vN3BwJEtk73Cbeg4W8jh3hY",
  "key34": "5Wf6jVXuwp9kZzC51DD6vazDaVVEi4cMREbKJFxXgGs4EszMSsk8UvirABztqk47X7LT2pyMAJepTxNSxZdV5mYi",
  "key35": "2iMS2KtBNrQoYyiCnytpb6RJ53QTcE1pgrdhk47cz63fNEbhABA3tvcoVJQqFGYuCQVfiVV5nXkVRmpWvqf22Xjv",
  "key36": "3Lxzt9kXxju5SiKnNbutTSgypxyGnJm3QeAWLDeX2i2qmQgnW7qf7J5SF7wEneKtavEKpJWb6uGUDWB5HVn71CzQ",
  "key37": "2oS3BWoxDQEE71R5nKxYBq7ptY6FYciBYFkGw9zzzznfQWYixnC2NMftMKqKZoRT9w9fCcYSnVGmFaxDvUnz29h7",
  "key38": "3TkMyu4B45xLQ6y9UeQXyBtVg5VgszGrYjcm6uPVLf73TryM34SAV8WhiMTXMBjnPAApcfZwcga9u5LDsmb32x9q",
  "key39": "56gfFzDCz43jgKBuQKitrqkvjBXHyDam7ygKZY9Ucf7zusHUQh7cMyX48FQve9Sh2nqqiHiEHr1hRsWtinUQPM2c",
  "key40": "4B1C4g45RNHVFYPKAn5jsuw22gkMncuqXZwL1tPYLqGVSamYXoWdcq6LpQPEGL3PUvaV8Ldqr7qe97wdSRyEzFwc",
  "key41": "2xJivJ4rA9BfsEz7DiZwm1cWjX2CojCF7vCuABE9e7R8SEk4ibUmFRdK5TmhE7txQZGMBeF6JPYjfuKdxEozFPvm"
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
