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
    "3gvJSHZBweFJqm2q7frVRkatnkbqMC1kp5SJdjiaUcbB1y9DdUNrPwgAehFmvKL9s9GtLbohVotEkZcWcJtz5tFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22yBspAYmzp8VUzQH2Je6MpCrRfDcod8ahWnH6k35dDawqBE6Xwzxhx3jXwNmVSn8na4hKPviaE7yazYJyERDG6e",
  "key1": "3ue71R3xt3oT87mPmXLZFxQypUEC5sEAuRBv1H27FB2FFoeeLihMLyMRwoHmQ1D3CYXAoo6cRDoeCmCxiHjVq2dy",
  "key2": "61Euu7QhfLENvc4w5SUobwjGbrWSpMNB5vD2DZ8iysotvpcaqNV5Av2jdBNL24gMpFqvRbsLepZMpLgLj2CF2Wg4",
  "key3": "33cE6r9KY3BjcNqs8G1y35QwjtKQBT4tmeLdsKWDpX4BMrMHN7At7VgoQjPpQ9AG4JE7XP1ST4nj3aPZNxKueoro",
  "key4": "253ixnQPxm5nvTQDh5YiKE3MsQFQc4egQPzrYxNSc7Lx3wVGDXgkSWqGWi7mLHgd4aCdV4bADNtnq2wTG2ntJDW5",
  "key5": "3Firb2uEZsCbnDqSrJcDd3kzsJzzH861miZJNo3x7k8VsBT1VXk7bgBqZFgc5VSyfJVWUovRLLtMvGaFee37D1eS",
  "key6": "3L1EMnJYy6hjrvf3mwfpoap9K4zgLGFFrnTaQToqbqeRH7fiWqqqXGBJZ1PZmr8uynmWc4EW4YQiLG4szJJFtUWw",
  "key7": "2q2Km3JsuA3HM1eSvjnAGvMs3BRT8jrT4i2bGg8v1gtYHWyGsEuRpV8Lcdtvmfwj17Uo7QLTLHifUN4kNxjWjYkG",
  "key8": "482DwtQ67nPEaUvVP5di4BEVjVX88xfvwsq1A8zauAzs4Gzm1USu2VX8mHVrTc34KhRbs8FfCc2LFrh3zDiEp4Nh",
  "key9": "mM4NzKEVdm2hEoERSzHcmFXYcbKanMkP2EgvZubfPGqJrumWMnZz7MnTpJPqFQJAu2C4vCwABo8Cm4xAdh9RvwF",
  "key10": "23GjakLUP8WUFDhxBWbEQHwRqHVzZchsD7oYA8Bg2ekB6meDczdEmH5GvhFxvjcmE7ayxiwfCBp2DZQH371WAJ5u",
  "key11": "tGnwoyoxkqyR1ZFfgLUcVjaGeV4qxco5V9hiv2SjskSfQ3HPWthyEVsr5pPr91oPyLkg29BiwS5KH3w8wAwxKga",
  "key12": "5TRptEtDA8bxtyvQK9G2dVjpFDZe2EsUpnM5FxubKKcXtTuVzuN598bdi9vZCoSJDpzgD7Ru6Z7R9oCkjKuaJi5H",
  "key13": "4RQpdx5UtNAQA2A9GwURcNEynWngjTcLjVF9pNNq866xCYndqeNDK6qMe512SWYbWi2nSFd3h6WpnYWU3mTxvMsn",
  "key14": "2cLywoZYnWwmfbQZsSwTwKQm64frtdMkLBJfg5HnCLdV75nq8qWLUWQJDeFmGLseZYgS7bu2bW7ManmJv8LHPELH",
  "key15": "4yJmKQMDNrDKWZbLGqJ21hJKM4PKmc7b2Ni1X33NGhSy1n6JBf7iigaxQwmwHoAXcYcr1ffMVhpVqTUoyf6t9vrT",
  "key16": "6155UuxA1Bw5KnE3FuPWWeR5vK3C3iDmrDJXbJ3E4tsEB36UUSudxBAoq94CAgv9zDjUZnqQqH4MPVudUSUcJn7H",
  "key17": "3vw7mTWZKyX69JV14MBLuxgWPsU1ChEfA1HVwrPXZpaPPbex6ndmUHLaigCuakXtYuidY2gdW3jYqizr1KU5Qh7d",
  "key18": "vHv2qY9KFHXJ9V44TgpX8ZRW8U4s2pHjf3gWcA64hQQhPFyVVxRkLkdmift4gFZF5zRFSKvwdzrsKyW2b88Z3N4",
  "key19": "npKsBoiPoRCCcpp6m81VAsxotpKkQDXBhEnQ8NnT5nxHi9AjECXFQGPVr4b4XcihkLJpBUgJZBPL8z92Vha6dDu",
  "key20": "3k3JLUqggBJbNXdywRa5EafMrU6GWsUhQbSGEVwaTMDbko3ySga8eu2phQ1Feppd2j2pUDTvkn2jfrtzaKF3KmeH",
  "key21": "21h7dqbohjjnwUxEPqVEKY9TnR9892yorKq4h1TVnwYwqTc4NcnNqSZ5ty1WHj5w2gjaX6giqsKuZnik9rRu9gzr",
  "key22": "5zRqLhzDVfzCeHUfTfkAtjteRe5AGeMyCzookWnU7BZYMY4Hj53fwdCLxSXsZe5uFx5VFr39uSRAuPNuPfgW9v48",
  "key23": "31eQ8AA67cSpBMewsSQmRRj8rQhvEQUGMaQ7buiaGXQTvjtoA5ZDfxezjBTZJZ1CbF3i5AmeCp1UNJoKeFVx5Bs7",
  "key24": "4XRVwPnRsvrqunXdP8Hbxbfj4hZcxkkQhfmNo7UfHjUbVPH75zUPiek1Woh6jgYeb2MbShLxpStjvNhBc1hpwdZe",
  "key25": "2K8qm7E2PEpcEox4LVgqB5MW6qYzB7o7raULAyfL4QQ6J8fpvaX6wwYifdbhdGHHmckBWpVBXWeeHcAkF7CjgKZ2",
  "key26": "3xEe3G46uRcMYBJwc12qHiCWVb1GjL1igTpJ9ouEoRgH7aKwZFXL9ZJYoDnEy47a78BHM4BXk7a6Bsvqsg42iq4M",
  "key27": "5515VjF45Qki2i6gUMaKrqw5RwCT5kTegwrVT8RnnL5Je4koZRfQQcoBL3qmqb6wyFZwLyfhyDQtyBUNVimdnr5T",
  "key28": "3W1zm7t8Qpt2J5uBQXdKxiAPaxAJ75nTuvwvXp1LY4tpAMZLRj8w37iqQunFjJfMxq3hHwPQraKX8eUKVLfSn2hc",
  "key29": "5JZDnGXCSL9oh8ooyBKRiMSk4eyHjpmKGeka7BEdyFXLEaEjoKPjazoAyXw4sTpvmR1zCtSHG4rJNb66Mmu6Tci",
  "key30": "63v7Hukgma52URQQ8rTz1r69DaSBkct2SQsuuhqhjAXk6gDAS9q9RS3r6S4HWyFFmCWRj9LZs7fTkY9DCoaYwfiY",
  "key31": "2xmia4Wt2mQoPeTiQ2VZGFoGWfY41sVigVFMAKtYRG1q7cfH6eNHLVAkxBVhu26U3CJRLswZmCaPvKsuixBhEPJm",
  "key32": "3TpeHzV5NR9wBY849BRLvrNKxt45Bec4cewKgw8djuT74ajtJi12afPL4262WaC33pffocSuK44p3DzPz7XhxsVY",
  "key33": "5GtHBotWKtDY5Fr9HJNNiQ9oxSAWUcjtBY8FdyJnxbuKgpgJd39NwmZQeWwD8J4SB18LF1eG9KijXFqsw6B8meZK",
  "key34": "5a4hgwJ3DEPsnfYCQC83TPkusgh9Es5CyjUCM1buaCrV5b5uJmDTruPBBRjuPUAAXTeToQHo2yLmV82J8N87g5Jk",
  "key35": "5WF4ajou64P8MKSzNgQYMnq7ws2WPkRz7qzYLxyFfA7NyyBVsyFBhntFaCUFVBe2coVXyMrGZP6ZcRbxYYugG6ZZ",
  "key36": "2BtM3WQbpAH1cV49YTwNzScbiTmAiY4G6pv2GhXCcuEBvXkdqnK8KTQNfPC82K8QLEy8D3BRhn293vBur1metcWc",
  "key37": "2WWX6t6XrmnG5SpTF5mcsSFSHTxFBdRdcTkE11nKKNMAW3oh1qtGDYYvqCSUqUtFR9UXgb9S7TYAQ3QScuhtTZzu",
  "key38": "4oA8yFqUzdHi74ueE5p6nKc1DByhFc218Lcc5K8MSMmCMF1BtGoG3fo4WHjU4Sq3YSGg2t7FzdDjPyV8Agt2PCb1",
  "key39": "2YnhgPJhTrNciPmycP54HNjDthZuEgRjVCZaAU4iiXoFdo6CcUEhNPXh4DtiWjgPwPD2RYNoZmceFYDtTDWNKdUC",
  "key40": "2Dj8Z3BKmDwxYamAQYvaUBiH5ZnUTLmUS1DRYs4X3g7FgMQSUFK8NLGX49tYkq4ytkKSwuz7wEdBJ7XZuGgVSyJT"
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
