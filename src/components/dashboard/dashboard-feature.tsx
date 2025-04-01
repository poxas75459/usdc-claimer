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
    "3XZAuW9dLKp2i3fHCEJHTjDd67xzPTfTpqryxJN2dkme5m3H4NVsHAikN1BB24CttUbNxW7BPVRoSCzdDrK1SWaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ddbndwES3u3TyWadr6kBkBpbH1vZ1JLeRt4oH89hZUtbh9gEsdWmmN1mzEZXRpQ4oVWRWZXFQ8K34EYCVyGySX6",
  "key1": "4NKxCevkjwTZUj75BLj2YkVEGjdGSVfzXUeGdQNFp72nyBpFV9qwBnLY1PAkbDpzgawfXQhCS3cFAX7vPBA9MGcd",
  "key2": "3R8jucnVm6iKC3NBv9Gks1BfFPxCCuVqeQaQ2Z3cKiTFSteWwXGSLhQRR7q6v1RuQ9HQN4SoeWGsKz1mBafYJRbv",
  "key3": "48M8aEmihLQnScWjfEzJTx5uvSrAc5Nr9iT2nM8Uc1fcJzsEuLhGxa9TfCYq8hgEpu3S8e71gTZBaskwe5NsjsNc",
  "key4": "25VWb47hV5iMrxXGjFYjuwRRTKdYaeqHngoNZw4qVwYC9pdVSPemxdStaiRjbMGiQ1dx4t3TiStSnpmunBH8BHM3",
  "key5": "UtyvREuVKyahTD4Eum3Fu3Y3KEkHpN3p5AUNacdz6rcPWghqrjBZG36fWnT6nFSz1qFDou3ZG42Y1ZkqrxvqQPm",
  "key6": "3zk3EvZbssYHTbv5fiWFdPErYJK4pjX4GqDaaW93nCzxTf4tjaboY1J7QB2Km4Z4a4346zRahkUuDFAnrG4MqER8",
  "key7": "4rQTJZewdqLdm27JkwUWy15BfoCxwC1XMfMguiN9eUqZkeCxFqbHjRH84HZXyho93RJWhbVUb9feDgUn9ZZD6g5B",
  "key8": "3QkikytQswapZ7uQktgZbDUayNhubXKDgnaz32Qh71jeYuWxhK3YXxKGBpjzbWgWLLjKoT32kBoBRyXWxwj9gChA",
  "key9": "4pfzrHjc22CLq6d6SXXhkefEgNq9wcagVDQxzNehwGudZaHMgQPHx82852BoDvPSu45DAuAyCTp2MYL82bTRkkWt",
  "key10": "2yLKnjS71XveQxeABunucMRQJ1jZa9ge4zTaLZb63N9TAUUutGbL6Su6vTBNQNoB9yFus1gkCX5RvmxnDQufDMoo",
  "key11": "5ZAhartUriuKnSXJb1VauXp3kyvm8LKYaQY1Wr5gyHS2GZsEM6Z5hzRz5Q2kHeJCpzRK3DxXECGGkAwsqsNkx8HM",
  "key12": "43WZNrTzKvHRpR1qeQGNF6LT7asq8aWoAnkqx94QueMXhmarvZRmh2SFADTRp2ixbv5PKThronBSdFunHNgVwK31",
  "key13": "5kcHvF47eLFfE5gEnjfE574oJ6dFjnynEc7WxXnUHMun3sgTZG9E1PKyrJTwMPfd8jNYUkFXWgVt4HyDa9omUXJk",
  "key14": "5WjEVRkjVFjmM9K8eD42Dx9uxntrhUaGcwdGkcwiqk57XmSiNBVQYfPCMp7QVrEkC9J8DeapZ5n8nMfwKed4Q22r",
  "key15": "2krYa3XKujLLXpkq4dgZNS1NAHMp4YpuUEyvnXcixdJsAxdp6DDTcw4VVRM9E7dUGC5isonLSvPEKZq8WS8KVaE3",
  "key16": "5fA9KPvyavwBr4nfAqmXNvMmCe6YKxfy2mp4YBbKgmCF5aKVyZeKCAi145DHv66WyhYRVut3c7kkoRNSTXDdM9Ei",
  "key17": "4mZRb53vqUyq6HoxLDSRxGzAiCesFZBWSsoSS7vzaJWD5g8KhJUQNuUk5ACY9BVEGgTxrk3v299M1BCYmrtnceGa",
  "key18": "59F7VJQDx5Q2W53WBcjMh2oMBNTQrzAfNFm42yMwoPkFEJukaKzuo1ezyrhPoPKBn1mU3bzoUUt39WCBx9y1sNrk",
  "key19": "6v6JLyuXY1miH6tNFVsVXVRJSePqy6ZHftAL5A9vuPWsH5Gp26bAMCpegrTJ2edxNuj2XXQ6vjzNcw3pVWpc5es",
  "key20": "2m2FfPTdWG6GF5skAb3UmKfoF3ZecZj5LtJo8n8nB8QmfmL2BUo4jn96qqrJk9f54FMG223eGC9prYnYqN7mdCiG",
  "key21": "EZBhTt3PYhsUdH7fXwZBganrmCXCnHX3o8W24Nqp67y7H4NrUY4r1dCWnXftE5E3KP6U6ffDDbYn1FqWwkLXdLn",
  "key22": "5xbj5YnueMdYXJvdBk3hPcgirPpLR3UXKxhYEivsxSokUQhR3N7QceFEqUJFhiHJ2P6Ji6Hd1wEdFfhpumSW9u7s",
  "key23": "ypmE61qvuSJjCA2RmFeKuxWwn6HGaCc7E5dUrDGJd9TsDeH4dwGVZqzjVPtBhoCw14gcBrufGgDVj39idB85AmR",
  "key24": "5yrkGULDUAkZ5UJNNE11HqQWGmgUd1bCsn7UDvMmNeSuLG8ejcHb6wibrfzZ8ANeKtrPTw7oS8C7Up1hYB5Junvn",
  "key25": "5rK3HjdR7r8cuFqTmimfRhDFKab7ePDPRKoKMTotMtZ9SJFGhjrufZnm7KaNxLwk2Ljm37MiH5rN3jWvegoxq29P",
  "key26": "3VEVCc5k8RrTqBUr9GTswSG5zAiXRTxoHFNVhnUEVvH8B3HD5rDb49CW3rGJsULaEQUuUqH99u4Jx8pjUAMnjQn",
  "key27": "3QNadCV5dbGf8V7CsWyL6bK9jFtDqW3nh7W3LrxNHNR37qLcFZBUUVs2zw6wesNVgBgvTmMQfKpdLvy8968cAfhx",
  "key28": "2ehmpEDD6mnSkX3y1z8h9SsM5UtGSTURDWexb884kqebyH2x9B1GkiFP8NTF4Jb2ZQGRCSmJxGrBuURwcK2JdCMJ",
  "key29": "2VsQ5THjHKz7TMe7cugHoiP1KQoyYpTGXJ95x9rkBiMFQYeXQPbkoUPvGwyVbk1CPmzSj4LbgNdAiMGm3EEkPEfX",
  "key30": "5BVUKMvsQ69MrLQ8euPSpSMQ2TkhC4kSn26wWRdYXvJeuBpEETetpGuB3VQochUdApAwWvo3KMZSzbpwAkKSparc",
  "key31": "hi5RVug1agmayZQBnC9HdT9WH1MMroPtGstdrks9K9CDWEcQpAeBTzWynnCM3pPJyQUGM3sY9cd8ji4scnT25VF",
  "key32": "4XiovJ9VSGkCnPv16UX98uDJ1EwQc63d2KPS8iCxwS2YwsuWrBpN7Kn7JTAzekqBaanMVDDsskze2ERmbz51MYQq",
  "key33": "5Fj21wGTaDDRyRyzk9eD2Q45n8wLqrHaCA8vLEe7wv4u4jnuP66JELHNWX8KZfuLPBFpkBMVeg4goPPpNfupjcvg",
  "key34": "2g1wn35WTbD23gcAyDmQSutTSeX8DdvrypcZp8bV4v74oQZNxYwsCzeHhVmcR3zFrgAP3BXgGQxpnwhrDnMTDCsn",
  "key35": "3hziGyx3hejgTCnLY6mHMm5nDReCBUBYixsYstZhdib4RF4Pjmj94Pfkakhj9crKajEEBeYkf9Yqbf2dho4pHjHC",
  "key36": "2qyeRtWttFHpN9MS1cUwTfy99bXjMGjVFkVrXkdddBs9H7eZosMzMETDT3zshomkRnCiwSRSMjQQLE4GJNgfcgSn",
  "key37": "3oNJ3JpeKUycHsJxwKrfcVjQizn9G6GCoBkFBrcLPoXnX1eQTAsbY69MfC8USBbNMtZvKfQDLtvvPEXF26GGpcx4",
  "key38": "2kVK2zM8J51ipZaP72tYX66VHEwKDp8e5v2sgB8co47zm797NF4VPE3SZ2g1BRT73RyDGjw8dGXy7SLDn9gswLXi",
  "key39": "D9mKRtuuuHJ9sECQxdmbL7SjHzMxXBsxM15vsSzQvB19xRWB4hteVw2BsuDuPcT1xboNAzS6zTCTTPS4VDtsLfH",
  "key40": "3duqQgSMggW1ZHNsT5E1CowJitproHqm1E1ifjPYE2Q8CYkJqhJBZrGWZSLeSM3nP34NivkX5crE5obRBpVDrwxi",
  "key41": "5VAgxeGxPFT7c575MatvgDKcDFRbgP6F8KT2T4DWWaywE77MWvBRPGYMQjhLpd3yabUJhknYsSJeEdcnyR76T94e",
  "key42": "2MmBTU65sK5SSqovEnQjE2TFeXUNmPb1G2VoTCDjjhghhUyDZ3Cza6H7exWUw1YfxQHnkbbU34QEVVo5z73sqCPd"
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
