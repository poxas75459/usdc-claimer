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
    "5ULugL9wQi7Yo4DBvogxskLsdEW64X9WTTn7ny3pikVCkwKeH9VtYtsMrcf6w3WyXoSSMFrquobxtdo36eCLwBhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LZ974tTX28yrpwyV8fEBZm3evkq5NsZt93DrGHCiNryuzqKFvyi3sgBnXx5noUSCB3RwRVy3ncvLKVtW36r5qaL",
  "key1": "zDdB4FAqk8ZJLPo7P3bQSvB2ChjzEnzpy769Af1ENqEmSQ5VEgy3A6EkhvXsV3fecAUG5F77E6JnJajoVKRbVCS",
  "key2": "2ZUZSXpgBCaStVCr4u6bVPao7UzcKejP5JbxCdFKSFHsfyGNCh1298EiFTLugJYJbGg6qivJeWXnUTX3wT3zRvyU",
  "key3": "2nC9fd1F5kXuZcyPwAJ9pcoGzvnUSNDD9HEpakNNuFXb14A21cAzqXor7hF3F3KkVbSDWMgu2csgynPq7SeWQFdA",
  "key4": "4ZgEWawzqxLnZRo8cDt3DWbbvCWgt4qrkMVMcJAyCMDUTDSNPi9DipVhjv3AZ21bfCkSojNbzDG4LSBzXZGaa3nD",
  "key5": "3YpUQnTWXddkCq64FVA2zkqe4pdZWg2DaMUjaDxAUKz6tLenZDRYxMUYozYcMMYx6Mwp27vp6waHPhNEVCCSU7ic",
  "key6": "5GqrnuHxKPAH1qJmXvb8DLHX4jSz73RnR5Wk1uFjWzohtzGCxSzGuZ229Na5Y8q6UmPHZwsqgkmnLyWHxBJtE2tR",
  "key7": "3rxCA2qRGZ7K4MU7aajRPYUESfwMZesSMsdZfVcMAxh5Lh7xXB1wffwBtGhUN2Vb1WjjADbZsMhqqYmjxsvATTyu",
  "key8": "3Tt8bLRQKq9hJYRYio2NM9Mj9Pk7ua5kt5FXSwKAo7wJ5umvPH9cQcwVFsKTshSSEgSLhpePq3X2QVWgCzs5i3Z9",
  "key9": "2P8vfs4apoJr6HFEfeLR9fyHYHqhobou9Sg8nyrpPgruX87vHi1HFL5s7rFWxuYAb2P4kRUWpHwtMUvRT2Zcr1AN",
  "key10": "Zg15tghukQvsWYmayEvUj8qSHMyP8qtpjEo5wdUht3Rt38ZPnfuFnhWHwfKwWbSYjEZ6uuhiGPqNiWrXiXSMNP1",
  "key11": "29keybQvjrYn9oFjzpwavEmRr7kSyKCqFcnVvSdjympfHeDdps6AH6LafEtDBcq5YAaXvaiosUdQTTjHg6HCPxUi",
  "key12": "4HhqQaZGTqyVvUsnKC77AwGnS3jczBNd2VrexRE21eLrkiUJjYSpE9afzYmn331QhhXZDKKFTAxaJD6mMdAcNMD9",
  "key13": "KPH3ejjPqHxXmf655UBNhDnSpqLtUzct1UHM5i8NoKoCYnWYiUuJuyjEatRw7Eczkaea8ecq7uA3fjJEZzoEfyy",
  "key14": "474zCyM4uN9R2ZFRmum5C9o94XFihhz5NP5bvr3TuthQSCf8jAQnV6k3C78YiqQbSfon7eW5WYANSrbz49tEWw9q",
  "key15": "32N3yWjC1FxD5ESLsUgfQgXhG864ijGUJLU1tSHpHLM6pLcVtGWLLtQgDu9oij2Z17CUi5oPz9DNfbF3fZCPSWej",
  "key16": "62TnUHzmdg8zSUL9VuHfoweWoDUFGdVKTHbbDbosQCSFEYK9gXBhJmuKXctkNtEWVTso2hHdCWrx5tTNeerGRwnb",
  "key17": "4EgDq18TaVqYFSC55LFvBLdPEWUYQ9Tp2iKUY1SKUbzqf9nsDebXrRtUAn94xAT2kiifcuNzVLs8k5TRCo2YW9Eg",
  "key18": "2a3vTRgityAUCxe19U7Pkqvwo1pf2WJFC7GDMKwE6Nfxx1VweGWq3pEwQPAHahxxdjr4s4ey9ZD2wetwEb9L9Ud1",
  "key19": "4tXeCurxTgZRqJHGB5Ny8GY5iKmaANsaw74GNDJPThMQ6EyjCt7nr2PjbkBuhe7U2mjtTNMxmE8eG3wygJ6DZhG9",
  "key20": "3YNcH42efEfS6w3pkktg1xUprQwLUiavwozDY19Ma6DnqjpmJN19WrQ5Bxj4G9fpmz1aSbDDpu7oDpdKErUZYG8k",
  "key21": "2uaKZneBo6a6Qn1RGmxKRF1jEi8sQ5pJ5wnyALW1CWyqTw1spmip2GghJoAFhmP1XQceyLkjtKoF91grhZFe25XK",
  "key22": "66r2Yc3tkv59UAZfcsSScKRreezgtURHKYkTjVnd9pKxccREZR4qJ8TqQXVQ8t72eMzDLTX4XR4RLrFaMomanuxT",
  "key23": "1qgHvUdvSDf2zLSZMcsmBCM4H84y3NwbY1EhEp6gQjy6b277ejd17gYqVBR7ZD8uBemK8ntFiKLkxNVksreKzMT",
  "key24": "3C7CYH7n1UgNCZE7kU2AGQXqfPk2C75GL5GrGzgScpDDx1QBkiVe73NF9Gdro4TMjmpNQ54i3D1e62P6ZAynKEfW",
  "key25": "3m8JuzPqwc8ehC4RUdzye2xy31mjxTU41SkUsyEHeETTWVfSaLgEL2fp38koS547Wmn1mFNk16mX4JxnB2T3wV5j",
  "key26": "2NqTgrubaz9RfmopfFgewmsiz4GB6zLhDGeVD4NKkMZGDkWELGFmUmHA5x8ScmyG4kgwQjPZf8xfYY5CrdJbV8SX",
  "key27": "23mYGtSgw287MRacSkuYFehrRmyG3JRMbGKLiYvSwJt4uM2hVyd1wL1R4QBRLe8fJELHKRUyjdH9nfdYjdAKwb3r",
  "key28": "4Jttdk7EwoozSx5hyf4xs2b2ZNLh4dRfrjbxPiDbzhNCLTyVkszyUTFtjN4NsVPyvkfrGDFnj6paFCvXEakNr5iP",
  "key29": "5BmSzGhenVLs3YLkd99WKKYYemYMZijtahmVHZY5P53UtXaWZEhEoRsPHR9kHnkH9t5WNzZCt5dvz6Hwkb5ErkHc",
  "key30": "5BsgXLHrhRnzn5EBwBzNN5ZqtupvdUp9Vq4p1nEbbVgcwki7DMn7jPPzetJDpccHdZqFt4N9HnSqkrMoLDsywxSZ",
  "key31": "5vnuETP1P6zaBCg2GfTM8ZRTHC26aLj5T4Si883S6S7WuqQtKE2ULAT3vYHmCCLqg533RBRJ7sySwzzxBpPuA46Z",
  "key32": "5Rc4VvcLh7juK3a1QLbXMDTboNFbpkdsjpTbJvQXxJQQLmpN4HQzAZf2CUACLoVKkwyPVyyx2LJ8ZgMGpRScWtKk",
  "key33": "4jVWkY7uezZ7PdbsdvUX9aUtbRLrLUCC34fTdNw1z1783YXsEmPtpQrXcn1UTCaT1etFcArfRGjHRS6YsPLiWmE6",
  "key34": "3P9WzPJfx8eARdcuRkutJjFowyi74eB7oBaZ51ZHmQnbiVm8vfZpcQALQDiWu1s1RZZkvDNxVGKZS7G8kqzqkcLQ",
  "key35": "2yifcgWC8dL5GDYuccd8dqsHTLChkqwywxG7ghVBTFUsKppvT1aBMu6fjZAS9gpBu5SysKHx5tZgFuxwvPGEPDgP",
  "key36": "4bQoMZpH9wM7KTbvUNTfnWqMb6CPvhrTnmLdGbZoM1pVzK55kMN8N3puhWnkvfWkrTBUomER3iZAnBhpSKDEpUAz",
  "key37": "2snoYS2mu3gdkHE8MeeugMMoZgEF2hNAxcZpgNixSYFmugc1RNcRsmXDsL9UNktpDkbUtCUhhh3z81SWFpMqncfJ",
  "key38": "azcEBYV29SPpLwdqjWJBbpagKNbPopfWCAK6PPEvuXsrzvQGwLqFU8TbHjVFd3NQMcbtj8eAHXPtNz53C6SUxtG",
  "key39": "2A5pCLJbVFe8ZuwNX2doHo4sRiUJHGta3F1UybHNvwMACrpRrqMuHNMS6tiqwYYzDEXe6m4ar8WtJR2uDe1K7Kvn",
  "key40": "wGVnWoaeqXcb9XsBsFiudm2CNHX8CtzHwpZxyndMWrwU675QFvepCA72ofrheMVDbvppSbhpTW59Ras7aKkDCor",
  "key41": "3RBE5e6Yg6HUbmqi36EjKvQDAaBPZgC4e6z1kmpjcuH1Rpwjk23KWBdxTGhNV4t5fAkbzhLrcQmBBQzkcgyiMsKh",
  "key42": "5FTzVb6eWavjY2C8ap53gLqATuxiCUbSD8V2ZFPfCk2fpmjcP5p8WWPUMykBnrnKA4YJCtAzFQ5W2Cuk5rzEoWig",
  "key43": "5Gp4xwdgNmZjLcWQzr9aBz3nA3YesraDejVNnBkpCzcQv3vkagZqp1VNGuTJnUT3c9jLMYL6usiU5qn3KrDYeiv5",
  "key44": "5Y95SNGTcARo1XLaUKkyH9rjEqCVCDCVJzzSqEB3RZPKBgLiU7eyLwjGHNqMMqkSgQKpmkVMiP4gq6m576d39svt",
  "key45": "52qciga3CUE54yyBxfmz8z1MXgmHj65dJsSisfqMQh9oircxrP3Q98KXtDJjwmAWmYoVzXT1tviP42zCLtkoFoe9"
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
