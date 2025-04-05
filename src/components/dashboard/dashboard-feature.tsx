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
    "2dLhDyeB7L5CzLEtUidWLKb9zVFsGeMaUSiqReUAu2jxc3hVEhWJDKaGmbJpGdCcYjh4EtkREonNkkz8kBcL1N2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KKnN4G3zgXpCtEGjdC5WDjMMFN2TXcWu929k4sBMgNw4gvpJyNEvAM2biZL7at12X4eAzFDv1hQsfE5JvJJ3SJV",
  "key1": "29eM1f2mD7qgDGkYTQbZgmrE4oVUxjfjMqV8yCiucZFhKoCfpEHE5G6YAnUSY5Qmyv9R1GZPVsEo1kFTxzcjy8Qg",
  "key2": "hSrcGEfuHUBEUjSx9CUxv1Jhb23no2VqxqoXqZkHoEinXDW11C9CaNU4FCbgD5PBmRXSixLJBU2ifHFPP3gESVh",
  "key3": "4Qk4EoVeErAUTdKFB61H6b4MLjg9JkST3Y3eZ7mwsjs5rhBXTgSiP8jJVWxN5QdjbKuRSNaC6d8mutwJkiqRv6fD",
  "key4": "5DQVX4N379WGPAukGPE4p1aNdaY6hDKrE3nvh5RqFBr37KiS4xi1sXCt8mTsunHtjUgMikVZe8ykpRxA59nPPbha",
  "key5": "2SkukUsxgkvCDccprp9PqSkin8fUzT5pfiiZ57hgKR6xMQ3Fe6QMVZqQBcGt229eJs6myFMSj6D2LKW1hXRabvLV",
  "key6": "3BnYPi65FjYoQxpzFY7uG7nL9v1csuhat8oyX5NjsYmeAMZyjjMG32CmK8DoXsgFeFmVCesEgurHLGNThxYh4S1V",
  "key7": "6AKqzRxMT5CXTixyvfwcz8QXimq9ngEKVKo4ic6CfY6yyo6t2NUfjL9KMBvxSjMMQdnQW6XgSTVCp7UL8q8fne4",
  "key8": "X6HmHS6R3mtZnGzr87y2smRMGxUyAjYsFa1tQmTTfDLsxZnbkKezYf7Hvd3tDg32f26R5eqHRY9Zr6NVWx3txfV",
  "key9": "sUE3TZxGBnov5X2XjiFwt5TK1ea8M3M4yPg559XaHCWRyfWxYPZ15H2BU35MEJWaumPmtUWHrii5sRkmX8Rn4Md",
  "key10": "29zpZU45jb7kY8Gonwf4jiPNQZEPahGCCyw5p5FjYg7bTgheDbJ2m1g1MxxbovxHajySb1WA7f4kJk1VSWPokxpy",
  "key11": "2EQ7gRUGqmc43y1Xx72sa3woyaL6ahe5yHwpPcqMfivHM3UzEyoR9tqZmbVaCwtPL2dPNzTMSr8vKEFw7oXUB7GB",
  "key12": "3ViRGryJDsqDe71LjEor72nxhQpYiYgXyFRDYYv9Df3Gb4EvZTuCARk78A16YSQZutkhQbbUKwBzEywTaBUZn4GZ",
  "key13": "5bo6PGYe9WiFzSCcyU1Mqf63CpDQMVFfnVYpmqy1nmvrKZnSAASf4tEQtPMW7BzQCFLUer1CEQtXMHDxuTMDY8Fb",
  "key14": "41q2m8Ctr4JirSEYKiKFhtavk4wWWfqhUBzJ8z5h8kTPhA9Wp2o5fFgL7cvPtPdzkBdsiNjbEKDmtKRAEE7oJ7pQ",
  "key15": "4q81Sn8Hg19y5n2Y9JW6U2ju2wKL9h1hnG7LBmcqZ1PiFqHNC4RckywBoCXXRorVqw6ekU1C5ks3WXKW5FSv19dW",
  "key16": "2pk1RZVRz5LPG8qAQTVc9veowRfYZQzvRM6KZW8XA9i6PRWQU5ABG6BZB4unr3Dnb6VUegiX3D3T3ZMCNYThMQ86",
  "key17": "4fALoHhzxF6JkEXFYm1rDLLj5JfYgRm2J7Pfs2ouCYkimCqg3BiYCWnuL8HzvvV18HGTRgLwZ6bKoQnbZWgM4X8g",
  "key18": "2BiX8sEQkq3vjmtGsW5EirRVXP3Eyq7R16dYHWVZZ1taSFTAQNrU1voXZ7x4qBn4di39G1pYc8ExtTySCmPeEpjy",
  "key19": "3h4aZVcWvAebx3JLADv7N2ZtCG4CWa3H6j1MeeMSU2kr8dX2yopaqJPvo9J38dwPxWA6dgjkh9x1T6jUoDw9wTvz",
  "key20": "4aS9KAyvQX7iPhQJDWS47SxE9WdBjEBACxJSq7jGqcNgTDxBF7wE7agbD4mB1ipg5FWsFJJjErvAEm4RWRRSqJP8",
  "key21": "4CH1kTs73755Lv6n2NFfL8QfQRQHAN8mD2QqFFJcqWvTzVRWxm3RWvLXeYraeB22ZA1bA7jS6v9npr1Ba6QL3GJQ",
  "key22": "HeDtbdW2LxsCE7kQphgWz7UUzppha7dyxgkFZRiErK3GNtCjAMnk6r6omi48d3rwFtV5umxcXU9cuwK4htAf8rq",
  "key23": "2q2zoNx51LD1H2HajyD1nbNnPLjATCn1rdZGk2gX8tVNRBUMUbbESRp1JLP7TnQu5J3zRDPMtUzL9LG2wAvMvxZX",
  "key24": "2opCLDHzXwFUphhgy5NoTjHfguhC1k2RD6iTh6JLbPxrK6RLPoTqbNhWpRikbeNcsJ3tZYMuhEdMbE38jmxS8fX2",
  "key25": "2p2aobGKD8Gmu9nYW7xUewaQn3fMQ2iFbEbCf2F7LMCePdukWsvLBuPaF2oJLw2wXev9cnYB7Cy5dDVHVsvD675",
  "key26": "3i5WC4ejaZR9P6vb9fGrAGYFFmkZ3KHENQ3b8ze4MwLaavz1q6Wk8cCHdWjrojoTvXhYWYG7tKeDk5z4dthyYh6B",
  "key27": "4pdoGxkBFmvJ3BNqrDkQCTppvzHRWLFYJUExvJp2Y6qN2XxikHy9yfRmtQ4zsTbrNkLq3iimXFn9nFyeeFd3jwY7",
  "key28": "5rXNVMJAepHxWEKegT1RTDgV6yASKTy8VbHGnBdkAtcyj9cDxE6rpRX5nZttMHPqitAX28e9HqpM9LMSyrtSirZQ",
  "key29": "5ZP8TTo5gwBNXnBjxP3vE5CENh2gNeFkEyDqck2q1Qb486syQD3t93GBexRPwormr28aML1qH4VxvynmiRCTQTxH",
  "key30": "ZSmztsY3CT5MpA16o3zh9hvnpntzFH2n6aH1hE1b7JioTacwieNXiohJQy7C9My3pK7EPf1Vs5VsAmHF74PykkK",
  "key31": "3vtKWTPQSas6fnba7yUQ2ii2xtJFY8iiGjWjnsBAptaKfEADaivco27mTQevEKpKjsK95whf93xkHe1CvoFNCnkJ",
  "key32": "3G4oTXoCxxXG8st2SPYpQvNovho63yBkcyRADsGpFfosztRvaJZRAPhXnptAPge2uhzwwzVXBTdJaa3wmwnDtQmh",
  "key33": "5mmjvSs4CttmCBN7vPM7YyAHPhrYbiLPrki7hTgEXBsYeaaiayxFbbTcoaVu2jxNRjn1HZMT8FRukzHPANQwJi3s",
  "key34": "5vNHjk7Hb6F1mWrTZ5AygfLtJzmRz5EmkpsZdtY9ARwQGkNEzortUim6HYygwRmV4SAVu2CbFwjCCW5ZerTeMjvP",
  "key35": "2Ejz1SJujKzdz2bbjsmYCHnwuuf9M68b7cXQkMBWtyEw723FtLuAbNkrUJrJgt9GgF57T9M2mKXqFgdDYfdaeFgZ",
  "key36": "5KcbFUdNzA1RA7LAnUuLNC1DWem48GidtvJDdbV92BcefvLiCH88PCxBWSaz6Po7eWp7fUm9mgwKkTNsp29wKwhg",
  "key37": "57sobSVBiSzcbQzV48g2nQ9CHn7CJmixemXTvCy9pMNKeRTeAc3RiMK2NXxd6RiHiznRwpKfAoAvQdwaBjuEb6Z9",
  "key38": "5tYG4mbQnyDNUJuB7bqdQz6PGHcJhd9pa5c1yEC27iNwmTm64uncJY8raHWDt1Vkb7dD7NaRtzsf6r8kYgNWrXjY",
  "key39": "4TLaTY5QsP54kVvgMzUSmA1bc7trDN3Fv9p5iiLpHPg3EzNFkHzbJevvyz53S4aCRhVHWsTyy3XoF1eg7JnVUmG7",
  "key40": "5vqJLRxkhduRd9Lsz3CV2EmHDW1vjw4wmzHENePkKdgVtT5Xgz6uAS1Bv1XWopVJnRkE94uwaGnQWNDyX4aqoJMu",
  "key41": "65aVTGDzrR6cii9XRdEpWXQEK87kgo3cU73z7VxBnwHbNn43aEWHBS6aeWb7ufGTygswrSADqsaFm1CvPNtyWYpH",
  "key42": "3iDMh18jhYKVFeSzZZwnqh65n1TTf9ET2g9sx3RrPWMXiP3NX42D8zN7v2wSUvkHWJeeELLPb3dAXS4XzbGBj6ym",
  "key43": "M7YgXGVTbqCXSZrEvEyRbUsA78gxPJaLpKK7Ev6FU7rRbr4BmXcvq2QWw9oBy6vZX4AHLJZauZTKnN9KwvFbNY5",
  "key44": "3iTC3cJVk94zndR4DqMb7sDfPPHUqxZkJBpfY9iiFR9jRCTkUF1EQPS6zGRxb4z9c3WL646BWtqkyG7PWiqd7one",
  "key45": "2k2DW4QnqVm9frd4vFzuB4Ury1bs1QYpfYyH18CftcBFgZi7qcMLRg2KtMdeq4HGVQAVxb5AGFu3VNm9r8zCTed4",
  "key46": "3PBfTY6pEeYwkdc5GhaUqW4ZGMa6J22mbsoUJZ1mfGBvps9Bz66dzi2ktKgsez83QCdexsvxoKBLnqfyBMU6JehX"
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
