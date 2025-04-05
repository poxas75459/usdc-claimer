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
    "5xoqHJKAjGRnkUj5wKbsdAXjMPELGrMhbjPKBr4oBGhEZG6rHZ323Jxg1ezX3uVrioAgv3Tnd5HcZjBwLUEYdNLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTmPe3sj5jSptojZhBSQD8PGBSkbsmef4pJGaBwrzwYf97NPhRGXBpxtPWD4hXdgn2A9SrEr71ezuFu2sXNiKUF",
  "key1": "3gqvWztNYeJomy9Py4Uap921RXkjhVdzh6Q7b7BUAuBPDpWinLRfz6cMiWd66iEcwT57MY5QxjSCX8L6d7ecRSwa",
  "key2": "3saMeBFCp8x4ZQN2z7wuhMqHT3Znnt1BEws9kgvmyhDt6rv7agi36K9uVKCV4uQVQ4NFrQVpmbVNYzkEXCSqbhDP",
  "key3": "5FCvybSGpkFTWy5XKr2VjbyWnXzbkfgcDrvhoGKSQ7GYJ77ZZMsnD58A9Y7PKzrmzhwgXvRsX5DefRunFDp5HGFg",
  "key4": "5Z3sHPAt1j26u3zbZGY9aTaW3Bbvns6ypQ5WYngujZTTZa8xRgn6Wmqzcm5s6qTbtoAqwNA9Qe9w8Q6qF6LeiSk8",
  "key5": "2NBgFkiD2T14b8tugNADCg9Mut1uCFU2iaCSL3F7DMRxhWDT91dxGCVWLawPSzK4Huk42QarQyuwjTJeJGWiVGkR",
  "key6": "3UiAxXmQMCuUQ6y9eZwevCiEyochJU9zUntxo1y7eoi5p7L4XtKXwJ2r9wFJBfcaqZihJdixX9VaSKm9rUSvSSoN",
  "key7": "4rWegSYCdtZDtoKFa3QQ2tmoiwqCGAzP5kET4oBR8F5Js2FLYJzFKCGcTEAgL2tXtHttpY3xnYwyuWGZys5pcsLA",
  "key8": "bTRn4jhfSVmJEeSwxkV2YEiHqbZg55hY28riWLu6hY4kd7mBFY5QeFo6TbJ4j3heZv4k4AUjXbdpFLHbxixKLyp",
  "key9": "B7vK2m8iBuCvSLGTgKqVqk3jXqyeMxvmJgcjsmxPxXRFGsJRfhVDQXS9mkLt2pbGYMzBpiA4uGvoq5hdtdhBDQV",
  "key10": "2oRQedTj36aDBEubS78npoet1eNR5ZyCA58F91EZhrgiyhJZrR7hMp6KgpYF3GKYcFpbuJX1ga7qbwqKqSCb4zzc",
  "key11": "PU8NiEkSRpRzMStdRhTTt9yCoD9ytokJuBmkbv1FBFrJN612ndokCJsB1ziiB7k39eyNror3twazAtBUhHTRKvq",
  "key12": "5x9cTDyzT35dFinTaY1N3mC4NFB9fNhkwZmaxsj45DHG6yzE5hUDFV97eCZRdm7bA6eLWUAsWdcUgKwv8AkQUCgJ",
  "key13": "2HZZ7v1sZW7uKPyDjtfbDX79hYfjeVQAPRqHw5borJMGXbw7CVXAsgTrXf1FdxRiZJpHytfF5Weph11kp5JXS3k7",
  "key14": "59HVusAwfPwx4qVJrGkD5K44bdp3rHjyqg2yk8F8eJf25S5bt3Ba3FgeZiRJp6un6XBmzCMWFU5CxfxPAgwGhMjU",
  "key15": "4WSACnNrPySj6KGGixATN4MGm2pwZo5GLvtRTZBAcYchPfKfwPoMBfj66eDpx5kRFrWFzFQSQ4iZNAJHjLgFfPzk",
  "key16": "3nWS7cR5kaVGRLY8NLYsjtpfVHCxZDEMJb9m7qi8BsUVL9bztPwv5W7uVzYqeiP73ZuhRTiwavx3tkMnHPducJMj",
  "key17": "61j3arQyhLkJbH19eaPsjfTFX3Hxcd2cru9YsrLSiUewhMiTS9JCHpwgMZdFTBxcvt7Fg5UwVdtbYatDoLKqrUWn",
  "key18": "2kvepypC365zKKL1XUVRt8T9Wx7tY4p8PFL3Xvsv7vYhCAutipwGRYLFrpbk76TeaeV34ZvkvwPezYef6w9rkCCr",
  "key19": "21vCxWe6dXq1rtj72DfmsykRQ5snUnbAMLZHjDV5QLCRgiKouKjQBzUfpcPRLnVQJpNujoEUxw8zintgw4FuQxU1",
  "key20": "4BYPGZn38gP6bfYCseKA6QFRStdVnYWajKpf36Wb45oeF2g5B5YYbSNwC4UTxVBmXc5T5PTNw47ic6dY9pbEM46",
  "key21": "3XUHJzX8K7MVRDTTqYLmJw5JeKBNBcDM7fQawrie9RYRm9HhBjEbsShEAvmvYnbynepWQm3mjeHY5wqPwAikQwJ1",
  "key22": "5C4snUSL2z31fHrJDFg1VEd6a1DzDPRo15kj25FEsgDkL6ixHJjmNGzrk4xqHYYsUcWXrfsxiegS8v9XcnuUhCnN",
  "key23": "2iBUCLRg4aCTGKJdJsWJdYPFd4ikZvzyRqA5qGhn4QJZBT6NeaEVDmhKZ13kUxPPCWT2gWttTfyWji6nahKrWaen",
  "key24": "62kwLa2q3e1K8JHEttQSMejuKozHgCeADhdaM7KwUXZpnfYrCEtRZfWYvFMCvKNGL3X9oCd1oqtrnrqiuEDswsNs",
  "key25": "57wjkfE9rJH17cbAWdJH9bkjZJ71DaPkcvgU9ohZq1FDZ7j8ZoHzZFHisJkFc59vGDHdtBnUD5vCiGHkGN8Kd4vi",
  "key26": "2D1TfQvLYxyNh7suyKR2Qhh5VhEeFVjPpx4BHv5ZVSh4teSws9zfNYdZAcYK9SchdwjwhKedEbCu9URwrw9zBW6b",
  "key27": "4PvFTGqfP8MbUZVQoXMNdHLSjK3mEtSkiFt2csnkVP5meEu1w3zfw9LpRDAjELp83GbQFNiHiTf3scK4FpJzsTRZ",
  "key28": "5LPb7RmctAeUSCNyKbRxpW8ioT8ebFybLCEZUUNPEL9eyqxrRStzyDpBxL2kQprme7uExZ2FkSVkdwtfVMCErrHW",
  "key29": "2VSqtxueWsaQgwzBzS6SZzy9LNp5Qwx8iuG2NcByEY8UGovs3kL97ja4ZuNVAT8df53fPjvJTtET3WdVh6diSYyZ",
  "key30": "3arhwGMRg9WMYi9LJLsXYBxF1k2D89RJnYQHKa51Y24nEh37D4XQXCjutXJfgoGkd58kStPVgDm669Q9RntixSq6",
  "key31": "3b63REn23W9QRpFwMnobFYBMfZFJUfSaahz8hcx6ex8GqTWm1HmkVrbqZicdorDmWwGyCmGy4hYqRKNBDhjSELrY",
  "key32": "26o3CWLyA9WYfGT4Kc4rotLhgQ8FCJ3msd4jJWJv6A6s8pXEFeggDASvVH1ysPiCPXY5t7CWUEKefnEv2Rr8FUVz",
  "key33": "nR1WokzNUJTbWi11FpmYHtPtugozXzATMsaYFpBJ8pqNpxzh8SFNfRXmNcN5gYNutvri6iU1etQwzdRNzP6G6o7",
  "key34": "4RjbUkkcT9YZMbS2b8LneCR1FzZiRX5Sx6JN8fa2tjtjXDi43bEMu5ndx9HUN7LudJcxPsdJxbLU328phFsiEgts",
  "key35": "5UoZ86MGo6ioKCktnpiG6Krr86BcjwKJTdxdjTZm4NQypfefiGhwXWfW1QWttzk7LrzYDAYGJM2NWYPzhbAD3TGk",
  "key36": "27wjJUqr6wEAQDTxXYEXQgVZhoHUy9N1DGdwZNk4oNFWCqNN5M6KHyAAvqWUuzuiY6Uh84zprWQdjqVc3njsN3Vf",
  "key37": "CGshhjk15QXV3q8q7C1b2HRNc1dpH2LbUs9MmBBPjJTwvxiQaC6KvmCjQFhgeRdE3qJzZhQQ5xjcYjDDgCe7YFr",
  "key38": "5qk1ikbVhqRuppaou3yVn912veQEptKnpxxFKoGVxPHvCvRujotR28e7eY5s4dZxM2MhxRzrz6oFQSYGXdnE8ANL",
  "key39": "3Uv5hh9TR3BnPwihyom1yEF27dYKDSwg4Bdgowr8Mj93xi41aavuZNGJth4vannSFDnBMndbrbwvQmU4CYN9w4aj",
  "key40": "65fRNRWuDNaZvxBkqXcwkyzJmt2f13syv6dc4ygS6w8teqiAHujzDQDFJKas6CjJLHWZxdT86e5oPuzhfEh3Hd1F",
  "key41": "5aB69XxakuUUK8UTgwpYi8X8gcsLM3fDuZk47FS3EX56ye9bhXd7KmaM84FNusKrPx61cQrr4tS6jzgaTyQgXETH",
  "key42": "9pfWy5q8HTjMZA4rJe9vCAnQB2Vyg4y48eJ4Ag52ii1qx88nv5GfQwHV44AHtm9uv2BoPnJdRSxUEA7YEGCXbgr",
  "key43": "5nT9VnxdXy26R3aWXZQxJuwMKQ9FwjuGMgucquq9Te8mgwns4qLGdk8VQyM9QUrmKgxTDou6PHyAQyvq9rkCvzP9",
  "key44": "3MQEdEbbDiLVky11cr8cUHTwr5vKh99BCZ2QFMCbN4RK4vbnCd4sW1qkrFMzhACX2odrZwD1hcAJQ4o1UBe7fYE1",
  "key45": "3bNRReXTDkaGQi91gbvtfrevaiqkeRCF1K138R7Kp1Pg7zxzZJALhPNzMzjx1KynY7zRtVM67oek92KpFZUpGzAv",
  "key46": "367rmZJe9ZqopBmUbo6EvhnJJuETyssjCbWCydeaHidNYqfB6WJv7hnJEqXyXbNvB7jVN9GxbNBp5KotJX52XesP"
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
