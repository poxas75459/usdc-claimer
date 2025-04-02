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
    "TR6EiX5mjTaaUdDjgBdnc44LFBm3h3NsYBmUm9uWtfNcF4655Qrsk1JvJ5Sm1nvH7AgbT7DWAcZmpMob6fSD4mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wzZs3isCTR1XtyWXfMxAfmSgAVDHg1m9EhzUZkd7arwArWSJ94N9jSaHqvEkishbB8Mx4WXZ8Bf9oNzS68WY5Tx",
  "key1": "3va2dP2boubYmKZvyJSBNsLHg8K2Uhe89cAq3jcooeyXWF31TXgo3mQWDqWTJ3wKjfAHuy87ckmAgjDSf643Scrh",
  "key2": "44LeyGgACuh8dCuk3rCHmKtJ3ibyT8aczKqVixFWw5atHirixdMPYvAk8P3pRQVynh1WArtaK32jnh5LuhLFSeMg",
  "key3": "cjjWBhV8LnFs3ytrys2gGHkZEvCQupawEjsKfRiqLPGugQcy3LH46iPmqNxjFNy4kxUS3nwpcWZBgm6hKzGoHsX",
  "key4": "5HqybhJvceLBVaTCFGjimpDf1C4zAq9DK4evyiFPEDKHNyHEYpKK8CJgnNQX65g4gXeKDXQZjygtSPtspLZJ7jfC",
  "key5": "QSDX8aKuqwu8BaGN8ascS6EsGF3A6MMPPZUtBtsqLEv5dUPyAzt8aP3NG4nCCdWYWw1YBQFAATCMp8r7y81t7ye",
  "key6": "kTgZA89K3sHSeHaooEMU7qEAeQx9omsK5s5VZ6ge2xZAQ8c2owA2FvnSHWdpvuUdb4cSzts3pTpiwFgn7ZjShai",
  "key7": "54mELNBxeNMnydQi8PKT4H3127USb5VKm1dZVRYAfP7gP4JYSHvMivUedw8wpHhUfNh4Lgtgm1gDGqc7XCXuRryg",
  "key8": "2MhgB7yQDwQXA4MMcjBwmMZYUcJz9txLRNG1PC8JYjTWC75zwswFqS4ttwF5wXif9KVJAvB8Cm9EuMxL2eS4eSau",
  "key9": "4jwom1wJs9PhZhy3cCaRyH3obeNfgNYqocBrmB8g3yApr5GKfkcrn4QCuVhACcds3qt7V9RkjKXYLZvyMifcsZcU",
  "key10": "22fj4NpGF92qL7sAZLpUbYVyz4k4hnWQngnXfHqnf4vKrF41JG4j5c3Jkzh7N9qtVEAxcEx4vRhQXYn1seeiW53T",
  "key11": "5ySghKdqdVNoaVwDGRkHDTtSXZMUqREiDQPjSzZ1PB6kYqZ2MyPWYa6uioruxk6AAuNoHuxSm4PdumwpmDK3QE1T",
  "key12": "4pzp78wVwFNREdCyqiefKtapKUhDQgU6f9EziuW22QMij3XzvgBkDyuo1f1nwgReYvDYskKoj8JUmrbQpTHEkEAN",
  "key13": "3AubPJ5cVumEFbk9QcTqFSFeic4qwEHUfT7L1pHEp92QczWWG8oz17g9GrVZhRL1fYPZxEiqLtuPyGCydnjWonSJ",
  "key14": "3c4rV91WvmKSUPLibuyE66U1ggjnB28RPgXguk3G838p98KTk1XYPFy1hbyc2C9Hx35WUm8iHce99iJL82ciJ9ZZ",
  "key15": "tkcaFURin6GXQ94e2xJZ2111UHwByX1tMjpGkDs1syrv9rWN4sQJ3D1bbiGJA8d6vTFrEPnQwUTuCDbqBkh7sVL",
  "key16": "3hyXP7rHpekF8BHB3XzuHpov9mo9A4rrGaopVyDybtk5cDijmcLo1Xo5s4syvN6uzksXRpsmYnaQPDQ49d5zx85w",
  "key17": "4U8dvn8NTeJszxSPs1uKRMDX8o5pKemv9rfSuJbYyeEFcKTGU78k2CS48n9YvB8q3YbZkFwMEJxfBCrvixbiyWmv",
  "key18": "3CUNJaL8fpENHoyaZi5NgAhz8n2UCxsuU78XetEFGKES87qKxg3KbyE9xp4rpb7bcaSFjH5dovKAyTVe5Rpznbd5",
  "key19": "55PisUW8igdHStJFUb2xQKFcGJHL3Si9A4WFeQt7SYuv9JsngtuhxatkDv7y861GZwgjD4cSaPX68ivcmRuMbrzY",
  "key20": "4NiAkxWBeiUp98VSr9kusbv2JEM6tA6Yv5G83Ayv4uSZwpCMD6VVxKybqvpcuWeWfjwr2UCxiBD7TFC7D5yBJuZG",
  "key21": "5HuByXTDaGLmx4Z2aQTcGUMjzwjLVzM4Y1bTCtUYzmznJAvpRYnajdc1xqDQs21T8WSfAxSSGE1yoLZPjcRPP2Jr",
  "key22": "2rCwxKo1rJMrLZavxuEHuGZwdHc4XuRoTBtWi1ZS7NxeUZMu3K5GBw9ZLUUvbUoUxM84LhfhStBCGg7UcMSBCyvE",
  "key23": "3MMhAfMxYNYHsRwuN3LiPTuKbTqBnG17Fe4PVKNkGXEb6XNMgn4qfgDiUp598F964ipk1hn9F6oahWN9SvBFJebb",
  "key24": "3tvHDXFaXUz7eyuDU3DJBkL7P5saHLobJVxRFxNKprUATHDCwvPK4whQivBGChxaiBbDQ7DBqBQ9jSLyB9x7K2Hj",
  "key25": "37aGSW6dQpSRSmzns9oNj3555ub9di8MEzxutC9Cg6QoPMZ5wFt7p6qfbsuhaH7PdFUS4h61C7tdC5XparkcWizH",
  "key26": "5VM6YgbMTVkHAoPj4PdhJajejbMxgnxjkP6X6N3NY61r7iujH66NH3cUuCXegmRFZhJZQdNRF8ssYWxifpZ1Bcpm",
  "key27": "4QWcwgD42bT3xCi2tg8WbxUwko4NApJQqF4YjpYaezEJhvvvrihhfMPFxig7a7pXTsjZ7UuU93mmyi5nvWuXCrfX",
  "key28": "3JcRfUjPUdPtn7K84aKMmpwCzFn67cWTyw5RB5psdWkCqaiqSEC2RcUWX2GMouUK2YXNV9FeAPf6BhTvPFXKcrxx",
  "key29": "5QpeZug1Lpgfx9RJUmo3SWqmGiVnZeMsGXVy3otV6jB4AVBTek1TiVuk5MnBsA8mSQvmiWZb6SSzFRNvwCgqiPvw",
  "key30": "4hhQeBtoxRxVe4yw3PWvxpvVJCWWjdqxPLMNv8buHrZTHFtk73E2uHXXFRgFhScT3jt2SmUY3MEPZG7r5Tx5jSss",
  "key31": "63wqo3ZDrXkVrTFTR5cD81c5NYey2jzz88Eu3xp2RTdG221qiV4MRHyyZoGfrfrTFeQPJw58WHE3eJq7MJ4RPSJU",
  "key32": "6oMzRNF9S89SCqHazkEDpGJGTGCMH2EVyAkQR74QuFUprgQvCCoFDx7r97r6cHdyy2KGGm1TrYYmUtZh69RDLVp",
  "key33": "2hUdmRWxX82kkFcZ8dQ6iZXzntYzX7MPE1N5eAQX9YvA9Qq38qAaLLxt2X4f65ohq5hj4sWpMCrNGrE82Lsx7fq5",
  "key34": "2tyHKzNudz5m81RBYTmjS4pbLV776R76HwfGA9NurP4uHypHK2dwe5Vd2M7R5xH4hxza2Dae6i9Cwdw1PFDSbtyv",
  "key35": "2CMP4MjXxCV1S7fjdsgcC61UHrjhrBmEkVbdVKceSy3s4QvPdaEBG6nYm1RS9vVrtsSxvtAch134TB9QqYMPwnxT",
  "key36": "36LL8CV1JurS6jywqeQBK1iuUMwBbrWbFTfctym8juU7xCy836XunwZsBMUmQ6vMkrJBT4xC7MpzxYohF3xfaouP",
  "key37": "4Mn7P51cTFiXeezc9ddmzCqPGKz7M2gZqWjcxhU7g8jZHneZ8Yz2Xx3UDBWD1QZZxScqfCPcqMQJVijFoFPYhAjH",
  "key38": "2vRFHVMHHX3vfMQinL2mXQqfR18rkQMJu9opSUUXrgJ6cTFi8YKtXPrYRdT16SjUGvi2jjyXCa2bL36KzsSptZpa",
  "key39": "25wU82oGJ7XLqRHz5tCDk8emJmNCAqg9XccHXikrGvxmZ9V82MuLyYzWNdyeQ5JXL2mXxWK1rqHPLdFPHXuPyAM5",
  "key40": "4tyMWmj4aFcMpJ2SXtSshT3JMwVvWZGwSdcAHqjEnmCWWCyY9D7xVZPrbeNFgzkY3oCYm5PL1BeubaqVWTnmreWZ",
  "key41": "4X855DvCmRr1iSUgdSvNUbN6Pi2vZEgy642T82nFqAdnNo73sezsD43kUksfbqXcK1vMBxBq8UPzjb4k3SXBVjbB",
  "key42": "3VeBHknj6RnqWuYfwGU7rnNs9CREMjr7f2fkJtAinnQq2zfwRv9xUJZeUmhEDh5vJmJkFwZT8LdRPqWhiyHX4Dkf"
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
