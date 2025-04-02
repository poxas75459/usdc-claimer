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
    "5HW3r1QB2MAKH6RYKGsCDsEZPmqM3CHJ8BUiSTtJw1ftcEix1hUGQVonxEmwdLb4q1BEUpFGRYqJV3iAVg4Bn9Y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWdop2N8Z8nmFy91PfduWtmbDfXHdxLNSbY3kgumD3rjRGcDw34nWdqsVcpj7rLZ8AcUdcvk4kUs8vRsZTaYD3z",
  "key1": "3B4zYFnjTWDrP9ANAarXvttkjpPPc9PwA1euFDFpR7PjsR736cv21WDxp99pfyBwwu2C1o1ETKHFT1Do6h9Uz34B",
  "key2": "3GA23Bn4Un8vvk4nCXC71UyVmfc91bGZUX4QpnFPW6K6yzt8ZSD4E6TmV8SBmqdX3z7kqZbEtfWXjRJTYiVd2UCY",
  "key3": "2Lj7BpiSd2qxiShWmtJzoKURWswSeMQ3mmNafNDJoADww6tyxKgkjB61iRsozFCNzuHAoHyoRoT2mjQd3PuiYNfK",
  "key4": "45ZXY48B1wQr2prAcF2HQX4nNvXQVewyBtYpDos54Y9CUtRTt7zQ6XQNDWDUHZgcMaZm3Sviskjj8j4C7MYmB5nX",
  "key5": "HUfN7fxRKBBavhFqtE5YqG35B4D6us6dcZ7ZL12eUWYjkACaj199prkpDTw96XpzuhSyMqqy1iiFeNtJp4wMiJN",
  "key6": "2AVnLxqmjR64bE1STHsUBWymEfhYSwfX3mkWf1XE1145WBqtwTSkFk4aBPtXkdfi9Lc8PzXSPYQ7jVLjzLVaZMd8",
  "key7": "2do6f8eU2buj7CwodGkYQgyJK5rUR3As9sHMxRVXH8UB5r1PVPxCw3j6GBPXGg7eMQf1CgrpZjBJgVC959dGeYf8",
  "key8": "3ckyFyvvZATTKVvVEuanDijMX7wdn6HvCzArpTjdCSe3yHako33eee7Fcudj67ZJVPNu486s5B4AowRahwk6fYns",
  "key9": "65dEsi23RfymjWKJwt1QbCsiaZuFAsUQVz5Cp43XjPvmDPerE4fgEEgE41BeuFMhMFUxg747ynMoCJvJxCWZrLPx",
  "key10": "s6FFZY5MK7UZfysvWrZuaQ3anr5PqWn9Dm9e6ayxwokLGExsbcn7nBGJunNesrYvEgTDXDnnm2c2b6B9YPkh6m9",
  "key11": "62KWd4XyhiVHaPZKEXEFGMWaz3yE8Kkq1vramqYi5uS8cHwRHuCu8aEpqFVj1AnYaxHKWXaauTVEadPZBXUCzMQ1",
  "key12": "5nup38NXvdr7NvDaRbiy2HVzyRL39sXyZQP5iJqnCCX5ibst7YnGuYbxmC2DAdh8KdxmaqB5cuQJwiZ8VWHNnxLy",
  "key13": "UY5JSBjGGN3mmAe1bxFCvzeYfSEo7KDkXaKNgoWVXuW5GmQUY8UWD4PyPyz2vxPwQwpv8kUMcw7zGZPtSxq938h",
  "key14": "9XbnV5S7CJNNTo2wmJzR3G7L2oHsGXsWrS1ee8FKm7c1iUmKgeC1iCdg1oPFxXhxoLJR6qrviQa9eEkUvA8QAP6",
  "key15": "4z4k3cpU7GC9m8zqbQd6fPRBuxbnRPHovh8wHctKZJWGwijtKg4GouYiz7D7Xy7U9N9dHSbTvtgEMvT18M2LbRJ1",
  "key16": "2dNT1PstcSQBqkSs54LPHET4DEYNJYjdHguV5HfYECNsiK98N8T4xnesBFb5UabLG24pkG11ZUJW2YRg4oSmkKTj",
  "key17": "2QyjNC6jLxC2wpUrgKtTJMrngvRaNKGvgAgXyR2J3YAGxP54UFUs9N1arVAGT8HsMWxGMsMqErBgbFDk66ZNTWsY",
  "key18": "2RDY2FoaNHraLjcznshFgoqhvEQj9b2MXwLoyN6DpGBcmkJ3523CCDTEqadRUFUoinWqruhMoFaQBcsW94iMS61k",
  "key19": "56DUuDj7Xtngskjfsho3fcV4uaPHEsV4KqgdH6DiURY7Uspwj7zNp8wKUVuYW87GZ3mMLiSrbxE97wq93FTHmKkv",
  "key20": "33HUk3opZp2mfssvL9DNDpgs2hzt4BkkDXCDtzhbsQnTou8BCSUAc7aUw9FQirMMqor6Q2i1s5vPZzPPBLa5C1S9",
  "key21": "4tMSQR3G3x7thmYLaePrjZtpmRo44Yug4pFNZzdf9RmWf3h4FXAo9Lr7pJzkWKm35Kptyb9pbW61TTvw6WrghgD2",
  "key22": "5KhKLw1EZG5eK3AHtMoDasNzkYPQjD7iXzKY4qMyE8AoWE67idBJkFWdk2TLGwpUPEGqgZKbb1T8F8qERYo42WMV",
  "key23": "2XJeXiw5RF1fauDZYm5Cz7GqaYiEc2M2emFmi3R3hLDFZWVMgfLPuM285jdthy6CcmBG1rjEHUvEwHRVXkWAb7fC",
  "key24": "5KqszmBWTtsNyXUW9qpeHtLxtgb1GpP5GuGYVGHsQFy7fUfJps2EWRTsB2RXyg9WCqWWjszqAghKyjcFtP2svKT1",
  "key25": "3fkHa7UPmHYnjBqqFSvMq45K4Y9hgpboaQzqMGpKCZ62tbn8UjmU3Bf6shSxfPqwtWFpysSnLBeCNJQQzGYPMBsy",
  "key26": "3qyLhtM4rx17jmAWh3tSh9PvZhK3yifDkgJmXrvCu9EjF6et2wDzdC1RWAZc52rq1Gorbd4xmYaA4UYrSYQyVdAp",
  "key27": "4wcvscfLenNDEXfdi6y1SuxUf4kwRjW5Bg3En3eezT9YdvG56Fy56PkNz1EoCt7oS1AEJavHHper4LySGfa7PB4R",
  "key28": "2WtgArfq5kdjRdrNKZ58QGLRLGv3T2bGy2uHS7iATn6YaHsNekq4WxyGqKgZ8zPKCyQ4SoUGwzLev7pekUsdkYgS",
  "key29": "49kYUwicKsxxj1UtFttRH9Rqe2ANw4o5Rtg7a6jJApCyQiErUPTEcsCd4w5rgzdGJuRopHWJEZVLaKfAPhwm87z5",
  "key30": "4ey8LuTngUPRtsdNnLiRBMyasZcoixzfnGYaArTCtYwbo2GNqPLLKp7hLvZ42cRWzXdFj32xfXbB3Qe7yZmcsppa",
  "key31": "5aAw9cBa5a4qi3zQYDHbvyMR94j1vrKKF3tTiyvx17tQXJpaNQNFFvpsJXPk2Yym2ye2WAdpB7BkgpMJzUd8dsVy",
  "key32": "ySvLYMLvptWG7BRXFs22xyk4wyvr87bVJdSdzW5pPp96W3B82PMxWprpXaPHQ4xVnoF9khbzoq9hs5cnKaYj1c3",
  "key33": "4SYge6oHZcT1NRRXnDT8m16ut5gcXhbmfeXGY5tYSytUAP2FuaUx1FQJWEXqtcu8fbvAznt4ufTw8y7rG8vYaaoM",
  "key34": "sPe4KjpV6ser9rvX4EkePGTBw6Sp6wehfXXWsoSKF1gUmMhkSdfGxzAy7zc5Q4kazFJt4j2XG3bdkNauCSAWcqk",
  "key35": "2x6HCW4yGpFvjwkHYx4tswxVoQEV315rqfzPzfqN3Fmcqx1fxP24SR94j7vn9UfumGjbD2BoMRhc4kah87LGmNie",
  "key36": "3XuM3PmmjjEP4B4ArcodkMuXFZFNBNcdxubV5N5wR6vtJr3iN7b3KjJpRwzZuda3bUqjQMaEsY2V9QkmcPXN2bnr",
  "key37": "2jUSXnPfpEabZknHsUtj1BwvJLAtcFx6TGZKbTHkQs6UZSvNxS134w2HAkW2fbGYzABbZMtrBGXHYJbVWk1bCuj6",
  "key38": "5FoDJreU7YqjFcbMkqjhe8xhivefEkPoTUgYaDLzm3GDpD4k5CoyHssRtsV6PGMuRWEXxH5QgHP92iXsT34EUGjN",
  "key39": "2Juy48D4oBz3hXnvTUEP5A3Zz5rieZ2EhgWgTRw5fMcsuCHJeiAHsheQv7Y3Fx5trUFJCY7m1rcWC5NzvggYZJFd",
  "key40": "5j7FLAJBnze2NFYy4MMLwirUyypGPDaCvPDSvtKMdSuRYYqGjEjDRSnePvgzBUP7SECoSo6GoWbyxfvF7qanXXzo",
  "key41": "2e3fyVycPTWGhBVtFpVrCw2j41iVgXqMNFAtRgqs75oZnhqYMzJZajTUd1Y8pxVkderVbAL7VkfPn2edXMGBV6Mg",
  "key42": "44149XT6EBxmi4A8NRUGpgVkxrSxVwBKjV8gKGPJPrmcPghhBBnBdp4EhsXHKTYH94gBQvn6C2ZrvF39AzcgZTVL",
  "key43": "3mK8huVtpCouLHHBqwtxqCvRsDAeAQYWgj4PW9b1p5UXMb6m7ZbdQumgeEqdeKbGQhudcPk7ZnNACX1cMXS54xcw",
  "key44": "4Ltqk86H6vKNsEdAMtyygou2c6pe1Mbmudw1HtQXh5Louy2GhCc3JWwroWhCZKoNwiCECRwB6LhRdfJ829R1extR"
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
