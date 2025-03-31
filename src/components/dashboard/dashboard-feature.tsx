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
    "b56S59diZH7dZaFP6r2oyvkhsyYyrEaL3UzDbnHsRUF8qggEgg3SmXFD8H1Ub3dJdskUjmyaHjhvkiNQ42dDjFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WAaiAwqHg7eprCxbPSx7jejaZhTvp3PtnizMrVfggvSMFTRx98seUZNp66ekDrkQXNdx7QGXpbxDCTAnxfeuRix",
  "key1": "oP6cSSqrEEF56kZviqqP9auQAhfKy19hdgfcf77xch3LpgoXaqaT1ZVhfFRcaXToTJAmnszUti1uXXzuGwYzAWT",
  "key2": "4yqDet1rfNVKhtW1ZZuzomKfxsjbMVCygBfbAhPjMcQTEqfVckiW6TcZkgRvVwjsxcrbVm9isosqFWACKp9KgmD2",
  "key3": "5Lq4N8XZMbvigZkhzWU3n61LfNHUWn9p4ZiAxtuDd1keG5RE4XmVbkQgqCAsRwXDJBmucn2kYtutT8Hn3YtNbfD1",
  "key4": "5NJBUaVZCZQxBnDGP4AKP4RCjoK2iSJeaVr6Qdxznt5RaBq4NoEwGsDhMR1jMDB3ttXzypW8C7Ly9fUU44vFWJNu",
  "key5": "HRzDPtto41v58ndDQQNu6yW8PmEtrLZ4haa9yHTJPrY2CCX7Mi6JKtLwnnE81HDL1PD2CHysBmPjphvz2Yiwpc6",
  "key6": "5fHudxva6Z9ktg3CT8JpUaACWMDQx5jWNMPY8pS7kjLsjpFK1eWEykyJHynVvYiLdSiCzUYT74QRHHKPuKVEFboP",
  "key7": "4Yzvarmp1roYwUxxABAPJ9FPFkWhdjhrBRypTn12Cp6FciEqHdEBHjQLRYfcxyA8CyQ7rjG2dMugMTiHie6HQjbc",
  "key8": "ytfhNuDHvqmfqDLrzrwrV7PYuBq9L4Z8fG1tRfVEvAA3mfLu7qeLLfox4dixbbYBC74rrfXVPTajspenP7W3aFr",
  "key9": "4TmAFcvUkmxveifNsKsdpRNZvwQZkNGNvMMWT76vuS3LD6kXigsHnUt37FntmHyvWupJifvTuX6jwbaG1AiQEKEy",
  "key10": "5yANYguhXi8WWbdmbrJyfEoA5hisXtbZaDUdF7RUo4A4h2H25gW2TH26xS4vLgJKhiJzmjPMS1rFuBvnQ4WBthft",
  "key11": "3REgDrnd3jzP5R7piPrzdo63j49Vu6rDBvKhgZiJQDfspfEaukPmHoQeDoSj4sF1LtAa8KU1Cevpuc2i4RcogmbA",
  "key12": "4YqK5jc5hCp24tEGTKLoXyG67hqLSYkMwqdrmNgnAFGr8ZMhwsYHFHggdchNrvdiUzjh7etnhpta3qpstEvmQbms",
  "key13": "syQoEPbLV99rmhF5m32vTUtKwRSYMgYEJupoSAa6NE5hDeH7WmujBTTrHgqbbPaTXHyPr2S7wHVuPobNjUFuDx5",
  "key14": "4G9nEQWhbVUdsspkfizGaJ61vbtJ1veWPh861KrmSNCSm8A77491nZYe9M3LijS65SMYzkGNj8sS9AmUKsDaFq7H",
  "key15": "2ScsqYBfRqhgNERoJsakozcMskGJAhWeLP8YH89e2NNUMtsjyRWTWA2L1BYYHGTEhV9w7hpELAAEMgEzZRttyTAw",
  "key16": "61cPVFwoPTPoo8qtweGeLyFNWcmquFavKLh6QxEcr6qjxfLCFoYbvp4GfsZ4NEDCRVYHTeAMr9XF6V4PDk9tF1WE",
  "key17": "3wxZJpFKqKydae6cBuhRH65CA1rRx3YkLiJ9CCa5RA9H2osKodu6a5xJKSarLz57NiDxqsr4mni5zZ95TS22nxi3",
  "key18": "9cfQibe5dpR2Nac19adBgfrRpxbxuDNSETaNo6kzqgtZN3hCz8UQJSmRQzDJeFzZ5cpcbY4AqLTDNGqNqd4QmKk",
  "key19": "2xzLBJmzYbtL9QgGef1iu9LdYsXAJ3DpSCPj3KuVaV7TTKh2CAjtPGKAN3RvHfoJYvetBTzSZu45t54qJ7QTFY1b",
  "key20": "ruDR8C6RRSprDei7V3tMSdLQB5gLdEFBG712yyK7s2rRrermK9KMShYxv7acZzPgqdRJgmqfEr6RNJX3V2xS13o",
  "key21": "3LfeFWnfRReoxpCmmVb7FgkvDqxZ5hXEtc3KTmkp28aVQZaJQPSgYSr9aRu8Mzgr68AAswYJDdGvnkHHEafHzVxR",
  "key22": "BcsQhqyyUjpNmqTVNKqArSuSQMA7u4W7SGV42r4rxySV3hw9rBbaNXT9nUefJxVoC2WCRxFMQGGGtdbkJQGYGVW",
  "key23": "3ahgFxy8gpsK7o481zsL9BXXMsWw6Wb2PzTT5qreVyktaWvLL1nuD4ivCsoVTtbR7fXCfLkskGSeGzQBSySqiMXG",
  "key24": "5DgHn53BsuH2RwqUH1GNid9n98a1jHwCL99DtDFdHDGnekrXra7Nv6AT1EDvUuAH7dKGaMCFnJLJibVU1csbRMDL",
  "key25": "fNncsabuYwg296XExjwFNG3KnrFHdzEjwExfZ8yo1BfNiPpAR7JWJ4rby3zp6swoXKSabEqWDY37HFSFroK4uZs",
  "key26": "2vmrY6bQmvnQf3EUFEph5j64fHWR6Z13EpkiDt6dZu7tKRvFJc2i4LzmWVDQ5zRXB5CQvYr5YBJWZ8qHYs6s2X5Q",
  "key27": "47gNPPFbZi8fVV6VwbWp8ZAtJfAtrhKVRQuC5vMSpmrdm2twF3Kk7sLJzuNrjGViEF7hWj5ACZEAfe1pQj6nHCTU",
  "key28": "5TsSo2RLBUkkHUcM23nwKnWhxBE7LjtGXecF59gTTceMsrCNYp7y8bHYEPSrCB7UJYzQ3DbVkiEWgyXH3x75SSkr",
  "key29": "66jBnQonxExcyBPBbnkvyWs8qzWLjurH5BpsUJAkP5HE94HXEh2HGcCvPDnce3k5yH7V5Z7BmXfJaX2TW36aBtmu",
  "key30": "4ytnWvCHHjfVpAo8ytS8ZEwQxvdbpnKrJxYx4oBUpuz8b33NeCouVgaWf79QQxbgttyoJg1BgZZXZwuMLfquK2VR",
  "key31": "3okzqXivs4ziUaLTP5xdBeYTFXV2n3jtqzbNS2cHfUAv59u39aqpaT46NgTxCMF2vqtupNxTbNbyCp6CRak7LhQq",
  "key32": "UqdbwA9ztXXgoHpoPSiJvgJAdkFUouufE2D2arL5BFKyyrCyp1yCxMHgUazAs3qx6bY5VmiWsxnKd4ox2PjjMFD",
  "key33": "32zfhU95Z8S3s47JxSdoTRY1VvkusawLnojCJqWPzYXHK3Rx63BkCytjeDCaeQRt1n98VDunQvAXPcx76otte3iw",
  "key34": "4ahpGFnL9fqR9umXoTTbFTegu6e8imXvpW6eJ7cVjCDMpCDywT8NA5oC3wcf9deoqgqSie1ZWH6pQtsMBiCVZWDL",
  "key35": "3EKDAHUBzpMvnLFRGNi34JJvuDX7KzmZ9FEmTSw7X2g2mgWR8Sy9vqmj5bjTZk4tHbQUH3BNBPgqfdr96SBkJvuS",
  "key36": "shceocg7fgGLgeXiJxpu2Jms8XRyScat5ZbAGWWr3CKZcL3Z27DFP7mrV7go6zF1TAA2H4waUFMdCeJGCwQvCAF"
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
