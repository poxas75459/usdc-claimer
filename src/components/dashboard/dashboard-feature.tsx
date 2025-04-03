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
    "3TrqvBXA158W4j6fWyYmBRHQrZfUpzjG1HSe6CaBtkBWyY5BDjSxpuJ9ph94JSnuYtyv9cUGNwbwd7Y9S65qwSYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327z8AikKajVG5hRi9XD2CoNBKH1huY7YqrU5cSdFAf4noaiAPa9fmNE48UifyQTSmu3YdAEtLRg7hMNdXChAuCY",
  "key1": "38YYyVtEiGFb5PS7vMKuM9YrW2GshARv5jjm7zyd3aDEgEFAxtDfNP4PmUcvV3vsazPEbD5hbR7Riayaz6hc19k3",
  "key2": "1Jm4x5j68QGaTpvswkqjgdrL7UiKbNvW3ZCEa4uLRiTiJ2v6wLkoGg3G7DCWksVB9cZmdLpykds1TmKi3Mdar2h",
  "key3": "49T7mWin1o5byMKfSh2KLdDwt3qZMt34Eyz2XsJiLXSAvnHxu3XS1P5S2KVPWJUgohyQfos6maS4dgFRjmVu4E5E",
  "key4": "5fvSzrQfLhS2UwpLxUaD6Bq9iKFJLuUrXGKFAdXVrxgwuogUDQQBnHHiQDGrJo6S1kVD8wcZ7r9fz5E1BAP8USeT",
  "key5": "5vLjsxjA1KYxqjUpRW6s3b3xsBA6XLQWHYqBNMiZ6H566EgpBD2RhNpCf7ZERKBAJzjXGaoNxKTwsxTnMSFNnFtv",
  "key6": "5gARZ3ToXpANPTmheeK4yt3L54PLUTZvtLnXLvXRfbV2DXVP6FRQuRLqu1Dn1t3ytm4QaGA5WTZpshBx5pxuvU2K",
  "key7": "48KkpbcKcMieASNzcS7jUJJsKmbaLyghh5dyE7M5LUkKdBu56TQ7Ds9MDJVHLA8djydaacPeE5bY8WWLn8GuoobR",
  "key8": "4WgLJkHGBtaz6m4UhgogL9gbhZPKnwqejPvCXNBbJw1imFcDq1mTQepQZZPKB3nhivghjRrxqnWWMxwWLPWH5zYZ",
  "key9": "2KcfghLb3XqdpM5fMFnNSvNmPwzXby3ecyhtVz41UjZY9Q6PzaVjJyBECEdCb2yhDQYiftwaP6WTCFDzwT1pYqP9",
  "key10": "5UVEBanx5yQUznF6v3Brq6Zxi6RmxkqhRAPyJmjboJhXk3uaKmfJv3ynRL3oN8CgHRjNkZRJ1GKM5KMAAiEybdF5",
  "key11": "5gfQqZAKAXdR6zuaFhZurAqUdBDiutHy5QmgPiMDsNcYBMUeuouWYftN9nxjcZp24xExaAhY5sBaXTxE3ogsBeAF",
  "key12": "2CgqopGajnb9EMX23z3UUrm69JGBar8uR9KUTfTwyyZAuQ9NfJRJKC5ABpPSTiMdu7sUWbdtmAWQ5dHrTmMoTF5f",
  "key13": "5peZHgEGUfD3qbEUJno4qxfzJZpEPGHN7Xnp4nT8DLaSscxJG1Hk9fH4Bp3mXErnLE1rK1TNJFCrqwdQN7fjJRBF",
  "key14": "3wuoHGNrq5j4HtwF6TLBsccXik7mAZvynGxNHEbk1v87Cr2KidrwxGyyNE8iFPFqFCqFUts2kkSDfVhgenAbXh5E",
  "key15": "RHpHvUGjokY7pXdQC2tiqKomrghiMcYdVxKZhUMtndhJXqtL7c7V6zz5nxLLQbjo4f73kuc1AzuCd7iE8dg69GC",
  "key16": "5MAqKujXsiBErqrStWN6pzmHBzrNTVNitodPU9a4kBXzsoAPo422kx7S9vdNAvyqpVDXDM9v11dR1vFCSusxmZho",
  "key17": "JyK6nzGJyUN19BPoRYexHj43HhWrPC1rRaSN5FHrzwSXqJMAHX4SSX7h1RS94JBk7qKsE9trkKZ4P3pPZR5fRo3",
  "key18": "66HYx5VpMAumufLPFpF8aP4NtM6b9ixdpxni6aZbz8To66i58i8Sc89KpUCCRot6Sbm7Cc2dxs9PCXkmRV6CvMrG",
  "key19": "2CnsEUpsucb7cZMgsXZXA867FcSCFPDKCrn21wgujCupGd5FLRfJvikVcBFepo7Rkm1PQoLZfFCQJNmSWrz3u9HV",
  "key20": "2ZeUxapypV9BjmDEjMELvvA1Ei99Sx2iVHSBLszQd8bDnDV5YfvooTuSnUary21xiBSitVEDxR6zmqPxmsx8eRob",
  "key21": "6qpHknWychhgQDv51zid4kW1APg7w9wPTbVHnGWiEzxXHJ7qp5UBbe1wkdSpJB4A5FRnrQni8e38NejAi9GyZu9",
  "key22": "5dfxPs9GmMrrdFZLF7SLLLCSa4ZEtaLAMVfniMF7ktrk59xXYCsQ2XokqoykrS8ZioLwze1reQXgFKs6EMxPkJkP",
  "key23": "2Po27PvPLNWUHHPwvnMBxSGEQDMDynPB1cAxjCAJPVd38T4aqB7JMrb7D5dHBeja3kNZQhjCdjFaDBx3mG56QiMb",
  "key24": "5XTPsvfuwea3C5h9B4RUGEchoSSUgQD7UWynRH9kUv9VibALXmzAiXe36DACvQvUgXwvU6TBTeLuhjr614x89vSd",
  "key25": "5NBxm8CQb7hBuh1gk2d8zXM9SR7wUrZrzirazDEcyWXkpUU2tZm1cAiKzaei2mYCz4fUbFnniYqidh8JmojxT9Dg",
  "key26": "3aRYJDfjTMu9yY5noLxYaAQEPSLNRmarfW1eSLGDk7L34RtAXv6XnBN3fbbPQw644fYmfu2HLaKdbZhLMcYJUv6Q",
  "key27": "bNKNpixbaFh3c52XMKevztMUfCL4WsKPC7YgWqRjWRdrand7K8BYQpb2WmgmJBL5zfgGq1gJzNpVsXPsCdpWXTf",
  "key28": "251cj1jgqioaSYucnGrQU4BM8gmJg9FeaiEbhNQZGwMXYz7XmF9MjLi8rRQ8AL4e7XjVugTYt4UPAAqUrQydcfP8",
  "key29": "2DbJqpDYt3q3aeXhdeEvedD6n6ynLceyUvv6bvnGSatg3huJSBpGQWpXKBLawzrm6vcWwrcu1ZLihCh2KVPUbWhT",
  "key30": "3tDf7YBgh2P53qShDCaHbyEss4BHmZsVPwAfHVfqdy2Nif4JpRjiU7iMKC6nCi4NaPDJK3Huae86gd2EwUbinMcP",
  "key31": "2ergN4rrBYrbKsUXyXpNtRZAdKjxmCo4cMN74ufFdGJjZoUTGsHLGx1tr7oc8Aw1ryFLiQVuAFqtc4Zba4nfcCGL",
  "key32": "4764hGffVmMoZEMndrLziPAd7q73GsPcs1jzZ4nURS1uQKEn7GGKXMRjHaysq9cA9f8YUfnFqAbQNyg8svwogzVy",
  "key33": "jTF8zWwrnwSJE1LjWwntn1hrQFVMCj43tzFHivD7ESPRRHxLQAmRM5Gxh8aWsR6rWKyRagUS38bEgiUC32PNdKY",
  "key34": "5P4PrnsiTeF4BdwXdxZngNgaQhNg8vioMpwm6WPXHH8UxTVzdYP5zvjQQDFSn7NRsUVtVPNuFmTjDQD7hY37ukUT"
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
