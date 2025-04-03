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
    "3iDntahxeC1kjbYof23DyiKqGKtAYZA9yBXZ5w7Zyo1WBGwTU2DbYftdxjFKwzLsMtKjMXRntLvUL7MMqccUhDnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cvxu97BvsTLAM39WWxAnrrb1hQdUenAdGDczyCCuR6uenZSr6rmSXzqNPd9J9Lt2zNf9aQf3yKUv3FbxtCKhYz2",
  "key1": "5uRU1Bsc4DtJRtW2EFBsRb4fgpKVRMF8oQpC8BRxicUfXWxDinuyn3sfxMJX6z2AhQwm6D2DPwU4zPzbbufUVacX",
  "key2": "5dsdiEt2XPphz9C65v73CTZfFoagHP1jNakNGN53irdEKU5dreQtadbHJ9RVvRYCTfMFUraVo7ci1GoWbFhCmkG7",
  "key3": "2rhUAwYEnMLkh2jwkVjG5hqBEMnwJe2XVzhRHsaPPexSEWosWNXzYxLKh6UEuNfS9jmgT4PLzSQM81mjyzCeqV6j",
  "key4": "5H2YnNCC6terTSmn5aQC4jAru1pTK7dRpoJV4EqkhkhruKDNLJRsPsLgKTZbFMB7tjhTLEon19YfKKmCnUh831hM",
  "key5": "5Wp81WCpGEB1z1irE1JchCKSGyp97jRp6VsST1AKS18NPMqwne6oqCuFXeRxj8wQGBQfbATarXNDNU3vv1tzky9U",
  "key6": "5ehh6Ttz4kqqvq39k7PzfYbaB56jPCgJrumGU5yJUcoYDmy2w7VBGm5gzyjdsSRkwSv17CCVEdWQiG2zuZevgX4V",
  "key7": "5KepGXq8xjGDNALFUoLYdFMmTzXd1e5hfkd3wB59U696FUVW6YwyZGrQCS2sGDUSJDqf8FfBHSj3bRVbNinrPwHa",
  "key8": "528xyh7GcWma8uXzeuPYcUjHTWEgCcRbb96TrzWCzLepEYAfqpSk9iCNehNYc7wn69VVhaAXvZQZZ5pjTm4j4UFK",
  "key9": "2iozx8C6NqfSf8RJjRHbtydfkfA8RLi3VorhppCnKBcrNbp6bwXZuX48pnPSeJfGVt8tit8vLJVWgwi6d6m4MsX8",
  "key10": "3qrKVzBTkW73eSPWB3NrD9XiGpsai8FNMjcCvgQMbjFCnW4gvCbM2wneJwkrcuKtooJcvXpgd9Z7CbJwcSC8ejdM",
  "key11": "brmP1K6L3x5RnH1wLMXdsaqgNdPdp4d71xRfvPixWKmj1VKfzaugV8edGEm8FcwamBbRbj5axL5tHd6F7EMQwmm",
  "key12": "4AwDjzk2fU2Be2FsQK1Etqjvpy3rzL6dMBJy6EkNN4MBvuTuon1ccbgwpvaqC3QdU8MXuKxqBeki1yh4J254aFNU",
  "key13": "2CxbMCpFAUgJwnqiqVCKHDvunwsQjTcHQEqvMzp4jqtymF5CSsgSwHHi5hZsDiRfB7sHH5NutFijEru85ri2G3gE",
  "key14": "2WTwxxTHJYCmagKMisdGxa8SioWmVw5rNaXkALzDZtKt4cxVj78UvCmpCUX7XzaULSrpNxMYT8jHY1ixPnqofAcR",
  "key15": "4nxM5Tr59uWiYPgSS3LTtp2k4ygcQwWZ1t5ZAwEF3UzDum3zj43emMTwxc1C9QXQzX9KMGAvCq6GkmgyUFUSW5LT",
  "key16": "645cnhVXpKqJg5bzNsxsDkV4XB2jnbY4hmiQk6ABA9kpgEWPW3oY7NLEPraVxwsqtGxCpD3tehJzwSfJHPuHRiif",
  "key17": "oqeQDjxCRXaLTys6yLETPr8gWB2MdfHwX9GovyLzvDPnHTvWqhAvHcsS78PFZDtY7h3Ci6HpznfrJTgdR3g7i1R",
  "key18": "4ArvY1BwBQczkYZpFd33A2DPaCcXrWFRZDt59GxJSweTRbSZcnjC4yqaY65JYKrNosM5kFFopkn99USj9Xp8UQhN",
  "key19": "2X67kAektALGeUDkfPc6zFEjfZ9Krh3GxvAoTng3DeyhYYe1yaoFHw2TisR1DjWwmLFMGkRAhKuMFLRyKvzQfZGb",
  "key20": "2kwimCekdxvsRxPoE3peUN42FiatcKWW3YxBj9yjTUebRNWNSewjERZbRmZffMNVwtobn4VYkWp4txuTTfevRhQw",
  "key21": "4jhgx8WuB5E7H8E6uvJWnuv44iWkcuLUe6mXiFrVyc6qSU1Zp6W97VYjQG5NCJmVf29WoTwEUaMaFQMyQk7RYtEy",
  "key22": "4NpdWACoQppDXMsZS4c6czxTebcPd8CCZakXkvfWxiK9hLnZDVGzqvtexc3THnGQRzt1cv9WcXgYip9h6Y26Tgyv",
  "key23": "5umg4Nn9S4Bz1YSXi9nGKwnMDFJkxHGdDXPJnPjLMGErX6zBHZdrXgR82x2U3jDrPi4kCSovJCa24MjnTkWVKfKb",
  "key24": "43UsRhDY6irLdeLJW6WhT69YagxMuvY8BpitoJNeCvKN5QMnYJzRXMAxGzr6J9HSboKX29CRDuAj5ghXdrf89Nvv",
  "key25": "3xHPkp2xmE2khP9JuwgbfCtocWbz31bXKLZhJHx9buurXGt2Lqh1veAbSADuqNHZ8HWqCiwoseSPKiyyvxoHknLp",
  "key26": "4otbcGia6zxTw8oCYapinsECb92gqQyJ5ECzqYdyWHjoXPcYNcWPbsNrFjS2XfXpEckoimJCvhouNE6DCUS3FDA2",
  "key27": "4zCdgEureyGJv6NKrrMNsCvGp9nAsAnBfHdoCDUsDCv4DBqHEbMXagLcLtnQSXF2JnprAYtyZj61ocSJ4d1tyA5Y",
  "key28": "3XTV4f8ocVDKTR64ZvLaJhPk4pAqJa2WEYjNoy3wRbh6n4ffrkRVvUnN8uzZKrEVL8L66e6NZC58tJFU4Ta3CoV7",
  "key29": "2Z2ZBAHEkckEWKcfA866Bz8mWJZUqtzhq3sQZY1FsxedqkzJUSebURAPu3nC4qfg87BPLGeg1LN7otpg7UpCGzx8",
  "key30": "4y2zPZTMnFuG22NRAXHeCunLDnFBXvhCqyKcHZR51exmDrfzZx6dBLmpC8dYPaJTkjC98d9PNr57sP6Z4Xb8Z72",
  "key31": "3uXmvzUCLSc1SufFoHBgFwMPPYUyYvch25wGmV35uxG9WpkJzWKaK7fj7vRYjR3CyHKFCsZxrraGost7cySc6vNp",
  "key32": "3pg99VnaLdf6ixGN9WuVBE1qqpnLaxzHEbtzfwBNkWrsQW4xaKULa9DikxS9VySHopQhPyAq6YnhvRNe1ZrZ7tFq",
  "key33": "5Hf6hzmm5cBnaVUuYNLDsgKKBHRJJ5WPFm2Hgoj9CmFBxMYjzqbpPpPbYx7bH3rNDXyJo4jDgFNbxJA6mvrCSKqj",
  "key34": "529wrcWHoJCbwmBRUe7hZBySTiQCjuBp3G5cHPGXrMGA99ZeJszE3AsCiDsmJpoTxgDX3pEirqURVEbH4aREH3AD",
  "key35": "4hx5Ed1WZEHyAZ63apSwZxe8vKM1nF5Qn3m7euY5t9tTah2nnQxbLQSqcKqvg5AdBaaBmxipWia2Zr5HGQmhwNig",
  "key36": "LgRFWjQmkvU2vNCeSBbvaJYHbcEgCcQ1oBbU4p2G59WTaFR4CbQjNdjMtqTDZekXe5kqwri9Y2ktgivbbEVmLUm",
  "key37": "5Zyv3UsmzYcyqKYpwcUi29mVAGozAFik4AcFHoRLcAkXATw7DuCUVRopozXgN1p1jQNgYj3kddwp8nv4hA2Yeg34",
  "key38": "22KcVpmrLGq1SPt251mYcjQM69Z25hGHSqUjgNd2RXWRhukrh22aSV2L2mNHoJKyfjjYtsWeVuQR3KEYCGv2jUBt",
  "key39": "3m2wHNWE67zxMDoJVkQU8aRG5LyFNGzsJDqKEWKjBiX5ftyAGcwrbwUinBn94St1kMfgkKkYAdjrnzHEaLiv1er9",
  "key40": "3PgGsTUuDgSarJo8mQbEZybNACtprb3kPtpYZtMa3ZNAsXcdQar35jSvke6HDyjxHEn9pNnKjvMQxqW2bWjagvL4",
  "key41": "giKMobMRJNTCDcsao5LBeQpbJy3J4LWvpVzrAY148vJu3BXhJzi9A66eakY3ismTpY3ZnERwpQoFX1FMmPtWVPj",
  "key42": "2nLDfMmsQ5jcSx3fHFBitbsBtX1w9dDvLjy2aMvhikBz58wtBPnktBRTU6CJdtg71w9U9Rr4jeqvns44hau6TQ1u",
  "key43": "3cwT21gjB58G28ZUmaZHzuPzfzr6FYxDuejs77JdCBwhJFP4PG872Lawb6Se1Gn4LS7w5CSNVHWVNqkXefkQP5Vp"
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
