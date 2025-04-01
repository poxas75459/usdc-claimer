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
    "28phiyWi3cNZa2CmDEiw3NvYZ4n4Uncc9YNALMPUJ9fwj8W5YumYsGCkxBeDadjRUhgLnAggmQoBAhsom7Tn6ayZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fi42xsnGhQT8TajQSxEiWQnwER6Guc13KK3oH5WE9VcLLwPEBJo2itndxj5cSnQTcn4xk8YwnGScshRGrkf9FFm",
  "key1": "3gtoR9GE4wfdVn1LDGcU4MX8NUHm3EEPt3coKstbFvjA1aQnKX55KvrbyJDMWEH4cY7hy8DquwYTX9swDjLNJD4v",
  "key2": "4Ku39h2KCqNRwJdoBVDWsERoMwxDbuUk6MHWeTfH6QUC95uEgxAmbePgUJq5XpUmDnJRxmZYwL17v7gmABgC3S5u",
  "key3": "28Kx9WwPsSHRJDRXVabjLKNV3Vw8RgeDRzxwgqKX45RFXtAN9NgmiaXFcVoyAVv9uC5AsoSQrAfWd8i8G2fxGgiS",
  "key4": "2dvJyggzNB6T1JNgu7atwVrtFEmTcai6ijHikbpKX9YPLs4Rds4HYQ1eJUbz5QqECM693srqd5ayJegpzynrPJe3",
  "key5": "3kuq1cQk1oKN25i4s96EFD7ks4jpeK9mHwb8gJUUWw45KoNfMTd5jpvwrJqryuhrcoZXiETxK2nfFLHGGdh2bvYq",
  "key6": "5SYXudBio4cAnLLzzNSF3Q9HbQRxd7LenodH7TUg8PwhkoNt2tR7EDj9CxMhdwMVNerxetUPZyZUSBnxAbH41Z5B",
  "key7": "F78XVTT6uNPbcAGq73bQtwERZ1qUctGnwa9QzzVyEJQ6GsN4NZA2HMXDYdcqEBoC3bBX3kgQTVzw5bRrMwmDZPM",
  "key8": "SYNsTLBoRWpvPdo9UUBTWRxn5oVdoNw7AHbZ4sB4hfubdhokyD4UEuz5WATKNXs9JR7YsArP7XjxrVKT1ArZByf",
  "key9": "4H7fi23Y8zA8nhaKvcqqkenCG4JrwPBxYQ5u97TvgC6KHT6XVe8Y8eSw6mi7iNjfGfSAvNtcxtNZUiNHzfi81UFB",
  "key10": "3DR4kemXc5SYrT3R9C3ACYYn7fKUxdqDyF3FnRrdutSHddypUd7WwseXgAv9f2pkJAG6GF9yAJvStJrP7nhdztiS",
  "key11": "2wTpSssDs4gGokvYZnzy7D5WKp4QAGQnKCg92yvgecMARgE5rEZpVkjbfmReAtFMFBuNayjxcmLy2hdLv4PgTCCw",
  "key12": "4qFRKV9ezvB8k6F4GuM7GQdMEWYzJDADHGgXQTERmwpx7Nz9VSDtUubvFa9h81owZV6bifwuqbkq7ttVkrtvkgiW",
  "key13": "3Veju3idWms2rZhijpeZaChmco9T9GDhmp2BMXFT7WEMcWeQyut7er8Z4tat7sW1oeua29pgLFgJBkvmFXZ7LfN9",
  "key14": "3sLLKu9LRc2mee3vbyoaxiW5WTrFjFDg9zHXy6D2CAf1wPGowd31ydAS4FAv1T9hX1hgxdXZA6pg9XujzwckGGbs",
  "key15": "P23SZAFLPQ3JS5cMNHzNfaXfZVSjA4sGdUHKPXg2rwMoEemEg8STfz5wUxw4EaYeLAZJeuQ7BeMEgJLP8BG6wqL",
  "key16": "3z9apu8VFDGtn8QopG88EdcujuHmvuvyu7X1q2jLMkcyC2q25uYdER6TRCycorJ9h1YSfo8QDGqEb32WW3TvgU8a",
  "key17": "2NrV14rBvNM4NY8X4vrsFUvedWZEAwT3R3dT7zvA1EiuVB753pSwvH3nN2JgrKtu1Z9ZPJTXZNExcKkjtpCfCLLG",
  "key18": "jqiiu3kKbZsXdJxoryNfsJTHz2Kt98KaJmJ3SMijL2guBSsCSjE5HyoGAuzwAS7XTZACCcLD6dYEzvJGeK5mvER",
  "key19": "4gSu1ZHX5KPLFrMjMXJjGNoER9pHEMYbNZM88vyxLfJqGkajBpScV5DfQvy8x9ju2J6QZ8q4veHyhU9nycDwtWxC",
  "key20": "D3VvmanVeATQ56mTRNjWcTmGTyTWCVgH3iCsYVrTQ1U6K3mLxEfmmWntVcijPinTnvihd6hKpqyqYTYfLgeT5Qw",
  "key21": "5VWsQpfmik3XgTPvjTFYTKZNfj4NHwFt4adtRmWA76AHskpp1qXYR3LSxNCyZ1oCwUSYApSaqGCRr64SiEAQJny6",
  "key22": "5EuREebU8qJXGMZkNL8gB7hJJaorArJbAmn5tRtoMpNDfEBEZepyE6C4tUZ37z4c7YjyPn1pz8jdNGEzNhniLy8G",
  "key23": "28axhAweAouurDzBnfLq5w7xV9taMR5VF3mYiNURJaufgVc1okioxhaHitadVXq9kTc79eEGckySRk3gBMaZRKVg",
  "key24": "4MBrkcRGpyzUxVBi9j4YbydTSwSStqxUyyBoF7vKCVZKQTmajTShNgbooahKTQ2M6iooiZmSx52Tz4JZy2v6m9YA",
  "key25": "2H2raW1nwZnuSwqQgxfbfGEnrAoeG54aD5g4stVihL1mkHeezjKoLicZi2BCVCHSbNkdcw553Ea1NYq2tmSGRB2A",
  "key26": "2ekgycEwNvgva8nguddK9DDUfQsmT5DU7E8SPqb95bfa3aiLPCExphJJH7rjXaZGSVHuHeBdxqzdSJXvkcQTs9Ce",
  "key27": "5WYHzAfwty9krzPfv5CgDnQBrGoKtDGp2CVH1tXoafZdAtutf98nM8Lt4zLoS2kLJaGHG18hJsp5RLDTecaTMGFT",
  "key28": "3Bt7PPEqkToGPYBhgnVPVZ36TRq5g5QQciRcd8Xc1wjGAbV6RKtBU6q9sZ9kj3KD943uhtXU11j75RFqgkZNea3A",
  "key29": "5uNxS6RUcEGs2VhTVKRRWYCrMRKd7Ft9knVywe5auvW1LrexTkp5XNBZL7ZuqHg56rhn9yB7PbgyQ8ZhDsE8T2NW",
  "key30": "2UM9KRXF9HvnMAJbzNH7JhNR3vs57CR1Vm8EbRxXYkiphpC4sSX6Y7dEA1d5PiKoWVWugp1HN3qy6jqNrhbqecDn",
  "key31": "4K4Dkk8jxMLxx6RMdFKuSRJpNRQwUZT2shtEmg9j3U79qBLbQ7WjkPa7BeLxyVpvUAyR7HPf6BbKVjaqn6nTc2Hq",
  "key32": "5JCZDjLDFB6A7ukisj9H2KBnBRhvHPCSNFwi4wCkgXRjAjrdmNWK1CkWh9NgXKQmEcin157meDwpda7Ur2AyqXv8",
  "key33": "meTMS2qgFTwe3aYF9fzDoN5EKP63iWtwTXswVPhQEW5JFTxV8WyqKkUo6xVNgTck3AkGyt9EFpFQCkx8VdAqU8W",
  "key34": "5Vb6YY2apnuPENKCdKG8CaS7cWQzjxNnbnGK4aqUaBW3t4YnNkzDMJRJerms5B6GuXkHk1pFqrmb2ewbH9H9aYdg",
  "key35": "3Luf1wLX7wYW7vvFX99MvxrEEmgAgtoxPKdcn8KjrPbjzo8GH4HM2CUYoemhcy4hymZ539yTXSPXUzsN4KmKp6v4",
  "key36": "66wRWvaUC8p7QwgMQfbU5DUFbu6pWGb8i9KTbxkRqUfb64NqD5nJXxjiUK72uwUecCAmd13kdkz2bB725TS4Nk1L",
  "key37": "534Seg4fZEJmZfZTrRTXj7257cM5xdMnsDUfsbiYWTqsUC9b6hh1Et4RBbDakhRHPXF7qUy7JnAxYVGLayJLvjCp",
  "key38": "2nvdtPivvctom8ejz7kRrTSYngqfFTSrTY4oxyZRcCAAydzeRUkh9nZBXQG6VnK3EV5V5xDar5PKacaD3DqME456",
  "key39": "2n1Dv44F2kWrw2Bg6PLJWptSEqgHNK8KMxvbSGQ1jLyKZwU2CqtDTBCtiNKWJn6ReVNRkT2s89janSeeZGTqjNaV",
  "key40": "3FvyFAYFLvZHuCzR5w2fPgk5ijMo1qbjUTe3dR4DiwneB958WFNNRw4x1KKRkrBLRDhutDLGe5AQ5jYJKHEqP38k",
  "key41": "3DoowwFUwFpNewBkLEutWLXPBp2eWbK4XLSNV1LTV2fx36qZkj95e4iZuc7B8d5he9MYaAnfM6whcqFqfQMJVPwL",
  "key42": "2iGErq6eJGYTtzyM9B8GuLapETGune9x4Bm3GWfHbjsJgb8pZ4XrrA1ywCJNgNGwiquEDU5k2ytNyJrC1SuLouov",
  "key43": "RTDW3ZLVeenBdvfvn3J7yGVp3pbRCSvk2uVxkoVudQXjtP7nhZDjiax6dhhBQ9Dgd4Js7Tp4GMAwm3txmj16HJM",
  "key44": "An4UF3LSucZGsqfNxHPaVMPicQYUA9JUeriTZRmiKqKXCvujj1unwKRAr8KjtekeQKp7qF9xDeXzNxYcjGq82eu",
  "key45": "31p9ZWyzfqCpx6CTtpeZqMASyVgiJLtyyPYEPv2936QMvyFS3i553yXMB31D9qra1HtCj2Km7tkao5WNPr94mZQk",
  "key46": "zxrQ9soo9ECFeMQUffBSJwn6JdgyrpTJTTjnrAc9kU12j3XXDTCsHbHLGhVwqsoNFfHydWMxXrEA2K2o3gTQd4m"
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
