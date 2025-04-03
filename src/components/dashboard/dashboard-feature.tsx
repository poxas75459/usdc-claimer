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
    "HCHXmG2c6dGCdnwGt4sNWVUsd5Nk312dEP1SuchUqPc6DLwo7ViQN6z7S1Q3djciCG2fS6jproJ7XM3gutGLcUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U8U2SadiiCNmTfRgjrufgXAyqTv9md7vesTuQ87PL4sCYBN4Z5QE4Kz32mpxQr4HS43kcjxRVcNx1xqbwB6GUbF",
  "key1": "2FJLnKhQtwCuDEQF2qeWg2cT58Lo7d887iD4pb1W9EWSweRurSbXoatx4bwafdB9JrT8g8TgHWLnEMBDtMuSuHhw",
  "key2": "3YFyxDjkwhHQAR4E2HQyQtbrJgdwXW31N88oKoT6WVpbpdanStT96C5zfaF4NACdLv3u2zMgQWDXUoQfPdQUWeDn",
  "key3": "3paJx8ZRgtFHLHVzGrtMVvsJ7cw6Uw69Zd9Pt7r8HVxNj5wDXVYfXYgDhLogpEGGniAi5EfzjzyagahZaQLDCdFt",
  "key4": "4r9AeAXCJNiTUvQuN6qnhqezfpgRUqCAxCzqM1FStMTTbsRQDk2VLsBP1g41rUQCtDepreYxvpT3bm6itLoJYjLe",
  "key5": "2DvHvUrbn39LJBLMrAX71tQzDZa9ufmQpr7j4YAgdhXhcYYWok8QMSrsyVLE5ARSsWE6tCxoEwfUGo7CaCLRBWmP",
  "key6": "5P1z43JrahaEqXGQ29PkQ2mzooFxUYnpZe3PAE5jsK7qFu8kC9NfWxtJyANUnUC5LMT24vY4CPe22mNh6TZZpDVu",
  "key7": "3wRt6rhXLQMX6QVnXP2dk8WMCg3iknrRxx3U1A8DFfH8eQFjvgJn8UxoL7HZ8zMwNUdGphSCRFCj2Vb7hRZykpmA",
  "key8": "3DoxYtmGkS1ufRxYP2uY9Mh4dYEWAfb5mQB1Pz1vhTzqqsVUS2wn9MGAw91r35qwjZ65fv72c4fp9Z5ZJguMxrkX",
  "key9": "64wDh4TmZVr6Yn82FsJAu3rCcaVhKqvisDmN1bGfciLj5SHX8XqhPfuWp4GMsHVvjkqAB3b7pXVuuEhf4guNrLEy",
  "key10": "52Wj7UyjPqFZuQRcDeD4W2ykzhCPmDGiihgcBG47mG8N7jrXwqKdstr5Mb4suAaFL52HyFqnLcTmM7fSbNPYK7cc",
  "key11": "VU9SpnaTiTcXL1FbZUrn1mGfMYks2XsdpQkJQ93PhiWcWYfz1xhtH26sg6KK53qBGRkNyLwiniPY6nnPaw3q5JH",
  "key12": "5FewFyr6neXMauBn6jbkA2ttToBWUSnYNA924ZQPRcqNfUy6CoypuckbRMnhCHsL4KsRrd8X4YjTRMwcAGs4M92U",
  "key13": "2dQ4KJ3LLsQ25AeRXbQSMyZM6SRNdxRwVkYtVwccpJGc2MetrA3V2BbJpyHk6Tefm8Xj3sAY1s8PpoQLQ92qjUDr",
  "key14": "EQncNC8Eeg684yD9yp6iAKwm23mvnm1zjRtxi1mdhgL69Vnu4Vx7MkuLuFPp6NmNnmJjCr311XvK4U8UTuPufAy",
  "key15": "2noR39htL6DUVUB4YT54pkKhXy8TE8QohCj8n3v27fd4GVCCyZc3eY4mntKpAUQxzifNLzmg67PiEJ55jpFcHLTc",
  "key16": "5GpF5evRHThWvmNx5pQvLbBdhjmMPucMCtr2C5DBxcgdHX89k32ZfqLh2JYkPGCCF1dNusZNJVQc4NNbTHhWTSjA",
  "key17": "RVf4kLgzdgVZLoT5iGmFZ4hinJ1i5AbVSd8wHMrS8gNu3X38yL2Jbpq6ZUgcu7x9nqZPt9c4DQvPj3cHbdr73f1",
  "key18": "3yGRzqEWKwpWW4DZBfzh8K3wCbW47nPPRmY88ESSxCEf3yznSMgktwCUo2DoXye4TCAZydDfbJazxo7hQcaVCqhu",
  "key19": "3Dv4ZDAcfWkmmy8RxWEssvMYvBwX5pEgVLjf9cAEnoaHokExcn6e1S8CN3ddcntYUNABTaUqaRayVVxfhpqy79Hk",
  "key20": "5nCBFDaK12USyMnyYYfiGVS5xU6B6Bf3srQfwVnzTNsgVHpxXQ4b4vD7fVkjEBoEKQvjBc48zDY3EjksYFQzV1w",
  "key21": "5qoeWiFw26vrDGiZWt6FWYPJPiuiNPwBHuyBjkoML6aVQnMBybYajs66yjJWvmKLcrtsAsBc7Un3zMf7qWVameN2",
  "key22": "UDxnC23zrrENPimUPfZmuELkEyvfRpDzheKMTj4mSeKLVfPbwUgUBVXmR7RDrCtmqoR8vUCH4sGv2ma8ZEASkUc",
  "key23": "9oq8ssNTvo7XhYMtyBYUHfiU7hDKg46hNYzNpXcHfweJeNVy3Ap9QhdX126R1QerQuUN6c7b2fVDg3jncUDDAEQ",
  "key24": "4fyScwiwjMRW7Fp6H7g327gn5BvYUC7X3TU7xNozS5gZz2y5fwL9kKhnrCZoJ5ek3oMYWMuNE36JNNAkDTo74vtr",
  "key25": "32e8jmdpPBT3TrWcxfCwMAGaTSF5cpxAW3NTaGBBUvXZww8T9exHsk1aVAQAheFL2zsq4cJyWppgc9vhdfCd2zce",
  "key26": "2peYjdVuj3fPDUWpBPqPhCyrVGYiMGKh4GUfQYFkqVQQA44X2ysFiA38mVnMxb612dnJHZep19WdZgshqrCXhzE5",
  "key27": "3Ak5YGybcgvKSbU2xdvtJkUJUeS3FCk3WXhTTQPkMVmc8JuYjccm5cv3L3NLFxcHsKGTCRTAeXFVKT7ECqG56Tdf",
  "key28": "4BaBCKCW6CjdHUJ3GARSVFmQSxURmRsgEpiB7THR9e9SXZonYbC2ciX9ZcEP2GuDJCymAvpspuxJzFZ1627hwQYV",
  "key29": "3GENBLwX7GaN9ks8XuCN1x1vYRaq8r8JYH9bL87TB2xyDwCpsEM1yY1L1ppKFZdTbafoxMWJHo1ou1CSCrxTWPc5",
  "key30": "3Y4dZLbX8oHHR4KaSyoM7R7zrouCRoGEgrmL9aoz2wmFFoP5aNEVXcZ8PXuieEyhzncnJV9Cig2StbdthN8HjCgT",
  "key31": "4HvCiPoxVW5c3UDeKZ4VJtv63vtkUf8LeFyfimMUUsZTEG31cpEHNi7AA5JGrWzbetgQPeRwL3p6iNN3VnMa6eGz",
  "key32": "5UnM2mxvn7cJtSiFMXzPMsmbwZ6wCfP9jPn5tWF8m92AJnhss2vabcDxqc1gRMtiNvnoK5tc916ESjfQcjcY59CK",
  "key33": "65xqVe4qTLNiJ669fUwCicKn8QCQeUc2R9wMejwUbE88D1bG2Dy3BcffR7fwDqALGB6TrDHRNNMMbPhHQrnsf6CZ",
  "key34": "2PNt3f8LKgQqB3VVCciov5BxgnzTRwdAg4P2hBRCoVn9anPhx8F8cV41QwJGHZWBExPKCV7mggr26EFFU4fJ68TC",
  "key35": "5vkGnsHpvNqDpD4cE6ZYnyZrkLJ3EzNDyLQfU9eGiHpMv7yeGswEA2QzAkamLiKvuJTVzxpHvcRmfcbBNii44DM3",
  "key36": "39wmzbQYe7gmBGeDa2v4ys8zQgQmHojBHqKTQmf6A2hw7Wx8jZbq41QsawDpeE1xwU1FHnXoVbSGi9RHHZitCp7T",
  "key37": "3uVZ2LdCFQwXcPcoXoshTmEK2AGcSxixxLDdPz4BZe1NdrUKjh7Z2Fk8TnCjbj9PwwxeKRuFRj1TNvxsPeG3mBTc",
  "key38": "38utPVk5Gok59qqpnfQprrVQpx7YHk4SM4fGeQ1Tjo6TZTUa6MxqndtjpdsE1jAWdN8PUqVGZZzdFKr7PwMieWWJ",
  "key39": "4Qc3HmLmNfSsyV8m9eQ4TdaUfcocLwHZiPRh4rBSBBACmFstzkM199Lgrs97jXyQsZkhoxWPQCZSbPKgTMuN1ktC",
  "key40": "2RzFU6ugAmCfiSrdQdSvUk2mVYbZqxNQS6njmKEPMtBNsNukpB5x3HaQcfA3jEEB54LTfMyswSNss7kGNu4AMFkz",
  "key41": "GHFKM2TsfjJwAeREyeiJwp2qpUjPGLzLkhwgZUry5M2M2mEQdt5JQGwWas1AiVHS1wJrh2rp9DZy9V5SqqPK9Bi"
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
