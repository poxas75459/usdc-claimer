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
    "3XQkQVoi9QE91HYquRN4DygJXGmjymtyUJhKYFWCiyBDNAAmRgJGdVEhNpQ7YzF9yFTUHNq4odeU3dLihEuVNZPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iRo5Eq1kFrvTU2L3UGVwjJNfJkbD3KuDAf6r6RqLGKPUSSRRdwgg2aXpWUaFi93edV1JXzfPMBwtXr1by6AUrDb",
  "key1": "5vBB4J4pJfzWz6Jq39cxC72pg3mF9SH7kVmp4TRSzMJoomEoc3S48gApP2eJZ1r9Es8Z45huBBJkDXcWAJ7TLQRx",
  "key2": "42Z5AhGA8rogMnyHv3gC5Mci9xZaRj69iKgNThMeyjjDcjRZh4TheWx4aqdJtMPnbGYD7UTVhDbJAn4KKSGPcmJX",
  "key3": "HPKPkSQDefFmDhQefVVd82vp1XoFvBt3jWLqwpJqidEzKApArBs5nYZs3tFB1vhZ6x1fVSVdRb66yvuf56iNVD1",
  "key4": "5Hi6sxkjQyyKXNrp7UYUoSiFpoHnGzoKxDFkvo4NW9u9VBjA6PWh1Rcdvu6qB7wVUwwgCs9Tt6GzpEMBPGj7gikU",
  "key5": "5rB3ZfHpTsbNRJnfn77Bbs6GYmyEqcDRagvgRSrGRJ4jaPaPWtrSXuGcBGNyjqvd9Axp1spHcQTUamuezT1GXWG8",
  "key6": "2Bs2UqHtFLTDhhQXRFjmUk8wJxUGjEuAqHq7NfH7faZYEco7QhGWeRxPcr63whZurbdryvircP6h4WQ4KoHEamZy",
  "key7": "2cahoPRC1FefCTVLN493Lz47e8ZYLzi7NAAVLoPi9gLudg4bvb9CnYQk8uuUtSaKDmovCsp6YQF7BuoTpFrdQU4h",
  "key8": "5YZb2HyQk4XVeKvT27bTGeRPBtibHns2AVAAdqJok4hkeP7kq8WY4tEgYTK6LbrDNy52aTzy9VGuVBy3kbTWa63V",
  "key9": "VomTpYW2GXyjHwqSGqs9ejiWai84fCo6uWFPPgjAZpemaiZdSPQtsT4TP7G7qicJqBYdPinbTx8arVzKajqEqw3",
  "key10": "UVw87XR6MR5fPVKgAZDwUPfkfY912PPptxBDuPMfoTvjssgRNoEqeFqgRqmv53GQs9XL9Rzgx7JP41WCR1HEzRh",
  "key11": "4tazNVbHpdUSdU5QxbfWPXjrCwdffcgmisr1miKVZQX4YE73UpJ9Xz9Wm83ZpS5KMVw5bKvjMbXFwfSq35pWn23b",
  "key12": "2MXyxadyPZn37CZB2xbm5m1XCMdufcqPe6GsU735dDQrxxS3c5Fd27dT4WtCXUZ7dDokqDYNdotys5wFGMEwtxkF",
  "key13": "PfXumjsHrgD4RE9ejrw5dBgDXFHDGs4muHycxRF9kmUL9dJ6RES7LGQpuqJPvnoBkxYm5VqZQqHG18qWxzNzZ6R",
  "key14": "3pxKc6A2uzPftfnMUEJauhd6qS7orihP9FzCQcxdNMcVTq86KpZERVBa8FVNyfeRt89XwL1yLk8rU6qM1E4htuRW",
  "key15": "vzLLd9wbhefkCQC1RRgLzFVxYHbzcGugUjnKbgf7gFfLYeiMSocepgjAcVKsXijLofYqqpVakpGiVUMiSwB16u4",
  "key16": "2ApZ5RJbtgPGptVxCeMBzGJX3cVrgDLUGFRzQPJf6HyujVqRQu79RuMfWoDYdx85DKPFhtqGnmp5zcBZHrZ5hs6r",
  "key17": "4UDpuHL1EXwdSQPkT3Xgim8xkDKuaK3xedGzZh2zDZtoJ796FfpoJkoZRNjHaCvjMzbJBNMm7YTMAKZg6EUjMYtZ",
  "key18": "2arMNJ79Z8ZDsCmgB8vUCcRA6g6sJX3hfaiCBwETCKC22wVybV7D8nxrJMVXX5w1XPWGzaDfFqCxZiGuQCkLJnur",
  "key19": "5Cv3taih9ZiQ75yPrKunLcR3CUsNjbqhARsiU6x6FVtM81ZTJaJ4Hnq5ELhrvjDVF6VxyGLnQXqxqKx85Q5NZ1tC",
  "key20": "3MCk28NAEEEsnVe1uXD6HD4EhtyTV64hKN8Z82URpTotHd9SjWxJYwd6uks8e7qF2DwR4hQTuZFfTDgxFdHtqgRm",
  "key21": "5HebPDE97zRBDzZL3v6iCXGt3AfEWPXcSJPVeSUAL6H3MKT75Gc36LtHC7jRirkC3yZ1DJYrTJHRDf95ApsgmE92",
  "key22": "z3hZm1a3gsmraw2EgTfyXEEkRXJSmerNjhaT8hCntxmsYtoT8SWLer1ujKVMEFSDVL3Mi4dwx3o5pCXbEHbmxo2",
  "key23": "3xUcXAcvvvHMY7ndCxMW5PvXD9ihtKLkdFhFe9XQJh3aWstdW3toP65bEPPeHokpP3Q7SFZ6GAD6WqCUiqYhTMS4",
  "key24": "3iyXvj2dTAWgLGbUVquEFQgieZXyTxaqhAqCnRKHS7D4DQYozF5bNKyn9RxTYZ61bvCbhCxZXCJpn54A4FVsAYum",
  "key25": "5xk8Uq443ocmjdXaZYvXCAvym72Jn4K9TsuG61WwKm4DixVyWsP3NPRpKay7RDv8rkQSGFvu2WK6aS5pM1xq77Zf",
  "key26": "2urPmY9xqzDDAnC5P8idXoNTzSpX6bEcNFQudmBHV8n4ZVCqxUR2WVorJpCwciiNS2ZyxQTxdQv8MXmvRYaG84BM",
  "key27": "2kth3t7AKwgWJXwweefVKaUgECwG9e5xDBXsq1ckaRsw3gN62Beuvu5PimY58yE3nkDyaPsJnDun57ELrYmfSndE",
  "key28": "3Dg1GXMXTMo3ieT6v75EPrWyNreBNGs6umyf3p4YW5mGPobFH6qUopjf2SUAJdwQFfaL5wtrcBzPKwAdjnTJfjDB",
  "key29": "3Zp7B5h8GsP26pDWtagmbNLYdAqBfHi3mp6vHjw1XMSKzmH7L43P8PztH7V2kjQEZoihJbzduxSk1vEVhcKMd9Rg",
  "key30": "NpxYNobWPUZX4hNq1VuxUkXnvULXdtrZbnxr2sTGN7YqMPaEg1a92B2DHEXeAzb7KqexjWmj6sU9gMzAhvDyZon",
  "key31": "5hsKnsQhNT1Y965dyagDNQjdDasPc3UxrDMrcirCDoAeHo46ypNoqz2or4xojKasVsbhAPyEu6gKfjVCtzHtA8cu",
  "key32": "5G56AiReDhXb3WRjYi1wzScVrKjspro4w5DgNBiYPqaiFiLZeBssN8kwgGGRzfjMeRpWzxqvAngBBfwmVd8ikXnP",
  "key33": "dEXJGHH38m41Gny2yKngstL4RbaSxGKwWKWEf1hTDwXc7DSyHavN1vQed4MmSFaYm8ghsAb2Eu3jsiKLCDS4CZ1",
  "key34": "5xmjEu9NVNYB9mmebxvhJwanTdar2qvKWJHaoL5NbXzpyoVVHgFKDQe91BvJMtyyxqaKpiKRYst3qpk56ptKyDeY",
  "key35": "U6RWspc6Jqp3FuXQ48horUCwovrABsQPuzTdViwT7uAtkCKozqC1MJeDB46DePLNXa9BgyACgvXymRAbV4h81ua",
  "key36": "5G3X1tAmK4kg6weWrc6BVDnnQ6GNmsKYs83gw6fAahYMK8SAQUbsUr34ThztzXcpP4oNgR6jGySkRqdNGzq1iTUc",
  "key37": "2cxxV7WuakH4ZLfq8igFrkDBgLEkcp6d65WWHPh4n3TjpvSNcwazss1r3mWJsFnstiWzsx7bWCJX6A7u2jx6yQRa",
  "key38": "fKn2nKLqKfhWEqiVoRrKVvSEjqDm5BFhr1H9KXresWmsLtLkokFHQi71EuTodkozCS5UtkcJgB9h1vifCjTk4z1"
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
