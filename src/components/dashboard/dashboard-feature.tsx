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
    "aKXV4CqipiJenpfb5Z3ENs1RAVVWEhvi9R9Sn2Ss7CzQjSWv13KSQ1JbRqp9mr1LC4jkPp6JMq63Scb5bnd7MVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oXnKF3HMZ5iyRBgUfwjp3VLezgm8xAMNFGLZpZCSqiRhhD6ThgN3y58kTfMBjwD4qxGoXTCEoys5tSFhRM8G2gp",
  "key1": "M9Dr3GqxhfmzmKvTkvTCopWspG19N7Tq3NJAw5RSXHk7fSHpLAh1JfaLxpbz5X3nNm6ZN6pS1efqWEmrydffNMU",
  "key2": "TNuKe9gL5gD2EVVrQGQqQ7jTVeN9om3aehLo9nMoFqgJALmhbNsda3vmWBQMd8HRb5Xi4foLvomvyDyjELxdnrv",
  "key3": "47hr997eniVazCZLVJVTczVL4Kc41g6FsNRd88PZW9j8yyrp1vxApQhCK7em2CaMbGg9EWSKM3eRURTugP6QjT1z",
  "key4": "3jSdpfDDFZgphze3CCmv9RPrJW58wkCiQEPVKq3CW9w5Z7uPZni9tAF7xFU8JkMjhpjyK7rbqpSmhwJLjCLFyt3C",
  "key5": "57hXDaTAi3LpRrr7samcGVdrxAZu7CL6ECpMdvJtPTKsfPwzR74SK1Fe3Re69ch8mh7cSRCL6C4exejPLiRYUGWN",
  "key6": "2u3K8FUaeu8muWwdMNLSqxM8M9sN7jbNfcM1EhYrx3cEN78vedocXqQPq7uyutQJgPuv3XMJWrMRBEATAFLRHQqL",
  "key7": "5XficCF9PKPVKAdjY6UVQFeAgyG25X33iDbBf5yGHthQfDtR94FJaNgQJTAyHbHfvTGFGA5Cmpin7v6R2fFtr9M3",
  "key8": "4Vv66E4RZqoYZCXvbKV3c3TkBEGDbEPk92m2ogieQzPVjeaEJfxLAJroAQAmvneUppSV9vcPQEUDGf1GbSKMCR5e",
  "key9": "4bRrrZRtsz3bb1nRYFCCGvVaaAHhRN9qhzrTxLYa8QfpJUPqdFGJYDpo1tamvijVBiaGDpKpfxxQepGqXGdsTdLs",
  "key10": "sHgg6seGhhybRiPCU5eW8jNfy4Cc9dGsA52dSnTQ1LdSHKCkacTSSAyePb5Ht5QVJT7jgtPza4ZZU8oMM1gVkWk",
  "key11": "2XVhpexKfwR47pxkUz1sqc3vL6DTLCzWMCsHgoUergZqUTAWpnkeSbcyU3yigMZeKUUYxEgBFCqoH8kUP2gkWw5B",
  "key12": "4SAsdW9t1fP2S6gvddJ4h5sHoyPYt6dDcNecFe7fuwiGJzPSAJcQ8j1uBAMje4Rpq3tA86DqQirZgXfGF1t61Mid",
  "key13": "Hx5V6AHoiwKeVQ6ZyHiaAkQNTsFcaieG2AG7utpUuQZ9bss3fvsh21Sw4W3fs5Gtf2MnzWg7xdKrtzwRn1sM4Nx",
  "key14": "2DTdHr6bX8dxZEZDfLSYB42toBMRP4Sym5Jdug9XPDGMtKbWpiBjWDNGPyv2iNfcFzy1w5hFCsx6a6hQiivtSryF",
  "key15": "2nz8bNW6U2bi3A5QpUhQzpPRWVZHfMy1CazhpzCV3JaGJpyuQGH7tThddCzP6TUr4iRL2Aea72Kvn9XCiKEBM1id",
  "key16": "1gfrRghSFiCkRLi2tWkkchVVLMCD1JGNbJQSZrFwwnGJC1pNdQayz5kkohNyQ2aZq5QxWzmRBcqVFnAyvSVp7ca",
  "key17": "3tGDhvGUCJwutXTJnYMUVKdmhgmnRgv2xUYU9oznavdYFWRteaJem1uhQKXSXdyAMxoiJpV63emb3StMvti55wLo",
  "key18": "gHVaJy4vMnUbpc4M5u8awzf8aQGbQx1x1vLNj2qVBXptVzRtPBFUnbdLuRXnoQuWZgWQSMRatR3ErKx8AGemZiK",
  "key19": "3mKevjaiUbWvjm5H1X958nSuxE18kjQrbGfPNTrYpnBdeF44VzFpeaAXLhFNoeMHuVbouRmijHAoh8QfR2WfRfYN",
  "key20": "56W9z63cmxLtRCongnYd7SpXoPcM18eP5vEPjWTrUqPMurtvzkPZ15TQeygSHiMXqR1uGJxw1BuvcSnn9Xca9H1P",
  "key21": "27dZJEnsZVYhBfnzM7KKhfQh5rqGasjyE6igMxP8YAuH2Gwx5P98X7hak67HzYsZRCbdMXwwz2z6p24hrBSDxqZR",
  "key22": "5cQGqg8JwiPYxd86F6p941W78U3MqgnEoEAT4d9Tcxkk6aVJqoxDthUNMBog1yDmk4fKjxMJWgkA1jVwoLzYhFxX",
  "key23": "4duP3ckcsdLobdBSGGDRje88RBfwLzm95T4mx31W4dXKPoDAjJWZV6v8R93FR3cymihysvCh6773KRC4pYU5xSb4",
  "key24": "2eLK41LfMAhZmY63bAZ1dyWxc8MHiwQ8w6ZNfFz5n6bMMHvPCHqrEPj9mzqTVnPUz1LzQwManW9eTJgw39Xnm2SG",
  "key25": "1jfUC3nsCDxdPKUFrzLZcZMeXkQXCgJVaTYud4BvfTdvLnqzXzQrx4Z5c8D9ANvspXoE4yabMT96AS2AUS6M9MF",
  "key26": "44cvvJyG2zSAf6ZpLTWJVEG4y4us2rEaAR3qLnfa17Mtj49Zqtbyv4jLEgZZ8tp4Jiy9NSa7CA5iiAf36ztWkN65",
  "key27": "3pDXPuc1bDWH1KyipqjDgEXKvXkDSKWbhrQPVhVaWxst8bGCMZEMvPSg2qZ6SEXwHDB2n7wvCqaQSixURUGRrKK1",
  "key28": "4fxVYSNnoLyaLhJA9mfqx6bd62JS7qaw8ytZrQt2jRKbpZa816eU3ZNGEm6MQWWJ9XeQHVB7FtMLddqcxmX13qDz",
  "key29": "nbxYE59k6zcirZHG7J2AQPH4RXsbJDNU5ZbNL5ZVRQyXc6nxd448NwgiyDPSD3RAM81TBUH9SheHbDp1Tz535d2",
  "key30": "8Fsrzc4TyJjaLNbXmYYyMGeo3Uw6ZBFuAzDGXhniWEH363CodnjaKYf1WycLERXYR4GpXnjC3WuYA5NBFkkfGeA",
  "key31": "4tuEHAMnNRrLAHfSkxfm7WU7eYfVKuJ4y5taGgPMno6H5GUpNP8ZUvR2ZzxhR475KAvT9g4u6PGUHkuDrb5K6ng8",
  "key32": "57ivpAMMu8UJRCKCcpQgffB6EFgXf1bfyyh7My93g9TYMVPut6tUaZd7wfXqQShb6Esb6P35hE37EKhrLMkgxXaQ",
  "key33": "3EVqECfyZj2X7uU62gnypimvEk3EEkbJRnFuNFnR3Sbkq9mZ23qHWBySqygz8S4eKQJUP7j4nVezR77HQGaseCeD",
  "key34": "4qcoKMQcnstvA1Ndyu1HpxmxbxawPRo1yxYyHFh5A2YgZsKRFyDn3Mh3mEdnEj1TS1j7TYQJCNKvLPgTsbj3arm4",
  "key35": "4p187jZjeRpL9vwENBH9xsQpTbKMAUUPAE9eYYQzEMHuHi4c2ADyqQNipghjm3D5fA9CWCqShGSgoqixFDZUcJ6X",
  "key36": "4VhtbUaymsJWKJoZnaPxVdtTpBhCNeBUiWiHn3W3FsR2i7CMKQzLKJZ4PazeL19qcjPRPCJ5L3NUBVSw6GAxoRTv",
  "key37": "5E5936tT21cVDVhVx22Fifa2U77ZTUShFUGspF422xVoWUovd5DanuhHfGNY5JCBxQCdokZFG4B9vE4JBpLzfARe",
  "key38": "2sXED2P7zG9RMCxna1sQ9FxD7A4vndzAJ7ZMV8hQo39s5fMoYSF1RY1y6NkhrrZxnYmmEPiAnTX7UvakssddwbC5",
  "key39": "2ZJGPszDsyUSA2cid8ZWWXVX8Ni5X7ww8EiTU6CPTApy2hqofemm4omGcSTXJSypzY8vSeHwXdRVD97jE1dZfboJ",
  "key40": "2cGytRjXMX1xoFN5zvocQzazBmeuERixq6oQ92567Pqwk8yfx9ri8oT6iudGvVKa9LNAVvKAN1VmyYhytD61M3N7",
  "key41": "262btMghRBDaicxPQHFAMrAm6h8fsaMuZQVamaNrdBUCXQfGnfic8Jtygf9ep2MKoHwXaYnXf6ndCVTCPF4iriXW",
  "key42": "a2Pcx4JanTGadKbfJo2Zxo8YScKXRR7EGjcrSERmga8Rf5rqgYA5EVsjEVvZzhxCWJ189AcNSjC1fj14beMztNW",
  "key43": "2e2MP9jUJWSCJgb2q3Rn4ScC9sJBbSfseHgqEqrfgM4dFNhoqaV29yBBXFZi2WyJVEFN2iqLP2uBJkWMv2DNpc5o",
  "key44": "vpcREDMBpczG8jYQQJw7WnxazKdWw6AnsVDTrSHGWV5P2VULbmTjhRtsDpHrCGao9D1eew18gcjjxepUJvaUqPN",
  "key45": "4ios7dmSyTec5Xn5C6QFpkCtiWEXGEuR795KTQUzm2gKyHcXGtSmN7LWdeZHrnzNYXFUp3GJTCkEFfEGspoJznEw",
  "key46": "4tuEPRdxJfDPftQfgML7mGvPgsMDYTkMjEd1BiWTYP4kArK6zBYTRMkKf6EBXdmDrW9ZoVs6FwkydUFRo8Vm4P3F",
  "key47": "5dbTraxw1mqebSrUZsrzAEUicdRjzgyighkZ83Bsf3aXUk7o6hUSLNnPmi4B7iBhFdNjXUKifohwMFvwazJqojEE",
  "key48": "5nruPvMHs1sRZYJUFD8KPBJmxscokbrpCwhBkK9c3CtFD2nct4NxLHE4LkrQ8JYgMyQfLnaPTYf79MUXpeFzcHmr"
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
