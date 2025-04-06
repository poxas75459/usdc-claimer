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
    "3kV3PD8bKffNVhJVrcGFRWCwurgTWuCfHtuqkzegLudKMkTQP2cZJhZghjZfYhDFEMAmcz7xaZyMSrWcZWUYEcCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MCuMmVi5Dmao1ViQTPLtopHV5Xz3CqpKsW51FcwiHF4A7JMx9FbLRPt63BCSYZgrn4WhftsVRFcTn7qFSSjTXit",
  "key1": "tBa2ZzhAsiKXQdixs23kFdFX8Qzm66Bj5XVXX7oNty4YdqgcAzUDU9QZAgs1iEtpisEu8nFbGUrFuxC13J4Hy5J",
  "key2": "4FTCy9L5SzFXjHddwhQKzpDbjB7ktCYc71EcfacG2gerKDpiyA9VNLtYNsVxqHftLZEt7nyBPdVujXSmc5m3d6Jy",
  "key3": "1aom7WEo4yXq3YXPWri6mn6LeBw8BeSZEjP6WBhEpTGSaZR4kCRQtFJviHGDbTbGtwdNAXHAoxkeAitRbJvCwWK",
  "key4": "QuyPT41qDNyCXrfL2Q6pHTCUKDgkqxYjVLM3hJ4H9q2Lm7pUczgHYc4jb6h12pzF19Y4ohcqwXApZZDEjtREeQj",
  "key5": "5RnYpVBawUo5Q85rFKxHEnr8g42ifUqnhDvpMxZb38Z4TexjUXd68DXChGHywa6Hz9rEK3a85YXhkzvjSScwwRG6",
  "key6": "5n5fAfb3tnDc5jFpky15ru3fFckZSeZuo6Vkuqrf8M8zC3va8wAHzuc6oYpmZF6RFAVAUefQKyUCuPuXoApfKFA6",
  "key7": "83zGEx2sP7725ZA9NhP6nss5yzVA2DefZqG2FDaDs9XKepBecM9ULqYdDnatLBoocGVWhYnbsS967DwjT7wQQDe",
  "key8": "2pooctkYcsPPavX28CgmTffarz9xuP6SSkFzCThnqPkyHCmiw6eRzLnHZ3x21VWq1wukT4z9DpaEeSR2uWFq1tBn",
  "key9": "2rFoVqY1PhMckuVn3JzXBrxsG19m6zfSMkrgn3nPy8e41pLPGUwCvMCrEUNGHaq99eYgQWnfQDLyg2HJ26dcXKrY",
  "key10": "5L1qPYTCQoeJraMRSKyBbc2YCLrpyqntNhWZFfGB5vHN222wLbQpmFfCb64T7PCcB65eC2Q8typWJbcbftjzFu2",
  "key11": "5vzXmy4UShzxMzLixXTdkEb4wi5uR7uUmf7jRMp7uAjqtn5nsE1T55NZ72QyiNkXoYcdJSDo8KXLHGhfqEyfRR4j",
  "key12": "Ar9EYrBC6tLVK3MbsHSktQcxGxSLZxHDQ1k984iaSeynEFVcvEgkb4gzzsCjKcbuAYvDC7XLTgkizkWqEcsZ4jH",
  "key13": "2HouKrguPPsPk8R73zLgeTzLVswgUUqhhAB4KPDnCXJyw57pVHb2WvWKXCVRwCKSmi7rUyrdraENai17VbynFz5L",
  "key14": "4FoJ29otUNr7nvoJNQwHx99iVVFfePFCcSak7f5zjBQmebWKG6tbBcwMjfExp8Vr5W92dDomgPCBfhbJhujPs4wn",
  "key15": "3gqte5biTdV3ji7ZwgyvonvFCWD1UKbGX8bGsvoAztDDHWX6hpUcK3BNvjhNZ9JLKqe45KURMvy9zjYPT2eDM3wd",
  "key16": "WPLW5dfntPzRCawEQ1Ecnj1y6t93qCSGAcHtR45pLDR1fpDLY87oZNWnw2NJuiVwmcXPWBFJcgPVB3KbTbVFndh",
  "key17": "45xJTnq2tCZ9GUnjGTRZ9YeAmGryu2gqyWYQraBSPizarG1yKtR5xoBs89N46cdq5Gf6nDdGazxd6byfXtUF9Cgq",
  "key18": "4cAkLUrSjE52yAMiyuXY3uZt8AgVEV5ZoSSLndhJppGJxDMYaEY4Ru6rcJuzvZ39yeQ9zzU1GN49WrLNHKMqiJ7U",
  "key19": "53JnQPfUn6Zhh6Aq5t1vq51wDhmrtneASaJnwkzsTzT7uS81LRdJw1V2yECYxXHpC6hHfzwa3AV4mb2hoSpRdCJt",
  "key20": "2FBu65y1ncYseFdPYER5tzYYjKiQHXCdjSVEDCDXUzLtaufnqKMns1eDPwbNBDVgwTi9FgPeBPKxiKPFNRWMwT3p",
  "key21": "5Bsre4ov9R5Ad7X8jXzMzTeEB1DaV7RLZd5b9jkSnGoGSwdmsgkUmaYAKg46BinixwMLbMyoK898yYH42cMVbYpE",
  "key22": "667WJSRAeLufzjxPvNUL1C6Zv5zYkwMfWk7pyMe9nuWHmHUNo2WKMpckKM115E5ke4p59yy9nG91WKSAf5wYn4S2",
  "key23": "5RnMERG8drwXdWcUbcWo67XQYgbU7G17jciVreYk5quw3n3VsjhA3UMY2fUuwSRqjAutitWVqdCPQ11MAHGpYdzT",
  "key24": "3wQyJBFZbmTniA4JHAL9k8JgcgeB1dPTVwWJsuSGg5wpUcRd8w2aP2NgmgmsHFcXGnWMGoPdKUWriYfpLVyhxgXb",
  "key25": "3wjMfYcxAYhWfwo63V9YiW9iT8qEohrPTFGUVaLU7JSS9Vn8Q4RZ3zCXMowVS1NKBWTuGDed4GpCAJ8GPx9krjS2",
  "key26": "3ZuXUrgAxLw5J8dmgT2rSj5hajPpVpiBSyjqxx3nWqvVVAzWKHWnjt19ESdgzyqP2kopMQyA5NgtGtoA2e3uVUGA",
  "key27": "4VenTcPr67wucnpKggqwh9u2kbH9XdD22QiMAn3GuxfujSio3em43NVmwDhhPAYkZ48uaQxCixFhnPSBjRDsmLQJ",
  "key28": "3gD88n7Ls3nfsWEFbWyPM1dbUczvNDnkCFb95YvWeEKut4uRMAYEtJCYiXutrgNECtyu371fcCC9MxBuS16xLcLY",
  "key29": "4MszN13QchRiXBBfXXQ8nJaa3c6nq8DdndQJBXqGEcTRNtf7oYNhPqkRTzPaHbWkyQK7vn77qPqXnYUjqTPZectG",
  "key30": "4Q5JohPqyKCjfGPo36phV4xDrHUdYzqvEj8vP21yrfJMfuzib8bgpFX1nhsbdhKh2K3QMiQqmkJN3TtHVQ9NjC3W",
  "key31": "678VjsMs413LepZL7KjuoVqhfYzdooTmJKkzM1vDWUKFgLwa6YBoGrcz2LxK6pMjGFnj4gLfpUyNdaCZBWmGk1tm",
  "key32": "ZeCCPbL4Msp2uGRdTpEBEfynrtGNaFhfehf46s4GFpMgnsthYowvMes2KdUYYuktfokTofSershdXFs8ufCdM1d",
  "key33": "3SpGZWvVQZk9KuNHQuUCRT4A7YLPYsSFKMfoKzQtWfKZLEJ5eFeH4enjY6K7wzmqRf48uKwN5FK59cy4RofaQtAx",
  "key34": "Z94FDPs84ieLTxQzjhfpJxajpRRypcPyxUWGApyfhMD6kUvGT5Z13gRQUZB2jamxp8Np7RE3E4nKPk4UNvHkmwa",
  "key35": "34HE2XGBquts6BNsVqxGbcMzjXLTNqZLcFKdsubTP2BNKkpdeKwMkEp2erXVyR2Qg3CjDeJ5WC4eQ7MdnzFLLNkW",
  "key36": "5KdHViw25EmBkRDV1zCTcR5hiZT4GCg4SEcVBoDnkQT5fo3t27323246kaRF9raYPm1yZSSeHHWbtM8xts8DGSR6",
  "key37": "2L12rqbD3XeRYjHYjphHkLvRNj7W53eYDtnBXP9WteDqvQkBpWLie8UNQtpY1nUnrZY96kAb1sp9uyEn6nEJjPSB",
  "key38": "42nkFyuqJVbBG7Ug9PEJLgiNoRkcUcYA7DUHY3V2TyV912thyTMWnJNFe1rxcrnTWvEZFbuVXoUDiixrrDfLyhkZ",
  "key39": "3ykLFfS5dRBr9AMb4hBxpEwsdGqw8ZgpwTQqMfSAKDjUjzGgZ7WikUK2c2Drt7r1rye4Gkry7VYXcYhzPNNzdMBT",
  "key40": "qQBUcTNg37vgGH4FcXz67zRrKyYDNkemwC4ZyYuhTzjRr5DbktABgXWTeWmSpHFAPferTbUtaga3xkDvboupGvT",
  "key41": "assivFkvdX93ggtqbAX239me9H64HTQ8YA7sSjzX9D1osqesCZbguxBWi42ntHyx1UFsk1YWrSapVDoK17jz9B1",
  "key42": "5zqQFZ6cFNDpJv1P7JS1MPs94x2gxqQJ6y9WVTBU5MWRETXyApcH9bBz9fwiyLjbYZUNRbXVRACRGvU8NC7gc7oS",
  "key43": "PHSa6fi8W6kH589coUgnnr9FH5Vh6VYBbNjkcnVqgKhsLNZYMpXkZQEAmbi7rvJuhbPmmuabXvAGAKWNy8hD6yu",
  "key44": "4VCSDBZ5iZoseBWMqWqRErVCLo5pvPMGrAMaiNKR6FMirjmh5wgmoRk5xfAhkXNo7yrqrnkLzGbUuZZgFpFEALeU",
  "key45": "12DKRqxzXLrJLZc4PNCT4K8zi9rd5aEPj1saXoCsauNw5B4n8wyrjKHDNuV8BZN1jsc6R5Pr9kaTNyDw5nVa9oM",
  "key46": "2oMTd6JRLjLWJZ9JuizUdZKXQoLoDLKjZB1cx1LwqqRGwNpwKqzrmkCAeTTe4NeQEM918ziFnaTnvPcUo4vdFBcr",
  "key47": "4UhBm9cLZ99JxMdWPriJ1q3jypHHYmqWRCaZTk1JBbUqFco22mQa1pcATvJkNndTtr4DPEFTszctXQBNCbqnKq2v"
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
