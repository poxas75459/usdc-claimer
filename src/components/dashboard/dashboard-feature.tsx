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
    "3oNr5D3pJmYNXk8BVk9cZ6APQ4bBXnTUMeN1mAcefH4BAkmHMvXjmLdRLv3BQRLhveanjFZUgejtsk3jUaXy2zpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJZn2xXPLBLTXMLBaeKKrsH8pBHy1xvwm4eg9ZNXfvecrXAL4SozZZaotAC1QYy8Y68efmgA366YMPN2HDR4esH",
  "key1": "42MwNnNrBhLyTiGiA3xvG3KVKxFw1JzaseABCZHMuhCY8GaovBHVzMsbYoZpWvDDjiEW68EZEghNTPpbEAepNasz",
  "key2": "4UsimtXpZrPpDpMFKB24ZVsiz7HyBL96m6Na7cBZxSqdh9FGWZ5gXRTJ43b3oBJy2uKnPx81Ww1ua1E5e6AKmRYj",
  "key3": "5J1yTSKAZKNFucDJhkJ5fXQKRrZxNkKRfdnLH1MZ3aywzPzkYAuPNxXonzrRqqXvZCJ9niLhcJocLk2cipq91bQ3",
  "key4": "2ejT1ThTZKPstZwnUHinGTWK6wmywELfVrcLu8qpjw5Qo6xFh1XU25rqzs2HUZGYyGFGBBHq8nqPGbRQgRmnc8sS",
  "key5": "59tqCnUpd397Le9YHSpRNkrszEnUGeAkRCCpwcDpksS7hD2Ne5BFJMLi1rDQBGEAMzbAmrMpFsnbSZd5FYvwLNZA",
  "key6": "3p2KqGW3BibpaznzxnSHkWu3eRifzurJrcLTqoUmrvGTWaaUtngcm1neud9E7k1oCoEsugHMkDcy6QPYKTEBGFB",
  "key7": "1rqALbfDWiBN2G9pAqARAnUPgPUgAK8cDrShaVBTq4Evqk72KfiCBoomuCva59suQAmAPuHGGGdutoEprzVuyKV",
  "key8": "5g1RVoBpubRs2Du7WQm3kBZ6gvkjqfg74Yz91gFYydNZ65wvhamsVLmQrgGJcjvJq9BpYrvcsp3ZqTsLVBvKjBD2",
  "key9": "5RiASQbRahDXT7LEr45bZ9KdW6JvFKJJm6cNcU8cvfD1r7mSFQjifqGQfzTc7q7QhFmpi2vVwgiWa9sWWU9R7Tqa",
  "key10": "25hzuvpzctmENuKN11UckcBj967yMjdCi5pYNAaTjGmMmueXY55Vbe8V2YPKWgGbhSiazrnxaYtVCLmc2goEaU5L",
  "key11": "2hZsR3Cqr27xEZunS2vRXHDNAkLuuHush6tqtFNbA87X6eH5keGRusSU9kBnZGwRQpw3uP5BxVxsMdfrKm2LUtvn",
  "key12": "LFgTncoDekFbYchsbppKBR8cjn6pAXuSdi9PjCbfmunaBekxtVn5q6wutRgbqx3E9Va6Nq7ciKH1QRr3rLUCAnB",
  "key13": "2vRJBPXGKn82rSXivEzSjo7KAtPQk9chfWNQoC1mAXXyERMTgNnmXrjjEDepsCFDRzBTL7Gxp5qzmV2b7eyrbBE1",
  "key14": "51SHtb6gC2mXXXZqF5NUqMxbkrTzy6NN5VHLwbCLSqmwbuhYm9DvoKAWgQsNg5HZfrkiSTrNL5D1bPSs18ucrZK3",
  "key15": "3CwS3RDRgoN9J5QYgt9WNv2jXstVTUZbaCEFox8NwT2GDPsoSY6kiMxY6gg4c1DqvCUAJLm9kPsbKsPKuQWkmDpq",
  "key16": "54Mg4T5bgfwKiGB6f44RDp9NN8hDsE1tyapm21ySGTFyuaph1Rp2JJ1rkRb14iTptLW7gQFrUwf7MEsY1eh8Vv7y",
  "key17": "5WHMo3XCVmt2pT4ZCgpEo4iQhpQ4yrNGuqFPY1zn6j61qGaQoDcjDah3a4aUgFuR4gygVbcJ9Mg5YpYLxbywBA4z",
  "key18": "5GeKdqVyfw1h5bUTm1vcdCXiTX1JbVWb2BXaUYLjLSUyvSNwDpkQbp5NBMooYpbMKS4o9KM2dBqW2xst3FZov2Hu",
  "key19": "2f8nZNv4CDz7HDhkoy2qrkFQLiFQDHS28hkdqYWKpJb7hywtHEHKqmsW6cFiHFHo7EUZbWNVk315rp4sNBLkLCYC",
  "key20": "31R8d5ASDegcZwqAwbfs5DnYyAwFNcsayyRshgqUW6VLYQknM46BW2jEzvmQp1LGGcMuMGF8797sa3EhG8G8EAT6",
  "key21": "bippPPTqJ9BXdQ9KKVXbvM3SDfapvJcuguaK5Tn4D1KtUKPcKz4ysKGrLiP8555oxQUe9p7gub1xEv1PgQr7ohJ",
  "key22": "37VNNNJiJ356ojRvyVgiuoJsStgtSDVjupGkTS75JmouzW4hitm42WWjpgoKntheeygYGgqkX1rtJoV4PWpA5BFm",
  "key23": "2oSyyyAm1TmjfKP7KCCmUwwwvYdRAnULJcV9MdzKS3FBkqbjonDbEx46scdfuKbDMVG4qth5zrMopx6oVetXT2yX",
  "key24": "548JoPgYhuuvvNd4iMCZNkaUn1m7LyYjdv4bMwBHoyB91QULXTVWQZ69uTqgf26FBYnseAxnazYekJ9FaDV5z7S3",
  "key25": "3BwqS2oohTkVaN1xka5VnzZxg9pksuQRoT3w8EoF4UjfCBgafnAPyH7cDv9b6dR6YrWgQQ55NgF3Kzs9b582Rbm4",
  "key26": "3Amx1YHMBzwpYuASNKFxTS1SZnCG6M7aU81mWWAUhA7f6gDMbt5LxUdEv2BR9dQW8jsPXjvhz6G5YLYKmxPREqqf",
  "key27": "2wX9nEmsz3xfbjB4nG8uXCEHigwTcgh9YCDR879hLprAmcz6CQfi3SkVU6caWYZnbWR36K2eyic8ooo2bTLHDdwL",
  "key28": "2ctD3Ei46AF9pbNqkqh7Za2np8YhtZwGm9J8k1Ag924bP7DxHWKq72eXgJK38ckakaYkB5ZwZcv6UXCgymgHWqNf",
  "key29": "362gSZ3nJSW4iaPBPdDECLAfWVkBvLrkuhXZoXXg818MsxJQt3aGGEMk5PzX7PrgzH3Y9FrEwaXvzLgEniyWSesb",
  "key30": "R3juMWqkBBSEeVHT6mXa8knNnJBCzXhkyToSzA1naEzXQDPJYLJbW8MPALqHRGXsu5JbER25LzncR7bkxK4b3ot",
  "key31": "5sGEzFfK9VcVGegqdz9Wip5DomseWfUrjEMHbWeQFPK5dLEaoDo5AsTjm2DmLC2jwKsnQzhkbUGsLGeGBDM6RsLg",
  "key32": "3qKv8Fs1Lqe89PGovuFhi7YnDZMWSQoJujkHr1uMvnh1cRWpLR39sE9UX7nPBVDWTPC3fwYsAxk8Uu2aMEdzespY",
  "key33": "2QRKgFT7YLucdFzwF7698ZcHa5bSTL5nbaxGVfmPw7cXSzLUMdMUNJUAmfMLfyiCA1iufCKG9zYbNQn1m4PqBZ4k",
  "key34": "4rw1e6DFbD2mgCK316rEf4Pv1sD9aUXMkdDCUXVqCTy3QvfKQWmVUV7fkqssqKgGrMdmhkbiqDK4cRQacQyjxZwE",
  "key35": "4htpyExfZCcwEUEzebu6H57s5Gjkhrsbsx78BDW9Zj6FBxiy2QKTTzAHSTVkVvHXoTWxmHo4iey6c34PqiCN6TSf",
  "key36": "D3bpm8PBcevUqyYEogh4DZE2iZNDmZGgohR8E4mC7Mf1pCoxGbTQbXVovbfRvxVCF9LnRmfnDXMHni7hkpep5Za",
  "key37": "3Wer3ihLv6vzRK7u7xpH8P8NKhMnQ8FZZ2wrFBjGswWmCJfr5vhaKdm5r2xSUJa1Aaqn6nHFjQc7KYzxgsybap9G",
  "key38": "5Cpt4SHZr3ViX993dnn1GQYpMYkWw2ZVLECA1Jcu5FZ4QRdGxb1c9JMoEa7iBimhfcCo6iMQwWEsohLGCRpo9jTc",
  "key39": "3WcgeBPEiEFo98YAL5BgZmNLKiJwmUbwSNxAV3QfX77D3mqzqhomrTjj8mKmU5ZAwQUWbefT5fPfMphQNVBAvcAN",
  "key40": "hGedp41G6m4inGTw7NguDS1cprLHNQdYCJc34ZLXWm79r8hMqtfTAc7hSKuEV3gAE2mmNzsdDaybkvoHTze6MTj",
  "key41": "42hvJfaB6YawfyKnftCwNChsQmy2t7hSS6Y38fpowAzLkZ72PCiMJeC4Agu2AS9czmSyYGAruJkDL68gV2JTe5Yr",
  "key42": "3fRB17uRF3EjLvQd1BQrP7g6dxq3FKyNvBWRB88rRyD8wvs2hjoAL5VuSUSE3sP9kZhK6ngbtFpWam2gkLSWVZG2",
  "key43": "2N2zLBmeXpYLuzv1nS1fCuQ7mPrX3kQv1efhwa2mQ7StjCCMDeWEJeoBvxAaZdEMbwRsg5hUbsYE1DkhaZ951YjG",
  "key44": "1ZaqECt5GEFybLwsxmf3BiZHMve1Sk4ma3WDGbHs2DiFNzMZnYqS6MQ7rAJquM6xVUNz2K5BJTmdayGKr2k2xyb",
  "key45": "7f8PcUbu4zUPTDZzufEYVLf6ZyvYrsECYmMYjSweZpWne9sEUEnixZ4nKMLJtWNAHUCMJSsGfZEGhkrjJKnwTgc",
  "key46": "3hQj59zz4fsaxrCVQwqU9pYSydQWGTna8MGR44HuZnT3yV7YefPbVc679BDC6CNueDTwkjM7FjT3sN5iSomuBBgG",
  "key47": "5t8AXPbfuW2Cp2nrR7pC2yxM441z3e7SWUQTBvckfvs7qWxmfxtHyB2evz7dkpUKL3Z74qnfE6g3puu1C3ZaSPyr",
  "key48": "nZKshijHMehjd8xf4ZYuiSSakdBaCsRAvvzRrDh5ibhUNNKqG1vNgwrZWBitBmC3wsJTnwC8YDaueCWeWt9NZo6",
  "key49": "46K1wrfuzDMngj4SbPFuUjEGB6VL7UDrUzQDGZ67j1kxZ1suaScbn6iLNitxLYAv5tmZCj5ArnwJz846gh7ToXj1"
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
