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
    "2vTRM7qqGhM83iMV2xz6Rs6UKYwXk8ZWaojM7UkcLS63tLi6qh7tczmZ6am95EMBVvj7ewuut9wZuoxc3zZN2fB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HHj2WEGxUTV7VyiCyExJoo9JS6aAWyxPvk173pxohAbu7igGLN1Q1r8F6bHMF1CDMXJoKsqPsiAJ8MaBgvkXP9",
  "key1": "8MJYd12kZpM3te1t91FAhrseV8G43ZLNwi6UYzsPUwKK4cHNDJDa5scZ4LHhrMajXaqp6Ko53aLMNmHLQsQqDFy",
  "key2": "nmtGhQW4g19S5nKde98xa37g5HfR49TZcVipqZmehtePRberTz88iASFb34XT6xA8ZHQPedKheJA6pNbBeFiitT",
  "key3": "2CG8KoVqgQHP1rMhGHHPqoxpKE7Mb8EfePV3XjtHENn12fXFWKiRvxFmjdvzYXVPsfQ3dhu8biwydqLMeqS46k4b",
  "key4": "nJDggfBXSabkzNjUNeWhvZKi4rwDpGRma3euZhBKp2mA8ZBtTupJfm7pZMmrVpQ7g9NENA58pcRsPgFLJeGQgJb",
  "key5": "3nXTP4y2iKebJEmehERBGrNrDnqENEXtRR81nvjtTNDkjBab4pg85EdkXiNNAru5XWUWpddtNmzQnTEu2gVURqVu",
  "key6": "wuQWUskMmQvDV4eHP8RYHtMv2WK9UDjYi7SAShhEz6qMAcvi6gp7MahkmKutuh5Zb5JevSzrkVyxTt4ZBXhTbXg",
  "key7": "3Y46jGxKHeuJZhsiYLT4mjtvA2FCm2y2qkBotXhjdwro4M4ihjG716EyQB48kgWgQSTNaGPejGe279KZy672uV3U",
  "key8": "22K1iroqJxGJoaDb5rTTBcgZUbc9MaS626LdnpYdgjWp61P27b4ibedqoxUdFV6H3Wkp1W4RxqHJsSn51GM7FFr2",
  "key9": "584PQb7VEBGaCrwtRYFNmszrZBwN6e2tX9UYder2JrmNAQiV8L8N6rcEPXf6Q7eqJMmEc5QDvRqCLLZQEvMGkgt9",
  "key10": "kePCwrxoSSzG786qA5FH1AXrkCA5M9v9Z7HXxW1VVaEvruRACgfLUjgGTzuNsvGi3PL6CrgzQFMAmGrQmH9xrXr",
  "key11": "5Pa4J2EEvWKThJpXTpYsXYqhaA8bXRWKuEx24rBjNKhHYz9bU5HoYhb3xaxvN63JixSGB4qzBJ9A9gT3aDCZoEWx",
  "key12": "29NrE7oZ68WBUTfpyUf8sztVsMQWH3XKFRWqNcYsqHfZXoAv76cjPrSea1b2HPqrKBUaxErHFEdmqVFF2vTmRZhK",
  "key13": "dd1fquWE1dn73ARwjMUdFdL5Xsmp8p3hhAv6daY3PikrUNng4itLmSdMArvGVcFczD63TzLiYCfw6G7ynppqngg",
  "key14": "2MQ8EgwWd8f1pGMKFqA9ZiWTDvswvqd9gZtWFDqvKnPJ3GGBm9D328b6WD36n7uueiTnwLShrUHdBP5itin3BEgb",
  "key15": "59PzceQtdRQYNLh4ofGz4PHTygasXcHeh5DpUzzeHh1GcHfzzWo5HY1qitxauDXSx24W3XjDGdpeCdhMQ25qLcdX",
  "key16": "x6USNo14ym3FC4TF1CPmmwsPWsdWPY7i1sQLtiwJFco9KVJJUSKsTt4jZyPpwXwrFUdr3BjBbJKf3PcscYRW95G",
  "key17": "39WSSVpY8WtzRy35VyoPMTuCkswYrC83qRrHMW2Sz8EUpR8mxjvYrPGxSKLvDdK4wt4bDY8PfYvZeViHBoZf5qPK",
  "key18": "4awurxNiLvChiidW47cy6hGkxZ2PirrWpUzEs1Diz21QPX62W6a7hU2SNBVwEXnSWERqE8RgD38qFRsUKXEU9DpH",
  "key19": "3cT1wKCw94EWuky8T5aPaLK1SuYtTLkCusqMJg8zXPhYWxjMMDzNCxL8sJeSBXx74wF3k1cjaH3Gq7kKBcXVHxhb",
  "key20": "4ZMtKM4SK2MvH49He93jX3XyLA2PM4EN3MkY4i1ZXZinHDGaUBr6TwqBchRKFTjQ6dfgRzqmtbw1SLgXzsnRUhWp",
  "key21": "3gQGpknS6j7Fhsa1ry35Z643HbwaWksGGJhmJEZfswMqSxVwCwmgAGYVvFGXkZu6zfa2VwAe2Mz4AFjfeex1XbBC",
  "key22": "4zKtJgSeBHz4RJXKvz6tyBjXBoutGw9nn4JSX1k8Yw7YmwphgJgL5jxRLwTirWhvFHrMXos2kr9FQ9fJpPKdwi1P",
  "key23": "2mKkAgJrfTKeUnsaFmqBRT6wKHr1ynVGgbDXcjSXe7FDyhavkS59bNw1v49DiZAPXuPgzQQdynz6fp6hF4QKKkaA",
  "key24": "5C6no19rdLS1E18LPLFok3dDpsjhzrwwD6G4h8WTTJTYZW166TcxAaT6rFBJ6fxX3ZVx3Z1fVBh3vrrqETbuN4j9",
  "key25": "3QF45HLa7JrhyBhifdSe7WS43WgCDaW9pkifXe19StVHnoYtCNmFf7eSAY6N9Myj3bdTKhxzuSnS6AxFnRXuSAqa",
  "key26": "3BdDGTu7mWELMGKLGxiAQCBAdSNvusoSSYXrWQWP8gQMnJ31a2gwHW8deSsS1kbjubNrKDwSNAkwn2Dgzq61KccS",
  "key27": "3aeDKfdE21kaNLAHwimVBDVU2kkoLia2GMXXD16apz4NHjPC2e4MTSSTU2ikSg4AmT99iGnLp1H8LP8TPcV6ctC6",
  "key28": "m7ZvcckRMtmhpa7JzC5gfHXDnrJeSQuBgtc4qLB6PpeK2ezqnTrjV1bKWev71GQC24PPYaHMoXAEhNrRpFHdnUu",
  "key29": "2hEw67XZG5Zfa5m8zSG58QYpL3JSoNVBoSJL2Rfhqx1EFzf6dhSntvLMMPshZzaGVXt6ptjk4Mme8MtWP62zQHS6",
  "key30": "3iBGdp3Fq7Mw8qQ3iqPCenNhfxD47JCfFTwcU7e9AAWFF9sb9kP9ksYNfC2u7RXxzVK6peHrYKpEJiSncRP6qoRc",
  "key31": "2Dj1R6aENKtZ8FsNmkSK4ybmM7VNYuvaJB7WG3ZM3U68v5q6KWaKGp1VypwbgUUAmoKQgCKvM5wTauiXJTQBPw8p",
  "key32": "45YJLYT1ZwwnpoaWgJdqdkY7cXWHAr9TD4nScGViV1oz5Q9hbX4Sw1RHqbeEJm7kkQ8YxjEyF1b42aH1CYA2h4tK",
  "key33": "9ENr8WHZf1GwVRgkcKZNBXsfdSWDAXjZ7mmk6Cf22mD8BZ7w1pvmk9Zhoo1YFKCqefbsUGqUtcfV5hZuxmYwTRp",
  "key34": "2bpgwVmeEHhdmJuJrhcXrwoHgDXQsiXhvPmbf19bFRoPBhCYzqxM9Vre7XZdB6JQ91auaP6t8gLJA3j5yqwRqNny",
  "key35": "5NRvaEjL3Vrjkjb3coAo4wrnAsfPo843xEbeCSQEBmHwx6q7hkNVNpSaqraoXXMVVmNeFSCKxunNeXCxXE9YChau",
  "key36": "2dFKwxHatvGjo8PLoZ8Srg4q2wpvr3LGQsfFFAkpMGtw5zG4kiPx3AjbaaBxN4wj4cnXytYZKnUuXMseXH8wMDGq",
  "key37": "4HghEgD2ajbYoH3E7wiYhD8L8HxXbyVYKAsi99m57KQhkKtjf2vdWVAWvpd8G4yyGhP9W946MJ4JBjghQtoxk3gy",
  "key38": "5pZaTcyDr6dY5aidfCYbehKQ4WPFW19NYbksUJDFtb5ebqeVAMLpjgQnBupWvfb3gzGQx1ytK2dWXVpVX4J5Xs5Y",
  "key39": "54j1UtAoknL7xPwFnNAcUVVaYWjbbevVuN4zeUk3XamyCx1hfwxxQSqhTv5otFxNrnAw63G2go8qnhGCFN6bED2h",
  "key40": "4qwiboxaYT8ARqXpvbUzY55K1VJomNQRkF2YxXPsq3pjKBUyR7rhmyVCaBPpUkBwHnsk7rrr7zrPR2JHcLvTP3Fy",
  "key41": "tCn2X5s3jpfp6atGRq7zVtmQWZbLKiZwfPmugBBt1kW8yGeiE7Vhhy5ZDuEGXeiJMHNtycqZtXzR4Zq3dAHsoDa",
  "key42": "nrACQsVshFh1avnTe3Ms9hQ7BnN7SHJ9dfrSCaYf9qgdppV56CJWu77YAJZvERdAF9ms6qwP1VG5bVfvsFEQ2x8",
  "key43": "5Mvne6x7L2YEFsSYvaatwfd397y5zqGrXn1cvjWs6yK4hHpWzhP3NtRgPcFfeDVg3EXaNXfUnCnxUjcnMmij2uJ8",
  "key44": "4gqdaecjiRJFiXPyMxXWTsnxboEmCakh7cm8iuGV1AzdM9oEbBb15cx9di5TbkjdQSVAa3WUKTX4mmgUY9gEp5tZ",
  "key45": "3U6Hu8gzwmkkaGjzjCktN3rdcS5Va3N88PmV18gKd6amgqZkUGi2u1yhXoWvoFQ4KHafGBxuDbDxyGXkU7CBVrHh",
  "key46": "2M8KQ9y18swAFHyaZqiZTjm1HhpiA7fdfbSJ7MTFG9CvLBZLEzxzutVMFgtbN2kfKNbwoZMYq9SELNnhW7q7zKTm"
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
