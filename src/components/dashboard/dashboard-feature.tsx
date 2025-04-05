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
    "5zmtPkLMBYSxVpUdaasREsJ3Vdo1rMwW3M1ipMsRSGpyLknBpR1ksSqn2Sbu9jEqXoS5gwFJGEgPWzXrckCcvGN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MCsMV6Qp7NJTKBmAc61hMNPjv32F9A7LhHR6BZhkYKLwisS1xcwgZaqyDs8nvFqVAVRa9fMgVDXzQR789exDF21",
  "key1": "31fiLKbH3DxtTs8MNLW3FkXCCTkXj3djc1LpqdT7MTiM9hBbHPKp5hLt5NxuSNrKx3bqoRPvMsAbQeGmd4LftHjt",
  "key2": "PxyR6SJ5Wbc8zJnZqS9woJ6omFF56YST8LtqPC2nJyAA4EAJXAiD8U272PrTroBtXFr2Ha55bnu4KL6PEAFXUBq",
  "key3": "3yKyb1biYEAkkoqJVgCkHYs5vDdY98GQA8rHScPX4nPjGff9LrR7UPQCUFc896ET1jqfiP8115MYPsBFDEGKQSN1",
  "key4": "5BMSoeeQp8QRQg8ThCrxwaWW4XMigLq6YWpVqnUVUBxfGxs8ybVTcKcYdkHUJVFDzoSoeAmDDfBFcL6VbfpkCkuy",
  "key5": "2UoCXAuGgsRnNWGLJheAQCkNYXtxqmAaRWwzVD4WXUkrjM22omyAoQzsSMYFJvxJjbNgg5zPB8dHurPHpi1Dh4AW",
  "key6": "5BfdNXJB3Xo58DDYEtmPHWnt3bnrqN9zDwkv6JPEQeBbjHVEXihKGBaRCsNuZvVdfNPN62hLRMoGfmD4zzN4xLV3",
  "key7": "2pSLEcDXn6nySMaxm7L6s9MMwz1csdbTn6qDGDpCpRfuutZ5XJZVfUhRA5bJJwNWark3j5qCWL3RTfYkzgoziuyf",
  "key8": "5tqKHoenZzNs48r4W4wQpAEAU1jdAMxhMZ1v5peEv2HjD7oZVoFwj7o7QpAtPu86chGQLkDGhAmG8PW6tdHdAc5v",
  "key9": "3GUjuxusqTLN55rcMRUk3Aj57nm9iuUmssTD1fK5rwJAQtFECvqmXU3ec2HCh4npgJdrAoqKWkPtzmhU9r1ioexh",
  "key10": "22DJZAisy5y8UtxEGEajdGjHK917G9MaeW2ebpzdYt5PBA4ycCKSxG76iFmhwvotP27Qb6KwKBemMzWhdCJJrBpm",
  "key11": "3ipYW99MFdDKB6fugSMGAuRLdPaXPG2jCeCoAzu99FAxBT5mH4kj6YWDn4k281UH6oqc5RpkqcoAymPx6qaF3zmV",
  "key12": "RGHPLFd5XivykmJEtFQRA1q4j253ZNCw1w6ptWTaqu792W7DRbEVhhEJUJRE9NKR3we3k1iNer1rm1zs32P9NTU",
  "key13": "4WZUWUsSHE6TXWkRoXKK7LLx5ETRT4HtMBSyEcMDCdR7kUNz3pEAkASQQsrqJet2mR7BBDswa9BZwfYDo9f4TcfK",
  "key14": "276HEmnAmN9p9ZbyWDT7Eau8PpuKu17DTxcbgzmg79WzTdh5WwQx5ZsqsVuMt993Ms6VVCrBFvtfmhksMZ9x7GJm",
  "key15": "vJzPC3ED3KXxCs2iePyj2Emv4Nvp9jehYFBJmLyp8rAQJP7fKnTUNoHT5xAHS2zNP2rZ9aQSVb9cio8UvZTRdeK",
  "key16": "mvZoHGxDeNuHGBPiCG8CwT1nq9UrCuUtiSrjkBP6MoGp34sZURiLEnDNdSUdW85YLLPcvwXJhXmyv6jHL5v1NPx",
  "key17": "65mthug42GA4wG14XoSuPxHK85Vsifsbsx4kdvWtnhXhfB2M5uYCFGRARxuqyczx8GsXhm79Ktihw2fFELCr94z6",
  "key18": "5FEkdcKwqQACwNodQRArt8myvQCq94woh1LoKbDNzTwdrvdqsfccnVRVkfd4uWgf4ashX9GMrsthwvE4PE8XxvG",
  "key19": "258pzSTP9oCLHfQX4kVEmugzZmq61kQZZsyMT7RAJ7k3d4Pc5chn2u89amSQRLDmDpspNHTTjjxYhWaah4fgVe7L",
  "key20": "22NbxjWNtfzhwxLZDZQqeVQpeP7iHBWXomR91DSzBQqtFkSm5VQnqSxt7nGcUhuCmMwnyBKGV9BNeycsnMavPEzV",
  "key21": "4r5L3q97JcdkwFhCX8c19FLikaXw41jKZdgrMzQzfdCfpW6Nt79DzXQe6evMuigZLyBXknFQZUHyvrQzvtiycadm",
  "key22": "4YcpSonX2AS4q5m7ArNN5k7kfgzBafNHg35wR1HYWGazsvjsvdvTVU4CrigCJvJFFv5KtDLzu7DLjrCqvbLh1uPm",
  "key23": "nAQrph7gN4eevyAdmtVETbRpktnaonwZZhLdhnyhk7nz4Rs8c8phiZmXTF9YdiRb642KB7Gcu8vxEm9Fcx81jg6",
  "key24": "3KNMVUMd2ccbGaURDxSATTcoBhmg63iK5VrF9BDqCZyn5KAGfrjb97gsj2ofv5KKmk6NrJMsYuoa3b1aMtTdM2Lj",
  "key25": "5WZYbZdWrjwBsoaJdWs6jsR9nDuc2FdKNdMduo4YwHoNavbT9fs3BVGtWKojadV33DKN5UK7g9ncmTeCTp9jZp6L",
  "key26": "2XZViCVpfoEauxePWsg5syjhLKgoatpRb9PR9USv26DrKZtJiTyDeyFjYQAgR7FQnYT8aFsEfXRgRQVPUWkW7k5n",
  "key27": "46fzbjXFBsLafaMwgdyTTUF5c6gqDDGDWuLxqYkhjp5ecU7yD6dwM6MtNQPD2qUzkbErVw9sXqjoKPnUhzQGi3AL",
  "key28": "2RERe5iQNgdaJMQxtmnPvJZWZd8F4q2A6So6CUnXdwyE2YPm2kPabexxtEFbv3yxvGmHeZrfD1tkgMs7xF4umKT1",
  "key29": "5Z2B8HosCtz73XTKa95tdWi6FvrzhrHEi3oH84hfV9AyMfCFbWSi9TYg62gPwkV2M3je1Mi5xvjJtewKDwUe3jMx",
  "key30": "5Fc4ZWDiUnEhw5NjRxA7h2BFNbNs3ZwSyrLbZVfrk6dBsGuRVcwLbhe2K3ACkhQBLoebEUSbwMFm4vzYa7xjdfvS",
  "key31": "5y99X8SZcyVY7AfLihYgKw6xWSqHfLpwDg9bk7i5FX4HeC26oQBk8QLZEcReWoghHHK7qVdiCNDyWM4HzgHmPuxV",
  "key32": "3KAg4GzhNpF5Q1KWKgDYwz6wFVc2dJZyaujgU3LzeMQqz6keRm7iCUm1spk4E2YP6YKsVWwqF8akCx4DDd5s9JdK",
  "key33": "5e7Q1J3vNtHgtrr4fdnpP6zMpUDcCPoxfhy9XEYDAShnbj5qNkwNm6kKzfKZZAEQTSCLnWA1atWqTWdNxA7kbJYY",
  "key34": "5kdH6ynBxokHNs48wTantsm3ijoXrLM1ing49LFw1mtNKbVqx9Nwedh6ext3XqDkSHcb5h8d9G8NnvUGVoPtfEak",
  "key35": "3M46c7XxkYHhNE5yK3u1wRpfRh1S1pmnqCQxns22D1To2t8GpotDFTsscNnRSHXQ1fn6GF5oorEgdwHL1rzXmE28",
  "key36": "4o2RthZrAbW6m3JWWq6jvbPyox2ts7wn2PUKxaRpn1rj2DV2Ls8sYVHW2iHmzRSe2QMbbtewYik7i7iVtRG5jAum",
  "key37": "mzw8wbbPGpPuik8fdEQ8ceQmTD2WjMgvYgMXaNm9LybspyBgxVVVzuuEnatPoByDkPhJHeit9sJqtbLhFBekGEH",
  "key38": "2PyYgvj9PBcjm3xPMSK7rRdx8BkWd1pdVpzacVTRVb4P1UERDHwjTVnLA1o3jvAXb4XCuTiHr5CcB9NNarpgvyXD",
  "key39": "5J7DoFJ3JiEFFcLCndaaHPfXFEwRkydE78BsFHJKk3TM7wkG4xTRQpiSxXrGqzN8fWR3Lxd4QWnmRx3EmjYr2WvR",
  "key40": "4hHmUFJfTsXdQUSgo4uVNsuQfhmw2y7Y37EdUemKaohZ4usu1o7ia4euKmm3ndBktgzN9GN34NLy65tDU76CDLjG"
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
