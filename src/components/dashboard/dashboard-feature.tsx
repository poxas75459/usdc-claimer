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
    "p9sL6m1qhY6gEi6V5j3BtX76MfAX9x7vmoVkhWmrpeZQ3Cp2oas5B79ubyG4GxfF9KH3qZJ3SEihi1Hdko4p1Qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6XpBxE7axxD6ePfRQs2ZDX3oSNNqGSbsz2AXRAsiXBf3j8Ek9gy6S6FHK3vrWsrXmfhscv5nebsFmwicHC2ni4",
  "key1": "2cA4ubR2rrjk21QuwfuFYneLpfFZWmgaSNuczYN4ruJ3GYocNka9TsqVM74MtDwdSyscAyiDrPbJL9ZC9EabKKnG",
  "key2": "LeiTKnVuha8DVWdzyhhWHfSb7X3pLphXKELa4vZhjBzQLzEMTkwRyZjSDoekcZTUdUo2eVGJkf4WF64tAf1YHiN",
  "key3": "iyohEH7CNXXKjShtLdnBgVwqT55PuvWVCRbFsKnKioiFGSiJPTaV6uhX6oLb5HkMKQPWGnPkjEaRTe4dW4z4SCz",
  "key4": "4NkHMeySKCbpoCv4xi9gR5PLNG7gYB9pkgV2b4m5hg85QXL4ZDjHUUcFQxqCRfiHJfPGxqi9P46rYxAA4gcxNCGk",
  "key5": "3K9wKftRgn6VD12XAcTq7m4r68eB4M685KaqiNEV5uh2ryVbt65aqgEoerWDoZU4qdvtdCxZoLCu49CRxQHcUpxR",
  "key6": "41n9kyFxbDs4VVfofx88HC9BxXpT1HptdiXQTy5gi8CTeazBiGduSkd6arQfdA7aWHFLsLQbP8MrR3fbpKGFDsGn",
  "key7": "4RfGrnetQTKgGu38wmhQLB2ok6DJHe4kfe3pbaGZrMJZeEi1CKaABsATZygUpnJTphVFyZwEkYxZGKNrA4wSzsnY",
  "key8": "2XoXjUm4P45M6GszMA9ivGzADVVv1CZPGmT91tCR73JztKQynnMuyzQDzsBCjT3wCTTqWHhTYerhCobp7y88cmMr",
  "key9": "3PBLFxzsqudse49Fs5Kt69eG5mtzw3iuBgtaypsBpAbUcUgZwQ37Ryy4vM4yT2EEk7Rf6ceVNT8wXDJUAEMb1zum",
  "key10": "2WyQ1WT89NDiuEvZoiKv2PsCdfTCvohAYnzAU4PQZDHxirM6XuGqszAtgrwnCgQwego9S22gssMQ3bgKmc4bB3h9",
  "key11": "5maj5Zb8Ae5GqKrMeZS9YJDHcYAczwv7JRmsvgpnp7yWWqDvZw1UFz1Xc32aQjawqMqXJedjAH2CgivwkFy9rWQS",
  "key12": "52qKaP8ZDs6jzSfiDkaPPUiy5qExYtTZqpxg93dPsDDxqfnHtgw56zgLmBqphdwhqSjvbH6syYiBfMqbmirEzn9R",
  "key13": "3Q9aUd4r3C3ZLSw4PqEckjWKgfXJ19d8hgnzCFiS4UG4ouJsCrbzxnYoj9d62Ud6x2EkEUUXHSCLaXaAiJKZ9nhB",
  "key14": "4ZKfDJLZxSs4Vi533ByKABopHfbEUWwGemrV2nZ9WimcaPHNwTN4RXMUQ5rWpdY34Dyy37H55GJkCeuwFramCNbY",
  "key15": "4gawXxGWW5DVz2k73LEKp48jUgK2TXRboZZJgNfaxxHV5hoy5HvLSN41ut9hrAN27sR7XecGTXpoUERNgMMA5W1W",
  "key16": "5EVasaENmavCk3sxNyAzMxXRMng8BNo7Ly3cNJM5UdcQPjrxzJf1HHBbfPH8WFkmqWMwRuYK1qJ3H3nmZdGD23o9",
  "key17": "54Rrc2HmkGkuZDcWdAyNBt2L9bSLo4Ahdhi9GNFwGx9m6qoDmzgcfmfYEsSQwkwVNjnoCYnM8yYFwXiF9pvBpb1V",
  "key18": "56tNuv8Bbr4aKv1oEUkzsfdM3TbLHQSE13FddbQytsNsvwaybNx2d3tbSiZufe7yHNsjCev1qtaijyNq4cDdxRx2",
  "key19": "2yhDCFq1wrk5FWKfNhSJzwz6kaQZsAMjyzUWMiL3VepUmqHhYLiYTiCx7Lg3xkqXcH91SRpU95R5JG839QKzYggJ",
  "key20": "3s5PgPnRmpvxasZEbc5T2r2czdW8H7gYAAPdwQYJQZQUzQdD6TnQmyvJsQxh5qTTYbwbziNZzFjRo52Goixf3Xwd",
  "key21": "JYWnpmQh8vjJDhKMRkjuJVy7jc6i8L3fL23zKovumxgu6ybpre7hKTso9DQEaSJJE6Npyd2xfH9GuNpwYyoUcUF",
  "key22": "xv7ySdtvTxm5oPEXFUBqgqaGJRjeoFgGwtjDtErS3Yyafpwycj49N6Y9yEjhm4HtkHMgfus8UsSPTk7ijhJUhnD",
  "key23": "ZbReZ6vppiXNtuchsrs3j7D4rV4EyuTcmGQZV5UA18KzQJSYb9ToX1FpUXBcnvjiVJSESFwaKmrWFFzvv1pFqJr",
  "key24": "3SmFAy1wmfJTpk2RHZTvg4iwhYeaSznMdWjuiuiTRQd76JgKbq7uUuAwxVDCWR15GnrjrHbqe5dt4jN4PzpfFKst",
  "key25": "2oRLkwcH3jQcUbEUKPrzQpsEt7eLW6KZazpLchioUFqte2MUhkvfdmNWAsNBhorSg2pSQAXcZkpKRtcuYnX81cfZ",
  "key26": "32FdnXwNoszXWmVoEexKLCioBb6EDA8ZnriarQiNJ7FxbGJ3xiAMcchbP8oDBfNL5ppBuLzspcXHXjArniSi5zpL",
  "key27": "5wfWeoBxANyZahBAU45SF9ASXFMTcQUL1fEGsqZrCQSpEf6RSKZj1MTfPkZ17ZVm3RQXfm1eceZjyLeRmaCKsqFz",
  "key28": "4sbFC4vxMCeG7Aa2B3sZmfxtt81yR8M5vct6e8BoQNd13TFwkaektXnD9xZ6utg8q2ehuDooKN5zZJXtrG2Qoydp",
  "key29": "5wpstkGNG95QCXCvGuKxnC4DtfvS3NB7akBeFZNrpYyqhvG5mVSXRnxRnMFo4gzyGereWecZhmVE5QFMeNPpmDrF",
  "key30": "2SWqN2dcBfTXRF52uy6jPo6ZRhLdFSp2us1UkKU7D5yD1fE1TRGAo6FfHHrfRtpeRmTfG8LSRX5G1Fw9URYAXga2",
  "key31": "2dqr5W2TgJWTgEqnWxJjxHynE4YjkB94UZP949ZPgWycBWvYPjh91LqDsCVsYMTzpyEAtJUXPWBYosozdfeeh5hp",
  "key32": "5mbLeoe2QyqahqhB933erQTXsMQjqYSNJiERezUdnxBZyfwfQNBkpqaJz57PVE6np8c4zi7KbVVDDf82tospr9nM",
  "key33": "5oMEfdLx7MyMkaPvwBsVx2L8xz5t17u3XGVfie25t2xbQ9WMgoepXcCWfZ7Ar8Muj36sQBXNaAjcEB2vEeaGYY7"
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
