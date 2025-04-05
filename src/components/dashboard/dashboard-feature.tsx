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
    "4hzhR2uMjtmMSM6D15XFfyFkP9w4fd2hkaApsnoSqJzw25ejWt6VooJEKkksDAFoQ2sbooJKhnnLHZo1eafVFK6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eQozkktmMcqvRYRd8kXcBptqty8R2Jw9sYEKPNSchgCeFhHsJm5nNMMB165sEKHmo1jjuwZLAZScrjw6oWj4kWA",
  "key1": "5CapS6GwHiHptVPDQaTngdmstdwHnUQmyab4x71LALem6bEE41TxpkjL4cv8KnTHogmG6T8MA62S3rbPuzQMJrNa",
  "key2": "45KX9JszoarPbaiUmvAf9S9QtuSt3ap5kTvhpvcebSkHDDUsDPazPNMU7rtDKNQx1htgxsvmMVt9DF8SNq9vHckL",
  "key3": "4fhgVeDwMX4TFPEzhx7U37z5m49GBtg6kPfHQ8QCJED2jVK8MdX8XR9jmnroK8nXdyihPVb9nBdDvz5HAuuqVwv9",
  "key4": "5tomj1HKmSVdytnK9DTK3esGzYkT2id2ZpKKVzQaZcub2oRcmXNiofpJvXn8bPL372jJVWoxG8uoQJT9E46YYtVe",
  "key5": "5wYK76NBDdptcD7mPUChfGvjPZgrmCxGNXg8a1T4r2F7ZsnfmYDYLRqV3tcZ97zzBLKQw6sG9yVZEo1FDLVVXPQi",
  "key6": "61DJEjwrK8PUMqy6DYWP58sZQVVqVNVHGVFy6iAuqMnEhL6w3trQNQg57AP14tyLNdmgwcWZhzkCkZdj9xe7KQ4c",
  "key7": "2TYbWVd2dXUdQh49QP9KVUj7xUrTWT699iFYnwtY2HybnHLvSiG3adUKE5o1VLWcJx8VoBE2foH3hKf9URffM2T2",
  "key8": "4hkmggkXrSDPJeVRD9y8Psy2u7rCsvK3AKb13PboFPRZ7QxEC95qBSwic1XTsr71hYkiygbMAvDtjigVUXEXKYi9",
  "key9": "2CYEGhc2D9RWVbhauJkcXKRFvia83wBp2u1iRxwqMyN6TwJjQt6Fy7Sz23sdXWDcArsiufTg11t5EPApybzZnrvb",
  "key10": "5yPg9MaHK2QAdwJiLofXB5pGmgc3FTVYpC4nk5FLrNykVbPBpgS97EV96TJz7roQtUMe4xXJ4phu21AwyUNLkkwM",
  "key11": "MLgJtVZH3Cj2CvSdEERViYX4f5mebTKibKjGuLzGGJ8Em146Ukxt8XQ4aALYTUcWjRhAxmBQo2xqFRyScdeqNdU",
  "key12": "25DgFCX1JMFR3acXSoLu3hFf5dedpdh8fsotLuNweVrnFWPT64PnugHQZ44e7PooxLGUkqfyy8n2i6aLXTbBZxBy",
  "key13": "4movNkk7dEFXgZSLMLyT1gV646TsWgsEw8oUUX9WsBGRu2BY3aViC6V7U87YNB5s5F81tqKP6ZwBLJkQ6wFugrpy",
  "key14": "3pobtMXgXBauvMZyKsuv6WFwHjdy9Yw3aGaPGPubxd8XPE7dC4CYgjBDNGkRtWKejBacZb1r8U8dFFpfmhgP7TYo",
  "key15": "4DaSRzPJUSPzypze71FibEocBJtv28j3famCsVL2j5WXhhaa5KAZVQcwePBwDffxDzYYqiHkKmARMkDnv3RNPxL1",
  "key16": "37SNRJ6S1rJEF1TPsw5w8ouPBUygBTz4yNTPT8NdHtt5i4Ydf7PawVRDwmWaZLsfRsJahsNnVNJHBzJbPA2vW6Lf",
  "key17": "2wKqQGMqqSGQy8RbaVqLmUdjZ2yiQpwHLp1RjZq9wD5sygNDtWRmgdpzCXD3faPx3EGyvvsoFy96AUtCkCL9WYdU",
  "key18": "56HDDLfqfFxpTUUfm7ruW9KHJYmPjCMuhvGft2m17GYP1TmAwh4aapoQCxHhank9P1TaVBVafhQMc6k6RboXUAy4",
  "key19": "2bJVKjbu3VTBE6dySL6N3NhzjadFWjqxpv1c1du3x199Po6Ta6rdzeYPDSdf7QEQ3EK4XHx7Ki1fQSp8qkjck3B2",
  "key20": "2j5P6gg55Ek74qB7NwwnNuCXxThNzvzQWzf3AewwgRe3JaTxb8Mb7if4aVzcFM1egLkJ2uM7CeE4i2BYc9CqXFP9",
  "key21": "2NTCPDZSzk3wUeMXsngpqRDq943Dy4RAUruN49m13XZM3QpWB9P7CgD1f3XE3jVXoYGKUmQqTSFtoWFxP1wyH8jc",
  "key22": "48bU7HmNGc5N57k8XdZfDK4smVqhcXtU4kcwRW97qRKZtVBdyEx76qbcYmmrTjzdecsa12M2dwpVZ5Wba5VG5VbD",
  "key23": "3P7xtV9io2uhDHFqzvehpj8FXg4a7ddfj1LauefbfNi1Syi8sJ1va9rXVgJkKbvS2GZHAWVyUQcSfVRgHmQFKcpc",
  "key24": "5gerbuRChomt4pA2PHaG4BhY9ZDnGy7y4DMRaFXBrggnTKLHHLQtMWfk3G13sn3wGvdAuSVgUfJYwocRPQWcFSa9",
  "key25": "SFb8nefsD228CTSbpdPAdRog5ZodqptLhvpCJjbiykBaGZHvNqLkc8QzPToWhhPtFNrezP6jLD9fq1PYJTfMcbJ",
  "key26": "2M12UPczvKmHarnMSWdNvYf3gJQr8VhzT7RoTZXHKmJKZyjddp9BEjuu3r8ciHZ3DtGMxiViTBXcJKEjT2tVe2cU",
  "key27": "9jGoLxMmbyz3w7rVrXHLickJWzRFMXTczCZqTN9dVNpZcyJtrhzkzZvsNLz48nwE84QpCNCbQihDMWEhYj3Nxqe",
  "key28": "NRk69aPCCvVagn5WGfm7Er6i8J1QsmQShvFzPHbrZuXWnMwhXKb6VPK2nyfAwCXPybBX3xL1Zn28mckUXbctj3q",
  "key29": "2JrVbqXDfQ3kE7cYrx2GosJhDPZiGYzsbQdXh3XRKUUK3q1Q2YPdQM4RpXUP6pQ11Bi2MMJkaWDiJPSS5mUkxWn3",
  "key30": "2f1AJntbVJP9EvU6YEPPiNWD8iRSrnmfx1oDinS5UrqhjsVEy6EvUAWCHknVLa3Py24LChVHNUQTd4tyF6Lo668W",
  "key31": "iiBsmrB4Leh6GtadLr2QyTPvYo9RY7un6h6cbWyYrf2cukpJ1oJDjGhe5KFijbdp68pgCjs7f79cmTfEwHWHLRf",
  "key32": "vkCgnmR74ZK7Pnjm21WZGgBmd7ELZdLdNdqd9Jd9PZzY8cx3pAR95LxxCJoVUyNCSYmvgNegt6bWJFjiajWihDh",
  "key33": "4yXHacAg5fFJ1NVnEdzvW87Lgi8jGy8FtfPBxvnBLJSGCFyJ3rU37eyymCh9Q5NBxJwcuNQdk6YdJx6yzeBtEGQq",
  "key34": "3kAdRWZGczrSbap8X2yD3DV76TA9uwi61wUDCx52SLsMfRS8Xz6GkgiEwtsy8PBoAkD3LW1NmmWiGESXwD5mwLqu",
  "key35": "5QXDxF6WNbjZd6iHFHregEQUTtj8tGQeoG1m6Amnye5JLw1vvN2gofgpyVAbfZeP5AJzJazQJgdJDU2z13sknqwv",
  "key36": "dUUSYDoNiPzhGSGKc2b842TyZKgpyBuaKq8AydfgkFHPPw6uJkAtnY96f9sVFa8nnSEHJAoSiSJQBAcAD7posrR",
  "key37": "5KGT6Gau3W3MXwwNJ4frxv3KojJr1rj7vfKKS1bn4bXWimvVR7Vva9k6Qbrq8K54YuqorTvynR3nfKLtNYwSo6wy",
  "key38": "4PCYTkPuduckecUTk91W6fm9xWLhh7Xf1BnrDHabRw1n5qa9fjQsgyswVzJP7gn3MoEQPHZgRZBrGTcnGAnqejdt",
  "key39": "2oJCLH2aueN7NuDjUm89Tk2kkFKcD76CVD5eqyGYY2YjVZCXZwVKVnn39F4agLcngkgYuFMYzSU6U5RBfe2PB3wp",
  "key40": "4s2KSDgALiJhYEFvAbLipyzRBteTn3ZUf142TF42gLWuTyFmx6uvpSCXUJRxsuTZmJieT2jZsBEf2bsUJZrFaKNH",
  "key41": "CNTHfwdYWuWzuGXd3oGDhhqexLsuB7b7dS1nW8C1AYP3ugWeDLF9LrwMzAGiy4QPuYdE7GRVtAhpsfpEA4TSjAW",
  "key42": "5RZSZBCvU4rPqhHAqU6EHWXAyaQEF9dNtSmCSG2c39R6Ac3wWHotqmaqcxsSqXsbueybrEC4SarzL9Qju6sRtRST",
  "key43": "41eKV1o7kyZs1GyS48JuzvtTWU1EjateeuZuEHSUnGEfQBda8b6PnNqsiVPsSucfZ3FnT81nJj9t85oxooh3Tamd",
  "key44": "57bCsgkPpkYHHUHrufQeJFwrsAPZWQVUMs8csQUPMudNJMV41xMNDrjQCMgMpKCXSYV1TA8GScBEPSoSZfZhKjwz",
  "key45": "4xqVDWyT9Jb2yui9nGgsxVwga4x4MD83uYLHctTbP5Lz6DaaGZhfH1yGQNafm5EZ4VXZnMwNLcYUvJDiNq6fHYpu",
  "key46": "2tNt9yHaFoDgtFv7RBmehyC25Z9R3mxf1zwzsSMztigRSQaeB5uk87sfpMF4GGTyNCB2qhK8kY9s9Cwqkghsxak5",
  "key47": "DWQiKeSogqjhHZHQjKZHNuhk1eo2tgTxRywUYiFpDpwKHMRxq796BuCha2hBTdr8YPhNK7Am3YuBNS58iyHXVWV",
  "key48": "4xbxakdhuV1ACfqk2jRD7rvBGxrhZQq8y4UCjSdkTCc3ieuZmuaFQPrNv1z1WxRAFpE8FeAPFun1jodFsCJS3t2M"
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
