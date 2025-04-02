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
    "rcari1QBFJwohRTwG3QbMRC7zguC5KeZ46x3gaj8Bgmxie63pwpwfzFxrG92321MiLXhLFDm3m9FqpkaVWLDrEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yD1aULY8QiqJwjkpQrPBeDSRHP11KwpjeVqS6BQNn5cDPbRLWyUbUfLzUus9vv7UZhiWyBibJZ7rshoteVPr64Q",
  "key1": "4x35XzbL4jjSGGVtsT6phncsuRSFDEBbGHi7yqv8hJeKGcQYLeozAT7DYrNMhfqn3SJraBai4iRRp6mzj2hHf3Aw",
  "key2": "366T3HQRoJVMVyj34hri2BUqEFMNWbTRNDZGGuSk9mPcb4d1QsZxY5vVK7QBH7LqWjE9rN3kRNz9spUcWN6GFTCU",
  "key3": "3MnMRYV9X3HhYGbWeQtFWEH438pXyPeWScPfTYmKMnsf6xKbn3CdnG9JwKW4cwgrPQy1FDEqcfCwmGo2R54wDFtb",
  "key4": "2QmtkYrjMwt8kvshToroMgJdmpsVHRhQ7gGtMFfHexbWLrH6DX8PpjzGvUPTDVBW5oi73V74ZFX6TXX7G1EJUMdQ",
  "key5": "3aRyACq3DubAqZmQsNQgwdKP3XijbGqaJy6ht8Mp4ibMs5sVo48VviK47kWwJEs7WXCswo4gWEoZUXSQTop9GKd1",
  "key6": "5gAYpnX6kfWAAdAkobJEzXKgyRxwE83NcqNcHz8VHmQNrc2kMyY7sd6RUhs5SSz8uviUry9ea7MaEm2XqSA6yfi3",
  "key7": "2oXocUfYh5QJvutMdUJAvWEJokCq5saj41E1mm5Z8qS3cANijyQJeSqR98vqJseo1bvuk2Sfj1xPDRYc2ZA7Ny8k",
  "key8": "2jmZaFTNYN2YXXEuSvwHY9VJvsi1MSfPCeqzXQKt3hVQvyiETMR4VR7dCut4PVweGc8H7SWYVN1ioQnWduJjDR36",
  "key9": "2kHi5TQhFVaWEidMJPaa5dQehDbmJhengUtXcr1R1XoZYjEJNsRTxhFrP6oU4LTes5oV9Tyx7RDdU4S5nVGyQstq",
  "key10": "R9Ez8t6mt4osrLy8jGKgZRZdBYJv9RDdeGWYuM4t9PhhA6wFoFE9SnTA4bGZtYjVEGQYutARMD8Um7g2epiTjXq",
  "key11": "2eRFhThbcFcWzyZ1xgM55SmKaFohhJCW96AAd9LwMU5Libva9gWky3yqy4Y3BoRF8bLp7wV9qtvFhphnznFZe6Mi",
  "key12": "ju2SouSU5HBgTGkoLkCx6WBKucFPx97RxBjBfYYZoA2iFrNbDg4Bu8UEbMsVvKYh5PSBUHY8TDPwRf2P9bf9Qzg",
  "key13": "5AsaGeqD22a8dvGCnKW17C8XUgW41J53HAWsuyKAaUFGY6emx5C3oi82SNrkCaLvvWe5qGziydPeUcoRis6Uzv8o",
  "key14": "x8ebXWCQP1Nmk1w5x6AbXyK6gB3Kgc3ymnhd8BPy6c6jtGadSMmJyNxJx1RzZvwBgyYBYX2oo3BsXLnaEouvzMc",
  "key15": "5vLvZdJy121MVmqnMT54Webm9nTfYpVnyXq3KH6aqPpddhna6QU9w4LHZbnzkEXxhwfXL9BpKt8foTp5vdVXxycy",
  "key16": "45UkMjBrDfWFGcksCUrHM9FJVy7DMuB3hLdaVr3pi1jAche1PEgYNpihwB5iVHhrmfZDUzqx69pCJSjiNAUriRo",
  "key17": "5wRpiHUqaw3FnUddrN3iBKv44A31dix4QrhDGZbjgRJSGh1phY8JfM9KndDPa2zp27vZGDxayvA1vnD86JJean5g",
  "key18": "2KJ44EuU6dL7aHbVFagdyS4quUepNmNzfyWErSaHQRavcPcpfNJ5jyBoR2q4Z8MHW9tNyLXaMznQX7tqA12wtf8F",
  "key19": "5JFxr4VEPBHYJBDSABPr2yT3yuf817wSGZUMguSLAYMvq1Fyvj3rMqr9p8BHbuRruv8huEeRyuow1XddTkeK2F4A",
  "key20": "4x8zsawaafkyvf139SCpnzLgzNVSRxBzSJufjHXncZiuzXJDbopCa2hVcrW2qxKQwYXDASnuGJYYTKi6ZggzW919",
  "key21": "qqyukzzPxeXuycbkngRxK6DoovcPGHMYQ2o54FHkMsCFVDmvhoSh2FZ4HA3jRh49uPha6ohyDG66jLHU1xKSZUV",
  "key22": "42waA7oKBxufZ97tibbQV2jU7wDWzDXXqHeL8z8RnNA5G1JzLQxN9edypjWVLJuFAsZPdtPhPd7JXYaqNfG5SgGC",
  "key23": "3og2bKFSLVtzjVWSKGggjmD4RrmxBgVT7viVyKnCfdA8R72ygPZxj1oJvpkfhy2t1kb47ZfA8PagY9ZS6vdo5aEi",
  "key24": "5FwSqqAt6YFVYj3vWMtaQtWe7YwgU1niJPoypdnEZHS88GMMiXHCVsa28FeUTjBqgtJzckuzhGJ3kXnSmWGjq9f2",
  "key25": "Zh5a37a1tjZFmr4uJEin3BNX9WhU4X19i8gk6tPmetszNGx5EKFiiS8uTyYhQbhBC7FPsw9mrtfgjfqWRnaEVNP",
  "key26": "5XmLKeYdCGgKAXnDLAkMQobd9rLhbm1NGsBBX93NQMNLzuL4TWxEUiVL97i1Vzc1sDj6i8FcDGDCndQeCbeTEoo",
  "key27": "2rekRC4HQsLc3iTGFhCEVE8DhczAjvy5AZfsitLh7W8gGQ3YMPYj82XRBKaBEXCx5AWykCb1naXEpQHRzn8gCYtA"
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
