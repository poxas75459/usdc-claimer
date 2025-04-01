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
    "5CD36CgMLgf5kfge99zr9FFMgaVjUviLdTPRhstPKeJu1gtBdq7R7hZqwJrgVEm6k2wfDF6tR18NM8cRg7RmgJea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BNH1tPb3nJTd2r5poYGHN6L9KSneEuNNieSYeARvAvFG3EDXEGyB9K95gxZmtxhfmPfXY9aCE4hk3JLpfX5xJmw",
  "key1": "5u7n4o4oaTK628BFbJVqB2NZbG2kdrZq1ZzXbPcshFufQhLLZbNfP8fk6AeLDRpQpPhuhQcdXKAUHUXzDpDwoqks",
  "key2": "2H4EURv2sFEwKCPiceHDCeTf69zyCGhzw4u2zbuXBJN7LFytejbQzcGZrazwXPtV8RggWfdvZ9bCEQqFYnntaPG2",
  "key3": "4FWng4Zrn4nfBBCTVf1P7wxaB1cbGzU6ui3n4Ky6KNA4KKTAf1Z3y2Nxa17xD1aE5PJxJAAngXKmPEsBvsKVEEDT",
  "key4": "361WUgcSBN1QSiAjU99gR8rimD67NTh3BE3xxvUoqu5eqZcueeihbmcpQ1QGTSVJ2Xz2yyjTxLPyAspU2DqKWVUZ",
  "key5": "5Age4s96ceN1GhV9N9xayndvbWDpCKZdppjeUfkYKApLfV7CEFcCt35EjEf2FyhY56anTaow7UsHguXpKsRNZf2G",
  "key6": "5PNS4cdMC792aEmFokpWoRcB34Yyae1QtsQPw4YH2KAhHJ9VxEJSwfs53LCSA2Fj14GgUUtEjLGFGkg8iXufxCgk",
  "key7": "39QvL5CHrM1ZaC5izxzjDq9YL5xjZoZ84ba78GdhfCTPiqJ2skjXoG8xuohMwUA813XEuqufFVMSCRSd4fNFmTzZ",
  "key8": "4vXn1hya6oMfoFgPpHC2JbLNt1zkpLB4ohZj3coqPLwHXkqu7gF5j7RD5XpdjM2w3cKq2bFTFEvQbVdoiWp2HEPx",
  "key9": "48yB8jzKPTeBVB4zVCW2jXTKoFxmLnagbVatr65zLCKtrtPLGvsJq5x3whs6kfZG2x4LdwQUBGAVBbsYMLKMiTxt",
  "key10": "3EWzaGGsD8ur67K3LVcePBt6oEZTK12dJt7KENsyuKZvHJhWZRhAr7zifTEMZmYV2jmXmRzKofCYkkjZyFhHBu8v",
  "key11": "5LEpqhtj2YjTqpbeeCFEqGtn8wyYSo9CpweSZFsvDfP2hfwvBJdUnq2ydSx8Mx5jdTcbHzsKQUYsWPQWKbkiKSDE",
  "key12": "4FNzM5FygznbuCD6SsVYXLn1djqgSZ5VzNirq15Mux7HGayJtdjNMp1dFdBQ56iJeq8U94qSSJcbRyukjEuZapJU",
  "key13": "aggyyihRR5dWPqv4cfy7ikQgCUooAFz1dTdEMh3Yv5sqmA9xDGP22F6ZA1v9REW5S2B255uGa2gNaFdGenJnAzj",
  "key14": "4t3YJDZ1bYNnvp2tasNazVPXbaGTZbLNHCP6KjzQXFSzFeSEqWuXpWKw5Z6ZqthxVD2FCjMohRNhUAepbXk92R8M",
  "key15": "4gxSgzWGKMuKqWy5E9tFu6WTibMWwieeTGioFMBPAXcWYiYgdGwahaQ9tP1gHkA2293RZwVfzvpGxs2WgaF9qUjg",
  "key16": "3ZtwgZxM5SygwJL1hy6YqbA2AtDtcomULcAeU4TkhnSSa1MqVESJUyScb4d51KtqMSTEaVWNMQTqPScmQu7MmbRy",
  "key17": "5Ehpj2vawZcpWnHdUA7mwia8oxYjymXAtAdtnNoGZbDsuwDSY1d8MtVpo3vZERoLLNwyfnBSJCR6iFMniDXx9ohy",
  "key18": "TYL4B7gd7qBxrXvfZ9GiroHTXdNmXNXuqNUNmoP8gUuZB5FwBE4jtN9nhgNKrbW4mvUBS4qPGR4MWS76HrJzBW1",
  "key19": "5ts7p6BCZYxEHBMJPxdeGNgcsunGaduHtdBy2ch2MhCF9oCzDheVB4AXSeyXS8s559aRjDD9bhgkE4FfBck4vGJw",
  "key20": "JHJ5KmGZfgdghNDqmFgC7dGfrs7sgZ8wV5ccYdQctMYd3D2F9YUYuFK3K9DHqWRagPdSnJ42cB6s69jhr8aTzpa",
  "key21": "45A7sXd82UTq1UPsZf1kKUbHnjfcpnSj2K5PrjPNKG8o76SsA1FJXJ8zBwdc9EZJTbK7fAExh2bT2XzhgDNocYyJ",
  "key22": "58MzGrpNu6Rr8acfudqwmMmYKr5L1364XGauaqDFLXNGqmz8BSwPJoo6BGmZDP9wP6xuxMwALCiue6sU8aP73tqe",
  "key23": "2C1uHzhct8oaFfWF1akwcgnfGnApwxwVKRiRzYW2Cm77wK7Ynkn35kbeBSKrCDBqYSA54x7kRZ28vt3RnwhTThrr",
  "key24": "2mT7aKVrHHZAvtAHBFyw41ppD96sMPSTSyKS6eozroGvi163VBDDBZp3dAr8ZXDZ7QvwAJ8LYtxgFQJWsQ2CKgKM",
  "key25": "A7Yxh9BA87EhdUyr3FiaZqoN6d95q5RETa7Sy4J3FZcrj7nQE5WViTpQEQ7rCUfENV71j1QtfqyhfKcJ9R5AXCa",
  "key26": "5Hmz3BEMSqciq4Qua1uR2mMTePTm9Yofd5c2YQk6xxdyX1ySMXsa81ou4fh3CyKeK3AiECXQEGvHC7Qpnm86fKa1",
  "key27": "gqE3yb5Ggp3BjQrHnJpn8KLy7AwCQFwW59nQMupZQxW3nMhtaqkW1XjF9G5SjsfHLgYT4tsxUXXncbbdeEbpMB3",
  "key28": "2ikyHRdSSZ3ThbDQx8S8cKxcfJptRZcWS3VXd84Pa3vAQ4Caw1UC6TbPd116nse8kHeKm6Hbqc7BjtFw7JDh9CsJ",
  "key29": "21d8qSZ8UmQUWLRJUazLMN4RzS8z6okwN6HZKR82hAsT2fATMZEuYsf5qsKm9W2U2k1T2AmwMa97nALoWfzCZTjj",
  "key30": "3HB977PRTbtk6TnJ1ureZ2DNw5TAgs5iozHw21STKagvjHwXPfLjKxJGA8YiJxmKKDHuUopM546rhb69aFd72HhG",
  "key31": "3AYpoVZtBD4mJRFGVEL9Ad2MbfHmbDSkYZMLU8jbJpWBugTobteMoh1gZw64TbJHC4f9UtGd4uwuG82mr8sHVtBA",
  "key32": "zcJN4CpzhigbbBBx7auxeDNCo8vwdZYQQi8vvTzUPsuVz6PGLZVZNqWqt92k4eRRpKzwcAGj7XenjkYJbj2DXPg",
  "key33": "kXJatVfaNCmBdq5MkDWMrkcM3N1XbdNnGmCu2X82nbBqCSGuWi81Jpst27isXLjUZg43xDQWcQ7krS1eo8UDY1h",
  "key34": "2XPyafCuWMMWc6BUodFcns8QcmRdGAb34NxcsoAocT1CkabVEhQoLbWHEgcacLQenS8KoH7H4amqgdHWpGjbbqA1",
  "key35": "SqA4EUFta9PJkcd5doYzMrHBEwUqMmBjkbdZJ8yx91LNqRWW27PLwKQxMqC5mZM6vSTtymxC5LyfAV4Dx1exNr2",
  "key36": "2JyPTssbDS9SFMvsjBbqNUQSdNUBepATe6gYpxV8Zbh9gT2mDMywcD3S1gfXc7UAp1YoJBPmymoGYKFoY5ZDRAEs",
  "key37": "48WQRkQxGAQKUaBZStTentmp2vsCmkXbtYYwUPTdCDACRqXpbq4fAk61qN2ru4n3yv8iUmey4YmPnv4S1Ttuj2Pd",
  "key38": "3wMXwPr36ctkowg4zYmdrVyCqoAoj81MJyZYGNQZx32w3e7epsvtAvTBSscrvW1F5P7uZC1JXnkZniSPCGxVg7Fq",
  "key39": "5wvtVcjoqj67bV5XWXcoD9vLWRJn3kbVHY1cM2iFyeyiqWMsvgL4FgCVVX2VvKCG4QyYWPDRXtTvYxW6BMg4nGJZ",
  "key40": "34SxL76UqvpeKkoHnReJQZPB1QSFxebvToZh8MVS5iBtj3k4wW3Zjg8HEVpR5uF8sxNjJkWHTRqiEsTP54ZHQydt",
  "key41": "5yQtNK9Fk9K3FspCRksukkZ6gzuYsksCkT1wH6MzsjMNfE8Ermz8ZEtfCjvH5EShGTkmT8AZJkqW8vMuQMw6J1tk",
  "key42": "ZwWgNzCAeqtB47AvJ16bzS6VtLC3nVoFTxb3wXwUqd8dfmf9WprVJ5x2Qhz7ceFRhWfuzwZyNVfs5LbcLV9D5yn",
  "key43": "4GqFK1A1LYB4bLkWfqrii9DsgDF9DwkdrQ5S822egu4c9ZEiCFaN71y9zcfMvbY77XnW4c6617HiGXk4iUPzcLDy",
  "key44": "53eJuTrMyDsfQ2tMBsYnZBVJzu8wuqFMdvHGqbUbKWoHkG63zHWRNuc3KbXfGwx7uer2NzKnVUnRBnoZXCZKJcW4",
  "key45": "3iEpFiEA3GnDJ6v4Jhqd81DE3vMyX5aETL5NBHM1p6YoX47aGfY5TsN7xyxsMC9v2rPUVEcX6WgcAhWZyvBzDBcp",
  "key46": "5BR3KuN6eAAN8MYvLUUh75GqyePfimnS8xCUQiq5pTqKLRaXd6jDkrtW8ZNoyKJ9P968hZY4xAaRa5488V6RXzHa",
  "key47": "2kLPiGrvPVxc21MDMiQjDUb7c5KTKTEofPBd5Xxxq1V4n59phmbHZaQYgUe9kwMo2FzGdJmJuLGEmLgWgXWxEtax",
  "key48": "cC9TogFDMsKJrCgfQveaQhj2Z8vchcT8n3TpsoGLaUe7o1RjCtanc5NneczB8YXCxwus1SSYgQ13Qis2jNvHGZ2",
  "key49": "26r7dXFGVkyYTRSdL1G3k7MNLSCcCbVDeAEApB4GxR3GcPpHC5C1K1kDS8ZH4cURotatZEAhSFDkr79QHBLgerdg"
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
