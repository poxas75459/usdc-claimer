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
    "66sstcQfdWi1L1N7xcURuVDj15suPSsd6fuaVh22fUKoZbczRrgSmCbiQMQ7XDyu1mrJ2zXDSLyPuLK3oCbU6dEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k6Tja84HW5ukpBpcFTDsj3H8cux67tVgBfqUED5RYuaoqUjGe7qjkwN1X2txfAjMF6Z3BKymYbdy6G8TZnc6GBP",
  "key1": "2dwoyoYZ5NkYoRGGz1VGiyCbDpPRb9iy9giLB9d5ibKX3Y47J1GVYz3YYE7n1XgWxGTEwzpcyzwivevpBt7U6Myu",
  "key2": "XsvHDtK4eXLBkKnUM3Qm8zgJMm3QNRKBV8aSjAkcFJeGBD465azBh99ivtTbcTjaAhrAWxgj6WJLCNKWXDCLjSF",
  "key3": "2iW3ao5kcu3RPYFXFspUf4tr8gun8WXyBvSsJZfm7qDAYegrLjJdQoQu9Q3PXNGwwpsXNfYUwMjsVAhzgdFtZFo9",
  "key4": "4bexXNqP826Xp5ffCbYdi6oxKsiktVKdu7GmkaQReYZcyuXHAmaZsfUCdaVFjRVoKwq9FbbXxEMedhGJ2DNAv991",
  "key5": "4M5F6uYQf8mbNiAxtU8m1xkXnUznsJHYYEd2dAUvC4tEoH9WrECPm4MdME9VfUqY2R7ATidHbdBH4Hd5sxPH6Wie",
  "key6": "WwgDLaBPqaaQ5sHHazsFf5xQZCzSKNJvvMvD2aSULrsEcz5DaHgxikwsznwRa8NbDorTfcQXKF4u1aC97HCvsnG",
  "key7": "5ihKYHgNCf6ZBZtoCywEdBG7Yy9aKLEPyN3ERH3AJTTnTBgCFtE76jyR8T5Fzvjv8Js3DbPcjVCB4WUDhnF9HBhx",
  "key8": "5wHjzqQcmfWH8eYGKGxZvwSUtmHFsxRKE2s6APjY8N2bJHnUwJbKmydevsWGPfBZk3NtvUS3QwfTbU6JrvnseXSw",
  "key9": "4hbjJRFPWxUNdwVotEPZXuwuHusQTjyYQVj1YTSGkxkRr23QRp81FJ65X5gq36huWHydTrehcekRgdSUtV1Umzci",
  "key10": "3YxhKQZafqTpQjM2Mq3SNwwGQEGYNGD4tc1F5Ur2jGbJRNF3tfo1c4PhrRuq5hMofGEWUubcqgG7MK6JGh7CiRLY",
  "key11": "7P95VKzc5FsPAhumjF7Y3QjB45fnqN8qfWdpS84rC4UFdpgAyKumJfVo3yDGAXg3wAou2xivqg1GKo3SqaYC8k5",
  "key12": "4wLZsSnxcuWCyAsqgy5nTrZfB9P3XQQWoxrXwtJbcjShgPpvL6b8bdbTR1QvphTLP9QUsHDe1ZZp3FxV679kaExf",
  "key13": "3FVSzpFKM7tfEYNxJJTSbqQwKmeT1nB2x6w9FgKjrEv2tMEYGCQfkKEF1KZnb6cMchiE44iuFG9cpeJ665xBxzu2",
  "key14": "fhCgTz7nd9Zg9cF81FCj6ZEcM9QQokTBHV7qFjkAGaZ5mTD1f7eg84HcS6MtBS8GRgdGvjusvNCUkHYE2N1yKkN",
  "key15": "4YrATyY7w8amuYnJApkcycFHrLfViXqKPA9dsruDVbQvErLjMVgLCL4PHeNMNUSms6Gxg5bsuzyDDBZXt8aWHzA1",
  "key16": "HdiSxHpXhS7p2DPSWoua8DHmUmFmqxwzKSfDhh2HxPr32HZK8VvPp1KvYbHkGFM8vK9WSc7CMfnZ8ALG9Xr3Q4t",
  "key17": "3y8sn69bRqRoC7vLwpX6qUb84MPamEdUMehmrWED9VJ4LxSZVgfHVtGLcuvnMWVjDstKc2GFQ8fKJG4kHdg19Gz9",
  "key18": "4wngz9mAFhtU6DZ3AJ8XPyReS7yMZXZkFmTC5Hzjaf8xizBWK7EFfexPrAUCFT6DJsunD6xuQeH5baksLheeBWJv",
  "key19": "5GnHYUe2vGjrXSS5NwpGGzvdKhEes2P7ncuaQ25RPJioUjSRZwgtEuKtnFy85Re6q11u7BPmLojHkFixUUvLoVrE",
  "key20": "AJn2QabovbW6q2yY43aWuZeLRACmja2W5PSnYAF1N2qjxGvedH5Cs45aozW6oRUenSkNeY61dtD6ms2TX4Pc2vZ",
  "key21": "KCMRinW8GeYzSDwp8zBK55pW5aD2wJaKD1dgvBKsYbdXsoCd3Ci2eAXNPQZ1qZofdKbjdNq7upszLJTcAgij71W",
  "key22": "2CaxUocNVn1PqXdHzLRQ4pf7BZ6cuY6xSrqbCkFFH25rhTXMU4awgTPwukSbAkB4yQg9AT1TMXiyk3CBsdHrXecT",
  "key23": "5kcGuHMTupXhfH9rvPRMUSewefaw3uJTz67kT1ZyHjEzonJMaPVhyZCihMBpKs7fLkB9Dqtf92UiCPetQGys3S6W",
  "key24": "4qNn8m9DwZXh2X3rMe1bCyzRAVNwdPpXi5yEFDVAssdK9YB2M1kgxGMtQHvGADkjXRWi2t9t9BWuqJVvt8HdJU6Z",
  "key25": "5bHjuxQeehjo2nw62yM3bwoh2pS1Jykdg4MD1qje26ZmRauCFbpRMRWJtDY4Q5SZaCvWUv5hqrPbAtnQSkBAywXr",
  "key26": "kES7s7YUqjsYYd443fdWMTkDPirkxFJG7UWmkSWydjoPpeK8kjgnwYbkZgggMKkYiNFD1QbbPXN9UEsNW9yCEu3",
  "key27": "5NGSqsBFrhkB2WhPWyoYoeKSDbFP4Vtqnw5piG1RFNPkfsTiFUFWiPp2cTyMvL89d2U8H5eVC5RcYUVoYxe6rYu9",
  "key28": "JjNvHUnWMQHKMtgF16ENjb7v239vEKkMvopQ3QYFX8RXdFkkztDpWwaMvMERv2ZuhFhKTYanWGA4vxaJUrnBWST",
  "key29": "5gxWLxN1Vnz2bJpPFUBesF9kVtk1wFBu21dAZLXisjoUBXXYYKw5fk1YZAG17hD5YQWuZmvu8KfWwhV8cNVoAwTE",
  "key30": "47PdVWjn9XTbGxhDFMGgYjBsofUxxtUwiMNkqgeUo4cDKXtgznSb9ModKSu8T5dSzbBXtQy2uGQJsH9VoeAjqZ2N",
  "key31": "2mWbh8JaqQYWsc7pb7Kik65EGRXuvQRxpzvEJLeKftoJDogjLcucTL5t5rNxnZh2khXYm8KLVisC1Ebr9YNDFomu",
  "key32": "38pLrM3kxLvMzZp7gFZjoNXu4FtGCNcaLYCThWhMMkAE1DZWGypnTgQprzRiKNSEPdZZsFyR5amqLAGfkTqFHEiS",
  "key33": "5jUjdrrv1edS8aBzNYh6XQKtkbLdTfHxu3HKzMb8n983vnA6q2B778a5yaJpvqDaypuJzxEHBhBBZtfytNwuM8eS",
  "key34": "5AR3ngGPELGPWDoEMoPMBdLgkNS8SmLC174ep8ZkgQKAK1jeDQpiTqKbtx7Ubwn9uS68fPUNF92XwoaF4cgXtuJ9",
  "key35": "4sKpM1pyMMVHEek4QJatPF2zcYQL6zBJBtbjCwHKna5uR4oRpMQPCkSb93VK3q7tCUiwQJpr95qF8HMKT1SUjc29",
  "key36": "SAYDbAb2uH7QKduEox7xBfHj3VUpmngU4SUrhErzbQsLsP6rUj8kWEYqTucAU5DAQTygczh5j4XvhDjJ7CYkLtc",
  "key37": "MKSYRHpkAzGPYmMHbaijYaGDgRoNnrT4tA4a8dSJ8j8To5jKB4L79BhkFwwNNj7LETNi984FfFVVcz2pVQLiGDG",
  "key38": "2JkGGV9Kyskj7x3HJAUtqnwhLb2NdGEtfFyNkAQU5ibr7Zn6yLRT8C5ayAePuBAvjwwmWHQkNuhh1Yz3xWzjFMV4",
  "key39": "3oRGZ8iKHtQKRHWYtbCskv3tmjK5drzNiTgBDfRnQi3ymWwPe2crFi2fHWaK5uVhcPX5qyHSTevMeXwdAJcFFjBC",
  "key40": "p1hNQ74vJ8WzcXsEwbYtmDjP6M5igp912z11DwJciPwQ2GAVkhL458tEoZWJ1C8XZiR1miXznMqh7EECtB44pdq",
  "key41": "34epJwYxRSjvJbo2yFYP7NjY9Yo2mcNLKFENYzD6pZEFQYczDZ9DffJyzviQWL6FSVada7kyRmbqV1EkS4Wf9XZn",
  "key42": "Jeoo2j8wLUYDz6GdF3MnJKUQDtrwu7JwJyqj6u7DekuYgCfRSaE9SNgiWAxcJEKz2HRWxLWKtfoyytJvKpc3sce",
  "key43": "2435sGQxqaFNehLR68LiLsSH1AZQCj6wPaCay2AeuHrVbbqUp1GnLxRSLdwMGbPZ2VKets1aR2Qx4eASDQSUxHDQ",
  "key44": "5uTModkuvEo6VzkLhYZRn5EmKeQZiPvj7jmMCsDohLtbg5tuX1rBfZGaAHL2kCotLx75t1QfN73EBEVmdVpaeWbe"
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
