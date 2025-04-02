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
    "4aYaK1iWironHuBxR42njzMB1wyreJCt82D6QPCV5w2MoXhN8J4XGapC9Uk1jri7TPLJifQjhobw19HyVtkpf18B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52SnFmcJVYdDNKBpB19QXfJKnpbxN9nBDvx15bt7ZDGPZ3uYyuW4WhkdXhHMyszdUddo6qoUZZkBCyRCohpas63Z",
  "key1": "2H6mCBpjffqNdu7CbFJB5xCMuVj4jPJn8muCQusQHhE2sTRmwcaBvYTLorFvLvqqxMNGcLyECJcTLQuNM2SKZdXK",
  "key2": "3xbzmBCCrEJ1SH1TtemYeAgy2DXSA2pvwpGj53h1WuJVDg5LpoEtMBwYN7oda37CdzGPxXjrj48FdZZW3E7am3vS",
  "key3": "5CCLipj5et4ZVvSHgj4k4cj6Gzs5C2yc8uJqm3ZcLnbikE9WXrmjgXWWthdG22y7tg6fBr7p35ii3a6q5qv4QQq1",
  "key4": "4Kbpu61cdG2UJ5hKqHNkszAdDmDrQZ86woHAniTbLL8DJKgHRW9Fq8XeYbY5cyq99ttYd2j4e5qE7xemvFYB2kko",
  "key5": "4Y99XBzNGMtuTrcLrBG791hbdw32Fze695MGAjTaLDvSYQCbi4ZGfVeX9kQhoTjsWi6yS3eu9X8aUxGWaa6E6Qa2",
  "key6": "2MJCSptRkAu7kmjswgwam95Pewz9GFprdwM544BowQkhJbSQ1YxP2y4ytJHA6XLogbGE3xsuBTYCvsT1W5qYd32M",
  "key7": "4BfX9yhJqHNF2FfVDNYzd1VqVNGLsnxk8UrPeYP2GsWyEZNRLC3SbPqXdsJ96dqcKedUfe8K47XjLMYmZza9koiA",
  "key8": "3viLpxCZFjgxosfZsMAxvsC1nqikZ6gSLQne4JSUrb6Y27VSdoXF8jB3s9aFHNvjXFoN2ivLcfxDWNBqgbHcyaCr",
  "key9": "LGGRgM2A5TEadRuyFj6kzZApg3JbDj2cHjUKjghPat9BTXJXHtYUjbB8e2RPizARhrDHrjfnoW2ngxDv2uRUmnh",
  "key10": "2hc9k3v7SFhsk4oonYXgXRqbLn6ioUC2sXcvLv9SrUHdbXopmw7CirdF4aAQJ5RjDnc6EhR9Q8Ki1ZgQazecWGoW",
  "key11": "2GZSnWDLbzdcpup3AzUhAasTDoocPGR3qhZL66trx6og6g2jo1VTB7UXgVVVYrjd9gKc8wjpY53py7G9R111RKY2",
  "key12": "4uf34Y3ZmRx5A4RMwUuY7ZFtZNM9kwiZb8wnUg3GAZvc2QP3PcFX195YCLDRsx2FeAqViAWVPx7duN471xCRFPFn",
  "key13": "4pJe9jrsWQKwhgzqcRAT8acT4b1A8y6fiv7pEA5L4w6XUTWSEZnXk8vSdCKT3Y5fizYLL4TPwstUmNG8PELxfQjY",
  "key14": "ndLjD7NazNr91hmWzCF95A8e67nAcp33GfkWSdezotRsJxPceJecU18QjbLnqAXLJ7MTGJ74toLGF3iGNkJ7xo9",
  "key15": "4iJ5vakPB3jH9F4yvexBzJhcYWT48Lwmb1hn25osGC3mnTXBSkHF5E9vipVSQVFpwfrG8cA2xZ868oZpM6uHYMWL",
  "key16": "4DtfVXodx9gJWthhUGZABH3wsUuctSTnrY4BLr3itgDZ7vqoMrYmwvpHWwAHuZowAgqnnLAmWT4z2PAdVwdLCtTi",
  "key17": "4bmya61UqNGY9sXSJcC4wzufpnVD6QYPqgz2fMwHVk7D5YrJ6JexFrQd4p9efp4Q6XtS4xRDxMG3YbiUbzttaDK9",
  "key18": "2DGeScksoKrtXD5dFo3tKXJJ2abUthZ9eyuoXnmkfgWXJMRWczRuC3qjpdH5FFkAmZFcUo35s1WRL397PUk74MKS",
  "key19": "4TknhRpUiRaybt84FJjptnAW7cu3c8zfeY7svnCKUzQqHhQgWyfMucFRNS5CV3r2Tbo7fnPngvkBwWmedsZkH7nM",
  "key20": "2dFLSaEsZm3G9Xg1Fvf89AJzzp6DecsQCDazFpQgR1TK6XEg1YCQkJ82HNYNhpMCXybUDtQetkLJJPDFR13BnPRD",
  "key21": "4Kn2HgxEKYtAqabZrxp4MXmx9ynVAMPXmRpBFYZQ1323FrDfX3nkZssyjpiw7MaD1An76gGKy9LZXTanPTdjzfpP",
  "key22": "4ss2oK3Saxm7WjEoJmxe9CBzZ8VZ7kJUuhpsPzf6o5mA9MmatRxeXSS4toEbNyGWjJfNsimJSjL8zBEkbcji5zyn",
  "key23": "4UYiSEExURSPsYuUmugL45YVDnGKmsDYaE3NJZjoj8bJAMv8nmXgrm1Q2ttyeTAH19duNRnwr96wGoCLPNpxcELi",
  "key24": "4YZ3vpzu7ko1e1qT6c4pzjiRkuRPJ1cgBbSzDktwpdjeBqiNPg9gz2p7k6ap2E6kDZLDEj2hTFXjkrVHXZtPgSWG",
  "key25": "244GyLFj3E4EAKqXkADHW1RYGwJ7B6pZgRaaLvGMjZocZ7n9S1gEsXmCjEt4wVnN8FSrbjYuKLtA18rgkQTH71hx",
  "key26": "4bvYGAUgCU9VxBAGUBtQaghWn1seuySM2YDHyd3U1QWsHRJVzSwJfFM3MChrcDMfgSojLTKEXSRZfRUWu7r7tbpx",
  "key27": "3pPV5dcntAGGfoDDzFu323UeeeQwe9CSAcWmbfKzmvtneMoNLneu4HZnu47rQcvW22JEKTGMvPZN29VrPPwvrQn7",
  "key28": "2NR2qsQbvEZNz8VCLq2JYwEgriZmRPuT5RLzQNMMgujoUHaXkuVNJ1KKfnLMoEAGVe6AJBxA3QhyDdJJU8ko8pQa",
  "key29": "vm7676JtB7qigeWK1a8Wqf5DYmsDZgzNsKWajCXU7hedgHTrSN2t15Hs648MAjACQYqoi82sfGyMzk7MTMD2NUF",
  "key30": "Xig8v1tifoe8RgQXzGBoqykvqXoDXaPqeB5oMRPD2ik7b2NwRZ9Htd2HQYxZGHtfVuBHwducsiVa6N5FtS3zbiS",
  "key31": "45cVZ5F4DyfR9mLCmFiaEkeHJSm9wU27uvhdEJQLTFudVTfR2ZN4iEXWgc8sVKuQ1A4bNrb5ncTYZ4SWdawWW2Hj",
  "key32": "f3WirsmTfue52XgR8PU6D6NbjKeEyVPTWmD8Y4R4jCXibz8RTQ1N8tPfQLS8Fz1rYE9JtbYe4ZgPdfWHqcqJCNJ",
  "key33": "4skTqDBXh52zHffPNmXC5AVVvKhd2y8Y9sctP3ucJgu78o8XBnBiV79P3HZQTXA4WzxAKcq9ftDg4N9PauuYoJwF",
  "key34": "44Dmz1RwuhkH5SscdfkEW4aQDZ3s28iFBoDDSPY7SZRbZEhGGe1VuKgBE3jGExSdFpb2xE4xJN5ugvXZ2HAxWFP1",
  "key35": "343jAVEzNceuNP87wRLoQCdzGsWgMBougdhzzJ5viygJa3YM7ebRRdStCJwmtvnBgd2AkVrxcRHf4KhcgaUirMQT",
  "key36": "7fVALKwPZ7oTBPYwmwKBxG3x9r1fzxSCUsdvMTmkx96EkJ75wMjSFopYY58vneZFygvFcUzZaZ3t8XLCK6YEaTv",
  "key37": "3zr6TfzFWFSj81ofUe2QKLTMzo5m2CfrxGZqULgvk6uAkSdKDCiTqsrUcn1SG17s9y1d35XA8UneRg29EnEzNb7R",
  "key38": "2aTgK4Rbkqpy1VeRGFpS5SEqXatsRnYDF76ukAyb5MfAanWrEarBsVQtnQsk5wAAoY2P96gFyuFsDtLd1oFWc5qP"
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
