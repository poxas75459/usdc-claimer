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
    "3rTGGqUkoMUvDiF8xNgPqcigsTAe6a3HXdTA2WhYEZjL6T9woatcyoQTNfrUcutkLCCrL5Au84ofJYL7EkUEhvEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Fh8LPYdtoedwHGV2jNfXi8MPdkz73nGe8ZBoBWBHkLmhZKSnzfzaVB2atosmBa1rSEiyZ7C3APpSBspLoJgWEV",
  "key1": "3t21T9QisTs9bx3KW2NEpxSZbD4ms1W6gCjgYgUwXjui8fLNvBbgWMMSKoZJCzzg7r6UB4U6RkMg4MHwBVQQrGjh",
  "key2": "2ZgxPGxzSpTvDM94ymVdY6aPAWB4RwJZ2njgwAPAwDg1DFCQzHcM86pKHZaM6QHXLSu71TnCsoHhhiFYqL3fyMNN",
  "key3": "59tg3awNcwffGatXsDMFAWsFH65wef9feAuHDePvCB2hRqsLmavf1jtRNkpvGq2N1ijJALRsVd5N5cP54BimNufr",
  "key4": "2kafJFHVzN2Tp9EAudbYpxLeXp2s6Q1ianzsYZuGLhf1E9YoGkLtBffPcUJStAhEBUhz6jcbWx7UFcurj4PGK6Vd",
  "key5": "44Cd4dZqZCkCofdxKq4vH3Y8ege7kTfPbq7diUY1uPnxcT1xWoQ5x5nwfj4k2fXtA2PpepJw5db5ofuqcHF3kuxy",
  "key6": "3fDLWunjYsZ9HuuWuiCvJcgsawNU27gcEc8TM1UQ9rGW2RTtjJJxU2Pdug4cqz1fbPPR9HEjigCkgBzcaA7mJiS6",
  "key7": "toyAUjDtSwgCU6WEj5ag29aUKghREGjKByw7szUw5TT1zgymKsddkvh7DoXPB3XkgpNnQeBkCwsmaYT5MUzrUfc",
  "key8": "31fb87xPTFmf5W4vaTKzS7XzMmgcdS8a83EVoWLKhdnHpu5xth2XbtsCk1WmNrshUbmo3rq2jbtcybGUgDtAuVqu",
  "key9": "66mbkeh8g2yk45KqNqDKBk8wbUSn1LJ7YvXmRc1M1xevXtaEJuhCmggHoKvYPfHqavyaaneruaL3a9iyRKxgdhJ8",
  "key10": "3HY6sWqxTVZjGUXfS3f6YEdUrbUtgbBiyWTUE919rVKA4Jov4TqjeYwE3xERgmCgxjJU43mL2gtK9jEyFMfU62rq",
  "key11": "53pnCcpFxGVymb9xYF9Pj1uea9JoiVNxHkwUDFQ7ayAb5qMxHoDVbDsHG17GDJyheh1LgKpppxgSfgRHzNnHk3U2",
  "key12": "2BTuK998Cx6tSBjUJ4mvcw31EdLG7ThYAWrXtS3PfgAGEu2hspqreupWaKmRbrWHnCPM6qqTXzMQ7U7mCz7PdSma",
  "key13": "47RjkHkWFHVhtacwycDSQTDke24nvrS48YetAXRNDeK8Ax9Hp7BhFhc2FbBmhczv5NVKz6AaNPxKo17T7p1fErX1",
  "key14": "4vMHmMSV91bMx1R3SnZgbMEfyJE1RUD3bpPPB71xwJCNcVP1xKmib8NMN8R86gKy9vkjvSFaTssgQRaWpSvHJWWy",
  "key15": "hnf3RU6VhtDTyhimqrxdsvDR1S5JVked7GHtwgXwjJqH6tDnondcEVe2uik3nE7NFb88kMD7EkEgTMdY8RXHka8",
  "key16": "3apf7AYb5nBdrSKsgDwRp9bfj1A4JWdc2g7VRf1iSauwjFPJYk4UZUvfdTzgVkYSbV9iP2oFEhj6kM4pR9b9ZX1U",
  "key17": "3fTeTMJ4h7vZJgjPUqSghtnD5qH1z2d3huor1ypACinyMFwFhRfJEFPTvhKvUn47fvUB47NGa1hAtQqyZynLvyJH",
  "key18": "4sbNkMCBpzhqCjEzGUAmvGwj8YL7wuzsmRc8Vbun483iBTxQPcpUsvgscnT1yzemKfjy7XYjHTykot8JFFuAaipU",
  "key19": "4omoehAYGwJpd6x53AvgadmeWeg89JQyhsbXou3fahXnHxxLe2uiqsE4CtnLkMmDUVtNkpyHKV38Lh7yKbyUMB4A",
  "key20": "2yRBuEsro6ousiWD5mHf43B4Krrf2eRLTe94gdiRymfK8MAZd4gDCQSDUNT7u4YdMcpvJ66Ut1DLKX5CibZUR6oy",
  "key21": "3uK1M4mYzbQ2oetZEhfEQmVnLpwxdxncvgK1KfFGLRHLaa2Dmat7fg3zhbpEhbR7HgyXcFJP7MPEhrkbvijjfh2S",
  "key22": "5z6PKdMmeW8FaJREGRTE7Pv99nxQKrX4qmoZ1qNE2kEBqCwdbpmLQingPq24fwNeqEFAymsykov79obaSjEd3kkM",
  "key23": "2rHqp87r1Z6cyAJPdNmDw9gchwVQkq7UwVkww9WZzJGt1ecM4EE5z5JtvoRHXduuuW12rs4JzVcmarYt64RKNgck",
  "key24": "2fGih8bGfrNCuepNe5e3Ct8qNVQwDuN2sR7GEnGVLYafdCZZUMVDDuwAD4yeNYd5MBid3suo97P5UwHpwoYkKayh",
  "key25": "4EvUYh47TkdHSwkUucQyDf83isfZjQuWJatLw9X2wumG7XsHoZyzuZHAxa3KRskyEAb2hhLYwCJpHaE8sXeaDx5r",
  "key26": "3Ci4XxUp68gBFc57uJGeRtW5Sd7xDRwofNwxJHF8KLex9Y9NMD7UHMrG57feu5mVzpXKasi3XJCG4kBURLbBBAtC",
  "key27": "3k9Q1qpfsXfaqpJjJRiofuR3qgSVNiaZrjNxeKngk6pDf68UHzTDkEua7sNvueAEz6tGGuteGnc2E9tfRULrR5xT",
  "key28": "3FZe8sZrfNjpoX1G6ZdZ5zx8FLYd3A8D8nAyMgojAxNh4jM8jqZY3oeXjqZCf1a3nPv919XYVKsfymUUjVeeF9Be",
  "key29": "4JSsYomDmeurQRfgmUtBaXRhBPemxymq16dnE9R4v17QKSBZP8ZxarK5yNPo5ioiMtevcr3GDbs1hn6cg2eywqNP",
  "key30": "5QZ5Ss1oSSFrdP2bXjfrvQ4mFt9Z6dJ33xKDMufr3dZmgmnrtdpvyBtGsF93ZuHAv81rLDWtQ78XX74PLaoLLsUp",
  "key31": "3uXw1J2LerSEpYaZtabLUUPtXE8HiGpd22aHeyFduoZ5WnQnP6L7NghskReZD8sGNFPQ6eNRRnc8YuuEUPhbZCRM",
  "key32": "3uxBEskPvxnrGL1X3XxtfuJBb86ToVhrBoGLLWvazbWCo8thHSq5RbJyK913vz7jDwux6d3D5NC2qAYZiRfM7iKq",
  "key33": "3njKYsSiFMtp2KiXJ2yL3ex1x7XTNBSCPSxvaTmsSDNwPRXMmXEbsNfoLARFJuovbXEjDMsYBaEixp9itk8qaNoB"
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
