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
    "3jNuzmh1M3CSBu9SSFJR4eXdNLtjf5QA3UNjmBHxbUxVvfwUhXB1NibmoYsy8fBLZS4kgKJ4aXGK32HMJ57n2jpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkngs1sUCeNBNEoDpfPYAW1uJd9crhx7tHY1chYRa4X7c9xh1Jm84ivYgpvpyw8iBPP5QMASi13EzMtGQ1MT9ef",
  "key1": "4EsYvJiRUm55d9PbBtRzrLwCsX5VnEkneGkHxUWfHYDUA1mKATXD7oQdkakQMQM3eYZtypyPiqMdVEc8SBpspT5U",
  "key2": "vmi7Vm6NkRiCftzfXDWupv5xbHEfWokyM9K8PoWpc24rCs5ZTL7gDekuELupyPy4GNA3CSVVdAnabtAMyY2m72P",
  "key3": "5hhKVAxPonZkXaNr81CALx2BRLCfNocCF3NdH4ZHpB1xckMhdWTq7pib3ZrRRvGSUYGHoFPfGK263utdParsWAz9",
  "key4": "4QbWpoajw2f8mq7tPoYo1M9qKCT3GguNMFdcy7KTEEgzC6ghkPFVFhchu4eE7eno575XYVV28Ba3k848B1Xma3Kp",
  "key5": "5yQ7GtUmmVu3g6t6zmpq1mSzPmBuSJ4UZk5DxZETkaCwQ56sL9CYFGrLnXHUVnhxAkvBCMTk69SUzbdybEkbUvyK",
  "key6": "4xgzGEeQt5D7Z9A5cRqsG86CTRcHwcnaHuv3haLrjqBXgchLUBcro6BgCYMqSF2dFKHn1d8Fbrg2vDdqKHoAvxWv",
  "key7": "amuNRjstSmWAsodbugmi7PpuSBSweQa2rseXPPHzuhdVUmKQaU8rtxBnQp6RLG9tDtGFHcD32YJsbJAqkPAXv97",
  "key8": "3NJie5hLbypbHWrXd9inHkBBbK7iv8zvzucQyQJh4PjpTTnTWHw42i1TPHFfsiJuzj2xLyhvbrzzvBM3TZheNZbB",
  "key9": "3aGx7RkVvxabEShpzyu93E1QMVV216ZiDMtRA2NQy3TB1eR5jvAJUUjDsqC2C6LdW6eiKMiBt8ev9xMRoFkiwBp1",
  "key10": "DvSsVRXXBmTBjLXr5cKTgTU1duKLrj3M28h8EH9mqHbcmgX1Zg9mZtvZBLf4ZT9Ur4oPAZYv4cwFxURSEKzyo9M",
  "key11": "5SHoCMYYz36cg5MEzkeF2GEg3ca8uLWKp1njGTZkKeyXqVaMhyd11Hj1oewfcGCic5LmZ6xUomoPQFaSyVKWRAYf",
  "key12": "3a4NACsn12TgypzseHVn7W2EzRDTd5v22QdCMX1pJHjnzvQU9E1jiFdwyEu5BAMxnukgZahBqTb5BK1USh715hq1",
  "key13": "41b4j9WFFSZkgKGBtAywouQtyRFkf4QVEFapMSF1bHCK31sB5Lcg4Frj8Hc8BjxCNBVfB5daT9WYzEFo4PTtz6zv",
  "key14": "5UBwt6gg3xXWEXNT2kGRLL9XBX5s3jPWv4RvzB6vyvm3zDu1MZeH9ty8a6WLWDJbhf9BXhjTvqmmQkT2KwEZ4tYx",
  "key15": "3CKX2CHS3mG6zykx6m8BuWe7ruidhncjqS6zPwf9eRs25Sd6GEBA4ZcvmLrmwzftjxwXTynTSNcTJfKWazBG5vYT",
  "key16": "39ZEwz7Q8UKi4y7swR2deavWFfSbwpUrLCQ8RDgwkwHjRzV8U9MR3rN6HFGPoeW745wjLgKbRguoA2gMG3DPNPCf",
  "key17": "4rPcVt38immNyYRnDuZLs5kzQUyExn628Ei1xAah7ZstnN5V6SB9ydnnxD8ADk4XYUtfupUxNwxskBwZ5Gx53fxV",
  "key18": "MVefkRV8fQW2jKnKQCP8qehp4ERRtj7haXBPBbquNw5Wt8TazxVvtUUveXBySc8t2rmLEJHmYkj13DEsTmeZiZV",
  "key19": "558xBb8dtFiTJwxdiy5KEiHP3bT2ahWkdFPDTPfdxKw3rNG6UF4oi8Ysd6RiQhTzARs9sxTj5JbLMfSHUjB8HfZc",
  "key20": "3NVYzqor1FLLsmyS6jmCTBvYtijqrc1tmVc5Fo2MQRMETLG8WataJJ5vkmfqDQTYw3V9dRb9rfzCj6ys9HmL6QmM",
  "key21": "ZXMhCirBn43TvAm7ZUfzGepBKzX8hdHMHMqp3xwmuEJviPCM5xQeKq7kCt8JLriFaFaiQyYuedyzLP89Jq5CGpr",
  "key22": "37svEbWuSSNhaHpPtPnEEfvNALaxX3EC8EdhKdEow2JpLwJyseUvtwS64FpcSgyRJGvJWoZ2zgehK7oX8FT31jKp",
  "key23": "3NSSzbuLEv3LiJEZDy1jz1pFT1sxBJ1S8vEK5fXdpsAhPoH2QU3xyZRqPu8FbvYqDgSK22rCM5C1b3RjJzpdXLnS",
  "key24": "WUPcAHK7VM9WmQETZD3L53WULL3yQxrU88RahsbrNSFUR5pcDQWwPBr3XLg7a2mrDp5MvG6MTMDGDYV7Xgqh5mK",
  "key25": "3pFFyPBfzLmvk3RnvxyRaLeffBPqpZoRURseozcrx1RND1SVKkHtQdebHVp3JWoPkuSycdovYsuNHkTvjzcr6LTf",
  "key26": "wzecb7oTGvYNVScCjTRHppRtBLHSC6wgd9jjhBLhmSx4tsmbdhgRsDhK5K1AiDj7XiA32cgTrb6zXrXH5KTzFB4",
  "key27": "3dAUV6ognQpoYbwJpvYHj5zCRHrbx8sLLHBCU3Seam9JxEr8ZHApjmxnLJeWoo6mzUXMcY9XH5qsYcJbNFpxj9px",
  "key28": "5ei47a32V91uX7pGH3AUtqmFewwFCJ5a6yHGjZTX3UaDe4fro1z3ky8TZ9pBt6MvF2qdYGuBLozCRpTyvungR7ih",
  "key29": "24ddd12SZkjZtfs3fHuUDaP9eskd1KFdTHK6qC8cX6TyzxWG6EXAzU5tvBSNe2TEvb1V1ujaPk9Zpui4DYnM5zYA",
  "key30": "4qApGEi4pqR2MExhN7uVQpQXpi7bSXeExkWDkoLtGA2qVzaFMYrLNe53mPDjBsGUYepzfTubFuKougTSrQVp2U8r",
  "key31": "2Rs8RQZKuUMmwta677vvuUzcR5wQtckKVKnHWMsVAKa8waeY37RZ2yqYbwtpmpGPyGpMs4xt9s1S4SccYVPoSNS2"
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
