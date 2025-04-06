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
    "4zfo3F3Davwbsb2u2qDNqZaTgCdeY1FYSBuwnVVXyVo114fkA7iAu65G7tWi2yU7Eb6zkuUmxyxpxGMB66qrfu2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGwH8tu97VVcZy449Kjb5FuC9tW7ygALC4WBuSVmUJcfC94yKS3sNY3fUjAMmADwwUdzSAbsayHPfPVXs2XYfNa",
  "key1": "5h25HCbEYe5dFF3dtPNa1tEKCjJ5JjAo6atUxGAMjv7Y7Jb22FE7S3HFU3YRyrBzGKLRsUi4mKmp6DryqypWXy3A",
  "key2": "ubRJ7ikYa7NdyezTrJ2RpqxbkjkKpWc8rwUZGGtuSQPKj483tA6mmBAL8obDyEydVGzhxv54TxTKUJ8AQK8wS4N",
  "key3": "t6pTaxNogzgZhhveu3jAHZ9a1dHd9jKGjCJ8LKqox1eQDA1nNi4dHdDhJ5LGZYRqFzEF1c6CTrBRaJX1vonx8Qp",
  "key4": "5FwgkASD9iHEEuhP9Mh8XBLdfBQyrW9dNpkStbx9orkP3o2nmxWSppCzJYWfJn98Qb18nyoQ2fWGydqMRuKHDvV8",
  "key5": "2FbvEJrpMHdtZsrXnjoNvrLNF7uQZFUPrcEr8dovMhyuEwPC7HqhKwwN42e7eZYaxfnM7JA67NP26cB4GktgcSxo",
  "key6": "44G2MvphBbT27Bf8y74X8iQCdzABJHPfba9vhM4jQnnqcdqzzjtuvRSSaLBZMrniqmNwgRAPujS9RYNnLTHMXgnD",
  "key7": "3b6hf6fU5acsCsoXzTptNYsFMjMRVnBkyCceHtnmnoDRzTPnSChZHoXpE6K9Lmr5g64SDbNkTLtNrvsJweAeg9Kv",
  "key8": "YUKW8o4wUCHqGo7pV6oeGjjEUy4qt8TqCAhMGmt7ESvxGdjsbkV1fHh7LaGcot3MkGT9HXLqkmVdSQ3RmACKKQw",
  "key9": "papnsiMjzkGnSFHRVDcaK3DSmVFn2JxERpLiGYTMJhQ7aVdonfMgS3QABaNXVbPv3xviXcfuzpeJiHn5LBLUTTc",
  "key10": "5PSF2K4FFo2LyxjeqqibXdBa3GEsqh4ArF4DmnS5dukSYrX9ZbD1KKkjXj8oSDmSbyjk71jtemSvZprUcTotc2YJ",
  "key11": "5cP68T5gi5W7Bxu8AJR5regdgQjFPRBhdJhhzfFJgqgCU9XqpimR8z2tHzbyKu7iZZmbaEzW7UK5kKchaXKPFcjf",
  "key12": "5pf7NfaKsbnJaDWRAigcb5qn34avNGgk4enky3MNAVoExzY8yKDNjz2593vScgZw2JcnpatCxcLnELdjgZk6yFoy",
  "key13": "4iUvorBBv42tJ4PmAx4xbss595RT6RoTSqNStZSE2sWD7iFi6Gkwmb3QQd8oAN1GCQYiVY7D7pYr9VS3xusDBev",
  "key14": "5av4ZR8VYb2ftHZZ7EVpPAL2YRuRbhpoqiqNbEr2Rc27AT2Z1ewv3w3bsKUeSvYHkCMvqLbm6GmSyfmRpKzEG3dG",
  "key15": "4aZCtm7SkBSSdgDDSN3yL6Ybro6WgBaaCo8t2fFh3j9RZKFPkq2TBUpwLoo8mD584bv3csgKWqWAk5ekU2Ncs1iH",
  "key16": "sTEbZFxqmMxFZsw6DpQxdboqQmWqYVFhcXkPnYgtabJdYqKEuHNVx7pv3KyJVW3Z9oxCkDYsdWi58XeQR7e4L88",
  "key17": "2KaghsH5uq2GttuChmkQ1v7Lvktvydqnpo9gGjchts7qNLrC7JnttjnmUewukbGWrXtU9BvCDRtYRcvBJCLGzRKU",
  "key18": "2Zr27gBwyvkEq1jTrQX8qinafDruRmkcq8zD6pPCuASytcbtu5yHwkw3LvQXxJ8htZ4hK7oKi3EaYdYrT1FuGmQV",
  "key19": "5VohVhDW5Vqe2aNj7kjF4D2YjsxnHzjS7QdP5yG1gtsn6GFTgK6fG3JASoVzHErdjiMq4GVQusg5vZqyqE3QfVED",
  "key20": "Csk3851oDe167TpshGJxu76uu8N3qzkE3K48d9gCXjCXet7yU1YWJtEac7LuiCNtKrHG9eCh9bMtfaBVDRmSyhj",
  "key21": "393r2SDKcYSMdNDMmTA9jMvnVvkFHj8gZKm7GRkznEDuUkUwQ5tt3PcuuzfosdLoyYx2PDncKeESa1Bui9oigyFr",
  "key22": "2ubDBxQXE3kMrfyftCTZ4ZmX3FeZ655XQXLvYCBAQk3dWGfFmNiaEgFm3KfJmbd6xM7RCj3oYpyEyYuWUZht98e",
  "key23": "En7i2CzHFAkaRYcQ8Whgo5UD1TjeeRumyinqefGTPK68FHKTdoC1ji5Wg3XDQq2ZeYmEQvuyqVLBoHwoW7WaHLC",
  "key24": "48C4N3cSfSmHEtKtC3TxPTtQwdxccu4ZoWnyYR1YVgausgbzZbkxw2KxHUJSgWjg56ebWZoo9ywdQW1eevC32dAr",
  "key25": "4RDgSSg18XTmtCFN7b9Qeng8UbAvsFr5YLeAJ7cevf36s359sNWuXFfLGc4m8kPmjqTjSTZ4zV5ZNKn5iYqfo8To",
  "key26": "2SNe2s6txPN6QnYCtdY236YRox5zyV19ePVvUtxn6aDuMC53UJdrmYr9fUYSAAdUMZNqQi8v77nHipaQucB5rJse",
  "key27": "FufAHe7Jha1LzEKYQJtPuqvm4wgaJ1ZjAbwY2rpeCSe4H5Ew1NRBMggjUvVTttHkMuo4RNgP45GLtMiMewQY16d",
  "key28": "AF63uqY8y3DqdjdJAynxk4gVMp7KusCHx7NJqTYYo6nfRVjk1pU86Z6v189UjPAi4dNRBdyrsRwKb89Am921rHG",
  "key29": "5AMkLRhTzZefdnxWneA1d23x2uoJU2MvBCyrcKGUWcPE7XMHYee9pK8v7FNuPfX5Y48y83R6gsugGxF3FSp9dVGz",
  "key30": "5CyWucC4j8UuU4DqscAUoEM7mz3aTLgvajstq92wdHwZMbFJmGPFJYNU8cLVNCsV2rC5aALriN8LQB15wpy17JEi",
  "key31": "4FDt1NdS855Q5KXMHKjpaFBst1m9yydcGpsb8B2sLNKGoobzd3uAjWCiXgZdnQQH1qQes5wwKw1ibYzms3Lczxvy",
  "key32": "5Gf37uoqGkqMeaD341BKcPEwZhnvnznVmXXjQ2GZkFkoErEN9aXgNDFDGbARHJBJjVL373MsXpSUcbUYy3mZGK1p",
  "key33": "DTzCbiHDUJM3N9RQGGGT6Dc7EK461W9N9eXS318RGtwmke78CYM2ZZhNCQtuALiQzpzhXnCvoG7VnEErQuEbJiZ",
  "key34": "7MNB4WpqnHkubwXNCaVNSeUBt5bW4mxeFma9NCSirTjNxfjAaTwAk8eFyppX5gfBW3khbxggbhNG9eTuGvAcmH7",
  "key35": "3P4Cr7ptpZyRU1wzrKxLDQwbWsxH5hkoiT71f7gJU2QzhYU7vJr8YuJkawXoSyJbcfoDTZYHzCuz9QicQj94YhwQ",
  "key36": "eDtVNCypd6KU1iemwdMkUFr9fuH2iU5jhL48rZ9K9hXkyzbdC1FUSeHmwPYEqf87sdCtJVWom4x6QyFRTeSMJam",
  "key37": "2KPMkSoKddW7cfrap4D6WZfxXcHtcRXH2NDPVyHXeCuw1XwpLRQYAjdhH1XTmB7Bfjdk4fbZFtEBoTEnP6dkdsho",
  "key38": "5vbgfis2khYAnzxAWM7HUgGjkkBuhSUB2gdyYvMUn7z3CvANyFVUcYx84FWCDoTKB6hkabQc7gqdwBrfvcgUuxDj",
  "key39": "5y77ZxB2R4cRGMCwNDqxGWpDei7dbk6CjJV5kspJh24w8CxvgVSDD8A8ikuAFPhH35YrbXvAuHN2oTAeyBdsgdsW",
  "key40": "3cyFYybM2hFuf1WF6hKwdzpLyfYceFtC9R8EaSKDQ1rAChhFifen7bwb1MZdNm4z6kjfoNoKASePBy5hQEz56mi1",
  "key41": "29v1Ck9MmcyQy7ZbpLt2A4S1BDKAXeeVQ3PSBi48dyjarnu4pa6qU4NPaw3EybPteWkzPW9ZyMK6LYhDMLJwDDaD",
  "key42": "5Vg4krrhqwVyGFX9hCPbHLfaLCug2je8bVy2qjtzpzQWLg8q6NrBSH8kBYesx2nk5Jey8XLE9W3weJq2ij8bufk",
  "key43": "AubgH8MtTJtxKPtJxFcdZ7hh4byTjHB6NAdhbvZ6xEK7XRf9BDcNYy5jYQJyTAKwfCsVhH6vuzCc41PesHaGafm",
  "key44": "5keVRLFHLCvBmRzFBqiXEWVEbgmu9YTvn27Hg23cMURM2SWeHDhkVR29QAgb1kpPMkiF7xnDG2DvJrwggVHCiaGV",
  "key45": "4aroGAD6w2LzCx6FSsxWKrePNNdmFLZeDZfmDFekWAm2xA9U9FWPPXf7sbw4a8Z5oHPmCEQfq3H1iPDM7gAwUyWE",
  "key46": "4B3WDYrYZiZPRF3TaQLY41T45wq9bynESAnK5CYJDCDrJfWGKgN4mKc9TmixugLXqHB5b82HqQqYJLpBYXGEboGQ"
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
