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
    "3sLwWceTieqWBmdaKKEUnw9yeBJ49U6KXoCSizyR7wC1ttrLgSidYjAew93Z3ozKBNAsVB4eyRWmkX1NMN7RD3Mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XhJrBNkGsRLWETdJKZ2JZRCH8ymTk6MSrguCVQgAp6EkrFXoU3YCMNnxY31bf6EzXZuoPsidk75qtMpwLptWuDE",
  "key1": "2ShPz3TAwrt9eXrEPqLTUhcA22Qc3mrtdKHsEjgWK8PsDt6ijEnutMhSUDVF7E1yNLSDCyGHgCEHe6ZqCWYGk6BJ",
  "key2": "3d683iWszqfkJe2TiMaA6F54w5uXnH4XqXYyrTwDYCa5R5r87RnR7QoTxkovq542LGLPC3V8KWAs5wxjNAeN3aLX",
  "key3": "32SFidBn8vn4CwJrGe6qswvFCeecFEHiHJ9Nwm6o41vA5kJurGYcpQ8HnWBoREXaDT8zupGnCLVQ1XfCVPBD9xk7",
  "key4": "3RQM1Ac3opiHkyEnBkh3mMipXjn9oeWuhETEaZ8UkCgthEBRLvdhnWmRiDhKLRALaWeUBb8HyWmxFdaq8n9xYVFM",
  "key5": "5757Xcw3zdDcEVKXFYjemyr3sjZjAUSMUMP8cymcp6qBTsbXqPWBauqTWboBncP9mhEZgewYtbC2xDieLYHuPM1W",
  "key6": "3NSmjsontCGLqVh3pTRneDV5xQ2eVoAbCLafnz6xrZDffTqGQyqaxqsmyUmyci8hGA8FAiRFSXq2jyJjm4zXbajn",
  "key7": "2yxGMGMi5KMWzHh259KUr5zukRVqcZ6fmH851HMUBk5uLY7jrRAw7YFbyPzXcZhRVXGxX9turVW97wFJGVbEi1XW",
  "key8": "4s7ZxHbnmMhju7pZstRFhmfdiYKEweLhtjop2oi2DV5jiGomvHg3GW8hd6cG1APndX9bCHf6HBXZTdrBRKT6e2nV",
  "key9": "udvjaSBu79x97Hwm6YmqMPF2FraPcZv5hvNkWCjt4SPgGVBNp8Jic6L8gpVugvV5WJzVCCnxTo1ij4DTKMMGc2x",
  "key10": "2Lqbm7WJ65ETpJgiDh1FN8TpGVdmbgtrWQApo8nqRCVN8mxkWJ3dnwT1dEepmTvwXXaohTgzo3acW4TjDCRAj7qK",
  "key11": "4T6ZWrRbbSPGS1nfdv3BvgLLhBwVnFaqELquV4eZUfXwhupEKvz1sxJHR579wbQBtYhzmMdZQqLtBx3prNiVuY1h",
  "key12": "48Kxr6rAzYkzJUBM4XskfkGUAs7p5Z8PPa53cXiZdT8VPYhPWojw2DsNLstns8oU5naLgVTtRm1cnFmFQMsr4qqj",
  "key13": "2reezyHKd3qQMvr3CDQbTERfAvdqq9xbBwpieG6JLZiwRt226Bq2CJp3PUMDiWdoZNgxWxFw3VTq64S963U84Sp1",
  "key14": "5ANjWD29nPHjKConzKxc926iziryCpPtGtiknmXnSKYAdzHKcqcRbpVJpiVVrWEhLnaiptA4Z1AnZFwPeYxUYutH",
  "key15": "61eqaPR62pLgvNfJc4FsVaXNhyiakWMETJhqQdXTBmdb27TygLubdCCEam3Gac28YamgVbtUw9wKonMNk2oq4Jm5",
  "key16": "4YkyRgy7F91zFGkgJnMmFFnffCdjeuBbhWdB96UoUdG7i83TWMd2Nq4k4vadsfkCYjmYCBDbFMeY5haBAKvnG27Y",
  "key17": "4X1jmkR1ppcRZm5toCJJQiZdmMbGGnLhk6xFzcMc6otQpUerwsn3Xd45Qfpr2Av4qrVqxYGHniJGWMxRuH9KZpE1",
  "key18": "2FvAP9ouvt1JanQkvC4SpGSB8yGmyaTeZnWRMARsa1FQs1Wfv755kELSqAyNBesKh2mcA9mPZAZtBcvJXA6cWoXM",
  "key19": "5hBuKnbx39UTM4zmXi3n3iHvzNfGzsJU8ys2DywtCgUgkGeeZgsczoPSysVQNHYuoxDmWcr2934WMPJYGZDV87Nx",
  "key20": "9VF8R2wLqsn1Kkru8wTMbU36MewDJm9vTGFLXGLEwukMhCtMr4sa8i18AwuEwaAjGqy4W4giQWSD4sr5EXRXKjH",
  "key21": "3VzFxqUx2r92JWYzRX6mkGtsxsGtW2YEdvD2WQGeRj2GMgbZsrcWune6qQoWnig3ENSBVEwRqkYhEy96PGkXwWLC",
  "key22": "46zZibCXJgrrJccmm4KHPh2m1bzK84Gom8yTgzxPiXiHbtUBKVMukkhJ6nZ3RZWXFVPZKosojxAPCXCvMvEtgTht",
  "key23": "uyHJkhfnsHpdKNMyfCP3WJ9HC5VX35R7Dv7qhQ77hHAXzfwkLoLR3gC46Eimft3mU92Ey75pTkW8prRa7ASyg6Y",
  "key24": "3rmh5EXGDLRzwSrBQ7bVEpUx1TZPA26RqLrSd393i6ynayWPzvZPQBXvxABujhuWffe9YDcRsfVy1goWoLxrxaDY",
  "key25": "4KVfv3TXM54rFM6yqRVtutFLxdf4KocD5LYQJVGPhDRdDB9zRCATYicEHZrDyrYDbYfBwFuWUdRsbRhsiaEzLVrB",
  "key26": "2JBHNeSxVTevMkNirRt9bMTm9uzThTyVuepe3vFYbeGVmEeJehPYiBMDpYZCfzsmFUyAFsU3vVDpS7tp3TWESCC1",
  "key27": "3Wy9sNgcCguUZiu25grsLdeag5tpXVC7uBZgQ8LCYJmDEGm4UbakmFSDQB6kmKssvXwwAP54YUFEDdvtT94hw9Zm",
  "key28": "3AWANUAvfnoHtBNuX3A3PfHwu9GTMpm9MeeKtuEmEmTTpvkC7LdcDWGJaUayBJpVDGq5qjkzhT9SoBhPoqU85gqG",
  "key29": "4zxbbpTotUva7b9otQgzikLaovTCMBY1E4vnErMgUWAimUmUn21LWug3Cm96i8U2w76wn7PQdTGptjVMiiyQ6urX",
  "key30": "5g6mjMygCY2bJ8vWY7WEEYsa2nS9hbFqX89qvfazchHtnA8UAWci69MmeybG1LRYVNzXPnUnA4WTCPbDxZTALvec",
  "key31": "64ZgPJ7gVwPqDamGSZZ9iySoCcZjWeFce9E3LLVEYpPA1XVK8XnHDh93V4BRZf7PXKBacToiLW5sVvTtWKbufG4M",
  "key32": "2zuu2qojxUxMcGjg7kRYccRxvUsGzGWVR2n9v57ZPbD7Gwz5U2jGw89LMybYGTPNuCUEqRQ5kTq4roEy9W21HZnu",
  "key33": "4dWZr7io2yNY8c5zfYRz7Zy4CY4gHZWKwZVNT6UTMcMhn22rzQ29rQ3H2ypMuVwf84n2vV58HcJzy9DXEtRJG8UY",
  "key34": "2mh5ThzkRRFwUektKr8oNY6nAEC6ExDwJ9RwDUskzKQd1bxFDFZ3AoDQ1pi6MZbYpy1m5D4EdLKdkyC77xVM49iR"
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
