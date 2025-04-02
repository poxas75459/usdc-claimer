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
    "4MXsHqwLXyUb8DgGHPmMpyY6NZuDX65dcdx9H5XNqJAHxJPH3hyG962C6afs6B4AneVkGZaDZJ8vSnn9yjfrhTQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43psqdSLYRcSywA7UvNb7bm4zcCsepL6zMeywx1R7XD8XKHKUUesV8nPGMzMbNZPYqiZEDsjyJCKqvj6tM3MKa4K",
  "key1": "5HHYa7pDzKf5WwCji9sgesQuCQJNKyyUcLRkEECV2QsshrzUg2sLJ7xayhJxrFs6nb66fAe8imMD4MJttd6FkcEu",
  "key2": "fX5xT5NcSf1Bd2daTRBGWHzVCueXArvqXALWFPjiD2GGmC5Fihbb5cn5BpmfM17ddxxc86stxJTBvkgeMdohUqC",
  "key3": "2fsjzNw42z7GvMcCpAQj6kDP5Z9VqZvPxYnL6SjbA9vbRikmNeC2fxSaiyKK2XZLvivMFymdkKD5Lq9dpZQSUAQV",
  "key4": "5CvMoSTVtqh9VNiE5MTeTZHVA39HZED5N3yF7DC5pth7jX9gv53bgKXtsW4ZKBFqNS5KwybKt6knLKoNqTdXy755",
  "key5": "CpEoR7uPjjd4tC715ghYid5H8Eisftt5TL6yZ1FbpMspi8fBYneX4GcMEYJF7WgFT49KitPfQuuPkNpuFruuT9U",
  "key6": "4kHnjYbkeDqyZYKbwGkxx4AF32NHF1ASNkRFM8MfFTWzcLxZDkFqVdezYBT1VqFspJsHYPutS1P4iKvDGMo2b6rV",
  "key7": "2TE8Gc1e3Rgy5jvTuqc86M6CJkNHYmTSnuh2maZBFaYsErTSMQEburEV56H6oF8auJcuzZd1nFEQrnoGPaVb7LrS",
  "key8": "3oKSNLBaCSWFbHH4ToGLEynuF5yguQ8jp7gtwmCEEDzXAqCksWWzxLtB8Z8b7JycdLvrumPnsGpjvqmT9fwneKAY",
  "key9": "2SP7aX5s3hVbTbuvwjzYL395CErWM3xnZk3LfzSiPxRMeeDocegjXP1QzwHbGuX5E4CKLdC63FaZcyQo7ZTsDpfq",
  "key10": "2Wi8djJyugZr6kdJhPZKnbSh9DRH6ApHMHPhTnfFGfYwYHB1q9xs5VS9Z5yo4svgJYaDTFJajbz3vjLFZ9Secj3Q",
  "key11": "22qSZFQwQGdreikEgRtoEN5tLqxJhmBAahgHrmZzu5QYka8FMMzCVMsuB4MH6KYxZUW4HC1aYc1GukBB1GFiHbuK",
  "key12": "4YpeoFpWMTRwfHVXFySRFbCAaFfnvgKpf8gTV4KXL3RyhKzFocJ55dvKPDpZGcEVeWf387kQrCoD8j3bDA9tWi2g",
  "key13": "3ACnxDmocfiENqcZ5hiYnB7qjqwaYHX7Vrgn1oMtLkTGtcMMyrQJCKPWC2TM9A2yrfYK4MtkWddAuqXEgfS2C3s6",
  "key14": "4bjjk7Jm3ii1SyN22zMWw3CEyT7bGAR2nSrz2gWW9vP6F5jkMBg7R7tTvzpHJYv7CAoXXUC1BMrA44ie5DB6iNH9",
  "key15": "4TLfzx1ZwWvYsWnPGYkCChEuWvnYWSXJQHSvNvDXLnNSpWh85moyYzMbQkfu1b9hPLGQ73UEsR5W34z929by5F4Y",
  "key16": "2HoqTAd65GeqYRa8mLuFuEa1BWBcg7NQpQ2w2m1geW2iE1YUHgsT21DteaKAe8QL8mNjsJd4DqZwax4QECTmgNGP",
  "key17": "oouyPXXLZ5mk6T89kwtV3uwNTMYmtn3oEfB3brurDgdiWkstoymfqxxQCjq8fyBYC4PyXH5r7r3bSzd6qaQmpDc",
  "key18": "3FVuQPH2oVusjXoR5NY4xYgtxAWNagqsdwYHDVHcLKSYmJ5JdZHZMez9HeJD7ijam9HsPbGxrNGM5sMpNkUWGJG9",
  "key19": "1sC2zCZ3sfigk6qZqXqVftUaw2Sa9AbV6o2Tx4vfejxV4q91JDczk6jQxDXmPpqrvNeg9jGbbCr1VsuambAanwU",
  "key20": "4wtxsH86B41ShP1DfU5KizSRsShJs3knXCAS3xgksTtrskeCaACn2kxKBCNn6ZuBkJZvQLmCS3rwUSfvR8dNDFG1",
  "key21": "2SnahuZniV6EmftFZCzS4J85t4Nq6QBrUX4AYmBfx4RPv81Ukwc7M2DVRmeX7p9TMatvu2HqstgEEJenNU4eJFty",
  "key22": "3qjY7oYYcbvXiwaLLStrJPfSqPXtmZJPhJD9me4XRDRkjH6CPD887AzazeDAzCoYNEHDbM6Gf5zqU7BDGGsk2t1j",
  "key23": "5W3NY4wVYzw1L6HQhoWf3bAJotyb5QYtYregTbNYjdLZJB95a5B4sgGhBF6PdGK2c6S8RsZYDjQUcRWMqaXxKrAD",
  "key24": "3j62ey91DEsew7x8igGHSFMeTewx7J1TsWWcrXQhTpiqhrfmdjCsFdMFsg42zdhDjcnSHyc9yUnnpgrAV7n9TkF2",
  "key25": "3RznbRwyv8E7FvC6QGkubkT5PDBPPZnAvq7UtUPGtUzMxBJLTs22GBjbEq91v2GT9jjS85pF3gZyyNBo6Xd9tYc3",
  "key26": "2HnFonHUnM6fn6qDh8qysw5MUFHuJzbhkN3yrRZ8S2V4CgZNDWZwH27J4ufDjYHLFoXoYq7pDsouMHF8qHyvNvG",
  "key27": "3RMTw5XX2SWt3wGunou3MH3hsBjPEigsdKuhHF26stzf7ubhpCHbHmtNh6TXCqV6ppXMArLYw28QYcWWF8CpZCR4",
  "key28": "5UrrZhkwppa5gtEiVnf55kQUaj4haeyw463y4KQTUfxSd29inFRkofYprDGRFLvFQWDD5CCNeqkSNxqgKBgjNNMP",
  "key29": "4gqRLCC123Mpqk7fiJgiczh1GPZMA4k5sMsq3w62jWUMcLvJE4JNqNqAEQo25udz1k1ELvuffZ7XePcZWJNfrFFY",
  "key30": "356RXCAVGA5ztdVH5N7Lb2E8BjVKgvwVyuRvvbRFKhGyz4kUhVefBX9K8FP2Zwr9fi2EhTNqK5soJJ1AgEEXgcrW",
  "key31": "3dYureFGkPXhNQ9AWDgBcXZqhdzPGctstKC6aJexUBx7h1doWKcTehSTHsM1Wgab25ZjWjuZQ6r6vkEnxq4Kr4Au",
  "key32": "5jNbbJKkqZWrr88fHT9Je8n7W2nmiCvEbg1Fn8KgPdRc5zVw3fTxMk1fFTwqBRAQYDPh5yzjAEhHiEuyyCwwMi8t",
  "key33": "5mhTgnvhZHBXhPg8sq6viUH6pETyLwAenLyoNCY8kSNU57pvCNKNh1zkgxDbxt2V7K5rVSW8htRwCjiZLHDR83vY",
  "key34": "3ojimkRrJXDvayHK45at4dSjYNogzRdWDosRKvmsvCPAAUtZV1j4EHJr7UF6uRPcZmA11RRNLR2tHJfDqmZHtpMw",
  "key35": "gc9DeNrBWPiW6RUEFxdHVU2jiK96iho7h4cZUF55u1MpR7ZuqzN1RCLqiP5rL46QYLXAvvKxnimWXT8UH2q56Ho",
  "key36": "5bjLeJVtTzhkaxzME6iZhtPavrshEZXBQH7LHGKMj2rRQ5HEpHfKHF3eGoszmUQ7mc6bGcVoaVYfcqT46fA7e5CE",
  "key37": "2DYNxFyU5gue3e6AygtfgbXR9NWknbYYniLLqcg3SmgJCXtFjLbUTqdLHk7bC5fUGW5dLkzzyjiBXLusqFf17uYM",
  "key38": "2JeisfqVVWN6qKYV6phMCi9uDuMGfiKfRDJzfDF51r6pB7ToUwPoLefAShPZX4TLsg1T99MQtnJ1pcsubYUhoany",
  "key39": "2NudGmRCXCuUHChM1YrzUm4YEuCzRSaNgeMJWhehLfti58dQdafhBGc4TkVmKZewDTTKz38XpeqnRdCuZyi6QgkF",
  "key40": "2AmbSD2Psu3yY6JXm3UkRHVUyp54A9GLYwBifBYd1keQQU31zJUUrfPPosjJtvrJK98FNW5DufGQp1qrLNvHnaos",
  "key41": "4aJHRECs546uiyZA2LhfxkybEmnb4KB12zQbyMQ2s6hmGmArHy7vt71UYAkpcj8W2RqMrgHQA15ucQwghJKacP7Y",
  "key42": "5pXg4JH5TeF4X95GS8Fdm7ZJkAawZDVmFkNAeupW4RSZSU8UnCFG9p5LjeeuzjbNrp8WGAgQ88RJ43CGY5nEr4B5",
  "key43": "4s57apogMNsZDhYQvaM4NrHzR3vD2K8XqbqkSQVkN9sFdgYLfHRgP7Yqza3VU48kNtQht57pHu4JfCMH6ornHzT3",
  "key44": "3drGqEfxY5bFFqJGZzj3VNpwhYpaZVUHCHuSspe7nTnndGKekhazBsQG9rxSzESgYZWuYD2TL74Jug69eTq45N4X",
  "key45": "2WbEoJ7uUwqz548GmCUaMc9R5X9QUpkpxJCSdbv5dv58fzt9uGDZEdAR9aj7FhY2JHr1yt6iwgPhQ9SwxEzGKra4",
  "key46": "52rx81YGsKAVGf8VJyP4GpzZ3HTQ6hjBAANGPdM882pY2xwx5vXNUyKKmEWUAH9NnmkScLuV5yjQpTdWfKrPMaTu",
  "key47": "YHfpS5F8FbSZhcAi8FGBR3qGBmhapSrR5e6M8x69tR6rgWV1yEhWngPLnSFmGgRzXRuL89dJ9R5phPppF6F1XUr"
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
