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
    "2rBjuGEwfkYXvsnWjqzGG45oxNGgCQaBZwL71AX3pSJRhaJHkZHfpaXVHmX37JV4373pSWrp7v2wZqwNFjmLFtBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcmVJgv9fxEyLUpcQqhwcU7oMh1fB7Xd3SjNcXQGkem3jdv9PotdWSUw24GEE3DDC5mhiQYiZbfDouAKMuCQt4m",
  "key1": "23B88o4a83EnQPy6i7xHBLq385YPa3p3H343pQyG4N6VXLarGYPZ7DP5myQwMsBk63az6BHGipLirhHETjKBmheH",
  "key2": "6TpqErXw7hX7LTofHYs8KxoK2m6sQVBva62pP24anGCFE1tfetRWyCSDai1rTjbV8mKd3naMQcfQi8VmErDWEyr",
  "key3": "3g6w7mMMUuzLspEovaKsNQskfxYwRp2pGC5V6UGhChdxH1qhWzCZZ6fyQEcKnY6w1ZrnUNVsjJoyaSAvdmy1ANoX",
  "key4": "4BV4NrMALtm9hZ99tSLaAyWgU75B9UEk6nja4sncK2rpu4JRrsJJ5qbysw8Rx2S6N1YRqwSv4xPwx2bpKC7h1rdP",
  "key5": "cumRcxYXJvotkQH6TZ7GPXAxBC4vBo4cQYkVjDmqTDLaWczunRTaPwEA1R9Wd9YHhqjHA3FVwv3a1rjN9p31Taa",
  "key6": "2Baha9EvLd2v1QhybhRtQo11zbQEgCFcxYKJxWs9Yfh3pQr4XeCU9X1D1dYCBaKv2xFuGhdVuzCN5bZNkdSntqST",
  "key7": "3Q6LYG2MQ3TYGJ2u5xdPDFcYJnoVvk17Ut9HsrHQtmDpfWGqDhNZGfjH7zGm1bGwqTnHS4xSz6wB12ie3LJ4pNiJ",
  "key8": "2gnYGwdCrAawY3D5dkaRqQqebHuj9CcyzhqUqrYXvoPKka28PxH6k3Ut9d9cZrLET64NYgjxHUB1cJL2DBYY96H",
  "key9": "4XCseoowTVTMT1HcTPaX45cEjx6MGFLAxG9X4SpAyEaDexd2AHMzxc23ozRzgd6y1iePGQRU4NeQKE2zfqKZonfy",
  "key10": "4zT6dSb8qbdjvHRasjqkjVXw5xmouF8N4vZeWPc8ZUeE7WmycZPpDDPnoc2iHWLMYJJiUVfSDKLBHDgh3T5ujXnN",
  "key11": "4ywfzVkpjNvSMZCprRCnSsnremEAn89wYyd2F4Q1TbSxTD1DqcppXx9kMu6maDa2M9tx2YpD3HThkQ6qRfPGSqJP",
  "key12": "5hXpnReAV7VpQHxQYCnc88qT24SdRMHuWoUvJVPNQXptrShxzWuBWF4356bw6vRwJUY2FDe44cK5Engh6MYXUKjH",
  "key13": "2mBLd1wti8PFqSGkGYKzUqUKj7Ze9Rk4E4DhE2cFFg21LyqLv9q6qBvUyxHhocJ1zsufuoAScTbUy7kyTQxK5E6M",
  "key14": "39vqUgPcvxPohxtM8LjhfbA2eciZHpifKXtqJ9zGRGQUSK4KJPG4Xoyoe57ehPP2t3uR2gxfq5bd56EneMcbvTD6",
  "key15": "4rKVBRGgJVPsbd6e4k4ADyQCsBpWKtrbk1auPws9NYP5NFQMjuhNrW4HNJszkNZELY3GnehW93yyGXRYPsj9ZJqu",
  "key16": "57VyLD1anoV58686n4j7mn4WwbHr8pz1Fyd239esDgEnNEyNMg15k18aLJTbeD4jSvKH1cbtumCJRyUsD1X3BRmk",
  "key17": "62y7XSwiWB5zzDBewJ3qorQFtMbvZFcwi6qj1TEUqBXWRrBm3YFYjow7xwBQmbrmL3UvM2N3J7ZADJsCXZrKNGUH",
  "key18": "4yR2EP3Ki1KVCVZSz2Rb3E6Lo9YZ81syJV6KMTf7Eg3B4JiZp81XCygmAj6yJQhgKegprhGkysSnZkSS81Hg3Lqn",
  "key19": "3wF3CiSAPf9hb4xvDBkC77wwzuTeEM3LuWxGUL9H5yZBaV9eH7MSJ9Fti8fGy7AZbfKfcTA56ckzqBpm8ezQM16e",
  "key20": "2W2ApK26neQaK8PySRoinDfbFowjdyRN4ADfNCkGHNuP52im5zUbXDFonNGyMXsrmgebS17KYfczdJWL4WswVAW3",
  "key21": "5y9r3B77ojiWCNsieShBxz8fms5TUj33LRTKVgpbqoMwhVLp385cmk3yKvvsZGScQPoUcBeCwpRGs5CUt3v75Tmk",
  "key22": "5F7YN6thkvujyYHosph74bUnhozAjFf9w2QB8FKs8hvc6v9wxXwSU87cpy8FMbr4FF38LMVXECYGyfbLeWFuNTJ5",
  "key23": "5yzY5Xpy8i6rFF3NEX99XpsGrrv1hbUniB9QaZwxMHpxJMbucKo5HANhmiFTmG8uxmthTK6EhwCzvkw4h45KVVHs",
  "key24": "3do4TJEa26Xfz87AqAmz5xkefCYoPSRHHub22f3xCJWtbfHYshRpEw7BcLL6t3gqxrGSbcF9mfM1zvpXDa7Ad9yk",
  "key25": "4m6vCeT8w36DqEcrPsMRQCUx4ACPw13Rs7fhiaLZe2wdqFzpysA4rqcn6Ro2KX74xLoVDdCrSvjvrfBc45foAk7n",
  "key26": "3zYuJqAREbrjabGMN1duam2qA9zU4PWofNY73DuYZemcNo5f9eqLkhubwQVgyA7oUVbU3Z3AGoTpYAFuz6Sy2jzh",
  "key27": "3F1ro5uCRyF7HzED4Sm4jAcZKiY5HvSdjQsPdgZQmXojyX6gHEu8RfTh1QAH9zCqaNmg5N2jTVDtNJdJVpP7bpZT",
  "key28": "kpo8XnRaD9V5p1nmWWySTG4z257LRdtahkDymgM2m4zojg1dskWgPA6CMz8b3E3yKuCu9wNzeBPW8Qj4qDuX6p1",
  "key29": "5T8dD5fsfUGnaC3c4Zd37QFJyokQL3kVPZwUMMAynWeQER8W9iGvZyBnsEjVeC9N8E9hJeZzcN3cZReWktkr2zQL",
  "key30": "3TZYizsBgXGthKC7XEs6bPYC2zRzz5WFmPoZQKamib32un5FpoLcJi3BKHPcGG5GSxssHDDR4uMe793dNGbbeEG4",
  "key31": "3acvXihjtNfEes5UtCtz7oH6HC2dLbiTi3b1Q73N1igmomurU2KnSDVHJRVGSvXyU5JbjXkcth9mZUVjNxwPhdqv",
  "key32": "5jKPXhQJMKGGKTor39ki12U1ZxU1B5L6g3KSu5oSFJEonuY89YQSUjBDGduqoTGy3SE2PL5BRqTpsppZLHFLh2md",
  "key33": "5KVcqvWeM8u5CKghLy16EUyd1uKDWGqDcBRBs9UNWCQZhekfw6qR2nAkYRVBQfZm1t9uhKU9WNbrYdCsoCd9ugeq",
  "key34": "2Guq4mXBCcbKt8NDaJH21HFAaBDKku3cVPBryBJJ3dF2yRDwoc1pKeVKYZQQHATMS9K57y2vF5XhRZ27pH4ee8Bd",
  "key35": "48CRkCSUuGm88NTiiYx88zRA7cHdnDhYpwqBGDNcPEjV2Bwb3qNMUkwP71EmGkrJCs57dVZfWmHZJHDNUBuP2VJa",
  "key36": "3QDMKQRAXgKX2a3rJqqy926zCiVH5Lnkye9TMb8JWuCYxPuF6WNaYWSHxgrzUuV8PZNzieg9b3V5YfmvrSqpeeSD",
  "key37": "2DtmvP5FvokRWMRCNajdQa4ZfkrvEbTfxT6HWqUMJPb2p5C6HB4UiVPrkhnGq57hxZVj4AutYSpbpwdsS7Y1YVwz",
  "key38": "4rnDbhoYZzDYrPdZgiS2DzUcDEnLYWWfwCkExE6oGs6qvpSRof1Zuq4LuFh6AaPuBE4dGZi2G3idzmZehPu1Jsws",
  "key39": "5fZ5DMJ5ZqvXnRkGRPgZ593aUHFhd4J63S14CHwMZ2nhP48L67dUGYmosfPRobBZ24vQqTXV2RSHToDRcXeRbEX9",
  "key40": "3SbBV6vUnw5au9XqMnQxsV7rE1CMQMZMrJuerBGgH5Yhq4sgZ6EvVDfz2NgMPUxpbuhUD7Bv5gwJKXsfGVgoarCi",
  "key41": "2XBLXUtULJUFGp1hCM68BrkTKrULAcYFm3JUGoWAWGTsBU8CViSquvWSCPdYGmaQoqLK85yEBa3SdJHpXX7XCEjS",
  "key42": "21fp3dYBg1HTBkW2N3n7JSY1mLULT8atzbi47UP8UPZg5asGk2QD9ofV7h5uZ8NCE8HXVMcEN29nhkC3mFnfnKZt",
  "key43": "64Qx7aNKNo1U9bLVDzfRP1jzNFj3otJuNWre19wJgykeUzdKeje6Junya9xtrw26h42F8JxEd43m1AkhK1XWJfrG",
  "key44": "k9832Mtyxph5LgzrZnbdjSBX7Uh3QpPdk7Pa96NSjDPmnYNDgvVXW9AcZ3UWhZSKCArDZaqBvF7BsNJFfqbANhJ",
  "key45": "2DodWaaB3A1xHKnUFwc3y4gvr5yP47BgnshkZuVvBuTfZHHs3G6yFhqh1WV7whubYcEX1qqRLRCKfMegZ5jsyaF5",
  "key46": "31eN6fFBS4WSTunTfgAspLKbZsmkDaFa8VcN5avt5nF941nPCQYnDXCPPiiZNiCjbeQfFnQv2zcJTEo3LudUGHyz",
  "key47": "7BGNmD8ofryBKQqrNWTybqaya9BjqbyjYb3m3RB9eetDbLpYAMNqGnydnX2ZNwjddumLEftUcTyD3NXDxofmdJB",
  "key48": "ko1pqRQHs7Lqxv98KFpG8YwRQw6y6i7FcxpnvMzvCyUZmvwPgHCWohzpHeMysFsnAX7cnZY9HJ7nFJdj2q7Jrja",
  "key49": "2MqQNpW3osfBEHjDhofMJEagCa8FsGXMkJphYSVsgx2W9zhsQD64evW7FWEkGiNwnYNxz8CgHMk2rgPFimpZQNiY"
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
