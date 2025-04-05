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
    "3BKdae39mpt7uEXCPvvDe7JcMbq9QYX7y7tmsWQn4MHs6JDx64Hmen5UMudMhjK487SWsTny4mUJQjEMnGpYeHcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66j6vxseUJZTwBuC82ynhmUmxmbnAKzdqo1bQrsCytXkFQXMJcYwZpmYskcZfWJkHNjf6yKvMSSu37aED2Vm8PVR",
  "key1": "4NCtRi9CSrotsehZfqjBWZD6NLfuosB387fe7KeSXa495P5utG277ERHBW2v6eh2sJtzfhPqhEtgsQcnPkdwwGpz",
  "key2": "5NdEU7i4db2C1p9ryVwy54hdxew1WBNjqbtzsa2RcGRwUBcG515bBSee4U1Aar7UdzUeiLpDCGqYLUuq8UimkQ1x",
  "key3": "47BxWAK4MwPVR1hEHLj4YmWRJarcUY7a2mGpspeSeGqs6F6r4QcPisq4P16fs5mGioYPmgwToqjMqqwG5pYjHHGV",
  "key4": "3TdQFRn6hWteQAM5ftP2VwPp4cEN3ccRJf4U8jtxcFRbieKg6uCeFPaxo3FCJupmLqR9zrVRc1fxFWZCGPS82idi",
  "key5": "2o8uqTAzVMmpHr9ZjJ3qAMHt3DDLPKJq5CESAZo3c4nx4enMvLW39ECHy72sZKCdRSZVGo1w7mg9S4fMWfSbhnyS",
  "key6": "5kBqtYJYsHw14UEvgmRVoCzeZdHwynRjBmBFnTvc177wWru8LfGarL3JNEVbaZ7Ksv3gtFtXYNJH2zVE68XBWaKm",
  "key7": "3iYHkRbxFg1oSp8gCrKMExAvgjaaLqaCg1AMMHXUkSBAfP2iwgECqKdokm5KykzBNmdSF7XCy4LQmsD8Y8YyzcRR",
  "key8": "4mP7XqB4aJKQAB1iAAfnijuExGZ9a298vk4Z3GTHzGi8R7fTGFi2xveiUQkc3vyLjaDMShbnaYpzCaQJCWGh6VQx",
  "key9": "2rvm5GQggNmLzeaibo83tKPTQ1nFN6JWudmQCuVnSRwXMUcUL5f25Zm25emCN2NvMPSrdCAgY1vUdsMTJWCUXyXH",
  "key10": "3kWrLuazTTRyMX3ehHoVTfz6uzS5xpv787kcM6aoGnrmDpVfAL37F6U1aTwP1Egi6Hwm3vAYQR9uF5RbwBT5PTnA",
  "key11": "2GiBkCgWToTGE9s4PP3VSzWw5UdHrwCgLBQNDfjrKPYPDyB4i7H3uQxrgfsC7xq18VBT3vozxJBoUbx3Fo2pFPUJ",
  "key12": "bQU58bS69Y5aw4HRiVJTc9Vz9fnB566vPdK1LocEF58SsfwdrAuV8U1ia4gmvuxyRN3xDMVLDDxtCdV66qDvgg3",
  "key13": "4Hn72cEvA2gudkDG9HVrYJa5x2MKT2MUEp2o5dhK57YGiz1piqj2zWDnLDtXqrwaTtER5416MWYWV8tVmR7tTDpi",
  "key14": "z3rvywBG1j4g13JxQPyRqYL6XYAUSzFHCbWbzgktQZnn6Z4veAys98B6H4eyFSC6uKmExdPJNjHprFXqKbUgcQX",
  "key15": "2X6fciQk9u8ys2yB4xs13sEQTrTgt4yP4Ae51m6XHC8BiXcfs25KD2HHXuMEhkEAU8eRCiDXjNFF9qiQZWXeyBJM",
  "key16": "GY1TvhUdAn8srGLhTyEF9xtf6sVt4nGTbTzYDE7J2X49p8iT5Q4jxtqMvnTBZ6ULiiyYvgB4mkvukkuMyQpkHCE",
  "key17": "4x1qEQCZCDdiJ2vdgpB6zjMCyGmw4xmkhW9urrRaWjzkxJDPTszexjCKCy1CN8TaBbrXh2fAUXdgJV33ermoDyR2",
  "key18": "kSwxdxvQwBzJH74J4BwzbcWnZ78D5HjvH2y5yFH1AQGjRmc3oJDD9Dt9dWrCvRkhy2xFYKWrJqQUDpqZ5aZuUDJ",
  "key19": "APLxfpdhcghygCbbmxQ7XCeLF9TQA3c7TZyNSYpPnRRBWAWZZhWYUMwYJMPVRZWFRFp9XP6Dd2BYfUbK78JuGDf",
  "key20": "5VCyFytigukRXudinGxmFvp8eRSDC7v1fqB25Gm4v8fKwNphCx6QKVbHw9VuYrt8hbkpRZyUN78ATzJeo4wzf494",
  "key21": "39KN424dVzuJimYXKkNFqghdvzbbRevrurRkGak8CrBBLqf2hPipqVxyeCpBUkLVXGDfs8ZzqiWQEKJSy6rEMDGh",
  "key22": "31h7b1uqyNfDeYGiAXS93TRsy6Nkrq6wsnJ1mszLomF7PUqfZg2E6MeUS5LVeuXesqmjAurTcBaowrkdGt1NBSgD",
  "key23": "2MRtAMm1fjxAbbmDPiQ2n3rk9xGXM4q5uYDgjLrUjcPJXGzHVyzzEFQXWToJugAmzuRcSuUN4QDBH114rSwRTd84",
  "key24": "3PRxzCAubwR8GhD9VqdY3A9SxX3Ae3vpYpeNVt4ekjds7np9ptNDgMiVDbzt4XniucCLNdMajeRMBEZgPaaDFbyq",
  "key25": "438hQuCe4f951HQ4C9fNc7GVyERLmQtgMeee8L51M2XvHUBvE2Sn3F2D343wtCS7yzUmzPNzJW9yfzAiiajrW8GW",
  "key26": "5yz2f29rooPo1PsEhgKoTeqTejArZ2sGyJBErju2Joj7bpTeWMKisfwtccW9ybKm9o2P5wDjhScugphuofNtb4pC",
  "key27": "5ggHydFxgpo5VJfAunK16d568b4skcfuHVP3CiUtbhtEVYJBQSk9SurG9E8WE2rsv6AB6GdJtzsyPA5wpQYpYcU7",
  "key28": "3M2qTzHBfyL5VeT1DMK2aRFeBHHryDTAUpyGM8xrM4SeQdwQs9RpM35F2Q9e3KSUtiFEbgCETW2oWAAyk1VhTqUJ",
  "key29": "5vWUwZ4Pxa4JoaDLs66TdjFL4vN2rmjqZy6xcdCkF3jv7vWpbnGCYNvxe3d6AnGaGpfh4mSTofRJdM8dcFz6woq8",
  "key30": "2AJynbYrJDU5zHRzmqrnzi4fNZBtAtPFkBmaQcCB7xLcTWDKQVx6aoVBmg4rjsVRLdh4nqM5xRw1XeP1kiiQrV5J",
  "key31": "5joZiep66Qzc47QinAiePd2Eu1oSrAeDtA6N4pYpHN7Y1pgNcYKsLdihgqYkUWV1HDLa2KjD6AB1CiVsJttvYesZ",
  "key32": "2CttW9wBj34eS5fKpXcMCV3iKMKYnvCZzBNE8XRvp5ct1Ltqm6ABJMP1kTV2MNtK9BjUtnoZVbwWcCTc1JACpizk",
  "key33": "5dWDfendYewu5wNrkcoYjjTdhtZRfttgWQWDRuzwvi24kYjgUkfbsjCkKo8sfhP3Q3HFn6EN6KKjnvVhu48qfTEi",
  "key34": "23gYvTK9sf6W7MFyJpxBzEWm4RGHcyQkci1JwZcB3mR1tAoAijHMiMfEXuFwmbAgt46NrFBbe6RatYjVBe3qZbCh",
  "key35": "3LfJ8uLd98f7CGMSR5rqeEcQcfm9Lokm9bm11tG7Lmb29DHLPPApddNKNMiboVej22haxh1keEh8L4ftDVCwyZai",
  "key36": "RhZGjrfMtcK6QM6enH1B62XYNZdV6ogbTSDe6Zfm7YH9Gq7QvCrQZ7TbMspVk6s8SosK5wdcbymDtypLt2c6HXj",
  "key37": "2yHGr7d1TPy4cj17Xs8oQ45ZCjmuSTCrmCkx5MTDPZ66WzZrnAajTfr8cG21LJwdPPVkE6zDueft4L1DhHyJ88Qw",
  "key38": "3wZ9oGD8731pHffU3afF5kmTVo5KuvbgXe2Tqr9Ca7qbi14Aa93aPB9f4bEhnk3uR5FkbCrJSVfiWf1yNr55q3Uh",
  "key39": "34mVPyuyK4amXMgJjNwoAPyreA2WJc9geu8RHztCJQ78tKvfUHRs3m1QJmCrXS9sUpaLECE4CV8AsRE6dyvksFQo",
  "key40": "3w4droCbsLyFsnBhuh2LmHenF2stQ6uqnKA8Dhq5tKet5gq92Q2cMotHeSgUU99QmPVP9StW2ucy7AVZTrmDfA2i",
  "key41": "4JTW2WuECAJsHvLUcf6oaxVdRU9Z9miWRtAyrEQXymebHGDCDfXq4tKLDQezimb5SbsbX4H2diLuxXLepBUNkKax",
  "key42": "4fHzxUk7WAwVFqL8w2FQi4F2vX7aBopk5bY2KQez1XWtU1PVUpiyXwBsaVwi4E5AzhFGUzjrJJeH3zFA4Etz6nKb",
  "key43": "2FPRcAwDAHdUP5n4B1VYfErjpY5TeQsyZc7hgTz8tMcYWjFXGzPTWerzmRGUopkADScEPacAcUUDpx1NnUJPt9ky",
  "key44": "4jjYsqf4iac4EDTvkbnFhbaEcdQkJm9Gz4ZfYyDmY9cEobDKNAdUMzYftEHbVDXxBkCis219FTkSyqKwy4gM5j91",
  "key45": "XBxyQ2U8H4eY6UQvjKsW5UoxRizKS8b64S3bVjrN7krvcEsfFLK5d8z6gjocrhnRFFjKegG4KmELMeQ6HieQpZe",
  "key46": "2cPxetY3gUgyJCJji3CD2AjEWyJhw7Q3nAUCxQHDBFsaA4PnaouYz7zW33wKMepRBz4CjGj8t4KJN82VFTABXmXH",
  "key47": "5m5rQNL1HcJhZqCj61cT4ZAPByty3s5Qers6dVZ5S9ZxehkpNB59eHMVzA69fxva4X4QMZZep3HMcyr2DoPDaUud"
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
