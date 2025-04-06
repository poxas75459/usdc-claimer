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
    "5AoSft6EGyeF8Y1sNxAVvxv87kpj2L6Pmko38ycfqeykuEem2FCRwjPjYCNisU49DooouSRHukVY9EYbJkvbu6vT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fY3iW21XLzC3LZVyTJ7rJwiWHiVNFN7f8UFnkqKEfXMp1qttLSRSeJwvusRZaBgJ12UEEUeXefvU1KJUEpL7iaE",
  "key1": "4vuYSJLEWkSy5RCg1zpyjCCGsuQyVgyJ7K6xmHxTNknxUEmbpSKUFQzJEXEr3bWwiBn6pPbejUBU2UTw5KQ1QaWy",
  "key2": "3RbYom8MX1z6XUcDPg3eJBLG4HcYqTcEPu8GQi3di8BE7sHU19ShmxEZTPbwS76PbtLJRRZ6GBpEKzKT3AGLgh3s",
  "key3": "5EKiZEQ286ZyPfgbxwbmuRgpnLRz6vxJwcz7FrC6cWWcxC2KYc1v16ohg7SRPohTgA35mybL7qoMegSYXv8UbaJ",
  "key4": "2DmDr6HgsYeVTJScaujBxV9QiCymfKLbRQuKgrH8MCxFknA88V7NQGM1NQ38qt7RMPeHPWV6g5D8n46FQrZ3Jy38",
  "key5": "3qzzf5Ee7qDUe8igak2qQnuTPyiDaGAhd2bBxdZs93CtRmEz98tF94hcmibsYwcX1126t6svcyQ84bx65s7TtSJc",
  "key6": "3ZbX9sSfjE5XjHyn1CsdZpMZvyNFDccZAiKLVmp83ER8dD8fEqRKMSaXSBWgCLJAtwVhijtbYmEaS3Mqm3tsrtcH",
  "key7": "QS6uZEVNpv5oEqdqkjuPadExgRHdh65pJk7VQcAB3T6xFA5cenuRsygqsmACZjNMD9Zfd6e7K9F4V47roffPvax",
  "key8": "2DfZ6QPdZ7jU6Hv7b735CZMSvNinv1TaDS7J8kbHUJWwApXGR1Dy4TcFHvXwgh1YNuEjt1cHdqHqSx4oQJBvgr1N",
  "key9": "37EvuqEQsmX9EZKBCbL9NaEcoUjG91GPdUoMnN9vf2SHHxmhZxpmkFAybuWR6kZBaN8aStBepkL2E2fcySdarjUk",
  "key10": "3avbDfjPP5DNUctCdW8g5p8TL37zjmPKL4NLJmvK7Wbd2q7jMifmaeCsXYDGTSCPD83eio1euQV9sVsj5UNyKnkG",
  "key11": "43ENe8UQQqjhFhkP3jeSUkJ6EMazvBHULo2kj3dPk4PdZ73oFxPpmNYUY5U2N5Z6DEkujpYEcpazKh6euMz7havF",
  "key12": "3Man8RSbUSmvxkzzrn1Mn1okXJLp1r5eSCvMNdSdiGkP4DxKNVuY8uQBDpjMzpY2j638bSSh9TsgApj5EXxNPUV4",
  "key13": "cQKtia98QzhKdbpM7KMJfx73Xk5KzbVFgw7dDfswqJn2L8TPEQZaLQUBmYFBJ5dC5GrGeNvNm7hS8MRaogAJU9d",
  "key14": "2uhe5KxH7rHWJ5rH9PtEwLHAQ2EmyPCt5S25sWRe74D1eFXkG5bgk6aUEwbSRGPnUDU91qSJfM5KwWzVC54EsVnx",
  "key15": "4RaCb2ryscoZHzbS33TMGQBdehKBKxDLMHZXqRraLo1PkSyhsLUY2LKPSdvFabtn2L6u9f8EEWQvgUzXm2ezjj5V",
  "key16": "D3JaKrviQwAK55ZNCB5t2vCEx9mZbcZPvwBK8mVfWUGmrPsJzna5QmAJ744qaVAiWqzM6ZhF2nixBuqmWXr2nsE",
  "key17": "2U58f2ShFD1cbT4YWX7HXhfgnd6gCjWQdW8LZLcV2YJYXVU4AoHF979srVjPQKjRdS4vwgsg84okviVzn9Pp3ZZ7",
  "key18": "3AsdKQwsvQCdcLafR48fJMFPLhF52He4HA3RHK55AjqB7RnE15iHuhV8VnEh48CdmmiRwuXsdZrTXZZ7Gp4YJq78",
  "key19": "2ME7VgvscdeRGjRRAywMDPpKrS129qXMQJLJzUGvE5WSSBGw2MZzLNityXKFJtFKVTeR48Tb1U4UiSih7ryV96BW",
  "key20": "5VrJrd8xKMhym7RaAYZjQEthi8b1vKdY9Bv4zXViznLBdeTBw74kDbQAgcRXfjBFhxZj6RYyCpJb7WZ12nyD3oVY",
  "key21": "4HLwzimPZLc5mhyKDWRDxeL7ACXebE8zw9EZzHtT1Yud6zhEfv8umFxPez2B1U7gxFpaRpStrw8DDBfpYZVtbBTv",
  "key22": "4ev33SZGMq3Fy3DM8uVr6CZ1XuvUa73RNJTUbnbZ8jJBAzw1eRSmGE7iwJSjbd5hsTvGgKjAnH2fCifbgbJg11fq",
  "key23": "3obRsG6pkR4zhmFh9DacaJf8CZKNZsLpvwNJZz74qzk21Vqk3eA41wefqZhd2GLwtZn6DQN8eSfb87u75yqTCdwd",
  "key24": "32L8UHPC2ZEhugDR7wnsqfne6j86QFkvSFUyQ2nLUGA9118oxwEMtfm3jLiw8rfKHWP5c1KZscS5KJRZPhLvi85h",
  "key25": "4EFK12r5stUnusqwcGE891KaW7RaySBVoXZWbbxY6ejtcRCRp5xDko8Nd98y5TzEr7hj4LxVaxF2etKXAyZrNzHo",
  "key26": "2tKESLe2qUZ2aBzXYqPqk5sCQzaijZhmh2w1cn7z7LjJJpKPnv38Z2twegqFrt29qy9Ctjf7evdXbpi31G4EjdWV",
  "key27": "3zsiNLMiQDkZwJWkkPXcTbjwYHE9NpcEYPAxMHVg9rsB9y21ro6cVhL3HGJn2Jybbkhi3FTiZphB5RVw8ud6GAP7",
  "key28": "4MBAosNqZprEqgi9uZzw92w8QkFFeJVZ118H5avLgaLWFSHZfgBLENsJmU9UrhZ7V7JJ7haFKfbguKd8xNDyuDTv",
  "key29": "VzVnKctUDo3Vnr9Kxq1Gh3JEAYtXVkHmxfkTzUVRQbyPEj9qzpz1dJDSXGNA2Km8Xydse7x89Xp8Eew6ad93Cre",
  "key30": "49fTXgx9y2vjJsW5yfdgmWBhGHxKpHdqEGthdwLYRFYi5Feim1c6zfBjZ9H3r5r46kk9taArPTYDZ7BjDskVSKQ2",
  "key31": "4ksDtbjJcZ7uNTx7Q31mzLmQ3hgZxHrzx1veEgEcy7pdKSYYrXLdaV4nbHop7evDe4PSgzRXBM6CpkYCCC1AsGgs",
  "key32": "4KrTwaeFvymzfmNBJcnTGCn9vGjnT4goivQPau3bcip1FyRPmyNsD4Fvdf1hVDVRDws3yLawYDn3CSHE5owNJxEC",
  "key33": "2WmddG33K2SWC5dqBgXuhzGJEcos4D9qD779EdisaqDCSHefbxLwNYyA6VUn4sKCacKKqr9rA4VBdGbPT1VQiS7H",
  "key34": "syTHqoQJHQnxMxwGCKVncToJJkSpkSm9T2o827cmJs9KqTziBHPUBFcko4E7VDWjukwR8KPRwtiXJ4yFcVwXJ41",
  "key35": "5Zu5bc54ekguc5FgijnyW7WUdJAFAHC2weKEt2VQd4moivp4tWzFKdUbNkibQui3nBcu68UizaooCiC6UBkTLPwB",
  "key36": "37abt4VphSYSj8jhF2pHuCAU9jGK6MoLz12ZcriLAGEb35xTcHySDoPYWSE8aXfPcjC9GRsDQMDXpXGETKaK5mif",
  "key37": "53ML6fbPa7f4SR7SNyCx4GRxMpjWeHSnyweNSkUdKZmMr6Tnhd8Nhn5abjUDtDuM3jqW6JKRstUy1w9R4bVwQev4",
  "key38": "3E5xDVQKA1Fqpuv6DUCXBy8M7VyD9u4cmwvMecb3exHBJKwdVVbHJzfSx74RPwU5Z65FbdRJJvJK6pJvWsi2Nsqn",
  "key39": "26H5xoCZZ5eBpadP7UuZtHjSmXxbudPTtWBgcoNZpQovCravSUrhxvR2ewS6tdJPdSsFioAR4iRxKSxe7WLsmZA3",
  "key40": "3oHdMVefsdqCcJCawEHA65z8Mpmvvw1sCskHnipBPRCgmRJjk3KjQMr8ak7C7DFXG2hZ4dF61HZhj8PNGcBrd3dP",
  "key41": "35oMniEMqgHn3S8qY7uG9cSafrgNxHaqJSCDEJVUtPG6vdciaJV6gAtyGjQqSGNQjC387DXiCpVhHEqQmEcCSkCx",
  "key42": "4BMcmtqTpWvUZfTmn11RbWbtR4oFWr47brZxkAyoEvtqNBwCKR5RPSWRTsqYEgwQT4P1ri6st94PRApS86ZTqCJe",
  "key43": "262ncsuHVooDcmBfpek6yNdJ39VTAYoj3ppgXWQVbJZmNq5TpUbhHuMu8ShBYUrVYhfy5om5bpKsGpm6ULJP3eSe",
  "key44": "3WPGfoor1JgoSzkHvkeoKRdhpxNTmfYR6hhG1sXnqre8pCaNA5HheemqNQ517nDXHoijXqZ4sp642y3fr6K8kBj4",
  "key45": "4XCneH1W3jfwfFK8KnuQwNWa5Kxczw2b9H4wyFVxwHTKXGn6xWVjWrWnrVUVFkgFUX89ZETCzAKZEs2vDVwCUT33",
  "key46": "4jCsAHtE1XnPfa3QG9xJYTdKoJ54F1Wkromh6AJfAomG7nJvStjXDbrriD1LqtqYZwtVZzJGweBMtwYoTpaoAfPn",
  "key47": "5wABioi1bucw3cTFuY6tVimbomUpTABrbLwL9QQLBViXv8PhU6nf6F6WFe4V9vQKjo7UgCP99GwjPLf3fY3TZnoR"
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
