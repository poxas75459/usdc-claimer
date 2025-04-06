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
    "zyigMbbk2eC4465UDskYubNQbfTg2pWcj4WEQzNGVY5yEA1GS2XaNGy4VZKfAmPEUNHGGu4eHs4mfhLZbqWrzrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TRDopW3gKEmMPS7NDFrea9nqLDacm3YnDfNXGYCEvj2PsSkobPbFke9uXTSkcHAEM8SottfsyWDJuMT5nNLG4AF",
  "key1": "3TcPuc2QBvTx36UiiwU9wmDLxqfKb12zXZfcatPFRZUxFwz7ALzVWrxN92tRQgqHsak2YaRHAg3CGUFuLW2uc3y4",
  "key2": "5NaQSAckB4ityiF5nMi6Z38KwJU5eVfJDxfWVmrXTsBmpvB4beDnhJCjcyVsbzPLJV6FSK7VfrSuJdAzBa69BYMK",
  "key3": "43Ux96oiH7rhRwufC7dt9idhPEgoPfuVURxbfZhMDbRYBrRsZVZmvUstDfxtZ7M76B7wAHSQwhQF1TFeA8Prw7tb",
  "key4": "sRifLQFuqiwGpSMLgJ2BDsD5CkWAR9WUYkioXT9WViDy5pWTsyHNqcqLx4718kvZLQrfC2E4rQquH8h4FoSBUCz",
  "key5": "2jJJ1NWEEBrAfemuZHKoejvD8ixVjAGddgNvaMfhLRc8SCPcu9kHrRK91bJ1pQfrQJvMixyRomaQrdExQD9CnB5H",
  "key6": "2XGLTu3PNfeELBDRfbFrT9sncpkHGAonABkA9MugDRK1FrhHcKEu152uHR37kvKJ6Yjug1AP7pkaftcP8XW4HzBY",
  "key7": "xohfsrHYnfQuBVarbCcFKp5ScecaeYJ4ctBCYWpJm1Wfzj9tKTmWYwKJiyELwTPvtNxP9gUnmFSLEaP6JyeJhNX",
  "key8": "4PcNTUJN4UKs5t8rKZC37VQ7VVVHoZwBfZoFyYyoM8usoYsgk2FK4vyHbdF82rm27ni1N1uUr5hT87n9qRUmRYdV",
  "key9": "46YS4yvpLdTQsHWgcrTnYVa6oW64AdvooshWtL2F3hzFohKwmp8ArBfcvUQE8oA38cYXAQP8eqoM6S7BkMsgr2HC",
  "key10": "43wPCUEh4RtDzuzvQfQQxe9fdF4pdG4Ti8ZLEy1FYAe9RWR7YkYKKee8SYtqVeRjVBC2C5H7H1NHBPi5XpH4CtRQ",
  "key11": "4J6tPJ1mRHw4daUGXtTJrRFw33fiUJqKnV2inwFRwA8u2fQuPB5QmWU1hfzQDXtYvq3TdSqxy93CbucuK1v46ZKs",
  "key12": "5cFuyXykor4X9UF5mZ5NVhUmifbsQX5Qhb3m96qn89vF6Ma5wh9Y9ASsrzUAsUJA9c6R1QeUbnMo3pNm65bA5K2X",
  "key13": "67Brkzvg46iz9yutNDcxdPVLxy2hACx4rrwPntKsTvcsmBqMwYjSXRZX94veaYkt5SAZdPHGS5wH15nC348UKxw7",
  "key14": "3tcSuVgxS1zDnb6rqGudm5kmLp2o1jAzybCsbGWptX3ZceDuWnrBtHfF16LKp3dQz8u3mBkhdyQ8YQPuD7NK1bmx",
  "key15": "5GtKCFs2jp1fUE8uSvXYdPsbLMkfmP9VeYfyhN7cLV82PkgUhZ9E8YeNgCAbrhx2rWzmrA8ZRzh5kRs4mVT7G4EZ",
  "key16": "9hjS8zoJ9g4AQiDUpXedPCwMerZzqY18zK8QFaeovQTKnYZkbutzeZuWFXV648Kj2TytrdunL2wmhVXEf2rrQGP",
  "key17": "3impCkeLP8Mss4PkcXVGs2EAkMwH3CM4wwN9bGEzP8LkS98E3H32Nv5W2BhW9uBK8chAP3woath6UjX72VkDaMtG",
  "key18": "3np4BEQGxud4FBuo2j7CuK9K3hHvXetBYa9Fo453XWRKSb84vjyYDwLpJxr7posqH5HyNUPbfJ3JbyFKQFeAgoC4",
  "key19": "UJca7mcTXwScvicBdpaP4Ebd7FEK5ER6qk45MTfcqyRqYuPFQU7DAVy4vfnUg3P5mUsFEMWCRtqcToRV8UDMqd5",
  "key20": "63wdXCVKkwKHsQDLL57ZskfyGW2SjyHeci9oAgSqG9TcQTja8wBfxEh8j4yYrvq8BT43gn6dSmNN8Ui36vpz2V9q",
  "key21": "xw5rUH5C8KCGAddd1mpEFS33Ahpv3mt4xWV7swrGukJkFwWQZ2jwTTzBeCPJuQcCQWLDipa9SH9WptubK9sNH65",
  "key22": "tUPfvCvj63nSd7yR25PEmWqu5YxVCb4YfY568Hstk8gBVVA1bHUpHEHBHKvZwpyAtpFFbCrzZVjoogvgAeefa8G",
  "key23": "2BzKy5sg3rtFUUL2vRKePgtA8hE618MMxg5wtwtzLWQeNVdoD6bvwsMS3GoPtG6Y1PcejJr1S68YGnGjnA9YF5iH",
  "key24": "3NGv1htuYVxPNJaM9yyAqgntatBFTVXJD3WWq6W9Uy5EY76vZBSsucUKsXhepx8ExF8MZd7n6PeeMy6mLorr89g3",
  "key25": "4QqXRJYAS3MXPP2DNUhQopPqV5pVngZuR74jJxUwuSNefdzSv7fHJJGyZaDUjkmSntMNKMagaLBkvcpDc9MWvscE",
  "key26": "dhoNkNx1ikMrQGnNkrRAY2sGAgw1LuzWMuG6UgPLXbCKSCBcUMj74J1cH5gxYzcLjzpyMRvz4ub2t5Urt4iSME9",
  "key27": "2LFbxkFEcLJ8FNvD81bAguAG9XYdiuWmc7Bk4Jn5HUU1wGgagtCT4K3ymcutbdDaKTfjDRtcGgzVbUukxQmDbMmT",
  "key28": "aurBnKfNG8AZ989EETmnCev9ZKPyKPY8ATkYZ9e58KUkpX8KpfPwPrkoerQfaT12F2dxyyehCBhqtYC1ksMGNPn",
  "key29": "519rNZ4eseiBiBi3P9swWj72o7wPTAuNWE33Nd4ZdFUKbu468Zi9AJGLNdK5ih2UjMsdTEZTZUbZNb6mBXM1FfQ",
  "key30": "2VdHQrSVfbuwuYWRFZTm3RHH4N8HGDGZ3PdMr6UhJDDPmubg8pEB8uRy7ZfqipVmA56P6YrwhMeeYTvHgSZgFMbC",
  "key31": "5w7b3tH5SMj9ZZ6tXk3Wx2L8B8TsBQhTbSzcFGunaG3gjXdDDB8grEuRhrfPq58Bco2MBXmUQELk7ybNBwvqQw4G",
  "key32": "48oe1yJidmKJP2WhRiQCdcw98121mqLytwVQAsHJuoD6FiAnpYC7Qqqz6tNSjYKQKSdLE4dpMkaMeVf6H9wLmD5k",
  "key33": "51KwE3edgBmWAK64NjQ2YJgZVDQzmae8zeCwQdpSnj5LaN4cEeEQiVyfyYYKNfTkGuKnZrVkN7cHtAaHMbpRY96m",
  "key34": "WAcK9XoYL8rNmheEm3Vw2AjWLADdQvhW8KBo5XLTZ1R2tgmjwxNqbJ5Q4mLzPBAKJGhvc34szGr9e5VxjAPrHCi",
  "key35": "3xi9YcBriadSxyoALtoxa5nT5ovwGdY774vYTyAZguE9apCRviDwMGs5M6ibiVH4xWqCuqmGNqovuKk7wjjRVChK",
  "key36": "2mRgxhnxEJXB9VQ7AvQZFUGNLiZ1z4M2YePVjTLAuVHoSaaU6cBh5gEwSnNFNe3dvLfNX7Cq8ssj7QcmWVyN8WLj",
  "key37": "Mf8xTrdY26kdg3FygKiPzxeGX4YXNf35mneMgTV7ock6wD8b7oPx825FtbVadB9mXcZjD5TasnLDubTyJmr7pms",
  "key38": "JGU9TXS5V5YBpZ4hyQ7CP1jUJi2riBm38sf6pqm1UroeWAqpiNkPEk2tJ7WeDUDxxgu9VtkT5u3XfeMUT4XoYfQ",
  "key39": "PwGziRcTbm7FBAYRvwAJ4Tfcxyy73VTFKgSqxue3NpmYPmT2cwnsogWBwdfCUemsQvV8bvBejz2bABuNJBUm2wx",
  "key40": "4hoBpDZfqikNVDKmarpRvmNQJ3gVBesYQMqePESxNS28JAgvUp1jKe7dDJkzPVrRP7tJKbXgYyRp2ueAiTfSG93q",
  "key41": "2qoDgkDqbrE11sWnphtXc34yeraSUjKkQST3SLqGCbu6FgS8LAQVGxetHNnwdfj9NCjKhsNWPQcu9KkAc6SaH2pu"
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
