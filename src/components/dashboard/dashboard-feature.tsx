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
    "rHRHcafvvFVhNXpwzu7MDfTGmt3q8RPdG48R8yj27uMbehBTjqKbxVRc6m8uZv6LZJkBVNG9FhVohgpAk2VGTxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TTRjD8FPysLWeeBmJAthmnAQYoyLkrfJ9V4iw4gPDjQAmP7r6BHS2FgEzSZMdUJA5b7sg9UcAow84EJLgqMzTh9",
  "key1": "5arbyTTz12BenKJwDtnLenFu6Twie1BnPgzWNhHw2qJ7SnoD8QuaBhLTeS4wRTuoz1wSK4MLHDMenFDDq4AqoLkc",
  "key2": "22F2PjaFh3XSkKhZJAZKXsxjBrQLJ5TqCuMTu6rGBZNKbv6hNTctxuZRM9iLNYJzN8svGm3xQnQwtMona78k5qjn",
  "key3": "5SkfZ3srsX5Tf4MnnQvju9kt5ZxHu3rAxH6fbVMMMNKFFCGfcDm9DLs4c8BM4PMsKRtTMfSKEhqTmcErDBMqgPKi",
  "key4": "3xGCv6Z21sorwVo8B7dpymEESzkFRUKgVs6X9Cri5mne2S2DyigvYLDfUBi8U9AED18saLMvgGhKqydkSFnxVHfd",
  "key5": "23cyyM9HedyGD8ZYXsCGQvfcehKp8qJX4GPvDgY5GGJ4MKmhktFNMVcqmzYmxBcWsGsMvexsQJ9idJBCKePw6vxm",
  "key6": "EMPL2ctyKZHfLHUYbyuyLczX1yc81uKqkPreHEWBnHNMojbJn5WT9e4X1yz3CSwxtWfa3ptyY7rzpQpkCTWUr3V",
  "key7": "3xKaGj1ak7Pyw6mA1DYMi5oC5KYwfNQfX7svpZMmfHddfy18PeqEfTs4s76z6pED2PtJa98T71sK1kLy7NjVEeW7",
  "key8": "3SpuS9SB9E9j6iaSFyQEwc1oHvMQUAQG8V3gMLZfmirZPqen45p1krSxhDMwdsbqUXiN6hrPy7QbGM3LMk2UuEjV",
  "key9": "676Pfr4TmAx7PJLRn3HYAuVV6SP3gbcixvZAnGcpr3vYRBVB8MPdVKh9Fwf55rRxudr7ZV4c5PmW9JyW9Qa5pni3",
  "key10": "5gbAPac7mQvzvGrtYhvp336XhiBEDisuvrjYRqtS4Rqwo1Wh7ifHZko8nMKpEd3TxjtbUeQeYULF1iQupqEHME3L",
  "key11": "5gkSTQwrjxujJSzYKUACR9JfhxBRCuKiPb8HJS8YZAB8u7Ha2xvSPGnsB3pDmeM3vUShzTMdW2V7UaqDLYiW2uyR",
  "key12": "sYeK1bediYWunZXz4RehnTnTeoNq6NdkMZnEyKi8SAkFTexuudcRxRTrS4ohSxyfgaQrJMkHAnJDDpMg8v4YRvw",
  "key13": "3xuaBfAPwPtPkf8t3XvPFNLXG4UcZ1KNQp9eDDg5v15H6VQx9c7uH8Zto6tTkeas4sEyeLvseo1AKzMGrJRGxPvb",
  "key14": "5VctUfBU69v9zqpCSwGWLndVYzXpsxUGA355jXSRDtZy8giDttAF6j9s92G9ZwZuVNizk8nkPbiJCkEXy1dpDqKv",
  "key15": "3tkuV8QJsoNcrVHJxE3pUxJf8t7nyiKpqYb8cBHTDSGREpRDiQaWubnL1zcJKFgkqDbDJesQT4bCZiGGi2g8K28u",
  "key16": "4DpY2GVQ1Tpr39iXWBFZxyQ4My6NS1PExbavG3adWQheJnPLwg2rXXYnHFSjz2aAeRGmWPV3a8syg6r3qs8CeqeP",
  "key17": "3qv7dRmA33oWZ126dLRzRTZ3PqGwaHn8qpko61sTkz6t1HoyaTaZoLmJjSSHp9jDZ1S8JRaAsksWtoUQEjQDrS1H",
  "key18": "4BcpXB8EUBSB3KnokbUjbzXeYyK6ftzZpHPevKg23QHhV5nYf1YtZbGbR6RLuvfhaLyQRitovbXwo26gCyjLtnwG",
  "key19": "BF68Hfwbq3mV8biBSgtRXNU6qj8YKhFuaSozxSN33YJSYUi9PNmDPKszTHD44kCqnC4NQwXhR7nxrJHjwGXsge5",
  "key20": "2avjHYDWKE2QVjN5ogHkrPtytxy761cZZNCU3VbYj2rKxdZoKFDcvrGmPjW5EtCZm94LxqdoxUwvzsLAcwTB5nLM",
  "key21": "2ZctMtx2wmZCwySLifdkUo9bZttRsjaKrWDRKctirswvvP6t6MVdho2dNe3VayZccYKpiVnu9rM58eNjG6TsPdiM",
  "key22": "3dM2JJBiTcbprEWvwVHkCv7iGsPMNpgPBJWCaCySsAPoovAK7WdQ4uoZkoHNsRCYahcKSFPguZa7jAZbt4ch6DnP",
  "key23": "2zaodtrhBcfErpCAJZzvRafjwJ63DkaZqmYjgirZBuZLtQBLUianXk59cL8vUnyK8U5rKJaa1LHDfDpGiAjLobBQ",
  "key24": "4TmwrybK2o1yaMyCGA9ZYodcf17vXEQRcAZ8MhqpTJa1UCywaFyEPRAcTeTaSTz5CzoJYjbvMJnXThdJZBqAEC8X",
  "key25": "3vnzz8Tvfh9FzmHtERhcZcDfPQDZgtEXNAgjs2hiu1CztsnsYKeFCftgphpP8ozU8PNG46FC1aVck5YeBqqs7oXQ",
  "key26": "4PUnUBkekdnpT4n5QwRegjCZcGGVdLNpjdoYHXQsy8EBPKjiY8Et6C1ByG2ieAuNfsdQdwc3AqspjczrNc293tsp",
  "key27": "5oDUXsmNm936aPLDnP1L8f2GeWVsBeHAEys1Gyoo6THoftg6Stmky2BWVs9PStK6xoXWEK7oTLkepeBiTioFjAFa",
  "key28": "kxYXnY9jswDP1kg2YgzypofoFG3CdBrwGwYRJUHCruSnFknAqs7RrdSeAbXiyGuE98VbZ4GDMpvdByj9LjHA62W",
  "key29": "JVAk4pPq35FibwKCQ9UFsk2uHuAE9vjzPgtz5tq1KW1dFSHYySqAY3opFHyxkiLE6AbxAJPaLGPxbaVrR6mVyMR",
  "key30": "27JW75vk9ZUV1zYo7FuNCJQecubq9XiBL4pYnAvoZgLEocGtWoi1jpdCjNvyKQuCgdR4xgA3qbbVtz2DmpEh4E5k",
  "key31": "2xxpjkiFxVsgNPe1iAnwZwg4UpLTDdXvVejowE6W8mPpccsmtj1RXs6nQsC2h6xLn1Wt4CxYDnqWxmcDsnghxcw1",
  "key32": "eYXu71aHevphonTCS6uoMdcmjWjMcQL6KwoChfo7GMpsv4igxaeDpWLAStD7uP98hJJ3Ttbxtar5nwNidrg4dhL",
  "key33": "4xixKNcXg2kXGcGHDfVmjUyxEacAnPgmVJC9V3hCaaBWhJHxAS6ydtAg3wApi5FT5jkKYpmzdq3xU5KsbJS334zE",
  "key34": "5ZgYS8DjuBe3HFu9XvY3pMnftKN3cQSSGN1DNr8goHhsdaHGiGyRHGCBmVdhd1tYk7Wd8cCBE2Y8gQLTa1tPmNWh",
  "key35": "4i7tG7rZoGfZhqgwTwxHnKVcF548Bdd7GuecY53ZwxMeym5sWLpfXCmYs6K6uDNw1YCpY223cmPoYTec5PoxxTSB",
  "key36": "5ZSBJj6stdkFpvggmdUT69ezvCViWr32eSm72uRTrAvXt1Ncb451ZCuqrp1bkid3XgK1QrW3KvhkGWGejcgLtfui",
  "key37": "2Yvz2bndK4ovn5F7FTxFiLGsmLpZtCSHWwCF5nQKoMvoDUZCSgXc1Lss4ga3h617Sg2MpP1eNh7D3EodecXm1C4u",
  "key38": "2ZAiAU4g197NYr6VygCeDxB31Y4FwyDYUH93ckqYHu3WE962jpVCP3vXzrH9fEVWwnDTTA7nMvzXy6ZZNxmqy8b9",
  "key39": "MmE9Xyaa3M1FKyUegzLgdLyX6DsBJuA7zNcGiDJFzezjkGo4uAN94weYf5ppEaqKR25Y7bYyRtDLDCNLAP6JpBv",
  "key40": "ZhcPM8Nk18SDnDjybWyVACKs4WLwuSyc8SSUEffNReU1Mqa8fe3pVE6jjr4eVTQdaWRiZyQYGvceDhh78JEiS7Z",
  "key41": "5E3rTKPsfgvSSm5GsJhZq1rds1FgSJf7xQJ9vp5cBKqLBRrxuAW7z5qtKakzAD87e6eZVYB4pbXUqzWqw1cR4pFT"
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
