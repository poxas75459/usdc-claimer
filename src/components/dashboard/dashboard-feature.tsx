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
    "HBuMF6YpWnotDdJNK2FqhADiNCZpk6496KMc41iHAp1ECapjDzNi1rsC9EnMgx2pLUnwVdzBMXu5bCnfk1aGAXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDypYNc4jfxvUTmuEoejMKBEWumBTKCh3BydLZTMwWGauF9wwwiMp6fZwM7YNaC7unYvdHHpFejqJxt7zAC7sw2",
  "key1": "5vkLPeXPhXJxPnggctjoCzoKzr4kLvy8DBXWzWBZxkGvPhoxn8fNcifpUoAc6ZpMXbkSVhaprYVaCY6JCT9E1gdk",
  "key2": "5Fbt9hg3tRk896rTZVShTrmaXJMyjCMeUmemiDfv5Wo3oQjyRM5XfWSQ9C8P9ptSQdzTdNXURZ53Td5ACY9qUJxL",
  "key3": "2RBH2GfSdfeCTLLgLtKGYRAK5odJ34kQiBBJqQNb58CDBqWHEAwxFPDs8d6dMDfMyiZ45YJWmt7FB9NJ86ZJFd6j",
  "key4": "61sNQ5k42GZzZsjqLfkr7YfRSqeEGQFM7Jq4NANW43qDvhHFkCpQF2Ku8u6EAhaCHMNnohBXyEnvy5hA5ND2gas7",
  "key5": "2Wetq2geVd7d4vgN1F1PyB9gTcjpjSedhEBmUQSyygv7zqqgmGLj6npVD2iHLkaKnsLeYky7GGE7st4R6YhuK2Jm",
  "key6": "QvxZrBxvUB8N2WXwvbEwbtZZkQvjox4GDBqrRAYPXawdWwDvSngNrxrhnCaXK92tBPHVvx5tXPEGHcmZZDqfjim",
  "key7": "5bxyCxgMxjKaagGdYxP39eQq4kDDEUGAnwLA1NiF1yekXTLH5RkffBGnupeadmpt9KDoaqfpfV3sZtrR5imHG3hC",
  "key8": "5UmKEvp1neSZy8DJev5yobBWriVFHUiq9wVEose1RrSBMqq4puRwxQPZZ1FG1gTM2kUuKgABgrJ8EWsr5nAfkKeM",
  "key9": "53Ri9XX9KQVU8Z7zD8Tuq71AZR4MDuzp5pEgcpx4AEf3Vadnfafk1ZW7kxBoNe3m9QvrXDdvGqfLvHoYpYHUQvNh",
  "key10": "3aUvY641Lww2VkqgWAyZZ5ZxhDa8oMYNp2uF27xtowRkYucbe6qgGAprJ2NEntQWpSqCZFzSabFoAsowYjcdVXdE",
  "key11": "42hxAzjnWuP8zpASqvoqaaCybkhNeVq57qdyveUuFrGTt5nQBEPqxrU1fLkY5CExJA43tCB9TC9BMTSo6WjTE5tU",
  "key12": "ekwEt7uKVUEuzaSoXEncxM4moerNwfNhSptAeiqeRBySsc2puyzyiG6VzADJ7LQr5XMjQRsHQiLVZ7rzXKa96S6",
  "key13": "ndQbVfHgEZupbz7TVN5Kami9RS79ad5XTNtyfYFw6MxEC9dueTtL3RWsyBsYK2uueasbNRHTuNW82gSRaBtahpR",
  "key14": "276uNHkKWYwnmpatt3mkAPTD8zFoxVRtz3cfQbAsrtyVtLgqwxA7WaJaSoUrXW43hUWzMmvKyTCLXSYVTBg9Nscg",
  "key15": "4rGWaAmMMoDBzPmDonmhVcbSPz2kAhQ1GuWofranxKxNpf1XnPUCfM9GM3D8aBshDsbURUrMjag4PdvTwbYgQzLd",
  "key16": "4mWEc7Sc8JbiP2NatXhtw8QKHtVzYEjHpc6DtuuJ9RaoX3SLB1UQQadzmNNUCSiVFgRS4wEbCMvwn8YNbf9yAYuk",
  "key17": "586QfpRm4TR9pTLJjmSBXcgTXbovV5Gt5gBNzihA9KHQwpwwnqpt5tjwBFcpXDZkpUDVagHKKwGU4VkVucmAfwFr",
  "key18": "4goJKjzGSYhzYhimXuue4ouDK97mcHNsFTzyuH3QMsLCsvF3WL694n5DAo4RkmouTp9tLBMjceacuaWyzk9ft1zh",
  "key19": "57uoJrnrmf6w3QTawibNX3ESuSsEFazURg66dT2z4FRje6y3YzPRwTV4jXvr1cHMDSqfeDWTbas2SykkGmzV7XfZ",
  "key20": "2pV1MuaHH7LCFHKBudKY16KaY3stjnG72ojqpHhXe66euDcntMSNmqzDCgVDCCajBj1M8ykG87RWopBNWe53CAnY",
  "key21": "uwRQTsNfZsCDwDyNXYAQPD93VqMrYekmHaqqVgdhbV9LaS5Rfm79KHK8DdJBZRafMdW9N1P3RyXVMJ9TCxukgxD",
  "key22": "oWLyE6X8huzG7kbCTwQ3Y9duhS43KkTpzKZhzKNM23pzQZepYXgfNSLuhJbo87sdpPr5BiJP5hXkhPLJT3ucm2h",
  "key23": "qMn4UQcTQRzea5h4jJHFh12azdQLPjfEZfyCatQ5Ppje9UYz5WUujxo2UoGa7eN8DJWuRz6mqFSHsDtVQksqnKh",
  "key24": "5m6ZXA3v548yeWaFtBRosPHU7UF2xC37EyE1hh9Ku3dTWgRHL6VCjXwGvaxbwgEEr8ARajo19UWYL3W1b6nu5T6H",
  "key25": "5rSrMzkosM3aVjExxVoR1JdibZH2TFXqSLpvcUTuTFj5KLREq6v7jWbxWA8coAv2wE2CUfYkB3muYvJzBWtimmMJ",
  "key26": "33cxtmdKjAaH23gemvaDwVsMPcMgMdxaAvsKetfuEHAcrytyLi7FkgwF6uqyiQCPMDFohZ7ybpdytCgn9nEscwqK",
  "key27": "uWnufhZTcAQ6rtqH1dh939k1mJpHrAGyBwwGB95PLtdeuVvdtnD5vBfJq1AbVL7VuCu1y9Ni7svNYNrJr4JfWzo"
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
