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
    "3qUFfzJsw2nULCoHaSSgdhvsDs4pxje7tbc3giCEXFe5SPqgbTjcUXAVEAv1e8nxpSVTw5KquFbFmcfyCBKUFM8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDBNq5H8PZ1sHYTLKgwu4htYou9ubatj1gqbQNddn24KtzCojKUxk1bu42PnL8WBzSXaecKvkBGKkQNMs2P64q1",
  "key1": "2hNb5Cp27kei9iC51Doywh7dBGzpPkQ1nD6SxSsEFNMAqrd4HpVb7QzMmdFKZtDhVHuJEQasUnZm3LbooAjhGHTm",
  "key2": "2AmRS93pTiK3X24gz6MrDNHhapHjjDiMD7d3Qn7AwqM7jzC4aWN4ZMeBNtEVuxz6ZRYQpjPLxrCpGJN9K8dTP5wi",
  "key3": "2fkEUKg9BN5jjzQp7BVz933WEE3GadHgZSa19DqQT37mPpBJ4WagfxwgbTkJieSyVxE64EEcmhPBDcvWPfNX9oUm",
  "key4": "5ZsJR5FjJf9aAozFsE4EKDes7R32ucpLtiZBU9DjWRxFsJ5h7t8Q5xMYTTDM85eSEyKWfAeaEY4sgMQc4xSuHwbb",
  "key5": "4E56eKjgkh2vPDX2DgazGwWaeZSJ5kjGfjmH23H2cWmt9vt6NZ93nU6XTUK3fzk2T8U2b4YBDeZHoqDWmer8DTuc",
  "key6": "WvHvUSdWCT46BrFmzHsBBsGzFp658YPCEvPpHxn7G5EywdEik9vk1ivpGHg6BK4CmoAWPAsKfz3Fd8G5kEZ9KF4",
  "key7": "2B1TrkGz22vfnSJCTS4p4aTHscHcTTncsYTtR937kJmcpV1MCMMF4Qih6yuXWt7Bv2gXo91UqBLqfp25tDuoAEqH",
  "key8": "3M2JvohADeAfTi6t4f6nCgyLaUEgqc2jxAorEf5RtDiB2ZiaVMkTyYKQe2Q2WNgWXNmMUfXDybGtewXRG5jjwDR8",
  "key9": "5y4SYGgUzsJNg9m7q1v8MzUvmwfEkSzwoEHFXqCx8GGpHi9h3N2hRXA1ojV22eFR1zsJVXC36S2g5Xs3K5VD9uue",
  "key10": "4HuH8gRkUD4StMCuzwrgNN4JgpA3727n347N2WrgpMnCfabWfpoJpeZddnyZmixpPFxQaNUKfSTy5vQos6xh7BkC",
  "key11": "39FrtpLN9NPevD2ZoG6T8VxerVYhifMGc4K9MQy9VEzH95RwibD5dkSiBzTaPHKkNACRxD511d7toyws2QvqhsUa",
  "key12": "vagsYGgkD9X2dbFuFBqndMLYkfqeVPxRZggBS3FuP7KwtU3NS4XjYa1zdtETuCSCAdUGauasGHh4eTt4B9bDihP",
  "key13": "PC74hsDDUM7Q7s4ZqF1F9kyuX4hdgKUeu8v26WwcUSRunAPySs1DuJVFFixmgv2VHorkR97fuh17qec5ieppqG8",
  "key14": "U89eaqsBwY2r6JuEXKTVz64B8upLxJnY5xxEhJEprY3yDm3KAKaKVKWaQHbmd192Qyu6y25SEovjfsR9DENLkrG",
  "key15": "ZwLoGXz7cLHhztTEJR1KRdeFPGNosyJ8EygvEs5WdRZmpGmgpNSYkRRTGCg9xKDbdXr2YQaYNN6J7Nzwt7DDk2Q",
  "key16": "5KB5Y496619PoWitFybv3sJKDzZh2gS8sEVUZTeshcMtbPL2EdahEShmpV97tSwALjUUgH6Q5kdqchZ3JYrGum6Z",
  "key17": "4mKJAWtsYp9mneCFBoNfPAgUvZG2iA3KZ7ZSapohW6LYmrccVZKr32NQ5CPeYy5inYAs7F1Y1diSRdhhkeiRToxW",
  "key18": "ZfHjE5M2KND4EMT1DjF81yF3KQgue2kQ7tj28RFHi3CjiSpwtg3FpFEEJw4FcbRNGL5eSzksDnfKLFEdhjVUgBE",
  "key19": "4nkjG4W4wKLd9S3BTHUXgLRx7Q8LgytmgtoU66qNxPfie7kw7sWmzvcegYz2Yw1VD89k215AnQpgW6P7ynY6bmxH",
  "key20": "4ca5vRPGLCPGw5MLAvC22pZT617GUdvw2UzxJfuPR8S9zArmZ3sd1x7FHhbHC2zQEWsxz28Yn7Uir6N482CyFofq",
  "key21": "n1TbfBRTzPHB7JbG355RHQueJQFNyGxFdeBR6AaTVHXgZmAD3hwpC4zqMQSnZMjbdRvpCVsz7teZRHVqFKy65rq",
  "key22": "3zq2NMp62KyamN2DFEbXxqvQ6bWHwVnWZuv8KxYmwT6TpDQqoFrUhxnA3LCkcrJLSQTDKV5tpUnog7ptZW6EL3DL",
  "key23": "MwumCj1UpxwyF9dzKgKf2RrS8uddAY6n98UUVoxnGfjKbdtwUHDQpfcCf4esn4sTRLoKGPRhH5Roe2b1ycPbmZ9",
  "key24": "JaPBNTPYtKuDNNeWF7vnLcKXZPeZUMxaWuPqTgrWXRTWdTQ6jJSS7CWgqM48uRD4M22JFLLtbBiWkjZb13idQvC",
  "key25": "3fNZQiHQpUwKmEM4r8PHvXo8JQbd3AwPLGyVjB9yxvZurGqr5gCtoUyturoquveBMATe7vNdskPafpnrQMPCbWxW",
  "key26": "3BnDBzGYiUzBZc3LFhEPTHFxpysgma6PQtcrRc9sQHo7uVQjGY8XKFH6myQMJKvu1AK1dafpmGywSzE362N1XLFf",
  "key27": "3mrsWC8Sx9THQWEzvQ7Xqr4duGNCi92UyH9T7gWdZkibEJZQcprNurs4Kz21JAdUgRgNGuRmQC1UTg9xNLdMw9oZ",
  "key28": "4jnTKScPmipgrjZkWEqSvQGT8twQY9nPz7xDUuTtP7FhHcKk5t4J6sssg8JwWarzBfBJFuwbLjVJJen7Ak4uc1ye",
  "key29": "62RAs1P7gTWq6QaknZqb29Gu3koqs37D622U6iuS49hsUKNtuydaV7VhYDBf1ZLEhWjhyb48xXMUQzTWbuUXxtD5",
  "key30": "4NG5C15Swtx2sDrFqsM9bANsyL7poBD8xAw32g77G32ExDwg7fpfCW6NwTN6EtWYgXSRLpLyNx4fHXgLrf993Zwn",
  "key31": "2L4rqQph7Z1MdBAvrUszrd5wN1bY221yodJgS5WUxdxvVRjzHvsy9ZdUFSzkB3ko42ogZrBk7ZpUHYndw33qwhQq",
  "key32": "5bpV2AtAru4zk9GTokAnD1BvVLyQLrEo7TcLhxsGcPU7oFDAyBfyMWJQiYumfgdiBbaJwQ1g3CF846f2Bj8t1CN4",
  "key33": "3ATiYXXP5os9kLwBaykbXG81bJ2D5uhP9Ew9LPEc3KdRAwAC2yVoebYx7A9C5y2CC8UDBs8o2EiMZXpZsVM5ZU8D",
  "key34": "58nVnuqoYfCSguzjYAZ9fFSPvzHDV6nHgGpWsDDJnwFDQpggaSrTuB3WoAv5S6W3CaJ8b23GnBEWzzGXZmUcWmUX",
  "key35": "4AgcfiG3jMPfjki39KtJ687wL6Z9Rea1nquCVUR9fm346VkEHFjFMhHt3k99cBbLBzpoMdetoiDrMjQjz9neJiuh",
  "key36": "4iQr5zB6tTne2DgTLH8q19wZYryPyh9Kg44am6HkMwgA7zcaFbk2R99xto1fzgLDuTAoV9UvAcjAeowD7Ti3oLJt",
  "key37": "5Y1Di9fmuJr7dbmnNwiP1YiGr7VeQoqJsBzoqyActHbFmAGNseDLPFYrGDFuNsLhWmDRQV1woYg7ShPyUKqkk7S4",
  "key38": "WLt31f4i1gwovYVrET4xxwFwLu5rfCVW6ue9bCKaGpAYnDPKFFqNzHAJKwFZ6G7jac3vJUhpiTAAA6EA9TdBycN"
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
