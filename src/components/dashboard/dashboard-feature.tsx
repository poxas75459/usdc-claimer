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
    "6791aeSZHJDRszmrKRoaYKhwghEug6bSzdVifi5BgMNfnTn5MaDYArTPe7974xpJFvCru84BCHM5jBcM9MNZmiVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cZt1L7mMiExwUrZadzQFHqaee6KNDLAUByf9R9wk3inJLLQnFKWGSYFCRFC9UiJha5uZgavvMcE1SF76V9fTPJQ",
  "key1": "39P3PNKPSPsi3Wkn4d8WyAYR3ebJysFQEgoVeKZhrARgv4tZXD5PDhYd2YoWPbs2mXC3f3Wfy7HTm3uMf9ALVDCv",
  "key2": "3cu3wwcwjmzYNYV8soDrrJvrMc485QJBQ8hSDZGTG7cnNikPfYS6TrgsYD7CnNFztUd6dgVAYZsvQUo5fYEQ35YT",
  "key3": "2jEqeJD9D8aLwtwgZTTM1wphzXRRAdnPq3CtgfFbyBEfUTW14kD6y2xFEZrGx9WTJNWWpCnRsXAdNTA6SmTT2FE3",
  "key4": "5EPBfxXhD56ohAmRVzC7zK4ZKyHw1FyqV3Uaz88wjk8TnF12WafJh3sB4xGr4h4stz1DJKYUzAECvaSUtdN8VQM4",
  "key5": "4mcsWy28yQ9wuoXNT33jFo2GkYggPh24rC88pQaJNdbBADczQagSTegsUdDHjKPNXqQjELeBGJEgcxtZz3y4baJM",
  "key6": "4cF8eUViszSP9vdrWfESx4j9o8BgzcZry9SzPcytm7hcKhxdZTMoKHCaw9fZGFawvuvyXJjZ8hsCMwGJHj3VYxPg",
  "key7": "2ZjWh3AMLFs6YsB57uNUdaDis8FQLcZWm87Uv5ZjsPisrw1xMu2ywVvQLy1DK3nJRSxoh2M2NcD4YSC5z3ePzMVC",
  "key8": "4wYnho19AWiwpVBGEoLuYyBZUSjky7eb79DEV84Dn7co82Sc6GcGSu1d6xBD3hfNPEYjm3AAdJStLGFnvY4UjJDt",
  "key9": "SvBWo5Ygm3eLKJGotBNdQKpHSA4cPEH87gFKqw8VKA4wkataDrEMnZXrrcReHq6rV5WVG33Sy43hdB86d45AGFH",
  "key10": "2wUQm7dK4udycAkTNxxK67Lr2dKU3uMZxvofZRZFgb83KHNdubpqRYCRGEURAi2tUCzCxDUihFYwPBLUsmgmnt5t",
  "key11": "39Ubaqwk9xvjzyq2npMgeyNayoMkKrero8s7KtPdntKhEPrHzMEmC1uCdjMiqcK8TGaPkSvgzA9qzA7QDMiN9req",
  "key12": "JNWmEEWXi7C85UaKt5DmJ9Cf2wSe56KJAh5FxDgC5YRF5S9YjU6AP4R1FZ6fFZHdoYZJcUXXc9X161QemQrHR2R",
  "key13": "5W7gJNy4Z1bZHedKeTMhsX3tgV4HcpurnEp9K8Wh6u9eRbsDo4w8YbVBUm4pa72GVJXedk1TrZeTg7W7XdoGYaAp",
  "key14": "5Lqmryx3haaBCVnthVMcyrc5Rdc9FwwutCLtGtVVGrrhmseX5rU6JUVJmHwKcXbfsT8KUgtCTiAqCPNtPoK965ik",
  "key15": "5te1DdsonzZVMYerCiLB8bd6xFFKBcmpnuJFRmsYcBVJtY6WUmh9K8rgcYbt6wJdZrbDbwgPuHq43EJ2J4RDWrqU",
  "key16": "4WpeAxiNPKwUWhrdM9Zrd2VS45zrLqdKybuJu4DoeEH49FvjS6MNoHkPRb4LvwRgM7FRoZXJYbWj8jJDZQgtjYx8",
  "key17": "PvYy3pTh6k9tfymizPj5HRPUQQSnRyVDiytiiJWhYZ7vf6Ps3SNvkU8s5Dy7Sf3VWYjQQxhy5cZZSpQDDftcPCT",
  "key18": "62deoKrc7rUTD6adVPTa1JTaTGEWDzwSrNd65VxFHPFDuND46nmSodoNDzhRCnVU3wWgDam4Z7Syvsmm8Xg1oKZ7",
  "key19": "5F5UPBbufQzp6fSFKu64V4x6qjrcb61Lozf94yQtBYWevDnHtMnxqv5gN1gdis3k2udDpXvhqrFjXn9o7HQsY7Yv",
  "key20": "5v1Fu9i4xNY2vb1LvKz7Z6t7WtAfFefTz2DvK86onJGT6dtYcqq3CrBJ5XauGiTYwUScjRs2fE4JMT6fnr6x48yp",
  "key21": "414PUS5F35a5bDXWL8DE65HnhSMtMp8iBALHPzXin8u7vDEwT7JL8dBDGMKCEznY2VgcDzJX3udbv2xXKEbDUpTz",
  "key22": "3jKHXChiU8nz6fq4x3bgxt3Bwki4GPpCrkWgFoSB3zzU8CkoHiq55CkDhF2ruoi63WcqFqJLVDazjMvKfzvGpYfZ",
  "key23": "4cvbP4QTfwpgXRvt2pqorG7pY4AAjkz6jg8BpTAVFdgbKVUtVQYQ6Atnp7F1GtmHJBMDDrEUXvuDLtn7fEswLNY9",
  "key24": "4Z6opn8shqngQ48G7jUvTBA4QJxSxu127LbpN7ySs1CJCtLDA5gWF4fDQSws8SRMT1NiDacnGVKxaFyJedYnqMd1",
  "key25": "EUnEmtT33CmAYk7rF1opawVvJgHqjgoytv3UW6GAJzxS12o68cmEAFQTbSDdzHYU33caDQVt8MQ5oGnwQ98SvQq",
  "key26": "ygLgWWcUHCqaSpF6GAYbWoavDR46HprRg2BMMGYBjZHtYihqyrcdautFeW69b3XiNh9XhaqsbNDgPXxXJCuGPW4",
  "key27": "7J77oCCCkHT1NDegKDp92Bc9kLKRa1QpuznGWRWnxJcG3wXK3rwgs3ybJBjiC3SwsFbdvirigphCxneWXukBoS8",
  "key28": "2arSSz75KP6UWUr5NtBgHDH5g3R3jkzhXQXZec6K5AVbbaygR61YtLxaxDtTzgP3pYTJ4dhfwiUMbS7K3ELJpw8Z",
  "key29": "4xFUftJxXSm68k8ap3q16K7RckV9nG37XnDs1VpK8hqLsoqUitpX5RdbVqkakP6PEVryAzk4mZBpWRrVTn4D6qpQ",
  "key30": "UHoNow9cWDDPSQFXmWrBBgD1n7ykqKDxR6HVpnq7hJsdfqZfyEBGbba29X8xYvzWres7pLm3dNMB69pv7a1kc1a",
  "key31": "3DrmTZFygFPkHTg7uD6Zw9ojWv5wxHodYGnQKG46uxGNr1e81FTyo5o4KZo13znUA5ibiiWodNJXCVtCLKY6oszi",
  "key32": "2L6Th1RjaEjGwLFwBbM8y1KzV2ee1V3fjVq8d1FJzWDzfWeL9hAUwuzPhVkUNB7uaDjFjpgKHEmLif8SGWAUjAdL",
  "key33": "38uraZaifvk9dk5cUevfuHw1diUqgrsj15MTXdY7gEzM4ENQpGwVzFj9yoHieBNbtMfAVsne2yN8gx5ECmPj4You",
  "key34": "3Lqb32Jn3yDLSwh2M4hshHLfGSUQmxSkCvDJsHtsFvnKnGsH8YevKtHP3ztxKNiXDzugGWpQjrxHxw5FqJ3DCDaj",
  "key35": "4PLxMTo62zLYrS4tLdaqDW8yKyjj9fidk2czBq9N5p2AXMxvZCiTsdjEhAfuzKcxspuRf4uuvS5LCgEJiVh2wZ5F",
  "key36": "4xKkWBpp54NTs5RSUbo1R2s6EBizThsgefTD3o1mpSoPEB3x2WgCMfR5tbPNg2xcBFfGs1BgGqjvjMPnsC5qmb6f",
  "key37": "5FYW9NG1iWVPz963dEfSyA8YbEhj8yVfRWsr9HokXC6dRrHECt2ZsRMMZtmmTTnvija38TXwhmxb2AMTpZqi65uc",
  "key38": "3ycf6HtmV3ujGN2n8oRJRXrYmwszZQRFcuncqMqgD4uD6BS3rWZV7oDhbTDVdmpsX7aLbDCBz1LWom7ft1PG7JuS",
  "key39": "5jXze8GUhbYyxEikkURCW5dhSDdehsnHXspTMVjU1Ltr57Jdihmh6kbNTHF5Brfsie1nZRAciqhkpuX7jLPniL5f",
  "key40": "5wP8asSf2en4zUcwS7QyPokfXXfRMWUkQWQ4jrzNEZtKVyc1YZNhfKkCHdBvuHbCM7TkpGTdYRupBS9AuDi3TBPc",
  "key41": "4ZQ2ezrZRTKobWQeesF7qe8MHdJ1B4fquephzXS2Jpwws6jN6Mbdz772qrANB4JhLQRDCHWy2aVaE8aBQE4vmnmK",
  "key42": "5exvXoPAPoqmuVCgqPYsjbXqt5gU1jdPLXmZvD8MZS6hDazfYGpgb9zmmxWRyqUsTCFFkMVzsNLLsjzjezPsJjDN",
  "key43": "4QxGmxToUUNGDKD7vK3LQ1esy8J4B93GKkLCMACEAFHQrTwioDd7t2BNZiWmak26dJVgtF4TibGAj5jTQPpV36R3",
  "key44": "5no2iBSCAH5maRZetdKN4kSLEdrm3v8UF8az7gj5SXfnJAfDJBZAEvzynZuZ7UWRpmDfXTz4hf4QzxMgyHURDwhd",
  "key45": "4uJiNdwVhP3xuRQuuyk8bbKfQe8fnPJkzRVM1TTHGyJCPWitvF93nGQcDknPaoDeY18Cn7Y4kv8Bx7n27AEFVMmn",
  "key46": "2ZDzoroMDqrX9jctojPN7X7jEkh7DhhX4s2gUSVGQEXxF9HjN6PKtU1sHA7MX4G2pRsnz9MRDB1nC8dbZB4skNdF",
  "key47": "52y1wp74TmWA4QKMRTrVBgYxCWq4fincpEDdcSt9DELAX9CUi1XACzq2XZ5iTtaqVBjWSeJjmXCNFBr9SU9HZfwL",
  "key48": "5Dfj4hQejRUAnHggUsNqXfnk35gQhdcw1QTAdp26WbDXCguZQV8nesErmDfrH5rCj4KVxvFJ9PVj2E6JYe8iLpix",
  "key49": "3LX7Mr55BYbyP9hgYstLAsT3qZad8QtKwdfnGZFciSs17KogL5nSkrfcBdh6JdqGks7o3gaDreZ33pyXbFSRR8At"
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
