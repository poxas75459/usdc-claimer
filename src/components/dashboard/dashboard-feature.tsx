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
    "ezAQh1kyGftKZCi3TM8smAYAmJ2N6Nw5py5X6r1CtJsw25tRGjc2BTHyh2ZZcT4bdrJZ6xNvEVzFRw2yehVhPsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KikdGFyWZA3J1nmd22ELJY2UBbLUnqDVvCxR1iaJwRzdQMB8HqjegGXG3RkC3LYLK8gk76Qan41N4S9Q9rgcVNZ",
  "key1": "5P6vrpmWq1YnJNn7GT8CuWZ3dJFNW9nqrutqrbfRFb9a23VgHaMSnJekvQ5EHJRuXs5dcMrYGC4Dgx7TjQMWRfKq",
  "key2": "2pU6EyZ9jwFMYC5ZmceKWHc6fdqmzAFQZVRQPg3xSsUjCWPvnKrtRaHxtCz42Q19gMMotMmdYjGZPPx7PSvNHcbW",
  "key3": "277Riy2SnKiUvLCqbarfpGxk4RYxczRHDaHZnpBTQMe8DWUj6zFZqNCV9wSxVwCeL7J74eyLN2cqHxCa9CdZXDTq",
  "key4": "58JosuNYxpqVELEkKSx6Lsa1BgSdw8o33GMVdKUvZK7bNM98U6PFCeFChKbLRJYKckRwTfBQejpQKChfFhwvrfoN",
  "key5": "2nqp63hzF61HeGfGexV3US4Pw7JJ8FC2yAS2vWwmpYqBuW14n3uyicu59DRDyzYGXg9EvumPoYqHxSFkioejuZnA",
  "key6": "3Cr2scwXA4gFSZTsQs5dtcLcbbAChrN8dA3TkXjD18fo5yWgjbSUEoQhRHpGFGBL2FEWJCNDShnSf4UHqiTbkEcb",
  "key7": "23knN6mj1T4PWLLuTGAjgm1jPCaJXUvbqRJAMuqTCZx2aWEjz2dyEnYLkNjRXvT1vCu7k17VbpjSPFBacSyDbJtp",
  "key8": "3WxTEAYF7KR1jXF3s9gbcg8DkKYRKgCdG5ncFRVcNzNBW2qSknScqxaw6doLLHhMrwMuJ4j8YVmfxJj3mTH16L1E",
  "key9": "4nRpY3KmAvfCbM8LscZUkfbpNX6DMGdVRugSSqAyJ2udL1TJt1icXEYQmVqGfuyApMsraF3yMTWrKdJAZUsu9qU8",
  "key10": "3EwtJGkvtCTUKm6JFfrCa66N8vkU3ryrYTPcxfzqne2zvKGxEK3uq96mQKdCRYFSfoKGfPi6hwbYB2z4L7CuLfwi",
  "key11": "3dCoMrmZwnxJxfG8BYQJKvUKLtJksnaWSSCZm5GzCcbVSuwXLLmxVR8VA7Me3aayxgajY3TvdySHQgwnXMnXWysq",
  "key12": "3BeNKj5kzACvtdDMooqKszXP8iGwdvqfuBjEKyxfWkcwbuUSNZTTEFykB2tX4pkqGyJ7BBRkN9r2ZvWw7AybaivK",
  "key13": "5arEv75G4EYYdXCbi9RemFDMA4CszTeQe1JtZdV2riJHBmWAMLz6VG4knAU8KQUQG1VNQzGTk6wLu2dL3VSvvEhT",
  "key14": "3kDsCsYQ9pbLXy6qz48rZj76dSaMm6SKGb8SXbjLmJHxjgxbjQBJkt6vCf633koG1g8PiMEZd2sq5GnkkAKXKMAg",
  "key15": "JLM2RqMTSJiVfdarEAwvHHy4LcnCostcfggiUqfPVVYLtaBnHD9r4YgmaqGeRDPs1YbjUdDUTHzgs4oCcDt8SdB",
  "key16": "5Wki7RzD9idLaxA1a8U1gjmaHquoRNwWDgBY1UAqzBzc6ZgYMyZzXBMNpLzXoUhwEmWvMzaoViP9TWnKXLCaJjDD",
  "key17": "3nGJ7YyfdejsoABhTGuUBEnsPaNm7Z32gk4nZDmFyNi9NrCNzrXZGtneE8xnmqi5owqrgPkhCd9boRpq4u5JstC",
  "key18": "4fat7Rywu5CzoKSjXbC4F1PXmsEeoDwStRBQeVaWg5Cni4Z2p6qvXeA95GHD6h4WaBW8Zvu9aF2Dg1J8Ju7cQPYc",
  "key19": "2Fst4yDoPQdeAmw1GSEfEKwF9ajiLXBV7RtreyiNhdVAcS2PxrR9Zko33YmfuDLLVJxDUYCmcmxdCAkKMuJTm6SH",
  "key20": "3fAn7aZgbTT97NTfxwTs4zKPEJjmKTCYr53ydvVph92wh75KPvtT79YyxiBGWoEeJ6M2gUc74NzanMoHewNAkQ8i",
  "key21": "2GF6nPKGcUisSRrdxCAVhJ2zKjgKgcgMVWgfQ24GxkV3Kjwri45neWnHTpTXvLBCMSJUQjTnmizVCnRh3XMZr4qZ",
  "key22": "3gYpQLsSfznj6CwURtYFeCHLGBNM3yp6htGktLuQ4PC5pQqGgMLnvFvpVYZWDUs155Pejcwtp4UETHSAQtEKfW2E",
  "key23": "2RAQBioMNZEFEeZeE37s39SZJ8s36nkqEmNTSNq8hDXc4dT12SaYeUyU57u3rnxk4u52a5pRzAF21QoyVwrmoiHA",
  "key24": "22tJpAtpAoPm6pAuQHu6hFfVie1mFemYZ9KCwzj3JyahwJ5QxdG4eaxXmTQ8eh4d2SZSbkBg5QxQ1G5U2Q5vL1Ek",
  "key25": "3aPQ7wrkUESmrwLa3AKNTQsSztrgTYzT67Ys6iWtR1HKwenK2rUauJo5o5yNt67CZ2WifpwktZj2gqbNdtCwtEjE",
  "key26": "5BpwCdohhtvjLGTWVnDH2DrXkBWMr3CYtderDmn3Co7Ur8CDFfDuYSKXj1HZED4mDzGVJNjuQYd3noVoUNBJDJpt",
  "key27": "67BLVM6dyUy1WDLbX54GbiHUvoyiRgeZuJwZHaT8YFTN7ASJxm7DuHL2cwoBBZUkzzQ42fReeeqNssUk5k8vTS3w",
  "key28": "4Vz1QE4jTqqxFSFRmU9ed78JccNuF2hyBLosTvpDLb8a4ae5Z5uALdEHie61fX6NBZrkaYW4jy1oQGjTN5qoxp97",
  "key29": "zvvdVR1tnb4yXQGjGEwJ4boBGoqLaoaupFLSKE1QjX9tBJqcoSzVCWumgBdk4dF6Nxu29sU5rEXJQW5LNBjMboZ",
  "key30": "5ixZYDPdU7Jk66QwaEMZU6TZQPyDTRRXYwuRV5ZL9KvaRBUUsDZUkZFLeXMLVvzf5XiLdCPwzuKhNoDqQgubF8hT",
  "key31": "3FZ5nZR4JPFvUKf3psQ43vc4nGUTSPN4ARyJ7EdDHJksThtm1TFZNd3Yhp7UdJRDuQtwYbgP8FACXi7uivzdcm5m",
  "key32": "5QDY3FvwUWGwTk1iEfD6q5ZhH8jBYghpwCYgrKgNeSUuTm77K81qrMKP3qfxFYB2y9hEE2axa3avYbDBakgdMNgE",
  "key33": "KGfKHEhi4dqtUgCFCotHVarZbXaoW3b6ok5cdeLFLu1kFSyLPcnCbb3mv73mpRMVouTAC4KNY7DHMA61U6Fuwgo",
  "key34": "35hkWghJt1Z1bDVNyTNn3HULtx5b6JAoDQQgvyec93rbiwZoCT3BzTyECQDcTPp9qg3VLqDium6fixnCgh6pcAva",
  "key35": "5U8MF7CQPQCN3Rm4X2mfS7M9DPy7H2Z71sBdzFPF2iLGLNSDHUi93FoZfxxaqk3ApzuiPga8HZuyt5Moc5699dnC",
  "key36": "4jckQoXDf87J9tvACZUE8TjhRUDjX4MgV5xnQ8rXiwf5HFwHH8L2HVZof8cqQNvJAUyki87RYa6dhgJ894havkX9",
  "key37": "5FB4hD9pEjfcvsJqJ7x2eZEwod4qJavMuVfuA7oq4digtaVbgJxXzdJWYRicAzziEcKk8pZTaxFbpGXEBNhVukJT"
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
