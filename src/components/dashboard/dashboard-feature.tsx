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
    "3LQEkk42zyY5qNnDH4hYdKFXYy6PuBm1B6qGq2evok2r4H8oqxfrqxhevks82pyjojcsq4RhUov1wJzZnGSULDuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y2FMZtVJGGYuM1uCoo6SjKqhUQSvDCJA6Rmkr5CQ1xsdEXt9dridLBo4nnYVzuJuY42FCoah8VUFugct3uJUMgS",
  "key1": "2Jt6XmJqkReEvGsc2PeyKZaRsCY42G6AXJozT9ZLM2cjfUwXAQTmxxDmbP7aFeRFj6or69VFHzAYycgF6NnBPmyS",
  "key2": "2851Mz4znfUQiGJMn8P7S1XPmGWDkCyLoco8o7gZL8LBfbwsK5dd7LdEzekVZfBg7CjFNrW7eLkSozypKJuSZLUP",
  "key3": "4aM4p1Vbua9uxSejaxtGfJRX8scd2Qt3T7kFGTNTiFAY2zitC6cM3EmvVugNacevzwSynKaKG5EKBF3vcWaTVh4f",
  "key4": "5NvaLKZ9dbpxipjRoiCBwjMx1ZsDaAPwskRmYmNir2uC3eRA56twffdvokYhGQWnxjZvznBCzFwDYaZxb1ySmFqQ",
  "key5": "2HWoAEUk9Yp2AUZeuHUJc3sAb3Uc1MGNrZveg8XDiri3HUkYCWzuS9bgjdjNfcriSNRzJ6fUFpxVdng56T11thct",
  "key6": "2DN9Hc9PVEARURMVRCbogDHbmn5KeXWA8KySKH3oAo5RpCtU5wK3QZtkaLigerRegBiNTa8tYFSe9FMwDzExyyP4",
  "key7": "33fKZ85hYCkcQPbRAufR3LrT7V7ic1pFbkB5iiez3ssbY2DUhRTUyZYBdLKA6GLhifqBUAfcNQRJR2vD8tM2vwVe",
  "key8": "3SheAYtmE7DRUYiPbZtXnGFYn2a4RL3ZbDvjD22p8kRk1LjHBmw7PbvXkCpAxxcfv5VMycMjSSCmxnfxv7mdibZV",
  "key9": "3PDjkuF1bsZD8rz9EH5MppJpAjYJTGBwKtaeafVcuY5mVpzFrXTzw6NECy6exmLXzPaBwxARWcqZ9MxH4dL6h6MY",
  "key10": "3JHC8N6BL6WpzmWuvYHc496LVpYJ3Rit13jJQQ7tzkqV6f4Hqc7YqRpMqdJi1H9Q4XJj5aCt3xu5iaxMgUYahMVZ",
  "key11": "385AiQiKXQHGReChN9FDYFJ1tF7Wb2wx9hgTZEcMWePXbsdT1d1ihMNACQfvrgokuaGQ5R9d64vXKeViKL149meC",
  "key12": "3GRExnWCL11cuLTkWMtPkA7XQ5yV5bXgsPdjuvGFPsy1t6hgyypKGJ3Xct9mDcTSEjCYMTFSm8tymNFGLeysRhkS",
  "key13": "D8qk9cehhTgcf5AB1Xiwz2tMCiYGKMkrt9W6TiDNezBFwHDFb8mvPY4YKWpxHxgWKLFqjutA9YkNttvRG6ycXC6",
  "key14": "5pBrxGQfRrUbgUGG1b296xUYJ9KpwGvmtSkyVA3uGR2V2ob5VSMz1Ufhpo2X6dAuBJZjRZEtJEYnB6mehjUyiffV",
  "key15": "3zphuYEaLnaPxxbxjEddwd4ci641X6FrNfmzr4NxXDYwkr4CPVw45YRGSZkXxMiddFjqhRWoMcwJKyChXSHcen3M",
  "key16": "5W4S3AaPu9wgs5n4mYZ7WTgLbAwdtZd44s2haVvFDMwhR7NML4eEg4nYpHEY1BwG6s3oQqc75Xem9SnSB9rebW7m",
  "key17": "4VfN5GPHgPKiW4BhMaF7p1eZte8dq7RHSRUvWMaVSQe7dzbv9b3J6D1eeDoZKGCqzfRBfADbJtd6TVzPPVUgRhb",
  "key18": "5msNtRYDK3ZijCa1YqfAZTiU9rW6SmCWWbmC51pAsGst2k6LTtgVSmJzpp3AaX2SwCieB92CmABozL3D5bnFJBnf",
  "key19": "5HRgVBpS6QH7UypbBdQiFsBoixGrCfFXx7a7jp748hrpM7ArjzRB2MvnZtC13HiiVu6PGxf9PT3jtbuXAk89zSmo",
  "key20": "3kaSLGnfQzgQ2KJfp46SYBsMfKpBpLuWZURPQEK7e4sms5fXSG7jkiP6oKptx7YDuenj9Akx5LjwjPFeAE58ouPn",
  "key21": "4FkZ6fqLgpbVkQcZ9bPAkSoXsPRqtKWx2H25QFbw2faeVArzLRcM4YvLWqVeLx932Ta23zDrdTd63yQX7HThV9K5",
  "key22": "4NgYFeD8YcYchRo7sGvjUxgAZn2THAqvDMdgvDNtTX4P5uS2HbXjyjZUnaFc9CrW8pUArbVcpyGjLo32HgRtCYbg",
  "key23": "31GnGY78imLAacZ6HX9pz1qSiCJhnavBuWZfCZcDsvgXewDKU5E7bRpSk4NhDBVMK3WFxaC2qaUhshoZxUfkhmrL",
  "key24": "3abmWmfAcdggrY2e7zNucNrAthMiby2vprFR56vevDbirLF63WKDhVLYsC9StWm5Np6dTh9Rx11FjJfAiMSfv9QP",
  "key25": "2WGZM4YwEd6VKK8pyiVEkgQ3H94XwQr3RHwPN9ahYmU8hguwQzKFF3XpVVyNa5fz1QSv876c759RZ5atxPdfKic4",
  "key26": "3r7L4QP93HFFPCq8RvfHj8RRuWE8366iGkKj6qcDzwLXkyrPiaBR7AncrJ5avbp4puBn53HUxpxcPbDjxqUduyfj",
  "key27": "3ZXdLz3soPhndkvDBge8ZTcBij6PKcg5SZskB5FDxMLGzTSz6oZamYTq3yKyP1LtE7xdJXf2YPkGvsGMkP9rPT3R",
  "key28": "4sskQjtHAtWte382VpWpofaEBwmt8RP1JkeJW5hRaZRRrkHcgbRapeHxuFf6GsXmt8uTRyqAu2xz38VkTP9emqH7",
  "key29": "5Toi9botJMiGmRdU7JqwW9CPeAL9d8t5Kbp6xTPrSbu7e6xpqW5V5FyZeRRdBVfh6oFiJA97gv4fvG3QH9dDTo8R",
  "key30": "5dwEoBdWXKx3kQXJtRv2UZxcwQQ8HoNTou1TAphttBQvLmzW4JsR5sHLKnKYDzwnS8vmtoERjqKg4YKiQjvTQQ9h",
  "key31": "5cPdatJuTdDRGhC24TUsjPbnYg7w2BnUjHzcyFMQrmAE2dDZy1YXZkaff5ZP4nsPiSbNqsncZHXGQ3jV9iDwLW1G",
  "key32": "o2KsEsco4JF7EJJezsQnewtmoJGNXcrTtPMG3TE9hx18Greo29f6Frgo2uZi5y8DxoCKQ8cxwJxTHaDsGVLnb9j",
  "key33": "2zZUb6SojQFspNu6sHJifjMERFhmr4dWhsJzy4C1Ev6g2qZWiw6mcAprhFZW19Sd7neyfBVDT2uyLtvuHXnzxvaB",
  "key34": "4E3kPMxPe8DbNQrV6D7jWwx5htbxNWn3vSXrNHT5dZq3xXZeYLLZKsC5fciDNddJJ2FV2SCYjNswc1ianakxygwC",
  "key35": "5njLzdL8Yupm6skVtexsZH9KQfuTr2Po8u7em5hscUBn6DAGVSgufeKXAWSx3eyJ4muYQM3LM8wWcpNrTDbKE65",
  "key36": "2qmXvnLa8C3HTQ33wtpjVL24D6rDdvPWEhkCirXscKLskToRbtQePoVL2PBvEYmdmUCeJWX9ou9PLE5u8ktpf98T",
  "key37": "3Hwkcv9pd1ka8YtbY8MyMr6t92MvyjRuiVDKsYSAqePJzPqT2gcni5nS1rcuccJ3E5qaxwj5P2ciedzVcwRjL2kY",
  "key38": "2DmnwiLTNFuGJ7bkJx3Po4YjELpNgLdWjTWQFHujurB6R5zXz6eAjDEmjQqDFTtuisHLjeLPdcxTBDBWZLNyZrU3",
  "key39": "3mCoj3qeSA3qF3tdkLKdbQ9ec6Z8Yh3yQo84BreDxgcB32D18fndRP1A4E8iPQYwgb2pRD6PtrPDp91hAK49T8wv",
  "key40": "46ti4PE6pk2yLigVJjh6aKjfR4snZcgFVKjErSzimWMKy86LGQkMFrEUgRVSGX5Dsfva8f7SgxtktKF1raVzPMde",
  "key41": "3vSoUjjLwxy2c5vxQb4gvg2R55KxJS7TCs8zmVy9XbmN45ujj8sQgArzNJM4vktkBwT475TnyP1kp6AZHqzXnjCV"
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
