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
    "2B1dxjDCczYJxMmDhwmz4p9ndf8BuuDkEtsf5r7YTCxgJ1CqBpVLXjoNEnEpqFKLswUVaPnRq6m5DcxbWKNHjLwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "74FUXfuyj6fdDvUBxxnRYhYeTF9PFzcTSzPqQRFKcxW1TR64skZGQN6XkYyxNRHpSKaunYD4RLgEbSViou3a7S1",
  "key1": "3ZuiEVZD9ijm4g2Dn6Zc865svz8WbQ2fbxruGWyfrnbuUYkHK5N5ziZZZNJwquWK33qf4cuztLBaPfRgujTLT6CJ",
  "key2": "3XcCq32z4CvuZzvvGiAQTzQ1WctJeSayXGJHa7JLNmUazffdbqzV6rSkke9Rz3j6MrzDrAgi6az3mr46GTuTusZb",
  "key3": "4decd8VcNwYsGAdXhsx2ABz1LLUiNxFxjcm46kiKwkvNPxBjNSuEcKB8J6XMHLH7dBGBiAvDZyYbrRSDEB6CkQDV",
  "key4": "2YfsCRgfWqfJQtLu73wEKWjoLjMF4FBpKVTVidB1zNU9okxV9pqpHvzfrrfwuVVkSQ5Gr8frHLWKVK5ECwSJqhGN",
  "key5": "5qDVqzcBN5XatuQccYYKaDjoCkcrnihRj5UVmfLxz4HzFuvFEzvgS91vZG49CxPLJXS9eLtXxMtky6wPtnpuo7nL",
  "key6": "2x9KnsJdmheRLyKDe9pgdHCPdtmbhk8mT4TWar4D7HgujfNR5Wagyw1tx9JRYW9hdxRm5gtpNNnz8Un55p3MYcFg",
  "key7": "xofoBoRScWZTShWVm9k7NBLran3pdAUoWqcscCi96NqMwZzAtpbtTkgs4JAccqEcK8kXgiBNJNXpCEDkFp5p2cM",
  "key8": "4hhDPuytEsKcEniLMnrTWmfUpnk9GsTffT23ky8GmzL3Cx3d7gNv6aqXvft3UmENXY1cvGtXLBkDUqHqAREPF9ZZ",
  "key9": "3ka9tG6cfa7pcpLLz5FobGXp2T7KNn2QHAYPn3AZooZ5m6bc2r6UYGafm4ZJrJRXc2jTNTEdrGdWV1zE2QgyJPHm",
  "key10": "3QNoXG3yjdHf3KWn45cqzczx84qTHMpgNL6NPxR4wEmzVbL1XjtVBukezRTMFxnaP7bDgXCfYaQhHQVGWc6y8fhZ",
  "key11": "2ffdRLiXxrbicgjQGjv24kutmNuy5YifqoN17E6TumhJQPqg3yWyGhzjg5HrNrEzQjiKaanXb2uqf5cQ3PCrwZN4",
  "key12": "31keBTrkK7xHvAkjAcaNw2QA9VUgqEoYaUHPiNDRTosygW4XnZUh9Q8EFrwKGBfRyQG7gewtmeJX8weqbqK95Yiq",
  "key13": "32HtvyhjJU8iqgxqCUAQqYZwjLZXATaLnDjNAE6BvXqxGU59VRC8RjinphSXiWskjyUVs5DHQ2VocvCqkzLw1E5g",
  "key14": "m74VShGfvkHfQUp9KL1KDuA4eDmAH3Hy1RZ38TMPU7gKRBYR7umT2mEQNeMdFW9P7FiBpZJDL3FxDy2j5S4XtRY",
  "key15": "66yZ2XDEQ7ggr15g7PQSKKMr5cZ2kdma5jMpoftWm3o6u4d2nsVgCuxgxgLZb5mvYEN8gvAcBYbH5JpeRNohGH7a",
  "key16": "KZJVDd58z3huHCDyWe5GkCHaDEMcjNijkCShQxw5GdYb9tQgKcrkebFq3eMJ5cQdhmzuVqr5cpuRosRJYgXV2gi",
  "key17": "ormcY8guWwkz7trVU8w4wG3twyMQDVvd3DAnGTWVpY1i3dwtc2KbYnSGqxjpgSvxF92u4uB6qMy3DDGpjcNZTZM",
  "key18": "2CHeCH7mTeYKBfFYtiZQUDxmJDniWf4hPjNxT1HapY4WabnR2H8tpoSWQqRm5XeaLRrLdqSjufekFLRmtVgv1EW5",
  "key19": "WaBXrdkZatMVPqryT2atsBHnZxK22FJ2tLyUktfN8d9tYNTvN4geTuXHSNkLjV9KGBbd6KY3i22Xrpw35LKJdw5",
  "key20": "23QpPxJPadJVuzvadupJeRX3vx1BHV1x25RobwVUo7xCMmnCX8v6Q1miS5c9UMA9vvuXHgPm4TvkN27Bx1PF7ez2",
  "key21": "44gTiE692ucaBkc9D79LpP1WevW2nz1HpW7qWngcLMohWAmjPa82bUvTP25DeUGwarHwKh2gS1LSzjksQH8G1M3m",
  "key22": "vVLyAoB3o2fmhHCyVov6eVxAaAzC6Uwx9PmJK2Y1x4PnHqEwGDThczQiBQRPY8LnPerpbwfpCbVQ8Ta2uUYCGtv",
  "key23": "tWLUUhxpNsSo1DaxhTUkk2Kwqg4a1HFbsmWiNcJQj3gkai6Luri7yYRPpKtqSezfENGJUbEhL67PauNt8vQK1Ss",
  "key24": "4BdmSX1uPjcT187Xx1F4HN1XBJcbcfGuVaYVdQ3KmknqwPAWUqPdmEvL9nNEXkJ8BTCh5NeEo6WiGab2xpLXdyc2",
  "key25": "2iuqxxJnPdvq6gtLL5BnsuGbo3Ggxd4WMc3E8hQYrN47m7CWygQsoMevNpCkoB3FinnicejYZEEWadyyCZXFG14p",
  "key26": "37Tu14XDBWiQ6qtF5xViLUYyWN5y2p8vcvhZduubGoEWYVhnRxkZ67H5hrEjBaAMYWn3zhqQAuKmp3injNeERbiG",
  "key27": "2ZTqNkLBjzQyYnKhjscz5k5fUrLUswEkMrEQtzwsJMeFQisqJ9z41b2xhbzPXizhZpyP1PvBokG7GS1SPrFP75YS",
  "key28": "3AazEJVaFRaUVuRjeuvw8hrYzCiAoLcHrmjpNSCN8Xys9okFcMi1sy7rcfDkSnhHGQq8itEbhfcdd6XVHWkMFCU7",
  "key29": "3a8abCeBKFpgL6MTLUD3SWFmQzFR53zk5pRsLxcyhQMQCWPffye6mHoPTLwvhH4qm4gj7GGFPdU7MqBfveRQLHew",
  "key30": "3Qo5ujYnXUxVEyR9kV1kXSymsVCqVqwcU3ggxLnRfYrxhVCavbFQZuHLCByP6EAKrt3dsiqHqAh4LDUm9kuZff1e",
  "key31": "KYPB2nU6FvaVbsbLxa2Q2tvBC8NSFn8o3Ao9DRN6dbcSTEgwZrsJK36xx5fJ4RCsXz6wmUA76pQzBW6pAfvtYtD",
  "key32": "ryjVpRVyMmXMZ463LvyyK4YMZ3qpRFJZjwkWZ32ov1jbVBa5RAnYJcpr4xFadNMh6ijbQpsofBMFjrdpcJWXWyn",
  "key33": "65TyCwoW4FHLHFCK3FkrdRhLgBoxrRunCCTPoA9Yi6WsLFifMFGs9iqZeM9LRWwA7RNRahESgume1JHNdHYXrqy8",
  "key34": "2dSkC2C7WpVL4uf9U8Jx5LEvHijiBELnzSTa7meeCdK2aFLWimL7qv13zmL7WdtNmVGRGcW3V3Myftt7PUA7dn6",
  "key35": "5LoqAXePMTKcESzppbrjAYj5fcb7WJtFu2QWgKngGtpLpzweJPJuLPjwzLRUgTrrKX3wNpaC3yU9Aj6vmPoZGss1",
  "key36": "3noJXiMXCgEGvqQ4n7mSs41GJ8p1gBv3Z9BX9VN7snMmCyhvpgncPnXkryTGeYw4UaDhXnYQ7c4xV4tTRh2BgTTN",
  "key37": "4Fj3sB4vXTw3GrSPBu6yaDUHmJ8H7HAu57EGbKsvrekduR6U51rsVyDwPPAfiUDGdUnY86p9mPv4KSdbuqGBE4WB",
  "key38": "4nFtqBLzg9cmRcaArAbF32mFqLKAAMhUev7VPxGLSgpAnAFYb5HiRQATLZJo5xxydr6jxV83YzDbmWtEzxr43xao",
  "key39": "5c35i955x4rnMaoMD6xKfuBdg7jeTJxi9XbCygYw1aqgfxuvAs1vhsiwwuGLSFWCaEtZ7D6TEAPN8o3YWmce2qwJ",
  "key40": "4CmMKuMwMN3AJP8HrUNLnbYXF7xoKGwz5WGo6MemJGeep9xwMixT5RJQL5cgGH3pucvSps1LN6uaRdJCqHqtujHC",
  "key41": "5f3hHCebmY2HRgWt1Man74MA5G39o7JDjHosydsZovwsrTzE7kxz115YHExG2C2ArriWaVJrKE812ugXf5ESv4DC",
  "key42": "48geDvTzFr2iQUzMUuistSLYLfFaePxZnphXh7PrBKXQrxGCzJ1sd3kFecUPFRyyBypaBcGJbamJmohioPd1UQeR",
  "key43": "5qofLnUs2b2sJ1eTyfydXyfo8aAQVU5CvFS6AXyFAy9UXirCXw7DedH4EmNun2fGpzeeEEStMdM5Evrn4BXE9onT",
  "key44": "3wfn7UAvHbS2Ui5FPA2gYynwKTHXsDJdn4viZuuNTgQT3bpUTXiJcAht36UWoNSzTe4szCeYfJtAzcaa2bNCcRvJ",
  "key45": "3xXC4WhgsMn2d3KxqK2PRSfLr1XL1yw11ed5mnCPwhHQqTFA1QZkEe9M1KZfX16LUk898EPGWAxd3hn1uWeB3GAW"
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
