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
    "5JdeoAsajj54CZ7YxHo3rWGob7sD4HXVpaurjpJjmcRhFQSdQp9K8pwcyS7kuHEEescAXKKCGVNMAyGgzkJLDVsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XfohkFwXuxohLbwNkfLDHpJ4iRB6i2TXVn3bFX5rt9d3vs8dA5qfCJBjBUmLeWntmzBK7i8cujG15PgZGHvwBC9",
  "key1": "22qQzDTCdzgWDov83EUJbXNudoFU8vHTsYqWAR6xDV91wrKjjjebBQJ48FhYm33bFBH6W4FwheYiygJgfRzroJ5k",
  "key2": "271y3JYZWivvdj2oSgei5ZK9BCXNgL19zxpBLc7UwSHriQ7DnbcXEr74artJwtGTcHRHawkk5XG1Z7Y2uF57aHei",
  "key3": "5BbCFPZPeVJFXTpu8HmTF77LVh8NQmgcT26xUgWCKUAHKKD6saq5cXv9zUEKxqvXuD5sCQcZkV3F1aCL2DWGhPRa",
  "key4": "3ao5jbUTUWvFWkJe5byas9aR8n95FK2uufzKLiGyxRkJwoDhAWNGkHZ8wNTFScZYqB5ECSDWVKpi22LbyRFYSHRc",
  "key5": "DWXoBNYhpaubUXYWtjPXyDfgJnQAjbQ78Hi4JSAVa7AVmwjJjW6YQ3tx6BMdhesb6uHdUgvcKmZN6eg3hfeBPX7",
  "key6": "2mH5t5T9onbbidjGa9hoYgJb1ZDXhL7AN4cjWRX7Rxf8qV3zxQqqBzB3tuWfQpp5R7JSHznbTyoE6PhJRsYqgdYX",
  "key7": "2JhGsfaTHFXxWAB7fJkwq1MPSJ9263c2rMJAHJoqEjhL9EFnhcxqYu6hzj6MM25jCKFDDxxfq1oKuQj5bPmUwCMt",
  "key8": "2Mpuus7wTeSEq9cieUUES66cxwRf88p5PaHRk2oHF9aFApoyEFCH4htsvVLYnjc2rddd3CyuXR5hFC26jtYUqjpt",
  "key9": "iNnUD2C4ejiRiYrdSrf93YL9DEAjrshGGQhw3cjgrrikaFd8ZxTYdjfbgRun3a3a8nukkjHvjDqTtv5ym1kEucm",
  "key10": "2spq1mR9tYHdexgMmdLgiULLQfBphEy6QBfQtgWhcGonXaUXhUm5cJWSi12vVffgmVPQ53fzNM5URupf3Ur2PwKM",
  "key11": "Z32SwED7umixwJwfxqoQLg1Co8oiJqEuYsT7kg1bgvP6HoYW1GzX9uoNwzqwRHdYH9wgCVjBDj4qEizKpfRejKF",
  "key12": "qDxEp35xUgM2DitzCLuQyGfhD3b63QEPKqUYEW8Gu3Qtwz35jf8WxtGqDpSDpza6DxCs3JJeWwYUxQ6eZXX3goT",
  "key13": "2DY6LoPczr8GHMF7L4c8EPVzQ3bVY2xsc8tUYfm8fU4rakTDsvBjgrhWq74uqdzNkyiZ87HkexL5WSGkJwT2RdSH",
  "key14": "3NvQsPnRK7xzehigLxsjT4UKwoQjD1K3yrpDKU5UVaSfiBBkg1xEC1gXtTgEHKaiTHdXDV8XiqgVpjwGvgYRCXgG",
  "key15": "Nvmxeiyr2QqcJCPGLM6AR1KKTTs2nZKSPZdqoHHiaAV9fz6BXzRcX2WCbGzAQq7aVpf2icDTCGPhKm5B1L8HTNN",
  "key16": "36TEeDFEsanRvxG85Rkt2gyamkjX3bVTvthFc5JftdZ2WYtiZSzwH2yCFPM8D32596eHTkSuio1sbrHEFibpK5pv",
  "key17": "Y5VKjSX2BRUG4KaTMNBphhgQr1AvhNrcLAwYA4AQx6rSUG3Qyn6zWCJiTbVbGASKBbMZm1XrKQXaxew24gdcWZz",
  "key18": "39b8wT9cfksw5scBYW3Dgtx6ipFDgAgEQWHrsF1cho47xHgNf4TfAt7wN5xDg41DCY9i5guzzPSAcseq6WHnxp7Y",
  "key19": "2YHAgyDWqRMVWpU3U2xMYh5zPav4syRCXsbtqn7YS4Juzso1gWpNvGwjpNFCYeVrPMeVBtvMdFBEcab7Eqei3mhD",
  "key20": "3DZ5vjDunQULz2Th4jPTMb5gmAaMHus9mzrsU8zPrYk2hGGVv6nPYRTgp9igkzxKju6fYMdvx9uNu4QzZyaBD1kG",
  "key21": "51ymtPxvR8SMzt7d4t1t6YfcMSsAGUU1zHaJati9Na7EWotdoe4jzLxTFdhY2PjMCPSAWKP59vdtLg2ea27ykFwb",
  "key22": "3rVCBUHAwtw4hRPEw67LEPvGdt2phXFw2QQR74e9Gidi9WUFXCCd5WSoxdCmj3bf87LEsv9gddSWdFqyZD6cF96q",
  "key23": "2o3F1p5NXd2hyPorYLQAoWTCokJiTV8cZQyoVE3jEmGk7YGt9zfNxeMRwjC2iG7fecnaf75TraQqgRfVx1o9g4FW",
  "key24": "4y8pZhZmbRfswjAnqMtiXEvM1v8k2N4e3eYA2wf3wKjRrdafSniwmqofV1DmQ2dKpbF1Wn6BJ4vB5udCNfCKhGZt",
  "key25": "pfPeeDBaQ9EedaNWuoMqXcpSNJXxyCoWL6eEEkGLAbbf1HXDtXN3boBe9GKcHgw6bf5psNeBu6PXZYMtnNYaE3F",
  "key26": "FY1GDsVziGpFSVy1zgS7AMzUadu4AKePbjr7ZBLP2f6pWL381EP716bcC2LdUwGpRcML4vYHVoXCshKNFXrsCwD",
  "key27": "2azP4fWvTqWquAomML61DDkuNBT4rjsUGamz4qwHwwSiGJAPei7tMz7gPadww22spaybemyjnYb1fCbh15gMNq18",
  "key28": "3LAZoJJNwwC3j8DJnuKjnsB5q2iB2ApQNVbJSNTBoCqqBtST5Y8qsXRD9xeEfn23tuFp43bQB4ZQbHokG9uVxj8v",
  "key29": "3FhWA9byEZhqaKDPTxDJCxLBfUGxeTfyiSvXoKsbJXC84boB2mpjG5HbgHUTkdPS8uRgLU6miJTfNxkLaGViA2yU",
  "key30": "3nE5Thakz7okz8CdP2p7cUoiujGWqgFcNm7rKk2xznZkQmoW77EB42R59LucKYA7u8jZume4KNfJvNGAv7VjB5ro",
  "key31": "LAoXkXxySZ21bT87xwg8vU2ZJWL1o51PLUf4VWGdynrXv9aprdNBgqoeRuKPYmcJgHBn1sieyqaxpzZ7ArPmhna",
  "key32": "ni6KdGyPfeTLEZqKEuLCE6evyg4ejeP84kWepF31ay41AHkCXG2dycknodjeg5ZTfRzPMRB79YaZFdwBNVsvSSk",
  "key33": "3odxPiSb4ivneXmHd63y33RPX8jEeAk7oiAiPvMCen1n6P474ur1wv6FWBanL9R3L5G4TUUiCWm1MNF4RKK4bsZx",
  "key34": "myPCreN6nva27vgPrggYiHLynzg1athz2Q6xFDQznr7dskGGq1fe9m4ocLWDndBQcNnW1aFrpFCDPMvLGaStbL9",
  "key35": "2krTZYMvUDoSu5Cyqiqp8Gm5wr5EfyPMJJKcrPYMrsYBx5BytGeMV6TNGJ6iczsFAE6uUji7JiyQEqWoKTp5bu1W",
  "key36": "5VnATg3YZZ53oiFVk2iAtVUK9wrqNUD4eVVpj3A2ChKE93Gn8Y5UEMzXwUyd8VPnLyxwkjrhkdiFMfrpDZQzTxJX",
  "key37": "2dTXdF8udMStqHtz8BSde1vpaiSpw74qeBVBpi9fGGfkRSLDNkFCMZF25XT7HiSz3kiNu1SYnghjuyDY1BMEMFDX",
  "key38": "nBikXyaKHaxhojp5SUkhLui3f5AJTqcCh1G9tWMKfWVYazG7sJ9eMCpVVhXdzFLU5L4vyKyZ7Us6WynbDodvruQ"
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
