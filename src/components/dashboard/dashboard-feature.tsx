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
    "FLnmDogZHMDqg9eeAL9xcZ1ySAjewdQuUikWPMp7QXPJ9d6ein7Q9cQvqiVUL1BvTyaqSkwvEpxHnTzRExTrhbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ieNG7YXNxNU2VnHq4fqxJq8gDyDbKHv4zCrD1kKnu1R3ttUZusw51F8GuU32fDNqi2TXY5iRHLeuMtkUKg1sJxQ",
  "key1": "275ieVnJ3AimqnbvGeZRMDG6rS8niMvsKtQLhSrYv284ETXWur4x69oA6bpBnu2pRCaUvp8DbmbxEn4dcTwqtuz5",
  "key2": "5Z5EHwV6nH8uqqBHVcTCmLhANJqe36LnUkLuVpWY9dGambv5D2hmqh9wUGneaam1XhuVjA5hcLUTin1wYv8Rjybp",
  "key3": "3v8AQsD4g99nq4hAtBxfC7UqgnUZd1VnQBUq4C1ZhsN6K9rYRcxRttvqusB8tgahLC6huKnNuYTXqaXUW21sj1m3",
  "key4": "3u6YvDHK2jCL3YrBdkj8nspYVffwAyUPfLiJKj27cvtr471wCbM5veEcPsxS9vsguBkukRyS4eJewpAy2781TjYg",
  "key5": "2aHhTuiLU5VvqpoEaYmLdMibrpd3XnWuZeM3mLf665DXe4JS87sLHKCnePuJwpyTnmu19Z3vZS5QPgx8bnqahyGA",
  "key6": "4foe6tphM8jWkb4vcewQPUVVdfCYidM4CGPUwWJVVDeT8Edz1UKQY665iLoidUAzwbpNQtGysQkCyknRGdcM7TjM",
  "key7": "3sCwaatfGDMcYVaSz8jFbvQrkCWUwCqikeHyFNyq687fz68xmNRb2kGSdQ2CTGh5SYEUgorfCwJZ42toMRpgAspx",
  "key8": "3jtQtQYiW6jXBmMd8EmL2rpDi31faAS6TmaYDCYyKDZfqDikvzZ8Nu5zLAzdoGuq85A83H8J7DQ5UdSqyj3uKzdf",
  "key9": "bXCEvSGbwP5MzatiGHuMMrxfriDPbpPX7XurhwFgVEARDWfMXnVUtE58LXBV54enKrwZ5GfReBgLkgNwC54xhPP",
  "key10": "AsM4st4dEwRnmeQ5S5fZ8774exJAKJngRC2PFZk3Lmo6JUzgtQXvnMVCedDHLLaBiopwyJdAqrZYfvyvd8FF5oE",
  "key11": "49kPExo4ALmdDv27r16Vz76WPwQASibUwBo3JzhXY5ZHXav6uLzRfxtVNR3pe6wkt4Yp8996N1nWM9gBuGJzaDdh",
  "key12": "32Kdaz49x4UevpF2nHshCqmdX2pSBzM3JQBefQFbh4MHWAxWryF8781eSX3UN8hLe6sEQozJVWxgXEBdpkij47nv",
  "key13": "2J5GTk5ouHqaWVj4PmwY77cYkehoWaz76hvfZNLfn9iYxnah9w9kBYsg5y5ZtMKRfSZKR6wZJSyLtma6o9RU3BXr",
  "key14": "fEL62dqGHLXDebi2T7sgjWdbZaHRDFA2EYBe76Y5XJ7cGBhpDCgokmhDAMmCbxoFw2bNJ47rsVh2o7pvRmDaYhb",
  "key15": "5ns5RGyazMuCfnR25ERiNZKizAUphzPNWbEUEF1Y6yQf4LUf4fASRvVoJte6brrCVq9SbWQiZXxQqFw2SF8FAvo",
  "key16": "3WcNtfcnbjPf14xET2ddoWjXmE9tXmMyoUXdMCDNNRGvUA2rKshxDsgrJMPPuY1f89mzHPyqcCdAQiZPggjkCKeP",
  "key17": "1THFcM5E6vDgdfutGSgG2MquwNefhA9VjtJJbPYGC9DtKqYQDKNGv6NebhcHWcdKPxB2BzgBKY7k7LkZ1sc4U3u",
  "key18": "4ywMopuMtogApLuDYKv3VbB1G17Jtw1HDUukPA5L5pABhRfRAA3nVx5BSLufSd9i5UfjyNcpHGZNEyA9aRZ3MkWo",
  "key19": "RqjFLY5erVfSYcCBLsEdo6h2GnK1uqcmxrQCbQgC8X5x8wKzZKXjV23maaZ1MsQkzGfvy4LCux5uW69qgu9vEib",
  "key20": "58QGbMWyBMzzWyAfbNPgp9jBKJ2DAJfEszvjbK8MAJcSCAmb6gMxsnSM2Sif3LrVUM6NFWomxYhHdPB7DV4McZjr",
  "key21": "2xqBFb9Zj9Npde9DZZgDULFh7ziL1a3aNjcUopxfs1QfPj34qYvTnLRSfPg8UcUV5F6CVRw4EqUM5wnSZmQ9bEWS",
  "key22": "2WLxwG3C4Dj1XZi2UhBtNau3RHcBbTs9qV2FH1TD3wMP4SoRiuGWSQPjTixZLDKB6w6PMV8pHF2y886ksiwkKrhM",
  "key23": "2arU7zsihss973YKHiuj5by1FV6J5DKe3rnQmrEwXBwUvjw1LzZ77hQuVfkwCJhsLC9KhCdov913z78EbF2odNzn",
  "key24": "41WH4oYUrEgb31hdASFBw7wGh8FeuYJwq7rjcx4oAuu2pLWxwCLmLpreY9Z6G6MMjvFHBFrAqfNfujGxrspqHdky",
  "key25": "4kkM2A7UXXdxTJ2vb5hdxNd5uhP9jLskqu7JcNRba2ay7mLxNA3kYsuVqZ5E5462ei4oac9E8h69xaf3LEzb5uhP",
  "key26": "4XnhSsF7g1Z5UA7kALp3LVJTL493UCksBeN9NtYAKGTnN6H523kkKLUGvzzacDh2McQrs11oLXLXB5CMKoxgmUnQ",
  "key27": "ni98b4kQYpVTySf9HLUQfd7AD1BtXB1797QtqjvSDB3pGAPNVTvVo6mq5zU25jnGquWEktk8bnC8XQDFzKdauTh",
  "key28": "25YE6BZMWFm49vp46RUpWBocdgBvYBSSW1nt8ctgDtj8d1n4GZT6Rt1bMzGJeat9wkR7neV1ZVH7oZgVf7CD7yNe",
  "key29": "2Jn1LxKqZRSxWw6JpSiyE1McLgjapxY3RG3wrV5LXD14zszvUMv9BdDJLhT6XufN75Q9aSYaqVP1agjHihd3WDbs",
  "key30": "oaMDsFzBVvzZ7cTgADZyDXRsUTo1w7EznW1KRRskFBX4nKkZy2ayGD5z3UA1XUa4fGGPRXTiw31QUUHFMbnQTta",
  "key31": "5mMMaWwCX1LKtTisv1u2AEzxRjKxtJH7t8isbA5Cb5Tx3Tk1Qxwq2chfMfM2KHzdiMFnk9aVLAmZezz5SFfQWCL8",
  "key32": "tjQitP4mGUa9F9L2QSkQMhrPJ52XGaGSYznLb7Aj963vx89S62t3DC6nki235JhuMyaFSmjeK1md7Rw7EF6ZxEu",
  "key33": "oLuQC266R3m7k6AX9ZUtE9ueVrfsXm2n8ZsP9fiwcA8N5onBivwZHjFNVTftXeVaaxXR7tZUYAEJ6Js9qi3jMxn",
  "key34": "uHJWgBGbaUB2KsAWK55h9xvxFiVoQwbT66DCAQf2CYxAFxvKpbW6fE7GPQzxoWT4Bq9SuPrpH95hTMea9UUMf4x"
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
