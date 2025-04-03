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
    "4DEkTVovF32puuYmtxaT6dunwUq4VNg3cgCVhksQC7BNGg2k7pGMP1pwJJeZnA41hSzqZsggiLseSrLVvWPNR7Uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ycPYrjxMYKVSLSvqjcjC5PDGj3gf3t7m8uqPHNh36yWQGiPx75UtizRJXe5BrmXhVoaB3aWZdL48YZcu1SnHbDo",
  "key1": "PCLtcjPuQZtYjz7ZNC7YFVybECpmp5xRQ4ACHab8BWVDhXodkzMQfroR3inN3GTYpdZg76ntKjbtmzi8WiregQv",
  "key2": "4nxdtsbVLF1PBLFgow3Ru3DkFztRT3LngqgNH7n23R6Xi72rGYjsQFykLWZy3JVr2KUkYZzWX6PAbEMA5W3EKPQk",
  "key3": "3WTKywzBWAJGL6nVTTMDBttem8vehWnQVPdYXYzf7qjvAcRziwqrnywR8P5TnbrswNQMf5bCfR3xi1JCAkX1Ng3W",
  "key4": "5tFGNBckWdQFQKtGbrRvHjWCPPKJKLjihEgfFeoRYVoPtppcwTL6WysgeMfZQHUYeX6dXPGHizddNVyEUFCXjhjw",
  "key5": "3oXcYSfwWSzyWoqiVVcLVLFRXxa15zebXvkja9tkHxGjL87a39nt2N82mLqSP8YTzrepfaVMXZc4hHJogKAR8JZC",
  "key6": "3ZDdbcQDRV5zdXa3cckyQKFaYbNEjdP7e9zAXEfW7mGBWYwwBN1ZG7o4DeXuFxM7bknkrHciwR9VcyxcgyWnfbRY",
  "key7": "4Ho2UEYu7g4j6jvJ6Z8UKY1FCQeFJzAtaX6WNizebdqxnbapnaHaJEVfDiZsZmKfSU9F5Qe8Thj3srbkXSsjLn4Q",
  "key8": "5jQdh32v6NPgS2UKcf8hbPXqcWm3STKm3xkMDirqnnJjjaUb6oJeQ9ngjx3Hpzz2in4wLvnyXKGoTg1eruyRfQFj",
  "key9": "3txtRxjKBhbXkmm9aEVcAwdW4Cyd1XGtMRaCFtdZyUUvXS1mg1oxsFCyueG1at6j2aFFHuLbbqeA8oDPN3vwK3Vt",
  "key10": "4TMBFeoiWir28A3jFCis5ofA11qJyKDR9FfTC9BEMzqVJfBePYjQ8Bb2zW7zwTf26xuk9GBkNAQ3Zg5ygWyYMEaT",
  "key11": "3N8jQBFcVeNPARaWn7YaVZUnX5dmx6bSACPh2M2cqjzB75ezB6bC7mktrSQaZTJcnUVJxzRBA8h8zu9HszFmJRmi",
  "key12": "ZyjVjNvnBawKpP7k1GH5veBJo88Df4nXThwaRhz368BitJ5apySrqZF5tH8gFbzsSfKtvEiGqbxDbVqRyQs9eTg",
  "key13": "4kPZ4nHAiCiQmoDCsdPPt1SXJugDcFvsACtKD79fnvhvNTci2U1neQc8RrTB576pjwLdQFhHN31E3TKAjvXN8MLn",
  "key14": "62KYXFSt3SCkKL7E4tixDZdqbHpHDEU2o42QYyyKW6MNqzq5Xnt9Y19FfrcnSLkvH3H9fiXPFH3eK7P3pMjHM1HQ",
  "key15": "2n45RPFFMeTPWEHtLUMJ6dm6dhrUZsypgtyNDde3iGY7tNXnjwrGLcTbhfkfnk4vPVMEtt5G8kc2nbyFDZDAF3ii",
  "key16": "2gFNawwZcQt7akaPGCYdLD86sFJZjSgBB7gScvodbF1BPGoSRk2hN6n8dU4ie7jVrmvuEfVuyPUF3MShxXRFanYc",
  "key17": "4rfnzCFfZEJ8F4D82ZPWi3LnCNTQ7jKyBrtn7p8cMjHNYy5FRNkRpmUCUXPr5jbBFVKmRkw5Uh15byuJ5pE7Vtb8",
  "key18": "RyABckpH221Nzh7DQ6eLaeERUp73NmQceUj7t1NmqTqkhqbnJGg1qoCU1a1M9UEN8SZu5S49kuKHAGCSyARNTJR",
  "key19": "354oibsqffTmZgJezL5NikWdHRntrLd1VNW6LSvTHYNA7i19fT3DqNHwS9NnjyQWWBibGicdDCAubXtnGggvidt5",
  "key20": "2WZaJ46ez5qfwDRGfR69h5puCZSQ6PZfekMqmGgH3BCSmkUf5K8SdA6M9XabWTE6t4iUNAd3aYDeA2NvnKr1VzDF",
  "key21": "47ozc9RHEUo8gBg9x8ovEy3JCZ9K9pQnuL44DjhCMxcKZ6a6wmzxDexintxkgVSEFDMGZnaGz5BHsVgxfxbQVdq3",
  "key22": "31gbbWZf5zAqLm48vuMy36Rj8L8B2pCKgcnWbBbDi5Bzx57Ys1MhUsqhMG9jzTL9wyJtGmuUNzHY6H3TDLivsLoZ",
  "key23": "3UDtogNpqhHeSVEbBZuEmKsbvywsnZgzc8SnDsPMSxzzXWbuRAamgzorUvqWnc5mFz2jwGxxEYbr2w5gBZE9KTKD",
  "key24": "Cm2uTjsuqdynKbMe7mA83ZHxN155ohAtwfMh71a2wcKByuuU9LesMk1tqNpQpnUddEw5twv8hzYbVt1JrUZgPaR",
  "key25": "SQ1WrMyFbuvTJ6g1X1tCjgN5NqW2x28Vs3PsRH6wPzd2HCWPxorm8VabHeLZZw5CCjdvyUfs6Uqjvrgnp4zueXC",
  "key26": "5MAioh39Z7MDxaKJPMJwvMxedbAdmxLkZ2gdmNAzWi3X9D9N5SounqWE4428s9YcTbuejd7Af3LVEwv6v58SQsM1",
  "key27": "2TpHAqSWFL5CVHrPDzttUuJacRwGvEja9etdNwABHgYFzCAfwHwhPenytBT1gbYpC6ZbxG42Yc26SMLUG923sf7",
  "key28": "5DDK7qsgg6g5SCR5p3GDpHPds4nwDXUGMKx9DP6ngwQdEJHTPkksXxau2pJmrePErPKiyL2ncRe6DkossujRCUty",
  "key29": "5LUDKntSv9T8Cc4fqT7pQfXX6g3BShgEU9iFv9bNex9BSB7oQaTYcq5JHbNSQsi6x6Ek3A1qkcd3jdhca3DupXt6",
  "key30": "2o5iggdEusZPBeYMQuHk5y7Dugu1kgmwBLp5e54xDGoZSpf2cSiee7ic11Hcx9pLEdBh1zTqq1xcBALL8Fq18eDf",
  "key31": "8xGYyqnPVgxrQsspRpxgzXPp4GWdD3uf6kbwJ6LSBMixdz8KEWKQT1WRpTAFaxTKfRm2cXjot2suQBUqJ6VMJTK",
  "key32": "4XoEKJugDoUD6wJ3zjyvygarGLwNWowVQdmvyvZSCnpDmxNceFP4mAcHPyZzYhytJPaAZHDu8SWGETY68cVW12BY",
  "key33": "2wX4HNyHGKSnK752Vczi8qAGB8r2s1pyLhXDGiqR7h41F6CQfoBTycbKZJBwfAmkN3ZaWEQ41jjk9SwBd252G3P5",
  "key34": "3qpiEWYZxrDtjuitJj8QydY13gtUrnduUc51YszH8mWwPar1pD6D8yHVP2iXfowwJQQgnYgF1PdrHhsPLrg25pyS",
  "key35": "2y6oiUtrmnXuUYaM1CXi2uB6a5wo96W8aa7kVfw6J3Kq4wwEYWcMdqeMcAX7QZSbG4P6gTjr8FqH5Bxv8pHJUBTz",
  "key36": "318qrbh1sHHWLgF3HjuyeKZNJY5ZwuzwSSDG7MjCJ5JtA1yPWyz4csPCQSu7JaGcNhxqQ6BsqyyhfdTYZreGhEEU",
  "key37": "2WETQJCVPfj5uWA9bFXNYfv2hVtmBfLdkxQEvzUAmphyRMLc7FUn8QguEQwFaVM2h1gkXSx72XMk6m3muJuYQ63a",
  "key38": "2QsAUQ8dtT7RjBZb5CwTaCtwKJfhgTojyawwFPu6MJs7zcqoVdZL5G5tfACt7jUmkG1rdrNZ7dzWS4WtTr6z8Nwt",
  "key39": "37EgK9MKsDqviHJb4j6dBKhYh3xbTqpPJP2ubUR8DbY1JRsMskr5iczB6hUdD9LMUnz8f9aRkshXmDwUbhsNXBoM",
  "key40": "2SjMY6Xv3EVrpKUzwHd6xmZn8MGMqoYFZNVEyXzkVtQz8ES3xQKtbBTnaewbLqNP6FyEnDpgH2m51L5qLG6MmN2h",
  "key41": "5CcY3J2yTUJBB4fgjLg1uDoducrErApVJ4KatyRuALDiyh8USELF4SJnF5dzZgyGdvkvjbBJphKx3tUGFUi1z26k",
  "key42": "5JGw5N8GWCfn5sQxkEq3RELAx7B1yS6iCFZK3V5EVCqatDMPSFcEiu6ev2iBXPRrCitjfUNcEWzn6ZMmZrFR9hbt",
  "key43": "2fCMAZubHLv7GXS3EThw9W51YUM8KgJmzwz2QvJ7NxvwZEcGBoZAmLh7T6BYQaTZjjcjkiUXEBQ3vND4WRB3qMcn",
  "key44": "5GdY1ySQy8h7AbX8RntTAKFoKXn6nRW32JmcE8xZwA7MkrCbmx7aWs4814gQrdo1kk3BmSwZpgQ6NxMc1dftrAPG",
  "key45": "2zHuxA51gmB45ooG9XYVRNBkxMnGUvFL3faicHtZWMZCBKYk4SKzgJkkFURwFmnQNzhpmA9ZeRA3ybC3PdqTvk2u",
  "key46": "5m8f9cy6KhrfUR7eSSup8X2evYx41zptiWpYb6PgwnCz17uNgJdEn7ybMNSQM2wBeamPz6yDjeupEzcyh1dn3Nrp",
  "key47": "DTaabCo9qG4XHXp3TAa4ztBrETYdpGafw72p34TGbize8QFyasTamZjc12iZ7dJw4Kzm2NzVBDp2wPjA3Ju1K8d",
  "key48": "Pjdc7HF5A62RWND1cFiHevtKaihvDMxscR9rWjU2QdmmBr7hRdvF9tSyGaypmWDtkpKoFsqz6kBdzQ6ajLvLa7s"
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
