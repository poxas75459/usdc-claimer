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
    "DwPoZXXxAWfcX5QCzSjT3USrSqjHTQZ4X8RfAZ7YbitNu1nYCcC4o7RmfxzYf6Lt6UPfFYQN3Adz7eceDscekiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nzYEib5zwYTAqKV9SW9uCpH3DN5SVQqH2FLpWeNXL3cxZ8h7gzupRbvX8D8gsjutc6M4dZMdnrQLv6BFEPDsTa1",
  "key1": "KqZps23nU3AJ3AcN7RxEFfiX6JpGsBmTz2NVsaPbM6G2mXyqMdWMnXeiyfE8r6U3qMzWS723B2GTBcb4Vk2rfqh",
  "key2": "4ySPszcxjuitTAZWZydQZy56gXR9Pug36NxWekKa8qLzCxgiPFXBZeqE7Uemo7Hm7frCdybixb6b781EP99tpEFK",
  "key3": "4nHkyiNCL9uFDfN9fNpF4t86eG8EEAQbYFFtw6XA8Vmhi3YcFtU5eSoAzJChzhCc7Ytg7WfK2Veft7JGZ9dgAWTn",
  "key4": "4wXQ2oNG9Boa1Qx8ktMckGtzeCLwKcNjrd7fMNZ6fGHRMoFQZs1xXUoDiF6tNbHwPo6tbMfEXfmoiBVBf2z9iiE",
  "key5": "3keD3XuJFySpk3BHQCadiQzAbEqChQ9a1PST8gcWnbR1o5LbAcWZ5nG4RVTEzRj5WyEzEBJr2bnZWr4zt7s5uo4Q",
  "key6": "4dnsjdidNc982gyKr9xBUeXvK5WqNvSYsGq4amHv1Z4NxADG3i82KqWX8CSMnMJT4qP6g5kiLv3GAx7KovVJ1PJB",
  "key7": "3LE2hxDvDAVrWKbuM8wvrmWU1jVj1QtYmFnSyQZzfdCm2TGkr2DA4XqPbHuMUqD6mmB9vNYjaUKcSyAxhTmMaj94",
  "key8": "31jiTdk1uGCucXFhn7kQ4Uj6dh5gqt9FCj3N5ZfYUddWzhRhzFaZuWf8ZvkJSggvxaBpLk1Yz8UCMMKiBLJ3HZHn",
  "key9": "45ZJWc4TEEXeAtxsdMtc8py9doHteAcVvu1Z8xUZEeyV6nvZhuCBxANNAFbj54NnS4SxhwnZMUfj4ZHQz6CBjkNk",
  "key10": "67Z97mf1Zg9t2jZ15JjscJXvnoLJsnjtXdLwS3fZngCjXy5Ng9HqhGp61aEc7wGBsRK8Lg2iGf9AbzDBpLKVjHPp",
  "key11": "5GHufkv4tfy2LoCY9aasCq8jiy7AZkhvURBd7Psuiv5q5gVvb4bS1Qc5Kh6anqnwbrSCAt9Cv3SfaQTdJXEhVxbX",
  "key12": "5STbTRvu7XT2TPCgDwCvT1CmDvWL1hvUQ6jPU94aKQ8XRGakM7nq7o3NDiaKur71Yiny6hT5rp2TZZqABdh3qQgp",
  "key13": "3x7AHDiHuRuJBMLsYct4dvxgTGsu3meEkjbUjS25ZHUebMkyPZ3b1VQaEyi7SVQ1ViLyPaBfkWfJeWNV7s3oSobx",
  "key14": "57fdDGegVJew1z6wi5WYYsg7B6QgA4aa7NH6B3mxfac6ibwCk9dGcbks6svxJ5ssZX1Ch11MuJS4drB7dcGdQ2W9",
  "key15": "3He2WAwToaifdfdZvkvypjdbr4WArEtM71ycQ7oyD23uJvjBpoMQUJvgmPqX8hQ51EZry8hgESe4CSLL6jDekq7V",
  "key16": "4jhYfKjJA2BttR8f8Pdyn8L4Lftw4d2Ftm1amEsgzBTsRchNpyxMPZrpkk8WEVQNiMtL8yacGq147FPvf859EE5f",
  "key17": "XKWM5CYZMfTBx8ZkLGYWdk6mNH87z7ysxxzAPUBMbPXxrJ4eREre8gDke4r5oqNMhfPajtjHfkdLzcxG8dEVmTy",
  "key18": "XsvXb3t6gd1H8XBRdhBQzj51PgF1GJH1kDabpX6SckzXraEkCpV8fuzgCjJioQKmVRgjZVvxmEg8Bc4sLZqfNcS",
  "key19": "4YA3A5dZGYV9z3CE6thKGoetKaLwdB2XJ2f9TeXceWsxS48nvazp8hqqtgJJhvfUHTMidNDymZZCYiv86UigdTDU",
  "key20": "359x3Y5RoiG1Ln9UbCfnMnSJWsm6F9PXs1NzCRNb5WJGGSdSsJJiXBESYca4aN6BTGwQzZBXMCTT9JJo9SHmx84Z",
  "key21": "2QTTBmzbJEpmBn3EyLqTqmMwegVMZnMjGL256YsSTKbit9xK193WvuyGnqBtdvEoFbTnpD426QD2ddQVwPJ3ph6",
  "key22": "5xkENa2uNcpKg2N7G3fCd3D7d5d8SBumk3sWa2VnsiQanry1sZstsTFhBNeqK72ENQsafMvdbH7QAQpPuPebT1qt",
  "key23": "3gBaZLFcHtEkJhK6q8DSLJkcQNA7i1QspgfAPKmqkn7w4aBuAnV53F63NAjpcYVQTFMLRWirLn4dLFr1t4MHPfd6",
  "key24": "4xb2mfbrfCjWjg6fgRDtxWvcoYUKcXWTfMheyntaTFRWZZMmXb5kRxvczz1Q16LmpvabYjiKrc5is5bWPeXxu39p",
  "key25": "4M5sPZQVvJz4zqDaTb8wkDwREzmXZnuK226AYi6VTyK31SkroXYF24HmhRrFv3Sq8uf7CDYzBSjbn5ceKGr8a7ER",
  "key26": "57ZUKGZNFHmC3m8HQJw7fsFazNLbBWmWBrUFj6LFiHaMBJYyYWZzth2TioZgpkWQndN2Bem7HJ4is6wtZdk55iQf",
  "key27": "4XbGF4n3bUeiZ2nD9HHmVizDS79nCqBZJbtEJqBguZe6Mde1PCGX1TffZoFhq4gaHtAm8FVNjLaZ1VvbnbtZCr1b",
  "key28": "5yhUoyf2fDYvjsDt9mhzheBwqvPTyE8iJZSaczBZincxerTKHEKDjVjqVUaVXyBqBNUZrZn8VfB1FQXee6uPRpBp",
  "key29": "3wpEoz8cXfkj8piSeEeBqq4Pa7HuEz8DvLFvhmt3AsmHJ7hTZa2GQ38ZTGhcmR3fvbx4V32mtm4cTuf39ra7z52a",
  "key30": "43eqLgTDUru3w8FStuY7hbripEfdu7FkBfpeKN6SBzgbJt2Dush7LwnsMo1zzfW7QkXCcHk1HLZYCdyWWba4f2jA",
  "key31": "4hGFYQ1nhYv6FkWPZ1SKwyk5bPNQj22iQsmbqbRiUQkUKF5dAJoBEwp7QeafwdwP4rdddKSVHFHRYp3votbUUdQ",
  "key32": "64kxjDDvZU1Gidb5RxQXUum4Lpridw7VqHB7FmH9yxhUVqMnAFAyMTGG14y1aidy6CtF5LhGuTxMLEtC3cM4JcJy",
  "key33": "3nNJK4dzzbwUHFAKDzvmLiVJS7YT8whr1SKTthTQUfz2v4dVjxjQUGLnDN5KTq1KEMVT4axzHNsBG9od8iLr9Mhi",
  "key34": "33qNXiz7GvX8WU3v2XL2m9QwTeRy9PZuM2X3yQ816B9us27UgGLZBrhGwtP9MBPWUPj5tcEgyX17wMLeVvrLBYx4",
  "key35": "3jJPy6sDeYyBF3oxjNfT2J2eKBS3o2orXgM8MtcEFFcc8nJFoVWzuLT1DqgkYgdndVqppnubgtxtCfuMAiEUg4iv",
  "key36": "5zHk5hqqvi6Z6ZiRi9JDUp2T4GYfgQGCQhANa7KCd9n5E9bypePyjC2y4WERuvZCiXWgmkbR4qURq6vTf2MCHdxb",
  "key37": "2xezE94P9knM5cBw1CeQ8NH1gWywW6j1JbNmchoUM4jb2mhP6FinJfVuHVVyCaoFbAQme3rzYmNWWW92wHno4Tpe",
  "key38": "3XgQR7qkQPdMQCEQHm5VDwYR3cAXw9H4HheDSCKpsoXbW2Y7NirGxvZoJvZwdokCm83H1tLiZ9fDx7UgyZQkPMGC",
  "key39": "3zvh3PY4JQ97x8TgdU43C4j9abVmb5ZyuUx233htkssEKpC7BnWGBfHBGEFj3amKNfTzPJBX7podTcgeRV8ugFfC",
  "key40": "xCy9du33iupaD4YV2deKZLGy1jGioa33PzCYD7pYG1jUyKpuvXnAgSv9ETacY4rzjgj2Fky6VWtwvTPzw6rePpp",
  "key41": "53DZNKSLCCifxSroCLqsbY5hK1W9DzwoKEt6QT7BTwjD3wVa7RNRTFAbkkn6pF6s1nqtjg5HeWmYdpU5gE5n2xKV",
  "key42": "5RVtiCEWTD9are9XQL5TjQccemAGjyExfrHE4Ui8UyEcmpGnVeUassmawwU3STAZFh42bFGZqQ4GCt9JiioV2tqY",
  "key43": "4xeHjhj6HNjZRQg4Eid5RXXNLujbtYbxo3S8ARTZRf6eBCbSn6Pj6RXEtPYfHwyEX4B3LGsypv7DzXedgCw1meYa",
  "key44": "3YtFaqfVCeKRpFRAd9TdU2pHPHQcRSTcBV2TaHcrsmBvtL6e7Emxmhr6fJUXg3u4aPK6y4iuAWYGnoWLgS9ESVgX",
  "key45": "2LPjmRF3Gdzpt5mR4TxLsQ2W8S4Um1xdCTUVu9bXh1gqXFFYdkxcgD1orhV79J4rd5ctwidQpVEbwVYT8MkhwVzp",
  "key46": "xAwBcxVWVmKdRKigLZRDQCR9wT7tHDDhBNPCztsa6CcPzw9i3KMDGEt4kwqo6RyP6GDjDdWRzPTu5WceWuRUbSQ",
  "key47": "4kQ2BgfddExULooFG9Y2eBWBJqZN8LeNQXUrbRG4XBZPqwTaxnou5RW5iGd4TZPoDU3dySM9jYD9gwXZJKvJqDyU",
  "key48": "2BaLiakmW4jiRtrwUGt3sAeEPxkmbQETTgGPxogkGurpGpSNBZGA8ZvJL2GocogyEiYMyVXgv5m2DjTZUo6HJsN9"
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
