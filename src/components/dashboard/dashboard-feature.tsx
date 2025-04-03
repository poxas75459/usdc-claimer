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
    "3vebuG7g4KXPhgazcYj2ye67Yw2gTZ9gBErKA15ioRfxjUHqrfoaHkoZfMSvZeuFuiT4WJFrtZy2FpQZAVF2wTbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RLXcm6rstkLwgnD2QSh5yQj78FDKKGWu1BgpGvjtevfL8gVW6jZeZA9pVmLaqDA9sEZFhfFYUzCLM8aviZf41jy",
  "key1": "3bVdS1Q4PeVi9mmF9TJq9rtVKJpDGc6zUYuWG8MEGrfhMGzQYDTTpUtyrW8fSc82fHuEQFAZ4GqEokWGF5H5dy7a",
  "key2": "5PTxdHiA8yuP6nocwS676u2Eov82cr9oZfDExDKAfUbgCmi3jErgg4ZZ82AaMF2b6oG1VHXuYysVNqbtCPbGxXV3",
  "key3": "4GXg74jVJC6aGcahZdik1LLSQ8JjyvBZN4jEyNr9bhm3js6dZZWH7w1T7gshv6iWxANV7WfPCKZeZQsDmKLvGrbX",
  "key4": "3HnDgwkyJ4SDPvGCucuBYSG5HXFCyeKcXeDj7qJby21apxRBLkVnsGWUqXnNZ4ncFxaj8ex4ZdgMi4sCdbTtuLrJ",
  "key5": "2aPyH3kcwL9CEwSyknmU7TrLE8SxJ5jUoaejkmZDcAjFB1WPzr17EuQd7Dx8TrmPx7wsDi2Q85mk49YAXSfTkdpb",
  "key6": "42EEEH9abr3RtCdLmFUHMLGpnzHDo9QS1anbvSbUJjFa2ay7SnvLtfgJ1P2wVEW4LwvsYcXzwB88crce6U722Gfp",
  "key7": "4CsDs6NdQnRm3enzzZHYvstZimYrZjDNThFqgxtyLQS5po4du9RtFPRDiEMTz9EPnDKsL4im1vHmh94u8wK8qLpQ",
  "key8": "5dqzriSb8r9fSbfnWay4YS7fX5ZLHv6fqPGpc8utKbctvBynwAFFpZHaDtToe5e1fbVzaxWaNBwwSSny1qqttia3",
  "key9": "5atZqQV623Um8L4gSg3DNoSyxFqi4W6YmczvHVN182V25EE6D3oDyB1YkwXztkyStAZrreWoXjuEdvk1quBx6tmk",
  "key10": "5gNatpAwSG1a8bPyF9QrYSptCv4aWqQehfoqT1Hu8Jt8DVQQk1Aa129GrM9SAwFhcvbVR5gKU9gFRUozsTP5iYQy",
  "key11": "CJM1vBjpPAVTMYDCfUagDCDs91XD2H5i7Buuoh6Y4bk943qToGKaw3UnroAjZAWiBaP5w7zeXBLjAuhhnDNZDXM",
  "key12": "R3VLdLLK2NkS7YauGrZukzoYSTQWqdW1e4HCiSseJLJhywjtpHTetGJANXaNc5iutxurK9rSgmnmn5jmiQsJ3TK",
  "key13": "9gYJHQHwwTrusjzSap6GA7bwEHenCqHFrpX6s1nY7LS6coWFmeSqoBWWw4uPgvd4xZBvjF1UY24ad7UHUdmAMzY",
  "key14": "4Kud2nUL4uK3vzCnApkubZ51HgZY3seKtRgF175NQ6ZQmAQwkYa7pCKh55Add72SAVerQKMwu5MeyTsBMoEhnNd3",
  "key15": "3pHrbhZRePYYaZgysjoZ4PKieWuC7MA4k6Q2fZxLwmEZ7DSqioomAqWrvu54Ze76b5smkxfhGptsdXHGtFUv8nYS",
  "key16": "2TYVvc5aUPhi9aZPJBuAYehBXu1yN8WsbPoYMscg56Lpmsr8zL7fheJZ5iCdnqEQP5tDFuo52VCrTeE5buAx5mET",
  "key17": "4hrNuUYVptg9SckjUC3Nz5D1nm4N8PmHojaq8XCib1p4gJqqw9zeeAmrXQrPdtKAQXXYuA2nKg1Wi2uhBWzqgktm",
  "key18": "hCKPK3gcvmaX4f4XJT4sGWBjmCL4CwaiMQhnAQGT7yAiR7Cnm5o7hoscG5kLMS94uywWHenfLbyPdGL6Xayy5af",
  "key19": "8bxmFv4j4XK8mQ2k1abSzJVJAu3idkqJiLQ5eXbfAjxBdeJEtCPqrTvdQJjuhSUDVoxPorKDazDvJjj2k1cZaRg",
  "key20": "5CHU8wPCQQGGeWQFUaMAg3YmsrYwuwEuewxZcZMhVgEmKRCcaHL5asseP2vPNwveYcub1bbqAsmyEHiorTWDE5Qo",
  "key21": "RDTP3jdHyUQjPdvUB2wmRRfmtmPuwcLgD1hkeMpTBAm8zMUvi7yGLp38YNCTUoLg4Zdv9xNPgp9cqehJpRLaUz6",
  "key22": "5gu3pTCYtzcdncH7B4wQbxvK7ewMzUbkTuH7o4YEk93f2sbsFJjMZfMLgpXPfnJW7JGy8RxuG8C4sVBRkgqtfa1b",
  "key23": "4BCUGX1dhu9SP2eZpjTTHXAjFQ9jiftFoVwJxo3ja2yjEQp5UkNeEEmeoqvoBd1frU7QuccmHrrQEfsoxP1ci3ZC",
  "key24": "4F52ndWk5qwVjwrzAgGaqQRUQcLGxmpWb7UMUQHqi2hHb3yZASmyauX3atmukeMRD7kDGsFGXfAAzPyDy1VS97d6",
  "key25": "4UxfvjMYXUFfnFcSHHw3f5wsakeyPALHKcSytZqe89fsLzme4c1vuzNDri4NKNH7ZNdASed17rWHgoDDS4tDKxKi",
  "key26": "492aGfv6M14jEqcWksfj6nuytoHM4pdVYCnokagtQxGd1nsjPxU96EHkY8KpGbQS21KQJqSMZDyNDYvGU8rFZsJF",
  "key27": "4hrRSEfvWC4Su75os53PGfTJopk3xxnaJ9Hq5Bkyf1NyNSHwBgebvcXZ4Ai6JSfBvMRjDGh8JHheB55sqVsqLHy1",
  "key28": "yRm31HKCZsHmmG8fA3EPy32ikmZot8XPmJ9SPLLEuNUTKbKNZhyhxTL1m1HCih8xmTayvvq2n7d8Kd9fhssompb",
  "key29": "2hDcWtTY6Boj5B8sJmMkTNNkL4mUaHsGoSYYdkpZx4wEF58TMkAkWJMdR9q6J4zefrngfqW9wojtM1Fj56GafF6X",
  "key30": "CXKTj9gRBEWBz46GwrquUQaNvJjFEkMdPrUq6kuXYqWowrQgPSFyNHZnxnfy5798EKniuvaXaeYcp598jgAVrDE",
  "key31": "3zzQYW9QfPu2TN2AZLQvybSUkjCr7vSyJ475chMZHcA5ea72VPM2q3P3ZmaYSDeFmVgSTNPeFkmdmjqywjshDJt7",
  "key32": "2hjJ7TGwcJwofJH8U1cywpM14s8vzExNU3NTGvh59pUYGTwfBXNPLpDQeNQabENR9EdRLfonqrH7SDwwGyd2VqeY",
  "key33": "52xSXTwurabQDPpvxb7EmEqszMK3Hdgzha9hcrovePZjr2KH8PFiuzGWkEKTBDNmU2pR1x7N3j5zyztEnCNnq2BE",
  "key34": "4X3TcbAKxgjVoRzUi5xNDQcS3D9ta4ZFYiphfig8BHDzmDpLAsfZQ26apE5RVfE8wSwjWNqqFAZSgmkwxcJQgcFb",
  "key35": "2vVP65uLCiPhnxRo8baksbpvYV8Zaq5wNdz1437CVDAaRQMJW8T8A46xm5XtHHPqiYk5cCzE82E7jN5aRpVAwZ1p",
  "key36": "HwtqnSAsG69BqPVcpqWnY7gMYdt5afjRA4FZDccbfr4QfiiJEn84hytqEvVCceBu5q25guuXq6g6N5cJqgTPuYq",
  "key37": "adWjkEs54RRFtKS3QYq45yxZRYW4NBYfsR4f1w39NH72d7J6RKPwVuWviuBWutFbDn3P1fhucYjgMRGkLMePJzM",
  "key38": "2DLUdSbpmhkE56tjyBMtbf1omqT7GeDU4J1FZYM8MVNCJQSHLoS3AuRL5qJaf8kUr32rsmUMfQtXs4wJ8NZoF6yg",
  "key39": "jEM83sNxy9gCprTyfAM1BrX7KtrNkGBKxnht1mXSBwbHsSxjvi7c22uqg592hFYMEMkTHNarYE6JhmQewqML5BM",
  "key40": "53x6rFkQhtPcgnvYfy13ke5WV1pzHgy597diEqHadeSEJsfPmhsrHi8KuXDKUpu1JLPpER78qJ6MXjGtehdAcrb3",
  "key41": "4rUhXyvE55CjVh2agBKwdB398qbHLfJEHe76D6bVCzpbwaJfRZhn7oedxDmHZfkfqYMajknyoX73bhbvCDn9M3aB",
  "key42": "ZMngNjXQmiP5deeE8W3mVYfZCVeFinz7mEpHQNFGAW2dcn9i99nscznMWiSam8SWt4aEScw6MDHG1n6KRkukKZu",
  "key43": "32qahYXGwycwrcwS46yf1dPKzfpKaxYEXZ4VCDaVghe3NtqDmEwGYbeAc7By2ykQQ4HumWGuZdqhn4hGadoV812e",
  "key44": "3H65S4QU6CTwAVU2ZiHbvTzdeWcHuRtY4aPwTcvARZZVBGFVLSnDGb6B2NFyPuw4xr7tcy1FozbtvsFH6xWwYkpe",
  "key45": "55Ze2DkxncmL1MuC8sZVmvCMzDzbpyNJZgBfuFhF4ddAzS7nMvshvYXq77c5q8VLkQjGuCsi6bm65ZAaPVHDYZNe",
  "key46": "LEJRitrT3rwCZjzqzkpRAzuQTvZED2m8Ua8WAjQ9oTqygGq5vwhJ2gyX5LZURrUAUa65rEMXboTDGVusZVGGDSJ",
  "key47": "381jLTTUb5pBgrSJwK4rc7YaTq6bGisNBpbsfyZKqCk9XUXe1RkWBQJgL8EvoqqU5NEpFEvZjzYZ8PGtPTgJjers",
  "key48": "x5ZfQv38u1PnRPWmEjC9vXyfBDaS9TW9TnEd6CwMgFM4GcjWwrkwwpBH1c6od7QrBqz9VMoXM9L9DkV9VceBkPT"
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
