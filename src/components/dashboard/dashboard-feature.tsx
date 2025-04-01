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
    "5EV4kCRfyGn656kpsd2GDuVHtjzBS5urVRAowTsvDQZF664t53dj8ji1VFPbHT9WfGGxUNgudKAJrTnWTiq2J9UN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4negcuATVj1BVxpHn2tPEzFzefdr9d7bnnMo7WcBXTHpNDrypm8hq2CZTXtv8UqdxiJGE6xFcoDd7JkL94vNk2dc",
  "key1": "5vGZ7HQPG9GRr1tHifkxWmcN5n8WG9cdQWikme34TisTjbayYvBNLR6At39YinVLK9sFAJseM7SnfM9uPf4AeVBk",
  "key2": "55hmerx9JmACxcf6e28sNVmEQVWcfj927BXPA3SZzzfq2tn2jPz7zxhhsVYFYkgVXoS2NqSFuJf2ZUqJYr4ycdLC",
  "key3": "55qnsNMNcZCLW1bSvRbHKf8AkN6jrJMhk1YjtLrRMK7v4agZcLypdJTdLyYjmLg4hMvvnEfhrNPk8PpfsB9dEUXa",
  "key4": "4WDk41YbPcs9AHG6zuZs1uUbvMsXm3edw56Y9Y2oEopSGS3k6VjKxq6A1KpaRHY63ET8DxHkkLtkY4RJ6R3V4xSo",
  "key5": "3i1h7viVVRthMXM7zo4ja2VdAwdFVGBAeSt9NFeab8YvQHyMtdpwthx8imhaSLxtosXYwQUMMHb9BNQoReaRr3mi",
  "key6": "2ake4RiWF2g5F3VTTqnK1HDxoVzQTRvJ2oGLBCYL25XcJD9Zoq6VQxncTNABQ3DrordGd7eAkYYeRcZgNtmARSRs",
  "key7": "3Gr7Pgrm518Q8pUy34MBopCypaQ2YLFSEa85wJR6YS8LJ7eFp6vCZH3gZJfzAkbVfj4VumijegAcBJUuG7wmfeia",
  "key8": "4Xv5J4eGyLDjKw3qQNhw6emWe6MNboVWcJGDXTETQFfxWd4QvH2odi3wt772rvTm38R6XHf1X2Z2cLagprHcQrJm",
  "key9": "5AEkYbFWCHdK8uSbxCtRfERKWk6bZ2C5cxBeEzkLydxabVqLxeV1VHa49SWddUpqzZNSpCvozMpuDd9XAgQuJBP6",
  "key10": "2Ko5CBSLka2FCzdc4Jgjv7oTzPjpKoehVLKmaqxeUCQfqd7dMERUfjpgG4uhjpBrimdb1WhktSXyKaGXCmLJZPqp",
  "key11": "4Y7poVcPtvTQEwigyS1q1gix2TWSwKhBVSMBiYN8Z4gcP4rXREokjWL3MeUVYjtKnTBL6rB7AH46o5rsQox28mCr",
  "key12": "4Bznqmxhx2eBZpYmzgc1QsksxZ1gsUysHqbm4ikbkDZHRmb7GW3uR37owWbbD5p5xfaMrTC4oMGCNJiqjBn3AYvQ",
  "key13": "4dGY8m2MNBV7XhmBnSYiUAn3ENrTWoYqFvGxKC1CibzjETt9Nby874J2ybBGEmXk9bufEAbJ1GEKXGoQrMSaYZFR",
  "key14": "4K3tPo6dkPJHAT3HMn3JDHAWD1zvnNZLwmJqQohsaS6yU6z9DKahshcBrctysm8NRzvYK7gVboMpgvfFMFtZtWEj",
  "key15": "4A5MGf6bfvLAhKS63NvbnhJYhD85C91fpVWQK7JcwjPRLbFxWzzhkMmizgW9GgeTf8Rkjou6R1oqSucCBqKVbSBv",
  "key16": "kZxGx7YfqHfCLWqJqoVTVMyWfby4YoqR9VRFTkSqtH9v4qUTXwo3Zy9cEu5AZVBxbUKsoE2s1vPt83B6H1VQ55V",
  "key17": "5rNpuHvRtijJzWA8LPVF8zcmkaEvjH8zoNyUQSxJdBRcpJyeoG4VVsp6Yd9VYz31GRLF9btme1RvLZShs8GQje5T",
  "key18": "9Hn6Leu5EXmwarJPfKFFWKXnFga1TBT3fTTQWGSx8B4516Hvo4pKcGxcoyfpiJYthcEdP5McvWxPcB54pJLWsZ8",
  "key19": "4NgyVw7y9Gcav7kC6U5ksknwUb3vHLC1h8Gji6dKiqSzYR8DYrECY3AmJuPNaZg5mzWAnSnczowaCsBx1LVq4r4E",
  "key20": "2kfctvuhENAZKBBcozrRj3repi6jTFFtPgHkvfdmirzYuQBsSQfRizNbPsPoj5TC6RmSsnJDFZqe9DumidMzpJfL",
  "key21": "58kcU8uxy9P28rqMdqHmMWxXRDpddWnYeg8yAne8CxR8UmEGAenVA9cS6mUGksh5s5mjBLmRvefYhJWEtgqgAoiy",
  "key22": "3qJijYA7x7tLRunVtsoyPNtgjnvJPM1NVWJuWwPBxhm1BeMMvaeZoPunyNsx2A67Y3gXQKFCrH84syudo8wTJGB5",
  "key23": "4eMUrx978TyW9AAUxj7jWa897nDYs5UyHLAWtDtMsa76ZGZ4Qt7Snq6rNYnibL1mMCNVWCdWgsD9CEvJwpkvAHr7",
  "key24": "4X5ysVecbktMD84u4iVvGzbr8f9Wr6TNSVYfnWVaqweY9snmvdTsuoLR4qXsuEXJBkFPjuPuzEfvZ2TMEnSjm37u",
  "key25": "nToC1tqSAQUTWrv4r25stMxyz6VtcVMRoNPy3bnB4CJvPSMS9vbDds91h251WtWcsaZEWxEtc6J1qQ8uVcXD4tN",
  "key26": "5c5QoGbwfFgmp1K7LgzhYDXrbGnVW6QtX4GPKo2omYtBTE16QYHaRwpwGJqsKcz5FiBD8k7Gt42dYp4aHzkz3487",
  "key27": "4Dfijiz463DN1WG7ouZezh1jy1PtU6Z2vk3jnjz582y7gCWtxzg7GBKeaaYa9o9TE8eqoe4nrDDAA3VHmy55JfQr",
  "key28": "5K1jsFaYK3JJRQGaV6yTHoSHTr23RFuzUxmRZxozeqxEcwGsazC7NZyykxAsQNe8GkJ5TPqKRvsg6D4uQL4EeR8i",
  "key29": "2vYNNirsv7s692UoJ3j8BcApAHCmz7yMYtZZjYacjhGEC89psQnXPKDxLLqnRReTTvUoBNC1VCK9zTgRE3UHT96f",
  "key30": "WE8KXRYPbfirQqpfmgQ49fuEmYRnVa6pqHvuiZhFvWm91AxPDQLuv846rHMfaKvkgLkxr4aAPii48ESxVCvPu7v",
  "key31": "3SceT3Xbw3K5RLie2MpKve4tAYS8YeYxp1CpzeWZ9U2LZnhvSJtzxbkrKjLFg7ND7KRWJXuy1VGxig836gFdXyi2",
  "key32": "63Uapne5ZWjMRXkwyh57ohFELthHKBzwQRwd2WHuK477141YJwSqwudC85g9p3CPshab9L7XuVi3bWzkien7ZmrS",
  "key33": "61JgjmucBdhHWqy7p4fzswWupZ3MQqFDurHUKE3Jnx2wqNYDL5H6LnTvLPf5jiMPx1cvGkiqG716GdZLf3f5d5o7",
  "key34": "45hqyqhjzSBfaxGv86rYTeEJgjqWvYj3wTQnuRg4BnDNkaGkrqZu6oUF7id9VpV8eyU6JB7dkucUFDNujRbmCQRg",
  "key35": "4CiGvrTUbhqJbSQvvzQaxhDsFw5uGoqeWCzzaJVoPqJs2spq9vxFbWN8pMChqkBURuevEmReDTkB9m7sA6Q7jpnv",
  "key36": "31CtHp7U5gEi68doDo7HWQoUvuG1TwfMDCFqe4fXHHkD9XKGjpmEfqUGXV4KM1kRjcZgTfW2qYARgkqgWavFFivA",
  "key37": "3UewqSSGG6v85Qgr2V6MxUG65wACDQVnfP9rKFrEJWNKWCGc2QiXgVmVmjEfi6fZkUow8DLmmvE3GpfG7GYiYoZB",
  "key38": "RuLYk4otruEFMmksGNnh8hqWfvnJViQwvofp1guDJiC4aMvrHNz8dydq9JEmbyA6cgUsHGYA9CQbUJM1GjfbsSB",
  "key39": "2atgzo1rrocoJCv7BTSBwwt3DFYXzk92BXXqmPuFb5jnM1JJx32GexQNQqimmy4FeGpXkTAxcX36Uypg6NtyTKiF",
  "key40": "2DuQV3egw57sTa7QCNieZqTZ5kxWaUA254a1GN1zMz2y46Nygu9wt2pneSuFeeXgssgu6k5uf4DYsXNMqV8YCSAC",
  "key41": "5qLSyAemZZciZGY9N2ZWcNq5iBByM9cUhU1RaFeBZCcfo9Nni27CxEHR1CtpVaecsbe6yeu63tJaGCsmD7WZgu1Q",
  "key42": "45LcLAFpJC3CzCxjbFVPfjRuW3BifnwgEwFJiH5gUENbGNkB5dFWzD9UH9LX99Po1khM8TYTgU9ELySoNrsje9KB",
  "key43": "3bmDHrLdGt2a9JPWMH2NEU62duECz7kc8xkhGLAfX4x7BrjYv4DDinJWp7zouAKiMhUBG2H9jwyQGat4AjKpmzHx",
  "key44": "pNVXk3pyVEB5FbnjJQj1udyNJvcJGmxqugvror2kjssxU3Vd9EaX2Tfr9y6yKJ9j1LKBGZznXFgoyPnf4AyUbUi",
  "key45": "61uA9hw5r1U2km263kWJA4sQYdq48UhzC3eHEQXoPBS9wNJPfPFEwCFcQahBqs7nd3mjStL8PGWpqYynqVoHh9FV",
  "key46": "4GFoZt3ymVYAUnDrDJ2o2q2XUXA6MbviEUm4gcpumqksEZgmKKdeh8T1uXQS6cgvRFiyR2M9ciFvKwjQjMu8DTDe",
  "key47": "36WuoziuR1msVY5Epzfkmx1ccsqRfiWUaFBHvnpNDRokeNvFw44N7H5anGmFpe753sR8Eoa3GXqoAcPqUpSZMCUM",
  "key48": "32SXc361BicNWgUTLW59ENSrmeKHBU5zWMKkHUzRomKiFkxDiyfft3Md5kp438Wd7BucXDSWgcmsmarwAwsuSMBd"
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
