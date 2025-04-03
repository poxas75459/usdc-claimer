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
    "4m56sAeXSFAbjamNeyr7yewQUAfWB7Mt4RTTj157WqAaxdNPBU64PgaTbxpuNuuqcVqMZeY3WYBZD2SRqsyKd94w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GdEDQ1Boj2rzSgZ3PPTkibqq4VSq7nNddtsmNEw1px3zeEDKsKvbZ6qPUKm8NTVtXDAuBsqCijS4eqKT11L7Jog",
  "key1": "4kCvTWgwNctwo7pC5XY9AyVCaTWvUccxzfUJCuidTdNRhGXdzrQzfYLohtC7Ghw6ctCJBjfyD9s9ZJC71oY3nk3P",
  "key2": "TAKJQUoMeNUZprjRh9gj1rv4bzKSXbvEkhBFUTY6huHLj2QN2j2evBEMi8QSuoVzDdKwp7zjLof2un8Q2CHTiem",
  "key3": "rsxiUWxKPE3sgEwKvCeCFvG36Sx4ahxkvqDnYV974ugCym1JcGtHueAi5qDSp2a7yCRxEzEJ7RZAWV6FSNkJF4A",
  "key4": "5q4X7xypT6M1GvUXiwgBoPEYMxuc2e7MN1c6TsePrpyyajwYaFYucqKKQ3KLxYTJWnDdeRujdt4j1yarHvCZZoyw",
  "key5": "H1ZCwZAwUrGUYE6qQCzBvDeePXXa55sedCrhvVxSAcQVgBNAN4q6que9G6gmVPdwa7TypeWAQHR6rDJKTnDSmAD",
  "key6": "MoUh7TRSp1p7kYVB6qZprZ2jkc98cJ8PJQPYro14rVfEEPzGESb1WAkgJPeh3vrN19zYKshawmC9G1cojjraxUB",
  "key7": "2hxLD394KpD5wTDx74tBVeyNrUjLsED4UyaUkrEF2A1w5fdu8w1k4HYSvjtUkjEqUbXLu272qYdnBmoCuqtRguP3",
  "key8": "vBqtQhJE7ycuPwt249N3tQvbdTLjzPN8pQkc6cuDJs6tqa1A1rVNzTWFHon6oFyFDEjWnCjEbHSQtDdfkmij4sW",
  "key9": "3B9Cr6Z4sw3UHr8kPDEY65QAFhLWAg4G3yuEgVHDwYoXFcZKiTDvpg5pZR8ayUrGHYGv7hMoXJBdT7jUkRcxiyMj",
  "key10": "ioQzsazef2p5Lcfp46w1HB6fzR4fedvgDb6qmr3LomFzpsm6cN41rq4PQT3DwZbpQbrdvv8XzAmGnzXMAtQpMV1",
  "key11": "5uN1KzRfmMaFPYh8zydJj57FFhup42mDijZ1AR5D6Mjpe5Mx4UKenKNWubdaUayxgnJJdPhWwu872twGCkMF7naq",
  "key12": "3Edrybrviq66VP2DAb6jdh6FDmF3bfBrMaJ5GyetWx3bU7jWT5hV4fL5y6aSFn8xZ312a4VV91A7758DWCnM9r9V",
  "key13": "7nXxZvKTaNd18RUF2Yf2rU6RiuXuE9VdYoSdCY8i7qoSqCKavqY3sH8sQqP2bHTqHavhnhAKhaijJr17ut7ZKQZ",
  "key14": "3izhuGkmwsCAhWXUH2UdvPzjCLdhy7V2iUqgUkpC7fXnyhE3sjqbETdxy1MHwgM52puPjv96BbLZa2KVY7g6mhXR",
  "key15": "2Prgu8vLEhmsNM4QMo5BCSuuTJKvXyJKygrDuZjvDTDdaw7Yhg3mNpZ9vSZxCigDH4sVAy5vYAkYJQ5Jp4y3gFRc",
  "key16": "51GhCvQQVjuz8GnYYmUgiNgRBZeR8ARMPDUiNhRQmGmvh3aLBfhD4rFqkKfHJ3BcdJtzP7vwMSGfhDiCACpTgop6",
  "key17": "4VwHg2qZtNPooKAkrPKoFpY7UdPGt33QJ2oeMtvgZ3wqnEViB2NkR5YnsoUqnShakESnMUjNqwZ1b7sgcCo2i4vV",
  "key18": "2UcXsKcj6RKd54KXtNwRDXwow7tV3mnxkNearHr7b4vSjAoc2Ys5jnKjLRaStFffyyqjeENEasdEhZ3FWDCYcCCH",
  "key19": "8U2S4jvykzDKDGhZsYfJHVH26qaHivMm6Aoo6dcaoJUoi3muG4gGJkPJJ8p8YjQQYcLFzEpiB7xzkpVQk5avfhQ",
  "key20": "5pmk4YnvAqHjDLDqCVD9ipMuMR9BSbr4BQ3HTzdHXrNhdvKTvR9e9tDPPeTqnCqgag6PD5nqgBjcDP7jwnbQiR7b",
  "key21": "5PAhQC4KWxEDgpemnLhyBBi9J76W4iLikL42v5svJTaH683KJje1Qeydhkh8Zvk1hqoEVNbyK5MsGgXahjfSWhvc",
  "key22": "dNvq8TiC33HhoNo5xoRw88yKkMxoJi6mBY9MtNWy1U1mpjrU2rxPftMpCTdb5CGqXHvYemw23sJYjV2kZu9JDa4",
  "key23": "vpQW5sxmcNDi2xGXpdeU1xEBuEbknH9qQQD6pqp36iJMkymwmMBs6UYfsLQR1jXGKoATHpMsJ7w7cc3tq3hQDTR",
  "key24": "3p9LF6tmt9sccMJPcBLMdt9JUdVRoSmP3x1c9uwWDqQJUwS1YkLWQq3FXa2FK8E99CzptFC2snGxNm2po8du5Hyw",
  "key25": "4mb4ZXpjZXcgEgcFNsSgLJE23GSAvanNEu4kFVKqMbuUwULg8366MM8S8gvypP4BCnYUjucvRfk7RhFvfuHr5Cam",
  "key26": "5VK2hUVrN9LAau7Bzgz5CRnNbq349q22YoaUA81CZ34ZMW4RtTyJENMFeHB5U51yWZzmTHVEUyK9enUaE9NYXiXt",
  "key27": "CkQvpzHLCrmfvh3VPWbLAkxmhDALrXARTovxCjvCQKJpuyGno5bMzSaZWb8AwMCNdCbnwyEUtCfqWW8fpN1jxsv",
  "key28": "5CLUZUwEjDRFzaVyxLuoyVrB8uAXDfqU9KforRwjszFmp7AEx1hdrUquMhFrtww6yeQygS79FrhgFDVJoA8B2FHA",
  "key29": "2mHDsMs5tDUZKdu7E8Y53tLJyNAWFzvc1Y85oTEUjxTZDi8vRTBxjBjZiFBL6RcEFih4L6oqcu12zJufHPvnt96G",
  "key30": "5CGSfVTqC3JUfmp72W1kMNG1tLHkTHsoMXbkNRj3oLte6FJQBCXZvXr2zzpfmGYMtx2EDh85FvdUbwcPM6n9cQvP",
  "key31": "3tRtEaBD4K36gbAktooEVdhzFdoBJpC5SE1KKhL7gEaCYqofCW7VsEQ1BKSax2EkkCTz7xXL63D8NGUKEzJAFnM9",
  "key32": "kjgowKJku4ij4bejjNJJjF7YCvZtbn6MLNw5AoDbWhGCDKk8FnQmTQVRpKfnRxReVNsfJpnYAnXdPGhRs5Zhc7w",
  "key33": "3dzdhrcK2hkQheCu2MqbzBocSxkttfwjd3s8vpy6q7JDWB9jtdp7BQvpLcAvewxs5fhd6zyNhJeVoLP5f99YtS7G",
  "key34": "4TjTTxNuoU2ZTLJeP1Kt4iGBjPVySbrigYVeMtkfJfPZBonzKJbvbuxH46GJ2C9wgfPJURzfWwTED9cGaix3yCFf",
  "key35": "5jZB39dNSUi1tjuBYwt71ixcWzCdWhSP8RQ4E83QoECfZZLMK4aMgYocRHzh3kKptaarDWW3sgY8Vetvq1vAgvch",
  "key36": "5eJGADmZFgSwK5tfJW3uTNg5esTRCPNihfgirHLoxvTWtj4NmiusoSqMWTuSeKh8tqycUvz81xCkgFWDFjnxk9m9",
  "key37": "2VkTKQ1rJ4ipUP58d1j42wZRpZAUQ2QcrbcjPvEJyFnr6u27jCbNyf85SfNdGCpsmWcejCYZHcKayRuoV9qxERfc",
  "key38": "56vRyL6FBoeNBp6QAz3BFAiTgh71Zby1ksxL6y9oK11PB2oCFiwhKDZQJ5Ma1RooAcc3M51zDHJAueFbFNCFRz6j",
  "key39": "3x35dSZRXr6iLKX3Ha85pKx3cJJKcZnThEkoXDDBNWvgXDzwaYMA381A1TqjYnb6bD2qZhwV7mikmJJn7vNmWS1C",
  "key40": "4crNh3vwFM8qsFoYuCK5WS2FABr6PtV9EPzJFgFkToHpJeioohRSkJ1GMD6v5XhCZD2SvVNWsMPfa6AbAxxNugpY",
  "key41": "P65RkkXxbyttFMDRDko8RDnQ3GuqFLPp6KaDv7TfUVhmmZaxjFgyChK3bjsLSYFAE2aBL2bfzXu1C2apWMR93Xo",
  "key42": "58ayzdm5LCxRgQy8rH7MTtu3ZZTdntk7yLnC4SwxRbec8Jfd8t3r1PKUHDxhGJ21D5v5FmiFbczgPdXLEkK1pEP2"
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
