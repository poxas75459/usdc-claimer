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
    "64xxkVaAAaN4yLUTBwCz6TH7Jvm7qyzHbkt9D958N5Et2p77yVKRN4rZ8Dchjg7HfE7kDti7x67MijHo21DwXEzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HABxo9SsUVs3yBKitxBvFwATy1PPYgBi4xw1m8s5ojyvZvvM1XZqf9NBy3xjuTskMHYcH1zVrRj6RyWBh4qQWcK",
  "key1": "2KEWgC1NwXC3KXLYFhtnhkECqcygjbtLeK4i5bKDS6UASh4X4oCeJdR4Ch8oujeUPSCp2AVWsYBNPiGem1pTTL8X",
  "key2": "4ip5rCAV5PrwuGgzRGDN3axc7BTTqJBSbscM3Fz7iNq6N9fTzdVpYRarfuXwnAAYkm3YQ6Leck7VZds1eskpAXpJ",
  "key3": "29qDvEou1mBMBkbwqFSiPrTAfJ5zNYYcemjJYfKPn8HYS7iwdhXYVGwuFzc5XR6SDBdRqHmh3DEX4JTUhhqE8qCF",
  "key4": "331w1bh3PsSroo3yQCCWN81KAjNs6m7d8kPpd4zfgiFsNieaQ4dkZx62JnKifUvjMuLUzHZ8DtEte26RnLLZjzpU",
  "key5": "AAeo1mZCMUVHxyUJHbaMYjms5SecGoR4ortfrRogJ9yPewXPHCrNubQ4LERi2oW6DvGxjZCkrFgjUAmmRMtMTSM",
  "key6": "76AvDbL9ukMg822GfwLbiAMw8JRDjFPa4kBZ51KZpRVAWr5978dmN4qrCm29PqECp33TMAt3fcJT2iGu8oEpjAp",
  "key7": "4GA9fFuQHi9E7UVFvZThzPqVgQ1XPVz7G32n7wRjCrMgYUcixeh8EJNE93UdGWVfuBJYiviPHfV7ctTDJiYzsxeE",
  "key8": "63ZCxgSdN2YnVQnE14L3EistoUjQGh4MvDobrotPnR1egVoAC3EsPgHfNR18G7WcMKVowondaMpZUzztPivxfJSW",
  "key9": "HYqeoxTc77Mbzuhyigf8kkiPWuScH8w2rTAbwAPJTTy2uWn8U1jABQArKvdP6f1uZXVcWCLxr2ceJiKfHUYBDoX",
  "key10": "s3MFq4Sj9TMancTk4ew5HLggghYdXsLr9sbLAguHmzsmo29B3FAmEA4bDAKvMiqsbCMGg6LHGsuWt2MPgyVvfLL",
  "key11": "5LQd2hcMmoLmZbPyznFsKmokk54er5k9WhydAsYoNkcC7jLxDBQSsXZKqCd2E2muk1rz4oXQWuQDHnnVy3ACP7Ei",
  "key12": "3G4gRQSiSpZkYwDNVoJ8ukFcoRQyy6YrmZGUxuoEbjRNnDKpGKAJ1crj8VfHXrFK3KZA4warod2eTw4TiDATnmmZ",
  "key13": "287Ax9zPmhx5xv1ZXGG6BkEUsTeWPR8HA2Q99XyBzQdS9rnu8D51NzgzcvDeiVShEv8tb2p9S1VAS83DWs9D27jC",
  "key14": "xiYJXMxzdr8gv79X4y79dLF9UeKohtPHUyzBkqVA1dnV9Vaxc8j9fX9AWbuuzWom6kkvquhAwbWoX9R27WZvEfN",
  "key15": "3H9Uwm76GjA6ZBuB9VcRqh1nxG7XJadhxLkD7uLKDTYWN8BhD1sjGq8PwZ9E6CbdmuxqAKNRrTNDoxX3aADMC8qH",
  "key16": "41zSZ8vSofY1yPmfqy2UtjUja7mEMGpuyibDT5ZFkXs2yU4hrwaeeQqTwKGconXpcMtbdE38x89GsHWMjLnMVkYf",
  "key17": "4jEJsJEomCX8AWxe1CKjm24HdRawq8nS5MG8mAAkxxGkuBVu3EqAb7osp5ufVtEQmdyuAWFKnCkVMqSxfbFrrvks",
  "key18": "5R1bfJT5gHSzq1Y39ttGBJEAvzje7cmmT8LZ1A1rrFuNPfLLiECXTKxV5kruAVRi5yWzxBxnGyTbdDQsfQQW6sXi",
  "key19": "2dUw8qtcNYSz4WrMFvedHNwCkk1qux1vVZzLShjV2UBxRhcBKJoNvdKeWbK6eJSzmkETPM3NuJu18Luh2SLWbRP6",
  "key20": "4RqYNCMdUbrPsZVj8fVyYy7EFN2L3718Fmei23EVf3FRzvpijGmq4Je2YgevHEXvEUTdzs3gJhmvGsazHm1ohATW",
  "key21": "21Ua4mf3jza1ig4vD2oXw5P2hj3VdMtjvG7FbFgJyHAXeVtZvmnDsC9Nhy45nYiKzdg7fL89VwvgAAqS7PH8Dc2s",
  "key22": "2kS2D2Sido6ARu8q9HzYXbQTmiYw4ciYw4J98R3QCMNYdbSRk4atqK5LsQMWddZMLEwQtBNs7eLisbCR3iTjU5oX",
  "key23": "3o8dZ7DNRCFi1vWUBEa2tjFXU9MLvcuXQvpALsBgiuSh68YQ7fBd6zKeZ42C67J3DC8g8TFXAaviyPg7c5FDiv7P",
  "key24": "5Dr83C878Feqw5otPC9TGneMupvYgL7sbhTroDBMotgwXKJXGFz7VNnb6c8CqKN6EquV5uyKH3BJ4SvjZrAdxj4g",
  "key25": "5fN9CmAvYyKuedEk9hKzHyN7632BUdV1Cpn8HjibPzFyw1TqZfV4t3pewnCq9n3FfuTFhbYus361qZErQ1htm4zC",
  "key26": "L8hNgv4nnoXQFMe7sN8v4Z5AVDNw6WtW2iWbwAETrBfCW53HSvDVicymdNqcmoDyfqAgYXxmJjX9pH87LDqGCcJ",
  "key27": "bwg5CnnG2mNdJJWQeFUaZY4RHN5YbBqzydEKUDDqJ99GTW8pv4wNuPeafKg1zB2eWuz9JcfLn2hphupUKas1bXn",
  "key28": "57xtiwdmMseGZgxZjHQHkQFDs433FEbEEj7agH6s22VPS8K3aTXraLtCqTQWsfYQLSiJNgbUB6Mdxe8C4FGJafdY",
  "key29": "5HNyk7EsgbrPPny9zkxCsPvHEaxdBgVTpT5SaTFkSB1DU7kSUTKbYof8WYvwnUYycAHy6czqE9471yR8n7GH6sud",
  "key30": "5X6G2T91aMAtSHBsjcHN5ZTwEnctgXbbNkcoJF8VdUM79JXmBu1BBkC8Pz1XmLk6QLNe9VL7kcgUsGJLgwUA7DQc",
  "key31": "3RGzmGr3hPAKwcLRXeEzmtsyV27eTFLrEGZbgXjGbA5chdLr2hvnfBzrtuLrKDw5rZgpspQg1gQ9JPBGqDaLHvWC",
  "key32": "49inSgrqdP44RvYV4YRTMaUcjjauMxTAAthTzHSAoEuDkkCHKCy6pfQUKkAMUKjXWq1eQmbeEcUoPfXnQHc9EXAw",
  "key33": "5WWLNEoWLj8HhmfC6WeCwPdJbUVjBBvqLqhobn6YZ9aaRFdgGdDNMwJpjdLJhsznFyZkVMmAG2e2awiknFbcTrop",
  "key34": "3Lcw9erdQVCA1DVNmvsYLbLSYf1K3N3jKpj9qe6GqJwxjpwGKKcWtQHNmY4Ps2wCtVuEzQBJK16YkjYwtdAXMrDx",
  "key35": "2FATagEPSFBK9PNGAUReVCSKQBPSK12sWhsi8c33s7FnWTbr6Gc2CDMBbzK2MvrLRF5AEibgZpboD8WctKN4Aoeh",
  "key36": "5jQDDF8e7HaM2P2LKbzZu6EJbzuLGxrSBoRXzCiugiVkJTG1o8JTaCqfMQknAk3zJ59yKbF2Y5JT5ShGKy2vc9V3",
  "key37": "2csRP13RbmmvVmukaiF5mhAcjxuxh2Zzsg3JRxVUcVoD7nSrZywh3mtdfpLc6Zu68SwcZaKSYF6e95SeFYZjKnoB",
  "key38": "3Kjk4hhk6hh6tZnWynJ6ZKV7FRsfPu59krZReKsukCpakfC9ZQJRKtCQGc4WMXZsfVuzfryWc9AD4CCrm5uAZ237",
  "key39": "3oxENJK3ftwYtNXRmTDXBf7uL3na1Dr4F9RMUBoS1ZRbtDndoDc7h5SLBFfaFGkJoybXKopTz5ioKPKN1U8u8U7h",
  "key40": "4Gc9X3YyAKoG45EoogLvwbx4fzXH4c7i7DQ46XhGLKsKAieBuS7XVYo3aWdaAqnvvHNpSoqbrxcQS6trVVafNZg7",
  "key41": "4jWxm1vjZahDwCKbrPERGMKeU17QYbbnZk7fi7K6KQyevhHxQHRDsf13GfJSdUff9W9L6oPCc3YfBFFuh9JJDnMc",
  "key42": "2BKLxkoFuftGHZeBwML3wFRMWwgCjdzdDKosvDAT5vwJJtxSCexERGQH9vPYSyVrzdP4wWm2ivhbKdyzqqcWnUH3",
  "key43": "35pxfqZqruY3M8EaTkToy1ZJRxqiHHrKDNKnEYQ3UMakY6mZBLXm4qcBKQLvfF5TEXuPMeUKsTBpUF3TCstFzLU4",
  "key44": "NBz5CgJz7h2uk7MxPY9xmVxRi3ijpvXAABybRn46HT3Xccw21GK5sQLhi7iMFYZQCYJWRbMyxw7yBKd9ShDjTAB",
  "key45": "cyoxQzBnmwP2Q49Bdw5C8MSfQu7XZ2qowRz88kiM17cNKcVfs9z12xRQjxTRMNM99NwDzhRTdLcPV9TXZNapJYo",
  "key46": "3PHzUr2AXrmDMJnjePm8AF2P3xeMZcMpfnei3LAwQAbQJHyJGVWRfUrRBfYNCe3Wv8w9LTjQKTy4DwoTEqNpXAQP",
  "key47": "5VE98HWAfEQBvzrDNzzzydDY5K47P6rZEicbo3DzRktY9QyuPMZpW9s2hNmTeUABu5T8BEi8ZEXskJxh1XgYZjHH",
  "key48": "63AUThiNLcr6uub42iikpSuFwL4XLbJ8exTZCqeER4yTdMW1X1Uyr5Rv68cwVDTdRJXUbGmu4oUFLtmEk92g7Qvi",
  "key49": "oM2X7xaSL5VicwCisfVTny7oNUcmNn2t3FyRLzN2fsE3qTDbNr9vutLXeteKsKUmAoQ87wMLYN7jGUbD5PwURnf"
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
