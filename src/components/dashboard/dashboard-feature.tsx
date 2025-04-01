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
    "irYW5XqcJYPEfJ3Nn4Bn9oJPu65wq45vc5uo7h5pjsq7Js5UvqEq4Cw92s6NMxnS62ZXRGYFmmYCdTmw2oL3os6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DeFtqrbcfgf7Wk4fKq37KrKGJ8twAvRNzr4iz9s2K9BKMB4r6khyhmn1cJfAZi6PPoTNTKLEJFHm9HM56FUmrz7",
  "key1": "39dUxHDKs34Cdha1jUGWKrzfeqxtsN31VAaqJEuafbEhQsyekLoteKCfrr271YEKa9fRB8iZjAa4Df9XsixAmX9T",
  "key2": "5Ro8ozfANxk7DJcgHk5wCSQkvVEVAPznZJmjqnvzjbLhPk5FdFgEp4Gq8ydFzvu28BJrVPZfAsLQULLCrRqEhxD1",
  "key3": "4whW56xRwFqxtJPNqHVzMpFV5zMhu6Ejpb1KA34tj45mL2HrR9HJzwTgqjuEi1tQ8WhvsvMGds61VZsi1GQ78FXK",
  "key4": "52o35rxUVHEvFp5JbPMGoMryFEWmed1E2xp49Efr7G2Vgn5ewCCui8KGeFtPW3KdSmNgNtGz2BtsXxTMc9YUYNVz",
  "key5": "29pAyUHEC3tjXqGQF5FYhkdxijqnVLQ6E5gJajojxFeSLw22LdXpGcCVtQRyyL9UX6xeFns1esWXYMSnWJL7h3Ui",
  "key6": "5WABQygX4vTKouWVo7kBYCR2iJaPkYrcriUYZgEY5AWth5o3jhybzSG9XWUUwMXRkJMbVxBuce8kyesTHSGAhAEQ",
  "key7": "Vqfxynppsw5CFNtg7AeHKL2Yg2JVBdmnRhm1oXvfNNXoTtUE17hikAQpiBzgoWzzYNkDoAvqLxtZC6fuQ3YxDye",
  "key8": "2eKy5Cs9WXLbpKtrXhSp7WUYTrzK2G2n2cqauiBFcDm2HPX2zBE9rU5QNFX54i3MNsHjgiLzkhMw847s6cSPyZ1Q",
  "key9": "54Aoy985Ra8BXSNAEsrnLfzWmfPbAWgNVWCLoey1CUHw6JjcStELobpfWqJh215m6UXbNVjtx7YhGu7Gy9LpMjTF",
  "key10": "3QpAVu4nqAF4GNYAZwqQxXdNrorRWs7ZSZ78JLLzh53feqRkiGukPWT2xW1eJxrC1qrNEsoGKvdDezoSHmBBW6HW",
  "key11": "3LbsjPGCrtG3Y1X9p7er3QWpuu9dQHTTpQK2791Q6tstVe9kxhNJAFUckythfDQE4doUzefqzFCxs8WtBtA2PznM",
  "key12": "XADqxWr3NEVSdYSrCk8aeJtfgHG62z7fGa4L4fbUcF8tkFnmUtUg1tuDdak8XtKVR511oQS2fcud77syXaptwgz",
  "key13": "4mTEnrN88e1FHDecFm6hnPP1mvipQaoHVDc461VGfA8UCQEYwh6j4gHKnrfhsXa8P6y1DkTDDLmGH4kaSA9trW2m",
  "key14": "HWDziBeMSqTsd3A3AFfYkaFFYwvE9xpQotAssYkqxEMrNvXARX6jqKHX8ZAteyNZacd1Nb8ts3nQWvnQR5JtVpB",
  "key15": "5TK48oDrXc11xqnq2n4HaGoAh5pVcVKXjc63ZQBmsEH2SfggaSnFsLddfd9FCLSQThsvuFDVPNKu9BVf6odfueiW",
  "key16": "2Vn5LayCpfpnRB1TQePkgAcZGw9ZVxJ3ka711cBAMd1JjcG7q4cuRrQb8znoLghryKrswCs1krxTNkR8kJCssaXS",
  "key17": "Uzy8R5dVMpYbRjoJiCaeERYvoLqSL3N5LNNcke95Q3n72Y2vs9wYwcN5qFGCWvdNAo35D5nr8rGkd4e3PrTqjB6",
  "key18": "2acVCR25xcMy7Uvnm6zr9GpDgm8GQguZTzGwXym34LCrSKPKqdu2neDn1Q1RaKu7smqR8tJEHS7s6MqqoazCP7Fy",
  "key19": "ESxqg8huYcUeF143XgyJ4VuAmCwHjPQN4w1wXohiWmBEikNVW1pLnvxZ3kMdV9P2wb8vpEpuf96vxY7Ur4T2ZaA",
  "key20": "4r7BH6ds8Z2ckNuYXfzEMQjuV8Xr2nYVXGqE7RD8Ei3FvLAhv65pwY8AFSahLnfCVpc5SE5sQATQLpEHGrUaH68p",
  "key21": "3Y3BXRwsd96aLsi6ZuHyFCkgPRpAN4FwbTGM4YYMxHj1mDqFhFBh8nopsFpDj7jicPqcvN172RWXTvgfwteHroQp",
  "key22": "29qpaNB5GvRsiT5QUKgpvpadypKsggUyJP64Q6jtNQk366EDNNmp695WDsWp65QVFrPGKastZyQpo1BazcDVitRb",
  "key23": "29pAq4CkKpKjPTeA42W6j2rKzKXkqGW1BZGMRCRo5EkzApbA8HhQ7TLFnP5JSCLpPxXArCWWS2QZktq9dHF683j9",
  "key24": "63zW8n4bopn5wAzYhngZnCMghVcuPqCZtoG9RmDNy1DkCYDco6NZkW7NRTpMTmrU1fzV2bZoSvyNoEpivAXjNUqs",
  "key25": "425oqsm7YSWCPqqe1NeBWuWBXpSpUjiXgahDUD1TCNQyWA8sCP8D5v1zZsbY3VsfrhAr4aNxrLgtQaYNNz1zJnHx",
  "key26": "2XKuREEvRaoXbE9WZsZJJaYaDBmjGpNJnti3LdfCy6UfTPmCrGizvfyhnQBLrLyrQ7Q7mfTeXpaRMYuSU1dzCMpt",
  "key27": "Azz3etPWs82hm6a5Jxq8Fehb4Gov53erPoAvDmNLaZgRwTzH2T47dJg9cg9dKvJx3u3HsBxFqsL7xhCbcGgQNzi",
  "key28": "3XH1vqu8z3Taj3qcK93b1GwtR2fdaBi2S27KgGGZhzAgA1whFAvuR4sEtHBFqqu3TiX5rGkxYmqN6WtU6V1vN3Ni",
  "key29": "2xF67zLSffegEGWid8ARXS1wiNtqA49wCPkm973pwKrrR1a994R1EcaWq5VteGHph83Thhbuj5WvouoQpVCz4fjn",
  "key30": "5ACjo7KYN6Lg9iYY5NojGizMwNGYoCSLMCrFcSKmDDKaz91wShTqhDhx6obKA8EwSQqh3UTFbG9FFHrBPaZTBGkc",
  "key31": "2TztWUjqfX1Dz9vLWBM9S69SSxJZqKDRNZysV7c6XF2mbdbEy8XyYrLEKMp4DDhPmxPbDTS8oVT18RjequFRuKKb",
  "key32": "3BCkayaZ9dhPm4DdpQCWTXk2ogNQMEKi8jz2qZFoadJsC7AGomn5KgLGqRSTYc85E7cQyWXJ8gE7HZbVCqV6Tht1",
  "key33": "3nDWrmNwb8d84JTF2XXARLbWniNE6eThFEGvNTyWmChbScvjbgzFMsw4AXFY88g4Hg772FrrwNgzjGp6FjTrcZeJ",
  "key34": "3SukLWGN45Evxiwwbci6NSEy7yqh9Wk2otuAJjtRtWgfR2efzWTZWYhDd531JGmq7Upbket9K4WxpBWeY8ccVuTh",
  "key35": "4tqYaZnJCBJJtsLAX1euMREdQKVQ85FjzbMcs6P9p8mdVyq7Zxio1GTgScQNDipEbYhH7cfp6PBqUdthg9gfwvhM",
  "key36": "NVdqxE6ucueHV3eDUW3KYVDvNz6Vfg2CEFyduCAHaphNwVCk4tSrfSJngq1ZCvMfbnuFR2MtdDYWNxzUnLKiQq7",
  "key37": "P2nL5MMsem3ZTBu4NfS9rqbHSBDfXkBNedDiZzb4ZKtaA3L2YZcidgipVZAqMj35jXFJSB6Rfy2Ri45Fef8t2u2",
  "key38": "5qZ5rhhusN8gnX36cBJp4QKq6swcx2xkRihTiq8mDfgWjdo5EfxgE1CB31micRUZuhHjNx1U4AJuDGkBvL3px294",
  "key39": "6gF9z1EH7zwwpy4HjUow5qc3wJfTRBkzLyZeeVAVnBJX31i2eNLn5ztqvNWRJXCwWoP4FtNsgNRabq3yaVcNLU4",
  "key40": "22fVpKxutRiABW7Azv8XEmq7sjuBPhqX1HqGELMT1qyw43Ucey3PBMstBS8Ue3zLHfEmUFi8QjZjyLUXbH7ZRq4Y",
  "key41": "2uFPAGEyUEkECqFeGTcaR8Ev9m89ADGWXZJCnBD8yhRPiadGWGR5amwCEbBV9Kq62CZ8QsNrjDyRYRAFqi4gXmZi",
  "key42": "3Z7rQz7fLwK7sqQhzenmVMHWzVM9XVWtirbz55HgtNSVjuiHcVHpjTbaN385hag9cMM9qoQWJ9vMAmjUCSAAT5Qr",
  "key43": "2MjoeggAT3T86W5QAPQDdEpVWTiV5sURZTzLCHi8MK6ycuNHtKYDMTBRonKMe4tZa8xqrT2HABVpx9Jf48Cd6WeC",
  "key44": "sh2LkS4jLjcs1LL7C3J3EEwshgQVL4xM2GHMWP3Myhtz176f73YpwU2mNfjAu8umUX2DYufk5LSrqxcZN5zXQi5",
  "key45": "fdcEUWvATqwGfrXW899d9BHeMJXHDZ6nLFgYVcXLF1z1SESztuHFDJpQG9w6tWdKvfn3XQBdPzsqhXUsp8UtRwN",
  "key46": "4sGVzozZbZuSnBuZdd96MravE5kQT39LKgoEJNepD9C4HygHD36uUZg351AFGFcoxMTtaPNqZVLo769LRTiZFc9H"
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
