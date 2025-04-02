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
    "5pkFELT3uTLFactqvRmdczRPW6EkS5eGscnZRphMsDLFoV1Sf7t6RVpgSHWUNcs5sCXpv5jhHHnU1pzpfRFtCLy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UpxuR7tZXAf2ijMtHpDTBhVHVAo7dhrFAxxhvUKFQM855cdB4Yt6E5cunxwPEzC47ngmtkDtatbDDXTYzx2HbXi",
  "key1": "FoUHd3AgbLPyEyo2EAgDKwGaeykq3KLLaUxDWUJorUs9ANt6dGGQSGgJWSJe7ni5c1QRyNK5oc8jZLyTZRitaqR",
  "key2": "4umdmHTNm1is2hQruAhZwu87G7k6Cp8y4vcXJ9EkpPQJyujyK3LNkecJ9KFBau1GZUCD8pg6JcCQkuXCd3W1QBnS",
  "key3": "3HN2KKjSPqBdimHALPKo76YC1dfeTDwnMGnp4uNgUKVq6FmCYvPk4yXEpAdVD7ykshmLULcCPmqWm4DWRa3G3wmX",
  "key4": "23N25oXcoA7TaH2EmfGXqeLaC6dk4oAdN45qyfrTu8FTJZ3RtoBjreaPrnPCJLPJEZe6oDGBZRt6kgUsnFrXXCvx",
  "key5": "2Jmi9Jr1K5WQWGAm718UqDPYgUA4y1Xa6jXi6brA8ZJCrtd71RxB3o6VnC8hh8CdmW7x7nm5AsAZ8EuzFtW1nmP4",
  "key6": "9mxgNc1v8DjywMzbrTvekymm1BTY3oxUQ5jNawrTWffzrxcJvmmCKQqVTt9zN5NmXom41n78iaDE3cW7Fi1EaWR",
  "key7": "ugfBPTQ8BGrApSYHDxUigpexmz6NfSBYoJdDZwu9ZuerSWFKwRwgkzKyubrQcrhrPYYkeCr8eRtfzdgwYWk8hnw",
  "key8": "eJmmZkBFHJkBwdqo4qgneoxgcLAxTDpUEXcJMzd7qnvBXBxW6PUcPDgbdwushCEvdEW71frPpqavWgStWRYeMer",
  "key9": "43Y24UGyvgC8CEiuNrSJqBGV1xxVmnonaVFgaAeikE3koYDmaocT6CRgZ5wGoV63AMPCp1tvFj8SrBfwNANgDiYS",
  "key10": "5jzZJSrMzPsbEgJvYtnheYxHbGrHqKzVXvEGbiRkrMfMy4JHgHUUZ7UoxRUC4FiPxr7xsT2JM7twfNfrQxsWHKLu",
  "key11": "5jYAeBarP8Y3oqyKXyMnmJ4gLVL1GRBvDccqW4dSaJbRrhkeey1ncsbTiozbbdvxP2PArTCsU85AQvDM9ffZ5fxs",
  "key12": "SVkGq7gcuV2LqGfEvDycQdznLuirVmJWKy43u5nyuYvepd4QEDm9qcQaQoCRpB1i3gnhoWyCqhr4UKCyQwBrLLG",
  "key13": "3Wp11AUjVU9VRGacwUrDvht89muAAR5o4NzYF6P8XyFuqdf3xGAF9AsDK6ycA8zedHCDZ987eTZW8MvFQ4PrySd4",
  "key14": "4ZWMwBmZDrVamDKkr1JrB9HG3zPfLKh6jnR3pdkRDmQ3fcwiSWvxzkSMuYRmBmHW1hK5zxk5rxNVYM48kM41PxNd",
  "key15": "3rFbsEWyBcg7HJB6cqg7tTT8S91Y7tdukoRaQ8W8BiRvkKsqciGfhVcS56VvzS3FHtmLKNGNjwWU9LeNEUAJj7jD",
  "key16": "5xJ3VVnTkQYRvBU7WcRNJ65rBTXs7j9kUq2VnTeb31VQaFqVVVnMBsidzTPCgGGAv1TtyYs1FzDNB2XAqQkUMeAe",
  "key17": "5Bsg6RdVccuTMUxK5tCgRxSjvT6Hn5LgxaGdP2qsHxp4f4TBxq2a319mG3sS72htAGX7rRqsAvf6wHoePnyh62R2",
  "key18": "3nsgwCKPTGNx8s6fT7DEj1V8bMA1vr7qzVkusfwfCNsd9GHr7uLyg5Xa8NShevL7dEDPiha4wQrrgCCVmPVMHk6W",
  "key19": "5gQCVShZUf7TbkrxHsnkPZWc2E4EjFQAnfE4sXhL9jgszJW4LuV2DVDLNSSMuZNWHFruQAMLBmoog4XMS2guK9mM",
  "key20": "3TtwzaXMhXAWV6hmPrZDgHLhPXiw3igFZd4kRQEhjD6ZDnppCiSUN3WktDSmcd7KpEHXP52A6yaWt2hHRUecypKU",
  "key21": "3PRxBwXHsZSV4SFiFRimYt9MLLvaJdzxN92CAfinkFpWJzAGbeyE2sW8qngFVCLjCzSX1Ams5Xe282T4YZ7o9sHb",
  "key22": "UizCcDzKJsMLquam15uHyWxV5HzAaR9cnMfaEcQXe2CKAXphM1puUNgsk3DrAPJJxZxpFB8Ff4WGB1m4ADXZxR9",
  "key23": "4CE8nF598ANXcrpNDSka6rzegm3wneFkDyJVXcbrSxgRxf7qw6hhfaFoyYghmGP1FNYRHTCNfGvL78EQe6yf2fmh",
  "key24": "2iZV2yJVSEYHy9885ug9LJt6DC7ZdHrxmkSzp9HZHc31U9yh3PrJmJGXcrogXEepKyDr5M9dGaJmym3NnRnsxRmq",
  "key25": "3CZ6paD9prUA8McjrFihvUBH8RUJV82svVa4e4vZuUNLy6uaP9q1nz4tq3HbMmniXz3iJNnmKs5ZZZQmVwuP4JgZ",
  "key26": "5a5R6VnwNN1g9NGrMHJ5R7Z3UNfWig3mM1PEwKYEnXGyiokd2KUaVMWhRCGXrUX1Z1oN2gge2E5xgiEByxEnpo8b",
  "key27": "2H8ikBYGySntzxAmB4mLYq611TedYTCBAmNVg4q3Fk9KqD45dmmyVyHpXNRYW7153dQd2PxpHXJ8GRTdJU68XeTq",
  "key28": "4X4ta4HiAKeSwSs7FUbzV357AK3vxuwHRUnv55JV3hot7WBQMQJCLuSpHa9FSFYYn1fkPmHYEJ468N3GoHD5DSRC",
  "key29": "4cMQkAtDpJuakUuLwv8HeHzUzq8sGCoJ4b1saYxv2muEmWVYe8yqi1bfDhBvhgnZNXawYYYT2syfMDQFApQZRTTn",
  "key30": "4jH4WZabVENPGPaJSANjFN8teZqyTaMqaVWEKFfwWiL4oze6SRSGm1w52DCnnpvXQWFEJZ4PuqJYH6RifcLbXarh",
  "key31": "W5eLdYQRusuXsB1Ao86XgzbW5payHVy1uapKMWBh5P95gtiL1YTyMT2JuY6wNB9F6aDBiYZdsTDWPaESGcjK3tY",
  "key32": "42Zh8QqkUFZGj7aUVAH6vX1pyzwnfWd2ko33aegMSCsGa98Go2zoyaApxAUjZvmaVA2mzni8KtRsibksD5wx2Sgh",
  "key33": "67j7PhXwKyxdG6SdALAougApg11DdMn9Na5fTxPsPxPcKShxWbH1xtf16MyDt3CSP7ehaEN4fAsyF9fHoHa2Aagy",
  "key34": "3qHQS6133Ec5uiZDetBxn19jqFoNVvxyeYTXfSeJJouLh61JdMc53ekD8ViSftyrywcA7MbEJ4Zd9xF5Rcwwe4pU",
  "key35": "4SAJ7o5ftwgykZjAst98ffFfZDuuQWqY8AFox19KErww7iyTo9aJczWsPG6aSZxCPj9h4mV7Z7c2b7eJ6Nx8Nm5G",
  "key36": "36NveMnwqjEu6k78cxt4GVxCgmHYe8be1ox6YEMyAUVcAaCGcxDq2TiDrstrXabAM3nPqeMGW2bGwd35xMccA6cU",
  "key37": "qZYan5wQH6xMohYp8LWMRB4nU5qQur83nypQmHK8v6VULz9vcGch8Ac8Nn29wFTMXctbLgCN8WEcHF788nwEorp",
  "key38": "2UQRzibLgNLBLjP4AnTFW69JZidKg37hmQNNLoTUMFnZVRunhDrro9btpDALXXg4mBMopnyPVuNaZhYQafRxEhtC",
  "key39": "PfoRMhQZwDRNFR4ZVXCEZD3tgMBkRacCUSKvdAr5FWcFbgmusd9JgkTyaW9gNF9J8ocqqTuD29TGSMRMkukrJiH",
  "key40": "4AmmK2uxx2fsQwWB3tCJu3caeixK9Rcm49gPAZbZ6gdP7qYpmEvSGPVzvMBL3Z9WWW21Dg5gkdgWwa2yv4DBtdek",
  "key41": "5rYH8pixzeEZrRFhQKXHZ2hFdPPoUZkjqabiLQsMZpAbznKbuuEkMznExjesfvQeHWGRToH54DHK7EnNEWp8tt8y",
  "key42": "cXUzByeT1ca1PWdrSTVv4b6iMLd47PNzzyXkDN94h1Gdah8r6aPuicR4d77wrrmxeQdQck5swEkdhmWAu4eMkoX",
  "key43": "5v4LwxPADwjyDypgBSMkrHd1AGhGgJWgUKXA3bgaSEU3cNobWUJFU7hJXAmnY9rroPYDvAXijrwJkW6y6seRSTRU",
  "key44": "5rkm1JHQNhjkQKqqvTWcVqaX8n14XQmpcZAYchmHHHrJsDQ3e49YAoJ8jkCo17sJGEvBDeJisJv9uMC3wr4XCvb3",
  "key45": "2R87fuGHJcja3QfmKpXz97yfTNjmFgZkZphSw5yx7ChLpAQaq492WdHaB6HF5pPhq5XQrYqnnPaoyWCYMdgH4G9a"
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
