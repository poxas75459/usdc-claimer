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
    "4ggrMvbvv614MmNdc6xLvgHxTCXT787NcjxBcS7HNGXKSa2q55nWNv376cXgMLzrTdsSRK3zsqLLkFRvwFLXp2Gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59LLeUNpNyST48KzR4PhQf6fXrX5uFrh9nJNTutfcc7BMBTyJudQBGTRVxxMwoKZSmdPKhoz3xZndJEpGYeKj8rC",
  "key1": "42wkRiwtpWv9XaUKeYzLxtzLM26PnFdLB8dZvt95cCMwbQEPimjjVZga4Y3ZuZDUd39Cb5SiRKzQeFf53KGoWBFJ",
  "key2": "4cyBYJaPhPT2zgydFxdSYTaKQnUiFkRvGux9ro1Rth36cN4vXxCWubGAggotYfXnsNwQMmhBCgetrypuHo19U8Pb",
  "key3": "ke1QHFWFuF5mSp4nukwWWvZEeZw499VS626RSCQU5N6GHYjbaSsVneLSR49oJcw7YAL3r9zMpdq73ucLZnvzKGE",
  "key4": "2WbyjfWm2gTjhabrYAARMVZPh4DRySppMv4gFKYzP63jsmX95twR2NZZAD8HNXgFsNk7Kye5fceXU7oc3invrxnW",
  "key5": "4Lke1hwbS9jhSTBSWxmcLJZmeKQzyFBmr3hAF55kv9XnrKHs8N4rWaMAGG4r74NvN96BW4uByUSZYK2AfoWPG3AJ",
  "key6": "3AM7HT3Z3gqQhdQTYKr6VfTsC7uKQ2SoRFdqNM8tJ9yRkNFCkabthFA4atBnc2vyrRmWt3QCqCpdCKRziq3xXhSD",
  "key7": "2on7gSauqfJBCunuBJtNYPZWPTjjzq8FQ9AMHcAC1MVwBgCWJF3DTWRC5Vi2muGe4TEs1g9eh2YnjDBMcPRHp971",
  "key8": "53pjTzRdBPyGGGUCF94swR4i4PpkaG5WKEzyV4WRxchpJKezpeDqHre5Qv4ga7a3QhS2AvQvw4hBE1tPLUuyGZJu",
  "key9": "KNwZkUCm2aE1cZsS1gyGQEKoyu4qGpRcf52sTRHKNtvUspxcKZHdZiAESEzcVeqTRwttiCH9iqEbpSbYNPjW8bU",
  "key10": "3pFE5QQCQ6cRw7zdHHeW23Aus4FxSmAAbzMb2Dz4CfpUc2KP2gJsmNdYvkkWivYjKgusvtEb2yAMpBvLx83UiAZe",
  "key11": "4Wy57qUxaXgpMC9HEzwM6SiwG4oetBAaUVqJ6DpHn6Vk8mcxMQjvgbgTVQyXTg1ia2qXWs8LD68X8jEMm7WHLewv",
  "key12": "26vkp7DvUmRGBEBMFGPZiE8x9iXGyRrohXL3vwdqnybz66zic6DhMsVS4tJ3v8hB1gVbuj1Cpy9jepM8yndFuZkH",
  "key13": "7UW7LzemsJrjHTr3ZL7mPRsVQp8kRU8VLumQEoqQzW6usTAJBBzsAxxqGHnnvXiNyvWEUdDBDT35awwHaBVdinA",
  "key14": "5kaKi69Cz84vwyAYDP9xtttwE62DFidET5ikmKhFqCxUXjKJPHkasrSGiY1uZUVys3FCVAZvw9vEGf9ksbgpKCb2",
  "key15": "4mhVh24L75nmYPD5cyqMLzne8Ls7hJFrHJnjnwiwA1CKfMJSToWHADyy5CQya6WkfWMYgfU9GdCcCQWSnXJCQHgt",
  "key16": "4xQYkVFMSrLN6KrvEcbmV7fbiTddGBge64sUbt1riVirbmQhngfZG2EAb9E8BLNZRJQQeSYu84UgDQmBKpfenHkD",
  "key17": "5c4m3obRKYXdQFJxS2cYb7a72SE3yeQrVqrnEVxtPG8Ah7V6mh4mMnzj9sEwUnBxAu4JSyDgCwAyYNBr96aXRxtC",
  "key18": "2FxGmp9wt4YAG7zopReCYWtxqcHaZc3UnTrbM5cwFGCZC9B1FKxRB6aXeEBkwhLivFVQUBSRc3XPZ4vQgJJvcQ3x",
  "key19": "3cuUDwFByQU1N38EXydEjR9bvksksiiTSqE1bVyVr42mVQ6PorzrjMT8Uqsa2bgJGwyReiytmSm4hsgyeu3tim37",
  "key20": "LUtBDLUkitgQRjyFPt84bvgdLnZuYgJJQvS6TnBwfUCeqhrWrqMuwfaUysH64T1z7ujyCDFGmFXP8QukLSFVUM7",
  "key21": "5m5KTAchFSCPXjyhaBE9ANRyoGPFYvhfZiCgJUD2tWKeZsVgQC5rXBbSVFn319Xr7Z54EEs3SX4DNxuwdMM9Yp7W",
  "key22": "VEUaHcYazjMNw8bR8sCoXUocMPkkbWJS49KSMLWXePSspjDf6V5psayK5oY3WSFZaJdVVjy4MAevuEoB9wKqhgT",
  "key23": "5uC61FCHUfzJnA9nQnZWYUdF3sHQJJLmiidM2ASxWyUhkdcYF8fe5miFCSYiybfQeLeWgwosDq6YEYtmb2Gheocq",
  "key24": "3nHHkoZNcEUL6bkVovTrGHjuS2tazYhGykS9gzNeVjngcYtXcKLmCCkdMXDwrSTLEZH28kgkMpmCbaJL2Fb7MhAv",
  "key25": "3BoTVsfHBj5Xx4WcMe9c4zVFZpdv5SphYro3kbXRsUdzVTPh417Lcksvq1EtgpKzHLx15v4iqpGk4CydDkgATttr",
  "key26": "551Cnuty6nKwnYUogwndiUaC6Ts5xPvxXxR92wfcv4N6LxYwBATncLG2EHDi9bKMkP33z9qTLk7AmqowwrJtZoPu",
  "key27": "nHaEm4YLZa5z3swdgKwNABFoZfk9R6BSkxwQFHHgzrw2SY9HSodpAQasD8vhkMiAGxSynKD4x9D6daqcMYPU2Pz",
  "key28": "4VaHKkFUN3U7V1DvKZLMyop5hEqdSBdz5b4BW4mGsQBbgC96e6WKZt5obohZTtgiPkZ6R76m4eAKwCsYVeKQRyBA",
  "key29": "46mGtkSjPhJrdfnU3QzbnLhgqpxHvfts9GLAS76tGSv9ZsVL7a2bWUMMVFdhv4CxXvGb3fakV7a4yrtDi71c9MrE",
  "key30": "5pZFTMDow5EZhQ34SMZaqTQ92i8P8MpNmsoWrxBwSXEsVh36UxihmJZ3AvMCcJLTQae7mfab5FMfDCQ3za1Usg9z",
  "key31": "4wouCtgjEqKXQA3FhZHXmfY2CUVe25K485N353F1ajv8yAHutXQ5i5w3iX2fQmQgscACAfECQpEw9xY2CrDoxoqb",
  "key32": "2qeogzVp27d3aJSds1v42iuYsLGLSni1ynR2XJNKfABaHSVxGp33vMFajZkcdDtxAEDs4PG2JfoAuDkPERMHaNFo",
  "key33": "su1ehYJVf3HCZ42UkrTwW3pPbLHPUyMEQmu2L4dNwQojN3Zqi7oXTJoFiadKRMyQpxPAM1aePKME6wn7k6owgxq",
  "key34": "2LZFcrqqHtoxN6MakfdhBHrZE6NSa8PDc1jsgVQxFoYHt8gF8A6S8opGy1uJYSAgARhN6MvEf7ScFfa3xaUNbMdc",
  "key35": "48StQ4FAPWBddPqnFa55QYdSUmzuPopPi7AFLnQBx2kDCpdh5VVzYVK1FEipC9qLK5vcgY6cAL2y5Lji6xVTqbiH",
  "key36": "2pHCw3ywv7YAPYGub5AG6kTymYEFrQPZbPuTQrFGKLH6vkNcVqSFuYXPADjxjRbogfic54qWMF1wTBzsKpGuWnVh",
  "key37": "2c3aEc5zuSJ9GS6gXzRwWpBDAJpyXTkFkA6CS4a3cf3uiTmhLnYHP6cGvY1AN99t9cuSgwHvuGPWjFZhgvMkBf4z",
  "key38": "4Myh8u5C8RuMKtreBMFs4panAzm5b8QQgMbPW2AKuDZMAvRaCsbUpiiYqKstjm313VWUUKC1YyvdF4y2V9rSVuMz",
  "key39": "2ZeGceKEW5u1ANLARKbKZskQh5rk2Ebbwsg73xMbE4MMs8XRrxCRLDStvwLN9A7vLynN8yWCxZqCUfAVsLGzfiwA",
  "key40": "4rtfKqXNXfFxga6BXvdHKCjyNx4XpQHPMtoaHr228LDwGSARJ1hGgdTbYmwTdHuH5fJGdTGq1nzfXJ8KvCfYPNsR",
  "key41": "5k4hA1mm8oZ82PFFg34cp2x3bgBWzNfGzxngX46UbtGwvxtxV3JfvpM2z91FMwktcB3xqDM4XokCYn2KeSF2MW64",
  "key42": "qaUYcwkTTRT421fExAq1iAzEqbYnW76Rc5nhZGSd1FQsyXgjpsMDDa5w9s9XGYiycF7Li7zJEHv9y3e377JFh2n",
  "key43": "3QZkyKT4eK1KoWNZyMU4nAz8pSH9AuZeRNxjf5Ug2StpHkYpEMBu6RgGrq4sE1TECaRkmQUSChhTPwiJzVaNrXCn",
  "key44": "5iucC3ZFXSSY2QHB9AZ3WQiP5dHAY7A7fE4Dv2QrJmpctuFvXbGgWrFijCYkFUFmSyXRgexoFF7jMT4A2FHBLZpV",
  "key45": "2juDRdzXDMgE2HJbFyKCFkyYxQy7hJAhUtYpSWmDGCuAh4snmPgLVrkLj3QfB1UETPbH1a3jFLfymEC5FWzYvzpr"
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
