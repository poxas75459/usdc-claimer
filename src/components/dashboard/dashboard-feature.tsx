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
    "2M7ATdF1oe4UMB74py4vmLQxhFd2vATp1XR7BXTjAWuDACTgLSMJYS3zpPL2wfne5ypZfBn7CH5pkNJJAftzFSj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38equkChDmB7UXr7tXF9yER9MhwxCQrTbSEWNKEsVH4Gf7qrvCtk8W9PNWQFYnJKY6DsNU3RSHvEgKHD6Pxs4znQ",
  "key1": "5CjdA2zNYj8TLtgBdynYBGazMes9WZ5i5iDJPEgAXj5dUbCH47z5T4SfhDZEt8ZRDJjKCdhegSXu4q3QeM5ATtrC",
  "key2": "5uYhNW92eX8yRyXfHamiRWmexr4PzuqgdRuZvKN5X51kEsqeWcQcgTTEweEZEu7BrMtEpupvq4QCucidqHJ3Np3T",
  "key3": "47dzB5WJH3YqMrmGrUcqWZXzUsaymTSHseKwFN1FqtmrHFHe5u4iRUxPkUUDWbopUjoCyyh8VB7Unayrhc11836X",
  "key4": "4twxCdn7ftyGvAgideBdD6RiFWK319pdgUwKVw8pcvJczGsdkUikJUXTaqebYG1U3B6Tnzku54mUjUeSFAEbSu14",
  "key5": "2oVTQZixipz5MMafX9ETn2yW1H6w4qSW3sC4xvVbiNiKvwK4AR7xwsfZ8gSn3J7mp4jqtKSNFtDp93qbv9QCuGNd",
  "key6": "36LJvkPpL6phRr6QNPv3F5RApKmyTkYFMSNM1Ryfe78JgvK4o8hFoFJAL6VvbP5Lgnq5WdqfQc4RaYKNRcHsNTvf",
  "key7": "2Z2vEzfG9eK5jEywojHn44orAuA9jrWokZHZdVf3gc14fWSpwBJUhhP6WvVCqQ9azANjyuPsd99kUthtxQva6jqj",
  "key8": "2YofksysfSVBA5p45QETpGCMao4PNmWxJRTk1o82hEVukbhCfvL3KKv42RrLb5AgDAm2vN2DKNdauKV467UC2qeg",
  "key9": "9szmkdbEFCV9GYQwybDLo9b6ti6cGJAStKQC1fEk1EgQ5Z8yBuMSJyjD9YhhsVEGeov5S8J2cygxhPcMzVMEYE5",
  "key10": "5pTytgU5WoUkK7jXQZJBjYPVz2NP16eA4RDcCURKqvMrU8fZ5B7vCXqGkFEwEcvjd83CGECpKXLKMjei9DLEVEmV",
  "key11": "57nmfoY3Dfh7tppF8jAxb7orLUtxxad9GqPjFwn9hoM1ybJeSwFVthodquroRTr9sHFhvoZhVQqhvfB9U3iBrYea",
  "key12": "3pMCzkEBMJ8YiiMfZVqB8Un7xgGHXfSQUuWEiTq8nSyTkExsF9tzXFfSk6UcsM22sESHtBxVGMdcqHvM7gF6Sczy",
  "key13": "56WyFRHiHjUNiayS5kAu8YgqqjMxAaAfoQ4ycqb4813U6HCr7sqc641M6dph7eTB5zr6pP5yJxYjX2khaA2Szwuk",
  "key14": "3CD1iKMTcGTdE6xgm8KjfW9ADtZ8fjNmiBEDqoPkoZDh8GG44xrZtQV9wdwvsPRrJScPxxwPPTs9yDUFiqnwTZWQ",
  "key15": "5RLN9XUSoh8adhWuNWLTVd1DP48ZL8dJ5Wim1BuQn2hjWiuT7pKrmy96ahYxojNvrkr4kKhPXwHwoUuzvLSSwLzs",
  "key16": "322q429QEsmb1FrJGSkvWSt5bK8SMC58JyJvaVnEjhWKzh6sov4ZHwmLfSt4KdnkyJtfLEiN5JAiTnrmz4RpErre",
  "key17": "2FW7o5iDz1bUPQT3QCwR3itoaaYhXjYJsXC5d1mhjtTADARbAf3UbYch79xgSiNSKj96dL6cyapib2kiLzwuZnxJ",
  "key18": "bvxQVFVvfHuRANAodoJYaafpmqwzHauMtSrkFpi6tUJwhBUv8JvQ2qPNKVsMimFpmy2MuL79LzdybAGmTtQezgE",
  "key19": "y36jbwpzPeFgWwRfphfXcC4giaf23TQR1xNdgqorAfGYowuMBRY1WZfh3Pd7NHVqoi3sYxCxNyiVvJL5fMBUZ6o",
  "key20": "5Z2ALbwqKeZ1vGkC7zBVkFTBSXCZT5ooqxY89BCsb6JD68Kba7mdNigQ6v8NULyV8iysmetYdEZKSPVpojbcHhUx",
  "key21": "3Zfi6FXuBvHmZAmafB4EcZjRJA6m86DJTHQky43EC5Tp61wJoRAvHf3fJLKwyJPDDbbrDtcVfmD4BDkTvp6DZrtw",
  "key22": "2guGPZy2CyfScvqxzWbpVnn2F322rdMatQJovdYnFsZk39jt9iKLzGZ4c7gKK3YywTeWsPDL4uSGgn2h1QtoFwKM",
  "key23": "Q6rJj35urHuZ7R3pQCGdcAKiRKaVgpijDaTHudYPNMyxQCx39X59Jj1EaGMgPo8vrsr54RLiS7DXCS76CJMmySd",
  "key24": "2hJiV8thZLoquCqQJwCqFBbHgVcaVnAWCyXdjSv3ZQMogQZp5unUHrniTesqdEyaj88GQSjTSzYTSVc58r3jgQRL",
  "key25": "5HS4RMW5mc2yMvo7edDg7Cp4HEE7z5JHMYKxwJJteNrrCYkmafh8RL8f1ucuT1u142pUL3ypgL2Hz59ok4a31uJv",
  "key26": "3DnCoJLA5AV7fPyYXETT6FMeQQtRyJ3FSJS4FwtgtjkidPPuMkXkcGmkk3n2iyeJvD6ux8p2i8f4KvQZjoidJhGa",
  "key27": "4dsvC6urp22ZHK9hxZpg8pe7UxuZXQYfzpKDPZWbdmeYkpckXsATvEPT25YufgfBUxRsaksYmkUZR6KnQB3iAbur",
  "key28": "45xwTLecRkkxcgTo24NCnMKZrhWUiPnNkhVntZHEcEZF7h73BXsz8D2ixFsmGUjN4NvxuXhqocGt1u4s9F5G48RB",
  "key29": "49NHiKQhHQjTuMxJp7gNuSm29mzDMoJnZTLDDtGR45kjkkdmEFCmPvMZNeq862YHZQyPzEQcWY2x3eyvqxX5R71u",
  "key30": "456cdmZuSghKkzWxkxMU8fm3A8ySxAt9eGoZ1yUKpAhuh6EYWNsZoZJ5SqGbVgfH3j5aSDm8r3kJJqCoGNJgQ9Sk",
  "key31": "3caFZcdKcfGrQXcW4y9zfaWjNRvg7MxYduFr3phNKCspPzUP4UXEiHY5eU4fte63ovybiQVbRzRjZ9K8bmEY16tg",
  "key32": "24NvUBXu4Qv69xLfMu8S7akgsdEYhuK32J6GTTFkf9gVdes6j68TusBaPDcwfJgy1SRCcUZcySy1FfT1HnqqmTmk",
  "key33": "3docQPAavkFcs216jBAPbs9gtsbuCQwN4Vq4xKEmWwzBsoXrLCZs7MLE9QdAtnPJoyVMV8BjKdLgMxGx7EVSNkcp",
  "key34": "3yw6qZd97bDnGuQq1BQUr3UsMak5DGND5cWJah4cjuvttSsCjmZYk7SxrCSgyTF48rLnASpj2UKbiXHgc8tcSUxd",
  "key35": "5ZPiBA6ktbV3vfheF1T5S29kZVb3NKghJra9xkFhapqYXpDUyALEPeT9t3BAJue28YPs9rrsHbyCVPJibX1Abwo",
  "key36": "24boJovP1nrbttEV7mm85RQbFrb97h1NnGZ9wruuYyjiu4FPPQ4jKxWthPM4PJ1mnyqZXnzXSaBxDiBRbaaBzmSS",
  "key37": "3fL5ZeKKpGTT7pvQVmv5ZWLHJhUL2T9XzbksZroUJWnoJT187JJdMjMfcRiSB9gngcCBkWtgVs2D2CPfUxptmkNp",
  "key38": "ryh3LGfVdSzkea4SyEaYcYeaSP1UUdtCYxAQzuf94pAVkPS5UPqDKQ4rRQugBTTaCSCmkTuvnzAmN1yq3T3dUSe",
  "key39": "53BU79fXHeMnfmApngyVej22vfMA6rQM6vNPrMyuV24EAyUyHDdmQPVEZwz8PSp3fm3mV1jwTBgj4GXHnTyPDsMx",
  "key40": "3ueqTnECJT9fi1moRcbg7VqXsEEp31LsZUDkuwm3vqn5qqEGLFtGvS48KmyZAuEmxRErTjPM8dVT2b7bUrtfGZfz",
  "key41": "5oKbUQJfihCDHU8xe6jka9znAyVpXzjNvj2aVjDAL3ytLhdZGKhRzfFXogkhB4FNfJfJoUy1iBxPDPauPca4gLvu",
  "key42": "G27scx9J1XKKhzhKP95WxNcD8et1Vf4W1yCWdgdvWt4j6DUPrn7SMASXBRLxAwWfs3GvZh7mvj7HLti9qbcxyU2",
  "key43": "4Ag2qSstnk2PT2P11kSR9LM78xuA13R1KWEhTgXeSRvDqY69fFbPYVfrUPkpPyDfA65Ejn5XeznHg2Y4ArrxssTZ",
  "key44": "3G2pwgcLSBD2q6miUVNwBK29jHDBxEohtmDKLNVtuhBYdPoG2fD973neDecUudFt1ZjYeX48Y7Yjb9XaSorndWXh",
  "key45": "cohLZ6C1MZJrR9z6vXbiEfaWApYxE5CKecdpJRhzJKuD1yKuEdYbk6W62hdHRMdqnPQjbtqqjEjr8yFg5equsFj",
  "key46": "5dnmDSwmr1WZFp6BfqubjVVSjjsy9K3ZR5pGDpUPHLfT5Kky5D7ZBkmjFqT2uaTvta58tr7XgpGLyF68avruyBz1",
  "key47": "519f7uVrgaZkt88UZkzx3my7HUGV8kTvXSvKXFSuB8vw5E4K7T71XExeyKFT1smqLrZ53sU3hSDvgpLZuqF7XBy2",
  "key48": "2QRzGWbTDPHa4ZeuG4GuJshepyUd5L8Whp1a83V8fFoAUrtaqy4bGcYEQC43kbyLhSQXAzuh93sAZx15zBA9jjHF",
  "key49": "eZbTtSv8sAkqtRZcysusMFYuKA3c9HfScbPjwVZ61jdVvdYmqaiy4ZC4KUqAdCYGfkxtQWZUgAjXq81a3xNUXMu"
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
