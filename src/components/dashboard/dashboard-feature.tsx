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
    "4vaeJyLEUhdpXSfRcfCZowmBqSnRvNKXc1VMpt1CvHeho7QAkKVLjGUeMfFD78iNQvatgZjASNYRoJsXujrT1Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "acK9T6GxMxg9sdsBcL9iPiANKD9Dr4HrffF7FCEBj3bL2ScD8HBatjih7M49YnsQJF8LWMpA1mNf9T1wqZveZ77",
  "key1": "3HApSKbKARgjAyGG1pXbUPV4cnmg964TQ63HiEaioKsZiLVXB3TuC3MCciPeo4M7V9j7Nz6RnWdFHRrEMV7L19oe",
  "key2": "5gMJPbRjH7sTGfCg1uZ9tbE3JzFDpAoaT1ZyjTSNf2QPrUXUBKpbpZF5RauyeYBfruoXFcKUrJWwgpE6c4Kr6tZf",
  "key3": "3azBWwzzVj6M8qusiKV3MRQQsPjYrpn2i82LHwsZ3t4TqZsgR9aFJsbZ7mTfXZKzY4pG4Tka9EfhHnocZwvMP14s",
  "key4": "8PcmoBnWqdMaD13hU3KYhgXLbJk2JFXtWBFHQbtW1SRew3tfGRYZnTgSar89voLosm8JJF1N3pUKMk8R1KpoHXJ",
  "key5": "uWkfHbK1HdBPJsZ6q9F18BzFrjojox4U9LMaSSJntWHX3vRfycfydK3PwyVbcZ4nCCBCDiSECaZYXkLbEQLXAcB",
  "key6": "2kd6ZsvYsiB5vtN4DkQxKy3NwPaF4UyMZZMuGN9b7VwCNFoqZB3LyD8hTvHtTMZQgHKHm9F2hgdiLHBkcbuBEfNV",
  "key7": "5ezfKCy2vqxS3wMbjPMfUJijtFW4R7CQvWKEe9HPPWPHTNByr6Qencx2oMFKWUnGbhcFGuoyMVGF4ga6wfkJtfY4",
  "key8": "3noEhF3Lf43sjgThxf4x6mzKFCuGFa2838vaN1re9NgYcGu1cAj6VN3YmmrmV9g73Tg7snSRQV7875jGZiLun4x3",
  "key9": "28qWefvfY9jhrCj8GrFmD31krwaHA6tPc3vfHCEgSYxzSSjMkxyzxPdw62hXdWABKyVd8BmmkeTAURe2GaGjpB3V",
  "key10": "4vPxQmz8zaPMWwMuavu1UjjzuwY554BTMtY9gMuwUuuzGGY9S3cE6UzT68iuD4Agr2oP6ct8zrwvTVoo27h1NPMc",
  "key11": "2tndB4RuQqVix36ZjsNabY7tnSfmfE2phsYQSsj2R5cuenzFYhUNZ3UERqy55afrSBE7vDiSEgB1tBiY35qmP2xm",
  "key12": "5i8UxGU1PTjxWTwmdTHRMqoemh7SPBDiaT6XcBkfwToWL9QW1PawK9gHybeqSn1E9DBeDu58F7tyywnwhNsnMg66",
  "key13": "KqUUhjMB93adEwNJXFFYX4wN1xxaDpkjbNhz3WLtdy3Na7Sb9KmskvUM11VW7H6zqjkUZiscki4ksNFja19DR3q",
  "key14": "36ZgnahV1HzkvHqFL14ykBpV3AemaXV4ZyCQ2JCaJtoTkB31wbzzxg3jAYAJDPcJCCQmKG4oDuSHrFdvnKwoZV9k",
  "key15": "51sSNb4JB3jbvfCSeSskL7rRtnmRxdj7YCFg7bpA6LHuzzzeidicbLCT8LjYBRJQYKmMLSPgLn66bd4bcfG4n3hQ",
  "key16": "2oSyZg7B66F3dQqLtbFC2X892yoRkEKTRR1guCS5zcM5Q1fr6wmuK7EtdG1qaWFRc61uyhgsnUbeHX25RWet42QA",
  "key17": "3o3yKHkfC534Ax4PznkYmgRUAyqbhjPo4eCdqhMGZa4n4LenhaU61m1fz3FqhhhLGXK5JtvmFt1KH3WTdRJ7UwmN",
  "key18": "3hyvrLqotRUDjjhzBPz12cqdxxrd13YkabVPee4NTUCxxX6gjMzWcPLdAyPiYb9pPneq8GFwttpW5KYww1t5mpsn",
  "key19": "33o4evCpwnoNjZBFyV8LJCnjYVfgBFgut3bZcWyetJx21U3V6s773UTxVJwXaye7fDh9JD75KdaR11ihHvEdYH2k",
  "key20": "2EVGhmqf4ADJdnD7dKtDL8T2kwWMdnAXizijaEgyz1Eo8jtKWHZtCvzog7MbzrpkLcGpf5K5jrehpsGHX86Ltzy3",
  "key21": "4kUcDj3VbMwGzjk72gVfYeEqLtU4AZAsTDFMUyiBQWvWQhr2hjQ72Dcs6vZTNpMMGzP4p4iZhxQ4LxZ8evQojr5u",
  "key22": "5echGcWk3yXFMXSU7b1pmDkViMCxbQ3tYiMuXyyfhP6UUkTKJ2nbj5uhUzX3WEyh5Jh3ntDhdoeoqJjKJQrJ8hPx",
  "key23": "4UwmsFkL7v9jxYkxvDML5RDzKCyouzND8VADtCUd5XbSVXodKxMLSk93RJLrJEft33nKrPZ1eTWZwvMhb6wr9Kc5",
  "key24": "4EG71bcSxVx8t1AKvAiU3VTPRtpGRNQTnpfQvXNJzReqT33eDJn1Zi4AxCiYhT3sT6qEwofCNh2DjCsDGGdYBDVP",
  "key25": "4W1XGdAdNU7jqC828cio7H5kdjzV2RbW63tQ3m4ae7Hadaf3e4L51CvghsoiL9zPWYoKUqLP7oyuP2skunw9Pz4X",
  "key26": "5m3isCZPA5597GEWj8iMeMadSW73CbczN8xgLBqXVYi8PSbYBktBUefS7RRMJVMDGymzm5Piys64MHcBjJwZ5zRm",
  "key27": "2FpePsg8MfncaQzTHtF1RvBCBHTpAUUcy54vAEZDbWJL53QXwrC21NwRrg3kmeNrcFDDpBLACkMxnzzzT4rfvdQn",
  "key28": "Tuy3kKK5g56BpvAkyWEH8Lswttwc9JNEKxpVXNfsXHFEhUqZTqS4k8vKBJmrJ2uRtGr1EAjfoaYXg1GemrPyCzK",
  "key29": "5fq1vM3Kqc2JVs28BEoRufz2VtCLdZ3VLiDXGrCYmc7GUqhT1wwB9FXUvdb4WczkJxGxdZgFPDMpsWCMgvoRu23P",
  "key30": "5MDFiuZmPjsNnHvcAZQpGLsKgcQ2ruKE7qtXXFwsyPSHD1hmm3sY1PnX8i65L6Jhu2KHstHsiaELqVRZe7fPPSaK",
  "key31": "515K1VURxaqX71swGyMRyPPL7UX4Ez8SvjwNX3915gvb1hV44aZZ1qoGWYrHgRBxNFLNbZCKLbazV2HcZshdb1XT",
  "key32": "iCWoHXCn6JTYAe5iYAJPxZjgWsLBvV87DLE8hTVqbSZWCWottksQpwe29rMh5sEgg4ZK3dpryxexq93DdGpbV7z",
  "key33": "2ctX2xPb7myZqoqT3xnzWYwhgRbjUDu955LrPgYEnZnQFmP45px5vuLD4R6AnJZD8Vk3A4Wdq9mkwooqjAdqmZk7",
  "key34": "5i46AZR2FyNc34s7b8aJSSeT1HbT6dfXBqVLDwNK5CvRpKknLLezrbr2TTHhY8hk841QGG5ejMdjY65VutQ5bK4",
  "key35": "4R3nhGv3kdxCfpQmqPduEPHEwtMtLpB5icbtXUpzHSCv8FpSoPcd5uwg9j3Gmkn9tLzj91rY7wMpn7czK5CJLedi",
  "key36": "4S2ZcPQ1Fg8jPB9J8T2JuVzzCCdLju4FntTw6Yomh3wTCyD9fVG7vB9GZ8HPiq9kCRrX8R3qjCe7hzigjBGBvkxf",
  "key37": "5RAaYob6fVJXgMgBJyPuQB87quMeB8CGPDkYc9HoM4arLKFoRu3riQvSLaQNM5SzVssZMxtk7Zq5rsaZ4F7uXv2M",
  "key38": "RQCDXmPRPeN3pqY4A6Uk1dfFEfp6frGpq1gZ6uqyMxk7Zzd1N8WgARJUSNYCLYHXe1va4z7NKAeH8h67864md4N",
  "key39": "5a7TfBUfffP9gmRAirbafB4Z5jbvqYYu5zAaKDMUUoZa5SxjhCdPJc5V7gs9XQUFDq8eqjh4WNXTXbRrodErZyVa",
  "key40": "2aJCsyrYDqcQ5veTMVuJWtNpdniBJbJ3vNwbdpEMVDuhcMCwBr7G4FetzdhHFi9VpgwCeAd98zfSHuVwTpsjsvhb",
  "key41": "5J7s2GYbtFGC6aboQbnHK1VGZNbC5gCBduUSTcn7bWCRRjDXvrRsdeENRp6LSvcbcVXQvXZGNVA8od6gVsHAPYxx",
  "key42": "4Usb6ANccWCzabNQ8hjZetu9nJn6nANbnnKGih41QebZw6qEqKo1jJuqXML581j6iRW6jkFiUZyhsos81foWcAuB",
  "key43": "2GWJsF5DXS1ae3iDfZHT7NreZ2HzPJm7y8NrzHfBPRv95o9ZhUM37Q5VstrBU5GAeHuNZtWUcbmNNSyGpE41R3xH"
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
