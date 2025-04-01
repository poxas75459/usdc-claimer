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
    "4YzqTbC9mds3pZHprHgMis93hF1gq6CPbmkdQFwyBf4e2ctAxefTsRedf2TrKr6xryxr5uGhLPrtuYXMZ2f6dNPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmRCh2B4ZpLQMqEU2GkbUrwhhvjy7vpzRgRhA7PDVafxgXpedQEUQKfjy8VkVuE1R56MZJdZPoXhnJzWRJpfQyc",
  "key1": "kkeNC8nmSyndTDTKGuMr2b71dTCFeSfsUYZJA6UhXwaX5vcj6tfFrXKYUJE2ALwdnuf5xGVVS5QWW7vZM8DmStX",
  "key2": "2qU4KJ5mWtcUndrU2VdKyVkeDkh8UoXLXtKB92ESEnMpuVVMEUQZeLPbxni1gj3XCbEtE9BAuoLSZXtzXUWyZjxY",
  "key3": "m5g2BFpgytCUJ28qKhtrTSLBjUaanV6wt7w6J3B83QUUFTLAabr2MEyrbTSJB7m1ztM2v9dqt5Nb9PYyjrzekK7",
  "key4": "3HRn1sEMMvoiobx4AHj6V3dTbWSAxEtFAFtN4Zkhuv8HMEAfMMY1iTPr7gagb5h8iT1p8qMMzZTHwiaiTzUShgS8",
  "key5": "Mv6kiHSTmCYqc4JtMbdDxSe583vdatm95cNd5f8yjoxXwpPAqjmqZuiq8HUWKps1iA54fVLUSm3WKsLyw4DdJqv",
  "key6": "3CpDzTor323XcTMfFo1pskWajBzpuqSpgMtR1WszwUVGDXCash52EeBNfjtUkxxybZKPTSanAzDiwPSfCXMgTn7z",
  "key7": "5e39HVv4RNw7XGUJwN1Kr1gcJWLQ9phayvPJSw5opvriwv9Cv9xfipahs7v1n9qYCNZg2st8AapPhVfh6ojweQZn",
  "key8": "xrQQzG9JW7n9DGEQvXyd2ndWX7KK5UY1LGwYRNN9YeP2UGQMcySnYmqwCdCfYejG4VLxVHeWdnfUUHL3hfHXo36",
  "key9": "2hGXvkh869CHfNkza2cRReiGfFSFeF5QL4yCzRJVjsi5fkWwRmG1yzvoSSZNeGDJhn393K6L4uMzFMpnwEnA26iC",
  "key10": "2JggjVJNrU3vXCvthuYB4CbgYREmYPeziWoKZgqGekAVpn76poRYWTp7G9VNGae7v4gJ3pALspEq62AUeNo2pYV6",
  "key11": "5m9nw2yjAJE54mpopVVQjsET3Rm7gMkdqZ77pZsM2HDx155vD96PCyXsboutH7mJvdm79wfmjFh1UQvJecZ7D57v",
  "key12": "5EtaEmcjuJU2znvCJzr14zgEt93rrqjexNeCmrrPnd762CvTehH4ab5xe7wpRLCCZAGpRmpjTnE3WHDqTo62yiRi",
  "key13": "2EGkbsi2hj3Hn39yFvLv3TWVDuds9SdCVgeJCY5A6SMJ8BeYjXsX2re4U9vng31rd3aYwLVBjkedYfAaehCjubUb",
  "key14": "1n27xqn2q54B5gXih8gNa15vcsMH5pfmU56uhBB9TdWiqPNsYCsXfV9kn68pam28T3HCYbnfHk2znAsqHLjiYtL",
  "key15": "2DFtkPJYCShXPL73ycfzMPjk6qXuxxGwVMsvTifRVoeTL1xSyBj8RBCmDxa6aHooWt9tQwmXp7rNQUPRfXNAEbsK",
  "key16": "Y1Ss1gNH6C3fXJwD5Y8mHgQaLsxjNTfjytpjkz3wBS5kLA2C3iTQ3KT6GWs9wbEbsL419MHF7gs5RUH31X2SKuf",
  "key17": "3z3ZJEbFomtASvdW9eeDvWyaNUt7tSHR46yZQPRbsi9qKkkz8nyEdv272nu98jmYzKEP6Z6PUFDT8ZYTKwPZttgi",
  "key18": "3LrRYJbmBvGB6vSTPSjKZDGYzd5g19h1zuCcKevh3jESpzqBmaFwLz5BFMRc1vHHe8FhjVSLt89PoG8vsg439NMf",
  "key19": "3XuUmKdpwYUkTciQD7K1d8EQHy4tF6hKJVngYMFL2jNJVvNc2mrRxMj6uSq3mTXKk22L5paP5jGQFV989LANTwJT",
  "key20": "45yZppbmvLjrSh4NWywStPTAbYzb7HwKMFyciFMbXRY9ruMcqMf2ccqAGmYYLn1eoBgqSUefcD6wLoagFfdwr2TN",
  "key21": "2cEnDK1kReNCom3DDLZfB1P6TtFoPiXxMUWzMaePzW9DWSkaHBDsentUKzyzgaQSZAXafaqWfFmi8tx3gKk3Qw3A",
  "key22": "514GkW1RzSW4HyEXvuU3RhKvHeTkUHxtSpPiMzHfhmtYwmUCYFc78F3LvL8TXnFXDiUdJbU3kNjFdsEdxjfETgsQ",
  "key23": "2tCYzYBqBN32nhKCqLSwbxm6NpVSk5wwcfSniwZZjPHrc8UmSV1ZTPMR5Bc8LXwCSytoqNyE3axLj4LNFhdptQYP",
  "key24": "5N7M5yDV1f3fMWjzXGtKyBacLDySZXTNfEP5vNhTsRTyAFRJ9EzGbk8YBDB2eqtCXvUDqBY4deRDVbrvX9YBE5qm",
  "key25": "43J2LE7aEDiK7MtESaDRXxsujz4uB7NDJBTkM5TGXf6MYuoc5o7B3nU2nPNXCXSp41fRxkHvRsrjCDNby7pX9NZE",
  "key26": "3EVZ4VtdZbKwBF2VmG6edt1eevg7WJThhzHCj6zG9FhhJabnKEr29PSEz7U25QK6WFUw4z5aZvKbPxtZWKGFPLan",
  "key27": "5F23SY3FfcoDuwgDFVeJxe5sX9oAQcfjCYJXCezJJjRMH19uWqXJKGwLtjfxRsh81Cqr17YXoSsVnHC4KLRdgR6Z",
  "key28": "21txq4y8ZPLTWKDBvMk4fKfFELqdGrJ9YXarHdqWxaTvjx1eeJkKNxT8eoBPkpxDUGwJfSHpfCU5gxESa8fHAkHR",
  "key29": "2SkgdjNqGF68FxA9yoaayaHfduU7z7ozz9kk5kbX3MoLkidTVDLV794wfX88aGgFkwqwv9ucBWdHXUqqsXLQfDze",
  "key30": "xAK1gbnoHMcfiXwdkek2xyqAP4gK5JG3WVymzKfTCjnjfFhRSn9sGvQqsF2xhwQ2VjpGQA9X2zFHSzs76FK7eZ5",
  "key31": "5uRMLPzosPCMja2RvXVeiz2r33L5uPYgFeA9J2GGVDHyZr8KTXLBUbDbmtkptvWtMFfLBDSfr7Rr1SZ5y41NHFLa",
  "key32": "xNWsHa48TsYtCD17bt25btDFK1ncgL1Fn4w9TN6QMr5dbQKH8BX176EZxELLapkkpJtfiQwsHzZNiQY3CUVNFiQ",
  "key33": "3rvER5d2g5ZEZXLs77jE2vRRwPrw3GYsfjXqFv5gUD9g9hMrVBRypDmXTBYQEo8J6LhfNsBRicDsG2sPBrWQd7cQ",
  "key34": "5MPbkrbozS5aDMFjhiCyLzVorMKy5FrDqpsAF16kjLgSrYif7JdfmJLoAfqhsd9aCAjEz4UBxiLqq2cdVqvGJ2Fh",
  "key35": "5H4noTZSoQjiqxXhEZveEpcrybMvabrrWuapRBJD6TfqR2tnBDEGyZxHZpVmGYjUtVDeCjHa3n9drN2w5rYocoka",
  "key36": "rXSMbH5tsnfGzmh4ugBnK8YUgbwYS1A4WF75Y1ZuXz87jYbnwvRY4Fxu1rVgQ7xH2VfCBoZvs25zytwh3XP8Ybx",
  "key37": "4pAv2u3KqpgJ6bjLoLchnFsidEvLeicBKr6PxPFhCxvMBSv3P3yJ6kQxc6rnrskkNf9saggxAbvUd9HEN5pnnGL8",
  "key38": "3GZFALUkBNBPkB33JFbzSNmTd1uBAedS2SaNc6PxbQBbPaUCyy8we7U5tkV5mnGxj2d9apjeUGLV394esLWz12YS",
  "key39": "54PommKkzWCLgJrdeVzrQWjpRVvshMfwfo8T1REsKcYwenzrwCw1p7i4kpy8KJSuG36yqChAoJd4RVrU2vdMGb4w"
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
