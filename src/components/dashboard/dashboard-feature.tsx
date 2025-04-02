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
    "42aTfWdVjpJffEgjiyXzvanBpsbfQ7Uvu2d8fffFN425WkJM9nEuRXRWvJcxtYBGzcJMMpx2X792id5ab2nDapbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npivAMV9GQKNV6iFqRQdcjY6tLmNTBBhAsDbAXqRcLpX5mCuA7rxEB3naQZR6XgTu3CAJ49StToa8tivo89BYXZ",
  "key1": "3xbMCoFPQpDAb7wgbbpZUEhCPPk4AWvJVauNHDpMXh1uMQ8bgHV9tz3YVc2yKoUSii7GS8NHBVTT9Cub62VSL4Z7",
  "key2": "4HpET4L9dRgh7kgs8R1g86dpngcXiddAELn1baMWjTemL9AikkyMmJwBURyMHhpruCu3VAAzZiZp3xeDzPnLsHLG",
  "key3": "QuBSDYo37qxdLAUZwYWNGEWTJwrqVB2xoDxRYvbSunvajQqwgRWf8xoUWB1UcVJ86wgvWPxuzMneXMihd27LNzg",
  "key4": "2CnaadU14H4943fShhHHm55TYRczscWEiCtrxzCN7MUQSRPX1t3CUEAENLmberBN2bmBP1HVcFn9zkyc7QRGVDVN",
  "key5": "4WrL4EoedMxFqmEY4Anaja97w1LvFyHGpPkZAQfJsQGM9ZHTpb3pBxWf6FzBd5GcTMYQBi1MGyMwi4unYxVxpDMx",
  "key6": "2AvvWLo6PvTqmCoGBUgx7wJTwXzbo6xbKU7xTPBu6QmrtsMnvq1MiU3UyDvbnQHuhUF3nDc1tTYdeAitjE4PdbfB",
  "key7": "5WGviZ4MDeUPkwC1WK4MEZqna4TG22Q1rpyBNKxTT6Pr2a6RaxKhipDm3aSrGh88HjXPSh2bFN52EEyDpYciTmhq",
  "key8": "34DHMkpjqf6kjr3HQJfJXXARx5yEbdNfzMndkcUbAVs2JRh5dRoT8SzMe7iXm9pUGcnYzhsH4vcvuPk6MCsCm36E",
  "key9": "f58jcy1Hwcm8JLS2BjBZf82TRwvPRC6kCASXh3XjKNE4GGshCxPncjTvmQdfesVDb3pJtuKLaQzsPzKLqrFD3SV",
  "key10": "5tCafcGC5aQjDhziJDEj82yoCmbenb644ctnJTVb3x316AwRU2G7W6atgVkwnD4P1uvXefQTMtTdc6FAZgY8zLoN",
  "key11": "5VQdwNs9qUywuimLGumVCrRed6q8thhx8bQ3UMP4WY7HCMFBTMv8cGjr9PVruiotAsN2ozFpUrtvxRoP7nTMYj6W",
  "key12": "pcf33ezPKifbWXXznt5RjD4wNsxcXTPHudTV9x4AK2Nu7URSYPYgMovaBBTLsBwq9aMZ2fQUit6rNcsWVeFDbF3",
  "key13": "2p5VToChcyp1VAYxjLLyQL8afUASUzz9w3eYdGqpBYwSrB53g87jabuXfobU5djdG2QBQGuUuVc9LndgeZjRF2hU",
  "key14": "4nYpZ5UouFFaEhCDGs56Uee9f3DZEJX9md9rpoAFURzJEmrTCNu1XXHWCj7vyWboM5of7YwoFf2DmNVpYN8KztgE",
  "key15": "a68Ldr5qfmVnoPpbXmSFGsPio7WV8nD8g9CYQmKm5DLhLHYuEkw75JPSsARy697ueGGvBTKric1uJ1ap1jVQu6h",
  "key16": "3kD2fsAhZh7gbEr74gDiEWWLHcBhNi4U7BPcWXVENw1KpFyM7SLz9ndo13ikYv9zXcJhsjK2hfQ2TZ6qefC69w8V",
  "key17": "XYnrF6NbiT9yryyPqfE1t8puCsgJ2Hb2o6193CRqjthvadcZGQ4eYcgnauG8tQuMELX5fnEzUbVyJcEnGsmkFwB",
  "key18": "5QqbHK5y55u7iqHk3t4CPtoJ31tbLhqDaJa3J3RFSrAoJLyqfZdBEtYcMiL7r4US8j6paRETcrneqFnXStfAayTS",
  "key19": "neNqPqvyW9mu7CrjYhmXydN18nFAL2CqAuvq6eRN2PGaxvTSdTwESJm9tRCQSw9anxkPwYUhZ5DAKQfAiynxBjE",
  "key20": "4iQcsFURQDEth1cEJTBV8nq2wqcEWj2xaUA6oX4uWiLYzB953mLPtZszfcPXNwY1Gxz9rwZNr7NV53DJycfQHYLR",
  "key21": "5Gqu45Gfe2cHw4ty2KrVcpZmczxdoqaZkiNR14L2rWLXH6uxCZHo5v7qheFE3a4HxUkDsCDSrr92zZF11v3C67LT",
  "key22": "xNneLSkPkvKgEahxdVwxJQZKtTQnLVUGbiFHbFz4dmEMkAiMbwgrmYy8rmrT6JLegfKDK7LwPoCcczEMmWzutoD",
  "key23": "5ttaVNxMFFWEjapQSfwheLU5yabbRYNwdMkSVGjNvgGBJnZKaBwnAXyn5hLWaqYHmpGxVEUvj6FTgNyzWjGpxTcT",
  "key24": "5cuvtedwBr38fd2EsgUqYcu4GNJgUxm6Eoh325fUbvbaXecsjDZMYJTLBp3h1Tb6E5SJFazZsFwpwMsTvX75ke1b",
  "key25": "5tj8hujCEMvMF6ZPgsbexpUjh9pyB85Tt2YtidTvmuJUPtskZn59eHgc3fcPepE8ruBytG3S2rMycD94YF8cggwq",
  "key26": "2hLuoxv1dn43BowWfNWKJsHZ6DBxdHBm8V9ZT4zGEKJwRBnd5NpWGj5gbG8MrPEAojg9dxBmtWKLtR3QdigaZgfJ",
  "key27": "3fWptvbQUx6covBfW3TsrkQothdPxaHX6GcBYhpwZLUhgDfacLuiuinuPJpYTfaGRePUc73R8HvgmqFtkmMqTGMz",
  "key28": "5EZRwtyfuAe71KTBzJcJKBLnkx7tF2fRsg2k1iC1Beo2wuazuqMVhDBRPS7udxV5HaZPKP6wp8tbsA1JabyfKrLf",
  "key29": "54evkcVtTHaTUqcAqvB1spNAi5rsJ28xG6uvcq9PVLiheRTJCLDWWkUGreUhi4cALgubH6VjzTrqW4XYq96x7isq",
  "key30": "ZYT8YjCnTTawegg1rSXFWA86Q1mgDyDg7BF3gnu17E37EmunCVPUftmo1sfEJWHMU8vMUdKwhPNWgLh7rCstTQB",
  "key31": "4ynUapfrxdtPHMD7dKpYTuyy4nkqtLqNMSpxmyUoxtn1jAbQu29LiMVVDdMaPfem2juMLbPSUxqEruG4oquJVD76",
  "key32": "4hKTNeFkW6Pw4BRA4e5etE45imbpT8YuUTNiGGt4ME7kxFvgNcGLM4CEn6196ZhGFn1nC69QnSX3g1vYKaPGbjs6",
  "key33": "4LKUazYFcXa1svR9jgdvYwmgG1pkGVF4X7Tm1NkbgyzCChasZvBVyS2Jp7Zonp2nQ5YEzU7o3ocCWBDD4oY7qyoZ",
  "key34": "s9vrkoxvcQ6rjqfTa1rb4R9vtsYdzjkbjyKCQmooowXr4Ur9yFnLCLjfSeayEUDoxbbQFJH2MQG7EdTAEXFNBSB",
  "key35": "2z2oPvjdrFgDmwM2PyiJFCiyXPMgVx4rZ1hSEDDsGjd8tAgyhZNucNAo8ZuzjSsFk8JtQ65PmCttSxqkbERVs3Bn",
  "key36": "387y8QcJLffV3gvTPKp8Ln1wqZunWeeLyLJgJQ6fJRWmHnX2UtTTyC8GYMxBRUzAPaxaZGdTWi9AQcVsJwhD4CAW",
  "key37": "uHgTb2NS2zDyNpQbHntzXALaLJ89c7WMBLebgu6ShU7TB4iXZgVgUceyaSaqkamRekTht6koqPLrNqQYeRAupm9",
  "key38": "2qvfNTmKMY1KMFNaJUTvw7N5LQCime4pv7GD3rmtw1ZfndK9PF1CdjwFiK6shuviEmXdzkYdx69A7DZ5dQ5yigF2",
  "key39": "5Jiphwx8T49QyKJ1huTQABs2b4qJHYcC63R4pdYwRUS3YiQQPQTi38xPnLMTd5udpMSpGPVhW66YH9xa8EedmHby",
  "key40": "5qDHN6wKuwkZ2tNgJM8BfApoCYSWJ8GeAvv1mHoE4vRhcWyNdRwKdV749shaB39EvUxUvntr4dPX7XCKiPWpJksR",
  "key41": "29bo42ZNERwVvJPdUWoMVndcj8ubULdh6bV7dW8jHkd8Kdwp1BvTTF92hoKx8dVsR2gsboLttUHBNgafP7TpZcpv",
  "key42": "27He7a2J9n14ttoduGfekA7LEKoxDus1BNYKbLwWVjMubXXh8zUuTSzE34BZht8LcNZx4j8C5a3rtgdBfNEB5sGC"
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
