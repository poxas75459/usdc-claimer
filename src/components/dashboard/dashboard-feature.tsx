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
    "47h39GAQG7XikG3FNfedisFv9EPn38Ja6ZR8pan2X3GZuoc7SPSRj6xVTSiZsiWbXBriCvqBMLyJ56RaKSQSAaZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7QN2Z2iYAPDdd3phUjqU328eXboXqJRrbfENd9VwD6JXKoqyVNkSSJpQee4uFAXoMCZ7yBVtn64TPa7ZAe7dxRh",
  "key1": "J1aZ6wRV9T332BNdLqkyRCZmwHJwK4bripCYWSMWkPST8CWVUgepctwvtNQmyAPaYw4vWircvYXurDnBSsK2ZDV",
  "key2": "2yGYAtVwaFW9C4uvNmQM9biF7JHdZbQAuPAbFto51jS6va2KHjdxP718E6v7C3MPJaWVt2w9SyQwJGZ1YN2pssui",
  "key3": "5EV1bF3tzt96N9AuE5CRLt1LwscMeXCUAS4CDY1N8fnT9Cr6VfoFjTBnjjM9dzHkoeotMz1VYVwo2G7Evyho1h3Q",
  "key4": "5JRGwt7JMXbzWuFEXF1g9LfyVQATkLNKoGBo3C7S82Bh7AUS5qkwTwTohfuvtNTVtW48x2NHfN1ZzHuLyTDeTNMu",
  "key5": "kJprTyoYLayY9Ue38MYktkN9ZnyBD4HXGNid5ro4TknmdeAxzUJEKj8aAmPDSZJKhvX2JHZnP5u6Sox9PozqSM4",
  "key6": "2qd1BNCChQSoUHaR9UbmdFWbFQHYCrjTQ1LL1rtuqCxBd48p1yRftVauZ3yy8H7Vak6X7fA7uxe1x3QE3UXZ8QW2",
  "key7": "cK8AXBtMmwWw5wARKZZEVWdGgeBMH5TqRi86kSm1WUguLkYitSCQ6GG3ka1h4saG36XiC54EXD37K3QRiN4tsjo",
  "key8": "2kx4HuXWL5oTEaTTQhMkX5x6JaevJzjc7DxYSPhx5UjQGLG7UVAtN46nGmftKHn6jF7ZvbyAEoSrkFpbP2T5Jq8s",
  "key9": "3z56m3ZFEckQFNEW1gDxdnyDiYGhEsR7UF41MspwoKCmddDmcsSYqp6ftiaEp28ZHWjbVoikfQkk8XfrEbmko76e",
  "key10": "dyb51joDcdJ9LxGtg3ZyjePBez8m4SNGxbsSymeKwcuqc8wShQx2VSDCFp3QbGiTjr7ZoEVhDnzQfnJ8vcTLG33",
  "key11": "rznPvjNCu2EN7kyzhyGWnJwBcvxgErSp3jEifzPfzHb15yxNWbuVS7piKXiFqYaYj5nFBRVAjZi2ZCMicqPme3Y",
  "key12": "3CYVCbge2c6TUQzRGFr96cKerccXYfkxXDgBHz6D84QDU9qZsQYnjGhWpWRrnoLkqmG1xQ8tABCNsRaCCfwF8es9",
  "key13": "5um3JVNVBecu1ajk1MW9g1j6qhDGeZ6sv3e87RgEHwMGKwcvEBB7LZGAZkvknYB1kwaTpPmdidNzWuuChSBRXiDd",
  "key14": "5sfeyLtYRDasnC5SStQdRjcFizwfsKVDBahvFEXa6L1TPhQkQuvi6TKydTcq1o3YoRvDPFBNqWyy6eQS171jEDKF",
  "key15": "479rYbaELkxiZ6MJxenE3cLJTdb7tfwXMm31TukrY6JQ1mCEhwG1UyZ8XUrogFyHF1mbHSANTEvEjkMTic6WaBU7",
  "key16": "3thtDcDRVZdTHG6cBJnCTzeETKGb3HNrfDJLGzUxErzGHdSPrVfhd4WGYD9qdj3VSwz17TMVDVsjEa2MR87fncWa",
  "key17": "3sRHPvYv6nxiL9Hqz1qYJaVvHbBdxYsnE8565ZnxsHwL25mqQSk7N55PZc8MqDWZrBQmW7iftCwe4RFY3txnRBPt",
  "key18": "hN4vN6V7bjjB18ddGAQqpsDWkH59SyibUTB1SsLDUDKtu33DGHUddFP1uZ3bvZjB6VTYhyTWXwun3pL8p6mkZyS",
  "key19": "58WrxpihxWPXipL41JBGD4dhE6t2xij2rQCwPjd1EiqJ7ZxgzYYeuaT5EHDEEavr5B8L7QYWUMU2fERaRXNojfQV",
  "key20": "24uaCD8W9SKca1Hk3xvnG3jr6AEZt8iYGQzAGGzDU2j6WPw75XDtAK7XLkKiJj55oAs7Lezro2y2oQZMiXBBHE6E",
  "key21": "35zXS299grYRygPTRyc8d5jQN1Aoj5kmd2g4uFYCERBVARhB2SYb5VbbcB6tM1T3yKx5fkFyiouXCF8uSYd6Ex7H",
  "key22": "6Y6MNyCLnaRbNjCiK3WXvHcSoCjuJMD1kG6BWvtkgQDWHj923B1xFFRMez4qZuefCvYzhLYu3MQhWrLkPWVuScC",
  "key23": "3WVxNkGCUUJv11MAPFajZ7fcLxKFDXg4WYa67uMKc9dGgbfZs7PxP7hjS7UmRSQ8Vo1fEwuWiYJjZWqEDSrVoeim",
  "key24": "2yKCVh2g84tfA2TwivVidwphH9W84QUenmF985HZhuDsE1MNotfiwXvbQfgdywVz7VdMrEX5zqLabSTgi1TehHdW",
  "key25": "5hocqhdCcgQcCR6TbCtMQGc2buvobb4J4VWLc2U95DM9f15z3eJsq3ok4UjV2eprUEPx8rNC8z7zc79tfe8kAzy",
  "key26": "4fUVKgtTJTT4aADoiXnnnwzwkMjdwDkqYqnuQ3nhuGcoiN3ni4VHKRQhFxk7d7BoKzxGLnWeNg295tgyMeS5Bpw8",
  "key27": "4ggGtQLor6vsf6c73MRCUQ3hyR3JyY21QbfeMBSCLqwdaqPkmtGrSdbcbGtZNDtmXtVKRiMMetFx4brEDRScnBWD",
  "key28": "4xCXPuNT9DCJofhpBewRGwbhdPJuGSLxqSWc7fvBaJ6NyMiGAbMaENvUmSNhHn6LGiPJxx3DbG56Y2Z2H1acbXCB",
  "key29": "4q383ccrK4CRu3ciYWbgfq46C12iYRnPQt7obDwdAhp9KwUGXuRAy4oky7LcN2BZodv2uHgfteVreVYSDphWiuv2",
  "key30": "ixCDZsnh7ejKMhGXibwD2VXUp3uUZ7dZqk61Hf1o7vJpTdYKWz1QrdHUsygY52UZsfGgi7KNdHzcdkCJBSMiPcG",
  "key31": "4DbFtJBmkhzXrY1yYu5B6mZKcLRq9FAJMg3SCK5HLdrRoDqiSMRXp6YaLCvPSx4vjidWTkvyiu1TU8xS31iomb2S",
  "key32": "VjtKDpv9opuSJY6b4JLhbU8rx3qQDyQsvy8e6JQabVbf6rRgzrqPFL5Y35mhUM8kdEizTa49gvmQxjsoyFV5w9o",
  "key33": "NPJHamQcnGWxqUydc6RofVhVzhDoGfSeHvipNEsqHfE6fYWeVSZSodG6xUTXktTFbaLH5DLqq4nLJ9TuUp8vJph",
  "key34": "5KBL2tDeo4bNofCwUAFzftkcDUtLbreQnhepSGRE5Pya9SqiUeSdsFhnX4AtFv2jkmwxQ6ufBYs29ypv7Cy1WUSp",
  "key35": "5PyXr2i7t1NSMmJSZbNr4roNtdV8k78EHzR5AUtts54bKaAVXcGUAgyWG4GtFxVmcEjc48C6AUwicvryzohTTNnj",
  "key36": "3Pur8uxq75q7yeaLfgm8oUf8f57NtmLaEduCAFbYoRrAfEYURenbzHrAPwzw3BavooTLBbN6tqGUPUPbLpmUpdu8",
  "key37": "VsvbGtjSYewnPgxvG2pZLLV7bGcMsKrqQfsVvihxxQhVHAM9W7MnqnnTpMNinfV41k5A9nW7tZULmRLw58Untv6",
  "key38": "2c1wpdgv9GzNzXw8yBx4LCPQEheSwyQTecF8g3DMe61Lc8c61JMnNAHQ7vB3RRyfSB3jCUJrd8kPQNji2B8uLFAt",
  "key39": "EMTCFUY3jHvWFzTLXogDB8o4An5Ahd3BKKH39uCNFzfuHZ5HYz9w6v2ZALKYYTd8LZrqtW3Esxi1bdoomjitwWa",
  "key40": "5jtmuDmkAejWdeU3DbwZdDjjLJkvD6SpwYGKafg2i43xi3AQ4dZ7gRA15UPhcDGHaQ4rm4sQih3rjXLXuxb37JeT",
  "key41": "5bZe8twzv5C9YiqxaVu6Wd21uveaZqHFvxVSLSpef4ojdchUoGksuvrNyKStkVyBxo7V6gC5FT4gm9yNyGFrZVjk",
  "key42": "ZeDWpFCwfMwfCrqyBwo2EyyabLs5NF44gCGDG6e33G95mE2sqbdTM4YP8LQrbczyshntCLD9ghfoaeezQvqQBNg",
  "key43": "Em1sjZPJfwQc66ACnJnYscSvx4rqxsSBppujDymMmKB4SeuPzLpXFku3pCX2etkf6SyKsQb6WpVPaHodDmvPxF8",
  "key44": "yBCNyfUsago6KBDkFL9RtKShZYLG2noT2oKy9tCecdwgesEMEPLGxMeiWxncz12LgGLTgwUfNBFF7JXmVNAnSoV",
  "key45": "UGoQnvGtiE1CSjnmYNckUfPG4xpRotcBNKnWCj1fSh7KjPCm9x3QSpp2B6Qt9d4pscLkJLTCDe3W9BBh2FuWQwD",
  "key46": "2EoUMdBQ98MWCBRKKPHYYS1zoCe4qpmMSAWLb8vp1rrzTY6peK4ZoGQMntWS1Jp515hyfBJd58ExdLDbumskKTDz"
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
