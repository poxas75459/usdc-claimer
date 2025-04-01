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
    "4stVBrgyU4Bp1twV3vsV2U2deS2HXcfSVhvP4dis2awQr6tiC3ve8J7RF7Z3bunygowuRn7HmnATPVbNxjGtBSF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QMXbKbr11UQh3XJbw58HhBvwPwnY6iPXHq53dMYnSjZd92Cw6WRq9SYrk8stap3C1o2XeJ4tTMF3oB9oSaAZD9N",
  "key1": "4TTvjKR2XAcuy2BpWt2d3RaobteS4HACZTe3SbnjRNNkbnSZMpRM2ky8DaxCKQZetAP7NMk3NKhq57S5Zqhh5rkp",
  "key2": "3bMwfpSUHgAwptBDn5zWjNSp42htzoyhMis2p9w5b1nMQvpMKGkR1JLRhp8LV1oWoqUhW1vL3uwR7EcqepSdmrD5",
  "key3": "5X9q3TPmNryvAnRKiSatVGJo2qJYdsVkDuLMvHuifzMfjN4Myb5gfBJHwG4ufNga8U5S9ddjefkrR51B8eHPm423",
  "key4": "26usPY1KTaZzshUKB5ixUg3FcbgFGCZhKzGknV6LJ31ALgC9YbeCgbsuiqmrFoxfyYnGDNtYVVCjqSuiEwTPzsnf",
  "key5": "64n111He6esqf6VMqWzijHATEU1YSNrjSagjtipxNCYTgndukbFBVvH9GT6TMbVK2zLkB5cqZLAbAVtkA42Pcad7",
  "key6": "49Cn8Y4PVQ1QRU5LUBq9CH59tcvQyuh8x2TXgimmLjX9ZTeQMRCnP6WfrGF1g4z6tdZuEaee9HUPhk1hcJckTm9V",
  "key7": "4hQCYgXkFVqiqVikM6yefkfxNEKGBYnCbX5FajUU1MypJzfTho3fB8rK8JA1HVbdzeULye2xesAZm2qqVZZxriBL",
  "key8": "3Dsgs7mFa91YJvzxYs9gf86NkLQfJiMNgzbA7MX8NSQzqYExxQ5d4iuCQdULJhzpVSuR3AXZpKjwao7ThrBtAykM",
  "key9": "2KmmVjiG6k88v8sPZwjd6LAwV72H5rRwqiCZKvygBAihDucR2qC45amweFJyhSeXk2XQUjPKzUDWoEh2nmepPg5X",
  "key10": "2onUbys5H5YdE8bvUU84LHz6g5PFgz5itjarq34211b1DL13cUkYN6RbHmnFsPEf74thYJoo5aXpFCXpaT7vvHtT",
  "key11": "4JnsVL63DVjYA4onSNAxhPX39TTR3YHcJHhYAxh7MsBgu1ziEWugb9FAP8KwHDDhEAvmrAHhSVKxNDtJmgRM15Nr",
  "key12": "254hQTyHv3THGyvvSW98t2qMqGVYS4AbYjcen1dFCkJpYZtTZQ4nQCZp4jBwXr5aoS3Qh8TbqTpfDFXwBsyTMGWB",
  "key13": "2bxinyKZnwPH5GAWVzMnBphKtVaECsa7QhvtSz2BmsGppLoCD1GhaJsY74AyQ8UzuQT9Svq1D2nDHLVWPtBeeVjC",
  "key14": "st4VC3hAFsaZWf7BtQtt4sisiqhk7mtMNHkeGjLW9Vz1qR9TPv6S8DKjBeRoVPqvrEBfNLPQ5dU8M9EvmT6TeU6",
  "key15": "314HSesxvxNxwokjDm41tRJhS6xZ4tW7cDLw5VrL3eTrM7bwZxkWLBRBqKNRSY9LrfRtBgLBCDjY6S5YAsXpedSm",
  "key16": "S38vbPDoUPDhsfZTW4Vxb6JJqobUGZ7zT9owdb8VgM9AQ7BYkoRFMR2k8gxKw1zTiSbQWxESpbZ8JhhbcXEhN8B",
  "key17": "CPYLESBVmNz3cFcSZZTEqNs7CcuSxeiFk5eeTNv8iiwdsVuVaXvxCRvxrLfh4nXGxZjMdzkanDNczEe89JtR6mQ",
  "key18": "22w7wEZynL5z4Z3PPcB6B39xMUE1M71pdc4mjz8tPk9JgguPEKvJ7WVtdz9PhTbUL6KQg88uAQWspkPAX8nt4sdJ",
  "key19": "4t2HJ8cf9Ai4TwB2eQMo3utPxDCJjQCvsi9hhBHRdBbPqx1QU9PmJuVrd4XWLh3PQJXDfm1ves9XotSbs4DEi4rL",
  "key20": "2WMnKfF36Wyhn1Eg4hYMFe3iVHRciCQZb3NXCY4XRJASeocCkzaYbY9xy3oQYNiYzv1ehjyETM374ZvB8ZhxrEb9",
  "key21": "39BJAXBgFVqXo9A53LGakF5wZ8nntAhZtREudeBw9fuqGWBnVyLdApXiRb3beAQetegCe74xA3K49JUpP5JSH3dw",
  "key22": "vuZqvTc5sa3KaZmzqSXbxJQAHRT5KYXnjtVuJqLtaECiYiF6cxnkaBeusXYxb6mufUpxpb9Dr2rmoo3qMcYfv5H",
  "key23": "3KZFMiGccLUCvZJYvaERNC1ctYWTCHqxD4hJfsMKEveUKvnQvAKbamBMhPSyQVJtFfwgWJPb6xBepDg5WyHonNuD",
  "key24": "zWf6u9ZXwRguE56BMb4DuHe9N3vWdF4Aymmqxect2hvLvYtpx24CZpBZVyWMEtsBzsZxGiMqza5kUXdNQTYS3Yh",
  "key25": "5DF8oczqML66FadRYN8EcBtycjAevEReK5aFQYhxRfobrb92bNLGpWXvUwgeqk9tqvKFRonwzCHop82nU8kmDHYy",
  "key26": "2ShfshYAfRRa5j1645rEEradhjU5sPuKf2KV8t72hbMt6fHZnV98KqB9WhdnsAkc3mc5695srkzX3Mxz651GCsP4",
  "key27": "2ePhatVnuyvAZGzWAeTXjqmGZCgGu7ybqonp7vxJfQx1aUmsekFm5xmx4cybXdb1d89udhRUW1Kc256vhKwNkip8",
  "key28": "4eKLHmq4tXFxZoiuo6LUuSMvTrUGbsbHuDWwVq4pq8KW41LZRynfjvuBW4mNiMWTj7sR5qGNq4AGQfN51Mwjgkby",
  "key29": "5qou1xUrDyrhJ9Cm9GhSTgkTRCvyTu1ZT9yvB7PhYqmbctWZEyoEwL9x6smnHRhg7bX4GRnHamSYwwEkotoTHZHc",
  "key30": "jTJbJa9SDf2jnZoQDpgoowv4Zwgh9Gv9gkMPKbmA5BZZ7hiGt8mt8cdri717B1Q6qiDkY75AEGdwK2tNYh1JBzX",
  "key31": "4YV9ec6mXXH7UQsP9hoMu7651oBHEyuHeN7PCQ9arnDfA1LxQ4Mtp3KpK5dd2ZEFXwKyKzGsvDJxYBzERpsvrw5o",
  "key32": "5n3CQabzykUU7JfSSRxmzgV9pVvn3GSjRNJ3KXVmMiNkQPZYd9WRNKkMLNevGqW4PhwGUp9VGhHoESzFbBPxVfHk",
  "key33": "3mxhMDyzaQBPwYzLMVA2fS5nShpKAH6hrnLF3SrZKkrQ86W5JNP9SCW7kQHHrFJrSzo9TLSEsTZ73ioaVNoiRLvK",
  "key34": "5Jk6RcoHgqfKNW1FuRqe5u4FmeB2WKen3jgp2NH95KLBAaTDyj7jMyJDb3yp9ji1vbyWN9tJRBjvmyW1QZUZKNAk",
  "key35": "51i6sjyLaLqKU3XbMyJPCUVzYugveax7xKJZQeG8TbfCAkjDrBkSnbYLusEZ1fMAAzkDTGyJsvQnQyEebfxNU3mc",
  "key36": "5xPYYZXmNWANxr3jiM63zcs8EMqWVTSEohmFLQ6r62EADbuz9sncnA2B2QqSiMf4xahcRR7eku7w2pczKbPNhoNp",
  "key37": "5QEe5sJJgoh11m6iX733WBQJNqdMCJY5mouLP8EkcaC4BMm1DJatnAfQTDMQvoPCLXa3Q5x88ePbaUGzcCsfJsTR",
  "key38": "3q9pBZWw6dcfKhL8MUiaE1VGZJq3Wa4EAom4MecAKrQ29BPsQpt8pBvU88FFGZ8S8qzeekhcHERpMu8yYRZoJPNf"
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
