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
    "qtSbY4Qtpr2G62rQ3cTxJqxHY1k44TmggRzj9YnSndLHNyjajP2MJqKBjJw77fXpZP5ENo7rERp6MBidEkKumRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aDK97nRrHVH8GjXnx9uiUbhdX2B1EvLTKeMkWsGZcCGubEdLQDJss7HV3awsiSeWUttbD6oRuFvb3FzSbLZGzL7",
  "key1": "5KWCnjaz29uEsgaQCi1bSdukZ4qrfZWAYioSUbzGb2dvHTJWfhob2Ebc8YS1d7nWCHivTrpBdBafZFBGYvnNYEXa",
  "key2": "4FgiopC53eSDsioK1xEbtxyNsmMn1kXvdLVYeHrpCs1rixmnSzSApm9d3HKWJuPk87Jo7V4yShLnSPuVMDD4zp1i",
  "key3": "3emyq2XHxDKwZ29jQJAqCsDmJbBsjqZAQJM1bWR4qj2g3E9GRYgcSgYh2wWwsSpvD6Pgqpz1CEpYkoMifNMJSPx7",
  "key4": "5UxsyLXHxpkgmULWeJwvo6hDtFCC74fsV7zGuq2AFSKRdxEXVCU8DwV1m4UBteuawehzRdgb3L4tdZLYJbtCECaK",
  "key5": "28qPK2q6yfzoyieJtD9ZfCtxssxe3S3zgLrWhST11vNr7xEGG6vtVpKB4YkqoadZhaoGTW7dmL971YifyMEfRoi4",
  "key6": "2t61o6nBqtDFckc1HntFUvjwwQLnT9ZUqk8bGENYB8bgK2NCvP1xH6ckwqK9zeJMeXAQLBQk7BDoYxeTA5GjZTGh",
  "key7": "5CbNM1AkTLuDWMSmE3PYkBusmfqFKf84G6Lh4r7QvNk3H6pGRSXBAbbA8AA4GS1LgbcugWdrj7nThpW1apEubdQP",
  "key8": "4HV4WjqiYhmnwffmGKB8d5Cjuebpvsf1TGMFoHVEUbH2rTgxHa7S1iNe2bczEa1NvSLDAWQS6CWoPzLfp4yXinj1",
  "key9": "66kP9YfmU4KYdgDSVaU1p1BjvtsmYhEgaCYGwxKaC8hARSPLhijnKdA8WnmadsRVHTKb7vNuENwjup4kaEWu8TpZ",
  "key10": "4TsteH9n5FezYEGyQE3Spux1SAumb4tQ3HinfcULpKUNe6zBWQLjjkQQyb8wKayrFkaphYL248cJnhHgEK8pjg7R",
  "key11": "2fHZgmzqPsot84iRJFxZDCpykDb1hhsizUk1EKyPzgCv3Dqrc77Uc22YXs3WX68VGwcrMLRuNra6UpwLJxV61osa",
  "key12": "3sjYkdJHNehtTNYV2JCrnLA2wXgmKm3kMqk1FVAZ7fwLvFvmDLw51Hu1a3q5tQ86HsRoBuLoduACVQ8xMyFuwcMH",
  "key13": "GL6eUKPNb9m8gwc5cYgGFzA3suXLHpVFgwjzEpDATPdcnNtuGBMnhqnoTLMhrRQKcTFU6gey7E9tyzxSG6JYLVc",
  "key14": "3Dvv6L2BRk9pNDF4eSHNBPPmYcq8BzJQfg3QpphtMkph1kbXS6YRmT7eLrJceqjsFBjwnSfKCNps4WMfDS5HGPQq",
  "key15": "2Boahqw7nkzHrcb9DvuQEaBUMB1xu8z1LKsRZsPHPi1vJLBcAW9gWEMRX1981qMxiyV1qvtk4oGHmiH9CyqC8qn9",
  "key16": "31C72suaYPCu7s9Pf2czoicnC7ZA5BRn15GqsScZDznXY3SFzUGPKMByTw4LYCZa5hhk4HE4vsqnJuRnum5YNAmK",
  "key17": "57fJLSuPp1pXG3SwC63tX6PEs1Hbp4kS8sM5TfKsHp2wLDt6GkJy38LoSACFkwLLJ48AZJANhRzRa4WqhrXMojK7",
  "key18": "3yh99kxEiAeAj8WneEcsv1JvLsYUi2AJaTUoAweS7msyHx9XgK5W8cFXEN6A8jV7MnPpbysu737UiqET9Lagwd2H",
  "key19": "5tY5LTvnF1NrbVj186DGT6KaXosy2iCzGrnVC5EqP7Ai8BdrWK8QK4uvSkQ5ZgeafZBWUkYvnqQZbMfipMDL36R9",
  "key20": "2MNgmWwvLhFyAgDP53A9BMdUSaABaeD2dWEFkxWDPJF1tUzFJQU41idG77m4NpxqNe6xZGzmvT3ryxD4YLCjsHUW",
  "key21": "5Meu8aNLgy9CEpXsFmBWhHkULt2sj2CwaN1W1eejahxE9sBD6BnHUYiVWTojo5HKCGeijiDRK1jXekkUJYPdhyF9",
  "key22": "2TKkQHYNVeycAwmBWbZw5VFL33HujuShnC2TmLRQDB4HzM2u8iy6gKoCwd3NgDYkr83wMH1ugnFBdKsH2uWrSd5r",
  "key23": "oVAYw2sBvBnMQAKbtpa3kRSGfSJB2XCDPYchXrP7vJe5HV2ZDHoVzsnKGd3RYLeybheZ7MtFz2WRnuSCzd4pPGR",
  "key24": "4YrHdfDNYR7aKtdhk2Geq9bzGQhoaWaA7QHxAYauF12dcVCdaD9bHQLKsKkn5ztYhfYY9og6KnGXccRtuJtH8hRB",
  "key25": "3HizLxzB6PgTk6Q2MbP9hQKZnpPUrYKrrtTzFRNBaFtWfZAS45mD38jxvMDRDniZTmTaoZsEjcRt2Rh9swWAqF1f",
  "key26": "38PcLQceNuKSrDFfuV3wYnGrXLeuJHoxQSwLmXeMCQhpaLs2WZh5xqSv4EpNhFEccdwAAmAi3S3vX792dfLLjD1n",
  "key27": "3rsCEaHpmAHa4URXdXYA4gxEszkarXMXgVxXLwVQauvfH4iwRsZqMVF5bqQyTz3sASHWVLsHubT1iym3jaizu7nA",
  "key28": "3BExiSrEgC1BMTFpMP6PAE6R7AJmj8r3gtkDDGP8CwBRiG7QCML1kzdKRHiBPwJVLbKHjTCXUAoEfDuAKMMsEvUV",
  "key29": "4bUaP3aQdhNGgedzA8qdaurN9CL6UL4i4swUYgg98mJLDoYGndJpgt6TJNTrifW5yBfjPf4Pu6o9kqQgq7WAPMGi",
  "key30": "3tKKmt1TXPoPWgbYP6LPvcWtAQBm3D5UayNyoznGUXAQLyMpb5fECGy3uHwWj7UgsivAbESi3Gd1Wx7RyBCX2gjM",
  "key31": "tU699rfPzLjyS64QtfFc13kxnTpx5wxY9pELub7Pt3hUrJ85se7QTgtozhBFW6PUgwF9ZqVxvVNg7h31BUENg2W",
  "key32": "HJRSggtb8VxB4vk2QRa5gAsMHyLoYMs4v1gkNmxTE2fkgYxRmGvtmH3gtvjTXDTheha8oDjnmWV75JsuV62Y1bo",
  "key33": "2Xg3r3yN8nSLL35gdiSZDwcBQdwTHQePv8Z8SFnNb9YeKyG1G7GMSWfjQEmmCaC91DYy2xMs5NLo1gzTya58cNYE",
  "key34": "2o8TvB9WokLNhnB4diRPmNGJfC3PY2kScWsqcYBoYW4VpbnqmiKFQHmH662qTgmUT9ZpPH3Z86jBwX4zJvsRH53q",
  "key35": "5RdfXVTEwfZqokEJ8DddS35NePm4CkbVQtWTzdEASBkRpgQjeqbYtqfWzWpE2gYSEFjqBdeCoMLqYfVUadqniKPN",
  "key36": "4NKKwFqQF1Kwub7QRz4KipdpGM5dh9XmmTmhY5szbrNkDtwRE35bnGJgWddUrwjp6spqP4LzoT7KqcyVbmepBZue"
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
