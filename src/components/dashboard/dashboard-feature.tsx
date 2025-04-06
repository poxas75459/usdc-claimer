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
    "4stT4bm9Rxg5Jx8P3bMQsVXDRqr9Wcr3NfFqs8XCVX1nc5hvUGjL1Dhm7GhtXYfs86Ds92sx1eJScEdpaBJij8iB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X3pyh4qeypj8oC1xomieRv4yJWXBSjVizx81cymcEynjUjrGum2b32SxQfWp4yAGuJFyPjPmhNoeA7oj2g79HRf",
  "key1": "3G6UEww5Bx3XPcURbbWKNkdhQKfR1kkFtorry4Zz45JeeyHXEGSWErDP35S3tiNXtjQ2EYMFEcawJ4Rsp6D4zhKB",
  "key2": "755z2423RecftUJ1iskV4EzufNdzu8s6dAtASUfCfDgZ7k5pkKmSz1FU4ZrAz8e7SNMLSfPZhbETKhCZKH5JPx7",
  "key3": "5fZWYNyBuLEzKQ1uE12YNMahxQFR9B27J8MXPys74NjTeEYEzQSi8pYAzHwsV7XbwtJr4ykfmdZ4jyPnpHkT1mev",
  "key4": "3UPhTL11ds7a4X6U1D5sPj6eySxsgfn2yfp724K4FRNz2a5mbB8bkNGfgx6E1uB2MTqsj9jj9Mh134VJKCBeWvXR",
  "key5": "3XJ2ZZ3wvgqsVvoTqPphuFjLsknCk3bCCifMd7nDNv6mNSXr5i75hy1BJ3jB3Sni3NnxoHa6pA9ZcKMHXKHou9Ui",
  "key6": "2hFhrKqGHib6yvUcnSnWLuosPTy3zRMKqZreFJDTXiWY3Ljk8uhxu8ih37pejbJCbokf7J9WMt2Q6que33gYegMM",
  "key7": "4PkKzUtCM9jkmZZmzsanp16Muh8iKajzQYhpizc7RKK8S5NpPTcSZ3NB511WMv4aHzcMhRmzGfdB52LWKsg8rfGU",
  "key8": "38y9e1zwqyR2PGCw6x849Pg7wLr8MdDpgTtXp2XP6hv6fwRs7x6PwYdY7HVz6NNsjdPZNa4v716zc81gHfrshSQL",
  "key9": "TSZ6z6Z5dBKAw5Zcnbh99Vu8P1EpRdqzdPg2o3HCrAQZ9bc9yeS8vzqbZ54gZNfgwXcUwjRmY2UbgSMDFTbnZtz",
  "key10": "5hvYWgN5LVYuUXXzyj4FRBRETphYkUm2bwqNbCNkTHKByQT8voumiCxY9rDo93T43yrqqrhDvQQWS8drSLyvfRkh",
  "key11": "4YbBr7uVYZxqJFJBuqrYqSfdCDM7SAYJ6WGSpQ2u1tcmeMTdfuRW3KGhmJ3hDrq8Fa6Q2qHuEvCm8ZBukVVQPbEc",
  "key12": "3Gn6CPnQi61L8eCHsLWyfqfR7L7BAREuhMoH6r9shbCbRjB2bN6RirPCHNSofbPyQgbHNAcaxPwvXT8AkMH9XRqT",
  "key13": "2MHSSt4mno1ZfhoaeFoaSW2oMGDSt916tBWTTVLa6LJCUnA78boKbyVdPHJTcZT8suGBpnh9Ehmwg97YJHrwoVZv",
  "key14": "3QGEL5fmNP25sa6GGGfoQeh2GEFsSvs1fW9sGWiMmuhptEqkcFLTyHvQ8EHtV8Uwxzm7XerVWXtp91Ddq6nvs1uX",
  "key15": "4Qgmu5awxuP9H9dxChv5Cify1fFVTbkeiNVFCx96sbPojjX8q5pxp4xewsVpgThyVjVdiirrvGsBauXoynDgxkd9",
  "key16": "4ycTUCvGGGDXQFRcSQRBofUm5ZBkjPY2YM6pkfHbDch1WF9j8u8r8xuz33EYZ7Th9zqvuyV8wtxPpDvVZtDSBZj",
  "key17": "5AbCB4r5GP655X9akeNoDJWFAgirWh5NJbRSku3Wsweo8a5sBVQABMkS9DBJmyXy1Cyx9hGnYZVyqCNaY7ZxRRGA",
  "key18": "2mzTgbpQC2PnjTHuwe6i6KiQuxaRtS7dUdcQwhWr2ZtPGYVtmqRZ98MxvcVq4tswUy5fw7Lj4NzQCq7Xyvuge3CR",
  "key19": "5Sa6TtUontYppzzcXGosg6AiLdDF4VBUeYEXoitXEUiYrTEXWmygARdStfLKP3XntqPXtuy3Kfkx9mySNWPS69LZ",
  "key20": "dyieeMszSnoRwiYX66nB4x8RiXsdcMWQg8YJx2X8kmz5w1QEsJGXysqRqzgLqGyGN1H6Ro9rDKE4dpqCV9c5Zgy",
  "key21": "71H9xxLub3DfpazMCA8roey8ouVAhHwFHZg1xK8V6e5mkfhjsvNDZJn7pwzrc2BTmUcBoML2w7rEQVuH9XiSYeq",
  "key22": "5Fcgpfj69odHnnAeYX8NwABRa2KG6KHU6Asry8b3BwweHHacMxSAgyjoebqJeH9zcpjicezoev5RrZBu3UK1musH",
  "key23": "4VbwtRED6kaKC3eQzX7wLyc4hwosLxFryu8MPQFZeaQTcqynaXtjdU2FfYk1h68Lg58kkCu3cs8jAoRDZr8iMLi3",
  "key24": "5GNCys2ZUwH4kiZ9WaM7MdPg1xkLqKEfLoFZVSTVR3NSC3Q7ChGsuxZnPvDjY28mK73JGgj3oYweUo212i222xF6",
  "key25": "4VjvdZ88CEEFQNArJGppXB8HjiPC7U3sJ4tJrSDY5rrfMUf3TQ2ZMDYCgebcuQMDxVcuGFqdyPU9KXXCWKsstrBR",
  "key26": "5wkq5LQoAfsb3ASX657HAV8ZamqYDUbeZH8cKKyu7bxfF1eFrMK3GD5u7MWH95yYzFcy4CfQapB2ynSAjRj7UjjH",
  "key27": "DA5YEUvnfZgWAwydeBtf7zLn3ZyT9g8soZhRN3tKh7NaXcvZuKMH7pJEPr9DybWJyx3pDUeVMhpFpskmbCxhkvo",
  "key28": "272nnvXmPTMxZyQiaEy3d1L7hZbh3Ko5vwr7L4uX6KqWLfjWjLamPPZXxvP6KXTVo2hSjJLBBP7kfqXoyvkSMTrV",
  "key29": "3UeYUKMDStpqt4zjoKY72ZE1Y6UuHHPcjBdPSYij4hZoRMWnu9Lo6vMVMnESVXSe7MxYwEsXsUA8R6r8bZVc2Z33",
  "key30": "3kDWupD7NZWGxw9QSrKe6XeDdaWyzfP7xiKDWKMDhZjh7o9kCXRJ2rVsJvv4KzJumduqbNtcaJX7tCrC9oH3wRnn",
  "key31": "6a1w8Q1vZf3dV67Fbwkni7ZHVqfh8ofdsuDgM1GR9SKC1nQ5nVdyYWPf5ibKizJoYKCrymfkR7yNDJwpn7KyULj",
  "key32": "3p7fBqag4LcaCmTQs5CXiRp1m9AtLBmnYjEfpPg4a7ovpcrFmsG6aERzSzyEVHiwPk4EMKa2QB2g4dTx9UF31j3j",
  "key33": "3mwCcMYJim4aeuHcH4xHQjijrNNALrf1sCiCF3g7iMnDmRvMrJE9cuzabcyg84tTJSdep2gvj7aAoHnfQjeCQLrD",
  "key34": "4En3PmqXK5CWtodFRQu9r8jn17CNTJbae76yufUtiKhEYEXFW1CUsfFruPhhskjAsSo9ew8dLZGhMkonn9bhSPqs",
  "key35": "3VEFEPyf7obysxTJLz8PmBWEqWegFb5MarEEQ9RjSG57K3L8qC2vDU5RL38Zsrzw4FhfLwFehKwbJW8kyVotbC4q",
  "key36": "315cih4tkZP8P2BSTvGKwRxCY58i49KSc4zrtPvKysngh4cnc2KCebuu7HtYdfNdETNWZRD72dRmwYXiJrvyQEpg",
  "key37": "67Qk1Eddx2EPkxHMMhKAXy7mM8s8jNAgdFR1XT5xAmJSpKYzNQuHjj8ZF7MH4U6LZeyTqYbEpCVRKZwUNFNyzPhy",
  "key38": "4MY9LYS8CLuuw4wngo4MNHycBh1AqXEmEV5LF29LfaSAGFsk89acidTMjdjYLFgpNcU3RYGodZCrnABwHTYAi2s6",
  "key39": "4twTit2rENFLV8EVR8QULfSKTmYJ4KxbE3A1YQ93F9sGmkBoRhEFavvk3uiwHbvVC8thziP1HjTUZRFrWdiMg9xK",
  "key40": "UuG5KyWZUHKUk795wzU36vtfhR9KdUJAEWhZwwy8hUxjE3Qp8AHfsPjmSivVfu7UxBvt6FFn8c3QrKYN7dEG3tn",
  "key41": "56tSVH5vrz8aWGGbBaMLTwx3nzXhVfq12L56dqnwUSGvYFFGzH2Lqu1hxCUXHBNXLmw225pmSXd7wPTYPn2PfQVQ",
  "key42": "2ZYQajxwLsr6NFH1PbQvwx5Xd6HzRhbKbDoZGVKEAsN3EYvg4MLeAnTmfc4o5Uja7mZKGcXhDxbNjgcBPnoH5rcQ",
  "key43": "4H6LXhRnJMgj2dmHQV4Le5ck7A58GPmQMXfFkeAXoYbcHRM263RHYGCipzyrEyNJHVLHZQRsbDfTvq6HjtNyanvZ",
  "key44": "536gpq1rx1279EQh3ZUjkABpp5CGzdyikH5MkDuz7YDdJT3LVCt9uvzqeQuMyy1MdwxXYx3mX84VXnf71yKqcp1i",
  "key45": "33hz3ri8M6xVukTGrXeVCPevyr8sUgCPJkwaAJAMqJLWrQMY7NLbzsTfDpJpq2y73wgfSWTihMuRXR6q9otgokJZ",
  "key46": "5Gy3Y1LJhpHqA2eby8ec75uQcUpysVBw91BiTLwt68ceTP9WK6fRmXnnWmkPghCSy437hgJUSfgPXVMiYMLWaaxy"
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
