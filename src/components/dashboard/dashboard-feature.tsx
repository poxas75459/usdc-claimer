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
    "2nUGFrEhXLwgyTzHScUZzf4vfCd2uTs1aZofU4sxD3VSFWYa1cKbf6iA4KSugb6zF7Vnc9e6An4QU4hCXGxkn5Pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gRQeSJKENbf1eyJaQtVwawAiGiSU65CMvPZJaAWYcCnQKkt1bSauHMSCbrfC4Ckw7QQVnGTSVPu5FtXexzUDhCY",
  "key1": "4bS3KnePPwyJMMZHvTVEHp55dzsrA8nPSCGVREtRZD5c9vFjCynDKfyjzWx9Rv3ofiSJJLrVWZbosJjuwFavFtCe",
  "key2": "4a8Sbg1tmaYpW82syt9TYzSTpQ3XjJZAVewF5FShqZtWPYBjNyH7XFFSiutwdv6btpf7F3rWJc7xHoXmoRd3EiXq",
  "key3": "3bxWmLkC7Vp5tdH1DWHTiqKEoTUwCBFSEND1CaKFVoiv9drjQXFEjG8Ut51LXgt7bWoAHCMBKrZuUEe1YxABJaDq",
  "key4": "5KP4K9C7dFRVC4QSNa6d9nwHnFWdzVn33PtcjbcsJPCEnDVF5RaMmqETqKNtPdckQvJncFz3feaXbE1EcxwHrcbJ",
  "key5": "36igGGPNSFgeeKJrmeZQg7j4oEExSBJEcJM2rXPVXuCqQfmXHRHUu7wFUKX84aKdGz1ARkMnZdpwDVEH5rJRehNX",
  "key6": "54Fs5Nn4j5uQLGAYXFQRSuj4dFSEcKWXBb1Bzi5j7K2To2z52LVQ1GQ3LwjLKY5p7e2V84EwMVYYSenrU7trks68",
  "key7": "442UhuvGuTxY8Q5jDYbBhGA5yHDV5yTw3emy6q8YtPTgcPxdVqkPaDRmjyAhP7f38yZtSK6FAJ2uVMDCGTq1ixMe",
  "key8": "3Gj4S2RxeeDz6rfyE9FH9Q78g1g556UzwqcNnWztKYaEyBY8oWwgxg8bFrnPFzwzKJtiy2KKNHV8CaddfaJfhoSt",
  "key9": "3owuJAXFSrPogGXrmTUJ9AKsxZHzn9zM7PWPey4pQi4y8dz6xtrf2rjj5ftyM5A1ShDjc8vpKZgUNMyTaTa5asq4",
  "key10": "3of2zek5xDFJw7Qybcu5dhCN5gPNAR6W1AguR1oAiRshBXjbnYrduVyU7C9oTFbVXg8QJtFyYio96FpbTsFKigE2",
  "key11": "5JEyroM2VXrbG7aksVEY5XUVnuPAXcA5xMMcCxTfRkYrK4vbbKSgEhTkd2ojBPYmCRMYmCx3TK8QSeY1ab6hbsK3",
  "key12": "8am8XF46YCY8AxsH3osH8RjRnrYgG8gAkJTsdAGvnv3Vmxv615qG5b6N8NNt6iNxLib9iU44SpEUPsJwSWDGRWa",
  "key13": "m89vRzfX4vzWx4C8YfZcv623AjdqVq2Y5vS8khh4Re1atyJFV7RnAcjTHKrnfdvSRmyZH1eQvYMFTs2t1BL9Td5",
  "key14": "44t9frtAJWG3yo8GWUZVzKizgNYDRndCjF4M85P1SEJLUA5DBnUimd3LdFPDmnNGYbDZ4cj2kCDet6BsRJpafuxJ",
  "key15": "3wCfH4Dfy2pbvtz5xk7yvFEXx5B5gKnkGuWzRx2Dm9wTsxiadH3EX1zviFN5fg6fFv46oe7iwYKwjvaae5aHPySb",
  "key16": "Au5zYGVS4RwTUPSdRT1Sz9HfzKHrtZWbAcT1UqBHaxYgGXwuw199jbKYg7SXykPavm3Gzq6oFFrwtWeQ3EcspWS",
  "key17": "467HGxPbTf1Hdh5Mf5hfGhtxHhQg3ogXpWY4LGadzWRF8FDEtestokSinEkXWJQzpy2iTnEuyaap3YHh9ucP3VWr",
  "key18": "2QWsdYyaKWTEY5sgLTy8Eu4J8NLrHDHeiXW89abCGr5zUfD9h3KqyB4vVemYwTpcCFax1ai5c3x6EeomPHahtE1c",
  "key19": "RcngbGKGXFaHEkzTy9CrDGr9YV7cP1NdGriEssd2ykcZ9frLCp2mBgk8oLFELNdtu3YsdwASM14Fk4zxPi3B5Rp",
  "key20": "4CdxFQD1iRj2mHW27DJcRbNMp5fvPSmEs5NxC56gieFKa2QKWF6DTaFhp7FQwBNzNHsAmMp7TV7A6dwcJjbV9bR7",
  "key21": "2yzZuuDBSe4YWiiXzBwwN2Y5TwQrzHqzyS96s5jxViLsDkGmLLa74UkX1m8CisosEZHx5W13Pjzz9JyhpnzQVYLh",
  "key22": "3LAmAiEaVDV9wiTc4kSBNJDHq9czUEQwemSUzAt6XDsnMLbiJjvxhcYJ8krexCUnV7QmpCYTWN4hC5Rgdcp7Huow",
  "key23": "s2867FUY1hBzNYjGkvBPqxDch8rA27W2b6s8Neo9TChWHrY9MdtBu9XbbsgEC4T1nM7DJVeVFo3Pq3ntUPsekua",
  "key24": "5H6oZyg5SbmXrh8x1neXug6aJJ1xajKNvT3xMTSiizXjk3wW844iYv5BXoUcNY9gdqFsSNh693xgGevvosjtBc1i",
  "key25": "aFMjDtJrnyzqSHx7Lgh1xhmtKKhjkGBZ32M83XG2iSPizmCPTHrWmSeyDsvSFtWcFG3YQQwkxJ8jEX7JRLc17ZJ",
  "key26": "25JmFCxe6DjEuMAxdWYhFeWxF8AQLPBYbrHuvxdtygg21959p5AyqtVSLC2sQweF35H5AWMMj1ZkUHefZQQ5nYos",
  "key27": "2TbUZyZJsJBrqSTwt5WwsfVcgfQny1En4q9bJXQ6QoPiH1A5tMNSFP4Qhnp7LJWe6pD8K4RB4NJtfzJSQGDM1oX3",
  "key28": "2rhnuMUKFrL7byRXqRP7fiPmL6kiqUmScFdtqu67HykStTidXHaJJRqnGor7UNJ2ygg1dZT1bdEh5UhDG5sDDwyp",
  "key29": "13YFBVZHup1XeDtdL45QWzrajgJAUpHsz6wjpqqPujzX1PZdViXgepvLiLybPD41tv1LmnJrpdKUFWDCC8FTWrt",
  "key30": "3kZ8G42aSAhyLtARoakxAzFPmrG7AqPDfBTMXHTHB6XNyC3zXsqhtcMhCt4QxeWHHx49ybswZPKQJNQPsAXkxrdo",
  "key31": "4sJokAzx8z5NpZYMvcsqvS5pxi4szdEibtdHLFkzPLvAVyfku6U7Lykz1MGh6NG762K5KU5e8KGrsk2diFoGsCTs",
  "key32": "4i9qm5eWiAKStC7tjCZ3931V23UN742NKtSka2KWEzWGgYhCYm1tBaWF227njvthSbbXkmjzaJcrkEvJrXELbFgc",
  "key33": "3mkmWS3UfP8jBbJuVFvEto8wcwPYhhxHb7LBgvkNRXUXNV4etxwHefF1hw6HMma3WsUSMX9YLRAczRjV5xXkZTqp",
  "key34": "4D1AFUopE5uFpFN2f3LXdBBdXed2fAyV8rk7nL7M81KZh2JL7miBzWnYCcr93RzEvqC2Jt8T8sE1RZfrSSnvavyC",
  "key35": "5n63bzXK4ogzoKt7hWC4tJbBJeGA8XWzFiWbnu6PuzqyhyvQQ8kPECZMXZBMyHsCioXVbCPyoVT6MjiyGKx8ZJtm",
  "key36": "5UdX3PfgcDYnTpV3oV9PZYoLnErnLsuVXfUKUvc7MExSM9ukD36QMokC1cugE82RNdd1yeg1cUycto9X7W6Sx3eb",
  "key37": "kjyn5cgRAmbkknK9THW6Mr93EovQARxcCW68vE1a7mhBbvn4xcUNfksiAkhDjFWhZRW7TAHy1z7WAgkB9udSQBZ",
  "key38": "4XTRA1JbnjsEhkUJDUz4GuV4ALgRFEuRdyBSmQtVTpLxkHyEFwH5Kgsgk9VKY64Ahd2otAaGiGNGLdedetjSC8oR",
  "key39": "feFg4sJCvn4FAjtuKEH36fP1fpse8MXcvdJLhoNPdND8DJhgV3WWbS1tMpq1LvS5JcuZQK7BfPpxTwJuxQF1379",
  "key40": "4oRxsT5MsJLqbxKbViyWRNtkLGuC64Aj39McRSGfLC5KAPvLxPEcEPvqHNF2KnVrrQAaKrJHARCoYadvWNp7Fr4m",
  "key41": "2krgMPX1fdsB7gPWAUFa7kb39QEvfhh9QeteYsGMcGkHCsU23vmq1sjntqL47PjgKyef5AQQDLcLaUuYHJf5yeL7",
  "key42": "boJP1jz5GgzQPoYSEgiSsqDhr94eHdreWrfe2zqux9hXWLQyp1hjYgxzFaaW8SxvLuyURmgHqkvsx4KPuKPPcSN",
  "key43": "5TgMg7WuDHVk46mzJaoQmq3n38TsZnzDPoc4xKjJH8ixE3p4qGdh8WrcSDVD5buKirzgKUeyFmDKEUR66DczK1pE",
  "key44": "3fF4tPnEZAFvuWpZZ3DoGkvts4Y5s94Q2SmuER673zQP9yLfP4YiXET7LjWFXMWcLrX8Wa1Gu5YbEvynyTHwsLY4",
  "key45": "5NTviTA14ey9nxaJm5MueR37gm5GFAaXRnCMgge6vFmpFvmupdBaVPoUiEZdTivMnwayeQ1tgFjoAqd3rq6mbYaC",
  "key46": "5Ld2AHGM6o3yvhA2LFFKsbaBie9B4MAut3ikq2UFKtNjDJWvA3HrRBq5HCHcQZLK1HgtNVzfDeHSJbwkhGqUdJuG",
  "key47": "25Jy9zp1QzFgdGnCFq3ziLSjb5W2Zr3A9cF4p7jzvRV2ZYWb4jV4etWqNBrRCS6mukJtCiMMpo3uKLEL3hGBhzZr",
  "key48": "5UC6QMAFRqfVd48ygbswTuTom22uPMZWLDtMB2SEApTNYgsUPswGde1KY9D1haYuN5UNaB3KAK1KFYzmcMMEGWah"
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
