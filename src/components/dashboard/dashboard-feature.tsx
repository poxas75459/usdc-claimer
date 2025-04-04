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
    "3HJFdgRBDw288yCwmrfRDzSENoU2Wbpo815KNbpYWGZd85inL9pmC7djPHqxeirWc9U9VfUmZuULHsjcLsqN8oMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BifWiEBXgRRH2aE5jzth2kneW8HLt2i1xu6xNHhoPRDwog4TL5ihe3vEkNtaWUahJRZobuU22YnhQj9wJ2LbbY7",
  "key1": "2e3eGNtqGa4E3vPpzH7ymgrweSEZ2Kn9DMsr5s5iMkx1w78jtQ82e3RjFwJRfPZFUM3vwpzsm9VtY7EGeY3N6Znt",
  "key2": "4VokhDiNGZN2GR4j2a5evkFL9iDwoow9Txf3cdcWmmNN33SPhmgfGRjiBZwdU9MWCQRJnMJ2VK8fvf5RbB4UmoKM",
  "key3": "5pRi3Gw8F8Qg4Hy25UaKXiZQaer7L4Zmes3PK44s56BbJpCRf8WDZmiwXtyj58XGBy19vLS6eJxGyPjMMRbAv8vj",
  "key4": "4BsNG118KwZrCHKmFVwZBw9rvvef7QXJeWxhi4jSxMGcUfX4QSahG4Rc1pWwkS1nQnT9iQXbhBgTmJ8HjNuy8A3L",
  "key5": "3ce8umxDjMtxTXVJDY9UzCwDU9WLgDKbeCimBysPZra64R9LES3kHVitFoZQ6uZD1e9vTHEqhTVpU45sPV6CftED",
  "key6": "4KhzDrK1pPhkEMKrM9qeSPcq9ZrqRbVbe6x5ZjoaTjXWi6geopDf1S9McACsTwEPjSMbuVSQjyBeyonEbCCufe8d",
  "key7": "5pHrdawWfD8agdezdSwTY8HJrAkscYtJwTTccijj3meSPz5yeL6sjk44X6Sr9TBjYnZpPTbWTkPFhiB1WpBqvhyq",
  "key8": "676vycpfWC3Egp5LuDjGmAigBdB9gSxMGZoE1TYJfz5FHr3hkypMEnqDWXkWyjdoyfQmKo1o6Kx8HsgvHhedJEgb",
  "key9": "565RpSmUtbbE1aEoyDBhwTHfYNPdFQva3TEZ72aKpVfer6ebyPgWBe1eSW5jpbKBEfmUbsMDXjRVxKqRsWePkyo3",
  "key10": "6FR2JRMDHR23nqBTEEjeRq7jo5MNwxxvsiG2aNoQKwvGGH7i2NRvVaRcfJxQHJjWrGar6ZYeTgfEU7WHaV2BAs5",
  "key11": "5t1V5Q5CKA25V2YwtLgK46eaQDhnhLuZ4ihsyCfBSXA4CW3RbuUonKU54u1fZQXaTyGPjF87zJLcwwsUafP5TuvR",
  "key12": "5r8zvysMgWxdAPoRPUe9VtgEJvrs9b3NuoFEUhDDGbPw2ZwtMyC7Ay2zpPkhk3w3RcuLYQfNvPmAofg6aRM8kx9h",
  "key13": "48e4DDYKkoZbSoLAQSN1LaLefDU2f82bTiYDB1sfFn6MMGKaqPFs8TtG4iMc9nHxKwoCj5mqmcQRsuHrammgRogV",
  "key14": "2remL6urNrYUAoA3Bt9V6vb8sSkjnXAGH3dvV5oD1oFhADxEnUKT7fwgExqAhkBytPyemHAagJYrNkSJtVqHTvvq",
  "key15": "5QUtiyjBLrPM67XXWHmJbDS3myPS12A12n1xBfVSb5XiWo4yDoNZ8C1hKFi35EwpGE4ChgxFQtYipiECUt4GtmBo",
  "key16": "2urk41Zr8ghPm5MuaPMQc92FNNEeTpLppUBLYfAPXM5y2NqbgxcYXhap5gu8vadghMF9d3C1CjUJXMkhnDjesGZJ",
  "key17": "62H8N5irYDUZtcoxfo1DC1uJPZsCTDL3qCBXd6M3xjaQuZCi5XGMQTVQmmjHPWRowkdhQmNkXAtyp7RRkduH1yHk",
  "key18": "4W8D4Yhmf7ekxchf7H94hMDEUqK94xodLjXtyb9HcvJLKMtMh58hDNY5h3L9H4Y8RsGZF273o3LGAREf68FQEKTV",
  "key19": "2urAFZptEWCBFrpaz9GxwPTsRwm4eMxTazfN3gdfM58aFTc2JhTQucZtgJ2WWuD6Am1LKv1YJLoGG1MWBJvY37Rn",
  "key20": "3pbuZoqr4KETYAbwEaqCGt9RPXvNYjcrfPyF2tSwymDxpGKukXngwyYkoqU2iSEjo7B7WfpjVzEseX6L8wNE6otr",
  "key21": "PWYhCdCHM6FKdSFoYu2fnA7AqT7NKsx86QxXoJ1qLZVoWriaofNc74k57uLgebigCJd2Q2sTH1zHMYEbxBvy4uT",
  "key22": "3nmomx5txATxZrWLoiRAmSw8BNkYafD2DU2ANxAnQHzuhVrapfQEA5ZpFV35rasGP8z9kneYdB9BENzAbc9drmRP",
  "key23": "2WVh92e53Ax9NmmU4iFhqeS28c8V38iCrtmSF1o7SVhFQdo6pbBzHmerer2u1vPMsM7NZX17WgjXCN14DJd1QgBn",
  "key24": "4ZVxHnP7T1JuMpQ7t3bvPoVfxGdzigaVFqr5cgEjo2CYg9j57VsMJZh4C7iE8ZvJeemQtq1PWPP3KQoSLxHjCDbE",
  "key25": "3e389HXCX8xegUCX3wKPFrbU4odq1NGMYZReKvHyNiiERwDbdKZhw1QgVT5nYavnkChN2xLE4A7FFQxTGF4biGDF",
  "key26": "2gkqC5cE7aNqzXAsgJBcxuFAoUQ3Jvh5r1HF23RBgB1e8QpGk1DSsgYqSmAiPSPcEH92h3n8GjDmSE7dERtcEWn",
  "key27": "5UwGAx1zp78tfXApoTq9VGsB5Ee5RAnVFuZ2fq6mHtMTgdwzWXVNYRhpjgzaCQPStEV2awGRsXuo1PibRaW7YJFx",
  "key28": "63wTBUaaBQeer2kJntZe3zDiTyCFRP11tJ2N9e1QVKwgeXBjAc1o4G3hegJ1vSfEuqUa3vDRU8zQPHzjkC6u35dB",
  "key29": "34sLT5dTVkVcX31DfmfPyQNcmKtyrab7amwoUZAaXTD9pgmDZkDL7i52VmMmfMqjKiTppDh7beNUp55MtJMgSFRP",
  "key30": "2iaJhmsprL4RjrySRRsc8YbUwpP3oo4A5md2FEPQyqYFviGf3qimYjXo5A8N2qZYykVMQjfkq8gdFu4GcngNozDe",
  "key31": "5RJ9fMCXykTKUNSjggWLzbystKutuHTbGNZtrsSmDB1YN6rjhLzpLGTVLTAudorVN77TxU6sYZwcjnVrnhrxVieA",
  "key32": "51N5N3YLjtKU7kBT3eJCb1srF5tw42GV97MzCsRWjrucDzTshAZXf3cfSeVKxg7LZuKqAqjgGCefoZEWaDBv5WP6",
  "key33": "m8q7KjnvjMSRVarmwYF3cPReLpH9MCPgKpYbaRLajNSb3jgiptsH81rYC78W3mwT9Q9wmPNGGrP2oMxMxy1FYfk",
  "key34": "LEiWnoPtRCiT9JDwchaKSyax2CrZzVpNWjQmVJBreXcoXf9wKxFTZSSMVxsFcjvPdU4kogkSV7hvBiAghGuK158",
  "key35": "2ECuwPjB96Zqj1HLc1zo2d9Ab7Ny7ZYjt1tfihvMZ4fN9ySeM8ydqRkNeUkaL1p7PG7LfjPP5ERm2jmtT3XscV75",
  "key36": "3ZcoZBGZ5gh9Ah7XsHWwsm45q71fN1CDwNkctKmEYfMzyE68Rfg5aj8n1BJkn3mziqnRmgBBfbrPmBfF9Ly9uybH",
  "key37": "3H1rhn98R4eaJbp2BrPXSThMPB7wWBR3cZ5o6JFZRRU5ayMZCSpTxz9UnnE4ryRvr6RGVBcjmoNggR1dWKLmQjwo",
  "key38": "2aNFhhs71NrSTqZVz1sQkgqEUvaLQv8AJiQ7QXRntFH6Nd3MKSr5qQPP1DfY3xDHavduWD61sCRqTcXR2XxLJ7hY",
  "key39": "v2H1fnEccPum7kXrCrBKeAkxxoEpG54PLjtX6jnAGQ7yie2s4zp4bxSSN2AXBa94yiajmYFECE4Zom82BTXtC5U",
  "key40": "2r9h7xmw1qMkLkPQ6mBe5pvpPTXbATgLHQJS1o3Z4zgJfHvWxP8VejfmkNDBC8N2V5R5vy8z7eyNrb3bykhgjhgW",
  "key41": "2BK11XhxXRduuowXG75AwLK6Jv9aioHG9qfsitKhpCdfVSobqNJsK2nBmN7eFz7rM2yKDSGAWh4gAYDHPV5ar8ZU",
  "key42": "3NuYohFW3kUjTUacifVqzzPpWC4BxyfdYjDuBMR1NVocYMZx8nnoQWbmcjamZunwTiFmocb3AgZuEuazVjwUkYws"
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
