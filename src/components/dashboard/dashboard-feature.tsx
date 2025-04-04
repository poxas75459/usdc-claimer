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
    "4pj9zFKNVHB2uABumwL5C6KnX3BjgYCY471tyBFFTorBe6AbCRXJzZM4htxUZ4x8hgUHqm4831inUbD1xFunLv5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66QV4gjAxHbRmudMUopNMwHx6fqPpbknCBDJE1WgcGtfLNZmkAdXCJMwLPWRKNtCTESYWK6JZchdQUxsXedHAMCy",
  "key1": "3xMy5qC8MKzHFaTn617vhwnmMESdK7WQgpHso5zvcNarLYBegSaNvThAJcj9P9Ecc1D8qo7oZiro67Kc43e6iLxP",
  "key2": "4FQH8H5FPPnXJbp4jaYsbnKp1M1cgya5Yvi3hQc1BpUKWasXwGYBVQdgWFL8sjyzioUyjKqkroe8Ya5bqpaHLUEy",
  "key3": "5gmKX8PLq71zxf6LWqDfg3cmMqcob3CmYhwsF9dx9hUf9qqwDaiHNySiXdC38CkyFMsKQYYDnFU9Yd2WkkXSKcnC",
  "key4": "3CZCZ17pZNBeU3yP9oA4Y5svgGf4ENYo3BFpgKo197HK3TutCPdJR1DaZK89z1MWtGah5EhsvBrgoiKMZNdvnRw3",
  "key5": "3NfDgmErnJy22QL2f5PNUkUuFVJKYQagMReQNVDE6FBWF3uJDJNrwnXXAhJ6TEeFanaVbuFagjeEREMqHwZ9AEih",
  "key6": "2p33ioRCdzQZNieMUqUHcoB44rZi3X4h4kcFK9oKz2NCmHxeB1Zxt8dkC2pbuZK4vug7Dd3RZ7tEMKvBAKC7xkUt",
  "key7": "3oRcW1YHrrpoR59wAYUvSzTEstZhuMXZrjAstoekfozXxx2Ti5rpn33oDq5i8K9jQUppZCLTQmBVWiVuvtH6YRN6",
  "key8": "3EjoG8FDSbydNreuHtDJLmBCjvgNmMFpastY5kRCERSfux1RApj2mVBpNszoA4Ajvu7BWknsRtvgUJqrjmmgRrds",
  "key9": "3e72wnue6Zu7wsNqP2VNjUhN69xThXAGXGFzZqvGwvJ8nuZyPBUP6Afgr8xSnTRpTMYAaTG3HowTKQCzp2QFKxcv",
  "key10": "223pBxNrjT4DkHti1i2txE3MA4vym5ggCz8eSYmzcFFfxHWywpaC2wqxZ8BHywVhJNPKevZpDSpgUiich4LHGB37",
  "key11": "xkgxXPF33RieQPj2aUmCxC3TkuTkvf6iqhN2mR9KyVDHQ7SjWmeuEgesAhhYcZGYcUSo3Wan2eoAwpPD5fnt1Wx",
  "key12": "4NtjSa8UXXJPhvS979E8Gv7VNvKk4puAaPewNwgzz5ggp2dAYxrpnCpnHJAzWaTyDoQpDATUzFLEpFgF17iu48cB",
  "key13": "3NbEv2ucba7kbvFstFiXaye3jM274ZrzWo8xrcXvv7dizupnSohVb5SZAFkBGnayaxyyTv7vGg58gTeZkMCjTwtW",
  "key14": "4z2dJD1Kqjih4a4pWj1sm3MDrFQyWYbRooCHBfAJZN9UX32tLVM1ufmsWSAc58ujWefja6aoxe3AzBZRCGWkVKE3",
  "key15": "31ZHALoHvY3nGMAiL6Xb3LDUfJeAPUpwYrFi1xtT7623vyWWeMEyxdG9Ua91zotKm4ttcabkHwTeszqyetRvN7m",
  "key16": "4Uvrnr5TsB44q8DxyqhjzqhUtbR6E5iW9Yh7FxpkXex1St6SJP4fSJzGMzu9Cm3yTxLG9mvy7zd9FjngXuouBWbM",
  "key17": "5buifsNVmwdFCghnzYoxaAKyYDeNQNBnfUmiZarkNts5iDDJk6hA8AgVsFxTxB8vEmiXJrHoe2fr2myMF3vunoy7",
  "key18": "5R55rAQpT9jpVvc47yVUV5qepXNcwKPm1yf6YtQeYrhcGYWDuuC3gm7EZpX454veaKWmES2Yd2TyccneQ4vRXsd4",
  "key19": "5uWCWNDT74S4yFd3t3kbyBMoKGKsEJDVKYAjb5d3gZKNsX6eW5QZTnYQbsKfpTY6ip67MxaiTKewt1FGj8GmkKU1",
  "key20": "5gm62eQvsQ8bqqToyvs5LpD3uYusLsWnFh4o41kf8d7yYfik3QbgsUzw3bTj1p3yeKiZuCrP3Qyt2zyLhZKk8RQ9",
  "key21": "4rRutPt9anfrbymC43vr8CPLPD2CJptQ49b1EtxrsgpBPW8p4Q74vVk4YzZFaKgSfdFqPNVXthbHLQB4kCZVi5oq",
  "key22": "3dwJtJXHn78ifto3GpwezbNFfJbtx3B62sBGnATBX2MoWUBaTTnnbohhcEKMYszPSMH9NF1mrNPbwD2hsJmhvQtK",
  "key23": "zHJ3sKr2Z1FcNBhvjfMZYTbirADbZM64SJS5kHULjAk8YndZMX4dSaK4eK25fTtK2UtbJRLMqqZ5buSwQCqCSLh",
  "key24": "5ERPKXk5gv2dVcBfRj4kc9URYG7LTBnoSjoVUYPcbh7aetG2so1BWhDXttiL9MihSvVVTsLozmnc94Nzn9q4Q2FA"
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
