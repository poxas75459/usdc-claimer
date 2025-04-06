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
    "4JCnb7tLMpTsis4nNP8586TUnnbBLZQFqZ7rkxmGjULLvmq6KrWsHQDVFeaCsnUGCghwNie7WzpL3AgK89Hv16pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mds7XsqZGJCsuj3g5fNiNYrkmwrrzghqhJA1HadcG4x9cPcmynYgFQJj1jwQ2ZsoGL5tNvavtqA4iU4Atcg1Pwx",
  "key1": "4y8N4wbJ9kiTZa4Y9nZqe6TuVoUsYBdRZMLy6nP5b4fWef7ptf1LK55DShaQxi42t9zMvxuE7nR8fGNRdYCvPn7G",
  "key2": "4MhwQT6XSbnqmFD9RZArLVyi2FvbZ2qfcZMTrUzWHiVb6sZL2fb2L3S3bdsKep9EYYtW8ycTBau1XeXS83QowaW3",
  "key3": "ZbnNv2675YA5rTpGXLnjBCbMsAdHY4dUaR4453hKn3jdAi5tin2fXz1sHvFRmbzJgGLGEcBPkiZT6G1i213FkhJ",
  "key4": "2UtsgsxYu54e3eRw4SxRF1xo3CwGtsDDyWxxMvfHFgAEL3UF8fNiuYUcSriij3G3XaupUeUAymXhhENDVYBuRsUb",
  "key5": "4dz8UDSLrbRitsiy8JNJTxzecoWK8iRhf8mquBsJi8j2usDun9yg4xhbbaGtSymiWRAdTdRtS8tT9SXeE24X7L4n",
  "key6": "5bbnBRLUAzjvLBgXU5CHvhtUcFBDBTdSDvhp8c86pg7neT6HUEFMmZeZpCxDfNvLd4vg4r9iKBQx2ehaYe22fcDK",
  "key7": "2jhsdeS5PBPEwBQmpCmAQM4uQjUPx98fD5N8yTi2Xwr4jUAWJVXKAetxyqT85cKr7PMuuEUqCoe4A6xsFxXxySsn",
  "key8": "5id72t9FbNzhxcY2HEmDkLHHQAgzPYFf1mvWpmHi7Lp2zzR5yGv8PzsCzswgukKGZVsrTgkgCK3DPAA7y1MxD2eS",
  "key9": "yuXrK5kVZ4Ay4Zo46B9sEnDXPVV2xL6zyXAqaHp5N2q69xoEcc1uHq5UZVEYFPRjqq9iq4NnTAMmNSZqJj2jMFS",
  "key10": "38i3thn2VkKErwh4LWHSBdsuXm6PaErUcyFbKQCnZJ15hjEAPjQbePDvYpMuAL9Nn2czq3WhD5WoRw6MbNaNAymN",
  "key11": "5QgMA33JEWc1pp2N67wCTA4zM1dvn3owWwPsiHGASpRWv3uG3LYR8qvv2BVTxVgE3wubneLDejEBKnHWubeXkkAe",
  "key12": "3iHz2wRwrr3XdhrkGayBx3gZV7C44AdNXXzP2AWrmcKYE7fch5xxksw3mwAsXjpPTxGJriuVXUVvVYgkCk1bKHZo",
  "key13": "5ha7i4Gh6YTnbg131XVTSRuJix8Um3hdytUFTnb1XVBN9DXmEVHFLtE29XvJTstH48VwjfRuue89vKFmFV6ksejT",
  "key14": "oDyyqNWukU9Dih7d34aykxmTZDEcYmSubvshWTySyopEgEkRiQrsadVVzbcU8GaYY8KvxX7UuYcpzgtxMXNUx42",
  "key15": "9F69MaDxCHS4XSLR3kgLK9eSPSpfDeEhqxuQ44u1bUK4a1nvanigFsTZAQuSxezjdbmnQUKHVX8MbdbMjwp5VGr",
  "key16": "PK9Eb6sYLmNmJHmtQJcBjxtLFyKuutimxgoGWfGeME3YL8MPAppwLW1sVaeAWEwcKxFKNEG7xPFUdjrkRfpb3Px",
  "key17": "DbQPgWzsUjMXodyuKouc5snUTSvjVLpzViXFpafh4a77pjCMF8af4Dcc7xftpQ3Kaqvz5WfYqhTzXNFnv6unNdp",
  "key18": "4xXeHhsvTRnu9mr8MC1m4z6byva9uZEYMCo1QU2fJAE2pYYiKMLUMDdjetk1uZWkbVK9b6iNugj1iRucGT2zje6G",
  "key19": "3YmuVA4C8k29KdqyCJZKM8146JXuaQd4ButKWGbpwrSuKBRwZfTM95H7rxePV2Wa7XMr9Nt9v6bPBQTWuuuTVLHH",
  "key20": "zKdUHzPMUou9SMxrdFxbEi63z4bGEy1EnLijtLdXR3eCccDBovrR756XQFHBuwnwQiDkdygjvwCMVjkx2cLoWu8",
  "key21": "4jHGCVw13eYbRXG71wHsc1voHe9cCn6UU3QQUCzgi5jiPfhBi99n82gQhFidTUx9rKTstAm2PEgRZD77HNWa1qZc",
  "key22": "38wzBo7Vx8ANkd5iyGvWnW7vb3aiXLNJy6zHUN89CpgGCDhTav63VDmxoa37X6escEHRtCkySqY1VQg7LBLGuTbf",
  "key23": "21R1vmtpYZgxBW58t2oxML6iVyDzE8bN4MEWS4vQXQSCk316uxVH7c8ijhHDrj1vzAJGJFBixWvELHTnuPLk1xD7",
  "key24": "4CjiibwDTgYGXdMKUQztsrNJ2xyFRtRGiv7EYKr47cJnnN4B3RHmCv9AU1BXAQ8DhxvC9JvMSr1hq3wzYmTaD3PN",
  "key25": "4QpxXpc3gxfft5sa2MjRi3SSNzCuHXM2zdi5j2fRxSWNRppiLZdQDQqimhdqPYADvizte7Waw9g2A25kFpgQt88C",
  "key26": "5Xe41K1T816o7UTMn4iAzmSaKJS2q4SjcUmGbXpVdNYM4DeANJwqGyanGk9aZKYu1TBPex4Rr5njfSET7wz7x1J",
  "key27": "5mn3e8j4ySx1dvrDgDo5ZNjp4782qvbUTjRMrsRttapk2TFLjBSo7gvyb8ZgAZQ8sMHeRyMgvgm44yw5VPxAakec",
  "key28": "56xrYnzouTYxGYihCNhpWzW8caub9TvEqVYXw7CEWNgDhyyhoFViX44HWJ2uTZ9Dkd1wXDfBgQEJkQNpkMKPZQTi",
  "key29": "59Utyu4MwQsZpJCk5jzP4Ux5EA5QykR7vFazUXvm1vvzkd3BnotEQa5BPewXiPqC66BgNvF3TM7YFdnKE7dHitu4",
  "key30": "eWXJxYFj9VQM1iw5tczynxhm9FN8UKYoAVpxXhnoJb967up2ntSQNLa9RNtFyxKCLAqrdJwgcTKnVqnQUKgyHdw",
  "key31": "5f7NDnBbobroRdZfH3Rh72hAcxVNviFwY74Lx6S7WGsuZPzSh7F3gzVdmrDie9vyaENqFf5XmsHFLY8P4ndvNCDT",
  "key32": "ZYQqaboCrf5hfX1Qk4xSDs2aRpnvri2cZmaEqjhxqYjShmtsu9WodYE81yuLLmT6JTkZkaLrbMcX7xX69RbSRHz",
  "key33": "4X3QAW5R5BugzW8mUxMrD95WzxHstmGUH2Q4XXBf45joTbNGnpRJjm7D7hZn7yeYy3c8PPN1R37oebF52EMVkvoG",
  "key34": "2A2CYLxUQtUznJzv9EgjzHbDxjt55qahXf25qeuL8mvXsvjw9KzYVWAgHaEnLAMLn9wHu2agBH3UmNA4zKUN6WKj",
  "key35": "29Qn47R6kn1p1AZ8TBzbVVd9Mg2wjXMsaLhugTmhDkog7VFvnZDhFeyMMb4ucw47PFKmTpTCnZHG1yQ55gHxXPew",
  "key36": "4T6qvCLNechR6XvJwFSSh6Ta6iqrwUFdPNtWocDJj3ZSPzdPADapxUVYc7QmqC8ASb9QHdsLXNJf2uXXviqr1dtV",
  "key37": "5Sdv2xy5JyqS7L6ei6jR3VxXii14RsoHfxebLiZunbtGLpawpQNZcvyw4XNpDXDLyLjfpiUyBS2pCDYkJnrK4R62",
  "key38": "567TrHeB8jjPA6HRf7ghZVdpUXfRrDdKhs4qAAHhXK9izG5TxjJ8JTBnhj6xkEcgKU4Xdt1qpyZhepWoL2MRVKRA",
  "key39": "3SnKiFoQGrqkxr1aWZkdWpTR5nKFaDLvmBfVbbQd3SW6gAVagBi1r42aTwDdXy1kTjwAThhS47hN73j8Kva9CLaX",
  "key40": "4EfMX4o1Rw4Y2saAXo4PenWZPZ9gcSDBa6HgJrAaQirFkFTa1ftRVCa1aG5Ptj4zLEhcBuhZExtMVnxZMfsidTM1"
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
