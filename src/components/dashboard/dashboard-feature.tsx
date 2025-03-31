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
    "5GD2iMtBLc3RemtCrenEvqw2u5TL5B1xqsfs4M3kXbHviAXV5J1Pvt5ZUS1VCCT47DHVTAKBkQfTaJpVdEpam5oH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K6phkf2aLs2Q8D2zdqJfPBAzH41mQC6iYECjsjr5CcgjbLPXRKVUedtvjWD8tv9HjXxZNZxfJ84yfabZm8kEjwH",
  "key1": "pZx5CtgPXXoUHxLxKdgf1TRXkASBqzfyWBL9MHnaMAa2Ko51HoDa7MNEuxedFBQDwGoL477xwgbpNeqTArYRa3f",
  "key2": "2Tt3JbegxHqP4n5nCPvXCHGqs3wfmPRVD6DKXYrmwde8RgX14eizUsJaw8sdrpJcdvLfogk2FahoHfPEASqCWwQw",
  "key3": "55uanidEWvjvs7uduut6fKsG2ZtoZYMrfcaLP32hWfPgUBpwYaqocGjJjRbcqXKpS9M2HPpiQtCeQcaU79D6wyWM",
  "key4": "5p7dMLwAByzNsYU9radcTUby4dyhvqHHJh311o5XiM3jihDwaPpoUkDAzMfpVWpXwcmxBcdhtPL55D7NwXq61RU2",
  "key5": "92dZAsBcu4hgdEVEC2QExLsmb8LJfcRWLNDuwX8h5s5MyijfQxwQFcTbA9FcmW48CjRfi7Cw2ddmpdqpn7HKVbe",
  "key6": "4A73XPeJA1WhFdYnCueaK8Epm8QFnxmte7tUas5DJqf5ZEp8TDN4wPfwG3YBNHUYwvrLf1Caoa1xsmEjj54LLGU4",
  "key7": "hHbx1t9N5gum1FDt5sicBkCYxM93aiBYUgNFNsWB32rCn7W1qRDUL1vwBn1F7c6uRC1PxDc5xsLGA91HTKLkGP9",
  "key8": "5XeQdxyJ1RsnqbP5p3rkbBi94AStbynq35MteHUSmbEjBPqj2r8oEPhiC3i2YPvT4yhCQWbrnsoxxwRhzb9CAqfu",
  "key9": "2aYNQfQtj7RRxBgFBTUkFD8XS8yJXrQkc3t3PAaZ1saLFimJePeDrzfrweukyKpDSaA7U62AD9BtwSyZu9BVCTu3",
  "key10": "4XwREp3ZDpzfaZqgDvPr9VJjoVcGNoLWUyXRsgJkTjxaJWiJCswxv98D5YZ7MgR6r6EgenxUNTPrM2D8RtwYvaVm",
  "key11": "3jJkkobVus6jpDXzzVBoQXTweU4e6G9D6sTCzGyPnesAKSF5tsJLCGP2r4KFBcuJWU6g8fJcxjBeaG7bSoJ1Cssh",
  "key12": "4Skyrn9b9sfnNFerJJpQUmcPKJ183edBsyA37QGZ6XHo3a2Eu8aVRnPgU333r9Qfu1Cc1sJh2LA1mmfu77V5G6vs",
  "key13": "4jc3z2RxxEre3DtEM6QT7FChP6uxxojvHBHxjCuUUdNgkjE9PGf5qWatMkU3NgtoycTpMxr1Hykhb2YvdfrTBNYC",
  "key14": "3NTELtbvtBqHsRkPbaYsSz7Wtg3R1ScHfywjPmKnjAYogYNzVczLR9DVrnrcA8UvFUu7ebYhjxkPjFoBQN9ErX3F",
  "key15": "4y1WYzQqqy4C9y8ubR7zvkTrUcv89BHasT78Ye4udd7tc5iuW6pZoABfV1vdp6UHemynQkfaf4XKyToppQFwcePa",
  "key16": "4xosXBLn6xbP4aXb4Zxh3Y9D2J3c1RAfqvaQtuZEiSAG8k7aWNJrqovYESoYTE41SptZury4pV6Xo4HqfwvJ1GJG",
  "key17": "5JmjgRoks6S41Zy7KmHHtowLUKRQqHvcZxQsVfvGp1kRgcnaJMoyYy9d3whqwNLnnq4oP87XKCQ6u5xc2526oz6s",
  "key18": "2Jb5GYJvZScJpyXq6fKBs3LiGPv9jVYXCfRfCsc6hkLbfyYWYSDUQTbhCpZ1xyzZHwWSDW385VxwsJLi6tdSme2J",
  "key19": "49si68oAnwCBwbXojiKooWKsmP6anpS4mvmPg6RDMEv1VJoRsNcBygRpGyN4H6VXHasukFe2DJ5noGTDP8coEwbf",
  "key20": "4wBvxbRQ9QaMJGMBcubGYPwz63oEGiVrjS5VbbcpYcdQCHsrNX4XfJSC68cffLuqv6SPj9w6noFVbfEhTrTRrkfW",
  "key21": "4kbN3b6Uq5smVd8VH6cRbk7A3yxLh2ALfM3h8S6jtt47CgfHy5MJTHLLbuiFwP4qCSftkomWB7VnBftHTn8fnQtz",
  "key22": "2fsDNjEFuGydmdvJAU6awGevSYNULPRqEDTBgPCe9xMGqL8KeZYZS8vorrrrXeScWdmHfyzuHnW9sooJmJkmVwdZ",
  "key23": "2eNxF6DTBiDzX8sMPcY1QZ14sMBn6MwRQCC6v4KSjTxKyGsipYMtaEXtN5wycrJoPopaKzV7soDH7pwNZ4HrPjTq",
  "key24": "34KEwyAsceyYkDfamRXis3YR91Fzhj8c9JTpzoXrvVJpkcJtcNBiv6f9LMxjTH9wo7FnC7BHi4fzXX3hn71bFieQ",
  "key25": "2UkaREoS7BXQgX3QMheNUf39fxMTW9AijxTPBQpMMHnEV9iy9M1p2JxhsnFKp9436uusPCTUT2nNPz3nrm1eVR5m",
  "key26": "J91mm8y4CdHka4mnogM8F7WjKVQWwFxn3adWxCP3jSikChh9K3yzLEJxezLkk2ncqnSU4u1w744YYni6g2EEXpy",
  "key27": "jSTkUMfu8ZtE7TAfUUzWjvHqnX8ZRSZ3dRTejHjKT8LUPyauq8Yh4YdAivetkGNMtqFvaFDbnPAMFy7tqfo14hi",
  "key28": "38G6ofcGENqEyE8LAVSg1ikMPJxbfjqwJP2gYUvpVQC3Q4pU3Zus23SY599fFikU83ncUo8KhHJGMs4SWyGphHte",
  "key29": "4r9MEYWwkKpDdaMyGmr7p9Sj8PaecU3gJ6rY5efe4QmRRWSh6f5FY8YtrDAZWv4yEmnkwX5U5JXo3vMeUcKJeeFd",
  "key30": "4abf8QobBabnsLT6i1KXFwuYhEChjz9Vc5SQfmHRweoYyVHxiccRgorKAJgeiAxN15Fdz2YhcGkwXw64Km5yPnmw",
  "key31": "2bPjrBKwCoK4YSMXfyFBHrCDVa2y2cKME4qFvykF1uZeVp3AaaaK8pdWzuruRNugQj49kAhD3ZVWymQ3G3pjBhzd",
  "key32": "p4pcFHipGP8Crw5wQUCNy2bstBvXnGZoivzdw4njZinxawNFz7UiUDnP26tVuPigxKhvk2SCg83G2MDpQk32vse",
  "key33": "4X8M7p2DHLLBKuGfB5LMqL1jE3w1yTWR9dbzdphpgxBBJ5ZwujPsNoS9tNSU5Kb1fVs1g7y7pyzJNLgz9Mw2QaS2",
  "key34": "3zyNmAMp5mjUrz3BydXRhkB2yEEDW4649PREHipqoG7D3oznYvY58XKedWnYGjRz3F7CzA453xNdbm7vkTfWbwvo",
  "key35": "4WroLpptCDvp1S5hdGLmFsYCH5QGfWpYfrK1bK8FVukFQp6iDXzw2A3CDnCt8DZxkQEyRYK4eUXx6CJEZtrBrK5R",
  "key36": "Snw2ypxrSmyw2SCSGJwxJYua3TLWijRY3SgLSTDrp8nqTKL7eZyJVVNxWfUNvuuK3pzvQs9YEp8cLe4FALgf9M1",
  "key37": "2NkyWjcc5D2DhUn4fNDmod3gtiaGcNB9tFk1oo4gnYXLDuJuwuHZgt1chDCeK8cJ96tBAJuJqbLazhkAVKrci5c2",
  "key38": "43vVKLvY9vadNj42kke4sfB9bYf2Z4heEB7NYVCFs4FS1dMRfTNWGncFQ2Hnb7F2HbF59A6Bcwo1bcA3WYdS88Xb",
  "key39": "oWEKBaWN5qYDBrfkbTkZZsZTXZ2JfLY3fLRSuUBkpYnDevDMvcmpGXQTLQoDXXgrWPGTDBV7gEvig9qog3AEnA2",
  "key40": "XzSCt7p6VGZe53XAxfgQtq8gL1RggHxAbM5PPf4DYasus9JqKPsQdUoxs9ZXx77ZyZNSW5tCzuPj5cBfehx8TXZ",
  "key41": "tBP12Y1As1fuEME9mbdtdAymNiUqPyusRLHG893ymaR6LXQqN9fjkj5RGAuQ2h6kbXvcs8gmRMpupJih7fC7oCj",
  "key42": "5v3j4gJNG9rTJH74hRBHwapxzQNHFkWRAdzYBsqZhX3T3NgBhXdg8qLzeUJZRi1BH8zEqidwsg9LJFFQ7eYpviJd",
  "key43": "3SnxqMsLivWv5a3cBApyJK5PBZph9iCQDe7eXbAXieiDL615PwFYc8XrTPzydgVeMrU47Kqf7DHJvPYSj5Yji7PK",
  "key44": "2pvy6DUQzysogujqhzN2KhEvZWgLiTsr7MXyZgMeehSZzkzr3kTjoLTrrTu6T3AXFBGV25qSez752CPMU6p3sMvD",
  "key45": "3yZaeqs1No9oVxY6mpTvQ3Ehw9rBGZtX4VqRNCTirvD76oSZqnmDtw1rKhehrvWGxoEvtxDFqimxgojPhx32g6qY",
  "key46": "5rdRq21aDcEB9bze73qyuk4P2dWC6SGkcUHPGAx1J6F1vNbUvJh4mgSZxg548cBMY966c9jYHCRjGjs89qRiCcX"
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
