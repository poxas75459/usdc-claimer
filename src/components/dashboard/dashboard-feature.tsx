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
    "23hbTcMGV6xjfjnjDusFV9tAQ6XqnivTcCXNpgwBzfCNkXbSq6q3tkKJGsgKWY6pCWhx9YyaKZGPg3C794W2MCro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "252UuPq9DzUNECvePHZpBaTB7QYwb1MUCuEuMrcdpg8sVNuS5cCXHFku9TmZ6yMX77S8CcQZ2vDFvpByFVgGpdyn",
  "key1": "4ayC7Mos8L7kxFtPHu9cprtTpXxXfnUa77ivHGWWc6b71FiAcmKHEojQdjwcM8LEdRkdN6aqm15ta6Q6Vx24NgTA",
  "key2": "2DzThD7j6gDdNVJmNT47wXFu6aF1YoZ1drRXxhujTjNHfCxNykScKm8DgntXvGSYn1C2GqUgRXhTRXJkj1CMmFcQ",
  "key3": "2UdpKXaZUivg56KPSz7BVMVGaKF4CtoNNvzGfyYMZBMQb8qmCjqmMG8zfxq2QktijEGy2h9dkjjNQtP9TjTyUrHi",
  "key4": "2RP7upEWRF1JWvX8qZkD72gVtHNA3JwMGcDrYmr6mXB4scVMohucaaMcvXmt3TC9oRYngQPjQAdCR6vTFDrdfPBL",
  "key5": "442PqSWJdZ8CvDhkvV9QkuNUGyUoYLpR6AErZqg53WURydwtDKUV61L2n1u65U4Ps5jQwxzWL8PkLDsw845NyRh8",
  "key6": "2Grsiyueaa8MmoxdY29SzfDGRgS5n85Wts1BqV7ZnRyu8yqsMPdmG7ai7iPnHBzeV3TXRKSi3C3LCu7z2rTUQRLV",
  "key7": "2ZZNViCfdrdNYm47vWiyRKDCrepfm3DrgfhPJhiRXfYLwyHMyMuCeHZfJquX8b7w26Ud4Q8Jh1NwsQ5GQMCLKP9A",
  "key8": "2zJgRP6J6otRoUoYi6RFRuURgnFDC4ymbAexD2CdsXGZpctnZDNFFAvkAZcRFya2bBigcWuuEQs7W2mgy3r4Tr1G",
  "key9": "2zFc6CZHWJmSFdLUAH24K8jiGuKA23HWoRdae6SwgW1ecjpka8edXK8UEV68KSbz4FgAGDaWJeRkyFDV9Ggyq1h1",
  "key10": "3AiDgFpwVQxA8tpuPaTaZCpTscNyCgUjTuaR9t92xegypgas37BuSRKWjNZeWSvDy65EVE5xCZSSN3J1XsJDm4nH",
  "key11": "2yU8UBC2oGSTi3X7d3zQ5UiTy2kTV8zPkiFsUrfPdzcG9WYDrZhy8etjb8CWNqdATV6mrDCZ4yQiwuDoJU8EtAMt",
  "key12": "4Pt9K14tnAiZa76rsoNU4eNLmpS49BzK6Ex2Zn15nsALBBrnozAwbqnFD5BCfptvojavGMpXKq4attKmmKNhxsSN",
  "key13": "235MD5zujZ24tbaLKQkZULArU385jL5rfsQG81hZoemuYsAfGYRC2DuP3DzRW9BAAhTPWpM7xDFh6pWpbQJaFY1A",
  "key14": "3CnHHCDQu14B9zEGVuXg5rJGfJVJZcqay9F7gvshqkELs1UmsiNMMpEXGQ46vnWhfF8YrxHtT9yFHj88TG9vuZtx",
  "key15": "Yvnp3pH8Ahb15hAxgeocJVZ2djbJ9Gdwr4eNYfzARAs8HxbkZjo4eo2CfARHSHtmGk7s1fpTjw5fettPenaSxRB",
  "key16": "68ya68ZFrV3j4KrgahUcC4DgK7uJ125koHqX9HEHD7Lzjt3Ue7tNywmZB8A4dDC8bhxpjJozSvRZUo8RLHboaCW",
  "key17": "4ALDNXmKhoCbZp32J28k3i84H6YTGcegdKs1KvrdCKw2FUimGXsrikt82WhchDwCJR2W5zjd5r7D5qoExGVxXB8d",
  "key18": "gZidFtyTmLCYmdZ6GbqTzEYbuZMDZdgdrnzF4StdXRjQZSgZJnvGQxfaZNLgMsfJEunp97tWmdeY8gznDP6oyS9",
  "key19": "4nrcQCQnFTSEbSTozj8hdukJwx7X66cU7Kuy5qgX5S8nBLCwXGcFHG2nNCnUSPhifCtFV3wdESfSQqYuXnC81VtE",
  "key20": "aLfuniFKFbFHJUTmd4Z3dvMNn7XpBRHLBtWN55JJxuj8RMv3BadEpMgw7eaDLmpEhBDzDmSqsCQWq3rNJ5B6jbG",
  "key21": "Y4L4q9Ka8xTCQZFhoWFAe97YaTyMfqjBBQzjTbhJsx3167hffYhynZKf9Q4sfDVvBtxstoywnevpuCzygZE2NzT",
  "key22": "27TJpabKVU3XHxWwAPRbxGdWnkBZKatDLRkMbRci2Ra1yiD19Et4Pp5e6VqD5TK521QWyuFL5FRx9Mynw2h92rYX",
  "key23": "3T6yD3Pidy3weAENiLay4BeS2JBn3sFemhhkAdK2XfiGxqXmWUGpnPcBq4vweJ2hPQUvKq9Am2juwMYegspJnyA5",
  "key24": "3zJSs45ATPVQS7aesrUmwxRP91v3WZL9Gd828RWWyQND6TsZ2NcUwVGaVXdWdsKE4dXPAtn2WiwSEAd8QuZTm5zc",
  "key25": "4gdLRXQQyH5mT9D7JCBDXJfzf3N6FTG3PMJrvtr3buNt8yZEMLXvddRq6BQXULrYViviSrjuG1ALJQbymSKbN7CF",
  "key26": "4ngfoetZeurNbxamPdPvZTWu8N9W2xAt2vMQRszRoeP7w6snujMTTVXmZ3WKBkqdY48pcb7ziTi9WRDYNPcaHBZU",
  "key27": "5wNh8NF6QCbijtdLyrEhCu2Us7iWt7QGs8wwPP1kpLuf3XDx8QTJVMLNagt9Ho9bqsrKXusDuZpxRzLEBuR6EmHG",
  "key28": "4wHcc55HqKxAUHCrF5TLBWPgCPsmwib4qmFtC17JMa8G2n3knH5PQY471rvx4S4w3RKGTY9E7A5ypLkDukPpNWWG",
  "key29": "2iA2UMTuCUYa1DWNePd8dwptgewPTHY4mhHNAVd2Na8pnn73y3MtT83aca83qniJ49ELan9QYPyCv8RxWXa9orMF",
  "key30": "2Bofkzhn6nZcjPMbhtZDXRmz5WhJe89FRmcPnfVmHZv3aPWZYEsbg7u8MtzRAP2PUZUwq8j6NaNkXW5yi6VnWRxw",
  "key31": "48RSCi3oMrqh5P2PEiBQ6XtsAQ456crVNxysV5wkySgzyHdrtVr3JSRGa85TWQuSV4NBzi7Dd4StKXhzTzeqzfW8",
  "key32": "22L5wzLUahdKqkyVKn6tmbdtdQLKfeY27oxrBHbRvqmR6AXbLakSGAGFgk7BCjLBJkxZUMqZQfFQaikLAahs9D58",
  "key33": "wPWiRJ1XNWe4LWF6FsV2EsjDGaHPs5FWvuKLS6tMMqMiYZKXRcKiMYSFDmzPj5kAL8mhRcw6NwzHy9dsBwb8dYk",
  "key34": "3y46rFwHkh9jyntqSDgpso3rdn2te9BkZJbNwxj6k7jNE9aUmpfMN916ELo3RvKQFPF4Pkp73FKoE22rRJFyrT6C",
  "key35": "2kbWtJC4uDZ7oy6eYse19AU4Q11mrSXezWnx2Xs1UAotJ1p3EfamaoARu8tYB9GT4L89HG2oNJa3dqU7sipxVft8",
  "key36": "3kwfZd7atvAfvGAbPDTWQUtKdAbfwSFMBPxSjpbDhC4EKMxc1LCdm7NSQzgNTuzTPkir6rknjZiLfBdtykixwi7m",
  "key37": "5ypjdu6skzDSXKAMqsVTMbUDUUChuvt9trQxaanryE86Xe6jfikr5Wmem8rEHFKh48TpXGZcNaLdgQHpPkCGRCcK",
  "key38": "3f9MWDhMoAjrrrRjjdFDRrQy4L7P8SJrYGSoMnDStmgPWVd6uysU3ifCzCQjxMhGryUCyxp87Eoy1WJqtcuGd1c5",
  "key39": "2jXzEJ8Z8HCrCQJ6qbDMQ1fxLfMzpmnWTt6hzRRPXvwBffFwffCSeLnnNkEsgZmMrqHU6mAqvBwFMEusbptqVMCw",
  "key40": "5hdubSXeSkku3DJo3eXQBrhtRcMenGRfs4ZoR6Ugjsh6UgiBHSgAp9TtZ5VfZvHUWBM3bGBhTMjbwWGrFFzBk7YN",
  "key41": "QTKbPTZseiPXDqrPq7Ena2GRzxMshH2qEcrNeda9Vjf477vX6rJHHR3zqnRZk7xiHZ2z1mtCqXa9E7cCK88aqWx",
  "key42": "4dFZfCuyGSizfaGebK42ANUmpCKMhxK9DUXKs1znjTF8NVNm9bPkwHSyGQ3mzuFnHDo4F7jqfNnGKCRT5SYgxDhh",
  "key43": "3nEixKDFZXYzM18cqivzQ4N8v5hhVzHoLBb2ezxnwwB4bxwaRG3HVQ7TgsSLekYp4gKeKkTyU57jTYuLXjjca5hV",
  "key44": "jKeX8L4HxTA3VNGb93JVcwdrgtwxftWgpXkbPp5qHEFaXFRdfAv6qZ4gPsxqymzRe8vnMCxFZrgcnftqNuCzYzd",
  "key45": "4jNXfzCREJSUgkmbpZ7KxPFuBqWfSxsK88sUdWdp1BxdDewwiL2oWtEuD3EGjusUVR3JWVqsoYoPEYcrgPxd1cNw",
  "key46": "2iSVpDuKShSxKfL7LtVpQyZCdHhFvDNsqRuZbfTDCcvyY42RnzMzXJ9jbLGj76dyfAkCoibJazA6Jt4JAPSbSFy9",
  "key47": "225Drxp8DKMUucYDGz7w25aMdeoSDG6arrHUZoSnkvnjXfgsHpAFmbNERsKYCdn97qtM2tNHfpVCb6btzhQSkqba",
  "key48": "yZ8ybwMewQkNvszMgELDoHQz5sjSvvY8Sqqfet8MwGbKmkRP7iF6n9vAub5phT3btFWWuMumg3fwsYTMa2453on"
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
