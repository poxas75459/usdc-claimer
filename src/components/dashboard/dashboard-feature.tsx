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
    "21i9oBXTzP48Tsi4i2A6T6hStSHjtsgyJtBCTxsMipcw7FrXiGAWdLxxCqtYDfZKmCuCju6mAtsZwvWedFHYBy1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XJYBUHLXE8Uxp7TYPWrEGyo3P2pTKYXbBcv67b4yuHG7dmEbEC9PxupKHPqhtK8H8C1RJVf9RSK1DgKpnQXeTxW",
  "key1": "64dX2WbzjuuDVoYEDUdVuxzYaMdcrvyq7xrbhxnHhWqMXJLhrbnwDCB868dx84LbK73FG8hQxpyNA1PB312UXest",
  "key2": "ZUGJHaYYNRT4ZD46APBQUhBuHGVTQpDrpkhJ7zwDFWoDtZkLe2buPoaeaghDA3sGeUNW6Lk6y5QSaDG9575izrL",
  "key3": "3mnn2mjucewHPePXfnLJ9NqRFfXM1NGfpef6ngvusShAh2BFs5A4XJL5TLEQC2U8XRLWYBHnyTzjzoNEjEFcj9GH",
  "key4": "izz5Eg6EMNqbWceXyTuYeA8L6Q6QsBgQRgm9rEXfg76tm7JSnMisFLNNraySKqUQoXfg5U5ey21GnY6kAaB7Fgr",
  "key5": "55cVbT7MhNuvbiYqVM2QLnAw9DZ7bD6Yk51zHWLjQjcKter9MEVF53o6RYGUuBjsJPYhon32i4YGNDvRMdYiHLQ3",
  "key6": "5vxBrzTd9oMFbVN9wWbsSTmqk4ZaBZz5ub1bnA7CcxhXBXLp56jexGjks9N7RtU3QVmPPNrQc5ueApqvpLZyuCWv",
  "key7": "5ovN7JqHA8N4wGEGfNLySp8dRqHnGqP7fR5qFdAeRX2FMiYNUorAiNsfPgQWSiz3WqgvnudLAwx2EiAcoUxG8e7C",
  "key8": "62DwWYduGW4XHKfgEF89Te8s46PgdpB5VCfnPFQX7xUmtwr9dHduSRgHtqXDHVNcLSkByCXerWSdggJWxBZcX8ct",
  "key9": "2Fmz8fhnrw1tteDJaDT1ytDR1FCKDW5pLhs6WEaU1KLDKH43TXjUAKinrPSYNAyBEgVE2vzE4FbEzky6TzRPmZU9",
  "key10": "3U8Kv1j6hEJRCwEoFGMiqJmAzkjLihAbv5d1qrx8ZVnThygN4ZtpCAiVr4YtkyPXbVPq3QdRdWz6Xo9KeVU9Sf1C",
  "key11": "611RQ16cYhL2KXEtiLYdbkh19DP4DrLnTgiKrZJmnrZrEWnigqiLANhxFFnXGzzRGFWB2qYpYzcJTCs51ei9adV4",
  "key12": "2GmKomVd5EKkFjcZy4UyRYLJ39TWfRUFaDfd1ZHb4VCwboY7Wkpcbh4xtNJ51KonPKjRdoUhgnhdS8eWp5tpnre4",
  "key13": "3PekN3uNRdZrDdgb7gKEPaFQauCwekYzee872CKS4Hpsby6yWCeoUH6KRE4p2S8SizgKZ1cxHy3NZtPUsPguBDff",
  "key14": "4ebQr8kpCsiVqPpwAufnx4U2CFJDy8RvkfubJd8fJAKmrw3yHUsUdkE4nfCBcCiN9WBTGN1Dhb3firMs4tkJucc5",
  "key15": "2MydHojJcsvGFH7HkcSitmG8zQVQia3fqXBmbGUE3Ei3n8sBpHkaDtpvXBPL6gAN6Btq83axqqTKVD2rDgPphvWr",
  "key16": "2C4eMTFAKpswYqaqQ46oJBHQNf5555GujXpXcjG7AeDVM9JUqAWnaEnpqT6TihSaWHrxgjAAQCnn59WrVQpFi5t6",
  "key17": "5FTUEyR4gmkmYsvFcb8Xm9ZhLwaz65NdbdjEi7zBJuveJDJCcpfsvp4HcsZk6vnJqY8uobgFdw4YTRPFdaSjSVWM",
  "key18": "4ybLhE6nUoHdWfwYTD1KmsCS5Hs9vdJwceHQEjuKPax1JyR3vhc7k1WpxiXc49NYbjrFK3ZVBJCkZNiptyJd7bh7",
  "key19": "RJprWa54iM7mwZzoxmuD2NtKQgNrGeWFh3TJh6Raz9hMaguqNL7Zgxd747kc5qpk4tqRT4yynFphjFms2aiEwVB",
  "key20": "3vzQ5GsXqT4TygjprJfCGaCmPQs6MBaU6VJr5Vf4vthWgdy7y1iZHGHzq7Da87iTocrLKBsmgZU7iYyVzqKXsa1L",
  "key21": "43yDiuZSbQV3AQ1xw29rp76EQt6fNBdqjW6o7NZkpdyXCy52HCBKp27qxJdszvMTi9U9eqbieNHG6rf65FGYkPPu",
  "key22": "fmUk8B1UsYpXJva8M7zsujnfrjdPT6xuFVBFtUzpgkHHi6sDqvpba4PFTY9zomDuFYnYVXhDijYjGRH3PJ3zZ3A",
  "key23": "3mNzz1MiVmLYe5MionYiq8F1pX4sCLoxSgZUmUR5bNJ4VR8yMnLLUGn4fYdGezFHR26oiru41KTW5rCMvtuXHriZ",
  "key24": "PaAVfFiUUp33zPhxrX9WxasAYQnmjXERajJtC6VCnw72g56BLRceHwqeuBBpc8PhUg3i5osKbhsGksEWE4tcgjQ",
  "key25": "4qGDErmYLDSWn7fa6XZchKW1HssCXCdV7vD61QQzkDY8u9UzdpWcrkBVEkUpyZ6u8vL7FgHUxKhSwSV1hTXH4niU",
  "key26": "34gmNXic9ju2iD6c1qMNg7jhmkN9a6bXvqRkrZFQwKh4ej6AhmcsKwkyAyUnGAiK7ZKa7hyTcBeAAHWv8fUK97YS",
  "key27": "39zNCxgYsgaGxiBrfierVfUgXZddjg5B2vPxyG2aj6fS5EV87hSFENnuHyTL6ReK8Miu15cJNHATEAweSNvpxFB6",
  "key28": "3seBEf8qNm9kGpHp2oAcHx5NeDjU1APVmEeGXRaoN7satdBkLACpZ8U92LASw9dbnwwyd1TkdZKbN39rQLiX66PP",
  "key29": "FszfrfubnmFT7vX2QUKA4LRSQ2xBrvf1oqsjm25LZTgfX1tX956RaccdxfDsDYUAbYF48BHjFpHcqQQ1d11seMy"
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
