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
    "5aqiujJ6YY8KJ3DbZUXmR2NN4MzxXu5KyGz46YXm5HEa6X9riU5MvAetLt9m2VwfLEMRJa4iK7SQ4XRRyf9WHfMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6erVw5XMDxr8j3XkEy2GBJyi2dhBJdd8zfMx9cXhPiqTzMGMtxgM8v1LwhNLnferFuxrsHWLXfSt4EDF3dFmy4s",
  "key1": "5XR9KVLRdfW8NgpoHKCz7SfkohyjtWzrwi5jfmUXsZSieCk63v5ExVm7CB1sDuXJwvSoDupesQSbwfDysnHAFG6J",
  "key2": "49nNVyqMdR6aFoyqhks8yKAndNSHoCmJp2AyH8gDNo8b1eW9o3GYXnDL1Y7t67nfr2kCXYB9jgGqi4aAz1TvkqAT",
  "key3": "2xRcXLr1z7X7C9S9e8tD4z4Wc1zmA7NrtygLVeRHFExK2oV5uaqq8DpWHjLVNfs3QqW1mbsNrPd5wwpFkRnnTcNg",
  "key4": "NsAfjRY6PmGrmiuL57uBhh9X6ZQZWQcAP6gSQwUSB7LWP2dHrA5cpcwQo3gHqnAucjrU8PpW8UQxFQbkD236YRs",
  "key5": "54qFLJyjCmvsWTbmQnXzdatDmg3trNWfzXsupf5q8cxE4XoVskBCfsqrnKxVnGfyEqE1ZfTXEES13BrTDaGMinHh",
  "key6": "3s4Ba3FtYyGriYXEi97HkYhhjQ7R9Sn3Nbb54Sa7StW1NyVFnX5FyDcrf3eWaDdKQgWxTwvMe2rqcpKPXnbevQF3",
  "key7": "2zkPW5WciKcMNWrYSQJAoMMaGxiKMqmxoHK3uX12sVJwt9rQyenHGKkCHc5hSqqBCCjGsKFUNur35crUfwLwBbTu",
  "key8": "5VN8K85vBHhtnpL584TyVgPE7jeZz3b4mLC6Z3wo9E88ruvHpyqSaxugxu9BGQY5pHUurSjvnnwqmxFqKhUrcCLu",
  "key9": "B1hGFuRqGTw6Zb5rEpcVddSGKVrSjUeTSavuak3nMsqhp6M1Uh1vtsqi1cNXJjjUJysYsDcjTkcnkQKLRCzerZr",
  "key10": "2zzKnQZycgSXy6jgJFgcwBjGZaJ2fWLSDnTA4PjpvRNgwuxvJwkwJdYoys8gHTTdRXkjrCwnxpxiforCQrpdgSyu",
  "key11": "4KT2HbirW3TW225oaXi3kf1i2tihE5DWsf5viAZbbvKdKcqFXoR31NdVzGZnrs9AWLi2tS7pHf9jaBEdBg9HfQh",
  "key12": "3Qq4giU7Vfu4es8838HE7guXowWMdfuEq6kCM2dnVGiLuhYMBKhi19b4jCWsE5iP8EEXw1d2FoAbButoRxPmXaGb",
  "key13": "p86TzG3zAgjdn4jbZXn27RKzExfzF1fh1dY5msdHce8F819HWK4bF2a3WnwX2KghsUQcr7LB5V2FbWBP3FR1tyd",
  "key14": "5SZr1p7sj4AVPDoMGHsem2dum7h2WnBJBCJc4djQAP7RVhUicGU9JpyJG1mvqEwdU6R6LZDbCBY62XHvYarNYTve",
  "key15": "3RfdA6BYzbqUvzHaeNfHS9zW6bPZmQbHqBQHtJn7ehdiacFnEhGjQTJmvR3cprpZLPh3nubDcTHyjuHE1Bs1xudR",
  "key16": "3cXzDYLKB1gxE1emnyBRpS2xYBTYTMisB5CTGAFvhpurAnGBC9U6jCXfuHHx8rPkPcncANoD7KqnKELPWFjDdTVP",
  "key17": "2C2XUhArtxQEB4fGhJtjZoQhzvkAVwqGYChUQQf2FehowWgj6CrEW7nCvWDJwQrYCdkcP5YUxs1j8YS8E8V1d6F5",
  "key18": "5jiVPQHf2zzTVfJk4CPobiReqUCUfZQsfyUT44DBapCmNj3ttZ5LDE67kjqaLL9qyKR7kk1KhC52LiQvh98QSV7F",
  "key19": "Fqn1vdkziFjW2WYqGHN1JVz1DU9jfZS3FCXa7UpAggRv5RGhuutX9NWTQMXSjucFuz14Pc11b5fXJa9kSwVaTyo",
  "key20": "5Z6E7fUy76ERqUFUBYe1dumcTJKksjqGGhedC3nttx3prMtdAHvdPuBauh7szvLwuh9YfWd8PNwELSsdg2UqRwtP",
  "key21": "3TuuPcBg7pSq7eT7bAKPb61voyn2LQ1pf6Z8WY1jUYm8UdRgyVn9m4dumD1kW4qDTRd5STqLpxojW7qz4TTyxGA5",
  "key22": "4pCx3ydk6tjrPFjJuSHfgKkHDtBKjeXsE2Qre34NGSbTvm7ygSdjuKsTZRktzzr2Wu1UpADYLPLyUnKPNkgLkYYo",
  "key23": "5AyL5dUunptm82oBfVD8xksg62dmnBnirV5KrYmE3136sgXyx4wL1apXgQUAafxGVCAWW6SuRdtJBdfWLu2tqCNy",
  "key24": "4fjCLb4kUAqdLLo3mjSjJpkQaGyobVLadCHmRZqrBYQRAWEaup1zs3grc5M1rJcz53TvZF5SikZdEJ9wrxAanE14",
  "key25": "2TYv7iVBoJLAkrWyTMBdy3Xm8pmtsJFrBaA2G1c1VqKorgXG8TcFfdcpi2uRL42SVg1jqQxpG2eAFsgpMtEfSi5Z",
  "key26": "2jyUHCWqkjT3Smabx3taW2utw6V1zH1GkWYKGm29ndwPGn36WGziXREppB47iQGrtNqzp5465GtJp74tYETvSD2y",
  "key27": "3dsySMHCpWhsjoA8NTymngHHQbkynuo1HcdnJJAHmFGjgBqK7YEG3mocG8GnEHW4Aua7hGivgVZRCKYvzZKce8Dz",
  "key28": "3DbwPUCe7KvzGZBmmveF2rTNG8XPkPvZf8y2pY3bnfJg1HCayLAhxTUue4KM9qUgW8BbJxPqS9HKAbmUtzzoCwdW",
  "key29": "2Kug7GtT1U47Y8YNnVenGAgrbcpLqRJuiQMQ8fT7rEQ9HBvTB3Dj7nNVsAF6irTcF8CkjhKZAGZTMHZRPGzbHhPa",
  "key30": "3VskGjNBaLXS1fJLdtgRSufe8Honomw2sGZHw1AeTtMNpf2mwWBcqUiLRS9tccEZm1xcLt5WHMRsGAxKiVqby6fg",
  "key31": "35pkbLmoMKFW2ES59Z18ME6GKCLAbfxfsCsi4vFx5zzZE97sx29AAYUbgrQyBqPgEMS6HdnPWXX6LcLjuZQ7GzXg",
  "key32": "3DNZxv7JwAySpGuo9L4pAiPuvSPYZkYGmwdot5GwkyJBr2LDXWSx3fMcG4HWn5ReShxEcS1LFRfDk3UVDA5YB4Mc",
  "key33": "66Eh9ukgvntvYwwMCmqqykQmY7LQy7UvrCncckGHAeMbDYFP8C8mW9kEtZVBPcm9LDcnPt29kZNPeZGY4vkV3nGr",
  "key34": "5UTwkwpA35h594Yu8EU4tCp2uE477t8g8TDzpqz1AR62qHPW4SVaqYmXxk833aKzGn7oXUyiEaju2T9Q3pW9amsf",
  "key35": "35or2ojHoPwbjEUzkasSiC3G4uzmHJ888gZ4G3w5XKxdTJSKDefzUQTNM1j2r6LocnyNkapwKbgSp7LpWqbKEw6o",
  "key36": "5sKYdRhv6Df59RkEMPzHEEc3G1o1N7NaiMD2oHBFqUNs71bxRKUdDFmmQQfFSKkwGXeH3BfkZ2842tadWkpqgFYg",
  "key37": "2MQzPQpswQM5cdSoDHG8o4u7DrVehRv9tdLaY11JZjH6etfcQpGbUDMkAguti6yAD5YCGgEeLsRnatWJuTwQAPwU",
  "key38": "4m5DNFHk14bUC7wtN4NNiAMtUUi6z7QXFuPYcH7juVoF5Z2gEthZ1tWBfBFDVGwTQ47EmpKDm31ZpRRVFxcbMtce",
  "key39": "27SvgEux5spd9ANN38XsuyL43Adbn5YiPQ5UvFA4CSWCkhY2WNKrtdA6bjHh3tcXfH3J9ehaG8DGD7yydTPTbEEC",
  "key40": "4cYz25LPFs9m5ggWQ44YkVKdTKVM9WtWJf1y7VC6q7QXPFXSHtHhnR66gi3iNT4UL9V9KNGxqM7AF2udAqvfs1WF",
  "key41": "KtvL5sPuNfSENyD8zzc4bchuWyR4rSkfs5349Lfed9Y5xAUPfwBZcQjMZSGwDmtDgbZRCfS4PsF3CgV8dc8AkUX",
  "key42": "4PtpkF3AEu3du6UoEqEcmfn9BCjDUztEH8EAQvd8LaTdS5LJXZS5P1TSiEzNa51jdhpCzKV8D7N58vFkasNPzozh",
  "key43": "4kAbpCA6Yae8gbxLzbxUFxfCK8qXB2hFkwXRRpWYFXwG5aUn2CpwLX27QSxWgtX67BzWyyNoqEA4x6VQkekK7n5K",
  "key44": "37g7wzkcgC4uwbowZEE5BfPK9JDA6wLgiwfTiNRTVXyRHj8VWCebayN5zZPetQ21fFYcNKf5hts727qVGGCpMNM9",
  "key45": "34bSq5iGkG8BJhyJL8rAC5MqEC7haqck29RuZ3CotKQ8mdMKuqmcAMVet3GPgoQ6DSKF5jLCzPiz6ajtd2TLZ2kn",
  "key46": "3XcxX3DS7Nvoz9abpNSYEnmKL27Xst7oRgryPzbNmccpNSiuH97mngHMuPKJ42Jqo5bBqZEZtfGpzUXPE2FJuqBN",
  "key47": "2Nar2gwQpsMwDEYJP1Zxyf6R4yWqjJ26XnRLPHJ7r8Mnf377DgmiCB8UVNyZpzcwXmNG8v58MXSco6X4q7JhJV67"
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
