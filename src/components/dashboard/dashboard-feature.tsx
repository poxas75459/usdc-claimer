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
    "2zzwGCLZMuoA7woW3mgVoTULz5prrAniatL1hKGLBTNhevZNFWrS1YA2WGoq6MeWreT2Ff2rYtpcmcizMw4UKrdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7hcTeXYitYXeXsCPiRKth6iPA9EtpHaeMSk8XLEFvm8Ai65y9Xp6apoqBG6YQdhVE3ZAwLinEk4R1doTYeCmYmE",
  "key1": "XTkvgxdtmNMDPCkqDwCtSsBn2GzqKLd9yNpr8z41ouG6BZoMbgyM3kfddgGEVEVp7Wkznp7eZwcVbzn9avRjPV1",
  "key2": "TKpGBgKYdER1w2AYN1SAweG1skYQozPuYrJL7up44b2Sr8aCN1Edd7YnqPDvGemdVCYYkrkhteAnGBxZ2kRpHs4",
  "key3": "5EzFYnCqtSYdP9oXHu7enFjznwnHxwrTxnmhNgNNViExpWaL48ZBorLPd5D4DSofzAMDBCSZLHwmMoRv2UY4zFXA",
  "key4": "2usRFy9TqmBjHdCQ5pi5fWmLXGHShjwvkomuACipHH8dUSL6bmiiT4xvewC7qCHCFMgtDnMimA4ZARPj5eQ9ip9t",
  "key5": "49dGr6oCSqrSWnpm4H9D913E7TVfRLcRbirFukdw2bEYRTfGVndL3hk5XP1uMxzYRgZdDnN4DAZFjiMsz3utxXkk",
  "key6": "5f81Nii1sdakGB69bwTb8PTsvSs7TMcdBHt4Jo7PYqedVUWU2rD5xdsoRaDTTQUM1PVSVbTzPSiLh4wpBGoJK7xB",
  "key7": "3fu2hXQ9w65Kk8qYqLPm7fe3S1fkTRv2dJ8shvSMzVTNAFFL2UvYsBxgspyEdHdizaf6y782LqovDRMNVYHBUK3Y",
  "key8": "3jTgKg7szL4X5Vf8QMoHpjfVWcxELaowKFM6pgg3aVQeMKujMw22js5qzSPo3WcVmCC93WS7VNymN1rWau6td4dd",
  "key9": "5aUhPkcJZF59f1r2nS2qR4G6XsrgGPTL6PbtE7wWiqvYwLshbpZnDW831RyCqZ7h93KuY4HNtQaB3hk2pQvkMKCS",
  "key10": "5HgnPuHjujXZYVu2EXmn9qfg7kmgWZV6HFzbS6WNrhnsuVWsBqJUvwEe1VPCKj5sfFkGnoGSPwbENAxUpdNS2T5B",
  "key11": "5Bmxa6SRa6nwWuGnRvGcpM2w8FoGS84sq8EFk93Rp415sKoawTvUg9JU2Cpc3guxX7L5Ey6dFKqjWGvj5Q9W36nF",
  "key12": "5keqgG9chEz6LmpW2UZZgwo1dRnWHJrL2J3GPVyw62QtE5V3TFXXirwpRAPe8knUewKCy9F9PRrCpd9KREegRdRM",
  "key13": "3t9XW2UM8dq5EyYoyzLASgL44AUn2J47AoerXyuTW54H65LwzqzaRV9ynqCfdf71T5Eh7dwXMSgxQytryCcbPPQ",
  "key14": "5wSQLiSPAipweQj9FhxJ5ogZro7YnCbG61JgUcrKoqLPnadURcFohP5sLkNU3qUsxUjN6Azvw1xnZTdQigkfc1tR",
  "key15": "Jd6LBBLUJiMznpSt3wfGC9RKZdSHHoPBgKpGApS9tJ7PNbBsmB1Kbsa89eg6ugG7MXwkvSyRAoZV2NqNXwyp3PU",
  "key16": "4Yq8ps7yAgs8TLaFuia2wHu7zpsHAUNKuariPkQ98zevGuzERXXUcUF4vxiqqebuUfRGmKesSG59hH5YD468GQQa",
  "key17": "44ssUkqtpazSy3udUzT2e4a1bjqKCsgJfKdA3vTduPB7CHaTQ56XygmpNaU6c1pcRwRJnQCTPbecnjhPz9KTinWo",
  "key18": "62nv6enfpb1ET7QM63x3tBYaBe5hsx7YS8VZCYELbYC6E4XQAb4hy63Gjtz8SFtQmSpx3tY2d5D8d2DEuKehbTEF",
  "key19": "Qczm5VrvG5BzmGNAzVEvL1eAycFJ6LxCyteeiaucCNHLjKyPRF9xECRV5TgLV6VN8KwYnb4kj1uZhjfKHuMwXRd",
  "key20": "32SsTyB6uPucaKjfiaMx6QSxacVzVSHZ5qEB3Q7Z5LStpeLLLYcwyg8btesJHo7gh9kk1pP9aSELewYh79TFQkBi",
  "key21": "65ti5bsTG4eFJSnxZ5Y1mDr36cKHLsdNG6aeTC7BWDoKhSVf6qVYnKJ1nEz68TKMsLKan6JDcpGHyfsd83NKUYp7",
  "key22": "32cP37TkrBS1dbB5zRtf8M6mcTrAMXXpeCy7VGMuTLgFudchW6B1PyMEjfF3UUujYgJVtzKnKN3LMupVCMTbPYpE",
  "key23": "4T38YywdkMZYxH3RPuxioEnagfy5Y9g3LayV46hBLfSxPP1x4FhPpFQPY4PQRzg7qvnPSaHp5dYHRjJfvmoZtz75",
  "key24": "4VnwEnPYmTKFmQuejVJ2dLSGBprNPvPpH8SNAh7DVvuPF89PpptrJUqazrkubfZV5pJwH9VukituNcC5jK26QrLz",
  "key25": "3eBREXMqpF5Gwa9vQDGVyW3GyEHD667XBMe2MvrkoHsfYBwyXfii3t8qEJfd7YSsQxgZ6FyXjhz615pdrWC7xJkV",
  "key26": "2MdHaKd9wxWAsQZuGEpJaSHXETLC42Rp4NmvoveXy1p69Z7EssfPkkFc2Dg6H7Eh4xwGC8A55rCwbAS24KUiKfth",
  "key27": "3ioqH8H3n8roWR2PLNXzBFa4RCroivbYs3CzEfbUZdaZZrQS7uA8S7Vdn2PP7AXc2US5CTAe366hSLDZ1WJ3e8U1",
  "key28": "2GUHFbeM1rqDstTYXVVYoBEzfWX4Gk6jmyFrta5JNhaQoSyjFkZKiCrGRekmAVVoXRZ3K5dwKWcqwqbD6GjUzhGc",
  "key29": "4JNUkQSdHhWTUcqzj45BmnSH7bbvh2Hkeb8LBoswANL5YJq5evS2GCcvubQP7xyqxmjXo3tiAiUw5GWMrpo6Lgob",
  "key30": "Ccic4Bv9hwuwvEon1f8NdrD6HeNJDogzvL4KXAJ3YgXEY8uJgBKw9E5zzf4GN1E4eSxQ2d34b9JtDaL8vK9DPVV",
  "key31": "Zi8UUNGjvc4dDHticZCu4tWJo5rncrroB44R6WpszH6fe3YoNcxz8EnXvcoXH2qkD4DTqJwvmGGhzYJ1SedEZss",
  "key32": "1F55RUB4hVnoXggwAswXLHF4D8DPmmXqiqqYvxr5ANfEpXdSABruHuoqunu9mtsWtbrrB6Yzdq6AM23wtU1YJtA",
  "key33": "43q9zv7ScJudQitHNzM9PrjsikgmTEUCnLgyuKVzwyixRPn8jfyzbBf6YyUDcXarGauWmEZmdGt7Pm6Rv2Su2xfZ",
  "key34": "5Ee2sYZwoRWqkD817sacCcg3b7nbPc9aqf4aLEJK9n6vND6wZt4apaV41uUUhyyU9KJwbmXgShX1nez36pWiqPwe",
  "key35": "2SJmzizVfD31T9J9ngDiJ7bjR97oeUQBdWgLockxayJpxHJ9eQb8SQtFHFVUveZsLyUJufTNAEw3tZd9p4CTNS7Z",
  "key36": "395GT4u5xYFYDN9bahSfD6os1QgUsM2KpmXEWwHEEiH5TBLMrDiEiybmU4h3AKV6g9szSj4s9XZEkBMd9sVdUPwn",
  "key37": "sv8ZXfV8CEWZzTBAdCkFpfpZ2UcQh7y37NEU3SBBRhnP1c9gBBSzQnoKUU5vPFJh3oBTwFFkvkaC6TAhqicT2CJ",
  "key38": "2u26cbe1XznbitDY9x1jtYJ4aFVziqPJYNTVdhrngDrs1BEQYYogJPb94UECK5v7rNTZCKF8PhLQxWH8KFcJJKJz",
  "key39": "4ZxgYVruaMADpjUenaz3zHtNQFZd4UwvYXbyNEhZcqi5RbFVJfX1a7HPefrmuC21KG8ymBnf544NF7HgZtFiWoRb",
  "key40": "2oY7Jk5rtq1G5y79aLV7iMzX3PHTMmcndrvdWtPAtbPgQtTRtKRRgzuwLoyi75zqUUghFwxsbDUs13c5vE6MrVEo",
  "key41": "2PSb2BEMbU5sFT4qGWLJso1yrwwxq7i3BoA3XZpdCwpNQCjNMRWqFyVmGXCBrKUddpw8w6NU1g4nCcTfnNVtuxwJ",
  "key42": "3SrM5x7meyJ1vFLX6EUazagkjZJU2iTo52mvUHUk81A8wB3KJdxkZpmYAhVvJ2NSFqx5KzsUCzYySbWRKSDDctvK",
  "key43": "43bDmwa5qAvcrCWv2ZmG7HLgEgL7bLuMJu2NWEHWcqPpenbxEqaiPkNTqfvvAxaoaN6Vd4y3XZVM9j8B36RoomYK",
  "key44": "3mvJdmJqZcYGPQe3xNaeBwT98Ubnqi3GY55WjTzmkvWgasmDdeRTozhLaqHpmR2X2sQx8Uzw8zZMcNS5KvjsCvMn",
  "key45": "5JieRNGLkjzarhCmDHpCfLvquzKZu2CAVt5CAKHezc62YgT2wkpdCKFpgMVx52TwgxvPD2cU6TEqnDK6fw6iLWf4",
  "key46": "66X7phiEC9zdEU16FaQvWvcBKfZqKrVeeLd4ZSZjGdET1vHpX3bfS6BmfQzDtXTiSrDcvMNnWDwX6smDjkxXrci9",
  "key47": "3pTtvisrbNACutkg1MTS7Epj9ESFHvuktrTGEx3jkV3FEHDAE8ahFyWSHJH8Z5MVSJZFFFHJsG6jLZf6g76pUPsy",
  "key48": "3Reb6pDjauBQZL9DaGU4m9opDdpw4XLGfEXQQhARRqjCbsCCftXsUaytYWJp7GRnYjSkrq8u5aoW215rf8eMyFac",
  "key49": "5tUSn1DuUWdGkFDZpmaohRP8J5GhZBCbhtbai6osbh16oJVNsGhwR1n5fbVqEUvNVWuV98QUiWgPmejRBEwxFFYZ"
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
