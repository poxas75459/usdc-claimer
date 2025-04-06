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
    "DDz9Zusi1rF1keLsEMXED87ULhp2uTJg3XN9SaKKtYwtEPsmqNxDHtT1eXC3T8VnGH4K9McpTvwNzvAha4j6D7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xBTaT7VmwWPj7yyuJFG3p1Ya8hz5wyNpH3pDZQk8SSfxWAbadyuX4LE71v9WVCq5SBHqX6SFKRfZB5X1ZgkyDT7",
  "key1": "474e3HLX98zjPZwwop2s9SnPBsKMYDDMNf3V7N8UoPeddcVQmmvRdUAzkoQ8Srm1bUaQJBrffwsnWx8vngRJTeBm",
  "key2": "4tyMC1cKQ5doJqTXb6b9rrvb2z3J9WDYqE9FzLShbqiGtzXvnL68V4ssanqEw1zw6tiS6HNFic9Qbqs7xDUc2xwZ",
  "key3": "2DfGx7dPXmZmWG767wNDcNAC3891J9h4UjCXD19Ubm6KKoaQFtgfNKtzciryrkRJ3DTCKX8QXTh8AUvCcwK3KjmG",
  "key4": "D22jifiuF816Jf1zFRUr8DZERWnajSZpAQgcqwtyM7m7GUadXDKMeV8CfbnqKVRzezb4Jfz3xvrVtWAaWGStxfr",
  "key5": "MxsBkxUTcVUDxwmb6HTYPSHBdXjFdoEu1unHhQfDGh9zYrT2DLmiNmrT6xHK41ph7Rs1hJLfCJTrp8JMiLRCtyF",
  "key6": "5m3cEDdUSGWGdswz9e2tJ747mmxUjEustge2bSt9m9APS5KA1y63wQhi4h2oXzX1cNgXthsC7poCM9UxC6E6HJGP",
  "key7": "w8r2DeigJP5XzZ6BCcXgEXEBn3ALKm1jHe6LFrzCNFEnN94zM4PiKg9stnqL8kTDF9umMdfJCZDx2gkDuYCvjEQ",
  "key8": "46VFY7r5d4qHVTZtGBQFquJqSZKfmvMC7BGXKjVGfiL72TamymB8GtVWCauGHSDPxGR893Vn64CiHw3AuxUH4ZZq",
  "key9": "6242RuDRxYBxzcyHSHsnncdQ2h7hcAb2PFUZM2LtAsP5bjniwCXS3MQ3XTdowTPvViNcPxNaPJAHqgJ9UfvHzTGH",
  "key10": "kZbHmccXf4WrDrz45c4L3KaqQyF9cwuVouwtzyV3QbG1UzjDuLJAKc5aUN3HZaS3ps1BiHKskCnxmg3Bn6YpMHE",
  "key11": "4y1Xbu1GQRKByXZJ2Br3dQTFzLcVESWC8SmXfmPVSZMMqoHDocNiHR9ixvCHkY2odooPqE8DzZBF9ucS3g3kr4vF",
  "key12": "4sMVap2c9r1HHbpdrCG97AhCYtihRGR8URKpb2o4WiY4yWUXePnR3sz2j5AL3FtUYJ1LyJ2h6Wsn7HTZffroYEcL",
  "key13": "3bvQUbRs4uF97RoBpQt7wC1BY7LE6CCo1A3FHi4cDUGJdkxKNPqkBQfPDPQQb9GGH2BYVUne2wrSraxkB4HRcJhe",
  "key14": "2VoNz3D9NBg2gPyd2URm4DwvXwujaUnAx2zRCq5HnyMvVRkDiT29cGh13JyTC6qcNHLw884CWTM3BDV6bap1Qj2F",
  "key15": "4jT1uC6mQfRRXb9G5mJ8TToxPCNagEDVjajjQG2FKxP38baoTwFdd943sSzygVK4WtwpUTcV3ovgY1qjz2YhRynD",
  "key16": "5LMupuRdX8GJyN5vFSu6S6VMsAeJTXZx9tteXTHPCxc1rPbU98vfR4it2sTGpG2zDupkJebZGTvakwmEDM3BBdzq",
  "key17": "3Cwz4QAx6tUxGSzmpwm1eArSPk555DQcWyXf3M3uYLCS1A1kxktfE1hgM5MCNFSrn6JiRwHhf8baBNtTxGqdmkMC",
  "key18": "4H9snatJBH2uUAw2c5LmGAK4dTJedLgTeQhR7F7czmXUsSmaYZ6mshZzfV47kmmmg3mCCFCb8KywEr5UN9Fe5d8w",
  "key19": "5RmwT1BHsiuLzZpkJnUAAw6SwvXzjAw3suvGL9FcVncMp7EGCKL9P4XbAr87F4pFFBZRtYiKgTFtNRAxYUNm638A",
  "key20": "22dQbkMM9V5f4qygobQ8cX4TpakgS6nzvWMVtxXq4AMFUBuxBmm4bc5YYFcsCWVps4U8UewMA4ULidcBd5TExNhk",
  "key21": "4YRjZxfUda1Pktigewa8dcwArFUUb8Vz8oLadv1W2yUbYqWkWTZkJHXZNDKQRPkBVvvFL4j1ZkyC4x8X8hfLiqzb",
  "key22": "5xXNARGHG8EWP4PPg8PdLpse8safwpnQF5qHbNVK6EpUND3mATctxkx9QU4BMGAFNrVzKXLM4SYkEhhBkT5kAk7P",
  "key23": "5ccKxN89Yr2xAbUivLU4FTHSzVxEY2ahey7m755xLYJGvcGkpkK5pqwJKpFcX2xmg61tJkSHnvgdQk8j2vBhfnoG",
  "key24": "3DjB18z35LQ4pPngDcFKuXyxhTHRBTt2GhxeTALNJjuT7Qzqni44MvNLPvgCmViqhKrYx1SPQ5WYyyfuV6zckxLA",
  "key25": "pfwUJbTE1E5bNGj6oqMEDcHuo7hPabTEgxiM1SLvsMJVgHmyLFaWjo3FNkp4STTCf2bq6aubCMLVmbGfuxANHdr",
  "key26": "34dSpxddz5z8Egn6P3yng6nRukrjupwpvLQcW14NsZ1bsqnMD87YjfsskwsAvWhiGFwRxG8f5zNxJuNXtCpqSgTC",
  "key27": "61E33hS55nV5pii7E2hJq4nH5RXR4h1igxbG15jQempvhzo5MJBGWosfoyjnf8uzgyzZ3Ko9Hd3gWA5M95Ez3GWL",
  "key28": "5AcoCDT7pxTxXarsFcV1huZSnskDzinpSpkbHXZcDqTSffW3jx2JgV7rMcNuk5kjSuyjWwUrAkXN4QTAfnp5V6yu",
  "key29": "49QgGXHaPTSaNXtzy1D4Y69EZcnjJjLAHMCJRfni5ubhFVB43pAgevyfMaCK4nBYT6fPjFexaynxYwoa5NnbkZmA",
  "key30": "56ZPmsejvAwYGM4CGXE4Vj5DeaDNDCyVkcfJtdYMQt7ndcBnh9owj5UhmFXCQnc9A3W4LUoWdNLsKbeW6Jhm8ois",
  "key31": "2bjGcFNxBtWgsif4nRYVniqQM1amvDDgwqzHwjAAnabNjUXBfzeNJum5dJpoENmA38LbEQki9QzfvRrvcK2WzGKm",
  "key32": "3AH3WGFqyCdeAnns3shY3XWonvkPa4LyXSptTn2ZYZQYkYcm252irXPDxeNAWcCW2RNTuKbipwX8ApZ4fPZp1sZW",
  "key33": "5RcjBvTy86N54hmmjg5CaMc1t8Xj9YQUSMdYxuHp3ykXLSkJXaBwHZUh1UpJ54fv9RV5hTMBU1891Vt7YwBsZWrK",
  "key34": "cp44bajgeipNQmUF32tYdrjVQwr7AZ1EgT1r1mvpCYquauS4W2vhTzpJqNzQrjA1sh8Pt3r9Z8jfFRKC7AKgKWc",
  "key35": "35YuQ9jJ5YtMwmLv4cqibxNBCPcEqA8C6ArAH4uHya4NkHawq5s4zrMwzCnEBhZ7E5E9iZRdqLE3BNn57CGpM9R8",
  "key36": "zeBBGp1ciieTqfBER57bWAxf39bUwia5n95hq1ruVwfnN9fSCHSrJCjrSCZhtWzfCPnhGMq8e6F26bgFDetsWUS",
  "key37": "r7Mhp3afnfTV7KYEaz3dGXPNujzCfS5vH6oM1etyM13jRo6cA1PKT4ysZZGPRtyQGFE9PsVXetYNf2Wtp3Zru49",
  "key38": "3mJd7HAbtgmDH9tAUtBDiWg2UWF4gW53vte7BuQo4oiGdh5s1EpArJjZKXVa64G9D78KBiVFg3z7UrNCttHLcqbT",
  "key39": "MWUrbKjF5ci4jxLeb5wD73Epid6qqnqL1oDwv82ohfBfMJFqMvYC4oSyugriW7uBzVbarYjiHTMn31UKVxAP7Tp",
  "key40": "5F6ie9KtSXvfpSQJhxygD8EeCP5dvY3TqSrgxauug5PoPJxDBjJTKARogkcz7oK6XxKp4AMAfGnKWpheYxRgpr5B",
  "key41": "4NTgAdrXPRpMzSNr1pypPxCjAQHohj6XaV9W24QkLT62pNcdi5Fsmvf4U6KBHxxVhPdkUoV2TvDp2enMcV9ssXtD",
  "key42": "3LNQsSDajrRNbf9xpsUyEPrTqaY169xuHvqWoL9WRaXFpngSqwHYeRDRZHJf6KdFJsCdgZmqEVwawc7WG3JrJ1tH",
  "key43": "23nAYCqBwmanANgSV9YmBkunfJqzKx3EuCAxZgzuPfkBhvxjuMUG7No5Ps1kTKmVr2iqfhx5Hf3SnRmm8XEzEbbY",
  "key44": "5L3uuQAwL8WspELidWiQY63FMhFmUhhXb6E5GWRpPigQTcwZNzTmk9VnSsqqXccDry7G3hu1rLXEaEkJvZh8nNd2"
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
