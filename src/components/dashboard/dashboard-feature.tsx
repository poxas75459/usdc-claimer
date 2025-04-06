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
    "2XXvtNtLW354hXqNwcLCjfHTmM1tYVzCWvGZG7rWpThWaPcPGV6LHW6sHjgyJf9MXM2LxXsDgfrmXcKweD58kdp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52qmzCsFK8Za8iYDHn8LoLwSfGbapdBqjbn8VPMh2NVQVvJCHZnVrdAyLRoHjMVdRa3REuqoiwDPQDHarFGUyX62",
  "key1": "3rcHbVb4BSrLd8rJC3uvWnoJE9okagyPu4W9SVonDmFzhQ1VJcoFotwVza4UM5jW71hGRiiEyX4zNSFdr8rwRT8D",
  "key2": "4qrzUESG1rZdS8pKcXBoFyti7dmHthPekZZbzforZjqNwRrVz7VxKkStXrjh7RPi7nzwSZSM4BirCGNrTWgtbCtN",
  "key3": "52UFk1x9a7YEXQJdkjKzF1DMa2pZZDXxowm9FDnSnda78Rj5EbTuR6F9WS6DTMmh2a5E9tYHF55WAmuCVnTWwqMF",
  "key4": "Qf69cPo1xhggpJkzTkEae1iBwehaMR6J5TwnzsEE4Ar94VnkEvVXKpXao742CHjtY54LHRZpxpbmhVaeMPihXLd",
  "key5": "2z5CYwdpJ6XkLF2DUYWNwtegUU2zZwhKbcY7qbBwdwRhweqTAPLTBQt3vSeMNJaFjz4WL7SV17ATEY2DtEDZ1BcB",
  "key6": "5RxMWejQxTqcok3KmTFdbdhGSYnwSzrnzJKET4x7yUpSn7UYjM5eeZ858r5sACKrczEXnGEXtx5RdPuXH7xVBSeF",
  "key7": "4Dvs4JsZuNEcm7A8RzYQVPByC6epGF1dn6NmUw8KjC9eBhtF9YEJY6aFAjkU1jeUQJ4ThnCYgcuyQhz1doErKhoV",
  "key8": "3Uu6YTY3wBLf5dMAYsxyaAHH4jzPHjYRTD1zSKBrjUgGTHe8w65XovQRfKrjQXFLCnEidjRCR7eQomUJ5FjREHmG",
  "key9": "5c3z1U7P6nYsMNer3wCNQcdFckAareRmTFgPF1A9NKmMopitppC4PKcK47AXRqGPcsAqqvPRoe8fJR91iGdenBbW",
  "key10": "3iFGLQY1ATkT3yo9d4BgqRescr7ckEvXCPutveudPmiu9nQbCRFB8KGxm5pkPzZXT1xzW86NQpcejzgspH52BTht",
  "key11": "347ZHNxXBVLx4wKKmN5EHSobYt6eMfmkCn2nguNZE9XNjKewXMkJq9nac2DpnWbhNCQtCmd7qbZTbKgH3rYpNDF4",
  "key12": "57MFEHcNCrzmzK4UhDYh5v4WnP6w5JyWNM5S4BsaoMbLTidR44ggGMuzV13bod1svtYjMvYoRAQPgSaasm3ywCEU",
  "key13": "57LaSvaDehYuTC5LeDpyEZvXGkpAEPfvZ9Jfc6AuWRvzJpLLJuBm6RrhQGXRfq7G1UScZGRXJmT9jg438xxpkgF7",
  "key14": "iEo5qhm1bX2KJEkNdq3tdJ25H1nzm4tk13qjmLmgh3uWNGBeJEpAjAMzDVmVRshgY8jrcGuHcA9yV43DLQ2g43P",
  "key15": "47ffrdWR4gyVvLNgyDtbHkoj7XPf8b7UnYyRmbFceHBDCn5UdQc4gyCnQmZ5WnfwdXZLoskqDDMNwvHcfQ5ZNcdn",
  "key16": "5zkcAnG4sSx4DCPrwNjJbHHtS1q6D4z3BU1nA6kbmmQYvYeDL8k1TE2FQSRYguoABqT2X7kqGKSah2vWyBCN1Gw5",
  "key17": "kzL4UEe3mVxNu6k1VLZE8jYk5pDJaiopLjSVorW3V19iTaou11mmr55n3e5ajAcGMDRxnN9Uo5xqRhhZ1YcdQPA",
  "key18": "615xVPxBvY28GFhZTtxxrRUhYq95sucFGNPmN16q1qXPP5HDUVU8qAzKr1ZgMAc6wNCpVY1ga49GnD9SBtJ1m2Aj",
  "key19": "2qe3z1KewVzLNLZDi8daXWqDb3itRodgwkHsEnn6eqntvnTmxsp6fb3jAeUE1QuwNPQ5RzNcZhZKg72eMD3XJPWb",
  "key20": "67Jpj6dUXgJvR2wKjQd1VWavzqks3Avzt2DfLGdY3X7SbiRYUdFBfN1SpJv8rUQfSnMZ7CK4zVYdjULQ1ECCRonF",
  "key21": "34twcZcc5zJRjtk82GtH9C2BSyZUBwFM56tsoWpqxjqJknLNMZuDg7nrqUdaTapDo7dCRFDajBvpWaCWCSHX1x8b",
  "key22": "5p49TM7CL5Khi7R3BtsssqRmwjaWU3z3hKwWti1T6tqLvi5VqNWPnBoZ3dTUVRxmE6NCbjCVqxM4bxQopuLNZirD",
  "key23": "2sjM66nBLj22P7RE92JU6yXKRhcBy3m8pvjohZaTLFGwLUQASS2YaWKEM5xCaRNVBSwNj34wVWH9Qvmj8reeWxsr",
  "key24": "4kNECpT9JjYuvHf9xS8wCuqZ5Tg82B9xQSgnRJy7z4jwNRUAyxU2NPzD1xvsCs8UW66CWivyrt26y7Ae72uBMznc",
  "key25": "66nCHFV4gMM63GMucTAAEdNCi6nJ7qgrpk4Ns44cQJKQYdGTgE7g2yQz31s8FPrwe7Axbu4DCkWHydr7ik76f68P",
  "key26": "n147bnZuZ1Yx1npK7LHvLwYynVndWrisdKfmFc3a5UNvjhYnu33uDNkpXRPrnqr8rniAxoZxMjqdKF3PighRZju",
  "key27": "MPQpxaWoRgpoawiDyfv1Uv9R4WdJSSS4WK6wGxBTSe1k5aTaTo5Y3eJTkSkiLQYQCcYLrkHRoNBYRUW8XNr1dgv",
  "key28": "42SVJwVi3TGhufC5mfrZaFsRo7wi4e1kKKbbWFpaGV5r2nf5oa1cQrJLae8YTE2NX9QkAwA1Yujg4KS8wEqDaPke",
  "key29": "wKg7ipdqFZyxmw7bEuTkjuHJ4rRCSwSrfvYfnh6LsAVZkjHT9ESzfaF9SGpi28szfa2VhwjbbAocXxWk5xybGbd",
  "key30": "nDT6n4E9wQoaH2rUMGod7XMhDXEGXFkCJtJG65gV6LJxzbE68n21Bm6h1rEi6dkfnX6pya9pbZtsoDPRLcgvTJL",
  "key31": "42SG8LXXDZjhzdg2TGrx6gbKKGMrUG7iBr6KzMBnpeEgTkrGAspMwt6GSWUkTuKNigMirVLuLHj2kY1GzStCeTxz",
  "key32": "53oi3GTcLqicqXqK47uKgcfj7H2UCzYPFEYCoH9QnMFBahNzmVRDDRy6ULijNZ2L3U5csUjRS7BA47x9aPvH3p2H"
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
