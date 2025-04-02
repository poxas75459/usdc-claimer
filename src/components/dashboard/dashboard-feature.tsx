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
    "5mGUxXJEFYTtN8krHKRCvHUdcd86h2qqi56pCDLtmzffFf1rLnmTVukSVTD9NbgKxVd4JJeSETs6hY1dnXk5gaZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1BeuawHPt1Qoe5ARCSqZmuvRmsHSx86T7QkfyQpTZ4b1rMri41MuGpF7XHR3XQRxNLgn5SqsnpKcAwetrLVxZb",
  "key1": "RDvGvBU5ovWRKBZuDu8rBy7AR11s3MZifz1oxZqw5SGXsTDP9ejUwMoehcAnsmtwCyGiefNr5y2Ygkzz3b1J2eP",
  "key2": "Ay58GoTCM859Y1Cgmzddb4CdShTQxUYKcz4a1zRqzeiRqcZ7qnRVw1YESg5vXafch9DLhZ6pjMSds7SZ6Baq3gp",
  "key3": "58bxiEtb8NbmtQi1M5wn7coGf8d6PJzK2r7G4cfW5WzyZeVMa6Ni5hZiG2iGgsEdVgxcrPJLDr1FXMVp28hUEP3w",
  "key4": "5Ajs7gXH2i6cb3kSJraNG4eZqLvpakw4EHd2SQ2awQV7PgLJS9SzGkCDpb6SiHu927nzfDxf3xovXUiDYgumbeWp",
  "key5": "4EumiwGz1nX7NUDS3PJH92byCAWiooXEzdJXLVQHaQmE9pTh3rytjhWLrgioWhA2LN4rcoVZGU3FT6SA69kPZ2p5",
  "key6": "3BjGCjweBTg7ABWukopJ2erLJmxQo588zwtzQt9KWriZ3rPkgosayoauCaSTxqvsmvt22eqxHoKZqDNaUQVnU4Xo",
  "key7": "41wBABcD7pWv2UwER1V7zH6WBaQs8HFmWkPqS93CnTXBounGS79exLivkawmB8PmYbV5AUgUsLKvghXAf8GphCpF",
  "key8": "3CZaZEVgmcqEDvL2HhjL9SkLo252d6pkN9wpXBQXPxCLN1zSuAbprVgPxKU9wPWAcipcigMEC6bPNkSVZBwdeQmg",
  "key9": "5HqKcRMGRUUiqHov1J4sbQLWrBtjryayWJjV5WwKHMp1R8VC19GReitjipfvZiUHzQMGoViNMfHvZyibJJvY7iyJ",
  "key10": "5dt2qFXEkLccP4oNEKYQB2T8FrX9r8Bdnd2UBpxA6EB1e2SoieAwpid66MKwrfPQ2mxuXaRCeHTn2bG6fJ1SngWP",
  "key11": "3GrLxEfXtiZr2btyVMfvUjuZUDfvsy92FabeWsb8KyjsxXnHDUP7Pm9XyBvb2gHhuztf7PrB85saAY8m6GYnTDjU",
  "key12": "3TPGjfiWjxG1xQPGMfS5e9q9yD6ba8K6ATTTCT3fVBZgzz8zFHagLdZnisBL82het4zVjA8L1gegB59r43tS8V38",
  "key13": "4hK6vcy7fgdDYWXwUZLMnMULNyP4QiJgPKYeRPRGGWifpfAj2t3t5zqKjboGA8JB2qG5uhCRoVuDZx74oH1HKQBS",
  "key14": "59889QLeqtZ1iHjtv7g4tHTT4LrZDae6U2HSQh4Dw1eWLjoav76cAgH2vh6i1xqtZLMmLE6oxr16wzitj1RgHqcT",
  "key15": "2V9tQidKBUdJt314oVJSfNTqoQ8avvsNoSRdq2jRYiZMx9GTJMGX7xbPHvsaNTxiA2tnveWk4HarDfjZLTqsm5HC",
  "key16": "3JjpTuVrnfeKUPYLSW1BrQH2WuwePBotZzKKbNASULTbFLh5Jb3xb5U3TCrUP737FrJnVtVfbEVyqSZEoP8qmCFD",
  "key17": "3Tqoy4w3trKEeQratS9ogtuTGiLQPacnVfV7caathY1BT4yBJeg7ezwnkQumG3TrdS23gqRxfcSMqVmD3UAQogoi",
  "key18": "3GoGg4wyqumydUztde9CjsPzD8ouQzj5YscjZ4Xox1nRLuT3oTo1zv25u9vWf8tw8ZxWeTwxi9dgEVNsTtdFUfDP",
  "key19": "2KjmwhNMfKHqjYCJbrG7oWm8kaL1RSp8jiPeu8aBFgR68gZKSHrWEUB2rcq7K8bhuFU2DsrLXGVJ4uQPsPmNSU7y",
  "key20": "42gcczTTonaJVPfeHR8SxSoCPaJwnSCeVwZt3rPQbs5ocyjntnENx9b3t2rgrVitEsvUKkBdUf2N99PfAVG5Nk4u",
  "key21": "3qEi32NBcTuYkroMnHvUmppDNuD2z8FNt8xzE4gfS8XwBxxzAN2RcLAPTaLLafhsxijBoMKV77dzw3tHKXRaPb99",
  "key22": "4RLrF96EzmTDxgJNT753DsYN5FJN7LtdHywP7bagVqtJTJuCQLn4Yx7Fmu7d2LmjfUnrVNivfC11c1S7QEcf2qb2",
  "key23": "4hXcJMUDjoP7V7ZLTvxXpv4M3yJr6rxVEJibjJuDgL5ghNkVygwEPfi4Nefn6hkXhC22L4UWSFKTe8FSJLcPV4is",
  "key24": "2GCXjw9sURsskZoJwZXGmz4GaWXTJ25sBiJF2URany7BcBAHtoW84CbaigeiSkd89gmPypdTJWvJJ2YWDHUXrzkS",
  "key25": "5R2BwyN2GXLBapQbPDRYz2Vv3MHbhNFYz2YB3eViiGSmUauBqDCUTcxxSPoj7ERdqpcGG7VJKoWMfwzY3z4DTLye",
  "key26": "4wvey2HMTbNSUvSis6UudBJxofgMHiP1if5tGgSAhE1RqM6y3S9edrCuRD8yFaRgk3QgVLvnahSUHLvR1mSSqMDY",
  "key27": "5K6SaFHDppB487UWQAfJAgYPk9ERQgpcFtjMQShR3dT7ASGSRSDQqq5kh3VX8HdQibVnTCKjGY8g2L5NSTGqKcNM",
  "key28": "Nx2CnNUdFE4xQbBfYY8wo5jRCtdSLeiMq3ipuVLnhdD7Gj4TWZpvfJqHcMF8dRYyWBThQGeNXFQ9RKSjkNHwQSZ",
  "key29": "5dCBM3wJNbtz4rTqCbStpfMXxeJkRVe2XYpArC4XzMRUKttb5tUy9qJfehbRKfFyVrzE2MbKKS8ufMTLTCF4XbmP",
  "key30": "ezTN4DDPmgyiC1EunFNcBaX8PCpAv4cLzi2U63jbCgXVuuexN4ibE2mmDTVCRdVzSPTkRL5yDfoLUDRUpYyrbrQ",
  "key31": "XjZHaDFKc2hKa8aaRD4yPLGZ5pPFcXBogup2enazhrJxjEmAxUVnUTfksRczJUngfcNthjr85ZJH772BTCVLBfD",
  "key32": "5K5FWEZ3AKXZ9m35jJUxggrx4FdaEXjesxhRxz2t6FiN9nkm3xrRrnekukfK78iMHKdsEhUu8uoDDRzMLGT3G13C",
  "key33": "52pt8HBVx1Lw9GSi1bTa5C1KqAHqADEVKe5cFr5nD1oWNLnoQ2cqRzifEpQSact4WDAytjmTGZ5vFETndx8n7qfT",
  "key34": "3NuexmiDfRLbPH2cVVK9bRu4USmPR7TTtxrxbn51sVGQhrtaHf4GVVnvRcxsPaDGjUvnUsv5YPeCC8tgmvQRjhNi",
  "key35": "21vxKfQcFtq1Kw1KhvbSx6mj92LprW8EsbBAv9J85aqLAiA8GjHouAtFeELf94i9pKSdbGuw39oGsGAw4sMBTTaU",
  "key36": "58obNjiAqjiBa7Z3VvXkt6BguUBQybXKiPM2gf9BproGzXdviKTcpQ9vhvUmwKqP3cspdBGXmoMTb8veR9ZmYVCc",
  "key37": "5Q24TyR62m7u8DN1ZF4TEDqA9DbqncdpXCn9tWxUGjNpv63md4cZ9Sx3GQSmttVdZPuF32eia4Q5PGgmjnUcGVQy",
  "key38": "C1N21a14MXGoGf2uLxdbfWSZarK1nEnykKJ3fjaU5q7HtEPPxFi8bBrAc2qhSPeJsnfdU2E7EPN77Tj1WkJqWg5",
  "key39": "3m1P6uEiNbedojh96rQucnvh8vEU5rMVU9FQbHfn3Si4fpMapfxoJ4weU1GnXMSsSBDFVqf2mTGqWygqv6GhsUMH",
  "key40": "2rrzqe4ndET2xZ7rirVYWnL1FdmadvocSNcUbXA134xHTAA1Hfgn6j7Vyu2sqocvEJmWuiiCV1SEHtYdfxiHGpzi",
  "key41": "4YECYShmG3VGCPr1z4n95UKCr5pGGU6a2aHVSP7wCur9oJrpHDtjfV6rUamLbvWBu3sHRwuVShXQ9UqBPL5aVQUh",
  "key42": "KJYeQhMcZjUnDpcuBMmgGV3M88Po3dH3HvFSGWrK5Z5yJGXHWW8cNsfSixAcYiFjubHPuTgHrTKMnHtQXHPV3Gb"
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
