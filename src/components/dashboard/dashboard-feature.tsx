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
    "2NwUk1Uxps42DEgc8mUh8PSSnPiJQ3h6cBpUtUR1EwfjnvYTrYcN3w4WwVpKn4KcLBLpEP2onth3spDxr4ESYvrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iZuXA6EBjVfbSKowgpAV3B6rwpcTrTm2AFkZchwLzmqhRdwNXnCzJJjD7GKWKtRvW3wCsaH48LXbmrJESxTAH27",
  "key1": "zCsHFfw9E6t52ngpZP5Q8FKpUyZYiKiNGLLKkyBrt2iznf7uvwAo2LDR5riSzYSjEdcAHP27NfGdazehfnKkAzp",
  "key2": "5DTs1uP41TDJieGasVHNdm6g6aL5C9VXJ56FS74DFMPoPMUqX8frfms4j7HWQT7bwcgNRDPB8MZpdkGGAznXdG5S",
  "key3": "BiZ4BetEGhQCqch69hUbmCGYWwqjCfRuWP7LT1kGAgQrmzdYrRomZtNA7fdYPauxpfQg6bWjFPWnT1MtL5LSeF1",
  "key4": "3qcFE2M3fhXgTspbXaxmJdEWAQkXBkTKW8ZHbgEdpPqhakukxzRM6Ujhah5ddyoG1CUaQnCQFY2HnfucSgWec6JL",
  "key5": "5LpwqiCApuHvuKzvK6toDqSUQpGjC4UpqEneRYuAJ5hdAipwj5aj4eLUktsKEspXUXdWf7cGY4y5UkjWaM7iJEe3",
  "key6": "2icMhzpUbpmgbM2ctXfEbZSRDyr2PRkgBCwxZ83DDKUkkmAPTnhCGf3Df3D5tvZjNey2wBrFTWNfiR79PTmDfZSH",
  "key7": "4o3mjjPaJghkYAaEidkrgnxisRgirnW3an1gbuyCHp56mJinnL3G5kwG78yDGr8L3QpSwJ4S1gKugS8DjzMfXy5f",
  "key8": "3NSMokDmAqmVV7vZhLchsV7Zt73MRSSY1WGCTXuWv6v4iL2PyntVC7MZ5MfqQr5xrMZSs9xJYTzTY3bJdQDxeUMu",
  "key9": "SjLVNMDZYSdtCFTHpyebhRuhbNWp8t9ATwcWBY1b9qwFzS8EusNYhvGXmAVSErHbWAT2Y4jZfmUumNQY7CvbUHG",
  "key10": "2y4ohagMwatGbw77DgY3t8dWQUhPzJSVN2kuJnAnFCvCVuPriyQNAy1c1BcoX1vPmSeA2AuE57PbXmkRQAVkdD9Q",
  "key11": "4PQsqXozqhHrd4yigJrJGqh3Wdi2qRmQEGzwJbrqPNEZmijZy14cqqqNEqscDib9beTh4kFUkcZXsSC8S2pK6pwp",
  "key12": "3pr4SFMPmS4zgcAn46jQcwpAithCwXLhTBSrArXedGcjXUidgQE6Dj6ewPjboA6amHR5kApMSKXUH7CzsEy2My2s",
  "key13": "4qLMc6Dy2om1bbLmQ3HAzVmTEPv7iuGtvFvoRBPEtY9ENb9sJSDu8zW7GjKKnrmBpTLYdnZhvogaEvNQCtY5WU4z",
  "key14": "4SD3Py8P5hgGSDsLCNVSF7zUtKabcx4SbxYvvycB35nrUBTzejVf3xdBKJbmL1QdE6fFtoypTcczYmXnEdbCtZkD",
  "key15": "5oi5Wg8sA6wMSz5HRkdeLe2FBs9F4cbs7U9CrZxRYzYpuVj8eVkAmdM6baZ4RsXLQBuZ64EtwLQVMjVQAMFqVrB1",
  "key16": "52efKF6jJoFNroHmwv3Q2JRf8ujPBKEdYw9phrpBWZ59jEcLM5MXgGminUiMb91D9tgtj5RPRh3CcDfL6QcZx4bY",
  "key17": "5JKnt227gbkdYgPeJb9maMy7TPBB3XwkJyCtTQ9CrBSax8jDdz4f1wkCHt8JHxoBSSHYAenAnE4xecRWScyqJrXL",
  "key18": "5FJTixw3FUTYjMuB3ctgY91zqtUJ7LXbo4aE3A461NBTtUxGKKgXBVJ7ySGWYZAJnQqjFRuqoFkCBTGm8cnTatHX",
  "key19": "2MDPMSjQ26P3uzoYRcfN3AyHedx3DYYSifpaSPCX7Cxi2UqZNmiBx2aLK1UjkvCvAZkx9P4aPautpKqcPMwm1v1j",
  "key20": "44ibkRR5sDuMmJosZnmbWnMcbjmd9sJjmN9PqsrmnLqeWvB9mnXhpCPAfNvYkB7J8gfp1dC6qN12mNx2iZ9qGt7Z",
  "key21": "59XcFRqNM7EfTpitj5xpSCbJum6TQ42bzYt2kTQMSJX2mDZFhXseFw3X2G7RbvZ6avXdBSDpJ5KdYD9BqQYttbKh",
  "key22": "4ggSQHvrZNqF4JpfLrt7BDa7B8gaKfaCjNYPwLG1jd4SADh5HPbfynzHq9FMdYcqvsxcu27DYfar1g3Y2buLhujU",
  "key23": "5eKdM7JFysAvnDaxDkv7fGi7sP7p7kzZa6gu9i6dcka6x6VyyBQ4eDx2mqkgcerFqBXvUDMVXpvMmVJpn8CrGfpz",
  "key24": "xD6apvLr1xfEnnVAa8Kw8mKigyvxLtPU2Vt6GFvPrQzKTkzFbA6vrGDLE5mZe13afrFTXLmXxRAGrsSZKTqFzYW",
  "key25": "2mUZYGWANePfR6LaEZuuLqthUujSyMNxFCgn1wdVcdkL38idnHXPdqQJ5xQy1ymP3PcAzAAWjbqw7fbHLVZzAKT7",
  "key26": "4BUf81k9TKV1NdFBxyRyHTV5nuRfeZdRsLJDMpy8Y9XHP3ds63MxFNj4LfUcwnoTAkgnWbLU67jGjUmZk1mwSDym",
  "key27": "2jwPWP7iZFtHbxnDqAxzbTBZfobvVhmNRDNUjo6hioGvdz6FwxFBYPFKcUpvAsJkTZ5rdWoYFDybD6A3M6vmoJX",
  "key28": "3PJSa74JUQutHrSxpHMqNVYaBn2S7N3xwtHoa9Fen8qc1AiUEdyzjbuiAWfbBPzGQtNZY1HAoNrDywgGdor4Kh8K",
  "key29": "eku4gKv8QxX9y54hGXCUT8nt82xhKZGLtEy5pqjFLLAnWmc8ibX5s97c7qkPDBMeSsgxiUyrNrpf6gHgMjfvzim",
  "key30": "5ahG1B58ParMKAR6A9hhxxnRZyTPDdMQnmnVEd3xgjzNMnmc5U3tfdjPQsYdLa6RaoiKgnqwMXKPh8SqnYVZEMFd",
  "key31": "dWKF4RRFPMSoyuDG7phhWgLjLd8tWfNEe1fwwW7x7w4dqWFRAVaUwKbPTPFRarAX9JQTH5KzBwgGrEv5GFVydRy",
  "key32": "2WmxiZYX71hUHRZJdWLURAnPzUcxQPYDdQMwKdmK62AUHFVJu9S4UVhkvgykVnQR98iL8xourVEcp2b9fXfPsWwi",
  "key33": "23T5ppZdnaTNkaCG939cqC5PDF3cnnGA1pLnsqbNuEea5pAXgtzQ4VdzWeCkAw6CHJqYP9KVCd6cbGCDn23tTKbB",
  "key34": "37AbEhH7xf7wj8ZPFffbpjUbQEgQ2aVNYeM4Zwx7Lz1xjekEHh2Bi9er1AxoG1VokuFxaZQAsFNxvFWK94ZM2uSn",
  "key35": "2FVN6Tc2McELCaN9JFeE2GtDnDXpXRL7RH2jUc4cbWPAT1GNmyTpGcJzyYA6mr87pTNwzBy3xx5oWDZDSHs7SWJi",
  "key36": "2eRKov2gceNPXh8AVedkf8ej7Wo69f8b7j15DmAxT48S7E9SNuvMpJ6oA9rzSWr2SCpqxtoVTDrqwn2tAAmtYXq5",
  "key37": "425zCp8BmpPE8hiECuTJgTGtSUfDN5gehQiqLS2xPqdZTA8jvDvULPE38Z24PhvzR5WQEVBJC4kzMkMkymiRjgk5",
  "key38": "35GLkYqsp7yHd7JH8jeP4PkMiWgs1zgqu2Kak8V9wQdnvKAk2b4iJiAF4X9rRtbP3on48iYiEsCcfxBABPNJwTnk",
  "key39": "2u2VLNJLPsuzm5WbQKAfLmRLtcS1Hr4j4N3VihsBTXrR8LgCrYVWc1BXUWgPQwZgNShaZ8pAYgZQM3QeJoSiX97Q",
  "key40": "4wz9eH2YkbHptzTfYSuVf8g72ypyYGPS6mT4Ey34uFPMreBi4PozfpizM11au9Mpkstc3YWDFCtzBgFKDL4zu8gJ",
  "key41": "21kwSBsyzoVfbNiRkA8FgjHL1QuchjZvoSNLv9ju2e8Qgr3h9gvSbAkDNEVNk8a3GCkh41nYaWLhHudpXgvanFrL",
  "key42": "2zREG76kWx1KoFHfuExK2RGGkj7gVP8PUCoURpv6ggfTg1R6YyPdcCHef1JYXPETPFKEqgnYtTe4U8VSozFmgbc2",
  "key43": "34KMwg1f42FdVV3Evce5NH8mwJmjhKmzEaJMtxHL6HWePEbCoQEWnfxpqKeB3a58AfJ6hUgQyGRGmgJqd2ASZbzs"
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
