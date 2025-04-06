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
    "5babBUUyjU3f32frAL18MDq1fzYFybCcUwfmqe19zN4GyYa6NFSosR9xJbykiNFFnNNFWwfz769r25fDbPK9Ta8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4badFackd9VFkYYQbPrDyVVgPPqfb35HZcb2UNDU6TwnFJZ8ABBHB3pU6veK64LZ2MeG1pfZ3HMAGWXtBQ3qn36N",
  "key1": "m3TXkVFVwNpCoo1YXV1nXTQ5aLBD2rgvfUuR9URB255hM174EPEVsUcxMr8wD4gEwRV69bP2Ewn9BcZidotgHnQ",
  "key2": "59dSqXroTxeKZSZKcihQR93pkLAqBn91Y4sfLHCUHTgLV2boe9pSBCAw7qYMUrPQCqsZkpv3VJFbKWmfgyjyNbkx",
  "key3": "wSipYFf3zdiR37bkgUwDceDB28FNrb5mm7VXpS98RsjKPavrb116o27XARweDerP7hixMD7eb39sfufcBKNbg48",
  "key4": "4iw828pA5xiEryeoK8HmiwYYWJyqR715VtUP6XhyvUB9ToJjURRTUHuc15FvxNiqtHG19qMD99vV4dn6ZHWMPsWM",
  "key5": "66vm3JDDHieGT6av19LFBTuH6y3wNHM1bsXWmmfA3pVFMaZU8Tv5v5avks3MRSjxw99h2Ns5rEbnneHE8ZXLmsH1",
  "key6": "4852Z331CD9dzkfihUpNo18nPFk4cQLBhEbKrfCtGPxuSaiUtuqKa2Vw199WSsNMThYi6mudh434PFVc9PoL1woe",
  "key7": "3LbV8m9EYMKLox5QX5NHnmtU9hDmpTccQHPNw59JCZWNX3KMLds9K19UH8WvoiDb2RJdUdNLZufF7NPUasj7w3ZJ",
  "key8": "5fcKiG9HfkcpVSLw1XWrDbPoygMebzuyepwQCUm9Gt7T7BYWXbAcZtN1du44rbdTtABLXym5NfAwnyhxgzbnUZoo",
  "key9": "5riyDfjmD6CzgMjLnkVhYRojXUiKwWsY6wMmZ9txMEhFZHsSF7yexSuCqxZhpxxELsgrs8MqXcqX89V5d74tV1rt",
  "key10": "3LSLWvMcjEtppKqPeVkWkCdJ8jExCUhnwRtQA691UjQtcVCuvMKt4ECijgXF8T9UHZx49DJW8T4JRUVXvxvLvmHt",
  "key11": "5ZGXEXzdjgX4Q9nG8rQfCYm2jac3pXibd7oBHdZ91PKRD2kz45cF6tyRHx8N8hXqGVPir273mpZdqYbppQVvBEr",
  "key12": "5sKxMKhRMtk28a4FMB4suFd3bXrhuktfcZ2WMmbkgDfipY96qeqzGvAJvegdpaMvv5SiwVC8ugdNnRX8p2gzECVV",
  "key13": "4EyjssQ25qvPZK9K5nomGCzMNGFhTEJU1P8hvLbmHv5GCVHqVwrMVWqAABfb33jN8xjJZfTqN7vkJjL2EogbWHRH",
  "key14": "3WatPpUxb3HeyX7yEENr6AkvQVuiYwXYKpTdrWs44yk8jdaBvwt8qcrzUfy57AZX3cSYVU3g5rBmbuY1PSw4AxmC",
  "key15": "3SgdqxU3SL6XFiHKFZsQQYXdcTC4X8hkB161aVmVvaaVJJmvityPFPiKC7BCihee8uBBQGinRwrFtVqRW71Rpw9b",
  "key16": "2AJ13rZ5Ve5VukpAk2gwDV49DCsVAJ7obYwf66NuDhS4y9jG2aMpSQNnmA6MNq6nN5T7nWRmDKyv1awZatwLRHaE",
  "key17": "3QneQNaN4g1HczTYoa4BpFG3huW6yYTLfu2hRS5DLhP8BTJAgjjhGUCTvdq9UA4Mo7iks9NrTmmuwZ3MJ7KBHZmd",
  "key18": "3v4H6qc6pYv2depLMY2SVXKVG1hwHE9qDkVdYyn8YShp1XFrFTw1HE5D5tLH1Eb173BqoNvRNRP3aUWs8DEK1Zji",
  "key19": "43x8815NBisP2gw7s8KZfVKL6hWqUnvLE6oTN25wwwbcjK1XuaeVZPCo7NJqXnqqtxyELwfaCQJFTRkzMHT3KXti",
  "key20": "sSmoJJCD7PEsphZ14V3P5ByzDFFsfTrMZBgjAe1raCArKa8z2kyF2YhfHetCaUEQkRHU5R2jfHCwoJtRXF5MEay",
  "key21": "1NttsAk69NPk4MhtqiMKK8ahVELcVpkJZSqSxzRhSSQoDXd3sBDMeU7mDmgndSztsaBTcZG9P6AMQFqZbWXZzLc",
  "key22": "2AUsh1Fmqiu1SMVLQeeV1kw7rWEWkX9KyFFGxqHYYc1noM8ZrsyMc1iLwq5zufXeXMo4q3xTQLiRcSVovRxbsNZp",
  "key23": "zxnyRNy6z6PBePmqddAAssJD4uZNh5t4sGNMXesuaz9jgyyq9Ka8BEdyDQNCuqdWP8Q3FLTBeiotsDSduxqyjf8",
  "key24": "5iNCzLr7LgBvaipDTRXQSc8Z7F2ABbcTNZuTCefME9KZCb8tWQwWwoxk39FfVdrAX6NXPnGfcVUawZx3uCC1Ah1J",
  "key25": "36imC9vhVqr2mcJLw3tWqv8nrRGCqsa6bSB19Fc7M69CPj71Qk6iGd6LwuCtkHcozdZjJoLnGDsVAj6f2BEafEPm",
  "key26": "N4nrG5sbwxbWV9JKSB7R8rYyzfkdped56WUd7gEW2Vg79tJ1HKibkAqEj1N7BXyuECxHQBjFncQAhXS4put8n4W",
  "key27": "vDPcnzLyrpsYakqHHkqT3ApMq9gchgs58HSrShC1kSKrdWCqVgM7qiGeXdLcWzwLXG1KpuFmwimaVM57NUwZUef",
  "key28": "3HQp3DtU3PNjkBR7wRvjq2nxsKffy75jHDXhF2NAeA77vMA13zag3EwckoexWiaReHYNF1HLXLh8PnwYZHWQXDNc",
  "key29": "3y7ToqqJHnwa7rP5GvAEFjiHzY7v5qepjL5oheKQ1V65NocgiRFPDHFZRTEzuKoYTry5oAcQsVVFw9ScowEc8Rfm",
  "key30": "GbkvnnyZftCLb2PM8dArZWKpLVGCT8qX8i2uKKK8rFqx4pkkHUxCjQuby21kjmbc7CCSpV7Xq9ietPuwt2oBax8",
  "key31": "tqZKMmUeboVy72AJG6Pg67RbABXLwrGTd5D8yY1XEFpDBxVYnYtiK4HymYwMYoHQYZZGg4bKH68xThXQyVagEXe",
  "key32": "5oYB5ayEWpiEu64UQGA4T8eLajsYMKDRztErVgtPcYhMLd3Xx9xbx8dFrvps2ekuLi6sWXqw2SoXJiiHoRp5cJaD",
  "key33": "2zwNkiKy66nMiAuC7ceim9WfSqdmw2dvnryqo2HczGrVp9JoNgFLQ3m4QaiqpVaZn9Umq3XeS3eGC1w7df7Z63EY",
  "key34": "4bFX9hs5ShAs391PwDRB6r7cjr468TxwtuWQ2F83TVw16o8oBJHEPBQVhBcC2ruMrfoCyw4tap415LRm7yGuqKVu",
  "key35": "HqMQ1PfyKz24kPwpCqjADhoaxjTHkcJAkn2dmg9Vn3FPt5XzshF1i6py1euEbNA783hy7Y8PVQ8WtMHdUPfMZ6j",
  "key36": "3yTm4YyxTvUrmZGYyRCis7Ke1qHfjw73Co5FPx9DRPAdE4V5g1Z2rNKjfTCxaRgEM2UBkWvCcuHSPvbxYbaRknjX",
  "key37": "2NDcsQv9eZdreAbsmHGHVAm52oY1QrY7o1Sa4cftXnvB4LhuPNZ6eoxfKRK6CAjae81KKQGTYXq6yMr3jZU4jxpw",
  "key38": "U6bPUU8NB2NEY4ydWpxunErHYCNTP2mBxoXH716muiJiVkxehf1TsEe2JBypN9MFwSTgvvv7C6N6dhB7n36mMWa",
  "key39": "2gJYmdCKZkabeG3emH5kUvH5w15XjZVnaHkBDQi7UQLEjQ9E5RJ6sGXm4xhpDWkimtGdJCXMHbEQ4LqPUKPwwpFM",
  "key40": "4f415BgrvMHRZt81ZCaMNqJpcogoTT1xPieGd9LhfBWeHstueRZSdxXKiDFdJz3MNTZeN9BNTFYeXXieLAgeAUYy",
  "key41": "5ZJi7didTD9fe8baqK36kCVnK1hp5VffNJYxrhBkZaRDbF6r6JF9hnfQSyXjHPBdaF5pysVknVFqT3cjrtuxXwxr",
  "key42": "2x74rEAzHsHLv7n9Q7i4XcuFVzDNHurvGoeWEU8q1zpmyzzTFayuQcZHJi7o3NiRCoZaejZsyGAg929WUEYLEpuR",
  "key43": "3icTxUN64DoRpkCr3iBokMwYW9sPdRmfaTsXScfcVFYnwWXcqr7aDHC3oQR6q6UPtj1YyN6AkAnx2rAg6VJY9a3j",
  "key44": "mQmptdvw93MT4gZdESjgpWNGSmLNtpskM7tgSS7eYPjLAdFktDRWJNoFzwPMA81YZYxFFGuy1bGJywsTADAebfw",
  "key45": "3pEEczziBNKMtugT8BWZJZBYMvjQUDEkkxCPcJ5FRNM7joMYGTK5hFyoJf649ijzAytwGfc4CJpoENoTJwGHYUrL",
  "key46": "j3g5Mtv34pA7wK5dX4cvERhcHfHUxVA5ENP72Vp9qGiMxVRGEk3RwEQhTQ5tdXXjZ693kNUHF2HchZy59VRFXWW"
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
