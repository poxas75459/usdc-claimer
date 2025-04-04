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
    "527UZJCYPchyQs8gzt131xQMuqwcCN8r4EqgpYBBwW6DLQWLs6t8fwGUAYKC3oZiduRC341bb7r3CA8G4RHHPHLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYWzU6ijzmBH5GhrsHzavtjAZ2Q7LZYZyuqFLm6YQcbgMuGbLCSesYDw8pd1fDpVWtcvB962NSnJdgkNRWQW4jh",
  "key1": "3dwGwTp2VC2izH31eKML7FbDjNckhojRqDqi9ELecpTCb5NWnVeTYzH4QCbfqS47v6GgBLK6wjMA3Kmjeci8rHk3",
  "key2": "51qZfQNUrD4mS3c7bnxiHzE3xPRfvssDmMiEvGaDXEsAjv3E6BrUUT8UFNzqEuMrdmZh1bfS2z5D8YRp5ApvNj5T",
  "key3": "62Lcihk8FC5xWgHMqt8G3TK38rLRDV7Kt2Sot8JdQSAQiAXD4Fq2fmEjBhjcPySDQgrnayRzdZcwah3e1G4t116j",
  "key4": "3XU3sEfVSCzh5Xct9JUymq1xDMvYUAPaF2zTDxC9JrL8yuTK8YNXUWX9e2N2GC4c6jDEiYAMuNRKJtdPJp4oaPuw",
  "key5": "5vV5ptoY2DuxZ5KH49LWNEn4VFdhT8J6n7NsfLPgUfF9NvS49LAF1JiHnuDNmbpfmfbX9wwrnDzxwHof28ntikHV",
  "key6": "2ffFyw775thtJBszRvxeHp2iqWZfS6cBbSW5Aj9UTxR6mY66nFrMUMeGPNgHiUhKquUwsDNhxWPWJoFQMavrv2QK",
  "key7": "22unHxZmyycvhADDheUQovRhJA4F1dUTDqE8h7XqR24nPvY8GUitSxB2ntE81H6afNUfudw2aoemMP1xPzGUSCa8",
  "key8": "2UnyEWwbgDgtSaMRxNjKex6aRXKziEGNZgDedJnZTzoC9kU9AHDX6EJpx5YiuNh5wAQKadpaK53QtFP4Hd6j6C1o",
  "key9": "3ayng7EZ5cWYLdiHGJ7tTgWs9GoN3bGQNpCASNnTPgyNZ1GfLn97dcPihnjGUe7QuyBvb9bCvr9WcUWscLwCaeyV",
  "key10": "4FUSWWLAcBsV743QKYcy3VqUKXt5z5Gb7pmeosb3Eu6LQCdMc1aX7hjXds3RiDbhDA8sd6cAUoaf7FA1Va2GHxwF",
  "key11": "61P95XmMBrpSgJmJmueoS2xAKM1RAM7g5Q5yen7BSma3yNFadwqFzDDiDLT2UmHooETWAbbhVgdaG74WFm6Zr7P4",
  "key12": "3JmQnAeW8vL4nPcK6e9UHaKBXdr2sS6a9e2uBq22XkyQ9gM3RGrXRtc8JDggt7q2swGV2ms1mRq6P18MrK8oeQey",
  "key13": "4yWgXWJbT5Vc7xt1wtFGFP5MERuAKjU1mzFGXeTqc5Yj9fAtxD4gErsHhMCHCuKMEupzziwfUT2stxsxNbCeG7gc",
  "key14": "2hzJcA78SYQaXRRgztHKgbJtQiVaPkjgokUPqHwusexpPj7MushGnDabvg5ktsF7UUBFmqcs5FM1hDeLW5872vRh",
  "key15": "FcHWbb7oXiA6m2wNgbgd5VsdvQoWPKdMB8bBBox9KojxM6rwKZn3ewfsB79wM8Vt88ffS4n8jXN26dd7aY2zrQm",
  "key16": "59m2ZYcBQzFGbjd7H5s4gSKxF9U1ePHABRgActZpQhZRCxM35tYHDtFg8x5ReoCFNfkEqekEJHXaun2Ap2RJKxw",
  "key17": "2JQb5FRNryGj339akgXn8MjkMJ1CWFtZDBSsYi7jv5uvdWvqxaV73fKnaeGsCV9V77tZLoSHbSWZfYv6TmsuJomc",
  "key18": "4L4eKygnBbgNkZUmY22gLZbauxJuPjk2aJnZbvPG6x4yYSe5dMm4BecgYMdV5TF91KSaBxcHPEvLkAkYKBdVwi7x",
  "key19": "ECUtnzbzPp3e4P4ahXfUdKFY2iKbftyzC32eBFvZs9MsXcrApN1anjPDRd98vscuaVZR22Cbxu2tw8XNGpCNuRS",
  "key20": "HqA9vcXSHvXwxVPxxmoXvayScPWLhcfriQRq3Ta4FTcifNHdr6Y7o8mYdoWir5ycKKnYfDLYTCXovo8neUhho4h",
  "key21": "5wZNZeSED5GFQEzQniZCMb9vwZNvKziEW792P4B86151UAsdQ2ScPBzkD9jv7STf8qxpV5Vvt8aNu5MS9pUAmzyx",
  "key22": "2c44pZp8sdGdAcPFos8fz3FjQsCJpPy4J5pVkneKAcc7u6iecFdyYqS7XG6kzRRG6J8WK54GnbqqMoWDF87cAWGP",
  "key23": "edpksY7pnd6rXvAENabHA1VXqgEQGpdfkUAnLVj37FhfjQgk4fqBLKpHiHbLGHezyz3fU7vNP3GTgtQ41gkCsgA",
  "key24": "2EdTuB9bGow6xowG5ELBFr3XYBEfmT52KXXGLguRBUi6uPF1ZHUadj84DAMZtXXeXisAjusSTTDRmTrB82fJ6zbM",
  "key25": "5njbdBxyPQTKAzdNSg49FchigNrY3CerAwZwWcnvdVcixgzmF4LrXho8PEG7U93BFWPWs3pbMC5PrMEbVcq3u7AJ",
  "key26": "5YJDGEUVHapNwh8dt77deRjx1ujWBsMJt97NFeATti3pjUdE2gMGwjosqPRp76b3xhLPxk8NQJfrRVNQZrxtedCN",
  "key27": "4jWWLMoWnQ58jbvVYNcb8oLDNVPNmut4FuvFwstYhhUymW9BAAav88XHq3PJjGU6Dtxuc1HfkF9J3wS9tWXta1HS",
  "key28": "4saPVwxw5Ws9HJHGopu1fhGAoJtiJdicJcxofgGFXuPqk8JTPD4aK36qXH4SHscMNT7vrZyEjpCKNknRyNAdS1UD",
  "key29": "gg3ZZHZq2TttwCCPqLdoYeek2YqVhxdVhU7Qe3zUuvBQaxDdutxJfBhkVUXjBMx4XuKLQVJzKWs54M8SiQ2isYR",
  "key30": "4dAzeceUz22tr8auw1Co26oCVgh5ANEvY92gpt9azNMuyEPKqykZqbhjbqtNLUicP5HYXh2v6AzUo4m9HiH8MN2M",
  "key31": "2y1cWUCb34yzyTRRMJpN1qZWc1FszB4yXc7HRvaEYyq1xLpMYzet5xgQA8EuKEs2ME22ezvbkxGNCUHVkBR1xWXe",
  "key32": "3NAFYE3a4so9XR6wZxnP9jVuB2UKvwjUeVFN2jU85m3sfBM2shqyLNm5sr1QebyU6LFGqq3KbZruHHwpcgULcZ4c",
  "key33": "5ou9wor4m7QrbCGTwkiBKdUzjjk8BspZPiYxRjeNYaum68pRX8vRu7iAMhGeLBfzoqorjC5dBeVm66Lfj5Ci44va",
  "key34": "3Fi11rUrzafSkdZQwycHpBLkfmDWYo7K4U99Z8pEjGX2rPcv1JF1J2pfVU4xUzSQzr1zUckVGrquANvTo3cB3PoS",
  "key35": "3MDRr2PzEme9YqrF6cFdcDXApNkb3NtmjagJqVgK7xAVb73jBChzGtKHjwjuxVUYV59r8dYTm12qQTHAUmeNxT5Z"
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
