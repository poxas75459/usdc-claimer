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
    "HzVDPHn52FuWCK1X4Lgynwdy4Taj3Lbku9bsqbNjxjCFkwjCv5tRr7KEegddr1WBKUCoYhgEegxNFTw2k6xhnyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbYRn5U8SeDQ5XCriwfoex6tBDaTEBHSQV1CiiipSzsctM6616KKBLL3fSar8X4eND9jGEGTKMm5HZZASynpK9h",
  "key1": "5ZMDuXKrJ6PaJ5UAcX6aa26RPskQnyKxYXWHWiD7WY8priiWvBZr8qXTAcQWaNgEAbpXFs3MmMWAigGtr8sLcyYr",
  "key2": "5FoSXWK6a1auHR5Y7AkQTSMiCPp7rAi3tT8b22GNFzRWyw6UKPsk43QYtHKZ8xmzaTKfg29c1oicZDBJXHMAShv",
  "key3": "ykXyLDBg2XbGbirGdNRA7i6Kv4hGgbuLJ8CREujBx8hMoCPZxe6S2PW5tieqkci6zZ3VsQ783fFUQgcbZ7ezDzQ",
  "key4": "8NNgEvRwevn7GMhtAVW1qdB9tgv8zP3PNMSfJEskboyg7FEDwjLb5amaXFggUZuGr4DDLjoEmtj6xGUdzeS4drq",
  "key5": "3Xb8gDSFi7mpk6Wv3TEsqY6wc1gcgvHTH64UWuuT5KbLM8Z1csrnm697mkyy1rZCWsN8Xjy3D2XYzkcCFc1JPrPT",
  "key6": "5LhS2c1VqAHexEGcY6oEk5AW356W3H5NwAJ5YxgKq659uqfZ5TiLpZdpb8EVAKjjqKM4wvBVsM9KgWgz3tLn8tVb",
  "key7": "3g3EZAyACHJ2MMhfzzz6nhzSVoAhLaou8dDXt26LDY3E1SgmthxmAfGGKNtTJ2qrtJSLyEFWU16xkEdXES68WF9X",
  "key8": "4wJCU7rF3Z5H8K5j4AuKaBrewd4D9kqB8kZuLTEFXhEKDdos6ugQWsezEHYXjD1avn8BnTJ2NyX9b3amuQQnfEZT",
  "key9": "GkqwB6gfsmJTsRzn2izL9uuzuAsuEdyyCioRSmAkGE5zfVNscEnCLbxmcCaBxqK1QbcQEZehDaKip43uMp6czZU",
  "key10": "S9Tqfj9qN6D4Ne2YAR7NYPc7vHiTcs5Be7KXHzhYQyUZUFSS8714kXPVyyvdDzazsm3xUfjzRbTWiZzaxFyPgAU",
  "key11": "3XbwzRHTYssE5F6uJ7VuPqqaapCyuU5Ay3h1dkptrXUc7uBAwczBE643cBb54P97FJP822UzBBdvpKv7V3XvqNnL",
  "key12": "3ndHDjqGR5nVPRzj47o5pmLb7AtCuEMbkj5og2kDDNtY7GjheHsoikzSiCdLyBY8ZpLreHj4H4cDunaVqhJoM6UN",
  "key13": "2uuYHi7quGzRtkesboChHcLZ4AKhiZiXkoqVPNYFHXAvKaj4SajqsGssgMqDkpJEFFcXLSqzgpXPgyznc7hRFUbG",
  "key14": "5kH9Ljx1jzyUT3HcPtSrYvVZcEPjSCikYDGXTMYkRjoZeFvSzSMsphNtwDuhWrREbxwDeB5cKhYoFGZdbJjJHN4J",
  "key15": "8CHejvUx6YGkEJfPcF86YLpeLdhj5ykBJ6UxnLxkqCbzAkWn1gDeL5m4FNqqftUSztE7cDd1FiEZpsz5fcAVWn3",
  "key16": "5hxzRmuq1ZkerU8oNWpWqLSXmW99wB5MnPbkfDUzeQaFhzvcVDFNGvraB5QCe7U1rg8qzqXaXEQRiNtiP1DcKC4b",
  "key17": "qKmStPbaG4foLEeZNVwah26W5Mgwt7UcJKSKUpVkVryU3qZVmnXvdZQzq2BN5QNN2zu8vP3C6VyUHGc29g6UbvH",
  "key18": "3cApCZKPVhvCaup6miQECMq8Y4XiDdrQ17WoQEdF5fvcQakVja6LT1Lu5RfUAjDFmFgEQ7beLWpm93vRLkxghqxG",
  "key19": "4Aw3cXahnkMDAL4PgFFwzgHpNY93oKxoCnd4PzJL2b2W8svbTEFVuAindsj1ZZTempCUAMWWe9bQiCHamUWBoELa",
  "key20": "mXyYRvQ3GdNc1rHBGasioEnz4aLMwGdwaYZwEp3ncYeWEwLC3zkQMm3UTuTVptwTkF1mubs6Y7jYHTvUXQPCNoD",
  "key21": "5QcKUHTDEdjv3fvPLdwXb3d8EkSLcMo9QmvXyqT63eSGjDSMYEBwHwzoAbqpjfkGuv1XaNx9CBNoBnr8T49Hygf7",
  "key22": "5pGDLtowhuhqNtvgTQMg3cKaJRbPLkHxewJUYWY2mAFz6RpGAJ8djob7veYMFPUdGjyP7yVSVDP6qWv9sRWasxRk",
  "key23": "4w2N2UDomBqeWonrYNHN8s3s4tWEDrUewCpWNbHiSToDeYKvR4v3BLHcQHpw6Xi25HaiEtkRWQCkpDFs3nPBeQMk",
  "key24": "cTHQEjNnJY19kCF71DJ2hpqfj6rXR3Z47FcCjJmCvm3Bh4DemtK7tedUfqBZdLb1WtZptrwXdrPgenZsyNfJ5SL",
  "key25": "3QZs6h7saHCcHH8wxhfSAjmEp8F2bkk5zz1mFWDwzsNDdE5L6Q86BMTgSM9aDbPRSmByW8PUaxuzEHRyN1her7aU",
  "key26": "2VkFcfs5yyhGjzp2b4FeqSKyyvzuW9L9EbdoqeZDs3w3Zi5JAeseEb5irrkfudqcXm43ztNxqEkDMaTpeErBMXiY",
  "key27": "3hPvzGQ84YktjigbbVnda49yemvWRZjgajg1g97FJkQLXoEwDo3P23Q57ikaRFCirToDTJ3gozdvitvXfktRxchb",
  "key28": "5CAyM1wMKsDCL8ChWEobAiKigKYbdaGViSPNKbvzzQ8dmN28Sh2eHhj7rYwQx288gbWuP38j9GRw57uqNpiFzzG1",
  "key29": "52KC872x8T25UFsoE2GHBF7nMSdSNoyNzHmbnHZNe77SFph8f8ANRkZYtRoKymUger4RJFDaF5ou3SGaHtNJbMac",
  "key30": "g4TDwR29jhuUZGuKpZueZ7VedTc53B7o4nNY7jJ4fhpZKJNTfsi5WKp9gdfRfKPCeC9CSKZdHkknp9o2sCfPHoy",
  "key31": "3eqKwDurwL79WNPaxkh7CT5Yog8JNzWfGuwKLJjSe8XFbCdWKYegX7f693Ho96GgzkeSNhika38cbT2mFZCMRBjQ",
  "key32": "383ignDmfZRi2nm5NMLcfGqjZtH1jFAvJvwtZqzRyYKU3PCYEZxzMH6HUsHAxbLxuxtnzFwh2BQDVPnWoUDyxWin",
  "key33": "2L26s5BvVufGSkQP9veHj9RjwnCGXy34RKdVPuxCXMCdD1xDbZTmXWX3VPrUX9A1hJCvyVLQnQRTYtmGUxjaW7da",
  "key34": "65cWfVbiA66JMC3QTEkF2JezTpvhyfyLwkbZEWaDYZpT7YCMZFXcSxGUYhCZJtAbYHMkgCvDENU1z5vyKuRRVwfh",
  "key35": "3Wucf7uh6vhfbV4wzCA6sD1BQigLvRzfUXZc2L2CAq8DHeawLWNxoNKDEPqDbsLVpPxRkFop6gaxBkuDbqovgomZ",
  "key36": "3W797tX5zx4Y3aRwQaD34yKFYd15qpQmesUNVdGCtTgqEjNdj9NdF3RPvUmDSQxidBJsRwiFkKqZ8UwxM3x9omug",
  "key37": "3ionFXfGXTk9nyfXBbj1qZtYbMXSV6VeJ4gTQP56P97KtJ4BxED1FReMV7ESQbCVALRxhwm3rSrsXdg2mQdMWFa1",
  "key38": "P5mL2L517hLbgbNVJjeFxm8E1jXcFwnQcywzstZjVPeqFqjg3ejiSpdJHbWNUUSsS9FbuafiQdCyngtARNUZ2p3",
  "key39": "3agamMqDS12Zhotxfb1rBN4Pjq9pGBhGbSPAUozZtZ2ZYTBsGbKx5HV4AnWUMgHG92LYHtkeS9EYFYs5tmspmpji",
  "key40": "5qo6d6sJi45ezXrWkw3EjpYFPXuwBuWSsVgUb9NVkj1eTX5oM1PY5qQ4uzEK9nzqpiDH19jinQty7x6vVqhFExJU",
  "key41": "5obQRxS8qjnCMuMFtnrTek9TPiMb1ddmhPpqYyo3GwA5CCemULi7w8zETtHeHT2F5vvyYLAMEcb6dqwSFFFP3Vqb",
  "key42": "3NtjngPTDq6wGtGYTGyXTz5HvEQZYHuwAvSYdsgkcDBy8pqm17YBMyCKxANnSgohRQjpFNqemeNgSu7DPHvnHhDC",
  "key43": "5BKKoyydN9YzygnSjkrZMF94EeSjfxbB2SLxr3yzzvggghPWbyvszooMwi5ZCwjUJE6wUaYRsLxusN3iqyxwVMPJ",
  "key44": "2uF8JGVhUYa6k2EjwMZdQ9g6FAY1LXqAwM9acBgTFctqYuBn5DpNJbzfXXAaTGaNnewpKigaGY1VLq6admcR7x6p",
  "key45": "ixh1Et3vWDwmbVvL22CKDALKLLR5BLY1WP6z8sUrxrJdozXXhaPA17KLvgsm1wEQmRYeokBcCdSLSvYzpzMf8VN"
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
