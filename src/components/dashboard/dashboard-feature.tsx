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
    "3RK6nLEwsnoycaE9D59DSkvFNTdJ2xQRS2H1YeGqXUhtFQxxJzG9AMTQD6rnneSY9GUxkJyP7AGw2LtvgZ2JUSCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GUAUdjrZ4DXtcCtSDxU5ZioR2CjcGkrwD82Eg2vVH92c3VDSZaSh5sGG4aDUbqvsEfytQPD3SntZodrkPUSwULG",
  "key1": "66MsvUTWwdm2vb1DiGgHRGAjvkQmFHgcKGSXAbS3MhzUit13yKA6YTtLbdYHfRNzpHWo6vK7q4gApHUTYLBtqjYR",
  "key2": "4qe3o3JEzHBgCn69nEh6nTYAJXWodjJ3gCFcpKKgL2kDU1ta8Eea1Q1tPTQQj4KWKwMALhufZGMhmCa8SmTGinrA",
  "key3": "4tiEh6xTVqDpUiFyAutnCv5UpD62N5t6hiknhATD94yp4ReYKCnr4z8PPg1wEmmj1fXus52GnXBYqv5t13yYMLLW",
  "key4": "4XWmaPfZVNFuQSrQMUYhbVqoFN4hMZMUh6PCXCTWMr7aK3f5i3dJrADTWjPCaqaM8GmPABBpswnC7X8zqEJ4hp1s",
  "key5": "jN2pDT184sgoRjFJy6Un4t7W6vm8fUgebjNhDqjd3ozreqY8H36BjowZ4U3BhdrQcf87JYmJnKt8zzHjiCgbvK5",
  "key6": "2YiUwB49W41hK6sr5LTUMdXdqSm3SK1YXpQYx3AKwnhCPChvDPLYvjZFU9sg1CdwNgoguYScEVLr6B8sVT7KXNQd",
  "key7": "2ozibaK6jDCWFABewcLtsEpJYVuLJjkFW9cK7aqcuCTJK41PUBWt6x8vxrNiBbKLzttdAwqJHoMcgZCiYiJtXcw7",
  "key8": "4w9sdj26FstZPDm4CBX4KGctQd7AkSx6JDkmFxFjgyMkuXWGrWH8qR5AttdqCuSp8bGnoDakfCeRe3jbDJomv99u",
  "key9": "5Qjb9Higx8LNrRbDssvMtHSG8MhmgZjmWPYJMJZrxr9Snh9HXR2xDMP5PywG4hTefYUYZBVjLyT6jsFad3wSgjbP",
  "key10": "3CEbLEVNXRKaoLCZ7iDvyfg54w4LkUpussjeV3UkWcaJ9pF5CZprP4QMEojdQnefY45M4QoCfdFWXVMj8jDLK2TW",
  "key11": "3zDeAGHmuSZ6WtsnyrpEMN4N6MLovRX3xFF5X1GthGYnJxGAGY7vcEGWceuh3ZF3nutCxiWJFb54bzMcqdje1wLb",
  "key12": "4QhRyuT9xZ8LndhC7xHiY9CaaMh2ou2nMd7Z2GkfyQyZPNrAzqpSj9o1QESuXNLRmg6WhC3MrScW6NxfXHuZNxis",
  "key13": "5fuoJ5nrtgiH2D7oC36dgzRmEcDxwYbLySTkn1oTZr7AJmBgphizfS9KMYj8Apv7ajDBMSnGNwSVf6gjPGVbpizn",
  "key14": "PgSKr59aeuhpaZdnxRyXekniwUDD2GkiNGZf7uM5gbnNAbiE6rViBnaXJp1hoEnuAFNYBBkCV3MryBAmvusEYTT",
  "key15": "4kC4akogTouCuR5DYVP95gNrovvMSj2PfDYCGP9X6T93UThnTX5cnCPcHNM5hKyfHjY6p7PR9XkFQD8onbQCtKnf",
  "key16": "2MoSd8NP2kkUH2KQYjVZSEPbKSkMERufjgRe64aWFVLchk6smCQujd29J6UTSeAYnhrxs1jw7VXQtgEvVTJUFJkg",
  "key17": "2Eo85K5TecAzLe8EPqjtMf7DvB25trNPFhudQn4VLWXbwZsrgCG9djQPsysTJE13fkh536m1aLRrkgowxNyRjg92",
  "key18": "3PfzHDF7P1b7ARdmLsLeH1xBWYUWDKsQZSk9m1HAfFVDaEVg4xXnn77yyFRgrGFmSo314bupnDnwpzzMsPM4T5ZN",
  "key19": "39gJn49WKctkSjRqcmShPkdjNFMzdCDRUjedoreozQWQtBNtw5wWwS9GUdPzRHdPyWofXzLg1ohxTePfB3bTqFJB",
  "key20": "2S1NmPhT6cU4c6c8uMZucBTJHEedfwcBHiybinDohkcnCaUF816vuXoJLiPFkpw1JPz9LMeJdKuqzaPnjRfmvdpC",
  "key21": "itHb9BQnvAaycimzpM7EYDRUiYiCxfepfpKm7oR9CXzxjyGuv5bpUHH15cim9mR73Ncc9toWeeKyVrsz4ky6R1b",
  "key22": "USQyDdcvdbEtuR4NZZMD2DDHzjR21AuMrxE8LA3D99344S5s8G6Buc1afopVkoQtF9n6hSe3D4NoMzY9aHCu2e9",
  "key23": "5M94ZgXibjLbj17wUdg7huKsEByq1SPVDsoqEJpLkDQUp2FuowwhNPftv5PoeEqPSj6rAgjX3hLE9v7WxdqDzGyZ",
  "key24": "wvm3Xb3514RPF1pkAxHeVVHFzuNPdvpiFVQ3P8ZjzV1AuREEJb7CL42SsHX8vNjRvBP2gu1ZqHtPVxWXg2N6Adk",
  "key25": "4swUguYFMZVcASu5yV2XoetP7dkf989iCusLPr3PPi3vN7JDZgtPr1VFvSH7vkBXqAcbY41Firp8TiwJLs4Xz6N3",
  "key26": "2gNek2Yu4MEeVA65uCNrvGgtNjGFpdyejqc3ahr8NhWNREurCwxrPU1kLWdPiRGZvSzNhJoRkd1WEzj55WeRFQBf",
  "key27": "3cXtNPa4ouHdUwcDMcCwPubidRfw8fBN4MGbU8zzcEMHaJhmjY1h39dpN86yZ8WDyLBL3JveRbbpxD2BJTLC9Qhz",
  "key28": "5nK5vSHVn13FagTWxi5worcLfMgnWoovFGx7oStXFTLM6kvhNn8UTG3czfzYwzHQeQhNcTJFtpBDNBNpXgMy4R7g",
  "key29": "gEgzzWavZEcsBNNWFvPEFUsfAPjbTS63EMEJxm3RNc55LoG8a8FMZtFSso3MJBdW7gsuv6AaM28pzbR1YMMUsKK",
  "key30": "5eSdym8KKP83FsGPT3oXHyvzjXEoKoNAcPKtBSgpR47TufuSRVu7dSpJuxgkVXoZYAKgZfq8KtDW8XAGnpLu565",
  "key31": "2tfgAcPusS952mp5Y6asaQLEnqbDV5BHPJzESn8AYisf3J1u9EjGn4TxX51vKprSSMFQnnDdHqcjqgNm2jMhBmCv",
  "key32": "44NYMk39YRp9PaHwLBoH22QKGsFtNszvje3au6LhNYbetUoMrFGSe7uob6dHUpbwkqGjMtoR67Ji93fg5mLkAbPx",
  "key33": "4PpPWWsCa6wJwXNbiUqVVL3EYjGfAUNa5AiqKcrK97CnRmqL2VT5iWMYEuNTHm7TMkx15nKzb5xFN2vhD9EnjWMd",
  "key34": "5nb9gdPWSmacpVQ5knSaRE7VZ65KpCwRnvLRs9cfhSrNh99Fq4VY9rqmvcLaybx58y1sFk72xVf2zWZ3XYicvvdY",
  "key35": "5RfgdB1vVDGadWWA5AjKzofXdQtMaZ49BGM8wBN1DLZUDmsaWTc8Dw2eyasrMBrUS5JnuKUhEnreGfyTeEU5Mbew",
  "key36": "kj6wbrhbDp61YbJKSWDCBfra1iUa8q3wZLG8RwNtvUFDHrhKu3cYdJbtRAVTuk5h95BmdB9gXjHADxMVBKkz5m5",
  "key37": "uXgC8H8sKo6Mg7Aw1c6KMSBpayT1FvNLmPaBxwPwbZqpoM9FhwxyaicjK6iYfP9hbsmLRLRPGNqkdDjkpxbvken",
  "key38": "5tX1GdKLjuLzv8Jq4xAUTeqELXPdk7RYK4Efm86cXjfxJM1E3oavk1mS6R5hrJGyHM7pL622TNM7Tf9UfvT568iB",
  "key39": "5xRQ3X9Z8CrA3ua5AVV2rG9PL4TDFSNrSHRP3yMYqtHeTZDa1XiBtnt6e3H85dgGPb41iv7fRuU3MCFDQkqD1knQ",
  "key40": "2t5a6DFFcEHybcNfG48WX4MMPe2iayxZyV5wB5SQkNG49CiWR8GEJ18rNtdmhE41FNNcvHseZgqD5d6UU4x9emTD",
  "key41": "2ryzKoUwQhA7UQPnALcna7cVk8GN5hiLnemxuDaX99RVVDLzwgozzRwXgfzg2KYyjhkw8Y2q7kywNDtHB3JQE73i",
  "key42": "4MPyDqN8KgMbKYNTSz1Ba6VBMytzjf6qUfJT3tRKeSuAcPeVyqmrreG3xHtb4RGKRQzPousgF7LY8jETmf6WvGvD",
  "key43": "3hqWMHSDyAvZ9EnV3dSFHLP81n7tRTeGgFyKd8ksriW4Vf193Z2foE2jzLMYzhpPxbjEiRXnnT6KdDABx3Vcs7wa",
  "key44": "yo9DMuWzHryAt9cWM6G5D5WTUr91MKfWAyqV8VJj7ZLYQ5ECgonLCnv3muM5XvJCSaHcK9zrVCMU5V6HhbRJ4Ni",
  "key45": "45yHRpBiWkFSymdztpNvJ3znfjuxtUNKTojKHHknJyQSEzFF1aSSwjj43gkuYPXbayf9A8nDwd4y4ibMcYPn5nPx",
  "key46": "5ewCNDfTUwkggYnJQUbXvQkfbpdkBJ3N1afWynEMWCscPnU88cybnCx1tGRto7XhtZyh1how52q1EYQHf5Ytujxn",
  "key47": "32oY4GUhAmixSWTW3m77CnEUwkvaMSbWZcTPZNgNFqoiMifE9nsYEYkq33AaxczopmQqYtGUQ1SEvtQGfdWW2rtz",
  "key48": "GHh6NQhPSwEtLjRR3r1T1aW63YEZ43PcfBecu1J18nwPmKsTh8cYmrwg5uHa8mskgsa3mSZe2EMqqLaoJVS7yaw",
  "key49": "49WSkgsC3WZgMCNNzAVM6B63R3cCe4joPsVfQdvAHGYKzsxx1R7VMPqcufu6ZrHN6Z1pnK5fidDkxJUzPBSmnvpH"
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
