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
    "3kqujCkHHShDo6fGBQbu7AMfKoYem7JkEBpodwqtUttpcZyZHDKMiZQ3ZvZt4LigR23JYnKiGo8a2M39eQ6ADgds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8i51TpkGjMj5hytTrNcTdPJFwkupfrbf6pPBkKQkuShq2DtiHqBcVy7puRRihBqscmzaCtx6XzubNBSuvTXrioQ",
  "key1": "45xMcKGsKLsXzW4KnvWKooXBdvankERPEvVLh4EkFvDGcW55ciS3TgVmYgsd8XnkCX1ZDVmw313t3oRLUmnbPs4D",
  "key2": "3pJXb6RvWNHT6UGqwEK69dKBJMAHHUoj4DHqz2yk7EiUU1paPbFH7CzmReue9DBdPCHUndxG34DuSfkhL8UVGf2J",
  "key3": "4n4caQe65WrwYJXjXvDsreZVhqCv4NozSvzScjtvVuVdxfo6r4RrNYC7wFbu1uwwMhiJYvi3bh4FTPsbN47gTScm",
  "key4": "2ZCFGGoQ9vqUZR9krMuXjnbQPQPqda24fYwvhohC894e7s5tjMfAPLSpJfWxvPuV9KMZzvTMscUhUEQUTKSnQQ5c",
  "key5": "2hpJGogBekMQP2z2MKZ1LrPwCqcEz7dHDnAMTkE45LKSKS6unmPfEhFKffzWtfGMD8mSPVwFeGZKpXZMn5FArTyy",
  "key6": "429ibv2V38i4yjXYuEXq1NT8nzomqB9fft63P7Z7pf8gy4YsDjA68RKoEUx1BxCnvkbb4hvQ6wvEsfafxxF7sWJB",
  "key7": "3m2PV3CJQ2GDSZXp2Xs9Sn4uJ3RKPakG5KmHeu2DXHi7SB92bw8ngNj84CpPDaW7Etdn4h9XfPtPvUPehd1hRpBn",
  "key8": "Dcj8Nbe4zjtEDqxFRPBBF1ef3rGZWaivzcLCncJSPjNgMKYu7GQFRzjbNXjWAK4mWC9D7mQPCPh3tvCCZYU8JMC",
  "key9": "5KHZyWsvt3ZkhJY3jJMqn3JA4EDbuTXyi9V9WPKJi2gkaBmkD5vrq7NRZeVxTqjnYXeh7Q8C8QddfFMmN8JsHSSH",
  "key10": "LKzX2YcxifNe8z3jrXJAGRNzQKgjRyZMiVprYffkQowyBBWBTQuGpXspUfpuE2uBQWmFK8cQsSNpDyi3hoFuonJ",
  "key11": "5vdJZVL4LNzpAD58hzeMBoCmiYFecVYeNtLKhwuQfvhPwNvZ7XVQNzKrkmUbqZrJEtWnWuzFRxYnvn1kwK13Neff",
  "key12": "2inASFgHMZ4kWP9uF7KKVhx2FfvzpmX1u1SAMYwja4J53cPcMiPkPR88phx61B7PubbGeuyQuJwZq6nqhSHL7ePZ",
  "key13": "5ANydKb1YZnvpRvK49q9RYSFxwy2yBJaPsfjEojLH2XEx8Qz6tkZgcVmKhg7a8XnKxZtuRTYaqFxuzzYc2V686AB",
  "key14": "2xsu45zbVFxR9zY53Wda8V6K4Cs6coQ4bUScVSThBHL4xzVkx7L9eMn6MTLtHQBrzEETtAbGcGCu3TVVRhSA6jwN",
  "key15": "5oG6RemqY6Bxmhjt3jf2a8SWthwWbUb8DueZvW62wzccGfz1fKUZATKxRGmZpmm24yYs6aH15N4d7gf6PB7f1i51",
  "key16": "3SdxZ2NgRnW53wbsbRCRaMxdiQvWGny1myUeBMZAqB6daNwC83ZgbUTRroM69gxJA2T5smHB648tTT4fmQU4hywx",
  "key17": "3KwprWcJ3th37RF4QsH4Vstr1x18LAGWEgKfKH46UxmuPj2E6SxUue8mSck6BZznVahL2EBZjcCuV8u8KsacwCYV",
  "key18": "2uWk8QtdE39XqCPJZvCZaTV7UQZFryXoF1Y1mZQ2XY3mvoNwsnsuRePuw55WraHkucuvcAxqzARhN96SznoyuNzH",
  "key19": "44DEA81sRaBnSeCqxodKS2rsKySoWJVHeP7nWDDU87MwqLrqjz1HPDYSYjAjUxqAr7ve7DjtZJtEscSUzA6awJrz",
  "key20": "39qU6teM9QNdGHwx2H8WP5U51v3pGiV8Yd9zUsowNnJdUVBwCMPGnU3XM7Ck7NvMo5Zvy5wrHb6JW65LbyeX7QpE",
  "key21": "u9J3fSfYW44Ai1TMBHaTMcYFpUpDRtniXqtK45xoGJrQVHyD5wadaUYYLKhjrY8b8sh9YJTCv99jGJEK8hzbByb",
  "key22": "4Jxs59TBgA8Uwn9mvMmEy9HRAqJ1tALDztVDtLQYT4pRqAFwuFxTURQTy5ax4Qhe7bH4sgwFS1rEFhxW5nDTo9RR",
  "key23": "ZHDEa6w7NWyxdzr1bmJWiWRFkbArfPkK2e1jVMsYeS9HwfLjTQwenCFKfAwNRFV3fhedtUVXUqz5i9rWveHX1kx",
  "key24": "62BzQcfY2PJvZJaPjaKh7rRtcwa5Cmxz6cCTscBE2yyhK3wTKNf8Gu3fj14ep56X2vcahjfW49Am4jJMwewSoPkD",
  "key25": "2yd6Pvkm5EPHM7X61SNizQ3EyeF7RNCxHKzkjDBgdAqnFAMpHfxjCY36rH1zELjq8dFUmYV2HTpW9soGApPssrhB",
  "key26": "5o1VnzwiLGkCzxguw4tb8tRiXx6R2kafKkHVVQyMGMFAuDTujogsRpaD4QjCnCue6eVbvdyWkq8eMnMyf6Cn2PQX",
  "key27": "5HZqVQrVmkPzZUca2u8PG622CN4c42z5A25Eio1efCBjeT42qczL8LQjysp4xHLhD9dcwdY2mdMsWcwf7jUS1Fcz",
  "key28": "31DtAMRg1qap1hQyvYuMWS3xTdeFotHe5HJxbmn26mc99SJMioWfuuu7neaDRkrsRsmNXttPFAKBP8drynAzVZrn",
  "key29": "5ymN2x7SJUC7o4zLq1jsKBmtvpnAouedJ2A27BP4UvMvnnxf3ZAzaTsb8fKWdb3AaBVoQHf4EjugFLxFDQPhjrqW",
  "key30": "3LcJ17yuxXwrGeecrviusWYacKuN7tNHT46hy7ays9B9um5pE99J8rKHn7cYH6mDvoowSyciU6Hi7ircoMijZKrc",
  "key31": "2LdM4MXpyqkZNMHWYg7nVub8wNxUqGWxGr1booWiCXuXZV6mHHFEfY5rrdPsTaDCew7bQPHbXSBpQnsUdsb7bYWV",
  "key32": "pCCwgv8WexaC2jFonLLrXAQc2LGy7Ugc981roUJKyrsbLWiHsv4KNmGQCjEDJyVprqAZadqgL3TXAK8KM5NVuDL",
  "key33": "5wEodSKjYLKkRVk5tM1TtqdrfXAmzesKCAwJ4rrVqbLNT1hLhwb7wofbCQCfHNrtT9HLvFphUK9ZwadvDRmY2CU7",
  "key34": "53nJgQrTAi4s9KMfX5Q5q8MkeQFJ9FFYQgCguLgwd9vmDaWkWRZV3hnZWLs1VpFyTVPNVUiDYkw4nMj7umLU56uQ",
  "key35": "5T4MmVWhDsrfedx7vSEVNHy6tMo8LmpL9AJDMFTqr6LfEyEVsXmGtTTUrABf5nW12yzXv7aCxCmtVMcdgtQWNDay",
  "key36": "2Qdc73vft4LwKz4whsFw2thFhBfrxYiDTmmCUV4nFjBt16BGZMaufNPC7qW3N89NnjwuaFBkV5MYqEAJW3wexNVw",
  "key37": "3Hq7nAto96R3DKAzCtBzwCA7Vw2BEFhtwqL5C43CbigBWGZkw2VKSQuxaKVVfoPH2FpQ3h82TH5RarYE92TVs6jN",
  "key38": "3iZ9gioizngiumRMrvcSfaQANUAbkZoL21c7QbNrttQmC6pezhqSdy53esHw5rTQVKtBxdx8pSvdzdivsVJ1RRwM",
  "key39": "vvYV5ZTgkH3D59NeEhuEhAuzEMSWpRXL9EgBx75ciJGRBCEeRvLq1QEcSSW8cyh5Bxaatin9cPCikdzDv9vkPET",
  "key40": "4EMvsxN9fZy65pfEzHP534zHrpHhTZdGmE6wsrs6agrSLGVujgsGA49bfayyhML5qLza1SHqto2dosuEo7anohpE",
  "key41": "3MxN4qFeE43ZxAnMQyBWXfGYh6XfKneJGXta9sYG8XTDZCo2SC3S8cWSQPofNYXraMzJv4KXZgi7KpwqmVzQSc1x",
  "key42": "59vGqPdtuYaicLTPRq8t5JY9YeVYfL9BQSvM7DtV6Yp1SpR2eqQ1qoMSetc4oR884HtjQhao3K46ZiZzd8wp4JNp"
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
