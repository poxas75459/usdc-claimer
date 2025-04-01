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
    "14bBoyoJk8Q5kH2cNLy16YgUA2nnjHPKSnouasCfat9fnpUSWVxhWkBPE1Bhjgkd91Ds4cpDz93VsfAp3NTUEpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwsXqoSpe3hGukKvgt685p5oTurTNx4qPFTPoaPP1yFNQQzPu4LBYUjEWdHMpURt9ZmLdLUH49ySRgMoh6sLSrB",
  "key1": "2NcHajsiBgeQYAvt3iBUhJMACPyYDxZnFkGh2XkUfH1yALPnn5Ye8Q3eiqyFgxDr94VSaSGrp4ebnDJCsZ8qiRTh",
  "key2": "4oUizbnL7BPtFkG9QSEmphCDsLcYbXrUqSAshPZKTcqxx6NUns55vpHSdbcgvLSBCXMTxCKhMWR7zQPEam4Dpt9Z",
  "key3": "4RR1opd2kXYkxqCj1oLhvkNB6LUHpA3VbRRpa7ooiGggtfEpfjFHPF1adwcq9jJTd4L19n1g3asLwDzatPJ2yQWE",
  "key4": "424em54nw3GzzR6v8g3kmjVFN7ovGYcS675xwcvbjbHBVjyuAMoT9bzWLJjeRs2s9tgaWJU4agpJzPtdaDhE5GgL",
  "key5": "5XAsJYGc7BQm3cyfLbVoToVbnkRfVEUWN8qiwDi2uzTiyMEkphQSMSYc3kQ5GTJbEmScxFX28NkLTCMx5j9paKEa",
  "key6": "2pXZEHP2NwRxQMjkKNziAXpqvLZsmaTYBztfY9DdPymESkEZpa5aSFJk1sPjLHzFNpzgSRkDBWvEkKFhWzj3p9NE",
  "key7": "2b41Uzv82iRfSe78SxKjGDc39tR2e4A9ub7v6vu8zLHytS5FqjNzRzahZsEZePNcpidPpsfnzdoxqUEbNE2CN8z4",
  "key8": "5fn66dGgxKqTnjgrhV4TN3hvigupvahWnnFf1Pa6eXx3dWrcMxybffNRL1mx26n6FPsunQd79RA6CSRNA31ZerUW",
  "key9": "4q8Ps1QGjwujKWxFx9TvsGJVc5zR5JMf8myNdFtpmQLfkqedUzoeSRga7Pi2vvLsPwyBbcBWGtpwa54gkv2dBE1j",
  "key10": "2DGBPZp4z5wKN4QRuwo9ozEvuLUP71VAWVsXAqWWDfH7Txrmw2fE4XSwWnCJaACqocwSc1cYjtuS6yaHX68pSut4",
  "key11": "5tqkCRokS3cUE4JdcCGQjuPgLfNLcjcTS86VbmrJPFhrPDhEvvZMbK9tZsgxypugSQMLJ5AMNbTG2HWR4qhkw6Cq",
  "key12": "4cDHHimT88CtzzUHD4rzkxbi43nQ8eE2GhnuzmmJU3cpeo2z4kqhdi6W8yZz68QFEQ8PA5AiHd5PhHvYmMdgykJG",
  "key13": "3aqSh8dHJSRjiMmYsF7zjx24jw3F5vRLoiSjjaKsy2Ras14nwt1Z7ThS1oEZPRLSM5JX7GALRxiHUxoaRpedvd6H",
  "key14": "2irsf5a3wBJmBwdnPVH4qdrGWerJiEKb8H5u4uCBHhjqmDQ1K8BTi1YswouKB34tdq1kq3NbUkZmUaUrR4zqXjcf",
  "key15": "3VRFUydHB1WWBk6YY8HjbV69ngE41UZKp1tk3C3fFecoMGQmXp6cGBrwRKv36efdUSTN3adsygNMgs55vjZHabtz",
  "key16": "4jSndYSU1KVrd8gDBpo46cgQ96EynWmgDb9YAM1h6mmXPBrM2rMnGnDBdiBjuBEYztSX3h2qf1z8fBtoLKgXwuDR",
  "key17": "2UH1FmQfk6dMivpLcPWRtNLEkfTDDDdRbYwW2aevVv5rfYsXcUvCt7gUTMqDDxtyft9v61yJpEQvxPQuWoSgwJus",
  "key18": "66V3buD2W7tss4BKPMbyUMvzFTGp1p6HuxasoWXUoJmPYRzLL7PL3yjRirdD8yP38xj2C5j7TUWoQirpc7ATfsBH",
  "key19": "2rhH5nfVyueJD6oXSnmv4QyxGnZdD5HFz6Pvri55VtpcF8qZpTU2iHKVzaMgf9KF5yqPGGxaBLfU4S8XALoQEmQa",
  "key20": "65gQLgXYD6ngmKzPoBwEceqaQfthqYrA69JkcbX9i2QKkwxPb6WPL8azGKYq4fVqbbc9jZfbkUNsUiA6nrAtpRXG",
  "key21": "39x2NSPj41bw6SLQtyCneJKjoUyqrGc97KJ7552RXoefx4wWJc3PhvwU1yU9cuDJpfA1hiM9QSV1z7wGR5BA35d6",
  "key22": "2KU9LQD1PGxqhjXSCbat8ToMxs9wBCE12yNZQNDkCWTBtfKJ7xZWFh2G4ypriGyZwjmdX3Argq7v8BQvnC4gjBub",
  "key23": "2hkSHaAam5fUEfWs5y9JupCNYJSzDKZCfqwMPdXrtMPdoECQ2W6zw7V7vekyxT9Y1euinwX8YBYizq9QJLwpMid1",
  "key24": "4APhyjwS23TQEbAEAUtDx8dhSm2dkRVSpgAuH7oZMQMBGdbyNtJdR39hap32BzPYMUmdMyCk1MrNP1c6u5Cn9Nos",
  "key25": "4558fonJWWAFXYFh9HPgZ586jAhhMP9zEqg5JUVWJDzeGunYUhtEAZT4djG7a5MFNZoz6YvCKShekVJLzx9qMvrJ",
  "key26": "6NfP8xLbTk35oWhptuH1MpTeje7qfEmtTsC1vSMEQ4fYmrjnVi35UA9dJohhC9kLbmUz3aBNvYLb7y1XjkyPF3q",
  "key27": "1PiGFf4BWbJLCp17vrMaZ3aGyJhi2kAgni96Nn7KysKXvxtdMTTsjqBGPiVZmBuuX5FvajcTjvW8aq8Gt5kjQjm",
  "key28": "2kkYKJRhQ8YboMKZQsPq4Xg6QHa2Qjk8iw3qCfxkfPHRsB5hFwpxU74FLW5d6cRsJ12AcMFptL85zDXYT7JXnkNm",
  "key29": "2K3J8zhpJgiqs6fTxA4CzXFTU6JUmrfr5NKLkbZVUEfj9vfUsPBdRJH9VooPxyg4zZ7cpUvMY5x4gDFBUDxyWoiQ",
  "key30": "27xWi5voDyyEChks6WjFf8Zo9mS1XJgXCYjmF8qNiTDHHiBkDYRt8Limwxmi9EH3nZGQBgDCQNmMqA9pCGGp3a82",
  "key31": "3y6V1QF8pJcFBLVL5xFa3898MCE4Y9AbafZEnKrsuGqVsRBYErxMiELrFEHNuZUrd652my1nfzdNrsGBCDeX44Ry",
  "key32": "5LjwECXMb3dyz2HUV5anBiDnSk2eoR18dCUhzFcp8Ztr8wLQd4PXcuRPntu1V68PBYbZm7Nk4rhsxNrXHr1QSkYL",
  "key33": "2Sq4qtZRXqJp1vU3S9F27jtU7wyysaTAXxCBDGHHgsk16G144BShtZaigvHVF4P5DGyyZyWPJGipf1mgNJrmHEmJ",
  "key34": "3JJ6BroBq1f1cZS2M89ATHsyySA7KynA23Gdme11MskP7VpboENS8sNNFbMWQUyTunbCHuNyHNJ8ZxR6oVzhpX4U",
  "key35": "4puD7xmFh33V6ZGXiJs787uWnh88WjvUvTCufYfnyTEc4sETBBgDwR1NJ1ZaXqz9xBg1RkVRTtXYkFy5aWncDJ5n"
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
