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
    "4HTjSh4X9cihx7afNCiY8H9VjaJ7nyWUcDENM9vQzppkpvtuPRDZbVvXf5WENgTmpdw68Y4vDrAKzcMSjac88DRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2VdGDEALoGKWxD1TL3hHchckrxnP3gpcbVgtJtGVtCaceLEiDZr6pQ1XRiVN4sJSMjnqi9AmwVhfKmtipGKLos",
  "key1": "5K23aHFStLy3C2vU4LaRKU2nb8MqQhxYKcKJv8bBH5bdiiydbHF819TRJeJF8EVTTyLSK3poKNWCQi4XXMoToYrM",
  "key2": "2wgHsUVyJcYMTmh8P6gv5Rc9NV4Aw8Uxw5vgZKDLMwFK6hAEgMMiNK2NGKbkgQfQM4YFe3jLvAZsY1CZNsmNDzFQ",
  "key3": "46GdbppmJTCtrT4xrhJ9WU7q8CXmGTpNA6GiVqUcPuCvJhFmPLbCWJjXUpR2ACyV87zszisWgG6V5KtDBA32Up7W",
  "key4": "3x7FmwoEpcjgeToEVh5y5Fj5csFZ9Q2HVG97mwzMDND2Z39L9sRwF4yJ4ciUXUzRkjpsGvMHJQE17ZDNdHz7CZeZ",
  "key5": "3NVpyQ6fnZ4zSEhiKNv8a55X7LdKrRMdKhn3DYj9XtCViNZw5DkrpWMMCAZtzdhC42YNsEnPX9ep1EGmpC5a2hhT",
  "key6": "5tZXqYEmyKK51Hia7Nj8smbRvsPbNjrQvMYo9YxLuVJSZsNw1WKTPjk1wq1hpXqwq1QjiYcYd99faAy1NCK6Q8QJ",
  "key7": "3469ab3ZvMZoBVthqcdivf5Cwxd7sbCxC8iZ2MDw3Ckj4VXtYrq7N7nKxWZH6Xzq1FfSGL3P8f49p8GQzsoXeu1a",
  "key8": "3u5QfoPdwSQ2LuWdDFBgtqpEMHtNAUH88JixbiJPx1UBY5T5SLJyxhzKqzSYwycPXnqgcg7ZmnrLTm6d5W4WDy12",
  "key9": "2huwQksyEXpVvT43qHSjWffuaNxrJXXVaydXBH7ryPmxef4j8HqcH39hNAkiQ2WkeHH27CkgMABxQBBbB5WtdpNy",
  "key10": "3U9PUp1k9xF7phRR16yQNG1tDGWDStRV5nZAcgeYr2fSDu8cuAAwmedSxcHdtrcg7sCW3ihzRM9fGNCH7JqbUugY",
  "key11": "5m4obvXy1dCbZsHe1V9dDRCvuxAC9o2TXCPjYVBUXH9TNEKRZjDz3Fw3QSfDvxAJSRY7tx1tFRF6K4ehyob9UKSq",
  "key12": "2CXnpfrmB7xzvY2P1NLK4WuuhWDW2JfQhEF2tqxoRPeKF5F9kbUnADUZ1f3AFbm59kZ5QsCtsSpCxHPLySu5ux5F",
  "key13": "5yeFB6DvFZTvvsV9itvftdutcv3CymU7vtrucYuWn9y9sd3bdH8UYCE3x8htRvvbrdeaxiqySBmM3xghfqH6qniz",
  "key14": "CUrdJnmpPBTtDeHnZ5oujPHA14NLj7tppEZDogZnTNTM4qXYFYCYP6cx5XS22LVi5L6QvDQCRgT1eLV81qVpLLz",
  "key15": "2dnTPw8m8wbGeWifPyDgCgWNdEBPGNLCpMMTw17KXpkVjRyDmrdgYkToGZ1XBmMWsSMSkukF8wHMdr6rcPaA6XMo",
  "key16": "3YbG3Wjkqf51ca7iUmJLpbsLb9vVSLLU5unE1sMRr48SNFeqMV7dPk3ztsToJGqQs6U9mQtrQ3ZrU9Za5PsFt1g5",
  "key17": "4qfW5u5h9GG3JKa8THsVtELUUt7NkFHts1tW8Wyf8swVx6fr8Fn1AuXPY32uU6zyFy9geLwLegQAv9kySwpxautp",
  "key18": "5TfDCukBiGpmtM3phUY7CwauFUh9jjsDqprE8jbHeY33qW6aFBU9cEY72tAPnmx9aXoRtwqSdqCVs9sRNpjSDB5T",
  "key19": "2BLaaSHsddayJUUJfpTjs6BLAPTCm1eJQMWVFXZpVTAaUFTV9Q9q5vEEr2XYzQXnKBtjsFod1VeqRcV5FVDMAxDU",
  "key20": "2fhJtbFvzGMRATTjvs5nR4iTuQWsKMunasvd86JtmEtAiQHKbmEg9EygoE2oRMgHt4HkgiwQtt4xXenNsbQoD4m1",
  "key21": "4ECxU7KwMs4sbbTvjuRKXeT8TLuzzgg9UXpE7GCwfiMkxEHx1vi1War1LBqNe8ihUxN8UVVi9PtM1sxw7dEcYvtn",
  "key22": "45zdjPsE4hnkQ1VkETWZTn8TDCRPZYBuKWbSvWCdMEHao5khGLWLQi9T4vYu76qC5tworc5vi5tAtXEceZhkSSCv",
  "key23": "5YFejuyCxZWqF4H2zATyGQcFMiSxgjcuz56QWTUFZ3Bk9AdTs9maptjix9T8gDj35Pf5A9uGr6uYmg9r1DtkJjw2",
  "key24": "4oaxir26GmwWdiwNMHg2BSa4Ak415i6cRECdfc1VatMU8MbjSPWrDVuWDCuaUQipCdcft2c3ZGnBk3uPCFk3ixXc",
  "key25": "4XxZq8yadXSQK1WLF2CxE7CPLVVC3Ze1XMVMqgzykXJ6KWA7p8PPR9JjXBGs8nWL5TeUJnTo3t2SqQLFjpHHxipm",
  "key26": "4J8ZZy7mKAjdfKhRyFy3jjWzEukaxYWGxyWJ1z8XBNoxCYbLq4HnULvBUv6HdFwJeNGTLRnDyq8DXtggwqbXC1HF",
  "key27": "5gexUHZQs2L772NAS9iCwt9tit1SZ71ci6262qoNjzAPRZev2NQr2PyKVQAUXswbCB6oHUt6P9AJXDvA8RrJAARJ",
  "key28": "65quGpCFeBkyfvuX77fDyUeVTvyiWbpg5YyWkkw8SsDYZkTfHDisSadkVLx2wdkGiLNqntoYYEStjP7wF2hNtZGN",
  "key29": "5FJcSHaTXjduqqHmLTz6QiWbwJBojW44sSMLRAudsd2czJUwVyxkBdt85JG5rpZRP4TGYGkdT4sv9DmAKU6LB9hw",
  "key30": "2GvtvrCXEErVLJoWyYEFt6FxrgogyzBie5kfUE36UxWEWV3DqyKdirtGXxk4A9P5aqDxJob5JCFqEgrT5bmgDX1W",
  "key31": "66iGkKuoZR3M6qQUtTJQUFzoXR1pfDG1xPmChU3trW9yniRhsFvGLuKKJfNU6eZWuKnwCqwobt8H8rjuHNScAU4k",
  "key32": "2cvRUFHM2vVpgLhPRikebxhrrjMtX9uXhQipKts4sU85Daw8gYKu1KJd8kqqUQayKwpveAqSYETZCvFjFt2qDcUZ",
  "key33": "caAxKFSRvCpcLeJAvCiHGM3ff5aQMtgxQ5Rv6pLV82UZYjeoB3m8ocQv3S8Zj3eBL3aTLVPkZ2S8FxvQgw8b7Rm",
  "key34": "5Cd2A1iVZniCFCCpwr2qFxMKrtm1w2rx1Ea15YsKr3oF1QyrESozTbLthHcGutZYtMDTRrp3mvmYQCYieBdjjMA2",
  "key35": "31F8jzkuEixmJdLhRzYDmJcUFbBawKKk1WT8727pve1Y1msmKgyc98jpmjYd5VqDKNhy4rFg8EwH2LvrpkKgyGDb",
  "key36": "4HocM7NV8ErhcLcMoUT3vn24RfpayL23W3GqB6u1JcrVdbnrJ9HmgKvmDWxaV9gVrRVQjpLsf2CJcwgiBWenqqf",
  "key37": "krykw55aDZFdZWN3JdK9WHr1xGzamsrJ2d7TyKeU6RbKFBWrthgLrCsm1LziazqbjxgmiBYg6vvVWhEURtrjwpp",
  "key38": "5fErrWyXuW2MdwZHDbKga9RYh6i5jE27o8mfj593ii4RNiHwgQBBNUP9hWiVG8vWxJKGC43bwpSaaUzayFTmrv19",
  "key39": "2sV7x9swX6jaxaxZ73MKxeLjkQ3unxLvEHyU3qWqZ4eXRf3PsEzJdtKwkFLSGkJafWWXeTZ7ZYNHbMbZCALezrMt",
  "key40": "297XXDi97yzGwwuEBxz3dnMJPb1NMQo2mTzaGUV7eB8gCLphLf4WKzxugzdg15UaTRoCFTJKQNG4Kw9VmZGCkAAk",
  "key41": "3mhq6cWduXDqgxnMCJiEz7FpN4mKYzAH7TCQJBSR5CUSAkGM5bjRierz1YJXus3Tw9TV3TopfFPcKwNGYgTeTmk9",
  "key42": "TxdDuMGZitFsxcGS5mKutW91Eo3EtKQceDKcGf1QZDNFQzxskTndVZ1QnkaoKZRiyH2nGxn4SET6eQpoKVGZsAC",
  "key43": "4fP23V1B96fjzdDKy2DcbgzsoGo6skaedwm93ca8kUuAZqoyzTQRL4UENHCZ7poV2QNk1AxN34tyr8Hy52MjMCvU"
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
