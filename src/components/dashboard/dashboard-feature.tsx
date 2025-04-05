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
    "3ayRZtwCDVvRt8EsLZDDzipGJh7if1r1AiT9Z4xR9BWUkfStu1N25ZVEV6GYyVpK5NpbdhAN8u99Hm2F4MkDibmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33HfiGj2wd2CNGPMxUXE21PKMYDDBZg6stN3Av1X43sMQ3GsS6VHKB1kTPFYqLWEkDG4oQHqP8WKgWW7BQr8t3HA",
  "key1": "5yks6jFpaBhgBE1uBTfyRgVHwpTjvjdzkbPVMbGTqzCFUoBAzvUUGxmutxsebLYawSDiPYhDMyCtkcxU8x45YKtb",
  "key2": "2vJ2r5tezLraCRvY6am7HNtyj1AsaxVPSkyfLdfDGB4aCtjQqWFCsojP3CSVfEU83BwSQcg7xmrEfHn5Mp1RgpVL",
  "key3": "4MP2dN2CHvEBceB4fBtZ4BcW34UPW4e7QhKyrdbwm1wjShXKQYbU8UWRuSnNDd6cFRMRmAdnpKrqDxLUT1CzYbCT",
  "key4": "2K6zS6ct22hUMAy9eiLJfyyYYQT4HLcizC4Sddy9HjdwAU9BWsWQkmJUm3KGxtdWMKSNsTDiK1CcwZdCTPMHgCdh",
  "key5": "VH3hsiYm8kdhPY4wzyyUdcSjQJ9idnz1ifWCjGAEtZAxhbn6fRuaDtFHFSUdwcdo2GHjJjXW9vp1DUKJcnTZg88",
  "key6": "5JRoT3HeVAKZK4g4NJ6CfRzQxMD13g4iafVqAdMvpoCykJGsaWodz8Mh7E8GAdNjY4Ue3iyQ88Hmtr47fcA5Mo1y",
  "key7": "2RVhqovF8eow8jTA3CcijphHkLWhaQiG2VjxFMBFTz6tos5rGxz2pLrLeMweVCFq1Z3KzxginUqiDyRZE8xDt5ZB",
  "key8": "3t1gwiWswgSGX7r1Z3euWg1ukxtBvjDVrh6gpDzUm5FxvF46VUTnvf6M72Bv887CQasSdnd92sCZfPQiMWVWeg4V",
  "key9": "kqB3RYbCrKW1GT1s5yMZuxNvNvTNtDHsCno59bgMm4pSKeLXV3ZAC8nWzgzjFBNmQ2mNFvLBmu6A6vPYTfXATna",
  "key10": "4YrtikftavaJfF5RbHuTe7sYP57E73rduywXXBKbgAzcPF9sAbYUACvhiZJLfGSDwxVpomoSSUVX5XCwopedFzV8",
  "key11": "4CbqM8yBjz42Josjymb5vNW97eCBqVLYy8dTMJ6Dy5D7eegKEwJ7uapt4Q1yKDbAJe5chmAghHR9CQaZkVxmqb3Y",
  "key12": "3djSMYsA6yEr6z1m9JtHRRRr2GMrvtm1vm4jkDZs6E68caBv3tYdny8AXNQ7qB6zUuVs4VJ2WPeqgmJV9vS2un3V",
  "key13": "3NEkgQVHgyQr6Bd5G6wEoz4ztdpWZLwquLskZ47mAdTekZ5VmE93chqcw5wMdM2J9MPV6qbHC6Z2ifYVFFq2BQxo",
  "key14": "3VVdNVirEds6swrUEgcRTecusMNQY5w69uvtknQMaW8Fp1s2frtby5rUsK7GcnQZb8ei97NZfud2kc9rMA4nozcS",
  "key15": "48g19dvoy3uxFAfnrTic5GAc2itxWuvYXavCthzmtM24Snqhjrdc9fM47DL7NRcmJe4c4QTVM8FfeiYLHrHCvCLZ",
  "key16": "Ha5pk8dfWGcxMRrDdLq7er9PAMGmL9m5qaybBw11ahqJ7RYM6GwjquP46RZ6vM4iovzLq83TiKDaaD8dKaqphs5",
  "key17": "272YfTxv6KX4hq4uQE3bWirnaDhZkxDFAbjYfi6M8p3y5xzQKGpDf27F53staP6o94Yid5gNdqGt6vNGxtoF6j7v",
  "key18": "5gynd6rmZB5T6w4Sgx4tnTp38WrSWWj2KZmqKMguiRYh9GjdbsDsZzm9uVUbauceQsoZY5fEUgDDhrrnNXFTWxJW",
  "key19": "2t785sVTKPgerKTDhq2b6vczbJnAVSxfSZEJsyPokSib2YTCQexcpubEVkLzQ8BwpAck5j1DFCFdjcqqDBLDeXic",
  "key20": "3j3WQsqSTAivDqQ3HJuiPN8AQr8X574Jk2H6aZmjVd1DWRBDpirhrmQJ6zjys5R6T1CKYkCG2H2eWwXyBy4FSXXe",
  "key21": "2cncCWsGTLFMn4MVSN7tiqkb9o48YKgc8SJNAo6PdBzEPCcAW1g3QSw6vQgPeBqLwUcDtxsa2yD4wppCrw56VHJM",
  "key22": "t7uVgnDH5681VccxqsnkDJzPNS1JNRcUu8umeWE1qdK8UfKnSStXPQ7pCWaG3ea6oDMvEhMFogg2qGmrEVEvQHV",
  "key23": "3JEYFM75hrYhp2jGJ5ggdxCBKyhvKXCna6Cmkt3GEv1Ao9LhHzg1nk2dL2cxJFRptaCsygoKG37oCeY1GtngXbWP",
  "key24": "4JFjyKHCw5EiTGpunzPKXUGHJ6N2hLGQb1EkbSpSsPERWiCKau9yevpaV4TLds9nca1e57s2cg4vYF6AaPKshx8U",
  "key25": "5yTQZ6tZvEj5xwETv6629WCJuEuRZnoky9YPdSTbRyndCuH3UiR8Cus8LgtD3KgxqpYT1oYuRZhACUw5vd6hHEdP",
  "key26": "3PGZssd3gWybqZUs8bmaFdj64tDYWqU9j8XSYbCahdmR52m1fuz3G4TwxCjkiLA9F7DV1nU6DU6iTC5AxJKsRpY5",
  "key27": "5ud118JepynQVcTqentzw5zwLWvNfeJNbYRNt5gHW4yBPaQUfiXCoW4aL5pFEFGfzrDUiEg4DzwQBWtZVBnFzpuH",
  "key28": "4s61CoRE1EWmA9Pw7GMiJEEzaJrS8natDsgxCyzvbYwsT4Pgb9nX4RGkwNjvnw8UFuDYv6438B2uYyS24tDutXWq",
  "key29": "48ZERYS78vVveMP78S8m3Luzty4qZKobhvkWJAncmLTeVTkkUk64yfBSzbpeDzY458cTGm5Hsd28vrPcEFaZjxvh",
  "key30": "reXuvPdiRcqnL8Zscx22AFRY2J7bg8ta2xugVfQ5qmFySXaUrJQcQExTEYVu1EVpvDNqp5yfawzjWQyNv2vchij",
  "key31": "34noBXSrsPQPHqd935KD3oWSqwZ7BXtm6KyWMFYdVGweTkef1DdgXbeQNaka7efJrcbjDHzuvBdMq2yBL3Q6N3hA",
  "key32": "4Pd7v16VS8e2zggE5e6FVCz7dFho6ke2DSYbVgfcqaziV4HZZEwCdd8GTKJ7iqbfZjd6AujzMdWr74v9evY2irJ1",
  "key33": "51tg9gUbGZbmC3oMEvx9BJRaDFx3osmBHXoCGgPPw8WfimpA4mvw7iE8vgi7rjNpi55nDCG5BJ5QDQoTvfr1e4nX",
  "key34": "4vcgkw7cLmq76S6DNUMDFkgMCSaMPXCX3GNeCt2yVnuXcx85GzjodWxzv7ru5RMuS86hcJQqL8Wev7huCdgqQAba",
  "key35": "5abn9t5DzpXn7iMZnnPtk2YN8EDQmEP3wpPgbeSKy3hp4gNnyM6keEKCw7M2bymvPa1J45K7FGz4vSoJajQnansu",
  "key36": "2Zei3NN1UxYVrzqBAz5nnCw1A5B2CnDr6nkYnuCLvDi1ui6ZygqEZhLBdGWFXg2SeAQmhyd6Xf2ELUC7v1HbCrU2",
  "key37": "d6yvKSkxBciBpjzX6cELX4foeHDYeQyKgEVN52YmEqjaR3jJvmgre21bVvoKrG8Vbp3PPmftf3JicyvsC5V8ukg"
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
