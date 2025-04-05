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
    "gss7zhFykWaUNEQcnZeLaXUcr2YCUggXnDH2H6wW8AQ14wT7j12rJtpja52ioHFUoC4bgrD3F75HgfXEL2PdUxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s1BaB4bNU76xjBkmQWvvqKsVgWwBVyg4cKiGrZ17idx3se78p1AAJzAUrZ1Jmp2HzZpeu5CAzGXGWRwwjRKWFqB",
  "key1": "3ArJycc22GPZh1fhVvuMSwyd4o3mWLB23rScXHLejEygiWkJxZN8TmHxLffnanXhPh13vQZzn2hsEYTMZJYRS59H",
  "key2": "54798fuPmZmMqpodfgMdiJxRB16ypaJ6fY1yyjEdVFfwRsCdmifnuNbDZ4bAKvtEi4KR5YBKYBzMeS5x9n3UjT86",
  "key3": "3mYYaVbY39c5DHJbGGX3sy3Gmbcs37dYT5nVU9aRQ9kazRjn7c8rxwSRpCvFBPWdd1EU1w3pCzNib8NSUqHjAvr2",
  "key4": "23LaqCNvEpXM3vESCFA8DaAEb6nn6QB3AYR2cRQxu4FtjJRBj15cKNqyXraPenjpXJSxdzpqzPgaHjbms1mXuG9J",
  "key5": "29K3EoGk8kGBx1Fkae2GJY8W3EiGSm414noU4SWNCPvr9Y85suDuYSTVC4sEQZhjkAW3VMsnjDk289sf5jtoovrr",
  "key6": "524oNaihAeM3Km2jyRevGjNjv1D4EkeFuPPp9o1SK77hQwr5MSzM1kAZxn3e8dW4Zzi72QnNwVbKU5eWB7Ji9EKC",
  "key7": "24x5WTn3XH3F4bZRzHG4fFhNou34Qvgd4RHYZttz1rQDihXPc8oZBe2848V2jiUFCqSfQ9UrKXgMdfQJEqVk6ayU",
  "key8": "24D6RRQehUZqAHq5usqKDJGGRLSBwDyxs1voqAFQgNoAjyWC3Jrfhu2QwQAhtYrs9G9HZkoVmHnZXoXKghuMAgL3",
  "key9": "2z3ZTUb4oLXVCEgVwbg9CiWksfh6g4WLDFBxVcQ1jrx4EEHYGvN8WWdi63xzXUEotbS1iwTzJPjWQGQD5XNau2eQ",
  "key10": "39cFYVfcacUmh1dj7jbvvgsbV5hNq2Fcu1qSPAHjuEZyq3ahh8THyGsxjPBNmjyXPot4n86yY7uqHENdHBWw4TGQ",
  "key11": "5Mty6vtoWLuCWNSm9KpZFEbWst5djVb4JgCRGTs1NztmicLCybGvXYqQaFd6vmdPR5rfohxLRFzNeK55nCaJRRFC",
  "key12": "5NkqbnPCU2DUwUgbtUGQrHy9vYmwU4tQLNMUHBnosoHygfGx31mfyFP4xynXoBTR9q7ZYUnveztD6sDDnLCnfteP",
  "key13": "3ZdDdJ8gPTB5vhdE1yTrMKgQPgV5xNAnkAgENHTtSZMqbisAxQfwFNP8EY4eXFEveeM1D1DXyPR54oqtzf44eX6x",
  "key14": "3NnnxJW8TAJpzQVb77hEwyxXyaGjkjx74TvE3qVJ3m39Fx6FAhBizCh6WhGAeMUFDHaeF3cSSrJAevvVjmeWxJs2",
  "key15": "47k2dRUXxhTfZvPsXPFc1fgXJJebfvRN9JVj99KcDR58yCbiQB4Sk6nKYMtY3RtDTksyokZK25CeS1XqvPpAphSp",
  "key16": "5WsRE33P1UCdi1Z7dW3KD5WVvmfG47Yiac8VdM9ugbAWGU3eeJrRrXVTEdsEavLR6CaNb1ggY5MxK1uDFHGNc9LD",
  "key17": "4QHGQGLd5gAk3yk2Y6hbfnnrUUNLDvtmyZYp29bF6fmY72G7wWDVQgDT6rfHv1k8ghEVboeG6yU7LVRkZ1yPnHVv",
  "key18": "54YRwDEBmiu9EtfW4YixhBvjHLsYCEbbpGSt7sgTrCsJC5Y7eVYVrWDmMQDuQ3JLXAYyWoH8fg8UnW2sN2jvsvjD",
  "key19": "5TucWP3FFEgvcZYjgwDJiNd7r5hBriqPPxcqgQGqxQvzFEjVd1JcBaR4uwjd3xN8ABpjxkRHAMVgMmf9enMU2mR3",
  "key20": "5NR2VRcyMQVk3zD84ZgQH5TwrhMLJua5qikj41qhLCh7Lryf2Mj2j6417Xt4aDBEiHXHhCVaLc6njkjM12M7qNov",
  "key21": "4HrNNVm6hUBFYGvpRwN7YrQe241u9VZcDP6GpQjgjXLvGWdUYRMRZ8MRDs5uCVCBL9vAJBqCPWAVTBqSGCR38Da8",
  "key22": "4bTAQi6qYBzareFp4njz4XSRjbWofoEF16g4Ra12NWfBRWTmuMXXtjSJRmvWVnnzWwRdcG3GrHGfWqYzymG9Jm3f",
  "key23": "4DWC9gjnNehDxhBsGRyTMrgsmQcPb47jhdNCGbaSLxTKxGEBU7eXJXyDKZxyzgqioeGmL72tMVZdczxqNeNXmGHh",
  "key24": "wr8yNt5KnPPLMY9UV49zG48516CzKrqtcCCui5AAjudu2M1p4DGBQ12EZx9BQ8evaXde3GWF8o3QqgRUot2b1x3",
  "key25": "56DQRbS48Xi8SFtW7dtB4VruQwzE9zP4a3BXhyMyL5RDxnsVD3Fq5yPzYZ6SjgsFJQ9N4zuHoZE1qvvAb2o8Ccfo",
  "key26": "3seY3jn6r19ygWjrdeErNu5eDk7NKjUPfsdtwEG2meyTDfoxPLtgAkBr7Yuft61UZ37Q6HjPMWawDgCSTDee2rSk",
  "key27": "2uQEiwbxj7cLWT9pqLEvH41wgbi3oajnmf4aj5BFw5FWt3qhnPzSJhsQq3xgkxNPqzfnFkd5ZBLexYVuN5zppDR2",
  "key28": "46giFTAuaDUj3tvv9nAHtUeXw4it2HTEK5UWSRWgks9hbHQRVPRNCpNRCheoSAqbza3hhHQoCpgDdUmggo7MXnBF",
  "key29": "2aQaLs3ARcZaguS2rM4mxEx31xQsAfvLJVCm5EBTXk2hh8MLwpceRkRzBLsaM36XFa9AUX1Z5Jo5mA8NQ4oycgzZ",
  "key30": "UGRT7z2uRxo3TmAnsKmWiBjB3FXxJQqF1DSeJddhfXnbDEqe3mUEnkeg17qScNVUdM3PTYuNGuY2KawAB2UcPbf",
  "key31": "61BWfYxSDyaAt1pc4VXQPUaBAr46SFE6eShv2CTWopomrhk9Le5XCAg1LdwPgX7XY3swe5nY3eoncp8dEdq7nETW",
  "key32": "2yFAp1aqduuDuPtrdnFViXLccoeKRJCmytJpMnxxrpnzEgmWfhF62fLitH3WwK63RoB4XhG3nN6LAjD1otfhXPud",
  "key33": "2Rw7SiPLtotNaivk419evktgAs8mc3fV3XXFEdhz8iqhmNa8vU82Y6fVNsQE6G6YQ6DH1BZMMe98DDReF7tdWNrW",
  "key34": "yv5NAFeAYPjh4N8Jy1mjfD1rHywwfPSscdGdxzKLcXDV8GXgkriKciiHcqLn7ZTfSd1zJvvNkPBssZENUwNe3cp",
  "key35": "aDZ613J8KfQVb2WtbSFtFwJM3qpa3jApeErAZGAxvrih49UuH79WiBU7onqVcZAdutN3UssSNAg2Lff2opEtD51",
  "key36": "67h93ud3T7iGfUv1js7RiWY5XGMzNegs78hGGMJae3Xj4XrQhbgo4VZ2Sww7gKdsaVTiddaska2pL5pQgcVHWF9G",
  "key37": "4AxMMy5UkzSUpnga5j7uAtezVD1jZihUj2qgpEEhHPS5yK74S4zVGBAVBHwdpHmYvXz51mXrzaNdAd7iuEo4QfS5",
  "key38": "4HvRhZt3H86Kz7HZmfSH2tQFAZCKdvYC8FiVPsR2wScP7Xk3yzNGgk2aAYBbuWwQr7X1LTktP3xBGtEm2fWu2G4i",
  "key39": "2wv5ezZR7QU1c53gP3nzZx3UDMrZZvfPSoNfG29eg6G2Qrcp6C8yTZRsMfiAkmc3goZBuWLTBcCFNFgM2bTK4iKL"
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
