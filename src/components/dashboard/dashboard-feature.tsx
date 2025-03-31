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
    "3xHLrVqW3VZ4f2ruQKXq9x3LZ6B5Arpmu5aLFX6xiXBGgWdNBS46rBaGZPNo9qacbMxD9nkZprQ8haDfw3G9HaeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VXCV7aqLWVpuScQQpwHfqnNpjJzCEw4PxxKpQ2sSPaJTQEkLrtckkVxC1m8s1zeysVvMh291mSaJDoskJ64NZDT",
  "key1": "r81qCB9QNnxxLGMLKbshHbgRp8qKwvNXAvVxd6BQYoVqWkZqaMdx4E87skJSGFpyWhZXqUW86rnFJGLKtcy2aNf",
  "key2": "2syzNqvZYMNLfdsZJhR2qhhUcTFCjheEGbNN5AXJtb7pNTB7woRVuEEw7gq4Q3u8bQ4W4nuQd7XjhzXqvpjHuytG",
  "key3": "4NYcKm5A3JgXvWkrmBdVGsQKvFVeuV77JvbTYpMuXFRZJ9T8maJ7QgpXL1LjPCYsBVRKzidHYDtawwS2HgFiZ7My",
  "key4": "2d8w73HVpT3FSrHs7HtLjSLpwjM48HJkvkTo4vVygWxxkN1EqT1DNRvp3Nek6tbtoLSfcYDMWBsLsYBRDbv5ZkX7",
  "key5": "X4YB8Y6HfhuZcTQNJYcw1h37xoXAuhHnysxfTTgAfM95tV7XacgvXCEMbRGxHxq6Xw9XKMyG3XUSkcy1f1xWp7F",
  "key6": "uQeZtS3LcrSEV4cADzsqnNhY8NWond22BcHmaFrXzBidz8kfi1fzRuHKvNHJwrDft8vpaTE4oGYTXQvd7kGn3os",
  "key7": "dm6uxNKCFEvr4AgJZTmz8htYa4hawHvciUx2YX4MUMLDr7x8C1dhpTV5dzEBX2a1Wb1mGMLhFE3cLbrGt5T52mx",
  "key8": "tvQ7Vzt83S9ePX8Qnp8KXRSu3pCJfCXqUvy6vo6d1Q1gdyzATgyQErGGeanMZoHYeAWCoYJwkKWr7hdL3fZBWNB",
  "key9": "6k7m55SxdfCjP4GAJNrKuxKK3XS9p5fx8oWFmTy43hF5GCo8R66kVDk1EWSS5hSwBdQw2cm36nvS8NXFEpba2nd",
  "key10": "45FV9SnPWPpUrFtHVKupsS1zZ2Kem7RroptTF4DABt5hBTepTXFmcqWJ2NBWtwd5wg6jjKmQe1wzdzHef1PJ6iZ9",
  "key11": "3NRuNQf6wU6hoEw3NBYUiDhpFAFweSqSuW4Bdpo6H9Zx4yiXcgfZ2tXTnymF28wkwzKmSMXx3cdhD6gP6cM2gn1U",
  "key12": "463iDUAjzqYWhTZHqfW8rUaeB8mSUUzccCqqdreSK9r5vakNxtvDiZ213z438zr4hWMHnkyvn9JU7n86Ncnb1SVY",
  "key13": "M9ovW1beEhBEyHnFSJePfAdYeezytZjN3nSg5g6dYj52Sz4JLnRbmsYSPbDYv8neHcxP8wbhTFkEH9EwmwvESbW",
  "key14": "5EcFiGV21TFUPa4zyYfBgNn2YhpgmgniwvcxwYZmQR1ZaMF5PGP9JBdduzEqAcanbvTX9xEMHua729dqQQ6stjn",
  "key15": "4azvhmoJcoQ1Jkp67ntwoQB4gyYz513bWEChPgohBamQgywMxUju5PabXyKZH3UtwhTMTgaBBK18G1Y99GNRvA51",
  "key16": "5XcnsJyA4jEhkEhgKS2LDptiiDTe5JogXq18XCwiid4YvQxSyAmdrw8L7YXX1zJfa8ScPuCTsTRHMgUiu8QEHuVF",
  "key17": "Q5V5wnRPysXis58dki7iK7tCfGwNa6jMbP7x2Zj19oKgg7bJ69KLZA7m3vnFVYryVRNh3DcTvWGomCUtGNNbTe4",
  "key18": "gbkM886opN7DbXL9JrFmEZgQDcrQ4jNMi6QbPuKB18RxdroUQyCTySKSiuMpMy2Z41WMyZnrMyvgXKvxbuxsPge",
  "key19": "3zi9MSv5pGos9HafWpQoQFGY85H2yyEyHZoCXDNTcuxLwZ1ofNd993qqhxqZNxH9LB9KAtjuHCkX259c5hALCZas",
  "key20": "2ZjFhppA4JnMu3MiUyZxZckhwyJ6mrHetEvZn8PZrZZWNGDu1yWkMYxx1CebPAUSG8ofpnED6MBxLinGJduiNyzp",
  "key21": "5uDsNdSnjTqxJPmULkcEvKdNycbc46WEuCpFzji6GL4NysqqZZhWSieMC7zRhqGSqVj3sHwvJqwxStheSxzBoZWi",
  "key22": "37JFR76T8pwVjC5vKwfjF3CM7AwAyodSJ9WiPTbnYZvHYZvFC7uVNgreYf2YbNx2ry4PwMpaCHFHt4c9i3jQ69g9",
  "key23": "5rpMZVDU13ghSN9sQ2uU5hQyvNYm3Y4tmnmbq7Xre1mBJHF3fBx2kHVoudzsk3mmP77iN6CVwjSMz8Mi4qKBHUan",
  "key24": "4awRKeuyHZtJFtcMQDBF7pnuP3DCdEKhVmuNgRB6Hz1feG6NWDRwMYp7A2CttF7qBm1EgkwxwrTttzNEwssNfo6x",
  "key25": "5Dpbf8jbJY7pCbbgAgAMRDDmEaYLksx4bmLd5uBx96NUhUxxRRinkmdCDbvGGFNmC2Ezct9mkaEhd2CS5gAik4uC",
  "key26": "5NwjhV4YQijmxwMxzNcksfKndgH223CvujS7SRhjAaSvRWBKaWnahD8h7RYrZeTiSqdvLmBUsRpqubGppbPmb5S6",
  "key27": "Yt7e8qfprQJ1WuQ2NaGARmaqZR5bbf5QNMPb4cfvYSCFPFciWZdCE4dfsjiQLXsL6R4BNboiW7JQ3LazqkBRHRD",
  "key28": "51jwbLu7GwmaTjMPLVbKK7XuDB6kxAHAtRzXa7DEBVXNTBUFXQNcvfSzjh1edLbqgkvRB4BQ3TG3qrV43mL4G6yi",
  "key29": "2GJCqrrpRPNePrNRYhRGwrNnHW33AVoguhPb1dJbedWqroBPkF7cWeru54mDK3DuNcNMfqpLtvDGgEAL9bLkc2mG",
  "key30": "gGWUL1jLfJs22QvADsoKK6tuqi3FzbxmhLsnLZFMWUga6iWxbrWZkNmtC4GVgM8RZX3n8oa1wZVNtoPKukuPYyH",
  "key31": "4NyaavK5JEpLqPkAk3XLyJuSF3m8cZvKo1oW9mu679c9HaCGLuG3hQeLJSAuxS2UkweTG7JK595sqyX2v64r1yVy",
  "key32": "4LWuQFFc8Aj5nCjNxo1fLhAY4TtdUoWeSVr9DCjDfz2hY3cWynAokU9imNPf5qVm2Qe4duWa9SnWUfTAwGWdtoB5",
  "key33": "4m19tiCKhKEDySEx3e34HPcmgkgkH6sR14GdfV9EZsu4qa21n8dzwX7JHqXfatFuo1FiGJZc98SeLsEd5whgNLyq",
  "key34": "2cDDcM8MxRrbdEK8NBjCc72PpPZJQ3SpGPMvtMNscXnknKgtQawo2xDNMieC1vRtW3283txHGE9fhm8A7omHQxsu",
  "key35": "55hB4TgfAWzyFyXW6VTTZKgxqo8G4o4xp8ZKaH6CkszMWFxNAWLHza6QPxMfDnopPnfT8YSo94CYaTVkoetfcidm",
  "key36": "2AkX3X9zV8q4gW7LutGWGeFchuYavDhT5787tHzbkiq1fWedfrzYusatW31FrRN2tWQLuycsB5T6MCAXoDV14hEK",
  "key37": "48yh22pcQKeM1HcnZkjAU1nmV28wMcvPXQeFZntRZ3YNihvXg3SkGz9p7ZLTZCbavq3x9NnoGQcUE2jAhYgUGDZz",
  "key38": "ABFVWBdAgwpSgWT13kUzXryQNsqkEQ79yjG7twDrptLRqVFYWysSwgXe7zSqn4eXzguLS1m1yWvRmfEeqv13niv",
  "key39": "2nvWGuF5j2NqfrBA5NvN7T12sKfmV3LYc43ajPUUGKvKwJ6NL2PKiK4fvEk8gxmSegxsmCdKsSjFpZEDt92cZsrv",
  "key40": "gbjzXWGsvNV4f8cJ4q2MrpupprLfzbgMYL3rZDXoHoFPB3B241ZwzREimQEKhQC65r9dMfp8RMYyE7y9yVzt5mf",
  "key41": "43Hdi7UDiFvJftK1PMV1KYCAUgzKpTGDtGrwYyB96aLHHB8boqcc58o1SiBLzXBVTPrRAHgteLVqpbJraX9Y5aCw",
  "key42": "j4bHeWtwNxWTyFc5Yx2ks8ykgNpow6xwarrs8G5tAQg3R28AB7d3cyHghEUd3GbS7j1mtChL1hFxxLUho2iBYwJ",
  "key43": "3nYDKwgHH5pP3fwE7gsF5ZHRJxJStFnTyKLvrYJj5CvFWoN9MYke7sWeNi6GpDKfDyubDL4FQUpk1aTq7xEw69Wv",
  "key44": "2RK5iqKej3Sah7urxSpeF2PtaRrUNWjbU6thP4gkoJYj6U4xJq7BXoS4DUjZvJybBJD34yDwgdZB5KZzcUoubsoc",
  "key45": "5Ltc7mdwvyCXGHo5zkhu1fjcn1hhho5HrWa6TUzjmu7WDYgQYRdCP1CM7HkDGBMLjLgpwrF3xW1oLyCsAEqNXnRZ"
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
