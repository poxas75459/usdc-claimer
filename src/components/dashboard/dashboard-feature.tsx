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
    "fo3rpuv2tS6m9ngzQkjfffUXdJzgYLyi8aup4JuofKTyaDD1AZ3k3Qm1mVnqMaUmGkHJmE5DteG8Wwj8gWjVLeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6zn4KzRXvB4skeauxn2erqx9eWJq9JZrTHrhqTZtjkky2z7P9cjPnUiUVsHLWAcQuy42P9BorMVaE1w1hWgDjB5",
  "key1": "3m4wsB7EdcTehoBApK4Zu5KsNsDNzaNnKn2x5aemKaBqAxpwr8EsPRdbEBdsd2Vut9Bhjb6gmnPLhFbw7qYCySBF",
  "key2": "5hMUpgrDuhf5zRveXNmuSJ685VEoc5dQW4S3YFd72kdU8kvU7wPqCiuqLKbW59bGungUxRAmK5D9mQEmJ6z38F9D",
  "key3": "354PCvCLUvruvwHkLKNdu8kjzT3WcmQoK9fN76ASEdkS5SBM7Zyd7EsoLcowWqSBaexLYPqGRFwsH89aoUMifATc",
  "key4": "66HibjeUqTaRMrKMmdZnu7ZgqnvnrMaNLGoQUAkmSJrHcPUuFYc8jn5JcGjxvuG5izS11aVxTZBrYAxqWSLkZ4cV",
  "key5": "r6UKMmFFQ6dV8FM9Fxssgyazg6GoZg9ffR3rzBDX1uniYv761hWjVHAkhCGTh5DoWN8Mf3EP2Lihi578J2EyTpt",
  "key6": "5AAAYyS8ZcVa62T3bETySe25pjZVZ4BeWrKyvepTbrUtkqpdPe22aKNYiQa5cFopFZ7YfGgbWe33AAQK93oVStiu",
  "key7": "5GEtSQPHwiPuJouAa2bBJdRsqzc2PyddLCadgJTpeAE4A78RKXi191wRHoeXvSctmqVcncKjaAGpp4etKza1zjDL",
  "key8": "5jzieaHiFJc4cSfzSVRmpzK7ZfFoARY44mqu8MJ75wKZWHVuv689ju7hB4qeDSESp9sU1yNPpRRFLzcyZ1BfDwrq",
  "key9": "4X6ZYvVL4wB2D5wNKxBm3YJfrAQhxfWwdwnCWtbY3LnmXRPpbg7Z92JuLwkpG2Ug5L8dbBwEjGgb6E8BSgUnnH33",
  "key10": "5nepNKpAA7T62yGqfwC7D7NFyx1DnJQTbwzmnnnYrB78CjyPiLai3s9P4ojZ6NrvwgbrsBCbcS8e67qrntE6Y2GW",
  "key11": "5LPzzLUdnAfqGBCpoFZtBZ1xJKrChXuqypUrwcrTBJ1rMNmWK28yVQW9TTfW37rwHWpwtUTHKjpL66N71MC8UfHW",
  "key12": "2GEpDPcUqxbmTCxNEYMjo1XTPYkkwwvL6aiptxpZuuNTWH57vQ7NQQ7MTRT4ttG9MVe7ZBue3MD9WFrpf7BAnK4E",
  "key13": "4aWE6Lx9WUu6GCoLc8gNErLVXt4fA99HKmvfcHxEmMZAHecHVrWRqqDbWVLSK5BEr5VsCvUS7ki2VSHMhn4fDYNd",
  "key14": "45wfQje3GFFSooQtXqS3HEAzT4gF5tqv9XxQgLoV2HHLgqNi6asURWBRuPPGdSbiPGgrxR8zuyrtcN7sXauaqBbN",
  "key15": "2ZkEKxDfCbHu9pbHaY6WUsVK29V6gE48ED3rSzhZVVX2DJrShhYzmUG4Ee1Yo5JnkbPUZ3to3Fz42ePH5m1RU4Dg",
  "key16": "7UPwSuyp7UJVDpErc9bKQzbYM7BfNX8MxMXkbKR5mqqhYPfzdZoRnmRDfGQxXrZWUntXSaoLoTRePtpugtg6Qmr",
  "key17": "4HPnqdxxNZmYQMLWcK6zGABk9TCT5PSgfapBCh3hVnWcWdB4ezrQacR3fLfpPQzTUxpFt3VvXXD7upEAMdaHxwtF",
  "key18": "3NLc4u8gW2aL6Z7Xt91yNSDfTUSM7c37V73iykDsevGqtuAnNnzWk58W4B5NSjRhr537YVyTzWEWpv5SBR1qophT",
  "key19": "2fHUSXkow6iJtLfty2PLVt7tB3VVwUqTTbAxwjsdr6Xyd6AurxTX9eyyr4Wm51yPNB5pSauc8goDxAVw4TLfzyA4",
  "key20": "5keFQpdHiBcTdgiovcin13yZQiKXgPouiZaiSrgWGvmvUx7VzMirxTmuLivsnHRJe86uJG9E9TbacCYk2TtA8fXn",
  "key21": "593oB7zQXE3GWiAMaw6WQr7rS7jhAM1UkW4yc5tpHw38xRJ7smyztL5UKUvkx1roJGHrcfdiNibzZx87npe5eBtX",
  "key22": "5vNw3pUTEJpsY7VKwrfKW1yA75fFkP2NjhqtJjyzdgLVHFTwF87aP9751mKEsq87mAHEysvCxez6MXybpjGsF4Ch",
  "key23": "2UAdnuEpfovSXwGwq8PDqu2cbaG6RK9R5cyXCoD6mkyRJ5mL7TkDFQVAWcz973BuDPKRPvjZhohUayiB3G3Gc8tS",
  "key24": "67TfhhCKEvbSMmkrV3jtncuWEBfiojhBip8mkymGPMh4WHYmXWPbSgXdME6gtPDKwq36xUFGdxd7ghvkti194Cfz",
  "key25": "5mdUntR7ESWVakLiMk1s2Dcy5nVWtTTT237jk6rSr9oicC5q9AfpSjWJFvJaYwjxtwbaXdmAv2PmXoRMyAzmmGzK",
  "key26": "53xe4LziM1VEoTCW3ew7DN6UuTtLNYoFTTETVypaLSqdZm7anVL8ueLoPDnPuVhW21JDeEZ4HXjSSVgxjZGUSSr6",
  "key27": "sQX9Cpypr4SoGtaRdVTEx4NxJ9ks4nbXFSof56WXSNX5QRZUJ2NMwPJ3xWY7KcTwsbHSFyLA3SiwjxSKM8mZ5tY",
  "key28": "3C4xc2hCVkaY1Qujuir1pP3LiHBdTNGpxToSgDLLJp6v8iSFNiT6pNGV6yjhw8s4MF27Y67xHKDTkw6fKqtVCh29",
  "key29": "NXYGXepHUMAnR6d8XV7VzcXmtWDadjxmXJfRG3cjiVKKQBD7Pnvpb7RtcURRBNo1KwPqHjsBZrcaCtnXhkEBemo",
  "key30": "4pLC5zfobrAUEBPxtF6KVnH7pEcoTCGi6NNHfTYNYjaBEhCepMZd6eTSNiKrdu6VBRTMK5piJKmafYxN4zLyP8AS",
  "key31": "EbhuY4gYcuM59BJbugHLSFm6tchMMEdZ8wwcYh6GS9iXwkkwXVHszywiizzgim79XrqZSbtyFQKjjz9ZdHCtrUb",
  "key32": "5wrj26EL4y6SG3NzYEV6dvhuCr3QeC4c1vpmFgoeVF6VGq8hwKgH5Na1VCRHCdgjX3pR3rHhF1oyKX3mCfyXEbwy",
  "key33": "2F7UWAxwS2YFSdkm3X4EpqgNvL2Ub3X8psXZwtTJWXp4n1mpzkU1VA44ZNyqDiCrkZefdsYccmvDbJXBu1B4bNSb",
  "key34": "v1nNRJmPvwT3EDek6W1VoXmSE1CVUgexpfuEaHcUkoBiafN6c37zA1VU5khs3MHnaGXiH5b5acL2EnFrav4aKFF",
  "key35": "56pWeQuedYaKbSP4Suce1BdaLHMHeHZ2s2qD31SaGkgYr9KcHUvDgBv8NWpsnysekY9bKDWTXausvLibkMskPCwc",
  "key36": "ZiRAmBqrYQtDxKYYhrmdPvyg4w7ukVkdfFwWjPAWcu6HbNVmJbSzrjGaMMsTx7mKRMPLaAgRDq78Qrt93ZQYf2X",
  "key37": "5xh7ucdjg3VmWWCto7tpZSipijbbEF7oiYKMffyp3wMB9pGCJmRbpY2QmkoZQr4NEiMQToeoVBSGUjT4Eck2FpCF",
  "key38": "5BCALvQh63uxGsj67zarUjAAbbraB5WsNKX1tPYFeNMDr7kkpV7ThtvZB9yedS8U6paHSCbtmAiBt7H1Yh4Y1nrP"
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
