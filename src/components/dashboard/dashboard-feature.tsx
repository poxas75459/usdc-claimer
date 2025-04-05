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
    "VnZJTXFemW8Mz1iAkHwS3BoFAMki2uXpSk5tKV1iB3xxDsnok2KZEHXVazCcaKxx8SsJXVSLrMyAMx8f9y6HNfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPvknfPDSPKrdooR6ifzT7sJt2aVjxTMvne1evGdNJp23AW2MniHGBq9Kr8NnWvoncufwzucXU56xxuwq9e5D8V",
  "key1": "29kTzwe6LkYaTXXBq5GJqdPAf7WGT1k4Hpjg9hsEG1wosTD2k4rGTu2bg8Q8PvDECr39fHendtDRsUk6X43vQAZb",
  "key2": "eo1hqp8Zo2axyLCFtsjmFUBPCxX4dWYNunA2KhJVN3RcBXehosiYHfzAZZ2uBuH5Yfnz2JeyPGyVY2A4ja6t6dn",
  "key3": "2J1nGspQDZESveGCxpxqBzhy1ti2VtXT44TyXnVDdKFFWaFqfBKBG6dBZXQcMgw9SfvmwrHFt5W9czRMgREr3WWc",
  "key4": "3dGn3BvMgu7UQCiryoZwRdk95TLWL1sNdVvoJjy7uQ8KdR2do33kwbh5DqyyK1jRfbeuRbxAYDpg29u2QLBSCNbX",
  "key5": "4PZ4Pfcc4wZye3b9dtUo6SjdEZr5CTeYvraDLBjxadxJwuGWKPMgk4ps9awkn8CrDZ2mm6HG4bSTFzkQg7kPnosU",
  "key6": "4eHPsYcQvawYAY1DVNUNheGK3vA1iP19EUNcHdqeUnF9hF6A7JAjmokaTFxd5WkkFojE7FSvPP6mzMHEFoopeUh1",
  "key7": "5SAkFz9cak9g5nVK5bLVYVN3oh6uF9AfK2PruP8a7oWyomrWHpSxRru2pheSNbiU5b7oWnceMvwVsUtPQT3g9VNA",
  "key8": "4WLsXEhMNrhJQ9BJ3fxnjXxfFgt3bgNuLvb5gVmCDHUJRmLGSj5xNgrwSTU7nGbnBYC6nxc3CbDrWwd8SDWkJEgp",
  "key9": "zLuB9tahd4uC7LbTZcJDC2Wuw2LBidNeao5EjwwLJTWHXqGaw7nzX9fKnHo8tnccb6AUQq2v33PkqpL4VjvhPrg",
  "key10": "qPYddUP8jn5spjHyRuCe6Z2LJ5oe4HDSXZpy1LDxyCpC57RyQvWSsxzgbqfuE8uQyCsXqSRfs36T2KdkokBfbv7",
  "key11": "5kLBra9i1tp6maVYWF3yc9EC978ybrGAN2i1ZXjE1UYN1qbF68oHBv9tbFDjgCBFws9HwW2UN3yDeEwMVuuMucHL",
  "key12": "4kgReVmUJDcZ1eTkYjTNSExqKBQFqVuj6cL4pDHpeGVCM83t7jDZNm1gW3X7aqkaxu5mEexvczD5WhfgonyiSNHK",
  "key13": "53pdZyocLX5uoaCJQWDbwC9JDqsqfSuq94sNEwtJq6VtaJ3S3dCWu35vF6vE2KHLjKd2h5KAxt6UGEU2EhXk1AzQ",
  "key14": "46dkvTxtRStdF5gPLG9pwxfbMsbcnTW6XwkFY2MUbZD985X3W7oWfq2UaPyfExMdKgbEKK7M6FaPe1ZdPEnUAWU8",
  "key15": "28Zx67sVaWARzohsNs1zkMfXDWYtS3rYMb8YL5wSapq5kbmaQMbFVLEE5vaRQe97rkkV6wqVTaYwN6vgtSexMqAq",
  "key16": "5aF2nwhQGjz5M5yuZxWaFkK3a3YyxktRwMPKVQPsQbREigUnvqgKoJhW5pBvK7QVSkD25TdL18GWywBpoxao4iue",
  "key17": "2vPnnE2AezomMraRWMoJKcVToahu22DDqcSxRbDeWs9kXDXWHsjAhJ4JnohsaGiKGocYQnmsSqFANBGGanXNV67D",
  "key18": "2MTke42KTwFSzCthHnkAiVvkEYB3V4F6q9mbCSAXQoXHqyFhE9JedgMHerzR8imjq2DsfjxoWaxrz8pLWEcV2xgr",
  "key19": "eJnFdPWG5A63ktVFNQBFeWtpYH3Q72TYm7U5wpWKEWRMrb2F7wRMKBt9vJxUyCdgC5RWtpXGjGdsqjoq3kPKmEz",
  "key20": "37D8pCPn1ZnUV5hEjWyjQVwLEDtAkW4XjsGbaUmLU3KbmpVGw8wSCRmzcX3pWDJk4VWPpsKasAqxaMVnNxExT8Qk",
  "key21": "4Md8HDPiwyZgRrvWvP7YG4AE62gdaJwE467hvv2TJihQVqtzcWiyotgQ9XfTTymH5bHSBmm3SDqVTQ6NTpvHgNtH",
  "key22": "3iVYCpbEt5avWfDCgphjENmqv3VgCRE7sgy7hVaNBq5T4SPTFCE8DyzoThuEtFi9mo6bbscj51vU6KimWeWHMuyF",
  "key23": "5SE2WxfuwwYcVefmTDroGCVopMbUgzrAZNYScwSrWckMEVR56HXgDuU7jmigpAwfctTYcXTXBVJHPnrz9qxrdfEp",
  "key24": "4RvqQm2DWpp7wugbXRLmTf5Nrj6NFDksfhf1bCrKff5bZ6eM6RNvgZqbVMJm9d4GtocDQDm5obMUWWqduSMcr6HU",
  "key25": "3DBHErkLYsQgLLfRYuMwGwePTfMpW6eAWPJrS5tuBmFsskRFLdqx3pwtdWsARHs9yWMWZTSL3DFS28BWdKkpw3SF",
  "key26": "5HJTXijznPsmEp7mE2GS9gaQA9YMCdtVVNdXAbefL98Srn7EMjYuui7qm6swuKv7FzPT2UdVcVC4wPYBfSw4aniB",
  "key27": "dFVPpq62shBESGn6fH9vATKGn11nuJsCBLCtyeecCFLwRM3zgaurcJZ8LB8Exj2fsedUBsiavTGu2LR7TFwMpRz",
  "key28": "2qhykbg6dm2XL17maHAwpShbcZ35QXJUds6A5YV7cvDuRhASvTeaQ4bdWSxYgqgHhwTJSuFLUg3k8GdbDPABSTbj",
  "key29": "3BSFoCsNfyfThxv73D4Hg39awqcRgLqm7THhu4k8Q8Mawtb1eJF1qdghVf6sHgyjQpteRyRA7jGQEnweZL48wdK6",
  "key30": "3BBBsmC8w7PiyWEm9b8f1AT88JYCsbP4ApNB2eCk3UiNb7EkCKkQQzMsUbyzWEWayLfVieaCjvckD8vzXc1trgEo",
  "key31": "5efm6qYUcJW3kB2RNas6zrBrDAk8FwHGsAvXQCvxFZcGprBu9HjuF4E3opSTeRVjTDpqqugGS8kNKSjnaLSfDm2F"
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
