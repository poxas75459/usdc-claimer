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
    "3okLJyga52DmyWtsWhFM3PqxbHJFmjdf9wUWyRconDf5yqzKL65egwmtoSeKo5QEGD8Z6uePV68eGCz51rn9g1Dr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t9PBtynGG3c4hfnHdBW1uaiVNFubLEBHzVWNeT831hUU6K9MqasMnM4EivYn6bKEYiKaqBN2Gkj3VRPy7wonwVS",
  "key1": "5Ue3HJqBGrhnGfi17aHBcHawGoB7dXFvXxjypwkJsAqhxRhewo5sRj2DmWYVGghQ3RDs58GVMcUzgDEja2ZuWsAg",
  "key2": "XAft4swtUHQbpb4AwKBcUmBE4qpPpZMbqxNtAwyvqsXVFqYY1UbssRD2WFAkCGWa8RU6Rkh761ZCgwkm1xH4863",
  "key3": "2Jp61ogttoEPWSYGfTFJtthyVucTdsCMsF1BEUCXUuvQx5f97QpjjimPyoLhZMry8MUX6LNDuxsWYVPkxWnN8EFZ",
  "key4": "5BCgFiR9vhxdHbHSqMoUADo3G9JHp9NXqFrRreSkCAS6GBcyDFpozPDNqzGF8N1xPGZvt6PJ1QLzQCAWL6PwEUov",
  "key5": "5m9nETXNNnrhGBt8XYDcFztB6ZLNCW8dxdWYGWr5JazoFwQNroMS9itrh2tpfSumXGYBktEuu3R2Ccup5TYbXMgf",
  "key6": "3576uKWyRXaSw5vSx5VzV5MPvEgGcaPzCj3jHi9aDragQgjhQ2V7qjAPpc9n67eVPg7MCrV7knb7aJ7FwvQb4En7",
  "key7": "5i2neidhhhur2cTSCjVJrzjsPg28a6yvkzDSSSEJw2NWBCDw36W6ryPErnBKB9fxigEwuBTSLqqJyVtUxX3aY76o",
  "key8": "4FR5jQREnodm7gou2X3KzDZ226boWZjebrJKc2pGavnN8zi3uMxtioQfuj5u7CPXZTKWMDLkrckHvXS9EKKqLP4V",
  "key9": "297wQ4MdU2hBejJTwTfWYww2g9oKmePwS4kSS5mKgiaUa3jdvsuBWNv1qJXeroKatPsvvsYthdE7F9WkaSrZabuw",
  "key10": "5Zoh6u8F2pFogquJAXPpd2nNzpUm4hTxgGDmHgvauB7En29vmZt1K6GwG4yKwx4b5j6YrgjJPi8UiZzGjbxu5Swy",
  "key11": "2RHkfaEWkZuZtoaXuGFzwaKhkCN8oW7tEjWEVPGLU9N1egmU6TxmajGiL2yTA63aAUFdptjwtWpcZNEEfLtddsVp",
  "key12": "5HdM3MNKePVGaQ8wFrKpuphKBqZw6cxjWHMWSRiGRs2GokLJDwvFY6N3SsMNq5nL3kgEwJSt6a9fCbaS4BUGSrGi",
  "key13": "3cyhu7hceLKCRu7yoUmpNe3U9jkfoR1orgygtbh6PN9J8uRFmWD4dC5W3p8XV5BCoUqzWp9aaMLzMYoSyejQtGrG",
  "key14": "5qkvZiPT7jwHgumSikK5zF49nZGzysGDtSPYFA7AadKAUpnKbjkQLN9gHCUdSE6Y8mTjuoDgWiRCd7fzdJTn2urV",
  "key15": "5sGhTfSuBLCGCDWSXFDPqHDUjRubxmHiTPPoAZFfbjU3WYzmQ959dPJbkXnAiusb5BmqGw7my5erQ3mHvvj7asmp",
  "key16": "59niTnRvCiJMXCXGrAgMsJZuiJ9fbTCCSoWMCrQDNtZb7qk7L3bvt92YPhz4ZCthnGBV4zMBEzhjKu1rtw1kDn1w",
  "key17": "4v3UcWsY4PRTVGCgYqoFZ6StWYySQ6SiQinEPQjTKEhsxGXSQssCn2U8Z3W3NY9AGxXXwzdrVTUiwFAMdvPqaysP",
  "key18": "Qm6Hh9WatUdkqL4gNpr7uTwpSQGSidaAvQFTZ2puLSiqcZShzBtGvn8mG75aeYaphqMChSJbmNhzNUnQmZriwrw",
  "key19": "4Gn6AJTcX3o7AJ2B2stx8XoNey27pBoYnstDinXW5CVAeeHraK1Zr73AeK6SRUkZmEwuuH4PRpfNvMoCSXZVgjs1",
  "key20": "9VVMyFjFkHFwn4itQqvLes9Bj1hDGrXkn56gjjXvQDGV4EcpHxpPYpfPhjw8mR4YWkHYMNC5EytcAWw4z1EYwTn",
  "key21": "2RPKDAeM2iXEzHeNkcS3Bs3FPh2J3BNuZ6qAUrrAVzWaF16826q1tmDBRpmmkgKwfYz9Kmh8tTzLKHsnx14Z67Ji",
  "key22": "4J7bs2VWEP5Xqxt59E84KjYhy2JSPZDRna1vyMc5fP9TMByRyCPm6UU9fPA6eR6NjK3qhhM5X427P7jpM88SgYbz",
  "key23": "4LFzdtekn58zXc8M3ku4mSgL1z6a27zn4R5rsrgczqj2wWpKyn8w9BqoKmWuxZihrqGkmY3QFoYTQVf63v6mjoxa",
  "key24": "hM34Gyu7wfc8FzxMagzm7uF2nABfw9S2QiC8MLQoeS21NWPADpa4qYHz4a2pfxbThYuBi5aoEpwgbZ5idKtTrKQ",
  "key25": "5huWk39fCePo6KjUnhZNEdAikNUv4p4eet4DPHjHZEFKT4X4T2DdWR4oaDFRcgLLhWBpZAoxDjKyayJAc5S96LWd",
  "key26": "2EoMMvTFh8ff8eEPjSmHmBDcQBiMMmLMEBBkxJhjDACxv6c2ihgZqEkukR2gSssMFvwev9uEWXY5gdEPyuU25PBV",
  "key27": "4oi7PJ1SxS1ZXGknFYi2kQ4cMsjNREu61yvrbGwawrPK2ikNvX8NPCukNyztQxHoRo2FsFUC1kG5hRWq3jcJCCeZ",
  "key28": "2E9G7i8YHpKF1ftF7YsAFHsVxh3esxtroU6wywQUfeXfu3k41D1fuEcK6uWbRWXVxB29AMd2n3hCQZTaXjJsrw1t",
  "key29": "4JYSm3uD6iQWQGT94hny8ggZBpTUvhkw18cWbJTsJSZV9g7EH5LzBFeJHrQfXMirrA1NwYv5749Z3dPbETTFmkKL",
  "key30": "2Z6r4uAWLmaKPvEHSv7fHEgyBTPyqC6BmqD23cvqmHQZKR6rnP3GCFcB6rBJW1GT6CjEup8zuGo7N9196qSNirhE",
  "key31": "5PYgQ5iDYtbdsTzgzG3f9U92YCGD15nSMXSQBcb5XGBB7sisiXwRsg8RsGWAJrke2EKgi9CBHQ7Dy8XNgFLQdWap",
  "key32": "3QuXAH17z91q1HczYYDqN41TSNvjLpdQWrxrakVDv8trRwQQtLhJXbWy1KQKtRSSYTjnNniPkTpoPm2SGa2Kq1VQ",
  "key33": "MH9zBF77hd4HTiMWybHbDyHnSem546XVoAdtouM98P2HubEf8bdJNgkY7wHHjic7obpQaao4EBmzUFqkmkfrvy4",
  "key34": "221FVCuvkEEwCughHCdTbZkZshZb5jJHu1ofw1Vcgu4vYRMGgjwuQr6M5fvHccQhni5vpbtZJHJuDAMk5TtApsGw",
  "key35": "5cVxsSXcKruVPNzWFiDB6rsHomt36Q9BGCE28CCC3Am9b1Dyt4YEM5PVSYxjwHvawacU5Y3ApnfVVWnwaN7jSQRk",
  "key36": "22izgNgJ89BL3NXhZZrRBk2rmx8Ao5dTq5jPbQK46vj2YKUQwXWvG46DmvbtEfFuxWiBUmbkiBMM96PFeiN3aUzu"
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
