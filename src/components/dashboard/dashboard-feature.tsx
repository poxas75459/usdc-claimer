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
    "2DLM6Tin7X6VLnRKrcewWkqecPQt8Sx5PSKm4h41wPjctAehbWbenaEYN7v9tXVJQS4v1kSZXCvwz9LH7rRdHkke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2onvuxFwk4Z6vvfxnfei166eJx3VZTMDhoDcc83qe74K3DoK6VjuDXuaiQQap8sonFmr9AVLvRo4ar4qVq8GKAC9",
  "key1": "EYpjsDcgdzqD7RXJCwvfiaXJD1sVuPTymtyUA5wzGtNsyhdLpjDfDkpNiPsRWErAyui4Yot4vzsD9ws5thEXwm2",
  "key2": "3qZHcXhVqfAp2e7vogdBjiH5R6HFUZrumu9CCSzyDPxaj7uYbfSfVJZNNVpz1nvzCnXTkYhXUpVtnEhdS9739EHx",
  "key3": "2WeRvanLsHF3nbFs8vrLFCwmnyiAkU1Avu1i9L6TXZBpc8rguNV5RbGCpX4S3XtawLe9mtV5Pz99EjjgcfMpbtBb",
  "key4": "5R3FPJ1BVzpgUhvkcDWoUyZnwLNGvcXAYu2nNBh68RbQnQwcBMbZP1QWQutpihKk7XVpASLuGTF6NQdLGQW18A6a",
  "key5": "2qnDUtpNYYUXAiyxNsWkLa5UkmPU5kVo6oinahJWRTPXHrzaLfxvxQows33a8uua31KQBYW3UHDYBrHTzoKPAaPQ",
  "key6": "YjtPS5aKomH9V2VGeG8y6upmsKANeKqqpGG8aTdVnsizGzo2qYjDttF97wHyporPHqcBzNmrWPkNdJWKmMR6MHi",
  "key7": "3GsjHHo25FRMTJ8BxMktk4opWdqchSz4xGTQwgg6zn82hZKL9rXNPjYF3p4iEgZAQAco8c8LtYGRZUQHoHa18BEn",
  "key8": "2WCxwQpAoxtHzezTQ4amnXh3r6asa7p1C8ZtzqMDray9Rqwo83c3bjzBHsq6dy3PqssRfkZfCsUAQxLnzRQMG5Q4",
  "key9": "2eCaQ8AdYfajB5NhybrUxK5pMM9CiiSGLMtECJyuTjbjihYmdvYmTdt2Xi38iN9JX5jGnJF1FvbEACyMwSvDsosS",
  "key10": "3qJnU24krVgwegvxvEJpQ9TqdA3QPBXk96hUjy28ACaLnGU4Y7uTtThMeZE8XKKZMnbherVyccnzntCRMG4U5Gyg",
  "key11": "2PznQyEqHEU9D6F91bsaU7KWaktvgB9i6qddJTkgQmeceFzc8qGELvcVqt4nfBh8t3iSLfcdcurEMCsYJDiQTBsq",
  "key12": "3uuREDf4jAFoEm4wz9R2UbE5Zu2pyaEUnWJuGq8pJQhxUmhz8napaZoCQryV6fCAh9zimSYzH4UWZfggaKDzkacX",
  "key13": "65L9aVFETckrwNry1JeBx34hHLpnuvtbRpw85YxiyRX21ScXvv7wFrm3Xr1jQqPACL3ep1Go7pHVL1cY2ajm8nww",
  "key14": "3rd9cNTy1QiyBWiWSkAy5cLLTVv9wUSVr5mAYWPiPHLZHW54SzH499ifT9hQo18oK21nCnEo1yswxa6h9zCMadNT",
  "key15": "5pzP612658HrwLcipkbdvJaDsJB4SGDuDhRb9BX9czn5Mv1Cf6Zm5CqumGHwNdcxQL4oUXmJ8FDovcykyqBjfv3R",
  "key16": "5BYVCVVKEsXmW7SrWvEDmpyk9ioMRhB1cU37wo3oMcaZ1b8XpMUdvj9RQ85Jo7C5iQrLZsykkzwjB6EWhjfoLw8f",
  "key17": "2FNZ1oX7ky7cEFyT9gNQp43wJsdy2NLuXHh1b7zmyYsRZ5i3BCE35pwty55sftrx5KcQTYgxcCSWZ4kZdnrC28SK",
  "key18": "DRk1SgsD99RjjvL4AaYk6bsAqg3oeqfUfYFNKWmZtSyEUzjQJPrW1NrThC6Y4YReZ9X4uos8tMKaZ5vfNEiBieP",
  "key19": "qE8YQeq4EeUU46x1UGhZ1iStSGGNcTozDuCXTwKrSqDyHupKpq9RamquNw6CDg4sik2z28Q7kjTFzUTj8HpjqwL",
  "key20": "5MuVrH38PeTmZ2DozUKCVma6W8smST8ngGwaHNAMb8UDy5TvrtN4MXVjMMDX3zBiYdMrvhUfXpTTaRUQ5qae1P3A",
  "key21": "3ZVCjFVSB8Tky1TWraYB2ck2D16NVuRUyxNNbRkW1Eox8goxEV3fxQE9skyGXd25wZ3PE6BdPabRUuccSkvovehe",
  "key22": "4wbvfU2C84aJhRBNCX77AqYSJ8jw6j2HXzPPhYUCEjdAiHAvsVbcWLm9N6anJxhnxPriv3457j5b5EYcrGnq7cfc",
  "key23": "31Rdhs8cE6d8hBRoGJPqd5n8GdZTfGeChK4gVGcBJ69mgEjj2iHaXuen7Ng83QCrGimYVwppeEFC6BvNCUMxn7JR",
  "key24": "54Ztw4yjAcE92jnoSBbPBeKAzyev34xLqJ8QPBuLtfZeZkacA2ZutfmZngX7NgckY6453iLgHWxayVrdhy2MDr5i",
  "key25": "2q8hifpTzyHX14LZhYYdqppgkXGqvWWJhVZoba5ata7LDaM7A4K5DJWotNCbxfvRxKoVwuKHbPi5qhxJoapRdmCQ",
  "key26": "KCMLwG4iaxCVmsYiscWZ4pTztwES1nDBzrDwkPyK9A4WH99eGZnqbmWB1rFrZk6RrjyB6BYDssThD3b1baTVcDs",
  "key27": "3UP2isJfLELVkNwmmFtWXtHKCnk4fPjQSmHwWtpULMYdbJkHSmdXMUhVBPTY7SvcbFFHGsJS3qt6MTvwjm6cvUkQ",
  "key28": "5iWoMBJo7NxoAW8zAvqgAWgDYsynWA9nJHxUhfjGmFneZDvWbh3xGvw4keHtMMsFQp9pn1vqFjmPMY3VKs2zRhxR",
  "key29": "4UqQKc7G4azBEdG65ATjSX4yvZDQmqkpbT5Ci1Zbt9pHxCPxA4c5yepTSek4x41cRNaFKf7FdsYK63uFF2rzcg1d",
  "key30": "QG4fosAEv4ddySG9jDCUNyEVzW9sTWc16DzbHSsrFmyUXbC3Mkh2y5T7icYCAmfyHD4vyZ751LZThWSPfGLNFdk",
  "key31": "27waMKTBogntLfQDCYsLyQPuYbtidaecfyj9ugSF8Yqkv6tjnHEaKY7V74mwAjLfSvNfrBf5MZe4mduqSevFTz8q",
  "key32": "4rGnrY8JMcxHyC1QZ4n8KveFVKNntXtQzns98NpxDer52q4oE9V8ex1tdqPGycDAwuzraT9VS97N2BeK6F4VxsdQ",
  "key33": "3tZSk2pTm146UH3PcNuosinSxiaHmM9hDqkUpVojMwViZTbEzmuFzn1BK2QoSs5EQ6RFi27zbynkGy5aSzDKYoEa",
  "key34": "4G9zpGHptYKf5yAsejWgCnfX693WNVUAeixhRx9uqFcf8Z2VsNpyN6WhCzbZ3c6MHBnsHCq4tjKtzktu9ProaKGR",
  "key35": "2jpy5uBz9nN7NCJYh1jYHh4WK9LNNyqfJb4FK9yxfuytesyTfyqz5UngCkvuVrPL77R65wZFSxv3E65zjsjz7W9x",
  "key36": "NRdJDUiBAJftaseHpGTAEpRDCxb7XhZY2sEuzeCEUDy26cXX8V98dAaDkcVBPeiDtWvCkyC7sGyyVyEaDQmSwww",
  "key37": "2YX7S4L7xg4B3AbuCFCvcBa8kUEVBkKgqMZiUEBm9RgXm2HQqPehESW99XHggNBfAxtBdEszHcgYif5sBgYquVTz",
  "key38": "2HwpMtjcdRP6FpS6WZ5LZz1uAbYfTc3iZt4ZRPTBWVbE3hTjr5FJCTdAb18eyCVh1eEihDRpWNQged5UVGp6NEyN",
  "key39": "3bQikrdGYS2TeJuDvPxWHjFUBy9NYz9wSBHzieMT8QWSJyZPMhV1KAy3TNwSqpakMVvP435hZG2ya15D9qXYq5L7",
  "key40": "WFjrsPKvp2JoTeKFs75SLR7SkHf3m8WjerZCE1hktTC1FThyuHVLi8F7nke9XxqpgUrSe3DvgASUm3XVfG7JAso",
  "key41": "3CcP32NkwhihswMsPtDssRstLZccRcsa3YbE7BQZhSMukRVmrw9QpeBRHVLha8xkxCYZKdt7s1Zeindr27s13okH",
  "key42": "4xwmpf5rgKFQ1LMmUdH5b98ko7dCk1P2FA2hyU9REjuu4PiaAApU76tUWtxuZFP6osT8jyqu9m3JkhRh8yPgFVsS",
  "key43": "kZ9B4vCEpMzoGqTt24Xer3d9YQh3jfjqVFhxiZqNaoX6fV9z5M9WYQHLUGzWdB6X2UCD38drn5yseMr3eKXosTd",
  "key44": "5SpgoDaCXb2epFA5dcftSep2LqbQnJMzdA8LWoVULyyWLVDSpfRWLSdeByYnjfYSKPqA4Dp71QS5WFuJiXfPg5FS",
  "key45": "2UNPSSLkCfTy2g199J3Qz4E95DzLaHGAX56D6RynAW1HtT48RLQ78bSYGVqXisUjncFPQ8N6eZzwwmhM5JCKRNQT",
  "key46": "2sJ364TxxV8tt3Vp3sR1Zk5rVvggJzPSGNWYh4tg4aVyHkssUGj98ADvvowjLP6DpArYChFpzfAs8D9QY1yZuHfJ",
  "key47": "4NGepC5GpsWbJVRoUP74t1ekKoivPAZR7cSypG4ZPfqLzyb5n3ygerakj1deqsAqemVvkSBYSH8XU22MjMaCRfqA"
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
