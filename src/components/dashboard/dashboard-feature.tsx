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
    "4tQmooVvLP2vgXpvRL4dQouUw1H3nLqcQpMVLf4wAtmqAvenkspBpavJctSptYBaGDUg9J6YiA9z64r5q8tHJpvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Kw7SddA1tVb5vGmgq5RsTxPnzXR5qWstd1meZiPXQyXXABK2xN5PYts9C1qdB8P6uJVPbi4TAMZcbhCYBC6Wxt",
  "key1": "3wMzuzoDh9DWSqmGXBBHnPjvcMoRgJSQAdrQNVg4F24SvsZPeTduPBvGapExPjirXJphGyxgMsZwmi1va2ZVPmgC",
  "key2": "kB94HRyDnZTHCNSntNowPuEoPuRszjwFPS8CQTQXFB8WvZ99QpUYLekxKnpdKJxQgsBD9anbAoYEcDk8zTtTSdh",
  "key3": "4AoQTv4R4Gqq8DZBcb6KTvgiSsenCqUvX9pYNFWoy9hdRVJzLurtd2BASGTSJFXTJ86vcjztg9iyJEEYqVSLmU1o",
  "key4": "2AKW429dJDXpYebJZLHUhv2o5jfpphS2mQU1LauiUKNxR2Tk34YyDhkGmogvg1hsy6ScRAZvkSsj3ZHPsXdzk3sk",
  "key5": "5YPbdSzYDZLbeD8yQDmZcWQr61QHJYym97o1B1Z1EpfgxX2TAqvc8zgaBgPJPipDktTRfaJj66BqTzwHdD2v9FTX",
  "key6": "4nbKMWxnK2iFSH7wDjwLMMRFVyC3g83SYFinRKX6kvd8i54p4JgBeQLsgy7zKB3cdwdAUg2SNHDKtfuMggZqbmjk",
  "key7": "5dkbR82hgMsomkVdUhrTRWajpyycFKdcReUtEqgRVKCcGPpx8vVmabD4nxyeHZuCaUEAoJYAck9t1SxFLCVWK3zK",
  "key8": "3kTDwrBQoQXS5jfiSXZHnUkPYMt2NHz6TeYv9jaighFMwy456q8ib6vUoCaPchHpZkhEhyxta5VpqGNL8ueJEPom",
  "key9": "59qvZGUPS6vN5CqGQC9Knv92XcjCcuk3NpbRuF6QxxM2GrG7Wjp1MCZgRZgacrKJAEDGu3G5MLQTd5vRY7XSKVhm",
  "key10": "mcvMvB8pLWvc9vgvQt4vCvqe4zYXT9YxMkNxh5fKa82uD8igYGAzbyfRr6btnABN65CfkgU6YkkzetFwzGyoF5s",
  "key11": "UYnUN77K36BQ7MBnmhDBYfddPKM9TvQMfqc92JCPGbw1JjWoQWk86QTBpoSpfsdsv1P1uKYVRpUPq31FsH1biK8",
  "key12": "azzsj1n1XFkKCvvgDdvZs2MHpdoSrYwdkNaSABfa1Hr7vobSgBa9F3Cfcu3aQqQtinrpo4MMVuJLKPMLaGqLqYv",
  "key13": "3n9fG6FBarkbPEEQyHGiUttGedxhZyVnMSTYazkHixnpEJa4YQT3thaZsipvv6QPGDaa3bMci5vb4gFGy2S5sSFR",
  "key14": "s3NqjDX4TBPQgRiYeZfh287pcgmSoonMjqLy2hbFtBwWFEr55A12PhEgijqGbVo25yUNyknVpJfB74oBX3vGsMD",
  "key15": "9uuNe5S8JLFiiU91Z7oYZkZTFTVRyhR8PL2AfUYrNhBdHPLBXgApUjSXCoQ24qVhsMtTGHTrWXpPTrMbvxHs2Bx",
  "key16": "5E6rmNaM613exQanqSh4xH1cBGkoetQSz2WyFxCdtJVTjmpTVQi9VB658ZhVXxagM3Y4vmDWpjRePkVJV1RUoZQg",
  "key17": "2W6Yo3763XzvyU8Dr317aJuujRP4kZZEw8rCWzWSdrZFf412XBhdkSoJFDQ4UZ4SrRyeJKjvQypW67JqKXZZopY4",
  "key18": "4RsXhcy6zfHbJ3YVmX25vfUVWhbujJ12zLxysVpthnuWLsN4pHYAcNvbscpYZDrYp4iwF1CsWXaFCBs48tzSqfWj",
  "key19": "jkHDz1AVUVKnnW4R7S3s6aiucK3S1DQXTbyDHzmitxV8xBWpxVJ7LGUc7kSq4Qdfh6EuctYCFtz4iq8FgHFgwx9",
  "key20": "5PdGNdQB5L5BX1c4gGr6C9f59VN1AQsonnCZp9RoVk88Js25E9yinytwdGdBLCSj1BRNJzStHgjmw77K9XRA3xUw",
  "key21": "ehrEt13qAg7UEWYcNydy2b2kxzKFbT3opZ2ss4jRZx9bKe9pnzBX5MPTTqeDSMaWZzCYhGnmPFTj4QJ8qqZxHBZ",
  "key22": "4yESTMiPZopBUcR4YGSfWpjmPiARAjsJfQAK2ho2DDfgvVECLR5MvL7tPBDGM6jmPQ2D7TUqmk8tWrY8SqAWkgas",
  "key23": "4ZGhNbDCSU5Qotc5e1wrwURoeaii7TbYJUnD9QALfPQzj58yYPUKDdVnWVsd61mModBaDRqJV95W7cApe92KXAT8",
  "key24": "66EQAB8sjuh8LHkhgqpHv5NvsGGoiCwQAPQq8NMrbdhA737gVa35cmVJnjqZ9KrBuMxtA9ruquQvFaKu762CbUhj",
  "key25": "cXExDzn8Ny6KD9M4UhSUEHM21J3EfeFpFaEx42JEFKVYg7ADPNx1KQhsako4htxucfNWfasikpkKYccNF7pn9xX",
  "key26": "5RuK6TaEgYAdiJNi8pSFK77yEuvMCErSF1W6xZ9icZTmfCuYSS6vBPu8ooLSofXwNCMBj4oEgTfMGoe63tdrsG8a",
  "key27": "43oD3iFnLwGBGmd29MXgdN4R4B4tpSXenms6ta63MkoTUwRpUY7AXzf6kcaD62C5UpwvjdxVnZ9xQsKrTwADHx6k",
  "key28": "MBGYH4XJ8wPTx2G5rPdoUoYZpuJUuGVzMC9EoYQQzcN6thXNs3SKWHf4gDZQxDaQfEuzY1k1TW8D6gnNGcLLREj",
  "key29": "4hhZdBKR2ZC3LAFyNKvuCSydXjLaeqd2D7k7RtA4p1fGnL8P2786FP4N5HQ62KEhmDyMm3URGTgAjZpuvFX6hrEj",
  "key30": "2m84KLxhzZWy3NL87wRiUEvRDCCvmkXo1ehrEvU3k9dkQq8bWWxXN29p2tHwqqsiM6f2LYuYVshfasGFyp8anBLq",
  "key31": "2j5kXJpkizSAbuCeNT8nTe6tdTbrNr3QmpsYFgKvsPNgy16w5LqoM8V8ibE9VjeewgkJREJQ5JmfmtkxhiJJx695",
  "key32": "5CSE7kEPtXVw25JPPJgg3Jn7zWXvhtTS5RgNzza7YsXgJYdN9VP3PeBEbfQCyFuKRAaqraSK5GGzhci3Suz7yJJk",
  "key33": "2HKqJXyR6vuHdZGR1hV2CXXwmGyrha1bdJbddLjTKAGUZpuhwJwFQMAgnkpzPqDk61UpKscUHevpTMAJAtyqvHBu",
  "key34": "3ygq9gMnGoGybE1sX3Hw5y3fab2tbddX3uqo3oqHXk9hKYEtPvF7m7CmPZW9Y3XtMSPbwTMesSFwPDZS1R8w3tPj",
  "key35": "47vhgy2ZE4gVJ68xN6cj9wLAW4sEvWPVivcHMSFimk62XdqwVR1SAuCzFJxR8J5jHwMeicfWBNXddKdCCU6f1PdJ",
  "key36": "53iB4mmXZqwyLLnEjUQUvx7TdVVeAbyZrzfWP6VmksULyRJqPK3nPXeQYeY7mHwWUXK1LHfP5MjnrEEAmAEgnCg",
  "key37": "67DMhnTsv6CQmb9E3649Vf2H9RijL1NqosvkWeftRtV3aAxhiZmsCU3LXBU6ERgAgdoBbWKqXkVj44vRsXwhcwfJ",
  "key38": "5sLtsXgW68ex3rvCU4VnY26Skug4sVW1afyo83EAxmTtYFnT4shUodKAG2RV3jZfx8VK9PvuNKm5cbw29FcEk3BL",
  "key39": "28HYnF2PsvmYjjGrWedn4D7vHo1aV1c4hEqkrT2gpUzeLK7N3bisyF48tJ4ixRBxCYLU6DU1zPi4QTGgMNd2PUVY",
  "key40": "379g4p9oMt6RWewPCJHkj4cc3arSAFk5Miyu4BZXCnBa4gD9ioG7AgqYu5jXN6TDiDU7HUPQgxJmwj3JLK6kq2hh",
  "key41": "4V3SoyW32Si3NxFzXTTDcB2ZSWmKXPivPwKuNzZJCLFTeMfpNQ5u5QGeh8DUotFznp48ebqtkCGXfCq3H8SVxc73",
  "key42": "59iQNWezag9JWDgd7y1b9EFHmPeU9hF1kmB25MFDcDXw4jt5pgJWXdX3U78KjBG1eahgGxr9LXGmK5PwnYhCrW56",
  "key43": "A3X5Bmn9VmYeWpnDQEoFUfn4vSg3gKKYT6bMChAbDh748pH97KuHvhY2PYCCpFEK71G4Zi2XNeHBA3npr7LoRf7",
  "key44": "4M4HBg1ZvtPYc3ywSGzUBSRt5w1cGtTfm8mnxfc84X9aMHy7d2SrzNcVNAZHPX3Tg3sSkLPZbeDVpCg8hsFof9TM",
  "key45": "4g73di9nfqUtyoxwgymiK7YLzbcJMSX1agw13wtYpgSFq3KLmrSEjtoXKpoD85bGrk9VJd51Fgi7LQmvMt8GmCU2",
  "key46": "5PwWUqL3snmxcf5eLv5AADCEnBZ8nKRFG2fsJk7fAHo3sXj4tnDrwBCPzwrs9a1ELm9eXBPS6REyQ3AwwRE6n5DP",
  "key47": "Vt5ZZyXMHPQ2HAzBxGkpY4zaQgcfPHrr3LNf9g45U9ePBG111m5JZZFJN7DjG2qpK5VfB12kAfPRf2WE3eAPSGF",
  "key48": "66oLNhxH9qw6KwkgbVr71HiXPM9fXUAV2RhRYR6c4ecChA2UFbGpb5oQFJi5yt81cX4P4NEq4hS3YBShge1vDatP"
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
