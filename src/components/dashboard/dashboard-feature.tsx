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
    "28G1h1AUenXcLkxVKNRxgzXF4XxQZZeQpqMxHE7FfWWpNSGyy9acjc9dJ7s3NyrCQhVsxT37wygLE4hreWB4sk2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zhCJDfCNd6ttSxYW4wDzy7TtPrx6agbuuMhxEAuJyJwEZ6LiqqQHtYx2TLJmaXF6GgNeNCbkPm7dE3iDdCtvaxq",
  "key1": "423rEZTVb8CYpzemgNKq5P4wjWa4ph5pjoiQWkNpJTopDqiB5izXb7vYRySmXqVgWwGFMuk78uNULqp9uiCQSGBy",
  "key2": "4jmSpZAfJk3s5ZsvXrLac1x4D1uy3PA8Aw2WRkUWiKitubZq87VdXprocHwT3iw4GeV6nu4xVcfjUkkcNPmkjagP",
  "key3": "3XQoEveMTuaCC2yG6LUKqYawyztZoAUkXNegH7H4w1TefZNNWRdR9PJYJKodPVWjs3HS1guSAwDdUq153AU2N8Qk",
  "key4": "4oHiwMRP6bzPqEVigdA9p3wXTg28UJrBGwTR865Bbt6fpwCdQGDZsX3wMqVS71vFnzqheVEXKRYg7LhR758kRRxJ",
  "key5": "5YyAWweKUrYyi8n1ddJNZa1mCynBhFJwAjyaepFyFqnp92RrWgAdsPYmXo8m1how9YGbEzwnkYq5A9o33gCGdfce",
  "key6": "7rK1RdMujmZj1Q6eEfXWDXZQh6EicgWYea2J54XE1xfM1kywjeYShNShC7hNZP8t2BxcicNiWj2cqnjNmyZoFjh",
  "key7": "UVUcSX51qc8HfRPuRLmZfHJqeaaDD2ZVhB66sghToaj7qmWxGhHUJs7fEuZEVUDmo1t3BucjvwP8vRrkfDGqkUX",
  "key8": "5Lp7iLMYu9Mgsrq9RvmwnEXhjq9vwaaHxBo5bjRciq5hFXGvVBBHT1DiV98cuu8t6cdN9BbGhNyFheazRWomL68Y",
  "key9": "c4qHVH4qjDruBL8Vr7fizYoAX2GFWxKWnnKKcAfwBBzPuxjRBebZEvaGVf5hebfkP8izJesKM4f1T7ieWHEVpGk",
  "key10": "4ay7ViUVzYFR4iWAQ3syz8suNT5MQxkG6mxNXDZhBEM6R7MamvZF3rveiiro3nGHs8Ej7UbomCkedFbQRajgBVTZ",
  "key11": "4WHqu2Qjip9yZLRukDwcnde2onXySMUpXX3UokAyC66Eqoj9mzLbriaoAFzkRga9JBKSPney1aDpmQbsJg2Y1ytT",
  "key12": "5y4THof6YsQjrPHX9fQU4kFEgDnjwQxbSVTpRaxxrVr6yxNuYYZVYcGnmuMrJzfSLwoMSetwT4RDcTPifHwbRTWN",
  "key13": "5RgUeDEKXzdZwA4oewXipMZeBixFTsD4Q7yRGtgpC9xzmCBf7R585SrATKMB3app9UpLc7deFKRxojuffhq6Trs4",
  "key14": "5vxHjhGFMXGK4Sq6F3isJAw1ptELjLFao735xgCxLXPw3w5mfMphNVy8B69XPr5MFPCZC3JnStVBUySJpNq9cMLL",
  "key15": "294bQFrS6qUAGSuSKpfzpuaJTJfenuT4nvbf4hEMZRkz5wghWpHH8VGHkXDh9eUjR38EDtxWroZVhSdvVf5QntSS",
  "key16": "4ZBhmUBAK8zzwvSrMQn3QiWLhsvfa1MeZDnWf9w87yuZr475mT4KtMPrmfo5WN4QDDdAjYDL242wdbvbUiWcdN3o",
  "key17": "4WdNqTfJYqPBUCxrUwPHKHRbH8YNZBMkpfEzkuAgXq31JY7VaeyuFsnMcpdhSN2BNKmCgonkswY44Uwv3QPmL25e",
  "key18": "33Lp6bzfFZp3AXXAPwfoG79hBiXhzYLJKUpeQke48cnZCCbmUmxteMSeFBgjss92w2Le4MJgnUMecVB4Qmmj1Pjr",
  "key19": "2Dc8VtSGb7C7STdvhNUwdakfkVaNpLvwRrscfAVH9Egyemi3BeCjyZFVSXR3QojCQp8EpYpDR7v57HiAk6RF3ekt",
  "key20": "4hjZrmR6oK7iMtuQfjvopsEUfr473y5eBC5scZBb8cQzm7grdYSfUVxBMUs2NiMAsJFNNhdEMJwo6p2TWzrFFDm1",
  "key21": "3byiwyVZtpJP5NoTqW77DkiX74iKebEJygdB3Yn25poSbHWQ2C6foTtBmsEbdHDWZdMpgFRyrcpXQxdd6GV66RMw",
  "key22": "3WFiCNM8K5HLPSdYU2XUWJN7za6ueC2zxMGwXsM5ZLtbkoUbrBuqBYLRhQMBoofQ3wtEGtbsQvH3shLH6zj1LL9u",
  "key23": "3zV78ccqP9bKr9FZCCWGVvXR9uyMonpd1NxWq3MxXQ7Ye7ecToBR3bmMuH7i5mT4qXXLi7Gk2JYe54DrcskuGjkY",
  "key24": "2E4CQGxpafUXPqpJDFiDhmSqtr8jJdfbUsUpnYHMo6KkQYeAGjMAUZUcUQajhvev88xkQNLAns61DUzfrmXDyZYS",
  "key25": "3iMh5WVozj7GDcFXQ6UTKWqVWmzKSg6Ef7WdadLURZ6DsU5DStSp8UA6oLmibJcqDASNrx9doMRyzuXqgG9sihLu",
  "key26": "3xB3915NVQxbp4faw5ENVd6gV18tEbXvNrb57rHHtJsop82BtGLtWqh9LF3WaBCSmxtgMEF7UVNXG75ox2ysDgs3",
  "key27": "2aGjKS82F9GMa73ajsQvfauz7J1BTTSXBe6cx3eP4dDTgeCGCXBWAUsnEogJPXHUQJiZnQWHJEgF9WkQhYmh39mx",
  "key28": "5cddh9fXRimfKQCFzQyXcJHn1W9kYLiKyDBHqbc7HzSeZELMqr5H9GmLLPq6R3gVgGjAZemufVufhsoYE5PPyii4",
  "key29": "Lh4syAhChDMLEpipfhMCr1KGkLuV7tqhvBzEotToTepqonFKuUo35LgtvevJ8uS51fAotAA7RFe75CHu8ngL5Aw",
  "key30": "3JWmGudpJSQiZCnAY5z4AQzyqQEGJLpgYi4UYP51jx15gqHz5N94bZeE3BmHvvnKc7fC7gxHDPquu1ZNS7wsdbB1",
  "key31": "2EhYUkqQ1d6WGxmyduL8V4o5PFZT1oYdQ3kzSpRyY18u1FdqNNkzo3JJjBvNyFHzyetfHeZkK1gKc2j2Uos5j9kR",
  "key32": "gKU5mLRmb3AP9X8qhXFGT4xQEuJWMfNVDFFvbxZS17TEMcsxeKGj7GvpHe1yPwpBtWTEhQSfPNa4QkcCxCzCqME",
  "key33": "2LsntD3coZvDsqng2c2BwqGSnqW7iScxLrb8saxchnjjPRWCbHuVxTKwAavqFYMN9hircYj9fLW9D8p6BQrbxohJ",
  "key34": "41Fp4xo2sSXPhGLooD6GCuKG5ABGPBhLtpLuz8KL9RXmteVg9JUckfDMcUccTqXpcKJ2uBQemU4u5LTnhs6HyRPP",
  "key35": "4rocXxBGFkDYFLyLWgmKeDqWGYsfi8hjWyKjBeT4SgUArwDhbMrpP5i5DENzEvQb66174JHTUnwXfDAj39cVfYFm",
  "key36": "2nMDrvbqi1hWs5Jo9NUvP66p13ST9q8WrgrZwCywGYPkQWBxD1bvvvajJwhbcizh75ftzQGx4EhuCjDpYj4uPsfB",
  "key37": "5oJ8k6155F3n6hh8amjMbcRmaSA5x5Us6JfhVNLDFh8BXKqEBqLbvkzxHg9ojns6RBFU5oEbvjB7fTdQjfGmUw6H",
  "key38": "4oKkgpV3ubRNLK5nxzYuMK6Ehr6xJPyTY5ErK9qGsyPkxjF9qn8YuGp6Sppoowwf5x4ZyrJd6cYwDhvjhxQwUYGc",
  "key39": "owAXEucEznTR53P5dy62ZXoZaJsLgM9DexyLAqHMTMKKZFN3T1TgZfRgjkoYYQa8JjbyQZp8NsQ5kYEFDManNqN",
  "key40": "3KgNSvXPG1hHifp4H3K3WFcGrfHJSyDdWKfW81zX4wZau54wYkVpvrZTxcrU22bWYcvWzEUCbjpcqEiiWrsbnp12",
  "key41": "4CT5ebj6RAzVEY2Grw8kvawPAFG4sBSoFsExnLgyNowrbB56jeEAR452sheqUdFtaJGdRJ5tc1Ch5Xna4KMmpHk9",
  "key42": "cbtAgwhjRn7yArjjw3UpaVBDBS5ZxgMKBVVzmGbAgJ3mcRj9NjYYsU3mi97y3hv4Ct1JdUBmbQLVBPkEYqaVYCB",
  "key43": "6bpGjGN8375yMCpq9TTtbrvx95nbPd2KYsoGu51dNgPYzAHp3G61QRgzFoY9Y1n3y2hbQTeiZEoiDT5eTtgoTN7",
  "key44": "tSFnRKVU48YSisUMkh1qzaciAhatWSktZxC2UguZQW3maoqFEVV3jNHRT3avW2wuwDmujNd7KuGQXzoeBhSBGRq",
  "key45": "kMfiVBT4zD4bsFDctCmPKxV38ah3nf9BEh1XLrz1y9TJ3gywNW4rEKTGcKWnunQxadh3i3AmcBZ6qXD3zis8LGB",
  "key46": "2F1wmkFwvFrCL2PMHy8h7UHEtpUAkqaYg1EkoZf1r5d77D8u48wVV5UHSiyoinCYLhP7u7DmXkUU9xVR3d6Sz6eU"
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
