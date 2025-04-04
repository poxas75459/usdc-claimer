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
    "frf7ckFBz3qeJDWWUNfDX22ni5KfzJnrnAaw5TD4tqTvjmtNrANoK9GurBnyVQJL6wcCgcrDXsaHdZ9qWShNUeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xYmwWs916aK27bLVsVsCCTRvxNzjppeqCR4xJZfgVrSBZPNYwB6XGLnTVuFCqc9QuoeW1NTSHGcAHTc7hTQRE6A",
  "key1": "649iVCdywUVNXJcYPLfofHUsoDGuwDJP3vGzJHiwysfpEXH99QNDZKJFoFuD5TcssExEGduhEhQDexAteewS9Ao2",
  "key2": "2scvjSDXwXosMQpvF6DiLz6jecQ2hNX2xLs5Z7VkLz3xjXsUKU9DjSGGpEw9xrmCrzwz1aFaj74yC2pDpRgPKyjq",
  "key3": "2NE3iKiGEAUwVxTwz2VrQR8gXztG9Efqn3jX6J6CQ7t8dJB7cTaUiduueVswoKe18aCSaPiUsVdHzXT7MCe9iyBF",
  "key4": "65N1JQzd3Mc5VpvTS3DuvHct1SNoc5aUBdTLg2VrqMhzKVJbnB94Ycm2rniJEVvojTpe9tKxLxzgLMjFQe67hqNM",
  "key5": "2LogNvbRrQXwr68Thqy4qpDUQRMgB2gjthoZapQJiMvkQSCcMnEuvAPrsKq7vRRbfNdGDW8JTFniVqZGrBiy27UV",
  "key6": "36bHdkky2HDVVvph4Gm8RqWs75MWAgZPGgkhqfMpMXJ9d52zpaKZsaW2w6wii2D7Ykz7DZAM8kJvpEucpW3GmDK",
  "key7": "4uJGSoUM4RTuiMh9y3mo3bspBiuAkFCGKDm8AoxddHiEpeyDa6YBXX56GaVW6yFx3BScdYtLBri87TeLP1FyNQHV",
  "key8": "2GZezzPboRgTWk7o1Akvq5bVw3mzHQvYEPrFxgrXHyC4tADzKv8rzfx1nSMAXkVgnGRrCh9KtUfd7iYy3noJUCVJ",
  "key9": "3YjUm49XdZnxGJ7WybSC4Tq1KbP6DEZtnwSh4hXZovkGeJCNZkdnDrvzCesmvP7RenNgTtgpnqN8FdwfC9wB34NY",
  "key10": "2arx2pT6aq58nvCLybkDSus3XJaC42GZ3f2merbpwwNYdJWZZ8gYCvkz1AyjPp4VzLqdUENnmtWX8BZDmv9ZeAcP",
  "key11": "2NXSVNUYD3C5V1agJZavA2haNYpt4Ht5C7gxPNBCaKXg69hq9j19yEWCxPzuUbW2dEvgsQTsBT3kDavEmQmuHkEr",
  "key12": "65h31MxPd3ZxTHCLb3zcJs5KYdFWrHUxaKZP43Nk4qLLdBSdtPzvRLDxUggTpSY7Aqayur6cz2FdpdLTUnbRbU4E",
  "key13": "5Nzr5BVvMMrnQ8XoRRBsaqmTnVNuSx275opqy6mP2uX7UXLG3W6TPFGdaXztyDqJECCd7mLBbKavmkEL5oHNcyeF",
  "key14": "28TbivT4fkYMiioDh173HAWX7gWXy8Wjmvx6XSafWE6zkxeLU57CMvf9nWd3Bam74pFpiuWDRzDYeyWNi8ReQ9YG",
  "key15": "33c3j8EcgyAd5Bo5qU2WUeUbfpdjwAVG854UYaYrSA9Po5hgTM9qb7djxwkfEaJa2Q4uBupCkhm6jU7evHtqCa9z",
  "key16": "254MkvRS3LCxsnB93Ehx3RTehd1xTgZG2LFHTMHYdQBfXpZdM2jnP5BhRzuoDLhrTfvmkfXUJR1u9FwHef7eKKZZ",
  "key17": "3ho2d2bz6pziEi24HoaSF6ooNG7RRStHqJN323YmaS1nzoVzvaDx9KYHiL1XyGFAMaSNKLkeCLjbwPjEmFeoRG3n",
  "key18": "5XKajVUL41ksJh1xoHbktotakZFB5aGQAMMFUNq3PgW9BkZzQFuBSuS3uqLNwmKJchsg8KiPkUNSz4jfcW6WwCGf",
  "key19": "4qKdzLs8Rj5BN2iVGJqj4xMzBbtB94bqKRmu2baGb1e3imfrTkVQ7htm7qfaLZ8G4UwEezYEoHScceicWYjDKDhZ",
  "key20": "3SYGPgbpq6wc4dVutJChCMH4ewxVt1afyd88WrZChpr5juSLWxcyfjj7uUUsyKk9YHdvMeKCMWxGyubTfzbg7fjH",
  "key21": "2Zu4NkNhRGwBPByr6uukc6hu9kSrnuYLX5v6avdJCsRMYZH8nLsRu5ExuLp49MMBrbn6cjNdGtg2PBJF3q9fFG2e",
  "key22": "ukfUPEivi2ctNPMiESYEkaYbg3hhopufaYGPfjMugyM67oug1nhHtxqBmd2o7GE8dC54KbZJjFdi7GUaMTPanSv",
  "key23": "2k1tteUa7R6ZnJSFCY7TNSCwesP6fMhgQmsTN5NPn63cmENmfRQLeYzudWMbfxNr1cB6PpWF7gVdMF5P4j9ke3v7",
  "key24": "47Md7yUKwheicCkB9hPuuaMAWYfy34TRpMtamGVyBEWpdzcTpYyPKbkYPNZBq15BtEKQrsq9th7TfUEV76K2avEH",
  "key25": "jP3vx132842F2JvpCumXfCBkWBVtQd4zY9Cy1N76JGyGCzcNbYvsnCUZBEiFoPYkCpLcf4YuGAoRF5czKdc7ovf",
  "key26": "5mFT9RcJ5KEePZ12tCEgmUJJ7HftKRCW1QBYJFzV8ctnPc1pQWoTmpNYULM13jRzFq1FFoFP32zy3pxa956kQQwX",
  "key27": "2ESZmfB8BVeAamPFvmyKqgMzkpR8bBPqShkJA7TMPW187PDbTWC1ZE8LQWn6dEaLWaNsXYHRomepJt65LLUifuS9",
  "key28": "5ZWmZCYyBsdNcRrvnpetzs6hUfA7ZWgtdBnbg7KeKt1rwY3CRK8LHRBpdgL38DJjWYfuXBKMBwK17qkywgJE5L3i",
  "key29": "4bANBBCK4ruWKw7Yog9GPqcwu3S8da11QZMpGA43CLBWsXHMxN8ofGaxC41ji7s5QmtQUxksEq8tZAMrPoPCoiu2",
  "key30": "3RTrb6oNze1X3bRGDcTShDGGMKvS4e2JH9BgTG6pkpegcmJTtK9Xgo7eQjdhnS4fAmcHRaM24iN8jK9GeChcW2JG",
  "key31": "2bZkNAHg4rUizhQqdn99bFpFTC8EJKyLwR2mRd4pZjYvrMNrcbAnqZVDoq5S64Fwj6uerGmJ6bJVzLWSEmT8tbUN",
  "key32": "4VctbGerxhE4pMs4MjE9QjRWvJDgK5DwM7zo9MGRtpJSmsVpDhTHMzdmwSWXEUhoaUTv1R8tbMPYJLidieRNwioJ",
  "key33": "ee6AfYkAi2ay7PgN6KVpQXfCmzxDkNitje69SLeaozsw6M59zsdhguaWcs9STw4oSxPpKNe7mhPUV75ki6Bcb3U",
  "key34": "QSGrrFf5yeEJWa9xmv7ppZUHTnKUyZsS3xtPyb66NpRdzSyy35vy8tmmx3cUkpvPChSwGNC1P8hwGsn1pmWnpfi",
  "key35": "uGrWPCHv1ugrNeGn8FAmNqkLXZdtbY2ei3kjQfN9gG3hK3KEagQDFzxzgFD7ApqWWmywoCZg5xAkdRZyg7XFEwt",
  "key36": "5rLsPd8GLyaNrCp49oE4VTPdmEd3L963tcMhy4nxkftbiSzewU4WoFx5c6tJYLEWhf1xNRsJac9as4jyPCF8ERRy",
  "key37": "4MYcexiqSW5VEyvPAsv5cVsXbNbKjiExWjXpTSifsEeM8dKpN63sZhFHafYKhTRCaQbqiuPGKSgeqkJQJ2enXfoJ",
  "key38": "37GuytLNeSv6JHNrZc182kUwC7AbDBHEQcP2oSHYvvy8kQUn7EoCw23yJRqwuCzGSLX7iwzovR9TBPGjfj6ddFt",
  "key39": "gjJG3y5s61XX2EoAKQyMY6R8P3yasyZ6giGA2KDWEvzp9pF2hmSJCm9Uuz7nR8hFT1PZjUZHQ3pz4w8dHnhywAd"
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
