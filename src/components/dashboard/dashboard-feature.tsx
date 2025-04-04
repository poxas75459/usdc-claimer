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
    "2P4K19zFujHjiF2e4r5pULAuCjn7ocYhcsA5sHg4ag5GMuS4TbnST8bop3Frk4AUK1Wz58Hdm9axPzMMCzgP7Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3foycV77e6mCoUev7ddm9XKR8Mdb9YWajkm5qLjSnHgJSS8tUE4D2wPj73qM6xy6zYRzTFezjMDMron3JHoFSaTu",
  "key1": "4hbfeYzCzNQNFHGtj1r4FFmLMYHYTkFxtcqt8E8YMkoYSFeSEZGGF4rs3YdphrTr8uPYPN34Va6BAJwdpuWiT4uS",
  "key2": "ikFX9cTSPPuXcR6os9ieY4zhqkhBqhuUrXEdnbm7iwBnsLVb38bqeUyDgGjDaKiSA4sGXoYJEbbpSfAhLngPFXL",
  "key3": "2JKYbNugYRTMDXdgYpUwuXcVpvxVdAqXG5wsfCS4iqXNspk4VX67eRiMTQ54c6xK98QrzvmHZ1yMrkW5BR5RS64U",
  "key4": "5oaoJtdAoSddCPJPE4Una81XmSyDtqjr7LF7qt9UBSxEtBzGAWgd1Ei4sBaRqV4HD6fwycF88fwb5MTTgceq4sgS",
  "key5": "4TgV1FyUn67pdoFn6n16n2tN4p7UpHfw4E7oXaPAws9B4F1h65V5fCNtEoKZ33RcWsU55J39NFmGr42YZQhPXNA2",
  "key6": "ByprHFAQV3LhUUc6q5G9QxWSBQrs9wmG9YrYu7RsbEPdMmKcs149nZVPHoBsJ52Q1ifSgs5mLCnM6bMNVgV3DcQ",
  "key7": "EoJUSzjQ4p6e2HXLpRw3vW9R6bUBZBkV3JjLNFdY8wDTxbBaV6onch2xUHSdfPqGAyUH27UQjDmLqASFQjf1UE2",
  "key8": "2JvoBjvJo6auUX875MehKmpvXTnX5AdPJgWqvZ6xWiW6fCRNm2XJKozqDTfZTqcTtvbQ8mANA99AbGYmemEspaSF",
  "key9": "5QC3x9LQ5WrVbs9psEiHcNKNomtQrjsE1edp673Fhj1NK7Qgd5GeLBAZSYSc7mk8B4fvJ1q79NPx6cYAm8heEmbB",
  "key10": "jJ4sVQLqeChaQJMgabNys4EwwR4YvydHvVBVEtsaK1kT6Vvmetg4H9c3Ka9ZDiytoBnUquTNiAcAZTUCcQ7QpSq",
  "key11": "47w1XoWL8K2BrLpJjroJvMVN6sYS1SLCsxSVYa5SBzRxn4iV9NoJXMoKXPXi2gWPigg28o766bHVEyKQ827FnQKp",
  "key12": "5kEqCfVgAPCG5YgbrWNqfLvym59r4tE5hg4YQgejYtxirydvjHsSaPAAMhk5GXig8skjkGKHG69UDdEFNKjfv7y",
  "key13": "3DcLseRr4HdeWJf67wLqD4qgpTY1TxaCgV6EPAqJPvtPp7kQEZ43A55kaCTcaAsYYRVKToqD7zZj4644kNNqVyU6",
  "key14": "5HNx22KqbuXDGLdTC2DDw13ufDESYFJ9nehvSChTzgRUsmuhXrsS9WyQEhjDVog79BE7UymH9enNQpoZjYv2obit",
  "key15": "TnJ7Rag1EWPbfq8KXh2w9dM8hTzXud3L6D7R1e8mHwfDyuzBJMsT2JQgcepmcMj3turZimq4n547vnw1yfn6t8R",
  "key16": "9kP6YDkRPimqYAQUv6sLmsq8XX9MM8QkPW2TB98k9vifk7cGPonp1K4TzDnvAHKp5nKgov4oQsUAQt4EnkKEfxq",
  "key17": "5E7enPuNJFVKZKP8we4ave1eAjqaxZJ59AVwbqKT16oWV6c7pxHJiQhTGyVP7qba9FHyHJWAyoMoePf4ZQdJjvg1",
  "key18": "5AhDUyL84t4VAMfChqjn3e3LK73ECrBqb5HqaZCKwgvMywSpm3yKZgdB9e3LBiQz2c5pD2TMZJQ8dAvYUkjNfQVP",
  "key19": "2iDR7UUnYpC5Du87wK4sjX7Fgop9oeWPU8rPitYHKZtiaNko8AtiH8TRkp928frNXC5mVJporvKkvBbPGaNBggcv",
  "key20": "4rQUKZQ8jgv42CqDD9wwdJcwAti3sUDJ38Vcyq1A5tKd7kRsZSpJ28LCL1fj9VM1yagKWyVRoGxcT8KQAncLaGT2",
  "key21": "4JQ6LMHrjUPaDfE7KjVi19gvnxDNBWhfdLB6B6uxg98YQiVv6feFRR2xPQvx63p1p7i5Tnfqjz5yHE2i9TP5qxpL",
  "key22": "5F9Jgr8ZSDE5T3KJjkEfGh1MvvbFnqcvRCCh1wKb5Pz3T2gcN2K9QhyLkwoqfBqEFMQjPQH24mzTXNwTebZEu2T2",
  "key23": "49EY9ZPoAFSdd9ffBy9QysYZbYprmZvgbVRvWqLW2ht71dx1XJoF2XUqTRzBwMFy2bwR9pnLo6xSsKqyPPDmVf7D",
  "key24": "4c2ix73hdH9SsFUvHCgsJrniaFV8Zmp8tbPbM5g8yjrCHrMeYPFnqwfey8r2PCxrdczVtSg9GDgzcbNT9Jvxi9ML",
  "key25": "yoR9gq8wLDgowM7YcQb1KTKDfFJ6Q9zsk3oPdjNpHHYG8bSkXvBLEMsqYDJs851m4KgD3T322kk1KZLh7CY7sRw",
  "key26": "55JGyGsXtz9KtGpJt6WpdvnCj8BoNHeQ7SnCcAYp1oUxtcuQ1ihwU5EsGQJcyFvMsJ6GCWbEg9GgYKmgRgs7qyMj",
  "key27": "2GdEQQ8ggwezYe467rz7PsTYpovtLiYA1NnPPxT12h9n8nCQ4mNaThjj7ZdAA2ESLfXp8THxyMn6j9rZQT7jzqeh",
  "key28": "3upMStgbzCjoUt1L3ufrxCEwwZmR97ooCuBL4qEHShvF7dK5FMXgWnMMig7152KdsC7eCYcw3gPpSrSqPnmPcJce",
  "key29": "4Xtkbeuwe6tmWq5Rc8pxcWN8zxxMvhQFTsuK1vMmTPeQrguMt6T2MVwMWCWmsQTnm2bSzz37CLXsg295RBsmPQQN",
  "key30": "3UD6UETHtPexdr8Fh4NjJ72w1TWeR9j4CafHVmGfQRzWnFtSUpvJfcre6QqueNXnFA6wFhxfBQkLBnaGEKG43eZo",
  "key31": "3R2GUBh2KaRYaFoomxhpYP5NfGFunhtqAGpXXWLJtqdVQFMsBwCmNVTma13FtHdiSEZG88SuQPCk1fsU3E5EHTC2",
  "key32": "5ynfeAcqjCitUMmKxHfSFBrwbcZxbM5to896zR8yCvvQwWkG2Dvi7qzmhp6pKtzKTuLjyw4JNdfzvvCrQZ7GGmBb",
  "key33": "4dw59DwYa5a5Z1YyM3kxWS1LzuenEde2HwE6GuiKAYE7RkBZQXcYJS8GMabskNCoieBNQjUaaLmokwowWP1nTfZc"
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
