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
    "3cMLjzmR6jokVhhMzyg367bRxqF3Q3AeiN3Te5R16YVX2RA1SKK3QQ2erwx6S2t5fVn2HFcLqRgPGpCaWzRs9eFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K7KjFDZBax1VBCqEFzzrNtkjWeV8xCpCM54RDC5vE5w3vUX8G5jYzMSMYJUMN8pmrYgxYsuMts35zvabghvSQ3Z",
  "key1": "285Qnq1utevFmeceu7AVyQbCJPksQheDysztgGGKraDUuGcVuDC7YG4TYgYbmHKizADGh58GQEfWqYaFYYghZqEi",
  "key2": "Sp38VVqNGU8ExjZPYKqwjX77FMy2QF4RNSgCqDTLF6WXuWpcPu1bmyQkRjp8HhnG1Y1zyoQivYZMGToPuqHbTNX",
  "key3": "A6REKakBGPGci1QGp3usGFia8EPPQpFeCFon7xjv4aTELGdRbfGfwfKxcgtDRb1RjXhqbrQmmhjVT4UXJj3RUZs",
  "key4": "4y61mgDAWBJBPupyQzEZ4se8CPL86Zap3Gyw3Dcrq66NdYMFptSEUqDcWxG7uBdfxZWyE76uzyGhuGfNcvSdmFhG",
  "key5": "5SD3pvcmhT2g8xGwwQwkZAUTsfDJDsjeXqnpGHEdV5RN3wuD4dZn9NyUEXeYKZHKQwim1jbdhYrwDRsYYj7yrvPn",
  "key6": "PmDkyAd1TieLy34auZHhynP3UHATje4an1xTmJRntFc971FAq4rDw9LiNDJXmdw1rrRooJaHePngwKjZtUzaqz9",
  "key7": "4LDzwY2de8isrAcWhxHTK5RxyT8R5Vn1kcrkD6RSH4eMwqjmSSNHGqoJifa5e3suEdXXbNJGGCJGRoNiHaFtrh7R",
  "key8": "EzgmGqRmVJcNq8jhmyTsFdeBaTF5NY2mmXn7kGcCdo3FwZ87ne4FHtErV4AyhcSQy4wAzdcLN5dCWnBXaLhL5R8",
  "key9": "42WpZiiHwEx6eaKpdkRuUByk9XT37AW3cGcugHZf8kfyvLaoNz4XoaSFGiNcAPzceutxukBhtm7W5ZN7j7fqRXiD",
  "key10": "zHzQTjqnQ5wSZdCNGH9CuA2Pdfx6RxvSwrQJ8Nz1DYttKXFnu1ZwRUsErSjki3BCdwYgbzZsyTWmtEpdAxzuebp",
  "key11": "3ftE5mZeDS47xnnrds89VynM96DqrBcqYgABoEU2tfBb9nUc3VhvMD1wFL37UgupFAUNpCAchjGRbzGRpdJSkkNi",
  "key12": "44DSX7HxxWqhbz8KfKTM3vUrH3dESvtJsnTkd9bC4myw8PCy26RVnxuLfwPz8pbkhrBf8wbRVcoQroxztLkVLVDM",
  "key13": "4VztjEqSCYwLWWBwhDkN98C59YM12KvWxeJPVbdKuq74MNwLkA8qLJeAcB2Cpyf25m9RbvQmu6xepXGKzJ72nAbg",
  "key14": "2AqiNwQpFunW1iSNxfmUwPJco97eoDvwdSmzkVoCz4EzKUfwEa9q8gJGUa5RqXLEpnEjchupaFduu2fmv9Z466Qz",
  "key15": "2haNLSpxzVFgVfGgx1vzUWoLo2DoXexQY7kMpX6XSpHZDVcJq94mzFLPJyUQ7Mqut2ynqsFgypb9GUYEeQ9zBrsW",
  "key16": "4JqCqXpMPs8wyKtrJqACbbStuf3waBmKBM9q6nE3HWnWNbCpajxiYJmZEQX5ibpfi9LnQX4AgZGN87xQfov8ov7T",
  "key17": "466VizpaRfAKL66Ce2gLfYbi5S2KioEcHndr13HzuCeaynmMfemQMh2htx4RaAKATR4qkMkjzj3SAEAt1xSEsa2s",
  "key18": "57QceAbP9Hdb3ZxZiawZhTwJiHnuigB8SqjuYpef1A8Zu9t554T3yWtybmTXCx4sg7eT8sx8HYCTukCH6spUE1jn",
  "key19": "36TDfBqhMF3yqCBvyje7ikcnzxtdK4SM9Cfc3wxBD7N6wPdwRN5tFTKdzhqR2ox69Yy8vLk6r1HMPvdBrahgLvoK",
  "key20": "3M8RDwuJKFgapJvtjNZha4S1375aEyAq3CNtbTx3CBwx8XTCTnGm5dD9NkThPxLieTMZM6bWkZcTjc8mm5KUQ7Do",
  "key21": "4Rgm1ZSMAvn5dzxgs6BNTrzAyYMN21C3sGNRM8fvhgzKMrLhfmpmNbHXTTbPM1kCw1DPy5QSCcEU74WxeM9EYHiT",
  "key22": "34FnKaJ5D5ZxDaz3zdHt1KRovaJX78NuVPDXWRz5VW6r5nz9UtCKi3hiUWzr3gqWJ5CeKByfcrhRX1nV9xbVXZ1W",
  "key23": "xUvKv3B8dNXZitiZZvyD2FCdNVqdhmbqU1sWroJS5YsEdy49c51X3d5ZzTVEEeHa3s2Zm7S4xg5Co4HcVWvnq1t",
  "key24": "3vmEFGAprdJk2Z2xiYYDTUWVmt2toMN6WivUXFSwhEwkeZzWfAcj6aY8QWRRaEGMZJr5tsYtsydXHadgwh4dFSop",
  "key25": "3p68azu5iQGpHEHQSAH35fbv2FLRis8KQRw715dUVbxthyyNhVqJFiHMmzZ8yYP5yZvsuBabPdMCdby85BDMVeHY",
  "key26": "G3Q18HDaLbE8gCt2gWJAunDJBwRgQ6G9drZK2oKPts2ojM48RhenHy8Z1z9M9iX9yPSCNK1yc5UwyokpqqwxWLE",
  "key27": "5EyiquCUJjiMJF53WvamPtoF7b2RJSgSrDUpyuq3RsSsT8F3QrtxS6Kpk7VmExYubmTYbHs3Tb4nzTtyXRSjTs1p",
  "key28": "62Z8Ft7d3agbPwSqAU3EAxq6fDTX5Cy9thNc6j786ZUZD2LmWaZ3ej1u319v7oyWgW23qQnkGF2Jcrv35zEJkCQd",
  "key29": "j2hnEHbXnPjqh7wwBZkiKDnWcJRtZ2R8MGqSEVn3vVxj2NvVkAXiWLkRhSQEMhHqG6NLbjVKva3xQFJX8dfNwUT",
  "key30": "2hVupHetFMknbnWGkxREbhACRnC6kTh2bgw7Ts2sGoQhe5go4qATzbpwqiX8HmCaJ7aKgyj8r6nP346BYAN7jP8A",
  "key31": "29QkdRQeD8tgduAfAwy4VAbT31DDnDsf2ENFcVp7vrvQhosJhdc11p8mHahLizXeScT6EF1XsgfaRL8CEs3HjbGn",
  "key32": "3Eco1SX4ti8pSm3FvMQVrsdYNT2pe6iPtFJesRsZCt1gG5oq8NNdBRjsrEttaCghkBNqWWfjGAaXAx2REK8pAszb",
  "key33": "pfcD9dgM2gA8GtvjjK8SGfGMKrVKtnTdhTVFNeSFdb1pSh9DFjP73VSry8PMzebCx4gRM1BDpUAKL99ENwjUxsy",
  "key34": "3ipWS9W5XDvv7xU5JK6rDM128VXAjXzoddoL32NhwzruQkvLAyUm2VEHTBBV4TLtGtESCnrj1wyoY7XW5k4AwnDx",
  "key35": "4w5D6LRWb4hmDy15jk3f8wBbRTh8T3FLzGrSKNMMmBNZeYgLDhQJfHuKbaKxNWUNcBpgpsqQmKyWXLk7QPP7iJKK",
  "key36": "4ArDLWFYGu2Ueu2A8ftpuwFPs1g6wNqF4gPoFCUaQ5oo1aD5u9gmFUQwC3qoD2sM2kM7od18BYVW6DQtPRxQ5gCP",
  "key37": "5eud6nkL5FqiRmzGKcbd3sBKfSmpMJhGJ5b7FHxNJCNKjgR5mymp3ZPp3ZiQVFzVS4gRbeQzPyEoLTy6zRcR9Xp1",
  "key38": "3ekN3YtqtsS1pgnwCpnscsTncCbn1U4MRXKZV3xKcWQYGzogx3vLJcfvCLsQr9Uar6eg5fgXQz2MwQiNouVSU7Ln",
  "key39": "42HVctnoJ5dFR37w4VjZGMcyDqCBKAQKCumB9Mr5wY415QsDLqYGxSyFUCC84u6LmW6FqXVbuSsTMC7h9nmGvexR",
  "key40": "4vCCngZ3KrmQaqG6Pn1u1ePDhuKzYxNRKhjvdyFWD21A87p5ZveuN8oXRjRgB24o1FM3tsCPhoZtm2EnDqeBKjrT",
  "key41": "37N2nFM2n6iKjaLmxABYVuNC3PxhD1eAQh7oCufif11ZiKfs4yycWudPLaksHtz3ZCn4A9WihqKnqK5jAUBojYLd",
  "key42": "4cW896yHrgzyrLD5Aaj8u1FmdY55amMZKVuEjfniyB1BAeXdEdmrEjBQ9QkNJfuyL2DLG2zJqe8ZrYMNFjvP3BPY",
  "key43": "21G9Wf4AcbVDVGsNvMnM8ak6GW6rR8i3CdgvquKjTbJN1r61nxsePJwuwmHk7dwkX7coLpdtpRtLJxoTjcekk3JA"
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
