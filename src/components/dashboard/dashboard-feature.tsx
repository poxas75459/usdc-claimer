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
    "39xb6Snt6gS2cCUtLfR2rU67C9mwSWykgWkYbCu8Z1ChdYS1yFxZ3hsLvzjAJwgq1fYnviZCZvAdeJZpMkB4erQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vjFKR5aWPE6ASLHzNj2gphJjcHhfKRKkeNo9mDfhRa2rXv9pYpSSSuFp5aDDboKB8xX675wvc1xczUZGxiKjagr",
  "key1": "4NXryMGwYaC8wwXTzX7y1k2hHQCh1MJFRE4iipTTXqWfhZCGjgrDHLWRgWnNEKsHbVJcU36xB9RTaPAye99Y1jTg",
  "key2": "2Hahhiu5vAoXz1cr8bbgB36XwxkqKj57u7XmEpqN2j5zmEjxT3XSnTutRDrRvj418X9yef68HHSbcUXf4sywH8z4",
  "key3": "ixDr7PzzLEWmyPtNhYu9vwepCC6WjdCaHXMMmVGLJtQWxBquMGVEjyic7HYbfNp1bo9MY3apA49Z8FYAdkAJEeJ",
  "key4": "5kXf82LNZ7hTVypmkHh4R71iuMeET1tGGvkFMvDKLRcpWRHZHLvxu19Nbd5LYrxtUa43CTtTZ6jpc2DdYaFH2RXy",
  "key5": "EGapzesegru8VTdGRXBZtNWvbHs1JkSLa1SyxCotFrzbL81cNU5QFNQ4h9fTPgeqq7aN3JhuWVDqbNVrR4hHoeg",
  "key6": "5VfUCo5CcsbW2CisMwPG5j86KoSQ2HZgRLT8SQMnN5THgoD1kJ6PiMBjF5YwEx7WMcC8a7tDwuXviDWjfMELuauJ",
  "key7": "5tyHjPvpXjzbGUTf6HD5pCNJZ65dAH8boE6R4EPS1M84ZEjCm8rYTciScF68EZ4DxfcmaCqAQGwS8u8GdxNSChh9",
  "key8": "48yb7KcicAY3v6zsVTVa6haPmgkX66u6oQVocVkxRcgQ8NazzEQGs6BPUwpMC23XeUCL8VMRySvsmctFgXazAJxM",
  "key9": "2wwkaEK9HCfBJN5NZiEkqvGDw4DVW9KrJ35aUFeMmbGMS7sJERkwZahcuEN3NUB6fMCG3WNzk2iH83e83GLKd8HQ",
  "key10": "2tZjtReDi381n8amLBt3FRDubcRRzrAKppkC2Aa4iR11aorD8BkcvvMsx4gvaLQKcWo6iFWVehAras5d7wxcmLqX",
  "key11": "5FkhcpCRVaR4Vc6tdYNiGTMhTzXnJHTqpEwU4jYh8xaNYkWqJqRTSGn43uQy8Qp2F43a8GEykz16YpZvYJgGn11X",
  "key12": "4JDSjiLheWKEMBhpp6N5FWaS5eyHC6euUmMUsFcJczfeseFqVqL1e5zZ6X1EKZiAS6toxEe9TBMPHBRr32NxdkWE",
  "key13": "3HUL7RsJVPbVfAiERHahXVA9RUD7cFFJCCgKzegQgxS8A63FmPVBYKhXjbDpv5s5AjncFGkKc3XG9HUASCwNUemj",
  "key14": "2835hohMdVxqbjnndCnsiWXHy637CgVetcjikSntTDoXma6PuoJ2oJdNKoh5Doh5bvmwnbN2pDAV4eSBf3ALwyW4",
  "key15": "9J7v23Xje89DZFJiuaAUeYiBQ79sdPd8b2CnR7JwdQvn3DGbZhFbMPVfmZMKQVAM4qdtMTPxNBNyr9kqsdyU5g9",
  "key16": "nDXm96FBh2grZxUfx3eUfPCjtsXKKmBAQLNm5eZqdANZGeRJRWExLAWYK6nKgmvqHXuWZZQbqiYBXTk7Kkqo8e9",
  "key17": "2PR7SdKbGPRhQMahuFYi6P4jFVcSYPsBPmvjD4JHRgWDELAkWU6TSMkWLxsNkJ4FmfnfMr18bHpYjLWc2H5Z5Wqs",
  "key18": "38FRF3tnT3erEJ7eKLP5nYUCyeCy2gt6mQJbNPeWokEZUNhPfv1SnGqMMmPPjU3ReaN5YAgUC5Vow4FNwAGhMknp",
  "key19": "3rxvQ1BuGJwSqqLWwzyDtFzgjAZw4xFvSo4RYhFJSAaECWZkPzVv9sTDaLXsScDrBCqD7UrBj7qps5iAvZLWiwhJ",
  "key20": "UfFYWAgJDEPFWNQK7H548hFiuNnMj6MybQwx7xLPYrks7qK7pYZdRc3fVYDV234wa2gKL5tFu2zseJdy6HWTLpT",
  "key21": "42emQbufqhJnvEBRKUdUEpheHeYALFJBW2Njd2EQa97Sj5mki1Y8eN6fHwZJ7Yjm1jHWeVdscawJCMMdcgPmDg5m",
  "key22": "5WcBj7vuxLhQcUPMkqNSqZKnbUDnd6Z3ZyQjGqF4k9MYg1AbJo6dSKC1Gwr5PPpdavKFWZi1DRnKq14XDuXkkhsj",
  "key23": "5USQ8umypB6Liqi4dXDRbkkEDh1xU9sAyUh6GWPkamyixHL4B9Kz27ZzroZ2sHhYZek8oL4yF2H2VHUH2zwPYP3P",
  "key24": "TLR6uKqe6ZmerBrWbbyYmS5dSiupKAuTYFa76KWs6aLxhoQAhKTztXT245WHzwfSLW6xsEWn2zaHMWFxSwqFy5a",
  "key25": "53dcGrZdvGp5Bvav6NCZvdpRSeeYAqypqhcudfGVu133ubjqn5QbLhoSNCviuWVoowJ5YdgAFw2L3rhvdTSmDRG1",
  "key26": "2wqF4iMbNasazctKt6RknRSiFabDhEj7wngJ2cwtdkdCHp5EXwtnRFTEEVnbYL4zK5YioU7pZ7DqyU6132yvP6Tm",
  "key27": "47BVUDGVTcBzCpgmCHTMCNoAs8GCJNBBSbfwQeK9G9UPZtRptTCwDAyAZRLpjjgourT1hUM9UsgXKoPGWd8kfoNZ",
  "key28": "3NDphoxdLSopYoHxGvpgiZTLS2JEXkA8MKKw4Z2FvUHH3Hf7UnS91oxSMyGRT358kH3Trrg7dntVsHdNJ2Ckq4kR",
  "key29": "2XNnc1xVwtj4vo8FAPJkmiuQWkFUx5jfLvFJ3Du8qq9sD9GdwE2Vmcij659MLGbNVsUXjkDPE8tM2S6AU572ztv6",
  "key30": "5n9gGy6seXJRHJQ2McNJLDDRnzCbLjL912vBZX1Urxz5ZrMswDaBvewopKJxjy5FUJG2xP7uN3Y9ZaNiwA59wRp2",
  "key31": "tjcyJoGjFpMir5Ta3xEC7PV1jjFREj7qdYmEWckXVb4M54s6VaXzYMUJfP7H7m62jwfx74mnyjEyVGeYnB8x9CS",
  "key32": "5XNsXEkjh75k2TfDkBqBjhaCi8cqde3n4N2KpK4XEfZdDzUtBtiY5TK5aUSRamjWKbThwzBwRaoFzGj9fxE5bEtf",
  "key33": "4eSaYzo9Y4VvoEffXJDRd3v7KfvtdNR1TWPDvQKCSXcp9aZhxH7pnHjrQFNUs8SiiaeQRrBYdLaRJoBJR5nvz51q",
  "key34": "5im3oEHVHUNG3RenwtS67RJoVWw3R8Rq4J4gBe73YMNf5YiihE24PqqsYek7VvhRNfnrqSn7d6qj19qM8GWYA5kK",
  "key35": "2JjaqPgi9H1Hy71K3dRvWjttRr8AhasAYqgksSjVmfdCmkfVC8KxiFxZ8x5Yab7i1mDJJXCEseAtzKjNnh9BwqFs",
  "key36": "oetkiGCk787ytv3vWmPiYqLUxT8gmZS9AJPmv4UHJEqgdRWVaV6Td9kNLteC94ngSJvTM33zfjBEe53tQpSkeRd",
  "key37": "3X4icBmwUnyb2KmVp3UuZi6kM2LHNXEyHm7um7a9wxEkvQM3Pjf3MV4XzF4XnWuyCMLAEwiB1vtV6W9SJHUkVDc3",
  "key38": "4RjhpDyD6ri5VTEk3s4yzfWwksJ4mCjx7QXQjmHXG4duoY4Ya3DMHCXhJTcZQEkLR2UtvA9aUS7EgfT4i6sZoCDz",
  "key39": "p938WgX9SWcaLocee6XyJTkM6jG3tmr55pqVxNth4NwWFw9YGcVcT1nebV9HXZXRXa5iY4nCYsat5V92m77ZSEt",
  "key40": "o5B9RU5G1kaDtg9jiw7PM1HDFwr6itx5KXQ5TCaTYinRcNRnF1iLfuWYysAwZuqoS4ZDNqYKWDHeAv88hhs1Sc7",
  "key41": "c5V57Y876DNtzUMfe4kkSi8XQhnZUduuQyhSeitJDeTQWWzVKGcHkib1Tsd9tzdYgrTbyQPMNySmDQ9uWdfXwNR",
  "key42": "3Y7jugUzcXvUqyXoTMCskCDV51QMGBRscvtteMgr5MyjmNZ7k5RJ61g1GZN8cmsKzMcrFDoA4MvXgTA6eTu63cEU",
  "key43": "9rx3X6jqm5pDnidqYKTCy51gomPcXCN8aRXpuh9TvQbE3yz8gAkaBMEXbmXQ4brqEcFQh7yf1EeqCMcjxDg8x2x",
  "key44": "2Rc3B22WKrvsKXZFyQ6RFhK32vq9gZvumHA6BVngaB2rjGMuJ5deQq8Rhun7KiD7K1SUr7yf8h1P5naWKqsMirPv",
  "key45": "2HAXRVeECLfRvpsj8F4h7wDuGV3gJRKcCwcMXLJWPUyrMNPmV2r16aDLoMfAFfSTCqv33GLpUUCtRfZxxGwan4V8",
  "key46": "2TuTWAkVAxoB7kJ6t3cL7cpccAR3tuXrbGZZ9FUEAmpdxJkn6ZrYPSeHVGXGL37ZHiCuqDNJ7RkPTdk4fZSTY4ii"
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
