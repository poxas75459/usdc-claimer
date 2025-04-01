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
    "pUtHcrA8yACxqKwRD9bcx9uxtpukFgwjVYFXsmmFW82K9hmWXS6PfzziybRuwYxKL6PsAmbNTWwuFBp49bHPrW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnxfM3sXma3MwyThstzfZgzNnjEMFECfEmA5jh8fkeyGqPyqoWenGLbj9fQbGPChUtMVPg7F41q53dJxnNzdjEx",
  "key1": "E2cFb9RhWKDGEN7onYNY5B1G2mYQPw5BSaP8sRzNXjfjBt9s2iCKjVJgTPFSxch2U7jpuaqnhhkhyVPtTNLvmeE",
  "key2": "29311S1npTVtKcKRp5EdDeWMgn3RrNvhrvASR7Dy8bbCMgHvFoTtVevgg6xTCmbFBiuAQX8r2bk29KZ8jfXGxzsw",
  "key3": "9HcSYUxDv5K7hmrggkEzqZW8YyttWit1QtT8DFW5D1QfDh1NcMUE6CngwLuYihXsDSSyPgqUD96yCK4UtyScwcp",
  "key4": "3YAf6Bi6xDqEkxre7JPknG1uMWmJYEkFdX9fnxTVavrmKwHDT4nBndJYXmBMxG2GEsPgKMgwBDQXNgCXXgyRnCNJ",
  "key5": "3wtoqoSmHenKLrmXVC3vvfZy1Um8N6WKFjarZ6TTf1fS6G6RZGdvYKCYA6N1qkg2zas3s6e9ikSGGtmnipSFbmR3",
  "key6": "4d5edrsK8x1gca7CBEZJzraQnTp1G5sXgHaBVDgGaqdt6FacUXiGfCiX5DudtDLsnXC9Ye7DBTwN7VMAYndP7oYt",
  "key7": "48csCmM6R9TahMWhYs5cwWSVkYHywSTHBn6pTvg9MqSdQx4zVvdWYGeXpKQ3nvjfMHVXJSAwZc7BRas3o8yYuGJo",
  "key8": "3DXoPBTLAgcsVeRsAGUTAPmi77SW29FpsxcKhQ78GURN3rQUXykRj89btiPCoLsrBQLTT1giG14s6hrrt1tTv41Q",
  "key9": "4xp8phNNUHVdzvYZzcoHMfKsKtVVdhVGC7KjUkkzNq5cFN8GaBiZDHFGffvocw58CSu8xY3CiDRrYoWh3MeurUbN",
  "key10": "3dMnCLFtPKpRzLrXW6re68R6iaFgj6MUMgD7wVFVopyQr2tH6rSRBDhthHjXqWAG1wuma9NXv1sccdppJGiqLYFi",
  "key11": "5rSyRsawABJX8iTWYMoLsPn5rco9ZZybjxq1dPy3nW79t96ah95xGR3NH6TgFogZpPECxNgiLC1QaLKe8XPYKiqU",
  "key12": "5H4LNk2L9EPwg6eYjGisnP5W6F16pRxN6fie5eJcNqwYTq1WfMahNSxSnyZZiNCvXvL2LWjfGniGEhYYgo8TB8YT",
  "key13": "53gcVAtYtdt8UwXsSZ49Jt9qTaYTKs4RJpj3WCSuhto5PGgjJPGzkGzcGhjDFDMWekcmpmXV8S1wr9SDhfsM1gkK",
  "key14": "2tcBc282zEpP2fgtnheQ5mDPk9L3H6fTYU9G9u6uSBUG1Wd36VEGGJjYjLC3GkikrZEAhNXn3aEg8uARU5dHwtCs",
  "key15": "5nGKeRN7PG5o4KKioiHaMp5B87AK3kzFTZp6p9qHimm5iKCvWwt57gW3mEWXJmbmWny71WjowLaUb9dNn2xMNJ2v",
  "key16": "27fVimNNHovdHG17YT8CSycz28PJnGSCfYztGbYedSXmGJT5VEXgGnwnC4gCYQMj4JnbRHVHmAHoEKeLwdG5W4mi",
  "key17": "dfGvyyQ6sos7z5xFf6BvqSd2n4bjGyiwojEWHPtL9yrSFW6gsKYvh92tmgLyGAujoeoAf7kwTzfWyXYFoYimj8f",
  "key18": "2fkvQdwVBq3tYq9ijdrWZJ6evy4KWfHUUy865Wfxq5gJndpFchy9YCVvozrdybH4cD3x6C5xUTjEScW92nRaq2M6",
  "key19": "2BwDwtydi9Gnpn5b8Kb1dFkshUdvRirtcnZXYnaQp9xHKuxyPSbYENT7XqmvS7REAoVuBRYWMht1qdh3LXfF8MvB",
  "key20": "3JhN8pCFDhXEba8pXvh944spkvHT6Sg75BG1eFta4mMgK2u2Sj6rorda57AYXJFrNCUwj19kALh9DMcFH9UKedRh",
  "key21": "4fAcAutt4UDDtoq1e7gU2D4b9uYTThjMtH554vAhiwFiHAyKKoaJvAf5VcG77stipL7Nt3E7eprQNam4DXAxJxUv",
  "key22": "N12121iGh3rJHQV7ConyN1tF3AcJk6qWfXG9JhdHjeEgi1SzgF2EtJYdJz31pL5VrdYVYo5DRC3TCqbxseT9n1g",
  "key23": "2AbnXNa4hVztjaSSnpWgqbPbF9u3bD1jbvznzWqzmtS8JQaY153wBuFnKVNHecBgpAZVmcY88e3UZQDTFNgeswQA",
  "key24": "4DoUgpNGHda9vGG81CLkhqnv46ze5q1KhD3mbZhDEtUb4vCMTrCezqB5CEctY8bUC5rjnjuA7FxjUQMTAC1M7DBH",
  "key25": "2Rc9FfPsm9cdEPbZWKvw6d9U7q4JUQidvGD3xWMyVDwMQmDpZ2gzZtUXXJEGg5twASDK1dnGzPtMa916Ewat4ZWe",
  "key26": "4iKWBjzKnmTUXShYfEWvYRBi7NHPwuyqKrAMj9upRoDeJnjgPUQZknTN2yNZvdf8CDf1uXrBmyrN65MrU8gRf8BA",
  "key27": "5qGQjh8aHoCXu4B8mYRx8k14Qtx8hRqq4d5XfFQZsUpPGfYKEkrpuVD43BH1iCYJT1gsBkPyqwrYjovTkiJGb5Yp",
  "key28": "2A9mDSbQmKdSDgEPTCZqcP7QrtMmuDtofNy83Ru8WprbifBTyq1cJZ5ghLWEZYuVXfkHUY9F3zHZsou4PaHojGMy",
  "key29": "47YAN5kX3H9s3fN1iur79quwiqJiDEDpSncNGbAjJ5pHCE8kSb7XvWYpvLSJJ9Su5qBkyTh3wHuj4GVpyWzuWnLx",
  "key30": "41R3zdu86VvyVAjeRxyrCuZ18TDcgFodXeqgraEFh2hGZBwJspTp86DvLEu3gA9ZPqYzRcDAL3v4qJBy4ER6eWw5",
  "key31": "5LimmEEJkRHgdrSndM7hgKVJgAXshBhZp1v2voPdfUspATZy6981AtCaRoopXUEt6KRB3mGcEerPkM7pSdWeAi9o",
  "key32": "3GYmPYvpXWyC3cY7xeaY1wsLnDaWdzwPRyoFz1otphipjHji5Uy7D5nd5hrPa4h8hqKmcVgow54No56nBbqXv4AU"
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
