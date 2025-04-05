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
    "22MQhNh283iqVeuKkEUZhZn8Xo4iHEhB4ioCCYK7MoY9SYHpUs5NWr16RFYodgvLqkKynVGDH1uF2wMsh4pNub57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqdAQ3Rh415quCmeoCrpWtAh2xD53eaC7WDXkmcg7jkVkYNRZGSRvGuN86ZcjGegqrdiKEJ5f2i9SWqj91hbUaG",
  "key1": "4NNQPgKLTBrDZHi1b7Ri8yD64neLE7Jgu2D5t2Kgfdrd5zkTGnZe63UU5j23AKBT2UkcrGugPe6tWxh5c68WfmMz",
  "key2": "5QrAWsRpScqQaWy1RgNPfyWRU7nVs4HYcX1oijY693JLEvfgjQjHYh2siixQ3kKh8ALHLhpTu9eZyf7hssub1E2J",
  "key3": "2Jh9wUbZB8xjpYm8EtKJTSLzDaycJup69qghfVmkQ9cZD9xFDoMUudoMwPRznbaiWRuKC6xpY7xfh87wZnmdWeCo",
  "key4": "2PbmeNeQze59XWhAkrVW2JSLkSC3vm1x63ip1p9Yp9oQb6uADmefDipUL768psedeoQZ1MmijCRXnAm3r8EHrjN",
  "key5": "4pzd7hLtZ83Lc1GSho5RsmJ7ikscpRWmmE5YBw4X8ecnQ8azxuRVTBbEGu4vq2NRwdQKVgHpUEkDmK1nVuyWXZdz",
  "key6": "35tnXRYMWUCDY3gcbaPTphkPCUYY7U6nNr3JZnB8rp5VwZZZ8Ys4Vn4VMJHyjnMQum8vMtVbdtazSSegUS2PPUPV",
  "key7": "2KqfskEGjF1DjeiEKeVSBtBeHLUDMhiy8rMK4HLY6QxwTq8zienqm3fEVtYGCPqxr5PhAZ2DbGVbNavrpfn4MC39",
  "key8": "3yaQf6joHgo26TmELjDhMm842RKu2WV647h12WpELqxHbCsnFsn8SSAnoU8xa11XARgcPUtNkAZPXD3zzpvuno5D",
  "key9": "2eoogYJ3Dvsza3M48wa6pybNfkYXgj9xYJ7ovcb1b8p1fEp2kPuE62Nz9H5wSgaoG52PeMnuKMe9HfPbCrUMnmmC",
  "key10": "5Jxx61SZ1EvhPcNaE3P86BocvJ82LNAQUP4atUwJEpCCA7R7To5SEFCfq2kbq6WCZ4v7QxXpzR5uELAxFWKMycw",
  "key11": "4zxkuZ9VMjNhTCA9gGyjMRfKq5FBzcfBsXuQsqkyVwt1c9wGDeDtqDQTXTgqpk1bm34fb7xzczhFqMf1t8bytzvN",
  "key12": "LSqB4k7wEqyfrBAxQZixqAgDaKLWfUp7EipS5ErE7DomqpZA6G61N9BB6EeNhGHa7jX6mEBScYep1MTaq1YFWJC",
  "key13": "8VneJVnaDPGMdfEDT9EiNDmQwr6kmUbCQ2DESbShfSmCRFTaMBy1z1ubwysfvkwfsWnM59s336GwSrHpZtd6o3Z",
  "key14": "9t7G5q4JFCHH79bBHzVS1Ui8Vh6PkWnHmmx9mb5H9qaUFnBZp7xxjRkU5HQLwtgwewEjVhaHFQVRSgiZ7fYHCYf",
  "key15": "4c6iAcyypeQifLS9SLPdgvJVqcLQtDr6qL1aRe4wycb1owCdFQHytzoqukjgkrDq52fggQJ8Z9gvkaZDns62kdtF",
  "key16": "w5BTqcD2dJGVibYuP855BNxCG9ZeKHNNQjtJxTByMXFj1Y6gqPvrmB6Us1NbNjGJH9Tx85tK5pYTwnsP5MMA6Cd",
  "key17": "Xoe7LJBm53Ffeh8PvwUxW21SirgqeDWyE38HJ3CEcbb1vmPEWbqbhfUeE4RQnt8TCzX8dtPSYQNnQUoe5nDa6ya",
  "key18": "5ZGSsr3t34ZGmtuC3Cb7zNUwN8zpBzUW3gGnDnSkxrHrp3tqBPRV5Bu8cpsDyhF93RvKYWcLonNpMZ8jzwQ6VcsE",
  "key19": "4sbojF264BYdwW2aKkkEa3UZUsmofbbprTWm2YC1Cedj7vCaVcLiQCyZcu2fvJigY6Ebur9g5WEE6mbm3dNwugVU",
  "key20": "4mrHxJV56oPhfEEsmPnJAsHU5QfGLVnKnkNN1U1te3V7s1FS22yRC7YEmCeLHLu4JehyYqZjGyt3bmHUFNHcA5iy",
  "key21": "2m3tmWPATngiapeMF4dF9u7fG1BdvXTbvVZkD8FQY6GAZiVPN4bCh1Dqb4wvGdNwtwTSEaC3E251mdUZaoTtXVhT",
  "key22": "28qYv5zUD3yt9ZFhVstoEXW7AVFezbjeLEdPQ3zkxwzQis1qJXN3eao6JqzX7WKwX8BhrEiW7gjkptD2QKicWRPa",
  "key23": "DQHbTQmWf47CmXwgZPybQdLrUK5XgUV4RqnxoBJjnUM4wB5NFJwXUzdU7GByMj8pxM9pBVV5HnGU3gcTHVppYX2",
  "key24": "4P9rHMohjcNmjJK28RP6kyb3VELqrCHAD6QBgrxPLnnVPPbqgrhcg3K4rhfRCSWdAyPtprJmyZ29mUFZambq3qB2",
  "key25": "YXA2wBa7ppdETDEaozu7H9kU9biC9wRMocKYoWGA7821Ry4vpzrqkW2wQb6ovmDsGY1VVx9sBrboCBAxdmZnCjB",
  "key26": "43yfnCFi2W2Ax38A789csT64LrwbtqL8UycfcvDXDD2CPAbHgcpkCi64Xmtmhs4YhDt4JCeWhZCGAHv6qcNxpcoQ",
  "key27": "2nHefZ5q1u8FNEZnm7QzTqPAREG4CHR6YcpUaBMXEeSxUHPJz8s5McQu3PsQvH2mL8brkHuLALzCMs5NtBP79VYQ",
  "key28": "5YPWjzy8Y2GUgv857sEALJjE82G3s1drXCh2TmMKVuBHorfZm3pdJHCJwrWBCKD9bns9HzpEjzrzTL9o8VHQpW8F",
  "key29": "4wsxh6adoyCdiYyMihc9imFASfJ2XumLDYwrnRzs7RKWSDhPRnNqUnoXHqbvjoewJFRZfqiUtpDhTpQbep6Eq4eJ",
  "key30": "3xZNR6G1RLJ4wLj3TpCjGBiDbZXYutNWEaU2mPVWtypJo9y2oVoXUeot2HfrZdqhusqM3NLJFSADfhFizctHvRSg",
  "key31": "5naaitYdHnj7nazLgZini3tgRChc9fpoYqJp1Ugvv71HWDi1j6KLafBPnb3LJpwcGHjAn1KDgCHuUp6BHFycfjg5",
  "key32": "cm9SiU3fJ82UvJqG6hD1SSTqz9zMQ3YKoDAVykUN9wegcRDdbyJE6RjbVFgxc7q16UiuLQQsJ1KgQFBgXo3N4aN",
  "key33": "4kybphAeNvVfvWYbiB9Qx5Nx36GwWyLPydKB7YAYpTWUCnK6pg2kRMk7A99pa8nE1VvteJNyh5cTvhRPkdXDgjH4",
  "key34": "GRQ1JFqvnNETcVxoTAuYw7VMXHcxwCbSojoM2WScVuM5adJZdtydeA2DqRkDjZoHSMVM9u6pnVFjs3fimCMDSr5",
  "key35": "pmJ3YUscBVwpmBiamZQtBNHhHhBQpqX9nBCSbkAu25y5UqarCEBCy59eRHHfkorN2iuCXmzELuu9LsSAaU9cbL5",
  "key36": "45rEck9iPrXCSdZCeEV3yp18o8rgEwhNxEXFXXauQy3arv4eBpHjs2VjyaRQj1HZbXVTwVVptcrJ4Jp4mN5KtHgb",
  "key37": "26gBcYin7wq9ebokiS9TFk2vM5qch3aXoRd3zUfWGj3w4LbhJSzd9LMhUgZH5gcdsQDnbjhFDTysQgRWiRyDRwTv",
  "key38": "4UukW9fLB2ehsY8qCVR1ChkujRb7pWWPcNF7aPwDGN7vkwKAyvGYZGBzJu6GTVm2qDL6bEZkJ8NBTF5NSsEN7C8W",
  "key39": "4msnNE1SApVYGjp1XLC4dpD45rXDvdNsz3q5w1cxP3UoU3gqwfbyk9wh98u3un8uAWyGdagLRvbBRkkPK7MVRPY2",
  "key40": "28Kz1m8NbEtvJgUnxJA15GSob3vrQDDQVm2DaYG9rXU24zgLd89aR1RfB3ijHsUaRrb62EFA75hTJyhUmJ6N22JF",
  "key41": "4UZ5ANyqcq8gVXu9ZQZriqA7oUCRVfJgfBJ2dxkxvYLEqwy5wYe1GYdueGsZ6RBZZ2cBHxmfYG7itC4U2i5xXzKC",
  "key42": "4DTBFwuVXG3XNCZTBNkBfZJpRxvVcnYXSuSBWvkNQQ8T2LmGJtD7JVfeFdNWhQymRqgRKZrSMsJXAAas3RnShpZm",
  "key43": "2P22Q9a3v68UwRc9uK9ccbyH7xEJ1xtyDzbqHZoF2j6ym8qu2aRtV4qt1qwiLWFwcU9rLcPn9xPJrN8UVMGr9YLw",
  "key44": "2Rcpx8HMaC1ha5ZDjf5i1biTGyiYuaYjoX6PD936RqtJBZjXL5faFAz5K9No6e5zagDzAgqXVN3SGQ8F71KXfFD",
  "key45": "4ERptCUbpgEbpJgohW3zFbkKyjmSMtHTwjX4id2E3m9FnHMVZ8GjUpSQgKxJVrf21B94vdMWMG65uxNjX3NW4sGy",
  "key46": "4YvJR2pdU7Q3eC3zPwSumSuvsJ7yCzWQxf3XZZ2DUfTZ5EqWEryTMRaSYc8rWn2gFW5wt9D8ApJDwW8ftYVunwuv",
  "key47": "3aYnRp23fwuuizCKFHZ83DzbSzZA5kdpSKdfi6rubHF83SGc5jpQte5a2Q4s6hQv8346BDaA8w37jejGjnBTPDdm",
  "key48": "67NmfQ4RVgGVFvYZFSoVDVW3JUC7SLFfqkCPrx87CEAG6rdZhm6w5aKf2iirDURiuKP37DmErJbPRPVZZeHzzoM3",
  "key49": "26VQgUJgXDx9sx2xU3YiUPiRSkooJbQ9u3yQEVy8y7s7cQ47eVUwMcZXfbadq4g1MnCcmcrbpr3hjwwkToeWzW45"
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
