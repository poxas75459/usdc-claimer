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
    "3rfPto2pU8LRf98vimZE29dddvUuYorMSqxZGzmgaahGeSJAzKX9iuXjqn3A4toETZyE31MRr3hPApCxAC15oQvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGj29E46kEeNyuTgCFjMV4zPqskAVBZ1eGJnycdzbDLTVZGjP2jk3s2JCkgYnQGPav4bhcjYmWRNTMtE4Z79FyK",
  "key1": "2nqaFKzywGyhL2yfKiZsoj7cau9z7Sb2DbCtXjXr8qp75XgLjNSvqmNqyUAvN8SWSiZVB62ngMxHVzk4obudsbt8",
  "key2": "2265w8Ct4RBmipXfiHaqkwbx4uBCvhqL2Bq2Be73K2ngMAextHNPCzNvU6bJJDADfLkDyLtW86TTVhdzxceRQ3z2",
  "key3": "QCNpDBup3b4c4siJTujXT14f7stv1j8fDKwA55BuCwxq6EosCMDVkFGKrR18D3i1FpzGachFEECaHj4JDnEp7VA",
  "key4": "4qdf41vouQkyQTq1ng7sXqv5zFyhz8bzfdXq6eVNK9VezZpxpobP9jbCayD1JxzMPovPZ1xz44RYZ1vfdsgSeNvR",
  "key5": "GrV2DRunEANXPGCXNv4PqtVnqJyzWniZZJTZdWMEa1tQUjQ4NN2dERQY8XyvWXkuoZXdXa5KEk78m7Q3x1uQ9un",
  "key6": "4yrQpupcfEfofxeucsAJR1F1feiRXzgjZTMS1YTgQxZT6uVSKKFqeDiCa2ZwPH2ZYk2H6KN4qZvgHfVSbnqpU4Gm",
  "key7": "2TnsuuiN7vmBvt5y7H2iSos4ygmDujpVX6NbkxNmzKdLL6unsi1KhDHi8v6eLi9SVrdgFrwZnUy5pTuhz9onteGZ",
  "key8": "5hREGnrsC2H1T4WvtkPNQ6kDLLQBEiyYDKm4GfDyoqTTEi4F7S3CCjy6h8wf46yDr5a6entxUbFBLNdU1hhPuhNL",
  "key9": "5zWNUJKdKvEzYMmp9GchFegQthGFCC8irByhzyeSWWSMxgXt8W6B3kSFJcV4rwdj86WvcgYGqSXMPfGcCf9wfd48",
  "key10": "EbT2XY5bhSUqav8wZ81y3gSASRvWL5Bn89wEoSNMCPfBh2vhZ19TcmtvG92A397XfVs8kmKV2XeeCoaRCQ94fgJ",
  "key11": "5tzKyngS57EtL2a6bqc21rkP9Kz6aP3sXHDzSWnNJjXWTuzCzfsmmzBWo5dScVSF9mMzKrv76NJEnCatowvYrgb9",
  "key12": "3XFZeGCX6SnWgVZTubHiR3hDuKHZQLQJXaqGx5b43QyEfimE9GsCGfft1DioSe6xoNaQdc9xv3p4vGFkjZKKmV11",
  "key13": "3kBzBekUhAYGGhSE7ZYbEaFcYkLwEydoiVcYHKgZk4axnKNetq6YvmzDrHJZ85UgNw1wsbPTfT4ufAtKtpAj9QNw",
  "key14": "ZwSmcJzecKJYvYMvJGhef3wiwsgqBRaHieaSKqX7CHDL8tCCZi2LN6guSZqwDtWDmwbGDzzduvvkxkWXXmQV2oT",
  "key15": "2L3QaUH1VQRqbxC4CKXuiEwVWQ9uhgvg5jRQG4vNJPngCzXoKP1zXe4zH7KZsKCvgguMRuZvCo3opFzxLGBctbJ6",
  "key16": "f1itji8JN2yHCPbJnLt8AfdsTg6YZMuAz6PpqZpRQnQD48krxELiXHvhEFV5cHF6RcDa9WDmWSDXd3iAA1AAjfC",
  "key17": "5eGKaHDLM7qDiYhVaW335x7jTVNhBqg2ozeMzciVhMPLofMR4MHpfEtAeZgfErXZRWHoStzvRQe4YvREfSM23u4G",
  "key18": "3hKPtzhqyrXaq6mtVvt7Uo5g4bCxE7guDi2N8XZSsj1etuDC6B1Xmuwxt3uc2UeM69T5sdA1CzZKZYwSn4UT5Ujc",
  "key19": "hVtCLyDKNV1RdrKf35Ms7XBfNDF754jWtoji5jL48nfm7YE7cxkvRPSvu4kKVYwHsdKcTjwzAa4krgudSpAcsTf",
  "key20": "5cbpjB3MdeQgDsAyo8syJKgckm2g7vgmyCNmTQTSygAxpwdGcDB8K2i8hZ8gVpi1JJ9RzbjmFUbPADw6EFDiK34",
  "key21": "4EbqyDKbykqgUdygPS5cbSAvbEpyh711i9WByJunBcPuxnrLdWxXXrfRHye8fFHz1nkRVR5A5WVtRc8Ysy6DY32B",
  "key22": "5SCiaCvZ6gd3CVGtQApybYd58oZKt2Xx6cPwYZkN9qptJ8apKjXq2vGmsJMqqNao9WEaRhGqx7g9LqBjYpYvFbua",
  "key23": "CPZYXp5QoM8pmaNZiwefTQeUNNENkHr3BRKSehSprYuhriqjjbkgXdByCn8s2XVALkWBCmDNWHQmNVs72qHre9e",
  "key24": "2R1Udef7XRGrmqBkeQ1qEmDjxjazEGg9CLc7bZ99GiLWv6PxSWoLqPj4AuVdGPR7wfnnyG3p1hWB2jXeZkhuHcSt",
  "key25": "33pq9QjQ2nt3epAcG9NzZ2qVkwzHbwkMVbwKwPNT377E8PqeYZXMjk4moAAMwHpmaLGL4HREV6onL5BUBn7f7q9F",
  "key26": "YukE1Y5jKRv4eu9TuUdefzDvnDoEG7Y2T7AhBH3GMb9y1qogKjcR76ZN98mfCVWoGWeRZuaNmGzaPrhrS3zqPRQ",
  "key27": "59FRA9HNbxYR7bWnLGJYP3tHLGC8Z1CfiNVxmkVKmmmQSro8GXA982bpZTCs4MTWDq686VDQ7XWitUZ4Yw9xw6qy",
  "key28": "22vVJ6j6rTZBW5B8tjfoWC7Qg8DSn4pPj1kyP68cAQrotmnM8driZSJomNDxCjb7VpgwqEKbSFRZ3aU2j5bgXV7W",
  "key29": "2LyC7WpW2u9mLGyXRGq3t52yJkwejnEPUj4Tucu1HRVC5H3XezXHuxzZD1eucFMiJ86E41UaszxvoQNnqrzDzHXr",
  "key30": "4Ty8ThsR9sMXxeRVDsUdAym2c1mSj2FMuHvaojSZMp3j2uZnWGzCdJkzWnpi734AX4oi2UMyh3KsFQNkFYMKBMPC",
  "key31": "47PYABL8GXWZHTLi5xEMPXcR4aU7s8S86WqhQE9SjumyZ6VvWEmLhNxzZwAmSUR6URgpdYh2RvvPThLy9b3NyFgn",
  "key32": "2i87C6uJPcAC67yHEuSnRNdA49mK8VLZaGDjsTcyfn96G5EQnRReQwEn1D1YxMH8EmKtw5BNf7HAL3N7HD7dFLuq",
  "key33": "3RMnUVWBc4B7nA7BWCtovgiPK9zB5mC6fzA46v39rEMSHm3ykhPfc6XZPGk2MM9eky5jURgx4tzZh5W6Wp1v6Mk3",
  "key34": "s6RaZMfgDgRF4Z7y3CS74gV34QGbdvmA4otYW5M8txFMJFnna3BRxkPbC41wCzanGien4HCP7X3BBpuxx393rYF",
  "key35": "2qrCSC7Ro74kRDETrn7RuEJDARAQDCKYUw4scVQyZiRgsiuGaNjb2Y2a2YCV6oszT2SY5QwN95z2X6Xb8u17ZHHH",
  "key36": "4BJk62KCbJNsUDF27dqMarBp6x6dEqqDXmBonDzH9xpaaaGrLr2XLaruBFeX3eFrutEJYdATvksVTABwdpsMDDHb",
  "key37": "3VUMfgX76tPYs3fkmpyT3NuV2j6spH2YCzPBBPy1ynTGqQnGcreXFdGCD61d7mWXZLMdrfiWF4jv9AYWXiY728e2",
  "key38": "fd8oaAovwXhq688R9qqg1iZxpNhte7sCQxtiJrnnrNdNqXSF4MY37SfJuSMnWfDVkEuMNAPChCESXjXW25GFXoT",
  "key39": "4RWATdBMiL8eDSTEwiUSsPBniGGmPhh1jVn6KUGkxdDUzNJmCcGkQMzUhN3hd9DiniutiNGVqAHZnreN5rWYnuAj",
  "key40": "ECuaUtLGP4STHMwicxX1yKAPv7JCyG4cwjraJ96P4Zni4NTA83taBYTtoP6hXjw1V6zN1emzhTsWfu7WRoK9Qtc",
  "key41": "5nUZcCzKtSdLmKueyekowpWH7XSsYcj7ez7xnNsYnJQvfedLdhrte2X7Az1HzTgREBdwXnLsZGpZu1Ft7zcRSeiT",
  "key42": "2oKrrvds46XQZ4Fqv6VvjhZocBNzNsfjvvNFdqXrossSbarLv8s29AyKdEZZcUSjZYWqfVT4xoRP4fEkiZPwgXA",
  "key43": "621mHDTNnnV1i6NG2CdmdcwwzRJn9vNHFbej1tj9aynaLzC6vgsizbBfnHQgvGsDAsPkVXhtpaF7Gnou2hNgxwMk",
  "key44": "3ui8mwBJHobBGQfFFFtJ7DXaN8F1jfgGwgXiVRTU4gkcspT9QyMHiJgDtt47DjFqZ9W1ecR9d9iEetfH7zNkztGg",
  "key45": "3u9gcJZosq5Ma3GGSuqNAV4mdSpMnmkD1sfpAcRuapQndfMNA9horbzCSPDyiyEWnZUHLtnjsUPqitFpTFGhq87h",
  "key46": "2BwMHZHGdmmNxgWPM1kPjvRaWQ9DqidD1zKDWRd8sf2dEZ6xnmY3jCngSDXTG1rvaMZkUpyKLswvNyYpzGhJrXSH",
  "key47": "5xFaBxmUNUYNo6Ca25aaWe1HbAxxnTEzgCroSsr87hTBv46SGadHbf7ALJhAHida7NSE7h6BxdgEpmMPQH86rKX"
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
