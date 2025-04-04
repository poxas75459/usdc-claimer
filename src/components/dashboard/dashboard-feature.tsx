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
    "2DMvvsmpk5cKWNtYjwtS4bfEN2GNwxJ9PoFmqtKj6NEUGmZLj87MWdrNPUMEjVR8J9DE9wcuWUzk3mMSbTRvsXjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SQjmyWwMJN11X83dbF9JADuz32A6gjoVFrSANaT6P76vnj5LFV1yM6MVn2jANBFjg1j9A7ozhLYJSQe3wwSaHSR",
  "key1": "21RASYQBD3zec7x4oRcXTno1McJqCUCQnPTejtj3AvhiWy6zsRX2E1nonfxr2Z6C7d8m2r8vy6ypnnCuwux5zSfp",
  "key2": "5Fsvh1pHSXRiMunrHb8espb4fpZvepGQRUcV3vdQFGWjskBvJCKBZQKJNiZyWuErd52CsUBjJq4PSziuNMZcKhRC",
  "key3": "3eDBvyJiL9uVEma5Cb2mgXnuPWh481nS4sbgVqJz3X2yHoJxncrQCptjgLtw3vixzfw87KTF4SzPr3ynUm7gk5r6",
  "key4": "33b2BTRWi1fNhgYsa4u22WbKYejnNkwBptmBU2GzkjqydezvV7qso2e5RcNgygfB1pKHT5Z4Ro5J5rVdrkCwrYBQ",
  "key5": "2S6qMCsC3q7zR2TuTCbeH2TAkdDoFfxtGNzrui9eGy3pwVULfpcv5RXNw4xgiZsoaCnNpWVG2FMrGBQorr5JuPm1",
  "key6": "3U4xerFYAe4GvVTFNxs3vrvDdzsdvomri5tPJVifAUPEpDxrdAcTQ6PHcLnREeCd6Wqk5s42Ur6nGYvayqjk2HEL",
  "key7": "3eeR9MMZYcGt8rjY1PaukqAiXjq238CC5T5sF4d7b1f6xkoJGeMgrVaL8AXpdYe6zPQmjcz3LLjb6xGHuYbbogH3",
  "key8": "23K5BA11PuemKDxuMxsVisK3sVZv3iSyupTTugRBggDPU2w4VdXnuVwVRY45AqSi5mLEqkyKrPJtLrZhJhJTHBkK",
  "key9": "4n2CR8M7GVaJpeP2dnUQ2F8wMrEsjupA47AKuDhei1gUuSN7Lmwjb6sXKyrLnPZ2RvZjKxjE4fK2dnvUJuyXMaDZ",
  "key10": "37pb6fi1QWTnrNuYcJJXA2sfhhfb4oqjiR3uMdGgwVwwVCGnUGQb7S6yW86cYaR1JMgiAGTsPfa7JLhi3WEsBZyE",
  "key11": "2f6wowop4935mQBLjGu2pcUr3HcVtSArYJ2vh9KtsgKVKau5kZDudeEY5p466X2MWyrQhQYktocgBQPe75yyhFMw",
  "key12": "2hU9svxCLQ9R5xgNYVdYoqFKtE43DZw4Pih6AadEGXebWyhJEssyXwq3TeJiV4ywnkynAnjXxfRdtzRcLJNGW2T",
  "key13": "27QjFixf3CEMy8JoooeLqM7HbVmMNj9KVLaTjHRZhefJFAPSvMiAiks5TxKACsSYqaJm1GB1V3KtTmB4XZDLa7h7",
  "key14": "3emgUR2oehGBV8XSD46VeWj7Z78jknrzZSbpbDVTuu8Hb8euY7DHDDyyKVSx1jGsc7DvNQHe43MWgt1Fvx1LPW86",
  "key15": "egSLgheKovUkss2eQCU6tCP6kEz44kgYLNRoYfgdKx29U5zuyDs4NfXQ1FHbaDLRPxompnpYt8xe8jin9KoMup8",
  "key16": "G6R1o1GSyusrgiCRpjwoWyDyLxe78dP8JosVTjD6cH49TmEyUoLhDfE6N3k2EWGwKWTZe1MwmYo4uKze76yhcJq",
  "key17": "2UR1SQTPCWdcjuCUNcqZgvGHc1xcAFc2H2BXzd9zC2c6yiUmYAjaRRfw2g2HnxrL3qTYkYVZThwqNZERxATwe9pk",
  "key18": "4V8jCBrtsj7jP6PxdzKgX9ka9ATkvDryrDg7DthyWAKznL8UfP2TLMjuuYhMMJ2dPBKqY7hEJLB2JkMebAXUc76z",
  "key19": "4ooYRNywY28iKLtvQ53paeFktpN3BSCQk8KnPKZP8EPRJWKaq8RwLv6wm4khZNCBaZhzx241UMyivEposf1yWGap",
  "key20": "5MyccGacd3idN3yvmB4sroxttjnhf7rxmW8Lrzpm1ZGBY4tjS5G6cPP8sHtzFjDUZsRNcTTAta3YL2GbhNShpLbr",
  "key21": "5oxBFcMaauTvJRLqrwt57D4zT58982KhxwyfqQLo5aQZusnCpopfdoPywrjV34qi85k6vqmb7q2QyU39fgYDurHf",
  "key22": "2Ev8bRgBUAoxu9qQNNH5juwCtWBjfdQPwFtYGqDatwXbuuJf44FMskFiJi2khBYJDaSk4zc95hbHgPbwiTtL2oRg",
  "key23": "33rGcCfJQksuvpkMD2zNom8skBK27uzPv9vairgCLCiite2oWkf1Ms4fD7uWRMNaTmSUzgDooQQHUTJK4z5Qgw1p",
  "key24": "7DZSoKLMg1fi4N9RPQNLF2EpNWj2rfhyrMjYfL7FvpUC7ztq5Co13HPoh37EoqZjySsfenJubEF7aCp1pbutYZc",
  "key25": "3YSG6VSBHXoGLDj13wCzqwsHbz7WnqCTQKfdyHTYf197wfdaTeQH7bFf9E6SZE1cq3JfePd9qEjm6ZHu6DErsG5V",
  "key26": "2igKuCMRz6amkeL7n9s37Pypqd2Udcg1rPRxAutFohUiv8kMrL9sJdRVcrKD49nU4RAqsdfNeq2AWuZdWZTh5URa",
  "key27": "4YUQfyRSDfqkNXzqtzjRquBK3wnXQribW6DpsdKof4jQAkHGE4q7TcWK4hBWNWanAJX8am4bAkGQczqSsLy7R7ND",
  "key28": "5SgAx1QSrgN71k9YjPKRocwz2oYv2WYytQzPNuv9m4wsRivJE7XsaSiEM5xSv3qKkjhLfjaNtJ1sJefJmzqyfjJ4",
  "key29": "2j6omyP2eaLyBEt8VCRZHMTGHeBd7JWhpjhvfBV9cFeRUnrMUDU2gdbHLgehS9LRXSwkzUVgkUbfwWXox3bH1HZg",
  "key30": "3uefpB2D6DtKsABCrVK1eGgbv8jsCXXqpn9NYWZnerfxuyru5ojjK2JUsga4s49rCqyGwp2UvmYX2Ah2s76NVfou",
  "key31": "3giVVLZxFgr6vuMuqcNyaTmNwkMrT7HSEmFJP6hcp4x1wnF2cr2FgLBxFvK1T5fuRdWMCk2WGFHBGdWjBPwLYE4v",
  "key32": "5L2gb9WUsJ545LYKKmqAqABfbQj3TqjCopFvvEfKUcJYQv5bYGw8d9Xu5XQ1Gwpzz1Umk5s2UMxb7jBmKsYBsbko",
  "key33": "2WCMH655J4gXmyBDCZDy7jJSoYRz3AZmaackszA67MjTT9gHNgSw5hwyGwZZ4gYtNgHeNfbx79U2Jk7ohyfn2ZKg",
  "key34": "FCuGbA26hMewdb6Xz2onR32JxWcXZAahSckzEpDDgkE7WDjp67qJX3kQ7JMzPxfhTK9JioQPz1J2CRGPu7MiWPy",
  "key35": "3vzzuNsXi3jbEDE9vgNpgJipq7bDs9yuSsp3kmQxhxrgnXzqYy8HpcUd6QbmMZtqrkfSkRakSPQXwPhzwMNYHoU8",
  "key36": "2uhAbxSnYfJFazHJg84hv1aP9ddMd9EpzjnSn9k5sekwF35XcnRv2Z9miErSVieYnVdLXPXZmeDCdcQtfxq8DJ2N",
  "key37": "3qpLG9xMC9SVgK9v841yZ9a7G8885eoSiY4SLreYGYVix2qZRs2oRpvNqxsUHTcTh1xGcVydrzEeTttWiXgSNwqZ",
  "key38": "39m7WSmBJEeKFyUynT4i8VHjHfwLCSoay2PRZs72xKzr6NLCsCX5sPbdrx6sy7wZmXUZkg8RzpeuckC4ixmhSfJf",
  "key39": "2KkVCeeCmzJb3XxzJEpueFCr1xwWNgZDTTZyZJaJEpgaNfVe2CeJvphuxt55UnPH8S8EiaSBNRCtC7kebRpDevqt"
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
