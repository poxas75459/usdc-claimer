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
    "r4JskNTP9BZQZBFqHfibBtGHNsZiQjzodp5EUKLTsrTmAPKFePAUeJL1Hnbpnqqnd6aH48UaMDFSGSLbBUxJzZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25NxjsuaXxP787akiA51oK4HqYhNatuJQbekQR1CH2Ht6Adf8ER6s8y71kZKy2z38cPXavzPGfdhHnPm7yh7ZYkR",
  "key1": "3D7oet3U7ZXXUb8i5YWQVv7SbsRzKeoLra9yTxyyhUE4e4yWVxrzyPSLFS238KCfrf5cwwY55EeLH9a997LpHwrt",
  "key2": "1Mek5UW7eJt4wxHYem15XA7y1ZZ4o1q4bocaBU2uhuYcrE9hXCARWbtad9xvCgSAoMwPGRwR5QTLxdYvPKnAhDZ",
  "key3": "65VhK3Qjxk6CYF7Cnr8dZ9EJCAyD7mhbB1F761aVDJCbL4yfoZoWUyLBzzTAnJodh2JLAwpeXN22EhugsUuHRx3f",
  "key4": "5U9BAkZ13dkVp6HVhk3ofA2cwcsber5KEkHSGM1MHrj24mxVrbTM2CMxdoz7tpHRHJTD3b2dZRa7PqWguboQTBSE",
  "key5": "5wT481cbRaVVJ9S7EzZbJkmPiFfzNEGuHg8GWPo9yxrXDosdwYBn7x9vofZpbjNy8XmuuUxSfMzneDPvLktcawTE",
  "key6": "nsWuWL2zdeuXCmZLg4G7YDnr1audKVPGEGx8p4StbiuChKJ5FFkjPPbTygmhsRDJpF3tfGdJyUAMmWKRNQy6J1W",
  "key7": "57p9ti2QRJdkuwepDjDWw6RgPVrhNabyEBK5pYUxJKbLgSTo59HBRLwfQkDv2oPBc3FFJWXXc2uAAJKMwXrfFWTC",
  "key8": "2Rm3q19hkBxCrneawaaLAjeBrGw9qrg8k5yzSN8iKy2KaP3yRuPwwjxTBdrUnReaeTQif9vQZw9DNM3JLE12KXp3",
  "key9": "39WH37ghXWZmqx3nthc6CFm3aKwQqs1g1tWhepvCsDuwofzpzoMfKGKYREbhjrAB8C86kw2htH2SqWRHyVcJLQmh",
  "key10": "2E1aoBSApFgyn3aWzyEbjcSQkYgQF7dGwsHu51YAGXo3vfXuvEx4A5rENbBoXECNHgTq74qihv5W87rhTmBFfVi8",
  "key11": "21sMsr9pEYBDFKek9bnvHAxJt1ZqAQYLDQWqPLqW6HHQAqUayEFNg8CnPfmPrgqCx2gxXqPUFqk6Li2c6wkjncjv",
  "key12": "23Ck54nKfdj5MXUs98PZrFfqCHbVmGJYpp7whhLsY58MFomXUEDQrFtmxRioPKRxsoAj47vwGKgNRwbJgHoG6yiW",
  "key13": "5fnu3W8Y9kPuCdMmJHeqp1X5bGMmuU2xnHUC51hhB8sBjBV7w5pHpG1jNjsi6LRbbv4Jbh6e4q5p1U1jRfodjZ7J",
  "key14": "zGatSJqhhxV4BUtjTK5vf4dBqoQiPxSfYXa2N43Uyvngpx74k6gk1yNhkSdAuZmATJuBXwJXbSDaunr1EbVcCoz",
  "key15": "4jPLmqJN3MfA6N231SqVQWPqPJgxAPL1FajCjzccGk3kVR9FsDDYbjBNKav32qvUkvtuWeutbK9ENV5w3wKe7hiH",
  "key16": "5TfamKFBxzdjwehm4dYSdgDp4MVkqi7CkL2y8Wm5sQMV1gY2JGpKvoZKXCTbbxHZfMjPbw3PhMC6jG4WphPNkwEH",
  "key17": "3uuqYCqMtbGNVkpB1MhFEt53UJ4dk8H2nxUiCB3URW4kHECmsJMPwWS416ST4upNEhoiB8jmEPyHLRqpGyUH3fEY",
  "key18": "4YJQcN72S8mG4gJBi15gAa1Yo5GpKnLdYnHs1YkGfJ6YqvCdXiqh4YVxEHzk77XsXM8ounStaGbZDPjJcwEgkKXx",
  "key19": "2GGwTbUFmrutsLuhSDqo44DeMyLB4onTiA8G1G3fDDpYk8xYNF5CvinP33o7mWVnuNQ7kLwtUmxPE42vbWLUmJms",
  "key20": "JqUyhf8dicvYsupJk2HpFZYM96FLrjYjJPVR48MAJ38pY6cqPfvaKiStoeA7vqKQeedL65PdgVZWfdR3mreKXvS",
  "key21": "Ha1CkMYKKvMDdEwHmVuhxzYVTEi8Zojc7hZWooUhqScMTk29rDieqyjpy24GX7LoAqGoxpnjVbRZUjwX1DBVsDb",
  "key22": "5gKjLx7MW9ohgdnrFWn1Z9y9BT2TDobHSpNfMY1Kx71w8TmX5yTGbB44H6ru8LrWz14GYNPCTUsfpTj4kaircA2W",
  "key23": "5aQFomV3kFz4vkGxXurVkf1NDLG2AP342vDwXVm5KyAFsGBXnSxfdouUeNQwYCG5CKjW7hYs4QZsv8K46XcSCirW",
  "key24": "9BGML96DTfJnbC4nGNsgCTJjN1YdD4PkhGCVNVMemAXYN9NJLC3SYtTmuDr6keQASTQS8q3UpfR2ZhYdmpc24b5",
  "key25": "4MVwzMZV1jYmsxcwgyYDf3CXkr8fTP6hJqzMRsVDPCiVw985yuaGP5zK6Fq75QuDm666MEBU4C75C6wEqNYn9Baq",
  "key26": "MNCn4NehXwucPkRQMqZNsoU2k5sG8NfYHjoF8Fwp2rMTByKpVYeSCqDZyafKRtimh5abJJ8JLRoYq7abSGa5erZ",
  "key27": "4aCDcFyZ2UeytpvPDjtKSxCTA7tfJKn4rLqz8K42ZzK1ksMPmkcR6HAetm7A26rbMy6qntZg1RimKW6SHQG4Xh1f",
  "key28": "2KgxUvi41H8rxabTMdgoFheCA7Gr7B1Fh3ajPLheuF8EicQjQ7Qu39uTT8vKQ7dRbmMUAakQ89aKYfPeq9A1wLzH",
  "key29": "2TA2ULvZYnKofHfc77aybWwrtw12SUckPqJMhnkgLCTNHYrWAnyATHQwc8TWGkFwk56XXDoHDNDshi79iSymy1NP",
  "key30": "pa2DstuMx6FfXVzoG56fAD2rDNx1P6Qu1hbT1VaZhq5fBBiKS2ERL3UHwo3BMS5WY7UeNCLaYmx4NS4QHGF9dNf",
  "key31": "5azVujWdihUohVKNBmQAxgNAyhinqLcJc2vZTDix2xN9zBycyFZXvGErhA4BCw94epXvTneca14rPg6T8hxR2y7u",
  "key32": "5tCUhdNaxsJytE4EMmZGx4mv4PPk4p49k3UMzXpC4YiMWD3iFtGTZFFW2NUuEFk3FQQ6j75w8PYSX5ig4cRdmpEB",
  "key33": "5FgFkEZhEXVSrzTRExVigEz5ckXrsy1y8vxxrkut57N4imY6Azd2wgREZ7U52QVbpSUQhqVu7gEBUEDE16eMD2Cb",
  "key34": "4Q3XwZjPY2Zpwjm4DDyrQ5fuFRQaRuiv4wetzxEnvio6m1adBR3MdUP3cZzAWveA41waatTPEQP8fG8zigffWJqU"
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
