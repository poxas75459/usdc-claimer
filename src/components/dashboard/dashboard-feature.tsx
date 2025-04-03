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
    "3ByFScn8uRDbC95mL6sctzgRqb4GHSgrwzjZjnk1rPMd9NYMBSXGys8UYjontJSBcoGzxWVfooCCRzBNQW5UEshy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Jp6h5MqMoicHc3LzEZ6AFvPd5n9Txdm5s6o4Y88SnPZ2rvogw8ZgAGbh7CPYDpA4WCu6tPPEa2wU8F1sp5iCYH",
  "key1": "55K3EDffWMdf3vpuMJhCWTDBPpqNssDQV9NEZSkTGjpgY177xBxFovfS36rH8xjMbvHaUAE4kduNvBQwNwgdBJR7",
  "key2": "3Vb25A4cKisFc2zrBqT227dvmnZPvUxT3qbtoEjmWeHWib9cD2ZHf8rRW2VFPRMQvVg4Co58xhjDtpqGmqY3wNnA",
  "key3": "2H83LbTWzg4PM7ocX6xC91knNFVK1bLiW9hTSNqbuC3KTZNWS6zx6kzEkLCBqRmu2uyZVL4qd65MkqrewDcWG4Dm",
  "key4": "2zdbHGfCyF6saeqFXJzzhNysQZZuL491B5FK68ujS4iA1prbX8TDg1XpHaLAjpLHeh97LdRCtv78X1bxXFrPwpyz",
  "key5": "2t3vcPaQ51i8XKpiTF7KNdhEmbPQemSwrz78SUUoaGpXWpv1UiceFkofxy4CLXFz3psJVn1LopAjdFmKui64t4rm",
  "key6": "GDJ7q8wT2j9ien5Ja8FAETg1iWPUnxsYiKGNsJYr7ofyqeSXmZuXXavBJQRkdupDfANEdJzMGuwuJYcoCnf78oS",
  "key7": "5UguKnT2Jf3Sf52DPx18PAXon14icx371s2eDvoeufJTYHkSTHML6pPinfdW3CvMmxwUuoXMJ4AfgcirVrTwBTeT",
  "key8": "3iX9g6Sw554o1G8owraZef9NaJB9DbcG83ewiYk8tWbWaWzGWMeBvaEnf8ef2P8vS3UbwWZnKb9gH5FfZJZLD71y",
  "key9": "dWvPjpaAomzsrK8HULqmheGUfL9NdtMetb2HgA5RTRiMo8ALDgC39XcXg9HVmRfBiYKVT2fJQZQ8fG1gQ7s8vFK",
  "key10": "mCb2HGtgnTrqbHkY6XbzNd9cr9gt2aLSrFXHvGDgLPRLrucnweJ73qr7yvn82d2ePXRjK1FZFtKafVe5V9EFpAa",
  "key11": "3QSiycmYzx1Awk5y23dtq8J5N3iK5XtDZjuxuPFbaUV4CpM4Ak8YqR6nTaExATnA9P5jf3qWzxYoJYNwckUApACf",
  "key12": "5LmZwEsQhcak71yhcSX1UTMCwTAn8EbcWznameNrwfMrSQFdXVNVNr4yrDwAB3GDyuuAwhRJRDFs2wF8CePnaAqx",
  "key13": "5X2k9Y5AJkX4VrAfpvzjBg1CgK7scPJyqcYZLUuK15Ho6ui2FvTAZn4PWGhp2dG36GSr9hn1sK92BufWRDCabZFQ",
  "key14": "5JPSfYoS6rCN58oRGn8A3HZ8jC81gRsvmX4Qenf7rASAkwXa6PWMFLHm5JEUQaaF8F2WbLrM5JUo16pWeTzYavfu",
  "key15": "63gzVaSro9ARUAaxJ87KPiNGSSRY8U1QZRRoziwikYXgoKYqFwGFViH8dEDZSL6QG8CMjRbkrWBXdgLH8mC9zjev",
  "key16": "Y3waS5s9AZthyT5QtiMsxQ7q6fthAJbmweBkwwv8MD5zemdkwZKE3FQXv3dnaDWuQwr7WQ3tUwzQLAZVLJafDx2",
  "key17": "34sjmdiKrAASsF29AmwaNvx7o2Bkbm6nVfAamPcbTqX898FWZCKZ1nVRcUNDBVfuYxZz2xCGP8U7CNkGDGmDRZVp",
  "key18": "2vjZ9scfCWzJP6CDLVvprTLkYJPqFf4VmxbbKcoxUx3TyppqkaAaZhv8CuUWzLNBxcYKHCMomKxGJaXpQ3untZaj",
  "key19": "632fGLYp7dFu1JNpGbixVdh8Bj6AR17PjhYiK17DnNT2DEL5CvtQU8VMKU7rer5JHdLUVdJuHNLTBhDviAEVGHhe",
  "key20": "iA3Dc9J293g2eCuhYqM64WuZAx2WtnzyM2CVRY5spt8X2e2kn4FoGpsk6qQMvpegbe8pKfaMvrqQEvexdocrLPC",
  "key21": "biZB72LVd8SF1c7mDKyBBjXbVXbbSdpaQFUYZEhiLrgLRRdWVBNq9frVREtLsRerK3TKuGNKbBbtxBFhXEAsBNS",
  "key22": "2BrtD8yxyo845iLPBn3ja6ENzzp7k9HnonFCUd2EsuFC3j5QgeZPm7zDkVnYTGEHhB6hVEBJBNaK6G5jCYawuSYx",
  "key23": "61QnD549LpJFPHZrc2pdQx9nA6HKG8McjExCLRkFpGZGcNwkkKEWw3guHBfcWfnEyNptNRxi5dFmnKA6JWwPZRSe",
  "key24": "2Jxjaf7m5TweUepkwaKD1wXYR5B59qREHc6vFkebT6apidAtZyzunoyY1aKpxq61A5H9FkjJhCoMGMAjnJoCS9zF",
  "key25": "JRM2MYvtxB4NDkFn6E2VCGhpbT76iRDSN6iqfAo9RfgKoFkKyAAJWqRr9vv1gMhsqkGCrx77i2Yb7VQX8QWorer",
  "key26": "4tNr4ndxBF8qDWYgfDsUDoAqABDAichEmjSP67e5hYY2sRw7FziwcwfM8C4an5cz5ZfHvD367RZnqCGZCnB4CiL1",
  "key27": "3bcvGdVaAznrAvxAVpPC3nhHkckEenT4xvMTKMxD1zYq9u87ushFPmgjp1wHws5HXa3PGdWEFTi16R1in3WDxBak",
  "key28": "4sKMVFpSyiAHrWY5kbWpBjoPNY1E4Xqv9Uo6dMHaYGsB3Bgt4NzDx2JoRYL8fH3KfiQb6fqxrSG92jtMtGJgj1bD",
  "key29": "eWPDyYGVCKqgbD7BXYHZJnuouw1Dauy9j4vVsJg8u72AAE49KcsrYhKTMzXmBjaQ12AW2K92hQUnGQa9c4xLWiJ",
  "key30": "3DUPTMpb51hpDR8EKUYkHvNhNTZ6AxCLBd8ApjYxFZ4xytU5WnZhuLrqXdBMbKEUfq4cWnNdD5iefBKjQqVwJSrA",
  "key31": "4WxNM9TGzqcKU1GBNSWKquQkZMeJGriNp7jLbK1jUHTYX5HeVerppBpHfXETv71Cv1qThSeZ9pWKDqDEztKnGWYG",
  "key32": "5AWJXJnJmMqtM1Nd6G6m1SbReL9MStqYCjVSFoiLZCh7HujrnX33EKsV1x7UBqWqfH6QhLc8aUbRjtwDCz9CejLU",
  "key33": "4QpyoFaq6Gt6c5stEQb191LgCwuqQ1v3JGLm2LXSwnvPZ3R7wywBgLX8ZA5yqrE121kcGaq8PHf8JGKADiRvTxTk",
  "key34": "ofAfFNtZyQJB4vdwKG9HVCEd6A2tgxCzNY8NESnLLNeUP2MMXLv6d1CsgBxu78g1jSGMHcbHbSLVraWeMKdjDEJ",
  "key35": "2Mgb9MkBAsnC3BLkEuRFtEeXspm2tdrbzMk6JHtQVJKZQdyvS7RNNNmzNhH8c54v6MmV6XsHfdCfx9pQnx3sKkM7",
  "key36": "32nrDzqbJzQ7NxB2Csbs77jbmewieGwn8Uu8RTmNUf2XQdUUtkLBDBdryZLwryGJxH2oDDmvSHuoRZmrqwauDLqt",
  "key37": "3k5JQc1ph3Rq4YYC99hA4C7VMFwrumnZr9jETExGwjXAEHNYjqhRBtc9k5Wwof4HccDtpcn8jJYTmrBfhrmE6i4k",
  "key38": "3xtL4nHJqMD11CyKt88k6o9vDfRaLPMrvAevGzXmegXane4gYZUfgqSBbofVhn5XVX8LqPSn7wDujk9b8RcSs8ME",
  "key39": "UfjNkS9qfabnwyLV4GxDLTnQGZcLvibE9Ltbow8AKE96V685hQZqoH7g4A7GVyxA4fqrZ8KUA8A53yRRx93x7gH",
  "key40": "2HCtUnw3rKHiWgdvhc2HDjGCn55mKAEvU6GbeUPdJY1F2T9XLYh2DKdsMYKmrhvFt6dGH5KGMXEvmyrACZD7iJ4",
  "key41": "5DZzTBzwXzNQcqKSgiMKmDT3hmdRdWghdzPE6Nm78m31A75rnzvNGj6NTLNFqBrpJRNZLkH4kEoXMZjLygWLF4rV",
  "key42": "368kaP2KrcJzAg1pfgvHEF7YywZ6YKG2maVkTzkBsFwDQqBz6Af9QRZ3xadPhyXiAmBgsJC3gFjGiQkMvikaDM6N",
  "key43": "5uwQa5GgN2exXoJKvJ6jqqeN23J2SUTLhS9UJsZhu4JtiPHvTxAqSJJoMQRiyB3VF1MwEaHA2Bebxb32KBtS9EvQ",
  "key44": "3wVCXQZ7svAYaKga46JptFFnySNSRSBUVLxZznogu5TKv55T4A91sHiq1PjMg3AZoo7TtTcodrzkh7pWqzKujVgo",
  "key45": "3E2YzJr6pypLQs48Z79cBESx8rAoKttfHFrE4uPBC1bnqqGzX2uEd86arn2bh4SpPs1c9JTJHQatxtX7Fxn3PJew",
  "key46": "2Stme19pzWHJsWhRRWxFcAUNZCMKSrous3ccB2xnLWQfWuGrRfnRCq4mTZY79eW4QN8RgUB6QMsCeHEp1xhMgfcQ",
  "key47": "9VNe1SEDDfvMdMCGhyxa3coSjuoDCy8CJMuXUN1td2Bbo3SW48Kttj5zfqkjKuqVVrXrSnbzuaokFwczEhaS9Bn",
  "key48": "GpBP14vqe3dpKrD1MPpHStHMPfq1CoARhqzexxrvbJzzJrtwuk59F8EYkf44B2f6nG1Y31bRuRtBwSB7uv1D7Mi"
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
