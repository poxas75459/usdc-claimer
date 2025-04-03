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
    "4WbuhQrfrsqhMQZNKpFouuzX5fCFWnqZZAJ9x3yzGDxpGFQRjkFaLrsqsyM7aKR7CopDVC8iijqLUS4XLUfS4zgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wmHkiqwJFWkJsDjqowPyC2Roypgbb76hAJADgHaF3gYd9MCqivU2VEqDSvTeh4AEmJLWYbfFZtxgnMx4b5u6vNH",
  "key1": "4WegSySzM1rzG1fkM2VohVgAR7c3f5PwXwTreenrgeXbXpPPheBKgrFAjcmYzXrZjSgv39UJPTRX6Y6eB8cSMoHf",
  "key2": "2qcL7tzPmSdn7YjJkrxMHqVuqTsqtFUZx5tYXximsQr31x5mRYtexW42XK5hEUu5uY48PM6fx5PRExF3dD3RDTP4",
  "key3": "59nb753SzLuzr5P4GKZhxXj4c1vd87t1XkT7qSFVGeZdbqFiJ6rEjwNnZdDdK29AFCtncdkiP8VAsVkBNEsJb5Bw",
  "key4": "2ncYvXWjTi2NcmBhUpTSnK77cuzvNgs2Nnnqc6f6Dhd6sPCep5K3FNJqD1VJu7fyKrqZ9p6bgYoekmFKGrTMU4Zw",
  "key5": "2BMxqKYkZPFC3PKsMZVQMZ3Y5xsjyuyeWRxpEmnQQhqz3HuFZEXDe4zMUCLpNKgBMMBrrrqvFWkZugzKacTLvrAM",
  "key6": "3NsnrfMM71FQXg6BkvqNtfiWv9asQZd5RfDdyBgRKEmRv7apkAFpnELzBMqMPXh8tmJhY5idXkwHXdCaHqUbrPe3",
  "key7": "46yWEq9QGKyqz37dCV3y58nuBE58FVpzU9RXaN5k9HHHprWmWb5q1c7a356BCZmt1zETd7aoHrZuiK2MCSGSuGgj",
  "key8": "4pj1dhujyFKYeZHUwrhSEjznwN7ytiLTohEtd1HVixUSc92hcifsx4PvTdVA9jjbV2QQt8aWcCJD8TNuiVvksr2y",
  "key9": "55rdZSuaEysrS8wAiw3V9gGuGTLvhfXhQ9C9DKrUge78AsUhuSpWPdLDivcXarZY5cKiVXNaKEkEumd2kLjbyQjC",
  "key10": "3cCJZvQKRbG5dkpFMD41hxd1MKMLHdE6TQwSHvykpPyEpCAoEP1JC8n6HdRSputZcvzeKXCCfRnAzo1ZaySxXkfN",
  "key11": "4RiUzoNUbsdQRM82wEizMYzDzKSipzD2D7FKXrkdPEHykPaUyoxp2NNykqFRQo63Hp1oJVK2rnsdXFfewjJhPZfH",
  "key12": "ZLkpbJRUfuQZD3HfCQSaVqBDGF3Da5HNoTHkjzVNtYkLmu9JzXV2pgZvYwGRifEyGSKNQTF5NDiGUpy5M7yi7ca",
  "key13": "5y2q3zW8Nr2GYbHEVFzMLHgSXJoCNhTSX9zjCctBHL2aR2seDVni8uhQpE2eXgxtBtgaNp272YTmwX3G7oQx4QVz",
  "key14": "rcSnH68uCf3Vnbm2wqLLeL6iWRHMDEKRYY92UwTiptMGLaHJNuZK7oYPFq55ogM5YipwWSdH6CTCv2DT8sWQnup",
  "key15": "iea1idmovJueMZ2RBrw3wcM5aCnbEpeBKMheuD2EPP4GjMNKR9UAkMZ8S9at3UPmwt54vcMxHaYqrz9wJ6szKLM",
  "key16": "aKksitY1WygX7Pu89a71JuEBVtcudX3UKG8dU7QNECXNU5h6AEZqBAdYz7HaMPBsak6ddgn5x6cWtDY7M9e3jYF",
  "key17": "vRmpBXR2VZkDXe9KRdypMpEjcjuzLzC2s1HBYqMWqc7kN5kQRqS5FC3n4LC5QGAw4ubgiGk8MLxpbzQoRSw61UB",
  "key18": "T6cb7ue7sGNnvmFME8jKmTS5RJLNmXbBhZ4hjnU8HcsS56CE2pS91qLr6bBSRcktb9GiBVJfBU3oGduV2MrUtjn",
  "key19": "D8m7XfVzHWW9S7bZqFcPDX6kF5e7NbiRpTeMK8CzBHZvv2sh7h8sDWZRAkAob6E2WF9YWBiWza786upJscangpi",
  "key20": "ny3ea7Sp3mF7y5f41wNXQ8Ei5cAnnoRTgzpevuJuGMz4UWiFheMAKdYMuJWt5Vzaui2rVYnHKPNF4UUYhS2QdwH",
  "key21": "5NwJAFYmVpQt9o2ueo1uZsHdi3QxDgNyA3VFCdHTza9YNiB4M4Y9oU9LhCk6JBcVSccFfuqhQeef6FoPKZwGPJz",
  "key22": "eJRjx6xfBfpGzJVtnheYHkvjasVzhawheAZPhwZhwcjp51Md5fbCxz56j8sN1iqe1A4681hFVyJGrtdTXxbK5GS",
  "key23": "5m5Hj8HGQoKDaHQd9ih7U2WohcfEbBKRrgBi25Qx7BoVUWGj6cnFZN5oXeZ8aokvMdFjwgKn7yFdEz1aPuGopVTf",
  "key24": "5KBq4hDpBMKwbjkPRx7neCMxDMWG8x1GjfMSM1VXp2i7kyc3Rdx1LEFLpuRzdTPR9StQR473m6caHUDiaxN3VSip",
  "key25": "A9wSMjPUmEdgDn3LrG1efuzz8Z2rvhsGSnNwLa6Y84THqQa91sdmY3t91D4Hx4BoimdsHqBmkYvDBAUndJPqMyr",
  "key26": "4AyxGjFvgHRRsbPjsXJWg7X7nZyycbvPfdYKDhtWZCGuqj4F9yGZX3dDG1iNeqbUXgHYuSFEeuz8kXsJgkgu4rqa",
  "key27": "QPhhGSaChuKGsk4rp9zou2PN1WKtkta1hpTR1kacULcfvDCiGmQMo4njzt2iQBHx9hihTXcPB6F7ir3LxC2uNvk",
  "key28": "4L5QMZGCnyVew83UqYC8nQa3faHUxmazaL9Rzd6quMSizrogtsxVZwoy58AkqKWJ5wQBQ8QDeR5XDFKHbotYK3SP",
  "key29": "43ZrELasAvHBcEUQ5PG9iawpSgehFa6PWhsEBk5nUYQ9faBrkm68wMf4TfdCH8EVvmV6zDMxmcydWy48nQMnmbJP",
  "key30": "4zKWXbFaEL3hKdxtYJrFEmE1orsUZT4j7z6UV2UBMXBijw3Ay8StATvLET1sZ6uasJHCgzMksvZKxGqVSdjLzjrb",
  "key31": "5ayeiEmUyQA4AduQaf8PGhq5iq7jmVut22ZkfqBC8jF6aBtucjmBesrnwP1KTupELMzwC5ELWbjVVMWeCGczr2tg",
  "key32": "WJb94WHTXSUwTdDjcsGYcZh7QHZCwrKEKt1h7u3fFZ2kZCzQPnzuYVRLZBrCgVJcTeft2YNBJ8jCdEv45TmvDPv",
  "key33": "amSrp2fX5jSCzqe4XL7LBHru15dkY8JTUo64mkbxiEjoP86qdy9gNkxdVtxUNUtnNnVkgg62nD1b4A6s3qxHnim",
  "key34": "33QLxQoTot43jVtiGUSKCv4pKEXfzcs8t9TrcsePa6Z6JaqAmtShUfd1aa1ak9xV3K8nTPpJXcxJ4frFK2VbxZqE",
  "key35": "5NQTLSL7s2Ff9ksWBRW6vg4n9wJYof5jiDq9MfTgbzgFbrekwewQbB797yyJP7dfQAiSAY9c6qFBpT7Va5Kc2FSM",
  "key36": "3ZwLjCchsqYZmHqWBeYkKffXmMC2PLrQvKmu4nEg4FyW7QWKazGQZqCQh1r7Qd9VnwtTLwvaRxCFX3V98W6Bw5eB",
  "key37": "4JNPbFqMSmXo5rgGkBQf6BAxWVWiFbQ9iprQbvEsBQAsRoQFyAF4CvPwSGGCP71wKtG7XyhqeHYcEuBucYH74yw4",
  "key38": "ounDtKtaTJCdL6xsdWkWj5SVXnQdkpUjeeGUTdduZHh3t9VAZAi2vSGvp6f7LtsVZJiCxXB4z1RSKzD7y5Rdx2G",
  "key39": "5xAxq3QDWZX2iGeqLxr7X29CutqxKNdP5ni5Nd7GboNh9QEAGvsv28xCTzQzKiCwBE8sfZEtLKMusAmgcADJg371",
  "key40": "5ggzCiBnZbnFDiAdyv9cZfAwcxAixGb5jmXTZrQ7E764bn1WifE5rzPAgFxvxQYApNmmVbPpen92GJkN3umbUeE6",
  "key41": "63Uu6fxaWvkEw14Cby6xrcyjq6pbZrAxeKF6nQiEURVrDy29u79SrbBE9WXXwYjSkWgFc3kVEGDA5CSA44wEkfkX",
  "key42": "2bYkhSR2F3P2F7Vwt7fKN3U55k56Dv74kChD1r7YS6nppvj6ekL4NjDmkwg8MRVSuPv6hnjGdMfEbGy47BtGznDb",
  "key43": "Diu3tcnPkuQxQP6Qqy6M32WhCRrHoqRi3wStJv1f9JHZBEGbTSRYuQP6DGk2pY8jkEuczgab62pRWhoFtCgo1BK",
  "key44": "4USoBnYXkSVkwL63wWX2QKS2jYpCfHixBPJ5enmP6UvsL5rzTgjHgAXM56AF8XpptWFxZswoF6JUwDtLC1nkYEfv",
  "key45": "2iZZEz5vVekC5PiKkqd2z9pW9mRYU8ZxNpLXTQCu28iB3Q2GYc2UGnp54qug6av79FpQpwA4mEikwDgDwUfvpHir",
  "key46": "ULjKoXE2MhZFqVq2nmPC1qdzhFyGPDaGXVczBabosbt9bU3GB31KWPSMy8P3MZAgp97yWUcacquqCTj7jfqoFsA",
  "key47": "3PiAKvwxbBM81WwqhpqtYcfSZrpz5Wia6aVyV15wzCGE7PD4Y8NKbmXFqeg9WVNuK8o5uCDrwTMNYJd7as2p6LGj",
  "key48": "64k1zHkALpVDQoCts6ztpqwsHdWxpb9yinpfTDK6BNd1jyHH9ByD8qrYXpMnYEmqYXuRz8dqKNgkbVXb8GDjTEBJ"
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
