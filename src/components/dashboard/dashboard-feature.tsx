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
    "DQ5AizXrm48fteZ55VeemC4qGJKAwtkMHYaBAPsUpDydmsSK7zoLHhrLwxumyY4HGsaggRMqpyQAVHyqjSPQKbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356CzKsPmWo6hPxSqN9Wcysmd3m1vgzhkbKofuG7RpDPtQAS5AxG4cgfTTFr6oES4qG8drYitC3MuA2SKEhxHzbx",
  "key1": "3uddttgCJrPEXBovdjV2WQ3AhgaFDE8AW3iGsHHppYxRzq9fUVsBaCaGF9JVutyfaM2jGXWjP8rpPTmVkK1WKwjt",
  "key2": "52UCM937BpNErqyuH4fwtuhUxTD94TFNTv9M7nWtTVUzsXKwyZ9NCy1WxB6X19CLEpLdh2NAQZMwsuAbCKKCTWX4",
  "key3": "33vUE1GC7SVpad9xMS6yThMZZ354WiyzLLnUAeAA2TxcM5WdGni3DEsxTcPFEB7CDQCVT74Qqzgar8ooKMZXEtdk",
  "key4": "NfvMuoCzBh8jMvEZoBVW9gSfuiK1m7WQscShx1VVVC5qtmS7X4nCebzCxZHJYTc2HdQY3qx6F4zw9D97ghewTFF",
  "key5": "2s4kBnXMNeW64zJUUNjsk5JMPu61p71ibrFiuDbnXroAwB9DYtJLxo1uPdYu7Pkr6QU1YdbS6bzbxHTaUPGLgfhH",
  "key6": "2nZtLS8XRyj983efBeJx3DaSxGDpPK6Y1ofnYRLK3Z15ZiVsBD9FGyB3yeBCwE9X6dnqUEEytmGAQYK9R6YuJXjN",
  "key7": "5iamYjnhAPa4wYCYoj4ZkkjabMZhoAjVT7KuysHX5223dMHtefFbBhJr2HsPqpWCwYsLo32owP24f7c8XSrMhLwC",
  "key8": "3ccy45QtWrx3Fmd62hrxeRFziuppcTFpHVqQY4X4aJKgT28KDHL4NqWDLxbP3p2L13deTHVtbGdsQWe72HzLY39s",
  "key9": "2MJeoS8J5GJrWEcMghMgLZBCW2edWzqkA2UH1fmqK12DuRzFpEbsSg4M6J488734wYY7z3sprqJ8SZ71XZXXLMYF",
  "key10": "2fh9zh7tEZk1VitUQnFTkWAhwFouYoTV8ErZy8vrV4mFMvaT4cH5bNZsZsPBZQW9JiUnYVz8FgjGC7to8F1yFYfW",
  "key11": "5FfrqwrLKbgqZVZLXZN4Wo9GArzkcd21gDER9z5AdvVxpKKD2gpuatKMZC4rHFDw7aRF9BRgGTDQmDnWFpEJtCrA",
  "key12": "2gb1b4eoo4ESvSH2um9gaVa2iCVFGTrHJTqDYBjbFXZ7cCCyhSoskcAaMGnjdB54d1USsgf8mnd6JFjDADB8FkXG",
  "key13": "1v1nTs2avgkiYdkhGC6VRjcGLVygkJWA6EnKdULGhY5KKykyS5j7yDE9MS4Zg2ZHx2k7WuSQiC5Da5mHdgZ38GN",
  "key14": "3tiasf8zxJNUYLxr6iysTJzjTVQuUgfwANgjKxvoeTjJ9RxMAuu88gWvkFYsCvFtDTwNeLcSVsNqLpRBDb3f2sWw",
  "key15": "eK2TeGFMuUyEaTjQthEx8pow76GsjetVh2bWg5m54qdMv25eteb1CnKodF4ZR2WYdMdPLyxURztZkayATMHdbzR",
  "key16": "5P1sNyivJK2cyPJnAD4rKMp4bYZ3H91F4JekFQxu59oGgjhb9zmpcgkEn1YmPQFjLP49vpCSxE3eGgi6D5Yrdp2S",
  "key17": "5o4ahExy8E5DMQbVxY5SkcZ8J5AqaFXAt43nZiqYKYv5SKadDVHL6GRKKH836yN9RnW8KTE4FqVSM875E5Wjpfbf",
  "key18": "4vNdJ92dRAskUxFnKXxZ7vawWFowdvgrc9boXcA7PJpZUT1dHQ9LqbUSCAb7geU1Bg9a21DTyNeMvEYjwuPGLrVh",
  "key19": "3VyuB5Lw7DqoroAJjPQWCEkvQgTmqSynpuNwpeDPYvdwjKJCmPj5LDTTUYAMSmsNZD6R4NDhXrCVm5tJv2jbjgbs",
  "key20": "4neqrRQok67DRaRV9Y4sPk5tphr4wc5MHQJT9xvg8skFMthKXUg9xu6cJw2bAS4Gypx9NZmcc2twF3pA4VfuBeGM",
  "key21": "2hadxJFk3YsSqY2conSnKroxzo7UUeiuGYqYcRv2fjSqNukcPTKaQQeeE9tj7G68U4fDkJrfXn43xqCs9K1f4niK",
  "key22": "9ThxNHTGa3x1DLbvdsLXVhAyr9CFC4NxL6Sy9dJP96AKi16kep3hbakSh5sxCHbDAaw7cmkPxKuaj3aLKJDWxUZ",
  "key23": "2peu7756MHVA6LDVWLuYnimL5PnxUcZnN3pJE31iYPbJ4j3LF9N6DZVj5Dbyt4BnSkUqc1GFyy38pcLxc59aXmkh",
  "key24": "4KhWCgvA1ZApo7nWBCfv32iXndYc6hoxFyuPuGd4MaNMRFQeLjPbXPF9XyxesJSokrexdNtA1JQQCRjzovQcn5ji",
  "key25": "4EWH1fSnAW3TfqxyDWFj1sKxrZa7wCHVsAJHHcSaGuzzuy5W2RaLRBCHVf3Cehyr4M6ZMVbWT8Y44smGJnxj23Sj",
  "key26": "M9oq3Bigf9LfoN4yteTUTjpipP2JABCqR3pCKVbKBFxTyE352o6RsKa11CAfMFeYRo8ASLtkLQZqvf1m1gR1AtT",
  "key27": "4SKm2bqQPqLqJFCGr1R5eicXTnJsKqAkjiHJzNDtyXqF64m5vCg5yns3hYb8e7C7mW29jxbBKyjrTxMWStciPbG7",
  "key28": "47TxnHJ2URznaozS8LozJoD3xX8xChzd44ZxAtpetp91EoTpXtd88hHCrYr6Zufkx7Lv9E7DH6cEsG5H6e9wiFW1",
  "key29": "BMXmVq5NaFWNYYMKDbeMY9eLToGdGYnooDYcjcqsBesVHZjs6jomrXBmS6CoMy92Qq7LdiWUTgpdkisr57BYxkE",
  "key30": "3cTRyGXyMdkAyQ4hBAXHpdAesCXKutC27DQvTTdKfedrgBpBYnHCjaCPSpJmc1QxJLtidCkKfeCJNVCZA1eXLNj3",
  "key31": "5Aotz9MNFoT66tyAQvJVPFVyaQMmnKqpAtSJ9NBM22fy4FfJsvaG7mWUwdnFgSpGDq9UR2Ad4dxjP9K3uRwyiMyA",
  "key32": "29oGby7u6mr6NzTfnoy7eZvqovkceyiKgmUPZdGFfBUSWBGTD3WTkEX9k58SRnrhNFonGDymryuPRwX1GmjLgUVJ",
  "key33": "34Yj21aChF1CsbmuaZy4oU7f9cWxRYGzrcZNQbQzfWQGMxTYv2MFyghwemJQkt5jMjqucvNmKLFuijXHPtQwWBdn",
  "key34": "4kjz2zdchu6sK6QeCj4LD2CT6f3iCmmY9rqBCEjdzL1tWb3MLKTGe6fWLqmzXmmX72DHWKDBq51CXKKL3b8DzPBx",
  "key35": "4u7tviSqTVDphPmx4Frh9sVNJv9r99Xb1c4rJ7KPNJR9yxKJQTB8obkMir5wRZhxuWMa3NVM6DYJ5BjT2A4Enicp"
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
