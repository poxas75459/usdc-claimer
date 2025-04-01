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
    "4VxU62WRNZE2ydzX6Gv8ZHoEDqUL8nSnZnTNyqxxuYMoZQWBdQitQMUxtnPzRRCkGTrT2sRofuc1cbZjydidiSNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y7ziiCGUU4Zinp8vcbYqV4kLAeoGsP1KErD6VS3ZpnzZQQax9F79Xjzvw5VLFfkjYkbSA8yGXejWKYox6Lj6yHS",
  "key1": "3AybS2MeM3pcyjgj2ahtwSs3EE4bdBo74ybpsHm8GG2Gq7yHUGNY8hudGH3fyqGGny8fhVLvgRH1L2eeHmXxRYt6",
  "key2": "2yKetcHTQpcepa3bEKxyekNQshW6N6KZZzaBXUttNQEDzgwdrChxRnMPRkPD1dVecoFxjB9D9jY9ytsi6Rsgfuu8",
  "key3": "3Siv3zFhKyzzkyg7ig3SVGtmq2F3VinQxioq7qn9XeitshKBLjdSajAAA8qV5Dh7AqYv2NWScaVgyJjCJR6H3DpG",
  "key4": "28rnAgqdhcAhWT4T3Sa98BnD2YPbKMjLs4jFxmCyca3GCAyvyNWFvvKeghMR9oMGb1qMFsdsMY94z2WkF5qEh8c6",
  "key5": "g7wEs7amQy4z4wNm1gsZx6JB98nQVLZQHLwMgfg3ie1sQs9LzU8aQuw4B3gzgrFzEam6u8Jd5aai785bd7d6V9A",
  "key6": "59iKrSJ6xzJyWtJv4XWM2oJFkSn67Yw4ED933XFoVsnzLfgXEEMwrANBCvDkZij6bQHgbWtooCSJCXeqqJtEAdab",
  "key7": "3tqKBoDtPdtKdhwbBEcFfykWBa5MnJ6Jo9eyGPk5UnkHw7NNayVfauij2GGvWpvW1Bo3kg1s94eBSXT5YWCMEkQx",
  "key8": "27HYVU3kb2booHH5ykGYctYBKFL6s99ikKUz6ZcNaCau2UXx3rABULYMrDMzWN5RCA2HtCh7cuwHdAMyhfMEoRnL",
  "key9": "4oSaCQ4P5L4phZWrKREHZatHL7M4mG3dkTcrdM3Rg5MbENY3DhSZ3qTVV54SAV9bwbu7T1CsMA19bZnsbMYSAz73",
  "key10": "4PZgmAEANijCoFPZGaKQwQnvYwdWQSP6QqSUWDoCKdeSrtmS2WVn1EYKtq783MNYf2BRDEyU9Uvq3fTKKEuroffY",
  "key11": "67LQ1ePtBnWLGKBnnZZvktHSU4jSv5PbRAhWXsWKERZmxEDedUiY6SuiZfpH39rbv7hMFx2nJrsmNUZgFhf9sdj9",
  "key12": "3nizh3tuSpGShbnV3AxQBSNUukya2PzkEbm67LLu5pruJuAw7GFxM6FnmvMvoJZc46p1dUFbji9qFAvJyPL4ZUzZ",
  "key13": "47xZjAcotmbNHW428LUKyPmK9UMn33q7GaD439PX8X66FSwdoKKQ8dJKmrymee4HfdHJhEmKyNBHsBVFsmG7i67T",
  "key14": "3jgNqrFm8FM4W8AF2WcMf1W122Jp3hRT9Ey8fSGs7uwm3cLc7ro8mVRWCA2THStHme9NFzEEVKU5r3RimGoQe6xC",
  "key15": "5Qcytkti1dmb6TdfZUysoZwYxYUP5sPgBRAa5uG3x5gd6xJnLmv2U2EPMvp2XTP3m77Lrx1VuKShyUECPsuyCmPe",
  "key16": "5dw7LMr5R5tmvSYiSVQCcKUE2joHYRUN6LbBzGwtgUwBfS5DHPWKyuBHu2PVyofMuWzEMwRu7Ns5r7GCY5inHaBR",
  "key17": "7xi2BZmjUMR1y95GAdERS5doE3rTYUTQqbVo57gpVEdMm2EeHj9M19ufhQCaxETMHbMiWxBqRU7h5TwiNxNz36j",
  "key18": "2booKckpfnTMyhjpucaZ5uF4Bm6cduBo2YhNe3NtPrHhGdonL6N7wTRm8oS2mjfWqdFnj8khsqsgP526vRfr3CH8",
  "key19": "2bi3biBtHmE5bDGXyMyLFFvG1z4LPyp8KmeaJtPZnhoktPmDgJYzRh3PiztdpimHH82GuN5KfgA9s7Mf3NHJF8rt",
  "key20": "VreZD6NbQKSwcMujh9bYaZazVsPKCdAdaCfrK3gqFVPmUQ8QbmphcsY8hh1o3mAnwdbX4yCbejXnvwCEzuAERhV",
  "key21": "54zwMdx8K8kprPjWxCrHSf9HAziKsnXSLwcSC8WBiiCE8HRoU8ewQUNXjK1qNuPPcCa7wxGLTbF9e83RSfBN9fiG",
  "key22": "523bCGw8veS94sMYahicocx3hnJ8uodjn1MPzPjBwY55cvUAE2oR2RNVtqDKTdjbA6uTVb1Lt9RRyQUBKfPTDVbJ",
  "key23": "2cUviJC1GgKT7JgQtnwACNJTrP7DUQTWPwwRWHLvCnp6MSjbEMKb4yT5upLrbH5BeVgdoLaG6U5fKzU3FVwnJ3us",
  "key24": "jsCQtWzrHmJVeiRA5CVHAbKmkTEsT434TLCKe4uAHMck1kgcijPC7xBdH1swbxj7Nda6cRNU7rVMT4D9ZyBh8AM",
  "key25": "2oiKiPp4Z751d1BkntoHM9E4edoCSJCRxG9cKH6bH5mpcLbxMe7b3hhDgeyypLSss2zPCm8Qk9pUVWzaoCi95Epr",
  "key26": "G3zwC8gAhJ2vR3hZVotA15KwXKKQMQrvte1w7TWEqrWFkNw6r2ZJVJ4KLWxu1UW37kWKCMyZhTYXzmAjnpUMGi4",
  "key27": "3HEMEmcBnYXf8CWKVmAvZR8DE31EN71Uj698vX3JqMDCbFAcgBXvbeurwktdF7y8sETPt8A2VctQQnXiW81P3PGN",
  "key28": "3G3NVg8PpqkCZXWLao2FQ8QhLxRCiJtSzqfPYkkqGEcVk9XuDtRFJ7kZgN8bLirScboV8JxN18BaqkGCChfxfNPi",
  "key29": "2DKPbfM8BQY6an3BNwDNCLNuTLFWYxQsTcTtvBozL6YSWBxkG6RDpHMt7E9J2cX1DcpTYX6w72NMJHn7zhGiSZaP",
  "key30": "3fxSBnNQPgWP9JAjnhzN5UNFVUVqsc5A48PUVWBz5pRfMRQqKgYgLXuEDHyC2YANdT2Qfzw72pGt76HH5eqs7iM5",
  "key31": "3jaWyAR3E8Pv4thwJBy698tAc6f83XrDrdBwzokmdphNW9RC5RrpdPa1PLSanv5ptUji4hc8EwFPSkqH3fEpEwHE",
  "key32": "5XfMTrvseLLaBBqUeKqrPrhCHTXdctgvbgbsL8sPBU2Kcdmec4P34EeHakdJLAow7Fk9ZF1q2dv4fdy5HKRbahRE",
  "key33": "5oSicBrEaGurDMuggZKwPeqjBCYH7P2pFdSbi9cRaBRGeBTd6jafaAhf9vHXrPhFVYS8zEFd6rxxNSQXL9M4JBfi",
  "key34": "2Cjh3i5qb3iNpzMMY7j3PtYULVQAJe3pZLT954PkShPnFxMfbp43YC9RKMJiHJUBqWYLL2LuBKYFBwCi6QikPRk8",
  "key35": "5etqZngcruKTxtRE26BTaBhFW1WptdfQqbN6pLy1YEvMRcSz3Ds9gASrQ3Mh1zXH69VLDo3oSKoVusCadXK1WDDu",
  "key36": "6Y8cYsxr1DQZXu3zBgTS6hsKTmhfjsBoPBEhkaZES8LR7RR96s3MKYs3LmjAaEWL3GxnUERzCMmc5Gwt9yoA4io",
  "key37": "2DEfGg7xq96m585bkkUyQAKPXqBPDVrfRiK5LTLeY4bBQGRprjpDvzyJpfTtzUVaHabUseLTFD4xujrakp8n9Kuu",
  "key38": "59PBwXLp3A2Y3NKkWk9GPgBupHRuoBneupYv2BPQu7NikhCJ4fmzrPNiVoNVYPMkhaczzxGof1ZQdPGGGrs438oE",
  "key39": "5whLxKeSe1c5vcA8JduhfXfjQA2AphPvrt7RyXi4wvMGgn7dY23nj8dyCecco37j2o5GMq2sSyUnouz4Hk2SonCB",
  "key40": "65bL1BukCD1XQcyqA7GufuJh2QY77TEBMY1YQgipsNWnfczDfESFkx2geSkTyypPzg4tTT5KLovCVMZ1U9V1cSkD",
  "key41": "5Y1RJ4uPfHVtVaQtV45rV3BrcFqpBW7APNdVS7foQj68YiJSVLCo7APgD5x5hBv7BikxVcf2TihhAHKNcNNNjK4C",
  "key42": "3XBs82pvkpLpr6DVeNEqM3qDZHc3T8LsAAJPoGcbVVZGdA24ZkKJAaE6pjSGB9UTmD2rfAhTqmUjv5zjPzYYnpLP",
  "key43": "V2aTdknWPD3jLWjPQPGMaHuEgYuMdnQiTxTZaAhNH8BTwNzBHB4AUsZm1nU1J768x1mUviXBNQVEME1HcWKQ4mv",
  "key44": "a93pQ1pUgSL1mVRMjjTSQQCfuTzaKQut9yzj4w2mFEU1F8bNxF65DNsyC1SCwYEho716J3Mb1Qn2TgT8vBdrXy8",
  "key45": "2yhEgupR24VYxEtTfg19oz6gwuYPe8TFKrjCtD8Ev6TxTui2vgtWYiCs7VDK8VrpzAJS5LwbxXmfgPP5DmXBTDVP",
  "key46": "3S9TG4Fx92bggMPDQ22p7SHEqv4BcFCgDBthFdFUH4zh2g5VUQhUEAXmZgDw5XXNRpWCWp8VaoDYKoZhFxUGiiRB",
  "key47": "4c1pAruof7uB8vpZwVZzbavWLZNRQJTbrJujVpvdGB3uioBMqcans9CBMJMDXczhT78BQUgMjwmTAvwWgZzyZZHo",
  "key48": "2UjpxZWvcVqvQXMb25bPs36fGwxXmXSWQpsdH7xpo4UXLXnnDQDGwCTw5gXBoEeKfv1ua35FVzrvxiWxL1rDLyss",
  "key49": "33GsjZeeVtmtkexT6tm19cQPEbNA61Sbn5ftuYCGYJHi5NCbJYZAor9ZNfmNnbDysXuH9Tbjuiqw2wdoXyzEcN2J"
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
