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
    "5yRjqToTFWLSZ7YVzNUgHBrPc7jzCEhyU7VDS7eX6nyjncwraq6BxcH4bT4KSVy35buuTYsbzt7hP2nfCouZqbWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hTeXdmkdHjctc8gNeQCXv5W7kycqBCqKDWGKBfg6dkRpYbWDhWan2Y7sSenP3eTLqZP4wnkAzQNxbQcv2RL63u1",
  "key1": "4VvmziqMwUJJu3HveErsgZAGmUE3vrATvABnSxYUZJzaxmKGVb7J4CwyEPU68zsBnigEbk1nLM6kYPcMfeqMFVG5",
  "key2": "3Q51GMogagHwY1YT8WdnCQNHiZxMrMsqTWYberYk2KCCx6zbXEXszRtfLtcZ2w8wK7iQzEmXQRg81aFxG9Y6rK3C",
  "key3": "2mBzAek4ZUvmTkv66AxF87R2i8T5L7ZjHf9oA4xBsRY2bGhS4WBh3qvSHJRRHu96USzRvc5mpMQG9vBQr1d6wbFk",
  "key4": "5k7qvEE9H3goio76yudbWLYEpZXfhhEj2P4ZAgeNS4dRjoUzixV1xP2T3CuGsRBJUzF3ayDBcAtz5mmiQmNcjwcC",
  "key5": "3bJFH1nZcRMNiGwoyvG1WBktTnRNAZEEvLUZzqgJBZZoiTDJ9PpAZ7Wzjva1e4D9NLXfHGV1VQ1vyDonTMjEDyUN",
  "key6": "3KrJQFDgFgV6QEuKUr8N9PprzeECLGBq9PQSBA3RtXW1bPijKbEfswP81wnuaL4gnwuUewUn8UbEbPZsYQ5ucTK2",
  "key7": "Lsfoqocd8HnKACdHYk7AkxbM3kJxRZwcx72C1pCtRw3BtbDE4s76AQX1ePzNiomMiRvQQRrcSxUXQoF2B6moduG",
  "key8": "3QEUB5J7u9EFLyocBKSjTtE7abkjoWXU9fy8nKNdyKWzMPLPeAbzyrWV5kiChyf1JJX9ru1BkeAMBrpuEgeEa3sM",
  "key9": "qwVeAeWyx578J3n7xEd2fqvmxqEf7AGkLmiceB4JVwVagQy4DifGfArBLZerMUTYpQV3LN6ThK8kpWJgGVcMe3N",
  "key10": "SfaJPToDf8x2EESJgfZmYxQTno4w8acG8rNihgQPD9Em1YBgvDuizp6CW42fQgwnSU8BfXqM7A5Yi9Ks8qaWW5p",
  "key11": "2hwK8uQkVSxKUTmohvJXbU5JkHvgWhvLgoTbLm7P3NPcas8UXM1ym2xJwuKDPBQ1FyqKRncZLAJhCMe9AvU82zGe",
  "key12": "WVSbzez9hhm3272CaKX7TBD5CHdRzZT56QuuKihnfyPv8dnZBVrZiwn5pKKhdfViktZg7N7S8FLafLVh6fe6J3r",
  "key13": "BkTRmy6ckoQ3j5AQW14W5vJ4mtAi42rcvKBk95jMgki4Naa2Y99AwLnu5kM2mKhQhH5MrH3D9Fd3GrcfZm3yVPX",
  "key14": "5KKponHby8ZKNeRQDbGkoAcBwicpPX4Cw9eVR9KhMNrTmB58ACD3TvZgbX5GikjS6u4Xk27XcT7EY6s8QgHEju1o",
  "key15": "2HmRzWpVbMAPm2RuLxMrxAhpW8fTQs5zWSSpgrEutzFPrshfYndiE7PhhPBBsoUEDkdq36MaFRyXjy2eGTmtxaUf",
  "key16": "53Ls7zSQfZUfoVwypsmXQFj6tpxYXgnLW7jhAxBGki3fU5RZSdzCLh7Jodcece6ZdT6WHtjTQUJMNZockPXNH1fy",
  "key17": "vWPmvWZCLq2G736z7EUxc8jrcbHdDP29Pc6oFz9Q8QLu1atpRTf5yHeX6WT8m4v2ET5CTh6iWdbP9Ykephz4J6J",
  "key18": "x3AFB87wFff62p2YEj6o6d8dBAAEes9w3avCPUndSA37fQWbpp3DxEixQZdfUw8tkRCiykLjPhphV4XJwt48rB1",
  "key19": "4gteGGR5uARenta6dKiHTfiDaTqXeDnKcP7gV4uGF4gAbDjxeRW8uuRjxMw8PzjHexG9D7ANF2jxXpjev2f4k4rh",
  "key20": "4erLqP25Y8vdP7JTPA7Dc8heE7gC8UG8M2C1YvYbnWxXA4wc1XZEzuZEiCZKjSopZoYWoNkasuYQDrCxioRU46Bq",
  "key21": "24PiQXAyamPiwe7nCRPSHmUi88ti175BsxhooxksnnDoaFn7Th8trHS4fQ9XzZ4obpZtGbJHN94XcXmUqFFyqRW7",
  "key22": "xPPYeAhiycjPAAy8pQUdLeWLrpMbVNNAxLyRjfUNWouS1zdhpgB2MzWnhmiYUwhhT5mMNgs14LWCy41pPpKNbKe",
  "key23": "4tJdceS62cRTz6jpCDaPpXg2LYakr3CDVUEB5yqmZRxooCSjczN5BLAGxNUcQehzQazjC7xHQRZ7tTpobrrcxofH",
  "key24": "3m2K3opXSoHGJeA77c2GZzUiwMnJk3hHG6X1U53pC3zhH39zeWWKfkJJe8n4Q19LfuU5M5DaMxF2tXrnrBQUVoz1",
  "key25": "3nAqGKDhUwqSxrRL8ChRPD5nVdpVTc6MmSaFBjunNo7Liy9Av5MGXc4j89SN5ghsbQXDVk3Vxwxir4Rbps3Fde3v",
  "key26": "2suq3ymGLAnj6xwYokwYWNHLCxLB7XQ2bgBjV7U5FZ32r8xoR264xrLJC42RWAGnMe2Hiir7ZhoUjCp2BBhspNx5",
  "key27": "3Cicgbq9WPzj2yVHzFLVpjVbP3bvS553s968uN7G6eqsCZhiYXFeRQWhQNTjatcToSNELEwSoyy6wQWAniA7NL5U",
  "key28": "5pgZFjP8dHksAmLN614W4N9ahz8TaKbfJMp85RuUrTvJBKKoBbxbp6anQCt73LoMtjzyNdA1oz77k4guZ6deJMXy",
  "key29": "38qombFia4QT4yTCNfiYZy6miwh1JyqeX4CiFUTTdkjNysgBPYCCgtG8ibWFywnhQ21DkNwKZdk5jfEGgSdGAiPQ",
  "key30": "2nmZWnT9qqw4c5xH6Rqh3dC8CWTkeM6imC5Wz57JbK2meNwrkBHSTMFBKUKqbrt7cNZFrLNd5TpgwhoSiUtZSfeH",
  "key31": "5BKTLjXm4mZayEsBJ19cUtj2jPNYsH6HWGq9PBBUtvVDaGTVzYku3tSgCtCLczaYebub9GbAk3VNKpCAFMqVaFPt",
  "key32": "2EbyVrsGtsiQnmF5YPEDRYeZ7dmEHYtoF1ji6b6oExb6dLKrPsd3eS8cv9wTHnNXMcwCiNEoaEd1k9p9oEdGpuej",
  "key33": "4yARKLn4hDFSVF4KYxqxgJesBsj2HFR4raFWgkL2o1h2wxa65sLkrGNmJRRgT5265742enBc7Q2K9ihQ1zg2fkHa",
  "key34": "5V86VZPVMk7bjJ7xueHMYKte4d1KtyLDCQyJLonm2iH3QVsj9oHixaQVxnpprtbZtTAqNR7dpxBhW3EinCP2BVZv",
  "key35": "39kLETfH74nnj937sPFF2Jnx54NPpCszh1TNEUm5vDKmnZLZXFP4NFTACDAmN15AHgGtwNkNx776Bjcbkv5hFRei",
  "key36": "5jEpHYt3LXBi1NgZgRekh5SNRHcwyghsFFH18vdBAJhHhvRwBuUSz6LLhFSgcafUWr24ihBytew3V7xu1nrc2Zqw",
  "key37": "eSeSvyuaAGGCTxDTeMXbTJqiaqE1WVRYbVmkfxBhDbXMEFjKMzzHpZQU1V6KYmcuiBUgC4Yb2ARVRgLN24JZPfQ",
  "key38": "RoQCq1NL9kAmQAjzevDC451FzMt5v9KVxXquNiDh3HvJ25eATrFSDix5LHYzqjL5SzbrzpS2oyNJEBvoHJh9ig3",
  "key39": "3v3uxvoULZsLy4biWeP6if4PT8cu3RBfd41GDZfKNsx2HrCZWnVzY7ax6zVFqfCna7DuivQYh9YsKoZ1nwRe6AQM",
  "key40": "2uoN1HxVuGgio2KWjZYvbe4zaCZpgGkdHnCAE8qpQA7yzSUvJzbGDVdCAPaogsH3QDhUsbAmwZqWez8EuSgcWCuT",
  "key41": "uRW9fNBuuGdbP7JuqDc5e4Fi2BsW7aA8y7a1ddtMEdo7q4Bv6zH8VbUU1K54L2uXWcxWTrGqcGywMWhBsXs5YH1",
  "key42": "3ktZUet5eGMCaWBbWcTZNeUogNRsPtpyrAs7My8XMdB716ndJo6ZchdKc9fqoZdzTuV7ScV615MnLPJsC4sY5WnS",
  "key43": "34xrJw4A4WUJrRHtawSpR6FRTQKBoz2p35SA6ad2u3X8z8xVvbhwGkDL8RHgaoUqNonvh2WdbwUT4sCEhuaKt6yj",
  "key44": "2kfRHMp5n7rw6d8d96A1K9xeHNN5yryy1vQ6Y9zD54VQAU3sQQNqa5GhgHDSFbbi6ivCnyspS2eMAvRaf1gE2m3w"
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
