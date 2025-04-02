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
    "2zAGdr8NUbniW4khKHvxasZ99oVVEjqyHPCnc2SPvNdq38f4kDFMWnCBthaRNP1Nz1HCgqjJCnKkjStNoKWWopJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KLMy5aNv6s9AecuhRBS8tLcXzan39JVs3ZbHcuKrY8gz9YuVpwTJj1b2GKXkjFehTrNxQmXhnzpVkqPfeWrxbiP",
  "key1": "2yByR8br6F4KThGiXmaKeySR8EYdHujK1nnPjVYSNHGqK9XDBvzMuZZ2dsGwPoL3PkF3DnRc92E4X3GJG6opZXGW",
  "key2": "2pmqAEPqsLBFmMGbSStmHywJETciENvBERts8SaQhWKKEE8YeV3V9JK7UNYr8k2pGDEqEdbVVZbBfTAWsKoUEuL3",
  "key3": "53WpFzUh6t1d3acgdp9PkUL3KHMkPFK1Cbwbikp5QfLWgP2QCL3wZqFud51bpRzeW4sSWGtbAMUq8k5u2Lj9dwUy",
  "key4": "65fv5TxQ6rLMyRm6HFr6hkAhpHR5NMtW2VvLo1Ko9ZSFVsYndSJpadAChzKJhyex1hSWt3XvQr8iryFJVv12TpC",
  "key5": "3cZJh24R3cYE8G5izkmaGB5cBdqg9HFYgeGpVwaC3ADTn6ngXCPTjTMXc2uNnTeGBD77DNgrz5LbWL4q6mJJepCo",
  "key6": "4JnoibF6ciTxW26Jk7qtsi9PQqenWC6Dz8pmyZGf5WcLspFD2sRGEQJtSHeQDLoXDTbkrRqX49SE9weJ7qBDizLq",
  "key7": "38ToG5fQa5TRF4EPxQ1yzdBNhK2R45kWnEum47igviW7gvkkvCY819oMiVSKyD8fhQCefSTceCsgnzaDX8VsX7cx",
  "key8": "4RbqyTcAuqyMwpMXEH6315SreqgBVnkWvA8AWgoNFGJF9qPoh6NVJbB4VeKefS8Y5VszCDjLcd6R8Et3qHS5JUPr",
  "key9": "4dX4HLuxk9o2VzxVSDaJCpBx77rgENrXFJH3R4skCjjw64tSoRZtUZVjGo8PEX7BjaF91rttkmJ5CZK4WUNk7BHg",
  "key10": "5w2ZpMGrMbfmEhAaTmxWoMSCmLhT5yu1XdDaDcgMETZ4bsiUmzefjLZ71BTVuDrTZjPZEyKug9dmBcesB9HKJs9",
  "key11": "2DHPaaGHFqdzVeQpym4xQvZsJj3WG9fBVFV52Azvhx8sBdNRWUiog45u4C62kYW33sRcdPJY2F5cqKzgxVk1McFA",
  "key12": "2KNq4Cgv6URNsD3pXCxXefCLv1QRNNy2Mkfg99x4Ds9f4Kj6GMWeGWRvkHorjbLBHrMd3UPuQPzG2yD4eTnmosgM",
  "key13": "3dfqPpTm2LGc52vAhmLDLeuAET5gQbFNG9jDj35G4fLeuJs89sKhRXgBHr58Sg9GcxZDA3R8M5mEFx1nUn73y5rd",
  "key14": "41Ub6T1PufQKRnk866QjYMve3QVDTob8aFxEsMXbbg36PKvBcFFddh9fDDZyoHnfMBikkuJwEVgWQkjGeu7LigLz",
  "key15": "5NWydY6cZq3ewQY5TLCQ8j5QE5udXYJZj9VZVwAnUV1SZftCDZKuWsfsWS7q252ehTuCXzPgsMupMwWC2iez3fVP",
  "key16": "37wmy5mtKNJewG5rtYYVLZqvwM8zXGxU8VPNx2uqfaJzXpq2wfiqEeijBNWEpUWsmXPhtayZJoCE1Sdn15bnCran",
  "key17": "skAmZP8d7aSTAwQwNGKKGoDDK6khVeHz2Swe6yXVdSkm5PFueTWLodXoiqPQBDjRPfwQ6kMimUpCnQReJ7sGYGK",
  "key18": "7JGpAWtLBQGCR42nexaCarCQSeRiLsTT8s47b7oYdugFaFLY8TWSYCJCqSwpNMcX1VGS6atTasfp2pHfuhKuF1b",
  "key19": "3N5oNDsJPziiPyGNVsa5FEf2mBzxmu9abDXFpx5YnyTcbwcRaWo31DA2ywkZvAcethpSBhLemGJq3bvgEsRP5UjF",
  "key20": "AnPsDgqHbGLPVxJSaYgKKDPbxmRiP58x89bJTNp3ayM7rvE3P5K9HngwBUW3hqnWAwFpjjcvqRDrT6S2w3or2Sn",
  "key21": "5J6pXixTtwLJgWU6YrtT74BY196M5ceWpQzFX4S8XAatvHtvYzsCr7igBH22meTYCmKE2w3FJJVWdAgYiVGjxPHc",
  "key22": "3hXxXAdk8qCJCnTYYWo5Q63af3JidLT5WJV14pFxZgA5FMo8y7C4JEH4CPSHhQLoXSRhaDcQshiyHyYXT8x7xGkx",
  "key23": "3CRDs39wojeLbP9XNgrvd8gAivg9gNoZCioPQJoVnceoYisocTLcKdBaf7enXqb7HAk2bg9XzrTtQh44Heb5yMTd",
  "key24": "2ydtNPZWRmzZh7rUqaCPCKYvLPTTLrcryjY51SjLFxmPBG6xwMqJTwF8xssQHMCaYJZFJomS9d8d7VyMUi1G4Ez6",
  "key25": "3ye6MyMHfKxoiszDMJMA4qfpvktTq6VtsZLJkxGoKzaUPhJABGAD17vUhG6y57DPTzeFC7h4T163n9ZXAENYxpgJ",
  "key26": "4xEuPr8sZkBwSnyHr9bxdAXfMNKyFvnTWfgc7WPnidNLbq1UNTzyYXHHgA2zSM1PitM4Cy34D2MBz8mhXAxWucmx",
  "key27": "2375qNj6GoyFWegae9SQ6dfvBNeJfHYVNNEkhAzYtSDUSxQGUpJqVTFYiv5Su6RCX2UUNi2Q3diJz5Yb55N9HYZ5",
  "key28": "ZaVEnh1P9GDFxs8Vu3nhcZcnTwk4AJvkRJL8SDatBTfP9dBcaRuvdocpDhMPVVjj6g4ji9KKCyiGGpcoPUmcbVT",
  "key29": "R9chzLud3uZzmvAvFhLHb5aZLATUokbHHvafjHey4CCq9w5goeiSxuNAjFtghGwfa7PcxUX7dRSRjPhsMioSRT1",
  "key30": "8DcQETbhf4FEGzWpxFCibKUqu8QrQ8saGPydjnXcAykiNCyyXHYBuMJkkJvtsuR6G8PQEE3G5eeqvxdPXu3LEBr"
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
