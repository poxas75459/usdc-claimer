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
    "3icaMJPm4tDMQfDuCMxhWqwsXQ4XUVPyoQUArjg9JXYWnH2j9cjMcoJTazxyGBgNz99AyZaaGdG6amejZkucvJPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32upAjXs1YdrRiRnsNctxLk9dxojFP7vPPuGqZDuLneN3XrM8C9USqXtmyW346abE4G1gt4uW7fo53eJppBPUXb4",
  "key1": "4BJioCgoYBaTYdbYj5CyBUKSFhCDnt4cTysm76XHRqqfYDs6ioeWKYjE6YAs4EBTd9xXzuHHTJj4VnDUrr5NhRgL",
  "key2": "54by1JKhPNd2LzcNp4F2FL6eaJS1MexRy7ZGtWnkVLVs3KBiqmQsiE6sbXsE6zmXkcyhTWuimfoZNAabmkDHp8X8",
  "key3": "3CrMZK7Bp8BBpVzy2jhqqnBeP2T8vLfvTTV4vchzWzo3mVKogggnuabrK5872kHGgGxWfP896RED1gFpahciC59V",
  "key4": "2i97RnSiMMLYMzniGiXKZdY94j9zqaTFUMqdcLvbTKzhw8CJH2Hm4oibaDqvL21cB67HctnWCn9t7ZWYwAu3L91V",
  "key5": "5J5HQfEMDbmu7jEWoNkLdX2HHKoaCLXSw8D3JgwzGT8AFVkZCPEv18gaTetm75qDVuTXMAm9ACH6ZySxeNc2h7pg",
  "key6": "RkjCDi8ZexgwA31gATi3QbB4hT1oo64T4H96HYct9SQDys75mg6ZXqVULokBBTkrVodcPTKobTVYRassqhVoRHU",
  "key7": "2t1JGQBurAYmcrT3mnB2bWLH5DSYCesQySqan5E6nm6LPLbovfZkbxfmxrZnR118nUAeXbPtvnWovi9j7GScGeFs",
  "key8": "5Wiq31XrUWQosAjVw1vowpoLwaCvXuchWJrevLW3aWoGm4kmfBdyiFLAgizcdwCB67NWgByCrhYeXi26Eka9uU83",
  "key9": "5cvMVUWzKSPRv8hXxQhypysm7XwK5GmNPzSWQypZsGhtmGkTPpeVPc5FrUJU89prPY2bFXHyttpAKLQonebEg77Z",
  "key10": "4xcVQBZpA2kLnAyGNdAnZyLrNU52DmJ7iZkHseHodGcJgmj4EwFppBrKEBFDdWiijmMWdKhL5jotNYWTtPWraqjt",
  "key11": "2sL9a3ik2ELH99DVmh2vDmaWb6h53RhpmL1ZXZ568xUUzJAiFD4reeMsZiCx4T5E8yct9KJYwAvFhWhAQUUiG3yv",
  "key12": "3us6PCUrMirhPyUiTJnLf4aTKVweNJjJh5WFq3UrYwduFZyQ322HcwmFQC9hNTm8JmbakcpbFx5VsnyNP67BPaRS",
  "key13": "4mR3WcW3STAFJsmxh1EFWh6u36LgikPQQSFkZVC9QAV9XgSRcDVcnHgAR977MG9wr7iNAxebQXcZwkmb8hTBVSWM",
  "key14": "otbj6coj3UfN3CBgnQfMKM6sho4kMgd8zcTL8aAUs2sHPfULQKnpHeMYErajYXQ4DJRHAcD4brsxju56fXaoUx2",
  "key15": "2aw6frm2snmzbxe7584HYEh3R4vHwp5BsTrSdiaLxbuqSS75RbAmpDh8jnMT7oe5Quezm8eeCfkoS2WX9Fb5fB9r",
  "key16": "3jdb39XxJSxweFmLonDe9emQwuJfCm4aDg9EXtSvXG9YPuj2CQVQV4Z73MC4P7x5G4dCd5WiP6Bw6u4sjQAWZ8VX",
  "key17": "2TkqJWduG1jTaMZXLgpWEGbe7KWPYVZ5KW97M5EpKdF73JPG9roxyZpBsms9eZaPn2YxheQnQer81Y3h1F9tGEFM",
  "key18": "3FjsFAdzGYEe3Yx6qwaJKrcmpjkxfXL64LZKWEWaaQTYa4P1PcA2Vd58PmxeNsyEtK9ZXmmugVAtdZ6GXeKmbzcA",
  "key19": "5UHznDBLkiy6rgjBSC4A4FeihXeEebSqq1HzUzXzzQfPUVGiJsMvSaM45JvDKuKrSiU8Q7n2ndLcHLWCGMrD4NbD",
  "key20": "cRWSjLk3MLEs5AtcBuqFheujdJPYDtEEY48yPn4bUpizazp6qyK5XrNc9QPzCEjR6mM9MhaEw9iA7efsXfHvWCz",
  "key21": "47iEtNVqvbZPHSdSibxMwzUw79R1pPNuUHZoW3FCmLNGhU4m223kSk6QdiFeTXQeekW7ABEUsjWa3Yt2yK3EHPYs",
  "key22": "4qvuw7joToeAWjvZzvhircg5cUb3THWRyZKz6p7JDZwymXDafxKSgpck8Cwx583gzaG1ZYfWQQrXfBiNQXtC9TjL",
  "key23": "2pS3mF5db7GWB8UKiBvBCvYGEHijkjgSoPDJ3sSR3aimsBBaHgzM66LK8QVStgmPJB9Li3xejmSN6f79dNjCiB5i",
  "key24": "2GNvkixCeKvTEjYwAV5ZsuGD7LdNPQUMgdvxodEeRMQ4Fex8fJSgYEkHBeGbWZuvzR964uC4Z2YDQXP7Md8VJ1Cc",
  "key25": "3hijAdpDM7ts9QUAjVGJSGVxP3maPb2DnhKHTS3MFyvXD3jCm5PypU3dnwGrJ9DZYzDhUXKatQXjAagkWDMMAQ71",
  "key26": "3WjC3Xsrisuscd5Mryc9MZHLv4qpWvQYJasRvinobTJsRWEr4uPrNQqmmxKYB8yhTLgd1hZRnkJFyWDyXgauToy7",
  "key27": "2fnpvG8bFqnh7D2GjyaWmEYfZYtD8vUQa65BcrgHtqfDjdTc8nSWzFbN5praGj7UxR4hnJcSnpQr8rw6t1ssJDKy",
  "key28": "3Bc3gnm8QU67vBRUdLPxZfuofv581pYdJbLpYwcJQ4uuJ8nVTjT8ELLa7DvqwQjTuEMo6hMXJffuZXn8BHUWSZm8",
  "key29": "VUx6b6gEdZPcZKBndQ1UBenvue9qnFntvzUUWYbbgdjXyBcim1t3tFfPjaK2KCS9W672BQcdS8JeDAH15R4a1bB",
  "key30": "2bS9z5Wz5FNR7txWUtCg2yUVYstnWTfHiRytJySqkXQvGnXr5M6boakFtZkYysPsEVKsWJXKkz8jMvAJ7BqpqWuv",
  "key31": "EXNkoZyRNQRwwQTLjvYVzDei7BfQuJpcHwisyZfEBN4rEFwX8Bp22AtkZsWMajErrfJeJ6S3zp8BGXF853LMCdG",
  "key32": "oSvWVz7HbJc7mrCW2p4dUpLDy4RV19anoNvd3SkQwHRRF1hg7CvtGCfYDGGEw2LkeZYQHVTRawcNyJnShMo7GRQ",
  "key33": "2Gfx1D3uoAL6xwSPAQQQVnGshzRjoNLwbHparTicdhPz6x2wepC1rGTf8pdWbBw9su9QXb4rxhkL8m6dXnircttZ",
  "key34": "2fxR4FFNSxeBiScyqqJjnGoXxJjHB56VSfnxjLmoReiAyFL3AFSEjQxaam9ktUD7rXkhGtKtbc2wXzmNiTcmFpFm",
  "key35": "3zUBLTS7MU9yWpPKtW8CfNXAbfPoZdKivkoUYmUr7kJGgiS7CedUzkz6zeB87NMZADZ9P4EFSCqsFRTedt4KLUPX",
  "key36": "D4zvBJDVctKh4pAAeKz1BqUQ5NrYeaTH2AKXoNLrFCMqzotthohByzgKnLfkQ4eymvJf2EuXwmZCF9cYK1Fj91e",
  "key37": "4SCefSWF988xuaGNJ8VzaARwJhBwmLueL22mfcVQEVesDW9YYunU5pQxdvHMEZYVqZXU16W8VvKVaNPdhYVcENnK",
  "key38": "4LQpy6htm1PdxbkeNhWzrurcnuPatEGvp42D6GN7PuW8qLJS8jLnoJvPKYVgc3Hk9mNko5RHjHdTbSBmUBxbghcr",
  "key39": "4HPR4o3RxVmjqXQ7YaUuDUKy189fPsAvttVjZyrhg2QtLSZTuFmJVMh7SUjnfViMCCARzB9moZL6CV73f9HN6sfc",
  "key40": "mEqTxjCSLh5rRzFRSAmm5fxppcacXG4Q5eVN2VShaZDLZCnbjjQo8hi1i3BNPfQxXeBHQnKorDVsfbyunAEYvyP",
  "key41": "3nuyDK193ZtpjJgGAeU3owdjzHhHpJrFpH2TKshrkJ5cgeFYpHA1V88QiCf9mY5qrHbp8ZzUx3iTG4iav9xM7CHN",
  "key42": "34BguxwXgpi1tUoxF4JobdU6avz6fz5nF5JUxBEWA9u51vANXRqXicaKWLEcT8rg5b5LCgkVW26EaJ7jxRY1ARSG",
  "key43": "4DqpkPZJEQghx5jGaBf63hnZmt4xR1ZcZ1Bq6cePuqWarCgnC2co7FMCUBTtDTKyDuppYG797sRuLkSNYPot4trH",
  "key44": "PdRmgRUDbJmqk2n6oXsts4jXwBVsvfquFnitC6oUH6njgs3E8mn96WvGsyyN3fKgf6csxiC2DcKsR44zMEopV5L",
  "key45": "KSJfxNMk9KijL6pMzyGaTfXZJZijAKoRZprJvsMfwP6vdz12V1Ls7rZPHTyQp2hmDiqwDDHXnkn8on24gjuayHr",
  "key46": "Gz1WQYJo3aECf3KyYatFqSRNccnSikJhxHHPR8bWDZk3GdSkQjT4PeekayevEa5hBqiaTTsNQtpjYeK3gzQbfaj",
  "key47": "3DuEJ6rKG68sxGjVmsjEnJTSf7TgTkWhUMh6pkNd7Wdu6Awycu5tptTY7VJqrspVMecXC4ZvvBJSDtFaEgd6K9TX"
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
