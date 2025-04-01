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
    "3K7ixuSE1ooy9wkUYzCzoyk1c4EGvBaz79qHqqveQz1AHwy1KNsoFwHmcVvTjfwi67NzC4HD6i96E1RKeBfHaHcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NdXVnR32kVPiGCvQNW9Rh1AHq7WdxwWPaDfMedkYSsuc2SC92xLUnvq4pXEmTkqqEScPF4onHLFChZnsFDsWZkG",
  "key1": "4DwuSsoPpLu7KcHWhMHvuxpnHFEUuupWU19cSKcp6tZvgcMb4XoEi5zSYf4fCJQv4A6641Qy3ToNWQc7Xuhars6m",
  "key2": "3ipp9aUfDHgbQ7RnkbMteERYityvXVWFAp6n7VGrjGwKyTXLti8FFmcXW3wWtrFBj95HuYrqbuSvutCWRsfmMAq8",
  "key3": "3DkxPVHG1uYMmgipoubepiPMZFLkUvZtsqqNJydJhZXj4RzyohF3yzgHyCWXZu17BaMQEHdYAZoBSf3V5Qr438pg",
  "key4": "4Z3ULPm2XD1d4gWG5YWEzpQMimkvCcJKZmzRvjTdzR91kaqcbnTZtpRWr9JJ236dxTK8aYjz4ixVnVUPW3WeBnTr",
  "key5": "JFYEosdB2LtkddAyzkdyBUEpRUPhacXnm2PfMdLWndT53orvw6NFePxshLBr3itZyjVTr4yFkkcUVhxrFV1Q46H",
  "key6": "3jS7DYxfKgZv99kHYRxYMJyH8Y972vw3xuA6FxqQ3N8KozwhyaoismJogfF4gyvEDvNWHL8cfM9HmiFn4mQshyp3",
  "key7": "2b6xCmhU5hFzmcvuRWRhcBNMfbSoo2C8kaXSQpAfLdp2o5mN7wTePPfXwqmmZdUhgp4q7S45JWTABASP3WDtEHdj",
  "key8": "5PuMR2qawZ2FLDM5rXSxbNZRCNt2hCySADy1cWMnjrmVQqhotCoQVnTHJSqRQFxQ5UwQWSvz3QB1P2UX8Fv5MfPW",
  "key9": "2iXTpC3WjRS1mu4T5C6AnPceutaBoiCR4uZE1vRbX6PqF9vBeDJmRpxL6EBAvsb3zAUddvLYQ8Y7sDBTZ8YH1kxp",
  "key10": "528jkAAbHjMTnqyn7fX8GRe4V5MdR6ZqYx3vW8B5Gc9852HpTVXXztndHpUNwBdUoB6oya3YWwqagYPxJUfji6XR",
  "key11": "4zZ5tvka5L7mJKp3NMi8VJh5AsnYVCpGf3vLgnF2SwankhofWgrbkzUGBXkcDynhHh3YwG4xqQ9SKTHSJnZpCB45",
  "key12": "3sTRLPcq5bpGpmD22V9H2pPwgb3EsDNNSMgDqFhpBY3sqDUGuaw8fraVVxCCZegMyHjC1WN3xm27kLaK3zCdTy4r",
  "key13": "62VyXsNRQXv6Pkw2gtR7G97B1kgpES1vRHeKDxfb7X1aUpKwNa5BUHtH87a89PptQhbZMww6Y1M4ZqgdHscc8gq3",
  "key14": "43jaZ2b7kB1z4LKzRtU1AQFCvrQwPeSK9HSPMTBPdCFXYzNT4L7QMB9vxfQBE4rnhZoDhaMGsWQk1F2ZDbmt9eTk",
  "key15": "2p64Vh2ZJN9bmBvtBF2WKj1yyBoWvhrJiheaAFapd58N9z4ZFZAiGXGqi2PRQQkEEpwo4TpqsH9fbkL178JVR2GA",
  "key16": "5yB8oFDAzcAV1wkroqLWk4AVZfC1jPdAU7QyyQWeveYVEoQ7jtNfSbFy5mtTDgkgKAfMgGnbN6M5mLCr7ifCepRd",
  "key17": "39D5MCzqGYtHAAmt4dgDFpQnMSxfaZtfkx4vA4CrcnkzyqLFThrxzqgZXx4VoVpxMbjTPKvXttzMNcGNvjy4wE4Z",
  "key18": "3kdCdqskgRMKMHZH1Zrpc5v1Cn8Kd18sektrik9cYzMTnacrupmryUqrYKLdufpLnZLfuZa35V6hZeq2cWKQNKsR",
  "key19": "BAEDKUgydnXydZz2Ugk8wkwjqTAoErCbnFnosV5nsVRwVY3giwhyTjCU4RE3g6uEMWJrm8uHLRLkugiWA2Jntdk",
  "key20": "33yYdnk6a3gwkbZedwXWpF1oBojoMHVsoTLBAusWRtfnj9TmFx418B4PhaxdPmysMrE4sm6bS3qZK9zoY5DPVJZL",
  "key21": "31FNdJNvoCUQSTR5czP2oW7gYS74ryDEJnjGSxkZDXb1q4GyyNtAuZGJxBDv8pgBpNPLqWYwU5aw26UgeRAW81nG",
  "key22": "2qW6c5EFmfS7HpzSUD7A2buq7zxVqUzYCt6fqhaqNp5WhL8RwdEj5adR7MUVstkReBMJ3b51GBP3RGwEBDeKwsnj",
  "key23": "2iW5ejUSEcsvqN5enHHgTikVXJMgR732VxZkc9FuU1G2rhxLJKbNfbTsmon6wXj9RQfzhPKCBDEdVNpGLns4zr6F",
  "key24": "4HyfihvJuZnGhQagdxoPRVbyo3aqZkn14AF9eS8ezmdHvnYsku9tdmj5Y2KoYMz73HExh9rSB27CSwjRQTyhviKk",
  "key25": "N7NUR7EgyvWHq4c7xfe7NAq2bBXWUCygTamwHvyredRP28pqNxTNrXx5sWMASoqG6LfTNHZibYK2mLrnry11ahg",
  "key26": "4cBrNwVCfVfjd2odBYh46efkFCXroZsprJS5AJeHUMNkrRcSxPmFFaAgq6RezUMsLigxsaf96FRzi7ZTaRb9rr5W",
  "key27": "NVJvR9yRBPhkNsqhJXBg1dDQrv8PHrQWQaMyciFC4e1u5HoyhEnDytYjrPpikkqEVi8Yw6RGCjjtvHNaBYmkcvi",
  "key28": "3ZdxzCFpEWFUYdeLSo3r2oS8LELFEtvegoMVPEB5gARmZKLgNEefXEPByKmkCmxSNgs6W6hPCS1MKPJNUBBSsMc8",
  "key29": "3NEwdArTip87UZ1ajwPBEbhjeBJmYZLZFF4C4D7Vd7FwT8Afcoq6ZLgdFyRzfvENyGYqezuzcDzXUXsRuo9Wg7s3",
  "key30": "5KvnGXDzXJzhSqNr91DyQg1HhTThynyTqj3YduYKKHuV7dCHVE7H2SnL5cWe59Uv8AxTfw1VPtDog65djQJRvSJ1",
  "key31": "64XHHm1pmUKcrX7crnkeq7BBUUuiigE6CRepDzCESmpe9GyctNZjF7LJSbZkciKqhttphPH3xzzfTQYQnbPtncYm",
  "key32": "3feH1r3JhrYSmRp48HGFXyUGwdx96m8o8Ry7DHE5FfLG1SvcAS98mwHRfqkyRfu5fHqW1AmS8Q9eZJwCDQKVeubL",
  "key33": "5qJzxP1RJ5ChkeCnW2crbphA8QEAnV93vNs85oVxq9q8sq31AuXxgKGKdo2WtCX2Lcs8wJa5GH5wJnQjLoNYcdJc",
  "key34": "3UA16unSJUigagexZGEGmpdrbLyqasKADmYC2fyTcxjCjzUkPPKKPbyh5MoGqPbEf7c9fG2aybkCvWHNAvDNZdjr",
  "key35": "5eS6hyQoqDkhXoRnHAjjysrG9zuxXTF2YDfvo31kPDybLCXyFveqgFVe8vxfePZNMm2WT3b6NqDDyBKbc2fM2bgr",
  "key36": "2TtFCK1whtAuWQqEpU6YR4aQWGdBT7SqpixhzU3nc2Prmm9RLhT1PAQz78pr8GC7s8eH2GS6y3Xcc8KaocHwnGbD",
  "key37": "363iXhWxtdwjqqUQt8RUitZ8Usw5Lg11nhAW451PREeJwzR8ZyYD2YvqzzPvb1WK69YNagpKFwMxNCHmqyYoT2GX",
  "key38": "3mCbsAPwmygKKQfhZamm41pEAbUSVzKt1ABP73eji5hWinXFdgCQsjPCPB8JnmL385JGcM2woPYsTKLPyeFwK1CU",
  "key39": "2QQ7WRcRrmrfe3Jgcpw88aRVeBL3TihRwUmRNP9kz5oSTYb6qMb2wwEEXEeJeiMf1Fm2vHmqma6aSJoZrPGPQ4ZP",
  "key40": "owfYqvjtVpXFpmmqQHs9tLqbNizQFPRHSU4DRNGcqSv9LmguuaoyHhe4zWKjLTu6S9zgzBd4WQ2RR41FR4o5LQf",
  "key41": "4JK6BjwTaHwY8mia9kpP4GZNz5FDFM1eMBiGiNqJSnZdJgMPkQZNTh8fC77A8E1BZ9JhgU2qv39yJcXn5S7CR6ax",
  "key42": "3oNXi7FGV2yp7TWuzh2W73RUH4LqkWTADH4eUoRgw6BQLuCFrSx8NucsgA8u7No7rQYMSiTEbjasF79SrJVZFdyk",
  "key43": "3UM69meZpwWMiGM4tgV6n5GwGNtJ6Ytn7dP8q22JSBbpTn9iZHrAsfhvmg8KT8kb3btHU6La5XVTJ1NJeuWhncTL",
  "key44": "4NSkpQrJk8s4TkBFgNxcXErSfndxCyuhBZcDfsnY2bazunnrkqYb5MXeN2pLTDLwKxWqCUtBE6FrBUtDi4cG3nQb",
  "key45": "2zVDhNvD2cQ9dVyDK7oWuFAyHbFpWHRrRTpeE92z3hvHx63s6ad2JfPChM1kecZZDHxewo4gMy4wUDxJeRh2nLTz"
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
