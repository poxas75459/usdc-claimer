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
    "5y4a5ZkT7QymcDiziWGXoHbQ2xVv4j2dpcHjeVMwUWs5HoTfXzMUahtirhuFr7jAchRDypJct6LYbN7yVxf8jspd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44fqEACJQbQGm5XTKrDtpU3nSNCWZtveNyhLpWb7NJTTnWQwQhEBezuCHxuGgbfjqkt1n6R4hxxvQNnETVPGxbjP",
  "key1": "64oHnUEBeSLhV9RBJm1ahd4GtkSVSxY7R7mszJriKPWDW6hTLPFJXABNS95cWNpMzkCtME3SfNojMStyb3MK4v8J",
  "key2": "5GdAuSfo46KWyPFq2yFbHZJbK7KrjnmiVYXqefwc2ekuKiWFx627PaWHwrtBW68B4SQawkKjNsrAaSiGcEziRz3p",
  "key3": "3NzKKWVMdaQffeDbtUsLPaLDafkZMS7uGsEMeTrNbS5MrtH3NhnwLatsP6zvDd9QDYzyRfKj5a6YXdtxgnGWySpt",
  "key4": "5iGgdsZgKgFGsirAL6cS55M9hvxTTKHS2968osEFUnZF9819c27Zh2yZpnoYXWX3U6LhkbyEdXaFDd4mN5f4gS9s",
  "key5": "WhnMrNYhEbhJz5bXjscY41RjgLyWLsPwMKvwhPsx8JJbN4LhdHjqFEf4J4uUFD6qYfB8amiaTsaECxPvEUYhg28",
  "key6": "337dnqBrJLJXnutYjB5vCMDXoWNVso8uqAmC2ma5aH19EAkq2F3G2jCSRjmsDy28EgHfYLHo1iLEm8X7QYVH7Dn1",
  "key7": "3R1yMySfroj8sL2ErfSjFPuHud13Cre8DEULbbmFrmLfbR7y6TzzdWPKxDdkoM1bBfpgMtdmV4ahUEzGaF8nvzPP",
  "key8": "3RwjfetfjiGPwqvpFxb6VYasFtAyC9F5qrL9Zp5Jp4SCZKqDJnMDfz9QnyiCFjuKuScbcihvKKVd1ueWoqsApVDt",
  "key9": "XwcjJ9t5Vj7e56UpKTootdNoGQuNvXBE49o2AdHpwfxbdZthqLn26FCDyhwMSMvjfBxknXDaRXaGXVjkdqUQgLW",
  "key10": "4FkTTbzp1b1KitfxjxJ8mwz8SS3FRjo7YhwPTLe5sWzsvpohx7mnkiZ1ZAMRePnkSiDfXNozYHdXeia3aFDe8zTu",
  "key11": "5oyQPDeNCA7mcTnU32sZFgsp8wBfG6UGUHFY4hTU1UBcf1CP8GBsvE68doANLifTJc1ohjbXoS68Za3Lurt662vN",
  "key12": "3Q4hHPA2EXhS4SA8hjjedKm1MCMp3NTvXGX9H9dYquy4s9vnuUga2EEVnpXVXAPZGfsdRi8Dy2UaPuewhsgJWWbE",
  "key13": "M5wEeuv7eGgBWP4ycFDL3MQrkcEBfVbaKwCSTgW8qtcNHxenDosnZo8JuBG846EgvQmdLsMJAxku76Z1zH1GNF6",
  "key14": "4CoX5yLLw9F97CRmQ9YcnugVqyPCEEmacXCHtP59NCx9wsX5krbP8dkTyBL7xV8t7rFayixa58wgBbUprfF4oiLx",
  "key15": "2AThjBNrXfawVP87NM7kChwHqwwB1sFDDPjdiU2P232KMv7VKJRGWRpgJ36QJwPLBEoxbmhG1ECBxCjSEm2nSv8z",
  "key16": "54DDRaTHvDzJrwfgrsy7hgDrkwvowUxUt6c3At3HL9C6fQRrGkHHksJGzchkYELXMEJyeuoCiL9dJUwiFGSVuXRp",
  "key17": "3eQ3hPT1A78x9Jj6FPA3FQKHC7TivFyvYNCXkcbMcc8k33F3AEbsAocYyedJQkbFCpRdBmPWzuGVT2W3Fv6j6ktp",
  "key18": "5dVA9fbGjY8PzjgEsR5YcT8zbZhyGF5JvgwzjARseFS8YLGHBFjz2Tt6AXsKzZP1cqwpf5KjpSLmd1aN8hCfa7nz",
  "key19": "3JhTCPYqhwDgASXVAEZZf1M935XXmuZj3xVz3u9SsE3DG2rfhoqx8i3PHBmPqPmBEUytrBPUiCVAFJgGujCZJTuP",
  "key20": "3a2pZarUJneqxx87Z7qgq6DJWFaB2hDi1sn3Kve2o8v3HUYR4r2hiJ2Qr4sGPjAs2mvFBiFukG461kGFZuLrCcS3",
  "key21": "22X1sQeC6yeAvc5yNfmi2uW4Mxd8mBAmZ5VoAac5Cejid9fRQFECaVGC9gbXnv6PXGe3JGq1oaCsqhny4Zg8aDyp",
  "key22": "3tmJPMUdfAUV2bFKNpbNHouqa1kH2A6a5C1RL4CuQRn6j8sMTapGU4xCC1KMme2qg2h7pu6an7EMdUpDFiD9iRih",
  "key23": "49ueTa6epwfzj9VWnVX1g4uxL9Xrt4ZCU8meEfSmaWyNQG2jSG7C3rKikXSS5h2te2NiPLRi6EXJUFdUE6M2zzLi",
  "key24": "39ra9shfrmyGyuVeJpToKHTQtu52rTu6kAvGj9uEeVr8LQKaDitGdG9QAJrFdXEBuYLQUG7V46dVN8cHktpCbR84",
  "key25": "2j2LckMmnz7bahLWTiakR15sfrtqNPaF5zebe87aQyYbQrJvWQJX3LrFx2Wguhu4BGCHNax2Mya2ktxvKUHe7c6G",
  "key26": "5kQFDsYv6v9Wgz3yEZ2vudCtqiVWfLTrDUBhDhapQwJsQwd2wCoWuNScVVrhtDpmqyBziHBjU7XSAmRQU6hQQaD3",
  "key27": "pT34CUnin4367syKYShByhriNmy58cVTJik5yTG6bt22gNXYGDAgd2FisgVWMGeVyVhLcieVCf3iEG2Q68LDuhQ",
  "key28": "51ZrN3MA1BQnNbdK18AAhPwE3DHUMGyvptWViSD9eqSyaRoeaMmWAsKEw1nbQHx34UCCAR8p6DaiqCzF2yKGAbVE",
  "key29": "63fmmuCy8dDwyEEB5vqg51raKy4Nftq2VutkcvH5bVnewGnS6KcaLYpv4xUihcWDcpX1mU53ijSH9PvCuVLyoUq3",
  "key30": "2sEzb1tWTXoG32kmn5EVM6aJ487aV8AmWXbGC2sELvudLkgkqLES9y2NVWBUjnauFh9quMYn35iM3mVm7sGVa7qo",
  "key31": "4tpdrvCE3sknwA5orgd1UB4r3WmvDE5miU9A2QC7emZKz6Y6kibxrBgfMx4k1Y6j9gJkTQdNffmdLwxSMTvm3Whr",
  "key32": "39sVSXU3ih4b5jF5k39zhwHyik5c8B3mEoRWenrdnk7BcXsegDGXmsXffvMUm7i22yV2JYhUMd7suBs16U3uTV6j",
  "key33": "3eHTwrJSmZNLZZQYQDVSAbFM7xanoXF2pgNrTD4EeAzrKsvUeo9RKZwyujBtyEnMLzVKDsW2qNVwTAnb3AhoDmkx",
  "key34": "22eQxRjNPKWrtF9Nwr5B87KyyYt21XRLCi1bjRRmfpL1Nae6NsGpjMQiUVgZJbVcYMqhaG6VWxahGu6ku5WtrWkQ",
  "key35": "5H5hAsikjoJ461XeriL8YdmGUFyZUz7euxTkrUfwsxeJBx1q1C34M8VDwYbpkG4wfaVAGxLZBffvP1QsXxhzDWEL",
  "key36": "3e37iZ1nbpcmMw72tje3DT1Un1YEMBz92qsbdgWLV9dkA8jnefgKAwVz9Gdm6nuic4jDX4wZouTVsRnaNW3W9bWs",
  "key37": "4pdnwVMrTEq2mgwdJueuzaX3AbSg7ALEXajwQs9iQWV3X1aEg1pRBW91Mb3QSXERhKrdEDQzPQqTr2dVMYPC3G3v",
  "key38": "Mw3m5oGevUT75YtNfcLbkW3nRPyvKvHbMDJXJiQZS9TErpTLeaMUFkintHrZ8y24v6Verv46b2hKnqA1h8dreEw",
  "key39": "5GGjVUXsoi3n7EFGT7Cj5k5AkCzPozeSz57ihgBkSugT44AkSrdZnpXWmmqzzgzdev8M37QYJjs5McwVUWVPjGq3",
  "key40": "4yvzhZgt3ywZ4KjuRgvy98Z1xwkVyvafjwx8VGYUU5JporCWA8aAG8LGVFATYuzRB1VWgQqT3AksBUJZYtL3agUX",
  "key41": "ox9igzBt1fqbSy4AGfTexEiDSK3w7YvZKZa2V6Q3LECBj9KdxBNdeAPqA7y1KwkPWXG3R5cZWjPSaK8AcShVpan",
  "key42": "4akSPrLWL8XmdEfQiXv6FrSmzZz3Fx3KCyxoRCicNQb54xYqdb4jtgszBWkepRT7f2Zr8Em9yqRRAUQ5aFLvQHog",
  "key43": "gAnqQgzxFHZZik4WGYiBJoAeHMtmuZG92ok4mPS7HiDJfKBjEJWVT2Pw9pQSRJnUMWVFj398E4AkRuPiZuA4Xmg",
  "key44": "3r3h4yDowmq6VD3h34GSSMFNLL8cPY22kyg9fcQedzRgJW8BLfUUGdizsWMVbzT8kZ9wGvCn96Gcp27Wrbc2vjbH"
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
