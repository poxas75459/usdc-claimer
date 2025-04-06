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
    "4uRqUdX6Mt1csQYUtM3Qd13AM9cPeSzwYeTfimJi2cT5uFkVZSELHvaVJFE9Sef1xBrN3G2atSLoWLsDN4Hf18uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vb6fZ6hGRnrbRfx3xzbyXMMhz8y6mF4Y9crnUvF7DN41aUiMqgzcL3KhBuCdBQZahsPvAQ72EJe5tycGU79fcS",
  "key1": "QuLL7SHkDgBpTiNq5FMyPULcZUhiRZ9ZY1LwbzjzoYQN33rR6MVS6FTBdpaewAnL1uLwLvGizwiy5Nuu2vYvdsJ",
  "key2": "4dYiEUdbfaXtJ7QDqCHSJGpMrFwwk9CSJwCFEh17f5jqAeCPFvrF7UWbCn4Nrn82cau6cGokSeLh6gCQR8KsNzMC",
  "key3": "jLbEN44bRvYdTFFsb4xxPZK81Emi8uNzXnXJ8o7E9qStisWDJiAtbCQJVwRskaaRVKKPgjPqqCpiNk1DX9qN5VL",
  "key4": "5CMSnUodjm72pGwVZJgWTGA78ZVG1TwXD86NeaaAs2jaxx6dasHSmPW5sfb69ZkB9fG8ahmQ47VvVzg2sjotmBc4",
  "key5": "ZzmkXTRazhphZjVPTn2VLKNmE93AwkE5xLsDG9J5J15q57138sE161Efq6zK1SDcDAeiv2MGpXgd7agf23T1tR3",
  "key6": "4ujcEViRwAWrayNb35jgb5By3CpwySzjZfpHyMYD4kx4Ei7b5dMUuoHNm6HWPtQ8K1Nqae64j9qA46fZnho8MNoc",
  "key7": "58os2HGRAadLTZL9E9hXAtNScYjooY3cBwnqPUnEetY2KYHmZ6dFKH45UevtCbRsKMMVF4DH7ABvxNuUqjXB7aYC",
  "key8": "4cZXKRvwMVNbbZCWEJrBP4AdgD5Ghfa9aTZYyYJS89ZuN7svAThE4hmRw1fkT3tGzZakkDB51Xp3RoYZL6o76kNU",
  "key9": "4Be4eoxKQsmz6grayxhDoChLZkzsnVb9MsCousJsZxCxnYbS2csaaDihjKLyxwiE1ofCPHTa9p9b7ic6sGrRVfW6",
  "key10": "4aMn3UCPidKY6X35WuBhmCoYVQHs8w4koFs2yFpQZz4o8w4sAUcrTKHVoCofqGh4GNSGZW7RdKTji4zAHe7M5xuv",
  "key11": "3BHeZHvDkk7tv25U45QKymzJ7tKVoBfMw9zjqaGP8Hdshg9j99ZKtHTWpFPHJV8bgd5jTUrJSMHifFoyEoGr5WmP",
  "key12": "3z1wZ4jcN3Kx9a79Suf2BTxuM9JCQ7j9qdRVZkJ29Bs226e9Yz5oE3B7USNdmjoY1UbTXbdQF5NwTE9MxzPagjhN",
  "key13": "5r3rzritfUCm1iQkn4TogV6y2JeoiyGvza9KefwemSu9e4YMic8yetb8EZ2zvjUCcmpm8trAB289FnLaduhAurFR",
  "key14": "3K7sktponETnVPGKV7EeWaZP2q6nVAAYG9Vd47fvsbGNuioc1oRUcKybNjzbSaHj6omLoQxdC2s35ZTMKwZQ3JgC",
  "key15": "45xGN2q6n3NFJanSixMJMGEYoxYJ3aS6ogghHQzJ1wPuo9xmGkmZG1tdMtDvs7UB34ZLywJafa4uR5re8FaaEd5z",
  "key16": "5TKaC2qhPsJzqkVJaBbVQ8q1Mxmd6aekWNxbuR8ZjgJgshw4SV9EyPo5zPd9mfhXyxH23W9NeEcxm3JmCWtvrgg3",
  "key17": "2SLnDQp1qEMPzCdbqXoud7vLqTo71xbHg3nrp6Ez1URQtrSyYwrB9D9qq8ArVk61h1Dm14yMYgyVZeTfefuxb1Qk",
  "key18": "4nU6UbfgaeELkWhFmzowkbTTBW26hb9k5Gdmxw48nV7zKnGtUj2VqyyfYHpyhfSWTYUhGoESXnajBdQihtMBzFxh",
  "key19": "4P8L3habCkL2EV2gJB6x2x16dCNWZUxH8CKjK98jg1u7RxWU8PzqwA5RMaHJmkHVUgCxdJBhCRBcREoMbjJpS3KA",
  "key20": "hNVY6kCzdLcG2K2VR8T55FL5fCPY2NG51G9de46D1igt6gHBSaBhGJGmU8CzNU15nthPSDtfT2bFa6kwbcnqp5q",
  "key21": "3nf1UwgWUJw7pRdZFpw3cBFoSXpjoynx7bbUMViECecyo8nDSUjQkXaAqNWT5fipznr4gEyfHau1cbgvmmNMxncd",
  "key22": "5iz7gXMAAojVt8Ahz6y4fTrjW479eFaxzZqotuvcZS9V65jGbvAepErYidkoG4aWSJHenwu1RnwZUtofa3LABEpe",
  "key23": "3GASBp9ZVx26mcVJkQHmLDn6rD3ejYFtz7wDauD15su36PwjCov9pUGTLuNmjrXdXMx1URxns8M8NvDTQ5RyFkP3",
  "key24": "3NRWnWnnHNaYZfxjMWUKxALkhokegCNJHSWctwtdXU73Z6EqgXrqBbyztC8xGwUkqf8fyGbNegDhwSGUKEzj6W8j",
  "key25": "5g92v8m2vQnVBvDAFSWTZgUEnwqtXphoikXKAVE29a3opL8jKwg2qjt2s3BxNEJTGnmtnEybrUnYk6EdxkaGTbx7",
  "key26": "381CMCGSih1xN7Wv7A8KaKhmyT31nFzWVVvoLSqUTfoSM2gtALbqzQj2NeaX4UPskLjK9i1TVK312f4gxF6By7uE",
  "key27": "4UrghMt7rKncfpyoLDvz2kkDXST7Zz9K9nKv9KEJGkxoJsY5ubddWe9hxxNoLqhWZyPaPSXn7uvkwPW5QJLvhgmZ",
  "key28": "2T5FrTkdn3ECLB6GRvacaTgHBmnSiCeWUHqzmvdFmWkQQEQ8aKUoBvtvz2XcduiLWxuA884QAUL6rJCuYKzcFDCc",
  "key29": "42xY55qdTLBpLFtZsS3ZgPn2zEX7eY66cFXzmfz47sU3mP6SF6Aw4JccActiVpwZdrYuQdHFFkUzDXziCAUChBVF",
  "key30": "3neQJJvpHF4ZrtwzvAxAKNApCUPBrxkwHkUJWEMHdM7sfovDqAJeansrK785LMWz8he6oJHbNykCHjQ2WWgU9gXC",
  "key31": "3PKk6sxspupKi6VbfhPX6GotWw52UbmrTkQLExCPiYFJSFTxSDcJ2iDFGrt37Z8q57M1yTzDBh8LYqumxDeew57K",
  "key32": "5VaKXPwGGeBvd8GKN2ELritVEzemPrdoyKJtPwveekuU37kwajLKQW5BPgN58d2FaJNT6Vdtzvj8RKwHtP78Axn6",
  "key33": "3pFFskMsU3MH6oz1iTVer14TTxYoZuYZTiQLb1tiBiDhnYqCv9UN1VdRqkh3jCw13eVbiLsjByjV3ATp4WyrTXy4",
  "key34": "5FRR1TDayCHgGxiz1QXkAVYPyeUr62eAWT54NZ3Q9n54WLqYwYLJXURxwZWhe31mv9RJgYyctHvNNHP74MoL64Yx",
  "key35": "4WyvHh8xsMsL4LSL4gK7zvwxnMi2vi7Zcq37VDp4x78G5HZ5ucpjF7Syc7S36BD84GYVjwnN8REPxWFRNGWmLRi6",
  "key36": "3Q6bNs7fpp8MFmKDre4TY5aed154aPvKMiKT5UnZmq5VZeX7ECHBU57DC4zh3Pa2V2koGp8m53AfdeUqJmmyi1EA"
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
