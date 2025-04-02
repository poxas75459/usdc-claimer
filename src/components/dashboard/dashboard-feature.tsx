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
    "3VqDjM6LMPBFsRVvrVCQA59UUqGW634LYoXUoASGRZDUAtv4n5cNkV4LkJXCQbkBTZsfbZNZAjkKokZuc57xgtAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65fmnuQspDcr2pzsRz4tPRchW4eocij7vRAJEqkvW3rmNSQyLDZt4UfrPGECgRMc6QqRwSuDH8By8idfmYjWcv4t",
  "key1": "5XBXfmVfGZTdgMZ5Fv7PPqJrhnybPHWLh3sSrhDbNsWwzvvk7LNJtnzr6ASB4QLNgDo5ie4RjM1LwT2jubYMRQuw",
  "key2": "5rtpFNvcTTcYtUiq4HTs8YHvjXEwf1abRtqYCYuE8ptkpmG2tQYVGRnJXJTkFLHXoM6bPTwErtSRsQA42yprDx3D",
  "key3": "5NQwJW9AUy6c4B1cDZgioNixha1qv4hLCK6WkVQW6y4eaYWh2K98o3ASSAmRs8yFkpGZmNKDpBvHnUHgV7rEveze",
  "key4": "5uSwc6LFs7MtZsE9nBJTDzNt91JVp8mxCDRcBsUENoPZcFLzrTX2WBXdJrSwctG6PEPpbaMKT2oxMNUMPyW8pCuJ",
  "key5": "4xjyHsfuJqqNPBd8TSwK8Wd8CtwtuTd3irbQbFqP5hmBRCmA7xUmQLfKLNToXXmD2Tf7rhtu5fSmHRJXQw5A4S5n",
  "key6": "5Pw5fETg8kwQmQXqHAMafyY4eKXqMYvDtPgjs12UgjKJKhLvWjmKA1FUz7gnNMLtnEz5vMcQhJ6hsg4qmCzuHfjm",
  "key7": "63DPZnM84Eo7uLTwaVo2LVLgNKaWeECB7Lxq2sqWWCoocgffWZNBgddNUUHNsBbdPs6GCZ2sWifbCHmDxg3kp9aR",
  "key8": "qLpYiPSTBDfqFBz8sFQxt53aPSYdARGUzK6WWcso4S27Y8uR1U8fvCcVZnRFkwgXbMCyhRvx8NkXV7dFv23o9sP",
  "key9": "2MHcoZe73P3EfWM9bpg2B94JS5tT4Vrn4NWVSJ5KWiMQnDDpJZ27EKD9x3NoKmU4wQ61dV6otK8hE2VKAccVCCqb",
  "key10": "46RyJLWdMK1WrMsnwDnTnWhXRTUehxvCg1BqL5A2LGsBJxoWFnM3xN8yXsLR3snS7C4mfWg7SDtoANrQC9g3qRWn",
  "key11": "3mExEJRrXxs2sWDKaz4scQYAxCbPH25SWQu4rMJNS8J67obTX6NVs38LqL8P1LK8cRnkwzu4DWzQjVWCwa2zqRLw",
  "key12": "62VXG2TCTdEZgiScpFvqQE5tP6sePiVLjSmXZqrMmbKtfDirA3iqH16wDdbwbRS9SXndEtDmmZ8anKktdwLRg2XN",
  "key13": "Lpi45SESbG7kCj6FpBin9VucR2P9hvmbe8hia9FasBTwL4wLd1anyeKVqt3a4b4yKCtQLkrFXZX8vZUAdHGpXSW",
  "key14": "PJjoJVBnMgdqJbwH73rQL4hbTWePSajNgrjWj9CsFp4UDLbAHh6ZYE22m65wt7QvdZcHYetdMEwgvF6RTw1jg22",
  "key15": "2SZSJiCauVA6AR9nBVwBpgKGq4zaR8TuonRLxnLm4K4sugvoy1SqRKu4NHpyYG7QgDsp1aXULHq7BgbaRqCmkaPx",
  "key16": "4z5jKufcue8NYvxw1x2Kx5eFeG7U25cPr2aqJWm61dpAfwDvfBWY3No1VpQwLmUtyxKpNQhUxfrREuUAjG7BDi3w",
  "key17": "2VGyi8CBfCxUh9gHgTyVfw5Snw7G9ZFhpDi7bynNSQk6ntV2nBhEgvSALLNmhi2eUERZ3VteFQPCkc8KqbZKt15f",
  "key18": "C1pL9Hkw7n4cww3GwRfQ1MV22L178tiLGUPXjyw8EVZaAdhHY7hUv4twpTg93Kryq1vBEksRxT1HAu1wA28KXTd",
  "key19": "5qR2s4WmWYsVMADQojSSLRWhWSjTWvJojd2odcrrrkdXjEDSdCLynp3fCKo3X2KoQzP421GXEThphbJTFTcf5pKa",
  "key20": "4PwcFg7kJ27o6AaEmeej3CTbcTjP3uKjTciFheyDA8uGkU71xaUL95zEvEsd554WgzsmPncyEPwUo1TFLje5ZxEK",
  "key21": "5ANi11rCGwEjTYD8T3iVVKhuitA9VX85QFGxwRRkqafpU2zbtASjVjtpUkW22zwfLm18rfdhi5Mp1yR4HLM3HBLj",
  "key22": "4PhPnCHreMuv9muaKkvHkQeT6UzCKGQAEpFA3PxDJLEeoKNpTSyfvJpc86nTjSxrMVCBtzy3diBupuZhZc46z9Gk",
  "key23": "4gRuHKAkqiLaw6vGZXzsTS5ATw2RcJmcaRBK6YRhgYntB4kw55oHeBxVbXpt13jQcfZiSjTQyxtS6Q2RH7Y2aZic",
  "key24": "ije4VSDP2asUcdDaUoGD4Fq4GEkpiTU8n89VBesoSur6755KwrUjFwD7mCnsbcWsfvKCSAXzNZzDtW29JvjjnxP",
  "key25": "29QhtfDhuVy6SYnqoBfX8VAxQp65ZgKN5eRy1LdUDyBFi1G6Vh5hsr8YnTTbFwuzY1YDeLpjbdbauy22rgrFJ7xa",
  "key26": "3rey8ikdJeNywDmsbo21bCKAeyHiwCnMEYKEDxAYrunFMc4BDCium97YitHrYZHzfQwt9fTS4hxf7pEcrBhSk4kg",
  "key27": "49ermUBMA6nskEXY4aYdKEfRXXMDCXwKjz5bpZBbatGTMYHkzCpZ1ZBK5G4XfZ4EFYUYS857PCUfVTNfVrLbyshM",
  "key28": "hfSfaQKnpbv9u21d772WrpTeyqj4UdVskCfF1Ws58ypij7XDZA5Co5qkRy4X6qWdoTzXNrMhiaMEr4LPQVGHiMB",
  "key29": "6sSezM22Lq8VJvpCejC3G7Z6DkiAwmm1zCbpx74ACMVj8B71ru8kKX2JXQ33huCmcQukrDQTxxoLVyYwzcG4kLR",
  "key30": "2CSjw4kio4Sxm7zqZdJ8T8ss6fWNQNVBmkRbWZr93WDf4NqdQbwc9e57ANdgMPzG2JQGojpw9BsCWzJvcRLkhN6",
  "key31": "5FpgjMNbFJQrdsHMQGckFtPaSM8eDLjRS1AMDuQWveF1c7geWYmR539SUgrcHwVLAqJjHWYYDP37vPhvX846m4cd",
  "key32": "5H18uKimeTttZWdQ57mbbjHhd4VHBzCh2hZxFSrUnwctUkUmxK7S4ciYK5q3kS8fzZu9buthqwf1SwVbpbcaTcoC",
  "key33": "5LXiwJSNWbKnyJmNPKBqK59drYburLqsHf6Aq51CWTYphy1TMDDaguqUL8FiUN5npBWpvie4WtTU6tMefmfWQEVu",
  "key34": "2m1vVPDyaYJud1K1VKBtewxQf1EyLuaQ38J31DCVxdzkGuKE7AU3hV12SjGibABHBZEU6Yrv3UinPic9FoDsDF6F",
  "key35": "4ktHCWNYDJbVoYaN5bSBTdua8sskArozXaXpXwAtqZwLGBZJVfSpsBsHbmoDR4wmZ8M16yu1qJAvYftjvq9JL7QP",
  "key36": "2tEmPAL4r4dk7WwE8RGB3abkLesZNQucPhzHhbU7xnHq2B6d8QithhyZCWoqpPJqVSqS3nRvyW5XzVSf7miw2eVD",
  "key37": "4o4vQoM56HgdRu2rFgkH3mHBS5rZfhNvj3fejS8imPashURzauZiedkMfTqSsaPssETXJwH3x4fDKfH3MUDMQ34J",
  "key38": "2Bm4MNpm1orRRYHMp16cKLxxAPCDa2YBJQrkBAaY9mVmPHZ3LDprmHGcfAbs2Rc7nbjfdXnzrC57MBXVT35FhhB1",
  "key39": "4VTncyjUpPUDRgjmCfjZ6NFBRQcWoB9kwxuv4YrqLhpd6BWkPbo3eFfUuSerky7UGYatsVqapMswuRPFgFcePn4C",
  "key40": "Z3FnWKJBpPxZDmkKzU5acbLZpLb2i9ALhjawCaVYhSNanXGAairRDuDvyKNbzvshTMdFrbAkrwRpSoRwhZa9FJy",
  "key41": "4LKvXg2yopM83Tz87caY4ssfU7XM29JSZhwwBDBeYzTBY1YheNnud3CjswHiKkxyYYyix1wJ9JzHTDXyNXVYtkzd",
  "key42": "2tSqZCYRB9SsMWPpVhernEbJzM1cXyCnuUR1xYSsFMJfkvWpWWiS6DfeughFoSEot5WfsSPC83gcMV6SMbMVEKeh",
  "key43": "598rcnfeDxvmvHQk4eY1yEACqgCK7D8F1hNkmoYo2wFNfNaKa1V8f21hKAtPuQ1NUfBniRw5PAWeVtbYBaMA6LTC",
  "key44": "314cEdgWbfNMij8HowgqKAM2STPWTHsDbhbKTRHobqmodqcALuKLvDn2ergoFG7FLe9cj3h2YKmnxPE5oEDNX5uA",
  "key45": "2vSfDcQWP1BffGgo5PtXJ74hcDvvj9WpdVtLkj56AnQF5emuJJ8kvXADScNktQWs2tQ45yWMu4wdauXycMDYv1EA",
  "key46": "5yPLpCTaCS5EK41ypVEPaxm8VYVScyBL768PpfiiTpyHM8xZz2FfRZbxEj36W42T85QLnMNBTUatAQQCJ971dTn1",
  "key47": "3Zh8tJvxAK4ReJzBf8aGVPTuzZior4r9wU82QyEzVUvpf3GHdBpBubzW2HBaNEWge1tzD7M4wiy9hLf2PMhfaqXq",
  "key48": "4VUTvajPQpv2C3baUM1kbbCjJxEpKJpYhLnurxA6RhzqKx3HiTDX7Ad6LXbiAmfz6Qfin9FLnqFSVdoYe7UG6kwi"
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
