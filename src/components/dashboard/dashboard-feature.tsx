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
    "22EBowsV4Tbzbn4RzD5WbBbcp5rboW6GqZSJe8L572LxKSSnT4hk3iKwHHm3fCM7LGm7SpZfwPpu93iUfq86Fhfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PJKZ3UbsUiz1euN4g6mG3sGPkViNLTpw5SkT4XjDskjjgXZp1X377giedWAjjYbexenwy4Zkcea9Apjage2CGSa",
  "key1": "45fQR2isjEaxnhbh97SWDTMcPA6Dbnk5WunBJKAAZSjJ4if43ej7gZBsnna81PSt6N4RLeNr2Y9gTven5AzKEtUT",
  "key2": "2aGB8z5ofQao7dKCYvcz8rgc1o9mWBMpT1iM8Q28kLzxc8Z9L3JS3XwVbaBB5NhyFTwMB9tZoMRSFxWJFUEg3tpT",
  "key3": "2JfCEFpKXy4LnjiH7CEvEuNbkymZCq7pYrQz7gUhAj8AjTBJ2unwoMgAzMTC91CB55rPYdrMveVsKtrbMoqrHCbz",
  "key4": "2Na4XVo7yiuH85WUsBoFbyorqadMadL1HMg7ac8uBYmnyMx8CnakrFQgjb83sZbeNHRJF2kQaavjhWFAZbr34TGn",
  "key5": "2qeoHievWz36RbHD1XT3n3UBFgKmvXzVKWMPhjebQJAjdSBMBbb9TCV9aZUpyZjRz3AirEoP4EL9e4UbgSLyBk67",
  "key6": "2EnN3UJCWZ8iG8rYLH4goFi9eTVQofrHV1ffg4Jnymqx9uysJdzE7wodHQ2muU67pd83w3KkBsbKHcs9fkE3kiKC",
  "key7": "2qc6zoC5QM9wTpPsb7FtcDFAfRuMCPAFgbLCugk7t9dqBgh9ZxymyQsFZu5HF5aEpkXGWHCQRjsoVT4WXwt42jH",
  "key8": "4xjMnwF46fB1shhhgNdRGUBh4D457XRdyfvPRuiLkXXyNfE646APwPpiCGEszqakwSL4qJCN5cyDeHvLr2DkwmTg",
  "key9": "5ESzbzJ2DwsoXt9FjF6ATuxTzSZME4wizfuxFjDKXratzZcmSi5PP53oe9NDgJW9pUjBF3qt42rynH5NuKKtCk1e",
  "key10": "QMSis3r3r4k76QBkBFoStxden3NwjhtTAx3AQrwPBxaGNc2ZkhgcnFfgXo7b9FbssF2ZBUTPA2t1qKarH3nZVya",
  "key11": "w7MYYrA469ozqcR13s17GDz57d83NSWJvaTrbZX2XDRc1WYB8eYgxF5oiSi1XN2szxmiyBfgUUBaGUU3HNTChSv",
  "key12": "3ZEvdD9pjUbUUU4m2TMAgPKwWLBTWZX4VtX7oRqpBueJjZ2CtbCqduYQUTcxdMKZNEqN9JnjkpHVnVnf15urrif1",
  "key13": "27FGJeCE6194cDxddNbxXE2HvnWHyMp9syeNUnZtUr24AgjWkpPokpfqJYpN4zWj7JyvSjQpViLzQM9XN3Q6mywv",
  "key14": "42GKW49fxfSM8sn14M9xrFt9i3mNcYqZJ5s3BnJDgW17TK7Xq3AZB25Sve7LVsH4uTN4jn8KAE5VA5bwkmtJKL48",
  "key15": "4MtnrERWaZpKofT2XAykEhzDXPacVEqDS1BKUxX7K1bVHy22hoR8Yni5B9chd6qbgcGYUi5hcdLkg37AD8Jsoppw",
  "key16": "42cis3MXM4DeD6a7NvJu26H6WTd3ke99LuuPQAavbUtFnhF8aDJ21q58Ap9nXTvXRzXr6AwgYZrMJEzzu8LcTw2C",
  "key17": "3BKEuhKfQJVRdb5aq68iHsSrumKqXzqr11jJMQtGDtQRJk7rBshFdntfShrV2V9KpgojCDurytWwVSHFSS3a2n9V",
  "key18": "3ZVbh4AzheyvjUUGNXFNAB4qLQz3cpBdmoTKmHQ7P8Qb94VE9q4f8bxHwaCKgncpQDCfVwXXrsFDe8Njge9fkGtk",
  "key19": "4GjwRsLQ8YLwqLYAkmg57kns4WMBaD7HZTiQEpcaeA8V8yTdDZVbUvBuZY21e5RtAvzEreK5LKNeRudZEYJWCrEu",
  "key20": "4jZ7XEZSoZf2FBGCpkHM2bfX8R2H1AsoK1HtB1PE9QyJRcyRfnu3pvXdPH4SyhecDMnAXgo8xxSkFN2RHAx9JgWb",
  "key21": "3AbDuLw9pqk8KSfviPmPtHs6Shcc9pSyPFQQoZmUbrxBn2F4aAG2ehcG9iGwTGkXh794atHZ8oPg7aXRsfLye4Kd",
  "key22": "4VW3cXJ1FXNjUr6pe36RgXdLzEJKUxVVDkdLiHQZFtGGy1Q5FiGcArpYc7dedakqzHh7gPwHN8jDdg4phyLZWd9X",
  "key23": "3dxnbQRxnNP1JgKEoWEZQpFAJY1Wq8dbxCUM9PJj8VsN91eDB5taYymhjCvqAtwEL6QL1HVapH9xMGHZvrZaDfqT",
  "key24": "59tQxhQQAAwFVVUwAkepX9g8n55DuVgCKMCtzHhBETeG96qKqVqrF3LKXCt5AHcJHvoH6uVtC4PMZWrZpgDNwnSA",
  "key25": "3eyqnGjMF243wuRMQrwZnraPyC94Dc6kRCtCf39UPjrUvyYsQBDSX1pdNCgc5DaXcowHM9poLKgSHYHWD3nAZZJh",
  "key26": "2kZNUGDNZ6zupbW4gC6XX4wxbdV7oiR4C8KJ2MxEJPUoYU34gPRQQv8oKmrPaQq8a2Ko1dxPxDSW4PM59kMRrEG5",
  "key27": "2Rtq5wsCj1M6KTFHmzwrk4yKpaUwjnJxS6rn8hHa8uxrUEHSACfNuJe5c7vi5x6K79GUcALivwo2SbvWjVm5DC9s",
  "key28": "36eGGyMxDoQWnSrFw19xAZqBAt6mjJeuT95doxaWtTd1nDGrie8JYCCYLJtKUBQxnRL7zX4bjd2M1EYZ8e5EJ3h4",
  "key29": "4YrYGahyhdCMAtJspuYoAaBBEV6qTPAJarhF6WB1asbQULWNc3rKu8Amg6NUAZXQrccib4aRCxYZMeEJajvbQ9ho",
  "key30": "4NNjgbseim46e3b2gJRhHWVBRx5QVKuYt98x4fufxk5ScfKjTS5KzimGtHw81ZUV6AFRz1mTv3oz1KHji7edrXKE",
  "key31": "3hFbKokFdvDSv55qeUMYKFBVRfC71CYtktfDRVs5GHCYfqpRvuB1UN1jhSywBoGESVsWiEFETa3Y3CRut1grrzcE",
  "key32": "9mxsb5nGwR2CteHeU9iHeTMyKX649fSce6YrbMYJrgvnPJFNJTnoeutfqW4ugcyjTxS4HgqrnmBnEegPh5PLJJM",
  "key33": "3uNToGyQNY9fGZWe6GVDCcQ8ddxXdXTLMVSKw1YKj3YVbxMMtWgtRVguiXNr3tLSBL5VpD922N9KiRr4RE5LCNfm",
  "key34": "2eJTBcx5QVfxv2p7hrSpd3aamKXC3ShRbU3k7Y6EP3QZKgg42QfppwWKaVPeSRRHnfBpbM9QGCfRimQdtot9NU8k",
  "key35": "2z5tBqffCzxfgH8un6T2Zkms4Q9uYV6G2jkE1DJhFn7CnE3ZgGHirTqQdfKR74vNHPwLRt3i6bC4bUyNuuJpwrG6",
  "key36": "2sfzqyDgm4BsZTgfq22tMbk7aZtMtHgoVSZ9GegdjW2Xgcxj4ZLoGTEcvq9nqefY3o2kyYs5N8SXF1nDTH74TUmm",
  "key37": "zwFxfRi6D13deURd6Wd5HH6zzCJHSdUdFvEcpvburnYRpnKps61sTks3w6FPa7V8ATCf9MJKWdhrvkNnYzh4XJN",
  "key38": "5nivKBJskFWDATkBwNzW9FGr6cohLLDyNMMpNMoxG4taNK9zh3AbJWr6U7f7NjmKRAUNNdsjVR4bmpUm4mNVSASw",
  "key39": "5B43qHMhbY2dStsb1pxj2VimJeXEACuQxHXkh7LztL5tE5Gp6KJnNXFWrcgyo8UQGQEtrSwEg84vxVytzRc4bmU1",
  "key40": "4BzkXBZFuWASMuxcyFW6BtL7t8NuhVGgRygToK42gAFSvUmr5eEPjWbTPovEDPCC7CY7gWDSt7uhu9MrCPfAvkPx",
  "key41": "CkdNkj4rt8N1dBhf5BMpVAB13WxNBetdBmtAHAv5KqubN55qQH2s121P9PdGZAKHCabivepJnbyYX7drWASivqP",
  "key42": "5wx7E1prbpXcSjSHaLczwC9WANLFrMH7KG7ds3vvqH3P7AbnDRdkkwbRSerW1HMkgbaVJE6nrgqs49m3jnTX6MCd",
  "key43": "EQMwnYxmD65pHDT6fdhxmy7NeANBSFtaFGeA265EV6JaWy8aAxr8LJ9gh7NxLdsZhhmhRxsrrozRDiqxDB5M3RA",
  "key44": "4qzp1TxmrAMwcmFAQATYEDxZ4uoYGGaxfKWnostFrk1pXozF9hrU5QqYPRDTtfLuXxaehQmnn9eCUndgkEHhQJWh",
  "key45": "4N2kun1jpGWxpWpBqLyweiEe77RmBVx8cTRtRnLA11nJzuk8QM9xe4WqJqXp3npoRL2NnuCHqDAE2Wi64C5hYVQF",
  "key46": "5Yk4SNuog58wFQeUjcJYXuUz2EdBygJ7xr6hKWhtBGHospu4Ev53pTRcm8WT5GZqRWYsWVvNgNyitRBv7wHf9wNi",
  "key47": "4PiiNrpce6jpAZwTs3TcAyeYJaTHHwqQ8XYRDvqxkr6NvdBn5RaerkXnRbtWde4JKYdx61yfhxHARr8ew5HeZT27",
  "key48": "5gJ3ihWWGT4VCCSGBw6qEBUmbrJacPjkod6GA9UfDjKhCMgHHFijUwkaYSYkzgxnBkLkieSkpnXpcq9k8fTcNDoo"
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
