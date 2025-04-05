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
    "hkPsRBVr5AwRfL9dNKaW796Z6gJwEuPd8r4Ss51bizjAFphKhD78BjFCFSeKbuJ7Rjffrwy9SxRuWTi9hwnj5fF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXt4rsXVGAF4SNv8rZ3VdyMXqzLKmGdBGPngYbvqRdvtr82DWdEQYv4sejJchBRxZihGqWUDxQ9tAUR5KvzH2UG",
  "key1": "4RQq8f5jWU1Fg4QJhRX3aP2k3FMfNTn7i4TudVVEmS8W1MxVBKRn866xDwSKqYW6dDoe2hayK6rdvp6mHAU1G16E",
  "key2": "3i2i5ffVv5aB6zHUfqVbAJGc6aMqNwdgrqF65Fdv3ftRoCbeUPJm7RSgEaDFsC2d1oTLoFhx2XPSTn5ZFTyPi7fw",
  "key3": "2yRwyPpsVZLZotXoazwAzCF8dYgR5GkvXdsqk26Vze1sL78evvFytXjCqh7JmFY8YxeStArwLHzK1Zw9BrPjHj3Z",
  "key4": "3zETBEeUcz2q9BxkksrztussJeXsuXBybvyzBFwfYBho2wsj1P9vArQwXKACAht9xwMaMt88BgGvBAAcGks5tYLs",
  "key5": "3oJcNqCVjRXcVxnbs4WWH3BznBCCdRQwHS5WiRmyAj2Eia9QGCUNAmEKDAyrxJFQatqaAPtzTghXz3TMnEGuRqBD",
  "key6": "24WM4BiZxxwNtKqbhSt2jrhB7ta5vcN2r6xCN4BEeSMLchSAtgpL8L7r8cjSNRjurnCLHiFhXarAP2akJiZXVkFA",
  "key7": "2cg5TavsWxGFFBRXm2BbNdMHpg5yZ4jF8YQ76EmgeftutLcHS7E9ZJHQphhZ8XjSH8AkzSNo8ouHoUqD8RF88Ts4",
  "key8": "LzPMiWkk4thahY1h1pBYzmo4Rz5mXA4e9b23fizAZn8dwNtbh2Diz2uFh92NXBgisSeNfA6kfHHCVvLCGemUCEi",
  "key9": "5gkpT35k9uDQbWYm5X3tedb3LEtKG4ZfVkzvwGjcjBPCMLhjTVDcYqN3snBegAyMqWv3yS2NckP44XMGbYTTZM6G",
  "key10": "5aGSyKH53RRbqkaUzyx9jimmyikYKqYmMzJTfPNYNFw7dsXU8sWAes1dcAQiF18SRUgozFUYqCYJdTGNew14zWbS",
  "key11": "59J4BUUgnXVZ3NdnDjZyQqL38Nh4VQX2WFMR5Ly5xW27LxAfDjj19XkPEguvhGPC9PG5FWsi5xeF89op4XeaxUjL",
  "key12": "2RkZjCjsaBopnepNesGYfcjzPfAyPQGc9Red5EYjtoZ2LEZ3m6XiX1vgX37RfCfumRKLoEmGTiY5RRZAP4gvKoUL",
  "key13": "5sTfwhkmHCVfu6aBGQCXsi2E3fhppwmzL7Qy9SVPSK5G8Qr6X6TLg33R1KwAWpbG1a8YNb5nTgBN7pwnVYarmyX2",
  "key14": "2o4VP16FYNJL6s7ZPufz5BWZu6G6BreGWF3sa5irWmgBomMAkZA9GhvbtfTKrUQp9LGq87HEJ794DT12JYXSgSTC",
  "key15": "3nfmgrR6S275iMQw6XabAJ3Cmxtz2Tv8vbJ3e4aUpCoJkvB8JhRiGk1h7XQedNextoSLJTaX39iujG9EJdHMaNiH",
  "key16": "3Eb2fWqL2N818yVR8zSnyRnUavTBhUHbm4mawFCydxoVzQ3mpdUj9NugyzVcvPQKQguqp3bkY4NXGRMCvHZXpbY4",
  "key17": "2R1s9JrKkaoZeQVbHVX7vDiHuvpra9FkWNmESfmxE6pR3ef5tYyLZNSSp2utuDGJmbheUgxYYZCuh7KeU8L4bwwv",
  "key18": "3T6aeWeD6RvxY6VkPMvkEG4jkZx5BGN5JtPavVvKS4QTRQPCq4rCFYuCWavtsTv2KcnyKRvjAWBTouzGHXSiTuZr",
  "key19": "5JQBp8dgVYQKBdHzoViLmMm9FWwKDfBvBmQUM3J7N7ZF9yTbWwPUAg9hBbijhvcsRSCZiyVadorGR9E9qu7YEjbm",
  "key20": "6zrDmi92aBemAFQ7UQfhqSYsL2ugg64BW13BJRhMjnGBaAi7pmeanBhJZAZdodFdDA8CTrzn5AoKFzKiyjQHg2d",
  "key21": "28c3M5Y4Wnw3msQ3GUoyX6t1hWuJoV3qg1i7NVXdsho4LsMi61pFuwo2HFUU6XXJWUqV77t5cSk8Fi7DiVDd2Fge",
  "key22": "5agoonk7kznaXWnp7phdQGCFjzhGHtMGpppUyTmZvmRh9SHMCtyR3sFudXbEypXT2naqZkvUWbbgrpoKqByueCxg",
  "key23": "5bciEP3mRDRFMT1cX9brgK6pEfRUkeNfvPmhSFtu3CE58U7E6Q3XKDmnRoksmH9gDmz28UeFVkP1dJ88qZEUJUWL",
  "key24": "3NfzmTQQhau1KRz76cT8APrzBQmkisGXqpN4qHBZ79ZgD4UZzWJ3SXxj2hoNa6c2ms4z3ZDFUb7aGy3Lecx4PZRy",
  "key25": "5M9366GqkHqUoDtQDUeFgayTVdRsfjAEbjUDjXFCTDpiEuh8XGnMnXQqHFG41U9Kq2Tj329MZgVQRtnx8eouz4Ns",
  "key26": "3VCHUzys8YNiMVKawgfpNAjBr6Shr9GmjnYkmGAtnGP8DjC8WbJMEByjyZzGQcfSA9sCge7JpxzF5XkwVP1jFHCB",
  "key27": "24gUax1vEB8BXo7FFdKRrn3WN65zrGVKu3iky6EGAMjq9VzZSQRafVtGCdbvL6PSVF7MbY6eJDeVADQfh79YMSLt",
  "key28": "529SHgUhZ6g6RhospWRAr3id1YK2rH4AMnYKcHGDjokmPkH4vqwnXAtwhzEQDWZYcX9viyDcuevpHgfVzJJVwKwc",
  "key29": "3KyNrvNBg1poBzxmmxhnZHDdTuYVMapAiHhwmAGUZoWPv48QayzjdBUmoFRpwJAdJxPivBVTUFkmuA1Cvuo3FLQV",
  "key30": "5MT8J4wJpudmTWqJvKgaJ8yjzwarJ4GAF1zowo27ZfQJahtT5fCtf1dtnrsTF1gr8tefwvG3iVsfn7BR6546E7eJ",
  "key31": "2HyroRqijLG2jKPRk5zdCk7Ri2YQK5TkNPWFETwmMrKqpZm2Aoy81mRyPnUutGHrk9ZGMVwwHEXwZzphP29iuskV",
  "key32": "M2KpRgbV9Gmqu2X17JJxtRsT1EMJCTFnhaBLjX7e5yXu9bKsoJ4i3H6iDCja9RYtBVrxdot9ePGnGJmpHngDFSz",
  "key33": "DTHwXGFPYf4QxUupVjJBsfpBWXjLeYW3jY9tK8CtqKTR5aAeJNErWBhbjmnTEYvWyaiFLNCCGn9AjgVeRdUuP49",
  "key34": "4ewMWab7r1rxR9KDG92B1Gup5HDuUmWzY7m3XrHGgAZCt5XvZ2qnvL6x5MJmoDFccrHjdvKTsEKwpvPs6ZtjESzy",
  "key35": "4Wj7n8XX7UqQeF7AKjkwbfvqR5UscyLFqkgUZ12bRvkb6YkfBvoTwT7MNiJBJj5TdTLJg75erX1g8hKrkcnJW7EN",
  "key36": "2FDMceqsdVB2G8hKQrysg4Z8FecHzbdbaYQ4psABKTsPyvWMPjrDRvyhYhPnZzcCQYaUZecuNCVicEE2yyX1kXoV",
  "key37": "41ppwsnpVhKu7VGTMAMtqHRn8iJXWsxMa9oc4pjxgpkiNGSmEYMX8m6e7ooaDSNzY9mi3F3f6ePPPdg1KHNcAwGM",
  "key38": "43Pz57gy6iDLstS1BJnN7ntUBRbCYUtuDoUp8kYGJTK8z5MLxLuvVCFpYr95qMUpKHJ4CsSi5HGn9PBqGhux2V6d",
  "key39": "5P3X1QJ5LU9dZDzUtqbVrc2FEN9XHno9TZWAmszUVauu8gDFGaRc1dAsHhQLD93zLe4P6PsmghkVFioLL12Pcw1V",
  "key40": "5toofcbEBUUVP5ggdeHk48UtzuAz7eVQWLJVZ4ckkdxdW42nRkTndyWDYa5jry8EEmPWGuudetAaBhRdemwYFqtX",
  "key41": "3x4baUSMsWUEygQsEtkjQEVWmrBaMS4Rxxm4yeUzdLoeecbfnKZysRjW5EJKUHsXsWzqgE2geTSBZCzs7KENsLQz",
  "key42": "4ULFRXJYiq3xfKPJZKY9YVbB4vj6Sg3ZbwQFqFyYGdGqXksS2ySdx32DJytu4qqLNrqG3FCTvMB7MrBGsg8THakv",
  "key43": "5SkbLggHAQazyoreD7hBpy8pxiSh5ef7X571V8dju1vVNMhH87Fq1hTt8N3wshBpbhzQy1LHfxriTSZHqPcMh9eU",
  "key44": "2Bq9Rzsg5T3b24Kjo9NNxSPq4JS2L6DKE9dKLRS4J6VnHYFsUgrMMPPWchndDtftFsSm7re38U3kyufv5wFNQuY2",
  "key45": "3AbVwQbCUPyYYXdMw4PhdtHpzdM15k6tCkzCp2AojqousgodZJcy39LdEF5GufKqyjyDcWeipuHjzqYmXes1fVcu",
  "key46": "5D9fbsC8MJaUg4Jd2aHCAkdfMdPzb5NpuxbVMhBSqoxD7xpV16gA2Edzv1G5agAeWvXHbg3x5ipSw7H1cYfzgvCm"
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
