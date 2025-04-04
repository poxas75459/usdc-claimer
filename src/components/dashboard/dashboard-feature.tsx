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
    "5jxi914agczHmYJVj1UckTyfCAsW6SjKJNpmHMVgiYUctxwZkv2Y882a5a4vNwHpw8YQJvsK3LoyttqhEc3MFpxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VvL1g8RdHNnbZrDZa6skVg7MuTH6Eocr7uZNQhhpwh8MTTYzTuVof6ctV6NosXYmrQFXxjteXYCcmMZqCiimHT4",
  "key1": "4obbncyEiwXrAsaFGsPaHZAmcv9TckjPQxZjGZT7V9r9UYLNuVeoNRhyMNLnkjC6rcTCvpfByU92rJ4MG1hw68B5",
  "key2": "51pC7VCBFX7EjFdPymxdCttcK7NPvWVem4vBTAUFBLBFfzPPFr28i3QbPSb47hUYcPvKJmnfEsZnpyzq5HTWR7q9",
  "key3": "2iw7czmZiXqqHj69voJUQtmdHF38DYRgxMfPwcPVoVN6xXuMtTYuvUcKpndCLWbSmUupZ43vBmaypXSatJvsGHJC",
  "key4": "Xc2ZsYMRNRCxasXagVjXiQd2HMB6QVcSB4Wn5KDgMJ6qQFXfnAWCLZ4P2NkaLRfgRfvdEPbh59GtcVsUjg4hDMb",
  "key5": "5yFhPwF7R5SgcbMRr13XxzB7Np6Ttr2awxuCuVW8Xc2b4oQvzUPCGXtGDYPoxWjpHEeRRHf52ZhZD8D2nnKYoRex",
  "key6": "jin6hgHzVfKNbN1cxyGW35h422tFLvUHCk4shF4SL5e4DaqEtq3hPjuARV4hbJBPXLMwZXW2wrPDeNFBcuaCdX5",
  "key7": "3SpAVLDMP7CfDzzhFZiQyfDkpUvfLUnmEstP6mx91DfX1ehNbJy8enatENGFUNvoJBYf9zM2EuZFUWte6MgoXU3u",
  "key8": "4E1SGeQbW3QfkzUZCGTAZGdQUhi7aERLUVDhwMNALjhrKnbsyHPDdMQnitNQJuw74FxejnqJUQ2K8hhohhPpiLrf",
  "key9": "5yVyKBhzC8arTKL4LxBxBe56AGjNuAj3dGtnEWbH57tLEeaQC7B3D8cZVV6Ze1wK4M2HyvFcLJ42oytt1XCVDcPE",
  "key10": "26GpgQa71cgMGHy1Grfw9Up4sFTwFqCdLUVCxWQdUPoPMAzhFqMXgXY5LFtHzpPRxZJ88AEzTLPTUNFhQngthWZg",
  "key11": "4BUAgxKitbdM3HX5y88UmUig1U6d2ULdJjXVzfT2yvQ7aps7NzHA8ddBZJHsDbjgSbeG1LgJnUh2tXwQitUG7XnL",
  "key12": "5VtgrAt5ohrNyhmAgqv6xH4gcjeCPkX3RTLiWUcgWbjJPuqMmb4VzuFYm4dkgHhDkdTLXLhv9spSEo9uCeLaVFEC",
  "key13": "AbwciyB42etxLCqrp73Dd9Qc5VSmk5wmMPZ9JwrbKc8KtxRCP8xrPJkLaCxkZg3kuoEBVHxAciuEHk3kFVjSxQ6",
  "key14": "5j9orxJ37BjvnFs1PgfHRYTyJD68G824dDTy37EskQBW2yKUvsXeVQ5SYPXfbw6A32xmcXavNipMnrZhLqHqgWWY",
  "key15": "5oLG364Tg3k6HpWw3SxeZWC4WYpug6UbpxoiZmUjPhuzQmdFmGiKJna7RZWm6uPmLntFy9BVmJmtJ42Si95Azv5t",
  "key16": "4o3FTmamrBLj13sx2ahmvaNuY1thpBwDyT2HhjBcZk54i5UiBvAfRsm43Rj64Xi3CpcPGdfxHwwrb7Le1DqeGkvz",
  "key17": "2kwh3FeVjzXvjSomxb6SwydMXWefHndtHwbRcdMYv9thWSThfmCVb9fyT4en3E1eNzWxF5TvGUrpzEtMTKVRRL8m",
  "key18": "299TtFH17h77MHR1oS6sAfwJRTsSz77Hey7Ntq3RQymyhAYjuh6BWWrKu1Cuu4VBPETKyqD1izoTHeb2m2pkJBma",
  "key19": "2DgHxNM3xkA89Ftn8Xa27k8f1DvsKCq3fvwpo2aCy2W46g1SKCYvNQMFMrB8DiNNZqcKopEA5MsnbwhSBDnZtTRb",
  "key20": "BAG4ZaAFBmfT7uusj9B5Ff4QhRAuXvT4qRRcH3nEEHEHtwR6CfmhtmRjFFsSeH2yqfg6FMyQ6Y519wtuzg1D7D6",
  "key21": "4koHahtAkicRBjRDQeJtYE4ojdCw49vfDoKN22wmoQpmrYis1TS3jgiHTiDoJWoBQdwK42SfLCoXt1xL5xC3psxB",
  "key22": "3gdX3icCf1azq2a8jduPaoSqjF2tYqZt8SgDHBTjyyGBk9oSn1aDcEp9Q2DfFijFB9XGMxuMcSiidyJaSrVEiJcK",
  "key23": "LqK1CFuWYzthYS6Hciz2317UswV44uXxoqapFBeNTyGxAEqYXK4Ui1ZLKokHjuS9NMj7cUBKkpWycB1CicR4kuD",
  "key24": "2LARc8JY2FRjzh3yRDewHtcwJd2789h2R5jA8gcpf2wtuqoGzNV8ieyGaTNGHirSwW9rpp4ms9YUJkvj6de4KFLJ",
  "key25": "QaLiQg1nejjkuHNj3naBQZjHG7S1ZdAG3uARLLocT3ZpC3owaWob4N5p5EreHkkQ9cd3iTtdZik5cZGS6XS5eYP",
  "key26": "tjEbx9juRRb4VXQAzFxa91zxAYFC1SUfJiBvKyqF8E8z3b7DPipk124tMF3NW7UiiCccPnDgCRpWqz3nuGCYWGr",
  "key27": "4H2obxM3S7XSVgWiqxdFTmTMvurFuF3KkdS2VqHyzAFUHa8xFTydH37nNvt2UEkjmvkBpi3p34bjBv42Rg5gi5NF",
  "key28": "513zQQ9vjRsi9HuJzCHUsFYwwv2K3LqMUphroTzYm2KNx2Wf497iFMHJmuroXvHKGhFvQHcwTy9PbQ3pgrWfWj1u",
  "key29": "3Ty473aa4H7ouzQ3AapCmkwCYn3S35iJaALnTHzXFkvg54tq2bkskAdxSRBYUdR55H7UhmLPjBzX74VvqsV68Nzq",
  "key30": "2vRrzrPpZ69vk6At8M9c1hWfbfpoMNzdEZwM941xSeXW6ik99gXhLawDvpshjW9JhYhSueFWbFCZZesb1hBX8BJv",
  "key31": "1Uis72x3C4zV3ioNXpGXjQsQb94XugWTzVo2pi3isyo3oNePXcAGVRvFqbJs9gkJfmTqrXto9GP8McyVH5dnFz5",
  "key32": "2gJ16F64MZLYFXXYE2Dp1iE386m35edLNHZSseJ1KZm5NKxmUMPRfwzXMomh7ZgbUoVzWQjfeVhsNzvRwMrwDvpa"
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
