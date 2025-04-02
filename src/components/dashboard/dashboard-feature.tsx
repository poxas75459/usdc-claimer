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
    "42MHTEtqW8p2oR2tiVB6k7iHs5P6wTNCv4DQZrbriNYZ2ub7AP1vWp1XBFrZHXP1RLnbedXDJUcqx39MpiQBMpAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ja8YMYgQtVzxYqwAKU9QeRRohwGC3eGZXPZzPrxLgz2KUxWyaP6sTnfNBdh61shLFy7rmFs67ptBbS7ZpyrV2YS",
  "key1": "44a414kpNVo2ePdCBztsBW4BsSaBapi3XD9ZjbBxyYPi22k3kti3rXv2Ty7KtY1a1FfVLYuz8AsGsV485Jq1rvsJ",
  "key2": "5JdCcVR6srnGHsQPxovMoJdQFH6cGXnMxMhAq5W3DfwkbHhSaCFj6qDapQ2Q7aM1KvcjxwMjVh45ioBCZAexHrEK",
  "key3": "2Y3TJjTeyiwzCsvzrkN9kPe3qjfN8n7MZ8krZ4dexZnHEoMoCFSUnPMh6hEYWu11mCmbZrfARafm2EjDRXJRqxG2",
  "key4": "2Mn1EyVvati6mAR7udBo8t8n5V5YeGukhoAQHEYkM93WGKzUGjFBctYmJizPs55CramAreHZjV5ugrsKp8zAVR7U",
  "key5": "qfhU6ocTkRMuJpZdJahyXVbUz7kBejTRpyE1PvCBenWvXrnykQLaiPZMgwJBLDcMu2uVhoKSMwAnnBCe1dhos7Q",
  "key6": "2fuTLpoyT3aKxwHRXkmgtojP8mzQ18Ub44yArS9ryUMnGqtp2x1E59fuSv3oFyFZSyvGg94kCYMurL4Pj5fApkj4",
  "key7": "4N3j75Dve9YREzM4rJTedEFUgKh3FBTwWASus7J2SZRHZWGp9P6AqEZVh2Ck8oF7TpDCDhtVfQ8GSQtM26XQM6uo",
  "key8": "4KvHXCHqpCnDwBjr25xqL4Q9CWzD3HbriASeRcQta5UCF5jrnCjz7uR3CZ7m9yWUU9tvc8JmueBiGjtuo5A2UMEm",
  "key9": "AesANMbTzguJuxDA1cMCVL6kJQ3W2QgZrXYjCioa1WyUdt8yDCET8FKVwLnN4vMSA15a84Af7wiNThggeDSG7U2",
  "key10": "5HZ9ANRQrE7JyRuuE6ogyfs3f85NszFfwjKDRATNaJYpDGNWNE4yqjSCqXVrHyrGDR2aVGfH7eJbDwpmw2LLNtd3",
  "key11": "2yt3t5sVoTt4GyyDti3yB91cHw83eLVwbCCzcUuFFsZh3uh6Q651EtP5a1pR5B2BxEiXPyKjcKkqEjdWQbbRoUkN",
  "key12": "3W88jNAoVaJVEcgmEMxvpzHDJgFhyCm5HojSMz2vAv3Reb7kjG87o4FMKur4KdKfus36ybrWQW6fzFaXvjgCYcdm",
  "key13": "2AfT6bFWMHHLnEYeqBKPAsrJqfC591vytsWoLELPeaHPrzX9unA8nZkoPg3frCwExLNk6e3bmCQN14Z7oDpGBLNu",
  "key14": "ppeoA5FHKCgBTPCYN61ia7Tv2r6XNNMQ7ty8BK7JBqzrwhdAnHUnW3mLMjWsJVT4N8XVCBPFU2MSmHqW65zsR2d",
  "key15": "4zdLYM1WfwaWRaMWRVD2t6E5f3yKtdHQecocqD2ickGwTAwS1hMwJy1EF2LyaDtBnZ2dW8qmmrvjbuRk5F2eVgJN",
  "key16": "48H5ejmB8ohZWVUN1dcgrxE4t3CQBTwzM8Bg5GaLAT7BeYMCWkd74LsyfpbBBYSBGpv8SGUgo7YTmNU9UJ33vZ2c",
  "key17": "2washov3xAT3qPLVDjtMorot6chZ7TZonUNTDBJZZP9VyU9tEVdJbnQ8yqJTtdLRXYGopSqhfrgHj6bg739dgmB3",
  "key18": "3SPjwv165dxJva8XbdzkWJHwgqc7EUPMUdDV3ZpmgYbry1wecZttzPFuncGs11eqVobTAPXb2oAELbNe9Fft59wg",
  "key19": "JnzCsYcbgbMncWhFuBoY69veiiztnjgoaa25YWwGeoM4TTKJjZViCW1tSx16qeeTUkSPr3xCdLc1BG2zasXYctB",
  "key20": "kAYPdrNa3zK4NZrGaFkThUCWtPff7ATpMKa9bNXTCkzkzT12cEjTfPRo6iKFUN76EoPbxnsuPkDYfhRD4LgxP6u",
  "key21": "3jBEJEiNiELgcv1yhZi92mxAoxLoMVJ2KYxY9TaKmA39KPWYVZ9iF6gFS747Mez7anEV3StqViEZBzrZqod7TmoX",
  "key22": "4ANfPm4pXYHf4oUHNogvME9LLx3U5M5Xuua8uc5XGYAG4P8rgzb43ZyBrA4UqXLMPtC1AFmqwY5bHDrwF7b4eq9o",
  "key23": "4QQLvCYx5GdyWt3YccuPnns5mt5jKj7uLPgaUDWkkApTPjQKqiK1tJhARSzmvji4fr8ydbSWUVe6W7F8VSeh7uMD",
  "key24": "2DebqiXQRWK1kP8BNqenDDot3w3cGJMhAjREtVAeuwopfA89AThU1p4mBDLyvTaR6a6rq8uZyhokL3zupHnPjNNr",
  "key25": "4AMFbmFN6WNC249Q3qrrF8UuXePJYGjAnhdFU5ke7ZJyX74k8Z8cvaGGtwmeKuVWXU67wEBH6HAP29ewsaVpYwNY",
  "key26": "3TXqwMqAqNnQG9ExzxMbk5YfU3HWco1REaMFKxizsdsRPHaNzV3ZDgkagKpfBaEUo9sLQkesEPdWkBqRYnK28hzf",
  "key27": "4quaMwWAC7U2yxHEogRoCBGP6Rp2RxGa9yy6ND5vdus8R4oWLp1hLHPM5Z9pTbnZX3HF5nz14xmAspkpgjPgGW2Q",
  "key28": "5QGSk8sZt9VMQfHnV2qEYATQxtjmciThMXm3gCKDWUzJM5Uznvi1A7knaSxhEE4PcN6oDGCJEc1gAGKqnah5xvT5",
  "key29": "4D6ecuCSq1rdBdWduJC13YFy29mesCXDs95LgbLVwdV94irJG1LAHRjjfvCvL2yMeZjJnUeftcxK9stQGchekXw7",
  "key30": "pA1565WMkmVP5sPghafyHPoswrzz8kBXWENdyH9eu5gcgQUWsa7Av7CTzrq9VrkPJJ6pswK7zcaNa9QzVgTqan4",
  "key31": "2c1pWowaoRQ2RhFjqSEmqKeCAGUGmk3qRxCefuFnaZtrFEzdhGvEZj1KDaH5TfyYBeX34HLaR4FWyDcR8WBdAALe"
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
