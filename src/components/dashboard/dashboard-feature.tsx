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
    "2tXE8TyLMXA77mt9FvvjiHPMZBjbBtDFfSnoEM4ikrr1GTAt1r7YJnhYeP8GvBVBG9RtHsjMY8qTDBi5s2PDX6yf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xBunwEGtexPTMsP3AC5jPZ9TKW1PBiR3xK27JwF771zMwqyj2TFfRPKGN7ZHqK3tCo9RmDM9YK82htmS8Z9eQcS",
  "key1": "5xYeUvx1i7EFxjoUabRfoFKu1i9VMaZfRkRAcURzhrKHinU2K81easn6iV7pP94dnDwS6gWrWBzGDKbQcyutGGWK",
  "key2": "5dxYXaQjKEniHQogNkrtkauG6KH1RC1ibzHY4pw3LS6gJCd3scpqi91SzMzNccc2p6nmiPQbRVaKMhHKYNGD8d1i",
  "key3": "4cEfnfof8xkMpkZbpFQsuxDHqK79a69WzCHyU8hVzMrzUxoG4rksuUWtSyNb9Jmr8qwUiaMrN3rJKDi7acVoSETh",
  "key4": "4EzWUf2JiYsoQEG6aYugfCumgzHbAVJorZwQFWW4BrnJorYnToguZoLUazGFj3FL2zRAMZTXfpfxsCvpdfXdAAoj",
  "key5": "5HgJAFQc1LQ9vSo2zzrvigp9FKgYSsSZFxr5S4LCsaxcQ3v6L2tjdEJbs7uDGu9H6wjKVMcMeraP1cpSNNhF8D9R",
  "key6": "5wmwWLUXnRYrJE8q7VGpBvRGGmAhiYt8osqnHPURH76EMzEzXt8gcWiuz9EDzXuMYVSnxhakM1cBy2cSzx7e2CB9",
  "key7": "4fXqiDyDmn8GmiRbSLbJwj89pv1rg5MH8yFeiukT5zPxA1zUWcRg9zkTfdCgxhT2XH1RsL7ATwjDkNaTVJvSTSmX",
  "key8": "4da6Mf8eZK2rw8uu9Hfp2HELmbafrQ7b1NrS6q6LoCW8fJEy4Y6xYxG6QTtpByWepf5EbnvkM3JoHKE6FLJucdtU",
  "key9": "4W3SJao3frnutqcgresp1KdxvPgVUZ4j7ezsjMy3sSHHSFPyuLPgLbtU8DW2uSZ7R4E8TP9nthEX9dEi2GDEk1kL",
  "key10": "58nqGVzy7TpodyiNzsLftRXhoJY7g3NL7FJaFHzGPwumaAKBf4Mcqi6FoiU2XJpYXagjxw6YUzCoxYboFXSyT7Zq",
  "key11": "5q4a8SoHm1kuKbx1i5EqXq9aSXgrsj5kGWxTt8in1YqMQq1eqgdLxVhmn1EYbeXSyQFX6C5vTzr6iZyEK2sq4EAi",
  "key12": "5eWERPk44dD8mgjwKpMaST7pV5HHKFP7nNWNRAWZNFVt5k5N9JoVcKws98WwKavEwU9D3WuXXGMjQvHgqnTwAn7k",
  "key13": "2k4Hh314oxxkJwCx9QLRN7xREvLEgYwQyEiymKQDjJFE6E1cFdNno3y1AB6uenyv7dwWi33QfjkeQDKmtd8k7NhN",
  "key14": "24hBjbrHK78w2aqeYGU1GWqhNLLxWZcw8PUSGqCCYjeWYggHtWWkpyhXaGWFvgevigTPSLfe2wVHWu62gFmwnvNj",
  "key15": "3QQC7zTLKDqxHb1NCnky9utgmPUkmKD5xMxffhhseVs8xJDNRifYKV4MBM1WpKUtiW1WZedgVK5sCQGPqh3AATb9",
  "key16": "2CGta1zsVni4tH7Ks53mvficZdqkSNohbikNWrZWAPhwPHPBquQ3Vc5WEtx2CQjqdYMH3dnFJNjj9B7oxP9kXyzr",
  "key17": "4kZnA5MpV5MEyu6LqVdCPBYAHsjueaMmYF7My2bC85XcCKT1xPKSEU52gGNsqmGjEc52DzMAw3W6SGva2AF6JL8p",
  "key18": "5puqUv1cx4RnUcygBjmiYhJcTNLxCYkqkcAzZe8R8Pj6rbPaE3au3oM7FvAkaYV8mb2ZpCkPocK7GV6bNXjuQNx1",
  "key19": "3FmCAe5uj97P7AxWW91q7j4qe1qHtMVPYdMxZ6LK6GT8y1C7YUTRDBQCjVD6hn1kRzwiBk7kpQTAqgPo3Hs7kpUM",
  "key20": "ueSdRrp8ipKkoMLufaRfjnZ8vk4gE5bRFZL8jBzhtGUGs4VopCP3tG46RRkj7CjHrHjMsahkRPDBj1ut961QnUf",
  "key21": "5RZKYMy9tipGdjQzyCh5HLbWcJKUHsnEU9c523JTnJGqfkwss8v8iVsjKdAkfrV8unQLt48UDq1ccGqXPo61djbC",
  "key22": "4WjcHEXTt6RKPCrvpnaEG3qQ6GE8dHAnuyP9xmohwtyjSjTtWZRjbrvfmkjASP2Pv4mTFEe7Ub6FNVfiJEoSpbkB",
  "key23": "ThuTCdT8NRyN4B2gp93cVebgjrdK7Cm8X143bw9nvbFo4FZBNcd5rHhKzDCtQoKDpdNZPJRpf17TjQzRHLpZjpe",
  "key24": "3auibKVYs3chimzp76vtmPtVYvTiKi81f5vS1pmcfzJQ7d8qCmzx5BBzaM7Zb1BzGSAHkkANQHaHgX8YTjrCHeZc",
  "key25": "5gDz6DqGSWdPUfj4MP9hTjsiQLUVDDmtNamn3cKDXKmppnhz2nBqUKrxHzFsSyPy5RQsmFVGvXZsj4oCXQynoJrN",
  "key26": "4zREAGgD1LZHoPwAfq59nM9XH9mhiVpNuvHkc8fg6wv9eTiLSDxXg6ZnFQPkky9cbmpfkp6yhRthsNKk4Pcn6JDr",
  "key27": "2vK5MJ5quixphYLXmQ4GVCVYisWc2YBawKKzdZvSPVoRxzX3pg5TjoJTp9Y1fczYU3kn5thTEta28TGEaH4d8dxp",
  "key28": "2NinJXHKGK6QNsRRRHenvyQbQ3bi3ri4dhVPGfJSPEw6vUCWRiGWgtkbx5kMxGHyiyuLdE1WTnmHCucy51y5gJp",
  "key29": "aVHEVu4tz6nVq7x1PWEpP6RbeZwE6ZTnPoZPbChgEmF6DWxiXfzXCaiz8S9rXvMLhWRzNo3DtnV1kcmTBVRou4E",
  "key30": "2mD4PMjrkiooiSeJb1UtE8nGmaya7c5AXWjEWBHzSrwvamAQ7WnF85hGUZQcbufojBXMGQVDDnyXG7JiuZQaf5Qi",
  "key31": "EpBP9DXzHBGGmXhFnNeeQQzPmgCpJaqVqVYWjAVVmrWA2KektcEs9jGxe2niAqwuv4DRZBDj3uRr222RUGivr4K",
  "key32": "2bEAF14oeHjVuB55zhFJ3cP57XkuHBUKTt31jiGTKBQY2H3gkbaFtK6qFfM181LjxZQr6EN45y97vchN3rSXVbL4",
  "key33": "4v7wKjNLPtBFPqYScW2NnT8SBwnwekw6Kmhoks2fHJeHkKMU8nKx4ZYr36zZsfdWHMY5NANgaX8AFcEvD9pzdpZ7",
  "key34": "5R1SywME3cNXBugZHYR7vQmjDUZqPnx7WTWUDG8JdNsJz9aF38vG5h5LzrfeN9nEk7xPHwN3wrsVVenuDKwVe1rV",
  "key35": "5X8jSBsMYdHirQX1jdt3ZHE6sBAciwkkP4qbJhBLgxivPevYZrACcSZ7fqgMuSPtBW7TYio5Mv65h2PjHuwLJ9at",
  "key36": "Z4iCqbQoAi4zhCZmpEUi4a1K8r8bAXKEjN8XWYRZnJ2KGfJMuM9csq2b9ZWBE5ijcApWaviWZD9qiFSV6TAZhZv",
  "key37": "2MLiVkDosXdpSvrJdsNYs1E73JtCcTn3zqzYAsCeFBNySmpKZ8tcYxxveGheAY1CQgqVMc88vtQrVvXk8dSjmLEQ",
  "key38": "5YVd8RYKTRubCWxpcZx28YDK3qynmDwEbpPFbiTVXseFTmM27C125A2XgUksw8oFhb33Aigz8Y5z39KZfj2BuDb6",
  "key39": "3S2QZ4Q57UDqtx6c6vqrZWnKf9fMY2CHKEPJFbDYvC4siF2h682cH8Civyvj3D2shtFS1kJVBkmxgmJXGjqRSS5A",
  "key40": "2xHdu3hRzW5VF7L8RCnBKQ7wPDXSjaEBHUvYPJrk8LRiCkvYon7qy4ZAtVLRyxDge2E9Gb5kipzf4Nn7FS2a5trv",
  "key41": "8DskD4mEfRtnkgT3hJSbAA7HiGrePBD5hH1NZFCqyzbzV8XXHEQefQhd4ppf6WzMoQZf5BMmk8guNqCWY5SFwqX",
  "key42": "3uc37eJgLXDprzzZApeYVwLoA1tcmeGqw7Yiu1DGhsaFK6BtWX9zbTE39XNXbBetPVu7dgadR55ts8goni68AzAk",
  "key43": "2xBcypo38MaLyuftcvryRpRhmbAusb4by4NKwhf2J68gUPKJF594yk7CiDeracLB7PoGrfBeqxpDHbHuEwLPDtaM",
  "key44": "3juoLNwZXTeMMSkmRCD6RqVTCxVBvpqQC7TteN4JG71Ajf8FndnotynEZ2tF744jB88AYLckMchRCvvkyu9dJg6U",
  "key45": "56ZkToVVjgT9jNpvcffXjcH2MESuCX7fFuFjT4S8mMsQCSpBtxrct7JyDQ7UiU7zanR1soXmyXpU1z3vUzSqRNXP",
  "key46": "FFc2P4xx5bUXqppgpSF1AquQK6H4xMx6gRVTygRa8uKrqrNrCGcFBPZCGMMe7TRxJKF5smfsN98xgxyRam3Eytj"
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
