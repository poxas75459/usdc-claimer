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
    "4hig81h9N81fRHvGM9kTcHP1UxxTcFCRJ8Ego8rpJXHgF7F6YJ2ZLQFvEuZQddDomgoGfEH7d3eRJhWxrJuUTfAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38wn8VxgQRhUJknrhpZVuqxEbMQrNxzGB2RxitRPCPcctB2bQ1S67Ty3KQoqA1jQvYYmrCXXzsYHVHFG2pjcqgby",
  "key1": "fz4owFddutT9NXHjEkLLWM1mhzdsfFVJ2S2Fn1LvWHvSDpCAQpp8iLezNbFCDHXgvaF6D78fGXAaHQfEwCqWkso",
  "key2": "5ANKb1mXSqhbXUTgEBvrLqtAV625fbDNdnXaTGNLVKikoHnjL26uEWGNMpxAm9njzh1QZW91Eze1SaKyukkAA3zc",
  "key3": "3E7MBkEvFFtDMbA9WfaXYnL2AKSjvpN9z1HcuUuu7cZrjSgN3ECobV5y25V4AFeEbjaL79A1PqCWUm7YrM1VQ1Rk",
  "key4": "b7xwyVxJaMsFANgyqrWRn2WyDh7DhetFtoq6T6pwUxvGCPByf4WcgRSGMEgozo7Kn94eGUjdSFSUZKkWy76h2qJ",
  "key5": "5Yck1MngiGmoEcKwbMKgzJfbKKBRueX4AcegRy9bx892GSie7J8yLV3PfoMMcBzXNoS81PArUGLouWM2rBdGu14R",
  "key6": "1baGGrmyq8x4YH1PTsHHbzB75bph59F3p2d8RJ49yZNDyVvFUBWoom4NSSojVtCrg15wpZpcyqf1L8jNtTYKBDJ",
  "key7": "2vgQ24cUJY96at6t93ovx3RDgANnJnQeao26wUpv3hUh5bUy1JuBCSvrqGkyGAdwcMRhShKCzS8Y5G4xiFQ17fUP",
  "key8": "4QGYivFws4WiXF3V99NuvCtt7U63VcvchZHAeVCvdpinq3FTZfmJbJ8JnGsRRYN7Typ1qHuYqAggHuGSV1wSjpJm",
  "key9": "hFbu92qDDL64FDKMWiAQcdGAj5ctgkaK1Qi6odz99pK8zJcXcTMjRCaM9iAjmmAphsAnE5QS4buMUpm7yp8RYsV",
  "key10": "vRNubhD5jPuFQYfrurQR3uegADKabgJMv1WePV8VEqdqBsbdHueGwzyp89oy54c3ydLw8eAUaWdMxJfGN8Vsmiw",
  "key11": "4zbXhRPqjCs9S7ydhqN8yFqVscCinBifzPjXd96rQgHDSTaZrxVZriuaWa5xW9tBFq2Hun4BGQWAyhLuWFFeinjF",
  "key12": "5eR5iPkBrWNFRYNfFQkyMedJRrrarcoVGFb4uXHcVPTZdwQaiWDL2KQ4uVNVFzfKeTYMUUFm1UC9TU87jmM2DgeL",
  "key13": "66fYJMRrhqC3ieFpZycn4AEp5cnw2DRZ3Kw8KrGZfjKJK56a5DtaqBs1dU8j4S3DvjivQ59rRdFYB2fAY6mAQ1WA",
  "key14": "28qghcKaUGwWqFdC4C6W6y4tnyJJ6Pt7RHVDGGcaCTRiNgsKx29pKincqMcniMvpCC2PkEDHXEAsT1QJi6VYxXDz",
  "key15": "2XhRyWVQhwDpTZ82vSTCkoL3sV2XVuoDPAFdxZqt8QygU6riJQbpSZ67v3xgo4hWQM2jG1cwLstjhMsfu1HNMCuJ",
  "key16": "2csBTRpKY5ZSiJ55ZTd5Dp2PuQTqToct5Rr639RFXSzLHfXkbsxgqn4SZvt43a8kjFHvTHsvgMZJG5Ckefx367FZ",
  "key17": "4jk2sooCCaEckpN9NF8PTgkZdyjvCGq5cjjGvEcshMtAVCkxoh3xsXUACbBCPubo6AL1ivP91fSW9FBLZPKHYyHA",
  "key18": "4BGuY13X9oBxqRCGUqNiY15DCvfB88hgoRUAZBcfR6qQERzYaBMC75PaRjr1LS7gZTgCKACQs681Jjj7Vbrj35MT",
  "key19": "4tHf2f1DHUX5jWETM7TgjWFHanqVwzgcfbVcPeLdFTanL5ECsDoKH1TM3qzNkkBZDRD6dhSZT3vNheD4VpB8eVPW",
  "key20": "57JqoPZqxPjKAQxrhJRFtk2SSET2NjgKQP1SVszRYoPKAkdj6Qut3zXgieuMPgsVSzRyCwYpzuyX46Sy6gv6QsnQ",
  "key21": "4GsCxQAhtz7AdE9JHkKR7mjahwm558prF7gE363qqFmUt8DBix8x1dSR8gmDBo3p7jFVGmccDkJg4jJboYtQ6H6V",
  "key22": "5u86Ry56vpde73E17qF2Fr9Tj7FLgy6iDKcHu32Bk2tQukX2D3yvJiEJRdxT87h9iZ6qrRkuXCeHCaJfMicpgAkZ",
  "key23": "3APkLmCF6MxaWZ2xZVP9ay9LfANBhBRYK4ReddshpNWcN1DsLJceiff8m69LJdwyfEVxKNzxg1rRz4ndH3f71Kse",
  "key24": "4fMpHfHCf8vkXiW19aQStbnPeZYooRpH7dCFTD2tBGf3ZqwNksuh3T9pTucrjmue88kxfhKtDabebVR6vWkvAea1",
  "key25": "ovaTdng8qd9z8xQfkwYgiwHLqVh18ipfEUm3LTMPhNYDzjYd8wVeQgAPK5657bEzzRiRcBeqapEa3SAGAgCAw3g",
  "key26": "5iv2oRcXL3FrH1qnDqem9nLHUnmnebhPN7aUDMR5rkbYZPgPK7iPXer4zbrJKg43WUKsmUrqpERT2mUx9Ge1PUYf",
  "key27": "3xZ5YU73dZGH91mJ7YTrBj4Ez4nqcpy38B3nPBmtUk7JY42L7cFvBRVfkTiFX6otfPNX4zSCnJrE7joFpTBT3hHs",
  "key28": "4qLkyDkKN2XpS8NR7FdJtnUPNyBL3N5NbQtahWMtbrsMoWdcTBNBMYBYisDTCg7tRp7Jq7sktyWsCTBsRdTCt3pV",
  "key29": "5fV96tt6rw9EDSUHz3GDeyREX5ibRksiagbAkmjpvRUxfvfq6nt1TwQNrzSimNyYxGGD6kd4gaA19Bc3sVziizui",
  "key30": "4DnVqsFuRj2NBbHJ8fFfCB1ZRE8qQq4GdboNG3QJsXofCCtgUDY41fx1xCaoonUUXuNvh56JTvXwk2vYjY2dCUNr",
  "key31": "2RQCtCbxHsyKNF3hh7dPycr8dY4q24Se2rPHQschdXLQDEha9ea2dhbSMogH3KJqR5D1VyTTcgc8wLqexJpVrT2T",
  "key32": "XwGD2DVuDozcedTvpmnFLedY1eZkg48cysGCnwdwBUdLw18UuGNiGK7uqcF7LUQ8vcmLubJ6rtxvP26JveYad9d",
  "key33": "626CucvZz3WEgPcT5iQ7VExZHrQfY6KocAtVUskWjeZhMvc8JonTm3unRfCV9SxaX1HtSNF4wfTEysAu5Et6PLhD",
  "key34": "3RTiawNam61QHzgbEXTPydkTSdjHueGsBo5iUr427z1yYjZHSWP2AyvVDrg4X3Mq54LF3qt5HKdnVG1aSTgfT4fH",
  "key35": "2Bp17ZmcmBNuEZGx5we6Etupd7akv1pxPdJWNFx9JuTHcsdGXKqCBXYBmVzA82efWFv1p9CbjQMHybj9DRwyRTjX",
  "key36": "4PnTMriPcLcqrMCdH9kvviCbmuCSCngyUaswzS7YqS3RVUsVewgmibmPugzDWSgFx5wQHSe6AZWQtxK2beCvZ75s",
  "key37": "38RbqcAGf7972kYmzBm2D733QmKw9Qbhpf1ZLyGKuQdekBDWFPr4zSdvoEqo7jrvCBpmdVxXDyCq85tFPAbqRHi",
  "key38": "5ECmRmo1VRNCnstUuwMcM7m3AacTfuoXiMC57viZYxWEoLT9JoywYGyYAYo6Y8gkF4eVpW62i9wbuksrfWvfHcEz",
  "key39": "3fz656EdxmRLJgebKHHxpipz8JGRvndPWdw72xV1iGMHedWVk2pwwaoFdZWsXofhxp5LkRhXGvAotjZxrv8ECN6E",
  "key40": "4GpDnAYjVMRjXbptoWAV6Qrh7rF8SbxA6m7TqU3TnzgqoY1263k8yb6aWnFDCJ94XBQCjkbY4Uoz57zppueFzDw7"
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
