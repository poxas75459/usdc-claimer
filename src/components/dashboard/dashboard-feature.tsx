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
    "2oU3kh7AUY1ZRKEexdnxdCkDEMkQyJYKL18mNHBE7ZdNe5Ud4hAV3AQa4ci8hscR19wGYBhgXQqvUxoCcZ4oiLhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dyccmKHepCcZscCbgKTXU2BEu31mtgMPXbCMUbE1tKT8jrL5vTJLgbuXD57aaNpD8pzmNnWMvadQfu2e4Z7mp1o",
  "key1": "47b1uDYGa25Q6oxTPZJJCfFuhhLKm1JWY3V5TnMMWFjHoWJwGrh974Hj6FAizALK6ifN1ADpMGaesV9XZC7KwmdV",
  "key2": "2hJZN7eQun2hjYKyEg1hoyT5AFdeVknePR6gMEegXv8ZfECjE3ohsXGEWCssji7vrFfX36Z7Gjsu8YJJKHC8w1Zh",
  "key3": "2jDLv7DG7rTTGEN6uVsQH1vxb953eK1d1bRxYTNxCuRqinWNaFt6wfQsEE38LdCM2fE1KbTpdy6nhgmPnFJZ8rVY",
  "key4": "5bk6oBu27TTAzxWxz4X9HaPrdmCkdtkKotRsahvyNq21A8ewddCYr5jdLKKpihcjSvtjNinUKpzz8v5HVtz5hCd1",
  "key5": "21gfgYdMkdEKYK15khMmXV7TmSr5TamdGrFWUiXpDmzEpNvaFLBuri7XZp6GjTYCk8rHbET9X6DvstzP7fNojR9M",
  "key6": "5F6fzmuCh1MzwFaxFvx34EtsR6EPLYGezeXXC1GVgDQxwYQfuRqyjcyL7LF9kufUPe1KgAPBBNsfq55fkXJBUcJp",
  "key7": "3outZrRgxJCaRf4khhviYqTWQzSsvqUbNxArXn5nhD8hfyFmTYxSkV3AvEwC1iujRvFD6VpPLCj8cpewHYBs1xcW",
  "key8": "5YyCJHi2Z4kqhcWBaACFS3CeYrvBeEfLedK6NW3Q2S7aCsU5pCe8DZ9nECSXQdF2zhiMCreU5C7oFjhN3AXc3GgQ",
  "key9": "2xMDrXvf8Lreb2wV6mMnwUsHj54kMUqh8cNXArLiSWjg6iH7wf7esSB9uCGaGgviwD4BWDA9DdWMwaGnRWj1bx1c",
  "key10": "66HweKZknUPrMokao4E48c59dYqh2YWvpL1KUfuwSh6E75SdTLvrR1wBcFT3ULckHJ7vZG7NnZsAVUroXCrUNnb3",
  "key11": "NFuZ9kpaT4TkJeTRcwKR3d726VTcRaJ9pm6J5wSjCrnn8xZVQVaJZQvuhKS83Q6TEm8tRfuMX1NU3XcnXPhfUWB",
  "key12": "5XBeY95EgfHF6LN425BRirebVLENkKRMWbgtY2CbTonqhCWYrWVLBSu2HPCj3TcK1yPoTJ93sJMJwZqLvMd3XRmz",
  "key13": "2yPqHjfCTwpmuPj2dVCVhFVojenLvJeoro1konYRokcmX5SjzaCrjLoGPBqyL4y2PyE7xqLfm8QGQZFbW1rg17BB",
  "key14": "36pZJM6Hab85bRJ8Y4LE1TM2ryo8Ggh7cJczXaiHzXuUYvSKehqZPSHC64J9nqR4YeiQyYin15rW9D4eT7xviJtj",
  "key15": "2wb7CGtu9GM4ZZbrJ5LbJy7qxyB4LwjF9ghu2xV4G5KYkUeD6LGaCd5SsQxBQ6K1RvCe2oBjG8cGLitBTrnwGNDc",
  "key16": "NJ5mz96iftWRxBWwri5tiZczRN9ncw4vpTTY6Bf3KPa5gEq4Mdc6G4CauKHfVE9Y1pbdaP683uDCvwDY9EjnKDR",
  "key17": "4H3v5dqDTkEFyY84y3M6bqc8P84iKfXK2H8avmVn7CSLv4zqkdYSiKHtwcUKVEpicrehzyaNyikHw8ktF1wxfLEX",
  "key18": "2tL5nP1mFArbPoFLmbqYNUbzHo3BzdoLSR8VcxX8wqfhppFtabhzXfcFbdjVxhbimFYfxuCAiH3Xq2w2o9PPrCJE",
  "key19": "62CF8vGW78A5jzF9mTFoFLdVKq5icQCrvRjZHxXYDmB4Bf1r3d92arpyoBJ8Y6Dx1RjUKTf39bzB3eiw1EWZPZAj",
  "key20": "2RDKnbho42kAoAza1Py7sHE7JyJLqRMoyCMZ3iKbBKQCXWHpynq1VMEkyKLJhrYi4L9cFNJuAqPuEXd5VJkiB1mS",
  "key21": "6wLntWregjEDqA34ru2WGdpmmNqmynrHCLLmxpWrJYCgi79H4qRdpzapUVz2eD83GFg6WDpb2aznwbDJRzm5Jgr",
  "key22": "2J3Asx8UcgXr7giWDHbto4kbwVsXwmn4fiDQBcMbWysfoR61XGRdLmFGd7B5uj7tF2NQ3a5sTQWuFACApk3gSCVs",
  "key23": "GQ6vbYJept3C2NP8pjLtDTcySahrYDgEEixtqo8vaMCRXrSCKhGP2EJ28ZyVzYo74Fr6qJN2SLc7TN5Cij7cB7z",
  "key24": "5kBNed32RWhfM6VZyf3A4NZRAZbLY8YZuxVRDVvCsWdLB1ZU1j5z1neA2hjCDKNZpdUEhZbyZKxJMm2fB2gs34ky",
  "key25": "4R1osddhQsSomRjXF9NhGiWaBFkJWF8a4hYKrnvuN7uv2UcfHZMRfFFyQFpNPhyigqSnNHTcQbpEabBtp4CtDiYQ",
  "key26": "23ggHYJ3jZKbN7rYmPpV6S5cNuoUCtFveGSAnatsw15Pcoaw89jGXhTS43mU38nPLsoKZaBGSgMoy4czymMSjczF",
  "key27": "52hnEctbDtDskJ3WnZjtccqob7dR8cYpgoTTM6cC8ebVaWYv8VaWUEqKRgXnqGF5AhRi2WE3qAJkLP46twpdeS9i",
  "key28": "2R9poUf8cYHcUhzGUgiSW4AK62hNJXFPgzYKjJqoV7rhK2LAFzZy56L2hH6HEH4RWoauRdC6FXuin6xz6GNiXjPq",
  "key29": "3QeJXBjKesE9Y8m68GYWdwQRjAx5aM1sUfo9CGaqbwGfQvJQSSsKftzfpuh2dysNp3MPPSBPHXA38ZPiHtiW9yXn",
  "key30": "5jRbU3i8Q9FN2dCLhsWwWmfTze8RLE4ut342oEze2axjg4RsZsnDXL3SxcWcCpJeeAQMPCGUXoQLsHaywZVdutrQ",
  "key31": "4a9Le32p4qZZe8MKrYqAwZJH2AEEGsoQU4kFGBp9jEJyEf6CPbpzojZVeQLzvZ9Q6fZxyXEN8bL9QqXLTknsMJLR",
  "key32": "8GUM6vYWF8KcpAyRSvbfpKCEb3QmoxqH1ihtF2YMnFjxpWK1HzysEh2usySVoRukJeYiiyieyR6yzGVM3H3pGH9",
  "key33": "dukxrRVcyZ5xDyrz1QMtbH9oTKZgnpPXo1AsiKNnQnVMVQ98epBq9FkMcdx1bQ5eqiyfL6o5wWqE2McZJ3ot1aM",
  "key34": "2eQt9QmKLAW6q6DBNQQpPmunuSibU3rsvJFUtkEeAogLMczHNEPmk8wa6aKvV5Sw1QbhCbTu2CBJjyNkMnKA9h2u",
  "key35": "sUKM6B283gTxQmagaJXDm4sUM6aBjZ53Su3rSZkaWdXuM2ziVb1CUN9dcEysYzZRz8oiNwtdEXWVf4c9zQYrynE",
  "key36": "8nnjyk4Zi8XT66nHJ68vyBRGRCbvpLx2DyDPiZMU1s2bEDu3vb7Eg4pDQ9EcQgQy6KGPQPmNAxqQxmJUCqf3tBX",
  "key37": "2mYtGjLegqBSYKjeoyhC6QoUtj9b8rdP8JLvhud5NxDGHd33w787dHDKvXud28jLhrq5H7Vo2knehr5jzULJBhg7",
  "key38": "5eJnvDSczt6sL5hZmBAaP83bYFApi7VvoLsdrYTVeVTARyEw9xzw7wRJgdLyjMAL2yW4jG3mWRAAsJQK8BhPKJRS",
  "key39": "5Uuo5zcpYmJK5yiWiCkQSG1afoRDukBEb6A6q5TGqRVwNNf7cDeVn5c3LWjyaJ9G2XKaY1JmjVMzquy4WXQLZiii"
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
