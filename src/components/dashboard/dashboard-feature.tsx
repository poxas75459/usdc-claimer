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
    "4W5TMwjdxJXaw32Z4wdw3EecMQtoQ9fmzK26jqtcEXoCV5FwB8Nnmspy9AC3qWrvUh5HWpKaXSbgAqwfeh4UyiEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRsQvrYfvFRUqEwe3aEufNKyYewpVcysiQ6LJD4MaJ6YoxZUt964t9KrKPqTSG1xZugynfCujTADR59TFkHcsqm",
  "key1": "2KDrUkhv1KDtMh1N6TjQ9YRPpRVNQU9VrcqJ9TXLJqvP2Q6Nxg2LtymULzUCyGrKcrbzagLyaJvfXEWLCSxanpZD",
  "key2": "2SXKVAN6G3yCWTkRq48zVeKxAe9UKFdWeEFLGaVcC9NUZrPqPMG6x2FLeYj8vxX7GekHbyPyDcBKUfHgRv8A4k24",
  "key3": "3sT9MdC7oazGnqdR12BUWe33S4ZtZxf7U2xdhk5vhbWJrucUSNMTfnV7uQuycK1ybWQjk6AQeDsHSKS6YSTzRjmu",
  "key4": "5ChUSx7QyVE253dNK3wCp7EKyRX3Vwqt6scgQmxPUWEMQxmRYp4tZbho6AVmr5XBoGHksZGZZgPciHCFP9mRjDup",
  "key5": "4WTHLZQHbE3GgwCDi5wzeVa5YrhwCy1BHwjoej1FFKt6dgQhhmJV2zvEofsocZdQQVUpbQj3w9UgDvn51o3ptGnr",
  "key6": "eva4AUoi94TJFgDUHj2vWVCNk9oJkJhP9rXhmdsfwWZZN1WV8cBnpi1ZBvxyeHrJTHQJVbbeSSbSrEwSsYYvhRc",
  "key7": "5FKAvJfMVqig6PCmFYjqkjkrMiJkgyDH3YkkoSgZBjdZN4rEDVdWGE7BrZyJBzQqbFCDTN2eLaoDscv3EzxQ8fy2",
  "key8": "3VHppdkyu7yQydDm56TXzP9CG9xQsRcK8uxKy9ZHarKBxCTQ5Fk7RHmQ1txEwMSFgFMNnKqJDLuhg9GfthpNsVAe",
  "key9": "55MZdUbrJcphYtBFo2FP2w4G4kAEndgFVgH4yEJZhZHoyjT5oHWKFxEPv6aKLsfs81aPtG4YtzEck6r7Bqo2wBLL",
  "key10": "BQSbVY1GLpBpuQH1xGRqF3o1Mz7LzRGQrLGdQ4qRqmHz5c4w2XZKkbrZ2aVB3c2TYfaf5orPJBB9g5DmQSrVKcQ",
  "key11": "49fEDRwoVqzhiakU3rGjWNv9zxnyhUQr3ftXbf5BFfLLVDNBaceMpJqwJ2LNXnwDtcYbUYgYpPo21jEXPdKbAn4p",
  "key12": "4qKptk7K2Gm9Ks7Gokc8bAhMmpBnwpMetLSRne7FUJP25Z93WZJf5cAL74aES6Pjnid3eH9qGLyYVkbW3UmsXHxN",
  "key13": "3Jd1Fvyy6fvH1SX2PhWghCPW4RqGNeEUgAvxDcD3985qM56GueD1fdr9jCJL5KowR2W7C1y2S5eoDH1it8ox8W6H",
  "key14": "5Sv4LWM2SKcex3y82a3rddBus44AKrceefXbzGvsJtkfUoCgDFkfFpc5tHJBs3gH19N4PYjUSzqmocVh4eHbkWnt",
  "key15": "2YpWvwKzUKEgwpnQuxizqcwuofDvAkw34QfoeguqwvbRBn7aRHYQ2b3eHhUSWj8JBs5g9EFRG8KACNx3fMvMquV",
  "key16": "3FSLX9YUyNr8a1EAeRDaursSJmgEhJPiffFTqHWXsoBt5mLTE3VHXBSzCut9eiE8ZtNbXYUu5JUayPyECsmbii12",
  "key17": "mckAZZyo6uSWZsFoF8ESpDFHfQEYihVnjVSM8nyfAZakZKzGrp3u8mJv68VyLGFtZR2NPJFVfCE7HfzZyUT8kT4",
  "key18": "49dXcyoB5iWZGe2vnbnZZz7JC5hb6YN3UN6wqbqS24rNFk6UuuM3tr3a8NcSqK8dGkBhvK6P1EqMvQUGkZEJzyUL",
  "key19": "33G3kkeLv4R8bYsPMXFi6dS9cKBuABSHQfZZkF61WLC3TsiZePsCLx77zSo96aDPPLcuUD4uA7cigcUvxgN4gs5u",
  "key20": "j9Ckw2ZJdeaqH74upXcwZF9VepqmBXgCqutNvgxmJZiC3c4QogieC2ur282ChYPdMVRHBpUfBzYiTY28HDe7Zkt",
  "key21": "5ozw1fWQZBcWg6rFrMqZrfM72YXV183kADHQ1PgvZtPxpdA2NUx45KR7zq3SgCVbuPjNMid8fh7jSxBxpxJhw8GH",
  "key22": "3f3ab5WwXNbqkfybFdfbqvL2BshnWDMNkiHWU7D8DBrQf2aZF4WSKUC1hnnwfhxSK25Z31YazJMYfuUWhoAT7GDG",
  "key23": "5fVw61oXnconNKq4oaKaiKwkmRPiMqczAAA1w3W6ouPra8kfxLFeESK2pZTmut9YHEhQoanVaTkQNyKgKbGp8nJJ",
  "key24": "2jkB1Vy2X8cnKztUuVBHrhw7kZc6cAirqXdu49ojiH1QSF34u89FMJuFQ62JHqeQEsV5ue1bCiCaQkq1QgQxdLUP",
  "key25": "5j8BETayZwZSCzcFnydvroiiimP4b6kYVVNqYfzftSCuBEmvMxexyNU2nG3RBBg4DyeBtpHztPZxA5bRWQWznUT8",
  "key26": "4bVR7te8iccY1V4FS44QJmGqGfQUmV4oCvTf51G2iBtS9azH5oWyKfVm1MEPXp82bXGNoFH54iucEXBXxnrua4Qw",
  "key27": "5d96JyWBquAMnrXKxDUVMbv6G4EqDGhrb3DVDsFjB6Gp69xmsJbQVF4f3ekgVpU9xXZdbN7zKuWz591wSDPBUZk4",
  "key28": "5wzg8hBTpmns7ZNKTGrW6Sm3ErPrTJAaXF9NKLetG3mme1GEfyR2ZTBYD2FqFJygZFpVNqdttXxEof7cPYo2igMb",
  "key29": "58zGs4Sg2vGiP71NiCRF6Fgw9MeaLZW3TA9q8gA1upy2UfM14QXvm3y6bytBv1tVLR4nmGTYw3Lh9WQxJnvK4KuC",
  "key30": "3uU79XmUohDenawNJfcFqf6ETib3mc7rns5RDoKkmBaaJ5S2oKrithxxLrdCSpxJYmiMpXjyPDb73YzYAAHy63C3",
  "key31": "2mtDxqtZhYkSckVjmUHvdnTo7jrajMQFFiLT4ByjoSSFHFAVDAxigHEKhiU21RxEmzLhXKQxgPLCJ48mezdyRiHq",
  "key32": "3WeMn2pUrCAWQuENgVMQc41sTJs4fLwJubNXB4hWgKRBEbZyQzp1mHgPrUvtHC5Bx5iwWgqgLnBf6skXu7RGwqB8",
  "key33": "27uy7dnKFPe3iLEEtZxinZ7CH6ipbwYsdLBEbxJcXQJqZn87EdWWJRyzVaxh3VKkTSjSvH7Zk2afiWvfychRrL1L",
  "key34": "44h4aMQyzPcEeRhDgHRdnKuZTzTt8KYrRQYNSbbRdzHSsJ9dAq8RqRjn9kVgPQYGE7eXv3bBvtokkAyaSkgjk7LC",
  "key35": "32hmNfrqz34MfBMVn9bZMhpHzTWZdqSeApH733YJ1JJyc4ppqHqkkYztQHTWegoRGGqrLwXWEMmXiFc8ZG9z5gv",
  "key36": "5zVan6jrg96hEjCCkjwEbtraWiBSwqy9S4cYwPhB8YCr1mtJk95zGBN7DNeNBPBD5i7Puk6M53GaBY5eSKB2wVNB",
  "key37": "3arzaHbweSC37qze9exPb7483buJWMXXJ9zxgjU5mbRCagqCYabH1xLDJLeoX8qTak7hZKNqba2iBLnWTnTTHqsp",
  "key38": "2YShFswvuUfKPzKR7NVarbpsPNauSgVmLevAq2Hxj5rbiJ1ACUocKhTN3UkGiurvHVpZJSeGbMeaaZG5asFmX8zq",
  "key39": "4Ss26dy9d1gELHKNKKRTvMmG4zaY6iSVMXqjSQxXTPXNNPQqf1sP9PE6EL7RawyhmrzxQHCELpy9HRDVsdtifbX8",
  "key40": "3uQbUorLrxLkvLZnnLAZEpz1uKR9V3hqHLq2bfHykFQJFodW48VeZRnXTrPEQ5Ce3zPbprLm8H1RHSXhMd8X7VGd",
  "key41": "5hK1kYNnATjRZPpqbK655Mx6DZepDx6J5yR69GwFYpDwiQ74erq7YthVc24LKw4L7nDxPJQqy2GWruCZnS37nTpR",
  "key42": "3zAjq7rcBA7ShPgAKBUMcway7e1jMLLCsAFcmu9uLiumQzwJ2mYJwZ7CWbS4QqESKmF7z4MQtYyxk4rr2StGYaxc",
  "key43": "41Y6BPAba7aYhbajhFRkroLwtsgUXre6RsE2vtzDpMBu3angHSKAChZHsdBScUmXrfx8RsXhiooezqbZsXNqr9Wb",
  "key44": "jeFYoKb2UEdr1faxjKo6AWpy2wUSQvnxEDnAPRBEi3KtW5pLiz8pQGdAU5QLYShm4eTZWW1DDpkh7U7tLUt2szC",
  "key45": "3MunKDmXj3p4HuqBNPb92dBddtzMafABJKidPFhUjBwVSarAZ1TaRw499XmELvF6yhg5rgtgqfq2iUt94AoqKyjn",
  "key46": "31i7RdiMKytcbi5cTNnAdT664y73Y4nvZdRpW8UJ7G7aFjhVW9xVQS91HnX1L4npcTj3TTazWB1F3PEbfSmt7BDA"
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
