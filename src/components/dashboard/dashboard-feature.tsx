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
    "3XBVQd7xGbHtU8MbeZcDxB8sH9g6sQAfgfwUdYa2hkDF8Tc37M7gQf7uV6vtF7Mtsb1JxHkuVxXo5WNcBBvrQET7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T9M4TATqyvVkcUYaoMNZ71qWLvrDxxFd6S7czSPVdxeHMn3Bej1bwKwFcTdYJfS1jw6QU27FGTic45xeZf4D7SC",
  "key1": "KzbzZEcxE7jzzrFzN2HbQYW3cVjf2XQmqJKv8tQ81jQJnbvQzxGnoCxvbwETeTttKNTsEuX2mrMAJQJwjkjAqme",
  "key2": "2Bxib13rCY45d8cdTDzQcYcGT9d9EhhcWpR1KryT34UwTEky5Rc6FKxkCi5iQqu1f1vBs2qeL6g7UT2Z3axjrwjt",
  "key3": "3cp9Aqwg2r951TiKGbVLykC6v3boGKC1iFGQEzj8AN1FvMKpLKnD1nojzLmTpBUn8GhTQHpKEgS1hvE8CZJCDW22",
  "key4": "3jMuLofv5M38PsbcBB27taMmNugUQZfPh62zMo2pDDRXyKo85LV1MUMrp1Gdbqxo5f393CiSttKdtaauJZpZQYYZ",
  "key5": "456JQ4sg2YANzkzrX9HHHaLiDZwCY1WShkTWvvBkd3H5SwF8eSCzzVs8MCKDMQTX6TwFg7B1MpL8TWNpRC2jgN47",
  "key6": "Z2NYPNuDmUoLaqnj1LzJWC9t1V6J1F2jC4xdo9dumnwwqruedBjaVx4cbWixayjjVuvRRo7AjkesbCR43dDYsfu",
  "key7": "56V91PjML9Kbt2vbnGRbCpzTVY1WmvMP9wT4Hm7zqLGjxZHJtcnGinEEuLayoVjaRGMsSkn6SkytZerDpwtcGddN",
  "key8": "2H8p9KVzBqgCd7HBCFh9jXr2DaECFSpWLfcAozt1YYuhpUHiX84ybwYQqpdso55ZcaRPvTXcEd9uxA9uiutAVAXr",
  "key9": "2nXvMRaPFu8esdD9SbKJkazjRNiRLqFST8YstqbNYoU2q8k1EjA2kYmcwH4TWY3mkRt3bYezp5QApfzt9HZoCk1y",
  "key10": "5bborAjd66sohmt7nYQpsCXeEJ3k7kVbyKJ7PnDUFNqjj2PkEmDZTKG9tMKusBJ2uqzNBDrd1c9s2QAhZ4A1C7tM",
  "key11": "3AhHthiKASgkyeh1T73ggSzLP1Y6msKcepc3PkXm3zbGEkFxr5nEuZfQED62KwcgQrKqwaCFne162k214RYTt87a",
  "key12": "5J7QF8bTQo15SGEaZ56iziA8nNFaPxzhhmFtzgyZkGqKWsTf64F7uc4RA19bKZEYvM2wwGLy325FvKLLCqpVzn7n",
  "key13": "3hKiE5SbQqJBnfCMbya2mK7GfjuGxDDmLQLi1hGHv8N2uCLXBFNDqFKu3giNvzwRHh1UHHPmMD6DrNwsxbrb7RiU",
  "key14": "48rT9q5YFKRVFJgsAgupZWvhymcT3tqXS145mmHSSkuzZSjukij2BA6FMcpjuc6CpcCaUxtmLMKewhdQZXQdZQ34",
  "key15": "3FxZQ74t7e9iawzWQd8tERxJxYb9KvgmNc1FWRpKjq2EzntfqKJuD8Mr1o3NMVpLoKGXCwvRyujEiZ5efkwxsDkq",
  "key16": "M5uQuvuzrgjXowYC9bVWfP7WVKJVS8hJPRpaZKs6938CSzeYkUwdn1y26z7rs3gbGjuQmLGaZ3UV7PqSNkLGmLp",
  "key17": "5qpHsCP2LWcr69qUZ3LyiTvAbWpJRNWTmTx9F26eFqZfSzNjy7o2eEscvgoZ4YZfegN59S9D1HLbhFmtMkqewQMU",
  "key18": "2pEfFdeMxKxJ52fVk3URk6s5g2wmQLWtDMcca6umE24mfgJaNHaPuoaiSQtMFjkjEuubJZSCLYxxQKqwr9uBdjJp",
  "key19": "gjXsD3yWehoW2uzc5kx16e8AExmEpPxQfhCyj81aiahueBiqhXrCug5eRTrvX1du2ezhbFPpVQmVKJ8j3ctNLRB",
  "key20": "5jsWW8AeYo2EbutgzQeZvwcYupMrFdpfXRZ5J3zWesSZE2qgmvopU5zLqaDkPJCzZXbnfmrmXzq4jK8NL7hnCpw1",
  "key21": "3cBSwqn7hLkU9ukpxzX7PrvNuXXj5s6FupaEUFPXWu7AdtEuNfBmgqU1NC9u7zNt8gC6j6xW31TUepywyU4agfRr",
  "key22": "2CsERwVFSnaxDac4Tr1Wo3S786HJoUVfceWFaBCckbTGKT4Vzg36ZL5kxLg6A8PjgivWeJ5d699PDZjyCzAfrjXT",
  "key23": "ayQJ2j1xQoATs9gu2WH3aniymAgy41jSVWKc5TKjsKb2YxZdvNsmxRxPw3uGWLChMFLRBf6CK9cHt9GLYyyDaow",
  "key24": "93DJveyBcyHXd7gtcSDDCiA2uePAFypDiDxCUDRLWrexQ7J1ackDsnwRkDoyX3hQMh1HATVvjAr2fxFWEnmhxTA",
  "key25": "3y34DsVVSoVBD9mKnAP3PR2H8rMpdSr2DP7C15pFgHxw9E6Cx1kXRx6kUgA5VxnefQoRFHKRRigTfVVDguHuwzby",
  "key26": "2bFoXtQJv58uh6ukwF7REBMaPY5oAo2D8UhHQ5N6wzp5BhFmWzFZGSNu2D1Rj4DRntq6WKfcduQ6H4EPgWHyXmMv",
  "key27": "5kYeM5nkY6YNFHDN6yB524XxhJxFyvzYaTRG2iP8d4uHqU87KWytznYKgdZg792yfd7cyTe3KoBLiDpdioJmfKUk",
  "key28": "2CeHRLA83xTbD3FQcX3YfxdijJ1vksZ1dH8zsM3CxDW4Ebsu4eLg9W3BKzjUUtM2p5oWPJX1aGwi3UJHiBHWNw6N",
  "key29": "49EdP9adyB6hScc1eQjRVGwJfZR1hFXCrLNKozn4knAZtHs8uGFyLgTWpNnj33QDfSoN9wwgpmUE6N1eWhw7GowG",
  "key30": "3hSL8R5wFyoXvwSbL1asg928Ccze6sbN79Pik8uWHRnwSWBEdDDqXSCLbrE3i8KYrJccaVJFfPxQVfrbMeD7rb28",
  "key31": "4zdAvFRsNncLgbpWCbx5g2MRwhCBMd4BjBzudmXRai8mjMazqx1hyHDWaVw3jNK4ZzQMNgzpefQYb5ipeBLVGGPq",
  "key32": "3H8ofy5ywqspXW8G1jGPBbbuSGP5zkzLwYY5keb8j1xgWBZMpjXBWFpXA9rAqD3CJikcJsvrEomVRtwjv2LNF64M",
  "key33": "5V2W465rBnUAymvUsJGrSACznHk8Ko9yiLvWvyuEheFKo21Es335NTcNqKNBHRSJzf1571mABz7WkadXbBkMTmdr",
  "key34": "2qczH3wwmV1ibaH2ryrepi2buuAsfCnqTkoxk4tAcZoAY3jVvetsezQmwBKhhJL7tJ8bAVXEow5VsFsx1Mx1cHoM",
  "key35": "4uBJLSdWsMy9X96wkQkgcTzu9faXLM4iKL9bXoFSSc5AUoy8xo6ipBeC3wcBwkd3igNa7pSGMSHdHeVbLKpt5PEu",
  "key36": "2VSw98f3dRTvf3HqLosr2WnVPM9MUZHw5DfmFsbDKqusSa7Mcx2Nm76b9jJ6vatjfG8np587syT2998zJfmCMEpu",
  "key37": "D8Zr43479h9UcMV672WDQxK1HcgnJGwmsGSWPb2avSa2VUbnHykLri6wnC1gMp2ANNzq4536ot2TWH9c9WUjoqw"
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
