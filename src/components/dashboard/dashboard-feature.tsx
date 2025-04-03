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
    "ycPTV1mVVwyBDQr58xtaCE85HfHG27rC8zSNd6jGDyRXYp3LnrQYfwvGXjYfbUh5iuYanvWecUvyjHrQb9CqAKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZnRWb4mSR8G6GKGqaojgWLSdpg5vUpKvCDgbjDUNJD7DUsJxWs6viVrgnpYjD2D1MMDv7AmzGFqJKMMe1EE4Zd",
  "key1": "2PawHJSkZfxCT3sWTu5Mz5A9Swqx3BjgWjz3zQdMkbrWppYe6A1UibDqYvTXP9h5KUGioNwUmZnzUPDs3N5ZPZkn",
  "key2": "5ZQpyDnLD55mZvcWESqBr6FXPBZwSFdPg4cLyf188oUJKREAGK33jaKn3DFukkCwZkVetCLvmZ28rVeP3h9fyC7Q",
  "key3": "5qRU5onqdjntnuAjibNdAkGuHn75bfHsdGjQzu9iY1xsGctCsamNHiNmQX8a3Vu6Ziag7AJnbc97f3ARjWRjR1eZ",
  "key4": "3t4eNoXVaWR2ofk5yaxASbGvw8dyio41pGx4s7oUv6PfaHBQX34CV2NZpw9zm5VvYNMofY1fcuytTfu4zfUjsAdT",
  "key5": "675iJ921rnJwRMTMuAHodniwu3BvuDJUQUfQnCovtNdLkrQn2wV2yStPuiT9RQ5EQG6s3uiq4NX9nCs3BfQJtCST",
  "key6": "wSf33b8YULqxVBDVW3BJX36vPzxYMgsef1Z13xJ6ivbGRy3Mgxu3ZsTWgwgMnJpjAT8B6DFKoasYJ9zQg8Wiep5",
  "key7": "jp1SrwyxcdP7y25hLAjVfcLEadu1JGqbWZejHbjWLMzoee5ZFPo3LmFZjMxd43zKZxwWZqrJGgdc3CWCCGF7Yut",
  "key8": "5K16Xg7NdshQw5nvsb9u9tfAixW4e9dvwKFpofxAAmPDf9dXom1q5LC7F6LgvMbqiALzShgQwoiDme6nNWEcng9E",
  "key9": "3g3yVmfRNsGA7NEtf9LNZjzWU9zDowmdQfARhkp7mqrZutccGTXnGDaEG2nrUGVUjSvaQqKLzjJ3jQT4ehhfhpFW",
  "key10": "4oRSDXGxqD9XVmPm93SrS5EPMYVn5QqSNbknQiBkUgnZmidvqHz6SkA7styV3TYNwgfBa98yqJUXUzRPpaTkCDrf",
  "key11": "3nkiQrxah4giruwCFSSMTbmXFP7RAgwgLCm3keHeYdoE6uG8qAZeoSmAoD6LeXcJ6ysWH5h8PsnszEumyCswBMUT",
  "key12": "ERMBLxCYRZmbgaSfMvXBdTCayE7CDTbDF8dc2NvY8Q4g5a9sZQtZ7kKdVME7xpQ1c8Y1vpu3TuYqBB5RHe1JD8B",
  "key13": "2hyWK4YpPd7YSGdWdeRSxkFwbFks2CWxCJaFTuML1RWrDS7xw8BHGLJZpYyu9389ZpMtEd3ZtMPmRGzF2z2E8Qco",
  "key14": "2T59BPP7eep6HKEVLkcUWZ5ua6PsLq68KvUvVv7JmYaCrP7LBzLqJYgLRnYiTPCoFJMQSZt7h3ciG55uGiCJWSut",
  "key15": "5Zg8xhHUqNBs4mxV8456fn2McE1Sm6NPqrhvUhRW888p7ZmpwgRx8QVQCKHHWgdLSAAAQxAaC74b6sZirfmtfE3j",
  "key16": "5xfDRkBjEEnkVNqYKegmA5Guos2gTQnaAsDs4GhVQKAzYjPYzDHe1mJdrz7PNNKKiXYoQUPvkpdcUZJEL9d3rJnB",
  "key17": "5yecJT4uPFSCFVPEwYKifGAKrw534jvuqEVaFhR7YLEbiz39FiTSW7GjKZWkn9wCaA3cJZHvmyvJEWSfDe43Lak1",
  "key18": "3nBKPaGg9Vx3e7pTGZPBT2dd1sR9g4ys8zUHtXLjjPgvyhY6vyX6yDXkEUQiB8kxWfbTk715uiaSsymyh39vP3w1",
  "key19": "2BqhkGmy1E7DqYdn9kbsfWufVVfUCrpW6Nr3Dq8hAeCqzDaJwKGkM1PG9QDawLeKDZTjDof257dj4J6gWx7qbzJv",
  "key20": "2HfSVuMLmBCrhxQb4KJf6sd1LmoxSA3WEKfWEGt6ob2eHQREg8XgjZwNMJ6VvnR31hdnkqxP7GmKE6mBLo5mCfN",
  "key21": "h8ABeyXUcyt2SBtSXqN9AYpSB2WgQ5jXX5CjJAnb5tyUroo1uXi44ydQ5M3ssa7awUq5d9Wf3TaKYpfNaStTdQY",
  "key22": "4sXSf8uSkAE9sLaAL9oqHLmfoGXQYwjD8aX17M2Dfcga6gByLUqyNLs164YXKGrXDHFQtVtEZRpofV8vnqfghayh",
  "key23": "6MV1ECc2bsDC9wacu7KXKagqkAN7qeMnAzarNhumaH6zrdzZjgGNDcBBnyq1iCQkn9iNA9vuEyvidbKWSaHgRKd",
  "key24": "477zFuYaxp844PubPvgSLr3cwvrWpkv6j7RreUiGeZgffZ6NbfaGuTNV3rFYRpmvvLo19bL5HaDvM6omXZJiWDvv",
  "key25": "2YHuZaGu8EYEDK3ZsRJ8Z99yaJMQLVu9Pvdb1h74L4mnDb4KXwD9Ee5hftJnRuPmz5hwvzygo8UnQEjoHWZsnnNt",
  "key26": "XctYmm2EEX9UmttSd1cZQKcKd37wynquZYsSQSi5wiPjfvkinSToBnHDtqgMreV4fNnC2LSb5SLmcpKfCbTSURg",
  "key27": "5UPo1a7kfsyGwCFehHyq1oNso3E9SBxHxjrFyHwpupKgYdFng6Gom34xRKhrNCaFyFaSXdprfGQHBQzKzsYhWW7z",
  "key28": "4sxsmiBZbGewHayaevP4a8varw5kL3DRJi2t64jnBkFTcwA2mtAADV57d9iQkyyHBY3sQkwcUYgabj94vBzKtWDe",
  "key29": "3FA2M6E8e6A5etC58GmiVA1LffsLaSizU1PGoE6HCR9rWBRcyQtSaMKLa4Ege43YZkA1RntahY29U1BDoyMYg29S",
  "key30": "3HMa5JMyAMCsz98AWKjjUCPuVkbjCYp3iBQQwCQNP4mTq7uNEpmMiSqetq8W1Dngbnqu8cxqKmqNbEap4wa8WXam",
  "key31": "4Ckh82tvLsaFw6TmB2eDba1VZVyFVA8cVBo7BNQVoCw2x6M6Cf6Eccv5iaoF29dHAA1z2eatjJoEUyWra1XzE6MM",
  "key32": "2AFq1WF2GuSdZeKBESqc7SdyYp2GaySh3CxQWrEjzdCrGqGr6LMHCofLvP2EExvzshZCc8E14LpM6cGby9zQ1sMg",
  "key33": "3sSKBJxF9W6QX3y2MzoDeFRpjfcPN9po5F2xd3Qef3b4TEJW8fhrPFspvCGKFTMJDBje5y7d7UxsDTcLKNnerWnR",
  "key34": "44sGWoA3Tm3yxifw2kFCm5ac1pHBqoZYrMLYcc25UniS2jYj5itGDAxWeW3ULwjeU7A78qa5z1Q3DBQsfuKVTYcC",
  "key35": "5mvPCfPotcyJETqcR8R3LApicxN7DYRQ66yPPyLjQjDFxRUn3Bmc7FurbZzb45Pv2HLT5SbchdySz6HyBm82WHP9",
  "key36": "UuFsM1EtJTG9HVp1LC6b7wctc5TMEiquzE6AWawJe3c2FyAdpDyhahGWW3QAPJSMiZv1aCgWfY4ygU6BmtQqH4t",
  "key37": "E5Qh2NNu7VtaU5vTfuCNzVYEctVopwoYfEAMq9cScXJFxaSTixBBhNPmyaALbjXLevigthnfhsNFbDXMA97t8Uh",
  "key38": "5sccdLb6g4H3414bzC2osDnbEY2SD2ywmCHoeB1cWjmzDGyYz4gBsFoLeo7fcrytsKZTqWgLFphQqnaPW2cRk7EL",
  "key39": "2DbwA6tFF6r6E3cjoCuZy4SepW8bT5bVcBDoELnckk83fv52sfGgp9kzDdUbQzEHocNJrwuzdSW53z66TUtcncPE",
  "key40": "5RWjSaAHhWPfqxZVgWU5qBBWNvDj9HAPstX33pyGobrhtMCrR2eaiqNfYqCUMb3pPS2DUjU1YyBkWAPK474B5wak",
  "key41": "49S3DV2qbte9JW4QBgEEnqTEyS8Pb3nbrrtktutDMtcaspPctfw8dcikxH7BTTNHeXBm17XfZ1UpvHLUT8nqZVFw",
  "key42": "3whX8FkaVqwvzWfWFuAZhtse9CZhvamn31QCGVaYeDWvxPX7nnU6FrgBfYeWoUMRAvQBqYc9FUHd4WGUkLm3UMib",
  "key43": "2bNnvWR74XtGiTwdy3mmhbok7EUauTRRFW3WuzQWnRxf1C2AnxhVCxfUqXzTRXUGsgeuKqo5umE51RbzkPWR1fEb",
  "key44": "3UrvGNu4vBeJL95BE6K8RPFboYRZcgj7RVKDAG3sgrDgBqq6ZZ3Bq1ZNYVbVkYQDh8iNrYRC9VDBXW1i7AYB6NTV",
  "key45": "64Qm8PmA5NrDjucs9rLJtixMG9dwaDuNjJTTFmzePH9ozCAX7xA56dZFaox6pjjiu4q846LEQAqtf2vX6t4pFzyN",
  "key46": "cFiBas3mdH2WZ1uWWEqqqxPR5mhDtiUXuW9gphafwqtyd8SvUZs9cmWStD7DVuu5GnD6wFfiN4kKU8qjzzztbeT",
  "key47": "4HcC1GV7kj1S5CCfzk4bUVc2VBqPgnbaF6yKBxamhpv3yE87mBXqPMGguaA66Pswz3dSghTtBubJTDUns9TJYybA",
  "key48": "49eftkmsyEFBXqTdiMLtkuMmmseafd7fsLhsXrgjKHJL3VUx9CsXPRG5yHPQ1qYW1JkNH1tWZG3FkYFU8d6sA8g5"
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
