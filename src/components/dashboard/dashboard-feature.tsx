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
    "xbyBqhHhEkyodzYG8KoJ7jWQvPaMjihzH3EW9vhsFP7QQKM8DRQfnhLZs5seS5wze4FQLQsLjxkQTUPFC4eFaiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qs8MH9pYAkzmahohDvdHHU9V6dPcgkuDxxCk4dVQTedeEZvcPEUoM6qmr7ZtGGKvHj9P9TBpjMPwiQRcmDsTqCF",
  "key1": "iUha6uSLUGN7LWYMqKhSMu9hSXBXY7EAypraX5zE5TPuV55t8yeDh4bPCf32CMfJoqr7WeCHUb2QSGviZu5G3pp",
  "key2": "2ocPgFGwtZfwNXBaDH3U4vx4qEGYAomiuWaeqaEtGRxZrY4LtTkS9c3M9LvSi2AL4q2eMmiJjhYFvGvi434vsKPc",
  "key3": "2MbbNazkeTsi4JonvrMrcofhBJNmnej3Bfa6xRtw54ATkw6RwY5XZbbFWFBvc5Pwcg1djEfjHsMzK6L8DQ4hxy7u",
  "key4": "5eJdjg9YvBasPdMcTfmZCduBB5G3tAxY8Z9mnwffcNW1UsGmZxHaiAZqGRmAeyQWH5reqPZ9Eh6qi7So1U2sdMM6",
  "key5": "43NTEPWgWhZig8p48Uxp72dDdtQz2MQ1zDFFoovt3nzLz6KYScaoV3jZB79KKCzfCVaNYKn2X6kT4jMNPjHjaBEa",
  "key6": "3Q5FytUxuuDts44oozJnnPuEjsA3exty7MuXM7DuNf2HAU35raAFE6YqeJiZ6XbcrsYfrPJw5E6M8k8bF45jWpzA",
  "key7": "4Ay8P1bGBwGQw9mve6j2XtyUt8pFk1LusKath9UztyqHDXMAuQfqkBe7gXFK78aQyTRcDJLAjYJizZWNTbShsm7E",
  "key8": "5oeNyL2YJizUq2VmYeXM2RyYiuGXGAMhD2NJwJWuHaYdrAWSVtzUc5F4TsDbguG7hkjfnsnwfurXptZLe6Gymq7o",
  "key9": "E6qgEVDmyArp2TCkiAxMddUR45NGvGktaME2ZSnY9s3UfbK9W1XN3GYCzo8xBawDdoEXGD8QXMcr9phQq3Mp1k8",
  "key10": "4WBCvFsSJbgXzHuwdovFtKhM9bUAUFwKnKMQNWSGFk83quqUjxdRrJDjqWMDhgRMjjzLeSQ6buhfKLzcXrwuBC9R",
  "key11": "29XZvi44KJeVYTga6NkQcXRwdDznXGE7j5Tr4aqNu6PdKjaMQtk1Mzu8ar5UrJnvt5zvdj6phfLDXgX3pVmtwo9r",
  "key12": "3shBhDBnRWeiXNCXDnvSqr9rpxRQXXbbKHjV8f45Lbpi3XdvBJmQhRdjMWPFfHCwsMKTamkHWXpMEakN5JAKNcVQ",
  "key13": "5NRSmdd6EAWTg2R9CdQuEepsg5Z5ncbZ6pde6EjwURyapjy4FuYM2LYfMDynTFr2sMsG5JXt8uHnvoCpEaxf9BJy",
  "key14": "465qsX2ztd3GfJ1v5VWHkSFrqsxXXgBDgFaCyRAVWMdi3RQC7aRFQLPMtun1giygdL5Sp5cFkJ9AdToBF9yc3Qkh",
  "key15": "5Ya7sEMHb8Qzz6xJZUg4N3tA2faBujJMxyAvD41d5spM3ZbYk2C7mjHFSaVep5TaHZfqpuYfiBRY4JEYG2jWeuA3",
  "key16": "4FdmrA7yivEt5B8muenp3rxx7FbaLFrAXVXEF3nzdFFrZUrE5C832w3ZwTxbguYHnD7oS2gq3t6HcLfuWytGuMve",
  "key17": "2jEpuLY7KByfCkFMAERyFQXLddmgN4qBA7kQBVn38ZWL5fFRREr4g68QbAGyfGuoq2ZdyxTPWaXCDZ36N2qF6VWn",
  "key18": "5rqYGhhNm5jSPN6u1Dyz6MrKx7iFyVmqZQKu2zDN8CtWEQJLxZ8NEnbsFMLrsnfBL6GMuVi9iGgNBmNyXoK8u9YC",
  "key19": "4XZ6aJNf3makFuP5r4WUdfmM3bab5xvnU6BczTdKPxJeV6Ag1Edcn7QKEkKXjWKUdXSjiAEGea4JU38ge9apdxfG",
  "key20": "21kHpHrtc3ejuZqJSYpn6zLaW7psvNgsCaKnhXnZYutnjo6KH4J1SzZSJ1atYUPvvtheLpxMsvfgggUnzSSspEDv",
  "key21": "48EmgKfq32kpdC6jQj8chw4FhgbKGoEs71vS8ZLFiFUodDtn44RCgD5UyipzBsDMWphiLXjQfGwVe4k36mquS8Qc",
  "key22": "23aHXVCY71PiVu8z5cct1NksKNbWJzWEhcDCzdCPVDQ6cJqtRbLfmEDgfDV1sZUHZDyFtfDLmoKKCCArSdG1R8gf",
  "key23": "5ADFte4TrgZNokJH9LqJpi8oEawyJBPBKgR6xMtagj8gEXTDdHbKzSsnzvjkZCypb8GKiKWXveakAZY1ecBUtzUy",
  "key24": "5VmXQFVnjVrJV6GgEqF52jP9s9Gvm8fbHWgSW6MC8Mkwm26k1ztASuwYCeY8nXcLrckwZCrWcwPnKExDywB46JhC",
  "key25": "iCLRJgTMp8MkRjpm8TvL9GYBCcyWUgbSzE6DojKLLR2YETSSdYHvtRdDRV2UU1y9P1itGVVLirERr68F43V7VZj",
  "key26": "2zfaRFTsStW9En1FJn5MBaQi2UrPk1UsqiqL8BFGdUY6ZVaJ2t9cKUPYczU7Wz3U9yj4zfK7ix2hfAXY2f9Viaaz",
  "key27": "2gPv5LVq7RgpgBYDAczhkp52CePsXp1R959rFaHtB11cjHi1oQTrCNYxiqAnbV5Logp7Ngk5PyK1WPPWaazJmcjh",
  "key28": "53uQhonmo1Z5KAcpAJDPnoHexRDen1Ys6QUU6rtyMzXEptGXE529rKb6162wi5EScFdMUUP4Vfr1hr5a8QeHUZq2",
  "key29": "24gusX9ukKQjGQDAqFjdDtFMePc1eB4BkacMq7c7SSF5tuehTVykGYHQtVGc2u7biaM1tH1P3kKfp8j7xpRK95TG",
  "key30": "37TXYxyYJ3EeSih3tGu9w9jVK19eWnRw1KAMp5ewUtssJb9xJYLoMXMXMa5GfJu1d3DAeJ22jm9ytAocrDDPkmDJ",
  "key31": "4GvHCVVsNJPosxLWNj6bV28mw28M382kQT1tvikMoDYEdvdxNYwupAiBHREwZMN9RGqnHkcf9XdX7d1fkcbpiELn",
  "key32": "SwymQUQcgdU4zhk4oHB6ezQ62fyaS9MqWBa5RRKKtvQubidZPwnbRrTZGpYGEY5T7151GtZQxJLwBfMS9uoCx39",
  "key33": "2QQYkAUerwceJK3qT8mRFtofiXN3kvUBvAzA9CcudYidqq9LkM1MRkTgP4UXSxiDNU5M6nUGGhQtioAPFgaM5jxo",
  "key34": "W2kzDS946hYtw5V6HU4LdSmjmqx1Tfa2wLQDkQaD3BJUPrHCqBTyQUWiutwMmVwYH6UqjB5mthqhURhXwiG8A4u",
  "key35": "2L4SUk5Cam59jkZcFHtTpmmyK1qY2L1y8AhJoneRrjWVUk7JrnEbuF2oy4J1SnpQBBkjE11j4kbrPK1tfjPuXsZf",
  "key36": "5QDoJweGC7q7txDbc1QRLg13C6eMCAioA3R6cgTzZpSPQTCoHFyJ8nAWt4hMKyurBHGJe5xRPFMZbbxyaYGAmiwK",
  "key37": "fqwwsQf7dw8QuAnuwMxb7fL86EK9cTh7jQaVDrG7DEh6jaBe4Jqeb7YUmoPHzeLPvAZx7ALzS2Ufjogwabba8qR",
  "key38": "zPhiPf3z71p3qCJmmhUyK3kgFhSUAudN1DZoRnQ66XLwxbFGbRB1Jqi9Y7jqNp8dDLDzq85QmF4qJPh6k2FNUVz",
  "key39": "2ff5Pppjt3RogPU9PpJnKXNoSCKg9NGJak7juQgXMqVpSSo1iMiu1X126peaSqX5MBE7pf6gg8Bxx5xzkkDWTgPT",
  "key40": "3qGyerky7RBojBjcCBkrXt6c5psLFQFdsE5sUj5u3UARThw4K6jXDweFbcHLvHfo7gRzoX2GefArrZUgUPk9i4PX",
  "key41": "63LfHfidhipFYrksjgH8VA4ASm232WqzthuEHNQTdExRsxwtHgryBCvAEtNUYcECUyypoeL6FEcEgb2gkCVTyVpn",
  "key42": "gHugE1C2FC4d5NgA3w184ZZcCs7okZE5J1MJNJXaYW62hDjjMiewc1a746HYQWvNMELuAPgTiNeGTxQGUTBedHv",
  "key43": "4VSur3MMHyWZNMi2tv8aNp4MqPbQ29qpddyHohDnDMqVNoAifbNJp1PHYcJdo7nz93ePeamCxzAB3aSsdAGSbmC"
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
