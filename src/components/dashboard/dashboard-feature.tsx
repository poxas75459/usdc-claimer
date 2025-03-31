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
    "27Wueh3HTJz6xFXpWf4nPCkgM2RFtTnQsSRUhkUPkGbKrCPTai52wHp4mxN7c1MqefCdwBt5xnztVJ5Kgrv1FFDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uvfR7hBF8zcgk1MPFzdTj3Afa3dtWSSXzXc9nMerpdxnqSj1vXwGv86YmyxmGfpKFEz8sfTDHTU458LqSA86rNx",
  "key1": "4phzEs8VozpDC8QZ8jXqrYe1hje7PnrsQXV8Hy5hggfmn5LQfgXKXU9abxhr1cRKmp2zPcJ5EdU5aJaExZVx242M",
  "key2": "375j7qSSEJZRSmDKAS9yd6RLKgsP4RdYCEDS1Ewji1UgQb3BsQbXr7vhMaF9a6ofPU6jM3jciE1xucbdBU1mPnJD",
  "key3": "mKKjYVKd7kD3YfwTxrtwguzZ3XEWZDFsvVH9a9R2T6mm3KJ2xgjhA7i6LeosLnqYRBuqD1Sifive7J2xb3uRPnT",
  "key4": "3T2RjNPD251AiL8YgACLKx9UgAPjvaYVMBkGWRtwNe4wqALHebshaHMs6X6Xeqgw7JEusm82uXbHdCAySkukFnn1",
  "key5": "3aFy1EDzRdnzHWSZEQh4x5f7wk7HWKEhuG5kb749KzHvwDk9EScxjjHYiPQyqW8nbuvcPrD7PeEacK1GSsP6McAx",
  "key6": "3BbE5LE56AH1oeoeXg2xuTHDhBYpfqKCnGXVuN6WYhRZzz6N31tvxvvr3c7MwMrah5ac7Kj18YCwMevaV6azZpii",
  "key7": "kCzwdSgspYfcofB2Bgm1VygvXovCE4fqX95PHFLfsBy45f4x3RhuLoJLxCUgqSK9wYubKBpMJwuXEJr7mqAxeSo",
  "key8": "3JbeA7ELe7ifEiUvhp1K9KFMRAvcG5MfMwqqn7oPqMXpPsznX7ukLS2RErRjyPcWa7wPsQCDEDmoR2Kwv5VEjHy",
  "key9": "qcs9oA7V78SB4Uy8rnN4rw4N9FeZthkWg1K1N6tmAuCHCDJxhjL4SoyCN4sH1Asf6XS8zoJBt2E6Sz2FdmYYo5c",
  "key10": "4PhaZx4vDaiv5VbHH7Y2neBDmagVYK9E87ECaqfjrmW8h68SrWDxEG3xMQmjXi4F9SvqAwLLD9j9cuDPUt1kuxKY",
  "key11": "2e3GgbUtdx3cdSSFzN24WayG7HfNgWPbvgQD2fbsbw15fixioVeGp6PCyhnxSs8jnib8WkvBd46jzHALMnqweUz9",
  "key12": "Sq9716Do5j5nfxKpnat9dCLEjZiWSbtWzrKxqVazjwdwpbBF5wx3fYT3f6DWYkBW6G1U24SWaGwXACAiBiSrNvY",
  "key13": "3WFPmhbUdrWXxyKiwF1vqvAauvLYQDqseASma3LGfxmgZkGvzBJo4XszHQxrSJHHqPDx14a6rcSFuz3GD4UKW4PT",
  "key14": "5fU9J3aT3q1xVx9prESjtWmNSCywATm7hQ24Dd4mkY7xCCG3eq4nGq7t35YyE5aP68PyCfMaUxMmidFvtKFgqFiY",
  "key15": "5oW2VE3f2f4i78UhBAXyiqJ6jiFrfvoZvdpS4qEk8c9xEzGtZ3vudYwv6UwCqEgRxFDsUZrPhxBeR3fiCWf8Nc7M",
  "key16": "5vKnPerNwMBMAxQtowPFsx7pQf6xGtb6feW8xuwzf5Hgzyxo2YAF9gfuRbrbR8YyiXMfpYdDWfJr5Wzc5MZcK2no",
  "key17": "3Y3dWESdydmFYfYrgEGpWo9bf1PtYRG57xXHhFJmLqa1pam3J3qVcsrm5cboFXcxDjs8uCZUpsS3rSYEYEe5BrHA",
  "key18": "5pVpPouL3YfuZkUrEtmP82VWJ38MoyWfMRbtHX29jSbmo7MHfDqTzEjsUrW9qoT3GJCsd3C3xwcCMLXNiwhwuy5c",
  "key19": "7WGn5i96pRTrhUeDj9V1Rxci3iV1vqEaTV4CBVZgXSmLUB9Ao1fdCWn2rrALRVx5PYAUFHNBQZrAg1TjnpdfQER",
  "key20": "4jXrivfbYTwH1EhpNq3FLbK22Fb2dTJ4PdscBJtSEZ5eNpQx3bCK96NsJ6G2ND9um4hvYkgvbN1qj4uBPwh4eUtQ",
  "key21": "5uHdPzm9sr1ZLxfpmyCLxp6jqmz21yefYBh2e3HBrywCyEXUusWSYUbFnbTD9CuZQniuBVw9tTJgA49kH1LRXmFQ",
  "key22": "3DJaQPTT77hyv9MFFPjVVh2m221f3VNrGN44DaVyLRJJNiYaWb8wmJzRT6hgYX73gGJwTg18K1AKE4hJyCDWabVs",
  "key23": "8PNH3pj9n9Uv1JQDSz3Uuvzx1Q53WTtNXf7J5v6VBRtT9KN4dq6u1H4L68AYn4Bf3DBvZVhiuw2RoqBdaeEoBUL",
  "key24": "4huk5n7RWjszZDikWzdpoZmaLAoHh8P2FwczxbfoCneP4W9EcRnN7hZHwFXPsFL7i2USfwWnyneHs3HqkRYTee4P",
  "key25": "rQyhq9pZ5qobvZxQFUcoWEz8W41RhTMKKQvUeXpk78URxyDgs5mEaJKjMZf8cGKJdTFKXZmiQi4FLmRJp3wKxGa",
  "key26": "64dhEerF8pNnjWjQ1BmoM25PM231ve3aDQ3JCtW1cVgZpdPQVifpz1qwn5FkCZSBzkLVr1qmytmAvmb6Hzb92Q4u",
  "key27": "46qNzZRFWfPTb6k8nqUv674rxcgRAMmUozTMCddDbVBwCJobHDT88tYNZ8xBoZ7BNCjaVJ6koKux4ezP2U6uaNsP",
  "key28": "4cnp5Z6Wh9xSC8XRJjBjHMBMh4K7Ynz8WKZjtrdQz1EGkaRrefCJFbkAJtbCsiiAhoGQsiVpCvFSmfuMV1gjuj1e",
  "key29": "4ZGzZGkxxun4836fgzmMeMFn13X2P4vEWETre84XENHdKxW2w3uoVCUpdzYz9saBzJpLLDMNLPU1ktR19pH1AeDE",
  "key30": "5DtDgkFyiZ9jVZcH4V2aHssG8MbmuWYJys8zf3TSFzVREDda78mySAnyLzFrMtLa2WFEcQSqk5VXofHtyw1479uT",
  "key31": "59YZ44v99atPbkRjCYFNXH8x9FaU1w8z1mYkGURHzHukiQ3mb1Rq8osyQ7BfGbDaXdYMcPGu1k5ezzDJzaajwxio",
  "key32": "uqTQjpSW7gNgszwzUyzgaJUYgUNZ5xHYNykAC3FTaUSLWti3ZcnxnwNPi8HZoD6DFmTd9q6kw8Kq7J8tkzgjSC2",
  "key33": "294J2NkhosPjoh9joFzsi7AQ1nFGpDgHozsr3KbA2iFXMctmX9DdfzgzjNtEiZmHf1eDu1GtuR2YijGR2B9BDQfY",
  "key34": "4yifMt6sVcWB4FVRGG1F1JTVALWWBLhQFBtNkJZQcxLfYiAh9DU15dCX48CmNrDUbzfg3WrfcgjTAFBCqe1DF5dC",
  "key35": "4xPXjyFxN4HKipuk7aTMGfpEtjpjVuqtLkiqnGALAoM1wbfzwuzoF7UqgTk8k8mo1qYEh9Ae6GKHWr7eDzSYG6po",
  "key36": "3xfNZJZ9kW7TScxrf6kARZECjyfCcnyY5rAeepEneJpXwDcU1jE77UeHR8A51Dhf6Rz9Hp1iWofhg2dnKfUTCb3F",
  "key37": "2Xxj2ZpUWNs8SjuwrsPMwafaHupQvzz2c4GcN71Z1EpuGkrZmLxWe2pi7TBNz2Ris8hn7CfYPFPCoazNfnhFcuSi",
  "key38": "4wvMVTXkoKjAKdEf3YfDjtbm4V8HJCVCNUUhqLHqiAk1RozGDmh5F1uoJQ9Dgv9NEghFj7mfPrrnr7nRP7Uh8yNm",
  "key39": "5aAyZkZD5EkQkU4FnyguYfftznTSWg2d453eaTe5U6MVHUzau3CBhUxakKtaxhy34xnocdG11dvZRFVsdRTvxRqb",
  "key40": "5cege1B4owEq23QUNTEpZRwFjBYPomtuqKMxS93zJ7K9udXVcTLJbsCgPPTxjrd1LdoxmcK5izTebP9Rmec9DRSd",
  "key41": "3DL9Bv3mGPyqyoYqxxb9iqD1MoJZ1oZWqVEcJeceJ3R7o5ujeyKWN7JSH6AK4w6RBBPBHmF121zSbaMi2wPgM1zn",
  "key42": "5SyQahL9K1tX9ZJYo2GibdB7bHj3WGnw9by2aG4Y4fxGNbWN5CtE2uvySdNZk7tUS3q5BZtx8YNhk4DYNWGVwPt9",
  "key43": "4YRaVRNMHHUMRwmH5zXemRuGXcKQ7X4MGEXSmzCxUByXFDCZkCKDgLTYBXQNvRPrrFXkymCYCbgVL4ApKPi3gK2x",
  "key44": "3SyM4rP8zmWgdKRNcZ2PPYDAD6gMb47TAvSLXhqBSi24MrPW2uHRB2WujHFuBpVVJL6N6BxbXnq5gcRvjAs8hV4X",
  "key45": "2oAxC47WcR2mgypZhSbxcENreh45gMoFFzU2DDJhqfNzYo5k6PkaLs1tr2ZYPAF7Btb2Xkcvsy2ZDeR1HUjj6TMU",
  "key46": "2NukGyH41MxjuhssjDzg3AXTC9DFExNy5tzFmBFseuTho34tpYxHzpiw4PW6UdUEe7Xc2ntP3yhQ1ycAzCFrDVLV"
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
