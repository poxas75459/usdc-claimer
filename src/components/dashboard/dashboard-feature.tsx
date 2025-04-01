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
    "5ek6PxCaDWFpHyvkSgjwYg5uMk3Hb1T2VGJ1kpmrrtApAzh673RTFBDwHXtiFLnTpH374QyoJfCoCYVZE3u6EQRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "395FbpfPgFuJ1fgsi5hqgQiPyqBgWJVsQUmwVcn2fNm8RGDytbAfF4DdfkWSqyf37eV3hGeYNFE9kDk3B1kZmdDe",
  "key1": "2yeL4XqHVspKiYpS7tVvyURuxPNQ1q5cQLMcfVZhqwbJBuATDR96kt2SSGhp6GFEPFHPBo3MEr5BFYpSoeYZwqor",
  "key2": "L6q3mvBAJ3FyrMnXEQL3QAF13pjsC78eqBUTNRBvkcd169eWUGRa9yh6mqqZNqcSf3hNxpmwrrYtYJxic4LKQ99",
  "key3": "2cyQejSMD6BU1GKUVn63tX54FhzqzghkxtTWqQ4aWsTGEwgLACgctrorC8LHgiKoRx29GF8hs61Jm7MMHNhS3NEp",
  "key4": "5uL1Ft4Hft2ZeJto7s6fCrEZNWJRM18Bd7GuXfDWcwhyB7M6WDbPxK6gLUgixJrYFQdXmegYLmiGbfiQov1Jf9cW",
  "key5": "WDPRhnA4ib1cC91whxrMcPjvcTKFy8TkEpWs9uQzeHqQSJWB26vqEGqxoraxo1jobjZwPL8nwxRhw9sbj4g31jG",
  "key6": "bUm8vmJ4HWeb9MDXXaMYhXXHLnvGvGDgDLouG5rM8BozyxLRSCvbknJEpa1MhofZRdRFzZnk8VS3mLzyMuM7bok",
  "key7": "3QH2avwiwi4e5HbeTVBuDGmNkDZBgdH4qzXwuJcvmr4Rv8epsFagW4PQozea68rSCzp8eBrzeEhJYxBDYjnYiNQ5",
  "key8": "q2oBP4LqazdycqKxqaBkMJAcMLHAZVB9thYKZEcetVJvPpgj6SnDa2WFfqmBUKdphGY7LTyLzPMvd8uctGoEMHe",
  "key9": "3YAZnoprtLUWu2vh4SSR691HiASeP8ZPTkodefvzu6owiwGMBannLpAoQ2SKrxNqWwottLKC3ejoG2n3cvD9VzUB",
  "key10": "3S4d3qCs6acgaPLH3GCZcNs9FGQBYJx189ZvNDmMExGRqVMpA7TsVHnyB3c7AbWvLcHLS1y2s41gE4uBYR12vZnZ",
  "key11": "y2c4eu22pqjvzNoiiftwm9Ltj4gkmLuMAGWYa6oprrx481w42ywr5EuPNQhYh45LAQ83sPUHSiM3jHcGjZfeA9b",
  "key12": "4xkff7rbaxdZfR24GUfkJ5LU4QkZoFhYsgfWJgFJUBxjT835a5N1JfAtwPaM6zFxPVRoJ8bdYiyBvRuRGfidJfcY",
  "key13": "FokZ6R616Kh8TrDEmAgV3QmdWDafmBDP9KgbMJc7FsgGGRTxYAwpp8kyKfJtd1GrzWoLSjwRq9umdeqAQWmHthn",
  "key14": "41yvhZawhUy32LjpGmadhXagnxXFsz8ko97dAhAZYTsKw8qAAKwnyWwPm5bj81DebuKt2amzQwVEV4Ps7caeQie7",
  "key15": "3L8YrqtATkaYCR9Lw2Ttmn2i5jrA21fxhkWWrBfpboDLs8pwCtaQ3hJz5W5ZAa2mDRPBvUkKzCcrN5k8TFxEq8Qc",
  "key16": "9Uas9Ccc3pey29VqgEXQc7u7DtFzDrPVYMkDkP3AhYe89EW2uBg4Lawrw7NjCT28u9bcA43hgBgdY3FnhEia58j",
  "key17": "5HqUCV826SEeWeh18q9v2tRZGVcX6bHvNxttQdUSd6UdeWUa9CdHa22U1SwHNhC3AoThuNbNUR1ic2cXBV9rZwft",
  "key18": "3ewKwpcf1qJJcmece4GWXPwwvuh4SgFCbpkpV4BZaaR1rThHzwXqock8uJzm5hNHrRcGRD1DPoAjKxovY6yDuBUr",
  "key19": "3CuRbn7A9sJF5Tqt6bwo3SR1PA9secwatvRmokW3jVCoZAoA6DKcagZvhhaWUBdryLhcWyHa9tZaNjPpxWymvPzR",
  "key20": "5R7Vemfg8xpYaBiCoBVcdBCyRX5ANHDTj92whRkKPFw2xkUHr6gb9cWEML9ocGurmUFCPpfMJ7jf33NFgBTjMw7m",
  "key21": "5BtCqZR6FDxzcjDKZyjUvhhMdN6eFe5wXZjYJvHrLoUq5Q9udGjeuPWSMXdpsmPL7AAndVJ4JGKzibkwpWWz9XsV",
  "key22": "3CjQL48Vv2NiRxMARVKhhqmQPTkY79kmZoXaPwknrRUyMvrLXfw2K5VCVKxGFXyzadAy3sVJp2ojaLRceZdh72EW",
  "key23": "3oqtRGnYxQMrNnnL8u3shkkULNTpfNErHxyjneZxNMFfKgdds8q7CKun4TYtwSLFMW5gqJh79rgWe8psJG7Pf74B",
  "key24": "57YrFCoGjC4W98HaehsNr8EBruEPcEsr743ibkMWtJ6frkR6hM47gk4PjF88QUCrXMApBQ5N22Qe47Kh775Hyf5T",
  "key25": "51Mct8muanskKgw8ARpkNurAmpxRHM7t6fPHN7rTizD5eU6MWi54de3PXpdGJE5h8YBeeaPvy2ndSxoj5ViWwS92",
  "key26": "5uPZwfWQAPrb7eM5cqwFvyU5pd45Yr4pnFuezvTD2BreBU6cheTJA15PZr1oM3qKBt7uaC69xviESSfpcgGLvzLp",
  "key27": "5JfDHK5KWjDMSV2x3zucYU6gzTUW36REhCGFzkHjQ93MZLLJ73Bf9iG7Lqi9cBPNfK7CgR3nHQBKKBv35Y4Zn1uC",
  "key28": "4pNo6vRhCurjYY3nJ4fkRU6FRk461Hsx5Xf3GbjUZYYWgjkTcxbZ5y33ZsULq8nkx5WUQEZRH6ikbUrXdx5bzk5y",
  "key29": "2mGWk3oP1pTxnmWhnCLJAWdj5wc2qXPta8CVPHhqcKk8EDmZBvtohNmBgJbH9AQ5sJyjHqxp82HBeMoVeUttZMwH",
  "key30": "5oGyCD88cSp7T2FVXXDjF9snF2GsUEQV2ittwLv9YsiV6mpVc4LiVJJ46UcoHxsCZjk7X9eZMhy75jv3o9eH4Luc",
  "key31": "34eddHTpMGSyL7zPjhuuKL7FMDbgcn14A2GnNybmxANF6HMGP6VwVMQddnACMercxYp1XUmZfT4hzPwWqqNgsTkm",
  "key32": "5ujSgKAZgnqYsPgUmDeNHocwGU4ZALJSAdUyGySyqadpGwtL4vtTLt9j8LGmGrSqwiTLF2FZEvvKLXa3DLggvKgy",
  "key33": "2EtV1NsyMfMaXZLNL2jRJ8geFKxCEqU74BFtLSxc44tGetypSPgc2R5qjvbieDQDjyoaxCwTw1VeBDVxjzGdeH2W",
  "key34": "2oaHUq4ubfy58VHj8sZayfvswjiVabDw5QFFJa6sHNYkHG4spqyMDjbWfmWHdKbYKqCPaRxi9U3CcHn7gwuVxos8",
  "key35": "4CqwAE8T8f5osDiKcVDDk4GwUcfy8zzcgB8oVsQ1YxQyi28YebtE1BhDh1vHzizJ65TjeiT7jRhzKjE4MXN2dqfV",
  "key36": "hici3183shkzsFZT2m9tadUxPtW7UJLW9AnVT5zfVVRmFnwoWBfYbjWWupeWyTFDzDMsuJWm5nEc4q9WEFe6E3n",
  "key37": "5VCS3LRnj1nCYP1LXu7M27YjAeHYBDWvFwTNEzzEZaScLx9PuwHoM1i1S9B939CUSBmTVZW9eZQb6QQnXmxxy63v",
  "key38": "UG1ByKsYwt5FkhiqDnEjK2c1CPxuqL7hwRPx6kgyMJAPHXKZ2WoKR4YMrrK6QVAdBMHKXeeakRN312DwYaUqZAm",
  "key39": "2KaEFDuDBHy8EmWVUHfwmbCnPhBbWvK8QdGtS5ELK8DCiwBhzwFMxxhX451iLXJjvf3ZSi6GLbEojd2rjCzBrpY2",
  "key40": "5A5wk9Y1XdPaD3nGJRgDMwoGag7crbNPSdL9TLHfoXaLR9XuJjQ9iQt9a6oJGSMNArSinytDW8ogGh8Eey4FeiCA",
  "key41": "4kRZzCzxKLeVRipe1i6fjmzzrjXUJc1ADkxJZ8dNha484takeCLgSGHnN7LMpQ7nrUoVBjoFXM98EhN7LW32YcA9",
  "key42": "45wSbwmQPG8Ry8KoqPa5NjFNgPyXBnhNNaC1kxc7eeaRbxyWNQLWLWnZG9ButoeBDCMb5MYtMLodQiYavr8a4izH",
  "key43": "37U9iaBdwNEppZoCQQcK7vBgb8AE6ZwLshBa1mTR4LfrAi5AqwtuoET2gJixGVKaLdRjG8VNxDMzzveBqNKmiYDR",
  "key44": "2W5XAtjYehamjokFGkCa7XDcdvNVhPTEQhTSMXrqX758UsPn5asJCqEFSHd9wvES1PQu83Kmpjpn13d78b5Nc3XZ"
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
