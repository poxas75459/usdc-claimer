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
    "61354z4Ln8M5DnsLtubRuzUWWiUJMdNLgpNkqj4xnyX34x2WzZs1b2q55CxP55RWM3BAvhJbhR3H8E33ncSAjfwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NKxp8DJMPBBHcD7b4NWXn9bCRGj4KYpws4Bxni2NDv8i93Xh3MxTi7iFkgmmQUp2e5YxBa6sAyakzduT7moKu1K",
  "key1": "3nKbTbbtK6aGeJfyv3EDLZd1ebSx4vHBkFDNvDdQuADYuGEfGAPUdVSGWRGuiUweJN4Lh9bawveJgmZmoSCLZevf",
  "key2": "3Wzr87dbL5E6SLZrnQidxWqA8EPeMQTTyKvvfnTAkyfRkvpeJYvhL6w9hDq3m84i6grDg2cRGMUgW91kBfxAHggZ",
  "key3": "3kXPYkDCypE4dkE3qrsA9xPSQqDwPt6NRdpwjdiJ5Aey5niWHueSeqPgehoeAREAz9pJB61wxuSGyWN8QsfQSntP",
  "key4": "5KuHHYchSGGC5KPghK5nhqqe5ztaBeFb8yjejAofs9Mjm85fDgdKW5y3wSc5bLTcCQtykJyT6ZBqH8rvH2QJqF3o",
  "key5": "LHn4vseui26E6qqH4mGAKeMs7RTMViGEYVpZRfrqFoHyCsgskYMW11nG93ZW38gvyApbaLLSKAH4J4eouedrpb9",
  "key6": "5sGr3NuRt8s46BBcDQtLgmcJKPSNmbs8DWDM3WcwUPKRECtTwvhDMaFpH7wKqGAaVTsDFa2GDmmNREsdp3V25YtK",
  "key7": "2B7aUPvNoZKh3wCYSy3BViTHPLtHpg1idhxDUcbvVkm6W6gw9wziqis56xwNP7b7a5LGHs9sRMhJzUA5RTHY4R4r",
  "key8": "5CGqi8PwWvdGFHsZx8zNgWizYFrH2ozH6a2hDiWVMa1tbA9MWSDjFVxuRAteSPRzkPS7wSvMho9fs8EfXSzBpSpb",
  "key9": "vedMU3JuHcb1iTQDerB8nKU62bg7q4GDPewCrp1Da5UTSPAq7hZeZK6jY23MFjtPvUp9wEZdirJD38b74hnmgLJ",
  "key10": "CGrMgQ7v2SsmLhrNjaN8xyEYhWxGQjMRaqAcieorwRbTjYWTBufK7ugG26sL9PygBtawz183sbp2TmGpXCaYvfz",
  "key11": "3Bfnpi65Lee5XfHoLogYzwdHwM2fnestoXpSAcdoAB3ZZbVzM1xdS5o49MtneBXbwvKcTgrSN4U89vaLFU81YZS7",
  "key12": "36sntQsHNS5zvHpySgycD2BTxn5TvJHg5drKDA2MuuszhQFmJ3k9HRf3b2kG8fHyALjAHNM5gMzPcwnBth8HEkqL",
  "key13": "4M5s4j9YZ9r2Sag3pY3nX5BoKazajR36SSk5AfiLUYRRfymxZA2uXb37W4ztVzHjbBvyodUmbkDgkVpuHD2Y9FLk",
  "key14": "4vgzTZBjiqE1tZz9mYSTbSWCGr16kXfhUWHvi6At6WSibgnk9KoVRBP5DctcuXSscPdqf8qeim5rTtUaND5RuFjR",
  "key15": "Td1J668jAruv99S8HYHrkzTGanyjD9pKDb5KC7PofXpECGN8ZuYwyLvsM8hBmUw7x72L5Wnpsp5P5gLAqXzNCEa",
  "key16": "5o8hhTgDfyfhLNanvLbr5BvZzHBs8TbdHdECEg8bZHEr9qWKhC3VJzwHTpiCM7iFKKNFc9fHkcQ2aR6r9sc74stD",
  "key17": "4Ve3kXUJwNxke1XJ9YrwxqFUmWAGmXxDicueiHruumN8t294kQYL1yChRFNd9sSoYfYePZbHKqC6p9EhoFshERQH",
  "key18": "57pLKtFW3Uoh2oLjpg435xEQJKStcLaMmqFFYVoqydeg4VoPuSXiRY4LnKT8eBbDYaSDMbMKVVBybfdXv2BAcq6R",
  "key19": "3D6SuAB94Kdjt1Y931Sjgz69P25KrFFv3mMWpzRBKu3ULfzdtr4xnEeQxeoZ12AZKDM6yrrERoory1mRnaM336zC",
  "key20": "5aN9JMntV5E59TeqQ3iLjsVSD5x7RZMEPHRj2nEjXq76hxi7xkESxN6xDNkNUQVSMnMepRbTAYL17eYAozXWNoFn",
  "key21": "2mFfx2jq42ALgrLH5NF3jZdX8D7JhgS2hkw8w1ox42ppMTaYFkya8TN5DmhLGFHbS3Fu6a2eKhqAJPEEpGYgkcth",
  "key22": "4McczM2VHHUZu4UGKiLKVB5m7BJJ9K6Gz6YaQbMXusFR6egVSXhNKfUd2wMFHoRgcunoibqnjQQsCyGof8RRxDFs",
  "key23": "29tn1BFqdbBWvvjxVYyzoRXYjEv4cXP8GZH48uS6SsmohPUv9moSJeTz2C9kEPi6EM1vBq5AwBFE1ffN6TWgSG8W",
  "key24": "Hy2Yk38YXdRPz3C4UH84EUtZGej7Xq4HSvKoaJnSok6oi8x9jBpoLrULbGFR8iVTfiMBYd2ApT43x8Z7vWaDDdj",
  "key25": "wEMRUpLPkNbR2i7FvGHA6vwuCgA67B2RpTCSMsWrqsESYwBZ4qAdPkmA5tX3T6kTP2it4XrFreYJ5rKzTEYS1Ga",
  "key26": "3jhT6GT81pr3y5PMVbRXGymbvXkeyUePBQpuyKDkcAQeyWRTvqD7bdewKQcSyHdUWSq1JGev9HBy2o51SkqH45XN",
  "key27": "5MMwDYqAJip85Qx8dRz277L6c6MLdYNHRdVPgx1vgCWTgbXMra4haFeYqq3jHFoxa8QSnAt3QiWZ9CPRSNfwpvjg",
  "key28": "3JFTXJUtyuHFKibqoMAy2pcMggkqXedAc6MUmAJv2TckbeSSN34ExpiaiRwGxCRf2TBo2U73pL5BrS7CZKShjMgX",
  "key29": "5uYRwdkXLJ8Cs9s1cuPocPmSNy1qskWcos4q8obFPRY9WaEnyotaktMwNz8JnjZNucyvf9BuArTEJ6ejjwQGntcJ",
  "key30": "DRtZR7Rh87Aizi8M46Z8u2WnP5MiFuqS9AuyjGBJVbXQp587JE9aaX1edAfwgn77q5hvpUZZn6XyR3M8hk73572",
  "key31": "jBgnf8C16w2rQX8NxrnsLVm19MgneM49jm7tJTW1hXMYB3pVwe5FayzFcpLuzekB2gNjU5X9897YYffXcCJYFEz",
  "key32": "4w4Qrdj293zA3kFJSXeTm8TuBHfoM1z9g2tEBqV6w1Jmm9hPP5eSjVGAEphv6tW9XULs7TCrkkGg6U4DTR1A9rVg",
  "key33": "4fAnUcxKnTwe3dLhPeFHnBYrMa2D1MWYfNAroefNcygALxThcvDQHN8Nf9XmZuGyjPzpHVjeVHiwH1z9EDoZSBgm",
  "key34": "62LiV6vP8jhbnVfZTFsJVTLNn6k73FL3YgUraJJ9Lq7aayLktQWoDcuQAFa4ChboxWrWukkUn4fQTB7NCzE6gm5h",
  "key35": "7KpCUQm79SbEeHpkAMcHJPbhcFRnghGHXhNykgyvTB1TStLgd4L8yTUtuoD6CrELs73CuMYzSbZNrLR3tPUkAVX",
  "key36": "yPN2NYZFxPPfT2ZJdhhbg7yA5PG6YNC37edRX261wyrRMyJ6qZJxhJhij3hwUws7m76y6tir2rEt37DSUTz2VTh",
  "key37": "234xVERuC92jrvdwDB9wxpWzvWSTAfvpEofZ7k1a1HLVybNsNQ2Xw2xVAc9cpzhdfcRhxDf7ejaWkZ1N4MwCrBAX",
  "key38": "43BXJ8GoEfPGje7tyXEaQ3prJfAZsxadznxwG5mZLUbkLnVi6fxzwff5nUd6PenUJt1LUWcaj4m6YTWgMuJN12FY"
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
