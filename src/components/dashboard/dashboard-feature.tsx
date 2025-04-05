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
    "nqMVifDP5z8BBAHDUgiGwmHznmcKD2E983P5HaZzFdYtWAPpFojs1qbU4ba2h1w9hTbybQis4dF3tt1KKbWX8n3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQfGGDPb4oEgUGxdTEqY9de7XZ9vQMzVdggxzE6voSuMSyM8E2dRdqGn1QJt84KFHkx1VvFbo2yeGPG3h3Wjw4T",
  "key1": "4xHeMH2yfd8aB1NkFV3xMUvgsQ8ViGE9yLjZpymJrjt9GVeV37ZCaBL7aQSq8Bhjs9EzJw2devmv5iuSVFMhLfGq",
  "key2": "5BzcvhvTsgbdBoPMqrL7qagKTeVm8akqk4CoeLmGWYqz1GURkrkvnwpTrKY4CqvC5orSCicDHStjRwsFDKbfRqzh",
  "key3": "5rpKZNQw6i3VLA8SRVXG7rkcVQU1gqoHPmXBxv5db75TxhBpiuj6TKXH4GvidZbNUnJvFnMWzhJssvmxAmA9m4n3",
  "key4": "3ZRQbhanioAZxvXAnDH6oJWF4Dwf6mNYxDRK428YavytEa5RDxJVoryr5k7pgp3P31CADH3NTYH2VmC2WqvqpPts",
  "key5": "4WuKXC5r5RSarGtcWmFftvYsxpP2YUv4EvyDx1Y8dKvV6XhSQMLoB2RUtqEiaDu5qJLmvkSD89ZiZPhdFBzX4S7A",
  "key6": "4uQW9T51wkP1K3ubpJmFP8eGn6Zh88z5jpRSR9ZYN8Z8JRxWDgnZD2uxFiPgdagou5HdAzfiGRW7pESMUAeKTCSr",
  "key7": "3PUcye7CooSMoSQS6CuaKLR6KbRMkdLUSWzytPz6M64vRqcyuaxZnDUuSmCyKGUnQZRLMFv3BrSSSnqA4vPuePSb",
  "key8": "3wMFzHRMHuA7We2uKgnpMvZ6nx14v5iqJk5WZNoJaWPuygNtfzt7n2UhMjz6joWvedNmB6MPDRReeqyZbncDFhef",
  "key9": "34QPyVG3nyswhhtia6PEBAqToBMrUJrH8TFDU3ayjWCwRJZH2m2b8dCZRPy6ieAtiRs8tWEYmWowTa9vjDSSq7YB",
  "key10": "4FMC8adjHVK1kh6koeyK4SSdCpoGo6mFNNDkzez3YF1HhWLxsxctqdRtotxDG6SzW61BGcjNHzafXc1Qg23bVWGv",
  "key11": "2tmLbCuQUmhhqdDL9chTa9KMqdvJTfHLxioy7HPFjCojHapG2CLTpzURPtGDtA2wWiQjyHnCq53nsZjxLMwNngs4",
  "key12": "49NaagghM1BpPddJ2d2UNqYEMFF1RuLEdTkiRFsKHkTdQwfCMq3TtM6eehwoxWBepedzUt5kFAbg6aDjPWjk4t6",
  "key13": "oN3vxP1LRGpTiYs6y43izTDhhDdMTFAmYdfJaDzj1JnfQrFKiJ94yk5fhHMiSkCcUiYwd6vnTFEmmP6dD1xb7FW",
  "key14": "2ngGDcPDVKU4TtNF8PVf3pfyMCEGXQQ8RpZdEF2gXtpvEGUZrkHvfLE1b8Q3rcET6oD3sYfY3ZBV98hQkBE9Mxmw",
  "key15": "4Lm752NNoWTxdL7nwp8r2JsVHzzw5QTnRsXBy5SXdWhz58fp77mjRjy1q4MejZnpSHKgoW1qT7DCbqq1fs32sAJY",
  "key16": "3WEiAQNQRNtkJg1Sq4w4bBeJEs5D7DLtznXtS7AzVqHH9TovE7nn9LtF235BqiDmrcVN8Zo6HNtrxRDWibWKFZqr",
  "key17": "4WvtMH5zcPp5R8TCc3QLzqDWFf1Sz46r71JrCuTywgTVkpPfw513PoYizEHMwnS3FZzyqG4wnY37S5mGDBbVCAwA",
  "key18": "4Q34vo7sJSoMjiAMNAnmLpPAzgbi46HZ5DKteqAkfBGPTaok5aa78hRgbmnLthuSKuZnaXLEQ8RD7dV6wxz4aFSW",
  "key19": "2X3JW76uAeybNYNUjBC22ox5gX6cRbg5kUuXcuthmM85BmEhaAQUKoLjQhzJeW7qoy8WmjNvjaTcvkhsZyn6gFzi",
  "key20": "4TFs5UMmc1CbUHQDQhyVWSQRpo6pmKTCxqCW3kt8cjnHtmcg3U3VjcgksSC8z5CGLS7mNiGF7DB3gAZqSM5wHBSC",
  "key21": "59CQd3VHQVyXrhBWKkf5rndZgXBixK3Yij9PRvnjX5UysyrASW8ZWvXMWYmoHN2VseDTvmvMA1oCmk93ovpqfN6w",
  "key22": "3hH8CzB4jVmwU7cEUk1qhWY2JAHWJGrd5jhw54uyKMPSm5b1EEhf2kHMSRgfBFPMZxHHmzgoZcEnPPfcenMBRDqk",
  "key23": "4FaeK1dyRVWyZvFMNMH3JdqmvKcjpFptuEpcWSusDBDcPvH3Rcv5tZTsMcXhuCEGQKt9omysiMD32FmrBzJAbvwM",
  "key24": "4jwgmNgGVgKukg8ViyHxGGpanGseYTKwZiZPCVnwVRx8F3tKyj88k5n2mKGw5NbmZyqHe13W6buGj6w5JhYxLXUL",
  "key25": "5cv8NPP5PDWDPAFTsACLeHmH5nQAbAFX9YZ1p5n71p6rgafnSu2WKFnHYv793U9UQ35jDtF6ba8CpqE4CVgpqAk",
  "key26": "3kZ4s5Qsmdghit3X57sr8e7og95ScmNTbSJMyZD5M7VpX7KgEgkMVQ2mTiVHefgsXxjybMdpaFBPNJnKMNz2Xupv",
  "key27": "ZamA8NV3wPdYhhf7QVNENqdzxbkZ5Z5UFGh4QZu7jfeZAahhaeGisTEHEmTWgdNzoqDGRmiL5Kprnuh5GAwp8in",
  "key28": "5itro17bgagADj8eHSqf6NM2GqxzoQszh8Fo3NFkkxSpYQLgknMyBVEUAoFDbAFMqiSP5W3tDnHz2Su4FqGgstzS",
  "key29": "QBX5BHp63WcmG3Z5S5uPfYC3KxDci5w26ut4smA5Dxg7KdQu3MHKVEA2uTsSc9FxccVNEym6n37tgTzZccy9wd5",
  "key30": "5KaGRCvb5SBupRMwckn5c9CrbLYfRXPmYYQeT9iGz8AJjvgLrUSTKtaaf6PAu8e1RPwySSbuP8wwe4zqg8hqQxkc",
  "key31": "KHvC5LmqjvhxX225gj5cPd8u8BcueAZAAACPnRZ9vPTruomH72xCRLhTSVMCdUSpzgRkEn7zeLBzULD2vmYLnTp",
  "key32": "PNr1ASQ2YkKtXXagJ8WrKdPpPDk7oBNomfVV1LA4vh1UoG49p2PtUXnGZRdA5eVu51B4GsFZkqSnykgo8Fmp9Sk",
  "key33": "2PkHvtWtR7J1uNC94LW4on6Hbw4YNrcpBCyjnh5CqVQAMyiAnwZreTGVwDdupFuyJcaUPNoauPJAwFKEjqt3c9dt"
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
