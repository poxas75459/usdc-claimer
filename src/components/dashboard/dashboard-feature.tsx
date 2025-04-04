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
    "3hnbgRZJnAm6uwBYhj82Zg1K7L6ufrhMfhhbkcTzodiNzkYfFbKXJXDVGYxESSGHxK1Y1fYbMM1ox2iumT5ECcR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zaafLpM2CycmWjUtkW4D9WoVHrZpTXX1ptjT179UgjXXVFcxh2ovd98kmyEqA1ve1P4revC3sw7bWUSSE7cw8Qi",
  "key1": "4TtAdtQLKxRgKJVCQ95zC4qL1cy1UtQaj8CGToA3qG3LQK5Y8ET2XssSZvc6pkYMVWesKCqvamT89fGqEnZY1dGd",
  "key2": "3EkBgjsTPZaQkB1Edi5mJcDYDtdSz5XQPakUtnU1TMKXy2WmFbfUA9EiAmEsRUXqLW4riQTWXpJYTickDPvr9NsU",
  "key3": "4muYEuxaVo7HP2BuWXY717ggPpCWtARevX7kM2jae7XVcoSMYj6JU7Kpz5pQ4pg29nYhJK6r3yfF5C9BKx6qZCN9",
  "key4": "5ewYS7b9XMiKZoMQcHgrZDopY3c9qeNP39N4TQSfQ8EDmT8tdVMML8DowKrCHVuD1yZDQCc99NDrrCxdDBgnu1JN",
  "key5": "3UDwtiPENpeGNK9JVSnW8ZgRAAvFZUsn95511WHQqmTJKrZc1jGjxVWNSAAg6wxtae1XrJv5me1q76W11iN8CDyw",
  "key6": "2ht1ozocTwp8fzmEdULtfUZtYrXsfmw2GZAXMRsTMEqrUn3NYXghyA6trXVQJfD8AMXqqHRewwefXFVSsmYWpuCG",
  "key7": "ScbnhnSJfLpDaYgk9kLwZfM5QfezZ1B2FKZ9vzLuS1mGsherDDWuR16qVoVUcxkexNMYhsdNoTN9zFAfUPif9zu",
  "key8": "44UFfjyuVnV23g8eKn1txF7554WKeF8BUqm3qK9JAr6oMRLbyfc2CViS7i2WTaMkqzriXdJ8PuEosHA3iZVqm6RK",
  "key9": "5i5TAFSeja7fisKrJpE9VfXwNKEKVTjyULWWP8AJdVFsLhV8SktvgwzVac7V9pSTuo79CZg8qsowKVFUpfLEtkQ3",
  "key10": "4n7ucUsr8kvMZS77pQdnd3b8KvcZTtiwA5GmDBea1y3g8SWW3qR6qizK8RC8n2feRLzd6TbZZhckqr7Rod2Sum7p",
  "key11": "4KH2VBCJ7LN6visXxvqpzoKBTe7AicYMhsvFBxw2dfFPcoAc9TzxzYJM5fDGaydAwm4tmvJo2JUFaHUmfj9tLLzx",
  "key12": "zu1MsK1gEwDFWGCK8zUYDxcPqTfJPKsrDTAM3dpNEqPe1rE299SaoBs2RPBsx6jirBmKiSGQA2V2f1wju7ZNSUZ",
  "key13": "2RpM8eMAomM5vaht4MahPXrUxn1MF6dKX15A1W9jCPGrgjLMYw3ZhFCpdTNAS4iFC1vwZrUPYkqxfFTU3u5g1x8Y",
  "key14": "2F7eX9MFk8Zuy7jfZdD39QNKPToZn4LJoNjBwyCNcp6qJwWKYbgEspbVifLgNvFaKhwkWFrZQqv5RV5HDMPBGYcW",
  "key15": "426wFGtSk27YJfhT9JTBff6LECWTbNSpVAgvUJMeQKbLQBBGknZjjGL59wx9n4EuXXGLyaEpdbJfgj8w9CZcc2SY",
  "key16": "xqkehjLmWJ4Xxmdo9Mi6UdF6mXqWnTeHFEAEa9qfxUtFmG7BEJsxAdznmyrrgivJf5aWtf3UurZHtwtV45cgZbT",
  "key17": "gjqHAckK7FrGjYgnY5svUeJtKrcGwtRtWaYyinQdRea7dCneNyg4bg63vJ3Z45zW1Lo4rLetjBdpf1sHwhcgLcP",
  "key18": "3PsR8RdtSN5sxPaHRLVaDqwNJb9ZPJ6BpgVVTMeAyFe25YVZoEgcRkfiCt7dhCVkAn8uaSDxjp2mnEJfQkcaqsWd",
  "key19": "2XkfkafyF6EDDcqTqHJUM29LshaVkvTSpZBD7FwMHko9SQi1nKdXLPmviUW6RL65QyBDkkwkXeGwxM2uhD3MY8oo",
  "key20": "4PRpbM9WJNjx8cMjyRR675oKkiDt17bbkyv1rGgW9seA9oyHr1HkMJLKa3TDJUuTAF17mHVMiwN8hMgZF3ap9tZC",
  "key21": "2DiEkBTkEUvUnDURrf6NPXbzyz9i5dQtHKHK7riqT2fDMnT1hg1Zk8LmkF8crc4fDCGqpvpuCotYURUzF87QrBz4",
  "key22": "3HRn76vcnvbWFCJeHc4XJaj7HcvVUa3qpnmBiF6MioXgfQ8A45aQyhGB1BKPFHijY2K9MhmSCQYfXpcm6zAkLeh1",
  "key23": "UvWbBK9bToG6va1fjGfsshLz5zUCDzN9t2bZH4rusrHZLQANnJ37rwZHnzWkzZURsdySdo1x6LSXKkDm99V6nXq",
  "key24": "2kfak4Fuhnak5drf4ZqK1qwXxbvcCUCLoEJ6fa1j4wf8Ahj2fZHue7XvJuVJA2Gv8HehTsZtnAhSXUxuGK3RoHtC",
  "key25": "2jWyWfnfk4bMhAHcaoYCzhzyUo9uJ3rtHH5UkjS5UjPB7nCEeAKms7AFcBU8FWM4hx6gxVvUW6MQTp48z4jnwBJh",
  "key26": "viHPYZ96rAkqq8AuTEFsKMPgUYHrLwb69VA9t6KDBcJ2acKcQYVdK1Jb8GMrdd84fuvZwWa2WFWK4uDPjsSy7ir",
  "key27": "3fJU2D57aWXg12VXq8TrGWNSbM32d9ctfPvoZkLsA8uprXzwHmgxqWLRm22LJUPWwFdr3H2JdWfZcAiRaCuWvgcE",
  "key28": "44TypNezW9M81PKzyuq52H2UWXkkAATbWfrwqWqADEXKKD2vN8mANAkzzetVnchXNjHheECsUj5YKdTgZU2ipR5t",
  "key29": "5yMzZ6qFykvd5mNugULtAe4EQehQtb4VgHDndyfAUB5P4HyETj29x1KVNhtgstvAFoHwvy6R4xryYjTyWs3NsmgK",
  "key30": "5ptqGySNGgu8d7FezD55A53uSNBMpup74M8wpNnagVedsePcrSKon2DkXxXS2v6KLxxRhesuts4RQaYYFSmcWAmm",
  "key31": "q8ePjgXynwj9zMoRqTZWPMBR1W5w7ymBYdoMcM6yMtTcxizWyCXkLwZeYFCerGzfXk8JN63YjRAbjQUcvaR34w1",
  "key32": "4MxeDBDg9jSpXeK9jTrvPB4AmkiK3AerSSgf4qkAJBDn67NUmE9sgvjUS3LyQycPwUCRTo727NJeY4S3PyBxCT3y",
  "key33": "72pL7i1MsKNJSkzvD6Rk2nMUW4q5KX2ZktbDMSRg1TL3EMgK5mBgefdwcB1pYJvnmd7L9fY1uThRZxJbB4veHDU",
  "key34": "4K4BxV5yhs4UgGht2r4NVHZfFZBrMD8dra1Se6UzRQeggcQqz9KoSWC6ESFGbRXZYXiY1UzHt9ou2Dz9rKV2nTh9",
  "key35": "2QVjKqr2YsFB2ZYeuUguyxhVx9ZJhtiZomuaK8cTkoZTZtKsUNBuxshtTtbRT9oLoyiTXH8etueDP6U2JYA3m2iN",
  "key36": "27dgVoANCDn5gM7EiPrWxa5VQ2eWWx7D7A3MVNWg3SJ5s24TmzKeb3mfCRW4Bpv4GoL38Kes64pjLj6hFqdHkE6h",
  "key37": "3fcXHsAE9RaTZ6XdVMVeBmNmrpK7s48GQff1jCZ676BjaXVcS57RPjLtd3mP7FicG48yft2eWD7UMB1TUTWXNtvA",
  "key38": "2B7PjjudrP97WmUpf5Ee2gEZM9eTY3Fg9hcL4EPhK5S5J4eChLSmeiWF7Xqp2JeLuY885pcMrGQpXK8tebg1xf2E",
  "key39": "jk8Q5QagfBG2qBqgdRqLB5VUGWDgPsk7ro2rTUZ1Xv2f3hkGN3J6WSsR8A2mk739azvys49VL8E9fknq5Vzjqeh"
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
