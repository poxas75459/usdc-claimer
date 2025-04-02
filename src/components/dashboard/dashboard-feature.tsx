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
    "4mMv3Uw4WLhTvnA7oFbFaNTaJs4UXatEr4gUxpwS5MgE6u2bMJKKt9MjMgpAw2T1pT8LLQEUNLWuYQiJQTWjH8tK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3igUS8RqHfuYmqLH3nn1L94T2yk9Q1S91Yi8fkarYzLGPN3vUsoYX4LdQURvVfSsjQW6MwjUeATSJEw797ZhUrVT",
  "key1": "3jmiNhWPpnyLzZQ3ZayMDNqMJEDGZmrpHGxCLcPQ1v2rdLVcrQ4Wu6RK9dTmf7ht2i2drs1p4HyhigUyUW4MjWtb",
  "key2": "4XXMCV6jwPMaiQHrYA6QBPiVSztFr9Bux4kBNLuXkX6FMDqGtm5faC7eTCKKBQiBWoWHgt8nVcJJGQ5EmUZXbcvT",
  "key3": "2K2qtc1vGXFkwHdDb3UwbuK4QMVViF1MXGDo1Uacz1CxRGDeidGYnpPdEtrb1sAWifNNxmGJK1XpNtTtk7KWaV5V",
  "key4": "PDFLdxMXRcQY7RXE94sZwCAEUFSMS6icVACtXmXcYPRK4K4d1JYokA9xgVwf1KZNkaaSrqnaN8MU51gVE61A8AM",
  "key5": "4CxB244ymgNPJ5eJyQv6EY5xxCdNZ2ESzwnNcR4CCDwRYHEj6dhrPV3Q4K8XQARQFNzHgkQSXztVByNMMSfmsn6p",
  "key6": "2C1fZy5NddkSruNxqTfQuuNySM8Ysyrg6LuDGiv8VS4xmNuL4sK4tLkwZimqbwxq2J9FJcoSkmskwLaNkvKiPuq",
  "key7": "5gxnr4xd55XujpxTgmShwMyoiAyUHfwwFXxhHk88SeGjuRmqiRSt267bScXLFMmoJrrAqc4PuC4krJXFYoMpibN2",
  "key8": "5YC9J4omBU5Yp5nAc51pPpsSs7Z7byWccv1goq7WXw8bLWCqTcKNuHjDtDRdCRnxP2QPWFhZ1tsKT8wAYgTUy9nJ",
  "key9": "rgukMWZdrNNfU53Xc4qNXmf1oo7MoNgfeaKFpKiMT2AeBxZfEztms6wJbXD4Bn1KKu8rGXgJA5L4GFATbqoFoFw",
  "key10": "5Aek4b5K71A6RZeMqAq5n9GdAmLs5tjRzphh75uB7ivUFwQyqiAEwjf15bG7D2CTNAsj4AhbBjAUEpP8Dzb4FeMn",
  "key11": "5jGKmnybDLg5kyEQmmiUA4JADfyssHK5ZDkMcGjpAmKfLSDKkUmb58QLX3sLfqTHmMspojGoGY5aEU7cgqaC5K9t",
  "key12": "4XKHd3bCtGhkYceSUUzEPPsAh5BU7c9xxHFkUv2vQA3y4hctJxJxZ5w39XaVarDbksDrjVhLrfiuqWtYCQS486Fa",
  "key13": "2Mqy3MHdU8KnRNGTWj4cEnwMnV8a8TnjCEsJE5HoVuPtxUYe4xyz1uxxynghHWk8FNzEcAYvsAMKhz8jAar83VJS",
  "key14": "28s1KdUG6kAsLu37oc8xBHGUNxcPXK4NoeSmdaUtE96MPqVFEqgCcEo35Lq48siJVMfioG3EZRAabpxHBJhrv3LY",
  "key15": "u7Fm2X62rcijgrJviC8TPH1hAzRUQfgPGJyZb9fM8uRQed9jxubKPP8Hw36PGNLLxpt9jQfbrrhGBB1A2E68F4C",
  "key16": "4TaFB5r8hmbnXP7KT1BvsWUouPcg5zqMBUQSD5UZmskrpSMpTsp14vBGxSFVwXjPQrUoTBeFD3qxRs3jJeusQo1w",
  "key17": "2qHV4422BMvGjjdyKyPVdjX95xbQtzcLStR9XJHn7vmKDxDUjJpZV5yxYhZSfDRDbo2GxkfXykV6AnFXG8Di18wG",
  "key18": "2bgp3ry1nM5McC2bEVMv6AkT71gveN2VANu1Mt9jQ8Z6peyoBjqfbMKAAejDSrHWnh5V6E2NRdopyJ2whsy1ghNM",
  "key19": "63uBbcWdVrHKJgAA82ojfcBhcvLerwNT2ZGYHf3STaWo2czdhxvqb5oo9akKAXHeUGkMRKmR9R9SR5qpPWGskVrB",
  "key20": "5XxnkAE86xWT4cKFpkwuaFHMaFonXogEGqgruxyk62twzjN1ME1kFQGtoeVnenAw8mvZZ2hyvpJaeWRHaKjVAZWq",
  "key21": "TRqzbgr8vyGrN2JR5gZ64vvuPKBuK4DtkjKkCgY58wnTxpj1BjZQueDc2hor6gFEtP96XYyBanF8DeqvYwwgT9C",
  "key22": "QugfCK9KdjrPZUFJjTBpRLGrJpmnNqwwdBogTW2GW2nG1qapTPfGWC8AYnpJCT5hrjz1ZVzRYwJcZTdfw4AVHx3",
  "key23": "4WfKPDmkAgpRo962Su1dUxmaSo7tGb2Y7Ph3WvNsUymvqRUV3rUsyxgjJNWF4AWTr9gJbTmWP9HhM5oXqZ6s2dYK",
  "key24": "3JwcZZ7XWKWoneEcM1kMSJepwAeEknwSBzkgs93xMwWCkjMeqbPzxkdJdMnig3eUU3hQ85wdyTvR2Kp9NddpA6Xx",
  "key25": "5R8FqwZ1eU7JWBNXgrQG7vdxCNVEuzbTFTvmsuGB8vV1tV8b2YFurzjtzue1n6gwxmqnU8qHPAKxpHYW3M2NYzQn",
  "key26": "dqkYKWca894Cnf247n4a5xFTtwCR9vcdrV1ycVRJHrXrWiAN6xWNqiPRHLD23ftX5SmjDsvBa87HNpqKerV11Dk",
  "key27": "7mpGT957BGEzUds4q2tff3jnoTEM2zfeeM9TDQ5eMaoRU4RFA4WJi5zwXS9EiP1JtwLwqvX3DTww28NrpLWmUst",
  "key28": "3ARtBk5j7ziAjkWF6fEvPjuT8BeZPXrdZe2PtDAhyRFWiMLkgSHjNa4yi7Rp6kHq6MBDCnvAAWyo4Pv8Z3fQqVvf",
  "key29": "4S5vYDKJyeanHYZqaDWFHPbHk8p4PcQtp8GMZYo8Qyi23tBmnVRRR71FR5bHf3Q3XqtgmZwMBCB9JGeiCbm9mPBm",
  "key30": "4c1i6iDfKq1yGeT6PxsDD8zPWGiYYqUaf7g8zahG1oqCCRdsoXe9n4pg2uzdQX8RWvqEaQGEDqsZNq2hmSVyiLqL",
  "key31": "4hW8SqnwZ4DTr2sviLsvnAiK8p7g6f1DCQSHAQJ142CJCdVZrenHbsuc9AiQhcATTtWzQGftKu3RuSVacuVJqX6A",
  "key32": "5ChKFq5iLHrXzKX6Vmf2u83WJ9J9XNm58gp4TdJfaH6UPpqR7ppV5wARpS18MKc1J3zYfc43NqBStn8Vvxgatjzm",
  "key33": "54Eqw9yJ2NHN2VhpKjo3zyBEQqAGrgkxDtx6R6UFopKdysrhEgrK89p69Nka5CP6f2jJ56Wxqr5tnwagRaxvYAmv",
  "key34": "v78x6HVvVGnunLq9CLS7WQXxmsn1vbj8vjK2teWL3Ljoq7hAJ2jTGdNpsHaQoPAxHevF8YuTLwxty8zKbZEkCHM",
  "key35": "4fEoVy1iQ1QDQ9CqVzyd71SCisf7ofkW8YYgJxFanztX95Gmowz8qWdvWSZvkVRmA9FMz7SKJdo13ptV1JcDiPfP",
  "key36": "2qzpVV6QxMfrwvjEoHKV19iUMzqjDMW7m4rRFfTyiT8k8J9sTjd62EWAmZQriUNMPTUo2KSR4XPop6UrnXpUXTPH"
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
