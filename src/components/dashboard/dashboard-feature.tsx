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
    "bgrjwqfMxyRVigTnxceBWqRYtNbJv1woPSTTJEaJk9qXwNCErJZAiDVvwJLY6Aeiud3CwF5m8Jhq1qagr7xrbRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36st9Xe7FHoHLG5D2NDCic4zZkw6xcNePXDeffxmrFkGLxWXW6TdCQzePAAz7Vvz1UkpLDEF5JMrBxsW2WWWK9jA",
  "key1": "e7Fh2rY84y8D8yXdy37eSVW355dU7UtouBsB6A5TQmmiheFFspAzEzzkRDyAfkwUFcd27jfU6YntfagzaN8QYmb",
  "key2": "g9eS8rLUoe1XtCUvtvoZYQCTX6PbmMJAz3EP1giL4vye27dGRMw56z8fB4dSioWzpdH78C7UHqRAGu1onRGYMFA",
  "key3": "5z2NDnbvbwEGtPqAG7ZrRr9X5hk2bEfyBx4j3jmgU9Ac1R3914hv5eqA1Tzqr716NGiRgtJtu229giQgj6hNC9D3",
  "key4": "5zBgG2v6T58ZeRjqMj6k1ux1UeWZNb9zRTzk8HfrXUBAnwcUs8QzMC8FFHc9agmPRR1dWwMA2JYi1LznP4JEBqn2",
  "key5": "3DiKSdJVddnTnBgygWwsC2bQA6da9pr9CsEok1eT2UNKMRtuGEy36GUx6QqmZtfz4RMVrGos8psEMkRsq6VNtHLN",
  "key6": "N9KV899KspB5LnCpscMwTNEsE4Kc2Ka1Y3S5jfbJ5ZSZCxptttZTRs23m2YDxEiynEzPHAtWku7ki9Gc3corHkd",
  "key7": "2FYj18TU7Su7sX822tA9J5ESd6djXPz6tWmtS1TR2g5UUQQmQf9i64EvPzmKptta5WmoissJNxuvyntpoeMCPKDC",
  "key8": "57pNKY33DWUu1mNjtuBQPayL6LR4dTrHBrSq996PFK2qgG8Y6Z9EHH284D47hiHqKLw74tnjf5Jqbhrhjnotek1E",
  "key9": "4oesN7gfTauecWUmb2rFvAuRFcnXGFnkQbGDMH5Cbpe22Fb5BC9uQkRn3GWAtuSvuUvH6WfRtgjsVBv7mTVu2Eyp",
  "key10": "3wEKZx66nGHGrq9fY1hJXU4sKPaEDuGTyZCgrGSRcccJiMfQfC8tCq7nZzTzR9x9YDMvorpMEsC4mdeF2BbjpBWq",
  "key11": "7XLEZEerjRBfuC3Vkj6sCzud2vaosYwC2ycgazoGW9CM4HwhA9hSeaV2d7coYewdUpcuUB48GcZrmsy47xJUWdZ",
  "key12": "SUf1ipTz7wxMFcksdJoyTSAN58QpYE1G3CszJAuYantdw99SzeyYkVoicaaA2BxDzVJw3UPdkKSka1zMPy83HrK",
  "key13": "4f6CCNFKrT5MvkegBMJExyteuHaP5SGigTzupR7jeXQ7tPzGqChWNya68tR44kEpaqBNVtAjLcxrQC6oyaQTFJr9",
  "key14": "4UeRSY7kiV9U18i1LEhMmLn77t4EqU8V9MX4M8mr1GTYWdV72MHQ51rVa3FuwgTs2FmNXian8KbbDjqB6NFP9GGY",
  "key15": "5v7xZNb4LT8oyhqkRu9bFYYsf4MfQcCGcZqsngMKVCJ3wE9ZbRAw7rf8JmjXEMT2Upx6sFEqKSo3H7vnJguyPKZx",
  "key16": "5Hk8TWwYb79yyHUUMP6BYWWF3CTkZndMtb2vZbAZhT5trZy1sv8AL9ix4LYnW8dGsgf7f9doVTwhACfa4TwASHbU",
  "key17": "KG6j2jz56HLCCbGPbhxbwCZfqoDRAMzxyziWSx3RNqpfwj9zro6ck62eZssJx9QjKwsoTB16eATuhnbUVr7rx9H",
  "key18": "3pA6Qo3qQRUxeYh2YboybsKPVnkHbL97AYkoT5ugXA8XGPbQciVJ6HcD8yew82JCsRcmf6Gq5Z2hz3C8h48L6sdk",
  "key19": "3zezFS2vEQyZajkg5MNa3aBVNhTxEa6NnDRJDvRfWgamJLuw77RU9UeDWdiRJWtbTRPRPJV1WjM6UZeyXuzXi4eU",
  "key20": "2zAv43vSyy3UtaYusukBbUQZi6wYAan5sBTjauMpAtHv7oWxiF6KPDV2D458CR9od15sTfLGb3ADj6jodR63ELp1",
  "key21": "3KkD4c1vp2BrTf8VQGKfB1hmqqDnqwVgFjuMG6wjqE54zcuNP4zuLM1mFimK1TDF7NA4vDdgjujUtJUzZkPXLxXm",
  "key22": "4j7VbDCsYpdRSVPhWJF1D4pc1XNsfaWNXTcPNAwvpKd98or6RLPNxRVfdp4oHa3s45jQLTKmeqAjUiE7NnCdtzhF",
  "key23": "2UnotbLNdmA4gbbeSxLb2pVTxaNTVSiPW8XDWAwukxYQ8rZaoUtX1vSb6rmE5onnHoFKMQLuq62cJ5eTWmJM4YCr",
  "key24": "5REEC4r3TUe2vsuRAodzXJSRU5raBfmEo9zSTY2DFRceV7QFmEUqZroFtJNrRriq9N9YbYb6zXFZ46wkWWpoRzvy",
  "key25": "2kcrrAK3FshzUUGJpAKXmzX9cgBFEVZCtJzC4QfUguPYr4tVQyx3791EJfD2UFobWJmTvB6tkHDKSdoWNyeeb2Ci",
  "key26": "LLtdSc8ih6PwXVdYyQXizm25dUnH8J5TQR4yy6LBZcPp92u9erYhXG6ZBGV7oXcgoMnjprQLFV5bEuDztxHdN3G",
  "key27": "28KaWGYnAgogGqSKweubAgz8JMR7oHq3PPBno4ikr5d4fG9Q9brLEHQkSGh4vkyBxffaPGk1LMKkMq7ZzdtUiVim",
  "key28": "59Z9hdVMd8oGaKJCRsEnbidaqw9KRh8LZ2cnKGbdAp5Yvowb47GUG8h1gJ7CGdwaueAcgkBfVHC99vJp7rimBm2z",
  "key29": "49qUgweR4X7fLZpKjDp5cNF1fPGKYfkA4MJBDsjxqdjXGiJq8CMgpGo2oycS8vPobnRxUQCcFr7dpActMwF3Z85n",
  "key30": "VkmqADmZPm9cCPopWfmLcY76E4C7175NWRewPwbjXoa8HHrRCVhwvA8yJFCzgv7tS3dqAtu7tgsWHk9ju37mwYh",
  "key31": "2XudHvfbGmvJvdFKWJRrs3GkgYC6aKESbN4fzJb7bCbjDhYssosTLFMS9K4xVB2UwFCs2vTyuKUyhc2C4gpz3KDP",
  "key32": "dx7UH62Ara4DMDfYmjYKUxUSzDVspAGXG5abG53H1SUPGQtmNqLPu9tgzGFMqb3mfaH1xb12dyVRycVc1cnf9h3",
  "key33": "7yaMHbPTov1wKKdLQ95EZuuUANmZ6ai93nmDw4tDoCjCwJyKJuJaV6HyLcZLK9UCnUpT2e6XQcbP933TGhhcFPK",
  "key34": "wUwnTU5dDPGxu5RE3jfC54xthfRRw5yzwaKc5R211BtdbhLjr5bixfUwt6f1eVTghTxjkKP6WK3ondmS3TnsUHL",
  "key35": "2qgL2aF4eWvKvow2WCnPoQuyPCuqchwQoNeJw3YS27RaNbM9B5LNKnsSvbeMWburD4UjZ8SedbyLvhUvuZqErUrt",
  "key36": "3SjETFsC5BmbZWXEC9ZJ3adKq21JCG2p2QPi1jHjakhHMJe31KCSr8xxJGr2rsQFLnNRLW3ZGKyKkqFBQgvpiPt8",
  "key37": "Hh4uxFrssfcvKEQjKsZmQgGRwGJAj5nYKF1zeNpeR3cpzGYfBMemmqeE5wEJmBnQsMw3vB9dKqzNmyQXQpFfXKN",
  "key38": "531F9jQVkZrgY337Evd9BUDapUjDrYmYJnEdxxkhZPvEFS8m5YpFXBAYPLmeRGJVeLhqHxnYAkX7ZpSbDgoTSvDL",
  "key39": "ByNq9wKw19fBVq3xfLgG78djqUHyoMTmuan1J7FPRMxbVeH2j8HXRr3UfKFbUPeTzZJMw1o6yRpZg4Ssk6bfaMJ",
  "key40": "M4nGerJSrWfUeqruy6zggn4jJBk4cx2gMjjKmF49rgScob6UzEWZaghsN1L7qLz5YSVyXHd15nnRuE4MtwGJ4dv",
  "key41": "3ABbv7xC5sKZeRVbsQD5nu8ANqumQsbt4jByG1sQy8xHYAUT8QRPPuzghFQEhtQWSSmnvHvqgtZo3LyUKSNfdRRF"
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
