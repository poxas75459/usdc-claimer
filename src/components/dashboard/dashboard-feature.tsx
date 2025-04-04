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
    "5BLBKhW9PrE19wMgdf6F2xgmo7ySPcAB19GC7nkSCey49YdvDV8qoqVSsixy9Wt5cdSh2kQsenV5yAFjdirC84oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qd15ghVmsxsbDTmuyZC74pZ9qrr3J3g7p5a3TWFAwA3U2b4keGwZeTLQippgmzQbG5SBPMkEahVXaK2nc2YA7Ed",
  "key1": "5UZ4CCSzGnxuExBg3d6TpMyXZafJj68isBh22PiYSnCx5njh5MAKonq9EyqsUh1bNqVEEKQ6zXVXXrUSwP33ZzN3",
  "key2": "2v8FA8YqCJxHTbeJJnauf4B3iuNBDoYFuDyrxtSUj5JPj8jFSR4wxovGZAs5wLhHZqYbyr5fJNMTbj2pXvLjavUA",
  "key3": "4UtLxtmniJspBccJHRzMcqZHcjPKNSx22u2LmYSDTAi9UVLx6JAEvxNPt2aHVtEzDYvkXCTdBQ1LH72bT4eMJGhB",
  "key4": "4uZQuu7ttq8RS5mNyrx5DMHeESJ6E2wD82Za689XS2m3AQb538XonZW37gnbZpwAYoPZKKcNbd6atovAj9AGLVRb",
  "key5": "3a1yPXHM6wkd6pJX7VKfkaeUGFsL3Z4UC7fBxWSsQiVWmc43E8jHRh8GAVZrejvDY8Lr6NAEWBmJZU7og4WdwEJ1",
  "key6": "4YJj5KKN6xuUjUtuDyKFecDFG9DFKEXLCVdU75H93LhbSAwRaEsznS5ZgBHbcDECUi1gMPkoggkDPDeFWgQuR3Np",
  "key7": "4Vk4fPQKmKTmZpvG2TUHMy6rJLHVmNjDh7cpxBNGSh1cMXex9DFX3xftTKTTXTSqK6KhEn2Fe1wW1ZPvFJ32h1s1",
  "key8": "KZE7docMJxxJ5JfjZwmVmWgVCmCMTqwf44Rg2WAhXfE6CmbAihNtGUtTnxBpf5Hc79mptNucpqxkm1QASsQaV8n",
  "key9": "4dPaPgV58g2uNmXpAvtkXNV3xGUFCfRMY97CUp5AX6z434LM9uZYMpwgFoQQS1xWyAhdcKKvEpseYtHygHtii7mT",
  "key10": "25n6WWdcFiuYsqW6j8owiFqR4NeLCMJHknxsg9aiwceVRtyRbb8PbvqFQENj4df8ZHgjTFa1XTt5tYQrFN3Z9H23",
  "key11": "2RCRwJRLWWJmpirN7NXdGcN4yZaPZPFQYAQTqpLG9N7HUPXwS6bHnHYtEzriErDa786MDWqJNbjFCz76e2nqCebU",
  "key12": "53xqWwBcqrJaQ3r1TzRhrZsK1JTAUiBmFtoh6pPGdFVvZdSqKGQiEW1y4fMyG3rxjj8z6u9JFau6Y2zrU2PrRSeW",
  "key13": "35RLkDCtz54ve7b9gbdzikQS4eMHAvGQ6NmnPvgauWhUXoYurS74dyyYhc5DPw9MwaQYqayRKNBKfaNN34GGKEqa",
  "key14": "4Aq5VcwNjC65CvtkdoRwuv5YfyayodNjfv54RatD5mrk7SLu43u7RwMU3ApMRrakjZXivLNLeKYcSshiWzWX2P61",
  "key15": "3hCgsQuR1A4PjR2r94RxLL6JXgY88TPSZ8w5cYxj59AKY1zs2fU5T3Gx5YfhFRSpg12UHqpXeMv7nK8EujRD2L11",
  "key16": "3EAqEaqKJL4pZEddftjKumEgA4kA9qoMD8i3hkhTvKWrumeYXsWjrY9q5X7aNBaVpfDVmCQCkWXjRTXDYZuLywC",
  "key17": "32HqcZh5kYmbGHiiCENVWShaz38GfGYNZ5XyXfXGVC581BtDo4KQTVqGQKUjKJsJn22G2AFVcZ9cTJAfHxmrZjuk",
  "key18": "4QLkQyDJMdRMBwbCgB4i5vks86t9E9tLMgMzLEpgWDgJd3QSquJeC6Y7RBCZz31tzw2iKM3AMDFfUuBFG3K3YAxg",
  "key19": "2FMaKTkL1Zb2uzKxFq9KhzosJwbiwhHcZBa84LzHxngA33oFDwWLSkNnK71zAxmoKmxR5D9mKsayZVfhHq2ApbAK",
  "key20": "3CM3qkhjJEfjXeqsdBZEs98Xp5niqhCmghY4V9dbN68swt8GCtQNhBMSzq2njcttZQpEyyCaPta6dE94UNC7LYby",
  "key21": "3oNKmZ23Gy6fdFeTxafGnSf871qu9Gk6GcSNKFdw7B7qTQnLLBwRM9vfmD2oyBHzRYfJaDMSjCkcQ7ZH2RvKpmfP",
  "key22": "5wmdz6SZPYZo7gtEZtqUhvScBw5UZrvEsACLXW1J8Lmh7Y7W8URXhJebnZrbMpXjheYP2REkwZ8uiLycT3tuHbch",
  "key23": "66wVFRz3aob4PCCbeC5qgYWofRDDj3NS7jgdQBLV4ehvePmdZmDzXpGidTkxofvb13kvzkKVg1ir8bf5cn3XUArZ",
  "key24": "ZAfjdPvnHL9ochniZayuvr9eYXAFaGf6hCTaVXN84yp7VsQuWoH14EeQ8zFwjx3GWWXF2DiFFAT83iBi41cJbat",
  "key25": "4u9R6yqADRvZXLDWNtwWuLVBCyPmgiAMXqWn6jDPTTCiagUNZRfNpr4vB9dpDa3HEozgaHrP6XLMp2KQBDgXPmNK",
  "key26": "4Nsnrhws4xNriLcaKXEUaqnxPyAR6DtbwQv53W5Qswr2abetaeouMAS6owcFg3E5Uo421P9qJBx4dUXLrvcjGhG2",
  "key27": "5YJii2pimckxXcmiQrvXnd8PpXFHzt3z5NPiJUs7NByypEj5NQNvvLC8Dnt9BLmXUcxVfKh9u889RW3PHEwAirHh",
  "key28": "5U32njedb6gkZjuyD2J1vixSrt1RnX6nm4shFn7QcdczshZ9ucoJeMruewZ74QRj6oMaxtcUncWgNw6EfKrpzdhs",
  "key29": "gUuyh14oDkMLJ85cGhhfDm4bekncLSztNvTYryQpPsMC7XUZVSjtkpGGuDwU1nMZMQjVZ6SYhzjipTyhMcfp1BP",
  "key30": "5JEr6oEDPeMoaX3eRhmyHbK2DEbtbKjdCtEmBL4BP4McvWx8KECbhHywYqJEtW63zGTWgKraVQcdAkHoqkx5D527",
  "key31": "4eiFoRavpaWbMAHf6BKQEdun1sVgftosFCoVD81FJncaQufoBgEBt2MqCDJBy9BfA9b7Pe4eMocLBPH3Vyi9oDio",
  "key32": "3QmfwhuhgsBaTEZAt7xZJbo8yDu6eaLG8khsanAitijzML9LCauWRwnxJ8Syf4Qx54zNirWhzACpfgevbNKy1ERZ"
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
