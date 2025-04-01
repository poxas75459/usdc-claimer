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
    "5BzTTNNVzM3i6j7c482dyF28Z11izXqy7EHSnYxMYKU8xWJDZ8evjssEmqE7cvchD4VeFUoY1LGPFeR6juKZKnyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e8RkHTsCz6Nh341UXjC3sSx82it9PNwaFjtV35SuUhV3pg7Q5RqvNYE3w4sgRKqzFEepAoTzRaTvHGruev65NuX",
  "key1": "5dPs1i1pZGznGLArQhrRSYuw1CtAW76VWzBpgkVL5GgmcBqBTkYi61LgqtQRDKuw9khcJnS2WmzCzeJ4FtmU58aY",
  "key2": "4A8buJrzRDyBGqZ2NgeQASaeMgU3A8z9faJH3QnW3QzrmBJnVthzHBjoc7H7TQTVakW1nxDTyUWrVyqXyC6R8Tid",
  "key3": "4Zuf75Mb8dpuQPXhrEAaYhVxeMcS6RVWkgRkHbcrDPjZtb9VX3ADE7axTq2BVfxD4cWzmwvcPkc1pPLQ9V8K39to",
  "key4": "3ByYuMLXbzBrGk5xxMqGA5eEgexu5LMYy87V1wCayK5a9D98aT4V3Vf8xp2fDJg6x9oAWbemQ2Ttmbdh5sJ2AadE",
  "key5": "2HCuX1ksB6EZADkC4VQJ2dZMeTKektS1K4XJtNdWxgZzEvBGQjCFGbpRwmtWrhCTmgE5f4byoRndEHFTNQ7bU8QA",
  "key6": "4zefzkVSEiicL8gXcVKw84PjmQyX2V28CEnzpNZ9YqzBsBBejZ36EWEFfbCavRS71bhSncVeWCzEngJTyMAEtP73",
  "key7": "4Jv4rgohPzVL8UbuRFirTmKjf3sTZgBeh3e3pMpQwoY2TdEupE4d9b9ptEXLonCWrNSMB3vb1Z25iGKZn7V1PBRN",
  "key8": "54ErXt6nTL6LyDJyFLHPdexGYTPcLYD9fTB4GVgwdnozYnuvT9TeXvSjaY8rnx4GuNoiPEYSh8xf4AjU7ZpDJaNk",
  "key9": "3AoYA7mQEUkzqB8AeNeMzSBZ452rKNkWmnomppuo5sxXxJYAqvbs3VKB5sgBYWf18JufoP5i98ZwWC7qytdUyt8w",
  "key10": "31sDV1Tmv73DBiihJKA2VoAsxrg9Ru6mYsgvh6sQ44gpPFvk2pcA8xaJGUQG2Wqc83kok3EyqaJTFGRxPmjKoEta",
  "key11": "4eRkgA9nAcvbs1i31utiH5P3mvNSjDdg3tec9B53kWktmRxf3A2jLTL5RzHBAufr6uQ1uJpswpfXe7FH5w8pJfiM",
  "key12": "3vXGzFzQniRY8WX7Sba5erpKrRdBX2iBWrbJ1xErvW3mmYri8UCAja7LmKs3jFG2EhpEm2Msp2TFNfYgsKxc8trf",
  "key13": "5FmNGhVBsjdumEYZ9mEDF8XXpx225JvGk9NnRDgxc1TydfgeAzX32waAi1SHN3Mo3NafcEnJaAnwrJtYy5G2jCid",
  "key14": "fY5YXtX1qNRE5b2zD3GFu94g9DfNWsQyfUZKtK9PY2k2httrsQnBKH1JSrCDcKLaTPEsKXGcPMMsr9TFNxHveEf",
  "key15": "2nEwxBkT63qGAh8z5t7FCfZvaqQgXwGd9WGee851p8Y8sbjprv1cgUJuu4c9rCM8jf17Yt5adW64QorJn2dnKiLF",
  "key16": "64AGKcZuuF2svS138pngaABm4ej8usqMvoya2CinfqzMr8Nk7xUtF6UacUF9uQxTjJX2maQWPbsqN9gHiwpMMbKs",
  "key17": "656gySBofhfeBgWccMTUKSLUnbY3M9y8winygAeqihzwfKkJTFibFJmbVtBrzK6dcaVRGUPiCrmrvMrAhNFLVHQU",
  "key18": "3UBVxtrKyYZQunDuK6mybZYnPsqjwBGUHrGNnHhAY9chQUwiVX2erjZhVqhG1xhwdxUi1EpXw1jZg3rgCbqmKjCb",
  "key19": "3AvHbxxoLYwcBfgm3C7YnFhiQzzLnHA7pGwh43kYRTkhsfYWi11x6gUz5PysqjpyDNfpCekUhP6J6cNzbMY6L2ic",
  "key20": "5bkbp6QQ7GFfqE1AML3hraamEwRBurtDpHMsMzrA52rxZwGdXiTFz9VvQ3oUUDJeb3QbgHGP4pSVYV6F5QmHPCVx",
  "key21": "3DwVaHokZXkb3cjDtRT7KPYq8kz5z2oUbGCwMseEcdTM8Xoyh1oBtaWx9UcdYL53EtzZX8aGUSmpTJQRguyLyG1e",
  "key22": "4ok8mL7Z7LUt7Ffs5iBq9qkPE8XaRFy7xkCc9pUc2noadKXmQ4vmPTL5VQRnay8teLajXAywH9KVxCzqvFQb1Urh",
  "key23": "4bpcVoEoiseZVCAKW8HNXNfZ54epLNV5bZNBs8jove3i2yQ4mey2SVJ4anwkv6P87haWvNx6VGdp5eMJpnYqn5zJ",
  "key24": "gxMCTz9xfK2s9sxNdHPpRQCvTxMhNcMRjUyRmvyeUyrXtS2KJqgnLxV2iS4bbQjJmqfrKuX7oK9MQCvk25Ey2xT",
  "key25": "3zfDzcNL5zqb1Vq2nT3YY84zkC1CwMrWrFvKJXwZPXAANDZEuWpmhu8HHMYfx77iM4tSfwBfrUDhZyHpxHMhDofz",
  "key26": "3WtFjtfK4bCuWrQAAYSe4nNLcEc44dJcr6gY6ZGXEGNDQUqZNFusk34FtbJkKRfWqf5Es7cc6jW62DVJpWyMeX8c",
  "key27": "xSjTH4w8UzugurXT7xQ1nzUHg37GeYB1kMQpZcKMzeWKdQ5V9xZmWypAy5CLXmUegs1d25kNLDEqFss2MMEuztm",
  "key28": "3nQ5ZhiuxWiPKykvGNPSHYKKUyFre4BtvvZ3QmyzJTTnerSbT4qpprtr8mjDNtZ7uV4r9DiEogawXnNBQNWqZ9pH",
  "key29": "2pPdnPQ8yjZx9nfMYgmAgdWH4cCd2gFdLJRw8YeJaFmT3KvuJqRPexnzDPMwLV2egHVPb9a6Bp6dxvNUTCR2VMfU",
  "key30": "4P8yamXFQVHXFyawv1N1Nok67VYGgHPkVLMhWiWYh1K6i7pDxpmqQAfDDxiqBkaaVj2dwk5GreKsbxcZQ8CCb67Q",
  "key31": "5y2LxycbDLLPsmR5mfuhycpT7oJ3kyigmQMsG6bC2JLyggaZFN5fHGTmEs8Lp6dhzD3qfZZHzsUSZzrnCvQSrJoR",
  "key32": "Uw4uvvuMMCqJ8dsDRFfhfHjWKzUSpahXEHFsmZdZ9kiS4bLm8UDbmTfLwUpNpdfGnkWh4yCL4ZHSdAUXtrQAqvW",
  "key33": "2yHa7mU6kTb49kdCEMzvLsjhEacSmK9B7sDq1C1EBUHGuw6Crhr2x6VfyqxQbW65hiSXfg4NeSS5MCgTDowTHS85",
  "key34": "5EKFjr9GGAcsKE6xcJBufUjPRareCC2EuSYvwxo3H8GqsxffG2U7cXH9aZ1MTz91v6P2iP4n8eE4pQ94H1fp18vi",
  "key35": "4NCTqbRpVFgGmEHURArFthqhefwCXLjnWYqbpDwuoPzEpjAbZ6kvJJiqVwsjiZEdNXxxgB27u6PiC32qXPkxwykq",
  "key36": "5421picAwFUgXsWsskVx5JuvdUAF9adLSan43hunrydME1UfGu9vi6G63iVBQKnAwzPzBXthzenakUQyhwDwNMek",
  "key37": "4k1cBquv4J33DGha2Go61sYvbyoTe9Bnjdadj3kL5E6ckQaWBJSDuSeF4C9L4uVfDTxnahiGUskWLTVLBHrFhFRa",
  "key38": "5bcyQf7QEZN6RPwUvxCCyQonATCgFun2Wnb89X36c28njqxdFGkCT6oBCkHmh2cKZw42Q9kQ9Vti4tfaCo3ot4dK",
  "key39": "2BhuPJZSex7E9bN4wspbMi6hkdjc5KUfo7FZ2xThYbwR9F47tafrmXR2akWRUogLDKfAB2i2wBMm1eNAuFGcUTP8",
  "key40": "3pC9GhParRXHkohHNkwR9GEeN52F4i7HtK1yrmncoatJjLDP2KTijoiynXsZqb433tgJMTqNuehym5AjB1gQX4Km",
  "key41": "53W8TqkQA3sJkABzv82i6iozSYhqTuJkrS5tngu6fgykB84k6drw7ioA4n8nEgXU2D9XAirRZCCyEKyXMNYfp8AH",
  "key42": "4ivzHczPjUaBaYHncGAhGMxTHLVHCFhD6EZmkPPhiM3QV4TpiBR8XoiksmxXUixJtHapNP6FXcPpiZPf6E3wt7hD"
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
