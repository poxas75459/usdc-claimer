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
    "4R9rxa6XjrKqqMw4KMhZupHS8FRerM2gvEkN5MT7HiqNq5sYgHHZAJ53pDTQc22WjJWGAM3MuvYMBE9jdV77YBjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pd6aW8eK45BG8gwdR8ipskRuLtnvmrrh1Sp2VV2Zp3EN9CuDrRtEPVMZbJQ6a3A71qAWJA6bv3ZZN3oq1gMSkPJ",
  "key1": "i6bC3rNaGFVCDSNSYGJsDJvkLUgqd2VvyC4RfzuZfDxPSye1fwsBpodVgdJpXX7BDi1qLmuQjd7itAEiRezwfq4",
  "key2": "aYusV3VShZRKjYFHWZRbMdKM57jMHT5v9aKfmQnwxNHG4duQDqfPVnfNvcBjJ6M3xFEKhjtWmVesLh14wWj9mKT",
  "key3": "2TJycTkSpfpFuKyzxMLh3cK8MB9tqEZUg7rsrRbf1BHfbuXRW4x3YaQsVoAbjSeT4UD85eeyWURPqQWcAFu6aQeu",
  "key4": "4FbuEz7SxFjSeNDeGW7Y1793CUt9Q2acaQFRPHWgeZTk6zZ1BnS7RAaQsASiedqWEr2H3pZF3BaH2jWf45NXzByJ",
  "key5": "2LvrdJVNnMeJW4v5QWx9R1nDUfhaRSwDN2g6Yx3pi8e11zV3dKJNNv9gKTjpHLP9hdBRCfjpFbP77y9k2tPoqT2q",
  "key6": "4qBQNtrabW4UCn29o8wzPvizHgTWMbXWdocsUiBouu7X8EeoD59f2oNXvFNjseMSygm8ZQEJwGYsueXeFmRScJ83",
  "key7": "2b9pSmqCEGfjTxHnsGUMwiqkFxuRZmNvLD31kY3iJ5PFnSK4u3Z5kyRRov3zawpaP414VHexjAtPjL3rVnACpZaW",
  "key8": "4oC8ybxEmrcesp4DJqu3cVxphW2C1Cd67S14QFuiTvfBJSnLC3KYDPTkAC2MhBk51tmZwtrBS9e5VohAt4Au7Jfe",
  "key9": "3R5Nt6yENdDJXX77Ana7NFKEpP3BBsau2x8xcC3YN2sh6YV3apfT4MB1ALLoPR5sV3Q2Edhijc7FyGRmUqp7vKYL",
  "key10": "5phn7xjcyyRPB8QnbfQSKLrG1L9WAuvvFRUDuuBusp7eWasVRWqtwgV1kZEmMo5PfqUPF7nAJRjKFkn7JYwzW9XK",
  "key11": "57sZinJDpYXQn9T3uPFAN2H4zCUHsjgBaAausBaVHkH2Qr8sJtTkddU42hibvrcLUhWkWBe5yhEk5Sstv7RQZYr1",
  "key12": "434JoyGpSY8ZdszXUrVtK4uw7fsFpYGLEeY5f9PErPzfnuAqxrPGMShp6sWEDT9HN8fFrkdCaf1Lb188FM8XqLKo",
  "key13": "dFinhg9KQ8kd5wzKo1kBdbj7rHvwvVr3LSgm1L1MjL4Jmo3zuYSZNsuZD1Md6d1eBzwGS9ezfMgrzuRovLKVsDt",
  "key14": "qMEoLXgwnFVwr7gYVZ7a1xx2NA7mW2CqxdeDMtcNeYBcaWHjUTJM6sayycppucCkHNtFtxzxZbmREuyj3H9cUVJ",
  "key15": "5ijwBK8UtPjzNAwS8eMgvPh63Ro4z4n4fZvaz5DJZ7Ymrg9sM7GuJk4scMfAFenL9SD6eUMSLopJhdLSnokKjpVV",
  "key16": "3y4MtBSBh3sDXLNrUVYzYp36gATtREsx23oxaz1AvnPZe5TW6ndF81GxTz6uV9XjvtmzTsCqiFp99Pjg6jvddMpb",
  "key17": "2mkLb4s8sPKxUBegnU8kEkc7ckJM9rVS9rhTScaNW3b23tGcNs5RMyoC7JGTwZwUVwrU8H6YCTz9KCzDAjWrxpMD",
  "key18": "vsRDcD5iRuCBGyiS9aeX2ymCpuiVMv9TS21P6KePEEFmV63uGKQqTJWVop6XrVgBQT7x5pnR7MSure8kmKsDhNz",
  "key19": "668sxpLPttarbVywkHuZZtpjwS66yb2sUezTueYTR1yzDjXBEqZcxDst2WABL98t17ovgd4aX18EBFuebNyv2y27",
  "key20": "h5r91USRHrLJBPNJfw8ZPSpG9sDfJP9FHs5Zd9WuGFD7kRHnXZepeaKTkbtqnwaWDfH5rnbsEAvHfPoiaaDCaqX",
  "key21": "3ypymb2dHWHXvW3PbpAJ8A7gk9rYXg2EJAkMjJH65mQPQVhNLgRHkEFHh8dAoPiorf28S5LtGGFJaa1yMy4BrCoj",
  "key22": "63JJzHawGgiKVQyc9ZHSkwB8enR76KwFSjdHkoejuSCdJRhsc7pjKGX4cGfsaudUKVsZW7MFPLYYUomus9NrhgSr",
  "key23": "59Mbh16TubByvxiywmCKG3U6tL7LebPb69UPjSZGMxpHWg9RD8e8wKLDVUpDncwcghXGfapkjuRxHLVZLdYXnp7Q",
  "key24": "5e7mHdMV5mG23hkPdRqEYzYfTB9kGyptH8CGEz3YH5wzpQAxJg8tDmJyJzi2A3bdxV1ZM8ehv2XgbKSNr6vkvGuS",
  "key25": "4HgrAsvFN3A9hKQk8ZuKd93JheGTneTAJhrYRD91fhgCFNE3We9KG4C6SXVjxbZvJKFcMMDur9FXbngfyTusZzZS",
  "key26": "3zEkY9ZcJ3yHYR6GBuy9DFpqWF5uoDTvAgZ8ww2MkS68yjvrPa3PRVwHKfZGjoaPFxt9ZRT5niRxjVVGNTqjDk8J",
  "key27": "asjuZV6SgXs95chGykXZs3URCep6JVRBamWe8VQdLZjbkgt3D2fuNNbUopU86vqqqn5MTpd1pTN8bqWtdUpJshx",
  "key28": "ChrUdpqL4FrRWafTyL5q69V6qHzmZ5FDizfNkf6ENwXTDiH7DiGJQ8vWowBQ8NUWLM2pBCDryrV2FG7ZfNRAJXf",
  "key29": "UouK7ETRiGss4xPAsB5vwPjSAbp9BzwBDiMdvSKvL1dBvT4BKX9T43KbkwoAVfSsUcq4DP1Zm75JMGq7KyYcXxa",
  "key30": "3pJyvkg5R5p21rZYk3wWJXdPjgDvHhSk9c5BRcQg3tyL9UrK5q7ED89XG3NyMPDcfamM1S4ABAgF4rCG6ajZKbZD",
  "key31": "4cQKYaYtDXCovdTM9VpNW2HtdxWCTfsEhjudJWpWSNLPLRvCcgCR96GioimCMDspdui22eyShxS7zBkc1vv2ZtqA",
  "key32": "P4xc7D8jNEPmAAVkFXTCuU1vRAF7DgSAa3sU6KUzmzuhp2Pfwz7D8522kucxxZrdHejCxKXJtMWxnyWTX1xYJeF",
  "key33": "5ZV3EPMYhK8ZQ9ExqCC8QyXuaZaifRZ6uRy6CDKR91ZXQFdocB4BtRVnvZrygoMjTsSHDThp8pzCpapvDxc98QZs",
  "key34": "26P2Ghuu1fKWB6dFA223HAcY4XeTVue9czZwt9nC2fRJ4h9jYKL2M1PcGSvnjLGBjv3nsf3AhoUj9HNLCGofoKcW",
  "key35": "vA9AGjSF4g2HqgTGvU9GQFvGPi6bG1AH2E83ekgqTBsCgB7iphfAAKpkjWDuJosjP8eCcMp9kzobfFb3cXNfdxv",
  "key36": "3UtwZbtuQrXmuGkQpsqM34fPVku9rGkBhUAC8KzSc2rxWvpW6croj78KDCbfrYpVYMZhZYQVKvY7G4KRPKJdYYzM",
  "key37": "4PugN6xprfm4swtmGLqqwB5nUboYr3HrLgBRBpvjUwqL2Mpk238rvQay9VcNbU3wDgkbdmzXehSDBwDuwFjeMDC6",
  "key38": "5Br6BteBB1K6ACrekUFUqjWB9SpZgiWfhBBryvdihKKQSGRiZFeRuGWSYh3pqJbjePZRmMY3YHMKt8kyEeoXaUxK",
  "key39": "2QXDL6J2PVtgLF6NHrEFMCB39ULfFkvTvu6M8TXfsNCaSZzzYWhUkHb2HmaAFiYtwgMbgfemVoizR6VUYBLzCSbe",
  "key40": "5WN5UsQyfEsyrDZUcCMXCwiXL5PBxqbtu1zwsjZD2BdyoSajWFWyf1Vs2wQ4mRsFh8CPwNPMS26aoRtri4CVhUCJ",
  "key41": "4TSUxBmCPBKzgoNTNwpzXywfFQHistEuTjAqPr4Ld4LBJ4RbXkaR17qx74PUq8zenEwUv1qLJnKLVTjQqv8wTKyo",
  "key42": "5wnZaKCfRhUyjwLDZGd5eQ7qSuctQ5DoqNuRzqLGntGPD78Jq69yVyxifnRQSzzz5d53C6jPNzeYq8SGXGit3yuF",
  "key43": "BWB8jCY9eK7nt4G1k7dXo52AzDA6HFQQcg77KEBApr1hsPjaCkAUxYeTowRxuQTxo2VQBb9fuWLHkmdhBtYvrvM"
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
