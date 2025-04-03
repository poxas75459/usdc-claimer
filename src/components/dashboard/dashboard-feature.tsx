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
    "3brNJMFtpD4a7cLxF81SQftqWw2yFzeNbRgxyJMEegqbkLFbmAZ8kNUgSNqNMXd7b89vrwfLVAMogDNDWpfUD3hG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oxPcDqVZGiW5JjL9TzKEZYs54eWFk3thg18u3hyDWKzAk9NUz6LriHYhJEo3vZTi9mvMihaByhUkwnNKBFyaYxa",
  "key1": "64JXqNNswk4uxkxBfiNn3WMV9JckXe7qp5NYZhEyuHJLacvrV5PrwVaK5c532wqbxy8VfUyXquv355cDoPp66TZ9",
  "key2": "4FE1uA2EQ8cK3nsama7moeEoR24Au5fAHFpvBp7zhU4bw1gG4oYD1z879GMTqmRoDUujpG1fZCS5GbeeyDVnyWzR",
  "key3": "2Z5Q3jbSLgaogoJzaddDrauD632zX8Gp8a3LnjfUbJNKs1HrCfzaUup4iMhDtnLLjb5ozyhRghtTs15uWTLPigBX",
  "key4": "21dak6fhwkKRYc6yhBnt1BczhgDWFsgAs8fPzszQsoZEWDdbe4C6hPk5zwfSWeeZHR9aNT4fucEx5XJPyjsduuWL",
  "key5": "55hDs5mqQrvnMpbNQ3CkyUgr1s5eYWiz3i1F4PSGs8pGhpWDZ6dViQzS6CdumASMbMQzVdQuu6AHJUWcbxMMdtRw",
  "key6": "rZcbquyXtyhMqN3A2h4kXRr3UyfeHpa4difTbCDGMhMsPJtymjU8rPjoLCoBaF3C3eooiCJ7i2Zbk9ZZBoW2Fvp",
  "key7": "2B39toEavJtZkxeRjsCLxADGAFX9NfK3fE1SUNfVCkzR8iXnmJmGqeC6iTYjxZkSmkzXFopknNuMJxXES2dvjjvy",
  "key8": "5gGaBkwyBydM8iVUUuMGLtTTJP7f4XjVasHGGVePFd9U7MaWH2ZbE91me3tvDmU3ZzJpu4fq1XPcw9JYdn2iCjLf",
  "key9": "41yLbmV9MEaabipQYgh8ksygFBYTBkHfedBZB4MWvDknT898g3a5Te8NShNovGX86HA3cUxNWmzqbLA45fUfY5Re",
  "key10": "3V4PVCpPT9FtdLr4rTjJiQaq45zk3JYuwcQxMzb9BcdSE98JvXNpxNnBWeYYTTUJ3p3WqDKfqBLEPnEzcXsJjZSh",
  "key11": "3Cfds2DoWw6cxDAh4wG4Q7YwB9xZXqwHDZX8xdKrmK6wSE5hrKvhgP5v5YY3KbXojq3BQrgouKW28jKQ5UockiaB",
  "key12": "4sfCUuqmbE3LPoCcauvr9KxhGR1objbZ9T3An3ufyBDuALxZdiiA4No1PDTcNhLVAA84KjLAAxBFqwuf5Ah5fjjz",
  "key13": "2HFKumMTFVYrHJYquG73MhD3v2ZbmBzkddv9ECRU9ZsyzChADsNFF4wzRq5yWVCLNNP2181ZckM7La9maJrVihE9",
  "key14": "59RFUjnMb27hWthMiQSocqEyn4HyvTbNjp62GVB2prNXcTeRAvHH8KT2oxt3evE6hiSeAFsTWZTE6c6aJ6oiuMJq",
  "key15": "8R6jUtUYuyihSWvkc4U1bZXAL1EJTbdid8euhdnUjXifgzrzYz1Fdi1DNFgKH8d7GambLGrzS7EjKTJauvfTtv4",
  "key16": "3nBrE6mCChJZ5LThQSKpfpyVin4eFvu7cX6D76qGPUoasHnu5TfJCqRyL13Y93o9ksdG35TcoXMnqVk1J8HZjfoB",
  "key17": "4fWBedRzeBJZNjjR2iae1EssLdyVknx16e5bJ31gQX2yH7ZATCJcyvZv6CFRZp3ESSDsi9aJccNnR9qbgxxPjiHr",
  "key18": "5NCdLo2aE22PV6XRAoE1M4rCsVVjCc5wMZGphp7poqotCdY2rydB4cLzepD41a6P1TFgU4oQTQxWzojEXPgwVmqJ",
  "key19": "5ExKUs22bSijtQHUMZ8X1PoSu9UruBdpGqb92jxCQPNSRdfrJhruXeUeAtqGDjU6ZkzdR2LaQPxZ8Jfa2py1yLP4",
  "key20": "2f3cQgqzaiyUDX5UZFf3VChC5kreiYz3QnyoEmiBWrGmo42ogQWPVKjVGSKezhREUmz2nGiL4mfnC5eEPMXoznH9",
  "key21": "63p5ShYrFPmgcd47KrN8mZP3EFwkNUVX5wXvDs92U3YnYAoMNhMq5Er8ZV5KhZmqRuyUD5WATCiRzvYX7cNCSP5n",
  "key22": "5Bd6BSW893PEkuoXCbvT6YEB3PWy8xbSv6GPnpa2fjVFzMJYjPZmGn3msFaHypJCtz4pBXeNUsY6n1ZNrwBPdjFt",
  "key23": "4oixruj2ToM3BTzY4okb1fdP7AH83E1rMGzZc78M9gTZnCwoF2pcQABC7xdwzMir81EJT5NZmBc7YVscdGA2KFQh",
  "key24": "3EZEsGg6BFcNosQ5k8ZY86nqwa7z6Voc52jdpe8bkdACvrMU7bYESqoxJ1Mw8hvUyTEP8JLzRZGC36et5Q2h1fwe",
  "key25": "s4uga6ZaJzEKi2vWHKmK3zrsMeaz3gHRfFMe4jKtM9hs41KgZmZB9gVN77yQguEqvt1EECEVE6KBpLabeVJTPNs",
  "key26": "5xC9PNwLuEfZcNhxaxtBj3yZKnBgrqtpZAa8eUSKjvkBhq8hyvre3VQYt4DnCVXfy3VhRurZJNWqZDFrsAZhtJyb",
  "key27": "31VPMH3scHzYA1omNynaMkUhtqjSycZGooriebhWHnR1oSe87QTBENaW9JwmTjp8mW5Vq7nvMHuCXUXstyrdfiRC",
  "key28": "FSyCnMZFmGxVHuQncky2FmTthhid1njydhM9svA1DHZoHdphJc1F9Wtfh9r6DFfeqT7Xt7M9LPA6ecRDyAqCb1C",
  "key29": "4y4ES73PUJAhmWpW26QRoSk6wkvNDS7iW9tDkMEYupVH9Hrx7c7zfEBoo16mtaBCChB8s7mDrRDBrXU4B54j5Yt7",
  "key30": "aBrUtpWYyib78zE6xHnbEDqujJsVrAXhQejGZ59uTqbheQhjE51yKFKZqUEKAX3Fy8HH3NYJXKAHZWisvNZcP79",
  "key31": "2K3FZKZ4sTswguqr9rSzTMkJbkpuaC41MWJiurYzq3dfAwf5b2QoAnJpuQzwonkKqUcXF3PVcujhVjqYgcWvNBbS",
  "key32": "4KDZ6RLDh2FYdTaQNsSKfEWkcevqPvjbyNu3uv4y1X77GqxCZZdCBRauNQTnatfnavTBEqcjh4bYf1eEeiHVacNY",
  "key33": "5FxSebV2huu5bnh8iPCMnNq3mAJYuLKBs4uRYmg7XapgMe7PCAhbaeVpFgozKzYLL6snxiZYaMzRWLCKYozBZf4B",
  "key34": "3EZEHFhRVSUKXfbGJzAbJvPs1jyxGd71kj4hpPvjCNQhgHGkoRdZWj2A5mcCQmh13s8PcjRdZB6qcz43u8yhB3qn",
  "key35": "3m18eBwnH91RjQEhaD5wUojnG62mVrLwu6CeabbpYZi8qoVAMvz5GCWupubhpbyo6ZsUfbsg2KoCuAxCz4CE1EJS",
  "key36": "4CHQyWLEo5cETtvRxyqVYKyWu1D5hyBC3Y94jPEUPYp5wguWXrkgANQcxmCMcpXsDobQWotCU9fySyzdtmoQfPBb"
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
