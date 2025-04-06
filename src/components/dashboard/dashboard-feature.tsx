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
    "5XG6Gq4KfU6NjLCgGVuWXuFimGRnJhv3XQFrVqf3dWQ2Cc2dv5hFyPgvxX8Nw1Mq6LMY1U4TLYjSAyWrYmPB381q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63prCvniUMSN8km9z8g3JCERjboFDpb42hoDwgGnd8KBq5yLqr3D3K9Lzaug7cnMRtEdc8JHQZ27wJpjkQXAeeBj",
  "key1": "43r2YntYD1D4oJ76y4zLiWVp4kQUzjxPDW6GxU53dA5Bzkt59J2UJF1X62ouidsmEaN7fzHU2mnYWRxQfztWriKi",
  "key2": "4mkyZcyJ6uLSDib4u6iMyzsf4FV5SSiSrUjNwk74FPQ6zBKqFToNjhTsVntQBBQwit12Be2QUqMThZ72nU3TkfSL",
  "key3": "4GsnXKUAoYwx8GqdjtunriygmuqP7m8a8yzmmeDJrmR63nCmfumhU1R1XLYdbqoDxTVUQ4TiXbHmkKBxe42Abss6",
  "key4": "UG1Xz7BNC52FHTbVZrse2xb9Zyvtx9a2BW27bBvGyGWm4jQg9ADeDy19Gu8ekhsruTvAbTScyXGWdM2NZ7kAHpD",
  "key5": "4rqYZYt8nRFZvYjeW5feV6X4e7hXAbbfnvstBXbwNNRVeWcgBeUiYay3KsAtq3dySjWe9A3Api1z3pN7BYQQas4S",
  "key6": "5Ay9iquouReZxWPEdRv4GTAAADXvNX8oHnqCG8i5ghdUrrag5HAu1oiY5uxTAdJuxMenUGXyPPDVMTV8SZ5Y3sC3",
  "key7": "PSxGhVMURCbGGWzvViiwpQtwem9sBpchJXCmub7VrXpS2rw5iDNvknDEHxXJtJdSfipiA4fLsFW43iXDgc6DsfQ",
  "key8": "3X6oMLs6e7YXLvfuyrXYaZNQ6ibE8HSjUcZJTzpXNUWevH8AS3RKhQWHpP4LRmXa6VpbDpXRUApSWa5ZrbzdC28x",
  "key9": "3tohFpujyajPf9PSjTi4aEibv4b9yBbL2SLQ9urjAgnLsbUqDgb32Ap5Q2oUQeWfzs9ktGCkLSbzQTrtwdEVggGz",
  "key10": "37DZaKfrcQgykc8vwiWTaYVvYV5FT3zrixVSS1DiBse2ZLUwXKiqY9g87iSFNPy1xk692jaZx1s291k3NJqpQqN8",
  "key11": "2UeoNtPXSfQ7JvtEMgXoDDCPqETr87Dt4yU6Sb4ZezZ2Av8PYxT42AAVypu9Dc9FSBHUPsJQLRq72YVz6ACC56sc",
  "key12": "5hPb2hzXyov7KsncgKQurx8SV9rDeup9wfMNoaDSvYzpedPodwAjujn5yPqgYA5eiGZ1KvoykmfoZ2NxXxSBxto7",
  "key13": "3yBgCqbDiVee1iawN77mYshF82gJBEkRduc4azisBKjxw9k9RheUuSRTFib8zwhvCTBhXSgh5Xi3ce594dZttVDm",
  "key14": "4H8X8saVNyPq5zQm4eRNWFFVwoYNsBcVkjmZzSpjtfQqEdV2wuFvLxA2ybBrX4dsmwdeoSsbGcefNvcZPXQa4epE",
  "key15": "4qVWUy2ejsgwzwuyCxuKXh9STra3hBgvDCMN25rxUanwKawCS2ZNHB91DAXK32qaw1qrYHPWo5dK6uy2qTBC1wPT",
  "key16": "4zBZTfLdMDtptLw8q5mp5JcRsyeLyeLSn6Mum1joTQ7GTfNYn2ZxtUCmVQ25JWmRuwjSqyQU6Q7FR5P5smSsYQxD",
  "key17": "CfuV41hX82LNGjekJ3dp4ZSsseB6NHDRFAtHBVQfNWSyRKtbHPkNXU34e5yUiGSebGCjSxedjo68g8uVbKFy7y5",
  "key18": "3C8Vv8YAgjUTYahj8wbXSEgHkjHhgHKaG1JxUnCDyhNcdBLYhAFuSZ9Gdsj6yz7qZKAv89sif4EWao8Xg22SQQXC",
  "key19": "25XKrxw1knwox8WBPeGiFzzC8T5Hacqtenf8v1qiA38C9NULEfiMTgGUbhBUCz5iCCHC4zAZQorA5FL6GooGeeK9",
  "key20": "55FLo8WUmMv1odJSc75vZU3s2p93WLr2hgtb4aeTYTRHn5s4TvXHNaMpmRWaQ9Tnc9YeAkCs7CGzQfz65UyzcQM1",
  "key21": "a5UCVttGJNQ1fy7DEMJ4DszQZ9SxeiGEUfTyikQmHmEM4aTyyYyDWE2kK7TxjTumh6Ay7YeWNLbnjBe5c1MuFJS",
  "key22": "TXVfTXDRcTSEXNztPgX3KQY5CK2PDy5PoHo8zdp3EBxkk3XUtV2XDXitxqebh7ZZcocqdTNkAvdvQ8Rf2v8jgeo",
  "key23": "3xatgSk9F5hfCDxMGGqY6g9ue3KrCRBK9LUQGqAaAtDfdmc82mVy3ZnpQiGVEX89VnGTMZdWvEfacGVTLNorPy3C",
  "key24": "g2zn1NVCdAkm7Qcm27gw7WuHN83Su5sh1f5wXJSVfdDTE1ekCjUNUsHdCUMFWaD9ELdKGdpTzgbnyi7j66T6c3W",
  "key25": "31YZcxPhhGct696mrvpHdFM5gFNZmZ3ZPzuoJkDbB585y2v1AA2g52ymDT6UxAcJQdQ4C9LpafJ2gEVkmaMvTxjs",
  "key26": "3uwQqqav5UgNhGaRU5Pzu8D65ALziePMcnC4nbuDMCNNTSNn1gqLi97YGDuYN6thrL6guogniVjmwZMmJ2kfnvBQ",
  "key27": "3PZaY6hMmafaGMPtGAAT7WVH4u4YR5pR5Hf4VrFAemuE4JvQ1swpqBMsEoNyKmEkrV3rrjXtPeYcW4m6KypuJqaP",
  "key28": "fmjmHqAaPoRAEXDtRWRhL6KAF7sxgsLQ5uVqrg1jHuEKhFy5mSqD9RrPALr8npxR8gYC9vWm6XPk3wJ3Mwy4TZD",
  "key29": "3J3L2G8Tyx4egBdVhguhKicEyTprtczg1R8w6X3Yj3s5hjDusmi9kgGGyAexqNJDDqUAxyvt3ncbD31s33TTTvFh",
  "key30": "3fubThtGnqsr5sXpRZoAii483yXMURX6yVKcvZCbN41XUTvapQLTVXBZQoUK7xVVjmgB7NzA4FJZxTCGjH4RTCuv",
  "key31": "5vtpVA4uLdNgnJAkBccEVZuQYq9gWqZaE4mGRW22qEx8RqLvmZx1FWmrpMgcKHvB8T6TWLknxhJjhPyTTGkyrH6Y",
  "key32": "2ekvVRmxYZ7rZtZSr1QqRbxrJRANv7z8MwxCZDVozaSx5aD4mFyZpVv5st2z2mkXj4qkjdfwcrQv6azoLRvjb48o",
  "key33": "5tEEgerfos7AFvcHh7KByfbWnSu3ZFokycMgJCxBuCaDjan2UX9NGZkwTeTrAeWxgsFSPFzsUc3Fcp9o21UkXrZr",
  "key34": "2k7cVuJ6d4aE8GMpc3UFZEsUwTfT6vxrmtGbFWCemC5RiCK9dnryfYpgBj2RZo34AdtsqHhaRy2HtSwG9aKdFAzV",
  "key35": "2qs8APYrFa2Ft4pafzi3xxPsjPot6qaAMJU7aWC8SXyz9BGmAJbJJiFDsWLADMnbgPiEachVd7h8jMX174mUpapw",
  "key36": "3ZPJXekt4UkHfkhx5RuGzByMweaTxqY2ij9XBuhBnVS9vAr4NcimiRiDciBSYMto6zxVAcbHkxY7WcgEvC5W5NRP",
  "key37": "4iPLSdhYNTTsqtLkCgiVkfiKTRSN5suPtd7zndzfyrMSMomU8TgTippdNyGTDPCeDqJCEcpQXwUSUwDPNzXHuzFH",
  "key38": "3V9k49uhu9ex73J8mg2T8eD2N72hGmo7Yjn2bcmw7SHyXRPsUb3HZUKDAsZwmwJbRwunKN51xN2nVr7y7WrkVU7W",
  "key39": "wu43h6ZqKWJJUhwob9DLJ4gn7fpiExPMjLKpoqgwKwvYrZk7cK4c3imd3bZskTqzSQWqy8E7Pf5s6w87izAKfjf",
  "key40": "37XmYtUBo19yaPrTsqMBF3ENhR5ZZdJF8vYyWfwDAVXRkPCDHnFw5LPHfYvVXPSBEgTb66XrapDYPp6nh19Smgnz",
  "key41": "384S1mPzvJjorEHdXUKDeqyArfa9fdWE6Ctnb9yuRMDRs2zkrcQ2etJ6mNx1vJ3N1WmGSopsZMyTUurBwZskg1Uy",
  "key42": "izmiWpeH8ND9GuC2XeZWWWbHgFLFSBu47yg31f39cBNpqVCoSYobg6yDWfGwyKULRRUTvmZNBGnT39nvzK5Wn22",
  "key43": "5hTMu23pbmuhYTJNGv4GhomBBrFT79KQZsucZRiZx6788mKwH65obFKkeU6CiQxLjX34M55QFXjnUVDwRZ5cCsjt",
  "key44": "mQ2z9Eepr9cXV5DFUwk9VNfvp88fugdD8Q7DGnzMTHxJ5XAbFyd5uXSarqSVLmJgg8QLdF4HQ4pdqTwP9xXK9Hy",
  "key45": "4DWu2Qumzuxd1otqP65MDeYK8yMRaDTZp2WraQn3jDJuoqpGuUUyKVuBvoCF2C6Fgtywog8wL6GkFqimrYURzrHs",
  "key46": "4A7HFAyji9jvBfoJymzy6F59nUTm8d6huaD8uzJCqojz4aecoavtVS7P4YgRm3cabX7i8Nhwg7fCX6CuuvmnmVhY",
  "key47": "2J2P6sZfSJWkM8Ja88rGYW41V1GFZkNEbjXrvDR9NdbVaQ9BURxYdwMm3ufCRpTWguAGbpKo6WN7XGUF5z5EdZi6",
  "key48": "7CcZ6VdbUsgnrmP2YpN7DupZ6CF6Vg3FdHxY1BZMymVgqYYXW6Bu9Z59o1SoLM6QjzMhuRfhis6hQYHXQ4Ske7L",
  "key49": "4LvJzZNxmXGJRdK6K92h9HeydJRHYJvp5t48vN3R9kzYgK2W4W2ALnZcCSs8uDfegRSsi9Mkdr94V8tvHhSzFnyK"
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
