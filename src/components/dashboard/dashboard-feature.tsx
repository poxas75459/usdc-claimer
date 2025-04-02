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
    "5cXNaMaMwrfikCwsDKWzNdwysQ6GUrLRoTR8Cffsx7h2ftJrRJSEbvWu92PkWZ98tnY11XjvEWBpMaXVnx9CtXAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vrcLCmYqKnZ9uCdab9PrDLngRmzVdDLAaXaKtrp5RAUBTuANhcyujJQBajkAZASohxPLB9vA2gV2KsnExUGzgTv",
  "key1": "29b7payhMUHW7z15JYBv4k5Dn67zjh6JdDttBg1tq9ryTJLnYw66VMQJP5XeoY9Sc9xPJf9NYmx6AruqYSpS6T9R",
  "key2": "3i9eyGhhfotwfmeTK5y9WMKs7om2xzBZACvwFcfyRypTgthB7m7VbtY83Ym6uZ65wNyADuGvHs3bMThbED1tEBPe",
  "key3": "5YVgByUr3aqbWDfaoWrTChUvesvARFaGz3ANDVD1NhX3zmHS5irCCsss1s4mfTa9XPccBPtJX78ovz3NhkDnviEa",
  "key4": "gXSxw4tBXh2xzoLyfKP4NSJd98Mx2qyK8WcT8tSGyHWqMK37bcW4KPAJ7DuM2R41rcgnaisUEECC1BRfNCRWc9V",
  "key5": "RDq3CoTj5bLdx1nnbSsEcyth7JsGs4RUYVvMJoHT6S2uNwRWMKnRWNj9oHr28xWeeDykXoVDdjo7xG6fNRJPoMJ",
  "key6": "5G6suJH56Cbh7zu1QiVyb66dHAjBQug2XaUJAhrkgM25DZebXupZ4qnvRvKjxTQ2VJUFU6e8DjDY1S8okg3wxbG8",
  "key7": "5eADQx26k8WJFuevYcPYruDMqp7V44CSmoZpwas5vqq1sZ3RY2yMmjEoKh4hwZyUdGdSEkdArHEmjtUboqUZvwY2",
  "key8": "5b5N3ndYm44YoZXSrZQAm91x3qo7YevTN3FqFUuWVqmNaDDAhneruY2trH4S3mEmZLjcNwnQd6NHWkky1mNgH1J",
  "key9": "3FLHozsu1TDGU4rzT128RanppzKnRePVW32Gh6xCgbNFoCPMLGM2guNgJYp2k9uZ2WqEP4yRZitgJm9g4qh49DFe",
  "key10": "5PB3hZJNyJeutae2nbVGimgTRdgGp2dDQZj9Qi7qy4utdRCBKpDGKAgUFZy73m34iF2tVEkAADvpQdcYfgJcSbfu",
  "key11": "fweT7QjyJWaQDTnjAhUjTunBYoQSzv891huqzcFhPhBfCAgUDpuazqv2GHBJfFWmDcDPJQwcTzBq9vNJApst2Cj",
  "key12": "4kqQccxW7cJu2WvMESse7zRVMtPFkDDonGCxZsmG7kmfAEiG5edWitWvqhp9r6ARMxsBKXm4HHSuKkNLK2BV81us",
  "key13": "4eFhvMSyExUzfDn6ZQAdGKEgNEVAq5qimD1t7hTMWSTKUKPeUxGpHdthJSmxc52GcF49bfCZHrPnnamUZbAQJy4q",
  "key14": "5imcdUsMq3cJc6ch135SqCzAD8TEAFZmL3BqDCWmwZdd24tmfqqLbwxzuM5rVwrEgPSA8EStYTKSVo6SiYNFZNrd",
  "key15": "2PGPETKA1j9rvJvJfxZeo5ef9Fhjgdu16NEYw5rrJbNJMkDMxzBDApf1EUezbXAWvabwHgcpo1cGWfhf2dD4uBZ",
  "key16": "2RZUympcpwRskumdgJtQDM2z73Nfds5sHxjdv3QFa1fWiNVyVPyzw1eSmfXbJw3whbtJ1cTQbiaNBtupKB6H1j3a",
  "key17": "ZNinJgohhVBqShWnVrQniFX183uBhviBif6kH1mJHcAio1GE7JWcqhgozyTVjTUN6KygasXM5xN8eSe7BVebrBs",
  "key18": "2G28WTdcn1m5aT2C4GNHabu9mZCBxA2W43MMDsxD3iZY3NaCGwRnQfPdaTrzXBmdwc6345rWG9vyap1XfxRCiBRg",
  "key19": "4xXEP6Nd3iWd2neVkH1xwBej4SjpSjUqyTMzpk8pcQ3Wm1xb7yaYmQL7HjMy1oEY8KdVtDTeiBrkBfvS5hwhfiPJ",
  "key20": "PDeD6BufGe8F1ktwoRvRmger4p1YkMhHat3yHSSjZ2RMqQNwMcS4aSFb85o6ccgxYoLGHwtzNq3cSjHtAt1W6i2",
  "key21": "32v32U57s8QVkaw1KwYT14VLnfhnv8R76jwjAWy3F62kNhTNQANembmKFdBM7bcVX2KEAwfuBspkNyC9AGdTR5B4",
  "key22": "5Z9VDmNyN9ej2YEawbT3aFTZpbcTHwyuj7pE7jhEG2e1b3QSscSXjQPfuR81YMmvyCYBfTDqhzTcgX4wPWjhbQw7",
  "key23": "4XstxQKuX5meHnWrwE2urTCL2YoXUaqwFtCZGvzim9DNeWGfpVZCyVBTzig6eY2XYfoYFk7h5FnkC7mJ8YGU5YK5",
  "key24": "3QE1qmVNTpQkLhD3iD3zF2i6w1esefZ7QTTzC3o6gGBP6xtBu8MHXB6zneiyoKZsdhHjRgJefJ9DvgTtLaypuGGZ",
  "key25": "5pDtBaKrg2PT2n9wu9awRWtBq6N1Hf1UZPHfU7mbCGhWdWod1A7tP9ztaXqvGEvKyYagqGCWwkL1mxxrHyiTGTDH",
  "key26": "45K2WuYk7JRPxn9nWLx4ZvRtPo91Be7tgCrT45rDdUrUCA7gmQhDsdxjRf8NrhHC7LBsRRTt7gj2eNDDDyVqkGpu",
  "key27": "4hY1cnDrAMPvZs9rzrWGJ14zH987YyhQmHyegKnWNVbXt6U2Xus3t2r9un5fDrYFgHXDbzD8JBz1fYxRpaMMKN1u",
  "key28": "2m4EY5fkR5WXAwaYMQhMbC6cMf8PufQnEKtU3yNE6ZfXJy3nY9eTmyJn6cxHiBYKzjBZCVmQi1zWAtSnP5aYNapN",
  "key29": "4pnm9u5TiisDe4pQKieRERaUttv6UfS3eCFmG5BzkwDsmp5DcZaspUHqeziR6LQtLmC1WTXAr22zK8x3PPwMz634",
  "key30": "3WoaPyvtdnewCwaNQQB7GAbQHc2BCzVQcQfYmmYocwvSPAVDvSHF2i3aBcd81Ue2qa7LiMELpJfbfP9gdnvp2bzn",
  "key31": "4vK8JiRMc5b6pxRT25kUnCPyw1rKoB4ckwPDKmBfLS3h7h4KGbJ8yLYQReiHJa7jkvSfjavSAYwZz7u6aSWp9vfA",
  "key32": "4oGgpcvu7qu2pEeBhHRC5NkfC6QjF91xBDyiUtHWMEKVhDwm1Fnqo3qYt2egPLTjD4KrNAUwz3n3MwGDdQjkKnHu",
  "key33": "2umAfvHrMicwPgTQMiiT8H1rPzNqUSyQ9hrHS9HK3VJqrmgmtHgFFXPdhwsNQ7SknLf2w3k5jWzX2ECbAXFCkHft",
  "key34": "3WrGtZvGY5iM2pi9DakAcQgRXGe6SzWyDVL4aiwqbnp1iXbJQdFqoDACgd17DxWPFTf6u5SpwbNBN118hjPLDkpG",
  "key35": "4oRapEWZ5rH49QFGarSVgvHQbBHPP2vupSBvnn2GSGYtM7xgToxEGAYchEiLUWAQDDmGRhteuP6aVRbVgx9jHn7r",
  "key36": "44osAnXTvjEpXAJ5gGfHkUEmjzc9Wx3Xw1Tmj4ehPHYiisgmiWAnMkM27QFKURzGZPJMzkt7GekDqTN4XsWXWE6c",
  "key37": "4Y3PexswE2iYdghAzk2NteZpGZoZ3fd1CKUMnmr5xxoqwMhBNwx1cjAoPUKcpzvGEvi6B2XYfB5ZfdMdnkd5rM9D",
  "key38": "3wLLbUMtVSWz1ZSgmHrXKyvMTCyaaHjGugKxc9ZqWDUU9g3xPu8FDJanj3Ru2bp2KVqVbXGao7pphrzgqN2ESjdR",
  "key39": "5qtRxo52wgpCS8TBpA6fszEoqGBiBbyu4KHP52rsAsvyiNTrMxH6gnG9eKum1GwJHviC3nzEonU992T3iikE4qjb",
  "key40": "2A4pJqQs7hg2jMzwPE2nmRqiJk6xwnxdH4UmuES11gB5JDyNYRuj8vtxFta8H6HCh1yQHNth93a8gcTAvRDbK59j",
  "key41": "oiN6BvuSXZXzasPJDgWFNioPnt3wQrFAkFvJpNbgmPC1JQicAgLqXnSgrXgmwGJshWBwudRbKbowYv2sqeVBZgJ",
  "key42": "23aDeCDWpLBoKUbb8wnKKhUNK29rb3tWA7CWhjKc2CsezqsShV1hJsYetR3ES8JyT9DWy9kWd2ttViPbAEv6CzdT",
  "key43": "VeFKNuYwHWC7k4vhxwPxkqj4k1SHR13yHQAjBZpw9mE8uCJCK5FBRH1gLGGhcMBemj3D4JFrwAZLoBk2CGHTwTP",
  "key44": "3RgAA2AQBakkUDrw9kiybcDUvrhtEND99n3XHHzD9f1CNZGchpzSHRZpDM8n7uEymi6zp1rGfZjtgzqQm8etimK8",
  "key45": "5jtEFbTciYwFqqZibJ193pABHCBbShncR3xvTZG8kayWK6vVTtn7eReAfrSFTUPvkUixEpD4wtFa9t9KjeQD1DJV",
  "key46": "5wDYahYggrZ7vaK7WiWmbTDdeUsfRCpWwfLzJrcApML6iUKMt53LGnAZzFExitSgwRqARFVoKT5UZsUqackqYSdB",
  "key47": "3a7CzHKFC6jz3G56n9PSkfU6UK9JkVsmwSR3WyxUbiUsKU4BZtGqMt9yh4JCHroqfDkpoTaX6WM7JE32TBdDbUoL"
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
