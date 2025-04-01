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
    "tGP17HjSUSNBdcpC9WKjHkBVvkyrYGB1xdWQ9YfsJ5Hq7UKDuQmUwx8vkk3SWYEE9BjBc5f7GzqjkdNv7EZQzF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qmac3qG6YYxjAcCi69T3G8AZCswT3UXnb1guyCXnVFoZ7UoDdiXLMeVrff2vg9pouvZpuWo6T76fx1gLu5b7re8",
  "key1": "5u8X1B4fYaNqfd3nUt1v9WyJ54Tzpb2MyAGztntJT4zreLUWx8L6kdaETWPtcL7jxPbxiW4BaDXCcBXaCS6SMwvX",
  "key2": "5TkQU15LmXTHXoXbfwGADeArRBMtKkNG8W46DNWbvPFYxvw6MVMTnwnsVsGg3L6zrBKtqfPL7rtS4VfDg6mEoVfp",
  "key3": "2uNStDAmTo2ZctSaCE7YXCJ7KzhVzwH1ZXSz69krtfkqPW2EzQfX6B1hPi8NPsyTqTnQzGKyn4A3gFy3Q3RE1Pdr",
  "key4": "PdJC8gFTjtkhhtxTKvYPfmBCc7WnkooRhKjWeQmQ5ZcwpbRai7btRnJzCj5P46aiZUMMB4t86qVeib978mh6X4a",
  "key5": "4q6bEvuKkPFDrJ6wm4MdhFHZnTDJYK4LiUdZTuDmW7AQwdFMKxNNVsm4dPSBqqSxwBQwftE8PxeG6REtbmQoAHG4",
  "key6": "5kfnSgfQBidZzyqQmF7qApDbMXyFPVyxWVAtE8cCMUi8DvaXRxsy1MydwW37YuCD9vXH25sXefULv82USn1HRPoG",
  "key7": "4LFpwET9yT1neV8WsF7V9LvAhb3aqUP7AKFKMPLNQYwmTQuGk8c1v6fQz1VL5nnoGmfETAciUBwnX5zgkEMx4ULu",
  "key8": "3Fgsk8k3d6CPNaJ2aQcvZaJqpXb7SdJv4uBRNhjFxAdHJsLxWYsFtaqHGf7qj7eEaGjtKagF99X2tzqTdtgoETeF",
  "key9": "2k6ENZ2PEgYCCybUQ7XZ8ZD4X5hVewPT6SFRVjpYUXhfczauCJY3duYe9viD3wJFc3RKuuVCiWJrrTqbiBNeSPQa",
  "key10": "4z5nNqysuEkwQFEUTiAmEnA7FiRMNvbCH4uVG3Wnm5x1GQ4zb3BSVq1Nse7ZGSQ1YPfM5QwbpfEtH9S7cKN7i8RL",
  "key11": "2PaSEvX3QUSZKox69RbjV7WS9rVp9P1wiKQi76mWYFyomtkdpeqRyLTzYYgXSctNdHD7VBYsxCfSmajzr1PGXH27",
  "key12": "3qxrhUiwPWf71YLUQfpx45zQ3mTm4eSXnFJd3FifaMKqucbvYcam3NY4SzRRHKKjkQ8LTXXLVUwq79EAXy3Tw9G4",
  "key13": "4bbVN5CsaifSVkVkJCYqHKMRQbufufC7w39kYf45fVyaKx2y6wXeiyDNeRokNMrHedkmF1ox5c5roQ785BuYVTMc",
  "key14": "333THR4nm7wmNpjFB69QAmxrbU4TtMB8hSrAcQXHxCMoUi1gW4hk4894Z3q3rhc87rr1VWiUqM319vzfjtuwfPeq",
  "key15": "4hTYXw9pbQdYGi9aDKTMSum54phCQKzakgeCCzusS7Y87Kjt22Wym7TEgP2gqmrs7n3cbZ95iYyGSPZof6YhtD5F",
  "key16": "3MRv22StzKKeECZ5fwLkCm5iETDePFBBtmDWfjx8TiDtcL1oFh5hLZimuniQSpSvFuP8tPVjxHXNPjFAD53Bt3Ch",
  "key17": "2TdFfuSjYubmQqub99TKVFzemcJAMYLu2K3Jwecr4e9QmQvLfRVq19Jg1CuPzSHWZT6aNuGZMigDZcUHsJodg8jE",
  "key18": "5A5bmsecjc9HjJGapyHdJKPJR3AQ8Vp9MDrrjJSAQayHQGjD3PNGHjsZUHwqy3C7Q3xpbseigGmiB4YiXVk2fZV5",
  "key19": "b6aUecsCV2Kpo1LeQMEyjJBVoPYF1Kpvmfe4UEqEr8KxYCt9iR4KgxDx5Yd1xi9gVGVzLthFP3acpXKVQ4dhX1f",
  "key20": "3P6SaPPoYGZ4bWxURiyxuJiPcwVp7B5eRin4KYMYfFf1fCRFv636RXYWCp6uajARAUQNhAF5digpXYnmcsDtRsfU",
  "key21": "2phbjUm3cLj3yepUBGbkoiaNmnfuh2A17d4dsdQkdvoKU1v7cM4JzzAxPdAfdggrQP8EjivAv719Uhx3P2fSEmhb",
  "key22": "2Xb9vejF1UxDKYdAS9wbrvwSHXNztyBiT2WSZmDeDBTtEUTgSGc5y8UZ2wH2AitQ1jQk8Cqo7K2qoQJsQxWZWf42",
  "key23": "2yd1kSYr9x6WoTtCUMqoxrsciUszMYfZsL7src6EyvYYrWWUa2S1DfuRhX1myH6MoMXwKoNRq4ygVguPpbjwHc7E",
  "key24": "5rCCQJETjjxMqm5anwGWDdNdW6pGaPdSRtG4qxcynq3qHANuxAHtpnnZiTWSaLCbE8axBRZXoqfSYFiF4pz2cnfm",
  "key25": "4HGP9SNzBQsJvsZFEsNKHgVYUF1T2GRgGtou9vkW7qvecZcZAhh3S6byqGjpiBv6nLR8TcQFZzWadvYqzaCbMnJd",
  "key26": "23StJgSgPueWN6P2d1GrwXFZ19k8GVFhoKDtP4RE1pVvsJtcQM3eEyEaHmnwofgNReXqV9Vn3U8VAJj7Zx5XnhaF",
  "key27": "4s6bDNJq254dibDkvtc1589YPKqcaXbGwyCqdfYqibboZchwtFev4bpTAcA1WXZziXghFroDJJ4ENfuZXKYQpJgY",
  "key28": "21gLqTJsza7GTuAqePrttyDjorPzenC89tB4VF4CBayE3YPdLajXwjkrcLf9AP8wwAo5w9ZUTZw82nojo8UWZRig",
  "key29": "56RZ1DFScijPipQb9N6biXzAWQx7j9F7vQhEXMhbpLdiY9UUoGLeJ1pUnEL9VHWxckDpbPq7r8a7WVt1ETVd9vQG",
  "key30": "37ZiHjACzJ2JEiP5cJpKoVMZjJ3CDGBtW5JWfcprsHjovd3Bp2w2kaX8u9QiLd3ph7J3iz6ocNEfqn1xFExgwpcF",
  "key31": "676XNKc4uU8FBiN92TyNAqrTeHLHvdVk182rkfHsWNBsUeezG6D2B39pPQig3cKMzGvAsHqSBd2G1P7HwUWk3tXo",
  "key32": "5LwLwjwxGj71khoWtvB6CaEGjSVHAhcPveHFottkVo15245rXEu4qeeD1XdaWRtRCLc1wrPuJzKwkW6EGC79uP2N",
  "key33": "MeKoG8wt92fFssyQujbNJnjCZV9pKv9S4ghNuaoS6A3z6nHkTs5XpyvuiXGyhC5irR3aAiVUxAAyhcZRF5xS8XT",
  "key34": "2dA7wQaE7StLfKKq8FtzT6HBxK4p2Dg5Y1BGpdcyNNTRCw36EygJ85XkVt99SUj9HPa3a8MoPG7HBK9bqhoXNw6s",
  "key35": "65kNjdcYkAtmfjbTrRqp1hbmjcRV85mNjzUrTPRY7bJpGD4DgYRyUqBEZrz7GQ6PN5b8yPURCUG4A6t5GDNwiMBe",
  "key36": "48xXnh9KCGpXungVLMKSrErjuQeKgcrcuNBxJ22TtXSwC2KGjgQFGqMbDNNGF9Y7WCP5KfQSd46WJfgCPSbwzPFj",
  "key37": "3uGPSfsaN1QCUaMJMs2cyDEFPCuxjiyVDiUZZ737NsWRyFHkJKwtQMLBDiYfrbfKLfnDgEL4frkcxKiA2P3rRFTX",
  "key38": "2oAehLqfSg1GWJM4SZXkw7Ds8FgkcEA1NmZzizYZ8A4ewWjWrXbUr91U78uCxd3fmCZJamZGnxhTfKXtCbbXdjAU",
  "key39": "5sGdNkWD79pR54ayNSynu2opNgb5foXqQh4uR5ZwdURDWBM6hoNi8i1P9gygzDtnffkZe36xJ16RzU51StPdatDt",
  "key40": "4AD9zMEvbs7qeBLyg7GbQ52QF3mBoL38GabZxEb1iQGkcYxTUXdM53T3uv3fTpMso2ZV5Ait66YKowGRkjyJmhTX",
  "key41": "2cUxAGq2Lwt8u2RK2sMfXdYLDhTsnhkSfjJ4sJkUWLnpkFqF95BaqphJC5NVRAKo88xnMxMzve3ruL9nE3RPKiQG",
  "key42": "5DWBapypoVB5mWdqssWk5wWD4B37sXjVzXyj6CbzV3E5gKEzwBpmt1Gi8QStWhAKFaNQ3sEbdL7UyXxpP91rYWZ",
  "key43": "LUajZzopm9oXuGJXtc3aQEorKEda46VPCagnpGb1UjmFff1BonmaibsqDAWdYRsXLHTPC8MNyjCS1Xw5V79kkjy",
  "key44": "Bo22EUXXBFdMy8XUYKNPVKsZ6P5iQhyyHMw3dLkeUCNidF6muDP7F3b9XqMu9n3vWc56efpaR4gNwBdpvatkam2",
  "key45": "3pQd2aRR9bUaKFbkvo2Uou4z4HLrWCeFsDaEvACtE4nUrKzGzqDkbki8RhutE9W5gSMxrbFeTaNhrNqnzTdwxTWf",
  "key46": "4BbxTTn1LQg5CKNPsJMAt9GA927CmFnKFE8SaLy2Q5TLxfAoY7YFLnQ44gLsTVapVYoPyYoYEEP4uCR5vQQ4Ae42"
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
