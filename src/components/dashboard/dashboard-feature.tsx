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
    "2XaUxFctp6Z1s4c5NbH9mjGTgE8BMPqxzyAXt8iYYx6Dw5wPAjVLC8paVNQTmNbxHfxMciQiDexgudnaziwd26Bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WaL3rBkus8ozT97BcBcfk76bfUzagXUNEhGciS51c4z2Pgsf7UjGom46Riq5bA76vrn41zYU77n2k1cD7VLnVD7",
  "key1": "4nJRdg6KHEKFfpwMiHCwpDPbGvqgA1JW4xvUzwSVpNuATcCAy1vAnTP9XyZV44nJjQbs9ex59T5Bw3Yw6Y5W8ioV",
  "key2": "3q6L5KR6t2pcWPA8eHdx43wCnr3ed6J1NrCATjsKvuT5tYZeUiLHpqVbhSNkohdnA8zR5QNitnQHBCRaVkC2pqgn",
  "key3": "24VZL8JvyjH6tXRNf7Ex6pafgJHzCU6DPaxEi6Qoe2JxKm77JNDtwChL1u7aap9rcGr5CpbnxeQYG8UbxWmvKUx3",
  "key4": "2vFpb6ziSUujME7PV937uqE7oYD8qirKs5qtGhGgtpXp4DVUzfDCRzqm56hHiioDAFsz2Qja1egZ9Ed4YayvYtYj",
  "key5": "2iHNXxi3c5Fahy29CpHJcRUJHa17wBiFuGwRdbE8VaAUy6gg5g3ttYr7zVrr3hxgTDykAapnrUMh8KZeBJNwvU3R",
  "key6": "2xTyDyGhYSiUT1wqLPx7nTZ15135cXrm9QNn3BoRaHc6YJv5a2sS9sRHHJtveUwwS5MBUdK1GoJ1enCNj1ZwqrKz",
  "key7": "3CPhcadCB1RjsRvfnEm27LbixWduu3gC8xdzjsef3Uj3itiwN6VgtA8Bu8QvxmumTXDsi8owM82QZjyrZBC6zgmr",
  "key8": "3zSavupShdrZWTUVy7VAftN6N8xynxuj41rn2j9zjtSUoas1a5u22Dm1qmoJQKeECLE28r4RqyZbnZZQAhAdn3Sq",
  "key9": "vVh4q61b31rqp98tYoTXTWUpccVvrcFQcJJYM4FoyrrZz5RRsKSbeh1KeV1jYsMum4iF42oJfdQzrgDzuuapPSg",
  "key10": "5AQSwh7SVbCo5AvUjj3Du2WybEAMiSeqBoq7i771zdbfmNZZx1QVtVv6KAnKzsJTyaYB1nxctnzrsJPT9Vs9W8jM",
  "key11": "2YxJMdKzUKJZPkzF9vKbGFXPFX6gLr71fdCXm5uy4qPBYmkxHcWGFgmgupUMqbiTNqifb7qkQbL9gVmhL76LxCai",
  "key12": "puVzNef8kzUm62LLBYp55UDg29sD5KQisqZPr2NmjwQ4M9aJ2UbjKvRrVF1jHQfmxePAMPfPQigrJ4jicBmHYad",
  "key13": "4dVDgLxXZzZdukQhVYQApeLkN2Ej9swKxDVFXr5tHmT5LVgCLKxbXqewuAQpx2dq57WDy8VqFaxH5xyJDuAup5zj",
  "key14": "3LJWuBdrBjhyg7oJgTgUvLtY1CxUqchzqLs3Zw3AwJLvZH1gufmmHxHXSjNNSxuFACjydiyrfYsiEABYHinXKJMD",
  "key15": "UcA2AB3X2395FNYv7jLZSorZ6sX8LM9R3zXtRDB9vgcYDkRgJKhDQy5NnRcpWRuCMF6gL4FMVcWrkL7Arb2uNSS",
  "key16": "5xHbPjsTJgyjzba9tzEkuHK7BYgKWWto9LCH2dE51L64zkmqPz4PH82a8JhyQWctNRCipAMRNXsyjq3yYN8iAhQ6",
  "key17": "5RtsfYhtimbHPPwxmXdsd3LyQ14kvzExq9Cm2f3ELixspmoMrQ2wH5NrevqWaPRgo3kpGxNxKFVvD5dcnMcF2RgE",
  "key18": "5Rw8v3LAUNNhrG6vLFaTC4rKaMyAj8cqt8PDVHr3EXKkXoZHnArr5T9oqCCuEgmttXMVZE8FqQY7GwLfif7LxzYx",
  "key19": "65p2eMGbpts5iqq1HdVWppZmv8JA54QMA7QtEsK3Q3f3qQQBYYAdZkZ2HRV7YcBW7jMkM2A2uB3HLwR1eYU9WH2g",
  "key20": "2ZKSWpgMBVGcVi1RH36FFWPd8XNK3ZJ7b3X7ceMpr8VDgxGCrXytyK2DTSD1hyPVzcGepLvxePffjxyF86NNiWwy",
  "key21": "2bAR3FVPf4q3VS1PdHtjUXhfhV7oQbmVtqdpMeQChFfiwww2FGFn7x9QGGY5hDAPj6zffe9L19EuAhoBxHYvvrmc",
  "key22": "5YxJ4XV1NziUsqpFb5CZwNvMmERiQDqcEPqQQ492wYRBciSKdt1ubigEma9mfXG5c72t6EUqjLdh876ucBNgkicN",
  "key23": "2KNUNDKuATXevwzpTVXgvPTnBXPjAnVaER3Zz1VZfwKtXQGsS8cdoMMDURTKz99Mbmc5JZoVZ8L95NdNCt5xmiiV",
  "key24": "3UHHx1w4HxKUFtbPmJhWPzpzgS2Q6FP64he5R96joyGUq3VXLExFqV9dnW38wD4MrHWX62ozZVtTbeR5uY947uSZ",
  "key25": "TmtXPqugqo7mNfRVUDyrxLQUkLzS7kUbTVJbL7qHeqcKjS1ULbykUSCjvcDC1gT5ga8LqKyVe4VDFUeFTQoDiUw",
  "key26": "34vSrM1E65BSUfuy5pk9nZdhH35YbDK6rTRe7J9uYqYLPcFXJFPRza6TDjEpk3zYXBgMRfdQ4MKo9MRg68wXjkb3",
  "key27": "5Cg8gezXnQRQ3ab3fnR5RY5Hrch5ECJFDNMjfMMtJ19mGq9wRDiBwq3wmczpcNaxNf94USzFMTyzFHG3TPYaEDju",
  "key28": "Zee2ELLqkMSo5Rdghosqwaak9nc3Dq2Ski4aVuxbinqi7oWyuEoSEjZAfuAh9R5YNLZ2ZB3FkhfBbdyTY15j6JT",
  "key29": "yVwefnQ2d3ky2vHuH7ZVLoUdqxv9WwzmFLPUN3LgaHJywpS6KtbfcYzJxLDNt7yxVHju3k6Nr7SFfzACbmPSBtF",
  "key30": "L7PX276VDNWcN6uRmJkXFNhiCQKZgPjVszwe3TpX6JsAZNuJ5u8zA3rQ1yVBrqUSbtJMAEGm7ZmcuLwV6s2hNi7",
  "key31": "3Cai8erhVs5zkfeAyT6YYs6AyS9Cammd49pvJbM2Lz382uJdjhzW1SZihB9MEKq73Mnf5uK8wfR3YNtnbTbodTVe",
  "key32": "4ZKtFCURuQu29tQaWZdUBJTThdFrw2Q4XNoApL2ULp8z4ngqrffan36ikrRU2vnVjZHkfWFKXZ3gTgbxZwoRENKh",
  "key33": "4hdMRDqkwkV9W3ByJ9xNQDyqttyCCgtFNsib66Kpjz1qvDGHSXR6xkZ13SEgQRTztpHEH6DE9azr5mKpigBWGN3C",
  "key34": "5MEVJLVdh4MMQprReV736MJxTfYeKq9WoqYKAmbedaRn9cEMQKBy493yvyLmn2MgeF9rrfUSH9nPX4iPNjpHGuVN",
  "key35": "GtHHrCeKkspUVW36ze5bDwpTNfbtQuqxqUzVeV27Zo65FRQTe637bGweT9R2gp5uK1GRCo5DB2nfzNpnNkhJwUH",
  "key36": "4mDSu9TQAhUGUxRBwyRUtn7sHEataUm35bdqgR6nm4virAAUZ5URBp2MARy24dqWRhbmuLpSUhRD9aufPFyjPCpV",
  "key37": "5jUi9AEtJ7EnFMAFeDVeUYG4usZGsy7Juq5n25yRJ6wudnw7ZeRdvskVR3wBbBG9KP5M6uFWrHdQy3duijHxp98y",
  "key38": "ap8MxVjpeN5RXpbaYjopFtxGHJZxP9V4LRXxqFMuiZzKaiqFApWk5qF3X8CzGeUwuq3QCJdqAe918oHprVhQ5wh",
  "key39": "4XBFeNPbnnC2Co4wtkZEidQcq6MSao2mkcqoBWXxS4Q3Uifh1oK3sXtWPHthhqUR4ywFB3wdHiRj4wu8HPLW2bn7",
  "key40": "3TJ3HvGsuC4XZ8raRra8KQ2i3p7k8xxg48nomj14PKJmnbAqwDp3JUxjuMgooAChqDmgyb9kYfrnA3rDJuLgpx4z",
  "key41": "5sMbhegntCmMtk5wdwGoKURtbQLptbB1MUWRZqkcBFXrV5aMrz8jKWJCnKwPELPjy2DWPy1Xa7cNV2mtacxVXk4x",
  "key42": "4o5CT11S7wBGkvqVLqPHpnK8Dj4pGBG4hXmCu7gQTpT1QMQEk57Twx7ttpCvMuyHhyK4N1YTnusPx37oiAXnrn95",
  "key43": "qmhseGqcoaD2aw6Qj1kED1jxjwG73GgE7P7gzeHH8Y4gFQNBKiXdWzWcaZ2dGmP1FjNWGQV1DiYkGCSFiGGtS66"
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
