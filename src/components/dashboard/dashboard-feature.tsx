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
    "3oXTAnoEdgH7Yy9fnsp4T8JjrLgPcnqUCpJNdTqPqYNK3762By3k8Z3hYuaqfXTUe6K72DXSo7ueuLjt2S3pR3ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J5h98ADyEyAJxQHGQMTZk1d8kUpuQtv4dJh9EKLgrLR5GDTyxJaBN5UYzMVTdn58a8ZEkMpvwfiJHfBony2BxJa",
  "key1": "5fpxCF3gUeBUmx6MUURCuDpZmVVJx2VBfXYWmWhcvykZog8DHssKCAK526UfPK6rYL9EtahP5WSp8NVj33uwhrKT",
  "key2": "63LuTtJ3sp75iAQdvbbRebEJAJjPz5Sjug8nvVgDXZ3LvThx8gkTpQFqjc5yx9nmziLAYB9VS1EtQdfu4huX2NJX",
  "key3": "3kDZFW2iassj9Pz2QLrqNrUx37ZiBXWUKzVgyKazSQDDVs49i2Ts1EHjm75ydvnxAAPJBh6PJSVv8YXxEqiUpDrX",
  "key4": "4f2dDY2bXfGZqTEAwhneks8wC5RYrbSWt6Uk4xanxCnzhVRtFzdCA6bQQu5c1Z6LxbdhT3HGaJ4P2iyhW6W7Zomj",
  "key5": "3VidoUTYU2CHZyLcFTEc3gzipXukucVwxLEczfvBXY1NJsiHnoAaBuRd3RrMXhXQjpaZmF2ErZZtSNuFF8VG3Y99",
  "key6": "Yd1YCjHcazRukFtdQLkcXjJ9W3VtrgMe8AK3ogJkskiUaGf4JQeJJh6GBjVcxZ6YrmHwKv54rwYo3wjvpJaMKQw",
  "key7": "43jqtutgPHCvMUgH8k8N5qYoFjXC8ncYneQZX9Lc3NmfVMvizs3vYRTdJU1XafUTRNMKw8g9kxxGYycoi7nQwaq",
  "key8": "55M4Ro5VeLN7k6gZcw8nN2YxaD5UiQuqjzybzSQymTGesz84jwSdvuNZsD7No1qH2uXXt1pTSAcaT66Vc4Nhyvg4",
  "key9": "4ySMeq5madjCrGdTk6TTv8aALt2iTRQTs4knbMFvMqFdWfdB3i6nDoAkZ2cX4LMNmektChxGufn9yGp9uzaMzAzR",
  "key10": "2sLcpUHTJgTcGn1ahfs9CnUy9wceC3PBdcsp9vQGac2qxGBpi8wuEbGKYAepQDaqtqdLDzPufYJWwf2QxM76wFKk",
  "key11": "2hYDhZguWsYtmnWZ4xUgZPhH54M54TbkReCXKd8UjGNhxyE6F6EiuU9eqmkJWymV6kUxwjKKcLeVzeDzn6SWm1Rq",
  "key12": "4BRMiNa7jBLWAnzYDCDrESy396Sn1JLMHaFNKzcoo3kLA8uPKrqWAApx4DZQ8Abjm7L33AKtaxuqVZoBSp1U4iD1",
  "key13": "2ycmJ87f8mHeiwLp4f1NR8RQTphcV3TVERjf3rmUSSXBiFpMXV7YjZxHjQgvyMb3dhHspMm3nfjacukFUDQFFnjZ",
  "key14": "3uCts7WALkmaDekurkhEmefRX62AYBnwZRwBcAyqJLCKAX7u5kikJvzWH2dqasSCNTa7RU5oFBGf15b9KUYKVRRG",
  "key15": "51KTuU8AbE56YQZ4jmfa1ZTXKZquXhFB86zasxy19dEQczXjCWWjsh7r7mFaPw8VrTUHy7NtqRtZWWALgYjbH6Hm",
  "key16": "zRr2bvQzS1jjYsip8TvjBxNoGqXcgUQCSZ2qD8B9swQvNpksYKvmkwQHTLdHvmGmCNBGpEeSAC8MLKBjd9f4zG6",
  "key17": "5ywvZBGaJ4s1sJ42Aq3zLnZuWBr6s6sPLcM1wdVTbeMC7prGciD7GiiHH9j2JJfH8iTYHvCtuHSN2Xb2EjfjWKnx",
  "key18": "58H8kzQQph5td2Tzg37Z9TGVHwUFgeEyL67uqwcxWMSY1RYJGG87RdWYz9P7ySq3R1b4nDJ8H5n6eY3qDmEbL6w7",
  "key19": "TGLDziJHcryiaBHdJc8C1ZC4cSonwn7uebdA5bL2DmENQ7QFFTh3hDyH37YGv6uhwAwNU3eFG27gFqAcFuiMGTv",
  "key20": "4MJ7cXyE1hVSW3rHsRW2ADyn8JveKV4RD6CknoeWg1efkNqUAwjBibi7qCtqM2TzFdLhX887FFoT2HjjWE5iQsj4",
  "key21": "5vBkSHxxFazMg2dNea2voVvF8HmAf25HSs16bWVCR7jJrhrv9VYipCNjrwfM63fXMeiXkzF5kK9VX5KogHtPbJH4",
  "key22": "2TiizWDV8Xdb2Hr7ix6k1tuJwY86RoLVnwyuySW8sk5pb4k6DXedJK314Y4oTCH51VbLd2rDJpu7ih5HThK7KaVH",
  "key23": "29Jxy32NtFPvUj3Fp2VPTgGEAh5n93eRAxa8ctUDGm1UvKnE12wGMewQLH4jNky9sC4g6Xt2j579m2pTgaDGF3qp",
  "key24": "29vYjg3LGXWQ5seUhCJriNckjAohMfP5RxjgVPQo5agkbCdYSBFNCgimLdtaCTXfHD8xiuvSSxxe3NkykCqzSicg",
  "key25": "5ph7ZDwc8y2GxfqkMp5wY7XKNqgLrS7zU3vvb7tBYXaPu8crzGnKormRKuFKemu7vGQrnzmoa57BLRXQ12XjYSM8",
  "key26": "3JcBwjHQpxa7rtAPJyzYntpfY57kjG25PPJBW978HKDqHnVsQShPWD4SLEPgHwSW1XEjjVGzfx2eusjCgTgUMs7f",
  "key27": "qEJattnEb6DdwSJxAfYddTrQhG6GNX5LEskPPRubBSNpgwoUvoGE7BeJ1FNTDi3q9pUh2SeQHKY1XzuatM6FfYj",
  "key28": "5s4XQLCrwg2VncN9X4AHXCuC1mophStDxcyADEK5fZeBLc6B2M9Fr7qXD3rX9iJz87YF97BqZhSasQhsAvTfaid4",
  "key29": "2kjCUQKTeUrnwyxXb8YE3zqsAk63wjHwvjJ7wJWB4NbNMEYCy7eM1XwtVamyPJwm8JZNMSKnaweZxqkWjmt5KQcF",
  "key30": "3Rv71y2DLYWc2czkhoufqr7MR4MNXmd8t3mmK2Unf3r7ofjbkLiEmQYTSXc74dcvuw3aue21TpiaDDoNrNh5g78v",
  "key31": "LCZD9mqQVAiCGWdzzKmqzkfrXLUqvgdZExYHjDPrGyEcuhthSmeqNigjAwDEhSFa97hyLyVjiZ9nWAE7ZQL6yDs",
  "key32": "2Mnr9YHDx5Xd8HLnRCxNU25g67YqkSp5Dqvt1VpKVKiicNbE4ZBXULWNM8PZaJVwzFkCh2GvD9XHeHX27Z64fdGV",
  "key33": "4bGaAyyXUfFhTTv9MesTcUdZEQDmk286doeHLJQF2SRtpNrTn4LDNVLKQQt4KTTqruJH6b8YefuQYWXz1LCGpB5Q",
  "key34": "5swSRQbkgy6sr8ZYFDgLQZ3z1Xu3RWynZC549T4da3mzQYtzHPTULYXSaJJR1pNyRdgXExobD8AVfdYGjdAHmnvf",
  "key35": "5jEBn1fH4Gv6mHrjhSFSF3mKWobzpsRNd2yoaE2Sw2hKd1AR6eHt6PxikFQJRTjBJudiYCwqwTfb96XktNBGZcLw",
  "key36": "3Ewn3r1A3ZyTmuSGEawa3ampBFtQB8b4upMfk3ioXLLzL34MsLNrcJYtJ5pmcPD3Kb29P8cHRv4cjGZagw36nYfu",
  "key37": "2sQMLjt5RTgRoj8CVy3ykpSPxAfvW2iMSAggQuHf6w6cYtNpCrVGa7gHwZ3f2Y477nc17GkZsHr6DVxs4s4sux5G",
  "key38": "PLKQ1L6cgzCg3Ben63jhGy6W76PVDXZaDU3mFW2sNjX33pNpi2iRvTRvb9QFEC6u9F6LTbMjSR8KkU1dws7gqQf",
  "key39": "4sut6d35J8KqVayVNCbMkzqJWm53F3XQuG7tUxo6mk38Du5sTynzTt1nyRqHDANEdWWafSgXAYpjWfMoKGiSMoqM",
  "key40": "4quLqFPaDyeumNXrs93WveCkWaKfSLgyQd4bXQ1Ev1xMF8q4Gb5xyGb5eRTPVn4k2r6mLgJmPC1pRg8KdE2kmrwC",
  "key41": "2sPed1pivrBikt5Wcc1rWdLP7RxDjoVZYoLhMXy5ENrtQs82QxTZZm7vgLXmfj2kXMrSCG5iVGJZXA7Pnf8f9Kva",
  "key42": "4rLLqjiYFSjdU9AnRmryq2b9ER5P931RqjfHWgzB7rJBQTmMqerHhUy4foFKN4P7PvLK3wxN9n2wT9hGLZFDcRFu"
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
