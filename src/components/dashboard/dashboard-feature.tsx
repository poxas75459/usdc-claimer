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
    "492VdxgM8S8cbLAK2QcwBrU6ybp32pU8rV1CCrFM8u65EARMb6Ei9hDCcC5L8PLcXkPxM8sdzW8zKi4j8oBCB2Lp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55XUVyur7joDMgbkdhp3RaVQix4MVJeDzgCYzYVJck4Tfp33pzi6GKhtnx7xU4cjDCWKNgaYndLtBkowcMQeHfgr",
  "key1": "4Ln34VzNZSERJB9ydxhfYheHiVdxikXwAyYYXShSwXcwuRg3kHuUGfgmsTNoazdoRbcVkwXKX64ToBKUDg4suDpz",
  "key2": "5QC2PzanXgmYQHVKoXoY42Pk55cCVetJeCiNJZSURtXGGNCWZbqP7cRpKVKHc9Mm6ZFVZqFd2RTp98Z8drZcBX6x",
  "key3": "4HtPJLiZ79fzzyFbqf9z9zSKyCA9M1N4Au4xSdrD61QCv4zctWMy3gfn6Cic5Niy6VHdLHbS67GDLxzA4XXgJyg3",
  "key4": "29SiJUDGcqoZnWpJbtvQkt5uyAU15PzpZipe49VQHpmCqtBZ9T46KQoo7HDpm6cVDPuAonTN2heboXweC6aanmus",
  "key5": "zxgJReg4ARfWhDVQZJREjNNGTVS1sLbUgPRTULCmD1Jr43PfnkrzWvJ5KNaGiFzKDEjRvxDSjFnuqL4XyYi7PJS",
  "key6": "2BKvbGjRQk3UWwK9sqNnEhvHSMPXzKetjkF3S2KWexWN8KBchzFKQXNCZibW36G4kRCYiDKWwJtfWBAxaNudYto8",
  "key7": "2cmRWXfdmYQ3vWCvuEydkBhAd43zUFpobjy7AcqA92w8vq8ox3ovfmaP6mzgSWQKfXUmbdw9KFEyDKPoURzMuLqi",
  "key8": "QQY3zWiz76JjUdM54RrvrMATa5HLEbRYi9oFm8DjSr1gvj4HQo9e2qVV4ZMLqUwRDkg5tpJKJ8v7H1ypZBNG8tw",
  "key9": "3Ks6eUFkj7Mk4gAyThW3Lu77XWuhp8eqEmRYRzniEaz3pYW6C4B7EzQrCKygFg4Eo7Z3zdFQaL6G3LG5PbVj3vyt",
  "key10": "hhsFKpYBMHgyejFmWfCkTfmEQXxHQUtU67yMXoJ12HkQxvwAj7ZByuQjsWAbZhHKbAoStmXJgYPGgbUAupbCh2d",
  "key11": "3Tu8XGUb397A3fpDYACimKpFtZcTaESDQUY9yy4gsSdzGQcFqmpNygJeSQmGXXzaxF7B6Xz2D8XLgWni3eiTD1uY",
  "key12": "3RZqo3ageFFjK4129R6Z8o5BWcoAvsFcDS1a4DUggGV9uqpvrvfinwZFXAuQxjyjR2w9GUhkby73EXY5x2kpQeaN",
  "key13": "2QpvCGpdLb3BSYa1672EB6tYNsJj6AXsgw8KwKRPHiKMqCeZTDAxQsCZuJaELU1dtxykKNgKm2Pn9CTeEhkvFWws",
  "key14": "5HEUniUoQJdstadJT8kLFck4PhYLHd8cuPRVogM3cNLKZbSKMfroT8CPGBnqU59HqkKtUmuGAa6JGLDkk49zu4Wc",
  "key15": "ifoe27yWFWn8epTFyXN1nkDFs8XpC7q3SmngiZS6VsirrUBNSWwPooM62vmhVHvLug5dh7d4PGdaWyy32xKhwRR",
  "key16": "3MGvnGjEdUBxo9XtPpZz9XkNS2fRzYEChbRXd7vRhCxDcvCGAwg2VdfKKZKKxqHGFoToEqr7BEERvC22SBqVvQ2v",
  "key17": "4YSMVFR9Q1eMXHTLeyvseDDHZ5g2RroAedJR9Acw2rKyP9vMqXL3RxCZkaVfzUBEFHtARhQATPHPEZv22f2FNugC",
  "key18": "3xE3Uf33PwtSDQhNE1Ru3UbPkW8FMUwChneZxKLPJ29fZRUuxszZZKs9h817akasUkFMPYokxsie6VSbursFVUer",
  "key19": "4XPgiewQind258qkv5CM2zdeQJfdH24xVrEJ4dq4ekt34KYddaYChbfm7JaWvsRAqTpayu23iiVtMUc1qMLFEJ1u",
  "key20": "5fCrhDPEQUYDp9YPT5KjMAz718Uoi8xrLJBb1KVJ3SfDEq9arMhGxN2c7BQoXQ9ArHL3Tz4gd4uDYqPxp33UmkAj",
  "key21": "3wepbrotGRMBjkQyMzZDRNrxx9jjpgUjDxW3JcnzpM66ba3uZ91KaC2Arizj2gDevSAN8YCAev9u1PwQQUNXhM6p",
  "key22": "4Hy1nqAJBio1yhtdztuYDi2rktXwjU5HDQnPtHRB9b3uVsEAWhCBvWcTYgHarpK6hXGqYF6qFzuBVm38eX5uxJ3C",
  "key23": "RSCTeVug9memJkXFX3MAhg7VUcEy3tBLu9mmwWHcsFXr9fnKKbhSkzfQed3TaEKTCD3QxBDUxsFb78WfvWTHZSv",
  "key24": "QfVvCAebrZaREVAvp651uLPfffCaXE1NsLUCKy67D97NKj2pPgrS3CH5majXSNN15irS2ueLJN1RkpSPjfQLsVS",
  "key25": "XsNmnYyXAVxyEW7Z8Ym5PM2eLktTnEGPLwVLg5bZzCKhGpjrju6TAXPnTjSwt5wqDHkjGYFeY6qrj5491aCzy4K",
  "key26": "A6YUJzxaXy1eZ9tzbRukH6QUHWjz5P8PoeCAdjUzWoqWNxsRJmEgMTxJJndmswep4UVMYiWYa7c71KxgFGgXdXW",
  "key27": "3XC2tyYZmUQ93QYUa7KoJ3KrevEE3qjncGQmRczyU1dn6oyrj1Fi2tdwwUycH1XMYkdXFqSCNJFp2tBkgxSUb7rJ",
  "key28": "4iET7BQB23eCeLsGH41KYLsy9kktYXhjSDq5DtgKMhujoy1vKETfKfuaeTyPqtEUUzJMQMSSNsNCVmNvXPQebFmq",
  "key29": "4NieN3yfvYEnWBWa2H749EwHp7rNwhBNJZvJ86NtEPBSMvbXuViobTiSYVL96FE745FuJmPewvEEg1WRQZXvoDfD",
  "key30": "29YiVZU87tE4NCqK2M1zksv8QR5M4y4MSSKuXSHNCNrxiu94XaHRKAQKRhRbPiMppeFqDZ9j8YfxBy8ENdPgH9xm",
  "key31": "2f7iYERa2EQY5HDgqeZcTq9b6D3cHXu8S62z9ZaWyUdiWd9J1VDTRMjmkke3dkGrYztYdD7TK4iaX9g8xPse8wYp",
  "key32": "4qdMKnUpyvdSmkDykXZroVnxFAwB6Kin7sLQwzAP4BbmvWQsZksZUAvrnCjudcJHgKqXNcGrm7JYWLVFjsgbnyAE",
  "key33": "3dH6wVJQ3naU4Pp6Ebsb6y25i3iF1WyfhZSKGkFNzBRrNy1uHPFErrqubdmAAUCNhKUYaN1838LbwuVdb66pSgi6",
  "key34": "66vzttCr826CvD77iHx2bTkG5Gx9eTdA3cbzBetWhpbY7oSZKLLqUWwzwnbsmpSWMM2beRB1vYSmJmbpRg7UC3LZ",
  "key35": "5GMYWXFFYrYv8Nbg2hHGNK52ZUsaLNDrjA4QhutkBSdVfj818aLHdFnYZ2NPT5nFw4VCgvkmLF5jX28wL4rtCJob",
  "key36": "2DpXzqG82qvu86ApAqKuLnNpi725u15cUGzKvoDyYmbCw3Ny9BFyvrtLDbdnDx5PCQXL7BZeC9swj7NCPx4WKT8P",
  "key37": "ufgeP5BCY8ZGEXF4uN1aeqHxyRVs9MMP2Wjfwt6uZKWQ2ma786EYFerGAPXRhdhWHrdMRAuVCq6fhF2C4g2MTPC",
  "key38": "3qLdshDimpeq6EJdjrkMhNZtieXdhnNFvAQMtjjFXKxYw922dmTj7kaARxDcX9tbVXavA4QnfEuQZTkffbSz3pLe",
  "key39": "2oCMm4bXE7B2B78ejX2ZPEaEe3eLHa9YAfszKrvgGp8ppyc5DQs2auPFuCsSgh7zveEN4yQ74gkvf4ESrrnvBTvj",
  "key40": "2qfYkLcrAr5snKUTFxEruJh7fPQLZA1woAnGjV9NaMR4Hm48DtgPERVQgCnThQSH5VKquvrUJm9tMto8rqbiAzAz",
  "key41": "2ycY2J6nnygMjeE3UTuQuoUTUKS5LXyvGDMaa7A5q992D9prJ6QW3x8h6YnYDkokJm9YqwAj8Me9u29aDahuvFdb",
  "key42": "4GRuP9KJWF9NWRwvDfQxCcW8qGL8DrYEhZEHjAeAzN2b16Le7XhbbcoC7bn1X1YqqvoaFjXS9XnYDBcKbcEffVP2",
  "key43": "2yw64uqe1Lmre3BxvFoDcPERxLopSnSSqKnBb958yUMgVuTexErA9rf71aiFAWMCKRb7LDJ6TjiVMcecLMzJFj4u",
  "key44": "3nTDBmjGCk7DHCgK6JSVaoAFiACkXNXNG52pP6BEyw6v9h1vaJz73dxeQykLdJt1zizwZ4Cxz1U831rJ7VJDe7SR",
  "key45": "2kVLnFPazVGy5idZF4RdDDpSi5L9KmzXncvsdfWQBVvTkRKYG2hVhAm6PLLWSVeDrSmCQeepd8Uv7XKuHTVX29LQ",
  "key46": "3epwckRuZXbPERekpXnz3bPdbgsJEnao6CQhTE1GL4ky41kbtxBhYxoxGJFem8gLWPGkYaPuaX4d7stzyDsKRZhv"
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
