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
    "56FDNea1pu4eEfPL2FJRmMLabLC6yW7juGYxy8wYY3qzQSjVyUK3V9iJab3USk7S62cRiY2AAAtPNW7gUvRZ7cBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57wrFUjtTAS6vvSaZ8v93L4iFfyiak5sAhRbGJVGz1UBmrUMHXgXvH8XQGZgAqcMxZuqh8TfJxfNVLvBFXYW6ZbF",
  "key1": "3kSy8h3copnCN8ieBPeYPPum3cbKLVJufW3dNX45fqp3NS2nyuUvyCuQaZFUo3D98Gd6442dCY34fEx67QX2Lbc6",
  "key2": "3pHJPrEoXMZnUjh3ppXmT41uge9wSC48FBGEhyJN52Y8cWJyq4iK5JEhgUJ6bpg4hiXoDrHe2TntLHfJnN9WiLKe",
  "key3": "4aqVWNBYmscqNSKHEN9JgFAkxvC1rgPedpY8RqpRRNWEHepNRhLMqVc3r8X9gJHrKrcRzGR85m3duUWiLShAankk",
  "key4": "3E776quDWr7ZhTFXTvwiwazMD3ZeoRMj95JmPzyBKyuY26TxKzCgNmSzavKGfuGsZDf8VMgWniT4UCC5AY454Agv",
  "key5": "44sGBrdTV78aoxTWwoaMchZaDycf17yTsFneL9YNTUFX2exsSHkWZebctqrDkcbFE7TxY26BsQyj7PJWaSyKYBzp",
  "key6": "2WBc5mT1wuSbg4b7YtVnV1GkcofnYyCCYb73DdrZEba3goyfQg8a6fBjzQR8W6AvE38VXoXk5R9xHdWvCzLmLzeo",
  "key7": "5BhDtDfqpMoXwkvNYmoPHVArgCZuoUyZQJ55KdrpW7eYQhQBfxJHEY5KVKTfsDhAL3JmvCXfDjJEcHoUECXS4wvg",
  "key8": "5Pnfpbu8dKp4a9uGPJGNBCuuc6GKGSRLXqtdZf5ZfAaDGgkvEeLp2BLctd2Y9yara9uGXAyHEjgaBrSJQUsPBdGN",
  "key9": "2ooJRiuiJT8vT1Wf2DFGkpDtpxHstCuY7P9h47YUJVTiRu3adweZpxvJD5xaLMwDAkt1kYJetCpK8QGQiSNgjJU6",
  "key10": "2iYdF8BDcM7BLG6rPp66sNLREKYNV3Bg5nQ1GNyuYEiWcoB9vGmaTdvZ8LaKFP5MqMKZZLRuuvLrkQ1o4JbiZRgw",
  "key11": "P8nxC6mHFu2fbVHeMur1fhexj3XNWVZ6nBYgSMeCfLKHazkqG6PvMK7bMnh2CbcXNqru5kiaTUoUzqCarfYHyhS",
  "key12": "3YFhyakfnnexpoBBeCzJDcj1qLFS3moxf2kFxNsqKSUnLSDF5qhxxVJPAAkCeLvmzwFePdQ84M5ZQn1cnEAFF7jE",
  "key13": "36Tg34gfKzNXrVwzViiiE5HyEUh6dwg6mvfUgAeCoVvnHm3kXAkFdLsMd7id6R3rPDLFpEKHFMjdentSHieM4L7S",
  "key14": "3JDrMd4avAPH6eCLXWdrG36NqgEq3W8xnWdhBPa6RFWhdkht2NZ2GNAeMjbRUW6aip43RFfXPa5nUbXNkP6hZ4aS",
  "key15": "5Z2ziuBGHiz15PTYSf5VnXYryiDqvgTmS1BbzLL2xCw32CcvF8ndnjMMDbsbJNgArAndHjVmbNfj8RMqgSixdCFV",
  "key16": "4dBm39p48xPxdDErin9HCXYmTT5qaqc9K8Fw68vG99Vo6Fzbf8aQH8ZV4WrrMJhDQkrMsfhbm95AKDZ738fUDvMC",
  "key17": "435rmj7TPwdAxLi4WjjQtPakB7baSMCczxY7JCwFCXyEx9sbXPjvjZxezVakxaC5TVCmMEDySsh4zqJmrLRBhZaA",
  "key18": "49j4UEvQJMaRfgFMN9VixpeqNcx5W8FfFArK5xaUzuoGzPxbpeXPhp3eQjFunoNtaxnXqmZ7tbiikkTDirz833f6",
  "key19": "9DsYwGxGnqcCrx3kgQ5unzG7pR9A4ztZYugWL87JJ1rn7Sk7xgGCfQQ6FrbRgqt6bMZ2ncHcUgjNYvUSMQcCgBB",
  "key20": "3xnPUgf2suy5xnfrzt4AwaZrgRrCBjnPjUWGS4TDCrn2NKwSEQHDaQ3LcoTjAzE4EMyW5gvFiGvySvTE9684fBqa",
  "key21": "5S6D5vtknfa7HJhets8UcWMufseXKsNn3siWyoKiMDo2Y358YWhhKiQUGK2UHDX17voUKN7KEAqSwE5sH6xekS6D",
  "key22": "2c6tMEQNivJH2uCSCwsMgn1ZL3ErYXUQob9UwwzviLeJw8a9HpkT153ir1SUUyPfThgZEcKFrrAUE2ecr4p5qgbh",
  "key23": "2hG262HArub35Bboz1t78KK46jjjkcTvrbYiLKmeYsoQDaejQgh6tf8q1AtiwunWA8XscdjCq8b6xz9ZkEALb14P",
  "key24": "5JKEBAPAaAFnrJmi8dkKkVQPED2hB32YcHrpTRq2bgWHtGDfBknzfuUHMfxjoTcMnxNRnHUQCGP31ix9DbQh7fZD",
  "key25": "23Py7CrBqPpWWzY3Lb3MyZMewfpPhjNWAs1LZwhEkrSyek4HbESV98vgJRWuBiEiJ7NNepwcJPjQuZYVNVmThttC",
  "key26": "3oUSEFpVXXjrGs5Qz41nqnweTE9SHHUpJ1SeWvh9vpgvmg3j8bb7XhdBUcgpHK22LzRuKBRy358J3tbZ3GNfvQak",
  "key27": "4pAhsNYQ9byGkyWWajaddbYvbPzJM77iRhXXKERngur6h6gy1RU6rjHpnqRFozYtLbTmMrFk7ijCUUc2JcbUTxU3",
  "key28": "L5SGzpxxESm398tPf7Nhyr3AzL6CCyL6aKdRwpbGXfsvWM6nRgnymZwkh3b3aSYdZPsRfqccpDATzvxcg1bNyLs",
  "key29": "V2uVVrVbHhjYeDs3W1rRGvEmmHHmdobkFF5aTdyHv1kTtunD9bqzg5N4zihJAM2TwMAd2XtZPp7XgQnVhHqmnMX",
  "key30": "4kztcMD1JQshfwDg5uYFTvX187Kw7MHevrwK4tj6mvRem7d9JFBJ7dSCbXhzJpbs41DhuPJUiJCdqp6bhkFMwbUG",
  "key31": "2eanYtsCNupzPz233WDRySNRkVJtgXbWDeneEhCP4JrN8X9iDs6UWuhcJxKi3F9934N1iXCrq4pTyEc8GRx51PdK",
  "key32": "3JNCPkUAGxjGjYHzuEbExDLyJXH63rkT1K3JmiJZA6rytdMD3sYL9ni1tKik8MherekTBh8DWzBwucT81D8dVxv7",
  "key33": "4Fc4v2yVeUE6np4gUS4GF73zb77rk5B4yPHaYnBrW2sNwB77ZTb9N8wsoVNzxTVgqhBjg2JSnAEKDzJi38PC2Ths",
  "key34": "3s3t8DPheWBpcBjoErzZduJFZx5ap3iVzbzUjt5E6hJRRp6nxfkoqaaEpdK5tywWGp4TeCqjmXS1xULEvroPtq3P",
  "key35": "4oEzutNgDZudEW2p8o1TXkMTCDsMrZvdHmQiPd4XpY2oSVXP3d5NoycAHj4Jt4KCrfGHUGAir9PVAzEzmSH8pPbc",
  "key36": "2LDuwQ2BXZC5RJZp3KSVRnNzK8wc3vWcMtaoP7gcdXGRqTc4rqns7dcAYPsuZCaxScRj33g6qboVRErSWmyCSnX8",
  "key37": "5Y8tFtT5abCGk9VZfkrE7BbLySyDeuMv1AtzmkeuZKJNm67cnPfcVLSQNCPKJs2tePGo6swtYiE5pwtkjQpGoBUY",
  "key38": "vuzwsnraEoFKeXFwx9BcZ92ZxVgAHAGbpFEJKRVsnx4TSDQ2tMj7v4vAJpqo9Gv2poSVHsVDr23d3MKfH5ntadB",
  "key39": "3uejeuQjcjHzzAFcwwMReWuE5h5bgfXtSRiitURDYm8yX1iqjTZcKus9tVbGBdX5zM5oYakSwqXjSiFjmL7zA3nQ",
  "key40": "34i1gcv4t74UF8GCQ5xNCG8SZdHUuh5Gj1sN6yWJaQ384EVf5BtoJhC2wj71fMPieV4BVVt8T83A4fGz3GaTKYR7"
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
