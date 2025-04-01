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
    "5yrMegjrRdEYRZT8oUwzfBLFS3vwahTdZ4ARGwCMqxiocbhNvVgakfjPuHvPzPvEid1pco6WPVThzucAKRhw1HdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HavFymb69R96XjMj6AkbMoVJgnRhcpifg1zufpR3JxSsuz3zdBjD414NUzsAA7MKpCLPBN6PHyYo3emVgG5vQkz",
  "key1": "BTFpZupuLzkdSYwDoGoEPPPGXixr7euNLC9grgwASXKcpARHbcio9TnWJp5ZLpSXcVeA9kyff44NjUgLvcawnXZ",
  "key2": "HJHxV3qq1Z1WHirmTXA2UdYGpYEZSoddPaaMjF3HiQ7rxJK7sbrAEKErPMfdtsX8BBvrEoFjKL2J9p5dqr8xEdZ",
  "key3": "3aA3ksGtBgCxb4KGyv5T5QrU1rxQaPtXCrEPhVyobJNtWERtjiBouoUwNSvhiBSVSRfCjDCmPrY5NWisKUp1rfz6",
  "key4": "coQia9r6Lab1UVqCWrmJvFRA2dee3NbwXa6fXpVdF82eSs4seEzUi8ekf4dAdNHPhZzz4iXD7arkgG8RVcwUPkg",
  "key5": "2PGDEtXYkCz7tvNpB9WhHm4FwYkM6iMdf4ruktF5GGzJ8H63vDKG5VoojEjHqRempZMggEk8jB1YfhGcfx7VbmHH",
  "key6": "6E3NMWP4trkX1AdSf7b6muAq4x2wBteM32tSaAwPnUrsmnEZ3taTRJi1xB43ufsfuEqxNcUFEtrJvgZnPeX3vAM",
  "key7": "8BEUjXSJvJFeGjanzHCkBZpd25uqCqSCYm5wGKDmYvokCEmGt5uJBoeR41Gmhu6sZJpunCsnyB8REswtfxqU9wr",
  "key8": "5nLM9pben26KvsCy9MsCy34WsSWZJDLJ5c6E8ncgcas39b2nMGW9b9nS37AUQohNsCSBZnPHyU4YDpnmdVtuRpxJ",
  "key9": "4xq9cMynNtsyeNFgKbzcMAzuKtD38pLL1T8vrphoG2WkR346BnzrfkWrJmy5khNjb6au8dHZTm6wpv38oZ9r3fSJ",
  "key10": "5jTRibER7xJsF2MimziGymig6YvPENACR6vMVJJ1BoSbpMQEQ61L5vjNWXE8ZH1bG699AdnUaeKdoYUFXuMwJGEX",
  "key11": "4JmrFXd2ZCmRXYeMADeQkWq2MMyS9auUoRXAtjsKqVgn54QaV2QKNji2dvZ3DdtQmKSHHyv4zPS48J4kDN2PthkG",
  "key12": "2idYTCYv8344sD31jmutSgSCNKUNNG6Azm3gvE2ncVuUpw6zpC9dT55p5722c4ar2aPfGupnGPXtJRssXoMjPXLW",
  "key13": "5cPFNS6nFSDYpqocmT6UrtZEw7vJDCrNsGQnJ2QTdNNvqs1Z8aJrhxNczZBGxhaEeZo9xkLTjKc1VwSoZMQdCrDV",
  "key14": "y32JgtH86EFz8ub5mwU8JFfN8AxDML4gpfdnZjC1E1pTo7U7o8kYftMBKbmEKgdNNhqFowbFZS4wy2mjRjYGkZZ",
  "key15": "5abtDv1kvHUK19c3QC5FU9G9mKAzEe2tQXpFgeuRbcxmWgfZrcwwA5yjSZzdL2JwwmLAxuQR3bPSY5EMZn6PbKG4",
  "key16": "5kQkM3Dhyahe3rnqWZshm8LhWFx64EyfZCM8xm3bu4DqJV4wTrHV21GQfnPSwhxzDhRq9Udy7FkY7KrQ7bS5iuJb",
  "key17": "3J4j36BABYWHbN93oGaCXqKYPTP1CDfaS8HBLpBYxu3jLFV397mERTw7Wp3fXLQA8S94Qg68DKQxnZVqJ5J4XGGH",
  "key18": "xsdkwWE7s8nVcMmz8a3NCWZmXKxE9nHE5QBAaGoiVQYFcGECUSpGbN8YxV4bp1g8ZyKrTSJdsePuGThd8waPUaj",
  "key19": "2JV2zGJfCMJGp2gLnimrrg1tmowhn4ycyxNs7CoyGfhkX2z94p5wofYueuG2DPwoaVmP1WmV8qwZKa4NZ4igYx3y",
  "key20": "2oYm32wggsfKTGFN9tAEdpdMaXHXa2b4LjKbsrR6jJL35hYtibJBHx6HzpvHMv9n7uYZbn9YfrqxoXUDfscXttiF",
  "key21": "3y9aE3DCPLZFZ5nTNEVfFYfD8ZgufJmwTukavsxSATxAQEnPmAbJ3guPYSCv3CuJ4ZARmAGzAThxfi6MPY3Wc4kG",
  "key22": "3J6JSM6a9WC1gCd1MXd2m4Z4UcCTcLErDAxhhmQ3cjKrFm37gWS8odiJx5KLkEoHBTEtGuYBkbAsz5BsPRfrnKe",
  "key23": "4bdGVHvXw6B6YkkVHP961FcaJRwHRs8MhHS7e2WJrtscpx9YyeJ252N9bBxwWbggmBoS7ubjQdBAe1EtL1v1qVVj",
  "key24": "3W5wTqWVRjnFGArVZotzVVajTCGvWPYe3WJoqvw4WmS2HNxFnHHfkLJbh2jtfNUE2YieSGeXigM3wXAR5hDtNLeb",
  "key25": "5ob1WHCL3rFswMdwjuRc9xXKokmBUVtAszULEJNpTHWMF3Lzq3dTzPcX4kh9bjfM2mzH2ZXtCMTagUmMwUL96ULg",
  "key26": "4ncRAE9xrdaJrVNGWzKVmZ3WejVvUBNJQAfHqXWwNPd4DMSJ3RPALBzHdXpPSGgm4EA9hTMmgtT9SdABPWu2NS5F",
  "key27": "54chJq4CK3GU7o1y5D8XGT8qAhgQmATcFEPV4xrzm5WNrY4HCzBV63pcijoAgj3xWtfnLA2p3eRtveFvMg3SNdzR",
  "key28": "3LUy6wtWzXSnMWwLSSXXESk1t57YT55F2yT6cTEp2RExeiAgV9L1euZduy5Cc8iezeEkXthwbYR7oHYCQgAkpUrb",
  "key29": "2jnDy3GGvHPWVKpW5defW2YJfHjTQ1CBL58LFmG9Ke68c6dixVajQLzEXbGsKSUcKaqkFhvCuMqJhjjizSvDKzyn",
  "key30": "5GsWBxMiV24SF7fQZZWxGzdsgw2ARdAPKquiLeZtNt2cCV3zoUam3WagUKeUbK9WomagZzSEFNtaPRhSuzkzi6B6",
  "key31": "RLAgtwYUjYMarfnb5YPDMn5YKdoXjD1a2jfwqE52JHaqXZLhkGPmFsKRvVf7zMns66K8YghDotaTSyQHc23m2eK",
  "key32": "44VX5deQjUmyyjNozXwE1tdAJtoXHLxrokBuqWmGjwnoCmLfswCHgN7zyEuC2QkAhF6NM51mdcwWAQLobATotK8c",
  "key33": "2BhoJesAbR7Zb6KieQNfTfxrdrKPVSoavDNEWjg35TKktrmYfvmatid7m9W3DUk87HEkmPVauYHgjYx7SjFWZFnq",
  "key34": "5dzmt8B8RkVgjt8NV7X5B6oJ4U4QUqALhZ1HkcX4Gg8Rp3CnkkaN1Fd7MwN3WJkVuLyCegjBT1G336nc3ZzGoRc7",
  "key35": "2aSmr45yZxEC2FEoZrFMDBivm9jjsxZRRmhXjuBMPfoZqfrbai2scdKAqet66wkDjzczJnR6fjrexupcWQRrg3dD",
  "key36": "2igp5LzCCkovoR5XfixdbAUbvhTmwUhx531qdHyqDjX7EjAeErbhaCzy27VvNLzXRgazydP9ySpVb7XZRnVLu7bK",
  "key37": "3626VzNhJqtahseHrxVY6trTbuHZmRMF8M9WhGzqoLH3YkNC3wqQHgf51KJ1zWwdEWFXj3fTWNF8sqoQnY7RfnvE",
  "key38": "5Duu5rz57AwSouxAvRw9TzWHGzMjwQqbUzEHXQiQEn1sCmoyFncpABTfAoMTmgiYD8CbKhaL1wXvUJLwVWHnJwvF",
  "key39": "5RXVfnXd42bzvir2zPBbSYrggtNq1qwmBUeBfLwmhg9FAsjE4KLGPiYBfsg8L1DYV52GwmiY1TKWjWu1qQbvdAT5",
  "key40": "2tRsz9z6RzSPJjacy9UsempcVhxhEdQrCtvj6wcXeCfHYt76TBQqCiTPUpT8oroKPR6ukCzniy3UyD6Vpi3NJBSi"
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
