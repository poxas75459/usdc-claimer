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
    "3x6mXfAXsNN2FgnJ5rCGJjDBBpy19RX5FAwQH5gmuQf8FiPiUcuH9JTivQFcHHf2e8MkqAmFjrxGoxxz2oAhoCd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FUZ9iyBs18Wrg6W4T2qyNWog8hQBdvPTBUYpQU2qwHNsPwXH45wMyAqmdyasHzNngSCAKYejq1LXpRXqQQvgiup",
  "key1": "sPk5PsZf2kR7CwNjrmbEWJNHQB7tZiYS914XGjR6sTTq9r5twdDvW3N63kSAQFxfZu298UEV25J8EMZBbwRhmfN",
  "key2": "23YEmzxPsYyqZ2uZ58NKonKeE3gfoCyEHT5aS14shDD3nbmfeK38bZ2SiJYNEG2gQUEBryWJCAC7QEXnWxmo9wev",
  "key3": "4rRzZpwx1DtmcLWoguA9QSjxxGTdcBaAL4gDGuLrJc96iQCFDf5acMu52eYzKzMP9hBNirhxmZFSGAS2ARPPgc8f",
  "key4": "3mdtagjqciRsa6MnrsCKQ1FD22gJRhKETFgwK2Bzqq7pGcGDgsu3wXHCuEVxiTFf8b1rCB8BVRVw4RFQEKoK1oa8",
  "key5": "4pV8eaDitpDR5outow8MGtVuPspZLV5Tdui9qFwrzYCuCmSrWwi9B83cRqWcZRPPNwZvxznEypetkbXxa3ycDsGi",
  "key6": "66NSSGwZPgzDCw1SnMztCdhXZD5E9b38dbBnqhvYVYqa4Dci4ArLsnwLcFqHxRoq7776J9T4AcfgahKVfxdtc2Rv",
  "key7": "TcXggNeMGxeTT7zYEHD1zshHs8Ppdu2aTXJKFusg9cM91rTKXsj6dBSYdap41SDvkWh4f8rBdMsmvZ3EUkgcWzQ",
  "key8": "VwYSzVPc6vr94rENcYHBSAfg1SUoLFW9TR7zbNjiVgAKWHBE8f1xcqhMFP5U7qEHQYtpdqEGvhEs7RruAaj1aPw",
  "key9": "5oazLk3kLM3VtqhiekNny6zksFBpSoyizZK9wW6hRFUgN4ivukvYQCbbJzgXGZbdWrAEKDaa3BPQRi6winUDmbo8",
  "key10": "2jRnJZriiDxMr4qgwS2j2WXUNTynsGtDJr1CPisbqajMP55ESnBNYoRt1sGVCCQPpEFsxvbtbnJPC7iPctKCHnZt",
  "key11": "56TS75hELPCxmKN9KkKKPWMfp1YFJnawhY2XaxJ3WKNq1SgQjiuW5AAHUhYUwhab8dJuMUgASQ6i4JUpXDubuVzd",
  "key12": "5b1W1sUfqoEZK1SD8ALdNhbvJJ5WoDXmqgbDoXmtaWNnATzN1MCeDLTCCBeTcWun8X1L3W7fLsTP61ra8TtutHFu",
  "key13": "2pqoMCWX8aLChonwfqqt9x2xBMvV9RomkKBwsZ3QS9JkLx2N4Hfm21VQeJjGgzbudQpgdVxnijwfnCjDKdCiFahx",
  "key14": "4TA7XGUzEJxjWYrocsT1JcyRaT6xpqqeazRwzpW5QfV3p9Ci98fHABfkc3qt9N5HiyC12PUepCTywqfuCHBw1ibe",
  "key15": "4bSrBGrQefMboWn6fxXKQLCWBnuXEjnjudhyLi4FEZBbrZnD2ZMHt6oW6j6twS112Esh8oRBqF8ZYwRpTa7XLpVa",
  "key16": "5UMzKnfPyReuacXtXjbuKBCzmyUjJMEdc5zhZbXyUdVPEEsoozxWQaDgvnjJ9AACmypnD4sgJc8EF9pVvoyJGaV",
  "key17": "2psxWi4vmnx5gWB9vgz26iQmvy9RVhGhdvMbCpxR5ZrQauDyX9WpsHEthveevUvRThTReuGapW77N8kZuWmfdRsG",
  "key18": "4d65Dv2ERzQvFTjVvMJxmxTjofymeRfKdLHoFKsXir4CWURirvesBJdnSiay3f2jpByeBCbRKAq5vECvwYGgfVwt",
  "key19": "3WNhTBcy3BjoaTAxiP5K8xRYTKWdL8yyAQnEN63KUp8oBdtJdAbZjNANH4M3D7t8BXAYtQNCafKfK4QaCXkxBYTM",
  "key20": "2Et8dFf8fbQPos8uPRY7Hf3SJBsmYi4yHik9Q6GS9EuLccxjbiU8VAxdoBXkhq8p8bEAPqdeDjy9EnsbFAKoZR1S",
  "key21": "39o8VZkr4orfbFZ4XUVyEkZGrQfvTSg8PmWA6pB9FNjcpC61EfAvZNJDsEm7FceSLc8NagBHYTD5LBsi9h8fZisn",
  "key22": "5fYrGqvAgGTz2PaQyaYbWGbkukW6GduHgC3jwazV2nV11TgLzm22YPs8YskeVRnN3AGMa8JrKdZ36u3nUVW9DMmf",
  "key23": "21VMkngM25vwntDgNHQ3eu4xn1PvYBpDvyWeh4hU2BF2ZKFWoR4ncEsXboiuPiHbWZJ5caLdrRVYErDEawjEptvt",
  "key24": "U9CEXXKV6kg1sfeQgbzmhKP3vY1EmWC7286P6ULB32J5UGktxT5NRrc8ggraQhbVqwQrEwArVbbHxxBKomWdyks",
  "key25": "5RK31ebuyyPH7wunARhAdiy2L9bPzi4gFEPvUZvW1zUSuFzbFKP3JPqXpVxmYMx6T6EkrUGK9WUZj5MxohMhM3tH",
  "key26": "3QscH1hRm2EjVfztZLkqV43Rstr3a5BkUGfbti42ftcfsS7N1unSoiTrofhXVNPNWzaNYCxbMm4MoatJujmE5fEZ",
  "key27": "2xami3VP8KGyVLqkYbYuDcm8VcZakDB7X5VitVjPVvhaMRKWw6bwCrLXN1YKC6EyKVVaR9mnZ96zo7ox9L47CJsW",
  "key28": "EEaWGGSH3q4s1fmuuCz2GLt35r7wP64HC6Fdx1V5KMsmpSvUQm2ptwKxno4PVNo516hBTWo8CvA8FyAcTFZhCYW"
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
