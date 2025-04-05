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
    "5jXsd6uB6MTGezC6T3c9zByg6y8yuRBSF4Wr7kEQv3fWvVuYKykj4d7T7ShJd4fLFNWzR1wckQE5QRhX3VCQZaY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37cCFNdB4YgHHvFg9bSdWGcesFkM1zfTd1NA99435TC2mdxyB7yAFyetqHtnXaCkbkSoUzsSW96wtiCG3Fgb6uP2",
  "key1": "rEtjoWrnobnTnz2XeZ8XCsotLU1DFRzWdRz6Daq1fcAGoHu9Vw9k4dg8Wgv8fTv5mBDXvthpbnYvXm3dy2jSbGY",
  "key2": "5xok4Ah1NEJuhAixQeWfs14VcTKXp6M1zRiMEq42cHacHYHxQ25W4bBpdNX6HXTyrRQt2FnaSVuVSf1nqyDiWyRo",
  "key3": "2gHYWtecBC47VWNjkufW3HVtDWkj6E9u3ABKZN2dZ4A6ayCBUdjKveWoxK7G94GwJgcdqWUVoAiALx3aro5uZN1U",
  "key4": "spLaqN9SdcVQFeDMaGyPMRozWhGbSyqqCboo7EG2ffprmq6BE8nmjSnaCTCaawVpPePGxzZtAu76UR8bSRuSDxZ",
  "key5": "3VGLe1Mgih9sLBnTmXomWc4rzQcb5tENQ1QPboBsksLxanASh5U4e1PFxeHCh3mUHzzaVruw7fWWQFoMH9SK6Lmy",
  "key6": "BumPJegarRAdWEFjp5BiEyxragzkyDcARpRouRWuR6nVxk3HsE9Lh6rtbCSAX9KKAP3aeDTSERDB82Mnsp1TUbu",
  "key7": "43wzY7oaKnjmH7pAt7kD2ftkin6w12a4heCfMp6FpLj6h1bigSjCM6Eh39Hj5ZpTrTMRobnsNyC4tBVNYdUWcT2z",
  "key8": "3wmddVWmaQPu9VGGYAb6jf4mtsPvCWuyT2t3VtZTLnSYnDgKaDsRrhHZ9WnJsRreScDnnTCRcGsD5j6nh1quupxS",
  "key9": "q5VW8tTZ4L7kNK8YN8K7HCLtCKJpd1AeFAkzrw6wDUxrDttoCLgFjWHnZbpJgHgf7J763FGgbw2872XmQbfLyef",
  "key10": "63hwYgarysknnuhhZFEvxzygC3a4v8xJMiJX6aPwZ4QbLKqtsbn6iyoSjsiX2ewXkR1dcwbV3z3ZZhNGYnjt3yGz",
  "key11": "s1bmBBXrAPy1FuTcr3Z4LNxSvpMed99P5fALnyaV1bkMa6yHyKRwDjtFvNAi9tYsBam4TwWM35yjfWtzpPuHvaW",
  "key12": "ZW14updpS2ioBqu8VripP3X96mXYABDbPQWSu6Xr4aMN9JKSr7yyhU67xKxYbzA9EZ3PBN4VffHrVDUDH3ssnY6",
  "key13": "2xfvnj9LMe3wh43cG8ucqjboermNQ2KkyVL73bLFxeas3RyQYA2Bu4ohSrEiNcEoceTjmdCxSemC3jfwjUXzMsCR",
  "key14": "3GBD25D3Cfg1FJTHK9dMG3meJptXvspbVDsgeU95f2M253AfCYwQJRDuEFKmuKNMeeNMtHvXFUwaMtTVyRoZbZ4P",
  "key15": "4tkeGKjKk2YjgiPGhhRGCvgfDWVdZaWGBu9ZiuERjHVEsF8svNxt6aRvsEYJS3TUDtaju423HmBuW96t9QPZPBCP",
  "key16": "4ZMpRWHMbfDNLKWUF1Bw9vwaQYYR7rQPN4ppFJJcPX2gBk9D7GK8tSEuJkq7WqwxYyc6tEgFymswxwBU87wwQmFp",
  "key17": "53KMPAkhqRJARJ6MKjpywjzGFqyHjjEVRH5bvm7v5NfSfE3LgkQW4WUBu3Qdf4T6B8jvKmQMNKTK7mvvjFQ8bPNT",
  "key18": "3h5N8eJXcatuEWNxx31c977xgbWx4AmGtVr3xeviFmD8YXNoVeEfshgJihETWaZgJM1jYbjWs2krRPWYYq4oYcYT",
  "key19": "LwwYQ6pAo6jxWwNt5t7ZJuab4HMchLccqtUEKHW4AyDETYAbrYDSaLXtHpB6x699Ldojb657DBMMCYKDgwyHTL1",
  "key20": "4oTWxjqiQBHBjek2EPomfL2k2oUEpb4v2saYWoHvXZJjUTWjz67hhFq3v4Xnk2qhjbvXs1fk5tKLKvor97Fb5TW9",
  "key21": "5hx3NBXoyBymm5Y8ChTVzpKcom2zeVhLQEZVC1efeb4EGq4BrcGccVQKt6NGJUdM8VBQDAqGAm93vMkJDU9nZUUc",
  "key22": "2nCnYqiWkquo7xGv45uEVcBUgx1oQ35g6YWHGhmuxC4DwQ5Hj9dDk3srkPkxAPJvSobPMHXdEuZjqAbojSrqmU4e",
  "key23": "Pm8HP8dWHXBN3Gepmjah5CSsGvQPqyvQowueWrqSzSn194CoM8s169rFX15DomcFUVg8QEg1e2azABqampJ38Pk",
  "key24": "5NMFR2T4LW2SmsYMfeTDWXQQwU78sWhmu4KwXVnP7FhccQweCXo1j1V1WasJSUUyGsRxZjVdMaSGTsDsa37UWy8w",
  "key25": "PRPyrz6f4czNC7cEW21c4vLc1G7epeQ8Bc9vY4dgwoBAt2g7svCLi3NVUUTugC2WWQtac9qosnqMjAcwjXk7DPy",
  "key26": "2H3qe8kk2UGKz3Jjo2BnMtDcNTHgSrYRd4ZBwVtWGstimPNi2vnvrbpbKydXwPxRTYFNoAPkHWhMH34s4AV4xScv",
  "key27": "4ny8FNbDBGS1SG1EiTE2ikSNvq1JQkxvfmzp8ojjswsr46atDSn8T63wAmH5ZvDnaFi5EwCw8Wo3J9gyp2rNpqr8",
  "key28": "2vWBTXHpwR2xxgAV9Dc8VGCPmyJENeNjzNMVV1FP7cB9cFBMgFjQdMAdHBHKjaEq3grtB9XuehpGVfChR4S3jykN",
  "key29": "38aPecu6iLgYD8b38JHwD6WkA3vFbjH7JFKAgaeQuHNQbcnvucFNBFtyxW5aa1KiPLtefGp6wQK1adZPDwwaja9R",
  "key30": "3GcxmAWFKJFB3kJvtWxZRb94Z9AP2EXTXiq75beHnQ7zaeDArRcTw64nJY5XYBJ7QNKc5S9W8MbzrBxUvBcqQ9H7",
  "key31": "iJ16PGwduCUKWr4YbcvohLjPkTo18SDRdptZ8C2BJhrZQUFRHVaPzpjDK79oeR9JXSvU7UpzMWC7RYX9zy9AZVx",
  "key32": "4bkHDHVXLdK3c52GyWY49BN4Jo9g2XhqiFcaUWCNeba6qjws6YG87Cpii34QzAn8gcnF5pCkyT3N2h5UNH3pW87f",
  "key33": "jzwSaNoP3CdA56fvucwJduRDvXMTuSzcVPWug44JMePyoQm7c7mpdjVzpp56nHT3SW6iRK4n4uy5Ys5KBmN4M1V",
  "key34": "CsocVDReFyyaT4UHi8CVGu6yQfPmvSDiakr11to8ebFQTTLg226vakk4KkoghqiJtSQbYgrasU1Z44XtZXHQzXu",
  "key35": "3tGnSP6h16d3XkLQZDhKrUVGTxa1e4jPBWseiYUr5jSVESVSkFCD96R1aVhfPSofiDpRx1AucsJgxa9Us3hhMi7d",
  "key36": "ujc5K4fzH7Vt7fixNaz2DNdRUggrye5GpC16YT2wimkVM5RGYfv9Kt1Wdakm81wXyGiH7En2oPn6dUxUCehLe3W",
  "key37": "2NVN4EjHnx4nZFt3N4qNJiD2ybz7fN97qUPxmJ2Fjngs1T11JTo9TGSAKQ2Bt74iG9c73JqJXcAA81QqHY2YkCV2",
  "key38": "3a6bMxzHuDHKpabpYJkw56SYyxRi9L9tFxNBgVyem3jzQHyA6139hsRjXxa9WQkStGs9T8TDrJtUnEzpkTXYsXJf",
  "key39": "2gzVsFbviSGX6mRwzkixzk7J2Nd3Csfp2n6ix8Nu1hGgpXi24bSJsNLZAirjFin3PRsi86igR5cvFdLMJMjVaxQ6",
  "key40": "5fRW6gQ8GWdB1sXZ5gozyKT6pXgfza4kqQy34iHZ2e8fzEA4F93PmvU5j2xM7AgPRYswma8EMz9zxyij4yysn7LZ",
  "key41": "5WhPk7YeXmph3jnzUSB96YvoeCsyr5qWU6o4tduPdvd8Tcwe6eoq4QWjJT6bDnwaPNDxUyUuRxvMcZa6uvGmcyNB"
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
