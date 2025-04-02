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
    "4AcotNomDqhPRjCoYXHp9JLH5PGk9yUDRTqvDovQpJq9KUkrfKyi2DM9YVfQgV5ActG9uD4pXpo2x4ukiFh677pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JaTDBjaTUVQQrhk1EscdukTzEyU2MsCqAm5U8oHthcs9wGYQoXtwgW5fNjr5x7Hc7RDkGDjiP5u7XnuJdah1HSw",
  "key1": "483wKRgM15nkubBiGAHW3ooT94LEokv9kKZwWUesvznaCCdQHp1i9FysEC23EtdiQekJTAeznhZC9KttVsNqeKuf",
  "key2": "4FjdYfmBics3Z3PmyXNvMgR6jTxyZbwGzsHDGEqtpUh1eFYCuuQtShanGpcEsvBn1H8C22KHdttQr6mBfVBnVska",
  "key3": "4uNCHsmRTY5kDkeQrPke3yUap4oGkZ4NZuc7d9dfLGsL5VCxh1YrfLLGXRA7F7HfkdSbbfwBkY4SvkFQzZjixnAv",
  "key4": "5BiJ6hW7JC619fK1SvYVh3LWuR1nCVgPZaf28isqaYJeiLCXdY7JkG96xrmCraLoqmahB5SG3UFwKq53ooMEoBnK",
  "key5": "5hgqu3cEvLkiuXUsMBf5JCFGoF8DFqyMQxck6gUj9qmqMCnxiqpSiQvZ4142VCnnJB8tXUmKuvyNEJqNZ9q8Sbiw",
  "key6": "cFh6UGfwFPT7u9E4ZBvbrj4r6dNPnVx423JMZYejJ9sQdnkhAcSs24zmzczLNNbTNUL6sLgDzh7x9J3e8wHRfAW",
  "key7": "5Urq1pSDx8sk8GwhkW2dVqAj4zD7EbnEbjbknXpqNEXoX9F21vfoG72KigMAjD9yD1qExZd8zxQ7nETKebtE1TLA",
  "key8": "SfuLxWxyUhZqcuMPdmUsRGuinGbmUmBkA64tZqfi1beiMvzw6vgnGJW27jB5aX5CFNYa3fAStP8LERMVNmvDaqC",
  "key9": "J3ehQsrT4ciPWorY7ee3v3XyCcqv9YAC1cs1ytEeBhNrd1zPmmByuogtpybiqcrEDcRjJahjfsiX1ofXdNzFMEf",
  "key10": "5Kov3bJGHQgPGJsdzB1Zr9NMUftfyJe1UStmbWisQVctimZ6ULbJAgrQwMaimAoRvf8wR8pUCGmuZtpV31hRKWaC",
  "key11": "4SRFuQxtnSVx7YHnsVb1p3eLvrptbbhQoTCaK71vMNzxznszResLdxJ6iR6ddcfSneCWwyWKdaBVXd4S5xFTr1p",
  "key12": "3oaThhBNQXUsWSRASiR9tkt2JmCaWsuJAFFcbvYRV6Sgyf21kLx2wtcen15dyLDxtU5KxBvdokuE3bvCsFr6QudL",
  "key13": "55P1Bo1epg2buHRC5qkjSMZpZUKjsfvrqFgvgmLjeMkXvSQUZLNfyH12ZzhqF5416xqvR3TigutnJNkruuobbaEy",
  "key14": "4KmcczqW6KzxuSYJxQ6katAUJd7DqFuZu7TcwZjF7hedfUCMDEea6cKBpDQkt7AK72fN2tX4gCSo4WBRvsyCUsno",
  "key15": "263cmrFSvRoeDbfsq4aehnNhPhHohom2dsWNhih6gkuJYcMrEU74dX5J4qgHtbot8o34ajYCVNRELAyPppFhV3P3",
  "key16": "3d7y3Te4if8v2fm7QFE7JeKjpsDtjKmn9QzRb8GuShQf2zNi4s52Dsv8GFMFDQgL35TPD3sqqqoLStujW3BRnqdj",
  "key17": "4PNnpxU3wNd3kqhE95EQwNg7YVsAvoKopB5miF9RT4Vi6zkXsdtfCXZ39LWZhdbk4KT2oHpNS8SH5cSKUy8zKuTj",
  "key18": "3tSifXP7jMv4HvNz2ZSUtG5gw1zRTmTjRTJGV6DkbG8jvrUTFSfYC13S2xRMkPGhHwnJ7YVqmpEDaLkicocyaP7e",
  "key19": "488Wgkb6k48AMghxjEp7G2NKyvucJhMbTsQktSQcpFGskaJE5t4XfCWEzobiegN5hjnSBawNMheHUxAmz2zKDjf8",
  "key20": "3hM32qxRNnbAC1WE4e4Wt1NKjopcKw2kWKge71a8RU3mCP5sSXrz2FddfGUSiUmGy8ZbVgaCK45GQRH3tEYF9PqS",
  "key21": "42wyjAMSLddcX9tHwbUUmCkFQx6ADYy4Bf5EHPHb2N2jCc8Sg8MfgrzSC291nJG9pqdv5tqpCozqvgQUQPZfuMe8",
  "key22": "4bPRnhikxK2U3D3PUhsoREeWNRcDv4R8zMm7t34dwz5Nrhk4m87vSBeozahszqjxpzQBDHycTwz25jgZRpZt8qXQ",
  "key23": "2QybfdAh7RtEjom64s2bEt31auMuM4wV3jZ1GLiQshiJFhgq24bm1CHZPsAPohtbtaN64j99Ft82L2pcoseGVebC",
  "key24": "5vABVUs29G8Pa84UAXLRu2EQgk9xnqHyhX73pVfoaV1FEqfbGY3yeD4totAsfYCiz6fBbLz4bcQQAhvrZwzV4joH",
  "key25": "2iAXRoCT4oKtaPAPqr84cNeEGVu7MPWxMmuW3cMVmBZVTBBDao7AyAjQ7zTnmQaFMT3FFks1gsLRkkRHY1TXrfoL",
  "key26": "21x6qyem7Zn7u4kFfkEVpC8VoGWUBaFUcXrDezvSgMEhBsXWZRVTBgEfn2CfeDW8kYbVTd6yGzwApdcjpbAsVGQ1",
  "key27": "3r868C1iLwUDGGKGhRApu7X6MCeBgkx9nhNp15w6Ebq5aYDPtD73KHJorJtsbJJXQBM6b9aNBgMFjLqsPHEuH6gQ",
  "key28": "HYyTRhrYFfVdnDatjVF8PHSGj51R6K1TSkET3wEN1BBSVtekJw3UNnyR4hY5jde2AMWzuxtBAJGLJvG2w1VtEfb",
  "key29": "3pgQDmdrtkTEamhrxFf1hQkzWGyFYBkvUg3hKth9kJ7AD5nkJbVxh6YaV58EPqBfL6xxe5HyX8UUMwqpmnjjLFiR",
  "key30": "5dP3N3XQWxLwBfyg84FuLgGBjRa4MToEEdPYxgCBiZtPWXe3JXR6zr4g6hcxfnpb6kQ1Eb9j6qsucMakckEY5vTw",
  "key31": "Dk1qg3QnZb5rCByG5GjvNopTuJk2zUEqsuZtHgiJxG3S1UXRiytBm8tbmajt1wzDjwG3rXE3G8ZwcEmGTa874HR",
  "key32": "4H7tQDXUeUMWT5nNVkjVPYYYMijh5rpV7jCjDTK3aAf7fT4W64ZZgCpjX93UcJ1onDuazJF5qfeqvfxp1eNx4iW3",
  "key33": "4b3WzU6pghV4b1rWiak49WeQgsz7Sg7qz8dRYYsCCxh7B8p65vJ8GgfeavGKQgEkWcUtHJV45xaLNcABH2LKo8ix",
  "key34": "2VP9skk3VFyVipHvPwscqjoMS9F8wzshiYxz8xEqCb1ZkTFYfiGaFXbZoCzn2CTxujtphbZKChUuBeLCEh3dYirY",
  "key35": "523yFP2p2ZQcEpAibYP77QENJA65buGrYcu4c9J57rD3a7kaAEng5FCCVfUPswheoxbNwRbyuGpVgtVatXrk3H1U",
  "key36": "388uFGwA7PkHRWhnGG6gDMd84Ncn1evwyKBE5xmJBqDMa9VH5eoRC2MVejMRrqJXu735LrW5WDa4XnhYt2yaAyz4",
  "key37": "5EFLSi9tEeXH3fL6y8opzUZrJ5nXPys12NYqNRTuSHvPeiwnYzcDKvEL9puF5mPbkAwZFnxuHPt7EdVU977Pe1XN",
  "key38": "2P1zhJJ674kBEiCCgH3XA1waYkMpuok3sPN9j5Gvo89XWUkYjz8kEaaCg6HDF5uHsZDfETTQ8ZeiqPtY8JyXGgTh",
  "key39": "449gDs2Sw9zFqintMbsH9i18h5kHfDUZYSSPpwvmuo9G1DutSqAqh2m2ubBQDJiNDPjzkuqCTB8AeLSjN2JTLT1e",
  "key40": "dEUjAQw5M9wWEnop8uCBGAEhakTUQ2oW9J1LKGcDSsMKpkabYj4iKGmjpCkwkNsR9JE9nteRtjLCo4zPmfRwRxD"
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
