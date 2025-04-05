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
    "5D5iwCdwBaCjNgrYmqJmYYdfwMuL7YvWP7BnW63rUwLqUfaJuxs1vu7u5hYNA5cikCvYo7TBYJi915j53SAzaSwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hyWS7aVap2zZvMUmYoroeuxcP2xnDRmaKMwdAL3ZJhecqb75QXzDKC3YMjCoYCUckZsk3RBRKYGDK9oMFQeRNZv",
  "key1": "2s4d1PvhcA8Rdq6UeNcrmzsyo9xY8EdkWEAgLvRF16NCqefWHorvgL6rAScXC6hYErZuMAXJH7vmFMQhnethBbq4",
  "key2": "3RDUFAzQZahxhbveYRHNTBGVcrf3ryEusBzQyLZ7ryLxfQtdpBNJ8zLUYiEZk5xPXjneBWjLcPfEH9VXTAWSnqWr",
  "key3": "9xyGJqci9YweG2vwhvr7FPE55RbdcK3K14vovWjkZbAndxzJqUDzK2ZQPCurQUuG3MtvTCSdDMypuNgy7971rTr",
  "key4": "5z6gAtiKbF5JSwTC3L2ztkyhwPKbRDxfztPUtLfCgBmERTHCrnxRXr9QMZHSSXnmNnExdjp5d4HyjXUhy8t9QtHB",
  "key5": "4ZaQfQzo2Ehjq6LEY3dchK4ndBw6yDPFJaP61p5w63uzfgCUMPJJvbjmk9kek8RW6pswE1VjdX358q9m9rjVmVJz",
  "key6": "1fqiZhPsJYFZovkhbdYpjpm78QGT64cC4ihZrSkN3Vv9syXEXnSSnEeqqbMTKuyR93ViCJtwtunQwd3trvfhEsN",
  "key7": "5fDdr2EUwTmaKV9Z5E7AbYukp2PqVWRJKAicmqRT6WQXs52ETnM2jgZkMgSxw6kXjPcm7amzCAJ6UFGTcN4Z3NvV",
  "key8": "3xPPfndfN6CC6oDijWNxEZ4mXUpFDJ85ushaCkSeDbeg9789bpb6ADa5odFx65hsESPftC93NQuNbbJvu8UnUq9B",
  "key9": "4igYchwppcZjv4c7ampoEV3D1QkcapkFL5JrnSQK1WCqtVB82ihYB1FBKzp75HobLQunfwHjHBFXdi95XnSjrcEU",
  "key10": "5NiLkiArwjbAqqkYUKGMoooxbcb6MFfAhfj4byfVWQicPHbPDHpruYBzM1ovcvL7fVJUK8f8qpL6kMtm143RKvxm",
  "key11": "43JFNzsHDXmCqh9HwfRefBeXYx9tHiihEKAQAFqJhPNKdccrw1E9yrFgzc3kMfY7LJ13342XRaaC9ygdz8rmaSi5",
  "key12": "4vzzvgXAgriGWgbawPA7VNnGvVw5zXPNJf6YCCzqRAbwLhzjFoGbQCkkW8kivbRKDdZQtPPYcKg8BEzu9QoPXoew",
  "key13": "4rAy71hyeHsJp17vQsyKKcBHxfBmBMMyZp5S1VZUsFi2ZSNyfuXAdf4e8aUMWPy4Nreamd2sgEMY5xL6Yf7FirDi",
  "key14": "2eR63eWTi7GeaGS2LNzxW9fBV15RkeGsBKXCncY8DtM6fpBcErQsM4pPqbyiNJQDWQhgLGUpHF2qpTF4TCogUk19",
  "key15": "2yimxoiv2WdGiQMcY5KSAHD1Ei68zSJa6wtA4GTi8h6Grnu79M3zPuVLXBtWy1mUHgm3rbEtcdCzCJDqLQRCzzpq",
  "key16": "4NeydJNtjz29vwm6kLFQ6eY9z5dsRJLnRccNvFQY99ihezNVgv4cbRpZpigHfcJkfeiWWdMCMvWX697DefJeurYa",
  "key17": "5kWCNB71HCmnfKDKTjDJxGGdvDGU6mQ64vUiSecsVZX9hSb2LTNzSoB9iTajQ2oRqX3KQLyUDCabkjVN4REhQW4w",
  "key18": "5xWrMWDqkUb5wJLzeVT2ZdbAYvxex58Pijnp46Y6y96W6zdtUMWfRaJkVi1YGdNCgPXUwCbAt11f5QTvGduLgvhX",
  "key19": "r27nMtboTzmqvJX2usCXRrkJgoTbiHp3udTWLdK5ikuFa2ktBpYFkCJCv29HWdYsWi7R3isXWwa6v36xE4sGdGt",
  "key20": "5yuDYomauhCrVdWJmTBzTasZEp8UX83ALomVxnHX6HGnCG1dM3GoVGjcrj9G21mhnb1C4YVz56QB6QixpmBpy1n7",
  "key21": "dZG5LcT6PeFGs5nxzmF4FkvyRDp9nxfRrmrGc4yhnSJKbqbBtXMG9mENK6o17Ta2ZeLa3V7yYcw7Lqz5wCGRSXJ",
  "key22": "5oJ4TegYVhoc6esfBuokDJSXM1fbcUUB3jzDVvG46hXag3Wrbe7hNAFUffafrPBb8QCztBB6SKTiuVQ5p4DH4byx",
  "key23": "TJr2Kq5vGcuKm49w1BSSe8gBaKQtSVgowPzavQ9CdBbWkJB6BmRz2LSPY3swZmgmxEdx5cQ95Xw8DF2epHWhwgX",
  "key24": "5zu7FZnWHw3yczhHcaCAomsg6X9oEkPcsN9oYW9WxQuY9cMNdTY13exKLchyseFuLdwvUPBYLud5bJvyPmnbgXYq",
  "key25": "4VNR6mbLGPRzQsFYvgnGskkTB1tWreGmJ9BpK3TLtkHaenoCtevh2hLX9RmgnnYtPDwLbsJqpW7aQmRUDPHgDhif",
  "key26": "3ghGUShXivEJ83jUHqLh1R9NFrzmktpqW8JpcC6uwAokqmQWBD6cTEZYgQLgCCdCLidtoimWZkvWRyZqG7BT6bh2",
  "key27": "2rwKfBr6HidygtRi8wHcXJM7yi1SDyZGfYZ5c2YkxdeBU5wyJxHDA9Sequ3iJWDugCZbM7uJX14UyQoepnnQF8Yf",
  "key28": "4uS4yC1fQJfsi65DzY3T66CyR4dz59mpKfPW1QgreLpYv4vfTcR6gZJgDAnNCBbc94peTZauDjM2bWf8QrB8RURP",
  "key29": "2Uqzca45vtzUms4L5M5yPhNqfrGGF3hZU41CKL81m5Sca3pD36AkzZVbgREYeKzAr6VVjq4yNAVTSUTDLs1NuNF3",
  "key30": "4QvdhExBnDzXu53Uh5cpq1AXBKJt45TUGDVW3qJHTp1VJknaZkdSnhfPicuBVX7vwuuQARnr3Q8iVxrGptHZvW9F",
  "key31": "5WnSLpySE4iMACBd8XkDfxXEhPEbj1KhGjGJ2asLegKhkGyDA6nLUrbDuMUazPMvN3ZYHqa3BDTCj8chxiYYHpaK",
  "key32": "KScmqw6G19mLKWAdPE8hNcTocggEEpsPvG2Jxzn6zs3JuKiw4mxnznEdN3FgJQEVtewT2zKET7WutUQexNURJkJ",
  "key33": "2RtGe62QasMuZtrbRSEa1Cx1hcNPHN1b14KaZbS797A61ia4VCWmNMczyRQjyg3DMcCFtDVRjXPhDnN3LtesCQWr",
  "key34": "3yUL5RuSuu1yxg7swSRtz2GCH119JhZcA8GnBGDXtQ8Lfdf8YkMGA27Ee1Wv8Mk8eQs7jLL5EQCoGS1BaVwBTcjn",
  "key35": "53GuVPw5sYiZWDma7NGMKrQvpy55mpeVfebxdvGu2TvXaf4RYQw2NaPBao1C5iggi1g9YFt82zD9EPa8JfHCzxwS",
  "key36": "347cmVuBRpsMMxKkqvogWmAQj2ByKxDjkJJAYsXGL1UTESnRLQHhjWUR2MvVYT9Th52eN3HajvnrbB4WwnvHJRDm",
  "key37": "2SJZzAi2TEL4hYxM9ReNsjqEHDjpDisVNpYnC2HnYNgm9rxqdVSvyYGrsKSoMDBcpKhGWU3sRyRTA6QcTUDbJJ16",
  "key38": "2MfSBbFBJSouWteELZSJXWB7dcoSVoSpJX6RJKw19NMNtubQ6bZmVZaSGLCWRvFAd4Yo6DcXZ4SWSQHdRxsa8Abk",
  "key39": "5Jg89UC1kcnu6SdXYkXZc6JVUq8fn1gThdBRQ2pTHNGZZrDRchbQnoodFQZpYik3p49BM1qLc6tEbhJvMjBHDhai",
  "key40": "3UDYLdfrxQHPBbU3ASMiRB4nVhERM6GkwKj59Zvbevt4sKRt5QCmwuXT5a6eyizJKQyhZpw5yeqmkRmU7YDP8cVx",
  "key41": "3oYWkBPMgnbojMZC7BCcM2mvVBk8fKH2Pq6nT2hBG7hGwd4kmaZLTNPzgEX5uEeg1Y5pDRefaFYD22mkahAn87Kq",
  "key42": "313rHmx4HRewEXTRPdopa3Fe4vz81TVvBtXVCeAunHNkcaSHcQX2gBe9gUgKT1aZoT78xWA41PK9LeecqpCrv6XY",
  "key43": "2uTcYs3yCg9oEqF9Qh3J863iA9Hwoko6FBvnyD9CeK9duR7WQCicLpq4gjKLfMP3uUZ3hFeYfdAwukmhMMZQvWp7",
  "key44": "kg4bXYNkNLhcPLcygXFCXSFXiUe19cuwf5BdgTehZ2bFUvsP2qaN4TixqE2Hqt5mWc71cEVGEZEqZZ81imQHLkY"
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
