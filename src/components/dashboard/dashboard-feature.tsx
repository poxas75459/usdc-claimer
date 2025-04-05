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
    "52UMDR6gYCE1mHAZDx1MKFhRdv3dB6SmvL1ftGDEcshfU8d2HY271s1rrExb4oRzJMsbA8osCuKLFKMDo6uXjRZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DtkE6aVLm6EjmQSZGsqRPp6oAYow2HGHdSQHuMHp13pnXqz48tQoi84yfD6dbVnNcvr23kuDHQgUm3Ac4jTVCif",
  "key1": "3wbgoh3q6QbTzZQVTrbMXFgArfHRb9rfqQ1aWZQbwiEF5YQsyyY4RXxg84HWNbafaFYV6DHvaJM24J2L3p4xxwUm",
  "key2": "45LDpCU87fEHLUefPNBPqFMy32qbohPmU39qyoq2QpESNxvXXGcJKbareYNbFwMbXDwXTetbGZ3EBueJzTLPGvm5",
  "key3": "NXzTdGz9Eh3iM1YUL8uTmWFQjrMtTRADKh2o95CyKrMJmgEFzXtxJttuSb7SfL2NTZQfZ7qXA2Z9B4hkud8ywk9",
  "key4": "dunrHRHXLZD1wXyVKdBddiJfAv4awgwiB96dVNY2kGwudWYmMVQeLYPfU3174BeV9yoT39EXCLMy569zV6NjRD5",
  "key5": "21pA5NFhTfo1Mm2To9xViwbevXEAE8oWYL2C9gveJJrvLjSioTNT9iZURf6b75NzXhapbqifEhhYJYh8SUhTa9Di",
  "key6": "3kLKjitfMLQrFD2A5QgReng13jJHMGaKv352UWrrEwL22SPVZrwLKFmdKqEbnswVvUd586db7SzoeryangEBrMsV",
  "key7": "2wxDhFaEoTRoRqdiUTsdsnUF1rDaywJKgfs3xrCQn1Vt6aj8TgUujqUQBXRzPZhWk6gHuYLcwjc4MhTN8KF6yyw8",
  "key8": "3ApPAHz4wKKhfpNbg2JVeNwbPes5mjkFU9vjf7ta67Jp6QYP2GS8f227wzo7AQZfhhoeRTxh6XNfhxyzRMVujusQ",
  "key9": "3yznqb2AEtXt66TCJzxJJ1ENqJ9xs3NuZoJFeNeCdRGQUiADQw6JGd2P9uu6ExMSr9sAo7ZegDiLZknZeNTa9v9J",
  "key10": "5Yrk4v8uG8KirJDGLXFYuaSm38escjMauWn5RaAj7gePHyhHQZvsXRMzeCyGo1VH7JghY9i8GU59surFVXGPmFiG",
  "key11": "4qPcvMygvDpynvm2zPYfryM7ZiKK6txRr1NdE99rNfqkVYqwKfqgwDSEhry4smXFGhUFLdq8Hfoj2Y5y7rUuqt4D",
  "key12": "2z1FtcfVgRodpS8VvaCeN62kjJuAEwcR1JoPGiJqHdaFnjfqkQow4LgSxohEteBAgyBvWNnQQYgpumYMvdvbMLRY",
  "key13": "5dsoM9LUM8vHGdZUzkuRAFHTpfPsqoCaRtgiuWyjsj56DyfGC75BCuvewxW2JRjW9fVpjL8vMrPpPbbHdxjLJnw7",
  "key14": "5P4Nq8g3D2vsxCKjVpFDXWjykq5WDaDmHT4a9GSZQ1GKiM2hxcmU2kJrR9AWgyAETJju3TkcViFTLqvX2PbjZGg6",
  "key15": "A88EU4f1dAwWACtqLEpaCNpUAy4HjmAmBB6VjFQmWqr3CLP785R6BBhtKNsfVYARydH868jr3VMWjxBc1VdL8av",
  "key16": "Tw1wAgwDjfGxDubtAjRkhd32N5nZxRUhoabWQktRugB9tXmMquJd8JS7nDk5ruB13SMm69ShDto56dNS4RB4pFf",
  "key17": "2FRHSDRF6v6267rz39SoFWbaG8ZJHiZqmggQq2dyquSf95KcNUCPc46PgbGzo1zDpuSWe4wyotAmqWYC4UYjAdKU",
  "key18": "5ZUFT2G3xcGX52V3ssXbKenK6iiwUXUGCmhZK3pVXi7tECpJC8Ns5LZ4TbpxTvtL9231w3qeGQpR7j42mwpRvTjx",
  "key19": "5QZQnwVWSxjyoE5ZZQEFAnJQgWQjeq4MsLQPUKw2MAnWW5fzjHRVUnpquGWtdj7Wwjo2QudBsjwfh28bhEZ52X7z",
  "key20": "25hP99vmbKrUHB8nUyizyvEu5KTcUWKKhMznvBSkZzxvaBw1i5rqMQNLuKybSJGV2msXhTLGQUJEJWfSb9TuSdV4",
  "key21": "4A3LL58y2b7fQUVdSKpvwd6bwfXvVpyK6PdfrwpJWaq39GRgZtJ19KzzW3doMQBDgQjnUWBRoYf1vXyg2nQMB6A5",
  "key22": "27wm2G4yH3gYvTKZbFPjzSw3QtKxSx5U7QDTqxPLqHXKgQ3XeKBK2YKHpVM2BMiaEmPZFxsrkv1mgByxW71is6Eg",
  "key23": "2VP8ohWRhWgB49rrrBsExaQv83pxZ5hJ6jYrJhsrDkURSnY1wWDL8k3V6JMJwKC9FyvHbsvFwvubBAJLvEVhf2j9",
  "key24": "31Y6geVzbpYuqSmy2UxdRB57v87maAnRsvVNzg44LWrgfgAqrv9XD1VxD7esqTAYhyCarA5UDENXaCRrvo2cn47g",
  "key25": "5fjiGaJy2nX9XgRTt76e67tAC3tSZkBpxPMo7wmuQAL6XJvZhcCovnruh3RU8xXQg5uM7RJAbeh5xRhNkFWHv8zZ",
  "key26": "3vJfoofLL52qsVdxDtzhYw7TRMTiXxSg659UCaiGdigS5FK8TYmPNHDZZ64KwZUWhMQruzTZKwiXvnrukaHmy5XA",
  "key27": "3Vyhr1sqrARHF3EoevdDNNjRxVKB6egxnpZECcoi6wH2r1rV424cVpaLs7R5PdgsY99FMRB3Rn2Fr18KaC9LEaZv",
  "key28": "3Sx9PMgsZjZGyUShBbTBajoUxrLbDzi4mpsvBz6kaqDXbWJurRWt6R5mdKoRetRqG5tCHYFitBAxa3uZjzqjjkNX",
  "key29": "2UmQFKSDRgXazryLybxWfzauCJQKRpxr2rtp8Y1SpEnw1K4UxVb6p3JUSj1vCebhVL8rj8RYUiJrQFi18y7MLYWe",
  "key30": "4Mam3ULA8t6dJMuG43XWCEXACA8CqzfzNw2yGucxp6yhjTMwYJkvZsJMH8VWZbnS9NjNdnfxnPwzmyk5zt4VtamC",
  "key31": "2Qqj3SYh1ZJ6YknHVkx3zWsurubvm6NPBotJxo6jyS7zTcAWRtejvZ82xay2TPLxG2CjRVh9p77Mv9rtjKqKD2jt"
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
