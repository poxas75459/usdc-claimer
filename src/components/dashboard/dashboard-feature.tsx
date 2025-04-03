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
    "3S7F31ZeEMUGeyTyasPLyTWyk5ughkUmbxs75kdD9AefeTaSud3KmmyEjxuXT765MeyiT9jL6jiP7GzaxrHiEcn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgzynEX3xp1eHva5PapuGyNT6aWd3mJFGogqYPqSCQE65zoXVhAxfaR8XcinReBr6bm3VFAdQG91ebx4UyfrEFn",
  "key1": "uLaBhmWgHkH5tNsABaFkMv9xYFDVSDF21fjg9gkyptjUQtcQyKFUoxxjMAwAA5NGqztKf1w5hUGuDRtasCrngLs",
  "key2": "2qbn1WzeZnzwr39JBkQkCcESE9CPMcV7LnsQEWFkFXnCpFBRSnLSGMK8dRHUUYedwJy5QoCpFKDdbZJjDYHTPgSu",
  "key3": "2otJEEHecpcx3CkUTufwP9oXNvzY4rYtFG9RQhKxVp7JXxUvR17Dph2fjv6XnvXgVL5CGKprSaFYWDC1zfmxc7cB",
  "key4": "4LvFATDTPdFBSLGS6UWJK9Yj3JVNNfqchJiktVJbyjDcTEbejgeRxS1iDMXisyjmb5yPrWnpHQmp3H9eWQ4wbz8F",
  "key5": "3BFeKyYCvDcqSJkFQcoLMsDfPzhRJMNwxM17EPFi1LuGXM33wPyhkV4brsxwwxiDC8z4XNwpU7yTq4cPWg8geDKV",
  "key6": "Pf63iY8JQREufU3fs6j4cDh1Ya1pFtVDSv49m5zp9Y2LtGM2yehUGcYYCmrNk1AXHYX2Gg87zT9AJPzdyQnoXN7",
  "key7": "3wrCT3nGQWXSg6SzQsZspPsDaagMuEjQnjXNt1qap3hKX5YvotJFZS3XwfiZk3azqenMjykbY2gtWHcdKqrvkXJ4",
  "key8": "4Uy5aNubycDLL28tRGPaavpWseHH326YzYNzrzZprCp8VDEHEDVYG1GSB2YcEyqs9nDcqSWp6uhZdYj5kbf6mvcP",
  "key9": "2Z21mQ1sKmMQrbrBJ4XpMUCqbmybBiC6d2VX3STxPbrEdx3qcLC4Yihruw2hiQ2yYGY2SRuJiXcRhPkskUMuC6kZ",
  "key10": "5eyrQjGZFrGZ9ct67PohKuB6k46CsHvUVN9YKscEjmWfkxYHMUwoHXswNdSDeG92DsmkLwmgtrHeZHH1izdDJ9DV",
  "key11": "5RTezmoTv48gJj5tu7FrJjJb39L7pmXQaASYozeVLqViZcHKexbWk7fWLRm99j9kfKpyZkXsicfLoDpW9oZU36uw",
  "key12": "5ppmRzpeLBRzJigW7rYeAPCqpAn2uBjd4DCkwHPRNeYcA7cMmyotf9zvfxzXhjWWoj6MViFJn6BFeDpnwaLdtkAn",
  "key13": "3516Px6EEovjRKLR3WxnRSKgz4p8maop5iyfGPBWpSoSey3ijktG5EPvUx4vm596A7M7zD5MmJJMRqN5Aj81gpR8",
  "key14": "2Fimd9DoERiY1AghaC12tRH7a5xsmYrcJwj19SZXjSBSZTELsJnesybQtfg9uVWPabdxVDMWWZuHHz6mChWgrh3Y",
  "key15": "4zMWzaMfTaEzscTJRNrnToe4jN7TSWx8L3jm4pQk72yX7qFFxv59UMmKhnZabmujsuFbGV8FbapY5Ewe6YVxwyN4",
  "key16": "5sjKEUDKLRBgyzfURnMgKTyH8YqrDYY4XZtPTG1TQK5aKADmPdDaEB6CfBsQ1FzSfjS3PCo5DDFsSB8p1WGXdZHC",
  "key17": "4vkuBtg2uND2xF4ysBKKJG941zaxC7f9eznRAeJmK9fDd6FQRjwQB7XsNVCpMZEh6KyHges4WJkJPpdw78XxKkVB",
  "key18": "2YRBFBhaJB2SCjv1odhtfFu1B4vizrTy59g49rgzVsDDcX4UbxaAS19hU1BA7kqgW2eW2L1tsprvX7EYBeamRTfE",
  "key19": "PbR7eLjXLerrJaFg1b7rifmQQHLQZUTvQXsyxic23eyxkZAZaGDuET3fZt7YerKrWwwDNEvkDswKYvDWpEgKY65",
  "key20": "2ZpeeNeybugz524mwuy2fsrMATQnTFUois2oKFrSa2vT3ZzqRYuM3DG2F2GJKPQes4RnfAxtTmvSiYHoomGE8jEi",
  "key21": "4G3iRDkTv3S6AQ59k8oD32pLrq553MdXkG4bacTeEvY96miJMtVX4dFGmaNj27DvFpCccKGvRcXr2eLjL9B2qPwr",
  "key22": "2YvBKoQRKpb5BoX6ppNbN4dTjN7KXEnYBidgE7N9gnwseZ8G78cutybGVCMYjeakrUWy2p8XG8aJd3nq648oZbjH",
  "key23": "5K2enZdXq4pLrhkWL6TmPu4WeM851QC6W2BWGX4Qp5o2Y5CTvp4SSj9zXW71n2MdVck15e832eo99LdN8cjnfvGD",
  "key24": "33gaQ8Mt2y8wb4w1tkSDfdpK1yZRs71EEbrGFtXDPdXgJZah6TqasoixgTbw15Rm2yxb4AZBcWzGpDJJ1GEo5Qk9",
  "key25": "2rsr3RnWn95Nx3ajTHKByxWhhzA3UtXxua9f79FV29cnaFENeEQwM6QqPb4xYzaUxyqhXipEptE8LvJNLYbMQHwQ",
  "key26": "2JoYgzkNbAUgivNq93FcS19ttL2MZAJq7ucgAccKgACykPHhRFvzxwcqjgitvsAyfb7DaDZqwHcE3TNQjhNBZg63",
  "key27": "9vGaiZvmdkHDDRVjABzkqYo6u6LkDfVovbCPqSC7U38sqvmVEZ9bDiWw5Bvq3icFZB2ztMtXiffCaA3PwyGR3G6",
  "key28": "4ShNXm4bRSGUDpmEzqM3SgmxCFG4J3BqG4rDCdMEHs3AJ9GUUfno6ktkw2mzgJqQgDtutR2sHYvJj5ihM7LPDSRH",
  "key29": "3WbUQoePKJggtHDnKc5sNkM65gVouEM69GtoZGMLcAvybvgUx5DrJKcYJ354YPcX9vobCgzsyNCxpbZvSQPfSZYG",
  "key30": "2RqnQFvqMU3x3pkLCn3bkNDNehTzk8hUX18Aan6QB2ds6ERQViCgCv711XQAaHMQgQrERaCqfz8jUFHsqmMocRkG",
  "key31": "61KgAHShiy2CDTd12ZyazqBLSEmzzdwdj73WXicPRAe77zhcZFyo39RkhQuKBNDGDekS2YUdogC8hcLMKChAFv3V",
  "key32": "WngRYEydRF2tPSrQdfK7gmTBZHN1TxQTgchUQdmLfYRxumKoW7qqVU6pGSUDFqbqzPCad5HGN3xxDrnXrmmF5zw",
  "key33": "57GLFQATZzQRe8kYHiKdAiBNH4hLQHFXDkpdFdBTrpNiLdKwX9Mj2M7rXNQLgaNDj3y5fQYi3RnbNMPp5dBm4YNd",
  "key34": "22gkN28RavwdisMV1AsY7jvQw7AiSqJi8rfhYi7asDGtK1hZyeuRqi2d3gTN9EXUuPT36YWYUfjnJpo6k4fU5UcC",
  "key35": "QtiosuLDUGMSfDwJkxEx4vkeMpWHoS5wYGcf7eWGGsUu81gmkh8Sx41YkKe3zWkCcHoQTkh9FforkpNuEvq2E6i",
  "key36": "4p3RKHDruJ5dkqR7oHBYydji4SW4ZDv1B1ZuWGUEZMiDp89HmrPNfLWvrewzHwVkCJyCYngss5QxJ7ZwCRqbpkVd",
  "key37": "59qVQLrKz419ovbE9TfiJVmCnkhEiEn5hxuisxC3FeBZgi5brhgzz6RbQmt2DtJcsxUx2Vt7HC9Pmfi9DuApZSD5",
  "key38": "A8yYyq3ZiQNShk14YCfQH7qv6wDBaWAhbCKTLPSkaChJeo1cNzbYsYGK1k9MQxZiMHfuNs9Wc9DHyJSzNXX4t35",
  "key39": "4d4ibYhGPMs59d2gQd84TEtFpLRUGAqC3mQo8eZmzDmUotnrAaAfi6FdvBZ3KutmMa3DWSsx1WkGjEimyR4Z9Kbb",
  "key40": "5B3KS9dnWG3GqecBwbnQNhc92g3DTzfHCvDXvdvF7hHcR8xq5teWwJ5KyR2CyP6XpHtATqcsedGWSU3hRj9Lx5eH",
  "key41": "45KYhZdDoZNtkjtEyPYuCHHxAZwrTtVH9oeJLqq8HtEnrRRiFcEMibAUpaXBk9VNvSfdWQLf9r6okLgf14H1aLan",
  "key42": "3tLXqDfSN2TZQv5p7cQhRxvRuguHD6DhHC2p3Cxt1g7m9Qf6XSF8TJj4nSj45HizrAkK8KHs3an7qk2xd1xaYKpU"
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
