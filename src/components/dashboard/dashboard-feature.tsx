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
    "4AAWa3EtRVG66sCWxStPke9T1Wt7v2A6Z2fW9f4RAbTYDJfJmNJhPkUkfFgEA1fVeeJYay5MuupemPMaeR3RPDpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FzBQXut2nmERoEw7g5gPt2bx3QVBL2wjhyVXaeoApa9CUpjFpAJMTuPqKXi1s2C2YLP6qgx94fMvpzowjqVKuTo",
  "key1": "5QEepsGhccLSdWhK5sMh7gchNoHwaFCCsktujHwDzpF3sghy3R5LemL8Jd3HV9yZj2ci77Ua8WVGsKepStu6Zngt",
  "key2": "4ycKqByLBLnQ3RgpNn66LhtvWs92TEoYKgdD4Tpv84jLyybPABDpYqAo3ytHkXoYjLCA7m5g1tzDbx7vc5Te75oa",
  "key3": "3EdMhfTgzqoiiRANsXX8QQafVrTTwT1mFxcfNtKQcJYciW3tDfRW7Uw2uqU5YPp2XYHfYbVmAoxgW9rgKdbZczxS",
  "key4": "4p9MiCqd98Eb7cNLVDERJSeEtc3fFPrFiHqKSwtfMxAwtiuMzacP7SvJPzTKDYzsxZHws8g1HpjFwnKAYXXK6VN2",
  "key5": "pQP79fr4wn1D2qWKDuhLKvDyxUCJKzaHU8oheDaWVRDXYgKJL2bsm3YCbkN8Y1nDPTXcoeNfy3yfeBCZrmi2MsZ",
  "key6": "4zSHH2fr8U884qLsTaaQsYxpAUJgG9u7c8bvVNHcSNPt9UewiATAZRhRBoN6siVBmdr5GMUs94BYwCNZSYUb9iuf",
  "key7": "4Wwa6KFno3aMusSoSSFJSoYznwiURgx1z1h5tCVzzHVLUCW1pzQgCvpHMxAwA9oWrtz3kuJbQMQfAb5JF4bMdcdu",
  "key8": "5TtNzoy6EXN4HgMYQsxemZznCiAFWPGe995oe7MX1eEHWUEkwxspUcjWAmFv9tjJatLh8BWPpnNLLERFwqNoibjk",
  "key9": "21r2PHoa3gR3Jb2oA6snmuMatagw2R13DmLZFWHfaSYfB7cBnKGaWdujvCRkae6a8q6be6Y1JSZxtms6z3es6uXY",
  "key10": "5uZfVR9woAGEVh9HDmbMnVCxUTm59R9BKx6SJ6w1YJodw5XPA8dfsMQzECR6m6hAKTJ56S1Tf4ohTH6A6zq7UvUH",
  "key11": "3Ev29Eyc3UsedXWG6MySvFiC7e93VLs72oSNv2JaR5mQiboZwgpCSrqASFR6puhitWgvG9cCGUhQvtqDcx2JbUeg",
  "key12": "3njtWTJAN1xXDunhkoDDYJ8nS2nZtB23B98nJD6FPdfbcQwmy1MnM3FXWFkqBaeuhvbS7UxisrmuoFHYMja5D356",
  "key13": "3odR19h3V5DPdMoceoSKanBfyWpfopb4RZTxjme7g3nfmUSTeLWbAetGPmzxRc15FzpakcXqRayLm7cbcXwp6wFC",
  "key14": "4uHBMGdfiDpgwoKHMtmppmpSXdnnVRe4GnqQw2BGpv65xxzva3zdD2icp8tGN34sSuZBzCPt3jGoicxZjCz9BUAq",
  "key15": "5TwsjCztvfa6uEg7K3ttfQkzxs71ih89SX2JC9g2HmVQqNrRNRSHw1THhpTVquqk8XvxuhU3HuCUS2GJPNDwJCVc",
  "key16": "2pXLEKonquFQVnnMNHmeCDG8QethFipg49iBYjh3v6uKE7uLSRDj73Cyaic3zamwq9CTmRkvGb8U7C1dEyN6fYGz",
  "key17": "4Wej5ALjNah8wdLLez8UYXaiSYFj2qkXnQudTDfa1srV66LAKDzzbNdL8ovyShoxpCd7NWrxCbtHD5q1W5HQcJAW",
  "key18": "3AK2i19uHAykGas17pTh8wHiyo4aBDd8Y5YGP4px4pDcAHvE6HmRrMoKepZ6afn2cdWVvwsoZSWFZFwbdd3d8UGG",
  "key19": "Ajw7dGDn3Xnu9QQwJ599AT6AbDkLcaCFqVfnoqUSDjF7LckfRSCEPn15fLdwKwQg33HHZFU9US9xzgMBPnTCY9z",
  "key20": "4Tf8uyVLifzPkUF5WBtYdMac4cCC9s3XTgjXbjGdgjXc1oF4JuNcbANzGSEtSPA7FGKfQnWkR44CELkt8A7zwtms",
  "key21": "4iUYXEWnFaxAzEDXGJDdVAf6d1FchKYxbJcqWpo91qkNNDzzm6UaUttZbAyF25uz7VF7MBoRWtwaXritipEJ6MpA",
  "key22": "4fQGrNhQPhBqFaBxH2pDhQXKsjYCuxh5HvrD4gKNeQDgFtA5KWmKwWoZrPNWmy8JrMwtjd5J87JyUt7aqyzv94gx",
  "key23": "hjXxyVEd9ADXqaAZGQpFcawAHC6gTt4cbfGo2fHDVTR2JKN7YGmAmTANFHB2uUhQaUhW4Q5ZByJBHZQtmjqusgH",
  "key24": "38QL4PQKBZk242TnoRLtWxdr569GA353NP8wqGtuc2KMvHaf7JC2mmBHp6rtffn8aEY5taY5tC6bDw5PqZL5CJsy",
  "key25": "4KVyCzDDBS3rZAHw4ZVhDCzPTdc4j3KjSeF2wVVo7PBmKSEaJqu7UBusY2XuTvyQ3KGvEHvyiK94r57MkvMqquiy",
  "key26": "5MzsD5cvYT8L8Zew4xz2pEaHuUrdFUUCKQD6teJRKCKMVq8cguYqwBe1VhECBqZk1WnrhgfzfPivFywazKdX7RL3",
  "key27": "4TH7i7bEDNq9D2PZWVEFWE9j3ZTDPRWYaqQ37LK52ZuNcciGWwiNQpaoSE9Aw52SzKKFwNohyDrCgFYEhZdL2vwu",
  "key28": "4kV7dfJhxDWkGTG2TTTAFQJA836aFgZtECHfEZrrZNJRHCC2LDavTjdCU9upFAQTyRd4J5iGzZaCYeeun7mAcubt",
  "key29": "4R2FmriumgLChCwCQrhhsKD71ZS62QJ4P6Ry8WKFqctV5n4igBhRcVHZief6Xt7Z7YjWF7D6NtDt4iNcbrJQSEy5",
  "key30": "zLN4kMVsXRKfWgYZnrtqifpvBG9vd1JQyB1DvY4MuybcnpjrQHoLZgvNh93fT1xxsBtp8hnccnnzfVAn8E7N4Tx"
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
