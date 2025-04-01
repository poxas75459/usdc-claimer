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
    "Wr534TUDREMHi1cGgKqfQmuoDirwZHD51CUF7AVNudLUEfjA3nVu9FodMCd9y2SJbHEtVjq6BCn5Fd9RpVFqDk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u4hGXjhijGFU7uj3G2Qr2UFQpdE6HBudWrgqD9Tc8XfMmSAAK4pjLYA4ftjWxqjRysPxjLa7NihbZSPajfKMbyJ",
  "key1": "3VYUWQ7yQbMgnaUuYbWykdkmhbS2fhsQ1PTmofZHK3AfN8tATW9TgJXZsYz7658RC67JHPMe16qTqq5nqmjxU6GG",
  "key2": "1xm9T5SNZfy3xh3tQWvxUXFxNu6cPr2UbgfqmjbGvTrkAWqygzRoruhuWKnNEqtcn2MRUoYiKmQE5QKRe5QVjDA",
  "key3": "MxgWRsYDTDUPFhMLYqvjMsTXrMg71NmomhXYjqkXUcLMNws5ktv81qEPbiFVyVhKqDm5DtyGHXyFR8YgAsdmAL2",
  "key4": "2EDh6CP9gWknNLhzmbMGL8tRZ6gh2ppFZR93M4uWQ5bHXQYnU65371Xvv4CHrfgdDdz7FJP13iAa2wmGT3zQ4jeb",
  "key5": "h7gLE2w6QEgw4VDDZv2StTQaja8oUXsqhvNFUGJ2tt9PMY5wcK6gqRPDWD7ddBFygRAqMdFwyfcm8yFGJTTGzvF",
  "key6": "5ZZpXoq562V2rdP1MMT5Dd5jQRNXr7B9gEF5Y43RrEUMUwEC12fYouK6utCoX9EziHG9SE7azVcEYZgbVyjAH5hE",
  "key7": "3t5m5fMoTEaU86mf4TrA41SfafhkRb6w7dKiqgg8fLicMFUR4edkFfouijHpsUWuEitndKjp3nz4bp6EUJGwHoHZ",
  "key8": "4nS6SNBVGtwW7nhAa54fnyTgH4e5mvD3SCstSFbuU1fVfx4spNdGnLmTUiM9LWksAkAuxKyDFKQxfKbSdCGjunj7",
  "key9": "3s3ebuAS4zf4Zm3mx3CXS16uvjbnzfe8EJWnt4iAyw7eNXjwY3JmbRJ87YYXV14edk4nNdnuJJ1iQF6wqnPeyCfN",
  "key10": "2jmNqu3aEsfzj4oaG581tTUTz1P8hwFPf6hQXKskGsWNf1HBunQaBCP5pzA665VRgYtFZg2ADuKMEA4LkJMoDm91",
  "key11": "33Zm5vDYEjoAytGJb1UfVsWucNNVGZcstGWUtLShLbFDDB1nysFxHu9tFEpPppSy2VsgtRzzj4ed8WjgbLm4nuR1",
  "key12": "5jdv7CF8MAHQWkpvrGgKRNGQK6UnmznCtiNxNUwvhrt3Z2xAyrdYSFqnWAr2m4cqiGjj7v3UuVeuebfTbyDTTDL3",
  "key13": "36MQy69ingamWEArsw5aZPmAjbZAGNQiszh53K8cx4G3NAxUGXehkhPgVFyH5VvtwKUGc9JjnKaJE3GyatDpmDBn",
  "key14": "2x9ehGyRVFjuFnQ7JU14eZX3DaDYUPb46ndCDK9Eu1uR2if2BzcT15NXcMvWR8xpeGWpuhFPXU2yGpWq42rE2PFa",
  "key15": "2Jk9N2W3ERrr92uoUBWfFXs7QGKqx3ZQ1nQbosg2bvVAwCED8aYFtdQvkpH2FiijdRLYZrrqP2uwBqReB4NFq8iB",
  "key16": "5R1Bu7djGD7zMq9GbDnYbkK1hqvZUw8sjz5QEcQyBaf8fFDvMVn7o4qPsqxN64zeEpFcnfjk4zNhCWzUkMq8gihH",
  "key17": "zUbmoPAkKx24rzwaaipFC9mpcPP7RnokWmgsvTC1uamY6Qc5Wo5bWxQjXzuTgpDwcjvnm2Z3eZ5DN92k9ecqoX5",
  "key18": "2xXUmLbAA2bJf9MvfopGsrDybFcBQ5f7Hr1KLe6oqnMLcAPLXKXaacKYUT3HFTyGbTyKmydkDu8MSsGmvKafLN9S",
  "key19": "2AqM1nNkMj2jRC8Mh8cnsofuJL1ChZecekG9Y9s2FDXymKTbTs5Bgt9YVyUTnnVSfnRuqrkDSb46chd35GudaGNc",
  "key20": "4czcdMqg5x5fT1bV1wc1d6FUDqK45pQ2g2GeNR53WN3g7ygqu1wTwNKEHKmyhmStAzQ5cqKvRyqoiibi3qW19WNc",
  "key21": "3CvPNBkL2Czt369fThZtdbBpqhhhGymjG7RR9m68WQFG9MD2GotoxxojYNh51EBJHeBhWHcCaoRHPkdz73BkNjfd",
  "key22": "kPBfavNWNG9dqofzizL1meh1m9SbH8eqFKnQKeur3Q6WsBhxY1kbU7cq35zc35ErVX5QvHR93gHoPNLHmK2e9DW",
  "key23": "5xVMbhtfbVk6Jn3dpejSmp5nH1BgH2zRwuZJfe5zwkYSb5CLiixiHwboEsNm6ntVDpZDmQTUsVfPeo14fRCSEoaU",
  "key24": "4S8rjJqu22MRZVBzNBJnzBBLfnTj6ZdNU1tNDB3u5BQR9TAka9hjvaWVaiLm6VmHXcAyAC8a9NsJxM596uUWwV5x",
  "key25": "352RVwGeDngHJjjSuBLyCUqEdud7uZSbx88J8xUARUantxsMQHrZEs86EEYmj1u392Qa5MbtpU3yVmvbKQnLAbrk",
  "key26": "5fPZ8ZL4ovQfV74sF9vqApytJvP5HZaJneBSsrkjfnz47KHdvpezQ6CaxfffuRv3MGaenKwXoqrK8qanQDWMWAob",
  "key27": "2w1TZsKucH6oStm5dhSe3dZbgJ5ToRrAxUAchqxSYPXMEob75CWtEG6ZeTaozrhFu1aCdRdWnVVnFQadnmFUc3Vn",
  "key28": "27iLi5uwcKroYFL4qjuruuPNjuW2CTEmQUgpksPPVN3QUFCVRh63xjiwVmoFWMHbuTJvgeaG3VBy6MJdtBNL2uZq",
  "key29": "3jxw2VQ8woiHir6NYqebXJvyFAwyRYyy6VUM9NsRZjutxgDaP4mm1bw156zyFQvhnrzFHY18kJfBmFp8srVVMHyL",
  "key30": "21ffZsZuUwwjGceY8c91wZFePchMRXuwf3kAj2DwQTzYjCXw7YYVTL42psS3QH83kUUrTtNJUUF12rYYUo85wm9z",
  "key31": "4jmFzGz8qHmfufCRjmDgqxXfbenfFkPmLt5N9syrGU2gQsJHdygtu1YyH3arbrUThMUwcPdruR8Pz5hYZcxur6jK",
  "key32": "2bUCfhDsyAyPSKgJC5wbdMi5jKWW9zqc5xx1252YNXX5KnEumzGdHjvxPt7TEgh2qH6LwYhzJytUehY3GKt7THiy",
  "key33": "266veLdXXgsfmmFLyCsxwm8nh4mLQSFjFFqesE1fuRq886pErDVNMAs8w5APgY7PWALja4iU958TmagRgxoFiCB1",
  "key34": "2bcDbMNZ1iYRU2fPdWLTwkTsVDH4gBqMfiYpFXwChnsrLeXGBVyUNvDYUSDKUppqLPMfPzQcvzpBgeNPXgsPi5x3",
  "key35": "4uPEm17ZDytkCKAeEYia23nYdgeYsxwoquBmTwsEoZ3jryPm3yZzdkj3f3tQqMsiBpfLMKHB1WkFa9RCHwCSuNAa",
  "key36": "5irVXYRNmX2QxaGRxvDTxp5BoobBQsteZgXE92ydsMtQKHSQSbFAbBC6Knh58uJ8p4MbLLCaXsVhrQzoEtVNzDzQ",
  "key37": "5fNNsVyTzu4rX7hnPQKhft8AfiUhcXqEkxjN93xaq8nwjLq5gwbsP7JJAjSWQ3qXtnA7E4qNzcuZ5nBj7sc4w2A5",
  "key38": "2ZxkHWi5DWkLj93j5KrfjCxT3bmwQ4prwLwRSiyQ6Sa3c1hNj4za4DrrQr9v6uaAK6QAGCbzV2WZ1iARJkbnWznv",
  "key39": "4YebDhD16JP67U9e2Zm8cDDz7GzJVBTiQh1M6eHxvuwYmyYrKKMehKFQZahtGwpQB4djqsptDkS2fx1VAiS3rDJr",
  "key40": "5YsFwWs8e4X9vXK1KriGKSR7aF71rFwH6j8MqNdScuWziEmKgaJgYGUzjthVwETkHDuzWyQAp3bbPXKMWDbF1wyG",
  "key41": "5EFx7gF5w4r8ewxQVaZQgfVnz3uxX7m6gjWDsDyuQoFTFo9mWfGNhijfCGPMU3Q6ZhLymUoYqK23qstHuWudm8nN",
  "key42": "5qMFmfsJduaMxcJuYAQ6ucZsWwKdRpL21ZbigXTHRmmVHHGu7JpnSNFc59ctNiqyi6G7NTHviurGLuwBnYByvQgo",
  "key43": "sQkhLidxcJdBQWxFYiXt3WN7uHqp2jsQxUuyHX8KpWoX5SkNQCLdCjz3ybAJuEJkEu5DEj8vzvr9tj1w3NM3xHA",
  "key44": "Xoyy88GFeAGh3hjA6CWvAXMoVPChYNnHKskbkT4gVZ4Mcr2wb9FGD9AbGDzyFEVSySaaCrMe6X8a286obJwFooV"
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
