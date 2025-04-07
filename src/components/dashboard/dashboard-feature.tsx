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
    "2rYHL5QfqqH14jyCpWpnk48G4cRVf3cndCucuJKTG6NyAXFFPespPKC1e6TkPTgyszej9eaq3BDoW59hmg6fsHxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ihbhpfKPmbkRn6DBqBRZF6JdeVFjehgMZwZmAkkM9R2KGbVG3fsjMg9Xhtow1AgT6HYrKQtd77S6Ccgb74ZhVih",
  "key1": "3J4gPcouhZxAe17EyG5Wu6EXYwFU9DkSrBMaf6CvVfoivb4fhD4tC2jHqiSJabdeM12pnNrns13JFUYkRiGjDXoB",
  "key2": "ejzvenPbCEXnLfGwQJhuYhNpMCQ4smw52pQe5jzbfM1kPYF9FTujFjx7rRgvxcs6i5BsyweB9JfGMHYCizgQaaS",
  "key3": "4e8GypwwntmQ9ijzEvkkx6jTdMfD8fbEEP9wyRLgeSb87T151X4HezjtYras1vPVaiTNwHmeEQRuqDeNshWiF4LS",
  "key4": "975CCVG13XhFvgMPcKKm9mQqkuoQkrG1vvPn9byZPMAxCopzGtgevXiYr8ggfSF1bDhsvjztSkVHoVFy1QwbY7y",
  "key5": "4GggnWiTNyS9GmRE3aHSwCVV5DiqMoRAr9jZ1spFDPkw19yfKiQwkGKy8aDnNa2VJBBJBU8SijuPPeK1VbYDgzm5",
  "key6": "263UbSbonhBV7aAX2TYfmKVDV7YoGR75gYKcbfQTifJ57gNobhHw7RsmNpfBQdUvmvHMxCLiDDd1P38c7n2fJ4Nc",
  "key7": "2PWmVSG54vxuoJMFD9MEMLG4XCa9Z6oa3e6ZYe6XpUJnxrdASxDUf3imNi1exb3vyitRgh5NQwuur7aAttiREXAS",
  "key8": "3mgV7NHAYe6Six6ep8VnHZmNe4HYqVxkaRf7GEkJLbyJrQpRBBsJGtYj7PSED5Hj1TEwvTqmVRUMR7uD9MmiPG4g",
  "key9": "3AyDojYQZRXcE23fQv27a8UpC9e4fKdreHX8g5XB6gcmutPD9tZGkLkPiYomf2943wY4xs4UCLw6919duthjw7a9",
  "key10": "GHeDb8zRYzVYRTYc3WLD7K1mZ4zvkQDggwyFJKb7ZS8rpLWd2AM8oFZYo6dWnRdp21dzZqVgabJS58KbK7QtDD7",
  "key11": "8G8Mw52Q2g8WbP5sRzXncHy2JzEmCdX6WsTE1tXoyf58uLhn8tE6qUpGZC9m8L2PJCXAdsnLv8WZtMpNnaUHowJ",
  "key12": "5EwuEKre9BDkEkacXZjMSB7wbCNNkCyekXNtYXCZnayfXNCUThoQJCapVSSxhNux1VvV3i4p8Xv33uRu2rwJRA8h",
  "key13": "3a3Gg15n428rLiEhTREpV67oZ566tD8HYehaAbNdT1wcyjV7BT5MrUeRVyHRs7NYRzNZNcVQuvuxYz3PMNd2dnUi",
  "key14": "j6cs1vRms2bdJuJC2zYAQaEWwGMXA7Vb5FXd7PzwLUQnhVV7TpgKUCXYTNjo8yBR5fZS8yfUscUMVsAdqyVkzzN",
  "key15": "3DJSV4d1JT7qgWEnejYexfRwrKGcXwaqTxMwhxH377cLiuDPwsiBuV5de6hxL9m2RJ32Ku16pBfU5PXSTEFYhCDk",
  "key16": "KSWnQc6gtVsmF4NobscdV8oc2RffPaPYb78qSUCGr2VzaVpX8LuBJUDAVQCAEjdL1Wp6PjcCiZLpJ2HwZ57uAH6",
  "key17": "eGDiAAURN9qGfA5hfNN6YFFNxKSNXoyQG6GRpXwdPCsYGik8G8xD6VHN2qNo4bUrGEi5WM94o3RNLCUv9kuQ8gY",
  "key18": "3M2hfmB4b5gK7TCi58X5afcBDh7KCH9dNzEFBWTtB52WLsymqDU3jMAtsX5374Rp9N6Ghvx71zLPHf76WKwmM8Gb",
  "key19": "1EHHJwaa4rbhpobRq72buTfQBJKR8LpyzdkQPiihpob7BEn9jvLqKwprYkk2SvgXBnMgNkxN1XHVU3qVmh1T7KL",
  "key20": "5R6vHZJbpCE7ijzWPjkPuFNSf5xJKs3ngZEU2ozTPSAQiJmCZ7mu6swKaTc1T1sGEy5J7QDzYMnwiuNj2Z8gpREq",
  "key21": "oXAVBAYW3BPpkNYP5joqtr3J6SPtwha5nX73NmgnEhqb2Kdot9WhYcf1grYMTA93c8UXnXf8L8fadtMNf6n1UrG",
  "key22": "2L4pMVuvatuPFERRsGH86XLWHGWXj8xcxcSVeW69a3r3oMags49LPGs3pG5jsxPPyFUg7U8tfp1LHP6WDYtbqKHc",
  "key23": "4wJqdHvwhv7SyqtjuPb2RbY1aJohE5xZsB4Ftoc3xDgsWFiQDWhXx7PcNX9T8hdUDSQd6cEJT2zsRWBDeZAeAEgj",
  "key24": "42hkW8o9RdVWRhop5DPEtCRhsjmwePbXEayUtANhumsWdWtT1ieTo1YWetvrJgBzPU6f7atw41WF1Pi4oBonsvqL",
  "key25": "5TPYp3RkcenrfnnJxV8SoW4qxUL5GovqZd8vmnvGsYvuygDowW7NqUFg1mtg24hw5he7qWAZPrb2gRLL7Jpchk8o",
  "key26": "4Tn9kZQBMhn34TN1B4kXz5o3GTunwYuJmEh2mC6zXbvkoKY4qijaao4foYRLycqKxK6GtnsGpqcVeYxfuTDxAVSZ",
  "key27": "2Mh9WDJXhMYb2TwqgAjL99GBaDRKPvo5YXQ7WayTA1FhMHoo3BZ3d7jhWv2etZoGrHax5md5avSSEmweSqRzRzn4",
  "key28": "AoZUX3M9E7MbrUqWjpRUdYhmoJowLBrcU2u2d7oxasQrHkn223vs4r7SV5JBAnXZThKeCbcTeSJhxgYGsVtEidc",
  "key29": "1QBvi1bnUpinftUR8WjZ3siLXV3vgZJjJnc1BzpeHq5Vnr8MDTnN8aofHeDUKu7vjGYub487PMMVcaPkSZrxNdW",
  "key30": "wshhkJ59hAQRAq9otgat5xGt9fVC1t2Kkwap16aZxDsYGjSXfveL34gHPEHwpMXqssE45LfhAzWTXyeJCjwxGEG",
  "key31": "3hf6TYnUJ2ULMrs74YsqS4SGFuHtuZfwWvWskFfkCaoPQ9Fz8LCaZU88FfggXdadQNqvEVyQcJ4UnG7Xdns5YxSQ",
  "key32": "2QJ3HLRbJf4z8gyBBEECCJN5i6f7hDzGHvimNM78so9zQ5fmpWwaYX7UYmEGs8E4jDdX8E3Cy74iXUq8DXTVtbZp",
  "key33": "4haSh2LnXqaGNGhDbXchsYCF462cQnz24zmjDcguuRkEW8HYf35oon4u96Zxb5j2BzEAjirimtovmMLJHu76idp4",
  "key34": "2PC1823K986ynS43VfEWLPU27wZvu9KSWLSGD4uXqMkwfDgpTkMNtEwaGCJNR15oDdS7jQrKTzdKcVgpYD1qKGsH",
  "key35": "3JiDGkBufEjVoCKZheJK2ShfBhWUAYHAGjf44XXCcQRVoZ62ibdQQG8cBowHFDvduZPkq4FVHbLwDoKVWPqeWac4"
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
