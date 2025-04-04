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
    "hxpdkqgm5h4K8b4o2637aFZURG6baFicUEZ7PuHFCHbSPbKZJyDrCrnS6rHSFPVWDak4myA7Ch7PHjF9xkVCBQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pGxgSbYN7mK3nA72b3WLQfZ2nnUTvvuKn8BhVy2i6vkNqXNBHZWwUUSwkuWurM87HaaLFRZNfWPtg3pd6hYqG2m",
  "key1": "5UQoQG9wCnhHZPFRLCucq7krYyowEZjgzutEfLKm5BgsqpgxiK9dW73bzRfh2GpCNNH52MgTSp7GJJNRVcf9hucy",
  "key2": "2avTs6NSyRCVM3SX4zTeyDUxEkHBWtoM9SfW7BvcPDraf5HLrkGmEdByXPfiPtUP77CFEQkEpnhmskHEjChjeaAG",
  "key3": "55yFQX6a18KK17MQeJjsA5RAPbo2KQminjEVG5pA24ZmEXTnePYzkWrQqss4xV9EbMGmDL1dch7nyZRr6WsVivev",
  "key4": "67G7ZJvNZn2F6Kav2erCrbF4uRanbjVUz2M6mksECUgqVR2E3ZKeLVuDSvBoZf1g97kdCy6B3JFtiBkTvgeib3jf",
  "key5": "2FZeGcJC6KHNWydSXCeVDoqzbGSBMWaDgC6YW8x5o69b3PbtyTB7rohwFZsdTGdRRD1hoG4Ed2scM47v45Sr7pti",
  "key6": "49gERD8EqhsQPEUAXx5KZSXA3vzWXxDjNLXvws75i8q1KEGjcQMiuDFuukosSCRWo3WGaoTk7LeBAuD4gPNBRkvT",
  "key7": "5p3SZLEDQFyJ2WBJghHCXELpCR2YowE9p6D4ZiVUGa4bz29xS5sWojZaMiAmtehA2outYPTsh8nssSHgXL7spVd6",
  "key8": "2ZNriaCv5qj5F5Hw4H71nQjxW974iigUFafDRXuVeaGrUTe21QMaWXPzXezi9rVSWZ24tbiuhn2Yir53aZdu1oaR",
  "key9": "vHuceVsAgLXTvNSozfJPvPga1kfsWvzDXGv7eW6kV2trNb5UsRvbcknKkZdrkQsPHBhx49YB3jmMsdjJtBMjWPV",
  "key10": "441fiUk3Jpi3kHKBRyZM8tUuyELLdmK9njzJPVRTVUWBbM8sszzvNUukSGnoHZqCVzLSeY2NBZ3HtCEreAZkoxdC",
  "key11": "5acNkKzSeEa6Ck7yutCjXh46BtjYQ1hzGmne9LkStigUUSy1RS8vh7b5DcVW9PJzVBqqZrBRR5NtbS6pAD92f4p",
  "key12": "2MQJUwj2dRzC1g1yfQyiqH2B4K5b43XU4PjU6JZ8v4BeUGCrdPxE1ZBxhus5pb6zVhgfywPfb8wvpc9oqX2Ben9A",
  "key13": "5DS92vUQDqhxPgsJMp64FU49Po5KzN3PYi1qscRiyC4kSRMH3SUe3XGaSFJSf5eMFzYknTmxTQfzi1ni8MKj5Mmb",
  "key14": "5BavoHFiNScaGVkmnJYhsYGhBZbSUwjDQfCjQHgtyrWp5fufzNacUYxErys5yRfnNqfQz3vYN8RGpmAD9kvYcevc",
  "key15": "4cG38s3UfZbfXdDLf42QsYWejsJjLd9z1P9HZwmP67CFNCBC5YmEi1c6nUn1nrsxqEHggoMQbiown2LL87WKygSu",
  "key16": "23d2Vfj8bGnUjYxtRW8VPE9nAVJ8UTHYCxGmUvTHe9DoUdxm5D8UnidFCKe1x5Q41FSxJN3onWtC3rVihX3t1LL2",
  "key17": "5LAiyofZwUmqxDHYimsp66NvBd16XDKedtQNkg9kPzwwsJ5kwASWDwC2Jh8AjtLouuyPLD6jRA1BDkuCRpQANoDy",
  "key18": "4fujjJTmv1wEkMcJREmuTrMvSrYQuubGVUhF5HCcifsjTej66uo7bpuArxMxgkipaL6Mpg9bjYWhU7nu9GckvzQS",
  "key19": "492fGe7E8NwFRfqhj13XxvGrpewPXdQby2ESVhnXfC5bFiwSLEd7Tod6K74JmJfh2kdbShR26CLvvqL1Wh3gFECF",
  "key20": "5gXyBBpryAR6sXXPCYCGSsMjiGWsyjYEBMiDZQKCsSaV7bjMNPXADau2uFfMjyUxqgiJRseA55ogMiCbLAgw1RAe",
  "key21": "4HyD7rdJ4wmttKyCEksweXufzJey858B9We5CVnrLXn9jktt2wASTA7zdZY2n8tTaanzeMfPmfb28hET1UxUaGwW",
  "key22": "a5BXxgqKjkS6JTXz6yNLej5M41WNPNXHKggxaAavY3hGEVMyyzj7P5m8noLhSwDWwJuWF1XQMhNNZY3zUQo3Mcz",
  "key23": "Nmc9rw1QqFUfXKeaRrUrdygkg3fU4Kd8LyhzHPRyiaAsDA7Z2UfftDm4zko8hun6DyzXuQ1gRKPCGqX7wENaARA",
  "key24": "2eGPCYZGpnVSyA6L44whmr7oHcvNsUdq8L8fYeQosSWexTMRFGthwDTqgnSqEYXfgFzKnDaeN3cSUT4BAX9yc9Qi",
  "key25": "41XkX35BLUjRozxwioP95qFtGfY1gduo98PxWxqWyfnmiPGFxY9rE5Zu3B4UeF6NJb4D59X6M8zjgRkxPBYcAk4E",
  "key26": "5Nh9MPH7moefsi8uyh5JgeRrq6DibUjnHM2J8LN5QRNWkgZ2KcbeEqVNy3B3JWnyyUcvYk6NhwwHW7b2bwPBU1d1",
  "key27": "2H45sTago7va9ggzaFWS2e2N9p47vAQiA5DLrTtnoxWsXegc581Ery87PtTCWxRmTA9tVJVkxPm23khoagm3YiQu",
  "key28": "NQdgRCWge9ViLFjiDMLciMKG4c6GuxohNUJpp2h68YQqjT6oEifg6YGTygEaE7pvhxuAyryxBbvE8MFYto2MpXc",
  "key29": "5SWxMjbk67jx1y8DgJRFSwUhWP2zMtGoVaVM87eUnfdCD1knUrzw2j3zMU7tu1hoiEvxvJeeQ92SnmpcS97Hin11",
  "key30": "3oPxJQyDcFaBbxKznzjhEiTM4X7yKxCFJFKRLfb12kVmTTsQQ4vfvAnTkarB4dPb5GQWNSxVfBhZzXD8bijCqsK4",
  "key31": "41PGhp7gwXag2jnHfeuHaHs3zFDqzZwkuDkkJsMyQXRNvsF9t4ztNXAm8MpxNkQHyYvhzwkSTQfLN6y8Q43Hkdso",
  "key32": "42pkiWQLKLtvuvV2y1LYXbdoHcjQasanWQdNpjmoqgRZ3Q9JKPCx1bimdY787AprAor1WRFr3FGd5ZAmLmvgHw8Z",
  "key33": "3eJJLDfAoxd64sfrBM8BN89aa6Piqu4rSrXzcxwfPHk7gGCad2iHjMKegqs9oYHeStt88zzFcPKUvgmyAZ4zT6kX",
  "key34": "jrtvXugqQeetuvmvEp7K4yrLD21bMc8wQohDerPNsvrn7rkUyVEZXKrHvKN7SQpLskwLVXUUPgsQv12eWpGKrih",
  "key35": "53XztSvwyBcRuodihpXaMkQH4J4t3p6Pzdx2BLAmKoBtQrqEKprnGdjLqjvY4N3w1nQeHVqr4UtcwwBoQ3hoNbZU",
  "key36": "55AHZ15mATnvPav6EJKSfJZBZ7DXzdfxWD52fK9MVGRzcJXurck4PY6Jk2Nm1p95ZD2hzc6Ab8X1JGq8B7MxUsAy"
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
