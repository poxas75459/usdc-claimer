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
    "2H2AtiWHCF4F4vyGy6epuU1GcT6Y4JAHwR9pibtWoKE5DL33bjfjfkwbkT8Ekj9ZjqYLcNsWzguHapUCSDfr8JEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VxeHvLi7vniepktdgJb2N66DA7XzpnEMixUFcNn2FyVkJNMyYrH2at1V6Xd9TVGevXGmz7RN5fh14XNQNG7jyYk",
  "key1": "3hHJmgp1pp4MVkxHnmoAkPS6k4d5YaDE9GSa2UDu982LPGENJBw3mmuTt5GWVHP2bi8nEbRM3yrisk5eSTmwFQ1U",
  "key2": "5jAd5L85LhCnpVNXFWUbNLGZP8c9fppiUZtPZGTLUNaFCgnBLMwN8UnMxtzsAuZ1UYJ4BT8y9TqUN95U5occXSKH",
  "key3": "4k8umbgmvT214piGTTPHZ2sL99SaCqXFoRQcp5YERjhuvWyan3emrFtxczmgYGndCDmKWDhN4t8gtq5JQApRPZTd",
  "key4": "39dfpg2RMn2FNwHJYbSm966H42VgsspakFADFC7zeWFEZxcTKC9TJ4qMPL825Q3bAPajrV6kgmf7Q118LvFnDbwN",
  "key5": "2nNHpiqnKP2R9GgmPAeqzZg5efAC9m4YLqFo2pxGTjSs2FRrfeaGrNVXVMvaQv2FWQECUsBwqLnQ16zgAGG5zMvX",
  "key6": "4BFPwAg5bHZmUzuf4qZr6n8yXKHURLPaSZcrDAKKMYUtuyqe9doMqLBqtNLGWWdaCfaks8gNcuy7XNND35DWVxDS",
  "key7": "3AKVCsriLci6sqsBcLL7fPmq5fYV81PQbLTDVQfy8d1AfR2MVAZMVE93u2earSLCx23Ct1dweTvmaxX98bRk6KRz",
  "key8": "2X9ErY8h5jHRs6zejxhXSSMjfrVgFyWjKyJgmsQcBvDYewq6hfPr9gEBHHpiykXef7ZTrbELa1uDfdf1iQm2oX1w",
  "key9": "3NbV4e5kYqWyvjPnh32EVXs7SRFTc32SgQZgYQNuWNKkpzW8KLXgR2XztRRGhN8NHBfTmhQrPLs1YdnCCkXi4UrD",
  "key10": "2yUPKP8kNJwd1RH9Z1fqASLJA15FHwVK9KNha64wxr8hJCYEa2B5HX5KpxrtYnjQxjqLhZScsjK79NjwXoxpxqG2",
  "key11": "3qoDQqmFN5CqW9LLCn6hYP3xkHB4FUjWx6BUqfF6vuNs6riKELih6LLAFQa4WFQ1srjMZWofKXaDEww7g6gJuVbZ",
  "key12": "33uyhFA1htuWaYpmm41RzBWGsVm3XhWQkhbcrKsnXU58W1sdGUUTjVTCpVSz7LJxVQWvciUeGErkwv8EdPJA8TpC",
  "key13": "2RWukzsW9oTaZmHvEs4bHYwZ399FzN3VsAwd21VF8J5EmaUoVRigXj9C4wxENbj3y1sXMde2LG5GP5JFGTrNTb6D",
  "key14": "2YMvmYpfJo2mH8hL9oyaqumdoML5arC8jXE18VWoCE3pEmHnyj22YvpDFSLziddfJU3QWcGJHKtbKi9Ma43u1pFr",
  "key15": "2Y7NbJ67bCEETexpFGvS1xaAw796tMpfz18ULzKr5TspVA6rX21xK6ywzmaM9TBmLQYDtrtnDSYcKqEUh7ypbqmQ",
  "key16": "5mpcZBnYsoasNCDyUq3hFLW9cMpZGa64sg2PpmLgn5UQNdZFCoR7s43kc5SqfReC6kLH2K3ZhWSgHB7CbzvR3MJ9",
  "key17": "3cWWtLsLvAgZH3xfTBo1NWprDAnfkUPPTBupj24h8x9nCFnATW8EC3euFU1sbwr8UfGvm9HBchJGnMdeBdq8RiXC",
  "key18": "4BJcG4qXx5HSEkm1QxakNvKn4W7a8Vdoi2oTm1Msa7vTF1DWsaEZ1k3LppNH1Rr8QYR3ysCbwgBmYhNHhdxpnRTz",
  "key19": "Jbfgzv2wYkxKYNvEPd6NX5a87Zpbs28UjVq2aiZG2g7MkeLigpSb5unzYMCh4kQAi8tbRDdPR1BbcefPahzeUTC",
  "key20": "4eD2G6qccSWgPy763DmmnrBRvq6gPpDBkhUAEw2wCeGNeJbn4kuEV7wQosvrjrNDMTZfb7U77QE4in25yw9a2cvk",
  "key21": "66KTYgREjhwmEvWWhR8WqxAGkLmsmvday3G6Xtf2zyxC5NE1xNiwnmkJpvJupsEmFny5iYYT3sUffxTg1ckfvX4D",
  "key22": "3vgUvduzyDLnoCEc1AXGYhJrxDdu3D4VvAw9rptRHaomD5bVgeRkv3sf96fTDMwXDQKq6yJZksD7mkHDkreAYD8H",
  "key23": "3XUcNdLhzckRwdQHVSBme8WceefGrQy3NiiLjk92DjN1mYMbZNFQiWtg6LV2TyQdB5UW2D4KaSMNWE1r9PYWFDqT",
  "key24": "27ez7h6TdvJkGm4xi9WWs75Un2cwUwRKevN7S52sq5xnvnxuKkRNc13JWSWoQcr6N1qnhE7c36J3MTGyepPwDizW",
  "key25": "4pbqykKBEZvoVCahQWRTCc5pj4Fh7q3qF1s5GuPVANR3GjeGnyWqdZdG5oiqjsFrPR59KMWVoEuQFTsJc8xSb3sT",
  "key26": "2ZTVetqFdndtasSRzABi5GcETMGqouMnDsiwfVV5wAPLmvKgALZEJ5hb5LvsHZz5tZta7xVkkeFk8DpqJFJQQaWG",
  "key27": "3ykogepkJTYAdSqTxtbBsn6QcUbMs6BZsVt9pow1RMzccZ4jAkjkNpkA93vo4UTTxz9rA2XRiiULHRDtj4gd8tNg",
  "key28": "1MKSUNN8uU7SsPqdLPapRKZF1Yohs9wk81qDR8frvH5MT5tkFZyNuEpTvq6WxNsmJyPu4wgw2rReBQ3We6fgfnU",
  "key29": "3mYk1AqZKmN1ZDAadZ1cHjZULhe53QLtUPy9ZWmjPJD1WfNgwsKaRUAutHyHjhtqchwECyPgNzoGuSwYZJ5XmaAu",
  "key30": "4CG3VkHEEZfvtF5Hs6oySxumak9yGDHovCXDGxTecpqvoX14jLRBh8rVhVmq1R2ZY3yfFJ9LsbQLpsZKE29K8P4d",
  "key31": "43ZtYzhG2aDJLDZErA4BFDok8NX88QGFh4CY3CDPLUqhUBUa5TFKQQKmLL81kN6e4PdcQT7dZAeE1pt1BZnmuXZ3",
  "key32": "2R9NLZYcjfjaSiuJCgPgWBP7PxaGvx9L1b8aVnUxFnRixYv73D54ZbnynAaHqC6v74MggDzTB9uM1YYWL51K8FTd",
  "key33": "5LUNPnkr7aNZWYdkwaYLNiKp2AR5zRwyr39RV4Q2RZFmiMccgUzqiBbxgmEprNLT9nYZDywSzif1y3uuGTyG8i82",
  "key34": "2ZKmpF5Qhps6tFKgHkvavZEamdHFeVYCzv8GXHLd5SMvRXWC5To7bf4HEXERCSKQzZf5GvW5cKyjRQSqA4hvBGkr",
  "key35": "632fQEJtt5W9StSG5zQeYq6GnUdhHkMPnkFpxYL2UK3cdLVbtvBK5dAx6ewvb4QtY8NvMhXSmZjCehEwqDpDULj4",
  "key36": "xk4Pti7ZhTsRmtK8MypuYasZyanitKWSHbqM4UtLqbwBUaFubYZxuP3rWfrDuW1TmrtQtF3udRWqR8xFD7hck6Y",
  "key37": "47kSwsQFx4QmFmTHLrWR2yk87X7unLgreoiviyJfe4pkezun4uJ8NU24Erj1Dc6GsQZxxftn8SnCY9Z2c7863wUm",
  "key38": "5yqfGVY7zcAB2jStNFSDocPxVCCy9E9DGDxbNreLgFRkxsZ18rpjJd1fP9BZBCNCBBswSkmbX8QwDNsjQLZWK1NM",
  "key39": "4SkhX89yisA1YgnTn1izxg5ehdcB1Zjeg8U7Sgpd7AQsLHnuznMeDbwEwxiZmUUCJxUMbkxDbN8xejE7Jv4qJXa",
  "key40": "W5kDFuHXUPw2y2fL3QPAbScxBTJb6wpx1msitdmUz7z37Mh9TkLmGBBR2rEaWLWtrHpYBxvu24fp8C1X9fMQumL",
  "key41": "3dnBiE8hetmcjr4QGrQBnEEdV81ozy1tX9A5fZwRRng59jwP91rSxrGoMySCA7z4kwPsNVyZSjrgyWRCj5p4h9oU"
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
