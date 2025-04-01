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
    "3Vwgd3bMi7k6rashcmQhgHiqhbyWLBvNh3iTuf9M2BpnLy2PSpCt756S4XYupQYxWKZokoFcPnkHFNuozGxMtfRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RqCtaJVZxPsNCJwujuHLNc6HzxZfrFMmi91PnkTTGdQvwKKV4zygSWtQTTn2JPxDa8tceQ3Ai8zMVhFCeATfR2z",
  "key1": "XwdZA8Ck1RF6pfFjBkUn96CEhmw9LfgHxV6hW2bUAxTAb4XxrT8kYEMk2s6ZmQiwRgNpXx2CRjBG9i7Vo2qB8y7",
  "key2": "28dCkVaFbhFy1p8pLYof8V87UxYSryQX1SRvaDcpR3a3UkoLjy6KGwUogG1Gt8h4d7Xoz839JU3KJXCv1PdUUEFf",
  "key3": "4DMKvAUh1zraqFLqb7hwQZ3qaDvRvG7XLJydYef3V3DNNySrYSSyCX7S5Rx3a5v29LPwENMuwbKEiBtcUkep3TER",
  "key4": "44zued4qTRN9J6MoFGpbhMFrGCRzNnh6Uh4T9Y3opejiQFH1A6TLRuuhqSe7ejKDwQeBy8Br9hwteoCxhSCURAtt",
  "key5": "4waeHjAS1bKvoc3D41WcnwAvnhBRznwZt8L8XWawCBBup7cEPenS4wmsypttt8RPqhcfTBKzSvKxmiwAcwAuShHA",
  "key6": "2tsaAMcQAwii3EqpZLQejVeEvvtBgVbP59qanHpGUv742EPAvPmaxfJ2GciBbBsqdpx7Nz8mgbTkhQpkvKwr17jG",
  "key7": "5f3RyWGLLMr9VQoyoqffMKe3xP6jnNcbqhLgjMq45X9gFfwJSjZzekuVTe8L1qp4fMhgBfKggeuUXZjYqqi5DPAo",
  "key8": "ymBxBronDxPSMnmXSfH5ZVCksGG4U95CvCqd6meKe86Zqpxm58YpYTKjEo1zNnik8JvH91YWUtQgDXA1B8KttUL",
  "key9": "WNrZzfL3CoYMBXQXjnAbhVRvjgZcpzDaF5VGt7QUfgC4YdbsfFk9ZZAozJqT54h2DuNDY8yAP2btzab4yj66gTD",
  "key10": "5en3L5WavtePd1bztv5nrnvDVX4CLB9shbENp1vRWU1ArWYeR7m66o779KwbTNdAJotheXN4LHSaqD2drMQAimHT",
  "key11": "4xznrSi19w5zXz5wttUTrKWcW1C2oHjSM17QcPNihrUfG9GvDQRKHahahLJm2ChueTv5vrN3VVGJ43pyRi2x3Nx5",
  "key12": "3F8fQr5Rc4JuF5xhNFrTSQoTBqJpgWAZyQrL9N9ZU8GrCJoXvUpmte5YXgXW46aoryGtg3RLiyV8K8rwBC5pJcLF",
  "key13": "2oAngAaBZnpanLnLthTTncsCX4H8F4bRVoL37A14RwJNAb3u3WiDPRmChksJDw58G2ksfHCUq635c9aheLsG7u87",
  "key14": "3sBJnkqHQg1tPRVyrN7qhRXERjkJMmxQmmWkjj4wn5NPukgVXacdcUvpaoWGtZHDYPfyDCZCWYLvGEnWGroK9V9N",
  "key15": "cwZn5THcbtoph388jFshNveHtpKpStN8DbTxXJuWQsb5NHH6gF7ZEUGLXjEbp9cbFJnG2RB9np5umZsXos1HZdT",
  "key16": "4ogxNkVnZkCxUeUTytot65QSqrbocSAsQzRsmyp6DpWQx7ysBBp5Ly4AyEYE7sV4Ynn7tcdFdTYkfGUDMojtXK2V",
  "key17": "3Z7cHgGaxjo2m3J6zDibmr3tMHFVwKeqdAWyY1U4TTVSbFCG2vyKsrKiNaP2Hg5jedVvWQFqR2hYiMtMr1fdfi6G",
  "key18": "2V1dSvg193fhfWpjz9gHiNNbEmdMP8a4RQLeN4a3jqhVopGmmXCGGSzc8szdeH8iKYwmTP2uMxKVP1izUGf6SGM5",
  "key19": "2TDtdnGes2duYQvfSWRuQ57CHJVnHo8p7Rjneh3YqncsBBC6au2dQ18g19tWZcZWzkhc8SDxZzT8KgxnzoXarF31",
  "key20": "3YDm7feoaS2pKSv6HpLvcRs34yerCED2FwCtTLYMPgRSXuSWgqc42ZozHrSWJ4oGFkvmyrmPUL2nVxSidepmPrZN",
  "key21": "66mDSogNnizciYSZ5X2m5QXPJQCS17KwWeB1jM3Bjmkxhb1DprLfvGbX32oK5rYRBysmzLBUkffZrp8EkDUrccrf",
  "key22": "5fYuUW9diSpYnyRfZMmx3WYBvzRHqHFyqb4cFzXWof6fA13k2zJbrS8rmSGbsy2Q91SUr4HPhTZHUX8uPEm2P2ip",
  "key23": "5RmJztJkDDsv2i3ktuH1TGPgDY4pevpRBa6ooDrrUhCT6byRmCpZVyi9N2vLFd383qxdnPp6TCdZTHm2VhVDfegY",
  "key24": "4HpRSD8j5UqZda9HT5avkGZywiuqFURXAfXDjBHkD79kvD96Y7i2ERd4m769tTS4r4gtnH37KY86YudoWLT77trc",
  "key25": "4Qb1iDd4LiP76RmdT24idAafdD1cbCT1CP5upd8HSEzFfyAs1GPA44t43jdSyQSebeTPrh9iR7XZcAVfSQiPmuXv",
  "key26": "43E2ot5XNhT1i3hCLH4BPbFC3mAoUbGiUrFEN2fp5LjvnCxFTCM55todZRuK3E7BxLDGAymARnoqhTPNg1TLauJ6",
  "key27": "3pddauFXEw9SmwmQAp595CrZMW2NKbhZt8bjE5TaMyMtGyUF647krUSCX64gAbL3P5ZeGhU28i3Z486GeRDS23Hz",
  "key28": "3abVbzd9GyPTn1wLddEzHx9ZsvsJgxGHDdFuvd33AC1MU48Fp6wQjp3ZrSrNVda1d8j8GqAqEN8XKTBGhoRVJhAU"
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
