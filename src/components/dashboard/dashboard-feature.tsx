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
    "2TX1UdAPLuN5CbQbGcTq6Kica6Kdun2kV2X6Ps6cKejhETHRP6LGGj7RAST4riXhi51TqvNHyeBcHhKxMv8J7Pxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f47EL6uCdTyRGWC2yAnpRAVDD8vfRtN6ZcEo4HWrWci62Fw5QWVzPrLH4GzqwdNQnm9AcQh1jF5r12uR1Z135iw",
  "key1": "6DdeKLrrdnTHpPu5QQD8JQsERxp9AkCU24Vo4YTUunedAEXTrN3aZQit1561rfRSSUK4kuZskoMNRWuARXhi8Fo",
  "key2": "61Pn5LqN3ZaWWEbkQW35wyfC7teJh7MR5snerfW6MgHnGGWtFn3ufK3J5XFURhMSUommZL8bjVGoPwuRSUvAYUZg",
  "key3": "2WzCzfh3Wiu5EMJSB1DGkgdjcJqB4qgXj3bpMEEAkTmdaG3oZwq4hdkFC98CqmMnQ9dv6hsrt5zzRhtEab1XqZiZ",
  "key4": "4uffvVLyp3zV9ZggxUx3pGGLjBVnm496c1LhBuwjvjgW58kcjNvYXDhoH4KS7eN87542UW2ipc8iTujaoLRd2TJS",
  "key5": "53pYPtWgmg8iHHWdsoyYEFbFc3XBuEM9rWkQQ59NYHyWF4RiQYGEyQksqKQk89NevYed8Hxci2fPg34aSeo8P3Hb",
  "key6": "3dE3YF1UL7wvdbCkmKjPAcp6w8XQT4jHRG5dWifWNcjCzo3NHtcviENouZALATrDygNakcLNz6Pidfjd6bkihVv3",
  "key7": "xS5u9k2AmXLDkB5J3yS4jCqYNAzQJjYiyYgKgVnn462zwpLYmc2wgdp1RSJtMCjdjbvmArqzCG3gPxgsKi455Bk",
  "key8": "2BqpKjE8rSmTnMjzDVgMe6oKK6UDgDqHeVcNbVfEYCJaufxbzxaEeeNEwUBKcENpjCY2eKGpbYPTAonb6i4sg4jo",
  "key9": "4iuwjZdr7axiScwcC2nJvVkfHcp1H5zyHGuabdcSPUWCywNt42z4amt4jDeWpi8pYaq1cXAQSYNA8Tn2vgnq6zvY",
  "key10": "3KR4pPw25skB9wTTweZCUDgPC6joUxwXScg7FozZEqjUy1ZaoUnaUZw4GkX9TFpnJcBuaXF7DpmGU7pGbYz2Rmeo",
  "key11": "3ZNZJeM7bnM4Kr4YhYwLuTyhvxEMhupFnPDzssQFoAEr8TB32yCYQhwS3BTSRkdufp7Wac14exVUgnPcJEafmzzo",
  "key12": "5xa51v8oTv5WujzsHxtCWRip1jH6yTBs6KKh6x8Bi8RoBweE19nfa2s5yYuJyyVUqi25GKqMWXMeGPYzLkVgURFT",
  "key13": "bfriQrdHNLcXfk36BxbeezwwwQ3seZxrh5MUCNfQVqrU3hfGKwZ7sFM6ydYLcpegb8cD6KTQfV3bED8HatXRkop",
  "key14": "3s2eUUHs9m1KMsKhB8GUQzyZFVb1mU4smZ9Dd3jEpWgXWBxGWwhmLMt2KxHex8gyZR4uqgJjDvATXK1riEAQQ9LT",
  "key15": "2CHVVbWXWoEjU5Jpty7ZYzkoDek8ZQVP3wKTSeUDAr1vbUGpkRXdYMwsKwEN3sTY86ZBpnDuvxkHzCJ4VDPutwYX",
  "key16": "5wJYzXQaaPpk79ijFCK82oC3bSjHXAd9mX534RpdKwoQYcZUpn2yqX9JDt9wVcvCiKLp9Ewwzy3YrmLRPxxPsEj2",
  "key17": "4ajMQtsFRoqhKYbNpUFHJVFtdAKgCCSGWFMmUFfGZ19jFUxASyF2mms3PV7QgJetX34nqi7o3bd4g5EnVCCQq8gm",
  "key18": "44LAM8urBaWcEM9hrhTfvq6yzMn8QdaF9M23xQCJd9Ys3PJ42vA5WCto4vfRFoSdiJK7Xc8FyU2gKihQsUXGx2dF",
  "key19": "4JzRU87V3B5PaTCPFKq86nSWj6qne9WXdWcThC7Crms9pBrCE21E99yECE2R3wEWCSvwyJH7GedxATQu9L2keAMD",
  "key20": "3SEwjXMt1qLXnCGGr2TSr7KyJNrb44D7NoMLmxnbGdC9yfZ5tqbWv2m7ZptxgXuVxfLTiWpy6UqdSVP5fvsB5Muh",
  "key21": "29UcGTAMYvMZ785Kir9UrjiPbyx2HsJBv4JfvzPbcfpfMvcpHUCtwApiS7YLhriFF5KV7o3bxTtG4b6kkLTuhAW7",
  "key22": "8m6HLrnmVb9euXb915V2qgxe1KBq61nuaTZYQ4VXiHaztM5vYDMNAhqQWh2vnNM8ahwBFyV8wUmUuMJMJcm7RZq",
  "key23": "2iARPpQNQ1rEe3DaBmQSyzVtqkGTG8Szchh3ZPceS2aNw14bii3DwpCF7GF2G2r3STQ8MUvv3a6MtTGNM9NDDeJh",
  "key24": "67iqSApSu9G6rqaGagkaSzzN6n6VBgk7qair9txS1UKeqKwyNPXH8kDgEpsfZqNRZZf3JFGD25725u2w1adSc17q",
  "key25": "32bunMNqh6pQN1AhmzerDzSSzmtHDzdN8UxZCCAtCthxqKPpWJdeWkGWFqKXw3UCztgSLRfEeohMMQTAeqrCpZpM",
  "key26": "4GpUuwszZb8Cu5iUpdoiM8NES5qVBueVLeeF2vXGwihh5tibEPBtJHoxCFui4Fq6rHzihKnsDw2Puke9ocpHUzTn",
  "key27": "3v6DryhWyRcwRwJKqNwEvqVip4Ug2vjdY65UBWbnrW56XJ6EbUpuvNBLhcQKXYnXqz4iBUWvXCLX42g3wfFmb9Rc",
  "key28": "4hwVwz1hCAWuBJ55wiyFB6uiDytFstYxw7ULqpuz7Y2G6NUMTQZwUxo2jp2Eb7hwFD7hEUbPRmngej1ktS5GRG6m",
  "key29": "35tc2dzhU7dViNj1SxoUB5TQuuSYu1k29Uiu5Ppom87JDJ6YCKYPvv8v6u81Ki9z1d7cxx5yQJsEvhk8TxYF24jk",
  "key30": "3ZR5FxKNdQsPPPaZg32K21BEXnGQ81KFggWoZjF3Z4PTu5UfMoDT5uLhi3tX1KhcBjE9fK8CxwKzVGa9aFdrnUEv",
  "key31": "iryM6wmg7Le3kFXZmeuzw2B9qJUYudKWS9E5YVMx4A9qF1P7jW5n46imxafiftFEQUYDyCnSC5YorDZW8BTQU1S",
  "key32": "3Ds79JhiSAcT1zawS3QMFWw5wt9Cu5BqWxcjvenZYhnrvbk73eG7wiT721gQRRJNwDWpzjBp7k7fyeV5GjyUhtwn",
  "key33": "2QpcjAod1h71FtUSk423i2LBMMEvckNsSnZAe94D58CaxhQzbj2j1cXhhqNsvYhYWy5Qjp8kKyL41ceSBLKRvEMi",
  "key34": "3ZQZqdtYn2B5dQuUyiq1rEWtWnsfgUUmLqAXiFMEMJoHQot84NK5TmAQYfm7rau8HjAvv22anQjj5VqsjmJ6eXd9",
  "key35": "ibQ6YoLKDVaDMUkLdMakSQj4wvBgD5DZWxy96yUuyrYnEQSBjvbnKikzwzW6yTADQzUCNJZW1W493DtW4MURJRA",
  "key36": "2UJZLrfa3VLmrKE8hUf5fr5LEkmAHSE5RjDzPtsVCotQW4igQsmdmPS7dsbvMYZuijYENZhHPjUFeKBkpeDewPL1",
  "key37": "zaDKCcJzuKK1WU3RYonmJrU7WXHDREUu66wTmVhGTroAon2ByKpx34rsedQja8xqH3Bbn3p2ETDiRb8vSXRxWhJ",
  "key38": "3ZQ6mHwkuLRUWUHmP16x6tdewSLYfoS6uFzf4QjYWVh9dA9pq8chUCZX3xBN7MZdRw6ide25kig6zewQYzFTQTjt",
  "key39": "tJwMVo97PYVRwr7VmoYoPJMig8cSZmQr8ELLLirLHaLeQ9XaGBw1bX7LkpYRa6R89LL6JNW6uRxTHp1yFqjMR3Q",
  "key40": "52J4wJnTmWziPoAYWSuKa66n27NJWSDvgiKbXeCXd8ifHHM9TTZhHfWsGQXECQmd6j8CU1JwRReNsL5fHUiGUDvC",
  "key41": "2YRETaPicxdw1JZfYcy2Jj51PduSmWgYbhYR8W925VTStw2euh2BNJcMNPhDuz7nck2rXzvL7oGZ48232qVWe6ss",
  "key42": "PnxZr2P5mLMDfRpibapXo5Xfa27wHFtvwjnF4SeE2zwvo8thmg2x6R7dezK4VWX5zrnzuiqk1ZpmV62rAyghR8y",
  "key43": "468ahPoqiHAqGJJcVwyve37LqV4q24QBSduQ7Le4M4Lg2RFFNWbNpeaqj2HDit1pHcapP2UJraJdAAKEEbMD9VR3"
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
