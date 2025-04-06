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
    "5H44oMzviuqb5fDeRUy9Jw2RBfzowFhnydap7XouHKjptKm1KMsifBoDbRXdk8bUD4orGR66tHEsrQytpnwAQ8cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h9sejvsgZRSPK14naYUPjmhQZeNF41hTQZx4zptE8Uk5ch5aEvEgKZQ2Mu6rV8Jfv4j1YAYZvvzdDaUnASs9DsX",
  "key1": "2FkoM8qmWoMLUDKN9NRgHSQir61Npy98g9qUxBGiBJEakkNb3qUSgTm1phbqAmnY7RXbxmYjfWV4K7mZGRfbcu8b",
  "key2": "3Mem3YgCkG6a6FxjyZZXYAZBxx6XSjr8TbUsvo6HoaVC4bFfKSJutF8p5eJoKJazs4fu9kPLAkPvjnRzQaJsXBmq",
  "key3": "3pj55mPm2EC6yv6dnkB2Gd7J3NLPG3XMubA1AS1J2CxSqpKVL1W4YiWgmd1LZXxnjU1mvNUYxkWVLBC1ZoMg7AF2",
  "key4": "2nSJMMXZ8qJPUcZs6JhFnx2xLN1fnJbDCba2ofhSYRUGopCwPbfF3bGUUwafSfymwyrBS54oVNVc1ttH41GD2rZi",
  "key5": "4RDdS2wvzb4Jg7WZ9eqqyRCXeZcYTfd8TR21E5iKSjJkba4CX76Fvu5SAmo56mqxehUEMgPXpxDSJjWRxA8bVqvw",
  "key6": "2BvRpLvBWVMZ6KFZGFevbdAKj7AQZSXX4SS3PWKPW21CHGotXzinHuhGHUeoE1QowhurSWhCLn2HuvM9gCVkFmfp",
  "key7": "5phPVDKtWtMWsUUdQmmBUkatVKroonoZFmPY5uRfeR2SWCYrr5u8eWqRVNiswDsxDTLDP7hLo3hfMHGHAgw7UfMz",
  "key8": "jugH3n1wug6D1n5CBqC8JfHrzJfFkC6gfBJX9xCSPDNKZ4BwA4JBXsrf2sRXrNRt3Pycvb4boD3F6X9a4npdigs",
  "key9": "sDUwJEyzgatpP3SWQvrzkk7aiBGtPA7cmf38pwR6uYT2GvvdqP8xX2uzHp5KADk5Fu3mXSKafwC9f8E5wVSqZin",
  "key10": "2qtMwjq8XW4GQnKuiz8wEHWBotYvRJkcz36XZLvfauEsnKprgZbEPPwc62dp1mczrEbuSrgidv28W3fbDLHUkinR",
  "key11": "JTvoXHmbP8vpyX7XpxQ6hjnTUyqf8oFqQDQYBCcTocqPvyM9fVTTGM49wARR5mpnNjdGynUT66LY6fQxfVc2Rzk",
  "key12": "3Ew5hL9epWnVM9pAWCEnKzumzbxhuZ9zWeWrPQsTXF96wJmqf2zMiEupf37o9Fy5GdN6dDHCV1qirexofDyeJiCz",
  "key13": "3HsGyxPpcu2bd52XqZ5G6oMGzTPiNPVGz2eJjFW2eR1TGpVfDYzV61YTcqsoMVNZdupsvEGWACMYN2EpUnZN4Kh1",
  "key14": "4PJTQuRsqWw369GLNpbSDSmZkejX7gDiwCPu7aiRhrBb1KCA3mESLPk4DknPGCP6GZQas5i1MygDsXqnxE4p2EPp",
  "key15": "5Z4dnFdpyB7zS4gQFJEpy2xJvR51WeUt9LrTLncShTWUUfc41jFatgEUqXdN9BGfLV8JjFm6EcivbuHQjGWe4298",
  "key16": "Myh9CsGWEPoNjUVtPsnHm2SRWGuEBHnZT1eBwPoZC4GNPstPonm9oJ7h1Z4wHf2ddGRCKpVyuvufQijcdBe1YWA",
  "key17": "4aFqVXbFpB7LipuqPNSPWdaGKEAGWggpsMSNpwGrWMcVqDsR9AZdkCes7RGFuEMBBRQYLtpKbUDe8tGNrqaRi8gr",
  "key18": "3TY7YZiHEUHy1PEiJM2RJLCNcQBFtQE2J2H247bq7uXHBcWnmuCgPh1AKwT2JA8w23c3ukTzA5WyNFJAPbHaBL1x",
  "key19": "3KCq7mheDvuT8sZnGCqvxQhD51nseYMRj3BnMJ4Thix3GQA6E11t9Di8MppYzrbsacjMRuUL6jvzt7u7mrmds2Xy",
  "key20": "49MYzBrKX1qSwzr9AqaymKuCtwxkWiX6TWjuEe6KqMJZBdLBScJkVTLzUpPhY53WxGARqpRCCH9DynL6EXXtJ7r1",
  "key21": "4rR57r4Pm2bdGZcDV875Zam5JoUMkf5Sph7b52BRN9Mr5r8CaTNZu8YLrSGPBTB9ZLDuMWUnCGDfau5RSaiLBrgG",
  "key22": "2R6FnQcUVEZvXjYrc5pDtXzpTQFc99VUZD6dVH8JxoK5cPu3Fg9SgibtJU821A9fFJG36ro2aEUGHTfyWaWDyiJG",
  "key23": "3pGs3j6idaGoNVa8tmF9MJDuX4DwMcg3zX7HHr52Riv9vEeMPdL4K1DVFH52dSvTnmYhg9t855xC72U8YsTq16Ag",
  "key24": "59zxadfCrutwwEmmrG8zxhfoFvkYrKoC9F7Ux8zmPs5W9xRTSYzxGQJ8VoWTu8A4pCPGXWtjoKmoNwDKoqtVcM5X",
  "key25": "2198KXZ5YfN4TnmnzPFPUuULCRLmy6b3xa9XE7vXBMyypC5oFiH8B5oKrN2ygDUFkJbFh2pd25zeNeDNbLXmGQPE",
  "key26": "2bowDpCqxJfheEoS7tXuRbuq1fAFdPKdzKFoqtPnGWxqeYod2s9nzP1mQcMPxen62avtnHD5weimNXr3ZTY9daju",
  "key27": "3ndGifyrmuVjwWD784VenWDVdvwMRYgvSApaWG3syvPjNsXX3r2oc7BrQJhA2H3Aunr2seCUEuwhya9rbeMQjzaz",
  "key28": "3vDcDtskf8i7WC93hBZTExAdYt6Mb1LpLHcbgC5ePUvJDJ9q2obp5iRqiz4ifQVLBMMN33iakk2xder4yB2GimSy",
  "key29": "4HsSQpCCnMGGUKAUvQBeDfG9bGFGK7wwd8jtJSd2kqthGDnerxmX2oEFeEcbX1KjG6bm4u7LdwkPG2U3inUb4NUS",
  "key30": "3kxgA2rRnCwNBYyA5a2aNnENnz3jJQCR1fWgZZ8ZG4cwjwCJm14jW7Xd4gmQ3Y1nKAFSyVzxnCyAjPfv9ucPcfwg",
  "key31": "3Krmxs16wk6LJoFZdPpn4A9o1ZFMfasydU7oKEAckRtjhBdkSn3dX6qcYAYoY3nYeehLi3ixhBrBh1r5zokeQouj",
  "key32": "4CU1H5Z8C24TRjH4e5SWg7RgVqFSLGL2cg6w6SYXmbhtLdQZDp69erNZFturrFXY58DFysMugAVTHjPVvYrwu9bs",
  "key33": "3NX4JM9i7ALq9DwBq6waTQiHj29yGe29MgQL82ZiJP7Quwcq6fZXKzSNBa7yQYL1YnYem62FBM26V93gemgkKzeJ",
  "key34": "Bzcq1htcCjeGuNZWFjHcFqnfzahcLQpvoYYenmeVMaqxfKg7n6J9DKGDasDGr8FmcMFAXqR925kifAz92p4GAcP",
  "key35": "4JLSqewRAhYXxA2NZ49fXdNNe6ndo5NAarv7TvkhDuzQ7yTcL4fsaaLprXv64nJxkCx2pRjupqWPbfQg5Q21XKud",
  "key36": "3dgyMLk9Dqu6G3Vw7v8w67GAcmcSRGDwVuSHhTfuVxUJfKBn4NJyqQ48v3LiATNMMn67Y11Q6qszR7fUSsWjqgLc",
  "key37": "2vQo9a4RkgFcnFu1y8nEynoUT9gqJu2fyZCWgXYGumubnbqpmA9SqcYLmTPEGooffbKshyvWPa63tttbiLmWx4pR",
  "key38": "5XogFsutYJqRKTep4zvAcZFGn6jTModxdJSVr6QsbmA2CzSxu37GnNBZ97JnxKNx8u4eJMoQMuMSPiPZu178F239",
  "key39": "3waetjGfeHoixgXu1V4Rs4r3m1Tg2eAwUgrnWJZSo1MVwfQjQgJ5R4i8XqVGnZeLmX7WBjqxqSPqERs3NREinvcU",
  "key40": "29gpukbVzTKnnzahYRbkuxzXoZhLUsj4ZgX4zY2DMZZ624evwyWoAbb6Hsg2Vs1B5asQ9nDMnCYZd4aHda55pzfW",
  "key41": "395TevnHBVNoeqKYMbEd8EzLKv4KdXMWZoatYSiunFHdBabSjzRScSEuc7wjoeHFfBqm5tAi6BCXoJJ6BUoXtK8T",
  "key42": "5FdnUABTGuc5ZraK368tf7LazqyWX2hR51CeJHHz6e8mPn5s7CAsUwkLyDGJX55iHMEFAi8ARqWf8FDqZBjzVAPH",
  "key43": "34j6v2pbjnarwPbrDige9MTEh6wau39m4JdijnhsAACH5NPchs9xdSwhsDBUNBocWrP8NwvWuVWD5qznBV1uD3B9",
  "key44": "5tfJkcp9R6KRBqsDjdMZS39u4n35sdgW9R7LMha3Z7UN6Ef7PnmaLNA5fxEQqUocoBpPM4ynCr3uSgVoT6GmN6CA"
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
