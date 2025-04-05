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
    "5zKEU6mvVFGVjty7KcLUcBwPrZfm2puS1bfBZuPMMFMT7fQRhVXpvs7oPZWyqnda652njb65ZYoVYCPqCDHoG5ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gHfTJTvF2jpFfyjUqJ3baEg2XrwbeycJ5oQuqPVj4DKeBRj7eYijLnMrQkn5u6XP8noz3BG5qbVNuJmrjTzsrtE",
  "key1": "3KUkUYWMRYnvXf8chcNnzME8fjStyWB4czX1HTGQyXbnkRfbgq2VBX7kkqqrkVEZesoXf8Pt6tYn217Mv9yHjxcR",
  "key2": "3jZPZKZvAcDbXv94JYhqHY926vpUqid8UaYfDkz7FLhcXo3nAUT4tpLj5RswxpGGGpH4M9uYGjaHHSPn5P5ieVkS",
  "key3": "5bf96a6uPqKbgzzwmbZfvHDbeWTp8dfjMkHp1NvRctg9fvtPh79TRxdqcJ72P7DWMq75uvj2uQ6iP4pU1PR3E4VX",
  "key4": "4kwoQiKZFvZ3n8GFuLh8LgLSWnb9vRYutxJ4iVPAkGaii2BXpHAWPSw5A4Q42wdfuTYbK8zHYqhZv9DMWZbyTEhL",
  "key5": "4T9dJm5aUyQvNBo3V8ejWdTNJZNfBbQAHGPpZmWHDV2rtgnYCzxaNebAFm1BjWv9RpvNGcZ9LzJJxE4mtgTonTrD",
  "key6": "7e1uBJ8aJMm8WArvvaaVpty4Y5fsGEULjyaStrGviyCKoBDHmT57eTRt2humDYjgDk8snGrbTg6RCMPE7WGxQ2a",
  "key7": "4bU4VoXRZwKDFBY1Ag6okgcEf3RUwprmNXx6W3GzoTB2vQU61SxFxjDvCxD77c5syqJ2P5uYzfKRjHVdtj2Zcx1J",
  "key8": "2SN2Vjbhsre1H8sNu5KUX6UBPVBdrhZdiWd5mBVVDGYzEuSCGRpZzUjs6DWFYdcUny9nG9U1YVzhxo1X41afK5U5",
  "key9": "3SHuJVoFkjZUJ3GYc89fUfXJ651EQ2vEmfkJtJ2zRA6RiYLHVN7WHy7wif3eW7eiCDMA9eEUqiDKRgf1yYgeAAX1",
  "key10": "3N8MsQPZbVvUMRkB7Phh6XV3ojXT5RPwiaDKhGmacos1raqe4R2pvmkEz7YivKP7wzdcZNkJ3Ud5x1VRdW2fNUs7",
  "key11": "5YN5TCRzPfA2ahqhz2QXMQ7nxpqtY5WHX8xMzP2HUofpz2jZdMZD8sLFJAZxoCJ3HkAkvFALafB9xSBWyEvYBRsW",
  "key12": "2Yycj9e66vwRLM9b3r8pBsj7WRZ9zaocqoqQpNyFwEBTxbKcAYcxNPLAdQ9wkdAEDn9XAoLZRnAtL9TwMYQosoVh",
  "key13": "4YpLkntmmn6aVzs4MAhtNy8CLWtmqMKhgx82Vza49ScMttnG7ktFqWS39r9fK6G4hDPrWLp7HPqkgaPpfgfqNH9v",
  "key14": "2Rpi889CTRa5CzowhMUVtajaEPAg9trANsWRfyGe7vTZctNE1dpv6ygYWsHRYWBmdXtHcQBi2iTG7feFhtYz6pM4",
  "key15": "poyqnaQe2WW9ZeMWGdEwYsm9T5knvF1iu33TRDaJWsKH773yTDNwH18YWU8UKJXD5pSXMF2jGNowXFBadhX8A6t",
  "key16": "4roPpeYm4Vm9z1jyd36wzMDHqS6WGkUfNGajqbVHhufnsxuz3S7uHbpXvdZk4WmHScNbNasKC7BdLseApeDLv7Vx",
  "key17": "656RYB81vyRD77itxJH4BPUkkwcCRXmsoyZhNCwL5CNnNtnDkkm4qZTgSHFC1vsYLeNJLRvwGUTeYtYwdCyP4Eih",
  "key18": "3SL84aDDC5vF9WYU9KB8CDVzGwgPB39PtTXKWgZ69doE8szbuNMm2iswbPAjYjUj8QsfiiWawJPQnPYjhZ4NTHCB",
  "key19": "64PdDEi1FSBiiZZQwAfa36iddMTJPoDowgNSSn43gRoDHQbRMAeYaStXt1x4HSnNjyYdfa9rbJXHV6T6HwuB6HJ5",
  "key20": "3NbV2pcF1ijB8DqUzeSdppCtBVgesLSaU53sFwdxSfD8oX2Sb8sVxULitqePwbGhxFwYccuGKemeM7mfPQjJUA5c",
  "key21": "2tmUgvGnMV7RhSmYisaSXjHpWwDsVkdvrzLq88f2uT8psQnvERyyzFsFWQ27R56SNA6oCwMKL9KDoX7eztUR5z3i",
  "key22": "2W9CvSXhYPicCdAZimQqQHdZZ6mKbL2RJn9FgXGLPEaxjh9iVPnnmkj574WTTELve6WLQmhha1kJNE4W5aVMKDUS",
  "key23": "5Gw4CAzksvf9dJEctqnkBMEGzsuwgvZixC7Pr8NP1fCWMHjSnqh3tALgpeaLr4E1s1S4uQaiUvKwtcsFQ3Yni2c7",
  "key24": "xYxQz14QLNtrgt2AnQBgrfEdRMAzakN8jMQyCscv6ry2fdgBVjiCGoNmnJc8fQqSjjYSagEVbJDBooRGoXHRBfF",
  "key25": "NPpxcpCv7Zr3En4JAdEnHmY4AQ9TwmePemN7VbFJfaqfyKTKejdN4pPoBunAx4FojW5oiJyRMhRwjtqBLLn7y5E",
  "key26": "25xEZK9D2JQQ8qS9jdoHxD3SVK4irXEGdDbyE5UKM9Pe73Kue4GnAYzR4eV2G7sUV3hvh9hVWVYTpZnTs4G3KnPJ",
  "key27": "VFUUnJs8CXPfpbas1Gyr2muNAZ75MJ7WyNpzv7jSeyTA3wZdXXNx9Mb84ysSU1S6bQTyCZhjx39g6Quee92yYye",
  "key28": "RVjkfDsbwhqAbpS7vURazzokQoJ852Atei5EaoRu1K4iK7N1djpHDCKnxLYeduQbxMm17BjUPzFdXUwxixpBWXZ",
  "key29": "4GCT2F9nWsonLknBiRCzsrgJb9XZpMLGXrEXXUGubaPQaXzCgdPrYqur2LUk6HVkLMRoeZedAoUTJfQxvy9rXodb",
  "key30": "3mY4kFR7kgQ4H3CBZxYsg1ezDXWyM1oxqnWfVAEikduk8MnaifnkBSC1m32ZweKbVQBhaeqa8V1pBrH6UeeqJn1E",
  "key31": "fLrbbkgZJqPLou1DQrLd4aLNd2KtQ3mzDfG7b5p5iJBcnmzzWTpLyZXrt84pKCuqMdpkp9mzYhXTDmdb4Agnsyx",
  "key32": "6gSMFyBWBRBBqZ2bgdhZHotytWi5vKsCsomfLrwqEjY7FTMVVXpYqxSG2xVXeQmna8U1xPV8X5foZEuVadsswby",
  "key33": "2tohrtw3y1TgUwmngtAY3ZRyrkGf8dwxJLbDokTLy3bFUjhs5Z6eyijH6wtLdLYXCyhH8ynj1wHWj9brBsEHFFp3",
  "key34": "2syzbdquyJWjCe7v3kwdy6bJm7u9zmjT8mdRccLPYcsoH61Xf2Vd6rRmgP6EUYUN9NR5RoFarU2pHC4Ex5TLxXhx"
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
