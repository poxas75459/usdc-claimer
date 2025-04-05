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
    "5drzawpMJef51qx4Zehz5ZNPEPbpv6CD952jMWVpHQMH64UgUvuTGccTnGpDaLPLzgyzjctE2MEDZkYZBaTn72HD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdNbNQzeLJqGyyC9jzzA7uAxT2V6tQPeDLES6xKE6pZARav1DMmiP7T5T4rFrKKqDKHVZAwj3NYK4A2dj9mk9TL",
  "key1": "5nus8EJZzq61A9X9f2cHdbRsBu9pwwxCuPud4WhwSvFxDXvXUTfMvaHjVQevgadov2DckTyJyp6R6iK64Vyd2nNX",
  "key2": "3zdG6fqTZsAKfoSJoeXQiujdCxLnjDXrCP6ms7bN7BgJq2YfsQB9wbs2JmXfqKKNgbzpyiY5ZKQGzSxy1ea7jHbb",
  "key3": "5jNxtsixWVqaocyxaKjgDp2Kbmd7wLGYUMB5NYPAkfCtZhdZMzrr2wJZhBN8Yh8SaqZzqff6ph9wzeFtjXpPTXDK",
  "key4": "2R9HxLZ7n5nvdPS48WAZxFcxcWRLASEo4DAWdYb41i1xfYraHsW9gYL7XdmcjSZKmcBRkAK531JB2CC3TWovLimg",
  "key5": "4JMrg61i13UNXzP2jxXYctn29mtpLCTr9KRDQSwZQC278onP3695U6KLwUjyMvF1X7ZVMt3MR4foedZeNjfNL1Hy",
  "key6": "3H24CgzzAjTuNrBJktQYEMrgpoKHcHwtqnbMaJyCPR5nTkWiMpWtet9DsWT4JV6Ksrpwut9ToV57VktkFksgH8wk",
  "key7": "2VsWg8g1BLAkqMVriT9vy2heGL5x1BnYzSbAnsNpqQViXAMDNf9FTq67w8doahXSFageLD6TWame4oPGWNcx4Toj",
  "key8": "23nbJj4DXs6mkdDAQsKUhn5ZKvwTTRmFMGZyptgBwvgcLPBgQV3eXdDhrhJ6LhpxJ5vzBDvDNfEKrRm2cnieR5cT",
  "key9": "4a9DARegjyjvanASDne6qnZYw3egRo1bAaHtRBNHm5NZXQ4dFpymvSdZq6R3oZPcbr7VkVnPuEL1xhmnPQpE1b45",
  "key10": "5Ei1P57pjv93qeMwbJGCdzPbMDwXTKV7eYuHHPvjkauDW3BuGW4u4cPKY9sDMZWjGhWs9PiFm4Drk4QPZvrNJ6En",
  "key11": "4DqN72wiun2ojE53jiK2Jngf1QDyELBPYXAv9ZnF1Rf4Np4ioXXTq1fikwWZprJUsgUSChLKVZ2AmdCg4YTq55gT",
  "key12": "uhBwuZg5AqvwBAC8keSDja6hNwaAkjW969b8ok1bx6vXw6np8V48n9PNAjJWW5JXQNZE3c25JR2itZLQHSWj1bi",
  "key13": "2HXt6AzSAVkaoZaHrYAwVd57uxwAtWiLbFfc46P7GNJopUNyCNPPHELZSgVU9FrJQ5p4zQjX76Xvna7TAsQaNKMS",
  "key14": "gUvviwnyXVgTtRpGLiBvZxzFFwZt6TGKtqMu7JBjR2kxcKXMVgoFcBnoC5uRVS33QUrjTLcZmZxhcKRK1WAFjbF",
  "key15": "4B9EfDmURd8zbW7nVkCPkN8P1PWTW32MxQB8uG7sgHcuYCeQ8CGYZTYSXGjTSVMm7cUtgUQsHSnJJUjPtTtHEnrc",
  "key16": "4WDaN4WSnUGgJQTksLrfyYQbtoyYMdzbox1wiPcCAN2KaLmrpYhqrfgTH7Zn5cJLbsqpxYzbEFi3WY3ZZDJou3DJ",
  "key17": "3KD5tyZCiGvvwJjJfQuFcDMFJ5UfQYGN51pLSzgpBPS95pt5kNazL4RwebpqHGGBExUkoQjNgiKmSPmAyqpTqWjZ",
  "key18": "3agDUNfGmKPntZa94R9vZhF8WCWw5LWN4NPiimL35wR7WkEEC3K4ocHHM7uRsednV75LDWJSV7M3CoUjSkqmAFX8",
  "key19": "41T8tmcKPfTX5LPWa7pGtsUzMP2AHu89AiUK4ZjWDFvCKQCfEjeanJLuzcYv4oqiKxG8CNYPwjvE1BMc43wBMis1",
  "key20": "29nejT4UGQaoCEMjLC734FzVvgKNMNNMwFNedV3M98heUMU4Lnzm62tQbUAG4cPjP9Hphvzv9rLHtGTr6iuCktje",
  "key21": "4Q6h2Xj7HXa553D52R8dFrAZopykKMdcq6sk7YqTwcPtCadp97LvzTymtKKxp8z5Mz9CeLdtxj2P716KR1VTbciU",
  "key22": "37tBGoP8G23rg46yr3AUtALq67kFmdS5QVH6jEyBNa5kx1h5BhiJnaQVP7DSicgn4qCCVjyL8Za3CEi9SK47L2na",
  "key23": "4szqArefxQkHA3B9sYzpP8PtPCPYpzPsfsX2s8kgi4eTshwpM6cEFoNZwtDtXXHDbxah7XaDsfDei4n4gBQWNV7K",
  "key24": "5ZcMWhWCfrRvAzisuoG7JEnCwaQxQCErwZpnnAeXF8JoSouG9ekMwotYxDeAwypZ8r2jyvacvdYfuUzBUnuNx5YP",
  "key25": "FqgH5awKWKPZFgBGibQSr6hKvvzFDiGb1w1LLU4uh2xt99dRzRJfGPAPsWNzw2rA6NMK5ASPM6mUWpukP3RwG3E",
  "key26": "Qk9kExMZoX991cDn9Z1hCNCbrqoeBKhkWf4G9h4xUjxb3ugRs7EHBkkL8tvEtLGT7nondZ2CjERh3QDKTfLsD7f",
  "key27": "9QUQi234caVRHPE2pytRbMxLka3p9264Tz3AdpFaPhrXaPEmP5WgjERqoFFTLN6fX8XdkG9gwMpok2YjRPeH5H7",
  "key28": "5chhWPNyoXiPiqpJpBm5iVDFjU6NMDJNs821Xm33VCRtL7ZPzmqC5KR6v2jg2DRYfnxy3o9oc7kaWwX3T1x3g4rw",
  "key29": "QY9orfSz1nhJJJNgQUiJPWyUCBooV3TW1To1doeiSdQ5UJ1NzLwkKDGp3jLk7jU6xs8a88fcfJJNQwG6Gy6bSiB",
  "key30": "55sSR6Puzv722epnChTuv4ZXxthP75VwMjFjZogKmBjNAouuMqmGf8xv62265otC325ypLCzk2xj5opkF9WzrvJb",
  "key31": "3mTp7iQNvUKHpu7JzdKxifMtGeGTTffsHwZtyJdSzssfsmRvKE1FRq7dZdrZ7xmAGY92QKTwGiQt6obeZAZUDYYr",
  "key32": "3cSpBxVnh9pMu5YGt3UPchNRA41Kp3AvQ9AbDhyGfivZjqVKtu7goLf1u3bxvT2t37rGkd5FeeMugLCfR2wWAkzP",
  "key33": "44M1RoGggeydVX4yYuE2pYdR3pGwVxpf8KQik4i3JPoim3rFhPWvuTp4ZrYw2HvikxjXSo5UnwvXqRCRRB6tRBPW",
  "key34": "459ERBSUDbayXK9yKXMJtW3Nc6Aa5TXP2KiB38uBFe2a9ebunmM92RnTyU7mo1PqVBWQtCUwnBSmXigX6TW6hDnf",
  "key35": "5Zxz1Qi3214hMYwu8haWgAjdXdy6mi9E4j23hxVNx8kreRfZ2EC3ugtUENELERD648a7yiZukJmhN4N3B7FqmXXC",
  "key36": "H3XjWLJhR9xk1T7mXHtv8sVmBNZx1D6GsCs9eVXuuAUHnPwt3w7vPJtDq5q7XfAdQsYvwiumsdyfQMH8oQTrw3x"
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
