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
    "38pmqXuzokQtr8bhajHJeUfHnNa2mtHrzqnsNMY7aGzPtbt3KyY8xxbbYjp5rnDWFWshSAdArd8iPPRX6om8rwUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WMpebVGm9MdSp3YL4vcaUKSxVQsNrPZTViz2aU3LMyH4fmvqoxKexckAU8btpLXYMd29d69hZELVKm6DDJY9CSs",
  "key1": "5eeToxoXXsoqvY4xqcmUPbNu2KTP57L7Pj6ayPvwgLdTB5joeNCWEU7AmCDg6u1wVdpL8NTuj89ndLNXc6VrNVQ1",
  "key2": "34wY7E7gTayX18bSaCSrRzUPVdfNio49B9b4c4TEQmu8pHqztaSaK7WJf7A1VnAwquUPyUwWLzGk8RDPpynf3wpU",
  "key3": "kjdhTzNZ572rD25MYUvoMgFe5g5ZyWr57eft74EVBFS2Zn43eVTaSjetgKcb8PKFiobS8h2WGgeTzMdeK9Y1PvN",
  "key4": "3YhTKcNGYVnG5JesEdo2ZWGyWrHacRgyteipMGc8qixzmXNSrhSnsgN26pV5weuL8gz1ixWJpqgspc2NfysKqE4",
  "key5": "PTmtLnFiDxeGvpwoReL1Q7NB4kkqSohAAKiyv2Nk33sXShjhdAitYR45h2oZM8o8SbaqAvbTws7jQqty8iGCDku",
  "key6": "4169ZF6nAFa6Sxxy3pMw3fd6yWQD3rQNUUcisW4zA7zXeXSZWeLGuJ1Y8piyFrv7QbWPiwekXThVzKFNQbji7Fvf",
  "key7": "4ciyrW5oojKmJAf2UDHJMRbiaZFouDP4oRm8bRHErfUSHiMPRR5To5RzCYXjxAv6A75nqcJotp5CaC1z3A6SR5rZ",
  "key8": "7mAGrfb8i9YaH5qj6jutmEb1f4954FtHKsdSf93CZZXJVnMwn6xXaekSag9h7dT4e6zAKAgNShVPkhEYzJsPAZb",
  "key9": "3Vc1KhjbqRtsS2DeSwvKYVys2CqGbNZ6xC6YLfzX2VWkQb8sPiQvXnmPVZX7Ut7jx6tgEzZeu2aFeEY57rkvtaVJ",
  "key10": "5yJ4mwmf4jNHMnoReZe726Twfzd1jz9tQFXVPbkN8ya8oXMwEaZdWXmpAetrVhnRLAJaURJ6bEDNyGfDJunXRtiB",
  "key11": "125CWBrAsUXvsF997dTe4Vr65ppTSFparffd5hfeaP8A97QDyswghXZ8t4vZbzMUDPxpcKvPdJYEg1FiwCo3TLuf",
  "key12": "3XVgFnVSdfRUUPRRsbDtifD735GNFDXT4b7HgGHBcJGNVTAtMEFLvYP2Q3AtBH8fFtZT8QEn8YcCbXQa4wWvfBTB",
  "key13": "UgqwiXL2KwTRL6Gz6mxTwTQdNwUWLieYnNoFZ5D1AAXh5FGUyWXku7bxeRQm2gYU1AK2UG5KL8X4XYnXckQbXx4",
  "key14": "2ZiCbD181YMHUKaZ8rSJYhim15Eu2n93FJdgaYYi8asBACnKKZZNk7EHcr2r4CwL97BberwXYCFtohreu2aY6nki",
  "key15": "4nSHFA5vHmMPxnhKEk6dDf4cdf8c4PKUYgKmGqDfxLtGxbms5WvWeYinkQgkxZmT6Zdeb5E4DxrJ6JTGjUSVh1Jr",
  "key16": "3P3Pn1xT6LAxeXHxK6GZ3Wo5Tisr5yBzP99vej23eyDomcTWTqnEUzTJB2abPQ5jZoGoAKXFQ6gVwWDb1zQwLw3c",
  "key17": "2FLHYyWLn36p9Nuhe4Rg8hC1K8JPXJ2Xh8MhSGnBMRMjCv4P7u2t4nAG2UeTiJpM5kCfwSR3c5kWWFUFdrRwBPrH",
  "key18": "34qCBm2A41MnoZqHpkMCFU4NTwM1dnuhdjRWPj3VWFbp1LM4VCbLf16abNs7dsbEC4NzWgMigKtctqEqBNp5Q2WG",
  "key19": "5cKvZrUyfaCJFEj6pxkZjcKJqJtfLpf8byq3EJG4oqgk1KFUsb9QoXhgbj6FyNpUa7y2YYt12m81F4qxfbjxf6DG",
  "key20": "5jmwrWhab44SrqSLWPq8fGieBn2xWt6APySRohTEPmdemkniTYVJVJFgqCM5dcJdg1kQXoRHBkP2TLHNdVmLxQJg",
  "key21": "k9J85JKu5FxHwR2cDv3esrFwUmGVzydavB6uyPkU3dJHZG3N5KQtCGFRi4QqpBj3wDgQx2HApXUwQLQTvfkCJcA",
  "key22": "48NjeFoeWjFTqnwPu4RVAxNLPDBSbpHEf33mb1Zdzrbqexg292SLp5XBwtFw6kBVsUeCVRDCEiN54NBrsRStfiS3",
  "key23": "661mQ4Ah6WKAZVsA5cDArPDuaTL5V46RwcedKUbpfGoGz1nnbrwiStozJEkBnxaSq5PXd4fVC76HQL4qQ6YwGqLV",
  "key24": "3SjZV9iAhZ4hMwfrvo9DdNfrfsgDhLFfZcR65zW5kKrtmX9ohpqH7AH5EcitZDqJoteL7TzyJJ2DTed6vErdaJeT",
  "key25": "TsqT2fXd53WRcWGRH9wMeFyZ5a9igY6uZaC2NEbNczjyjTdMMdYocGsYMw79Cxyj6UNmQbUabNLDTE78xynJQ1x",
  "key26": "2cSR39u2SfVxEDfBiGS7G7r82PpCffdrH2wLCWumQg4nQjYLRrHzZG8EptXRcdFGwFzYqHbTebHJ7GjnWWogoAJW",
  "key27": "4JVGHMFEtpcqy9eZA1ianeFKizFyxRjU8DsudrS5FZ4jeqTSxqfLrMpb9icVsEMYT6sSZoaQNgSSYfQpqVPGySkU",
  "key28": "23oTHFoUAWiMbCvFaDoqjUoeEcVDfsBaaNMtcaZx9vVt69ZCwfQacYUwGvXadkk2tXHRJHjzAXhGaGMaa9b3qwb2",
  "key29": "3vVNndC7tmQUQG96eYXppssdX98ATuVmVhxJhmiUefGSkNzABjySMh7WPMBsxHi7gJov9uXkepPxsMKpoMyUaKkr",
  "key30": "5wFymAUo81Wa2F9poAHHtLRFULNWunh35v3koGzoZYAPZ6b3X2R1w9bqUQpETtt8Vs12s2afWg5CJb3Z9u3vAydB",
  "key31": "KTm3jrzxqPHsK13J3rpBgkFVjcZ4oP4kW8UPgivD6Gmjh1Ra6oZMDjdFMoSeaayyPZNyvW4F57hBzyxKL7ePfs4",
  "key32": "tBc699Tc26xMdVWtMHRxwJzDq23Rshfd5Q9xVmVverhBhRYZLeqxnKQEn99bc7N22NhyLWwT3K7h6wD55CGTJgC",
  "key33": "54mP2veE8JKxPmEjgYneFNhiLN3ownHX72dbzfSDQQoxn48bjgzEoDJWvV42KThkZ6UkunhkJGr7kW9PkubkXdUT",
  "key34": "PgCZwgdSTcXeB6BcNerZAZdKGoRncs83GySXVVAjzLSzQF4ZMXDrSsCr9YexqTW1mRmhVv4aSMTjUkN2RZDwrUf",
  "key35": "3KURa7MwuF1FnCTeTSyMwejqvwfGov9Q86aVXHt9FGMt67mAXo6ABQYyLBxbuXWnCJHjDfArGCF6L6Ty5xHzaJEN",
  "key36": "2FpVAUu9F14akVZQFHL5UYeg1DQ5qZ6YeKFBiHtvAJnxPtUKt1nLNMg26N34N8seCeoAWLZCfewJJT2E3VRdrg9p",
  "key37": "39gFcUgndqQ2ek6WwGnRLec8LygNotkvwfBkeEcfn9EZgTq7yrvBuAe8D1tm9StpvNtn9pMPVASdgcAiCTvqEiY9",
  "key38": "2bk1LTYm5iSFcZwoUgmemQT4LJw2MVQMRcRGK8QGVZunD3nbNMrCDefxUMPP47AqNDTKnpJQKZryF7YfyXg9FQvo",
  "key39": "3aY8rL6A3btAGuG2DZttfKKVhcRYksqXnXJx9HeUWzZbxMxK4gGCMTKnmQNgZUEcdZJfTaonr55h6KPo1duHpYUm",
  "key40": "2pDSKYLeva9GNEaBwWfPznTqD9tFbxGEwvnWP2RyMK6odP6HWqABaK82jXSMwognJMRvR822H7KrNnsmxCoeotyf",
  "key41": "24S1uQuWUXbHnTC5k4sLVAVSYf3naQTg4zSqE2JhPRSDyrbNsQyCeuTxSTS2WgmovM9eBFkyzvuGPA2Sx4nscn3a",
  "key42": "3QmnNJwmQyf4SUnJ1HTSF2KTcDoH2EFEdoPGDGhHjWHkFE5K87Njq743iyrm7g6fEG4rs4shsB4BPaJRLofSd5p5",
  "key43": "3YXdxvwQkZyWuV81z6Vn5H9iwiy92RFQ6u15udPj6J5bhD5kmNEULh2pUWYEH2Z29ujs5GLuWgWqvK5Z1CVVX6j3",
  "key44": "47L6VpdqRTAcnbkvA6htmZeREF6fwq89ERrB4LE3PRbz96kFp7wDrocssLjMzSyzTt1DmKYN9NTYi7xqoSomQZdC",
  "key45": "3Dw8n9L4cSpygyqaPxow4dukDhe5Uva49PdAXFvVQvSBiYHjKziVsk9FUNZhVfRqNrdQBtRWwziQ7Vi9YZtzYj16",
  "key46": "57y25yeUt3guQknvbyRkfPVfJdD9Ay88Y8qYkWZFw9zDNiTFRumtbXJpogjYPowJ91MFbYktKePn9UMAsGAkY4rk",
  "key47": "7PjFGW83TVbaqToh6xtXBbznLtrswmqU1hWBWrPSTwVrntkYJppNunjFuqUBvamq4mWmNnYN2jaH6fqpGEuRJ7k"
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
