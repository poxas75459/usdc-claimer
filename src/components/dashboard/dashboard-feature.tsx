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
    "3F5CNfnS1NY7FDKPKkaVQp7Zj6SyijoejozMXffxFu5BoqFVhf4UQi6P5Tqbok7fbTkHCyfMPv3AHRnxQ3JJP1VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g2kNa4YCvzYcqKSFDBBSL1LL5RjVxo29BhBZkRD8N8zNtLgkcMHYvRg4F5pkwYhYepEFq3vnB5D61Qxrbz7NyXw",
  "key1": "5i7WAtTRj67UQ3j38ngKA18rp4dP8LiDU7T8UmVtSzxE8Q7UHYzx5nJCsfZPWkNqEWaczREnYUZeaHHaWqN69NYW",
  "key2": "5cn5wfqtDSoaHqr1p3esZBMtAhUNcKKG6cEkXMFLWontGfgMU2dVf1n15Z4wApQGsTtBKFN3QAv3JRVMyb4QwxpR",
  "key3": "5FRTu6XLQdY8zEXL4rsYukE5w4k8bABwTBk4MKxNkt6wp7enkfEXobvs9MJR1mMsj8GkGEMYxyWXvPSGp9rxXqrq",
  "key4": "5ijktdPYFLHVkTy83set48HPPHote95wmhfsg2Bts1dqkmFBz2XRY4pa7hgPYPwkWNoWb7CAYDdx8bwiC2WQ8vnr",
  "key5": "5mwtQw915GfoKNcHW1rb5ssztkhyT2o7D7mqkLLJ9UitXdf5MzGoU2CimwMcH6yoosq7QTGoyKhx9U46P3GfsXG2",
  "key6": "7nA9bHiohf1wRnC9iHH74QvSJNHQYgf9S9giMBMnatSk4sLxv6VdfM25Jwq1iTaynWcgY7MXH184HixcWg7bQKn",
  "key7": "5aQyjnyr1f6FgUaZSCihPuC8EGWoG64CfPVvQEuiBo9x4xPrgiRKnAiVaoTaDSh2HQcsm3AaPJSQy9x2xocv5kZW",
  "key8": "4WWSbAZbQkiXoaE5ndAGsYuYTxgUE1prfTCNekuSmJF5W2Z4hER1tXhLKHgwbvtg6GpAHcWi9aCgf86rgvVDobma",
  "key9": "5vR7oLjzH9iSYiNZwXgzVXTMSf95Zvmx8pHh4HFoZvWEKpnm1AQVFGLDpqcjcxCzFUskwigEDtwqUF4eAtodrgWm",
  "key10": "3bYtuiAPkhonT7mFwPob5BQtYi1pv7go2HqDWRcx823eUDRaR3EhHEcVJrbSZyRE2TVX7D6e23xkceFccVrZ7JQu",
  "key11": "4b4m8gBU9KMnQQ4jGHj4JQPNrGRKfz4F5dphMXLLPEAUfC6Bqcbsth8T8oJkSu6GFdHKmCLHzS9akGU6tveiGBgR",
  "key12": "5PnVaDMCo2gKDUPpqjMN9uKjjp8Z7eKC9rneXvT9AWNGR7JRX6wn5NZAG4i2BXBpJtQWEbQGoXxAdKxkstDkF5yM",
  "key13": "3cvZeWotonpjEtJ3TYErzNeFPHm5cT9iqMZT4khHS2uWwV6YP43EWtKsDfRcXHhfRPwePJdhBRkwoTotHfo6FzFK",
  "key14": "4Q4ZoXSGm1ipqgj7kggBcuZXEXuCiH81VrWHF149vjwq48wCCuq9zCi7NQ2n2rKDjuDCdtJab66v2CGe2BwPistG",
  "key15": "2xALa6EqBXFq7yTPTH1oVeUuEKSvYg3zMpE73Tv2fqP53sxHJFRgtzZDd9YA3nUUT3PiBcZ2ENGngz5jb4ARYzJz",
  "key16": "322fSUJVxWrGTYZGohw5VV4hPzWhubTiCPwowFZkXaU6nHaDwEXELPycQoUDHKwJ8VmQjv646cFp6sDmx5vv1ggm",
  "key17": "3V1BEK8ip7RRyFqqfaGHCcrtBvwZuyCPZS7nLCjtECJzCceUchZTto62Yipe6AG2yAebs7YoWRWQbGeT6ZGHwQKc",
  "key18": "52yVKqV6MBtGZkHSwLogMyCdmCxUrR5T2fHauL1ZCVC1FhdaJDfu1gPL4FXSwnBMaPTy3WW9bJNY1gRdAStwShwH",
  "key19": "tP1muf6UqQhoL3cPx5nSNKRzsiDq5HsxfCbfZTJgWdTyrayyhpYPRrjJPM2ggMGRWdhacWnj5MrMHKHgFBoZaSE",
  "key20": "4rZMVsfueVBZkMNB4Ssi5sXwbVQvoZ1UeSVzRH2kP4f3NCh77RxBaMBcAXAgjCbL5VBKWRZeExRCwQ7rZaNT6Dj8",
  "key21": "2QUffeMQfDc7n2cAuQjVoifY6Q8wW5ufzKCdh7L6GFraNPP4vZhw4WEtxZSKzBFLLKihb6NDcb3FXiRdYrbBCPN3",
  "key22": "p51PzdMiQS9UC15657z9TTk1y2HeihUzHgEJprHU3H5vrg9MCWySrXopbHDufap1x9K5hvFDCtvoPLZ3HbF6uLN",
  "key23": "2DEUKAnNaRCy5G56f4RPJ9DJdY8zA5rpMaKmTnJ2E1LLWHnzSozSz1cGrTYqrDwqkRL7YiEaexYetf9AvxxRfZcN",
  "key24": "3T9LocHDXrbDH7Y3jqPvLs4ntZq2jpfcmqveJfq6FhXijpKDFcnJFdMCPCuoawbJUHr99H9K3xbJHQgt2yWS8DYg",
  "key25": "3v2XdvDLzvtdm3CY1Srq4EjEsBSAiU3dqpkkYay9ATQAPDVcwwJK3cKscbpkAJjaRgBqpJKpKVbQX2txcHSx9i7v",
  "key26": "33LAu4gg4NeiJf36HAbcv6SMW62US3k6CtQjZ23Zmnr4e8vuu8mWu46EB82YM5RyxAoSj9rxXTyAkWAjUq4mChqC",
  "key27": "4oD9Nnxi9wfUCv7UhbeK29gBG352HJqNXL9BMCXMxCQDDPXMF8nBQ73oCmikKfuLfGATQ7Vi4sWxprA2VfucLHfY",
  "key28": "2vBb3xK2UMxbLxvezSN7ABDo1osihwd5jPB41h1LAqps4XH1aBT584ZNFomRbfKRhV7EhhcAdntEf27rJygTYLU2",
  "key29": "2ySBmuQhGgDbKBamsqcRf6vXZB7uZX7NLRYdRHAswRqJkgUBE5bxvYc8z6xdZL3acuyFDmgwvs2ntTQ1oo4xdNQx",
  "key30": "q7ZLP7bvp5oqaSLCe8RDkyw1miCXzt6oQmH85iRmNLPNUL7UHP6B2aYH5WUnEuPpCPHkVsYQ4GQgodXM7HQeMrt",
  "key31": "5KNUessDVz2F8f1RLmRcSezN1Y863YUkBghdWrSownHfHiZcf6As2Kw55YrRXqgYGQBPT179HBTsKfa1zvbyUJUD",
  "key32": "4oSevNGwGhfZKpYKxmrqG4ZEvWhSsToZZtPJvhBg4cFZqGA9FwwQxVGyNUpd5gh4E5uC83KePi4wFKWMRxvddrbt",
  "key33": "3EKD87MpQQ5RDV4UKyY4AcEgBqPTgJSmynTWhhqG2CXxixtThLQ3UwpWKqRBM4yEqbCaUKiS9du3bJr6UB2Hgi2z",
  "key34": "3jYpvaLKF5j7EgQzsAp1qCMSM41fGXaRZ3tGCkYBQBXBQJaNefEKQxc3ERGkVS2h3V597M3312iET49FPAB41D2i",
  "key35": "TmAKmxCmmm5xZbopDk6gCSnPk9s8E83jdDYZTkV5M97gMtZpdS72dDBmRMzLYzhcVYEKn4VL4nd3sTHEc7DdRn4",
  "key36": "yUt9te1jFFatbMXNBp2w1hEgyYqjdzFSenDTGJRnexnDZxiTyuuUXHs9PL89BPf1WyN3o8AboprFdj9nMU9DBwr",
  "key37": "6DfvWkGz8HS4K999NC7yqTyKSnBmZHYmGUnu6yterX4KPC7JB3NKFhpFVKU7QKXVw7swkQ7K9fbZBAsnEVSEQsc",
  "key38": "2U8N1qLheqfRh9hzsjnSzoRiTa47WoMcLLp8k1DEMPWtp3tQ7GdoAnC9gbeY1UW8ZFeusQBfBf68YjbZhAahkMd9",
  "key39": "92dmBXKYg9ehB4HuHmC3MFT1w9d95rMNCThkbAxeo7VFePsaN7dGpBGPZFLATvBQzMLhyzERnAW8BgrcrcE6Eqs",
  "key40": "2i4hVBcgBVpkHr3Y1FBMBVi27VrBGzjNGtNDqSpGaUgYDHubkNHN24XmSLKinVWXdQ1FwZwAg5njuvBDFb8fwjcT",
  "key41": "37svMss5pbMTxzrquSkBWnQZKodAwPUKNpCGL7xnYTC9psH5CaxdR4SuNReiAUEF6ym3cnyfRfZj6qALgYWoR6rn",
  "key42": "23KLFaf8sgriJerYuBLWLfqQbcke4iWErwTLEkxBtZ6wvC2VjHAm6MehG6mrnmEyF1mx5H2NgLZaeKx2a6hNMU3T",
  "key43": "5LPX9XHLCGSsdLx4DKWtRyQhkidfhLfYKeQ58vhNuVyEwmA3NQ2YkABsZfa7c7q3T7sRNugmbJ5G7USwnoEnENEL",
  "key44": "5wr3GUgmtsyLDcsT5hwynEFSy65v8UGmhy4aKCGJob79hvp57eYsKGwBywWhoaWT51TxRiwG4K16HUWD7D4KxZ42",
  "key45": "wsm9NZEiv6wnUFjSwZ36QnnWyazP4Gp7FqJxugZRUFHr1meozSKTk7TeedtRrxpW2pyhR1e6U6baZzMmdBQiKad"
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
