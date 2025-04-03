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
    "2bwn5vgcQ1J4Ae3vrCkxEg9Ai3J7gL6YmVKpc8DMtP7put6FaE42ao5szaoo59zZUAGUUG35o4D2iME2QmJuCYvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ocvBLhZCt7inZ4ikYKLUg1G7wCyKxdhY1sPMGajznky8EJQD1ktL9DGwwXy6wNdpMbKCwAVm8iNzeHBE7Js9Jjo",
  "key1": "4pEz4nsx1ADSxmKqu6nWnnzrg2wsTkeed7bWrQMoW92sCcfLHHSY7HFGv2SMwM2rEeygRycxjvkX9bvNuqgqs7sx",
  "key2": "3pGEQ7SiJcBRCJwWGqMf4qu6JG4GWtj6zmpaJaQDxXUM2dJ22w6gFsFHkJZ6cMYjrZWemG5KzNgtBaV27G94P1Tc",
  "key3": "59QBtEM5CqCRpeYCPBz7RYnsRE8PAX7MinAHCDkHUczsgqRJaxdCdHoFiSGjPLUWWVEMsuikdhMhQ6s5iVACA6pA",
  "key4": "5xjBQN5r3ftsAmqGCUpf22GbM2rBDsWtEeYXJFN62vrh6tvuMPgVxuHdp2ApMSax5R3VWTj7nudPbKrgDC5yvKU5",
  "key5": "552hYCV8b9jWySmHdvkb7UxP9hyxKhQkhXh5pdsU7uMigN7vACg1eqybDP8mvxDjzBDftYuhUe5tmqfh2nqTeCn9",
  "key6": "56n3icVJY1CHUut3ymjVxWwtjw1tJ2RUmdDc8YFneFwfoVrQyWmGofkwWxXZN3zzLXVdN5maxmLpMtQTXM8detx9",
  "key7": "5CuQmL3N9eo4oaoyEoTxygC8Z1RVbgHACFKDoLAnLBtBqjvdh54dZ34LwZSBZYmVXLVy3MrjKcKZe4YA79x762y4",
  "key8": "P2zrNPG1zX9Sv2YYDADEu2pYWehZhr6SKzNiSHGJH6X8pf8Cdkw8kQeQvtS15CHDm2faLUKBNxCDLuzm6Umvzjn",
  "key9": "64AGiPmTjikXrEYRbavWBRxcu87A3X9xhqaPgyCCWd6Xf4qcQfytqykxuM8VA3J7TZhQw66TQtvAQJY5LdLStg16",
  "key10": "2vS6QbeKe6DW8BtbwNLqorfxd23AvbHvshBGkSxmJWosXPB2YdK2qBMrmSnk53sseoMiYqHBPAZhWHtdz9vcHhVr",
  "key11": "2EHGURdKDE9jiBwtedheEman6Nr23pv3VEZSy9o5EQ6aL4nJUymrpGGkkaKeVDPSeNMSgwWTzFeWkQyFZYzXJSAB",
  "key12": "65GNEnVrgo5o1Aq3rjByskmqKMD8C8WQY8PWqwN2Px2Z2E11TfEjdqHBuSReivku43AkdcA3VR4Sfmy1uXyT14t1",
  "key13": "4iZZx5preJ38kxmGDJuCNM1xEAFERoRqVDkVaDVHVbkNHcyQVuVMjEipCDYpUWN7Rw9igjfYa7jkbNRTVqFhgt32",
  "key14": "5fDQZ7uLFSrwo11AjGZ7BK8anrSTUWpwmqU4ZqTdav68PrhEhrMGb1MqnakbEGbMRmDUKVFTAaRkyLLU4YUCiEoY",
  "key15": "3rRppwodYompmfd2gwfD9SFWL2P1KF1JMPJPvtfusKXwhkWc3NSYAXUposxoeHBKJEDeKrDszxCfW9T4FnHrhnY7",
  "key16": "3p8z6xnVLCZkHhPCMMrDFqYMmMDYP8PPfJ1y8sMX49NiVdHPwypjk5sDaGhgAtaiknU8J4mZUxWvhSZnsQpRf66z",
  "key17": "2YLfoRZi3J26uzuresrxHKqeJ2eUBrfvMsNptVqfXhpHagGCGFy6GZtQyUzMruv2Mg7CjUr2rAVgF9pWvMTszfFt",
  "key18": "5iwU8UDSkxbu1MjatycBDZUUBCQ9mP7noAsc1Xx8spuU4y5hyMpDLiDDC3qt8vaXKX55bgkQaTP9MFqe7SCzF37S",
  "key19": "5yWmZSnXefXGLKBTHWRQmqSXdtn8smHY22kj5wkebBR6FmnSCFwtFSM72ShHzYc3FKQBU6UwPaphzgGt89mxjA88",
  "key20": "4UnbkvWseJzoHMP1aoHhPPFhTzSaYk1WR3M5AnpVarLm8KqsXyYt26BfnsmVQ8McrM6xrVhHUKFNiKUteZcJgn1J",
  "key21": "WEVWabN1KQZUUikiHU6oRaT2U1nnbExnpGHbJdUn8n2noDBed8864MHTHVnAjBUZzZYkAyvgVntqyKbFtL7QCv9",
  "key22": "TUWsRMfLyxEEScaJrtHtUorXjn3KzhzpP7W1gzXJL4RqEEWFT1djcAZoHtX4KaAN2VT1k9gs4uu1uXtsQmzs5SQ",
  "key23": "2ig2bkYCKBPQ5J85JUiLqfBoWhahZv8g7UeRVc59SdwnUYDGQyq3EcrBEFspNh5bZLdCETmzMQnh8XFg7Wcd7Z4z",
  "key24": "jYLR8CpYxHgyNHqFWD9NSiy2U3VDRHJC7BJ19FkJBFYktvKdze7gYy22zt33mEiHoQj7QdzARYnZbFFMu5DiMMa",
  "key25": "4gd5bRYFtePAJNbf1KY8wqp19PX5os6DNanrY5hLQAaJqt8b91s6wqpMJWtW1Zmi86wbXv6DMj2LT4qdc8dD67Qz",
  "key26": "fj7nkXifpN5a3s2HPtj189S3F6qnf5WHSx7SASjW3V3c98AvEpmaawQQanmz23Enw3fBMBiY86rWnaeoZxqWJcX",
  "key27": "4MNpeTCiui9fkuF24HNvBF8JdBR1EbkaZ3UkSzWT2zWKLnpQbZHRLfkA9YMcFHtr7hk255Lu4hcUtXjVYiAo6Bv9",
  "key28": "3kdAceE4iwm8qujPissj7cddnL84iFYSDWzWS3Bz81YPb96iqF7JkG1fXq2tjDMzdFsNdxQZGhdXxWNqX7y5bYqR",
  "key29": "28Vbmb7ShWC2cD4gGMWb5CtvFzaUdcRhDLuHQQFKVJ2exTPGpHMdQv9cqTKEH5wCe6VXKZCwzMgUeSS42UUrg7bS",
  "key30": "2xhZVExdGUX3gcjcFVSFBbdvHEqGxaAKNwA3ne7MdR7R7Qy3WnRUMX94bDVDmLV3c3czWjCvPpfXv77QcoXxhdeD",
  "key31": "3b8P9axxz9sKNcoHEwQy6w26agH8NcQ2ccSiLzioX3zSBzwhEU9veyr7QTcgUcev4ncm6c8NuVzy6Zx3XjvJc3ws",
  "key32": "5hbWLnm1NoMEsDhEbvSM5ySzfEientmze6Jhks2BEx173FwoCyiD4gFj33v5ZkN6TMctk1wMMizqdEvHXqVsrRcd",
  "key33": "59UgX1pA1u29kkeD98ue22S1KX3bm2oicgmgvxyf1BPThyZbwQJC3fFJPFvsDRSU2JP8CCd3QVkbpCk6N5FAB3SR",
  "key34": "Ww4qVB7GNiYTgVgsvHG6oBNdhZeMcC4EqB2H2sHqoccrX4Sdvpo6ZUK93xQ4GXhAuaj7FaD3JURCYefaAirKxQi",
  "key35": "5pfsBwjGmrvP4UBHt7vtgN3V3MiZRVNFwpRFy2zWHyXzHFguMMH32NSkwSxcUce5PL6NubNQYpzHiefPJwoh8e3R",
  "key36": "4U9SiN8Bz2oJ3Y4Tn2f7inHuRsVNJk9kyTRoKiGE5z8pK5dCsLE1UEdfNsvTyyRwfd5cbckgoDx7xxukxgkiYuc4",
  "key37": "wuYPymhr13VXUyCBGpAzHhAM5fZm4r92qfiutvjVCeEB4iXpQ1YmLfs4bzS3dTeApAxeMdFRzsQJkuGMMyxNCNt",
  "key38": "rnBGGwfnSDuFDyytMjb5yt6CDyzxZ7gT9soDo2EUpi8vNY31kj4Nxk3JjKxiXhEQuVxznbGT6Qep7t3zUGfNV1k",
  "key39": "CxVPiYF88q9N4tRCoXBZz3puacySejbdpZPmy27XU933NDT8JrZWQBTApPNs478HL4XKgSvoYzT344kUpoBAphw",
  "key40": "4a9v4A6d2phDAbc5M8AG2ttH1KAZWT4iHnvmDCX2bQVNw3otqzHaHsyFQ8FUfVKz4hKwQnVqrLwbb1eKz7EaprFb",
  "key41": "5QKJNxGtHu2aRv6xsetRKUtdUbyY3RLNsKzv1K5BTts2wfPF6cB1bTDtXAY3fouQ3rrjUxBocFLF7cecgFSaC2bp",
  "key42": "5ia6nkMLx1vehaLYvw7MxmDqZaTHqJd8aUpkC8M3HUxAer4PecVSgxeQwrhqTxSk88K2dsLCrsor14Wk2G1UNsBo",
  "key43": "61LjPYJBu2RBNNGy1w33ahBgajcrFdFL52hvcSbeay9L7YTPPwLQ8SiixLDw4XvSZ9a1ZvrqZ2cMZQypCmG3aSE8",
  "key44": "SBhijWM9NLu8yVZySw6BsXNebKuBtFCd4ML5R1SNKsTut4H4RKjXbpA2BAEaMiW9wbj1jWMAaa8xqaWZYXEDoX8",
  "key45": "62LWzgeYYFGgDN5bGjBLvZUJMfuSP4LghU6PnEpJxu1k9RnG4mjCtmBy4VbdWV8JKqhxie9a7ZgzEQTpR9z8WeVz",
  "key46": "3MALcDQjb8ZH8fM8Q9xUoL5fwgS69NBKHhTskFx3XMHU4CvZPV3rMSz2aMjQRo6q16pymQHMhzzX7cZmKYt4Vdtj"
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
