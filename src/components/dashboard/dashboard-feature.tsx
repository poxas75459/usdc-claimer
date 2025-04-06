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
    "Fx77dDEuy2eQbeNdJ1g1Ufq2oYXH3SwhHUqaaCCJQxf8dF68o1dgesrEsfkEyPjTqVgkXcKEhDEGhq5tXM9d98g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jxieCmxgXFJ4JSn41vrbmKUC3FsbhTj45WG7EPJYkuhH4FPXaoMRnP3XfGgtZB6n4viwctQiKu5kSydtuxmcDar",
  "key1": "3fW3f8VoE2Y7rfua5C88xJqVndWgmJERuT8TDuG96jayDsvJHdKyv3fuUBwUQ3PFhBvP9RvGWyPK45FjoCrmfHrq",
  "key2": "5DkXhmWw3sqUytazNrp4UkRxPsQBHRAexWs72rTqL4h1Fn7ChMTVUAiM3MRxrue2rrnPLeM9NJ3RyBUJzQdjLnJ7",
  "key3": "5asMpQAfHNPQs9YJ3gFNgGpQv774Twh5ZZTLgKS4JZahGM88aTuW3yFvFp86yaWLBEejHPBUpiXdyrWCzBQqgwxt",
  "key4": "3SLGmxMvnwV1fjCwpGaQ1suWFPH8ZigwBmJTZBobVna7TXp59gTzTrqqEdCjFH2zpUcMnodsc6Bqsev67tiTNk7H",
  "key5": "3r6ig9QytGiNxd1CYjgVecdxJWFWCy9y5uTzgRxCDHAkxVjQv4gTViD7r49itxPTYSbXSTrnEp4vfkNe7HkbcZws",
  "key6": "ZB1ums4uuQzFuQagS2NBYcBvYmfTmrDRyizQ7bdUmSDNUxaT431mP7ZLzAGNZHs69QGmuUqrCUb21WToJyJhzdu",
  "key7": "3AYzvsGTUArQEJQaXvyqZQUJ2LngxseRKSqNmVmyoWwUD8FeQjD689mhF1Xyf3M2uSrH7X2CJgyzajZ2eT6Sq5mh",
  "key8": "4Aut1BAbXgmd3Zv8YLoZuvAcYkD8ThukqAkncatdEMAfttbCLHGmJW3hE1WyD8KCJmS6SHRd6GnPXmdUEYGavMgJ",
  "key9": "2MwT5oYnPzZqQtaGiDfXwLmJ1NmpSQMz7PoTDG4HVocZbEAH6yRv7sGaBGXRi3whCGdsmujwyS8D9bmNFLqb1kiF",
  "key10": "3zrWW8NMSfBMDZmJNAC3J2u2r2Pg81ssz2puZ3hAYwDRPSYYLZZ2wZSyKCF5cKLeaxzD8TjunekM19W6KRWgsRt9",
  "key11": "rQLWq6EyZXquYd5uPW8Rgg6MVbQ6h5vycFx4Mw5xuosEKCWq5RPiXcriLhzncCJ1ZHCtXX3bHaEDeDNNLWacPtN",
  "key12": "5BxXxMVxpK3Kew4TahP6NZbhnBNkDEbecZ1hGFySeQHBsQHM1fTow2gMUQ3TQzvTTuMryKQ2nnGTS9TxroYoidx9",
  "key13": "bwx3yGTVme2csYVvpMXuH7HCH3GAB2gJML7vwm4oFkPzuWiPqQHMscRcLnviQW4NWaysYGEBGDbbnUcUC4tJAtv",
  "key14": "KmZhktohnBXtZNbwWUzQz9TrguW5DRZTk2CXqpTEdEidL7wN6b2YZ2Wes2hjxseXZZDJ93tENzqzae9fz7Tys2n",
  "key15": "4yqnTY9TNRxEEawpX7U5cUjq77qNjtTgwLNjTH2sC8gwqV8pHUWUdySoaZ6oezgfnkGqT5W9yL7qsWjVDUWo4YCL",
  "key16": "4Ma3MLEJ2CFBBtX6QfEEfhH9ASa49pU2Gjen3JT5afcHrVZdt9tJQVtTr9TCk6MXmQ5tmmSzA8SPrxw3U2JxtBha",
  "key17": "5x1ycnZarM5QEWh1m3pCBVVGEsDUwF6sNgXbdstWrDe6J1fKp6FWvF4KQmczzuR4mRmK2XidpspQCLf1k8KazoKa",
  "key18": "534uCbyyW2kGo29zJDHZoKdLw4Zgrt5bWd6YriJ11UivNQrBeq1x7jf6my5wZizYhryJoo1yX4T8EcTdNZdXnE7Y",
  "key19": "4nBaRVfw7PAbRfTEa2adz3UJ33JxVhpHqFYZKYrztnqZHZnSmFXven55JjXPio3eTA4uhAUzfnYLRRLxHzEGLWkK",
  "key20": "3eagnmPmAptEmNyQrE48JypKAbhVF8u94GAHR9UdWdqZZdbp7MGCVcXWHoL6NDb5QLcZVgxuRtGvFHKgzAzPp8yj",
  "key21": "2LnytpojYRz7XRgB6i6CuHaa3BbTwXTzfd9TTu8YAPwTJJQSeT55R7vgrcF1naoksvFLmdTgRBpKLJJytiLtZZGf",
  "key22": "57njXP7xz2TjZqd9wBasCk5ftpbgUtVruXKsBnvCBVnUyxxQEXGZ4SGS2SyegSpSDuiSF5UHQmdZrRj4BZWUbphw",
  "key23": "4ai7xSuzESHb8ACXeBe5HnQ25rN1v1FZ6XeB79ARkx9dVyj6zd8Jb2fJobcZ1xmGXtz5P4bpF567CzYf5Xuix71z",
  "key24": "4GEcpYCcznabR5JymjSs3mnVoQhDskSomzK3tzd1o84tsvYocWndNBojFbripj1crYNmq9Ez2WPs643RyAUkfhaH",
  "key25": "p4Pbh1LZ5o6yt1ougmuhNTVeG1X36CTZS25WDkPcJEVRPDZE8hL3TJJefybTpeSL52SNnkPZqGnpSdzpXg3Scwc",
  "key26": "4vuthHRNnz9hEwR9Z6QsEq8xGRDQwYgeWEMUSVJ4QP4V2nGJmGgcQ8sW3d72UYkTHjJhK7D8gJ1sTsh3w6JRwLL7",
  "key27": "3K182qESYUn2eiW2hBRCZ3avM2n1CMWCDdvgLiuLYch58TLJN2KhxXD2Yjg7Wm3WL8zU9cGWV1kjGRMgBViM4R8H",
  "key28": "39f9WZbgwMuiHb2yJ97nkwCCPTDABerwNf86G5wvUjA5efUXTEWzMtA6321dLuFU4X5iro29dyzXBEzLXo5dZaia",
  "key29": "cMEe3RKWWToRiQQd2tb8D9bBfC4gjyoYBBZjSC539W3qMzmbsUFLsUhyK5Tx3FVMY8XNjM3ZCtMB2qjQkbiVAnY",
  "key30": "4ZfQMbwfQqGHdDSPFfRjoLDKxxmJWbJh2M5g84JMyWsM1ScMAGXPGzmYWxwkGmW6FHkdmpyA4MERMJmj1ZvJ9wCd",
  "key31": "AiQM6epmaxSFxHGMYbe2Szsqmx2tEz6rQQKpPdbCfAinT2bzoCgVLDTNfzJm8xurQFMogYAyFeX9maoHzWVpq3H",
  "key32": "3WqpbUii6Co74JRQ47RhYJLDGHuCViYvjuExwREUkuR2WjchrgMcxC13vrYpBWZtP2yZN1d6hdQWsmAtaz7UCnKa",
  "key33": "5C9Nyky9KYbvz6d483Gnn3sFpiVdv8fSxqGwsqYG3z5pd8NgymJFv2UZ2sE796McW9o6KmBRJvrbxXWjh6N5Pzw1",
  "key34": "3dwmQW6eifJ9swPd2RFa8vus4R3qeZ1rULApLMmjXYqc7R4MnHicJeAHULJqQytnZPWfvFMu3WBTVE8FzyAfkPyx",
  "key35": "5VBzxtjbTkotDRSpXNYB7jH5DV3VwAcGy9huzr9iRi3KHNFUUafF8mKykLjjncQFJso7aVt6Qg7HgRwdB4T5fdiD",
  "key36": "54WQZiY4aQyNB1D57KfNE4pTw3RZ8dqWTiJFkn1Y8Bbfj4eVZfJB2NBpVcPZhK9u9EwiBxWeLH8Y3uMei1npo76A",
  "key37": "3CMQyejidqwzF5egGxk4pF2fNQcxARYSyUGAvtEMtTBkyNyPqhaJhHRPUjWjzsk2eb5aYHHDt6pCosbt8JVt7abV",
  "key38": "yXgy9F7ALXzPqusTH4sASTWPt7bvpbFRKzX9NitNZxKXGWdndH3AF6TK1rvwZ9PoUXuiRUtsf2j5dqthkfjARSV",
  "key39": "5EYeive1ZsMkLb619eGeNpzPUBpcVqe7MTbpbk2SihLaKw1fpHuNwhDLbGYQNChu63P3D5w5HX9uQXsxtSmaA3fV",
  "key40": "DtzpCyqUYy2BYcDNYGAn5sL5SjaTAa8B18rnVtx7NcL2AwcutmJxBQzx7ycfTR9pXA3vg1P3bfarZZ8QLV6d6FL",
  "key41": "2yHt7HQmDsCjmfowAcftidZwBoWQXgX9rbz3bvLUzn4uZrfMyC73mtjo1eb2fVxDmzxUzoHkF4rWPrvexAG1yqKW"
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
