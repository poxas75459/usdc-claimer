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
    "5Jj1CN4Mka3gFqxL89u8e6m73BySfQZ79qsp6KEP1NRAqEunvkoZLyGKnVZ3aMbASCgigckGQWUaD7PfgQxwinhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xj2YQ5yEycBqWJsXx31BNe4tLJqUZqQnZZ5yNUMw5RpMYGGpd7nTF3XCwycccbH5zwDMKr6QjepPUvUzn2RhXzE",
  "key1": "3E3SbGytGqhXJ4ffrB8C5KFkuJj2vWAiQyc5PohCTU4TSVK63mYFKA7kjqQko6WRdmXBnEfQVXiPUMxsaBDMU28x",
  "key2": "3YtZjfLTRFgyZR1qygMiXMFpqGdh9dcokhG528Q91VBJyQ3n9g7pVpYVJo33eDVKBfE3Sp34VAz6KHeuQX3fSm5N",
  "key3": "YdFgdtjGK52AkXNfFhrD8FmeM85efEoJ8GitqLsZTdSRAH9AG1ue3Fc3y95rsQBsqxyoRjx5KaHqgDzJ9sMGMyD",
  "key4": "5RQyxvh4Vv2psjUhZtZ5sKnj1C9g6e46LhPStmeeNpfdqwDi1bHct6GDReRVJJuPosAmMEdePKSoEjNZwCnBKFCk",
  "key5": "5BM9NHJAzGpeEJnRJgE1uttxthRVKYiyLYLnydKjardx13rpMMGDx3D9WvvEnU16P8yyKkgSTd5eTQYWZmvaHmfU",
  "key6": "CNUz1dyMozXefiaRPatJzdJxQr3MLCKMS4F4jsHHoDsXaqatnxAzqkBSfyfCzsYP2cG6aZFTfe4ohPqVc4ZmkJs",
  "key7": "4xTQBhuTF8T7Vj7vh1FkKSSJUvsRVWhZvGGPDRVnbm7SXGkquv5HWsHGAqepvepieRZwpvCTbJCj4DaS17PuYkSk",
  "key8": "4L1ffV5ndoXt1C4atwGuEpPuVBUcRhCsEqngGrA6kgeynbmCtCoLzGU6wMC5uwHWxhDgaVjtZUzrGurXxoXLrMpy",
  "key9": "4SSLbUZFogEwxeYfBWKXZscNFbBUkwbSJRaV9BQQQLtBZQGHHUZAneTcA8tG2A3JDCDx1hvTsbsbHTSLdmFnsd8D",
  "key10": "2SwtgVVMnUeBHGeLipoxBrBEaX3Vi2b9FjT229zYZkEPs1MrgycQMwwWQFyYwXqAE7zWEMeaqk2GrHET3tDMkC31",
  "key11": "3WBGWxjb2KozbofCusvFAtShDB5Mz58Q6QrUrvuLwL3Swaa5drozT5WHKMi5DUwm2GKSwAbm7LrQDayBsUA1LjEx",
  "key12": "3GKTnx861NeLicrvLW4KGBn18sJnSY4EjLH5Qx5xo1Abkuz9JKXtQtByZf4YED5EpLgNYHvT25Wj2GgptRutYxQf",
  "key13": "rH8ukNN6cVQhEwhtabR9K5Ft1kwnNfMWx9y7ZWp254GmWAxpuC3n3YC5Dq9x1bXxLtCQjFFQ7AoGPLJp1g46zrQ",
  "key14": "2G22cTJLGmxWfgJDF8fuGniMjwHFUzrqyeRLd35t4K7AbXDxfVTV66Fm3ZdpREgLcAbHfxWJvPdR7q1LwCLsCmwb",
  "key15": "629WMrBGdz1YPxjm1rzn1qfVQKWqVaUzeq9ejEsXRigymLYkSMA6jarQeC6R6mgz3dd3WxRS3w86f3PqdRwJwMCE",
  "key16": "5r1HvWJUxRomMojbfxyejn79UEfNyKKyRp8QVrT3TTyfMRR7wjBoqAWHmwvdz7xmLsXdYoXrue6YzrUrCmqBvRx",
  "key17": "5RT5ZKTa7rNiDkDQsLH7Rj73TFaxgycfKV8rMWeer5gP31zS4yhHGefaMNyjj1i4KtMk9ntwmXtLNGvfHQRSioyi",
  "key18": "5NawdXfrz1Pd9dek8hd8nnmmaksxnrnb1sbe7uhrLwbqaMwY3eQ6tuQ9CdjHaR9fKbo4kehr4y8ibDErymmK6g3n",
  "key19": "4pfJoKJ6G8xhZEimHsa3KdfAAiXhJiA3Sz2KehAJADYrXELZFZxYJXh3vpb1kZWP1WyHZJSAVwTpRdEwkwAjWqNf",
  "key20": "51HkpetkG4gdJpT89n2urTLA9F8BxgqP9czWAE1939EGFEUnAHBcrdpa17ui5WauRqFhaq3qnPFD4uHsN8W3jcTi",
  "key21": "46F9yV68nQSkrWVhxrjmiBY2VExZrcH6QoUdKrsUisoLvkWSZKTCoYTBBafncEmNSPzjhAvSDC8vpZrmsT23x5RE",
  "key22": "3u7ETKUxJUC2BdkjUKdAC5hzBxE9f8GGcBRw98AypBExBibNXDLeAWtzUuYRP8sn8nuotrTST2Q3Bvj6Pd2SoWXs",
  "key23": "3Q7fCtRqd9LUtBAcowvqWFifXhs97hBzMLR5Hp9PsTnYhZYzwgUdNmLSQhUoT9t2XxByptj4cYVN9fESYnvzzUHm",
  "key24": "2tT6gqyHennYUQG6Srw6FnkPz7PwyNL12CtBpCPWj7RWF6wXYX8rkiYfK4RQjiYP3MgELY3S5tpLcW53ByMvniBF",
  "key25": "3GYVCh14wrdMu3ePgDbTniaJ6j4itiG45RhSv1r43eXuJ3ijDFL6SY5pLfzQa6xDmdf18nJECEVnyQsUmMkdVP7K",
  "key26": "3cCXweyqzATQLgK1pY5xA6o6x8Xrutix7ZhkKpig8icqd7Mhst6xj1rFVfHEuFchPjm37oXriUa3TB86ZXSPobxW",
  "key27": "3FakWDAGJpafd1v4sop2M5QQ4BH769zzbnvzqaEEFY1KF3Zv1B2CF7rWz5nfrr53XBo2GuvpKh68d738zjD9gN6w",
  "key28": "bL8uCdwDbncmcRgn75chS9LtScY5r989AeBZbs2y8Wgifm8AyN1gF6EsSYxhWLHu5RamZHMuvwoMK6YB3jyLP3L",
  "key29": "4HoYb9WQWn9AHrkhnfJRy6Aa4Vd2UosbSGkLZWVJNUfyyBWr5V9Hd1oeQiT7bEmk64NfvxqesW5PCPQAB6vyR3Fa",
  "key30": "47UHCzCpHUmD1LacQuRDCNC4yHnp5ZDfrRYc4okrEGz4JL6WpGHuodBuakwMPbJC4xVaGtenj7xsjSULVavXFTm2",
  "key31": "kC9JF7XPfcUJgofKpq7MfQyrAfi3ppnggA8x37AR43YtB7Mh8tZBPdr6Nb3win8du8eNqTQxEBkxpB2kPTRJoPP",
  "key32": "2fusRXWR8khfNaqmnydVYngNgTQSCxyB7JD8F2GZnppFHfy4mH9aSmNZBgYX7tvtqBfMGp7sair8d71uVrDTsa4k",
  "key33": "5bNckpEsjzihGHqaYjHgNgGr8nVXhLha4p4J3mzidvfPYpN51i5TmXisVbvmd4TnNVAupKGXP41Vf79SV55jeKJS",
  "key34": "RQb6jdJ9Y436izpqcAzUgC9Vdu5YEyCjaz1jifaLJNn65agN2ub2pErhYsg3stGFZcsqFic9sLZuqAmdkAhDeCT",
  "key35": "4DWjFGjumT8dzAEGFM2JqpUwCPPZ7iktvKmAKem1KdWByHmBQpiGcqYoomvPiLiX4SV7Rk2CXawZ4EMhJpp4xEML",
  "key36": "3v9sJsH6dcfCf8e5bekcYZQ4JwnaoMDmAxaRRK5Yp14VsU9c2fwWy4WeVk7ugNT5SAuFBBEHfv4WDHfNA69PHtzA",
  "key37": "52G7ozzRGCu59rRkGYKMRkGHzHdq83fb1jhCPtZjrEpNVyoqi1U7cN1ybQussY9guKB1YWLYx9YH1ogQWjCyZnuT",
  "key38": "4RqxrH9RKNuXJJxXUnSQ4jPtubZ5Cz21mv1ABsSudakHLM7hgxW7dqx1ZyvZVmQCS5DVSme5FP7t3PpBLZUpM7fv"
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
