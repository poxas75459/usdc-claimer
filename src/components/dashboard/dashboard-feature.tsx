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
    "3Y4rDiZG7cPrdXRX4Rr3SuA6HMrJJrD1ueQBse3XVCGFut6TvZaaVhkRbfLnELAknXYnrduu2oTFctqvS4MUQbEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BTiNRXoiA8eoGe2P1b3ErEUxUyqxmqX424pQU3n2KGRefcYHLjfPrXiuVrphArhZrTQ1GWkYeGJiN8NnoW9TisD",
  "key1": "4SgsE5RhLu1NHQojPfq4WVC8DjBzLxzpVWpEZtWoZ7oU2oSSM1hPTYuHLJDHUD6keotaSe25KddbnfQzGpA2Lu4k",
  "key2": "4PHrC4ireVrizii8xuWqLiEwf1z1Jx9mZHnSBMJPP8anLDMBd8angKkjcfaJdKW8V8Mmcm4Pwzng32nqKAEkqpct",
  "key3": "2NuisMVuXkF3tr1JioweDc3jggkkBtZkJuv9mx76YDub2wSapq3PMZkHEinp7i9gakjGZUjBRLApiHSeTqVypKR3",
  "key4": "3mY7BgpuKZS6g9wzY74csY6iTksoBsFCHwTzFBKbJUf3yTVXR3RnSynDcVVuDkGDuxoLqJy8zVTt9JVXAnsmEnnP",
  "key5": "5FC9NENfaDvY8KZh3JDSyz3hhMJ2kyVtUzaUwer4HzqxKaD72qXkvkfVM1Jr7NNHs3azbcJrd6udA1RaUAWtjTZM",
  "key6": "4tiy5Hw2LBcQ66sXN5nKHoXjE3L4NjUaPUaDybdYUteADZ4NqPYB2BfHjJRHsvQjhw4i7hJ7axdRvrWU1i6GCAD8",
  "key7": "5FGJVuh6Kn5HYRDY9Bu32mt4r3Sb6U3wp2mwiPwsDj7S3KQoqZZn613vueNTAqbwzkfsQwPbCGCPVf6aXbyCwhQv",
  "key8": "ghuqjanJzgPBBm1NZryQ93c87oemgSXPrsaCpBVAD8sfs39Tc74uq31NAPN6UZ4PVHxjFMsVHLQeGAfwQcQay76",
  "key9": "3pPGe45UFLzDr9my7ruzTX9dMtFra5AqcHC5EPPuQmz3zNHqyiN6568z7vTtk6ETgQb8XDR73gX46sk9fjfU1Ztj",
  "key10": "5SQuegadcTHSKaLqjaR9TjbQfXtpmvcaCB8M9MYKUcceT7yYMfdgEh5vspzogFzkatPeSFoAYaj3pXrRJ1KJjwj",
  "key11": "29ECdR3bSSgETVmjSHWSCmDwWawfEgxRvnYH6h5ekjdBC4He39cviubMYCSuc2seVrHtWPFRLmbhkSfcpJ3yz3Rb",
  "key12": "5wfHPKzkBrBZqjYt7zUSmbva64KRzUEK2nYdZq14qS65VNTdHi8GbWPpdBNqKrQPjiigGVH5D1DyrM8FTJm2BkTD",
  "key13": "4y1XpEaQZUWBhWNZ8d9afD6dGqUkqT9fcvPiNxarpju7rWhW1sYzhAX1p789Wbe7D9pgVpvYLisNmPUH8np9GVUk",
  "key14": "nbmF6fpQ5cssNhgdNjLhuN6MmCvAw3h5Y8rT9iNcYxp6vThWN8u7r2tk4BKXcYjV8SnjDkvXTSLFQUDoCdPtLpf",
  "key15": "3JUkegGtBXC6xE1oFjvatrZD6D6xTjZi26zxtoa6bWkmSLtMMd5LxoNrMCvhQKXHKCHR2obLz8mE96AFbaPMnZwW",
  "key16": "PcbFgrb82pe6LLGDprfuNNf7riPNiizVi4wXNL9w4R3r1FS5pAqwFkdmLPcNDEsNB51kU466DfcCgryssVbRGG4",
  "key17": "2YAkek3nPATd58bVqfsuXEq9SUXim94k65YGsVqWPPiJyzf6yNLnsv2CQPTH1UKFcmaptVFmMH6ztQ4DUw5eDTa3",
  "key18": "3dCuP1p7uFDyDDxkqNTX4oMjtn2hTJEXDHB8Rf7FA1sCuVK2sb52AX7f564PXAE5jPQmCcggzLMR9kD9B2Tsfm8A",
  "key19": "4NKEittwVDTm4DJLYWYQUy9UxUCRBJ9m7dhU5EaNKAGh1L6FuSaRHJ8h5KQWxd6uGuXZmVkwRJgqDRQMBYTex7yY",
  "key20": "4o7xo2cDPHEwhBozaeFbPwQTx7DwTQY3Xa3YrMYkrcnM4ieHenop35tfQqZ34gD1ZCzmzCVxoCnFfVFUEWXKj6Ap",
  "key21": "4xCSNUcsuP9Tj8xRD9JeYEn5ku8WQSABLxv3RgrNwp9Lmx5LPpbjf4QsrN2tU6LzEcq3ubMqmNWNGL143xrdFevA",
  "key22": "7Twi9168mQCnvyC9b6xGmF9skvFvVQ1LjaZWCGRMXQan7MwXuh918if2igu6yyfZefyDJVCCv7BZNzutxrE9FXT",
  "key23": "35RZwnQ5YBABHGzDweV5fqZ8Ewi84ga9MxF8Dq33ZH4ewJXZ92FQUxrjGUgtdVJq8HJubLEaEn7pa3SJdtc7otG6",
  "key24": "5G25KyxHQy36JTyGYLVzDwnceHPhBXwDCxmTQ9BMeCFEste7vzpVC3XaonpmqgbPj6UCMZscs3wxhdydY7Txehjj",
  "key25": "34LngGt4hQFFEZbyX8xtPmEAjj86W1ySchuVubEMCXUyrfFMFSR9fG6q25rLzcVX3xXTpfYf7CDfjQVTtHKCV8Aa",
  "key26": "2516TwXd6TT2KT5sMQw2CusSmMMSht2n6ivaNKJQNzhZD5YewfnT1kJTGmmCjydAkLZ9GxWYxFpeatkZejUAHv1p",
  "key27": "5Zpp1otj4zGSaQL4bGE5cWtWWPfW7bmg2aLXhNud2V16wi251voQ512uKag9Dr4gyBzxcoezeyrP9siQaqUCDenx",
  "key28": "kQ2TVaMywfpgHvCFHQieEyF4hiZa3ErdjSwQSQfBwa9Fs5wELa6Mp1VV4HFs6XR8kxNviBD24vn7ruVgUwUNB3Q",
  "key29": "2dG1VDL15Hh331Y9DZvdDRPfGn1WviZeMixKQuHoviZCQfRkeCrAv9BvmbCRA4pQG7i78TcE9g8skEeJpedg52wy",
  "key30": "3LrNHGPFTArvSswpbsMsDkd2AZ2yu6bps4HaDBsZWFogEwvdz8npFp91zYbDXmhig22Ry335GVnEr5jTd9qzcZ5d",
  "key31": "3tL2mTwjkrTXFdZGKkT3LpBWy5RKUtyWcHYUcc2esm1zE3cUqbPZZ3tFu1z5pjgumfA7PipuV4GqBduj1sqZtxLz",
  "key32": "HPSN3XaFeKBWwmLyaQJ8sPS56dGxjV9cnJr55jCw882t5jfxzMhbCBaZ4dMeErPsZjPWEaFga8shuRUQBArWjfw",
  "key33": "2XRxYEhGobbvmq7vDW2HbuEhhequDJWUbuqrqyoozcKBANuXSoHj8iNTdZknpM9k3eFSBGR6ZAs5bSCxQJQyH3bG",
  "key34": "3aknqC1Pg9TJqqznPHPLd8tEqnENKkAyYiyxWnRYFfF9JZbhA9xNAJtF8LTQCpg2qPxWw6i6hDBrP4rtcDxwYBZb",
  "key35": "3AFP3eKhuEDn7DbrwTQahjd2uM14UNv7M6NnqakwGmfox1GJcMX673FvoUHN4V7QckxWosWeyTSMnnNKqJAWdWDB"
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
