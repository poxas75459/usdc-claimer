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
    "2H1p6xnrf3rxPUBM4ajPekrtLwUwcktFL1FdM9DbgpRPrxEYd9j1vAHuKYgUYEiErvcgDjZGcaED3YqnxUrPLY1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LwUxdfuTeBGL6axYYC12sJjji3onv6Sc5Ldhm4s2LzjXxRNVHsjMQfvoX2DVf8nSKNYEPitJSDtyPrLCW25oXZe",
  "key1": "2W1AMCNNpMtwFssfWqFqfdB3Amc6CcKys1RcsoyEPFVCMipZng8Shss7KsZtwe7stggW3C64VRBt8vkvyyGXvDsP",
  "key2": "4WyzcJa5hScXxwKxWzcER6U3dabFmKJ2n1kH3djqoN9L1cScA94vfVUzCnxor9Mj9rGvaaqKUSdUbCRjAW9G4pQ7",
  "key3": "3wYKPDPnZYDRtmo8txSVZuY9Z3z7UoYkqtrDaTzdm9WaDiPPkXNVTvkBCpAFpsrtyvUkshb7Z3455X322Nhg664J",
  "key4": "2iKQ8j9zDn71WFC9GKDVDzqLurRmHV4mvSDESNP7d3WVJvEKBwGN6JWYen2YEB91RDNwyVPVxrtfK6FtcodcTxZk",
  "key5": "2Lxfco2Pg3C1jw9PBhdAqHqAAcSgv8gXNzHLgKHnuyCxu14RTF247aES4r9C7xY8432dus8gaawnp7RX4XfWuru2",
  "key6": "64TVd1TTnPyo4rs9dHqUVpBAPeBL6gERcdUSXnKvG3RJcnjRyBhwsT9GFTm1tUoADGRsEf5bVz7XpEqsuMABuUhG",
  "key7": "3HQcJk3FARDa2qmNYj89y4ETDU9y9QXtBMQfzz4oSXPD938HJYdvrAYAGSBgJo5YzZFMzeYq8L73XfAyXV2YqPbn",
  "key8": "4GbCGVAcdU2Cf5FNuDF2aG3NSGHDUDjNjvhJcs8GxTBXtvKJDEGR6TQ2shx1LMDzENsj3YdBy2d5x3nToA77sANF",
  "key9": "2gnzzuTJKDL7CSypAQoovqnFeRqrx5uWQ1V6FeMjim4f4rUr79SekkfncXygUHo541AfyyeQdjcHr1cyR5MCSN85",
  "key10": "FD6WeYLYnnNon8HgzAp5XH7cLByNUGDAkKahayLQNCCVPscDwBiqnVa1mc5Cs28zYsoujcbNZWCLcBgqQ3VSVyX",
  "key11": "4z1JNdhKT3tKakB8ygsFtQcy6UZffKXf6EwsZTy15zzwXHSQFNrSRA96KiQXB7CPZoyu5pnZnvEyWTzpBfEkx8VB",
  "key12": "NJMn7fjTipvJ6SknFZYGUYxJvSCmxtFeG6BsPLvXBohqn8JQSpSCDVLd2ShJTh2jtFBzA2dbTG7Yec5qxfnQ9GB",
  "key13": "5FshabB2gGpz6iNAZGR6TfdQ2MgB4gg1wg3fTPEAFDri3Uqc4V98inLFKvw9Yq2ovJXqyDKqi2XNv9nzr4qWQC5K",
  "key14": "5MV2QdmoLa8kyWPnwdRqhtaNKdcF2r4A3RLrvEgSCavSoFaL5bDzqBmLrHxCpBBWpwjgVpDedahrW4hAkGfeyEUb",
  "key15": "5jSKPkqYJyrkkPTjiUY543o5pBATk97qZwtSyZtBiRQ56MmResbT6b9UoejZ3d6NADzuwbMsY39Ai4oiazC8nzmR",
  "key16": "3kFjTRmLYJPV7326dGD1hntE9mHSSdzSa5ad7UJCYPZVwJzShqg1YgLTF7AbtRTHAS9ar1gsLVRNfAVK2oVVWsoK",
  "key17": "2JySbWnRhcwWu7vnbyFMQfU89zXBBUfJYxRVVmTRmwcizxBrgZfdjkajq67a6dr74gzyDJk9Gi5GSM1TasUHHmop",
  "key18": "3WA3kZBbW5zz42s8qoTGBtZLCk4Ceku6XGqXi4QJqjX9QsyCLUQD6MfLCY21kpkV3H9goRFKoiLDFtrg8MMX1yvB",
  "key19": "2KHXQSetdnsQvc4XCcZr1UUzrfyh5cHygY2Pr7epZK87KBXn5i8vp6ctHtLd9eDaiew2ame7Swnu2bP7gA9YcCQQ",
  "key20": "4KgQnEbtUnvyg6N4w499RNKhn42M3i2Q6VjFCn23hQZAK935DWu1q9Xt2xncLJYFVL5enuABmHgCMKToJj2vVNj8",
  "key21": "5uqFJE74ADhXCkM39RcfTU8Z6hFEFcoDKhPsrtjYjQsauGsG2fiAtuVxCPJv7G3p4fciTHo6nMoRKfJ2WiRFumcB",
  "key22": "45mGpRnA1ACoUojLLb712Soyz9QNeEG94JnHUMHpVsfEfopLt5oAwACGQcF7f9uGxy2kKueaWRjLAWSXvMMwovXf",
  "key23": "63HvcxoK8n9nXPosFQyDkgvPZ5i9XdDYPbKabTsfTu5Gac1nJtnsWUQbqLF3cMtnpMeHCRLiVzMhigm6gC3Ktr3H",
  "key24": "3417jnNYcENaggc8j9zxbp38S2jihUfjWFYcjUHL7kwezc2WMvypAi8VabnTuz1og4LrMC6D9cyDJmqNsrX9StLp",
  "key25": "3TrYKufKzFBUwUqRvMwTy8ZkGe5ej5yaWv3hQCTG3i6eTU6c43reDweuhRM2BPJBa9LR4XfGEsWnjJdtC1569fjf",
  "key26": "tk7a4XTww6GWeBr5xuDJaZsv2Ai8xsJCXdFMwA3kmhxzFTnLCNcU3kJPgzkXNCo6xSJ8USajSfJgyuiGRzwaf4c",
  "key27": "TGzbJACWrS4uz3wjQuw19XtqjY2KvJ2cWZTvLFgEwxjUvgtDFxPuhcBVQopsfHeHCN5yLVhYbj9h5JRBUkRnKAv",
  "key28": "5ETqB9PqPXwjFm1P5m48U46Hrimf5qKoVufL5jJn1CgHFL4Diz5B67TvHeHAGir3ZitQLMMNWDiU8u2U6XMt27vc",
  "key29": "4CdHJNQiDojpa1EVCKPUjwkssopnGJRD1gvXHztc1KGu5KmqsdogV1RnqKUTBBsJJiAoax3PN5sFn7BkPYcrpqx9",
  "key30": "3R4EWKdVQdLG2Czn7JjavX4zcmACzTD8nhyAdahi1QdSpTNn3PQQ3tubcTbv5i7x4FSamGKHyb2TxhgdEnxirnDy",
  "key31": "4ZJznYcoauYuBn5HLVsXdcTkSuJpxC5LrNq8fQWX8NwJ7bP8VPFUfqyyRFzsfaCTJiXgcn16p9m6N6gCRi45zUEd",
  "key32": "2hgdrucEaUGpj9BbVGvxVnXsHFytHSRaFdgR4J63WDfQpHLaEAK6F8CZbBK36iuTH3ou7rhFMYpDmHhFaMBYEQuE",
  "key33": "4GdJ7u8dLn1X8k8angfUVQCtdcFHGiws6yLPpgNeaXnopQFXDgykTbuzRTpovyb7jcgf84FpKbggHciMnZ45tntE",
  "key34": "5CBaXTLwhRXc6gUMpTbmZh39SuXodKwvoGyfD61PmN37LrhGnLkUgwncBahxfWnEGkVdhJtSxbrxTZLdM4bjSNAn",
  "key35": "3G78GyGQYNwef6yLuxD2c1CU5vK7bL4xro6fieW9jPdAC5UvNTMTxX4SNvn2ERGZbCrtzHaaw5eoEskdun9egn6y",
  "key36": "atTvMsPKcpdwqXbMEF1J8vnc3ThaRr2Gi7sb3F9hJbrnYos1cJK3LDCnkXtxUmGJEHPEVq5oRncDtBTL52sWEqD",
  "key37": "293iMdaSSXrHEvwP4dqyyjWyFrA8aA1amcSM7FwJpuG57PSaGCWgignYrso5q6b1dz7LLbCHfScNDozr6yAMczvq",
  "key38": "4T2fxcqT9rW1KbeTdBHGhh6PRQHeHZq6nFtcar37VFyWoaGkYkuZu12eyTwiNNroE15njqywxZNcsXEYHqDV2sEk",
  "key39": "51y4RZ4B7yxZSX3iXqsWfuKcwE7VkN854L2M8jBFnxcWQ7FtWeskYUFrR84mgi7m86ByrrupPMSF25jxErGvcLHV",
  "key40": "2xxuqJuekRTSPum3Ac6x9RDT21zauMwDPTGUJACKiKkdZPYA6Fb4fBQnsCXJHfWZr4Pep4UUjkfnH52uY1SiNbgH",
  "key41": "4eBUCp5Fro7cQ4EgmwZAGPWAaZd81gZk6P8yvGwELKyseZRL2hHafLBzvUgYpKpMvbg8e3fxSCPbgjAJ5qSaiEzG",
  "key42": "5ykxiNiwrH7cmpcuFb6eg2nTe2iqCTVH5VCZG81VDSg1zwWywjy1yi1kZcK1bMZVdM4EYR6z1h3yxtUWJCVdfexr",
  "key43": "A2S7TEj7cANJXKNTmAcD8ESL5ojfJTbUSZLhMbHtrh9s9nBPuLkyqjYCha1cSRYnSLUfUVwbhwx2TnFcwUDnX9a",
  "key44": "LHazmRWQ5Mr6NQMaZjkxqh6Q2A9ubwPcnXu3sdULRYDgqpPaoH7TSo5LjSopAU2qySgnv2z81e3vH7ZC9TyvdLg",
  "key45": "5uPACWyc4pnCXSSbTsk9VvVhD9fZU5J8ESMkwzJWjQnwNDEe2f4VYYgCvXte6bw1JBEreMZnnPbpWGDHGNezdauV",
  "key46": "4cCaaTxPyrxssEX269P8pMgXicYBpLXwxWivyWkgPcU3RLK2hpdmPNy8jXYcrUdqKVGQS7WhngBFssFYn7d8JeWh",
  "key47": "dPdtzTb9tWtzg6QCUaF8G35gEVFowVGqas5X8AqZaVHs6HqivhmzjKydmsPVCK4aEkYuHDRrffayeET3qE1sWZe",
  "key48": "2Pf28V5nT4PqNuafM8DHhnuRTfTDpAym7CmiE1LWGdyP4tFzgPNcFXEBAyK6pLXeUUWkwsBuGdQpTxDcDyuXcoAr",
  "key49": "3BD1uMiHzpTDmp1BbskTVVQE7qZ7USepbjV2TSp9odH5Lwwq4pfNGja2XdSpFX8BjmYLcSpzrSWJvUrDRz4eHY9o"
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
